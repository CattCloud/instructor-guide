## Manejar fetch() con async/await

### ¿Qué cambia?

- En lugar de **encadenar promesas con `.then()`**, se usa `await` para **esperar la resolución** de cada paso.
- Es más legible y parece código "sincrónico", aunque sigue siendo asincrónico.
- Requiere envolverlo dentro de una función `async`.

### Sintaxis fetch con async/await

> Toda la lógica vive dentro de una función `async`
> 

```jsx
async function hacerPeticion() {
  try {
    const respuesta = await fetch("URL_DEL_ENDPOINT", {
      method: "HTTP_VERB",
      //headers es opcional , segun el verbo HTTP
      headers: {
        "Content-Type": "application/json", //Solo es necesario cuando se envia un body
        "Authorization": "Bearer TOKEN" // Si lo requiere
      },
      body: JSON.stringify({ /* datos a enviar */ }) // solo si es POST, PUT, etc.
    });

    // Validar status HTTP (404, 500, etc.)
    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json(); // Convertir el body a objeto JS
    console.log("Datos recibidos:", datos); // Acceso final a los datos

  } catch (error) {
    console.error("Ocurrió un error:", error.message); // Manejo de errores
  }
}

```

<aside>

**¿Y cómo se usa?**

Solo necesitas llamar la función:

```jsx
miPeticionHTTP();
```

</aside>

### Análisis del código

### 1. Declaración de la función `async`

```jsx
async function hacerPeticion() {
}
```

- Obligatorio para poder usar `await`.
- Toda lógica de `fetch` debe estar **dentro de esta función**.

### 2. `await fetch(...)` → Obtener `Response`

```jsx
const respuesta = await fetch("URL", opciones);
```

- Se pausa hasta que el `fetch()` se resuelve.
- Retorna el objeto `Response`.

### 3. Validación manual del estado HTTP

```jsx
if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
```

- Porque `fetch()` **no lanza error automáticamente con 404 o 500**.
- Si no lo haces, el código seguirá ejecutándose incluso si hubo un error del servidor.

### 4. `await respuesta.json()` → Acceder a los datos reales

```jsx
const datos = await respuesta.json();
```

- Convierte el body en objeto JavaScript.
- También podrías usar otro metodo de `Response` (`.text()`, `.blob()`, etc) según el tipo de contenido.

### 5. `catch` para capturar errores

```jsx
} catch (error) {
  console.error("Ocurrió un error:", error.message);
}
```

- Captura:
    - Errores de red
    - URL inválidas
    - Errores lanzados manualmente con `throw`

**Ejemplo**

```jsx
async function miPeticionHTTP() {
  try {
    const res = await fetch("URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre: "Erick" })
    });

    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    console.log("Datos recibidos:", data);

  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

```

---
## Parámetros de ruta (Path Parameters)

> Son una parte variable de la URL que indican que esa parte debe ser reemplazada por un valor especifico
No son Query Parameters
> 

<aside>

**Sintaxis**

```jsx
ruta/:parametro
```

**Ejemplo**

| Ruta definida | ¿Qué representa? |
| --- | --- |
| `/productos/:sku` | Código único de producto (`sku`) |
| `/usuarios/:username` | Nombre de usuario dinámico |
| `/ordenes/:numero` | Número de orden del pedido |
| `/tiendas/:ciudad` | Ciudad donde se localiza la tienda |
</aside>

### **Objetivo**

> Los path parameters permiten a una API especificar qué recurso se está solicitando.
> 

Por ejemplo, en una URL `/users/{user_id}`, `{user_id}` sería un path parameter que representa el identificador único de un usuario específico. 

### Diferencia Path Parameters- Query Parameters

> Cuando colocas un path parameter en la URL es **obligatorio** colocar un valor mientras que en las 
query parameters se puede saltar y no colocar ningun valor
> 

| Tipo | ¿Qué representa? | Ejemplo |
| --- | --- | --- |
| `:param` (ruta) | Parte estructural de la URL, **obligatoria** | `/contactos/:id` → `/contactos/7` |
| `?key=value` (query) | **Filtro o condición opcional** | `/contactos?favorito=true` |

## Query Parameters

> Mientras los path parameters identifican recursos específicos.
Los Query Parameters permiten modificar el comportamiento de una petición RESTful sin alterar la ruta principal, te permiten de forma opcional , **filtrar, ordenar, paginar y ajustar el comportamiento de la petición** mediante claves opcionales al final de la URL.
> 

<aside>

**Sintaxis básica**

Son pares **clave=valor** que se agregan al final de una URL para personalizar la consulta.

Se escriben luego del signo `?`, y pueden combinarse con `&`.

```jsx
ruta?clave=valor&otraClave=otroValor

```

Ejemplo:
Esta petición busca productos de la categoría teclado con precio mayor a 50.

```jsx
GET /productos?categoria=teclado&precioMin=50
```

</aside>

### ¿Qué puedes hacer con Query Parameters?

| Función | Ejemplo práctico | ¿Qué logra? |
| --- | --- | --- |
| Filtrar recursos | `/usuarios?activo=true` | Mostrar solo usuarios activos |
| Ordenar resultados | `/productos?orden=precio_desc` | Mostrar productos de mayor a menor precio |
| Paginación | `/contactos?page=2&limit=10` | Obtener 10 contactos de la página 2 |
| Buscar texto | `/posts?busqueda=react` | Buscar posts relacionados a "react" |
| Activar opciones | `/reportes?detalle=true&exportar=csv` | Generar reporte detallado en formato CSV |