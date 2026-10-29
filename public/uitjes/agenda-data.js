/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 29 oktober 2026',
  updatedAt: '29-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vanaf 10:00, gratis', title: 'NXTGEN Conference — keynote André Kuipers', loc: 'Fokker Terminal', tag: 'Tech', highlight: true },
        { time: 'opent vandaag (t/m 13 nov)', title: '"Momenten waarop het kantelde" (Schuldenlab070)', loc: 'Atrium City Hall', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'avond', title: 'Cola Competition', loc: 'Rotown, Nieuwe Binnenweg', tag: 'Muziek', highlight: true },
        { time: 'Maand van de Geschiedenis', title: 'Lezing', loc: 'Museum Rotterdam Het Steiger', tag: 'Cultuur' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'opent vandaag (t/m 31 okt)', title: 'Gouds Wijnfestival', loc: 'Binnenstad Gouda', tag: 'Festival', highlight: true },
        { time: 'doorlopend (t/m 1 nov)', title: '"Monsters en mythische wezens"', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'beethovenzuidholland.nl — NXTGEN Conference', url: 'https://beethovenzuidholland.nl/agenda/nxt-gen-conference/' },
    { label: 'Rotown — agenda', url: 'https://www.rotown.nl/' },
    { label: 'dagjeweg.nl — Halloween Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/halloween' },
  ],
};
