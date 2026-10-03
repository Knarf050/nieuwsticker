/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 3 oktober 2026',
  updatedAt: '03-10-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:30', title: 'Prime Time Saturday Comedy', loc: 'ComedyCity The Hague', tag: 'Comedy', highlight: true },
        { time: '15:00–16:00', title: '"Dag Poes" (4+)', loc: 'Theater aan het Spui', tag: 'Familie' },
        { time: '12:00–18:00', title: 'The Hague Cocktail Week & Open Ateliers', loc: 'Diverse locaties', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:15–21:15', title: 'Afrovibes Festival', loc: 'Maaspodium', tag: 'Festival', highlight: true },
        { time: 'vandaag', title: 'Summer of Love – Autumn Vibes', loc: 'Maassilo', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'hoofddag', title: 'Leidens Ontzet (3 oktoberviering)', loc: 'Leiden — live optredens, kermis en vuurwerk', tag: 'Festival', highlight: true },
        { time: 'doorlopend', title: 'Waterspeelplaats De Watervallei', loc: 'Capelle aan den IJssel', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
