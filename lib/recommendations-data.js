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
    title: 'Iran-gezinde Houthi\'s veroveren strategisch eiland Mayun in Bab al-Mandeb',
    link: 'https://www.aljazeera.com/news/2026/9/12/iran-backed-houthis-seize-strategic-mayun-island-can-they-hold-it',
    source: 'Al Jazeera',
    summary: 'Na de inname van Mocha rukten Houthi-strijders op naar Dhubab en het eiland Mayun (Perim) op het smalste punt van de zeestraat Bab al-Mandeb. Jemenitische regeringstroepen en bondgenoten proberen de opmars te keren.',
    why: 'Controle over Mayun zou de Houthi grip geven op een van de drukste scheepvaartroutes ter wereld.',
    pubDate: '2026-09-12T12:00:00Z',
    added: '2026-09-14T05:04:00Z',
  },
  {
    title: 'BRICS-top in New Delhi neemt verklaring van 140 punten aan, steunt VN-hervorming',
    link: 'https://www.thestatesman.com/india/brics-summit-2026-here-is-what-the-new-delhi-declaration-says-1503637754.html',
    source: 'The Statesman',
    summary: 'De 18e BRICS-top in New Delhi nam unaniem een verklaring van 140 punten aan: steun voor een grotere VN-rol voor India en Brazilie, verzet tegen eenzijdige handelstarieven en secundaire sancties, en een oproep tot een staakt-het-vuren in Gaza.',
    why: 'Toont hoe het uitgebreide BRICS-blok zich positioneert als tegenwicht tegen westerse handels- en sanctiepolitiek.',
    pubDate: '2026-09-13T08:00:00Z',
    added: '2026-09-13T15:03:00Z',
  },
  {
    title: 'Oekraine voert aanvallen op Russische "schaduwvloot" op, tot in de Middellandse Zee',
    link: 'https://www.nbcnews.com/world/russia/ukraine-strikes-russian-shadow-fleet-tanker-mediterranean-rcna250101',
    source: 'NBC News',
    summary: 'Oekraiense zeedrones troffen voor het eerst een tanker van Ruslands schaduwvloot in de Middellandse Zee, als onderdeel van een golf aanvallen die de afgelopen dagen circa negentien tankers in en rond de Zwarte Zee raakte.',
    why: 'Oekraine verlegt de strijd naar Ruslands olie-inkomsten tot ver buiten het front — een nieuwe fase in de economische oorlogvoering.',
    pubDate: '2026-09-12T06:00:00Z',
    added: '2026-09-13T05:03:00Z',
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
    title: 'Oracle-orderportefeuille voor AI-cloud schiet naar 664 miljard dollar',
    link: 'https://247wallst.com/investing/2026/09/11/oracle-surges-7-as-ai-cloud-backlog-hits-664b-coreweave-and-nebius-climb-4/',
    source: '24/7 Wall St.',
    summary: 'Oracle boekte in een kwartaal ruim 30 miljard dollar aan nieuwe AI-cloudcontracten, waardoor de nog uit te voeren orderportefeuille (RPO) op 664 miljard dollar kwam — een teken van de explosieve vraag naar AI-datacentercapaciteit.',
    why: 'Illustreert hoe groot en kapitaalintensief de AI-infrastructuurhausse is geworden.',
    pubDate: '2026-09-11T13:00:00Z',
    added: '2026-09-12T05:03:00Z',
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
