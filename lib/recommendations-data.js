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
    title: 'Oekraine test met succes onderscheppingsdrone tegen Ruslands jet-Shaheds',
    link: 'https://kyivindependent.com/ukraine-tests-new-interceptor-against-russias-jet-powered-shahed-drones-zelensky-says/',
    source: 'Kyiv Independent',
    summary: 'Zelensky zei dat Oekraine met succes een nieuwe onderscheppingsdrone testte tegen Ruslands snellere jet-aangedreven Shaheds, die tot 500 km/u halen. De besturing moet nog worden verfijnd; massaproductie van goedkope interceptors komt dichterbij.',
    why: 'Een sleutelwedloop in de dronenoorlog: Oekraine zoekt een betaalbaar antwoord op steeds snellere Russische aanvalsdrones.',
    pubDate: '2026-09-15T18:00:00Z',
    added: '2026-09-17T05:04:00Z',
  },
  {
    title: 'Google opent Home MCP: AI-agenten als Claude en ChatGPT mogen smart home-apparaten bedienen',
    link: 'https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/',
    source: 'TechCrunch',
    summary: 'Via een nieuwe MCP-server kunnen AI-agenten zoals Claude en ChatGPT Nest-cameras, thermostaten en Matter-apparaten uitlezen en aansturen, camerabeelden samenvatten en dashboards bouwen. De vroege toegang is in de VS gekoppeld aan een betaald abonnement.',
    why: 'Een concrete stap richting agentische AI die fysieke apparaten in huis bestuurt, bovenop de MCP-standaard.',
    pubDate: '2026-09-16T16:00:00Z',
    added: '2026-09-17T05:04:00Z',
  },
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
    title: 'Altman: OpenAI gaat in 2026 niet naar de beurs vanwege AI-veiligheid',
    link: 'https://www.axios.com/2026/09/12/openai-public-ipo-delay-sam-altman',
    source: 'Axios',
    summary: 'Sam Altman zei dat een beursgang nu "onverstandig" zou zijn gezien de toegenomen eisen rond AI-veiligheid, en schuift een mogelijke IPO door naar op zijn vroegst 2027. Hij sloot zich aan bij Amodei\'s oproep om het ontwikkeltempo te temperen.',
    why: 'Laat zien hoe veiligheidszorgen nu zelfs de miljardenbeslissingen van de grootste AI-bedrijven sturen.',
    pubDate: '2026-09-12T14:00:00Z',
    added: '2026-09-15T15:04:00Z',
  },
];
