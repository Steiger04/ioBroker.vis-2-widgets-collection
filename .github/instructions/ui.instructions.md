---
name: 'UI/UX Design Standards - MUI v6.5'
description: 'Material-UI v6.5 component selection, styling, accessibility, and React patterns for vis-2 widgets'
---

# UI/UX Design Standards for ioBroker vis-2 Widgets

## Overview

This document defines UI/UX standards for developing modern, accessible, and performant vis-2 widgets using **Material-UI (MUI) v6.5** and React best practices. All widgets must follow these guidelines to ensure consistency, maintainability, and excellent user experience.

**Target Audience:** Senior developers familiar with React, TypeScript, and Material-UI ecosystem.

---

## MUI Version & Dependency Management

### Current Version

- **MUI Core:** `@mui/material@^6.5.0`
- **MUI Data Grid:** `@mui/x-data-grid@^7.29.12`
- **MUI Icons:** `@mui/icons-material` (version inherited from parent)

### Critical Constraints

⚠️ **MUI is NOT a direct dependency** of the widget package. It's shared via Module Federation from the parent `ioBroker.vis-2` workspace.

**Implications:**

- Cannot add `@mui/material` to `src-widgets/package.json` dependencies
- Version MUST match parent (v6.5.0) - no independent upgrades
- Breaking changes in MUI affect all widgets simultaneously
- Coordinate with vis-2 team for version upgrades

**Verification:**

```bash
# Check parent MUI version
grep "@mui/material" ../ioBroker.vis-2/packages/iobroker.vis-2/src-vis/package.json
```

### Documentation Access via MCP

Use the **mui-mcp server** for up-to-date MUI v6.5 documentation:

1. **Call `useMuiDocs` tool** to fetch package documentation relevant to your question
2. **Call `fetchDocs` tool** for additional docs using ONLY URLs from returned content
3. **Repeat steps 1-2** until you have all relevant documentation
4. Use fetched content to answer implementation questions

**Example queries:**

- "How to customize Button in MUI v6.5?"
- "TextField validation patterns MUI v6.5"
- "Accessibility features in Dialog component"

**For React/TypeScript questions:** Use Context7 MCP server for library/API documentation.

## Component Selection Standards

### ✅ Approved Core Components

**Layout & Structure:**

- **`Box`** - Primary layout container (use for all wrapper elements)
- **`Paper`** - Elevated surfaces, cards (use for widget frames)
- **`Stack`** - Directional layouts (vertical/horizontal, replaces manual flex)
- **`Container`** - Page-level responsive wrapper (use sparingly in widgets)
- **`Grid2`** (new) - Responsive grid layouts (preferred over deprecated Grid)
- **`Divider`** - Visual separators

## MUI 5 v6.5 – core rules

- Use only MUI 5 v6.5 components and APIs (no v4 legacy code, no mixed versions).
- Import components from `@mui/material` and `@mui/icons-material`, and styling APIs from `@mui/material/styles`.
- Prefer:
    - `Box`, `Stack`, `Grid` for layout
    - `Typography` for text
    - `Button`, `IconButton`, `Link` for interactions
    - `TextField`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider` for forms
    - `Card`, `Paper`, `Dialog`, `Drawer`, `Menu`, `Popover`, `Snackbar`, `Alert` for surface elements
- Follow v5 prop names (e.g. `maxRows` instead of `rowsMax`, `minRows` instead of `rows`).
- Do not use removed/deprecated props like `disableBackdropClick`; implement the recommended alternatives (e.g. `onClose` with `reason` checks).

## Styling & theme usage

- Prefer theme-based styling via `sx` or `styled` from `@mui/material/styles`.
- Use `sx` for simple, component-local styles and `styled` for reusable, more complex components.
- Avoid global CSS files for MUI components except for very basic resets.
- Always use theme tokens instead of hard-coded values, e.g.:
    - `theme.spacing(n)` or `sx={{ m: 2, px: 3 }}`
    - `theme.palette.primary.main`, `text.secondary`, `background.paper`
    - `theme.typography.*`
- Use MUI breakpoints for responsive styles (`{ xs: ..., sm: ..., md: ..., lg: ..., xl: ... }`).
- Define complex variants (e.g. button variants, card variants) in `theme.components` and reuse them throughout the app.

## Layout guidelines

- Use `Box` and `Stack` for simple layouts and spacing; use `Grid` for structured, responsive layouts (e.g. page grids).
- Structure pages with a clear layout container (e.g. `Container maxWidth="lg"`).
- Keep horizontal and vertical spacing consistent (e.g. 4/8/12/16 px steps via `theme.spacing`).
- Prefer `Stack` over nested `Box` elements when the main concern is direction and spacing.
- For complex layouts (`AppBar`, `Drawer`, etc.), start from MUI layout examples and adapt them.

**Typography:**

- **`Typography`** - ALL text rendering (never use raw `<p>`, `<h1>`, etc.)
- Use variants: `h1`-`h6`, `body1`, `body2`, `caption`, `button`, `overline`

**Form Controls:**

- **`Button`** - Primary actions
- **`IconButton`** - Icon-only actions
- **`TextField`** - Text inputs (use instead of raw `<input>`)
- **`Checkbox`** - Boolean selections
- **`Switch`** - Toggle controls (binary states)
- **`Slider`** - Numeric range inputs
- **`Select`** / **`MenuItem`** - Dropdown menus
- **`Radio`** / **`RadioGroup`** / **`FormControlLabel`** - Single choice from multiple options
- **`ToggleButton`** / **`ToggleButtonGroup`** - Multi-choice buttons
- **`Autocomplete`** - Searchable selects (for long lists)

**Feedback & Dialogs:**

- **`Dialog`** / **`DialogTitle`** / **`DialogContent`** / **`DialogActions`** - Modal dialogs
- **`Popover`** - Contextual overlays
- **`Tooltip`** - **MANDATORY** for all interactive elements (accessibility requirement)
- **`Alert`** - Status messages (error, warning, info, success)
- **`Snackbar`** - Toast notifications
- **`CircularProgress`** / **`LinearProgress`** - Loading indicators (use during async operations)
- **`Skeleton`** - Loading placeholders (use for better perceived performance)

**Data Display:**

- **`List`** / **`ListItem`** / **`ListItemButton`** / **`ListItemText`** - Scrollable lists
- **`Table`** - Simple tabular data
- **`DataGrid`** (@mui/x-data-grid) - Advanced tables (sortable, filterable)
- **`Avatar`** - User/icon representations
- **`Chip`** - Compact labels/tags
- **`Badge`** - Notification indicators

**Navigation:**

- **`Tabs`** / **`Tab`** - Tabbed navigation
- **`Menu`** / **`MenuList`** / **`MenuItem`** - Context menus
- **`Breadcrumbs`** - Navigation path
- **`Stepper`** - Multi-step processes

**Icons:**

- **`@mui/icons-material`** - Use MUI icons for consistency
- **`SvgIcon`** - Wrapper for custom SVG icons
- Import specific icons: `import CloseIcon from '@mui/icons-material/Close';`
- **Tree-shaking:** Always import individual icons, never `import * from '@mui/icons-material'`

### ❌ Deprecated / Avoid

- **`makeStyles`** - Deprecated in MUI v5+, removed in v6
- **`withStyles`** - Deprecated, use `styled()` or `sx` prop
- **Raw HTML elements** - Use MUI components (`<div>` → `Box`, `<button>` → `Button`)
- **`Grid` (v1)** - Deprecated, use `Grid2`
- **Inline `style` prop** - Use `sx` prop for dynamic styles

### 🆕 Underused Components (Recommended)

These components are **NOT currently used** but should be adopted:

1. **`Tooltip`** - Critical for accessibility (explain icon buttons, show full text on truncated labels)
2. **`Grid2`** - Modern responsive layouts (replaces manual flexbox patterns)
3. **`CircularProgress` / `Skeleton`** - Loading states (improves perceived performance)
4. **`Alert` / `Snackbar`** - User feedback (error messages, success confirmations)
5. **`useMediaQuery` hook** - Responsive behavior (adapt to small screens)

**Example - Add Tooltip to Icon Button:**

```tsx
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

