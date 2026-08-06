/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 6 augustus 2026',
  updatedAt: '06-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '14:00', title: 'Balletvoorstelling', loc: 'Zuiderparktheater', tag: 'Dans', highlight: true },
        { time: '6–23 aug', title: 'Jeugdactiviteiten', loc: 'CORPUS — dagelijks 09:00–16:00', tag: 'Familie' },
        { time: 't/m 14 sep', title: 'Walk of Fame (gratis)', loc: 'Scheveningen boulevard', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '6–8 aug', title: 'Pop-up restaurant Kantine Rotterdam', loc: 'Vier-gangendiner met regionale seizoensingrediënten', tag: 'Eten', highlight: true },
        { time: '19:30', title: 'Hoelahoep-workshop — Xzieje', loc: 'Rotterdam', tag: 'Workshop' },
        { time: '20:00', title: 'Theatervoorstelling', loc: 'Garden of Bird', tag: 'Theater' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
        { time: 't/m 30 aug', title: 'Schattenjacht', loc: 'Rijksmuseum van Oudheden, Leiden — vanaf 10:00', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
