# FLUJO DE PRESENTACION - CLASE 06

> **Resumen de la Clase:** En esta sesión, los alumnos aprenderán a hacer que el proyecto MyLinks deje de romperse en pantallas pequeñas. Empezaremos descubriendo cómo auditar páginas profesionales usando DevTools como simulador de dispositivos. Luego, abordaremos de raíz el problema de usar unidades fijas (Píxeles), reemplazándolas paso a paso por unidades Relativas (`%`, `vw/vh`, `rem`) logrando Cajas y Tipografías elásticas. Finalmente, aprenderemos a condicionar el diseño general usando Media Queries bajo el paradigma Mobile-First.
> 

## MOMENTO 1: Bienvenida y el Problema de Probar

> **Objetivo del momento:** Conectar con la frustración logística de que el proyecto solo se ve bien en su propia computadora, e introducir la necesidad vital de una herramienta de simulación profesional (**DevTools**) antes de escribir código.
> 

### **1.1 La Bienvenida**

**EN PANTALLA: PRESENTACIÓN CANVA - Slide de Bienvenida y Título “Clase 06”.**

> **La acción guiada:**
1. Da la bienvenida a los alumnos con energía.
2. Reconoce el logro de la clase anterior: *“¡Felicidades, la clase pasada logramos clonar su primer repositorio desde GitHub y conectarlo a su computadora local! Ahora estamos listos para trabajar visualmente sobre ese proyecto.”*
**PREGUNTA**
> 
> - Cuantos lograron personalizar su pagina MyLinks y subieron sus cambios con exito a su repositorio en GitHub?
> - Cuantos lograron subir su proyecto 1 a GITHUB? Ya esta deployado y listo para que cualquier persona que entre a internet lo vea?

### 1.2 El Problema Táctico

**EN PANTALLA: MOSTRAR UNA PAGINA WEB QUE HICIMOS**

> **Tu explicación teórica precisa:**
“Quiero que se fijen en sus pantallas ahora mismo. Su diseño se ve espectacular, los botones están en su lugar y las imágenes tienen el tamaño perfecto. Pero aquí viene algo que todos solemos olvidar: ustedes están maquetando sobre una pantalla ancha, probablemente de 15, 20 o 24 pulgadas.
> 
> 
> Sin embargo, sabemos que más del 60% del tráfico mundial hoy en día no proviene de laptops… proviene de celulares. ¿Cómo sabemos que ese diseño tan bonito por el que se amanecieron programando, no se va a ver diferente , o peor aún, totalmente desparramado si lo abre un usuario en un iPhone de 5 pulgadas?”
> 

> **Pregunta de calibración:***“**Si un cliente les pide ahorita mismo que su página que acaban de terminar se vea perfecta en un iPhone, en una Tablet Samsung y en un monitor gigante de diseñador… ¿Qué se les ocurre que tendríamos que hacer hoy para probar si el código funciona si solo tienen la laptop prestada que están usando ahora mismo?**”*
> 

*(Espera un par de risas, ideas locas o respuestas afirmando que es logísticamente un dolor de cabeza)*

**EN PANTALLA: CÁMARAS Y CHAT DE TEAMS.**

> **Tu explicación teórica precisa:**
“Exacto, es logísticamente y económicamente imposible tener 10 modelos de celulares y 5 tablets distintas apiladas en nuestro escritorio solo para ir probando. Y como desarrolladores profesionales, no podemos estar publicando código a la suerte, enviándonos el enlace a nuestro propio teléfono a cada rato para ver si por milagro no ‘se rompió’ nada.
> 
> 
> A este concepto de ‘romperse’ le llamamos técnicamente cuando la estructura cuadrada pensada para PC literalmente no entra en la pantalla estrecha del celular. El navegador entonces genera una horrible barra de scroll horizontal en la parte inferior, obligando al usuario a deslizar a la derecha para poder leer lo que hiciste. Eso, hoy en día, significa que tu usuario abandonará tu sitio web en 3 segundos.”
> 

### 1.3 Transición a DevTools

**La acción guiada:**
1. Haz una pausa dramática de 2 segundos.
2. Pasa a revelar la solución de este momento introductorio.

> **Tu explicación teórica precisa:**
“La buena noticia, la excelente noticia, es que la respuesta para este dolor de cabeza no cuesta dinero, ni descargar aplicaciones de echo ya lo vimos.
Todas las computadoras (literalmente todas) traen una funcionalidad integrada en sus navegadores. Ya la hemos usado antes, muy brevemente, para auditar los”Paddings” y “Margins” en nuestras cajas. Se llama DevTools (Herramientas de Desarrollador). Pero hoy, vamos a dejar de usarla por encima, y vamos a aprender a usarla como un **simulador profesional de dispositivos**.”
> 

## MOMENTO 2: DevTools

> **Objetivo del momento:** 
1. Desmitificar que un diseño responsivo es “magia”. 
2. Analizar cómo una web real y profesional  reacciona según la pantalla que la mire usando DevTools. 
3. Luego, golpear la realidad mostrando una web propia mal construida (‘página rota’) para detonar la urgencia de aprender sobre unidades relativas.
> 

### **2.1 Qué es y Cómo abrirlo**

**EN PANTALLA: VISOR DE NAVEGADOR - Pestaña en YouTube (o página similar) versión Escritorio maximizada.**

**La acción guiada:**
1. Abre YouTube.com frente a los estudiantes en pantalla completa.
2. Abre DevTools usando `F12` (o click derecho -> Inspeccionar). Asegúrate de estar en la pestaña Elements.

