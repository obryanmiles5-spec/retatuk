const fs = require("fs");
const content = fs.readFileSync("src/data.ts", "utf8");

// We need to parse PEPTIDES_DATA
// Let's just evaluate the file (since it's mostly plain objects)
const tsContent = content.replace(/export /g, "").replace(/import.*?;/g, "");
// compile it via tsc or just evaluate it
