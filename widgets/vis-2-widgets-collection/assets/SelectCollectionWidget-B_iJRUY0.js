import { i as n, m as O, e as P, g as T, h as B, j as v } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { B as x, S as D, T as F, a as b, G as j } from "./usePopoverPositioning-BUV6laon.js";
import { b as G, e as C, i as H, C as L, j as N, u as R, a as z, h as w, k as A, g as c, c as S, w as U } from "./useData-Ogol4QJ_.js";
import { o as $, C as E, S as Y, g as X, c as q } from "./CollectionBaseImage-B5OtYHDO.js";
import { u as y, d as J } from "./useValueState-DypOMwYO.js";
import { i as K } from "./isOidReadOnly-CpnU56qh.js";
import { M as Q } from "./MenuItem-DtuolClH.js";
import { S as Z } from "./Stack-Bljw1gGe.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./listItemTextClasses-BjRYSi1Q.js";
import "./useThemeProps-Cpv6Wes_.js";
const ee = () => [{ type: "custom", component: () => n(C, { dividerText: "selection" }) }, { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: (o, e) => o.write === false, default: false, hidden: (o, e) => o.write === false }, { name: "cid", type: "id", label: "cid", onChange: $(["boolean", "number", "string", "mixed"], "cid") }, { type: "custom", component: () => n(C, { dividerText: "arrow" }) }, G({ name: "arrowColor", label: "arrow_color", fallbackFields: [""], noGradient: true })];
function te(o) {
  const e = c(o), a = e ? w(o) : void 0, i = a ? b(a, 0.5) : o ? b(o, 0.5) : void 0;
  return { background: e, bgcolor: e ? "transparent" : o, "&.Mui-selected": { background: e, bgcolor: e ? void 0 : o }, "&.Mui-selected:hover": { background: e ? i : void 0, bgcolor: e ? void 0 : i }, "&:hover": { background: e ? i : void 0, bgcolor: e ? void 0 : i } };
}
function oe() {
  const o = O(null), { width: e = 300 } = H(o.current), a = P(L), { widget: i } = a, { borderStyles: k } = N(i.style), u = i.data.cidObject, I = i.data.oidObject, { data: s, states: r } = R("oid"), { value: d, updateValue: m } = y("oid"), { updateValue: p } = y("cid"), M = I == null ? void 0 : I.type, V = ["boolean", "number", "string", "mixed"].includes(M || ""), g = T(() => {
    if (d == null) return -1;
    const t = String(d);
    return r.findIndex((l) => String(l.value) === t);
  }, [r, d]), W = B((t) => {
    const l = Number(t.target.value);
    if (l < 0 || l >= r.length) return;
    const h = r[l];
    if ((h == null ? void 0 : h.value) === void 0) return;
    const { value: f } = h;
    u && p(f), m(f);
  }, [r, u, p, m]);
  return v(z, { isValidType: V, data: s, oidValue: d, children: [n(E, { data: s, widget: i }), n(x, { ref: o, sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: n(D, { variant: "standard", disableUnderline: true, value: g !== -1 ? g : "", onChange: W, disabled: K(i.data), MenuProps: { PaperProps: { sx: { overflow: "hidden", "& .MuiMenu-list": { maxHeight: "100vh", overflowY: "auto" }, ...i.data.noCard && { "--Paper-overlay": "none !important", "--Paper-shadow": "none !important", boxShadow: "none !important" }, background: s.frameBackground || (i.data.noCard ? "transparent" : void 0), ...A(k) } }, slotProps: { backdrop: { style: { backgroundColor: "transparent !important" } }, root: { sx: { maxWidth: e, mt: 0.5, "& .MuiList-root": { py: 0 } } } } }, sx: { width: "100%", height: "100%", maxWidth: `calc(${e}px - 10%)`, "& .MuiSelect-icon": { color: w(i.data.arrowColor || s.textColor || s.iconColor) } }, children: r.map((t, l) => n(Q, { value: l, sx: te(t.background), children: v(Z, { direction: "row", spacing: t.icon ? 1 : 0, sx: { alignItems: "center" }, children: [n(Y, { alt: "", src: t.icon, style: { position: "relative", top: `calc(0px - ${t.iconYOffset})`, right: `calc(0px - ${t.iconXOffset})`, height: t.iconSize, ...X(t.icon, t.iconColor, t.forceColorMask) } }), n(F, { component: x, variant: "subtitle2", sx: { whiteSpace: "pre-wrap", fontSize: t.valueSize, textAlign: "left", background: c(t.textColor), WebkitBackgroundClip: "text", backgroundClip: "text", color: c(t.textColor) ? "transparent" : t.textColor, textTransform: "none", width: "100%", height: "100%", flexGrow: 1, alignContent: "center" }, contentEditable: "false", dangerouslySetInnerHTML: { __html: t.label ?? "" } })] }) }, String(t.value))) }) })] });
}
class _ extends j {
  static getWidgetInfo() {
    return { id: "tplSelectCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "SelectCollectionWidget", visWidgetLabel: "select_collection_widget", visOrder: 8, visAttrs: [{ name: "common", fields: [...S({ groupName: "" })] }, { name: "select_collection", label: "group_select_collection", fields: [...q(["boolean", "number", "string", "mixed"]), ...J(), ...ee()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...S({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-select.png" };
  }
  getWidgetInfo() {
    return _.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, a) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    super.renderWidgetBody(e);
    const a = { id: e.id, refService: e.refService, style: e.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, U(this.wrapContent(n(oe, {})), a);
  }
}
export {
  _ as default
};
