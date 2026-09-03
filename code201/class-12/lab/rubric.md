# Rubrica - Lab Modulo 3: Pokédex

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Pokédex — buscador que consume la PokeAPI |
| **Modulo** | M3 — JavaScript Moderno y Consumo de APIs |
| **Clase** | C12 — Manejo de Errores y Estados |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. Historias de Usuario implementadas (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | HU1-HU4 del lab + ≥1 HU adicional propia, claras, funcionales y con criterios de aceptación cumplidos al 100% |
| **Bueno** | 15 | HU1-HU4 + 1 HU adicional con criterios en su mayoría cumplidos |
| **Satisfactorio** | 10 | HU1-HU4 funcionales sin HU adicional |
| **Bajo** | 5 | HU implementadas pero no funcionan correctamente |
| **No entregado** | 0 | Sin HU funcionales |

**Aspectos evaluados:**
- HU1: `try/catch` alrededor del fetch
- HU2: detección de `!response.ok` + `throw new Error(...)`
- HU3: estado de carga (spinner) con `finally`, en la búsqueda y en la carga inicial
- HU4: "no encontrado" (404) como resultado vacío (`null`) con aviso neutro, distinto del error
- HU adicionales (logros) en su propia rama y mergeadas vía PR

---

### 2. Calidad técnica: async + fetch + manejo de errores (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Integra correctamente `fetch`/`async/await`, validación de `response.ok`, `try/catch/finally` y render dinámico; código limpio y reutilizable |
| **Bueno** | 15 | Integra 3 de 4 conceptos del módulo correctamente, alguna inconsistencia menor |
| **Satisfactorio** | 10 | Funcional pero código repetitivo, no reutiliza el render ni separa responsabilidades |
| **Bajo** | 5 | Errores no se capturan, `fetch` sin validar `ok`, código monolítico |
| **No entregado** | 0 | App no funcional |

**Aspectos evaluados:**
- `try/catch` envuelve la operación de red
- `response.ok` validado antes de leer el JSON; `throw` con mensaje claro
- `finally` garantiza ocultar el spinner en todos los casos
- Reutilización del render de C09 (`crearTarjeta`/`render`)
- Mensajes de error mostrados en la UI sin romper la app

---

### 3. Presentación de funcionalidades en vivo (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo ≤5 min: busca un Pokémon real, muestra los 3 estados (éxito, no encontrado, error), funcionalidad adicional |
| **Bueno** | 15 | Demo muestra la búsqueda pero omite algún estado de error |
| **Satisfactorio** | 10 | Demo entrega lo pedido sin mostrar manejo de errores completo |
| **Bajo** | 5 | Presenta pero no muestra la app funcionando en vivo |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 5 min, uso eficiente
- Búsqueda de un Pokémon real con datos de la API
- Provoca el error (nombre inexistente) para mostrar que la app no se rompe
- Muestra el spinner apareciendo y desapareciendo
- No se evalúa fluidez verbal ni nervios

---

### 4. Argumentación técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones: por qué `response.ok` y no confiar en `fetch`, por qué `finally` para el spinner, diseño del flujo async |
| **Bueno** | 15 | Justifica 1 decisión técnica claramente |
| **Satisfactorio** | 10 | Argumentación superficial, identifica conceptos sin profundizar |
| **Bajo** | 5 | No justifica decisiones o confunde conceptos básicos |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Explica por qué `fetch` no falla en 404 y cómo lo maneja
- Justifica el uso de `finally` frente a poner la línea en el `try`
- Argumenta el flujo `async/await` y la reutilización del render
- Si usó IA: explica qué porción del código entiende técnicamente

---

### 5. Desafío: explicación de fragmento + deploy + README (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Explica 1 fragmento a solicitud del instructor con claridad, sitio en GitHub Pages funcional, **README en Markdown** documentado |
| **Bueno** | 15 | Explica el fragmento con apoyo parcial, deploy funcional, README presente |
| **Satisfactorio** | 10 | Explica con dificultad, deploy funcional pero README incompleto |
| **Bajo** | 5 | No puede explicar el fragmento o sitio no desplegado |
| **No entregado** | 0 | Sin entregable público |

**Aspectos evaluados:**
- Capacidad para explicar el código entregado bajo demanda (ej. el bloque `try/catch/finally`)
- GitHub Pages cargando sin errores
- **README.md en Markdown** con título, descripción, uso, tecnologías y enlace al sitio
- Enlace al sitio desplegado documentado

---

## Escala de Calificacion

| Rango | Nota | Descripcion |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del módulo |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos |
| < 70 | F | Necesita mejora — No cumple requisitos básicos |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] URL del repositorio público en GitHub
- [ ] URL de GitHub Pages funcional
- [ ] `README.md` en Markdown documentando el proyecto

### Documentacion
- [ ] README con título, descripción y cómo usar la app
- [ ] README con tecnologías (fetch, async/await, Tailwind, PokeAPI) y enlace al deploy

### Verificacion Tecnica
- [ ] Buscar un Pokémon válido muestra su tarjeta
- [ ] Buscar un nombre inexistente muestra "No se encontró…" (no rompe la app)
- [ ] El spinner aparece y SIEMPRE desaparece (éxito, no encontrado, sin red)
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Se evalúa la comprensión técnica, no la fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 4.
3. **El fragmento del Criterio 5 lo eliges tú** en vivo — pide "explícame este `try/catch/finally`" o "explícame cómo manejas el 404" señalando una porción del código.
4. **Provoca el error en la demo:** si el estudiante no muestra cómo se comporta la app al buscar algo inexistente, pídeselo — es central para el Criterio 3.

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "El manejo de errores está bien resuelto: validas `response.ok` antes de leer el JSON y lanzas un mensaje claro ('No se encontró "pikachuu"' es mejor que 'Error'). El `finally` garantiza que el spinner no se quede pegado, y reutilizas el render de C09 sin reescribirlo. La argumentación sobre por qué `fetch` no falla en 404 fue precisa."

### Areas de Mejora
> "La app busca bien, pero el `try/catch` no valida `response.ok`: cuando buscas un nombre inexistente, intentas leer un JSON de error y el mensaje al usuario queda confuso. Agrega `if (!response.ok) throw new Error(...)`. Además, el spinner se oculta dentro del `try`: muévelo a `finally` para que también desaparezca cuando hay error."
