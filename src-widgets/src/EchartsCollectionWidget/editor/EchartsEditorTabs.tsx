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
import type { OidPickerCtx } from './OidPicker';
import type { EditorState, SetEditor } from './editorState';

interface EchartsEditorTabsProps {
    state: EditorState;
    set: SetEditor;
    userText: string;
    setUserText: (value: string) => void;
    pickerCtx: OidPickerCtx;
}

const GAP = 2;

type TabKey = 'data' | 'series' | 'advanced';

const EchartsEditorTabs: FC<EchartsEditorTabsProps> = ({ state, set, userText, setUserText, pickerCtx }) => {
    const [tab, setTab] = useState<TabKey>('data');
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
                onChange={(_, v: TabKey) => setTab(v)}
            >
                <Tab
                    label={Generic.t('echarts_editor_data')}
                    value="data"
                />
                <Tab
                    label={Generic.t('echarts_series')}
                    value="series"
                />
                <Tab
                    label={Generic.t('echarts_editor_advanced')}
                    value="advanced"
                />
            </Tabs>
            <Box sx={{ mt: GAP }}>
                {tab === 'data' && (
                    <DataPanel
                        state={state}
                        set={set}
                    />
                )}
                {tab === 'series' && (
                    <SeriesList
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                )}
                {tab === 'advanced' && (
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
