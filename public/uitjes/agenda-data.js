/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 9 oktober 2026',
  updatedAt: '09-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vanaf 11:00 (9–11 okt)', title: 'Home Made Thai Market', loc: 'Lange Voorhout', tag: 'Markt', highlight: true },
        { time: '19:30', title: 'PAUW + Greentea Peng', loc: 'PAARD', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'doorlopend (t/m 11 okt)', title: 'Afrovibes Festival', loc: 'Diverse locaties', tag: 'Cultuur', highlight: true },
        { time: '22:00', title: 'Gabber Resistance', loc: 'Maassilo', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 18 okt)', title: 'Leiden International Film Festival', loc: 'Leiden', tag: 'Film', highlight: true },
        { time: 'rondleidingen (t/m 31 okt)', title: 'Bunkercomplex Rijksdorp', loc: 'Wassenaar', tag: 'Historie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dagjeweg.nl — Rotterdam', url: 'https://www.dagjeweg.nl/kalender/rotterdam/9-oktober-2026' },
    { label: 'uitzinnig.nl — evenementen Zuid-Holland', url: 'https://www.uitzinnig.nl/evenement/12/zuid-holland.aspx?arcp=1&m=10' },
  ],
};
