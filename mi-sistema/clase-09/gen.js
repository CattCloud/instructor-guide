// Generador nativo del .excalidraw de la Clase 09 (sin imágenes).
// Flujos, anatomías y comparativas con rectángulo + texto + flecha.
const fs = require('fs');

const PAL = { negro:'#1e1e1e', rojo:'#e03131', azul:'#1971c2', naranja:'#f08c00',
              verde:'#2f9e44', naranjaOsc:'#e8590c', gris:'#868e96', grisClaro:'#ced4da' };
const FILL = { azul:'#a5d8ff', verde:'#b2f2bb', rojo:'#ffc9c9', amar:'#ffec99', gris:'#f1f3f5', naranja:'#ffd8a8' };

let E = [], n = 0;
const rid = () => 'e' + (n++).toString(36).padStart(7,'0') + Math.floor(Math.random()*1e6).toString(36);
const seed = () => Math.floor(Math.random()*1e9);
const NOW = 1717000000000;
function bse(o){ return { id:rid(), angle:0, strokeColor:'#1e1e1e', backgroundColor:'transparent',
  fillStyle:'solid', strokeWidth:1, strokeStyle:'solid', roughness:0, opacity:100, groupIds:[],
  frameId:null, roundness:null, seed:seed(), version:1, versionNonce:seed(), isDeleted:false,
  boundElements:null, updated:NOW, link:null, locked:false, ...o }; }
function text(x,y,str,o={}){ const fz=o.fontSize||16, lines=String(str).split('\n');
  const w=o.width||Math.max(...lines.map(l=>l.length))*fz*0.58+4, h=lines.length*fz*1.25;
  E.push(bse({ type:'text', x, y, width:w, height:h, strokeColor:o.color||PAL.negro, fontSize:fz,
    fontFamily:o.font||5, text:str, originalText:str, textAlign:o.align||'left', verticalAlign:'top',
    containerId:null, lineHeight:1.25, baseline:Math.round(fz*0.85) })); return h; }
function rect(x,y,w,h,o={}){ E.push(bse({ type:'rectangle', x, y, width:w, height:h,
  strokeColor:o.stroke||PAL.negro, backgroundColor:o.bg||'transparent', fillStyle:'solid',
  strokeWidth:o.sw||1.5, roughness:0, roundness:o.radius===false?null:{type:3} })); }
function arrow(x1,y1,x2,y2,o={}){ E.push(bse({ type:'arrow', x:x1, y:y1, width:x2-x1, height:y2-y1,
  strokeColor:o.color||PAL.naranja, strokeWidth:o.sw||2.5, roughness:0, roundness:{type:2},
  points:[[0,0],[x2-x1,y2-y1]], lastCommittedPoint:null, startBinding:null, endBinding:null,
  startArrowhead:null, endArrowhead:o.head===false?null:'arrow' })); }
function codeBox(x,y,w,str,o={}){ const lines=String(str).split('\n').length, h=lines*18*1.2+22;
  rect(x,y,w,h,{stroke:o.stroke||PAL.grisClaro, bg:o.bg||'#ffffff', sw:1.5, radius:true});
  text(x+12,y+11,str,{fontSize:o.fontSize||15, color:o.color||PAL.azul, font:3}); return h; }

const PC = [PAL.rojo, PAL.azul, PAL.naranja, PAL.verde];
function header(ox, idx, momento, title){
  text(ox, 150, String(idx+1).padStart(2,'0'), {fontSize:48, color:PC[idx%4]});
  text(ox, 212, momento, {fontSize:16, color:PAL.naranja});
  text(ox, 238, title, {fontSize:25, color:PAL.negro});
  return 300;
}
let ox=0, idx=0, maxY=0; const GAP=340;
const track=y=>{ if(y>maxY) maxY=y; };
const adv=w=>{ ox+=w+GAP; };

// ===== TÍTULO MAESTRO =====
text(0,40,'CLASE 09 — JAVASCRIPT MODERNO Y RENDER DINÁMICO',{fontSize:44, color:PAL.azul});
text(0,98,'Generar HTML desde datos (Pokédex). Los datos mandan; el HTML es su reflejo.',{fontSize:18, color:PAL.negro});

