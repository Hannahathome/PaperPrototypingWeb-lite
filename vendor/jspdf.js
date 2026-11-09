// ES module wrapper around the jsPDF UMD build (jsPDF 4.2.1), so app code can write
// `import { jsPDF } from 'jspdf'` without a bundler. The UMD build sets globalThis.jspdf.
import './jspdf.umd.min.js';

export const { jsPDF } = globalThis.jspdf;
