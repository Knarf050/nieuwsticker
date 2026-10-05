/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 5 oktober 2026',
  updatedAt: '05-10-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–17:30', title: 'Hâck The Hague 2026', loc: 'Atrium Den Haag — 120 hackers', tag: 'Cultuur', highlight: true },
        { time: '5–10 okt (start vandaag)', title: 'Blue Week', loc: 'Elsewhere The Hague', tag: 'Cultuur' },
        { time: '5–11 okt', title: 'The Hague Cocktail Week', loc: 'Diverse locaties', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vanaf 08:00 (start vandaag)', title: 'FERMA Forum 2026', loc: 'Ahoy — Hal 3, 5, 6 & RACC', tag: 'Cultuur', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Museumpark Archeon', loc: 'Alphen aan den Rijn — zwaardvechten en boogschieten', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: '"Urban Blue — from Bricks to Tiles"', loc: 'Royal Delft Museum, Delft', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
