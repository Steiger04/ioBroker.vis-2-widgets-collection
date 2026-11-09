# Widget Collection Documentation

This directory contains the complete documentation for the ioBroker.vis-2 Widget Collection.

## Structure

```
documentation/
├── Home.md          # Main entry point with language selection
├── _Sidebar.md      # Wiki sidebar, shared by all pages
├── README.md        # This file; not synced
├── wikiStructure.test.ts  # Structure test for the wiki rules; not synced
├── de/              # German documentation
│   ├── De-Home.md
│   ├── De-State-Widget.md
│   ├── De-Switch-Widget.md
│   ├── De-Checkbox-Widget.md
│   ├── De-Slider-Widget.md
│   ├── De-Input-Widget.md
│   ├── De-ButtonGroup-Widget.md
│   ├── De-Select-Widget.md
│   ├── De-RadioGroup-Widget.md
│   ├── De-Dialog-Widget.md
│   ├── De-Gauge-Widget.md
│   ├── De-Light-Widget.md
│   ├── De-JsonTable-Widget.md
│   ├── De-Echarts-Widget.md
│   ├── De-Echarts-JSON-Formate.md
│   └── De-Theme-Studio.md
├── en/              # English documentation
│   ├── En-Home.md
│   ├── En-State-Widget.md
│   ├── En-Switch-Widget.md
│   ├── En-Checkbox-Widget.md
│   ├── En-Slider-Widget.md
│   ├── En-Input-Widget.md
│   ├── En-ButtonGroup-Widget.md
│   ├── En-Select-Widget.md
│   ├── En-RadioGroup-Widget.md
│   ├── En-Dialog-Widget.md
│   ├── En-Gauge-Widget.md
│   ├── En-Light-Widget.md
│   ├── En-JsonTable-Widget.md
│   ├── En-Echarts-Widget.md
│   ├── En-Echarts-JSON-Formats.md
│   └── En-Theme-Studio.md
└── img/             # Images shared by all languages
    ├── collection-state.png
    ├── collection-switch.png
    └── ...
```

**File Naming Convention:**

- All German documentation files use `De-` prefix
- All English documentation files use `En-` prefix
- Main `Home.md` has no prefix (language selection page)
- This prevents conflicts when syncing to GitHub Wiki's flat structure

## Settings Hierarchy

The documentation follows a clear hierarchy from general to specific:

1. **vis-2 Settings** - Always available for all widgets (CSS, positioning, etc.)
2. **Common Settings** - Shared settings for all widgets in this collection (icons, headers, colors, etc.)
3. **Widget-specific Settings** - Specific to the respective widget type
4. **Value-specific Settings** - Individual settings per value (if multiple values are defined)

**Important:** More specific settings always override more general settings.

## Wiki Synchronization

The documentation is automatically synchronized to the GitHub Wiki via GitHub Actions:

- **Trigger**: Pushes to the `main` branch or version tags. The `sync-wiki` job in `.github/workflows/test-and-release.yml` calls this reusable workflow; it does **not** run on other branches (e.g. `dev`) or on pull requests. Doc changes made on `dev` therefore go live only after they are merged to `main`.
- **Workflow**: `.github/workflows/sync-wiki.yml` (reusable, `workflow_call`), invoked by `.github/workflows/test-and-release.yml`
- **Process**:
    1. Creates a temporary directory `/tmp/wiki-sync` with an `img/` subfolder
    2. Copies `Home.md` (language selection page)
    3. Copies `_Sidebar.md` (wiki sidebar)
    4. Copies all `De-*.md` files from `de/`
    5. Copies all `En-*.md` files from `en/`
    6. Copies the direct files of `img/` to `img/`
    7. Rewrites `../img/` to `img/` in every copied Markdown file, anywhere in the text (`sed`)
    8. Performs a single sync operation to the wiki
- **Result**: Both German and English documentation are published to the wiki with proper language prefixes. Nothing else in this directory reaches the wiki, including this README and the structure test.

## Wiki Rules

The form below keeps the pages working in the wiki. The structure test enforces it where the rule says so.

**Documented by GitHub:**

- The file name sets the page title. The characters `\ / : * ? " < > |` are forbidden.
- The extension sets the rendering, here `.md`.
- `_Sidebar` fills the sidebar.
- Images only as PNG, JPEG or GIF.
- Not supported: transclusion, definition lists, indentation, table of contents.

**Verified on the live wiki and in the sync:**

