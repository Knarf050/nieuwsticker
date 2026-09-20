/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 20 september 2026',
  updatedAt: '20-09-2026, 07:14',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Stadsspelen Den Haag', loc: 'Gratis sport- en bewegingsfestival voor het hele gezin', tag: 'Sport', highlight: true },
        { time: 'vandaag', title: 'Derby Day', loc: 'Draf- & Renbaan Duindigt — paardenraces en kinderactiviteiten', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'laatste dag', title: 'Old but Gold Festival 2026', loc: 'Maassilo', tag: 'Festival', highlight: true },
        { time: 'laatste dag', title: 'Theaterfestival Wonderlijk Delfshaven', loc: 'Zakkendragershuisje', tag: 'Theater' },
        { time: 'vandaag', title: 'WereldWijde Wijkfestival 2026', loc: 'Serumpark', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Citroën 2CV huren', loc: 'Hellevoetsluis — Zuid-Hollandse eilanden en Zeeland verkennen', tag: 'Actief', highlight: true },
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
