# Apuntes: LLMs, Tokens, Prompts y Vibe Coding
> Referencia técnica personal del instructor. Consúltala antes de clase como repaso de 10 minutos.

---

## 1. LLM (Large Language Model)

Un LLM es un modelo estadístico entrenado con enormes volúmenes de texto. Su arquitectura base se llama **Transformer** (Google, 2017). No "razona": predice qué texto es estadísticamente más probable después del texto recibido.

**Metáfora funcional:** Igual que el teclado predictivo del celular sugiere la siguiente palabra basándose en tus hábitos, el LLM sugiere el siguiente "token" más probable basándose en haber leído todo internet. La diferencia es de escala: tu celular aprendió de tus mensajes, el LLM aprendió de trillones de palabras.

**Timeline clave:**
- `2017` → Google publica "Attention is All You Need" (arquitectura Transformer).
- `2020` → OpenAI lanza GPT-3, primera API pública con precios por token.
- `Nov 2022` → OpenAI lanza ChatGPT al público, 1M usuarios en 6 días.
- `2023-2025` → Mercado de competidores: Claude (Anthropic), Gemini (Google), Llama (Meta).

**Por qué alucina:** Al predecir el texto "más probable", a veces genera contenido estadísticamente plausible pero factualmente incorrecto. No tiene acceso a verdad, solo a probabilidad.

---

## 2. Token

La unidad mínima de procesamiento de un LLM. No es una letra, no es una palabra completa: es una **subunidad de texto** de tamaño variable.

**Regla práctica:**
- Inglés: `1 token ≈ 4 caracteres` / `100 tokens ≈ 75 palabras`
- Español: `1 token ≈ 3 caracteres` (el español es ~25% más "caro" que el inglés)

**Ventana de contexto:** Cada modelo tiene un límite máximo de tokens que puede "ver" a la vez en una conversación (como la memoria RAM de la IA). Claude 3.5 Sonnet: 200k tokens. GPT-4o: 128k tokens.

**Herramienta para demostrar en clase:** `platform.openai.com/tokenizer` — muestra visualmente cómo un texto se divide en fragmentos codificados por colores.

**Impacto económico:** Las APIs cobran por tokens de entrada (input) + tokens de salida (output). Optimizar prompts = ahorrar dinero real en producción.

---

## 3. Prompt

Instrucción textual que le das al LLM para guiar su respuesta. Es el punto de control más directo que tiene el usuario sobre el modelo.

### Técnicas de Prompting (jerarquía de complejidad)

| Técnica | Descripción | Ejemplo rápido |
|---------|------------|----------------|
| **Zero-shot** | Tarea directa sin ejemplos | `"Traduce esto al inglés: ..."` |
| **One-shot** | 1 ejemplo de formato antes de la tarea | `"Como este ejemplo: X → Y. Ahora haz: Z"` |
| **Few-shot** | 2-5 ejemplos para fijar formato/estilo | Mostrar 3 traducciones antes de pedir la 4ta |
| **Role Prompting** | Asignar identidad antes de la orden | `"Actúa como CTO de startup. Revisa este código..."` |
| **Prompt Scaffolding** | Preguntas guiadas que ensamblan el prompt completo | El flujo Gemini del laboratorio |

**El orden correcto en una clase:** Zero-shot primero (muestra el "caos"), luego Few-shot/Role (muestra el orden). La diferencia visual es el argumento.

---

## 4. Vibe Coding

Término acuñado por **Andrej Karpathy** (ex-Tesla AI, cofundador de OpenAI) el **15 de febrero de 2025**. Describe desarrollar software delegando la escritura del código a la IA y guiándola en lenguaje natural.

**El peligro real no es la IA — es el usuario que acepta código sin leerlo.**

```
Vibe Coding Irresponsable → Output basura + deuda técnica + bugs invisibles.
Vibe Coding Profesional   → Iteración con criterio técnico + validación constante.
```

**Diferencia clave:** Un desarrollador que hace Vibe Coding profesional entiende lo suficiente de HTML/CSS para reconocer cuando el código generado está mal, y formula feedback específico ("el `padding` en el `.card` necesita ser `1.5rem`, no `8px`").

---

## 5. Agente de Codificación (Coding Agent)

Un LLM con capacidad de **acción autónoma sobre el sistema de archivos y la terminal**. No solo conversa: puede abrir tu proyecto, leer todos los archivos relevantes, hacer cambios coordinados en múltiples archivos, ejecutar comandos y reportar resultados.

**Distinción clave:**

| Tipo | Ejemplo | Qué puede hacer |
|------|---------|----------------|
| **Chatbot** | Claude Web, ChatGPT | Generar texto/código para que tú copies y pegues |
| **Coding Agent** | Cursor, Windsurf, Devin | Leer/editar tus archivos, correr comandos, iterar sin que copies nada |

**Metáfora:** El Chatbot es el arquitecto que te asesora desde su oficina. El Agente es el contratista que entra a tu casa con sus herramientas y trabaja.

**Herramientas actuales (2025):** Cursor (el más popular), Windsurf, Devin (Cognition), GitHub Copilot (modo agente).

---

## 6. GitHub Pages

Servicio de hosting estático gratuito de GitHub. Publica los archivos de un repositorio en una URL pública bajo `usuario.github.io/repo`.

**Restricciones técnicas clave:**
- Solo sirve sitios **estáticos** (HTML + CSS + JS). No Node.js, no PHP, no Python en servidor.
- El archivo de entrada DEBE llamarse exactamente **`index.html`** (case-sensitive).
- Necesita ser configurado en `Settings > Pages` del repositorio.
- Deploy tarda hasta **2-3 minutos** después del push. No es instantáneo.

**Flujo completo:**
```
Código local → git add . → git commit → git push → GitHub Settings > Pages → URL pública
```

**Debugging frecuente:**
- **404:** Archivo no se llama `index.html` o Pages no está activado.
- **Estilos no cargan:** Ruta del CSS es relativa y está mal escrita.
- **Viewport roto en celular:** Falta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en el `<head>`.
