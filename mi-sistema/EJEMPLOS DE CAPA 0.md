# EJEMPLOS DE CAPA 0

### CAPA 0 DE LA CLASE 04

INTRODUCCION

- SELECTORES DE AGRUPACION(COMAS)
- SELECTORES COMBINADORES -> DESCENDIENTES
padre descendiente{ /* propiedades */
}
- CONCEPTO DE ESPECIFIDAD
- HOVER(LA VES PASADA LO VIMOS SOLO PARA ENLACE PERO AHORA EXPLICAREMOS QUE ES EN REALIDAD)

INICIO CLASE 04 (DE ACA EN ADELANTE)

- CONCEPTO CARD
- CONCEPTO LAYOUT

1.Fundamentos de Flexbox

- Que es flexbox
- Componentes basicos FlexBox: Flex Container (el padre), Flex Items (los hijos), Main Axis (eje principal) y Cross Axis (eje cruzado).
- display: flex: La propiedad mágica que activa el sistema de layout unidimensional.
- flex-direction
1. Alineación y Distribución (El poder del contenedor):
- justify-content: Alineacion Eje Principal
- align-items : Alineacion Eje Secundario
- Atributo gap : Espacio entre elementos flex
1. Contenedor Flex Multilineal
- flex-wrap: Específicamente el valor wrap, que permite que las cajas (cards) bajen a la siguiente línea si ya no caben en la pantalla.
- align-content : Alineacion Eje Secundario cuando el contenedor es multilineal
- flex: 1

Otras propiedades que visualizaremos

- box-shadow: Para darle un efecto de sombra y elevación a las cards
- transition: La propiedad estrella para crear animaciones suaves
- transform: Para modificar el elemento en su estado :hover, usando funciones como translateY() (para moverlo hacia arriba) o scale() (para agrandarlo).

---

Usar el codigo para explicar los selectores descendientes

- sintaxis: padre descendiente{}
- Se uso el H2 del VSCODE para llegar a explicar los selectores descendientes
- Intercambiar el selector padre con nombre de etiqueta,id y clase durante el ejemplo

ESPECIFICIDAD 
La especificidad es el conjunto de reglas que el navegador utiliza para decidir qué estilo aplicar a un elemento cuando hay varias reglas CSS que se contradicen. 
Imagina que es un sistema de puntos o jerarquía. El selector con la puntuación más alta es el que "gana" y define el aspecto final del elemento. 
¿Cómo se calcula el "puntaje"?
Se suele representar con cuatro niveles (0, 0, 0, 0) de mayor a menor importancia

