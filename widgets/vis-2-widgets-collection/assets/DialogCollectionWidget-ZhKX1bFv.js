import { A as e, B as t, Ct as n, D as r, E as i, Et as a, Nt as o, Wt as s, Xt as c, _ as l, a as u, b as d, cn as f, o as p, s as m, v as h, w as g } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { h as _ } from "./createSvgIcon-CNE8PSAz.js";
import { S as v } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as y, T as b, a as x, c as S, d as C, f as w, i as T, m as E, r as D, s as O, t as k, w as A } from "./useData-fwe13Z_u.js";
import { t as j } from "./Close-CpgZEyM5.js";
var M = () => [{ name: `view`, label: `view`, type: `select-views`, multiple: false }, { label: ``, type: `custom`, component: () => p(y, {}) }, { name: `dialogAutoClose`, label: `dialog_auto_close`, type: `slider`, min: 0, max: 3e4, step: 100 }, { label: ``, type: `custom`, component: () => p(y, {}) }, { name: `dialogId`, type: `id`, label: `oid`, tooltip: `dialog_set_oid_tooltip`, onChange: C([`boolean`], `dialogId`) }, { label: ``, type: `custom`, component: () => p(y, {}) }, { name: `dialogHeaderAsTitle`, label: `dialog_header_as_title`, type: `checkbox`, default: false }, { label: ``, type: `custom`, component: () => p(y, {}) }, { name: `dialogWidth`, label: `dialog_width`, type: `slider`, min: 1, max: 100, default: 100, step: 1 }, { name: `dialogHeight`, label: `dialog_height`, type: `slider`, min: 1, max: 100, default: 100, step: 1 }, { name: `dialogInPixel`, label: `dialog_in_pixel`, type: `checkbox`, default: false }, { label: ``, type: `custom`, component: () => p(y, {}) }, E({ name: `dialogBackgroundColor`, label: `background_color`, fallbackFields: [``] }), { label: ``, type: `custom`, component: () => p(y, { dividerText: `dialog_button` }) }, { name: `dialogText`, label: `dialog_text`, type: `html`, default: `` }, { label: ``, type: `custom`, component: () => p(y, {}) }, { name: `dialogCloseButtonTop`, label: `dialog_close_button_top`, type: `checkbox`, default: false }, { name: `dialogCloseButtonBottom`, label: `dialog_close_button_bottom`, type: `checkbox`, default: false }, { name: `dialogCloseButtonColor`, label: `dialog_close_button_color`, type: `color` }, { label: ``, type: `custom`, component: () => p(y, {}) }, { name: `onlyIcon`, label: `only_icon`, type: `checkbox`, default: false, hidden: `data.onlyText` }, { name: `onlyText`, label: `only_text`, type: `checkbox`, default: false, hidden: `data.onlyIcon` }];
function N({ open: e3, handleClose: o2, widget: l2, data: h2, getWidgetView: g2 }) {
  var _a;
  let _2 = i(null), [v2, y2] = r(null), b2 = (_a = _2.current) == null ? void 0 : _a.header;
  d(() => {
    l2.data.dialogHeaderAsTitle && b2 && v2 && (l2.data.dialogHeaderAsTitle && (b2.style.width = `0px`, b2.style.height = `0px`), v2.innerHTML = h2.header, v2.style.height = `auto`, v2.style.width = `auto`);
  }, [b2, v2, h2.header, l2.data.dialogHeaderAsTitle]);
  let x2 = p(c, { sx: { alignSelf: `flex-end`, filter: `brightness(1.5)`, color: (e4) => l2.data.dialogCloseButtonColor || h2.frameBackgroundColor || e4.palette.background.default }, "aria-label": `delete`, onClick: o2, children: p(j, {}) });
  return p(f, { onClose: o2, open: e3, sx: { display: `flex`, justifyContent: `center`, alignItems: `center`, background: l2.data.dialogBackgroundColor || `inherit` }, children: p(a, { sx: { width: l2.data.dialogInPixel ? `${l2.data.dialogWidth}px` : `${l2.data.dialogWidth}%`, height: l2.data.dialogInPixel ? `${l2.data.dialogHeight}px` : `${l2.data.dialogHeight}%` }, children: m(O, { ref: _2, data: h2, sx: { flexDirection: `column`, background: h2.backgroundColor || h2.background }, children: [m(a, { sx: { position: `relative`, width: `100%`, height: `auto`, display: `flex`, justifyContent: `flex-end`, alignItems: `center`, p: l2.data.dialogCloseButtonTop || !l2.data.dialogHeaderAsTitle ? 0 : 2 }, children: [p(a, { sx: { position: `absolute`, left: 0, width: `100%` }, children: p(n, { ref: y2, noWrap: true, variant: `body2`, sx: { fontSize: h2.headerSize, px: l2.data.dialogCloseButtonTop ? 4 : 0, background: S(h2.textColor), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: S(h2.textColor) ? `transparent` : h2.textColor } }) }), l2.data.dialogCloseButtonTop && x2] }), p(u, { children: l2.data.dialogCloseButtonTop && p(s, { sx: { width: `100%`, opacity: `0.5`, background: (e4) => h2.frameBackgroundColor || e4.palette.background.default } }) }), p(a, { sx: { "::-webkit-scrollbar-track": { background: h2.frameBackgroundColor && t(h2.frameBackgroundColor, 0.5) }, "::-webkit-scrollbar-thumb": { opacity: `0.5`, background: h2.frameBackgroundColor && t(h2.frameBackgroundColor, 0.7) }, position: `relative`, overflow: `auto`, width: `100%`, height: `100%` }, children: g2(l2.data.view || ``, { style: {} }) }), m(u, { children: [l2.data.dialogCloseButtonBottom && p(s, { sx: { width: `100%`, opacity: `0.5`, background: (e4) => h2.frameBackgroundColor || e4.palette.background.default } }), l2.data.dialogCloseButtonBottom && x2] })] }) }) });
}
var P = 1e4, F = 60, I = 1e3, L = _(o)({ width: `100% !important`, height: `100% !important`, display: `flex`, justifyContent: `center`, alignItems: `center` }), R = { overflow: `hidden`, p: 0.5, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, z = { width: `100%`, height: `100%`, display: `flex` };
function B(e3) {
  let t2 = String(e3);
  if (!e3 || t2 === `` || t2 === `0`) return 0;
  if (t2 === `true`) return P;
  let n2 = parseInt(t2, 10);
  return n2 < F && (n2 *= 1e3), n2 || I;
}
function V() {
  var _a, _b;
  let [e3, t2] = r(false), o2 = i(null), { widget: s2, widget: { data: c2 }, getWidgetView: f2, setValue: _2 } = h(b), { data: v2, oidValue: y2 } = k(`dialogId`), C2 = (_a = s2.data.dialogIdObject) == null ? void 0 : _a._id, w2 = ((_b = s2.data.dialogIdObject) == null ? void 0 : _b.type) === `boolean` || !s2.data.oid || s2.data.oid === `nothing_selected`;
  d(() => () => {
    o2.current && clearTimeout(o2.current);
  }, []);
  let E2 = l(() => {
    if (o2.current) return;
    let e4 = B(s2.data.dialogAutoClose);
    e4 === 0 || (o2.current = setTimeout(() => {
      o2.current = null, C2 && _2(C2, false), t2(false);
    }, e4)), t2(true);
  }, [C2, _2, s2.data.dialogAutoClose]), A2 = l(() => {
    o2.current &&= (clearTimeout(o2.current), null), C2 && _2(C2, false), t2(false);
  }, [C2, _2]);
  d(() => {
    y2 != null && (y2 ? E2() : A2());
  }, [y2, E2, A2]);
  let j2 = l(() => {
    C2 && _2(C2, true), E2();
  }, [C2, _2, E2]), M2 = g(() => s2.data.onlyIcon || !s2.data.onlyText && !s2.data.onlyIcon, [s2.data.onlyIcon, s2.data.onlyText]), P2 = g(() => s2.data.onlyText || !s2.data.onlyText && !s2.data.onlyIcon, [s2.data.onlyText, s2.data.onlyIcon]), F2 = g(() => ({ "& .MuiTouchRipple-root span": { color: v2.iconColor } }), [v2.iconColor]), I2 = g(() => ({ position: `relative`, objectFit: `contain`, top: `calc(0px - ${v2.iconYOffset})`, right: `calc(0px - ${v2.iconXOffset})`, width: v2.iconSizeOnly, height: v2.iconSizeOnly, ...x(v2.icon, v2.iconColor, v2.forceColorMask ?? false) }), [v2.iconYOffset, v2.iconXOffset, v2.iconSizeOnly, v2.icon, v2.iconColor, v2.forceColorMask]), V2 = g(() => ({ overflow: `hidden`, width: `100%`, height: `100%`, p: 0.5, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`, fontSize: v2.valueSize, textTransform: `none`, background: S(v2.textColorActive || v2.textColor), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: S(v2.textColor) ? `transparent` : v2.textColor }), [v2.valueSize, v2.textColorActive, v2.textColor]);
  return m(u, { children: [p(N, { open: e3, handleClose: A2, widget: s2, data: v2, getWidgetView: f2 }), m(O, { isValidType: w2, data: v2, children: [p(D, { data: v2, widget: s2 }), p(a, { sx: z, children: m(L, { onClick: j2, sx: F2, children: [M2 ? p(a, { sx: R, children: p(T, { alt: ``, src: v2.icon, style: I2 }) }) : null, P2 ? p(n, { variant: `body2`, sx: V2, dangerouslySetInnerHTML: { __html: c2.dialogText || `` } }) : null] }) })] })] });
}
var H = e.memo(V), U = class e2 extends v {
  static getWidgetInfo() {
    return { id: `tplDialogCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `DialogCollectionWidget`, visWidgetLabel: `dialog_collection_widget`, visOrder: 9, visAttrs: [{ name: `common`, fields: [...w({ groupName: ``, allFields: true })] }, { name: `dialog`, label: `group_dialog`, fields: [...M()] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-dialog.png` };
  }
  getWidgetInfo() {
    return e2.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e3, t2) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e3) {
    super.renderWidgetBody(e3);
    let t2 = { id: e3.id, refService: e3.refService, style: e3.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, getWidgetView: this.getWidgetView.bind(this), wrappedContent: this.wrappedCollectionContent };
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), A(this.wrapContent(p(H, {})), t2);
  }
};
export {
  U as default
};
