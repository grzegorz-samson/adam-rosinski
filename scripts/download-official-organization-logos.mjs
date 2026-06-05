#!/usr/bin/env node
import { createWriteStream, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";
import https from "node:https";
import http from "node:http";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const manifestPath = join(root, "public/images/organizations/official/official-logo-sources.json");
const outDir = join(root, "public/images/organizations/official");
const rawDir = join(outDir, "raw-brand-packs");
mkdirSync(outDir, { recursive: true });
mkdirSync(rawDir, { recursive: true });

const sources = JSON.parse(readFileSync(manifestPath, "utf8"));

function download(url, target, maxRedirects = 5) {
  return new Promise((resolveDownload, reject) => {
    if (!url) return resolveDownload({ skipped: true, reason: "empty url" });
    const client = url.startsWith("https:") ? https : http;
    const req = client.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AdamRLogoAcquisition/1.0)",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      }
    }, async (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && maxRedirects > 0) {
        const nextUrl = new URL(res.headers.location, url).toString();
        res.resume();
        try { resolveDownload(await download(nextUrl, target, maxRedirects - 1)); }
        catch (error) { reject(error); }
        return;
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        res.resume();
        reject(new Error(`${res.statusCode} ${res.statusMessage} for ${url}`));
        return;
      }
      mkdirSync(dirname(target), { recursive: true });
      await pipeline(res, createWriteStream(target));
      resolveDownload({ ok: true, target });
    });
    req.on("error", reject);
    req.setTimeout(30000, () => {
      req.destroy(new Error(`Timeout for ${url}`));
    });
  });
}

let ok = 0;
let failed = 0;
let skipped = 0;
for (const item of sources) {
  const tasks = [];
  if (item.officialLogoUrl && item.targetFile) {
    tasks.push({ url: item.officialLogoUrl, target: join(outDir, item.targetFile), label: item.slug });
  }
  if (item.officialLogoAltUrl && item.targetAltFile) {
    tasks.push({ url: item.officialLogoAltUrl, target: join(outDir, item.targetAltFile), label: `${item.slug}-alt` });
  }
  if (item.brandPackUrl && item.targetBrandPackFile) {
    tasks.push({ url: item.brandPackUrl, target: join(rawDir, item.targetBrandPackFile), label: `${item.slug}-brand-pack` });
  }
  if (tasks.length === 0) {
    console.log(`skip ${item.slug}: ${item.status}`);
    skipped++;
    continue;
  }
  for (const task of tasks) {
    try {
      await download(task.url, task.target);
      console.log(`ok   ${task.label} -> ${task.target.replace(root + "/", "")}`);
      ok++;
    } catch (error) {
      console.warn(`fail ${task.label}: ${error.message}`);
      failed++;
    }
  }
}
console.log(`\nDone. Downloaded: ${ok}, failed: ${failed}, skipped entries: ${skipped}.`);
console.log("Review licensing/brand rules before publishing. For ZIP brand packs, extract manually and choose the proper official variant.");
