const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const externalLink = (url, label) => url
  ? `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`
  : '';
const weekNumber = number => String(number).padStart(2, '0');

let saved = new Set();
try {
  const entries = JSON.parse(localStorage.getItem('escape-files-saved') || '[]');
  if (Array.isArray(entries)) saved = new Set(entries.filter(id => files.some(file => file.id === id)));
} catch {}

let filter = 'all';
let archiveLanguage = 'en';
let toastTimer;
const archiveStrings = {
  en: {
    week:'Week', allWeeks:'All weeks', topic:'Topic', allTopics:'All topics',
    status:'Archive status', allStatuses:'All statuses', sort:'Sort by',
    number:'File number', all:'All files', original:'Original covers', saved:'Saved',
    published:'Published in archive', planned:'Planned in archive', 'archive-review':'Archive review',
    open:'Open file', save:'Save', unsave:'Unsave', close:'Close file', view:'Archive view',
    empty:'No files found.', retry:'Try another search or clear the filters.', reset:'Show all files',
    pending:'Original cover pending', originalText:'Original edition', summary:'Archive summary',
    source:'Official source', post:'Original post on X', paragraph:'Read on Paragraph', cover:'View original cover',
    stored:'Saved on this device', removed:'Removed from saved files',
    archive:'Escape Files archive', weeks:'Weekly analyses',
    archiveNote:'The archive includes original editions 006–011 and summaries for the other entries.',
    snapshot:'Publication status reflects the archive snapshot of 11 November 2026.',
    range:(count,total)=>`${count} of ${total} files`,
    explore:count=>`Explore ${count} files`
  },
  de: {
    week:'Woche', allWeeks:'Alle Wochen', topic:'Thema', allTopics:'Alle Themen',
    status:'Archivstatus', allStatuses:'Alle Status', sort:'Sortieren nach',
    number:'File-Nummer', all:'Alle Files', original:'Originalcover', saved:'Merkliste',
    published:'Laut Archiv veröffentlicht', planned:'Laut Archiv geplant', 'archive-review':'In Prüfung',
    open:'Zum File', save:'Merken', unsave:'Aus Merkliste entfernen', close:'File schließen', view:'Archivansicht',
    empty:'Keine Files gefunden.', retry:'Versuche eine andere Suche oder setze die Filter zurück.', reset:'Alle Files anzeigen',
    pending:'Originalcover ausstehend', originalText:'Deutsche Fassung', summary:'Archivzusammenfassung',
    source:'Offizielle Quelle', post:'Originalbeitrag auf X', paragraph:'Auf Paragraph lesen', cover:'Originalcover ansehen',
    stored:'Auf diesem Gerät gemerkt', removed:'Aus der Merkliste entfernt',
    archive:'Escape Files Archiv', weeks:'Wochenanalysen',
    archiveNote:'Die Ausgaben 006–011 liegen mit Originalcover vor. Für die übrigen Ausgaben enthält das Archiv Zusammenfassungen.',
    snapshot:'Der Veröffentlichungsstatus stammt aus dem Archivstand vom 11. November 2026.',
    range:(count,total)=>`${count} von ${total} Files`,
    explore:count=>`${count} Files ansehen`
  }
};
const germanWeeks = ['Starts mit Whitelist','Gebührenanteile für Ersteller','Netzwerke und Suche',
  'Preisbildung und Wechsel zur DEX','Plattformeinnahmen, $ESC und Rückkäufe','Startwoche: die ersten Schritte'];
const germanTopics = {
  'creator rewards':'Gebührenanteile für Ersteller', fees:'Gebühren', 'fee options':'Gebührenverteilung',
  networks:'Netzwerke', 'bonding curve':'Preisbildungskurve', price:'Preis', buybacks:'Rückkäufe',
  revenue:'Einnahmen', presale:'Vorverkauf', access:'Zugang', discovery:'Entdecken',
  'first steps':'Erste Schritte', watchlist:'Merkliste', trading:'Handel', launch:'Start',
  development:'Entwicklung', 'after launch':'Nach dem Start', 'public trading':'Öffentlicher Handel',
  'fair launch':'Fairer Start', 'anti-snipe':'Schutz vor Sniping', graduation:'Phasenwechsel',
  overview:'Übersicht', sharing:'Teilen', utility:'Nutzen', platform:'Plattform'
};
const strings = () => archiveStrings[archiveLanguage];
function fileText(file) {
  const translated = archiveLanguage === 'de' && germanFiles[file.id];
  return translated
    ? {title:translated[0], topic:translated[1], body:translated[2]}
    : file;
}
const weekTitle = number => archiveLanguage === 'de' ? germanWeeks[number - 1] : WEEKS[number].title;
const topicTitle = tag => archiveLanguage === 'de' && germanTopics[tag] ? germanTopics[tag] : tag;
const topics = [...new Set(files.flatMap(file => file.tags))];
const cleanSearch = text => text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');

