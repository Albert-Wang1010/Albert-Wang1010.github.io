
const fs = require("fs");

const file = process.argv[2];
if (!file) {
  console.error(
    "Usage: node recolor-lottie.js src/assets/lottie/landingPerson.json"
  );
  process.exit(1);
}

const approxEq = (a, b, eps = 1e-4) =>
  a.length === b.length && a.every((x, i) => Math.abs(x - b[i]) <= eps);

// --- Targets (from your original JSON) ---
// Clothing maroons that should become shirt/jacket blues:
const JACKET_OLD_1 = [0.2275, 0.1255, 0.1490]; // maroon (main jacket)
const JACKET_OLD_2 = [0.1647, 0.1255, 0.1490]; // maroon (secondary parts)

// Pants original:
const PANTS_OLD = [0.1176, 0.1137, 0.1922];

// Hair / eyebrow browns in your file (these got recolored before):
const HAIR_OLD_1 = [0.2549, 0.2000, 0.1882];
const HAIR_OLD_2 = [0.1804, 0.1608, 0.1451];

// --- New colors ---
// Darker blue shirt/jacket (Tailwind-ish blues)
const JACKET_NEW_MAIN = [0.1451, 0.3059, 0.8471]; // #2563EB
const JACKET_NEW_DARK = [0.1176, 0.2510, 0.6863]; // #1E40AF

// Pants (slate)
const PANTS_NEW = [0.3922, 0.4549, 0.5451]; // #64748B

// Hair/eyebrows (dark brown; reads nearly black on dark bg)
const HAIR_NEW = [0.1451, 0.0941, 0.0706]; // ~#251811

let json;
try {
  json = JSON.parse(fs.readFileSync(file, "utf8"));
} catch (e) {
  console.error("Failed to read/parse JSON:", e.message);
  process.exit(1);
}

let changed = 0;

function walk(node) {
  if (!node || typeof node !== "object") return;

  // Lottie fills are typically: { ty:"fl", c:{ k:[r,g,b] } }
  if (node.ty === "fl" && node.c && Array.isArray(node.c.k) && node.c.k.length === 3) {
    const k = node.c.k;

    // Jacket/shirt -> darker blues
    if (approxEq(k, JACKET_OLD_1)) {
      node.c.k = [...JACKET_NEW_MAIN];
      changed++;
    } else if (approxEq(k, JACKET_OLD_2)) {
      node.c.k = [...JACKET_NEW_DARK];
      changed++;
    }

    // Pants -> slate
    if (approxEq(k, PANTS_OLD)) {
      node.c.k = [...PANTS_NEW];
      changed++;
    }

    // Hair/eyebrow -> dark brown/black
    if (approxEq(k, HAIR_OLD_1) || approxEq(k, HAIR_OLD_2)) {
      node.c.k = [...HAIR_NEW];
      changed++;
    }
  }

  for (const key of Object.keys(node)) {
    const val = node[key];
    if (Array.isArray(val)) val.forEach(walk);
    else if (val && typeof val === "object") walk(val);
  }
}

walk(json);

fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
console.log(`Done. Updated ${changed} fill color(s) in: ${file}`);
EOF
