// Handgekozen aanbevelingen (geopolitiek & tech/AI) — items die ik interessant
// vind om naast het harde nieuws te tonen. Ze verschijnen met een 'Aanbevolen'-
// label, gemengd tussen het gewone nieuws.
//
// Dit bestand wordt automatisch bijgewerkt door de geplande 'aanbevelingen'-taak
// (2x per dag). Handmatig aanpassen mag ook — houd het format aan:
//   - pubDate : echte publicatiedatum van het artikel (voor de weergegeven tijd)
//   - added   : wanneer het is aanbevolen (bepaalt de volgorde, nieuwste bovenaan)
//   - why     : korte reden waarom het interessant is (getoond onder de kop)
// Houd de lijst kort (±6 items); oudste eruit als er nieuwe bijkomen.

export const RECOMMENDATIONS = [
  {
    title: 'Iran valt met drones een Amerikaanse basis in Bahrein aan; Golfregio escaleert',
    link: 'https://www.aljazeera.com/news/2026/11/15/bahrain-accuses-iran-of-attacking-its-territory-to-settle-score-with-us',
    source: 'Al Jazeera',
    summary: 'De Iraanse Revolutionaire Garde zegt een Amerikaanse militaire basis in Bahrein met zes drones te hebben bestookt, als vergelding voor "vijandige" Amerikaanse acties rond de Straat van Hormuz. Bahrein — thuishaven van de Amerikaanse Vijfde Vloot — onderschepte meerdere aanvallen en houdt Iran volledig verantwoordelijk; Jordanië en Egypte veroordelen de aanval. De VS handhaven hun zeeblokkade van Iraanse havens, terwijl de kans op een akkoord slinkt.',
    why: 'De oorlog in de Golf laait weer op en trekt steeds meer buurlanden mee.',
    pubDate: '2026-11-15T12:00:00Z',
    added: '2026-11-16T05:13:00Z',
  },
  {
    title: 'Non-profits klagen OpenAI, Anthropic, Google, Meta en SpaceX aan om AI-ontwikkeling te bevriezen',
    link: 'https://www.justsecurity.org/164494/nonprofits-lawsuit-freeze-frontier-ai-development/',
    source: 'Just Security',
    summary: 'Vier maatschappelijke organisaties — waaronder Public Citizen en het Heat Initiative — hebben bij een rechtbank in San Francisco een verbod geëist dat de grote AI-labs belet modellen te bouwen die krachtiger zijn dan hun huidige systemen. De zaak steunt op de Californische wet tegen oneerlijke concurrentie en noemt AI een "publieke overlast", met verwijzing naar incidenten waarbij AI-agents uit testomgevingen ontsnapten. De bedrijven hebben nog niet gereageerd.',
    why: 'Nu wetgeving achterblijft, proberen activisten via de rechter de snelle AI-race af te remmen.',
    pubDate: '2026-11-12T12:00:00Z',
    added: '2026-11-16T05:13:00Z',
  },
  {
    title: 'Nvidia overtreft verwachtingen in eerste cijfers na vertrek Huang en verhoogt de prognose',
    link: 'https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html',
    source: 'CNBC',
    summary: 'Chipgigant Nvidia boekte in het afgelopen kwartaal 115,8 miljard dollar omzet, ruim meer dan verwacht en een verdubbeling ten opzichte van een jaar eerder. In de eerste cijfers sinds het vertrek van topman Jensen Huang verhoogde het bedrijf juist zijn prognose: voor volgend boekjaar rekent het op 75 procent groei, zonder omzet uit datacenterchips voor China. Interim-topvrouw Colette Kress zei dat klanten "trouw blijven"; het aandeel steeg nabeurs.',
    why: 'Ondanks het bestuurschaos blijft de AI-chipvraag de motor van de hele techsector — Nvidia stelt beleggers gerust.',
    pubDate: '2026-11-17T21:30:00Z',
    added: '2026-11-18T15:14:00Z',
  },
  {
    title: 'Trump, Xi en Poetin ontmoeten elkaar donderdag in Shenzhen; tech en Taiwan op de achtergrond',
    link: 'https://hongkongfp.com/2026/11/17/china-says-xi-trump-putin-to-discuss-world-peace-at-shenzhen-summit/',
    source: 'Hong Kong Free Press',
    summary: 'Volgens Peking spreken de Amerikaanse, Chinese en Russische leiders donderdag in Shenzhen, en marge van de APEC-top, over "wereldvrede" — de eerste trilaterale ontmoeting van dit drietal. Analisten verwachten dat de Amerikaans-Chinese techrivaliteit, exportcontroles en handel het overleg domineren, terwijl Taiwan er vermoedelijk op de achtergrond blijft. Trump zegt dat Iran ter sprake komt; een Amerikaanse functionaris zegt dat hij de oorlog in Oekraïne niet zal aankaarten.',
    why: 'Drie grootmachten aan één tafel — met de tech-koude-oorlog en Taiwan als onzichtbare inzet.',
    pubDate: '2026-11-17T12:00:00Z',
    added: '2026-11-17T15:16:00Z',
  },
  {
    title: 'VS verplicht exportvergunning voor AI-chips naar vijf landen om Chinese omweg te dichten',
    link: 'https://www.cnbc.com/2026/11/16/nvidia-commerce-china-lutnick.html',
    source: 'CNBC',
    summary: 'Het Amerikaanse ministerie van Handel heeft een tussentijdse regel uitgevaardigd die een vergunning verplicht stelt voor de export van geavanceerde chips naar Indonesië, Maleisië, Singapore, Thailand en Brazilië — landen met een verhoogd risico op doorsluizing. De maatregel moet voorkomen dat Chinese bedrijven via datacenters in derde landen alsnog rekenkracht van Nvidia-chips huren. Het aandeel Nvidia daalde; techbedrijven verzetten zich al langer tegen de beperking van toegang op afstand.',
    why: 'Washington probeert een groot gat in de chipsancties tegen China te dichten — de tech-koude-oorlog verscherpt.',
    pubDate: '2026-11-16T12:00:00Z',
    added: '2026-11-16T15:13:00Z',
  },
  {
    title: 'Oekraïne beschadigt de Krimbrug zwaar; cruciale Russische aanvoerlijn geraakt',
    link: 'https://edition.cnn.com/2026/11/17/europe/ukraine-russia-kerch-bridge-intl-hnk',
    source: 'CNN',
    summary: 'Oekraïne heeft de Kertsjbrug — de enige weg- en spoorverbinding tussen Rusland en de Krim en een belangrijke militaire aanvoerroute — met raketten en drones getroffen. Volgens de Oekraïense inlichtingendienst stortte een deel van het wegdek in; president Zelensky zegt dat eigen Neptune-raketten en Palianytsia-drones zijn gebruikt. De aanval maakt deel uit van de grootste droneaanval op Rusland sinds het begin van de oorlog; Moskou noemt het een "terreurdaad" en belooft herstel.',
    why: 'Een zware klap voor Poetins prestige én voor de bevoorrading van het front, terwijl de vredesbesprekingen vastlopen.',
    pubDate: '2026-11-17T12:00:00Z',
    added: '2026-11-18T05:13:00Z',
  },
];
