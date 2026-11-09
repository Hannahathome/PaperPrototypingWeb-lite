# Paper Prototyping Lite

Two browser tools for making paper prototypes. Each one exports, on A4 and in millimetres:

- a PDF to print, with calibration crosses;
- a `_fold_` SVG for the cutter;
- a `_calib_` SVG for registration.

| Tool | Makes |
| --- | --- |
| [PaperBlox](paperblox/) | a block with an ArUco marker (`DICT_ARUCO_ORIGINAL`), so a camera can track it |
| [PaperPhicons](paperphicons/) | a prism or frustum with 3–24 sides, with lids, a colour and images |

This is the lite version of [PaperPrototypingWeb](https://github.com/Hannahathome/PaperPrototypingWeb).
Its geometry is ported from there, so the output matches the full version.

## Use it

Open the site on GitHub Pages, or run it locally. The tools are plain HTML and JavaScript
modules, so they need a local web server (opening `index.html` as a file does not work):

```bash
python -m http.server 8000
# then open http://localhost:8000/
```

## Repository

```
index.html                 home page
paperblox/, paperphicons/  the two tools
js/lib/                    shared code (units, SVG, PDF, export)
js/<tool>/                 per-tool core (geometry in mm, no DOM) and UI
css/app.css                styles
vendor/                    jsPDF 4.2.1 and three.js r186, with their licences
docs/                      printed checklists
```

Pushes to `main` are published to GitHub Pages by `.github/workflows/pages.yml`.
