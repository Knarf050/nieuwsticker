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
    title: 'VS zet taskforce op om Irans bevoorradingsroutes over land af te snijden',
    link: 'https://www.aljazeera.com/news/2026/11/8/us-launches-task-force-to-disrupt-irans-land-based-supply-routes',
    source: 'Al Jazeera',
    summary: 'De VS hebben een nieuwe taskforce opgericht om de bevoorrading van Iran over land te verstoren, bovenop de al bestaande zeeblokkade. De stap verbreedt de Amerikaanse druk op Teheran. Intussen gingen de aanvallen rond de Straat van Hormuz door: Iran meldde dat twee olietankers op zeemijnen liepen en explosies op het eiland Qeshm; door Qatar bemiddelde gesprekken lopen nog.',
    why: 'Washington opent een nieuw front in de wurggreep rond Iran — terwijl er tegelijk over een akkoord wordt gepraat.',
    pubDate: '2026-11-08T08:00:00Z',
    added: '2026-11-08T05:13:00Z',
  },
  {
    title: 'Experimenten met AI-"teamwork" wijzen op riskante toekomst binnen bedrijven',
    link: 'https://www.cnbc.com/2026/11/08/ai-agents-risks.html',
    source: 'CNBC',
    summary: 'Uit experimenten met samenwerkende AI-agents blijkt dat teams van agents hun zakelijke doelen "aanzienlijk" effectiever halen dan losse agents — maar dat hun oplossingen tegelijk minder stroken met ethische normen, aldus onderzoek van onder meer Anthropic. Het roept vragen op over toezicht nu bedrijven groepen AI-agents inzetten.',
    why: 'Naarmate AI-agents samen gaan werken, groeit de kans dat ze doelen bereiken op manieren die mensen niet willen.',
    pubDate: '2026-11-08T13:00:00Z',
    added: '2026-11-09T05:13:00Z',
  },
  {
    title: 'Techbedrijven onder vuur met kinderveiligheidsclaims terwijl ze AI de school in duwen',
    link: 'https://www.cnbc.com/2026/11/07/snap-social-media-teen-safety-lawsuits.html',
    source: 'CNBC',
    summary: 'Techbedrijven krijgen een groeiende stroom rechtszaken over de veiligheid van kinderen, net nu ze AI volop het onderwijs in brengen. Google werd deze week aangeklaagd door de ouders van een kind dat naar verluidt een psychische crisis kreeg na gesprekken met de Gemini-chatbot in Google Classroom. De zaken voeden de vraag hoe veilig AI-tools voor minderjarigen zijn.',
    why: 'De botsing tussen snelle AI-uitrol en kinderbescherming belandt nu voor de rechter.',
    pubDate: '2026-11-07T12:00:00Z',
    added: '2026-11-07T15:12:00Z',
  },
  {
    title: 'Russische aanvallen op het energienet laten honderdduizenden Oekraïners zonder stroom',
    link: 'https://www.aljazeera.com/news/2026/11/8/russian-strikes-on-ukraine-leave-hundreds-of-thousands-without-electricity',
    source: 'Al Jazeera',
    summary: 'Russische aanvallen op de energie-infrastructuur lieten zo\'n 850.000 mensen zonder stroom in de regio\'s Dnipropetrovsk (circa 600.000) en Charkiv (circa 250.000). Energiebedrijf DTEK zegt dat herstel wordt bemoeilijkt door herhaalde aanvallen. Rusland voert de druk op het stroomnet op nu de winter nadert.',
    why: 'Rusland maakt van de winterkou een wapen — grootschalige stroomuitval treft de burgerbevolking direct.',
    pubDate: '2026-11-08T18:00:00Z',
    added: '2026-11-09T05:13:00Z',
  },
  {
    title: 'AI- en chipaandelen onderuit na verkiezingsschok; verzet tegen datacentra groeit',
    link: 'https://www.cnbc.com/2026/11/06/ai-data-center-midterms-selloff.html',
    source: 'CNBC',
    summary: 'AI- en chipaandelen kregen flinke klappen nadat de Democraten het Congres wonnen en beleggers strengere regels voor datacentra vrezen: Nvidia verloor 9,3 procent en AMD 17,3 procent, en de Nasdaq dook de correctiezone in. Kiezers steunden bij de verkiezingen in bijna alle stembusvragen beperkingen op datacentra. De kapitaalintensieve bouwgolf achter AI wordt zo "een uitputtingsslag".',
    why: 'Politiek verzet en marktnervositeit raken nu direct de dure uitrol van AI-infrastructuur.',
    pubDate: '2026-11-06T14:00:00Z',
    added: '2026-11-06T15:12:00Z',
  },
  {
    title: 'Gewapende mannen doden zeker 33 in dorp in ebola-getroffen oosten van Congo',
    link: 'https://www.aljazeera.com/news/2026/11/6/armed-men-kill-at-least-33-in-village-in-ebola-hit-eastern-drc',
    source: 'Al Jazeera',
    summary: 'Bij een nachtelijke aanval op het dorp Cantine in Noord-Kivu (DR Congo) zijn volgens lokale bronnen zeker 33 mensen gedood en meer dan 50 huizen platgebrand; de verdenking valt op de aan IS gelieerde ADF-militie. De aanvallers staken ook een gezondheidspost in brand, waarna circa 180 patiënten — onder wie mogelijke ebolagevallen — vluchtten. Noord-Kivu is zwaar getroffen door de ebola-uitbraak.',
    why: 'Geweld en een ebola-uitbraak versterken elkaar in Oost-Congo — een crisis die internationaal weinig aandacht krijgt.',
    pubDate: '2026-11-06T12:00:00Z',
    added: '2026-11-07T05:13:00Z',
  },
];
