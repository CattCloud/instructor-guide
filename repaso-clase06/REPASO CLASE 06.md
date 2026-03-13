# REPASO - CLASE 06: Diseño Web Responsive + DevTools

> **Guía Rápida (Cheat Sheet):** Usa este documento para recordar los conceptos clave vistos en clase.

---

### 1. ¿Qué es Responsive Web Design?
Es la filosofía de desarrollo donde construyes **un solo sitio web** que tiene la capacidad de estirarse, comprimirse y reorganizar sus bloques automáticamente para verse perfecto en el 100% de las pantallas existentes (Celulares, Tablets, Laptops, Monitores gigantes). 
*¡Nunca más páginas que te obligan a hacer zoom para leer el texto en el celular!*

### 2. Chrome DevTools (Tus rayos X de desarrollador)
Se abren con `F12` o `Ctrl+Shift+I` (Mac: `Cmd+Option+I`).
- **Inspeccionar (Elements):** Te permite tocar cualquier elemento de una página y ver qué HTML lo construye y qué regla CSS lo pinta.
- **Simulador de Dispositivos:** El icono de "teléfono/tablet" te deja probar tu web visualizando los anchos exactos de un `iPhone SE`, un `iPad` o un `Galaxy S20`.
- ⚠️ **Importante:** Cualquier cambio (texto, color, tamaño) que hagas dentro de DevTools es un *espejismo temporal*. Al presionar `F5` tu página volverá a ser exactamente la que tienes guardada en tu archivo de VS Code.

### 3. La trampa de las Unidades Absolutas (`px`)
Los **píxeles (`px`)** son fijos. Si a una caja le dices `width: 800px;` y alguien abre tu página en un celular de 400px de ancho, tu caja romperá la pantalla generando un horrible *scroll horizontal*. Las pantallas tienen anchos distintos; por tanto, nuestro código debe usar medidas elásticas.

### 4. La magia de las Unidades Relativas (`%`, `rem`, `vh`)
Son unidades elásticas que miden "proporciones" y no tamaños fijos.
*   **`%` (Porcentaje):** Útil para anchos. `width: 100%` le dice a la caja "Ocupa todo el espacio horizontal que te dé tu padre, sin importar cuánto crezca o se encoja la pantalla".
*   **`vh` (Viewport Height):** Útil para secciones completas (como el header o fondo principal). `height: 100vh;` significa "Imprime esta caja para que ocupe exactamente el 100% del alto visible del monitor de quien te esté visitando".
*   **`rem` (Root EM):** La unidad reina de los textos y márgenes. Se basa en el tamaño principal del navegador (`html`). 
    *   Por defecto en todos los navegadores: `1rem = 16px`.
    *   Entonces: `2rem = 32px` / `0.5rem = 8px`.
    *   *Súper ventaja:* Si una persona con problemas de visión configura su navegador para que su letra por defecto sea gigantesca, *toda nuestra página armada en `rem` escalará proporcionalmente sin romperse*.

### 5. Media Queries (El termostato inteligente del CSS)
Son llaves de paso condicionales. Le ordenan al navegador: *"Oye, si la pantalla se vuelve más ancha que 768px, por favor saca estas reglas CSS nuevas de la caja y aplícalas."*

```css
/* Esta clase pone todo azul. Pero si pasamos del "punto de quiebre" (768px)... */
.caja { 
  background-color: blue; 
}

/* ...¡Se enciende este bloque CSS y aplasta la regla anterior pintándola roja! */
@media (min-width: 768px) {
    .caja {
        background-color: red;
    }
}
```

### 6. Mobile-First (Tu nueva regla de oro general)
**Primero lo pequeño, luego lo grande.** 
1. Construyes absolutamente todo el HTML y el CSS pensando en cómo se vería en tu celular. No programas cajas al lado de otras, sino todo como un bloque vertical.
2. Una vez hermoso en celular, añades Media Queries condicionadas con `min-width` para decirle al diseño: *"Ok, ya en la tablet tenemos más espacio, ahora sí pon esta foto al lado del texto"*.

> **La analogía maestra:** Es muy fácil empacar un maletín pequeño de viaje metiendo solo lo esencial (`Mobile`) y luego rellenar el exceso de espacio si te regalan una maleta gigantesca (`Desktop`). Es una tortura intentar meter a la fuerza la maleta gigante llena de lujos dentro del maletín pequeño original (`Desktop-first`).