function setOptions(id, options) {
  const select = $(id);
  const previous = select.value;
  select.replaceChildren(...options.map(([value,label]) => new Option(label,value)));
  if (options.some(([value]) => value === previous)) select.value = previous;
}

function setArchiveLanguage(language) {
  archiveLanguage = language === 'de' ? 'de' : 'en';
  const copy = strings();
  for (const section of ['#library', '#weeks', '#reader', '#toast']) $(section).lang = archiveLanguage;
  document.querySelectorAll('[data-archive]').forEach(node => {
    node.textContent = copy[node.dataset.archive];
  });
  $('.filters').setAttribute('aria-label',copy.view);
  $('#close').setAttribute('aria-label',copy.close);
  setOptions('#sort', [['asc',copy.number + ' ↑'],['desc',copy.number + ' ↓']]);
  setOptions('#week', [['all',copy.allWeeks], ...Object.keys(WEEKS).map(n =>
    [n,`${copy.week} ${weekNumber(n)} · ${weekTitle(Number(n))}`])]);
  setOptions('#topic', [['all',copy.allTopics], ...topics.map(tag => [tag,topicTitle(tag)])
    .sort((a,b) => a[1].localeCompare(b[1],archiveLanguage))]);
  setOptions('#status', [['all',copy.allStatuses], ...['published','archive-review','planned'].map(value => [value,copy[value]])]);
  renderWeeks();
  renderArticles();
  renderArchive();
  if ($('#reader').open) renderReader(fileAtHash());
}

function poster(file) {
  const copy = strings();
  return `<div class="poster week-${file.week}" aria-hidden="true">
    <span>${copy.week} ${weekNumber(file.week)}</span><strong>${file.id}</strong>
    <b>${escapeHTML(weekTitle(file.week))}</b><small>${copy.pending}</small>
  </div>`;
}

function fileCard(file) {
  const copy = strings();
  const {title,topic} = fileText(file);
  const marked = saved.has(file.id);
  const cover = file.cover ? `<img src="${escapeHTML(file.cover)}" alt="" loading="lazy" decoding="async">` : poster(file);
  return `<article class="card">
    <button class="cover" data-open="${file.id}" aria-label="${copy.open} ${file.id}: ${escapeHTML(title)}">${cover}</button>
    <div class="card-body">
      <div class="card-meta"><span>FILE ${file.id} / ${copy.week} ${weekNumber(file.week)}</span>
      <button class="bookmark" data-save="${file.id}" aria-label="${marked ? copy.unsave : copy.save} · File ${file.id}" aria-pressed="${marked}">${marked ? '♥' : '♡'}</button></div>
      <h3><button class="title-button" data-open="${file.id}">${escapeHTML(title)}</button></h3>
      <p>${escapeHTML(topic)}</p><span class="status ${file.status}">${copy[file.status]}</span>
      <div class="card-foot"><time datetime="${file.date}">${file.date}</time><button data-open="${file.id}">${copy.open} ↗</button></div>
    </div>
  </article>`;
}

