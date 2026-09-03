# Laboratorio 15: JSON y LocalStorage

¡Tercer laboratorio del **Gestor de Plantillas para WhatsApp**! Hasta ahora tu app funcionaba, pero al recargar **se perdía todo**. Hoy resuelves eso: vas a **guardar el estado en el navegador** con `localStorage` y a convertir tus datos a texto y de vuelta con **JSON**. Al terminar, tus plantillas (y hasta tu filtro) sobreviven al cierre del navegador.

> ⏱️ **Checkpoints**: 5 momentos de validación (~30, ~55, ~80, ~100, ~115 min).
>
> 🧠 Este es el tema central del módulo: **persistencia**.

## 🎯 Objetivos de Aprendizaje

1. **Serializar** datos con `JSON.stringify` (objeto → texto) y **deserializar** con `JSON.parse` (texto → objeto).
2. **Persistir** el estado en `localStorage` (`setItem`, `getItem`, `removeItem`).
3. Cargar el estado guardado al iniciar la app y mantenerlo sincronizado con cada cambio.
4. Proteger la app de **datos corruptos** con `try/catch` (refuerzo de C12).

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **JSON** | Formato de texto para representar datos. `JSON.stringify(obj)` lo convierte a texto; `JSON.parse(texto)` lo reconstruye. |
| **Serializar / Deserializar** | Pasar de objeto a texto (serializar) y de texto a objeto (deserializar). |
| **`localStorage`** | Almacén del navegador (clave→texto) que **persiste** aunque cierres la pestaña: `setItem`, `getItem`, `removeItem`. |
| **Operador ternario** | `condicion ? valorSi : valorNo` — un `if/else` corto para asignar un valor. |

## ⚙️ Setup Inicial

1. **Repositorio:** continúa en `whatsapp-templates`. Crea una rama `lab15-localstorage`.

---

## 📋 Historias de Usuario

### HU1: Guardar las plantillas en el navegador

> *"Como usuario, quiero que mis plantillas se guarden automáticamente, para no perderlas al recargar."*

**Criterios de Aceptación:**
- Al **agregar, editar o eliminar**, los datos quedan guardados en el navegador.
- El guardado ocurre **solo** (sin un botón "guardar").
- Se puede comprobar en *DevTools → Application → Local Storage* que los datos están ahí.

Primero, **crea `js/persistence.js`** (cárgalo en `index.html` **antes** de `app.js`) y define una clave única bajo la que guardarás:

```javascript
const CLAVE = "whatsapp-templates";   // la "etiqueta" bajo la que guardas en el navegador
```

> 📌 **Convención del proyecto:** toda la persistencia vive en `persistence.js`. Usa siempre la misma `CLAVE`.

`localStorage` solo guarda **texto**. Como tu estado es un array de objetos, primero lo conviertes a texto con `JSON.stringify`:

```javascript
function guardar() {
  localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));   // objeto → texto → navegador
}
```

Llama `guardar()` cada vez que el estado cambia. La forma más limpia: ponerlo **dentro de `render()`**, ya que todo cambio termina ahí.

```javascript
function render() {
  // ...dibuja la lista y las stats como en C14...
  guardar();          // ← el estado ya cambió, persístelo
}
```

> 💡 `JSON.stringify(state.plantillas)` toma tu array y lo vuelve una cadena tipo `[{"titulo":"Saludo",...}]`. Eso es lo que el navegador puede almacenar.

- **Checkpoint 1 (~30 min):** agrega una plantilla, abre *DevTools → Application → Local Storage* y verás la clave `whatsapp-templates` con tus datos en texto.

---

### HU2: Recuperar las plantillas al abrir la app

> *"Como usuario, quiero ver mis plantillas guardadas apenas abro la app, sin tener que volver a crearlas."*

**Criterios de Aceptación:**
- Al abrir (o recargar) la app, aparecen las plantillas **guardadas antes**.
- Si **no hay nada** guardado, la lista aparece vacía y sin errores.
- Las fechas se siguen mostrando correctamente tras recargar.

Al iniciar, lees el texto guardado y lo reconstruyes con `JSON.parse`. Usa el **operador ternario** para el caso "no hay nada guardado":

```javascript
function cargar() {
  const guardado = localStorage.getItem(CLAVE);     // texto o null
  return guardado ? JSON.parse(guardado) : [];      // si hay → parsea; si no → lista vacía
}
```

En `app.js`, carga el estado y renderiza **una vez** al arrancar:

```javascript
state.plantillas = cargar();
render();
```

> 💡 **Ojo con las fechas:** JSON no guarda objetos `Date`, los convierte a texto. Al cargar, `plantilla.fecha` será un string. Para que `.toLocaleDateString()` siga funcionando, reconstruye la fecha en `render()`: `new Date(plantilla.fecha).toLocaleDateString("es-PE")`. Es una lección real: **JSON solo guarda datos simples**, no tipos como `Date`.

- **Checkpoint 2 (~55 min):** crea 2 plantillas, **recarga la página**: siguen ahí, con su fecha correcta. Esa es la diferencia con C13–C14.

---

### HU3: Que la app no se rompa con datos corruptos

> *"Como usuario, quiero que la app funcione aunque los datos guardados estén dañados, para no quedarme con una pantalla rota."*

