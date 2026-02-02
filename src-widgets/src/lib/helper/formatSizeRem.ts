export const formatSizeRem = (size: number | string | undefined): string | undefined =>
    typeof size === 'number' ? `calc(${size / 100}rem * 0.875)` : undefined;
