# Independent releases and compatibility governance v1

This policy separates repository development from package publication. It is normative for proposals that change a public contract, package dependency, plugin manifest, host adapter or external driver. The machine-readable baseline is [`compatibility-matrix.v1.json`](compatibility-matrix.v1.json); the required evidence is [`release-gate.v1.json`](release-gate.v1.json). The npm scope and package-name availability have not been verified; no package publication is authorized by this document.

## Independent versioning

- Each repository/package has its own SemVer version and changelog. A change does not force unrelated packages to release in lockstep.
- Before `1.0.0`, compatibility is conservative: internal peer dependencies pin an exact tested package version unless a proposal names and tests a wider range. A breaking change may use a new `0.minor.0`; `0.patch` is reserved for compatible fixes. Do not infer a stable API from the major-zero version.
- From `1.0.0`, patch releases are backward-compatible fixes, minor releases are additive and backward-compatible, and major releases may remove or incompatibly change supported behavior. Package SemVer and Protocol/schema/manifest versions are separate axes; increment the contract version when that contract changes incompatibly even if another package can remain on the same version.
- Every consumer must declare the package ranges it actually supports. A range is a tested promise, not a guess derived from semver syntax. For each range, CI tests its lowest and highest included supported version. Unsupported versions fail explicitly.
- Plugin `pluginVersion` is independent from `protocolVersions`, activity-schema versions, renderer-contract versions and host adapter versions. Exact versions advertised by a manifest remain exact claims. Core and external-driver compatibility must also be recorded in the matrix because current plugin manifests do not encode every dependency dimension.

## Compatibility matrix requirements

Before implementation approval, a proposal identifies affected owners and updates the matrix with:

1. Repository, npm package name (or `not yet assigned`), package version and publication status.
2. Exact tested peer ranges for Protocol, Core, Registry, domain packages, adapters/framework peers and external driver/vendor packages.
3. Public contract versions carried by those packages, plus the oldest and newest versions tested.
4. Shared fixture suite names, source commit SHAs, consumer commit SHAs and CI run URLs for each advertised combination.
5. Known unsupported combinations, migration requirements and the owner responsible for removing them.

The checked-in baseline records the repository manifests observed on 2026-10-04 and pins each implemented package row to the exact source commit inspected. It does not claim npm availability or release compatibility for planned adapters/drivers. An absent range is a release blocker, not a wildcard. The matrix must not advertise support based only on a package manifest, a successful single-version smoke test or an unmerged proposal.

## Cross-repository test and release gate

Run the gate on the exact proposed commit and every affected package/consumer commit. A release is blocked if a required owner, compatibility range, fixture result, migration note or artifact check is missing.

1. **Proposal and ownership:** complete `templates/contract-change-proposal.md`; identify the normative contract owner, downstream consumers and required review approvals. Contract ownership follows `repository-architecture.md`; consumers may not redefine upstream semantics.
2. **Range selection:** resolve all peer, plugin, adapter and vendor ranges from the matrix. Test the lowest and highest versions in every declared range; include a just-outside-range rejection. Major-zero packages use exact pins unless wider ranges have explicit fixture evidence.
3. **Shared conformance:** run relevant shared valid, invalid and boundary fixtures in each affected implementation. At minimum, schema changes run Protocol's shared fixtures in JavaScript and an independent validator; engine changes run action/result/event/snapshot traces; Core changes load through Registry and exercise cancellation/persistence; hosts/adapters consume the same semantic traces and accessibility scenarios; drivers run the owning domain's contract fixtures against each advertised backend. Record fixture revisions and exact CI commit SHAs.
4. **Integration and package boundary:** install the packed artifacts—not workspace aliases—into a clean consumer fixture. Run type/import checks, `npm pack --dry-run`, and security checks for install scripts, remote schema/media access and secret leakage. Test the oldest and newest supported dependency combinations, not just the latest workspace graph.
5. **Migration and deprecation:** validate source data before migration and target data afterward; preserve opaque optional extensions and originals; require explicit user choice for lossy transformations. Publish migration notes and an upgrade order before a breaking package release.
6. **Release readiness:** verify the npm scope/name and package ownership, changelog, provenance/access mode and rollback owner. Release prerequisites before consumers in this order: Protocol contracts; ContentNode, Events and Registry; Core; domain engines; framework/DOM hosts and adapters; optional vendor drivers; product consumers. Independent packages may be omitted only when the matrix proves they are unaffected.
7. **After release:** install the published artifacts into the clean fixture, record registry version/integrity and smoke-test supported combinations. Do not mark planned compatibility as supported until this post-release evidence exists.

The gate is deliberately evidence-driven: a GitHub Actions job can pass while an advertised combination is still untested. `fixtures/release-readiness.v1.json` includes ready, rejected, blocked and inclusive/exclusive boundary examples used by the local governance checker.

## Deprecation and upgrade windows

For a stable (`>=1.0.0`) public API, announce deprecation in release notes and API docs, provide the replacement and migration steps, and keep the old path working for at least **two subsequent minor releases and 90 days**, whichever is longer. Do not remove it before both conditions are satisfied. For a major-zero package, where a minor may be breaking, retain the deprecated path for at least 90 days and one documented consumer upgrade cycle; exact source/target package and contract versions still need migration guidance. A critical security or data-integrity issue may shorten the window only with an explicit owner-approved exception, a safe mitigation, and a recorded compatibility decision. Never silently rewrite or discard persisted user data.

## npm name and publication checks

Before reserving or publishing a package, an owner must verify that the organization controls the `@interactive-project` scope and that the exact lower-case package name is available or already owned by this project. Use authenticated npm account/scope access checks and a registry metadata lookup such as `npm view '@interactive-project/your-package-name' name version --json`; if it exists, verify ownership and intended continuity rather than assuming it is ours. Record the checked name, timestamp, account/org owner and result in the proposal/matrix. Do not put tokens in the repository or logs.

Then verify the package's `name`, `exports`, declarations, license, included files and dependency ranges from the packed artifact; run a clean consumer install and `npm pack --dry-run`. Use the intended public/private access explicitly, provenance where supported, and the project's approved release identity. Publication is a separate authorized release action: backlog work, this governance change and CI must never run `npm publish`.

## Current limits

The matrix is an observed repository baseline, not a publication report. React/Vue/Svelte adapters and optional driver packages have no checked-in package manifests yet. Their compatibility and external vendor ranges must be chosen and tested before any release claim. No npm scope/name lookup, browser matrix or package release is claimed here.
