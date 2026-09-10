import path from "node:path";
import { pathToFileURL } from "node:url";

const nodeModules = process.env.WORKSPACE_NODE_MODULES;
if (!nodeModules) {
  throw new Error(
    "WORKSPACE_NODE_MODULES must point to a node_modules directory containing playwright.",
  );
}

const { chromium } = await import(
  pathToFileURL(path.join(nodeModules, "playwright", "index.mjs")).href
);

const baseUrl = process.env.DECK_URL ?? "http://localhost:4173/";
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const page = await browser.newPage();

try {
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForFunction(() => {
    const deck = document.querySelector("hyperframes-slideshow");
    return Boolean(deck?.controller?.currentSlide);
  });

  const reset = async () => {
    await page.evaluate(() => {
      document.querySelector("hyperframes-slideshow").controller.syncTo("main", 0, -1);
    });
  };

  const slideIndex = async () => page.evaluate(
    () => document.querySelector("hyperframes-slideshow").controller.frame.slideIndex,
  );

  const framePosition = async () => page.evaluate(() => {
    const frame = document.querySelector("hyperframes-slideshow").controller.frame;
    return {
      slideIndex: frame.slideIndex,
      fragmentIndex: frame.fragmentIndex,
    };
  });

  const expectSlide = async (expected, label) => {
    await page.waitForTimeout(80);
    const actual = await slideIndex();
    if (actual !== expected) {
      throw new Error(`${label}: expected slide ${expected + 1}, received ${actual + 1}`);
    }
  };

  await reset();
  await page.keyboard.press("PageDown");
  await expectSlide(1, "PageDown advances");

  await page.keyboard.press("PageUp");
  await expectSlide(0, "PageUp reverses");

  await page.keyboard.press("Enter");
  await expectSlide(1, "Enter advances");

  await reset();
  await page.evaluate(() => {
    const controller = document.querySelector("hyperframes-slideshow").controller;
    const originalNext = controller.next.bind(controller);
    window.__remoteTestNextCalls = 0;
    controller.next = function () {
      window.__remoteTestNextCalls += 1;
      return originalNext();
    };
  });
  await page.keyboard.press("ArrowRight");
  await expectSlide(1, "ArrowRight advances exactly once");
  const nextCalls = await page.evaluate(() => window.__remoteTestNextCalls);
  if (nextCalls !== 1) {
    throw new Error(`ArrowRight called next() ${nextCalls} times`);
  }

  await reset();
  await page.evaluate(() => {
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "MediaTrackNext",
      code: "MediaTrackNext",
      bubbles: true,
      cancelable: true,
    }));
  });
  await expectSlide(1, "MediaTrackNext advances");

  await reset();
  await page.waitForFunction(() => {
    const player = document.querySelector("hyperframes-player");
    return Boolean(player?.iframeElement?.contentWindow);
  });
  await page.evaluate(() => {
    const player = document.querySelector("hyperframes-player");
    player.iframeElement.contentWindow.dispatchEvent(new KeyboardEvent("keydown", {
      key: "PageDown",
      code: "PageDown",
      bubbles: true,
      cancelable: true,
    }));
  });
  await expectSlide(1, "PageDown advances while the slide frame is focused");

  process.stdout.write("Presenter remote navigation passed.\n");
} finally {
  await browser.close();
}
