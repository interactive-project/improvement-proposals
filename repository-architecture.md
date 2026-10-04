# Interactive Project repository architecture

This document assigns ownership for the repositories in the `interactive-project` organization and sets the allowed dependency directions. It describes the current repository set as checked on 2026-10-04. Public library packages and their TypeScript package names remain implementation artifacts; no npm scope or package publication is assumed to be available.

## Repository ownership

| Repository | Ownership |
| --- | --- |
| [`protocol`](https://github.com/interactive-project/protocol) | Portable ActivitySpec envelope, generic actions/results/snapshots, schema versioning, capability declarations and validation diagnostics. |
| [`content-node`](https://github.com/interactive-project/content-node) | Portable rich-content node types, content validation and normalization. Protocol owns the generic extension/envelope boundary; this repository owns concrete content-node semantics. |
| [`events`](https://github.com/interactive-project/events) | Versioned activity event envelope, event catalog, subscriptions and delivery semantics. |
| [`registry`](https://github.com/interactive-project/registry) | Plugin metadata, engine and renderer registration, compatibility lookup and lazy resolution. It resolves factories without owning domain implementations. |
| [`core`](https://github.com/interactive-project/core) | The single headless runtime: activity lifecycle, deterministic dispatch, policy/load orchestration, effects and portable persistence. There is no separate `runtime` repository. |
| [`quiz`](https://github.com/interactive-project/quiz) | Quiz schemas, evaluation and attempt/navigation engine semantics. |
| [`flashcards`](https://github.com/interactive-project/flashcards) | Portable decks/cards, study session actions and progress semantics. |
| [`code`](https://github.com/interactive-project/code) | Educational code workspace, editor boundary and isolated execution/evaluation provider contracts. |
| [`diagram`](https://github.com/interactive-project/diagram) | Semantic graph/diagram model, editing actions and assessment semantics. |
| [`whiteboard`](https://github.com/interactive-project/whiteboard) | Portable teaching-board document, geometry, editing transactions and embedding semantics. |
| [`simulation`](https://github.com/interactive-project/simulation) | Portable simulation model descriptors and the trusted SimulationDriver lifecycle/runtime contract. |
| [`renderer-dom`](https://github.com/interactive-project/renderer-dom) | Framework-independent DOM host and reference interaction/accessibility behavior. |
| [`react`](https://github.com/interactive-project/react) | React runtime and renderer adapter. |
| [`vue`](https://github.com/interactive-project/vue) | Vue runtime and renderer adapter. |
| [`svelte`](https://github.com/interactive-project/svelte) | Svelte runtime and renderer adapter. |
| [`collaboration`](https://github.com/interactive-project/collaboration) | Optional collaboration documents, presence and transport/provider adapters, including the planned Yjs integration. |
| [`spaced-repetition`](https://github.com/interactive-project/spaced-repetition) | Standalone review-scheduling model and replaceable scheduler algorithms. |
| [`layout-elk`](https://github.com/interactive-project/layout-elk) | Optional ELK layout driver for the diagram contract. |
| [`graph-cytoscape`](https://github.com/interactive-project/graph-cytoscape) | Optional Cytoscape analysis driver for the diagram contract. |
| [`simulation-matter`](https://github.com/interactive-project/simulation-matter) | Optional Matter.js 2D SimulationDriver adapter. |
| [`simulation-rapier`](https://github.com/interactive-project/simulation-rapier) | Optional Rapier 2D/3D SimulationDriver adapter and WASM initialization boundary. |
| [`simulation-custom`](https://github.com/interactive-project/simulation-custom) | Minimal reference SimulationDriver for non-vendor/custom models and conformance. |
| [`improvement-proposals`](https://github.com/interactive-project/improvement-proposals) | Architecture/dependency decisions, cross-repository proposals, compatibility records and implementation sequencing. This documentation repository is not a runtime dependency. |
| `interactive-academy` (private) | Product application monorepo and consumer of shared libraries; it does not own public protocol or engine contracts. |
| `interactive-labs` (private) | EduPlatform product application and consumer of shared libraries; it does not own public protocol or engine contracts. |
| `interactive-bitcoin` (private) | Currently empty repository with no library/runtime ownership. If populated as an application, it consumes shared libraries rather than defining their contracts. |

The `renderer-dom`, `react`, `vue`, `svelte`, collaboration, scheduling and optional-driver repositories are assigned homes before implementation so later work extends these boundaries rather than creating duplicate runtime or `adapter-*` repositories. As of this check, those repositories are empty; their issue backlogs define the planned contracts. No `runtime`, `adapter-react`, `adapter-vue` or `adapter-svelte` repository exists.

## Interface ownership

Every cross-package interface has one normative owner:

| Interface | Owner | Consumers |
| --- | --- | --- |
| Activity envelope, generic actions/results/snapshots, capabilities and schema evolution | `protocol` | Core, engines, hosts and validators |
| Rich-content node variants and normalization | `content-node` | Engines and hosts; referenced through Protocol's generic content boundary |
| Engine lifecycle, dispatch, effects, host policy and persistence orchestration | `core` | Hosts and domain engines through the Core API |
| Plugin registration and exact engine/renderer resolution | `registry` | Core and hosts |
| Event envelope, catalog and delivery | `events` | Core, engines and hosts |
| Domain specification, validation, evaluation and engine-specific state/actions | Each domain repository (`quiz`, `flashcards`, `code`, `diagram`, `whiteboard`, `simulation`) | Core, renderers and optional drivers |
| Rendering, interaction, focus/keyboard behavior and framework lifecycle binding | The relevant host (`renderer-dom`, `react`, `vue` or `svelte`) | Product applications |
| Vendor integration or optional capability adapter | The relevant driver repository; its underlying contract remains owned by the domain repository | Registry/Core through declared capabilities |
| Cross-repository compatibility decision and migration record | `improvement-proposals` | All affected owners and consumers |

An adapter may translate an owned contract for its host, but it does not redefine that contract. A driver may use vendor objects internally, but those objects and vendor-specific types do not become portable Protocol/Core/domain data.

## Allowed dependency directions

Dependencies point from consumers and adapters toward the contracts they implement. They never point back from a lower-level contract to an application, host framework, domain engine or optional vendor adapter.

| Source | Allowed Interactive Project dependencies | Boundary |
| --- | --- | --- |
| `protocol` | None | JSON schemas and types stay portable; no framework, style, host or domain package dependency. |
| `content-node`, `events`, `registry` | `protocol` | Each owns its package-level contract and remains independent of Core and UI frameworks. |
| `core` | `protocol`, `events`, `registry` | Core resolves engines through Registry; it does not statically import domain engines or host frameworks. |
| Domain engines | `protocol`, `content-node`; `events` and/or `core` as peer integration APIs where required | Engines remain headless and own their domain behavior. Hosts register them through Registry; Core does not depend on engine packages. |
| `renderer-dom`, `react`, `vue`, `svelte` | Core/Registry/Protocol APIs and selected domain renderer contracts | UI framework and styling dependencies stay inside the matching host repository. React, Vue and Svelte remain adapters, not alternate runtimes. |
| Optional drivers | The contract package they implement (for example, `layout-elk` → `diagram`, `simulation-matter`/`simulation-rapier`/`simulation-custom` → `simulation`) | Vendor dependencies stay inside the adapter. Drivers are separately selectable and replaceable; the owning engine/Core does not require them. |
| Product applications | Selected hosts, Core, domain engines and optional drivers | Applications consume shared packages; shared packages never depend on applications. |
| `improvement-proposals` | None at runtime | Documents and decisions are linked by repository URL, not imported as code. |

The active manifests checked on 2026-10-04 follow this shape: `content-node`, `events` and `registry` peer-depend on Protocol; Core peer-depends on Protocol, Events and Registry; domain manifests use Protocol/ContentNode/Events and, where runtime integration needs it, Core as peer dependencies. Dev-only pins do not change runtime ownership. Empty planned repositories must follow the same direction when their manifests are added.

## Cross-repository and breaking-change process

1. Propose a cross-boundary change in `improvement-proposals` before implementing it in a consumer repository. Name the contract owner and every directly affected consumer repository.
2. Include the motivation, exact public surfaces, alternatives, compatibility impact, migration steps, security/privacy/accessibility implications, conformance fixtures and rollout order. Do not publish or imply an npm package name is available as part of the proposal.
3. The contract-owning repository approves changes to its interface. A breaking change also requires review/approval from maintainers of every directly affected consumer repository. Record the decision and approvals in a versioned decision document linked to the proposal.
4. Land the contract and fixtures in the owning repository, then update consumers in dependency order. Breaking changes require an explicit source/target version and loss-aware migration or a documented rejection path; silent contract drift is not allowed.
5. Before any npm release, verify control and availability of the chosen npm organization/scope and package names, then publish the compatibility matrix and versioning/migration policy. Current `@interactive-project/*` manifest names are not proof that the npm scope is owned or available.

## Evidence and limits

The repository ownership map was checked against all 26 repositories accessible in the organization on 2026-10-04, including their current package manifests where present. Product repositories are classified as consumers; empty repositories are assigned their planned contract role. Package publication, npm scope availability and release permissions remain unverified and are deliberately outside this architecture decision.
