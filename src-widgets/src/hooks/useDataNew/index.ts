/**
 * useDataNew Hook Module - Public API
 *
 * @module hooks/useDataNew
 * @version 2.2.1
 * @since 2.2.0
 * @description
 * Improved data computation hook for collection widgets with declarative priority resolution.
 * This module provides a drop-in replacement for the legacy `useData` hook with enhanced
 * performance, maintainability, and type safety.
 *
 * **Key Features**:
 * - Declarative fallback chains using `resolvePriority()`
 * - Widget-specific resolvers (Slider, ButtonGroup, etc.)
 * - Full API compatibility with legacy `useData`
 * - Optimized dependency tracking for React memoization
 * - Comprehensive TypeScript type definitions
 *
 * **Migration from useData**:
 * Simply replace the import statement - no code changes required:
 * ```typescript
 * // OLD:
 * import useData from '../hooks/useData';
 *
 * // NEW:
 * import useData from '../hooks/useDataNew';
 * // or
 * import { useDataNew } from '../hooks/useDataNew';
 * ```
 * @example
 * Basic usage in a collection widget:
 * ```typescript
 * import { useDataNew } from '../hooks/useDataNew';
 *
 * function MyWidget() {
 *   const { states, data, activeIndex } = useDataNew('oid');
 *
 *   return (
 *     <div>
 *       <h2>{data.header}</h2>
 *       {states.map((state, index) => (
 *         <button
 *           key={index}
 *           style={{
 *             backgroundColor:
 *               activeIndex === index + 1
 *                 ? state.backgroundActive
 *                 : state.backgroundColor
 *           }}
 *         >
 *           {state.text}
 *         </button>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 * @example
 * Advanced usage with slider properties:
 * ```typescript
 * import { useDataNew } from '../hooks/useDataNew';
 *
 * function SliderWidget() {
 *   const { states, data, minValue, maxValue, step } = useDataNew('oid');
 *
 *   return (
 *     <Slider
 *       min={minValue ?? 0}
 *       max={maxValue ?? 100}
 *       step={step ?? 1}
 *       marks={states.map((s, i) => ({
 *         value: i + 1,
 *         label: s.text,
 *       }))}
 *     />
 *   );
 * }
 * ```
 * @see {@link README.md} for complete documentation
 * @see {@link ROLLOUT_PLAN.md} for deployment strategy
 */

import useDataNewImpl from './useDataNew';

// Main hook export (both default and named for flexibility)
export default useDataNewImpl;
export { useDataNewImpl as useDataNew };

// Type exports - re-exported from types module for API compatibility
export type { StateItem, StyleData, UseDataResult } from './types';

// Additional type exports for advanced usage
export type { PriorityOption, SliderProperties } from './types';

// Utility function exports (optional - for advanced customization)
export { resolvePriority } from './priorityResolver';
export { buildStateItem, createSliderResolver, createDefaultResolver } from './widgetResolvers';
