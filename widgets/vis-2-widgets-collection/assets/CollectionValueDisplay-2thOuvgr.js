import { h as t, i as p, k as h } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { a as y, e as c, i as _ } from "./useData-uC1Kpd-M.js";
import { C as x } from "./useHtmlValue-CeUAYNwV.js";
import { g as C } from "./CollectionBaseImage-DkYiHZqN.js";
import { u as S, B as r } from "./usePopoverPositioning-C1_MhytU.js";
import { A as b } from "./Avatar-Bdh5EYvv.js";
const j = (e) => {
  const { onlyStates: s = true } = e || {}, n = (o) => {
    var _a;
    return _({ valuesCount: o.values_count, commonStatesCount: Object.keys(((_a = o.oidObject) == null ? void 0 : _a.commonStates) || {}).length, ignoreCommonStates: o.ignoreCommonStates });
  };
  return [...s ? [{ type: "custom", component: () => t(c, {}) }, { name: "onlyStates", type: "checkbox", label: "only_states", default: false, hidden: (o, l) => n(o) === 0 }, { name: "statePushButton", type: "checkbox", label: "state_push_button", default: false, hidden: (o, l) => !o.onlyStates || n(o) !== 2, tooltip: "state_push_button_tooltip" }] : [], { type: "custom", component: () => t(c, {}) }, y(), { name: "noIcon", type: "checkbox", label: "no_icon" }, { name: "noValue", type: "checkbox", label: "no_value" }];
}, B = ({ data: e, contentValue: s, noIcon: n = false, noValue: o = false }) => {
  const l = S(), a = !n && !!e.icon, i = e.icon, m = e.iconColor || l.palette.primary.main, f = C(i, m, !!e.forceColorMask), u = e.textColor;
  return p(h, { children: [a && t(r, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%", height: "100%" }, children: t(b, { variant: "square", src: i || void 0, slotProps: { img: { style: { objectFit: "contain", ...f } } }, sx: { overflow: "visible", width: e.iconSizeOnly, height: e.iconSizeOnly, left: `calc(0px + ${e.iconXOffset})`, top: `calc(0px - ${e.iconYOffset})` } }) }), !o && t(r, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%", height: "100%" }, children: t(x, { valueSize: e.valueSize, textColor: u, contentValue: s }) })] });
};
export {
  B as C,
  j as s
};
