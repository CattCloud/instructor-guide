# Guía del Instructor: Introducción al Desarrollo

## Resumen

El objetivo de este día es que todos comiencen a conocer las numerosas herramientas que utilizarán en las siguientes semanas. Para muchos alumnos esta es la primera vez que van a trabajar con un editor de código y la primera vez que van a utilizar la línea de comandos para manipular archivos. Estas herramientas son nuevas para la mayoría de los alumnos, y muchas veces eso les causa ansiedad en el primer día. Es importante tener ese momento del "primer día de clases" con los estudiantes resolviendo sus preocupaciones e inquietudes con calma. Puede ser de bastante ayuda durante esta primera semana reconocer estos sentimientos y asegurarle a los alumnos que es normal sentir que no están captando los conceptos de inmediato pero lo lograrán con el tiempo. Durante esta semana, también puede ser de ayuda pedirle a los TA que compartan sus experiencias con el curso 201 y lo que han aprendido de esas experiencias.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de hoy.

## Preparativos

1. Hojea las lecturas diarias y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Este es el primer día de clase, así que asegúrate de que las tareas de Blackboard del curso estén publicadas y que el repositorio de GitHub esté creado y lleno con los README de las clases.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el `lecture.md` para los detalles de la clase.

## Bienvenida e Inicio

- Inicio en el Campus
  - Reglas/Políticas del Campus
- Presentaciones de los estudiantes

## Todo acerca del Code 201

- Introducción a Blackboard
  - Muéstrales la herramienta y cómo encontrar y enviar las tareas
- Repaso de las lecturas
  - Resumen rápido acerca de cómo "hojear" las lecturas

## Conceptos básicos de la Línea De Comandos, Configuración de VSCode y Demostración de código

- **¿Por qué?**
  - Línea de Comandos
    - El uso del terminal y los comandos del terminal pueden ser más rápidos y más eficientes
    - Las cosas hechas en el terminal se pueden repetir fácilmente
  - Configuración de VSCode
    - Es importante que los alumnos tengan la misma configuración de linter. Cuando trabajen en equipos, es importante que cuando comiencen a trabajar en los proyectos, todos estén en al día.
- **¿Qué?**
  - Todo lo que se hace en la línea de comandos está relacionado con **archivos**, **directorios** y **ejecutables**
  - Git y GitHub
    - Git: Un sistema de control de versiones que te permite administrar y monitorear tu historial de código fuente.
    - GitHub: un servicio de alojamiento basado en la nube que te permite administrar repositorios de Git.
  - VSCode es el editor de texto que los alumnos utilizarán. VSCode es un editor de código ágil con soporte para operaciones de desarrollo como el control de versiones.
- **¿Cómo?**
  - Revisar comandos básicos ([ver hoja de referencia](LECTURE-EXAMPLE.md#conceptos-básicos-de-la-línea-de-comandos))
  - Revisar la configuración de VSCode que los alumnos van a necesitar para este curso([ver configuraciones](LECTURE-EXAMPLE.md#configurar-vs-code))
  - Revisar la Configuración del Linter ([ver configuración](LECTURE-EXAMPLE.md#configura-tu-linter))
  - Arma tu Demostración de Código ([Resumen](DEMO.md))
    - prompts
    - alertas
    - console.log
    - estilos in-line
    - estilos internos
  - Ejecuta un informe de Lighthouse desde las Herramientas para desarrolladores de Chrome para analizar la accesibilidad de la aplicación.
  - **NOTA** Algunas extensiones de Chrome pueden insertar lenguaje de marcado en el código HTML durante el tiempo de ejecución y pueden afectar las puntuaciones en Lighthouse. Si esto sucede, recomienda que los alumnos apaguen sus extensiones en Chrome o activen Lighthouse mientras estén en una ventana en incognito.
  - Preparación para el laboratorio
    - Enséñales cómo enviar su trabajo de laboratorio

## Notas de Laboratorio

Los alumnos habrán completado una tarea de trabajo previo, lab-01a, para configurar un repositorio para almacenar sus notas. Deberán hacer creado un repositorio similar para su registro de aprendizaje en Code 102. Sin embargo, algunos estudiantes pueden haber no completado su trabajo previo, así que asegúrate de recordarle a los alumnos que completen sus tareas antes del lab-b para que no se atrasen con sus lecturas.

El laboratorio utilizar la funcionalidad gist de GitHub. [Esta es una descripción de un gist](https://docs.github.com/es/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists).

Al final de la clase, publica tu código en un gist y muéstrales cómo obtener el enlace para sus gists y dónde enviarlos en Blackboard para el lab-b.

Un detalle a tomar en cuenta: En lab-b, ayudamos a los alumnos a configurar su linter de JS en VSCode y también a configurar un .bash_profile personalizado que al final les mostrará su Git status cuando comencemos a trabajar con Git. Hacer esto tiene dos fines: 1) Nos da otra forma de verificar sus configuraciones de computadora; 2) Crea un punto de interacción individual con los estudiantes para conocerlos mejor. Trata de aprenderte sus nombres mientras interactúas con los alumnos.

### ¿Qué cambió desde la clase anterior?

Nada, ¡este es el primer día!

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

- Configuración de la computadora
- Algunas extensiones de Chrome pueden insertar lenguaje de marcado en el código HTML durante el tiempo de ejecución y pueden afectar las puntuaciones en Lighthouse. Si esto sucede, recomienda que los alumnos apaguen sus extensiones en Chrome o activen Lighthouse mientras estén en una ventana en incognito.
