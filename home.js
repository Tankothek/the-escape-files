const homepageLabels = [
  'home', 'weeks', 'articles', 'knowledge', 'subtitle',
  'featured', 'open', 'skip', 'language', 'search'
];
const homepageTranslations = {
  en: ['Home','Weekly analyses','Articles','Knowledge Base','How to create, discover and buy tokens on EscapeHub.','Featured Escape File','Open file','Skip to archive','Language','Search files'],
  de: ['Start','Wochenanalysen','Artikel','Wissensdatenbank','Token erstellen, entdecken und kaufen auf EscapeHub.','Escape File im Fokus','Zum File','Zum Archiv springen','Sprache','Files suchen'],
  es: ['Inicio','Análisis semanales','Artículos','Base de conocimientos','Cómo crear, descubrir y comprar tokens en EscapeHub.','Escape File destacado','Abrir archivo','Ir al archivo','Idioma','Buscar archivos'],
  fr: ['Accueil','Analyses hebdomadaires','Articles','Base de connaissances','Comment créer, découvrir et acheter des jetons sur EscapeHub.','Dossier à la une','Ouvrir le dossier','Accéder aux archives','Langue','Rechercher un dossier'],
  pt: ['Início','Análises semanais','Artigos','Base de conhecimento','Como criar, descobrir e comprar tokens na EscapeHub.','Escape File em destaque','Abrir arquivo','Ir ao arquivo','Idioma','Buscar arquivos'],
  tr: ['Ana sayfa','Haftalık analizler','Makaleler','Bilgi bankası','EscapeHub’da token oluşturma, keşfetme ve satın alma.','Öne çıkan Escape File','Dosyayı aç','Arşive git','Dil','Dosya ara'],
  ru: ['Главная','Обзоры недели','Статьи','База знаний','Как создавать, находить и покупать токены на EscapeHub.','Избранный выпуск','Открыть выпуск','Перейти к архиву','Язык','Поиск выпусков'],
  'zh-CN': ['首页','每周分析','文章','知识库','了解如何在 EscapeHub 创建、发现和购买代币。','精选 Escape File','打开档案','跳至档案','语言','搜索档案'],
  ja: ['ホーム','週間分析','記事','ナレッジベース','EscapeHub でトークンを作成・発見・購入する方法。','注目の Escape File','ファイルを開く','アーカイブへ移動','言語','ファイルを検索'],
  ko: ['홈','주간 분석','기사','지식 베이스','EscapeHub에서 토큰을 만들고, 찾고, 구매하는 방법.','추천 Escape File','파일 열기','아카이브로 이동','언어','파일 검색']
};

const featureFiles = files.filter(file => file.cover && file.status === 'published').slice(-3).reverse();
let featureIndex = 0;
let homepageLanguage = 'en';
const languagePicker = document.querySelector('#language');
const backToTop = document.querySelector('#backToTop');
const pageStart = document.querySelector('#start');
const navToggle = document.querySelector('#navToggle');
const navLabels = {
  en: ['Menu', 'Navigation'], de: ['Menü', 'Navigation'], es: ['Menú', 'Navegación'],
  fr: ['Menu', 'Navigation'], pt: ['Menu', 'Navegação'], tr: ['Menü', 'Gezinme'],
  ru: ['Меню', 'Навигация'], 'zh-CN': ['菜单', '导航'],
  ja: ['メニュー', 'ナビゲーション'], ko: ['메뉴', '탐색']
};

function setNavigationOpen(open) {
  navToggle.setAttribute('aria-expanded', String(open));
}

