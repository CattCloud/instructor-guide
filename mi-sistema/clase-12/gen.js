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
const NOW = 1750700000000;
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
function codeBox(x, y, w, str, o = {}) {
  const fz = o.fontSize || 15; const lines = String(str).split('\n').length;
  const h = lines * fz * 1.25 + 22;
  rect(x, y, w, h, { stroke: o.stroke || PAL.grisClaro, bg: o.bg || '#ffffff', sw: 1.5, radius: true });
  text(x + 12, y + 11, str, { fontSize: fz, color: o.color || PAL.azul, font: 3 });
  return h;
}
function table(x, y, colW, rows, o = {}) {
  const fz = o.fontSize || 13; const rhMin = o.rh || 42; let ty = y;
  rows.forEach((row, ri) => {
    const isHead = ri === 0;
    const maxLines = Math.max(...row.map(c => String(c).split('\n').length));
    const h = Math.max(rhMin, maxLines * fz * 1.32 + 14);
    let tx = x;
    const bg = isHead ? (o.headBg || FILL.gris) : ((o.rowBg && o.rowBg[ri]) || '#ffffff');
    row.forEach((cell, ci) => {
      rect(tx, ty, colW[ci], h, { stroke: PAL.grisClaro, bg, sw: 1.5, radius: false });
      text(tx + 10, ty + 9, cell, { fontSize: fz, color: PAL.negro });
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
  rect(huX, huY, 600, 140, { stroke: PAL.grisClaro, sw: 1.5 });
  text(huX + 15, huY + 12, 'HU', { fontSize: 14, color: PAL.negro });
  text(huX + 15, huY + 38, huText, { fontSize: 12, color: PAL.negro });
  const crX = ox + W - 630, crY = y + 90;
  rect(crX, crY, 600, 140, { stroke: PAL.grisClaro, sw: 1.5 });
  text(crX + 15, crY + 12, 'CRITERIOS', { fontSize: 14, color: PAL.negro });
  text(crX + 15, crY + 38, criterios, { fontSize: 12, color: PAL.negro });
  const startY = y + 270; const stepH = 75;
  for (let i = 0; i < numPasos; i++) {
    const ly = startY + i * stepH;
    text(ox + 50, ly + 5, (i + 1) + '.', { fontSize: 22, color: PAL.grisClaro });
    line(ox + 90, ly + 32, ox + W - 50, ly + 32, { color: PAL.grisLinea, sw: 1, dashed: true });
  }
  if (aside) { text(ox + W - 260, aside.y, aside.txt, { fontSize: 11, color: PAL.gris }); }
  const pieY = y + H - 38;
  text(ox + W / 2 - 380, pieY, 'Cada paso se responde leyendo la HU literalmente y sus criterios - no son decisiones abiertas.', { fontSize: 12, color: PAL.gris, align: 'center', width: 760 });
}

// =====================================================================
// PLACEHOLDER para los 3 paneles imagen-slide (1.2, 2.1, 3.5)
// =====================================================================
function panelPlaceholder(ox, id, label, w, h) {
  const y = header(ox, id.replace('IMG-', '').padStart(3, '0').slice(0, 3) === '012' ? '1.2' : id, 'IMAGEN-SLIDE (IA)', label, PAL.gris);
  rect(ox, y, w, h, { stroke: PAL.gris, sw: 3, dashed: true, bg: PAL.grisFondo });
  text(ox + w / 2 - 200, y + h / 2 - 40, '[' + id + ']', { fontSize: 32, color: PAL.gris, align: 'center', width: 400 });
  text(ox + w / 2 - 300, y + h / 2 + 10, label, { fontSize: 16, color: PAL.gris, align: 'center', width: 600 });
  text(ox + w / 2 - 300, y + h / 2 + 50, '(reemplazar con imagen IA generada por separado)', { fontSize: 12, color: PAL.gris, align: 'center', width: 600 });
}

// =====================================================================
// PANEL 1.3 - Tipos de errores nativos en JS
// =====================================================================
function panel13(ox) {
  const W = 1400;
  const y = header(ox, '1.3', 'MOMENTO 1', 'Tipos de errores nativos en JavaScript', PAL.rojo);
  text(ox + 50, y + 5, 'TIPOS DE ERRORES NATIVOS EN JAVASCRIPT', { fontSize: 30, color: PAL.negro });
  text(ox + 50, y + 55, '4 nativos del lenguaje + 1 categoria adicional para problemas de red. Saber el TIPO acelera leer la consola.', { fontSize: 14, color: PAL.gris });

  const tY = y + 100;
  const colW = [200, 460, 540];
  table(ox + 50, tY, colW, [
    ['Tipo', 'Cuando aparece', 'Ejemplo que lo dispara'],
    ['SyntaxError', 'El parser no puede leer el texto recibido\n(codigo JS, JSON, etc.)', 'console.log("Hola"     (falta parentesis)\nJSON.parse("Hola")     (no es JSON valido)'],
    ['ReferenceError', 'Se usa una variable que NO esta declarada', 'console.log(noExiste)'],
    ['TypeError', 'Operacion invalida para el tipo del dato', '"Hola".push("Mundo")\n(strings no tienen .push)'],
    ['RangeError', 'Un numero fuera del rango permitido', 'const precio = 19.99;\nprecio.toFixed(200);     (toFixed solo 0-100)'],
    ['Errores de red / API', 'La conexion falla o el servidor responde mal', 'fetch("https://api.invalida.com")\n(sin red)'],
  ], { headBg: FILL.gris, rh: 60 });

  // Cuadros laterales: ATAJABLES (verde) y EN TIEMPO DE EJECUCION (naranja)
  const sX = ox + 50;
  const sY = tY + 450;
  rect(sX, sY, 650, 110, { stroke: PAL.verde, sw: 2, bg: FILL.verde });
  text(sX + 15, sY + 12, 'ATAJABLES en VS Code / Linter (ESLint)', { fontSize: 14, color: PAL.verde });
  text(sX + 15, sY + 42, 'ReferenceError - TypeError - RangeError -\nSyntaxError por codigo mal escrito', { fontSize: 13, color: PAL.negro });

  rect(sX + 680, sY, 670, 110, { stroke: PAL.naranjaOsc, sw: 2, bg: FILL.naranja });
  text(sX + 695, sY + 12, 'EN TIEMPO DE EJECUCION (dependen del afuera)', { fontSize: 14, color: PAL.naranjaOsc });
  text(sX + 695, sY + 42, 'Errores de red - SyntaxError de JSON.parse /\nresponse.json()', { fontSize: 13, color: PAL.negro });

  text(ox + 50, sY + 135, 'El SyntaxError del demo del principio cae en el cuadro naranja - aparecio en runtime porque response.json() recibio "Not Found" (no es JSON valido).', { fontSize: 12, color: PAL.gris });
}

// =====================================================================
// PANEL 1.4 - Objeto Error y sus 3 propiedades
// =====================================================================
function panel14(ox) {
  const W = 1400;
  const y = header(ox, '1.4', 'MOMENTO 1', 'El objeto Error y sus 3 propiedades', PAL.rojo);
  text(ox + 50, y + 5, 'EL OBJETO Error Y SUS 3 PROPIEDADES', { fontSize: 30, color: PAL.negro });
  text(ox + 50, y + 55, 'Todo error en JS -nativo o creado con throw new Error(...)- es un objeto con esta forma.', { fontSize: 14, color: PAL.gris });

  // Columna izquierda - ANATOMIA del objeto
  const anX = ox + 50;
  const anY = y + 110;
  rect(anX, anY, 480, 380, { stroke: PAL.negro, sw: 2 });
  text(anX + 15, anY + 12, 'ANATOMIA DEL OBJETO', { fontSize: 16, color: PAL.negro });
  codeBox(anX + 20, anY + 50, 440, 'Error {\n  name: "TypeError",\n  message: "edad is not\n            a function",\n  stack: "TypeError: edad...\n          at file.js:5:7\n          at Module._compile..."\n}', { fontSize: 14 });

  // Flechas naranjas desde el objeto hacia la tabla
  arrow(anX + 480, anY + 95, anX + 560, anY + 95, { color: PAL.naranja, sw: 2 });
  arrow(anX + 480, anY + 165, anX + 560, anY + 220, { color: PAL.naranja, sw: 2 });
  arrow(anX + 480, anY + 245, anX + 560, anY + 350, { color: PAL.naranja, sw: 2 });

  // Columna derecha - TABLA de las 3 propiedades
  const tX = ox + 560;
  const tY = anY;
  const colW = [180, 340, 280];
  // header
  table(tX, tY, colW, [
    ['Propiedad', 'Que tiene', 'Para que sirve hoy'],
  ], { headBg: FILL.gris, rh: 42 });

  // Filas custom para poder dar bg verde a la fila message
  let cy = tY + 42;
  // Fila error.name
  rect(tX, cy, colW[0], 110, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(tX + 10, cy + 9, 'error.name', { fontSize: 13, color: PAL.azul, font: 3 });
  rect(tX + colW[0], cy, colW[1], 110, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(tX + colW[0] + 10, cy + 9, 'El nombre del TIPO del error\n("SyntaxError", "TypeError",\n"ReferenceError", "Error"...)', { fontSize: 12, color: PAL.negro });
  rect(tX + colW[0] + colW[1], cy, colW[2], 110, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(tX + colW[0] + colW[1] + 10, cy + 9, 'Decidir el manejo segun el\ntipo. Hoy en el lab NO se usa.', { fontSize: 12, color: PAL.negro });
  cy += 110;

  // Fila error.message (resaltada en verde)
  rect(tX, cy, colW[0], 110, { stroke: PAL.verde, sw: 2.5, bg: FILL.verde, radius: false });
  text(tX + 10, cy + 9, 'error.message', { fontSize: 13, color: PAL.azul, font: 3 });
  rect(tX + colW[0], cy, colW[1], 110, { stroke: PAL.verde, sw: 2.5, bg: FILL.verde, radius: false });
  text(tX + colW[0] + 10, cy + 9, 'El TEXTO descriptivo del\nerror', { fontSize: 12, color: PAL.negro });
  rect(tX + colW[0] + colW[1], cy, colW[2], 110, { stroke: PAL.verde, sw: 2.5, bg: FILL.verde, radius: false });
  text(tX + colW[0] + colW[1] + 10, cy + 9, 'LO QUE MOSTRAMOS\nAL USUARIO en la UI.\nLa propiedad mas usada.', { fontSize: 12, color: PAL.verde });
  cy += 110;

  // Fila error.stack
  rect(tX, cy, colW[0], 110, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(tX + 10, cy + 9, 'error.stack', { fontSize: 13, color: PAL.azul, font: 3 });
  rect(tX + colW[0], cy, colW[1], 110, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(tX + colW[0] + 10, cy + 9, 'La PILA de llamadas: archivo,\nlinea, funcion', { fontSize: 12, color: PAL.negro });
  rect(tX + colW[0] + colW[1], cy, colW[2], 110, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(tX + colW[0] + colW[1] + 10, cy + 9, 'Debug en consola del\nnavegador. NO se muestra\nal usuario.', { fontSize: 12, color: PAL.negro });

  text(ox + 50, y + 525, 'Hoy en el lab usaremos solo error.message. El stack se ve en consola para depurar; el name queda para clases mas avanzadas.', { fontSize: 12, color: PAL.gris });
}

// =====================================================================
// PANEL 3.2 - 2 Tablas de Codigos HTTP (Familias + Detalle)
// =====================================================================
function panel32(ox) {
  const W = 1400;
  const y = header(ox, '3.2', 'MOMENTO 3', 'Codigos HTTP - Familias y Ejemplos', PAL.naranjaOsc);
  text(ox + 50, y + 5, 'CODIGOS HTTP - FAMILIAS Y EJEMPLOS', { fontSize: 30, color: PAL.negro });
  text(ox + 50, y + 55, 'El servidor SIEMPRE devuelve un codigo. La PRIMERA cifra define la familia.', { fontSize: 14, color: PAL.gris });

  // TABLA 1 - FAMILIAS
  text(ox + 50, y + 95, 'TABLA 1 - FAMILIAS', { fontSize: 16, color: PAL.negro });
  const t1Y = y + 125;
  const c1W = [180, 460, 400, 240];

  // header
  let tx = ox + 50;
  c1W.forEach((cw, i) => {
    rect(tx, t1Y, cw, 38, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.gris, radius: false });
    text(tx + 10, t1Y + 9, ['Familia', 'Significado', 'Ejemplos', 'response.ok?'][i], { fontSize: 13, color: PAL.negro });
    tx += cw;
  });

  // Fila 2xx
  let cy = t1Y + 38;
  tx = ox + 50;
  rect(tx, cy, c1W[0], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.verde, radius: false });
  text(tx + 10, cy + 14, '2xx', { fontSize: 16, color: PAL.verde });
  tx += c1W[0];
  rect(tx, cy, c1W[1], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.verde, radius: false });
  text(tx + 10, cy + 18, 'Exito - la respuesta salio bien', { fontSize: 13, color: PAL.negro });
  tx += c1W[1];
  rect(tx, cy, c1W[2], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.verde, radius: false });
  text(tx + 10, cy + 18, '200 OK, 201 Created', { fontSize: 13, color: PAL.azul, font: 3 });
  tx += c1W[2];
  rect(tx, cy, c1W[3], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.verde, radius: false });
  text(tx + 10, cy + 18, 'true', { fontSize: 14, color: PAL.verde, font: 3 });

  // Fila 4xx
  cy += 52;
  tx = ox + 50;
  rect(tx, cy, c1W[0], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.amar, radius: false });
  text(tx + 10, cy + 14, '4xx', { fontSize: 16, color: PAL.naranjaOsc });
  tx += c1W[0];
  rect(tx, cy, c1W[1], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.amar, radius: false });
  text(tx + 10, cy + 18, 'Error del CLIENTE - nuestro codigo pidio mal', { fontSize: 13, color: PAL.negro });
  tx += c1W[1];
  rect(tx, cy, c1W[2], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.amar, radius: false });
  text(tx + 10, cy + 18, '400, 401, 403, 404', { fontSize: 13, color: PAL.azul, font: 3 });
  tx += c1W[2];
  rect(tx, cy, c1W[3], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.amar, radius: false });
  text(tx + 10, cy + 18, 'false', { fontSize: 14, color: PAL.rojo, font: 3 });

  // Fila 5xx
  cy += 52;
  tx = ox + 50;
  rect(tx, cy, c1W[0], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.rojo, radius: false });
  text(tx + 10, cy + 14, '5xx', { fontSize: 16, color: PAL.rojo });
  tx += c1W[0];
  rect(tx, cy, c1W[1], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.rojo, radius: false });
  text(tx + 10, cy + 18, 'Error del SERVIDOR - el servidor fallo', { fontSize: 13, color: PAL.negro });
  tx += c1W[1];
  rect(tx, cy, c1W[2], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.rojo, radius: false });
  text(tx + 10, cy + 18, '500, 503', { fontSize: 13, color: PAL.azul, font: 3 });
  tx += c1W[2];
  rect(tx, cy, c1W[3], 52, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.rojo, radius: false });
  text(tx + 10, cy + 18, 'false', { fontSize: 14, color: PAL.rojo, font: 3 });

  cy += 52;

  // Separador
  line(ox + 50, cy + 18, ox + 50 + 1280, cy + 18, { color: PAL.grisLinea, sw: 2 });
  cy += 40;

  // TABLA 2 - DETALLE
  text(ox + 50, cy, 'TABLA 2 - DETALLE POR CODIGO', { fontSize: 16, color: PAL.negro });
  cy += 30;

  const c2W = [140, 280, 440, 420];
  // header
  tx = ox + 50;
  c2W.forEach((cw, i) => {
    rect(tx, cy, cw, 38, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.gris, radius: false });
    text(tx + 10, cy + 9, ['Codigo', 'Familia', 'Significado', 'Cuando aparece en la Pokedex'][i], { fontSize: 13, color: PAL.negro });
    tx += cw;
  });
  cy += 38;

  const rows2 = [
    { cod: '200', codColor: PAL.verde, bg: FILL.verde, fam: '2xx - Exito', sig: 'OK - la respuesta fue exitosa', uso: '/pokemon/pikachu existe -> 200 + JSON' },
    { cod: '201', codColor: PAL.verde, bg: FILL.verde, fam: '2xx - Exito', sig: 'Created - recurso creado (tipico de POST)', uso: 'No aparece hoy (la Pokedex solo lee)' },
    { cod: '301 / 302', codColor: PAL.gris, bg: '#ffffff', fam: '3xx - Redireccion', sig: 'Redireccion permanente / temporal', uso: 'No aparece hoy' },
    { cod: '400', codColor: PAL.naranjaOsc, bg: FILL.amar, fam: '4xx - Error del cliente', sig: 'Bad Request - peticion mal armada', uso: 'URL mal formada (ej: /pokemon/ sin nombre)' },
    { cod: '401', codColor: PAL.naranjaOsc, bg: FILL.amar, fam: '4xx - Error del cliente', sig: 'Unauthorized - falta autenticarse', uso: 'APIs con clave (PokeAPI NO la necesita)' },
    { cod: '403', codColor: PAL.naranjaOsc, bg: FILL.amar, fam: '4xx - Error del cliente', sig: 'Forbidden - autenticado pero sin permiso', uso: 'APIs con permisos por rol' },
    { cod: '404', codColor: PAL.naranjaOsc, bg: FILL.amar, fam: '4xx - Error del cliente', sig: 'Not Found - el recurso NO existe', uso: '/pokemon/pikachuu mal escrito -> 404', highlight: true },
    { cod: '500', codColor: PAL.rojo, bg: FILL.rojo, fam: '5xx - Error del servidor', sig: 'Internal Server Error - se rompio', uso: 'El servidor de PokeAPI tiene un bug interno' },
    { cod: '503', codColor: PAL.rojo, bg: FILL.rojo, fam: '5xx - Error del servidor', sig: 'Service Unavailable - servidor caido', uso: 'Mantenimiento o sobrecarga' },
  ];

  const rowStartY = cy;
  rows2.forEach((r) => {
    tx = ox + 50;
    rect(tx, cy, c2W[0], 38, { stroke: PAL.grisClaro, sw: 1.5, bg: r.bg, radius: false });
    text(tx + 10, cy + 11, r.cod, { fontSize: 14, color: r.codColor, font: 3 });
    tx += c2W[0];
    rect(tx, cy, c2W[1], 38, { stroke: PAL.grisClaro, sw: 1.5, bg: r.bg, radius: false });
    text(tx + 10, cy + 11, r.fam, { fontSize: 12, color: PAL.negro });
    tx += c2W[1];
    rect(tx, cy, c2W[2], 38, { stroke: PAL.grisClaro, sw: 1.5, bg: r.bg, radius: false });
    text(tx + 10, cy + 11, r.sig, { fontSize: 12, color: PAL.negro });
    tx += c2W[2];
    rect(tx, cy, c2W[3], 38, { stroke: PAL.grisClaro, sw: 1.5, bg: r.bg, radius: false });
    text(tx + 10, cy + 11, r.uso, { fontSize: 12, color: PAL.azul, font: 3 });
    cy += 38;
  });

  // Highlight de la fila 404 (la 7a, indice 6)
  const hlY = rowStartY + 6 * 38;
  rect(ox + 50, hlY, 1280, 38, { stroke: PAL.rojo, sw: 3.5, radius: false });
  // Flecha naranja a la izquierda del 404
  arrow(ox + 30, hlY + 19, ox + 50, hlY + 19, { color: PAL.naranja, sw: 3 });
  text(ox - 110, hlY + 8, 'EL DEL LAB', { fontSize: 12, color: PAL.naranja });
  text(ox - 95, hlY + 24, 'DE HOY', { fontSize: 12, color: PAL.naranja });

  text(ox + 50, cy + 15, 'Solo hace falta saber leer la PRIMERA cifra. La tabla detallada es referencia.', { fontSize: 12, color: PAL.gris });
}

