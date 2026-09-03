> 
> 
> 
> **Paso 1 · EL PROGRAMA toma el contenedor donde va la lista**
> 
> > 🔎 *El HTML tiene **<ul id="listaPlantillas">** vacío. ¿Cómo lo agarramos desde JS para escribir adentro?*
> ✅ **Respuesta esperada:** ***document.getElementById("listaPlantillas")*** (DOM del M3). Lo guardamos en una constante para no buscarlo cada vez.
> > 
> 
> ```jsx
> const lista = document.getElementById("listaPlantillas");   // ← Paso 1
> const form  = document.getElementById("form-plantilla");
> ```
> 
> ---
> 
> ### **AHORA RENDERIZAMOS EN LA LISTA DE PLANTILLAS DINAMICAMENTE**
> 
> > **Tu apertura:***"La función que conecta el estado con la pantalla tiene un nombre y un patrón fijo: **render**. Es la pieza más importante del día, porque todo lo que viene —editar, borrar, filtrar— va a pasar por ella."*
> > 
> 
> > **Tu explicación teórica precisa:*render()*** es la función que **dibuja toda la pantalla a partir del estado**. Su contrato es siempre el mismo, en tres pasos:
> > 
> > 1. **Limpiar** el contenedor (***innerHTML = ""***) — borra lo que había.
> > 2. **Recorrer** el estado (***forEach***) — una vuelta por cada dato.
> > 3. **Crear y agregar** un nodo del DOM por cada dato (***createElement*** + ***appendChild***).
> > 
> > La **regla de oro** de toda la app: **cambias el estado → llamas render()**. Y render() **siempre redibuja TODO de cero** desde el estado — no parchea lo que cambió.
> > 
> 
> **Paso 2 · EL PROGRAMA limpia antes de dibujar**
> 
> > 🔎 *Criterio: "sin restos viejos ni duplicados". Antes de recorrer el estado, ¿qué hacemos con lo que ya hay en la lista?*
> ✅ **Respuesta esperada:** vaciarlo con ***lista.innerHTML = ""***. Es lo que garantiza que la pantalla sea un reflejo EXACTO del estado, sin acumular.
> > 
> 
> ```jsx
> function render() {
>   lista.innerHTML = "";                       // 1. limpia lo anterior
> }
> 
> ```
> 
> ---
> 
> **Paso 3 · EL PROGRAMA recorre el estado y crea un nodo por plantilla**
> 
> > 🔎 *Criterio: "todas las plantillas aparecen". ¿Cómo pasamos de la lista de objetos a elementos en el DOM?*
> ✅ **Respuesta esperada:** ***state.plantillas.forEach(...)*** y, por cada una, ***createElement("li")*** + su contenido + ***appendChild*** al ***<ul>*** (DOM del M3).
> > 
> 
> ```jsx
> function render() {
>   lista.innerHTML = "";                       // 1. limpia lo anterior
>   state.plantillas.forEach(function (p) {
>     const li = document.createElement("li");
>     li.className = "bg-white p-4 rounded-lg shadow";
>     li.innerHTML = `
>       <div class="flex items-start justify-between gap-2">
>         <strong class="text-slate-800">${p.titulo}</strong>
>       </div>
>       <p class="text-sm text-slate-600 mt-1">${p.mensaje}</p>
>       <span class="inline-block text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full mt-2">${p.hashtag}</span>`;
>     lista.appendChild(li);                     // 2. agrega un nodo por dato
>   });
> }
> 
> ```
> 
> ---
> 
> **Paso 4 · EL PROGRAMA muestra la fecha legible dentro del nodo**
> 
> > 🔎 *Criterio: "fecha en formato legible". Tenemos **p.fecha** (un objeto Date). ¿Cómo lo metemos legible en la tarjeta?*
> ✅ **Respuesta esperada:** ***p.fecha.toLocaleDateString("es-PE")*** → texto 29/6/2026, y lo interpolamos en el HTML del nodo.
> > 
> 
> > **Tu apertura:***"En M1 creamos la fecha con **new Date()** y les dije que mostrarla bonita venía después. Es ahora — porque recién acá la vamos a pintar en la tarjeta."*
> > 
> 
> > **Tu explicación teórica precisa:**
> El objeto ***Date*** guarda el instante como un objeto, **no como texto** — por eso, mostrado tal cual, es ilegible. Para volverlo legible se usa ***.toLocaleDateString("<locale>")***, que lo convierte a una fecha corta según la región. Con ***"es-PE"*** sale en formato peruano: día/mes/año.
> > 
> > 
> > ```jsx
> > /* Sintaxis general */
> > <objetoDate>.toLocaleDateString("<locale>");
> > 
> > /* Fórmula */
> > new Date().toLocaleDateString("es-PE");   // → "29/6/2026"
> > ```
> > 
> 
> > **Demo en consola (15 segundos):***"Escriban **new Date()** → devuelve el objeto largo e ilegible (Mon Jun 29 2026 14:03:...). Ahora **new Date().toLocaleDateString("es-PE")** → 29/6/2026. Mismo dato, dos vistas: la cruda y la legible. En el render usamos la legible."*
> > 
> > - *"La fecha se SELLA una vez (en el constructor de M1) y se FORMATEA cada vez que se dibuja. Crear y mostrar son cosas distintas: el objeto se guarda una vez, el texto se arma en cada render."*
> > 
> > ```jsx
> > function render() {
> >   lista.innerHTML = "";                       // 1. limpia lo anterior
> >   state.plantillas.forEach(function (p) {
> >     const fechaTexto = p.fecha.toLocaleDateString("es-PE");   // Date → texto legible
> >     const li = document.createElement("li");
> >     li.className = "bg-white p-4 rounded-lg shadow";
> >     li.innerHTML = `
> >       <div class="flex items-start justify-between gap-2">
> >         <strong class="text-slate-800">${p.titulo}</strong>
> >         <span class="text-xs text-slate-400 shrink-0">${fechaTexto}</span>
> >       </div>
> >       <p class="text-sm text-slate-600 mt-1">${p.mensaje}</p>
> >       <span class="inline-block text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full mt-2">${p.hashtag}</span>`;
> >     lista.appendChild(li);                     // 2. agrega un nodo por dato
> >   });
> > }
> > 
> > ```
> > 
> 
> ---
> 
> **Paso 5 · EL USUARIO agrega desde el formulario y la nueva aparece al instante**
> 
> > 🔎 *Criterio: "aparece al instante, sin recargar". Ya tenemos **agregarPlantilla** de la HU1 (cambia el estado). ¿Qué hace falta para que el cambio se VEA, y cómo evitamos que el formulario recargue la página?*
> ✅ **Respuesta esperada:** escuchar el ***submit*** del formulario → ***e.preventDefault()*** (que NO recargue, del M3) → ***agregarPlantilla(...)*** (cambia el estado) → ***render()*** (lo muestra) → ***form.reset()*** (limpia los campos). Ahí se materializa la regla **cambias el estado → render()**.
> > 

> 
> 
> 
> ```jsx
> 
> form.addEventListener("submit", function (e) {               // ← Paso 5
>   e.preventDefault();                                        //    no recargar la página
>   agregarPlantilla(titulo.value, mensaje.value, hashtag.value);
>   render();                                                  //    el estado cambió → redibujamos
>   form.reset();                                              //    limpia los campos
> });
> ```
>