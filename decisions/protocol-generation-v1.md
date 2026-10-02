# Generation v1 compatibility decision

Decision date: 2026-10-02; authorized by the user's sequential implementation request.

Add an optional exact-version generation catalog and a structural → semantic → permission → capability validation adapter. Capability declarations describe support and conditional driver prerequisites and never grant host permissions. Domain validators are trusted registered side-effect-free functions; generated JSON cannot supply code, schemas or policy. The host policy is captured before callbacks, default-denied and limited to stricter input budgets.

Wire contracts for existing ActivitySpec, validation results and interoperability are unchanged. Bounded generated parsing rejects duplicate decoded member names, nonfinite/unsafe-integer numbers and inputs above documented ceilings. These are generated-input adapter policies and require explicit rejection rather than migration or silent data coercion. No authored-document migration is needed.

The production available-generation catalog is empty until concrete domain schemas/engines pass their own gates. Test entries are isolated fixture-only version 0.0.1, not claims of shipping domain compatibility. Conditional offline support cannot coexist with an unconditional network requirement. Runtime execution/media/network resource enforcement remains a trusted host responsibility.

The exact verified commit, PR, merge and issue closure will be recorded in execution-queue.json. This decision does not complete governance or cross-host integration gates.
