/**
 * Hook that splits a CSSProperties object into groups typically consumed by MUI components.
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

import { type CSSProperties, useEffect, useMemo, useState } from 'react';

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
];

/**
 * Splits a CSSProperties map into grouped style objects.
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
    _styles: CSSProperties,
): {
    backgroundStyles: CSSProperties;
    borderStyles: CSSProperties;
    textStyles: CSSProperties;
    fontStyles: CSSProperties;
    boxStyles: CSSProperties;
} => {
    const [backgroundStyles, setBackgroundStyles] = useState({});
    const [borderStyles, setBorderStyles] = useState({});
    const [textStyles, setTextStyles] = useState({});
    const [fontStyles, setFontStyles] = useState({});
    const [boxStyles, setBoxStyles] = useState({});

    const _stylesJSON = JSON.stringify(_styles);

    const possibleMuiStyles = useMemo(() => {
        const _backgroundStyles = {} as CSSProperties;
        const _borderStyles = {} as CSSProperties;
        const _textStyles = {} as CSSProperties;
        const _fontStyles = {} as CSSProperties;
        const _boxStyles = {} as CSSProperties;

        const _styles = JSON.parse(_stylesJSON);

        POSSIBLE_MUI_STYLES.forEach(style => {
            if (_styles[style]) {
                const _camelCaseStyle = style.replace(/(-\w)/g, text => text[1].toUpperCase());

                if (style.includes('background')) {
                    _backgroundStyles[_camelCaseStyle as keyof CSSProperties] = _styles[style];
                } else if (style.includes('border')) {
                    _borderStyles[_camelCaseStyle as keyof CSSProperties] = _styles[style];
                } else if (
                    style.includes('font') ||
                    style.includes('line-height') ||
                    style.includes('letter-spacing') ||
                    style.includes('word-spacing')
                ) {
                    _fontStyles[_camelCaseStyle as keyof CSSProperties] = _styles[style];
                } else if (style.includes('text') || style.includes('color')) {
                    _textStyles[_camelCaseStyle as keyof CSSProperties] = _styles[style];
                } else {
                    _boxStyles[_camelCaseStyle as keyof CSSProperties] = _styles[style];
                }
            }
        });

        return {
            _backgroundStyles,
            _borderStyles,
            _textStyles,
            _fontStyles,
            _boxStyles,
        };
    }, [_stylesJSON]);

    useEffect(() => {
        setBackgroundStyles(possibleMuiStyles._backgroundStyles);
        setBorderStyles(possibleMuiStyles._borderStyles);
        setTextStyles(possibleMuiStyles._textStyles);
        setFontStyles(possibleMuiStyles._fontStyles);
        setBoxStyles(possibleMuiStyles._boxStyles);
    }, [possibleMuiStyles]);

    return { boxStyles, backgroundStyles, borderStyles, textStyles, fontStyles };
};

export default useStyles;
