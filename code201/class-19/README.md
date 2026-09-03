> **Módulo 5:** Clase 3 de 4

# Clase 19: IA como Corrector + Sprint 2

## Resumen

Tu app ya busca canciones en un catálogo real y guarda playlists que sobreviven al recargar. Hoy aprendes la tercera cara de trabajar con IA: después de guía (Clase 17) y copiloto (Clase 18), hoy es **correctora**. Le entregarás tu código para que lo audite contra el contrato técnico y te diseñe un plan de pruebas con casos borde — pero el veredicto de cada prueba sale de tu navegador, no de su opinión: la ejecutas tú.

Con los hallazgos en mano replanificas el Sprint 2 y cierras el MVP: estadísticas, ordenamiento, confirmaciones con modal propio y resistencia a datos corruptos. Ya con tu app completa, defines **2 historias propias** — features que tú decides, como favoritos o filtros — para implementar antes del Demo Day. Y al final del día tu app deja de vivir solo en tu máquina: la publicas en GitHub Pages con una URL que podrás poner en tu CV.

---

## ¿Por qué te sirve?

- **El code review es rutina diaria en la industria.** Ningún equipo serio mergea código sin revisión; saber pedirla, leerla y filtrarla (también cuando viene de una IA) es una habilidad de trabajo real.
- **Los bugs viven en los casos borde.** La diferencia entre código de juguete y código profesional es qué pasa con la lista vacía, el dato corrupto y el nombre con espacios. Hoy los cazas sistemáticamente.
- **Proponer features es pensar producto.** Decidir qué vale la pena construir — y defenderlo — es lo que distingue a un desarrollador que ejecuta de uno que aporta.

---

## 🎯 ¿Qué haremos en clase?

1. **Veremos a la IA auditar código en vivo** - El instructor pedirá review y plan de pruebas sobre código real.
2. **Auditarás tu Sprint 1** - Review contra el contrato + pruebas de casos borde ejecutadas por ti.
3. **Definirás tus 2 HUs propias** - Features que tú eliges, redactadas con criterios y validadas.
4. **Cerrarás y publicarás** - Sprint 2 completo y deploy en GitHub Pages.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Auditar** código propio usando la IA como revisora, verificando sus hallazgos contra la app real.
2. **Diseñar y ejecutar** pruebas manuales de casos borde, clasificando hallazgos por severidad.
3. **Proponer** historias de usuario propias con valor de producto, dentro de un contrato técnico.
4. **Publicar** una aplicación web estática en GitHub Pages y verificarla en producción.

---

## ✅ Preparación para la Clase

### De clases anteriores

- **Sprint 1 cerrado** (requisito duro): búsqueda con estados de UI + playlists persistidas. Si te faltó en clase, ciérralo asíncrono antes de hoy.
- Frescos de M4: el modal `pedirConfirmacion` y el `.sort()` inmutable de C16 — hoy los reutilizas en tu propia app.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- Si la IA revisa tu código y dice "todo perfecto", ¿le crees? ¿Cómo lo comprobarías?
- De las ideas de inspiración del enunciado (favoritos, filtros, deshacer, modo oscuro), ¿cuál usaría de verdad la gente a la que le mostrarás tu app?

### Herramientas

- [ ] **VS Code + Live Server** - Tu app del Sprint 1 corriendo.
- [ ] **GitHub Copilot** - Extensión activa en VS Code (plan Free): hoy es tu auditor con acceso al proyecto.
- [ ] **Chat de IA** - Sesión activa para el brainstorm de tus HUs propias.
- [ ] **GitHub** - Acceso a Settings de tu repo (activarás Pages).

### Lectura sugerida

- [Documento del proyecto](../class-17/project/){:target="_blank"} - MVP, contrato y las ideas para tus HUs propias.
- [GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages){:target="_blank"} - Cómo funciona el deploy que harás hoy.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Code review** | Revisión sistemática de código en busca de problemas de correctitud, estilo y arquitectura. |
| **Caso borde** | Situación límite o inusual (vacío, corrupto, duplicado) donde suelen esconderse los bugs. |
| **Severidad** | Clasificación de un hallazgo: crítico (rompe la app), mayor (deuda o confusión), menor (pulido). |
| **Plan de pruebas** | Lista ordenada de verificaciones manuales con pasos y resultado esperado. |
| **Deploy** | Publicar la app en una URL accesible para cualquiera. Hoy: GitHub Pages. |

---

## Recursos Adicionales

- [Proyecto Integrador del Módulo 5](../class-17/project/){:target="_blank"} - Enunciado completo y rúbrica.
- [Guía de code review de Google](https://google.github.io/eng-practices/review/){:target="_blank"} - Cómo revisan código los equipos profesionales.
- [Try/Catch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"} - Referencia para tu manejo de datos corruptos.