// ===== Panel 1.1 — Mapa del Módulo 3 =====
{ let y=header(ox,idx,'MOMENTO 1','Mapa del Módulo 3 — una app que crece');
  const items=[['C09','JS Moderno','datos LOCALES (HOY)',PAL.rojo],
    ['C10','Asincronía','Promesas (API simulada)',PAL.azul],
    ['C11','fetch + JSON','datos REALES (PokeAPI)',PAL.naranja],
    ['C12','Errores','app robusta + README',PAL.verde]];
  let bx=ox;
  items.forEach((it,i)=>{ const hoy=i===0;
    rect(bx,y+20,300,120,{stroke:it[3], bg:hoy?FILL.amar:'transparent', sw:hoy?2.5:2});
    text(bx+16,y+34,it[0],{fontSize:24,color:it[3]});
    text(bx+16,y+70,it[1],{fontSize:18,color:PAL.negro});
    text(bx+16,y+100,it[2],{fontSize:13,color:PAL.negro});
    if(i<3) arrow(bx+300,y+80,bx+340,y+80,{color:PAL.naranja});
    bx+=340; });
  text(ox, y+165,'La Pokédex es UNA sola app que crece clase a clase. C12 es el lab calificado.',{fontSize:14,color:PAL.negro});
  track(y+210); adv(340*4-40); idx++; }

// ===== Panel 1.2 — Plantilla Historia de Usuario =====
{ let y=header(ox,idx,'MOMENTO 1','Historia de Usuario — Como / quiero / para');
  rect(ox,y,820,150,{stroke:PAL.azul,bg:'transparent',sw:2});
  text(ox+20,y+20,'Como',{fontSize:20,color:PAL.negro});
  rect(ox+110,y+12,400,38,{stroke:PAL.naranja,bg:FILL.naranja,sw:1.5}); text(ox+122,y+22,'usuario de la app de música',{fontSize:15,color:PAL.negro});
  text(ox+540,y+20,'← ROL (quién)',{fontSize:13,color:PAL.naranja});
  text(ox+20,y+62,'quiero',{fontSize:20,color:PAL.negro});
  rect(ox+110,y+54,400,38,{stroke:PAL.azul,bg:FILL.azul,sw:1.5}); text(ox+122,y+64,'marcar canciones como favoritas',{fontSize:15,color:PAL.negro});
  text(ox+540,y+62,'← ACCIÓN (qué)',{fontSize:13,color:PAL.azul});
  text(ox+20,y+104,'para',{fontSize:20,color:PAL.negro});
  rect(ox+110,y+96,400,38,{stroke:PAL.verde,bg:FILL.verde,sw:1.5}); text(ox+122,y+106,'encontrarlas rápido después',{fontSize:15,color:PAL.negro});
  text(ox+540,y+104,'← BENEFICIO (para qué)',{fontSize:13,color:PAL.verde});
  // criterios
  text(ox,y+185,'Criterios de aceptación = Definición de Terminado (resultados, no código):',{fontSize:15,color:PAL.negro});
  rect(ox,y+215,820,130,{stroke:PAL.grisClaro,bg:FILL.gris,sw:1.5});
  text(ox+16,y+230,'✓  Cada canción tiene un control para marcarla como favorita.',{fontSize:15,color:PAL.negro});
  text(ox+16,y+265,'✓  Las canciones marcadas aparecen en la sección "Favoritos".',{fontSize:15,color:PAL.negro});
  text(ox+16,y+300,'✓  Al quitar una de favoritos, desaparece de esa sección.',{fontSize:15,color:PAL.negro});
  track(y+370); adv(840); idx++; }

