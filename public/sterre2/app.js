/* Sterre 2 — racelezen, driesterrensommen en breinbrekers.
   Bovenaan staat alle inhoud (woorden, zinnen, opgavenmakers); die deel
   heeft geen scherm nodig en is daardoor los te testen. Onderaan de app zelf. */
"use strict";
const VERSIE = "2026-11-15a";

/* ---------- hulpjes ---------- */
const rnd = (a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick = a=>a[Math.floor(Math.random()*a.length)];
const shuffle = a=>{ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=rnd(0,i); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const sample = (a,n)=>shuffle(a).slice(0,n);
const uniek = a=>[...new Set(a)];

/* Vier antwoorden bij een getal: het goede plus drie die er dichtbij liggen. */
function getalKeuzes(ans, extra){
  const set = new Set([ans]);
  const kand = [...shuffle(extra||[]), ...shuffle([ans+1,ans-1,ans+2,ans-2,ans+10,ans-10,ans+3,ans-3,ans+5,ans-5])];
  for(const k of kand){ if(set.size>=4) break; if(Number.isInteger(k) && k>=0) set.add(k); }
  let i=5; while(set.size<4) set.add(ans+(++i));
  return [...set].sort((a,b)=>a-b).map(v=>({t:String(v), v}));
}
const tekstKeuzes = lijst=>lijst.map(v=>({t:String(v), v}));

/* ---------- woorden: drie leesniveaus rond AVI E3 en M4 ---------- */
const WOORDEN = {
  1: uniek(("straat sprong herfst zwart krant plant stoel vriend sterk markt dorst worst kwast schip schoen school schaap schat schep schrik schoon "+
     "bang ring lang zing tong jong bank drink plank denk stank vonk licht nacht lucht bocht vlucht kracht recht dicht zacht vrucht "+
     "strand stroom streep strik spring klomp kramp stamp storm scherp fiets koets plaats schaats trots blik blok bloem broek brood brief "+
     "draak droom druk fluit glas groen grond klein kleur klok knie knop kraan kroon kruis plein prijs slaap sleep slim smal snel snoep "+
     "spel spin spook staart steen stem stil stoep stuk traan trap trein trui vlag vlek vlieg vloer vraag vrij zwaan zweet zwem").split(" ")),
  2: uniek(("tafel vogel lepel water moeder vader zomer winter bakker ridder koffer appel jongen meisje bellen vallen bomen bommen lopen maken "+
     "spelen kamer keuken deken kussen jassen bussen bossen bessen manen mannen beren zagen zakken peren pennen vissen wielen stoelen "+
     "schoenen straten planten vrienden kleuren bloemen dromen slapen dansen lachen zingen springen drinken denken vangen hangen koning "+
     "woning honing kuiken buiten binnen boven onder achter tussen morgen avond middag nachten lichten vechten wachten zoeken koeken "+
     "boeken hoeken poesje huisje boompje visje beetje kopje dorpje zusje broertje sleutel beugel kogel nagel regen wegen tegen negen "+
     "zeven leven geven over oven open apen tante vlinder kikker zwembad voetbal handdoek zakdoek speeltuin").split(" ")),
  3: uniek(("olifant paraplu vakantie boterham pannenkoek tekening verhaal vertel verkeer vergeet verjaardag gezien gedaan gezicht geluk geluid "+
     "gevaar geheim gewoon begin bedankt betaal bezoek beloof bewaar aardig handig zonnig grappig jarig nodig rustig vrolijk moeilijk "+
     "eerlijk heerlijk gevaarlijk vriendelijk haai kraai draai mooi kooi gooi groei boei koeien leeuw sneeuw meeuw nieuw kieuw duw ruw "+
     "schaduw zwaluw kinderen ooievaar tovenaar leraar molenaar eigenaar kapitein fontein konijn dolfijn regenboog sneeuwpop kerstboom "+
     "vuurtoren boekenkast slaapkamer badkamer keukentafel tandenborstel fietsenmaker verstoppen gelukkig beginnen vergeten").split(" "))
};

/* Zinnen die waar of niet waar zijn. */
const ZINNEN = {
  1:{ja:["een vis kan zwemmen","een vogel heeft twee poten","de zon is heet","een bal is rond","gras is groen","een koe geeft melk",
         "ijs is koud","een week heeft zeven dagen","een fiets heeft twee wielen","een poes kan spinnen","in de nacht is het donker",
         "sneeuw is wit","een hond kan blaffen","een boek kan je lezen","een stoel heeft poten","melk is wit"],
     nee:["een vis kan fietsen","een koe kan vliegen","de zon is blauw","een stoel kan lopen","gras is paars","ijs is heet",
          "een hond heeft zes poten","een bal is vierkant","een boom kan praten","een poes legt eieren","sneeuw is zwart",
          "een fiets heeft tien wielen","je slaapt in een schoen","een vis woont in een boom","een muis is groter dan een paard",
          "een trein heeft vleugels"]},
  2:{ja:["in de herfst vallen de blaadjes","een spin heeft acht poten","met een sleutel doe je de deur open","de bakker bakt brood en taart",
         "in de winter kan het sneeuwen","een kikker kan heel goed springen","op een strand ligt veel zand","een vlinder was eerst een rups",
         "je eet soep met een lepel","een schip vaart op het water","de tandarts kijkt naar je tanden","een jaar heeft twaalf maanden",
         "een brandweerauto is meestal rood","na de nacht komt de morgen","een zebra heeft zwarte strepen","met je oren kun je horen"],
     nee:["in de zomer vriest het altijd","een spin heeft twee poten","een schip rijdt over de straat","de bakker knipt je haren",
          "je ruikt met je knieën","een olifant past in je broekzak","na maandag komt zondag","een vlinder zwemt in de zee",
          "een week heeft twaalf dagen","een kikker heeft veren","de maan schijnt alleen op dinsdag","een trein rijdt door de lucht",
          "je leest een boek met je voeten","sneeuw valt omhoog","een giraf heeft een korte nek","een auto eet graag gras"]},
  3:{ja:["een olifant is zwaarder dan een konijn","op je verjaardag word je een jaar ouder","een tovenaar komt alleen in verhalen voor",
         "een pannenkoek bak je in een pan","een paraplu houdt je droog in de regen","de leeuw wordt de koning van de dieren genoemd",
         "een ooievaar heeft lange poten en een lange snavel","in de vakantie hoef je niet naar school","een geheim vertel je niet aan iedereen",
         "een dolfijn leeft in de zee","van sneeuw kun je een sneeuwpop maken","een kapitein is de baas op een schip",
         "een regenboog heeft veel kleuren","een molenaar werkt in een molen","nieuwe schoenen zijn nog niet versleten",
         "een eerlijk kind vertelt de waarheid"],
     nee:["een konijn is gevaarlijker dan een leeuw","onder water blijft een paraplu altijd droog","een olifant is lichter dan een vlinder",
          "op je verjaardag word je een jaar jonger","een haai is een vrolijke vogel","een pannenkoek groeit aan een boom",
          "in de vakantie moet je elke dag naar school","een sneeuwpop smelt nooit in de zon","een ooievaar heeft vier korte poten",
          "een regenboog is altijd helemaal zwart","een dolfijn klimt graag in bomen","moeilijke sommen zijn altijd makkelijk",
          "een boterham drink je met een rietje","een tekening maak je met een hamer","een kapitein vaart met zijn schip door het bos",
          "een tovenaar is kleiner dan een mier"]}
};

/* Bouwstenen voor de flitszin: wie, wat, waar. */
const WIE = ["de bakker","mijn opa","de hond","een ridder","het meisje","de juf","een piraat","de kikker","mijn zusje","de koning","een heks","de dokter"];
const DOET = ["leest een boek","eet een appel","zingt een lied","bakt een taart","zoekt een schat","drinkt melk","telt zijn geld","vangt een vis",
              "schrijft een brief","maakt een som","poetst zijn schoenen","speelt met een bal"];
const WAAR = ["in de tuin","op het dak","in de bus","onder de boom","op school","in het bos","bij de zee","in de keuken","op de markt",
              "achter het huis","naast de brug","in de trein"];

const NAMEN = ["Tom","Lisa","Sam","Noor","Daan","Emma","Finn","Saar","Bram","Mila"];
const FRUIT = ["🍎","🍌","🍓","🍐","🍊","🍇","🍋","🥝"];

/* ---------- woorden die op elkaar lijken ---------- */
function afstand(a,b){
  const m=a.length, n=b.length; let vorig=[...Array(n+1).keys()];
  for(let i=1;i<=m;i++){ const nu=[i];
    for(let j=1;j<=n;j++) nu[j]=Math.min(vorig[j]+1, nu[j-1]+1, vorig[j-1]+(a[i-1]===b[j-1]?0:1));
    vorig=nu; }
  return vorig[n];
}
function lijken(woord, pool, n){
  const rest = pool.filter(w=>w!==woord).map(w=>[afstand(woord,w)+Math.random()*0.9, w]).sort((x,y)=>x[0]-y[0]);
  return sample(rest.slice(0, Math.max(n+3, 6)).map(x=>x[1]), n);
}

/* ---------- LEZEN ---------- */
function genFlits(lvl){
  const pool = WOORDEN[lvl], w = pick(pool);
  return { prompt:"Kijk goed! Welk woord zag je?", flits:{tekst:w, ms:[1100,750,450][lvl-1]},
    choices:tekstKeuzes(shuffle([w, ...lijken(w,pool,3)])), answer:w, klein:true,
    tip:`Het woord was “${w}”. Kijk naar het begin én naar het eind van het woord.` };
}
function genZoek(lvl){
  const pool = WOORDEN[lvl].filter(w=>w.length<=9), w = pick(pool);
  const buren = lijken(w,pool,5);
  const tegels = shuffle([w,w,w, ...buren, ...sample(buren,4)]);
  return { prompt:"Tik drie keer op dit woord:", visual:`<div class="leesregel">${w}</div>`,
    choices:tekstKeuzes(tegels), mini:true, cols:3, multi:{need:3, ok:v=>v.every(x=>x===w), goed:x=>x===w},
    tip:`Lees elk woord helemaal. Je zoekt “${w}”.` };
}
function genWaar(lvl){
  const ja = Math.random()<0.5, z = pick(ZINNEN[lvl][ja?"ja":"nee"]);
  return { prompt:"Waar of niet waar?", visual:`<div class="leesregel">${z}</div>`,
    choices:[{t:"👍 waar", v:true},{t:"👎 niet waar", v:false}], answer:ja, klein:true, snel:[9000,9000,10000][lvl-1],
    tip: ja ? "Lees de zin nog eens rustig. Dit klopt wel." : "Lees de zin nog eens rustig. Kan dat echt?" };
}
function genZinFlits(lvl){
  const wie=pick(WIE), doet=pick(DOET), waar=pick(WAAR), soort=rnd(0,2);
  const [vraag, goed, lijst] = [["Wie was het?",wie,WIE],["Wat deed hij of zij?",doet,DOET],["Waar was het?",waar,WAAR]][soort];
  const zin = `${wie} ${doet} ${waar}`;
  return { prompt:"Lees snel de zin!", flits:{tekst:zin, ms:[4500,3300,2400][lvl-1], zin:true, vraag},
    choices:tekstKeuzes(shuffle([goed, ...sample(lijst.filter(x=>x!==goed),3)])), answer:goed, klein:true,
    tip:`De zin was: “${zin}”.` };
}

/* ---------- REKENEN ---------- */
const somKaart = t=>`<div class="sum">${t.replace("?",'<span class="q">?</span>')}</div>`;
function genTot20(lvl){
  let tekst, ans, tip;
  const soort = lvl===1 ? rnd(0,1) : lvl===2 ? rnd(0,3) : rnd(0,4);
  if(soort===0){ const a=rnd(6,9), b=rnd(11-a,9); ans=a+b; tekst=`${a} + ${b} = ?`; tip=`Maak eerst 10: ${a} + ${10-a} = 10. Dan nog ${b-(10-a)} erbij.`; }
  else if(soort===1){ const t=rnd(11,18), b=rnd(t-9,9); ans=t-b; tekst=`${t} − ${b} = ?`; tip=`Ga eerst terug naar 10: ${t} − ${t-10} = 10. Dan nog ${b-(t-10)} eraf.`; }
  else if(soort===2){ const a=rnd(5,9), t=rnd(a+3,Math.min(20,a+9)); ans=t-a; tekst=`${a} + ? = ${t}`; tip=`Hoeveel moet er bij ${a} om ${t} te krijgen? Tel door vanaf ${a}.`; }
  else if(soort===3){ const t=rnd(12,20), r=rnd(3,9); ans=t-r; tekst=`${t} − ? = ${r}`; tip=`${t} − ${r} is het getal dat je zoekt.`; }
  else { const a=rnd(6,9), b=rnd(5,9), c=rnd(2,Math.min(9,a+b-1)); ans=a+b-c; tekst=`${a} + ${b} − ${c} = ?`; tip=`Reken eerst ${a} + ${b} = ${a+b}. Daarna ${c} eraf.`; }
  return { prompt:"Reken het uit.", visual:somKaart(tekst), choices:getalKeuzes(ans), answer:ans, snel:7000, tip };
}
function genTien(lvl){
  let tekst, ans, tip, extra=[];
  if(lvl===1){
    if(rnd(0,1)){ const a=rnd(1,8)*10, b=rnd(1,(100-a)/10)*10; ans=a+b; tekst=`${a} + ${b} = ?`; tip=`${a/10} + ${b/10} = ${(a+b)/10}. Met tientallen is dat ${ans}.`; }
    else { const a=rnd(3,10)*10, b=rnd(1,a/10-1)*10; ans=a-b; tekst=`${a} − ${b} = ?`; tip=`${a/10} − ${b/10} = ${(a-b)/10}. Met tientallen is dat ${ans}.`; }
    extra=[ans+10,ans-10,ans+20];
  } else if(lvl===2){
    const a=rnd(11,69), t=rnd(1,Math.min(3,Math.floor((99-a)/10)))*10;
    if(rnd(0,1)){ ans=a+t; tekst=`${a} + ${t} = ?`; tip=`Er komen ${t/10} tientallen bij. De ${a%10} achteraan blijft staan.`; }
    else { const g=a+t; ans=a; tekst=`${g} − ${t} = ?`; tip=`Er gaan ${t/10} tientallen af. De ${g%10} achteraan blijft staan.`; }
    extra=[ans+10,ans-10,ans+1];
  } else {
    const s=rnd(0,2);
    if(s===0){ const a=rnd(2,8)*10+rnd(5,9), b=rnd(11-a%10,9); ans=a+b; tekst=`${a} + ${b} = ?`; tip=`Maak eerst het tiental vol: ${a} + ${10-a%10} = ${a+10-a%10}. Dan nog ${b-(10-a%10)}.`; }
    else if(s===1){ const a=rnd(3,9)*10+rnd(1,4), b=rnd(a%10+1,9); ans=a-b; tekst=`${a} − ${b} = ?`; tip=`Ga eerst terug naar ${a-a%10}. Dan nog ${b-a%10} eraf.`; }
    else { const a=rnd(2,5)*10+rnd(1,8), b=rnd(1,3)*10+rnd(1,8); ans=a+b; tekst=`${a} + ${b} = ?`; tip=`Eerst de tientallen erbij: ${a} + ${b-b%10} = ${a+b-b%10}. Dan nog ${b%10}.`; }
    extra=[ans+10,ans-10,ans+1,ans-1];
  }
  return { prompt:"Reken het uit.", visual:somKaart(tekst), choices:getalKeuzes(ans,extra), answer:ans, tip };
}
function genSplits(lvl){
  let t, a;
  if(lvl===1){ t=rnd(11,20); a=rnd(3,t-3); }
  else if(lvl===2){ t=pick([50,100,100]); a=rnd(1,t/10-1)*10; }
  else { t=100; a=rnd(2,18)*5+pick([0,0,1,2]); }
  const ans=t-a;
  return { prompt:"Welk getal hoort erbij?", visual:somKaart(`${t} = ${a} + ?`), choices:getalKeuzes(ans,[ans+10,ans-10]), answer:ans,
    tip:`${a} en ${ans} zijn samen ${t}.` };
}
function genKeer(lvl){
  const tafels = lvl===1 ? [2,5,10] : lvl===2 ? [2,3,4,5,10] : [2,3,4,5,6,10];
  const t=pick(tafels), n=rnd(lvl===1?1:2,10), soort = lvl===3 ? rnd(0,2) : 0;
  if(soort===0) return { prompt:"Hoeveel is dat?", visual:somKaart(`${n} × ${t} = ?`), choices:getalKeuzes(n*t,[n*t+t,n*t-t,(n+1)*t]), answer:n*t,
    tip:`${n} × ${t} is ${n} keer een groepje van ${t}: ${Array(Math.min(n,5)).fill(t).join(" + ")}${n>5?" + …":""}.` };
  if(soort===1) return { prompt:"Welk getal hoort erbij?", visual:somKaart(`? × ${t} = ${n*t}`), choices:getalKeuzes(n,[n+1,n-1,n+2]), answer:n,
    tip:`Hoeveel keer past ${t} in ${n*t}? Tel met sprongen van ${t}.` };
  return { prompt:"Eerlijk verdelen.", visual:somKaart(`${n*t} : ${t} = ?`), choices:getalKeuzes(n,[n+1,n-1,n+2]), answer:n,
    tip:`Verdeel ${n*t} in groepjes van ${t}. Hoeveel groepjes krijg je?` };
}
function genHelft(lvl){
  const dubbel = Math.random()<0.5;
  let n;
  if(dubbel){ n = lvl===1 ? rnd(6,15) : lvl===2 ? rnd(15,45) : pick([26,27,28,29,36,37,38,39,46,47,48,49]);
    return { prompt:"Wat is het dubbele?", visual:somKaart(`${n} + ${n} = ?`), choices:getalKeuzes(2*n,[2*n+10,2*n-10,2*n+2]), answer:2*n,
      tip: n>=10 ? `Dubbel eerst de tientallen (${n-n%10} → ${2*(n-n%10)}), dan de losse (${n%10} → ${2*(n%10)}).` : `${n} en nog eens ${n}.` }; }
  n = lvl===1 ? rnd(4,15)*2 : lvl===2 ? rnd(11,50)*2 : pick([30,50,70,90,34,54,74,94,36,56,76,96]);
  return { prompt:"Wat is de helft?", visual:`<div class="sum">helft van ${n}</div>`, choices:getalKeuzes(n/2,[n/2+5,n/2-5,n/2+10]), answer:n/2,
    tip:`Welk getal past twee keer in ${n}? ${n/2} + ${n/2} = ${n}.` };
}
function geldHTML(stukken){
  return `<div class="geld">${stukken.map(s=> s>=5 ? `<span class="brief ${s===10?"tien":s===20?"twintig":""}">€ ${s}</span>` : `<span class="munt">€ ${s}</span>`).join("")}</div>`;
}
function genGeld(lvl){
  if(lvl===1){
    const stukken = [...Array(rnd(0,2)).fill(5), ...Array(rnd(1,3)).fill(2), ...Array(rnd(1,3)).fill(1)].sort((a,b)=>b-a);
    if(Math.random()<0.4) stukken.unshift(10);
    const ans = stukken.reduce((a,b)=>a+b,0);
    return { prompt:"Hoeveel euro is dit samen?", visual:geldHTML(stukken), choices:getalKeuzes(ans).map(c=>({t:"€ "+c.v, v:c.v})), answer:ans, klein:true,
      tip:"Begin bij het grootste bedrag en tel dan door." };
  }
  if(lvl===2){
    const brief = pick([10,20,20,50]), prijs = rnd(Math.max(3,brief-18), brief-2), ans = brief-prijs;
    const ding = pick(["een boek","een bal","een puzzel","een knuffel","een spel","een pet"]);
    return { prompt:`Je koopt ${ding} van € ${prijs}. Je betaalt met € ${brief}. Hoeveel krijg je terug?`,
      choices:getalKeuzes(ans,[ans+10,ans-1,ans+1]).map(c=>({t:"€ "+c.v, v:c.v})), answer:ans, klein:true,
      tip:`Tel door van ${prijs} naar ${brief}. Hoeveel stappen zijn dat?` };
  }
  const bedrag = rnd(6,39); let rest=bedrag, n=0; const gebruikt=[];
  for(const s of [20,10,5,2,1]) while(rest>=s){ rest-=s; n++; gebruikt.push(s); }
  return { prompt:`Je betaalt precies € ${bedrag}. Je wilt zo min mogelijk briefjes en munten gebruiken. Hoeveel heb je er nodig?`,
    visual:`<div class="bij">Je mag kiezen uit:</div>${geldHTML([20,10,5,2,1])}`, choices:getalKeuzes(n,[n+1,n-1,n+2]), answer:n,
    tip:`Pak steeds de grootste die nog past: ${gebruikt.map(s=>"€ "+s).join(" + ")}.` };
}
function klokSVG(h,m){
  const cx=90, cy=90, uur=((h%12)+m/60)*30, min=m*6, pt=(hoek,r)=>[cx+r*Math.sin(hoek*Math.PI/180), cy-r*Math.cos(hoek*Math.PI/180)];
  let s=`<svg viewBox="0 0 180 180" width="170" role="img" aria-label="klok"><circle class="clock-face" cx="90" cy="90" r="82"/>`;
  for(let i=1;i<=12;i++){ const [x,y]=pt(i*30,64); s+=`<text class="clock-num" x="${x.toFixed(1)}" y="${(y+6).toFixed(1)}" text-anchor="middle">${i}</text>`;
    const [a,b]=pt(i*30,80), [c,d]=pt(i*30,74); s+=`<line class="tick" x1="${a.toFixed(1)}" y1="${b.toFixed(1)}" x2="${c.toFixed(1)}" y2="${d.toFixed(1)}"/>`; }
  const [hx,hy]=pt(uur,40), [mx,my]=pt(min,60);
  return s+`<line class="hand-h" x1="90" y1="90" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}"/><line class="hand-m" x1="90" y1="90" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}"/><circle cx="90" cy="90" r="5" fill="var(--ink)"/></svg>`;
}
const uur12 = h=>((h-1)%12+12)%12+1;
function klokTekst(h,m){
  if(m===0) return `${uur12(h)} uur`;
  if(m===15) return `kwart over ${uur12(h)}`;
  if(m===30) return `half ${uur12(h+1)}`;
  return `kwart voor ${uur12(h+1)}`;
}
function genKlok(lvl){
  const h=rnd(1,12), m = lvl===1 ? pick([0,30]) : pick([0,15,30,45]);
  const alle = [];
  for(let u=1;u<=12;u++) for(const mm of [0,15,30,45]) alle.push(klokTekst(u,mm));
  if(lvl<3){
    const goed=klokTekst(h,m);
    const fout = uniek([klokTekst(h+1,m), klokTekst(h-1,m), klokTekst(h,(m+30)%60), klokTekst(h,(m+15)%60), klokTekst(h+1,(m+30)%60)]).filter(x=>x!==goed);
    return { prompt:"Hoe laat is het?", visual:klokSVG(h,m), choices:tekstKeuzes(shuffle([goed, ...sample(fout,3)])), answer:goed, klein:true,
      tip: m===30 ? "De lange wijzer staat op de 6: het is half. De korte wijzer is al op weg naar het volgende uur."
         : m===0 ? "De lange wijzer staat op de 12: het is een heel uur."
         : m===15 ? "De lange wijzer staat op de 3: kwart over." : "De lange wijzer staat op de 9: kwart voor het volgende uur." };
  }
  const erbij = pick([15,30,45,60]), tot=h*60+m+erbij, h2=Math.floor(tot/60), m2=tot%60, goed=klokTekst(h2,m2);
  const wat = {15:"een kwartier",30:"een half uur",45:"drie kwartier",60:"een uur"}[erbij];
  const fout = uniek([klokTekst(h2,(m2+15)%60), klokTekst(h2+1,m2), klokTekst(h2-1,m2), klokTekst(h2,(m2+30)%60), klokTekst(h,m)]).filter(x=>x!==goed);
  return { prompt:`Het is nu ${klokTekst(h,m)}. Hoe laat is het over ${wat}?`, visual:klokSVG(h,m),
    choices:tekstKeuzes(shuffle([goed, ...sample(fout,3)])), answer:goed, klein:true,
    tip:`Draai de lange wijzer ${erbij/15} ${erbij===15?"kwartier":"kwartieren"} verder. Dan is het ${goed}.` };
}
function genLijn(lvl){
  const n = lvl===1 ? rnd(1,19)*5 : rnd(3,97), x=v=>20+v*3;
  let s=`<svg viewBox="0 0 340 86" width="340" role="img" aria-label="getallenlijn van 0 tot 100"><line class="line-axis" x1="20" y1="50" x2="320" y2="50"/>`;
  for(let v=0;v<=100;v+=5){ const groot=v%10===0;
    s+=`<line class="line-axis" stroke-width="${groot?3:1.5}" x1="${x(v)}" y1="${groot?40:45}" x2="${x(v)}" y2="${groot?60:55}"/>`;
    if(groot && (lvl<3 || v%50===0)) s+=`<text class="line-lab" x="${x(v)}" y="80" text-anchor="middle">${v}</text>`; }
  s+=`<path class="arrow" d="M${x(n)} 38 l-8 -18 h16 z"/></svg>`;
  return { prompt:"Bij welk getal staat de pijl?", visual:s, choices:getalKeuzes(n, lvl===1?[n+5,n-5,n+10,n-10]:[n+1,n-1,n+10,n-10,n+2]), answer:n,
    tip: lvl===3 ? "Zoek eerst 50. Elke dikke streep is 10 verder." : `Zoek het tiental ervoor: ${n-n%10}. Tel dan door.` };
}
const verhaalHTML = regels=>`<div class="verhaal">${regels.map(r=>`<p>${r}</p>`).join("")}</div>`;
function genVerhaal(lvl){
  const k1=pick(NAMEN), k2=pick(NAMEN.filter(x=>x!==k1)), ding=pick(["knikkers","stickers","kaarten","schelpen","kralen"]);
  if(lvl===1){
    if(rnd(0,1)){ const a=rnd(6,12), b=rnd(4,8);
      return { prompt:"Lees het verhaal.", visual:verhaalHTML([`${k1} heeft ${a} ${ding}.`,`${k1} krijgt er ${b} bij.`,`<b>Hoeveel ${ding} heeft ${k1} nu?</b>`]),
        choices:getalKeuzes(a+b), answer:a+b, tip:`Erbij is plus: ${a} + ${b}.` }; }
    const a=rnd(12,20), b=rnd(3,9);
    return { prompt:"Lees het verhaal.", visual:verhaalHTML([`${k1} heeft ${a} ${ding}.`,`${k1} geeft er ${b} aan ${k2}.`,`<b>Hoeveel ${ding} heeft ${k1} nog?</b>`]),
      choices:getalKeuzes(a-b), answer:a-b, tip:`Weggeven is min: ${a} − ${b}.` };
  }
  if(lvl===2){
    const a=rnd(12,30), b=rnd(3,9), c=rnd(3,9), ans=a-b+c;
    return { prompt:"Lees het verhaal.", visual:verhaalHTML([`In de bus zitten ${a} mensen.`,`Er stappen ${b} mensen uit.`,`Daarna stappen er ${c} mensen in.`,`<b>Hoeveel mensen zitten er nu in de bus?</b>`]),
      choices:getalKeuzes(ans,[a-b,a+b+c,a-b-c]), answer:ans, tip:`Eerst ${a} − ${b} = ${a-b}. Dan ${a-b} + ${c}.` };
  }
  if(rnd(0,1)){ const a=rnd(8,25), b=rnd(3,9), ans=a+a+b;
    return { prompt:"Lees het verhaal.", visual:verhaalHTML([`${k1} heeft ${a} ${ding}.`,`${k2} heeft er ${b} meer dan ${k1}.`,`<b>Hoeveel ${ding} hebben ze samen?</b>`]),
      choices:getalKeuzes(ans,[a+b,a+a,ans-b]), answer:ans, tip:`${k2} heeft ${a} + ${b} = ${a+b}. Samen is dat ${a} + ${a+b}.` }; }
  const d=rnd(3,6), p=pick([2,5,10]), kwijt=rnd(2,p===2?3:6), ans=d*p-kwijt;
  return { prompt:"Lees het verhaal.", visual:verhaalHTML([`Er staan ${d} dozen op tafel.`,`In elke doos zitten ${p} potloden.`,`Er raken ${kwijt} potloden kwijt.`,`<b>Hoeveel potloden zijn er nog?</b>`]),
    choices:getalKeuzes(ans,[d*p,d+p-kwijt,d*p+kwijt]), answer:ans, tip:`${d} × ${p} = ${d*p} potloden. Dan ${kwijt} eraf.` };
}

/* ---------- BREINBREKERS ---------- */
function genMuur(lvl){
  const rijen = lvl===3 ? 4 : 3, top = lvl===1 ? 9 : lvl===2 ? 12 : 9;
  const muur = [Array.from({length:rijen},()=>rnd(1,top))];
  for(let r=1;r<rijen;r++) muur.push(muur[r-1].slice(1).map((v,i)=>v+muur[r-1][i]));
  // rij 0 is de onderste laag
  const r = lvl===1 ? rnd(1,rijen-1) : rnd(0,rijen-2), c = rnd(0,muur[r].length-1), ans = muur[r][c];
  const html = `<div class="muur">${muur.slice().reverse().map((rij,ri)=>`<div class="rij">${rij.map((v,ci)=>
    (rijen-1-ri===r && ci===c) ? `<span class="steen q">?</span>` : `<span class="steen">${v}</span>`).join("")}</div>`).join("")}</div>
    <div class="bij">Twee stenen naast elkaar zijn samen de steen erboven.</div>`;
  const tip = r>0 ? "Tel de twee stenen onder het vraagteken bij elkaar op."
    : "Kijk naar de steen boven het vraagteken. Wat moet er bij de buurman om dat getal te krijgen?";
  return { prompt:"Welk getal hoort op de rode steen?", visual:html, choices:getalKeuzes(ans), answer:ans, tip };
}
function genTover(lvl){
  let v=[[2,7,6],[9,5,1],[4,3,8]];
  for(let i=rnd(0,3);i>0;i--) v=v[0].map((_,c)=>v.map(r=>r[c]).reverse());
  if(rnd(0,1)) v=v.map(r=>r.slice().reverse());
  const k=rnd(0, lvl===1?2:lvl===2?5:10); v=v.map(r=>r.map(x=>x+k));
  const som=15+3*k, r=rnd(0,2), c=rnd(0,2), leeg=new Set([r*3+c]);
  if(lvl>=2){ const r3=pick([0,1,2].filter(x=>x!==r)); sample([0,1,2],2).forEach(cc=>leeg.add(r3*3+cc)); }
  const html = `<div class="raster g3">${v.flat().map((x,i)=> i===r*3+c ? `<span class="cel q">?</span>` : leeg.has(i) ? `<span class="cel leeg"></span>` : `<span class="cel">${x}</span>`).join("")}</div>
    <div class="bij">${lvl<3 ? `Elke rij, elke kolom en schuin is samen <b>${som}</b>.` : "Elke rij, elke kolom en schuin is samen even veel."}</div>`;
  const buren = v[r].filter((_,i)=>i!==c);
  // Afleiders die al in het vierkant staan zijn te makkelijk weg te strepen.
  const staatEr = new Set(v.flat().filter((_,i)=>!leeg.has(i))), goedGetal=v[r][c];
  const buurt = shuffle([1,-1,2,-2,3,-3,4,-4,5,-5,6,7,8,9].map(d=>goedGetal+d).filter(x=>x>0));
  const naast = [...buurt.filter(x=>!staatEr.has(x)), ...buurt.filter(x=>staatEr.has(x))].slice(0,3);
  return { prompt:"Welk getal is weg?", visual:html, choices:[goedGetal,...naast].sort((a,b)=>a-b).map(x=>({t:String(x),v:x})), answer:goedGetal,
    tip: lvl<3 ? `Kijk naar de rij met het vraagteken: ${buren[0]} + ${buren[1]} = ${buren[0]+buren[1]}. Hoeveel moet erbij tot ${som}?`
               : `Tel eerst een rij op die helemaal vol is. Dat is ${som}. Dan de rij met het vraagteken.` };
}
function genWeeg(lvl){
  const [A,B,C] = sample(FRUIT,3);
  let regels, ans, tip, vraag;
  if(lvl===1){ const a=rnd(2,9), b=pick([1,2,3,4,5,6,7,8,9].filter(x=>x!==a));
    regels=[`${A} + ${A} = ${2*a}`, `${A} + ${B} = ${a+b}`]; ans=b; vraag=B;
    tip=`${A} + ${A} = ${2*a}, dus ${A} is ${a}. Wat moet er bij ${a} om ${a+b} te krijgen?`; }
  else if(lvl===2){ const a=rnd(2,6), b=rnd(2,9), c=pick([2,3,4,5,6,7,8,9].filter(x=>x!==b));
    regels=[`${A} + ${A} + ${A} = ${3*a}`, `${A} + ${B} = ${a+b}`, `${B} + ${C} = ${b+c}`]; ans=c; vraag=C;
    tip=`Begin bovenaan: ${A} is ${a}. Dan is ${B} ${b}. Nu de laatste regel.`; }
  else { const a=rnd(3,9), b=rnd(2,9);
    regels=[`${A} + ${B} = ${a+b}`, `${A} + ${A} + ${B} = ${2*a+b}`]; ans=b; vraag=B;
    tip=`In de tweede regel staat één ${A} meer. Het verschil is ${a}, dus ${A} is ${a}.`; }
  return { prompt:"Elk plaatje is een getal. Welk getal?", visual:regels.map(r=>`<div class="weegregel">${r}</div>`).join("")+`<div class="weegregel">${vraag} = <span class="q">?</span></div>`,
    choices:getalKeuzes(ans), answer:ans, tip };
}
function genRij(lvl){
  let rij, regel;
  const soort = lvl===1 ? 0 : lvl===2 ? rnd(0,2) : rnd(2,5);
  if(soort===0){ const k=pick([2,3,4,5,10]), op=rnd(0,1), s= op ? rnd(1,20) : rnd(6*k,6*k+20);
    rij=Array.from({length:6},(_,i)=> op ? s+i*k : s-i*k); regel= op ? `Er komt steeds ${k} bij.` : `Er gaat steeds ${k} af.`; }
  else if(soort===1){ const s=rnd(1,4); rij=Array.from({length:6},(_,i)=>s*2**i); regel="Elk getal is het dubbele van het vorige."; }
  else if(soort===2){ const k=pick([6,7,8,9,11,15,20]), s=rnd(1,30); rij=Array.from({length:6},(_,i)=>s+i*k); regel=`Er komt steeds ${k} bij.`; }
  else if(soort===3){ const s=rnd(1,10); rij=[s]; for(let i=1;i<6;i++) rij.push(rij[i-1]+i); regel="Er komt steeds één meer bij: +1, +2, +3, +4…"; }
  else if(soort===4){ const a=rnd(4,9), b=rnd(1,a-1), s=rnd(5,20); rij=[s]; for(let i=1;i<6;i++) rij.push(rij[i-1]+(i%2? a : -b)); regel=`Om de beurt: ${a} erbij, ${b} eraf.`; }
  else { const a=rnd(1,4), b=rnd(1,5); rij=[a,b]; for(let i=2;i<6;i++) rij.push(rij[i-1]+rij[i-2]); regel="Tel steeds de twee getallen ervoor bij elkaar op."; }
  const gat = lvl===1 ? 5 : rnd(3,5), ans=rij[gat];
  const html = `<div class="muur"><div class="rij" style="flex-wrap:wrap;justify-content:center">${rij.map((v,i)=> i===gat ? `<span class="steen q">?</span>` : `<span class="steen">${v}</span>`).join("")}</div></div>`;
  return { prompt:"Welk getal hoort op de plek van het vraagteken?", visual:html, choices:getalKeuzes(ans), answer:ans, tip:"Kijk hoeveel er steeds bij komt of af gaat. "+regel };
}
function genRaad(lvl){
  const [lo,hi] = lvl===1 ? [1,20] : lvl===2 ? [10,50] : [10,99];
  for(let poging=0;poging<60;poging++){
    const n=rnd(lo,hi), cijfers=String(n).split("").map(Number), cs=cijfers.reduce((a,b)=>a+b,0);
    const anders = uniek(shuffle([n+1,n-1,n+2,n-2,n+10,n-10,n+5,n-5,n+11,n-9, rnd(lo,hi), rnd(lo,hi)]).filter(x=>x>=lo && x<=hi && x!==n)).slice(0,3);
    if(anders.length<3) continue;
    const onder=Math.max(0,n-rnd(1,4)), boven=n+rnd(1,4);
    const hints = shuffle([
      [`Ik ben groter dan ${onder}.`, x=>x>onder], [`Ik ben kleiner dan ${boven}.`, x=>x<boven],
      [n%2 ? "Ik ben oneven." : "Ik ben even.", x=>x%2===n%2],
      ...(n>=10 ? [[`Mijn cijfers zijn samen ${cs}.`, x=>String(x).split("").reduce((a,b)=>a+ +b,0)===cs]] : []),
      ...(lvl>=2 && n%5===0 ? [["Ik zit in de tafel van 5.", x=>x%5===0]] : []),
      ...(lvl>=2 && n>=10 ? [[`Ik heb ${cijfers[0]} ${cijfers[0]===1?"tiental":"tientallen"}.`, x=>Math.floor(x/10)===cijfers[0]]] : []),
      ...(lvl===3 && cijfers[0]===cijfers[1] ? [["Mijn twee cijfers zijn hetzelfde.", x=>x%11===0]] : [])
    ]);
    const gekozen=[]; let over=anders.slice();
    for(const h of hints){ if(!over.length) break; if(over.some(x=>!h[1](x))){ gekozen.push(h); over=over.filter(x=>h[1](x)); } }
    if(over.length) continue;
    for(const h of hints){ if(gekozen.length>=2) break; if(!gekozen.includes(h)) gekozen.push(h); }
    return { prompt:"Welk getal ben ik?", visual:verhaalHTML(shuffle(gekozen).map(h=>h[0])),
      choices:[n,...anders].sort((a,b)=>a-b).map(v=>({t:String(v),v})), answer:n,
      tip:"Lees de regels één voor één. Streep in je hoofd de getallen weg die niet kunnen." };
  }
  return genRij(lvl);
}
function telOplossingen(g){
  const i=g.indexOf(0); if(i<0) return 1;
  const r=Math.floor(i/4), c=i%4; let n=0;
  for(let v=1;v<=4;v++){ let kan=true;
    for(let k=0;k<4 && kan;k++){ if(g[r*4+k]===v || g[k*4+c]===v) kan=false; }
    const br=r-r%2, bc=c-c%2;
    for(let a=0;a<2 && kan;a++) for(let b=0;b<2;b++) if(g[(br+a)*4+bc+b]===v) kan=false;
    if(kan){ g[i]=v; n+=telOplossingen(g); g[i]=0; if(n>1) return n; } }
  return n;
}
function genSudoku(lvl){
  let g=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];
  if(rnd(0,1)) [g[0],g[1]]=[g[1],g[0]]; if(rnd(0,1)) [g[2],g[3]]=[g[3],g[2]]; if(rnd(0,1)) g=[g[2],g[3],g[0],g[1]];
  if(rnd(0,1)) g=g.map(r=>[r[1],r[0],r[2],r[3]]); if(rnd(0,1)) g=g.map(r=>[r[0],r[1],r[3],r[2]]); if(rnd(0,1)) g=g.map(r=>[r[2],r[3],r[0],r[1]]);
  const p=shuffle([1,2,3,4]), vol=g.flat().map(v=>p[v-1]);
  const gaten = lvl===1 ? 4 : lvl===2 ? 6 : 8;
  for(let poging=0;poging<200;poging++){
    const weg=sample([...Array(16).keys()],gaten), doel=weg[0], puzzel=vol.map((v,i)=>weg.includes(i)?0:v);
    const r=Math.floor(doel/4), c=doel%4, gezien=new Set();
    for(let k=0;k<4;k++){ gezien.add(puzzel[r*4+k]); gezien.add(puzzel[k*4+c]); }
    for(let a=0;a<2;a++) for(let b=0;b<2;b++) gezien.add(puzzel[(r-r%2+a)*4+c-c%2+b]);
    gezien.delete(0);
    if(lvl<3 ? gezien.size!==3 : (gezien.size===3 || telOplossingen(puzzel.slice())!==1)) continue;
    const html=`<div class="raster g4">${puzzel.map((v,i)=> i===doel ? `<span class="cel q">?</span>` : v ? `<span class="cel">${v}</span>` : `<span class="cel leeg"></span>`).join("")}</div>
      <div class="bij">In elke rij, elke kolom en elk blok staan 1, 2, 3 en 4 precies één keer.</div>`;
    return { prompt:"Welk cijfer hoort op het rode vakje?", visual:html, choices:[1,2,3,4].map(v=>({t:String(v),v})), answer:vol[doel],
      tip: lvl<3 ? "Kijk welke cijfers al in de rij, de kolom en het blok van het rode vakje staan. Welk cijfer mist er?"
                 : "Het rode vakje lukt niet meteen. Vul eerst in je hoofd een ander leeg vakje in." };
  }
  return genSudoku(1);
}
function genCombi(lvl){
  if(lvl===1 || (lvl===2 && rnd(0,1))){
    const a=rnd(2,lvl===1?3:4), b=rnd(2,3);
    const [x,y,wat] = pick([["truien","broeken","setjes kleren"],["smaken ijs","soorten hoorntjes","ijsjes"],["mutsen","sjaals","setjes"],["soorten brood","soorten beleg","boterhammen"]]);
    return { prompt:`Je hebt ${a} ${x} en ${b} ${y}. Hoeveel verschillende ${wat} kun je maken?`, choices:getalKeuzes(a*b,[a+b,a*b+1,a*b-1]), answer:a*b, klein:false,
      tip:`Bij elke van de ${a} ${x} kun je ${b} ${y} kiezen. Dat is ${a} × ${b}.` };
  }
  if(lvl===2 && rnd(0,1)){
    const [a,b,c]=pick([[2,2,2],[2,2,3],[3,2,2],[2,3,2]]);
    return { prompt:`Een lunch: ${a} soorten brood, ${b} soorten beleg en ${c} soorten drinken. Hoeveel verschillende lunches kun je maken?`,
      choices:getalKeuzes(a*b*c,[a+b+c,a*b,a*b*c+2]), answer:a*b*c,
      tip:`Eerst brood en beleg: ${a} × ${b} = ${a*b}. Bij elk daarvan kun je ${c} soorten drinken kiezen.` };
  }
  if(lvl===2){
    return { prompt:"Je gooit drie keer een munt op. Het is kop of munt. Hoeveel verschillende rijtjes kun je krijgen?", choices:getalKeuzes(8,[6,3,9]), answer:8,
      tip:"De eerste keer zijn er 2 mogelijkheden. Bij elke daarvan weer 2. En dan nog eens 2: 2 × 2 × 2." };
  }
  const s=rnd(0,2);
  if(s===0){ const n=rnd(3,5), ans=n*(n-1)/2;
    return { prompt:`${n} kinderen geven elkaar allemaal één keer een hand. Hoeveel keer worden er handen geschud?`, choices:getalKeuzes(ans,[n,n*2,n*(n-1)]), answer:ans,
      tip:`Het eerste kind schudt ${n-1} handen. Het tweede nog ${n-2} nieuwe. Tel zo door.` }; }
  if(s===1) return { prompt:"Drie kinderen gaan naast elkaar op een rij staan. Op hoeveel manieren kan dat?", choices:getalKeuzes(6,[3,9,4]), answer:6,
      tip:"Vooraan kunnen 3 kinderen staan. Daarna blijven er 2 over, en dan 1. Dat is 3 × 2 × 1." };
  const n=rnd(4,5), ans=n*(n-1)/2;
  return { prompt:`Er zijn ${n} smaken ijs. Je kiest twee verschillende smaken. Hoeveel verschillende ijsjes kan dat geven?`, choices:getalKeuzes(ans,[n,n*2,n+2]), answer:ans,
    tip:"Schrijf de smaken op als A, B, C… en maak alle tweetallen: AB, AC, AD…" };
}
function genLogica(lvl){
  const n = lvl===1 ? 3 : lvl===2 ? 4 : 3, wie = sample(NAMEN,n); // wie[0] heeft het meest
  const [meer,minder,top,bodem] = pick([["langer","korter","het langst","het kortst"],["ouder","jonger","het oudst","het jongst"],
    ["sneller","langzamer","het snelst","het langzaamst"]]);
  let regels=[]; for(let i=0;i<n-1;i++) regels.push(lvl===3 && rnd(0,1) ? `${wie[i+1]} is ${minder} dan ${wie[i]}.` : `${wie[i]} is ${meer} dan ${wie[i+1]}.`);
  if(lvl>=2) regels=shuffle(regels);
  const soort = lvl===3 ? rnd(0,2) : rnd(0,1);
  const [vraag, ans] = soort===0 ? [`Wie is ${top}?`, wie[0]] : soort===1 ? [`Wie is ${bodem}?`, wie[n-1]] : ["Wie staat er in het midden?", wie[1]];
  return { prompt:"Lees goed en denk na.", visual:verhaalHTML([...regels, `<b>${vraag}</b>`]), choices:tekstKeuzes(shuffle(wie)), answer:ans, klein:true, cols:n===4?2:3,
    tip:`Zet ze in je hoofd op een rij, van ${top.replace("het ","")} naar ${bodem.replace("het ","")}.` };
}
function genMaak(lvl){
  const keer = lvl===3;
  for(let poging=0;poging<200;poging++){
    let a,b;
    if(lvl===1){ a=rnd(3,12); b=rnd(3,12); } else if(lvl===2){ a=rnd(2,10)*5; b=rnd(2,10)*5; } else { a=pick([2,3,4,5,6,10]); b=rnd(2,9); }
    if(a===b) continue;
    const doel = keer ? a*b : a+b, set=new Set([a,b]);
    let stop=0;
    while(set.size<6 && stop++<80){ const x = lvl===1 ? rnd(1,15) : lvl===2 ? rnd(1,14)*5 : rnd(2,12);
      const botst=[...set].some(y=> keer ? x*y===doel : x+y===doel);
      if(!botst && !(keer ? x*x===doel : false)) set.add(x); }
    if(set.size<6) continue;
    const tegels=shuffle([...set]);
    return { prompt: keer ? `Welke twee getallen zijn keer elkaar ${doel}?` : `Welke twee getallen zijn samen ${doel}?`,
      visual:`<div class="sum">${doel}</div>`, choices:tegels.map(v=>({t:String(v),v})), cols:3,
      multi:{need:2, ok:v=> keer ? v[0]*v[1]===doel : v[0]+v[1]===doel, goed:x=>x===a||x===b},
      tip: keer ? `Zoek een getal waar ${doel} in de tafel zit.` : `Kies een getal en reken uit wat er nog bij moet tot ${doel}.` };
  }
  return genRij(1);
}

/* ---------- alle oefeningen ---------- */
const VAKKEN = [
  {id:"lezen", icon:"🏁", title:"Racelezen", sub:"woorden en zinnen vlot lezen, zonder te hakken", acts:[
    {id:"flits", icon:"⚡", title:"Flitswoord", sub:"het woord is zo weer weg", gen:genFlits},
    {id:"race", icon:"🏁", title:"Woordrace", sub:"lees de rij en versla je eigen tijd", race:true},
    {id:"waar", icon:"👍", title:"Waar of niet waar", sub:"lees de zin en beslis snel", gen:genWaar},
    {id:"zoek", icon:"🔎", title:"Zoek het woord", sub:"drie keer hetzelfde woord vinden", gen:genZoek},
    {id:"zinflits", icon:"💨", title:"Flitszin", sub:"onthoud wie, wat en waar", gen:genZinFlits}]},
  {id:"rekenen", icon:"⭐", title:"Drie sterren", sub:"sommen tot 100, tafels, geld en klok", acts:[
    {id:"tot20", icon:"9+8", title:"Vlot tot 20", sub:"over de tien, op tempo", gen:genTot20},
    {id:"tien", icon:"46+30", title:"Tot 100", sub:"rekenen met tientallen", gen:genTien},
    {id:"splits", icon:"100", title:"Splitsen", sub:"welk getal hoort erbij?", gen:genSplits},
    {id:"keer", icon:"×", title:"Tafels", sub:"keer en eerlijk delen", gen:genKeer},
    {id:"helft", icon:"½", title:"Dubbel en helft", sub:"tot 100", gen:genHelft},
    {id:"lijn", icon:"↧", title:"Getallenlijn", sub:"waar staat de pijl?", gen:genLijn},
    {id:"geld", icon:"💶", title:"Geld", sub:"tellen, betalen en teruggeven", gen:genGeld},
    {id:"klok", icon:"🕒", title:"Klok", sub:"half, kwart en verder rekenen", gen:genKlok},
    {id:"verhaal", icon:"📖", title:"Verhaalsommen", sub:"eerst lezen, dan rekenen", gen:genVerhaal}]},
  {id:"brein", icon:"🐯", title:"Breinbrekers", sub:"puzzels om over na te denken, als opstap naar Rekentijgers", acts:[
    {id:"muur", icon:"🧱", title:"Rekenmuur", sub:"welke steen mist er?", gen:genMuur},
    {id:"weeg", icon:"🍎", title:"Fruitsommen", sub:"elk plaatje is een getal", gen:genWeeg},
    {id:"rij", icon:"➰", title:"Getallenrij", sub:"ontdek de regel", gen:genRij},
    {id:"raad", icon:"🕵️", title:"Welk getal ben ik?", sub:"raadsels met aanwijzingen", gen:genRaad},
    {id:"tover", icon:"🔮", title:"Tovervierkant", sub:"alles telt even veel op", gen:genTover},
    {id:"sudoku", icon:"🔢", title:"Mini-sudoku", sub:"1, 2, 3 en 4 op hun plek", gen:genSudoku},
    {id:"maak", icon:"🎯", title:"Maak het getal", sub:"kies de twee goede kaarten", gen:genMaak},
    {id:"logica", icon:"🧠", title:"Wie is het?", sub:"lezen en logisch denken", gen:genLogica},
    {id:"combi", icon:"🍦", title:"Hoeveel manieren?", sub:"tellen zonder iets te vergeten", gen:genCombi}]}
];
const ACTS = {}; VAKKEN.forEach(v=>v.acts.forEach(a=>{ ACTS[a.id]=a; a.vak=v.id; }));
ACTS.dag = {id:"dag", icon:"🚀", title:"Uitdaging van de dag", sub:"tien vragen door elkaar, dubbele punten"};
/* Vaste volgorde voor het opslaan. Alleen achteraan aanvullen, nooit verplaatsen. */
const ACT_IDS = ["flits","race","waar","zoek","zinflits","tot20","tien","splits","keer","helft","lijn","geld","klok","verhaal",
                 "muur","weeg","rij","raad","tover","sudoku","maak","logica","combi","dag"];
const RIJEN = [{t:"Rij 1 · korte woorden", s:"straat · schip · licht", lvl:1},{t:"Rij 2 · twee stukjes", s:"tafel · bloemen · zingen", lvl:2},
               {t:"Rij 3 · lange woorden", s:"olifant · verhaal · vrolijk", lvl:3}];
const RACE_N = 14;

if(typeof module !== "undefined") module.exports = {VAKKEN, ACTS, ACT_IDS, WOORDEN, ZINNEN, lijken, telOplossingen, klokTekst};

/* ====================================================================== */
if(typeof document !== "undefined") (function(){
const $ = id=>document.getElementById(id);
const today = ()=>{ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
const gisteren = ()=>{ const d=new Date(Date.now()-864e5); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };

const STICKERPAGINAS = [
  ["Ruimte", ["🚀","🛸","🪐","🌍","🌙","☄️","👩‍🚀","🛰️","🔭","👽","🌠","🌌"]],
  ["Zee", ["🐬","🐙","🦈","🐠","🐡","🦀","🐚","🐳","🦭","🦞","🦑","🐢"]],
  ["Jungle", ["🦁","🐯","🐒","🦜","🐘","🦒","🦓","🐍","🦥","🦩","🐊","🦏"]],
  ["Lekkers", ["🍓","🍉","🍕","🧁","🍦","🍩","🍪","🥞","🍫","🍿","🧇","🍭"]],
  ["Feest", ["⚽","🎨","🎸","🛹","🎡","🎠","🏆","🎯","🪁","🎳","🛼","🏰"]]
];
const STICKERS = STICKERPAGINAS.flatMap(p=>p[1]);
const drieSterren = vak=>VAKKEN.find(v=>v.id===vak).acts.filter(a=>(P.best[a.id]||0)>=3).length;
const BADGES = [
  {ic:"🎈", t:"Eerste ronde", d:"Maak je eerste ronde af.", ok:()=>P.rounds>=1},
  {ic:"💯", t:"Foutloos", d:"Een hele ronde in één keer goed.", ok:()=>P.perfect>=1},
  {ic:"🔥", t:"Acht op rij", d:"Acht vragen achter elkaar goed.", ok:()=>P.bestCombo>=8},
  {ic:"📅", t:"Drie dagen", d:"Drie dagen achter elkaar geoefend.", ok:()=>P.streak>=3},
  {ic:"🗓️", t:"Een hele week", d:"Zeven dagen achter elkaar geoefend.", ok:()=>P.streak>=7},
  {ic:"🏁", t:"Racer", d:"Vijf woordraces gelezen.", ok:()=>P.raceN>=5},
  {ic:"⚡", t:"Bliksemsnel", d:"Twintig keer snel én goed.", ok:()=>P.snel>=20},
  {ic:"📚", t:"Leeskampioen", d:"Drie sterren bij vier leesoefeningen.", ok:()=>drieSterren("lezen")>=4},
  {ic:"🐯", t:"Tijger", d:"Drie sterren bij vijf breinbrekers.", ok:()=>drieSterren("brein")>=5},
  {ic:"🧗", t:"Topniveau", d:"Niveau 3 bij vijf oefeningen.", ok:()=>Object.values(P.lvl).filter(x=>x>=3).length>=5},
  {ic:"📒", t:"Half boek", d:"Dertig stickers verzameld.", ok:()=>P.stickers.length>=30},
  {ic:"👑", t:"Boek vol", d:"Alle stickers verzameld.", ok:()=>P.stickers.length>=STICKERS.length}
];
const RANGEN = ["Starter","Speurder","Racer","Denker","Rekenheld","Leesheld","Puzzelaar","Tijger","Sterrenkind","Kampioen"];

/* ---------- opslag ---------- */
const FRESH = ()=>({xp:0,streak:0,lastDay:"",dag:"",dagN:0,rounds:0,perfect:0,bestCombo:0,daily:"",stickers:[],badges:[],best:{},lvl:{},st:{},rec:[0,0,0],snel:0,raceN:0});
function load(k,d){ try{ const v=localStorage.getItem(k); return v===null?d:JSON.parse(v); }catch(e){ return d; } }
function save(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
function encodeP(p){
  const a=[1,p.xp,p.streak,p.lastDay,p.dag,p.dagN,p.rounds,p.perfect,p.bestCombo,p.daily,p.stickers.join("."),p.badges.join("."),
    ACT_IDS.map(i=>p.best[i]||0).join(""), ACT_IDS.map(i=>p.lvl[i]||1).join(""), ACT_IDS.flatMap(i=>p.st[i]||[0,0,0]), p.rec, p.snel, p.raceN];
  try{ return btoa(unescape(encodeURIComponent(JSON.stringify(a)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }catch(e){ return ""; }
}
function decodeP(code){
  try{
    const a=JSON.parse(decodeURIComponent(escape(atob(String(code).trim().replace(/-/g,"+").replace(/_/g,"/")))));
    if(!Array.isArray(a) || a[0]!==1) return null;
    const p=FRESH(), nums=s=>String(s||"").split(".").filter(x=>x!=="").map(Number).filter(Number.isInteger);
    [,p.xp,p.streak,p.lastDay,p.dag,p.dagN,p.rounds,p.perfect,p.bestCombo,p.daily]=a;
    p.stickers=nums(a[10]).filter(i=>i>=0&&i<STICKERS.length); p.badges=nums(a[11]);
    ACT_IDS.forEach((id,i)=>{ const b=+String(a[12]||"")[i]||0, l=+String(a[13]||"")[i]||1, s=(a[14]||[]).slice(i*3,i*3+3);
      if(b) p.best[id]=b; if(l>1) p.lvl[id]=l; if(s.length===3 && s[1]) p.st[id]=s.map(Number); });
    p.rec=(a[15]||[0,0,0]).map(Number); p.snel=+a[16]||0; p.raceN=+a[17]||0;
    ["xp","streak","dagN","rounds","perfect","bestCombo"].forEach(k=>p[k]=+p[k]||0);
    return p;
  }catch(e){ return null; }
}
const waarde = p=>p.xp + p.stickers.length*50 + p.rounds;
let P = Object.assign(FRESH(), load("sterre2-v1", {}));
let laatstBewaard="", bewaarTimer=0;
function toonBewaard(t, fout){ const el=$("saveState"); if(el){ el.textContent=t; el.classList.toggle("fout",!!fout); } }
async function naarServer(){
  const code=encodeP(P); if(!code || code===laatstBewaard) return;
  try{
    const r=await fetch("/api/sterre2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:code}),credentials:"same-origin"});
    if(!r.ok) throw new Error(r.status);
    laatstBewaard=code; toonBewaard("Opgeslagen ✓");
  }catch(e){ toonBewaard("Nog niet opgeslagen. Kom even online.", true); }
}
function persist(){ save("sterre2-v1",P); clearTimeout(bewaarTimer); bewaarTimer=setTimeout(naarServer,400); }
(async function startOpslag(){
  try{ if(navigator.storage && navigator.storage.persist) await navigator.storage.persist(); }catch(e){}
  try{
    const r=await fetch("/api/sterre2",{credentials:"same-origin"}); if(!r.ok) return;
    const j=await r.json(), S=j && j.data ? decodeP(j.data) : null;
    if(S && waarde(S)>waarde(P)){ P=S; save("sterre2-v1",P); renderHome(); }
    if(S) laatstBewaard=encodeP(S);
    if(waarde(P)>(S?waarde(S):0)) naarServer();
  }catch(e){}
})();

/* ---------- geluid ---------- */
let soundOn = load("sterre2-geluid", true);
const spelers={};
function maakSpelers(){
  if(spelers.goed) return;
  ["goed","combo","fout","fanfare","pop"].forEach(k=>{ try{ const a=new Audio("/sterre/geluid/"+k+".wav"); a.preload="auto"; a.volume=0.7; spelers[k]=a; }catch(e){} });
}
function speel(k){ if(!soundOn) return; maakSpelers(); const a=spelers[k]; if(!a) return; try{ a.currentTime=0; const p=a.play(); if(p&&p.catch) p.catch(()=>{}); }catch(e){} }
document.addEventListener("pointerdown", maakSpelers, {once:true});

/* ---------- Sterre zelf ---------- */
function ster(stemming){
  const pts=[]; for(let i=0;i<10;i++){ const r=i%2?23:46, a=-Math.PI/2+i*Math.PI/5; pts.push((50+r*Math.cos(a)).toFixed(1)+","+(53+r*Math.sin(a)).toFixed(1)); }
  const mond = stemming==="sip" ? `<path class="m-mouth" d="M42 64 q8 -6 16 0"/>` : stemming==="wauw" ? `<ellipse cx="50" cy="62" rx="5" ry="6" fill="#1E1A3A"/>` : `<path class="m-mouth" d="M41 59 q9 9 18 0"/>`;
  const ogen = stemming==="blij" ? `<path class="m-mouth" d="M38 50 q4 -5 8 0 M54 50 q4 -5 8 0"/>` : `<circle class="m-eye" cx="42" cy="49" r="3.4"/><circle class="m-eye" cx="58" cy="49" r="3.4"/>`;
  return `<svg class="mascot" width="100" height="100" viewBox="0 0 100 100" aria-hidden="true"><polygon class="m-body" points="${pts.join(" ")}"/>${ogen}${mond}<circle class="m-cheek" cx="35" cy="57" r="4"/><circle class="m-cheek" cx="65" cy="57" r="4"/></svg>`;
}
function toast(t){ const el=$("toast"); el.textContent=t; el.classList.add("show"); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("show"),2600); }
function confetti(){
  const c=$("confetti"), ctx=c.getContext("2d"); c.width=innerWidth; c.height=innerHeight;
  const kl=["#FFC93C","#3B2A8C","#F27CA9","#2E9E5B","#5E4BC2"], d=Array.from({length:90},()=>({x:innerWidth/2,y:innerHeight*0.35,vx:(Math.random()-0.5)*14,vy:-Math.random()*13-3,k:pick(kl),r:rnd(4,8),a:Math.random()*6}));
  let t=0; (function stap(){ ctx.clearRect(0,0,c.width,c.height);
    d.forEach(p=>{ p.vy+=0.4; p.x+=p.vx; p.y+=p.vy; p.a+=0.2; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.a); ctx.fillStyle=p.k; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.6); ctx.restore(); });
    if(++t<110) requestAnimationFrame(stap); else ctx.clearRect(0,0,c.width,c.height); })();
}

/* ---------- beginscherm ---------- */
const SCHERMEN=["home","cat","game","race","result","album","overzicht","instel"];
function show(id){ SCHERMEN.forEach(s=>$(s).hidden = s!==id); scrollTo(0,0); }
const rang = xp=>{ const n=Math.floor(xp/150); return {n:n+1, naam:RANGEN[Math.min(n,RANGEN.length-1)], deel:(xp%150)/150}; };
const reeksNu = ()=> (P.lastDay===today() || P.lastDay===gisteren()) ? P.streak : 0;
const vandaagN = ()=> P.dag===today() ? P.dagN : 0;
const sterHTML = n=>[1,2,3].map(i=>`<span class="${i<=n?"":"off"}">★</span>`).join("");
function actTile(a){
  const klaar = a.id==="dag" && P.daily===today();
  const onder = a.id==="dag" ? "" : a.race
    ? `<span class="onder"><span class="stars">${sterHTML(P.best.race||0)}</span>${Math.max(...P.rec)?`<span class="nv">${Math.max(...P.rec)} per min</span>`:""}</span>`
    : `<span class="onder"><span class="stars">${sterHTML(P.best[a.id]||0)}</span><span class="nv">niveau ${P.lvl[a.id]||1}</span></span>`;
  return `<button class="tile${a.id==="dag"?" breed":""}${klaar?" klaar":""}" data-id="${a.id}"><span class="icon">${a.icon}</span><b>${a.title}</b>
    <span class="sub">${klaar?"vandaag al gedaan, morgen weer":a.sub}</span>${onder}</button>`;
}
function renderHome(){
  const r=rang(P.xp), sk=reeksNu(), n=vandaagN();
  $("stats").innerHTML = `<div class="chip level"><span class="lvl-badge">${r.n}</span><span>${r.naam}</span><span class="xpbar"><i style="width:${Math.round(r.deel*100)}%"></i></span></div>
    <div class="chip${sk?"":" off"}"><span class="em">🔥</span>${sk}<small>${sk===1?"dag":"dagen"}</small></div>
    <div class="chip${n>=2?"":" off"}"><span class="em">${n>=2?"✅":"🎯"}</span>${Math.min(n,2)}/2</div>`;
  $("heroSter").innerHTML = ster("blij");
  $("bubble").textContent = n>=2 ? "Dagdoel gehaald. Knap gedaan!" : P.rounds===0 ? "Hoi! Waar begin je mee?" : n===1 ? "Nog één ronde voor je dagdoel." : pick(["Klaar voor de start?","Lezen, rekenen of puzzelen?","Zullen we racen?"]);
  $("vandaag").innerHTML = actTile(ACTS.dag);
  $("cats").innerHTML = VAKKEN.map(v=>{ const s=v.acts.reduce((t,a)=>t+(P.best[a.id]||0),0), max=v.acts.length*3;
    return `<button class="cattile" data-cat="${v.id}"><span class="catic">${v.icon}</span><span class="cattext"><b>${v.title}</b><small>${v.sub}</small>
      <span class="catbar"><i style="width:${Math.max(2,Math.round(s/max*100))}%"></i></span></span><span class="catster">${s}/${max}★</span></button>`; }).join("");
  $("albumSub").textContent = `${P.stickers.length}/${STICKERS.length}`;
  $("soundState").textContent = soundOn?"aan":"uit"; $("soundToggle").setAttribute("aria-pressed",String(soundOn));
}
let catNu=null;
function openCat(id){ const v=VAKKEN.find(x=>x.id===id); if(!v) return; catNu=id;
  $("catTitle").textContent=v.title; $("catSub").textContent=v.sub; $("catTiles").innerHTML=v.acts.map(actTile).join(""); show("cat"); }
function goHome(){ stopRace(); st=null; catNu=null; renderHome(); show("home"); }
function terug(){ stopRace(); st=null; if(catNu) openCat(catNu); else goHome(); }

/* ---------- een ronde ---------- */
let st=null;
const LOF=["Goed zo!","Knap!","Top!","Helemaal goed!","Super!","Ja!"];
function start(id){
  const act=ACTS[id]; if(!act) return;
  if(id==="dag" && P.daily===today()){ toast("Die heb je vandaag al gedaan. Morgen is er een nieuwe."); return; }
  catNu = act.vak || null;
  if(act.race){ openRace(); return; }
  st={id, act, n:id==="dag"?10:8, i:0, first:0, combo:0, maxCombo:0, dots:[], lvl:P.lvl[id]||1, xp:0, snel:0, vorige:""};
  $("gameTitle").textContent=act.title; show("game"); volgende();
}
function maakVraag(){
  for(let k=0;k<6;k++){
    let q;
    if(st.id==="dag"){ const a=pick(Object.values(ACTS).filter(x=>x.gen)); q=a.gen(P.lvl[a.id]||1); }
    else q=st.act.gen(st.lvl);
    const sleutel=(q.flits?q.flits.tekst:"")+(q.visual||"")+q.prompt;
    if(sleutel!==st.vorige || k===5){ st.vorige=sleutel; return q; }
  }
}
function volgende(){
  if(!st) return;
  if(st.i>=st.n){ klaar(); return; }
  const q=st.q=maakVraag(); st.mis=0; st.lock=false; st.gekozen=[];
  $("progress").innerHTML=Array.from({length:st.n},(_,i)=>`<span class="pdot ${st.dots[i]||""}${i===st.i?" now":""}"></span>`).join("");
  $("lvlPill").textContent = st.id==="dag" ? "dubbele punten" : `niveau ${st.lvl} van 3`;
  $("prompt").textContent=q.prompt; $("visual").innerHTML=q.visual||"";
  $("tip").hidden=true; $("feedback").textContent=""; $("feedback").className="feedback"; $("fbMascot").innerHTML="";
  const box=$("choices"); box.style.visibility=""; box.className="choices"+(q.cols===3?" c3":q.cols===1?" c1":"");
  box.innerHTML=q.choices.map((c,i)=>`<button class="choice${q.klein||q.mini?" klein":""}" ${q.mini?'style="font-size:1.05rem;min-height:54px;padding:6px 2px"':""} data-i="${i}">${c.t}</button>`).join("");
  if(q.flits) flits(); else st.t0=performance.now();
}
function flits(){
  const q=st.q, mijn=st.i, box=$("choices"); box.style.visibility="hidden"; st.lock=true;
  $("prompt").textContent=q.prompt;
  $("visual").innerHTML=`<div class="flits${q.flits.zin?" zin":""}" id="flitsBox">${q.flits.tekst}</div>`;
  clearTimeout(flits.t);
  flits.t=setTimeout(()=>{ if(!st || st.i!==mijn) return;
    const fb=$("flitsBox"); if(fb){ fb.textContent = q.flits.zin ? "• • •" : "•".repeat(Math.min(8,q.flits.tekst.length)); fb.classList.add("weg"); }
    if(q.flits.vraag) $("prompt").textContent=q.flits.vraag;
    $("visual").insertAdjacentHTML("beforeend",`<button class="linkbtn kijkweer" id="kijkWeer">👀 nog een keer zien</button>`);
    $("kijkWeer").onclick=()=>{ st.mis=Math.max(st.mis,1); flits(); };
    box.style.visibility=""; st.lock=false; st.t0=performance.now(); }, q.flits.ms);
}
function kies(btn){
  if(!st || st.lock || btn.disabled) return;
  const q=st.q, c=q.choices[+btn.dataset.i];
  if(q.multi){
    const i=st.gekozen.indexOf(btn);
    if(i>=0){ st.gekozen.splice(i,1); btn.classList.remove("kies"); return; }
    st.gekozen.push(btn); btn.classList.add("kies");
    if(st.gekozen.length<q.multi.need) return;
    if(q.multi.ok(st.gekozen.map(b=>q.choices[+b.dataset.i].v))){ st.gekozen.forEach(b=>{ b.classList.remove("kies"); b.classList.add("goed"); }); goed(); }
    else { const fout=st.gekozen.slice(); st.gekozen=[]; fout.forEach(b=>{ b.classList.remove("kies"); b.classList.add("schud"); setTimeout(()=>b.classList.remove("schud"),400); }); mis();
      if(st.mis>=2) [...$("choices").children].forEach(b=>{ if(q.multi.goed(q.choices[+b.dataset.i].v)) b.classList.add("wijs"); }); }
    return;
  }
  if(c.v===q.answer){ btn.classList.add("goed"); goed(); }
  else { btn.classList.add("fout"); btn.disabled=true; mis();
    if(st.mis>=2) [...$("choices").children].forEach(b=>{ if(q.choices[+b.dataset.i].v===q.answer) b.classList.add("wijs"); }); }
}
function mis(){
  st.mis++; st.combo=0; $("combo").classList.remove("show"); speel("fout");
  $("tip").hidden=false; $("tip").textContent="💡 "+st.q.tip;
  $("fbMascot").innerHTML=ster("sip"); $("feedback").className="feedback no"; $("feedback").textContent="Bijna. Probeer het nog eens.";
}
function goed(){
  st.lock=true; clearTimeout(flits.t);
  const eerste=st.mis===0, snel=eerste && st.q.snel && performance.now()-st.t0<st.q.snel;
  let xp=eerste?2:1; if(snel){ xp++; st.snel++; }
  if(eerste){ st.first++; st.combo++; st.maxCombo=Math.max(st.maxCombo,st.combo); st.dots[st.i]="first"; } else st.dots[st.i]="retry";
  st.xp+=xp; st.i++;
  const reeks = st.combo>=3 && eerste;
  speel(reeks && st.combo%5===0 ? "combo" : "goed");
  $("combo").textContent=`${st.combo} op rij`; $("combo").classList.toggle("show",reeks);
  $("fbMascot").innerHTML=ster(eerste?"blij":"gewoon"); $("feedback").className="feedback ok";
  $("feedback").textContent = (eerste?pick(LOF):"Nu wel goed!") + (snel?" ⚡ Snel!":"");
  const pop=document.createElement("span"); pop.className="xp-pop"; pop.textContent="+"+xp; $("feedback").parentNode.appendChild(pop); setTimeout(()=>pop.remove(),1000);
  setTimeout(volgende, eerste?850:1300);
}
function rondeGeteld(){
  const d=today();
  if(P.lastDay!==d){ P.streak = P.lastDay===gisteren() ? P.streak+1 : 1; P.lastDay=d; }
  if(P.dag!==d){ P.dag=d; P.dagN=0; }
  P.dagN++; P.rounds++;
}
function nieuweBadges(){
  const nieuw=[]; BADGES.forEach((b,i)=>{ if(!P.badges.includes(i) && b.ok()){ P.badges.push(i); nieuw.push(b); } }); return nieuw;
}
function nieuweSticker(){
  const over=STICKERS.map((_,i)=>i).filter(i=>!P.stickers.includes(i)); if(!over.length) return null;
  const i=pick(over); P.stickers.push(i); return STICKERS[i];
}
function klaar(){
  const s=st, pct=s.first/s.n, sterren = pct>=0.9?3:pct>=0.6?2:1, wasRang=rang(P.xp).n, dubbel=s.id==="dag";
  let xp=(s.xp+sterren*5)*(dubbel?2:1);
  rondeGeteld();
  P.xp+=xp; P.snel+=s.snel; P.bestCombo=Math.max(P.bestCombo,s.maxCombo); if(s.first===s.n) P.perfect++;
  P.best[s.id]=Math.max(P.best[s.id]||0,sterren);
  const x=P.st[s.id]||[0,0,0]; P.st[s.id]=[x[0]+s.first,x[1]+s.n,x[2]+1];
  let niveau="";
  if(dubbel) P.daily=today();
  else if(pct>=0.85 && s.lvl<3){ P.lvl[s.id]=s.lvl+1; niveau=`Je gaat naar niveau ${s.lvl+1}. Het wordt een stukje lastiger!`; }
  else if(pct<0.5 && s.lvl>1){ P.lvl[s.id]=s.lvl-1; niveau=`We gaan even terug naar niveau ${s.lvl-1} om te oefenen.`; }
  const sticker = sterren>=2 ? nieuweSticker() : null, badges=nieuweBadges(), nuRang=rang(P.xp);
  persist();
  $("resMascot").innerHTML=ster(sterren===3?"blij":"gewoon");
  $("resStars").innerHTML=[1,2,3].map(i=>`<span class="${i<=sterren?"pop-in":"off"}" style="animation-delay:${i*0.18}s">★</span>`).join("");
  $("resTitle").textContent = sterren===3?"Geweldig!":sterren===2?"Goed gedaan!":"Ronde af!";
  $("resText").textContent = `${s.first} van de ${s.n} in één keer goed.` + (sterren<2?" Bij twee sterren krijg je een sticker.":"");
  $("packBox").hidden=!sticker; $("pack").classList.remove("open");
  if(sticker){ $("packBack").textContent=sticker; $("packLabel").textContent="Tik op het pakje!"; }
  const r=[`<div class="reward"><span class="ic">✨</span><div><b>+${xp} punten</b><small>${dubbel?"dubbel, want het was de uitdaging van de dag":s.snel?`waarvan ${s.snel} keer snel`:"lekker bezig"}</small></div></div>`];
  if(niveau) r.push(`<div class="reward"><span class="ic">📶</span><div><b>${niveau}</b></div></div>`);
  if(nuRang.n>wasRang) r.push(`<div class="reward"><span class="ic">🎖️</span><div><b>Nieuwe rang: ${nuRang.naam}</b></div></div>`);
  badges.forEach(b=>r.push(`<div class="reward"><span class="ic">${b.ic}</span><div><b>Medaille: ${b.t}</b><small>${b.d}</small></div></div>`));
  if(vandaagN()===2) r.push(`<div class="reward"><span class="ic">🎯</span><div><b>Dagdoel gehaald!</b></div></div>`);
  $("rewards").innerHTML=r.join("");
  $("againBtn").hidden = dubbel;
  show("result"); speel("fanfare"); if(sterren===3) confetti();
  st=null; lastAct=s.id;
}
let lastAct=null;

/* ---------- woordrace ---------- */
let rc=null;
function openRace(){
  stopRace(); rc=null; $("raceKies").hidden=false; $("raceKaart").hidden=true;
  $("rijKeus").innerHTML=RIJEN.map((r,i)=>`<button class="toggle" data-rij="${i}"><span><b>${r.t}</b><br><small>${r.s}</small></span>
    <span class="nv">${P.rec[i]?`record ${P.rec[i]} per min`:"nog geen record"}</span></button>`).join("");
  show("race");
}
function nieuweRij(i){
  rc={rij:i, woorden:sample(WOORDEN[RIJEN[i].lvl].filter(w=>w.length<=12),RACE_N), poging:0, vorige:null, sticker:false};
  $("raceKies").hidden=true; $("raceKaart").hidden=false; klaarzetten();
}
function klaarzetten(){
  stopRace();
  $("raceKop").textContent = rc.poging ? "Dezelfde rij. Kun je sneller?" : RIJEN[rc.rij].t;
  $("raceLijst").innerHTML=rc.woorden.map(w=>`<li>${w}</li>`).join(""); $("raceLijst").classList.add("dicht");
  $("raceTijd").textContent="0,0 s"; $("raceStart").hidden=false; $("raceKlaar").hidden=true; $("raceUit").hidden=true;
}
function stopRace(){ if(rc && rc.klok){ clearInterval(rc.klok); rc.klok=0; } }
function startRace(){
  $("raceLijst").classList.remove("dicht"); $("raceStart").hidden=true; $("raceKlaar").hidden=false; speel("pop");
  rc.t0=performance.now();
  rc.klok=setInterval(()=>{ $("raceTijd").textContent=((performance.now()-rc.t0)/1000).toFixed(1).replace(".",",")+" s"; },100);
}
function eindRace(){
  const sec=(performance.now()-rc.t0)/1000; stopRace();
  if(sec < RACE_N*0.35){ toast("Dat ging wel héél snel. Lees alle woorden hardop!"); klaarzetten(); return; }
  const wpm=Math.round(RACE_N/sec*60), sneller = rc.vorige!==null && sec<rc.vorige, record = wpm>P.rec[rc.rij], hadRecord = P.rec[rc.rij]>0;
  rc.poging++;
  const sterren = sneller ? 3 : rc.poging>=2 ? 2 : 1;
  let xp=8+(sneller?6:0)+(record?6:0);
  rondeGeteld(); P.raceN++; P.xp+=xp; P.best.race=Math.max(P.best.race||0,sterren);
  if(record) P.rec[rc.rij]=wpm;
  let extra="";
  if(sneller && !rc.sticker){ const s=nieuweSticker(); if(s){ rc.sticker=true; extra=` Nieuwe sticker: ${s}`; } }
  const badges=nieuweBadges(); persist();
  const verschil = rc.vorige!==null ? Math.abs(rc.vorige-sec).toFixed(1).replace(".",",") : null;
  $("raceUitslag").innerHTML = `${sec.toFixed(1).replace(".",",")} seconden<small>${wpm} woorden per minuut · +${xp} punten</small>
    <small>${sneller ? `Dat is ${verschil} seconden sneller dan net! ${sterHTML(3)}${extra}` : rc.vorige!==null ? "Net niet sneller. Nog een keer?" : "Lees de rij nog eens. Lukt het sneller?"}${record && hadRecord ? " Nieuw record!" : ""}</small>`;
  rc.vorige = rc.vorige===null ? sec : Math.min(rc.vorige,sec);
  $("raceKlaar").hidden=true; $("raceUit").hidden=false; $("raceLijst").classList.add("dicht");
  speel(sneller?"fanfare":"goed"); if(sneller) confetti();
  if(badges.length) toast(`Medaille: ${badges[0].ic} ${badges[0].t}`);
}

/* ---------- stickerboek, overzicht ---------- */
function openAlbum(){
  let i=0;
  $("albumPages").innerHTML=STICKERPAGINAS.map(([naam,lijst])=>`<h3 class="albumkop">${naam}</h3><div class="album">${lijst.map(s=>{ const heb=P.stickers.includes(i++);
    return `<div class="slot ${heb?"have":"empty"}">${heb?s:"?"}</div>`; }).join("")}</div>`).join("");
  $("badgeGrid").innerHTML=BADGES.map((b,k)=>`<div class="badge${P.badges.includes(k)?"":" locked"}"><div class="ic">${b.ic}</div><b>${b.t}</b><small>${b.d}</small></div>`).join("");
  show("album");
}
function openOverzicht(){
  const rij=a=>{ const x=P.st[a.id]; return `<tr><td>${a.title}</td><td class="num">${a.race?"":(P.lvl[a.id]||1)}</td><td class="num">${x&&x[1]?Math.round(x[0]/x[1]*100)+"%":"–"}</td><td class="num">${a.race?P.raceN:(x?x[2]:0)}</td></tr>`; };
  $("ovInhoud").innerHTML=`<div class="uitlegblok"><p><b>${P.rounds}</b> rondes gespeeld, <b>${P.xp}</b> punten, <b>${P.stickers.length}</b> van de ${STICKERS.length} stickers.</p>
    <p>Elke oefening heeft drie niveaus. Gaat een ronde bijna foutloos, dan gaat het niveau vanzelf omhoog. Het percentage is het deel dat in één keer goed ging.</p></div>
    <h3 class="albumkop">Woordrace</h3><table class="stats-table"><tr><th>Rij</th><th style="text-align:right">Record</th></tr>
    ${RIJEN.map((r,i)=>`<tr><td>${r.t}</td><td class="num">${P.rec[i]?P.rec[i]+" woorden per minuut":"–"}</td></tr>`).join("")}</table>
    ${VAKKEN.map(v=>`<h3 class="albumkop">${v.title}</h3><table class="stats-table"><tr><th>Oefening</th><th style="text-align:right">Niveau</th><th style="text-align:right">In één keer</th><th style="text-align:right">Rondes</th></tr>${v.acts.map(rij).join("")}</table>`).join("")}`;
  show("overzicht");
}

/* ---------- knoppen ---------- */
document.querySelectorAll(".back").forEach(b=>b.onclick = ()=>{ const s=b.closest("section").id; if(s==="race" && rc && !$("raceKaart").hidden){ openRace(); return; } if(s==="race"){ terug(); return; } goHome(); });
$("cats").onclick = e=>{ const c=e.target.closest("[data-cat]"); if(c) openCat(c.dataset.cat); };
$("vandaag").onclick = $("catTiles").onclick = e=>{ const t=e.target.closest(".tile"); if(t) start(t.dataset.id); };
$("choices").onclick = e=>{ const b=e.target.closest(".choice"); if(b) kies(b); };
$("stopBtn").onclick = ()=>{ clearTimeout(flits.t); terug(); };
$("againBtn").onclick = ()=>start(lastAct);
$("homeBtn").onclick = terug;
$("pack").onclick = ()=>{ if($("pack").classList.contains("open")) return; $("pack").classList.add("open"); $("packLabel").textContent="Nieuwe sticker voor je boek!"; speel("pop"); confetti(); };
$("rijKeus").onclick = e=>{ const b=e.target.closest("[data-rij]"); if(b) nieuweRij(+b.dataset.rij); };
$("raceStart").onclick = startRace; $("raceKlaar").onclick = eindRace;
$("raceWeer").onclick = klaarzetten; $("raceNieuw").onclick = ()=>nieuweRij(rc.rij);
$("albumBtn").onclick = openAlbum; $("overzichtBtn").onclick = openOverzicht;
$("instelBtn").onclick = ()=>show("instel");
$("soundToggle").onclick = ()=>{ soundOn=!soundOn; save("sterre2-geluid",soundOn); renderHome(); if(soundOn) speel("pop"); };
function zetThema(t){ if(t) document.documentElement.dataset.theme=t; else delete document.documentElement.dataset.theme; }
zetThema(load("sterre2-thema", null));
$("themaBtn").onclick = ()=>{ const donker = document.documentElement.dataset.theme==="dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  const t=donker?"light":"dark"; save("sterre2-thema",t); zetThema(t); };
$("backupBtn").onclick = ()=>{ $("backup").hidden=!$("backup").hidden; $("backupCode").value=encodeP(P); };
$("copyCode").onclick = async ()=>{ try{ await navigator.clipboard.writeText($("backupCode").value); toast("Code gekopieerd"); }catch(e){ $("backupCode").select(); toast("Selecteer en kopieer de code"); } };
$("restoreBtn").onclick = ()=>{ const p=decodeP($("restoreCode").value); if(!p){ toast("Deze code klopt niet"); return; } P=p; persist(); toast("Voortgang teruggezet"); goHome(); };
$("resetBtn").onclick = ()=>{ if(confirm("Alle stickers en sterren van Sterre 2 wissen? Dit kan niet ongedaan worden gemaakt.")){ P=FRESH(); laatstBewaard="x"; persist(); goHome(); } };
$("versie").textContent = VERSIE;
if("serviceWorker" in navigator && location.protocol==="https:") navigator.serviceWorker.register("/sterre2/sw.js").catch(()=>{});
renderHome();
})();