// =====================================================================
// PANEL 3.4 - throw new Error(...) anatomia + recorrido
// =====================================================================
function panel34(ox) {
  const W = 1400;
  const y = header(ox, '3.4', 'MOMENTO 3', 'throw new Error(...) - lanzar errores propios', PAL.naranjaOsc);
  text(ox + 50, y + 5, 'throw new Error(...) - LANZAR ERRORES PROPIOS', { fontSize: 28, color: PAL.negro });
  text(ox + 50, y + 55, 'El string del parentesis termina en error.message del catch - y de ahi va a la UI.', { fontSize: 14, color: PAL.gris });

  // Bloque 1 - SINTAXIS
  const s1Y = y + 105;
  rect(ox + 50, s1Y, 1300, 100, { stroke: PAL.azul, sw: 2 });
  text(ox + 65, s1Y + 12, 'SINTAXIS', { fontSize: 14, color: PAL.azul });
  codeBox(ox + 250, s1Y + 35, 900, 'throw new Error("Mensaje descriptivo del error");', { fontSize: 22 });

  // Flecha desde el string hacia el bloque de abajo
  arrow(ox + 750, s1Y + 105, ox + 750, s1Y + 145, { color: PAL.naranja, sw: 2 });

  // Bloque 2 - RECORRIDO (3 cajas)
  const s2Y = s1Y + 145;
  text(ox + 50, s2Y, 'RECORRIDO: DEV -> JS -> USUARIO', { fontSize: 16, color: PAL.negro });

  const cajaW = 380, cajaH = 200;
  const c1x = ox + 50;
  const c2x = c1x + cajaW + 50;
  const c3x = c2x + cajaW + 50;
  const cY = s2Y + 35;

  // Caja 1 - DEV escribe
  rect(c1x, cY, cajaW, cajaH, { stroke: PAL.azul, sw: 2, bg: '#ffffff' });
  text(c1x + 15, cY + 12, 'El DEV escribe', { fontSize: 16, color: PAL.azul });
  codeBox(c1x + 15, cY + 50, cajaW - 30, 'throw new Error(\n  `No se encontro\n   "${nombre}"`\n);', { fontSize: 13 });

  // Flecha 1 -> 2
  arrow(c1x + cajaW + 5, cY + cajaH / 2, c2x - 5, cY + cajaH / 2, { color: PAL.naranja, sw: 3 });
  text(c1x + cajaW + 7, cY + cajaH / 2 - 28, 'sube por la pila', { fontSize: 10, color: PAL.naranja });
  text(c1x + cajaW + 7, cY + cajaH / 2 - 12, '-> catch (error)', { fontSize: 10, color: PAL.naranja });

  // Caja 2 - JS atrapa en CATCH
  rect(c2x, cY, cajaW, cajaH, { stroke: PAL.rojo, sw: 2, bg: '#ffffff' });
  text(c2x + 15, cY + 12, 'JS atrapa en CATCH', { fontSize: 16, color: PAL.rojo });
  codeBox(c2x + 15, cY + 50, cajaW - 30, 'catch (error) {\n  mensaje.textContent\n    = error.message;\n}', { fontSize: 13 });

  // Flecha 2 -> 3
  arrow(c2x + cajaW + 5, cY + cajaH / 2, c3x - 5, cY + cajaH / 2, { color: PAL.naranja, sw: 3 });
  text(c2x + cajaW + 7, cY + cajaH / 2 - 16, 'pinta en #mensaje', { fontSize: 10, color: PAL.naranja });

  // Caja 3 - USUARIO ve
  rect(c3x, cY, cajaW, cajaH, { stroke: PAL.verde, sw: 2, bg: '#ffffff' });
  text(c3x + 15, cY + 12, 'El USUARIO ve', { fontSize: 16, color: PAL.verde });
  rect(c3x + 15, cY + 50, cajaW - 30, 130, { stroke: PAL.verde, sw: 1.5, bg: FILL.verde, radius: true });
  text(c3x + 30, cY + 105, '"No se encontro\n  \'pikachuu\'"', { fontSize: 18, color: PAL.verde, font: 3 });

  // Bloque 3 - REGLA
  const s3Y = cY + cajaH + 40;
  rect(ox + 50, s3Y, 1300, 70, { stroke: PAL.verde, sw: 2, bg: FILL.verde });
  text(ox + 200, s3Y + 22, 'Un buen throw cuenta. El string es la voz de la app cuando algo falla.', { fontSize: 18, color: PAL.verde, align: 'center', width: 1000 });

  text(ox + 50, s3Y + 95, 'throw interrumpe el try y salta directo al catch. Las lineas debajo del throw NUNCA se ejecutan.', { fontSize: 12, color: PAL.gris });
}

