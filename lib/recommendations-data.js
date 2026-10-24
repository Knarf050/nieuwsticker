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
    title: 'Europese en Arabische ministers dringen aan op diplomatie met Iran, niet op nieuwe aanvallen',
    link: 'https://www.aljazeera.com/news/2026/10/23/european-middle-east-ministers-urge-us-iran-diplomacy-not-new-attacks',
    source: 'Al Jazeera',
    summary: 'In Istanbul kwamen de E3 (VK, Frankrijk, Duitsland) samen met de "R4" (Turkije, Saoedi-Arabië, Pakistan, Egypte) en Italië. Geen van de deelnemers steunt een nieuwe militaire aanval op Iran; diplomatie is volgens hen de enige uitweg. De oproep klinkt terwijl een Amerikaanse gezant zei dat Washington "absoluut" opnieuw kan toeslaan en de Straat van Hormuz dicht blijft.',
    why: 'Een brede groep bondgenoten probeert een nieuwe oorlog met Iran af te wenden — tegen de druk van Washington in.',
    pubDate: '2026-10-23T18:00:00Z',
    added: '2026-10-24T05:13:00Z',
  },
  {
    title: 'Russische raketten treffen Kyiv vlak nadat Witkoff Poetin had gesproken',
    link: 'https://www.aljazeera.com/news/2026/10/22/russian-strikes-hit-kyiv-after-witkoff-meets-putin',
    source: 'Al Jazeera',
    summary: 'Een nacht na het bezoek van de Amerikaanse gezant Witkoff aan Poetin troffen Russische aanvallen Kyiv: zeker vier doden en tientallen gewonden, onder wie kinderen. Het Kremlin zei "in principe" bereid te zijn de door de VS bemiddelde gesprekken te hervatten, maar noemde de Oekraïense en Europese vredesvoorstellen weinig inhoudelijk. Zelensky wil uiterlijk begin november een top.',
    why: 'De vredesdiplomatie en de aanhoudende Russische aanvallen lopen hard door elkaar — een realiteitscheck op de optimistische toon.',
    pubDate: '2026-10-22T07:00:00Z',
    added: '2026-10-23T05:13:00Z',
  },
  {
    title: 'DeepSeek haalt naar verluidt 15 miljard dollar op, dagen na Amerikaanse ban',
    link: 'https://techcrunch.com/2026/10/22/deepseek-reportedly-raises-15b-days-after-us-restrictions/',
    source: 'TechCrunch',
    summary: 'Volgens berichtgeving heeft het Chinese AI-lab DeepSeek zo\'n 15 miljard dollar opgehaald, slechts enkele dagen nadat de VS federale diensten opdroegen zijn technologie te verwijderen. De grote kapitaalinjectie onderstreept dat Chinese AI-bedrijven ondanks Amerikaanse maatregelen volop financiering en momentum vinden.',
    why: 'Laat zien hoe de Amerikaanse druk op Chinese AI de opkomst ervan niet per se remt — en misschien juist aanjaagt.',
    pubDate: '2026-10-22T14:00:00Z',
    added: '2026-10-23T05:13:00Z',
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
    title: 'Kenia bevestigt achtste ebolageval nu regionale uitbraak zich uitbreidt',
    link: 'https://www.aljazeera.com/news/2026/10/19/kenya-confirms-eighth-ebola-case-amid-widening-regional-outbreak',
    source: 'Al Jazeera',
    summary: 'Kenia heeft een achtste ebolabesmetting bevestigd, terwijl de uitbraak zich vanuit Congo (DRC) over de regio verspreidt. In de DRC zijn volgens de autoriteiten inmiddels zeker 9.400 gevallen geregistreerd, met meer dan 4.500 doden. De grensoverschrijdende verspreiding voedt de vrees voor een bredere epidemie.',
    why: 'Een snel groeiende ebola-uitbraak in Oost-Afrika die om internationale aandacht en hulp vraagt.',
    pubDate: '2026-10-19T03:00:00Z',
    added: '2026-10-19T05:13:00Z',
  },
];
