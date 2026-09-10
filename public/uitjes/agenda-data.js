/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 10 september 2026',
  updatedAt: '10-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: '"Young icon from The Hague"', loc: 'PAARD', tag: 'Muziek', highlight: true },
        { time: '10–24 sep (start vandaag)', title: 'Markt Lange Voorhout', loc: '10:00–18:00', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'TAFKAL 2026 — Serieus Grappig', loc: 'RTM Stage', tag: 'Comedy', highlight: true },
        { time: '20:00 (start vandaag)', title: 'Helstone in Het Pand der Goden', loc: 'Theatervoorstelling t/m 15 okt', tag: 'Theater' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Museumpark Archeon', loc: 'Alphen aan den Rijn — zwaardvechten en boogschieten', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Royal Delft Museum', loc: 'Delft — Delfts Blauw en streetart', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
