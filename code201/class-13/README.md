> 📦 **Módulo 4:** Clase 13 de 16

# Clase 13: Modelado de Datos y Manipulación de Texto

## Resumen

Arrancas el **Módulo 4** construyendo un **Gestor de Plantillas para WhatsApp**, la app que acompañará tus próximas 4 clases. Hoy montas su base: modelas cada plantilla como un objeto con `class`, centralizas todo en un único **estado** y dibujas la pantalla desde ahí con el patrón `render()`.

El corazón de la clase es **manipular texto**. Aprenderás los métodos de String que todo desarrollador usa a diario: limpiar espacios, normalizar mayúsculas, partir y recortar cadenas, y reemplazar variables como `{nombre}` por valores reales. Con eso convertirás una plantilla en un mensaje final listo para enviar. Además registrarás la fecha de creación de cada plantilla con `Date`.

> 🧠 Hoy todo vive en memoria: si recargas, se pierde. Eso es a propósito — la persistencia llega en C15.

---

## ¿Por qué te sirve?

- **El texto es el 90% de lo que manipula una app real.** Nombres, mensajes, búsquedas, formularios: casi todo lo que escribe un usuario pasa por métodos de String antes de guardarse o mostrarse.
- **WhatsApp Business y herramientas de soporte usan plantillas con variables.** Reemplazar `{nombre}` por un valor real es exactamente lo que hacen las empresas para enviar miles de mensajes personalizados.
- **Modelar datos con clases y un estado central es la base de toda app moderna.** Antes de aprender un framework, dominar "cambias el estado → redibujas" te da el modelo mental correcto.

---

## 🎯 ¿Qué haremos en clase?

1. **Modelaremos la plantilla** - Crearás la clase `Template` y un estado central que sea la verdad de tu app.
2. **Dibujarás desde el estado** - Implementarás `render()`: limpiar y redibujar la lista cada vez que cambian los datos.
3. **Limpiarás y normalizarás texto** - Usarás métodos de String para quitar espacios, unificar hashtags y validar campos.
4. **Construirás el mensaje final** - Reemplazarás variables como `{nombre}` y mostrarás una vista previa recortada.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Modelar** datos con una clase (`class`) y centralizar la app en un único estado.
2. **Implementar** el patrón `render()` para generar la interfaz a partir del estado.
3. **Aplicar** métodos de String para limpiar, normalizar y validar lo que escribe el usuario.
4. **Construir** un mensaje final sustituyendo variables dentro de una plantilla.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Sintaxis de clases (`class`, `constructor`, `this`) que cerraste en C08 (M2).
- Captura de input desde formularios (`input.value`, `addEventListener('submit', ...)`, `event.preventDefault()`).
- Tailwind por CDN para dar estilo rápido (C08).
- Cuenta de GitHub con un repositorio listo para crear `whatsapp-templates`.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- ¿Qué tareas repetitivas de mensajería (saludos, confirmaciones, recordatorios) te gustaría automatizar con plantillas?
- Si un usuario escribe `  Ventas ` con espacios y mayúsculas, ¿cómo lograrías que siempre se guarde igual?

### Herramientas

- [ ] **Visual Studio Code** - Editor con Live Server para ver cambios en el navegador.
- [ ] **GitHub** - Crea un repositorio llamado `whatsapp-templates`.

### Lectura sugerida

- [String - métodos (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String){:target="_blank"} - Catálogo de métodos para manipular texto.
- [Date (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date){:target="_blank"} - Cómo trabajar con fechas en JavaScript.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Estado central** | Único objeto/lista que es la "verdad" de la app. Si algo no está ahí, no existe en pantalla. |
| **Patrón render** | Limpiar el contenedor, recorrer el estado y crear un nodo por cada dato. |
| **Métodos de String** | Funciones que trae todo texto: `.trim()`, `.toLowerCase()`, `.includes()`, `.replace()`, `.split()`, `.slice()`. |
| **Normalizar** | Transformar una entrada para que distintas variantes queden iguales (ej. `Ventas`, ` ventas`, `#VENTAS` → `#ventas`). |
| **Sustitución de variables** | Reemplazar marcadores como `{nombre}` por un valor real con `.replaceAll()`. |
| **Objeto `Date`** | Representa una fecha/hora. `new Date()` da el momento actual; `.toLocaleDateString("es-PE")` lo vuelve texto legible. |

---

## Recursos Adicionales

- [String.prototype.replaceAll() (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll){:target="_blank"} - Reemplazar todas las apariciones de un texto.
- [Plantillas literales (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals){:target="_blank"} - Construir cadenas con `${...}` dentro de comillas invertidas.
- [toLocaleDateString() (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString){:target="_blank"} - Formatear fechas según la región.
