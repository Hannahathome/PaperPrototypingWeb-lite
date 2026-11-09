# Paper Prototyping Lite

Two browser tools for making paper prototypes. Each one exports, on A4 and in millimetres:

- a PDF to print, with calibration crosses;
- a `_fold_` SVG for the cutter;
- a `_calib_` SVG for registration.

| Tool | Makes |
| --- | --- |
| [PaperBlox](paperblox.html) | a block with an ArUco marker (`DICT_ARUCO_ORIGINAL`), so a camera can track it |
| [PaperPhicons](paperphicons.html) | a prism or frustum with 3–24 sides, with lids, a colour and images |


## Use it

Open the site on GitHub Pages, or download the repo and open `index.html` in your browser.
Each tool is a single HTML file. jsPDF and three.js load from a CDN, so you need an internet
connection when a page opens.
