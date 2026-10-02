# Events v1 compatibility

Events issue #1 owns the eventVersion 1.0.0 envelope and 19 exact namespaced lifecycle/domain payloads, with Protocol 1.0.0 identity, activity type and result contracts reused offline. Existing Protocol schemas remain unchanged; Protocol has no dependency on Events.

Per-source safe-integer sequences order one producer lifetime. Epoch millisecond timestamps are observation metadata, never a global clock guarantee. Retries preserve occurrence identity. Attempt/answer events require attempt correlation; completion embeds a matching completed/unevaluable result. Unknown required type/version rejects; optional namespaced extensions preserve JSON and cannot authorize execution/network.

Closed catalog payloads omit raw learner answers/source/output by default. Producers still enforce safe public messages and host-controlled export policies. Delivery/subscription guarantees and telemetry sinks remain Events #2/#3. Repository implementation is not an npm publication or engine release claim.

Event schema evolution follows the Protocol explicit migration and oldest/newest release gate. No prior released event contract requires migration. Contract: interactive-project/events/docs/events-v1.md.
