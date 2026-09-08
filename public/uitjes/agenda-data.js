/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 8 september 2026',
  updatedAt: '08-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'nieuw', title: '"De Groene Camera"', loc: 'Fototentoonstelling — winnaars Groene Camera 2026', tag: 'Expo', highlight: true },
        { time: 't/m 14 sep', title: 'Walk of Fame (gratis)', loc: 'Scheveningen boulevard', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:15–20:45', title: 'Gratis workshop', loc: 'Fenixplein', tag: 'Workshop', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Royal Delft Museum', loc: 'Delft — laatste Delftware-fabriek uit de 17e eeuw', tag: 'Expo', highlight: true },
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
