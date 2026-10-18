import { i as o } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { e as n } from "./useData-Dv2ttG2p.js";
const u = (l) => {
  const { onlyStates: s = true } = l || {};
  return [...s ? [{ type: "custom", component: () => o(n, {}) }, { name: "onlyStates", type: "checkbox", label: "only_states", default: false, hidden: (e, t) => {
    var _a;
    return !e.values_count && !Object.keys(((_a = e.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
  } }, { name: "statePushButton", type: "checkbox", label: "state_push_button", default: false, hidden: (e, t) => {
    var _a;
    const a = e.values_count || Object.keys(((_a = e.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
    return !e.onlyStates || a !== 2;
  }, tooltip: "state_push_button_tooltip" }] : [], { type: "custom", component: () => o(n, {}) }, { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: (e, t) => e.write === false, default: false, hidden: (e, t) => e.write === false }, { name: "noIcon", type: "checkbox", label: "no_icon" }, { name: "noValue", type: "checkbox", label: "no_value" }];
};
export {
  u as s
};
