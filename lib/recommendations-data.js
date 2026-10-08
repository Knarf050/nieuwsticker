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
    title: 'Duitse oud-inlichtingenchef gearresteerd op verdenking van spionage en landverraad',
    link: 'https://www.aljazeera.com/news/2026/10/7/german-ex-spy-chief-arrested-for-treason-what-we-know',
    source: 'Al Jazeera',
    summary: 'August Hanning, van 1998 tot 2005 chef van de Duitse inlichtingendienst BND, is opgepakt op verdenking van spionage en poging tot landverraad. Een tweede verdachte, Manfred D, werd eveneens gearresteerd en beschuldigd van medeplichtigheid. Dat een voormalig spionagetopman zelf wordt verdacht, is hoogst ongebruikelijk.',
    why: 'Een ex-spionagechef die van landverraad wordt verdacht — uitzonderlijk en gevoelig voor de Duitse veiligheidsdiensten.',
    pubDate: '2026-10-07T10:00:00Z',
    added: '2026-10-08T05:12:00Z',
  },
  {
    title: 'Mistral onthult Large 4: Europees AI-model van 1 biljoen parameters tegen de Chinese top',
    link: 'https://www.cnbc.com/2026/10/06/mistral-ai-model-le-chonk.html',
    source: 'CNBC',
    summary: 'Het Franse Mistral presenteerde Mistral Large 4, een model met naar verluidt zo\'n 1 biljoen parameters, dat het volgens het bedrijf kan opnemen tegen de beste open AI-modellen uit China. Mistral is het belangrijkste Europese antwoord op de Amerikaanse en Chinese AI-labs en profileert zich op digitale soevereiniteit.',
    why: 'Europa\'s belangrijkste AI-lab mengt zich met een topmodel in de race die tot nu toe door de VS en China wordt bepaald.',
    pubDate: '2026-10-06T12:00:00Z',
    added: '2026-10-08T05:12:00Z',
  },
  {
    title: 'Oekraine voert grote droneaanval uit op regio Moskou, twee doden',
    link: 'https://www.aljazeera.com/news/2026/10/6/ukraine-launches-major-drone-attack-on-russias-moscow-region-killing-two',
    source: 'Al Jazeera',
    summary: 'Oekraine lanceerde in de nacht een grootschalige droneaanval op de regio Moskou. Burgemeester Sobjanin zei dat zo\'n 650 drones richting de hoofdstad kwamen, waarvan het merendeel werd neergehaald; bij de aanval kwamen twee mensen om en brak brand uit. Kiev voert zijn diepe aanvallen op Russische energie- en militaire doelen verder op.',
    why: 'Oekraine verlegt de oorlog steeds dieper het Russische achterland in, met de hoofdstadregio als doelwit.',
    pubDate: '2026-10-06T06:00:00Z',
    added: '2026-10-07T05:12:00Z',
  },
  {
    title: 'OpenAI lanceert "Dots": altijd-aan persoonlijke AI-agents, en volgt Meta de markt in',
    link: 'https://www.cnbc.com/2026/09/30/openai-follows-meta-into-the-red-hot-market-for-personal-agents.html',
    source: 'CNBC',
    summary: 'Op zijn DevDay toonde OpenAI "Dots": altijd-aan, autonome persoonlijke agents (aangedreven door GPT-6 Astra) die doelen zelfstandig op de achtergrond nastreven, een eigen cloud-computer hebben en met ruim 4.000 apps verbinden. Ze komen beschikbaar voor Pro- en Business Premium-gebruikers. OpenAI gaat daarmee de concurrentie aan met Meta in de opkomende markt voor persoonlijke AI-agents.',
    why: 'Het zwaartepunt verschuift van chatbots naar autonome persoonlijke agents — de vraag is of gebruikers ervoor willen betalen.',
    pubDate: '2026-09-30T13:00:00Z',
    added: '2026-10-06T15:12:00Z',
  },
  {
    title: 'Braziliaanse verkiezing naar tweede ronde: Bolsonaro nipt voor Lula',
    link: 'https://www.cnn.com/2026/10/04/americas/brazil-president-elections-2026-latam-intl',
    source: 'CNN',
    summary: 'In de eerste ronde haalde senator Flavio Bolsonaro (zoon van de gevangengezette oud-president Jair Bolsonaro) 47 procent, tegen 44,9 procent voor Lula — geen van beiden boven de 50 procent die nodig is om direct te winnen. De beslissende tweede ronde volgt op 25 oktober. De campagne draaide om misdaad, corruptie en Trump.',
    why: 'Een nek-aan-nekrace die bepaalt of Brazilie naar rechts kantelt — met gevolgen voor de hele regio.',
    pubDate: '2026-10-04T23:00:00Z',
    added: '2026-10-05T15:12:00Z',
  },
  {
    title: 'Tencent least 100.000 AI-chips bij Oracle in Zuidoost-Azie en omzeilt zo exportregels',
    link: 'https://www.techrepublic.com/article/news-tencent-oracle-ai-chip-deal-apac-southeast-asia/',
    source: 'TechRepublic',
    summary: 'In een vijfjarige deal van naar schatting 7 miljard dollar krijgt het Chinese Tencent via Oracle-datacenters in Zuidoost-Azie toegang tot zo\'n 100.000 geavanceerde AI-chips. Chinese bedrijven mogen zulke Nvidia-chips niet rechtstreeks kopen, maar Amerikaanse regels verbieden het huren van rekencapaciteit in het buitenland (nog) niet.',
    why: 'Laat zien hoe China de Amerikaanse chip-exportbeperkingen omzeilt door rekenkracht in het buitenland te huren.',
    pubDate: '2026-10-01T12:00:00Z',
    added: '2026-10-05T15:12:00Z',
  },
];
