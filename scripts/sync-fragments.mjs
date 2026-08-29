import { readFileSync, writeFileSync } from "node:fs";

const FILE = "composition/index.html";
const BASE_HOLD = 0.05;
const REVEAL_DURATION = 0.42;
const REST_PAD = 0.05;

const html = readFileSync(FILE, "utf8");
const sceneOrder = new Map(
  [...html.matchAll(/data-composition-id="([a-z0-9-]+)" data-start="([0-9.]+)" data-duration="[0-9.]+"/g)]
    .filter(([, id]) => id !== "root")
    .map(([, id, start]) => [id, Number(start)])
);

const pageBlock = html.match(/const pages\s*=\s*\{([\s\S]*?)\n    \};/);
if (!pageBlock) throw new Error("Could not find the pages object.");

const revealTimes = new Map();
const entries = [...pageBlock[1].matchAll(/\n      '([a-z0-9-]+)':`([\s\S]*?)`(?=,\n      '|\n    $)/g)];
for (const [, id, body] of entries) {
  const times = [...body.matchAll(/data-at="([0-9.]+)"/g)].map((match) => Number(match[1]));
  revealTimes.set(id, [...new Set(times)].sort((a, b) => a - b));
}

const islandMatch = html.match(
  /(<script type="application\/hyperframes-slideshow\+json">\n)([\s\S]*?)(\n  <\/script>)/
);
if (!islandMatch) throw new Error("Could not find the slideshow island.");
const island = JSON.parse(islandMatch[2]);

let changed = 0;
function update(slide) {
  const start = sceneOrder.get(slide.sceneId);
  if (start === undefined) throw new Error(`Unknown scene: ${slide.sceneId}`);
  const reveals = revealTimes.get(slide.sceneId) ?? [];
  const before = JSON.stringify(slide.fragments ?? null);
  if (reveals.length) {
    slide.fragments = [
      Number((start + BASE_HOLD).toFixed(2)),
      ...reveals.map((time) => Number((time + REVEAL_DURATION + REST_PAD).toFixed(2))),
    ];
  } else {
    delete slide.fragments;
  }
  if (JSON.stringify(slide.fragments ?? null) !== before) changed += 1;
}

island.slides.forEach(update);
(island.slideSequences ?? []).forEach((sequence) => sequence.slides.forEach(update));

const formatted = JSON.stringify(island, null, 2)
  .split("\n")
  .map((line) => (line.trim() ? "  " + line : line))
  .join("\n");
const next =
  html.slice(0, islandMatch.index + islandMatch[1].length) +
  formatted +
  html.slice(islandMatch.index + islandMatch[1].length + islandMatch[2].length);
writeFileSync(FILE, next);

const clicks = island.slides.reduce((sum, slide) => sum + Math.max(1, slide.fragments?.length ?? 0), 0);
console.log(`Synced ${island.slides.length} main slides (${changed} changed). Main-line walk: ${clicks} clicks.`);