> **Pregunta de calibración:***“Equipo, miren bien esta herramienta de la derecha. En clases anteriores usamos esta misma ventana llena de código alienígena para revisae: nuestro Box Model (Paddings y Margins) , codigo CSS y HTML. **¿Alguien lo siguió usando durante su semana de codificación o para revisar otras página hoy? ¿Qué les pareció la experiencia?”***
> 

*(Permite 1 a 2 minutos de charla para que se sientan cómodos recordando que ya conocen la herramienta)*

> **Tu explicación teórica precisa:**
“Hoy no usaremos DevTools solamente para espiar los márgenes de una caja. Hoy vamos a activar su superpoder oculto: el **Simulador de Dispositivos**.”
> 

### **2.2 Dinámica “El Simulador en Acción”**

**EN PANTALLA: CHROME DEVTOOLS - El instructor hace clic en el ícono de “Device Toolbar” (el ícono de celular y tablet pequeñito junto a la pestaña Elements).**

> **La acción guiada:**
1. Al activar el ícono, la pantalla de YouTube se encogerá dramáticamente adoptando proporciones verticales.
2. En la barra superior del simulador web, despliega la lista y selecciona `iPhone 12 Pro` o `Samsung Galaxy S20`.
3. Haz scroll hacia abajo demostrando que YouTube sigue siendo totalmente funcional, pero su diseño es 100% distinto al de la computadora de hace 1 minuto.
> 

### 2.3 Pregunta de Análisis y “Qué es Responsive”

> **Pregunta de calibración:***“**Quiero que se pongan las gafas de analistas. Miren cómo se ve YouTube ahora mismo en este celular simulado frente a cómo se veía hace un momento en la pantalla de mi laptop. ¿Qué cosas específicas en el diseño o en los botones acaban de desaparecer, moverse de lugar o cambiar rotundamente?**”*
> 

*(Espera y anímalos a que noten en el chat cómo el menú lateral izquierdo lateral desapareció, o cómo la grilla de videos ya no es horizontal sino que los videos se apilaron uno debajo de otro ocupando todo el ancho de la caja en vertical).*

> **Tu explicación teórica precisa:**
“Todo lo que me acaban de describir es 100% correcto. YouTube acaba de reconocer que la pantalla por donde la estamos mirando es pequeñita y decidió mutar todo su diseño. Los videos se apilaron y el menú se escondió. El código HTML de YouTube es exactamente el mismo bloque, pero su CSS tiene instrucciones inteligentes que dicen: *‘Hey, si me miran desde una pantalla como la de un teléfono de 400 píxeles, escóndete y formatea todo hacia abajo como en una torre’*.
> 
> 
> **A esto, equipo, es a lo que se le llama RESPONSIVE.**
> **¿Qué es Responsive Web Design? Es la capacidad inteligente de una página web para adaptarse automáticamente y responder al tamaño de la pantalla en la que se le está mirando**, sin importar si es el celular más pequeño, una tablet, o un monitor curvo gigante. No creamos cinco páginas web distintas para cada aparato; creamos una sola página que muta y *responde* (de ahí su nombre) a su entorno.”
> 

### **2.4 Transición al Choque de Realidad**

**EN PANTALLA: NAVEGADOR - Pestaña de `localhost` encendida mostrando la “PÁGINA ROTA DEL INSTRUCTOR”.**

**La acción guiada:**
1. Cierra la pestaña de YouTube y salta directo al Live Server que contiene tu página estática “Rota”.
2. Déjala inicialmente visible en tu computadora en Escritorio maximizado (Se verá bonita y cuadrada).
3. Frente a ellos, presiona el botón del **Device Toolbar (Simulador)** y colócalo en formato iPhone.

> **Tu explicación teórica precisa:**
“Les presento la Landing Page de unos Audífonos Premium en la que estuve trabajando ayer. En mi laptop, como pueden ver, me creía un gran diseñador porque se veía espectacular. Pero miren qué pasa cuando, sin tocar ni una línea de código, la intento simular en un iPhone como acabamos de hacer con YouTube…
> 
> 
> *(Activas el celular simulado en vivo y se ve todo el caos)*…
> 
> Es un desastre total, da vergüenza visual. La imagen gigante de mi producto, las cajas blancas pequeñas y hasta mi footer oscuro se salen literalmente de la pantalla hacia a la derecha. Acabo de generar un ‘Scroll Horizontal’ y mis usuarios en teléfono tendrían que deslizar a cada rato y hacer zoom con los dedos para lograr entender mi título inmensamente cortado.
> 

## MOMENTO 3: Cajas Relativas (Píxeles vs %) (35 min)

> **Objetivo del momento:** Erradicar la dependencia de los píxeles fijos en los contenedores. Explicar el concepto de unidades absolutas vs relativas, y demostrar su aplicación en la Landing Page usando Porcentajes (%), límites (max-width) y Viewports (vw/vh).
> 

### 3.1 El Problema del Píxel (Unidad Absoluta)

> **Tu explicación teórica precisa:**
“Para entender por qué se rompió la página en el celular, necesitamos entender qué es un Píxel (`px`). El píxel es una **Unidad Absoluta**. Esto significa que su valor es fijo y estático, sin importar la pantalla. Si le dices a una caja que mida 700 píxeles de ancho, obligará al navegador a dibujar exactamente 700 píxeles de espacio.”
> 

**EN PANTALLA: EXCALIDRAW (o pizarra virtual en blanco).**

