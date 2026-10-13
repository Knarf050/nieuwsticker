/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 13 oktober 2026',
  updatedAt: '13-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Eneco Tour — openingstijdrit', loc: 'Start/finish Den Haag', tag: 'Sport', highlight: true },
        { time: '18:00', title: 'Los Cumbia Stars', loc: 'PAARD, Kleine Zaal', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:30', title: 'Thijs Veldhuis', loc: 'Rotown, Nieuwe Binnenweg', tag: 'Muziek', highlight: true },
        { time: '22:00', title: 'Club Coco', loc: 'Coconuts', tag: 'Nachtleven' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'herfstvakantieprogramma (t/m 25 okt)', title: 'Naturalis', loc: 'Leiden', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 1 nov)', title: '"Galleria" — mini-exposities', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotown — agenda', url: 'https://www.rotown.nl/' },
    { label: 'dagjeweg.nl — activiteiten 13 oktober', url: 'https://www.dagjeweg.nl/kalender/13-oktober-2026' },
  ],
};
