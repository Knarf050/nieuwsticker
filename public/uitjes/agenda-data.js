/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 1 oktober 2026',
  updatedAt: '01-10-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '1–31 okt (start vandaag)', title: 'Spinozamaand 2026', loc: 'Den Haag', tag: 'Cultuur', highlight: true },
        { time: 'vandaag', title: 'Kinderboekenweek', loc: 'Bibliotheek Den Haag — zingen, dansen, spelen en voorlezen', tag: 'Familie' },
        { time: '18:30', title: 'KATE CLOVER', loc: 'Café Paard', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '1–11 okt (start vandaag)', title: 'Afrovibes Festival 2026', loc: 'Rotterdam', tag: 'Festival', highlight: true },
        { time: 'vandaag', title: 'Michael Prins', loc: 'LantarenVenster — Play With Fire Tour', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'TU Delft Science Centre', loc: "Robots besturen, technologie en plastic smelten", tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Museum De Zwarte Tulp', loc: 'Lisse — van bol tot bloem', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
