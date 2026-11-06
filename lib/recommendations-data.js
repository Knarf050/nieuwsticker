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
    title: 'Democraten heroveren de Senaat bij Amerikaanse tussentijdse verkiezingen',
    link: 'https://www.aljazeera.com/news/2026/11/4/democratic-party-flips-us-senate-in-2026-midterm-elections',
    source: 'Al Jazeera',
    summary: 'De Democratische Partij heeft bij de tussentijdse verkiezingen de controle over de Amerikaanse Senaat heroverd, na volgens vroege resultaten ook het Huis van Afgevaardigden te hebben gewonnen. Onder de omslagen zat Kansas, dat voor het eerst in bijna een eeuw een Democratische senator koos. De uitslag is een duidelijke tegenvaller voor president Trump halverwege zijn termijn.',
    why: 'Een Democratisch Congres kan Trumps agenda — van buitenlandbeleid tot binnenlandse plannen — flink afremmen.',
    pubDate: '2026-11-04T05:00:00Z',
    added: '2026-11-04T05:13:00Z',
  },
  {
    title: 'AI-pijplijn van OpenAI vindt en dicht 948 Linux-lekken in 30 uur',
    link: 'https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html',
    source: 'The Hacker News',
    summary: 'OpenAI beschreef een pijplijn rond een nog niet uitgebracht, op cyberbeveiliging gericht model dat in één run van 30 uur 948 kwetsbaarheden voor rechtenverhoging in Linux valideerde en patchte, voor zo\'n 1,2 miljoen dollar aan API-kosten. Het toont hoe AI beveiligingsonderzoek op grote schaal kan versnellen — met zowel defensieve als offensieve implicaties.',
    why: 'Een concrete demonstratie dat AI zelfstandig kwetsbaarheden op industriële schaal kan opsporen én repareren.',
    pubDate: '2026-11-05T12:00:00Z',
    added: '2026-11-06T05:13:00Z',
  },
  {
    title: 'Anthropic werkt aan systeem om te bewijzen welk AI-model een tekst maakte',
    link: 'https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity',
    source: 'TechCrunch',
    summary: 'Anthropic ontwikkelt een opensource-systeem, FlashProve genaamd, dat cryptografisch moet kunnen aantonen welk AI-model een bepaalde output heeft gegenereerd. Het onderzoek loopt nog en er zijn vooralsnog geen plannen om het ergens uit te rollen. Zulke "herkomst"-technologie moet helpen de echtheid aan te tonen in een wereld vol AI-content.',
    why: 'Bewijzen welk model iets maakte, wordt cruciaal nu AI-tekst, -beeld en -stem nauwelijks nog van echt te onderscheiden zijn.',
    pubDate: '2026-11-03T15:00:00Z',
    added: '2026-11-05T05:13:00Z',
  },
  {
    title: 'Zelensky hoopt op meer Amerikaanse steun nu Democraten het Congres controleren',
    link: 'https://www.aljazeera.com/news/2026/11/5/zelenskyy-hopes-democratic-congress-will-bring-more-us-help-for-ukraine',
    source: 'Al Jazeera',
    summary: 'De Oekraïense president Zelensky zei te hopen dat de Democratische winst in het Amerikaanse Congres tot meer steun voor Kyiv leidt. Tegelijk kondigde de Amerikaanse gezant Steve Witkoff aan dat Washington op 10 en 11 november Oekraïense en Russische delegaties samenbrengt in Abu Dhabi, als opstap naar mogelijk direct overleg met Poetin.',
    why: 'De Amerikaanse machtswissel en concrete gesprekken in Abu Dhabi kunnen de oorlog in een nieuwe fase brengen.',
    pubDate: '2026-11-05T09:00:00Z',
    added: '2026-11-05T05:13:00Z',
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
    title: 'VS treft naar verluidt Iraans eiland Qeshm terwijl Vance op een akkoord aanstuurt',
    link: 'https://www.cnbc.com/2026/11/03/iran-us-vance-trump-strikes.html',
    source: 'CNBC',
    summary: 'Volgens berichtgeving hebben de VS het Iraanse eiland Qeshm bij de Straat van Hormuz aangevallen, terwijl vicepresident Vance zegt optimistisch te zijn over een "onderhandelde oplossing". Vance noemde de Iraniërs "onvoorspelbaar" en zei dat Trump zowel militaire als niet-militaire opties behoudt. Iran stelt dat gesprekken snel kunnen hervatten als aan zijn eisen wordt voldaan.',
    why: 'De oorlog met Iran wordt weer kinetisch, precies terwijl de diplomatie nog loopt — een gevaarlijk dubbelspoor.',
    pubDate: '2026-11-03T06:00:00Z',
    added: '2026-11-03T05:13:00Z',
  },
];
