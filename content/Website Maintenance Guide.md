---
publish: false
---
# Website Maintenance Guide

Personal cheat sheet for keeping **zeevvladimir.com** up to date. This note has `publish: false`, so it will **not** show up on the website.

All terminal commands are run from the Quartz folder:

```bash
cd ~/quartz
```

---

## How the pieces fit together

- **Obsidian** edits the Markdown files in `~/quartz/content/`.
- **Quartz** (the rest of `~/quartz/`) turns those notes into a website.
- **GitHub** (`github.com/ZevVladimir/website`, branch `v4`) stores everything.
- **GitHub Actions + GitHub Pages**: every push to `v4` automatically rebuilds and deploys the site (workflow: `.github/workflows/deploy.yml`). There is no separate "deploy" step. Pushing *is* publishing.

---

## 1. Making a note appear on the site

The site uses the `ExplicitPublish` filter: **a note is only published if its frontmatter says `publish: true`.**

```yaml
---
publish: true
title: Optional Custom Title
aliases:
  - other name
---
```

- No `publish: true` → the note is skipped (good for drafts and private notes).
- `draft: true` → also skipped, even if `publish: true` is set.
- Anything in a `private/` folder, `Templates/`, `Files/Papers/`, or `.obsidian/` is always ignored (set in `ignorePatterns` in `quartz.config.ts`).
- Links: `[[Note Name]]` or `[[Note Name|display text]]` work like in Obsidian. A link to an unpublished note shows up as plain text, not a broken page.
- Images go in `content/Files/Images/` and are embedded with `![[image.png]]`.
- The home page is `content/index.md`.

---

## 2. Previewing the site locally

```bash
npx quartz build --serve
```

Then open **http://localhost:8080** in a browser.

- The preview reloads automatically when you save a note in Obsidian.
- Stop it with `Ctrl + C` in the terminal.
- Only `publish: true` notes appear here too, so what you see is what will go live.
- If something looks stale or weird, stop it and run it again. If that doesn't help, delete the cache first: `rm -rf .quartz-cache public`

---

## 3. Publishing (pushing changes live)

```bash
npx quartz sync
```

This one command:
1. Commits all your changes (message: "Quartz sync: <date>").
2. Pulls any changes from GitHub.
3. Pushes to GitHub, which triggers the automatic deploy.

The site updates **about 1–2 minutes** later. Check progress at:
https://github.com/ZevVladimir/website/actions
(green check = live, red X = build failed; click it to see the error).

Useful variations:
- `npx quartz sync --no-pull`: push without pulling first.
- `npx quartz sync --commit -m "message"`: use your own commit message (combine flags as needed).

**Manual git equivalent** (if you prefer):
```bash
git status            # see what changed
git add -A
git commit -m "Update notes"
git push
```

---

## 4. Typical workflow

1. Edit notes in Obsidian (remember `publish: true` on new notes).
2. `npx quartz build --serve` → check http://localhost:8080
3. `Ctrl + C` to stop the preview.
4. `npx quartz sync` to publish.
5. Wait about 2 minutes, then check zeevvladimir.com (hard refresh: `Cmd + Shift + R`).

---

## 5. Changing the look and settings

| What | File |
|---|---|
| Site title, colors, fonts, base URL, ignored folders, plugins | `quartz.config.ts` |
| Page layout (sidebar, explorer, graph, footer, etc.) | `quartz.layout.ts` |
| Custom CSS | `quartz/styles/custom.scss` |
| Static files (gallery page, CNAME, photos) | `quartz/static/` and `static/` |

After editing these, preview with `npx quartz build --serve`, then `npx quartz sync`.

---

## 6. Updating Quartz itself (occasionally)

```bash
npx quartz update
```

This pulls the newest Quartz code from the official repo (`upstream`). Afterwards:
```bash
npm install
npx quartz build --serve    # make sure everything still works
npx quartz sync
```
If it reports merge conflicts, resolve them (or ask for help) before syncing.

---

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| Note isn't on the site | Check that it has `publish: true`, isn't `draft: true`, and isn't in an ignored folder |
| `npx quartz` errors about missing modules | Run `npm install` |
| Node version error | Quartz needs Node ≥ 22. Check with `node -v` |
| `sync` fails with a pull/merge conflict | Run `git status`, fix the conflicting files, `git add -A`, `git commit`, then `npx quartz sync` again |
| Push rejected / authentication error | SSH key issue. Test with `ssh -T git@github.com` |
| Deploy failed (red X in Actions) | Open the failed run on GitHub and read the "Build Quartz" step. Usually broken frontmatter in a note |
| Site didn't change after a successful deploy | Hard refresh (`Cmd + Shift + R`) or try a private window |
| Syncthing conflict files (`*.sync-conflict-*`) | Already ignored by Quartz. Compare them with the original, keep the right version, and delete the conflict file |

---

## 8. Command quick reference

```bash
cd ~/quartz
npx quartz build --serve    # preview at http://localhost:8080
npx quartz build            # build only (output in public/)
npx quartz sync             # commit + push → site goes live
npx quartz update           # update Quartz from upstream
npm install                 # reinstall dependencies
git status                  # see what's changed
```

Official docs: https://quartz.jzhao.xyz
