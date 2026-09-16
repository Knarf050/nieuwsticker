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
    title: 'Eindhovense AI-chipstart-up EUCLYD haalt ruim 200 miljoen euro op, ex-ASML-topman Wennink voorzitter',
    link: 'https://bits-chips.com/article/euclyd-raises-over-e200m-to-build-ai-infrastructure-platform/',
    source: 'Bits&Chips',
    summary: 'De in 2024 opgerichte Eindhovense start-up EUCLYD haalde ruim 200 miljoen euro op in een ronde mede geleid door Samsung, voor zijn inferentiechip-systeem CRAFTWERK. Oud-ASML-topman Peter Wennink wordt voorzitter van de raad.',
    why: 'Een Europese poging om een wereldklasse AI-inferentiechip te bouwen en de afhankelijkheid van Nvidia te doorbreken.',
    pubDate: '2026-09-15T09:00:00Z',
    added: '2026-09-16T05:03:00Z',
  },
  {
    title: 'China dreigt Trump-Xi-top af te zeggen als VS wapenpakket voor Taiwan goedkeurt',
    link: 'https://www.taipeitimes.com/News/taiwan/archives/2026/09/13/2003864183',
    source: 'Taipei Times',
    summary: 'Peking waarschuwde Washington via diplomatieke kanalen de top van 24 september in het Witte Huis te schrappen als Trump een door het Congres goedgekeurd wapenpakket van 14 miljard dollar voor Taiwan tekent. China noemt Taiwan een "rode lijn".',
    why: 'Zet de belangrijkste geplande VS-China-ontmoeting van het jaar op het spel — met Taiwan als breekpunt.',
    pubDate: '2026-09-13T10:00:00Z',
    added: '2026-09-15T15:04:00Z',
  },
  {
    title: 'Altman: OpenAI gaat in 2026 niet naar de beurs vanwege AI-veiligheid',
    link: 'https://www.axios.com/2026/09/12/openai-public-ipo-delay-sam-altman',
    source: 'Axios',
    summary: 'Sam Altman zei dat een beursgang nu "onverstandig" zou zijn gezien de toegenomen eisen rond AI-veiligheid, en schuift een mogelijke IPO door naar op zijn vroegst 2027. Hij sloot zich aan bij Amodei\'s oproep om het ontwikkeltempo te temperen.',
    why: 'Laat zien hoe veiligheidszorgen nu zelfs de miljardenbeslissingen van de grootste AI-bedrijven sturen.',
    pubDate: '2026-09-12T14:00:00Z',
    added: '2026-09-15T15:04:00Z',
  },
  {
    title: 'Kim Jong-un noemt Ruslands oorlog "heilig" en belooft Poetin onwrikbare steun',
    link: 'https://www.kyivpost.com/post/84516',
    source: 'Kyiv Post',
    summary: 'In een brief aan Poetin sprak de Noord-Koreaanse leider van een "heilige oorlog" en beloofde hij zijn onveranderlijke steun en uitbreiding van de samenwerking; Kyiv waarschuwt dat mogelijk tot 50.000 extra Noord-Koreaanse militairen naar Rusland gaan.',
    why: 'Onderstreept hoe de as Moskou-Pyongyang dieper wordt — met directe gevolgen voor het slagveld in Oekraine.',
    pubDate: '2026-09-15T08:00:00Z',
    added: '2026-09-15T05:04:00Z',
  },
  {
    title: 'Trump dringt bij Oekraine aan om aanvallen op Russische raffinaderijen te staken nu dieselprijs piekt',
    link: 'https://www.cnbc.com/2026/09/14/trump-ukraine-russia-diesel-prices-oil.html',
    source: 'CNBC',
    summary: 'Trump riep Zelensky op te stoppen met het uitschakelen van Russische dieselproductie, omdat de aanvallen "de wereld schaden" nu de Amerikaanse dieselprijs voor het eerst boven de 6 dollar per gallon uitkwam. Moskou verwelkomde de oproep; Oekraine trof al ruim 24 raffinaderijen.',
    why: 'Legt de spanning bloot tussen Oekraines economische oorlogvoering en de gevolgen voor de wereldwijde energieprijzen.',
    pubDate: '2026-09-14T12:00:00Z',
    added: '2026-09-14T15:04:00Z',
  },
  {
    title: 'Microsoft publiceert gedragscode voor eigen AI-modellen te midden van debat over "pas op de plaats"',
    link: 'https://www.geekwire.com/2026/microsoft-floats-rules-for-its-own-ai-models-as-industry-debates-a-slowdown/',
    source: 'GeekWire',
    summary: 'Microsoft opende een consultatie over een gedragscode voor zijn MAI-modellen — geen hulp bij wapens of gevaarlijke stoffen, en modellen die transparant blijven — terwijl Nadella zich aansloot bij Amodei\'s oproep om het tempo van AI-ontwikkeling te temperen.',
    why: 'Toont hoe de top van de AI-industrie zelf begint te pleiten voor een bewuster, trager ontwikkeltempo.',
    pubDate: '2026-09-14T09:00:00Z',
    added: '2026-09-14T15:04:00Z',
  },
];
