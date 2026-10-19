/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 19 oktober 2026',
  updatedAt: '19-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '15:00–16:00', title: 'Festival De Betovering: "Pan" (8+)', loc: 'Theater aan het Spui, Zaal 1', tag: 'Familie', highlight: true },
        { time: '12:30', title: 'Lunchconcert Prinses Christina Concours — Trio Cugnon', loc: 'Nieuwe Kerk aan het Spui', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '09:25', title: 'WK Turnen 2026', loc: 'Rotterdam Ahoy, Hal 1–6', tag: 'Sport', highlight: true },
        { time: '20:30', title: 'ABBA Gold the Concert Show', loc: 'De Doelen, Grote Zaal', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'herfstvakantieprogramma (t/m 25 okt)', title: 'Kinderactiviteiten', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie', highlight: true },
        { time: '09:00–17:30 (t/m 1 nov)', title: 'Kinderdijk', loc: 'Molens en rondvaarten — UNESCO-werelderfgoed', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Ahoy — agenda', url: 'https://www.ahoy.nl/en/events' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};
