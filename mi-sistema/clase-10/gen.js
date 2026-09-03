// Generador nativo del .excalidraw de la Clase 10 (sin imágenes).
// Paneles por sub-punto del Flujo de Presentación 10. Rectángulo + texto + flecha.
const fs = require('fs');
const path = require('path');

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
// tabla: colW = anchos; rows[0] = header. rowBg = {indiceFila: fill}
function table(x,y,colW,rows,o={}){ const fz=o.fontSize||14, rhMin=o.rh||48; let ty=y;
  rows.forEach((row,ri)=>{ const isHead=ri===0;
    const maxLines=Math.max(...row.map(c=>String(c).split('\n').length));
    const h=Math.max(rhMin, maxLines*fz*1.32+16);
    let tx=x; const bg=isHead?(o.headBg||FILL.gris):((o.rowBg&&o.rowBg[ri])||'#ffffff');
    row.forEach((cell,ci)=>{ rect(tx,ty,colW[ci],h,{stroke:PAL.grisClaro,bg,sw:1.5,radius:false});
      text(tx+10,ty+9,cell,{fontSize:fz,color:PAL.negro}); tx+=colW[ci]; });
    ty+=h; });
  return ty-y; }

function header(ox, punto, momento, title, color){
  text(ox, 150, punto, {fontSize:46, color});
  text(ox, 214, momento, {fontSize:15, color:PAL.naranja});
  text(ox, 240, title, {fontSize:23, color:PAL.negro});
  return 300;
}
let ox=0, idx=0, maxY=0; const GAP=320;
const track=y=>{ if(y>maxY) maxY=y; };
const adv=w=>{ ox+=w+GAP; idx++; };
const M1=PAL.rojo, M2=PAL.azul, M3=PAL.naranjaOsc, M4=PAL.verde;

// ===== TÍTULO MAESTRO =====
text(0,40,'CLASE 10 — DATOS DESDE LA WEB: fetch, PROMESAS y JSON',{fontSize:42, color:PAL.azul});
text(0,96,'Los datos viven en internet y tardan: asincronía → Promesa → API/JSON → adapter.',{fontSize:18, color:PAL.negro});

// ===== 1.1 — solo título (Eric completa) =====
{ header(ox,'1.1','MOMENTO 1','Dinámica: pedir una pizza', M1);
  adv(560); }

// ===== 1.2 — Tabla de situaciones asíncronas usuales =====
{ let y=header(ox,'1.2','MOMENTO 1','Situaciones asíncronas usuales', M1);
  const colW=[300,330,250];
  const rows=[
    ['Situación asíncrona','Qué es','¿Ya la usaron?'],
    ['Temporizadores\n(setTimeout, setInterval)','Ejecutar algo después\nde un tiempo','La vemos en un minuto'],
    ['Eventos del DOM\n(click, input)','El código "espera" una\nacción del usuario','Sí — el input de C09'],
    ['Peticiones de red','Traer datos que viven\nen internet','Lo central de hoy (M3)'],
    ['Lectura de archivos / BD','Operaciones de disco\nque tardan','Más adelante'],
  ];
  const h=table(ox,y+10,colW,rows,{rowBg:{3:FILL.amar}});
  text(ox,y+20+h,'Todas: algo que TARDA y que NO detiene el programa. Hoy nos enfocamos en las peticiones de red.',{fontSize:13,color:PAL.naranja});
  track(y+60+h); adv(880); }

