# Laboratorio 04: CSS Variables + Forms Validados + Git Workflow

> **Lab CALIFICADO** — última clase del Módulo 1. 5 partes, ~95 min en clase.

En este laboratorio consolidas tres habilidades profesionales: definir la **estética de tu producto con CSS Variables** (colores, tipografía, radius, shadow), agregar **validación nativa** al formulario de contacto, y aplicar un **flujo Git profesional** con ramas y Pull Requests.

> 🎯 **Continuidad del M1:** trabajas sobre el **mismo producto** que elegiste en C01. Hasta ahora pusiste layout y espaciado; hoy le das **identidad visual** y profesionalizas el flujo Git.

---

### 🎯 Objetivos de Aprendizaje

* Definir un sistema de **CSS Variables** (`:root { --token }`) con la paleta de tu producto y aplicarlas con `var(--token)`.
* Validar el formulario con **HTML nativo** (`required`, `type`, `pattern`, `minlength`, `<select>`, `<input type="checkbox">`).
* Aplicar el flujo **Git profesional**: ramas, Pull Request, merge, sincronización local.

### 🔑 Conceptos Clave

* **CSS Custom Properties:** tokens en `:root` reutilizados con `var(--token)`.
* **Validación nativa HTML:** el navegador bloquea el submit si los campos no cumplen las reglas — sin JavaScript.
* **GitFlow básico:** `main` es la rama estable; cada feature se desarrolla en una rama aparte y se mergea vía Pull Request.

---

## Parte 1 – Estética con CSS Variables (~30 min)

> Hasta ahora tu CSS tiene valores hardcoded repetidos (`#1a1a1a` aquí, `#e0e0e0` allá, `8px` por todos lados). Hoy los centralizas en `:root` y aprovechas para **agregar la estética que faltaba**: shadows, color de acento, tamaño de títulos destacados.

### 1.1 Define la paleta del producto en `:root`

Abre `styles.css` y al **inicio del archivo** (después del reset universal `*` y antes del `body`) agrega:

```css
:root {
  /* Colores */
  --color-primary: #1a1a1a;       /* botones, nav, borders sólidos */
  --color-accent: #0066cc;        /* color de marca para destacar (links hover, badge) */
  --color-text: #1a1a1a;          /* texto base */
  --color-bg: #ffffff;            /* fondo del body */
  --color-bg-soft: #f5f5f5;       /* footer, faq-nav, .logos */
  --color-border: #e0e0e0;        /* cards, plans, details, inputs */

  /* Tipografía */
  --font-text: system-ui, -apple-system, sans-serif;
  --font-size: 16px;
  --font-size-title: 28px;

  /* Espacios */
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;

  /* Estética */
  --radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
}
```

> 💡 **¿Por qué `:root` y no `body`?** `:root` es el elemento raíz del documento — equivale al `<html>`. Las variables definidas ahí están disponibles en CADA regla del CSS. Es la convención estándar.

> 💡 **Adapta los colores a TU producto.** Si tu marca es verde, cambia `--color-accent` a tu verde. La paleta es el ADN visual de tu producto.

### 1.2 Refactor de `body`, `nav` y `footer` con `var()`

> 📝 **Formato aditivo:** en los bloques siguientes los `/* ...tus propiedades anteriores... */` representan las líneas que YA tienes en tu `styles.css` (de C01-C03). NO borres ni reescribas todo — solo **agrega o reemplaza** las líneas con `var(--token)` dentro de la regla que ya existe.

```css
body {
  /* ...tus propiedades anteriores... */
  font-family: var(--font-text);
  color: var(--color-text);
}

nav a {
  /* ...tus propiedades anteriores... */
  color: var(--color-text);
}

/* NUEVA regla — agrégala completa */
nav a:hover {
  color: var(--color-accent);
}

footer {
  /* ...tus propiedades anteriores... */
  background: var(--color-bg-soft);
}
```

* **`nav a:hover` es una regla NUEVA** (no existía en C02/C03). Los links cambian de color cuando pasas el mouse — antes no había feedback visual.
* `footer` puedes probar también con `var(--color-primary)` (fondo oscuro) si quieres un look más premium — depende del estilo de tu producto.

### 1.3 Refactor de inputs, botones y cards

> 📝 Mismo formato aditivo: solo cambias los valores hardcoded por `var(--token)` dentro de las reglas que ya tienes.

