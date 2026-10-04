# Simulation time stepping v1 compatibility

The simulation package adds a host-driven fixed-step clock, bounded elapsed-time accumulation, pause/resume and a seeded random source in trusted driver contexts. Hosts provide monotonic elapsed time; the package does not schedule rendering or read wall-clock time. Large frame gaps are clamped and reported, and each `advance` call runs no more than its configured catch-up budget.

The Mulberry32 source is non-cryptographic and scoped to one initialize, step or reset operation. State and random advancement commit together only after the returned state passes validation. The seed resets with the simulation. Determinism remains conditional on the driver, its version, platform and successful random draw order; nondeterministic drivers require tolerance-based conformance checks.

This is an additive API owned by `interactive-project/simulation`. Existing ActivitySpec, DriverManifest, Protocol, Core and snapshot wire schemas remain unchanged. Hosts may call the new `advance` API from their own render cadence or continue to call manual `step(dt)`. Per-step cancellation does not interrupt synchronous CPU work; hard resource isolation remains host-owned. Full runtime semantics: [simulation/docs/time-stepping-v1.md](https://github.com/interactive-project/simulation/blob/main/docs/time-stepping-v1.md).
