# Field Definitions (Phase 2)

## Overview

Type-safe field definitions for vis-2 Collection widgets using Template Literal Types. This directory contains TypeScript type definitions that model the runtime properties used across all Collection widgets.

## Purpose

Field definitions serve as the foundation for:

- **Type-safe widget development** - IntelliSense and compile-time checking
- **Property editor configuration** - Defines available fields in vis-2 editor
- **Runtime validation** - Ensures data integrity
- **Documentation** - Self-documenting code through JSDoc comments

## Files

| File                          | Interface                  | Properties             | Description                                                  |
| ----------------------------- | -------------------------- | ---------------------- | ------------------------------------------------------------ |
| **common-fields.d.ts**        | `CommonFieldsRxData`       | ~35 dynamic + 2 static | UI elements (icons, headers, footers, backgrounds, geometry) |
| **common-object-fields.d.ts** | `CommonObjectFieldsRxData` | 8 static + 3 dynamic   | ioBroker state handling (OID, unit, values, metadata)        |
| **index.ts**                  | `FieldDefinitions`         | Registry               | Central registry for all field types                         |

## Phase 3: Widget-Specific Fields (✅ Complete)

| File                         | Interface                 | Properties | Description                                     |
| ---------------------------- | ------------------------- | ---------- | ----------------------------------------------- |
| **state-fields.d.ts**        | `StateFieldsRxData`       | 5          | State handling, push button mode                |
| **delay-fields.d.ts**        | `DelayFieldsRxData`       | 3          | Write delays, sample intervals                  |
| **gauge-fields.d.ts**        | `GaugeFieldsRxData`       | ~80        | Linear/radial gauge configuration               |
| **slider-fields.d.ts**       | `SliderFieldsRxData`      | 23         | Slider orientation, marks, icons                |
| **switch-fields.d.ts**       | `SwitchFieldsRxData`      | 5          | Thumb/track configuration                       |
| **checkbox-fields.d.ts**     | `CheckboxFieldsRxData`    | 3          | Label placement, display mode                   |
| **dialog-fields.d.ts**       | `DialogFieldsRxData`      | 14         | View, dimensions, close buttons                 |
| **select-fields.d.ts**       | `SelectFieldsRxData`      | 2          | Arrow color, control ID                         |
| **radio-group-fields.d.ts**  | `RadioGroupFieldsRxData`  | 3          | Orientation, unchecked color                    |
| **button-group-fields.d.ts** | `ButtonGroupFieldsRxData` | 5          | Variant, orientation, color                     |
| **light2-fields.d.ts**       | `Light2FieldsRxData`      | 24         | RGB/HSV/CCT color control, picker configuration |

### ⚠️ Important: Optional vs Required Properties

**All Phase 3 field definitions declare properties as optional (`?`)** for maximum flexibility in configuration and type composition. This is intentional for the new type system.

**Legacy Runtime Interfaces:** The existing interfaces in `src/lib/*Fields.tsx` (e.g., `DialogFieldsRxData` in `dialogFields.tsx`) may have properties marked as required. These are legacy runtime definitions and will be phased out in later migration phases.

**Migration Strategy:**

- **New Widget Code:** Always import from `vis-2-widgets-collection/types`
- **Legacy Code:** Imports from `src/lib/*Fields.tsx` will continue to work during migration
- **Phase 10:** Legacy interfaces in `lib/*Fields.tsx` will be removed

**Example - DialogFieldsRxData:**

```typescript
// ✅ New Type System (recommended) - all properties optional
import type { DialogFieldsRxData } from 'vis-2-widgets-collection/types';

interface MyDialogWidget extends DialogFieldsRxData {
    // Flexible: only define what you need
    view?: string;
    dialogWidth?: number;
}

// ❌ Legacy System (deprecated) - some properties may be required
import type { DialogFieldsRxData } from '../lib/dialogFields';
// This interface may enforce required properties at runtime
```

**Why Optional?**

- Supports partial configurations (not all widgets need all fields)
- Enables gradual type adoption without breaking existing code
- Aligns with vis-2 runtime behavior (properties can be undefined)
- Facilitates widget composition via intersection types

## Key Improvements

### ✅ Stricter Template Literal Types

**Before (Phase 1):**

```typescript
[key: `alias${string}`]: string | undefined;  // ❌ Too permissive
[key: `icon${string | number}`]: string | number | undefined;  // ❌ Mixed types
```

**After (Phase 2):**

```typescript
[key: `alias${number}`]: string | undefined;  // ✅ Only numeric indices
[key: `icon${number}`]: string | number | undefined;  // ✅ Only numeric indices
```

### ✅ Unlimited Indices

