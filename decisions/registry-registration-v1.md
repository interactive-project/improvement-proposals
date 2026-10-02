# Registry registration v1

Registry #1 introduces manifestVersion 1.0.0 with Protocol GenerationEntry schema references and separate live engine/evaluator and renderer ports. Protocol wire schemas and dependency ownership remain unchanged.

Exact type/protocol/domain-version slots separate engines from per-host renderers. Duplicate IDs/overlapping claims reject atomically; replacement requires explicit unregister. Captured resolutions keep already-running sessions owned by their original engine. Registry never loads a framework, calls a factory or disposes caller-owned sessions during registration/lookup/removal.

Fixture-only quiz and four host-port stand-ins demonstrate the boundary without claiming real React/Vue/Svelte/DOM integration, production domain release or npm publication. Negotiation/lazy loading and generation export remain #2/#3. Contract: interactive-project/registry/docs/registration-v1.md.
