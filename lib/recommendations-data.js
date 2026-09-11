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
    title: 'Netanyahu bezoekt bezette Syrische Hermon; Arabische landen veroordelen de inval',
    link: 'https://www.middleeastmonitor.com/20260910-arab-states-condemn-netanyahus-incursion-into-mount-hermon-in-syria',
    source: 'Middle East Monitor',
    summary: 'Netanyahu betrad met defensieminister Katz de door Israel gecontroleerde Syrische Hermonberg en claimde "absolute controle" tot de Yarmouk-rivier. Syrie, Qatar en andere Arabische landen noemen het een flagrante schending van de Syrische soevereiniteit.',
    why: 'Toont hoe Israel zijn greep op Zuid-Syrie uitbreidt — een nieuw front in de regionale spanningen.',
    pubDate: '2026-09-10T09:00:00Z',
    added: '2026-09-11T05:04:00Z',
  },
  {
    title: 'Houthi\'s veroveren havenstad Mocha en naderen zeestraat Bab al-Mandeb',
    link: 'https://www.euronews.com/2026/09/10/houthis-seize-red-sea-port-city-in-push-to-seize-bab-el-mandeb',
    source: 'Euronews',
    summary: 'Jemenitische Houthi-strijders namen de strategische Rode Zee-havenstad Mocha in en rukken op richting de zeestraat Bab al-Mandeb, na weken van raketaanvallen. Regeringstroepen trekken zich terug richting Dhubab aan de straat.',
    why: 'Samen met Hormuz een van de belangrijkste maritieme knooppunten — controle erover bedreigt een groot deel van de wereldhandel.',
    pubDate: '2026-09-10T10:00:00Z',
    added: '2026-09-10T15:05:00Z',
  },
  {
    title: 'Pentagon-contracten onthullen hoe grote AI-labs meebouwen aan militaire besluitvorming',
    link: 'https://theintercept.com/2026/09/08/military-ai-weapons-contracts-openai-anthropic-google/',
    source: 'The Intercept',
    summary: 'Ruim 400 pagina\'s vrijgegeven documenten tonen dat OpenAI, Anthropic, Google en xAI elk een contract tot 200 miljoen dollar sloten om AI voor "oorlogvoering" en besluitvorming te prototypen; het Pentagon vroeg zelfs om een model met "minimale weigeringspercentages".',
    why: 'Een zeldzame blik op hoe diep de AI-industrie verweven is met het Amerikaanse defensieapparaat.',
    pubDate: '2026-09-08T11:00:00Z',
    added: '2026-09-10T15:05:00Z',
  },
  {
    title: 'VS-diensten beschuldigen zes Chinese AI-bedrijven van grootschalige "distillatie" van Amerikaanse modellen',
    link: 'https://thehackernews.com/2026/09/us-agencies-accuse-china-ai-firms-of.html',
    source: 'The Hacker News',
    summary: 'NSA, FBI en CISA stellen in een gezamenlijke waarschuwing dat DeepSeek, Alibaba, Moonshot, MiniMax, StepFun en Z.AI sinds eind 2024 miljarden tokens onttrokken aan modellen als Claude, GPT, Gemini en Grok om goedkoper eigen frontier-modellen te trainen.',
    why: 'Legt een kern van de VS-China AI-race bloot: niet alleen chips, maar ook het kopieren van modelkennis.',
    pubDate: '2026-09-09T08:00:00Z',
    added: '2026-09-10T05:04:00Z',
  },
  {
    title: 'OpenAI claimt dat AI een van de Millennium-wiskundeproblemen heeft opgelost',
    link: 'https://www.cnn.com/2026/09/09/business/openai-millennium-problems-navier-stokes-hnk',
    source: 'CNN',
    summary: 'Volgens OpenAI produceerde een nog niet uitgebracht model in 88 uur, met duizenden samenwerkende agenten, een in Lean geverifieerd resultaat rond de Navier-Stokes-vergelijkingen. Wiskundigen plaatsen kanttekeningen en er ontstond meteen een ruzie over wie de eer verdient.',
    why: 'Als het standhoudt een historische AI-mijlpaal in de wiskunde — de controverse toont hoe betwist zulke claims zijn.',
    pubDate: '2026-09-09T12:00:00Z',
    added: '2026-09-09T15:05:00Z',
  },
  {
    title: 'Russische drones treffen grensovergang Oekraine-Moldavie, twee doden',
    link: 'https://www.aljazeera.com/news/2026/9/9/russian-drone-attack-kills-two-at-ukraine-moldova-border-crossing',
    source: 'Al Jazeera',
    summary: 'Bij een nachtelijke aanval op de grensovergang Starokozache in de regio Odesa kwamen twee burgers om en raakten drie gewond; het verkeer lag stil na een grote brand. Moskou zegt dat de post militaire vracht doorvoerde.',
    why: 'De oorlog raakt steeds vaker de grens met EU-buurland Moldavie — een zorgwekkende verbreding.',
    pubDate: '2026-09-09T09:00:00Z',
    added: '2026-09-09T15:05:00Z',
  },
];
