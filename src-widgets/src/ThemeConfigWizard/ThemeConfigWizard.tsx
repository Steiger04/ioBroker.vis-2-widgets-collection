/**
 * Theme configuration wizard palette entry.
 *
 * @module ThemeConfigWizard
 * @remarks
 * This is not a droppable widget. It uses vis-2's public `customPalette`
 * extension point to render a button in the widget palette (edit mode only)
 * that opens {@link module:ThemeConfigWizard/ThemeWizardDialog}. There the
 * user pastes an MUI `ThemeOptions` JSON, which is validated and stored in the
 * `vis-2-widgets-collection.0.theme` state. The {@link module:components/CollectionProvider}
 * subscribes to that state and merges it into `createTheme`, so the theme
 * applies to every widget in the collection.
 * @see https://github.com/ioBroker/ioBroker.vis-2-widgets-material (uses the same mechanism for its Wizard)
 */

import type { RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from '../Generic';
import ThemeWizardButton from './ThemeWizardButton';

class ThemeConfigWizard extends Generic<Record<string, any>> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplCollectionThemeWizard',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'ThemeConfigWizard',
            visWidgetLabel: 'theme_config_wizard',
            visOrder: 0, // end of the collection group
            visAttrs: [], // no configuration fields — not a real droppable widget
            visPrev: '', // no preview — not a droppable widget (customPalette takes over)
            // Rendered by vis-2 instead of the normal palette widget entry (edit mode only).
            customPalette: props => <ThemeWizardButton {...props} />,
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return ThemeConfigWizard.getWidgetInfo();
    }

    // Never rendered as a widget (customPalette takes over); kept as a safe no-op.
    // eslint-disable-next-line class-methods-use-this
    renderWidgetBody(): null {
        return null;
    }
}

export default ThemeConfigWizard;
