/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 23 augustus 2026',
  updatedAt: '23-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: 'Art Nouveau Festijn', loc: 'Den Haag rond 1900', tag: 'Festival', highlight: true },
        { time: 'laatste dag', title: 'NK Beachvolleybal (Robijn Quickwash)', loc: 'The Hague Beach Stadium', tag: 'Sport' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'laatste dag', title: 'Openluchtfilmfestival', loc: 'Wilhelminapier — 20:00–23:59', tag: 'Film', highlight: true },
        { time: '12:00–23:00', title: 'Klassiek in Het Park', loc: 'Gratis toegang', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: '"Thuis bij Jan Steen"', loc: 'Museum De Lakenhal, Leiden — 10:00–17:00', tag: 'Expo', highlight: true },
        { time: 't/m 30 aug', title: 'Speurtocht', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'Art Nouveau Festijn', url: 'https://www.artnouveaufestijn.nl/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'DagjeWeg — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};
