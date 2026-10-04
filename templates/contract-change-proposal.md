# Contract / release change proposal

> Copy this file for each cross-repository public-contract change. Fill every section; write `not applicable` with a reason instead of leaving an ambiguous blank. A proposal does not itself authorize a package release.

## Metadata

- Proposal ID / status / date:
- Authors and accountable contract owner:
- Reviewers required from affected repositories:
- Target package(s), proposed version(s), and target release window:
- Related issue(s), pull request(s), and prior decision(s):

## Motivation and scope

- User or maintainer problem and evidence:
- Goals:
- Non-goals and unsupported cases:
- Why this belongs to the named normative owner:

## Affected contracts and consumers

| Repository/package | Owned or consumed contract | Current package/contract versions | Proposed versions | Consumer impact |
| --- | --- | --- | --- | --- |
| | | | | |

- Serializable public data changed? List exact schemas, fields, actions, events, snapshots or plugin-manifest fields.
- Framework/vendor objects or credentials introduced into any portable payload? (Must be no; explain internal adapter boundaries.)
- Dependency direction checked against `repository-architecture.md`?

## Compatibility and versioning

- Compatibility classification: patch-compatible / additive-minor / breaking-major / major-zero change.
- SemVer rationale, contract-version change and release order:
- Protocol, Core, Registry, domain, plugin, adapter/framework and external-driver ranges:
- Lowest and highest versions in every advertised range, and the fixture/CI evidence for each:
- Unsupported/out-of-range behavior:
- Compatibility matrix rows/files to update:

| Consumer combination | Declared range | Lowest tested | Highest tested | Shared fixture revision | CI commit/run | Result |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

## Migration, deprecation and rollback

- Source and target package/contract/data versions:
- Ordered upgrade and migration steps, including pre- and post-migration validation:
- Data preservation, opaque extensions, backups and any lossy behavior:
- Deprecation announcement date, replacement, minimum support window and removal release:
- Rollback/recovery plan and owner:
- Persisted ActivitySpec, event, snapshot or learner data affected:

## Security, privacy and accessibility

- Threat/permission review (network, assets, code execution, dependency scripts, credentials, supply chain):
- Data minimization, retention and privacy implications:
- Keyboard, focus, screen-reader, localization, RTL, reduced-motion and nonvisual alternatives:
- Known gaps and acceptance owner; metadata alone is not UI-conformance evidence:

## Conformance and release gate

- Shared fixture suites and exact source revisions:
- Valid, invalid, oldest/newest boundary and just-outside-range cases:
- Cross-language / cross-host / cross-driver combinations affected:
- Clean packed-artifact consumer, type/import and security checks:
- GitHub Actions run URLs on exact implementation commits:
- All affected repos and owners have approved the compatibility decision:

## Package identity and publication readiness

- npm scope ownership verified by / timestamp:
- Exact package name lookup and result (`npm view ...`):
- Package owners/access mode and intended public/private status:
- Packed file list, declarations/exports, license and integrity/provenance check:
- Publication explicitly authorized as a separate task? (Default: no.)

## Decision and follow-up

- Decision: accepted / rejected / deferred, rationale and approvers:
- Matrix, fixtures, migration guide, changelog and release notes updated:
- Unsupported combinations or residual risks:
- Follow-up issues and accountable owners:
