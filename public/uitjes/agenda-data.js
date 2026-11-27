/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 27 november 2026',
  updatedAt: '27-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag, 18:30 gratis (t/m 28 nov)', title: 'No Limits Festival', loc: 'Theater aan het Spui', tag: 'Festival', highlight: true },
        { time: 'opent vandaag (t/m 28 nov)', title: 'Rootz Winter Beer Festival', loc: 'Den Haag', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 28 nov)', title: 'Zweedse Kerstmarkt', loc: 'Schotse Kerk, Schiedamsesingel 2', tag: 'Markt', highlight: true },
        { time: 'doorlopend (t/m 27 feb)', title: 'Schaatsbaan Rotterdam', loc: 'Rotterdam', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '16:00–21:00', title: 'Winterfair Lekkerkerk — 70+ kramen en schaatsbaan', loc: 'De Amicitia en Raadhuisplein, Lekkerkerk', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Museum Prinsenhof — verhaal van Willem van Oranje', loc: 'Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'nolimitsfestival.com — programma', url: 'https://nolimitsfestival.com/en' },
    { label: 'winterevenementen.nu — Zweedse kerstmarkt', url: 'https://winterevenementen.nu/evenement/472/rotterdam/zweedse-kerstmarkt-rotterdam/' },
    { label: 'winterfairlekkerkerk.nl', url: 'https://winterfairlekkerkerk.nl/' },
  ],
};
