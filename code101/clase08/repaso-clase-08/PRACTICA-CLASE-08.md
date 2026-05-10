# PRÁCTICA-CLASE-08: Examen de Dominio del Instructor
> Completa esto antes de la clase. Si no puedes responder algo con seguridad, regresa a los apuntes.  
> Criterio de "listo": responder correctamente el 85% sin consultar notas.

---

## PARTE 1: Preguntas de Respuesta Libre (Conceptuales)

**1.** ¿Por qué un LLM a veces genera información incorrecta ("alucina")?  
_Responde con tus propias palabras:_

> Tu respuesta: Porque no razonan , solo predicen basandose en el token con mayor probabilidad respecto a toda la informacion que tienen y si no tienen esa informacion inventan pero basandose en un patron conocido que lo dicen con tanta seguridad haciendo creer al usuario que es informacion real.

---

**2.** Un alumno te pregunta: *"¿Por qué en español mi prompt gasta más tokens que en inglés?"*.  
Explica la razón técnica en 2 oraciones máximo y con el dato numérico correcto.

> Tu respuesta: Los modelos cobran por token , formar palabras en ingles requiere menos tokens que las palabras en español, es matematica simple, a mas tokens  mas costo.
Recibe respuesta en español pero escribe prompts en ingles

---

**3.** ¿Cuál es la diferencia fundamental entre un prompt **Zero-shot** y un prompt **Few-shot**? ¿Cuándo usarías cada uno?

> Tu respuesta: La diferencia es la cantidad de ejemplos que se le da al modelo como guia para la respuesta , si quieres una respuesta mas especifica o estructurada usa Few-shot, usa Zero-Shot para preguntas simples y rapidas

---

**4.** Andrej Karpathy publicó el concepto de "Vibe Coding" en 2025. Sin buscar en Google: ¿de qué empresa fue cofundador? ¿En qué empresa fue director de IA antes?

> Tu respuesta: Tesla

---

**5.** ¿Qué diferencia concretamente a un **Chatbot** (Claude web) de un **Agente de Codificación** (Cursor)?  
Da un ejemplo de algo que el Agente puede hacer y que el Chatbot NO puede.

> Tu respuesta: La diferencia es el acceso a tus archivos de sistema y a la terminal, un Chatbot vive en internet mientras que el agente esta en tu maquina local y puede interactuar con tus archivos, claro siempre y cuando tenga tu permiso.

---

**6.** Explica el flujo completo de publicar en GitHub Pages, desde el archivo local hasta la URL pública. ¿Cuánto tiempo puede tardar?

> Tu respuesta:
El proyecto debe estar en Git primero
git init  -> git add . -> git commit -m "mensaje"
Luego los subimos a un repositorio en GitHub, sea clonandolo o conectandolo manualmente con git remote 
Lo subes con git push
Una vez tengas el proyecto listo , vas a settings, te sale
una nueva interfaz, te diriges a Page y seleccionas la rama main
le das a guardar y esperas a que te genere el link de deploy y listo.
---

## PARTE 2: Opción Múltiple

**7.** Un alumno abre su URL de GitHub Pages y ve un error 404. El repositorio existe y tiene código. ¿Cuál es la causa MÁS PROBABLE?

   - A) El repositorio es privado y no tiene plan Pro.
   - B) El archivo principal no se llama exactamente `index.html`.
   - C) Claude generó el código con errores de sintaxis.
   - D) GitHub Pages no soporta CSS externo.

> **Respuesta correcta: B
> **¿Por qué las otras están mal?:**
La A esta mal porque no importa si es privado o publico, tampoco requiere costo el deploy
La C esta mal porque aun con sintaxis debe generarse la pagina aunque mostrando los errores en consola
La D esta mal porque admite HTML,CSS y JS aunque esten separados
---

**8.** Un alumno quiere que Claude genere código HTML y lo renderice en tiempo real mientras lo escribe. ¿Qué le dices que pida?

   - A) Usar el modo "Code Interpreter".
   - B) Pedir que genere el código en un **Artifact**.
   - C) Copiar el código y pegarlo en Figma.
   - D) Usar Gemini en lugar de Claude porque tiene preview.

