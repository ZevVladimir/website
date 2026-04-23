<%*
const filename = await tp.system.prompt("Enter the filename")
const tagsInput = await tp.system.prompt("Enter tags (comma-separated)")
const tagsArray = tagsInput.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0)
const aliasesInput = await tp.system.prompt("Enter aliases (comma-separated)")
const aliasesArray = aliasesInput.split(",").map(alias => alias.trim()).filter(alias => alias.length > 0)

const publishInput = await tp.system.prompt("Publish to website? (True/False)")

await tp.file.rename(filename)
await tp.file.move("Glossary/" + filename)
-%>
---
tags: [<% tagsArray.join(", ") %>]
aliases: [<% aliasesArray.join(", ") %>]
publish: <% publishInput %>
---


