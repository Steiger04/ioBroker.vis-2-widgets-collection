/**
 * Renderer for the Switch Collection widget.
 *
 * @module widgets/SwitchCollection
 */

import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import React, { useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useContentBox from '../hooks/useContentBox';
import useData from '../hooks/useData';
import { sameStateValue } from '../hooks/useData/stateValueEquality';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import { buildSwitchChrome } from './chrome';
import type { SwitchChromeInput } from './chrome';
import { TRACK_SIZE_DEFAULT } from '../lib/switchFields';
import type { SwitchCollectionContextProps } from '../types';

/** The Schalter-Chrome input minus the height budget, which the switch reads itself, plus the toggle. */
type BudgetedSwitchProps = Omit<SwitchChromeInput, 'contentBoxHeight'> & {
    /** Whether the switch is on. */
    checked: boolean;
    /** Toggle handler. */
    onChange: () => void;
};

/**
 * The switch, its thumb capped by the height budget: the frame's Content-Box height
 * (ADR-0098) — a child of CollectionBase, where the box is published. Its whole
 * presentation is the Schalter-Chrome ({@link buildSwitchChrome}), passed as `sx`.
 */
function BudgetedSwitch({ checked, onChange, ...chromeInput }: BudgetedSwitchProps): React.JSX.Element {
    const { height } = useContentBox();

    return (
        <Switch
            disabled={chromeInput.locked}
            checked={checked}
            onChange={onChange}
            sx={buildSwitchChrome({ ...chromeInput, contentBoxHeight: height })}
        />
    );
}

function SwitchCollection(): React.JSX.Element {
    // The width comes from the track row itself (measured locally, its own element); the
    // height budget is the frame's Content-Box (BudgetedSwitch) — no coupling to
    // CollectionBase's internal structure (ADR-0098).
    const [trackRowRef, setTrackRowRef] = useState<HTMLDivElement | null>(null);
    const { width: rowWidth } = useElementDimensions(trackRowRef);

    const context = useContext(CollectionContext);
    if (!context) {
        throw new Error('SwitchCollection must be used within a CollectionProvider');
    }
    const { widget, theme } = context as SwitchCollectionContextProps;

    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const { value: oidValue, updateValue, locked } = useValueState('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean';

    // The `true` row is active exactly when the backend value matches `true` under the
    // state-value equality — the rule useData resolves the state's colours by (ADR-0105).
    const checked = sameStateValue(true, oidValue);

    /** Toggles the boolean state using debounced backend writes. */
    const handleSwitchChange = (): void => {
        updateValue(!checked);
    };

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <Box
                ref={setTrackRowRef}
                sx={{
                    position: 'relative',

                    width: '100%',
                    height: (widget.data.trackSize && `${widget.data.trackSize}%`) || `${TRACK_SIZE_DEFAULT}%`,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',

                        px: '8px',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {oidValue !== undefined && widget.data.thumbSize !== undefined && (
                        <BudgetedSwitch
                            data={widget.data}
                            icon={data}
                            width={rowWidth}
                            locked={locked}
                            theme={theme}
                            checked={checked}
                            onChange={handleSwitchChange}
                        />
                    )}
                </Box>
            </Box>
        </CollectionBase>
    );
}

export default SwitchCollection;
