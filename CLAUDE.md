# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run build          # Build widgets (cleans, npm install in src-widgets/, builds with Vite, copies to widgets/)
npm run lint           # Run ESLint
npm run lintfix        # Run ESLint with auto-fix
npm run format         # Check Prettier formatting
npm run formatfix      # Apply Prettier formatting
npm run test           # Run tests with mocha
npm run release-patch  # Release patch version
```

## Development Server

```bash
cd src-widgets && npm run start   # Start Vite dev server on port 3000
```

The dev server proxies ioBroker backend requests to `localhost:8082`.

## Architecture

This is an ioBroker vis-2 widget collection adapter. Widgets are React components bundled via **Vite + Module Federation** and loaded dynamically by ioBroker.vis-2.

### Directory Structure

```
src-widgets/
  src/
    Generic.tsx              # Base class for all widgets (extends VisRxWidget)
    <Widget>Name/
      <Widget>Name.tsx       # Widget class (extends Generic)
      <Widget>.tsx           # React component for rendering
    components/              # Shared React components
    hooks/                   # Custom React hooks
    lib/                     # Field definitions (commonFields.tsx, etc.) and helpers
    types/                   # TypeScript type definitions
    i18n/                    # Translations (en.json, de.json, etc.)
  vite.config.ts             # Module Federation configuration

io-package.json              # Widget registration in common.visWidgets
widgets/                     # Build output (copied from src-widgets/build/)
```

### Widget Registration

Widgets are registered in `io-package.json` under `common.visWidgets.vis2CollectionWidget.components`. Each widget must also be exposed in `src-widgets/vite.config.ts` under `federation.exposes`.

### Widget Pattern

All widgets extend `Generic` base class and use `withCollectionProvider` HOC:

```typescript
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

class MyWidget extends Generic<RxDataTypes> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplMyWidget',
            visSet: 'vis-2-widgets-collection',
            visName: 'MyWidget',
            visAttrs: [...],  // Property editor fields
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element {
        return <MyComponent {...props} />;
    }
}

export default withCollectionProvider<MyWidgetRxData, ContextProps>(MyWidget, MyComponent);
```

### Key APIs from Generic Base Class

- `getPropertyValue(stateName)` - Get current value for a configured OID property
- `setValue(id, value, ack)` - Write to an ioBroker state
- `wrapContent(content)` - Common wrapper layout
- `props.context.socket` - Socket.IO connection for state subscriptions

### State Management

- Subscribe in `componentDidMount()` via `this.props.context.socket.subscribeState()`
- Unsubscribe is automatic via VisRxWidget
- Always check `state !== null` before accessing `state.val`

## Code Standards

- **All code comments and documentation must be in English**
- Use TypeScript strict mode
- MUI v6.5 is shared via Module Federation (not a direct dependency)
- Use `useMuiDocs` MCP tool for MUI documentation queries

## Field Definitions

Widget property editor fields are defined in `src-widgets/src/lib/`:
- `commonFields.tsx` - Common widget properties
- `commonObjectFields.tsx` - OID and state type fields
- `stateFields.tsx` - State-related fields
- `delayFields.tsx` - Debounce/throttle fields

## Type System

Widget types are defined in `src-widgets/src/types/`. Use `WidgetRegistry` interface for type-safe widget data access.

## Testing

Tests use `@iobroker/vis-2-widgets-testing` helper to start ioBroker, browser, and verify widgets render correctly.
