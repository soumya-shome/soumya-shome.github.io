# Portfolio

Soumyadeep Shome's personal portfolio site — plain HTML, CSS, and JavaScript, no build step required.

## Structure

- [index.html](index.html) — the homepage (hero, about, skills, projects, contact, footer)
- [myhub/index.html](myhub/index.html) — personal link hub, reachable at `/myhub/`: Learnings, Trackers, Projects, Repository, and Portals sections, each a maintained array in `JS/index.js` (`hubLearnings`, `hubTrackers`, `hubProjects`, `hubRepository`, `hubPortals`). Not linked from the main nav (kept out of search indexing via `robots: noindex`) — bookmark it directly.
- [myhub/certificate.html](myhub/certificate.html) — certifications page (moved here from the repo root)
- [css/css.css](css/css.css) — all styles (the homepage's rules are scoped under `.np-page` / `np-` prefixed classes at the bottom of the file so they don't collide with `certificate.html`'s styles)
- [JS/index.js](JS/index.js) — all scripts (homepage behavior is in `np`-prefixed functions, hub page behavior in `hub`-prefixed functions, at the bottom of the file)
- [Images/](Images/) — image assets used across the site

## Running locally

No install, no build. Just serve the repo root with any static file server, e.g.:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Deployment

Deployed via classic GitHub Pages — Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Since it's plain static files with no build step, whatever is pushed to `main` is what's live; no workflow needed.
