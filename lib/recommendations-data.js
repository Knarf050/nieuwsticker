// Handgekozen aanbevelingen (geopolitiek & tech/AI) — items die ik interessant
// vind om naast het harde nieuws te tonen. Ze verschijnen met een 'Aanbevolen'-
// label, gemengd tussen het gewone nieuws.
//
// Dit bestand wordt automatisch bijgewerkt door de geplande 'aanbevelingen'-taak
// (2x per dag). Handmatig aanpassen mag ook — houd het format aan:
//   - pubDate : echte publicatiedatum van het artikel (voor de weergegeven tijd)
//   - added   : wanneer het is aanbevolen (bepaalt de volgorde, nieuwste bovenaan)
//   - why     : korte reden waarom het interessant is (getoond onder de kop)
// Houd de lijst kort (±6 items); oudste eruit als er nieuwe bijkomen.

export const RECOMMENDATIONS = [
  {
    title: 'Microsoft biedt 60.000 werknemers een vrijwillige vertrekregeling aan in AI-efficiëntieslag',
    link: 'https://www.cnbc.com/2026/10/26/microsoft-msft-voluntary-buyouts.html',
    source: 'CNBC',
    summary: 'Microsoft biedt ongeveer 60.000 in aanmerking komende werknemers een vrijwillige vertrekregeling aan, als onderdeel van een efficiëntieslag die mede door AI wordt gedreven. Medewerkers hebben tot begin december om te beslissen. De stap laat zien hoe grote techbedrijven hun personeelsbestand herzien nu AI taken overneemt en de uitgaven aan AI-infrastructuur piekt.',
    why: 'Een concreet teken van hoe AI de werkgelegenheid begint te hertekenen, zelfs bij de grootste techbedrijven.',
    pubDate: '2026-10-26T20:00:00Z',
    added: '2026-10-27T15:12:00Z',
  },
  {
    title: 'Exit-polls Israël: geen duidelijke winnaar, Netanyahu mist meerderheid',
    link: 'https://www.aljazeera.com/news/2026/10/28/five-key-takeaways-from-israels-parliamentary-elections',
    source: 'Al Jazeera',
    summary: 'Volgens exit-polls heeft de Israëlische verkiezing geen duidelijke winnaar: noch het blok van Netanyahu, noch de oppositie onder oud-legerchef Gadi Eisenkot haalt de benodigde 61 van de 120 Knesset-zetels. Arabische partijen komen met een recordaantal van rond de 17-18 zetels mogelijk in een sleutelpositie. De opkomst was met 77,7 procent de hoogste in 27 jaar; officiële uitslagen volgen op 4 november.',
    why: 'Een patstelling die Israël richting moeizame coalitievorming duwt — en Netanyahu\'s lot onzeker laat.',
    pubDate: '2026-10-28T05:00:00Z',
    added: '2026-10-28T05:13:00Z',
  },
  {
    title: 'Anthropic dient aanvraag voor beursgang in onder tickersymbool "ANT"',
    link: 'https://techcrunch.com/2026/10/26/anthropic-officially-files-for-its-public-debut',
    source: 'TechCrunch',
    summary: 'AI-bedrijf Anthropic heeft maandag officieel een aanvraag voor een beursgang ingediend en wil noteren onder het symbool "ANT". Over de eerste helft van 2026 boekte het 16,3 miljard dollar omzet, maar ook een fors nettoverlies dat vooral door boekhoudkundige posten rond converteerbare schuld wordt gedreven. De oprichters houden via een "Founder LLC" ruim 50 procent van de stemrechten. Chipaandelen stegen op het nieuws.',
    why: 'Een van de grootste AI-bedrijven zet de stap naar de beurs — een test voor het vertrouwen in de AI-hausse.',
    pubDate: '2026-10-26T13:00:00Z',
    added: '2026-10-26T15:12:00Z',
  },
  {
    title: 'Lula wint Braziliaanse verkiezing; kamp-Bolsonaro erkent nederlaag niet',
    link: 'https://www.aljazeera.com/news/2026/10/26/lula-holds-off-far-right-with-victory-in-brazil-presidential-election',
    source: 'Al Jazeera',
    summary: 'Lula heeft de tweede ronde gewonnen met 51,8 procent tegen 48,2 procent voor Flávio Bolsonaro (zoon van Jair), goed voor een ongekende vierde termijn. Het is de eerste keer sinds 1989 dat een kandidaat de eindronde wint na in de eerste ronde te hebben verloren. Bolsonaro weigert vooralsnog de uitslag te erkennen en wil die laten vernietigen; de Braziliaanse beurs-ETF kelderde bijna 20 procent.',
    why: 'De grootste democratie van Latijns-Amerika houdt uiterst rechts tegen — maar een betwiste uitslag belooft een onzekere overgang.',
    pubDate: '2026-10-26T06:00:00Z',
    added: '2026-10-26T05:13:00Z',
  },
  {
    title: 'Block brengt "Dessa" uit: een stemmodel dat lokaal draait en akelig menselijk klinkt',
    link: 'https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human',
    source: 'TechCrunch',
    summary: 'Het onderzoekslab van betaalbedrijf Block heeft een spraakmodel genaamd Dessa gepresenteerd dat lokaal op consumentenhardware draait en volgens TechCrunch opvallend menselijk klinkt. Het model is nog niet publiek beschikbaar; Block roept eerst veiligheidsonderzoekers op het te testen, gezien het misbruikrisico van realistische stemmen.',
    why: 'Steeds echter klinkende AI-stemmen vergroten zowel de mogelijkheden als het risico op fraude en imitatie.',
    pubDate: '2026-10-24T13:00:00Z',
    added: '2026-10-25T05:13:00Z',
  },
  {
    title: 'Lokaal staakt-het-vuren in bezet Oekraïens stadje terwijl Russische aanvallen doorgaan',
    link: 'https://www.cnbc.com/2026/10/27/russia-ukraine-zelenskyy-trump-putin-ceasefire.html',
    source: 'CNBC',
    summary: 'In het door Rusland bezette Oleshky (regio Cherson) ging een lokaal staakt-het-vuren in, naar verluidt bemiddeld door Melania Trump, zodat hulp ingesloten bewoners kan bereiken. Tegelijk vuurde Rusland volgens Zelensky in één nacht zo\'n 16 ballistische raketten en 280 drones op Oekraïense steden af. Een nieuwe ronde trilaterale vredesbesprekingen (VS, Oekraïne, Rusland) wordt verwacht.',
    why: 'Een zeldzaam, piepklein bestand contrasteert scherp met de onverminderde Russische luchtaanvallen.',
    pubDate: '2026-10-27T12:00:00Z',
    added: '2026-10-28T05:13:00Z',
  },
];
