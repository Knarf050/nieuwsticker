/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 11 november 2026',
  updatedAt: '11-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '17:30', title: 'Sint Maarten — lampionnenoptocht', loc: 'Vruchtenbuurt', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: '800 jaar eten en drinken', loc: 'Binnenhof', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12:00–00:00', title: 'TEDxRotterdam', loc: 'nieuwe Luxor Theater', tag: 'Festival', highlight: true },
        { time: '19:00–23:00', title: 'Papa Roach', loc: 'Rotterdam Ahoy', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '19:00', title: 'Sint Maarten — lampionnenoptocht', loc: 'Berkel en Rodenrijs', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'optochtenkalender.nl — Zuid-Holland', url: 'https://www.optochtenkalender.nl/nederland/zuid-holland.html' },
    { label: 'uitagendarotterdam.nl — TEDxRotterdam', url: 'https://www.uitagendarotterdam.nl/agenda/tedx-rotterdam/' },
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
  ],
};
