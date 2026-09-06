/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 6 september 2026',
  updatedAt: '06-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Tino Martin Live on the Beach', loc: 'Scheveningen', tag: 'Muziek', highlight: true },
        { time: '13:30–14:20 & 16:30–17:20', title: 'Kindervoorstellingen', loc: 'Het Nationale Theater, Zaal 3', tag: 'Familie' },
        { time: '4–10 sep', title: '"BLAUWDRUK"', loc: 'Koninklijke Schouwburg', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'laatste dag', title: 'World Port Days (49e editie)', loc: 'Rotterdamse haven', tag: 'Festival', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: 'Bird Bricks — vogels en kunst met LEGO', loc: 'PiXLife Nature Xperience, Ouddorp', tag: 'Expo', highlight: true },
        { time: 'laatste dag', title: '"I See You" expositie', loc: 'Art Centre Schiedam — 13:00–17:00', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Port of Rotterdam — World Port Days', url: 'https://www.portofrotterdam.com/en/events/world-port-days-2026' },
    { label: 'DagjeWeg — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};