```css
#contacto input,
#contacto textarea {
  /* ...tus propiedades anteriores... */
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

#contacto button {
  /* ...tus propiedades anteriores... */
  background: var(--color-primary);
  color: var(--color-bg);
  border-radius: var(--radius);
}

.card {
  /* ...tus propiedades anteriores... */
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.plan {
  /* ...tus propiedades anteriores... */
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-bg);
}

.logo-cliente {
  /* ...tus propiedades anteriores... */
  background: var(--color-bg-soft);
  border-radius: var(--radius);
}
```

> 💡 **`--radius: 8px` unifica los border-radius**: en C02 algunos eran 4px y otros 8px. El refactor los homogeneiza — esa es la otra ganancia de las variables: consistencia visual.

### 1.4 Agregar estética NUEVA: shadows + tamaño de títulos

Hasta ahora las cards y plans eran rectángulos planos. Con `box-shadow` les das profundidad:

```css
/* NUEVO: agrega shadow a las cards y plans (en sus reglas existentes) */
.card {
  /* ...tus propiedades anteriores... */
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s;
}

.plan {
  /* ...tus propiedades anteriores... */
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s;
}

/* NUEVAS reglas — agrégalas completas */
.card:hover,
.plan:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.plan .precio {
  /* ...tus propiedades anteriores... */
  font-size: var(--font-size-title);   /* reemplaza el 32px hardcoded */
}

/* NUEVA: tamaño consistente para títulos principales */
h1 {
  font-size: var(--font-size-title);
}
```

* **`box-shadow` + `transition` + `:hover`** → microinteracción: las cards "flotan" sutilmente al pasar el mouse.
* **`--font-size-title` (28px)** unifica el tamaño de h1 y `.plan .precio` (antes 32px).

✅ **Checkpoint P1:** abres el sitio (las 3 páginas) y ves:
- Cards y plans con sombra suave + hover que las "levanta".
- Links del nav cambian a azul (`--color-accent`) al pasar el mouse.
- h1 y precios del mismo tamaño (28px).
- Todo lo demás se ve **idéntico** que antes — porque solo refactorizaste valores.

🏆 **Reto autónomo:** cambia `--color-accent` a otro color (verde, morado, naranja) y observa cómo TODOS los hovers cambian a la vez. Eso es el poder de las variables.

---

## Parte 2 – Crear una rama feature (~10 min)

> Hasta ahora todos tus commits van directo a `main`. Funciona cuando trabajas solo, pero **en equipo es un desastre**: si pusheas algo roto, lo rompes para todos. El flujo profesional separa cada feature en su propia rama.

### 2.1 ¿Qué es una rama? GitFlow básico

Una **rama** (branch) es una línea independiente de desarrollo. Cuando creas una rama `feature/form-validado` a partir de `main`, ese código vive aparte hasta que esté listo. Mientras tanto, `main` sigue estable.

```
main:               A───B───C─────────────────M  (← merge del PR aquí)
                              \              /
feature/form-validado:         D───E───F────/
```

**GitFlow básico** (la versión simplificada del flujo profesional):
1. `main` siempre tiene código estable y desplegado.
2. Para cada feature creas una rama aparte (`feature/...`).
3. Cuando el feature está listo, abres un **Pull Request** (PR) en GitHub.
4. El PR se mergea a `main` después de revisión.

### 2.2 Ver tus ramas actuales con `git branch`

Antes de crear nada, mira qué ramas existen en tu repo local:

```bash
git branch
```

Verás algo como:
```
* main
```

El **asterisco** indica la rama en la que estás. Solo tienes `main`.

### 2.3 Crear y cambiar a una rama nueva con `git checkout -b`

Vas a crear una rama para desarrollar el formulario validado:

```bash
git checkout -b feature/form-validado
```

* **`-b`** crea la rama Y se cambia a ella en un solo comando.
* La convención de nombre `feature/<descripción>` agrupa las ramas en GitHub (se ven anidadas).

Verifica que estás en la nueva rama:

```bash
git branch
```

Ahora ves:
```
* feature/form-validado
  main
```

El asterisco se movió. ✅

✅ **Checkpoint P2:** `git branch` muestra 2 ramas locales y estás en `feature/form-validado`.

> ⚠️ **No commitees todavía nada de P1 en esta rama.** Lo de P1 (estética con variables) debe estar en `main` antes de crear esta rama. Si lo olvidaste, vuelve a `main` (`git checkout main`), commitea P1, y luego repite los pasos de P2.

---

## Parte 3 – Formulario validado en la rama (~25 min)

> Sobre el `<section id="contacto">` que tienes desde C01-C02 (con `nombre`, `email`, `mensaje` y botón Enviar), agregas **validación nativa** y 3 campos nuevos: teléfono con `pattern`, `<select>` de motivo y `<input type="checkbox">` de términos.

### 3.1 Reemplaza el form completo dentro de `<section id="contacto">`

