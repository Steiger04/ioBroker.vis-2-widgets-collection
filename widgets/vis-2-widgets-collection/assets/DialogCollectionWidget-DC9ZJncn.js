import { i as o, m as S, f as v, l as b, j as p, k as _, n as z, e as F, h as y, g as f } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { M as L, B as g, T as I, a as T, I as P, s as R, c as $, G as E } from "./usePopoverPositioning-BUV6laon.js";
import { b as U, e as r, a as w, g as x, D as B, C as N, u as G, c as X, w as Y } from "./useData-Ogol4QJ_.js";
import { o as q, g as J, C as K, S as Q } from "./CollectionBaseImage-B5OtYHDO.js";
import { C as Z } from "./Close-DDCxpCT2.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
const ee = () => [{ name: "view", label: "view", type: "select-views", multiple: false }, { label: "", type: "custom", component: () => o(r, {}) }, { name: "dialogAutoClose", label: "dialog_auto_close", type: "slider", min: 0, max: 3e4, step: 100 }, { label: "", type: "custom", component: () => o(r, {}) }, { name: "dialogId", type: "id", label: "oid", tooltip: "dialog_set_oid_tooltip", onChange: q(["boolean"], "dialogId") }, { label: "", type: "custom", component: () => o(r, {}) }, { name: "dialogHeaderAsTitle", label: "dialog_header_as_title", type: "checkbox", default: false }, { label: "", type: "custom", component: () => o(r, {}) }, { name: "dialogWidth", label: "dialog_width", type: "slider", min: 1, max: 100, default: 100, step: 1 }, { name: "dialogHeight", label: "dialog_height", type: "slider", min: 1, max: 100, default: 100, step: 1 }, { name: "dialogInPixel", label: "dialog_in_pixel", type: "checkbox", default: false }, { label: "", type: "custom", component: () => o(r, {}) }, U({ name: "dialogBackgroundColor", label: "background_color", fallbackFields: [""] }), { label: "", type: "custom", component: () => o(r, { dividerText: "dialog_button" }) }, { name: "dialogText", label: "dialog_text", type: "html", default: "" }, { label: "", type: "custom", component: () => o(r, {}) }, { name: "dialogCloseButtonTop", label: "dialog_close_button_top", type: "checkbox", default: false }, { name: "dialogCloseButtonBottom", label: "dialog_close_button_bottom", type: "checkbox", default: false }, { name: "dialogCloseButtonColor", label: "dialog_close_button_color", type: "color" }, { label: "", type: "custom", component: () => o(r, {}) }, { name: "onlyIcon", label: "only_icon", type: "checkbox", default: false, hidden: "data.onlyText" }, { name: "onlyText", label: "only_text", type: "checkbox", default: false, hidden: "data.onlyIcon" }];
function te({ open: c, handleClose: l, widget: e, data: i, getWidgetView: a }) {
  var _a;
  const h = S(null), [d, s] = v(null), t = (_a = h.current) == null ? void 0 : _a.header;
  b(() => {
    e.data.dialogHeaderAsTitle && t && d && (e.data.dialogHeaderAsTitle && (t.style.width = "0px", t.style.height = "0px"), d.innerHTML = i.header, d.style.height = "auto", d.style.width = "auto");
  }, [t, d, i.header, e.data.dialogHeaderAsTitle]);
  const u = o(P, { sx: { alignSelf: "flex-end", filter: "brightness(1.5)", color: (n) => e.data.dialogCloseButtonColor || i.frameBackgroundColor || n.palette.background.default }, "aria-label": "delete", onClick: l, children: o(Z, {}) });
  return o(L, { onClose: l, open: c, sx: { display: "flex", justifyContent: "center", alignItems: "center", background: e.data.dialogBackgroundColor || "inherit" }, children: o(g, { sx: { width: e.data.dialogInPixel ? `${e.data.dialogWidth}px` : `${e.data.dialogWidth}%`, height: e.data.dialogInPixel ? `${e.data.dialogHeight}px` : `${e.data.dialogHeight}%` }, children: p(w, { ref: h, data: i, sx: { flexDirection: "column", background: i.backgroundColor || i.background }, children: [p(g, { sx: { position: "relative", width: "100%", height: "auto", display: "flex", justifyContent: "flex-end", alignItems: "center", p: e.data.dialogCloseButtonTop || !e.data.dialogHeaderAsTitle ? 0 : 2 }, children: [o(g, { sx: { position: "absolute", left: 0, width: "100%" }, children: o(I, { ref: s, noWrap: true, variant: "body2", sx: { fontSize: i.headerSize, px: e.data.dialogCloseButtonTop ? 4 : 0, background: x(i.textColor), WebkitBackgroundClip: "text", backgroundClip: "text", color: x(i.textColor) ? "transparent" : i.textColor } }) }), e.data.dialogCloseButtonTop && u] }), o(_, { children: e.data.dialogCloseButtonTop && o(B, { sx: { width: "100%", opacity: "0.5", background: (n) => i.frameBackgroundColor || n.palette.background.default } }) }), o(g, { sx: { "::-webkit-scrollbar-track": { background: i.frameBackgroundColor && T(i.frameBackgroundColor, 0.5) }, "::-webkit-scrollbar-thumb": { opacity: "0.5", background: i.frameBackgroundColor && T(i.frameBackgroundColor, 0.7) }, position: "relative", overflow: "auto", width: "100%", height: "100%" }, children: a(e.data.view || "", { style: {} }) }), p(_, { children: [e.data.dialogCloseButtonBottom && o(B, { sx: { width: "100%", opacity: "0.5", background: (n) => i.frameBackgroundColor || n.palette.background.default } }), e.data.dialogCloseButtonBottom && u] })] }) }) });
}
const oe = 1e4, le = 60, ae = 1e3, ie = R($)({ width: "100% !important", height: "100% !important", display: "flex", justifyContent: "center", alignItems: "center" }), ne = { overflow: "hidden", p: 0.5, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, se = { width: "100%", height: "100%", display: "flex" };
function re(c) {
  const l = String(c);
  if (!c || l === "" || l === "0") return 0;
  if (l === "true") return oe;
  let e = parseInt(l, 10);
  return e < le && (e *= 1e3), e || ae;
}
function de() {
  var _a, _b;
  const [c, l] = v(false), e = S(null), i = F(N), { widget: a, widget: { data: h }, getWidgetView: d, setValue: s } = i, { data: t, oidValue: u } = G("dialogId"), n = (_a = a.data.dialogIdObject) == null ? void 0 : _a._id, W = ((_b = a.data.dialogIdObject) == null ? void 0 : _b.type) === "boolean" || !a.data.oid || a.data.oid === "nothing_selected";
  b(() => () => {
    e.current && clearTimeout(e.current);
  }, []);
  const m = y(() => {
    if (e.current) return;
    const k = re(a.data.dialogAutoClose);
    if (k === 0) {
      l(true);
      return;
    }
    e.current = setTimeout(() => {
      e.current = null, n && s(n, false), l(false);
    }, k), l(true);
  }, [n, s, a.data.dialogAutoClose]), C = y(() => {
    e.current && (clearTimeout(e.current), e.current = null), n && s(n, false), l(false);
  }, [n, s]);
  b(() => {
    u != null && (u ? m() : C());
  }, [u, m, C]);
  const O = y(() => {
    n && s(n, true), m();
  }, [n, s, m]), A = f(() => a.data.onlyIcon || !a.data.onlyText && !a.data.onlyIcon, [a.data.onlyIcon, a.data.onlyText]), H = f(() => a.data.onlyText || !a.data.onlyText && !a.data.onlyIcon, [a.data.onlyText, a.data.onlyIcon]), M = f(() => ({ "& .MuiTouchRipple-root span": { color: t.iconColor } }), [t.iconColor]), V = f(() => ({ position: "relative", objectFit: "contain", top: `calc(0px - ${t.iconYOffset})`, right: `calc(0px - ${t.iconXOffset})`, width: t.iconSizeOnly, height: t.iconSizeOnly, ...J(t.icon, t.iconColor, t.forceColorMask ?? false) }), [t.iconYOffset, t.iconXOffset, t.iconSizeOnly, t.icon, t.iconColor, t.forceColorMask]), j = f(() => ({ overflow: "hidden", width: "100%", height: "100%", p: 0.5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: t.valueSize, textTransform: "none", background: x(t.textColorActive || t.textColor), WebkitBackgroundClip: "text", backgroundClip: "text", color: x(t.textColor) ? "transparent" : t.textColor }), [t.valueSize, t.textColorActive, t.textColor]);
  return p(_, { children: [o(te, { open: c, handleClose: C, widget: a, data: t, getWidgetView: d }), p(w, { isValidType: W, data: t, children: [o(K, { data: t, widget: a }), o(g, { sx: se, children: p(ie, { onClick: O, sx: M, children: [A ? o(g, { sx: ne, children: o(Q, { alt: "", src: t.icon, style: V }) }) : null, H ? o(I, { variant: "body2", sx: j, dangerouslySetInnerHTML: { __html: h.dialogText || "" } }) : null] }) })] })] });
}
const ce = z.memo(de);
class D extends E {
  static getWidgetInfo() {
    return { id: "tplDialogCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "DialogCollectionWidget", visWidgetLabel: "dialog_collection_widget", visOrder: 9, visAttrs: [{ name: "common", fields: [...X({ groupName: "", allFields: true })] }, { name: "dialog", label: "group_dialog", fields: [...ee()] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-dialog.png" };
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
  onStateUpdated(l, e) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(l) {
    super.renderWidgetBody(l);
    const e = { id: l.id, refService: l.refService, style: l.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, getWidgetView: this.getWidgetView.bind(this), wrappedContent: this.wrappedCollectionContent };
    return l.widget.data.noCard || l.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Y(this.wrapContent(o(ce, {})), e);
  }
}
export {
  D as default
};
