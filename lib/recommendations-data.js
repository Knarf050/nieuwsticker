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
    title: 'Iran dreigt met bredere vergelding nu Israël zich naar verluidt opmaakt voor aanval',
    link: 'https://www.aljazeera.com/news/2026/11/12/iran-warns-of-expanded-retaliation-as-israel-reportedly-readies-to-attack',
    source: 'Al Jazeera',
    summary: 'Het Israëlische veiligheidskabinet heeft het leger volgens Israëlische media opgedragen de voorbereidingen voor een aanval op Iran op te voeren. Iran waarschuwt dat elke basis die bij een nieuwe aanval wordt gebruikt — "van West-Azië tot Europa" — een doelwit wordt. Teheran wees een Amerikaans voorstel af om zijn voorraad hoogverrijkt uranium naar een derde land te verplaatsen.',
    why: 'Na weken van schermutselingen dreigt het conflict met Iran opnieuw groot te escaleren.',
    pubDate: '2026-11-12T08:00:00Z',
    added: '2026-11-12T05:13:00Z',
  },
  {
    title: 'Eerste grote Amerikaanse AI-veiligheidswet van New York treedt in werking',
    link: 'https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/',
    source: 'TechCrunch',
    summary: 'De RAISE Act van de staat New York is in werking getreden en de staat opende een registratieportaal. Grote ontwikkelaars van geavanceerde AI, zoals OpenAI en Anthropic, moeten zich vóór 1 januari 2027 registreren en aan veiligheidsvoorwaarden voldoen. Overtredingen kunnen boetes tot 1 miljoen dollar opleveren, en 3 miljoen bij herhaling.',
    why: 'Nu federale regels uitblijven, nemen staten zelf het voortouw in het reguleren van krachtige AI.',
    pubDate: '2026-11-10T16:00:00Z',
    added: '2026-11-11T05:13:00Z',
  },
  {
    title: 'Anthropic prijst beursgang op 70-78 dollar per aandeel; handel start naar verwachting 19 november',
    link: 'https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html',
    source: 'CNBC',
    summary: 'AI-bedrijf Anthropic heeft voor zijn beursgang een prijsvork van 70 tot 78 dollar per aandeel vastgesteld en wil vanaf 19 november op Nasdaq verhandeld worden, bij een waardering van rond de 1,4 biljoen dollar. Een groep chip- en techreuzen — waaronder AMD, Broadcom, Google, Micron, Microsoft, Nvidia en TSMC — koopt voor 26 miljard dollar aan aandelen. Sommige beleggers noemen de hoge waardering een gok.',
    why: 'De eerste grote beursgang van een AI-lab wordt een graadmeter voor het vertrouwen in de hele AI-sector.',
    pubDate: '2026-11-10T13:00:00Z',
    added: '2026-11-10T15:12:00Z',
  },
  {
    title: 'Oekraïne-Rusland-overleg in Abu Dhabi eindigt met akkoord over gevangenenruil',
    link: 'https://www.aljazeera.com/news/2026/11/11/russia-ukraine-talks-in-abu-dhabi-end-with-prisoner-exchange-agreement',
    source: 'Al Jazeera',
    summary: 'De door de VS bemiddelde gesprekken tussen Oekraïne en Rusland in Abu Dhabi leverden een afspraak op over een grootschalige gevangenenruil (details binnen enkele weken), maar geen doorbraak om de oorlog te beëindigen. Gezant Kushner noemde het "een zware maar productieve" ontmoeting; grondgebied blijft het heikelste punt. Hij en Witkoff reizen door naar Moskou om Poetin bij te praten.',
    why: 'Een concreet humanitair resultaat, maar de kernvraag — grondgebied — blijft onopgelost.',
    pubDate: '2026-11-11T16:00:00Z',
    added: '2026-11-11T15:12:00Z',
  },
  {
    title: 'Nvidia-topman Jensen Huang in opspraak door vermeend Chinees spionageschandaal',
    link: 'https://www.aljazeera.com/news/2026/11/9/why-is-nvidias-jensen-huang-at-the-centre-of-a-us-china-spy-scandal',
    source: 'Al Jazeera',
    summary: 'Nvidia-ceo Jensen Huang ligt onder vuur na berichten dat een Chinese zakenvrouw met wie hij een relatie had, inlichtingen voor Peking zou hebben verzameld. Het bestuur van Nvidia is een onafhankelijk onderzoek gestart naar de nationale-veiligheidszorgen en Huang bood intern excuses aan. Republikeinse Congresleden willen dat hij op 18 november getuigt.',
    why: 'De topman van \'s werelds belangrijkste AI-chipbedrijf raakt verstrikt in de spanningen tussen de VS en China.',
    pubDate: '2026-11-09T10:00:00Z',
    added: '2026-11-09T15:12:00Z',
  },
  {
    title: 'Spanje beperkt huisuitzettingen na landelijke staking tegen de wooncrisis',
    link: 'https://www.aljazeera.com/news/2026/11/12/spain-approves-housing-reforms-after-nationwide-strike-over-costs',
    source: 'Al Jazeera',
    summary: 'Het Spaanse parlement heeft maatregelen aangenomen om huisuitzettingen en vastgoedspeculatie te beperken, een dag na een landelijke staking tegen de hoge woonlasten. Hoe lang de regels gelden hangt af van vervroegde verkiezingen later in november. De stap volgt op brede onvrede over betaalbaarheid, die in heel Europa opspeelt.',
    why: 'De wooncrisis jaagt in heel Europa protest aan — Spanje probeert met wetgeving de druk te verlichten.',
    pubDate: '2026-11-12T12:00:00Z',
    added: '2026-11-12T15:12:00Z',
  },
];
