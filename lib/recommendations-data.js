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
  {
    title: 'China wil AI-rekenkracht verviervoudigen tegen 2030 met plan van 532 miljard dollar',
    link: 'https://www.scmp.com/tech/policy/article/3366733/china-targets-fourfold-boost-ai-computing-capacity-2030-major-tech-push',
    source: 'South China Morning Post',
    summary: 'Het Chinese ministerie MIIT mikt op 9.800 exaflops aan intelligente rekenkracht in 2030 en 3,8 biljoen yuan aan infrastructuurinvesteringen, met clusters van 10.000+ versnellerkaarten en nadruk op eigen chips om Amerikaanse exportbeperkingen te omzeilen.',
    why: 'Toont hoe Peking de chipoorlog wil winnen met schaal en binnenlandse hardware.',
    pubDate: '2026-09-07T10:00:00Z',
    added: '2026-09-09T05:05:00Z',
  },
  {
    title: 'Nvidia koopt AI-platform Hugging Face voor bijna 13 miljard dollar',
    link: 'https://techcrunch.com/2026/09/03/nvidia-confirms-it-will-buy-hugging-face-for-12-9-billion/',
    source: 'TechCrunch',
    summary: 'Nvidia bevestigde de overname van Hugging Face voor 12,9 miljard dollar, het platform waar meer dan 18 miljoen ontwikkelaars open modellen delen. Volgens Nvidia blijft Hugging Face open source steunen en is Nvidia-hardware niet verplicht.',
    why: 'De op een na grootste overname van Nvidia — en een greep naar het hart van de open-source AI-wereld.',
    pubDate: '2026-09-03T14:00:00Z',
    added: '2026-09-08T15:08:00Z',
  },
  {
    title: 'Israelische luchtaanvallen op Zuid-Libanees dorp doden zeker 12 mensen',
    link: 'https://www.aljazeera.com/news/2026/9/7/israeli-air-attack-kills-at-least-10-people-in-southern-lebanon',
    source: 'Al Jazeera',
    summary: 'Bij Israelische aanvallen op Kfar Rumman bij Nabatieh kwamen zeker twaalf mensen om, onder wie twee kinderen en een paramedicus. Israel zegt te reageren op Hezbollah-droneaanvallen; het bestand van twee maanden oud staat zwaar onder druk.',
    why: 'Laat zien hoe de wankele wapenstilstand tussen Israel en Hezbollah opnieuw richting escalatie schuift.',
    pubDate: '2026-09-07T16:00:00Z',
    added: '2026-09-08T15:08:00Z',
  },
  {
    title: 'Iran kondigt beperkte zone rond Straat van Hormuz aan na aanvallen op schepen',
    link: 'https://www.washingtontimes.com/news/2026/sep/7/security-official-says-tehran-set-restricted-zone-near-stait-hormuz/',
    source: 'The Washington Times',
    summary: 'Volgens topveiligheidsfunctionaris Mohsen Rezaei stelt Teheran een beperkte zone in vanaf de Amerikaanse blokkadelijn; schepen die er binnenvaren belanden op een Iraanse sanctielijst. De maatregel volgt op wederzijdse aanvallen op tankers en oorlogsschepen.',
    why: 'Raakt aan een vijfde van de wereldwijde olievaart — een gevaarlijke escalatie in een cruciale energiestraat.',
    pubDate: '2026-09-07T14:00:00Z',
    added: '2026-09-08T05:04:00Z',
  },
];
