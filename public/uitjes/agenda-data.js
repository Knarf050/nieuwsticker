/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 19 augustus 2026',
  updatedAt: '19-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 't/m 23 aug', title: 'Jeugdactiviteiten', loc: 'CORPUS — dagelijks 09:00–16:00', tag: 'Familie', highlight: true },
        { time: 't/m 14 sep', title: 'Walk of Fame (gratis)', loc: 'Scheveningen boulevard', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie', highlight: true },
        { time: 'vanavond', title: 'Spelletjesavond', loc: 'Rotown — gratis entree', tag: 'Cultuur' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '09:00–16:00', title: 'Gouds Montmartre', loc: 'Antiek- en vintagemarkt, 120 kramen — Gouda', tag: 'Markt', highlight: true },
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: '19 historische molens', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag-agenda.nl', url: 'https://denhaag-agenda.nl/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'DagjeWeg — Zuid-Holland 19 augustus', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/19-augustus-2026' },
  ],
};
