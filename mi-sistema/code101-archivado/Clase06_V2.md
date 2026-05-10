# FLUJO DE PRESENTACION CLASE 06

## MOMENTO 1: Bienvenida y El Problema

> **OBJETIVO:** Activar la urgencia. El diseño bonito que construyeron solo existe para ellos. Nadie más lo puede ver bien.
> 

### 1.1 El Problema Táctico

**EN PANTALLA: MOSTRAR PAGINA WEB MI PERFIL QUE HICIMOS**

> **Tu explicación teórica precisa: PROGRAMAMOS PENSANDO EN NUESTRA PANTALLA**
“Quiero que se fijen en sus pantallas ahora mismo. Su diseño se ve en su lugar, los botones están en su lugar y las imágenes tienen el tamaño perfecto. Pero aquí viene algo que todos solemos olvidar: ustedes están maquetando sobre una pantalla ancha, probablemente de 15, 20 o 24 pulgadas.
> 
> 
> Más del 60% del tráfico mundial hoy en día no proviene de laptops… proviene de celulares. ¿Cómo sabemos que ese diseño tan bonito por el que se amanecieron programando, no se va a ver diferente , o peor aún, totalmente desparramado si lo abre un usuario en un iPhone de 5 pulgadas?”
> 

> **Pregunta de activación:*“Antes de abrir cualquier herramienta: si un cliente les pide que su página se vea perfecta en un iPhone, una tablet y un monitor gigante, y solo tienen su laptop, ¿qué harían para probarlo?”***
> 

*(Espera un par de risas, ideas locas o respuestas afirmando que es logísticamente un dolor de cabeza)*

> **Tu explicación teórica precisa:**
“Exacto, es logísticamente y económicamente imposible tener 10 modelos de celulares y 5 tablets distintas apiladas en nuestro escritorio solo para ir probando. Y como desarrolladores profesionales, no podemos estar publicando código a la suerte, enviándonos el enlace a nuestro propio teléfono a cada rato para ver si por milagro no ‘se rompió’ nada.
> 
> 
> A este concepto de ‘romperse’ le llamamos técnicamente cuando la estructura cuadrada pensada para PC literalmente no entra en la pantalla estrecha del celular. El navegador entonces genera una horrible barra de scroll horizontal en la parte inferior, obligando al usuario a deslizar a la derecha para poder leer lo que hiciste. Eso, hoy en día, significa que tu usuario abandonará tu sitio web en 3 segundos.”
> 

> *Y Hay una herramienta que ya conocemos y que resuelve poder ver nuestra pagina en distintos dispositivos, sin descargar nada. La vamos a usar ahora.”*
> 

## MOMENTO 2: DevTools como Simulador

> **OBJETIVO:** Que el alumno entienda qué es Responsive viendo una página profesional mutar en vivo, y luego ver su propia “página rota” para crear urgencia.
> 

### **2.1 Presenta DevTools - YouTube en el Simulador**

**EN PANTALLA: NAVEGADOR — YouTube. Abrir DevTools con F12.**

> *“Conocemos DevTools para….(indica para que lo usaron en las clases pasadas). Pero tiene una funcionalidad  adicional: **permite simular dispositivos**.”*
> 
- Activar el ícono de **Device Toolbar** (ícono de celular + tablet).
- Cambiar a iPhone 12 Pro. Hacer scroll lento mientras los alumnos observan como la pagina se va adaptando a la dimension

> **Pregunta de análisis:*“¿Qué cambió? ¿Qué desapareció o se movió? Me dicen en el chat.”***
> 

*(Recoger respuestas: el menú lateral, los videos se apilaron, el logo cambió.)*

> *“Eso es Responsive: la capacidad de una página web de adaptarse automáticamente al ancho de la pantalla donde se la mira. El HTML no cambió. El CSS tiene instrucciones inteligentes que detectan el tamaño y mutan el diseño. A eso se le llama Responsive Web Design.”
**Importa sobre todo el ancho que la altura mi estimado….***
> 

> **¿Por qué el ANCHO y no el ALTO?***“Porque en alto tenemos scroll vertical — todos estamos acostumbrados. **Lo que no existe en páginas modernas es el scroll horizontal**. Si tu página lo tiene, se considera una página rota.”*
> 

> **Pregunta de análisis:*“¿Alguien a visto alguna vez una pagina con scroll horizontal?”***
> 

### 2.2 La Página Rota — El Choque de Realidad

**EN PANTALLA: Live Server apuntando a pagina-victima/index.html. Primero en escritorio.**

