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
    title: 'Qualcomm onthult eerste 2nm-telefoonchips: Snapdragon 8 Elite Gen 6 draait AI-modellen lokaal',
    link: 'https://www.techtimes.com/articles/327920/20260923/qualcomm-snapdragon-summit-debuts-dual-2nm-chips-extreme-gen-6-runs-30b-ai-models-offline.htm',
    source: 'Tech Times',
    summary: 'Op zijn Snapdragon Summit presenteerde Qualcomm de Snapdragon 8 Elite Gen 6 en de Extreme-variant — de eerste massamarkt-telefoonchips op TSMC\'s 2nm-procede en de eerste met een kloksnelheid boven 5 GHz. De Extreme draait naar eigen zeggen AI-modellen van 30 miljard parameters volledig op het toestel, zonder cloud. De eerste telefoons volgen in het vierde kwartaal.',
    why: 'Zwaardere AI verschuift van de cloud naar de telefoon zelf — sneller en privacyvriendelijker.',
    pubDate: '2026-09-22T20:00:00Z',
    added: '2026-09-24T15:11:00Z',
  },
  {
    title: 'Iraanse president Pezeshkian kapittelt Trump bij de VN; eerste VS-Iran-gesprek sinds juni',
    link: 'https://www.cbc.ca/news/world/iran-un-general-assembly-united-states-9.7355113',
    source: 'CBC',
    summary: 'Een dag nadat Trump dreigde Iran te "vernietigen", hield de Iraanse president een strijdbare toespraak bij de Algemene Vergadering — met foto\'s van gedode kinderen — en zei dat Iran "tot de laatste adem" doorvecht: geen kernwapens, maar ook geen beperkingen op vreedzame kerntechnologie. Tegelijk meldde Trump dat zijn gezanten Witkoff en Kushner zo\'n drie uur met Iraanse functionarissen spraken.',
    why: 'Escalatie en het eerste diplomatieke contact tegelijk — dit bepaalt of de oorlog uitdooft of verhevigt.',
    pubDate: '2026-09-23T18:00:00Z',
    added: '2026-09-24T05:20:00Z',
  },
  {
    title: 'Anthropic brengt Claude Opus 5.5 uit: goedkoper en sneller dan Opus 5',
    link: 'https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/',
    source: 'TechCrunch',
    summary: 'Anthropic presenteerde Claude Opus 5.5, dat volgens het bedrijf op de meeste taken tippen aan het duurdere Fable 5.1 en Opus 5 overtreft in agentisch coderen. De prijs ligt zo\'n 20 procent lager (4 dollar per miljoen invoertokens, 20 dollar voor uitvoer) en de output komt ruim 30 procent sneller.',
    why: 'De prijzenslag tussen AI-labs verschuift de rekensom voor bedrijven die AI-agenten inzetten.',
    pubDate: '2026-09-22T17:00:00Z',
    added: '2026-09-24T05:20:00Z',
  },
  {
    title: 'Zelensky bij de VN: Oekraine klaar voor bestand op de Zwarte Zee, bal ligt bij Rusland',
    link: 'https://www.usnews.com/news/world/articles/2026-09-23/zelenskiy-says-ukraine-ready-for-maritime-truce-and-puts-onus-on-russia-to-respond',
    source: 'U.S. News (Reuters)',
    summary: 'Zelensky zei dat Oekraine bereid is tot een maritiem bestand, op basis van voorstellen van Egypte, India en Turkije om de scheepvaart weer veilig te maken, en legde de bal bij Moskou. Hij noemde Poetin "patient zero" die oorlog en instabiliteit verspreidt; het vrachtverkeer op de Zwarte Zee ligt door aanvallen vrijwel stil.',
    why: 'Een concrete opening richting de-escalatie op zee, terwijl de landoorlog het vijfde jaar ingaat.',
    pubDate: '2026-09-23T15:00:00Z',
    added: '2026-09-24T05:20:00Z',
  },
  {
    title: 'VN-Veiligheidsraad hoort voor het eerst AI-bazen van OpenAI, Anthropic en DeepSeek over AI-risico\'s',
    link: 'https://www.business-standard.com/world-news/deepseek-openai-and-anthropic-to-brief-un-security-council-on-ai-this-week-126092201553_1.html',
    source: 'Business Standard',
    summary: 'Onder Frans voorzitterschap belegt de Veiligheidsraad een zitting over de gevaren van AI-misbruik en modellen die aan menselijke controle ontsnappen. Sam Altman spreekt, Anthropic-baas Dario Amodei op afstand, samen met Hugging Face, Turing-laureaat Yoshua Bengio en de Chinese labs DeepSeek en Moonshot — de eerste keer dat de raad Chinese en Amerikaanse frontier-ontwikkelaars samen aan tafel zet.',
    why: 'AI-veiligheid schuift op van techdebat naar de hoogste tafel van de wereldveiligheid.',
    pubDate: '2026-09-22T10:00:00Z',
    added: '2026-09-23T05:18:00Z',
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
];
