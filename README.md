# Portfolio

Soumyadeep Shome's personal portfolio site — plain HTML, CSS, and JavaScript, no build step required.

## Structure

- [index.html](index.html) — the homepage (hero, about, skills, projects, contact, footer)
- [certificate.html](certificate.html) — certifications page
- [myhub/index.html](myhub/index.html) — personal link hub, reachable at `/myhub/`: cards that redirect out to other project sites you maintain. Not linked from the main nav (kept out of search indexing via `robots: noindex`) — bookmark it directly. Edit the `hubLinks` array in `JS/index.js` to add/remove entries.
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

Pushes to `main` that touch `index.html`, `certificate.html`, `myhub/`, `css/`, `JS/`, `Images/`, or `favicon.ico` are deployed to GitHub Pages automatically via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). In the repo's Settings → Pages, the source must be set to **GitHub Actions**.

(Since everything now lives at the repo root, classic "Deploy from a branch → main → / (root)" would also work without any workflow at all, if you'd rather skip Actions entirely.)
