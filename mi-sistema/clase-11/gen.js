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

function panel12(ox) {
  const W = 1200;
  const y = header(ox, '1.2', 'MOMENTO 1', 'Mini-ejercicio: una sola tarjeta', PAL.rojo);
  text(ox + 30, y + 10, 'MINI-EJERCICIO - UNA SOLA TARJETA   (5 min)', { fontSize: 26, color: PAL.rojo });
  text(ox + 30, y + 55, 'Sobre el MISMO app.js de C10. NO crees archivos nuevos.\nHace que la Pokedex muestre SOLO una tarjeta - la de tu Pokemon favorito.', { fontSize: 13, color: PAL.negro });
  const retoY = y + 130;
  rect(ox + 30, retoY, W - 60, 175, { stroke: PAL.negro, sw: 2 });
  text(ox + 45, retoY + 10, 'EL RETO', { fontSize: 17, color: PAL.rojo });
  text(ox + 45, retoY + 45,
    '1. Elegi un Pokemon favorito (charizard, snorlax, mewtwo, lo que sea).\n' +
    '2. Modifica app.js para que aparezca SOLO esa tarjeta, manteniendo el codigo de C10 con .then\n' +
    '    (NADA de async/await todavia).\n' +
    '3. Pensa antes de tocar: que se comenta? que se reusa tal cual? que se modifica minimamente?\n' +
    '4. La tarjeta tiene que verse igual que las de C10 - imagen, nombre, tipos.',
    { fontSize: 13, color: PAL.negro });
  const pistY = retoY + 195;
  rect(ox + 30, pistY, W - 60, 195, { stroke: PAL.naranja, sw: 2 });
  text(ox + 45, pistY + 10, 'PISTAS ESTRUCTURALES - solo si te trabas', { fontSize: 17, color: PAL.naranja });
  text(ox + 45, pistY + 45,
    '- El array nombres = [...6 Pokemon] y todo el bloque Promise.all(...) -> COMENTAR (no borrar).\n' +
    '- fetch con dos .then SI aplica -> escribir con UN solo nombre en la URL.\n' +
    '- adaptarPokemon -> REUSAR tal cual.\n' +
    '- render(...) espera un array -> pasarle un array de UN elemento: render([adaptarPokemon(data)]).\n' +
    '- crearTarjeta -> NO se toca (lo llama render por dentro).',
    { fontSize: 13, color: PAL.naranjaOsc });
  const botY = pistY + 215;
  const colW = (W - 80) / 2;
  rect(ox + 30, botY, colW, 145, { stroke: PAL.verde, sw: 2 });
  text(ox + 45, botY + 10, 'CRITERIO DE EXITO', { fontSize: 17, color: PAL.verde });
  text(ox + 45, botY + 45,
    '- Al cargar la pagina aparece UNA sola\n   tarjeta en la rejilla.\n' +
    '- Con imagen, nombre y tipos del\n   Pokemon elegido.\n' +
    '- La consola NO muestra errores.',
    { fontSize: 13, color: PAL.verde });
  const advX = ox + 30 + colW + 20;
  rect(advX, botY, colW, 145, { stroke: PAL.rojo, sw: 2 });
  text(advX + 15, botY + 10, 'ANTES DE EMPEZAR HU 1', { fontSize: 17, color: PAL.rojo });
  text(advX + 15, botY + 45,
    '- NO commitear nada.\n' +
    '- Ctrl+Z hasta volver al estado original\n   de C10 (6 Pokemon con Promise.all).\n' +
    '- O descomentar lo comentado y borrar\n   el bloque del favorito.',
    { fontSize: 13, color: PAL.rojo });
}

