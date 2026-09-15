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
    title: 'Kim Jong-un noemt Ruslands oorlog "heilig" en belooft Poetin onwrikbare steun',
    link: 'https://www.kyivpost.com/post/84516',
    source: 'Kyiv Post',
    summary: 'In een brief aan Poetin sprak de Noord-Koreaanse leider van een "heilige oorlog" en beloofde hij zijn onveranderlijke steun en uitbreiding van de samenwerking; Kyiv waarschuwt dat mogelijk tot 50.000 extra Noord-Koreaanse militairen naar Rusland gaan.',
    why: 'Onderstreept hoe de as Moskou-Pyongyang dieper wordt — met directe gevolgen voor het slagveld in Oekraine.',
    pubDate: '2026-09-15T08:00:00Z',
    added: '2026-09-15T05:04:00Z',
  },
  {
    title: 'Trump dringt bij Oekraine aan om aanvallen op Russische raffinaderijen te staken nu dieselprijs piekt',
    link: 'https://www.cnbc.com/2026/09/14/trump-ukraine-russia-diesel-prices-oil.html',
    source: 'CNBC',
    summary: 'Trump riep Zelensky op te stoppen met het uitschakelen van Russische dieselproductie, omdat de aanvallen "de wereld schaden" nu de Amerikaanse dieselprijs voor het eerst boven de 6 dollar per gallon uitkwam. Moskou verwelkomde de oproep; Oekraine trof al ruim 24 raffinaderijen.',
    why: 'Legt de spanning bloot tussen Oekraines economische oorlogvoering en de gevolgen voor de wereldwijde energieprijzen.',
    pubDate: '2026-09-14T12:00:00Z',
    added: '2026-09-14T15:04:00Z',
  },
  {
    title: 'Microsoft publiceert gedragscode voor eigen AI-modellen te midden van debat over "pas op de plaats"',
    link: 'https://www.geekwire.com/2026/microsoft-floats-rules-for-its-own-ai-models-as-industry-debates-a-slowdown/',
    source: 'GeekWire',
    summary: 'Microsoft opende een consultatie over een gedragscode voor zijn MAI-modellen — geen hulp bij wapens of gevaarlijke stoffen, en modellen die transparant blijven — terwijl Nadella zich aansloot bij Amodei\'s oproep om het tempo van AI-ontwikkeling te temperen.',
    why: 'Toont hoe de top van de AI-industrie zelf begint te pleiten voor een bewuster, trager ontwikkeltempo.',
    pubDate: '2026-09-14T09:00:00Z',
    added: '2026-09-14T15:04:00Z',
  },
  {
    title: 'Iran-gezinde Houthi\'s veroveren strategisch eiland Mayun in Bab al-Mandeb',
    link: 'https://www.aljazeera.com/news/2026/9/12/iran-backed-houthis-seize-strategic-mayun-island-can-they-hold-it',
    source: 'Al Jazeera',
    summary: 'Na de inname van Mocha rukten Houthi-strijders op naar Dhubab en het eiland Mayun (Perim) op het smalste punt van de zeestraat Bab al-Mandeb. Jemenitische regeringstroepen en bondgenoten proberen de opmars te keren.',
    why: 'Controle over Mayun zou de Houthi grip geven op een van de drukste scheepvaartroutes ter wereld.',
    pubDate: '2026-09-12T12:00:00Z',
    added: '2026-09-14T05:04:00Z',
  },
  {
    title: 'AI-chipstart-up Positron haalt 875 miljoen dollar op met geheugenrijke inferentiechip',
    link: 'https://qz.com/positron-ai-funding-series-c-inference-chips-091026',
    source: 'Quartz',
    summary: 'Positron haalde 875 miljoen dollar op bij een waardering van 5 miljard dollar voor zijn Asimov-chip, die inzet op veel goedkoop LPDDR5X-geheugen in plaats van schaarse HBM — een poging om de Nvidia-flessenhals in AI-inferentie te omzeilen.',
    why: 'Toont hoe uitdagers de dominantie van Nvidia in AI-hardware proberen te breken via een andere geheugenaanpak.',
    pubDate: '2026-09-10T13:00:00Z',
    added: '2026-09-12T15:03:00Z',
  },
  {
    title: 'Oracle-orderportefeuille voor AI-cloud schiet naar 664 miljard dollar',
    link: 'https://247wallst.com/investing/2026/09/11/oracle-surges-7-as-ai-cloud-backlog-hits-664b-coreweave-and-nebius-climb-4/',
    source: '24/7 Wall St.',
    summary: 'Oracle boekte in een kwartaal ruim 30 miljard dollar aan nieuwe AI-cloudcontracten, waardoor de nog uit te voeren orderportefeuille (RPO) op 664 miljard dollar kwam — een teken van de explosieve vraag naar AI-datacentercapaciteit.',
    why: 'Illustreert hoe groot en kapitaalintensief de AI-infrastructuurhausse is geworden.',
    pubDate: '2026-09-11T13:00:00Z',
    added: '2026-09-12T05:03:00Z',
  },
];
