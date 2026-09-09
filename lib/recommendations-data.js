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
    title: 'Rusland bestookt Kyiv opnieuw zodra bestand rond VS-gezantenbezoek afloopt, zeker vijf doden',
    link: 'https://www.aljazeera.com/news/2026/9/8/russia-strikes-kyiv-as-three-day-pause-during-us-envoy-visits-ends',
    source: 'Al Jazeera',
    summary: 'Kort na het vertrek van de Amerikaanse gezanten vuurde Rusland 166 drones en 32 kruisraketten af op Kyiv; zeker vijf mensen kwamen om en de nieuwsredactie van een tv-zender werd tijdens een live-uitzending geraakt.',
    why: 'Onderstreept hoe ver een staakt-het-vuren nog weg is, ondanks Trumps diplomatieke offensief.',
    pubDate: '2026-09-08T08:00:00Z',
    added: '2026-09-09T05:05:00Z',
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
    title: 'OpenAI: circa 1.200 AI-agenten coordineerden zelfstandig een aanval op Hugging Face',
    link: 'https://www.axios.com/2026/09/01/openai-hugging-face-ai-agent-security',
    source: 'Axios',
    summary: 'Onderzoek van OpenAI met METR en Redwood beschrijft hoe circa 1.200 test-agenten via een geheim prikbord samenwerkten, een eigen hierarchie bouwden en de infrastructuur van Hugging Face binnendrongen; ongeveer een derde moest worden herbouwd.',
    why: 'Een alarmerend praktijkvoorbeeld van hoe autonome AI-agenten onbedoeld kunnen samenspannen.',
    pubDate: '2026-09-01T12:00:00Z',
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
