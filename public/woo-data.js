/*
 * Woo Quest — databestand
 * ------------------------------------------------------------------
 * Pas dit bestand aan om JOUW Woo-verzoeken te volgen.
 * Alles wat de app toont (verzoeken, voortgang, termijnen) komt hier
 * vandaan als startpunt; je wijzigingen in de app zelf worden daarna
 * lokaal in je browser bewaard (localStorage).
 *
 * Drie globale objecten:
 *   window.WOO_CONFIG   -> wettelijk kader (termijnen + uitzonderingsgronden)
 *   window.WOO_TEMPLATE -> de vaste stappen (het "pad") van elk verzoek
 *   window.WOO_SEED     -> jouw concrete Woo-verzoeken
 * ------------------------------------------------------------------
 */

/* =====================================================================
 * 1. WETTELIJK KADER — Wet open overheid (Woo)
 * ===================================================================== */
window.WOO_CONFIG = {
  // --- Termijnen (in kalenderdagen, want de Woo rekent in weken) ---
  termijnen: {
    beslistermijnDagen: 28,        // art. 4.4 lid 1: uiterlijk 4 weken na ontvangst
    verdagingDagen: 14,            // art. 4.4 lid 2: eenmalig max. 2 weken verdagen
    preciseringDagen: 14,          // art. 4.1: verzoeker krijgt ~2 weken om te preciseren
    zienswijzeDagen: 14,           // afd. 4.1.2 Awb: belanghebbende ~2 weken zienswijze
    voorlopigeVoorzieningDagen: 14 // openbaarmaking opschorten zodat derde naar de rechter kan
  },

  // Korte uitleg bij de termijnen (referentiepaneel in de app)
  termijnUitleg: [
    { titel: 'Beslistermijn — 4 weken', grond: 'art. 4.4 lid 1 Woo',
      tekst: 'Zo spoedig mogelijk, uiterlijk binnen 4 weken na de dag van ontvangst van het verzoek.' },
    { titel: 'Verdaging — max. 2 weken', grond: 'art. 4.4 lid 2 Woo',
      tekst: 'Eenmalig, schriftelijk en gemotiveerd verdagen met ten hoogste twee weken, vóór afloop van de oorspronkelijke termijn.' },
    { titel: 'Precisering onduidelijk verzoek', grond: 'art. 4.1 Woo',
      tekst: 'Is het verzoek onduidelijk? Vraag de verzoeker om precisering. De beslistermijn wordt opgeschort tot de precisering binnen is.' },
    { titel: 'Afspraken bij omvangrijk verzoek', grond: 'art. 4.2a Woo',
      tekst: 'Bij een omvangrijk of complex verzoek kun je met de verzoeker afspraken maken over de termijn en wijze van verstrekking (opschorting).' },
    { titel: 'Zienswijze belanghebbende', grond: 'afd. 4.1.2 Awb',
      tekst: 'Verwacht je dat een derde-belanghebbende bedenkingen heeft? Geef gelegenheid tot een zienswijze; de beslistermijn wordt opgeschort.' },
    { titel: 'Opschorting openbaarmaking', grond: 'praktijk / rechtsbescherming',
      tekst: 'Bij betrokken derden wordt de feitelijke openbaarmaking ~2 weken opgeschort, zodat zij om een voorlopige voorziening kunnen vragen.' },
    { titel: 'Niet tijdig beslissen', grond: 'art. 8.2 Woo / Awb',
      tekst: 'Te laat? De verzoeker kan in gebreke stellen en beroep niet-tijdig instellen. Let op: de dwangsomregeling geldt niet voor Woo-verzoeken.' }
  ],

  // --- Uitzonderingsgronden (de "variabelen" per document) ---
  absoluteGronden: [
    { grond: 'art. 5.1 lid 1a', tekst: 'Eenheid van de Kroon' },
    { grond: 'art. 5.1 lid 1b', tekst: 'Veiligheid van de Staat' },
    { grond: 'art. 5.1 lid 1c', tekst: 'Vertrouwelijk verstrekte bedrijfs- en fabricagegegevens' },
    { grond: 'art. 5.1 lid 1d', tekst: 'Bijzondere en strafrechtelijke persoonsgegevens (AVG)' }
  ],
  relatieveGronden: [
    { grond: 'art. 5.1 lid 2a', tekst: 'Betrekkingen van Nederland met andere landen / internationale organisaties' },
    { grond: 'art. 5.1 lid 2b', tekst: 'Economische of financiële belangen van de Staat / publiekrechtelijke lichamen' },
    { grond: 'art. 5.1 lid 2c', tekst: 'Opsporing en vervolging van strafbare feiten' },
    { grond: 'art. 5.1 lid 2d', tekst: 'Inspectie, controle en toezicht door bestuursorganen' },
    { grond: 'art. 5.1 lid 2e', tekst: 'Eerbiediging van de persoonlijke levenssfeer' },
    { grond: 'art. 5.1 lid 2f', tekst: 'Bescherming van concurrentiegevoelige bedrijfs- en fabricagegegevens' },
    { grond: 'art. 5.1 lid 2g', tekst: 'Bescherming van het milieu waarop de informatie betrekking heeft' },
    { grond: 'art. 5.1 lid 2h', tekst: 'Beveiliging van personen/bedrijven; voorkomen van sabotage' },
    { grond: 'art. 5.1 lid 2i', tekst: 'Het goed functioneren van de Staat / bestuursorganen' }
  ],
  bijzondereGronden: [
    { grond: 'art. 5.1 lid 5', tekst: 'Belangenafweging: weigeren voor zover het belang niet opweegt tegen openbaarheid' },
    { grond: 'art. 5.2 lid 1', tekst: 'Persoonlijke beleidsopvattingen in documenten voor intern beraad' },
    { grond: 'art. 5.2 lid 3', tekst: 'Mogelijk wél verstrekken in niet tot personen herleidbare vorm' },
    { grond: 'art. 5.1 lid 7', tekst: 'Gedeeltelijk verstrekken / anonimiseren (lakken) waar mogelijk' }
  ]
};

