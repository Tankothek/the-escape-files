const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const externalLink = (url, label) => url
  ? `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} <span aria-hidden="true">↗︎</span></a>`
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
    snapshot:'The File documents the state of the series at the time of publication.',
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
    snapshot:'Das File dokumentiert den Stand zum Zeitpunkt der jeweiligen Ausgabe.',
    range:(count,total)=>`${count} von ${total} Files`,
    explore:count=>`${count} Files ansehen`
  }
};
const germanWeeks = ['Starts mit Whitelist','Gebührenanteile für Ersteller','Netzwerke und Suche',
  'Preisbildung und Wechsel zur DEX','Plattformeinnahmen, $ESC und Rückkäufe','Startwoche: die ersten Schritte','Offizieller Zugang'];
for (const [language, locale] of Object.entries(fileLocales)) {
  const {rangePattern, explorePattern, ...labels} = locale.labels;
  archiveStrings[language] = {
    ...labels,
    range: (count, total) => rangePattern.replace('{n}', count).replace('{t}', total),
    explore: count => explorePattern.replace('{n}', count)
  };
}
archiveStrings.en.file = 'File';
archiveStrings.de.file = 'File';

const englishSourceLabels = {"de": "Englisch", "es": "en inglés", "fr": "en anglais", "pt": "em inglês", "tr": "İngilizce", "ru": "на английском", "zh-CN": "英文", "ja": "英語", "ko": "영어"};
const strings = () => archiveStrings[archiveLanguage];
const coverViewerLabels = {
  en: ['Enlarge cover', 'Close image'],
  de: ['Cover vergrößern', 'Bild schließen'],
  es: ['Ampliar portada', 'Cerrar imagen'],
  fr: ['Agrandir la couverture', 'Fermer l’image'],
  pt: ['Ampliar capa', 'Fechar imagem'],
  tr: ['Kapağı büyüt', 'Görseli kapat'],
  ru: ['Увеличить обложку', 'Закрыть изображение'],
  'zh-CN': ['放大封面', '关闭图片'],
  ja: ['表紙を拡大', '画像を閉じる'],
  ko: ['표지 확대', '이미지 닫기']
};
const guideLabels = {
  en: ['Start here', 'Buy a token', 'Create a token', 'Understand EscapeHub', 'Reading order', 'Previous file', 'Next file'],
  de: ['Hier starten', 'Einen Token kaufen', 'Einen Token erstellen', 'EscapeHub verstehen', 'Lesereihenfolge', 'Vorheriges File', 'Nächstes File'],
  es: ['Empieza aquí', 'Comprar un token', 'Crear un token', 'Entender EscapeHub', 'Orden de lectura', 'Archivo anterior', 'Archivo siguiente'],
  fr: ['Commencer ici', 'Acheter un jeton', 'Créer un jeton', 'Comprendre EscapeHub', 'Ordre de lecture', 'Dossier précédent', 'Dossier suivant'],
  pt: ['Comece aqui', 'Comprar um token', 'Criar um token', 'Entender a EscapeHub', 'Ordem de leitura', 'Arquivo anterior', 'Próximo arquivo'],
  tr: ['Buradan başlayın', 'Token satın alın', 'Token oluşturun', 'EscapeHub’ı tanıyın', 'Okuma sırası', 'Önceki dosya', 'Sonraki dosya'],
  ru: ['Начните здесь', 'Купить токен', 'Создать токен', 'Разобраться в EscapeHub', 'Порядок чтения', 'Предыдущий выпуск', 'Следующий выпуск'],
  'zh-CN': ['从这里开始', '购买代币', '创建代币', '了解 EscapeHub', '阅读顺序', '上一篇档案', '下一篇档案'],
  ja: ['ここから始める', 'トークンを購入する', 'トークンを作成する', 'EscapeHub を理解する', '読む順番', '前のファイル', '次のファイル'],
  ko: ['여기서 시작하기', '토큰 구매하기', '토큰 만들기', 'EscapeHub 이해하기', '읽는 순서', '이전 파일', '다음 파일']
};
const guidePaths = [[27, 28, 29, 30], [11, 1, 4, 18], [12, 6, 16, 21]];
const readingOrder = files.filter(file => file.status !== 'planned').sort((a, b) => a.n - b.n);
const lastReadKey = 'escape-files-last-read';
let lastReadId;
try { lastReadId = localStorage.getItem(lastReadKey); } catch {}

