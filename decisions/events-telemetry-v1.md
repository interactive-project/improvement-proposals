# Events telemetry export v1

Date: 2026-10-04

## Decision

Add telemetry as an optional `@interactive-project/events/telemetry` consumer of validated ActivityEvents. It projects through an allowlist into immutable, serializable records and queues one delivery per registered sink. Existing event and Protocol schemas remain unchanged.

Collection is denied until the host opts into consent. Identifiers, assessment scores and finer timestamp precision require explicit policy options. Arbitrary extensions, evidence references, free text, raw answers, source code and identity enrichment are not exported. The occurrence UUID is retained only as the stable idempotency key for retries.

The queue is bounded, in-memory and host-flushed. Retention and retry attempts have hard ceilings; diagnostics contain static codes only. Cancellation is cooperative, and no exactly-once or durable delivery guarantee is made. A sink may map the record into xAPI or another evidence system without adding that format or a vendor client to Events.

## Rationale and consequences

Separating the API from the local bus ensures transport, consent and backpressure cannot change activity state or block local operation. The conservative projection reduces accidental disclosure, but a host remains responsible for consent UX, sink authorization, transport security, remote retention/deletion and any identity mapping. An in-flight request already accepted remotely cannot be recalled.

There is no wire migration. Consumers that do not import the optional subpath are unaffected. The package has not published a durable queue, automatic network transport, xAPI adapter, or raw-data enrichment API.

## Verification

- Implementation PR: https://github.com/interactive-project/events/pull/6
- Merged commit: `7251000eee1ddefafb8f760aadd8e6ca7f96dfa3`
- GitHub Actions run 37176497492 passed; local npm, strict TypeScript and package dry-run checks passed.
