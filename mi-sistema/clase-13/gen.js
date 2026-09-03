const fs = require('fs');
const PAL = {
  negro: '#1e1e1e', rojo: '#e03131', azul: '#1971c2',
  naranja: '#f08c00', verde: '#2f9e44', naranjaOsc: '#e8590c',
  gris: '#868e96', grisClaro: '#ced4da', grisLinea: '#dee2e6', grisFondo: '#f8f9fa'
};
const FILL = {
  azul: '#a5d8ff', verde: '#b2f2bb', rojo: '#ffc9c9',
  amar: '#ffec99', gris: '#f1f3f5', naranja: '#ffd8a8'
};
let E = [], n = 0;
const rid = () => 'e' + (n++).toString(36).padStart(7, '0') + Math.floor(Math.random() * 1e6).toString(36);
const seed = () => Math.floor(Math.random() * 1e9);
const NOW = 1751300000000;
function bse(o) { return { id: rid(), angle: 0, strokeColor: PAL.negro, backgroundColor: 'transparent', fillStyle: 'solid', strokeWidth: 1, strokeStyle: 'solid', roughness: 0, opacity: 100, groupIds: [], frameId: null, roundness: null, seed: seed(), version: 1, versionNonce: seed(), isDeleted: false, boundElements: null, updated: NOW, link: null, locked: false, ...o }; }
function text(x, y, str, o = {}) {
  const fz = o.fontSize || 16; const lines = String(str).split('\n');
  const w = o.width || Math.max(...lines.map(l => l.length)) * fz * 0.58 + 4;
  const h = lines.length * fz * 1.25;
  E.push(bse({ type: 'text', x, y, width: w, height: h, strokeColor: o.color || PAL.negro, fontSize: fz, fontFamily: o.font || 5, text: str, originalText: str, textAlign: o.align || 'left', verticalAlign: 'top', containerId: null, lineHeight: 1.25, baseline: Math.round(fz * 0.85) }));
  return h;
}
function rect(x, y, w, h, o = {}) { E.push(bse({ type: 'rectangle', x, y, width: w, height: h, strokeColor: o.stroke || PAL.negro, backgroundColor: o.bg || 'transparent', fillStyle: 'solid', strokeWidth: o.sw || 1.5, strokeStyle: o.dashed ? 'dashed' : 'solid', roughness: 0, roundness: o.radius === false ? null : { type: 3 } })); }
function line(x1, y1, x2, y2, o = {}) { E.push(bse({ type: 'line', x: x1, y: y1, width: x2 - x1, height: y2 - y1, strokeColor: o.color || PAL.grisLinea, strokeWidth: o.sw || 1, strokeStyle: o.dashed ? 'dashed' : 'solid', roughness: 0, roundness: { type: 2 }, points: [[0, 0], [x2 - x1, y2 - y1]], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: null, endArrowhead: null })); }
function arrow(x1, y1, x2, y2, o = {}) { E.push(bse({ type: 'arrow', x: x1, y: y1, width: x2 - x1, height: y2 - y1, strokeColor: o.color || PAL.naranja, strokeWidth: o.sw || 2.5, strokeStyle: o.dashed ? 'dashed' : 'solid', roughness: 0, roundness: { type: 2 }, points: [[0, 0], [x2 - x1, y2 - y1]], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: null, endArrowhead: o.head === false ? null : 'arrow' })); }
function table(x, y, colW, rows, o = {}) {
  const fz = o.fontSize || 13; const rhMin = o.rh || 42; let ty = y;
  rows.forEach((row, ri) => {
    const isHead = ri === 0;
    const maxLines = Math.max(...row.map(c => String(c).split('\n').length));
    const h = Math.max(rhMin, maxLines * fz * 1.32 + 14);
    let tx = x;
    const bg = isHead ? (o.headBg || FILL.gris) : '#ffffff';
    row.forEach((cell, ci) => {
      rect(tx, ty, colW[ci], h, { stroke: PAL.grisClaro, bg, sw: 1.5, radius: false });
      const cc = isHead ? PAL.negro : (ci === 0 ? PAL.azul : PAL.negro);
      const cf = (ci === 0 && !isHead) ? 3 : 5;
      text(tx + 10, ty + 9, cell, { fontSize: fz, color: cc, font: cf });
      tx += colW[ci];
    });
    ty += h;
  });
  return ty - y;
}
function header(ox, punto, momento, title, color) {
  text(ox, 150, punto, { fontSize: 46, color });
  text(ox, 214, momento, { fontSize: 15, color: PAL.naranja });
  text(ox, 240, title, { fontSize: 22, color: PAL.negro });
  return 300;
}
function marcoLibre(ox, y, W, H, titulo, huText, criterios, numPasos, aside) {
  rect(ox, y, W, H, { stroke: PAL.gris, sw: 2 });
  text(ox + W / 2 - 380, y + 25, titulo, { fontSize: 30, color: PAL.rojo, align: 'center', width: 760 });
  const huX = ox + 30, huY = y + 90;
  rect(huX, huY, 600, 150, { stroke: PAL.grisClaro, sw: 1.5 });
  text(huX + 15, huY + 12, 'HU', { fontSize: 14, color: PAL.negro });
  text(huX + 15, huY + 38, huText, { fontSize: 12, color: PAL.negro });
  const crX = ox + W - 630, crY = y + 90;
  rect(crX, crY, 600, 150, { stroke: PAL.grisClaro, sw: 1.5 });
  text(crX + 15, crY + 12, 'CRITERIOS', { fontSize: 14, color: PAL.negro });
  text(crX + 15, crY + 38, criterios, { fontSize: 12, color: PAL.negro });
  const startY = y + 280; const stepH = 75;
  for (let i = 0; i < numPasos; i++) {
    const ly = startY + i * stepH;
    text(ox + 50, ly + 5, (i + 1) + '.', { fontSize: 22, color: PAL.grisClaro });
    line(ox + 90, ly + 32, ox + W - 50, ly + 32, { color: PAL.grisLinea, sw: 1, dashed: true });
  }
  if (aside) { text(ox + W - 520, aside.y, aside.txt, { fontSize: 12, color: PAL.gris, width: 480 }); }
  const pieY = y + H - 38;
  text(ox + W / 2 - 380, pieY, 'Cada paso se responde leyendo la HU y sus criterios - no son decisiones abiertas.', { fontSize: 12, color: PAL.gris, align: 'center', width: 760 });
}
function panelPlaceholder(ox, punto, momento, imgId, label, w, h) {
  const y = header(ox, punto, momento, label, PAL.gris);
  rect(ox, y, w, h, { stroke: PAL.gris, sw: 3, dashed: true, bg: PAL.grisFondo });
  text(ox + w / 2 - 150, y + h / 2 - 60, '[' + imgId + ']', { fontSize: 34, color: PAL.gris, align: 'center', width: 300 });
  text(ox + w / 2 - 320, y + h / 2 - 5, label, { fontSize: 18, color: PAL.gris, align: 'center', width: 640 });
  text(ox + w / 2 - 320, y + h / 2 + 40, '(generar con el prompt ' + imgId + ' y pegar aqui)', { fontSize: 12, color: PAL.gris, align: 'center', width: 640 });
}
// PANEL 3 (NATIVO) - Un texto es un objeto + tabla de metodos
function panelTextoObjeto(ox) {
  const y = header(ox, '3', 'MOMENTO 3', 'Un texto es un objeto + metodos de String', PAL.rojo);
  text(ox + 40, y + 5, 'UN TEXTO ES UN OBJETO - trae metodos', { fontSize: 30, color: PAL.negro });
  rect(ox + 40, y + 55, 1300, 78, { stroke: PAL.azul, sw: 1.5, bg: FILL.azul });
  text(ox + 55, y + 70, 'Un string no es solo letras: es un objeto con metodos (como un array).\nNo mutan -devuelven un valor nuevo- y se encadenan.', { fontSize: 15, color: PAL.negro });
  const tY = y + 160;
  const colW = [330, 470, 500];
  const used = table(ox + 40, tY, colW, [
    ['Metodo', 'Devuelve', 'Para que'],
    ['.trim()', 'texto sin espacios en las puntas', 'limpiar la entrada'],
    ['.toLowerCase()', 'texto en minusculas', 'unificar mayusculas'],
    ['.startsWith("x")', 'true / false', 'asegurar el # del hashtag'],
    ['.replaceAll("a","b")', 'texto con todas cambiadas', 'sustituir variables (M4)'],
    ['.slice(ini, fin)', 'un pedazo del texto', 'recortar (logro)'],
    ['.split("sep")', 'un ARRAY', 'separar hashtags (M4)'],
    ['.length', 'numero (propiedad, sin parentesis)', 'validar campos vacios'],
  ], { headBg: FILL.gris, rh: 46 });
  const aY = tY + used + 22;
  rect(ox + 40, aY, 1300, 60, { stroke: PAL.naranjaOsc, sw: 2, bg: FILL.naranja });
  text(ox + 55, aY + 18, '.trim() lleva parentesis; .length NO -es propiedad, no metodo-.', { fontSize: 15, color: PAL.naranjaOsc });
}

