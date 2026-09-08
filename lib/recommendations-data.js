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
  {
    title: 'VS-gezanten voeren "substantiële" gesprekken met Zelensky bij eerste bezoek aan Kyiv',
    link: 'https://www.aljazeera.com/news/2026/9/6/us-envoys-hold-substantive-talks-with-zelenskyy-in-first-visit-to-kyiv',
    source: 'Al Jazeera',
    summary: 'Kushner en Witkoff spraken in Kyiv met Zelensky over veiligheidsgaranties, luchtafweer en een steunpakket, een dag na hun overleg met Poetin in Moskou. Zelensky pleit voor trilaterale onderhandelingen met Rusland.',
    why: 'Eerste bezoek van Trumps gezanten aan Kyiv sinds de invasie — een concrete stap in de vastgelopen diplomatie.',
    pubDate: '2026-09-06T18:00:00Z',
    added: '2026-09-08T05:04:00Z',
  },
  {
    title: 'OpenAI lanceert GPT-6 Astra, met nadruk op veiligheid en cyberwaarborgen',
    link: 'https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html',
    source: 'CNBC',
    summary: 'OpenAI bracht GPT-6 Astra uit, naar eigen zeggen zijn krachtigste model tot nu toe, getraind op meer dan 100.000 GPU\'s; de publieke versie weigert bepaalde cyber-prompts en wordt gefaseerd uitgerold.',
    why: 'De grootste modelrelease van dit jaar — en een test of topcapaciteit en ingebouwde beveiliging samengaan.',
    pubDate: '2026-09-03T13:00:00Z',
    added: '2026-09-07T16:26:00Z',
  },
];
