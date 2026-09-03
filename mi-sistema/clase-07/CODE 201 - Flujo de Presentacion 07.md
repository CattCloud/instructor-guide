# CODE 201 - Flujo de Presentacion 07

## MOMENTO 1 — Apertura + objetos básicos

> **OBJETIVO:** El alumno **descubre el problema de los 2 arrays paralelos** (latente desde C05, nunca verbalizado — se ve hoy con el error en vivo), arma el setup (***oop-objects.js*** + orden de scripts), y domina los objetos literales: declarar con ***{}***, acceder con punto, modificar/agregar propiedades, leer un array de objetos, y distinguir cuándo conviene array vs objeto. Al cerrar M1, el alumno maneja objetos como estructura — la base para el refactor de M2.
> 

### 1.1 Apertura — descubrir el problema de los arrays paralelos + agenda del día

**EN PANTALLA: VS CODE / CONSOLA — el modelo de C05/C06 a la vista: *let nombres = [...]* y *let valores = [...]* (los 2 arrays paralelos), con un par de movimientos cargados.**

> **Tu apertura:***"Buenos días. Antes de aprender nada nuevo, quiero que MIREMOS el modelo de datos que venimos arrastrando desde C05 — y que descubran algo que tiene escondido. No se los conté antes a propósito: quería que lo vieran funcionar primero. Hoy le buscamos las costuras."*
> 

> **Plantear el escenario (que el alumno piense, no que Eric lo diga):***"Este es nuestro modelo. Dos arrays separados:"*
> 
> 
> ```jsx
> let nombres = ['Salario', 'Cena', 'Freelance'];
> let valores = [3000, -45.50, 500];
> ```
> 
> *"El movimiento 'Cena' vive partido: su nombre en **nombres[1]**, su monto en **valores[1]**. Ahora les hago una pregunta y quiero que la piensen antes de que yo toque nada: si el usuario quiere BORRAR el movimiento 'Cena', ¿qué tengo que hacer?"(Esperar respuestas. Guiar hasta: "hay que borrarlo de los DOS arrays". Esa es la semilla del problema.)*
> 

> **Predecir antes de ejecutar — el error en vivo (gancho ejecutable):***"Exacto, hay que tocar dos arrays. ¿Y qué pasa si me olvido de uno? Predigan antes de que ejecute:"*
> 
> 
> ```jsx
> nombres.splice(1, 1);   // borro 'Cena' de nombres... pero ME OLVIDO de valores
> 
> console.log(nombres);   // ['Salario', 'Freelance']
> console.log(valores);   // [3000, -45.50, 500]  ← ¡quedó el -45.50!
> ```
> 
> *(Esperar predicciones. Después ejecutar y mostrar el desastre.)"Mírenlo. Borré 'Cena' de **nombres** pero su monto **-45.50** sigue en **valores**. Ahora los arrays están DESALINEADOS: **nombres[1]** es 'Freelance' pero **valores[1]** es **-45.50** (el monto de Cena). El Freelance perdió su monto, el saldo da cualquier cosa — y el código NO tiró ningún error. Está roto en silencio."*
> 

> **Nombrar el problema:***"Esto tiene nombre: el problema de los **arrays paralelos**. Dos (o más) arrays que tengo que mantener sincronizados a mano. Un olvido y todo se descalibra sin avisar. Y hay un segundo problema más chico: el tipo del movimiento —ingreso o gasto— está escondido en el SIGNO del número. Negativo = gasto. Un truco que hay que recordar siempre."*
> 

> *Hoy resolvemos este problema*
> 

### 1.2 Setup del proyecto

**EN PANTALLA: VS CODE — explorador del repo *personal-budget* + *index.html*.**

> **Code-along del lab — Setup Inicial:**
> 
> 1. En el repo ***personal-budget*** de C06, crear el archivo ***oop-objects.js*** (acá van a vivir las clases de hoy).
> 2. En ***index.html***, dejar el orden de scripts así:
>     
>     ```html
>     <script src="oop-objects.js"></script>
>     <script src="functional-utils.js"></script>
>     <script src="app.js"></script>
>     ```
>     
> 3. *"Mismo criterio de orden que en C06: lo que se USA va primero. **oop-objects.js** define las clases, así que carga antes de **functional-utils.js** y **app.js**, que las van a usar."*

### 1.3 ¿Qué es un objeto literal? (P0.1)

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (el objeto como ficha)*}***

> **Tu apertura:***"La herramienta para resolver el dolor se llama **objeto**. Ya usaron objetos sin saberlo —un array es un objeto por debajo— pero hoy los usamos a propósito. Un objeto agrupa datos relacionados con NOMBRE."*
> 

> **Tu explicación teórica precisa:
¿Qué es un objeto literal?** Una estructura de datos que agrupa valores relacionados como pares ***key: value*** (clave-valor), declarada con llaves ***{}***. Cada par describe una característica del "algo" que el objeto representa.
> 
> 
> **Sintaxis general:**
> 
> ```jsx
> const objeto = {
>   clave1: valor1,
>   clave2: valor2
> };
> ```
> 
> - *"Cada par **clave: valor** se separa del siguiente con coma."*
> - *"La clave es el nombre de la propiedad; el valor puede ser cualquier cosa — texto, número, booleano, hasta otro objeto."*

> **Demo en vivo (consola):**
> 
> 
> ```jsx
> const persona = {
>   nombre: 'Ana',
>   edad: 30,
>   pais: 'Perú'
> };
> 
> console.log(persona.nombre);   // 'Ana'  → acceso con punto
> console.log(persona.edad);     // 30
> ```
> 
> *"Para leer una propiedad: el objeto, un punto, y el nombre de la propiedad. **persona.nombre** = 'de la ficha persona, dame el campo nombre'. Es el mismo punto que ya usan en **.push()** o **.length** — esos también son propiedades del array."*
> 

### 1.4 Leer, modificar y agregar propiedades (P0.2)

**EN PANTALLA: VS CODE  — Eric tipea sobre el mismo objeto `persona`.**

> **Tu explicación teórica precisa:***"Con el punto hago tres cosas: leer (que ya vimos), modificar un valor existente, y agregar una propiedad nueva. Y lo loco: modificar y agregar usan la MISMA sintaxis."*
> 

> **Demo en vivo (consola):**
> 
> 
> ```jsx
> persona.edad = 31;              // MODIFICAR una propiedad que ya existe
> persona.email = 'a@mail.com';   // AGREGAR una propiedad nueva
> 
> console.log(persona.edad);      // 31
> console.log(persona.email);     // 'a@mail.com'
> ```
> 
> *"**persona.edad = 31** pisa el valor viejo. **persona.email = ...** crea un campo que la ficha no tenía. JavaScript decide solo: si la propiedad existe la modifica, si no, la crea."*
> 

> **Nota técnica (que sorprende):***"Ojo con algo: **persona** está declarada con **const**, y ASÍ Y TODO le pude cambiar la edad y agregar el email. ¿Por qué? Porque **const** congela la VARIABLE —no podés hacer **persona = otroObjeto**— pero NO congela el contenido del objeto. Las propiedades se pueden tocar. Es una distinción que confunde al principio."*
> 

