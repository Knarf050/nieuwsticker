/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 9 november 2026',
  updatedAt: '09-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:45–19:00, laatste dag', title: 'Eastern Neighbours Film Festival', loc: 'Filmhuis Den Haag', tag: 'Film', highlight: true },
        { time: 'opent vandaag (t/m 12 dec)', title: 'Time Machine (HNTjong)', loc: 'Theater aan het Spui', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:30', title: 'Blok3 — Live Arena Tour 2026/27', loc: 'Rotterdam Ahoy', tag: 'Muziek', highlight: true },
        { time: 'doorlopend', title: 'Adventure City — klimparcours', loc: 'Rotterdam', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'TU Delft Science Centre', loc: 'Delft — techniekstudio\'s voor kinderen', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'GPS-tour langs kust en polder', loc: 'Noordwijk aan Zee', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotterdam Ahoy — agenda', url: 'https://www.ahoy.nl/en/events' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};
