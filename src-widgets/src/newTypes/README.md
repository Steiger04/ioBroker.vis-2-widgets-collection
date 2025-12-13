# vis-2-widgets-collection: New Type Infrastructure (Phase 1)

## Overview

This directory contains the new type infrastructure for vis-2 Collection widgets. Phase 1 establishes foundational type utilities that enable type-safe widget composition with compile-time validation and enhanced TypeScript support.

The new type system coexists with the existing types in `src/types/index.d.ts` to ensure backward compatibility during the migration process.

## Files

### Core Type Utilities

| File                                                 | Purpose                               | Key Exports                                                                                                      |
| ---------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **[widget-builder.d.ts](./widget-builder.d.ts)**     | Type utilities for widget composition | `UnionToIntersection`, `BuildWidgetData`, `BuildWidgetState`, `ExtractFieldTypes`, `ValidateFields`              |
| **[utility-types.d.ts](./utility-types.d.ts)**       | Helper functions and type guards      | `getDynamicProperty`, `setDynamicProperty`, `getAllIndexedProperties`, `isValidWidgetData`, `hasIndexedProperty` |
| **[vis-2-extensions.d.ts](./vis-2-extensions.d.ts)** | Module augmentation for vis-2         | `CollectionWidgetInfo`, `FieldChangeCallback`, `FieldValidationCallback`                                         |
| **[index.d.ts](./index.d.ts)**                       | Central export point                  | Re-exports all types                                                                                             |

### Directory Structure

```
newTypes/
├── widget-builder.d.ts      # Widget composition types
├── utility-types.d.ts        # Runtime utilities (declarations only)
├── vis-2-extensions.d.ts     # vis-2 type extensions
├── index.d.ts                # Central export point
├── README.md                 # This file
├── all-ideas-for-new-types.md # Complete blueprint (~1300 lines)
├── field-definitions/        # Phase 2: Field type definitions (empty)
└── __tests__/
    └── type-tests.ts         # Type-level validation tests
```

## Usage

### Building Widget Data Types

The core pattern for creating widget types is using `BuildWidgetData`:

```typescript
import type { BuildWidgetData } from 'vis-2-widgets-collection/newTypes';

// Define your field modules
type MyWidgetFields = [typeof commonFields, typeof stateFields, typeof delayFields];

// Compose the widget data type
type MyWidgetData = BuildWidgetData<MyWidgetFields>;

// Use in widget class
class MyWidget extends Generic<MyWidgetData> {
    // Full type safety for this.props
}
```

**Result:** All fields from the imported modules are merged into a single type with proper type inference.

### Converting to Widget State

Use `BuildWidgetState` to create state types with nullable properties:

```typescript
import type { BuildWidgetData, BuildWidgetState } from 'vis-2-widgets-collection/newTypes';

type MyWidgetData = BuildWidgetData<[typeof commonFields, typeof stateFields]>;
type MyWidgetState = BuildWidgetState<MyWidgetData>;

// Optional properties become explicitly nullable
interface MyWidgetFullState extends MyWidgetState {
    isLoading: boolean;
    error: string | null;
}
```

### Dynamic Property Access

Replace `as any` casts with type-safe utilities:

```typescript
import { getDynamicProperty } from 'vis-2-widgets-collection/newTypes';

// Old (unsafe):
const oid = (this.props as any)[`oid${index}`];

// New (type-safe):
const oid = getDynamicProperty(this.props, `oid${index}`);
```

### Working with Indexed Properties

Collection widgets use numbered properties (oid1, oid2, ...):

```typescript
import { getAllIndexedProperties, hasIndexedProperty } from 'vis-2-widgets-collection/newTypes';

// Get all OIDs
const allOids = getAllIndexedProperties(this.props, 'oid');
// Result: [{ index: 1, value: 'light.on' }, { index: 2, value: 'light.brightness' }, ...]

// Check if specific index exists
if (hasIndexedProperty(this.props, 'oid', 5)) {
    const oid5 = this.props.oid5;
    // Subscribe to state
}
```