// =====================================================================
// PANEL 4.1 - ESTADO CARGANDO
// =====================================================================
function panel41(ox) {
  const W = 1400;
  const y = header(ox, '4.1', 'MOMENTO 4', 'Estado CARGANDO - la app esta trabajando', PAL.verde);
  text(ox + 50, y + 5, 'ESTADO CARGANDO - LA APP ESTA TRABAJANDO', { fontSize: 28, color: PAL.negro });
  text(ox + 50, y + 55, 'El estado TRANSITORIO por definicion: dura solo lo que dura la espera.', { fontSize: 14, color: PAL.gris });

  // Bloque 1 - DEFINICION
  const b1Y = y + 105;
  rect(ox + 50, b1Y, 1300, 90, { stroke: PAL.gris, sw: 1.5, bg: PAL.grisFondo });
  text(ox + 65, b1Y + 12, 'DEFINICION', { fontSize: 14, color: PAL.negro });
  text(ox + 65, b1Y + 38, 'Pantalla que mostramos MIENTRAS la app espera la respuesta del servidor. No es exito (no llegaron\ndatos), no es error (nada fallo) - es "pedi, estoy esperando, no te vayas".', { fontSize: 14, color: PAL.negro });

  // Bloque 2 - PROPOSITO
  const b2Y = b1Y + 110;
  rect(ox + 50, b2Y, 1300, 130, { stroke: PAL.naranjaOsc, sw: 2 });
  text(ox + 65, b2Y + 12, 'PROPOSITO', { fontSize: 18, color: PAL.naranjaOsc });
  text(ox + 65, b2Y + 45, '- Comunicar al usuario que la app esta trabajando (no congelada).\n- Cancelar solicitudes si el componente se desmonta (en apps reactivas como React).\n- Evitar que el usuario interactue con contenido incompleto.', { fontSize: 13, color: PAL.naranjaOsc });

  // Bloque 3 - 3 PROPIEDADES VISUALES
  const b3Y = b2Y + 150;
  text(ox + 50, b3Y, '3 PROPIEDADES VISUALES', { fontSize: 16, color: PAL.negro });
  const propW = 420, propH = 200;
  const propY = b3Y + 30;

  // COLOR
  rect(ox + 50, propY, propW, propH, { stroke: PAL.grisClaro, sw: 1.5 });
  text(ox + 65, propY + 12, 'COLOR', { fontSize: 16, color: PAL.azul });
  text(ox + 65, propY + 45, 'Neutro / gris -\nconvencion:\n"informacion, no resultado".', { fontSize: 12, color: PAL.negro });
  rect(ox + 65, propY + 115, 200, 30, { stroke: PAL.azul, sw: 1, bg: '#ffffff', radius: true });
  text(ox + 75, propY + 122, 'text-slate-500', { fontSize: 13, color: PAL.azul, font: 3 });
  text(ox + 65, propY + 160, 'NO rojo (ERROR) ni verde (EXITO)', { fontSize: 11, color: PAL.rojo });

  // TEXTO
  rect(ox + 50 + propW + 20, propY, propW, propH, { stroke: PAL.grisClaro, sw: 1.5 });
  text(ox + 65 + propW + 20, propY + 12, 'TEXTO', { fontSize: 16, color: PAL.azul });
  text(ox + 65 + propW + 20, propY + 45, 'Informativo, no decision.', { fontSize: 12, color: PAL.negro });
  text(ox + 80 + propW + 20, propY + 90, 'Cargando...', { fontSize: 26, color: PAL.gris });
  text(ox + 65 + propW + 20, propY + 155, 'Los 3 puntos sugieren continuidad.', { fontSize: 11, color: PAL.gris });

  // COEXISTENCIA
  rect(ox + 50 + 2 * (propW + 20), propY, propW, propH, { stroke: PAL.grisClaro, sw: 1.5 });
  text(ox + 65 + 2 * (propW + 20), propY + 12, 'COEXISTENCIA', { fontSize: 16, color: PAL.azul });
  text(ox + 65 + 2 * (propW + 20), propY + 45, 'Al encender CARGANDO,\nel ERROR del intento\nanterior se oculta.\n\nEl EXITO previo puede\nquedarse o irse (depende\ndel UX).', { fontSize: 12, color: PAL.negro });

  // Bloque 4 - ENCIENDE / APAGA
  const b4Y = propY + propH + 30;
  const colW = 645;
  // ENCIENDE
  rect(ox + 50, b4Y, colW, 170, { stroke: PAL.verde, sw: 2 });
  text(ox + 65, b4Y + 12, 'ON - SE ENCIENDE', { fontSize: 16, color: PAL.verde });
  text(ox + 65, b4Y + 45, 'Al INICIO de la funcion asincrona,\nANTES del try.', { fontSize: 13, color: PAL.negro });
  codeBox(ox + 65, b4Y + 100, colW - 30, 'spinner.classList.remove("hidden")', { fontSize: 13 });

  // APAGA
  rect(ox + 50 + colW + 10, b4Y, colW, 170, { stroke: PAL.rojo, sw: 2 });
  text(ox + 65 + colW + 10, b4Y + 12, 'OFF - SE APAGA', { fontSize: 16, color: PAL.rojo });
  text(ox + 65 + colW + 10, b4Y + 45, 'SIEMPRE al terminar, en cualquier camino\n(exito O error). Por eso necesitamos finally.', { fontSize: 13, color: PAL.negro });
  codeBox(ox + 65 + colW + 10, b4Y + 100, colW - 30, 'finally { spinner.classList.add("hidden") }', { fontSize: 13 });

  text(ox + 50, b4Y + 195, 'El #spinner del HTML ya esta preparado desde el Setup de HU1. Aca lo prendemos por primera vez.', { fontSize: 12, color: PAL.gris });
}