// ===== Panel 1.3 — Anatomía de la tarjeta + forma del dato =====
{ let y=header(ox,idx,'MOMENTO 1','La tarjeta y la forma del dato');
  // dato
  text(ox,y,'EL DATO (objeto plano)',{fontSize:16,color:PAL.azul});
  codeBox(ox,y+28,360,'{\n  nombre: "pikachu",\n  imagen: "...25.png",\n  tipos: ["electric"]\n}');
  // tarjeta
  const tx=ox+520;
  text(tx,y,'LA TARJETA',{fontSize:16,color:PAL.negro});
  rect(tx,y+28,260,250,{stroke:PAL.grisClaro,bg:'#ffffff',sw:1.5});
  rect(tx+90,y+45,80,80,{stroke:PAL.gris,bg:FILL.gris,sw:1.5}); text(tx+108,y+78,'img',{fontSize:14,color:PAL.gris});
  text(tx+95,y+140,'pikachu',{fontSize:18,color:PAL.negro});
  rect(tx+75,y+175,110,32,{stroke:PAL.verde,bg:FILL.verde,sw:1.5}); text(tx+90,y+183,'electric',{fontSize:13,color:PAL.verde});
  // flechas dato -> tarjeta
  arrow(ox+360,y+70,tx+90,y+85,{color:PAL.naranja});
  arrow(ox+360,y+95,tx+95,y+148,{color:PAL.naranja});
  arrow(ox+360,y+118,tx+75,y+190,{color:PAL.naranja});
  text(ox+370,y+200,'cada propiedad del dato → su lugar en la tarjeta',{fontSize:13,color:PAL.naranja});
  track(y+310); adv(800); idx++; }

// ===== Panel 2.1 — Concatenación vs template literal =====
{ let y=header(ox,idx,'MOMENTO 2','Concatenación vs template literal');
  text(ox,y,'ANTES — concatenación con +',{fontSize:15,color:PAL.rojo});
  codeBox(ox,y+28,560,'const a = "Hola, " + nombre + "!";',{stroke:PAL.rojo});
  text(ox,y+95,'AHORA — template literal',{fontSize:15,color:PAL.verde});
  codeBox(ox,y+123,560,'const b = `Hola, ${nombre}!`;',{stroke:PAL.verde});
  text(ox,y+185,'Backticks ` `   ·   ${...} = "huecos" que se rellenan   ·   permite varias líneas (ideal para HTML)',{fontSize:14,color:PAL.naranja});
  track(y+230); adv(580); idx++; }

// ===== Panel 2.2 — Flujo CREAR -> LLENAR -> INSERTAR =====
{ let y=header(ox,idx,'MOMENTO 2','Crear un elemento: CREAR → LLENAR → INSERTAR');
  const steps=[['CREAR','createElement("article")','nace en memoria (no se ve)',PAL.azul],
    ['LLENAR','.className + .innerHTML','clases + contenido',PAL.naranja],
    ['INSERTAR','appendChild(nodo)','recién ahí aparece',PAL.verde]];
  let bx=ox;
  steps.forEach((s,i)=>{ rect(bx,y+20,300,130,{stroke:s[3],bg:'transparent',sw:2});
    text(bx+16,y+34,s[0],{fontSize:22,color:s[3]});
    codeBox(bx+14,y+72,272,s[1],{stroke:s[3]});
    text(bx+16,y+118,s[2],{fontSize:13,color:PAL.negro});
    if(i<2) arrow(bx+300,y+85,bx+340,y+85,{color:PAL.naranja});
    bx+=340; });
  rect(ox,y+175,940,46,{stroke:PAL.rojo,bg:FILL.rojo,sw:1.5});
  text(ox+14,y+187,'El nodo NO se ve hasta el paso 3 (insertar). En C08 solo MODIFICÁBAMOS; hoy CREAMOS.',{fontSize:14,color:PAL.negro});
  track(y+250); adv(960); idx++; }

// ===== Panel 2.3 — innerHTML vs textContent =====
{ let y=header(ox,idx,'MOMENTO 2','innerHTML vs textContent');
  text(ox,y,'El mismo string:',{fontSize:15,color:PAL.negro});
  codeBox(ox,y+26,420,'"<b>hola</b>"');
  text(ox,y+95,'innerHTML → interpreta como HTML',{fontSize:14,color:PAL.verde});
  rect(ox,y+120,420,46,{stroke:PAL.verde,bg:FILL.verde,sw:1.5}); text(ox+14,y+132,'hola  (en negrita real)',{fontSize:18,color:PAL.negro});
  text(ox,y+185,'textContent → texto plano (literal)',{fontSize:14,color:PAL.rojo});
  rect(ox,y+210,420,46,{stroke:PAL.rojo,bg:FILL.rojo,sw:1.5}); text(ox+14,y+222,'<b>hola</b>',{fontSize:16,color:PAL.negro,font:3});
  track(y+290); adv(440); idx++; }

