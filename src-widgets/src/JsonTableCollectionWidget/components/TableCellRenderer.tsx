/**
 * Table cell renderer component for JsonTableCollection.
 *
 * @module JsonTableCollectionWidget/components/TableCellRenderer
 * @remarks
 * Renders a table cell with optional formatting and conditional styling.
 * Used for both configured columns (with ColumnConfigEntry) and auto-detected columns.
 */

import { Box, Chip, Typography } from '@mui/material';
import { useMemo } from 'react';

import type { ColumnConfigEntry } from '../types';
import {
    formatBooleanValue,
    formatDateValue,
    formatNumberValue,
    formatStringValue,
    normalizeToIsoDate,
} from '../utils/formatters';
import { evaluateLogic } from '../utils/jsonLogicEngine';
import { gradientColor } from '../../lib/helper/gradientColor';

// ── Types ───────────────────────────────────────────────────────────

/**
 * Result of buildCellContent containing display value and styles.
 */
interface CellContent {
    displayValue: string;
    textSx: Record<string, unknown>;
    bgSx: Record<string, unknown>;
    /** FIX-P3: Flag indicating if the value was truncated (e.g., object/array shortened) */
    isTruncated?: boolean;
}

/**
 * Props for TableCellRenderer component.
 */
export interface TableCellRendererProps {
    /** Raw cell value from the data source */
    value: unknown;
    /** Optional column configuration for formatting and styling */
    config?: ColumnConfigEntry;
}

// ── Helper: Build cell content with formatting and styling ───────────

/**
 * Builds display value and styles for a cell based on its configuration.
 *
 * @param rawValue - The raw cell value
 * @param cfg - Column configuration entry (optional)
 * @returns CellContent with displayValue, textSx, and bgSx
 */
export function buildCellContent(rawValue: unknown, cfg?: ColumnConfigEntry): CellContent {
    // FIX-P3: Track if value was truncated (object/array converted to string)
    let isTruncated = false;

    // Default display value conversion
    let displayValue =
        rawValue != null
            ? typeof rawValue === 'object'
                ? (() => {
                      isTruncated = true;
                      return JSON.stringify(rawValue);
                  })()
                : String(rawValue as string | number | boolean | bigint)
            : '';

    // Apply formatting if config is present
    if (cfg?.format) {
        switch (cfg.format.type) {
            case 'number':
                if (typeof rawValue === 'number' || (typeof rawValue === 'string' && !isNaN(Number(rawValue)))) {
                    displayValue = formatNumberValue(Number(rawValue), {
                        decimals: cfg.format.numberDecimals,
                        prefix: cfg.format.numberPrefix,
                        suffix: cfg.format.numberSuffix,
                        thousands: cfg.format.numberThousandsSeparator,
                    });
                }
                break;
            case 'date':
                displayValue = formatDateValue(rawValue, cfg.format.dateFormat, cfg.format.dateInputFormat);
                break;
            case 'boolean':
                displayValue = formatBooleanValue(rawValue, cfg.format.booleanTrue, cfg.format.booleanFalse);
                break;
            // FIX-P2-2: Ensure string type for formatStringValue to prevent runtime errors
            case 'string':
                displayValue = formatStringValue(String(displayValue), cfg.format);
                break;
        }
    }

    // If no config, return simple display value without styling
    if (!cfg) {
        return { displayValue, textSx: {}, bgSx: {} };
    }

    // Apply conditional styling rules
    const stopAfterFirst = !cfg.cellStyleMode || cfg.cellStyleMode === 'first-match';
    const evalValue = cfg.format?.type === 'date' ? normalizeToIsoDate(rawValue, cfg.format.dateInputFormat) : rawValue;
    const bgSx: Record<string, unknown> = {};
    const textSx: Record<string, unknown> = {};

    if (cfg.cellStyle && cfg.cellStyle.length > 0) {
        for (const rule of cfg.cellStyle) {
            if (rule.logic && evaluateLogic(rule.logic, evalValue)) {
                if (rule.backgroundColor && !('background' in bgSx) && !('backgroundColor' in bgSx)) {
                    const bgGradient = gradientColor(rule.backgroundColor);
                    if (bgGradient) {
                        bgSx.background = bgGradient;
                    } else {
                        bgSx.backgroundColor = rule.backgroundColor;
                    }
                }
                if (rule.textColor && !('color' in textSx) && !('background' in textSx)) {
                    const textGradient = gradientColor(rule.textColor);
                    if (textGradient) {
                        textSx.background = textGradient;
                        textSx.backgroundClip = 'text';
                        textSx.WebkitBackgroundClip = 'text';
                        textSx.color = 'transparent';
                    } else {
                        textSx.color = rule.textColor;
                    }
                }
                if (rule.fontWeight && !textSx.fontWeight) {
                    textSx.fontWeight = rule.fontWeight;
                }
                if (rule.fontStyle && !textSx.fontStyle) {
                    textSx.fontStyle = rule.fontStyle;
                }
                if (stopAfterFirst) {
                    break;
                }
            }
        }
    }

    // Apply static string format visual styles as fallback (conditional rules take priority)
    if (cfg.format?.type === 'string') {
        if (cfg.format.stringFontWeight === 'bold' && !textSx.fontWeight) {
            textSx.fontWeight = 'bold';
        }
        if (cfg.format.stringFontStyle === 'italic' && !textSx.fontStyle) {
            textSx.fontStyle = 'italic';
        }
        if (cfg.format.stringFontSize && !textSx.fontSize) {
            textSx.fontSize = `${cfg.format.stringFontSize}px`;
        }
        if (cfg.format.stringTextColor && !('color' in textSx) && !('background' in textSx)) {
            textSx.color = cfg.format.stringTextColor;
        }
    }

    // FIX-P3: Include isTruncated flag in return value
    return { displayValue, textSx, bgSx, isTruncated };
}

// ── Component ───────────────────────────────────────────────────────

/**
 * Renders a table cell with optional formatting and conditional styling.
 *
 * @param props - Component props
 * @param props.value - Raw cell value
 * @param props.config - Optional column configuration
 * @returns JSX element with formatted and styled cell content
 * @example
 * ```tsx
 * // With column config
 * <TableCellRenderer value={123.45} config={columnConfig} />
 *
 * // Without config (auto-detected column)
 * <TableCellRenderer value="simple text" />
 * ```
 */
export function TableCellRenderer({ value, config }: TableCellRendererProps): React.JSX.Element {
    // FIX-P3: Extract isTruncated flag from buildCellContent
    const { displayValue, textSx, bgSx, isTruncated } = useMemo(() => buildCellContent(value, config), [value, config]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                ...bgSx,
            }}
        >
            <Typography
                variant="body2"
                component="span"
                noWrap
                title={displayValue}
                sx={{ flex: 1, minWidth: 0, lineHeight: 'inherit', ...textSx }}
            >
                {displayValue}
            </Typography>
            {/* FIX-P3: Show truncated badge for object/array values */}
            {isTruncated && (
                <Chip
                    label="JSON"
                    size="small"
                    sx={{
                        height: 18,
                        fontSize: '0.65rem',
                        flexShrink: 0,
                        opacity: 0.7,
                    }}
                />
            )}
        </Box>
    );
}
