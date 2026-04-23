<%*
const folder = "Personal/Repertoire/Recipes"
const filename = await tp.system.prompt("Enter the recipe name")
if (tp.file.title === "Untitled") {
  const rating = await tp.system.prompt("Rating out of 10")
  const foodTypeInput = await tp.system.prompt("Enter food type(s) (comma-separated)")
  const foodTypeArray = foodTypeInput.split(",").map(foodType => foodType.trim()).filter(foodType => foodType.length > 0)
  const dateCreated = tp.date.now("YYYY-MM-DD")
  const url = await tp.system.prompt("What is the URL?")
  const vegetarian = await tp.system.prompt("Is it vegetarian? (true/false)")

  const content = `---
Rating: ${rating}
Type of Food: [${foodTypeArray.join(", ")}] 
URL: ${url}  
Vegetarian: ${vegetarian}
Created: ${dateCreated} 
---
`

  const newFile = await tp.file.create_new(content, filename, false, folder)
  const leaf = app.workspace.getLeaf('tab');
  await leaf.openFile(newFile);

  return
}
%>

