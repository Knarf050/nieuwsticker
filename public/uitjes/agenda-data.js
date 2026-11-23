/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 23 november 2026',
  updatedAt: '23-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Kaaskop & Van Vleuten — "Breekbare Mensen"', loc: 'Diligentia', tag: 'Theater', highlight: true },
        { time: 'vandaag', title: 'SPEAR / Moral Law', loc: 'Musicon', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'doorlopend', title: 'Marisol — overzichtstentoonstelling', loc: 'Depot Boijmans Van Beuningen', tag: 'Expositie', highlight: true },
        { time: '19:00', title: 'Game Nights: Dox & Dragons', loc: 'Café Dox', tag: 'Casual' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Mummies en farao\'s', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie', highlight: true },
        { time: 'vandaag', title: 'Studium Generale — lezing TU Delft', loc: 'Theater de Veste, Delft', tag: 'Lezing' },
      ],
    },
  ],
  sources: [
    { label: 'muziekladder.nl — Den Haag', url: 'https://muziekladder.nl/muziek/5-Den%20Haag/' },
    { label: 'agendafeed.com — Rotterdam', url: 'https://www.agendafeed.com/rotterdam/' },
    { label: 'muziekladder.nl — Zuid-Holland', url: 'https://muziekladder.nl/en/muziek/regio-south-holland_netherlands/' },
  ],
};
