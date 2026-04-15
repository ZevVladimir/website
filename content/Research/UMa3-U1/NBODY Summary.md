
```dataviewjs
const subprojectOverride = dv.current().subproject;
const logfileOverride = dv.current().logfile;

const subproject = subprojectOverride || dv.current().file.name.replace(/ Summary$/, '');

let logfile;
if (logfileOverride) {
    logfile = logfileOverride;
} else {
    const folder = dv.current().file.folder;
    const logFiles = dv.pages('"' + folder + '"')
        .where(p => {
            const tags = p.file.tags ?? [];
            const inlineTags = p.tags ?? [];
            const allTags = [...tags, ...(Array.isArray(inlineTags) ? inlineTags : [inlineTags])];
            return allTags.some(t => String(t).toLowerCase() === 'log');
        })
        .values;
    logfile = logFiles.length > 0 ? logFiles[0].file.path : null;
}

if (!logfile) {
    dv.paragraph('⚠️ Could not find a file tagged log in this folder. Add the tag to your log file, or set logfile:: in this note frontmatter.');
} else {
    const file = app.vault.getAbstractFileByPath(logfile);
    if (!file) {
        dv.paragraph('⚠️ Log file not found at path: ' + logfile);
    } else {
        const content = await app.vault.read(file);
        const lines = content.split('\n');

        let currentDate = null;
        let currentSubsection = null;
        let capturing = false;
        let block = [];
        const sections = [];

        for (const line of lines) {
            const dateMatch = line.match(/^##\s+(\d{4}-\d{2}-\d{2})\s*$/);
            const projMatch = line.match(/^###\s+(.+?)\s*$/);

            if (dateMatch) {
                if (capturing && block.length) {
                    sections.push({ date: currentDate, subsection: currentSubsection, lines: [...block] });
                    block = [];
                }
                currentDate = dateMatch[1];
                capturing = false;
            } else if (projMatch) {
                if (capturing && block.length) {
                    sections.push({ date: currentDate, subsection: currentSubsection, lines: [...block] });
                    block = [];
                }
                capturing = projMatch[1].toLowerCase().startsWith(subproject.toLowerCase());
                if (capturing) currentSubsection = projMatch[1];
            } else if (capturing) {
                block.push(line);
            }
        }
        if (capturing && block.length) {
            sections.push({ date: currentDate, subsection: currentSubsection, lines: [...block] });
        }

        if (sections.length === 0) {
            dv.paragraph('No entries found for ' + subproject + ' in ' + logfile);
        } else {
            dv.header(1, subproject);
            for (const section of sections) {
                const trimmed = section.lines.join('\n').trim();
                if (trimmed) {
                    const heading = section.subsection !== subproject ? section.date + ' — ' + section.subsection : section.date;
                    dv.header(2, heading);
                    dv.paragraph(trimmed);
                }
            }
        }
    }
}
```
