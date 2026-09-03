## MOMENTO 2 — Normalización + Flexbox completo aplicado al landing

> **OBJETIVO:** El alumno aplica el reset universal, entiende ***box-sizing: border-box***, recibe la teoría completa del modelo Flexbox (contenedor vs ítem, main axis vs cross axis) y aplica los 4 verbos esenciales en el nav. Luego escala el modelo a los demás bloques del landing: estilos limpios de enlace, hero con ***flex-direction: column***, footer con ***inline-flex*** y formulario con patrón Flexbox vertical. Al cerrar M2, el landing se ve ordenado de extremo a extremo.
> 

### 2.1 Reset universal y ***box-sizing: border-box*** — Parte 1.1  del labo

**EN PANTALLA: NAVEGADOR CON DEVTOOLS ABIERTO — la página del landing del alumno; F12 abierto en la pestaña Elements, inspeccionando un *<h1>* y un *<a>* para ver los estilos por default que aplica el navegador.**

> **Tu apertura:***"Antes de escribir Flexbox, demostramos por qué el lab nos pide normalizar primero. Inspeccionemos el **<h1>** y el **<a>** que ya tienen en su landing."*
> 

> **Demo del problema en vivo:**
> 
> 1. Abrir el landing con Live Server.
> 2. F12 → Elements → seleccionar el ***<h1>***.
> 3. En la pestaña Computed (o Styles), mostrar ***margin-block-start: 0.67em*** que viene de ***user-agent stylesheet***.
> 4. *"Eso no lo escribí yo. Eso es Chrome. Firefox pone otro valor. Safari otro."*
> 5. Seleccionar un ***<a>*** del nav. Mostrar ***text-decoration: underline*** y ***color: -webkit-link*** — también del user-agent.
> 6. *"Si meto Flexbox encima de esto, cada navegador hace los cálculos partiendo de un margen distinto. Por eso normalizamos antes."*

> **Tu explicación teórica precisa:***"**La normalización es un bloque corto que va al inicio del CSS y borra los defaults del navegador.**
Lo escribimos con el selector universal — el asterisco — para que aplique a todos los elementos. Le metemos margin y padding en cero, y le metemos **box-sizing: border-box**. 
 **box-sizing: border-box**. Propiedad que cambia cómo el navegador calcula el ancho real de cualquier elemento. Vamos a verlo lado a lado."*
> 

**EN PANTALLA: EXCALIDRAW — Patrón 3 (Comparativa X vs Y): **_box-sizing_** en sus dos modos lado a lado. A la izquierda **_content-box_** (default), a la derecha**
**Imagina que creas dos cajas y a ambas les das exactamente los mismos valores en CSS: **ancho de 200px, padding de 20px y borde de 5px**. La única diferencia entre ellas es la propiedad `box-sizing`.Esto es lo que pasa en la pantalla:
• **A la izquierda (`content-box` - El defecto del navegador):** Los 200px se asignan *únicamente* al espacio del contenido. El padding y el borde se suman por fuera de esa medida. Como resultado, la caja se estira y mide **250px reales** en total.
• **A la derecha (`border-box` - El modelo inteligente):** Los 200px definen el tamaño *total y definitivo* de la caja. El padding y el borde se acomodan hacia adentro, haciendo que el espacio del contenido se achique para que todo quepa. La caja mide **200px reales**, exactamente lo que declaraste.

*Por eso el reset universal usa **border-box**: lo que escribes es lo que ocupa en pantalla.* 

**EN PANTALLA: VS CODE — *styles.css* del proyecto, abierto al inicio del archivo (vacío o con líneas residuales de C01).**

> **Code-along del lab — Parte 1.1 (Normalización CSS):**
> 
> 1. Abrir ***styles.css***.
> 2. Escribir al inicio del archivo el bloque del lab:
> 
> ```css
> * {
>   margin: 0;
>   padding: 0;
>   box-sizing: border-box;
> }
> 
> body {
>   font-family: system-ui, sans-serif;
>   line-height: 1.5;
>   color: #1a1a1a;
> }
> ```
> 
> 1. Guardar. Live Server recarga.
> 2. Verificar en el navegador: el ***<h1>*** ya no tiene margen superior; los ***<ul>*** ya no tienen padding a la izquierda. El landing arranca pegado al borde superior de la pantalla.
> 3. *"Bien. Limpieza hecha. Ahora sí entramos al modelo."*

