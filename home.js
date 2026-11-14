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
  const localized = homepageLanguage === 'de' && germanFiles[file.id];
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

const germanKnowledge = {
  "0": "Offizielle Quellen",
  "1": "Handelsgebühren",
  "2": "Möglichkeiten für Ersteller",
  "3": "Starts mit Whitelist",
  "5": "OFFIZIELLE DOKUMENTATION",
  "7": "Offizielle Dokumentation und redaktionelle Einordnung im Überblick.",
  "8": "EscapeHub dokumentiert eine Handelsgebühr von 1,2 % während der Preisbildungskurve. Davon gehen 0,5 % an die Ersteller und 0,7 % an das Protokoll. Beim Wechsel in die nächste Handelsphase ändern sich die Gebühren.",
  "9": "Ersteller können ihren Anteil behalten, auf mehrere Wallets aufteilen oder als Cashback an Handelnde zurückgeben.",
  "10": "Die Whitelist wird zusammen mit dem Token erstellt und auf der Blockchain geprüft. Die Adressen stehen fest. Der Ersteller kann den Handel dauerhaft öffnen. Auch beim Wechsel in die nächste Handelsphase wird der Handel öffentlich.",
  "11": "Offizielle Dokumentation lesen ↗",
  "12": "Stand der Dokumentationsprüfung: 12. November 2026."
};
const knowledgeNodes = [...document.querySelectorAll('[data-knowledge]')]
  .map(node => ({node, english:node.textContent}));