navToggle.addEventListener('click', () => {
  setNavigationOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('click', event => {
  const links = document.querySelector('#navLinks');
  if (navToggle.getAttribute('aria-expanded') !== 'true' || navToggle.contains(event.target)) return;
  if (!links.contains(event.target) || event.target.closest('a')) {
    if (links.contains(document.activeElement)) navToggle.focus({preventScroll:true});
    setNavigationOpen(false);
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    setNavigationOpen(false);
    if (navToggle.offsetWidth) navToggle.focus({preventScroll:true});
  }
});
matchMedia('(max-width:767px) and (orientation:portrait)').addEventListener('change', () => setNavigationOpen(false));
const backToTopLabels = {
  en: 'Back to top',
  de: 'Nach oben',
  es: 'Volver arriba',
  fr: 'Retour en haut',
  pt: 'Voltar ao topo',
  tr: 'Başa dön',
  ru: 'Наверх',
  'zh-CN': '返回顶部',
  ja: 'ページの先頭へ',
  ko: '맨 위로'
};
const backToTopThreshold = 160;
let previousScrollTop = Math.max(0, window.scrollY);

window.addEventListener('scroll', () => {
  const scrollTop = Math.max(0, window.scrollY);
  if (scrollTop <= backToTopThreshold || scrollTop > previousScrollTop) {
    backToTop.hidden = true;
  } else if (scrollTop < previousScrollTop) {
    backToTop.hidden = false;
  }
  previousScrollTop = scrollTop;
}, {passive:true});

backToTop.addEventListener('click', () => {
  if (location.hash && location.hash !== '#start' && !fileAtHash()) {
    history.replaceState(history.state, '', '#start');
    updateReaderFromUrl();
  }
  pageStart.focus({preventScroll:true});
  window.scrollTo({top:0});
});

const featureCard = document.querySelector('#featured');
const firstFeatureSlide = featureCard.querySelector('.featured-slide');
const featureSlides = featureFiles.map((file, index) => {
  const slide = index === 0 ? firstFeatureSlide : firstFeatureSlide.cloneNode(true);
  const image = slide.querySelector('img');
  if (index !== 0) {
    image.removeAttribute('fetchpriority');
    featureCard.append(slide);
  }
  image.src = fileThumbnail(file);
  slide.querySelector('h2').id = 'featuredTitle-' + file.id;
  for (const button of slide.querySelectorAll('button')) button.dataset.open = file.id;
  return slide;
});

function renderFeatureText() {
  for (const [index, file] of featureFiles.entries()) {
    const slide = featureSlides[index];
    const localized = fileText(file, homepageLanguage);
    const title = slide.querySelector('h2');
    const summary = slide.querySelector('p');
    title.textContent = '#' + file.id + ' – ' + localized.title;
    summary.textContent = localized.topic;
    title.lang = summary.lang = homepageLanguage;
    slide.querySelector('img').alt = strings().file + ' ' + file.id;
  }
}

const featurePages = document.querySelector('#featurePages');

function setFeature(index) {
  featureIndex = index;
  featureCard.querySelectorAll('.featured-slide').forEach((slide, page) => {
    slide.inert = page !== index;
  });
  featureCard.setAttribute('aria-labelledby', featureSlides[index].querySelector('h2').id);
  for (const [page, control] of [...featurePages.children].entries()) {
    control.setAttribute('aria-pressed', String(page === index));
    control.setAttribute('aria-label', strings().file + ' ' + featureFiles[page].id);
  }
}

for (const [index, file] of featureFiles.entries()) {
  const control = document.createElement('button');
  control.type = 'button';
  control.setAttribute('aria-label', 'File ' + file.id);
  control.addEventListener('click', () => {
    slideToFeature(index, index > featureIndex ? 1 : -1);
    scheduleFeatureRotation();
  });
  featurePages.append(control);
}

const featureMotion = matchMedia('(prefers-reduced-motion: reduce)');
const featureReader = document.querySelector('#reader');
const featureDelay = 8000;
let featureInView = false;
let featureHovered = false;
let featureTimer;
let touchStart;
let suppressSwipeClick = false;
let featureAnimations = [];

function resetFeatureSlides() {
  for (const animation of featureAnimations) animation.cancel();
  featureAnimations = [];
  for (const [index, slide] of featureSlides.entries()) {
    slide.classList.toggle('is-visible', index === featureIndex);
    slide.style.transform = '';
  }
}

function adjacentFeature(direction) {
  return (featureIndex + direction + featureFiles.length) % featureFiles.length;
}

function animateFeatureSlides(outgoing, incoming, endOffset, incomingEndOffset) {
  const options = {duration:320, easing:'cubic-bezier(.22,.61,.36,1)', fill:'forwards'};
  const animations = [
    outgoing.animate([{transform:outgoing.style.transform || 'translateX(0)'}, {transform:endOffset}], options),
    incoming.animate([{transform:incoming.style.transform}, {transform:incomingEndOffset}], options)
  ];
  featureAnimations = animations;
  animations[0].onfinish = () => {
    if (featureAnimations === animations) resetFeatureSlides();
  };
}

function slideToFeature(index, direction, fromDrag = false) {
  if (index === featureIndex) return;
  if (!fromDrag) resetFeatureSlides();
  const outgoing = featureSlides[featureIndex];
  const incoming = featureSlides[index];
  setFeature(index);
  if (featureMotion.matches) {
    resetFeatureSlides();
    return;
  }
  incoming.classList.add('is-visible');
  if (!fromDrag) incoming.style.transform = `translateX(${direction * 100}%)`;
  animateFeatureSlides(outgoing, incoming, `translateX(${-direction * 100}%)`, 'translateX(0)');
}

function moveFeatureSlides(dx) {
  const direction = dx < 0 ? 1 : -1;
  const offset = Math.max(-featureCard.clientWidth, Math.min(dx, featureCard.clientWidth));
  resetFeatureSlides();
  const incoming = featureSlides[adjacentFeature(direction)];
  incoming.classList.add('is-visible');
  incoming.style.transform = `translateX(calc(${direction * 100}% + ${offset}px))`;
  featureSlides[featureIndex].style.transform = `translateX(${offset}px)`;
  return direction;
}

function finishFeatureTouch(event, cancelled = false) {
  if (event.pointerId !== touchStart?.id) return;
  const {x, y, direction} = touchStart;
  touchStart = undefined;
  const dx = event.clientX - x;
  const dy = event.clientY - y;
  if (!cancelled && Math.abs(dx) >= 45 && Math.abs(dx) > 1.35 * Math.abs(dy)) {
    const nextDirection = featureMotion.matches ? (dx < 0 ? 1 : -1) : moveFeatureSlides(dx);
    slideToFeature(adjacentFeature(nextDirection), nextDirection, !featureMotion.matches);
    suppressSwipeClick = true;
  } else if (direction && !featureMotion.matches) {
    animateFeatureSlides(
      featureSlides[featureIndex], featureSlides[adjacentFeature(direction)],
      'translateX(0)', `translateX(${direction * 100}%)`
    );
    suppressSwipeClick = true;
  } else {
    resetFeatureSlides();
  }
  scheduleFeatureRotation();
}

function scheduleFeatureRotation() {
  clearTimeout(featureTimer);
  const focus = document.activeElement;
  if (featureMotion.matches || !featureInView || featureHovered || touchStart || document.hidden ||
      featureReader.open || featureFiles.length < 2 ||
      featureCard.contains(focus) || featurePages.contains(focus)) return;
  featureTimer = setTimeout(() => {
    slideToFeature(adjacentFeature(1), 1);
    scheduleFeatureRotation();
  }, featureDelay);
}

for (const area of [featureCard, featurePages]) {
  area.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    featureHovered = true;
    scheduleFeatureRotation();
  });
  area.addEventListener('pointerleave', () => {
    featureHovered = false;
    scheduleFeatureRotation();
  });
  area.addEventListener('focusin', scheduleFeatureRotation);
  area.addEventListener('focusout', () => queueMicrotask(scheduleFeatureRotation));
}