Abre `index.html` y dentro de `<section id="contacto">`, reemplaza el `<form>` actual por este:

```html
<form>
  <label for="nombre">Nombre (mín. 3 caracteres)</label>
  <input type="text" id="nombre" name="nombre" required minlength="3">

  <label for="email">Correo electrónico</label>
  <input type="email" id="email" name="email" required>

  <label for="telefono">Teléfono (9 dígitos)</label>
  <input type="tel" id="telefono" name="telefono" pattern="[0-9]{9}" required>

  <label for="motivo">Motivo del contacto</label>
  <select id="motivo" name="motivo" required>
    <option value="">Selecciona un motivo</option>
    <option value="consulta">Consulta</option>
    <option value="reclamo">Reclamo</option>
    <option value="sugerencia">Sugerencia</option>
  </select>

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="mensaje" rows="4" required minlength="10"></textarea>

  <label>
    <input type="checkbox" id="acepto" name="acepto" required>
    Acepto los términos y condiciones
  </label>

  <button type="submit">Enviar</button>
</form>
```

Las reglas de validación:

| Atributo | Qué hace |
|---|---|
| `required` | El campo no puede estar vacío al enviar. |
| `minlength="3"` | El valor debe tener al menos 3 caracteres. |
| `type="email"` | El navegador valida que tenga `@` y un dominio. |
| `type="tel"` + `pattern="[0-9]{9}"` | Exactamente 9 dígitos numéricos. |
| `<select>` con primera opción `value=""` + `required` | Obliga a elegir una opción real. |
| `<input type="checkbox" required>` | Obliga a marcar el checkbox. |

### 3.2 Verifica los 3 escenarios de validación nativa

1. **Submit con el form vacío** → el navegador bloquea y muestra el error en el primer campo `required`.
2. **Email mal formado** (escribe `abc` en email) → el navegador rechaza con "Por favor, incluye '@'".
3. **Teléfono con letras o menos de 9 dígitos** → el `pattern` lo rechaza.

Solo cuando TODOS los campos son válidos, el navegador permite el submit.

> 💡 **Sin una sola línea de JavaScript.** La validación nativa de HTML es la **primera línea de defensa**. En el M5 verás cómo agregar validación JS para reglas de negocio (ej. "el email no existe en nuestra DB" — eso necesita servidor).

### 3.3 Commit dentro de la rama

```bash
git status                                # debe mostrar index.html modificado
git add index.html
git commit -m "feat: agrega validacion nativa al formulario de contacto"
```

✅ **Checkpoint P3:** abres `index.html` en navegador, intentas enviar con campos inválidos → ves errores nativos del navegador. Llenas todo válido → el submit pasa. `git log --oneline` muestra tu commit nuevo en la rama feature.

🏆 **Reto autónomo:** agrega un `<input type="date">` para "Fecha preferida de contacto" y observa que el navegador renderiza un calendario nativo. Eso también es validación nativa.

---

## Parte 4 – Cerrar el flujo Git (~20 min)

> Tu rama tiene el feature listo. Ahora la subes a GitHub, abres un Pull Request, lo mergeas, y sincronizas tu `main` local.

### 4.1 Push de la rama feature

```bash
git push -u origin feature/form-validado
```

* **`-u origin feature/form-validado`** vincula tu rama local con la remota. Después de esto, basta con `git push` (sin `-u`).
* GitHub te muestra un mensaje en la terminal con un link para abrir el PR directamente.

### 4.2 Abrir el Pull Request en GitHub

1. Entra a tu repo en GitHub.
2. Verás un banner amarillo: *"feature/form-validado had recent pushes. Compare & pull request"* → click.
3. Llena:
   - **Título:** `Agrega validación nativa al formulario de contacto`
   - **Descripción:** lista breve de qué cambió (campos validados, nuevos inputs, etc.).
4. Click **Create pull request**.

### 4.3 Leer el diff y mergear

En la pestaña **Files changed** del PR:
- Líneas en verde = agregadas.
- Líneas en rojo = eliminadas.
- Lee el diff completo antes de mergear (en un equipo real, otra persona lo revisaría).

Cuando estés conforme:
1. Click **Merge pull request** → **Confirm merge**.
2. GitHub mergea `feature/form-validado` en `main` y crea un commit de merge.

### 4.4 Sincronizar tu `main` local con `git pull`

El merge sucedió en GitHub (remoto), pero tu `main` local sigue sin esos cambios. Sincronízalo:

```bash
git checkout main             # vuelves a la rama main local
git pull                      # descarga los cambios del remoto (incluyendo el merge)
git log --oneline             # ves el commit de merge en tu main local
```

