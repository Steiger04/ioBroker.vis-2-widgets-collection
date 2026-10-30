import { describe, expect, it } from 'vitest';

import { MARK_LABEL_SPACE, railOffset } from './railOffset';

describe('railOffset', () => {
    it('is zero without mark labels (no reserved space)', () => {
        expect(railOffset(false, 'horizontal')).toEqual({ x: 0, y: 0 });
        expect(railOffset(false, 'vertical')).toEqual({ x: 0, y: 0 });
    });

    it('lifts the rail by half the label space below a horizontal slider', () => {
        expect(railOffset(true, 'horizontal')).toEqual({ x: 0, y: -MARK_LABEL_SPACE.horizontal / 2 });
    });

    it('shifts the rail left by half the label space right of a vertical slider', () => {
        expect(railOffset(true, 'vertical')).toEqual({ x: -MARK_LABEL_SPACE.vertical / 2, y: 0 });
    });

    it('keeps the legacy px values the icons were measured to', () => {
        expect(railOffset(true, 'horizontal').y).toBe(-10);
        expect(railOffset(true, 'vertical').x).toBe(-22);
    });
});