<Tooltip title="Delete item">
    <IconButton
        onClick={handleDelete}
        aria-label="delete item"
    >
        <DeleteIcon />
    </IconButton>
</Tooltip>;
```

---

## Styling Standards

### Primary Approach: `sx` Prop (90% of cases)

The **`sx` prop** is the standard for styling MUI components. It provides:

- Type-safe theme access
- Responsive design support
- Pseudo-selectors
- Direct CSS shorthand properties

**Basic Usage:**

```tsx
<Box
    sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default', // Theme color
        color: 'text.primary', // Theme color
        p: 2, // Padding: theme.spacing(2)
        borderRadius: 1, // 4px * 1
    }}
/>
```

**Theme Access:**

```tsx
<Box
    sx={{
        // Direct theme path access
        color: 'primary.main',
        bgcolor: 'background.paper',

        // Function form for complex logic
        border: theme => `1px solid ${theme.palette.divider}`,
        boxShadow: theme => theme.shadows[2],

        // Responsive arrays
        fontSize: ['0.875rem', '1rem', '1.25rem'], // xs, sm, md
        p: [1, 2, 3], // Spacing scales
    }}
/>
```

**Pseudo-selectors:**

```tsx
<Button
    sx={{
        '&:hover': {
            bgcolor: 'primary.dark',
            transform: 'scale(1.02)',
        },
        '&:disabled': {
            opacity: 0.5,
        },
        '& .MuiButton-startIcon': {
            marginRight: 1,
        },
    }}
/>
```

**Dynamic Styles with `cleanSx()` Utility:**

```tsx
import { cleanSx } from '../lib/cleanSx';

<Box
    sx={cleanSx({
        width: data.width, // May be undefined
        height: data.height, // May be undefined
        'background-color': data.bgColor, // Kebab-case converted to camelCase
        color: data.textColor || 'text.primary',
    })}
/>;
```

**cleanSx() benefits:**

- Removes `undefined` and `null` values
- Converts kebab-case keys to camelCase
- Prevents React warnings

### Secondary Approach: `styled()` Components (10% of cases)

Use `styled()` for **complex, reusable components** with:

- Multiple style variants
- Heavy theme logic
- Component-specific overrides
- Performance optimization (styles computed once)

**When to use:**

- Component used in multiple places with variants
- Style logic exceeds 20 lines
- Need TypeScript props for styling
- Performance bottleneck identified

**Example:**

```tsx
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

interface CollectionSliderProps {
    data: SliderData;
    hasError?: boolean;
}

const CollectionSlider = styled(Slider, {
    shouldForwardProp: prop => prop !== 'data' && prop !== 'hasError',
})<CollectionSliderProps>(({ theme, data, hasError }) => ({
    color: data.color || theme.palette.primary.main,
    height: data.height || 8,

    '& .MuiSlider-thumb': {
        width: data.thumbSize || 20,
        height: data.thumbSize || 20,
        border: hasError ? `2px solid ${theme.palette.error.main}` : 'none',
    },

    '& .MuiSlider-track': {
        border: 'none',
        background: data.gradient || theme.palette.primary.main,
    },

    '& .MuiSlider-rail': {
        opacity: 0.3,
        backgroundColor: theme.palette.grey[400],
    },

    '& .MuiSlider-mark': {
        backgroundColor: theme.palette.background.paper,
        height: 8,
        width: 2,
    },
}));

// Usage
<CollectionSlider
    data={widgetData}
    hasError={validationError}
    value={value}
    onChange={handleChange}
/>;
```

**`shouldForwardProp` Pattern:**

- Prevents custom props (like `data`) from reaching DOM
- Use for all non-standard props
- Required to avoid React warnings

### Gradient Color Support

Widgets support **CSS gradients** in addition to solid colors:

**Text Gradient Pattern:**

```tsx
import { gradientColor } from '../lib/gradientColor';

<Typography
    sx={{
        background: gradientColor(data.textColor),
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: gradientColor(data.textColor) ? 'transparent' : data.textColor,
    }}
/>;
```

**Background Gradient:**

```tsx
<Box
    sx={{
        background: gradientColor(data.bgColor)
            ? data.bgColor // Gradient string
            : data.bgColor, // Solid color
    }}
/>
```

**Extracting Color from Gradient:**

```tsx
import { extractColorFromValue } from '../lib/extractColorFromValue';

