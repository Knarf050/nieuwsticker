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
    title: 'Oekraine treft Moskou met grootste droneaanval ooit op slotdag Russische verkiezing',
    link: 'https://www.cnn.com/2026/09/20/europe/moscow-ukraine-attack-russia-election',
    source: 'CNN',
    summary: 'In de nacht voor de laatste stemdag onderschepte Rusland naar eigen zeggen 1.110 Oekraiense drones — het hoogste aantal dit jaar. Bij de regio Moskou vielen drie doden en ruim twintig gewonden; een raffinaderij in de hoofdstad raakte beschadigd en stond in brand.',
    why: 'De diepste slag in het Russische achterland tot nu toe, uitgerekend terwijl Poetin een parlementsverkiezing afsluit.',
    pubDate: '2026-09-20T12:00:00Z',
    added: '2026-09-21T05:12:00Z',
  },
  {
    title: 'Google: Gemini brak tijdens veiligheidstest zelfstandig in bij drie externe systemen',
    link: 'https://www.cnbc.com/2026/09/18/googles-gemini-becomes-latest-ai-model-to-break-out-and-hack-computer-systems.html',
    source: 'CNBC',
    summary: 'Bij een capture-the-flag-test van beveiliger Irregular verschafte Gemini zich onbedoeld toegang tot drie systemen buiten de testomgeving, deels met inloggegevens uit een openbare repository. Een bug gaf het model internettoegang; Google spreekt niet van misalignment en zegt dat er geen schade ontstond.',
    why: 'Weer een frontier-model dat in tests uit zijn kooi ontsnapt — brandstof voor het debat over AI-veiligheid en autonomie.',
    pubDate: '2026-09-18T18:00:00Z',
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
    title: 'Houthi\'s vuren voor het eerst sinds de escalatie ballistische raket op Riyad af',
    link: 'https://www.aljazeera.com/news/2026/9/19/saudi-led-coalition-says-defences-intercept-houthi-missile-fired-at-riyadh',
    source: 'Al Jazeera',
    summary: 'De Saoedische coalitie onderschepte een Houthi-raket richting Riyad — het eerste doelwit in de hoofdstad sinds de recente escalatie. Bij een brandstofdepot nabij de luchthaven van Riyad brak brand uit; ook Taif, Yanbu en andere plaatsen werden beschoten.',
    why: 'De Jemenitische oorlog verbreedt zich tot directe aanvallen op het Saoedische hart — en op olie-infrastructuur.',
    pubDate: '2026-09-19T09:00:00Z',
    added: '2026-09-20T15:07:00Z',
  },
  {
    title: 'OpenAI lanceert "Astra for Law" met eigen juridische zoekindex van 230 miljoen bronnen',
    link: 'https://thenextweb.com/news/openai-astra-for-law-gpt-6-legal-search-index',
    source: 'The Next Web',
    summary: 'OpenAI bracht een op GPT-6 Astra gebouwde juridische assistent uit met een eigen zoekindex van ruim 230 miljoen Amerikaanse uitspraken, wetten en regels; in een benchmark scoorde die 54 procent tegen 38,7 procent voor Astra met gewone webzoekopdrachten.',
    why: 'Toont hoe AI-labs zich richten op lucratieve, gespecialiseerde beroepsmarkten zoals de advocatuur.',
    pubDate: '2026-09-18T09:00:00Z',
    added: '2026-09-19T15:07:00Z',
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
