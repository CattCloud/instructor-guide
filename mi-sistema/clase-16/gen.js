const fs = require('fs');
const PAL = {
  negro: '#1e1e1e', rojo: '#e03131', azul: '#1971c2',
  naranja: '#f08c00', verde: '#2f9e44', naranjaOsc: '#e8590c',
  gris: '#868e96', grisClaro: '#ced4da', grisLinea: '#dee2e6', grisFondo: '#f8f9fa'
};
const FILL = { azul: '#a5d8ff', verde: '#b2f2bb', rojo: '#ffc9c9', amar: '#ffec99', gris: '#f1f3f5', naranja: '#ffd8a8' };
let E = [], n = 0;
const rid = () => 'e' + (n++).toString(36).padStart(7, '0') + Math.floor(Math.random() * 1e6).toString(36);
const seed = () => Math.floor(Math.random() * 1e9);
const NOW = 1751600000000;
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
function marcoLibre(ox, y, W, H, titulo, huText, criterios, numPasos) {
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
  const startY = y + 280; const stepH = 78;
  for (let i = 0; i < numPasos; i++) {
    const ly = startY + i * stepH;
    text(ox + 50, ly + 5, (i + 1) + '.', { fontSize: 22, color: PAL.grisClaro });
    line(ox + 90, ly + 32, ox + W - 50, ly + 32, { color: PAL.grisLinea, sw: 1, dashed: true });
  }
  text(ox + W / 2 - 380, y + H - 38, 'Se desarrolla paso a paso: que se hace -> codigo -> por que.', { fontSize: 12, color: PAL.gris, align: 'center', width: 760 });
}
function panelPlaceholder(ox, punto, momento, imgId, label, w, h, nota) {
  const y = header(ox, punto, momento, label, PAL.gris);
  rect(ox, y, w, h, { stroke: PAL.gris, sw: 3, dashed: true, bg: PAL.grisFondo });
  text(ox + w / 2 - 150, y + h / 2 - 60, '[' + imgId + ']', { fontSize: 34, color: PAL.gris, align: 'center', width: 300 });
  text(ox + w / 2 - 320, y + h / 2 - 5, label, { fontSize: 18, color: PAL.gris, align: 'center', width: 640 });
  text(ox + w / 2 - 320, y + h / 2 + 40, nota || ('(generar con el prompt ' + imgId + ' y pegar aqui)'), { fontSize: 12, color: PAL.gris, align: 'center', width: 640 });
}

// ===================== LAYOUT (timeline horizontal) =====================
let ox = 100; const GAP = 200; const LW = 1400, LH = 680;

// --- 1.3 IMAGEN modal en vivo (Eric pone su propia imagen) ---
panelPlaceholder(ox, '1.3', 'MOMENTO 1 - IMAGEN PROPIA', 'MODAL EN VIVO', 'Un modal de confirmacion real', 1200, 900,
  '(dejar el espacio: pega aqui tu propia captura de un modal en vivo)'); ox += 1200 + GAP;

// --- 1.4 LIBRE HU1 ---
{ const y = header(ox, '1.4', 'MOMENTO 1', 'Desarrollar la HU1 (LIBRE)', PAL.azul);
  marcoLibre(ox, y, LW, LH, 'HU1 - CONFIRMAR ANTES DE BORRAR',
    '"Como usuario, quiero que me pregunten\nantes de eliminar, para no perder una\nplantilla por un clic accidental."',
    '1. Al eliminar (o vaciar) aparece un modal.\n2. Si cancela, no se borra nada.\n3. Si acepta, se borra y queda guardado.', 4); ox += LW + GAP; }

// --- 2.2 LIBRE HU2 ---
{ const y = header(ox, '2.2', 'MOMENTO 2', 'Desarrollar la HU2 (LIBRE)', PAL.naranja);
  marcoLibre(ox, y, LW, LH, 'HU2 - ESTADO VACIO AMIGABLE',
    '"Como usuario, quiero ver un mensaje claro\ncuando no tengo plantillas o mi busqueda\nno encuentra nada, no una pantalla en blanco."',
    '1. Sin plantillas -> mensaje de bienvenida.\n2. Filtro sin resultados -> "No se encontraron".\n3. Con datos, la lista vuelve a la normalidad.', 2); ox += LW + GAP; }

