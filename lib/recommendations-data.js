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
    title: 'Iran valt Amerikaanse bases in Koeweit en Bahrein aan na VS-aanval op Qeshm',
    link: 'https://www.aljazeera.com/news/2026/11/18/kuwait-bahrain-face-new-iran-attacks-after-us-strike-on-qeshm-island',
    source: 'Al Jazeera',
    summary: 'Nadat Amerikaanse jachtvliegtuigen een Iraanse raketbasis op het eiland Qeshm bombardeerden, viel Iran met drones een Amerikaanse luchtmachtbasis in Koeweit aan en bestookte het opnieuw Bahrein — de vierde aanval in zes dagen. In de Straat van Hormuz werden tankers geraakt, waaronder een schip van het Emiraatse ADNOC. Een derde Amerikaanse vliegdekschipgroep is naar de regio gevaren; analisten waarschuwen dat de broze status quo kan omslaan in een volledige oorlog.',
    why: 'Het tit-for-tat tussen de VS en Iran trekt steeds meer Golfstaten mee — de lont ligt bij de olieroute.',
    pubDate: '2026-11-18T12:00:00Z',
    added: '2026-11-20T05:13:00Z',
  },
  {
    title: 'Anthropic sluit eerste beursdag 17 procent hoger, maar zakt terug te midden van AI-uitverkoop',
    link: 'https://www.cnbc.com/2026/11/20/anthropic-defies-odds-holding-ipo-despite-massively-disruptive-market.html',
    source: 'CNBC',
    summary: 'Het aandeel Anthropic opende op 111,50 dollar — ruim een derde boven de introductieprijs van 83 dollar — maar zakte in de loop van de dag terug naar een slotkoers van 97,17 dollar, nog altijd 17 procent in de plus. Dat waardeert het bedrijf op zo\'n 1,8 biljoen dollar. De grootste beursgang ooit bracht met de overtoewijzing in totaal 93,5 miljard dollar op, maar vond plaats te midden van een brede uitverkoop van AI-aandelen; de Nasdaq verloor die dag ruim 2 procent.',
    why: 'Zelfs het grootste AI-beursdebuut ooit kon de nervositeit rond de AI-hausse niet wegnemen.',
    pubDate: '2026-11-20T12:00:00Z',
    added: '2026-11-20T15:15:00Z',
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
    title: 'Trump, Xi en Poetin verklaren dat een kernoorlog nooit gevoerd mag worden, maar boeken weinig concreets',
    link: 'https://www.cbsnews.com/news/trump-xi-putin-china-apec-summit/',
    source: 'CBS News',
    summary: 'Bij hun eerste trilaterale ontmoeting, in Shenzhen en marge van de APEC-top, verklaarden de Amerikaanse, Chinese en Russische leiders dat "een kernoorlog niet gewonnen kan worden en nooit gevoerd mag worden". Verder leverde het 81 minuten durende overleg weinig concreets op; Rusland zei dat is afgesproken de olie- en gasproductie op te voeren, en Xi noemde het gesprek "constructief". Analisten zien de top vooral als prestigewinst voor Poetin en Xi.',
    why: 'De drie militaire grootmachten aan één tafel: symbolisch gewichtig, maar zonder doorbraak.',
    pubDate: '2026-11-19T14:00:00Z',
    added: '2026-11-19T15:15:00Z',
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