// =====================================================================
// PANEL 5.1 - "Exceptions are for exceptions"
// =====================================================================
function panel51(ox) {
  const W = 1400;
  const y = header(ox, '5.1', 'MOMENTO 5', '"Exceptions are for exceptions" - regla de oro', PAL.naranja);
  text(ox + 50, y + 5, '"EXCEPTIONS ARE FOR EXCEPTIONS" - LA REGLA DE ORO', { fontSize: 26, color: PAL.negro });

  // Subtitulo / Definicion (caja gris)
  const dY = y + 60;
  rect(ox + 50, dY, 1300, 75, { stroke: PAL.gris, sw: 1.5, bg: PAL.grisFondo });
  text(ox + 100, dY + 12, 'Los bloques try/catch solo deben usarse para manejar situaciones VERDADERAMENTE INESPERADAS,\nANOMALAS o FUERA DEL CONTROL de tu codigo. NUNCA para controlar el flujo normal y predecible.', { fontSize: 14, color: PAL.negro, align: 'center', width: 1200 });

  // Bloque 1 y 2 - Que SI / NO es excepcion
  const b1Y = dY + 95;
  // SI es excepcion
  rect(ox + 50, b1Y, 645, 150, { stroke: PAL.rojo, sw: 2 });
  text(ox + 65, b1Y + 12, 'SI es excepcion -> usar throw / catch', { fontSize: 17, color: PAL.rojo });
  text(ox + 65, b1Y + 45, '- El servidor se cayo (500).\n- La red se corto.\n- El JSON esta corrupto.', { fontSize: 13, color: PAL.negro });

  // NO es excepcion
  rect(ox + 50 + 655, b1Y, 645, 150, { stroke: PAL.verde, sw: 2 });
  text(ox + 65 + 655, b1Y + 12, 'NO es excepcion -> usar if', { fontSize: 17, color: PAL.verde });
  text(ox + 65 + 655, b1Y + 45, '- El usuario busco un nombre mal escrito.\n- No hay resultado para la consulta (404).\n- El array no contiene al item buscado.', { fontSize: 13, color: PAL.negro });

  // Separador con titulo
  const sepY = b1Y + 170;
  line(ox + 50, sepY + 15, ox + 1350, sepY + 15, { color: PAL.grisLinea, sw: 2 });
  text(ox + 50 + 400, sepY + 30, 'EJEMPLO - buscar un usuario en un array', { fontSize: 18, color: PAL.naranjaOsc, align: 'center', width: 500 });

  // Bloque 3 - MAL uso (rojo)
  const codY = sepY + 70;
  rect(ox + 50, codY, 645, 320, { stroke: PAL.rojo, sw: 2 });
  text(ox + 65, codY + 12, 'MAL USO: controlar logica comun con excepciones', { fontSize: 14, color: PAL.rojo });
  codeBox(ox + 65, codY + 45, 615, 'const listaUsuarios = ["Erick", "Mhitzy", "Gefferson"];\n\ntry {\n  const usuario = listaUsuarios.find(\n    u => u === "Erick"\n  );\n  if (!usuario) {\n    throw new Error("No existe");   // <- forzar throw\n  }\n  console.log("Encontrado:", usuario);\n} catch (error) {\n  console.log("No existe, mostrar registro.");\n}', { fontSize: 11 });

  // Bloque 4 - BUEN uso (verde)
  rect(ox + 50 + 655, codY, 645, 320, { stroke: PAL.verde, sw: 2 });
  text(ox + 65 + 655, codY + 12, 'BUEN USO: logica para lo predecible, catch para lo impredecible', { fontSize: 14, color: PAL.verde });
  codeBox(ox + 65 + 655, codY + 45, 615, 'const listaUsuarios = ["Erick", "Mhitzy", "Gefferson"];\n\nconst usuario = listaUsuarios.find(\n  u => u === "Erick"\n);\n\nif (usuario) {\n  console.log("Encontrado:", usuario);\n} else {\n  console.log("No existe, mostrar registro.");\n}', { fontSize: 11 });

  text(ox + 50, codY + 340, 'Esto es exactamente el refactor de HU4 - el 404 del lab pasa de throw (mal uso) a if + return null (buen uso).', { fontSize: 12, color: PAL.gris });
}

