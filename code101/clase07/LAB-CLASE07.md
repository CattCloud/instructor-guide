# Lab 07: Wireframing y Pensamiento Creativo

> 🚀 **Proyecto del Módulo:** MyLinks - Tu Hub Personal en la Web
>
> 📌 **Este lab:** Diseñar wireframes low-fi y high-fi para rediseñar tu MyLinks.

## 🎯 Objetivos del Lab

1. Crear un wireframe low-fi usando papel o Excalidraw
2. Aplicar el proceso de ideación para generar 3 alternativas de diseño
3. Diseñar un wireframe high-fi en Figma con colores, tipografía y espaciado

---

## 🔑 Conceptos Clave

- **Wireframe** - Esquema visual simplificado que muestra la estructura sin detalles visuales finales
- **Low-fidelity** - Boceto rápido enfocado en layout y estructura, sin colores ni tipografía
- **High-fidelity** - Diseño detallado con colores, tipografía y espaciado definidos
- **Ideación** - Fase creativa donde generas múltiples ideas sin juzgar

---

## ⚙️ Setup Inicial

Este lab continúa el trabajo de la Clase 06. Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | MyLinks responsive funcionando | Abre en DevTools y cambia tamaños sin que se rompa |
| ☐ | Media queries aplicadas | Tienes al menos una `@media` en tu CSS |
| ☐ | Commits regulares | `git log --oneline` muestra varios commits |
| ☐ | Cuenta en Figma | Puedes acceder a [figma.com](https://www.figma.com/){:target="_blank"} |

> ⚠️ Si no completaste el lab anterior, hazlo antes de continuar.

**Herramientas para este lab:**

- [Excalidraw](https://excalidraw.com/){:target="_blank"} - Para wireframes low-fi (no requiere cuenta)
- [Figma](https://www.figma.com/){:target="_blank"} - Para wireframes high-fi
- Papel y lápiz (opcional pero recomendado)

---

## Parte 1: Análisis e Inspiración (25 min)

### 1.1 Abre tu MyLinks Actual

Antes de rediseñar, necesitas entender qué tienes:

1. Abre tu MyLinks en el navegador con Live Server
2. Abre DevTools (`F12`) y ponlo en vista móvil (375px)
3. Toma un screenshot de cómo se ve actualmente

> 💡 **Tip:** Guarda este screenshot—lo compararás con tu diseño final.

### 1.2 Explora Ejemplos Reales

Visita estos sitios de inspiración y observa patrones:

- [Linktree Gallery](https://linktr.ee/s/creator-gallery/){:target="_blank"}
- [Bio.link Examples](https://bio.link/examples){:target="_blank"}
- [Carrd Templates](https://carrd.co/build){:target="_blank"}

**Mientras exploras, anota (en papel o un archivo):**

| Pregunta | Tu observación |
|----------|---------------|
| ¿Qué elementos visuales se repiten? | <!-- Ej: foto circular, botones redondeados --> |
| ¿Cómo organizan la información? | <!-- Ej: foto arriba, enlaces abajo --> |
| ¿Qué colores/estilos te gustan? | <!-- Ej: fondos degradados, tipografía bold --> |
| ¿Qué harías diferente? | <!-- Tu opinión personal --> |

### 1.3 Define tu Objetivo de Rediseño

Completa esta frase (escríbela en papel):

> "Mi MyLinks actual es [describe estado actual], pero quiero que sea [describe objetivo]. Mi usuario ideal es [describe quién visitará tu página]."

**Ejemplo:**
> "Mi MyLinks actual es funcional pero genérico, pero quiero que sea memorable y profesional. Mi usuario ideal es un reclutador tech o alguien que me encontró en LinkedIn."

✅ **Checkpoint:** Tienes un screenshot de tu MyLinks actual, 3+ observaciones de sitios de inspiración, y tu objetivo de rediseño escrito.

---

## Parte 2: Wireframe Low-Fi (30 min)

### 2.1 Elige tu Herramienta

Puedes usar:

| Opción | Pros | Contras |
|--------|------|---------|
| **Papel y lápiz** | Más rápido, sin fricción técnica | No es digital, difícil de compartir |
| **Excalidraw** | Rápido, colaborativo, exportable | Requiere conexión a internet |

> 💡 **Recomendación:** Empieza en papel (2-3 min por boceto) y luego pasa el mejor a Excalidraw.

### 2.2 Dibuja la Estructura Básica

Un wireframe low-fi NO tiene:
- Colores (solo blanco, negro, gris)
- Tipografía específica
- Imágenes reales

Un wireframe low-fi SÍ tiene:
- Rectángulos representando elementos
- Texto placeholder ("Lorem ipsum" o "Título aquí")
- Proporciones aproximadas

**Dibuja tu primera versión incluyendo:**

```
┌─────────────────────┐
│                     │
│    [  Foto  ]       │  ← Círculo o cuadrado para imagen
│                     │
│    Nombre           │  ← Texto grande
│    Bio corta        │  ← Texto pequeño
│                     │
│  ┌───────────────┐  │
│  │   Enlace 1    │  │  ← Rectángulo para botón/link
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │   Enlace 2    │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │   Enlace 3    │  │
│  └───────────────┘  │
│                     │
│    [iconos redes]   │  ← Íconos de redes sociales
│                     │
└─────────────────────┘
```

### 2.3 Sesión de Ideación: 3 Variantes

**REGLA DE IDEACIÓN:** Cantidad sobre calidad. No juzgues tus ideas aún.

Dibuja **3 versiones diferentes** de tu MyLinks en 5-7 minutos cada una:

| Variante | Enfoque |
|----------|---------|
| **Variante A** | Minimalista - Lo mínimo necesario |
| **Variante B** | Creativo - Experimenta con layout inusual |
| **Variante C** | Profesional - Como si fuera para una empresa |

**Ideas para variar:**

- Foto de perfil: ¿arriba, a un lado, más grande, más pequeña?
- Enlaces: ¿botones, lista, cards, con iconos?
- Fondo: ¿sólido, degradado, con patrón?
- Organización: ¿todo centrado, alineado a la izquierda, en grid?

### 2.4 Evalúa y Elige

Después de tus 3 variantes, pregúntate:

| Criterio | Variante A | Variante B | Variante C |
|----------|------------|------------|------------|
| ¿Es fácil encontrar los enlaces? | | | |
| ¿Refleja mi personalidad/marca? | | | |
| ¿Puedo implementarlo con HTML/CSS? | | | |

Marca con ⭐ la variante ganadora o combina elementos de varias.

### 2.5 Digitaliza en Excalidraw

1. Abre [excalidraw.com](https://excalidraw.com/){:target="_blank"}
2. Dibuja tu wireframe ganador usando:
   - **Rectángulos** (R) para contenedores y botones
   - **Elipses** (O) para fotos de perfil
   - **Texto** (T) para labels
   - **Líneas** (L) para separadores
3. Usa solo **negro, blanco y gris**
4. Exporta como PNG: Menú → Export image

> 💡 **Tip:** Dibuja dos frames lado a lado: móvil (375px) y desktop (768px+).

✅ **Checkpoint:** Tienes 3 bocetos de ideas diferentes y un wireframe low-fi digitalizado en Excalidraw mostrando versión móvil y desktop.

---

## Parte 3: Wireframe High-Fi en Figma (35 min)

### 3.1 Crea tu Archivo en Figma

1. Ve a [figma.com](https://www.figma.com/){:target="_blank"} e inicia sesión
2. Clic en **"New design file"** (archivo nuevo)
3. Renombra el archivo: "MyLinks - Wireframe High-Fi"

### 3.2 Crea un Frame para Móvil

1. Presiona **F** para la herramienta Frame
2. En el panel derecho, busca "Phone" → selecciona **iPhone 14** (390 x 844)
3. Renombra el frame: "Mobile"

### 3.3 Define tu Paleta de Colores

Antes de diseñar, elige tu paleta:

1. Visita [coolors.co](https://coolors.co/){:target="_blank"} y genera una paleta (presiona espacio para nuevas combinaciones)
2. Cuando encuentres una que te guste, copia los códigos hex
3. Necesitas mínimo:

| Rol | Uso | Tu color |
|-----|-----|----------|
| **Primario** | Fondo o botones | #______ |
| **Secundario** | Acentos | #______ |
| **Texto** | Títulos y cuerpo | #______ |
| **Fondo** | Background principal | #______ |

### 3.4 Diseña los Elementos

Usa las herramientas de Figma para recrear tu wireframe con detalles:

**Fondo:**
1. Selecciona el frame "Mobile"
2. En el panel derecho, cambia el color de fondo a tu color elegido

**Foto de perfil:**
1. Presiona **O** para elipse
2. Dibuja un círculo (mantén Shift para proporción perfecta)
3. Tamaño sugerido: 100x100 px
4. Agrega un borde o relleno de color

**Nombre y bio:**
1. Presiona **T** para texto
2. Escribe tu nombre
3. En el panel derecho:
   - Cambia la fuente (busca en Google Fonts primero qué fuentes te gustan)
   - Ajusta el tamaño (24-32px para nombre, 14-16px para bio)
   - Cambia el color

**Botones de enlaces:**
1. Presiona **R** para rectángulo
2. Dibuja un botón (ancho ~320px, alto ~50px)
3. Redondea las esquinas: en "Corner radius" pon 8-25
4. Agrega texto encima del botón
5. Agrupa botón + texto: selecciona ambos y presiona `Ctrl+G`
6. Duplica para más enlaces: `Ctrl+D`

### 3.5 Alinea y Distribuye

Selecciona todos los elementos y usa las herramientas de alineación:

1. Selecciona múltiples elementos (`Shift+clic`)
2. En el panel superior, usa los íconos de alineación:
   - Alinear centros horizontalmente
   - Distribuir verticalmente con espaciado igual

> 💡 **Tip:** El espaciado consistente hace que el diseño se vea profesional. Usa 16px o 24px entre elementos.

### 3.6 Agrega Detalles Finales

Tu wireframe high-fi debe mostrar:

- [ ] Colores finales aplicados
- [ ] Tipografía definida (nombre de la fuente visible)
- [ ] Espaciado consistente entre elementos
- [ ] Bordes redondeados si los usarás
- [ ] Estados hover (opcional: duplica un botón y muestra cómo se vería al pasar el mouse)

### 3.7 Crea Versión Desktop (Opcional pero Recomendado)

1. Duplica el frame Mobile: selecciónalo y `Ctrl+D`
2. Redimensiona a 1440 x 900 (o selecciona "Desktop" en frames)
3. Ajusta el layout para pantallas más anchas:
   - ¿El contenido sigue centrado?
   - ¿Los botones tienen un max-width?
   - ¿La foto es más grande?

### 3.8 Exporta tu Diseño

1. Selecciona el frame "Mobile"
2. En el panel derecho, sección "Export", clic en **+**
3. Formato: PNG, escala 1x
4. Clic en **"Export Mobile"**
5. Repite para Desktop si lo hiciste

✅ **Checkpoint:** Tienes un wireframe high-fi en Figma con colores, tipografía y espaciado definidos. Puedes ver claramente cómo se verá tu MyLinks rediseñado.

---

## Logros Adicionales (Opcional)

### 🟢 Componentes Reutilizables

En Figma, convierte tu botón en un **componente**:
1. Selecciona el grupo del botón
2. `Ctrl+Alt+K` o clic derecho → "Create component"
3. Ahora puedes duplicarlo y los cambios al original se reflejan en las copias

### 🟡 Prototipo Interactivo

Conecta tus frames para simular navegación:
1. Cambia a la pestaña "Prototype" (panel derecho)
2. Arrastra desde un botón hacia otro frame
3. Presiona el botón ▶️ para probar tu prototipo

### 🔴 Investiga Auto Layout

Auto Layout es una función avanzada de Figma que hace que los elementos se reorganicen automáticamente (similar a Flexbox en CSS). Busca "Figma Auto Layout tutorial" y aplícalo a tu lista de enlaces.

---

## 📝 Entrega

### Checklist

- [ ] Screenshot de tu MyLinks actual (antes del rediseño)
- [ ] Wireframe low-fi exportado de Excalidraw (PNG)
- [ ] 3 ideas/variantes documentadas (foto de papel o archivo)
- [ ] Wireframe high-fi exportado de Figma (PNG) - versión móvil
- [ ] Paleta de colores definida (códigos hex)

### Entregable

📸 **Comparte un archivo/carpeta** con:

1. `antes.png` - Screenshot de tu MyLinks actual
2. `lowfi.png` - Wireframe low-fi de Excalidraw
3. `highfi-mobile.png` - Wireframe high-fi de Figma
4. `colores.txt` - Tus códigos de color elegidos (ej: Primario: #3B82F6)

**Alternativamente:** Comparte el link a tu archivo de Figma (asegúrate de que sea visible para "Anyone with the link").

> 💡 **Próxima clase:** Usarás este wireframe high-fi como guía para implementar tu diseño final con ayuda de IA.
