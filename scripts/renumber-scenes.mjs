// Scenes are laid out in fixed 10-second blocks, so inserting one slide shifts
// every start time after it. Doing that by hand across 40-odd scenes is how a
// deck ends up with two scenes claiming the same second and a timeline that
// silently renders the wrong frame. This derives every start time from DOM
// order instead, and rewrites the scene, its clip, and the runtime's scene count.
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "composition/index.html";
const SCENE_SECONDS = 10;

let html = readFileSync(FILE, "utf8");

const sceneIds = [...html.matchAll(/<div class="scene-frame" id="scene-([a-z0-9-]+)"/g)].map(
  (m) => m[1]
);
if (!sceneIds.length) {
  console.error("No scenes found.");
  process.exit(1);
}

sceneIds.forEach((id, index) => {
  const start = index * SCENE_SECONDS;

  const scene = new RegExp(
    `(<div class="scene-frame" id="scene-${id}" data-composition-id="${id}" data-start=")\\d+(")`
  );
  const clip = new RegExp(`(<section class="clip" id="clip-${id}" data-start=")\\d+(")`);
  if (!scene.test(html) || !clip.test(html)) {
    console.error(`Scene "${id}" does not match the expected shape; aborting.`);
    process.exit(1);
  }
  html = html.replace(scene, `$1${start}$2`).replace(clip, `$1${start}$2`);
});

// The root composition spans every scene, and the progress bar spans only the
// main line, so both have to follow the count rather than a written-down number.
const branchIds = new Set(
  [...html.matchAll(/"slideSequences":[\s\S]*$/g)][0]
    ? [...html.matchAll(/"sceneId":\s*"([a-z0-9-]+)"/g)].map((m) => m[1])
    : []
);
const island = html.match(
  /<script type="application\/hyperframes-slideshow\+json">([\s\S]*?)<\/script>/
);
let mainCount = sceneIds.length;
if (island) {
  const manifest = JSON.parse(island[1]);
  mainCount = manifest.slides.length;
}

const total = sceneIds.length * SCENE_SECONDS;
html = html.replace(
  /(id="scene-root"[\s\S]{0,200}?data-duration=")\d+(")/,
  `$1${total}$2`
);
html = html.replace(/(var MAIN_LINE_SCENES = )\d+(;)/, `$1${mainCount}$2`);

writeFileSync(FILE, html);
console.log(
  `Renumbered ${sceneIds.length} scenes (${total}s total, ${mainCount} on the main line).`
);