// =====================================================================
// PANEL 6.1 - Tabla sintaxis Markdown
// =====================================================================
function panel61(ox) {
  const W = 1400;
  const y = header(ox, '6.1', 'MOMENTO 6', 'Markdown - las 5 sintaxis para el README', PAL.rojo);
  text(ox + 50, y + 5, 'MARKDOWN - LAS 5 SINTAXIS PARA EL README', { fontSize: 28, color: PAL.negro });
  text(ox + 50, y + 55, 'Texto plano legible que se renderiza automaticamente en GitHub.', { fontSize: 14, color: PAL.gris });

  // Tabla 2 columnas x 6 filas (header + 5)
  const tY = y + 105;
  const colW = [580, 600];
  // header
  let tx = ox + 50;
  rect(tx, tY, colW[0], 42, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.gris, radius: false });
  text(tx + 12, tY + 12, 'Sintaxis (lo que ESCRIBIS)', { fontSize: 14, color: PAL.negro });
  rect(tx + colW[0], tY, colW[1], 42, { stroke: PAL.grisClaro, sw: 1.5, bg: FILL.gris, radius: false });
  text(tx + colW[0] + 12, tY + 12, 'Resultado (lo que se VE - renderizado)', { fontSize: 14, color: PAL.negro });

  let cy = tY + 42;
  const rowH = 80;

  // Fila 1: # Titulo / ## Subtitulo
  rect(ox + 50, cy, colW[0], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62, cy + 12, '# Titulo', { fontSize: 15, color: PAL.azul, font: 3 });
  text(ox + 62, cy + 42, '## Subtitulo', { fontSize: 15, color: PAL.azul, font: 3 });
  rect(ox + 50 + colW[0], cy, colW[1], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62 + colW[0], cy + 8, 'Titulo grande (H1)', { fontSize: 22, color: PAL.negro });
  text(ox + 62 + colW[0], cy + 45, 'Subtitulo (H2)', { fontSize: 16, color: PAL.negro });
  cy += rowH;

  // Fila 2: negrita / cursiva
  rect(ox + 50, cy, colW[0], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62, cy + 12, '**negrita**', { fontSize: 15, color: PAL.azul, font: 3 });
  text(ox + 62, cy + 42, '*cursiva*', { fontSize: 15, color: PAL.azul, font: 3 });
  rect(ox + 50 + colW[0], cy, colW[1], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62 + colW[0], cy + 12, 'NEGRITA', { fontSize: 18, color: PAL.negro });
  text(ox + 62 + colW[0], cy + 42, 'cursiva (italic)', { fontSize: 17, color: PAL.negro });
  cy += rowH;

  // Fila 3: - item
  rect(ox + 50, cy, colW[0], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62, cy + 25, '- item', { fontSize: 15, color: PAL.azul, font: 3 });
  rect(ox + 50 + colW[0], cy, colW[1], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62 + colW[0], cy + 22, '*  item (bullet)', { fontSize: 17, color: PAL.negro });
  cy += rowH;

  // Fila 4: codigo
  rect(ox + 50, cy, colW[0], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62, cy + 25, 'backtick codigo backtick', { fontSize: 15, color: PAL.azul, font: 3 });
  rect(ox + 50 + colW[0], cy, colW[1], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  rect(ox + 62 + colW[0], cy + 22, 130, 32, { stroke: PAL.grisClaro, sw: 1, bg: PAL.grisFondo, radius: true });
  text(ox + 72 + colW[0], cy + 28, 'codigo', { fontSize: 16, color: PAL.negro, font: 3 });
  cy += rowH;

  // Fila 5: link
  rect(ox + 50, cy, colW[0], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62, cy + 25, '[texto](url)', { fontSize: 15, color: PAL.azul, font: 3 });
  rect(ox + 50 + colW[0], cy, colW[1], rowH, { stroke: PAL.grisClaro, sw: 1.5, bg: '#ffffff', radius: false });
  text(ox + 62 + colW[0], cy + 22, 'texto (link azul clickeable)', { fontSize: 17, color: PAL.azul });
  // subrayar
  line(ox + 62 + colW[0], cy + 50, ox + 62 + colW[0] + 60, cy + 50, { color: PAL.azul, sw: 1 });
  cy += rowH;

  // Aside abajo
  text(ox + 50, cy + 20, 'GitHub renderiza automaticamente cualquier README.md en la raiz del repo. Ese render es la PRIMERA IMPRESION del proyecto -', { fontSize: 12, color: PAL.gris });
  text(ox + 50, cy + 40, 'la rubrica del lab lo evalua en el criterio 5 (20 pts).', { fontSize: 12, color: PAL.gris });

  // Mini-aside historico
  rect(ox + 50, cy + 70, 1300, 60, { stroke: PAL.negro, sw: 1.5 });
  text(ox + 65, cy + 85, 'Markdown lo invento John Gruber en 2004. GitHub lo adopto en 2007 - desde entonces es el estandar de facto del open source.', { fontSize: 12, color: PAL.negro });
}

