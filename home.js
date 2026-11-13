const homepageLabels = [
  'home', 'weeks', 'articles', 'knowledge', 'subtitle', 'all', 'allDesc',
  'weeksDesc', 'knowledgeDesc', 'featured', 'open', 'skip', 'language', 'search'
];
const homepageTranslations = {
  en: ['Home','Weekly analyses','Articles','Knowledge Base','Analysis · Context · Developments around EscapeHub','All files','Explore the complete series','Summaries and perspectives','Terms, answers and context','Featured Escape File','Open file','Skip to archive','Language','Search files'],
  de: ['Start','Wochenanalysen','Artikel','Knowledge Base','Analysen · Hintergründe · Entwicklungen rund um EscapeHub','Alle Files','Die komplette Serie im Überblick','Zusammenfassungen und Einordnungen','Begriffe, Antworten und Hintergründe','Escape File im Fokus','Zum File','Zum Archiv springen','Sprache','Files suchen'],
  es: ['Inicio','Análisis semanales','Artículos','Base de conocimientos','Análisis · Contexto · Novedades sobre EscapeHub','Todos los archivos','Explora la serie completa','Resúmenes y perspectivas','Conceptos, respuestas y contexto','Escape File destacado','Abrir archivo','Ir al archivo','Idioma','Buscar archivos'],
  fr: ['Accueil','Analyses hebdomadaires','Articles','Base de connaissances','Analyses · Contexte · Actualités d’EscapeHub','Tous les dossiers','Explorez la série complète','Synthèses et perspectives','Notions, réponses et contexte','Dossier à la une','Ouvrir le dossier','Accéder aux archives','Langue','Rechercher un dossier'],
  pt: ['Início','Análises semanais','Artigos','Base de conhecimento','Análises · Contexto · Novidades sobre a EscapeHub','Todos os arquivos','Explore a série completa','Resumos e perspectivas','Termos, respostas e contexto','Escape File em destaque','Abrir arquivo','Ir ao arquivo','Idioma','Buscar arquivos'],
  tr: ['Ana sayfa','Haftalık analizler','Makaleler','Bilgi bankası','Analizler · Arka plan · EscapeHub gelişmeleri','Tüm dosyalar','Serinin tamamını keşfedin','Özetler ve değerlendirmeler','Kavramlar, yanıtlar ve arka plan','Öne çıkan Escape File','Dosyayı aç','Arşive git','Dil','Dosya ara'],
  ru: ['Главная','Обзоры недели','Статьи','База знаний','Аналитика · Контекст · События EscapeHub','Все выпуски','Вся серия в одном месте','Итоги и комментарии','Термины, ответы и контекст','Избранный выпуск','Открыть выпуск','Перейти к архиву','Язык','Поиск выпусков'],
  'zh-CN': ['首页','每周分析','文章','知识库','分析 · 背景 · EscapeHub 动态','所有档案','浏览完整系列','摘要与解读','术语、解答与背景','精选 Escape File','打开档案','跳至档案','语言','搜索档案'],
  ja: ['ホーム','週間分析','記事','ナレッジベース','分析・背景・EscapeHub の動向','すべてのファイル','シリーズ全体を見る','要約と解説','用語、回答、背景','注目の Escape File','ファイルを開く','アーカイブへ移動','言語','ファイルを検索'],
  ko: ['홈','주간 분석','기사','지식 베이스','분석 · 배경 · EscapeHub 동향','모든 파일','전체 시리즈 보기','요약과 해설','용어, 답변과 배경','추천 Escape File','파일 열기','아카이브로 이동','언어','파일 검색']
};

const featureGerman = {
  '011': ['Wähle dein Netzwerk', 'Welches Netzwerk passt zu deinem Projekt? Zielgruppe, Kosten und Funktionen helfen bei der Wahl.'],
  '010': ['Nach dem Start', 'Wie Creator nach der ersten Phase weiterhin an Handelsgebühren beteiligt sein können.'],
  '009': ['Wohin gehen die Gebühren?', 'Welche Möglichkeiten Creator bei der Verteilung ihres Gebührenanteils haben.']
};