### Runtime Type Validation

Use type guards for runtime validation:

```typescript
import { isValidWidgetData } from 'vis-2-widgets-collection/newTypes';

interface MyWidgetData {
    oid: string;
    label: string;
    visible: boolean;
}

function processData(data: unknown) {
    if (isValidWidgetData<MyWidgetData>(data)) {
        // TypeScript knows data is MyWidgetData here
        console.log(data.oid, data.label);
    } else {
        console.error('Invalid widget data');
    }
}
```

### Extending Widget Info

Use `CollectionWidgetInfo` for collection-specific metadata:

```typescript
import type { CollectionWidgetInfo } from 'vis-2-widgets-collection/newTypes';

class MyWidget extends Generic<MyWidgetData> {
    static getWidgetInfo(): CollectionWidgetInfo {
        return {
            id: 'tplStateCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visName: 'StateCollectionWidget',
            collectionType: 'state',
            maxItems: 10,
            // ... other RxWidgetInfo properties
        };
    }
}
```

## Type Utilities Deep Dive

### UnionToIntersection

Converts union types to intersection types (A | B → A & B):

```typescript
type A = { a: string };
type B = { b: number };
type Combined = UnionToIntersection<A | B>;
// Result: { a: string } & { b: number }

const obj: Combined = { a: 'test', b: 42 }; // OK
```

**Use case:** Combining multiple field definition types into a single widget data type.

### ExtractFieldTypes

Extracts the `rxData` property from field modules:

```typescript
const myFields = {
    rxData: { label: string, visible: boolean },
    // ... other properties
};

type Fields = ExtractFieldTypes<typeof myFields>;
// Result: { label: string, visible: boolean }
```

**Use case:** Getting the data type from a field definition module.

### BuildWidgetData

Composes widget data from an array of field types:

```typescript
type WidgetFields = [{ rxData: { label: string } }, { rxData: { oid: string } }, { rxData: { delay: number } }];

type WidgetData = BuildWidgetData<WidgetFields>;
// Result: { label: string, oid: string, delay: number }
```

**Use case:** The primary type builder for widget classes.

### BuildWidgetState

Converts data types to state types with nullable properties:

```typescript
type Data = { label: string; value?: number };
type State = BuildWidgetState<Data>;
// Result: { label: string, value: number | null }
```

**Use case:** Creating widget state interfaces from data types.

### ValidateFields

Compile-time validation for field configurations:

```typescript
type Valid = ValidateFields<{ label: string }>; // OK
type Invalid = ValidateFields<string>; // never (compilation error)
```

**Use case:** Ensuring field definitions are proper object types.

## Runtime Utilities (Declarations)

The functions in [utility-types.d.ts](./utility-types.d.ts) are **type declarations only**. The actual implementations will be created in `.ts` files when widgets are migrated and need these utilities.

This approach:

- Defines the type contracts upfront
- Allows progressive implementation
- Prevents TypeScript errors during development
- Ensures consistency across implementations

## Module Augmentation

The [vis-2-extensions.d.ts](./vis-2-extensions.d.ts) file extends `@iobroker/types-vis-2` with Collection-specific types:

```typescript
declare module '@iobroker/types-vis-2' {
    interface VisRxWidgetStateValues {
        [key: `collection_${string}`]: any;
    }
}
```

This allows Collection widgets to use state properties like `collection_state`, `collection_slider_value`, etc., without TypeScript errors.

## Integration with Existing Code

### Backward Compatibility

The new type system does **not** replace the existing types in [src/types/index.d.ts](../types/index.d.ts). Both systems coexist:

- **Old system:** `src/types/index.d.ts` - Used by current widgets
- **New system:** `src/newTypes/` - Used by migrated widgets (future phases)

### Import Paths

New types can be imported in two ways:

```typescript
// Relative import (within src-widgets/src/)
import type { BuildWidgetData } from './newTypes';

// Package import (from outside package)
import type { BuildWidgetData } from 'vis-2-widgets-collection/newTypes';
```