function renderArchive() {
  const terms = cleanSearch($('#search').value.trim()).split(/\s+/).filter(Boolean);
  const week = $('#week').value;
  const topic = $('#topic').value;
  const status = $('#status').value;
  const shown = files.filter(file => {
    if (filter === 'saved' && !saved.has(file.id)) return false;
    if (filter === 'original' && !file.cover) return false;
    if (week !== 'all' && Number(week) !== file.week) return false;
    if (topic !== 'all' && !file.tags.includes(topic)) return false;
    if (status !== 'all' && status !== file.status) return false;
    const translated = germanFiles[file.id] || [];
    const haystack = cleanSearch([file.id, file.n, file.title, file.body, file.topic,
      WEEKS[file.week].title, germanWeeks[file.week - 1], ...file.tags,
      ...file.tags.map(topicTitle), ...translated].join(' '));
    return terms.every(term => haystack.includes(term));
  });
  if ($('#sort').value === 'desc') shown.reverse();
  $('#grid').innerHTML = shown.map(fileCard).join('');
  $('#empty').hidden = Boolean(shown.length);
  $('#results').textContent = strings().range(shown.length, files.length);
  $('#savedCount').textContent = saved.size;
  document.querySelectorAll('[data-filter]').forEach(button =>
    button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
}

function weeklyArticle(week) {
  if (archiveLanguage === 'de' && week.articleDe) return {...week.articleDe, lang:'de'};
  return {title:week.article, url:week.articleUrl, lang:'en'};
}

function renderArticles() {
  const copy = strings();
  $('#articlesGrid').lang = archiveLanguage;
  $('#articlesGrid').innerHTML = Object.entries(WEEKS).map(([n,week]) => {
    const article = weeklyArticle(week);
    if (!article.url) return '';
    return `<article class="week-card">
      <span class="eyebrow">${copy.week} ${weekNumber(n)} · PARAGRAPH</span>
      <h3 lang="${article.lang}">${externalLink(article.url,article.title)}</h3>
    </article>`;
  }).join('');
}

function renderWeeks() {
  const copy = strings();
  $('#weeksGrid').innerHTML = Object.entries(WEEKS).map(([n,week]) => {
    const article = weeklyArticle(week);
    const count = files.filter(file => file.week === Number(n)).length;
    return `<article class="week-card">
      <span class="eyebrow">${copy.week} ${weekNumber(n)}</span>
      <h3>${escapeHTML(weekTitle(Number(n)))}</h3>
      ${article.url ? `<p lang="${article.lang}">${escapeHTML(article.title)}</p>` : ''}
      <div><button data-week="${n}">${copy.explore(count)} ↗</button>
      ${externalLink(article.url,copy.paragraph)}</div>
    </article>`;
  }).join('');
}

function fileAtHash() {
  return files.find(file => location.hash === '#file-' + file.id);
}

function renderReader(file) {
  if (!file) return;
  const copy = strings();
  const {title,body} = fileText(file);
  const source = SOURCES[file.source];
  const cover = file.cover
    ? `<img class="reader-img" src="${escapeHTML(file.cover)}" alt="${copy.cover} · File ${file.id}">`
    : poster(file);
  $('#readerContent').innerHTML = `${cover}<div class="reader-text">
    <div class="eyebrow">FILE ${file.id} · ${copy.week} ${weekNumber(file.week)} · ${file.date}</div>
    <h2 id="readerTitle">${escapeHTML(title)}</h2>
    <span class="status ${file.status}">${copy[file.status]}</span>
    <p class="label">${file.original ? copy.originalText : copy.summary}</p>
    <p>${escapeHTML(body)}</p>
    <div class="reader-links">${externalLink(file.x,copy.post)}
      ${externalLink(source?.url,copy.source + ' · ' + source?.name)}
      ${externalLink(weeklyArticle(WEEKS[file.week]).url,copy.paragraph)}
      ${externalLink(file.cover,copy.cover)}</div>
    <p class="edition">${copy.snapshot}</p>
  </div>`;
  if (!$('#reader').open) $('#reader').showModal();
  $('#reader').scrollTop = 0;
}

function updateReaderFromUrl() {
  const file = fileAtHash();
  if (file) renderReader(file);
  else if ($('#reader').open) $('#reader').close();
  document.querySelectorAll('.site-nav a').forEach(link => {
    const isCurrent = link.hash === (location.hash || '#start') || link.hash === '#library' && !!file;
    link.classList.toggle('nav-current', isCurrent);
    if (isCurrent) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
}

function openFile(id) {
  if (!files.some(file => file.id === id)) return;
  if (location.hash !== '#file-' + id) history.pushState({fileReader:true}, '', '#file-' + id);
  updateReaderFromUrl();
}

function resetArchive() {
  filter = 'all';
  $('#search').value = '';
  for (const id of ['#week','#topic','#status']) $(id).value = 'all';
  $('#sort').value = 'asc';
}

document.addEventListener('click', event => {
  const open = event.target.closest('[data-open]');
  if (open) openFile(open.dataset.open);

  const bookmark = event.target.closest('[data-save]');
  if (bookmark) {
    const id = bookmark.dataset.save;
    if (saved.has(id)) saved.delete(id);
    else saved.add(id);
    try { localStorage.setItem('escape-files-saved',JSON.stringify([...saved])); } catch {}
    renderArchive();
    (document.querySelector(`[data-save="${id}"]`) || document.querySelector('[data-filter="saved"]')).focus({preventScroll:true});
    const toast = $('#toast');
    toast.textContent = saved.has(id) ? strings().stored : strings().removed;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'),1800);
  }

  const view = event.target.closest('[data-filter]');
  if (view) {
    filter = view.dataset.filter;
    renderArchive();
  }

  const week = event.target.closest('[data-week]');
  if (week) {
    resetArchive();
    $('#week').value = week.dataset.week;
    renderArchive();
    location.hash = 'library';
    $('#archiveTitle').focus({preventScroll:true});
    $('#library').scrollIntoView();
  }
});

$('#search').addEventListener('input',renderArchive);
for (const id of ['#sort','#week','#topic','#status']) $(id).addEventListener('change',renderArchive);
$('#reset').addEventListener('click',() => {
  resetArchive();
  renderArchive();
  $('#search').focus();
});
$('#close').addEventListener('click',() => $('#reader').close());
$('#reader').addEventListener('close',() => {
  if (!fileAtHash()) return;
  if (history.state?.fileReader) history.back();
  else {
    history.replaceState(null,'','#library');
    updateReaderFromUrl();
    $('#library').scrollIntoView();
    $('#archiveTitle').focus({preventScroll:true});
  }
});
$('#reader').addEventListener('click',event => {
  if (event.target !== $('#reader')) return;
  const rect = event.target.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
});
document.addEventListener('keydown',event => {
  if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey &&
      !event.target.closest('input, textarea, select, [contenteditable]') && !$('#reader').open) {
    event.preventDefault();
    $('#search').focus();
  }
});
window.addEventListener('hashchange',updateReaderFromUrl);
