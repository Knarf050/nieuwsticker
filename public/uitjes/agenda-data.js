/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 19 november 2026',
  updatedAt: '19-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dagen (t/m 20 nov)', title: '#DemocracyDrinks — The Hague Justice Week', loc: 'Diverse locaties', tag: 'Festival', highlight: true },
        { time: 'doorlopend', title: '"Dag Poes" (4+)', loc: 'Theater aan het Spui', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'Gotu Jim', loc: 'Maassilo', tag: 'Muziek', highlight: true },
        { time: '20:30', title: 'Joshua Idehen', loc: 'Rotown', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'gratis, t/m 22 nov', title: 'Suikerzoet Filmfestival', loc: 'Wenneker Cinema, Schiedam', tag: 'Film', highlight: true },
        { time: '09:00–13:00', title: 'Kabouters zoeken', loc: 'Bentwoud-West, Benthuizen', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'rotown.nl — agenda', url: 'https://www.rotown.nl/' },
    { label: 'rightsforum.org — agenda', url: 'https://rightsforum.org/agenda/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/19-november-2026' },
  ],
};
