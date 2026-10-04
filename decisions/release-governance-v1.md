# Independent release and compatibility governance v1

Date: 2026-10-04

## Decision

Version repositories independently. Require a compatibility matrix for Protocol, Core, Registry/plugin manifests, domain schemas, host adapters/framework peers and external drivers/vendor dependencies. A declared range is supported only when its lowest and highest combinations pass the owning shared fixtures and exact-commit consumer CI. Major-zero internal package dependencies default to exact tested versions; wider ranges need evidence. Plugin package, Protocol, activity-schema and renderer-contract versions remain separate.

Cross-repository release readiness is blocked by missing ranges, shared conformance results, clean packed-artifact consumer checks, migration/deprecation notes or verified package identity. Release dependencies before consumers: Protocol, shared content/events/registry, Core, domain engines, hosts/adapters, optional drivers, then product consumers. Stable API deprecations remain for at least two minor releases and 90 days. Package names/scope ownership must be checked before any publication; backlog changes and governance CI never publish packages.

## Compatibility and current status

`compatibility-matrix.v1.json` records package manifests observed on 2026-10-04, with npm publication explicitly `not-verified`. Current internal peer requirements are exact `0.1.0` pins, with AJV peer ranges where declared. React/Vue/Svelte and optional driver packages have no package manifests; they remain blocked from compatibility or publication claims until their contract/framework/vendor ranges and fixture evidence are supplied.

No Protocol, Core, domain, event or plugin-manifest wire contract is changed by this governance policy. Migration instructions apply only when a future proposal changes persisted public data. No npm name was reserved or package published.

## Verification

- `node scripts/check-release-governance.mjs`
- GitHub Actions `Governance artifacts` validates matrix dimensions, gate stages and valid/invalid/boundary readiness fixtures on PRs to this repository.
- Manual review: repository package manifests were read from main; the policy records their existing exact peer dependencies and marks unverified/planned ranges as blocked.
