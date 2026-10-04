# Interactive Project implementation route

Snapshot: 2026-10-02. All 26 accessible organization repositories were checked individually. There are 72 open issues in 23 repositories. interactive-academy, interactive-labs and interactive-bitcoin have no open issues in this snapshot.

Repository ownership, interface ownership, allowed dependency directions and cross-repository approval rules are defined in [repository-architecture.md](repository-architecture.md).

[protocol#1](https://github.com/interactive-project/protocol/issues/1) is closed as completed, with all five acceptance criteria checked. It is the completed foundation and is excluded from the work queue. protocol#2 is still open; its existing schema and validation code must be reviewed before changing it. The current protocol commit has a successful [Protocol conformance run](https://github.com/interactive-project/protocol/actions/runs/36780234791).

## Ordering

Every prerequisite appears before its dependent issue. Among ready issues, P0 precedes P1; original creation order breaks ties. The dependency graph was checked for missing prerequisites, duplicates and cycles. All 72 open issues are represented, and the only prerequisite outside this queue is completed protocol#1.

This is a queue, not a completion report. No implementation issue, integration gate or independent session is marked completed by publishing this route. The machine-readable [execution queue](execution-queue.json) records the issue scope, prerequisites, five acceptance criteria and intended branch for each work item.

## Per-issue workflow

1. Re-fetch the issue and comments, check prerequisite completion and implementation commits, inspect the target repository and read its applicable AGENTS.md and contribution instructions.
2. Work on exactly one issue at a time in this conversation. Independent Codex sessions are unavailable; session_id remains null. Create the issue branch from verified main after the previous issue's PR is merged and its issue closed. For an empty repository, initialize its first commit deliberately.
3. Implement the issue's full acceptance criteria. Shared contract changes must receive an explicit compatibility decision through improvement-proposals, as required by the issue bodies. Existing code must be reused where appropriate.
4. Run meaningful fixture, type, runtime and compatibility checks required by the issue. Record exact commands and results, unsupported cases and migration implications.
5. Commit the issue's changes with a reference to its issue, upload its branch without force-pushing, verify GitHub Actions on the exact commit, merge the PR into main and close the issue with acceptance evidence. Record implementation and merge SHAs, PR, verification and closure. Do not start the next issue until this entire cycle is complete.
6. Recalculate the remaining order when dependencies or issue states change. Failed verification or unavailable prerequisites block downstream work. Package releases and deployments require their own task scope.

## Integration gates

The existing [roadmap issue](https://github.com/interactive-project/improvement-proposals/issues/3) remains the source of the five gates: shared contracts and core semantics; generated quiz through DOM evaluation and persistence; flashcards and React/Vue/Svelte parity; advanced activities and optional drivers; compatibility, privacy, accessibility and independent release readiness. Their dependencies and acceptance evidence remain necessary. Generating this route does not satisfy those gates.

## Current execution constraints

The GitHub connection can read the organization repositories. Write access will be established by the publication of this route. The managed workspace is pending and offline and exposes no shell capability. Independent Codex session creation is not exposed by the available tools. Execution is now sequential in this conversation with GitHub Actions for runtime checks. Independent sessions remain unavailable and session IDs stay null. The execution queue records actual per-issue commits, verification, merges and closure; unstarted issues retain empty evidence arrays.

## Sequential queue

| Order | Priority | Issue | Work | Prerequisites |
| --- | --- | --- | --- | --- |
| 1 | P0 | [protocol#2](https://github.com/interactive-project/protocol/issues/2) | Publish the JSON Schema contract and portable validation diagnostics | protocol#1 |
| 2 | P0 | [protocol#3](https://github.com/interactive-project/protocol/issues/3) | Define shared content, accessibility and localization extension points | protocol#1 |
| 3 | P0 | [protocol#4](https://github.com/interactive-project/protocol/issues/4) | Specify engine, action, result and snapshot interoperability contracts | protocol#1 |
| 4 | P0 | [protocol#5](https://github.com/interactive-project/protocol/issues/5) | Define capability declarations and the generative activity validation pipeline | protocol#2, protocol#4 |
| 5 | P0 | [protocol#6](https://github.com/interactive-project/protocol/issues/6) | Establish schema evolution, migrations and cross-library conformance fixtures | protocol#2, protocol#4, protocol#5 |
| 6 | P0 | [content-node#1](https://github.com/interactive-project/content-node/issues/1) | Define portable rich content variants and recursive composition | protocol#3, protocol#2 |
| 7 | P0 | [events#1](https://github.com/interactive-project/events/issues/1) | Define the shared event envelope and typed activity event catalog | protocol#4, protocol#6 |
| 8 | P0 | [events#2](https://github.com/interactive-project/events/issues/2) | Specify event subscriptions, delivery guarantees and engine isolation | events#1 |
| 9 | P0 | [registry#1](https://github.com/interactive-project/registry/issues/1) | Define plugin registration and independent engine/renderer resolution | protocol#5, protocol#4 |
| 10 | P0 | [registry#2](https://github.com/interactive-project/registry/issues/2) | Specify version negotiation, lazy loading and capability-aware lookup | registry#1, protocol#6 |
| 11 | P0 | [core#1](https://github.com/interactive-project/core/issues/1) | Specify the headless activity lifecycle and deterministic dispatch contract | protocol#4, registry#1, events#2 |
| 12 | P0 | [core#2](https://github.com/interactive-project/core/issues/2) | Implement the planned load pipeline for schemas, policies and plugin resolution | core#1, protocol#5, registry#2 |
| 13 | P0 | [core#3](https://github.com/interactive-project/core/issues/3) | Define asynchronous effects, evaluation and cancellation semantics | core#1, protocol#4 |
| 14 | P0 | [core#4](https://github.com/interactive-project/core/issues/4) | Specify snapshots, restore validation and migration orchestration | core#3, protocol#6 |
| 15 | P0 | [quiz#1](https://github.com/interactive-project/quiz/issues/1) | Define quiz schemas for the initial eight question types | content-node#1, protocol#2 |
| 16 | P0 | [quiz#2](https://github.com/interactive-project/quiz/issues/2) | Specify scoring, answer evaluation and assessment trust boundaries | quiz#1, core#3 |
| 17 | P0 | [quiz#3](https://github.com/interactive-project/quiz/issues/3) | Define attempts, navigation, submission and feedback state transitions | quiz#2, core#1, events#1 |
| 18 | P0 | [flashcards#1](https://github.com/interactive-project/flashcards/issues/1) | Define portable decks, cards and headless study actions | content-node#1, core#1 |
| 19 | P0 | [flashcards#2](https://github.com/interactive-project/flashcards/issues/2) | Specify study sessions, review events and resumable progress | flashcards#1, events#1, core#4 |
| 20 | P0 | [code#1](https://github.com/interactive-project/code/issues/1) | Define code activity files, editor drivers and workspace actions | protocol#2, content-node#1, core#1 |
| 21 | P0 | [code#2](https://github.com/interactive-project/code/issues/2) | Specify isolated execution providers, resource limits and cancellation | code#1, core#3, protocol#5 |
| 22 | P0 | [code#3](https://github.com/interactive-project/code/issues/3) | Define test-based evaluation, hidden tests and feedback results | code#2, quiz#2 |
| 23 | P0 | [diagram#1](https://github.com/interactive-project/diagram/issues/1) | Define semantic graph schemas, ports, groups and editing actions | content-node#1, core#1 |
| 24 | P0 | [whiteboard#1](https://github.com/interactive-project/whiteboard/issues/1) | Define the semantic whiteboard object model and document schema | content-node#1, protocol#2 |
| 25 | P0 | [whiteboard#2](https://github.com/interactive-project/whiteboard/issues/2) | Specify whiteboard actions, transactions and local undo/redo | whiteboard#1, core#1 |
| 26 | P0 | [simulation#1](https://github.com/interactive-project/simulation/issues/1) | Define SimulationSpec and the pluggable SimulationDriver lifecycle | protocol#4, core#3, protocol#5 |
| 27 | P0 | [simulation#2](https://github.com/interactive-project/simulation/issues/2) | Specify time stepping, reproducibility and resource controls | simulation#1 |
| 28 | P0 | [improvement-proposals#1](https://github.com/interactive-project/improvement-proposals/issues/1) | Record Interactive Project repository ownership and dependency rules | protocol#1, core#1, registry#1 |
| 29 | P1 | [content-node#2](https://github.com/interactive-project/content-node/issues/2) | Specify content renderer drivers, safe rendering and fallback behavior | content-node#1, protocol#5 |
| 30 | P1 | [content-node#3](https://github.com/interactive-project/content-node/issues/3) | Plan content serialization, localization and compatibility tests | content-node#1, content-node#2, protocol#6 |
| 31 | P1 | [events#3](https://github.com/interactive-project/events/issues/3) | Design privacy-aware telemetry sinks and future evidence integrations | events#2, protocol#5 |
| 32 | P1 | [registry#3](https://github.com/interactive-project/registry/issues/3) | Expose a serializable generation catalog and plugin conformance checklist | registry#2, protocol#2 |
| 33 | P0 | [core#5](https://github.com/interactive-project/core/issues/5) | Plan runtime conformance, packaging boundaries and the first vertical slice | core#2, core#4, registry#3 |
| 34 | P0 | [quiz#4](https://github.com/interactive-project/quiz/issues/4) | Create the quiz interoperability and generative activity acceptance plan | quiz#3, core#5, protocol#6 |
| 35 | P0 | [renderer-dom#1](https://github.com/interactive-project/renderer-dom/issues/1) | Define the vanilla DOM host and renderer registration lifecycle | core#5, content-node#2, registry#1 |
| 36 | P0 | [renderer-dom#2](https://github.com/interactive-project/renderer-dom/issues/2) | Specify accessible interactions, localization and style-neutral rendering | renderer-dom#1, protocol#3 |
| 37 | P0 | [improvement-proposals#2](https://github.com/interactive-project/improvement-proposals/issues/2) | Define independent releases, compatibility matrices and contract change proposals | protocol#6, core#5, improvement-proposals#1 |
| 38 | P0 | [improvement-proposals#3](https://github.com/interactive-project/improvement-proposals/issues/3) | Track the staged implementation roadmap and cross-library integration gates | improvement-proposals#2 |
| 39 | P1 | [flashcards#3](https://github.com/interactive-project/flashcards/issues/3) | Define optional scheduling integration and renderer conformance | flashcards#2, protocol#6 |
| 40 | P1 | [code#4](https://github.com/interactive-project/code/issues/4) | Plan code snapshots, events and framework-independent editor compatibility | code#3, core#4, events#3 |
| 41 | P1 | [diagram#2](https://github.com/interactive-project/diagram/issues/2) | Specify layout and graph-analysis driver boundaries | diagram#1, core#3 |
| 42 | P1 | [diagram#3](https://github.com/interactive-project/diagram/issues/3) | Define diagram evaluation hooks, events and portable snapshot tests | diagram#2, core#4, events#1 |
| 43 | P1 | [whiteboard#3](https://github.com/interactive-project/whiteboard/issues/3) | Design the CanvasDriver contract and optional Konva renderer | whiteboard#2, content-node#2 |
| 44 | P1 | [whiteboard#4](https://github.com/interactive-project/whiteboard/issues/4) | Define embedded activity lifecycle and collaboration-ready persistence | whiteboard#3, core#4, registry#2, events#1 |
| 45 | P1 | [simulation#3](https://github.com/interactive-project/simulation/issues/3) | Define simulation observations, assessment hooks and event contracts | simulation#2, events#1 |
| 46 | P1 | [simulation#4](https://github.com/interactive-project/simulation/issues/4) | Specify portable snapshots and a simulation driver conformance matrix | simulation#2, core#4, protocol#6 |
| 47 | P1 | [renderer-dom#3](https://github.com/interactive-project/renderer-dom/issues/3) | Plan DOM lifecycle, persistence and cross-host conformance tests | renderer-dom#2, quiz#4, flashcards#3 |
| 48 | P1 | [react#1](https://github.com/interactive-project/react/issues/1) | Define the React runtime adapter and lifecycle bindings | core#5, registry#2 |
| 49 | P1 | [react#2](https://github.com/interactive-project/react/issues/2) | Specify composable react renderers, rich content and accessible interactions | react#1, renderer-dom#2, content-node#2 |
| 50 | P1 | [react#3](https://github.com/interactive-project/react/issues/3) | Establish react compatibility, snapshot portability and release checks | react#2, core#4, protocol#6 |
| 51 | P1 | [vue#1](https://github.com/interactive-project/vue/issues/1) | Define the Vue runtime adapter and lifecycle bindings | core#5, registry#2 |
| 52 | P1 | [vue#2](https://github.com/interactive-project/vue/issues/2) | Specify composable vue renderers, rich content and accessible interactions | vue#1, renderer-dom#2, content-node#2 |
| 53 | P1 | [vue#3](https://github.com/interactive-project/vue/issues/3) | Establish vue compatibility, snapshot portability and release checks | vue#2, core#4, protocol#6 |
| 54 | P1 | [svelte#1](https://github.com/interactive-project/svelte/issues/1) | Define the Svelte runtime adapter and lifecycle bindings | core#5, registry#2 |
| 55 | P1 | [svelte#2](https://github.com/interactive-project/svelte/issues/2) | Specify composable svelte renderers, rich content and accessible interactions | svelte#1, renderer-dom#2, content-node#2 |
| 56 | P1 | [svelte#3](https://github.com/interactive-project/svelte/issues/3) | Establish svelte compatibility, snapshot portability and release checks | svelte#2, core#4, protocol#6 |
| 57 | P1 | [collaboration#1](https://github.com/interactive-project/collaboration/issues/1) | Define shared document, presence and transport boundaries | protocol#5, whiteboard#2, diagram#1 |
| 58 | P1 | [collaboration#2](https://github.com/interactive-project/collaboration/issues/2) | Specify the Yjs adapter and domain mapping strategy | collaboration#1, whiteboard#4, diagram#3, code#4 |
| 59 | P1 | [collaboration#3](https://github.com/interactive-project/collaboration/issues/3) | Plan collaboration persistence, schema migration and reconnect behavior | collaboration#2, protocol#6, events#3 |
| 60 | P1 | [spaced-repetition#1](https://github.com/interactive-project/spaced-repetition/issues/1) | Define a standalone review scheduling contract and data model | flashcards#2, protocol#4 |
| 61 | P1 | [spaced-repetition#2](https://github.com/interactive-project/spaced-repetition/issues/2) | Specify algorithm drivers, deterministic scheduling and migration rules | spaced-repetition#1 |
| 62 | P1 | [spaced-repetition#3](https://github.com/interactive-project/spaced-repetition/issues/3) | Plan flashcard integration, offline persistence and scheduler conformance | spaced-repetition#2, flashcards#3, core#4 |
| 63 | P1 | [layout-elk#1](https://github.com/interactive-project/layout-elk/issues/1) | Specify the ELK layout adapter and loss-aware graph conversion | diagram#2 |
| 64 | P1 | [layout-elk#2](https://github.com/interactive-project/layout-elk/issues/2) | Plan ELK version compatibility, deterministic fixtures and runtime isolation | layout-elk#1, protocol#6 |
| 65 | P1 | [graph-cytoscape#1](https://github.com/interactive-project/graph-cytoscape/issues/1) | Specify optional headless Cytoscape graph-analysis drivers | diagram#2 |
| 66 | P1 | [graph-cytoscape#2](https://github.com/interactive-project/graph-cytoscape/issues/2) | Plan graph driver conformance, performance limits and extension compatibility | graph-cytoscape#1, layout-elk#1 |
| 67 | P1 | [simulation-matter#1](https://github.com/interactive-project/simulation-matter/issues/1) | Define the Matter.js 2D physics driver and portable model mapping | simulation#2, simulation#3 |
| 68 | P1 | [simulation-matter#2](https://github.com/interactive-project/simulation-matter/issues/2) | Specify Matter snapshot guarantees and physics conformance scenarios | simulation-matter#1, simulation#4 |
| 69 | P1 | [simulation-rapier#1](https://github.com/interactive-project/simulation-rapier/issues/1) | Define optional Rapier 2D/3D drivers and asynchronous WASM initialization | simulation#1, simulation#2, protocol#5 |
| 70 | P1 | [simulation-rapier#2](https://github.com/interactive-project/simulation-rapier/issues/2) | Specify Rapier snapshot compatibility and driver conformance tests | simulation-rapier#1, simulation#4, simulation-matter#2 |
| 71 | P1 | [simulation-custom#1](https://github.com/interactive-project/simulation-custom/issues/1) | Define the reference custom simulation driver and authoring contract | simulation#1, simulation#2, protocol#5 |
| 72 | P1 | [simulation-custom#2](https://github.com/interactive-project/simulation-custom/issues/2) | Create the reference simulation conformance and host portability plan | simulation-custom#1, simulation#4, registry#3 |