const solidColor = extractColorFromValue('linear-gradient(90deg, red, blue)');
// Returns: 'red' (first color)
```

### Icon Color Styling (Base64 Icons)

For Base64-encoded icons, use CSS filter technique:

```tsx
import { getIconColorStyles } from '../lib/getIconColorStyles';

const iconStyles = getIconColorStyles(
    data.icon, // 'data:image/svg+xml;base64,...'
    data.iconColor, // '#ff0000' or 'primary.main'
    theme,
);

<Box
    sx={{
        width: 48,
        height: 48,
        backgroundImage: iconStyles.backgroundImage,
        filter: iconStyles.filter, // CSS filter for coloring
    }}
/>;
```

**How it works:**

- Converts color to CSS `drop-shadow` filter
- Works with transparent PNG/SVG icons
- Preserves icon shape

### CSS Variables & Theme Integration

**Access vis-2 parent theme variables:**

```tsx
<Box
    sx={{
        bgcolor: 'var(--vis2-bg-color, white)',
        color: 'var(--vis2-text-color, black)',
        borderColor: 'var(--vis2-border-color, #ccc)',
    }}
/>
```

**Common vis-2 variables:**

- `--vis2-bg-color` - Background color
- `--vis2-text-color` - Text color
- `--vis2-primary-color` - Primary accent
- `--vis2-border-color` - Border color

---

## Layout Patterns

### Flexbox (Current Standard)

**All current widgets use flexbox** for layout. This is acceptable but should evolve to Grid2 for complex layouts.

**Standard Pattern:**

```tsx
<Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2, // theme.spacing(2) = 16px
        width: '100%',
        height: '100%',
    }}
/>
```

**Common Layouts:**

```tsx
// Horizontal row with spacing
<Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
  <Icon />
  <Typography>Label</Typography>
</Box>

// Vertical stack
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
  <Header />
  <Content />
  <Footer />
</Box>

// Split layout (left/right)
<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <Box>Left content</Box>
  <Box>Right content</Box>
</Box>

// Centered content
<Box sx={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100%',
}}>
  <Content />
</Box>
```

### Stack Component (Recommended)

**Replace manual flexbox** with `Stack` for cleaner code:

```tsx
import { Stack } from '@mui/material';

// Vertical stack (default)
<Stack spacing={2}>
  <Item1 />
  <Item2 />
  <Item3 />
</Stack>

// Horizontal stack
<Stack direction="row" spacing={1} alignItems="center">
  <Icon />
  <Typography>Label</Typography>
</Stack>

// Dividers between items
<Stack spacing={2} divider={<Divider />}>
  <Section1 />
  <Section2 />
</Stack>
```

**Benefits over flexbox:**

- Cleaner syntax (no `display: 'flex'`)
- Built-in `spacing` prop
- Automatic `gap` support
- Built-in dividers

### Grid2 for Responsive Layouts (Recommended)

**Use Grid2** for complex, responsive layouts:

```tsx
import { Grid2 } from '@mui/material';

// Responsive grid
<Grid2 container spacing={2}>
  <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
    <Card>Content 1</Card>
  </Grid2>
  <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
    <Card>Content 2</Card>
  </Grid2>
  <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
    <Card>Content 3</Card>
  </Grid2>
</Grid2>

// Auto-fit columns
<Grid2 container spacing={2}>
  <Grid2 size="grow">
    <Box>Flexible width</Box>
  </Grid2>
  <Grid2 size="auto">
    <Button>Fixed width</Button>
  </Grid2>
</Grid2>
```

**Breakpoints:**

- `xs`: 0px+ (mobile)
- `sm`: 600px+ (tablet)
- `md`: 900px+ (desktop)
- `lg`: 1200px+ (large desktop)
- `xl`: 1536px+ (extra large)

### Widget Sizing Constraints

**Important:** Widget dimensions are **controlled by vis-2 editor**, not responsive breakpoints.

**Size Handling:**

```tsx
// Use percentage-based sizing to fill widget container
<Box
    sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden', // Prevent content overflow
    }}
/>;

// Access widget dimensions from props
const { style } = this.props;
const width = style?.width || 200;
const height = style?.height || 100;
```

**Custom Size Constraints:**

```tsx
import { useSize } from '../hooks/useSize';

// Calculate square/circle dimensions
const size = useSize(data.size, widget, data.shape === 'circle');

<Box
    sx={{
        width: size,
        height: size,
        borderRadius: data.shape === 'circle' ? '50%' : 1,
    }}
/>;
```

### Positioning (Icon Offsets)

**Absolute positioning** for icon offset controls:

```tsx
<Box
    sx={{
        position: 'absolute',
        left: `calc(0px + ${data.iconXOffset || 0}px)`,
        top: `calc(0px + ${data.iconYOffset || 0}px)`,
        transform: `scale(${data.iconScale || 1})`,
    }}
/>
```

---

## Accessibility Requirements (MANDATORY)

⚠️ **Critical Gap:** Current widgets have minimal accessibility features. **All new code must follow these requirements.**

### ARIA Attributes (Required)

**Every interactive element MUST have:**

1. **`aria-label`** or **`aria-labelledby`** - Describes purpose
2. **`role`** (if non-semantic) - Defines element type
3. **`aria-describedby`** (optional) - Additional context

**Button Example:**

```tsx
<IconButton
    onClick={handleDelete}
    aria-label="Delete item"
    aria-describedby="delete-tooltip"
>
    <DeleteIcon />
</IconButton>
```

**Form Input Example:**

```tsx
<TextField
    label="Device name"
    value={name}
    onChange={handleChange}
    aria-label="Enter device name"
    aria-describedby="name-helper-text"
    aria-invalid={hasError}
    aria-errormessage={hasError ? 'name-error' : undefined}
/>;
{
    hasError && (
        <Typography
            id="name-error"
            color="error"
            variant="caption"
        >
            Name must be at least 3 characters
        </Typography>
    );
}
```

**Custom Widget Example:**

```tsx
<Box
    role="button"
    tabIndex={0}
    aria-label="Toggle light"
    aria-pressed={isOn}
    onClick={handleToggle}
    onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
        }
    }}
>
    <LightIcon />
