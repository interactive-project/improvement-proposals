# Prompt para reanudar Interactive Project

```text
Continúa la implementación de los repositorios de la organización interactive-project.

Trabaja estrictamente una issue a la vez y en el orden indicado. Antes de cada tarea, lee la issue, sus comentarios, dependencias y las instrucciones del repositorio; verifica su estado actual. Implementa todos sus criterios, crea una rama y PR hacia main, realiza los commits y sube los cambios, verifica CI sobre el commit final, fusiona la PR y cierra la issue como completada. No empieces la siguiente hasta comprobar el merge en main y el cierre. No uses agentes ni tareas en paralelo. Si una issue ya está completada, verifica la evidencia y omítela.

Usa como fuente de criterios, dependencias y progreso:
https://github.com/interactive-project/improvement-proposals/blob/main/execution-queue.json
La ruta está en:
https://github.com/interactive-project/improvement-proposals/blob/main/implementation-route.md

Se completaron protocol#2–#6, content-node#1 y events#1. La próxima es events#2. Todas las referencias siguientes pertenecen a interactive-project.

Orden pendiente:
1. events#2 — Specify event subscriptions, delivery guarantees and engine isolation
   https://github.com/interactive-project/events/issues/2
2. registry#1 — Define plugin registration and independent engine/renderer resolution
   https://github.com/interactive-project/registry/issues/1
3. registry#2 — Specify version negotiation, lazy loading and capability-aware lookup
   https://github.com/interactive-project/registry/issues/2
4. core#1 — Specify the headless activity lifecycle and deterministic dispatch contract
   https://github.com/interactive-project/core/issues/1
5. core#2 — Implement the planned load pipeline for schemas, policies and plugin resolution
   https://github.com/interactive-project/core/issues/2
6. core#3 — Define asynchronous effects, evaluation and cancellation semantics
   https://github.com/interactive-project/core/issues/3
7. core#4 — Specify snapshots, restore validation and migration orchestration
   https://github.com/interactive-project/core/issues/4
8. quiz#1 — Define quiz schemas for the initial eight question types
   https://github.com/interactive-project/quiz/issues/1
9. quiz#2 — Specify scoring, answer evaluation and assessment trust boundaries
   https://github.com/interactive-project/quiz/issues/2
10. quiz#3 — Define attempts, navigation, submission and feedback state transitions
   https://github.com/interactive-project/quiz/issues/3
11. flashcards#1 — Define portable decks, cards and headless study actions
   https://github.com/interactive-project/flashcards/issues/1
12. flashcards#2 — Specify study sessions, review events and resumable progress
   https://github.com/interactive-project/flashcards/issues/2
13. code#1 — Define code activity files, editor drivers and workspace actions
   https://github.com/interactive-project/code/issues/1
14. code#2 — Specify isolated execution providers, resource limits and cancellation
   https://github.com/interactive-project/code/issues/2
15. code#3 — Define test-based evaluation, hidden tests and feedback results
   https://github.com/interactive-project/code/issues/3
16. diagram#1 — Define semantic graph schemas, ports, groups and editing actions
   https://github.com/interactive-project/diagram/issues/1
17. whiteboard#1 — Define the semantic whiteboard object model and document schema
   https://github.com/interactive-project/whiteboard/issues/1
18. whiteboard#2 — Specify whiteboard actions, transactions and local undo/redo
   https://github.com/interactive-project/whiteboard/issues/2
19. simulation#1 — Define SimulationSpec and the pluggable SimulationDriver lifecycle
   https://github.com/interactive-project/simulation/issues/1
20. simulation#2 — Specify time stepping, reproducibility and resource controls
   https://github.com/interactive-project/simulation/issues/2
21. improvement-proposals#1 — Record Interactive Project repository ownership and dependency rules
   https://github.com/interactive-project/improvement-proposals/issues/1
22. content-node#2 — Specify content renderer drivers, safe rendering and fallback behavior
   https://github.com/interactive-project/content-node/issues/2
23. content-node#3 — Plan content serialization, localization and compatibility tests
   https://github.com/interactive-project/content-node/issues/3
24. events#3 — Design privacy-aware telemetry sinks and future evidence integrations
   https://github.com/interactive-project/events/issues/3
25. registry#3 — Expose a serializable generation catalog and plugin conformance checklist
   https://github.com/interactive-project/registry/issues/3
26. core#5 — Plan runtime conformance, packaging boundaries and the first vertical slice
   https://github.com/interactive-project/core/issues/5
27. quiz#4 — Create the quiz interoperability and generative activity acceptance plan
   https://github.com/interactive-project/quiz/issues/4
28. renderer-dom#1 — Define the vanilla DOM host and renderer registration lifecycle
   https://github.com/interactive-project/renderer-dom/issues/1
29. renderer-dom#2 — Specify accessible interactions, localization and style-neutral rendering
   https://github.com/interactive-project/renderer-dom/issues/2
30. improvement-proposals#2 — Define independent releases, compatibility matrices and contract change proposals
   https://github.com/interactive-project/improvement-proposals/issues/2
31. improvement-proposals#3 — Track the staged implementation roadmap and cross-library integration gates
   https://github.com/interactive-project/improvement-proposals/issues/3
32. flashcards#3 — Define optional scheduling integration and renderer conformance
   https://github.com/interactive-project/flashcards/issues/3
33. code#4 — Plan code snapshots, events and framework-independent editor compatibility
   https://github.com/interactive-project/code/issues/4
34. diagram#2 — Specify layout and graph-analysis driver boundaries
   https://github.com/interactive-project/diagram/issues/2
35. diagram#3 — Define diagram evaluation hooks, events and portable snapshot tests
   https://github.com/interactive-project/diagram/issues/3
36. whiteboard#3 — Design the CanvasDriver contract and optional Konva renderer
   https://github.com/interactive-project/whiteboard/issues/3
37. whiteboard#4 — Define embedded activity lifecycle and collaboration-ready persistence
   https://github.com/interactive-project/whiteboard/issues/4
38. simulation#3 — Define simulation observations, assessment hooks and event contracts
   https://github.com/interactive-project/simulation/issues/3
39. simulation#4 — Specify portable snapshots and a simulation driver conformance matrix
   https://github.com/interactive-project/simulation/issues/4
40. renderer-dom#3 — Plan DOM lifecycle, persistence and cross-host conformance tests
   https://github.com/interactive-project/renderer-dom/issues/3
41. react#1 — Define the React runtime adapter and lifecycle bindings
   https://github.com/interactive-project/react/issues/1
42. react#2 — Specify composable react renderers, rich content and accessible interactions
   https://github.com/interactive-project/react/issues/2
43. react#3 — Establish react compatibility, snapshot portability and release checks
   https://github.com/interactive-project/react/issues/3
44. vue#1 — Define the Vue runtime adapter and lifecycle bindings
   https://github.com/interactive-project/vue/issues/1
45. vue#2 — Specify composable vue renderers, rich content and accessible interactions
   https://github.com/interactive-project/vue/issues/2
46. vue#3 — Establish vue compatibility, snapshot portability and release checks
   https://github.com/interactive-project/vue/issues/3
47. svelte#1 — Define the Svelte runtime adapter and lifecycle bindings
   https://github.com/interactive-project/svelte/issues/1
48. svelte#2 — Specify composable svelte renderers, rich content and accessible interactions
   https://github.com/interactive-project/svelte/issues/2
49. svelte#3 — Establish svelte compatibility, snapshot portability and release checks
   https://github.com/interactive-project/svelte/issues/3
50. collaboration#1 — Define shared document, presence and transport boundaries
   https://github.com/interactive-project/collaboration/issues/1
51. collaboration#2 — Specify the Yjs adapter and domain mapping strategy
   https://github.com/interactive-project/collaboration/issues/2
52. collaboration#3 — Plan collaboration persistence, schema migration and reconnect behavior
   https://github.com/interactive-project/collaboration/issues/3
53. spaced-repetition#1 — Define a standalone review scheduling contract and data model
   https://github.com/interactive-project/spaced-repetition/issues/1
54. spaced-repetition#2 — Specify algorithm drivers, deterministic scheduling and migration rules
   https://github.com/interactive-project/spaced-repetition/issues/2
55. spaced-repetition#3 — Plan flashcard integration, offline persistence and scheduler conformance
   https://github.com/interactive-project/spaced-repetition/issues/3
56. layout-elk#1 — Specify the ELK layout adapter and loss-aware graph conversion
   https://github.com/interactive-project/layout-elk/issues/1
57. layout-elk#2 — Plan ELK version compatibility, deterministic fixtures and runtime isolation
   https://github.com/interactive-project/layout-elk/issues/2
58. graph-cytoscape#1 — Specify optional headless Cytoscape graph-analysis drivers
   https://github.com/interactive-project/graph-cytoscape/issues/1
59. graph-cytoscape#2 — Plan graph driver conformance, performance limits and extension compatibility
   https://github.com/interactive-project/graph-cytoscape/issues/2
60. simulation-matter#1 — Define the Matter.js 2D physics driver and portable model mapping
   https://github.com/interactive-project/simulation-matter/issues/1
61. simulation-matter#2 — Specify Matter snapshot guarantees and physics conformance scenarios
   https://github.com/interactive-project/simulation-matter/issues/2
62. simulation-rapier#1 — Define optional Rapier 2D/3D drivers and asynchronous WASM initialization
   https://github.com/interactive-project/simulation-rapier/issues/1
63. simulation-rapier#2 — Specify Rapier snapshot compatibility and driver conformance tests
   https://github.com/interactive-project/simulation-rapier/issues/2
64. simulation-custom#1 — Define the reference custom simulation driver and authoring contract
   https://github.com/interactive-project/simulation-custom/issues/1
65. simulation-custom#2 — Create the reference simulation conformance and host portability plan
   https://github.com/interactive-project/simulation-custom/issues/2
```