The package import requires the `exports` field in [package.json](../../package.json) to be configured (see Phase 1, Step 10).

## Phase 2: Field Definitions (✅ Complete)

The [field-definitions/](./field-definitions/) directory contains type-safe field definitions for all Collection widgets.

### Available Field Types

| File                          | Interface                  | Properties             | Description                                    |
| ----------------------------- | -------------------------- | ---------------------- | ---------------------------------------------- |
| **common-fields.d.ts**        | `CommonFieldsRxData`       | ~35 dynamic + 2 static | Icons, headers, footers, backgrounds, geometry |
| **common-object-fields.d.ts** | `CommonObjectFieldsRxData` | 8 static + 3 dynamic   | OID, unit, values, object metadata             |

### Usage Example

```typescript
import type { CommonFieldsRxData, CommonObjectFieldsRxData } from 'vis-2-widgets-collection/newTypes';

interface MyWidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData {
    // Widget-specific properties
    customProp: string;
}

// Access dynamic properties
const icon1: string | number | undefined = data.icon1;
const oid2: string | undefined = data.oid2;
```

### Key Improvements

- **✅ Stricter types:** `${number}` instead of `${string}` for index signatures
- **✅ Unlimited indices:** oid1, oid2, ..., oidN
- **✅ Complete JSDoc documentation:** All properties documented with examples
- **✅ Type-safe dynamic property access:** No more `as any` casts

For detailed information, see [field-definitions/README.md](./field-definitions/README.md).

## Phase 3: Widget-Specific Field Definitions (✅ Complete)

Phase 3 added widget-specific field definitions to the [field-definitions/](./field-definitions/) directory:

- ✅ `state-fields.d.ts` - State field types (~5 properties)
- ✅ `delay-fields.d.ts` - Delay field types (~2 properties)
- ✅ `gauge-fields.d.ts` - Gauge-specific fields (~80 properties)
- ✅ `slider-fields.d.ts` - Slider-specific fields (~7 properties)
- ✅ `switch-fields.d.ts` - Switch-specific fields (~4 properties)
- ✅ `checkbox-fields.d.ts` - Checkbox-specific fields (~3 properties)
- ✅ `dialog-fields.d.ts` - Dialog-specific fields (~5 properties)
- ✅ `select-fields.d.ts` - Select-specific fields (~4 properties)
- ✅ `radio-group-fields.d.ts` - Radio group-specific fields (~5 properties)
- ✅ `button-group-fields.d.ts` - Button group-specific fields (~6 properties)
- ✅ `light2-fields.d.ts` - Light2-specific fields (~24 properties)

**Total:** ~167 widget-specific properties across 11 field definition files.

These are integrated into the `FieldDefinitions` registry for use with `BuildWidgetData` and the Widget Registry (Phase 4).

## Phase 4: Widget Registry & Context Types (✅ Complete)

Phase 4 establishes the **Widget Registry and Context Type Infrastructure** as the central binding layer between field definitions (Phase 2-3) and widget implementations (Phase 5-8).

### New Files

| File                                | Purpose                             | Key Exports                                                                                              |
| ----------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **widget-registry.d.ts**            | Widget field mappings and registry  | `WidgetRegistry`, `WidgetFieldMappings`, `WidgetDataFor`, `WidgetFieldsFor`, `WidgetId`, `AnyWidgetData` |
| **context-types.d.ts**              | React Context types for all widgets | `CollectionContextProps`, 11 widget-specific context types, `AllCollectionContextProps`                  |
| \***\*tests**/phase-4.test-d.ts\*\* | Type tests for Phase 4              | 100+ type assertions validating registry and context types                                               |

### Widget Registry

The Widget Registry is the **single source of truth** for widget composition. It maps each widget ID to its field dependencies:

```typescript
interface WidgetFieldMappings {
    tplStateCollectionWidget: ['common', 'commonObject', 'state', 'delay'];
    tplGaugeCollectionWidget: ['common', 'commonObject', 'gauge'];
    // ... 9 more widgets
}

// Auto-generated widget data types
type WidgetRegistry = {
    [K in keyof WidgetFieldMappings]: UnionToIntersection<FieldDefinitions[WidgetFieldMappings[K][number]]>;
};
```

**Key Benefits:**

- **Zero Manual Types:** All widget data types auto-generated via type-level programming
- **Single Source of Truth:** Widget composition defined once in mapping table
- **Compile-Time Safety:** TypeScript validates field combinations at build time
- **Scalability:** New widgets require only 1 line in mapping table

### Context Types

Context types provide type-safe React Context interfaces for all Collection widgets:

```typescript
// Generic context interface
interface CollectionContextProps<T> {
    id: string;
    widget: { data: VisRxData & T; style: CSSProperties };
    setValue: (id: string, value: ...) => void;
    values: VisRxWidgetStateValues;
    socket: LegacyConnection;
    // ... 10 more properties
}

// Widget-specific context types (11 total)
type StateCollectionContextProps = CollectionContextProps<WidgetRegistry['tplStateCollectionWidget']>;
type GaugeCollectionContextProps = CollectionContextProps<WidgetRegistry['tplGaugeCollectionWidget']>;
// ... 9 more
```

**Key Benefits:**

- **Type-Safe React Context:** Full IntelliSense support for all context properties
- **Consistent Structure:** All widgets follow same context pattern
- **Widget-Specific Data:** Each context type includes exact widget fields
- **Runtime Safety:** TypeScript prevents invalid property access

### Supported Widgets

| Widget      | Widget ID                        | Field Dependencies                       | Properties |
| ----------- | -------------------------------- | ---------------------------------------- | ---------- |
| Template    | `tplTemplateCollectionWidget`    | common, commonObject                     | ~45        |
| State       | `tplStateCollectionWidget`       | common, commonObject, state, delay       | ~52        |
| Checkbox    | `tplCheckboxCollectionWidget`    | common, commonObject, checkbox, delay    | ~50        |
| Switch      | `tplSwitchCollectionWidget`      | common, commonObject, switch, delay      | ~51        |
| Slider      | `tplSliderCollectionWidget`      | common, commonObject, slider, delay      | ~54        |
| RadioGroup  | `tplRadioGroupCollectionWidget`  | common, commonObject, radioGroup, delay  | ~52        |
| ButtonGroup | `tplButtonGroupCollectionWidget` | common, commonObject, buttonGroup, delay | ~53        |
| Select      | `tplSelectCollectionWidget`      | common, commonObject, select, delay      | ~51        |
| Gauge       | `tplGaugeCollectionWidget`       | common, commonObject, gauge              | ~125       |
| Dialog      | `tplDialogCollectionWidget`      | common, commonObject, dialog             | ~50        |
| Light2      | `tplLight2CollectionWidget`      | common, commonObject, light2, delay      | ~71        |

**Total:** ~650 properties across all widgets (without duplication)

### Usage Examples

#### Widget Class with Registry

```typescript
import type { WidgetRegistry } from 'vis-2-widgets-collection/newTypes';
import Generic from '../Generic';

class StateWidget extends Generic<WidgetRegistry['tplStateCollectionWidget']> {
    render() {
        const { alias1, oid1, onlyStates, delay } = this.props.data;
        // TypeScript knows all properties:
        // - alias1...alias20 (common)
        // - oid1...oid20 (commonObject)
        // - onlyStates, showIcon (state)
        // - delay, delayEnabled (delay)
    }
}
```

#### React Context Provider

```typescript
import React from 'react';
import type { StateCollectionContextProps } from 'vis-2-widgets-collection/newTypes';

const StateContext = React.createContext<StateCollectionContextProps>(null!);

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contextValue: StateCollectionContextProps = {
        id: 'w00001',
        widget: {
            data: {
                alias1: 'Temperature',
                oid1: 'system.adapter.temperature',
                onlyStates: true,
                delay: 500
            },
            style: {}
        },
        setValue: (id, value) => { /* ... */ },
        // ... other properties
    };

    return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};
```

