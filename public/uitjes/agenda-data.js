/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 4 oktober 2026',
  updatedAt: '04-10-2026, 07:14',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '13:00–17:00', title: 'Weekend van de Wetenschap', loc: 'Spui Campus — voor 8 tot 99 jaar', tag: 'Familie', highlight: true },
        { time: '12:00–18:00', title: 'Open Ateliers Den Haag', loc: 'Diverse locaties', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00–15:00', title: 'Weekend van de Wetenschap bij Portlantis', loc: 'Kids workshop', tag: 'Familie', highlight: true },
        { time: '09:00–17:00', title: 'Stoomtreindagen 2026', loc: 'SSN Museumstoomdepot', tag: 'Familie' },
        { time: '17:00–20:00', title: 'RotiCruise Rotterdam', loc: 'Surinaamse roti-dinercruise', tag: 'Eten' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '13:00–16:00', title: 'Fossielenexpeditie', loc: 'Portlantis, Maasvlaktestrand — met fossielenexpert Walter Langendoen', tag: 'Natuur', highlight: true },
        { time: '3–4 okt', title: 'Medicijnweekend', loc: 'Alphen aan den Rijn', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'DagjeWeg — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};
