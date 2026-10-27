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
    title: 'Israël stemt in cruciale verkiezing die draait om oorlog en veiligheid',
    link: 'https://www.aljazeera.com/news/2026/10/27/israel-heads-to-the-polls-as-shift-to-the-right-dominates-critical-election',
    source: 'Al Jazeera',
    summary: 'Israël gaat dinsdag naar de stembus in de eerste verkiezing sinds de aanslagen van 7 oktober 2023 en de oorlog met Iran. De peilingen zijn nek-aan-nek: het oppositieblok wordt rond de 52 van de 120 Knesset-zetels geschat tegen zo\'n 50 voor het blok van Netanyahu, waardoor geen van beide dicht bij de benodigde 61 komt en kleine partijen de doorslag geven. Tot 80.000 Israëli\'s in het buitenland vliegen terug om te stemmen.',
    why: 'Een richtingbepalende stembusgang voor Israël, met Netanyahu\'s politieke lot en de nasleep van de oorlogen op het spel.',
    pubDate: '2026-10-27T06:00:00Z',
    added: '2026-10-27T05:13:00Z',
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
    title: 'Russische raketten treffen Kyiv vlak nadat Witkoff Poetin had gesproken',
    link: 'https://www.aljazeera.com/news/2026/10/22/russian-strikes-hit-kyiv-after-witkoff-meets-putin',
    source: 'Al Jazeera',
    summary: 'Een nacht na het bezoek van de Amerikaanse gezant Witkoff aan Poetin troffen Russische aanvallen Kyiv: zeker vier doden en tientallen gewonden, onder wie kinderen. Het Kremlin zei "in principe" bereid te zijn de door de VS bemiddelde gesprekken te hervatten, maar noemde de Oekraïense en Europese vredesvoorstellen weinig inhoudelijk. Zelensky wil uiterlijk begin november een top.',
    why: 'De vredesdiplomatie en de aanhoudende Russische aanvallen lopen hard door elkaar — een realiteitscheck op de optimistische toon.',
    pubDate: '2026-10-22T07:00:00Z',
    added: '2026-10-23T05:13:00Z',
  },
];
