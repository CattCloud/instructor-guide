# PRÁCTICA AUTÓNOMA - CLASE 06
## Reto: El Portafolio "Mobile-First"

> **Objetivo:** Tomar un perfil personal que solo se ve bien en un celular, y usar Media Queries y unidades elásticas para que escale a un diseño de 2 columnas al verlo en una computadora, emulando el trabajo de adaptar un layout real.

---

### Preparación del Entorno
1. Crea una carpeta llamada `reto-responsive`.
2. Obre la carpeta en VS Code y crea dos archivos: `index.html` y `style.css`.
3. Inicia tu servidor local (Live Server) para ver los cambios en vivo.

### Tu Punto de Partida (El HTML Base)
Copia y pega la siguiente estructura en tu `index.html`. ¡NO puedes modificar el HTML para resolver este reto, todo debe solucionarse desde el CSS!

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reto Responsive</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="contenedor">
        <header class="perfil">
            <img src="https://via.placeholder.com/150" alt="Foto de Perfil" class="foto">
            <h1 class="nombre">Alex Dev</h1>
            <p class="bio">Desarrollador Frontend apasionado por el diseño adaptable.</p>
        </header>

        <section class="enlaces">
            <a href="#" class="btn">Mi GitHub</a>
            <a href="#" class="btn">Mi LinkedIn</a>
            <a href="#" class="btn">Descargar CV</a>
        </section>
    </main>
</body>
</html>
```

---

### Fase 1: Construcción Móvil (Mobile-First)
Tu primera tarea es darle estilos asumiendo que el usuario lo está viendo en la pantalla delgada de un celular. No uses `px` para los tamaños de fuente ni para los anchos.

Copia este CSS base y completa los valores que faltan:

```css
/* Reseteo Universal */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #1a1a1a;
    color: white;
    font-family: Arial, sans-serif;
    /* 1. Ponle un tamaño de letra base usando REM (Ej: 16px equivale a 1rem) */
    font-size: _______; 
}

.contenedor {
    /* 2. Haz que el contenedor ocupe el 90% de la pantalla del celular 
       pero que JAMÁS pase de los 800px de tope en pantallas gigantes */
    width: _______;
    max-width: _______;
    margin: 2rem auto; /* Centrado */
}

/* Estilos de la tarjeta móvil (Apilada verticalmente) */
.perfil {
    text-align: center;
    margin-bottom: 2rem;
}

.foto {
    border-radius: 50%;
    /* 3. Usa una unidad fija pequeña de px para el celular */
    width: 120px; 
}

.nombre {
    /* 4. Título grande usando REM */
    font-size: _______; 
    margin: 1rem 0;
}

.enlaces {
    display: flex;
    flex-direction: column; /* Apilados hacia abajo en celular */
    gap: 1rem;
}

.btn {
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
}
```

---

### Fase 2: La Transformación con Media Queries

Acabas de lograr que tu perfil se vea perfecto en celular. Pero si extiendes la ventana del navegador en tu computadora, los botones verdes se estiran horriblemente de extremo a extremo. ¡Es hora de usar el termostato!

Abre DevTools (`F12`), activa la vista de dispositivos y observa el desastre.
Luego, ve al final de tu archivo `style.css` y añade las Media Queries:

**RETO 1: El Salto a la Tablet (Desktop Pequeño)**
Cuando la pantalla llegue a **768px**, queremos que el texto crezca y la imagen se haga más grande, aprovechando la pantalla.

```css
/* =======================================
   BREAKPOINT: Pantallas medianas (768px+)
   ======================================= */
@media (min-width: 768px) {
    /* Haz que la font-size de .nombre suba a 3.5rem */
    
    /* Haz que el width de .foto suba a 180px */
    
}
```

**RETO 2: El Salto al Monitor (Ultrawide)**
Cuando la pantalla llegue a **1024px**, ya tenemos MUCHO espacio. Modifica el contenedor para que pase de ser una columna vertical a un diseño de dos columnas (Izquierda: Perfil, Derecha: Botones), usando Flexbox o Grid.

```css
/* =======================================
   BREAKPOINT: Pantallas grandes (1024px+)
   ======================================= */
@media (min-width: 1024px) {
    .contenedor {
        /* Convierte el contenedor en un display: flex; 
           y alinea verticalmente sus dos hijos (perfil y enlaces) al centro. */
    }

    .perfil {
        /* Quítale el text-align: center; para que quede alineado a la izquierda */
        
        /* Opcional: Dale un margin-right para separarlo de los botones */
    }
}
```

---

### Check de Validación Final ✅
1. [ ] ¿En un iPhone (375px), los botones están apilados uno encima del otro de arriba abajo?
2. [ ] ¿En una Tablet (768px), el título principal crece sin romper nada?
3. [ ] ¿En tu computadora maximizada (1024px+), la foto y los botones se pusieron mágicamente uno al lado del otro horizontalmente?

> **Si tienes los 3 checks, acabas de dominar el flujo real del Responsive Web Design. ¡Felicidades!**
