<!-- .slide: data-background="#0A192F" -->
# Clase 08: Vibe Coding con IA
## Tu MyLinks en internet hoy

---

## 🔗 TRANSICIÓN: Diseño → Implementación

### Clase anterior (07):
- Creaste wireframes low-fi y high-fi
- Definiste tu paleta de colores
- Planificaste tu diseño en Figma/Excalidraw

### Hoy:
- Convertirás ese diseño en **código real**
- Usarás **IA como copiloto**
- Publicarás en **GitHub Pages**
- Tendrás una **URL pública** para compartir

> "Del wireframe al mundo, con ayuda de IA."

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
Si le pides a una IA "hazme una página web bonita", ¿por qué probablemente no obtendrás lo que quieres?

*Toma 2-3 respuestas antes de continuar*

---

## 🎯 COMPROBACIÓN

### Pregunta:
¿Qué hace falta en este prompt?

> "Hazme un Linktree"

A. Nada, es perfecto
B. Falta decir qué colores, estilos y estructura quieres
C. Falta decir "por favor"
D. Los prompts no funcionan así

---

## 🎯 COMPROBACIÓN - Respuesta

**Respuesta:** B

Un prompt efectivo incluye:
- **Qué** quieres (tipo de página)
- **Cómo** lo quieres (colores, estilos, estructura)
- **Requisitos técnicos** (responsive, HTML/CSS)

> "Hazme un Linktree" → la IA adivina todo
> "Hazme un Linktree oscuro con botones neón redondeados" → la IA entiende

---

## 💡 Prompt Scaffolding

### El problema:
Escribir un buen prompt desde cero es difícil.
¿Qué colores? ¿Qué estilos? ¿Qué estructura?

### La solución: Prompt Scaffolding

```
┌─────────────────────────────────────────┐
│  Responde 4-5 preguntas simples         │
│  con opciones A, B, C, D                │
└─────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  Se genera el prompt perfecto           │
│  automáticamente                        │
└─────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  Lo usas en Claude → código listo       │
└─────────────────────────────────────────┘
```

---

## 💡 ¿Por qué dos IAs?

### Gemini: El arquitecto
- Hace preguntas clarificadoras
- Te ayuda a definir qué quieres
- Construye el prompt final

### Claude: El constructor
- Recibe el prompt ya listo
- Genera el código HTML/CSS
- Crea artifacts interactivos

> "Gemini te ayuda a pedir. Claude te ayuda a construir."

---

## ✅ CHECKPOINT 1: Prompt Scaffolding

### Verificar:

1. Usaste el prompt de scaffolding en Gemini
2. Respondiste las 5 preguntas (wireframe + 4 de diseño)
3. Obtuviste un prompt final personalizado

**¿Qué debe estar listo?**
- [ ] Prompt copiado y listo para usar
- [ ] Incluye tus preferencias de estilo
- [ ] Menciona requisitos técnicos (responsive, HTML/CSS)

---

## 💡 Generación con Claude

### El flujo:

1. **Pega** tu prompt en Claude.ai
2. **(Opcional)** Adjunta imagen de tu wireframe
3. **Revisa** el artifact generado
4. **Itera** si algo no está bien

### Iterar = pedir cambios específicos

```
❌ "No me gusta"
✅ "El fondo debería ser más oscuro, casi negro"

❌ "Está mal"
✅ "Los botones están muy juntos, agrega 1rem de espacio"

❌ "Arréglalo"
✅ "El texto del título debería ser más grande, usa 2.5rem"
```

---

## ✅ CHECKPOINT 2: Código Generado

### Verificar:

1. Claude generó un artifact con HTML/CSS
2. La vista previa se ve similar a tu diseño
3. Copiaste el código a tu `index.html`
4. Personalizaste nombre, bio y enlaces

**Commit #1:**
```bash
git commit -m "feat: generar MyLinks con IA y personalizar contenido"
```

---

## 💡 Verificación Responsive

### ¿Por qué verificar?

