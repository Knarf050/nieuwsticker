/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 8 oktober 2026',
  updatedAt: '08-10-2026, 07:11',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–17:00', title: '"Mix & Match: Beauty from the World of Islam"', loc: 'Kunstmuseum Den Haag — nieuwe expositie, t/m 25 okt', tag: 'Expositie', highlight: true },
        { time: '21:30', title: 'Gratis Salsa Night', loc: 'Grote Markt', tag: 'Dans' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:30', title: 'Rotown Nights: Night Swimming + Part Garden', loc: 'Rotown, Nieuwe Binnenweg 19', tag: 'Muziek', highlight: true },
        { time: '10:00', title: 'Safety & Health @ Work-beurs', loc: 'Ahoy, Hal 2 & 4', tag: 'Beurs' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '10:00–17:00', title: 'Expositie "Urban Blue"', loc: 'Royal Delft Museum, Delft — t/m 1 nov', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: '"Monsters en mythische wezens"', loc: 'Museum Volkenkunde, Leiden — t/m 1 nov', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Muziekladder Rotterdam', url: 'https://muziekladder.nl/en/muziek/8-Rotterdam/agenda-4.html' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/herfstvakantie' },
  ],
};