</Box>
```

### Keyboard Navigation (Required)

**All interactive elements MUST be keyboard accessible:**

1. **Tab Order:** Ensure logical `tabIndex` flow
2. **Enter/Space:** Trigger button actions
3. **Arrow Keys:** Navigate lists, adjust sliders
4. **Escape:** Close dialogs/modals

**Example - Keyboard-Accessible Custom Button:**

```tsx
const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleClick();
    }
};

<Box
    role="button"
    tabIndex={0}
    onClick={handleClick}
    onKeyDown={handleKeyDown}
    aria-label="Activate device"
    sx={{
        cursor: 'pointer',
        '&:focus': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
        },
    }}
>
    Content
</Box>;
```

**Dialog Keyboard Navigation:**

```tsx
import { Dialog } from '@mui/material';

<Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    // Escape key automatically closes dialog
>
    <DialogTitle id="dialog-title">Confirm Action</DialogTitle>
    <DialogContent id="dialog-description">Are you sure you want to proceed?</DialogContent>
    <DialogActions>
        <Button
            onClick={handleClose}
            autoFocus
        >
            Cancel
        </Button>
        <Button onClick={handleConfirm}>Confirm</Button>
    </DialogActions>
</Dialog>;
```

### Focus Management

**Manage focus for better UX:**

```tsx
import { useRef, useEffect } from 'react';

const inputRef = useRef<HTMLInputElement>(null);

// Auto-focus on mount
useEffect(() => {
  inputRef.current?.focus();
}, []);

<TextField
  inputRef={inputRef}
  label="Device name"
  aria-label="Enter device name"
/>

// Focus after dialog opens
<Dialog
  open={open}
  onClose={handleClose}
  TransitionProps={{
    onEntered: () => {
      inputRef.current?.focus();
    },
  }}
>
  <TextField inputRef={inputRef} />
</Dialog>
```

### Tooltips (Mandatory for Icon Buttons)

**Every icon-only button MUST have a Tooltip:**

```tsx
import { Tooltip, IconButton } from '@mui/material';

<Tooltip title="Delete item" arrow>
  <IconButton
    onClick={handleDelete}
    aria-label="Delete item"
    size="small"
  >
    <DeleteIcon />
  </IconButton>
</Tooltip>

// For disabled buttons, wrap in span
<Tooltip title="Cannot delete default item">
  <span>
    <IconButton
      onClick={handleDelete}
      aria-label="Delete item"
      disabled={isDefault}
    >
      <DeleteIcon />
    </IconButton>
  </span>
</Tooltip>
```

### Color Contrast

**Ensure WCAG AA compliance (4.5:1 ratio for normal text):**

```tsx
import { alpha } from '@mui/material/styles';

// Good contrast
<Typography color="text.primary">
  Primary text
</Typography>

// Semi-transparent overlays - ensure readable
<Box sx={{
  bgcolor: alpha(theme.palette.background.paper, 0.95),
  color: 'text.primary', // High contrast
}} />

// Test contrast before using custom colors
const customColor = '#3498db';
// Verify against background color using online tools
```

**Tools for testing:**

- Chrome DevTools Accessibility panel
- WebAIM Contrast Checker
- Lighthouse accessibility audit

### Screen Reader Optimization

**Hidden elements with semantic meaning:**

```tsx
// Visually hidden but accessible to screen readers
<Typography
  sx={{
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
  }}
>
  Current value: {value}
</Typography>

// Alert for screen readers
<Typography
  role="alert"
  aria-live="polite"
  sx={{ position: 'absolute', left: -10000 }}
>
  {statusMessage}
</Typography>
```

### Semantic HTML (via MUI Components)

**Use semantic MUI components:**

```tsx
// ❌ Wrong - non-semantic
<Box onClick={handleClick}>Click me</Box>

// ✅ Correct - semantic Button
<Button onClick={handleClick}>Click me</Button>

// ❌ Wrong - raw div for list
<Box>
  {items.map(item => <Box key={item.id}>{item.name}</Box>)}
</Box>

// ✅ Correct - semantic List
<List>
  {items.map(item => (
    <ListItem key={item.id}>
      <ListItemText primary={item.name} />
    </ListItem>
  ))}
</List>
```

---

## Theme Customization

### Theme Inheritance

Widgets **inherit theme from vis-2 parent** and can extend it:

```tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

const CollectionProvider = ({ children, context }) => {
    const parentTheme = context.theme;

    // Extend parent theme
    const customTheme = createTheme(
        deepmerge(parentTheme, {
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 8,
                            textTransform: 'none',
                        },
                    },
                },
                MuiTypography: {
                    styleOverrides: {
                        root: {
                            fontSize: '0.875rem',
                        },
                    },
                },
            },
            palette: {
                // Add custom colors (don't override primary/secondary)
                custom: {
                    gradientStart: '#667eea',
                    gradientEnd: '#764ba2',
                },
            },
        }),
    );

    return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};
```

### Accessing Theme in Components

**In `sx` prop:**

```tsx
<Box
    sx={{
        // Direct path
        color: 'primary.main',
        bgcolor: 'background.paper',

        // Function form
        border: theme => `1px solid ${theme.palette.divider}`,
        p: theme => theme.spacing(2),
    }}
/>
```

**In styled components:**

```tsx
const StyledBox = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
}));
```

**Via useTheme hook:**

```tsx
import { useTheme } from '@mui/material/styles';

const MyComponent = () => {
    const theme = useTheme();

    const customColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

    return <Box sx={{ color: customColor }} />;
};
```

### Color System

**Standard theme colors:**

```tsx
// Primary palette
'primary.main'; // Main brand color
'primary.light'; // Lighter variant
'primary.dark'; // Darker variant
'primary.contrastText'; // Text on primary

// Secondary palette
'secondary.main';
'secondary.light';
'secondary.dark';
'secondary.contrastText';

// Error/warning/info/success
'error.main';
'warning.main';
'info.main';
'success.main';

// Backgrounds
'background.default'; // Page background
'background.paper'; // Card/paper background

// Text colors
'text.primary'; // Primary text
'text.secondary'; // Secondary text
'text.disabled'; // Disabled text

// Dividers
'divider'; // Border/divider color

// Actions
'action.active';
'action.hover';
'action.selected';
'action.disabled';
'action.disabledBackground';
```

**Color manipulation:**

```tsx
import { alpha, lighten, darken } from '@mui/material/styles';

