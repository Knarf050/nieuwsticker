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
    title: 'Houthi\'s vuren voor het eerst sinds de escalatie ballistische raket op Riyad af',
    link: 'https://www.aljazeera.com/news/2026/9/19/saudi-led-coalition-says-defences-intercept-houthi-missile-fired-at-riyadh',
    source: 'Al Jazeera',
    summary: 'De Saoedische coalitie onderschepte een Houthi-raket richting Riyad — het eerste doelwit in de hoofdstad sinds de recente escalatie. Bij een brandstofdepot nabij de luchthaven van Riyad brak brand uit; ook Taif, Yanbu en andere plaatsen werden beschoten.',
    why: 'De Jemenitische oorlog verbreedt zich tot directe aanvallen op het Saoedische hart — en op olie-infrastructuur.',
    pubDate: '2026-09-19T09:00:00Z',
    added: '2026-09-20T15:07:00Z',
  },
  {
    title: 'Zero-click-lek "Plugin4Shell" trof AI-codeeragenten Claude Code, Codex, Copilot en Gemini CLI',
    link: 'https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/',
    source: 'Help Net Security',
    summary: 'Onderzoekers van Air Security onthulden een zero-click-kwetsbaarheid waarmee een kwaadaardige plugin-update ongemerkt code kan uitvoeren door de SHA-vergrendeling te omzeilen. Claude Code en Codex zijn gepatcht; Copilot en het afgeschreven Gemini CLI bleven bij openbaarmaking kwetsbaar.',
    why: 'Een van de eerste toeleveringsketen-lekken in AI-codeertools, met toegang tot broncode, sleutels en systemen.',
    pubDate: '2026-09-18T10:00:00Z',
    added: '2026-09-20T15:07:00Z',
  },
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
];
