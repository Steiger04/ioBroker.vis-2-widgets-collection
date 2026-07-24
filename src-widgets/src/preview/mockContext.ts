/**
 * Builds the full CollectionContext for a preview scene from its partial demo data.
 *
 * @module preview/mockContext
 * @remarks
 * Reuses the real {@link module:components/CollectionProvider.default}, which runs
 * {@link module:hooks/useCollectionTheme.useCollectionTheme} on the supplied host
 * theme — so the palette derivations (`withPrimaryAsText` → blue text,
 * `withDerivedSecondary`) apply exactly as in production. The only socket
 * touchpoint is that hook's mount effect; the stub below (getState → null) keeps
 * it from crashing and yields the clean host theme with no persisted user theme.
 */

import { Theme } from '@iobroker/adapter-react-v5';

import type { AllCollectionContextProps } from '../types';
import type { PreviewScene } from './types';

/**
 * Stub `LegacyConnection`: enough for useCollectionTheme's
 * getState().then().catch() / subscribeState().catch() / unsubscribeState().
 * getState resolves null → no persisted user theme → host theme used as-is.
 */
const stubSocket = {
    getState: (): Promise<null> => Promise.resolve(null),
    subscribeState: (): Promise<void> => Promise.resolve(),
    unsubscribeState: (): void => undefined,
} as unknown as AllCollectionContextProps['socket'];

const noop = (): void => undefined;

/**
 * Assembles the full CollectionContext for a scene.
 */
export function buildPreviewContext(scene: PreviewScene): AllCollectionContextProps {
    const { values, widget } = scene.context;
    const data = widget.data;
    const mode = scene.context.mode ?? 'light';

    // Mirrors Generic.getPropertyValue: values[`${data[stateName]}.val`].
    const getPropertyValue = (stateName: string): unknown => {
        const oid = data[stateName] as string | undefined;
        return oid ? values[`${oid}.val`] : undefined;
    };

    return {
        id: `preview-${scene.slug}`,
        refService: { current: null },
        style: {},
        widget: { data, style: widget.style ?? {} },
        setValue: noop,
        setState: noop,
        values,
        isSignalVisible: () => false,
        getPropertyValue,
        mode,
        socket: stubSocket,
        // Host theme: Theme('light') → palette.primary.main #3399CC. CollectionProvider
        // re-merges this through useCollectionTheme.
        theme: Theme(mode) as AllCollectionContextProps['theme'],
        wrappedContent: scene.context.wrappedContent ?? true,
    } as unknown as AllCollectionContextProps;
}
