const WEEKS = {
  1:{title:'Whitelisted Launches',article:'Community First, Then the Open Market',articleUrl:'https://paragraph.com/@tankothek-2c2d/community-first'},
  2:{title:'Creator Rewards',article:'From an Idea to a Token: What EscapeHub Makes Possible',articleUrl:'https://paragraph.com/@tankothek-2c2d/from-an-idea-to-a-token-what-escapehub-makes-possible'},
  3:{title:'Networks & Discovery',article:'Several Networks, One Platform: How EscapeHub Aims to Bring Ideas and People Together',articleUrl:'https://paragraph.com/@tankothek-2c2d/several-networks-one-platform'},
  4:{title:'Bonding & DEX Graduation',article:'Your Token Has Launched. What Happens Next?',articleUrl:'https://paragraph.com/@tankothek-2c2d/your-token-has-launched-what-happens-next'},
  5:{title:'Platform Revenue, $ESC & Buybacks',article:'EscapeHub Launches First: How the Platform, Presale and $ESC Connect',articleUrl:null},
  6:{title:'Launch Week: First Steps',article:'Getting Started with EscapeHub: From Signing In to Your First Purchase',articleUrl:'https://paragraph.com/@tankothek-2c2d/getting-started-with-escapehub'},
  7:{title:'Official Access',article:'How to Get Help with EscapeHub',articleUrl:'https://paragraph.com/@tankothek-2c2d/how-to-get-help-with-escapehub'}
};

const XIDS = [
'2107007974027723229','2107350300746981568','2107863529449771183','2108225913423044978','2108588302555377758',
'2109675470904328468','2110037855276089628','2110400238510919687','2110762630117753088','2111125014661714072',
'2112212179646587244','2112574565171753307','2112936960272818235','2113299347370586314','2113661732128493613',
'2114764002651668509','2115126382275518903','2115488774159503454','2115851156144771253','2116213551085830295',
'2117300706134958358','2117663102019748312','2118025485548446205','2118387878640427083','2118750262181720307'
];
const xlink=n=>n<=25?`https://x.com/Tankothek/status/${XIDS[n-1]}`:null;
const e=(n,week,date,title,topic,tags,status='published',source=null,note='')=>({n,week,date,title,topic,tags,status,source,note,x:xlink(n)});

