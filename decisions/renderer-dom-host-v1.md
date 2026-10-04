# Vanilla DOM host lifecycle v1

Date: 2026-10-04

## Decision

Implement the initial framework-independent DOM host as an optional Registry renderer package. The host performs separate exact engine and `host: "dom"` renderer lookups, creates and owns each EngineSession, forwards cancellation/services, and tears down renderer, child mounts, subscriptions and session on unmount. DOM access is injected through the mount's ownerDocument; imports and headless engine use require no browser globals.

The built-in v1 renderers cover Quiz single-choice, multiple-choice and true/false plus the basic Flashcards reveal/rate/acknowledge/next trace. Quiz uses semantic Protocol actions; flashcard study lifecycle uses RuntimeSession start/complete ports. ContentNode drivers handle trusted host rendering; the default driver creates text nodes, and unsupported content preserves its accessible text. Host media resolvers remain policy-controlled. No authored HTML is inserted.

## Compatibility and limits

No Protocol, ActivitySpec, Quiz/Flashcards schema, snapshot or event contract changed. Renderer manifests target Protocol 1.0.0, Registry renderer contract 1.0.0 and activity schema 1.0.0. Unsupported versions resolve as unsupported; no migration is attempted. Other quiz kinds, React/Vue/Svelte adapters, child-activity composition beyond explicit owned mounts, full browser/assistive-technology certification and npm publication are not claimed.

## Verification

- Implementation PR: https://github.com/interactive-project/renderer-dom/pull/4
- Implementation commit: `f240137dc620ab4532ca2fd52504aef758d8e8c1`
- Merge commit: `cb9aa81f061e30ece153a8d5a0d8652748ae64f6`
- GitHub Actions run 37179797630 passed on Node 22.
- Local Node 24.19.0 `npm ci --ignore-scripts`, `npm test`, `git diff --cached --check` and `npm pack --dry-run` passed.
- Tests use real Quiz and Flashcards sessions with a headless DOM contract and verify semantic traces, validation/error states, separate mounts, ContentNode fallback, child/listener cleanup, late session disposal and asset cancellation.

See `renderer-dom/docs/dom-host-v1.md` for the implementation contract.
