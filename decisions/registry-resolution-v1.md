# Registry resolution v1

Registry #2 adds explicit exact/half-open-range discovery anchored to the requested major, deterministic highest-version selection, and separate host/permission/capability/required-driver rejection explanations. Authored documents are never silently version-upgraded or migrated.

Trusted live loader definitions declare exact transitive protocol requirements. Construction rejects cycles/missing/conflicting dependencies; concurrent requests share loading with per-waiter cancellation, bounded timeout/retry/cache behavior and safe diagnostics. Host code owns URLs, networking/offline authorization and cooperative cleanup. Results are live ports, not portable data or automatic registration.

Protocol/manifest wire schemas unchanged; no data migration required. Fixture missing-WASM/offline/four-host tests certify lookup seams, not real browser/WASM releases. Core's ordered config-dependent checks and generation export remain later gates. Contract: interactive-project/registry/docs/resolution-v1.md.
