// The slideshow island must exist in two places: inside the composition (read by
// `hyperframes present` and by lint) and inside the <hyperframes-slideshow>
// wrapper (read from its own innerHTML by the web component). Keeping two copies
// by hand is how decks silently lose their navigation. This copies one into the
// other and fails loudly when it cannot.
import { readFileSync, writeFileSync } from "node:fs";

const COMPOSITION = "composition/index.html";
const WRAPPER = "index.html";
const ISLAND = /<script type="application\/hyperframes-slideshow\+json">[\s\S]*?<\/script>/;

const composition = readFileSync(COMPOSITION, "utf8");
const match = composition.match(ISLAND);
if (!match) {
  console.error(`No slideshow island found in ${COMPOSITION}`);
  process.exit(1);
}

// Parse it here rather than at slide time: a malformed island renders the deck
// unnavigable in the browser with no error anyone will notice.
const json = match[0].replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
try {
  JSON.parse(json);
} catch (error) {
  console.error(`Island in ${COMPOSITION} is not valid JSON: ${error.message}`);
  process.exit(1);
}

const wrapper = readFileSync(WRAPPER, "utf8");
if (!ISLAND.test(wrapper)) {
  console.error(`No slideshow island placeholder found in ${WRAPPER}`);
  process.exit(1);
}

const updated = wrapper.replace(ISLAND, match[0]);
if (updated === wrapper) {
  console.log("Island already in sync.");
} else {
  writeFileSync(WRAPPER, updated);
  console.log(`Island copied from ${COMPOSITION} to ${WRAPPER}.`);
}
