> 📦 **Módulo 1:** Clase 4 de 4 — Lab CALIFICADO

# Clase 04: CSS Variables + Forms Validados + Git Workflow

## Resumen
En la Clase 04 consolidas tu base de frontend profesional con tres herramientas que vas a usar en cada proyecto del curso: **CSS Variables (`:root`)** para definir la **estética de tu producto** (colores, tipografía, radius, shadow) y refactorizar el CSS escrito en C01-C03; **formularios validados con HTML nativo** (`required`, `type`, `pattern`, `<select>`, `<input type="checkbox">`); y un **flujo Git profesional con ramas y Pull Requests** (`git branch`, `git checkout -b`, `git pull`, PR en GitHub). Es la última clase del M1, evaluada con rúbrica.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y contexto** | 15 min | Por qué hoy: hasta C03 solo aplicaron layout/espaciado; falta darle identidad visual al producto. Por qué validación nativa antes de JavaScript. Por qué nadie pushea directo a `main` en equipos. |
| **2. Parte 1 – Estética con CSS Variables** | 30 min | Definir `:root` con la paleta del producto (colores, tipografía, radius, shadow). Refactorizar reglas existentes con `var()` y agregar estética nueva (sombras, hover con accent, tamaño de títulos). Commit a `main`. |
| **3. Parte 2 – Crear rama feature** | 10 min | Concepto de rama y GitFlow básico. `git branch` para ver ramas locales. `git checkout -b feature/form-validado`. |
| **4. Parte 3 – Formulario validado (en la rama)** | 25 min | Sobre el `<section id="contacto">` de C01-C02 agregar `required`, `minlength`, `type="tel"` con `pattern`, `<select>` motivo, `<input type="checkbox">` términos. Commit dentro de la rama feature. |
| **5. Parte 4 – Cerrar el flujo Git** | 20 min | `git push -u origin feature/...`, abrir Pull Request en GitHub, leer el diff, mergear, `git checkout main`, `git pull`. |
| **6. Parte 5 – Deploy + entrega** | 10 min | Verificar GitHub Pages con las 3 páginas, actualizar README del repo con tokens + validaciones. |
| **7. Cierre y Síntesis** | 15 min | Discusión: variables como identidad visual; validación nativa vs JS; por qué ramas + PR antes que push directo. |

> ⚠️ **Lab calificado:** única clase calificada del M1. Rúbrica con pesos P1 30% / P2+P4 30% / P3 25% / P5 15%.

---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros si lo deseas:

#### 🧠 Preguntas para reflexionar

1. ¿Qué problema resuelve definir colores y espacios en `:root` en vez de repetirlos en cada regla CSS?
2. ¿Cuándo una validación nativa (`required`, `type="email"`, `pattern`) es suficiente y cuándo necesitas JavaScript?
3. ¿Qué diferencia hay entre `pattern` y `minlength`?
4. ¿Por qué nadie debería pushear directo a `main` en un equipo profesional?
5. ¿Qué hace `git pull` y por qué lo necesito después de mergear un PR en GitHub?

#### 📚 Recursos sugeridos

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties){:target="_blank"}
- [Validación nativa de formularios (MDN)](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation){:target="_blank"}
- [Pro Git Book — Branching](https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%C2%BFQu%C3%A9-es-una-rama%3F){:target="_blank"}
- [About Pull Requests (GitHub Docs)](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests){:target="_blank"}

---

## Resultados esperados

Al concluir la Clase 04, los estudiantes habrán consolidado las bases de frontend profesional que aplicarán en cada módulo del curso. En detalle:

### Podrán hacer
1. **Definir la paleta de su producto con CSS Variables**: ≥10 tokens en `:root` (colores, tipografía, espacios, radius, shadow) y aplicarlos con `var(--token)`.
2. **Validar formularios con HTML nativo**: usar `required`, `type`, `pattern`, `minlength`, `<select>`, `<input type="checkbox">` para que el navegador bloquee submits inválidos sin una línea de JavaScript.
3. **Trabajar con Git profesionalmente**: ver ramas con `git branch`, crear ramas con `git checkout -b`, pushear con `-u`, abrir y mergear Pull Requests, sincronizar con `git pull`.

### Podrán explicar
1. **Por qué Variables CSS dan identidad visual sin librerías**: consistencia + cambios centralizados sin agregar framework.
2. **Cuándo validación nativa es suficiente y cuándo necesitas JS**: nativa para formato y obligatoriedad; JS para reglas de negocio.
3. **Por qué el flujo branch + PR + merge** protege la rama `main` y permite revisión de código antes de integrar cambios.

### Podrán implementar
1. **Sistema de tokens CSS** en `:root` aplicado a las 3 páginas del landing (`index.html`, `precios.html`, `faq.html`).
2. **Formulario con validación nativa completa**: `required`, `type="email"`, `pattern`, `<select>`, `<input type="checkbox">`.
3. **Workflow Git completo**: rama feature → commits → push → PR en GitHub → merge → `git pull` local.

## Glosario de Nuevos Términos

- **CSS Custom Property (Variable CSS):** Token definido con `--nombre` en `:root` y usado con `var(--nombre)`.
- **`:root`**: Selector que apunta al elemento raíz del documento HTML; equivale al `<html>` pero con mayor especificidad. Es el lugar estándar para definir variables CSS globales.
- **Validación nativa**: Reglas que el navegador valida sin JavaScript, declaradas en HTML (`required`, `type`, `pattern`, `minlength`).
- **`pattern`:** Atributo de `<input>` que recibe una regex para validar el formato del valor.
- **Rama (Branch):** Línea independiente de desarrollo en Git para trabajar en una funcionalidad sin afectar `main`.
- **GitFlow básico**: Convención donde `main` siempre está estable y desplegada, y cada feature se desarrolla en una rama aparte que se mergea vía Pull Request.
- **Pull Request (PR):** Solicitud en GitHub para fusionar los cambios de una rama a otra (típicamente a `main`) tras revisión del diff.
- **`git pull`**: Comando que descarga los cambios del remoto y los integra a tu rama local. Es `git fetch` + `git merge` en un solo paso.
