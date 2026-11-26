const exampleTranslations = {
  en: {
    heading: 'Interactive examples',
    phase: 'Trading phase', phases: ['With a whitelist', 'Public trading'],
    wallets: ['Wallet on the list', 'Wallet outside the list'],
    access: ['Can buy', 'Cannot buy'],
    bought: 'Share of the launch supply bought', price: 'Illustrative price',
    note: 'Simplified model with example values.'
  },
  de: {
    heading: 'Interaktive Beispiele',
    phase: 'Handelsphase', phases: ['Mit Whitelist', 'Öffentlicher Handel'],
    wallets: ['Wallet auf der Liste', 'Wallet außerhalb der Liste'],
    access: ['Kauf möglich', 'Kauf gesperrt'],
    bought: 'Gekaufter Anteil der Startmenge', price: 'Beispielpreis',
    note: 'Vereinfachtes Modell mit Beispielwerten.'
  },
  es: {
    heading: 'Ejemplos interactivos',
    phase: 'Fase de negociación', phases: ['Con lista de permitidos', 'Negociación pública'],
    wallets: ['Billetera en la lista', 'Billetera fuera de la lista'],
    access: ['Puede comprar', 'Compra bloqueada'],
    bought: 'Proporción de la oferta inicial comprada', price: 'Precio de ejemplo',
    note: 'Modelo simplificado con valores de ejemplo.'
  },
  fr: {
    heading: 'Exemples interactifs',
    phase: 'Phase de négociation', phases: ['Avec liste d’autorisation', 'Négociation publique'],
    wallets: ['Portefeuille autorisé', 'Portefeuille hors liste'],
    access: ['Achat possible', 'Achat bloqué'],
    bought: 'Part de l’offre initiale achetée', price: 'Prix indicatif',
    note: 'Modèle simplifié avec des valeurs d’exemple.'
  },
  pt: {
    heading: 'Exemplos interativos',
    phase: 'Fase de negociação', phases: ['Com lista de permissão', 'Negociação pública'],
    wallets: ['Carteira na lista', 'Carteira fora da lista'],
    access: ['Compra liberada', 'Compra bloqueada'],
    bought: 'Parcela da oferta inicial comprada', price: 'Preço ilustrativo',
    note: 'Modelo simplificado com valores de exemplo.'
  },
  tr: {
    heading: 'Etkileşimli örnekler',
    phase: 'İşlem aşaması', phases: ['İzin listesiyle', 'Herkese açık işlemler'],
    wallets: ['Listedeki cüzdan', 'Liste dışındaki cüzdan'],
    access: ['Alım yapılabilir', 'Alım engelli'],
    bought: 'Satın alınan başlangıç arzı oranı', price: 'Örnek fiyat',
    note: 'Örnek değerlerle basitleştirilmiş model.'
  },
  ru: {
    heading: 'Интерактивные примеры',
    phase: 'Этап торгов', phases: ['Со списком допуска', 'Открытые торги'],
    wallets: ['Кошелёк в списке', 'Кошелёк вне списка'],
    access: ['Покупка доступна', 'Покупка закрыта'],
    bought: 'Доля выкупленного стартового объёма', price: 'Условная цена',
    note: 'Упрощённая модель с условными значениями.'
  },
  'zh-CN': {
    heading: '互动示例',
    phase: '交易阶段', phases: ['启用白名单', '公开交易'],
    wallets: ['白名单内的钱包', '白名单外的钱包'],
    access: ['可以购买', '禁止购买'],
    bought: '已购买的初始供应比例', price: '示例价格',
    note: '使用示例数值的简化模型。'
  },
  ja: {
    heading: '操作できる例',
    phase: '取引段階', phases: ['ホワイトリストあり', '一般公開取引'],
    wallets: ['リストにあるウォレット', 'リスト外のウォレット'],
    access: ['購入可能', '購入不可'],
    bought: '初期供給量のうち購入済みの割合', price: '例示価格',
    note: 'サンプル値を使った簡略モデルです。'
  },
  ko: {
    heading: '직접 체험하는 예시',
    phase: '거래 단계', phases: ['화이트리스트 적용', '공개 거래'],
    wallets: ['목록에 있는 지갑', '목록에 없는 지갑'],
    access: ['구매 가능', '구매 제한'],
    bought: '초기 공급량 중 구매된 비율', price: '예시 가격',
    note: '예시 수치를 사용한 단순화 모델입니다.'
  }
};

