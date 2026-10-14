# William Magor – Gaussian Splat Archive

Static site, no build step. Works on GitHub Pages as-is.
Viewer: [Spark](https://sparkjs.dev) 2.3.1 + three.js 0.180.0, loaded from jsDelivr.
Supported files: `.spz` (recommended), `.ply`, `.splat`, `.ksplat`, `.sog`.

## Add a project
1. **Postshot**: train your capture, then export the splat as `.ply`.
2. **SuperSplat** (https://superspl.at/editor): open the `.ply`, delete floaters/sky/junk, crop to the site, then export a compressed file (`.sog`, or compressed `.ply`; or convert to `.spz`).
3. Copy the file into `scenes/` (e.g. `scenes/main-st-garage.spz`) and a screenshot into `thumbs/` (e.g. `thumbs/main-st-garage.jpg`, ~800px wide).
4. Add an entry to `scenes.json`:
   ```json
   {
     "id": "main-st-garage",
     "title": "Main St Parking Garage",
     "location": "Chicago, IL",
     "date": "2026-09-30",
     "description": "Level 3 deck pour, pre-finish.",
     "file": "scenes/main-st-garage.spz",
     "thumbnail": "thumbs/main-st-garage.jpg",
     "camera": { "position": [0, 1, 4], "target": [0, 0, 0] },
     "flipY": true
   }
   ```
   `camera` is optional. If the scene shows upside down, set `"flipY": false`.
5. Delete the entry whose title starts with `SAMPLE` once you have your own.
6. Commit and push to GitHub.

## Turn on GitHub Pages
Repo → Settings → Pages → Source: "Deploy from a branch" → `main` / root → Save. The site is live at `https://<user>.github.io/<repo>/` in a minute or two.

## File size limits
- Keep each splat **under 50 MB** (GitHub warns above that, and big files load slowly on phones).
- **100 MB is GitHub's hard cap** per file. Pushes with a larger file fail.
- Bigger files: upload them to **Cloudflare R2** (free egress), make the bucket public (or use a custom domain), add a CORS rule allowing `GET` from your Pages domain, and put the full URL in `"file"`.

## Test locally
`python3 -m http.server 8000` then open http://localhost:8000 (opening the file directly won't work, because `fetch` needs a server).

## Branding
The brand name `MAGOR // SPATIAL ARCHIVE` appears in `index.html` (nav `#brand`, footer, title) and `viewer.html` (title, loading screen). Search-and-replace it to rename. Fonts: Rajdhani + Share Tech Mono from Google Fonts.