function fileLink(file, label) {
  return `<a href="#file-${file.id}" data-open="${file.id}">
    <span>${escapeHTML(label)}</span><span aria-hidden="true"> →</span>
  </a>`;
}

function renderLastRead() {
  const file = readingOrder.find(candidate => candidate.id === lastReadId);
  const container = $('#lastRead');
  container.hidden = !file;
  if (!file) return;
  const [, label] = glossaryTranslations[archiveLanguage][0];
  container.innerHTML = `<h3>${label}</h3>${fileLink(file, '#' + file.id + ' · ' + fileText(file).title)}`;
}

function renderGlossary() {
  const [labels, ...entries] = glossaryTranslations[archiveLanguage];
  $('#glossaryNav').textContent = labels[0];
  $('#glossaryTitle').textContent = labels[0];
  $('#glossaryGrid').innerHTML = glossaryTerms.map(([term, id], index) => {
    const [title, definition] = entries[index];
    const file = files.find(candidate => candidate.id === id);
    const showEnglish = title.toLowerCase() !== term.toLowerCase();
    return `<article id="term-${id}" class="week-card glossary-card">
      <h4>${escapeHTML(title)}${showEnglish ? ` <small lang="en">(${escapeHTML(term)})</small>` : ''}</h4>
      <p>${escapeHTML(definition)}</p>
      ${fileLink(file, strings().file + ' ' + id + ' · ' + fileText(file).title)}
    </article>`;
  }).join('');
}

const formatFileDate = date => new Intl.DateTimeFormat(
  archiveLanguage === 'pt' ? 'pt-BR' : archiveLanguage,
  {dateStyle:'medium', timeZone:'UTC'}
).format(new Date(date));
function fileText(file, language = archiveLanguage) {
  if (language === 'de') {
    const [title, topic, body] = germanFiles[file.id];
    return {title, topic, body, original: file.original};
  }
  const translated = fileLocales[language]?.files[file.id];
  if (translated) {
    const [title, topic] = translated;
    return {title, topic, body: topic, original: false};
  }
  return file;
}
const weekTitle = number => {
  if (archiveLanguage === 'de') return germanWeeks[number - 1];
  return fileLocales[archiveLanguage]?.weeks[number - 1] ?? WEEKS[number].title;
};
const topicTitle = tag => localizedTopics[archiveLanguage]?.[tag] ?? tag;
const topics = [...new Set(files.flatMap(file => file.tags))];
const cleanSearch = text => text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');

const sortLabels = {
  en: ['Newest first', 'Oldest first'],
  de: ['Neueste zuerst', 'Älteste zuerst'],
  es: ['Más recientes primero', 'Más antiguos primero'],
  fr: ['Les plus récents en premier', 'Les plus anciens en premier'],
  pt: ['Mais recentes primeiro', 'Mais antigos primeiro'],
  tr: ['Önce en yeniler', 'Önce en eskiler'],
  ru: ['Сначала новые', 'Сначала старые'],
  'zh-CN': ['最新优先', '最早优先'],
  ja: ['新しい順', '古い順'],
  ko: ['최신순', '오래된 순']
};

function setOptions(id, options) {
  const select = $(id);
  const previous = select.value;
  select.replaceChildren(...options.map(([value,label]) => new Option(label,value)));
  if (options.some(([value]) => value === previous)) select.value = previous;
}

