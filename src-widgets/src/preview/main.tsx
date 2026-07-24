/**
 * Preview scene host.
 *
 * @module preview/main
 * @remarks
 * Loaded by preview.html. Two URL-driven modes:
 * - `?scene=<slug>` — render that fixture and signal `window.__previewReady` once
 *   fonts/layout settle (the Playwright driver waits on this, then screenshots #scene).
 * - `?scaffold=<WidgetClass>` — read the widget's field defaults and emit a starter
 *   fixture source via `window.__scaffoldSource` (Phase 2 `--new`).
 */

import { useEffect, useState, type JSX } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@iobroker/adapter-react-v5';

import CollectionProvider from '../components/CollectionProvider';
import { buildPreviewContext } from './mockContext';
import { scenes, sceneSlugs } from './scenes';
import { buildScaffoldSource, slugFor } from './scaffold';
import type { PreviewScene } from './types';

interface PreviewWindow extends Window {
    __scenes?: string[];
    __previewReady?: boolean;
    __scaffoldSlug?: string;
    __scaffoldSource?: string;
}

const win = window as PreviewWindow;
win.__scenes = sceneSlugs;

function SceneView({ scene, mode }: { scene: PreviewScene; mode?: 'light' | 'dark' }): JSX.Element {
    // CLI `?mode=` overrides the fixture's declared mode (default light), so one
    // scene renders in either theme without duplicating the fixture.
    const effectiveMode = mode ?? scene.context.mode ?? 'light';
    const effectiveScene = { ...scene, context: { ...scene.context, mode: effectiveMode } };
    const context = buildPreviewContext(effectiveScene);
    const Body = scene.component;
    // Canvas background follows the theme surface so dark mode renders faithfully
    // (dark canvas + dark card + visible elevation shadow), not "dark card on white".
    const canvasBg = Theme(effectiveMode).palette.background.default;
    return (
        <CollectionProvider context={context}>
            {/* #scene is the screenshot canvas. Inner padding gives the card
                margin so its elevation shadow isn't clipped at the edge —
                matching the carded sibling previews (state, gauge, …). */}
            <div
                id="scene"
                style={{ width: scene.size.width, height: scene.size.height, background: canvasBg }}
            >
                <div style={{ width: '100%', height: '100%', padding: 24, boxSizing: 'border-box' }}>
                    <Body />
                </div>
            </div>
        </CollectionProvider>
    );
}

function App(): JSX.Element {
    const params = new URLSearchParams(location.search);
    const scaffold = params.get('scaffold');
    const sceneSlug = params.get('scene');
    const modeParam = params.get('mode');
    const mode = modeParam === 'light' || modeParam === 'dark' ? modeParam : undefined;
    const [ready, setReady] = useState(false);
    const [scaffoldSource, setScaffoldSource] = useState<string | null>(null);

    // Scaffold mode: emit the generated fixture source, then fall through to
    // render the freshly scaffolded scene so the author sees it immediately.
    useEffect(() => {
        if (!scaffold) {
            return;
        }
        let active = true;
        buildScaffoldSource(scaffold)
            .then(src => {
                if (active) {
                    setScaffoldSource(src);
                }
            })
            .catch((e: unknown) => console.error(`Scaffold failed for ${scaffold}:`, e));
        return () => {
            active = false;
        };
    }, [scaffold]);

    // Wait for fonts + two frames so layout settles before signalling ready.
    useEffect(() => {
        let active = true;
        void document.fonts.ready.then(() => {
            requestAnimationFrame(() =>
                requestAnimationFrame(() => {
                    if (active) {
                        setReady(true);
                    }
                }),
            );
        });
        return () => {
            active = false;
        };
    }, []);

    win.__scaffoldSlug = scaffold ? slugFor(scaffold) : undefined;
    win.__scaffoldSource = scaffoldSource ?? undefined;

    const scene = sceneSlug ? scenes[sceneSlug] : undefined;

    win.__previewReady = ready && Boolean(scene);

    if (scaffold) {
        return (
            <div style={{ padding: 16, fontFamily: 'monospace' }}>
                {scaffoldSource ? `Scaffolded: ${slugFor(scaffold)}.tsx` : 'Scaffolding…'}
            </div>
        );
    }

    if (!scene) {
        return (
            <div style={{ padding: 16 }}>
                Unknown scene <code>{sceneSlug}</code>. Available: {sceneSlugs.join(', ')}
            </div>
        );
    }

    return (
        <SceneView
            scene={scene}
            mode={mode}
        />
    );
}

const root = document.getElementById('root');
if (root) {
    createRoot(root).render(<App />);
}
