---
name: feedback-situaciones-interactivas-genericas
description: "En actividades interactivas estilo \"Situación → ¿qué usás? ¿por qué?\" o \"Verdad o Mito\", las situaciones deben ser escenarios genéricos del mundo real, NUNCA casos que el alumno acaba de construir en clase"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

En actividades interactivas donde el alumno tiene que razonar y elegir (ej: "¿Grid o Flex?", "¿Verdad o Mito?", "¿Qué herramienta usás?"), las situaciones planteadas **NO deben ser los casos del lab que acabás de hacer en clase**. Tienen que ser escenarios genéricos del diseño web cotidiano — productos digitales que el alumno reconoce como **usuario** pero que nunca construyó (Gmail, WhatsApp, Mercado Libre, Pinterest, Spotify, Notion, modales de cualquier app).

**Why:** si la situación es algo que el alumno acaba de armar (ej: "el nav del index.html que tienen arriba", "los planes que armaron en M2", "el faq.html que acaban de hacer"), le estás dando las respuestas servidas — el ejercicio se vuelve recall de memoria reciente, no transferencia de criterio. El objetivo pedagógico es que el alumno **transfiera** lo aprendido a un contexto nuevo, no que recuerde lo que ya hizo.

**How to apply:**
- En el momento de cierre interactivo de cualquier clase, mapeá primero qué lección pedagógica querés fijar (ej: cantidad fija vs variable, 1D vs 2D, propiedades del ítem vs propiedades del contenedor).
- Para cada lección, buscá un producto digital genérico que el alumno usa todos los días pero que no haya construido (Gmail para layouts 2D, Mercado Libre para grillas variables, WhatsApp para alineación individual, etc.).
- Validá: si la situación menciona "el index.html que armaron", "lo que hicimos en M2", "la página X que acabamos de hacer" → está mal, reescribir.
- Mantené el set pequeño y enfocado: **4 situaciones, una por cada herramienta enseñada**, alcanza. Más cajas (6+) diluyen el ejercicio y agregan ambigüedad innecesaria.
- Referencia: la dinámica "Verdad o Mito" de C08 del Code 101 es la inspiración del formato; ver `[[feedback-estilo-capa-2-3]]` para el resto del estilo de cierre.

**Regla crítica de soporte visual — la imagen reemplaza la jerga técnica:**
El alumno en clases iniciales NO maneja vocabulario UI ("modal", "navbar", "sidebar", "toolbar", "dropdown"). Si la situación se describe usando esas palabras, el ejercicio falla antes de empezar — el alumno no entiende qué le están preguntando.

- Cada situación interactiva debe acompañarse de una **imagen tan reconocible que reemplace la palabra técnica**: logo real del producto (Spotify verde, Gmail multicolor, Mercado Libre amarillo), colores de marca, mockup fiel al producto real, no abstracciones genéricas.
- En el guion, el instructor **apunta físicamente al wireframe** al presentar cada caja ("Apuntar a la Caja 1: el cuadrito con los 2 botones abajo...") en lugar de leer texto técnico ("Los botones de un modal de confirmación").
- Los títulos cortos de cada caja en castellano simple ("Cuadro de confirmación", "Pantalla de planes") refuerzan la imagen, no la sustituyen.
- La Guía Excalidraw debe especificar logos, colores de marca y mockups detallados para cada caja — no basta con "card rectangular" o "interfaz de Gmail"; hay que describir el logo, los colores, el contenido de cada elemento visible.
