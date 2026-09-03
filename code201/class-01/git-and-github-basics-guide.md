# Entendiendo Git y GitHub

## ¿Qué es Git?

Es una forma de almacenar y controlar versiones de archivos en tu computadora.

## Qué es GitHub?

Es un servicio en la nube en donde puedes 'almacenar' tus versiones en línea.

## Cómo guardar versiones en tu computadora:

 1. Crea o entra el directorio que quieres 'guardar'.
 1. Inicia Git - en el terminal.

   `$git init`

  Esto iniciará git en una carpeta .git oculta (puedes verificar esto con ls -a)
  Esta carpeta oculta te permitirá monitorear y guardar versiones de tus archivos en esta carpeta

 1. Revisa el estado de git en ese directorio.

   `$git status`

  El output del terminal deberá decir "On branch main" y luego enumerará los Untracked files
  también te indicará que escribas git add para monitorear

 1. Añade los archivos para monitorear.

   `$git add <nombre-del-archivo>`

  Esto le dirá a git que quieres 'monitorear' ese archivo y los cambios que se le hicieron

 1. Envía y guarda una captura.

   `$git commit -m "añade un mensaje aquí"`

  Aquí le indicas a git que tome la captura, asegúrate de añadir -m y un mensaje entre las comillas 
  Este mensaje será una nota legible acerca de lo que se ha cambiado desde la última captura

  En este punto, tu computadora ha tomado una foto del código en este momento y eres libre de modificar tus archivos y repetir el ciclo.

## Cómo añadir un commit a GitHub:

 1. Ingresa a tu cuenta de GitHub, en la parte superior derecha selecciona el símbolo *+*, en el menú desplegable selecciona NEW REPOSITORY.

 1. Ingresa un nombre para el repositorio.

 1. Selecciona Public o Private. GitHub le permite a cada usuario tener varios archivos privados, sin embargo, al ser un desarrollador nuevo, es una buena idea fortalecer tus repositorios públicos para que los empleadores potenciales vean tu código 

 1. Haz click al botón create repository.

 1. Te enviará a una nueva página que te indicará cómo crear un repositorio de forma local. Si ya tienes una versión guardad en tu computadora (mira Cómo guardar versiones en tu computadora), avanza hasta la línea que dice

   `git remote add origin https://github.com/<tuNombreDeUsuario>/<nombreDeTuRepo>.git`

  Copia esta línea y pégala en tu terminal. Esto le indica a tu computadora dónde hacer 'push' a los archivos

 1. Haz push a tus commits en GitHub
  Una vez que hayas realizado los commits a tus archivos en el terminal, ejecuta

   `$git push -u origin main`

  Esto le hará push a tus commits a tu rama main en GitHub.

 1. Actualiza tu página en GitHub, deberás ver un repositorio con los archivos a los que has hecho push desde tu computadora.

  Ahora puedes continuar trabajando (y tomando más caputas) en tu computadora

  La próxima vez que quieras tomar una captura, estos son los comandos:

   `$git status`

   `$git add <nombre-del-archivo>`

   `$git status`

   `$git commit -m "tu mensaje"`

   `$git status`

   `$git push origin main`
