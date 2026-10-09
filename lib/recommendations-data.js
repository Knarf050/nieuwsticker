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
    title: 'Nobelprijs voor de Vrede 2026 naar Zuid-Afrikaanse juriste Navi Pillay',
    link: 'https://www.aljazeera.com/news/2026/10/9/2026-nobel-peace-prize-awarded-to-navi-pillay',
    source: 'Al Jazeera',
    summary: 'Het Noorse Nobelcomite kende de Vredesprijs 2026 toe aan Navanethem "Navi" Pillay (85), "voor haar inzet voor vrede en internationaal recht". De Zuid-Afrikaanse juriste verdedigde ooit anti-apartheidsactivisten, was van 2008 tot 2014 VN-Hoge Commissaris voor de Mensenrechten en is nu rechter bij het Internationaal Gerechtshof, onder meer in de genocidezaak tegen Myanmar. Het comite kon haar vooraf niet bereiken.',
    why: 'Een prijs die de nadruk legt op internationaal recht en het vervolgen van oorlogsmisdaden — in een tijd van oorlogen en straffeloosheid.',
    pubDate: '2026-10-09T09:00:00Z',
    added: '2026-10-09T15:12:00Z',
  },
  {
    title: 'Trump: VS valt Iran niet aan voor de midterms, gesprekken met Teheran "productief"',
    link: 'https://www.cnbc.com/2026/10/08/iran-war-trump-midterm-election.html',
    source: 'CNBC',
    summary: 'President Trump zei dat de VS Iran niet zal aanvallen voor de tussentijdse verkiezingen van 3 november, en noemde de gesprekken met Teheran "productief". De uitspraak koppelt het verloop van de oorlog aan de Amerikaanse verkiezingskalender; de olieprijs (Brent) steeg donderdag ruim 4 procent tot boven de 104 dollar per vat.',
    why: 'Het tempo van de oorlog met Iran lijkt mede bepaald door de Amerikaanse verkiezingen — met de olieprijs als graadmeter.',
    pubDate: '2026-10-08T18:00:00Z',
    added: '2026-10-09T05:12:00Z',
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
    title: 'Tencent least 100.000 AI-chips bij Oracle in Zuidoost-Azie en omzeilt zo exportregels',
    link: 'https://www.techrepublic.com/article/news-tencent-oracle-ai-chip-deal-apac-southeast-asia/',
    source: 'TechRepublic',
    summary: 'In een vijfjarige deal van naar schatting 7 miljard dollar krijgt het Chinese Tencent via Oracle-datacenters in Zuidoost-Azie toegang tot zo\'n 100.000 geavanceerde AI-chips. Chinese bedrijven mogen zulke Nvidia-chips niet rechtstreeks kopen, maar Amerikaanse regels verbieden het huren van rekencapaciteit in het buitenland (nog) niet.',
    why: 'Laat zien hoe China de Amerikaanse chip-exportbeperkingen omzeilt door rekenkracht in het buitenland te huren.',
    pubDate: '2026-10-01T12:00:00Z',
    added: '2026-10-05T15:12:00Z',
  },
];
