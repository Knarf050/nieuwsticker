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
    ],
  },
};
