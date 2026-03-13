

## **Que son las unidades de medida?**

> Las unidades de medida CSS son **valores** **que se utilizan para especificar el tamaño de diferentes propiedades**, como ancho, alto, margen, relleno, etc.
> 
> 
> <aside>
> 💡
> 
> **En CSS definiremos tamaños(altura,ancho,márgenes,etc) frecuentemente.**
> 
> </aside>
> 

### Tipos de unidades de medida?

> CSS divide las unidades de medida en dos grupos: absolutas y relativas.
> 
- **Unidades  Absolutas**
    
    > Las unidades absolutas **se basan en un valor fijo y predefinido** , sin depender de ningun factor.
    > 
    > - **Ventajas:** Proporcionan un control preciso(conocemos el valor puesto que es predefinido) y predecible sobre el tamaño de los elementos
    > - **Desventajas: No son flexibles para diferentes tamaños de pantalla o resoluciones**. Un diseño basado en unidades absolutas puede verse diferente en distintos dispositivos o pantallas.
    >     
    >     
- **Unidades Relativas**
    
    > Las unidades relativas, a diferencia de las absolutas, **no están completamente definidas**, ya que **su valor siempre está referenciado respecto a otro valor.
    Las unidades relativas se basan en un valor que se relaciona con otro elemento o propiedad, como el tamaño de la fuente, el tamaño del contenedor padre, o el tamaño de la ventana del navegador.**
    > 
    > - **Ventajas:** **Permiten crear diseños flexibles y adaptables a diferentes tamaños de pantalla y resoluciones.** Mejoran la accesibilidad, ya que el diseño se ajusta al tamaño de la fuente del usuario.
    > - **Desventajas:** Pueden ser más complejas de entender y controlar, ya que el tamaño depende de otros factores.


---

## Concepto de Porcentaje CSS

> **Es una unidad relativa**
Los porcentajes (%) son una **unidad de medida relativa en CSS que se basan en el tamaño del elemento padre.**
> 
> 
> <aside>
> 💡
> 
> **Unidad responsiva basado en el elemento padre**
> Los porcentajes **son esenciales para crear diseños responsivos**. Utiliza porcentajes para crear elementos que se ajusten a diferentes tamaños de pantalla**.**
> 
> </aside>
> 

### Esencia del Porcentaje

- **Dependencia**
    
    > Los porcentajes **se basan en el tamaño del elemento padre**.
    > 
- **Flexibilidad**
    
    > Los elementos con dimensiones definidas en porcentajes **cambiarán de tamaño automáticamente cuando el tamaño del elemento padre cambie**
    > 

## Aplicacion

> Cuando se utiliza una unidad de porcentaje (%) **para una propiedad CSS de un elemento hijo, el navegador calcula el porcentaje con respecto al valor correspondiente de la propiedad del elemento padre.**
> 
> - **Propiedad del padre:** El navegador primero determina el valor de la propiedad correspondiente del elemento padre. Esto puede ser el ancho (`width`), la altura (`height`), el margen (`margin`), el relleno (`padding`), etc., dependiendo de la propiedad del elemento hijo a la que se aplica el porcentaje.
> - **Cálculo del porcentaje:** Una vez que se conoce el valor de la propiedad del elemento padre, **el navegador calcula el valor de la propiedad del elemento hijo multiplicando el valor del padre por el porcentaje especificado.**
> - **Sintaxis**
>     
>     > Un porcentaje está **formado por un valor numérico seguido del símbolo %**
>     > 
>     > 
>     > ```css
>     > propiedad_CSS: valor_numerico% 
>     > ```
>     > 

<aside>
💡

**Ejemplo explicativo**
Tienes el sgte codigo en HTM

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/0654596f-ad87-41af-aa55-fc7cdbc80966/5d4b202c-030b-47cb-a9f2-ac7b62cb2c0c/image.png)

Y este es el estilo que se aplica

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/0654596f-ad87-41af-aa55-fc7cdbc80966/443c6c48-e74c-4e51-9598-bc333c983a10/image.png)

