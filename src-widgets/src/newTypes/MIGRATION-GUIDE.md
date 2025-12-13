# Migration Guide: Legacy Types → newTypes

## Übersicht

Dieses Dokument beschreibt die Migration von `src/types/` zu `src/newTypes/`.

## Import-Änderungen

### Vorher (Legacy)

```typescript
import type { StateCollectionContextProps } from '../types';
import type { CommonFieldsRxData } from '../lib/commonFields';
```

### Nachher (newTypes)

```typescript
import type { StateCollectionContextProps } from 'vis-2-widgets-collection/newTypes';
import type { CommonFieldsRxData } from 'vis-2-widgets-collection/newTypes';
```

## Type-Änderungen

### 1. Template Literal Types

**Vorher:** `${string}` (erlaubt beliebige Strings)

```typescript
[key: `alias${string}`]: string;  // aliasABC ist gültig ❌
```

**Nachher:** `${number}` (nur Zahlen)

```typescript
[key: `alias${number}`]: string | undefined;  // nur alias1, alias2, ... ✅
```

### 2. Optional Properties

**Vorher:** Required Properties

```typescript
interface DialogFieldsRxData {
    view: string; // Required ❌
}
```

**Nachher:** Optional Properties

```typescript
interface DialogFieldsRxData {
    view?: string; // Optional ✅
}
```

### 3. Type-Korrekturen

| Property               | Legacy Type | New Type                        | Grund             |
| ---------------------- | ----------- | ------------------------------- | ----------------- |
| `iconXOffset${number}` | `string`    | `string \| undefined`           | CSS-Units Support |
| `iconYOffset${number}` | `string`    | `string \| undefined`           | CSS-Units Support |
| `fontSize${number}`    | `string`    | `string \| number \| undefined` | Flexibilität      |

## Kompatibilität

Die neuen Types sind **rückwärtskompatibel** mit Legacy-Code:

- Alle neuen Properties sind optional
- Type-Erweiterungen (nicht Einschränkungen)
- Module Augmentation bleibt erhalten

## Phasenplan

- ✅ Phase 1-4: Infrastruktur & Types (abgeschlossen)
- 🔄 Phase 5: Hooks-Migration (nächster Schritt)
- ⏳ Phase 6-9: Widget-Migration
- ⏳ Phase 10: Cleanup & Deprecation
