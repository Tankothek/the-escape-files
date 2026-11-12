const WEEKS = {
  1:{title:'Whitelisted Launches',article:'Community First',articleUrl:'https://paragraph.com/@tankothek-2c2d/community-first'},
  2:{title:'Creator Rewards',article:'From an Idea to a Token',articleUrl:null},
  3:{title:'Networks & Discovery',article:'Several Networks – One Platform',articleUrl:null},
  4:{title:'Bonding & DEX Graduation',article:'Your Token Has Launched. What Happens Next?',articleUrl:null},
  5:{title:'Platform Revenue, $ESC & Buybacks',article:'EscapeHub Launches First: How the Platform, Presale and $ESC Connect',articleUrl:null},
  6:{title:'Launch Week: First Steps',article:'Saturday deep dive',articleUrl:null}
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
 e(20,4,'2026-10-30','AFTER THE START.','EVM-side post-launch trading continues through exchange infrastructure such as Uniswap.',['EVM','Uniswap','graduation'],'published','fees'),
 e(21,5,'2026-11-02','ONE PLATFORM. TWO LAUNCHES.','The EscapeHub Launchpad and the $ESC token launch are separate milestones.',['launchpad','$ESC','TGE'],'published','home'),
 e(22,5,'2026-11-03','THE PLATFORM HELPS FUND THE NEXT STEP.','Before $ESC launches, Launchpad revenue can contribute toward the remaining presale funding target.',['revenue','presale','$ESC'],'published','faq'),
 e(23,5,'2026-11-04','HOW BUYBACKS WILL WORK.','The planned relationship between platform fees and future $ESC market buybacks.',['buybacks','$ESC','fees'],'published','faq'),
 e(24,5,'2026-11-05','$ESC. MORE POSSIBILITIES.','Utility concepts around $ESC such as platform benefits and premium features.',['$ESC','utility'],'published','tokenomics'),
 e(25,5,'2026-11-06','AFTER THE BUYBACK.','A look at the idea of locking repurchased $ESC rather than immediately burning it.',['$ESC','buybacks'],'published','faq'),
 e(26,6,'2026-11-09','ONE WEEK TO GO.','Launch countdown: Web and Android on November 16 at 15:00 UTC; iOS pending Apple approval.',['launch','web','Android','iOS'],'published','home'),
 e(27,6,'2026-11-10','ARCHIVE TITLE TO BE IMPORTED','Launch-week first steps and account access.',['first steps','access'],'archive-review','home','Published File; final headline will be imported from the original post.'),
 e(28,6,'2026-11-11','ARCHIVE TITLE TO BE IMPORTED','Launch-week walkthrough: wallet and account flow.',['wallet','first steps'],'planned','home','Scheduled in the Week 06 sequence; final headline will be added after publication.'),
 e(29,6,'2026-11-12','EXPLORE BEFORE YOU BUY.','Discover projects, read details and use watchlists before making a purchase.',['discovery','watchlist'],'planned','home'),
 e(30,6,'2026-11-13','BUY WITHOUT THE EXTRA POPUPS.','Integrated wallet flow for buying and selling without a separate wallet confirmation on every trade.',['wallet','trading','UX'],'planned','home')
];

const SOURCES = {
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
const files = FILES.map(f=>{const id=String(f.n).padStart(3,'0');const original=originalEditions.find(o=>o.id===id);return {...f,id,title:original?original.title:(f.title==='ARCHIVE TITLE TO BE IMPORTED'?'Title awaiting archive review':f.title.toLowerCase().replace(/(^|[.!?] )\w/g,c=>c.toUpperCase())),body:original?original.body:f.topic,tag:WEEKS[f.week].title,cover:original?`file-${id}.png`:null,status:original?'published':f.status,original:!!original};});

files.forEach(f=>{f.title=f.title.replace(/\$esc/g,"$ESC");});
WEEKS[5].article="EscapeHub Launches First: How the Platform, Presale and $ESC Fit Together";
