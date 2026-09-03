> 📦 **Módulo 4:** Clase 16 de 16

# Clase 16: Módulos (ESM) y Cierre del Proyecto

## Resumen

Llegaste al último laboratorio del **Gestor de Plantillas para WhatsApp**. Tu app ya crea, edita, filtra y persiste plantillas; hoy la dejarás lista para mostrar y, sobre todo, la organizarás como un profesional. Aprenderás **módulos ESM** (`export`/`import`): en lugar de un solo archivo lleno de variables globales, repartirás tu código en piezas que se comunican entre sí.

Además mejorarás la experiencia de usuario con detalles que separan un prototipo de una app de verdad: un **modal de confirmación propio** antes de borrar (nada de cuadros nativos feos), un **estado vacío amigable** que guía al usuario en vez de mostrarle una pantalla en blanco y la opción de **ordenar** la colección por fecha con `.sort()`.

Al cerrar, integrarás todo lo del módulo en una entrega completa: tus propias historias de usuario, un README, el despliegue en GitHub Pages y una demo en vivo.

---

## ¿Por qué te sirve?

- **Casi toda app frontend moderna usa módulos ESM.** React, Vue, Vite y los navegadores actuales se basan en `import`/`export`. Saber repartir tu código es el estándar profesional, no un lujo.
- **Las confirmaciones evitan desastres reales.** Gmail, Notion y WhatsApp te preguntan antes de borrar. Un clic accidental no debería destruir el trabajo de nadie.
- **Un código organizado es un código mantenible.** Separar estado, persistencia e interfaz en archivos distintos es lo que permite que un equipo trabaje sin pisarse y que tú entiendas tu propio proyecto meses después.

---

## 🎯 ¿Qué haremos en clase?

1. **Construiremos un modal de confirmación** - Reemplazarás el cuadro nativo por uno propio con HTML y Tailwind.
2. **Manejarás los estados vacíos** - Distinguirás "no hay nada" de "el filtro no encontró nada".
3. **Modularizarás con ESM** - Repartirás el código en `state.js`, `storage.js`, `ui.js` y `app.js`.
4. **Ordenarás la colección** - Con un selector y `.sort()`, mostrarás las plantillas por fecha (más recientes o más antiguas).
5. **Cerrarás el proyecto** - Integrarás tus HUs, documentarás, desplegarás y prepararás tu demo.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Construir** un modal de confirmación reutilizable que guarde la acción pendiente en una variable.
2. **Diferenciar** los dos estados vacíos de una lista y mostrar un mensaje claro para cada uno.
3. **Modularizar** una app con `export`/`import` y `<script type="module">`, sin variables globales.
4. **Ordenar** la colección por fecha con `.sort()` y un comparador, copiando el array antes de mutarlo.
5. **Verificar** la sincronización completa estado ↔ almacenamiento ↔ interfaz y preparar una demo del proyecto.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Tu **Gestor de Plantillas** de C15 funcionando: crear, editar, eliminar, filtrar y persistir con `LocalStorage`.
- Las funciones de estado (`plantillasVisibles`, contar) y de persistencia (`guardar`, `cargar`) operativas.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- Cuando una app tiene cientos de líneas en un solo archivo, ¿cómo encuentras el código que necesitas cambiar?
- ¿Qué pasa cuando borras algo importante por accidente? ¿Cómo te protege una buena app?

### Herramientas

- [ ] **Tu repositorio `whatsapp-templates`** - Con el código de C15 funcionando.
- [ ] **Live Server (VS Code) o `python -m http.server`** - Los módulos ESM **no** funcionan abriendo el HTML con doble clic (`file://`); necesitas un servidor local.

### Lectura sugerida

- [MDN: Módulos de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules){:target="_blank"} - Cómo funcionan `export` e `import` en el navegador.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Módulos ESM** | Sistema para repartir el código en archivos que comparten cosas con `export` y las usan con `import`. |
| **`export` / `import`** | `export` expone algo de un archivo; `import` lo trae en otro indicando su ruta. |
| **`<script type="module">`** | Activa los módulos: cada archivo tiene su propio ámbito y el orden de carga deja de importar. |
| **Modal** | Ventana de confirmación propia (HTML + Tailwind) que se muestra u oculta alternando una clase. |
| **Estado vacío** | Lo que ve el usuario cuando no hay datos: un mensaje claro en vez de una pantalla en blanco. |
| **`.sort()` + comparador** | Ordena un array con una función `(a, b)`; como `.sort()` muta, se copia con `[...]` antes de ordenar. |

---

## Recursos Adicionales

- [MDN: `<script type="module">`](https://developer.mozilla.org/es/docs/Web/HTML/Element/script/type/module){:target="_blank"} - Por qué los módulos necesitan un servidor local.
- [web.dev: Modal accesible](https://web.dev/articles/building/a-dialog-component){:target="_blank"} - Buenas prácticas para ventanas de confirmación.