**Resultado**

En este caso, **el elemento padre .parent tendrá un tamaño de 200px.** **Su hijo, el elemento. child tiene un tamaño de ancho de 50%, o lo que es lo mismo, la mitad del tamaño de su padre(50% de 200): 100px.**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/0654596f-ad87-41af-aa55-fc7cdbc80966/0a6776de-565d-4596-beaa-0bfe7b7faa31/image.png)

</aside>

- **Comportamientos especiales**
    - **Usar 100%**
        
        > El elemento **ocupará el 100% del ancho o alto disponible del elemento padre.**
        > 
    - **Más del 100%**
        
        > El elemento **se extenderá más allá de los límites del elemento padre.** Esto puede resultar en un desbordamiento (overflow) si no se maneja correctamente
        >

---

## Introduccion : Unidades relativas em y rem

> Estas unidades se relacionan con el **tamaño de fuente**
> 

<aside>
💡

"Tamaño de fuente" se refiere al **tamaño del texto** que se muestra en un elemento HTML. 
Está determinado por la propiedad `font-size`.

![image.png](attachment:bbd126b0-69c3-4b39-ba22-00ff48cd15a0:image.png)

</aside>

<aside>
💡

**Importante :** La mayoría de los navegadores web utilizan un tamaño de fuente predeterminado de 16 píxeles para el elemento `<html>` 

Esto sirve como **punto de referencia para las unidades relativas como `em` y `rem`**, aunque este valor puede ser modificado por el usuario en la configuración del navegador.  

> **Es una buena práctica establecer un tamaño de fuente base para el elemento `<html>` en tu CSS para mayor control y consistencia.** 
De esta manera, aunque el usuario cambie el tamaño de fuente predeterminado del navegador, tu diseño se ajustará de forma predecible a partir de tu tamaño de fuente base declarado.
> 
</aside>

## Unidad relativa em : Basada en el tamaño del padre

> El valor de `1em` es **igual al tamaño de fuente del elemento padre del elemento actual, en especifico al valor font-size del elemento padre.
E**s una unidad que depende del tamaño de fuente del *elemento padre del elemento actual*.
> 

<aside>
💡

### **Si no hay un tamaño definido explícito en el padre (Si no se especifica un valor para `font-size`)**

> Entonces hereda el tamaño de fuente del elemento padre del padre . esta herencia continúa hacia arriba en el árbol DOM hasta que se encuentra un valor explícito, pudiendo llegar hasta el elemento **`<html>`]**
Si no se encuentra un valor explícito en ningún elemento ancestro, **se utiliza el valor predeterminado del navegador (normalmente 16px).**
> 
> 
> ![image.png](attachment:2f2b18c5-f8c4-46a7-a1d9-fca7a6cdab00:image.png)
> 
</aside>

<aside>
💡

**Por defecto, y para simplificar, se puede asumir que 1em es un valor aproximado a 16px**
Imaginemos que el tamaño de la fuente establecida en el navegador del usuario es exactamente 16px. Una cantidad 1em equivaldría a 16px, mientras que una cantidad de 2em sería justo el doble: 32px. Por otro lado, una cantidad de 0.5em sería justo la mitad: 8px.

![image.png](attachment:cba3f4ff-2bce-4889-a21d-d1735702f662:77f67acc-012a-46e7-8a3c-d100a9414180.png)

</aside>

### Sintaxis y Calculo

<aside>
💡

La sintaxis para usar la unidad `em` es sencilla:  se añade `em` después del valor numérico.

```css
//Se define un valor de 10em
propiedad: 10em; 
```

**Calculo del valor em (Multiplicacion)
El cálculo del tamaño final en píxeles (px)** depende del tamaño de fuente del elemento al que se aplica la regla `em`.  
El tamaño final se calcula asi:

```bash
**Tamaño final (px) = valor em * tamaño de fuente del elemento padre o al que aplica el em(px)**
```

**Ejemplo**