> *“Ayer estuve haciendo esta landing page de un audífono. En mi laptop, como ven, se ve bastante bien. Fíjense en el layout, en las tarjetas, en el footer.”
**Pregunta:** **Ustedes detectan alguna distorsion, algun elemento que sale fuera de lugar?***
> 

*(Darles 20 segundos para que la vean y la califiquen mentalmente.)*

> *“Ahora le vamos a hacer la misma prueba que le hicimos a YouTube.”*
> 
- Activar DevTools → Device Toolbar → iPhone 12 Pro.

> *“Ahora miren en mobil, es un  Desastre total. Scroll horizontal. La imagen se sale por la derecha, el título está cortado, las tarjetas son ilegibles. Esta es exactamente la página que un reclutador vería si la abre desde su celular. Y hay una razón muy específica para que esto pase.”*
> 

## MOMENTO 3: Cajas Relativas — Porcentaje, min/max, vw/vh

> **OBJETIVO:** Erradicar los píxeles fijos en contenedores. Que el alumno entienda cada unidad relativa en practica_clase06/ y luego la aplique en pagina-victima/.
> 

### 3.1 El Problema del Píxel

**EN PANTALLA: EXCALIDRAW — Grafico monitor, tablet y celular.**

> *“La razón por la que se rompió es esta: hemos estado usando **píxeles**. 
Y el píxel es una unidad absoluta. Absoluta significa que su valor es fijo — no cambia, no se adapta, no le importa en qué pantalla está.
**MUESTRA EJEMLPLO DEL PROBLEMA DE PIXEL***
> 
> - Dibujar en vivo: cuadrado de 700px que no cabe en la silueta del celular.
> *- En mi laptop de 1000px , entra.
> - En la tablet de 700px entra a las justas. 
> - En un celular de 400px, no cabe — se desborda hacia la derecha y aparece el scroll horizontal.”*
- Necesitamos unidades que se adapten a los dispositivos, que sean flexibles y esa son :

> *“Las unidades relativas son lo contrario: son dependientes. Su valor se calcula en función de algo externo — el padre, el viewport, la fuente del navegador. Son flexibles.”*
> 

> **Pasamos a unidades relativas porque los píxeles son rígidos y no cambian, mientras que las unidades relativas permiten que el diseño fluya y se adapte automáticamente al tamaño de cualquier pantallas**
> 

> *Hoy vamos a ver tres: porcentaje, vw/vh, y rem.*
> 

### 3.2 Porcentaje (%) — Depende del Padre

**EN PANTALLA: VS Code → Excalidraw porcentaje**

> **Tu explicación teórica precisa:**
“El Porcentaje (%) es la unidad relativa más utilizada para dimensiones de anchos (width).
> 

> **Explicación teórica antes del código:***"¿Cuál es la primera unidad relativa? El porcentaje. Y esto ya lo conocen del colegio — no hay nada nuevo aquí, son matemáticas básicas.*
> 
> 
> *La diferencia con los píxeles es esta: el porcentaje no tiene un valor fijo. Su valor depende de algo. ¿De qué depende? Del elemento padre.*
> **Dependencia :** El porcentaje es una unidad que **siempre dependen de el tamaño del elemento padre**.
> 
> > **Nota táctica:** En Excalidraw dibujar en vivo: caja padre con 400px, caja hija con 25% → mostrar que es 100px. Luego cambiar a 50% → 200px. Luego poner 100% → ocupa todo el padre. Finalmente 110% → se sale del padre (desborde).
> > 
> 
> *Imaginen que tienen un cuadrado — ese cuadrado es su elemento padre y tiene 400 píxeles de ancho. Si yo le digo a un elemento hijo que mida el 50% de ancho, ¿cuánto es el 50% de 400? 200 píxeles. Si el padre cambia a 800px, el hijo automáticamente mide 400px. El hijo siempre depende de quién — del padre.*
> 
> *¿Cuál es el padre de un elemento cuando no está dentro de nada? El body. ¿Y el body de qué tamaño es? El ancho de tu pantalla. Por eso cuando le ponemos width: 100% a una sección, automáticamente ocupa todo el ancho de tu pantalla, sea cual sea.*
> 
- **Flexibilidad:** Los elementos con dimensiones definidas en porcentajes **cambiarán de tamaño automáticamente cuando el tamaño del elemento padre cambie**

**CALCULO DE VALOR EN PX : Valor aplicado =** **Tamaño del contenedor padre * porcentaje**

**EN PANTALLA: VS Code → practica_clase06/index.html. Descomentar bloque PORCENTAJE.**

```html
<!-- Descomentar en index.html -->
<div class="caja-abuelo">
  <div class="caja-padre">
    <div class="caja-hija">CAJA HIJA</div>
  </div>
</div>
```