### 1.5 Array de objetos + array vs objeto (P0.3)

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (mazo de fichas vs dos pilas)**

> **Tu explicación teórica precisa:
¿Qué es un array de objetos?** Un array cuyos elementos son objetos: ***[{...}, {...}]***. Combina lo mejor de las dos estructuras — el ORDEN del array + los NOMBRES descriptivos de los objetos.
> 
> 
> ```jsx
> const personas = [
>   { nombre: 'Ana', edad: 30 },
>   { nombre: 'Carlos', edad: 25 }
> ];
> 
> console.log(personas[0].nombre);   // 'Ana'
> ```
> 
> *"Fíjense en el acceso: **personas[0]** trae el primer objeto (por índice, como cualquier array), y **.nombre** trae su propiedad (por nombre). Encadenás las dos cosas."*
> 

> **La conexión clave con el proyecto:***"Esto es EXACTAMENTE lo que reemplaza a los arrays paralelos. En vez de **nombres[i]** + **valores[i]** —dos cosas que tengo que mantener alineadas— una solo centro de datos, un array de objetos. Imposible desincronizar: no hay dos puntos de datos que se puedan desfasar, hay una sola."*
> 

> **Tabla array vs objeto (proyectar — Panel 1.2):**
> 
> 
> 
> | Estructura | Se accede por | Ideal para |
> | --- | --- | --- |
> | **Array** ***[a, b, c]*** | índice (posición): ***arr[0]*** | colección ordenada del mismo tipo |
> | **Objeto** ***{ k: v }*** | nombre: ***obj.k*** | un "algo" con características nombradas |
> 
> *"Array para listas ordenadas; objeto para un registro con campos nombrados. Y se combinan: array de objetos."*
> 

## MOMENTO 2 — Refactor del modelo: arrays paralelos → array de objetos

### 2.1 El antes y el después del modelo  - PARTE LAB 1.1

**EN PANTALLA: VSCODE**

> **Tu apertura:***"Acabamos de ver el dolor en vivo y la herramienta para resolverlo. Ahora la aplicamos al proyecto de verdad. Este es el cambio central del día — miren los dos modelos lado a lado."*
> 

> **Tu explicación teórica precisa:**
> 
> 
> ```jsx
> // ANTES (C05/C06) — 2 arrays paralelos; el TIPO se codifica con el SIGNO
> let nombres = ['Salario', 'Cena'];
> let valores = [3000, -45.50];          // +ingreso / -gasto
> 
> // AHORA (C07) — 1 array de objetos; tipo EXPLÍCITO, valor SIEMPRE positivo
> let movimientos = [
>   { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
>   { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
> ];
> ```
> 
> *"Dos cambios clave. Uno: cada movimiento es UN objeto con sus tres datos juntos — adiós a las dos. 
> Dos: el **tipo** ahora es una propiedad explícita (**'ingreso'** / **'gasto'**), y el **valor** es SIEMPRE positivo. Se acabó el truco del signo porque guardo el tipo de dato"*
> 

> **Advertencia (sembrar las 3 trampas):***"Ojo con esto, porque es la parte que más confunde: cambiar el modelo NO es solo cambiar cómo se guardan los datos. Varias funciones dependían del signo para funcionar. Al sacar el signo, esas funciones se ROMPEN si no las corregimos. Vamos a encontrar tres. Atentos."*
> 

### 2.2 Adaptar `registrarMovimiento`  - PARTE LAB 1.2

**EN PANTALLA: VS CODE — *app.js*, la función *registrarMovimiento* de C06.**

> **Tu apertura:***"Primera función a migrar: la captura. En C06 hacía DOS push —uno a nombres, otro a valores— y convertía el signo. Ahora: UN solo push de un objeto, sin tocar el signo."*
> 

> **Code-along del lab — Parte 1.2:**
> 
> 
> ```jsx
> let movimientos = [];
> 
> function registrarMovimiento() {
>   const nombre = prompt('Nombre del movimiento:');
>   const tipo = prompt('Tipo (ingreso / gasto):');
>   const valor = parseFloat(prompt('Monto:'));
> 
>   if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(valor) || valor <= 0) {
>     alert('Datos inválidos. Intenta de nuevo.');
>     return;
>   }
> 
>   // 1 solo push de un objeto. valor SIEMPRE positivo.
>   movimientos.push({ nombre: nombre, tipo: tipo, valor: valor });
> }
> ```
> 
> *"Comparen con C06: antes había **let valor; if (tipo === 'ingreso') valor = monto; else valor = -monto;** y después dos push. Todo eso DESAPARECE. Un push de un objeto, y el tipo se guarda tal cual lo dijo el usuario. La validación es la misma de C06 — eso no cambia."*
> 

> **Nota — primera ganancia del modelo:***"Fíjense que ya borramos código: la conversión de signo (**valor = -monto**) se fue. El tipo explícito la hizo innecesaria. Guarden esa idea — va a volver a pasar."*
> 

### 2.3 Corregir las funciones de `functional-utils.js`  - PARTE LAB 1.3

**EN PANTALLA: VSCODE**

> **Tu apertura:***"Acá están las trampas que les anuncié. Las funciones de **functional-utils.js** ahora filtran y operan por PROPIEDAD —**movimiento.tipo**, **movimiento.valor**— en vez de por signo. La mayoría es un cambio mecánico, pero TRES esconden una corrección de lógica. Vamos una por una."*
> 

> **Code-along del lab — Parte 1.3 (filtros y totales, cambio mecánico):**
> 
> 
> ```jsx
> const obtenerIngresos = movimientos =>
>   movimientos.filter(movimiento => movimiento.tipo === 'ingreso');
> 
> const obtenerGastos = movimientos =>
>   movimientos.filter(movimiento => movimiento.tipo === 'gasto');
> 
> const totalIngresos = movimientos =>
>   obtenerIngresos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
> 
> const totalGastos = movimientos =>
>   obtenerGastos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
> ```
> 
> *"Hasta acá, cambio mecánico: antes el callback recibía un número suelto, ahora recibe un objeto y leemos **.tipo** o **.valor**. La estructura (filter, reduce) es idéntica a C06. Ahora las trampas."*
> 

> **Trampa 1 — calcularSaldo (cambia la lógica, no solo la sintaxis):**
> 
> 
> ```jsx
> // ⚠️ ANTES: los valores tenían signo → bastaba SUMAR todo.
> // AHORA: valor es positivo y el tipo es explícito → saldo = ingresos - gastos.
> const calcularSaldo = movimientos =>
>   totalIngresos(movimientos) - totalGastos(movimientos);
> ```
> 
> *"Esta es la trampa más peligrosa. En C06, **calcularSaldo** sumaba TODO el array y el signo hacía la resta solo (los gastos eran negativos). Ahora los gastos son positivos — si sumáramos todo, ¡el gasto se SUMARÍA al saldo en vez de restarse! El saldo daría de más. La corrección: restar explícitamente, **ingresos − gastos**."*
> 

