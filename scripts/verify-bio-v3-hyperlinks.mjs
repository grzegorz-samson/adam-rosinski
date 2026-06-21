import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

async function importTypeScriptModule(filePath) {
  const source = await fs.readFile(filePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
    },
    fileName: filePath,
  }).outputText;

  const encoded = Buffer.from(output).toString("base64");
  return import(`data:text/javascript;base64,${encoded}`);
}

function getDistHtmlPath(href) {
  const url = new URL(href, "https://example.test");
  const cleanPath = url.pathname.replace(/^\/+|\/+$/g, "");
  return {
    htmlPath: cleanPath
      ? path.join(distDir, cleanPath, "index.html")
      : path.join(distDir, "index.html"),
    hash: url.hash ? decodeURIComponent(url.hash.slice(1)) : "",
  };
}

const biographyModule = await importTypeScriptModule(
  path.join(root, "src/data/biographyOriginal.ts"),
);
const linkModule = await importTypeScriptModule(
  path.join(root, "src/data/biographyV3Links.ts"),
);

const paragraphs = biographyModule.originalBiographyParagraphs;
const rules = linkModule.biographyV3LinkRules;
const linkify = linkModule.linkBiographyV3Paragraph;

const errors = [];
let internalCount = 0;
let externalCount = 0;

for (const rule of rules) {
  const paragraph = paragraphs[rule.paragraphIndex];
  if (typeof paragraph !== "string") {
    errors.push(`Rule points to missing paragraph ${rule.paragraphIndex}: ${rule.phrase}`);
    continue;
  }

  const firstIndex = paragraph.indexOf(rule.phrase);
  if (firstIndex === -1) {
    errors.push(`Phrase not found in paragraph ${rule.paragraphIndex}: ${rule.phrase}`);
  }

  if (rule.kind === "internal") internalCount += 1;
  if (rule.kind === "external") externalCount += 1;
}

for (let paragraphIndex = 0; paragraphIndex < paragraphs.length; paragraphIndex += 1) {
  const reconstructed = linkify(paragraphs[paragraphIndex], paragraphIndex)
    .map((segment) => segment.text)
    .join("");

  if (reconstructed !== paragraphs[paragraphIndex]) {
    errors.push(`Linked rendering changes paragraph ${paragraphIndex}.`);
  }
}

for (const rule of rules.filter((item) => item.kind === "internal")) {
  const { htmlPath, hash } = getDistHtmlPath(rule.href);
  let html;

  try {
    html = await fs.readFile(htmlPath, "utf8");
  } catch {
    errors.push(`Missing built page for internal link: ${rule.href}`);
    continue;
  }

  if (hash) {
    const escaped = hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const idPattern = new RegExp(`\\bid=["']${escaped}["']`);
    if (!idPattern.test(html)) {
      errors.push(`Missing built anchor #${hash} for internal link: ${rule.href}`);
    }
  }
}

const report = [
  "BIO V3 HYPERLINK VERIFICATION",
  `Paragraphs checked: ${paragraphs.length}`,
  `Link rules checked: ${rules.length}`,
  `Internal links: ${internalCount}`,
  `External links: ${externalCount}`,
  `Canonical text reconstruction: ${errors.some((item) => item.includes("changes paragraph")) ? "FAIL" : "PASS"}`,
  `Built internal destinations: ${errors.some((item) => item.includes("built")) ? "FAIL" : "PASS"}`,
  `Overall: ${errors.length === 0 ? "PASS" : "FAIL"}`,
];

if (errors.length > 0) {
  report.push("", "Errors:", ...errors.map((error) => `- ${error}`));
}

const reportText = `${report.join("\n")}\n`;
await fs.writeFile(path.join(root, "docs/bio-v3-hyperlink-verification.txt"), reportText);
console.log(reportText);

if (errors.length > 0) process.exitCode = 1;