```css
/* Descomentar en style.css */
.caja-padre { width: 400px; height: 400px; background-color: #333; }
.caja-hija  { width: 50%;   height: 10%;  background-color: #4CAF50; }
```

> *“**¿Cuántos píxeles va a dibujar el navegador para la caja hija?**”*
> 

*(Esperar: 200px.)*

> *“Correcto. El porcentaje se calcula sobre el padre directo. Si el padre tiene 400px y la hija pide 50%, el navegador calcula 200px. Si cambia el padre, cambia la hija. Eso es flexibilidad.”*
> 

> **Nota táctica:** Mostrar también el 110% — la hija supera al padre, hay desborde. Útil para que vean qué pasa cuando se pasa del 100%.
> 

**Aplicar en pagina-victima/style.css:**

> *“Ahora lo aplicamos a la página rota. Busco **.hero, .features y .footer**. Todos tienen width: 1350px. Lo cambiamos a:”*
> 

```css
.hero, .features, .footer {
    width: 100%;
}
```

> *“Recarguen el simulador. **¿Desapareció el scroll horizontal?** Sí. ¿Se arregló todo? No — el contenido interno sigue roto. Pero el primer problema, el desborde del contenedor, se solucionó.”*
> 

### 3.3 min-width y max-width — El Rango

**EN PANTALLA: VS Code → Excalidraw**

> **Explicación teórica antes del código:***"Ahora, cuando usamos unidades relativas como el porcentaje, ya no tenemos un valor fijo. La caja puede tener 1039px en un monitor grande o 320px en un celular pequeño — varía constantemente.*
> 
> 
> ***Pero a veces eso nos genera un problema: no queremos que el elemento sea DEMASIADO grande en monitores gigantes, ni DEMASIADO pequeño en celulares muy angostos. Necesitamos rangos**.*
> 
> *CSS nos da cuatro propiedades para esto:*
> 
> - *max-width: ancho máximo. De ahí no creces más.*
> - *min-width: ancho mínimo. De ahí no te encoges más.*
> - *max-height y min-height: lo mismo, pero para la altura.*
> 
> *Estas NO reemplazan al width. Trabajan junto al width. El width define el valor base (ej: 100%), y el max-width o min-width define los límites donde puede crecer o encogerse.*
> 
> > **Nota táctica:** En Excalidraw dibujar una línea horizontal que representa el rango de anchos. Mostrar: a la izquierda el min-width, a la derecha el max-width, y el width: 100% fluyendo en el medio.
> > 
> 
> *Ejemplo: width: 100% con max-width: 800px. La caja crece con la pantalla al 100%... pero cuando llega a 800px, el freno de emergencia se activa. De ahí no pasa.*
> 
> *Ejemplo: width: 100% con min-width: 300px. La caja se encoge con la pantalla... pero cuando llega a 300px, el freno inferior se activa. De ahí no se reduce. Por eso en ese punto aparece el scroll horizontal — la caja ya no puede reducirse más.*"
> 

**EN PANTALLA: VS Code → practica_clase06/. Descomentar bloque MAX-MIN.**

**NOTA: PUEDES USAR LUEGO UNA IMAGEN COMO EJEMPLO**

```css
/* Descomentar en style.css */
.caja-elastica {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    height: 200px;
    background-color: blueviolet;
}
```

> *“Observen qué pasa cuando estiro y encoojo la ventana del navegador.*
> 
> 
> *max-width: la caja crece con el 100% hasta llegar a 400px — ahí se detiene. De ahí no pasa.min-width: cuando reduzco la pantalla por debajo de 300px, la caja deja de encogerse — ahí aparece el scroll horizontal, porque ya no puede más.*
> 
> *¿Por qué existen? Porque con unidades relativas no tenemos un valor exacto. Los rangos nos permiten controlar que el diseño no se distorsione en extremos — ni demasiado grande ni demasiado pequeño.”*
> 

**Aplicar en pagina-victima/style.css:**

```css
.features {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
```

### 3.4 Viewport Units (vw / vh)

**EN PANTALLA: EXCALIDRAW — Sección "VIEWPORT" del archivo CLASE06.excalidraw.**

> **Nota táctica:** Abrir el Excalidraw en la sección "VIEWPORT" y "VH Y VW". Mostrar el diagrama que tiene la ventana del navegador dividida con líneas punteadas indicando 100vw de ancho y 100vh de alto. Hacer énfasis en que el viewport cambia en cada dispositivo.
> 

