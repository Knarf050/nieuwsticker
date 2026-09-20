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
    title: 'Rusland houdt eerste Doema-verkiezing sinds het begin van de oorlog in Oekraine',
    link: 'https://foreignpolicy.com/2026/09/18/russia-elections-state-duma-results-putin-democracy-ukraine/',
    source: 'Foreign Policy',
    summary: 'Van 18 tot 20 september kiest Rusland een nieuwe Doema — de eerste parlementsverkiezing sinds de invasie van 2022. De uitslag ligt vrijwel vast: het Kremlin-gezinde Verenigd Rusland behoudt naar verwachting zijn dominantie, terwijl de oppositie zwaar onder druk staat.',
    why: 'Een graadmeter voor hoe Poetin zijn machtsbasis in oorlogstijd beheert en de laatste oppositie inperkt.',
    pubDate: '2026-09-18T14:00:00Z',
    added: '2026-09-20T05:07:00Z',
  },
  {
    title: 'Houthi-opmars langs de Rode Zee jaagt Jemens burgeroorlog en de olieprijzen op',
    link: 'https://www.aljazeera.com/features/2026/9/18/in-yemen-war-at-home-and-in-the-region-drives-up-prices',
    source: 'Al Jazeera',
    summary: 'De grootste Houthi-veldwinst in jaren langs de Rode Zeekust wakkert de twaalf jaar oude burgeroorlog weer aan en bedreigt de Saoedische olie-export; Brentolie schoot kort boven de 108 dollar. Zo\'n 125.000 Jemenieten sloegen op de vlucht.',
    why: 'Verbindt een humanitaire ramp met een directe schok op de wereldwijde energieprijzen.',
    pubDate: '2026-09-18T12:00:00Z',
    added: '2026-09-19T15:07:00Z',
  },
  {
    title: 'OpenAI lanceert "Astra for Law" met eigen juridische zoekindex van 230 miljoen bronnen',
    link: 'https://thenextweb.com/news/openai-astra-for-law-gpt-6-legal-search-index',
    source: 'The Next Web',
    summary: 'OpenAI bracht een op GPT-6 Astra gebouwde juridische assistent uit met een eigen zoekindex van ruim 230 miljoen Amerikaanse uitspraken, wetten en regels; in een benchmark scoorde die 54 procent tegen 38,7 procent voor Astra met gewone webzoekopdrachten.',
    why: 'Toont hoe AI-labs zich richten op lucratieve, gespecialiseerde beroepsmarkten zoals de advocatuur.',
    pubDate: '2026-09-18T09:00:00Z',
    added: '2026-09-19T15:07:00Z',
  },
  {
    title: 'Zeker 16 doden bij zelfmoordaanslag met autobom op politiecomplex in Noordwest-Pakistan',
    link: 'https://www.thenationalnews.com/news/mena/2026/09/18/at-least-16-killed-in-pakistan-car-bomb-near-mosque/',
    source: 'The National',
    summary: 'Een met explosieven geladen auto ramde de muur van een politiecomplex in Kohat (Khyber Pakhtunkhwa) terwijl agenten en familie in een moskee baden; gewapende mannen openden daarna het vuur. Zeker 16 mensen kwamen om, onder wie vijf agenten; alle zeven aanvallers werden gedood.',
    why: 'Onderstreept de heropleving van het militante geweld in de Pakistaanse grensprovincie met Afghanistan.',
    pubDate: '2026-09-18T09:00:00Z',
    added: '2026-09-18T15:04:00Z',
  },
  {
    title: 'Canada en Duitsland investeren tot 300 miljoen in Bengio\'s AI-veiligheidsinstituut LawZero',
    link: 'https://www.cbc.ca/news/politics/lawzero-artificial-intelligence-safety-investment-9.7347286',
    source: 'CBC',
    summary: 'Canada (150 miljoen dollar) en Duitsland (100 miljoen euro) steken samen tot 300 miljoen Canadese dollar in LawZero, de non-profit van Turing-laureaat Yoshua Bengio die een "veilig-vanaf-het-ontwerp" model (Scientist AI) bouwt, met een nieuwe vestiging in Berlijn.',
    why: 'Een zeldzaam voorbeeld van publieke financiering voor onafhankelijk AI-veiligheidsonderzoek, los van de grote labs.',
    pubDate: '2026-09-18T13:00:00Z',
    added: '2026-09-18T15:04:00Z',
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
];
