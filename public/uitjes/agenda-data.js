/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 31 oktober 2026 — Halloween',
  updatedAt: '31-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:00–16:00, gratis', title: 'Halloween Kids — pompoen snijden', loc: 'Boterwaag', tag: 'Familie', highlight: true },
        { time: 'vanaf 21:00, gratis (18+ na 23:00)', title: 'Halloween XXL', loc: 'Grote Markt, 7 locaties', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'avond, gratis', title: 'Countsvale Haunted Circus', loc: 'Japanse Tuin, Pieter Klapwijkstraat', tag: 'Familie', highlight: true },
        { time: '16:00–19:00', title: 'De Vloek van de Maas — Halloween-avontuur', loc: 'Novotel Rotterdam Brainpark', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'optocht', title: 'Trick-or-treat-optocht', loc: 'Vissersdijk, Gorinchem', tag: 'Familie', highlight: true },
        { time: '30–31 okt', title: 'Bounce Game Night Halloween', loc: 'Bounce Valley, Ridderkerk', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — Halloween in Den Haag', url: 'https://denhaag.com/en/tips-for-you/halloween-in-the-hague' },
    { label: 'RotterdamStyle — Halloween in Rotterdam', url: 'https://rotterdamstyle.com/events/halloween-in-rotterdam-events-and-parties' },
    { label: 'go-kids.nl — Halloween Rotterdam', url: 'https://go-kids.nl/rotterdam/blog/halloween-in-rotterdam-en-omstreken' },
  ],
};
