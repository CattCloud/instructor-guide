// Generador nativo del .excalidraw de la Clase 08 (sin imágenes).
// Tablas = rejillas de rectángulo+texto. Coordenadas calculadas.
const fs = require('fs');

const PAL = { negro:'#1e1e1e', rojo:'#e03131', azul:'#1971c2', naranja:'#f08c00',
              verde:'#2f9e44', naranjaOsc:'#e8590c', gris:'#868e96', grisClaro:'#ced4da' };
const FILL = { azul:'#a5d8ff', verde:'#b2f2bb', rojo:'#ffc9c9', amar:'#ffec99', gris:'#f1f3f5', naranja:'#ffd8a8' };

let E = [];
let n = 0;
const rid = () => 'e' + (n++).toString(36).padStart(7, '0') + Math.floor(Math.random()*1e6).toString(36);
const seed = () => Math.floor(Math.random()*1e9);
const NOW = 1717000000000;

function base(o) {
  return { id: rid(), angle:0, strokeColor:'#1e1e1e', backgroundColor:'transparent',
    fillStyle:'solid', strokeWidth:1, strokeStyle:'solid', roughness:0, opacity:100,
    groupIds:[], frameId:null, roundness:null, seed:seed(), version:1, versionNonce:seed(),
    isDeleted:false, boundElements:null, updated:NOW, link:null, locked:false, ...o };
}
function text(x, y, str, o={}) {
  const fs_ = o.fontSize||16, lines = String(str).split('\n');
  const w = o.width || Math.max(...lines.map(l=>l.length))*fs_*0.58 + 4;
  const h = lines.length*fs_*1.25;
  E.push(base({ type:'text', x, y, width:w, height:h, strokeColor:o.color||PAL.negro,
    fontSize:fs_, fontFamily:o.font||5, text:str, originalText:str,
    textAlign:o.align||'left', verticalAlign:'top', containerId:null, lineHeight:1.25, baseline:Math.round(fs_*0.85) }));
  return h;
}
function rect(x, y, w, h, o={}) {
  E.push(base({ type:'rectangle', x, y, width:w, height:h, strokeColor:o.stroke||PAL.negro,
    backgroundColor:o.bg||'transparent', fillStyle:'solid', strokeWidth:o.sw||1.5,
    roughness:0, roundness: o.radius? {type:3} : null }));
}
function arrow(x1,y1,x2,y2,o={}) {
  E.push(base({ type:'arrow', x:x1, y:y1, width:x2-x1, height:y2-y1, strokeColor:o.color||PAL.naranja,
    strokeWidth:o.sw||2, roughness:0, roundness:{type:2},
    points:[[0,0],[x2-x1,y2-y1]], lastCommittedPoint:null,
    startBinding:null, endBinding:null, startArrowhead:null, endArrowhead:o.head===false?null:'arrow' }));
}

// --- helpers de alto nivel ---
const PALCOLORS = [PAL.rojo, PAL.azul, PAL.naranja, PAL.verde];

function panelHeader(ox, idx, momento, title) {
  text(ox, 150, String(idx+1).padStart(2,'0'), { fontSize:48, color:PALCOLORS[idx%4] });
  text(ox, 212, momento, { fontSize:16, color:PAL.naranja });
  text(ox, 238, title, { fontSize:26, color:PAL.negro });
  return 300; // y donde arranca el contenido
}

