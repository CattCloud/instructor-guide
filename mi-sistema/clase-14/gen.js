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
const NOW = 1751400000000;
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
function panelPlaceholder(ox, punto, momento, imgId, label, w, h) {
  const y = header(ox, punto, momento, label, PAL.gris);
  rect(ox, y, w, h, { stroke: PAL.gris, sw: 3, dashed: true, bg: PAL.grisFondo });
  text(ox + w / 2 - 150, y + h / 2 - 60, '[' + imgId + ']', { fontSize: 34, color: PAL.gris, align: 'center', width: 300 });
  text(ox + w / 2 - 320, y + h / 2 - 5, label, { fontSize: 18, color: PAL.gris, align: 'center', width: 640 });
  text(ox + w / 2 - 320, y + h / 2 + 40, '(generar con el prompt ' + imgId + ' y pegar aqui)', { fontSize: 12, color: PAL.gris, align: 'center', width: 640 });
}
// PANEL 2.3-B (NATIVO) - Metodos de array: muta o no muta
function panelTabla(ox) {
  const y = header(ox, '2.3-B', 'MOMENTO 2', 'Metodos de array: muta o no muta', PAL.rojo);
  text(ox + 40, y + 5, 'METODOS DE ARRAY - ¿MUTA O NO MUTA?', { fontSize: 30, color: PAL.negro });
  const tY = y + 70; const colW = [320, 520, 460];
  const used = table(ox + 40, tY, colW, [
    ['Metodo', 'Que devuelve', 'Muta el original?'],
    ['.filter(cond)', 'array nuevo con los que cumplen', 'NO - devuelve nuevo'],
    ['.map(fn)', 'array nuevo transformado', 'NO - devuelve nuevo'],
    ['.find(cond)', 'el primer elemento que cumple', 'NO'],
    ['.reduce(fn, init)', 'un solo valor acumulado', 'NO'],
    ['[...arr]  (spread)', 'una copia nueva', 'NO'],
    ['.sort(comp)', 'el MISMO array, ordenado', 'SI MUTA -> copiar con [...]'],
    ['.push(x)', 'la nueva longitud (agrega)', 'SI MUTA'],
  ], { headBg: FILL.gris, rh: 46 });
  const aY = tY + used + 22;
  rect(ox + 40, aY, 640, 60, { stroke: PAL.verde, sw: 2, bg: FILL.verde });
  text(ox + 55, aY + 20, 'NO mutan: devuelven algo NUEVO -> respetan el estado.', { fontSize: 14, color: PAL.verde });
  rect(ox + 700, aY, 640, 60, { stroke: PAL.rojo, sw: 2, bg: FILL.rojo });
  text(ox + 715, aY + 20, 'sort y push MUTAN. Para sort: copiar con [...] ANTES.', { fontSize: 14, color: PAL.rojo });
}
// PANEL 5.4 (NATIVO) - Mapa del dia + arco M4
function panelMapa(ox) {
  const y = header(ox, '5.4', 'MOMENTO 5', 'C14 - lo que se llevan + arco del M4', PAL.rojo);
  text(ox + 40, y + 5, 'C14 - LO QUE SE LLEVAN', { fontSize: 30, color: PAL.negro });
  rect(ox + 40, y + 60, 1320, 66, { stroke: PAL.verde, sw: 2, bg: FILL.verde });
  text(ox + 55, y + 80, 'Tesis 1: se actualiza el estado generando uno NUEVO - no se muta (inmutabilidad).', { fontSize: 15, color: PAL.negro });
  rect(ox + 40, y + 140, 1320, 66, { stroke: PAL.azul, sw: 2, bg: FILL.azul });
  text(ox + 55, y + 160, 'Tesis 2: la UI entera es un dato DERIVADO del estado (total, conteos, lista filtrada/ordenada).', { fontSize: 15, color: PAL.negro });
  text(ox + 40, y + 230, 'CRUD completo:   C · R  (C13)    +    U · D  (hoy)', { fontSize: 18, color: PAL.naranjaOsc });
  const arcoY = y + 290; const bw = 290, gap = 40;
  const etapas = [['C13', 'Modelado + texto'], ['C14  (HOY)', 'Interaccion + datos deriv.'], ['C15', 'Persistencia (localStorage)'], ['C16', 'Lab calificado']];
  let bx = ox + 40;
  etapas.forEach((e, i) => {
    const hoy = i === 1;
    rect(bx, arcoY, bw, 90, { stroke: hoy ? PAL.rojo : PAL.gris, sw: hoy ? 2.5 : 1.5, bg: hoy ? FILL.rojo : '#ffffff' });
    text(bx + 15, arcoY + 16, e[0], { fontSize: 18, color: hoy ? PAL.rojo : PAL.negro });
    text(bx + 15, arcoY + 46, e[1], { fontSize: 12, color: PAL.gris });
    if (i < etapas.length - 1) { arrow(bx + bw + 2, arcoY + 45, bx + bw + gap - 2, arcoY + 45, { color: PAL.naranja, sw: 2 }); }
    bx += bw + gap;
  });
}

// ===================== LAYOUT (timeline horizontal) =====================
let ox = 100; const GAP = 200;
panelPlaceholder(ox, '1.3', 'MOMENTO 1 - IMAGEN', 'IMG-01', 'Delegacion / bubbling (general)', 1000, 1000); ox += 1000 + GAP;
panelPlaceholder(ox, '2.3-A', 'MOMENTO 2 - IMAGEN', 'IMG-02', 'Mutar vs no-mutar (general)', 1200, 900); ox += 1200 + GAP;
panelTabla(ox); ox += 1400 + GAP;
panelMapa(ox); ox += 1400 + GAP;

const out = { type: 'excalidraw', version: 2, source: 'https://excalidraw.com', elements: E, appState: { gridSize: null, viewBackgroundColor: '#ffffff' }, files: {} };
const outPath = process.argv[2] || 'CLASE 14.excalidraw';
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('OK Generated ' + E.length + ' elements -> ' + outPath);
JSON.parse(fs.readFileSync(outPath, 'utf8'));
console.log('JSON re-parse: OK');
