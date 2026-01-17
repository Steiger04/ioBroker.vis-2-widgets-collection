const fs = require('fs');
const path = require('path');

// File paths
const files = [
    {
        path: path.join(__dirname, 'src', 'StateCollectionWidget', 'StateCollection.tsx'),
        replacements: [
            {
                find: `                                bgcolor: 'transparent',
                                ...getIconColorStyles(
                                    data.iconActive || data.icon,
                                    data.iconColorActive || data.iconColor || 'primary.main',
                                ),`,
                replace: `                                bgcolor: 'transparent',
                                ...getIconColorStyles(
                                    data.iconActive || data.icon,
                                    data.iconColorActive || data.iconColor || 'primary.main',
                                    !!(data.iconActive)
                                        ? (widget.data.enableIconColorMaskActive ?? false)
                                        : (widget.data.enableIconColorMask ?? false),
                                ),`,
            },
        ],
    },
    {
        path: path.join(__dirname, 'src', 'CheckboxCollectionWidget', 'CheckboxCollection.tsx'),
        replacements: [
            {
                find: `                                            objectFit: 'contain',

                                            ...getIconColorStyles(
                                                data.iconActive || defaultIconTrue,
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main,
                                            ),`,
                replace: `                                            objectFit: 'contain',

                                            ...getIconColorStyles(
                                                data.iconActive || defaultIconTrue,
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main,
                                                widget.data.enableIconColorMaskActive ?? false,
                                            ),`,
            },
            {
                find: `                                            objectFit: 'contain',

                                            ...getIconColorStyles(
                                                data.iconActive || defaultIconFalse,
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main,
                                            ),`,
                replace: `                                            objectFit: 'contain',

                                            ...getIconColorStyles(
                                                data.iconActive || defaultIconFalse,
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main,
                                                widget.data.enableIconColorMask ?? false,
                                            ),`,
            },
        ],
    },
    {
        path: path.join(__dirname, 'src', 'DialogCollectionWidget', 'DialogCollection.tsx'),
        replacements: [
            {
                find: `                                    ...getIconColorStyles(data.icon, data.iconColor),`,
                replace: `                                    ...getIconColorStyles(
                                        data.icon,
                                        data.iconColor,
                                        widget.data.enableIconColorMask ?? false,
                                    ),`,
            },
        ],
    },
];

// Apply replacements
files.forEach(file => {
    console.log(`\nProcessing: ${file.path}`);

    if (!fs.existsSync(file.path)) {
        console.error(`  ERROR: File not found`);
        return;
    }

    let content = fs.readFileSync(file.path, 'utf8');
    let modified = false;

    file.replacements.forEach((replacement, index) => {
        if (content.includes(replacement.find)) {
            content = content.replace(replacement.find, replacement.replace);
            console.log(`  ✓ Applied replacement ${index + 1}`);
            modified = true;
        } else {
            console.log(`  ✗ Replacement ${index + 1} not found`);
        }
    });

    if (modified) {
        fs.writeFileSync(file.path, content, 'utf8');
        console.log(`  ✓ File saved`);
    } else {
        console.log(`  ⚠ No changes made`);
    }
});

console.log('\nDone!');
