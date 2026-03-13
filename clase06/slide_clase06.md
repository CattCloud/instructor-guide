<!-- .slide: data-background="#0A192F" -->
# Clase 06: Diseño Web Responsive
## DevTools + Unidades Relativas + Media Queries

---

## 🔗 TRANSICIÓN: Clase 05 → Clase 06

### Clase anterior:
- Dominaste la terminal (`pwd`, `ls`, `cd`)
- Configuraste Git con tu identidad
- Clonaste MyLinks y hiciste tu primer push
- **Tu proyecto está en GitHub**

### Hoy:
- **DevTools** - Rayos X para sitios web
- **Unidades relativas** - Código que se adapta
- **Media queries** - Diseños para cada pantalla

> "Tu código está en la nube. Ahora hagamos que se vea bien en CUALQUIER pantalla."

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
Tu MyLinks se ve perfecto en tu laptop. ¿Cómo sabes si se ve bien en un iPhone sin tener un iPhone?

*Toma 2-3 respuestas antes de continuar*

---

## 🎯 COMPROBACIÓN

### Pregunta:
¿Cuál es el atajo para abrir Chrome DevTools?

A. `Ctrl + D`
B. `F12` o `Ctrl + Shift + I`
C. `Ctrl + U`
D. `Alt + F4`

---

## 🎯 COMPROBACIÓN - Respuesta

**Respuesta:** B

`F12` o `Ctrl + Shift + I` (Cmd + Option + I en Mac) abre DevTools.

---

## 💡 Chrome DevTools: Tu Nuevo Mejor Amigo

### Abrir DevTools:
- `F12` (Windows/Linux)
- `Cmd + Option + I` (Mac)
- Click derecho → "Inspeccionar"

### Pestañas que usaremos hoy:

| Pestaña | Para qué |
|---------|----------|
| **Elements** | Ver/editar HTML y CSS en vivo |
| **Device Mode** | Simular móviles y tablets |

> Todo lo que edites en DevTools es TEMPORAL. Refrescas y vuelve al original.

---

## ✅ CHECKPOINT 1: DevTools Abierto

### Verificar:

1. Abre tu MyLinks con Live Server
2. Presiona `F12`
3. Haz clic en el ícono de dispositivos (📱💻)

**¿Qué debe funcionar?**
- [ ] DevTools está abierto
- [ ] Ves tu página en modo responsive
- [ ] Puedes cambiar entre iPhone, iPad, etc.

---

## 💡 El Problema de los Píxeles Fijos

### Diseño fijo:
```css
.container {
    width: 800px;    /* 💥 Se sale en móvil */
    font-size: 24px; /* 💥 Muy grande en pantallas pequeñas */
}
```

### El resultado:
```
LAPTOP (1200px):     [ contenido   |  espacio vacío ]
MÓVIL (375px):       [conteni→→→→→→→→→ (scroll horizontal 😫)
```

> Los valores fijos funcionan para UNA pantalla. El mundo tiene miles.

---

## 💡 Unidades Relativas

### Píxeles vs Relativas:

| Unidad | Relativa a... | Ejemplo |
|--------|--------------|---------|
| `px` | Nada (fijo) | `16px` = siempre 16px |
| `rem` | Fuente raíz (16px) | `1rem` = 16px, `2rem` = 32px |
| `%` | Elemento padre | `width: 90%` del contenedor |
| `vh/vw` | Viewport | `100vh` = altura completa de ventana |

### La regla de oro:
```css
/* Texto y espaciado → rem */
font-size: 1.5rem;
padding: 2rem;

/* Anchos → % con max-width */
width: 90%;
max-width: 600px;
```

---

## ✅ CHECKPOINT 2: Unidades Relativas

### Verificar en tu CSS:

```css
.container {
    width: 90%;
    max-width: 600px;
}

h1 {
    font-size: 2rem;
}
```

**¿Qué debe funcionar?**
- [ ] Tu CSS usa `rem` para texto
- [ ] Tu CSS usa `%` para anchos
- [ ] Al cambiar tamaño de ventana, el contenido se adapta

---

## 💡 Media Queries: CSS Condicional

### La sintaxis:
```css
/* Estilos BASE (móvil primero) */
h1 {
    font-size: 1.5rem;
}

/* SOLO si la pantalla es 768px o más */
@media (min-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
}
```

### Breakpoints comunes:

| Breakpoint | Dispositivo |
|------------|-------------|
| 576px | Teléfonos grandes |
| **768px** | Tablets ← usaremos este |
| 992px | Laptops |
| 1200px | Desktops |

---

## 💡 Mobile-First vs Desktop-First

### Desktop-First (antiguo):
```css
h1 { font-size: 3rem; }              /* Desktop */
@media (max-width: 768px) { ... }    /* Quitar cosas para móvil */
```

### Mobile-First (moderno):
```css
h1 { font-size: 1.5rem; }            /* Móvil primero */
@media (min-width: 768px) { ... }    /* Agregar para desktop */
```

### ¿Por qué mobile-first?
- Más del 60% del tráfico es móvil
- Es más fácil AGREGAR que QUITAR
- Google prioriza sitios mobile-friendly

---

## ✅ CHECKPOINT 3: Media Query Activa

### Verificar con DevTools:

1. Pon la pantalla en **600px** (móvil)
2. Inspecciona tu `h1` → anota el `font-size`
3. Cambia a **900px** (desktop)
4. Inspecciona `h1` de nuevo → ¿cambió el valor?

**¿Qué debe funcionar?**
- [ ] El `font-size` es DIFERENTE en móvil vs desktop
- [ ] Los estilos dentro de `@media` se activan en 768px+
- [ ] El hover en enlaces SOLO funciona en desktop

---

## 💡 REFLEXIÓN: ¿Cuándo usar cada unidad?

| Quiero... | Uso... | Ejemplo |
|-----------|--------|---------|
| Tamaño de texto | `rem` | `font-size: 1.25rem` |
| Espaciado | `rem` | `padding: 2rem` |
| Ancho de contenedor | `%` + `max-width` | `width: 90%; max-width: 600px` |
| Altura de sección completa | `vh` | `min-height: 100vh` |
| Bordes, sombras | `px` | `border: 1px solid` |

> **Regla**: Usa `rem` para lo que debe escalar con accesibilidad, `px` para lo que debe ser preciso.

---

## 🔗 TRANSICIÓN: Hacia Clase 07

### Hoy lograste:
- Usar DevTools para inspeccionar y probar diseños
- Convertir píxeles fijos a unidades relativas
- Crear tu primera media query mobile-first
- MyLinks que se ve bien en cualquier dispositivo

### Próxima clase:
- **Wireframing** - Planificar antes de codear
- **Design Thinking** - Proceso creativo
- Rediseñarás MyLinks desde el boceto

> "Ahora que tu código se adapta, aprenderemos a PLANIFICAR antes de escribir."

---

## ❓ Preguntas de Cierre

1. ¿Por qué usar `rem` en lugar de `px` para tamaños de texto mejora la accesibilidad?

2. Si quieres que un estilo SOLO aplique en pantallas de 768px o más, ¿cómo lo escribes en CSS?

3. ¿Por qué "mobile-first" es mejor que "desktop-first" para desarrolladores modernos?

---

## 📝 Entrega del Lab

**Entregable:**
- [ ] Screenshots de MyLinks en vista móvil (375px) y desktop (1024px)
- [ ] URL de tu repositorio con commit "responsive"

**Próxima clase:**
- Traer ideas de cómo quieres que se vea tu MyLinks final
- Papel y lápiz (o tablet para dibujar)
