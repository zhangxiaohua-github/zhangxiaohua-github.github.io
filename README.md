# Zhang Peng — Academic Homepage

Personal academic website for **Zhang Peng (张鹏)**, Ph.D student at the Marine and Coastal Geodesy Group, University of Houston.

Pure static site (HTML / CSS / vanilla JS) — **no build step, no Ruby/Jekyll/Node required**. What you see in `index.html` is exactly what GitHub Pages serves.

## Local preview

Any static server works. Easiest with Python:

```bash
cd site        # this folder
python -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html` (fonts need internet; everything else works offline).

## ✅ Already filled in

- CV: `assets/pdf/Resume_Peng_Zhang.pdf` (Download CV button links here)
- Photo: `assets/img/Myphoto/MyPhoto.jpeg`
- Email, X, GitHub, LinkedIn, Google Scholar, ORCID — all linked
- Supervisor (Dr. Surui Xie) link

## ⚠️ Placeholders still pending

| Item | Where | What to do |
|---|---|---|
| Publication PDF / DOI | `#publications` section | Each paper has disabled `PDF` / `DOI` buttons — turn them into links: `<a class="pub-btn" href="https://doi.org/...">DOI</a>` |
| Project figures | `assets/img/project-permafrost.svg`, `assets/img/project-soilmoisture.svg` | Replace with your original high-resolution figures and update the two `<img src>` in the Projects section |

## How to add a new publication

In `index.html`, inside `<section id="publications">`, copy an existing `<article class="pub-card">` block and edit:

1. Year in `<div class="pub-year">`
2. Title in `<h3>`, authors, venue
3. Give the hidden `<pre class="bibtex" id="pubN">` a **new unique id** and matching `data-cite="pubN"` on the CITE button
4. Paste the paper's BibTeX inside the `<pre>`

Newest papers go on top (reverse chronological order).

## How to add a new project

Inside `<section id="projects">`, copy an existing `<article class="project-card">` block, then edit the image, date, title, caption and tag pills. Put the figure in `assets/img/`.

## How to change colors / dark mode

All colors are CSS variables at the top of `assets/css/style.css` (`:root` for light, `:root[data-theme="dark"]` for dark). Primary blue: `--primary`, coral accent: `--accent`.

## Deploy to GitHub Pages

This repo is the **user homepage** repo (`zhangxiaohua-github.github.io`), so the `main` branch root is served directly:

```bash
git add .
git commit -m "Update site"
git push origin main
```

In repo **Settings → Pages**, Source should be **Deploy from a branch → main / (root)**. The `.nojekyll` file tells GitHub to serve files as-is (no Jekyll build). Changes appear at <https://zhangxiaohua-github.github.io> within a minute or two.
