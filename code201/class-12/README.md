> 📦 **Módulo 3:** Clase 12 de 12

# Clase 12: Manejo de Errores y Estados (cierre del Módulo 3)

## Resumen

La Clase 12 cierra el **Módulo 3** haciendo **robusta** la Pokédex. En C11 la app ya traía datos reales, pero se rompía ante cualquier fallo (un nombre inexistente, una caída de red). Hoy los estudiantes aprenden a **manejar errores** con `try/catch/finally`, a **lanzar errores propios** con `throw`, a detectar respuestas HTTP fallidas con `response.ok`, y a comunicar al usuario estados claros de **carga** y **error**.

Además, por ser la clase con menos conceptos nuevos de JavaScript y la **entrega evaluada** del módulo, se introduce **Markdown** como habilidad de documentación: los estudiantes escriben el `README.md` del proyecto. Es la primera vez que el curso exige un README, y desbloquea esa práctica para M4 y M5.

Es el **lab evaluado** del Módulo 3, calificado con una rúbrica de 5 criterios × 20 pts. También incluye el **test diagnóstico** del módulo.

Se utilizan dos recursos fundamentales:

1. **Guía de Lectura y Debate:** criterios para decidir cuándo capturar un error y cuándo dejarlo propagar; buenos mensajes de error.
2. **Guía de Laboratorio:** robustecer la Pokédex con `try/catch/finally`, estados de UI y documentación en Markdown.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Refuerzo Práctico** | 20 min | El fallo de C11 (buscar algo inexistente). ¿Por qué se rompe? |
| **2. Debate y Demo** | 20 min | `try/catch`, `response.ok`, `finally`. Demo en vivo del error manejado. |
| **Break** | 10 min | Descanso previo al lab. |
| **3. Laboratorio** | 100 min | Robustez + estados + README. Checkpoints (25', 50', 75', 95'). |
| **4. Síntesis + Test** | 20 min | Cierre del módulo y test diagnóstico M3. |

---

## Resultados Esperados

Al finalizar esta clase, los estudiantes podrán construir aplicaciones que no se rompen ante fallos y comunican su estado al usuario.

### Podrán hacer

- Capturar errores con `try/catch` y lanzar los propios con `throw new Error()`.
- Validar `response.ok` para detectar respuestas HTTP fallidas (404).
- Usar `finally` para garantizar que la UI quede consistente.

### Podrán explicar

- Por qué `fetch` no falla automáticamente ante un 404.
- La diferencia entre los estados de UI: cargando, éxito, error y "no encontrado" (vacío).
- Por qué "no encontrado" (404) es un resultado vacío y no un error.
- Cuándo conviene capturar un error y cuándo dejar que se propague.

### Podrán implementar

- Una Pokédex robusta con spinner y mensajes de error en la búsqueda y la carga.
- Mensajes de error claros con `throw new Error(...)`.
- Un `README.md` del proyecto escrito en Markdown.

---

## 🛡️ De frágil a robusta

| Sin manejo (C11) | Con manejo (C12) |
|---|---|
| Nombre inexistente → app rota | Aviso neutro **"no se encontró"** (estado vacío, no error) |
| Red caída → pantalla en blanco | Mensaje de **error**, app viva |
| Sin feedback de carga | **Spinner** que aparece y **siempre** desaparece (`finally`) |

## 📄 Markdown y el README

Se enseña Markdown (títulos, listas, links, código) para documentar el proyecto. **Es la primera clase que pide README** — antes (C09-C11) no, porque Markdown aún no se había enseñado.

## Glosario de Nuevos Términos

- **try/catch:** estructura que captura excepciones sin detener el programa.
- **throw:** lanza manualmente un error con un mensaje.
- **finally:** bloque que se ejecuta siempre, haya error o no.
- **response.ok:** booleano; `false` si la respuesta HTTP fue un error.
- **Estado de UI:** lo que el usuario ve en cada momento (cargando / éxito / error / no encontrado).
- **Markdown:** formato de texto ligero para documentar (usado en `README.md`).
