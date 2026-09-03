## ¿Qué es `fetch()`?

> fetch() es una función nativa de JavaScript que permite **realizar peticiones HTTP** a servidores(internos o externos),APIs RESTful u otros servicios web.
> 
> 
> Es la **forma moderna de consumir APIs en JavaScript**, reemplazando al antiguo `XMLHttpRequest`.
> 

## Sintaxis para manejar fetch()

- `URL_DEL_ENDPOINT`: la ruta o endpoint de la API.

```jsx
fetch("URL_DEL_ENDPOINT", {
  method: "HTTP_VERB", // GET, POST, PUT, etc.
  headers: {
    "Content-Type": "application/json", // Tipo de datos
    // "Authorization": "Bearer TOKEN", // Si necesitas autenticar
    // Otros headers según la API
  },
  body: JSON.stringify({ /* datos a enviar */ }) // Solo en métodos que lo permitan
})
  .then(respuesta => {
    if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
    return respuesta.json(); // Convierte la respuesta (body) en objeto JS
  })
  .then(data => {
    console.log("Datos recibidos:", data); // Acceso final a los datos
  })
  .catch(error => {
    console.error("Ocurrió un error:", error); // Manejo de errores de red o status
  });
```

<aside>

El envió de una petición HTTP con fetch es asincrónico por eso es que se trabaja con **promesas**

</aside>

### Argumentos de fetch

`fetch()` tiene dos argumentos:

- `url`: La **URL del endpoint**
- `opciones`: es un objeto que define la **configuración completa de la petición HTTP**
    - Incluye método, cabeceras, cuerpo, modo de CORS, manejo de cookies, caché y redirecciones.

```jsx
fetch("URL_DEL_ENDPOINT", {
  method: "HTTP_VERB",
  headers: { /* cabeceras */ },
  body: JSON.stringify({ /* datos */ }),
  // Otros parámetros opcionales...
});

```

### Parámetros principales en el objeto `opciones`

- **headers**
    
    ```jsx
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer abc123"
    }
    ```
    
- **body**
    
    > Solo se usa en métodos que envían datos (POST, PUT, PATCH).
    > 
    > 
    > Debe ser **una cadena de texto**, usualmente convertida con `JSON.stringify()`.
    > 
    
    ```jsx
    body: JSON.stringify({
      nombre: "Erick",
      edad: 25
    });
    ```
    
    <aside>
    
    ⚠️ Si usas body, ¡siempre especifica el Content-Type adecuado en headers!
    
    </aside>
    
- **credentials**: Cookies / sesiones
    
    > Controla si se deben incluir cookies y credenciales como sessionId
    > 
    
    | Valor | ¿Qué hace? |
    | --- | --- |
    | `"omit"` | Nunca envía cookies (default) |
    | `"same-origin"` | Solo si el origen es el mismo |
    | `"include"` | Siempre incluye cookies, ideal si usás sesiones |

| Parámetro | Tipo | ¿Para qué sirve? | Ejemplo |
| --- | --- | --- | --- |
| `method` | `string` | Define el método HTTP (`GET`, `POST`, etc.) | `"GET"`, `"POST"` |
| `headers` | `object` | Define las cabeceras que acompañan la petición (tipo de contenido, tokens...) | `{ "Content-Type": "application/json" }` |
| `body` | `string` | Define el contenido que se envía en métodos como `POST`, `PUT`, `PATCH` (debe ser texto, usualmente JSON) | `JSON.stringify({ nombre: "Erick" })` |
| `mode` | `string` | Política CORS. Por defecto es `"cors"`, pero puede ser `"no-cors"`, `"same-origin"` | `"cors"` |
| `credentials` | `string` | Controla si se envían cookies: `"omit"`, `"same-origin"`, `"include"` | `"include"` para sesiones autenticadas |
| `cache` | `string` | Control de caché de la petición (`"default"`, `"no-cache"`, `"reload"`) | `"no-cache"` |
| `redirect` | `string` | Control de redirecciones HTTP (`"follow"`, `"manual"`, `"error"`) | `"follow"` |
| `referrerPolicy` | `string` | Controla si se envía o no el encabezado `Referer` | `"no-referrer"` |

<aside>

**Ejemplo**

```jsx
fetch("https://api.erick.dev/contactos/42", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer abc123"
  },
  body: JSON.stringify({
    telefono: "+51 987654321"
  }),
  credentials: "include",
  cache: "no-store"
});
```

</aside>

### **Que retorna fetch?**

- `fetch()`  siempre devuelve una **Promise sea éxito o error**
    - Si es éxito(resolve) es un objeto tipo `Response`.
    - Si es error(reject) es un objeto Error

