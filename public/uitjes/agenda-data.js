/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 12 oktober 2026',
  updatedAt: '12-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 25 okt)', title: 'Japanse Tuin', loc: 'Landgoed Clingendael', tag: 'Natuur', highlight: true },
        { time: 'opent vandaag (t/m 9 nov)', title: 'Happy Halloween', loc: 'Familypark Drievliet', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'RUEL', loc: 'Annabel', tag: 'Muziek', highlight: true },
        { time: '20:00 (uitverkocht)', title: 'Pete Murray — Solo Acoustic Tour', loc: 'LantarenVenster', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 18 okt)', title: 'Leiden International Film Festival', loc: 'Leiden', tag: 'Film', highlight: true },
        { time: 'doorlopend (t/m 13 dec)', title: '"Miniaturen en Meesterstukken"', loc: 'Zilvermuseum Schoonhoven', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotown — agenda', url: 'https://www.rotown.nl/' },
    { label: 'uitzinnig.nl — evenementen Zuid-Holland', url: 'https://www.uitzinnig.nl/evenement/12/zuid-holland.aspx?arcp=1&m=10' },
  ],
};
