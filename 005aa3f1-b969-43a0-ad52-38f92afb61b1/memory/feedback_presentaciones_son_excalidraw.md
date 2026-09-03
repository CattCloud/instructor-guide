---
name: En Code 201 las "presentaciones de clase" son los .excalidraw, no slides Canva
description: Cuando Eric pide "presentación" en Code 201, se refiere al flujo Guía Excalidraw → .excalidraw. No generar slides Canva/Marp salvo pedido explícito.
type: feedback
originSessionId: f29ccf7e-158c-4c49-9173-0483d2ad48ae
---
En Code 201, cuando Eric habla de "desarrollar la presentación de la clase" se refiere a los archivos `.excalidraw` generados por `excalidraw-system`, NO a slides Canva, Marp o decks tradicionales.

**Why:** Eric lo aclaró al arrancar el desarrollo de Clase 01 del 201 (2026-05-13). Su flujo real de aula usa Excalidraw como pizarra/proyectable principal; los "slides" son apoyos secundarios cuando aplican, no el entregable principal. La skill `instructor-system §15` + `excalidraw-system` ya tienen el flujo completo prescrito (Guía Excalidraw como contrato entre las dos skills).

**How to apply:** Si Eric pide "presentación" / "slides" / "deck" para una clase del 201, asumir flujo Excalidraw: Capa 0 → Capa 1 → Capa 2+3 progresivo → `GUIA EXCALIDRAW - CLASE {n}.md` (momento por momento, Eric valida) → `excalidraw-system` genera `.excalidraw`. NO proponer formato Marp / Reveal / Canva MCP salvo que Eric lo pida explícito. Si la clase tiene además entregable `slide_*.md` (cheat sheet) eso es Fase 5 distinta, no es "la presentación".