const FILES = [
 e(1,1,'2026-10-05','WHY WHITELISTED LAUNCHES?','Why early access can protect a community from automated launch sniping.',['whitelist','fair launch'],'published','whitelist'),
 e(2,1,'2026-10-06','NO SNIPER WINDOW.','Token and whitelist are created together, so protection starts with the token.',['whitelist','anti-snipe'],'published','whitelist'),
 e(3,1,'2026-10-07','LOCKED ON-CHAIN.','The whitelist is stored and enforced on-chain and cannot be edited after creation.',['on-chain','whitelist'],'published','whitelist'),
 e(4,1,'2026-10-08','WHO GETS ACCESS?','Whitelisted wallets can buy during the gated phase; selling remains possible.',['access','whitelist'],'published','whitelist'),
 e(5,1,'2026-10-09','WHEN DOES IT OPEN?','The creator can open trading permanently; graduation also ends the whitelist automatically.',['public trading','graduation'],'published','whitelist'),
 e(6,2,'2026-10-12','A SHARE FOR THE CREATOR','How EscapeHub gives creators a share of trading fees.',['creator rewards','fees'],'published','fees'),
 e(7,2,'2026-10-13','ARCHIVE TITLE TO BE IMPORTED','A practical example of the creator fee share using a $100 trade.',['creator rewards','0.5%'],'archive-review','fees','Final headline intentionally left pending until imported from the original published File.'),
 e(8,2,'2026-10-14','SUPPORT THE NEXT STEP','How creator revenue could support development, design or the next project step.',['creator rewards','development'],'published','fees'),
 e(9,2,'2026-10-15','ARCHIVE TITLE TO BE IMPORTED','Creator choices for how their share can be used or distributed.',['creator rewards','fee options'],'archive-review','fees','Final headline intentionally left pending until imported from the original published File.'),
 e(10,2,'2026-10-16','BEYOND THE LAUNCH','Creator fee participation can continue after the initial launch phase.',['creator rewards','after launch'],'published','fees'),
 e(11,3,'2026-10-19','CHOOSE YOUR NETWORK','Choosing a launch network based on people, costs and project needs.',['multichain','networks'],'published','home'),
 e(12,3,'2026-10-20','SEVERAL NETWORKS. ONE PLATFORM.','Exploring multiple supported networks inside one platform.',['multichain','platform'],'published','home'),
 e(13,3,'2026-10-21','HELP PEOPLE DISCOVER YOUR TOKEN','Discovery starts with opening a token and understanding the idea behind it.',['discovery','tokens'],'published','home'),
 e(14,3,'2026-10-22','YOUR TOKENS. ONE OVERVIEW.','Tokens from different networks brought into a single overview.',['multichain','overview'],'published','home'),
 e(15,3,'2026-10-23','SHARE YOUR TOKEN CLEARLY.','Share the idea behind a project together with its token link.',['sharing','discovery'],'published','home'),
 e(16,4,'2026-10-26','WHERE DOES THE FIRST PRICE COME FROM?','The starting price follows a defined calculation rather than appearing arbitrarily.',['bonding curve','price'],'published','fees'),
 e(17,4,'2026-10-27','DOES THE START PRICE STAY THE SAME?','Every buy or sell recalculates the price along the curve.',['bonding curve','price'],'published','fees'),
 e(18,4,'2026-10-28','WHEN DOES THE NEXT STAGE BEGIN?','A token moves to its next stage automatically when the required launch conditions are completed.',['graduation','bonding curve'],'published','fees'),
 e(19,4,'2026-10-29','SAME TOKEN. NEXT STAGE.','On Solana, trading continues on EscapeSwap after graduation while the token and network stay the same.',['Solana','EscapeSwap','graduation'],'published','fees'),
 e(20,4,'2026-10-30','AFTER THE START.','EscapeHub names Uniswap v4 as the next trading venue for supported Ethereum-compatible networks after the initial phase.',['EVM','Uniswap','graduation'],'published','fees'),
 e(21,5,'2026-11-02','ONE PLATFORM. TWO LAUNCHES.','The EscapeHub Launchpad and the $ESC token launch are separate milestones.',['launchpad','$ESC','TGE'],'published','home'),
 e(22,5,'2026-11-03','THE PLATFORM HELPS FUND THE NEXT STEP.','Before $ESC launches, Launchpad revenue can contribute toward the remaining presale funding target.',['revenue','presale','$ESC'],'published','faq'),
 e(23,5,'2026-11-04','HOW BUYBACKS WILL WORK.','The planned relationship between platform fees and future $ESC market buybacks.',['buybacks','$ESC','fees'],'published','faq'),
 e(24,5,'2026-11-05','$ESC. MORE POSSIBILITIES.','Utility concepts around $ESC such as platform benefits and premium features.',['$ESC','utility'],'published','tokenomics'),
 e(25,5,'2026-11-06','AFTER THE BUYBACK.','A look at the idea of locking repurchased $ESC rather than immediately burning it.',['$ESC','buybacks'],'published','faq'),
 e(26,6,'2026-11-09','ONE WEEK TO GO.','Launch countdown: Web and Android on November 16 at 15:00 UTC; iOS pending Apple approval.',['launch','web','Android','iOS'],'published','home'),
 e(27,6,'2026-11-10','ARCHIVE TITLE TO BE IMPORTED','Launch-week first steps and account access.',['first steps','access'],'archive-review','home','Published File; final headline will be imported from the original post.'),
 e(28,6,'2026-11-11','ARCHIVE TITLE TO BE IMPORTED','Launch-week walkthrough: wallet and account flow.',['wallet','first steps'],'planned','home','Scheduled in the Week 06 sequence; final headline will be added after publication.'),
 e(29,6,'2026-11-12','EXPLORE BEFORE YOU BUY.','Discover projects, read details and use watchlists before making a purchase.',['discovery','watchlist'],'planned','home'),
 e(30,6,'2026-11-13','BUY WITHOUT THE EXTRA POPUPS.','Integrated wallet flow for buying and selling without a separate wallet confirmation on every trade.',['wallet','trading','UX'],'planned','home'),
 {...e(31,7,'2026-11-16','START AT THE SOURCE.','Start at escapehub.ai to find the official Launchpad links and launch updates.',['access','launchpad','web'],'published','home'), x:'https://x.com/Tankothek/status/2122374136441806955'},
 {...e(32,7,'2026-11-17','NEED HELP WITH ESCAPEHUB?','Three official ways to reach EscapeHub support.',['access','first steps'],'published','support'), x:'https://x.com/Tankothek/status/2122736529823166780', cover:'file-032.jpg',
   contacts:[
     {channel:'Telegram', label:'@escapehub_official', url:'https://t.me/escapehub_official'},
     {channel:'X', label:'@escape_hub', url:'https://x.com/escape_hub'},
     {channel:'email', label:'support@escapehub.ai', url:'mailto:support@escapehub.ai'}
   ]
 },
 {...e(33,7,'2026-11-18','CHECK WHO CONTACTED YOU.','Before replying to someone claiming to be on the EscapeHub team, check the exact Telegram username or email address with EscapeHub’s official verification tool.',['access','first steps'],'published','verify'), x:'https://x.com/Tankothek/status/2123098915297698011', cover:'file-033.webp'},
 {...e(34,7,'2026-11-19',"Help should not start with a payment.","EscapeHub says its staff never ask you to send money upfront for help. If someone does, leave the chat and avoid links in the message.",['access','first steps'],'published','verify'), x:'https://x.com/Tankothek/status/2123461305797574922', cover:'file-034.webp'},
 {...e(35,7,'2026-11-20',"What should you tell support?","Tell EscapeHub support which platform you used, what you tried and what went wrong. Include the exact error message if you saw one. Keep passwords and wallet recovery words private.",['access','first steps'],'published','support'), x:'https://x.com/Tankothek/status/2123823693214429426', cover:'file-035.webp'}
];

