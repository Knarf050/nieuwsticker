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
    title: 'VS bereidt wapendeal van 2,8 miljard dollar met Israel voor: ruim 40.000 bommen',
    link: 'https://www.nbcnews.com/world/gaza/trump-administration-approves-sending-powerful-bombs-israel-28-billion-rcna598048',
    source: 'NBC News',
    summary: 'De regering-Trump wil Israel ruim 40.000 bommen leveren, waaronder tienduizenden 2.000-ponders die de regering-Biden twee jaar geleden nog inhield uit vrees voor burgerdoden in Gaza. Het Congres is informeel ingelicht; de deal wordt grotendeels met Amerikaanse militaire hulp betaald.',
    why: 'De grootste levering van zware bommen aan Israel in jaren — terwijl de oorlog in Gaza doorgaat.',
    pubDate: '2026-09-16T12:00:00Z',
    added: '2026-09-16T15:04:00Z',
  },
  {
    title: 'VS klaagt vijf mensen aan om vermeende Russische moordcomplotten wereldwijd',
    link: 'https://www.aljazeera.com/news/2026/9/16/us-charges-five-people-over-alleged-russian-assassination-plots',
    source: 'Al Jazeera',
    summary: 'Het Amerikaanse ministerie van Justitie ontsloot een aanklacht tegen vijf verdachten die voor Russische inlichtingendiensten dissidenten zouden hebben bespioneerd en moordplannen zouden hebben beraamd, onder meer tegen een Russische dissident bij Washington. Alle vijf zijn voortvluchtig.',
    why: 'Een zeldzaam gedetailleerd inkijkje in Ruslands vermeende netwerk van gerichte moorden buiten zijn grenzen.',
    pubDate: '2026-09-16T14:00:00Z',
    added: '2026-09-16T15:04:00Z',
  },
  {
    title: 'Eindhovense AI-chipstart-up EUCLYD haalt ruim 200 miljoen euro op, ex-ASML-topman Wennink voorzitter',
    link: 'https://bits-chips.com/article/euclyd-raises-over-e200m-to-build-ai-infrastructure-platform/',
    source: 'Bits&Chips',
    summary: 'De in 2024 opgerichte Eindhovense start-up EUCLYD haalde ruim 200 miljoen euro op in een ronde mede geleid door Samsung, voor zijn inferentiechip-systeem CRAFTWERK. Oud-ASML-topman Peter Wennink wordt voorzitter van de raad.',
    why: 'Een Europese poging om een wereldklasse AI-inferentiechip te bouwen en de afhankelijkheid van Nvidia te doorbreken.',
    pubDate: '2026-09-15T09:00:00Z',
    added: '2026-09-16T05:03:00Z',
  },
  {
    title: 'China dreigt Trump-Xi-top af te zeggen als VS wapenpakket voor Taiwan goedkeurt',
    link: 'https://www.taipeitimes.com/News/taiwan/archives/2026/09/13/2003864183',
    source: 'Taipei Times',
    summary: 'Peking waarschuwde Washington via diplomatieke kanalen de top van 24 september in het Witte Huis te schrappen als Trump een door het Congres goedgekeurd wapenpakket van 14 miljard dollar voor Taiwan tekent. China noemt Taiwan een "rode lijn".',
    why: 'Zet de belangrijkste geplande VS-China-ontmoeting van het jaar op het spel — met Taiwan als breekpunt.',
    pubDate: '2026-09-13T10:00:00Z',
    added: '2026-09-15T15:04:00Z',
  },
  {
    title: 'Altman: OpenAI gaat in 2026 niet naar de beurs vanwege AI-veiligheid',
    link: 'https://www.axios.com/2026/09/12/openai-public-ipo-delay-sam-altman',
    source: 'Axios',
    summary: 'Sam Altman zei dat een beursgang nu "onverstandig" zou zijn gezien de toegenomen eisen rond AI-veiligheid, en schuift een mogelijke IPO door naar op zijn vroegst 2027. Hij sloot zich aan bij Amodei\'s oproep om het ontwikkeltempo te temperen.',
    why: 'Laat zien hoe veiligheidszorgen nu zelfs de miljardenbeslissingen van de grootste AI-bedrijven sturen.',
    pubDate: '2026-09-12T14:00:00Z',
    added: '2026-09-15T15:04:00Z',
  },
  {
    title: 'Microsoft publiceert gedragscode voor eigen AI-modellen te midden van debat over "pas op de plaats"',
    link: 'https://www.geekwire.com/2026/microsoft-floats-rules-for-its-own-ai-models-as-industry-debates-a-slowdown/',
    source: 'GeekWire',
    summary: 'Microsoft opende een consultatie over een gedragscode voor zijn MAI-modellen — geen hulp bij wapens of gevaarlijke stoffen, en modellen die transparant blijven — terwijl Nadella zich aansloot bij Amodei\'s oproep om het tempo van AI-ontwikkeling te temperen.',
    why: 'Toont hoe de top van de AI-industrie zelf begint te pleiten voor een bewuster, trager ontwikkeltempo.',
    pubDate: '2026-09-14T09:00:00Z',
    added: '2026-09-14T15:04:00Z',
  },
];