// Tabla genérica. cols:[{w,header}]. rows:[[c0,c1,...]]. Devuelve alto total.
function table(ox, oy, cols, rows, o={}) {
  const headColor = o.headColor||PAL.azul, headBg = o.headBg||FILL.gris;
  const rowH = 34, padX = 10, fz = 14;
  let y = oy, x = ox;
  cols.forEach(c => { rect(x, y, c.w, rowH, {stroke:headColor, bg:headBg, sw:1.5});
    text(x+padX, y+9, c.header, {fontSize:13, color:headColor}); x += c.w; });
  y += rowH;
  rows.forEach(r => {
    let lines = 1; r.forEach(c => lines = Math.max(lines, String(c).split('\n').length));
    const h = Math.max(rowH, lines*fz*1.4 + 14);
    let xx = ox;
    r.forEach((cell,i) => {
      rect(xx, y, cols[i].w, h, {stroke:PAL.grisClaro, bg:'transparent', sw:1});
      const isCode = i===0 || (o.codeCols && o.codeCols.includes(i));
      text(xx+padX, y+8, String(cell), {fontSize:fz, color:isCode?PAL.azul:PAL.negro, font:isCode?3:5});
      xx += cols[i].w;
    });
    y += h;
  });
  const totalW = cols.reduce((s,c)=>s+c.w,0);
  return { h: y-oy, w: totalW, endY: y };
}

function label(x,y,str,o={}) { return text(x,y,str,{fontSize:o.fontSize||15, color:o.color||PAL.negro, font:o.font||5, width:o.width}); }
function codeBox(x,y,w,str,o={}) {
  const lines = String(str).split('\n').length;
  const h = lines*16*1.3 + 24;
  rect(x,y,w,h,{stroke:o.stroke||PAL.grisClaro, bg:o.bg||'#ffffff', sw:1.5, radius:true});
  text(x+12,y+12,str,{fontSize:15, color:PAL.azul, font:3});
  return h;
}

// ============ TÍTULO MAESTRO ============
text(0, 40, 'CLASE 08 — TAILWIND CSS: LA INTERFAZ DEL GESTOR', {fontSize:46, color:PAL.azul});
text(0, 100, 'El mismo CSS de M1, escrito como clases utilitarias. Construcción por capas + conexión con JS (C07).', {fontSize:18, color:PAL.negro});

// ============ PANELES ============
let ox = 0, idx = 0, maxY = 0;
const GAP = 320;
function advance(w) { ox += w + GAP; }
function track(y){ if(y>maxY) maxY=y; }

// --- Panel 1.1 — CSS a mano vs utility-first ---
{ let y = panelHeader(ox,idx,'MOMENTO 1','El objeto del estilo: CSS a mano vs utility-first');
  const colW = 600;
  // izquierda
  rect(ox, y, colW, 260, {stroke:PAL.rojo, bg:'transparent', sw:2, radius:true});
  text(ox+16, y+14, 'CSS A MANO (M1)', {fontSize:18, color:PAL.rojo});
  codeBox(ox+16, y+50, colW-32, '/* styles.css */\n.titulo {\n  text-align: center;\n  color: #2563eb;\n  font-weight: bold;\n}');
  codeBox(ox+16, y+180, colW-32, '<h1 class="titulo">Hola</h1>');
  // derecha
  const rx = ox+colW+200;
  rect(rx, y, colW, 260, {stroke:PAL.verde, bg:'transparent', sw:2, radius:true});
  text(rx+16, y+14, 'UTILITY-FIRST (Tailwind)', {fontSize:18, color:PAL.verde});
  codeBox(rx+16, y+50, colW-32, '<h1 class="text-center\n     text-blue-600 font-bold">Hola</h1>');
  text(rx+16, y+150, 'Sin archivo .css. Sin selector.\nSin inventar el nombre "titulo".', {fontSize:15, color:PAL.negro});
  arrow(ox+colW+10, y+120, rx-10, y+120, {color:PAL.naranja});
  text(ox+colW+30, y+86, 'lo mismo', {fontSize:15, color:PAL.naranja});
  track(y+300); advance(colW+200+colW); idx++; }

// --- Panel 1.2 — tabla de equivalencias ---
{ let y = panelHeader(ox,idx,'MOMENTO 1','Utility-first: clase-propiedad ↔ CSS');
  const r = table(ox, y, [{w:260,header:'Clase Tailwind'},{w:420,header:'CSS que ya conocés'}], [
    ['text-center','text-align: center'],
    ['font-bold','font-weight: bold'],
    ['p-4','padding: 16px'],
    ['flex','display: flex'],
    ['bg-blue-600','background-color: #2563eb'],
    ['rounded-xl','border-radius: 0.75rem'],
  ]);
  text(ox, r.endY+16, 'Tailwind no inventa diseño — renombra propiedades CSS.', {fontSize:15, color:PAL.naranja});
  track(r.endY+60); advance(r.w); idx++; }

