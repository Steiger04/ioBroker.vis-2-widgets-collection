import { B as e, Ct as t, E as n, Et as r, _ as i, fn as a, gn as o, o as s, s as c, sn as l, v as u, w as d } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { S as f } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as p, D as m, E as h, T as g, a as _, c as v, d as y, f as b, i as x, l as S, m as C, r as w, s as T, u as E, w as D, x as O } from "./useData-fwe13Z_u.js";
import { n as k, t as A } from "./useValueState-Bk20tfZd.js";
import { t as j } from "./useData-BJ_4Y9C3.js";
var M = () => [{ type: `custom`, component: () => s(p, { dividerText: `selection` }) }, { name: `cid`, type: `id`, label: `cid`, onChange: y([`boolean`, `number`, `string`, `mixed`], `cid`) }, { type: `custom`, component: () => s(p, { dividerText: `arrow` }) }, C({ name: `arrowColor`, label: `arrow_color`, fallbackFields: [``], noGradient: true })];
function N(t2) {
  let n2 = v(t2), r2 = n2 ? O(t2) : void 0, i2 = r2 ? e(r2, 0.5) : t2 ? e(t2, 0.5) : void 0;
  return { background: n2, bgcolor: n2 ? `transparent` : t2, "&.Mui-selected": { background: n2, bgcolor: n2 ? void 0 : t2 }, "&.Mui-selected:hover": { background: n2 ? i2 : void 0, bgcolor: n2 ? void 0 : i2 }, "&:hover": { background: n2 ? i2 : void 0, bgcolor: n2 ? void 0 : i2 } };
}
function P() {
  let e3 = n(null), { width: f2 = 300 } = S(e3.current), { widget: p2 } = u(g), { borderStyles: y2 } = m(p2.style), b2 = p2.data.cidObject, C2 = p2.data.oidObject, { data: E2, states: D2 } = j(`oid`), { value: k2, updateValue: M2 } = A(`oid`), { updateValue: P2 } = A(`cid`), F2 = C2 == null ? void 0 : C2.type, I = [`boolean`, `number`, `string`, `mixed`].includes(F2 || ``), L = d(() => {
    if (k2 == null) return -1;
    let e4 = String(k2);
    return D2.findIndex((t2) => String(t2.value) === e4);
  }, [D2, k2]), R = i((e4) => {
    let t2 = Number(e4.target.value);
    if (t2 < 0 || t2 >= D2.length) return;
    let n2 = D2[t2];
    if ((n2 == null ? void 0 : n2.value) === void 0) return;
    let { value: r2 } = n2;
    b2 && P2(r2), M2(r2);
  }, [D2, b2, P2, M2]);
  return c(T, { isValidType: I, data: E2, oidValue: k2, children: [s(w, { data: E2, widget: p2 }), s(r, { ref: e3, sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: s(a, { variant: `standard`, disableUnderline: true, value: L === -1 ? `` : L, onChange: R, MenuProps: { slotProps: { paper: { sx: { overflow: `hidden`, "& .MuiMenu-list": { maxHeight: `100vh`, overflowY: `auto` }, ...p2.data.noCard && { "--Paper-overlay": `none !important`, "--Paper-shadow": `none !important`, boxShadow: `none !important` }, background: E2.frameBackground || (p2.data.noCard ? `transparent` : void 0), ...h(y2) } }, backdrop: { style: { backgroundColor: `transparent !important` } }, root: { sx: { maxWidth: f2, mt: 0.5, "& .MuiList-root": { py: 0 } } } } }, sx: { width: `100%`, height: `100%`, maxWidth: `calc(${f2}px - 10%)`, "& .MuiSelect-icon": { color: O(p2.data.arrowColor || E2.textColor || E2.iconColor) } }, children: D2.map((e4, n2) => s(l, { value: n2, sx: N(e4.background), children: c(o, { direction: `row`, spacing: +!!e4.icon, sx: { alignItems: `center` }, children: [s(x, { alt: ``, src: e4.icon, style: { position: `relative`, top: `calc(0px - ${e4.iconYOffset})`, right: `calc(0px - ${e4.iconXOffset})`, height: e4.iconSize, ..._(e4.icon, e4.iconColor, e4.forceColorMask) } }), s(t, { component: r, variant: `subtitle2`, sx: { whiteSpace: `pre-wrap`, fontSize: e4.valueSize, textAlign: `left`, background: v(e4.textColor), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: v(e4.textColor) ? `transparent` : e4.textColor, textTransform: `none`, width: `100%`, height: `100%`, flexGrow: 1, alignContent: `center` }, contentEditable: `false`, dangerouslySetInnerHTML: { __html: e4.label ?? `` } })] }) }, String(e4.value))) }) })] });
}
var F = class e2 extends f {
  static getWidgetInfo() {
    return { id: `tplSelectCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `SelectCollectionWidget`, visWidgetLabel: `select_collection_widget`, visOrder: 8, visAttrs: [{ name: `common`, fields: [...b({ groupName: `` })] }, { name: `select_collection`, label: `group_select_collection`, fields: [...E([`boolean`, `number`, `string`, `mixed`]), ...k(), ...M()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...b({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-select.png` };
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
    let t2 = { id: e3.id, refService: e3.refService, style: e3.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), D(this.wrapContent(s(P, {})), t2);
  }
};
export {
  F as default
};
