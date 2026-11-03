import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Vitest uses this file in preference to vite.config.ts, so the Module Federation
// plugin (build-time only, it crashes the node test env) never loads. Only the plugins tests actually need are wired here.
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
    'src/DialogCollectionWidget/useDialogSession.hook.test.ts',
    'src/EchartsCollectionWidget/EChart.legendSelect.test.ts',
    'src/EchartsCollectionWidget/editor/sections/series/SeriesDataFields.test.ts',
    'src/EchartsCollectionWidget/timeFormat.test.ts',
    'src/EchartsCollectionWidget/editor/useSplitPane.test.ts',
    'src/EchartsCollectionWidget/optionBuilder.test.ts',
    'src/EchartsCollectionWidget/useChartPipeline.hook.test.ts',
    'src/EchartsCollectionWidget/useHistory.test.ts',
    'src/hooks/useData/useData.hook.test.ts',
    'src/hooks/useFloatingPanel.test.ts',
    'src/hooks/useValueState.hook.test.ts',
    'src/InputCollectionWidget/useInlineEdit.hook.test.ts',
    'src/JsonTableCollectionWidget/useViewState.hook.test.ts',
    'src/lib/allowedOidTypes.parity.test.ts',
    'src/lib/useEditorHistory.hook.test.ts',
    'src/ThemeConfigWizard/useStudioSession.hook.test.ts',
    // Mocks Generic and every widget body (vi.mock / vi.doMock) to introspect getWidgetInfo():
    // it needs its own module registry, which the shared node cache (isolate: false) lacks.
    'src/lib/colorFieldTerminals.parity.test.ts',
    // Since ADR-0083 these load the editorial record (rail slots/summaries/heal read the
    // family profiles, which import the section modules) — DOM territory now. The chain
    // reaches them via editorState's heal dispatch and summaries' slot dispatch.
    'src/EchartsCollectionWidget/families/editorial.test.ts',
    'src/EchartsCollectionWidget/editor/editorState.test.ts',
    'src/EchartsCollectionWidget/editor/summaries.test.ts',
    'src/EchartsCollectionWidget/editor/lifecycleGuards.test.ts',
    'src/EchartsCollectionWidget/editor/rawLevels.test.ts',
    'src/EchartsCollectionWidget/editor/validation.test.ts',
    // The structure-event characterisation reaches validation.ts (legacy loss chips) — same chain.
    'src/EchartsCollectionWidget/editor/structureEvents.characterization.test.ts',
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