```html
<div>
	<h1>...</h1>
</div>
```

```css
div{
 font-size:16px;
}
h1{
 font-size:2.5em
}
```

El texto del `<h1>` será de `2.5 * 16px = 40px`.

![image.png](attachment:dd56d574-380f-4041-8dcb-93e631ec0495:image.png)

</aside>

<aside>
💡

**Otro ejemplo de uso de em**

![image.png](attachment:dcd3ba86-a999-455e-89cb-2e169db3b41d:image.png)

</aside>

## Unidad relativa rem: Basada en el tamaño del elemento raíz (`<html>`)

> El valor de `1rem` es **igual al tamaño de fuente definido en el `<html>` 
Por defecto, esto es 16px en la mayoría de navegadores.**
> 
> 
> ![image.png](attachment:09c68f87-f32c-4a10-8b93-1bd954508e8e:image.png)
> 
> <aside>
> 💡
> 
> No se ve afectado por el tamaño de la fuente del elemento padre más cercano**(no toma en cuenta el elemento padre solo la raiz).**
> Independientemente de dónde se use en el documento, siempre se refiere al tamaño de fuente del elemento `<html>.`
> 
> </aside>
> 

<aside>
💡

**Menos flexible que `em`:** No se adapta tan bien a los cambios de tamaño de fuente del usuario, ya que siempre se basa en el tamaño de fuente del elemento raíz.

</aside>

### Sintaxis y Calculo

<aside>
💡

La sintaxis para usar la unidad `rem` es sencilla:  se añade `rem` después del valor numérico.

```css
//Se define un valor de 10rem
propiedad: 10rem; 
```

**Calculo del valor em (Multiplicacion)
El cálculo del tamaño final en píxeles (px)** depende del tamaño de fuente del elemento `<html>`.  
El tamaño final se calcula asi:

```bash
**Tamaño final (px) = valor em * tamaño de fuente del elemento <html>(px)

Usualmente
Tamaño final (px) = valor em * 16px**
```

**Ejemplo**

```html
<div>
	<h1>...</h1>
</div>
```

```css
htnl{
 font-size:24px;
}
h1{
 font-size:2.5em
}
```

El texto del `<h1>` será de `2.5 * 24px = 60px`.

![image.png](attachment:85783550-7f8b-4366-aafc-833bcd4cd0ee:image.png)

</aside>

## Cuando usar rem y em? : Buenas practicas

### Las unidades `em` y `rem` no se limitan a la propiedad `font-size`

> Es decir no solamente son valores para la propiedad **font-size
Se pueden usar en cualquier propiedad CSS que acepte valores de longitud**
> 
- **Cómo funcionan `em` y `rem` en propiedades distintas a `font-size`?**
    - **em**
        
        > El valor `em` **se calcula *basándose en el `font-size` del elemento actual*.**  Si el elemento no tiene un `font-size` definido, hereda el `font-size` de su elemento padre, y así sucesivamente hasta llegar al elemento raíz (`<html>`)
        Esto significa que incluso si estás aplicando `em` en propiedades como `padding`, `margin` o `width`, el valor de `em` **seguirá dependiendo del tamaño de fuente definido en el elemento padre.**
        > 
        
        <aside>
        💡
        
        **Ejemplo** 
        
        ```css
        div {
          font-size: 16px;
          width: 20em; /* 20 * 16px = 320px */
        }
        ```
        
        </aside>
        
    - **rem**
        
        > Similarmente, cuando se utiliza en una propiedad diferente a `font-size`, el valor `rem` **se calcula *basándose en el `font-size` del elemento raíz (`<html>`)*.**  Independientemente de dónde se utilice en el documento, la referencia siempre será el `font-size` del elemento raíz.
        > 
        
        <aside>
        💡
        
        **Ejemplo** 
        
        ```css
        html {
          font-size: 16px; /* Tamaño base */
        }
        
        div {
          padding: 2rem; /* 2 * 16px = 32px */
        }
        ```
        
        </aside>
        

