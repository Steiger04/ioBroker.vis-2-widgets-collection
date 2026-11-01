import { h as t, m as B, e as I, l as C, i as f, k as _, n as F, j as L, f as y, g as p } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { M as R, B as g, T as v, a as T, I as V, C as $, s as E, c as P, G as U } from "./usePopoverPositioning-C1_MhytU.js";
import { b as N, e as r, C as S, g as w, D as k, u as G, j as X, c as Y } from "./useData-uC1Kpd-M.js";
import { o as q, g as J, C as K, S as Q } from "./CollectionBaseImage-DkYiHZqN.js";
import { C as Z } from "./Close-CJIHvdeL.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
const ee = () => [{ name: "view", label: "view", type: "select-views", multiple: false }, { label: "", type: "custom", component: () => t(r, {}) }, { name: "dialogAutoClose", label: "dialog_auto_close", type: "slider", min: 0, max: 3e4, step: 100 }, { label: "", type: "custom", component: () => t(r, {}) }, { name: "dialogId", type: "id", label: "oid", tooltip: "dialog_set_oid_tooltip", onChange: q(["boolean"], "dialogId") }, { label: "", type: "custom", component: () => t(r, {}) }, { name: "dialogHeaderAsTitle", label: "dialog_header_as_title", type: "checkbox", default: false }, { label: "", type: "custom", component: () => t(r, {}) }, { name: "dialogWidth", label: "dialog_width", type: "slider", min: 1, max: 100, default: 100, step: 1 }, { name: "dialogHeight", label: "dialog_height", type: "slider", min: 1, max: 100, default: 100, step: 1 }, { name: "dialogInPixel", label: "dialog_in_pixel", type: "checkbox", default: false }, { label: "", type: "custom", component: () => t(r, {}) }, N({ name: "dialogBackgroundColor", label: "background_color", fallbackFields: [""] }), { label: "", type: "custom", component: () => t(r, { dividerText: "dialog_button" }) }, { name: "dialogText", label: "dialog_text", type: "html", default: "" }, { label: "", type: "custom", component: () => t(r, {}) }, { name: "dialogCloseButtonTop", label: "dialog_close_button_top", type: "checkbox", default: false }, { name: "dialogCloseButtonBottom", label: "dialog_close_button_bottom", type: "checkbox", default: false }, { name: "dialogCloseButtonColor", label: "dialog_close_button_color", type: "color" }, { label: "", type: "custom", component: () => t(r, {}) }, { name: "onlyIcon", label: "only_icon", type: "checkbox", default: false, hidden: "data.onlyText" }, { name: "onlyText", label: "only_text", type: "checkbox", default: false, hidden: "data.onlyIcon" }];
function oe({ open: c, handleClose: a, widget: e, data: n, getWidgetView: l }) {
  var _a;
  const m = B(null), [s, d] = I(null), o = (_a = m.current) == null ? void 0 : _a.header;
  C(() => {
    e.data.dialogHeaderAsTitle && o && s && (e.data.dialogHeaderAsTitle && (o.style.width = "0px", o.style.height = "0px"), s.innerHTML = n.header, s.style.height = "auto", s.style.width = "auto");
  }, [o, s, n.header, e.data.dialogHeaderAsTitle]);
  const u = t(V, { sx: { alignSelf: "flex-end", filter: "brightness(1.5)", color: (i) => e.data.dialogCloseButtonColor || n.frameBackgroundColor || i.palette.background.default }, "aria-label": "close", onClick: a, children: t(Z, {}) });
  return t(R, { onClose: a, open: c, sx: { display: "flex", justifyContent: "center", alignItems: "center", background: e.data.dialogBackgroundColor || "inherit" }, children: t(g, { sx: { width: e.data.dialogInPixel ? `${e.data.dialogWidth}px` : `${e.data.dialogWidth}%`, height: e.data.dialogInPixel ? `${e.data.dialogHeight}px` : `${e.data.dialogHeight}%` }, children: f(S, { ref: m, data: n, sx: { flexDirection: "column", background: n.backgroundColor || n.background }, children: [f(g, { sx: { position: "relative", width: "100%", height: "auto", display: "flex", justifyContent: "flex-end", alignItems: "center", p: e.data.dialogCloseButtonTop || !e.data.dialogHeaderAsTitle ? 0 : 2 }, children: [t(g, { sx: { position: "absolute", left: 0, width: "100%" }, children: t(v, { ref: d, noWrap: true, variant: "body2", sx: { fontSize: n.headerSize, px: e.data.dialogCloseButtonTop ? 4 : 0, ...w(n.textColor) } }) }), e.data.dialogCloseButtonTop && u] }), t(_, { children: e.data.dialogCloseButtonTop && t(k, { sx: { width: "100%", opacity: "0.5", background: (i) => n.frameBackgroundColor || i.palette.background.default } }) }), t(g, { sx: { "::-webkit-scrollbar-track": { background: n.frameBackgroundColor && T(n.frameBackgroundColor, 0.5) }, "::-webkit-scrollbar-thumb": { opacity: "0.5", background: n.frameBackgroundColor && T(n.frameBackgroundColor, 0.7) }, position: "relative", overflow: "auto", width: "100%", height: "100%" }, children: l(e.data.view || "", { style: {} }) }), f(_, { children: [e.data.dialogCloseButtonBottom && t(k, { sx: { width: "100%", opacity: "0.5", background: (i) => n.frameBackgroundColor || i.palette.background.default } }), e.data.dialogCloseButtonBottom && u] })] }) }) });
}
const te = 1e4, le = 60, ae = 1e3, ne = E(P)({ width: "100% !important", height: "100% !important", display: "flex", justifyContent: "center", alignItems: "center" }), ie = { overflow: "hidden", p: 0.5, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, de = { width: "100%", height: "100%", display: "flex" };
function re(c) {
  const a = String(c);
  if (!c || a === "" || a === "0") return 0;
  if (a === "true") return te;
  let e = parseInt(a, 10);
  return e < le && (e *= 1e3), e || ae;
}
function se() {
  var _a, _b;
  const [c, a] = I(false), e = B(null), n = L($), { widget: l, widget: { data: m }, getWidgetView: s, setValue: d } = n, { data: o, oidValue: u } = G("dialogId"), i = (_a = l.data.dialogIdObject) == null ? void 0 : _a._id, O = ((_b = l.data.dialogIdObject) == null ? void 0 : _b.type) === "boolean" || !l.data.oid || l.data.oid === "nothing_selected";
  C(() => () => {
    e.current && clearTimeout(e.current);
  }, []);
  const h = y(() => {
    if (e.current) return;
    const b = re(l.data.dialogAutoClose);
    if (b === 0) {
      a(true);
      return;
    }
    e.current = setTimeout(() => {
      e.current = null, i && d(i, false), a(false);
    }, b), a(true);
  }, [i, d, l.data.dialogAutoClose]), x = y(() => {
    e.current && (clearTimeout(e.current), e.current = null), i && d(i, false), a(false);
  }, [i, d]);
  C(() => {
    u != null && (u ? h() : x());
  }, [u, h, x]);
  const W = y(() => {
    i && d(i, true), h();
  }, [i, d, h]), A = p(() => l.data.onlyIcon || !l.data.onlyText && !l.data.onlyIcon, [l.data.onlyIcon, l.data.onlyText]), H = p(() => l.data.onlyText || !l.data.onlyText && !l.data.onlyIcon, [l.data.onlyText, l.data.onlyIcon]), M = p(() => ({ "& .MuiTouchRipple-root span": { color: o.iconColor } }), [o.iconColor]), j = p(() => ({ position: "relative", objectFit: "contain", top: `calc(0px - ${o.iconYOffset})`, right: `calc(0px - ${o.iconXOffset})`, width: o.iconSizeOnly, height: o.iconSizeOnly, ...J(o.icon, o.iconColor, o.forceColorMask ?? false) }), [o.iconYOffset, o.iconXOffset, o.iconSizeOnly, o.icon, o.iconColor, o.forceColorMask]), z = p(() => ({ overflow: "hidden", width: "100%", height: "100%", p: 0.5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: o.valueSize, textTransform: "none", ...w(o.textColor), background: X(o.textColorActive || o.textColor) }), [o.valueSize, o.textColorActive, o.textColor]);
  return f(_, { children: [t(oe, { open: c, handleClose: x, widget: l, data: o, getWidgetView: s }), f(S, { isValidType: O, data: o, children: [t(K, { data: o, widget: l }), t(g, { sx: de, children: f(ne, { onClick: W, sx: M, children: [A ? t(g, { sx: ie, children: t(Q, { alt: "", src: o.icon, style: j }) }) : null, H ? t(v, { variant: "body2", sx: z, dangerouslySetInnerHTML: { __html: m.dialogText || "" } }) : null] }) })] })] });
}
const ce = F.memo(se);
class D extends U {
  static getWidgetInfo() {
    return { id: "tplDialogCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "DialogCollectionWidget", visWidgetLabel: "dialog_collection_widget", visOrder: 9, visAttrs: [{ name: "common", fields: [...Y({ groupName: "", allFields: true })] }, { name: "dialog", label: "group_dialog", fields: [...ee()] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-dialog.png" };
  }
  getWidgetInfo() {
    return D.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(a, e) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(a) {
    return super.renderWidgetBody(a), this.renderWithProvider(t(ce, {}), a, { getWidgetView: this.getWidgetView.bind(this) });
  }
}
export {
  D as default
};
