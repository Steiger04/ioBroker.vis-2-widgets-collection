import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Vitest uses this file in preference to vite.config.ts, so the Module Federation
// and top-level-await plugins (build-time only, they crash the node test env)
// never load. Only the plugins tests actually need are wired here.
//
// Isolation split (measured 2026-10-10, i5-2500K/4 cores): the pure .ts logic
// tests share a worker's module cache (threads + isolate:false — warm full run
// 289 s → ~170 s), while the DOM-dependent tests keep per-file isolation: they
// rely on a fresh document.body, MUI theme context and the vi.mock module
// registry per file (sharing them measurably breaks the .tsx section tests).
//
// .ts test files with real document/window/localStorage usage; keep in sync
// when a test starts touching the DOM (it fails loudly under node — then move
// it here, or give it a happy-dom docblock if it joins the dom project).
const DOM_TS_TESTS = [
    'src/components/SectionTabs.test.ts',
    'src/EchartsCollectionWidget/EChart.legendSelect.test.ts',
    'src/EchartsCollectionWidget/editor/sections/series/SeriesDataFields.test.ts',
    'src/EchartsCollectionWidget/timeFormat.test.ts',
    'src/EchartsCollectionWidget/editor/useSplitPane.test.ts',
    'src/EchartsCollectionWidget/optionBuilder.test.ts',
    'src/EchartsCollectionWidget/useChartPipeline.hook.test.ts',
    'src/EchartsCollectionWidget/useHistory.test.ts',
    'src/hooks/useFloatingPanel.test.ts',
];

export default defineConfig({
    test: {
        globals: true,
        projects: [
            {
                plugins: [react(), tsconfigPaths()],
                test: {
                    name: 'node',
                    environment: 'node',
                    globals: true,
                    include: ['src/**/*.test.ts'],
                    exclude: DOM_TS_TESTS,
                    pool: 'threads',
                    isolate: false,
                },
            },
            {
                plugins: [react(), tsconfigPaths()],
                test: {
                    name: 'dom',
                    environment: 'happy-dom',
                    globals: true,
                    include: ['src/**/*.test.tsx', ...DOM_TS_TESTS],
                    pool: 'threads',
                    isolate: true,
                },
            },
        ],
    },
});
