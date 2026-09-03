# Laboratorio 14: Interacción y Datos Derivados

¡Segundo laboratorio del **Gestor de Plantillas para WhatsApp**! En C13 montaste el estado central y el `render()`. Hoy tu app se vuelve **interactiva de verdad**: vas a **eliminar y editar** plantillas, y a calcular **datos derivados** (totales y conteos) a partir del estado. La pieza nueva es la **delegación de eventos**: un solo listener que atiende los clics de muchas tarjetas.

> ⏱️ **Checkpoints**: 5 momentos de validación (~30, ~55, ~80, ~100, ~115 min).
>
> 🧠 Seguimos **sin persistencia**: todo vive en memoria. En C15 le pondrás `localStorage`.

## 🎯 Objetivos de Aprendizaje

1. Aplicar **delegación de eventos**: un único listener en el contenedor que atiende los clics de N elementos hijos.
2. Completar el **CRUD** del estado: eliminar y editar plantillas de forma inmutable.
3. Calcular **datos derivados** con funciones puras: total de plantillas y conteo por hashtag.
4. **Ordenar** la lista con `.sort()` (por fecha y alfabético).
5. Reutilizar el patrón **estado → `render()`** para que toda la UI refleje cada cambio.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Delegación de eventos** | Poner **un solo** listener en el contenedor padre y, según en qué hijo se hizo clic (`event.target`), decidir qué hacer. |
| **`data-id`** | Atributo HTML (`data-id="..."`) para guardar el id de cada elemento y saber sobre cuál se actuó. |
| **CRUD** | Las 4 operaciones sobre datos: Crear, Leer, Actualizar (editar) y Borrar (eliminar). |
| **Función pura** | Función que recibe datos y **devuelve un resultado** sin modificar nada externo: `(estado) → resultado`. |
| **`.sort()` + comparador** | Ordena un array. Recibe una función `(a, b)` que devuelve negativo/positivo para decidir quién va primero. |

## ⚙️ Setup Inicial

1. **Repositorio:** continúa en `whatsapp-templates`. Crea una rama `lab14-interaccion`.

> 📌 **Convención del proyecto** (la irás aplicando en cada HU): el panel de estadísticas será `<aside id="panel-stats">`; el botón eliminar `class="btn-eliminar"` y el de editar `class="btn-editar"`, ambos con `data-id`.

---

## 📋 Historias de Usuario

### HU1: Eliminar una plantilla con delegación de eventos

> *"Como usuario, quiero eliminar una plantilla que ya no uso, para mantener mi lista ordenada."*

**Criterios de Aceptación:**
- Cada plantilla muestra un **botón eliminar**.
- Al pulsarlo, **esa** plantilla desaparece y **las demás permanecen**.
- La lista en pantalla sigue reflejando exactamente el estado.

Primero, dale un **`id` único** a cada plantilla — es lo que el botón usará para saber sobre cuál actuar. En `js/models/Template.js`:

```javascript
class Template {
  constructor(titulo, mensaje, hashtag) {
    this.id = crypto.randomUUID();   // ← id único garantizado (un texto)
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.fecha = new Date();
  }
}
```

Ahora cada `<li>` necesita su botón con el `data-id`. En `render()`, dentro del `innerHTML`:

```javascript
li.innerHTML = `
  <strong>${plantilla.titulo}</strong>
  <span class="text-xs text-slate-400">${plantilla.fecha.toLocaleDateString("es-PE")}</span>
  <br>${plantilla.mensaje}
  <button class="btn-eliminar text-red-600 text-xs" data-id="${plantilla.id}">Eliminar</button>
`;
```

Ahora, en vez de poner un listener por cada botón, pones **uno solo** en la lista. Esa es la **delegación de eventos**:

```javascript
function eliminarPlantilla(id) {
  state.plantillas = state.plantillas.filter(plantilla => plantilla.id !== id);  // sin mutar: filtra
  render();
}

lista.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-eliminar")) {     // ¿se hizo clic en un botón eliminar?
    const id = evento.target.dataset.id;              // lee el data-id
    eliminarPlantilla(id);
  }
});
```

> 💡 **¿Por qué uno solo?** Las tarjetas se crean y destruyen al re-renderizar. Si pusieras un listener por botón, tendrías que volver a engancharlos cada vez. Con **un listener en el padre** que escucha los clics de los hijos, funciona siempre, sin importar cuántas tarjetas haya.

