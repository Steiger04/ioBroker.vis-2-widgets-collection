# New Type System Ideas and Status (English Edition)

## Executive Summary

The new type system for `vis-2-widgets-collection` follows a greenfield approach with five goals:

1. **Full type safety** – eliminate all `any` usage.
2. **Extensibility** – add new widgets with minimal effort.
3. **Deep vis-2 integration** – align with core types and Module Federation.
4. **Dynamic index signatures** – support unlimited indexed fields via template literal types.
5. **Maintainability** – clear structure, thorough documentation, and predictable growth.

## Problem Analysis (legacy state)

- Critical `any` usage in hooks such as `useData.ts` prevented compile-time validation and IntelliSense.
- Field definitions were incomplete, especially for Gauge and Light2, leading to missing properties and runtime surprises.
- Indexed properties were hard-coded (e.g., `oid1..oid10`), blocking scalability and increasing maintenance cost.

## Solution Concept

- Replace explicit indices with **template literal types** (`oid${number}`, `value${number}`) to allow unlimited, type-safe keys.
- Compose widget data via **union-to-intersection** helpers so each widget pulls the exact field groups it needs.
- Keep field definitions modular, documented, and re-exported through a single registry for predictable imports.
- Use **module augmentation** to extend vis-2 types where needed (state patterns, widget info extras).

## Current Status

- ✅ Dynamic index signatures adopted across field definitions.
- ✅ Field registry aligned with widget mappings.
- ✅ Documentation moved to English with examples and defaults.
- 🚧 Additional runtime validation ideas are parked for later phases.

## Type System Building Blocks

### Field Definitions

- **CommonFieldsRxData** – shared visual options, icons, headers, and signals.
- **CommonObjectFieldsRxData** – ioBroker object handling (OID, unit, values) with dynamic `${string}Object` metadata.
- **Widget-specific groups** – state, delay, gauge, slider, switch, checkbox, dialog, select, radioGroup, buttonGroup, light2, activeState.

All field groups are registered in `FieldDefinitions` and re-exported for consumer convenience.

### Widget Registry

`WidgetFieldMappings` maps each widget ID to the field groups it composes. `WidgetRegistry` converts that list into an intersection of rxData types, which is then used by `Generic<WidgetRegistry['tplWidget']>`.

### Utility Types

- `UnionToIntersection<U>` – core helper to merge field unions.
- `ExtractFieldTypes<T>` – pull `rxData` from field modules.
- `BuildWidgetData<T>` – construct widget data from a tuple of field groups.

### Context Types

`CollectionContextProps<T>` binds widget data, socket, theme, and helper callbacks. Widget-specific contexts are aliases such as `StateCollectionContextProps` derived from `WidgetRegistry`.

### Module Augmentation

`vis-2-extensions.d.ts` adds collection-specific patterns to `VisRxWidgetStateValues` and allows widget metadata extensions where necessary.

## Implementation Notes

- Prefer importing types from `vis-2-widgets-collection/types` rather than runtime generator files.
- Keep defaults documented in field definitions to mirror UI generator behavior.
- When adding a new widget, update the registry mapping and exports; intersection types will update automatically.

## Example Snippets

### Type-safe data access

```typescript
import type { WidgetRegistry } from 'vis-2-widgets-collection/types';

type SliderData = WidgetRegistry['tplSliderCollectionWidget'];

function clamp(data: SliderData) {
    const min = data.minValue ?? 0;
    const max = data.maxValue ?? 100;
    const value = data.value1 ?? 0;
    return Math.min(max, Math.max(min, value));
}
```

### Indexed object metadata

```typescript
import type { CommonObjectFieldsRxData } from 'vis-2-widgets-collection/types';

const objects: CommonObjectFieldsRxData = {
    values_count: 2,
    oid: 'hm-rpc.0.device.STATE',
    unit: '%',
    alias1: 'Living Room',
    alias2: 'Bedroom',
    oid1Object: { _id: 'hm-rpc.0.device1.STATE', name: 'State 1', type: 'boolean', unit: '%', write: true },
    oid2Object: { _id: 'hm-rpc.0.device2.STATE', name: 'State 2', type: 'boolean', unit: '%', write: false },
};
```

### Building widget data types

```typescript
import type { BuildWidgetData } from 'vis-2-widgets-collection/types';

type MyFields = ['common', 'commonObject', 'delay'];
type MyWidgetData = BuildWidgetData<MyFields>;

class MyWidget extends Generic<MyWidgetData> {
    // fully typed data: common + commonObject + delay
}
```

## FAQ

**Why dynamic index signatures?**
To avoid hard-coded limits and keep IntelliSense while allowing `oid${number}` and `value${number}` patterns.

**How are defaults handled?**
Defaults are documented in field definitions and should mirror generator defaults; runtime still owns actual default resolution.

**Do we still need legacy runtime types?**
No. Prefer the exported `.d.ts` definitions. Legacy runtime definitions remain only for backward compatibility and will be removed in later phases.

## Future Ideas

- Runtime validation helpers that mirror the type system (deferred).
- Automated doc generation from field definitions.
- Lint rule set to forbid `any` within widget and hook code.

## Glossary

- **Collection widget** – widget displaying multiple related items (e.g., multiple lights or states).
- **Field definition** – typed configuration group (common, state, gauge, etc.).
- **Widget registry** – mapping from widget IDs to field groups, producing final data types.
- **Template literal type** – TypeScript feature for dynamic key typing (e.g., `oid${number}`).
- **Union-to-intersection** – pattern to merge multiple field types into one widget data type.

## Status Tags

- ✅ Implemented
- 🚧 Planned / deferred
- 📝 Documented

All core ideas listed above are now translated, documented, and aligned with the current codebase. Use this file as the living reference for future type-system enhancements.
