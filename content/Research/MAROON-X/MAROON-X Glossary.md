```dataviewjs
let pages = dv.pages('"Glossary"')
    .where(p => p.tags && p.tags.includes("MAROON-X"))
    .sort(p => p.file.name);

// Manual grouping by first letter
let grouped = {};

for (let page of pages) {
  let firstLetter = page.file.name[0].toUpperCase();
  if (!grouped[firstLetter]) {
    grouped[firstLetter] = [];
  }
  grouped[firstLetter].push(page);
}

// Render each group
for (let letter of Object.keys(grouped).sort()) {
  dv.header(2, letter);
  for (let page of grouped[letter]) {
    let aliases = Array.isArray(page.aliases) ? page.aliases : [];
    let aliasList = aliases.length > 0 ? ` (${aliases.join(", ")})` : "";
    dv.paragraph(`- [[${page.file.name}]]${aliasList}`);
  }
}
```

http://www.starlink.ac.uk/docs/sg9.htx/sg9se6.html#x7-340006
