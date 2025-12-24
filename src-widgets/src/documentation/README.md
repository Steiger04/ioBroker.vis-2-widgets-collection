# Widget Collection Documentation

This directory contains the complete documentation for the ioBroker.vis-2 Widget Collection.

## Structure

```
documentation/
├── Home.md          # Main entry point with language selection
├── de/              # German documentation
│   ├── De-Home.md
│   ├── De-_Sidebar.md
│   ├── De-State-Widget.md
│   ├── De-Switch-Widget.md
│   ├── De-Checkbox-Widget.md
│   ├── De-Slider-Widget.md
│   ├── De-ButtonGroup-Widget.md
│   ├── De-Select-Widget.md
│   ├── De-RadioGroup-Widget.md
│   ├── De-Dialog-Widget.md
│   ├── De-Gauge-Widget.md
│   └── De-Light-Widget.md
├── en/              # English documentation
│   ├── En-Home.md
│   ├── En-_Sidebar.md
│   ├── En-State-Widget.md
│   ├── En-Switch-Widget.md
│   ├── En-Checkbox-Widget.md
│   ├── En-Slider-Widget.md
│   ├── En-ButtonGroup-Widget.md
│   ├── En-Select-Widget.md
│   ├── En-RadioGroup-Widget.md
│   ├── En-Dialog-Widget.md
│   ├── En-Gauge-Widget.md
│   └── En-Light-Widget.md
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

- **Trigger**: Pushes to `main` branch, tags, or changes in `src/documentation/**`
- **Workflow**: `.github/workflows/sync-wiki.yml`
- **Process**:
    1. Creates a temporary directory `/tmp/wiki-sync`
    2. Copies `Home.md` (language selection page)
    3. Copies all `De-*.md` files from `de/`
    4. Copies all `En-*.md` files from `en/`
    5. Copies all images from `img/`
    6. Adjusts image paths for wiki compatibility (`../img/` → `img/`)
    7. Performs a single sync operation to the wiki
- **Result**: Both German and English documentation are published to the wiki with proper language prefixes

## Editing Documentation

1. Edit the Markdown files in this directory
2. Commit and push changes to the repository
3. Documentation is automatically synced to the wiki
4. No manual wiki editing required

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
- `De-_Sidebar.md` and `En-_Sidebar.md` are the wiki navigation sidebars for each language
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
6. Add a link to the new language in the main `Home.md` file
7. The sync workflow will automatically include the new language files
8. Update `.github/workflows/sync-wiki.yml` to include the new language
