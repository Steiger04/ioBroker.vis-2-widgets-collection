import { i as a, e as f, g as s, j as C } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { B as I, T as w, G as v } from "./usePopoverPositioning-BUV6laon.js";
import { e as d, C as S, u as k, a as M, g as D, c as r, w as A } from "./useData-Ogol4QJ_.js";
import { g as _, C as T, S as W, c as j } from "./CollectionBaseImage-B5OtYHDO.js";
import { u as L, d as N } from "./useValueState-DypOMwYO.js";
import { u as P } from "./useHtmlValue-DQb6czpG.js";
import { i as V } from "./isOidReadOnly-CpnU56qh.js";
import { F as G } from "./FormControlLabel-ClVFGdS0.js";
import { C as O } from "./Checkbox-BcRF0ZdL.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./SwitchBase-Dl5aEIsw.js";
const B = () => [{ type: "custom", component: () => a(d, { dividerText: "label" }) }, { name: "withoutLabel", label: "without_label", type: "checkbox", default: false }, { name: "checkboxLabelPlacement", label: "checkbox_label_placement", type: "select", options: [{ value: "top", label: "checkbox_top" }, { value: "bottom", label: "checkbox_bottom" }, { value: "start", label: "checkbox_start" }, { value: "end", label: "checkbox_end" }], default: "end", hidden: "data.withoutLabel" }, { type: "custom", component: () => a(d, {}) }, { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: (o) => o.write === false, default: false, hidden: (o) => o.write === false }], h = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", F = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
function z(o) {
  if (!o) return { color: void 0 };
  const t = D(o);
  return t ? { background: t, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" } : { color: o };
}
function m(o, t, i) {
  const n = o ? h : F;
  return a(W, { alt: "", src: t.icon || n, style: i });
}
function H() {
  const o = f(S);
  if (!o) throw new Error("CheckboxCollection must be used within a CollectionProvider");
  const t = o, { widget: i, theme: n } = t, g = i.data.oidObject, { data: e } = k("oid"), { value: l, updateValue: u } = L("oid"), x = (g == null ? void 0 : g.type) === "boolean", b = P(l, i, e), c = s(() => ({ objectFit: "contain", width: `calc(100% * (${e.iconSize} / 24px))`, height: `calc(100% * (${e.iconSize} / 24px))`, ..._(e.icon || h, e.iconColor || n.palette.primary.main, e.forceColorMask) }), [e.iconSize, e.icon, e.iconColor, e.forceColorMask, n.palette.primary.main]), y = s(() => z(e.textColor), [e.textColor]);
  return C(M, { isValidType: x, data: e, oidValue: l, children: [a(T, { data: e, widget: i }), a(I, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: l !== void 0 && a(G, { labelPlacement: i.data.checkboxLabelPlacement, sx: { width: "100%", height: "100%", display: "flex", m: 0 }, control: a(O, { disabled: V(i.data), disableRipple: true, checked: !!l, onChange: () => u(!l), checkedIcon: m(true, e, c), icon: m(false, e, c), sx: { left: e.iconXOffset, bottom: e.iconYOffset, objectFit: "contain", width: "100%", height: "100%", flexGrow: 1, p: 0, "& .MuiSvgIcon-root": { width: "100%", height: "100%" } } }), label: !i.data.withoutLabel && a(w, { component: "div", variant: "body2", sx: { fontSize: e.valueSize, textAlign: "center", bgcolor: "transparent", ...y, textTransform: "none", px: 1, pl: 0, pr: 2, width: "100%", height: "100%", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", overflowWrap: "break-word", wordBreak: "break-word", whiteSpace: "normal", hyphens: "auto", "& > div": { textAlign: "left", display: "inline-block" } }, dangerouslySetInnerHTML: { __html: `<div style="text-align: left; display: inline-block; width: 100%;">${b || ""}</div>` } }) }) })] });
}
class p extends v {
  static getWidgetInfo() {
    return { id: "tplCheckboxCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "CheckboxCollectionWidget", visWidgetLabel: "checkbox_collection_widget", visOrder: 2, visAttrs: [{ name: "common", fields: [...r()] }, { name: "checkbox", label: "group_checkbox", fields: [...j(["boolean"]), ...N(), ...B()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...r({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png" };
  }
  getWidgetInfo() {
    return p.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(t, i) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(t) {
    super.renderWidgetBody(t);
    const i = { id: t.id, refService: t.refService, style: t.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, A(this.wrapContent(a(H, {})), i);
  }
}
export {
  p as default
};
