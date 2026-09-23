/* Configuratie en beginvragen voor Triviant. Net als bij Nieuwsgeheugen een los
   bestand, zodat app-logica en inhoud gescheiden blijven. Alles lokaal, geen
   externe dienst nodig om te kunnen spelen. */

window.TRIVIANT_CONFIG = {
  appNaam: 'Triviant',
  tagline: 'De krant als bordspel',

  // Precies 6 categorieën — net als de taartpunten van het bordspel.
  categorieen: [
    { id: 'binnenland', naam: 'Binnenland & Politiek', icon: '🏛️', kleur: '#ff4b4b' },
    { id: 'buitenland', naam: 'Buitenland',            icon: '🌍', kleur: '#ce82ff' },
    { id: 'economie',   naam: 'Economie',               icon: '💶', kleur: '#ff9600' },
    { id: 'wetenschap', naam: 'Wetenschap & Natuur',    icon: '🔬', kleur: '#58cc02' },
    { id: 'cultuur',    naam: 'Cultuur & Media',        icon: '🎭', kleur: '#ffc800' },
    { id: 'sport',      naam: 'Sport & Overig',         icon: '⚽', kleur: '#1cb0f6' },
  ],

  // Eerste editie: NRC Handelsblad van 12 september 2026 (de krant uit de bijlage).
  // Zo toont de app meteen een gevulde vragenbank en is het bordspel direct speelbaar.
  seedEditie: {
    datum: '2026-09-12',
    titel: 'NRC Handelsblad — 12 september 2026',
    vragen: [
      // --- Binnenland & Politiek ---
      {
        vraag: 'Uit welke drie partijen bestaat het kabinet-Jetten?',
        opties: ['D66, VVD en CDA', 'D66, GroenLinks-PvdA en CDA', 'VVD, NSC en BBB', 'D66, VVD en NSC'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'makkelijk',
        uitleg: 'Het kabinet-Jetten heeft geen meerderheid in Eerste of Tweede Kamer — de oppositie kan in theorie alles wegstemmen.',
        bron: 'Niemand heeft het nu écht voor het zeggen in Den Haag',
      },
      {
        vraag: 'Welke gebeurtenis test deze week de machtsbalans tussen coalitie en oppositie in Den Haag?',
        opties: ['Prinsjesdag en de Algemene Politieke Beschouwingen', 'Een referendum over Europa', 'De val van het kabinet', 'Verkiezingen voor de Eerste Kamer'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Zonder steun voor de Rijksbegroting heeft het kabinet volgens het artikel "geen bestaansrecht".',
        bron: 'Niemand heeft het nu écht voor het zeggen in Den Haag',
      },
      {
        vraag: 'Welke minister maakte de verlaging van het "vuldoel" voor de gasopslag bekend?',
        opties: ['Stientje van Veldhoven', 'Sophie Hermans', 'Rob Jetten', 'Eelco Heinen'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Van Veldhoven (D66, Klimaat en Groene Groei) meldde het per Kamerbrief.',
        bron: 'Kabinet verlaagt ‘vuldoel’ gasopslag',
      },
      {
        vraag: 'Van hoeveel naar hoeveel procent verlaagde het kabinet de vuldoelstelling voor de gasopslag deze winter?',
        opties: ['Van 80 naar 64 procent', 'Van 90 naar 70 procent', 'Van 80 naar 50 procent', 'Van 70 naar 60 procent'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Begin september was de wintervoorraad pas voor 51 procent gevuld.',
        bron: 'Kabinet verlaagt ‘vuldoel’ gasopslag',
      },
      {
        vraag: 'Welke krant onthulde dat premier Rob Jetten AI gebruikt voor zijn politieke teksten?',
        opties: ['de Volkskrant', 'NRC', 'Trouw', 'Het Financieele Dagblad'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'makkelijk',
        uitleg: 'De vraag die daarna opdoemt: welke politicus is nog helemaal zichzelf in het tijdperk van generatieve AI?',
        bron: 'Dus Jetten gebruikt AI. Hoe erg is dat?',
      },

      // --- Buitenland ---
      {
        vraag: 'Welke rebellenbeweging bedreigt met een opmars in Jemen de olie-export van Saoedi-Arabië?',
        opties: ['De Houthi’s', 'Hezbollah', 'Al-Qaida', 'IS'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'makkelijk',
        uitleg: 'De Houthi’s hebben de facto de macht in het noordwesten van Jemen.',
        bron: 'Opmars Houthi’s bedreigt Saoedische olie-export',
      },
      {
        vraag: 'Welke havenstad aan de Rode Zee namen de Houthi’s in, waardoor de dieselprijzen naar een record stegen?',
        opties: ['Mokka', 'Aden', 'Hodeidah', 'Sana’a'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'Mokka had ooit een monopolie op de koffiehandel — nu is het weer strategisch belangrijk, vlak bij de zee-engte Bab al-Mandeb.',
        bron: 'Opmars Houthi’s bedreigt Saoedische olie-export',
      },
      {
        vraag: 'In welke Duitse deelstaat won de AfD de verkiezingen, waarna migrantenondernemers begonnen te vertrekken?',
        opties: ['Saksen-Anhalt', 'Beieren', 'Noordrijn-Westfalen', 'Saarland'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Al vóór de deelstaatverkiezingen vertrokken wekelijks al zo’n tien migrantenfamilies uit de regio.',
        bron: 'Migrant wordt wakker in AfD-land',
      },
      {
        vraag: 'Wie is naast Ulrich Siegmund de partijvoorzitter van de AfD?',
        opties: ['Alice Weidel', 'Sahra Wagenknecht', 'Angela Merkel', 'Friedrich Merz'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Na de winst in Saksen-Anhalt is de ambitie van de AfD extra duidelijk: een machtsovername in Berlijn.',
        bron: 'Alice Weidel en Ulrich Siegmund',
      },
      {
        vraag: 'Hoeveel jaar was het op 11 september 2026 precies geleden dat de aanslagen op de Twin Towers plaatsvonden?',
        opties: ['25 jaar', '20 jaar', '30 jaar', '15 jaar'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'makkelijk',
        uitleg: 'Op 11 september 2001 vielen 2.977 doden bij de aanslagen in de VS.',
        bron: 'De keiharde reactie op 9/11 heeft de wereld er niet veiliger op gemaakt',
      },
      {
        vraag: 'Hoeveel doden vielen er bij de aanslagen van 11 september 2001?',
        opties: ['2.977', '1.500', '5.000', '3.500'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'De laatste keer dat de VS zo hard op eigen grondgebied werden geraakt was Pearl Harbor in 1941.',
        bron: 'De keiharde reactie op 9/11 heeft de wereld er niet veiliger op gemaakt',
      },

      // --- Economie ---
      {
        vraag: 'Met welk staalbedrijf wil het kabinet een deal sluiten over de vergroening van de fabriek in IJmuiden?',
        opties: ['Tata Steel', 'ArcelorMittal', 'ThyssenKrupp', 'Nucor'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'makkelijk',
        uitleg: 'De afspraken moeten ook gezondheidswinst opleveren voor omwonenden van de fabriek in Velsen-Noord.',
        bron: 'Twijfel groeit: is een deal met Tata Steel over vergroening wel mogelijk?',
      },
      {
        vraag: 'Hoe hoog is de Nederlandse staatsschuld ongeveer als percentage van het bbp, volgens het CPB?',
        opties: ['Minder dan 45 procent', 'Meer dan 90 procent', 'Rond de 60 procent', 'Meer dan 120 procent'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'gemiddeld',
        uitleg: 'Dat is opvallend laag, ondanks het publieke doemdenken over de Nederlandse economie.',
        bron: 'Glans én erosie – de paradox van de Nederlandse economie',
      },
      {
        vraag: 'Welk Europees betaalsysteem moet straks iDeal gaan vervangen?',
        opties: ['Wero', 'Swish', 'Bizum', 'Twint'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'gemiddeld',
        uitleg: 'Winkeliers zijn minder blij: Wero rekent een percentage van het aankoopbedrag in plaats van een vast, laag tarief.',
        bron: 'Pay European, zegt Wero. Maar wat kost dat?',
      },
      {
        vraag: 'Op initiatief van welke Franse president vond de ruimtevaarttop in Parijs plaats?',
        opties: ['Emmanuel Macron', 'Gabriel Attal', 'Nicolas Sarkozy', 'François Hollande'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'makkelijk',
        uitleg: 'Amerikaanse bedrijven bleven weg van de top, onder druk van Washington.',
        bron: 'Ruimtevaarttop Parijs moet EU lanceren als wereldspeler',
      },
      {
        vraag: 'Welke belastingregel voor kleine bierbrouwerijen wil het kabinet volgens de uitgelekte Miljoenennota schrappen?',
        opties: ['Het kleinbrouwerstarief', 'De statiegeldregeling', 'De suikertaks', 'De horecavrijstelling'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Sinds 1992 betalen kleine brouwerijen minder accijns dan grote concurrenten zoals Heineken.',
        bron: '‘Het kabinet moet de compensatie voor kleine brouwers juist uitbreiden’',
      },

      // --- Wetenschap & Natuur ---
      {
        vraag: 'Welk huisdier komt in Nederland het meest voor: de kat of de hond?',
        opties: ['De kat (3,2 miljoen)', 'De hond (3,2 miljoen)', 'Ze zijn precies gelijk in aantal', 'De vis'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'makkelijk',
        uitleg: 'Er zijn 1,8 miljoen honden — toch is er veel minder gedragsonderzoek gedaan naar katten dan naar honden.',
        bron: 'Probeer een kat maar eens te lezen',
      },
      {
        vraag: 'Welk bedrijf uit Groningen ontwikkelt een techniek om het waterverbruik bij lithiumwinning te verminderen?',
        opties: ['Ioniqs', 'Lithium Werks', 'Battolyser', 'Nouryon'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'In Chili rijden soms dieseltrucks door de woestijn om lithiumraffinaderijen van schoon water te voorzien.',
        bron: 'Om lithium te winnen is veel water nodig. Kan het ook met minder?',
      },
      {
        vraag: 'Een appel is botanisch gezien geen echte vrucht, maar een...?',
        opties: ['Schijnvrucht', 'Peulvrucht', 'Steenvrucht', 'Bes'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'gemiddeld',
        uitleg: 'Het sappige appelweefsel is de uitgegroeide bloembodem; het klokhuis is het eigenlijke vruchtbeginsel.',
        bron: 'Hoe groeit een appel?',
      },
      {
        vraag: 'Op welk Indonesisch eiland vonden archeologen bewijs dat jager-verzamelaars al 25.000 jaar geleden op betelnoten kauwden?',
        opties: ['Sulawesi', 'Java', 'Sumatra', 'Borneo'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Sporen van de stof arecoline werden gevonden in het gebit van twee zeer oude skeletten.',
        bron: 'Spacen in het pleistoceen? Bewijs voor ‘drugsgebruik’ bij jager-verzamelaars',
      },
      {
        vraag: 'Welke Beatles-songtitel komt het vaakst terug in titels van wetenschappelijke publicaties?',
        opties: ['The Long and Winding Road', 'Let It Be', 'Here, There and Everywhere', 'Yesterday'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Blijkbaar een geliefde beeldspraak van onderzoekers om noeste academische arbeid mee te illustreren.',
        bron: 'The Beatles zijn Here, There and Everywhere',
      },
      {
        vraag: 'Welk Amerikaans AI-bedrijf staat centraal in het verhaal over agents die ‘samenzweren’ tegen hun makers?',
        opties: ['OpenAI', 'Anthropic', 'Google DeepMind', 'Meta AI'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'gemiddeld',
        uitleg: 'De agents gaven zichzelf namen als PHASEONE 10841 en namen zelfs een server van Hugging Face over.',
        bron: 'De machtsovername: hoe AI-agents ‘samenzweren’ tegen hun makers',
      },

      // --- Cultuur & Media ---
      {
        vraag: 'Welke Nederlandse fotografe staat centraal in de expositie ‘De bevrijde camera’ in Fotomuseum Den Haag?',
        opties: ['Eva Besnyö', 'Ed van der Elsken', 'Rineke Dijkstra', 'Erwin Olaf'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'De expositie is gebaseerd op 431 afdrukken die Fotomuseum Den Haag van Besnyö zelf in bezit heeft.',
        bron: 'Instinct voor compositie én sociale gevoeligheid',
      },
      {
        vraag: 'Tot welke groep fotokunstenaars die in de jaren twintig en dertig doorbrak, behoorde Eva Besnyö?',
        opties: ['Hongaarse fotografen', 'Duitse Bauhaus-fotografen', 'Franse surrealisten', 'Russische constructivisten'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'moeilijk',
        uitleg: 'Onder anderen André Kertész en Robert Capa behoorden tot diezelfde generatie Hongaarse fotografen.',
        bron: 'Instinct voor compositie én sociale gevoeligheid',
      },
      {
        vraag: 'Het Tapijt van Bayeux, nu te zien in Londen, beeldt de Slag bij Hastings uit welk jaar uit?',
        opties: ['1066', '1215', '1415', '800'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'makkelijk',
        uitleg: 'Het is voor het eerst sinds het bijna duizend jaar geleden gemaakt werd dat het tapijt terug is in Engeland.',
        bron: '‘Doorschuifelen alstublieft. Slow and steady, zo zien we het graag’',
      },
      {
        vraag: 'Hoeveel minuten krijgen bezoekers om het Tapijt van Bayeux in het British Museum te bekijken?',
        opties: ['Veertig minuten', 'Tien minuten', 'Twee uur', 'Vijftien minuten'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'De tentoonstelling was al binnen twee dagen uitverkocht — "Bayeux-mania", noemde een curator het.',
        bron: '‘Doorschuifelen alstublieft. Slow and steady, zo zien we het graag’',
      },

      // --- Sport & Overig ---
      {
        vraag: 'Na hoeveel jaar in het profpeloton stopt wielrenner Steven Kruijswijk als beroepsrenner?',
        opties: ['Zeventien jaar', 'Tien jaar', 'Twintig jaar', 'Vijftien jaar'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'Kruijswijk reed in zijn carrière zo’n 170.000 kilometer koers — meer dan vier keer de wereld rond.',
        bron: '‘Het wielrennen heeft me gehard’',
      },
      {
        vraag: 'Met welke meerdaagse wedstrijd sluit Steven Kruijswijk zijn carrière af?',
        opties: ['De Vuelta a España', 'De Tour de France', 'De Giro d’Italia', 'Parijs-Roubaix'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'makkelijk',
        uitleg: 'Zijn laatste wedstrijd begint op 150 meter van zijn huis in Monaco.',
        bron: '‘Het wielrennen heeft me gehard’',
      },
      {
        vraag: 'Marc Overmars moest om gezondheidsredenen zijn functie neerleggen bij welke Belgische club?',
        opties: ['Royal Antwerp', 'Anderlecht', 'Club Brugge', 'Standard Luik'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'makkelijk',
        uitleg: 'Overmars vertrok in 2022 bij Ajax na berichtgeving over grensoverschrijdend gedrag.',
        bron: 'Overmars',
      },
      {
        vraag: 'De overleden Jerry de Jong is de vader van welke directeur topvoetbal van de KNVB?',
        opties: ['Nigel de Jong', 'Frenkie de Jong', 'Virgil van Dijk', 'Memphis Depay'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'Nigel de Jong, 81-voudig international, was destijds met het Nederlands elftal in de Verenigde Staten.',
        bron: 'Goedlachse voetballer met een krasje',
      },
      {
        vraag: 'Van welke club naar welke club maakte Jerry de Jong in 1989 zijn transfer, het hoogtepunt van zijn carrière?',
        opties: ['Van Heerenveen naar PSV', 'Van Ajax naar Feyenoord', 'Van PSV naar Ajax', 'Van FC Twente naar PSV'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'moeilijk',
        uitleg: 'Hans van Breukelen was tot 1994 zijn ploeggenoot bij PSV in Eindhoven.',
        bron: 'Goedlachse voetballer met een krasje',
      },

      // --- extra vragen (tweede lichting uit dezelfde editie, tegen herhaling in het potje) ---

      // Binnenland & Politiek
      {
        vraag: 'Welke Europese afspraak dwingt de IND om asielprocedures te versnellen?',
        opties: ['Het Europese migratiepact', 'Het Verdrag van Schengen', 'De Vluchtelingenconventie van Genève', 'Het Verdrag van Dublin'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Sinds 12 juni is het pact van kracht; de IND wil er "de beste dienstverlener" van Nederland mee worden.',
        bron: 'IND voert het tempo op',
      },
      {
        vraag: 'Hoeveel procent efficiënter wil de IND worden volgens de eigen beleidsstukken?',
        opties: ['25 procent', '10 procent', '50 procent', '15 procent'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Voorheen verplichte stappen in de asielprocedure zijn afgeschaft om tijd te winnen.',
        bron: 'IND voert het tempo op',
      },
      {
        vraag: 'Bij welk ministerie hoort de Arbeidsinspectie, die kritiek kreeg om de titel van een onderzoeksrapport?',
        opties: ['Sociale Zaken en Werkgelegenheid', 'Justitie en Veiligheid', 'Binnenlandse Zaken', 'Financiën'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Het rapport heette ‘Babi Pangang met bami’ — een rechter noemde die titel al ongepast.',
        bron: '‘Babi Pangang met bami’: hoe de overheid racisme niet herkent',
      },
      {
        vraag: 'Welke wet wordt in een opiniestuk over het geweld in Overasselt ‘hopeloos achterhaald’ genoemd?',
        opties: ['De Opiumwet', 'De Drank- en Horecawet', 'De Wet publieke gezondheid', 'De Wet wapens en munitie'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'De wet maakt onderscheid tussen legale drugs als alcohol en illegale drugs als xtc.',
        bron: 'Het geweld in Overasselt begint bij de Opiumwet',
      },
      {
        vraag: 'Welke publieke omroep raakte in opspraak na het uitzenden van een fragment van een Hitler-toespraak?',
        opties: ['Ongehoord Nederland', 'WNL', 'PowNed', 'Ongehoord Nieuws'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'makkelijk',
        uitleg: 'Pas nadat het fragment massaal werd gedeeld op X ontstond er grote ophef in Hilversum en Den Haag.',
        bron: 'Hoe Ongehoord Nederland al het krediet verspeelde',
      },
      {
        vraag: 'Wie is de hoofdredacteur van Ongehoord Nederland die zich kon vinden in delen van Hitlers ‘strijd tegen globalisering’?',
        opties: ['Joost Niemöller', 'Arlette Adriani', 'Peter Vlemmix', 'Raisa Blommestijn'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Algemeen directeur Peter Vlemmix probeerde de gemoederen daarna nog te bedaren.',
        bron: 'Hoe Ongehoord Nederland al het krediet verspeelde',
      },
      {
        vraag: 'Columnist Marike Stellinga stelt dat Nederland vermogen relatief laag belast en — wat — relatief hoog?',
        opties: ['Werken', 'Consumeren', 'Erven', 'Wonen'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Dat maakt rentenieren en investeren in huizen aantrekkelijker dan investeren in scholing en carrière.',
        bron: 'Vermogen hoog belast? Ja, als je door een rietje kijkt',
      },

      // Buitenland
      {
        vraag: 'Sinds welk jaartal is Amerika volgens columnist Caroline de Gruyter de enige grootmacht in Europa geweest?',
        opties: ['1945', '1989', '1991', '1957'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Na de val van de Muur en het uiteenvallen van de Sovjet-Unie was Amerika zelfs dominant in heel Europa.',
        bron: 'Keep the Germans in',
      },
      {
        vraag: 'Welk land steekt tussen nu en 2029 meer geld in defensie dan Frankrijk en Engeland samen?',
        opties: ['Duitsland', 'Polen', 'Italië', 'Spanje'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'Dat brengt Duitsland voor het eerst sinds 1945 ook militair in een Europese leidersrol.',
        bron: 'Keep the Germans in',
      },
      {
        vraag: 'Rechter Kimberly Prost van het Internationaal Strafhof staat op de Amerikaanse sanctielijst. Uit welk land komt ze?',
        opties: ['Canada', 'Australië', 'Zuid-Afrika', 'Nieuw-Zeeland'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'makkelijk',
        uitleg: 'Door de sancties werd zelfs haar Nederlandse creditcard binnen een paar dagen geblokkeerd.',
        bron: 'Dat je op dezelfde lijst staat als de misdadigers is moeilijk te verwerken',
      },
      {
        vraag: 'Bij welk tribunaal was Kimberly Prost eerder rechter, voordat ze bij het Internationaal Strafhof kwam?',
        opties: ['Het Joegoslavië Tribunaal', 'Het Rwanda Tribunaal', 'Het Neurenberg Tribunaal', 'Het Sierra Leone Tribunaal'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'Ze begon haar carrière in 1982 als officier van justitie in Winnipeg, Canada.',
        bron: 'Dat je op dezelfde lijst staat als de misdadigers is moeilijk te verwerken',
      },

      // Economie
      {
        vraag: 'In welke Indonesische stad lunchen kantoormedewerkers voor één euro in een parkeergarage, vijf verdiepingen onder de grond?',
        opties: ['Jakarta', 'Bangkok', 'Manila', 'Kuala Lumpur'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'makkelijk',
        uitleg: 'De warung bevindt zich onder een luxe kantoorgebouw van 270 meter hoog in het zakenhart van de stad.',
        bron: 'In garages onder dure flats in Jakarta wordt geluncht voor één euro per gerecht',
      },
      {
        vraag: 'Hoeveel verdiepingen onder de grond bevindt zich de warung van Lidya Wahyuwidyati in het gebouw The Energy?',
        opties: ['Vijf', 'Twee', 'Acht', 'Drie'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Boven de garages zitten een wellnesscentrum en een chic Frans restaurant.',
        bron: 'In garages onder dure flats in Jakarta wordt geluncht voor één euro per gerecht',
      },
      {
        vraag: 'De discussie over vermogensbelasting werd deze zomer op links volgens columnist Marike Stellinga verengd tot welke uitspraak?',
        opties: ['‘De allerrijksten worden ontzien’', '‘Belasting moet omhoog’', '‘Vermogen is diefstal’', '‘Erfenissen afschaffen’'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Op rechts werd het juist verengd tot ‘waarom moeten de belastingen altijd omhoog?’',
        bron: 'Vermogen hoog belast? Ja, als je door een rietje kijkt',
      },
      {
        vraag: 'Tot hoeveel hectoliter bier per jaar mag een brouwerij maximaal produceren om als ‘kleine brouwerij’ te gelden?',
        opties: ['200.000 hectoliter', '500.000 hectoliter', '50.000 hectoliter', '1 miljoen hectoliter'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Branchevereniging Craft komt op voor deze kleine brouwerijen, waaronder Pronck uit Leiden.',
        bron: '‘Het kabinet moet de compensatie voor kleine brouwers juist uitbreiden’',
      },
      {
        vraag: 'Bij welk gebouw van Tata Steel demonstreerden werknemers tegen bezuinigingsplannen op sociale zekerheid?',
        opties: ['Het opleidingscentrum in Velsen-Noord', 'Het gemeentehuis van Velsen', 'De Hoogovens-poort', 'Het stationsplein van IJmuiden'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'gemiddeld',
        uitleg: 'OR-voorzitter Cinta Groos riep vanaf het podium: "De tijd dringt."',
        bron: 'Twijfel groeit: is een deal met Tata Steel over vergroening wel mogelijk?',
      },

      // Wetenschap & Natuur
      {
        vraag: 'Tot welke hoogte leeft de Himalayamarmot maximaal, volgens onderzoek van Wageningse hoogleraar Herbert Prins?',
        opties: ['Circa 5.500 meter', 'Circa 3.000 meter', 'Circa 7.000 meter', 'Circa 2.000 meter'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Daarmee is het een van de hoogst levende zoogdieren op aarde.',
        bron: 'Holenbibberaar / Himalayamarmot / Marmota himalayana',
      },
      {
        vraag: 'Waarom trotseren Himalayamarmotten overdag het risico van roofdieren als sneeuwluipaarden en adelaars?',
        opties: ['Om op te warmen in de zon', 'Om voedsel te zoeken', 'Om te paren', 'Om hun hol te verplaatsen'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'gemiddeld',
        uitleg: 'In hun holen kan het flink koud worden — hoe hoger in de bergen, hoe kouder.',
        bron: 'Holenbibberaar / Himalayamarmot / Marmota himalayana',
      },
      {
        vraag: 'Uit een Amsterdams temperatuuronderzoek van wetenschapsjournalist Karel Knip bleek dat bomen de straattemperatuur...?',
        opties: ['Nauwelijks beïnvloeden', 'Met 10 graden verlagen', 'Verdubbelen', 'Alleen ’s nachts verlagen'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'gemiddeld',
        uitleg: 'De gemeten temperaturen in beschaduwde en onbeschaduwde straten verschilden nauwelijks.',
        bron: 'De kille waarheid van de groene straten',
      },
      {
        vraag: 'Welke Amsterdamse straat wijzen AI-machines aan als de meest ‘lommerrijke’ straat van de stad?',
        opties: ['De Lomanstraat', 'De Jacob Obrechtstraat', 'De Apollolaan', 'De Bredeweg'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'De straat heet zo omdat makelaars hem zo noemen — echt veel schaduw geven de platanen er niet.',
        bron: 'De kille waarheid van de groene straten',
      },
      {
        vraag: 'Bij welk percentage van de jongeren met een depressie komt die later in het leven nog eens terug, volgens onderzoek van Wilma Wentholt?',
        opties: ['70 tot 80 procent', '30 tot 40 procent', '90 tot 100 procent', '50 procent'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'De helft van alle depressies begint al tijdens de adolescentie.',
        bron: '‘Verplaats je in je kind als het depressief is’',
      },

      // Cultuur & Media
      {
        vraag: 'Welke Nederlandse schrijfster is het onderwerp van de column ‘Connie Palmen en ik’, met haar roman Johnnie Walker?',
        opties: ['Connie Palmen', 'Renate Dorrestein', 'Marion Bloem', 'Anna Enquist'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'makkelijk',
        uitleg: 'Palmen liet weten dat moederschap en schrijverschap voor haar niet goed te combineren zijn.',
        bron: 'Connie Palmen en ik',
      },
      {
        vraag: 'In welke stad speelt het essay ‘Rio: een liefdesverklaring aan mijn stad’ van correspondent Nina Jurna?',
        opties: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Brasília'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'makkelijk',
        uitleg: 'Jurna werd er al verliefd op tijdens een kort bezoek in 2008.',
        bron: 'Rio: een liefdesverklaring aan mijn stad',
      },
      {
        vraag: 'Vanuit welk land vertrok Nina Jurna in 2011 naar Rio de Janeiro?',
        opties: ['Suriname', 'Nederland', 'Curaçao', 'Aruba'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'Vanuit het geïsoleerde Suriname was haar droom om Zuid-Amerika-correspondent te worden moeilijk te realiseren.',
        bron: 'Rio: een liefdesverklaring aan mijn stad',
      },
      {
        vraag: 'Chef Raymond Prinsen van Café La Tête kookte twaalf jaar lang een Michelinster bij welk restaurant?',
        opties: ['De Stenen Tafel', 'De Kas', 'Bord’Eau', 'Librije'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'moeilijk',
        uitleg: 'Dat was in Borculo — in 2011 gaf hij de sterrenkeuken op omdat de lol ervan af was.',
        bron: 'Klassiek bistro-eten met Michelin-raffinement',
      },
      {
        vraag: 'Wie is de gastvrouw van Café La Tête in Lochem, de vrouw van chef Raymond Prinsen?',
        opties: ['Margriet Smaal', 'Janneke Vreugdenhil', 'Nina Jurna', 'Sarah Sluimer'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'moeilijk',
        uitleg: 'Het restaurant zit in een pand met Jugendstil-stickers en een marmeren bar.',
        bron: 'Klassiek bistro-eten met Michelin-raffinement',
      },

      // Sport & Overig
      {
        vraag: 'Welke Nederlandse schaakster wil grootmeester worden en werd derde op het WK blitz?',
        opties: ['Eline Roebers', 'Anish Giri', 'Judit Polgár', 'Fiona Sieber'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'moeilijk',
        uitleg: 'Een maand na het WK blitz won ze ook het EK snelschaken.',
        bron: 'Ze wil grootmeester worden, en dat is ‘heel realistisch’',
      },
      {
        vraag: 'Met welk handelshuis wordt schaakster Eline Roebers gesponsord?',
        opties: ['Optiver', 'ASML', 'ING', 'Booking.com'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'moeilijk',
        uitleg: 'Ze verblijft gemiddeld twee derde van het jaar in het buitenland voor toernooien.',
        bron: 'Ze wil grootmeester worden, en dat is ‘heel realistisch’',
      },
      {
        vraag: 'Welke titel voert Eline Roebers sinds 2022, de hoogste rang onder grootmeester?',
        opties: ['Internationaal meester', 'FIDE-meester', 'Kandidaat-meester', 'Grootmeester'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'Haar vader Jan is zelf ‘FIDE-meester’, de op twee na hoogste titel.',
        bron: 'Ze wil grootmeester worden, en dat is ‘heel realistisch’',
      },
      {
        vraag: 'Volgens columnist Bas van Putten is de fiets in vergelijking met de auto vaak...?',
        opties: ['Praktischer, sneller en schoner', 'Alleen goedkoper', 'Alleen trager maar veiliger', 'Alleen geschikt voor korte ritten'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'Hij stapt daarom voortaan ook op de fiets, na jarenlang auto’s getest te hebben.',
        bron: 'De fietser is de nieuwe top-aap op de apenrots',
      },

      // --- derde lichting (extra vragen uit dezelfde editie, tegen herhaling in het potje) ---

      // Binnenland & Politiek
      {
        vraag: 'In welke stad wonen Dave en Jan Willem, die hun dochter Lot via een draagmoeder kregen?',
        opties: ['Enkhuizen', 'Hoorn', 'Alkmaar', 'Edam'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Ze wonen in een tien jaar oud huis, omringd door oude en pittoreske huizen in het centrum.',
        bron: '‘Een van ons is de biologische vader, maar we weten niet wie’',
      },
      {
        vraag: 'Hoe heet de draagmoeder die Dave en Jan Willem hielp aan hun dochter Lot?',
        opties: ['Kim', 'Lot', 'Sanne', 'Fleur'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Kim was al alleenstaande moeder van twee kinderen en deed het uit liefde voor de medemens, zonder er geld voor te krijgen.',
        bron: '‘Een van ons is de biologische vader, maar we weten niet wie’',
      },
      {
        vraag: 'Uit het nieuwste PISA-rapport blijkt dat de leesvaardigheid van Nederlandse vijftienjarigen...?',
        opties: ['Hard gedaald is', 'Gelijk gebleven is', 'Flink verbeterd is', 'Alleen op het vwo gedaald is'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Nederlandse jongeren waren ooit koploper in lezen, maar scoren nu onder het gemiddelde van alle deelnemende landen.',
        bron: 'Vijftienjarigen lezen heus nog wel, maar dan graag een boek met ‘een beetje actie’',
      },
      {
        vraag: 'Ongeveer hoeveel op de tien Nederlandse vijftienjarigen halen het meest basale leesniveau niet, volgens het PISA-onderzoek?',
        opties: ['Vier', 'Eén', 'Zeven', 'Twee'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Op de beroepsgerichte leerweg van het vmbo dreigt dat zelfs voor driekwart van de leerlingen.',
        bron: 'Vijftienjarigen lezen heus nog wel, maar dan graag een boek met ‘een beetje actie’',
      },
      {
        vraag: 'Welke minister schreef het voorwoord bij de uitgelekte Miljoenennota, met een oproep aan de oppositie om samen te werken?',
        opties: ['Eelco Heinen', 'Rob Jetten', 'Sophie Hermans', 'Stientje van Veldhoven'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Heinen (Financiën, VVD) stelt dat Nederland grote veranderingen aankan als het zich rond een gemeenschappelijk doel verenigt.',
        bron: 'Voorwoord Miljoenennota',
      },
      {
        vraag: 'Bij welk schooltype dreigt volgens het PISA-onderzoek voor de meeste leerlingen laaggeletterdheid?',
        opties: ['De beroepsgerichte leerweg van het vmbo', 'Het vwo', 'De havo', 'Het gymnasium'],
        antwoordIndex: 0, categorie: 'binnenland', moeilijkheid: 'moeilijk',
        uitleg: 'Toch is de overlap tussen schoolniveaus groot: de beste vmbo’ers lezen beter dan de zwakste vwo’ers.',
        bron: 'Vijftienjarigen lezen heus nog wel, maar dan graag een boek met ‘een beetje actie’',
      },

      // Buitenland
      {
        vraag: 'Welke Afghaanse president waarschuwde in 1992 al dat zijn land het centrum van terrorisme zou worden?',
        opties: ['Mohammed Najibullah', 'Hamid Karzai', 'Ashraf Ghani', 'Babrak Karmal'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'Najibullah werd in 1996 bij de verovering van Kabul door de Taliban gevangengenomen, gemarteld en geëxecuteerd.',
        bron: 'De geschiedenis slaat niemand over',
      },
      {
        vraag: 'Hoeveel doden vielen er wereldwijd minstens na 9/11, volgens een analyse van het Cost of War-project?',
        opties: ['940.000', '90.000', '2,5 miljoen', '300.000'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'De doden vielen onder meer in Afghanistan, Irak, Jemen, Pakistan en Somalië.',
        bron: 'De geschiedenis slaat niemand over',
      },
      {
        vraag: 'Met welke marteltechniek werd Al-Qaida-kopstuk Khalid Sheikh Mohammed door de CIA in Polen verhoord?',
        opties: ['Waterboarding', 'Slaapdeprivatie', 'Elektroshocks', 'Onderdompeling in ijswater'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'gemiddeld',
        uitleg: 'Vastgebonden op een plank kreeg hij water in zijn mond gegoten, wat hem het gevoel gaf te verdrinken.',
        bron: 'VS leren alsnog hun les: martelen is niet alleen illegaal en immoreel, het is ook dom',
      },
      {
        vraag: 'Op welke marinebasis wordt Khalid Sheikh Mohammed sinds 2006 vastgehouden?',
        opties: ['Guantánamo Bay', 'Ramstein', 'Diego Garcia', 'Bagram'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'makkelijk',
        uitleg: 'Daarvoor werd hij drie jaar vastgehouden in geheime ‘black sites’ in Azië en Europa.',
        bron: 'VS leren alsnog hun les: martelen is niet alleen illegaal en immoreel, het is ook dom',
      },
      {
        vraag: 'Hoe lang is de DMZ, de gedemilitariseerde bufferzone tussen Noord- en Zuid-Korea, ongeveer?',
        opties: ['248 kilometer', '60 kilometer', '500 kilometer', '120 kilometer'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'De zone is ongeveer vier kilometer breed en dient als buffer tussen de twee landen.',
        bron: 'De beste gids die ik ooit heb gehad',
      },
      {
        vraag: 'Hoelang duurde de opleiding van de Zuid-Koreaanse gids Gabby, om bezoekers door de geschiedenis van haar land te loodsen?',
        opties: ['Twee jaar', 'Zes maanden', 'Vijf jaar', 'Drie maanden'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'Ze waarschuwde toeristen zelfs voor een propagandadorp dat Noord-Korea liet bouwen om welvaart te veinzen.',
        bron: 'De beste gids die ik ooit heb gehad',
      },
      {
        vraag: 'Welke Nederlandse hoogleraar en terrorisme-onderzoeker schrijft dat we 25 jaar na 9/11 nog steeds te snel clichés omarmen na een politieke aardverschuiving?',
        opties: ['Beatrice de Graaf', 'Caroline de Gruyter', 'Marike Stellinga', 'Floor Rusman'],
        antwoordIndex: 0, categorie: 'buitenland', moeilijkheid: 'moeilijk',
        uitleg: 'Ze noemt als voorbeeld de verklaringen voor de verkiezingswinst van de AfD in Saksen-Anhalt.',
        bron: 'Vertel je verhaal of word opgeslokt',
      },

      // Economie
      {
        vraag: 'Hoeveel jaar moet een tong (vis) gemiddeld overleven om uit te groeien tot een grote ‘pondstong’, volgens marien-ecoloog Kees Camphuysen?',
        opties: ['Achttien jaar', 'Vijf jaar', 'Twee jaar', 'Dertig jaar'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Chef-kok Jef Schuur gokte zelf op vijf jaar en schrok van het juiste antwoord.',
        bron: 'Texelse oesters, vis en lam op je bord - hoe lang nog?',
      },
      {
        vraag: 'Hoeveel andere vissen gaan er gemiddeld als bijvangst overboord, voor elke grote vis die aan land wordt gebracht?',
        opties: ['34', '10', '100', '5'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Bovendien staat elke kilo kabeljauw gelijk aan tien kilo prooidier dat die vis zelf heeft opgegeten.',
        bron: 'Texelse oesters, vis en lam op je bord - hoe lang nog?',
      },
      {
        vraag: 'In welk Jakartaanse zakendistrict staat het gebouw The Energy, waaronder zich de ondergrondse warungs bevinden?',
        opties: ['Sudirman Central Business District (SCBD)', 'Menteng', 'Kemang', 'Kuningan'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Het gebouw is 270 meter hoog en huisvest naast kantoren ook appartementen, een wellnesscentrum en een chic Frans restaurant.',
        bron: 'In garages onder dure flats in Jakarta wordt geluncht voor één euro per gerecht',
      },
      {
        vraag: 'Hoe heet de warung-eigenaresse die diep onder het gebouw The Energy in Jakarta rijstspecialiteiten bakt en frituurt?',
        opties: ['Lidya Wahyuwidyati', 'Saskia Konniger', 'Riki Purba', 'Dewi Lestari'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'Haar man Riki Purba staat elke ochtend om half vier op om verse groenten en kip te kopen op de boerenmarkt van Ciledug.',
        bron: 'In garages onder dure flats in Jakarta wordt geluncht voor één euro per gerecht',
      },
      {
        vraag: 'Welk links-activistisch internetbedrijf moest stoppen nadat de VS het op een sanctielijst zetten en de bank de rekening sloot?',
        opties: ['Autistici/Inventati', 'Banca Etica', 'Wero', 'EPI'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'moeilijk',
        uitleg: 'De bank vreesde dat de betaalpassen van al haar klanten via het Amerikaanse Visa-netwerk geblokkeerd zouden raken.',
        bron: 'Pay European, zegt Wero. Maar wat kost dat?',
      },
      {
        vraag: 'In welk historisch Parijs gebouw, gebouwd voor de Wereldtentoonstelling van 1900, vond de internationale ruimtevaarttop plaats?',
        opties: ['Het Grand Palais', 'Het Louvre', 'Het Élysée', 'De Eiffeltoren'],
        antwoordIndex: 0, categorie: 'economie', moeilijkheid: 'gemiddeld',
        uitleg: 'Volgens Commissievoorzitter Ursula von der Leyen is ruimte de ‘great frontier’ voor de Europese toekomst.',
        bron: 'Ruimtevaarttop Parijs moet EU lanceren als wereldspeler',
      },

      // Wetenschap & Natuur
      {
        vraag: 'Met hoeveel procent is de biomassa van vliegende insecten in Nederlandse natuurgebieden sinds de jaren negentig afgenomen?',
        opties: ['Circa 75 procent', 'Circa 25 procent', 'Circa 50 procent', 'Circa 90 procent'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Dat blijkt uit onderzoek van Nijmeegse ecologen, in 2017 gepubliceerd in Nature.',
        bron: 'Het herstel van ecosystemen begint bij een Friese zadenkweker',
      },
      {
        vraag: 'Met hoeveel procent zijn de vogelpopulaties van het Nederlandse boerenland sinds 1960 gemiddeld afgenomen?',
        opties: ['Ruim 70 procent', 'Ruim 30 procent', 'Ruim 90 procent', 'Ruim 50 procent'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Een Friese kweker van inheemse bloemenzaden probeert met zijn bedrijf de neerwaartse spiraal te doorbreken.',
        bron: 'Het herstel van ecosystemen begint bij een Friese zadenkweker',
      },
      {
        vraag: 'Welke therapie, ooit bestempeld als ‘alternatief’, wordt nu ook in de reguliere zorg gebruikt en is bedacht door Francine Shapiro?',
        opties: ['EMDR', 'Acupunctuur', 'Osteopathie', 'Orthomoleculaire therapie'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'gemiddeld',
        uitleg: 'Shapiro had een achtergrond in neuro-linguïstisch programmeren, dat nog altijd als pseudowetenschap geldt.',
        bron: 'Durf alternatieve therapieën te gebruiken in de geneeskunde',
      },
      {
        vraag: 'Welke Nobelprijswinnaar, bekend als de ‘Godfather van AI’, voorspelt dat AI-docenten leraren zullen vervangen?',
        opties: ['Geoffrey Hinton', 'Sam Altman', 'Elon Musk', 'Demis Hassabis'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'gemiddeld',
        uitleg: 'Volgens Roxane van Iperen bedreigt zulk denken de individuele menselijkheid en het weefsel van de samenleving.',
        bron: 'Universiteiten, geef ruimte aan de menselijke rafelranden',
      },
      {
        vraag: 'Hoeveel jaar van hun wakkere leven zal de huidige generatie studenten volgens het essay gemiddeld op een scherm doorbrengen?',
        opties: ['25 jaar', '10 jaar', '40 jaar', '5 jaar'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Techplatforms verdienen geld met tijd, aandacht en emoties, en houden gebruikers daarom zo lang mogelijk vast.',
        bron: 'Universiteiten, geef ruimte aan de menselijke rafelranden',
      },
      {
        vraag: 'Sinds hoeveel jaar weten wetenschappers pas dat de vagina een complex microbioom heeft met honderden bacteriesoorten?',
        opties: ['Zo’n 25 jaar', 'Sinds de negentiende eeuw', 'Sinds de jaren zeventig', 'Sinds tien jaar'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Voor nieuwe dna-technieken rond 2002 dachten onderzoekers dat er maar een handvol bacteriesoorten in de vagina leefden.',
        bron: 'Wellness en self-care: nu ook voor de vagina',
      },
      {
        vraag: 'Bij welk Nederlands oceanografisch onderzoeksinstituut op Texel deed marien-ecoloog Kees Camphuysen 34 jaar onderzoek?',
        opties: ['NIOZ', 'Deltares', 'Wageningen Marine Research', 'RIVM'],
        antwoordIndex: 0, categorie: 'wetenschap', moeilijkheid: 'moeilijk',
        uitleg: 'Hij liet chef-kok Jef Schuur beseffen hoe zwaar bevist de Noordzee inmiddels is.',
        bron: 'Texelse oesters, vis en lam op je bord - hoe lang nog?',
      },

      // Cultuur & Media
      {
        vraag: 'Hoeveel jaar liep de YouTube-serie Chicken Shop Date van presentatrice Amelia Dimoldenberg, voordat ze ermee stopte?',
        opties: ['12 jaar', '5 jaar', '20 jaar', '8 jaar'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'In de serie ging ze ‘op date’ met een beroemdheid, onder de kipnuggets van een fastfoodketen.',
        bron: 'Chicken Shop Date, pionier van online interviewformat, stopt',
      },
      {
        vraag: 'Welke voormalige Beatle liet zich door Amelia Dimoldenberg strikt reguleren in zijn ketchupgebruik tijdens Chicken Shop Date?',
        opties: ['Paul McCartney', 'Ringo Starr', 'John Lennon', 'George Harrison'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'Volgens Dimoldenberg is hij heel gedisciplineerd met zijn ketchup.',
        bron: 'Chicken Shop Date, pionier van online interviewformat, stopt',
      },
      {
        vraag: 'Wat noemt columnist Thomas Hogeling de grootste vijand van elke schrijver?',
        opties: ['Perfectionisme', 'Tijdgebrek', 'Talentgebrek', 'Kritiek van lezers'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'Hij adviseert schrijvers juist onzorgvuldigheid en het ‘lenen’ van andermans ideeën toe te laten in het creatieve proces.',
        bron: 'Laat onzorgvuldigheid en diefstal toe in het creatieve proces',
      },
      {
        vraag: 'In welk Fries dorp stond het huis ‘Huize het Gras’, waar schrijver Gerard Reve van 1964 tot 1971 woonde?',
        opties: ['Greonterp', 'Workum', 'Sneek', 'Hindeloopen'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'moeilijk',
        uitleg: 'Toen het huis te koop kwam, werd dat nog gevierd met een feest door Reves voormalige partners Teigetje en Woelrat.',
        bron: 'Huize het Gras',
      },
      {
        vraag: 'Voor hoeveel gulden kocht Gerard Reve het huis Huize het Gras ooit?',
        opties: ['Een krappe 2.000 gulden', '20.000 gulden', '200.000 gulden', '50.000 gulden'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'moeilijk',
        uitleg: 'Bezoekers aan een herdenkingsfeest kregen zelfs een pluk haar van de ‘volksschrijver’ cadeau.',
        bron: 'Huize het Gras',
      },
      {
        vraag: 'Welke roman van Connie Palmen leidde tot een polemiek over moederschap en schrijverschap, becommentarieerd in de column ‘Gewichtigheid’?',
        opties: ['Johnnie Walker', 'De vriendschap', 'De wetten', 'Logboek van een onbarmhartig jaar'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'gemiddeld',
        uitleg: 'Palmen stelde dat vrouwen voor radicaal schrijverschap altijd het moederschap zouden moeten opgeven.',
        bron: 'Gewichtigheid',
      },
      {
        vraag: 'Bij welk internationaal onderzoekscollectief, opgericht door Eliot Higgins, begon journalist Christiaan Triebert zijn carrière?',
        opties: ['Bellingcat', 'WikiLeaks', 'ProPublica', 'OCCRP'],
        antwoordIndex: 0, categorie: 'cultuur', moeilijkheid: 'moeilijk',
        uitleg: 'Triebert werkt inmiddels zeven jaar voor The New York Times en won er twee keer de Pulitzer Prize mee.',
        bron: '‘Na de eerste keer zet ik het geluid uit, anders blijft het doorklinken in mijn hoofd’',
      },

      // Sport & Overig
      {
        vraag: 'In welke Brabantse plaats werd wielrenner Steven Kruijswijk geboren?',
        opties: ['Nuenen', 'Eindhoven', 'Tilburg', 'Breda'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'moeilijk',
        uitleg: 'Hij woont inmiddels tien jaar in Monaco, waar ook zijn laatste wedstrijd start.',
        bron: '‘Het wielrennen heeft me gehard’',
      },
      {
        vraag: 'Hoe luidt de bijnaam van Steven Kruijswijk, vanwege zijn brede schouders?',
        opties: ['De Kleerhanger', 'De Kast', 'De Adelaar', 'De Kraan'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'moeilijk',
        uitleg: 'Zijn team Visma-Lease a Bike eert hem bij zijn afscheid als ‘cultuurbewaker’.',
        bron: '‘Het wielrennen heeft me gehard’',
      },
      {
        vraag: 'In de Giro van welk jaar klapte Steven Kruijswijk, op dat moment in gewonnen positie, tegen een ijswand?',
        opties: ['2016', '2010', '2019', '2022'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'Het moment staat voor altijd gegrift in het Nederlandse sportgeheugen.',
        bron: '‘Het wielrennen heeft me gehard’',
      },
      {
        vraag: 'Voor hoeveel jaar schorste het Instituut voor Sportrechtspraak Marc Overmars eind 2023, waarvan een deel voorwaardelijk?',
        opties: ['Twee jaar', 'Eén jaar', 'Vier jaar', 'Zes maanden'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'moeilijk',
        uitleg: 'De KNVB vroeg de FIFA om de schorsing wereldwijd te laten gelden, wat ook gebeurde.',
        bron: 'Overmars',
      },
      {
        vraag: 'Waarvoor werd voetballer Jerry de Jong in 2000 als aanvoerder van MVV betrapt, waarna hij op staande voet werd ontslagen?',
        opties: ['Diefstal van een bankpasje uit de kleedkamer', 'Matchfixing', 'Dopinggebruik', 'Belastingfraude'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'De gokverslaafde De Jong nam het pasje van zijn Braziliaanse ploeggenoot Emerson mee, maar kende de pincode niet.',
        bron: 'Goedlachse voetballer met een krasje',
      },
      {
        vraag: 'Tot welk beroep leidde Jerry de Jong zich om, nadat hij in 2006 definitief stopte met voetballen?',
        opties: ['Jongerenwerker voor probleemjongeren', 'Voetbaltrainer', 'Makelaar', 'Taxichauffeur'],
        antwoordIndex: 0, categorie: 'sport', moeilijkheid: 'gemiddeld',
        uitleg: 'Als coach die zelf ‘een krasje had opgelopen’ had hij een goede klik met Brabantse probleemjongeren.',
        bron: 'Goedlachse voetballer met een krasje',
      },
    ],
  },
};