// ===== Panel 2.4 — El patrón render =====
{ let y=header(ox,idx,'MOMENTO 2','El patrón render: limpiar → recorrer → agregar');
  text(ox,y,'DATOS',{fontSize:15,color:PAL.azul});
  codeBox(ox,y+26,230,'[ {..}, {..},\n  {..}, {..} ]');
  // render box
  const rx=ox+330;
  rect(rx,y+10,300,150,{stroke:PAL.naranja,bg:'transparent',sw:2});
  text(rx+14,y+22,'render(lista)',{fontSize:16,color:PAL.naranja});
  text(rx+16,y+56,'1. LIMPIAR  (innerHTML = "")',{fontSize:14,color:PAL.negro});
  text(rx+16,y+88,'2. RECORRER (forEach)',{fontSize:14,color:PAL.negro});
  text(rx+16,y+120,'3. AGREGAR  (appendChild)',{fontSize:14,color:PAL.negro});
  // rejilla
  const gx=ox+730;
  text(gx,y,'REJILLA',{fontSize:15,color:PAL.verde});
  [0,1].forEach(r=>[0,1].forEach(c=>{ rect(gx+c*90,y+26+r*80,76,68,{stroke:PAL.grisClaro,bg:'#ffffff',sw:1.5}); }));
  arrow(ox+230,y+70,rx-10,y+80,{color:PAL.naranja});
  arrow(rx+300,y+80,gx-10,y+70,{color:PAL.naranja});
  text(ox,y+190,'Los datos mandan → el HTML es su reflejo.  Si limpia primero, no se apilan duplicados.',{fontSize:14,color:PAL.naranja});
  track(y+240); adv(960); idx++; }

// ===== Panel 3.1 — Destructuring =====
{ let y=header(ox,idx,'MOMENTO 3','Destructuring (legibilidad)');
  text(ox,y,'OBJETO',{fontSize:15,color:PAL.azul});
  codeBox(ox,y+26,330,'const usuario = {\n  nombre: "Ana",\n  edad: 30,\n  pais: "Perú"\n}');
  const vx=ox+470;
  text(vx,y,'VARIABLES (en 1 línea)',{fontSize:15,color:PAL.verde});
  codeBox(vx,y+26,360,'const { nombre, edad } = usuario;');
  text(vx,y+92,'nombre = "Ana"   ·   edad = 30',{fontSize:14,color:PAL.negro});
  arrow(ox+330,y+70,vx-10,y+45,{color:PAL.naranja});
  text(ox, y+150,'No cambia lo que hace el código — lo hace más legible. Declarás arriba qué usás.',{fontSize:14,color:PAL.naranja});
  track(y+200); adv(850); idx++; }

// ===== Panel 3.2 — Badges: array -> map -> join =====
{ let y=header(ox,idx,'MOMENTO 3','Badges de tipo: array → .map → .join');
  text(ox,y,'array de tipos',{fontSize:14,color:PAL.azul});
  codeBox(ox,y+24,200,'["fire","water"]');
  const mx=ox+300;
  text(mx,y,'.map(...)  → array de HTML',{fontSize:14,color:PAL.naranja});
  codeBox(mx,y+24,330,'["<span>fire</span>",\n "<span>water</span>"]');
  const jx=ox+700;
  text(jx,y,'.join("")  → un string',{fontSize:14,color:PAL.verde});
  codeBox(jx,y+24,330,'"<span>fire</span><span>water</span>"');
  arrow(ox+200,y+50,mx-10,y+50,{color:PAL.naranja});
  arrow(mx+330,y+50,jx-10,y+50,{color:PAL.naranja});
  text(ox,y+115,'.map transforma cada elemento (C06) · .join lo pega en uno solo, listo para innerHTML.',{fontSize:14,color:PAL.naranja});
  track(y+165); adv(1040); idx++; }