> **Respuesta correcta: B

---

**9.** ¿Cuál de estas técnicas de prompting le permitiría al alumno decirle a Claude *"respóndeme como si fueras un senior frontend developer"*?

   - A) Zero-shot prompting.
   - B) Few-shot prompting.
   - C) Role Prompting.
   - D) Prompt Scaffolding.

> **Respuesta correcta:** C

---

**10.** La ventana de contexto de un LLM se refiere a:

   - A) El tamaño de pixels de la pantalla donde se muestra la respuesta.
   - B) La cantidad máxima de tokens que el modelo puede procesar en una sola conversación.
   - C) El límite de palabras de un único mensaje ("prompt").
   - D) El número máximo de imágenes que puede analizar.

> **Respuesta correcta:** B

---

## PARTE 3: Ejercicios Prácticos (hazlo tú mismo antes de clase)

### Ejercicio A: Demo de Tokens
1. Ve a `platform.openai.com/tokenizer`.
2. Pega esta frase en inglés: `"The quick brown fox jumps over the lazy dog"`.
3. Anota cuántos tokens genera: 9
4. Pega la misma idea en español: `"El rápido zorro marrón salta sobre el perro perezoso"`.
5. Anota cuántos tokens genera: 14
6. ¿Cuál versión gasta más tokens? ¿En qué porcentaje aproximado?
La de español 
> Respuesta: El español gasta 30-40% más tokens.

---

### Ejercicio B: El Ciclo Completo del Lab
Ejecuta el ciclo completo UNA VEZ antes de clase para que en vivo sea fluido:

- [ ] Abre Claude y envía el prompt vago: `"Crea el código de un clon de linktree de color negro"`. Observa el resultado.
- [ ] Abre Gemini y usa el prompt scaffolded del laboratorio. Copia la respuesta.
- [ ] Regresa a Claude (chat nuevo). Pega el prompt detallado + añade: `"Genera el código en un Artifact renderizable"`.
- [ ] Copia el código del Artifact. Crea un archivo `index.html` local. Pruébalo con Live Server.
- [ ] Sube a un repositorio de prueba en GitHub. Activa Pages. Espera y confirma que la URL funciona en tu celular.

> Estado: ☐ Completado | ☐ Pendiente

---

### Ejercicio C: Iteración Controlada
Con el Artifact de Claude abierto (del Ejercicio B):
1. Escribe este prompt de ajuste: `"Cambia el color de fondo de todos los botones a #2563EB y aumenta el border-radius a 12px"`.
2. Verifica que Claude actualizó específicamente esos dos atributos y no rompió el resto del layout.
3. Ahora escribe un prompt **vago** de ajuste: `"Hazlo más bonito"`. Observa si el resultado es predecible o inconsistente.

> Lección que refuerzas: La iteración efectiva requiere instrucciones _____________, no _____________.

---

## RÚBRICA DE AUTOEVALUACIÓN

Al terminar este examen, puntúate honestamente:

| Criterio | ✅ Listo | ⚠️ Debo repasar |
|----------|---------|----------------|
| Puedo explicar qué es un LLM sin usar la palabra "inteligencia" | | |
| Sé el dato exacto del ratio de tokens español vs inglés | | |
| Conozco las 4 técnicas de prompting y puedo dar un ejemplo de cada una | | |
| Sé el nombre de quien acuñó "Vibe Coding" y la fecha aproximada | | |
| Puedo nombrar 2 Coding Agents reales y distinguirlos de un Chatbot | | |
| Completé el ciclo completo del laboratorio en mi propio equipo antes de clase | | |
| Sé resolver los 3 errores más comunes de GitHub Pages (404, viewport, CSS) | | |

**Regla:** Si hay 2 o más "⚠️ Debo repasar" → dedica 20 minutos más a los apuntes antes de la clase.