const aboutTranslations = {
  "de": {
    "aboutLabel": "Über das Archiv",
    "aboutTitle": "Weniger Lärm.",
    "aboutAccent": "Mehr Durchblick.",
    "aboutIntro": "The Escape Files ist eine unabhängige Reihe von Tankothek. Kurze Erklärungen und Bilder zeigen, welche Ideen hinter EscapeHub stecken und wie die Plattform funktioniert.",
    "aboutArchive": "Das Archiv enthält Originalausgaben und Zusammenfassungen aus Oktober und November 2026. Einzelne Angaben können sich seit der Veröffentlichung geändert haben. Aktuelle offizielle Informationen findest du bei EscapeHub.",
    "aboutLink": "Zu EscapeHub ↗",
    "footerNote": "Unabhängiges Archiv von Tankothek",
    "footerBack": "Zurück zum Archiv ↑"
  },
  "es": {
    "aboutLabel": "Sobre el archivo",
    "aboutTitle": "Menos ruido.",
    "aboutAccent": "Más claridad.",
    "aboutIntro": "The Escape Files es una serie editorial independiente de Tankothek que explica las ideas y el funcionamiento de EscapeHub con textos breves e historias visuales.",
    "aboutArchive": "El archivo reúne ediciones originales y resúmenes de octubre y noviembre de 2026. Algunos detalles pueden haber cambiado desde su publicación. Consulta EscapeHub para obtener información oficial actualizada.",
    "aboutLink": "Visitar EscapeHub ↗",
    "footerNote": "Archivo independiente de Tankothek",
    "footerBack": "Volver al archivo ↑"
  },
  "fr": {
    "aboutLabel": "À propos des archives",
    "aboutTitle": "Moins de bruit.",
    "aboutAccent": "Plus de clarté.",
    "aboutIntro": "The Escape Files est une série éditoriale indépendante de Tankothek. Des explications courtes et des récits en images présentent les idées et le fonctionnement d’EscapeHub.",
    "aboutArchive": "Les archives réunissent des éditions originales et des résumés d’octobre et novembre 2026. Certains détails peuvent avoir changé depuis leur publication. Consultez EscapeHub pour obtenir les informations officielles à jour.",
    "aboutLink": "Consulter EscapeHub ↗",
    "footerNote": "Archives indépendantes de Tankothek",
    "footerBack": "Retour aux archives ↑"
  },
  "pt": {
    "aboutLabel": "Sobre o acervo",
    "aboutTitle": "Menos ruído.",
    "aboutAccent": "Mais clareza.",
    "aboutIntro": "The Escape Files é uma série editorial independente da Tankothek. Explicações breves e histórias visuais mostram as ideias por trás da EscapeHub e como a plataforma funciona.",
    "aboutArchive": "O acervo reúne edições originais e resumos de outubro e novembro de 2026. Alguns detalhes podem ter mudado desde a publicação. Consulte a EscapeHub para obter informações oficiais atualizadas.",
    "aboutLink": "Visitar a EscapeHub ↗",
    "footerNote": "Acervo independente da Tankothek",
    "footerBack": "Voltar ao acervo ↑"
  },
  "tr": {
    "aboutLabel": "Arşiv hakkında",
    "aboutTitle": "Daha az gürültü.",
    "aboutAccent": "Daha çok anlayış.",
    "aboutIntro": "The Escape Files, Tankothek’in bağımsız yayın dizisidir. Kısa açıklamalar ve görsel anlatımlar, EscapeHub’ın ardındaki fikirleri ve platformun nasıl çalıştığını gösterir.",
    "aboutArchive": "Arşiv, Ekim ve Kasım 2026’ya ait özgün sayıları ve özetleri bir araya getirir. Bazı ayrıntılar yayımlandıktan sonra değişmiş olabilir. Güncel resmî bilgiler için EscapeHub’a bakın.",
    "aboutLink": "EscapeHub’ı ziyaret edin ↗",
    "footerNote": "Tankothek’in bağımsız arşivi",
    "footerBack": "Arşive dön ↑"
  },
  "ru": {
    "aboutLabel": "Об архиве",
    "aboutTitle": "Меньше шума.",
    "aboutAccent": "Больше ясности.",
    "aboutIntro": "The Escape Files — независимая серия Tankothek. Краткие объяснения и иллюстрации показывают, какие идеи лежат в основе EscapeHub и как работает платформа.",
    "aboutArchive": "В архиве собраны оригинальные выпуски и краткие пересказы за октябрь и ноябрь 2026 года. Некоторые детали могли измениться после публикации. Актуальная официальная информация доступна на сайте EscapeHub.",
    "aboutLink": "Перейти на сайт EscapeHub ↗",
    "footerNote": "Независимый архив Tankothek",
    "footerBack": "Вернуться к архиву ↑"
  },
  "zh-CN": {
    "aboutLabel": "关于档案",
    "aboutTitle": "少一点喧嚣。",
    "aboutAccent": "多一点理解。",
    "aboutIntro": "The Escape Files 是 Tankothek 的独立编辑系列，通过简明的解说和图文故事介绍 EscapeHub 背后的理念及其运作方式。",
    "aboutArchive": "档案收录了 2026 年 10 月和 11 月的原版内容及摘要。部分细节可能在发布后有所变动。最新官方信息请查阅 EscapeHub。",
    "aboutLink": "访问 EscapeHub ↗",
    "footerNote": "Tankothek 独立档案",
    "footerBack": "返回档案 ↑"
  },
  "ja": {
    "aboutLabel": "アーカイブについて",
    "aboutTitle": "雑音を減らし、",
    "aboutAccent": "理解を深める。",
    "aboutIntro": "The Escape Files は Tankothek が独自に制作する連載です。短い解説と画像を通じて、EscapeHub の背景にある考え方や仕組みを紹介します。",
    "aboutArchive": "アーカイブには、2026年10月と11月のオリジナル記事と要約を収録しています。公開後に内容が変更されている場合があります。最新の公式情報は EscapeHub をご覧ください。",
    "aboutLink": "EscapeHub を見る ↗",
    "footerNote": "Tankothek の独立アーカイブ",
    "footerBack": "アーカイブに戻る ↑"
  },
  "ko": {
    "aboutLabel": "아카이브 소개",
    "aboutTitle": "소음은 줄이고,",
    "aboutAccent": "이해는 깊게.",
    "aboutIntro": "The Escape Files는 Tankothek의 독립 기획 시리즈입니다. 짧은 설명과 이미지로 EscapeHub의 배경과 작동 방식을 소개합니다.",
    "aboutArchive": "아카이브에는 2026년 10월과 11월의 원본과 요약이 담겨 있습니다. 게시 후 일부 내용이 달라졌을 수 있습니다. 최신 공식 정보는 EscapeHub에서 확인하세요.",
    "aboutLink": "EscapeHub 방문 ↗",
    "footerNote": "Tankothek의 독립 아카이브",
    "footerBack": "아카이브로 돌아가기 ↑"
  }
};
const aboutNodes = [...document.querySelectorAll('[data-about]')]
  .map(node => ({ node, english: node.textContent }));

function applyHomepageLanguage(code) {
  homepageLanguage = Object.hasOwn(homepageTranslations, code) ? code : 'en';
  document.documentElement.lang = homepageLanguage;
  languagePicker.value = homepageLanguage;
  const aboutCopy = aboutTranslations[homepageLanguage];
  for (const { node, english } of aboutNodes) {
    node.textContent = aboutCopy?.[node.dataset.about] ?? english;
  }
  const labels = Object.fromEntries(homepageLabels.map((key, index) => [key, homepageTranslations[homepageLanguage][index]]));
  for (const element of document.querySelectorAll('[data-label]')) {
    element.textContent = labels[element.dataset.label];
  }
  languagePicker.setAttribute('aria-label', labels.language);
  const search = document.querySelector('#search');
  search.placeholder = labels.search + '…';
  search.setAttribute('aria-label', labels.search);
  document.querySelector('#knowledge').lang = homepageLanguage === 'de' ? 'de' : 'en';
  for (const {node, english} of knowledgeNodes) {
    node.textContent = homepageLanguage === 'de' ? germanKnowledge[node.dataset.knowledge] : english;
  }
  setArchiveLanguage(homepageLanguage);
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

applyHomepageLanguage(initialHomepageLanguage());
updateReaderFromUrl();
