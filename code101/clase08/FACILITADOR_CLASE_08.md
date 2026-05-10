# Guía del Facilitador - Clase 08: Vibe Coding con IA

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Prompt Scaffolding**: Técnica de construir prompts efectivos mediante preguntas clarificadoras con opciones predefinidas. Reduce la fricción de "no sé qué pedir".
- **Iteración con IA**: Proceso de refinar resultados pidiendo cambios específicos. La clave es ser concreto, no vago.
- **GitHub Pages**: Servicio de hosting gratuito de GitHub para sitios estáticos. Toma el contenido de un branch y lo publica en una URL pública.
- **Artifact**: En Claude, un bloque de código interactivo que se genera en el panel derecho y permite vista previa en tiempo real.

---

## 🔗 Analogías Útiles

**Prompt Scaffolding <> Cuestionario médico:**
Cuando vas al doctor, no le dices "me siento mal, arréglame". Te hace preguntas específicas: ¿Dónde te duele? ¿Desde cuándo? ¿Es constante o intermitente? Con las respuestas, puede diagnosticar. Prompt Scaffolding hace lo mismo: preguntas específicas → prompt preciso.

**Iteración con IA <> Ajustar un traje:**
Un sastre te hace un traje, te lo pruebas, y dices "las mangas están largas" (específico), no "no me gusta" (vago). El sastre ajusta y pruebas de nuevo. Así funciona iterar con IA: feedback específico → ajuste → feedback → ajuste.

**GitHub Pages <> Subir foto a Instagram:**
Cuando subes una foto a Instagram, está en tu teléfono (local) y después en internet (público). GitHub Pages hace lo mismo con tu código: está en tu computadora, haces push, y aparece en una URL pública.

**Dos IAs <> Arquitecto + Constructor:**
Gemini es como un arquitecto que te hace preguntas para entender qué casa quieres. Claude es como el constructor que recibe los planos y construye. Cada uno tiene su rol especializado.

---

## 📚 Contexto Histórico

### El nacimiento del Prompt Engineering

El término "prompt engineering" surgió con la llegada de GPT-3 en junio de 2020. Antes de los modelos de lenguaje grandes, la interacción con IA era mediante interfaces estructuradas (botones, formularios). GPT-3 cambió eso: de repente, podías hablarle a una IA en lenguaje natural.

Rápidamente se descubrió que **cómo preguntabas** afectaba dramáticamente la calidad de las respuestas. Ingenieros comenzaron a documentar patrones: dar contexto, ser específico, pedir formato particular. Nació una nueva habilidad.

Empresas como Scale AI y Anthropic comenzaron a contratar "prompt engineers" en 2022—personas cuyo trabajo era exclusivamente escribir instrucciones efectivas para IAs. Algunos salarios llegaron a $300,000/año.

> **Para contar en clase:** "Hace 5 años, nadie sabía qué era un 'prompt'. Hoy es una habilidad que empresas pagan muy bien. Lo que aprenden hoy—cómo pedir cosas a una IA—es una habilidad del futuro."

### Claude y los Artifacts

Claude, desarrollado por Anthropic, introdujo los "artifacts" en 2024. A diferencia de otros chatbots que solo generan texto, Claude puede crear bloques de código interactivos que se renderizan en tiempo real en un panel separado.

Esto cambió el flujo de trabajo: en lugar de copiar código a un archivo, verlo en un navegador, y volver al chat para pedir cambios, todo sucede en una sola interfaz. El desarrollador puede iterar sin salir de la conversación.

> **Para contar en clase:** "Claude tiene algo especial: los artifacts. Cuando generen código, van a ver una vista previa en vivo al lado. Pueden pedir cambios y ver el resultado instantáneamente, sin copiar y pegar."

### GitHub Pages: Democratizando el hosting

GitHub Pages se lanzó en 2008, el mismo año que GitHub. Originalmente era solo para documentación de proyectos. Con el tiempo, desarrolladores comenzaron a usarlo para portfolios, blogs, y páginas personales.

Lo revolucionario fue el precio: gratis. Antes, publicar un sitio web requería comprar hosting, configurar servidores, manejar DNS. GitHub Pages eliminó toda esa fricción. Solo necesitas un repositorio público y activar un switch.

Hoy, millones de sitios corren en GitHub Pages, incluyendo documentación de proyectos de código abierto como Bootstrap, React, y Vue.

> **Para contar en clase:** "Publicar un sitio web solía costar dinero y requerir conocimientos de servidores. GitHub Pages lo hizo gratis y simple. Con un clic, su código pasa de 'en mi computadora' a 'en internet'. Eso es lo que harán hoy."

