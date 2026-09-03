> **Módulo 5:** Clase 1 de 4

# Clase 17: Ideación y Planificación con IA

## Resumen

Llegaste al último módulo de Code 201, donde todo lo aprendido se combina en un proyecto final: **Mi Setlist**, una app que busca canciones en el catálogo real de iTunes y las organiza en playlists que sobreviven al recargar la página. Pero este módulo trae un cambio de reglas: el lab ya no te da el código. Desde hoy trabajas como un desarrollador junior con un copiloto de IA: el curso te da el enunciado y el contrato técnico, y tú construyes lo demás.

En esta primera clase no escribes código del producto. Aprenderás a **planificar con la IA**: descomponer el MVP en historias de usuario, criticar lo que la IA te proponga y armar tu plan de dos sprints. Al final tendrás tu repositorio configurado y una visión clara de qué construir en la próxima sesión.

---

## ¿Por qué te sirve?

- **La mayoría de los desarrolladores ya programa con asistentes de IA.** Las encuestas de la industria (Stack Overflow, GitHub) lo confirman año tras año: saber dirigir y validar una IA es hoy parte del trabajo, no un extra.
- **El que no sabe pedir, recibe cualquier cosa.** Un prompt sin contexto genera código genérico que no encaja en tu proyecto. Aprender a estructurar prompts con contexto y restricciones es la habilidad que separa "copiar de la IA" de "trabajar con la IA".
- **Planificar antes de codear es lo que termina proyectos.** Descomponer un enunciado en historias pequeñas y verificables es el lenguaje común de los equipos ágiles, y es lo primero que harás en cualquier trabajo.

---

## 🎯 ¿Qué haremos en clase?

1. **Conoceremos el proyecto** - El instructor presentará Mi Setlist, su MVP y el contrato técnico que gobierna el módulo.
2. **Verás planificar con IA en vivo** - El instructor modelará el ciclo prompt → crítica → re-prompt frente al grupo.
3. **Derivarás tus historias de usuario** - Con la IA, descompondrás el MVP en historias con criterios verificables.
4. **Configurarás tu repositorio** - Estructura ESM, plan de sprints y primer commit.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Estructurar** prompts efectivos con contexto, tarea, formato y restricciones.
2. **Evaluar** críticamente el output de una IA contra un contrato técnico y un alcance definido.
3. **Descomponer** un MVP en historias de usuario con criterios de aceptación observables.
4. **Configurar** un repositorio con arquitectura de módulos ESM y documentación de planificación.

---

## ✅ Preparación para la Clase

### De clases anteriores

- La arquitectura del Módulo 4 fresca: estado central + `render()`, `localStorage` con `try/catch`, y sobre todo los **módulos ESM** de la Clase 16 — tu proyecto final usa exactamente esa estructura.
- Tu cuenta de **GitHub** activa y conectada a tu Git local.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- ¿Alguna vez le pediste algo a una IA y te respondió algo inservible? ¿Qué le faltó a tu pedido?
- Piensa en tu playlist favorita: si tuvieras que modelarla en código, ¿qué datos tiene la playlist y qué datos tiene cada canción?

### Herramientas

- [ ] **GitHub** - Sesión iniciada, lista para crear un repositorio nuevo.
- [ ] **VS Code + Live Server** - Carpeta de trabajo lista.
- [ ] **Herramienta de IA** - Cuenta activa en la herramienta indicada por tu instructor (versión gratuita es suficiente).

### Lectura sugerida

- [Documento oficial del proyecto](./project/){:target="_blank"} - Enunciado, MVP, contrato técnico y rúbrica del Módulo 5.
- [Qué es una historia de usuario](https://www.atlassian.com/es/agile/project-management/user-stories){:target="_blank"} - Introducción corta al formato "Como… quiero… para…".

---

## Glosario

| Término | Definición |
|---------|------------|
| **Prompt** | Instrucción que le das a una IA. Uno bueno tiene contexto, tarea, formato y restricciones. |
| **Contrato técnico** | Reglas de stack y arquitectura del proyecto. Se incluye en los prompts para que la IA proponga soluciones compatibles. |
| **Historia de usuario** | Funcionalidad descrita desde la perspectiva de quien la usa, con criterios de aceptación verificables. |
| **Criterio de aceptación** | Condición observable en pantalla que define "terminado". Describe resultados, no código. |
| **Sprint** | Iteración de trabajo con meta concreta. En este módulo: Sprint 1 (Clase 18) y Sprint 2 (Clase 19). |
| **MVP** | Minimum Viable Product: la versión más simple que cumple el valor central prometido. |

---

## Recursos Adicionales

- [Proyecto Integrador del Módulo 5](./project/){:target="_blank"} - Enunciado completo y rúbrica.
- [INVEST: buenas historias de usuario](https://www.agilealliance.org/glossary/invest/){:target="_blank"} - Los 6 atributos de una buena historia.
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html){:target="_blank"} - Documentación oficial de la API que consumirá tu app.