### **Define un tamaño base claro** en el `<html>` para usar `rem` o `em`de forma consistente.

> Esto proporciona un **punto de referencia estable** para todos los cálculos basados en estas unidades relativas (em y rem).
> 
> 
> **Porque?**
> 
> - Sin un tamaño base definido, el tamaño de los elementos en `rem` y `em` dependerá del tamaño de fuente predeterminado del navegador, que puede variar entre navegadores y sistemas operativos.  Esto puede llevar a inconsistencias en el diseño entre diferentes contextos.
> - Con un tamaño base definido, es más fácil predecir y mantener el tamaño de los elementos.  Los cálculos son más sencillos y se reduce la posibilidad de errores.
> - Un tamaño base permite escalar fácilmente todo el diseño cambiando solo el tamaño de fuente del elemento raíz.

<aside>
💡

**Cómo definir un tamaño base:** Se hace mediante CSS, aplicando un estilo al selector `html`:

```css
html {
  font-size: 16px; /* O cualquier otro tamaño que prefieras */
}
```

Este código establece el tamaño de fuente base en 16 píxeles.  Ahora, cualquier elemento que utilice `rem` se basará en este valor de 16px. 

```css
body {
  font-size: 1rem; /* Equivalente a 16px */
}
h1 {
  font-size: 2rem; /* Equivalente a 32px */
}
```

</aside>

### Diferencia uso rem y em

![image.png](attachment:9535d526-9549-492a-8802-6296fbfed3a4:image.png)

<aside>
💡

**Usa rem cuando:** 

- Necesitas un diseño **escalable** al cambiar el tamaño base del `<html>`.
</aside>

<aside>
💡

**Usa em cuando:** 

- Quieres que un elemento **se ajuste proporcionalmente** al tamaño de su contenedor.
</aside>

### Usa **`rem` para** **estilos globales en** tamaños de fuente principales(h1, p, etc.) y otros.

> **¿Por qué usar `rem` para estilos globales en tamaños de fuente principales?**
> 
> - Al usar `rem` para los tamaños de fuente principales (`<h1>`, `<p>`, etc.), se garantiza que estos elementos mantendrán una relación consistente con el tamaño de fuente base establecido en el elemento `<html>`
> - Si se necesita cambiar el tamaño de fuente base del sitio web (por ejemplo, para adaptarse a diferentes dispositivos o preferencias de usuario), solo se necesita modificar el `font-size` del elemento `<html>`.

> **¿Por qué usar `rem` para estilos globales?**
> 
> 
> **Consistencia a nivel global:**
> 
> - `rem` se basa en el tamaño de fuente (`font-size`) del elemento raíz (`<html>`), lo que significa que siempre es consistente en todo el documento, sin importar el contexto.
> - Es ideal para crear una escala de tamaños predecibles para el diseño global de la página.
> 
> <aside>
> 💡
> 
> **Que es un estilo global?**
> Un estilo global en CSS se refiere a un estilo que se aplica a muchos elementos o a toda la página web. 
> 
> </aside>
> 

### Usa **`em` para estilos locales** (paddings, márgenes) relacionados con el contexto inmediato.

> **¿Por qué usar `em` para estilos locales?
Se adapta al contexto inmediato(padre o propio elemento):**
> 
> - `em` se basa en el tamaño de fuente (`font-size`) del **padre directo o del elemento mismo**, lo que hace que sea **útil cuando necesitas ajustar el estilo relativo a un contexto específico**.
> 
> Por ejemplo, si tienes un componente dentro de otro, y el padre cambia su `font-size`, los estilos que usan `em` se escalan automáticamente.
> 
> **Ideal para diseños internos o modulares:**
> 
> - Cuando diseñas componentes que **deben ser flexibles y adaptarse al entorno donde se colocan (como botones, tarjetas o encabezados)**, `em` permite que esos componentes se ajusten al tamaño del texto definido en su contenedor.

### Evita los anidamientos excesivos de em


---

## Introduccion