**Criterios de Aceptación:**
- Si el contenido guardado está **corrupto** (texto ilegible), la app **no se cuelga**.
- En ese caso, arranca con la lista **vacía** y sigue usable.

`JSON.parse` lanza un error si el texto no es válido. Envuélvelo en `try/catch` (lo viste en C12) para que un dato dañado nunca rompa la app:

```javascript
function cargar() {
  const guardado = localStorage.getItem(CLAVE);
  if (!guardado) return [];
  try {
    return JSON.parse(guardado);          // intenta reconstruir
  } catch (error) {
    console.warn("Datos corruptos, empiezo de cero:", error);
    return [];                            // si falla, no rompas: lista vacía
  }
}
```

- **Checkpoint 3 (~80 min):** en *DevTools → Application*, edita a mano el valor de la clave y déjalo inválido (ej. `[{titulo`). Recarga: la app **no explota**, arranca vacía y en consola ves el aviso.

---

### HU4: Vaciar la colección + indicador de estado

> *"Como usuario, quiero poder borrar todas mis plantillas de golpe y saber que la app guardó mis cambios."*

**Criterios de Aceptación:**
- Existe una acción para **vaciar todas** las plantillas.
- Al vaciar, la lista y el almacenamiento quedan **limpios**.
- Un pequeño indicador muestra el estado (ej. "Guardado").

Agrega en `index.html` un botón y el indicador:

```html
<button id="btn-vaciar" class="text-xs text-red-600">Vaciar todo</button>
<p id="estado" class="text-xs text-slate-400">Listo</p>
```

Para vaciar, basta con limpiar el estado y renderizar (recuerda: `render()` ya persiste por ti):

```javascript
document.getElementById("btn-vaciar").addEventListener("click", function () {
  state.plantillas = [];
  render();     // render → guardar(); como no queda nada, se borra la clave
});
```

Ahora ajusta `guardar()` para dos cosas: usar **`removeItem`** cuando no queda nada (con un **ternario**) y mostrar el indicador de estado:

```javascript
function guardar() {
  // si no hay plantillas, borra la clave; si hay, guárdalas
  state.plantillas.length === 0
    ? localStorage.removeItem(CLAVE)
    : localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));

  document.getElementById("estado").textContent = state.plantillas.length > 0 ? "Guardado ✓" : "Vacío";
}
```

> 💡 Si `guardar()` siempre hiciera `setItem`, "vaciar" dejaría la clave con `[]` en vez de borrarla (porque `guardar()` corre en cada `render()`). Por eso, cuando el estado queda vacío, usamos `removeItem`: el almacenamiento queda **realmente** limpio.

- **Checkpoint 4 (~100 min):** pulsa "Vaciar todo" → la lista se vacía y la **clave `whatsapp-templates` desaparece** del Local Storage; el indicador dice "Vacío". Agrega una plantilla → la clave vuelve y el indicador dice "Guardado ✓".

---

### HU5: Recordar también el filtro

> *"Como usuario, quiero que el filtro que escribí siga aplicado si recargo la página, para no perder mi búsqueda."*

**Criterios de Aceptación:**
- Al escribir un filtro y **recargar**, el filtro **sigue aplicado** y el buscador muestra el texto.
- Si no había filtro guardado, el buscador arranca **vacío**.

El filtro (`state.filtro`) también es parte del estado, así que **también se persiste**. Como ya es texto, aquí **no** necesitas `JSON.stringify`. Usa una segunda clave y guárdalo dentro de `guardar()` (que corre en cada `render()`):

```javascript
const CLAVE_FILTRO = "whatsapp-templates-filtro";

function guardar() {
  state.plantillas.length === 0
    ? localStorage.removeItem(CLAVE)
    : localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));
  localStorage.setItem(CLAVE_FILTRO, state.filtro ?? "");   // el filtro es texto: sin stringify
  // ...indicador de estado de la HU4...
}
```

Al arrancar la app, **recupera el filtro** y refléjalo en el buscador antes de renderizar:

```javascript
state.plantillas = cargar();
state.filtro = localStorage.getItem(CLAVE_FILTRO) ?? "";     // recupera el filtro (o vacío)
document.getElementById("buscador").value = state.filtro;    // muéstralo en el input
render();
```

> 💡 Fíjate en el contraste: las plantillas (un array) **sí** necesitan `JSON.stringify`/`parse`; el filtro (un texto) va directo. `localStorage` siempre guarda texto — cuando tu dato ya es texto, no hay nada que convertir.

- **Checkpoint 5 (~115 min):** escribe `vent` en el buscador, **recarga** → el filtro sigue aplicado (solo se ven las `#ventas`) y el buscador muestra `vent`.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Exportar:** muestra en consola `JSON.stringify(state.plantillas, null, 2)` (con sangría) para ver tus datos bonitos.
- **Logro 2 — Contador persistente:** guarda también cuántas veces se abrió la app usando otra clave en `localStorage`.
- **Logro 3 — Fecha de edición:** al editar una plantilla, actualiza un campo `editadaEl` con `new Date()` y persístelo.

## 📝 Instrucciones de Entrega

1. **Documentación (`README.md`):** explica cómo guardas y cargas el estado, y por qué usas `try/catch` al parsear.
2. **Despliegue:** publica en GitHub Pages y comparte el enlace.
3. **Entrega Final:** URL del repositorio + URL del sitio desplegado.
