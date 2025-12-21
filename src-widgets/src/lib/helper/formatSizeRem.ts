export const formatSizeRem = (size: number | string | undefined): string | null =>
    typeof size === 'number' ? `${size / 100}rem` : null;