// =====================================================================
// LAYOUT
// =====================================================================
let ox = 0;
const GAP = 400;
text(0, 30, 'CLASE 12 - MANEJO DE ERRORES Y ESTADOS', { fontSize: 42, color: PAL.azul });
text(0, 86, 'Atrapar lo inesperado, comunicarle al usuario, garantizar limpieza con finally.', { fontSize: 18, color: PAL.negro });

// 1.2 placeholder
panelPlaceholder(ox, 'IMG-01', 'Flujo sin error vs Flujo con error (sin manejo)', 1200, 900); ox += 1200 + GAP;

// 1.3
panel13(ox); ox += 1400 + GAP;

// 1.4
panel14(ox); ox += 1400 + GAP;

// 2.1 placeholder
panelPlaceholder(ox, 'IMG-02', 'Diagrama TRY / CATCH / FINALLY', 1200, 900); ox += 1200 + GAP;

// 2.5 LIBRE - HU1
{
  const W = 1400, H = 900;
  const y = header(ox, '2.5', 'MOMENTO 2', 'Plan socratico HU 1: ATRAPAR ERRORES (LIBRE)', PAL.rojo);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 1: ATRAPAR ERRORES',
    '"Como usuario, si algo falla al buscar, quiero\nver un mensaje claro en vez de que la app\nse rompa."',
    '1. Si la busqueda falla, aparece un MENSAJE\n   CLARO en vez de una pantalla rota.\n2. La APP SIGUE VIVA tras el fallo: puedes\n   volver a buscar sin recargar.',
    7, null);
  ox += W + GAP;
}

