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

## Statische vs. Dynamische Properties

### Statische Properties (ohne Index)

Verwendet in Base-Komponenten und globalen Einstellungen:

```typescript
widget.data.noHeader; // ✅ Statisch - globale Einstellung
widget.data.basePadding; // ✅ Statisch - globaler Wert
widget.data.textColor; // ✅ Statisch - globale Farbe
```

**Verwendungszweck:**

- Globale Widget-Konfiguration
- Base-Komponenten wie `CollectionBase.tsx`
- Einstellungen, die für das gesamte Widget gelten

### Dynamische Properties (mit Index)

Verwendet für mehrere Werte/States:

```typescript
widget.data.noHeader1; // ✅ Dynamisch - Header für Wert 1
widget.data.noHeader2; // ✅ Dynamisch - Header für Wert 2
widget.data.alias1; // ✅ Dynamisch - Alias für Wert 1
```

**Verwendungszweck:**

- Mehrere Werte/States pro Widget
- Individuelle Konfiguration pro Wert
- Skalierbare Eigenschaften (1...n)

### Beide Varianten unterstützt

`CommonFieldsRxData` definiert beide Varianten parallel:

```typescript
interface CommonFieldsRxData {
    // Statisch (ohne Index) - globale Einstellung
    noHeader?: boolean;
    basePadding?: number;
    textColor?: string;

    // Dynamisch (mit Index) - pro Wert
    [key: `noHeader${number}`]: boolean | undefined;
    [key: `basePadding${number}`]: number | undefined;
    [key: `textColor${number}`]: string | undefined;
}
```

**Beispiel: Gemischte Nutzung**

```typescript
const widgetData: CommonFieldsRxData = {
    // Globale Einstellungen (statisch)
    noHeader: false, // Header wird global angezeigt
    basePadding: 8, // Globaler Padding-Wert
    textColor: '#000000', // Globale Textfarbe

    // Individuelle Einstellungen (dynamisch)
    noHeader1: true, // Header für Wert 1 verstecken
    basePadding2: 16, // Größerer Padding für Wert 2
    textColor3: '#FF0000', // Rote Farbe für Wert 3
};
```

### Warum beide Varianten?

1. **Rückwärtskompatibilität:** Legacy-Code verwendet oft statische Properties (z.B. in `CollectionBase.tsx`)
2. **Flexibilität:** Widgets können globale UND individuelle Einstellungen haben
3. **TypeScript-Safety:** Beide Patterns sind typsicher und autocomplete-fähig

**Wichtig:** Die alte `lib/commonFields.tsx` verwendet `${string}`, was beide Varianten erlaubt. Die neue Definition trennt explizit zwischen statisch (ohne Index) und dynamisch (mit Index) für bessere Type-Safety.

## Phasenplan

- ✅ Phase 1-4: Infrastruktur & Types (abgeschlossen)
- 🔄 Phase 5: Hooks-Migration (nächster Schritt)
- ⏳ Phase 6-9: Widget-Migration
- ⏳ Phase 10: Cleanup & Deprecation