| Situación | ¿Promesa resuelta o rechazada? | Retorna… | ¿Debes usar `.catch()`? |
| --- | --- | --- | --- |
| ✅ API responde con `200` | ✅ Resuelta | `Response` | Opcional |
| ⚠️ API responde con `404`, `500` | ✅ Resuelta | `Response` | ✅ Necesitás validar `res.ok` |
| ❌ Fallo de red / sin conexión | ❌ Rechazada | `Error` | ✅ Sí |

### Objeto Response

<aside>

**Contexto:**

Cuando haces una petición con `fetch()`, lo primero que obtienes es una **Promesa que resuelve en un objeto `Response`**, que representa la **respuesta HTTP del servidor**.

</aside>

```
╔═══════════════╗
║  Objeto Response de fetch()      ║
╚═══════════════╝
│ status       → Código HTTP
│ ok           → true si 2xx
│ headers      → Headers()
│ body         → Respuesta (aún no leída)
│ json()       → Método para leer y convertir body
│ text(), blob(), etc. → Alternativas según el contenido

```

### ¿Qué es?

> Es una instancia de la clase `Response` de la **Fetch API**.
> 
> 
> Contiene **información sobre la respuesta HTTP** (códigos, encabezados, cuerpo, etc.).
> 

```jsx
fetch('https://api.example.com/datos')
  .then(respuesta => {
    console.log(respuesta); // ← Aquí tienes el objeto Response
  });

```

### Propiedades

| Propiedad | Tipo | Descripción | Ejemplo de uso |
| --- | --- | --- | --- |
| `status` | `number` | Código de estado HTTP (200, 404, 500...) | `respuesta.status === 200` |
| `ok` | `boolean` | `true` si `status` está entre 200–299 | `if (!respuesta.ok)` |
| `statusText` | `string` | Descripción textual del status (Ej: "OK", "Not Found") | `respuesta.statusText` |
| `headers` | `Headers` | Headers devueltos por el servidor (objeto Headers) | `respuesta.headers.get("Content-Type")` |
| `url` | `string` | URL final (puede variar si hubo redirección) | `respuesta.url` |
| `redirected` | `boolean` | `true` si hubo redirección | `respuesta.redirected` |
| `type` | `string` | Tipo de respuesta (`basic`, `cors`, `opaque`) |  |
| `bodyUsed` | `boolean` | `true` si ya se consumió el cuerpo |  |

### Métodos

> Estos métodos **leen y** **convierten** el body de la respuesta en distintos formatos
Recuerda que el formato del body dependen del header `Content-Type` que indicaste en la petición HTTP
Todos retornan una **Promesa**.
> 

<aside>

⚠️ Solo puedes **usar un método para leer el cuerpo una vez**. Después de eso, `bodyUsed` será `true`.

</aside>

| Método | ¿Qué transforma? | Tipo resultante | Uso típico | Retorna |
| --- | --- | --- | --- | --- |
| `.json()` | Convierte JSON ↠ objeto JS | `Promise → Object` | API REST (`Content-Type: application/json`) | `Promise<Object>` |
| `.text()` | Devuelve contenido como string | `Promise → string` | HTML, texto plano | `Promise<string>` |
| `.blob()` | Para archivos binarios (imágenes, PDF) | `Promise → Blob` | Descarga o vista previa | `Promise<Blob>` |
| `.formData()` | Convierte body a objeto FormData | `Promise → FormData` | Formularios (`multipart/form-data`) | `Promise<FormData>` |
| `.arrayBuffer()` | Para contenido binario como buffer | `Promise → ArrayBuffer` | Archivos, streams crudos |  |

<aside>

**Porque hay dos bloques `then`? Si solo es una respuesta**

`fetch()` solo retorna una promesa que resuelve en un objeto `Response`, pero ese objeto **no contiene directamente los datos JSON que querés usar.** 
Por eso se usan dos bloques `.then()` consecutivos: uno para transformar el contenido, y otro para manipularlo.

</aside>

### Primer bloque then: Manejar el `Response`

```jsx
.then(respuesta => {
  if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
  return respuesta.json();
})
```

- `respuesta` es un **objeto `Response`** de la API Fetch.
- Aquí debes:
    - Validar si la respuesta fue exitosa (`respuesta.ok`)
    - Ver el código HTTP (`respuesta.status`)
    - Leer encabezados (`respuesta.headers`)
