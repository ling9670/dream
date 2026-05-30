# Among All Dreams — GitHub Pages Flipbook

A self-contained single-page flipbook for the art book *夢裡夢外 / Among All Dreams* by Eve. To enable: go to repository Settings → Pages → Source → `main` branch, `/docs` folder.

---

## Files in this folder

| File | Purpose |
|------|---------|
| `index.html` | Interactive flipbook web app — the main experience. Live at [ling9670.github.io/dream](https://ling9670.github.io/dream/) |
| `ebook-preview.html` ⭐ | **Print / PDF ebook** — the shareable deliverable. Fixed-layout 816×1456 pages (book proportions). Cover → preface → contents → dreams → analyses → afterword. Open and Cmd+P → Save as PDF. Page-break CSS ensures one book page = one PDF page. |
| `ebook-preview-lite.html` | Proofing sheet — internal use only, not for sharing. Same pages laid out as a gallery on a dark background, each page tagged with a label (e.g. 夢 02 · 解讀). Use it to eyeball every page at once and spot layout problems. |
| `data-dreams.js` | Slide / panel content data (`window.DREAMS` array). Source of truth for all flipbook scene text. |
| `data-analysis.js` | Per-dream analysis content (`window.ANALYSIS` object). Keyed by original source dream IDs. |

> **Not in this repo:** `ebook-paginate.html` — the page-break engine that calculates content flow. Run it after any content or type change to re-flow the book before exporting.
