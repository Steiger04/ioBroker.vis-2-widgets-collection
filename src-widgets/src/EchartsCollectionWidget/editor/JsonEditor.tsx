/**
 * Shared JSON code editor — a controlled textarea with Prism syntax highlighting + onBlur
 * auto-format (ADR-0017). Wraps `@uiw/react-textarea-code-editor`; themed via `data-color-mode`
 * derived from the MUI palette mode so it coexists with the configurator's dark/light canvas.
 *
 * @module EchartsCollectionWidget/editor/JsonEditor
 * @remarks
 * Used by every raw-JSON edit site (per-series raw on every card + the chart-level Advanced JSON),
 * replacing the bare `TextField`. The onBlur pretty-print (`JSON.parse` → `stringify(…, null, 2)`)
 * gives the "auto-indent" affordance without a formatting library; invalid JSON is left untouched.
 */
import { type CSSProperties, type FC } from 'react';
import { useTheme } from '@mui/material';
import Editor from '@uiw/react-textarea-code-editor';
import '@uiw/react-textarea-code-editor/dist.css';

export interface JsonEditorProps {
    value: string;
    onChange: (value: string) => void;
    /** Approximate minimum height in text rows (→ minHeight px). @default 4 */
    minRows?: number;
    placeholder?: string;
    /** Disable the onBlur pretty-print (e.g. while the user is mid-typing invalid JSON). */
    disableFormat?: boolean;
}

/**
 * Pretty-print valid JSON; leave invalid text untouched. Returns `null` to signal "do not change"
 * (invalid JSON) so onBlur never clobbers a half-finished object; an empty string is returned as-is.
 */
const pretty = (text: string): string | null => {
    const trimmed = text.trim();
    if (!trimmed) {
        return text;
    }
    try {
        return JSON.stringify(JSON.parse(trimmed), null, 2);
    } catch {
        return null;
    }
};

/** Approximate monospace line height (px) for the minHeight estimate. */
const ROW_PX = 18;

const JsonEditor: FC<JsonEditorProps> = ({ value, onChange, minRows = 4, placeholder, disableFormat = false }) => {
    const theme = useTheme();
    const dark = theme.palette.mode === 'dark';
    const style: CSSProperties = {
        // jetbrains-mono is a project dependency; fall back through the standard mono stack.
        fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        fontSize: 12.5,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: dark ? '#1e1e1e' : '#ffffff',
    };
    return (
        <Editor
            value={value}
            language="json"
            placeholder={placeholder}
            data-color-mode={dark ? 'dark' : 'light'}
            padding={8}
            minHeight={minRows * ROW_PX + 16}
            style={style}
            onChange={ev => onChange(ev.target.value)}
            onBlur={
                disableFormat
                    ? undefined
                    : () => {
                          const formatted = pretty(value);
                          if (formatted !== null && formatted !== value) {
                              onChange(formatted);
                          }
                      }
            }
        />
    );
};

export default JsonEditor;
