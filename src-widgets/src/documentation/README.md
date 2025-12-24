# Widget Collection Documentation

This directory contains the complete documentation for the ioBroker.vis-2 Widget Collection.

## Structure

```
documentation/
├── de/              # German documentation
│   ├── Home.md
│   ├── _Sidebar.md
│   ├── State-Widget.md
│   ├── Switch-Widget.md
│   ├── Checkbox-Widget.md
│   ├── Slider-Widget.md
│   ├── ButtonGroup-Widget.md
│   ├── Select-Widget.md
│   ├── RadioGroup-Widget.md
│   ├── Dialog-Widget.md
│   ├── Gauge-Widget.md
│   └── Light-Widget.md
└── en/              # English documentation
    ├── Home.md
    ├── _Sidebar.md
    ├── State-Widget.md
    ├── Switch-Widget.md
    ├── Checkbox-Widget.md
    ├── Slider-Widget.md
    ├── ButtonGroup-Widget.md
    ├── Select-Widget.md
    ├── RadioGroup-Widget.md
    ├── Dialog-Widget.md
    ├── Gauge-Widget.md
    └── Light-Widget.md
```

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
- **Result**: Both German and English documentation are published to the wiki

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

- Use hyphenated names: `State-Widget.md`, `ButtonGroup-Widget.md`
- Keep consistent naming across languages
- `_Sidebar.md` is the wiki navigation sidebar

## Images

Images are stored in `src-widgets/src/documentation/img/` and referenced as:

```markdown
![Widget Name](img/collection-widget-name.png)
```

**Important:** Use `img/` (not `../img/` or `../../img/`) for GitHub Wiki compatibility. The sync action handles the path mapping automatically.

## Language Support

Currently supported languages:

- **German (de)**: Primary documentation language
- **English (en)**: Full translation of German documentation

To add a new language:

1. Create a new directory (e.g., `fr/` for French)
2. Copy and translate all files from `en/` or `de/`
3. Update `.github/workflows/sync-wiki.yml` to include the new language
