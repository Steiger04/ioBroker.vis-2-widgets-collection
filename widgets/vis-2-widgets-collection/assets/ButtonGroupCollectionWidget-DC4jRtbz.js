import { h as n, j as w, f as O, i as v } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { a as y, l as x, C as I, B as m, T as k, G as A } from "./usePopoverPositioning-C1_MhytU.js";
import { a as F, b as j, e as V, j as W, f as D, u as M, C as P, g as z, c as b } from "./useData-jkOw5Oj_.js";
import { C as R, i as L, S as E, g as H, c as $ } from "./CollectionBaseImage-Cm6oCVNa.js";
import { u as N, d as U } from "./useValueState-BB0agxu5.js";
import { i as Y, A as _ } from "./allowedOidTypes-Dpd6yL-L.js";
import { T as X, a as q } from "./ToggleButtonGroup-B3a1Bjiy.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const J = () => [{ type: "custom", component: () => n(V, {}) }, F(), { name: "onlyIcon", type: "checkbox", label: "only_icon", hidden: "data.onlyText" }, { name: "onlyText", type: "checkbox", label: "only_text", hidden: "data.onlyIcon" }, { name: "buttonGroupVariant", label: "button_group_variant", type: "select", options: [{ value: "text", label: "button_group_text" }, { value: "outlined", label: "button_group_outlined" }], default: "text" }, { name: "buttonGroupOrientation", label: "button_group_orientation", type: "select", options: [{ value: "horizontal", label: "horizontal" }, { value: "vertical", label: "vertical" }], default: "horizontal" }, j({ name: "buttonGroupColor", label: "button_group_color", fallbackFields: ["textColor"] })], C = 0.6;
function K(s) {
  const { variant: t, orientation: u, buttonGroupColor: i, basePadding: a, count: r, theme: c } = s, e = u === "vertical", l = t === "outlined", d = i ? y(i, C) : y(c.palette.text.primary, C), p = !l && { border: "none", marginLeft: e ? void 0 : 0, marginTop: e ? 0 : void 0, boxShadow: e ? `inset 0 1px 0 0 ${d}` : `inset 1px 0 0 0 ${d}` };
  return { display: "flex", flexDirection: e ? "column" : "row", justifyContent: "space-between", alignItems: "center", height: e ? "100%" : "auto", maxHeight: e ? "100%" : "none", ...e && { "& .MuiToggleButton-root": { flex: "1 1 0", minHeight: 0, maxHeight: `calc(100% / ${r})` } }, "& .MuiToggleButtonGroup-firstButton": { ...!l && { border: "none" }, ...l && { borderColor: d }, borderRadius: a ? void 0 : 0 }, "& .MuiToggleButtonGroup-middleButton": { ...p, ...l && { borderColor: d } }, "& .MuiToggleButtonGroup-lastButton": { ...p, ...l && { borderColor: d }, borderRadius: a ? void 0 : 0 } };
}
function Q(s) {
  const { background: t, isActive: u } = s, i = W(t), a = D(t), r = !!i, c = i ? void 0 : a && t ? x(t, 0.5) : void 0, e = i ? void 0 : a && t ? x(t, 0.3) : void 0;
  return { width: "100%", height: "100%", p: 0, display: "flex", justifyContent: "center", alignItems: "center", "&.MuiToggleButton-root": { filter: u && r ? "opacity(80%)" : void 0, background: t, "&:hover": { filter: r ? "opacity(80%)" : void 0, background: c }, "&.Mui-selected": { background: e } } };
}
function Z() {
  const s = w(I);
  if (!s) throw new Error("ButtonGroupCollection must be used within a CollectionProvider");
  const { widget: t, theme: u } = s, i = t.data.oidObject, { data: a, states: r, activePosition: c } = M("oid"), { value: e, updateValue: l } = N("oid"), d = t.data.buttonGroupVariant, p = t.data.buttonGroupOrientation, G = i == null ? void 0 : i.type, f = Y(_, G), S = O((g) => {
    l(g);
  }, [l]);
  return v(P, { bgActive: false, isValidType: f, data: a, oidValue: e, children: [n(R, { data: a, widget: t }), n(m, { sx: { width: "100%", height: "100%", display: "flex" }, children: n(X, { exclusive: true, value: String(e), disabled: !f || L(t.data), fullWidth: true, orientation: p, sx: K({ variant: d, orientation: p, buttonGroupColor: t.data.buttonGroupColor, basePadding: t.data.basePadding, count: r.length, theme: u }), children: r.map(({ value: g, ...o }, h) => {
    const T = c === h;
    return n(q, { value: String(g), onClick: () => S(g), sx: Q({ background: o.background, isActive: T }), children: v(m, { sx: { width: "100%", height: "100%", p: 0.5, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }, children: [!t.data.onlyText && o.icon && n(m, { sx: { overflow: "hidden", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: n(E, { src: o.icon, style: { position: "relative", left: o.iconXOffset, bottom: o.iconYOffset, objectFit: "contain", width: o.iconSizeOnly, height: o.iconSizeOnly, ...H(o.icon, o.iconColor, o.forceColorMask) } }) }), !t.data.onlyIcon && n(m, { sx: { width: "100%", pt: 0.5, display: "flex", justifyContent: "center", alignItems: "center" }, children: n(k, { contentEditable: "false", dangerouslySetInnerHTML: { __html: o.label }, noWrap: true, variant: "body2", sx: { textTransform: "none", fontSize: o.valueSize, ...z(o.textColor) } }) })] }) }, `${String(g)}-${h}`);
  }) }) })] });
}
class B extends A {
  static getWidgetInfo() {
    return { id: "tplButtonGroupCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "ButtonGroupCollectionWidget", visWidgetLabel: "button_group_collection_widget", visOrder: 7, visAttrs: [{ name: "common", fields: [...b()] }, { name: "buttonGroup", label: "button_group", fields: [...$(_), ...U(), ...J()] }, { name: "active", label: "group_active", fields: [...b({ groupName: "Active", allFields: false })] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...b({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-button-group.png" };
  }
  getWidgetInfo() {
    return B.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(t, u) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(t) {
    return super.renderWidgetBody(t), this.renderWithProvider(n(Z, {}), t);
  }
}
export {
  B as default
};
