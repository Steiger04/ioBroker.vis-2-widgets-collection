import config, { reactConfig } from '@iobroker/eslint-config';

export default [
    ...config,
    ...reactConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js', '*.mjs'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        // specify files to exclude from linting here
        ignores: [
            '.dev-server/',
            '.github/',
            '.vscode/',
            'node_modules/',
            'widgets/',
            'test/',
            'src-widgets/build/',
            'src-widgets/node_modules/',
            'src-widgets/.__mf__temp/',
            'src-widgets/vite.config.*',
            'src-widgets/vite-env.d.ts',
            'src-widgets/public/',
            'src-widgets/**/*.test-d.ts',
        ],
    },
    {
        // disable temporary the rule 'jsdoc/require-param' and enable 'jsdoc/require-jsdoc'
        rules: {
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': 'off',
            // Regel kann ab React 17 deaktiviert werden
            'react/react-in-jsx-scope': 'off',
        },
    },
    {
        // Special rules for newTypes directory - allow comprehensive JSDoc comments
        files: ['src-widgets/src/newTypes/**/*.{ts,d.ts}'],
        rules: {
            'jsdoc/check-tag-names': ['error', { typed: true, definedTags: ['remarks'] }],
            'jsdoc/tag-lines': 'off',
            '@typescript-eslint/no-import-type-side-effects': 'off',
            '@typescript-eslint/consistent-type-exports': 'off',
        },
    },
];
