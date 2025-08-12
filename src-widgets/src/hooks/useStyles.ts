import { type CSSProperties, useEffect, useMemo, useState } from 'react';

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