**Fuentes:** [Prompt Engineering Guide](https://www.promptingguide.ai/){:target="_blank"}, [Anthropic Claude](https://www.anthropic.com/claude){:target="_blank"}, [GitHub Pages Docs](https://docs.github.com/en/pages){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Prompt malo vs Prompt bueno"

Antes de enseñar Prompt Scaffolding, muestra la diferencia en vivo.

**Preparación:**
- Tener Claude.ai abierto en el proyector

**Dinámica sugerida:**
```
Facilitador: "Voy a pedirle a Claude que me haga un Linktree."
Facilitador: (Escribe) "Hazme un Linktree"
Facilitador: (Muestra resultado genérico)
Facilitador: "¿Es esto lo que quería? No sé, porque no le dije qué quería."

Facilitador: "Ahora con más contexto."
Facilitador: (Escribe) "Hazme un Linktree con fondo oscuro casi negro,
              botones redondeados color neón cyan, hover que agrande
              los botones, foto circular arriba, responsive mobile-first"
Facilitador: (Muestra resultado personalizado)
Facilitador: "¿Ven la diferencia? El segundo prompt le dice exactamente qué hacer."
```

### Dinámica 2: "Prompt Scaffolding en vivo"

Haz el proceso completo con un voluntario antes de que todos lo hagan.

**Preparación:**
- Tener Gemini abierto en el proyector
- Prompt de scaffolding listo para pegar

**Dinámica sugerida:**
```
Facilitador: "Necesito un voluntario. Vamos a construir su prompt juntos."
Facilitador: (Pega el prompt de scaffolding en Gemini)
Facilitador: "Gemini va a hacer preguntas. [Voluntario], responde en voz alta."

Gemini: "¿Tienes un wireframe?"
Voluntario: "No tengo"

Gemini: "¿Qué estilo visual prefieres? A, B, C, o D"
Voluntario: "C, oscuro y moderno"

(Continuar con todas las preguntas)

Facilitador: "Miren el prompt que generó. Esto es lo que van a copiar a Claude."
```

### Dinámica 3: "Iteración en acción"

Después de que generen su primer código, muestra cómo iterar.

**Dinámica sugerida:**
```
Facilitador: "Levanten la mano si algo no se ve como querían."
(Varias manos)
Facilitador: "Perfecto, eso es NORMAL. Ahora vamos a iterar."

Facilitador: "Dame un ejemplo de algo que no te gustó."
Estudiante: "Los botones están muy juntos"

Facilitador: "¿Cómo le pedirías a Claude que lo arregle?"
Estudiante: "¿Que los separe?"

Facilitador: "Más específico. ¿Cuánto espacio? Intenta con 'agrega 1.5rem de espacio entre los botones'"
(Estudiante prueba, ve resultado)

Facilitador: "¿Ven? Específico = resultado. Vago = adivinanza."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Prompt de Scaffolding completo

Este es el prompt que los estudiantes pegarán en Gemini:

```
Eres un asistente que ayuda a construir prompts para generar páginas web tipo Linktree.

Tu trabajo es hacerme 5 preguntas para entender qué quiero, y luego generar un prompt final que pueda usar en otra IA.

Las preguntas deben ser:

**Pregunta 0 (opcional):** "¿Tienes un wireframe o boceto de tu diseño? Si es así, descríbelo brevemente o pega el link. Si no tienes, escribe 'No tengo' y continuamos."

**Pregunta 1:** "¿Qué estilo visual prefieres?"
- A) Minimalista y limpio
- B) Colorido y llamativo
- C) Oscuro y moderno
- D) Profesional y corporativo

**Pregunta 2:** "¿Qué tipo de paleta de colores?"
- A) Tonos neutros (blancos, grises, negros)
- B) Colores vibrantes (azul, rosa, naranja)
- C) Modo oscuro con acentos neón
- D) Colores tierra y naturales

**Pregunta 3:** "¿Cómo prefieres los botones de enlaces?"
- A) Rectangulares con bordes marcados
- B) Redondeados (pill buttons)
- C) Con sombras y efecto 3D
- D) Minimalistas, solo texto con hover

**Pregunta 4:** "¿Qué efecto de hover quieres en los botones?"
- A) Cambio de color suave
- B) Escala (se agranda ligeramente)
- C) Sombra que aparece
- D) Cambio de fondo + escala combinados

Hazme las preguntas UNA POR UNA. Espera mi respuesta antes de hacer la siguiente.

Cuando tenga todas las respuestas, genera un prompt final con este formato:

---
**PROMPT PARA CLAUDE:**

Crea una página web tipo Linktree con las siguientes características:

[Incluir todas mis respuestas organizadas]

Requisitos técnicos:
- HTML semántico en un solo archivo
- CSS incluido en un tag <style> dentro del HTML
- Diseño responsive (mobile-first)
- Debe verse bien en 375px y 768px+
- Incluir al menos 5 enlaces de ejemplo
- Foto de perfil circular como placeholder
- Nombre y bio debajo de la foto

Genera el código completo listo para usar.
---
```

### Ejemplo 2: Iteraciones comunes

**Problema:** Botones muy juntos
```
"Agrega 1.5rem de margin-bottom a cada botón para separarlos más"
```

**Problema:** Texto muy pequeño en móvil
```
"Aumenta el font-size del título a 2rem y de la bio a 1.1rem"
```

**Problema:** Fondo no es suficientemente oscuro
```
"Cambia el color de fondo a #0a0a0a (casi negro puro)"
```

**Problema:** Hover no se nota
```
"Haz que el hover sea más notorio: escala a 1.05 y cambia el color de fondo"
```

### Ejemplo 3: Configuración de GitHub Pages

```
Paso 1: Ve a tu repositorio en github.com
Paso 2: Click en "Settings" (arriba a la derecha)
Paso 3: En el menú izquierdo, busca "Pages"
Paso 4: En "Source", selecciona:
        - Branch: main
        - Folder: / (root)
