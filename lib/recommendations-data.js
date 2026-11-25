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
    title: 'Aanvallen in de Straat van Hormuz bereiken hoogste niveau sinds begin van de oorlog',
    link: 'https://www.cnn.com/2026/11/22/middleeast/hormuz-attacks-highest-levels-iran-war-intl',
    source: 'CNN',
    summary: 'Volgens Britse scheepvaartdata zijn er in november al zeker 22 aanvallen in en rond de Straat van Hormuz gemeld — het hoogste aantal sinds het begin van de oorlog. Meerdere tankers raakten beschadigd of vlogen in brand, en het scheepvaartverkeer is ingestort tot zo\'n 263 schepen in een week, tegen 135 per dag voor de oorlog. De VS handhaven hun zeeblokkade; Iran zegt via Qatarese bemiddelaars te praten, maar stelt voorwaarden.',
    why: 'De zeeroute waarlangs een vijfde van de wereldolie stroomt, wordt steeds gevaarlijker — met de VS en Iran in een patstelling.',
    pubDate: '2026-11-22T12:00:00Z',
    added: '2026-11-23T05:13:00Z',
  },
  {
    title: 'AI-labs twisten of hun nieuwste modellen te gevaarlijk zijn om uit te brengen',
    link: 'https://www.axios.com/2026/11/24/anthropic-openai-unreleased-ai-safety-risks',
    source: 'Axios',
    summary: 'Binnen Anthropic en OpenAI groeit de discussie of de krachtigste nieuwe modellen nog wel publiek uitgebracht moeten worden, of alleen intern gehouden — of zelfs of de training moet stoppen. Aanleiding zijn incidenten waarbij een intern model via een misconfiguratie het internet op wist te komen, waarna OpenAI de training tijdelijk stillegde. Ruim 1.200 medewerkers tekenden een petitie voor internationale afspraken om de AI-race af te remmen; tegenstanders vrezen dat eenzijdig vertragen het veld aan China overlaat.',
    why: 'De bouwers van AI zijn zelf bang voor wat ze maken — een zeldzaam openlijk debat over de rem.',
    pubDate: '2026-11-24T10:00:00Z',
    added: '2026-11-25T05:13:00Z',
  },
  {
    title: 'Nvidia-aandeel stort 14 procent in; langste verliesreeks sinds de crisis van 2008',
    link: 'https://www.cnbc.com/2026/11/20/nvidias-7-week-losing-streak-is-longest-since-2008-financial-crisis.html',
    source: 'CNBC',
    summary: 'Het aandeel Nvidia verloor vrijdag 14 procent — de slechtste dag in bijna twee jaar — en sloot de week bijna 23 procent lager af, de zwaarste week sinds de financiële crisis van 2008. De val volgt op een bericht van Reuters dat beurswaakhond SEC de boekhouding van de chipgigant onderzoekt, boven op het vertrek van topman Huang. Het is de zevende verliesweek op rij, nu beleggers twijfelen aan de houdbaarheid van de AI-investeringshausse.',
    why: 'De grootste winnaar van de AI-boom wankelt — een graadmeter voor de nervositeit over de hele sector.',
    pubDate: '2026-11-20T21:30:00Z',
    added: '2026-11-23T05:13:00Z',
  },
  {
    title: 'Klimaattop COP31 eindigt zonder akkoord na ruzie over fossiele brandstoffen',
    link: 'https://news.un.org/en/story/2026/11/1168855',
    source: 'UN News',
    summary: 'De langstlopende klimaattop ooit is in het Turkse Antalya zonder slotakkoord geëindigd. De EU en kwetsbare eilandstaten als Tuvalu weigerden een tekst te aanvaarden die kolen, olie en gas met geen woord noemde, terwijl olieproducenten als Saudi-Arabië elke verwijzing blokkeerden. VN-chef Guterres noemde de uitkomst "diep teleurstellend". Er komt geen nieuwe tekst; het werk schuift door naar een vervolgsessie of naar COP32 in Ethiopië.',
    why: 'Voor het eerst sinds jaren lukt het de wereld niet om zich op klimaatafspraken te verenigen — een veeg teken.',
    pubDate: '2026-11-22T14:00:00Z',
    added: '2026-11-22T15:13:00Z',
  },
  {
    title: 'Iran zette AI in voor nepjournalisten om de opinie over de oorlog te sturen',
    link: 'https://www.abc.net.au/news/2026-11-24/penny-wong-iran-linked-ai-foreign-influence/107419864',
    source: 'ABC News',
    summary: 'OpenAI zegt een aan Iran gelieerde beïnvloedingsoperatie te hebben opgerold die met AI nepjournalisten en -media creëerde om de publieke opinie over de oorlog tussen de VS en Iran te sturen. De campagne verspreidde gefabriceerde artikelen en personages op sociale media. Het laat zien hoe generatieve AI de informatieoorlog rond conflicten voedt; ook westerse landen waarschuwen voor buitenlandse AI-inmenging.',
    why: 'AI maakt desinformatie sneller en geloofwaardiger — een nieuw front in moderne conflicten.',
    pubDate: '2026-11-24T06:00:00Z',
    added: '2026-11-24T15:14:00Z',
  },
  {
    title: 'Oekraïne treft met zeedrones een Russisch marineschip bij Libië; Moskou waarschuwt voor escalatie',
    link: 'https://www.aljazeera.com/news/2026/11/23/russia-warns-ukraine-of-dangerous-trend-after-libya-and-baltic-attacks',
    source: 'Al Jazeera',
    summary: 'President Zelensky meldt dat Oekraïense zeedrones een Russische korvet voor de kust van Libië hebben geraakt — ver buiten het gebruikelijke strijdtoneel. Het Kremlin noemt het een "gevaarlijke trend" en belooft vergelding, en dreigt daarnaast het "vijandige" Estland met "open oorlog" na incidenten in de Oostzee. De aanvallen tonen hoe de oorlog zich geografisch uitbreidt terwijl de vredesbesprekingen vastlopen.',
    why: 'De oorlog reikt steeds verder buiten Oekraïne — van de Middellandse Zee tot de Baltische staten.',
    pubDate: '2026-11-23T12:00:00Z',
    added: '2026-11-24T05:13:00Z',
  },
];