- **¡Pero todavía no tienes los datos reales sino un JSON**
    
    `respuesta.json()` es un **método asíncrono** que:
    
    - Lee el `body` de la respuesta.
    - Lo convierte en un objeto JavaScript (si el servidor respondió JSON).
    - Devuelve una **Promesa** que resuelve en esos datos.

### Segundo bloque then: **Manejar el body del Response, los datos reales**

```jsx
.then(data => {
  console.log("Datos recibidos:", data);
})

```

- Este bloque es el resultado de que `respuesta.json()` se haya **resuelto correctamente**.
- Aquí ya accedes a los **datos reales que devolvió la API**, como un objeto, array , string ,….
- Se puede usar en la UI, consola, lógica de negocio.

### Bloque de manejo de errores

```jsx
.catch(error => {
    // Manejo de errores de red o status
  });
```

### ¿Qué tipo de errores captura `.catch()`?

`.catch()` solo captura **errores de red o errores lanzados manualmente** (`throw`), como por ejemplo:

El bloque `.catch()` **solo se ejecuta si la promesa se rechaza**, lo que ocurre en casos como:

| Tipo de error | ¿Se dispara `.catch()`? | Ejemplo práctico |
| --- | --- | --- |
| ❌ Error 404, 500 (respuesta HTTP) | ❌ **NO** automáticamente | Usar `res.ok === false` en estos casos |
| ❌ Falla de red / sin conexión | ✅ Sí | Servidor caído, sin internet, DNS mal configurado |
| 🔐 Bloqueo por CORS | ✅ Sí | Rechazo por política de origen cruzado |
| 🌐 URL mal formada o escrita | ✅ Sí | `"htp://..."` o sintaxis inválida |
| ⚙️ Error dentro de `.json()` | ✅ Sí | JSON mal formado (ej: `return res.json()` lanza) |

### ¿Qué podés hacer dentro del `.catch()`?

- Mostrar un mensaje al usuario (`alert`, `UI`)
- Registrar el error (`console.error`)
- Reintentar la petición
- Redirigir o mostrar estado alternativo

<aside>

### ⚠️ Importante:

`fetch()` **no lanza error** automáticamente si la respuesta es 404 o 500.

Por eso es obligatoria verificar manualmente con:

```jsx
if (!response.ok) throw new Error("HTTP " + response.status);

```

</aside>

<aside>

### Patrón seguro recomendado

```jsx
fetch(...)
  .then(res => {
    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`); //Lanzamos un error 404,etc
    return res.json();
  })
  .then(data => {
    // Procesar datos
  })
  .catch(error => {
    // Captura tanto errores de red como los "throw"
    console.error("Ocurrió un error:", error.message);
  });
```

</aside>

## Métodos HTTP con `fetch()`

> Las peticiones fetch() pueden usar distintos métodos HTTP según lo que querés hacer con el recurso.
> 

### `GET`: Obtener datos

- No necesita `body`.
- Se usa para leer datos de un endpoint.
- Requiere headers solo si la API exige autenticación

```jsx
fetch("https://api.dev/contactos/42", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => console.log("Datos del contacto:", data))
  .catch(err => console.error("Error al obtener:", err));
```

### `POST`: Enviar nuevos datos

- Se usa para **crear** nuevos recursos.
- La API debe validar y guardar el nuevo recurso
- Requiere si o si:
    - `method: "POST"`
    - `headers` con `Content-Type`
    - `body` con los datos en JSON

```jsx
fetch("https://api.ejemplo.com/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nombre: "Erick",
    email: "erick@mail.com"
  })
})
  .then(res => res.json())
  .then(data => console.log(data));

```

### `PUT`: Reemplazar completamente un recurso

- Reemplaza **todo el objeto** existente.
- Se usa comúnmente junto a un parámetro de ruta ID (`/recurso/:id`)
- El `body` debe tener **todos los campos del objeto a cambiar, incluso los que no cambiaron**.

```jsx
fetch("https://api.ejemplo.com/usuarios/42", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 42,
    nombre: "Erick Modificado",
    email: "nuevo@mail.com"
  })
});

```

### `PATCH`: Modificar parcialmente un recurso

- Cambia **solo algunos campos** del objeto.
- Enviás solo el campo que querés cambiar
- Ideal para actualizaciones puntuales (como un solo campo).

```jsx
fetch("https://api.ejemplo.com/usuarios/42", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "solo-email-nuevo@mail.com"
  })
});

```

### `DELETE`: Eliminar un recurso

- Se usa para eliminar recursos.
- No necesita `body`
    - A veces no lleva `body`, depende del **backend**

```jsx
fetch("https://api.ejemplo.com/usuarios/42", {
  method: "DELETE"
});

```

