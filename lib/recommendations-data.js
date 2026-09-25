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
    title: 'Google, OpenAI en Anthropic willen eigen AI-veiligheidswaakhond — zonder overheid',
    link: 'https://www.pymnts.com/news/artificial-intelligence/2026/openai-google-and-anthropic-join-forces-to-set-ai-safety-standards/',
    source: 'PYMNTS',
    summary: 'De drie grote AI-labs werken volgens berichten aan een "Standards Authority for Frontier AI": een orgaan waarin makers van frontier-modellen zichzelf reguleren, zonder overheidstoezicht. Het zou externe tests voor release ondersteunen, een meldplicht bij veiligheidsincidenten vastleggen en eisen stellen aan onafhankelijke auditors. Lancering mogelijk eind dit jaar of begin 2027.',
    why: 'Zelfregulering door de labs zelf — critici vrezen een slager die zijn eigen vlees keurt.',
    pubDate: '2026-09-24T16:00:00Z',
    added: '2026-09-25T15:11:00Z',
  },
  {
    title: 'Deense inlichtingendienst: Rusland zal hybride aanvallen op de NAVO opvoeren',
    link: 'https://www.usnews.com/news/world/articles/2026-09-24/denmark-expects-russia-to-escalate-hybrid-warfare-in-coming-months-intelligence-service-says',
    source: 'U.S. News (Reuters)',
    summary: 'In een nieuwe dreigingsanalyse waarschuwt de Deense militaire inlichtingendienst dat Rusland de komende maanden vaker en met grotere gevolgen toeslaat tegen het Westen. Er is "een klein maar groeiend risico" op een beperkte militaire aanval op een NAVO-land aan de Russische grens — van drone- of raketaanvallen tot false-flagoperaties of een beperkte troepeninzet.',
    why: 'Europa bereidt zich openlijk voor op het risico dat de oorlog naar NAVO-gebied overslaat.',
    pubDate: '2026-09-24T12:00:00Z',
    added: '2026-09-25T05:12:00Z',
  },
  {
    title: 'Google lanceert eerste AI-chips de ruimte in: proefsatelliet met vier TPU\'s op 1 oktober',
    link: 'https://www.datacenterdynamics.com/en/news/project-suncatcher-google-to-launch-tpus-into-orbit-with-planet-labs-envisions-1km-arrays-of-81-satellite-compute-clusters/',
    source: 'Data Center Dynamics',
    summary: 'Met Project Suncatcher stuurt Google op 1 oktober een proefsatelliet (MVP, gebouwd door Planet) met vier TPU\'s de baan in op een SpaceX Falcon 9. De test moet uitwijzen of AI-chips de lancering, straling en extreme temperaturen overleven. Het einddoel: zwermen van 81 zonne-energiesatellieten die samen als datacenter in de ruimte rekenen.',
    why: 'Een eerste stap naar AI-datacenters in de ruimte, gevoed door onafgebroken zonlicht.',
    pubDate: '2026-09-24T14:00:00Z',
    added: '2026-09-25T05:12:00Z',
  },
  {
    title: 'Iraanse president Pezeshkian kapittelt Trump bij de VN; eerste VS-Iran-gesprek sinds juni',
    link: 'https://www.cbc.ca/news/world/iran-un-general-assembly-united-states-9.7355113',
    source: 'CBC',
    summary: 'Een dag nadat Trump dreigde Iran te "vernietigen", hield de Iraanse president een strijdbare toespraak bij de Algemene Vergadering — met foto\'s van gedode kinderen — en zei dat Iran "tot de laatste adem" doorvecht: geen kernwapens, maar ook geen beperkingen op vreedzame kerntechnologie. Tegelijk meldde Trump dat zijn gezanten Witkoff en Kushner zo\'n drie uur met Iraanse functionarissen spraken.',
    why: 'Escalatie en het eerste diplomatieke contact tegelijk — dit bepaalt of de oorlog uitdooft of verhevigt.',
    pubDate: '2026-09-23T18:00:00Z',
    added: '2026-09-24T05:20:00Z',
  },
  {
    title: 'Anthropic brengt Claude Opus 5.5 uit: goedkoper en sneller dan Opus 5',
    link: 'https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/',
    source: 'TechCrunch',
    summary: 'Anthropic presenteerde Claude Opus 5.5, dat volgens het bedrijf op de meeste taken tippen aan het duurdere Fable 5.1 en Opus 5 overtreft in agentisch coderen. De prijs ligt zo\'n 20 procent lager (4 dollar per miljoen invoertokens, 20 dollar voor uitvoer) en de output komt ruim 30 procent sneller.',
    why: 'De prijzenslag tussen AI-labs verschuift de rekensom voor bedrijven die AI-agenten inzetten.',
    pubDate: '2026-09-22T17:00:00Z',
    added: '2026-09-24T05:20:00Z',
  },
  {
    title: 'Zelensky bij de VN: Oekraine klaar voor bestand op de Zwarte Zee, bal ligt bij Rusland',
    link: 'https://www.usnews.com/news/world/articles/2026-09-23/zelenskiy-says-ukraine-ready-for-maritime-truce-and-puts-onus-on-russia-to-respond',
    source: 'U.S. News (Reuters)',
    summary: 'Zelensky zei dat Oekraine bereid is tot een maritiem bestand, op basis van voorstellen van Egypte, India en Turkije om de scheepvaart weer veilig te maken, en legde de bal bij Moskou. Hij noemde Poetin "patient zero" die oorlog en instabiliteit verspreidt; het vrachtverkeer op de Zwarte Zee ligt door aanvallen vrijwel stil.',
    why: 'Een concrete opening richting de-escalatie op zee, terwijl de landoorlog het vijfde jaar ingaat.',
    pubDate: '2026-09-23T15:00:00Z',
    added: '2026-09-24T05:20:00Z',
  },
];