#### Type-Safe Context Consumer

```typescript
import React from 'react';
import type { StateCollectionContextProps } from 'vis-2-widgets-collection/newTypes';

const StateContext = React.createContext<StateCollectionContextProps>(null!);

function StateDisplay() {
    const context = React.useContext(StateContext);

    // Full IntelliSense support
    const { oid1, onlyStates, delay } = context.widget.data;
    const value = context.values[oid1!];

    return <div>{value?.val}</div>;
}
```

### Phase 4 Metrics

- **Widget Data Types:** 11 (auto-generated from field mappings)
- **Context Types:** 11 (one per widget)
- **Helper Types:** 8 (WidgetDataFor, WidgetFieldsFor, WidgetId, etc.)
- **Type Tests:** 100+ assertions
- **Manual Types Required:** 0 (100% automated)
- **Lines of Code:** 1,430+ (widget-registry: 371, context-types: 574, tests: 485)
- **JSDoc Coverage:** 100%

For detailed information, see [PHASE-4-COMPLETE.md](./PHASE-4-COMPLETE.md).

## Next Steps

### Phase 5: Hooks & Utilities Migration (⏳ Next)

Phase 5 will migrate hooks and utility functions to use new context types and widget registry:

**Planned Tasks:**

- Update `hooks/useCollectionState.ts` to use `CollectionContextProps`
- Migrate `hooks/useWidgetData.ts` to use `WidgetRegistry` types
- Update HOCs (`withCollectionProvider.tsx`) to accept new context types
- Create type guards for runtime widget identification
- Add hook tests with new types

**Estimated Effort:** ~2-3 days

### Phase 6-8: Widget Implementation Migration

Phase 6-8 will migrate all 11 widget implementations to use registry types:

**Approach:**

- Phase 6: Migrate 3-4 simple widgets (Template, State, Checkbox, Switch)
- Phase 7: Migrate 4-5 medium widgets (Slider, RadioGroup, ButtonGroup, Select, Dialog)
- Phase 8: Migrate 2-3 complex widgets (Gauge, Light2)

**Estimated Effort:** ~7-10 days

### Phase 9-10: Cleanup & Finalization

- Phase 9: Runtime field generator migration
- Phase 10: Remove old type system, final cleanup
- Create widget-specific data types
- Migrate widget implementations to use new types
- Implement runtime utilities (currently only declarations)
- Add comprehensive type tests
- Deprecate old type system

## Resources

### Documentation

- **[Complete Blueprint](./all-ideas-for-new-types.md)** - ~1300 lines of detailed specification
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)** - Official TypeScript documentation
- **[Module Augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)** - TypeScript docs

### Related Files

- [src/types/index.d.ts](../types/index.d.ts) - Existing type system
- [src/lib/commonFields.tsx](../lib/commonFields.tsx) - Current field definitions
- [src/Generic.tsx](../Generic.tsx) - Base widget class

## Success Criteria

### Phase 1 (✅ Complete)

✅ All 4 core files exist in `src/newTypes/`
✅ `npm run build` compiles without TypeScript errors
✅ Type tests validate correct functionality
✅ README.md documents all new types with examples
✅ No breaking changes in existing code
✅ Module augmentation for vis-2 works correctly
✅ Package exports enable clean imports

### Phase 2 (✅ Complete)

✅ `common-fields.d.ts` with ~35 dynamic properties implemented
✅ `common-object-fields.d.ts` with 8 static + 3 dynamic properties implemented
✅ `FieldDefinitions` registry created
✅ All properties use `${number}` index signatures (stricter than `${string}`)
✅ Complete JSDoc comments for all properties
✅ Type tests for field definitions
✅ Field definitions README.md created
✅ Main README updated with Phase 2 section
✅ All exports active in index.d.ts
✅ Zero breaking changes

### Phase 3 (✅ Complete)

