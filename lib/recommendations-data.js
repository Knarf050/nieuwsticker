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
    title: 'Poetin stelt driegesprek met Trump en Xi over Oekraïne voor — zonder Zelensky',
    link: 'https://www.cnbc.com/2026/10/19/putin-trump-xi-ukraine-war-energy.html',
    source: 'CNBC',
    summary: 'Volgens berichtgeving heeft de Russische president Poetin een topontmoeting met Trump en de Chinese leider Xi voorgesteld om de oorlog in Oekraïne te beëindigen — zonder de Oekraïense president Zelensky. Trump zei bereid te zijn Poetin en Xi te ontmoeten en opperde dat "iemand anders" namens Oekraïne zou moeten onderhandelen. Intussen gaan de wederzijdse aanvallen onverminderd door.',
    why: 'Een grootmachten-onderhandeling waarin Oekraïne zelf dreigt te worden overgeslagen, met grote gevolgen voor Europa.',
    pubDate: '2026-10-19T16:00:00Z',
    added: '2026-10-20T05:13:00Z',
  },
  {
    title: 'Nvidia lanceert nieuwe open modellen voor AI-agents in bedrijven en op pc\'s',
    link: 'https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/',
    source: 'TechCrunch',
    summary: 'Nvidia heeft een reeks nieuwe open-weight modellen uitgebracht die AI-agents lokaal in bedrijven en op pc\'s moeten laten draaien. Het grootste model telt 120 miljard parameters; Nvidia claimt dat het agent-taken sneller afrondt dan concurrerende modellen van Anthropic en OpenAI. Daarmee positioneert de chipmaker zich nadrukkelijker ook als aanbieder van modellen.',
    why: 'Nvidia verschuift van alleen chips naar eigen open modellen en daagt zo de grote AI-labs op hun eigen terrein uit.',
    pubDate: '2026-10-19T14:00:00Z',
    added: '2026-10-20T05:13:00Z',
  },
  {
    title: 'Kenia bevestigt achtste ebolageval nu regionale uitbraak zich uitbreidt',
    link: 'https://www.aljazeera.com/news/2026/10/19/kenya-confirms-eighth-ebola-case-amid-widening-regional-outbreak',
    source: 'Al Jazeera',
    summary: 'Kenia heeft een achtste ebolabesmetting bevestigd, terwijl de uitbraak zich vanuit Congo (DRC) over de regio verspreidt. In de DRC zijn volgens de autoriteiten inmiddels zeker 9.400 gevallen geregistreerd, met meer dan 4.500 doden. De grensoverschrijdende verspreiding voedt de vrees voor een bredere epidemie.',
    why: 'Een snel groeiende ebola-uitbraak in Oost-Afrika die om internationale aandacht en hulp vraagt.',
    pubDate: '2026-10-19T03:00:00Z',
    added: '2026-10-19T05:13:00Z',
  },
  {
    title: 'Anthropic stopt 5 procent van zijn aandelen in een "public benefit fund"',
    link: 'https://techcrunch.com/2026/10/18/anthropic-says-its-committing-5-of-its-shares-to-a-public-benefit-fund/',
    source: 'TechCrunch',
    summary: 'AI-bedrijf Anthropic wil 5 procent van zijn aandelen onderbrengen in een nieuw "public benefit fund", dat onder meer de gevolgen van AI voor de arbeidsmarkt moet helpen opvangen. Het bestuur kan er later aandelen aan toevoegen naarmate de waardering stijgt. Het plan moet nog door de aandeelhouders worden goedgekeurd.',
    why: 'Een opvallende poging van een AI-lab om zich te wapenen tegen de maatschappelijke schade die zijn eigen technologie kan aanrichten.',
    pubDate: '2026-10-18T16:00:00Z',
    added: '2026-10-19T05:13:00Z',
  },
  {
    title: 'Twee olietankers in brand na mijnexplosies in de Straat van Hormuz',
    link: 'https://www.aljazeera.com/news/2026/10/18/iran-says-two-tankers-catch-fire-after-hitting-mines-in-strait-of-hormuz',
    source: 'Al Jazeera',
    summary: 'Volgens de Iraanse Revolutionaire Garde zijn twee olietankers in de Straat van Hormuz op zeemijnen gelopen en in brand gevlogen; beide schepen hadden hun transpondersystemen uitgeschakeld. De aanvallen in de zeestraat zijn de afgelopen twee weken sterk toegenomen sinds Iran de doorgang grotendeels in handen nam.',
    why: 'De verscherpte strijd om de Straat van Hormuz bedreigt een groot deel van de wereldwijde olietoevoer.',
    pubDate: '2026-10-18T02:00:00Z',
    added: '2026-10-18T05:13:00Z',
  },
  {
    title: 'Replit maakt OpenAI standaard boven Anthropic in zijn AI-codeerplatform',
    link: 'https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/',
    source: 'TechCrunch',
    summary: 'Replit, een populair AI-codeerplatform onder ontwikkelaars en start-ups, heeft OpenAI-modellen als standaard ingesteld in plaats van Anthropic\'s Claude, zei CEO Amjad Masad op het podium van TechCrunch Disrupt. Claude blijft wel beschikbaar voor klanten; als een van de redenen noemde Masad de kosten.',
    why: 'Een kostenkeuze van een invloedrijk platform laat zien hoe de concurrentie tussen AI-modellen zich ook op prijs afspeelt.',
    pubDate: '2026-10-17T18:00:00Z',
    added: '2026-10-18T05:13:00Z',
  },
];
