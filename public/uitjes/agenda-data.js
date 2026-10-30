/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 30 oktober 2026',
  updatedAt: '30-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'doorlopend', title: 'Brick or Treat Halloween', loc: 'LEGOLAND Discovery Centre, Scheveningen', tag: 'Familie', highlight: true },
        { time: 'opent vandaag (t/m 9 nov)', title: 'Happy Halloween at Drievliet', loc: 'Familypark Drievliet', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:00–22:00', title: 'Halloween Night', loc: 'Jump 010 — trampolinepark', tag: 'Familie', highlight: true },
        { time: '30–31 okt, 16:00–19:00', title: 'De Vloek van de Maas — Halloween-avontuur', loc: 'Novotel Rotterdam Brainpark', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '18:30–21:00, gratis', title: 'Halloweenwalk — trick or treat', loc: 'Stadshart Zoetermeer', tag: 'Familie', highlight: true },
        { time: 'spookhuis (6+)', title: 'De Vervloekte Lantaarn', loc: 'Halloweenstad Zoetermeer', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'go-kids.nl — Halloween Rotterdam', url: 'https://go-kids.nl/rotterdam/blog/halloween-in-rotterdam-en-omstreken' },
    { label: 'Halloweenstad Zoetermeer', url: 'https://www.halloweenstad.nl/' },
  ],
};