- **Checkpoint 1 (~30 min):** agrega 3 plantillas y elimina la del medio. Solo esa desaparece; las otras dos quedan intactas.

---

### HU2: Editar una plantilla existente

> *"Como usuario, quiero editar una plantilla para corregirla, sin tener que borrarla y crearla de nuevo."*

**Criterios de Aceptación:**
- Cada plantilla muestra un **botón editar**.
- Al pulsarlo, sus datos **se cargan en el formulario**.
- Al guardar, la plantilla **se actualiza en su lugar** (no se crea una nueva) y la lista muestra el cambio.

Agrega el botón editar en `render()` (junto al de eliminar):

```javascript
`<button class="btn-editar text-blue-600 text-xs" data-id="${plantilla.id}">Editar</button>`
```

Amplía el mismo listener de la lista para atender también "editar":

```javascript
lista.addEventListener("click", function (evento) {
  const id = evento.target.dataset.id;
  if (evento.target.classList.contains("btn-eliminar")) eliminarPlantilla(id);
  if (evento.target.classList.contains("btn-editar"))   cargarEnFormulario(id);
});

function cargarEnFormulario(id) {
  const plantilla = state.plantillas.find(plantilla => plantilla.id === id);
  titulo.value = plantilla.titulo;
  mensaje.value = plantilla.mensaje;
  hashtag.value = plantilla.hashtag;
  state.editandoId = id;          // recordamos que estamos editando, no creando
}
```

Y en el `submit`, decide si **actualizas** o **creas**:

```javascript
if (state.editandoId) {
  state.plantillas = state.plantillas.map(plantilla =>     // actualiza solo esa, sin mutar
    plantilla.id === state.editandoId ? { ...plantilla, titulo: tituloTexto, mensaje: mensajeTexto, hashtag: normalizarHashtag(hashtag.value) } : plantilla
  );
  state.editandoId = null;
} else {
  agregarPlantilla(tituloTexto, mensajeTexto, normalizarHashtag(hashtag.value));
}
render();
form.reset();
```

- **Checkpoint 2 (~55 min):** pulsa "Editar" en una plantilla, cambia el mensaje y guarda. Se actualiza en su sitio; no aparece una copia nueva.

---

### HU3: Estadísticas con una función pura

> *"Como usuario, quiero ver cuántas plantillas tengo y cuántas hay por hashtag, para entender mi colección de un vistazo."*

**Criterios de Aceptación:**
- Se muestra el **total** de plantillas.
- Se muestra un **conteo por hashtag**.
- Estos números **se actualizan solos** al agregar, editar o eliminar.

Primero agrega el panel en tu `index.html`, **encima de la lista** de plantillas:

```html
<aside id="panel-stats" class="mb-2 text-sm text-slate-600"></aside>
```

Luego, una **función pura** recibe el estado y devuelve un resultado, sin tocar nada más:

```javascript
function contarPorHashtag(plantillas) {
  return plantillas.reduce(function (conteo, plantilla) {       // reduce: lo viste en M2
    conteo[plantilla.hashtag] = (conteo[plantilla.hashtag] ?? 0) + 1;
    return conteo;
  }, {});
}
```

Dibuja el panel desde esa función, y llámalo dentro de `render()` para que se mantenga sincronizado:

```javascript
function renderStats() {
  const total = state.plantillas.length;
  const porTag = contarPorHashtag(state.plantillas);
  const detalle = Object.entries(porTag).map(([hashtag, cantidad]) => `${hashtag}: ${cantidad}`).join(" · ");
  document.getElementById("panel-stats").textContent = `Total: ${total}  |  ${detalle}`;
}
```

> 💡 Agrega `renderStats();` al final de `render()`. Como todo pasa por `render()`, las estadísticas nunca quedan desactualizadas.

- **Checkpoint 3 (~80 min):** agrega plantillas con hashtags repetidos (ej. dos `#ventas`) → el panel muestra `Total: 3 | #ventas: 2 · #soporte: 1`. Elimina una y los números bajan solos.

---

### HU4: Filtrar por hashtag (la lista reacciona)

> *"Como usuario, quiero filtrar mis plantillas por hashtag, para encontrar rápido la que necesito."*

