const learnArticles = [
  'esc-token', 'how-to-create-a-token', 'multichain', 'escapeswap',
  'anti-rug-bonding-curve', 'revenue-model', 'escapehub-fees', 'signless-trading',
  'buy-crypto-with-card', 'escapehub-app', 'is-escapehub-safe'
];

const learnTranslations = {
  en: [
    ['Questions & answers', 'Official source (English)'],
    ['What is the $ESC token?', 'EscapeHub describes $ESC as its utility token with a fixed supply. Its documentation lists potential uses such as discounts on platform services and staking.', 'The platform launch and the $ESC token launch are separate events. EscapeHub also describes a plan to fund $ESC buybacks with platform fees. Check the official source for token availability and the contract address.'],
    ['How do I create a token?', 'Choose the blockchain where you want your token to launch. Enter a name, symbol and description, upload an image, then review the details before deploying it.', 'The token starts trading on a bonding curve, a formula that updates the price as people buy and sell. When the curve reaches its target, trading moves to a decentralized exchange.'],
    ['Which networks does EscapeHub support?', 'EscapeHub lists Solana and selected Ethereum-compatible networks, including Base, Ethereum, Arbitrum and BNB Smart Chain.', 'When you create a token, you choose the network where it will launch. You can browse several networks in the same app, while each token stays on its own network.'],
    ['What is EscapeSwap?', 'EscapeSwap is EscapeHub’s decentralized exchange on Solana. A Solana token moves there automatically once its bonding curve reaches the trading target.', 'The token stays on Solana. What changes is how it trades: orders are priced through a liquidity pool instead of the launch curve.'],
    ['What risks does locked liquidity address?', 'The bonding curve sets prices during initial trading. After a token moves to an exchange, locked liquidity limits withdrawals from the trading pool.', 'This addresses the risk of liquidity being pulled out of the pool. A token can still fall in price, and a project can still fail or mislead buyers.'],
    ['How does EscapeHub earn revenue?', 'EscapeHub describes trading fees as one source of platform revenue. A portion of each fee can go to the token’s creator, while another portion goes to the protocol.', 'EscapeHub says part of the platform’s fees is earmarked for $ESC buybacks. The protocol’s share and the creator’s share have different recipients and uses.'],
    ['How do trading fees work?', 'EscapeHub documents a 1.2% trading fee during the bonding-curve phase: 0.5% for the creator and 0.7% for the protocol. After graduation, the fee depends on the token’s market-cap tier.', 'The creator can keep their share, split it between wallets or redirect it to traders as cashback. A payment provider may charge separately when you fund a wallet.'],
    ['What is signless trading?', 'With the integrated wallet, EscapeHub can execute buys and sells on-chain without a separate wallet popup each time. Tapping Buy or Sell authorizes the trade.', 'Review the token, amount and shown terms in the trade screen before tapping the button, since there may be no second confirmation.'],
    ['How can I buy crypto by card?', 'In the app, open the wallet’s funding option, select a card or a supported payment method such as Apple Pay or Google Pay, and enter the amount.', 'The payment provider shows the quote and any fee before you confirm. Funding adds crypto to the wallet. Buying a specific project token is a separate trade.'],
    ['Where can I use the EscapeHub app?', 'EscapeHub documents a browser version and native apps for Android and iOS. The web version runs in a browser with no installation.', 'The mobile guide describes the built-in wallet, funding and trading features. See the official source for the current app-store links and release status.'],
    ['How can I check EscapeHub’s security information?', 'EscapeHub lists independent smart-contract audits, a company registration and identity verification. You can use the source to find out who carried out the checks and what they cover.', 'EscapeHub also provides a tool for verifying official contacts. An audit covers a defined scope and cannot rule out every platform or token risk.']
  ],
  de: [
    ['Fragen & Antworten', 'Offizielle Quelle (Englisch)'],
    ['Was ist der $ESC-Token?', 'EscapeHub beschreibt $ESC als Plattform-Token mit festgelegter Gesamtmenge. Als Einsatzmöglichkeiten nennt die Dokumentation unter anderem Rabatte auf Plattformdienste und Staking.', 'Die Plattform und der $ESC-Token starten getrennt. EscapeHub beschreibt außerdem Rückkäufe, die aus Plattformgebühren finanziert werden sollen. Die aktuelle Verfügbarkeit und die Vertragsadresse findest du bei EscapeHub.'],
    ['Wie erstelle ich einen Token?', 'Wähle die Blockchain, auf der dein Token starten soll. Gib Name, Kürzel und Beschreibung ein, lade ein Bild hoch und prüfe die Angaben vor dem Veröffentlichen.', 'Der Handel beginnt auf einer Bonding Curve. Diese Preisformel ändert den Kurs bei Käufen und Verkäufen. Erreicht die Kurve ihr Ziel, wechselt der Handel an eine dezentrale Börse.'],
    ['Welche Netzwerke unterstützt EscapeHub?', 'EscapeHub nennt Solana sowie ausgewählte Ethereum-kompatible Netzwerke, darunter Base, Ethereum, Arbitrum und BNB Smart Chain.', 'Bei der Erstellung wählst du das Startnetzwerk für deinen Token. In der App kannst du mehrere Netzwerke durchsuchen. Jeder Token bleibt auf seinem jeweiligen Netzwerk.'],
    ['Was ist EscapeSwap?', 'EscapeSwap ist die dezentrale Börse von EscapeHub auf Solana. Ein Solana-Token wechselt automatisch dorthin, sobald seine Bonding Curve das Handelsziel erreicht.', 'Der Token bleibt auf Solana. Danach bestimmt ein Liquiditätspool den Handelspreis. In der Startphase übernimmt das die Preisformel der Bonding Curve.'],
    ['Welche Risiken verringert gesperrte Liquidität?', 'In der Startphase bestimmt eine Bonding Curve den Preis. Nach dem Wechsel an die Börse begrenzt die Liquiditätssperre, was aus dem Handelspool entnommen werden kann.', 'Das verringert das Risiko, dass dem Pool seine Liquidität entzogen wird. Ein Token kann trotzdem an Wert verlieren, und ein Projekt kann scheitern oder Käufer täuschen.'],
    ['Wie verdient EscapeHub Geld?', 'EscapeHub nennt Handelsgebühren als eine Einnahmequelle. Ein Teil kann an den Ersteller des Tokens gehen, ein weiterer an das Protokoll.', 'Laut EscapeHub ist ein Teil der Plattformgebühren für $ESC-Rückkäufe vorgesehen. Der Erstelleranteil und der Protokollanteil haben unterschiedliche Empfänger und Zwecke.'],
    ['Wie funktionieren die Handelsgebühren?', 'EscapeHub dokumentiert in der Phase der Bonding Curve eine Handelsgebühr von 1,2 %. Davon gehen 0,5 % an den Ersteller und 0,7 % an das Protokoll. Danach richtet sich die Gebühr nach der Marktkapitalisierung des Tokens.', 'Der Ersteller kann seinen Anteil behalten, auf mehrere Wallets verteilen oder als Cashback an Handelnde weitergeben. Beim Aufladen der Wallet kann der Zahlungsanbieter zusätzlich eine Gebühr berechnen.'],
    ['Was bedeutet Signless Trading?', 'Mit der integrierten Wallet kann EscapeHub Käufe und Verkäufe auf der Blockchain ausführen, ohne für jeden Trade ein separates Wallet-Fenster zu öffnen. Über „Kaufen“ oder „Verkaufen“ löst du den Auftrag aus.', 'Prüfe vorher den Token, den Betrag und die angezeigten Konditionen. Eine zweite Bestätigung kann entfallen.'],
    ['Wie kaufe ich Krypto per Karte?', 'Öffne die Einzahlungsfunktion deiner Wallet, wähle Karte oder eine unterstützte Zahlungsmethode wie Apple Pay oder Google Pay und gib den Betrag ein.', 'Der Zahlungsanbieter zeigt dir vor der Bestätigung den Kurs und mögliche Gebühren. Damit lädst du Krypto in deine Wallet. Der Kauf eines bestimmten Projekt-Tokens ist ein eigener Handelsschritt.'],
    ['Wo kann ich die EscapeHub-App nutzen?', 'EscapeHub beschreibt eine Webversion und eigene Apps für Android und iOS. Die Webversion läuft im Browser ohne Installation.', 'Der App-Artikel erklärt die integrierte Wallet, das Aufladen und den Handel. Die aktuellen Download-Links und den Veröffentlichungsstand findest du in der offiziellen Quelle.'],
    ['Wie kann ich die Sicherheitsangaben zu EscapeHub prüfen?', 'EscapeHub nennt unabhängige Prüfungen seiner Smart Contracts, die Registrierung des Unternehmens und die Überprüfung der Projektidentität. In der Quelle kannst du nachsehen, wer was geprüft hat.', 'Für offizielle Kontakte bietet EscapeHub ein eigenes Prüfwerkzeug an. Eine Prüfung deckt einen bestimmten Umfang ab. Risiken der Plattform und einzelner Token können bestehen bleiben.']
  ],
  es: [
    ['Preguntas y respuestas', 'Fuente oficial (en inglés)'],
    ['¿Qué es el token $ESC?', 'EscapeHub presenta $ESC como su token de utilidad con una oferta fija. La documentación menciona usos como descuentos en servicios y staking.', 'El lanzamiento de la plataforma y el del token son eventos distintos. EscapeHub también describe recompras financiadas con comisiones. Consulta la fuente oficial para saber si el token está disponible y cuál es su contrato.'],
    ['¿Cómo creo un token?', 'Elige la red donde se lanzará tu token. Indica el nombre, el símbolo y la descripción, sube una imagen y revisa los datos antes de desplegarlo.', 'La negociación empieza en una curva que ajusta el precio con las compras y ventas. Cuando alcanza su objetivo, pasa a un mercado descentralizado.'],
    ['¿Qué redes admite EscapeHub?', 'EscapeHub enumera Solana y algunas redes compatibles con Ethereum, como Base, Ethereum, Arbitrum y BNB Smart Chain.', 'Al crear un token eliges su red de lanzamiento. Puedes explorar varias redes en la misma aplicación y cada token permanece en su propia red.'],
    ['¿Qué es EscapeSwap?', 'EscapeSwap es el mercado descentralizado de EscapeHub en Solana. Un token de Solana pasa allí automáticamente cuando su curva alcanza el objetivo.', 'El token sigue en Solana. El precio de las operaciones pasa a determinarse en un fondo de liquidez en lugar de la curva inicial.'],
    ['¿Qué riesgos reduce el bloqueo de liquidez?', 'La curva determina el precio en la primera fase. Al pasar a un mercado, el bloqueo de liquidez limita las retiradas del fondo de negociación.', 'Así se reduce el riesgo de que se retire la liquidez. El token aún puede perder valor y el proyecto puede fracasar o engañar a compradores.'],
    ['¿Cómo obtiene ingresos EscapeHub?', 'EscapeHub señala las comisiones de negociación como una fuente de ingresos. Una parte puede ir al creador del token y otra al protocolo.', 'Según EscapeHub, parte de los ingresos de la plataforma se destina a recompras de $ESC. Cada parte de la comisión tiene destinatarios y fines distintos.'],
    ['¿Cómo funcionan las comisiones de negociación?', 'EscapeHub indica una comisión del 1,2 % durante la curva: el 0,5 % para el creador y el 0,7 % para el protocolo. Después, la tasa depende del tramo de capitalización.', 'El creador puede conservar su parte, repartirla entre billeteras o devolverla a los operadores. El proveedor de pagos puede cobrar por separado al recargar.'],
    ['¿Qué es operar sin confirmaciones emergentes?', 'La billetera integrada puede ejecutar compras y ventas en cadena sin abrir una ventana de confirmación por operación. Al pulsar Comprar o Vender autorizas la orden.', 'Revisa antes el token, el importe y las condiciones mostradas. Puede que no haya una segunda confirmación.'],
    ['¿Cómo compro cripto con tarjeta?', 'Abre la opción para añadir fondos a la billetera. Elige tarjeta u otro método compatible, como Apple Pay o Google Pay, e introduce el importe.', 'Antes de confirmar, el proveedor muestra el cambio y las comisiones aplicables. La recarga añade criptomonedas a tu billetera. Comprar un token de un proyecto es otra operación.'],
    ['¿Dónde puedo usar la aplicación de EscapeHub?', 'EscapeHub describe una versión web y aplicaciones para Android e iOS. La versión web se usa desde el navegador sin instalar nada.', 'La guía móvil cubre la billetera integrada, las recargas y la negociación. Consulta la fuente oficial para ver los enlaces de descarga y el estado actual.'],
    ['¿Cómo verifico la información de seguridad de EscapeHub?', 'EscapeHub enumera auditorías independientes, el registro de la empresa y verificaciones de identidad. La fuente indica quién realizó las comprobaciones y qué abarcan.', 'También hay una herramienta para verificar contactos oficiales. Las auditorías tienen un alcance definido y pueden quedar riesgos de la plataforma o del token.']
  ],
  fr: [
    ['Questions et réponses', 'Source officielle (en anglais)'],
    ['Qu’est-ce que le jeton $ESC ?', 'EscapeHub présente $ESC comme son jeton utilitaire à offre fixe. La documentation cite notamment des réductions sur les services et le staking.', 'La plateforme et le jeton sont lancés séparément. EscapeHub décrit aussi des rachats financés par les frais. Consultez la source pour connaître la disponibilité et l’adresse du contrat.'],
    ['Comment créer un jeton ?', 'Choisissez le réseau de lancement. Renseignez le nom, le symbole et la description, ajoutez une image et vérifiez les informations avant le déploiement.', 'Le jeton commence à s’échanger sur une courbe qui ajuste le prix selon les achats et les ventes. Une fois l’objectif atteint, les échanges passent sur une plateforme décentralisée.'],
    ['Quels réseaux EscapeHub prend-il en charge ?', 'EscapeHub cite Solana et certains réseaux compatibles avec Ethereum, dont Base, Ethereum, Arbitrum et BNB Smart Chain.', 'Vous choisissez le réseau lors de la création. La même application permet de parcourir plusieurs réseaux, et chaque jeton reste sur le sien.'],
    ['Qu’est-ce qu’EscapeSwap ?', 'EscapeSwap est la plateforme d’échange décentralisée d’EscapeHub sur Solana. Un jeton Solana y est transféré automatiquement lorsque sa courbe atteint l’objectif.', 'Le jeton reste sur Solana. Le prix est ensuite déterminé dans un pool de liquidité au lieu de suivre la courbe de lancement.'],
    ['Quels risques le verrouillage des liquidités réduit-il ?', 'La courbe détermine le prix au départ. Une fois le jeton sur une plateforme d’échange, le verrouillage limite les retraits du pool.', 'Cela réduit le risque de retrait de la liquidité. Le jeton peut toujours perdre de la valeur et le projet peut échouer ou tromper les acheteurs.'],
    ['Comment EscapeHub génère-t-il des revenus ?', 'Les frais de transaction font partie des revenus décrits par EscapeHub. Une part peut aller au créateur et une autre au protocole.', 'EscapeHub indique qu’une partie des frais de la plateforme est destinée aux rachats de $ESC. Les deux parts ont des bénéficiaires et des usages distincts.'],
    ['Comment fonctionnent les frais de transaction ?', 'EscapeHub indique des frais de 1,2 % pendant la courbe : 0,5 % pour le créateur et 0,7 % pour le protocole. Ensuite, le taux dépend du niveau de capitalisation.', 'Le créateur peut garder sa part, la partager entre des portefeuilles ou la reverser aux utilisateurs. Le prestataire de paiement peut facturer des frais de recharge distincts.'],
    ['Qu’est-ce que le trading sans fenêtre de confirmation ?', 'Avec le portefeuille intégré, les achats et ventes peuvent être exécutés sur la blockchain sans fenêtre de confirmation par opération. Appuyer sur Acheter ou Vendre autorise l’opération.', 'Vérifiez le jeton, le montant et les conditions affichées avant d’appuyer. Il peut ne pas y avoir de seconde confirmation.'],
    ['Comment acheter des cryptos par carte ?', 'Ouvrez la fonction de recharge du portefeuille, choisissez une carte ou un moyen pris en charge comme Apple Pay ou Google Pay, puis saisissez le montant.', 'Le prestataire affiche le taux et les frais éventuels avant la confirmation. La recharge ajoute des cryptos au portefeuille. L’achat du jeton d’un projet est une opération distincte.'],
    ['Où utiliser l’application EscapeHub ?', 'EscapeHub décrit une version web et des applications Android et iOS. La version web fonctionne dans le navigateur sans installation.', 'Le guide présente le portefeuille intégré, la recharge et les échanges. Les liens de téléchargement et l’état de disponibilité figurent dans la source officielle.'],
    ['Comment vérifier les informations de sécurité d’EscapeHub ?', 'EscapeHub mentionne des audits indépendants des contrats, l’enregistrement de la société et la vérification de l’identité du projet. La source détaille les intervenants et le périmètre des vérifications.', 'Un outil permet aussi de vérifier les contacts officiels. Un audit a un périmètre défini, et des risques liés à la plateforme ou aux jetons peuvent subsister.']
  ],
  pt: [
    ['Perguntas e respostas', 'Fonte oficial (em inglês)'],
    ['O que é o token $ESC?', 'A EscapeHub descreve o $ESC como seu token de utilidade com oferta fixa. A documentação cita descontos em serviços da plataforma e staking.', 'A plataforma e o token têm lançamentos separados. A EscapeHub também descreve recompras financiadas com taxas. Consulte a fonte para saber a disponibilidade e o endereço do contrato.'],
    ['Como criar um token?', 'Escolha a rede de lançamento, informe nome, símbolo e descrição, envie uma imagem e confira os dados antes de implantar o token.', 'As negociações começam em uma curva que ajusta o preço conforme compras e vendas. Ao atingir a meta, passam para uma corretora descentralizada.'],
    ['Quais redes a EscapeHub aceita?', 'A EscapeHub lista a Solana e redes compatíveis com Ethereum, incluindo Base, Ethereum, Arbitrum e BNB Smart Chain.', 'A rede é escolhida na criação. O aplicativo permite explorar várias redes, e cada token permanece na sua.'],
    ['O que é a EscapeSwap?', 'A EscapeSwap é a corretora descentralizada da EscapeHub na Solana. Um token da Solana migra para lá automaticamente quando sua curva atinge a meta.', 'O token permanece na Solana. O preço das negociações passa a ser determinado por um pool de liquidez.'],
    ['Que riscos o bloqueio de liquidez reduz?', 'A curva determina o preço inicial. Depois da migração para uma corretora, o bloqueio restringe retiradas do pool.', 'Isso reduz o risco de retirada da liquidez. O token ainda pode perder valor e o projeto pode fracassar ou enganar compradores.'],
    ['Como a EscapeHub gera receita?', 'A EscapeHub descreve taxas de negociação como fonte de receita. Uma parte pode ir para o criador e outra para o protocolo.', 'A plataforma informa que destina parte das taxas à recompra de $ESC. Cada parcela tem destinatários e finalidades diferentes.'],
    ['Como funcionam as taxas de negociação?', 'A EscapeHub informa uma taxa de 1,2% durante a curva: 0,5% para o criador e 0,7% para o protocolo. Na etapa seguinte, a taxa depende da faixa de capitalização de mercado.', 'O criador pode manter sua parte, dividi-la entre carteiras ou devolvê-la a quem negocia. O provedor de pagamento pode cobrar uma taxa separada pela recarga.'],
    ['O que é negociação sem janela de confirmação?', 'A carteira integrada pode executar compras e vendas na blockchain sem abrir uma janela de confirmação por operação. Tocar em Comprar ou Vender autoriza a operação.', 'Confira antes o token, o valor e as condições exibidas. Pode não haver uma segunda confirmação.'],
    ['Como comprar cripto com cartão?', 'Abra a função de recarga, escolha cartão ou outro método aceito, como Apple Pay ou Google Pay, e informe o valor.', 'O provedor mostra a cotação e possíveis taxas antes da confirmação. A recarga adiciona cripto à carteira. Comprar o token de um projeto é outra operação.'],
    ['Onde posso usar o aplicativo da EscapeHub?', 'A EscapeHub descreve uma versão web e aplicativos para Android e iOS. A versão web funciona no navegador sem instalação.', 'O guia explica a carteira integrada, a recarga e as negociações. Os links de download e a situação atual dos aplicativos ficam na fonte oficial.'],
    ['Como verificar as informações de segurança da EscapeHub?', 'A EscapeHub lista auditorias independentes, registro da empresa e verificação de identidade. A fonte mostra quem realizou as verificações e o que foi abrangido.', 'Há também uma ferramenta para confirmar contatos oficiais. Auditorias têm escopo definido, e riscos da plataforma ou de um token podem persistir.']
  ],
  tr: [
    ['Sorular ve yanıtlar', 'Resmî kaynak (İngilizce)'],
    ['$ESC tokenı nedir?', 'EscapeHub, $ESC’yi sabit arza sahip kullanım tokenı olarak tanımlıyor. Belgelerde hizmet indirimleri ve staking gibi kullanım alanları yer alıyor.', 'Platform ve token ayrı ayrı piyasaya sürülür. EscapeHub, platform ücretleriyle finanse edilecek geri alımları da açıklıyor. Güncel erişim durumu ve sözleşme adresi için resmî kaynağa bakın.'],
    ['Nasıl token oluştururum?', 'Tokenın çıkacağı ağı seçin. Adını, sembolünü ve açıklamasını girin, bir görsel yükleyin ve yayımlamadan önce bilgileri kontrol edin.', 'İlk işlemler, alım ve satıma göre fiyatı güncelleyen bir eğri üzerinde gerçekleşir. Eğri hedefe ulaştığında işlemler merkeziyetsiz bir borsaya geçer.'],
    ['EscapeHub hangi ağları destekliyor?', 'EscapeHub, Solana ile Base, Ethereum, Arbitrum ve BNB Smart Chain gibi seçili Ethereum uyumlu ağları listeliyor.', 'Ağı tokenı oluştururken seçersiniz. Aynı uygulamada birden fazla ağı inceleyebilirsiniz. Her token kendi ağında kalır.'],
    ['EscapeSwap nedir?', 'EscapeSwap, EscapeHub’ın Solana üzerindeki merkeziyetsiz borsasıdır. Solana’daki bir tokenın fiyat eğrisi hedefine ulaştığında işlemler otomatik olarak buraya geçer.', 'Token Solana’da kalır. Alım satım fiyatı artık başlangıç eğrisi yerine bir likidite havuzunda belirlenir.'],
    ['Likidite kilidi hangi riskleri azaltır?', 'İlk fiyatı fiyat eğrisi belirler. Borsaya geçişten sonra likidite kilidi, işlem havuzundan çekimleri kısıtlar.', 'Bu, likiditenin havuzdan çekilmesi riskini azaltır. Token yine de değer kaybedebilir ve proje başarısız olabilir ya da alıcıları yanıltabilir.'],
    ['EscapeHub nasıl gelir elde ediyor?', 'EscapeHub, alım satım ücretlerini bir gelir kaynağı olarak gösteriyor. Ücretin bir kısmı tokenı oluşturan kişiye, bir kısmı protokole gidebilir.', 'EscapeHub, platform ücretlerinin bir bölümünü $ESC geri alımlarına ayırdığını belirtiyor. Bu payların alıcıları ve amaçları farklıdır.'],
    ['Alım satım ücretleri nasıl işliyor?', 'EscapeHub fiyat eğrisi aşamasında %1,2 işlem ücreti belirtiyor: %0,5 tokenı oluşturan kişiye, %0,7 protokole gider. Daha sonra oran piyasa değerine göre değişir.', 'Oluşturucu payını tutabilir, cüzdanlar arasında bölebilir veya işlem yapanlara iade edebilir. Ödeme sağlayıcısı bakiye eklerken ayrıca ücret alabilir.'],
    ['Onay penceresi olmadan işlem yapmak ne demek?', 'Entegre cüzdan, her işlem için ayrı bir onay penceresi açmadan blokzincirde alım satım yapabilir. Al veya Sat düğmesine dokunmak emri onaylar.', 'Düğmeye basmadan önce tokenı, tutarı ve ekrandaki koşulları kontrol edin. İkinci bir onay gösterilmeyebilir.'],
    ['Kartla nasıl kripto alırım?', 'Cüzdanın bakiye ekleme işlevini açın. Kartı veya Apple Pay ya da Google Pay gibi desteklenen bir yöntemi seçin ve tutarı girin.', 'Ödeme sağlayıcısı onaydan önce kuru ve varsa ücreti gösterir. Yükleme cüzdana kripto ekler. Bir projenin tokenını almak ayrı bir işlemdir.'],
    ['EscapeHub uygulamasını nerede kullanabilirim?', 'EscapeHub, tarayıcı sürümünü ve Android ile iOS uygulamalarını açıklıyor. Web sürümü kurulum gerektirmeden tarayıcıda çalışır.', 'Rehber entegre cüzdanı, bakiye eklemeyi ve alım satımı anlatıyor. Güncel mağaza bağlantıları ve yayın durumu resmî kaynakta yer alır.'],
    ['EscapeHub’ın güvenlik bilgilerini nasıl doğrularım?', 'EscapeHub bağımsız akıllı sözleşme denetimlerini, şirket kaydını ve kimlik doğrulamasını listeliyor. Kaynak, kontrolleri kimin yaptığını ve kapsamını gösteriyor.', 'Resmî kişileri doğrulamak için de bir araç sunuluyor. Denetimler belirli bir kapsamla sınırlıdır. Platform ve token riskleri devam edebilir.']
  ],
  ru: [
    ['Вопросы и ответы', 'Официальный источник (на английском)'],
    ['Что такое токен $ESC?', 'EscapeHub описывает $ESC как служебный токен с фиксированным объёмом выпуска. Среди вариантов использования указаны скидки на услуги и стейкинг.', 'Платформа и токен запускаются отдельно. EscapeHub также описывает выкуп токенов за счёт комиссий платформы. Доступность токена и адрес контракта уточняйте в официальном источнике.'],
    ['Как создать токен?', 'Выберите сеть, укажите название, символ и описание, загрузите изображение и проверьте данные перед выпуском токена.', 'Вначале торги идут по кривой, которая меняет цену при покупках и продажах. Когда кривая достигает цели, торги переходят на децентрализованную биржу.'],
    ['Какие сети поддерживает EscapeHub?', 'EscapeHub указывает Solana и отдельные сети, совместимые с Ethereum, включая Base, Ethereum, Arbitrum и BNB Smart Chain.', 'Сеть выбирают при создании токена. В приложении можно просматривать несколько сетей, и каждый токен остаётся в своей.'],
    ['Что такое EscapeSwap?', 'EscapeSwap — децентрализованная биржа EscapeHub в сети Solana. Торги токеном автоматически переходят туда, когда его кривая достигает цели.', 'Токен остаётся в Solana. После перехода цена определяется в пуле ликвидности, а на старте её задаёт кривая.'],
    ['Какие риски снижает блокировка ликвидности?', 'Начальную цену задаёт кривая. После перехода на биржу блокировка ликвидности ограничивает вывод средств из торгового пула.', 'Это снижает риск вывода ликвидности. Токен всё же может подешеветь, а проект может потерпеть неудачу или ввести покупателей в заблуждение.'],
    ['Как EscapeHub получает доход?', 'EscapeHub называет торговые комиссии источником дохода. Часть комиссии может получать создатель токена, другую часть — протокол.', 'По описанию EscapeHub, часть комиссий платформы выделяется на выкуп $ESC. У этих долей разные получатели и цели.'],
    ['Как устроены торговые комиссии?', 'EscapeHub указывает комиссию 1,2 % на этапе кривой: 0,5 % получает создатель и 0,7 % — протокол. После перехода ставка зависит от капитализации токена.', 'Создатель может оставить свою долю, распределить её по кошелькам или вернуть участникам торгов. Платёжный сервис может отдельно брать комиссию за пополнение.'],
    ['Что значит торговля без окон подтверждения?', 'Встроенный кошелёк может проводить сделки в блокчейне без отдельного окна подтверждения для каждой операции. Нажатие «Купить» или «Продать» подтверждает заявку.', 'Перед нажатием проверьте токен, сумму и показанные условия. Второго подтверждения может не быть.'],
    ['Как купить криптовалюту картой?', 'Откройте функцию пополнения кошелька, выберите карту или поддерживаемый способ оплаты, например Apple Pay или Google Pay, и укажите сумму.', 'До подтверждения сервис показывает курс и возможные комиссии. При пополнении в кошелёк поступает криптовалюта. Покупка токена проекта — отдельная сделка.'],
    ['Где доступно приложение EscapeHub?', 'EscapeHub описывает веб-версию и приложения для Android и iOS. Веб-версия работает в браузере без установки.', 'Руководство описывает встроенный кошелёк, пополнение и торговлю. Ссылки на приложения и актуальную доступность смотрите в источнике.'],
    ['Как проверить сведения о безопасности EscapeHub?', 'EscapeHub перечисляет независимые аудиты контрактов, регистрацию компании и проверку личности. В источнике указано, кто проводил проверки и что проверялось.', 'Есть и инструмент для проверки официальных контактов. Аудит ограничен своим объёмом, поэтому риски платформы и отдельных токенов могут сохраняться.']
  ],
  'zh-CN': [
    ['常见问题', '官方来源（英文）'],
    ['$ESC 代币是什么？', 'EscapeHub 将 $ESC 描述为供应量固定的平台实用代币，文档列出了服务折扣和质押等用途。', '平台与代币分别上线。EscapeHub 还介绍了以平台手续费为资金来源的回购计划。代币供应状态及合约地址请查阅官方来源。'],
    ['如何创建代币？', '选择代币发行的区块链，填写名称、符号和描述，上传图片并核对信息，然后部署代币。', '初期交易使用联合曲线，价格随买卖而变化。曲线达到目标后，交易转入去中心化交易所。'],
    ['EscapeHub 支持哪些网络？', 'EscapeHub 列出了 Solana 和部分兼容 Ethereum 的网络，包括 Base、Ethereum、Arbitrum 和 BNB Smart Chain。', '创建代币时选择发行网络。同一应用可以浏览多个网络，每个代币仍在各自的网络上。'],
    ['EscapeSwap 是什么？', 'EscapeSwap 是 EscapeHub 在 Solana 上的去中心化交易所。Solana 代币的联合曲线达到目标后，交易会自动迁移至该交易所。', '代币仍留在 Solana 上。此后价格由流动性池中的交易决定，初期价格则由联合曲线决定。'],
    ['锁定流动性可以降低哪些风险？', '初期价格由联合曲线决定。代币进入交易所后，流动性锁定限制从交易池提取资产。', '这能降低流动性被抽走的风险。代币仍可能贬值，项目也可能失败或误导买家。'],
    ['EscapeHub 如何获得收入？', 'EscapeHub 将交易手续费列为收入来源之一。部分手续费可给代币创建者，另一部分归协议。', '据 EscapeHub 介绍，部分平台手续费将用于回购 $ESC。两部分费用的接收方和用途各不相同。'],
    ['交易手续费是如何分配的？', 'EscapeHub 列明联合曲线阶段的交易费为 1.2%，其中 0.5% 给创建者，0.7% 给协议。进入下一阶段后，费率按代币市值分档。', '创建者可保留份额、分配给多个钱包或返还给交易者。充值时支付服务商可能另收费用。'],
    ['什么是免弹窗确认交易？', '内置钱包可以在链上执行买卖，每笔交易无需弹出单独的确认窗口。点击买入或卖出即授权下单。', '点击之前请核对代币、金额和显示的条件，之后可能没有第二次确认。'],
    ['如何用银行卡购买加密货币？', '打开钱包充值功能，选择银行卡或 Apple Pay、Google Pay 等受支持的方式，再输入金额。', '确认前，支付服务商会显示汇率和可能收取的费用。充值会向钱包添加加密货币，购买某个项目的代币是另一笔交易。'],
    ['在哪里可以使用 EscapeHub 应用？', 'EscapeHub 介绍了网页版以及 Android 和 iOS 应用。网页版可直接在浏览器中使用。', '指南介绍内置钱包、充值和交易。应用下载链接及最新发布状态请查阅官方来源。'],
    ['如何核实 EscapeHub 的安全信息？', 'EscapeHub 列出了独立智能合约审计、公司注册和身份验证。官方来源可查到核查方和核查范围。', 'EscapeHub 也提供官方联系人验证工具。审计有特定范围，平台及个别代币仍可能存在风险。']
  ],
  ja: [
    ['よくある質問', '公式資料（英語）'],
    ['$ESC トークンとは？', 'EscapeHub は、$ESC を供給量が固定されたユーティリティトークンと説明しています。用途としてサービス料金の割引やステーキングが挙げられています。', 'プラットフォームとトークンは別々に公開されます。手数料を原資とする買い戻しも説明されています。提供状況とコントラクトアドレスは公式資料で確認できます。'],
    ['トークンを作成するには？', 'ネットワークを選び、名前・シンボル・説明を入力して画像をアップロードします。内容を確認してからトークンをデプロイします。', '初期取引では、売買に応じてボンディングカーブが価格を変えます。目標に達すると、取引は分散型取引所へ移ります。'],
    ['EscapeHub はどのネットワークに対応していますか？', 'EscapeHub は、Solana と、Base、Ethereum、Arbitrum、BNB Smart Chain など一部の Ethereum 互換ネットワークを挙げています。', 'トークンの作成時にネットワークを選びます。同じアプリで複数のネットワークを閲覧でき、各トークンはそれぞれのネットワークにとどまります。'],
    ['EscapeSwap とは？', 'EscapeSwap は Solana 上の分散型取引所です。Solana のトークンはボンディングカーブが目標に達すると自動的に移行します。', 'トークンは Solana 上にとどまります。移行後はローンチ時のカーブに代わり、流動性プールで取引価格が決まります。'],
    ['流動性のロックはどんなリスクを抑えますか？', '初期の価格はボンディングカーブで決まります。取引所への移行後は、流動性のロックが取引プールからの引き出しを制限します。', '流動性の引き抜きリスクは抑えられますが、価格の下落やプロジェクトの失敗、買い手を欺く行為は起こり得ます。'],
    ['EscapeHub はどうやって収益を得ていますか？', 'EscapeHub は取引手数料を収益源の一つとしています。手数料の一部はトークンの作成者に、別の一部はプロトコルに配分されます。', 'EscapeHub はプラットフォーム手数料の一部を $ESC の買い戻しに充てると説明しています。各配分先と用途は異なります。'],
    ['取引手数料はどう決まりますか？', 'EscapeHub によると、初期段階の取引手数料は 1.2% で、作成者に 0.5%、プロトコルに 0.7% が配分されます。移行後は時価総額に応じて手数料が変わります。', '作成者は取り分を受け取る、複数のウォレットに分ける、取引者に還元することができます。入金時には決済事業者の手数料が別途かかる場合があります。'],
    ['確認画面なしの取引とは？', '内蔵ウォレットでは、取引ごとの確認画面を出さずにブロックチェーン上で売買を実行できます。購入または売却ボタンを押すと注文を承認します。', '押す前にトークン、金額、表示された条件を確認してください。再確認の画面が出ない場合があります。'],
    ['カードで暗号資産を買うには？', 'ウォレットの入金機能を開き、カードや Apple Pay、Google Pay などの対応する方法を選んで金額を入力します。', '確定前にレートや手数料が表示されます。入金でウォレットに暗号資産が追加され、個別のトークン購入は別の取引になります。'],
    ['EscapeHub アプリはどこで使えますか？', 'EscapeHub はウェブ版と Android・iOS アプリを案内しています。ウェブ版はインストールなしでブラウザから利用できます。', 'ガイドでは内蔵ウォレット、入金、取引を解説しています。最新の配信状況とダウンロードリンクは公式資料で確認できます。'],
    ['EscapeHub の安全性に関する情報を確認するには？', 'EscapeHub は独立機関によるコントラクト監査、法人登録、本人確認を挙げています。公式資料で実施機関と対象範囲を確認できます。', '公式の連絡先を照合するツールもあります。監査には対象範囲があり、プラットフォームや個別トークンのリスクは残り得ます。']
  ],
  ko: [
    ['질문과 답변', '공식 출처(영어)'],
    ['$ESC 토큰이란 무엇인가요?', 'EscapeHub는 $ESC를 공급량이 고정된 유틸리티 토큰으로 설명합니다. 문서에는 서비스 할인과 스테이킹 등의 용도가 나옵니다.', '플랫폼과 토큰은 별도로 출시됩니다. EscapeHub는 플랫폼 수수료를 활용한 바이백 계획도 설명합니다. 토큰의 제공 상태와 계약 주소는 공식 출처에서 확인할 수 있습니다.'],
    ['토큰은 어떻게 만드나요?', '토큰을 출시할 네트워크를 고르고 이름, 심볼, 설명을 입력한 뒤 이미지를 올립니다. 내용을 확인하고 배포합니다.', '초기 거래에서는 매수와 매도에 따라 본딩 커브가 가격을 조정합니다. 목표에 도달하면 거래가 탈중앙화 거래소로 이동합니다.'],
    ['EscapeHub는 어떤 네트워크를 지원하나요?', 'EscapeHub는 Solana와 Base, Ethereum, Arbitrum, BNB Smart Chain 등 일부 이더리움 호환 네트워크를 안내합니다.', '토큰을 만들 때 출시 네트워크를 선택합니다. 앱 하나에서 여러 네트워크를 둘러볼 수 있으며 각 토큰은 자기 네트워크에 남습니다.'],
    ['EscapeSwap이란 무엇인가요?', 'EscapeSwap은 Solana에 있는 EscapeHub의 탈중앙화 거래소입니다. Solana 토큰은 본딩 커브가 목표에 도달하면 자동으로 이곳에서 거래됩니다.', '토큰은 Solana에 남습니다. 이때부터 초기 가격 곡선 대신 유동성 풀에서 거래 가격이 정해집니다.'],
    ['유동성 잠금은 어떤 위험을 줄이나요?', '초기에는 본딩 커브가 가격을 결정합니다. 거래소로 이동한 뒤에는 유동성 잠금이 거래 풀에서의 인출을 제한합니다.', '이 방식은 유동성이 빠져나갈 위험을 줄입니다. 토큰 가격은 여전히 떨어질 수 있고 프로젝트가 실패하거나 구매자를 오도할 수도 있습니다.'],
    ['EscapeHub는 어떻게 수익을 내나요?', 'EscapeHub는 거래 수수료를 수익원 중 하나로 설명합니다. 수수료 일부는 토큰 제작자에게, 다른 일부는 프로토콜에 배분될 수 있습니다.', 'EscapeHub에 따르면 플랫폼 수수료 일부는 $ESC 바이백에 쓰입니다. 각 몫의 수령자와 용도는 다릅니다.'],
    ['거래 수수료는 어떻게 적용되나요?', 'EscapeHub 문서에 따르면 본딩 커브의 거래 수수료는 1.2%이며, 제작자에게 0.5%, 프로토콜에 0.7%가 배분됩니다. 이후에는 시가총액 구간에 따라 요율이 달라집니다.', '제작자는 자기 몫을 받거나 여러 지갑에 나누거나 거래자에게 돌려줄 수 있습니다. 충전 시 결제 업체가 별도로 수수료를 받을 수 있습니다.'],
    ['확인 팝업 없는 거래란 무엇인가요?', '내장 지갑으로는 거래마다 확인 팝업을 열지 않고 블록체인에서 매수하거나 매도할 수 있습니다. 매수 또는 매도 버튼을 누르면 주문을 승인합니다.', '누르기 전에 토큰, 금액, 화면에 표시된 조건을 확인하세요. 두 번째 확인이 생략될 수 있습니다.'],
    ['카드로 암호화폐를 어떻게 사나요?', '지갑 충전 기능을 열고 카드나 Apple Pay, Google Pay 등 지원되는 방법을 고른 뒤 금액을 입력합니다.', '결제를 확정하기 전에 환율과 수수료를 확인할 수 있습니다. 충전은 지갑에 암호화폐를 추가하는 것이고 프로젝트 토큰 구매는 별도의 거래입니다.'],
    ['EscapeHub 앱은 어디서 이용할 수 있나요?', 'EscapeHub는 웹 버전과 Android 및 iOS 앱을 안내합니다. 웹 버전은 설치 없이 브라우저에서 실행됩니다.', '가이드에서는 내장 지갑, 충전 및 거래 기능을 설명합니다. 최신 배포 상태와 다운로드 링크는 공식 출처에서 확인할 수 있습니다.'],
    ['EscapeHub의 보안 정보는 어떻게 확인하나요?', 'EscapeHub는 독립 스마트 계약 감사, 회사 등록, 신원 확인을 안내합니다. 공식 출처에서 누가 무엇을 확인했는지 볼 수 있습니다.', '공식 연락처 확인 도구도 제공합니다. 감사는 정해진 범위만 다루므로 플랫폼과 개별 토큰의 위험은 남을 수 있습니다.']
  ]
};

