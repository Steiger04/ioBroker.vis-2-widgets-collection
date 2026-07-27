/**
 * Tabs body for the echarts configurator (the user-confirmed layout, map decision 06).
 *
 * @module EchartsCollectionWidget/editor/EchartsEditorTabs
 * @remarks
 * Template + mode pinned in a wrapping top row; `Data | Series | Advanced` as tabs. Advanced
 * being its own tab makes the escape-hatch character of the U side visible.
 */
import { useState, type FC } from 'react';
import type React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import Generic from '../../Generic';
import { AdvancedJsonEditor, DataPanel, ModeSelect, SeriesList, TemplatePicker } from './fields';
import type { EditorState, SetEditor } from './editorState';

interface EchartsEditorTabsProps {
    state: EditorState;
    set: SetEditor;
    userText: string;
    setUserText: (value: string) => void;
}

const GAP = 2;

const EchartsEditorTabs: FC<EchartsEditorTabsProps> = ({ state, set, userText, setUserText }) => {
    const [tab, setTab] = useState(0);
    return (
        <Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: GAP, alignItems: 'flex-start', mb: 1 }}>
                <TemplatePicker />
                <ModeSelect
                    state={state}
                    set={set}
                />
            </Box>
            <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
            >
                <Tab label={Generic.t('echarts_editor_data')} />
                <Tab label={Generic.t('echarts_series')} />
                <Tab label={Generic.t('echarts_editor_advanced')} />
            </Tabs>
            <Box sx={{ mt: GAP }}>
                {tab === 0 && (
                    <DataPanel
                        state={state}
                        set={set}
                    />
                )}
                {tab === 1 && (
                    <SeriesList
                        state={state}
                        set={set}
                    />
                )}
                {tab === 2 && (
                    <AdvancedJsonEditor
                        userText={userText}
                        setUserText={setUserText}
                    />
                )}
            </Box>
        </Box>
    );
};

export default EchartsEditorTabs;
