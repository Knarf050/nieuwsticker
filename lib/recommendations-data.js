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
    title: 'OpenAI brengt zijn modellen naar Googles cloud, voorbij Microsoft',
    link: 'https://www.cnbc.com/2026/10/21/openai-bring-its-ai-models-to-googles-cloud-expands-beyond-microsoft.html',
    source: 'CNBC',
    summary: 'OpenAI maakt zijn modellen de komende weken beschikbaar via Google Cloud, onder meer in de "model garden" en het codeerprogramma Antigravity. Daarmee draaien OpenAI\'s GPT-producten straks op alle drie de grote Amerikaanse clouds (Microsoft, Amazon en Google) — een opmerkelijke stap, want Google is tegelijk een directe concurrent met zijn eigen Gemini-modellen.',
    why: 'Laat zien hoe OpenAI zich losweekt van zijn vaste partner Microsoft en hoe verweven de AI-reuzen inmiddels zijn.',
    pubDate: '2026-10-21T12:00:00Z',
    added: '2026-10-21T15:12:00Z',
  },
  {
    title: 'Lavrov steunt Teheran — maar wat wint Rusland bij de VS-Iran-crisis?',
    link: 'https://www.aljazeera.com/news/2026/10/20/lavrov-backs-tehran-but-does-russia-also-gain-from-the-us-iran-crisis',
    source: 'Al Jazeera',
    summary: 'Na een reis langs de Golfstaten en Teheran schaarde de Russische minister Lavrov zich achter Iran en pleitte hij voor een regionale "collectieve veiligheid". Golfstaten drongen er bij Moskou op aan zijn invloed te gebruiken om de scheepvaart door de Straat van Hormuz te herstellen. Analisten zien Rusland profiteren van hogere olieprijzen en van de Amerikaanse sanctieverlichting op Russische energie.',
    why: 'Laat zien hoe Rusland de crisis rond Iran en Hormuz naar zijn hand probeert te zetten.',
    pubDate: '2026-10-20T11:00:00Z',
    added: '2026-10-21T05:13:00Z',
  },
  {
    title: 'VS gelast federale diensten China\'s DeepSeek-AI uit hun systemen te verwijderen',
    link: 'https://techcrunch.com/2026/10/20/us-orders-federal-agencies-to-remove-chinas-deepseek-ai-from-their-systems/',
    source: 'TechCrunch',
    summary: 'Amerikaanse civiele overheidsdiensten mogen geen DeepSeek-producten meer aanschaffen en moeten ze uit hun IT-systemen verwijderen, met een beroep op nationale veiligheid. Het verbod geldt ook voor diensten van derden die op DeepSeek-technologie draaien, al kunnen diensten een uitzondering aanvragen. Peking noemt de stap een politisering van technologie en handel.',
    why: 'Een nieuwe escalatie in de technologieoorlog tussen de VS en China, nu rond een populair Chinees AI-model.',
    pubDate: '2026-10-20T15:00:00Z',
    added: '2026-10-21T05:13:00Z',
  },
  {
    title: 'Zelensky ontmoet Amerikaanse gezanten in Noorwegen nu spanning met Trump oploopt',
    link: 'https://www.cnbc.com/2026/10/20/zelenskyy-witkoff-trump-ukraine-russia.html',
    source: 'CNBC',
    summary: 'De Oekraïense president Zelensky reist naar Oslo voor overleg met de Amerikaanse gezanten Steve Witkoff en Jared Kushner en met Europese leiders, onder wie de Noorse premier en de Finse president. De ontmoeting volgt op oplopende spanningen met Trump, die opperde dat "iemand anders" namens Oekraïne zou moeten onderhandelen en een topoverleg met Poetin en Xi niet uitsloot — zonder Zelensky.',
    why: 'Oekraïne probeert bij de onderhandelingstafel te blijven nu grootmachten over zijn hoofd heen dreigen te praten.',
    pubDate: '2026-10-20T09:00:00Z',
    added: '2026-10-20T15:12:00Z',
  },
  {
    title: 'Nvidia lanceert nieuwe open modellen voor AI-agents in bedrijven en op pc\'s',
    link: 'https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/',
    source: 'TechCrunch',
    summary: 'Nvidia heeft een reeks nieuwe open-weight modellen uitgebracht die AI-agents lokaal in bedrijven en op pc\'s moeten laten draaien. Het grootste model telt 120 miljard parameters; Nvidia claimt dat het agent-taken sneller afrondt dan concurrerende modellen van Anthropic en OpenAI. Daarmee positioneert de chipmaker zich nadrukkelijker ook als aanbieder van modellen.',
    why: 'Nvidia verschuift van alleen chips naar eigen open modellen en daagt zo de grote AI-labs op hun eigen terrein uit.',
    pubDate: '2026-10-19T14:00:00Z',
    added: '2026-10-20T05:13:00Z',
  },
  {
    title: 'Kenia bevestigt achtste ebolageval nu regionale uitbraak zich uitbreidt',
    link: 'https://www.aljazeera.com/news/2026/10/19/kenya-confirms-eighth-ebola-case-amid-widening-regional-outbreak',
    source: 'Al Jazeera',
    summary: 'Kenia heeft een achtste ebolabesmetting bevestigd, terwijl de uitbraak zich vanuit Congo (DRC) over de regio verspreidt. In de DRC zijn volgens de autoriteiten inmiddels zeker 9.400 gevallen geregistreerd, met meer dan 4.500 doden. De grensoverschrijdende verspreiding voedt de vrees voor een bredere epidemie.',
    why: 'Een snel groeiende ebola-uitbraak in Oost-Afrika die om internationale aandacht en hulp vraagt.',
    pubDate: '2026-10-19T03:00:00Z',
    added: '2026-10-19T05:13:00Z',
  },
];
