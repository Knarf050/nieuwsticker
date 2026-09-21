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
    title: 'Iran meldt aanwijzingen dat de VS opnieuw aanvallen voorbereidt',
    link: 'https://www.aljazeera.com/news/2026/9/21/irans-military-says-us-preparing-to-resume-strikes',
    source: 'Al Jazeera',
    summary: 'Het Iraanse opperbevel (Khatam al-Anbiya) zegt informatie te hebben dat Washington een nieuwe aanvalsronde voorbereidt. De waarschuwing volgt nadat Trump zei in "beslissingsmodus" te zitten en naast een deal of economische druk ook zware militaire actie overweegt.',
    why: 'Na maanden van relatieve rust dreigt de oorlog met Iran opnieuw te ontvlammen — met gevolgen voor olie en de hele regio.',
    pubDate: '2026-09-21T10:00:00Z',
    added: '2026-09-21T15:12:00Z',
  },
  {
    title: 'AI-cloudbedrijf Nscale naar de beurs voor 35 miljard — met waarschuwing over voortbestaan',
    link: 'https://fortune.com/2026/09/21/nscale-35-billion-ipo-nvidia-going-concern/',
    source: 'Fortune',
    summary: 'Nscale, dat Nvidia-GPU\'s verhuurt aan OpenAI en Anthropic, mikt op een beursgang van 35 miljard dollar. De omzet steeg met 1.252 procent naar 140 miljoen, maar het bedrijf leed ruim een miljard verlies en waarschuwt in zijn prospectus zelf voor een "going concern"-risico.',
    why: 'Toont hoe verhit de AI-infrastructuurmarkt is — miljardenwaarderingen bovenop zware verliezen.',
    pubDate: '2026-09-21T12:00:00Z',
    added: '2026-09-21T15:12:00Z',
  },
  {
    title: 'Europese Commissie stelt "KIDS Act" voor: leeftijdscontrole en rem op AI-chatbots voor minderjarigen',
    link: 'https://iapp.org/news/a/european-commission-unveils-eu-kids-act',
    source: 'IAPP',
    summary: 'Het Commissievoorstel van 17 september wil onder-13\'s van sociale media weren, 15 als eigen accountleeftijd instellen en platforms tot leeftijdsverificatie verplichten. AI-metgezellen mogen bij minderjarigen geen relaties of emoties simuleren en staan standaard uit; het Parlement en de lidstaten moeten nog akkoord gaan.',
    why: 'Een van de eerste wetten die AI-companions expliciet aan banden legt om emotionele afhankelijkheid bij kinderen te voorkomen.',
    pubDate: '2026-09-17T10:00:00Z',
    added: '2026-09-21T15:12:00Z',
  },
  {
    title: 'Oekraine treft Moskou met grootste droneaanval ooit op slotdag Russische verkiezing',
    link: 'https://www.cnn.com/2026/09/20/europe/moscow-ukraine-attack-russia-election',
    source: 'CNN',
    summary: 'In de nacht voor de laatste stemdag onderschepte Rusland naar eigen zeggen 1.110 Oekraiense drones — het hoogste aantal dit jaar. Bij de regio Moskou vielen drie doden en ruim twintig gewonden; een raffinaderij in de hoofdstad raakte beschadigd en stond in brand.',
    why: 'De diepste slag in het Russische achterland tot nu toe, uitgerekend terwijl Poetin een parlementsverkiezing afsluit.',
    pubDate: '2026-09-20T12:00:00Z',
    added: '2026-09-21T05:12:00Z',
  },
  {
    title: 'Chinese chipmaker CXMT start massaproductie van vijfde-generatie DRAM',
    link: 'https://www.scmp.com/tech/article/3368154/chinas-cxmt-touts-new-chip-manufacturing-platform-close-worlds-most-advanced',
    source: 'South China Morning Post',
    summary: 'CXMT kondigde op de World Manufacturing Convention in Hefei aan dat zijn G5-platform in massaproductie is, met twee 24Gb LPDDR5X-geheugenchips die al in Chinese topsmartphones zitten. De celafstand daalt naar 11,95 nanometer — een stap richting het niveau van Samsung en SK Hynix.',
    why: 'Toont hoe China ondanks exportbeperkingen zijn eigen geheugenindustrie opstuwt en de mondiale DRAM-markt verschuift.',
    pubDate: '2026-09-20T08:00:00Z',
    added: '2026-09-21T05:12:00Z',
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
