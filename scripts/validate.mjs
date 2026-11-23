import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFileSync(resolve(root, name), "utf8");
const app = read("app.js");
const data = read("data.js");
const page = read("index.html");
const styles = read("styles.css");
const context = { window: {} };

runInNewContext(data, context, { timeout: 2000, filename: "data.js" });
const groups = context.window.CATALOG_GROUPS;
const items = context.window.CATALOG_SOLUTIONS;
assert(Array.isArray(groups) && groups.length === 10, "Expected exactly 10 groups");
assert(Array.isArray(items) && items.length === 100, "Expected exactly 100 solutions");
const seenIds = new Set();
const seenSlugs = new Set();
for (const [index, item] of items.entries()) {
  const expectedId = index + 1;
  assert.equal(item.id, expectedId, "IDs must remain 1..100 in canonical order");
  assert.equal(item.slug, "gp-" + String(expectedId).padStart(3, "0"));
  assert(!seenIds.has(item.id) && !seenSlugs.has(item.slug), "Duplicate ID or slug");
  seenIds.add(item.id);
  seenSlugs.add(item.slug);
  assert(Number.isInteger(item.category) && item.category >= 0 && item.category < groups.length, "Invalid category at " + item.id);
  for (const key of ["name", "problem", "mechanism", "experiment", "metrics", "baseline", "risk", "stage"]) {
    assert(typeof item[key] === "string" && item[key].trim().length > 5, "Missing " + key + " at " + item.id);
  }
  assert(Array.isArray(item.steps) && item.steps.length >= 3, "Missing implementation steps at " + item.id);
}
for (const [i, group] of groups.entries()) {
  assert(typeof group.name === "string" && group.name.length > 2, "Invalid group name: " + i);
  assert.equal(items.filter((item) => item.category === i).length, 10, "Each group must contain 10 solutions");
}
assert(page.includes('<html lang="vi">'), "Missing document language");
assert(page.includes("100 giải pháp kỹ thuật cho hệ sinh thái công nghệ CVNSS4.0"), "Incorrect CVNSS4.0 site title");
for (const id of [
  "countSolutions", "countGroups", "countPriority", "search", "cards",
  "categoryTabs", "detailDialog", "modalContent", "resultCount",
  "starFilter", "sortSelect", "toast", "searchWrap", "clearSearch", "themeToggle"
]) {
  assert(page.includes('id="' + id + '"'), "Missing UI element: " + id);
}
for (const asset of ['src="data.js"', 'src="app.js?v=3"', 'href="styles.css?v=3"']) {
  assert(page.includes(asset), "Missing static asset: " + asset);
}
for (const selector of [".hero-panel", ".solution", ".modal-layout", ".cat-tab", ".theme-toggle", ".search"]) {
  assert(styles.includes(selector), "Missing CSS selector: " + selector);
}
assert(styles.split("{").length === styles.split("}").length, "Unbalanced CSS braces");
new Function(app);
new Function(data);
console.log("PASS: 100 unique solutions, 10 valid groups, detail fields, HTML/CSS assets and JavaScript syntax.");