> **Trampa 2 — buscarPrimerGastoMayor (el signo se invierte):**
> 
> 
> ```jsx
> // ⚠️ ANTES buscaba valor < -monto (gastos eran negativos). AHORA: valor > monto.
> const buscarPrimerGastoMayor = (movimientos, monto) =>
>   obtenerGastos(movimientos).find(movimiento => movimiento.valor > monto);
> ```
> 
> *"En C06, un gasto de 50 se guardaba como **-50**, así que 'mayor a 40' se escribía **valor < -40** (más negativo). Ahora el gasto es **50** positivo, y filtramos primero los gastos con **obtenerGastos**; la comparación se vuelve natural: **valor > monto**. El signo se dio vuelta."*
> 

> **Trampa 3 — montosAbsolutos SE BORRA:*"Y la tercera trampa es la más linda: montosAbsolutos —la función que usaba Math.abs para quitar el signo— ya no sirve para nada. ¿Por qué? Porque el valor YA es positivo. La función existía solo para limpiar un problema que el modelo viejo creaba. Modelo mejor → la función sobra → la BORRAMOS."***
> 
> 
> ```jsx
> const generarValoresReporte = movimientos => [
>   movimientos.length,
>   totalIngresos(movimientos),
>   totalGastos(movimientos),
>   calcularSaldo(movimientos)
> ];
> ```
> 

> **El mensaje del momento:***"Quédense con esto: un mejor modelo de datos no solo AGREGA cosas. Corrige lógica que estaba forzada (el saldo, el signo invertido) y BORRA código que solo existía para tapar las fallas del modelo viejo (montosAbsolutos). Cuando el modelo es bueno, el código se vuelve más simple, no más complicado."*
> 

### 2.4 Corregir `imprimirReporte` — de 2 arrays a 1 - PARTE LAB 1.4

**EN PANTALLA: VS CODE — *functional-utils.js*, la función *imprimirReporte* de C06.**

> **Tu explicación teórica precisa:***"En C06, **imprimirReporte** recibía DOS arrays (**nombres, valores**) y los cruzaba por índice — **nombres[indice]** con **valores[indice]**. Justo la fragilidad que vimos al inicio. Ahora recibe UN solo array de objetos, y cada movimiento trae su propio nombre y tipo."*
> 

> **Code-along del lab — Parte 1.4:**
> 
> 
> ```jsx
> // ANTES: imprimirReporte(nombres, valores)  → cruzaba 2 arrays por índice (frágil)
> // AHORA: imprimirReporte(movimientos)        → 1 array; cada objeto trae todo
> const imprimirReporte = movimientos => {
>   console.log('--- Resumen Final ---');
> 
>   movimientos.forEach((movimiento, indice) => {
>     console.log(`  ${indice + 1}. ${movimiento.nombre} (${movimiento.tipo}): $${movimiento.valor.toFixed(2)}`);
>   });
> 
>   const reporte = generarValoresReporte(movimientos);
>   console.log('Total movimientos:', reporte[0]);
>   console.log('Total ingresos: $' + reporte[1].toFixed(2));
>   console.log('Total gastos: $' + reporte[2].toFixed(2));   // ya es positivo: sin Math.abs
>   console.log('Saldo: $' + reporte[3].toFixed(2));
> };
> ```
> 
> *"Antes cruzábamos **nombres[indice]** con **valores[indice]** —y ahí estaba el riesgo de desalineamiento—. Ahora cada **movimiento** del forEach trae **.nombre**, **.tipo** y **.valor** juntos. Imposible desincronizar: el nombre y el monto del mismo movimiento viajan en la misma ficha. Y noten el **total gastos**: ya no necesita **Math.abs**, porque el valor es positivo."*
> 

> **Nota sobre el reporte posicional (siembra M4):***"El reporte todavía usa **generarValoresReporte** que devuelve un array posicional —**reporte[0]**, **reporte[1]**— como en C06. Funciona, pero hay que acordarse de qué hay en cada posición. En M4, cuando armemos la clase **Presupuesto**, eso se va a volver un objeto con nombres: **resumen().saldo**. Por ahora lo dejamos posicional."*
> 

### 2.5 Flujo final + probar  - PARTE LAB 1.5

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — *app.js* + consola.**

> **Code-along del lab — Parte 1.5:**
> 
> 
> ```jsx
> let continuar = 'si';
> while (continuar === 'si') {
>   registrarMovimiento();
>   continuar = prompt('¿Registrar otro movimiento? (si/no):');
> }
> 
> imprimirReporte(movimientos);   // un solo argumento
> ```
> 
> *"El flujo es casi igual a C06 — el **while** que repite la captura. Lo único que cambió: **imprimirReporte** ahora recibe UN argumento (**movimientos**) en vez de dos."*
> 

> **Verificar (Checkpoint 1 del lab):**
Registrar 3 movimientos (2 ingresos, 1 gasto) → el reporte muestra el desglose con nombre/tipo/monto + el saldo correcto. Confirmar que ***calcularSaldo*** resta gastos (no suma signos) y que ***buscarPrimerGastoMayor*** usa ***valor > monto***.
> 

> **Cierre del Momento + puente a M3 (SKILL §5.2 punto 11):***"Listo: el Gestor ya corre con el modelo nuevo. Arrays paralelos, eliminados. Tipo por signo, eliminado. Y de paso borramos una función entera. Pero miren algo: cada movimiento lo seguimos escribiendo a mano —**{ nombre: ..., tipo: ..., valor: ... }**— y esos datos no SABEN hacer nada solos; toda la lógica (saldo, filtrar) vive afuera, en funciones sueltas. ¿Y si tuviéramos un molde que fabrique movimientos Y les dé comportamiento propio? Eso es Programación Orientada a Objetos. Después del receso. Vamos 10 minutos."*
> 

### **RECESO — 10 minutos**

## MOMENTO 3 — Introducción a POO + `class` por capas (`Movimiento`)

> **Patrón pedagógico de M3 (el más importante del día):**
> 
> 1. **Introducción conceptual a POO + dinámica** ANTES de la sintaxis (pedido de Eric) — POO es un paradigma, no solo `class`. La dinámica "el mundo es objetos" hace que el alumno descubra propiedades/métodos en objetos cotidianos antes de verlos en código.
> 2. **¿Qué es una clase?** — sub-punto de modelo (§6.4.5): clase/instancia/`new` antes de las propiedades.
> 3. **`class` por capas** (§6.4.4 adaptado): propiedades → constructor → métodos, **cada capa nace del dolor de la anterior**. Es la cadena Problema→Solución DENTRO de un concepto, y el lab ya viene estructurado así (P2.2 → P2.3 → P2.4).
> 4. **`new` se ilumina como concepto implícito** (§6.4.6): vienen usando ***new Date()*** desde C05.

### 3.1 ¿Qué es POO? + dinámica "el mundo es objetos"

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (un objeto = características + acciones)**

> **Tu apertura — POO como el tercer paradigma:***"Volvimos del receso para el tema grande del día: Programación Orientada a Objetos, POO. Y antes de tocar una línea de código, quiero que entiendan QUÉ es como forma de pensar — porque es un paradigma, no solo una palabra clave."*
> 
> 
> *"Piensen dónde estamos parados. En C05 programamos de forma IMPERATIVA: instrucciones paso a paso. En C06, de forma FUNCIONAL: transformar datos con funciones puras. Hoy llega el tercero: ORIENTADO A OBJETOS. Tres formas distintas de organizar el MISMO programa. POO propone modelar el mundo como **objetos**: cosas que tienen características Y saben hacer cosas con ellas."*
> 

