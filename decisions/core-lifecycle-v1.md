# Core lifecycle v1

Core #1 implements synchronous headless lifecycle and portable-state transactions behind a Protocol-compatible live EngineSession. Existing Protocol/Events wire schemas unchanged; no UI/styling/framework dependency is introduced.

Frozen candidate state, injected clock/random/UUID/services, post-commit notifications and verified Events delivery isolate subscriber failures from committed engine state. Reducers and pure state-machine facades share the same contract; vendor actor/snapshot objects stay live and outside JSON. Fixture parity does not certify a particular XState or production quiz release.

Core's local retained outbox is not durable remote delivery. Load pipeline, asynchronous effects and transactional/digest-bound snapshots remain #2/#3/#4. Snapshot/async operations explicitly reject in this initial phase; no resumability capability is advertised. Contract: interactive-project/core/docs/lifecycle-v1.md.