La IA intenta hacer el código responsive, pero...
- A veces los breakpoints no son los correctos
- Elementos pueden romperse en tamaños específicos
- El hover puede no funcionar como esperabas

### La regla: siempre verificar en DevTools

```
F12 → Modo responsive → 375px (móvil) → 768px (desktop)
```

---

## ✅ CHECKPOINT 3: Responsive Verificado

### Verificar en 375px (móvil):
- [ ] Contenido no se corta
- [ ] Texto legible
- [ ] Botones fáciles de tocar
- [ ] Sin scroll horizontal

### Verificar en 768px+ (desktop):
- [ ] Contenido centrado
- [ ] Botones con max-width
- [ ] Hover funcionando
- [ ] Espaciado proporcional

**Commit #2:**
```bash
git commit -m "fix: ajustar diseño responsive"
```

---

## 💡 GitHub Pages

### ¿Qué es?
Hosting **gratuito** de GitHub para sitios estáticos.

### ¿Cómo funciona?

```
Tu repositorio                    Internet
┌──────────────┐                 ┌──────────────┐
│  index.html  │  ──GitHub──►    │  tu-usuario  │
│  styles.css  │    Pages        │  .github.io  │
│  images/     │                 │  /mylinks    │
└──────────────┘                 └──────────────┘
```

### El resultado:
`https://tu-usuario.github.io/mylinks/`

Una URL **real** que cualquiera puede visitar.

---

## ✅ CHECKPOINT 4: Publicado

### Pasos:
1. Settings → Pages → Branch: main → Save
2. Esperar 1-3 minutos
3. Verificar URL pública

### ¿Qué debe funcionar?
- [ ] URL accesible desde cualquier navegador
- [ ] Contenido se ve igual que en local
- [ ] Puedes abrirlo en tu teléfono

---

## 🔗 TRANSICIÓN: Módulo 2 Completo

### Lo que lograste en el Módulo 2:

| Clase | Habilidad |
|-------|-----------|
| 05 | Terminal + Git |
| 06 | Responsive + DevTools |
| 07 | Wireframing + Figma |
| **08** | **IA + Deploy** |

### Tu MyLinks ahora:
- ✅ Está en GitHub (control de versiones)
- ✅ Es responsive (cualquier dispositivo)
- ✅ Tiene diseño profesional (wireframe → código)
- ✅ Está en internet (GitHub Pages)

> "De la nada a una URL pública en 4 clases."

---

## 💡 REFLEXIÓN: El Poder del Prompt

| Prompt vago | Prompt con scaffolding |
|-------------|------------------------|
| "Hazme un Linktree" | "Hazme un Linktree oscuro con botones neón redondeados, hover con escala, foto circular, responsive mobile-first..." |
| Resultado: genérico | Resultado: personalizado |
| Muchas iteraciones | Pocas iteraciones |

> La técnica **Prompt Scaffolding** convierte preguntas simples en prompts poderosos.

---

## ❓ Preguntas de Cierre

1. ¿Por qué usar Prompt Scaffolding en lugar de escribir el prompt directamente?

2. ¿Qué haces cuando la IA no genera exactamente lo que querías?

3. ¿Por qué verificamos el responsive en DevTools aunque la IA "ya lo hizo responsive"?

---

## 📝 Entrega del Lab

**Entregable:**
- [ ] URL de GitHub Pages funcionando
- [ ] URL del repositorio con 4+ commits

**Verificación final:**
- [ ] 5+ enlaces personalizados
- [ ] Responsive en 375px y 768px
- [ ] Paleta de colores coherente

---

## 🎉 ¡Felicidades!

### Completaste el Módulo 2

Tu MyLinks está **en vivo**, en internet, con una URL que puedes:
- Poner en tu Instagram bio
- Agregar a tu LinkedIn
- Compartir en tu CV
- Enviar a amigos y familia

> "Tu primera página web publicada. La primera de muchas."

### Próximo módulo:
**JavaScript** - Agregar interactividad a tus páginas
