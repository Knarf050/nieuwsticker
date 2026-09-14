/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 14 september 2026',
  updatedAt: '14-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: 'Walk of Fame (gratis)', loc: 'Scheveningen boulevard', tag: 'Familie', highlight: true },
        { time: 'laatste dag (7–14 sep)', title: '"Taalverhalen in Den Haag"', loc: 'Portretten en verhalen van Nederlands-leerders', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'deze zomer', title: 'Galleria — mini-tentoonstellingen', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Expo', highlight: true },
        { time: 'doorlopend', title: 'Museumpark Archeon', loc: 'Alphen aan den Rijn — zwaardvechten en boogschieten', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