const SOURCES = {
 verify:{name:'EscapeHub Official Verify',url:'https://escapehub.ai/official-verify/'},
 support:{name:'EscapeHub Support',url:'https://escapehub.ai/support/'},
 signless:{name:'Signless Trading',url:'https://escapehub.ai/learn/signless-trading/'},
 funding:{name:'In-App Fiat On-Ramp',url:'https://escapehub.ai/learn/buy-crypto-with-card/'},
 wallet:{name:'EscapeHub App',url:'https://escapehub.ai/learn/escapehub-app/'},

 whitelist:{name:'Whitelisted Launches',url:'https://escapehub.ai/blog/whitelisted-token-launches-anti-snipe/'},
 fees:{name:'EscapeHub Fees Explained',url:'https://escapehub.ai/learn/escapehub-fees/'},
 faq:{name:'EscapeHub FAQ',url:'https://escapehub.ai/faq/'},
 tokenomics:{name:'$ESC Tokenomics',url:'https://escapehub.ai/tokenomics/'},
 home:{name:'EscapeHub Launchpad',url:'https://escapehub.ai/'}
};

const KNOWLEDGE = [
 {title:'Launch date',text:'EscapeHub currently states November 16, 2026 at 15:00 UTC for the Launchpad. Web and Android are listed for launch; iOS is pending approval.',source:'home'},
 {title:'Bonding-curve fee',text:'While a token is on the bonding curve, EscapeHub states a 1.2% fee per buy or sell: 0.5% to the creator and 0.7% to the protocol.',source:'fees'},
 {title:'Creator options',text:'EscapeHub documents three creator-fee options: keep it, split it across wallets, or redirect it to traders as cashback.',source:'fees'},
 {title:'Whitelist enforcement',text:'EscapeHub states that whitelists are created with the token, stored and checked on-chain, and cannot be edited after creation.',source:'whitelist'},
 {title:'Opening a whitelist',text:'The creator can open a whitelisted token to everyone once and permanently; graduation also removes the whitelist automatically.',source:'whitelist'},
 {title:'Mobile / multichain direction',text:'EscapeHub describes a mobile-first multichain experience with discovery, integrated wallet flows and trading across supported networks.',source:'home'}
];

