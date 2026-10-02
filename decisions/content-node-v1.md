# Portable ContentNode v1

content-node#1 owns concrete text, markdown, TeX source, image, display-only code, audio, video and bounded recursive groups. Protocol 1.0.0 owns shared LocalizedText, Accessibility, AssetRef and ContentRef and has no dependency on content-node.

Existing Protocol schemas remain unchanged. content-node uses exact versioned shared refs resolved offline from the pinned installed Protocol package. No preexisting released ContentNode data requires migration. New domain-owned content uses schemaVersion 1.0.0 and closed variants.

Normalization preserves source meaning except documented newline and locale canonicalization, rejects locale collisions and returns frozen isolated JSON. Assets remain identities/locators; they grant no fetch or execution permission. Display snippets cannot become executable code activities. Formula source cannot become renderer/native markup in portable data.

Headless structural/semantic validation, normalization and JavaScript/Python/TypeScript fixtures are implemented. Browser sanitization/rendering/accessibility and concrete engine integration remain separate issues. No npm publication is asserted. Dependencies are pinned for CI; host decoding, integrity, origin and runtime resource enforcement remain host-owned.

Contract: interactive-project/content-node/docs/content-v1.md.
