/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 13 november 2026',
  updatedAt: '13-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 15 nov)', title: 'International Film Festival The Hague', loc: 'Diverse locaties', tag: 'Film', highlight: true },
        { time: 'opent vandaag (t/m 15 nov)', title: 'International Whisky Festival', loc: 'Grote Kerk', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vanavond (t/m 21 nov)', title: 'DI-RECT', loc: 'Rotterdam Ahoy', tag: 'Muziek', highlight: true },
        { time: 'doorlopend (t/m 22 nov)', title: 'Noorse Kerstmarkt', loc: 'Rotterdam', tag: 'Markt' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'opent vandaag, 11:00–20:00 (t/m 15 nov)', title: 'Archeon Kerstmarkt', loc: 'Museumpark Archeon, Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'waarwat.nl — evenementen november 2026', url: 'https://waarwat.nl/evenementen/november-2026' },
    { label: 'archeon.nl — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};
