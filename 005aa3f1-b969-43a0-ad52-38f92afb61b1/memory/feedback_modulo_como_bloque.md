---
name: Editar clase del Code 201 = revisar el módulo entero (4 clases)
description: Al modificar contenido de una clase del Code 201, validar impacto en las otras 3 clases del mismo módulo antes de cerrar el cambio.
type: feedback
originSessionId: ca33dbe4-9df1-4a96-8ef2-53b456ca0e2e
---
Al editar el contenido de cualquier clase del Code 201 (`C:\dev\entertechschool\ncode-201-guide\curriculum\class-XX\`), no tratar la clase como unidad independiente. Validar siempre las otras 3 clases del mismo módulo antes de cerrar el cambio.

**Why:** El proyecto integrador del módulo se construye progresivamente en los 4 labs, y los conceptos introducidos en una clase se asumen como prerrequisito en las siguientes. Un cambio aislado puede romper la cadena: dejar un concepto huérfano de aplicación, romper el estado del proyecto víctima entre clases, o duplicar/contradecir algo ya enseñado.

**How to apply:** Antes de cerrar una edición a la clase N, verificar:
- **Hacia atrás (N-1, N-2, …):** ¿el cambio depende de algo no enseñado? ¿duplica algo ya cubierto?
- **Hacia adelante (N+1, …):** ¿alguna clase posterior asumía la versión anterior? ¿el proyecto integrador parte del estado correcto al cierre del lab N?
- **Lateral (módulo completo):** ¿las 4 clases siguen sumando cobertura conceptual completa del módulo?

Mapeo módulo → clases: M1 = class-01 a 04, M2 = class-05 a 08, M3 = class-09 a 12, M4 = class-13 a 16, M5 = class-17 a 20. class-00 es bienvenida, no pertenece a ningún módulo temático.