**La acción guiada:**
1. Dibuja rápidamente tres rectángulos vacíos simulando pantallas: Un Monitor Grande, una Tablet y un Celular vertical.
2. Dibuja un cuadrado sólido al costado con el texto: **`width: 700px`**.
3. Arrastra el cuadrado adentro del Monitor grande: Entra sin problemas.
4. Arrastra el mismo cuadrado a la Tablet: Entra exacto.
5. Arrastra el cuadrado al Celular: Haz que se salga visiblemente del dibujo por la derecha.

> **Tu explicación teórica precisa:**
“Aquí vemos el problema gráfico. La pantalla de un celular moderno promedia los 400 píxeles de ancho. Si le inyectamos una caja rígida de 700px, el navegador no la encoge, simplemente la desborda hacia la derecha, forzando la aparición del scroll horizontal.
Para solucionar esto en el Diseño Responsive, dejamos de usar unidades absolutas y cambiamos a **Unidades Relativas**, empezando por el Porcentaje.”

**Pasamos a unidades relativas porque los píxeles son rígidos y no cambian, mientras que las unidades relativas permiten que el diseño fluya y se adapte automáticamente al tamaño de cualquier pantalla o a las preferencias del usuario.**
> 

> **IMPORTANTE:** Las unidades relativas son dependientes porque su tamaño se calcula siempre en función de un **valor externo**, como el tamaño de la **fuente del navegador** (`rem`), el tamaño del **elemento padre** (`em` / `%`) o las dimensiones del **viewport** (
> 

### 3.2 El Porcentaje (%) y su Dependencia del Padre

> **Tu explicación teórica precisa:**
“El Porcentaje (`%`) es la unidad relativa más utilizada para dimensiones de anchos (`width`).
> 
> - **Dependencia :** Los porcentajes **se basan en el tamaño del elemento padre**.
> - **Flexibilidad:** Los elementos con dimensiones definidas en porcentajes **cambiarán de tamaño automáticamente cuando el tamaño del elemento padre cambie**

<aside>

**CALCULO DE VALOR EN PX**

**Valor aplicado =** **Tamaño del contenedor padre * porcentaje**

</aside>

**EN PANTALLA: LA MISMA PIZARRA DE EXCALIDRAW.**

**La acción guiada:**
1. Borra el texto de `700px` de tu cuadrado y cámbialo a **`width: 100%`**.
2. Arrastra el cuadrado por las 3 pantallas dibujadas, estirándolo o encogiéndolo gráficamente para que ocupe exactamente el ancho interno del contenedor en cada caso.

**EN PANTALLA: EJEMPLO EN CODIGO VSCODE**

- Ve donde el HTML tiene `.caja-abuelo` -> `.caja-padre` -> `.caja-hija`, y el CSS dicta `.caja-padre { width: 400px }` y `.caja-hija { width: 50% }`).

> **Pregunta de calibración:***(Señalando con tu lápiz de Excalidraw el código HTML y CSS pegado en la pizarra)* *“Equipo, veamos este fragmento. Tenemos una caja padre definida a 400 píxeles, y una caja hija adentro al 50%. Usando la lógica de dependencia que acabamos de aprender… **¿Exactamente cuántos píxeles físicos va a dibujar el navegador en la pantalla para esa caja hija?”***
> 

*(Recibe la respuesta “200px” y usa las herramientas de la pizarra para dibujar en vivo un cuadrado dentro de otro, demostrando gráficamente cómo la hija obedece ciega y perfectamente a la medida del padre).*

**EN PANTALLA: VSCODE DIVIDIDO CON EL NAVEGADOR (DevTools en modo Celular, con la Landing Rota).**

**La acción guiada (CODE-ALONG):**
1. Ve a `style.css` y ubica las clases `.hero`, `.features` y `.footer`. Todas tienen actualmente anchos fijos de PC (e.g. `2020px`).
2. Sustituye esos valores en vivo frente a ellos.

```css
/* Reemplazamos los píxeles fijos por un ancho dinámico: */
.hero, .features, .footer {
    width: 100%;
}
```

Muestra en el simulador de celular, cómo esas tres cajas principales ya no desbordan la pantalla hacia la derecha. El scroll horizontal inferior desapareció.

> **Pregunta de calibración:***“Miren el código ahora. Hemos resuelto el scroll en la vista móvil. Pero, **¿qué sucede gráficamente si regreso el simulador a la vista de ‘Escritorio’ o expando la pantalla a un tamaño muy grande?**”*
> 

*(Déjalos notar y comentar que, al estar al 100%, las cajas ahora se estiran de extremo a extremo, deformando el diseño original en pantallas grandes).*

### 3.3 Controlando el Porcentaje (max-width y min-width)

> **Tu explicación teórica precisa:**
*El control de dimensiones (witdth y height) en CSS **es crucial para crear diseños web responsivos y adaptables.***
> 
> 
> *Las propiedades witdth y height tiene variantes:*
> 
> `*min-widthmax-widthmin-heightmax-height*`
> 
> - `min-width`
> - `max-width`
> - `min-height`
> - `max-height`
> 
> *Estos permiten **especificar límites mínimos y máximos para el tamaño de los elementos**, asegurando que se ajusten de manera adecuada a diferentes tamaños de pantalla y dispositivos.*
> 
> *Es importante entender que las propiedades `min-width`, `max-width`, `min-height` y `max-height` **no son** iguales a las propiedades `width` y `height`. En realidad, estas propiedades trabajan en conjunto para definir restricciones adicionales sobre las dimensiones de un elemento.*
> 
> Usamos estas propiedades para especificar  **Límites o RANGOS DONDE PUEDA CRECER EL TAMAÑO DEL ELEMENTO**. que permiten que un elemento se adapte al contenido, a diferencia de **`width` y** `*height*`, que impone un **tamaño fijo y rígido** sin importar el espacio disponible.
> 
> - **`max-width`**: *Define el ancho máximo que puede tener un elemento*. Le dice a la caja ‘puedes crecer fluidamente hasta cierto punto, pero nunca pases mas de este ancho’.
> - **`min-width`**: *Define el ancho mínimo que puede tener un elemento*. Le dice a la caja ‘puedes encogerte todo lo que quieras con la pantalla, pero si llegas a esta dimensión diminuta, ya no podras hacerlo’.”
> 

