# Claude Code Instructions – ioBroker vis-2 Widgets Collection

## Project Overview

ioBroker vis-2 widget collection built with **React**, **TypeScript**, and **Material-UI v6.5**.
Widgets run inside the vis-2 Module Federation environment — MUI is **shared from the parent**, not a direct dependency.

## MCP Server Usage

### MUI Documentation → `mui-mcp`
- Call `useMuiDocs` to fetch MUI v6.5 package docs relevant to the question
- Call `fetchDocs` for additional docs using ONLY URLs from the returned content
- Repeat until all relevant docs are fetched
- Use fetched content to answer implementation questions

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

Located in `src-widgets/src/lib/` and `src-widgets/src/hooks/`:

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
