/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 2 november 2026',
  updatedAt: '02-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:45 (t/m 6 nov)', title: 'Star Party', loc: 'Atrium City Hall', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Escher in Het Paleis', loc: 'Paleis Lange Voorhout', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 8 nov)', title: 'Wildlife Film Festival', loc: 'Cinerama en LantarenVenster', tag: 'Film', highlight: true },
        { time: 'doorlopend', title: 'Klimpark met tubingbaan', loc: 'Hoogste tubingbaan van Nederland', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie', highlight: true },
        { time: 'doorlopend, gratis', title: 'Singelpark-stadswandeling', loc: 'Historische binnenstad, Leiden', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotterdam Festivals — evenementenkalender', url: 'https://www.rotterdamfestivals.nl/media/bphdv1sm/evenementenkalender-2026.pdf' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};
