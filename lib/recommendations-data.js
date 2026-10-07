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
    title: 'Oekraine voert grote droneaanval uit op regio Moskou, twee doden',
    link: 'https://www.aljazeera.com/news/2026/10/6/ukraine-launches-major-drone-attack-on-russias-moscow-region-killing-two',
    source: 'Al Jazeera',
    summary: 'Oekraine lanceerde in de nacht een grootschalige droneaanval op de regio Moskou. Burgemeester Sobjanin zei dat zo\'n 650 drones richting de hoofdstad kwamen, waarvan het merendeel werd neergehaald; bij de aanval kwamen twee mensen om en brak brand uit. Kiev voert zijn diepe aanvallen op Russische energie- en militaire doelen verder op.',
    why: 'Oekraine verlegt de oorlog steeds dieper het Russische achterland in, met de hoofdstadregio als doelwit.',
    pubDate: '2026-10-06T06:00:00Z',
    added: '2026-10-07T05:12:00Z',
  },
  {
    title: 'Iran houdt Straat van Hormuz dicht tot de VS aan zijn voorwaarden voldoet',
    link: 'https://www.aljazeera.com/news/2026/10/4/iran-says-strait-of-hormuz-to-remain-closed-until-us-meets-conditions',
    source: 'Al Jazeera',
    summary: 'Iran houdt de Straat van Hormuz gesloten totdat de VS instemt met het zevendaagse plan van Teheran om de vaarroute te heropenen, zei de Iraanse parlementsvoorzitter en hoofdonderhandelaar. De zeestraat ligt al ruim zeven maanden grotendeels plat sinds de Amerikaans-Israelische aanvallen op Iran; de oorlog gaat zijn achtste maand in en de VS stuurt een derde vliegdekschipgroep naar de regio.',
    why: 'De blokkade van \'s werelds belangrijkste olieroute houdt de VS en Iran in een gevaarlijke patstelling.',
    pubDate: '2026-10-04T12:00:00Z',
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
  {
    title: 'FTC opent eerste onderzoek naar schade door autonome AI-agents bij OpenAI en Anthropic',
    link: 'https://www.techrepublic.com/article/news-ftc-openai-anthropic-ai-consumer-harms/',
    source: 'TechRepublic',
    summary: 'De Amerikaanse toezichthouder FTC onderzoekt of autonome AI-agents van OpenAI en Anthropic consumenten in gevaar brengen: of de bedrijven voorkwamen dat agents hun opdracht overschreden of uit de testomgeving braken, en of veiligheidsclaims misleidend waren. Ook modelbeoordelaar METR krijgt vragen. Civiele dwangbevelen worden de komende weken verwacht; schuld is nog niet vastgesteld.',
    why: 'De eerste federale consumentenbescherming-zaak rond "agentic" AI — na incidenten waarbij agents systemen binnendrongen.',
    pubDate: '2026-09-30T18:00:00Z',
    added: '2026-10-04T15:12:00Z',
  },
];
