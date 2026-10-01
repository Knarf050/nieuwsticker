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
    title: 'VS zet Iraanse VN-delegatie het land uit nadat vredesgesprekken vastlopen',
    link: 'https://www.thenationalnews.com/news/gulf/2026/10/01/us-kicks-out-irans-un-delegation-as-peace-talks-stall/',
    source: 'The National',
    summary: 'Minister Rubio beval de Iraanse delegatie, met buitenlandminister Araghchi, New York onmiddellijk te verlaten nadat de indirecte onderhandelingen op een impasse liepen. Qatarese bemiddelaars boekten nauwelijks voortgang; geen van beide partijen wilde bewegen, en de delegatie vertrok \'s nachts naar Doha. Een opvallende diplomatieke terechtwijzing die het diepe wantrouwen blootlegt.',
    why: 'Het mislukken van de VN-gesprekken duwt de VS en Iran terug richting confrontatie in plaats van een staakt-het-vuren.',
    pubDate: '2026-10-01T04:00:00Z',
    added: '2026-10-01T15:11:00Z',
  },
  {
    title: 'OpenAI lanceert op DevDay "Dots": altijd-aan AI-agents met een eigen computer',
    link: 'https://thenextweb.com/news/openai-dots-always-on-ai-agents-cloud-computers-devday',
    source: 'The Next Web',
    summary: 'Op zijn DevDay presenteerde OpenAI "Dots", altijd-aan agents die zelfstandig taken uitvoeren en doorwerken als je je laptop dichtklapt. Elke dot draait op GPT-6 Astra, krijgt een eigen cloudcomputer en browser en koppelt aan ruim 4.000 apps; gevoelige acties blijven bij de mens. Ook kwam het goedkopere GPT-6.1 Sol. Dots zijn voorlopig voor Pro- en zakelijke gebruikers (nog niet in de EU/VK).',
    why: 'Een stap van chatbots naar zelfstandig handelende agents — met nieuwe vragen over controle en toestemming.',
    pubDate: '2026-09-29T18:00:00Z',
    added: '2026-10-01T15:11:00Z',
  },
  {
    title: 'Gelekt IPO-prospectus Anthropic: 518 miljard aan AI-uitgaven — en waarschuwing voor "existentieel risico"',
    link: 'https://www.cnbc.com/2026/09/29/anthropic-warns-ai-existential-risks-ipo-filing-reuters.html',
    source: 'CNBC',
    summary: 'In zijn vertrouwelijke beursgang-document meldt Anthropic voor minstens 518 miljard dollar aan vastgelegde infrastructuurverplichtingen bij zes partners (waaronder Google en Amazon), grotendeels niet-opzegbaar. Het bedrijf boekte in 2025 zo\'n 4,6 miljard omzet en 42 miljard verlies, en waarschuwt dat steeds capabelere AI "catastrofale of existentiele risico\'s voor de mensheid" kan opleveren, met modellen die zelfbehoudend gedrag vertoonden. Een waardering rond 2 biljoen dollar wordt verwacht.',
    why: 'Een AI-lab dat vlak voor de beurs zelf waarschuwt dat zijn technologie de mensheid kan bedreigen — en toch honderden miljarden vastlegt.',
    pubDate: '2026-09-29T20:00:00Z',
    added: '2026-09-30T15:12:00Z',
  },
  {
    title: 'AMD koopt World Labs van Fei-Fei Li voor 8,2 miljard dollar — inzet op "fysieke AI"',
    link: 'https://techcrunch.com/2026/09/28/amd-will-acquire-fei-fei-lis-world-labs-for-8-2-billion/',
    source: 'TechCrunch',
    summary: 'Chipmaker AMD neemt in een volledig-aandelendeal World Labs over, het bedrijf van AI-pionier Fei-Fei Li dat "wereldmodellen" bouwt die 3D-omgevingen uit een paar foto\'s genereren en simuleren. Li wordt hoofdwetenschapper bij AMD. De overname moet AMD helpen een ecosysteem tegenover Nvidia op te bouwen en sluit naar verwachting eind 2026.',
    why: 'Toont hoe de chipoorlog zich verbreedt naar "fysieke AI" voor robots en simulaties.',
    pubDate: '2026-09-28T14:00:00Z',
    added: '2026-09-29T15:26:00Z',
  },
  {
    title: 'Israel doodt commandant van Hamas\' gewapende tak in Noord-Gaza bij luchtaanval',
    link: 'https://www.aljazeera.com/news/2026/9/29/israeli-forces-kill-hamas-commander-izz-al-din-al-beik-in-gaza-attack',
    source: 'Al Jazeera',
    summary: 'Bij een aanval op een flatgebouw in de Gazaanse wijk Nasr kwam Izz al-Din al-Beik om, het hoofd van de Qassam-brigades in het noorden. Premier Netanyahu en minister Katz claimden de aanval; Hamas bevestigde zijn dood. Al-Beik had het commando in Noord-Gaza overgenomen van Ahmed al-Ghandour; volgens het Al-Shifa-ziekenhuis stierf later nog een gewonde.',
    why: 'De gerichte doding van een topcommandant wijst op een nieuwe fase van gevechten, ondanks eerdere staakt-het-vuren-pogingen.',
    pubDate: '2026-09-29T06:00:00Z',
    added: '2026-09-29T15:26:00Z',
  },
  {
    title: 'VS stelt driegesprek met Oekraine en Rusland voor in de Emiraten, zegt Zelensky',
    link: 'https://www.usnews.com/news/world/articles/2026-09-25/us-proposes-trilateral-meeting-with-ukraine-russia-in-uae-zelenskiy-says',
    source: 'U.S. News (Reuters)',
    summary: 'Volgens Zelensky heeft Washington voorgesteld om op technisch niveau een ontmoeting in drieformaat te houden, met de Verenigde Arabische Emiraten als mogelijke locatie. Hij bespreekt de details met Europa terwijl de VS met Rusland praat, en komt "binnen tien dagen" terug met een nieuw perspectief of resultaat. Het Kremlin zei dat zo\'n gesprek er snel kan komen.',
    why: 'Het eerste concrete spoor naar onderhandelingen sinds tijden — al blijft de uitkomst hoogst onzeker.',
    pubDate: '2026-09-25T14:00:00Z',
    added: '2026-09-26T05:12:00Z',
  },
];