> **Dinámica participativa "el mundo es objetos":***"Hagamos una dinámica. Voy a tirar objetos cotidianos, y ustedes en el chat me dicen **DOS cosas de cada uno: qué CARACTERÍSTICAS tiene** (cómo es, cómo lo describirían) **y qué ACCIONES sabe hacer**. Vamos con el primero: un **celular**. ¿Cómo es? ¿Qué sabe hacer?"(Esperar respuestas en el chat. Anotar en pizarra/pantalla en dos columnas.)*
> 
> - *Características generales que todo celular tiene: marca, modelo, color, batería, número.*
> - *Acciones que todo celular puede realizar: llamar, sacar foto, mandar mensaje, vibrar.*
> 
> *"Otro: un **perro**. Características: nombre, raza, edad, color. Acciones: ladrar, correr, comer. Otro: una **cuenta de banco**. Características: titular, número, saldo. Acciones: depositar, retirar, consultar saldo."(Hacer 2-3 objetos según el tiempo. Mantenerlos genéricos — cosas que todos conocen.)*
> 

> **Nombrar los conceptos (cerrar la dinámica):***"Lo que acaban de hacer **ES pensar en objetos.** Y los dos tipos de cosas que listaron tienen nombre técnico:"*
> 
> - *"Las **CARACTERÍSTICAS** (marca, batería, saldo) son las **propiedades** del objeto — lo que ya vimos anteriormente, los pares clave-valor."*
> - *"Las **ACCIONES** (llamar, depositar, ladrar) son los **métodos** del objeto — funciones que el objeto sabe ejecutar sobre sus propias propiedades."*
> - "Y acá está la conexión con la mañana:  vimos objetos que SOLO tenían características (propiedades). Lo nuevo de POO es que un objeto también tiene COMPORTAMIENTO — métodos.
- Un celular no solo guarda su marca, modelo o nivel de batería; también puede saber cómo tomarFoto o hacerLlamada. Características + acciones, juntos.
- Un perro no solo guarda su raza, edad o nombre; también sabe cómo ladrar o buscarLaPelota. Características + acciones, juntos

> La Programación Orientada a Objetos es una forma de organizar el código agrupando los datos y las funciones que los manipulan dentro de un mismo bloque independiente, ese bloque independiente es el OBJETO, pero que usamos para construirlo?
> 

### 3.1.A Modelar objetos del mundo real — guía propia + identificación

**EN PANTALLA: PIZARRA / CHAT — dos columnas: PROPIEDADES | MÉTODOS. Sin código.**

> **Tu apertura:***"Ya saben QUÉ es un objeto: datos + acciones. Pero lo más difícil de POO no es la sintaxis — es MIRAR algo del mundo real y descubrir qué objetos tiene. Eso es lo que hace un programador ANTES de escribir una sola línea de código. Como todavía no lo practicamos, se los muestro PRIMERO yo, y después lo hacen ustedes."*
> 

> **Parte 1 — Lo modelo yo (guía propia). Lo difícil es ENCONTRAR los objetos:***"Acá está la parte que de verdad importa, y la que casi nadie enseña: ¿cómo SÉ qué objetos hay? Las propiedades y los métodos salen fáciles una vez que tenés el objeto. Lo valioso es detectarlo. Les doy un truco concreto que pueden usar siempre."*
> 

> **El truco — buscar los sustantivos:***"Describan el negocio en una o dos frases normales, y subrayen los SUSTANTIVOS. Cada sustantivo es un candidato a objeto. Lo hago con una biblioteca:"*
> 
> *"'En una biblioteca, un **socio** pide prestados **libros** y los devuelve; si se atrasa, paga una **multa**.'"*
> 
> *"Sustantivos que subrayo: socio, libro, multa. (La 'biblioteca' es el sistema entero, no un objeto de adentro — la dejo afuera.) Ahora filtro los candidatos con UNA pregunta:"*
> 

> **El filtro — objeto vs. propiedad:***"De cada candidato me pregunto: ¿esto tiene VARIOS datos propios y puede haber MUCHOS? Si sí, es un objeto. Si es un dato suelto, es solo una propiedad."*
> 
> - *"**Socio** → tiene nombre, carnet, y hay miles de socios distintos. Es un OBJETO."*
> - *"**Libro** → tiene título, autor, estado, y hay miles. Es un OBJETO."*
> - *"**Multa** → por ahora es solo un número (lo que se debe). Es un dato suelto → NO es objeto, es una PROPIEDAD del socio (`socio.deuda`). Ojo: si más adelante la multa necesitara su propia fecha, motivo y estado, ascendería a objeto. El mismo sustantivo puede ser propiedad u objeto según cuánto necesite saber de él."*
> 
> *"Ese es el corazón del modelado: separar lo que merece ser un objeto de lo que es solo un dato."*
> 

> **Lo fácil — propiedades y métodos (ya con los objetos en mano):***"Recién ahora, lo sencillo. Por cada objeto: cómo es (propiedades) y qué sabe hacer (métodos)."*
> 
> - **Libro** → `titulo`, `autor`, `disponible` · `prestar()`, `devolver()`
> - **Socio** → `nombre`, `carnet`, `deuda` · `pedirPrestado()`, `pagarMulta()`
> 

> **Lo que casi siempre se olvida — las RELACIONES entre objetos:***"Y acá está lo que muchos pasan por alto: los objetos NO viven aislados, se relacionan. En la biblioteca, un socio pide prestado un libro — eso es una relación. Hay dos formas típicas de relación, fíjense:"*
> 
> - *"**'Se refiere a' / 'tiene un'**: un objeto guarda a otro como propiedad. El Libro puede saber quién lo tiene: `libro.prestadoA = socio`. El dato de un objeto ES otro objeto."*
> - *"**'Contiene muchos'**: un objeto guarda una LISTA de otros. Un socio con su lista de libros prestados: `socio.librosPrestados = [...]`."*
> 
> *"Y un nivel más fino, para que les quede picando: a veces la relación misma es tan importante que se vuelve un OBJETO nuevo. 'El préstamo' —con su fecha, su socio, su libro, si fue devuelto— podría ser una clase `Prestamo` que CONECTA a los otros dos. Detectar eso es modelado de verdad."*
> 
> *"Quédense con esto: identificar objetos es el 80% del trabajo, y las relaciones son la otra mitad de ese 80%. Hoy mismo lo van a ver: nuestro Gestor tendrá un `Presupuesto` que CONTIENE muchos `Movimiento` — la relación 'contiene muchos', igual que el socio con sus libros."*
> 