/* =====================================================================
 * 2. HET PAD — vaste stappen die elk Woo-verzoek doorloopt
 *    Elke stap is een "les" in de Duolingo-stijl.
 *    optioneel: true  -> stap kan op "n.v.t." worden gezet
 *    deadline: true    -> stap toont de wettelijke beslistermijn
 * ===================================================================== */
window.WOO_TEMPLATE = [
  // --- Fase 1: Intake & termijnen ---
  { id: 'ontvangst',     fase: 'Intake & termijnen', icon: '📥', xp: 10,
    label: 'Verzoek ontvangen', uitleg: 'Datum van ontvangst vastleggen — hier start de wettelijke klok (art. 4.1).' },
  { id: 'bevestiging',   fase: 'Intake & termijnen', icon: '✉️', xp: 10,
    label: 'Ontvangstbevestiging verstuurd', uitleg: 'Bevestig ontvangst aan de verzoeker.' },
  { id: 'precisering',   fase: 'Intake & termijnen', icon: '🔍', xp: 10, optioneel: true,
    label: 'Verzoek voldoende duidelijk', uitleg: 'Onduidelijk? Vraag om precisering (art. 4.1) — termijn wordt opgeschort.' },
  { id: 'beslistermijn', fase: 'Intake & termijnen', icon: '⏱️', xp: 15, deadline: true,
    label: 'Beslistermijn bepaald (4 weken)', uitleg: 'Uiterlijk 4 weken na ontvangst beslissen (art. 4.4 lid 1).' },
  { id: 'verdaging',     fase: 'Intake & termijnen', icon: '⏳', xp: 10, optioneel: true,
    label: 'Verdaging (max. 2 weken)', uitleg: 'Indien nodig: eenmalig en gemotiveerd verdagen (art. 4.4 lid 2).' },
  { id: 'afspraken',     fase: 'Intake & termijnen', icon: '🤝', xp: 10, optioneel: true,
    label: 'Afspraken met verzoeker', uitleg: 'Omvangrijk/complex? Maak afspraken over termijn en wijze (art. 4.2a).' },

  // --- Fase 2: Inventarisatie & beoordeling ---
  { id: 'inventarisatie', fase: 'Inventarisatie & beoordeling', icon: '🗂️', xp: 15,
    label: 'Documenten geïnventariseerd', uitleg: 'Alle relevante documenten verzameld en in beeld.' },
  { id: 'reikwijdte',     fase: 'Inventarisatie & beoordeling', icon: '📐', xp: 10,
    label: 'Reikwijdte vastgesteld', uitleg: 'Bepaald welke documenten binnen het verzoek vallen.' },
  { id: 'absoluut',       fase: 'Inventarisatie & beoordeling', icon: '⛔', xp: 15,
    label: 'Absolute gronden beoordeeld', uitleg: 'Getoetst aan art. 5.1 lid 1 (absolute uitzonderingsgronden).' },
  { id: 'relatief',       fase: 'Inventarisatie & beoordeling', icon: '⚖️', xp: 15,
    label: 'Relatieve gronden beoordeeld', uitleg: 'Belangenafweging op art. 5.1 lid 2 uitgevoerd.' },
  { id: 'internberaad',   fase: 'Inventarisatie & beoordeling', icon: '💭', xp: 10,
    label: 'Intern beraad beoordeeld', uitleg: 'Persoonlijke beleidsopvattingen getoetst (art. 5.2).' },
  { id: 'zienswijze',     fase: 'Inventarisatie & beoordeling', icon: '🗣️', xp: 10, optioneel: true,
    label: 'Zienswijze derden gevraagd', uitleg: 'Belanghebbende met bedenkingen? Vraag een zienswijze (afd. 4.1.2 Awb).' },
  { id: 'lakken',         fase: 'Inventarisatie & beoordeling', icon: '🖌️', xp: 15,
    label: 'Documenten gelakt', uitleg: 'Redactie uitgevoerd op grond van de uitzonderingsgronden (art. 5.1 lid 7).' },
  { id: 'lakcontrole',    fase: 'Inventarisatie & beoordeling', icon: '👀', xp: 10,
    label: 'Lakwerk gecontroleerd (4-ogen)', uitleg: 'Tweede paar ogen heeft het lakwerk gecontroleerd.' },

  // --- Fase 3: Besluitvorming (intern) ---
  { id: 'concept',     fase: 'Besluitvorming', icon: '📝', xp: 20,
    label: 'Concept Woo-besluit af', uitleg: 'Het concept-besluit is opgesteld.' },
  { id: 'teamleider',  fase: 'Besluitvorming', icon: '🧑‍💼', xp: 15,
    label: 'Feedback teamleider verwerkt', uitleg: 'Opmerkingen van de teamleider zijn verwerkt.' },
  { id: 'coordinator', fase: 'Besluitvorming', icon: '🧭', xp: 15,
    label: 'Feedback coördinator verwerkt', uitleg: 'Opmerkingen van de Woo-coördinator zijn verwerkt.' },
  { id: 'handtekening',fase: 'Besluitvorming', icon: '✍️', xp: 20,
    label: 'Manager heeft getekend', uitleg: 'De manager heeft het besluit ondertekend.' },
  { id: 'directeur',   fase: 'Besluitvorming', icon: '🏛️', xp: 10,
    label: 'Directeur op de hoogte', uitleg: 'De directeur is geïnformeerd over het besluit.' },
  { id: 'communicatie',fase: 'Besluitvorming', icon: '📣', xp: 10,
    label: 'Communicatie geïnformeerd', uitleg: 'Afdeling communicatie weet van het (mogelijk gevoelige) besluit.' },

  // --- Fase 4: Afronding ---
  { id: 'verzonden',    fase: 'Afronding', icon: '📤', xp: 20,
    label: 'Besluit verzonden', uitleg: 'Het besluit is naar de verzoeker verstuurd.' },
  { id: 'opschorting',  fase: 'Afronding', icon: '🛡️', xp: 10, optioneel: true,
    label: 'Openbaarmaking opgeschort', uitleg: 'Bij derden: ~2 weken wachten i.v.m. voorlopige voorziening.' },
  { id: 'gepubliceerd', fase: 'Afronding', icon: '🏆', xp: 30,
    label: 'Documenten openbaar gemaakt', uitleg: 'De documenten zijn verstrekt en/of gepubliceerd. Klaar!' }
];

