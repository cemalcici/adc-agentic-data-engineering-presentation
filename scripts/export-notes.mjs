// Speaker notes live in the composition island so presenter mode can read them.
// This mirrors them into a Markdown file for rehearsal away from a browser, and
// for anyone reading the published repo. Generated: edit the island, not this.
import { readFileSync, writeFileSync } from "node:fs";

const COMPOSITION = "composition/index.html";
const OUT = "SPEAKER-NOTES.md";

const html = readFileSync(COMPOSITION, "utf8");
const island = html.match(
  /<script type="application\/hyperframes-slideshow\+json">([\s\S]*?)<\/script>/
);
if (!island) {
  console.error(`No slideshow island in ${COMPOSITION}`);
  process.exit(1);
}
const manifest = JSON.parse(island[1]);

const labels = new Map();
for (const match of html.matchAll(
  /data-composition-id="([^"]+)"[\s\S]{0,220}?data-label="([^"]+)"/g
)) {
  labels.set(match[1], match[2]);
}

const lines = [
  "# Konuşmacı notları",
  "",
  "`composition/index.html` içindeki slideshow island'ından üretildi.",
  "Düzenlemek için island'ı düzenleyin, sonra `npm run notes` çalıştırın.",
  "Sunum sırasında bu dosyaya ihtiyacınız yok: Present'e basın, notlar",
  "sunucu ekranında zaten duruyor.",
  "",
  "---",
  ""
];

const render = (slide, index, prefix = "") => {
  const label = labels.get(slide.sceneId) || slide.sceneId;
  lines.push(`## ${prefix}${index} · ${label}`);
  lines.push("");
  lines.push(`\`${slide.sceneId}\``);
  if (slide.fragments?.length) {
    lines.push(
      `\nBu slaytta ${slide.fragments.length} adımlı açılım var: her Next tuşu bir maddeyi açıyor.`
    );
  }
  if (slide.hotspots?.length) {
    for (const hotspot of slide.hotspots) {
      lines.push(`\nTıklanabilir kutucuk: "${hotspot.label}" → ${hotspot.target}`);
    }
  }
  lines.push("");
  lines.push(slide.notes || "_Not yok._");
  lines.push("");
};

manifest.slides.forEach((slide, i) => render(slide, i + 1));

for (const sequence of manifest.slideSequences || []) {
  lines.push("---");
  lines.push("");
  lines.push(`# Ek: ${sequence.label}`);
  lines.push("");
  lines.push("Ana hatta değil. Yalnızca bir kutucuğa tıklanırsa açılıyor.");
  lines.push("");
  sequence.slides.forEach((slide, i) => render(slide, i + 1, "E"));
}

writeFileSync(OUT, lines.join("\n"));
console.log(`Wrote ${OUT} (${manifest.slides.length} main slides).`);
