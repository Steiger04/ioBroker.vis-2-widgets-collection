/**
 * useData Hook Module - Public API
 *
 * @module hooks/useData
 * @since 2.2.0
 * @description
 * Resolves a collection widget's states and style data from the CollectionContext.
 *
 * **Key Features**:
 * - Declarative fallback chains using `resolvePriority()`, in `createPropertyResolvers()`
 * - Optional caller-supplied marker layer (`useData(idName, { markerLayer })`), applied to marks only
 * @example
 * Basic usage in a collection widget:
 * ```typescript
 * import { useData } from '../hooks/useData';
 *
 * function MyWidget() {
 *   const { states, data } = useData('oid');
 *
 *   return (
 *     <div>
 *       <h2>{data.header}</h2>
 *       {states.map((state, index) => (
 *         <button
 *           key={index}
 *           style={{ background: state.background }}
 *         >
 *           {state.label}
 *         </button>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 *
 * **Feldnummer vs. list position** — two numbers name a state, NOT interchangeable
 * (CONTEXT "Feldnummer", `StateStyleData.fieldNumber`): `fieldNumber` is its field
 * row, `activePosition` the active state's 0-based position in `states` — the one to
 * index the list with. It is `undefined` when no state matches the current OID value;
 * with duplicate values the first state wins. Whether a single state is active
 * (CONTEXT "Aktiver Zustand", every duplicate included) is its `active` flag — read
 * it instead of comparing values again. State equality itself goes through
 * `sameStateValue` (string-coercion contract), also exported below.
 * @example
 * The range of a numeric OID, from its numeric states:
 * ```typescript
 * import { useData } from '../hooks/useData';
 *
 * function SliderWidget() {
 *   const { states, minValue, maxValue } = useData('oid');
 *
 *   return (
 *     <Slider
 *       min={minValue ?? 0}
 *       max={maxValue ?? 100}
 *       marks={states.map(state => ({
 *         value: Number(state.value),
 *         label: state.label,
 *       }))}
 *     />
 *   );
 * }
 * ```
 */

import useDataImpl from './useData';

// Main hook export (both default and named)
export default useDataImpl;
export { useDataImpl as useData };

export type { StyleData, UseDataResult } from './types';
export type { MarkBaseStyle, MarkerLayer, PriorityOption } from './types';
export type { UseDataOptions } from './useData';

export { resolvePriority } from './priorityResolver';
export { sameStateValue } from './stateValueEquality';