**EN PANTALLA: VSCODE Y NAVEGADOR DIVIDIDOS (Con un archivo HTML/CSS de ejemplo aislado nuevo, no la Landing Rota).**

**La acción guiada (Demostración de Concepto):**
1. Crea un `div` rápido en un archivo limpio llamado `caja-elastica`, dale un color de fondo llamativo (ej: `tomato`).
2. Asígnale estas reglas en CSS:

```css
.caja-elastica {
    width: 100%;
    max-width: 800px;
    min-width: 300px;
    margin: 0 auto;
}
```

1. Arrastra el borde del navegador para encoger y estirar la pantalla repetidas veces.
2. Explica visualmente: *“Vean la caja roja. Cuando mi pantalla es pequeña, se encoge libremente al 100%. Pero si achico demasiado la pantalla (menos de 300px), la caja activa el freno de emergencia (`min-width`) y deja de encogerse. Por el contrario, si estiro la pantalla a nivel monitor gigante, la caja fluye pero al tocar los 800px activa el freno superior (`max-width`) y se queda estática en el centro.”*

> Usamos **`max-width`** y **`min-width`** junto a un **`width` relativo** (como `%` o `vw`) para que el elemento sea **elástico y fluido**, ya que si fijas el ancho con **píxeles**, bloqueas la flexibilidad y el diseño deja de ser responsive.
> 

**EN PANTALLA: VSCODE Y NAVEGADOR (Regresa a la Landing Rota).**

**La acción guiada (CODE-ALONG):**
1. Ve a `.features`  en el CSS de tu Landing Page.
2. Mantén el porcentaje que ya habías puesto, pero agrégales el límite superior y céntralos para salvar el diseño en PC.

```css
.features{
    width: 100%; /* Fluido y dinámico en móviles */
    max-width: 1200px; /* Al alcanzar este valor, la caja dejará de estirarse */
    margin: 0 auto; /* Centra el contenedor cuando la pantalla es mayor a 1200px */
}
```

1. Juega con el ancho de DevTools rápidamente, mostrándoles la diferencia: en anchos menores a 1200px (como en tablets o móviles), el contenedor fluye dinámicamente al 100%. Al cruzar la franja de los 1200px, el contenedor se bloquea en ese tamaño y los márgenes automáticos lo mantienen centrado.

### **3.4 Unidades de Viewport (vw y vh)**

> **Tu explicación teórica precisa:**
“Hasta ahora hemos visto que el Porcentaje depende de su Padre. Sin embargo, ¿qué pasa cuando queremos dimensionar algo usando como referencia estricta la pantalla física del usuario, ignorando completamente los contenedores padres?
Aquí entran las **Unidades de Viewport**. 
**QUE ES EL VIEWPORT?**
El ‘Viewport’ es el área visible de la página en el navegador , vean como es diferente para cada dispositivo, entonces lo que haremos es que ahora el tamaño se adapte a esa pantalla.
CSS divide esta área visible en 100 unidades equivalentes al 1%:
> 
- `vw` (Viewport Width): ***Unidad que hace referencia al ancho del Viewport
REGLA:*** 1vw es igual al 1% del ancho total de la ***Viewport***.
- `vh` (Viewport Height): ***Unidad que hace referencia a la altura del Viewport***
    
    **REGLA:** 1vh es igual al 1% del alto total de la ventana.”
    

**EN PANTALLA: EXCALIDRAW.**

**La acción guiada:**
1. Borra la pantalla actual. Dibuja un rectángulo simulando la ventana del navegador.
2. Traza líneas punteadas horizontales y verticales indicando que la altura (`100vh`) y el ancho (`100vw`) toman la ventana física como única referencia, desde el borde superior hasta el inferior puro.

**EN PANTALLA: VSCODE Y NAVEGADOR DIVIDIDOS (Vuelve al archivo de ejemplo aislado limpio).**

**La acción guiada (Demostración de Concepto):**
1. Crea un `div` llamado `caja-viewport` con un fondo llamativo (ej: `dodgerblue`).
2. Dile a CSS que mida `width: 50vw` y `height: 50vh`.
3. Arrastra libremente los bordes del navegador (tanto ancho como alto) y muestra cómo la caja siempre, matemáticamente, ocupa exactamente la mitad perfecta del cristal, sin importarle quién sea su etiqueta padre en el HTML.

**EN PANTALLA: VSCODE Y NAVEGADOR (Regresa a la Landing Rota).**

**La acción guiada (CODE-ALONG):**
1. Busca la clase principal `.hero` en el CSS de la Landing.
2. Borra el atributo de altura en píxeles (`height: 800px;`) e inyecta la altura relativa al viewport.

```css
.hero {
    width: 100vw;
    /* La altura mínima ocupará exactamente el 100% de la ventana visible inicial del usuario */
    min-height: 100vh;
}
```

1. Demuestra en el navegador cómo, independientemente de si estás simulando un iPhone o un iPad, el panel negro oscuro del Hero inicial se adapta para cubrir exactamente desde la parte superior hasta el límite visual inferior de esa pantalla sin cortarse ni generar scroll adicional al cargar.

