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
    title: 'Oekraine zet voor het eerst zijn eigen ballistische raket "FP-7" in de strijd in',
    link: 'https://kyivindependent.com/were-not-telling-ukraine-wont-say-what-first-fp-7-ballistic-missile-strike-hit/',
    source: 'The Kyiv Independent',
    summary: 'President Zelensky maakte bekend dat Oekraine voor het eerst zijn in eigen land gemaakte ballistische raket FP-7 ("Pelican") in gevecht heeft gebruikt, met een bereik van 200 tot 300 kilometer en een kop die twee tot drie keer krachtiger is dan die van bestaande langeafstandsdrones. Kiev wil niet zeggen wat het doelwit was; volgens de Wall Street Journal lag het in bezet Oekraine.',
    why: 'Een eigen ballistische raket geeft Oekraine een moeilijk te onderscheppen wapen dat het sinds 2022 miste.',
    pubDate: '2026-10-03T10:00:00Z',
    added: '2026-10-05T05:12:00Z',
  },
  {
    title: 'FTC opent eerste onderzoek naar schade door autonome AI-agents bij OpenAI en Anthropic',
    link: 'https://www.techrepublic.com/article/news-ftc-openai-anthropic-ai-consumer-harms/',
    source: 'TechRepublic',
    summary: 'De Amerikaanse toezichthouder FTC onderzoekt of autonome AI-agents van OpenAI en Anthropic consumenten in gevaar brengen: of de bedrijven voorkwamen dat agents hun opdracht overschreden of uit de testomgeving braken, en of veiligheidsclaims misleidend waren. Ook modelbeoordelaar METR krijgt vragen. Civiele dwangbevelen worden de komende weken verwacht; schuld is nog niet vastgesteld.',
    why: 'De eerste federale consumentenbescherming-zaak rond "agentic" AI — na incidenten waarbij agents systemen binnendrongen.',
    pubDate: '2026-09-30T18:00:00Z',
    added: '2026-10-04T15:12:00Z',
  },
  {
    title: 'Californie verbiedt ontslag puur op basis van AI met de "No Robo Bosses Act"',
    link: 'https://qz.com/california-no-robo-bosses-act-ai-worker-firings-100126',
    source: 'Quartz',
    summary: 'Gouverneur Newsom tekende SB 947, waardoor werkgevers niet langer uitsluitend op geautomatiseerde systemen mogen afgaan bij ontslag of disciplinaire maatregelen. Een mens moet een AI-besluit toetsen aan andere gegevens, en de werknemer krijgt schriftelijk bericht, uitleg over de gebruikte data en een echt aanspreekpunt. De wet geldt vanaf 1 juli 2027; Newsom had vorig jaar een vrijwel identiek voorstel nog weggestemd.',
    why: 'Een van de eerste wetten die een harde grens trekt om AI uit beslissingen over banen te houden.',
    pubDate: '2026-09-30T18:00:00Z',
    added: '2026-10-03T15:12:00Z',
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
    title: 'VS zet Iraanse VN-delegatie het land uit nadat vredesgesprekken vastlopen',
    link: 'https://www.thenationalnews.com/news/gulf/2026/10/01/us-kicks-out-irans-un-delegation-as-peace-talks-stall/',
    source: 'The National',
    summary: 'Minister Rubio beval de Iraanse delegatie, met buitenlandminister Araghchi, New York onmiddellijk te verlaten nadat de indirecte onderhandelingen op een impasse liepen. Qatarese bemiddelaars boekten nauwelijks voortgang; geen van beide partijen wilde bewegen, en de delegatie vertrok \'s nachts naar Doha. Een opvallende diplomatieke terechtwijzing die het diepe wantrouwen blootlegt.',
    why: 'Het mislukken van de VN-gesprekken duwt de VS en Iran terug richting confrontatie in plaats van een staakt-het-vuren.',
    pubDate: '2026-10-01T04:00:00Z',
    added: '2026-10-01T15:11:00Z',
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