// ===== Panel 3.3 — Acceso seguro =====
{ let y=header(ox,idx,'MOMENTO 3','Acceso seguro: ?. y ??');
  text(ox,y,'SIN protección → ROMPE',{fontSize:15,color:PAL.rojo});
  codeBox(ox,y+28,520,'usuario.direccion.ciudad\n// ❌ Cannot read properties of undefined',{stroke:PAL.rojo});
  text(ox,y+108,'CON ?. y ?? → seguro',{fontSize:15,color:PAL.verde});
  codeBox(ox,y+136,520,'usuario.direccion?.ciudad ?? "Desconocida"\n// ✓ "Desconocida"  (no rompe)',{stroke:PAL.verde});
  rect(ox,y+205,520,76,{stroke:PAL.azul,bg:FILL.azul,sw:1.5});
  text(ox+14,y+217,'Se complementan:',{fontSize:14,color:PAL.azul});
  text(ox+14,y+241,'?. protege el acceso (no rompe) · ?? pone el respaldo.',{fontSize:13,color:PAL.negro});
  text(ox+14,y+261,'Casi siempre juntos:  dato?.prop ?? respaldo',{fontSize:13,color:PAL.negro,font:3});
  track(y+310); adv(540); idx++; }

// ===== Panel 4.1 — Filtrado en vivo =====
{ let y=header(ox,idx,'MOMENTO 4','Filtrado en vivo: el MISMO render, otra lista');
  rect(ox,y+20,200,46,{stroke:PAL.grisClaro,bg:'#ffffff',sw:1.5}); text(ox+12,y+32,'buscador: "pi"',{fontSize:15,color:PAL.negro});
  const fx=ox+300;
  rect(fx,y+20,260,46,{stroke:PAL.naranja,bg:FILL.naranja,sw:1.5}); text(fx+12,y+32,'.filter(coincide)',{fontSize:15,color:PAL.negro,font:3});
  const rx=ox+660;
  rect(rx,y+20,240,46,{stroke:PAL.verde,bg:FILL.verde,sw:1.5}); text(rx+12,y+32,'render(filtrados)',{fontSize:15,color:PAL.negro,font:3});
  arrow(ox+200,y+43,fx-10,y+43,{color:PAL.naranja});
  arrow(fx+260,y+43,rx-10,y+43,{color:PAL.naranja});
  rect(ox+940,y+20,150,46,{stroke:PAL.grisClaro,bg:'#ffffff',sw:1.5}); text(ox+955,y+32,'solo Pikachu',{fontSize:14,color:PAL.negro});
  arrow(rx+240,y+43,ox+940,y+43,{color:PAL.naranja});
  rect(ox,y+110,1090,46,{stroke:PAL.azul,bg:FILL.azul,sw:1.5});
  text(ox+14,y+122,'NO se reescribe render ni crearTarjeta — solo se les pasa otra lista. La UI reacciona a los datos.',{fontSize:14,color:PAL.negro});
  track(y+200); adv(1110); idx++; }

// ===== Panel 4.2 — Los datos mandan =====
{ let y=header(ox,idx,'MOMENTO 4','Los datos mandan; el HTML es su reflejo');
  rect(ox,y+30,220,70,{stroke:PAL.azul,bg:'transparent',sw:2}); text(ox+20,y+55,'DATOS (array)',{fontSize:16,color:PAL.azul});
  rect(ox+360,y+30,200,70,{stroke:PAL.naranja,bg:'transparent',sw:2}); text(ox+390,y+55,'render()',{fontSize:16,color:PAL.naranja});
  rect(ox+700,y+30,220,70,{stroke:PAL.verde,bg:'transparent',sw:2}); text(ox+730,y+55,'UI (rejilla)',{fontSize:16,color:PAL.verde});
  arrow(ox+220,y+65,ox+350,y+65,{color:PAL.naranja});
  arrow(ox+560,y+65,ox+690,y+65,{color:PAL.naranja});
  text(ox,y+135,'Cambian los datos (borrar / filtrar) → cambia la pantalla, sin tocar el render.',{fontSize:15,color:PAL.negro});
  text(ox,y+165,'Es lo que hace cualquier red social con tu feed.',{fontSize:14,color:PAL.naranja});
  track(y+210); adv(960); idx++; }

// ===== SALIDA =====
const doc={ type:'excalidraw', version:2, source:'https://excalidraw.com', elements:E,
  appState:{ gridSize:null, viewBackgroundColor:'#ffffff' }, files:{} };
fs.writeFileSync('CLASE 09.excalidraw', JSON.stringify(doc,null,2));
console.log('Elementos:',E.length,'| Paneles:',idx,'| Ancho:',ox);
