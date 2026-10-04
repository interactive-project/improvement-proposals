# Content rendering v1 compatibility decision

Decision date: 2026-10-04. Direct implementation was authorized for content-node#2 after the issue was initially published as planning-only backlog.

Add `@interactive-project/content-node/rendering` as an optional host-neutral orchestration API. It owns renderer capability selection, deterministic priority, lifecycle, localization of recovery states, safe URI decision helpers, and accessible plain-text fallback. Concrete DOM/React/Vue/Svelte adapters and Markdown/math/media implementations stay in their host repositories; no UI or Markdown dependency is added here.

Portable ContentNode, Protocol, ActivitySpec, and stored-data schemas remain unchanged. The registry supplies an escape-only raw HTML policy for trusted Markdown adapters, exact scheme/origin checks, and host callbacks for media retrieval. Hosts retain network permission, redirect/origin revalidation, integrity/MIME/resource checks and actual accessibility semantics. Math and code drivers must preserve source and the declared nonvisual alternative; code remains display-only.

The four framework entries are semantic conformance profiles with distinct ephemeral result shapes, not production integrations. Their host repositories must add real integration and accessibility tests. This change is additive and requires no data migration or package publication.
