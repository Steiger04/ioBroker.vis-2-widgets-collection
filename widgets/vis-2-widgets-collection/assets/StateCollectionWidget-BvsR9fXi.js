import { Ct as e, D as t, Et as n, Ut as r, Vt as i, Wt as a, Xt as o, _ as s, a as c, en as l, gn as u, in as d, jt as f, ln as p, mn as m, nn as h, o as g, pn as _, s as v, tn as y, v as b, w as x, zt as S } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { S as C } from "./usePopoverPositioning-DS2NF3yn.js";
import { T as w, a as T, c as E, f as D, r as O, s as k, u as A, w as j } from "./useData-fwe13Z_u.js";
import { n as M, t as N } from "./useValueState-Bk20tfZd.js";
import { t as P } from "./useData-BJ_4Y9C3.js";
import { t as F } from "./useHtmlValue--eJWoxBk.js";
import { t as I } from "./Close-CpgZEyM5.js";
import { t as L } from "./stateFields-BfIDJcWu.js";
var R = ({ widgetStates: e3, data: c2, open: f2, closeHandler: _2 }) => {
  let { widget: C2, getPropertyValue: T2 } = b(w), E2 = C2.data.oidObject, D2 = C2.data.onlyStates, [O2, k2] = t(() => {
    let e4 = T2(`oid`);
    return typeof e4 == `number` ? e4 : 0;
  }), { updateValue: A2 } = N(`oid`), j2 = x(() => ({ commonStates: E2 == null ? void 0 : E2.commonStates, oidType: E2 == null ? void 0 : E2.type, oidName: E2 == null ? void 0 : E2.name, minValue: E2 == null ? void 0 : E2.minValue, maxValue: E2 == null ? void 0 : E2.maxValue }), [E2]), M2 = s((e4) => {
    A2(e4);
  }, [A2]), P2 = s((e4, t2) => {
    let n2 = Array.isArray(t2) ? t2[0] : t2;
    k2(n2), M2(n2);
  }, [M2]), F2 = s((e4, t2) => {
    (t2 === `backdropClick` || t2 === `escapeKeyDown`) && _2();
  }, [_2]), L2 = s(() => {
    _2();
  }, [_2]), R2 = s((e4) => (t2) => {
    t2.preventDefault();
    let n2 = Number(e4);
    isNaN(n2) || k2(n2), M2(e4);
  }, [M2]), z2 = x(() => {
    let { oidType: e4, commonStates: t2, minValue: r2, maxValue: i2 } = j2;
    return e4 !== `number` || D2 || r2 === void 0 || i2 === void 0 ? null : g(n, { sx: { px: 3 }, children: g(m, { sx: { pb: t2 ? 4 : 3 }, size: `small`, min: r2, max: i2, marks: [{ value: r2, label: String(r2) }, { value: i2, label: String(i2) }], valueLabelDisplay: `auto`, value: O2, onChange: P2 }) });
  }, [j2, D2, O2, P2]), B2 = x(() => !e3 || !Object.keys(e3).length ? null : g(l, { children: Object.entries(e3).map(([e4, t2]) => g(y, { disablePadding: true, children: g(h, { onClick: R2(e4), children: g(d, { slotProps: { primary: { variant: `body2` } }, primary: String(t2) }) }) }, e4)) }), [e3, R2]), V = x(() => c2.header || j2.oidName || `Change Value`, [c2.header, j2.oidName]), H = x(() => e3 && Object.keys(e3).length > 0, [e3]);
  return v(S, { open: f2, onClose: F2, maxWidth: `xs`, fullWidth: true, slotProps: { paper: { sx: { bgcolor: c2.backgroundColor, color: c2.textColor } } }, children: [g(r, { sx: { m: 0, p: 2 }, id: `customized-dialog-title`, children: V }), g(o, { "aria-label": `close`, onClick: L2, sx: (e4) => ({ position: `absolute`, right: 8, top: 8, color: e4.palette.grey[500] }), children: g(I, {}) }), g(i, { sx: { overflow: `unset` }, children: v(u, { divider: H && g(a, {}), spacing: 0, component: p, children: [z2, B2] }) })] });
};
function z() {
  let { widget: r2, theme: i2 } = b(w), a2 = r2.data.oidObject, { data: o2, widgetStates: l2, states: u2 } = P(`oid`), { value: d2, updateValue: p2 } = N(`oid`), [m2, h2] = t(false), y2 = a2 == null ? void 0 : a2.type, x2 = r2.data.onlyStates, S2 = F(d2, r2, o2), C2 = S2 == null ? `` : String(S2), D2 = () => {
    let e3 = r2.data.value1;
    x2 && u2.length === 2 && r2.data.statePushButton && e3 !== void 0 && setTimeout(() => p2(e3), 0);
  }, A2 = () => {
    let e3 = r2.data.value2;
    x2 && u2.length === 2 && r2.data.statePushButton && e3 !== void 0 && setTimeout(() => p2(e3), 0);
  }, j2 = s(() => {
    if (!x2) h2(true);
    else switch (u2.length) {
      case 1:
        r2.data.value1 !== void 0 && p2(r2.data.value1);
        break;
      case 2:
        r2.data.value1 !== void 0 && r2.data.value2 !== void 0 && (!r2.data.statePushButton && String(d2) === String(r2.data.value1) ? p2(r2.data.value2) : p2(r2.data.value1));
        break;
      default:
        h2(true);
    }
  }, [d2, x2, u2.length, r2.data.statePushButton, r2.data.value1, r2.data.value2, p2]), M2 = g(f, { disabled: r2.data.onlyDisplay, onClick: j2, onMouseDown: D2, onMouseUp: A2, onMouseOut: A2, onTouchStart: D2, onTouchEnd: A2, sx: { width: `100%`, height: `100%`, color: o2.iconColor || o2.textColor || `primary.main`, "&:hover": { bgcolor: `transparent` } }, children: v(n, { sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: [!r2.data.noIcon && o2.icon && (() => {
    let e3 = o2.icon, t2 = o2.iconColor || i2.palette.primary.main, r3 = o2.forceColorMask, a3 = T(e3, t2, r3);
    return g(n, { sx: { display: `flex`, justifyContent: `center`, alignItems: `center`, flexGrow: 1, width: `100%`, height: `100%` }, children: g(_, { variant: `square`, src: e3 || void 0, slotProps: { img: { style: { objectFit: `contain`, ...a3 } } }, sx: { overflow: `visible`, width: o2.iconSizeOnly, height: o2.iconSizeOnly, left: `calc(0px + ${o2.iconXOffset})`, top: `calc(0px - ${o2.iconYOffset})` } }) });
  })(), !r2.data.noValue && g(n, { sx: { display: `flex`, justifyContent: `center`, alignItems: `center`, flexGrow: 1, width: `100%`, height: `100%` }, children: g(e, { component: n, variant: `body2`, sx: { fontSize: o2.valueSize, textAlign: `center`, bgcolor: `transparent`, background: E(o2.textColor), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: E(o2.textColor) ? `transparent` : o2.textColor, textTransform: `none`, px: 1, pl: 0, pr: 1, width: `100%`, height: `100%`, flexGrow: 1, display: `flex`, alignItems: `center`, justifyContent: `center`, overflowWrap: `break-word`, wordBreak: `break-word`, whiteSpace: `normal`, hyphens: `auto`, "& > div": { textAlign: `left`, display: `inline-block` } }, dangerouslySetInnerHTML: { __html: `<div style="text-align: left; display: inline-block;">${C2 || ``}</div>` } }) })] }) }), I2 = [`boolean`, `number`, `string`, `mixed`].includes(y2 ?? ``);
  return v(c, { children: [m2 && g(R, { data: { sampleInterval: false, sampleIntervalValue: 200, delay: 100 }, widgetStates: l2, open: m2, closeHandler: () => h2(false) }), v(k, { isValidType: I2, data: o2, oidValue: d2, children: [g(O, { data: o2, widget: r2 }), g(n, { sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: M2 })] })] });
}
var B = class e2 extends C {
  static getWidgetInfo() {
    return { id: `tplStateCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visSetColor: `#0C0A43`, visName: `StateCollectionWidget`, visWidgetLabel: `state_collection_widget`, visOrder: 4, visAttrs: [{ name: `common`, fields: [...D()] }, { name: `button`, label: `group_button`, fields: [...A([`string`, `number`, `boolean`, `mixed`]), ...M(), ...L()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...D({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-state.png` };
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
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), j(this.wrapContent(g(z, {})), t2);
  }
};
export {
  B as default
};
