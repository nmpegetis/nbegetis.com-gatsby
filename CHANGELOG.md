# Changelog

## 2025-12-29 — Project content update

- Added per-repo project pages under `src/content/projects/` for public repositories.
- Enriched project pages with metadata: `stars`, `language`, `lastUpdated` and README excerpts via `scripts/enrich_project_pages.sh`.
- Fixed SSR crash by guarding against missing `tags` in `src/templates/projects-post.js` and `src/components/ProjectLink.js`.
- Included Lighthouse and Pa11y artifacts in the repository for audit and QA.

(See merged PR for details.)