function panel13(ox) {
  const W = 1400;
  const y = header(ox, '1.3', 'MOMENTO 1', 'async/await: el MISMO fetch, dos formas', PAL.rojo);
  text(ox + 100, y + 5, 'EL MISMO fetch - DOS FORMAS DE CONSUMIRLO', { fontSize: 28, color: PAL.negro });
  text(ox + 100, y + 55, 'async/await NO reemplaza a las Promesas. Es la MISMA promesa, leida como pasos de arriba a abajo.', { fontSize: 14, color: PAL.gris });
  const colW = 580, colH = 380;
  const c1x = ox + 50, cy = y + 105;
  rect(c1x, cy, colW, colH, { stroke: PAL.rojo, sw: 2 });
  text(c1x + 15, cy + 12, 'C10 - .then encadenado', { fontSize: 18, color: PAL.rojo });
  codeBox(c1x + 25, cy + 55, colW - 50, 'fetch(url)\n  .then(response => response.json())\n  .then(data => {\n    /* usar data */\n  });', { fontSize: 15 });
  text(c1x + 15, cy + 230, 'Se lee HACIA ADENTRO.', { fontSize: 14, color: PAL.rojo });
  text(c1x + 15, cy + 255, 'Cada .then envuelve al siguiente.', { fontSize: 13, color: PAL.rojo });
  text(c1x + 15, cy + 320, 'El orden visual NO coincide con', { fontSize: 13, color: PAL.rojo });
  text(c1x + 15, cy + 345, 'el orden de ejecucion.', { fontSize: 13, color: PAL.rojo });
  const c2x = c1x + colW + 140;
  rect(c2x, cy, colW, colH, { stroke: PAL.verde, sw: 2 });
  text(c2x + 15, cy + 12, 'C11 - async/await', { fontSize: 18, color: PAL.verde });
  codeBox(c2x + 25, cy + 55, colW - 50, 'const response = await fetch(url);\nconst data = await response.json();\n/* usar data */', { fontSize: 15 });
  text(c2x + 15, cy + 200, 'Se lee DE ARRIBA A ABAJO.', { fontSize: 14, color: PAL.verde });
  text(c2x + 15, cy + 225, 'Linea 1, despues linea 2, despues linea 3.', { fontSize: 13, color: PAL.verde });
  text(c2x + 15, cy + 320, 'Lo que ves escrito es lo que pasa,', { fontSize: 13, color: PAL.verde });
  text(c2x + 15, cy + 345, 'en ese orden.', { fontSize: 13, color: PAL.verde });
  arrow(c1x + colW + 10, cy + colH / 2, c1x + colW + 130, cy + colH / 2, { color: PAL.naranja, sw: 3 });
  text(c1x + colW + 10, cy + colH / 2 - 50, 'AZUCAR', { fontSize: 14, color: PAL.naranja });
  text(c1x + colW + 10, cy + colH / 2 - 28, 'SINTACTICO', { fontSize: 14, color: PAL.naranja });
  const rY = cy + colH + 35;
  rect(ox + 50, rY, W - 100, 220, { stroke: PAL.negro, sw: 2 });
  text(ox + 65, rY + 15, 'LAS 4 REGLAS DE await', { fontSize: 19, color: PAL.negro });
  const rW = (W - 130) / 2;
  text(ox + 65, rY + 60, '1. await SOLO dentro de funciones marcadas\n    como async.', { fontSize: 13, color: PAL.negro });
  text(ox + 65, rY + 130, '3. Una funcion async SIEMPRE devuelve una\n    promesa, aunque adentro hagas un return 5\n    directo.', { fontSize: 13, color: PAL.negro });
  text(ox + 65 + rW, rY + 60, '2. await reemplaza al .then - NO a la promesa.\n    La promesa sigue ahi (fetch y Promise.all\n    siguen devolviendo promesas).', { fontSize: 13, color: PAL.negro });
  text(ox + 65 + rW, rY + 130, '4. await pausa solo esa funcion - el resto\n    del programa sigue corriendo (la pagina\n    no se traba).', { fontSize: 13, color: PAL.negro });
}

