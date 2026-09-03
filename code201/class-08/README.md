> 📦 **Módulo 2:** Clase 8 de 8

# Clase 08: Tailwind CSS — la interfaz del Gestor

## Resumen

Cierras el **Módulo 2** dándole por fin una **interfaz visual** al **Gestor de Presupuesto Personal**, cuya lógica terminaste en C07. Aprendes **Tailwind CSS** como lo que es: el **mismo CSS de M1** (Flexbox, Grid, espaciado, color, variables) escrito como **clases utilitarias** dentro del HTML. Lo recorres **por grupos de clases** y construyes la UI **por capas** sobre un esqueleto sin estilos: primero el **layout**, luego el **espaciado/tamaño**, después la **estética** (tipografía, color, bordes, sombra) y al final los **modificadores** (`hover:`, `focus:`, responsive `md:`). En la última parte **conectas el formulario con JavaScript** —reusando tus clases `Movimiento` y `Presupuesto`— para que el Gestor **agregue movimientos y actualice el saldo en vivo**. El módulo cierra con una **app real, no una maqueta**.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Introducción y Contexto** | 15 min | De CSS a mano (M1) a utility-first: ¿y si el CSS viviera en el HTML como clases pequeñas? |
| **2. Demo Técnica** | 20 min | Instalación por CDN + los 2 tipos de clase (propiedad vs prefijo) + mejora progresiva por capas. |
| **3. Laboratorio (6 partes)** | 145 min | P0 esqueleto + mapa · P1 Layout · P2 Caja · P3 Estética · P4 Modificadores · P5 Conectar el Gestor (JS). |
| **4. Cierre y Síntesis** | 20 min | El Gestor funcionando + cierre del Módulo 2 (imperativo → funcional → OOP → interfaz). |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Instalar Tailwind por CDN** y distinguir **clases-propiedad** (`p-4`, `flex`) de **prefijos-modificador** (`hover:`, `md:`).
2. **Construir una interfaz responsiva por capas** aplicando los grupos: layout (Flexbox/Grid), caja (espaciado/tamaño), estética (tipografía/color/bordes/sombra) y modificadores (estados + responsive mobile-first).
3. **Mapear** cada grupo de utilidades al CSS que ya conoces de M1.
4. **Conectar el formulario con JavaScript** para que el Gestor agregue movimientos y actualice el saldo en vivo, reusando las clases de C07.

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. ¿Qué es Tailwind CSS y el enfoque utility-first?**
- Investiga: ¿Qué significa "utility-first" y en qué se diferencia de escribir CSS en un archivo `.css`?
- Encuentra: 3 clases de Tailwind y a qué propiedad CSS equivale cada una (ej. `text-center` → `text-align: center`).
- Prepárate para explicar: ¿Por qué se dice que Tailwind es "el mismo CSS, otra notación"?

**2. Instalación con Play CDN:**
- Investiga: ¿Cómo se agrega Tailwind a un HTML con un solo `<script>` (Play CDN)?
- Encuentra: Por qué para un sitio estático NO necesitas `npm` ni compilar.
- Prepárate para explicar: ¿Qué hace el script de Play CDN en el navegador?

**3. Clases responsivas y de estado:**
- Investiga: ¿Qué hace un prefijo como `md:` o `hover:` delante de una clase?
- Encuentra: La relación entre `md:` y una media query, y entre `hover:` y `:hover`.
- Prepárate para explicar: ¿Por qué Tailwind es **mobile-first** (clases base = móvil, prefijos = pantallas grandes)?

**4. Conectar un formulario con JavaScript:**
- Investiga: ¿Cómo se lee el valor de un `<input>` y cómo se reacciona al `submit` de un formulario desde JS?
- Encuentra: Qué hace `event.preventDefault()` en un submit.
- Prepárate para explicar: ¿Cómo mostrarías una lista de objetos en el HTML desde JavaScript?

#### 📚 Recursos sugeridos

1. **Tailwind CSS — Documentación oficial**
   [https://tailwindcss.com/docs](https://tailwindcss.com/docs){:target="_blank"}

2. **Tailwind — Utility-First Fundamentals**
   [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first){:target="_blank"}

3. **Tailwind — Responsive Design**
   [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design){:target="_blank"}

---

## Resultados esperados

### Podrán hacer
1. **Instalar Tailwind** por CDN y estilizar HTML con clases utilitarias.
2. **Construir un layout responsivo** con utilidades de Flexbox y Grid + prefijos `md:`.
3. **Conectar un formulario** con JavaScript para crear y mostrar datos en vivo.

### Podrán explicar
1. **La diferencia entre clase-propiedad y prefijo-modificador** y cuándo usar cada una.
2. **Por qué Tailwind es mobile-first** y cómo el look base equivale al móvil.
3. **Cómo cada grupo de utilidades** equivale al CSS que ya escribían a mano en M1.

### Podrán implementar
1. **La interfaz completa del Gestor** (header, resumen, formulario, lista) estilizada y responsiva con Tailwind.
2. **El formulario funcional** que agrega movimientos (instancias de `Movimiento`) a un `Presupuesto` y actualiza la lista + saldo.
3. **El proyecto del Módulo 2 cerrado** como una aplicación real desplegada en GitHub Pages.

> 📝 **Nota:** Tailwind es la única herramienta nueva de la clase. El JavaScript de la última parte (P5) **reusa** las clases que ya creaste en C07 — es solo el "cable" entre el formulario y tu modelo.

---

## Glosario de Nuevos Términos

- **Utility-first:** Enfoque de componer el diseño con muchas clases pequeñas en el HTML, en vez de escribir reglas en un `.css`.
- **Clase-propiedad:** Clase que equivale a una sola propiedad CSS. Ej. `text-center` = `text-align: center`.
- **Prefijo-modificador:** Prefijo que hace que una clase se active bajo una condición. Ej. `hover:bg-blue-700`, `md:flex`.
- **Play CDN:** Forma de usar Tailwind con un solo `<script>`, sin instalar ni compilar. Ideal para sitios estáticos.
- **Mobile-first:** Las clases base aplican a móvil; los prefijos `md:`/`lg:` agregan estilos para pantallas grandes.
- **`grid-cols-N` / `flex` / `gap`:** Utilidades de layout (Grid y Flexbox de M1) en notación Tailwind.
- **Escala de espaciado:** Valores fijos (`p-2`=8px, `p-4`=16px, `p-6`=24px…) en vez de inventar píxeles.
