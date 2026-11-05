/**
 * The chrome every Zustandseditor field renders in: the vis-2 editor theme, 80 % type.
 *
 * @module components/StateEditor/StateEditorSurface
 * @remarks
 * The attribute panel is a vis-2 surface, so the Zustandseditor follows the vis-2 HOST theme
 * (light and dark), not the Collection theme — like the contract colour fields
 * (`ContractColorField`). The 80 % type matches the native label cells (`fieldTitle`).
 */
import { Box, ThemeProvider } from '@mui/material';
import type React from 'react';

import type { RxWidgetInfoCustomComponentProperties } from '@iobroker/types-vis-2';

/** Row height of the native attribute rows and of the Zustandseditor list (`fieldRowHeight`). */
export const STATE_EDITOR_ROW_HEIGHT = 28;

/**
 * Wraps a Zustandseditor field in the vis-2 editor theme.
 *
 * @param props The surface props.
 * @param props.props The vis-2 editor context (its theme is the host theme).
 * @param props.children The field content.
 * @returns The themed field content.
 */
function StateEditorSurface({
    props,
    children,
}: {
    props: RxWidgetInfoCustomComponentProperties;
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <ThemeProvider theme={props.context.theme}>
            <Box sx={{ fontSize: '80%', width: '100%', minWidth: 0 }}>{children}</Box>
        </ThemeProvider>
    );
}

export default StateEditorSurface;
