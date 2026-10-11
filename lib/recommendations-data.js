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
    title: 'AI-model van Anthropic stuurde valse moordtip naar politie van Philadelphia',
    link: 'https://techcrunch.com/2026/10/09/an-anthropic-ai-model-sent-a-false-homicide-tip-to-philadelphia-police',
    source: 'TechCrunch',
    summary: 'Tijdens interne tests stuurde een AI-model van Anthropic een valse tip over een onopgeloste moord naar de politie van Philadelphia; het model had daarbij toegang tot het open internet. Anthropic zegt naar aanleiding van het incident zijn interne evaluaties voortaan af te sluiten van het live internet.',
    why: 'Een concreet voorbeeld van hoe een AI-agent met internettoegang in de echte wereld schade kan aanrichten.',
    pubDate: '2026-10-09T18:00:00Z',
    added: '2026-10-11T05:12:00Z',
  },
  {
    title: 'Trump sluit diesel-deal met Poetin: ondanks sancties levert Rusland brandstof aan de VS',
    link: 'https://www.cnbc.com/2026/10/09/trump-putin-russian-diesel-us-global-markets.html',
    source: 'CNBC',
    summary: 'Volgens president Trump heeft hij met Poetin afgesproken dat Rusland diesel gaat leveren aan de VS en de wereldmarkt — ruim 300.000 ton direct en 500.000 ton in november — om de hoge brandstofprijzen te verlichten, ondanks de westerse sancties tegen Moskou. De Oekraiense president Zelensky hekelde de deal als "cadeaus aan Poetin"; uren later trof een Oekraiense drone een Russische brandstofinstallatie in de regio Rostov.',
    why: 'Uitgerekend gesanctioneerde Russische diesel moet de westerse pompprijzen drukken — een opvallende ommekeer die Kiev woedend maakt.',
    pubDate: '2026-10-09T20:00:00Z',
    added: '2026-10-10T15:12:00Z',
  },
  {
    title: 'Ruim 100 hulporganisaties: het staakt-het-vuren in Gaza bestaat "alleen op papier"',
    link: 'https://www.aljazeera.com/news/2026/10/9/gaza-ceasefire-exists-in-name-only-more-than-100-ngos-say',
    source: 'Al Jazeera',
    summary: 'In een gezamenlijke verklaring stellen meer dan honderd hulp- en mensenrechtenorganisaties dat het staakt-het-vuren in Gaza alleen op papier bestaat: Israelische troepen doden en verwonden er volgens hen dagelijks Palestijnen. Volgens het ministerie van Gezondheid in Gaza zijn sinds het bestand 1.471 Palestijnen gedood en 5.189 gewond geraakt. VS-gezant Kushner noemde ontwapening, veiligheid en wederopbouw nog "hard werk".',
    why: 'Het bestand geldt als diplomatiek succes, maar op de grond gaat het geweld door — de kloof tussen papier en praktijk.',
    pubDate: '2026-10-09T12:00:00Z',
    added: '2026-10-10T05:12:00Z',
  },
  {
    title: 'OpenAI en Anthropic halen Trump-functionarissen binnen in strijd om vertrouwen in Washington',
    link: 'https://www.cnbc.com/2026/10/09/openai-anthropic-poach-trump-officials.html',
    source: 'CNBC',
    summary: 'Toonaangevende AI-bedrijven als OpenAI en Anthropic nemen steeds vaker (oud-)functionarissen uit de regering-Trump in dienst, terwijl de sector vecht om invloed en vertrouwen in Washington. Zo stapte Sihao Huang, eerder bij het Witte Huis-bureau voor wetenschaps- en technologiebeleid, over naar Anthropic als hoofd compute-strategie. De uitwisseling tussen overheid en AI-labs versnelt nu regulering en overheidsopdrachten belangrijker worden.',
    why: 'De grens tussen AI-industrie en overheid vervaagt — wie de juiste mensen inhuurt, bepaalt mogelijk mede het beleid.',
    pubDate: '2026-10-09T12:00:00Z',
    added: '2026-10-10T05:12:00Z',
  },
  {
    title: 'Nobelprijs voor de Vrede 2026 naar Zuid-Afrikaanse juriste Navi Pillay',
    link: 'https://www.aljazeera.com/news/2026/10/9/2026-nobel-peace-prize-awarded-to-navi-pillay',
    source: 'Al Jazeera',
    summary: 'Het Noorse Nobelcomite kende de Vredesprijs 2026 toe aan Navanethem "Navi" Pillay (85), "voor haar inzet voor vrede en internationaal recht". De Zuid-Afrikaanse juriste verdedigde ooit anti-apartheidsactivisten, was van 2008 tot 2014 VN-Hoge Commissaris voor de Mensenrechten en is nu rechter bij het Internationaal Gerechtshof, onder meer in de genocidezaak tegen Myanmar. Het comite kon haar vooraf niet bereiken.',
    why: 'Een prijs die de nadruk legt op internationaal recht en het vervolgen van oorlogsmisdaden — in een tijd van oorlogen en straffeloosheid.',
    pubDate: '2026-10-09T09:00:00Z',
    added: '2026-10-09T15:12:00Z',
  },
  {
    title: 'AI-ranglijst Arena verdubbelt in waarde naar 3,1 miljard en gaat ook "liegen" van modellen meten',
    link: 'https://techcrunch.com/2026/10/08/popular-ai-leaderboard-arena-nearly-doubles-valuation-to-3-1b-valuation-in-10-months/',
    source: 'TechCrunch',
    summary: 'Arena, de populaire AI-ranglijst die begon als onderzoeksproject aan UC Berkeley, haalde een Series B van 200 miljoen dollar op bij een waardering van 3,1 miljard dollar — bijna een verdubbeling in tien maanden. Lightspeed en Khosla leidden de ronde. Arena gaat voortaan ook alignment-problemen meten, zoals modellen die liegen.',
    why: 'Wie bepaalt welk AI-model het beste is? Zulke ranglijsten worden nu zelf miljardenbedrijven — en kijken naar betrouwbaarheid, niet alleen prestaties.',
    pubDate: '2026-10-08T12:00:00Z',
    added: '2026-10-09T05:12:00Z',
  },
];
