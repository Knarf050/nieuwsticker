/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 27 oktober 2026',
  updatedAt: '27-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'EU Tech Fest', loc: 'The Hague Tech', tag: 'Tech', highlight: true },
        { time: 'doorlopend (t/m 3 jan 2027)', title: 'Reflections on Fashion', loc: 'Kunstmuseum Den Haag', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '16:00–18:00, gratis', title: 'Code Tour Rotterdam', loc: 'Centrum — voor kinderen', tag: 'Familie', highlight: true },
        { time: '20:00', title: 'An Orchestral Tribute to Tim Burton & Dark Fantasy by Moonlight', loc: 'De Doelen, Grote Zaal', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 29 nov)', title: '"Miniaturen en Meesterstukken"', loc: 'Zilvermuseum Schoonhoven', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'SnowWorld', loc: 'Zoetermeer — indoor skiën en snowboarden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'agendafeed.com — Rotterdam', url: 'https://www.agendafeed.com/rotterdam/' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};