// --- Panel 1.3 — anatomía de una clase-propiedad ---
{ let y = panelHeader(ox,idx,'MOMENTO 1','Anatomía de una clase-propiedad');
  codeBox(ox+120, y+30, 320, 'bg-blue-600', {stroke:PAL.azul});
  // flechas a partes
  text(ox, y+130, 'bg', {fontSize:20, color:PAL.azul, font:3});
  text(ox, y+170, '→ qué propiedad: background', {fontSize:14, color:PAL.naranja});
  text(ox, y+210, 'blue', {fontSize:20, color:PAL.azul, font:3});
  text(ox, y+250, '→ qué color', {fontSize:14, color:PAL.naranja});
  text(ox, y+290, '600', {fontSize:20, color:PAL.azul, font:3});
  text(ox, y+330, '→ qué intensidad (50 claro → 900 oscuro)', {fontSize:14, color:PAL.naranja});
  codeBox(ox, y+390, 460, 'p-4   →   p = padding · 4 = valor de la escala (16px)', {stroke:PAL.azul});
  text(ox, y+460, 'El nombre te dice QUÉ propiedad y con QUÉ valor.', {fontSize:15, color:PAL.negro});
  track(y+510); advance(560); idx++; }

// --- Panel 2.1 — Flexbox ---
{ let y = panelHeader(ox,idx,'MOMENTO 2','Clases de Flexbox (= C02)');
  const c3 = [{w:170,header:'Clase'},{w:360,header:'Valores'},{w:300,header:'CSS equivalente'}];
  let r;
  r = table(ox, y, c3, [['justify-{v}','start · center · end · between · around','justify-content: {v}']], {codeCols:[2]});
  text(ox, y-0, '', {}); let yy = r.endY+22;
  r = table(ox, yy, c3, [['items-{v}','start · center · end · stretch','align-items: {v}']], {codeCols:[2]}); yy = r.endY+22;
  r = table(ox, yy, c3, [['flex-{v}','row (default) · col','flex-direction: {v}']], {codeCols:[2]}); yy = r.endY+30;
  text(ox, yy, 'Utilidades directas (sin valor variable):', {fontSize:14, color:PAL.negro}); yy += 28;
  r = table(ox, yy, [{w:170,header:'Clase'},{w:360,header:'CSS equivalente'}], [
    ['flex','display: flex'], ['gap-{n}','gap (escala de espaciado)'], ['flex-1','flex: 1 1 0%'],
  ], {codeCols:[1]});
  track(r.endY+40); advance(830); idx++; }

// --- Panel 2.2 — Grid ---
{ let y = panelHeader(ox,idx,'MOMENTO 2','Clases de Grid (= C03)');
  const c3 = [{w:180,header:'Clase'},{w:300,header:'Valores'},{w:360,header:'CSS equivalente'}];
  let r = table(ox, y, c3, [['grid-cols-{n}','1 · 2 · 3 · 4 (hasta 12)','grid-template-columns: repeat(n, 1fr)']], {codeCols:[2]});
  let yy = r.endY+22;
  r = table(ox, yy, c3, [['col-span-{n}','1 · 2 · 3','grid-column: span n']], {codeCols:[2]}); yy = r.endY+30;
  text(ox, yy, 'Utilidades directas:', {fontSize:14, color:PAL.negro}); yy += 28;
  r = table(ox, yy, [{w:180,header:'Clase'},{w:420,header:'CSS equivalente'}], [
    ['grid','display: grid'], ['gap-{n}','gap (escala: 2, 4, 6, 8)'],
  ], {codeCols:[1]});
  track(r.endY+40); advance(840); idx++; }

