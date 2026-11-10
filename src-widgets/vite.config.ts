import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import commonjs from 'vite-plugin-commonjs';
import { federation } from '@module-federation/vite';
import { moduleFederationShared } from '@iobroker/types-vis-2/modulefederation.vis.config';
import { readFileSync } from 'node:fs';
import { buildExposes } from './src/widgetsRegistry';

const pack = JSON.parse(readFileSync('./package.json').toString());

const config = {
    // This project has no index.html, so without entries Vite would not
    // pre-bundle anything on startup. Deps would be discovered lazily on
    // first request, and every discovery run invalidates all dep hashes —
    // the "504 Outdated Optimize Dep" cascade that breaks the vis-2 host.
    optimizeDeps: {
        entries: ['src/**/*.{ts,tsx}', '!src/**/*.test.*'],
        include: [
            // Injected by the federation plugin's dev glue — never reached
            // by crawling the src entries above. Each one must be listed under
            // the id the dev glue imports it by, or the first request of
            // customWidgets.js discovers it again and re-runs the optimizer.
            // Under Vite 8 that id is the bare package specifier (the glue
            // writes `import … from "@module-federation/dts-plugin/…"`); a
            // file path — and above all a backslash path from require.resolve
            // on Windows — is a second, duplicate optimizer identity, which
            // crashed re-runs with "Cannot read properties of undefined
            // (reading 'fileHash')".
            '@module-federation/runtime',
            '@module-federation/runtime/helpers',
            '@module-federation/dts-plugin/dynamic-remote-type-hints-plugin',
        ],
    },
    plugins: [
        federation({
            manifest: true,
            name: 'vis2CollectionWidget',
            filename: 'customWidgets.js',
            exposes: buildExposes(),
            remotes: {},
            shared: moduleFederationShared(pack),
        }),
        react(),
        svgr({
            include: ['**/*.svg?react'], // Include SVG files for SVGR processing
        }),
        commonjs(),
    ],
    server: {
        port: 3000,
        proxy: {
            '/_socket': 'http://localhost:8082',
            '/vis.0': 'http://localhost:8082',
            '/adapter': 'http://localhost:8082',
            '/habpanel': 'http://localhost:8082',
            '/vis': 'http://localhost:8082',
            '/widgets': 'http://localhost:8082/vis',
            '/widgets.html': 'http://localhost:8082/vis',
            '/web': 'http://localhost:8082',
            '/state': 'http://localhost:8082',
        },
    },
    base: './',
    build: {
        target: 'chrome89',
        outDir: './build',
        rolldownOptions: {
            onwarn(warning: { code: string }, warn: (warning: { code: string }) => void): void {
                // Suppress "Module level directives cause errors when bundled" warnings
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return;
                }
                warn(warning);
            },
        },
    },
};

export default config;