Paso 5: Click en "Save"
Paso 6: Espera 1-3 minutos
Paso 7: Refresca la página, verás tu URL
```

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| "Claude dice que no puede generar código" | Prompt muy vago o pidiendo algo prohibido | Verificar que el prompt sea específico y apropiado |
| "No veo el artifact" | Puede estar en otra pestaña o Claude no generó código | Buscar panel derecho, o pedir explícitamente "genera el código en un artifact" |
| "El código tiene errores de sintaxis" | A veces la IA comete errores | Pedir a Claude que corrija: "Hay un error de sintaxis, revisa y corrige" |
| "GitHub Pages muestra 404" | Archivo no se llama index.html o no hizo push | Verificar nombre exacto y que hizo `git push` |
| "GitHub Pages no actualiza" | Cache del navegador o deploy no terminó | Esperar 2-3 min, hacer hard refresh (Ctrl+Shift+R) |
| "No puedo acceder a Claude.ai" | Bloqueo de red o cuenta no verificada | Usar alternativa (pueden compartir pantalla con compañero) |
| "Gemini no hace las preguntas una por una" | A veces Gemini ignora esa instrucción | Pedir: "Hazme las preguntas una por una, espera mi respuesta" |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-10 | Intro + demo prompt malo vs bueno | Estudiantes entienden la diferencia |
| 10-45 | Prompt Scaffolding completo | Tienen prompt final copiado de Gemini |
| 45-70 | Código generado y personalizado | `index.html` tiene su código, Commit #1 hecho |
| 70-90 | Responsive verificado | Probaron en 375px y 768px, Commit #2 hecho |
| 90-110 | GitHub Pages activado | URL pública funcionando |

---

## 🚨 Plan de Contingencia

### Si Claude.ai está caído o inaccesible:

**Opción A:** Usar ChatGPT como alternativa
- El prompt funciona igual
- No tiene artifacts, pero genera código que pueden copiar

**Opción B:** Usar Gemini para todo
- Gemini también puede generar código
- El flujo sería: Scaffolding en Gemini → Generación en Gemini

### Si GitHub Pages no activa:

**Opción A:** Verificar en grupo
1. Proyectar el proceso paso a paso
2. Todos hacen cada paso juntos
3. Esperar 3-5 minutos entre activar y verificar

**Opción B:** Usar Netlify Drop como alternativa
1. Ir a [app.netlify.com/drop](https://app.netlify.com/drop){:target="_blank"}
2. Arrastrar la carpeta del proyecto
3. Obtener URL instantánea
4. No es la solución "oficial", pero funciona para demostrar el deploy

### Si estudiantes no tienen wireframe:

**Ya está contemplado:** El prompt de scaffolding tiene "Pregunta 0" opcional. Si no tienen wireframe, simplemente responden "No tengo" y las otras 4 preguntas cubren lo necesario.

---

## 🔗 Conexión con Módulo 3

Al cerrar el módulo, planta la semilla para JavaScript:

> "Felicidades, su MyLinks está en internet. Cualquier persona en el mundo puede verlo. Pero... ¿qué pasa si quieren que haga algo? ¿Que cuente cuántas veces alguien hace clic? ¿Que muestre un mensaje de bienvenida? ¿Que cambie de color según la hora del día? Para eso necesitan JavaScript. Eso es el Módulo 3."

---

## 🎨 Notas Específicas de Esta Clase

### Sobre el flujo de dos IAs

Puede parecer complicado usar dos IAs (Gemini → Claude). Justifícalo así:

> "¿Por qué dos IAs? Porque cada una es buena en algo diferente. Gemini es excelente para hacer preguntas y organizar información. Claude es excelente para generar código con vista previa. Usar la herramienta correcta para cada tarea es lo que hacen los profesionales."

### Sobre el lab calificado

Esta es la primera evaluación formal. Algunos estudiantes estarán nerviosos.

> "Este es un lab calificado, pero no es un examen sorpresa. Ya saben todo lo que necesitan: usaron Git, hicieron responsive, crearon wireframes. Hoy solo juntamos todo. La rúbrica está en el lab—no hay sorpresas."

### Sobre los commits

El objetivo es 4 commits. Dos están forzados en clase (después de generación y después de responsive). Los otros dos vienen del refinamiento post-clase. Si un estudiante llega con menos de 4 pero todo lo demás está bien, no penalizar excesivamente—el objetivo pedagógico es que practiquen Git, no que memoricen cuántos commits hacer.

### Sobre el momento "wow"

Cuando GitHub Pages active y vean su URL pública, haz una pausa:

> "Ábranlo en su teléfono. Mándenselo a un amigo. Eso está en internet. Ustedes lo hicieron. En 4 clases pasaron de no saber qué era Git a tener un sitio web publicado."

Ese es el cierre emocional del módulo. No lo apures.