// ===================== LAYOUT (timeline horizontal) =====================
let ox = 100;
const GAP = 200;

panelPlaceholder(ox, '1.4-A', 'MOMENTO 1 - IMAGEN', 'IMG-01', 'Que es el ESTADO (general)', 1200, 820); ox += 1200 + GAP;
panelPlaceholder(ox, '1.4-B', 'MOMENTO 1 - IMAGEN', 'IMG-02', 'Tipos de estado: GLOBAL vs LOCAL (general)', 1200, 820); ox += 1200 + GAP;
panelPlaceholder(ox, '1.4-C', 'MOMENTO 1 - IMAGEN', 'IMG-03', 'Que es CRUD (general)', 1200, 820); ox += 1200 + GAP;

// 1.5 LIBRE HU1
{ const W = 1400, H = 920; const y = header(ox, '1.5', 'MOMENTO 1', 'Plan socratico HU1: MODELAR + ESTADO (LIBRE)', PAL.verde);
  marcoLibre(ox, y, W, H, 'PLAN - HU1: MODELAR + ESTADO + AGREGAR',
    '"Como desarrollador, quiero representar cada\nplantilla como un objeto y guardarlas todas\nen una unica lista."',
    '1. Cada plantilla con titulo, mensaje y\n   hashtag.\n2. Registra su fecha automaticamente.\n3. Una unica lista central.\n4. Agregar la suma a la lista (crece).',
    5, null); ox += W + GAP; }