> **Parte 2 — Lo hacen ustedes (dinámica):***"Ahora ustedes, con el mismo truco que acabo de usar: descripción → subrayar sustantivos → filtrar objeto vs. propiedad → relaciones. El negocio es un RESTAURANTE. Acá va la descripción, léanla y trabajen sobre ella:"*
> 
> *"'En un **restaurante**, un **mesero** atiende las **mesas**; toma el **pedido** de los **clientes**, que eligen **platos** de la **carta**. Al final, el cliente pide la **cuenta** y paga.'"*
> 
> *"Su tarea, en el chat: identifiquen 2 o 3 OBJETOS de esa descripción, y para cada uno 2-3 PROPIEDADES (cómo es) y 1-2 MÉTODOS (qué sabe hacer). Y si pueden, díganme UNA relación entre dos de ellos. Solo identificar, nada de código. Cinco minutos."*
> 
> *(Esperar propuestas. Anotar en las dos columnas. Guiar hacia objetos distintos, no variantes del mismo.)*
> 
> Objetos que suelen salir (guía para Eric):
> - **Plato** → `nombre`, `precio`, `categoria` · `estaDisponible()`
> - **Mesa** → `numero`, `capacidad`, `ocupada` · `ocupar()`, `liberar()`
> - **Pedido** → `mesa`, `platos`, `total` · `agregarPlato()`, `calcularTotal()`
> - **Mesero** → `nombre`, `mesasACargo` · `tomarPedido()`
> 
> Relación esperada: el **Pedido** CONTIENE varios **Platos** y se relaciona con una **Mesa** ("contiene muchos" + "se refiere a").
> 

> **Riesgos — cómo responder cuando se desvían (guía para Eric):**
> - *Convierten TODO en objeto* (proponen `precio`, `nombre`, `cuenta` como objetos). → Reaplicar el filtro en voz alta: *"¿el precio tiene varios datos propios y hay 'muchos precios' con identidad? No — es un número. Es una PROPIEDAD del plato, no un objeto."*
> - *Hacen un solo objeto gigante `Restaurante` con todo adentro.* → *"El restaurante es el sistema entero, como la 'biblioteca'. Buscamos los objetos de ADENTRO: mesa, plato, pedido. Varios chicos, no uno enorme."*
> - *Mezclan propiedad y método* (ponen `precio()` como método o `estaDisponible` como propiedad). → Recordar la regla simple: *"propiedad = un dato (sustantivo: `precio`); método = una acción (verbo con paréntesis: `calcularTotal()`)."*
> - *Sustantivo demasiado vago* (`comida`, `gente`). → Pedir que lo aterricen: *"¿'comida' qué sería en concreto? Un Plato. ¿'gente'? Un Cliente o un Mesero."*
> - *No ven ninguna relación.* → Disparar con una pregunta: *"¿El pedido vive solo? ¿Con qué se conecta? ¿De qué mesa es, qué platos lleva?"* — así aparece "contiene muchos / se refiere a".
> - *Dudan si algo es objeto o propiedad* (la clásica: `cuenta`). → Mostrar que depende: *"si la cuenta es solo el total a pagar, es un número → propiedad. Si necesita fecha, propina, forma de pago y estado, ya merece ser objeto. Las dos respuestas están bien según lo que el sistema necesite."*
> 

> **Cierre + puente a la clase:***"Validemos lo que salió. ¿Encontraron los objetos (Plato, Mesa, Pedido)? ¿Y las relaciones — vieron que un Pedido CONTIENE platos y se relaciona con una Mesa? Eso es exactamente lo que hicimos con la biblioteca: objetos + cómo se conectan. Lo aplicaron ustedes solos. Y el remate: cada uno de estos —Plato, Mesa, Pedido— sería una CLASE. Eso es lo que usamos para construir objetos, y es justo lo que aprendemos a escribir ahora."*
> 

### 3.2 ¿Qué es una clase? (el molde) — del celular al código

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (la clase como molde)**

> **Tu apertura (retomar la dinámica + entrar a clases):***"Volvamos al celular de la dinámica. Todos los celulares comparten la MISMA forma: todos tienen marca, modelo, batería, y todos saben llamar y sacar foto. Lo que cambia es el contenido — el tuyo es un Samsung, el mío un iPhone."*
> 
> 
> *"Imaginen que estamos en las oficinas de diseño de celulares . Antes de fabricar un celular, los ingenieros crean una plantilla para celulares. Esta plantilla no es un celular real: no puedes llamar a nadie con ella ni tomar fotos. Es solo un molde que dice: 'Todo celular que fabriquemos a partir de hoy debe tener una pantalla, una batería, una cámara, y debe poder hacer llamadas'. En POO, a esta plantilla o molde le llamamos **clase**. Es la plantilla conceptual: la descripción de cómo es cualquier celular, no un celular puntual."*
> 
> *"Y fíjense en el salto: hasta ahora SIEMPRE usaron tipos de dato que JavaScript ya traía hechos — números, textos, arrays, objetos. Nunca pudieron decir 'quiero un tipo NUEVO, hecho por mí, que se llame Celular o Movimiento'. Eso es lo que desbloquea una clase: definir TU PROPIO tipo de dato, con las características y las acciones que vos decidas. ¿Cómo se escribe esa forma común, esa categoría, una sola vez? Con **class**."*
> 

> **Tu explicación teórica precisa:
¿Qué es una clase?** Un **molde** para crear muchos objetos con la misma forma (las mismas propiedades) y el mismo comportamiento (los mismos métodos). Se define una vez con ***class***, y a partir de ella se fabrican objetos.
> 

> **Sintaxis general:**
> 
> 
> ```jsx
> class NombreDeLaClase {
>   // el contenido del molde (lo armamos por capas)
> }
> ```
> 

> • *"Por convención, el nombre de una clase va con Mayúscula inicial — **Celular**, **Movimiento**, **Presupuesto**. Distinto de variables y funciones, que van en minúscula."*
• *"La clase NO es un objeto: es el molde. Los objetos concretos se crean con **new**, que vemos en un minuto."*
> 

> **CODE ALONG:**
> 
> 
> ```jsx
> class Celular {
>   // el contenido del molde celular
> }
> ```
> 

> • *"**class Celular** sería el molde 'celular en general'. Tu celular y el mío son dos **instancias** distintas hechas con ese molde."*
> 

### 3.3 Capa 1 — Propiedades + `new` / instancia - LAB PARTE 2.2

**EN PANTALLA: VSCODE**

> **Tu apertura:***"Vamos a construir clases EN CAPAS — no de golpe. Capa 1: la forma más básica, solo propiedades. Cada capa va a tener un problema que la siguiente resuelve. Empecemos con el celular, que ya conocemos."*
> 

> **Tu explicación teórica precisa (ejemplo: el celular):**
> 
> 
> ```jsx
> class Celular {}                 // molde vacío — ya sirve como molde
> 
> const c = new Celular();         // 'new' crea una INSTANCIA (un celular del molde)
> c.marca = 'Samsung';             // le agregás PROPIEDADES (las características) a mano
> c.modelo = 'A14';
> c.bateria = 80;
> 
> console.log(c.marca);            // 'Samsung'
> ```
> 
> - *"**class Celular {}** es el molde, todavía vacío."*
> - *"**new Celular()** crea una **instancia**: un celular concreto fabricado con el molde. Una clase, muchas instancias — cada una independiente. Las características de la dinámica (marca, modelo, batería) son las **propiedades**."*
> - *"Y a esa instancia le ponés propiedades con el punto, igual que en el M1."*

### **OPERADOR NEW**

