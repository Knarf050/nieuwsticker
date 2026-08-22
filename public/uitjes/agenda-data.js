/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 22 augustus 2026',
  updatedAt: '22-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: 'Wild Rooster Festival', loc: 'Grote Markt — eten, bier en rockabilly/bluegrass/rock \'n roll', tag: 'Festival', highlight: true },
        { time: 'dag 2', title: 'Drum3Daagse 2026', loc: 'Musicon', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '15:00–23:00', title: 'MAAS OPEN AIR', loc: 'Oude Plantage / Mallegatpark', tag: 'Festival', highlight: true },
        { time: '17:00–21:00', title: 'ZOOmeravonden', loc: 'Diergaarde Blijdorp', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Renzy elektrische GPS-tours', loc: 'Noordwijk aan Zee', tag: 'Actief', highlight: true },
        { time: 'doorlopend', title: 'Museumpark Archeon', loc: 'Alphen aan den Rijn — zwaardvechten en boogschieten', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'Wild Rooster Festival', url: 'https://wildroosterfestival.nl/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