// ===== 1.3 — Sintaxis de setTimeout =====
{ let y=header(ox,'1.3','MOMENTO 1','setTimeout — sintaxis', M1);
  text(ox,y,'Sintaxis general:',{fontSize:15,color:PAL.negro});
  codeBox(ox,y+26,520,'setTimeout(función, milisegundos);');
  text(ox,y+92,'función  →  qué ejecutar (la tarea que corre más tarde)',{fontSize:14,color:PAL.azul});
  text(ox,y+116,'milisegundos  →  cuánto esperar antes (1000 ms = 1 segundo)',{fontSize:14,color:PAL.azul});
  text(ox,y+150,'Ejemplo:',{fontSize:15,color:PAL.negro});
  codeBox(ox,y+176,520,'setTimeout(() => {\n  console.log("Pasaron 3 segundos");\n}, 3000);');
  rect(ox,y+286,520,52,{stroke:PAL.verde,bg:FILL.verde,sw:1.5});
  text(ox+14,y+298,'Ejecuta la función UNA vez, tras la espera. NO bloquea:\nel resto del código sigue ejecutándose.',{fontSize:13,color:PAL.negro});
  track(y+360); adv(540); }

// ===== 2.1 — solo título (Eric completa) =====
{ header(ox,'2.1','MOMENTO 2','Qué es una Promesa + sus estados', M2);
  adv(560); }

// ===== 2.2A — Fases de una promesa =====
{ let y=header(ox,'2.2','MOMENTO 2','Fases de una promesa', M2);
  const colW=[250,600];
  const rows=[
    ['Fase','¿Qué significa?'],
    ['🛠️ Creación /\nObtención','Dos escenarios en el día a día:\n1. Te la ENTREGAN ya hecha (una API, el navegador, una librería).\n2. Vos mismo la CREÁS con new Promise(...).'],
    ['🍽️ Consumo','Usás .then() / .catch() / .finally()  (o await)\npara trabajar con el RESULTADO de la promesa.'],
  ];
  const h=table(ox,y+10,colW,rows);
  track(y+40+h); adv(850); }

// ===== 2.2B — Sintaxis de creación: new Promise =====
{ let y=header(ox,'2.2','MOMENTO 2','Crear una promesa: new Promise', M2);
  codeBox(ox,y+10,640,'const promesa = new Promise((resolve, reject) => {\n  // código asíncrono (lo que tarda)\n  resolve(valor);  // ÉXITO  → lo recibe .then\n  reject(error);   // FALLO  → lo recibe .catch\n});');
  rect(ox,y+150,640,76,{stroke:PAL.azul,bg:FILL.azul,sw:1.5});
  text(ox+14,y+162,'resolve y reject los provee JavaScript: vos NO los definís,\nsolo los invocás. Deciden el estado final de la promesa.',{fontSize:14,color:PAL.negro});
  track(y+250); adv(660); }

// ===== 2.3 — Sintaxis de consumo =====
{ let y=header(ox,'2.3','MOMENTO 2','Consumir: .then / .catch / .finally', M2);
  codeBox(ox,y+10,640,'promesa\n  .then((resultado) => { /* promesa cumplida  */ })\n  .catch((error)    => { /* promesa rechazada */ })\n  .finally(()       => { /* siempre, pase lo que pase */ });');
  text(ox,y+158,'.then    →  corre si se CUMPLE  (resolve)',{fontSize:14,color:PAL.verde});
  text(ox,y+184,'.catch   →  corre si se RECHAZA (reject)',{fontSize:14,color:PAL.rojo});
  text(ox,y+210,'.finally →  corre SIEMPRE, pase lo que pase',{fontSize:14,color:PAL.azul});
  track(y+250); adv(660); }

// ===== 2.4 — Certeza vs Promesa =====
{ let y=header(ox,'2.4','MOMENTO 2','Certeza vs Promesa', M2);
  // certeza
  rect(ox,y,400,200,{stroke:PAL.verde,bg:'transparent',sw:2});
  text(ox+16,y+14,'CERTEZA (sincrónico)',{fontSize:16,color:PAL.verde});
  codeBox(ox+16,y+48,368,'const numero = 5;');
  text(ox+16,y+108,'El valor ya está → lo usás directo.',{fontSize:14,color:PAL.negro});
  text(ox+16,y+134,'100% seguro, sin espera.',{fontSize:14,color:PAL.negro});
  // promesa
  const px=ox+440;
  rect(px,y,400,200,{stroke:PAL.naranja,bg:'transparent',sw:2});
  text(px+16,y+14,'PROMESA (asíncrono)',{fontSize:16,color:PAL.naranjaOsc});
  codeBox(px+16,y+48,368,'const datos = fetch("/api");');
  text(px+16,y+108,'Hay espera y NO hay seguridad',{fontSize:14,color:PAL.negro});
  text(px+16,y+132,'(depende de la red / del servidor).',{fontSize:14,color:PAL.negro});
  text(px+16,y+160,'Tenés el compromiso de que pasará algo.',{fontSize:13,color:PAL.naranjaOsc});
  track(y+230); adv(880); }

