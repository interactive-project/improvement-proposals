# DOM accessibility and interaction contract v1

Date: 2026-10-04

## Decision

Use native button controls for built-in Quiz and Flashcards interactions. Preserve browser Tab/Enter/Space behavior; restore focus after state-changing actions; announce loading, feedback, progress and errors through status/live regions. Quiz question navigation uses one roving Tab stop plus direction-aware arrows and Home/End. English, Spanish and Arabic UI strings are bundled, hosts can localize UI and ContentNode fallback messages, and locale metadata sets `lang`/default `dir`.

Keep rendering framework-neutral through `data-ip-part`, `data-ip-slot`, bounded `--ip-*` tokens and an optional element hook. Built-in components have no animation or transition; the host provides the reduced-motion preference for its own styles.

For nonvisual use, hosts can select `interactionMode: "nonvisual"`. The built-in renderer skips visual ContentNode drivers and retains schema-provided accessible text alternatives. Registered advanced-activity renderers receive this mode and a `dispatchAction(kind, payload)` helper that supplies host-owned identity, sequence and cancellation. The host does not synthesize unknown domain actions; advanced types must register their own domain-aware semantic controls.

## Compatibility and limits

No Protocol, ActivitySpec, Quiz/Flashcards schema, snapshot or event wire contract changed. Changes are additive to `@interactive-project/renderer-dom`; no data migration or package publication is required. Unregistered activity types remain unsupported. Headless DOM tests and CI are not equivalent to browser accessibility-tree or assistive-technology certification; manual scenarios are recorded in the package guide but were not run.

## Verification

- Implementation PR: https://github.com/interactive-project/renderer-dom/pull/5
- Implementation commit: `c5b294e97267952b4c282a85f0760f808e5d9ae4`
- Merge commit: `85372cae5aa72440af8a94e45fa0eceb93db1125`
- GitHub Actions run 37180866999 passed on Node 22, including `npm test` and `npm pack --dry-run`.
- Local Node 24.19.0 `npm ci --ignore-scripts`, `npm test` (strict TypeScript consumer), `npm pack --dry-run` and `git diff --check` passed.
- Tests cover Quiz/Flashcards focus and keyboard transitions, localization/RTL, reduced-motion metadata, hooks/tokens, ContentNode fallbacks and a custom nonvisual simulation renderer/action.
- Manual keyboard, reduced-motion and assistive-technology scenarios: documented, not executed.

See `renderer-dom/docs/accessibility-acceptance.md` and `renderer-dom/docs/dom-host-v1.md`.
