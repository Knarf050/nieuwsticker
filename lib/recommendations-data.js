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
    title: 'Chipsancties tegen China bijten: Nvidia-verkopers zoeken nieuwe kopers, Chinese labs wijken uit',
    link: 'https://www.cnbc.com/2026/11/25/nvidia-china-ai-chip-remote-access.html',
    source: 'CNBC',
    summary: 'Sinds de VS medio november de export en verhuur van geavanceerde AI-chips richting China verder aan banden legde, is er een ongewoon grote hoeveelheid Nvidia-chips op de tweedehandsmarkt verschenen en zoeken verkopers nieuwe afnemers. Chinese AI-labs zoals Moonshot proberen via datacenters in Europa en Zuidoost-Azië alsnog aan rekenkracht te komen. Analisten verwachten vooral vertraging en hogere kosten, geen einde aan de Chinese AI-opmars.',
    why: 'De tech-koude-oorlog verschuift van wetten naar de praktijk — en bepaalt wie straks de krachtigste AI traint.',
    pubDate: '2026-11-25T12:00:00Z',
    added: '2026-11-27T05:13:00Z',
  },
  {
    title: 'Xi zet anticorruptiecampagne door: Shanghai-partijchef Chen Jining onder onderzoek',
    link: 'https://www.cnn.com/2026/11/24/china/china-chen-jining-investigated-purge-intl-hnk',
    source: 'CNN',
    summary: 'De Chinese tuchtwaakhond heeft de partijchef van Shanghai, Politburo-lid Chen Jining, onder onderzoek geplaatst wegens "ernstige schendingen van discipline en wet" — de gebruikelijke formulering voor corruptie. Chen (62) is het vierde Politburo-lid dat sinds het partijcongres van 2022 valt in de aanhoudende campagne van president Xi. Op de eerste handelsdag na het nieuws zakte de Shanghai-index 2 procent en halfgeleideraandelen bijna 8 procent.',
    why: 'Xi ruimt opnieuw een topfiguur op — een blik op de machtsstrijd binnen de Chinese top.',
    pubDate: '2026-11-24T12:00:00Z',
    added: '2026-11-28T05:13:00Z',
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
