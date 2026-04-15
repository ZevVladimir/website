<%* 
let file = app.workspace.getActiveFile(); if (!file) { const leaf = app.workspace.activeLeaf; if (leaf && leaf.view && leaf.view.file) { file = leaf.view.file; } }
const content = await app.vault.read(file); 
const lines = content.split("\n");

const lineIndex = lines.findIndex(l => l.includes("due ") && !l.includes("[due::") ); 
if (lineIndex === -1) { new Notice("No unformatted 'due' found"); return; }

const line = lines[lineIndex]; 
const duePos = line.indexOf("due "); 
const repeatPos = line.indexOf("repeat "); 
const hasInlineRepeat = line.includes("repeat ") && !line.includes("[repeat::") && repeatPos < duePos;

let repeatField = ""; 
let startPos;

if (hasInlineRepeat) { const repeatRule = line.substring(repeatPos + 7, duePos).trim(); repeatField = "[repeat:: " + repeatRule + "] "; startPos = repeatPos; } else { startPos = duePos; }

const rawDate = line.substring(duePos + 4).trim(); 
if (!rawDate) { new Notice("No date found after 'due'"); return; }

const nldPlugin = app.plugins.getPlugin("nldates-obsidian"); if (!nldPlugin) { new Notice("Natural Language Dates not found"); return; }

const parsed = nldPlugin.parseDate(rawDate); 
if (!parsed || !parsed.moment || !parsed.moment.isValid()) { new Notice("Could not parse: " + rawDate); return; }

if (parsed.moment.isBefore(moment(), "day")) parsed.moment.add(7, "days");

const formatted = parsed.moment.format("YYYY-MM-DD"); 
const newLine = line.substring(0, startPos) + repeatField + "[due:: " + formatted + "]"; lines[lineIndex] = newLine;

await app.vault.modify(file, lines.join("\n")); new Notice("Due date set: " + formatted); 
%>