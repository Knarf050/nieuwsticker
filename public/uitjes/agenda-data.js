/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 7 oktober 2026',
  updatedAt: '07-10-2026, 07:16',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:00–21:00', title: '"Qaqnas"', loc: 'Theater aan het Spui — all-vrouwelijke Kurdische opera', tag: 'Theater', highlight: true },
        { time: '19:30–21:25', title: '"Het Debuut 2026"', loc: 'Zaal 3', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10:00–15:00', title: 'Kinderboekenweek: "Spot Aan!" & "LetterPret!"', loc: 'Centrale Bibliotheek — gratis', tag: 'Familie', highlight: true },
        { time: 'vanaf 18:00 (start vandaag)', title: 'Architectuur Filmfestival Rotterdam', loc: 'Diverse locaties', tag: 'Film' },
        { time: 'vanaf 10:00 (start vandaag)', title: 'Dutch Sustainable Fashion Week Rotterdam', loc: 'Diverse locaties', tag: 'Cultuur' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'herfstvakantie', title: 'Nationaal Videogame Museum', loc: 'Zoetermeer — 200+ speelautomaten en homecomputers', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Stadswandeling met Goudse Gidsen Gilde', loc: 'Gouda', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