// 2 LIBRE HU2
{ const W = 1400, H = 960; const y = header(ox, '2', 'MOMENTO 2', 'Plan socratico HU2: MOSTRAR + FORM (LIBRE)', PAL.naranja);
  marcoLibre(ox, y, W, H, 'PLAN - HU2: MOSTRAR + CONECTAR EL FORM',
    '"Como usuario, quiero ver mis plantillas y que\naparezca la nueva apenas la agrego, sin\nrecargar."',
    '1. Todas aparecen en pantalla.\n2. La nueva aparece al instante.\n3. Muestra la fecha legible.\n4. Refleja exacto el estado (sin duplicados).',
    6, { y: y + 280 + 6 * 75 + 15, txt: 'Regla de oro: cambias el estado -> render().' }); ox += W + GAP; }

// 3 NATIVO
panelTextoObjeto(ox); ox += 1400 + GAP;

// 3.4 LIBRE HU3
{ const W = 1400, H = 960; const y = header(ox, '3.4', 'MOMENTO 3', 'Plan socratico HU3: LIMPIAR/NORMALIZAR (LIBRE)', PAL.verde);
  marcoLibre(ox, y, W, H, 'PLAN - HU3: LIMPIAR, NORMALIZAR, VALIDAR',
    '"Como usuario, quiero que mis plantillas se\nguarden limpias y con hashtags consistentes."',
    '1. Se eliminan espacios sobrantes.\n2. El hashtag siempre igual (minuscula + #).\n3. No se guarda con titulo o mensaje vacio.',
    6, { y: y + 280 + 6 * 75 + 15, txt: 'Normalizar la entrada es trabajo de la app, no del usuario.' }); ox += W + GAP; }

// 4.2 LIBRE HU4
{ const W = 1400, H = 960; const y = header(ox, '4.2', 'MOMENTO 4', 'Plan socratico HU4: GENERAR + COPIAR (LIBRE)', PAL.azul);
  marcoLibre(ox, y, W, H, 'PLAN - HU4: GENERAR + COPIAR EL MENSAJE',
    '"Como usuario, quiero elegir una plantilla,\nescribir un nombre real y obtener el mensaje\nfinal listo para copiar."',
    '1. Elegir plantilla + nombre real.\n2. Mensaje completo con {nombre} reemplazado.\n3. Boton Copiar al portapapeles.\n4. Hashtags como etiquetas separadas.',
    6, { y: y + 280 + 6 * 75 + 15, txt: 'Una zona para USAR las plantillas, aparte de la lista que las muestra.' }); ox += W + GAP; }

const out = { type: 'excalidraw', version: 2, source: 'https://excalidraw.com', elements: E, appState: { gridSize: null, viewBackgroundColor: '#ffffff' }, files: {} };
const outPath = process.argv[2] || 'CLASE 13.excalidraw';
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
const maxX = Math.max(...E.map(e => e.x + (e.width || 0)));
const maxY = Math.max(...E.map(e => e.y + (e.height || 0)));
console.log('OK Generated ' + E.length + ' elements');
console.log('   canvas extent: ' + Math.round(maxX) + 'x' + Math.round(maxY));
console.log('   output: ' + outPath);
JSON.parse(fs.readFileSync(outPath, 'utf8'));
console.log('   JSON re-parse: OK');
