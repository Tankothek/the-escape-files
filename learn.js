const learnArticles = [
  'esc-token', 'how-to-create-a-token', 'multichain', 'escapeswap',
  'anti-rug-bonding-curve', 'revenue-model', 'escapehub-fees', 'signless-trading',
  'buy-crypto-with-card', 'escapehub-app', 'is-escapehub-safe'
];

const learnTranslations = {
  en: [
    ['Questions & answers', 'Read the EscapeHub documentation'],
    ['What is the $ESC token?', 'EscapeHub describes $ESC as its utility token. The documentation lists uses such as discounts on platform services and staking.'],
    ['How do I create a token?', 'Choose a network, enter the name, symbol and description, and upload an image before deploying the token.'],
    ['Which networks does EscapeHub support?', 'The documentation lists Solana and selected EVM networks, including Base, Ethereum, Arbitrum and BNB Smart Chain.'],
    ['What is EscapeSwap?', 'EscapeHub’s decentralized exchange on Solana. The documentation explains how a token moves there when it completes its initial trading phase.'],
    ['What risks does locked liquidity address?', 'A bonding curve governs initial pricing, and a liquidity lock restricts withdrawals from the pool. Tokens can still lose value.'],
    ['How does EscapeHub earn revenue?', 'The documentation explains how platform fees are allocated, including the portions for creators and the use of platform revenue for $ESC buybacks.'],
    ['How do trading fees work?', 'Fees change when a token moves from the bonding curve to the next trading phase. The documentation explains the split between the creator and the protocol.'],
    ['What is signless trading?', 'With the built-in wallet, EscapeHub describes trades that go on-chain without a separate confirmation popup for each trade.'],
    ['How can I buy crypto by card?', 'The guide explains how to fund the built-in wallet using a card or a supported payment method.'],
    ['Where can I use the EscapeHub app?', 'EscapeHub describes browser access and publishes the availability of its Android and iOS apps in this guide.'],
    ['How can I check EscapeHub’s security information?', 'The article brings together the audits, identity checks and official contact verification tools that EscapeHub lists.']
  ],
  de: [
    ['Fragen & Antworten', 'EscapeHub-Dokumentation lesen (Englisch)'],
    ['Was ist der $ESC-Token?', 'EscapeHub beschreibt $ESC als Plattform-Token. Die Dokumentation nennt etwa Rabatte auf Plattformdienste und Staking als Einsatzmöglichkeiten.'],
    ['Wie erstelle ich einen Token?', 'Wähle ein Netzwerk, gib Name, Kürzel und Beschreibung ein und lade ein Bild hoch. Danach veröffentlichst du den Token im gewählten Netzwerk.'],
    ['Welche Netzwerke unterstützt EscapeHub?', 'Die Dokumentation nennt Solana und ausgewählte EVM-Netzwerke, darunter Base, Ethereum, Arbitrum und BNB Smart Chain.'],
    ['Was ist EscapeSwap?', 'EscapeSwap ist die dezentrale Börse von EscapeHub auf Solana. Die Dokumentation erklärt, wie ein Token nach Abschluss der ersten Handelsphase dorthin wechselt.'],
    ['Welche Risiken verringert gesperrte Liquidität?', 'Eine Bonding Curve bestimmt die Preisbildung zum Start. Eine Liquiditätssperre schränkt Entnahmen aus dem Pool ein. Token können weiterhin an Wert verlieren.'],
    ['Wie verdient EscapeHub Geld?', 'Die Dokumentation erklärt, wie Plattformgebühren aufgeteilt werden, welcher Anteil an Ersteller geht und wie Plattformerlöse für $ESC-Rückkäufe eingesetzt werden.'],
    ['Wie funktionieren die Handelsgebühren?', 'Beim Wechsel von der Bonding Curve in die nächste Handelsphase ändern sich die Gebühren. Die Dokumentation erklärt die Aufteilung zwischen Ersteller und Protokoll.'],
    ['Was bedeutet Signless Trading?', 'Laut EscapeHub werden Trades mit der integrierten Wallet auf der Blockchain ausgeführt, ohne dass pro Trade ein separates Bestätigungsfenster erscheint.'],
    ['Wie kaufe ich Krypto per Karte?', 'Die Anleitung erklärt, wie du die integrierte Wallet per Karte oder mit einer anderen unterstützten Zahlungsmethode auflädst.'],
    ['Wo kann ich die EscapeHub-App nutzen?', 'EscapeHub beschreibt die Nutzung im Browser und informiert in diesem Artikel über die Verfügbarkeit der Android- und iOS-Apps.'],
    ['Wie kann ich die Sicherheitsangaben zu EscapeHub prüfen?', 'Der Artikel bündelt die von EscapeHub genannten Prüfberichte, Identitätsprüfungen und Möglichkeiten zur Überprüfung offizieller Kontakte.']
  ],
  es: [
    ['Preguntas y respuestas', 'Leer la documentación de EscapeHub (en inglés)'],
    ['¿Qué es el token $ESC?', 'EscapeHub presenta $ESC como su token de utilidad. La documentación menciona usos como descuentos en servicios y staking.'],
    ['¿Cómo creo un token?', 'Elige una red, indica el nombre, el símbolo y la descripción, y sube una imagen antes de desplegar el token.'],
    ['¿Qué redes admite EscapeHub?', 'La documentación enumera Solana y determinadas redes EVM, entre ellas Base, Ethereum, Arbitrum y BNB Smart Chain.'],
    ['¿Qué es EscapeSwap?', 'Es el exchange descentralizado de EscapeHub en Solana. La documentación explica cómo migra allí un token tras completar su fase inicial de negociación.'],
    ['¿Qué riesgos reduce el bloqueo de liquidez?', 'Una curva de vinculación determina el precio inicial y el bloqueo de liquidez limita las retiradas del fondo. Los tokens aún pueden perder valor.'],
    ['¿Cómo obtiene ingresos EscapeHub?', 'La documentación explica cómo se reparten las comisiones, qué parte corresponde a los creadores y cómo se usan los ingresos para recomprar $ESC.'],
    ['¿Cómo funcionan las comisiones de negociación?', 'Las comisiones cambian al pasar de la curva de vinculación a la siguiente fase. La documentación explica el reparto entre el creador y el protocolo.'],
    ['¿Qué es operar sin confirmaciones emergentes?', 'Según EscapeHub, con la billetera integrada las operaciones se ejecutan en la cadena sin abrir una ventana de confirmación por cada operación.'],
    ['¿Cómo compro cripto con tarjeta?', 'La guía explica cómo añadir fondos a la billetera integrada con una tarjeta u otro método de pago compatible.'],
    ['¿Dónde puedo usar la aplicación de EscapeHub?', 'EscapeHub describe el acceso desde el navegador y publica en esta guía la disponibilidad de sus aplicaciones para Android e iOS.'],
    ['¿Cómo verifico la información de seguridad de EscapeHub?', 'El artículo reúne las auditorías, las verificaciones de identidad y las herramientas para comprobar contactos oficiales que menciona EscapeHub.']
  ],
  fr: [
    ['Questions et réponses', 'Lire la documentation EscapeHub (en anglais)'],
    ['Qu’est-ce que le jeton $ESC ?', 'EscapeHub présente $ESC comme son jeton utilitaire. La documentation cite notamment des réductions sur les services et le staking.'],
    ['Comment créer un jeton ?', 'Choisissez un réseau, renseignez le nom, le symbole et la description, puis ajoutez une image avant de déployer le jeton.'],
    ['Quels réseaux EscapeHub prend-il en charge ?', 'La documentation cite Solana et certains réseaux EVM, dont Base, Ethereum, Arbitrum et BNB Smart Chain.'],
    ['Qu’est-ce qu’EscapeSwap ?', 'C’est la plateforme d’échange décentralisée d’EscapeHub sur Solana. La documentation explique comment un jeton y passe après sa phase initiale d’échange.'],
    ['Quels risques le verrouillage des liquidités réduit-il ?', 'Une courbe fixe le prix au lancement et le verrouillage limite les retraits du pool. Les jetons peuvent toujours perdre de la valeur.'],
    ['Comment EscapeHub génère-t-il des revenus ?', 'La documentation explique la répartition des frais, la part des créateurs et l’utilisation des recettes pour racheter des $ESC.'],
    ['Comment fonctionnent les frais de transaction ?', 'Les frais changent au passage de la courbe de prix à la phase suivante. La documentation détaille la répartition entre créateur et protocole.'],
    ['Qu’est-ce que le trading sans fenêtre de confirmation ?', 'Selon EscapeHub, le portefeuille intégré exécute les transactions sur la blockchain sans afficher de fenêtre de confirmation à chaque opération.'],
    ['Comment acheter des cryptos par carte ?', 'Le guide explique comment approvisionner le portefeuille intégré avec une carte ou un autre moyen de paiement pris en charge.'],
    ['Où utiliser l’application EscapeHub ?', 'Ce guide explique comment accéder à EscapeHub dans le navigateur et indique la disponibilité des applications Android et iOS.'],
    ['Comment vérifier les informations de sécurité d’EscapeHub ?', 'L’article rassemble les audits, les vérifications d’identité et les outils de vérification des contacts officiels cités par EscapeHub.']
  ],
  pt: [
    ['Perguntas e respostas', 'Ler a documentação da EscapeHub (em inglês)'],
    ['O que é o token $ESC?', 'A EscapeHub apresenta o $ESC como seu token de utilidade. A documentação cita usos como descontos em serviços e staking.'],
    ['Como criar um token?', 'Escolha uma rede, informe o nome, o símbolo e a descrição e envie uma imagem antes de implantar o token.'],
    ['Quais redes a EscapeHub aceita?', 'A documentação lista Solana e algumas redes EVM, incluindo Base, Ethereum, Arbitrum e BNB Smart Chain.'],
    ['O que é a EscapeSwap?', 'É a corretora descentralizada da EscapeHub na Solana. A documentação explica como um token migra para lá após a fase inicial de negociação.'],
    ['Que riscos o bloqueio de liquidez reduz?', 'Uma curva determina o preço inicial e o bloqueio de liquidez restringe retiradas do pool. Os tokens ainda podem perder valor.'],
    ['Como a EscapeHub gera receita?', 'A documentação explica como as taxas são divididas, qual parcela vai para criadores e como a receita financia recompras de $ESC.'],
    ['Como funcionam as taxas de negociação?', 'As taxas mudam na transição da curva de preço para a etapa seguinte. A documentação detalha a divisão entre criador e protocolo.'],
    ['O que é negociação sem janela de confirmação?', 'Segundo a EscapeHub, com a carteira integrada as operações ocorrem na blockchain sem uma janela de confirmação para cada negociação.'],
    ['Como comprar cripto com cartão?', 'O guia explica como adicionar saldo à carteira integrada com cartão ou outro meio de pagamento aceito.'],
    ['Onde posso usar o aplicativo da EscapeHub?', 'O guia explica o acesso pelo navegador e informa a disponibilidade dos aplicativos para Android e iOS.'],
    ['Como verificar as informações de segurança da EscapeHub?', 'O artigo reúne as auditorias, as verificações de identidade e as ferramentas para confirmar contatos oficiais citadas pela EscapeHub.']
  ],
  tr: [
    ['Sorular ve yanıtlar', 'EscapeHub belgelerini okuyun (İngilizce)'],
    ['$ESC tokenı nedir?', 'EscapeHub, $ESC’yi kendi kullanım tokenı olarak tanımlıyor. Belgelerde hizmet indirimleri ve staking gibi kullanım alanları yer alıyor.'],
    ['Nasıl token oluştururum?', 'Bir ağ seçin, ad, sembol ve açıklamayı girin ve tokenı ağda yayımlamadan önce bir görsel yükleyin.'],
    ['EscapeHub hangi ağları destekliyor?', 'Belgelerde Solana ile Base, Ethereum, Arbitrum ve BNB Smart Chain dahil olmak üzere seçili EVM ağları listeleniyor.'],
    ['EscapeSwap nedir?', 'EscapeHub’ın Solana üzerindeki merkeziyetsiz borsasıdır. Belgeler, ilk alım satım aşamasını tamamlayan tokenın buraya nasıl geçtiğini açıklıyor.'],
    ['Likidite kilidi hangi riskleri azaltır?', 'Başlangıç fiyatını fiyat eğrisi belirler, likidite kilidi ise havuzdan çekimleri kısıtlar. Tokenlar yine de değer kaybedebilir.'],
    ['EscapeHub nasıl gelir elde ediyor?', 'Belgeler ücretlerin nasıl paylaşıldığını, üreticilere ayrılan payı ve platform gelirlerinin $ESC geri alımlarında nasıl kullanıldığını açıklıyor.'],
    ['Alım satım ücretleri nasıl işliyor?', 'Fiyat eğrisinden bir sonraki aşamaya geçildiğinde ücretler değişir. Belgeler, payın üretici ve protokol arasında nasıl bölündüğünü açıklıyor.'],
    ['Onay penceresi olmadan işlem yapmak ne demek?', 'EscapeHub’a göre entegre cüzdanla işlemler, her alım satım için ayrı bir onay penceresi açılmadan zincirde yürütülür.'],
    ['Kartla nasıl kripto alırım?', 'Rehber, entegre cüzdana kartla veya desteklenen başka bir ödeme yöntemiyle nasıl bakiye ekleneceğini açıklıyor.'],
    ['EscapeHub uygulamasını nerede kullanabilirim?', 'EscapeHub, tarayıcıdan erişimi ve Android ile iOS uygulamalarının kullanılabilirliğini bu rehberde açıklıyor.'],
    ['EscapeHub’ın güvenlik bilgilerini nasıl doğrularım?', 'Makale, EscapeHub’ın belirttiği denetimleri, kimlik doğrulamalarını ve resmî iletişim kanallarını doğrulama araçlarını bir araya getiriyor.']
  ],
  ru: [
    ['Вопросы и ответы', 'Читать документацию EscapeHub (на английском)'],
    ['Что такое токен $ESC?', 'EscapeHub называет $ESC служебным токеном платформы. В документации указаны такие применения, как скидки на услуги и стейкинг.'],
    ['Как создать токен?', 'Выберите сеть, укажите название, символ и описание, затем загрузите изображение и выпустите токен в выбранной сети.'],
    ['Какие сети поддерживает EscapeHub?', 'В документации указаны Solana и отдельные сети EVM, включая Base, Ethereum, Arbitrum и BNB Smart Chain.'],
    ['Что такое EscapeSwap?', 'Это децентрализованная биржа EscapeHub в сети Solana. В документации описано, как токен переходит туда после завершения начального этапа торгов.'],
    ['Какие риски снижает блокировка ликвидности?', 'Начальную цену определяет кривая ценообразования, а блокировка ограничивает вывод средств из пула. Цена токена всё равно может снизиться.'],
    ['Как EscapeHub получает доход?', 'Документация объясняет распределение комиссий, долю создателей токенов и использование доходов платформы для выкупа $ESC.'],
    ['Как устроены торговые комиссии?', 'Комиссии меняются при переходе с кривой ценообразования на следующий этап. Документация описывает распределение между создателем и протоколом.'],
    ['Что значит торговля без окон подтверждения?', 'По описанию EscapeHub, со встроенным кошельком сделки выполняются в блокчейне без отдельного окна подтверждения для каждой операции.'],
    ['Как купить криптовалюту картой?', 'В руководстве описано пополнение встроенного кошелька картой или другим поддерживаемым способом оплаты.'],
    ['Где доступно приложение EscapeHub?', 'В руководстве описан доступ через браузер и указана доступность приложений для Android и iOS.'],
    ['Как проверить сведения о безопасности EscapeHub?', 'В статье собраны сведения об аудитах, проверках личности и инструментах для проверки официальных контактов, которые перечисляет EscapeHub.']
  ],
  'zh-CN': [
    ['常见问题', '阅读 EscapeHub 文档（英文）'],
    ['$ESC 代币是什么？', 'EscapeHub 将 $ESC 定义为平台的实用代币。文档列举了平台服务折扣和质押等用途。'],
    ['如何创建代币？', '先选择网络，填写名称、符号和描述并上传图片，然后在所选网络上部署代币。'],
    ['EscapeHub 支持哪些网络？', '文档列出了 Solana 和部分 EVM 网络，包括 Base、Ethereum、Arbitrum 和 BNB Smart Chain。'],
    ['EscapeSwap 是什么？', '它是 EscapeHub 在 Solana 上的去中心化交易所。文档介绍了代币如何在初始交易阶段结束后迁移至该交易所。'],
    ['锁定流动性可以降低哪些风险？', '联合曲线决定初始价格，锁定流动性会限制从资金池提取资产。代币仍可能贬值。'],
    ['EscapeHub 如何获得收入？', '文档介绍了平台费用的分配方式、创建者获得的份额，以及平台收入如何用于回购 $ESC。'],
    ['交易手续费是如何分配的？', '从联合曲线转入下一交易阶段时，手续费会发生变化。文档解释了创建者与协议之间的分配方式。'],
    ['什么是免弹窗确认交易？', '根据 EscapeHub 的说明，使用内置钱包时，交易在链上执行，每笔交易无需额外的确认弹窗。'],
    ['如何用银行卡购买加密货币？', '指南介绍了如何使用银行卡或其他受支持的支付方式为内置钱包充值。'],
    ['在哪里可以使用 EscapeHub 应用？', '指南介绍了浏览器访问方式，并提供 Android 和 iOS 应用的可用信息。'],
    ['如何核实 EscapeHub 的安全信息？', '文章汇总了 EscapeHub 列出的审计、身份验证及官方联系方式验证工具。']
  ],
  ja: [
    ['よくある質問', 'EscapeHub の公式ドキュメントを読む（英語）'],
    ['$ESC トークンとは？', 'EscapeHub は $ESC をプラットフォームのユーティリティトークンと説明しています。公式文書にはサービス料金の割引やステーキングなどの用途が掲載されています。'],
    ['トークンを作成するには？', 'ネットワークを選び、名前・シンボル・説明を入力して画像をアップロードし、選んだネットワークにデプロイします。'],
    ['EscapeHub はどのネットワークに対応していますか？', '公式文書には Solana と、Base、Ethereum、Arbitrum、BNB Smart Chain など一部の EVM ネットワークが記載されています。'],
    ['EscapeSwap とは？', 'Solana 上にある EscapeHub の分散型取引所です。公式文書は、トークンが初期取引段階を終えた後に移行する仕組みを説明しています。'],
    ['流動性のロックはどんなリスクを抑えますか？', '初期価格はボンディングカーブで決まり、流動性のロックはプールからの引き出しを制限します。トークンの価値は下がることがあります。'],
    ['EscapeHub はどうやって収益を得ていますか？', '公式文書は、手数料の配分、作成者の取り分、プラットフォーム収益を使った $ESC の買い戻しを説明しています。'],
    ['取引手数料はどう決まりますか？', 'ボンディングカーブの段階から次の取引段階へ移ると手数料が変わります。作成者とプロトコルへの配分は公式文書で確認できます。'],
    ['確認画面なしの取引とは？', 'EscapeHub によると、内蔵ウォレットでは取引ごとの確認画面を開かずに、ブロックチェーン上で取引を実行できます。'],
    ['カードで暗号資産を買うには？', 'ガイドでは、カードやその他の対応する支払い方法で内蔵ウォレットに入金する手順を説明しています。'],
    ['EscapeHub アプリはどこで使えますか？', 'ガイドにはブラウザからのアクセス方法と Android・iOS アプリの提供状況が掲載されています。'],
    ['EscapeHub の安全性に関する情報を確認するには？', '記事には EscapeHub が挙げる監査、本人確認、公式連絡先を照合するためのツールがまとめられています。']
  ],
  ko: [
    ['질문과 답변', 'EscapeHub 공식 문서 읽기(영어)'],
    ['$ESC 토큰이란 무엇인가요?', 'EscapeHub는 $ESC를 플랫폼의 유틸리티 토큰으로 설명합니다. 문서에는 서비스 할인과 스테이킹 등의 용도가 나옵니다.'],
    ['토큰은 어떻게 만드나요?', '네트워크를 고르고 이름, 심볼, 설명을 입력한 뒤 이미지를 올리고 선택한 네트워크에 토큰을 배포합니다.'],
    ['EscapeHub는 어떤 네트워크를 지원하나요?', '공식 문서에는 Solana와 Base, Ethereum, Arbitrum, BNB Smart Chain 등 일부 EVM 네트워크가 나와 있습니다.'],
    ['EscapeSwap이란 무엇인가요?', 'Solana에 있는 EscapeHub의 탈중앙화 거래소입니다. 공식 문서는 토큰이 초기 거래 단계를 마친 뒤 이곳으로 이동하는 방식을 설명합니다.'],
    ['유동성 잠금은 어떤 위험을 줄이나요?', '본딩 커브가 초기 가격을 결정하고 유동성 잠금은 풀에서의 인출을 제한합니다. 토큰 가치는 여전히 하락할 수 있습니다.'],
    ['EscapeHub는 어떻게 수익을 내나요?', '공식 문서는 수수료 배분, 토큰 제작자 몫, 플랫폼 수익을 통한 $ESC 바이백을 설명합니다.'],
    ['거래 수수료는 어떻게 적용되나요?', '본딩 커브에서 다음 거래 단계로 넘어갈 때 수수료가 달라집니다. 공식 문서는 제작자와 프로토콜 간 배분을 안내합니다.'],
    ['확인 팝업 없는 거래란 무엇인가요?', 'EscapeHub에 따르면 내장 지갑을 사용하면 별도의 거래별 확인 팝업 없이 블록체인에서 거래가 실행됩니다.'],
    ['카드로 암호화폐를 어떻게 사나요?', '가이드에서 카드나 기타 지원 결제 수단으로 내장 지갑에 자금을 충전하는 방법을 설명합니다.'],
    ['EscapeHub 앱은 어디서 이용할 수 있나요?', '이 가이드에는 브라우저 접속 방법과 Android 및 iOS 앱의 제공 상태가 나와 있습니다.'],
    ['EscapeHub의 보안 정보는 어떻게 확인하나요?', 'EscapeHub가 제시하는 감사, 신원 확인 및 공식 연락처 검증 도구를 소개합니다.']
  ]
};

function renderLearn(language) {
  const [[title, linkLabel], ...questions] = learnTranslations[language];
  document.querySelector('#learnNav').textContent = title;
  document.querySelector('#learnTitle').textContent = title;
  const list = document.querySelector('#learnList');
  const openIds = new Set([...list.querySelectorAll('details[open]')].map(item => item.id));
  list.innerHTML = questions.map(([question, answer], index) => {
    const slug = learnArticles[index];
    const id = 'learn-' + slug;
    return `<details id="${id}"${openIds.has(id) ? ' open' : ''}>
      <summary>${escapeHTML(question)}</summary>
      <div><p>${escapeHTML(answer)}</p>
        ${externalLink('https://escapehub.ai/learn/' + slug, linkLabel)}
      </div>
    </details>`;
  }).join('');
}