### 2.2 Modelo Flexbox + 4 verbos aplicados al ***<nav>*** — Parte 1.2  del labo

**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + Patrón 1 (Anatomía de sintaxis)**

> **Tu explicación teórica precisa:***"**Flexbox es un modelo de CSS para distribuir elementos en una sola dirección a la vez: horizontal o vertical.** 
Elementos
-  Contenedor Flex: Es la caja que agrupa a los hijos flex
- Hijos Flex : Son los elementos dentro del contenedor flex que se va a distribuir segun las propiedades Flex*
> 
> 
> *"Cada contenedor tiene dos ejes perpendiculares: el **main axis(eje principal)** y el **cross axis(eje secundario)**. La dirección del main axis la decide la propiedad **flex-direction**. Por default es **row** — horizontal, izquierda a derecha. Si la cambio a **column**, el main axis se vuelve vertical. ."*
> 
> *"Y los 4 propiedades flex que vamos a usar todo el día son estos. 
> - **display: flex** activa flexBox en un contenedor.
> - **gap** separa los ítems sin tener que meterle margin a cada hijo. 
> - **justify-content** decide cómo se distribuyen los ítems en el **eje principal** — pegados al inicio, al centro, separados con espacio igual. 
> - **align-items** decide cómo se alinean en el **eje secundario**.* 
> 

**LABO PARTE 1.2** 

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — *styles.css* a la izquierda; navegador con el nav del landing visible a la derecha.**

- Explicaciones durante el laboratorio
    - *Le pongo **display: flex** al contenedor y todos sus hijos directos se vuelven flex items — quedan bajo el modelo. Los nietos no. Solo los hijos directos. Esa es la regla 1: padre con **display: flex**, hijos como ítems."*
    - Las propiedades van dentro del contenedor

> **Code-along del lab — Parte 1.2 (Flexbox básico en el nav):**
> 
> 1. Bajar en ***styles.css*** debajo del bloque de reset.
> 2. Pega el codigo de la parta 1.2
> 
> ```css
> header nav {
>   display: flex;
>   gap: 1rem;
>   justify-content: space-between;
>   align-items: center;
>   padding: 1rem;
> }
> ```
> 
> 1. Escribir ***display: flex*** primero. Guardar. *"Los enlaces ya están en fila horizontal — eso lo activó **display: flex** solo. El default de **flex-direction** es **row**."*
> 2. Agregar ***gap: 1rem***. Guardar. *"Aparece espacio entre los enlaces. No usamos margin — usamos **gap**."*
> 3. Agregar ***justify-content: space-between***. Guardar. *"El primer enlace se va al borde izquierdo, el último al borde derecho, el resto distribuido. Eso es el main axis."*
> 4. Agregar ***align-items: center*** y ***padding: 1rem***. Guardar. *"Todo verticalmente al centro, con respiro arriba y abajo."*

> **Predecir antes de ejecutar:***"Antes de cambiar **space-between** por **center** — díganme en el chat: ¿qué creen que va a pasar con los enlaces? ¿Dónde van a quedar?"(Esperar 30 segundos. Esperar respuestas en el chat. Respuesta esperada: los enlaces se agrupan al centro del nav, todos juntos, sin pegarse a los bordes. Después cambiar el valor en vivo, mostrar el resultado, devolver el valor a **space-between**.)*
> 

> **Preguntas de Activación:**
> 
> 1. *"Si saco **align-items: center** del bloque, ¿qué pasa con la alineación vertical de los enlaces?"(Respuesta esperada: queda en **stretch** que es el default — los enlaces se estiran a la altura del contenedor. Visible si el contenedor tiene altura distinta a la del texto. En este caso el padding crea esa altura.)*
> 2. *"Si cambio **gap: 1rem** por **gap: 0**, ¿los enlaces se pegan o se solapan?"(Respuesta esperada: se pegan, pero no se solapan. Cada uno ocupa su propio espacio — el gap solo controla la separación visible entre ellos, no la posición.)*

### 2.3 Estilos limpios a los enlaces del nav — Parte 1.3  del labo

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el nav del landing visible, los enlaces todavía azules y subrayados (estilo default del navegador).**

