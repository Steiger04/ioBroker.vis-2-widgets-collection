import { e as j, f as W, g as S, h as y, i as o, j as w, k as N } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { B as C, L as F, I as z, P as G, T as H, G as R } from "./usePopoverPositioning-DyzF99R9.js";
import { C as L, D as U, u as $, g as D, a as E, c as P, w as q } from "./useData-Dv2ttG2p.js";
import { g as K, C as X, c as Y } from "./CollectionBaseImage-UY84iw95.js";
import { u as A, d as J } from "./useValueState-Dfmq7_-2.js";
import { s as Q } from "./stateFields-pmNmtiy5.js";
import { C as Z } from "./Close-k-3MFbOT.js";
import { S as ee } from "./Slider-jucZjQ77.js";
import { L as te, a as oe, b as ae } from "./ListItemText-D-jq6rtG.js";
import { D as ne, a as ie, b as le } from "./DialogTitle-CJ37XAIs.js";
import { S as se } from "./Stack-CK9F2mAQ.js";
import { u as re } from "./useHtmlValue-DQb6czpG.js";
import { i as de } from "./isOidReadOnly-CpnU56qh.js";
import { B as ce } from "./Button-lNrCVlWO.js";
import { A as ue } from "./Avatar-5yyd5ahQ.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./listItemTextClasses-0JtKP2Ki.js";
import "./useThemeProps-CfkhST6j.js";
const me = ({ widgetStates: r, data: e, open: m, closeHandler: p }) => {
  const { widget: a, getPropertyValue: _ } = j(L), l = a.data.oidObject, u = a.data.onlyStates, [d, b] = W(() => {
    const t = _("oid");
    return typeof t == "number" ? t : 0;
  }), { updateValue: h } = A("oid"), g = S(() => {
    const t = l == null ? void 0 : l.commonStates, n = l == null ? void 0 : l.type, i = l == null ? void 0 : l.name, x = l == null ? void 0 : l.minValue, B = l == null ? void 0 : l.maxValue;
    return { commonStates: t, oidType: n, oidName: i, minValue: x, maxValue: B };
  }, [l]), c = y((t) => {
    h(t);
  }, [h]), f = y((t, n) => {
    const i = Array.isArray(n) ? n[0] : n;
    b(i), c(i);
  }, [c]), k = y((t, n) => {
    (n === "backdropClick" || n === "escapeKeyDown") && p();
  }, [p]), V = y(() => {
    p();
  }, [p]), v = y((t) => (n) => {
    n.preventDefault();
    const i = Number(t);
    isNaN(i) || b(i), c(t);
  }, [c]), I = S(() => {
    const { oidType: t, commonStates: n, minValue: i, maxValue: x } = g;
    return t === "number" && !u && i !== void 0 && x !== void 0 ? o(C, { sx: { px: 3 }, children: o(ee, { sx: { pb: n ? 4 : 3 }, size: "small", min: i, max: x, marks: [{ value: i, label: String(i) }, { value: x, label: String(x) }], valueLabelDisplay: "auto", value: d, onChange: f }) }) : null;
  }, [g, u, d, f]), O = S(() => !r || !Object.keys(r).length ? null : o(F, { children: Object.entries(r).map(([t, n]) => o(te, { disablePadding: true, children: o(oe, { onClick: v(t), children: o(ae, { primaryTypographyProps: { variant: "body2" }, primary: String(n) }) }) }, t)) }), [r, v]), T = S(() => e.header || g.oidName || "Change Value", [e.header, g.oidName]), s = S(() => r && Object.keys(r).length > 0, [r]);
  return w(ne, { open: m, onClose: k, maxWidth: "xs", fullWidth: true, PaperProps: { sx: { bgcolor: e.backgroundColor, color: e.textColor } }, children: [o(ie, { sx: { m: 0, p: 2 }, id: "customized-dialog-title", children: T }), o(z, { "aria-label": "close", onClick: V, sx: (t) => ({ position: "absolute", right: 8, top: 8, color: t.palette.grey[500] }), children: o(Z, {}) }), o(le, { sx: { overflow: "unset" }, children: w(se, { divider: s && o(U, {}), spacing: 0, component: G, children: [I, O] }) })] });
};
function pe() {
  const r = j(L), { widget: e, theme: m } = r, p = e.data.oidObject, { data: a, widgetStates: _, states: l } = $("oid"), { value: u, updateValue: d } = A("oid"), [b, h] = W(false), g = p == null ? void 0 : p.type, c = e.data.onlyStates, f = re(u, e, a), k = f != null ? String(f) : "", V = () => {
    const s = e.data.value1;
    c && l.length === 2 && e.data.statePushButton && s !== void 0 && setTimeout(() => d(s), 0);
  }, v = () => {
    const s = e.data.value2;
    c && l.length === 2 && e.data.statePushButton && s !== void 0 && setTimeout(() => d(s), 0);
  }, I = y(() => {
    if (!c) {
      h(true);
      return;
    }
    switch (l.length) {
      case 1:
        e.data.value1 !== void 0 && d(e.data.value1);
        break;
      case 2:
        e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(u) === String(e.data.value1) ? d(e.data.value2) : d(e.data.value1));
        break;
      default:
        h(true);
        break;
    }
  }, [u, c, l.length, e.data.statePushButton, e.data.value1, e.data.value2, d]), O = o(ce, { disabled: de(e.data), onClick: I, onMouseDown: V, onMouseUp: v, onMouseOut: v, onTouchStart: V, onTouchEnd: v, sx: { width: "100%", height: "100%", color: a.textColor || "inherit", "&:hover": { bgcolor: "transparent" } }, children: w(C, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: [!e.data.noIcon && a.icon && (() => {
    const s = a.icon, t = a.iconColor || m.palette.primary.main, n = a.forceColorMask, i = K(s, t, n);
    return o(C, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%", height: "100%" }, children: o(ue, { variant: "square", src: s || void 0, slotProps: { img: { style: { objectFit: "contain", ...i } } }, sx: { overflow: "visible", width: a.iconSizeOnly, height: a.iconSizeOnly, left: `calc(0px + ${a.iconXOffset})`, top: `calc(0px - ${a.iconYOffset})` } }) });
  })(), !e.data.noValue && o(C, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%", height: "100%" }, children: o(H, { component: C, variant: "body2", sx: { fontSize: a.valueSize, textAlign: "center", bgcolor: "transparent", background: D(a.textColor), WebkitBackgroundClip: "text", backgroundClip: "text", color: D(a.textColor) ? "transparent" : a.textColor, textTransform: "none", px: 1, pl: 0, pr: 1, width: "100%", height: "100%", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", overflowWrap: "break-word", wordBreak: "break-word", whiteSpace: "normal", hyphens: "auto", "& > div": { textAlign: "left", display: "inline-block" } }, dangerouslySetInnerHTML: { __html: `<div style="text-align: left; display: inline-block;">${k || ""}</div>` } }) })] }) }), T = ["boolean", "number", "string", "mixed"].includes(g ?? "");
  return w(N, { children: [b && o(me, { data: { sampleInterval: false, sampleIntervalValue: 200, delay: 100 }, widgetStates: _, open: b, closeHandler: () => h(false) }), w(E, { isValidType: T, data: a, oidValue: u, children: [o(X, { data: a, widget: e }), o(C, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: O })] })] });
}
class M extends R {
  static getWidgetInfo() {
    return { id: "tplStateCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visSetColor: "#0C0A43", visName: "StateCollectionWidget", visWidgetLabel: "state_collection_widget", visOrder: 4, visAttrs: [{ name: "common", fields: [...P()] }, { name: "button", label: "group_button", fields: [...Y(["string", "number", "boolean", "mixed"]), ...J(), ...Q()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...P({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png" };
  }
  getWidgetInfo() {
    return M.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, m) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    super.renderWidgetBody(e);
    const m = { id: e.id, refService: e.refService, style: e.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, q(this.wrapContent(o(pe, {})), m);
  }
}
export {
  M as default
};
