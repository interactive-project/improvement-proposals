# Shared content v1 compatibility decision

Decision date: 2026-10-02. Implementation authorized by the user's request to implement the Interactive Project issue queue.

Add independently versioned ContentRef, LocalizedText, Accessibility and AssetRef contracts owned by protocol. Concrete content variants remain owned by content-node; protocol imports no domain or UI library. Package export additions are optional. ActivitySpec v1 fields, allowed values and validation-result v1 diagnostic catalog remain unchanged. Existing authored documents require no migration.

Structural validation is authoritative JSON Schema Draft 2020-12 with local references only. Locale canonicalization, default translation membership and asset locator restrictions are explicit semantic checks after structural validation. Consumers must declare supported locale/ICU behavior and domain schema versions before enforcing these shapes on opaque configs. Hosts resolve content and assets through their own catalog and policy; serialized data carries no provider credentials or execution capability.

This decision is reviewable implementation evidence for protocol #3. It does not mark improvement-proposals #1–#3 or any integration gate complete. Core/renderer releases do not yet provide cross-host compatibility evidence. The implementation branch and exact CI commit will be recorded in execution-queue.json after verification.
