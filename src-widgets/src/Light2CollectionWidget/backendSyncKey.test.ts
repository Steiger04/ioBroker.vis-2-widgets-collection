import { describe, expect, it } from 'vitest';

import { backendSyncKey } from './backendSyncKey';

describe('backendSyncKey', () => {
    it('is null when no channel is flagged', () => {
        expect(backendSyncKey([])).toBeNull();
        expect(backendSyncKey([{ changed: false, value: 10 }])).toBeNull();
    });

    it('changes with every foreign change while the flag stays true', () => {
        const first = backendSyncKey([{ changed: true, value: 20 }]);
        const second = backendSyncKey([{ changed: true, value: 30 }]);

        expect(first).not.toBeNull();
        expect(second).not.toBe(first);
    });

    it('ignores the value of an unflagged channel (own write mid-drag)', () => {
        const before = backendSyncKey([
            { changed: false, value: 100 },
            { changed: true, value: 50 },
        ]);
        const after = backendSyncKey([
            { changed: false, value: 120 },
            { changed: true, value: 50 },
        ]);

        expect(after).toBe(before);
    });

    it('keeps the channel identity: the same value on another channel is another key', () => {
        const hue = backendSyncKey([
            { changed: true, value: 5 },
            { changed: false, value: 5 },
        ]);
        const brightness = backendSyncKey([
            { changed: false, value: 5 },
            { changed: true, value: 5 },
        ]);

        expect(hue).not.toBe(brightness);
    });

    it('treats a missing value as null', () => {
        expect(backendSyncKey([{ changed: true, value: undefined }])).toBe(
            backendSyncKey([{ changed: true, value: null }]),
        );
    });
});
