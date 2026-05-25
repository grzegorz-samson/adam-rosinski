import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const publicationsFile = path.join(repoRoot, "src", "data", "publications.ts");
const publicationsDir = path.join(repoRoot, "public", "pdfs", "publications");
const cvDir = path.join(repoRoot, "public", "pdfs", "cv");
const cvOutput = path.join(cvDir, "adam-rosinski-cv.pdf");
const reportFile = path.join(repoRoot, "scripts", "pdf-import-report.json");

const PUBLICATIONS_URL = "https://adamrosinski.com/publications/";
const CV_URL = "https://adamrosinski.com/cv/";

const categoryKeyMap = {
  Monographs: "Monograph",
  "Journal Articles": "Journal article",
  "Book Series Editor": "Book series editor",
  "Book Chapters": "Book chapter",
};

const titleOverrides = new Map([
  ["Melody and Rhythm in Shaping Multiple Auditory Percepts: Auditory Stream Organisation in Selected Musical Works", "Wplyw melodyki i rytmiki na tworzenie wielowariantowosci odbioru wrazen sluchowych Przetwarzanie dzwiekow w strumienie percepcyjne na przykladzie wybranych dziel muzycznych EBOOK"],
  ["Psychoacoustic Contexts of Auditory Stream Formation in Music", "Psychoakustyczne konteksty tworzenia strumieni sluchowych w muzyce"],
  ["The Use of Computer Technology in Music Recording and Production", "Zastosowanie technologii komputerowej w rejestracji i produkcji muzyki"],
]);

async function main() {
  await mkdir(publicationsDir, { recursive: true });
  await mkdir(cvDir, { recursive: true });

  const publicationRecords = await loadPublicationRecords();
  const scrapedPublications = await scrapePublicationPage();
  const scrapedCv = await scrapeCvPage();

  const mapping = mapPublications(publicationRecords, scrapedPublications);
  const report = {
    generatedAt: new Date().toISOString(),
    cv: null,
    publications: [],
    unmatched: mapping.unmatched,
  };

  await rm(publicationsDir, { recursive: true, force: true });
  await rm(cvDir, { recursive: true, force: true });
  await mkdir(publicationsDir, { recursive: true });
  await mkdir(cvDir, { recursive: true });

  for (const item of mapping.records) {
    const outputName = `${item.slug}.pdf`;
    const outputPath = path.join(publicationsDir, outputName);
    const localHref = `/pdfs/publications/${outputName}`;
    let pdfHref = null;
    let finalUrl = null;
    let status = "missing";
    let error = null;

    if (item.rawPdfUrl) {
      try {
        finalUrl = await resolvePdfUrl(item.rawPdfUrl);
        if (!finalUrl) {
          status = "unresolved";
        } else {
          await downloadPdf(finalUrl, outputPath);
          pdfHref = localHref;
          status = "downloaded";
        }
      } catch (cause) {
        status = "error";
        error = cause instanceof Error ? cause.message : String(cause);
      }
    }

    item.pdfHref = pdfHref;
    report.publications.push({
      slug: item.slug,
      title: item.title,
      status,
      sourceUrl: item.href,
      rawPdfUrl: item.rawPdfUrl,
      finalPdfUrl: finalUrl,
      output: pdfHref,
      error,
      matchedBy: item.matchedBy,
      titleMatch: item.titleMatch,
    });
  }

  try {
    const finalCvUrl = await resolvePdfUrl(scrapedCv);
    if (!finalCvUrl) {
      report.cv = { status: "unresolved", rawPdfUrl: scrapedCv, output: null };
    } else {
      await downloadPdf(finalCvUrl, cvOutput);
      report.cv = {
        status: "downloaded",
        rawPdfUrl: scrapedCv,
        finalPdfUrl: finalCvUrl,
        output: "/pdfs/cv/adam-rosinski-cv.pdf",
      };
    }
  } catch (cause) {
    report.cv = {
      status: "error",
      rawPdfUrl: scrapedCv,
      output: null,
      error: cause instanceof Error ? cause.message : String(cause),
    };
  }

  await updatePublicationsFile(mapping.records);
  await writeFile(reportFile, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  const downloaded = report.publications.filter((item) => item.status === "downloaded").length;
  const unresolved = report.publications.filter((item) => item.status !== "downloaded").length;
  console.log(`Imported ${downloaded} publication PDFs.`);
  console.log(`Unresolved publication PDFs: ${unresolved}.`);
  console.log(`CV status: ${report.cv?.status ?? "unknown"}.`);
  console.log(`Report: ${reportFile}`);
}

async function loadPublicationRecords() {
  const source = await readFile(publicationsFile, "utf8");
  const match = source.match(/export const publications: PublicationRecord\[] = (\[[\s\S]*?\n\]);\n\nexport const selectedPublications/);

  if (!match) {
    throw new Error("Could not parse publications array.");
  }

  const publications = Function(`"use strict"; return (${match[1]});`)();
  return publications.map((publication) => ({
    ...publication,
    pdfHref: publication.pdfHref ?? null,
  }));
}

async function scrapePublicationPage() {
  const html = await fetchText(PUBLICATIONS_URL);
  const sectionRegex = /<h2 class="wp-block-heading">([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2 class="wp-block-heading">|<\/main>)/g;
  const sections = [];

  for (const match of html.matchAll(sectionRegex)) {
    const sectionTitle = decodeHtml(stripTags(match[1])).trim();
    const category = categoryKeyMap[sectionTitle];

    if (!category) {
      continue;
    }

    const blockRegex = /<div class="wp-block-columns[\s\S]*?<p class="has-text-align-justify has-medium-font-size has-text-align-justify">([\s\S]*?)<\/p>[\s\S]*?<a class="wp-block-button__link[\s\S]*?href="([^"]+)"[\s\S]*?>Download the PDF<\/a>/g;
    const items = [];

    for (const blockMatch of match[2].matchAll(blockRegex)) {
      const title = decodeHtml(stripTags(blockMatch[1])).replace(/\s+/g, " ").trim();
      const rawPdfUrl = decodeHtml(blockMatch[2]).trim();
      items.push({ title, rawPdfUrl });
    }

    sections.push({ category, title: sectionTitle, items });
  }

  return sections;
}

