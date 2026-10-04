# Quiz interoperability and generation acceptance v1

Date: 2026-10-04

## Decision

Quiz is the first validated end-to-end reference engine for Protocol, Registry, Events and Core. Its manifest fixes Protocol 1.0.0, Quiz activity/schema 1.0.0, learner schema ID, plugin 0.1.0, engine ID and state version. The `evaluable` capability requires a host-injected evaluator. The practice manifest is local/offline; a remote evaluator needs a host-specific manifest/catalog with network permission and host enforcement.

The headless acceptance suite round-trips every v1 response kind, rejects unsupported Protocol/snapshot/activity/engine versions and identity/digest/driver mismatches atomically, and validates generated quiz JSON before factory construction through structural, semantic, permission and capability gates.

## Host and accessibility boundaries

A shared golden action/event trace names headless, DOM, React, Vue and Svelte hosts. It is currently executed headlessly. The other four are future adapter gates; no visual renderer compatibility is claimed. Accessible question/choice names, keyboard alternatives, equivalent experiences, localization and RTL requirements are specified with fixtures. Formula, essay, oral and hotspot remain explicitly deferred versioned extensions.

The Quiz schema contains a cross-repository Content Node reference. The integration uses Quiz's bundled trusted validator because Registry's generic resolver intentionally rejects remote schema refs. No runtime fetch is used.

## Compatibility

No Protocol, Events, Quiz wire schema or existing snapshot format changed. Unsupported snapshot versions reject; no cross-version migration is claimed. CI pins reviewed dependency commit SHAs and runs on Node 22. Pins are repository test dependencies, not an npm publication claim.

## Verification

- Implementation PR: https://github.com/interactive-project/quiz/pull/8
- Implementation commit: `69f14c034969fdcb355fbdd99cb74f8df81d7edc`
- Merge commit: `6495ba927bc4de93400b46f172f00bb8d7076846`
- GitHub Actions run 37178509943 passed on Node 22.
- Local `npm ci --ignore-scripts`, `npm test`, `git diff --check` and `npm pack --dry-run --json` passed.
