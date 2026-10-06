/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 6 oktober 2026',
  updatedAt: '06-10-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '6–7 okt (start vandaag)', title: 'ONE Conference', loc: 'Den Haag', tag: 'Cultuur', highlight: true },
        { time: '09:00–18:00', title: 'Blue Week', loc: 'Elsewhere The Hague', tag: 'Cultuur' },
        { time: '20:15–21:30', title: '"AI&IK ERAN&CO"', loc: 'Theater aan het Spui', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00–22:00', title: '"How to Be a Dissident" — Gal Beckerman', loc: 'Arminius', tag: 'Cultuur', highlight: true },
        { time: '10:00–12:00', title: 'Forgotten Crafts: Cyanotype printing', loc: 'Dokhuis Rotterdam', tag: 'Workshop' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Royal Delft Museum', loc: 'Delft — Delfts Blauw en streetart', tag: 'Expo', highlight: true },
        { time: 'doorlopend', title: 'Rijksmuseum van Oudheden', loc: 'Leiden — mummies en farao\'s', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