function supportedHomepageLanguage(locale) {
  const base = locale?.trim().toLowerCase().split(/[-_]/)[0];
  const code = base === 'zh' ? 'zh-CN' : base;
  return Object.hasOwn(learnTranslations, code) ? code : undefined;
}

function initialHomepageLanguage() {
  const urlLanguage = supportedHomepageLanguage(new URL(location.href).searchParams.get('lang'));
  if (urlLanguage) return urlLanguage;
  try {
    const savedLanguage = supportedHomepageLanguage(localStorage.getItem('tankothek-language'));
    if (savedLanguage) return savedLanguage;
  } catch {}
  for (const locale of [...(navigator.languages ?? []), navigator.language]) {
    const language = supportedHomepageLanguage(locale);
    if (language) return language;
  }
  return 'en';
}

const practicalLearnTranslations = {
  "en": [
    ["Guides", "Quick answers"],
    ["How do I buy my first token?", "Open the integrated wallet and check the network used by the token you want to buy.", "Add funds. If you use a card or mobile payment, review the amount and the payment provider’s fee before confirming.", "Search for the project and verify the token’s network and contract address against the project’s official information. A familiar name or logo can be copied.", "Open the trade screen and review the token, amount and quote. With signless trading, tapping Buy may submit the order immediately."],
    ["How do I create a token?", "Choose the network where your token will launch. Consider where your community already has wallets and funds.", "Enter the token’s name, symbol and description, and add an image. Review the details before deployment.", "Review the available launch settings, such as who can buy at the start and how any creator fee is allocated.", "Deploy the token on the selected network and share its official link or contract address so people can find the correct token."],
    ["What happens after a token launches?", "During initial trading, the bonding curve sets the price according to buying and selling activity. The price can change between trades.", "If the curve reaches its target, trading moves to an exchange pool. EscapeHub documents EscapeSwap for Solana and Uniswap v4 for supported EVM networks.", "The token stays on its network. The trading venue and fee schedule can change after the move.", "The creator’s share and the protocol’s share are separate. Check the applicable fee for the token’s current trading stage."]
  ],
  "de": [
    ["Schritt für Schritt", "Kurze Antworten"],
    ["Wie kaufe ich zum ersten Mal einen Token?", "Öffne die integrierte Wallet und prüfe, auf welchem Netzwerk der gewünschte Token gehandelt wird.", "Lade Guthaben auf. Bei Kartenzahlung oder mobiler Zahlung siehst du den Betrag und die Gebühr des Zahlungsanbieters vor der Bestätigung.", "Suche nach dem Projekt und gleiche Netzwerk und Vertragsadresse mit den offiziellen Angaben des Projekts ab. Name und Logo lassen sich kopieren.", "Prüfe im Handelsfenster Token, Betrag und das angezeigte Angebot. Bei Signless Trading kann ein Tipp auf „Kaufen“ den Auftrag direkt auslösen."],
    ["Wie erstelle ich einen Token?", "Wähle das Startnetzwerk. Berücksichtige, auf welchem Netzwerk deine Community bereits Wallets und Guthaben hat.", "Gib Name, Kürzel und Beschreibung ein und lade ein Bild hoch. Prüfe diese Angaben vor dem Veröffentlichen.", "Prüfe die verfügbaren Starteinstellungen, etwa wer anfangs kaufen darf und wie der Gebührenanteil für Ersteller verteilt wird.", "Veröffentliche den Token auf dem gewählten Netzwerk. Teile den offiziellen Link oder die Vertragsadresse, damit andere den richtigen Token finden."],
    ["Was passiert nach dem Tokenstart?", "Zu Beginn bestimmt die Bonding Curve den Preis anhand der Käufe und Verkäufe. Der Preis kann sich zwischen zwei Trades ändern.", "Erreicht die Kurve ihr Ziel, wechselt der Handel in einen Börsenpool. EscapeHub nennt EscapeSwap für Solana und Uniswap v4 für unterstützte EVM-Netzwerke.", "Der Token bleibt auf seinem Netzwerk. Handelsplatz und Gebühren können sich beim Wechsel ändern.", "Ersteller und Protokoll können unterschiedliche Anteile erhalten. Welche Gebühr gilt, hängt von der aktuellen Handelsphase ab."]
  ],
  "es": [
    ["Guías paso a paso", "Respuestas breves"],
    ["¿Cómo compro mi primer token?", "Abre la billetera integrada y comprueba en qué red se negocia el token que quieres comprar.", "Añade fondos. Si pagas con tarjeta o un medio móvil, revisa el importe y la comisión antes de confirmar.", "Busca el proyecto y verifica la red y la dirección del contrato con la información oficial. El nombre y el logotipo pueden copiarse.", "Revisa el token, el importe y la cotización. Con las operaciones sin ventanas de confirmación, pulsar Comprar puede enviar la orden de inmediato."],
    ["¿Cómo creo un token?", "Elige la red de lanzamiento. Ten en cuenta dónde tiene ya tu comunidad sus billeteras y fondos.", "Indica el nombre, el símbolo y la descripción, y sube una imagen. Revisa los datos antes de publicar.", "Comprueba los ajustes de lanzamiento disponibles, como quién puede comprar al principio y cómo se reparte la comisión del creador.", "Publica el token en la red elegida y comparte su enlace oficial o dirección del contrato para que los demás puedan identificarlo."],
    ["¿Qué sucede después del lanzamiento?", "Durante la fase inicial, la curva de vinculación determina el precio según las compras y ventas. El precio puede cambiar entre operaciones.", "Si la curva alcanza su objetivo, la negociación pasa a un fondo en un mercado descentralizado. EscapeHub indica EscapeSwap en Solana y Uniswap v4 en las redes EVM compatibles.", "El token permanece en su red. El mercado y las comisiones pueden cambiar tras la transición.", "El creador y el protocolo reciben partes distintas. Comprueba la comisión que corresponde a la fase actual."]
  ],
  "fr": [
    ["Guides pas à pas", "Réponses courtes"],
    ["Comment acheter mon premier jeton ?", "Ouvrez le portefeuille intégré et vérifiez sur quel réseau le jeton qui vous intéresse est échangé.", "Approvisionnez le portefeuille. Par carte ou paiement mobile, vérifiez le montant et les frais avant de valider.", "Recherchez le projet et comparez le réseau et l’adresse du contrat avec ses informations officielles. Un nom ou un logo peut être copié.", "Vérifiez le jeton, le montant et le prix proposé. Sans fenêtre de confirmation par opération, appuyer sur Acheter peut envoyer l’ordre immédiatement."],
    ["Comment créer un jeton ?", "Choisissez le réseau de lancement. Tenez compte des réseaux sur lesquels votre communauté a déjà des portefeuilles et des fonds.", "Renseignez le nom, le symbole et la description, et ajoutez une image. Relisez les informations avant le déploiement.", "Vérifiez les options de lancement disponibles, notamment qui peut acheter au départ et comment la part des frais du créateur est distribuée.", "Déployez le jeton sur le réseau choisi et partagez son lien officiel ou son adresse de contrat pour qu’il soit identifiable."],
    ["Que se passe-t-il après le lancement ?", "Au début, la courbe de prix tient compte des achats et des ventes. Le prix peut varier d’une transaction à l’autre.", "Si la courbe atteint son objectif, les échanges passent dans un pool sur une plateforme décentralisée. EscapeHub indique EscapeSwap sur Solana et Uniswap v4 sur les réseaux EVM pris en charge.", "Le jeton reste sur son réseau. Le lieu d’échange et les frais peuvent changer au moment de la transition.", "Le créateur et le protocole peuvent recevoir des parts différentes. Consultez le tarif de la phase en cours."]
  ],
  "pt": [
    ["Guias passo a passo", "Respostas rápidas"],
    ["Como comprar meu primeiro token?", "Abra a carteira integrada e confira em qual rede o token desejado é negociado.", "Adicione saldo. Ao pagar com cartão ou por um meio móvel, confira o valor e a taxa antes de confirmar.", "Busque o projeto e compare a rede e o endereço do contrato com os dados oficiais. O nome e o logotipo podem ser copiados.", "Confira o token, o valor e a cotação. Na negociação sem janela de confirmação, tocar em Comprar pode enviar a ordem imediatamente."],
    ["Como criar um token?", "Escolha a rede de lançamento. Considere onde sua comunidade já tem carteiras e saldo.", "Informe o nome, o símbolo e a descrição e envie uma imagem. Confira tudo antes de implantar.", "Revise as configurações disponíveis, como quem pode comprar no início e como a parcela das taxas do criador é distribuída.", "Implante o token na rede escolhida e compartilhe o link oficial ou o endereço do contrato para ajudar as pessoas a identificá-lo."],
    ["O que acontece após o lançamento?", "Na fase inicial, uma curva determina o preço com base em compras e vendas. O preço pode mudar entre operações.", "Se a curva atingir a meta, as negociações passam para um pool numa corretora descentralizada. A EscapeHub indica EscapeSwap na Solana e Uniswap v4 nas redes EVM compatíveis.", "O token permanece na rede. O local de negociação e as taxas podem mudar após a transição.", "Criador e protocolo podem receber parcelas diferentes. Confira a taxa da etapa atual de negociação."]
  ],
  "tr": [
    ["Adım adım rehberler", "Kısa yanıtlar"],
    ["İlk tokenımı nasıl alırım?", "Entegre cüzdanı açın ve almak istediğiniz tokenın hangi ağda işlem gördüğünü kontrol edin.", "Bakiye ekleyin. Kartla veya mobil ödeme ile yükleme yaparken onaydan önce tutarı ve ücreti inceleyin.", "Projeyi arayın. Ağı ve sözleşme adresini projenin resmî bilgileriyle karşılaştırın. Ad ve logo kopyalanabilir.", "Tokenı, tutarı ve fiyat teklifini kontrol edin. Ayrı onay penceresi olmayan işlemlerde Al düğmesi emri hemen gönderebilir."],
    ["Nasıl token oluştururum?", "Başlangıç ağını seçin. Topluluğunuzun hangi ağlarda cüzdanı ve bakiyesi olduğunu göz önünde bulundurun.", "Adı, sembolü ve açıklamayı girip bir görsel ekleyin. Yayımlamadan önce bilgileri kontrol edin.", "Başlangıçta kimlerin alım yapabileceği ve üretici payının nasıl dağıtılacağı gibi mevcut ayarları inceleyin.", "Tokenı seçtiğiniz ağda yayımlayın. Doğru tokenın bulunabilmesi için resmî bağlantıyı veya sözleşme adresini paylaşın."],
    ["Token piyasaya çıktıktan sonra ne olur?", "İlk aşamada fiyat eğrisi, alım ve satımlara göre fiyatı belirler. İşlemler arasında fiyat değişebilir.", "Eğri hedefe ulaşırsa işlemler bir borsa havuzuna geçer. EscapeHub, Solana için EscapeSwap’ı ve desteklenen EVM ağları için Uniswap v4’ü belirtiyor.", "Token kendi ağında kalır. İşlem yeri ve ücretler geçişten sonra değişebilir.", "Üreticinin ve protokolün payları ayrıdır. Geçerli ücreti tokenın işlem aşamasına göre kontrol edin."]
  ],
  "ru": [
    ["Пошаговые инструкции", "Краткие ответы"],
    ["Как купить первый токен?", "Откройте встроенный кошелёк и проверьте, в какой сети торгуется нужный токен.", "Пополните кошелёк. При оплате картой или через мобильный сервис проверьте сумму и комиссию перед подтверждением.", "Найдите проект и сверяйте сеть и адрес контракта с официальными данными проекта. Название и логотип можно скопировать.", "Проверьте токен, сумму и котировку. Без отдельного окна подтверждения нажатие «Купить» может сразу отправить заявку."],
    ["Как создать токен?", "Выберите сеть запуска. Учтите, в какой сети у сообщества уже есть кошельки и средства.", "Укажите название, символ и описание и добавьте изображение. Проверьте данные перед выпуском.", "Проверьте доступные параметры запуска, например кто сможет покупать вначале и как распределяется доля комиссии создателя.", "Выпустите токен в выбранной сети и поделитесь его официальной ссылкой или адресом контракта."],
    ["Что происходит после запуска токена?", "На первом этапе кривая ценообразования определяет цену по покупкам и продажам. Цена может меняться между сделками.", "Если кривая достигает цели, торги переходят в биржевой пул. EscapeHub указывает EscapeSwap для Solana и Uniswap v4 для поддерживаемых сетей EVM.", "Токен остаётся в своей сети. Торговая площадка и комиссии после перехода могут измениться.", "Создатель и протокол получают разные доли. Смотрите комиссию для текущего этапа торгов."]
  ],
  "zh-CN": [
    ["分步指南", "简明问答"],
    ["如何购买第一个代币？", "打开内置钱包，查看你想购买的代币在哪个网络上交易。", "为钱包充值。使用银行卡或移动支付时，在确认前检查金额和支付服务商的费用。", "搜索项目，并通过项目的官方信息核对网络和合约地址。名称与标志可能被仿冒。", "核对代币、金额和报价。使用免弹窗确认交易时，点击买入可能立即提交订单。"],
    ["如何创建代币？", "选择代币发行网络。考虑你的社区已经在哪些网络上拥有钱包和资金。", "填写名称、符号和描述，并上传图片。部署前核对信息。", "查看可用的发行设置，例如初期购买资格以及创建者手续费份额的分配方式。", "在选定网络上部署代币，分享官方链接或合约地址，方便他人找到正确的代币。"],
    ["代币发行后会发生什么？", "初期交易时，联合曲线会根据买卖活动确定价格。两笔交易之间的价格可能变化。", "曲线达到目标后，交易会转入交易池。EscapeHub 提到 Solana 上的 EscapeSwap，以及受支持的 EVM 网络上的 Uniswap v4。", "代币仍在原网络上。交易场所和费用可能随交易阶段转换而变化。", "创建者与协议的手续费份额分别计算。请按代币当前的交易阶段查看适用费率。"]
  ],
  "ja": [
    ["手順ガイド", "短い回答"],
    ["初めてトークンを買うには？", "内蔵ウォレットを開き、購入したいトークンがどのネットワークで取引されているか確認します。", "入金します。カードやモバイル決済を使う場合は、確定前に金額と決済事業者の手数料を確認します。", "プロジェクトを検索し、ネットワークとコントラクトアドレスを公式情報と照合します。名前やロゴは模倣されることがあります。", "トークン、金額、提示価格を確認します。確認画面のない取引では、購入ボタンを押すとすぐに注文される場合があります。"],
    ["トークンを作成するには？", "ローンチするネットワークを選びます。コミュニティがウォレットや資金を持っているネットワークを考慮しましょう。", "名前・シンボル・説明を入力し、画像を追加します。デプロイ前に内容を確認します。", "最初に購入できる人や作成者の手数料の配分など、利用できるローンチ設定を確認します。", "選んだネットワークにデプロイし、公式リンクやコントラクトアドレスを共有します。"],
    ["ローンチ後はどうなりますか？", "初期取引では、売買に応じてボンディングカーブが価格を決めます。取引の間に価格が変わることがあります。", "カーブが目標に達すると、取引は取引所のプールに移ります。EscapeHub は Solana では EscapeSwap、対応する EVM ネットワークでは Uniswap v4 を案内しています。", "トークンは同じネットワークにとどまります。移行後は取引場所や手数料が変わることがあります。", "作成者とプロトコルの取り分は別々です。現在の取引段階に適用される手数料を確認してください。"]
  ],
  "ko": [
    ["단계별 안내", "짧은 답변"],
    ["첫 토큰은 어떻게 사나요?", "내장 지갑을 열고 구매하려는 토큰이 어느 네트워크에서 거래되는지 확인합니다.", "지갑을 충전합니다. 카드나 모바일 결제를 사용할 때는 확정 전에 금액과 결제 수수료를 확인합니다.", "프로젝트를 검색하고 공식 정보에서 네트워크와 계약 주소를 대조합니다. 이름과 로고는 모방될 수 있습니다.", "토큰, 금액, 견적을 확인합니다. 별도의 확인 팝업이 없는 거래에서는 매수 버튼을 누르면 주문이 바로 제출될 수 있습니다."],
    ["토큰은 어떻게 만드나요?", "출시할 네트워크를 고릅니다. 커뮤니티가 이미 지갑과 자금을 보유한 네트워크를 고려합니다.", "이름, 심볼, 설명을 입력하고 이미지를 올립니다. 배포 전에 정보를 확인합니다.", "출시 초기에 누가 매수할 수 있는지, 제작자 수수료를 어떻게 배분할지 등 가능한 설정을 확인합니다.", "선택한 네트워크에 토큰을 배포하고 공식 링크나 계약 주소를 공유합니다."],
    ["토큰 출시 후에는 어떻게 되나요?", "초기 거래 단계에서는 본딩 커브가 매수와 매도에 따라 가격을 결정합니다. 거래 사이에 가격이 바뀔 수 있습니다.", "곡선이 목표에 도달하면 거래소 풀로 이동합니다. EscapeHub는 Solana에서는 EscapeSwap, 지원되는 EVM 네트워크에서는 Uniswap v4를 안내합니다.", "토큰은 같은 네트워크에 남습니다. 전환 후 거래 장소와 수수료는 달라질 수 있습니다.", "제작자 몫과 프로토콜 몫은 별개입니다. 현재 거래 단계에 적용되는 수수료를 확인합니다."]
  ]
};