async function scrapeCvPage() {
  const html = await fetchText(CV_URL);
  const match = html.match(/<a[^>]+href="([^"]+)"[^>]*download[^>]*>Download<\/a>/i);

  if (!match) {
    throw new Error("Could not find CV PDF link.");
  }

  return decodeHtml(match[1]).trim();
}

function mapPublications(publications, sections) {
  const records = [];
  const unmatched = [];

  for (const [sectionIndex, section] of sections.entries()) {
    const localItems = publications.filter((publication) => publication.category === section.category);

    if (localItems.length !== section.items.length) {
      unmatched.push({
        type: "count-mismatch",
        category: section.category,
        localCount: localItems.length,
        scrapedCount: section.items.length,
      });
    }

    const count = Math.min(localItems.length, section.items.length);

    for (let index = 0; index < count; index += 1) {
      const local = localItems[index];
      const remote = section.items[index];
      const titleMatch = titlesLikelyMatch(local.title, remote.title);
      records.push({
        ...local,
        rawPdfUrl: remote.rawPdfUrl,
        matchedBy: `section-order:${sectionIndex}:${index}`,
        titleMatch,
      });

      if (!titleMatch) {
        unmatched.push({
          type: "title-mismatch",
          category: section.category,
          slug: local.slug,
          localTitle: local.title,
          scrapedTitle: remote.title,
        });
      }
    }

    for (const local of localItems.slice(count)) {
      records.push({
        ...local,
        rawPdfUrl: null,
        matchedBy: "local-only",
        titleMatch: false,
      });
      unmatched.push({
        type: "local-only",
        category: section.category,
        slug: local.slug,
        localTitle: local.title,
      });
    }

    for (const remote of section.items.slice(count)) {
      unmatched.push({
        type: "remote-only",
        category: section.category,
        scrapedTitle: remote.title,
        rawPdfUrl: remote.rawPdfUrl,
      });
    }
  }

  return { records, unmatched };
}

function titlesLikelyMatch(localTitle, scrapedTitle) {
  const normalizedLocal = normalizeTitle(localTitle);
  const normalizedScraped = normalizeTitle(scrapedTitle);
  const override = titleOverrides.get(localTitle);

  return normalizedLocal === normalizedScraped || normalizeTitle(override ?? "") === normalizedScraped;
}

