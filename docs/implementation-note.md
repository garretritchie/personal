# Implementation Note

## Architecture Audit

- Framework: Vinext with React 19 and Next-style `app` routing.
- Page structure: one primary route in `app/page.tsx`, global styling in `app/globals.css`, metadata in `app/layout.tsx`.
- Styling: CSS custom properties, Tailwind import available, no component library dependency.
- Assets: local public images for logo, portrait cutout, original portrait, and Mark Twain quote image.
- Deployment: Sites project configured in `.openai/hosting.json`, with Cloudflare-compatible output produced by `vinext build`.

## Strengths Preserved

- Strong personal portrait treatment and warm editorial palette.
- Clear project list with real project names and existing links.
- Resume-informed profile content, LinkedIn badge, Mark Twain theme, and contact structure.
- Simple single-page flow that is easy to host and share.

## Weaknesses Addressed

- Project cards were static and did not expose enough metadata or case-study structure.
- Content lived directly in markup, which made future edits harder.
- Navigation lacked active section context and deeper page flow.
- Contact information did not have copy actions or clear inquiry partitions.
- The quote section was visually present but not integrated into a stronger learning narrative.

## Design And Engineering Plan

1. Extract project, profile, capability, lesson, and contact definitions into typed content data.
2. Keep one page, but reorganize it into a lab-style narrative stream.
3. Use Dynamic Project Workbench as the single signature interaction.
4. Add sticky active navigation, filter controls, selected case-study panel, and contact copy actions.
5. Retain the cutout portrait hero and deepen the editorial/product-interface composition.
6. Validate build, lint, rendered HTML, responsive layout behavior, and deployment.