function panel21(ox) {
  const W = 1400;
  const y = header(ox, '2.1', 'MOMENTO 2', 'Filtrar vs buscar + parametro de ruta', PAL.azul);
  text(ox + 100, y + 5, 'FILTRAR vs BUSCAR - Y EL PARAMETRO DE RUTA', { fontSize: 28, color: PAL.negro });
  const s1y = y + 65;
  const colW = 620, colH = 250;
  const c1x = ox + 40;
  rect(c1x, s1y, colW, colH, { stroke: PAL.rojo, sw: 2 });
  text(c1x + 15, s1y + 10, 'FILTRAR - local', { fontSize: 18, color: PAL.rojo });
  rect(c1x + 25, s1y + 50, 380, 130, { stroke: PAL.gris, sw: 1.5, bg: FILL.gris });
  text(c1x + 35, s1y + 60, 'pokedex (6 items en memoria)', { fontSize: 12, color: PAL.gris });
  const pks = ['pikachu', 'bulbasaur', 'charmander', 'squirtle', 'jigglypuff', 'gengar'];
  pks.forEach((p, i) => {
    const px = c1x + 35 + (i % 3) * 120;
    const py = s1y + 90 + Math.floor(i / 3) * 35;
    rect(px, py, 110, 25, { stroke: PAL.azul, sw: 1, bg: FILL.azul, radius: true });
    text(px + 8, py + 4, p, { fontSize: 11, color: PAL.azul, font: 3 });
  });
  rect(c1x + 425, s1y + 90, 175, 40, { stroke: PAL.rojo, sw: 1.5, bg: FILL.rojo, radius: true });
  text(c1x + 435, s1y + 100, 'pokedex.filter(...)', { fontSize: 13, color: PAL.rojo, font: 3 });
  text(c1x + 15, s1y + 195, 'Recorre el array que YA tengo en memoria.', { fontSize: 13, color: PAL.rojo });
  text(c1x + 15, s1y + 218, 'Si NO esta cargado, NUNCA aparece.', { fontSize: 13, color: PAL.rojo });
  const c2x = c1x + colW + 60;
  rect(c2x, s1y, colW, colH, { stroke: PAL.verde, sw: 2 });
  text(c2x + 15, s1y + 10, 'BUSCAR - contra la API', { fontSize: 18, color: PAL.verde });
  rect(c2x + 25, s1y + 50, 380, 130, { stroke: PAL.verde, sw: 2, bg: FILL.verde, radius: true });
  text(c2x + 160, s1y + 75, 'PokeAPI', { fontSize: 22, color: PAL.verde });
  text(c2x + 80, s1y + 115, 'cualquier Pokemon - este o no en tu rejilla', { fontSize: 11, color: PAL.gris });
  text(c2x + 130, s1y + 145, '(pikachu, charizard, mewtwo, ...)', { fontSize: 11, color: PAL.gris });
  rect(c2x + 425, s1y + 90, 175, 40, { stroke: PAL.verde, sw: 1.5, bg: FILL.verde, radius: true });
  text(c2x + 435, s1y + 100, 'fetch(URL/...)', { fontSize: 13, color: PAL.verde, font: 3 });
  text(c2x + 15, s1y + 195, 'Sale a internet a pedir un recurso por nombre.', { fontSize: 13, color: PAL.verde });
  text(c2x + 15, s1y + 218, 'Encuentra CUALQUIERA.', { fontSize: 13, color: PAL.verde });
  text(ox + W / 2 - 280, s1y + colH + 10, 'Analogia: la agenda de tu celular vs el buscador de internet.', { fontSize: 13, color: PAL.gris, align: 'center', width: 560 });
  const s2y = s1y + colH + 50;
  text(ox + 50, s2y, 'Anatomia de la URL para buscar un Pokemon:', { fontSize: 16, color: PAL.negro });
  codeBox(ox + 90, s2y + 30, 720, 'https://pokeapi.co/api/v2/pokemon/pikachu', { fontSize: 22 });
  arrow(ox + 175, s2y + 92, ox + 175, s2y + 115, { color: PAL.naranja, sw: 2 });
  text(ox + 130, s2y + 122, 'host', { fontSize: 12, color: PAL.naranja });
  arrow(ox + 415, s2y + 92, ox + 415, s2y + 115, { color: PAL.naranja, sw: 2 });
  text(ox + 380, s2y + 122, 'ruta base', { fontSize: 12, color: PAL.naranja });
  arrow(ox + 660, s2y + 92, ox + 660, s2y + 115, { color: PAL.naranja, sw: 3 });
  text(ox + 580, s2y + 122, 'PARAMETRO DE RUTA', { fontSize: 15, color: PAL.naranja });
  rect(ox + 880, s2y, 240, 100, { stroke: PAL.azul, sw: 1.5 });
  text(ox + 890, s2y + 8, 'Notacion en docs:', { fontSize: 13, color: PAL.azul });
  text(ox + 890, s2y + 35, '/pokemon/:nombre', { fontSize: 17, color: PAL.azul, font: 3 });
  text(ox + 890, s2y + 70, 'el ":" marca la variable', { fontSize: 11, color: PAL.azul });
  rect(ox + 1140, s2y, 220, 100, { stroke: PAL.naranja, sw: 1.5 });
  text(ox + 1150, s2y + 8, 'Reglas:', { fontSize: 13, color: PAL.naranja });
  text(ox + 1150, s2y + 30, '- Estructural', { fontSize: 11, color: PAL.naranjaOsc });
  text(ox + 1150, s2y + 50, '- Obligatorio', { fontSize: 11, color: PAL.naranjaOsc });
  text(ox + 1150, s2y + 70, '- Define QUE recurso', { fontSize: 11, color: PAL.naranjaOsc });
  const s3y = s2y + 175;
  text(ox + 50, s3y, 'Demo en navegador - cambiar la URL cambia el recurso:', { fontSize: 16, color: PAL.negro });
  const dW = (W - 130) / 3;
  rect(ox + 50, s3y + 30, dW, 165, { stroke: PAL.verde, sw: 1.5 });
  text(ox + 65, s3y + 40, 'OK', { fontSize: 22, color: PAL.verde });
  text(ox + 65, s3y + 80, '/pokemon/pikachu', { fontSize: 15, color: PAL.azul, font: 3 });
  text(ox + 65, s3y + 125, '-> JSON de pikachu', { fontSize: 13, color: PAL.verde });
  rect(ox + 50 + dW + 15, s3y + 30, dW, 165, { stroke: PAL.verde, sw: 1.5 });
  text(ox + 65 + dW + 15, s3y + 40, 'OK', { fontSize: 22, color: PAL.verde });
  text(ox + 65 + dW + 15, s3y + 80, '/pokemon/charizard', { fontSize: 15, color: PAL.azul, font: 3 });
  text(ox + 65 + dW + 15, s3y + 125, '-> JSON de charizard', { fontSize: 13, color: PAL.verde });
  const d3x = ox + 50 + 2 * (dW + 15);
  rect(d3x, s3y + 30, dW, 165, { stroke: PAL.rojo, sw: 1.5 });
  text(d3x + 15, s3y + 40, 'FAIL', { fontSize: 22, color: PAL.rojo });
  text(d3x + 15, s3y + 80, '/pokemon/pikachuu', { fontSize: 15, color: PAL.azul, font: 3 });
  text(d3x + 15, s3y + 125, '-> 404 Not Found', { fontSize: 13, color: PAL.rojo });
  text(d3x + 15, s3y + 148, '(se maneja en C12 con try/catch)', { fontSize: 11, color: PAL.rojo });
}