> **Explicación teórica antes del código:***"Hasta ahora con el porcentaje, el tamaño depende del padre. **Pero ¿qué pasa cuando queremos que algo dependa directamente de la pantalla del usuario, ignorando completamente a los padres?***
> 
> 
> *Primero: **¿qué es el Viewport?** **El viewport es el área visible del navegador** — eso que están mirando ahora mismo en su pantalla. No es la pantalla completa del monitor, es específicamente el área donde se dibuja la página web. Vean en el Excalidraw: esa zona sombreada en celeste de diferentes tamaños según el dispositivo — eso es el viewport.*
> 
> *CSS divide ese viewport en 100 unidades:*
> 
> - ***vw (Viewport Width): 1vw = 1% del ANCHO del viewport.***
> - ***vh (Viewport Height): 1vh = 1% del ALTO del viewport.***
> 
> *Si porcentaje y viewport son tan similares, ¿cuál es la diferencia real?*
> 
> *Porcentaje: se basa en el padre. Si el padre tiene 500px, el 50% es 250px.vw/vh: ignora al padre completamente. Se basa solo en la pantalla. El 50vw siempre es la mitad de tu pantalla, sin importar en qué caja esté.*
> 
> ***¿Cuándo usamos viewport?** Cuando queremos que algo ocupe un porcentaje de la PANTALLA TOTAL — el caso más clásico es hacer que el hero de tu página ocupe exactamente toda la pantalla al cargar: height: 100vh.*"
> 

**EN PANTALLA: VS Code → practica_clase06/. Descomentar bloque VIEWPORT.**

```css
/* Descomentar en style.css */
.caja-viewport {
    width: 50vw;
    height: 50vh;
    background-color: coral;
    border: 2px solid black;
}
```

> *“Diferencia clave con el porcentaje: el porcentaje depende del padre. El viewport no le importa quién sea el padre — siempre se fija en la pantalla del usuario.*
> 
> 
> *1vw = 1% del ancho del viewport. 1vh = 1% del alto del viewport.*
> 
> *Estiren y encojan la ventana. La caja siempre ocupa exactamente la mitad — sin importar ningún padre.”*
> 

> *“¿Cuándo uso vw/vh en lugar de %? Cuando quiero que algo ocupe un porcentaje de la pantalla completa — por ejemplo, que la sección hero ocupe toda la altura visible al cargar la página.”*
> 

**Aplicar en pagina-victima/style.css:**

```css
.hero {
    width: 100%;
    min-height: 100vh;  /* Siempre ocupa toda la altura visible */
}
```

## **MOMENTO 4: Tipografía Relativa (em vs rem)**

> **OBJETIVO:** Enseñar por qué los píxeles destruyen la tipografía en mobile, y que el alumno adopte rem como unidad de fuente estándar.
> 

### 4.1 El Problema del Font-Size en Píxeles

**EN PANTALLA: pagina-victima/ en simulador de iPhone.**

> *“Ya arreglamos los contenedores. Pero miren el título. Sigue siendo font-size: 80px. **En el celular, 80 píxeles sigue siendo 80 píxeles — absoluto, rígido, se come todo el ancho de la pantalla.***
> 
> 
> *Necesitamos unidades relativas también para el texto de nuestra web. Las unidades que CSS creó para tipografía son em y rem.”*
> 

### 4.2 em — Depende del Padre (Peligroso)

**EN PANTALLA: EXCALIDRAW — Sección "EJEMPLO EM" del archivo CLASE06.excalidraw.**

> **Nota táctica:** Abrir el Excalidraw en la sección "EJEMPLO EM". Mostrar el diagrama con las cajas anidadas y las flechas que apuntan de hijo a padre explicando la herencia. Calcular en vivo con los alumnos usando la fórmula.
> 

> **Explicación teórica antes del código:***"La primera unidad tipográfica relativa que existió históricamente se llama em. No tiene nada que ver con las dimensiones de cajas — el em solo vive en el mundo de la tipografía, específicamente en la propiedad font-size.*
> 
> 
> ***¿De qué depende el em?** Del font-size del elemento padre. El em es básicamente un multiplicador:*
> 
> ***FÓRMULA: Tamaño final (px) = valor em × font-size del padre (px)***
> 
> *Ejemplo: si el padre tiene font-size: 20px y al hijo le pongo font-size: 1.25em, el resultado es: 1.25 × 20 = 25px.*
> 
> *¿Qué pasa si el padre no tiene un font-size definido? El em sube en el árbol de elementos buscando un ancestro que sí tenga font-size. Sube al padre del padre, luego al abuelo, y así hasta que encuentra uno. Si nadie tiene definido un font-size, llega al <html> y usa los 16px que los navegadores asignan por defecto.*
> 
> *El problema del em es este: si tienes varios niveles de elementos anidados, cada nivel hereda y multiplica del anterior. Pueden tener el mismo 1.25em en dos elementos y obtener tamaños completamente distintos solo porque están anidados en diferentes partes del HTML. Eso es impredecible y difícil de mantener."*
> 