<Box
    sx={{
        // Semi-transparent
        bgcolor: theme => alpha(theme.palette.primary.main, 0.1),

        // Lighter on hover
        '&:hover': {
            bgcolor: theme => lighten(theme.palette.primary.main, 0.2),
        },

        // Darker when active
        '&:active': {
            bgcolor: theme => darken(theme.palette.primary.main, 0.2),
        },
    }}
/>;
```

### Dark Mode Support

**Widgets automatically support dark mode** via parent theme:

```tsx
<Box
    sx={{
        // Adapts automatically
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderColor: 'divider',
    }}
/>;

// Manual dark mode logic (if needed)
const theme = useTheme();
const isDarkMode = theme.palette.mode === 'dark';

<Box
    sx={{
        bgcolor: isDarkMode ? '#1a1a1a' : '#ffffff',
    }}
/>;
```

---

## Typography Guidelines

### Typography Component

**Always use `Typography` component** for text:

```tsx
import { Typography } from '@mui/material';

// Headings
<Typography variant="h1">Main Title</Typography>
<Typography variant="h2">Section Title</Typography>
<Typography variant="h3">Subsection</Typography>

// Body text
<Typography variant="body1">Primary body text</Typography>
<Typography variant="body2">Secondary body text (smaller)</Typography>

// Specialized
<Typography variant="caption">Small caption text</Typography>
<Typography variant="overline">OVERLINE TEXT</Typography>
<Typography variant="button">Button Text</Typography>
```

### Font Sizing

**Standard size:** `0.875rem` (14px) for widget text

```tsx
<Typography sx={{
  fontSize: '0.875rem', // Standard
}} />

// Responsive sizing
<Typography sx={{
  fontSize: ['0.75rem', '0.875rem', '1rem'], // xs, sm, md+
}} />
```

### Gradient Text

**Widgets support gradient text via background-clip:**

```tsx
import { gradientColor } from '../lib/gradientColor';

<Typography
    sx={{
        // Supports both solid colors and gradients
        background: gradientColor(data.textColor),
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: gradientColor(data.textColor) ? 'transparent' : data.textColor,
        fontWeight: 500,
    }}
/>;

// Example gradient
const textColor = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
```

### Text Alignment & Spacing

```tsx
<Typography
    align="center" // 'left' | 'center' | 'right' | 'justify'
    gutterBottom // Adds margin-bottom
    paragraph // Adds paragraph spacing
    noWrap // Prevents text wrapping
    sx={{
        textOverflow: 'ellipsis', // Ellipsis for overflow
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    }}
>
    Long text that will be truncated...
</Typography>
```

---

## Form & Input Patterns

### Controlled Components

**All form inputs MUST be controlled:**

```tsx
import { useState } from 'react';
import { TextField, Checkbox, Slider } from '@mui/material';

const MyForm = () => {
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(50);

    return (
        <>
            <TextField
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
            />

            <Checkbox
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            />

            <Slider
                value={value}
                onChange={(_, newValue) => setValue(newValue as number)}
                min={0}
                max={100}
            />
        </>
    );
};
```

### Value Transformation & Debouncing

**Use custom hooks for state management:**

```tsx
import { useValueState } from '../hooks/useValueState';

const MyWidget = () => {
    const { value, updateValue } = useValueState('light.brightness');

    // Debounced updates to ioBroker
    const handleChange = (newValue: number) => {
        updateValue(newValue); // Debounced by hook
    };

    return (
        <Slider
            value={value ?? 0}
            onChange={(_, newValue) => handleChange(newValue as number)}
        />
    );
};
```

**Custom debounce for rapid changes:**

```tsx
import { useState, useEffect } from 'react';

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

// Usage
const [inputValue, setInputValue] = useState('');
const debouncedValue = useDebounce(inputValue, 300);

useEffect(() => {
    // Send debounced value to ioBroker
    updateState(debouncedValue);
}, [debouncedValue]);
```

### Validation

**Custom validation without form libraries:**

```tsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    return '';
};

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
    setError(validateEmail(newValue));
};

<TextField
    label="Email"
    value={email}
    onChange={handleEmailChange}
    error={Boolean(error)}
    helperText={error}
    aria-invalid={Boolean(error)}
    aria-errormessage={error ? 'email-error' : undefined}
/>;
{
    error && (
        <Typography
            id="email-error"
            color="error"
            variant="caption"
        >
            {error}
        </Typography>
    );
}
```

### Error States

**Show validation errors clearly:**

```tsx
<TextField
    label="Device name"
    value={name}
    onChange={handleChange}
    error={hasError}
    helperText={hasError ? 'Name must be at least 3 characters' : ''}
    FormHelperTextProps={{
        role: 'alert',
    }}
/>;

// Custom error display
{
    hasError && (
        <Alert
            severity="error"
            sx={{ mt: 1 }}
        >
            Please fix the following errors:
            <ul>
                {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                ))}
            </ul>
        </Alert>
    );
}
```

### Select & Autocomplete

**Dropdown menus:**

```tsx
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

<FormControl fullWidth>
    <InputLabel id="device-select-label">Device</InputLabel>
    <Select
        labelId="device-select-label"
        id="device-select"
        value={selectedDevice}
        label="Device"
        onChange={e => setSelectedDevice(e.target.value)}
    >
        <MenuItem value="light1">Living Room Light</MenuItem>
        <MenuItem value="light2">Bedroom Light</MenuItem>
        <MenuItem value="light3">Kitchen Light</MenuItem>
    </Select>
</FormControl>;

// For long lists, use Autocomplete
import { Autocomplete } from '@mui/material';

<Autocomplete
    options={devices}
    getOptionLabel={option => option.name}
    value={selectedDevice}
    onChange={(_, newValue) => setSelectedDevice(newValue)}
    renderInput={params => (
        <TextField
            {...params}
            label="Device"
        />
    )}
/>;
```

---

## Performance Guidelines

### React.memo (Use More)

**Currently underused (only 1 occurrence).** Memoize components to prevent unnecessary re-renders:

```tsx
import { memo } from 'react';

interface DeviceCardProps {
    name: string;
    value: number;
    onUpdate: (value: number) => void;
}

