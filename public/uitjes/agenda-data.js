/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 25 september 2026',
  updatedAt: '25-09-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '25–27 sep (start vandaag)', title: 'Cirque Mania', loc: 'Korzo — experimenteel circustheater: acrobatiek, jongleren, robotica', tag: 'Theater', highlight: true },
        { time: '20:30', title: 'Prime Time Friday Comedy', loc: 'ComedyCity The Hague — met Cristian Pielich en Bert Kleiweg', tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Pink Floyd Project', loc: 'RTM Stage, Ahoy', tag: 'Muziek', highlight: true },
        { time: 'vandaag', title: 'Jesse Hoefnagels', loc: 'Rotown', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '25–27 sep (start vandaag)', title: 'Evenement historische stadskern', loc: 'Schiedam', tag: 'Cultuur', highlight: true },
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: '19 historische molens', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
