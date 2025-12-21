export const isSmallIcon = (icon: string | null | undefined): boolean => {
    if (!icon || typeof icon !== 'string') {
        return false;
    }

    return icon.startsWith('data:image/') && icon.includes('base64');
};