const practicalLearnGuides = [
  {slug:'first-purchase', files:[27, 28, 29, 30], sources:[8, 7]},
  {slug:'token-creation', files:[11, 1, 4], sources:[1]},
  {slug:'after-launch', files:[16, 18, 19, 20], sources:[3, 6]}
];

function renderLearn(language) {
  const [[title, sourceLabel], ...questions] = learnTranslations[language];
  const [[guideTitle, questionsTitle], ...guides] = practicalLearnTranslations[language];
  document.querySelector('#learnNav').textContent = title;
  document.querySelector('#learnTitle').textContent = title;
  document.querySelector('#learnGuidesTitle').textContent = guideTitle;
  document.querySelector('#learnQuestionsTitle').textContent = questionsTitle;
  const openIds = new Set([...document.querySelectorAll('#learn details[open]')].map(item => item.id));
  const disclosure = (itemId, heading, body) => `<details id="${itemId}"${openIds.has(itemId) || location.hash === '#' + itemId ? ' open' : ''}>
    <summary>${escapeHTML(heading)}</summary><div>${body}</div>
  </details>`;
  const official = (index, label) => externalLink('https://escapehub.ai/learn/' + learnArticles[index], label);

  document.querySelector('#learnGuides').innerHTML = guides.map(([heading, ...steps], index) => {
    const guide = practicalLearnGuides[index];
    const stepsHtml = steps.map(step => `<li>${escapeHTML(step)}</li>`).join('');
    const fileLinks = guide.files.map(number => {
      const file = files.find(candidate => candidate.n === number);
      return file ? fileLink(file, archiveStrings[language].file + ' ' + file.id) : '';
    }).join('');
    const sources = guide.sources.map(source => official(source, sourceLabel + ' · ' + questions[source][0])).join('');
    return disclosure('guide-' + guide.slug, heading, `<ol class="learn-steps">${stepsHtml}</ol>
      <div class="learn-file-links">${fileLinks}</div><div class="learn-source">${sources}</div>`);
  }).join('');

  document.querySelector('#learnList').innerHTML = questions.map(([question, ...paragraphs], index) =>
    disclosure('learn-' + learnArticles[index], question,
      paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join('') +
      `<div class="learn-source">${official(index, sourceLabel)}</div>`)
  ).join('');
}

window.addEventListener('hashchange', () => {
  const item = document.getElementById(location.hash.slice(1));
  if (item?.matches('#learn details')) item.open = true;
});
