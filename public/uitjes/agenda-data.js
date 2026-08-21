/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 21 augustus 2026',
  updatedAt: '21-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:30', title: 'Zuiderpark Live: Wolfmother', loc: 'Zuiderparktheater', tag: 'Muziek', highlight: true },
        { time: '21–22 aug (start vandaag)', title: 'Wild Rooster Festival', loc: 'Grote Markt — eten, bier en rockabilly/bluegrass/rock \'n roll', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '16:00–23:00', title: 'Twenty7 aan de Maas', loc: 'Muziek, expo, dans en hiphop', tag: 'Festival', highlight: true },
        { time: 'vanavond', title: 'Rotown Zomerclub — "emo meets girlypop"', loc: 'Rotown — gratis entree', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '09:00–12:30', title: 'Zomermarkt', loc: 'Westland', tag: 'Markt', highlight: true },
        { time: 'deze zomer', title: 'Speurtocht', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'De Grote Markt — agenda 20-24 aug', url: 'https://gmdh.nl/agenda/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Agenda Westland', url: 'https://www.rodi.nl/westland/agenda' },
  ],
};
