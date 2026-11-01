import { h as l, i as p, k as I, e as H, m as b, f as k, l as T, n as j, j as z, g as h } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { M as V, B as m, T as S, a as v, I as F, C as L, s as $, c as E, G as P } from "./usePopoverPositioning-C1_MhytU.js";
import { b as R, e as c, C as w, g as O, D as B, u as N, j as U, c as G } from "./useData-jkOw5Oj_.js";
import { o as X, g as Y, C as q, S as J } from "./CollectionBaseImage-Cm6oCVNa.js";
import { C as K } from "./Close-CJIHvdeL.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
const Q = () => [{ name: "view", label: "view", type: "select-views", multiple: false }, { label: "", type: "custom", component: () => l(c, {}) }, { name: "dialogAutoClose", label: "dialog_auto_close", type: "slider", min: 0, max: 3e4, step: 100 }, { label: "", type: "custom", component: () => l(c, {}) }, { name: "dialogId", type: "id", label: "oid", tooltip: "dialog_set_oid_tooltip", onChange: X(["boolean"], "dialogId") }, { label: "", type: "custom", component: () => l(c, {}) }, { name: "dialogHeaderAsTitle", label: "dialog_header_as_title", type: "checkbox", default: false }, { label: "", type: "custom", component: () => l(c, {}) }, { name: "dialogWidth", label: "dialog_width", type: "slider", min: 1, max: 100, default: 100, step: 1 }, { name: "dialogHeight", label: "dialog_height", type: "slider", min: 1, max: 100, default: 100, step: 1 }, { name: "dialogInPixel", label: "dialog_in_pixel", type: "checkbox", default: false }, { label: "", type: "custom", component: () => l(c, {}) }, R({ name: "dialogBackgroundColor", label: "background_color", fallbackFields: [""] }), { label: "", type: "custom", component: () => l(c, { dividerText: "dialog_button" }) }, { name: "dialogText", label: "dialog_text", type: "html", default: "" }, { label: "", type: "custom", component: () => l(c, {}) }, { name: "dialogCloseButtonTop", label: "dialog_close_button_top", type: "checkbox", default: false }, { name: "dialogCloseButtonBottom", label: "dialog_close_button_bottom", type: "checkbox", default: false }, { name: "dialogCloseButtonColor", label: "dialog_close_button_color", type: "color" }, { label: "", type: "custom", component: () => l(c, {}) }, { name: "onlyIcon", label: "only_icon", type: "checkbox", default: false, hidden: "data.onlyText" }, { name: "onlyText", label: "only_text", type: "checkbox", default: false, hidden: "data.onlyIcon" }];
function Z({ open: a, handleClose: t, widget: o, data: n, getWidgetView: s }) {
  const e = !!o.data.dialogHeaderAsTitle, r = l(F, { sx: { alignSelf: "flex-end", filter: "brightness(1.5)", color: (i) => o.data.dialogCloseButtonColor || n.frameBackgroundColor || i.palette.background.default }, "aria-label": "close", onClick: t, children: l(K, {}) });
  return l(V, { onClose: t, open: a, sx: { display: "flex", justifyContent: "center", alignItems: "center", background: o.data.dialogBackgroundColor || "inherit" }, children: l(m, { sx: { width: o.data.dialogInPixel ? `${o.data.dialogWidth}px` : `${o.data.dialogWidth}%`, height: o.data.dialogInPixel ? `${o.data.dialogHeight}px` : `${o.data.dialogHeight}%` }, children: p(w, { data: n, hideHeader: e, sx: { flexDirection: "column", background: n.backgroundColor || n.background }, children: [p(m, { sx: { position: "relative", width: "100%", height: "auto", display: "flex", justifyContent: "flex-end", alignItems: "center", p: o.data.dialogCloseButtonTop || !e ? 0 : 2 }, children: [l(m, { sx: { position: "absolute", left: 0, width: "100%" }, children: l(S, { noWrap: true, variant: "body2", sx: { fontSize: n.headerSize, px: o.data.dialogCloseButtonTop ? 4 : 0, ...O(n.textColor) }, dangerouslySetInnerHTML: { __html: e ? n.header ?? "" : "" } }) }), o.data.dialogCloseButtonTop && r] }), l(I, { children: o.data.dialogCloseButtonTop && l(B, { sx: { width: "100%", opacity: "0.5", background: (i) => n.frameBackgroundColor || i.palette.background.default } }) }), l(m, { sx: { "::-webkit-scrollbar-track": { background: n.frameBackgroundColor && v(n.frameBackgroundColor, 0.5) }, "::-webkit-scrollbar-thumb": { opacity: "0.5", background: n.frameBackgroundColor && v(n.frameBackgroundColor, 0.7) }, position: "relative", overflow: "auto", width: "100%", height: "100%" }, children: s(o.data.view || "", { style: {} }) }), p(I, { children: [o.data.dialogCloseButtonBottom && l(B, { sx: { width: "100%", opacity: "0.5", background: (i) => n.frameBackgroundColor || i.palette.background.default } }), o.data.dialogCloseButtonBottom && r] })] }) }) });
}
const ee = 1e4, oe = 60, te = 1e3;
function le(a) {
  const t = String(a);
  if (!a || t === "" || t === "0") return 0;
  if (t === "true") return ee;
  let o = parseInt(t, 10);
  return o < oe && (o *= 1e3), o || te;
}
function ne(a) {
  return !!(a == null ? void 0 : a._id) && a.write !== false;
}
function ae(a, t, o) {
  const { autoCloseMs: n, canWrite: s } = t, e = { open: o, write: null, timer: "keep" }, r = n > 0 ? "start" : "keep";
  switch (a.type) {
    case "observe":
      return typeof a.value != "boolean" || a.value === o ? e : a.value ? { open: true, write: null, timer: r } : { open: false, write: null, timer: "clear" };
    case "click":
      return o ? e : { open: true, write: s ? true : null, timer: r };
    case "close":
    case "timer-expired":
      return o ? { open: false, write: s ? false : null, timer: "clear" } : e;
    default:
      return e;
  }
}
function ie(a) {
  const { oidValue: t, dialogIdObject: o, autoClose: n, setValue: s } = a, [e, r] = H(false), i = b(false), d = b(null), u = b(() => {
  }), x = o == null ? void 0 : o._id, C = ne(o), y = le(n), f = k(() => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, []), _ = (A) => {
    const g = ae(A, { autoCloseMs: y, canWrite: C }, i.current);
    i.current = g.open, r(g.open), g.write !== null && x && s(x, g.write), g.timer !== "keep" && f(), g.timer === "start" && (d.current = setTimeout(() => {
      d.current = null, u.current({ type: "timer-expired" });
    }, y));
  };
  u.current = _, T(() => {
    u.current({ type: "observe", value: t });
  }, [t]), T(() => f, [f]);
  const D = k(() => u.current({ type: "click" }), []), M = k(() => u.current({ type: "close" }), []);
  return { open: e, onClick: D, onClose: M };
}
const re = $(E)({ width: "100% !important", height: "100% !important", display: "flex", justifyContent: "center", alignItems: "center" }), se = { overflow: "hidden", p: 0.5, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, ce = { width: "100%", height: "100%", display: "flex" };
function de() {
  const a = z(L), { widget: t, widget: { data: o }, getWidgetView: n, setValue: s } = a, { data: e, oidValue: r } = N("dialogId"), { open: i, onClick: d, onClose: u } = ie({ oidValue: r, dialogIdObject: o.dialogIdObject, autoClose: o.dialogAutoClose, setValue: s }), x = h(() => t.data.onlyIcon || !t.data.onlyText && !t.data.onlyIcon, [t.data.onlyIcon, t.data.onlyText]), C = h(() => t.data.onlyText || !t.data.onlyText && !t.data.onlyIcon, [t.data.onlyText, t.data.onlyIcon]), y = h(() => ({ "& .MuiTouchRipple-root span": { color: e.iconColor } }), [e.iconColor]), f = h(() => ({ position: "relative", objectFit: "contain", top: `calc(0px - ${e.iconYOffset})`, right: `calc(0px - ${e.iconXOffset})`, width: e.iconSizeOnly, height: e.iconSizeOnly, ...Y(e.icon, e.iconColor, e.forceColorMask ?? false) }), [e.iconYOffset, e.iconXOffset, e.iconSizeOnly, e.icon, e.iconColor, e.forceColorMask]), _ = h(() => ({ overflow: "hidden", width: "100%", height: "100%", p: 0.5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: e.valueSize, textTransform: "none", ...O(e.textColor), background: U(e.textColorActive || e.textColor) }), [e.valueSize, e.textColorActive, e.textColor]);
  return p(I, { children: [l(Z, { open: i, handleClose: u, widget: t, data: e, getWidgetView: n }), p(w, { data: e, children: [l(q, { data: e, widget: t }), l(m, { sx: ce, children: p(re, { onClick: d, sx: y, children: [x ? l(m, { sx: se, children: l(J, { alt: "", src: e.icon, style: f }) }) : null, C ? l(S, { variant: "body2", sx: _, dangerouslySetInnerHTML: { __html: o.dialogText || "" } }) : null] }) })] })] });
}
const ue = j.memo(de);
class W extends P {
  static getWidgetInfo() {
    return { id: "tplDialogCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "DialogCollectionWidget", visWidgetLabel: "dialog_collection_widget", visOrder: 9, visAttrs: [{ name: "common", fields: [...G({ groupName: "", allFields: true })] }, { name: "dialog", label: "group_dialog", fields: [...Q()] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-dialog.png" };
  }
  getWidgetInfo() {
    return W.getWidgetInfo();
  }
  renderWidgetBody(t) {
    return super.renderWidgetBody(t), this.renderWithProvider(l(ue, {}), t, { getWidgetView: this.getWidgetView.bind(this) });
  }
}
export {
  W as default
};
