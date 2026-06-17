import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, extname, relative } from "path";

const SRC = "public/photography";
const OUT = "public/photography/thumbs";
const WIDTH = 400;
const QUALITY = 75;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory() && e.name !== "thumbs") {
      files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = await walk(SRC);
await mkdir(OUT, { recursive: true });

let saved = 0;
for (const file of files) {
  const rel = relative(SRC, file).replace(/[/\\]/g, "--").replace(/\.[^.]+$/, ".webp");
  const out = join(OUT, rel);
  try {
    await sharp(file).resize(WIDTH).webp({ quality: QUALITY }).toFile(out);
    saved++;
  } catch (e) {
    console.error(`Failed: ${file}`, e.message);
  }
}

console.log(`Optimized ${saved}/${files.length} images → ${OUT}`);
