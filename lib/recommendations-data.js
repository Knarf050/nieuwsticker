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
    title: 'VS wil maas dichten waardoor China toch aan Nvidia\'s beste AI-chips komt',
    link: 'https://www.cnbc.com/2026/08/19/china-ai-nvidia-chips-us-export-controls.html',
    source: 'CNBC',
    summary: 'Washington scherpt de exportregels aan nadat Chinese bedrijven via datacenters in Zuidoost-Azie toegang bleken te krijgen tot Nvidia\'s krachtigste GB300-chips, ondanks de bestaande beperkingen.',
    why: 'De chipoorlog verschuift naar sluiproutes — bepalend voor wie de AI-race kan volhouden.',
    pubDate: '2026-08-19T12:00:00Z',
    added: '2026-09-07T16:26:00Z',
  },
  {
    title: 'Analyse: kan Trump de vredesbesprekingen tussen Rusland en Oekraine echt vlot trekken?',
    link: 'https://www.aljazeera.com/opinions/2026/9/7/will-trump-succeed-in-restarting-russia-ukraine-peace-talks',
    source: 'Al Jazeera',
    summary: 'Al Jazeera weegt de kansen van Trumps nieuwe bemiddelingsronde nu zijn gezanten zowel Poetin als Zelensky spraken, terwijl beide partijen nog ver uit elkaar liggen over de voorwaarden.',
    why: 'Scherpe analyse van waarom de diplomatie vastloopt, voorbij de dagkoppen.',
    pubDate: '2026-09-07T07:00:00Z',
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
  {
    title: 'Trump–Xi-top in Washington: waarom de verwachtingen laag liggen',
    link: 'https://www.cnbc.com/2026/09/02/trump-xi-summit-iran-china-trade-elections.html',
    source: 'CNBC',
    summary: 'De top moet gaan over handel, investeringen, AI, de oorlog met Iran en Taiwan, maar China-kenners temperen de verwachtingen nu een nieuw Amerikaans plan om Irans handelspartners te sanctioneren ook China kan raken.',
    why: 'Handel, AI, Taiwan en de Iran-oorlog komen samen in één ontmoeting — de belangrijkste geopolitieke afspraak van deze maand.',
    pubDate: '2026-09-02T09:00:00Z',
    added: '2026-09-07T06:00:00Z',
  },
];