> **Nota táctica de transición:**
Felicita al curso cerrando este concepto. Las cajas estructurales principales se han vuelto adaptables: “Hemos superado el primer gran reto. Ya no tenemos scroll horizontal infinito generado por bloques rígidos. Sin embargo, si miran el contenido interno, los textos gigantes y las tarjetas de características siguen desbordándose o aplastándose horriblemente. El contenedor se curó, pero su interior sigue atado al pasado. Para solucionar la rigidez de las fuentes, pasaremos al Momento 4.”
> 

**— (RECESO SUGERIDO DE 15 MINUTOS) —**

## **4. MOMENTO 4: Tipografía Relativa (`rem` vs `em`) (25 min)**

> **Objetivo del momento:** Enseñar por qué los píxeles destruyen la jerarquía de lectura en móviles, y transicionar definitivamente hacia el uso de unidades relativas para fuentes, comprendiendo el peligro de `em` y el control centralizado que ofrece `rem`.
> 

### **4.1 El Problema de la Tipografía en Píxeles**

**EN PANTALLA: VSCODE Y NAVEGADOR DIVIDIDOS (Con la Landing Web Rota en el Simulador de Celular).**

**La acción guiada:**
1. Muestra el título principal del Hero (e.g. `<h1>Escucha la Perfección</h1A`).
2. Haz notar cómo este texto, al estar programado con `font-size: 80px`, literalmente se sale del flujo, obliga a la caja a desbordarse o monta las palabras una sobre otra de forma ilegible en el ancho reducido del celular.

> **Tu explicación teórica precisa:**
“Nuestros contenedores ahora son fluidos con porcentajes, pero nuestras letras no. Al usar píxeles en la propiedad `font-size`, estamos cometiendo el mismo error que con las cajas: le damos una orden absoluta.
80 píxeles medirán 80 píxeles en un monitor 4K y en un iPhone antiguo. El texto no tiene inteligencia espacial. Necesitamos medidas tipográficas relativas que nazcan de una proporción, no de una medida estática.”
> 

### **4.2 La unidad em y su efecto cascada**

> **Tu explicación teórica precisa:**
“La primera solución histórica de CSS fue la unidad `em` y su pariente moderna es el `rem`. Ambas comparten una regla absoluta fundamental: **Su tamaño siempre dependerá de una propiedad `font-size` calculada previamente**. No miden nada por sí solas, son simples multiplicadores matemáticos. La diferencia radical entre ambas es *de dónde sacan ese valor base para multiplicarse*, y eso lo veremos progresivamente.”
> 

<aside>

**Importante :** La mayoría de los navegadores web utilizan un tamaño de fuente predeterminado de 16 píxeles para el elemento **<html>** 

Esto sirve como **punto de referencia para las unidades relativas como em y rem**, aunque este valor puede ser modificado por el usuario en la configuración del navegador.  

</aside>

**EN PANTALLA: PRESENTACION EXCALIDRAW**

**Concepto:**

> **E**s una unidad que depende del tamaño de fuente del *elemento padre del elemento actual*.  
El valor de `1em` es **igual al tamaño de fuente del elemento padre del elemento actual, en especifico al valor font-size del elemento padre.
RECOMENDACION: DIAGRAMA CAJAS ELEMENTO Y COLOCAR UNA FLECHA DE UNA HACIA OTRA(hijo a padre) EXPLICANDO LO ANTERIOR
NOTA: Si no hay un tamaño definido explícito en el padre (Si no se especifica un valor para `font-size`)**
> 

> Entonces hereda el tamaño de fuente del elemento padre del padre . esta herencia continúa hacia arriba en el árbol DOM hasta que se encuentra un valor explícito, pudiendo llegar hasta el elemento **`<html>`]**
> 

<aside>

**FORMULA:**
**Tamaño final (px) = valor em * tamaño de fuente del elemento padre o al que aplica el em(px)**

</aside>

**La acción guiada:**
1. Muestra lentamente la zona del HTML donde tienes dos textos `"Texto dentro del contenedor"` (afectado por el `.container` padre) y `"Texto fuera del contenedor"` (completamente libre abajo). Ambos textos tienen exactamente la misma clase `.small-font` que mide `0.9em`.
2. Detén la imagen en la explicación visual de las flechas.

> **Tu explicación teórica precisa:**
“Analicemos esta pantalla. La unidad `em` significa literalmente: *‘Toma el `font-size` de mi contenedor padre mágico más cercano y multiplícame por él’*.”
> 
> 
> *(Señala el texto interno)* “Miren el texto dentro del contenedor. El padre (`.container`) configuró su fuente a `1.25em` (que equivale a 20px). Así que nuestro hijo `.small-font` al pedir `0.9em`, multiplica $20px \times 0.9$ y termina dibujando **18px**.
> 
> *(Señala el texto externo)* “Ahora miren el de abajo, el que está libre fuera del contenedor. Sigue teniendo exactamente la misma clase y código: `0.9em`. Sin embargo, como no tiene un padre directo que modifique la letra, toma el tamaño estándar del navegador (16px). Así que multiplica $16px \times 0.9$ y termina dibujando **14.4px**.”
> 

> **Pregunta de calibración:***“Equipo, tenemos exactamente la misma clase CSS aplicada a dos líneas diferentes, pero en la pantalla final se dibujan de dos tamaños totalmente distintos. ¿Se imaginan el verdadero caos si construimos una página de 50 archivos y de pronto los textos cambian de tamaño arbitrariamente solo por dónde los anidamos en el HTML?”*
> 

### **4.3 La Solución Centralizada: `rem` (El Rey de las Fuentes)**

