# AGENTS.md - Development Guide for ioBroker vis-2 Widgets Collection

## Project Overview

This repository contains ioBroker vis-2 widgets built with React 18, TypeScript, and Material-UI v6.5. Widgets are loaded via Module Federation and communicate with ioBroker through Socket.IO. All development must follow the patterns and constraints defined below.

## Build & Test Commands

### Root Level Commands

```bash
# Build all widgets (default task)
npm run build

# Build individual steps
npm run -- --0-clean    # Clean build directories
npm run -- --1-npm      # Install dependencies
npm run -- --2-build    # Build React widgets
npm run -- --3-copy     # Copy files to final destination

# Code quality
npm run lint            # Run ESLint
npm run lintfix         # Auto-fix ESLint issues
npm run format          # Check Prettier formatting
npm run formatfix       # Apply Prettier formatting

# Testing
npm test                # Run all tests with Mocha

# Release management
npm run release         # Interactive release
npm run release-patch   # Auto-bump patch version
npm run release-minor   # Auto-bump minor version
npm run release-major   # Auto-bump major version

# Dependency updates
npm run update-packages # Update npm packages in all directories
```

### Widget Development Commands (src-widgets/)

```bash
# Development server with hot reload
npm run start           # Start Vite dev server on port 3000

# Production build
npm run build           # TypeScript compile + Vite build

# Preview production build
npm run preview

# Internationalization
npm run i18n            # Extract translation keys
npm run translate       # Update translations

# Update browser support
npm run update-browsers
```

### Testing

```bash
# Run single test file
npm test -- --grep "specific test description"

# Run tests with coverage
npm test -- --coverage

# Integration tests (requires running ioBroker instance)
cd test && node widgets.test.js
```

## Code Style Guidelines

### Import Organization

```typescript
// 1. React and core libraries
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

// 2. Third-party libraries
import { memo } from 'react';

// 3. Internal imports (use relative paths)
import { cleanSx } from '../lib/cleanSx';
import { gradientColor } from '../lib/gradientColor';
import { useValueState } from '../hooks/useValueState';
import CollectionBase from '../components/CollectionBase';
import type { WidgetData } from '../types';
```

### Formatting Standards

- **Indentation**: 2 spaces (config enforced by `.editorconfig`)
- **Line endings**: LF (Unix)
- **Max line length**: Not strictly enforced, but prefer 80-100 chars
- **Trailing whitespace**: Always trimmed
- **Final newline**: Required on all files

### TypeScript Requirements

```typescript
// ✅ Use explicit types for props and interfaces
interface WidgetData {
    oid: string;
    min: number;
    max: number;
    color?: string;
}

// ✅ Use generic types for React components
const MyWidget: React.FC<{ data: WidgetData }> = ({ data }) => {
    // Component logic
};

// ✅ Type event handlers
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Handler logic
};

// ❌ NEVER use 'any' type
const handleChange = (value: any) => {
    // Wrong - use proper typing
};
```

### Naming Conventions

```typescript
// Components: PascalCase with descriptive names
const StateCollectionWidget = () => {};
const DeviceControlButton = () => {};

// Variables and functions: camelCase
const deviceState = useState();
const handleButtonClick = () => {};

// Constants: UPPER_SNAKE_CASE
const DEFAULT_TIMEOUT = 5000;
const WIDGET_TYPES = ['switch', 'slider', 'button'];

// Files: PascalCase for components, camelCase for utilities
StateCollectionWidget.tsx;
useValueState.ts;
cleanSx.ts;

// Interfaces: PascalCase with descriptive suffixes
interface WidgetDataProps {}
interface StateSubscriptionCallback {}
```

### Error Handling

```typescript
// ✅ Always check for null/undefined
const state = await getStateAsync(oid);
if (state) {
    const value = state.val as number;
}

// ✅ Use try-catch for async operations
try {
    await updateState(oid, value);
} catch (error) {
    console.error(`Failed to update state ${oid}:`, error);
    // Show user feedback
}

// ✅ Provide fallbacks
const color = data.color || theme.palette.primary.main;

// ✅ Type assertions with validation
const numericValue = typeof state?.val === 'number' ? state.val : 0;
```

### State Management

```typescript
// ✅ Use custom hooks for ioBroker state
const { value, updateValue } = useValueState('light.brightness');

// ✅ Local state for UI-only data
const [isOpen, setIsOpen] = useState(false);

// ❌ Don't duplicate props in state
const MyComponent = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue); // Avoid this pattern
};
```

### Performance Guidelines

```typescript
// ✅ Memoize expensive components
export const DeviceCard = memo<DeviceCardProps>(({ name, value }) => {
    return <Box>{name}: {value}</Box>;
});

// ✅ Memoize expensive calculations
const processedData = useMemo(() => {
    return items
        .filter(item => item.visible)
        .map(item => ({ ...item, computed: heavyComputation(item) }));
}, [items]);

// ✅ Memoize event handlers
const handleSave = useCallback(() => {
    onSave(data);
}, [data, onSave]);
```

### Accessibility (MANDATORY)