function setArchiveLanguage(language) {
  archiveLanguage = Object.hasOwn(archiveStrings, language) ? language : 'en';
  const copy = strings();
  for (const section of ['#library', '#weeks', '#reader', '#toast']) $(section).lang = archiveLanguage;
  document.querySelectorAll('[data-archive]').forEach(node => {
    node.textContent = copy[node.dataset.archive];
  });
  $('.filters').setAttribute('aria-label',copy.view);
  $('#close').setAttribute('aria-label',copy.close);
  const [newest, oldest] = sortLabels[archiveLanguage];
  setOptions('#sort', [['desc',newest],['asc',oldest]]);
  setOptions('#week', [['all',copy.allWeeks], ...Object.keys(WEEKS).map(n =>
    [n,`${copy.week} ${weekNumber(n)} · ${weekTitle(Number(n))}`])]);
  setOptions('#topic', [['all',copy.allTopics], ...topics.map(tag => [tag,topicTitle(tag)])
    .sort((a,b) => a[1].localeCompare(b[1],archiveLanguage))]);
  renderWeeks();
  renderArticles();
  renderGuide();
  renderLastRead();
  renderGlossary();
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

const fileThumbnail = file => `thumb-file-${file.id}.jpg`;

function fileCard(file) {
  const copy = strings();
  const {title,topic} = fileText(file);
  const marked = saved.has(file.id);
  const cover = file.cover ? `<img src="${escapeHTML(fileThumbnail(file))}" alt="" loading="lazy" decoding="async">` : poster(file);
  return `<article class="card">
    <button class="cover" data-open="${file.id}" aria-label="${copy.open} ${file.id}: ${escapeHTML(title)}">${cover}</button>
    <div class="card-body">
      <div class="card-meta"><span>${copy.file} ${file.id} / ${copy.week} ${weekNumber(file.week)}</span>
      <button class="bookmark" data-save="${file.id}" aria-label="${marked ? copy.unsave : copy.save} · ${copy.file} ${file.id}" aria-pressed="${marked}">${marked ? '♥' : '♡'}</button></div>
      <h3><button class="title-button" data-open="${file.id}">${escapeHTML(title)}</button></h3>
      <p>${escapeHTML(topic)}</p>
      <div class="card-foot"><time datetime="${file.date}">${formatFileDate(file.date)}</time><button data-open="${file.id}">${copy.open} ↗</button></div>
    </div>
  </article>`;
}

function fileSearchText(file) {
  const {title, topic:summary, body} = fileText(file);
  return [file.id, file.n, file.title, file.body, file.topic, WEEKS[file.week].title,
    germanWeeks[file.week - 1], ...file.tags, ...file.tags.map(topicTitle),
    ...(germanFiles[file.id] || []), title, summary, body, weekTitle(file.week)].join(' ');
}

function renderArchive() {
  const terms = cleanSearch($('#search').value.trim()).split(/\s+/).filter(Boolean);
  const week = $('#week').value;
  const topic = $('#topic').value;
  const shown = files.filter(file => {
    if (filter === 'saved' && !saved.has(file.id)) return false;
    if (week !== 'all' && Number(week) !== file.week) return false;
    if (topic !== 'all' && !file.tags.includes(topic)) return false;
    if (!terms.length) return true;
    const haystack = cleanSearch(fileSearchText(file));
    return terms.every(term => haystack.includes(term));
  });
  shown.sort((first, second) => first.date.localeCompare(second.date) || first.id.localeCompare(second.id));
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

function articleLinkLabel(article, label) {
  const languageNote = article.lang === 'en' && englishSourceLabels[archiveLanguage];
  return languageNote ? `${label} (${languageNote})` : label;
}

function renderArticles() {
  const copy = strings();
  $('#articlesGrid').lang = archiveLanguage;
  $('#articlesGrid').innerHTML = Object.entries(WEEKS).reverse().map(([n,week]) => {
    const article = weeklyArticle(week);
    if (!article.url) return '';
    return `<article id="article-${n}" class="week-card">
      <span class="eyebrow">${copy.week} ${weekNumber(n)} · PARAGRAPH</span>
      <h3>${externalLink(article.url,articleLinkLabel(article, article.title))}</h3>
    </article>`;
  }).join('');
}

function renderGuide() {
  const [heading, ...pathLabels] = guideLabels[archiveLanguage];
  $('#guideTitle').textContent = heading;
  $('#guidePaths').innerHTML = guidePaths.map((path, index) => `<article class="week-card guide-card">
    <h3>${pathLabels[index]}</h3>
    <ol role="list">${path.map((number, step) => {
      const file = files.find(candidate => candidate.n === number);
      return `<li><a href="#file-${file.id}" data-open="${file.id}">
        <span class="guide-step" aria-hidden="true">${step + 1}</span>
        <span class="guide-link-title">${escapeHTML(fileText(file).title)}</span>
        <span class="guide-arrow" aria-hidden="true">→</span>
      </a></li>`;
    }).join('')}</ol>
  </article>`).join('');
}

function renderWeeks() {
  const copy = strings();
  $('#weeksGrid').innerHTML = Object.entries(WEEKS).reverse().map(([n,week]) => {
    const article = weeklyArticle(week);
    const count = files.filter(file => file.week === Number(n)).length;
    return `<article id="week-${n}" class="week-card">
      <span class="eyebrow">${copy.week} ${weekNumber(n)}</span>
      <h3>${escapeHTML(weekTitle(Number(n)))}</h3>
      ${article.url ? `<p lang="${article.lang}">${escapeHTML(article.title)}</p>` : ''}
      <div><button data-week="${n}">${copy.explore(count)} ↗</button>
      ${externalLink(article.url,articleLinkLabel(article,copy.paragraph))}</div>
    </article>`;
  }).join('');
}

function fileAtHash() {
  return files.find(file => location.hash === '#file-' + file.id);
}

const desktopReader = matchMedia('(min-width:900px) and (min-height:541px)');

function fitDesktopReader() {
  const reader = $('#reader');
  const content = $('#readerContent');
  const openedFile = content.firstElementChild;
  const lockHeight = () => {
    if (reader.open && desktopReader.matches && content.firstElementChild === openedFile &&
        !reader.style.getPropertyValue('--reader-height')) {
      const frameHeight = reader.offsetHeight - reader.clientHeight;
      reader.style.setProperty('--reader-height', content.offsetHeight + frameHeight + 'px');
    }
  };
  const cover = content.querySelector('.reader-img');
  if (cover && !cover.complete) cover.decode().then(lockHeight, lockHeight);
  else lockHeight();
}

desktopReader.addEventListener('change', () => {
  $('#reader').style.removeProperty('--reader-height');
  if ($('#reader').open && desktopReader.matches) fitDesktopReader();
});

function renderReader(file) {
  if (!file) return;
  const viewer = $('#coverViewer');
  if (viewer.open) viewer.close();
  if (file.status !== 'planned' && lastReadId !== file.id) {
    lastReadId = file.id;
    try { localStorage.setItem(lastReadKey, lastReadId); } catch {}
    renderLastRead();
  }
  const copy = strings();
  const {title,body} = fileText(file);
  const readerBody = body.split(/\n\s*\n/)
    .filter(paragraph => !/^(?:this week|tomorrow(?: on Paragraph)?|diese Woche|morgen(?: auf Paragraph)?):/i.test(paragraph.trim()))
    .join('\n\n');
  const source = SOURCES[file.source];
  const article = weeklyArticle(WEEKS[file.week]);
  const languageNote = file.source !== 'home' && englishSourceLabels[archiveLanguage];
  const sourceLabel = copy.source + (languageNote ? ' (' + languageNote + ')' : '') + ' · ' + (source?.name || '');
  const [enlargeCover] = coverViewerLabels[archiveLanguage];
  const cover = file.cover
    ? `<button type="button" class="reader-cover" aria-label="${escapeHTML(enlargeCover)}" title="${escapeHTML(enlargeCover)}">
      <img class="reader-img" src="${escapeHTML(file.cover)}" alt="${escapeHTML(copy.file + ' ' + file.id + ' · ' + title)}">
      <span class="reader-cover-expand" aria-hidden="true">⤢</span>
    </button>`
    : poster(file);
  const [,,,, readingLabel, previousLabel, nextLabel] = guideLabels[archiveLanguage];
  const previous = readingOrder.findLast(candidate => candidate.n < file.n);
  const next = readingOrder.find(candidate => candidate.n > file.n);
  const readerLink = (target, label, direction, arrow) => target
    ? `<button type="button" class="reader-${direction}" data-reader-step="${target.id}"
      aria-label="${escapeHTML(label + ' · ' + copy.file + ' ' + target.id)}" title="${escapeHTML(label)}">
      <span aria-hidden="true">${arrow}</span></button>`
    : '';
  $('.reader-pagination').setAttribute('aria-label', readingLabel);
  $('.reader-pagination').innerHTML =
    readerLink(previous, previousLabel, 'previous', '‹') + readerLink(next, nextLabel, 'next', '›');
  $('#readerContent').innerHTML = `<div class="reader-heading">
    <div class="eyebrow">${copy.file} ${file.id} · ${copy.week} ${weekNumber(file.week)} · ${formatFileDate(file.date)}</div>
    <h2 id="readerTitle" tabindex="-1">${escapeHTML(title.replace(/\bPop-ups\b/gi, word => word.replace('-', '‑')))}</h2>
  </div>
  ${cover}
  <div class="reader-text">
    <p>${escapeHTML(readerBody)}</p>
    <div class="reader-links">${externalLink(file.x,copy.post)}
      ${externalLink(source?.url,sourceLabel)}
      ${externalLink(article.url,articleLinkLabel(article,copy.paragraph))}</div>
  </div>`;
  const reader = $('#reader');
  if (!reader.open) {
    reader.style.removeProperty('--reader-height');
    reader.showModal();
  }
  if (desktopReader.matches && !reader.style.getPropertyValue('--reader-height')) fitDesktopReader();
  $('#readerScroll').scrollTop = 0;
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
  for (const id of ['#week','#topic']) $(id).value = 'all';
  $('#sort').value = 'desc';
}

document.addEventListener('click', event => {
  const readerStep = event.target.closest('[data-reader-step]');
  if (readerStep) {
    event.preventDefault();
    history.replaceState(history.state, '', '#file-' + readerStep.dataset.readerStep);
    updateReaderFromUrl();
    const sameDirection = readerStep.classList.contains('reader-next') ? '.reader-next' : '.reader-previous';
    ($(sameDirection) || $('#readerTitle')).focus({preventScroll:true});
    return;
  }

  if (event.target.closest('[data-reset-archive]') &&
      !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    resetArchive();
    renderArchive();
  }

  const open = event.target.closest('[data-open]');
  if (open) {
    if (open.matches('a') && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) return;
    event.preventDefault();
    openFile(open.dataset.open);
  }

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
    $('#sort').value = 'asc';
    renderArchive();
    location.hash = 'library';
    $('#archiveTitle').focus({preventScroll:true});
    $('#library').scrollIntoView();
  }
});

$('#search').addEventListener('input',renderArchive);
for (const id of ['#sort','#topic']) $(id).addEventListener('change',renderArchive);
$('#week').addEventListener('change', () => {
  $('#sort').value = $('#week').value === 'all' ? 'desc' : 'asc';
  renderArchive();
});
$('#reset').addEventListener('click',() => {
  resetArchive();
  renderArchive();
  $('#search').focus();
});
$('#close').addEventListener('click',() => $('#reader').close());
$('#readerContent').addEventListener('click', event => {
  const cover = event.target.closest('.reader-cover');
  if (!cover) return;
  const viewer = $('#coverViewer');
  if (viewer.open) return;
  const [label, closeLabel] = coverViewerLabels[archiveLanguage];
  const source = cover.querySelector('img');
  const image = viewer.querySelector('img');
  image.src = source.src;
  image.alt = source.alt;
  viewer.lang = archiveLanguage;
  viewer.setAttribute('aria-label', label);
  $('#closeCover').setAttribute('aria-label', closeLabel);
  viewer.showModal();
});
$('#closeCover').addEventListener('click', () => $('#coverViewer').close());
$('#coverViewer').addEventListener('click', event => {
  if (event.target === event.currentTarget || event.target.matches('img')) event.currentTarget.close();
});
$('#reader').addEventListener('close',() => {
  if ($('#coverViewer').open) $('#coverViewer').close();
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
window.addEventListener('hashchange',updateReaderFromUrl);
