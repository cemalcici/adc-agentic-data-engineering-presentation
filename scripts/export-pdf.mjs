import { mkdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const nodeModules = process.env.WORKSPACE_NODE_MODULES;
if (!nodeModules) {
  throw new Error("WORKSPACE_NODE_MODULES must point to a node_modules directory containing playwright.");
}

const { chromium } = await import(
  pathToFileURL(path.join(nodeModules, "playwright", "index.mjs")).href
);

const baseUrl = process.env.DECK_URL ?? "http://localhost:4173/";
const outputDir = path.resolve(process.argv[2] ?? "tmp/pdfs/pages");
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();
await page.emulateMedia({ media: "screen" });
await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60_000 });
await page.waitForFunction(() => {
  const deck = document.querySelector("hyperframes-slideshow");
  return Boolean(deck?.controller?.currentSlide);
}, null, { timeout: 30_000 });

await page.evaluate(async () => {
  await document.fonts.ready;
  const player = document.querySelector("hyperframes-player");
  const frame = player?.iframeElement;
  if (frame?.contentDocument?.fonts) await frame.contentDocument.fonts.ready;
  const images = frame?.contentDocument
    ? Array.from(frame.contentDocument.images)
    : [];
  await Promise.all(images.map((img) => img.complete
    ? Promise.resolve()
    : new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      })));
});

const inventory = await page.evaluate(() => {
  const controller = document.querySelector("hyperframes-slideshow").controller;
  return {
    main: controller.show.slides.map((slide) => ({
      sceneId: slide.sceneId,
      fragmentIndexes: slide.fragments.length
        ? slide.fragments.map((_, index) => index)
        : [-1],
    })),
    appendix: (controller.show.sequences["teknik-ekler"]?.slides ?? []).map((slide) => ({
      sceneId: slide.sceneId,
      fragmentIndexes: slide.fragments.length
        ? slide.fragments.map((_, index) => index)
        : [-1],
    })),
  };
});

const exportSlide = async (sequenceId, slideIndex, fragmentIndex, pageNumber) => {
  await page.evaluate(({ sequenceId, slideIndex, fragmentIndex }) => {
    const deck = document.querySelector("hyperframes-slideshow");
    deck.controller.syncTo(sequenceId, slideIndex, fragmentIndex);
    if (deck.chrome) deck.chrome.style.display = "none";
  }, { sequenceId, slideIndex, fragmentIndex });
  await page.waitForTimeout(120);
  await page.evaluate(() => new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  }));
  const filename = `${String(pageNumber).padStart(3, "0")}.pdf`;
  await page.pdf({
    path: path.join(outputDir, filename),
    width: "1920px",
    height: "1080px",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false,
  });
};

let pageNumber = 1;
for (let i = 0; i < inventory.main.length; i += 1) {
  const slide = inventory.main[i];
  for (const fragmentIndex of slide.fragmentIndexes) {
    await exportSlide("main", i, fragmentIndex, pageNumber);
    pageNumber += 1;
  }
}

if (inventory.appendix.length) {
  await page.evaluate(() => {
    const deck = document.querySelector("hyperframes-slideshow");
    deck.controller.enterBranch("teknik-ekler");
  });
  for (let i = 0; i < inventory.appendix.length; i += 1) {
    const slide = inventory.appendix[i];
    for (const fragmentIndex of slide.fragmentIndexes) {
      await exportSlide("teknik-ekler", i, fragmentIndex, pageNumber);
      pageNumber += 1;
    }
  }
}

await browser.close();
process.stdout.write(`${pageNumber - 1} slide pages exported to ${outputDir}\n`);
