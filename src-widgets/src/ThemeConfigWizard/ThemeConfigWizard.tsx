/**
 * The type of the Theme Studio: its palette entry, and a Theme-Auftrag when it is placed.
 *
 * @module ThemeConfigWizard
 * @remarks
 * In the palette this is not a droppable widget. It uses vis-2's public `customPalette`
 * extension point to render a button in the widget palette (edit mode only)
 * that opens {@link module:ThemeConfigWizard/ThemeStudioPanel}, a floating
 * live-preview studio in its own React root outside the palette
 * ({@link module:ThemeConfigWizard/studioHost}). The user edits an in-memory `UserTheme` (accent-driven,
 * with presets); on save it is validated and stored in the
 * `vis-2-widgets-collection.0.theme` state. The {@link module:components/CollectionProvider}
 * subscribes to that state (and the shared draft while the studio is open) and
 * merges it into `createTheme`, so the theme applies to every widget in the
 * collection.
 *
 * Placed on a view — only the vis-2 assistant can do that, the palette offers no entry to drag —
 * the type is a Theme-Auftrag (ADR-0115): a one-time order to change that same stored theme.
 * - The assistant reads the type's short description, its KI-Leitfaden and its fields, all
 *   hidden from the attribute panel ({@link module:lib/themeOrderFields}).
 * - Mounted in the editing editor, the widget works its data into the stored theme and removes
 *   itself from the project ({@link module:ThemeConfigWizard/carryOutThemeOrder}). The data is
 *   read as stored in the project: what the assistant wrote, no binding resolved.
 * - In the runtime, and while the editor previews (its „Toggle runtime“), it does nothing; it
 *   never shows anything.
 * @see https://github.com/ioBroker/ioBroker.vis-2-widgets-material (uses the same mechanism for its Wizard)
 */

import type { RxWidgetInfo } from '@iobroker/types-vis-2';
import type { VisRxWidgetProps } from '@iobroker/types-vis-2/visRxWidget';
import Generic from '../Generic';
import { alwaysHidden, createAiGuideField } from '../lib/fieldFactories';
import themeOrderFields from '../lib/themeOrderFields';
import { carryOutThemeOrder, projectWithoutWidget } from './carryOutThemeOrder';
import ThemeWizardButton from './ThemeWizardButton';

class ThemeConfigWizard extends Generic<Record<string, any>> {
    /** Whether this widget has started its order: an order starts once per mounted widget. */
    private orderStarted = false;

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

    componentDidMount(): void {
        super.componentDidMount();
        this.startOrder();
    }

    componentDidUpdate(prevProps: VisRxWidgetProps, prevState: typeof this.state): void {
        super.componentDidUpdate(prevProps, prevState);
        // An order mounted while the editor previews starts when the editor edits again.
        this.startOrder();
    }

    /**
     * Starts the order once, and only where a person edits the project: in the editor's edit
     * mode. The runtime hands no project change, and its visitors must not change the theme.
     */
    private startOrder(): void {
        const { context, editMode, view, id } = this.props;
        if (this.orderStarted || !editMode || context.runtime || typeof context.changeProject !== 'function') {
            return;
        }
        this.orderStarted = true;

        carryOutThemeOrder({
            socket: context.socket,
            order: context.views[view]?.widgets[id]?.data ?? {},
            // The project is read when the order leaves, not when it started: the latest one the
            // host handed this widget. `true`: no history entry of its own.
            leave: () =>
                this.props.context.changeProject(
                    projectWithoutWidget(this.props.context.views, this.props.view, this.props.id),
                    true,
                ),
        }).catch((e: unknown) => console.error(`Cannot carry out the theme order ${id}: ${e}`));
    }

    // A Theme-Auftrag shows nothing, neither in the editor nor in the runtime.
    // eslint-disable-next-line class-methods-use-this
    renderWidgetBody(): null {
        return null;
    }
}

export default ThemeConfigWizard;
