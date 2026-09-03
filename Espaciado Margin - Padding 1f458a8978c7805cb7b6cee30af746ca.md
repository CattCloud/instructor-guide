# Espaciado: Margin - Padding

<aside>

### Sintaxis general margin o padding

```css
**{propiedad}{lado}-{tamaño}**
```

- `{propiedad}` → `m` (margin) / `p` (padding).
- `{lado}` → `t` (top), `r` (right), `b` (bottom), `l` (left), `x` (horizontal), `y` (vertical).
- `{tamaño}` → Valor basado en la escala de Tailwind (`m-4`, `p-2`), `px`, `auto` o valores personalizados (`m-[10px]`).
</aside>

## **Tabla de Margin (`m-*`)**

| **Clase** | **Descripción** | **Ejemplo** |
| --- | --- | --- |
| **m-{valor}** | Margen en todos los lados | `m-4` → `margin: 16px;` |
| **mt-{valor}** | Margen superior (`top`) | `mt-6` → `margin-top: 24px;` |
| **mr-{valor}** | Margen derecho (`right`) | `mr-4` → `margin-right: 16px;` |
| **mb-{valor}** | Margen inferior (`bottom`) | `mb-8` → `margin-bottom: 32px;` |
| **ml-{valor}** | Margen izquierdo (`left`) | `ml-2` → `margin-left: 8px;` |
| **mx-{valor}** | Margen horizontal (`left & right`) | `mx-8` → `margin-left/right: 32px;` |
| **my-{valor}** | Margen vertical (`top & bottom`) | `my-4` → `margin-top/bottom: 16px;` |
| **-m-{valor}** | Margen **negativo** | `-mt-8` → `margin-top: -32px;` |
| **m-auto** | Margen automático (**centrado**) | `m-auto` → `margin: auto;` |
| **m-[valor]** | Margen con **valores personalizados** | `m-[10px]` → `margin: 10px;` |

---

## **Tabla de Padding (`p-*`)**

| **Clase** | **Descripción** | **Ejemplo** |
| --- | --- | --- |
| **p-{valor}** | Padding en todos los lados | `p-4` → `padding: 16px;` |
| **pt-{valor}** | Padding superior (`top`) | `pt-6` → `padding-top: 24px;` |
| **pr-{valor}** | Padding derecho (`right`) | `pr-4` → `padding-right: 16px;` |
| **pb-{valor}** | Padding inferior (`bottom`) | `pb-8` → `padding-bottom: 32px;` |
| **pl-{valor}** | Padding izquierdo (`left`) | `pl-2` → `padding-left: 8px;` |
| **px-{valor}** | Padding horizontal (`left & right`) | `px-8` → `padding-left/right: 32px;` |
| **py-{valor}** | Padding vertical (`top & bottom`) | `py-4` → `padding-top/bottom: 16px;` |
| **p-[valor]** | Padding con valores personalizados | `p-[10px]` → `padding: 10px;` |