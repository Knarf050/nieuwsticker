/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 18 november 2026',
  updatedAt: '18-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 29 nov)', title: '"Dag Poes" (4+)', loc: 'Theater aan het Spui', tag: 'Familie', highlight: true },
        { time: '20:00–22:00', title: 'Mefisto — try-out', loc: 'Koninklijke Schouwburg', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:30', title: 'Harry Potter and the Chamber of Secrets — filmconcert', loc: 'De Doelen', tag: 'Familie', highlight: true },
        { time: 'opent vandaag, 20:30', title: 'Cameretten Festival (60e editie)', loc: 'Kantine Walhalla', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'opent vandaag (t/m 22 nov)', title: 'Suikerzoet Filmfestival', loc: 'Diverse locaties, Schiedam', tag: 'Film', highlight: true },
        { time: '17:00–20:00', title: 'Start kerstseizoen', loc: 'Westfield Mall of the Netherlands, Leidschendam', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'hnt.nl — agenda', url: 'https://www.hnt.nl/nl/voorstellingen' },
    { label: 'dedoelen.nl — agenda', url: 'https://www.dedoelen.nl/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/uitgaan' },
  ],
};
