import { j as o, __tla as __tla_0 } from "./usePopoverPositioning-CABAc1cn.js";
import { i as n, __tla as __tla_1 } from "./useData-CnVVm3xV.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  u = (s) => {
    const { onlyStates: l = true } = s || {};
    return [
      ...l ? [
        {
          type: "custom",
          component: () => o.jsx(n, {})
        },
        {
          name: "onlyStates",
          type: "checkbox",
          label: "only_states",
          default: false,
          hidden: (e, t) => {
            var _a;
            return !e.values_count && !Object.keys(((_a = e.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
          }
        },
        {
          name: "statePushButton",
          type: "checkbox",
          label: "state_push_button",
          default: false,
          hidden: (e, t) => {
            var _a;
            const a = e.values_count || Object.keys(((_a = e.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
            return !e.onlyStates || a !== 2;
          },
          tooltip: "state_push_button_tooltip"
        }
      ] : [],
      {
        type: "custom",
        component: () => o.jsx(n, {})
      },
      {
        name: "onlyDisplay",
        type: "checkbox",
        label: "only_display",
        disabled: (e, t) => !e.write,
        default: false,
        hidden: (e, t) => !e.write
      },
      {
        name: "noIcon",
        type: "checkbox",
        label: "no_icon"
      },
      {
        name: "noValue",
        type: "checkbox",
        label: "no_value"
      }
    ];
  };
});
export {
  __tla,
  u as s
};