> ***¿Se imaginan una página con 50 archivos donde el mismo texto cambia de tamaño solo por dónde lo anidan? Ese es el problema de em.”***
> 

### 4.3 rem — La Solución (Siempre el HTML)

**EN PANTALLA: EXCALIDRAW — Sección "EJEMPLO REM" del archivo CLASE06.excalidraw.**

> **Nota táctica:** Abrir el Excalidraw en la sección "EJEMPLO REM". Mostrar el diagrama donde todos los elementos tienen flechas que apuntan directamente al <html> — a diferencia de em donde cada flecha apunta al padre inmediato. Hacer el ejercicio de calibración: si HTML tiene 24px y el h3 tiene 2rem, ¿cuánto es? (48px).
> 

> **Explicación teórica antes del código:***"El em tiene un problema: depende del padre, y si tienes muchos niveles de anidamiento te vuelve loco calculando. CSS pensó en nosotros y creó el rem .*
> 
> 
> ***¿En qué se diferencia?** El rem no le importa el padre. No le importa el abuelo. No le importa en qué parte del árbol de elementos esté. **El rem siempre va directamente al elemento raíz de todo tu proyecto: el <html>.***
> 
> ***FÓRMULA: Tamaño final (px) = valor rem × font-size del <html>***
> 
> ***El <html> tiene por defecto 16px en casi todos los navegadores.** 
> Entonces: 1rem = 16px, 2rem = 32px, 3rem = 48px. El cálculo es siempre el mismo, sin importar en qué caja lo pongas.*
> 
> *La gran ventaja: si mañana quiero que TODOS los textos de mi página sean más grandes, solo cambio una línea: html { font-size: 18px }. Todo lo que esté en rem se ajusta automáticamente. Es el control centralizado de la tipografía.*
> 
> *Lo primero que hacemos al trabajar con rem es declarar explícitamente el font-size del html para tener control total, aunque ya venga por defecto en 16px:*
> 
> ```css
> html {
>     font-size: 16px;
> }
> ```
> 
> *Con esto nos aseguramos que todos los navegadores partan del mismo punto.*
> 
> *Y si en algún momento quiero cambiar TODOS los textos de mi página, solo toco una línea: el font-size del html.”*
> 
> > **Es una buena práctica establecer un tamaño de fuente base para el elemento <html> en tu CSS para mayor control y consistencia.**
> > 

**Aplicar en pagina-victima/style.css:**

```css
/* Primero: establecer la raíz explícitamente */
html {
    font-size: 16px;
}

/* Luego reemplazar los font-size en px */
h1 {
    font-size: 4rem;       /* 4 × 16px = 64px — proporcional */
}

.hero-subtitle {
    font-size: 1.1rem;
}

.feature-box h3 {
    font-size: 1.5rem;
}

.feature-box p {
    font-size: 1rem;
}
```

> *“Ahora el título es proporcional. Si en mobile quiero que todo sea más pequeño, cambio solo una línea en html { font-size: 14px } y todo baja en bloque.”*
> 

## MOMENTO 5: Mobile First y Media Queries

> **OBJETIVO:** Enseñar el paradigma Mobile First, los breakpoints estándar, y que el alumno aplique su primera media query en la pagina-victima viendo el “punto de quiebre” en vivo.
> 

### 5.1 La Era Oscura: Dos páginas web

**EN PANTALLA: EXCALIDRAW.**

> **Tu explicación teórica precisa:**
“*Hace años no existía el responsive.*, el mundo enfrentó el mismo problema de diseño que estamos viendo ahora: la página de computadora se veía horrible y apretada en el celular.
**¿Saben cuál fue la solución de la industria? Hacer el trabajo dos veces.**
Antes, los programadores diseñaban una página web robusta y completa para la pantalla de la computadora (ej: facebook.com). Y luego, creaban desde cero *otra página web completamente distinta y simplificada* que vivía en un enlace separado para los celulares (ej: m.facebook.com).
Era una pesadilla de mantenimiento. Si cambiabas un simple color en la PC, el programador tenía que recordar ir a cambiar manualmente el color en la web del móvil para que coincidan.”
> 
> 
> ***Alguien dijo: ¿y si hacemos un solo código HTML, y le enseñamos al CSS a comportarse de forma diferente dependiendo de quién lo mira? Así nació Mobile First.”***
> 

### 5.2 ¿Qué es Mobile First?

**EN PANTALLA: PRESENTACIÓN — Diagrama del flujo Mobile First.**

