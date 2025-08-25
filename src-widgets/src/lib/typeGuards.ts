export function toStringOrNull(val: unknown): string | null {
    if (typeof val === 'string') {
        return val;
    }
    if (typeof val === 'number') {
        return val.toString();
    }
    return null;
}

export function toStringOrDefault(val: unknown, fallback: string = ''): string {
    if (typeof val === 'string') {
        return val;
    }
    if (typeof val === 'number') {
        return val.toString();
    }
    return fallback;
}

export function toNumberOrNull(val: unknown): number | null {
    if (typeof val === 'number') {
        return val;
    }
    if (typeof val === 'string' && !isNaN(Number(val))) {
        return Number(val);
    }
    return null;
}
