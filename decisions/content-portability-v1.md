# Content portability v1 compatibility decision

Decision date: 2026-10-04. Direct implementation was authorized for content-node#3 after the issue was initially published as planning-only backlog.

Canonical normalized ContentNode values must remain semantically equal after JSON serialize/parse/normalize round trips. This is a data-equality guarantee, not a promise of byte-identical serialization across arbitrary runtimes. Unknown kinds and schema versions remain invalid; changed variants require an explicit, versioned source-to-target migration with source and target validation and a documented loss policy. ContentNode 1.0.0 has no earlier released data to migrate.

A portable activity export preserves AssetRef identity, attribution and integrity. It must include asset bytes in a bundle/catalog or a durable HTTPS/URN locator. `blob:`, `data:`, filesystem, temporary signed/query-bearing locators and provider credentials are not durable portable data. Unavailable assets retain their identity and text alternative rather than being silently substituted; a URN is resolved only by a trusted host catalog.

The same mixed-content fixture is exercised at quiz prompt, flashcard face, diagram label and whiteboard object positions inside Protocol ActivitySpec envelopes. Those fixtures verify shared-envelope serialization only; the owning domain repositories must define and validate their concrete configs. Locale tests preserve Arabic RTL and default-locale fallback. The renderer contract remains an optional host-owned extension with explicit unsupported-content fallback.

No public wire schema changed, so this issue requires no data migration or package release.
