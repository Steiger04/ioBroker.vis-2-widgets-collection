import { o as e } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { C as t } from "./useData-fwe13Z_u.js";
var n = (n2) => {
  let { onlyStates: r = true } = n2 || {};
  return [...r ? [{ type: `custom`, component: () => e(t, {}) }, { name: `onlyStates`, type: `checkbox`, label: `only_states`, default: false, hidden: (e2, t2) => {
    var _a;
    return !e2.values_count && !Object.keys(((_a = e2.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
  } }, { name: `statePushButton`, type: `checkbox`, label: `state_push_button`, default: false, hidden: (e2, t2) => {
    var _a;
    let n3 = e2.values_count || Object.keys(((_a = e2.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
    return !e2.onlyStates || n3 !== 2;
  }, tooltip: `state_push_button_tooltip` }] : [], { type: `custom`, component: () => e(t, {}) }, { name: `onlyDisplay`, type: `checkbox`, label: `only_display`, disabled: (e2, t2) => !e2.write, default: false, hidden: (e2, t2) => !e2.write }, { name: `noIcon`, type: `checkbox`, label: `no_icon` }, { name: `noValue`, type: `checkbox`, label: `no_value` }];
};
export {
  n as t
};