// --- 3.2 IMAGEN ¿Que es un modulo? ---
panelPlaceholder(ox, '3.2', 'MOMENTO 3 - IMAGEN', 'IMG-01', 'Que es un modulo?', 1200, 900); ox += 1200 + GAP;

// --- 3.3 NATIVO: Por que usar modulos? + tabla 4 razones ---
{ const y = header(ox, '3.3', 'MOMENTO 3', 'Por que usar modulos?', PAL.rojo);
  text(ox, y - 6, 'Cuatro razones (de los apuntes):', { fontSize: 16, color: PAL.gris });
  table(ox, y + 34, [300, 640], [
    ['Razon', 'Que aporta'],
    ['Organizacion', 'Divide un proyecto grande en piezas pequenas,\ncada una con una responsabilidad clara.'],
    ['Encapsulamiento', 'Cada modulo tiene su propio ambito; sus variables\nNO contaminan el ambito global ni chocan con otras.'],
    ['Reutilizacion', 'Un mismo modulo se puede usar en varios\nlugares del proyecto.'],
    ['Mantenibilidad', 'Mas facil de leer, depurar y escalar\n(clave para trabajar en equipo).'],
  ], { fontSize: 14, rh: 60, headBg: FILL.rojo });
  text(ox, y + 34 + 320, 'Tesis del dia: un codigo modular es un codigo mantenible.', { fontSize: 15, color: PAL.rojo });
  ox += 940 + GAP; }

// --- 3.4 IMAGEN interaccion 2 archivos export-import ---
panelPlaceholder(ox, '3.4', 'MOMENTO 3 - IMAGEN', 'IMG-02', 'Interaccion export -> import (2 archivos)', 1300, 900); ox += 1300 + GAP;

// --- 3.5 NATIVO: HU3 tabla archivo-responsabilidad-exporta ---
{ const y = header(ox, '3.5', 'MOMENTO 3', 'HU3 - Repartir la app en modulos', PAL.rojo);
  text(ox, y - 6, 'Que exporta cada archivo (lo demas queda privado):', { fontSize: 16, color: PAL.gris });
  table(ox, y + 34, [280, 340, 470], [
    ['Archivo', 'Responsabilidad', 'Exporta'],
    ['models/Template.js', 'El modelo de datos', 'class Template'],
    ['state.js', 'El estado y su logica', 'state, contarPorHashtag,\nplantillasVisibles, normalizarHashtag'],
    ['storage.js', 'La persistencia', 'CLAVE, CLAVE_FILTRO,\nguardar, cargar'],
    ['ui.js', 'La interfaz', 'render'],
    ['app.js', 'El arranque', '(no exporta; solo\nimporta y arranca)'],
  ], { fontSize: 14, rh: 56, headBg: FILL.rojo });
  text(ox, y + 34 + 340, 'Un solo <script type="module" src="js/app.js">; el navegador arma el orden solo.', { fontSize: 14, color: PAL.negro });
  ox += 1090 + GAP; }

// --- 4.0 LIBRE HU4 (sort) ---
{ const y = header(ox, '4.0', 'MOMENTO 4', 'Desarrollar la HU4 (LIBRE)', PAL.verde);
  marcoLibre(ox, y, LW, LH, 'HU4 - ORDENAR LA COLECCION',
    '"Como usuario, quiero ordenar mis plantillas\npor fecha (mas recientes o mas antiguas),\npara revisarlas como me convenga."',
    '1. Selector: mas recientes / mas antiguas.\n2. La lista se reordena al instante.\n3. El orden se mantiene al agregar/editar/filtrar.', 3); ox += LW + GAP; }

const out = { type: 'excalidraw', version: 2, source: 'https://excalidraw.com', elements: E, appState: { gridSize: null, viewBackgroundColor: '#ffffff' }, files: {} };
const outPath = process.argv[2] || 'CLASE 16.excalidraw';
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('OK Generated ' + E.length + ' elements -> ' + outPath);
JSON.parse(fs.readFileSync(outPath, 'utf8'));
console.log('JSON re-parse: OK');
