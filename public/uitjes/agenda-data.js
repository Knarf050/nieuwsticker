/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 24 augustus 2026',
  updatedAt: '24-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vanavond', title: 'Social Dance: Balfolk', loc: 'Amare', tag: 'Muziek', highlight: true },
        { time: 'doorlopend', title: 'SEA LIFE Scheveningen', loc: 'Onderwaterwereld met bijzondere dieren', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12:00–16:00', title: 'Prikkelvriendelijk bezoek', loc: 'Museum Rotterdam', tag: 'Familie', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 't/m 30 aug', title: 'Workshops voor nieuwsgierige kids', loc: 'Rijksmuseum Boerhaave, Leiden', tag: 'Familie', highlight: true },
        { time: 't/m 30 aug', title: '"HALLO? 150 jaar telefonie"', loc: 'Museum van de 20ste eeuw', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Uitzinnig — zomervakantie Zuid-Holland', url: 'https://www.uitzinnig.nl/zuid-holland/zomervakantie.aspx' },
  ],
};