> *“Mobile First es una estrategia: diseña y escribe tu CSS base pensando exclusivamente en celulares. Cuando eso esté bien, agrega reglas extra para tablets, luego para laptops.*
> 
> 
> *¿Por qué empezar por mobile? Porque es más fácil expandir que comprimir. Si diseñas para escritorio primero y luego intentas meter ese diseño en 400px, es como intentar meter una mansión en un micro departamento.*
> 

> 
> 
> 
> **IMPORTANTE:**
> *Google además penaliza en posicionamiento SEO si tu página no es responsive en mobile. No es una recomendación — es un requisito de la industria.”*
> Google aplica una penalización de visibilidad si tu pagina web no se adapta correctamente a moviles: esto significa que Google usa exclusivamente la versión móvil de tu web para decidir en qué posición aparece.
> Si tu sitio no es responsive, el algoritmo lo considera de baja calidad, hundiéndolo en los resultados de búsqueda
> 

**DIFERENCIA MOBIL DESIGN - RESPONSIVE DESIGN**

> La diferencia principal es el **punto de partida**: **mientras que el Responsive Design adapta un diseño de escritorio ya existente hacia pantallas pequeñas, el Mobile First diseña primero la experiencia móvil y luego la expande hacia pantallas más grandes**.
> 

| Estrategia | Punto de partida | Herramienta principal |
| --- | --- | --- |
| Responsive Design (lo que hicimos) | Desktop → achica | max-width |
| Mobile First | Mobile → expande | min-width |

### 5.3 Los Breakpoints Estándar

**EN PANTALLA: EXCALIDRAW — Línea horizontal con los rangos.**

> *“No construimos para el iPhone 15 específicamente. Construimos para rangos de ancho.
En la industria moderna nos basamos en estándares. Cuando el simulador marca de **0 a 639px**, asumimos que nos están viendo en un celular (nuestro CSS base). Cuando el medidor cruza el umbral de los **768px**, decimos que saltamos a la categoría “Tablet”. Cuando el medidor cruza los **1024px**, declaramos el territorio “Desktop” (Computadoras portátiles/escritorio). Esos números se llaman **Breakpoints** (Puntos de quiebre).
La industria tiene breakpoints estándar:”*
> 

| Dispositivo | Ancho aproximado | Breakpoint |
| --- | --- | --- |
| Celular (base) | 0 – 639px | *(CSS base, sin media query)* |
| Tablet | ≥ 640px | @media (min-width: 640px) |
| Laptop pequeña | ≥ 768px | @media (min-width: 768px) |
| Laptop / Desktop | ≥ 1024px | @media (min-width: 1024px) |
| Monitor grande | ≥ 1280px | @media (min-width: 1280px) |

> *“Un Breakpoint es la línea invisible donde el diseño cambia. Es el punto de quiebre donde el CSS dice: ‘a partir de aquí, aplica estas reglas nuevas’.”*
> 

### 5.4 ¿Qué es una Media Query?

**EN PANTALLA: EXCALIDRAW — Sección de Media Queries y breakpoints del archivo CLASE06.excalidraw.**

> **Explicación teórica:***"Las Media Queries son la herramienta que usamos para implementar Mobile First. ¿Qué es una Media Query? No es una propiedad CSS. No es un estilo. **Es aplicar estilos, pero basados en condiciones.***
> 
> 
> *Para los que vienen de programación: es exactamente como el if y el else que van a ver en JavaScript. Si una condición se cumple, se aplican los estilos que tú indiques.*
> 
> ***La sintaxis en CSS**: escribimos @media seguido de la condición entre paréntesis, abrimos llaves como si fuera un bloque, y adentro ponemos las reglas. Importante: adentro no se pone una propiedad suelta — se pone una regla completa: selector y propiedades.*
> 
> *¿Qué condiciones vamos a usar? Las que se basan en el ancho del viewport. Ya las conocen — las vimos antes como propiedades, ahora las usamos como condiciones:*
> 
> - ***max-width: valor → Aplica si el ancho del viewport es menor a ese valor (de ese valor hacia abajo)***
> - ***min-width: valor → Aplica si el ancho del viewport es mayor a ese valor (de ese valor hacia arriba)***
> 
> *¿Por qué trabajamos con el ancho y no el alto? El scroll vertical ya lo damos por descontado. El problema en responsive es siempre horizontal.*"
> 

> **Nota táctica:** En el Excalidraw, mostrar el diagrama con un viewport de 1024px, la condición min-width: 1000px, y la pregunta: ¿se aplica o no? (Sí, porque 1024 > 1000). Luego con max-width: 1000px: ¿se aplica? (No, porque 1024 no es menor a 1000). Usar la misma dinámica de pregunta/respuesta que en la transcripción.
> 

