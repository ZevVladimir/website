<%*
// Get the current note's title (which is the paper's title/link)
const paperTitle = tp.file.title.slice(0,-5);
const paperPath = tp.file.path(true);
console.log(paperTitle, paperPath)
const initialPath = paperPath.endsWith('.md') ? paperPath : paperPath + '.md';
const initialFile = app.vault.getAbstractFileByPath(initialPath);
const paperLink = `[[${paperTitle}]]`;
const authorFolderPath = "Files/Authors"; // Path to where authors are stored

// Get the content of the current note 
let content = tp.file.content;

// Regular Expression to find all links in the 'Files/Authors/' folder
const authorLinks = [...content.matchAll(/\[\[(Files\/Authors\/.*?)\]\]/g)]
    .map(match => match[1]);

// Use a Set to store unique author paths to avoid processing the same author multiple times
const uniqueAuthorPaths = [...new Set(authorLinks)];

// Standardize the authors' names to be 'Lastname, Initial' to avoid duplicate files for the same person
const normalizeAuthorName = (name) => {
    // 1. Check for 'Lastname, Full Firstname' format
    const fullNameMatch = name.match(/^(.+),\s*([A-Z][a-z]+)/);
    if (fullNameMatch) {
        const lastName = fullNameMatch[1].trim();
        const firstNameInitial = fullNameMatch[2].charAt(0);
        // Return the standardized format: 'Lastname, Initial'
        return `${lastName}, ${firstNameInitial}`;
    }

    // 2. Handle 'Lastname, Initial.'
    // If the name ends with a period, remove it.
    if (name.match(/,\s*[A-Z]\.$/)) {
        return name.replace(/\.$/, '');
    }

    // If it's already in 'Lastname, Initial' or another format, return as is
    return name;
};

// Object to store links that need replacement in the current note
let linksToReplace = {};

for (const authorPath of uniqueAuthorPaths) {
    const rawAuthorName = authorPath.split('/').pop(); // Original name (e.g., 'Aigrain, Suzanne')
    const authorName = normalizeAuthorName(rawAuthorName); // Normalized name (e.g., 'Aigrain, S')

    const normalizedAuthorPath = `${authorFolderPath}/${authorName}`;

    if (authorPath !== normalizedAuthorPath) {
        linksToReplace[authorPath] = normalizedAuthorPath;
    }

    // 1. Check if the author page already exists
    if (await tp.file.exists(normalizedAuthorPath + ".md")) {
        // 2. If it exists, append the link to the paper
        const authorFile = app.vault.getAbstractFileByPath(normalizedAuthorPath + ".md");
        const authorContent = await app.vault.read(authorFile);

        // Only add the link if it's not already there (prevents duplicates)
        if (!authorContent.includes(paperLink)) {
            await app.vault.modify(authorFile, authorContent + "\n- " + paperLink);
            console.log(`Updated existing author page: ${authorName}`);
        } else {
            console.log(`Paper link already exists in: ${authorName}`);
        }

    } else {
        // 3. If it does not exist, create a new author page

        // Define the content for the new author file
        const newAuthorContent = `---
type: Author
aliases:
- ${rawAuthorName}
---
# ${authorName}

## Papers
- ${paperLink}`;
        // Create the file in the specified path
        await tp.file.create_new(newAuthorContent, authorName, false, authorFolderPath);
        console.log(`Created new author page: ${authorName}`);
    }
}

// Update the links in the current paper note
// Ensure we have a proper path (append .md if needed)
const newPath = initialPath.slice(0, -8); 

// Read the actual vault content (fresh)
let modifiedContent = await app.vault.read(initialFile);
// Don't want to cyclicly be calling this script
const lines = modifiedContent.split('\n'); 
// 2. Remove the call to this script 
modifiedContent = lines.slice(0, -5).join('\n');

// Regex: capture full path (group 1), raw author name (group 2), optional alias (group 3)
const authorLinkRegex = /\[\[(Files\/Authors\/([^|\]\#]+?))(?:\|([^\]\#]+))?\]\]/g;

let changes = 0;
modifiedContent = modifiedContent.replace(authorLinkRegex, (match, fullPath, rawAuthor, alias) => {
	// rawAuthor is like "Militzer, Burkhard"
	const normalized = normalizeAuthorName(rawAuthor.trim());

	// Build the normalized path
	const normalizedPath = `Files/Authors/${normalized}`;

	// Decide replacement format:
	// - use no explicit alias so Obsidian will display the filename (which is normalized)
	// - if you prefer an explicit alias, replace the return with `[[${normalizedPath}|${normalized}]]`
	const replacement = `[[${normalizedPath}]]`;

	if (match !== replacement) {
		console.log(`Replacing: ${match} -> ${replacement}`);
		changes++;
	}
	return replacement;
});

await tp.file.create_new(modifiedContent, newPath, true);

console.log(`[Templater Script] Deleting file: ${initialPath}`);
await tp.app.vault.trash(initialFile, true);

// Optional: Display a confirmation message
new Notice("Author pages processed and links standardized successfully!", 4000);
%>