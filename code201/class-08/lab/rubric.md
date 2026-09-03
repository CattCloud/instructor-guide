# Rubrica - Lab Modulo 2: Gestor de Presupuesto Personal

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Gestor de Presupuesto Personal |
| **Modulo** | M2 — Fundamentos de Programación |
| **Clase** | C08 — Tailwind CSS e Interfaz del Gestor (cierre del módulo) |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. Historias de Usuario implementadas (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | ≥2 HU adicionales propias implementadas, claras, funcionales y con criterios de aceptación cumplidos al 100% |
| **Bueno** | 15 | 2 HU adicionales con criterios de aceptación cumplidos en su mayoría |
| **Satisfactorio** | 10 | 1 HU adicional implementada con criterios parciales |
| **Bajo** | 5 | HU planteada pero no funcional, o sin criterios verificables |
| **No entregado** | 0 | Sin HU adicionales |

**Aspectos evaluados:**
- HU redactadas en formato "Como [usuario], quiero [acción] para [beneficio]"
- Criterios de aceptación verificables
- Cada HU en su propia rama y mergeada vía PR
- Funcionalidad demostrable en el sitio público

---

### 2. Calidad técnica: lógica + interfaz integradas (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Integra la lógica del módulo (imperativo, funcional, OOP con `class` + encapsulación) con una **interfaz Tailwind responsiva**, y la **conecta**: el formulario crea movimientos y actualiza la lista + saldo en vivo |
| **Bueno** | 15 | Lógica y estilo correctos; la conexión funciona con alguna inconsistencia menor |
| **Satisfactorio** | 10 | Interfaz estilizada pero la conexión es parcial (ej. agrega pero no actualiza el saldo) |
| **Bajo** | 5 | Solo maqueta estática o lógica suelta sin interfaz |
| **No entregado** | 0 | Código no funcional |

**Aspectos evaluados:**
- `class Movimiento` / `Presupuesto` con encapsulación (de C07)
- UI con utility classes de Tailwind, responsiva (`md:`) y mobile-first
- Conexión: `addEventListener('submit')` + `new Movimiento(...)` + `presupuesto.agregar(...)` + render
- Color semántico (verde ingreso / rojo gasto)

---

### 3. Presentación de funcionalidades en vivo (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo ≤3 min, fluida: agrega movimientos en vivo, muestra la lista y el saldo actualizándose, y demuestra el responsive (móvil/escritorio) en DevTools |
| **Bueno** | 15 | Demo fluida muestra el agregado en vivo pero omite el responsive |
| **Satisfactorio** | 10 | Demo entrega lo pedido pero la app no actualiza en vivo |
| **Bajo** | 5 | Presenta pero no muestra la funcionalidad core del gestor |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 3 min, uso eficiente
- Agrega un movimiento desde el formulario → aparece en la lista, el saldo cambia
- Muestra el layout responsivo (apila en móvil, 2 columnas en escritorio)
- No se evalúa fluidez verbal ni nervios

---

### 4. Argumentación técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones técnicas con argumentos sólidos: por qué `class` + encapsulación, por qué utility-first/mobile-first, cómo el JS conecta el form con el modelo de C07 |
| **Bueno** | 15 | Justifica 1 decisión técnica claramente, responde con dificultad pero correcto |
| **Satisfactorio** | 10 | Argumentación superficial, identifica los conceptos pero sin profundizar |
| **Bajo** | 5 | No justifica decisiones técnicas o confunde conceptos básicos |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Diferencia clase-propiedad vs prefijo-modificador en Tailwind
- Por qué mobile-first (base = móvil, `md:` agrega desktop)
- Cómo el formulario reusa las clases de C07 sin reescribir lógica
- Si usó IA: explica qué porción del código entiende técnicamente

---

### 5. Desafío: explicación de código solicitada por el Instructor (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Explica 1 fragmento (una clase de C07 o el listener del form) a solicitud del instructor con claridad técnica, sitio desplegado en GitHub Pages funcional, README documentado |
| **Bueno** | 15 | Explica el fragmento con apoyo parcial del instructor, deploy funcional |
| **Satisfactorio** | 10 | Explica con dificultad, deploy funcional pero README incompleto |
| **Bajo** | 5 | No puede explicar el fragmento o sitio no desplegado |
| **No entregado** | 0 | Sin entregable público |

**Aspectos evaluados:**
- Capacidad para explicar el código entregado bajo demanda
- GitHub Pages cargando sin errores
- README del repo con explicación de la arquitectura (modelo de C07 + interfaz Tailwind)
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
- [ ] Screenshot del PR mergeado por cada HU adicional

### Documentacion
- [ ] README del repo con retos adicionales documentados
- [ ] README del repo con explicación de la arquitectura (modelo de C07 + interfaz Tailwind)
- [ ] README del repo con decisiones técnicas clave

### Verificacion Tecnica
- [ ] El formulario agrega un movimiento y la lista + saldo se actualizan en vivo
- [ ] La interfaz es responsiva (apila en móvil, 2 columnas en escritorio)
- [ ] El JS reusa `class Movimiento` / `Presupuesto` de C07
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Lo que se evalúa es la comprensión técnica, no fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 4.
3. **El fragmento del Criterio 5 lo eliges tú** en vivo durante la presentación — pide explícitamente "explícame esta función" señalando una porción (una clase de C07 o el listener del formulario).
4. **Distingue Criterio 2 de Criterio 4:** Criterio 2 es CÓDIGO entregado, Criterio 4 es ARGUMENTACIÓN sobre ese código.

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "El modelo de C07 (`Movimiento`/`Presupuesto`) quedó bien encapsulado y la interfaz con Tailwind es limpia y responsiva. La conexión del formulario reusa `presupuesto.agregar(new Movimiento(...))` y re-renderiza la lista y el saldo correctamente. Explicaste con claridad por qué la base es móvil y `md:` agrega el desktop."

### Areas de Mejora
> "La interfaz se ve bien pero el saldo no se actualiza al agregar un movimiento — revisa que `render()` se llame dentro del listener del `submit` (Criterio 2). Además, usaste `grid-cols-2` fijo: pásalo a `grid-cols-1 md:grid-cols-2` para que sea mobile-first. La argumentación fue clara pero no distinguiste clase-propiedad de prefijo-modificador cuando se preguntó."
