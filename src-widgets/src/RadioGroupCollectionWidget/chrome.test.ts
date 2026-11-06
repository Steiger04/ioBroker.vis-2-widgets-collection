import { describe, expect, it } from 'vitest';

import type { Theme } from '@mui/material/styles';

import { buildRadioGroupChrome, buildRadioItemChrome } from './chrome';
import type { RadioItemChromeInput } from './chrome';

/** Distinct colours per palette slot, so a test sees which slot a colour came from. */
const THEME = {
    palette: {
        primary: { main: '#pri' },
        text: { primary: '#txt', secondary: '#sec' },
        action: { active: '#act', disabled: '#dis' },
        background: { paper: '#pap', default: '#bg' },
        divider: '#div',
    },
} as unknown as Theme;

const itemChrome = (
    overrides: Partial<RadioItemChromeInput> = {},
): { label: Record<string, any>; radio: Record<string, any> } =>
    buildRadioItemChrome({
        orientation: 'vertical',
        contentBoxHeight: 120,
        count: 2,
        hideLabels: false,
        labelPlacement: 'end',
        data: {},
        iconColor: '#ico',
        locked: false,
        theme: THEME,
        ...overrides,
    });

const buttonBase = (label: Record<string, any>): Record<string, any> => label['& .MuiButtonBase-root'];

describe('buildRadioGroupChrome — the stack', () => {
    it('lays the radios out in a full-width, evenly spaced row when horizontal', () => {
        expect(buildRadioGroupChrome({ orientation: 'horizontal' })).toEqual({
            direction: 'row',
            sx: { width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' },
        });
    });

    it('stacks the radios top-down, stretched, when vertical — and for any other orientation', () => {
        const vertical = {
            direction: 'column',
            sx: { width: 'auto', height: '100%', justifyContent: 'flex-start', alignItems: 'stretch' },
        };

        expect(buildRadioGroupChrome({ orientation: 'vertical' })).toEqual(vertical);
        // Frozen: only an explicit 'horizontal' lays out a row — an unset orientation stacks.
        expect(buildRadioGroupChrome({ orientation: undefined })).toEqual(vertical);
    });
});

describe('buildRadioItemChrome — stacked entries', () => {
    it('gives every entry an equal flex share and fixes its button at height / count in px', () => {
        expect(itemChrome()).toEqual({
            label: {
                m: 0,
                pr: 1,
                pl: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                flex: '1 1 0',
                minHeight: 0,
                '& .MuiButtonBase-root': {
                    width: '100%',
                    padding: 0,
                    height: '60px',
                    maxWidth: 60,
                    maxHeight: 60,
                    flexShrink: 0,
                },
                '& .MuiFormControlLabel-label': {
                    flex: '1 1 auto',
                    minWidth: 0,
                    overflow: 'hidden',
                },
            },
            radio: {
                color: '#sec',
                width: '100%',
                height: '100%',
                maxHeight: 60,
                '& .MuiTouchRipple-root': { color: '#ico' },
                '& .MuiSvgIcon-root': { width: '100%', height: '100%', maxHeight: 60 },
            },
        });
    });

    it('splits by the entry count (frozen px share, not a CSS share)', () => {
        const { label, radio } = itemChrome({ contentBoxHeight: 120, count: 3 });

        expect(buttonBase(label).height).toBe('40px');
        expect(radio.maxHeight).toBe(40);
    });

    it('leaves the button unsized and uncapped while the Content-Box is unmeasured', () => {
        for (const contentBoxHeight of [undefined, 0]) {
            const { label, radio } = itemChrome({ contentBoxHeight });

            expect(buttonBase(label)).toMatchObject({ height: 'auto', maxWidth: undefined, maxHeight: undefined });
            expect(radio.maxHeight).toBeUndefined();
            expect(radio['& .MuiSvgIcon-root'].maxHeight).toBeUndefined();
        }
    });

    it('stays unsized for an empty state list instead of dividing by zero', () => {
        expect(buttonBase(itemChrome({ count: 0 }).label).height).toBe('auto');
    });
});

describe('buildRadioItemChrome — entries side by side', () => {
    it('keeps every button square and caps it at the full Content-Box height', () => {
        const { label, radio } = itemChrome({ orientation: 'horizontal', contentBoxHeight: 120, count: 3 });

        expect(label.height).toBe('100%');
        expect(label.flex).toBeUndefined();
        expect(buttonBase(label)).toEqual({
            width: '100%',
            padding: 0,
            aspectRatio: '1',
            maxWidth: 120,
            maxHeight: 120,
            flexShrink: 0,
        });
        // The cap ignores the entry count.
        expect(radio.maxHeight).toBe(120);
        expect(radio['& .MuiSvgIcon-root'].maxHeight).toBe(120);
    });

    it('stays square but uncapped while the Content-Box is unmeasured', () => {
        const { label, radio } = itemChrome({ orientation: 'horizontal', contentBoxHeight: undefined });

        expect(buttonBase(label)).toMatchObject({ aspectRatio: '1', maxWidth: undefined, maxHeight: undefined });
        expect(buttonBase(label).height).toBeUndefined();
        expect(radio.maxHeight).toBeUndefined();
    });
});

describe('buildRadioItemChrome — label area', () => {
    it.each([
        ['end', { pr: 1, pl: 0 }],
        ['start', { pr: 0, pl: 1 }],
        // Frozen: an unset placement leaves no gap on either side (MUI still draws the label at the end).
        [undefined, { pr: 0, pl: 0 }],
    ] as const)('puts the gap on the label side for placement %s', (labelPlacement, padding) => {
        expect(itemChrome({ labelPlacement }).label).toMatchObject({ ...padding, justifyContent: 'flex-start' });
    });

    it.each(['end', 'start'] as const)(
        'drops the gap, centres the radio and hides the label when labels are hidden (%s)',
        labelPlacement => {
            const { label } = itemChrome({ labelPlacement, hideLabels: true });

            expect(label).toMatchObject({ pr: 0, pl: 0, justifyContent: 'center' });
            expect(label['& .MuiFormControlLabel-label']).toEqual({
                flex: '1 1 auto',
                minWidth: 0,
                overflow: 'hidden',
                display: 'none',
            });
        },
    );
});

describe('buildRadioItemChrome — colours', () => {
    it('draws the unchecked radio in the stored unchecked colour, raw', () => {
        expect(itemChrome({ data: { radioGroupUncheckedIconColor: 'not-a-colour' } }).radio.color).toBe('not-a-colour');
    });

    it("ripples in the state's icon colour", () => {
        expect(itemChrome({ iconColor: '#aa0000' }).radio['& .MuiTouchRipple-root']).toEqual({ color: '#aa0000' });
    });

    it("locked: the checked radio keeps the state's icon colour, the unchecked one draws action.active", () => {
        expect(buttonBase(itemChrome({ locked: true, iconColor: '#aa0000' }).label)['&.Mui-disabled']).toEqual({
            '&.Mui-checked': { color: '#aa0000' },
            color: '#act',
        });
    });

    it('locked with a stored unchecked colour: the unchecked radio keeps it', () => {
        const sx = buttonBase(itemChrome({ locked: true, data: { radioGroupUncheckedIconColor: '#b0bec5' } }).label);

        expect(sx['&.Mui-disabled'].color).toBe('#b0bec5');
    });

    it('unlocked: no lock colours (the disabled rule would match nothing)', () => {
        expect(buttonBase(itemChrome({ locked: false }).label)['&.Mui-disabled']).toBeUndefined();
    });
});