const glossaryExamples = document.querySelector('#glossaryExamples');
const exampleSelections = new Map();
const exampleCreatorRate = 0.005;
let examplePurchase = 40;
let exampleTradeAmount = 100;

function comparisonExample(id, label, scenario, note) {
  const [options, ...rows] = scenario;
  return `<div class="comparison-example">
    ${note ? `<p class="example-note">${escapeHTML(note)}</p>` : ''}
    <div class="example-phases" role="group" aria-label="${escapeHTML(label)}">
      ${options.map((option, index) => `<button type="button" aria-pressed="false" data-example-phase="${index}">${escapeHTML(option)}</button>`).join('')}
    </div>
    <dl class="example-results" aria-live="polite" aria-atomic="true">
      ${rows.map(([label], index) => `<div><dt>${escapeHTML(label)}</dt><dd>
        <span data-example-result${id === '001' && index === 1 ? ' id="exampleGuestStatus"' : ''}></span>
      </dd></div>`).join('')}
    </dl>
  </div>`;
}

function connectComparison(panel, scenario) {
  const id = panel.dataset.term;
  const rows = scenario.slice(1);
  const buttons = panel.querySelectorAll('[data-example-phase]');
  const results = panel.querySelectorAll('[data-example-result]');
  function update(choice) {
    buttons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === choice)));
    results.forEach((span, index) => {
      span.textContent = rows[index][choice + 1];
      if (id === '001') span.dataset.allowed = String(index === 0 || choice === 1);
    });
  }
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    exampleSelections.set(id, index);
    update(index);
  }));
  update(exampleSelections.get(id) ?? 0);
}

function bondingCurveExample(copy, formatPercent) {
  return `<div class="curve-example">
    <p class="example-note">${escapeHTML(copy.note)}</p>
    <div class="curve-values">
      <label for="examplePurchase">${escapeHTML(copy.bought)} <output id="examplePurchaseValue" for="examplePurchase" aria-live="off"></output></label>
      <span>${escapeHTML(copy.price)} <output id="examplePrice" for="examplePurchase" aria-live="off"></output></span>
    </div>
    <input id="examplePurchase" type="range" min="0" max="100" step="1" value="${examplePurchase}">
    <div class="curve-figure">
      <svg viewBox="0 0 520 190" aria-hidden="true" focusable="false">
        <path class="curve-grid" d="M20 20H500 M20 57.5H500 M20 95H500 M20 132.5H500 M20 170H500 M20 20V170 M140 20V170 M260 20V170 M380 20V170 M500 20V170"/>
        <path class="curve-fill" d="M20 170 Q260 170 500 20 V170 Z"/>
        <path class="curve-line" d="M20 170 Q260 170 500 20"/>
        <line id="exampleCurveGuide" class="curve-guide" y2="170"/>
        <circle id="exampleCurvePoint" class="curve-point" r="6"/>
      </svg>
      <div class="curve-scale" aria-hidden="true"><span>${formatPercent.format(0)}</span><span>${formatPercent.format(.5)}</span><span>${formatPercent.format(1)}</span></div>
    </div>
  </div>`;
}

function connectBondingCurve(language, formatPercent) {
  const formatNumber = new Intl.NumberFormat(language, {maximumFractionDigits:2});
  const purchase = glossaryExamples.querySelector('#examplePurchase');
  const purchaseValue = glossaryExamples.querySelector('#examplePurchaseValue');
  const price = glossaryExamples.querySelector('#examplePrice');
  const point = glossaryExamples.querySelector('#exampleCurvePoint');
  const guide = glossaryExamples.querySelector('#exampleCurveGuide');
  function updateCurve() {
    const share = examplePurchase / 100;
    const x = 20 + 480 * share;
    const y = 170 - 150 * share ** 2;
    purchaseValue.value = formatPercent.format(share);
    purchase.setAttribute('aria-valuetext', purchaseValue.value);
    price.value = formatNumber.format(1 + 4 * share ** 2);
    point.setAttribute('cx', x);
    point.setAttribute('cy', y);
    guide.setAttribute('x1', x);
    guide.setAttribute('x2', x);
    guide.setAttribute('y1', y);
  }
  purchase.addEventListener('input', () => {
    examplePurchase = purchase.valueAsNumber;
    updateCurve();
  });
  updateCurve();
}

