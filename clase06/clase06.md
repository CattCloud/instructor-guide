> 📦 **Módulo 2:** Clase 2 de 4

# Clase 06: Diseño Web Responsive + DevTools

## Resumen

Tu sitio web se ve genial en tu laptop, pero ¿qué pasa cuando alguien lo abre desde su celular? En esta clase descubrirás cómo hacer que MyLinks se adapte automáticamente a cualquier pantalla—desde un teléfono pequeño hasta un monitor ultrawide.

Aprenderás a usar Chrome DevTools, las herramientas de desarrollo que los profesionales usan para inspeccionar, debuggear y optimizar sitios web. Verás tu página como la ve un usuario de iPhone, un usuario de tablet, o cualquier dispositivo que imagines.

Al final de la clase, tu proyecto MyLinks será completamente responsive: se verá bien en móvil, tablet y desktop, usando unidades relativas y media queries.

---

## ¿Por qué te sirve?

- **Más del 60% del tráfico web viene de dispositivos móviles.** Si tu sitio no funciona en celular, pierdes a la mayoría de tus visitantes. Google incluso penaliza en su ranking a sitios que no son mobile-friendly.

- **DevTools es como tener rayos X para sitios web.** Puedes ver el CSS aplicado a cualquier elemento, modificarlo en tiempo real, y entender por qué algo se ve de cierta manera. Es la herramienta #1 para resolver problemas de diseño.

- **Las unidades relativas hacen tu código más flexible y mantenible.** En lugar de valores fijos que se rompen en diferentes pantallas, aprenderás a usar unidades que se adaptan proporcionalmente.

---

## 🎯 ¿Qué haremos en clase?

1. **Explorarás Chrome DevTools** - Abrirás el panel de desarrollo, inspeccionarás elementos, y simularás diferentes dispositivos.

2. **Transformarás píxeles a unidades relativas** - Cambiarás valores fijos (`px`) por unidades flexibles (`rem`, `%`, `vh/vw`) que se adaptan a cualquier pantalla.

3. **Crearás tu primera media query** - Escribirás reglas CSS que solo se activan en ciertos tamaños de pantalla.

4. **Probarás tu diseño en múltiples dispositivos** - Usarás el modo responsive de DevTools para verificar que todo funcione.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Inspeccionar** elementos de una página web usando Chrome DevTools
2. **Utilizar** el modo responsive de DevTools para simular diferentes dispositivos
3. **Aplicar** unidades relativas (`rem`, `%`, `vh`, `vw`) en lugar de valores fijos
4. **Crear** media queries para adaptar el diseño a diferentes tamaños de pantalla
5. **Identificar** breakpoints comunes para móvil, tablet y desktop

---

## ✅ Preparación para la Clase

### Tu Proyecto Hasta Ahora

Antes de continuar, verifica que tienes:

- [ ] Repositorio MyLinks clonado y conectado a GitHub
- [ ] Estructura HTML básica con `index.html`
- [ ] Al menos un commit y push exitoso
- [ ] CSS básico aplicado (colores, tipografía)

### Herramientas

- [ ] **Google Chrome** - Usaremos Chrome DevTools (Firefox también funciona, pero seguiremos con Chrome)
- [ ] **VS Code + Live Server** - Para ver cambios en tiempo real
- [ ] **Terminal** - Para hacer commits de tu progreso

### Preparación

- [ ] Abre tu proyecto MyLinks en VS Code
- [ ] Verifica que Live Server funciona (click derecho → "Open with Live Server")
- [ ] Abre Chrome y familiarízate con `Ctrl+Shift+I` (o `Cmd+Option+I` en Mac) para abrir DevTools

---

## Glosario

| Término | Definición |
|---------|------------|
| **Responsive** | Diseño que se adapta automáticamente a diferentes tamaños de pantalla |
| **Viewport** | El área visible de una página web en el navegador |
| **Media Query** | Regla CSS que aplica estilos solo cuando se cumple una condición (ej: ancho de pantalla) |
| **Breakpoint** | Punto de quiebre donde el diseño cambia (ej: 768px para tablets) |
| **DevTools** | Herramientas de desarrollo integradas en el navegador para inspeccionar y depurar |
| **rem** | Unidad relativa basada en el tamaño de fuente del elemento raíz (root) |
| **em** | Unidad relativa basada en el tamaño de fuente del elemento padre |
| **vh/vw** | Viewport Height/Width - porcentaje de la altura/anchura de la ventana |
| **Mobile-first** | Estrategia de diseño que empieza por la versión móvil y escala hacia arriba |

---

## Recursos Adicionales

- [Chrome DevTools Docs](https://developer.chrome.com/docs/devtools/){:target="_blank"} - Documentación oficial
- [CSS Units Explained](https://www.w3schools.com/cssref/css_units.php){:target="_blank"} - Referencia de unidades CSS
- [Media Queries Cheat Sheet](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/){:target="_blank"} - Breakpoints comunes
- [Responsive Design Mode - Firefox](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/){:target="_blank"} - Alternativa en Firefox
