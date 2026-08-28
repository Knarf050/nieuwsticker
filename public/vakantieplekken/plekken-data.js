/* Configuratie voor Vakantieplekken.
   Bewust een los bestand (net als woo-data.js/geheugen-data.js) zodat
   app-logica en begininhoud gescheiden blijven. De échte lijst met plekken
   staat lokaal op je toestel (localStorage) — dit bestand bevat alleen
   naam/tagline en eventuele voorbeeldplekken voor de allereerste keer
   dat je de app opent. Laat seedPlekken gerust leeg; je voegt je eigen
   plekken toe in de app zelf. */
window.VAKANTIE_CONFIG = {
  appNaam: 'Vakantieplekken',
  tagline: 'Blijf op de hoogte van plekken waar je bent geweest',
  seedPlekken: [],
};