// ===== 3.1 — API: modelo cliente-servidor =====
{ let y=header(ox,'3.1','MOMENTO 3','API: modelo cliente–servidor', M3);
  rect(ox,y+40,250,100,{stroke:PAL.azul,bg:FILL.azul,sw:2});
  text(ox+18,y+66,'CLIENTE',{fontSize:18,color:PAL.azul});
  text(ox+18,y+96,'(tu app / navegador)',{fontSize:13,color:PAL.negro});
  const sx=ox+620;
  rect(sx,y+40,250,100,{stroke:PAL.verde,bg:FILL.verde,sw:2});
  text(sx+18,y+66,'SERVIDOR',{fontSize:18,color:PAL.verde});
  text(sx+18,y+96,'(la API — PokeAPI)',{fontSize:13,color:PAL.negro});
  text(ox+355,y+22,'🌐 internet (tarda)',{fontSize:13,color:PAL.gris});
  arrow(ox+250,y+62,sx,y+62,{color:PAL.naranja});
  text(ox+300,y+38,'petición → URL (endpoint)',{fontSize:13,color:PAL.naranjaOsc});
  arrow(sx,y+118,ox+250,y+118,{color:PAL.azul});
  text(ox+320,y+122,'← respuesta (datos JSON)',{fontSize:13,color:PAL.azul});
  text(ox,y+170,'Tu código pide a una URL; el servidor responde con datos. Está lejos → tarda → asíncrono.',{fontSize:14,color:PAL.negro});
  track(y+210); adv(890); }

// ===== 3.2 — JSON: el formato de los datos =====
{ let y=header(ox,'3.2','MOMENTO 3','JSON — el formato de los datos', M3);
  codeBox(ox,y+10,470,'{\n  "nombre": "texto entre comillas",\n  "edad": 25,\n  "activo": true,\n  "direccion": { "ciudad": "Lima" },\n  "hobbies": ["leer", "correr"]\n}');
  const lx=ox+520;
  text(lx,y+10,'Un valor puede ser:',{fontSize:15,color:PAL.negro});
  const vals=['texto   "..."','número   25','booleano   true / false','array   [ ]','objeto   { }','null'];
  vals.forEach((v,i)=>{ rect(lx,y+44+i*40,330,32,{stroke:PAL.grisClaro,bg:FILL.gris,sw:1.5});
    text(lx+12,y+51+i*40,v,{fontSize:14,color:PAL.negro}); });
  text(ox,y+210,'Claves SIEMPRE con comillas dobles · puede venir ANIDADO (objeto/array dentro de otro).',{fontSize:13,color:PAL.naranja});
  track(y+250); adv(890); }

// ===== 3.3 — fetch + métodos HTTP =====
{ let y=header(ox,'3.3','MOMENTO 3','fetch + métodos HTTP', M3);
  codeBox(ox,y,560,'fetch("URL_DEL_ENDPOINT", {\n  method: "GET",   // GET por defecto si no se indica\n});');
  text(ox,y+92,'Con solo la URL → GET (leer). Devuelve una Promesa.',{fontSize:14,color:PAL.azul});
  const colW=[150,260,420];
  const rows=[
    ['Método','Acción en la API','Ejemplo del mundo real'],
    ['GET','Leer / Obtener','Traer la lista de Pokémon o un perfil'],
    ['POST','Crear / Enviar nueva','Crear un usuario, iniciar sesión'],
    ['PUT / PATCH','Actualizar / Modificar','Cambiar foto de perfil, editar precio'],
    ['DELETE','Borrar / Eliminar','Quitar una canción de favoritos'],
  ];
  const h=table(ox,y+120,colW,rows,{rowBg:{1:FILL.verde}});
  text(ox,y+130+h,'Hoy solo GET (leer). El resto existe — se menciona.',{fontSize:13,color:PAL.naranja});
  track(y+170+h); adv(830); }

