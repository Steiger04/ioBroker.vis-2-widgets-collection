import { i as t, f as I, e as R, j as m } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { d as x, T as B, B as h, G as W } from "./usePopoverPositioning-DyzF99R9.js";
import { b as L, e as s, i as O, C as F, u as G, a as M, g, c as f, w as V } from "./useData-Dv2ttG2p.js";
import { C as z, S as D, g as P, c as T } from "./CollectionBaseImage-UY84iw95.js";
import { u as H, d as j } from "./useValueState-Dfmq7_-2.js";
import { i as U } from "./isOidReadOnly-CpnU56qh.js";
import { S as $ } from "./Stack-CK9F2mAQ.js";
import { F as E } from "./FormControlLabel-DdnBAI9q.js";
import { R as N } from "./Radio-CdPHa6vy.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./useThemeProps-CfkhST6j.js";
import "./SwitchBase-BRuNZwQK.js";
const A = () => [{ type: "custom", component: () => t(s, {}) }, { name: "radioOrientation", label: "radio_orientation", type: "select", options: [{ value: "horizontal", label: "horizontal" }, { value: "vertical", label: "vertical" }], default: "horizontal" }, { type: "custom", component: () => t(s, {}) }, { name: "hideLabels", label: "hide_labels", type: "checkbox", default: false }, { name: "labelPlacement", label: "label_placement", type: "select", options: [{ value: "start", label: "Start" }, { value: "end", label: "End" }], default: "end", noTranslation: true, hidden: (n) => !!n.hideLabels }, { type: "custom", component: () => t(s, {}) }, L({ name: "radioGroupUncheckedIconColor", label: "radio_group_unchecked_icon_color", fallbackFields: [], noGradient: true }), { type: "custom", component: () => t(s, {}) }, { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: (n, i) => n.write === false, default: false, hidden: (n, i) => n.write === false }], X = x(t("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" }), "RadioButtonChecked"), b = x(t("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" }), "RadioButtonUnchecked");
function Y() {
  const [n, i] = I(null), { height: l } = O(n), v = R(F), { widget: { data: { oidObject: y } }, widget: o } = v, { data: r, states: c } = G("oid"), { value: p, updateValue: w } = H("oid"), S = y == null ? void 0 : y.type, k = ["boolean", "number", "string", "mixed"].includes(S ?? ""), a = o.data.radioOrientation === "horizontal", d = l && c.length > 0 ? l / c.length : void 0, _ = (e) => {
    w(e.target.value);
  };
  return m(M, { isValidType: k, data: r, oidValue: p, children: [t(z, { data: r, widget: o }), t($, { spacing: 0, ref: i, direction: a ? "row" : "column", sx: { width: a ? "100%" : "auto", height: "100%", justifyContent: a ? "space-around" : "flex-start", alignItems: a ? "center" : "stretch" }, children: c.map((e, u) => t(E, { labelPlacement: o.data.labelPlacement, sx: { m: 0, pr: o.data.labelPlacement === "end" && !o.data.hideLabels ? 1 : 0, pl: o.data.labelPlacement === "start" && !o.data.hideLabels ? 1 : 0, display: "flex", alignItems: "center", justifyContent: o.data.hideLabels ? "center" : "flex-start", width: "100%", ...!a && { flex: "1 1 0", minHeight: 0 }, ...a && { height: "100%" }, "& .MuiButtonBase-root": { width: "100%", padding: 0, ...a && { aspectRatio: "1", maxWidth: l || void 0, maxHeight: l || void 0, flexShrink: 0 }, ...!a && { height: d ? `${d}px` : "auto", maxWidth: d || void 0, maxHeight: d || void 0, flexShrink: 0 }, "&.Mui-disabled": { "&.Mui-checked": { color: e.iconColor || "primary.main" }, color: o.data.radioGroupUncheckedIconColor || "action.active" } }, "& .MuiFormControlLabel-label": { flex: "1 1 auto", minWidth: 0, overflow: "hidden", ...o.data.hideLabels && { display: "none" } } }, control: t(N, { disabled: U(o.data), checkedIcon: e.icon ? m(h, { sx: { overflow: "hidden", position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: [t(b, { sx: { color: e.iconColor, position: "relative", width: "100%", height: "100%" } }), t(h, { sx: { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: t(D, { alt: "", src: e.icon, style: { position: "relative", left: `calc(0px + ${e.iconXOffset})`, top: `calc(0px - ${e.iconYOffset})`, width: `calc(${r.iconSizeOnly} * 0.5)`, ...P(e.icon, e.iconColor, e.forceColorMask) } }) })] }) : t(X, { sx: { color: e.iconColor, width: "100%", height: "100%" } }), icon: t(b, { sx: { width: "100%", height: "100%" } }), sx: { color: o.data.radioGroupUncheckedIconColor, width: "100%", height: "100%", maxHeight: a ? l || void 0 : d, "& .MuiTouchRipple-root": { color: o.data[`iconColor${u + 1}`] || o.data.iconColor || r.textColor }, "& .MuiSvgIcon-root": { width: "100%", height: "100%", maxHeight: a ? l || void 0 : d } }, checked: String(e.value) === String(p), onChange: _, value: e.value }), label: o.data.hideLabels ? void 0 : t(B, { component: h, variant: "body2", sx: { width: "100%", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden", textOverflow: "ellipsis", wordBreak: "break-word", fontSize: e.valueSize, textAlign: "left", background: g(e.textColor), WebkitBackgroundClip: "text", backgroundClip: "text", color: g(e.textColor) ? "transparent" : e.textColor }, contentEditable: "false", dangerouslySetInnerHTML: { __html: e.label } }) }, u)) })] });
}
class C extends W {
  static getWidgetInfo() {
    return { id: "tplRadioGroupCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "RadioGroupCollectionWidget", visWidgetLabel: "radio_group_collection_widget", visOrder: 6, visAttrs: [{ name: "common", fields: [...f({ groupName: "", allFields: true })] }, { name: "radioGroup", label: "radio_group", fields: [...T(["string", "number", "boolean", "mixed"]), ...j(), ...A()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...f({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-radio-group.png" };
  }
  getWidgetInfo() {
    return C.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(i, l) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(i) {
    super.renderWidgetBody(i);
    const l = { id: i.id, refService: i.refService, style: i.style, widget: { data: this.state.rxData, style: this.state.rxStyle || {} }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return i.widget.data.noCard || i.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, V(this.wrapContent(t(Y, {})), l);
  }
}
export {
  C as default
};