function panel41(ox) {
  const W = 1400;
  const y = header(ox, '4.1', 'MOMENTO 4', 'La API trae mas: navegar el JSON', PAL.verde);
  text(ox + 100, y + 5, 'LA API TRAE MUCHO MAS - NAVEGAR EL JSON', { fontSize: 28, color: PAL.negro });
  text(ox + 100, y + 55, 'Las APIs REST devuelven la representacion COMPLETA del recurso.', { fontSize: 14, color: PAL.gris });
  text(ox + 100, y + 80, 'El dev navega el JSON y extrae solo lo que necesita.', { fontSize: 14, color: PAL.gris });
  const s1y = y + 130;
  text(ox + 40, s1y, 'JSON crudo de /pokemon/charizard:', { fontSize: 15, color: PAL.negro });
  const treeX = ox + 60;
  let ty = s1y + 30;
  const usados = ['data.name', 'data.sprites.front_default', 'data.types[ ]'];
  usados.forEach(u => {
    text(treeX, ty, 'OK', { fontSize: 12, color: PAL.verde });
    text(treeX + 35, ty, u, { fontSize: 14, color: PAL.azul, font: 3 });
    text(treeX + 320, ty, '(usado desde C10)', { fontSize: 11, color: PAL.gris });
    ty += 28;
  });
  ty += 5;
  const ignorados = [
    'data.height        (ignorado)',
    'data.weight        (ignorado)',
    'data.abilities[]   (ignorado)',
    'data.moves[]       (ignorado - MUY pesado)',
  ];
  ignorados.forEach(l => {
    text(treeX + 35, ty, l, { fontSize: 13, color: PAL.grisClaro, font: 3 });
    ty += 26;
  });
  ty += 8;
  rect(treeX - 15, ty - 6, 540, 44, { stroke: PAL.rojo, sw: 2.5 });
  text(treeX, ty + 8, 'data.stats[ ]', { fontSize: 16, color: PAL.azul, font: 3 });
  text(treeX + 230, ty + 8, 'LO QUE QUEREMOS HOY', { fontSize: 13, color: PAL.rojo });
  ty += 60;
  text(treeX + 35, ty, '... data.forms, data.held_items, data.species, ...', { fontSize: 11, color: PAL.grisClaro });
  text(treeX + 35, ty + 22, '(y muchos mas campos, todos ignorados)', { fontSize: 11, color: PAL.grisClaro });
  const s2x = ox + 660;
  text(s2x, s1y, 'Estructura de cada elemento de data.stats:', { fontSize: 15, color: PAL.negro });
  codeBox(s2x, s1y + 30, 700, 'data.stats[0] = {\n  base_stat: 78,\n  effort: 0,\n  stat: { name: "hp", url: "..." }\n}', { fontSize: 15 });
  text(s2x, s1y + 195, 'ANIDADO a 2 niveles', { fontSize: 13, color: PAL.naranja });
  text(s2x, s1y + 230, '- data.stats[i].base_stat  -> el numero (78)', { fontSize: 13, color: PAL.naranja });
  text(s2x, s1y + 255, '- data.stats[i].stat.name  -> el nombre ("hp")', { fontSize: 13, color: PAL.naranja });
  const s3y = y + 620;
  text(ox + 40, s3y, 'Aplanar con .map -> la forma limpia que usa la app:', { fontSize: 16, color: PAL.negro });
  rect(ox + 40, s3y + 35, 280, 115, { stroke: PAL.gris, sw: 1.5, bg: FILL.gris });
  text(ox + 50, s3y + 45, 'CRUDO (anidado)', { fontSize: 12, color: PAL.gris });
  text(ox + 50, s3y + 70, '{ base_stat: 78,\n  stat: {\n    name: "hp"\n  }\n}', { fontSize: 12, color: PAL.azul, font: 3 });
  arrow(ox + 330, s3y + 95, ox + 460, s3y + 95, { color: PAL.naranja, sw: 4 });
  text(ox + 355, s3y + 65, 'ADAPTAR', { fontSize: 14, color: PAL.naranja });
  text(ox + 360, s3y + 100, '.map(...)', { fontSize: 11, color: PAL.naranja });
  rect(ox + 470, s3y + 35, 280, 115, { stroke: PAL.verde, sw: 1.5, bg: FILL.verde });
  text(ox + 480, s3y + 45, 'LIMPIO (aplanado)', { fontSize: 12, color: PAL.verde });
  text(ox + 480, s3y + 70, '{\n  nombre: "hp",\n  valor: 78\n}', { fontSize: 12, color: PAL.azul, font: 3 });
  text(ox + 800, s3y + 35, 'En adaptarPokemon, agregar:', { fontSize: 13, color: PAL.negro });
  codeBox(ox + 800, s3y + 60, 560, 'data.stats.map(s => ({\n  nombre: s.stat.name,\n  valor: s.base_stat\n}))', { fontSize: 14 });
  text(ox + 40, y + 1000, 'Analogia: la ficha tecnica del electrodomestico. Vienen 30 datos. Lees los 2-3 que te importan.', { fontSize: 13, color: PAL.gris });
}