// ===== 3.4 — Response y los dos .then =====
{ let y=header(ox,'3.4','MOMENTO 3','Response y los dos .then', M3);
  rect(ox,y+30,200,90,{stroke:PAL.azul,bg:FILL.azul,sw:2});
  text(ox+18,y+62,'fetch(url)',{fontSize:17,color:PAL.azul,font:3});
  const bx=ox+300;
  rect(bx,y+10,310,150,{stroke:PAL.naranja,bg:'transparent',sw:2});
  text(bx+14,y+22,'1º .then(response)',{fontSize:15,color:PAL.naranjaOsc});
  text(bx+14,y+50,'Respuesta HTTP: ok, status',{fontSize:13,color:PAL.negro});
  text(bx+14,y+76,'el body viene SIN leer',{fontSize:13,color:PAL.negro});
  text(bx+14,y+108,'→ response.json()',{fontSize:14,color:PAL.naranjaOsc,font:3});
  const cx=ox+710;
  rect(cx,y+30,270,90,{stroke:PAL.verde,bg:'transparent',sw:2});
  text(cx+14,y+44,'2º .then(data)',{fontSize:15,color:PAL.verde});
  text(cx+14,y+74,'datos reales (objeto JS)',{fontSize:13,color:PAL.negro});
  arrow(ox+200,y+72,bx,y+72,{color:PAL.naranja});
  arrow(bx+310,y+72,cx,y+72,{color:PAL.verde});
  text(bx+318,y+48,'.json()',{fontSize:13,color:PAL.verde,font:3});
  rect(ox,y+185,640,52,{stroke:PAL.azul,bg:FILL.azul,sw:1.5});
  text(ox+14,y+197,'La data viene ENVUELTA en Response; .json() la desenvuelve\n(y como tarda → otra promesa → por eso hacen falta 2 .then).',{fontSize:13,color:PAL.negro});
  codeBox(ox,y+250,640,'fetch(url)\n  .then(res => res.json())  // 1º: respuesta → objeto\n  .then(data => { ... })    // 2º: datos reales\n  .catch(err => { ... });');
  track(y+360); adv(1000); }

// ===== 4.1 — Adapter: API anidada -> forma limpia -> tarjeta =====
{ let y=header(ox,'4.1','MOMENTO 4','Adapter: API anidada → forma limpia', M4);
  codeBox(ox,y+30,340,'{\n  name: "pikachu",\n  sprites: { front_default: "…25.png" },\n  types: [ { type:{ name:"electric" } } ]\n}',{stroke:PAL.naranja});
  text(ox,y+10,'API (anidado)',{fontSize:14,color:PAL.naranjaOsc});
  const ax=ox+400;
  rect(ax,y+50,180,80,{stroke:PAL.naranja,bg:FILL.naranja,sw:2});
  text(ax+16,y+80,'adaptarPokemon()',{fontSize:15,color:PAL.naranjaOsc,font:3});
  const lx=ox+640;
  text(lx,y+10,'forma limpia (C09)',{fontSize:14,color:PAL.verde});
  codeBox(lx,y+30,300,'{\n  nombre: "pikachu",\n  imagen: "…25.png",\n  tipos: ["electric"]\n}',{stroke:PAL.verde});
  const tx=ox+1000;
  text(tx,y+10,'tarjeta',{fontSize:14,color:PAL.negro});
  rect(tx,y+30,220,150,{stroke:PAL.grisClaro,bg:'#ffffff',sw:1.5});
  rect(tx+70,y+44,80,60,{stroke:PAL.gris,bg:FILL.gris,sw:1.5}); text(tx+92,y+66,'img',{fontSize:13,color:PAL.gris});
  text(tx+78,y+114,'pikachu',{fontSize:16,color:PAL.negro});
  rect(tx+62,y+138,96,28,{stroke:PAL.verde,bg:FILL.verde,sw:1.5}); text(tx+74,y+144,'electric',{fontSize:12,color:PAL.verde});
  arrow(ox+340,y+85,ax,y+90,{color:PAL.naranja});
  arrow(ax+180,y+90,lx,y+85,{color:PAL.naranja});
  arrow(lx+300,y+85,tx,y+95,{color:PAL.naranja});
  text(ox,y+205,'Un solo punto de traducción. crearTarjeta / render NO cambian aunque la fuente sí.',{fontSize:14,color:PAL.naranja});
  track(y+250); adv(1320); }