const featureFiles = files.filter(file => file.cover && file.status === 'published').slice(-3).reverse();
let featureIndex = 0;
let homepageLanguage = 'en';
const languagePicker = document.querySelector('#language');

function setFeature(index) {
  featureIndex = index;
  const file = featureFiles[index];
  const image = document.querySelector('#featuredImage');
  image.src = file.cover;
  image.alt = 'File ' + file.id;
  const localized = homepageLanguage === 'de' && featureGerman[file.id];
  const title = document.querySelector('#featuredTitle');
  const summary = document.querySelector('#featuredSummary');
  title.textContent = '#' + file.id + ' – ' + (localized ? localized[0] : file.title);
  summary.textContent = localized ? localized[1] : file.topic;
  title.lang = summary.lang = localized ? 'de' : 'en';
  document.querySelector('#featuredCover').dataset.open = file.id;
  document.querySelector('#featuredAction').dataset.open = file.id;
  for (const [page, control] of [...document.querySelector('#featurePages').children].entries()) {
    control.setAttribute('aria-pressed', String(page === index));
  }
}

for (const [index, file] of featureFiles.entries()) {
  const control = document.createElement('button');
  control.type = 'button';
  control.setAttribute('aria-label', 'File ' + file.id);
  control.addEventListener('click', () => setFeature(index));
  document.querySelector('#featurePages').append(control);
}

function applyHomepageLanguage(code) {
  homepageLanguage = Object.hasOwn(homepageTranslations, code) ? code : 'en';
  document.documentElement.lang = homepageLanguage;
  languagePicker.value = homepageLanguage;
  const labels = Object.fromEntries(homepageLabels.map((key, index) => [key, homepageTranslations[homepageLanguage][index]]));
  for (const element of document.querySelectorAll('[data-label]')) {
    element.textContent = labels[element.dataset.label];
  }
  languagePicker.setAttribute('aria-label', labels.language);
  const search = document.querySelector('#search');
  search.placeholder = labels.search + '…';
  search.setAttribute('aria-label', labels.search);
  setFeature(featureIndex);
}

function initialHomepageLanguage() {
  const urlLanguage = new URL(location.href).searchParams.get('lang');
  if (urlLanguage && Object.hasOwn(homepageTranslations, urlLanguage)) return urlLanguage;
  try {
    const savedLanguage = localStorage.getItem('tankothek-language');
    if (Object.hasOwn(homepageTranslations, savedLanguage)) return savedLanguage;
  } catch {}
  for (const browserLanguage of navigator.languages) {
    const base = browserLanguage.split('-')[0].toLowerCase();
    const code = base === 'zh' ? 'zh-CN' : base;
    if (Object.hasOwn(homepageTranslations, code)) return code;
  }
  return 'en';
}

languagePicker.addEventListener('change', () => {
  applyHomepageLanguage(languagePicker.value);
  const url = new URL(location.href);
  url.searchParams.set('lang', homepageLanguage);
  history.replaceState(null, '', url);
  try { localStorage.setItem('tankothek-language', homepageLanguage); } catch {}
});

const articleGrid = document.querySelector('#articlesGrid');
for (const [week, entry] of Object.entries(WEEKS)) {
  if (!entry.articleUrl) continue;
  const card = document.createElement('article');
  card.className = 'week-card';
  const heading = document.createElement('h3');
  const article = document.createElement('a');
  article.href = entry.articleUrl;
  article.textContent = entry.article + ' ↗';
  article.target = '_blank';
  article.rel = 'noopener noreferrer';
  const marker = document.createElement('span');
  marker.className = 'eyebrow';
  marker.textContent = 'WEEK ' + week.padStart(2, '0') + ' · PARAGRAPH';
  heading.append(article);
  card.append(marker, heading);
  articleGrid.append(card);
}
applyHomepageLanguage(initialHomepageLanguage());
