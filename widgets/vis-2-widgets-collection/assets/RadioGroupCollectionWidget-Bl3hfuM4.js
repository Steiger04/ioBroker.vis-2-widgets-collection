import { h as e, e as I, j as R, i as g } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { f, C as O, T as B, B as s, G as L } from "./usePopoverPositioning-C1_MhytU.js";
import { b as W, a as F, e as r, k as G, u as M, C as T, g as z, s as P, c as p } from "./useData-jkOw5Oj_.js";
import { C as D, i as H, S as U, g as j, c as V } from "./CollectionBaseImage-Cm6oCVNa.js";
import { u as A, d as E } from "./useValueState-BB0agxu5.js";
import { i as $, A as v } from "./allowedOidTypes-Dpd6yL-L.js";
import { S as N } from "./Stack-Ur4a45jz.js";
import { F as Y } from "./FormControlLabel-DIW0DmOa.js";
import { R as X } from "./Radio-rDEFsszR.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./useThemeProps-CxKYjV9n.js";
import "./SwitchBase-BcaiVFpO.js";
const q = () => [{ type: "custom", component: () => e(r, {}) }, { name: "radioOrientation", label: "radio_orientation", type: "select", options: [{ value: "horizontal", label: "horizontal" }, { value: "vertical", label: "vertical" }], default: "horizontal" }, { type: "custom", component: () => e(r, {}) }, { name: "hideLabels", label: "hide_labels", type: "checkbox", default: false }, { name: "labelPlacement", label: "label_placement", type: "select", options: [{ value: "start", label: "Start" }, { value: "end", label: "End" }], default: "end", noTranslation: true, hidden: (o) => !!o.hideLabels }, { type: "custom", component: () => e(r, {}) }, W({ name: "radioGroupUncheckedIconColor", label: "radio_group_unchecked_icon_color", fallbackFields: [], noGradient: true }), { type: "custom", component: () => e(r, {}) }, F()], J = f(e("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" }), "RadioButtonChecked"), b = f(e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" }), "RadioButtonUnchecked");
function K(o) {
  return o.icon ? g(s, { sx: { overflow: "hidden", position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: [e(b, { sx: { color: o.iconColor, position: "relative", width: "100%", height: "100%" } }), e(s, { sx: { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: e(U, { alt: "", src: o.icon, style: { position: "relative", left: `calc(0px + ${o.iconXOffset})`, top: `calc(0px - ${o.iconYOffset})`, width: `calc(${o.iconSizeOnly} * 0.5)`, ...j(o.icon, o.iconColor, o.forceColorMask) } }) })] }) : e(J, { sx: { color: o.iconColor, width: "100%", height: "100%" } });
}
function Q() {
  const [o, d] = I(null), { height: l } = G(o), h = R(O);
  if (!h) throw new Error("RadioGroupCollection must be used within a CollectionProvider");
  const { widget: { data: { oidObject: C } }, widget: t } = h, { data: u, states: c } = M("oid"), { value: m, updateValue: y } = A("oid"), w = C == null ? void 0 : C.type, _ = $(v, w), a = t.data.radioOrientation === "horizontal", n = l && c.length > 0 ? l / c.length : void 0, S = (i) => {
    y(i.target.value);
  };
  return g(T, { isValidType: _, data: u, oidValue: m, children: [e(D, { data: u, widget: t }), e(N, { spacing: 0, ref: d, direction: a ? "row" : "column", sx: { width: a ? "100%" : "auto", height: "100%", justifyContent: a ? "space-around" : "flex-start", alignItems: a ? "center" : "stretch" }, children: c.map((i, k) => e(Y, { labelPlacement: t.data.labelPlacement, sx: { m: 0, pr: t.data.labelPlacement === "end" && !t.data.hideLabels ? 1 : 0, pl: t.data.labelPlacement === "start" && !t.data.hideLabels ? 1 : 0, display: "flex", alignItems: "center", justifyContent: t.data.hideLabels ? "center" : "flex-start", width: "100%", ...!a && { flex: "1 1 0", minHeight: 0 }, ...a && { height: "100%" }, "& .MuiButtonBase-root": { width: "100%", padding: 0, ...a && { aspectRatio: "1", maxWidth: l || void 0, maxHeight: l || void 0, flexShrink: 0 }, ...!a && { height: n ? `${n}px` : "auto", maxWidth: n || void 0, maxHeight: n || void 0, flexShrink: 0 }, "&.Mui-disabled": { "&.Mui-checked": { color: i.iconColor || "primary.main" }, color: t.data.radioGroupUncheckedIconColor || "action.active" } }, "& .MuiFormControlLabel-label": { flex: "1 1 auto", minWidth: 0, overflow: "hidden", ...t.data.hideLabels && { display: "none" } } }, control: e(X, { disabled: H(t.data), checkedIcon: K(i), icon: e(b, { sx: { width: "100%", height: "100%" } }), sx: { color: t.data.radioGroupUncheckedIconColor, width: "100%", height: "100%", maxHeight: a ? l || void 0 : n, "& .MuiTouchRipple-root": { color: i.iconColor }, "& .MuiSvgIcon-root": { width: "100%", height: "100%", maxHeight: a ? l || void 0 : n } }, checked: P(i.value, m), onChange: S, value: i.value }), label: t.data.hideLabels ? void 0 : e(B, { component: s, variant: "body2", sx: { width: "100%", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden", textOverflow: "ellipsis", wordBreak: "break-word", fontSize: i.valueSize, textAlign: "left", ...z(i.textColor) }, contentEditable: "false", dangerouslySetInnerHTML: { __html: i.label } }) }, `${String(i.value)}-${k}`)) })] });
}
class x extends L {
  static getWidgetInfo() {
    return { id: "tplRadioGroupCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "RadioGroupCollectionWidget", visWidgetLabel: "radio_group_collection_widget", visOrder: 6, visAttrs: [{ name: "common", fields: [...p({ groupName: "", allFields: true })] }, { name: "radioGroup", label: "radio_group", fields: [...V(v), ...E(), ...q()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...p({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-radio-group.png" };
  }
  getWidgetInfo() {
    return x.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(d, l) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(d) {
    return super.renderWidgetBody(d), this.renderWithProvider(e(Q, {}), d);
  }
}
export {
  x as default
};