// 3.2
panel32(ox); ox += 1400 + GAP;

// 3.4
panel34(ox); ox += 1400 + GAP;

// 3.5 placeholder
panelPlaceholder(ox, 'IMG-03', 'Propagacion del error - pila de llamadas', 1400, 900); ox += 1400 + GAP;

// 3.6 LIBRE - HU2
{
  const W = 1400, H = 1000;
  const y = header(ox, '3.6', 'MOMENTO 3', 'Plan socratico HU 2: MENSAJE ESPECIFICO (LIBRE)', PAL.naranjaOsc);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 2: MENSAJE ESPECIFICO',
    '"Como usuario, si escribo un nombre que no\nexiste, quiero un mensaje que diga\nexactamente eso."',
    '1. Buscar nombre que no existe -> muestra\n   "No se encontro pikachuu".\n2. El mensaje es ESPECIFICO (nombra lo que\n   se busco), no generico.\n3. Un nombre VALIDO sigue mostrandose con\n   normalidad.',
    8, null);
  ox += W + GAP;
}

// 4.1
panel41(ox); ox += 1400 + GAP;

// 4.2 LIBRE - HU3
{
  const W = 1400, H = 1000;
  const y = header(ox, '4.2', 'MOMENTO 4', 'Plan socratico HU 3: SPINNER GARANTIZADO (LIBRE)', PAL.verde);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 3: SPINNER GARANTIZADO',
    '"Como usuario, quiero ver \'Cargando...\'\nmientras espera y que desaparezca\nSIEMPRE, tenga exito o falle."',
    '1. Mientras la busqueda esta en curso, se\n   ve "Cargando...".\n2. El indicador SIEMPRE desaparece al\n   terminar (exito O error).\n3. Si la carga inicial de la rejilla falla,\n   tambien se ve un mensaje.',
    8,
    { y: 270 + 8 * 75 + 20, txt: 'Paso 3 = poner spinner.add("hidden") MAL al final del try y ver el bug. Paso 4 = mover a finally.' });
  ox += W + GAP;
}