// --- Panel 3.1 — Caja ---
{ let y = panelHeader(ox,idx,'MOMENTO 3','Clases de Caja: espaciado + tamaño');
  text(ox, y, 'Espaciado ({propiedad}{lado}-{n}, misma escala):', {fontSize:14, color:PAL.negro});
  const c3 = [{w:200,header:'Clase'},{w:320,header:'Valores ({n})'},{w:330,header:'CSS equivalente'}];
  let r = table(ox, y+26, c3, [
    ['p-{n} / m-{n}','1·2·3·4·6·8·12 (×4px)','padding / margin (todos los lados)'],
    ['px-{n} / py-{n}','(misma escala)','horizontal / vertical'],
    ['pt/pr/pb/pl-{n}','(misma escala)','un solo lado'],
    ['space-y-{n}','(misma escala)','separación entre hijos'],
  ]);
  let yy = r.endY+24;
  text(ox, yy, 'Tamaño:', {fontSize:14, color:PAL.negro}); yy += 26;
  r = table(ox, yy, [{w:200,header:'Clase'},{w:320,header:'Valores'},{w:330,header:'CSS equivalente'}], [
    ['w-{valor}','full · 1/2 · 1/3 · (escala)','width'],
    ['max-w-{valor}','sm·md·lg·xl·2xl…7xl','max-width (4xl → 56rem)'],
    ['min-h-{valor}','screen · full','min-height (screen → 100vh)'],
  ]); yy = r.endY+24;
  rect(ox, yy, 850, 70, {stroke:PAL.naranja, bg:FILL.naranja, sw:1.5, radius:true});
  text(ox+14, yy+12, 'NUEVO — escala fija: cada unidad = 4px (p-2=8, p-4=16, p-6=24).', {fontSize:15, color:PAL.naranjaOsc});
  text(ox+14, yy+40, 'No inventás píxeles: elegís de la escala → todo consistente.', {fontSize:14, color:PAL.negro});
  track(yy+110); advance(890); idx++; }

// --- Panel 3.2 — Estética ---
{ let y = panelHeader(ox,idx,'MOMENTO 3','Clases de Estética (= C04)');
  text(ox, y, 'Tipografía:', {fontSize:14, color:PAL.negro});
  const cT = [{w:200,header:'Clase'},{w:340,header:'Valores'},{w:230,header:'CSS'}];
  let r = table(ox, y+26, cT, [
    ['text-{tamaño}','sm·base·lg·xl·2xl·3xl·4xl','font-size'],
    ['font-{peso}','normal·medium·semibold·bold','font-weight'],
    ['text-{alin}','left·center·right','text-align'],
  ], {codeCols:[2]});
  let yy = r.endY+22;
  text(ox, yy, 'Color (text- = texto, bg- = fondo):', {fontSize:14, color:PAL.negro}); yy+=26;
  r = table(ox, yy, [{w:200,header:'Clase'},{w:340,header:'Valores'},{w:230,header:'CSS'}], [
    ['text-{color}-{int}','color: gray·red·green·blue\nint: 50·100·500·700·900','color'],
    ['bg-{color}-{int}','(mismos color e intensidad)','background-color'],
  ], {codeCols:[2]}); yy = r.endY+22;
  text(ox, yy, 'Bordes / Sombra:', {fontSize:14, color:PAL.negro}); yy+=26;
  r = table(ox, yy, [{w:200,header:'Clase'},{w:340,header:'Valores'},{w:230,header:'CSS'}], [
    ['border-{lado}-{grosor}','lado: t·r·b·l · grosor: (1)·2·4·8','border-width'],
    ['rounded-{tamaño}','sm·md·lg·xl·full','border-radius'],
    ['shadow-{tamaño}','sm·(normal)·md·lg','box-shadow'],
  ], {codeCols:[2]}); yy = r.endY+24;
  rect(ox, yy, 770, 56, {stroke:PAL.verde, bg:FILL.verde, sw:1.5, radius:true});
  text(ox+14, yy+10, 'Color semántico (de C04): verde = ingreso · rojo = gasto.', {fontSize:15, color:PAL.verde});
  text(ox+14, yy+34, 'El color comunica, no decora.', {fontSize:14, color:PAL.negro});
  track(yy+100); advance(810); idx++; }

