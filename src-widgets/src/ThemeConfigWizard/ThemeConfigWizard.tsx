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
 * - Mounted in the editing editor, the widget takes up its order: its data is worked into the
 *   stored theme and it is removed from the project. The course — one order after the other,
 *   never twice at once, however often the host mounts the widget — is owned by
 *   {@link module:ThemeConfigWizard/carryOutThemeOrder}; the widget is its seat and answers
 *   from the props the host handed it last. The data is read as stored in the project: what the
 *   assistant wrote, no binding resolved.
 * - An order shows nothing — unless its course failed or is overdue: then the editor shows a
 *   hint in the order's place, and the order stays in the project.
 * - In the runtime, and while the editor previews (its „Toggle runtime“), it does nothing and
 *   shows nothing: the host renders no element for it, so it takes no cell of a grid view.
 * @see https://github.com/ioBroker/ioBroker.vis-2-widgets-material (uses the same mechanism for its Wizard)
 */

import type { JSX } from 'react';
import { Alert } from '@mui/material';

import type { RxWidgetInfo, VisRxWidgetState } from '@iobroker/types-vis-2';
import type { VisRxWidgetProps } from '@iobroker/types-vis-2/visRxWidget';
import Generic from '../Generic';
import { alwaysHidden, createAiGuideField } from '../lib/fieldFactories';
import themeOrderFields from '../lib/themeOrderFields';
import { projectWithoutWidget, takeUpThemeOrder } from './carryOutThemeOrder';
import ThemeWizardButton from './ThemeWizardButton';

/** What a placed Theme-Auftrag keeps besides the host's widget state. */
interface ThemeOrderState {
    /** The order's course failed or is overdue. */
    orderNotConfirmed?: boolean;
}

class ThemeConfigWizard extends Generic<Record<string, any>, VisRxWidgetState & ThemeOrderState> {
    /** Releases this widget's seat in the course of its order; set once the order is taken up. */
    private releaseOrder: (() => void) | null = null;

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
        this.takeUpOrder();
    }

    componentDidUpdate(prevProps: VisRxWidgetProps, prevState: typeof this.state): void {
        super.componentDidUpdate(prevProps, prevState);
        // An order mounted while the editor previews is taken up when the editor edits again.
        this.takeUpOrder();
    }

    componentWillUnmount(): void {
        this.releaseOrder?.();
        this.releaseOrder = null;
        super.componentWillUnmount();
    }

    /**
     * Outside the edit mode an order is not visible to the host, which then renders no element
     * for it (`Vis/visRxWidget.tsx` render). The host lays the cell of a grid view on that
     * element: an empty one would still take a cell of the runtime.
     */
    checkVisibility(stateId?: string | null, newState?: typeof this.newState): boolean {
        return !!this.state.editMode && super.checkVisibility(stateId, newState);
    }

    /**
     * Takes up the order once per mounted widget, and only where a person edits the project: in
     * the editor's edit mode. The runtime hands no project change, and its visitors must not
     * change the theme.
     */
    private takeUpOrder(): void {
        const { context, editMode, view, id } = this.props;
        if (this.releaseOrder || !editMode || context.runtime || typeof context.changeProject !== 'function') {
            return;
        }
        // Every answer is read from the props at the time of the call: the latest project the
        // host handed this widget.
        this.releaseOrder = takeUpThemeOrder(`${context.projectName}/${view}/${id}`, context.socket, {
            order: () => this.props.context.views[this.props.view]?.widgets[this.props.id]?.data ?? {},
            // `true`: no history entry of its own.
            leave: () =>
                this.props.context.changeProject(
                    projectWithoutWidget(this.props.context.views, this.props.view, this.props.id),
                    true,
                ),
            notConfirmed: () => this.setState({ orderNotConfirmed: true }),
        });
    }

    /**
     * Nothing — except the hint of an order that was not confirmed, and that only where the
     * project is edited: the editor's preview and the runtime show nothing.
     */
    renderWidgetBody(): JSX.Element | null {
        if (!this.state.orderNotConfirmed || !this.props.editMode || this.props.context.runtime) {
            return null;
        }
        // The pattern of the studio's own „could not save“ hint.
        return <Alert severity="error">{Generic.t('theme_config_wizard_not_confirmed')}</Alert>;
    }
}

export default ThemeConfigWizard;
