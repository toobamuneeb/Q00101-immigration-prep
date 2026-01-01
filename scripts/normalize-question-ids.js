const fs = require("fs");
const path = require("path");
const file = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "form-mappings",
  "i-485-field-mappings.ts"
);
let content = fs.readFileSync(file, "utf8");
const beforeCount = (content.match(/questionId:\s*"[^"]+(Yes|No)"/g) || [])
  .length;
const updated = content.replace(
  /(questionId:\s*")([^\"]+?)(?:Yes|No)(")/g,
  "$1$2$3"
);
const afterCount = (updated.match(/questionId:\s*"[^"]+(Yes|No)"/g) || [])
  .length;
fs.writeFileSync(file, updated, "utf8");
console.log("Normalized questionIds in:", file);
console.log("Before matches:", beforeCount, "After matches:", afterCount);
