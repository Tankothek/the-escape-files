const siteSearchCopy = {
  en: ['Search website', 'Close search', 'No results', 'Results'],
  de: ['Website durchsuchen', 'Suche schließen', 'Keine Treffer', 'Treffer'],
  es: ['Buscar en el sitio', 'Cerrar búsqueda', 'Sin resultados', 'Resultados'],
  fr: ['Rechercher sur le site', 'Fermer la recherche', 'Aucun résultat', 'Résultats'],
  pt: ['Pesquisar no site', 'Fechar busca', 'Nenhum resultado', 'Resultados'],
  tr: ['Sitede ara', 'Aramayı kapat', 'Sonuç bulunamadı', 'Sonuçlar'],
  ru: ['Поиск по сайту', 'Закрыть поиск', 'Ничего не найдено', 'Результаты'],
  'zh-CN': ['搜索网站', '关闭搜索', '未找到结果', '搜索结果'],
  ja: ['サイト内検索', '検索を閉じる', '検索結果がありません', '検索結果'],
  ko: ['사이트 검색', '검색 닫기', '검색 결과 없음', '검색 결과']
};

const siteSearchDialog = $('#siteSearch');
const siteSearchInput = $('#siteSearchInput');
const siteSearchButton = $('#openSiteSearch');
const siteSearchResults = $('#siteSearchResults');
let siteSearchItems = [];

function localizeSiteSearch(language) {
  const [title, close] = siteSearchCopy[language];
  $('#siteSearchTitle').textContent = title;
  siteSearchButton.title = title;
  siteSearchButton.setAttribute('aria-label', title);
  $('#closeSiteSearch').setAttribute('aria-label', close);
  siteSearchInput.setAttribute('aria-label', title);
  siteSearchInput.placeholder = title + '…';
  siteSearchItems = [
    ...files.map(file => {
      const {title, topic} = fileText(file);
      return {href:'#file-' + file.id, file:file.id, title, text:fileSearchText(file), excerpt:topic, group:strings().file + ' ' + file.id};
    })
  ];
  const sections = [
    ['#weeksGrid article', 'h3', '#weeks h2'],
    ['#articlesGrid article', 'h3', '#articles h2'],
    ['#glossaryGrid article', 'h4', '#glossaryTitle'],
    ['#learn details', 'summary', '#learnTitle']
  ];
  for (const [selector, heading, category] of sections) {
    for (const item of document.querySelectorAll(selector)) {
      siteSearchItems.push({
        href:'#' + item.id,
        title:item.querySelector(heading).textContent.trim(),
        text:item.textContent,
        excerpt:item.querySelector('p, .learn-steps li')?.textContent.trim(),
        group:$(category).textContent.trim()
      });
    }
  }
  for (const [index, item] of [...document.querySelectorAll('#knowledge .knowledge-grid article')].entries()) {
    item.id = 'knowledge-topic-' + (index + 1);
    siteSearchItems.push({
      href:'#' + item.id,
      title:item.querySelector('h3').textContent,
      text:item.textContent,
      excerpt:item.querySelector('p').textContent,
      group:$('#knowledge h2').textContent
    });
  }
  siteSearchItems = siteSearchItems.map(item => ({...item,
    searchableTitle:cleanSearch(item.title + ' ' + item.group),
    searchableText:cleanSearch(item.text)
  }));
  renderSiteSearch();
}

function renderSiteSearch() {
  const [, , empty, results] = siteSearchCopy[archiveLanguage];
  const query = cleanSearch(siteSearchInput.value.trim());
  const terms = query.split(/\s+/).filter(Boolean);
  const matches = terms.length ? siteSearchItems.filter(item =>
    terms.every(term => item.searchableTitle.includes(term) || item.searchableText.includes(term))
  ).sort((a, b) => {
    const rank = item => 2 * Number(item.searchableTitle.includes(query)) +
      terms.filter(term => item.searchableTitle.includes(term)).length;
    return rank(b) - rank(a);
  }) : [];
  $('#siteSearchStatus').textContent = !terms.length ? '' :
    matches.length ? results + ' · ' + new Intl.NumberFormat(archiveLanguage).format(matches.length) : empty;
  siteSearchResults.innerHTML = matches.map(item => `<li><a href="${item.href}"${item.file ? ` data-open="${item.file}"` : ''}>
    <span class="site-search-type">${escapeHTML(item.group)}</span>
    <strong>${escapeHTML(item.title)}</strong>
    ${item.excerpt ? `<span class="site-search-excerpt">${escapeHTML(item.excerpt)}</span>` : ''}
  </a></li>`).join('');
}

siteSearchButton.addEventListener('click', () => {
  if (!siteSearchDialog.open) siteSearchDialog.showModal();
});
$('#closeSiteSearch').addEventListener('click', () => siteSearchDialog.close());
siteSearchInput.addEventListener('input', renderSiteSearch);
siteSearchInput.addEventListener('keydown', event => {
  const first = siteSearchResults.querySelector('a');
  if (event.key === 'Enter' && !event.isComposing && first) {
    event.preventDefault();
    first.click();
  }
});
siteSearchResults.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  siteSearchDialog.close();
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (target?.matches('details')) target.open = true;
  if (target) {
    target.tabIndex = -1;
    target.focus({preventScroll:true});
  }
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey &&
      !event.target.closest('input, textarea, select, [contenteditable]') &&
      !document.querySelector('dialog[open]')) {
    event.preventDefault();
    siteSearchButton.click();
  }
});
