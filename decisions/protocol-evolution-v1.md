# Protocol evolution and compatibility v1

Protocol issue #6 adds immutable-version evolution guidance, an optional lossless-only migration reference, an exact compatibility matrix and 30 explicitly planned domain/host suites. Existing schemas and schema IDs remain unchanged; no authored migration or package publication is asserted.

Compatibility is directional and behavior-based. Exact source/target validators and ordered trusted migration paths must preserve all original data, including opaque optional extensions. Unsupported required capabilities/drivers fail before execution. Engine, driver and authored versions remain independent. The reference adapter rejects lossy transformations; intentional destructive conversion requires a separately reviewed explicit-choice and original-retention workflow.

Only repository-implemented protocol 1.0.0 contracts are currently advertised. Events, Core, concrete engines and UI hosts remain planned with empty support lists. Release gates require exact-commit evidence for oldest/newest supported contracts, migrations and actual host/browser behavior. Planned suites are not passing release evidence.

Implementation: interactive-project/protocol/docs/evolution-v1.md, catalogs/compatibility.v1.json, catalogs/conformance-plan.v1.json and evolution/index.js.