featureCard.addEventListener('pointerdown', event => {
  if (!event.isPrimary) return;
  suppressSwipeClick = false;
  if (event.pointerType !== 'touch' || featureFiles.length < 2) return;
  resetFeatureSlides();
  touchStart = {id:event.pointerId, x:event.clientX, y:event.clientY};
  scheduleFeatureRotation();
});

featureCard.addEventListener('pointermove', event => {
  if (event.pointerId !== touchStart?.id || featureMotion.matches) return;
  const dx = event.clientX - touchStart.x;
  const dy = event.clientY - touchStart.y;
  if (touchStart.direction || Math.abs(dx) >= 8 && Math.abs(dx) > 1.35 * Math.abs(dy)) {
    touchStart.direction = moveFeatureSlides(dx);
  }
});

featureCard.addEventListener('pointerup', finishFeatureTouch);
featureCard.addEventListener('pointercancel', event => finishFeatureTouch(event, true));

featureCard.addEventListener('click', event => {
  if (!suppressSwipeClick || event.detail === 0) return;
  suppressSwipeClick = false;
  event.preventDefault();
  event.stopPropagation();
}, {capture:true});

featureMotion.addEventListener('change', () => {
  touchStart = undefined;
  resetFeatureSlides();
  scheduleFeatureRotation();
});
document.addEventListener('visibilitychange', scheduleFeatureRotation);
new MutationObserver(scheduleFeatureRotation)
  .observe(featureReader, {attributes:true, attributeFilter:['open']});