export const DeviceCard = memo<DeviceCardProps>(
    ({ name, value, onUpdate }) => {
        console.log(`DeviceCard ${name} rendered`);

        return (
            <Paper>
                <Typography>{name}</Typography>
                <Slider
                    value={value}
                    onChange={(_, v) => onUpdate(v as number)}
                />
            </Paper>
        );
    },
    (prevProps, nextProps) => {
        // Custom comparison (optional)
        return prevProps.name === nextProps.name && prevProps.value === nextProps.value;
    },
);
```

**When to use:**

- Component renders frequently
- Props rarely change
- Component is expensive to render
- Multiple instances exist (e.g., 50+ widgets)

### useMemo for Expensive Calculations

**Memoize computed values:**

```tsx
import { useMemo } from 'react';

const MyWidget = ({ data }) => {
    // Icon color styles (expensive CSS filter calculation)
    const iconStyles = useMemo(() => {
        return getIconColorStyles(data.icon, data.iconColor, theme);
    }, [data.icon, data.iconColor, theme]);

    // Slider marks
    const marks = useMemo(() => {
        return Array.from({ length: 11 }, (_, i) => ({
            value: i * 10,
            label: `${i * 10}%`,
        }));
    }, []); // Empty deps - never changes

    // Complex object transformations
    const processedData = useMemo(() => {
        return data.items
            .filter(item => item.visible)
            .map(item => ({
                ...item,
                color: extractColorFromValue(item.gradient),
            }))
            .sort((a, b) => a.order - b.order);
    }, [data.items]);

    return <Box sx={iconStyles}>...</Box>;
};
```

### useCallback for Event Handlers

**Prevent function recreation on every render:**

```tsx
import { useCallback } from 'react';

const MyWidget = ({ oid }) => {
    const handleClick = useCallback(() => {
        updateState(oid, true);
    }, [oid]); // Only recreate if oid changes

    const handleSliderChange = useCallback(
        (_, value: number) => {
            updateStateDebounced(oid, value);
        },
        [oid],
    );

    return (
        <>
            <Button onClick={handleClick}>Activate</Button>
            <Slider onChange={handleSliderChange} />
        </>
    );
};
```

### Bundle Size Optimization

**Tree-shake MUI icons:**

```tsx
// ❌ Wrong - imports entire icon library
import { Close, Delete, Edit } from '@mui/icons-material';

// ✅ Correct - imports individual icons
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
```

**Code splitting (Module Federation handles this):**

- Widgets are lazy-loaded by vis-2
- Shared dependencies (React, MUI) loaded once
- No manual code splitting needed

### Avoid Unnecessary Re-renders

**Common pitfalls:**

```tsx
// ❌ Wrong - creates new object on every render
<Box sx={{ padding: 2, margin: 1 }}>

// ✅ Correct - memoize or define outside component
const boxStyles = { padding: 2, margin: 1 };
<Box sx={boxStyles}>

// ❌ Wrong - inline function recreation
<Button onClick={() => handleClick(id)}>

// ✅ Correct - useCallback
const handleButtonClick = useCallback(() => handleClick(id), [id]);
<Button onClick={handleButtonClick}>

// ❌ Wrong - derived state recalculated on every render
const filteredItems = items.filter(item => item.visible);

// ✅ Correct - useMemo
const filteredItems = useMemo(
  () => items.filter(item => item.visible),
  [items]
);
```

### Loading States

**Show feedback during async operations:**

```tsx
import { CircularProgress, Skeleton } from '@mui/material';

const [loading, setLoading] = useState(true);

// Spinner for actions
{
    loading ? <CircularProgress size={24} /> : <Button onClick={handleAction}>Submit</Button>;
}

// Skeleton for content loading
{
    loading ? (
        <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
        />
    ) : (
        <DataDisplay data={data} />
    );
}

// Inline progress
<Box sx={{ position: 'relative' }}>
    <Button disabled={loading}>Save</Button>
    {loading && (
        <CircularProgress
            size={24}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
            }}
        />
    )}
</Box>;
```

---

## Common UI Patterns

### CollectionBase Wrapper

**Standard widget frame structure:**

```tsx
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';

<CollectionBase
    data={data}
    oidValue={oidValue}
>
    <CollectionBaseImage
        data={data}
        widget={widget}
    />

    <Box
        sx={
            {
                /* main content */
            }
        }
    >
        {/* Widget-specific UI */}
    </Box>

    {data.showFooter && <Typography variant="caption">{footerText}</Typography>}
</CollectionBase>;
```

**Benefits:**

- Consistent Paper elevation
- Border management
- Header/footer support
- Background image handling

### Modal/Dialog Pattern

**Standard dialog with accessibility:**

```tsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const [open, setOpen] = useState(false);

<Dialog
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="confirm-dialog-title"
    aria-describedby="confirm-dialog-description"
    maxWidth="sm"
    fullWidth
>
    <DialogTitle id="confirm-dialog-title">Confirm Action</DialogTitle>

    <DialogContent id="confirm-dialog-description">
        <Typography>Are you sure you want to delete this device?</Typography>
    </DialogContent>

    <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button
            onClick={handleConfirm}
            variant="contained"
            color="error"
            autoFocus
        >
            Delete
        </Button>
    </DialogActions>
</Dialog>;
```

### Long Press Detection

**Custom hook for long press (touch/mouse):**

```tsx
import { useLongPress } from '../hooks/useLongPress';

const longPressHandlers = useLongPress({
    onLongPress: () => {
        // Open configuration dialog
        setDialogOpen(true);
    },
    onClick: () => {
        // Toggle state
        updateState(oid, !value);
    },
    delay: 500, // ms
});

<Box
    {...longPressHandlers}
    sx={{ cursor: 'pointer' }}
>
    <Icon />
</Box>;
```

### Data Table with Toolbar

**Standard data grid pattern:**

```tsx
import { DataGrid } from '@mui/x-data-grid';

<Paper>
    <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
        >
            <TextField
                size="small"
                placeholder="Search..."
                InputProps={{
                    startAdornment: <SearchIcon />,
                }}
            />
            <Button
                variant="contained"
                startIcon={<AddIcon />}
            >
                Add Row
            </Button>
        </Stack>
    </Box>

    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: 0 }}
    />
</Paper>;
```

### Icon with Label

**Standard icon + text pattern:**

```tsx
<Stack direction="row" spacing={1} alignItems="center">
  <PowerSettingsNewIcon color="primary" />
  <Typography>Power</Typography>
</Stack>

