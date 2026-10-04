# Core runtime conformance v1

Date: 2026-10-04

## Decision

Core #5 was implemented as a headless, fixture-driven integration gate across Protocol 1.0, Registry 1.0, Events 1.0 and Quiz 1.0. A generated learner Quiz is validated, loaded through Registry/Core, answered, evaluated, checked for event conformance, serialized, and restored into a fresh engine. Invalid learner data and a catalog without aiGeneratable support are rejected before engine construction.

Registry exports capability and permission arrays in canonical sorted order; Core now compares those fields as sets while preserving exact type, activity version, schema ID, support flags, and required drivers. This is a compatibility correction in Core's loading comparison, not a wire-schema change.

## Boundaries and compatibility

- Core remains a repository implementation; no npm publication or package-scope availability is asserted.
- Protocol, Events and Registry wire contracts are unchanged. Quiz and Content Node are exact-SHA dev dependencies for the fixture, not Core peer dependencies.
- The Quiz schema references Content Node through a cross-repository URI. Registry's generic schema helper intentionally rejects remote references, so validation uses Quiz's bundled trusted validator. No schema is fetched over the network.
- The Registry `dom` host is exercised with a minimal mount-port object in Node. This covers host resolution and renderer lifecycle, not browser DOM, accessibility, or layout. The renderer-dom repository has no implementation yet.
- The custom state-machine facade documents an adapter seam only; there is no direct XState dependency or release claim.
- Snapshots remain version-bound; no migration or existing serialized data change was introduced.

## Verification

- Core PR: https://github.com/interactive-project/core/pull/10
- Implementation commit: `1ac7ffc0ef1221812e5127ae35bb7b20b8f63c0e`
- Merge commit: `502afd9bb2c9bea9303537c25f9a2e9d017b87f7`
- GitHub Actions run 37177887689 passed on Node 22.
- Local `npm ci --ignore-scripts`, `npm test`, `git diff --check`, and `npm pack --dry-run --json` passed.