**EN PANTALLA: PRESENTACION EXCALIDRAW**

> **Tu explicación teórica precisa:**
“Pasa algo con el `em` ,es cierto que es una unidad flexible pero como unidad principal de texto para toda nuestra web, el `em` es una pesadilla de herencia impredecible en cascada.
> 
> 
> Para darnos sanidad mental, CSS creó el **`rem`** (Root EM).
> 
> **Concepto:**
> 
> **El valor de 1rem es igual al tamaño de fuente definido en el <html> 
> Comportamient :** Al `rem` no le importa en absoluto en qué caja lo anides, quién sea su padre, su abuelo o si está fuera de todo. El `rem` ignora toda la estructura del HTML y va siempre a consultar la etiqueta raíz de todo tu proyecto (el `<html>`).
> 
> **RECOMENDACION: DIAGRAMA CAJAS ELEMENTO Y COLOCAR UNA FLECHA DE TODAS HACIA EL HTML EXPLICANDO LO ANTERIOR**
> 
> Esta es la mejor forma de transición: mientras `em` te obliga a rastrear cajas padres hacia arriba buscando tamaños misteriosos, `rem` te centraliza el poder en una sola línea de código en todo tu archivo.”
> 

**EN PANTALLA: VSCODE Y NAVEGADOR (Regresando al CSS de la Landing Rota).**

**La acción guiada (CODE-ALONG):**
1. Sube a la primera línea de tu archivo `style.css`.
2. Escribe la regla global sagrada en el selector `:root` o `html`.

> **Es una buena práctica establecer un tamaño de fuente base para el elemento `<html>` en tu CSS para mayor control y consistencia.** 
De esta manera, aunque el usuario cambie el tamaño de fuente predeterminado del navegador, tu diseño se ajustará de forma predecible a partir de tu tamaño de fuente base declarado.
> 

```css
/* Declaración del tamaño base (Por defecto los navegadores usan 16px, pero lo hacemos explícito) */
html {
    font-size: 16px;
}
```

1. Ve a la clase de tu título gigante (ej. `.hero h1`) y borra el texto absoluto `font-size: 80px`.
2. Transfórmalo a una medida basada en `rem`.

```css
.hero h1 {
    /* 4 multiplicado por la raíz (16px) = 64px proporcionales */
    font-size: 4rem;
}

.features p {
    /* 1 multiplicado por la raíz (16px) = 16px estándar */
    font-size: 1rem;
}
```

1. Muestra en el simulador de celular cómo el título gigante se redujo drásticamente adaptándose a la nueva proporción central. Ahora respeta su contenedor sin destruirlo, y si en un futuro decides que en celular toda la página debe tener letras más chicas, bastará con cambiar la regla `html { font-size: 14px; }` para que absolutamente todos los textos en `rem` bajen su tamaño en bloque con una sola línea de código.

> **Nota táctica de transición:**
“En este punto, nuestras cajas y nuestros textos son flexibles y relativos. La tipografía ya no desborda la pantalla. Sin embargo, hay un último defecto de diseño grave en nuestra vista de móvil. Las tarjetas de características (`.features`) están apretadas en una sola fila (`flex-direction: row`) haciendo que parezcan fideos ilegibles.
El CSS curó las dimensiones, pero no puede curar la ‘Estructura’ del Diseño por sí solo”
> 

## 5. MOMENTO 5: El Termostato: Media Queries y Mobile-First

> **Objetivo del momento:** Explicar el salto evolutivo desde el diseño “Dual” antiguo hacia el diseño “Responsivo” actual, entender el concepto de Mobile-First (construir lo pequeño antes que lo grande) e introducir las Media Queries como disparadores (`min-width`) para modificar la estructura.
> 

### 5.1 La Era Oscura: Dos webs distintas

**EN PANTALLA:** PRESENTACIÓN CANVA (Diapositiva nostálgica mostrando un teclado de celular antiguo vs una PC de tubo).

> **Tu explicación teórica precisa:**
“Hace varios años, el mundo enfrentó el mismo problema de diseño que estamos viendo ahora: la página de computadora se veía horrible y apretada en el celular.
**¿Saben cuál fue la primera solución de la industria? Hacer el trabajo dos veces.**
Antes, los programadores diseñaban una página web robusta y completa para la pantalla de la computadora (ej: `facebook.com`). Y luego, creaban desde cero *otra página web completamente distinta y simplificada* que vivía en un enlace separado para los celulares (ej: `m.facebook.com`).
Era una pesadilla de mantenimiento. Si cambiabas un simple color en la PC, el programador tenía que recordar ir a cambiar manualmente el color en la web del móvil para que coincidan.”
> 

### 5.2 El Cambio de Paradigma: Mobile-First

