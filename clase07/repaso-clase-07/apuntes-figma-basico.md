# Apuntes de Figma para el Instructor (Nivel Base - Clase 07)

> **Objetivo:** Nivelar rápidamente tus conocimientos en Figma enfocándonos **estrictamente** en las herramientas que necesitarás enseñar y usar durante el Laboratorio de la Clase 07 (Rediseño de MyLinks). No necesitas ser un máster en Figma, solo dominar estas 5 cosas.

---

### 1. El Lienzo y los Frames (Los "Viewports" de Figma)

Figma tiene un lienzo infinito. Para diseñar algo web/móvil, primero debes crear un **Frame** (Marco). Un Frame actúa como el `<body>` o el viewport del dispositivo.

- **Cómo crearlo:** Presiona la tecla `F` o haz clic en el ícono de "Frame" (el cuadradito con líneas arriba a la izquierda).
- **El Truco:** A la derecha, aparecerá un panel de propiedades. Selecciona la pestaña **"Phone"** y haz clic en **"iPhone 14 & 15 Pro"** (393x852). ¡Listo! Ya tienes la base de tu diseño Mobile First.

### 2. Formas Básicas y Textos (Tus etiquetas HTML)

Para hacer el wireframe high-fi vas a usar mayormente rectángulos, círculos y texto.
- **Rectángulo (`R`):** Presiona R y arrastra en el Frame. Funciona como un `<div>`. Lo usarás para botones y tarjetas.
- **Elipse / Círculo (`O`):** Presiona O y arrastra. ¡Tip! *Mantén presionada la tecla Shift* mientras arrastras para que el círculo sea perfecto (ideal para la foto de perfil del MyLinks).
- **Texto (`T`):** Presiona T, haz clic donde quieres escribir. Funciona como un `<h1>` o `<p>`.

### 3. Panel de Propiedades Derecho (Tus "estilos CSS")

Todo lo que seleccionas en Figma muestra sus propiedades a la derecha. Piensa en este panel como tu hoja de CSS:
- **Fill (Relleno):** Es el `background-color`. Haz clic en el cuadrado de color para cambiarlo.
- **Stroke (Trazo):** Es el `border`. Puedes ponerle grosor y color.
- **Corner Radius (Bordes Redondeados):** Es el `border-radius`. Busca el ícono con esquinas redondeadas bajo las coordenadas X/Y y ponle un número (ej: 8 para botones, 100 para píldoras).
- **Effects (Efectos):** Aquí puedes agregar un `box-shadow` (Drop shadow en Figma).

### 4. Agrupación vs Auto Layout (Tus "Flexbox")

Cuando los alumnos empiecen a poner elementos, se darán cuenta de que es difícil alinearlos.
- **Agrupación Básica (`Ctrl + G`):** Seleccionas varios elementos y los agrupas. Es como meterlos todos en un gran `<div>` estático.
- **Auto Layout (`Shift + A`):** **¡ESTO ES CLAVE!** Selecciona varios elementos y presiona `Shift + A`. Figma aplica automáticamente un equivalente visual a `display: flex;`. 
  - En el panel derecho verás la sección "Auto layout". 
  - Puedes cambiar la dirección (flecha abajo = `flex-direction: column`, flecha derecha = `row`).
  - Puedes definir el espacio entre elementos (`gap`).
  - Puedes definir el `padding` interno del contenedor.
  - *Sugerencia pedagógica:* Menciona a los alumnos: "Chicos, Auto Layout es literalmente Flexbox visual. ¿Recuerdan `gap` y `padding`? Aquí están".

### 5. Exportar (El resultado final)

Una vez que el "MyLinks" esté bonito:
1. Selecciona el **Frame principal** (haz clic en su nombre arriba del lienzo).
2. Ve al panel derecho, baja hasta el fondo donde dice **"Export"**.
3. Haz clic en el "+", elige PNG o JPG.
4. Clic en "Export [Nombre del Frame]".

---

### Resumen de Atajos de Teclado (Cheat Sheet del Instructor)
Aprenderte estos atajos te hará lucir como un pro frente a los alumnos:
- `V`: Herramienta mover (cursor por defecto).
- `F`: Crear Frame.
- `R`: Rectángulo.
- `O`: Círculo (Con Shift = perfecto).
- `T`: Texto.
- `Barra Espaciadora + Click Inclinado`: Moverte por el lienzo (como la manito en PDF).
- `Ctrl + Rueda del Ratón`: Zoom in / Zoom out.
- `Shift + A`: ¡Mágia Flexbox! (Auto layout).
- `Alt + Arrastrar`: Duplicar un elemento instantáneamente. (¡Pruébalo para clonar botones de links!).

> **Consejo Anti-Pánico:** Practica crear *un solo* botón (Rectángulo + Texto adentro -> Seleccionas ambos -> Shift+A -> Le pones color de fondo y border-radius de 8) antes de la clase. Si dominas hacer un botón usando Auto layout, tienes la clase de Figma en el bolsillo.