function panel51(ox) {
  const W = 1400;
  const y = header(ox, '5.1', 'MOMENTO 5', 'Ruta vs Consulta + paginacion', PAL.naranja);
  text(ox + 100, y + 5, 'PARAMETRO DE RUTA vs PARAMETRO DE CONSULTA', { fontSize: 28, color: PAL.negro });
  text(ox + 100, y + 55, 'Los dos viven en la URL pero sirven para cosas distintas: RUTA dice QUE recurso; CONSULTA dice COMO pedirlo.', { fontSize: 14, color: PAL.gris });
  const s1y = y + 110;
  const colW = 660, colH = 250;
  const c1x = ox + 25;
  rect(c1x, s1y, colW, colH, { stroke: PAL.rojo, sw: 2 });
  text(c1x + 15, s1y + 10, 'PARAMETRO DE RUTA - visto en M2', { fontSize: 17, color: PAL.rojo });
  codeBox(c1x + 20, s1y + 50, colW - 40, 'https://pokeapi.co/api/v2/pokemon/pikachu', { fontSize: 18 });
  arrow(c1x + 470, s1y + 90, c1x + 470, s1y + 115, { color: PAL.naranja, sw: 3 });
  text(c1x + 380, s1y + 125, 'PARAMETRO DE RUTA', { fontSize: 13, color: PAL.naranja });
  rect(c1x + 20, s1y + 160, colW - 40, 80, { stroke: PAL.rojo, sw: 1.5, bg: FILL.rojo });
  text(c1x + 30, s1y + 170, '- QUE recurso pido', { fontSize: 13, color: PAL.negro });
  text(c1x + 30, s1y + 192, '- Estructural', { fontSize: 13, color: PAL.negro });
  text(c1x + 30, s1y + 214, '- Obligatorio (sin el la URL no sirve)', { fontSize: 13, color: PAL.negro });
  const c2x = c1x + colW + 40;
  rect(c2x, s1y, colW, colH, { stroke: PAL.verde, sw: 2 });
  text(c2x + 15, s1y + 10, 'PARAMETROS DE CONSULTA - nuevo hoy', { fontSize: 17, color: PAL.verde });
  codeBox(c2x + 20, s1y + 50, colW - 40, 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', { fontSize: 16 });
  text(c2x + 305, s1y + 105, '"?" abre  ·  limit=12  ·  "&" separa  ·  offset=0', { fontSize: 11, color: PAL.naranja });
  arrow(c2x + 305, s1y + 90, c2x + 305, s1y + 100, { color: PAL.naranja, sw: 2 });
  rect(c2x + 20, s1y + 160, colW - 40, 80, { stroke: PAL.verde, sw: 1.5, bg: FILL.verde });
  text(c2x + 30, s1y + 170, '- COMO pedirlo (despues del "?")', { fontSize: 13, color: PAL.negro });
  text(c2x + 30, s1y + 192, '- Opcional (si no se pone, defaults)', { fontSize: 13, color: PAL.negro });
  text(c2x + 30, s1y + 214, '- Filtrar / Ordenar / Buscar / Paginar', { fontSize: 13, color: PAL.negro });
  const s2y = s1y + colH + 30;
  text(ox + 30, s2y, 'Comparativa:', { fontSize: 16, color: PAL.negro });
  const colTW = [240, 540, 540];
  table(ox + 30, s2y + 30, colTW, [
    ['Concepto', 'RUTA', 'CONSULTA'],
    ['Donde va', 'EN la ruta, separado con "/"', 'DESPUES del "?", separado con "&"'],
    ['Para que', 'que recurso pido', 'como lo pido'],
    ['Obligatorio', 'si (sin el, la URL no sirve)', 'no (defaults si no se pone)'],
    ['Ejemplo', '/pokemon/pikachu', '?limit=12&offset=0'],
  ], { headBg: FILL.gris, rh: 36 });
  const s3y = s2y + 240;
  text(ox + 30, s3y, 'Paginacion con ?limit y ?offset:', { fontSize: 16, color: PAL.negro });
  const pW = 280, pH = 100;
  const pages = [
    { o: '?offset=0', r: '12 Pokemon (#1-12)' },
    { o: '?offset=12', r: '12 Pokemon (#13-24)' },
    { o: '?offset=24', r: '12 Pokemon (#25-36)' },
  ];
  pages.forEach((p, i) => {
    const px = ox + 60 + i * (pW + 35);
    text(px + 80, s3y + 35, p.o, { fontSize: 14, color: PAL.azul, font: 3 });
    rect(px, s3y + 60, pW, pH, { stroke: PAL.azul, sw: 2, bg: FILL.azul });
    text(px + 70, s3y + 95, p.r, { fontSize: 13, color: PAL.negro });
  });
  const btnY = s3y + 200;
  rect(ox + 440, btnY, 220, 50, { stroke: PAL.naranja, sw: 2, bg: FILL.naranja });
  text(ox + 480, btnY + 15, '[ Cargar mas ]', { fontSize: 16, color: PAL.naranjaOsc });
  arrow(ox + 670, btnY + 25, ox + 760, btnY + 25, { color: PAL.naranja, sw: 2 });
  text(ox + 770, btnY + 18, 'subir offset += 12 -> siguiente pagina', { fontSize: 13, color: PAL.naranja });
  text(ox + 30, y + 1000, 'Analogia: Google paginado / scroll infinito de Instagram / lista de productos de Mercado Libre.', { fontSize: 13, color: PAL.gris });
}

let ox = 0;
const GAP = 300;
text(0, 30, 'CLASE 11 - async/await Y BUSQUEDA EN LA API', { fontSize: 42, color: PAL.azul });
text(0, 86, 'Mismo codigo asincrono mas legible + una app que crece con lo que hace el usuario.', { fontSize: 18, color: PAL.negro });

panel12(ox); ox += 1200 + GAP;
panel13(ox); ox += 1400 + GAP;
panel21(ox); ox += 1400 + GAP;

{
  const W = 1400, H = 1000;
  const y = header(ox, '2.2', 'MOMENTO 2', 'Plan socratico HU 2: BUSCAR (LIBRE)', PAL.azul);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 2: BUSCAR',
    '"Como usuario, quiero escribir un nombre y traer\nese Pokemon desde la API -aunque no este en mi\nrejilla- para verlo, presionando Buscar o Enter."',
    '1. Pulsar Buscar o Enter muestra ese Pokemon,\n   aunque no estuviera en la rejilla.\n2. El buscador ya NO filtra solo lo cargado:\n   consulta la API.\n3. El buscador ignora una busqueda vacia.',
    8, null);
  ox += W + GAP;
}
{
  const W = 1400, H = 1000;
  const y = header(ox, '3.2', 'MOMENTO 3', 'Plan socratico HU 3: CAPTURAR (LIBRE)', PAL.naranjaOsc);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 3: CAPTURAR',
    '"Como usuario, quiero un boton Capturar en\nel Pokemon que busque, para sumarlo a mi\nPokedex cuando yo decida."',
    '1. La tarjeta del Pokemon buscado tiene un\n   boton "Capturar".\n2. Capturar agrega a la rejilla (no reemplaza).\n3. Si el Pokemon ya estaba, no se duplica.',
    8,
    { y: 270 + 5 * 75, txt: 'Aca nace el concepto "estado"' });
  ox += W + GAP;
}