1. Estilos en línea (Inline): Si escribes el estilo directamente en el HTML (style="..."), tiene la prioridad más alta (1, 0, 0, 0).
2. IDs: Los selectores de ID (como #mi-boton) son muy específicos (0, 1, 0, 0).
3. Clases, Atributos y Pseudoclases: Selectores como .mi-clase, [type="text"] o :hover tienen un peso medio (0, 0, 1, 0).
4. Elementos y Pseudoelementos: Las etiquetas simples como h1, p o div son las menos específicas (0, 0, 0, 1).
Regla de oro:
•	La cascada: Si dos selectores tienen exactamente la misma especificidad, el navegador aplicará el que esté escrito al final de tu archivo CSS.
que es ser especifico?
Ser "específico" en CSS significa usar un selector que apunte de la forma más precisa posible a un elemento
Cual es mas preciso decir, el papa de tu papa o abuelo
Lo opuesto a especifico es ser general
- Voy a generar una imagen para hablar de especificidad
- A proposito voy a contradecir estilos -> PONER A COMPETIR ID y CLASE de un mismo elemento para comprobar cual es mas especifico -> Cual de los dos colores creen que se halla puesto?

HOVER
:hover es una pseudoclase que se activa cuando el usuario coloca el cursor (puntero del ratón) sobre un elemento, sin necesidad de hacer clic
No esta relacionado unicamente a enlaces sino a cualquier elemento 
OBJETIVO: Indica que un elemento es interactivo.

- Prueba en el codigo colocando hover a un section(etiqueta que no es enlace)

LAYOUT
Es la forma en que se distribuyen todos los elementos  en el espacio disponible de la pantalla.
FLEX es una de las formas que nos ofrece CSS para manejar el posicionamiento de los elementos

- Voy a usar un diagrama Excalidraw , en un lado poner en un rectangulo en blanco y en el otro lado tener
los elementos como si fueran piezas que poner en ese rectangulo

CON EL CONCEPTO DE LAYOUT QUEDARA MAS CLARO EXPLICAR CSS PORQUE UN CONTENEDOR FLEX SERA ESE rectangulo en blanco QUE HICISISTE EN EL DIAGRAMA ANTERIOR

PROPIEDAD DISPLAY: Es la que determina cómo se comporta y se visualiza una caja en el navegador y cómo se relaciona con las demás cajas a su alrededor.
En el mundo del desarrollo, cada elemento HTML es una caja, y display decide qué tipo de caja es

BOX SHADOW
box-shadow es la propiedad de CSS que se usa para proyectar una sombra alrededor del marco de un elemento (como tus cajas o tarjetas). Es fundamental para dar profundidad y hacer que un objeto parezca que "flota" sobre el fondo.
 - Para el boxshadow voy a generar una imagen con la sintaxis
 - Pero aclarar que internet ya tiene generadores que nos pueden ayudar visualmente a generar box shadow 
  - Ahi comparto una pagina para generar nuestro propio box shadow y otra donde ahi mas de 50 opciones de box shadow predefinidas y usuales listas solo para copiar
Sintaxis box-shadow
¿Qué significa cada valor en la sintaxis?
1.Desplazamiento Horizontal (X): Cuánto se mueve la sombra a la derecha (positivo) o izquierda (negativo).
2.Desplazamiento Vertical (Y): Cuánto se mueve la sombra hacia abajo (positivo) o arriba (negativo).
3.Difuminado (Blur): Qué tan suave o "borrosa" se ve la sombra. Si es 0, la sombra es un bloque sólido de color.
4.Extensión (Spread): (Opcional) Hace que la sombra crezca o se encoja en todas direcciones.
5. Color: Generalmente se usan valores rgba() para darle transparencia y que se vea realista.

FLEX 1
flex: 1 es una declaración  que le dice a un item flex: "Estírate todo lo que puedas para rellenar el espacio vacío del contenedor".
Se coloca a un item flex , no a una caja flex

Ejemplo : Si tienes 3 cajas en un contenedor y a todas les pones flex: 1, las 3 medirán exactamente lo mismo (33.3% cada una), sin importar cuánto texto tengan dentro.
-Diles que el número 1 es como una proporción o "rebanada de pastel":
Si una caja tiene flex: 1 y otra tiene flex: 2, la segunda será el doble de grande que la primera, porque se queda con 2 partes del espacio sobrante mientras la otra solo recibe 1.

TRANSITION
La propiedad transition es la herramienta de CSS que permite que los cambios en los estilos ocurran de forma suave y gradual en lugar de ser instantáneos

- Usa un boton ejemplo para demostrarlo
- para que una transición exista,necesitas estados, el navegador necesita saber de qué punto a qué punto se va a mover.
- Generar una imagen de la sintaxis de la propiedad
En el 99% de los casos, esos "estados" se definen así:
Estado Inicial (Reposo): Es el estilo que tiene el elemento normalmente. Aquí es donde escribes la propiedad transition.
Estado Final (Evento): Es el cambio que ocurre tras una acción. Casi siempre se usa con pseudoclases.
SINTAXIS
Los 4 componentes:
Propiedad (property): Qué quieres animar (ej: background-color, width, transform, opacity). Si quieres que afecte a todo, usa all.
Duración (duration): Cuánto tiempo tarda el cambio (ej: 0.3s o 300ms).
Curva de tiempo (timing-function): El "ritmo" de la animación.
linear: Velocidad constante.
ease: Empieza lento, acelera y termina lento (el más natural).
ease-in: Empieza lento.
ease-out: Termina lento.
Retardo (delay): (Opcional) Cuánto tiempo espera antes de empezar a moverse.
- Tambien ahi una pagina para probar transiciones
Prepara un codigo listo para aplicarl al proyecto-mi perfil que tengo

TRANSFORM
transform es la propiedad de CSS que te permite modificar la forma, posición, tamaño o rotación de un elemento sin alterar el flujo normal del documento (es decir, sin empujar a los vecinos).
Es como si el elemento fuera de plastilina: puedes estirarlo, moverlo o girarlo, pero el "hueco" que ocupaba originalmente en el layout se queda exactamente igual.

- Pero solo vamos a ver dos : modificar lo posicion y tamaño de un elemento
UNA IMAGEN PARA CADA FUNCIONALIDAD
translate(x, y) (Mover): Desplaza el elemento de su sitio original.
transform: translate(20px, -10px); (20px a la derecha, 10px arriba).
scale(n) (Escalar): Cambia el tamaño (1 es el tamaño original).
transform: scale(1.2); (Lo agranda un 20%).
transform: scale(0.5); (Lo reduce a la mitad)
- Tambien ahi una pagina para probar transform