// Or with IconButton
<Stack direction="row" spacing={1} alignItems="center">
  <Tooltip title="Turn on">
    <IconButton onClick={handlePowerOn} aria-label="turn on device">
      <PowerSettingsNewIcon />
    </IconButton>
  </Tooltip>
  <Typography>Living Room Light</Typography>
</Stack>
```

### Card Grid Layout

**Responsive card grid:**

```tsx
<Grid2
    container
    spacing={2}
>
    {devices.map(device => (
        <Grid2
            key={device.id}
            size={{ xs: 12, sm: 6, md: 4 }}
        >
            <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{device.name}</Typography>
                <Typography color="text.secondary">{device.status}</Typography>
                <Button
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Control
                </Button>
            </Paper>
        </Grid2>
    ))}
</Grid2>
```

---

## Anti-Patterns (What NOT to Do)

### ❌ Direct DOM Manipulation

```tsx
// ❌ WRONG
useEffect(() => {
    document.getElementById('myElement').style.color = 'red';
}, []);

// ✅ CORRECT
<Box
    id="myElement"
    sx={{ color: 'red' }}
/>;
```

### ❌ Inline `style` Prop

```tsx
// ❌ WRONG - no theme access, no type safety
<Box style={{ padding: 16, color: '#3498db' }} />

// ✅ CORRECT - theme-aware, type-safe
<Box sx={{ p: 2, color: 'primary.main' }} />
```

### ❌ Raw HTML Elements

```tsx
// ❌ WRONG
<div>
  <button onClick={handleClick}>Click</button>
  <p>Some text</p>
</div>

// ✅ CORRECT - semantic MUI components
<Box>
  <Button onClick={handleClick}>Click</Button>
  <Typography>Some text</Typography>
</Box>
```

### ❌ Ignoring Accessibility

```tsx
// ❌ WRONG - no aria-label, no keyboard support
<Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
  <DeleteIcon />
</Box>

// ✅ CORRECT - accessible
<Tooltip title="Delete item">
  <IconButton
    onClick={handleClick}
    aria-label="delete item"
    onKeyDown={(e) => {
      if (e.key === 'Enter') handleClick();
    }}
  >
    <DeleteIcon />
  </IconButton>
</Tooltip>
```

### ❌ Blocking Operations in Render

```tsx
// ❌ WRONG - blocks rendering
function MyComponent() {
    const data = fetchDataSync(); // Blocks UI
    return <Box>{data}</Box>;
}

// ✅ CORRECT - async with loading state
function MyComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDataAsync().then(result => {
            setData(result);
            setLoading(false);
        });
    }, []);

    if (loading) return <CircularProgress />;
    return <Box>{data}</Box>;
}
```

### ❌ Hardcoded Colors

```tsx
// ❌ WRONG - doesn't adapt to theme
<Box sx={{ color: '#000', bgcolor: '#fff' }} />

// ✅ CORRECT - theme-aware
<Box sx={{ color: 'text.primary', bgcolor: 'background.paper' }} />
```

### ❌ Missing TypeScript Types

```tsx
// ❌ WRONG
const handleChange = (value: any) => {
    updateState(value);
};

// ✅ CORRECT
const handleChange = (value: number) => {
    updateState(value);
};

interface WidgetData {
    oid: string;
    min: number;
    max: number;
    color?: string;
}

const MyWidget: React.FC<{ data: WidgetData }> = ({ data }) => {
    // Type-safe access
};
```

### ❌ Unnecessary State

```tsx
// ❌ WRONG - derived value as state
const [filteredItems, setFilteredItems] = useState([]);

useEffect(() => {
    setFilteredItems(items.filter(item => item.visible));
}, [items]);

// ✅ CORRECT - compute on render
const filteredItems = useMemo(() => items.filter(item => item.visible), [items]);
```

### ❌ Props in State Without Sync

```tsx
// ❌ WRONG - props change won't update state
const MyComponent = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue);
    // If initialValue changes, state is stale
};

// ✅ CORRECT - use props directly or sync with useEffect
const MyComponent = ({ value, onChange }) => {
    // Controlled component
    return (
        <TextField
            value={value}
            onChange={onChange}
        />
    );
};
```

---

## Responsive Design

### Media Queries

**Use `useMediaQuery` hook for responsive behavior:**

```tsx
import { useMediaQuery, useTheme } from '@mui/material';

const MyWidget = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box
            sx={{
                flexDirection: isMobile ? 'column' : 'row',
                p: isMobile ? 1 : 2,
            }}
        >
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </Box>
    );
};
```

### Responsive sx Prop

**Array syntax for breakpoint-specific styles:**

```tsx
<Box sx={{
  // Format: [xs, sm, md, lg, xl]
  fontSize: ['0.75rem', '0.875rem', '1rem'],
  p: [1, 2, 3],
  display: ['block', 'block', 'flex'],
  flexDirection: ['column', 'column', 'row'],
}} />

// Object syntax (more explicit)
<Box sx={{
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
  },
  p: {
    xs: 1,
    sm: 2,
    md: 3,
  },
}} />
```

### Responsive Grid

```tsx
<Grid2
    container
    spacing={{ xs: 1, sm: 2, md: 3 }}
>
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Card />
    </Grid2>
</Grid2>
```

### Container Queries (Future)

**Widget sizing based on container, not viewport:**

```tsx
// Currently, widgets adapt to container size via props
const { style } = this.props;
const width = style?.width || 200;

// Adjust layout based on available space
<Box
    sx={{
        flexDirection: width < 300 ? 'column' : 'row',
    }}
/>;
```

---

## Testing Recommendations

### Accessibility Testing

**Use built-in browser tools:**

1. **Chrome DevTools** → Lighthouse → Accessibility audit
2. **Accessibility panel** → Check ARIA attributes
3. **Keyboard navigation** → Tab through all interactive elements
4. **Screen reader testing** → NVDA (Windows), VoiceOver (Mac)

### Visual Regression Testing

**Screenshot comparison in CI:**

```bash
# Capture widget screenshots (implemented in test/widgets.test.js)
npm test
```

### Manual Testing Checklist

- [ ] All interactive elements have `aria-label`
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1 ratio)
- [ ] Tooltips on all icon buttons
- [ ] Dark mode displays correctly
- [ ] Responsive at different widget sizes
- [ ] No console errors or warnings
- [ ] Performance acceptable with 50+ widgets

---

## Common Errors & Solutions

### ❌ "Cannot access theme in sx prop"

**Problem:** Theme not available in sx prop

**Solution:** Use arrow function syntax

```tsx
// ❌ Wrong
<Box sx={{ color: theme.palette.primary.main }} />

