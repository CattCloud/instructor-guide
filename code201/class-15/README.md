> 📦 **Módulo 4:** Clase 15 de 16

# Clase 15: JSON y LocalStorage

## Resumen

Hasta ahora tu **Gestor de Plantillas para WhatsApp** funcionaba bien... hasta que recargabas la página. En ese instante, todo desaparecía. En esta clase resuelves ese problema de raíz: aprenderás a **guardar el estado de tu app en el navegador** para que tus plantillas sobrevivan al cierre de la pestaña.

Lo lograrás con dos herramientas nuevas: **`localStorage`**, el pequeño almacén que el navegador te presta, y **JSON**, el formato que convierte tus objetos en texto guardable y de vuelta. En M3 solo *leías* JSON que venía de una API; hoy lo *escribes* tú para persistir tus propios datos.

Este es el corazón del Módulo 4. Lo que construyas aquí —guardar, cargar y proteger el estado— es exactamente la base del Proyecto Integrador final.

---

## ¿Por qué te sirve?

- **Casi toda app web usa almacenamiento del cliente.** El carrito que no se vacía al recargar, el modo oscuro que recuerdas, el borrador de un mensaje: todo eso suele vivir en `localStorage`.
- **JSON es el idioma universal de los datos.** APIs, archivos de configuración, bases de datos: convertir entre objetos y texto JSON es una habilidad que usarás todos los días como desarrollador.
- **Una app que pierde datos no es profesional.** Persistir el estado es la diferencia entre un ejercicio de clase y un producto que la gente realmente usaría.

---

## 🎯 ¿Qué haremos en clase?

1. **Descubriremos por qué se pierden los datos** - Veremos en vivo cómo una recarga borra todo y por qué pasa.
2. **Guardarás el estado con `localStorage`** - Serializarás tu array de plantillas a texto y lo persistirás.
3. **Cargarás lo guardado al abrir la app** - Reconstruirás tus objetos con `JSON.parse` al arrancar.
4. **Blindarás la app contra datos corruptos** - Usarás `try/catch` para que nada rompa tu pantalla.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Serializar** un objeto a texto con `JSON.stringify` y **deserializar** texto a objeto con `JSON.parse`.
2. **Persistir** el estado de tu app en `localStorage` usando `setItem`, `getItem` y `removeItem`.
3. **Cargar** el estado guardado al iniciar la app y mantenerlo sincronizado tras cada cambio.
4. **Proteger** la carga de datos corruptos envolviendo `JSON.parse` en `try/catch`.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Tu proyecto `whatsapp-templates` con el CRUD funcionando en memoria (C13–C14).
- El objeto de estado (`state.plantillas`) y la función `render()` que dibuja la lista.
- El `try/catch` que viste en C12 (M3) para manejar errores.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- ¿Qué apps que usas a diario "recuerdan" cosas aunque cierres la pestaña? ¿Dónde crees que guardan eso?
- Si el navegador solo puede guardar texto, ¿cómo guardarías una lista de objetos?

### Herramientas

- [ ] **Tu repositorio `whatsapp-templates`** - Con el CRUD de C14 funcionando.
- [ ] **DevTools del navegador** - Revisa dónde está la pestaña *Application → Local Storage*.

### Lectura sugerida

- [MDN: Window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage){:target="_blank"} - Qué es y cómo se usa el almacén del navegador.
- [MDN: JSON.stringify()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify){:target="_blank"} - Cómo convertir objetos a texto.

---

## Glosario

| Término | Definición |
|---------|------------|
| **`localStorage`** | Almacén del navegador (clave→texto) que persiste aunque cierres la pestaña. Métodos: `setItem`, `getItem`, `removeItem`. |
| **JSON** | Formato de texto para representar datos. Es el puente entre tus objetos y lo que el navegador puede guardar. |
| **Serializar** | Convertir un objeto JavaScript en texto con `JSON.stringify` (para guardarlo o enviarlo). |
| **Deserializar** | Reconstruir un objeto a partir de texto JSON con `JSON.parse`. |
| **Persistencia** | Que los datos sobrevivan al cierre o recarga del navegador. |
| **Operador ternario** | `condicion ? valorSi : valorNo` — un `if/else` corto para asignar un valor. |

---

## Recursos Adicionales

- [MDN: JSON.parse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse){:target="_blank"} - Reconstruir objetos desde texto JSON.
- [MDN: Operador condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator){:target="_blank"} - El `if/else` en una línea.