new IntersectionObserver(([entry]) => {
  featureInView = entry.isIntersecting && entry.intersectionRatio >= 0.5;
  scheduleFeatureRotation();
}, {threshold:0.5}).observe(featureCard);

const knowledgeTranslations = {
  "de": {
    "0": "Offizielle Quellen",
    "1": "Handelsgebühren",
    "2": "Möglichkeiten für Ersteller",
    "3": "Starts mit Whitelist",
    "5": "OFFIZIELLE DOKUMENTATION",
    "8": "EscapeHub dokumentiert eine Handelsgebühr von 1,2 % während der Preisbildungskurve. Davon gehen 0,5 % an die Ersteller und 0,7 % an das Protokoll. Beim Wechsel in die nächste Handelsphase ändern sich die Gebühren.",
    "9": "Ersteller können ihren Anteil behalten, auf mehrere Wallets aufteilen oder als Cashback an Handelnde zurückgeben.",
    "10": "Die Whitelist wird zusammen mit dem Token erstellt und auf der Blockchain geprüft. Die Adressen stehen fest. Der Ersteller kann den Handel dauerhaft öffnen. Auch beim Wechsel in die nächste Handelsphase wird der Handel öffentlich.",
    "11": "Offizielle Dokumentation lesen (Englisch) ↗",
    "12": "Stand der Dokumentationsprüfung: 12. November 2026."
  },
  "es": {
    "0": "Fuentes oficiales",
    "1": "Comisiones de trading",
    "2": "Opciones para los creadores",
    "3": "Lanzamientos con lista de permitidos",
    "5": "DOCUMENTACIÓN OFICIAL",
    "8": "EscapeHub indica una comisión del 1,2 % por operación durante la fase de la curva de vinculación. El 0,5 % corresponde al creador y el 0,7 % al protocolo. Las tarifas cambian al pasar a la siguiente fase.",
    "9": "Los creadores pueden conservar su parte, repartirla entre varias billeteras o devolverla a quienes operan con el token como reembolso.",
    "10": "La lista se crea junto con el token y se aplica en la blockchain. Las direcciones quedan fijas. El creador puede abrir el mercado de forma permanente. El paso a la siguiente fase también abre el mercado al público.",
    "11": "Leer la documentación oficial (en inglés) ↗",
    "12": "Documentación consultada el 12 de noviembre de 2026."
  },
  "fr": {
    "0": "Sources officielles",
    "1": "Frais de transaction",
    "2": "Options pour les créateurs",
    "3": "Lancements avec liste d’accès",
    "5": "DOCUMENTATION OFFICIELLE",
    "8": "EscapeHub indique des frais de 1,2 % par transaction pendant la phase de la courbe de prix. Le créateur reçoit 0,5 % et le protocole 0,7 %. Les frais changent au passage à la phase suivante.",
    "9": "Les créateurs peuvent conserver leur part, la répartir entre plusieurs portefeuilles ou la reverser aux personnes qui échangent le jeton sous forme de cashback.",
    "10": "La liste est créée avec le jeton et appliquée sur la blockchain. Les adresses inscrites sont fixes. Le créateur peut ouvrir les échanges définitivement. Le passage à la phase suivante rend aussi les échanges publics.",
    "11": "Lire la documentation officielle (en anglais) ↗",
    "12": "Documentation consultée le 12 novembre 2026."
  },
  "pt": {
    "0": "Fontes oficiais",
    "1": "Taxas de negociação",
    "2": "Opções para criadores",
    "3": "Lançamentos com lista de permissões",
    "5": "DOCUMENTAÇÃO OFICIAL",
    "8": "A EscapeHub informa uma taxa de 1,2% por operação na fase da curva de preço. O criador recebe 0,5% e o protocolo recebe 0,7%. As taxas mudam na fase seguinte.",
    "9": "Os criadores podem manter sua parte, dividi-la entre carteiras ou devolvê-la a quem negocia o token na forma de cashback.",
    "10": "A lista é criada junto com o token e aplicada na blockchain. Os endereços ficam fixos. O criador pode liberar as negociações de forma permanente. A passagem para a próxima fase também abre o mercado ao público.",
    "11": "Ler a documentação oficial (em inglês) ↗",
    "12": "Documentação consultada em 12 de novembro de 2026."
  },
  "tr": {
    "0": "Resmî kaynaklar",
    "1": "İşlem ücretleri",
    "2": "Oluşturucuların seçenekleri",
    "3": "İzin listeli lansmanlar",
    "5": "RESMÎ BELGELER",
    "8": "EscapeHub, fiyat eğrisi aşamasında işlem başına %1,2 ücret belirtir. Bunun %0,5’i oluşturucuya, %0,7’si protokole gider. Bir sonraki aşamaya geçildiğinde ücretler değişir.",
    "9": "Oluşturucular paylarını tutabilir, cüzdanlar arasında bölüştürebilir veya tokenı alıp satanlara geri ödeme olarak aktarabilir.",
    "10": "İzin listesi tokenla birlikte oluşturulur ve blok zincirinde uygulanır. Adresler sabittir. Oluşturucu işlemleri kalıcı olarak herkese açabilir. Sonraki aşamaya geçiş de işlemleri herkese açar.",
    "11": "Resmî belgeleri oku (İngilizce) ↗",
    "12": "Belgeler 12 Kasım 2026 tarihinde kontrol edildi."
  },
  "ru": {
    "0": "Официальные источники",
    "1": "Торговые комиссии",
    "2": "Варианты для создателей",
    "3": "Запуск со списком допуска",
    "5": "ОФИЦИАЛЬНАЯ ДОКУМЕНТАЦИЯ",
    "8": "EscapeHub указывает комиссию 1,2 % за сделку на этапе кривой цены. Создатель получает 0,5 %, а протокол — 0,7 %. При переходе к следующему этапу ставки меняются.",
    "9": "Создатель может оставить свою долю, распределить её между кошельками или вернуть участникам торговли в виде кешбэка.",
    "10": "Список создаётся вместе с токеном и применяется в блокчейне. Адреса в списке фиксированы. Создатель может открыть торги навсегда. При переходе к следующему этапу торги также становятся общедоступными.",
    "11": "Читать официальную документацию (на английском) ↗",
    "12": "Документация проверена 12 ноября 2026 г."
  },
  "zh-CN": {
    "0": "官方来源",
    "1": "交易手续费",
    "2": "创作者的分配选项",
    "3": "白名单发行",
    "5": "官方文档",
    "8": "EscapeHub 的文档显示，在价格曲线阶段，每笔交易的手续费为 1.2%，其中 0.5% 归创作者，0.7% 归协议。进入下一阶段后费率会变化。",
    "9": "创作者可保留自己的份额、将其分给多个钱包，或以返现方式返还给代币交易者。",
    "10": "白名单与代币同时创建，并在链上执行。名单中的地址固定。创作者可永久开放交易。进入下一阶段后，交易也会向公众开放。",
    "11": "阅读官方文档（英文）↗",
    "12": "文档核对日期：2026 年 11 月 12 日。"
  },
  "ja": {
    "0": "公式情報",
    "1": "取引手数料",
    "2": "作成者の選択肢",
    "3": "許可リスト付きローンチ",
    "5": "公式ドキュメント",
    "8": "EscapeHub によると、価格曲線の段階では取引ごとに 1.2% の手数料がかかります。内訳は作成者に 0.5%、プロトコルに 0.7% です。次の段階に進むと料率が変わります。",
    "9": "作成者は取り分を受け取る、複数のウォレットに分配する、または取引者にキャッシュバックする方法を選べます。",
    "10": "許可リストはトークンと同時に作成され、ブロックチェーン上で適用されます。一覧のアドレスは固定です。作成者は取引を恒久的に公開できます。次の段階に進むと、取引は自動的に公開されます。",
    "11": "公式ドキュメントを読む（英語）↗",
    "12": "ドキュメント確認日：2026年11月12日。"
  },
  "ko": {
    "0": "공식 출처",
    "1": "거래 수수료",
    "2": "생성자의 선택지",
    "3": "허용 목록으로 출시",
    "5": "공식 문서",
    "8": "EscapeHub에 따르면 가격 곡선 단계에서는 거래마다 1.2%의 수수료가 부과됩니다. 생성자에게 0.5%, 프로토콜에 0.7%가 돌아갑니다. 다음 단계로 넘어가면 수수료율이 달라집니다.",
    "9": "생성자는 자신의 몫을 받거나 여러 지갑에 나누거나 토큰 거래자에게 캐시백으로 돌려줄 수 있습니다.",
    "10": "허용 목록은 토큰과 함께 생성되며 블록체인에서 적용됩니다. 등록 주소는 고정됩니다. 생성자는 거래를 영구적으로 공개할 수 있습니다. 다음 단계로 넘어가면 거래도 공개됩니다.",
    "11": "공식 문서 읽기 (영어) ↗",
    "12": "문서 확인일: 2026년 11월 12일."
  }
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
    "footerBack": "Zurück zum Archiv ↑",
    "footerVisits": "Seitenbesuche"
  },
  "es": {
    "aboutLabel": "Sobre el archivo",
    "aboutTitle": "Menos ruido.",
    "aboutAccent": "Más claridad.",
    "aboutIntro": "The Escape Files es una serie editorial independiente de Tankothek que explica las ideas y el funcionamiento de EscapeHub con textos breves e historias visuales.",
    "aboutArchive": "El archivo reúne ediciones originales y resúmenes de octubre y noviembre de 2026. Algunos detalles pueden haber cambiado desde su publicación. Consulta EscapeHub para obtener información oficial actualizada.",
    "aboutLink": "Visitar EscapeHub ↗",
    "footerNote": "Archivo independiente de Tankothek",
    "footerBack": "Volver al archivo ↑",
    "footerVisits": "Visitas a la página"
  },
  "fr": {
    "aboutLabel": "À propos des archives",
    "aboutTitle": "Moins de bruit.",
    "aboutAccent": "Plus de clarté.",
    "aboutIntro": "The Escape Files est une série éditoriale indépendante de Tankothek. Des explications courtes et des récits en images présentent les idées et le fonctionnement d’EscapeHub.",
    "aboutArchive": "Les archives réunissent des éditions originales et des résumés d’octobre et novembre 2026. Certains détails peuvent avoir changé depuis leur publication. Consultez EscapeHub pour obtenir les informations officielles à jour.",
    "aboutLink": "Consulter EscapeHub ↗",
    "footerNote": "Archives indépendantes de Tankothek",
    "footerBack": "Retour aux archives ↑",
    "footerVisits": "Visites de la page"
  },
  "pt": {
    "aboutLabel": "Sobre o acervo",
    "aboutTitle": "Menos ruído.",
    "aboutAccent": "Mais clareza.",
    "aboutIntro": "The Escape Files é uma série editorial independente da Tankothek. Explicações breves e histórias visuais mostram as ideias por trás da EscapeHub e como a plataforma funciona.",
    "aboutArchive": "O acervo reúne edições originais e resumos de outubro e novembro de 2026. Alguns detalhes podem ter mudado desde a publicação. Consulte a EscapeHub para obter informações oficiais atualizadas.",
    "aboutLink": "Visitar a EscapeHub ↗",
    "footerNote": "Acervo independente da Tankothek",
    "footerBack": "Voltar ao acervo ↑",
    "footerVisits": "Visitas à página"
  },
  "tr": {
    "aboutLabel": "Arşiv hakkında",
    "aboutTitle": "Daha az gürültü.",
    "aboutAccent": "Daha çok anlayış.",
    "aboutIntro": "The Escape Files, Tankothek’in bağımsız yayın dizisidir. Kısa açıklamalar ve görsel anlatımlar, EscapeHub’ın ardındaki fikirleri ve platformun nasıl çalıştığını gösterir.",
    "aboutArchive": "Arşiv, Ekim ve Kasım 2026’ya ait özgün sayıları ve özetleri bir araya getirir. Bazı ayrıntılar yayımlandıktan sonra değişmiş olabilir. Güncel resmî bilgiler için EscapeHub’a bakın.",
    "aboutLink": "EscapeHub’ı ziyaret edin ↗",
    "footerNote": "Tankothek’in bağımsız arşivi",
    "footerBack": "Arşive dön ↑",
    "footerVisits": "Sayfa ziyaretleri"
  },
  "ru": {
    "aboutLabel": "Об архиве",
    "aboutTitle": "Меньше шума.",
    "aboutAccent": "Больше ясности.",
    "aboutIntro": "The Escape Files — независимая серия Tankothek. Краткие объяснения и иллюстрации показывают, какие идеи лежат в основе EscapeHub и как работает платформа.",
    "aboutArchive": "В архиве собраны оригинальные выпуски и краткие пересказы за октябрь и ноябрь 2026 года. Некоторые детали могли измениться после публикации. Актуальная официальная информация доступна на сайте EscapeHub.",
    "aboutLink": "Перейти на сайт EscapeHub ↗",
    "footerNote": "Независимый архив Tankothek",
    "footerBack": "Вернуться к архиву ↑",
    "footerVisits": "Посещения страницы"
  },
  "zh-CN": {
    "aboutLabel": "关于档案",
    "aboutTitle": "少一点喧嚣。",
    "aboutAccent": "多一点理解。",
    "aboutIntro": "The Escape Files 是 Tankothek 的独立编辑系列，通过简明的解说和图文故事介绍 EscapeHub 背后的理念及其运作方式。",
    "aboutArchive": "档案收录了 2026 年 10 月和 11 月的原版内容及摘要。部分细节可能在发布后有所变动。最新官方信息请查阅 EscapeHub。",
    "aboutLink": "访问 EscapeHub ↗",
    "footerNote": "Tankothek 独立档案",
    "footerBack": "返回档案 ↑",
    "footerVisits": "页面访问次数"
  },
  "ja": {
    "aboutLabel": "アーカイブについて",
    "aboutTitle": "雑音を減らし、",
    "aboutAccent": "理解を深める。",
    "aboutIntro": "The Escape Files は Tankothek が独自に制作する連載です。短い解説と画像を通じて、EscapeHub の背景にある考え方や仕組みを紹介します。",
    "aboutArchive": "アーカイブには、2026年10月と11月のオリジナル記事と要約を収録しています。公開後に内容が変更されている場合があります。最新の公式情報は EscapeHub をご覧ください。",
    "aboutLink": "EscapeHub を見る ↗",
    "footerNote": "Tankothek の独立アーカイブ",
    "footerBack": "アーカイブに戻る ↑",
    "footerVisits": "ページ訪問数"
  },
  "ko": {
    "aboutLabel": "아카이브 소개",
    "aboutTitle": "소음은 줄이고,",
    "aboutAccent": "이해는 깊게.",
    "aboutIntro": "The Escape Files는 Tankothek의 독립 기획 시리즈입니다. 짧은 설명과 이미지로 EscapeHub의 배경과 작동 방식을 소개합니다.",
    "aboutArchive": "아카이브에는 2026년 10월과 11월의 원본과 요약이 담겨 있습니다. 게시 후 일부 내용이 달라졌을 수 있습니다. 최신 공식 정보는 EscapeHub에서 확인하세요.",
    "aboutLink": "EscapeHub 방문 ↗",
    "footerNote": "Tankothek의 독립 아카이브",
    "footerBack": "아카이브로 돌아가기 ↑",
    "footerVisits": "페이지 방문 수"
  }
};
const aboutNodes = [...document.querySelectorAll('[data-about]')]
  .map(node => ({ node, english: node.textContent }));

