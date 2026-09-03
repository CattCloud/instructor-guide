---
name: feedback-tags-html-escapados
description: "En todos los .md de clase (Capa 0, CLASE NN, GUIA EXCALIDRAW, entregables), los tags HTML dentro de `**_..._**` deben usar entidades `&lt;` y `&gt;` en lugar de `<` y `>` literales — desde el primer borrador, no como fix posterior."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

Al generar cualquier archivo `.md` de material de clase (Capa 0, `CLASE NN.md`, `GUIA EXCALIDRAW`, entregables del alumno), **TODO tag HTML envuelto en `**_..._**` debe escaparse con entidades HTML desde la primera escritura**:

- `**_<a href="...">_**` → `**_&lt;a href="..."&gt;_**`
- `**_<section id="x">_**` → `**_&lt;section id="x"&gt;_**`
- `**_<details>_**` → `**_&lt;details&gt;_**`
- `**_<h1>_** ... **_<h6>_**` → `**_&lt;h1&gt;_** ... **_&lt;h6&gt;_**`
- Igual para `<header>`, `<nav>`, `<main>`, `<form>`, `<input>`, `<label>`, `<button>`, `<ul>`, `<li>`, `<article>`, `<aside>`, `<footer>`, etc.

**Casos compuestos** como `**_<ul>/<li>_**` también: `**_&lt;ul&gt;/&lt;li&gt;_**`.

**Why:** El parser de markdown ve `<a href="...">` literal dentro del `**_..._**` y lo interpreta como apertura de un anchor HTML real. Como nunca aparece `</a>` en el documento, el anchor "se extiende" por párrafos enteros — todo el texto siguiente queda subrayado/azul como link. Lo mismo con `<h1>` que dispara estilo de heading en cascada. Pasó en CLASE 02 y volvió a pasar en CLASE 03; es sistémico.

**How to apply:** al redactar el primer borrador de cualquier `.md` de clase, escribir directamente `&lt;` y `&gt;` cuando el contenido del `**_..._**` sea un tag HTML. No usar `<` y `>` literales y arreglar después — ya quedó verificado que rompe el render en VS Code preview y en cualquier viewer markdown estricto.

**Validación post-escritura:** correr `Grep` con patrón `\*\*_<[a-zA-Z]` en el archivo generado. Si devuelve cualquier match, no se aplicó la regla — escapar antes de entregar.

**Excepción:** dentro de bloques de código triple (```` ```html ```` etc.) los tags van con `<` y `>` normales — no se escapan porque el bloque es preformateado y el parser no lo interpreta.

**Comando de migración rápida (si un archivo viejo ya tiene tags sin escapar):**
```powershell
$path = "ruta/al/archivo.md"
$content = Get-Content -Path $path -Raw -Encoding UTF8
$content = $content -replace '\*\*_<([^>]+)>_\*\*', '**_&lt;$1&gt;_**'
Set-Content -Path $path -Value $content -Encoding UTF8 -NoNewline
```

Esto cubre los tags simples y compuestos con un `>` final. Tags con `>` interno (raros) requieren edición manual.
