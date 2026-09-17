/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 17 september 2026',
  updatedAt: '17-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '17–19 sep (start vandaag)', title: 'Cello Octet Amsterdam: "Cocon"', loc: 'Korzo — 20:15–21:15, live muziek en lichtkunst', tag: 'Muziek', highlight: true },
        { time: '17–24 sep (start vandaag)', title: 'Markt Lange Voorhout', loc: 'Den Haag', tag: 'Markt' },
        { time: '20:00', title: 'Burgers & Comedy (English)', loc: 'ComedyCity The Hague', tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Cato van Dijck & Anton Goudsmit', loc: 'Rotown — gratis entree', tag: 'Muziek', highlight: true },
        { time: '17–20 sep', title: 'Evenement Zakkendragershuisje', loc: 'Rotterdam', tag: 'Cultuur' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: '19 historische molens', tag: 'Natuur', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
