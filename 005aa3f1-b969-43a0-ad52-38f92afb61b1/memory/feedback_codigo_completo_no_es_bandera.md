---
name: Código pre-escrito en labs del Code 201 NO es bandera roja
description: Auditorías de los labs del Code 201 no deben marcar "copy-paste" o "código casi completo" como problema. El modelo de aula resuelve el riesgo.
type: feedback
originSessionId: ca33dbe4-9df1-4a96-8ef2-53b456ca0e2e
---
Cuando un agente de auditoría reporte que los labs del Code 201 dan 80-90% de código pre-escrito ("riesgo de copy-paste", "el alumno solo transcribe"), **NO marcar como bandera roja**. Es la pauta intencional del bootcamp.

**Why:** El Code 201 opera con code-along en vivo presencial. Eric (el instructor) lee verbatim cada sub-paso del lab, lo tipea en vivo en VS Code, verbaliza el porqué de cada línea, hace preguntas de calibración entre bloques. El alumno escribe siguiendo, no copiando desde la nada. El aprendizaje ocurre en la verbalización + las preguntas, no en escribir desde un placeholder vacío. Tener código completo en el lab garantiza que el instructor tipee lo correcto sin improvisar y le da al alumno una referencia precisa para no quedarse atrás. Esta confirmación llegó al cerrar la auditoría del M3 (2026-05-10).

**How to apply:**
- Al auditar labs del Code 201 (M1-M5): si un agente reporta "85-90% código dado / 10-15% gaps", **no proponer reducir el código pre-escrito**. Dejar como está.
- Lo que SÍ sigue siendo problema y debe marcarse:
  - **Sub-pasos vagos** donde el código no está y el alumno tendría que inventar (ej: HU vagas de C05, "aplica media queries para ajustar columnas" sin código). Esos los seguimos atacando.
  - **Conceptos huérfanos** sin sub-paso correspondiente (ej: `flex-grow` en C02, `forEach` en C06, `finally` en C12).
  - **Sub-pasos vagos en pasos de implementación** (ej: "modularización: crea 3 archivos" sin decir qué función va en cuál).
- La distinción clave: VAGO = al alumno le falta información para implementar. COMPLETO = el alumno tiene todo y va siguiendo al instructor que verbaliza. Solo lo VAGO es problema.

**Esta regla NO aplica a otros bootcamps.** Es específica del modelo de Eric en EnterTechSchool con dictado presencial + code-along en vivo. Bootcamps asíncronos o con menos verbalización del instructor sí podrían tener problema con código completo.