> **Tu explicación teórica precisa:***"El layout del nav ya está. **Pero los enlaces se siguen viendo como hipervínculos clásicos** — azules, subrayados. 
Eso es el default del navegador. En un nav real, los enlaces se ven como elementos de menú: sin subrayado, en el color del tema, con un peso de letra que destaque.*
> 

> **Code-along del lab — Parte 1.3 (Estilos a los enlaces del nav):**
*Tres propiedades resuelven eso. **text-decoration: none** quita el subrayado. **color** define el color del texto. **font-weight: 700** es el peso bold."*
> 
> 1. Debajo del bloque ***header nav***, escribir:
> 
> ```css
> nav a {
>   text-decoration: none;
>   color: #1a1a1a;
>   font-weight: 700;
> }
> ```
> 
> 1. Guardar. Verificar en navegador: los enlaces ya no están subrayados, son negros y bold.
> 2. *"Ya no parecen hipervínculos clásicos. Parecen elementos de menú. Eso es lo que queremos."*

### 2.4 ***flex-direction: column*** en el hero — primera aparición de mobile-first — Parte 1.4  del labo

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el hero del landing visible, con título, párrafo e imagen apilados sin orden.**

> **Declarar la metodología en voz alta (importante — primera vez):***"Antes de CONTINUAR, una cosa que vale la pena aclarar: estamos construyendo este landing con la estrategia **mobile-first**. 
**Que es mobile-first?** : Diseñar pensando primero en las pantallas de los teléfonos móviles y luego adaptarla a los monitores grandes
¿Qué significa eso? **Que el CSS base lo pensamos para pantalla pequeña primero. Para móvil. Es nuestro estado por default.** 
Después, vamos a agregar media queries que **agregan** estilos cuando la pantalla crece. Nunca al revés. El hero es la primera aplicación visible de esto: lo dejamos apilado por default (estado móvil)*
> 

> **Code-along del lab — Parte 1.4 (Hero con flex-direction: column):**
> 
> 1. Debajo de la regla ***nav a***, escribir:
> 
> > *Hasta ahora **flex-direction** estuvo en su default **row** — horizontal. Le voy a poner **column** al hero para que el main axis sea vertical. Eso significa que ahora **justify-content** controla el eje vertical y **align-items** controla el horizontal. Los ejes se invierten cuando cambio **flex-direction**."*
> > 
> 
> ```css
> #hero {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   gap: 2rem;
>   padding: 2rem;
>   text-align: center;
> }
> 
> #hero img {
>   max-width: 100%;
>   height: auto;
> }
> ```
> 
> 1. Guardar. El hero ahora apila título, párrafo e imagen centrados.
> 2. *"Fíjense que la imagen ocupa el ancho completo del padre. Eso es por **max-width: 100%** — la imagen puede medir hasta su tamaño nativo, pero su tope es el 100% del padre. **height: auto** mantiene la proporción."*

### 2.5 ***display: inline-flex*** en el ***<footer>*** — Parte 1.5 del labo

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el footer del landing visible con el contacto a la izquierda y los 3 iconos sociales sueltos.**

> **Code-along del lab — Parte 1.5 (Flexbox en el footer):**
> 
> 1. Debajo de la regla ***#hero img***, escribir:
> 
> > **Tu explicación teórica precisa:***"Dos cosas en el footer. La primera es Flexbox al footer mismo — **display: flex** + **justify-content: space-between** + **align-items: center** — eso ya lo conocen, igual que el nav. 
> La segunda es nueva: los **<a>** del footer tienen un icono SVG adentro, y queremos que cada enlace alinee bien su icono sin que el enlace ocupe todo el ancho. Para eso existe **display: inline-flex** — un Flexbox que se comporta como inline en el flujo del documento, no como bloque. 
> El **<a>** se queda en línea con su contexto, pero internamente alinea su contenido con Flexbox."*
> > 
> 
> ```css
> footer {
>   display: flex;
>   justify-content: space-between;
>   align-items: center;
>   padding: 1rem 2rem;
>   gap: 1rem;
>   background: #f5f5f5;
> }
> 
> footer a {
>   display: inline-flex;
>   align-items: center;
> }
> ```
> 
> 1. Guardar. Verificar: el contacto está a la izquierda del footer, los iconos a la derecha. Cada icono está bien centrado verticalmente dentro de su enlace.
> 2. *"El footer se ve balanceado. Si pasáramos esto a **display: flex** en vez de **inline-flex**, cada **<a>** ocuparía toda su línea — los iconos se apilarían verticalmente. Por eso es **inline-flex**."*