Properties support any numeric index (1, 2, 3, ..., 999, ...):

```typescript
alias1: 'Living Room';
alias2: 'Bedroom';
alias99: 'Garage';
alias1234: 'Storage Room';
```

### ✅ Complete JSDoc Documentation

Every property includes:

- **Description** - What the property does
- **Type explanation** - What values are allowed
- **Examples** - Real-world usage
- **Default values** - Where applicable
- **Constraints** - Min/max values, formats

### ✅ Type-Safe Dynamic Property Access

```typescript
const data: CommonFieldsRxData = {};

// TypeScript knows these exist and their types:
const icon1: string | number | undefined = data.icon1;
const iconSize2: number | undefined = data.iconSize2;
const backgroundColor5: string | undefined = data.backgroundColor5;

// TypeScript catches errors:
const invalid = data.aliasABC; // ❌ Error: Type 'string' is not assignable
```

## Usage

### Basic Import

```typescript
import type { CommonFieldsRxData, CommonObjectFieldsRxData } from 'vis-2-widgets-collection/types';
```

### Widget Data Composition

```typescript
import type { CommonFieldsRxData, CommonObjectFieldsRxData } from 'vis-2-widgets-collection/types';

interface MyWidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData {
    // Widget-specific properties
    customSetting: string;
    enableFeatureX: boolean;
}

// Full type safety:
const widgetData: MyWidgetData = {
    // Common fields
    alias1: 'Temperature Sensor',
    icon1: 'mdi-thermometer',
    iconSize1: 32,
    iconColor1: '#FF5722',
    header1: 'Living Room',
    headerSize1: 18,
```

### Widget-Specific Field Usage (Phase 3)

```typescript
import type { GaugeFieldsRxData, SliderFieldsRxData, Light2FieldsRxData } from 'vis-2-widgets-collection/types';

// Gauge widget data
interface GaugeWidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData, GaugeFieldsRxData {
    // All gauge properties available
}

// Slider widget data
interface SliderWidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData, SliderFieldsRxData, DelayFieldsRxData {
    // Slider + delay properties
}

// Light2 widget data
interface Light2WidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData, Light2FieldsRxData {
    // Advanced color control
}
```

    value1: '22.5°C',
    backgroundColor1: '#2196F3',

    // Common object fields
    oid: 'javascript.0.temperature',
    unit: '°C',
    values_count: 1,
    write: false,

    // Custom properties
    customSetting: 'some-value',
    enableFeatureX: true,

};

````

### Registry Pattern

```typescript
import type { FieldDefinitions } from 'vis-2-widgets-collection/types';

// Access specific field types
type CommonFields = FieldDefinitions['common'];
type ObjectFields = FieldDefinitions['commonObject'];

// Use in BuildWidgetData (Phase 3)
type MyWidgetFields = ['common', 'commonObject', 'slider'];
type MyWidgetData = BuildWidgetData<MyWidgetFields, { customProp: string }>;
````

### Property Access Patterns

```typescript
// Static properties
const signalCount = data['signals-count']; // number | undefined
const signalColor = data['signals-color-1']; // string | undefined

// Dynamic properties with numeric indices
const alias1 = data.alias1; // string | undefined
const icon2 = data.icon2; // string | number | undefined
const value3 = data.value3; // string | number | boolean | undefined

