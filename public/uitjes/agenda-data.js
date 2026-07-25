/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 25 juli 2026',
  updatedAt: '25-07-2026, 09:00',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:30', title: 'Familierondleiding Tweede Kamer', loc: 'Tweede Kamer — t/m 29 aug, elke zaterdag', tag: 'Familie', highlight: true },
        { time: 't/m 2 aug', title: 'Jeugdactiviteiten Scheveningen Beach Resort', loc: 'Scheveningen', tag: 'Familie' },
        { time: 't/m 31 jul', title: 'Elsewhere The Hague', loc: 'Diverse locaties', tag: 'Festival' },
        { time: 't/m 30 jul', title: 'Dance-programma', loc: 'PAARD', tag: 'Muziek' },
        { time: 't/m 30 jul', title: 'Filmprogramma', loc: 'Filmhuis Den Haag', tag: 'Film' },
        { time: 't/m 26 sep', title: 'Court Pond Walking tours', loc: 'Hofvijver e.o.', tag: 'Wandeling' },
        { time: 't/m 28 aug', title: 'Dreams and Talents: Ukraine (foto)', loc: 'Atrium Den Haag', tag: 'Expo' },
        { time: 't/m 28 aug', title: 'Courage of a Nation (foto)', loc: 'Atrium Den Haag', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12:00', title: 'Zomercarnaval — Straatparade', loc: 'Vanaf de Blaak — hoofdevenement vandaag', tag: 'Festival', highlight: true },
        { time: '13:00–15:00', title: 'Gratis kids-expo', loc: 'Kunstinstituut Melly', tag: 'Familie' },
        { time: '17:30', title: 'Lovumba — Latin Boat Party', loc: 'Sint-Jobshavenkade', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '10:00–17:00', title: 'Archeon: mode & textiel', loc: 'Alphen aan den Rijn — ook morgen', tag: 'Expo' },
        { time: '10:00–16:00', title: 'Circulaire markt', loc: 'Ridderkerk', tag: 'Markt' },
        { time: '12:00–16:00', title: 'Strand-ontdektocht', loc: 'Kust Zuid-Holland', tag: 'Familie' },
        { time: '10:00–15:00', title: 'Vleermuisbunker-bezoek', loc: 'Zuid-Holland', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'DagjeWeg — Den Haag', url: 'https://www.dagjeweg.nl/kalender/den-haag-centrum/25-juli-2026' },
    { label: 'UITagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'DagjeWeg — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/25-juli-2026' },
    { label: 'denhaag.com', url: 'https://denhaag.com/en/calendar' },
  ],
};
