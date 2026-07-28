/**
 * Color inputs for the echarts configurator, all routed through the project's
 * {@link CollectionGradientColorPicker} — the same picker the vis-2 attribute editors use.
 *
 * @module EchartsCollectionWidget/editor/colorFields
 * @remarks
 * `CollectionGradientColorPicker` speaks the vis-2 attribute-field contract (`field`, `data`,
 * `onDataChange`, `props`), not `value`/`onChange`. These wrappers bridge that contract to the
 * modal's working-state model: a synthetic single-field `data`/`onDataChange` pair, an optional
 * `fallback` color shown when no explicit value is set (so a series colour inherits its palette
 * slot and the swatch still resolves), and a minimal `props` carrying just the socket + theme.
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

import CollectionGradientColorPicker from '../../components/CollectionGradientColorPicker';
import Generic from '../../Generic';
import type { ExtendedField } from '../../types/field-definitions/extended-field';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import type { OidPickerCtx } from './OidPicker';

interface ColorFieldProps {
    /** Current explicit colour (`null`/`undefined` = inherit the fallback). */
    value: string | null | undefined;
    /** Called with the new explicit colour, or `null` when cleared back to inherit. */
    onChange: (value: string | null) => void;
    /** Editor context (socket + theme), drilled to the picker. */
    ctx: OidPickerCtx;
    /** Optional colour shown in the swatch when no explicit value is set. */
    fallback?: string;
    /** Allow gradients (default false = solid only, matching echarts series colours). */
    allowGradient?: boolean;
}

/**
 * Single colour input backed by `CollectionGradientColorPicker`. The swatch resolves to the
 * `fallback` when the value is empty (the "inherit" state), and clearing returns to inherit.
 */
const ColorField: FC<ColorFieldProps> = ({ value, onChange, ctx, fallback, allowGradient }) => {
    const field = {
        name: 'c',
        noGradient: allowGradient !== true,
        ...(fallback ? { fallbackFields: ['fallback'] } : {}),
    } as ExtendedField;
    const data = {
        c: value ?? null,
        ...(fallback ? { fallback } : {}),
    } as WidgetData;
    const onDataChange = (patch: WidgetData): void =>
        onChange((patch as unknown as Record<string, unknown>).c as string | null);
    const props = {
        context: { theme: ctx.theme, socket: ctx.socket },
    } as unknown as RxWidgetInfoCustomComponentProperties;

    return (
        <CollectionGradientColorPicker
            field={field}
            data={data}
            onDataChange={onDataChange}
            props={props}
        />
    );
};

interface ColorListFieldProps {
    /** `;`-separated colour list. */
    value: string;
    onChange: (value: string) => void;
    ctx: OidPickerCtx;
}

/** Multi-stop colour list (palette stops / visualMap colour stops) — one ColorField per stop. */
const ColorListField: FC<ColorListFieldProps> = ({ value, onChange, ctx }) => {
    const colors = value
        .split(';')
        .map(s => s.trim())
        .filter(Boolean);
    const set = (i: number, c: string | null): void => {
        const next = colors.slice();
        if (c === null || c === '') {
            next.splice(i, 1);
        } else {
            next[i] = c;
        }
        onChange(next.join(';'));
    };
    const add = (): void => onChange([...colors, '#000000'].join(';'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {colors.map((c, i) => (
                <Box
                    key={i}
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                    <Box sx={{ flex: 1 }}>
                        <ColorField
                            value={c}
                            onChange={v => set(i, v)}
                            ctx={ctx}
                        />
                    </Box>
                    <IconButton
                        size="small"
                        onClick={() => set(i, null)}
                        aria-label={Generic.t('echarts_color_remove')}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
            ))}
            <Button
                startIcon={<AddIcon />}
                size="small"
                onClick={add}
                sx={{ alignSelf: 'flex-start' }}
            >
                {Generic.t('echarts_color_add')}
            </Button>
        </Box>
    );
};

export default ColorField;
export { ColorListField };
