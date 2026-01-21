/**
 * Hook that splits a WidgetStyleState | undefined object into groups typically consumed by MUI components.
 *
 * @module hooks/useStyles
 * @remarks
 * The vis-2 editor provides style objects that may contain kebab-case keys.
 * This hook normalizes and groups known style keys into:
 * - background
 * - border
 * - text
 * - font
 * - box/layout
 */

import { type WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import { useMemo } from 'react';

/**
 * Style keys that are extracted and mapped to camelCase.
 *
 * @remarks
 * This list intentionally focuses on properties that frequently occur in vis-2 widget styles.
 */
const POSSIBLE_MUI_STYLES = [
    'background',
    'background-color',
    'background-image',
    'background-position',
    'background-repeat',
    'background-size',
    'background-clip',
    'background-origin',
    'border',
    'border-width',
    'border-style',
    'border-color',
    'border-radius',
    'color',
    'text-align',
    'text-shadow',
    'font-family',
    'font-size',
    'font-weight',
    'font-style',
    'font-variant',
    'line-height',
    'letter-spacing',
    'word-spacing',
    'box-sizing',
    'box-shadow',
] as const;

/**
 * Helper type for building style objects - allows flexible property assignment.
 * Cast to WidgetStyleState after population.
 */
type StyleBuilder = Record<string, string | number | boolean | string[] | null>;

/**
 * Splits a WidgetStyleState | undefined map into grouped style objects.
 *
 * @param _styles - Incoming style object from vis-2 / widget config.
 * @returns Grouped styles (background, border, text, font, box).
 * @example
 * ```tsx
 * const { backgroundStyles, textStyles } = useStyles(widget.style);
 *
 * return (
 *   <Box sx={{ ...backgroundStyles, ...textStyles }}>
 *     Content
 *   </Box>
 * );
 * ```
 * @remarks
 * The input is JSON-stringified to create a stable memo dependency.
 * This works well for plain style objects coming from the vis editor.
 */
const useStyles = (
    _styles: WidgetStyleState | undefined,
): {
    backgroundStyles: WidgetStyleState | undefined;
    borderStyles: WidgetStyleState | undefined;
    textStyles: WidgetStyleState | undefined;
    fontStyles: WidgetStyleState | undefined;
    boxStyles: WidgetStyleState | undefined;
} => {
    return useMemo(() => {
        if (!_styles) {
            return {
                backgroundStyles: undefined,
                borderStyles: undefined,
                textStyles: undefined,
                fontStyles: undefined,
                boxStyles: undefined,
            };
        }

        // Use flexible builder type to allow dynamic property assignment
        const _backgroundStyles: StyleBuilder = {};
        const _borderStyles: StyleBuilder = {};
        const _textStyles: StyleBuilder = {};
        const _fontStyles: StyleBuilder = {};
        const _boxStyles: StyleBuilder = {};

        // Categorize styles into appropriate groups
        POSSIBLE_MUI_STYLES.forEach(style => {
            const value = _styles[style as keyof WidgetStyleState];
            if (value === undefined) {
                return;
            }

            if (style.includes('background')) {
                _backgroundStyles[style] = value;
            } else if (style.includes('border')) {
                _borderStyles[style] = value;
            } else if (
                style.includes('font') ||
                style.includes('line-height') ||
                style.includes('letter-spacing') ||
                style.includes('word-spacing')
            ) {
                _fontStyles[style] = value;
            } else if (style.includes('text') || style.includes('color')) {
                _textStyles[style] = value;
            } else {
                _boxStyles[style] = value;
            }
        });

        // Cast to WidgetStyleState for return type
        // Safe because we only assign valid CSS properties with correct value types
        return {
            backgroundStyles: _backgroundStyles as WidgetStyleState,
            borderStyles: _borderStyles as WidgetStyleState,
            textStyles: _textStyles as WidgetStyleState,
            fontStyles: _fontStyles as WidgetStyleState,
            boxStyles: _boxStyles as WidgetStyleState,
        };
    }, [_styles]);
};

export default useStyles;
