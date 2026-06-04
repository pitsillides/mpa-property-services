import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const chromeCandidates = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];

function findBrowser() {
  const browserPath = chromeCandidates.find((candidate) => fs.existsSync(candidate));
  if (!browserPath) {
    throw new Error("No local Chrome or Edge executable was found for PDF rendering.");
  }
  return browserPath;
}

const brochureDir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(brochureDir, "mpa-property-services-brochure.html");
const publicDir = path.join(brochureDir, "..", "public", "brochure");
const pdfPath = path.join(publicDir, "mpa-property-services-brochure.pdf");
const previewPath = path.join(brochureDir, "full-preview.png");
const browserPath = findBrowser();
const fileUrl = `file:///${htmlPath.replace(/\\/g, "/")}`;

fs.mkdirSync(publicDir, { recursive: true });
fs.rmSync(pdfPath, { force: true });
fs.rmSync(previewPath, { force: true });

execFileSync(browserPath, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPath}`,
  fileUrl,
]);

execFileSync(browserPath, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--window-size=794,9000",
  `--screenshot=${previewPath}`,
  fileUrl,
]);

console.log(
  JSON.stringify(
    {
      pdfPath,
      previewPath,
    },
    null,
    2
  )
);
