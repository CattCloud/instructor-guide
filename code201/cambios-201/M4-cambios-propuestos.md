# Cambios Propuestos al Módulo 4 — Code 201

> **Repo destino:** `ncode-201-guide` (`C:\dev\entertechschool\ncode-201-guide\`)
> **Skill destino:** `/module-updater` (modo implementar) sobre el M4 = `curriculum/class-13` a `curriculum/class-16`.
> **Fecha:** 2026-05-10
> **Coordinado con:** M1, M2 y M3 cambios propuestos (algunos cambios del M4 dependen de que los anteriores estén implementados).

---

## 1. Contexto y motivación

Auditoría del M4 detectó cinco clases de problemas:

**(a) Huérfanos críticos:**
- **`try/catch/finally` en C15 LocalStorage:** README+glosario+discussion lo mencionan; ningún sub-paso del lab lo aplica. M5 HU8 lo exige textualmente (*"El acceso a LocalStorage está envuelto en try/catch"*).
- **`subscribe()` y `getState()` del Patrón Store en C14:** README los lista como API del Store; lab nunca los aplica explícitamente. **Test C16 P7 los evalúa** — desalineación grave.

**(b) Huérfano de curso completo (sin daño):**
- **`extends` / herencia ES6:** C13 los discute teóricamente; lab nunca los aplica, M5 nunca extiende. Tema de Code 301. Decisión: aclarar al alumno, no eliminar.

**(c) Faltantes / oportunidades de mejora:**
- **Algoritmo de cálculo sobre estado.** M5 C19 introduce de golpe el "greedy de transferencias mínimas". M4 enseña a guardar y sincronizar estado pero no a CALCULAR sobre él. Oportunidad: bonus al cierre de C16.
- **Delegación de eventos.** M5 C19 HU7 la usa (`listaGastos.addEventListener('click', e => { if (e.target.classList.contains(...))})`). M3-M4 nunca la enseñan formalmente. Oportunidad: integrarla en sub-paso eliminar de C16.
- **C13 sigue haciendo "discusión teórica clase vs constructor"** después de que C08 post-cambio cerró el puente sintáctico. Redundante.

**(d) Inconsistencia documental:**
- AGENTS.md llama M4 "POO + Funcional"; el contenido real es "Modelado, Estado y Persistencia". Mismo patrón obsoleto que M2 y M3.
- Test C16 P7 evalúa `subscribe()` que el lab no aplica (se resuelve con propuesta B2).

**(e) Inconsistencia entre M4 y M5 (no se ataca ahora):**
- C14 enseña inmutabilidad (spread/concat); M5 muta directamente con `.push()`. Inmutabilidad real es Code 301. Decisión: documentar la inconsistencia, no forzar consistencia ahora.

---

## 2. Resumen ejecutivo de cambios

| Archivo | Tipo de cambio |
|---|---|
| `AGENTS.md` (raíz) | EDITAR — corregir nombre del M4 ("Modelado, Estado y Persistencia") |
| `curriculum/class-13/README.md` | EDITAR — quitar discusión teórica clase vs constructor; agregar nota sobre extends/Code 301 |
| `curriculum/class-13/slides/README.md` | EDITAR — alinear |
| `curriculum/class-13/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-14/lab/README.md` | EDITAR — agregar sub-paso explícito que implemente Patrón Store COMPLETO (subscribe/getState/setState/notify) |
| `curriculum/class-14/README.md` | EDITAR — formalizar subscribe/getState/setState como conceptos enseñados |
| `curriculum/class-14/slides/README.md` | EDITAR — slide del Store completo con código |
| `curriculum/class-14/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-15/lab/README.md` | EDITAR — agregar HU explícita (o expandir HU2) con try/catch+finally aplicado a LocalStorage |
| `curriculum/class-15/README.md` | EDITAR — formalizar try/catch+finally como obligatorio en LocalStorage |
| `curriculum/class-15/slides/README.md` | EDITAR — slide del patrón seguro de LocalStorage |
| `curriculum/class-16/lab/README.md` | EDITAR — agregar delegación de eventos en sub-paso eliminar; agregar bonus "cálculo sobre estado" al cierre |
| `curriculum/class-16/README.md` | EDITAR — incorporar delegación + bonus cálculo |
| `curriculum/class-16/slides/README.md` | EDITAR — alinear |
| `curriculum/class-16/test/questions.md` | Verificación — P7 sobre `subscribe` ya queda alineado por B2; sin cambios obligatorios |

---

## 3. Cambios por archivo

### 3.1 `AGENTS.md` (raíz)

**Edición — Tabla de autonomía por módulo:**
- Antes: *"M4 — POO + Funcional | 13-16 | 70% | 30% | Clases ES6, herencia, arrow functions, map/forEach"*
- Después: *"M4 — Modelado, Estado y Persistencia | 13-16 | 70% | 30% | El estudiante usa `class` ES6 (sin herencia, eso es Code 301), implementa Patrón Store completo (`subscribe`, `getState`, `setState`), persiste en LocalStorage con try/catch+finally, sincroniza estado con UI, agrega delegación de eventos"*

---

### 3.2 `curriculum/class-13/`

**Objetivo de la clase tras el cambio:** `class` ES6 aplicada (sin redundancia teórica con C08); estado local vs global. **Sin discusión teórica clase vs constructor.**

#### Edición 1 — Quitar discusión teórica clase vs constructor

El README (línea 14) y slides (línea 10) actuales dicen:
> *"Discusión crítica sobre ventajas y diferencias entre clases modernas (`class`) y funciones constructoras tradicionales."*

Reemplazar por:
> *"Como cerramos en C08 (M2), `class` es azúcar sintáctica sobre prototipos. Aquí vamos a usar `class` directamente porque es más legible y porque toda la industria moderna la usa. Si necesitas refrescar la equivalencia, mira el cierre de C08."*

Esto libera ~15 min de C13 que pueden destinarse a profundizar estado local/global con casos reales.

#### Edición 2 — Nota sobre `extends` / herencia

Agregar al README de C13 una nota explícita:

> **Sobre herencia (`extends`, `super`):** Vas a ver herencia mencionada en algunos ejemplos como concepto, pero NO la vas a usar en el proyecto final. La herencia es tema central de Code 301. Para M5 (Agenda de Gastos Compartidos) basta con clases simples como `class Gasto { constructor(...) {...} }` sin extender de ninguna otra clase. Si quieres explorar `extends` por curiosidad, hay un logro adicional al final del lab — pero no es obligatorio.

(Opcional: agregar Logro Adicional al lab que use `extends` para alumnos curiosos. No obligatorio.)

---

### 3.3 `curriculum/class-14/`

**Objetivo de la clase tras el cambio:** Patrón Store COMPLETO aplicado al store de plantillas.

#### Edición principal — agregar sub-paso explícito que implemente Store con subscribe/getState/setState/notify

El lab actual menciona "agregar/eliminar plantillas" sin definir la API formal del Store. El test C16 P7 evalúa `subscribe()` que nunca se enseña en lab. **B2 cierra esa desalineación enseñando el Store completo.**

Agregar como **HU0** (o expansión de HU1) al lab de C14:

```markdown
### HU0 — Implementar el Store

> **Objetivo:** crear un objeto `store` que centralice el estado de las plantillas y notifique a los suscriptores cuando cambie.

#### Sub-pasos

0.1. Crea `store/store.js`:

```javascript
const store = {
  state: { plantillas: [] },
  listeners: [],

  getState() {
    return this.state;
  },

  setState(newState) {
    this.state = newState;
    this.notify();
  },

  subscribe(listener) {
    this.listeners.push(listener);
  },

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
};
```

0.2. En `app.js`, suscribe la función de renderizado al store:

```javascript
function renderizarPlantillas(state) {
  const lista = document.querySelector('#listaPlantillas');
  lista.innerHTML = '';
  state.plantillas.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.titulo;
    lista.appendChild(li);
  });
}

store.subscribe(renderizarPlantillas);
```

0.3. Cuando agregues o elimines una plantilla, usa `store.setState({ ...store.state, plantillas: [...nuevasPlantillas] })`. La función `setState` automáticamente notifica a los suscriptores y re-renderiza.

✅ **Checkpoint:** abre DevTools (F12). Agrega 3 plantillas. La lista en pantalla se actualiza sin que llames a `renderizarPlantillas` manualmente — el `subscribe` lo hace.

> **Nota para M5:** En el proyecto final puedes elegir entre el Store COMPLETO (subscribe/notify, más limpio) o una versión simplificada (cambio→guardar→render manual). Ambas son válidas. La simplificada es más fácil de seguir; la completa escala mejor. **Decisión profesional consciente.**
```

#### Las HUs siguientes (agregar/eliminar) usan el Store completo

HU1, HU2, HU3 ahora invocan `store.setState(...)` en vez de mutar arrays directos. La sincronización con UI se vuelve automática gracias al `subscribe`.

#### Tiempo

~15-20 min adicionales para HU0. Eric confirmó que es aceptable ("hablar de eso serán unos minutos").

---

### 3.4 `curriculum/class-15/`

**Objetivo de la clase tras el cambio:** JSON + LocalStorage **con try/catch+finally aplicado** (no opcional).

#### Edición principal — agregar HU con try/catch+finally aplicado

El lab actual de C15 implementa `cargarPlantillas()` sin manejo de errores. Reescribir/expandir HU2 (Cargar) o agregar HU4:

```markdown
### HU4 — Carga segura desde LocalStorage con try/catch+finally

> **Objetivo:** garantizar que la app no se rompa si LocalStorage tiene datos corruptos, no existe la clave, o el JSON es malformado.

#### Sub-pasos

4.1. Modifica `cargarPlantillas()` para envolver la deserialización en try/catch+finally:

```javascript
function cargarPlantillas() {
  document.getElementById('estado').textContent = 'Cargando...';

  try {
    const raw = localStorage.getItem('plantillas');
    if (!raw) {
      return [];  // primera vez: no hay datos
    }
    const plantillas = JSON.parse(raw);
    if (!Array.isArray(plantillas)) {
      throw new Error('Formato de datos corrupto');
    }
    return plantillas;
  } catch (error) {
    console.error('Error al cargar plantillas:', error);
    alert('Datos corruptos. Empezando de cero.');
    localStorage.removeItem('plantillas');
    return [];
  } finally {
    document.getElementById('estado').textContent = 'Listo';
  }
}
```

4.2. Verifica los 3 escenarios:
- Primera vez (LocalStorage vacío) → retorna array vacío, no hay error.
- Datos válidos → carga normalmente.
- Datos corruptos (manualmente: `localStorage.setItem('plantillas', 'no-es-json')`) → catch atrapa, alert se muestra, app sigue viva.

4.3. En los 3 casos, el indicador "Cargando..." debe terminar en "Listo" — esa es la garantía de `finally`.

✅ **Checkpoint:** simula los 3 escenarios. La app no se rompe en ninguno. La UI siempre termina en estado consistente.
```

**Justificación pedagógica:** este caso muestra el valor real de `finally` (la UI debe quedar consistente sin importar qué pase con los datos), refuerza el `finally` enseñado en C12 post-cambio, y prepara directamente para M5 HU8.

---

### 3.5 `curriculum/class-16/`

**Objetivo de la clase tras el cambio:** persistencia automática + sincronización Store↔UI + **delegación de eventos** + **bonus: cálculo sobre estado**.

#### Edición 1 — Delegación de eventos en sub-paso eliminar (HU3)

El lab actual de C16 (HU3) implementa botones eliminar individuales (un listener por botón). Reescribir para usar **delegación**: un solo listener en el contenedor `<ul>` que atienda los clicks de cualquier botón hijo.

```markdown
### HU3 — Eliminar con delegación de eventos + confirmación

> **En vez de poner un listener por cada botón eliminar, pondremos UN solo listener en el contenedor de la lista. Cuando el click suceda, el `event.target` nos dice cuál botón fue presionado. Esto se llama **delegación de eventos**.

#### Sub-pasos

3.1. En `app.js`, agrega UN listener al contenedor:

```javascript
document.querySelector('#listaPlantillas').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-eliminar')) {
    const id = event.target.dataset.id;
    const confirmar = confirm('¿Eliminar esta plantilla?');
    if (confirmar) {
      const nuevasPlantillas = store.getState().plantillas.filter(p => p.id !== id);
      store.setState({ plantillas: nuevasPlantillas });
    }
  }
});
```

3.2. Asegúrate que cada botón eliminar renderizado tenga clase `btn-eliminar` y `data-id` con el ID:

```javascript
// dentro de renderizarPlantillas:
li.innerHTML = `
  ${p.titulo}
  <button class="btn-eliminar" data-id="${p.id}">Eliminar</button>
`;
```

3.3. Verifica:
- Agregar 5 plantillas. Eliminar 2. Solo se eliminan las correctas.
- En DevTools (Elements), confirmar que NO hay 5 listeners de click — hay 1 solo en el `<ul>`.

✅ **Checkpoint:** un solo listener controla N botones. Si agregas 100 plantillas, sigues teniendo 1 listener.

> **Por qué importa para M5:** En la Agenda de Gastos vas a tener listas dinámicas de personas, gastos y transferencias. Con delegación, no necesitas agregar listeners cada vez que renderizas — el contenedor los maneja todos.
```

#### Edición 2 — Bonus al cierre: "Cálculo sobre estado"

Agregar como sección final del lab (después de HU3, antes de Logros Adicionales):

```markdown
## Cierre — Bonus: Cálculo sobre estado (15 min)

> Hasta ahora aprendiste a GUARDAR y SINCRONIZAR estado. Ahora vas a CALCULAR sobre el estado — patrón que vas a necesitar masivamente en M5 (cálculo de balances, transferencias, totales).

### Patrón base

Recibes un estado y produces un resultado derivado:

```javascript
function calcularEstadisticas(state) {
  const plantillas = state.plantillas;

  return {
    total: plantillas.length,
    masLarga: plantillas.reduce((max, p) =>
      p.cuerpo.length > max.cuerpo.length ? p : max,
      plantillas[0]
    ),
    porCategoria: plantillas.reduce((acc, p) => {
      acc[p.categoria] = (acc[p.categoria] || 0) + 1;
      return acc;
    }, {})
  };
}
```

### Aplicación al proyecto

#### Sub-pasos

C.1. Implementa `calcularEstadisticas(state)` con al menos 3 cálculos:
- Total de plantillas
- Plantilla con cuerpo más largo
- Cantidad de plantillas por categoría (objeto `{ saludos: 3, despedidas: 2, ... }`)

C.2. Crea `renderizarEstadisticas(state)` y suscríbela al store:

```javascript
function renderizarEstadisticas(state) {
  const stats = calcularEstadisticas(state);
  const panel = document.querySelector('#panel-stats');
  panel.innerHTML = `
    <p>Total: ${stats.total}</p>
    <p>Más larga: ${stats.masLarga?.titulo || '—'}</p>
    <p>Por categoría: ${JSON.stringify(stats.porCategoria)}</p>
  `;
}

store.subscribe(renderizarEstadisticas);
```

C.3. Cada vez que agregues/elimines una plantilla, las estadísticas se recalculan automáticamente.

✅ **Checkpoint:** agrega 5 plantillas con distintas categorías. El panel muestra el conteo actualizado en tiempo real.

### Por qué importa para M5

En M5 vas a calcular:
- Balance de cada persona (cuánto pagó vs cuánto le toca pagar).
- Algoritmo greedy de transferencias mínimas que saldan el grupo.
- Total gastado, gasto promedio, etc.

Todos esos cálculos siguen el mismo patrón: `función pura(state) → resultado derivado`. Hoy lo viste con plantillas; en M5 lo aplicarás a gastos.
```

**Tiempo:** 15 min al cierre. Si C16 se está pasando del tiempo, queda como tarea autónoma post-clase.

---

## 4. Propagación: archivos de otros módulos afectados

| Archivo | Por qué se afecta | Cambio mínimo |
|---|---|---|
| `M2-cambios-propuestos.md` | C08 puente constructora→class habilita la simplificación de C13 | Sin trabajo nuevo, ya documentado |
| `M3-cambios-propuestos.md` | C12 try/catch+finally + bonus createElement habilitan ediciones de C15 y C16 | Sin trabajo nuevo, ya documentado |
| `class-18/lab/README.md` (M5) | C18 Sprint 1 puede asumir que el alumno ya implementó Store COMPLETO en C14 + delegación en C16 + cálculo sobre estado en bonus de C16 | Cuando se audite M5: nota explícita *"el patrón Store que veas aquí es la versión simplificada del que aprendiste en C14 — ambas son válidas. Si quieres usar la completa con subscribe, tienes la base"* |
| `class-19/lab/README.md` (M5) | C19 algoritmo de balances reusa el patrón "función pura(state) → resultado" del bonus de C16 | Cuando se audite M5: referenciar *"como en el bonus de C16, calcular sobre estado se hace con función pura"* |
| `class-19/lab/README.md` (M5) | C19 HU7 delegación de eventos ya está enseñada en C16 | Cuando se audite M5: cambiar framing — referenciar C16 en vez de presentar como nuevo |

---

## 5. Reglas y restricciones que esto preserva

- **PROGRESSIVE_INTEGRATION:** el proyecto víctima (`whatsapp-templates`) sigue evolucionando lab por lab. El bonus de C16 NO es proyecto nuevo — es aplicación del patrón al mismo gestor de plantillas (panel de estadísticas).
- **MAX_TWO_NEW_TOOLS:**
  - C13: simplificada al quitar la discusión teórica. Solo `class` aplicada + estado local/global. ✅
  - C14: Store completo (subscribe/notify) cuenta como UN concepto unificado. ✅ con margen.
  - C15: JSON + LocalStorage + try/catch+finally aplicado. JSON+LocalStorage son una familia. try/catch+finally es refuerzo de C12. ✅
  - C16: Sincronización + delegación + bonus cálculo. Delegación es aplicación natural de addEventListener (M3). Cálculo es aplicación natural de reduce/forEach (M2). ✅
- **VERIFIABLE_DELIVERABLE:** cada nueva HU tiene checkpoint observable (1 listener controla N botones, panel de stats actualizado en tiempo real, app no se rompe con datos corruptos).
- **EXPLICIT_DEPENDENCIES:** cada concepto tiene cadena de dependencia clara. `extends` se descarta explícitamente para M5 (nota en C13).
- **Regla de code-along** (`instructor-system` §6.4): cada concepto enseñado en C13-C16 tiene su sub-paso `X.Y`. Los huérfanos críticos (`subscribe`, try/catch+finally) se cierran. Los marginales (`extends`/`super`/inmutabilidad) quedan documentados — no causan daño.

---

## 6. Validación post-cambio (checklist)

- [ ] Para cada clase modificada, verificar coherencia entre `README.md`, `slides/README.md` y `lab/README.md`.
- [ ] Verificar que C13 ya no tenga "discusión teórica clase vs constructor".
- [ ] Verificar que C13 tenga la nota sobre extends/Code 301.
- [ ] Verificar que C14 lab tenga HU0 (o equivalente) con Store completo.
- [ ] Verificar que C15 lab tenga HU4 (o equivalente) con try/catch+finally aplicado.
- [ ] Verificar que C16 lab use delegación en HU3.
- [ ] Verificar que C16 tenga bonus "cálculo sobre estado" al cierre.
- [ ] Verificar que AGENTS.md tenga el nombre correcto del M4.
- [ ] Continuidad del proyecto víctima entre labs (`whatsapp-templates`).
- [ ] `lint-markdown` sobre todos los archivos modificados.
- [ ] Validar `MAX_TWO_NEW_TOOLS` por clase.
- [ ] Test C16: confirmar que P7 sobre `subscribe` ya queda alineado por construcción.
- [ ] Lectura cruzada con M2 (C08 puente) y M3 (C12 finally + bonus createElement) — coherencia confirmada.

---

## 7. Riesgos identificados

- **C14 con Store completo agrega 15-20 min.** Mitigación: la HU0 es lineal y muy guiada (`getState`/`setState`/`subscribe`/`notify` son ~20 líneas). Eric confirmó que el tiempo es aceptable.
- **C16 con delegación + bonus cálculo puede sentirse largo.** Mitigación: el bonus está marcado como "no es HU obligatoria"; queda como tarea autónoma si la clase se pasa.
- **Inconsistencia inmutabilidad C14 (spread/concat) vs M5 (push directo) NO se ataca ahora.** Riesgo: alumno avanzado pregunta por qué hay diferencia. Mitigación: facilitator de C14 puede tener nota *"en M5 simplificamos a `.push` directo porque el alcance del proyecto lo permite. La inmutabilidad estricta es Code 301."*
- **`/module-updater` puede no implementar el Store completo igual que el código verbatim del .md.** Mitigación: el `.md` da código exacto; verificar al aplicar.

---

## 8. Validación con la skill `instructor-system` (regla de code-along)

Igual que en M1-M3: este documento garantiza **paridad macro** (cada bloque conceptual del M4 post-cambio tiene una HU/sub-paso del lab que lo aplica). No garantiza paridad micro — esa solo se verifica al generar el guion con `instructor-system`.

### Validación obligatoria a ejecutar antes de dictar cada clase del M4

Para C13, C14, C15, C16, ANTES de dictar:

1. Generar `mi-sistema/CAPA 0 - CLASE {n}.md` con `instructor-system`.
2. Generar `mi-sistema/CLASE {n}.md` (Capa 1).
3. Validar paridad momento ↔ HU/sub-paso del lab.
4. Validar especificidad de los nuevos sub-pasos (HU0 Store completo, HU4 try/catch+finally, HU3 delegación, bonus cálculo).

### Riesgos micro identificados

- **C14 HU0:** asegurar que el guion presente el Store como UN concepto unificado (4 métodos relacionados), no 4 conceptos separados, para no inflar la cuenta de momentos.
- **C15 HU4 try/catch+finally:** el guion debe presentar el `finally` como "garantía sin importar qué pase con los datos", no como tercer caso adicional.
- **C16 delegación:** el contraste "1 listener vs N listeners" es el momento clave — asegurar que el guion lo destaque con DevTools en vivo (mostrar la lista de listeners antes/después).
- **C16 bonus cálculo:** si el guion lo trata como "extra al final", el alumno puede perderlo. Tratarlo como Momento principal de cierre del módulo.

---

## 9. Cómo alimentar este archivo al sistema de skills

**Importante:** procesar M1, M2 y M3 cambios ANTES que este. El M4 post-cambio asume:
- M2 C08: puente sintáctico constructora→class (habilita simplificación de C13).
- M3 C12: try/catch+finally aplicado + bonus createElement (habilita ediciones de C15 y C16).

Pasar este archivo como input al skill `/module-updater` del repo `ncode-201-guide` en modo **implementar**:

1. Skill lee este `.md`.
2. Skill audita el estado actual de cada archivo listado en §2.
3. Skill propone parches concretos (diffs) por cada archivo.
4. Eric aprueba parche por parche.
5. Skill aplica parches.
6. Ejecutar `/lint-markdown` sobre archivos modificados.
7. Ejecutar `/evaluation-class` sobre C13, C14, C15, C16 para validación pedagógica final.
8. **Verificación cruzada con M2 y M3:** confirmar que C13 referencia C08, que C15 referencia C12 (`finally`), que C16 referencia C12 (createElement).