const originalEditions = [{"id": "006", "title": "A Share For The Creator", "body": "This week: how can trading fees support a project?\n\nIn EscapeHub’s model, creators receive a share of the fees when their tokens are bought or sold.\n\nTomorrow: a simple example.", "date": "2026-10-12", "tag": "Creator rewards"}, {"id": "007", "title": "What Does 0.5% Mean?", "body": "On a $100 trade, EscapeHub lists $0.50 for the digital asset’s creator and $0.70 for the platform in the initial phase: a $1.20 trading fee in total.\n\nTomorrow: how could the creator use that share?", "date": "2026-10-13", "tag": "Trading fees"}, {"id": "008", "title": "Support The Next Step", "body": "A feature the community has asked for: a project could use its share of EscapeHub trading fees to help bring that idea to life.\n\nThe image shows possible uses.\n\nTomorrow: who receives the share?", "date": "2026-10-14", "tag": "Project growth"}, {"id": "009", "title": "Choose Where It Goes", "body": "Who receives the fee share?\n\nEscapeHub’s model offers creators of digital assets three options: keep it, split it with others, or return it to buyers and sellers.\n\nTomorrow: what happens after the initial phase?", "date": "2026-10-15", "tag": "Distribution"}, {"id": "010", "title": "Beyond The Launch", "body": "In EscapeHub’s model, token creators still receive a share of trading fees after the initial phase.\n\nTomorrow on Paragraph: how trading fees can support a project.", "date": "2026-10-16", "tag": "Creator rewards"}];

WEEKS[5].articleUrl='https://paragraph.com/@tankothek-2c2d/escapehub-launches-first';
const files = FILES.map(f=>{const id=String(f.n).padStart(3,'0');const original=originalEditions.find(o=>o.id===id);return {...f,id,title:original?original.title:(f.title==='ARCHIVE TITLE TO BE IMPORTED'?'Title awaiting archive review':f.title.toLowerCase().replace(/(^|[.!?] )\w/g,c=>c.toUpperCase())),body:original?original.body:f.topic,tag:WEEKS[f.week].title,cover:original?`file-${id}.png`:(f.cover??null),status:original?'published':f.status,original:!!original};});

files.forEach(f=>{f.title=f.title.replace(/\$esc/g,"$ESC").replace(/\bescapehub\b/g,"EscapeHub");});
WEEKS[5].article="EscapeHub Launches First: How the Platform, Presale and $ESC Fit Together";

Object.assign(files.find(file => file.id === '011'), {"cover": "file-011.png", "original": true, "title": "Choose Your Network", "body": "Where should your token start? Consider the people you want to reach, the costs and the features your project needs.\n\nThis week: several networks, one platform."});
Object.assign(files.find(file => file.id === '027'), {
  title: 'Your account', topic: 'Signing in and using the integrated wallet.',
  body: 'File 027 covers signing in and accessing EscapeHub’s integrated wallet.', note: ''
});
Object.assign(files.find(file => file.id === '028'), {
  title: 'Adding funds', topic: 'Funding your account by card, Apple Pay or Google Pay.',
  body: 'File 028 covers adding crypto funds by card, Apple Pay or Google Pay. Funding an account and buying a project token are separate steps.', note: ''
});
WEEKS[6].article = 'Getting started with EscapeHub';

Object.assign(files.find(file => file.id === '034'), {
  title: "Help should not start with a payment.",
  body: "Someone asks you to pay before they’ll help? EscapeHub says its team never asks you to send money first. Don’t pay or use a link from the message. Leave the chat.\n\nNext: launch updates.\n\n#TheEscapeFiles",
  original: true
});

Object.assign(files.find(file => file.id === '035'), {
  title: "What should you tell support?",
  body: "Need EscapeHub support? Say where it happened (web, Android or iOS), what you tried and what went wrong. Include the exact error if you saw one. Keep passwords and wallet recovery words private.\n\nSaturday: support guide.\n\n#TheEscapeFiles",
  original: true
});

