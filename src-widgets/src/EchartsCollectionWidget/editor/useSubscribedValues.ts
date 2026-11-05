/**
 * Editor entry for the live state subscription hook.
 *
 * @module EchartsCollectionWidget/editor/useSubscribedValues
 * @remarks
 * Re-export only (ADR-0103 K4): the hook lives on the runtime side so the widget body keeps the
 * ADR-0083 import direction (runtime never imports from `editor/`). The editor modules keep
 * their import path.
 */
export { useSubscribedValues, type SubscribedValues } from '../useSubscribedValues';