> Son unidades de medida en CSS **que se basan en las dimensiones del área visible del navegador, conocido como el viewport.**
> 
> 
> <aside>
> 
> Estas unidades se utilizan **para referenciar un porcentaje específico del tamaño del viewport**, lo que permite crear diseños fluidos y responsivos que **se adaptan al tamaño de la ventana gráfica del navegador**.
> 
> ![image.png](attachment:d97f9f38-037b-4954-9ff2-95edb90b37cb:image.png)
> 
> </aside>
> 
- **Que es el viewport?**
    
    > El viewport es el **área visible de una página web** en la pantalla del ordenador del usuario.
    > 

## Unidad vw: Ancho del Viewport (Viewport Width)

> **Unidad que hace referencia al ancho del Viewport**
> 
> 
> <aside>
> 
> `1vw` es igual al **1% del ancho del viewport.**
> 
> </aside>
> 

<aside>

**Ejemplo**

Si definimos 50vw, estamos indicando un 50% del ancho actual del viewport.

 Si el viewport ocupa 800px de ancho, la propiedad width tendrá un valor de 400px.

![image.png](attachment:f794ae1e-ae75-496d-b312-c25ee65ceb6c:image.png)

</aside>

## Unidad vh: Alto del Viewport (Viewport Height)

> **Unidad que hace referencia a la altura del Viewport**
> 
> 
> <aside>
> 
> `1vh` es igual al **1% de la altura del viewport.**
> 
> </aside>
> 

<aside>

**Ejemplo**
Con la propiedad height a 75vh estaremos haciendo referencia al 75% del alto del navegador. 

Si el viewport tiene un tamaño de 1080px de alto, con 75vh estaríamos indicando unos 1080*75%=810px.

![image.png](attachment:15537753-b778-44d9-bcd4-0489e9134f71:image.png)

</aside>

<aside>

**Casos Específicos para Usar Unidades de Viewport:** 

- **Diseño Responsivo de Fondo**
    
    Utiliza `vw` y `vh` para establecer el tamaño de los fondos de elementos que deben cubrir todo el viewport.
    
    ```css
    .fondo {
        width: 100vw; /* Cubre el 100% del ancho del viewport */
        height: 100vh; /* Cubre el 100% de la altura del viewport */
        background-image: url('imagen.jpg');
        background-size: cover; /* Asegura que la imagen cubra todo el área del contenedor */
    }
    ```
    
    
- **Bloques de Contenido Centralizados**
Aplica `vh` y `vw` para centrar bloques de contenido en la pantalla de manera uniforme, especialmente útil para secciones de landing pages.
    
    ```css
    .contenedor-centralizado {
        width: 50vw;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3498db;
    }
    
    ```
    
    
</aside>


--- 
IMPORTANTE RESPECTO A LAAS UNIDADES RELATIVAS
Cuando implementamos unidades relativas en propiedades , esas propiedades van reducirse o expandirse , eso es flexibilidad
<aside>
💡

### **Cuándo se Reduce un Elemento**:

- Un elemento se reduce en tamaño cuando el espacio disponible en su contenedor se hace más pequeño.

### **Cuándo se expande un Elemento**:

- Un elemento se expande en tamaño cuando el espacio disponible en su contenedor se hace más grande.
</aside>

---
## Introduccion : Uso responsivo

> El control de dimensiones (witdth y height) en CSS **es crucial para crear diseños web responsivos y adaptables.**
> 
> 
> Las propiedades witdth y height tiene variantes:
> 
> - `min-width`
> - `max-width`
> - `min-height`
> - `max-height`
> 
> Estos permiten **especificar límites mínimos y máximos para el tamaño de los elementos**, asegurando que se ajusten de manera adecuada a diferentes tamaños de pantalla y dispositivos.
> 
> <aside>
> 
> Es importante entender que las propiedades `min-width`, `max-width`, `min-height` y `max-height` **no son** iguales a las propiedades `width` y `height`. En realidad, estas propiedades trabajan en conjunto para definir restricciones adicionales sobre las dimensiones de un elemento. 
> 
> ```css
> .contenedor {
>     width: 80%;         /* El ancho del contenedor será el 80% del ancho disponible */
>     height: 50vh;       /* La altura del contenedor será el 50% de la altura del viewport */
>     min-width: 200px;   /* El ancho mínimo del contenedor será de 200px */
>     max-width: 600px;   /* El ancho máximo del contenedor será de 600px */
>     min-height: 150px;  /* La altura mínima del contenedor será de 150px */
>     max-height: 400px;  /* La altura máxima del contenedor será de 400px */
> }
> ```
> 
> </aside>
> 



