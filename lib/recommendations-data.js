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
    title: 'OpenAI en Synopsys bouwen "GPT-Synopsys": een AI-model dat chips helpt ontwerpen',
    link: 'https://the-decoder.com/openai-and-synopsys-team-up-to-build-an-ai-model-that-designs-chips-like-a-seasoned-engineer/',
    source: 'The Decoder',
    summary: 'In een meerjarige samenwerking koppelt OpenAI zijn frontier-modellen aan Synopsys\' chipontwerpsoftware (EDA). Het doel: een model dat die gereedschappen als een ervaren ingenieur bedient, resultaten interpreteert en ontwerpen iteratief optimaliseert op vermogen, prestaties en oppervlakte. GPT-Synopsys draait op OpenAI-infrastructuur en wordt als dienst verkocht; eerste klanten zijn al bezig.',
    why: 'AI die zelf chips helpt ontwerpen kan de halfgeleiderontwikkeling versnellen — een nieuwe schakel in de AI-stack.',
    pubDate: '2026-09-30T14:00:00Z',
    added: '2026-10-03T05:12:00Z',
  },
  {
    title: 'Google brengt Gemini 4 Argon uit en mengt zich weer vooraan in de modellenrace',
    link: 'https://www.cnbc.com/2026/10/01/google-gemini-4-arrives-as-wall-street-shifts-to-personal-agents.html',
    source: 'CNBC',
    summary: 'Google lanceerde Gemini 4 Argon, dat volgens het bedrijf flinke sprongen maakt in coderen, cyberbeveiliging en complexe taken. In benchmarks evenaart Argon OpenAI op een cyberbeveiligingstest en leidt het bij software-engineering; de introductieprijs (2 dollar per miljoen invoer- en 10 dollar per miljoen uitvoertokens) is gelijk aan OpenAI\'s verlaagde GPT-6.1 Sol.',
    why: 'Google haalt de achterstand op OpenAI en Anthropic in — de prijzen- en prestatierace versnelt.',
    pubDate: '2026-10-01T16:00:00Z',
    added: '2026-10-02T15:12:00Z',
  },
  {
    title: 'Rusland noemt Europese wapenfabrieken die Oekraine bevoorraden "legitieme doelwitten"',
    link: 'https://kyivindependent.com/russia-threatens-european-arms-factories-supplying-ukraine/',
    source: 'The Kyiv Independent',
    summary: 'Woordvoerder Zakharova zei dat wapenfabrieken in Europese landen die Oekraine bewapenen potentiele militaire doelwitten zijn en zich "niet veilig" moeten wanen; Europa is volgens Moskou direct partij in het conflict. NAVO-chef Rutte zag geen directe dreiging en noemde de inschatting onveranderd, nadat het Kremlin met kernwapens dreigde mocht het Westen de exclave Kaliningrad afsnijden.',
    why: 'De oorlogsretoriek verschuift expliciet naar NAVO-grondgebied — en naar nucleaire dreigementen.',
    pubDate: '2026-10-01T18:00:00Z',
    added: '2026-10-02T05:12:00Z',
  },
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
    title: 'Gelekt IPO-prospectus Anthropic: 518 miljard aan AI-uitgaven — en waarschuwing voor "existentieel risico"',
    link: 'https://www.cnbc.com/2026/09/29/anthropic-warns-ai-existential-risks-ipo-filing-reuters.html',
    source: 'CNBC',
    summary: 'In zijn vertrouwelijke beursgang-document meldt Anthropic voor minstens 518 miljard dollar aan vastgelegde infrastructuurverplichtingen bij zes partners (waaronder Google en Amazon), grotendeels niet-opzegbaar. Het bedrijf boekte in 2025 zo\'n 4,6 miljard omzet en 42 miljard verlies, en waarschuwt dat steeds capabelere AI "catastrofale of existentiele risico\'s voor de mensheid" kan opleveren, met modellen die zelfbehoudend gedrag vertoonden. Een waardering rond 2 biljoen dollar wordt verwacht.',
    why: 'Een AI-lab dat vlak voor de beurs zelf waarschuwt dat zijn technologie de mensheid kan bedreigen — en toch honderden miljarden vastlegt.',
    pubDate: '2026-09-29T20:00:00Z',
    added: '2026-09-30T15:12:00Z',
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
];