// ===== 4.3 — Pedir 6: 1 pedido o 6 pedidos =====
{ let y=header(ox,'4.3','MOMENTO 4','Pedir 6: ¿1 pedido o 6 pedidos?', M4);
  // secuencial
  text(ox,y,'DE A UNO (secuencial): pido, espero, pido el siguiente…',{fontSize:15,color:PAL.rojo});
  let bx=ox;
  for(let i=1;i<=6;i++){ rect(bx,y+30,80,46,{stroke:PAL.rojo,bg:FILL.rojo,sw:1.5});
    text(bx+28,y+44,'p'+i,{fontSize:15,color:PAL.negro});
    if(i<6) arrow(bx+80,y+53,bx+110,y+53,{color:PAL.rojo,sw:2}); bx+=110; }
  text(bx+10,y+42,'≈ 6 s  (la suma)',{fontSize:15,color:PAL.rojo});
  // paralelo
  text(ox,y+115,'TODAS A LA VEZ — Promise.all (paralelo):',{fontSize:15,color:PAL.verde});
  rect(ox,y+150,150,120,{stroke:PAL.verde,bg:FILL.verde,sw:2});
  text(ox+16,y+185,'Promise.all',{fontSize:16,color:PAL.verde,font:3});
  text(ox+16,y+215,'dispara las 6',{fontSize:12,color:PAL.negro});
  text(ox+16,y+235,'a la vez',{fontSize:12,color:PAL.negro});
  for(let i=0;i<6;i++){ const r=i%3, c=Math.floor(i/3);
    const px=ox+230+c*100, py=y+150+r*42;
    rect(px,py,80,34,{stroke:PAL.verde,bg:'#ffffff',sw:1.5});
    text(px+26,py+9,'p'+(i+1),{fontSize:13,color:PAL.negro}); }
  arrow(ox+150,y+210,ox+225,y+195,{color:PAL.verde,sw:2});
  text(ox+450,y+200,'≈ 1 s  (lo que tarda el más lento)',{fontSize:15,color:PAL.verde});
  rect(ox,y+290,840,52,{stroke:PAL.azul,bg:FILL.azul,sw:1.5});
  text(ox+14,y+302,'Promise.all = UN solo pedido que lanza las 6 a la vez y avisa cuando TODAS llegaron.\nArray de promesas entra  →  array de resultados sale (en orden).',{fontSize:13,color:PAL.negro});
  track(y+360); adv(900); }

// ===== SALIDA =====
const doc={ type:'excalidraw', version:2, source:'https://excalidraw.com', elements:E,
  appState:{ gridSize:null, viewBackgroundColor:'#ffffff' }, files:{} };
fs.writeFileSync(path.join(__dirname,'CLASE 10.excalidraw'), JSON.stringify(doc,null,2));
console.log('Elementos:',E.length,'| Paneles:',idx,'| Ancho:',ox);
