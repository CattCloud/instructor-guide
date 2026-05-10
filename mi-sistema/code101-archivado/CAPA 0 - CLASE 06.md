# CAPA 0 - CLASE 06: Diseño Web Responsive + DevTools

> **Objetivo de la Capa 0:** Extraer y abstraer toda la teoría, analogías e historia de los materiales originales del bootcamp (Lab 06, Clase 06, Facilitador 06) para tener una base conceptual pura antes de crear los Momentos.

---

### CONCEPTO: Responsive Web Design (Diseño Adaptable)
Es la técnica de diseño y desarrollo web que busca que una sola página web se adapte, reorganice y escale automáticamente para verse y funcionar perfectamente en cualquier tamaño de pantalla (celulares pequeños, tablets, laptops, monitores ultrawide). La meta es "escribir código una vez, que se vea bien en todas partes".

### HISTORIA: El artículo que cambió la web (2010)
Antes de 2010, las empresas grandes construían **dos sitios web distintos**: uno para computadoras (`www.sitio.com`) y otro exclusivo para teléfonos (`m.sitio.com`). Era carísimo y se rompía fácil.
El 25 de mayo de 2010, el diseñador Ethan Marcotte publicó un artículo histórico en *A List Apart* donde acuñó el término "Responsive Web Design". Postuló que podíamos usar un solo HTML fluido que detectara la pantalla y se mutara a sí mismo. Revolucionó la industria obligando a pensar en proporciones y no en medidas fijas.

### CONCEPTO: DevTools (Herramientas de Desarrollador)
Son un panel de utilidades avanzadas que ya vienen integradas, ocultas por defecto, dentro de los navegadores modernos (como Google Chrome o Edge). Permiten a un programador inspeccionar los cimientos de cualquier página web ajena o propia, leer su HTML y CSS, alterar código en vivo temporalmente para experimentar, y simular cómo se vería la web en decenas de celulares diferentes. Cambios en DevTools son temporales y se borran al recargar (`F5`).

### ANALOGÍA: DevTools como "Rayos X"
Así como un médico usa los rayos X para ver el esqueleto y los órganos dentro del cuerpo de un paciente vivo sin tener que abrirlo con un bisturí; DevTools te da "visión de rayos X" para ver exactamente qué bloques de HTML y qué reglas de CSS conforman la estructura de un sitio web terminado, sin tener acceso a los archivos de código fuente originales del programador.

### CONCEPTO: Unidades Absolutas vs. Relativas
*   **Absolutas (`px`):** Los píxeles son fijos, duros, no cambian nunca. Un `div` de `800px` siempre pedirá 800 píxeles así la pantalla mida solo 300 píxeles, causando un molesto scroll horizontal.
*   **Relativas (`rem`, `%`, `vh`, `vw`, `em`):** Son unidades elásticas que calculan su tamaño en proporción a algo más grande. Escalan según la pantalla o las preferencias del usuario.

### ANALOGÍA: Unidades Relativas como "Recetas con proporciones"
Las unidades absolutas (píxeles) son como decir "Añade exactamente 100 gramos de sal", lo cual es útil para una cena de dos personas, pero arruinará un banquete para 100 personas.
Las unidades relativas son como decir "Añade 2 partes de sal por cada 10 partes de agua" (`%` o `rem`). La proporción funciona mágicamente, ya sea que cocines un plato hondo pequeño (celular) o una olla gigante industrial (pantalla de escritorio).

### CONCEPTO: `rem` (Root EM)
Unidad relativa tipográfica y de espacios por excelencia. Depende matemáticamente del "Tamaño de fuente de la raíz" del navegador (`html`).
Por defecto, casi todos los navegadores definen que `1rem = 16px`.  
Por tanto: `2rem = 32px`, `0.5rem = 8px`. Su enorme ventaja es que respeta si una persona con problemas de visión aumenta la letra de su navegador a `20px` por defecto, haciendo que todo el sitio escale automáticamente en proporción sin romperse.

### CONCEPTO: Viewport y Unidades de Viewport (`vh`, `vw`)
El "Viewport" es literalmente "el rectángulo de cristal de la ventana por donde estás mirando la página web", sin contar la barra de pestañas, de marcadores o el menú de inicio de Windows.
*   **`vw` (Viewport Width):** 1vw equivale al 1% del *ancho* de la pantalla visible.
*   **`vh` (Viewport Height):** 1vh equivale al 1% de la *altura* de la pantalla visible (ej. `min-height: 100vh` garantiza que una sección ocupe toda la altura de tu monitor, sea celular o TV).

### CONCEPTO: Media Queries
Son "bloques condicionales" en CSS que le hacen preguntas al navegador antes de aplicar estilos. 
Su sintaxis base es `@media (condición)`. Si la condición resulta ser verdadera (ej: *¿Es tu pantalla más ancha que 768px?*), entonces el navegador enciende o aplica el bloque de CSS que está contenido en las llaves en su interior.

### ANALOGÍA: Media Queries como un "Termostato inteligente"
Un termostato tiene sensores y reglas lógicas: *Si la temperatura sube de 25°C, activa el aire acondicionado. Si baja de 15°C, activa la calefacción.*
Las Media Queries son el termostato de tu CSS: "*Si la ventana del usuario se comprime a menos de 500 píxeles, esconde la imagen gigante y reduce las letras.*". Sin ellas, el diseño tendría una sola "temperatura" fija que quemaría o congelaría a algunos usuarios.

### CONCEPTO: Mobile-First (Estrategia de Diseño)
Es una filosofía de programación que te obliga a cambiar el orden lógico en el que escribes tu código CSS. En Mobile-First, escribes por defecto el CSS asumiendo que es una pantalla de celular pequeña (diseño vertical, botones grandes, un solo bloque). 
Solo *después* de terminar la versión móvil, utilizas Media Queries con condiciones `min-width` para ir añadiendo "capas extra" de complejidad o dividir el contenido en varias columnas conforme consigues pantallas más anchas (tablets y luego computadoras).

### ANALOGÍA: Mobile-first como "Empacar para un viaje"
Imagina empacar. Es inmensamente más fácil agarrar una maleta diminuta de cabina (celular), meter primero estrictamente lo esencial (ropa base, cepillo, pasaporte) y, si luego te regalan una maleta gigantesca de 30KG (pantalla Desktop), traspasar lo esencial y rellenar el ancho extra con cosas grandes y lujosas (varias columnas de contenido, animaciones hover, márgenes enormes). 
Empezar "Desktop-first" es agarrar esa maleta colosal llena, y a las malas intentar aplastarla y sacarle cosas cortándolas para que quepan obligadas en la maletita pequeña del celular.

---
**CONCEPTOS CSS TÉCNICOS RESUMIDOS DEL LAB:**
- `max-width: XXXpx;` : *Crezco todo lo que me pidas usando porcentajes, pero llego a mi tope artificial límite y ya no ensancho más aunque siga sobrando pantalla.*
- `@media (prefers-color-scheme: dark)` : Pregunta al Sistema Operativo (Windows/iOS) del usuario si la persona tiene activado el MODO OSCURO nocturno, para repintar la web a colores amables con la vista.
- Evento `:hover` : Prohibido o peligroso usarlo como concepto central en móviles porque el "mouse invisible" (dedo) no se queda suspendido leyendo; en teléfonos un toque sobre pantalla activa directamente clics, no "flota".
