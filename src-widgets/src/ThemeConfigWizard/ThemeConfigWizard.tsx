/**
 * Theme Studio palette entry.
 *
 * @module ThemeConfigWizard
 * @remarks
 * This is not a droppable widget. It uses vis-2's public `customPalette`
 * extension point to render a button in the widget palette (edit mode only)
 * that opens {@link module:ThemeConfigWizard/ThemeStudioPanel}, a floating
 * live-preview studio in its own React root outside the palette
 * ({@link module:ThemeConfigWizard/studioHost}). The user edits an in-memory `UserTheme` (accent-driven,
 * with presets); on save it is validated and stored in the
 * `vis-2-widgets-collection.0.theme` state. The {@link module:components/CollectionProvider}
 * subscribes to that state (and the shared draft while the studio is open) and
 * merges it into `createTheme`, so the theme applies to every widget in the
 * collection.
 * @see https://github.com/ioBroker/ioBroker.vis-2-widgets-material (uses the same mechanism for its Wizard)
 */

import type { RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from '../Generic';
import { alwaysHidden, createAiGuideField } from '../lib/fieldFactories';
import themeOrderFields from '../lib/themeOrderFields';
import ThemeWizardButton from './ThemeWizardButton';

class ThemeConfigWizard extends Generic<Record<string, any>> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplCollectionThemeWizard',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'ThemeConfigWizard',
            visWidgetLabel: 'theme_config_wizard',
            // What the vis-2 assistant reads in its set listing; the host prefixes it like the label.
            visHelp: 'theme_config_wizard_help',
            visOrder: 0, // end of the collection group
            visAttrs: [
                {
                    name: 'themeOrder',
                    // No person edits a Theme-Auftrag: the panel shows neither the group nor a field.
                    hidden: alwaysHidden,
                    // The KI-Leitfaden leads the field list the assistant reads.
                    fields: [createAiGuideField('theme_config_wizard_ai_guide'), ...themeOrderFields()],
                },
            ],
            visPrev: '', // no preview — not a droppable widget (customPalette takes over)
            // Rendered by vis-2 instead of the normal palette widget entry (edit mode only).
            customPalette: props => <ThemeWizardButton {...props} />,
        };
    }

    // Never rendered as a widget (customPalette takes over); kept as a safe no-op.
    // eslint-disable-next-line class-methods-use-this
    renderWidgetBody(): null {
        return null;
    }
}

export default ThemeConfigWizard;