// --- Panel 4.1 — anatomía prefijo:clase ---
{ let y = panelHeader(ox,idx,'MOMENTO 4','El 2º tipo de clase: el prefijo-modificador');
  codeBox(ox+60, y+20, 360, 'hover:bg-blue-700', {stroke:PAL.azul});
  text(ox, y+120, 'hover', {fontSize:20, color:PAL.rojo, font:3});
  text(ox, y+158, '→ el prefijo (CUÁNDO): solo al pasar el mouse', {fontSize:14, color:PAL.naranja});
  text(ox, y+210, 'bg-blue-700', {fontSize:20, color:PAL.azul, font:3});
  text(ox, y+248, '→ la clase-propiedad (QUÉ): fondo azul oscuro', {fontSize:14, color:PAL.naranja});
  rect(ox, y+300, 560, 90, {stroke:PAL.gris, bg:FILL.gris, sw:1.5, radius:true});
  text(ox+14, y+312, 'Clase-propiedad sola (bg-blue-700) → aplica SIEMPRE.', {fontSize:15, color:PAL.negro});
  text(ox+14, y+340, 'Con prefijo (hover:bg-blue-700) → aplica SOLO en la condición.', {fontSize:15, color:PAL.negro});
  text(ox+14, y+366, 'Dos familias: estado (interacción) y breakpoint (pantalla).', {fontSize:14, color:PAL.azul});
  track(y+420); advance(620); idx++; }

// --- Panel 4.2 — Estados ---
{ let y = panelHeader(ox,idx,'MOMENTO 4','Prefijos de ESTADO (= pseudo-clases C02)');
  text(ox, y, 'Cada estado es un prefijo distinto → se enumeran.', {fontSize:14, color:PAL.negro});
  const r = table(ox, y+26, [{w:170,header:'Prefijo'},{w:200,header:'Pseudo-clase CSS'},{w:380,header:'Cuándo aplica'}], [
    ['hover:',':hover','al pasar el mouse por encima'],
    ['focus:',':focus','al enfocar (click o tab en un campo)'],
    ['active:',':active','mientras se mantiene presionado'],
    ['disabled:',':disabled','cuando el elemento está deshabilitado'],
  ], {codeCols:[1]});
  track(r.endY+40); advance(770); idx++; }

// --- Panel 4.3 — Breakpoints ---
{ let y = panelHeader(ox,idx,'MOMENTO 4','Prefijos de RESPONSIVIDAD: breakpoints (mobile-first)');
  const r = table(ox, y, [{w:130,header:'Prefijo'},{w:130,header:'Ancho'},{w:330,header:'Media query'},{w:330,header:'Dispositivo'}], [
    ['(sin prefijo)','< 640px','—','celulares (base)'],
    ['sm:','≥ 640px','@media (min-width: 640px)','celular horizontal · tablet chica'],
    ['md:','≥ 768px','@media (min-width: 768px)','tablet estándar'],
    ['lg:','≥ 1024px','@media (min-width: 1024px)','laptop · monitor estándar'],
    ['xl:','≥ 1280px','@media (min-width: 1280px)','monitor grande'],
    ['2xl:','≥ 1536px','@media (min-width: 1536px)','monitor muy grande'],
  ], {codeCols:[2]});
  let yy = r.endY+22;
  rect(ox, yy, 920, 84, {stroke:PAL.azul, bg:FILL.azul, sw:1.5, radius:true});
  text(ox+14, yy+10, 'Mobile-first: la clase SIN prefijo es la base (móvil).', {fontSize:15, color:PAL.azul});
  text(ox+14, yy+36, 'El prefijo aplica de ese ancho HACIA ARRIBA.   Ej: grid-cols-1 md:grid-cols-2', {fontSize:14, color:PAL.negro});
  text(ox+14, yy+60, 'breakpoint:clase  →  la clase aplica desde ese ancho.', {fontSize:14, color:PAL.naranja});
  track(yy+120); advance(920); idx++; }