> **Pregunta de calibración:***"**En una línea — ¿cuál es la diferencia entre display: flex y display: inline-flex desde afuera del contenedor FLEX?**"(Respuesta esperada: **display: flex** se comporta como bloque (ocupa toda la línea de su contexto); **display: inline-flex** se comporta como inline (se ajusta al tamaño de su contenido y convive en línea con otros elementos). Adentro, ambos aplican el modelo Flexbox a sus hijos.)*
> 

### **2.6 Flexbox aplicado al formulario de contacto — Parte 1.6 del labo**

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el formulario de contacto del landing visible con labels e inputs desalineados, sin estructura.**

> **Code-along del lab — Parte 1.6 (Formulario con Flexbox):**
> 
> 1. Debajo de la regla ***footer a***, escribir el bloque completo del lab:
> 
> > **Tu explicación teórica precisa:***"Último bloque del momento: el formulario. Aplicamos el mismo patrón de Flexbox vertical que usamos en el hero, pero esta vez con detalles que mejoran el look del form. 
> - La sección padre **#contacto** se vuelve flex container vertical para centrar el form en la página. 
> - El **<form>** adentro también es flex vertical — apila los labels y los inputs con un **gap** uniforme. Eso reemplaza el viejo hack de meter **margin-bottom** a cada hijo. 
> - Después aplicamos detalles puntuales: **font: inherit al input para que use la tipografía del body en vez de la default del navegador(**usualmente Arial o Times New Roman dependiendo del sistema operativo. No coincide con la tipografía del body. **font: inherit** hereda la fuente del padre**)
> - cursor: pointer** al botón para que se sienta clickeable al pasar el mouse; **border-radius** para esquinas suaves; padding y background al botón para que se vea como botón."*
> > 
> > 
> > > **Predecir antes de ejecutar:***"Antes de agregar **cursor: pointer** al botón — ¿qué cursor sale cuando paso el mouse encima por default? ¿Manita, flecha o algo más?"(Esperar respuestas. Resultado real: flecha — los **<button>** vienen con **cursor: default**, no manita. Por eso hay que ponerlo explícito. Después demostrar: agregar **cursor: pointer**, guardar, pasar el mouse — la manita aparece.)*
> > > 
> 
> ```css
> #contacto {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   padding: 2rem;
> }
> 
> #contacto form {
>   display: flex;
>   flex-direction: column;
>   gap: 0.5rem;
>   width: 100%;
> }
> 
> #contacto label {
>   font-weight: 600;
> }
> 
> #contacto input {
>   padding: 0.5rem;
>   border: 1px solid #e0e0e0;
>   border-radius: 4px;
>   font: inherit;
> }
> 
> #contacto button {
>   margin-top: 1rem;
>   padding: 0.75rem;
>   background: #1a1a1a;
>   color: #fff;
>   border: none;
>   border-radius: 4px;
>   font-weight: 600;
>   cursor: pointer;
> }
> ```
> 
> 1. Guardar después de cada bloque. Verificar en vivo:
>     - Después de ***#contacto***: la sección se centra horizontalmente en la página.
>     - Después de ***#contacto form***: labels e inputs apilados verticalmente con espacio uniforme.
>     - Después de ***#contacto input***: el input deja de verse como input genérico — usa la fuente del body, tiene borde gris claro, esquinas suaves.
>     - Después de ***#contacto button***: el botón se ve sólido, negro, con texto blanco. Al pasar el mouse encima — la flecha del cursor cambia a manita.

> **Reto autónomo al cerrar M2:**
Agregar una segunda fila al footer con dos enlaces — "Términos y Condiciones" y "Política de Privacidad" — usando Flexbox interno. Pista: dos opciones — (a) convertir el footer en ***flex-direction: column*** y reorganizar adentro; (b) agregar una ***<div>*** debajo del footer actual con su propio Flexbox horizontal. Criterio: los dos enlaces aparecen en una sola fila separada del contacto y los iconos.
> 

> **Commit sugerido al cerrar M2:**
> 
> 
> ```bash
> git add styles.css
> git commit -m "feat: normalización CSS + Flexbox básico en nav, hero, footer y form"
> git push
> ```
>