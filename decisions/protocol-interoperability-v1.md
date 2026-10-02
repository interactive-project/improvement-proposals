# Interoperability v1 compatibility decision

Decision date: 2026-10-02; implementation authorized by the user's sequential Interactive Project task.

Add independently versioned action, dispatch-result, evaluation-result and snapshot contracts, with optional live EngineDriver/EngineSession type ports. ActivitySpec v1 and validation-result v1 remain unchanged. Results use normalized 0–1 scores, explicit pending/failed/unevaluable statuses and revision-bound identities. Snapshots carry authored SHA-256 identity and independently versioned engine/driver state. Resource policy, lifecycle/effects and restore authorization remain owned by Core and trusted hosts.

The authored digest uses documented protocol-json-v1 canonical serialization; each language/driver must verify its implementation before claiming compatibility. New package entries are optional, and authored documents need no migration. Snapshot migration and concrete engine-state compatibility will be declared by protocol #6 and consuming libraries. No concrete Core or host version is currently claimed.

The implementation must pass cross-language structural fixtures, real digest checks, identity/version rejection cases and TypeScript public consumer checks before merge and issue closure. Publishing this decision does not complete any governance issue or integration gate. Exact PR/commit/CI evidence is recorded in execution-queue.json after the sequential completion cycle.