- Page links keep the form `[Text](De-Xxx.md)`. GitHub renders them as working wiki links.
- Images stay `../img/name.png` in the sources. The sync rewrites `../img/` to `img/` everywhere in the text, code included, so this string may only appear in image references. The dots in the `sed` pattern match any character, so any two characters before `/img/` count as well (`example.com/img/` too).
- The sync only copies `Home.md`, `_Sidebar.md`, `de/De-*.md`, `en/En-*.md` and the direct files of `img/`. Subfolders in `img/` would break the copy step.
- Mermaid renders in the live wiki.

**Derived:**

- No new Markdown constructs: no inline HTML, no alert boxes, no footnotes, no `[[wiki links]]`. Mermaid stays allowed.

### Structure Test

`wikiStructure.test.ts` reads the sources and reports each violation as `file:line [rule] message`:

```bash
cd src-widgets && npx vitest run --project node src/documentation/
```

| Rule                                                                        | Checks                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file-name`                                                                 | `de/` holds only `De-*.md`, `en/` only `En-*.md`, no forbidden characters; `Home.md` and `_Sidebar.md` exist                                                                                                                          |
| `sidebar-link`, `sidebar-page`                                              | Every sidebar link leads to an existing page; every page in `de/` and `en/` is in the sidebar                                                                                                                                         |
| `link-form`, `link-target`                                                  | Internal page links use the flat `.md` form and have an existing target                                                                                                                                                               |
| `anchor`                                                                    | Anchors, on the same page or on another, lead to a heading, computed as on GitHub: lowercase, punctuation removed, umlauts kept, each space a hyphen, duplicates with a counter; code blocks are no headings                          |
| `image-path`, `image-file`, `image-string`                                  | References use `../img/name`, the file exists, and the string occurs nowhere else, code included                                                                                                                                      |
| `image-folder`                                                              | `img/` has no subfolders and only PNG, JPEG or GIF                                                                                                                                                                                    |
| `inline-html`, `alert-box`, `footnote`, `wiki-link`                         | Forbidden constructs; code blocks and inline code do not count                                                                                                                                                                        |
| `parity-pair`, `parity-lines`, `parity-kind`, `parity-image`, `parity-link` | Each DE/EN pair (`De-Echarts-JSON-Formate` pairs with `En-Echarts-JSON-Formats`) matches in line count, line kind, images and link targets apart from language prefix and anchor; only the first deviating line of a pair is reported |

Line kinds for parity: heading with level, table row, code fence, line inside a code block, blank line, blockquote, list item, other text.

The test does not check wording, the order of H2 headings or whether every panel field is documented; that remains a matter for review.

## Editing Documentation

1. Edit the Markdown files in this directory, German first, then English line by line
2. Run the structure test
3. Commit and push changes to the repository
4. Documentation is synced to the wiki on a push to `main` or a version tag
5. No manual wiki editing required

## Wiki Initialization

**Before the first sync**, the GitHub Wiki must be manually initialized:

1. Go to your repository → Wiki tab
2. Create any page (e.g., "Welcome")
3. Save the page
4. Now the sync action can update the wiki

**Note:** The wiki sync will fail if the wiki has never been initialized manually.

## File Naming

- Use language prefixes: `De-State-Widget.md`, `En-ButtonGroup-Widget.md`
- Keep consistent naming across languages
- GitHub Wiki uses a **single** root `_Sidebar.md` as the navigation sidebar on every page — it is not language-specific. The sidebar lists both the German and English widget pages (grouped by language), so all pages are reachable regardless of the current language.
- Main `Home.md` has no prefix (serves as language selection page)

## Images

Images are stored in `src-widgets/src/documentation/img/` and referenced as:

**In local files (de/ and en/ directories):**

```markdown
![Widget Name](../img/collection-widget-name.png)
```

**In the wiki (after sync):**

- Paths are automatically converted to `img/collection-widget-name.png`
- The sync workflow handles this conversion

**Important:** Use `../img/` in source files for local viewing. The sync action automatically converts these paths to `img/` for wiki compatibility.

## Language Support

Currently supported languages:

- **German (de)**: Primary documentation language
- **English (en)**: Full translation of German documentation

To add a new language:

1. Create a new directory (e.g., `fr/` for French)
2. Copy and translate all files from `en/` or `de/`
3. Rename all files with the appropriate language prefix (e.g., `Fr-Home.md`)
4. Update all internal links to use the new prefix
5. Update image paths to use `../img/` (for local viewing)
6. Add a link to the new language in the main `Home.md` file and the pages to `_Sidebar.md`
7. Update `.github/workflows/sync-wiki.yml` to copy the new language files; the sync does not pick them up on its own
8. Extend `wikiStructure.test.ts` with the new folder and prefix
