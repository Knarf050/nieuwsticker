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
    title: 'Braziliaanse verkiezing naar tweede ronde: Bolsonaro nipt voor Lula',
    link: 'https://www.cnn.com/2026/10/04/americas/brazil-president-elections-2026-latam-intl',
    source: 'CNN',
    summary: 'In de eerste ronde haalde senator Flavio Bolsonaro (zoon van de gevangengezette oud-president Jair Bolsonaro) 47 procent, tegen 44,9 procent voor Lula — geen van beiden boven de 50 procent die nodig is om direct te winnen. De beslissende tweede ronde volgt op 25 oktober. De campagne draaide om misdaad, corruptie en Trump.',
    why: 'Een nek-aan-nekrace die bepaalt of Brazilie naar rechts kantelt — met gevolgen voor de hele regio.',
    pubDate: '2026-10-04T23:00:00Z',
    added: '2026-10-05T15:12:00Z',
  },
  {
    title: 'Tencent least 100.000 AI-chips bij Oracle in Zuidoost-Azie en omzeilt zo exportregels',
    link: 'https://www.techrepublic.com/article/news-tencent-oracle-ai-chip-deal-apac-southeast-asia/',
    source: 'TechRepublic',
    summary: 'In een vijfjarige deal van naar schatting 7 miljard dollar krijgt het Chinese Tencent via Oracle-datacenters in Zuidoost-Azie toegang tot zo\'n 100.000 geavanceerde AI-chips. Chinese bedrijven mogen zulke Nvidia-chips niet rechtstreeks kopen, maar Amerikaanse regels verbieden het huren van rekencapaciteit in het buitenland (nog) niet.',
    why: 'Laat zien hoe China de Amerikaanse chip-exportbeperkingen omzeilt door rekenkracht in het buitenland te huren.',
    pubDate: '2026-10-01T12:00:00Z',
    added: '2026-10-05T15:12:00Z',
  },
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
];