function normalizeTitle(value) {
  return decodeHtml(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .toLowerCase();
}

async function resolvePdfUrl(rawUrl, seen = new Set()) {
  if (!rawUrl) {
    return null;
  }

  const normalized = new URL(rawUrl).toString();
  if (seen.has(normalized)) {
    return null;
  }
  seen.add(normalized);

  const url = new URL(normalized);

  if (url.hostname.includes("google.com") && url.searchParams.has("url")) {
    return resolvePdfUrl(url.searchParams.get("url"), seen);
  }

  if (looksLikePdfUrl(url)) {
    return stripAuthQuery(url);
  }

  if (url.hostname.includes("mdpi.com")) {
    if (url.pathname.includes("/special_issues")) {
      return null;
    }

    return `${url.origin}${url.pathname.replace(/\/$/, "")}/pdf`;
  }

  if (url.hostname.includes("cambridge.org")) {
    const html = await fetchText(url);
    const pdfUrl = extractPdfUrlFromHtml(html, url)
      ?? extractMetaPdfUrl(html)
      ?? null;
    return pdfUrl ? resolvePdfUrl(pdfUrl, seen) : null;
  }

  if (url.hostname.includes("escholarship.org")) {
    if (/\/content\/qt[^/]+\/qt[^/]+\.pdf$/i.test(url.pathname)) {
      return url.toString();
    }

    const html = await fetchText(url);
    const pdfUrl = extractMetaPdfUrl(html) ?? extractPdfUrlFromHtml(html, url);
    return pdfUrl ? resolvePdfUrl(pdfUrl, seen) : null;
  }

  if (url.hostname.includes("wuj.pl") || url.hostname.includes("wuw.pl")) {
    const html = await fetchText(url);
    const pdfUrl = extractMetaPdfUrl(html)
      ?? extractPdfUrlFromHtml(html, url)
      ?? extractHrefMatching(html, url, /href="([^"]+\.pdf[^"]*)"/i);
    return pdfUrl ? resolvePdfUrl(pdfUrl, seen) : null;
  }

  if (url.hostname.includes("katalogi.bn.org.pl")) {
    return null;
  }

  if (url.hostname.includes("open.icm.edu.pl")) {
    return stripAuthQuery(url);
  }

  const response = await fetch(url, { redirect: "follow" });
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/pdf")) {
    return response.url;
  }

  if (contentType.includes("text/html")) {
    const html = await response.text();
    const pdfUrl = extractMetaPdfUrl(html) ?? extractPdfUrlFromHtml(html, new URL(response.url));
    return pdfUrl ? resolvePdfUrl(pdfUrl, seen) : null;
  }

  return null;
}

function stripAuthQuery(url) {
  const next = new URL(url.toString());
  next.search = "";
  return next.toString();
}

function looksLikePdfUrl(url) {
  return (
    url.pathname.toLowerCase().endsWith(".pdf")
    || url.pathname.toLowerCase().endsWith("/download")
    || /\/content$/i.test(url.pathname)
  );
}

function extractMetaPdfUrl(html) {
  const match = html.match(/(?:citation_pdf_url|og:pdf)[^>]+content="([^"]+)"/i);
  return match ? decodeHtml(match[1]) : null;
}

function extractPdfUrlFromHtml(html, baseUrl) {
  const href = extractHrefMatching(
    html,
    baseUrl,
    /href="([^"]+(?:\.pdf|\/pdf|download)[^"]*)"/i,
  );
  if (href) {
    return href;
  }

  return extractHrefMatching(
    html,
    baseUrl,
    /href="([^"]+)"[^>]*>\s*(?:PDF|Download PDF|Open Access PDF)\s*</i,
  );
}

function extractHrefMatching(html, baseUrl, pattern) {
  const match = html.match(pattern);
  return match ? new URL(decodeHtml(match[1]), baseUrl).toString() : null;
}

async function downloadPdf(sourceUrl, destination) {
  const response = await fetch(sourceUrl, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${sourceUrl}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/pdf") && !buffer.subarray(0, 4).equals(Buffer.from("%PDF"))) {
    throw new Error(`Response is not a PDF for ${sourceUrl}`);
  }

  await writeFile(destination, buffer);
}

async function updatePublicationsFile(publications) {
  const source = await readFile(publicationsFile, "utf8");
  const serialized = serializePublications(publications);
  const next = source.replace(
    /export const publications: PublicationRecord\[] = \[[\s\S]*?\n\];\n\nexport const selectedPublications/,
    `export const publications: PublicationRecord[] = ${serialized};\n\nexport const selectedPublications`,
  ).replace(
    "  href: string;\n",
    "  href: string;\n  pdfHref: string | null;\n",
  );

  await writeFile(publicationsFile, next, "utf8");
}

function serializePublications(publications) {
  return JSON.stringify(
    publications.map(({ matchedBy, rawPdfUrl, titleMatch, ...publication }) => publication),
    null,
    2,
  );
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.text();
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, " ");
}

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\"")
    .replace(/&#8221;/g, "\"");
}

await main();