// --- Panel 5.1 — conceptos para conectar ---
{ let y = panelHeader(ox,idx,'MOMENTO 5','Conectar el Gestor: qué vamos a usar');
  text(ox, y, 'YA LO TIENEN (de C07) — se usa tal cual:', {fontSize:15, color:PAL.verde});
  let r = table(ox, y+28, [{w:330,header:'De C07'},{w:300,header:'Para qué'}], [
    ['new Movimiento(n, t, v)','crear un movimiento'],
    ['presupuesto.agregar(m)','sumarlo a la colección'],
    ['presupuesto.saldo()','obtener el saldo actual'],
    ['m.esIngreso()','recorrer/formatear la lista'],
  ]);
  let yy = r.endY+26;
  text(ox, yy, 'LO NUEVO MÍNIMO — primer contacto con DOM y eventos (su módulo es M3):', {fontSize:15, color:PAL.rojo}); yy+=26;
  text(ox, yy, 'DOM = la página como estructura que JS puede leer y modificar.\nEvento = algo que pasa (click, submit) y al que reaccionamos con una función.', {fontSize:13, color:PAL.negro}); yy+=58;
  r = table(ox, yy, [{w:330,header:'Necesito…'},{w:360,header:'Cómo'}], [
    ['tomar un elemento de la página',"document.getElementById('id')"],
    ['leer lo que el usuario escribió','campo.value'],
    ['reaccionar al enviar el form',"form.addEventListener('submit', fn)"],
    ['que la página no se recargue','event.preventDefault()'],
    ['pintar HTML desde JS','elemento.innerHTML = `...`'],
  ], {codeCols:[1]});
  text(ox, r.endY+16, 'Flujo: el form LEE → CREA con C07 → re-PINTA. Sin lógica nueva.', {fontSize:15, color:PAL.naranja});
  track(r.endY+60); advance(720); idx++; }

// --- Panel 5.2 — arco del Módulo 2 ---
{ let y = panelHeader(ox,idx,'MOMENTO 5','El arco del Módulo 2');
  const boxes = [
    ['C05','Imperativo','paso a paso', PAL.rojo],
    ['C06','Funcional','transformar con funciones', PAL.naranja],
    ['C07','OOP','modelar con objetos', PAL.verde],
    ['C08','Interfaz','Tailwind + conexión', PAL.azul],
  ];
  let bx = ox;
  boxes.forEach((b,i) => {
    rect(bx, y+20, 300, 110, {stroke:b[3], bg:'transparent', sw:2, radius:true});
    text(bx+14, y+32, b[0], {fontSize:22, color:b[3]});
    text(bx+14, y+66, b[1], {fontSize:18, color:PAL.negro});
    text(bx+14, y+94, b[2], {fontSize:13, color:PAL.negro});
    if (i<3) arrow(bx+300, y+75, bx+340, y+75, {color:PAL.naranja});
    bx += 340;
  });
  rect(ox, y+170, 1300, 64, {stroke:PAL.azul, bg:FILL.azul, sw:1.5, radius:true});
  text(ox+16, y+182, 'El mismo Gestor de Presupuesto: de correr en la consola → a app real desplegada en GitHub Pages.', {fontSize:16, color:PAL.azul});
  text(ox+16, y+208, 'Cierre del módulo de fundamentos. Lo que viene (M3): el DOM.', {fontSize:14, color:PAL.negro});
  track(y+260); advance(1320); idx++; }

// ============ SALIDA ============
const doc = { type:'excalidraw', version:2, source:'https://excalidraw.com',
  elements:E, appState:{ gridSize:null, viewBackgroundColor:'#ffffff' }, files:{} };
fs.writeFileSync('CLASE 08.excalidraw', JSON.stringify(doc, null, 2));
console.log('Elementos:', E.length, '| Paneles:', idx, '| Ancho aprox:', ox, '| Alto aprox:', Math.round(maxY));