panel41(ox); ox += 1400 + GAP;

{
  const W = 1400, H = 900;
  const y = header(ox, '4.2', 'MOMENTO 4', 'Plan socratico HU 4: STATS (LIBRE)', PAL.verde);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 4: STATS',
    '"Como usuario, quiero ver las estadisticas\n(HP, ataque...) del Pokemon que busco, para\ndecidir si lo capturo."',
    '1. La tarjeta del Pokemon buscado muestra\n   sus estadisticas (al menos HP, ataque, defensa).\n2. Las estadisticas salen de los datos que\n   ya devuelve la API (no se inventan).',
    7, null);
  ox += W + GAP;
}

panel51(ox); ox += 1400 + GAP;

{
  const W = 1400, H = 1000;
  const y = header(ox, '5.2', 'MOMENTO 5', 'Plan socratico HU 5: CARGAR MAS (LIBRE)', PAL.naranja);
  marcoLibre(ox, y, W, H,
    'PLAN DE LA SOLUCION - HU 5: CARGAR MAS',
    '"Como usuario, quiero un boton \'Cargar mas\'\nque traiga mas Pokemon a la rejilla, para\nexplorar la Pokedex sin escribir nombres."',
    '1. Boton "Cargar mas" trae mas Pokemon y\n   los suma a la rejilla.\n2. Cada clic trae un grupo distinto\n   (la siguiente pagina).\n3. Los Pokemon que ya estaban no se duplican.',
    8,
    { y: 270 + 4 * 75, txt: 'Marca reusos: M1, HU3, C10' });
  ox += W + GAP;
}

const out = { type: 'excalidraw', version: 2, source: 'https://excalidraw.com', elements: E, appState: { gridSize: null, viewBackgroundColor: '#ffffff' }, files: {} };
const outPath = process.argv[2] || '/tmp/CLASE11.excalidraw';
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
const maxX = Math.max(...E.map(e => e.x + (e.width || 0)));
const maxY = Math.max(...E.map(e => e.y + (e.height || 0)));
console.log('OK Generated ' + E.length + ' elements');
console.log('   canvas extent: ' + Math.round(maxX) + 'x' + Math.round(maxY));
console.log('   output: ' + outPath);
JSON.parse(fs.readFileSync(outPath, 'utf8'));
console.log('   JSON re-parse: OK');