## min-width: Propiedad ancho minimo

> Define el ancho mínimo que puede tener un elemento.
> 
> - En otras palabras, un elemento nunca se reducirá más allá del valor especificado en `min-width` incluso si se reduce el tamaño del contenedor o del viewport.
> 
> <aside>
> 
> **Propósito**: Garantiza que un elemento **no se reduzca más allá** de un ancho específico.
> 
> **Uso**: Se utiliza para mantener la estructura del diseño, incluso en dispositivos con pantallas más pequeñas.
> 
> </aside>
> 
> <aside>
> 
> ```css
> .contenedor {
>     min-width: 200px;  /* El ancho del contenedor no será menor a 200px */
>     width: 100%;       /* El ancho por defecto del contenedor es el 100% del contenedor padre */
> }
> ```
> 
> </aside>
> 

## max-width: Propiedad ancho maximo

> Define el ancho máximo que puede tener un elemento.
> 
> - Un elemento nunca se expandirá más allá del valor especificado en `max-width`, incluso si hay más espacio disponible en el contenedor o en el viewport.
> 
> <aside>
> 
> **Propósito**: Garantiza que un elemento **no se expanda más allá** de un ancho específico.
> 
> **Uso**: Se utiliza para evitar que los elementos se estiren demasiado y mantengan una presentación consistente y legible.
> 
> </aside>
> 
> <aside>
> 
> ```css
> .contenedor {
>     max-width: 600px;  /* El ancho del contenedor no será mayor a 600px */
>     width: 100%;       /* El ancho por defecto del contenedor es el 100% del contenedor padre */
> }
> ```
> 
> </aside>
> 

## min-height: Propiedad altura minima

> Define el altura mínima que puede tener un elemento.
> 
> - En otras palabras, un elemento nunca se reducirá más allá del valor especificado en `min-height` incluso si se reduce el tamaño del contenedor o del viewport.
> 
> <aside>
> 
> **Propósito**: Garantiza que un elemento **no se reduzca más allá** de una altura específica.
> 
> **Uso**: Se utiliza para mantener la estructura del diseño, incluso en dispositivos con pantallas más pequeñas.
> 
> </aside>
> 
> <aside>
> 
> ```css
> .caja {
>     min-height: 100px; /* La altura mínima de la caja será de 100px */
>     height: 50vh;      /* La altura por defecto de la caja es el 50% de la altura del viewport */
> }
> 
> ```
> 
> </aside>
> 

## max-height: Propiedad altura maxima

> Define la altura máxima que puede tener un elemento.
> 
> - Un elemento nunca se expandirá más allá del valor especificado en `max-heigth`, incluso si hay más espacio disponible en el contenedor o en el viewport.
> 
> <aside>
> 
> **Propósito**: Garantiza que un elemento **no se expanda más allá** de una altura específica.
> 
> **Uso**: Se utiliza para evitar que los elementos se estiren demasiado y mantengan una presentación consistente y legible.
> 
> </aside>
> 
> <aside>
> 
> ```css
> .caja {
>     max-height: 400px; /* La altura máxima de la caja será de 400px */
>     height: 50vh;      /* La altura por defecto de la caja es el 50% de la altura del viewport */
> }
> ```
> 
> </aside>
> 

## Valores que pueden tomar

![image.png](attachment:192ed89b-1099-435d-b393-731dc2c5b51c:image.png)

