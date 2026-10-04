# Registry generation catalog v1

Date: 2026-10-04

## Decision

Add an optional `@interactive-project/registry/catalog` entry that derives a fresh, immutable Protocol GenerationCatalog v1 from current engine registrations. The projection contains only schema-approved JSON descriptors, sorts by type and numeric schema version, and returns a stable non-cryptographic FNV-1a-64 cache invalidation key. No factories, plugin IDs, host services or credentials are exported.

Host permission policy defaults to deny. Hosts may restrict capabilities and list available drivers; entries with denied required permissions or unavailable required capabilities are omitted, and optional unsupported capabilities are marked false. Driver IDs are hidden when that capability is unavailable. Credential-bearing schema IDs are omitted.

Schema documents stay outside the catalog. A schema ID can be resolved only through a host-owned synchronous local resolver after exact membership in the catalog is checked. Copying is bounded to 256 KiB by default/1 MiB maximum and rejects remote JSON Schema references. Consumers still validate schemas before structured generation.

## Conformance and compatibility

The fixture suite validates Protocol actions, dispatch results, results and resumable snapshots, plus an Events v1 lifecycle trace. It is evidence for the host/plugin seam only, not a production engine or Core release claim. Events is a pinned development-only dependency.

No manifest or Protocol wire schema changes; existing authored data needs no migration. The new catalog API is an additive optional package subpath. Catalog key is not suitable for signing, integrity, or authentication.

## Verification

- Implementation PR: https://github.com/interactive-project/registry/pull/6
- Merged commit: `e6ef81f960cc4cf2ec7a83a57b617d3ed65969a2`
- GitHub Actions run 37177288415 passed, including clean install and full Registry conformance tests.