> **El operador que fabrica (concepto nuevo):***"Acá aparece una palabra nueva: **new**. Volvamos a la fábrica: si la clase es la PLANTILLA del celular —el molde de Apple/Samsung—, **new** es la orden de FABRICAR a partir de ella: 'tomá esta plantilla y hacéme un celular real'. Con la plantilla sola no podés hacer nada; el celular que sale de **new** sí funciona. Y cada **new Celular()** produce un aparato nuevo e independiente de los demás."*
> 

> *"Dato para más adelante: JavaScript ya trae varias clases hechas, y se crean igual, con **new**. Una que vamos a usar en un rato es **Date** — **new Date()** fabrica un objeto con la fecha actual. Misma mecánica: una clase, y **new** para crear un objeto concreto a partir de ella."*
> 

> **Code-along del lab — Parte 2.2 (lo mismo, en el proyecto):***"Ahora el mismo patrón con NUESTRA clase del proyecto, **Movimiento**. Sus propiedades son **nombre**, **tipo** y **valor**."*
> 
> 
> ```jsx
> class Movimiento {}              // molde vacío
> 
> const m = new Movimiento();      // instancia
> m.nombre = 'Cena';
> m.tipo = 'gasto';
> m.valor = 45.5;
> 
> console.log(m.nombre);           // 'Cena'
> ```
> 

> **Cierre de la capa 1 — el dolor que abre la capa 2:***"Pero miren el problema de esta capa, igual en el celular que en el movimiento: asignar las propiedades A MANO cada vez. Una línea por característica, y si me olvido una, el objeto queda incompleto. Tiene que haber una forma de que se pongan SOLAS al crear. La hay — se llama constructor. Capa 2."*
> 

### 3.4 Capa 2 — Constructor + `this`  - LAB PARTE 2.3

**EN PANTALLA:  VSCODE - EXCALIDRAW CON DIAGRAMA GENERADO**

> **Tu apertura:***"Capa 2: que las propiedades se pongan solas. Para eso existe un método especial llamado **constructor**. Seguimos con el celular."*
> 

> **Tu explicación teórica precisa (ejemplo: el celular):¿Qué es el constructor?** Un método especial que se ejecuta automáticamente al hacer ***new***. Su trabajo: recibir los datos como parámetros y guardarlos como propiedades de la instancia, usando ***this***.
Reemplaza el tener que asignar las propiedades a mano una por una.
> 

```jsx
class Celular {
  constructor(marca, modelo, bateria) {
    this.marca = marca;       // "guardá en ESTE celular la propiedad marca"
    this.modelo = modelo;
    this.bateria = bateria;
  }
}

const miCel = new Celular('Samsung', 'A14', 80);   // 1 sola línea
console.log(miCel.marca);     // 'Samsung'
console.log(miCel.bateria);   // 80
```

- *"El **constructor** corre solo al hacer **new** — ustedes nunca lo llaman a mano."*
- *"Son las MISMAS 3 propiedades de la capa 1, pero ahora se ponen automáticamente al crear el objeto."*

### **`this` — el concepto que más confunde:**

> ***¿Qué es ese this?** Apunta al objeto que se está creando en ese momento. Cuando hago **new Celular('Samsung', ...)**, dentro del constructor **this** es el celular-Samsung. Cuando hago **new Celular('iPhone', ...)**, **this** es el celular-iPhone. El mismo código del constructor sirve para todos, porque **this** siempre apunta a 'el que se está creando ahora'."*
Porque lo usamos dentro de la clase?
Usamos this para acceder a propiedades internas del mismo objeto porque this hace referencia al objeto que lo contiene.
> 

> **Demo del error sin `new` (gancho ejecutable):***"Una trampa común. ¿Qué creen que pasa si me olvido el **new**?"*
> 
> 
> ```jsx
> const miCel = Celular('Samsung', 'A14', 80);   // SIN new — ¿qué pasa?
> ```
> 
> *(Esperar predicción, después ejecutar.)"Error explícito: **Class constructor Celular cannot be invoked without 'new'**. Bien que sea explícito — la clase te avisa claramente que faltó el **new**. Mejor un error claro que un bug silencioso."*
> 

> **Code-along del lab — Parte 2.3 (lo mismo, en el proyecto):***"Mismo constructor, ahora en **Movimiento**."*
> 
> 
> ```jsx
> class Movimiento {
>   constructor(nombre, tipo, valor) {
>     this.nombre = nombre;
>     this.tipo = tipo;
>     this.valor = valor;
>   }
> }
> 
> const cena = new Movimiento('Cena', 'gasto', 45.5);   // 1 línea
> console.log(cena.valor);   // 45.5
> ```
> 

> **Cierre de la capa 2 — el dolor que abre la capa 3:***"Ahora cada objeto nace en una línea, con sus propiedades puestas solas. Pero todavía les falta algo: los datos no SABEN hacer nada. El celular guarda su batería, pero no sabe DECIR si está cargado. El movimiento guarda su tipo, pero no sabe DECIR si es ingreso. ¿Y si el propio objeto supiera hacer esas cosas? Eso son los métodos. Capa 3."*
> 

### 3.5 Capa 3 — Métodos  - LAB PARTE 2.4

**EN PANTALLA: VSCODE** 

> **Tu apertura:***"Capa 3, la última: darle COMPORTAMIENTO al objeto — las ACCIONES del objeto. Un método es una función dentro de la clase que usa las propiedades del propio objeto con **this**."*
> 

> **Tu explicación teórica precisa (ejemplo: el celular):**
> 
> 
> ```jsx
> class Celular {
>   constructor(marca, modelo, bateria) {
>     this.marca = marca;
>     this.modelo = modelo;
>     this.bateria = bateria;
>   }
> 
>   estaCargado() {
>     return this.bateria > 20;          // usa la propiedad 'bateria'
>   }
> 
>   describir() {
>     const estado = this.estaCargado() ? 'cargado' : 'batería baja';
>     return `${this.marca} ${this.modelo} — ${estado}`;
>   }
> }
> ```
> 
> - *"Los métodos se escriben DENTRO de la clase, sin la palabra **function** — solo el nombre y los paréntesis: **estaCargado() {}**."*
> - *"Usan las propiedades del objeto con **this**: **estaCargado** lee **this.bateria**."*
> - *"Un método puede usar OTRO método del mismo objeto: **describir** llama a **this.estaCargado()**. Composición dentro de la clase."*

> **Demo en vivo (consola):**
> 
> 
> ```jsx
> const miCel = new Celular('Samsung', 'A14', 80);
> console.log(miCel.estaCargado());  // true
> console.log(miCel.describir());    // 'Samsung A14 — cargado'
> ```
> 
> *"Se invocan con punto + paréntesis, igual que **.push()** o **.toFixed()** que ya usan. **miCel.describir()** es apretar el botón 'describir' de ESE celular."*
> 

> **Code-along del lab — Parte 2.4 (lo mismo, en el proyecto):***"Mismos métodos, ahora en **Movimiento**: **esIngreso**/**esGasto** (como **estaCargado**) y **formatear** (como **describir**, que usa otro método)."*
> 
> 
> ```jsx
> class Movimiento {
>   constructor(nombre, tipo, valor) {
>     this.nombre = nombre;
>     this.tipo = tipo;
>     this.valor = valor;
>     this.fecha = new Date().toLocaleDateString();
>   }
> 
>   esIngreso() {
>     return this.tipo === 'ingreso';
>   }
> 
>   esGasto() {
>     return this.tipo === 'gasto';
>   }
> 
>   formatear() {
>     const signo = this.esIngreso() ? '+' : '-';
>     return `${this.nombre}: ${signo}$${this.valor.toFixed(2)}`;
>   }
> }
> ```
> 
> ```jsx
> const salario = new Movimiento('Salario', 'ingreso', 3000);
> console.log(salario.esIngreso());  // true
> console.log(salario.formatear());  // 'Salario: +$3000.00'
> ```
> 

