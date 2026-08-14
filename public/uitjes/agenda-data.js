/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 14 augustus 2026',
  updatedAt: '14-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vanaf 19:00', title: 'Beachvolleybal Toernooi', loc: 'Scheveningen Beach', tag: 'Sport', highlight: true },
        { time: '17:00', title: 'Bootjesfeest', loc: 'Zuiderparktheater', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vanavond', title: 'FAALFEST Part II', loc: 'Rotown — punk/hardcore: Knife Massage, The Etters, Systeemfalen, Uitzendbureau', tag: 'Muziek', highlight: true },
        { time: '07:00–19:00', title: 'Kaapse Kunstetalage — Ilona Bal', loc: 'Rotterdam', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Blokart racen op het strand', loc: 'Ouddorp', tag: 'Actief', highlight: true },
        { time: 'deze zomer', title: 'Galleria — mini-tentoonstellingen', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'AllEvents — The Hague dit weekend', url: 'https://allevents.in/the-hague/this-weekend' },
    { label: 'Rotown — Faalfest', url: 'https://www.rotown.nl/agenda/faalfest/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};