### Dinámica: "¿Aplica o no aplica?" — max-width

**EN PANTALLA: EXCALIDRAW — Dibujar en vivo un viewport de 1024px con una imagen adentro.**

> *"Voy a dibujar un viewport. Tiene 1024 píxeles de ancho. Adentro hay una imagen. Le pongo esta media query:"*
> 

```css
@media (max-width: 1000px) {
    img {
        width: 400px;
    }
}
```

> **Pregunta de calibración:***"P**ara este viewport de 1024px — ¿se aplica o no se aplica esta regla? ¿La imagen va a tener 400 píxeles? Me responden en el chat.**"*
> 

*(Esperar respuestas — habrá debate entre "sí" y "no".)*

> *"La respuesta es NO. El max-width: 1000px dice: aplica si el ancho del viewport es MENOR a 1000. Mi viewport tiene 1024px. ¿Es 1024 menor a 1000? No — es mayor. La condición no se cumple, las reglas se ignoran.*
> 
> 
> *max-width es un límite superior. Aplica para viewports más angostos que ese valor — desde ese número hacia abajo.*"
> 

### Dinámica: "¿Aplica o no aplica?" — min-width

**EN PANTALLA: EXCALIDRAW — Mismo viewport de 1024px. Solo cambia la condición.**

> *"Ahora cambio solo una palabra. Mismo viewport de 1024, misma imagen, misma regla adentro. Solo max pasa a ser min:"*
> 

```css
@media (min-width: 1000px) {
    img {
        width: 400px;
    }
}
```

> **Pregunta de calibración:***"Mismo escenario: viewport de 1024px, condición min-width: 1000px. ¿Aplica o no aplica?"*
> 

*(Esperar respuestas.)*

> *"La respuesta es SÍ. El min-width: 1000px dice: aplica si el ancho del viewport es MAYOR a 1000. Nuestro viewport es 1024 — ¿es 1024 mayor a 1000? Sí. Condición cumplida, la regla se activa.*
> 
> 
> *min-width es un límite inferior. Aplica para viewports más anchos que ese valor — desde ese número hacia arriba.*
> 
> ***Para acordarse: max-width apunta hacia abajo. min-width apunta hacia arriba.** Para Mobile First usamos min-width — CSS base para el celular, y media queries que se activan conforme el viewport crece.*"
> 

> **Nota táctica:** Si el grupo sigue confundido, anotar en Excalidraw: 1024 > 1000 ✓ (min-width aplica) y 1024 < 1000 ✗ (max-width no aplica). Repetir con viewport 400px para el caso contrario si es necesario.
> 

### Demostración en vivo — Breakpoints con la imagen

**EN PANTALLA: NAVEGADOR + VS Code → practica_clase06/. Bloque MEDIA QUERIES ya activo en style.css.**

> *"Ahora lo vemos en código real. Estoy haciendo Mobile First. El CSS base — sin ninguna media query — le pone 300px a la imagen. Eso está en el rango de los celulares (0 a 639px). Ahora quiero que crezca cuando el viewport llegue al rango de tablet, laptop y escritorio. Para eso apilo media queries con min-width:"*
> 

```css
/* BASE — Celular (sin media query) */
img { width: 300px; }

/* TABLET: a partir de 640px en adelante */
@media (min-width: 640px) {
    img { width: 500px; }
}

/* LAPTOP PEQUEÑA: a partir de 768px en adelante */
@media (min-width: 768px) {
    img { width: 650px; }
}

/* LAPTOP / DESKTOP: a partir de 1024px en adelante */
@media (min-width: 1024px) {
    img { width: 800px; }
}
```

- Abrir DevTools y reducir el viewport desde desktop lentamente.
- Pedir al grupo que estén atentos al momento exacto donde la imagen cambia.

> *"¿Vieron esos saltos? En 640 la imagen pasó de 300 a 500 de golpe. En 768 saltó a 650. En 1024 a 800. Esos son los breakpoints.*
> 
> 
> *Lo que ocurre por detrás: cada media query sobreescribe a la anterior en las propiedades específicas que indicamos adentro. No reemplaza todo el CSS — solo las propiedades del bloque. El resto de estilos base sigue activo.*
> 
> *Mobile First en práctica: CSS base para el celular y media queries que van expandiendo el diseño hacia dispositivos más grandes."*
> 

> *"Una Media Query no dibuja colores ni posiciones por sí sola. Es una condición. Es exactamente como el `if` que verán en JavaScript: si se cumple esta condición, aplica estas reglas.*
> 