**Criterios de Aceptación:**
- Al escribir un hashtag en el buscador, la lista muestra **solo** las plantillas que coinciden.
- Al borrar el texto, **vuelven todas**.
- El filtrado ocurre **al instante** mientras escribes.

Agrega un buscador encima de la lista en `index.html`:

```html
<input id="buscador" type="text" placeholder="Filtra por hashtag…"
       class="max-w-md mx-auto block w-full p-2 mb-4 border border-slate-300 rounded">
```

Calcula **qué mostrar** con una función derivada (reutiliza `.includes()` y `.toLowerCase()` de C13) y haz que `render()` la use:

```javascript
function plantillasVisibles() {
  const filtroTexto = (state.filtro ?? "").toLowerCase();
  if (filtroTexto === "") return state.plantillas;
  return state.plantillas.filter(plantilla => plantilla.hashtag.toLowerCase().includes(filtroTexto));
}
```

En `render()`, recorre `plantillasVisibles()` en vez de `state.plantillas`. Y conecta el buscador:

```javascript
document.getElementById("buscador").addEventListener("input", function (evento) {
  state.filtro = evento.target.value;   // el filtro vive en el estado
  render();                        // mismo render, datos distintos
});
```

- **Checkpoint 4 (~100 min):** escribe `vent` → quedan solo las `#ventas`; borra el texto → vuelven todas. (Nota: las estadísticas siguen contando el total real, no solo lo filtrado.)

---

### HU5: Ordenar las plantillas

> *"Como usuario, quiero ordenar mis plantillas (las más recientes primero o por orden alfabético), para encontrarlas como me resulte más cómodo."*

**Criterios de Aceptación:**
- La lista puede mostrarse con las plantillas **más recientes primero**.
- La lista puede mostrarse en **orden alfabético** por título.
- El orden elegido se mantiene al agregar, editar o filtrar.

`.sort()` ordena un array usando un **comparador**: una función `(a, b)` que devuelve un número negativo si `a` va antes, o positivo si va después.

```javascript
function ordenar(plantillas) {
  const copia = [...plantillas];                 // copiamos: .sort() muta el array original
  if (state.orden === "alfabetico") {
    return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));   // texto: localeCompare
  }
  return copia.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));  // recientes primero
}
```

Encadena el orden **después** del filtro, dentro de tu pipeline de "qué mostrar":

```javascript
function plantillasVisibles() {
  const filtroTexto = (state.filtro ?? "").toLowerCase();
  const filtradas = filtroTexto === "" ? state.plantillas : state.plantillas.filter(plantilla => plantilla.hashtag.toLowerCase().includes(filtroTexto));
  return ordenar(filtradas);     // primero filtra, luego ordena
}
```

Agrega un selector en `index.html` que cambie `state.orden` y vuelva a renderizar:

```html
<select id="orden" class="max-w-md mx-auto block mb-4 p-2 border border-slate-300 rounded">
  <option value="fecha">Más recientes</option>
  <option value="alfabetico">Alfabético (A-Z)</option>
</select>
```

> 💡 **`.sort()` muta** el array sobre el que actúa. Por eso copiamos con `[...plantillas]` antes de ordenar: así no alteramos el estado original (inmutabilidad, igual que en eliminar/editar).
>
> 💡 Comparamos fechas con `new Date(...)`: así el orden funciona tanto si `p.fecha` es un objeto `Date` como si es texto (te será útil cuando guardes los datos en C15).

- **Checkpoint 5 (~115 min):** cambia el selector a "Alfabético" → la lista se reordena A-Z; vuelve a "Más recientes" → aparece arriba la última que creaste.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Cancelar edición:** muestra un botón "Cancelar" que limpia el formulario y pone `state.editandoId = null`.
- **Logro 2 — Hashtag más usado:** con `contarPorHashtag`, calcula y muestra cuál hashtag tiene más plantillas.
- **Logro 3 — Confirmar al eliminar:** muestra un aviso simple antes de borrar (en C16 lo convertirás en un modal propio de confirmación).

## 📝 Instrucciones de Entrega

1. **Documentación (`README.md`):** explica cómo implementaste la delegación de eventos y para qué sirve tu función `contarPorHashtag`.
2. **Despliegue:** publica en GitHub Pages y comparte el enlace.
3. **Entrega Final:** URL del repositorio + URL del sitio desplegado.
