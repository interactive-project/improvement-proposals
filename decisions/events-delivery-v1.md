# Event delivery v1

Events #2 adds an optional live bus for one activity/session/source stream. Existing event/Protocol wire schemas are unchanged. No UI or remote transport dependency is introduced.

Events are copied, validated and frozen. Admission enforces contiguous sequences and bounded count/bytes. FIFO reentrant dispatch, explicit retained-tail replay, idempotent unsubscribe and disposal have deterministic local semantics. Callback exceptions/promises and diagnostic failures are isolated from other subscribers and already-committed engine state.

The bus is not a durable transaction coordinator. Core must reserve/preflight a bounded outbox before committing and retain/retry pressure-rejected occurrences without silent rollback. Retained IDs detect local duplicates/conflicts; source high-water rejects old sequences beyond finite retention. Remote idempotency, privacy and delivery remain Events #3.

Exact lifecycle emission points and integration obligations are in interactive-project/events/docs/delivery-v1.md. Tests cover completion observer failure, replay/reentrancy, bounded pressure and disposal. Concrete Core/browser/sink conformance remains its own release gate.