✅ 11 widget-specific field definition files created (~167 properties)
✅ All field definitions integrated into `FieldDefinitions` registry
✅ Complete JSDoc documentation for all widget fields
✅ Type tests for all widget-specific fields
✅ Main README updated with Phase 3 section
✅ All exports active in index.d.ts
✅ Zero breaking changes

### Phase 4 (✅ Complete)

✅ `widget-registry.d.ts` created with auto-generated widget types
✅ `context-types.d.ts` created with 11 widget context types
✅ `vis-2-extensions.d.ts` updated with Phase 4-8 migration roadmap
✅ `index.d.ts` updated with Phase 4 exports
✅ `__tests__/phase-4.test-d.ts` created with 100+ type assertions
✅ `PHASE-4-COMPLETE.md` documentation created
✅ Main README updated with Phase 4 section
✅ All 11 widgets registered in Widget Registry
✅ Zero manual widget data types required (100% automated)
✅ Full backward compatibility maintained
✅ 1,430+ lines of new code and documentation

## 📊 Implementierungsstatus

| Phase         | Status           | Dateien     | Beschreibung                                                                 |
| ------------- | ---------------- | ----------- | ---------------------------------------------------------------------------- |
| **Phase 1**   | ✅ Abgeschlossen | 4 Dateien   | Basis-Infrastruktur (widget-builder, utility-types, vis-2-extensions, index) |
| **Phase 2**   | ✅ Abgeschlossen | 2 Dateien   | Common Fields (~40 Properties)                                               |
| **Phase 3**   | ✅ Abgeschlossen | 11 Dateien  | Widget-spezifische Fields (~167 Properties)                                  |
| **Phase 4**   | ✅ Abgeschlossen | 2 Dateien   | Widget Registry & Context Types                                              |
| **Phase 5**   | ⏳ Geplant       | 3 Dateien   | Hooks-Migration (useData, useOidValue, useValueState)                        |
| **Phase 6-9** | ⏳ Geplant       | ~30 Dateien | Widget-Komponenten-Migration                                                 |
| **Phase 10**  | ⏳ Geplant       | Cleanup     | Legacy-Type-Entfernung                                                       |

### ⚠️ Bekannte Kompatibilitätsprobleme

1. **Type-Alignment erforderlich:**
    - ✅ `iconXOffset`, `iconYOffset`: `number` → `string` (CSS-Units) - **BEHOBEN**
    - ✅ `fontSize`: `number` → `string | number` (Flexibilität) - **BEHOBEN**

2. **Module Augmentation:**
    - ✅ Überlappung zwischen `types/index.d.ts` und `vis-2-extensions.d.ts` - **DOKUMENTIERT**
    - Beide erweitern `VisRxWidgetStateValues`
    - Legacy `.ack` Pattern explizit dokumentiert
    - Konsolidierung in Phase 10 geplant

3. **Export-Pfade:**
    - Legacy: `import from '../types'`
    - Neu: `import from 'vis-2-widgets-collection/newTypes'`
    - ✅ Beide parallel aktiv bis Phase 10 - **KONFIGURIERT**

4. **Kompatibilitäts-Tests:**
    - ✅ `compatibility-validation.test-d.ts` erstellt
    - Validiert Type-Kompatibilität zwischen alt und neu
    - Compile-Time-Validierung verhindert Breaking Changes

5. **Migrations-Dokumentation:**
    - ✅ `MIGRATION-GUIDE.md` erstellt
    - Klare Import-Änderungen dokumentiert
    - Type-Änderungen mit Begründungen

### Phase 5 (⏳ Planned)

## Contributing

When adding new types to this infrastructure:

1. **Follow naming conventions:** Use PascalCase for types, camelCase for functions
2. **Add comprehensive JSDoc:** Document purpose, examples, and edge cases
3. **Update this README:** Add usage examples for new types
4. **Add type tests:** Validate new types work as expected
5. **Update index.d.ts:** Export new types from central entry point

## License

Same as the parent project (ioBroker.vis-2-widgets-collection).
