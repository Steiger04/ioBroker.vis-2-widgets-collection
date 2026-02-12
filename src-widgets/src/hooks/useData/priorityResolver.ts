/**
 * Priority-based value resolution.
 *
 * @module hooks/useData/priorityResolver
 * @since 2.2.0
 */

import type { PriorityOption } from './types';

/**
 * Resolves value based on priority list with declarative fallback chains.
 *
 * Iterates through options in order and returns the first value where:
 * - condition is true OR undefined (default: always consider)
 * - value is not undefined
 *
 * This enables clean, maintainable fallback chains replacing manual `||` operators.
 *
 * **Performance**: O(n) where n = options.length. Short-circuits on first match.
 * Typical usage has 2-5 options, making this negligible overhead.
 *
 * **Edge cases**:
 * - Empty options array: returns undefined
 * - All conditions false: returns undefined
 * - All values undefined: returns undefined
 * - Empty string as value: returns empty string (not undefined)
 * - null as value: returns null (not undefined)
 *
 * @template T - Type of the value to resolve
 * @param options - Array of PriorityOption<T> in descending priority order
 * @returns First matching value, or undefined if no match
 * @since 2.2.0
 * @see {@link PriorityOption} for option structure definition
 * @example
 * // Basic fallback chain (no conditions)
 * const iconSize = resolvePriority([
 *   { value: rxData.iconSizeActive },
 *   { value: getDynamicProperty(rxData, 'iconSize', index) },
 *   { value: rxData.iconSize },
 *   { value: 100 }, // Default fallback
 * ]);
 * @example
 * // Conditional evaluation
 * const backgroundColor = resolvePriority([
 *   { condition: isActive, value: 'blue' },
 *   { condition: isHovered, value: 'lightblue' },
 *   { value: 'white' }, // Default
 * ]);
 * @example
 * // Empty string normalization for fallback continuation
 * import { normalizeString } from './utilities';
 *
 * const header = resolvePriority([
 *   { value: normalizeString(rxData.headerActive) }, // '' -> undefined
 *   { value: normalizeString(rxData.header) },
 *   { value: oidName },
 *   { value: '' }, // Explicit empty string as final fallback
 * ]);
 * @example
 * // Replacing traditional || chains
 * // OLD: const size = rxData.sizeActive || rxData.size || defaultSize;
 * // NEW:
 * const size = resolvePriority([
 *   { value: rxData.sizeActive },
 *   { value: rxData.size },
 *   { value: defaultSize },
 * ]) ?? defaultSize;
 */
export function resolvePriority<T>(options: PriorityOption<T>[]): T | undefined {
    for (const option of options) {
        // Skip if condition is explicitly false
        if (option.condition === false) {
            continue;
        }

        // Return first defined value
        // (condition is true or undefined)
        if (
            option.value !== undefined &&
            option.value !== null &&
            !(typeof option.value === 'string' && option.value.trim() === '')
        ) {
            return option.value;
        }
    }

    // No match found
    return undefined;
}