// ✅ Correct
<Box sx={{ color: (theme) => theme.palette.primary.main }} />

// Or use direct path
<Box sx={{ color: 'primary.main' }} />
```

### ❌ Gradient not working

**Problem:** Text gradient not visible

**Solution:** Use background-clip pattern

```tsx
import { gradientColor } from '../lib/gradientColor';

<Typography
    sx={{
        background: gradientColor(color),
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: gradientColor(color) ? 'transparent' : color,
    }}
/>;
```

### ❌ Component not themed

**Problem:** Component doesn't match theme

**Solution:** Check ThemeProvider hierarchy

```tsx
// Ensure component is wrapped in ThemeProvider
<ThemeProvider theme={customTheme}>
    <MyComponent />
</ThemeProvider>
```

### ❌ Poor performance with many widgets

**Problem:** Page lags with 50+ widgets

**Solution:** Add React.memo and useMemo

```tsx
export const MyWidget = memo(({ data }) => {
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue(data);
    }, [data]);

    return <Box>{expensiveValue}</Box>;
});
```

### ❌ Icons not tree-shaken

**Problem:** Bundle size too large

**Solution:** Import individual icons

```tsx
// ❌ Wrong
import { Close, Delete } from '@mui/icons-material';

// ✅ Correct
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
```

### ❌ Tooltip not showing on disabled button

**Problem:** Disabled buttons don't trigger events

**Solution:** Wrap in span

```tsx
<Tooltip title="Cannot delete">
    <span>
        <IconButton disabled>
            <DeleteIcon />
        </IconButton>
    </span>
</Tooltip>
```

---

## Quick Reference - Code Examples

### Accessible Button

```tsx
import { Button, Tooltip } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

<Tooltip
    title="Save changes"
    arrow
>
    <Button
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={handleSave}
        aria-label="save changes"
        disabled={!hasChanges}
    >
        Save
    </Button>
</Tooltip>;
```

### Themed Form

```tsx
import { TextField, FormControlLabel, Checkbox, Button, Stack } from '@mui/material';

<Stack
    spacing={2}
    sx={{ p: 2 }}
>
    <TextField
        label="Device Name"
        value={name}
        onChange={e => setName(e.target.value)}
        error={Boolean(nameError)}
        helperText={nameError}
        aria-label="enter device name"
        fullWidth
    />

    <FormControlLabel
        control={
            <Checkbox
                checked={enabled}
                onChange={e => setEnabled(e.target.checked)}
            />
        }
        label="Enable notifications"
    />

    <Button
        variant="contained"
        onClick={handleSubmit}
        fullWidth
        sx={{ mt: 2 }}
    >
        Submit
    </Button>
</Stack>;
```

### Responsive Card Grid

```tsx
import { Grid2, Paper, Typography, Button } from '@mui/material';

<Grid2
    container
    spacing={2}
>
    {devices.map(device => (
        <Grid2
            key={device.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        >
            <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography
                    variant="h6"
                    gutterBottom
                >
                    {device.name}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                >
                    Status: {device.status}
                </Typography>

                <Button
                    variant="outlined"
                    fullWidth
                >
                    Control
                </Button>
            </Paper>
        </Grid2>
    ))}
</Grid2>;
```

### Performance-Optimized List

```tsx
import { memo, useMemo, useCallback } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface ItemProps {
    item: Device;
    onSelect: (id: string) => void;
}

const ListItemComponent = memo<ItemProps>(({ item, onSelect }) => {
    const handleClick = useCallback(() => {
        onSelect(item.id);
    }, [item.id, onSelect]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemText
                    primary={item.name}
                    secondary={item.status}
                />
            </ListItemButton>
        </ListItem>
    );
});

export const DeviceList = ({ devices, onSelect }) => {
    const sortedDevices = useMemo(() => [...devices].sort((a, b) => a.name.localeCompare(b.name)), [devices]);

    return (
        <List>
            {sortedDevices.map(device => (
                <ListItemComponent
                    key={device.id}
                    item={device}
                    onSelect={onSelect}
                />
            ))}
        </List>
    );
};
```

### Dialog with Loading State

```tsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress } from '@mui/material';

const [loading, setLoading] = useState(false);

<Dialog
    open={open}
    onClose={handleClose}
    maxWidth="sm"
    fullWidth
>
    <DialogTitle>Confirm Action</DialogTitle>

    <DialogContent>
        {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
            </Box>
        ) : (
            <Typography>Are you sure?</Typography>
        )}
    </DialogContent>

    <DialogActions>
        <Button
            onClick={handleClose}
            disabled={loading}
        >
            Cancel
        </Button>
        <Button
            onClick={handleConfirm}
            variant="contained"
            disabled={loading}
        >
            {loading ? 'Processing...' : 'Confirm'}
        </Button>
    </DialogActions>
</Dialog>;
```

---

## Summary

**Key Takeaways:**

1. **Use MUI v6.5 components** consistently - no raw HTML elements
2. **sx prop first** (90%), styled() for complex components (10%)
3. **Accessibility is MANDATORY** - aria-label, keyboard navigation, tooltips
4. **Performance matters** - React.memo, useMemo, useCallback
5. **Theme integration** - use theme colors, support dark mode
6. **TypeScript always** - no `any` types
7. **Test accessibility** - keyboard navigation, screen readers, contrast
8. **Refer to MCP** - use `useMuiDocs` for latest MUI v6.5 documentation

**Before submitting code, verify:**

- [ ] All interactive elements have ARIA attributes
- [ ] Keyboard navigation works
- [ ] Tooltips on icon buttons
- [ ] Theme colors used (not hardcoded)
- [ ] TypeScript types defined
- [ ] Performance optimized (memo/useMemo where appropriate)
- [ ] No console errors/warnings
- [ ] Responsive design considered

---

**Questions? Use MCP servers:**

- **Material-UI v6.5:** Call `useMuiDocs` tool
- **React/TypeScript:** Use Context7 MCP
- **GitHub issues:** Refer to github.instructions.md
