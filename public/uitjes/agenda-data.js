/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 13 september 2026',
  updatedAt: '13-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: 'Open Monumentendag', loc: 'Grote of Sint-Jacobskerk — gratis toegang', tag: 'Cultuur', highlight: true },
        { time: '19:30', title: 'Zuiderpark Live: Jaap Reesema', loc: 'Zuiderparktheater', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Fiësta Futura', loc: 'Zuiderpark — gratis, onderdeel Baroeg Open Air-weekend', tag: 'Festival', highlight: true },
        { time: 'laatste dag', title: 'ALL CAPS 2026', loc: 'Streetart-festival', tag: 'Expo' },
        { time: 'laatste dag', title: 'Big Art XL kunstbeurs', loc: 'Codrico-fabriek — 11:00–18:00', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '10:15–13:15', title: 'Fossielenexpeditie', loc: 'Maasvlaktestrand', tag: 'Natuur', highlight: true },
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