### 3.6 Usar la clase en el proyecto - LAB PARTE 2.5

**EN PANTALLA: VS CODE — *app.js* y *functional-utils.js*.**

> **Tu apertura:***"Tenemos la clase **Movimiento** completa, por capas. Ahora la metemos al proyecto: que cada movimiento sea una instancia de **Movimiento**, no un objeto literal escrito a mano."*
> 

> **Code-along del lab — Parte 2.5:**
> 
> 1. En ***registrarMovimiento***, crear una instancia en vez de un objeto literal:*"Antes: **movimientos.push({ nombre: nombre, tipo: tipo, valor: valor })**. Ahora: **new Movimiento(...)**. El constructor arma el objeto por nosotros."*
>     
>     ```jsx
>     movimientos.push(new Movimiento(nombre, tipo, valor));
>     ```
>     
> 2. Como cada movimiento ahora es un ***Movimiento*** (con métodos), ***imprimirReporte*** puede usar ***formatear()***:*"Miren la ganancia: el formateo del texto ya no vive en **imprimirReporte** — vive DENTRO del movimiento, en su método **formatear**. La función de reporte solo lo invoca. El objeto sabe formatearse solo."*
>     
>     ```jsx
>     movimientos.forEach((movimiento, indice) => {
>       console.log(`  ${indice + 1}. ${movimiento.formatear()}`);
>     });
>     ```
>     

> **Verificar (Checkpoint 2 del lab):**
Construiste ***Movimiento*** por capas (propiedades → constructor → métodos); ***registrarMovimiento*** crea instancias y el reporte usa ***formatear()***.
> 

## MOMENTO 4 — Calentamiento (clase propia) + `class Presupuesto` + encapsulación

> **OBJETIVO:** Primero el alumno **construye una clase completa solo** (constructor + método + crear instancias) a partir de un enunciado de dominio neutro — verificación activa de que el patrón de M3 quedó. Después aplica ese mismo patrón a la 2ª clase del proyecto, ***Presupuesto***, que CONTIENE y gestiona el array de movimientos. Entiende la **encapsulación** (datos + métodos juntos en una cápsula) y ve cómo las funciones sueltas de C06 quedan absorbidas como métodos. Al cerrar M4, el Gestor está completo en lógica: ***resumen()*** devuelve un objeto nombrado y la clase gestiona todo el estado.
> 

### 4.0 Calentamiento — Construí tu propia clase (ejercicio autónomo)

**EN PANTALLA: EXCALIDRAW - Eric proyecta SOLO el enunciado, no la solución.**

> **Tu apertura:***"Antes de la segunda clase del proyecto, un ejercicio corto y lo hacen SOLOS. Les doy un problema en palabras; ustedes lo traducen a una clase. Sin mirar el código de **Movimiento** — la idea es que demuestren que el patrón les quedó. Diez minutos."*
> 

> **Enunciado (leer en voz alta y dejarlo en pantalla):***"Una tienda online necesita modelar sus productos. Cada **Producto** tiene tres datos: un **nombre**, un **precio** y un **stock** (unidades disponibles). Además, cada producto debe saber hacer dos cosas:"*
> 
> 1. *"**hayStock()** → devuelve **true** si quedan unidades (stock mayor que cero), **false** si no."*
> 2. *"**precioConDescuento()** → devuelve el precio con un 20% de descuento aplicado (el precio de oferta)."*
> 
> *"Su tarea: (1) escriban la clase **Producto** con su **constructor** y esos dos **métodos**; (2) creen DOS productos distintos con **new** —uno con stock y otro sin stock—; (3) llamen a los dos métodos de cada uno y muéstrenlo con **console.log**."*
> 

> **Criterios de verificación (lo que Eric revisa al cerrar):**
> 
> - La clase usa ***constructor(nombre, precio, stock)*** y guarda los tres con ***this***.
> - Los métodos leen las propiedades con ***this*** (no parámetros sueltos).
> - Se crean instancias con ***new Producto(...)*** y se invocan los métodos con punto (***p.hayStock()***).
> - *(Activación, no en el enunciado escrito):* *"¿Por qué **precioConDescuento** no necesita recibir el precio por parámetro?"* → porque ya lo tiene en ***this.precio***. Es la idea clave del día: el objeto trae sus propios datos.

> **Solución esperada (NO proyectar hasta que la mayoría termine):**
> 
> 
> ```jsx
> class Producto {
>   constructor(nombre, precio, stock) {
>     this.nombre = nombre;
>     this.precio = precio;
>     this.stock = stock;
>   }
> 
>   hayStock() {
>     return this.stock > 0;
>   }
> 
>   precioConDescuento() {
>     return this.precio * 0.8;   // 20% menos
>   }
> }
> 
> const teclado = new Producto('Teclado mecánico', 120, 5);
> const mouse   = new Producto('Mouse gamer', 80, 0);
> 
> console.log(teclado.hayStock());           // true
> console.log(teclado.precioConDescuento()); // 96
> console.log(mouse.hayStock());             // false
> console.log(mouse.precioConDescuento());   // 64
> ```
> 

> **Cierre del calentamiento + puente a Presupuesto:***"Si les salió, ya saben lo esencial de POO: definir un molde y fabricar objetos con él. Ahora apliquemos exactamente eso al proyecto, pero subiendo un nivel: una clase que no modela UNA cosa, sino que GESTIONA muchas. Esa es **Presupuesto**."*
> 

### 4.1 `class Presupuesto` — el molde que GESTIONA - LAB PARTE 3.1

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (encapsulación: de suelto a cápsula)**

> **Tu apertura:***"Hasta ahora cada **Movimiento** es un objeto que modela UNA cosa. Pero el array de movimientos sigue siendo una variable global suelta, y las operaciones —sumar ingresos, calcular saldo, buscar— viven aparte en **functional-utils.js**. Datos por un lado, operaciones por el otro. **Presupuesto** junta las dos cosas en una sola clase."*
> 

> **Tu explicación teórica precisa — encapsulación:¿Qué es encapsular?** Agrupar en un mismo objeto los DATOS (propiedades) y las OPERACIONES que actúan sobre esos datos (métodos). En vez de "un array acá y funciones allá", todo vive dentro de una cápsula que se gobierna a sí misma.
> 
> - *"**Movimiento** encapsulaba los datos de UN movimiento. **Presupuesto** encapsula la COLECCIÓN entera y todo lo que se hace con ella."*
> - *"Mismo patrón de capas de M3: una propiedad primero (el array), después los métodos."*

> **Tu analogía:***"Piensen en la app del banco en el celular. No es solo 'la lista de tus movimientos' por un lado y 'la calculadora del saldo' por otro: es UNA app que guarda tus movimientos Y sabe calcular el saldo, buscar, filtrar. Todo adentro. Eso es **Presupuesto**: la cápsula que tiene los movimientos y sabe operarlos."*
> 