function applyHomepageLanguage(code) {
  homepageLanguage = Object.hasOwn(homepageTranslations, code) ? code : 'en';
  document.documentElement.lang = homepageLanguage;
  languagePicker.value = homepageLanguage;
  const [menuLabel, navigationLabel] = navLabels[homepageLanguage];
  document.querySelector('#navToggleLabel').textContent = menuLabel;
  navToggle.closest('nav').setAttribute('aria-label', navigationLabel);
  const aboutCopy = aboutTranslations[homepageLanguage];
  for (const { node, english } of aboutNodes) {
    node.textContent = aboutCopy?.[node.dataset.about] ?? english;
  }
  const labels = Object.fromEntries(homepageLabels.map((key, index) => [key, homepageTranslations[homepageLanguage][index]]));
  for (const element of document.querySelectorAll('[data-label]')) {
    element.textContent = labels[element.dataset.label];
  }
  languagePicker.setAttribute('aria-label', labels.language);
  backToTop.title = backToTopLabels[homepageLanguage];
  backToTop.setAttribute('aria-label', backToTop.title);
  const search = document.querySelector('#search');
  search.placeholder = labels.search + '…';
  search.setAttribute('aria-label', labels.search);
  document.querySelector('#knowledge').lang = homepageLanguage;
  for (const {node, english} of knowledgeNodes) {
    node.textContent = knowledgeTranslations[homepageLanguage]?.[node.dataset.knowledge] ?? english;
  }
  renderLearn(homepageLanguage);
  setArchiveLanguage(homepageLanguage);
  localizeSiteSearch(homepageLanguage);
  renderFeatureText();
  setFeature(featureIndex);
  resetFeatureSlides();
  scheduleFeatureRotation();
}

languagePicker.addEventListener('change', () => {
  applyHomepageLanguage(languagePicker.value);
  const url = new URL(location.href);
  url.searchParams.set('lang', homepageLanguage);
  history.replaceState(history.state, '', url);
  try { localStorage.setItem('tankothek-language', homepageLanguage); } catch {}
});

window.addEventListener('popstate', () => {
  const language = initialHomepageLanguage();
  if (language !== homepageLanguage) applyHomepageLanguage(language);
});
applyHomepageLanguage(initialHomepageLanguage());
updateReaderFromUrl();
document.documentElement.classList.remove('preparing-language');