### 5.5 Code-Along — Arreglar la Página Víctima con Mobile First

**EN PANTALLA: PANTALLA DIVIDIDA — pagina-victima/style.css + DevTools en iPhone.**

> *“Ahora juntamos todo. La página víctima ya tiene los contenedores en width: 100% y los textos en rem. Nos falta lo más importante: el layout.*
> 
> 
> *En mobile, el hero, las features y el footer están en flex-direction: row. Eso es lo que los apila horizontalmente. Vamos a hacer Mobile First: el CSS base lo dejamos en column, y en el breakpoint de 1024px lo expandimos a row.”*
> 

**Paso 1 — CSS base (mobile):**

```css
/* En el CSS base — sin ningún @media */

.hero {
    flex-direction: column;    /* En mobile: imagen arriba, texto abajo */
    align-items: center;
    padding: 40px 20px;
    min-height: auto;          /* Sin altura fija en mobile */
    text-align: center;
}

.hero-content {
    width: 100%;               /* Ocupa todo el ancho disponible */
}

.hero-img {
    width: 90%;                /* Proporcional al contenedor */
    max-width: 400px;          /* No se pasa de esto */
}

.features {
    flex-direction: column;    /* En mobile: tarjetas apiladas */
    align-items: center;
    padding: 40px 20px;
}

.feature-box {
    width: 100%;               /* Cada tarjeta ocupa todo el ancho */
    max-width: 420px;
}

.footer {
    flex-direction: column;    /* En mobile: brand arriba, links abajo */
    gap: 20px;
    padding: 40px 20px;
    text-align: center;
}

.footer-links {
    gap: 20px;
}
```

**Paso 2 — Breakpoint de desktop (1024px):**

```css
/* Al final del archivo style.css */
@media (min-width: 1024px) {

    .hero {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        min-height: 100vh;
        padding: 60px 80px;
        text-align: left;
    }

    .hero-content {
        width: 550px;
    }

    .hero-img {
        width: 500px;
    }

    .features {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        padding: 80px 60px;
    }

    .feature-box {
        width: 30%;
    }

    .footer {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 40px 60px;
    }

    .footer-links {
        gap: 40px;
    }

}
```

**El momento mágico:**

> *“Ahora tomen el borde del simulador y muévanlo lentamente. 800px… 900px… 1000px… 1010px… 1023px…*
> 
> 
> *¡1024! ¿Lo vieron? Todo el layout cambió de golpe. Las tarjetas saltaron a horizontal, el hero se expandió, el footer se ordenó. Eso es un breakpoint. Una sola línea de código que dice ‘a partir de aquí, el mundo cambia’.*
> 
> *En mobile: todo está en columna, legible, cómodo. En desktop: todo está en fila, aprovechando el espacio. Una sola página, dos mundos, cero scroll horizontal.”*
> 

### 🚨 Gestión de Riesgos — Media Queries

> **La media query no activa nada:** Verificar que está al fondo del archivo CSS, después de los estilos base. Si está antes, los estilos base la sobreescriben.**El breakpoint se activa en el valor equivocado:** min-width: 1024px significa “1024 y más”. 
Si quieren que sea “769 y más”, cambian el valor.**Todo se ve igual en desktop y mobile:** Probablemente no hay un Live Server activo. Ctrl+S y recargar el navegador.**Las media queries de practica_clase06 interfieren con pagina-victima:** Son archivos separados — cada style.css afecta solo a su index.html.
> 

## MOMENTO 6: Cierre y Lab

**EN PANTALLA: NAVEGADOR — pagina-victima/ en DevTools, moviéndose entre mobile y desktop.**

> *“Miren lo que acaba de pasar. Empezamos con una página que se rompía en cualquier celular. Ahora tiene cajas que fluyen con porcentajes, textos que escalan con rem, y un layout que cambia inteligentemente según el dispositivo.*
> 
> 
> *Esto no es una técnica del bootcamp. Esto es exactamente lo que hace YouTube, Spotify, el Banco de Crédito, cualquier empresa que construye para internet. Construir para 5 mil millones de pantallas distintas al mismo tiempo.”*
> 

**Puente a la Clase 07:**
> *“En la siguiente clase tomamos todo esto y lo aplicamos a MyLinks — su proyecto del Módulo 2. Van a terminar la clase con una página que se ve profesional en cualquier dispositivo y que pueden mostrar en una entrevista.”*

**Entregable del Lab 06:**
- Screenshot de **MyLinks en vista mobile** (simulador de iPhone en DevTools)
- Screenshot de **MyLinks en vista desktop**
- URL del repositorio en GitHub con los cambios commiteados