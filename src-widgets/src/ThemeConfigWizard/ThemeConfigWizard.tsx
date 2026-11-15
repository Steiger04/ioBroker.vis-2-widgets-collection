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
 *   hidden from the attribute panel ({@link module:ThemeConfigWizard/themeOrderFields}).
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
import type { ThemeOrderFieldsRxData, WidgetRegistry } from '../types';
import { projectWithoutWidget, takeUpThemeOrder, type ThemeOrderSeat } from './carryOutThemeOrder';
import themeOrderFields from './themeOrderFields';
import ThemeWizardButton from './ThemeWizardButton';

/**
 * The height of the name plate the vis-2 editor draws for every widget (its
 * `.vis-editmode-widget-name`, fixed at 14 px). For a widget within 15 px of the top of its view
 * the plate sits inside the widget instead of above it, over the widget's own content.
 */
const HOST_NAME_PLATE_PX = 14;

/**
 * The data of an order without settings: one object, so that the order's course can tell a new
 * project from the one it knows.
 */
const NO_SETTINGS: ThemeOrderFieldsRxData = Object.freeze({});

/** What a placed Theme-Auftrag keeps besides the host's widget state. */
interface ThemeOrderState {
    /** The order's course failed or is overdue. */
    orderNotConfirmed?: boolean;
}

class ThemeConfigWizard extends Generic<
    WidgetRegistry['tplCollectionThemeWizard'],
    VisRxWidgetState & ThemeOrderState
> {
    /** Releases this widget's seat in the course of its order; set once the order is taken up. */
    private releaseOrder: (() => void) | null = null;

    /**
     * This widget's seat in the course of its order. Every answer is read from the props at the
     * time of the call: the latest project the host handed this widget.
     */
    private readonly seat: ThemeOrderSeat = {
        order: () => {
            const widget = this.props.context.views[this.props.view]?.widgets[this.props.id];
            return widget ? (widget.data ?? NO_SETTINGS) : undefined;
        },
        // `true`: no history entry of its own.
        leave: () =>
            this.props.context.changeProject(
                projectWithoutWidget(this.props.context.views, this.props.view, this.props.id),
                true,
            ),
        notConfirmed: () => this.setState({ orderNotConfirmed: true }),
    };

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
        // An order mounted while the editor previews is taken up when the editor edits again; one
        // the host hands another project is asked anew whether it is the order its course knows.
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
     * Takes up the order — only where a person edits the project: in the editor's edit mode. The
     * runtime hands no project change, and its visitors must not change the theme. Called with
     * every set of props; the course keeps a widget that has its seat.
     */
    private takeUpOrder(): void {
        const { context, editMode, view, id } = this.props;
        if (!editMode || context.runtime || typeof context.changeProject !== 'function') {
            return;
        }
        this.releaseOrder = takeUpThemeOrder(`${context.projectName}/${view}/${id}`, context.socket, this.seat);
    }

    /**
     * Nothing — except the hint of an order that was not confirmed, and that only where the
     * project is edited: the editor's preview and the runtime show nothing.
     *
     * @remarks
     * Not a collection widget's body: no provider (an order has no collection context, and its
     * hint is the editor's, not themed by the theme the order changes), and not the host's own
     * `renderWidgetBody` — it would make the element a `.vis-widget`, which clips its content
     * and takes the styles of the attribute panel. Place and size are the ones the host's
     * assistant gave the element.
     */
    renderWidgetBody(): JSX.Element | null {
        if (!this.state.orderNotConfirmed || !this.props.editMode || this.props.context.runtime) {
            return null;
        }
        // The pattern of the studio's own „could not save“ hint, set tight: the host's assistant
        // gives a placed widget 200 × 120 px, and the hint has to be readable inside them. So the
        // text takes the whole width (no icon, narrow padding) in the caption size.
        // The band at the top stays free for the editor's name plates, which lie above every
        // widget: on a grid view an order has no cell and sits at the view's top left corner,
        // where the editor draws the plate inside the widget — and the plate of the first cell's
        // widget 8 px below. With the 8 px above the text itself, the text starts beneath both.
        return (
            <Alert
                severity="error"
                icon={false}
                sx={{
                    boxSizing: 'border-box',
                    width: '100%',
                    px: 1,
                    pt: `${HOST_NAME_PLATE_PX}px`,
                    pb: 0,
                    typography: 'caption',
                }}
            >
                {Generic.t('theme_config_wizard_not_confirmed')}
            </Alert>
        );
    }
}

export default ThemeConfigWizard;