const germanFiles = {
  "034": [
    "Hilfe sollte nicht mit einer Zahlung beginnen.",
    "Laut EscapeHub verlangt das Team keine Vorauszahlung für Hilfe. Wenn jemand Geld verlangt, verlasse den Chat und öffne keine Links aus der Nachricht.",
    "Jemand verlangt Geld, bevor er dir hilft? Laut EscapeHub bittet dich das Team nie, zuerst Geld zu senden. Zahle nichts, öffne keine Links aus der Nachricht und verlasse den Chat."
  ],
  "035": [
    "Was solltest du dem Support sagen?",
    "Nenne dem EscapeHub-Support die Plattform, deine Schritte und das Problem. Gib eine Fehlermeldung im Wortlaut an. Passwörter und Wiederherstellungswörter bleiben privat.",
    "Frage an den EscapeHub-Support? Nenne Plattform (Web, Android oder iOS), Schritte und Problem. Gib Fehlermeldungen im Wortlaut an. Passwörter und Wiederherstellungswörter bleiben privat."
  ],
  "001": [
    "Warum mit Whitelist starten?",
    "Wie früher Zugang eine Community vor automatisierten Käufen zum Start schützen kann.",
    "Wie früher Zugang eine Community vor automatisierten Käufen zum Start schützen kann."
  ],
  "002": [
    "Kein Zeitfenster für Sniper",
    "Token und Whitelist werden gemeinsam erstellt. Der Schutz greift damit ab dem Start.",
    "Token und Whitelist werden gemeinsam erstellt. Der Schutz greift damit ab dem Start."
  ],
  "003": [
    "Auf der Blockchain festgelegt",
    "Die Whitelist wird auf der Blockchain gespeichert und geprüft. Nach der Erstellung lässt sie sich nicht bearbeiten.",
    "Die Whitelist wird auf der Blockchain gespeichert und geprüft. Nach der Erstellung lässt sie sich nicht bearbeiten."
  ],
  "004": [
    "Wer bekommt Zugang?",
    "Während der geschlossenen Phase können Wallets auf der Whitelist kaufen. Verkäufe bleiben möglich.",
    "Während der geschlossenen Phase können Wallets auf der Whitelist kaufen. Verkäufe bleiben möglich."
  ],
  "005": [
    "Wann öffnet sich der Handel?",
    "Ersteller können den Handel dauerhaft öffnen. Auch der Übergang in die nächste Handelsphase beendet die Whitelist.",
    "Ersteller können den Handel dauerhaft öffnen. Auch der Übergang in die nächste Handelsphase beendet die Whitelist."
  ],
  "006": [
    "Ein Anteil für die Ersteller",
    "Wie EscapeHub Ersteller an Handelsgebühren beteiligt.",
    "Diese Woche: Wie Handelsgebühren Projekte unterstützen.\n\nIn EscapeHubs Modell erhalten Ersteller einen Gebührenanteil, wenn ihre Token gekauft oder verkauft werden.\n\nMorgen: ein Rechenbeispiel."
  ],
  "007": [
    "Was bedeutet 0,5 %?",
    "Ein Rechenbeispiel für den Gebührenanteil bei einem Handel über 100 US-Dollar.",
    "Ein Handel über $100: Laut EscapeHub entfallen in der Startphase $0.50 auf den Ersteller des digitalen Werts und $0.70 auf die Plattform. Zusammen sind das $1.20 Handelsgebühr.\n\nMorgen: Wofür lässt sich der Anteil nutzen?"
  ],
  "008": [
    "Den nächsten Schritt finanzieren",
    "Wie Gebühreneinnahmen Entwicklung, Design oder den nächsten Projektschritt unterstützen können.",
    "Eine Funktion, die sich die Community wünscht: Ein Projekt könnte seinen Anteil an EscapeHubs Handelsgebühren nutzen, um die Umsetzung mitzufinanzieren.\n\nDas Bild zeigt mögliche Verwendungen.\n\nMorgen: Wer bekommt den Anteil?"
  ],
  "009": [
    "Wer bekommt den Gebührenanteil?",
    "Welche Möglichkeiten Ersteller bei der Verteilung ihres Gebührenanteils haben.",
    "Wer bekommt den Gebührenanteil?\n\nEscapeHubs Modell bietet Erstellern digitaler Werte drei Optionen: behalten, mit anderen teilen oder an Käufer und Verkäufer zurückgeben.\n\nMorgen: Wie geht es nach der Startphase weiter?"
  ],
  "010": [
    "Nach dem Start",
    "Der Gebührenanteil für Ersteller kann auch nach der Startphase weiterlaufen.",
    "In EscapeHubs Modell erhalten Token-Ersteller auch nach der Startphase einen Teil der Handelsgebühren.\n\nMorgen auf Paragraph: Wie Handelsgebühren ein Projekt unterstützen können."
  ],
  "011": [
    "Wähle dein Netzwerk",
    "Zielgruppe, Kosten und benötigte Funktionen helfen bei der Wahl des Netzwerks.",
    "Wo soll dein Token starten? Beachte, wen du erreichen möchtest, die Kosten und die Funktionen, die dein Projekt braucht.\n\nDiese Woche: mehrere Netzwerke, eine Plattform."
  ],
  "012": [
    "Mehrere Netzwerke, eine Plattform",
    "Mehrere unterstützte Netzwerke innerhalb einer Plattform.",
    "Mehrere unterstützte Netzwerke innerhalb einer Plattform."
  ],
  "013": [
    "Mach deinen Token auffindbar",
    "Bei der Suche nach neuen Token geht es auch darum, die Idee hinter dem Projekt zu verstehen.",
    "Bei der Suche nach neuen Token geht es auch darum, die Idee hinter dem Projekt zu verstehen."
  ],
  "014": [
    "Deine Token im Überblick",
    "Die Plattform zeigt Token aus verschiedenen Netzwerken in einer gemeinsamen Übersicht.",
    "Die Plattform zeigt Token aus verschiedenen Netzwerken in einer gemeinsamen Übersicht."
  ],
  "015": [
    "Teile deinen Token verständlich",
    "Ein Token-Link lässt sich zusammen mit der Idee hinter dem Projekt teilen.",
    "Ein Token-Link lässt sich zusammen mit der Idee hinter dem Projekt teilen."
  ],
  "016": [
    "Woher kommt der erste Preis?",
    "Der Startpreis ergibt sich aus einer festgelegten Berechnung.",
    "Der Startpreis ergibt sich aus einer festgelegten Berechnung."
  ],
  "017": [
    "Bleibt der Startpreis gleich?",
    "Käufe und Verkäufe ändern den Preis entlang der Preisbildungskurve.",
    "Käufe und Verkäufe ändern den Preis entlang der Preisbildungskurve."
  ],
  "018": [
    "Wann beginnt die nächste Phase?",
    "Der Token wechselt automatisch in die nächste Phase, sobald die Bedingungen dafür erfüllt sind.",
    "Der Token wechselt automatisch in die nächste Phase, sobald die Bedingungen dafür erfüllt sind."
  ],
  "019": [
    "Gleicher Token, nächste Phase",
    "Auf Solana läuft der Handel anschließend auf EscapeSwap weiter. Token und Netzwerk bleiben gleich.",
    "Auf Solana läuft der Handel anschließend auf EscapeSwap weiter. Token und Netzwerk bleiben gleich."
  ],
  "020": [
    "Nach dem Start auf EVM",
    "Für unterstützte Ethereum-kompatible Netzwerke nennt EscapeHub Uniswap v4 als Handelsplatz nach der Startphase.",
    "Für unterstützte Ethereum-kompatible Netzwerke nennt EscapeHub Uniswap v4 als Handelsplatz nach der Startphase."
  ],
  "021": [
    "Eine Plattform, zwei Starts",
    "Der Start des EscapeHub Launchpads und der Start von $ESC sind zwei getrennte Meilensteine.",
    "Der Start des EscapeHub Launchpads und der Start von $ESC sind zwei getrennte Meilensteine."
  ],
  "022": [
    "Die Plattform finanziert den nächsten Schritt",
    "Laut damaliger Planung können Einnahmen des Launchpads helfen, die verbleibende Finanzierung des Vorverkaufs zu decken.",
    "Laut damaliger Planung können Einnahmen des Launchpads helfen, die verbleibende Finanzierung des Vorverkaufs zu decken."
  ],
  "023": [
    "Wie Rückkäufe funktionieren sollen",
    "Die damalige Planung sieht einen Zusammenhang zwischen Plattformgebühren und künftigen $ESC-Rückkäufen vor.",
    "Die damalige Planung sieht einen Zusammenhang zwischen Plattformgebühren und künftigen $ESC-Rückkäufen vor."
  ],
  "024": [
    "$ESC bietet weitere Möglichkeiten",
    "Mögliche Einsatzbereiche für $ESC umfassen Plattformvorteile und Premium-Funktionen.",
    "Mögliche Einsatzbereiche für $ESC umfassen Plattformvorteile und Premium-Funktionen."
  ],
  "025": [
    "Nach dem Rückkauf",
    "Die damalige Planung beschreibt, wie zurückgekaufte $ESC gesperrt werden könnten.",
    "Die damalige Planung beschreibt, wie zurückgekaufte $ESC gesperrt werden könnten."
  ],
  "026": [
    "Noch eine Woche",
    "Die Ausgabe kündigte den Web- und Android-Start für den 16. November um 15 Uhr UTC an. Die Freigabe für iOS stand noch aus.",
    "Die Ausgabe kündigte den Web- und Android-Start für den 16. November um 15 Uhr UTC an. Die Freigabe für iOS stand noch aus."
  ],
  "027": [
    "Dein Zugang",
    "Anmeldung und Zugang zur integrierten Wallet.",
    "Anmeldung und Zugang zur integrierten Wallet."
  ],
  "028": [
    "Dein Guthaben",
    "Guthaben per Karte, Apple Pay oder Google Pay hinzufügen. Das Aufladen und der Kauf eines Projekt-Tokens sind getrennte Schritte.",
    "Guthaben per Karte, Apple Pay oder Google Pay hinzufügen. Das Aufladen und der Kauf eines Projekt-Tokens sind getrennte Schritte."
  ],
  "029": [
    "Erst entdecken, dann kaufen",
    "Projekte entdecken, Details lesen und interessante Projekte vor dem Kauf auf einer Merkliste sammeln.",
    "Projekte entdecken, Details lesen und interessante Projekte vor dem Kauf auf einer Merkliste sammeln."
  ],
  "030": [
    "Kaufen ohne zusätzliche Pop-ups",
    "Die integrierte Wallet ermöglicht Käufe und Verkäufe ohne eigene Wallet-Bestätigung für jeden Handel.",
    "Die integrierte Wallet ermöglicht Käufe und Verkäufe ohne eigene Wallet-Bestätigung für jeden Handel."
  ],
  "031": [
    "Direkt zur Quelle",
    "Auf escapehub.ai findest du die offiziellen Links zum Launchpad und Neuigkeiten zum Start.",
    "Auf escapehub.ai findest du die offiziellen Links zum Launchpad und Neuigkeiten zum Start."
  ],
  "032": [
    "Brauchst du Hilfe mit EscapeHub?",
    "Drei offizielle Wege zum EscapeHub-Support.",
    "Drei offizielle Wege zum EscapeHub-Support."
  ],
  "033": [
    "Prüfe, wer dich kontaktiert hat",
    "Wenn sich jemand als Mitglied des EscapeHub-Teams ausgibt, prüfe vor deiner Antwort den genauen Telegram-Nutzernamen oder die E-Mail-Adresse mit dem offiziellen Prüftool.",
    "Wenn sich jemand als Mitglied des EscapeHub-Teams ausgibt, prüfe vor deiner Antwort den genauen Telegram-Nutzernamen oder die E-Mail-Adresse mit dem offiziellen Prüftool."
  ]
};

