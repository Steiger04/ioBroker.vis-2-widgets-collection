import { h as o, j as I, g as C, i as y } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { C as f, B as v, G as M } from "./usePopoverPositioning-C1_MhytU.js";
import { a as S, e as s, u as w, C as D, c as d } from "./useData-jkOw5Oj_.js";
import { g as k, C as A, i as _, S as j, c as W } from "./CollectionBaseImage-Cm6oCVNa.js";
import { u as L, d as N } from "./useValueState-BB0agxu5.js";
import { u as P, C as O } from "./useHtmlValue-Dykqjd_u.js";
import { F as T } from "./FormControlLabel-DIW0DmOa.js";
import { C as F } from "./Checkbox-CFTf-eTY.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./SwitchBase-BcaiVFpO.js";
const G = () => [{ type: "custom", component: () => o(s, { dividerText: "label" }) }, { name: "withoutLabel", label: "without_label", type: "checkbox", default: false }, { name: "checkboxLabelPlacement", label: "checkbox_label_placement", type: "select", options: [{ value: "top", label: "checkbox_top" }, { value: "bottom", label: "checkbox_bottom" }, { value: "start", label: "checkbox_start" }, { value: "end", label: "checkbox_end" }], default: "end", hidden: "data.withoutLabel" }, { type: "custom", component: () => o(s, {}) }, S()], m = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", V = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
function r(l, i, t) {
  const c = l ? m : V;
  return o(j, { alt: "", src: i.icon || c, style: t });
}
function z() {
  const l = I(f);
  if (!l) throw new Error("CheckboxCollection must be used within a CollectionProvider");
  const i = l, { widget: t, theme: c } = i, x = t.data.oidObject, { data: e } = w("oid"), { value: a, updateValue: b } = L("oid"), p = (x == null ? void 0 : x.type) === "boolean", g = P(a, t, e), h = String(g || ""), n = C(() => ({ objectFit: "contain", width: `calc(100% * (${e.iconSize} / 24px))`, height: `calc(100% * (${e.iconSize} / 24px))`, ...k(e.icon || m, e.iconColor || c.palette.primary.main, e.forceColorMask) }), [e.iconSize, e.icon, e.iconColor, e.forceColorMask, c.palette.primary.main]);
  return y(D, { isValidType: p, data: e, oidValue: a, children: [o(A, { data: e, widget: t }), o(v, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: a !== void 0 && o(T, { disableTypography: true, labelPlacement: t.data.checkboxLabelPlacement, sx: { width: "100%", height: "100%", display: "flex", m: 0 }, control: o(F, { disabled: _(t.data), disableRipple: true, checked: !!a, onChange: () => b(!a), checkedIcon: r(true, e, n), icon: r(false, e, n), sx: { left: e.iconXOffset, bottom: e.iconYOffset, objectFit: "contain", width: "100%", height: "100%", flexGrow: 1, p: 0, "& .MuiSvgIcon-root": { width: "100%", height: "100%" } } }), label: !t.data.withoutLabel && o(O, { valueSize: e.valueSize, textColor: e.textColor, contentValue: h, wrapperFullWidth: true, sx: { justifyContent: "flex-start", pr: 2 } }) }) })] });
}
class u extends M {
  static getWidgetInfo() {
    return { id: "tplCheckboxCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "CheckboxCollectionWidget", visWidgetLabel: "checkbox_collection_widget", visOrder: 2, visAttrs: [{ name: "common", fields: [...d()] }, { name: "checkbox", label: "group_checkbox", fields: [...W(["boolean"]), ...N(), ...G()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...d({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png" };
  }
  getWidgetInfo() {
    return u.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(i, t) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(i) {
    return super.renderWidgetBody(i), this.renderWithProvider(o(z, {}), i);
  }
}
export {
  u as default
};