function creatorFeeExample(copy, labels, language) {
  const [tradeAmount, creatorShare] = labels;
  const rate = new Intl.NumberFormat(language, {style:'percent', maximumFractionDigits:1});
  return `<div class="curve-example">
    <p class="example-note">${escapeHTML(copy.note)}</p>
    <div class="curve-values">
      <label for="exampleTradeAmount">${escapeHTML(tradeAmount)} <output id="exampleTradeValue" for="exampleTradeAmount" aria-live="off"></output></label>
      <span>${escapeHTML(creatorShare)} (${rate.format(exampleCreatorRate)}) <output id="exampleCreatorShare" for="exampleTradeAmount" aria-live="off"></output></span>
    </div>
    <input id="exampleTradeAmount" type="range" min="0" max="500" step="10" value="${exampleTradeAmount}">
  </div>`;
}

function connectCreatorFee(language) {
  const euros = new Intl.NumberFormat(language, {style:'currency', currency:'EUR'});
  const amount = glossaryExamples.querySelector('#exampleTradeAmount');
  const trade = glossaryExamples.querySelector('#exampleTradeValue');
  const share = glossaryExamples.querySelector('#exampleCreatorShare');
  function update() {
    trade.value = euros.format(exampleTradeAmount);
    share.value = euros.format(exampleTradeAmount * exampleCreatorRate);
    amount.setAttribute('aria-valuetext', trade.value);
  }
  amount.addEventListener('input', () => {
    exampleTradeAmount = amount.valueAsNumber;
    update();
  });
  update();
}

function renderGlossaryExamples(language) {
  const copy = exampleTranslations[language];
  const {fee, ...comparisons} = termExampleTranslations[language];
  comparisons['001'] = [
    copy.phases,
    [copy.wallets[0], copy.access[0], copy.access[0]],
    [copy.wallets[1], copy.access[1], copy.access[0]]
  ];
  const [, ...definitions] = glossaryTranslations[language];
  const terms = glossaryTerms.map(([english, id], index) => {
    const [title, definition] = definitions[index];
    return {english, id, title, definition};
  });
  const firstTwo = terms.filter(({id}) => id === '001' || id === '016');
  const remaining = terms.filter(({id}) => id !== '001' && id !== '016');
  const open = glossaryExamples.querySelector('details[open]')?.id;
  const formatPercent = new Intl.NumberFormat(language, {style:'percent'});

  glossaryExamples.innerHTML = `<h4 id="glossaryExamplesTitle">${escapeHTML(copy.heading)}</h4>` +
    [...firstTwo, ...remaining].map(({english, id, title, definition}) => {
      const termId = 'term-' + id;
      const panelId = id === '001' ? 'whitelist-example' : id === '016' ? 'bonding-example' : termId;
      const englishName = title.toLowerCase() !== english.toLowerCase()
        ? ` <small lang="en">(${escapeHTML(english)})</small>`
        : '';
      const file = files.find(candidate => candidate.id === id);
      const fileLabel = strings().file + ' ' + id;
      const fileTile = file ? `<a class="term-file-tile" href="#file-${id}" data-open="${id}"
        aria-label="${escapeHTML(fileLabel + ' · ' + fileText(file, language).title)}">
        ${file.cover ? `<img src="${escapeHTML(fileThumbnail(file))}" alt="" loading="lazy" decoding="async">` : ''}
        <span>${escapeHTML(fileLabel)}</span>
      </a>` : '';
      let example = '';
      if (id === '016') example = bondingCurveExample(copy, formatPercent);
      else if (id === '006') example = creatorFeeExample(copy, fee, language);
      else if (comparisons[id]) {
        example = comparisonExample(id, id === '001' ? copy.phase : title, comparisons[id], id === '001' ? '' : copy.note);
      }
      return `<details id="${panelId}" class="term-example" name="term-examples" data-term="${id}"${open === panelId ? ' open' : ''}>
        <summary class="disclosure-summary"${panelId !== termId ? ` id="${termId}"` : ''}><strong>${escapeHTML(title)}${englishName}</strong></summary>
        <div class="term-example-content${fileTile ? ' has-file' : ''}">
          ${fileTile}
          <p class="term-definition">${escapeHTML(definition)}</p>
          ${example ? `<div class="term-tryout">${example}</div>` : ''}
        </div>
      </details>`;
    }).join('');

  for (const panel of glossaryExamples.querySelectorAll('[data-term]')) {
    const scenario = comparisons[panel.dataset.term];
    if (scenario) connectComparison(panel, scenario);
  }
  connectBondingCurve(language, formatPercent);
  connectCreatorFee(language);
}