WEEKS[1].articleDe = { title:'Erst die Community, dann der offene Markt', url:'https://paragraph.com/@tankothek-2c2d/erst-die-community' };

// Cover images matched to the published File numbers on Tankothek’s X account.
const recoveredCovers = ["001", "002", "003", "004", "005", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031"];
for (const file of files) {
  if (recoveredCovers.includes(file.id)) file.cover = `file-${file.id}.webp`;
}

const weekSixPosts = {
  '026': ['2119837424687751245', 'One week to go.', 'Noch eine Woche'],
  '027': ['2120199812926644488', 'Your wallet. Built in.', 'Deine Wallet. Direkt integriert.'],
  '028': ['2120562205565542464', 'A familiar way to start.', 'Vertraut einsteigen.'],
  '029': ['2120925338783932436', 'Explore before you buy.', 'Erst entdecken, dann kaufen'],
  '030': ['2121286979627479242', 'Buy without the extra popups.', 'Kaufen ohne zusätzliche Pop-ups']
};
for (const [id, [post, title, germanTitle]] of Object.entries(weekSixPosts)) {
  Object.assign(files.find(file => file.id === id), {
    title, x: `https://x.com/Tankothek/status/${post}`, status: 'published'
  });
  germanFiles[id][0] = germanTitle;
}
Object.assign(files.find(file => file.id === '027'), {
  topic: 'Create a wallet directly inside EscapeHub.',
  body: 'The built-in wallet lets you hold, send and receive digital tokens without a separate wallet app.'
});
germanFiles['027'][1] = 'Eine Wallet direkt in EscapeHub erstellen.';
germanFiles['027'][2] = 'Mit der integrierten Wallet kannst du digitale Token halten, senden und empfangen. Eine separate Wallet-App brauchst du dafür nicht.';

const firstStepsSources = {'027':'wallet', '028':'funding', '030':'signless'};
for (const [id, source] of Object.entries(firstStepsSources)) {
  files.find(file => file.id === id).source = source;
}
