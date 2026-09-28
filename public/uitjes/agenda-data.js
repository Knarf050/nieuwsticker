/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 28 september 2026',
  updatedAt: '28-09-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Greg Shapiro: "KING ME"', loc: 'Theater Pepijn', tag: 'Comedy', highlight: true },
        { time: 'vandaag', title: '"Feel at Home"', loc: 'The Hague International Centre', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'doorlopend', title: 'Adventure City Rotterdam', loc: 'Klimparcours met touwbruggen en tubingbaan', tag: 'Actief', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Boottochtje door Leiden', loc: 'Grachten, binnenplaatsen en gezellige straatjes', tag: 'Actief', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
