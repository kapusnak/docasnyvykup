#!/usr/bin/env node
/**
 * Converts public/ JPG and PNG assets to compressed WebP and removes sources.
 * Run from repo root: node scripts/optimize-images.mjs
 */
import sharp from "sharp"
import { readdirSync, statSync, unlinkSync } from "fs"
import { join, dirname, parse, relative } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...walk(p))
    else if (/\.(jpe?g|png)$/i.test(name)) out.push(p)
  }
  return out
}

function rel(p) {
  return relative(publicDir, p).replace(/\\/g, "/")
}

/**
 * @param {string} inputAbs
 */
async function convertFile(inputAbs) {
  const r = rel(inputAbs)
  const { dir, name } = parse(inputAbs)
  const outAbs = join(dir, `${name}.webp`)

  let img = sharp(inputAbs)
  const meta = await img.metadata()

  /** @type {import('sharp').WebpOptions} */
  const webpOpts = { effort: 6 }

  // Open Graph card
  if (r === "og-docasnyvykup.jpg") {
    await sharp(inputAbs)
      .resize(1200, 630, { fit: "cover", position: "attention" })
      .webp({ ...webpOpts, quality: 78 })
      .toFile(outAbs)
    unlinkSync(inputAbs)
    console.log(`${r} -> ${relative(publicDir, outAbs)}`)
    return
  }

  // QR: keep detail for scanning
  if (r.includes("whatsapp-qr")) {
    await sharp(inputAbs)
      .resize(420, 420, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ ...webpOpts, nearLossless: true })
      .toFile(outAbs)
    unlinkSync(inputAbs)
    console.log(`${r} -> ${relative(publicDir, outAbs)}`)
    return
  }

  // Site logo / favicon source (512×512)
  if (r.includes("cropped-docasnyvykup-logo")) {
    await sharp(inputAbs)
      .resize(512, 512, { fit: "inside", withoutEnlargement: true })
      .webp({ ...webpOpts, quality: 86, alphaQuality: 100 })
      .toFile(outAbs)
    unlinkSync(inputAbs)
    console.log(`${r} -> ${relative(publicDir, outAbs)}`)
    return
  }

  // Partner badge
  if (r.includes("zivefirmy")) {
    await sharp(inputAbs)
      .resize(220, null, { fit: "inside", withoutEnlargement: true })
      .webp({ ...webpOpts, quality: 82, alphaQuality: 90 })
      .toFile(outAbs)
    unlinkSync(inputAbs)
    console.log(`${r} -> ${relative(publicDir, outAbs)}`)
    return
  }

  // Portrait section photos (sidebar / steps)
  if (r.includes("683x1024") || r.includes("julian-gentilezza")) {
    await sharp(inputAbs)
      .resize(720, null, { fit: "inside", withoutEnlargement: true })
      .webp({ ...webpOpts, quality: 76 })
      .toFile(outAbs)
    unlinkSync(inputAbs)
    console.log(`${r} -> ${relative(publicDir, outAbs)}`)
    return
  }

  // Mercedes console PNG (landscape)
  if (r.includes("ildar-garifullin")) {
    await sharp(inputAbs)
      .resize(960, null, { fit: "inside", withoutEnlargement: true })
      .webp({ ...webpOpts, quality: 76 })
      .toFile(outAbs)
    unlinkSync(inputAbs)
    console.log(`${r} -> ${relative(publicDir, outAbs)}`)
    return
  }

  // Large Unsplash hero / section photos
  const w =
    meta.width && meta.width > 1680
      ? 1680
      : meta.width && meta.width > 1400
        ? 1400
        : null

  webpOpts.quality = 74

  if (w) {
    img = sharp(inputAbs).resize(w, null, { fit: "inside", withoutEnlargement: true })
  } else {
    img = sharp(inputAbs)
  }

  await img.webp(webpOpts).toFile(outAbs)
  unlinkSync(inputAbs)
  console.log(`${r} -> ${relative(publicDir, outAbs)}`)
}

const files = walk(publicDir).filter((p) => !p.endsWith(".webp"))
for (const f of files) {
  await convertFile(f)
}

console.log("Done.")
