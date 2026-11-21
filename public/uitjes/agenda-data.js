/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 21 november 2026',
  updatedAt: '21-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '15:30–22:30', title: 'Light Walk For KWF', loc: 'Scheveningen Beach Resort', tag: 'Familie', highlight: true },
        { time: '20:00', title: 'Mystery Ensemble — muziek uit The Lord of the Rings', loc: 'Grote Kerk', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10:00–20:00', title: 'Scandinavische Kerstmarkten', loc: 'Diverse locaties', tag: 'Markt', highlight: true },
        { time: '11:00–20:00', title: 'Deense Kerstmarkt', loc: 'Coolhaven 1', tag: 'Markt' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'opent vandaag (t/m 5 dec)', title: 'De Stad van Sint — Pietenwerk en Pepernotenfabriek', loc: 'Museumpark Archeon, Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'scandinavischleven.nl — kerstmarkten', url: 'https://www.scandinavischleven.nl/scandinavische-kerstmarkten-nederland/' },
    { label: 'archeon.nl — De Stad van Sint', url: 'https://www.archeon.nl/en/events/the-city-of-sint.html' },
  ],
};