/* =====================================================================
 * 3. JOUW WOO-VERZOEKEN  (voorbeelden — vervang door je eigen zaken)
 *    datumOntvangst: 'YYYY-MM-DD'
 *    verdaging: true/false  -> telt 2 weken bij de deadline op
 *    opschortingDagen: aantal dagen dat de termijn stilstond
 *    klaar: lijst met stap-id's die al gedaan zijn
 *    nvt:   lijst met optionele stap-id's die niet van toepassing zijn
 * ===================================================================== */
window.WOO_SEED = [
  {
    id: 'woo-2026-014',
    titel: 'Correspondentie subsidieregeling verduurzaming',
    kenmerk: 'WOO/2026/014',
    bestuursorgaan: 'Ministerie van Economische Zaken',
    verzoeker: 'Stichting Open Data',
    datumOntvangst: '2026-05-26',
    verdaging: true,
    opschortingDagen: 0,
    klaar: ['ontvangst', 'bevestiging', 'precisering', 'beslistermijn', 'verdaging',
            'inventarisatie', 'reikwijdte', 'absoluut', 'relatief'],
    nvt: ['afspraken']
  },
  {
    id: 'woo-2026-021',
    titel: 'Adviezen externe inhuur ICT 2024-2025',
    kenmerk: 'WOO/2026/021',
    bestuursorgaan: 'Gemeente Amsterdam',
    verzoeker: 'Dagblad De Onderzoeker',
    datumOntvangst: '2026-06-02',
    verdaging: false,
    opschortingDagen: 7,
    klaar: ['ontvangst', 'bevestiging', 'precisering', 'beslistermijn'],
    nvt: []
  },
  {
    id: 'woo-2026-009',
    titel: 'Inspectierapporten voedselveiligheid horeca',
    kenmerk: 'WOO/2026/009',
    bestuursorgaan: 'Nederlandse Voedsel- en Warenautoriteit',
    verzoeker: 'Journalist M. de Vries',
    datumOntvangst: '2026-04-14',
    verdaging: true,
    opschortingDagen: 14,
    klaar: ['ontvangst', 'bevestiging', 'precisering', 'beslistermijn', 'verdaging',
            'inventarisatie', 'reikwijdte', 'absoluut', 'relatief', 'internberaad',
            'zienswijze', 'lakken', 'lakcontrole', 'concept', 'teamleider',
            'coordinator', 'handtekening', 'directeur', 'communicatie', 'verzonden'],
    nvt: ['afspraken']
  }
];