// Object metadata (flexible naming)
const mainObject = data.oidObject; // ObjectMetadata | undefined
const tempObject = data.temperatureObject; // ObjectMetadata | undefined
const sensor1 = data.oid1Object; // ObjectMetadata | undefined
```

## CommonFieldsRxData Properties

### Icon Properties (8 types)

- `alias${number}` - Alias names
- `iconSmall${number}` - Small icons
- `icon${number}` - Main icons
- `iconSize${number}` - Icon sizes (px)
- `iconColor${number}` - Icon colors (CSS)
- `iconHover${number}` - Hover state icons
- `iconXOffset${number}` - Horizontal offset (px)
- `iconYOffset${number}` - Vertical offset (px)

### Header Properties (4 types)

- `noHeader${number}` - Hide header flag
- `noHeaderIcon${number}` - Hide header icon flag
- `header${number}` - Header text
- `headerSize${number}` - Header font size (px)

### Value Properties (2 types)

- `valueSize${number}` - Value font size (px)
- `value${number}` - Display values

### Footer Properties (3 types)

- `noFooter${number}` - Hide footer flag
- `footer${number}` - Footer text
- `footerSize${number}` - Footer font size (px)

### Card Properties (5 types)

- `noCard${number}` - Hide card flag
- `squaredCorner${number}` - Square corners flag
- `textColor${number}` - Text color (CSS)
- `outlined${number}` - Outlined style flag
- `outlinedFrame${number}` - Outlined frame flag

### Base Properties (2 types)

- `basePadding${number}` - Base padding (px)
- `baseElevation${number}` - Material elevation (0-24)

### Geometry Properties (3 types)

- `square${number}` - Square shape flag
- `ellipse${number}` - Ellipse shape flag
- `circle${number}` - Circle shape flag

### Background Properties (4 types)

- `background${number}` - Background image
- `backgroundColor${number}` - Background color (CSS)
- `frameBackground${number}` - Frame background image
- `frameBackgroundColor${number}` - Frame background color (CSS)

### Label Properties (2 types)

- `label${number}` - Label text
- `fontSize${number}` - Font size (px)

### Signal Properties (2 static)

- `signals-count` - Number of signals
- `signals-color-${number}` - Signal colors

**Total: 35 dynamic + 2 static = 37 properties**

## CommonObjectFieldsRxData Properties

### Static Properties (8 total)

- `oid: string` - Main object ID (required)
- `unit: string` - Unit of measurement (required)
- `values_count: number` - Number of values (required)
- `icon?: string | null` - Icon identifier
- `write?: boolean` - Write permission
- `onlyDisplay?: boolean` - Display-only mode
- `minValue?: number` - Minimum value
- `maxValue?: number` - Maximum value

### Dynamic Properties (3 types)

- `[key: \`${string}Object\`]` - Object metadata (flexible naming)
- `[key: \`alias${number}\`]` - Value aliases
- `[key: \`value${number}\`]` - State values

## Migration from Old Types

### Index Signature Changes

| Old Pattern           | New Pattern           | Why Changed                        |
| --------------------- | --------------------- | ---------------------------------- |
| `${string}`           | `${number}`           | More specific, prevents `aliasABC` |
| `${string \| number}` | `${number}`           | Consistent, single type            |
| `string \| undefined` | `string \| undefined` | No change (correct)                |

### Object Metadata Naming

```typescript
// Old: Restricted to specific names
oidObject?: ObjectMetadata;
oid1Object?: ObjectMetadata;

// New: Flexible naming with template literal
[key: `${string}Object`]: ObjectMetadata | undefined;

// Allows:
oidObject, oid1Object, temperatureObject, sensorObject, etc.
```

### Backwards Compatibility

All existing code remains compatible:

```typescript
// Old imports still work:
import type { CommonFieldsRxData } from '../lib/commonFields';

// New imports also work:
import type { CommonFieldsRxData } from 'vis-2-widgets-collection/types';

// Same interface, no breaking changes
```

## AllowedType

```typescript
export type AllowedType = 'boolean' | 'number' | 'string' | 'mixed';
```

Maps to ioBroker's `common.type` values:

- `boolean` - Switch states (true/false)
- `number` - Numeric values (temperature, humidity, etc.)
- `string` - Text values (status, names, etc.)
- `mixed` - Combination of types

## JSDoc Best Practices

All properties follow this documentation pattern:

````typescript
/**
 * Brief one-line description.
 * Extended explanation if needed.
 *
 * @remarks
 * Additional context, constraints, or behavior notes.
 *
 * @default defaultValue
 * @min minimumValue
 * @max maximumValue
 *
 * @example
 * ```typescript
 * propertyName: exampleValue
 * ```
 */
````

## Phase 3 Preview

Phase 3 will add widget-specific field definitions:

```typescript
export interface FieldDefinitions {
    common: typeof import('./common-fields');
    commonObject: typeof import('./common-object-fields');

    // Phase 3 additions:
    state: typeof import('./state-fields');
    delay: typeof import('./delay-fields');
    gauge: typeof import('./gauge-fields');
    slider: typeof import('./slider-fields');
    switch: typeof import('./switch-fields');
    // ... etc.
}
```

## References

- [Type Infrastructure Blueprint](../all-ideas-for-new-types.md) - Complete specification (~1300 lines)
- [Widget Builder](../widget-builder.d.ts) - BuildWidgetData utility (Phase 3)
- [Utility Types](../utility-types.ts) - Helper types and runtime functions
- [Main Index](../index.ts) - Package exports

## Contributing

When adding new field definitions:

1. **Create type file** in `field-definitions/`
2. **Add JSDoc comments** for all properties
3. **Export from index.d.ts** in this directory
4. **Update main index.d.ts** exports
5. **Add to FieldDefinitions** registry
6. **Write type tests** in `__tests__/`
7. **Update this README** with new fields
8. **Run type checks** before committing

## License

MIT - See [LICENSE](../../../../LICENSE)
