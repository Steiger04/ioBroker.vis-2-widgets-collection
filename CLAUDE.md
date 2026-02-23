# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ioBroker vis-2 widget collection built with **React**, **TypeScript**, and **Material-UI v6.5**.
Widgets run inside the vis-2 Module Federation environment — MUI is **shared from the parent**, not a direct dependency.

## Build & Development Commands

All widget source lives in `src-widgets/`. Commands must be run from that directory unless noted.

```bash
# Dev server (proxies to ioBroker at localhost:8082)
cd src-widgets && npm run start        # Vite dev server on port 4173

# Build widget bundle → src-widgets/build/
cd src-widgets && npm run build        # tsc + vite build

# Full pipeline (clean → npm install → build → copy to widgets/)
npm run build                          # runs tasks.js orchestrator

# Copy build output to widgets/ without rebuilding
npm run copy-files

# Linting & formatting (run from repo root)
npm run lint
npm run lintfix
npm run format
npm run formatfix

# Tests (mocha, run from repo root)
npm test

# i18n key extraction
cd src-widgets && npm run i18n
```

## Architecture

### Two-package structure
- **Root** (`package.json`): build orchestration, linting, release scripts. `tasks.js` runs the build pipeline via `@iobroker/build-tools`.
- **`src-widgets/`** (`package.json`): the actual widget code (React/TS/Vite). Build output goes to `src-widgets/build/`, then copied to `widgets/vis-2-widgets-collection/` for distribution.

### Module Federation
`src-widgets/vite.config.ts` exposes each widget class as a separate federation entry point via `@module-federation/vite`. The shared MUI/React modules come from the vis-2 parent host — never bundle MUI directly.

### Widget class hierarchy

Every widget follows this 4-layer pattern:

```
Generic (src/Generic.tsx)                    ← base class (extends window.visRxWidget)
  └── *CollectionWidget.tsx                  ← vis-2 class: getWidgetInfo(), renderWidgetBody()
        └── withCollectionProvider(...)      ← injects CollectionContext + MUI ThemeProvider
              └── *Collection.tsx            ← React component: actual UI using useData()
```

1. **`Generic`** — provides `getPropertyValue()`, `setValue()`, `getI18nPrefix()`, `wrapContent()`.
2. **`*CollectionWidget`** — defines `getWidgetInfo()` (widget ID, vis-2 property panels via `visAttrs`, preview image). Builds a typed `collectionContext` and calls `withCollectionProvider(this.wrapContent(<*Collection />), context)`.
3. **`CollectionProvider`** — creates `CollectionContext`, merges vis-2 theme, applies font/text styles from widget style props.
4. **`*Collection`** — reads all data via `useData(oid)` hook from context; renders MUI components.

### Type system

`src-widgets/src/types/` is the single source of truth:

- `widget-registry.d.ts` — `WidgetRegistry` maps widget template IDs (e.g. `'tplSwitchCollectionWidget'`) to their composed field types. **Use `WidgetRegistry['tplXxx']` as the generic parameter to `Generic<>`** for full type safety on `rxData`.
- `context-types.d.ts` — per-widget `*ContextProps` types and `AllCollectionContextProps` union.
- `field-definitions/` — granular field type files (common, switch, slider, etc.).
- `utility-types.ts` — runtime helpers: `getDynamicProperty()`, `getAllIndexedProperties()`, type guards.

### `useData(oid)` hook

The central data hook used inside Collection components. Reads from `CollectionContext` and returns resolved styling, state values, active index, and typed accessors. All Collection components call this hook — don't access `CollectionContext` directly.

### Field definition files (`src/lib/*Fields.tsx`)

Return arrays of `RxWidgetInfoAttributesField` that compose `visAttrs` panels in the vis-2 editor. Widget classes spread these into their `visAttrs` config.

## MCP Server Usage

### MUI Documentation → `mui-mcp`
- Call `useMuiDocs` to fetch MUI v6.5 package docs relevant to the question
- Call `fetchDocs` for additional docs using ONLY URLs from the returned content
- Repeat until all relevant docs are fetched

### Library / API Documentation → `context7`
- Always use Context7 MCP for library/API documentation, code generation, setup or configuration steps — without waiting to be asked

### GitHub → `github-mcp-server`
- Use for GitHub API interactions (issues, PRs, CI/CD)
- Prefer `list_issues` for overview, check open PRs before proposing new ones
- Analyze `workflow_runs` and logs for CI/CD failures

## Key Constraints

- **MUI version:** `@mui/material@^6.5.0` — must match parent (no independent upgrades)
- **No direct MUI dependency** in `src-widgets/package.json` — shared via Module Federation
- **TypeScript strictly** — no `any` types
- **No raw HTML elements** — use MUI components (`Box`, `Typography`, `Button`, etc.)
- **No `makeStyles` / `withStyles`** — deprecated; use `sx` prop or `styled()`
- **No inline `style` prop** — use `sx`
- **No `Grid` v1** — use `Grid2`

## Styling Rules

- **`sx` prop** for 90% of styling (theme-aware, type-safe)
- **`styled()`** for complex reusable components with variants
- Use theme tokens: `theme.spacing()`, `theme.palette.*`, `theme.typography.*`
- Use `cleanSx()` utility for dynamic styles with possibly undefined values
- Gradient support via `gradientColor()`, `extractColorFromValue()`, `getIconColorStyles()`

## Accessibility (Mandatory)

- Every interactive element needs `aria-label` or `aria-labelledby`
- Every `IconButton` needs a wrapping `<Tooltip>`
- Disabled buttons in Tooltips must be wrapped in `<span>`
- Full keyboard navigation: Tab, Enter/Space, Escape, Arrow keys
- Use semantic MUI components (never `<div onClick>`, always `<Button>`)

## Performance

- Use `React.memo` for frequently rendered components
- Use `useMemo` for expensive calculations and derived data
- Use `useCallback` for event handlers passed to children
- Import icons individually: `import CloseIcon from '@mui/icons-material/Close'`

## Project-Specific Utilities

Located in `src-widgets/src/lib/helper/` and `src-widgets/src/hooks/`:

- `cleanSx(obj)` – removes undefined values, converts kebab-case keys
- `gradientColor(color)` – returns gradient string or undefined for solid colors
- `extractColorFromValue(value)` – extracts first color from gradient string
- `getIconColorStyles(icon, color, theme)` – CSS filter for Base64 icon coloring
- `useValueState(oid)` – debounced ioBroker state management
- `useLongPress({ onLongPress, onClick, delay })` – touch/mouse long press
- `useSize(size, widget, isCircle)` – widget dimension calculation

## Detailed Guidelines

See `.claude/instructions/` for full reference:
- [ui.instructions.md](.claude/instructions/ui.instructions.md) – complete MUI v6.5 UI/UX standards
- [mui5.instructions.md](.claude/instructions/mui5.instructions.md) – MCP usage for MUI docs
- [context7.instructions.md](.claude/instructions/context7.instructions.md) – MCP usage for library docs
- [github.instructions.md](.claude/instructions/github.instructions.md) – GitHub MCP workflow
