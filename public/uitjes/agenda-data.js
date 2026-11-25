/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 25 november 2026',
  updatedAt: '25-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 13 dec)', title: 'Siebrand Weitenberg — expositie', loc: 'Pulchri Studio', tag: 'Expositie', highlight: true },
        { time: '20:00–22:00', title: 'Oersoep NITE | K.O.Brass', loc: 'Koninklijke Schouwburg', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:30', title: 'Shirma Rouse & Orkest Koninklijke Luchtmacht — "Celebrating Gospel"', loc: 'De Doelen, Grote Zaal', tag: 'Muziek', highlight: true },
        { time: '20:30, uitverkocht', title: 'Genesis Owusu', loc: 'Rotown', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag (23–25 nov)', title: 'Pakjesboot van Sinterklaas', loc: 'Gouda', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Museum Prinsenhof — verhaal van Willem van Oranje', loc: 'Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dedoelen.nl — agenda', url: 'https://www.dedoelen.nl/nl/agenda' },
    { label: 'uitzuidholland.com — agenda', url: 'https://uitzuidholland.com/' },
  ],
};