```typescript
// ✅ Every interactive element needs aria-label
<Button onClick={handleClick} aria-label="Toggle device">
    <Icon />
</Button>

// ✅ Tooltip required for IconButton
<Tooltip title="Delete item">
    <IconButton
        onClick={handleDelete}
        aria-label="Delete item"
    >
        <DeleteIcon />
    </IconButton>
</Tooltip>

// ✅ Keyboard navigation support
<Box
    role="button"
    tabIndex={0}
    onClick={handleClick}
    onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
        }
    }}
>
    Interactive content
</Box>
```

## Material-UI v6.5 Specific Rules

### Component Selection

```typescript
// ✅ Use MUI components for everything
<Box />                    // Layout containers
<Typography />            // All text
<Button />                // Actions
<Paper />                 // Elevated surfaces
<Stack />                 // Directional layouts
<Grid2 />                 // Responsive grids

// ❌ Never use raw HTML elements
<div onClick={...}>        // Wrong - use <Button> or <Box with proper props>
<p>Text</p>               // Wrong - use <Typography>
```

### Styling

```typescript
// ✅ Use sx prop for most styling
<Box sx={{
    p: 2,
    bgcolor: 'background.paper',
    borderRadius: 1,
}} />

// ✅ Use cleanSx for dynamic styles
<Box sx={cleanSx({
    width: data.width,           // Can be undefined
    height: data.height,         // Can be undefined
    backgroundColor: data.color, // Converts kebab-case
})} />

// ❌ Never use inline style prop
<Box style={{ padding: 16 }} />  // Wrong - no theme access
```

### Icon Imports

```typescript
// ✅ Import individual icons for tree-shaking
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

// ❌ Never import entire library
import { Close, Delete } from '@mui/icons-material';
```

## Module Federation Configuration

### Widget Export Pattern

```typescript
// src/index.tsx - Module federation export point
export { default as StateCollectionWidget } from './StateCollectionWidget/StateCollectionWidget';
export { default as SliderCollectionWidget } from './SliderCollectionWidget/SliderCollectionWidget';
export { default as translations } from './translations';

// vite.config.ts - Must expose all widgets
exposes: {
    './StateCollectionWidget': './src/StateCollectionWidget/StateCollectionWidget',
    './SliderCollectionWidget': './src/SliderCollectionWidget/SliderCollectionWidget',
    './translations': './src/translations',
}
```

### io-package.json Registration

```json
{
    "common": {
        "visWidgets": {
            "vis2CollectionWidget": {
                "url": "vis-2-widgets-collection/customWidgets.js",
                "components": ["StateCollectionWidget", "SliderCollectionWidget"]
            }
        }
    }
}
```

## Testing Strategy

### Unit Testing

```typescript
// Test naming: Describe the feature/context
describe('StateCollectionWidget', () => {
    it('should render with default props', () => {
        // Test implementation
    });

    it('should handle state updates correctly', () => {
        // Test async behavior
    });
});
```

### Integration Testing

```bash
# Widget integration tests run in browser environment
# Test file: test/widgets.test.js

# Run specific test
npm test -- --grep "StateCollectionWidget"
```

## Development Workflow

### Making Changes

1. **Create feature branch** from main
2. **Start dev server**: `cd src-widgets && npm run start`
3. **Make changes** - hot reload enabled on port 3000
4. **Test locally** in vis-2 interface
5. **Run linting**: `npm run lint` and `npm run format`
6. **Build verification**: `npm run build`
7. **Run tests**: `npm test`
8. **Commit changes** with clear messages
9. **Create PR** for review

### Hot Reload Setup

```bash
# Terminal 1: Widget dev server
cd src-widgets && npm run start

# Terminal 2: ioBroker controller (separate instance)
iobroker start

# Configure vis-2 to load from localhost:3000/customWidgets.js
# Edit system.adapter.vis-2-widgets-collection.0.common.visWidgets
```

## Critical Constraints

### MUI Dependencies

- **MUI is shared** via Module Federation - NOT a direct dependency
- **Version locked** to v6.5.0 - no independent upgrades
- **No @mui/material** in src-widgets/package.json

### Widget Structure

- **All widgets extend Generic** base class
- **Must be exported** via Module Federation
- **Must be registered** in io-package.json
- **Components use collection wrapper** pattern

### Performance

- **Use React.memo** for frequently rendered components
- **Use useMemo** for expensive calculations
- **Use useCallback** for event handlers
- **Import icons individually** for tree-shaking

### Accessibility

- **Every interactive element** needs aria-label
- **Every IconButton** needs Tooltip wrapper
- **Keyboard navigation** must be supported
- **Semantic MUI components** only

## Common Anti-Patterns to Avoid

```typescript
// ❌ Direct DOM manipulation
document.getElementById('myDiv').style.color = 'red';

// ❌ Inline styles without theme
<Box style={{ padding: 16, color: '#000' }} />

// ❌ Raw HTML elements
<div onClick={handleClick}>Click me</div>

// ❌ Missing accessibility
<IconButton onClick={handleDelete}>
    <DeleteIcon />
</IconButton>

// ❌ Performance anti-patterns
const handleClick = () => deleteItem(id);  // Creates new function each render
const expensiveList = items.map(transformData); // Recalculated each render
```

## Required Pre-commit Checks

Always run before committing:

```bash
npm run lint        # Check for lint errors
npm run format      # Check formatting
npm run build       # Verify build works
npm test            # Run all tests
```

If any check fails, fix the issues before committing.
