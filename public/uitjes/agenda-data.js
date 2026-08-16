/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 16 augustus 2026',
  updatedAt: '16-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Haags Beat Festival (8e editie)', loc: 'Zuiderparktheater — uitverkocht', tag: 'Festival', highlight: true },
        { time: '12:00–15:00', title: 'Boerendorp & Stek-evenement', loc: 'Zuiderparktheater', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '17:00', title: 'Smaakvolle zomeravondrondvaart', loc: 'Havenrondvaart met fish & chips', tag: 'Actief', highlight: true },
        { time: '10:30–14:30', title: 'Wandeltour Meidagen 1940', loc: 'Museum Rotterdam', tag: 'Wandeling' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '14:00–16:00', title: 'Kamelenmelkerij Smits', loc: 'Knuffelen, voeren en kamelenmelk proeven', tag: 'Familie', highlight: true },
        { time: '14:00–17:00', title: 'Safariboottocht "De Blauwe Bever"', loc: 'Naar de Eckse Waard — natuurwandeling', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'Zuiderparktheater — Haags Beat Festival', url: 'https://zuiderparktheater.nl/agenda/haags-beat-festival/' },
    { label: 'De Havenloods — agenda', url: 'https://www.dehavenloods.nl/agenda/evenement' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