* **`git pull`** = `git fetch` (descarga) + `git merge` (aplica). Es el comando para "actualizar mi rama local con lo que está en el remoto".

### 4.5 (Opcional) Borrar la rama feature ya mergeada

Como el feature ya está en `main`, la rama feature local ya no aporta:

```bash
git branch -d feature/form-validado
git branch                    # confirma que solo queda main
```

✅ **Checkpoint P4:** GitHub muestra el PR mergeado. Tu `main` local tiene el commit de merge. `git branch` muestra solo `main` (si borraste la feature).

---

## Parte 5 – Deploy y entrega calificada (~10 min)

### 5.1 Verifica GitHub Pages

1. Push final a `main` si te quedó algo pendiente:

```bash
git push origin main
```

2. Abre tu sitio en GitHub Pages (la URL que configuraste en C01 P5).
3. Verifica que las **3 páginas** (`index.html`, `precios.html`, `faq.html`) funcionan y se ven con la nueva estética (shadows, hovers, paleta).

### 5.2 Actualiza el `README.md` del repositorio

Agrega al README del repo:
- URL del despliegue en GitHub Pages.
- **Tabla de tokens CSS** que definiste (nombre + valor + dónde se usa).
- **Lista de validaciones aplicadas** al formulario (campo + atributo + descripción del error nativo).

✅ **Checkpoint P5:** tu URL pública muestra el sitio con estética nueva. El README del repo está documentado.

---

## 📝 Entrega (Lab CALIFICADO)

| Entregable | Dónde |
|---|---|
| URL del repositorio | Blackboard |
| URL de GitHub Pages funcional | Blackboard |
| Screenshot del PR mergeado | Blackboard |
| README del repo con tokens + validaciones | En el repo |

## Rúbrica de Evaluación

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|----------------|------------|---------------------|----------|
| **CSS Variables y estética** | ≥10 tokens en `:root`, ≥6 reglas refactorizadas con `var()`, estética nueva (shadow + hover + título destacado) aplicada coherentemente al producto | ≥8 tokens, ≥4 reglas refactorizadas, estética nueva visible pero inconsistente en alguna sección | ≥5 tokens, ≥2 reglas refactorizadas, estética nueva mínima | Hardcodes prevalecen, sin sistema de tokens reconocible |
| **Formulario validado** | Los 3 escenarios de fallo bloquean el submit (vacío, email inválido, teléfono inválido), checkbox y select obligatorios, mensajes nativos visibles en todos los campos | Bloquea 2 de 3 escenarios, validación funciona en la mayoría de campos | Bloquea 1 escenario, validación parcial | No bloquea el submit o no hay atributos de validación |
| **Git workflow** | Rama `feature/form-validado` creada, commits atómicos descriptivos, push, PR abierto y mergeado vía GitHub, `main` local sincronizado con `git pull` | Flujo completo pero con 1-2 commits genéricos o push directo en algún momento | Rama creada y PR abierto, pero merge manual o sin sincronización local | Push directo a `main` o sin uso de ramas/PRs |
| **Presentación + argumentación técnica** | Demo de ≤3 min mostrando el sitio en acción, explica con claridad ≥2 decisiones técnicas (tokens, validación o flujo Git), justifica uso de IA si aplica | Demo fluida, explica 1 decisión técnica con argumentos sólidos | Demo entrega lo pedido pero argumentación superficial | No presenta o no justifica decisiones técnicas |
| **Desafío: HU adicionales + deploy** | ≥2 HU adicionales implementadas con criterios de aceptación cumplidos, sitio público funcional en GitHub Pages con las 3 páginas, README del repo con tabla de tokens + validaciones | 1 HU adicional, deploy funcional, README documentado | Deploy funcional pero sin HU adicionales o README incompleto | Sin deploy o sitio roto |

**Total: 100 puntos** (5 criterios x 20 pts)

| Nota | Rango |
|------|-------|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| F | < 70 |

---

## 💡 Tips finales

* Las **CSS Variables** se evalúan en tiempo real — en DevTools edita el valor de `--color-accent` y verás el cambio instantáneo en TODA la página.
* **Naming consistente** importa: `--color-primary`, `--color-accent`, `--color-text` es legible. `--c1`, `--c2`, `--c3` no.
* Si pusheas directo a `main` por costumbre, **rompiste el ejercicio**. La P2-P4 evalúan el FLUJO, no solo el resultado.
* `git status` antes de cada commit te salva de incluir archivos que no querías.
* Si `git pull` te da conflicto, no entres en pánico: significa que `main` cambió mientras trabajabas. Hoy no veremos resolver conflictos — pero existe.