> **Tu explicación teórica precisa:**
“Afortunadamente la tecnología avanzó, y alguien dijo: *‘No hagamos dos páginas separadas. Hagamos un solo código HTML, y enseñémosle al archivo CSS a comportarse de forma inteligente dependiendo de quién lo está mirando’*.”
Y así nació la regla de oro actual de la industria: **Mobile-First (Móvil Primero)**.
> 
> 
> **¿Qué es exactamente Mobile-First?**
> Es una  **estrategia de diseño y desarrollo** que nos obliga a diseñar y escribir nuestro código CSS base pensando, única y exclusivamente, en la pantalla movil. Solo después de asegurar que el flujo y el contenido vital de nuestra página funcionan perfecto en movil, empezamos a escribir reglas “extra” para reorganizar o expandir su diseño en pantallas grandes.
> 
> ***La Analogía de la Casa Básica y la Mansión:***
> Piensen en el desarrollo web como construir un hogar en un terreno pequeñísimo. 
> Primero, se aseguran de construir el núcleo absolutamente esencial para sobrevivir y vivir sanamente: un baño, paredes firmes y un colchón. Ese es su diseño base de Mobile (funcional y centrado en lo vital).
> El día de mañana, el dueño les regala repentinamente tres inmensos terrenos vacíos a los costados de su minúscula casa (acabamos de abrir la página en un gigantesco monitor de Desktop PC). Ustedes no tienen que quitar nada; su pequeño hogar y todo funciona, solo usan el gigantesco y nuevo espacio sobrante al lado para construir una piscina, un garaje triple y un jardín (las reglas extra de Desktop).
> Tratar de hacer el proceso inverso, tratando de meter a la fuerza una Mansión gigante completa, con la piscina y el garaje en un micro-terreno de 300 píxeles, provocaría un desastre de bloques colapsados unos sobre otros. Por eso, **siempre, pase lo que pase, programamos el código CSS pensando primero de lo pequeño hacia lo grande**.
> 

<aside>

**IMPORTANTE:**
Google aplica una penalización de visibilidad si tu pagina web no se adapta correctamente a moviles: esto significa que Google usa exclusivamente la versión móvil de tu web para decidir en qué posición aparece. 
Si tu sitio no es responsive, el algoritmo lo considera de baja calidad, hundiéndolo en los resultados de búsqueda o incluso dejando de indexarlo por completo a partir de 

</aside>

<aside>

La diferencia principal es el **punto de partida**: **mientras que el Responsive Design adapta un diseño de escritorio ya existente hacia pantallas pequeñas, el Mobile First diseña primero la experiencia móvil y luego la expande hacia pantallas más grandes**.

</aside>

### **5.3 ¿Qué es una Media Query?**

**EN PANTALLA: PRESENTACIÓN CANVA (Estructura de la condición `@media`).**

> **Tu explicación teórica precisa:**
“Para lograr el Mobile-first, CSS introdujo una herramienta llamada **Media Query**.
Una Media Query no dibuja colores ni sombras , no es aplicar estilos. 
Es aplicar estilos basado en condiciones
Para los que conocen programacion es como un simple bloque de código `IF` condicional.
**EXPLICAS LA SINTAXIS EN EXCALIDRAW
@media (media-query) {
  /* Estilos que se aplicarán si se cumple la media query */
}**
Nosotros le diremos a CSS: *‘**Pinta las cosas de esta forma básica por defecto**. PERO, SI la pantalla repentinamente llega a medir este ancho mágico con ciertas condiciones, entonces enciende este nuevo bloque de reglas visuales de lujo’*.”
> 

### **5.4 La Tabla de Breakpoints Oficiales (Gatillos)**

**EN PANTALLA: PRESENTACIÓN EXCALIDRAW. Muestra solo el `640px` y `768px` inicialmente).**

> **BREAKPOIN:** 
En la industria moderna nos basamos en estándares. Cuando el simulador marca de **0 a 639px**, asumimos que nos están viendo en un celular (nuestro CSS base).
Cuando el medidor cruza el umbral de los **768px**, decimos que saltamos a la categoría “Tablet”.
Cuando el medidor cruza los **1024px**, declaramos el territorio “Desktop” (Computadoras portátiles/escritorio).
Esos números se llaman **Breakpoints** (Puntos de quiebre).”
****Un breakpoint es la "línea invisible" (en píxeles) donde el diseño de tu web se rompe y se reordena para que se vea bien en una pantalla más grande o más pequeña.
> 
> 
> <aside>
> 
> - Móvil: 0 a **639px** *(Casi como "por defecto")*
> - Tablet: ≥ **768px** *(Tu primer @media)*
> - Laptop: ≥ **1024px** *(Tu segundo @media)*
> - Monitor: ≥ **1280px**
> </aside>
> 
> **Tipos de Media Queries**
> 
> > *No veremos a **min** o **max** como una propiedad CSS sino como una **condición de entrada**.
> • **Min** significa desde este valor en adelante
> • **Max** significa desde este valor hacia atrás*
> > 
> 
> **Medias Queries basado en el Ancho de la Viewport**
> 
> **Condicion `max-width` → Apartir de este ancho maximo hacia atras***, aplica los estilos dentro de esta media query.*
> 
> **Tu explicación teórica precisa:**
> “¿Cuál va a ser nuestra condicional mas usado? La herramienta `min-width`.
> Ya vimos que significa ‘ancho mínimo’. Traducido al español dentro de una Media Query se lee así: **‘A partir de esta medida MÍNIMA en adelante, haz esto’**.
> 

**EN PANTALLA: VSCODE DIVIDIDO CON NAVEGADOR (USA UNA IMAGEN PARA EXPLICAR MEDIA QUERIES, ESTABLECE UNA DIMENSION PARA CADA BREAKPOINT)**

<aside>

Cuando se aplican **Media Queries**, **el navegador mantiene activos los estilos base y luego añade o sobrescribe únicamente las reglas específicas de la Media Query que coincida con el tamaño de pantalla actual**.

</aside>

<aside>

```
sm: Pantallas pequeñas (móviles grandes) */
@media (min-width:640px) {/* Tus estilos aquí */
}
```

```
md: Pantallas medianas (Tablets) 
*/@media (min-width:768px) {/* Tus estilos aquí */
}
```

</aside>

### 5.5 Code-Along Crítico: Expandiendo la Maleta a 30 Kilos

**EN PANTALLA: VSCODE DIVIDIDO CON NAVEGADOR (Página Landing Rota encogida en Simulador de celular).**