// 5.1
panel51(ox); ox += 1400 + GAP;

// 5.2 LIBRE - HU4
{
  const W = 1400, H = 1000;
  const y = header(ox, '5.2', 'MOMENTO 5', 'Plan socratico HU 4: AVISO DE NO ENCONTRADO (LIBRE)', PAL.naranja);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 4: AVISO DE NO ENCONTRADO',
    '"Como entrenador, cuando busco un Pokemon\nque no existe (o escribi mal el nombre),\nquiero que la app me avise que no se\nencontro, para corregir y volver a intentar."',
    '1. Buscar nombre que no existe -> aviso\n   de "no se encontro".\n2. El aviso menciona el NOMBRE BUSCADO\n   (ej. no se encontro "pikachuu").\n3. Tras el aviso, se puede corregir y\n   buscar de nuevo sin recargar.',
    8,
    { y: 270 + 3 * 75, txt: 'FUNCIONES A TOCAR:\n1) obtenerPokemon\n2) buscarPokemon\n3) mostrarBusqueda' });
  ox += W + GAP;
}

// 6.1
panel61(ox); ox += 1400 + GAP;

const out = { type: 'excalidraw', version: 2, source: 'https://excalidraw.com', elements: E, appState: { gridSize: null, viewBackgroundColor: '#ffffff' }, files: {} };
const outPath = process.argv[2] || 'CLASE 12.excalidraw';
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
const maxX = Math.max(...E.map(e => e.x + (e.width || 0)));
const maxY = Math.max(...E.map(e => e.y + (e.height || 0)));
console.log('OK Generated ' + E.length + ' elements');
console.log('   canvas extent: ' + Math.round(maxX) + 'x' + Math.round(maxY));
console.log('   output: ' + outPath);
JSON.parse(fs.readFileSync(outPath, 'utf8'));
console.log('   JSON re-parse: OK');