- **Los minimos:**
    
    > **min-width** y **min-height** por **defecto tienen valor 0
    Los valores que puede tomar son unidades de medida**(pixel,porcentaje,etc).
    > 
- **Los maximos:**
    
    > **max-width** y **max-height** por **defecto tienen valor none (significa que no hay un límite máximo específico para el ancho o alto del elemento y puede expandirse y ocupar todo el espacio disponible del contenedor padre.)
    Los valores que puede tomar son unidades de medida**(pixel,porcentaje,etc).
    >

## Introduccion

> **Similar a la condicion If**
Son una característica de **CSS3** que permite **aplicar estilos específicos** **solo cuando se cumplen ciertas condiciones**
> 
> 
> Uso : P**ermiten crear un diseño responsive.**
> 

### La regla @media

> La regla `@media` en CSS te permite aplicar estilos específicos a tu página web dependiendo de la condicion
> 

<aside>
💡

**Sintaxis**

```css
@media (media-query) {
  /* Estilos que se aplicarán si se cumple la media query */
}
```

</aside>

### Media query : condicion

> La media query es una **condición que se evalúa para determinar si los estilos dentro de la regla `@media` deben aplicarse.**
> 

### En que se basan las media query o condiciones?

> Las media queries se basan en **características del dispositivo o del viewport (area visible del navegador) , no son las propiedades CSS que conocemos (width,heigth,etc).**
> 
> - **Ancho de pantalla:** `width`
> - **Altura de pantalla:** `height`
> - **Orientación:** `orientation` (portrait o landscape)
> - **Resolución:** `resolution`
> - **Otros**
> 
> ![image.png](attachment:d12c39cd-2280-430f-9deb-88fb3eec436c:image.png)
> 

## Tipos de Media Queries

> 
> 
> 
> No veremos a **min** o **max** como una propiedad CSS sino como una **condición de entrada**.
> 
> - **Min** significa desde este valor en adelante
> - **Max** significa desde este valor hacia atrás

### Medias Queries basado en el Ancho de la Viewport

### **Ancho Máximo :** `max-width`

> **“El ancho NO sera mayor al valor indicado”
Significado condicion**: Si el ancho del viewport es **menor o igual al valor especificado**, aplica los estilos dentro de esta media query.
> 

<aside>
💡

**Ejemplo**

```css
@media (max-width: 800px) {
    /* Estilos aplicados cuando el ancho del viewport es 800px o menor */
    .container {
        background-color: lightblue;
        padding: 20px;
    }
}
```

</aside>

### **Ancho Mínimo :** `min-width`

> **“El ancho NO sera menor al valor indicado”
Significado de la Condición**: Si el ancho del viewport es **mayor o igual al valor especificado**, aplica los estilos dentro de esta media query.
> 

<aside>
💡

**Ejemplo**

```css
@media (min-width: 800px) {
    /* Estilos aplicados cuando el ancho del viewport es 800px o mayor */
    .container {
        background-color: lightgreen;
        padding: 40px;
    }
}
```

</aside>

### Medias Queries basado en la altura de la Viewport

### **Altura Máxima :** `max-height`

> **“La altura NO sera mayor al valor indicado”
Significado condicion**: Si la altura del viewport es **menor o igual al valor especificado**, aplica los estilos dentro de esta media query.
> 

<aside>
💡

**Ejemplo**
Si la altura del viewport es menor o igual a 600px, el fondo del `.element` será azul claro.

```css
@media (max-height: 600px) {
    .element {
        background-color: lightblue;
    }
}
```

</aside>

### **Altura Minima:** `min-height`

> **“La altura NO sera menor al valor indicado”
Significado condicion**: Si la altura del viewport es **mayor o igual al valor especificado**, aplica los estilos dentro de esta media query.
> 

<aside>
💡

**Ejemplo**
Si la altura del viewport es mayor o igual a 800px, el fondo del `.element` será verde claro.

```css
@media (min-height: 800px) {
    .element {
        background-color: lightgreen;
    }
}
```

</aside>