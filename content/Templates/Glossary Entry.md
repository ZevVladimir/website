<%*
const filename = await tp.system.prompt("Enter the filename")
const aliasesInput = await tp.system.prompt("Enter aliases (comma-separated)")
const aliasesArray = aliasesInput.split(",").map(alias => alias.trim()).filter(alias => alias.length > 0)

const publishInput = await tp.system.prompt("Publish to website? (True/False)")

await tp.file.rename(filename)
await tp.file.move("Glossary/" + filename)
-%>
---
aliases: [<% aliasesArray.join(", ") %>]
publish: <% publishInput %>
---


