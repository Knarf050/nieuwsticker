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
    title: 'Poetin en Zelensky steunen Amerikaans voorstel voor driegesprek over Oekraïne',
    link: 'https://www.aljazeera.com/news/2026/10/21/witkoff-in-russia-for-putin-meeting-after-positive-talks-with-zelenskyy',
    source: 'Al Jazeera',
    summary: 'Na "positief" overleg met Zelensky in Oslo reisde de Amerikaanse gezant Witkoff door naar Rusland voor een ontmoeting met Poetin. Beide leiders steunen nu een Amerikaans voorstel voor driezijdige gesprekken, mogelijk in Abu Dhabi, al liggen de voorwaarden van Kyiv en Moskou nog ver uiteen. Intussen troffen Oekraïense drones belangrijke Russische olie-installaties.',
    why: 'Voor het eerst scharen Moskou én Kyiv zich achter hetzelfde onderhandelingsspoor — een mogelijke doorbraak, met grote mitsen.',
    pubDate: '2026-10-21T16:00:00Z',
    added: '2026-10-22T05:13:00Z',
  },
  {
    title: 'Start-up brengt "Flint" uit: een laptop-codeermodel dat grotendeels door AI is gebouwd',
    link: 'https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/',
    source: 'TechCrunch',
    summary: 'Het bedrijf Recursive heeft Flint uitgebracht, een gratis codeermodel dat lokaal op een laptop draait en volgens de makers grotendeels met behulp van AI is gebouwd. Het model staat onder een open Apache 2.0-licentie op Hugging Face. Het voedt de discussie over AI die zelf AI helpt ontwikkelen.',
    why: 'Een concreet voorbeeld van AI die meebouwt aan de volgende generatie AI — klein, open en lokaal.',
    pubDate: '2026-10-21T13:00:00Z',
    added: '2026-10-22T05:13:00Z',
  },
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
    title: 'Kenia bevestigt achtste ebolageval nu regionale uitbraak zich uitbreidt',
    link: 'https://www.aljazeera.com/news/2026/10/19/kenya-confirms-eighth-ebola-case-amid-widening-regional-outbreak',
    source: 'Al Jazeera',
    summary: 'Kenia heeft een achtste ebolabesmetting bevestigd, terwijl de uitbraak zich vanuit Congo (DRC) over de regio verspreidt. In de DRC zijn volgens de autoriteiten inmiddels zeker 9.400 gevallen geregistreerd, met meer dan 4.500 doden. De grensoverschrijdende verspreiding voedt de vrees voor een bredere epidemie.',
    why: 'Een snel groeiende ebola-uitbraak in Oost-Afrika die om internationale aandacht en hulp vraagt.',
    pubDate: '2026-10-19T03:00:00Z',
    added: '2026-10-19T05:13:00Z',
  },
];