> **Code-along del lab — Parte 3.1:**
> 
> 1. La propiedad (capa 1): el array vive ADENTRO, en ***this.movimientos***.*"El constructor no recibe parámetros: un presupuesto nace vacío y se va llenando. La propiedad es un array — un objeto puede tener arrays adentro."*
>     
>     ```jsx
>     class Presupuesto {
>       constructor() {
>         this.movimientos = [];   // ya no es una global suelta
>       }
>     }
>     ```
>     
> 2. Los métodos que MODIFICAN la colección:*"**agregar** mete un movimiento al array propio. **eliminar** se queda con todos menos el del nombre dado, usando el **.filter** de C06 — pero ahora sobre **this.movimientos**."*
>     
>     ```jsx
>       agregar(movimiento) {
>         this.movimientos.push(movimiento);
>       }
>     
>       eliminar(nombre) {
>         this.movimientos = this.movimientos.filter(movimiento => movimiento.nombre !== nombre);
>       }
>     ```
>     
> 3. Los métodos que CALCULAN (las funciones de C06, ahora absorbidas):*"Estas son EXACTAMENTE las funciones de C06, pero ahora son métodos: leen **this.movimientos** en vez de recibir el array por parámetro. Y fíjense en el doble juego de **this**: **saldo** llama a **this.totalIngresos()** (un método usa otro), y el **.filter** pregunta **movimiento.esIngreso()** (un método del Movimiento). Las dos clases colaboran."*
>     
>     ```jsx
>       totalIngresos() {
>         return this.movimientos
>           .filter(movimiento => movimiento.esIngreso())
>           .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
>       }
>     
>       totalGastos() {
>         return this.movimientos
>           .filter(movimiento => movimiento.esGasto())
>           .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
>       }
>     
>       saldo() {
>         return this.totalIngresos() - this.totalGastos();
>       }
>     
>       buscarPorNombre(texto) {
>         return this.movimientos.find(movimiento =>
>           movimiento.nombre.toLowerCase().includes(texto.toLowerCase()));
>       }
>     ```
>     

> **El reporte nombrado — `resumen()` (cierra el dolor posicional de C06):**
> 
> 
> ```jsx
>   resumen() {
>     return {
>       cantidad: this.movimientos.length,
>       ingresos: this.totalIngresos(),
>       gastos: this.totalGastos(),
>       saldo: this.saldo()
>     };
>   }
> ```
> 
> *"Acá pagamos una deuda vieja. En C06 el reporte era un array posicional: **reporte[0]**, **reporte[1]**... había que acordarse de qué había en cada posición. **resumen()** devuelve un OBJETO con nombres: **.cantidad**, **.saldo**. Es el mismo salto 'posicional → nombrado' que hicimos con el modelo en el M2, ahora en la salida."*
> 

> **Nombrar la ganancia (dónde sucede, §6.4.8):***"Y miren qué pasó con **functional-utils.js**: **totalIngresos**, **totalGastos**, **calcularSaldo**, **buscar...** ya no van sueltas ahí — son métodos de **Presupuesto**. Pueden borrarlas del archivo viejo. Eso es lo que da la encapsulación: el código que estaba disperso queda agrupado donde pertenece."*
> 

### 4.2 Probar el modelo completo en consola - LAB PARTE 3.2

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el archivo de clases + la consola.**

> **Tu apertura:***"Momento de la verdad: armemos un presupuesto real y veámoslo funcionar de punta a punta."*
> 

> **Code-along del lab — Parte 3.2:**
> 
> 
> ```jsx
> const miPresupuesto = new Presupuesto();
> miPresupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
> miPresupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
> miPresupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));
> 
> console.log(miPresupuesto.resumen());
> // { cantidad: 3, ingresos: 3500, gastos: 45.5, saldo: 3454.5 }
> 
> miPresupuesto.eliminar('Cena');
> console.log(miPresupuesto.saldo());                              // 3500
> console.log(miPresupuesto.buscarPorNombre('free').formatear());  // 'Freelance: +$500.00'
> ```
> 
> *"Miren la última línea, que junta TODO el día: **buscarPorNombre** (método de Presupuesto) devuelve un **Movimiento**, y a ese movimiento le encadenamos **.formatear()** (método de Movimiento). Dos clases colaborando en una sola línea. Eso es el modelo terminado."*
> 

> **Cierre del Momento + puente a M5 (SKILL §5.2 punto 11):***"Listo: el Gestor de Presupuesto está COMPLETO en lógica. Empezó en C05 como dos arrays paralelos frágiles, pasó por funciones en C06, y hoy es un modelo de objetos que se gobierna solo. Lo único que le falta es CARA — sigue viviendo en la consola. En el cierre vemos qué ganamos exactamente en el camino, y hacia dónde va esto."*
> 

## MOMENTO 5 — Cierre

### 5.1 Qué ganamos — el viaje del modelo

**EN PANTALLA: EXCALIDRAW / VSCODE**

> **Tu apertura:***"Cerremos viendo el camino completo. El Gestor es el mismo programa de siempre, pero miren cómo cambió su esqueleto en tres clases."*
> 

> **Recorrer la tabla (una línea por fila, sin detenerse demasiado):**
> 
> 
> 
> | Antes (C05 / C06) | Ahora (C07) |
> | --- | --- |
> | 2 arrays paralelos | 1 array de objetos |
> | Tipo codificado en el signo | Tipo explícito (***'ingreso'*** / ***'gasto'***) |
> | Funciones sueltas en otro archivo | Métodos dentro del objeto |
> | Estado en variables globales | Estado encapsulado en ***Presupuesto*** |
> | Reporte posicional (***reporte[0]***) | Reporte nombrado (***resumen().saldo***) |
> | Frágil: desincronizar era fácil | Íntegro: los datos viajan juntos |
> 
> *"Cada fila resolvió un dolor concreto que ustedes mismos sintieron. No cambiamos lo que el programa HACE; cambiamos cómo está ORGANIZADO — y eso es lo que lo hace mantenible."*
> 

### 5.2 Los tres paradigmas coexisten + puente a C08

**EN PANTALLA: EXCALIDRAW / VSCODE**

> **Tu explicación de cierre:***"Una idea que quiero que se lleven: POO NO es 'lo que reemplaza a lo anterior'. Es otra forma de organizar lo mismo. Vieron el MISMO proyecto escrito de tres maneras: imperativo paso a paso en C05, transformando datos con funciones en C06, y modelado con objetos hoy. En el código real los tres conviven — un método (POO) por dentro usa **.filter** y **.reduce** (funcional) y un **while** (imperativo). No compiten; se combinan."*
> 

> **Puente a C08:***"El Gestor está completo en lógica, pero solo corre en la consola — no tiene cara. En C08 aprenden **Tailwind CSS** y por fin le dan una interfaz visual, moderna y responsiva. Y conectar esa interfaz con estas clases —que un click en un botón llame a **miPresupuesto.agregar(...)**— es el Módulo 3, cuando entremos al DOM. Lo que construyeron hoy es el motor; lo que viene es la carrocería y el volante."*
>