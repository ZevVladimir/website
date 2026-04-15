<%*
const folder = "Glossary"
const filename = await tp.system.prompt("Enter the filename")
if (tp.file.title === "Untitled") {
  const tagsInput = await tp.system.prompt("Enter tags (comma-separated)")
  const tagsArray = tagsInput.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0)
  const aliasesInput = await tp.system.prompt("Enter aliases (comma-separated)")
  const aliasesArray = aliasesInput.split(",").map(alias => alias.trim()).filter(alias => alias.length > 0)

  const content = `---
tags: [${tagsArray.join(", ")}]
aliases: [${aliasesArray.join(", ")}]
---
`

  const newFile = await tp.file.create_new(content, filename, false, folder)
  const leaf = app.workspace.getLeaf('tab');
  await leaf.openFile(newFile);

  return
}
%>

