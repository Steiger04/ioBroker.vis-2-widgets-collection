import config, { reactConfig } from '@iobroker/eslint-config';

export default [
    ...config,
    ...reactConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js', '*.mjs', '*.d.ts', 'src-widgets/src/types/index.d.ts'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        // specify files to exclude from linting here
        ignores: [
            '.agents/',
            '.claude/',
            '.dev-server/',
            '.github/',
            '.kilocode/',
            '.scratch/',
            '.vscode/',
            'demos-echarts/',
            'docs/',
            'node_modules/',
            'scripts/',
            'src-widgets/.__mf__temp/',
            'src-widgets/scripts/',
            'src-widgets/build/',
            'src-widgets/node_modules/',
            'src-widgets/public/',
            'test/',
            'tmp/',
            'widgets/',
        ],
    },
    {
        settings: {
            react: {
                version: '19', // explicit version to avoid "detect" lookup
            },
        },
    },
    {
        // disable temporary the rule 'jsdoc/require-param' and enable 'jsdoc/require-jsdoc'
        rules: {
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': 'off',
            'jsdoc/check-tag-names': ['error', { definedTags: ['remarks'] }],
            // Regel kann ab React 17 deaktiviert werden
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
        },
    },
    {
        // TanStack Table's useReactTable is on the React Compiler's list of incompatible APIs:
        // the rule only reports that the compiler would skip this component. The build runs
        // without the React Compiler, and the library has no compatible API; rules-of-hooks and
        // exhaustive-deps still check the component.
        files: ['src-widgets/src/JsonTableCollectionWidget/JsonTableCollection.tsx'],
        rules: {
            'react-hooks/incompatible-library': 'off',
        },
    },
    {
        // Special rules for types directory - allow comprehensive JSDoc comments
        files: ['src-widgets/src/types/**/*.{ts,d.ts}'],
        rules: {
            'jsdoc/check-tag-names': ['error', { typed: true, definedTags: ['remarks'] }],
            'jsdoc/tag-lines': 'off',
            '@typescript-eslint/no-import-type-side-effects': 'off',
            '@typescript-eslint/consistent-type-exports': 'off',
        },
    },
];
