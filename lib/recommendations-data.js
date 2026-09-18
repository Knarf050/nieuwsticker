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
    title: 'Poolse premier Tusk waarschuwt: Rusland beraamt "toevallige" drone- en raketaanvallen op NAVO-grondgebied',
    link: 'https://www.washingtontimes.com/news/2026/sep/17/poland-warns-russia-planning-drone-rocket-strikes-nato-territory/',
    source: 'The Washington Times',
    summary: 'Volgens premier Donald Tusk bereidt Rusland hybride aanvallen met drones of raketten voor op Europese landen die Oekraine steunen, waaronder Polen, en zal het die als "per ongeluk" presenteren om de NAVO-solidariteit te ondermijnen.',
    why: 'Raakt de kern van Ruslands hybride strategie: escaleren tot net onder de drempel die artikel 5 in werking zet.',
    pubDate: '2026-09-17T12:00:00Z',
    added: '2026-09-18T05:04:00Z',
  },
  {
    title: 'Russische oppositie verdeeld over strategie voor eerste Doema-verkiezing sinds de oorlog',
    link: 'https://meduza.io/en/feature/2026/09/16/back-united-russia-s-strongest-challengers-or-spoil-your-ballot-russia-s-opposition-can-t-agree-on-a-strategy-for-the-upcoming-state-duma-election',
    source: 'Meduza',
    summary: 'Voor de Doema-verkiezing van 18 tot 20 september — de eerste sinds de grootschalige invasie van Oekraine — botst de Russische oppositie over de tactiek: stemmen op de sterkste tegenstanders van Verenigd Rusland of het stembiljet ongeldig maken, terwijl het Kremlin de repressie opvoert.',
    why: 'Laat zien hoe zelfs een gecontroleerde verkiezing spanningen blootlegt binnen zowel het Kremlin als de oppositie.',
    pubDate: '2026-09-16T10:00:00Z',
    added: '2026-09-17T15:05:00Z',
  },
  {
    title: 'Anthropic voegt Claude-chat en Cowork samen tot een AI-superapp met presentaties en documenten',
    link: 'https://techcrunch.com/2026/09/16/anthropic-merges-claude-chat-and-cowork-in-one-interface/',
    source: 'TechCrunch',
    summary: 'Claude bundelt chat, agentische taken en Artifacts in een venster dat verzoeken automatisch routeert, en krijgt functies om slides en documenten te maken en te exporteren naar PDF of PowerPoint. De uitrol begint bij de betaalde abonnementen.',
    why: 'Onderdeel van de strijd tussen AI-labs om de alomvattende assistent voor werk te worden.',
    pubDate: '2026-09-16T17:00:00Z',
    added: '2026-09-17T15:05:00Z',
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
    title: 'Eindhovense AI-chipstart-up EUCLYD haalt ruim 200 miljoen euro op, ex-ASML-topman Wennink voorzitter',
    link: 'https://bits-chips.com/article/euclyd-raises-over-e200m-to-build-ai-infrastructure-platform/',
    source: 'Bits&Chips',
    summary: 'De in 2024 opgerichte Eindhovense start-up EUCLYD haalde ruim 200 miljoen euro op in een ronde mede geleid door Samsung, voor zijn inferentiechip-systeem CRAFTWERK. Oud-ASML-topman Peter Wennink wordt voorzitter van de raad.',
    why: 'Een Europese poging om een wereldklasse AI-inferentiechip te bouwen en de afhankelijkheid van Nvidia te doorbreken.',
    pubDate: '2026-09-15T09:00:00Z',
    added: '2026-09-16T05:03:00Z',
  },
];
