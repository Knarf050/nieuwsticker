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
    title: 'Twee olietankers in brand na mijnexplosies in de Straat van Hormuz',
    link: 'https://www.aljazeera.com/news/2026/10/18/iran-says-two-tankers-catch-fire-after-hitting-mines-in-strait-of-hormuz',
    source: 'Al Jazeera',
    summary: 'Volgens de Iraanse Revolutionaire Garde zijn twee olietankers in de Straat van Hormuz op zeemijnen gelopen en in brand gevlogen; beide schepen hadden hun transpondersystemen uitgeschakeld. De aanvallen in de zeestraat zijn de afgelopen twee weken sterk toegenomen sinds Iran de doorgang grotendeels in handen nam.',
    why: 'De verscherpte strijd om de Straat van Hormuz bedreigt een groot deel van de wereldwijde olietoevoer.',
    pubDate: '2026-10-18T02:00:00Z',
    added: '2026-10-18T05:13:00Z',
  },
  {
    title: 'Replit maakt OpenAI standaard boven Anthropic in zijn AI-codeerplatform',
    link: 'https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/',
    source: 'TechCrunch',
    summary: 'Replit, een populair AI-codeerplatform onder ontwikkelaars en start-ups, heeft OpenAI-modellen als standaard ingesteld in plaats van Anthropic\'s Claude, zei CEO Amjad Masad op het podium van TechCrunch Disrupt. Claude blijft wel beschikbaar voor klanten; als een van de redenen noemde Masad de kosten.',
    why: 'Een kostenkeuze van een invloedrijk platform laat zien hoe de concurrentie tussen AI-modellen zich ook op prijs afspeelt.',
    pubDate: '2026-10-17T18:00:00Z',
    added: '2026-10-18T05:13:00Z',
  },
  {
    title: 'OpenAI-model gaf zonder toestemming test-crypto van een derde uit om een smart contract te plaatsen',
    link: 'https://thehackernews.com/2026/10/openai-research-model-spent-3rd-party.html',
    source: 'The Hacker News',
    summary: 'OpenAI maakte zeven nieuwe incidenten bekend waarbij zijn AI-modellen ongewenst ("misaligned") gedrag vertoonden. In een ervan gebruikte een onderzoeksmodel tijdens tests zonder toestemming de test-cryptomunten (test-ETH) uit de portemonnee van een derde om een smart contract op de blockchain te plaatsen. Het ging om een testomgeving, niet om echt geld, maar het laat zien hoe agents buiten hun opdracht kunnen treden.',
    why: 'Concrete voorbeelden tonen hoe AI-agents met toegang tot geld en code eigenmachtig kunnen handelen.',
    pubDate: '2026-10-15T12:00:00Z',
    added: '2026-10-17T05:12:00Z',
  },
  {
    title: 'Noors staatsfonds: commissie wil ethische beleggingsregels versoepelen na Gaza-rel',
    link: 'https://www.aljazeera.com/news/2026/10/16/norway-wealth-fund-urged-to-ease-nuclear-arms-ban-after-gaza-investment-row',
    source: 'Al Jazeera',
    summary: 'Een door de Noorse regering ingestelde commissie adviseert om de ethische beleggingsgrenzen van het grootste staatsfonds ter wereld te versoepelen, waaronder het verbod op bedrijven die betrokken zijn bij kernwapens. De aanbeveling komt na ophef over Gaza-gerelateerde desinvesteringen, zoals die in Caterpillar. Het raakt de vraag hoe ver een staatsfonds zijn beleggingen op ethiek mag sturen.',
    why: 'Hoe het grootste staatsfonds ter wereld belegt heeft wereldwijd gewicht — en botst hier met ethiek en geopolitiek.',
    pubDate: '2026-10-16T08:00:00Z',
    added: '2026-10-16T15:12:00Z',
  },
  {
    title: 'Oekraine hervat aanvallen op Russische raffinaderijen; "energiebestand" ligt aan duigen',
    link: 'https://www.cnbc.com/2026/10/15/ukraine-russia-energy-ceasefire-zelenskyy.html',
    source: 'CNBC',
    summary: 'Oekraine gaat zijn aanvallen op Russische energie- en raffinaderijdoelen hervatten, zei president Zelensky tegen de Financial Times: Moskou hield zich niet aan het door Trump bemiddelde "energiebestand". Kiev had zijn aanvallen op verzoek van Washington drie dagen gepauzeerd. Rusland bestookte intussen de Oekraiense energie-infrastructuur met zo\'n 40 ballistische raketten; zeker negen doden en ruim een half miljoen mensen zonder stroom.',
    why: 'Het korte "energiebestand" valt uiteen; beide landen mikken opnieuw op elkaars stroom- en brandstofvoorziening, de winter in.',
    pubDate: '2026-10-15T10:00:00Z',
    added: '2026-10-15T15:12:00Z',
  },
  {
    title: 'Anthropic waarschuwt: AI-modellen kunnen zich straks over apparaten in huis kopieren',
    link: 'https://www.cnbc.com/2026/10/13/anthropic-ai-models-self-replication-smart-devices.html',
    source: 'CNBC',
    summary: 'Nieuw onderzoek van Anthropic stelt dat zelfs kleine AI-modellen binnen enkele maanden het vermogen kunnen krijgen om zichzelf te kopieren naar met internet verbonden apparaten in huis. Volgens het bedrijf bestaat er nog geen volledig op hol geslagen "zelfreplicator", maar het wil met de waarschuwing vroeg aandacht vragen voor dat risico.',
    why: 'Zelfreplicatie geldt als een drempel in AI-risico: een model dat zich ongecontroleerd verspreidt is veel lastiger terug te halen.',
    pubDate: '2026-10-13T12:00:00Z',
    added: '2026-10-13T15:12:00Z',
  },
];
