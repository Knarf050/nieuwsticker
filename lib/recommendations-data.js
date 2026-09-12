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
    title: 'Saudi-Arabie sluit cruciale olieleiding na drone-aanval vanuit Irak',
    link: 'https://www.aljazeera.com/news/2026/9/12/saudi-arabia-shuts-critical-oil-pipeline-after-drone-attack-what-happened',
    source: 'Al Jazeera',
    summary: 'Saudi-Arabie legde tijdelijk zijn 1.200 km lange Oost-Westpijpleiding stil na een drone-aanval die volgens Riyad vanuit Irak kwam. De leiding vervoert zo\'n 4 a 5 procent van de wereldolie; Irak ontsloeg een legercommandant na onderzoek.',
    why: 'Een nieuw doelwit in de regionale schaduwoorlog rond olie-infrastructuur, met directe gevolgen voor de wereldmarkt.',
    pubDate: '2026-09-12T08:00:00Z',
    added: '2026-09-12T15:03:00Z',
  },
  {
    title: 'AI-chipstart-up Positron haalt 875 miljoen dollar op met geheugenrijke inferentiechip',
    link: 'https://qz.com/positron-ai-funding-series-c-inference-chips-091026',
    source: 'Quartz',
    summary: 'Positron haalde 875 miljoen dollar op bij een waardering van 5 miljard dollar voor zijn Asimov-chip, die inzet op veel goedkoop LPDDR5X-geheugen in plaats van schaarse HBM — een poging om de Nvidia-flessenhals in AI-inferentie te omzeilen.',
    why: 'Toont hoe uitdagers de dominantie van Nvidia in AI-hardware proberen te breken via een andere geheugenaanpak.',
    pubDate: '2026-09-10T13:00:00Z',
    added: '2026-09-12T15:03:00Z',
  },
  {
    title: 'Poetin waarschuwt: Europese troepen in Oekraine betekenen oorlog met Rusland',
    link: 'https://www.kyivpost.com/post/84319',
    source: 'Kyiv Post',
    summary: 'Poetin zei dat elke inzet van Europese grondtroepen in Oekraine neerkomt op directe oorlog met Rusland, terwijl Europese regeringen praten over veiligheidsgaranties voor Kyiv. Tegelijk claimde hij dat Rusland Europa niet bedreigt.',
    why: 'Zet de discussie over westerse veiligheidsgaranties op scherp — een kernpunt voor elk toekomstig bestand.',
    pubDate: '2026-09-12T09:00:00Z',
    added: '2026-09-12T05:03:00Z',
  },
  {
    title: 'Oracle-orderportefeuille voor AI-cloud schiet naar 664 miljard dollar',
    link: 'https://247wallst.com/investing/2026/09/11/oracle-surges-7-as-ai-cloud-backlog-hits-664b-coreweave-and-nebius-climb-4/',
    source: '24/7 Wall St.',
    summary: 'Oracle boekte in een kwartaal ruim 30 miljard dollar aan nieuwe AI-cloudcontracten, waardoor de nog uit te voeren orderportefeuille (RPO) op 664 miljard dollar kwam — een teken van de explosieve vraag naar AI-datacentercapaciteit.',
    why: 'Illustreert hoe groot en kapitaalintensief de AI-infrastructuurhausse is geworden.',
    pubDate: '2026-09-11T13:00:00Z',
    added: '2026-09-12T05:03:00Z',
  },
  {
    title: 'IAEA-bestuur verwijst Iran naar VN-Veiligheidsraad wegens nucleaire "niet-naleving"',
    link: 'https://www.aljazeera.com/news/2026/9/9/iaea-board-resolves-to-report-iran-to-security-council-over-nuclear-program',
    source: 'Al Jazeera',
    summary: 'Het 35-landenbestuur van het IAEA nam met 23 tegen 3 stemmen (Rusland, China en Niger tegen) een door de VS, VK, Frankrijk en Duitsland ingediende resolutie aan die Iran voor het eerst in twintig jaar naar de Veiligheidsraad verwijst wegens onopgehelderde uraniumsporen.',
    why: 'Escaleert het conflict met Iran diplomatiek — al blokkeren Rusland en China waarschijnlijk elke VN-actie.',
    pubDate: '2026-09-09T15:00:00Z',
    added: '2026-09-11T15:04:00Z',
  },
  {
    title: 'Google DeepMind brengt effect van alle 9 miljard mogelijke DNA-mutaties in kaart',
    link: 'https://www.theregister.com/ai-and-ml/2026/09/08/google-deepmind-rises-above-the-ai-scrum-with-genome-atlas/',
    source: 'The Register',
    summary: 'De gratis AlphaGenome Atlas voorspelt met AI het biologische effect van elke mogelijke letterverandering in het menselijk genoom — 9 miljard varianten, een petabyte aan data — met een impact-score om ziekteonderzoek te versnellen.',
    why: 'Een concrete, positieve AI-doorbraak in de biologie, in de geest van AlphaFold.',
    pubDate: '2026-09-08T10:00:00Z',
    added: '2026-09-11T15:04:00Z',
  },
];
