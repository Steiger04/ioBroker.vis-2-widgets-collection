import { i as n, e as D, h as F, j as C } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { a as _, B as c, T as j, l as w, G as M } from "./usePopoverPositioning-DyzF99R9.js";
import { b as z, e as $, C as P, u as L, a as R, g as S, h as A, c as u, w as H } from "./useData-Dv2ttG2p.js";
import { C as N, S as U, g as E, c as X } from "./CollectionBaseImage-UY84iw95.js";
import { u as Y, d as q } from "./useValueState-Dfmq7_-2.js";
import { i as J } from "./isOidReadOnly-CpnU56qh.js";
import { T as K, a as Q } from "./ToggleButtonGroup-CoJPfDSm.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const Z = () => [{ type: "custom", component: () => n($, {}) }, { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: (o, t) => o.write === false, default: false, hidden: (o, t) => o.write === false }, { name: "onlyIcon", type: "checkbox", label: "only_icon", hidden: "data.onlyText" }, { name: "onlyText", type: "checkbox", label: "only_text", hidden: "data.onlyIcon" }, { name: "buttonGroupVariant", label: "button_group_variant", type: "select", options: [{ value: "text", label: "button_group_text" }, { value: "outlined", label: "button_group_outlined" }], default: "text" }, { name: "buttonGroupOrientation", label: "button_group_orientation", type: "select", options: [{ value: "horizontal", label: "horizontal" }, { value: "vertical", label: "vertical" }], default: "horizontal" }, z({ name: "buttonGroupColor", label: "button_group_color", fallbackFields: ["textColor"] })];
function tt(o) {
  const t = S(o), a = A(o);
  return { hasGradient: !!t, hasColor: a, hoverBackground: t ? void 0 : a && o ? w(o, 0.5) : void 0, selectedBackground: t ? void 0 : a && o ? w(o, 0.3) : void 0 };
}
function et() {
  const o = D(P), { widget: t, theme: a } = o, G = t.data.oidObject, { data: p, states: g, activeIndex: k } = L("oid"), { value: h, updateValue: m } = Y("oid"), T = t.data.buttonGroupVariant, b = t.data.buttonGroupOrientation, d = G == null ? void 0 : G.type, f = d === "boolean" || d === "number" || d === "string" || d === "mixed", i = b === "vertical", r = T === "outlined", l = t.data.buttonGroupColor ? _(t.data.buttonGroupColor, 0.6) : _(a.palette.text.primary, 0.6), I = F((s) => {
    m(s);
  }, [m]);
  return C(R, { bgActive: false, isValidType: f, data: p, oidValue: h, children: [n(N, { data: p, widget: t }), n(c, { sx: { width: "100%", height: "100%", display: "flex" }, children: n(K, { exclusive: true, value: String(h), disabled: !f || J(t.data), fullWidth: true, orientation: b, sx: { display: "flex", flexDirection: i ? "column" : "row", justifyContent: "space-between", alignItems: "center", height: i ? "100%" : "auto", maxHeight: i ? "100%" : "none", ...i && { "& .MuiToggleButton-root": { flex: "1 1 0", minHeight: 0, maxHeight: `calc(100% / ${g.length})` } }, "& .MuiToggleButtonGroup-firstButton": { ...!r && { border: "none" }, ...r && { borderColor: l }, borderRadius: t.data.basePadding ? void 0 : 0 }, "& .MuiToggleButtonGroup-middleButton": { ...!r && { border: "none", marginLeft: i ? void 0 : 0, marginTop: i ? 0 : void 0, boxShadow: i ? `inset 0 1px 0 0 ${l}` : `inset 1px 0 0 0 ${l}` }, ...r && { borderColor: l } }, "& .MuiToggleButtonGroup-lastButton": { ...!r && { border: "none", marginLeft: i ? void 0 : 0, marginTop: i ? 0 : void 0, boxShadow: i ? `inset 0 1px 0 0 ${l}` : `inset 1px 0 0 0 ${l}` }, ...r && { borderColor: l }, borderRadius: t.data.basePadding ? void 0 : 0 } }, children: g.map(({ value: s, ...e }, x) => {
    const V = k === x + 1, { hasGradient: y, hoverBackground: O, selectedBackground: W } = tt(e.background), v = S(e.textColor);
    return n(Q, { value: String(s), onClick: () => I(s), sx: { width: "100%", height: "100%", p: 0, display: "flex", justifyContent: "center", alignItems: "center", "&.MuiToggleButton-root": { filter: V && y ? "opacity(80%)" : void 0, background: e.background, "&:hover": { filter: y ? "opacity(80%)" : void 0, background: O }, "&.Mui-selected": { background: W } } }, children: C(c, { sx: { width: "100%", height: "100%", p: 0.5, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }, children: [!t.data.onlyText && e.icon && n(c, { sx: { overflow: "hidden", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: n(U, { src: e.icon, style: { position: "relative", left: e.iconXOffset, bottom: e.iconYOffset, objectFit: "contain", width: e.iconSizeOnly, height: e.iconSizeOnly, ...E(e.icon, e.iconColor, e.forceColorMask) } }) }), !t.data.onlyIcon && n(c, { sx: { width: "100%", pt: 0.5, display: "flex", justifyContent: "center", alignItems: "center" }, children: n(j, { contentEditable: "false", dangerouslySetInnerHTML: { __html: e.label }, noWrap: true, variant: "body2", sx: { textTransform: "none", fontSize: e.valueSize, background: v, WebkitBackgroundClip: "text", backgroundClip: "text", color: v ? "transparent" : e.textColor } }) })] }) }, `${String(s)}-${x}`);
  }) }) })] });
}
class B extends M {
  static getWidgetInfo() {
    return { id: "tplButtonGroupCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "ButtonGroupCollectionWidget", visWidgetLabel: "button_group_collection_widget", visOrder: 7, visAttrs: [{ name: "common", fields: [...u()] }, { name: "buttonGroup", label: "button_group", fields: [...X(["string", "number", "boolean", "mixed"]), ...q(), ...Z()] }, { name: "active", label: "group_active", fields: [...u({ groupName: "Active", allFields: false })] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...u({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-button-group.png" };
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
  onStateUpdated(t, a) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(t) {
    super.renderWidgetBody(t);
    const a = { id: t.id, refService: t.refService, style: t.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, H(this.wrapContent(n(et, {})), a);
  }
}
export {
  B as default
};
