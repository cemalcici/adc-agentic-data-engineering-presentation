// The island's hold points must match the slides' actual steps. Deriving them
// from the DOM rather than maintaining them by hand is the only way that stays
// true as slides move, and each scene is bounded at its own </section> because
// the runtime script below the scenes also contains the string "data-frag" and
// would otherwise be counted as a step on whichever scene happens to be last.
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "composition/index.html";
const SCENE_SECONDS = 10;
const ENTRY_HOLD = 0.7; // a slide opens with nothing revealed
const STEP_OFFSET = 1.2;
const STEP_GAP = 0.4;

const html = readFileSync(FILE, "utf8");

const scenes = [...html.matchAll(/<div class="scene-frame" id="scene-([a-z0-9-]+)"([\s\S]*?)<\/section>/g)];
if (!scenes.length) {
  console.error("No scenes found.");
  process.exit(1);
}

const steps = new Map();
const order = new Map();
scenes.forEach(([, id, body], index) => {
  steps.set(id, (body.match(/data-frag/g) || []).length);
  order.set(id, index);
});

const islandMatch = html.match(
  /(<script type="application\/hyperframes-slideshow\+json">\n)([\s\S]*?)(\n    <\/script>)/
);
if (!islandMatch) {
  console.error("No slideshow island found.");
  process.exit(1);
}
const island = JSON.parse(islandMatch[2]);

let touched = 0;
const applyTo = (slide) => {
  const id = slide.sceneId;
  if (!order.has(id)) {
    console.error(`Island references "${id}", which has no scene.`);
    process.exit(1);
  }
  const count = steps.get(id);
  const start = order.get(id) * SCENE_SECONDS;
  const before = JSON.stringify(slide.fragments ?? null);
  if (count > 0) {
    slide.fragments = [
      Number((start + ENTRY_HOLD).toFixed(2)),
      ...Array.from({ length: count }, (_, i) =>
        Number((start + STEP_OFFSET + i * STEP_GAP).toFixed(2))
      )
    ];
  } else {
    delete slide.fragments;
  }
  if (JSON.stringify(slide.fragments ?? null) !== before) touched += 1;
};

island.slides.forEach(applyTo);
(island.slideSequences ?? []).forEach((sequence) => sequence.slides.forEach(applyTo));

const indented = JSON.stringify(island, null, 2)
  .split("\n")
  .map((line) => (line.trim() ? "      " + line : line))
  .join("\n");

writeFileSync(FILE, html.slice(0, islandMatch.index + islandMatch[1].length) + indented + html.slice(islandMatch.index + islandMatch[1].length + islandMatch[2].length));

const clicks = island.slides.reduce((sum, s) => sum + Math.max(1, (s.fragments ?? []).length), 0);
console.log(
  `Synced ${island.slides.length} main slides (${touched} changed). Main-line walk: ${clicks} clicks.`
);
