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
    title: 'Iran kondigt beperkte zone rond Straat van Hormuz aan na aanvallen op schepen',
    link: 'https://www.washingtontimes.com/news/2026/sep/7/security-official-says-tehran-set-restricted-zone-near-stait-hormuz/',
    source: 'The Washington Times',
    summary: 'Volgens topveiligheidsfunctionaris Mohsen Rezaei stelt Teheran een beperkte zone in vanaf de Amerikaanse blokkadelijn; schepen die er binnenvaren belanden op een Iraanse sanctielijst. De maatregel volgt op wederzijdse aanvallen op tankers en oorlogsschepen.',
    why: 'Raakt aan een vijfde van de wereldwijde olievaart — een gevaarlijke escalatie in een cruciale energiestraat.',
    pubDate: '2026-09-07T14:00:00Z',
    added: '2026-09-08T05:04:00Z',
  },
  {
    title: 'VS-gezanten voeren "substantiële" gesprekken met Zelensky bij eerste bezoek aan Kyiv',
    link: 'https://www.aljazeera.com/news/2026/9/6/us-envoys-hold-substantive-talks-with-zelenskyy-in-first-visit-to-kyiv',
    source: 'Al Jazeera',
    summary: 'Kushner en Witkoff spraken in Kyiv met Zelensky over veiligheidsgaranties, luchtafweer en een steunpakket, een dag na hun overleg met Poetin in Moskou. Zelensky pleit voor trilaterale onderhandelingen met Rusland.',
    why: 'Eerste bezoek van Trumps gezanten aan Kyiv sinds de invasie — een concrete stap in de vastgelopen diplomatie.',
    pubDate: '2026-09-06T18:00:00Z',
    added: '2026-09-08T05:04:00Z',
  },
  {
    title: 'OpenAI lanceert GPT-6 Astra, met nadruk op veiligheid en cyberwaarborgen',
    link: 'https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html',
    source: 'CNBC',
    summary: 'OpenAI bracht GPT-6 Astra uit, naar eigen zeggen zijn krachtigste model tot nu toe, getraind op meer dan 100.000 GPU\'s; de publieke versie weigert bepaalde cyber-prompts en wordt gefaseerd uitgerold.',
    why: 'De grootste modelrelease van dit jaar — en een test of topcapaciteit en ingebouwde beveiliging samengaan.',
    pubDate: '2026-09-03T13:00:00Z',
    added: '2026-09-07T16:26:00Z',
  },
  {
    title: 'Israel doodt vijf Palestijnen in Gaza ondanks bestand, onder wie twee kinderen',
    link: 'https://www.aljazeera.com/news/2026/9/7/israeli-attacks-on-gaza-kill-five-palestinians-including-two-children',
    source: 'Al Jazeera',
    summary: 'Bij Israelische aanvallen in Gaza kwamen vijf mensen om, onder wie een meisje van zeven en haar vader, vlak voor het nieuwe schooljaar — ondanks het staakt-het-vuren dat sinds oktober formeel geldt.',
    why: 'Laat zien hoe broos het Gaza-bestand is: de intensiteit daalt, maar de aanvallen stoppen niet.',
    pubDate: '2026-09-07T09:00:00Z',
    added: '2026-09-07T16:26:00Z',
  },
  {
    title: 'Claude levert het eerste volledig computer-gecontroleerde bewijs van de Laatste Stelling van Fermat',
    link: 'https://www.anthropic.com/research/formalizing-fermats-last-theorem',
    source: 'Anthropic',
    summary: 'Claude formaliseerde in elf dagen grotendeels zelfstandig de Laatste Stelling van Fermat in Lean — miljoenen regels code en ruim 30.000 stellingen — een mijlpaal in automatische, verifieerbare wiskunde.',
    why: 'Laat zien dat AI serieuze wiskunde aankan die een computer kan nacontroleren, niet alleen tekst genereren.',
    pubDate: '2026-09-04T12:00:00Z',
    added: '2026-09-07T16:15:00Z',
  },
];