**La acción guiada (CODE-ALONG): Paso 1 - Maleta Pequeña**
1. Muestra cómo, por error en clases pasadas, las `.features` fueron puestas en `display: flex; flex-direction: row;` en el CSS general base, viéndose como fideos aplastados.
2. Basados en la regla de ‘Móvil Primero’, ve y cambia el archivo base para que estén en forma de columna cómoda para leer deslizando hacia abajo.

```css
/* CSS BASE (El de la pequeña maleta de cabina para celulares) */
.features {
    display: flex;
    flex-direction: column; /* Apilados hacia abajo (Móvil Primero) */
    align-items: center;
    gap: 1.5rem;
}
```

*(La página ahora se ve sanada perfecta y hermosa en resolución móvil).*

**La acción guiada (CODE-ALONG): Paso 2 - El Termostato para Maleta Grande**
1. Estira el navegador simulando que ahora estamos abriendo la página web en una Tablet.
2. Hazles notar que se ve bien, pero hay demasiado espacio blanco inútil desperdiciado a los lados. ¡Es hora de activar el lujo!
3. Baja por completo hasta el final profundo de tu archivo `style.css` (aclara que es una buena práctica dejar las media queries al fondo para que sobreescriban).

```css
/* --- NUESTRO TERMOSTATO (BREAKPOINTS) --- */

/* MIENTRAS LA PANTALLA SEA DE MÍNIMO 768px EN ADELANTE (Tablets y PCs) -> ENCIENDE ESTAS REGLAS*/
@media (min-width: 768px) {

    .features {
        flex-direction: row; /* Apaga el 'column' base y actívalo en horizontal con lujos */
        justify-content: space-between;
    }

}
```

**EN PANTALLA: NAVEGADOR (Demostración de magia pura en vivo).**

1. Toma el control visual derecho del Simulador (esa barra deslizante en las DevTools) y comienza a encoger suavemente la página de Desktop a Celular.
2. Pídele al equipo que se concentren en la pantalla mientras tú te acercas al borde de quiebre… `800px`… `790px`… `770px`… ¡Y EN EL SEGUNDO QUE LLEGAS A `767px` TODO COLAPSA MÁGICAMENTE A MÓVIL (COLUMNA)!
3. Vuelve a estirar hacia la derecha, y al llegar a `768px` el diseño se expande (filas espaciadas horizontales).

> **Aha Moment (Clímax):**
“Toda la fealdad con la que empezamos la clase se ha ido. Ahora, el celular apila en columnas y respeta el tamaño, la computadora expande en horizontales, la tipografía tiene un control exacto con unidades relativas, y los contenedores no saltan fuera de la línea.
Ustedes ya no son mecánicos de una sola máquina. Acaban de programar para 5 mil millones de cristales distintos al mismo tiempo. Tienen en sus manos el molde líquido del internet moderno. **Felicidades, son Desarrolladores Web Responsivos.**”
> 

## **6. MOMENTO 6: Cierre Reflexivo y Práctica Autónoma (15 min)**

> **Objetivo del momento:** Bajar la intensidad cognitiva tras el clímax técnico (Media Queries) mediante una breve reflexión sobre la estandarización mundial, y dejar perfectamente claras las reglas logísticas para el auto-estudio de la semana.
> 

### 6.1 El Cierre Reflexivo (El Mundo Real)

**EN PANTALLA:** PRESENTACIÓN CANVA (Slide final de retrospectiva visualizando decenas de dispositivos de diferentes marcas al mismo tiempo).

> **Tu explicación motivacional:**
“Hoy cruzamos una de las barreras más grandes en la programación web. Durante las primeras cinco clases, estuvimos construyendo en un entorno de laboratorio ‘perfecto’ (nuestra propia computadora).
> 
> 
> Pero allá afuera, el mundo real es un caos: hay pantallas rotas, televisores gigantes, iPads antiguas, consolas de videojuegos y relojes inteligentes.
> Gracias a las unidades relativas (`%`, `rem`, `vw`) y a la condicional suprema de las Media Queries, hoy su código por fin ha dejado de ser egoísta. Ahora es código maduro que se adapta y respeta al usuario sin importar desde dónde decida mirarnos.
> 
> Respiren. Esto que lograron hoy es el corazón del diseño web moderno.”
> 

### 6.2 Instrucciones Asíncronas y Despedida

**EN PANTALLA:** VS CODE + NAVEGADOR (Mostrando el Repositorio de la Clase y el documento de Práctica).

**La acción guiada:**
1. Abre frente a los alumnos tu explorador de archivos y muéstrales físicamente dónde encontrarán anidado el **Cheat Sheet de la Clase 06**.
2. Ábrelo y dales un escaneo rápido de 30 segundos, mostrándoles que los dibujos de flexbox y las sintaxis exactas del `rem` y las Media Queries de Tailwind están ahí masticadas listos para copiar.
3. Abre el archivo markdown del **Reto Práctico**. Recuérdales que no van a arrancar de cero, sino que deben usar la regla de ‘Mobile-First’ que vimos hoy para arreglar y completar el Grid de su proyecto portafolio.
4. Concluye la transmisión abriendo el micrófono: *“Revisen el Sheet, rompan su código, y si el simulador salta o las letras se salen de la caja… no se frustren. Recuerden, solo les falta un termostato. ¡Tienen la palabra para sus dudas logísticas finales, excelente sesión equipo!”*

> **FIN DE LA CLASE DIRIGIDA. INICIA TIEMPO PARA RESOLUCIÓN DE DUDAS (5 MIN RECOMENDADOS).**
>