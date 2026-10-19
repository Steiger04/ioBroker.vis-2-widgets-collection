import { D as e, E as t, Et as n, Wt as r, Xt as i, _ as a, a as o, b as s, cn as c, ct as l, jt as u, m as d, o as f, s as p, v as m, w as h } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { t as g } from "./createSvgIcon-CNE8PSAz.js";
import { S as _ } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as v, T as y, a as b, d as x, f as S, i as C, l as ee, r as te, s as ne, t as w, w as T } from "./useData-fwe13Z_u.js";
import { n as re, t as E } from "./useValueState-Bk20tfZd.js";
import { t as ie } from "./useData-BJ_4Y9C3.js";
var ae = g(f(`path`, { d: `M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83` }), `PowerSettingsNew`), oe = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=`, D = { "switch.light": `colorLightSwitchOid`, "level.color.rgb": `colorLightRgbHexOid`, "level.color.red": `colorLightRedOid`, "level.color.green": `colorLightGreenOid`, "level.color.blue": `colorLightBlueOid`, "level.color.hue": `colorLightHueOid`, "level.color.saturation": `colorLightSaturationOid`, "level.brightness": `colorLightBrightnessOid`, "level.dimmer": `colorLightBrightnessOid`, "level.color.temperature": `colorLightTemperatureOid`, "level.color.luminance": `colorLightBrightnessOid`, "level.color.white": `colorLightBrightnessOid` }, se = async (e3, t2, n2, r2) => {
  let i2 = e3.name;
  if (i2 && t2[i2]) {
    let a2 = await r2.getObject(t2[i2]);
    if (a2 && a2.common) {
      let a3 = t2[i2].split(`.`);
      a3.pop();
      let o2 = await r2.getObjectView(`${a3.join(`.`)}.`, `${a3.join(`.`)}.\u9999`, `state`);
      if (o2) {
        let a4 = t2;
        await Promise.all(Object.values(o2).map(async (o3) => {
          let s2 = o3.common.role;
          if (s2 && D[s2] && (!t2[s2] || t2[s2] === `nothing_selected`) && i2 !== s2) {
            let i3 = D[s2];
            a4[i3] = o3._id, await x([`boolean`, `number`, `string`, `mixed`], i3)(e3, t2, n2, r2), i3 === `colorLightTemperatureOid` && (!a4.colorLightCtMin && o3.common.min && (a4.colorLightCtMin = o3.common.min), !a4.colorLightCtMax && o3.common.max && (a4.colorLightCtMax = o3.common.max)), i3 === `colorLightSwitchOid` && (a4.values_count = 2, a4.value1 = true, a4.alias1 = `TRUE`, a4.value2 = false, a4.alias2 = `FALSE`, a4.iconSize = 0, a4.iconSmall1 = oe, a4.iconColor1 = `red`, a4.iconSize1 = 100, a4.iconSmall2 = oe, a4.iconColor2 = `green`, a4.iconSize2 = 100);
          }
        })), n2(t2);
      }
    }
  }
}, O = () => [{ type: `custom`, component: () => f(v, {}) }, { name: `colorLightButton`, label: `color_light_button`, type: `checkbox`, default: false }, { name: `colorLightDelayLongPress`, label: `color_light_delay_long_press`, type: `number`, default: 500, min: 0, max: 1e4, step: 1, hidden: `!data.colorLightButton` }, { name: `colorLightModalWidth`, label: `color_light_modal_width`, type: `number`, min: 0, max: 5e3, step: 1, hidden: `!data.colorLightButton`, tooltip: `color_light_modal_width_tooltip` }, { name: `colorLightModalHeight`, label: `color_light_modal_height`, type: `number`, default: 300, min: 0, max: 5e3, step: 1, hidden: `!data.colorLightButton` }, { type: `custom`, component: () => f(v, {}) }, { name: `colorLightSliderWidth`, label: `color_light_slider_width`, type: `slider`, min: 0, max: 10, default: 1, step: 0.1 }, { name: `colorLightBorderWidth`, label: `color_light_border_width`, type: `slider`, min: 0, max: 100, default: 3, step: 1 }, { name: `colorLightBorderColor`, label: `color_light_border_color`, type: `color` }, { name: `colorLightPadding`, type: `number`, label: `color_light_padding`, default: 1, step: 0.5, min: 0 }, { type: `custom`, component: () => f(v, {}) }, { name: `colorLightSwitchOid`, type: `id`, label: `color_light_switch_oid`, onChange: se }, { type: `custom`, component: () => f(v, {}) }, { name: `colorLightUIComponent`, type: `select`, label: `color_light_ui_component`, options: [{ value: `wheel`, label: `Wheel` }, { value: `box`, label: `Box` }, { value: `slider`, label: `Slider` }], default: `wheel`, noTranslation: true, hidden: (e3) => e3.colorLightType === `cct` || e3.colorLightType === `none` }, { name: `colorWheelLightness`, label: `color_wheel_lightness`, type: `checkbox`, default: false, hidden: (e3) => e3.colorLightType === `none` || e3.colorLightType === `cct` || e3.colorLightUIComponent !== `wheel` }, { type: `custom`, component: () => f(v, {}), hidden: (e3) => e3.colorLightType === `cct` || e3.colorLightType === `none` }, { name: `colorLightType`, type: `select`, label: `color_light_type`, options: [{ value: `none`, label: `nothing_selected` }, { value: `cct`, label: `cct` }, { value: `rgb`, label: `rgb` }, { value: `rgbcct`, label: `rgb & cct` }, { value: `r/g/b`, label: `r/g/b` }, { value: `r/g/b/cct`, label: `r/g/b & cct` }, { value: `h/s/v`, label: `h/s/v` }, { value: `h/s/v/cct`, label: `h/s/v & cct` }], default: `none`, noTranslation: true }, { type: `custom`, component: () => f(v, {}), hidden: (e3) => e3.colorLightType === `none` }, { name: `colorLightTemperatureOid`, type: `id`, label: `color_light_temperature_oid`, hidden: (e3) => ![`cct`, `rgbcct`, `r/g/b/cct`, `h/s/v/cct`].includes(e3.colorLightType || ``) }, { name: `colorLightCtMin`, type: `number`, min: 500, max: 1e4, default: 2e3, label: `color_light_ct_min`, hidden: (e3) => ![`cct`, `rgbcct`, `r/g/b/cct`, `h/s/v/cct`].includes(e3.colorLightType || ``) || !e3.colorLightTemperatureOid }, { name: `colorLightCtMax`, type: `number`, min: 500, max: 1e4, default: 6500, label: `color_light_ct_max`, hidden: (e3) => ![`cct`, `rgbcct`, `r/g/b/cct`, `h/s/v/cct`].includes(e3.colorLightType || ``) || !e3.colorLightTemperatureOid }, { type: `custom`, component: () => f(v, {}), hidden: (e3) => ![`cct`, `rgbcct`, `r/g/b/cct`, `h/s/v/cct`].includes(e3.colorLightType || ``) || e3.colorLightType === `none` }, { name: `colorLightRgbHexOid`, type: `id`, label: `color_light_rgb_hex_oid`, hidden: (e3) => ![`rgb`, `rgbcct`].includes(e3.colorLightType || ``) }, { name: `colorLightRedOid`, type: `id`, label: `color_light_red_oid`, hidden: (e3) => ![`r/g/b`, `r/g/b/cct`].includes(e3.colorLightType || ``) }, { name: `colorLightGreenOid`, type: `id`, label: `color_light_green_oid`, hidden: (e3) => ![`r/g/b`, `r/g/b/cct`].includes(e3.colorLightType || ``) }, { name: `colorLightBlueOid`, type: `id`, label: `color_light_blue_oid`, hidden: (e3) => ![`r/g/b`, `r/g/b/cct`].includes(e3.colorLightType || ``) }, { name: `colorLightHueOid`, type: `id`, label: `color_light_hue_oid`, hidden: (e3) => ![`h/s/v`, `h/s/v/cct`].includes(e3.colorLightType || ``) }, { name: `colorLightSaturationOid`, type: `id`, label: `color_light_saturation_oid`, hidden: (e3) => ![`h/s/v`, `h/s/v/cct`].includes(e3.colorLightType || ``) }, { name: `colorLightBrightnessOid`, type: `id`, label: `color_light_brightness_oid`, hidden: (e3) => ![`cct`, `h/s/v`, `h/s/v/cct`].includes(e3.colorLightType || ``) }];
function k({ onClick: e3 = () => {
}, onLongPress: n2 = () => {
}, ms: r2 = 300 } = {}) {
  let i2 = t(null), o2 = t(null), s2 = t(false), c2 = t(null), l2 = a(() => {
    o2.current && (s2.current = true, n2(o2.current)), i2.current = null, o2.current = null;
  }, [n2]), u2 = a((e4) => {
    c2.current === null && (c2.current = e4.pointerId, o2.current = e4, s2.current = false, i2.current = setTimeout(l2, r2));
  }, [l2, r2]), d2 = a((t2) => {
    if (t2.pointerId !== c2.current) return;
    let n3 = o2.current, r3 = s2.current;
    i2.current &&= (clearTimeout(i2.current), null), !r3 && n3 && e3(n3), o2.current = null, s2.current = false, c2.current = null;
  }, [e3]);
  return h(() => ({ onPointerDown: u2, onPointerUp: d2, onPointerLeave: d2, onPointerCancel: d2, style: { touchAction: `manipulation` } }), [u2, d2]);
}
function ce(e3) {
  return typeof e3 == `object` && !!e3 && `colorLightButton` in e3 && `colorLightSwitchOid` in e3;
}
function le(t2) {
  let r2 = (r3) => {
    var _a;
    let i2 = m(y);
    if (!i2 || !i2.widget) throw Error(`withButtonModal must be used within a CollectionProvider`);
    let { widget: a2 } = i2, [s2, l2] = e(false), d2 = a2.data, { value: h2, updateValue: g2 } = E(`colorLightSwitchOid`), { data: _2 } = w(`colorLightSwitchOid`), v2 = ce(d2) && d2.colorLightButton, x2 = ((_a = v2 ? d2.colorLightSwitchOidObject : void 0) == null ? void 0 : _a.type) === `boolean`, S2 = k({ onClick: () => g2(!h2), onLongPress: () => l2(true), ms: v2 ? d2.colorLightDelayLongPress ?? 500 : 500 }), ee2 = v2 ? (d2.colorLightSliderWidth || 1) * 28 : 28, T2 = v2 && typeof d2.colorLightModalWidth == `number` && d2.colorLightModalWidth > 0 ? d2.colorLightModalWidth : (v2 && d2.colorLightModalHeight || 300) + 40 + 12 + ee2;
    return v2 ? p(o, { children: [p(ne, { isValidType: x2, data: _2, oidValue: h2, children: [f(te, { data: _2, widget: a2 }), f(u, { variant: `text`, onPointerDown: S2.onPointerDown, onPointerUp: S2.onPointerUp, onPointerLeave: S2.onPointerLeave, onPointerCancel: S2.onPointerCancel, sx: { color: _2.iconColorActive || `inherit`, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, touchAction: `manipulation` }, children: f(C, { alt: ``, src: _2.iconActive || `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`, style: { width: typeof _2.iconSizeOnly == `number` && `calc(100% * ${_2.iconSizeOnly} / 100)` || `100%`, height: typeof _2.iconSizeOnly == `number` && `calc(100% * ${_2.iconSizeOnly} / 100)` || `100%`, objectFit: `contain`, ...b(_2.iconActive || `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`, _2.iconColorActive || _2.iconColor) } }) })] }), f(c, { open: s2, onClose: () => l2(false), children: f(n, { sx: { position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, width: T2, height: d2.colorLightModalHeight || 300 }, children: f(t2, { ...r3 }) }) })] }) : f(t2, { ...r3 });
  };
  return r2.displayName = `withButtonModal(${t2.displayName || t2.name || `Component`})`, r2;
}
var A, j, ue, M, N, P = {}, de = [], fe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function F(e3, t2) {
  for (var n2 in t2) e3[n2] = t2[n2];
  return e3;
}
function pe(e3) {
  var t2 = e3.parentNode;
  t2 && t2.removeChild(e3);
}
function I(e3, t2, n2) {
  var r2, i2, a2, o2, s2 = arguments;
  if (t2 = F({}, t2), arguments.length > 3) for (n2 = [n2], r2 = 3; r2 < arguments.length; r2++) n2.push(s2[r2]);
  if (n2 != null && (t2.children = n2), e3 != null && e3.defaultProps != null) for (i2 in e3.defaultProps) t2[i2] === void 0 && (t2[i2] = e3.defaultProps[i2]);
  return o2 = t2.key, (a2 = t2.ref) != null && delete t2.ref, o2 != null && delete t2.key, L(e3, t2, o2, a2);
}
function L(e3, t2, n2, r2) {
  var i2 = { type: e3, props: t2, key: n2, ref: r2, __k: null, __p: null, __b: 0, __e: null, l: null, __c: null, constructor: void 0 };
  return A.vnode && A.vnode(i2), i2;
}
function R(e3) {
  return e3.children;
}
function me(e3) {
  if (e3 == null || typeof e3 == `boolean`) return null;
  if (typeof e3 == `string` || typeof e3 == `number`) return L(null, e3, null, null);
  if (e3.__e != null || e3.__c != null) {
    var t2 = L(e3.type, e3.props, e3.key, null);
    return t2.__e = e3.__e, t2;
  }
  return e3;
}
function z(e3, t2) {
  this.props = e3, this.context = t2;
}
function B(e3, t2) {
  if (t2 == null) return e3.__p ? B(e3.__p, e3.__p.__k.indexOf(e3) + 1) : null;
  for (var n2; t2 < e3.__k.length; t2++) if ((n2 = e3.__k[t2]) != null && n2.__e != null) return n2.__e;
  return typeof e3.type == `function` ? B(e3) : null;
}
function he(e3) {
  var t2, n2;
  if ((e3 = e3.__p) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t2 = 0; t2 < e3.__k.length; t2++) if ((n2 = e3.__k[t2]) != null && n2.__e != null) {
      e3.__e = e3.__c.base = n2.__e;
      break;
    }
    return he(e3);
  }
}
function ge(e3) {
  (!e3.__d && (e3.__d = true) && j.push(e3) === 1 || M !== A.debounceRendering) && (M = A.debounceRendering, (A.debounceRendering || ue)(_e));
}
function _e() {
  var e3, t2, n2, r2, i2, a2, o2, s2;
  for (j.sort(function(e4, t3) {
    return t3.__v.__b - e4.__v.__b;
  }); e3 = j.pop(); ) e3.__d && (n2 = void 0, r2 = void 0, a2 = (i2 = (t2 = e3).__v).__e, o2 = t2.__P, s2 = t2.u, t2.u = false, o2 && (n2 = [], r2 = we(o2, i2, F({}, i2), t2.__n, o2.ownerSVGElement !== void 0, null, n2, s2, a2 ?? B(i2)), Te(n2, i2), r2 != a2 && he(i2)));
}
function ve(e3, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2, u2, d2, f2, p2, m2, h2, g2 = n2 && n2.__k || de, _2 = g2.length;
  if (s2 == P && (s2 = a2 == null ? _2 ? B(n2, 0) : null : a2[0]), l2 = 0, t2.__k = ye(t2.__k, function(n3) {
    if (n3 != null) {
      if (n3.__p = t2, n3.__b = t2.__b + 1, (d2 = g2[l2]) === null || d2 && n3.key == d2.key && n3.type === d2.type) g2[l2] = void 0;
      else for (u2 = 0; u2 < _2; u2++) {
        if ((d2 = g2[u2]) && n3.key == d2.key && n3.type === d2.type) {
          g2[u2] = void 0;
          break;
        }
        d2 = null;
      }
      if (f2 = we(e3, n3, d2 ||= P, r2, i2, a2, o2, null, s2, c2), (u2 = n3.ref) && d2.ref != u2 && (h2 ||= []).push(u2, n3.__c || f2, n3), f2 != null) {
        if (m2 ??= f2, n3.l != null) f2 = n3.l, n3.l = null;
        else if (a2 == d2 || f2 != s2 || f2.parentNode == null) {
          n: if (s2 == null || s2.parentNode !== e3) e3.appendChild(f2);
          else {
            for (p2 = s2, u2 = 0; (p2 = p2.nextSibling) && u2 < _2; u2 += 2) if (p2 == f2) break n;
            e3.insertBefore(f2, s2);
          }
          t2.type == `option` && (e3.value = ``);
        }
        s2 = f2.nextSibling, typeof t2.type == `function` && (t2.l = f2);
      }
    }
    return l2++, n3;
  }), t2.__e = m2, a2 != null && typeof t2.type != `function`) for (l2 = a2.length; l2--; ) a2[l2] != null && pe(a2[l2]);
  for (l2 = _2; l2--; ) g2[l2] != null && Oe(g2[l2], g2[l2]);
  if (h2) for (l2 = 0; l2 < h2.length; l2++) De(h2[l2], h2[++l2], h2[++l2]);
}
function ye(e3, t2, n2) {
  if (n2 ??= [], e3 == null || typeof e3 == `boolean`) t2 && n2.push(t2(null));
  else if (Array.isArray(e3)) for (var r2 = 0; r2 < e3.length; r2++) ye(e3[r2], t2, n2);
  else n2.push(t2 ? t2(me(e3)) : e3);
  return n2;
}
function be(e3, t2, n2, r2, i2) {
  for (var a2 in n2) a2 in t2 || Se(e3, a2, null, n2[a2], r2);
  for (a2 in t2) i2 && typeof t2[a2] != `function` || a2 === `value` || a2 === `checked` || n2[a2] === t2[a2] || Se(e3, a2, t2[a2], n2[a2], r2);
}
function xe(e3, t2, n2) {
  t2[0] === `-` ? e3.setProperty(t2, n2) : e3[t2] = typeof n2 == `number` && false === fe.test(t2) ? n2 + `px` : n2 ?? ``;
}
function Se(e3, t2, n2, r2, i2) {
  var a2, o2, s2, c2, l2;
  if ((t2 = i2 ? t2 === `className` ? `class` : t2 : t2 === `class` ? `className` : t2) !== `key` && t2 !== `children`) {
    if (t2 === `style`) {
      if (a2 = e3.style, typeof n2 == `string`) a2.cssText = n2;
      else {
        if (typeof r2 == `string` && (a2.cssText = ``, r2 = null), r2) for (o2 in r2) n2 && o2 in n2 || xe(a2, o2, ``);
        if (n2) for (s2 in n2) r2 && n2[s2] === r2[s2] || xe(a2, s2, n2[s2]);
      }
    } else t2[0] === `o` && t2[1] === `n` ? (c2 = t2 !== (t2 = t2.replace(/Capture$/, ``)), l2 = t2.toLowerCase(), t2 = (l2 in e3 ? l2 : t2).slice(2), n2 ? (r2 || e3.addEventListener(t2, Ce, c2), (e3.t ||= {})[t2] = n2) : e3.removeEventListener(t2, Ce, c2)) : t2 !== `list` && t2 !== `tagName` && t2 !== `form` && !i2 && t2 in e3 ? e3[t2] = n2 ?? `` : typeof n2 != `function` && t2 !== `dangerouslySetInnerHTML` && (t2 === (t2 = t2.replace(/^xlink:?/, ``)) ? n2 == null || false === n2 ? e3.removeAttribute(t2) : e3.setAttribute(t2, n2) : n2 == null || false === n2 ? e3.removeAttributeNS(`http://www.w3.org/1999/xlink`, t2.toLowerCase()) : e3.setAttributeNS(`http://www.w3.org/1999/xlink`, t2.toLowerCase(), n2));
  }
}
function Ce(e3) {
  return this.t[e3.type](A.event ? A.event(e3) : e3);
}
function we(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2 = t2.type;
  if (t2.constructor !== void 0) return null;
  (u2 = A.__b) && u2(t2);
  try {
    n: if (typeof b2 == `function`) {
      if (_2 = t2.props, v2 = (u2 = b2.contextType) && r2[u2.__c], y2 = u2 ? v2 ? v2.props.value : u2.__p : r2, n2.__c ? g2 = (d2 = t2.__c = n2.__c).__p = d2.__E : (`prototype` in b2 && b2.prototype.render ? t2.__c = d2 = new b2(_2, y2) : (t2.__c = d2 = new z(_2, y2), d2.constructor = b2, d2.render = ke), v2 && v2.sub(d2), d2.props = _2, d2.state || (d2.state = {}), d2.context = y2, d2.__n = r2, f2 = d2.__d = true, d2.__h = []), d2.__s ?? (d2.__s = d2.state), b2.getDerivedStateFromProps != null && F(d2.__s == d2.state ? d2.__s = F({}, d2.__s) : d2.__s, b2.getDerivedStateFromProps(_2, d2.__s)), f2) b2.getDerivedStateFromProps == null && d2.componentWillMount != null && d2.componentWillMount(), d2.componentDidMount != null && o2.push(d2);
      else {
        if (b2.getDerivedStateFromProps == null && s2 == null && d2.componentWillReceiveProps != null && d2.componentWillReceiveProps(_2, y2), !s2 && d2.shouldComponentUpdate != null && false === d2.shouldComponentUpdate(_2, d2.__s, y2)) {
          for (d2.props = _2, d2.state = d2.__s, d2.__d = false, d2.__v = t2, t2.__e = c2 == null ? null : c2 === n2.__e ? n2.__e : c2, t2.__k = n2.__k, u2 = 0; u2 < t2.__k.length; u2++) t2.__k[u2] && (t2.__k[u2].__p = t2);
          break n;
        }
        d2.componentWillUpdate != null && d2.componentWillUpdate(_2, d2.__s, y2);
      }
      for (p2 = d2.props, m2 = d2.state, d2.context = y2, d2.props = _2, d2.state = d2.__s, (u2 = A.__r) && u2(t2), d2.__d = false, d2.__v = t2, d2.__P = e3, u2 = d2.render(d2.props, d2.state, d2.context), t2.__k = ye(u2 != null && u2.type == R && u2.key == null ? u2.props.children : u2), d2.getChildContext != null && (r2 = F(F({}, r2), d2.getChildContext())), f2 || d2.getSnapshotBeforeUpdate == null || (h2 = d2.getSnapshotBeforeUpdate(p2, m2)), ve(e3, t2, n2, r2, i2, a2, o2, c2, l2), d2.base = t2.__e; u2 = d2.__h.pop(); ) d2.__s && (d2.state = d2.__s), u2.call(d2);
      f2 || p2 == null || d2.componentDidUpdate == null || d2.componentDidUpdate(p2, m2, h2), g2 && (d2.__E = d2.__p = null);
    } else t2.__e = Ee(n2.__e, t2, n2, r2, i2, a2, o2, l2);
    (u2 = A.diffed) && u2(t2);
  } catch (e4) {
    A.__e(e4, t2, n2);
  }
  return t2.__e;
}
function Te(e3, t2) {
  for (var n2; n2 = e3.pop(); ) try {
    n2.componentDidMount();
  } catch (e4) {
    A.__e(e4, n2.__v);
  }
  A.__c && A.__c(t2);
}
function Ee(e3, t2, n2, r2, i2, a2, o2, s2) {
  var c2, l2, u2, d2, f2 = n2.props, p2 = t2.props;
  if (i2 = t2.type === `svg` || i2, e3 == null && a2 != null) {
    for (c2 = 0; c2 < a2.length; c2++) if ((l2 = a2[c2]) != null && (t2.type === null ? l2.nodeType === 3 : l2.localName === t2.type)) {
      e3 = l2, a2[c2] = null;
      break;
    }
  }
  if (e3 == null) {
    if (t2.type === null) return document.createTextNode(p2);
    e3 = i2 ? document.createElementNS(`http://www.w3.org/2000/svg`, t2.type) : document.createElement(t2.type), a2 = null;
  }
  return t2.type === null ? f2 !== p2 && (a2 != null && (a2[a2.indexOf(e3)] = null), e3.data = p2) : t2 !== n2 && (a2 != null && (a2 = de.slice.call(e3.childNodes)), u2 = (f2 = n2.props || P).dangerouslySetInnerHTML, d2 = p2.dangerouslySetInnerHTML, s2 || (d2 || u2) && (d2 && u2 && d2.__html == u2.__html || (e3.innerHTML = d2 && d2.__html || ``)), be(e3, p2, f2, i2, s2), t2.__k = t2.props.children, d2 || ve(e3, t2, n2, r2, t2.type !== `foreignObject` && i2, a2, o2, P, s2), s2 || (`value` in p2 && p2.value !== void 0 && p2.value !== e3.value && (e3.value = p2.value == null ? `` : p2.value), `checked` in p2 && p2.checked !== void 0 && p2.checked !== e3.checked && (e3.checked = p2.checked))), e3;
}
function De(e3, t2, n2) {
  try {
    typeof e3 == `function` ? e3(t2) : e3.current = t2;
  } catch (e4) {
    A.__e(e4, n2);
  }
}
function Oe(e3, t2, n2) {
  var r2, i2, a2;
  if (A.unmount && A.unmount(e3), (r2 = e3.ref) && De(r2, null, t2), n2 || typeof e3.type == `function` || (n2 = (i2 = e3.__e) != null), e3.__e = e3.l = null, (r2 = e3.__c) != null) {
    if (r2.componentWillUnmount) try {
      r2.componentWillUnmount();
    } catch (e4) {
      A.__e(e4, t2);
    }
    r2.base = r2.__P = null;
  }
  if (r2 = e3.__k) for (a2 = 0; a2 < r2.length; a2++) r2[a2] && Oe(r2[a2], t2, n2);
  i2 != null && pe(i2);
}
function ke(e3, t2, n2) {
  return this.constructor(e3, n2);
}
function Ae(e3, t2, n2) {
  var r2, i2, a2;
  A.__p && A.__p(e3, t2), i2 = (r2 = n2 === N) ? null : n2 && n2.__k || t2.__k, e3 = I(R, null, [e3]), a2 = [], we(t2, r2 ? t2.__k = e3 : (n2 || t2).__k = e3, i2 || P, P, t2.ownerSVGElement !== void 0, n2 && !r2 ? [n2] : i2 ? null : de.slice.call(t2.childNodes), a2, false, n2 || P, r2), Te(a2, e3);
}
A = {}, z.prototype.setState = function(e3, t2) {
  var n2 = this.__s !== this.state && this.__s || (this.__s = F({}, this.state));
  (typeof e3 != `function` || (e3 = e3(n2, this.props))) && F(n2, e3), e3 != null && this.__v && (this.u = false, t2 && this.__h.push(t2), ge(this));
}, z.prototype.forceUpdate = function(e3) {
  this.__v && (e3 && this.__h.push(e3), this.u = true, ge(this));
}, z.prototype.render = R, j = [], ue = typeof Promise == `function` ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, M = A.debounceRendering, A.__e = function(e3, t2, n2) {
  for (var r2; t2 = t2.__p; ) if ((r2 = t2.__c) && !r2.__p) try {
    if (r2.constructor && r2.constructor.getDerivedStateFromError != null) r2.setState(r2.constructor.getDerivedStateFromError(e3));
    else {
      if (r2.componentDidCatch == null) continue;
      r2.componentDidCatch(e3);
    }
    return ge(r2.__E = r2);
  } catch (t3) {
    e3 = t3;
  }
  throw e3;
}, N = P;
function je(e3, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
  }
}
function Me(e3, t2, n2) {
  return t2 && je(e3.prototype, t2), n2 && je(e3, n2), e3;
}
function V() {
  return V = Object.assign || function(e3) {
    for (var t2 = arguments, n2 = 1; n2 < arguments.length; n2++) {
      var r2 = t2[n2];
      for (var i2 in r2) Object.prototype.hasOwnProperty.call(r2, i2) && (e3[i2] = r2[i2]);
    }
    return e3;
  }, V.apply(this, arguments);
}
var H = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`, Ne = `[\\s|\\(]+(` + H + `)[,|\\s]+(` + H + `)[,|\\s]+(` + H + `)\\s*\\)?`, Pe = `[\\s|\\(]+(` + H + `)[,|\\s]+(` + H + `)[,|\\s]+(` + H + `)[,|\\s]+(` + H + `)\\s*\\)?`, Fe = RegExp(`rgb` + Ne), Ie = RegExp(`rgba` + Pe), Le = RegExp(`hsl` + Ne), Re = RegExp(`hsla` + Pe), ze = `^(?:#?|0x?)`, U = `([0-9a-fA-F]{1})`, W = `([0-9a-fA-F]{2})`, Be = RegExp(ze + U + U + U + `$`), Ve = RegExp(ze + U + U + U + U + `$`), He = RegExp(ze + W + W + W + `$`), Ue = RegExp(ze + W + W + W + W + `$`), We = 2e3, Ge = 4e4, Ke = Math.log, G = Math.round, qe = Math.floor;
function K(e3, t2, n2) {
  return Math.min(Math.max(e3, t2), n2);
}
function q(e3, t2) {
  var n2 = e3.indexOf(`%`) > -1, r2 = parseFloat(e3);
  return n2 ? t2 / 100 * r2 : r2;
}
function J(e3) {
  return parseInt(e3, 16);
}
function Y(e3) {
  return e3.toString(16).padStart(2, `0`);
}
var X = (function() {
  function e3(e4, t3) {
    this.$ = { h: 0, s: 0, v: 0, a: 1 }, e4 && this.set(e4), this.onChange = t3, this.initialValue = V({}, this.$);
  }
  var t2 = e3.prototype;
  return t2.set = function(t3) {
    if (typeof t3 == `string`) /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t3) ? this.hexString = t3 : /^rgba?/.test(t3) ? this.rgbString = t3 : /^hsla?/.test(t3) && (this.hslString = t3);
    else if (typeof t3 == `object`) t3 instanceof e3 ? this.hsva = t3.hsva : `r` in t3 && `g` in t3 && `b` in t3 ? this.rgb = t3 : `h` in t3 && `s` in t3 && `v` in t3 ? this.hsv = t3 : `h` in t3 && `s` in t3 && `l` in t3 ? this.hsl = t3 : `kelvin` in t3 && (this.kelvin = t3.kelvin);
    else throw Error(`Invalid color value`);
  }, t2.setChannel = function(e4, t3, n2) {
    var r2;
    this[e4] = V({}, this[e4], (r2 = {}, r2[t3] = n2, r2));
  }, t2.reset = function() {
    this.hsva = this.initialValue;
  }, t2.clone = function() {
    return new e3(this);
  }, t2.unbind = function() {
    this.onChange = void 0;
  }, e3.hsvToRgb = function(e4) {
    var t3 = e4.h / 60, n2 = e4.s / 100, r2 = e4.v / 100, i2 = qe(t3), a2 = t3 - i2, o2 = r2 * (1 - n2), s2 = r2 * (1 - a2 * n2), c2 = r2 * (1 - (1 - a2) * n2), l2 = i2 % 6, u2 = [r2, s2, o2, o2, c2, r2][l2], d2 = [c2, r2, r2, s2, o2, o2][l2], f2 = [o2, o2, c2, r2, r2, s2][l2];
    return { r: K(u2 * 255, 0, 255), g: K(d2 * 255, 0, 255), b: K(f2 * 255, 0, 255) };
  }, e3.rgbToHsv = function(e4) {
    var t3 = e4.r / 255, n2 = e4.g / 255, r2 = e4.b / 255, i2 = Math.max(t3, n2, r2), a2 = Math.min(t3, n2, r2), o2 = i2 - a2, s2 = 0, c2 = i2, l2 = i2 === 0 ? 0 : o2 / i2;
    switch (i2) {
      case a2:
        s2 = 0;
        break;
      case t3:
        s2 = (n2 - r2) / o2 + (n2 < r2 ? 6 : 0);
        break;
      case n2:
        s2 = (r2 - t3) / o2 + 2;
        break;
      case r2:
        s2 = (t3 - n2) / o2 + 4;
    }
    return { h: s2 * 60 % 360, s: K(l2 * 100, 0, 100), v: K(c2 * 100, 0, 100) };
  }, e3.hsvToHsl = function(e4) {
    var t3 = e4.s / 100, n2 = e4.v / 100, r2 = (2 - t3) * n2, i2 = r2 <= 1 ? r2 : 2 - r2, a2 = i2 < 1e-9 ? 0 : t3 * n2 / i2;
    return { h: e4.h, s: K(a2 * 100, 0, 100), l: K(r2 * 50, 0, 100) };
  }, e3.hslToHsv = function(e4) {
    var t3 = e4.l * 2, n2 = e4.s * (t3 <= 100 ? t3 : 200 - t3) / 100, r2 = t3 + n2 < 1e-9 ? 0 : 2 * n2 / (t3 + n2);
    return { h: e4.h, s: K(r2 * 100, 0, 100), v: K((t3 + n2) / 2, 0, 100) };
  }, e3.kelvinToRgb = function(e4) {
    var t3 = e4 / 100, n2, r2, i2;
    return t3 < 66 ? (n2 = 255, r2 = -155.25485562709179 - 0.44596950469579133 * (r2 = t3 - 2) + 104.49216199393888 * Ke(r2), i2 = t3 < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (i2 = t3 - 10) + 115.67994401066147 * Ke(i2)) : (n2 = 351.97690566805693 + 0.114206453784165 * (n2 = t3 - 55) - 40.25366309332127 * Ke(n2), r2 = 325.4494125711974 + 0.07943456536662342 * (r2 = t3 - 50) - 28.0852963507957 * Ke(r2), i2 = 255), { r: K(qe(n2), 0, 255), g: K(qe(r2), 0, 255), b: K(qe(i2), 0, 255) };
  }, e3.rgbToKelvin = function(t3) {
    for (var n2 = t3.r, r2 = t3.b, i2 = 0.4, a2 = We, o2 = Ge, s2; o2 - a2 > i2; ) {
      s2 = (o2 + a2) * 0.5;
      var c2 = e3.kelvinToRgb(s2);
      c2.b / c2.r >= r2 / n2 ? o2 = s2 : a2 = s2;
    }
    return s2;
  }, Me(e3, [{ key: `hsv`, get: function() {
    var e4 = this.$;
    return { h: e4.h, s: e4.s, v: e4.v };
  }, set: function(e4) {
    var t3 = this.$;
    if (e4 = V({}, t3, e4), this.onChange) {
      var n2 = { h: false, v: false, s: false, a: false };
      for (var r2 in t3) n2[r2] = e4[r2] != t3[r2];
      this.$ = e4, (n2.h || n2.s || n2.v || n2.a) && this.onChange(this, n2);
    } else this.$ = e4;
  } }, { key: `hsva`, get: function() {
    return V({}, this.$);
  }, set: function(e4) {
    this.hsv = e4;
  } }, { key: `hue`, get: function() {
    return this.$.h;
  }, set: function(e4) {
    this.hsv = { h: e4 };
  } }, { key: `saturation`, get: function() {
    return this.$.s;
  }, set: function(e4) {
    this.hsv = { s: e4 };
  } }, { key: `value`, get: function() {
    return this.$.v;
  }, set: function(e4) {
    this.hsv = { v: e4 };
  } }, { key: `alpha`, get: function() {
    return this.$.a;
  }, set: function(e4) {
    this.hsv = V({}, this.hsv, { a: e4 });
  } }, { key: `kelvin`, get: function() {
    return e3.rgbToKelvin(this.rgb);
  }, set: function(t3) {
    this.rgb = e3.kelvinToRgb(t3);
  } }, { key: `red`, get: function() {
    return this.rgb.r;
  }, set: function(e4) {
    this.rgb = V({}, this.rgb, { r: e4 });
  } }, { key: `green`, get: function() {
    return this.rgb.g;
  }, set: function(e4) {
    this.rgb = V({}, this.rgb, { g: e4 });
  } }, { key: `blue`, get: function() {
    return this.rgb.b;
  }, set: function(e4) {
    this.rgb = V({}, this.rgb, { b: e4 });
  } }, { key: `rgb`, get: function() {
    var t3 = e3.hsvToRgb(this.$), n2 = t3.r, r2 = t3.g, i2 = t3.b;
    return { r: G(n2), g: G(r2), b: G(i2) };
  }, set: function(t3) {
    this.hsv = V({}, e3.rgbToHsv(t3), { a: t3.a === void 0 ? 1 : t3.a });
  } }, { key: `rgba`, get: function() {
    return V({}, this.rgb, { a: this.alpha });
  }, set: function(e4) {
    this.rgb = e4;
  } }, { key: `hsl`, get: function() {
    var t3 = e3.hsvToHsl(this.$), n2 = t3.h, r2 = t3.s, i2 = t3.l;
    return { h: G(n2), s: G(r2), l: G(i2) };
  }, set: function(t3) {
    this.hsv = V({}, e3.hslToHsv(t3), { a: t3.a === void 0 ? 1 : t3.a });
  } }, { key: `hsla`, get: function() {
    return V({}, this.hsl, { a: this.alpha });
  }, set: function(e4) {
    this.hsl = e4;
  } }, { key: `rgbString`, get: function() {
    var e4 = this.rgb;
    return `rgb(` + e4.r + `, ` + e4.g + `, ` + e4.b + `)`;
  }, set: function(e4) {
    var t3, n2, r2, i2, a2 = 1;
    if ((t3 = Fe.exec(e4)) ? (n2 = q(t3[1], 255), r2 = q(t3[2], 255), i2 = q(t3[3], 255)) : (t3 = Ie.exec(e4)) && (n2 = q(t3[1], 255), r2 = q(t3[2], 255), i2 = q(t3[3], 255), a2 = q(t3[4], 1)), t3) this.rgb = { r: n2, g: r2, b: i2, a: a2 };
    else throw Error(`Invalid rgb string`);
  } }, { key: `rgbaString`, get: function() {
    var e4 = this.rgba;
    return `rgba(` + e4.r + `, ` + e4.g + `, ` + e4.b + `, ` + e4.a + `)`;
  }, set: function(e4) {
    this.rgbString = e4;
  } }, { key: `hexString`, get: function() {
    var e4 = this.rgb;
    return `#` + Y(e4.r) + Y(e4.g) + Y(e4.b);
  }, set: function(e4) {
    var t3, n2, r2, i2, a2 = 255;
    if ((t3 = Be.exec(e4)) ? (n2 = J(t3[1]) * 17, r2 = J(t3[2]) * 17, i2 = J(t3[3]) * 17) : (t3 = Ve.exec(e4)) ? (n2 = J(t3[1]) * 17, r2 = J(t3[2]) * 17, i2 = J(t3[3]) * 17, a2 = J(t3[4]) * 17) : (t3 = He.exec(e4)) ? (n2 = J(t3[1]), r2 = J(t3[2]), i2 = J(t3[3])) : (t3 = Ue.exec(e4)) && (n2 = J(t3[1]), r2 = J(t3[2]), i2 = J(t3[3]), a2 = J(t3[4])), t3) this.rgb = { r: n2, g: r2, b: i2, a: a2 / 255 };
    else throw Error(`Invalid hex string`);
  } }, { key: `hex8String`, get: function() {
    var e4 = this.rgba;
    return `#` + Y(e4.r) + Y(e4.g) + Y(e4.b) + Y(qe(e4.a * 255));
  }, set: function(e4) {
    this.hexString = e4;
  } }, { key: `hslString`, get: function() {
    var e4 = this.hsl;
    return `hsl(` + e4.h + `, ` + e4.s + `%, ` + e4.l + `%)`;
  }, set: function(e4) {
    var t3, n2, r2, i2, a2 = 1;
    if ((t3 = Le.exec(e4)) ? (n2 = q(t3[1], 360), r2 = q(t3[2], 100), i2 = q(t3[3], 100)) : (t3 = Re.exec(e4)) && (n2 = q(t3[1], 360), r2 = q(t3[2], 100), i2 = q(t3[3], 100), a2 = q(t3[4], 1)), t3) this.hsl = { h: n2, s: r2, l: i2, a: a2 };
    else throw Error(`Invalid hsl string`);
  } }, { key: `hslaString`, get: function() {
    var e4 = this.hsla;
    return `hsla(` + e4.h + `, ` + e4.s + `%, ` + e4.l + `%, ` + e4.a + `)`;
  }, set: function(e4) {
    this.hslString = e4;
  } }]), e3;
})(), Je = { sliderShape: `bar`, sliderType: `value`, minTemperature: 2200, maxTemperature: 11e3 };
function Ye(e3) {
  var t2 = e3.width, n2 = e3.sliderSize, r2 = e3.borderWidth, i2 = e3.handleRadius, a2 = e3.padding, o2 = e3.sliderShape, s2 = e3.layoutDirection === `horizontal`;
  return n2 ??= a2 * 2 + i2 * 2, o2 === `circle` ? { handleStart: e3.padding + e3.handleRadius, handleRange: t2 - a2 * 2 - i2 * 2, width: t2, height: t2, cx: t2 / 2, cy: t2 / 2, radius: t2 / 2 - r2 / 2 } : { handleStart: n2 / 2, handleRange: t2 - n2, radius: n2 / 2, x: 0, y: 0, width: s2 ? n2 : t2, height: s2 ? t2 : n2 };
}
function Xe(e3, t2) {
  var n2 = t2.hsva, r2 = t2.rgb;
  switch (e3.sliderType) {
    case `red`:
      return r2.r / 2.55;
    case `green`:
      return r2.g / 2.55;
    case `blue`:
      return r2.b / 2.55;
    case `alpha`:
      return n2.a * 100;
    case `kelvin`:
      var i2 = e3.minTemperature, a2 = e3.maxTemperature - i2, o2 = (t2.kelvin - i2) / a2 * 100;
      return Math.max(0, Math.min(o2, 100));
    case `hue`:
      return n2.h /= 3.6;
    case `saturation`:
      return n2.s;
    default:
      return n2.v;
  }
}
function Ze(e3, t2, n2) {
  var r2 = Ye(e3), i2 = r2.handleRange, a2 = r2.handleStart, o2 = e3.layoutDirection === `horizontal` ? -1 * n2 + i2 + a2 : t2 - a2;
  o2 = Math.max(Math.min(o2, i2), 0);
  var s2 = Math.round(100 / i2 * o2);
  switch (e3.sliderType) {
    case `kelvin`:
      var c2 = e3.minTemperature;
      return c2 + (e3.maxTemperature - c2) * (s2 / 100);
    case `alpha`:
      return s2 / 100;
    case `hue`:
      return s2 * 3.6;
    case `red`:
    case `blue`:
    case `green`:
      return s2 * 2.55;
    default:
      return s2;
  }
}
function Qe(e3, t2) {
  var n2 = Ye(e3), r2 = n2.width, i2 = n2.height, a2 = n2.handleRange, o2 = n2.handleStart, s2 = e3.layoutDirection === `horizontal`, c2 = Xe(e3, t2), l2 = s2 ? r2 / 2 : i2 / 2, u2 = o2 + c2 / 100 * a2;
  return s2 && (u2 = -1 * u2 + a2 + o2 * 2), { x: s2 ? l2 : u2, y: s2 ? u2 : l2 };
}
function $e(e3, t2) {
  var n2 = t2.hsv, r2 = t2.rgb;
  switch (e3.sliderType) {
    case `red`:
      return [[0, `rgb(0,` + r2.g + `,` + r2.b + `)`], [100, `rgb(255,` + r2.g + `,` + r2.b + `)`]];
    case `green`:
      return [[0, `rgb(` + r2.r + `,0,` + r2.b + `)`], [100, `rgb(` + r2.r + `,255,` + r2.b + `)`]];
    case `blue`:
      return [[0, `rgb(` + r2.r + `,` + r2.g + `,0)`], [100, `rgb(` + r2.r + `,` + r2.g + `,255)`]];
    case `alpha`:
      return [[0, `rgba(` + r2.r + `,` + r2.g + `,` + r2.b + `,0)`], [100, `rgb(` + r2.r + `,` + r2.g + `,` + r2.b + `)`]];
    case `kelvin`:
      for (var i2 = [], a2 = e3.minTemperature, o2 = e3.maxTemperature, s2 = 8, c2 = o2 - a2, l2 = a2, u2 = 0; l2 < o2; l2 += c2 / s2, u2 += 1) {
        var d2 = X.kelvinToRgb(l2), f2 = d2.r, p2 = d2.g, m2 = d2.b;
        i2.push([100 / s2 * u2, `rgb(` + f2 + `,` + p2 + `,` + m2 + `)`]);
      }
      return i2;
    case `hue`:
      return [[0, `#f00`], [16.666, `#ff0`], [33.333, `#0f0`], [50, `#0ff`], [66.666, `#00f`], [83.333, `#f0f`], [100, `#f00`]];
    case `saturation`:
      var h2 = X.hsvToHsl({ h: n2.h, s: 0, v: n2.v }), g2 = X.hsvToHsl({ h: n2.h, s: 100, v: n2.v });
      return [[0, `hsl(` + h2.h + `,` + h2.s + `%,` + h2.l + `%)`], [100, `hsl(` + g2.h + `,` + g2.s + `%,` + g2.l + `%)`]];
    default:
      var _2 = X.hsvToHsl({ h: n2.h, s: n2.s, v: 100 });
      return [[0, `#000`], [100, `hsl(` + _2.h + `,` + _2.s + `%,` + _2.l + `%)`]];
  }
}
var et = Math.PI * 2, tt = function(e3, t2) {
  return (e3 % t2 + t2) % t2;
}, nt = function(e3, t2) {
  return Math.sqrt(e3 * e3 + t2 * t2);
};
function rt(e3) {
  return e3.width / 2 - e3.padding - e3.handleRadius - e3.borderWidth;
}
function it(e3, t2, n2) {
  var r2 = at(e3), i2 = r2.cx, a2 = r2.cy, o2 = e3.width / 2;
  return nt(i2 - t2, a2 - n2) < o2;
}
function at(e3) {
  var t2 = e3.width / 2;
  return { width: e3.width, radius: t2 - e3.borderWidth, cx: t2, cy: t2 };
}
function ot(e3, t2, n2) {
  var r2 = e3.wheelAngle, i2 = e3.wheelDirection;
  return n2 && i2 === `clockwise` ? t2 = r2 + t2 : i2 === `clockwise` ? t2 = 360 - r2 + t2 : n2 && i2 === `anticlockwise` ? t2 = r2 + 180 - t2 : i2 === `anticlockwise` && (t2 = r2 - t2), tt(t2, 360);
}
function st(e3, t2) {
  var n2 = t2.hsv, r2 = at(e3), i2 = r2.cx, a2 = r2.cy, o2 = rt(e3), s2 = (180 + ot(e3, n2.h, true)) * (et / 360), c2 = n2.s / 100 * o2, l2 = e3.wheelDirection === `clockwise` ? -1 : 1;
  return { x: i2 + c2 * Math.cos(s2) * l2, y: a2 + c2 * Math.sin(s2) * l2 };
}
function ct(e3, t2, n2) {
  var r2 = at(e3), i2 = r2.cx, a2 = r2.cy, o2 = rt(e3);
  t2 = i2 - t2, n2 = a2 - n2;
  var s2 = ot(e3, Math.atan2(-n2, -t2) * (360 / et)), c2 = Math.min(nt(t2, n2), o2);
  return { h: Math.round(s2), s: Math.round(100 / o2 * c2) };
}
function lt(e3) {
  var t2 = e3.width, n2 = e3.boxHeight, r2 = e3.padding, i2 = e3.handleRadius;
  return { width: t2, height: n2 ?? t2, radius: r2 + i2 };
}
function ut(e3, t2, n2) {
  var r2 = lt(e3), i2 = r2.width, a2 = r2.height, o2 = r2.radius, s2 = o2, c2 = i2 - o2 * 2, l2 = a2 - o2 * 2, u2 = (t2 - s2) / c2 * 100, d2 = (n2 - s2) / l2 * 100;
  return { s: Math.max(0, Math.min(u2, 100)), v: Math.max(0, Math.min(100 - d2, 100)) };
}
function dt(e3, t2) {
  var n2 = lt(e3), r2 = n2.width, i2 = n2.height, a2 = n2.radius, o2 = t2.hsv, s2 = a2, c2 = r2 - a2 * 2, l2 = i2 - a2 * 2;
  return { x: s2 + o2.s / 100 * c2, y: s2 + (l2 - o2.v / 100 * l2) };
}
function ft(e3, t2) {
  return [[[0, `#fff`], [100, `hsl(` + t2.hue + `,100%,50%)`]], [[0, `rgba(0,0,0,0)`], [100, `#000`]]];
}
var pt;
function mt(e3) {
  pt ||= document.getElementsByTagName(`base`);
  var t2 = window.navigator.userAgent, n2 = /^((?!chrome|android).)*safari/i.test(t2), r2 = /iPhone|iPod|iPad/i.test(t2), i2 = window.location;
  return (n2 || r2) && pt.length > 0 ? i2.protocol + `//` + i2.host + i2.pathname + i2.search + e3 : e3;
}
function ht(e3, t2, n2, r2) {
  for (var i2 = 0; i2 < r2.length; i2++) {
    var a2 = r2[i2].x - t2, o2 = r2[i2].y - n2;
    if (Math.sqrt(a2 * a2 + o2 * o2) < e3.handleRadius) return i2;
  }
  return null;
}
function gt(e3) {
  return { boxSizing: `border-box`, border: e3.borderWidth + `px solid ` + e3.borderColor };
}
function _t(e3, t2, n2) {
  return e3 + `-gradient(` + t2 + `, ` + n2.map(function(e4) {
    var t3 = e4[0];
    return e4[1] + ` ` + t3 + `%`;
  }).join(`,`) + `)`;
}
function Z(e3) {
  return typeof e3 == `string` ? e3 : e3 + `px`;
}
var vt = { width: 300, height: 300, color: `#fff`, colors: [], padding: 6, layoutDirection: `vertical`, borderColor: `#fff`, borderWidth: 0, handleRadius: 8, activeHandleRadius: null, handleSvg: null, handleProps: { x: 0, y: 0 }, wheelLightness: true, wheelAngle: 0, wheelDirection: `anticlockwise`, sliderSize: null, sliderMargin: 12, boxHeight: null }, yt = [`mousemove`, `touchmove`, `mouseup`, `touchend`], bt = (function(e3) {
  function t2(t3) {
    e3.call(this, t3), this.uid = (Math.random() + 1).toString(36).substring(5);
  }
  return e3 && (t2.__proto__ = e3), t2.prototype = Object.create(e3 && e3.prototype), t2.prototype.constructor = t2, t2.prototype.render = function(e4) {
    var t3 = this.handleEvent.bind(this), n2 = { onMouseDown: t3, ontouchstart: t3 }, r2 = e4.layoutDirection === `horizontal`, i2 = e4.margin === null ? e4.sliderMargin : e4.margin, a2 = { overflow: `visible`, display: r2 ? `inline-block` : `block` };
    return e4.index > 0 && (a2[r2 ? `marginLeft` : `marginTop`] = i2), I(R, null, e4.children(this.uid, n2, a2));
  }, t2.prototype.handleEvent = function(e4) {
    var t3 = this, n2 = this.props.onInput, r2 = this.base.getBoundingClientRect();
    e4.preventDefault();
    var i2 = e4.touches ? e4.changedTouches[0] : e4, a2 = i2.clientX - r2.left, o2 = i2.clientY - r2.top;
    switch (e4.type) {
      case `mousedown`:
      case `touchstart`:
        n2(a2, o2, 0) !== false && yt.forEach(function(e5) {
          document.addEventListener(e5, t3, { passive: false });
        });
        break;
      case `mousemove`:
      case `touchmove`:
        n2(a2, o2, 1);
        break;
      case `mouseup`:
      case `touchend`:
        n2(a2, o2, 2), yt.forEach(function(e5) {
          document.removeEventListener(e5, t3, { passive: false });
        });
    }
  }, t2;
})(z);
function Q(e3) {
  var t2 = e3.r, n2 = e3.url, r2 = t2, i2 = t2;
  return I(`svg`, { className: `IroHandle IroHandle--` + e3.index + ` ` + (e3.isActive ? `IroHandle--isActive` : ``), style: { "-webkit-tap-highlight-color": `rgba(0, 0, 0, 0);`, transform: `translate(` + Z(e3.x) + `, ` + Z(e3.y) + `)`, willChange: `transform`, top: Z(-t2), left: Z(-t2), width: Z(t2 * 2), height: Z(t2 * 2), position: `absolute`, overflow: `visible` } }, n2 && I(`use`, Object.assign({ xlinkHref: mt(n2) }, e3.props)), !n2 && I(`circle`, { cx: r2, cy: i2, r: t2, fill: `none`, "stroke-width": 2, stroke: `#000` }), !n2 && I(`circle`, { cx: r2, cy: i2, r: t2 - 2, fill: e3.fill, "stroke-width": 2, stroke: `#fff` }));
}
Q.defaultProps = { fill: `none`, x: 0, y: 0, r: 8, url: null, props: { x: 0, y: 0 } };
function xt(e3) {
  var t2 = e3.activeIndex, n2 = t2 !== void 0 && t2 < e3.colors.length ? e3.colors[t2] : e3.color, r2 = Ye(e3), i2 = r2.width, a2 = r2.height, o2 = r2.radius, s2 = Qe(e3, n2), c2 = $e(e3, n2);
  function l2(t3, r3, i3) {
    var a3 = Ze(e3, t3, r3);
    e3.parent.inputActive = true, n2[e3.sliderType] = a3, e3.onInput(i3, e3.id);
  }
  return I(bt, Object.assign({}, e3, { onInput: l2 }), function(t3, r3, l3) {
    return I(`div`, Object.assign({}, r3, { className: `IroSlider`, style: Object.assign({}, { position: `relative`, width: Z(i2), height: Z(a2), borderRadius: Z(o2), background: `conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)`, backgroundSize: `8px 8px` }, l3) }), I(`div`, { className: `IroSliderGradient`, style: Object.assign({}, { position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`, borderRadius: Z(o2), background: _t(`linear`, e3.layoutDirection === `horizontal` ? `to top` : `to right`, c2) }, gt(e3)) }), I(Q, { isActive: true, index: n2.index, r: e3.handleRadius, url: e3.handleSvg, props: e3.handleProps, x: s2.x, y: s2.y }));
  });
}
xt.defaultProps = Object.assign({}, Je);
function St(e3) {
  var t2 = lt(e3), n2 = t2.width, r2 = t2.height, i2 = t2.radius, a2 = e3.colors, o2 = e3.parent, s2 = e3.activeIndex, c2 = s2 !== void 0 && s2 < e3.colors.length ? e3.colors[s2] : e3.color, l2 = ft(e3, c2), u2 = a2.map(function(t3) {
    return dt(e3, t3);
  });
  function d2(t3, n3, r3) {
    if (r3 === 0) {
      var i3 = ht(e3, t3, n3, u2);
      i3 === null ? (o2.inputActive = true, c2.hsv = ut(e3, t3, n3), e3.onInput(r3, e3.id)) : o2.setActiveColor(i3);
    } else r3 === 1 && (o2.inputActive = true, c2.hsv = ut(e3, t3, n3));
    e3.onInput(r3, e3.id);
  }
  return I(bt, Object.assign({}, e3, { onInput: d2 }), function(t3, o3, s3) {
    return I(`div`, Object.assign({}, o3, { className: `IroBox`, style: Object.assign({}, { width: Z(n2), height: Z(r2), position: `relative` }, s3) }), I(`div`, { className: `IroBox`, style: Object.assign({}, { width: `100%`, height: `100%`, borderRadius: Z(i2) }, gt(e3), { background: _t(`linear`, `to bottom`, l2[1]) + `,` + _t(`linear`, `to right`, l2[0]) }) }), a2.filter(function(e4) {
      return e4 !== c2;
    }).map(function(t4) {
      return I(Q, { isActive: false, index: t4.index, fill: t4.hslString, r: e3.handleRadius, url: e3.handleSvg, props: e3.handleProps, x: u2[t4.index].x, y: u2[t4.index].y });
    }), I(Q, { isActive: true, index: c2.index, fill: c2.hslString, r: e3.activeHandleRadius || e3.handleRadius, url: e3.handleSvg, props: e3.handleProps, x: u2[c2.index].x, y: u2[c2.index].y }));
  });
}
var Ct = `conic-gradient(red, yellow, lime, aqua, blue, magenta, red)`, wt = `conic-gradient(red, magenta, blue, aqua, lime, yellow, red)`;
function Tt(e3) {
  var t2 = at(e3).width, n2 = e3.colors;
  e3.borderWidth;
  var r2 = e3.parent, i2 = e3.color, a2 = i2.hsv, o2 = n2.map(function(t3) {
    return st(e3, t3);
  }), s2 = { position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`, borderRadius: `50%`, boxSizing: `border-box` };
  function c2(t3, n3, a3) {
    if (a3 === 0) {
      if (!it(e3, t3, n3)) return false;
      var s3 = ht(e3, t3, n3, o2);
      s3 === null ? (r2.inputActive = true, i2.hsv = ct(e3, t3, n3), e3.onInput(a3, e3.id)) : r2.setActiveColor(s3);
    } else a3 === 1 && (r2.inputActive = true, i2.hsv = ct(e3, t3, n3));
    e3.onInput(a3, e3.id);
  }
  return I(bt, Object.assign({}, e3, { onInput: c2 }), function(r3, c3, l2) {
    return I(`div`, Object.assign({}, c3, { className: `IroWheel`, style: Object.assign({}, { width: Z(t2), height: Z(t2), position: `relative` }, l2) }), I(`div`, { className: `IroWheelHue`, style: Object.assign({}, s2, { transform: `rotateZ(` + (e3.wheelAngle + 90) + `deg)`, background: e3.wheelDirection === `clockwise` ? Ct : wt }) }), I(`div`, { className: `IroWheelSaturation`, style: Object.assign({}, s2, { background: `radial-gradient(circle closest-side, #fff, transparent)` }) }), e3.wheelLightness && I(`div`, { className: `IroWheelLightness`, style: Object.assign({}, s2, { background: `#000`, opacity: 1 - a2.v / 100 }) }), I(`div`, { className: `IroWheelBorder`, style: Object.assign({}, s2, gt(e3)) }), n2.filter(function(e4) {
      return e4 !== i2;
    }).map(function(t3) {
      return I(Q, { isActive: false, index: t3.index, fill: t3.hslString, r: e3.handleRadius, url: e3.handleSvg, props: e3.handleProps, x: o2[t3.index].x, y: o2[t3.index].y });
    }), I(Q, { isActive: true, index: i2.index, fill: i2.hslString, r: e3.activeHandleRadius || e3.handleRadius, url: e3.handleSvg, props: e3.handleProps, x: o2[i2.index].x, y: o2[i2.index].y }));
  });
}
function Et(e3) {
  var t2 = function(t3, n2) {
    var r2, i2 = document.createElement(`div`);
    Ae(I(e3, Object.assign({}, { ref: function(e4) {
      return r2 = e4;
    } }, n2)), i2);
    function a2() {
      var e4 = t3 instanceof Element ? t3 : document.querySelector(t3);
      e4.appendChild(r2.base), r2.onMount(e4);
    }
    return document.readyState === `loading` ? document.addEventListener(`DOMContentLoaded`, a2) : a2(), r2;
  };
  return t2.prototype = e3.prototype, Object.assign(t2, e3), t2.__component = e3, t2;
}
var Dt = (function(e3) {
  function t2(t3) {
    var n2 = this;
    e3.call(this, t3), this.colors = [], this.inputActive = false, this.events = {}, this.activeEvents = {}, this.deferredEvents = {}, this.id = t3.id, (t3.colors.length > 0 ? t3.colors : [t3.color]).forEach(function(e4) {
      return n2.addColor(e4);
    }), this.setActiveColor(0), this.state = Object.assign({}, t3, { color: this.color, colors: this.colors, layout: t3.layout });
  }
  return e3 && (t2.__proto__ = e3), t2.prototype = Object.create(e3 && e3.prototype), t2.prototype.constructor = t2, t2.prototype.addColor = function(e4, t3) {
    t3 === void 0 && (t3 = this.colors.length);
    var n2 = new X(e4, this.onColorChange.bind(this));
    this.colors.splice(t3, 0, n2), this.colors.forEach(function(e5, t4) {
      return e5.index = t4;
    }), this.state && this.setState({ colors: this.colors }), this.deferredEmit(`color:init`, n2);
  }, t2.prototype.removeColor = function(e4) {
    var t3 = this.colors.splice(e4, 1)[0];
    t3.unbind(), this.colors.forEach(function(e5, t4) {
      return e5.index = t4;
    }), this.state && this.setState({ colors: this.colors }), t3.index === this.color.index && this.setActiveColor(0), this.emit(`color:remove`, t3);
  }, t2.prototype.setActiveColor = function(e4) {
    this.color = this.colors[e4], this.state && this.setState({ color: this.color }), this.emit(`color:setActive`, this.color);
  }, t2.prototype.setColors = function(e4, t3) {
    var n2 = this;
    t3 === void 0 && (t3 = 0), this.colors.forEach(function(e5) {
      return e5.unbind();
    }), this.colors = [], e4.forEach(function(e5) {
      return n2.addColor(e5);
    }), this.setActiveColor(t3), this.emit(`color:setAll`, this.colors);
  }, t2.prototype.on = function(e4, t3) {
    var n2 = this, r2 = this.events;
    (Array.isArray(e4) ? e4 : [e4]).forEach(function(e5) {
      (r2[e5] || (r2[e5] = [])).push(t3), n2.deferredEvents[e5] && (n2.deferredEvents[e5].forEach(function(e6) {
        t3.apply(null, e6);
      }), n2.deferredEvents[e5] = []);
    });
  }, t2.prototype.off = function(e4, t3) {
    var n2 = this;
    (Array.isArray(e4) ? e4 : [e4]).forEach(function(e5) {
      var r2 = n2.events[e5];
      r2 && r2.splice(r2.indexOf(t3), 1);
    });
  }, t2.prototype.emit = function(e4) {
    for (var t3 = this, n2 = [], r2 = arguments.length - 1; r2-- > 0; ) n2[r2] = arguments[r2 + 1];
    var i2 = this.activeEvents;
    i2.hasOwnProperty(e4) && i2[e4] || (i2[e4] = true, (this.events[e4] || []).forEach(function(e5) {
      return e5.apply(t3, n2);
    }), i2[e4] = false);
  }, t2.prototype.deferredEmit = function(e4) {
    for (var t3, n2 = [], r2 = arguments.length - 1; r2-- > 0; ) n2[r2] = arguments[r2 + 1];
    var i2 = this.deferredEvents;
    (t3 = this).emit.apply(t3, [e4].concat(n2)), (i2[e4] || (i2[e4] = [])).push(n2);
  }, t2.prototype.setOptions = function(e4) {
    this.setState(e4);
  }, t2.prototype.resize = function(e4) {
    this.setOptions({ width: e4 });
  }, t2.prototype.reset = function() {
    this.colors.forEach(function(e4) {
      return e4.reset();
    }), this.setState({ colors: this.colors });
  }, t2.prototype.onMount = function(e4) {
    this.el = e4, this.deferredEmit(`mount`, this);
  }, t2.prototype.onColorChange = function(e4, t3) {
    this.setState({ color: this.color }), this.inputActive && (this.inputActive = false, this.emit(`input:change`, e4, t3)), this.emit(`color:change`, e4, t3);
  }, t2.prototype.emitInputEvent = function(e4, t3) {
    e4 === 0 ? this.emit(`input:start`, this.color, t3) : e4 === 1 ? this.emit(`input:move`, this.color, t3) : e4 === 2 && this.emit(`input:end`, this.color, t3);
  }, t2.prototype.render = function(e4, t3) {
    var n2 = this, r2 = t3.layout;
    return Array.isArray(r2) || (r2 = [{ component: Tt }, { component: xt }], t3.transparency && r2.push({ component: xt, options: { sliderType: `alpha` } })), I(`div`, { class: `IroColorPicker`, id: t3.id, style: { display: t3.display } }, r2.map(function(e5, r3) {
      var i2 = e5.component, a2 = e5.options;
      return I(i2, Object.assign({}, t3, a2, { ref: void 0, onInput: n2.emitInputEvent.bind(n2), parent: n2, index: r3 }));
    }));
  }, t2;
})(z);
Dt.defaultProps = Object.assign({}, vt, { colors: [], display: `block`, id: null, layout: `default`, margin: null });
var Ot = Et(Dt), kt;
(function(e3) {
  e3.version = `5.5.2`, e3.Color = X, e3.ColorPicker = Ot, (function(e4) {
    e4.h = I, e4.ComponentBase = bt, e4.Handle = Q, e4.Slider = xt, e4.Wheel = Tt, e4.Box = St;
  })(e3.ui ||= {});
})(kt ||= {});
var $ = kt;
function At(e3, t2, n2, r2, i2) {
  if (n2 === `cct`) return [[{ component: $.ui.Slider, options: { sliderType: `kelvin`, sliderShape: `circle`, minTemperature: r2, maxTemperature: i2 } }, { component: $.ui.Slider, options: { sliderType: `value` } }][e3 - 1]];
  switch (t2) {
    case `wheel`:
      return [{ component: $.ui.Wheel, options: {} }, { component: $.ui.Slider, options: { sliderType: `value` } }];
    case `box`:
      return [{ component: $.ui.Box, options: { boxLightness: false } }, { component: $.ui.Slider, options: { sliderType: `hue` } }];
    case `slider`:
      return [{ component: $.ui.Slider, options: { sliderType: `red` } }, { component: $.ui.Slider, options: { sliderType: `green` } }, { component: $.ui.Slider, options: { sliderType: `blue` } }];
    default:
      return [];
  }
}
function jt(e3, t2, n2) {
  if (n2 === `cct`) return e3.maxWidth;
  switch (t2) {
    case `wheel`:
    case `box`:
      return e3.maxWidth;
    case `slider`:
      return e3.height;
    default:
      return 0;
  }
}
function Mt(e3, t2, n2, r2) {
  if (!e3.width || !e3.height) return 12;
  if (t2 === `slider` && r2 !== `cct`) return (e3.width - 3 * (n2 || 1) * 28) / 2;
  let i2 = e3.maxWidth, a2 = (n2 || 1) * 28, o2 = e3.width - i2 - a2;
  return Math.max(12, o2);
}
function Nt(e3, t2, n2, r2, i2, a2) {
  e3.current && (t2.current = $.ColorPicker(e3.current, n2), t2.current.on(`color:init`, (e4) => {
    i2 && i2(e4, a2);
  }), t2.current.on(`input:change`, (e4, t3) => {
    r2 && r2(e4, t3);
  }));
}
function Pt(e3) {
  e3.current = null;
}
function Ft(e3, t2) {
  e3 && t2 && e3.resize(t2);
}
function It(e3, t2) {
  e3 && e3.setOptions(t2);
}
function Lt(e3, t2) {
  typeof e3 == `function` ? e3(t2) : e3 && `current` in e3 && (e3.current = t2);
}
var Rt = d(({ dimensions: e3, colorLightUIComponent: r2, colorLightSliderWidth: i2, colorLightBorderWidth: a2, colorLightBorderColor: o2, colorWheelLightness: c2, colorLightType: l2, colorLightCtMin: u2, colorLightCtMax: d2, colorLightGamut: p2, cctComponentNumber: g2, onInputChange: _2, onColorInit: v2 }, b2) => {
  let { theme: x2 } = m(y), S2 = t(null), C2 = t(null), ee2 = t(v2), te2 = t(_2);
  ee2.current = v2, te2.current = _2;
  let ne2 = h(() => At(g2, r2, l2, u2, d2), [g2, r2, l2, u2, d2]), w2 = h(() => jt(e3, r2, l2), [e3, r2, l2]), T2 = h(() => Mt(e3, r2, i2, l2), [e3, r2, i2, l2]);
  return s(() => (Nt(S2, C2, { color: `#ffffff`, width: 0, margin: 12, sliderSize: 28, display: `flex`, padding: 6, handleRadius: 8, layoutDirection: `horizontal` }, (e4, t2) => {
    var _a;
    return (_a = te2.current) == null ? void 0 : _a.call(te2, e4, t2);
  }, (e4, t2) => {
    var _a;
    return (_a = ee2.current) == null ? void 0 : _a.call(ee2, e4, t2);
  }, g2), Lt(b2, C2.current), () => Pt(C2)), [b2, g2]), s(() => {
    Ft(C2.current, w2);
  }, [w2]), s(() => {
    It(C2.current, { layout: ne2, margin: T2, wheelLightness: c2, sliderSize: (i2 || 1) * 28, borderWidth: a2 || 0, borderColor: !o2 || typeof o2 == `string` && o2.trim() === `` ? x2.palette.primary.main : o2 });
  }, [x2.palette.primary.main, ne2, T2, i2, a2, o2, c2]), f(n, { ref: S2 });
});
Rt.displayName = `Light2Picker`;
var zt = (e3) => p(`svg`, { width: `800px`, height: `800px`, viewBox: `0 0 128 128`, xmlns: `http://www.w3.org/2000/svg`, xmlnsXlink: `http://www.w3.org/1999/xlink`, "aria-hidden": `true`, role: `img`, className: `iconify iconify--noto`, preserveAspectRatio: `xMidYMid meet`, ...e3, children: [f(`path`, { d: `M77.37 19.32C46.83 3.21 19.03 14.69 9.01 30.38c-3.28 5.13-5.6 14.46-5.51 21.86c.18 15.23 8.61 32.2 26.8 49.32c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.27-4.13 14.33-12.65c-.12-1.12-1.08-3.15-2.53-4.04c-4.65-2.82-14.36-4.29-18.93-11.08c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.29-4.33 16.52-14.84c1.1-9.51-12.78-39.9-46.14-57.5zM89.84 71c-2.34 3.56-8.12 2.34-11.91-1.02c-3.79-3.36-4.28-8.96-1.82-11.16c2.5-2.23 7.2-1.72 10.99 1.64c3.78 3.37 4.57 7.74 2.74 10.54z`, fill: `#ac5810` }), f(`path`, { d: `M78.71 15.69C48.17-.42 20.3 12.04 10.28 27.73C.25 43.43 4.61 72.5 31.63 97.93c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.59-6.58 11.57-12.13c-2.77-3.83-12.7-6.72-18.69-15.64c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.65-5.39 15.37-15.13c-.29-9.57-11.63-39.6-44.99-57.21zm14.06 55.03c-2.85 3.08-8.92 2.24-13.56-1.86c-4.63-4.11-6.08-9.93-3.23-13c2.85-3.08 8.92-2.24 13.56 1.86c4.64 4.1 6.08 9.93 3.23 13z`, fill: `#f2a259` }), f(`path`, { d: `M47.62 84.66c1.15-2.94 9.33-6.16 16.85-.81c2.11 1.5 4.75 5.32 4.48 10.12c-.88 15.68-26.61 4.22-21.33-9.31z`, fill: `#eee` }), f(`path`, { d: `M23.73 58.07c2.63-4.2 9.02-4.68 14.61-1.05c4.98 3.23 9.14 11.18 3 16.38c-3.29 2.79-8.98 1.06-12.49-1.63c-4.26-3.25-7.95-9.18-5.12-13.7z`, fill: `#2686c6` }), f(`path`, { d: `M57.67 21.42c.81-3.33 6.46-3.9 10.46-2.41c6.91 2.58 10.04 9.42 7.49 13.23c-3.73 5.57-11.86 3.66-14.94.47c-5.23-5.4-3.69-8.5-3.01-11.29z`, fill: `#ffee58` }), f(`path`, { d: `M97.71 37.72c5.54 2.52 6.26 6.51 5.2 9.42c-.66 1.8-2.01 4.27-4.77 4.49c-4.67.38-5.32-3.48-8.65-4.54c-2.8-.89-3.94-4.72-2.84-7.29c1.02-2.37 4-5.3 11.06-2.08z`, fill: `#7cb342` }), f(`path`, { d: `M66.97 96.96c-1.38 1.25-6.17 2.79-12.25-1.01c-2.06-1.29-4.03-3.16-5.14-5.96c-.87-2.2-.68-4.32-.29-5.26c1.12-2.71 2.83-3.21 2.83-3.21c-1.72-.12-4.97 2.16-5.51 5.15c-.17.94-1.38 6.82 6.41 12.15c6.71 4.6 16.63 4.17 15.98-5.09c-.3 1.14-1.15 2.44-2.03 3.23z`, fill: `#b0b0b0` }), f(`path`, { d: `M44.26 65.72c-.19 3.57-4.37 5.45-6.7 5.46c-6.59.01-12.51-4.13-12.92-11.5c-.07-1.32.58-3.23.58-3.23c-.87.37-2.1 2.25-2.36 3.31c-1.54 6.36 4.87 13.77 11.62 15.27c3.42.76 7.73-.41 9.3-3.47c1.12-2.18.9-4.05.48-5.84z`, fill: `#01579b` }), f(`path`, { d: `M67.32 32.72c-4.48-.51-6.96-3.44-7.61-4.11c-1.78-1.86-2.88-3.67-2.24-6.35c.2-.86.69-1.96 1.29-2.58c-.73.24-1.91 1.81-2.28 2.66c-.38.85-1.76 4.04 1.2 7.97c1.83 2.44 5.02 5.19 9.74 5.85c3.35.47 5.75-.73 7.75-2.68c1.36-1.33 1.96-4.33 1.15-5.88c.13 1.13-1.94 5.93-9 5.12z`, fill: `#df7f14` }), f(`path`, { d: `M104.17 44.85c-.41-1.51-1.58-3.08-1.7-3.16c.51.98 1.52 3.92-.6 6.78c-1.07 1.44-4.29 3.21-8.09.13c-1.12-.91-2.02-1.81-4.04-2.55c-5.13-1.89-2.89-7.11-1.11-8.73c-1.4.73-2.67 2.04-3.2 4.04c-.74 2.79 1.09 5.71 3.87 7.11c3.16 1.59 4.18 4.66 8.51 4.66c.22 0 .45-.01.7-.03c2.92-.25 4.15-1.38 5.04-2.76c1.09-1.72 1.12-3.67.62-5.49z`, fill: `#558b2f` }), f(`path`, { d: `M25.82 25.79c2.28-2.25 6.25-4.63 12.06-1.6c3.5 1.82 7.57 3.96 5.73 11.36c-1.14 4.59-7.82 7.02-13.4 1.91c-2.21-2.02-10.61-5.53-4.39-11.67z`, fill: `#f44336` }), f(`path`, { d: `M44.94 34.56c.07-1.75-.83-3.88-1.14-4.6c.05 1.05.96 3.7-3.21 7.21c-1.45 1.22-4.08 2.15-6.95 1.02c-1.47-.58-3.58-3.01-5.09-3.62c-5.61-2.26-3.19-8.27-2.4-9.09c-1.27.89-2.35 2.31-2.75 4.38c-.52 2.71-.04 5.27 3.68 8.2c10.56 8.33 13.8 3.31 14.95 2.03c1.45-1.56 2.83-3.6 2.91-5.53z`, fill: `#c62828` }), f(`path`, { d: `M65.74 19.36c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.51-1.1 4.28-2.44 2.22-3.41z`, fill: `#ffffff` }), f(`path`, { d: `M34.76 24.46c-1.45-.96-6.08-.97-7.47 2.58c-.84 2.13.47 4.6 2.04 4.56c1.79-.04.93-2.15 2.42-3.49c1.88-1.69 5.04-2.31 3.01-3.65z`, fill: `#ffffff` }), f(`path`, { d: `M34.07 56.5c-1.37-.87-5.43-1.21-7.11 1.97c-1.23 2.34.46 4.92 1.93 4.85c1.67-.08 1.11-2.74 2.18-3.34c1.63-.91 4.92-2.26 3-3.48z`, fill: `#ffffff` }), f(`path`, { d: `M57.4 83.13c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.5-1.1 4.27-2.44 2.22-3.41z`, fill: `#ffffff` }), f(`path`, { d: `M95.08 38.05c-1.32-.94-5.49-1.49-6.91 1.81c-.85 1.98.28 4.35 1.75 4.36c1.67.01 1.26-2.67 2.37-3.21c1.67-.81 4.64-1.64 2.79-2.96z`, fill: `#ffffff` })] }), Bt = (e3, t2, n2) => {
  let r2 = t2[e3];
  if (typeof r2 != `string` || !r2.trim()) return;
  let i2 = n2(e3), a2 = Number(i2);
  return Number.isFinite(a2) ? a2 : void 0;
}, Vt = (e3, t2) => {
  if (e3 !== void 0) return Math.round(typeof t2 == `number` && t2 === 254 ? e3 / 254 * 100 : e3);
}, Ht = (e3, t2, n2, r2) => Vt(Bt(e3, t2, n2), r2);
function Ut(e3, t2, n2) {
  e3.kelvin = Bt(`colorLightTemperatureOid`, t2, n2) ?? 2e3;
}
function Wt(e3, t2, n2) {
  var _a;
  let r2 = Ht(`colorLightBrightnessOid`, t2, n2, (_a = t2.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
  r2 !== void 0 && (e3.value = r2);
}
function Gt(e3, t2, n2, r2, i2) {
  var _a, _b, _c;
  switch (t2) {
    case `cct`:
      if (i2 === 1) Ut(e3, r2, n2);
      else if (i2 === 2) {
        let t3 = Ht(`colorLightBrightnessOid`, r2, n2, (_a = r2.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
        t3 !== void 0 && (e3.value = t3);
      }
      break;
    case `rgb`:
    case `rgbcct`: {
      if (!r2.colorLightRgbHexOid) break;
      let t3 = n2(`colorLightRgbHexOid`);
      e3.hexString = typeof t3 == `string` && t3.trim().length > 0 ? t3 : `#ffffff`;
      break;
    }
    case `r/g/b`:
    case `r/g/b/cct`:
      if (r2.colorLightRedOid && r2.colorLightGreenOid && r2.colorLightBlueOid) {
        let t3 = Bt(`colorLightRedOid`, r2, n2), i3 = Bt(`colorLightGreenOid`, r2, n2), a2 = Bt(`colorLightBlueOid`, r2, n2);
        e3.red = t3 ?? 0, e3.green = i3 ?? 0, e3.blue = a2 ?? 0;
      }
      break;
    case `h/s/v`:
    case `h/s/v/cct`:
      if (r2.colorLightHueOid && r2.colorLightSaturationOid && r2.colorLightBrightnessOid) {
        let t3 = Bt(`colorLightHueOid`, r2, n2), i3 = Ht(`colorLightSaturationOid`, r2, n2, (_b = r2.colorLightSaturationOidObject) == null ? void 0 : _b.maxValue), a2 = Ht(`colorLightBrightnessOid`, r2, n2, (_c = r2.colorLightBrightnessOidObject) == null ? void 0 : _c.maxValue);
        t3 !== void 0 && (e3.hue = t3), i3 !== void 0 && (e3.saturation = i3), a2 !== void 0 && (e3.value = a2);
      }
  }
}
var Kt = (e3, t2) => !e3 || !t2 || !!t2[e3], qt = (e3) => e3 === `kelvin` ? 2e3 : e3 === `hexString` ? `#ffffff` : 0, Jt = (e3, t2) => {
  let n2 = t2.value;
  t2.hexString = e3.hexString, t2.value = n2;
}, Yt = (e3) => f(l, { component: zt, viewBox: `0 0 128 128`, ...e3 }), Xt = (e3) => p(l, { viewBox: `0 0 512 512`, ...e3, children: [p(`defs`, { children: [p(`linearGradient`, { id: `cctGradient`, x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [f(`stop`, { offset: `0%`, stopColor: `#1E90FF` }), f(`stop`, { offset: `100%`, stopColor: `#FF8C00` })] }), p(`filter`, { id: `insetShadow`, x: `-50%`, y: `-50%`, width: `200%`, height: `200%`, children: [f(`feOffset`, { dx: `0`, dy: `2` }), f(`feGaussianBlur`, { stdDeviation: `4`, result: `offset-blur` }), f(`feComposite`, { operator: `out`, in: `SourceGraphic`, in2: `offset-blur`, result: `inverse` }), f(`feFlood`, { floodColor: `#FFF176`, floodOpacity: `0.4` }), f(`feComposite`, { in2: `inverse`, operator: `in`, result: `shadow` }), f(`feComposite`, { in: `shadow`, in2: `SourceGraphic`, operator: `over` })] })] }), f(`circle`, { cx: `256`, cy: `256`, r: `252`, fill: `#FFF176` }), f(`circle`, { cx: `256`, cy: `256`, r: `240`, fill: `url(#cctGradient)`, filter: `url(#insetShadow)` }), f(`g`, { transform: `translate(256 280) scale(1.2) translate(-256 -256)`, children: f(`path`, { d: `M192 200c0-35 29-64 64-64s64 29 64 64c0 23.1-12.2 43.5-30.6 55.3V288c0 8.8-7.2 16-16 16h-35c-8.8 0-16-7.2-16-16v-32.7C204.2 243.5 192 223.1 192 200zm56 136h16c4.4 0 8 3.6 8 8v16h-32v-16c0-4.4 3.6-8 8-8z`, fill: `#FFF176`, stroke: `#000000`, strokeWidth: `4` }) })] });
function Zt() {
  var _a;
  let [a2, c2] = e(false), { widget: l2, widget: { data: u2 }, values: d2, getPropertyValue: g2 } = m(y), { data: _2 } = ie(``), v2 = t(null), b2 = ee(v2.current, (u2.colorLightSliderWidth || 1) * 28), x2 = t(null), S2 = t(null), C2 = t(a2), w2 = t(l2.data);
  w2.current = l2.data;
  let T2 = t(g2);
  T2.current = g2;
  let [re2, oe2] = e(false), D2 = t(false), se2 = t(false), O2 = u2.colorLightType === `rgbcct` || u2.colorLightType === `r/g/b/cct` || u2.colorLightType === `h/s/v/cct`, k2 = a2 && O2 ? `cct` : u2.colorLightType, { value: ce2, updateValue: le2 } = E(`colorLightSwitchOid`), { value: A2, hasBackendChange: j2, updateValue: ue2 } = E(`colorLightTemperatureOid`), { updateValue: M2, hasBackendChange: N2 } = E(`colorLightBrightnessOid`), { updateValue: P2, hasBackendChange: de2 } = E(`colorLightRgbHexOid`), { updateValue: fe2, hasBackendChange: F2 } = E(`colorLightRedOid`), { updateValue: pe2, hasBackendChange: I2 } = E(`colorLightGreenOid`), { updateValue: L2, hasBackendChange: R2 } = E(`colorLightBlueOid`), { updateValue: me2, hasBackendChange: z2 } = E(`colorLightHueOid`), { updateValue: B2, hasBackendChange: he2 } = E(`colorLightSaturationOid`), ge2 = ((_a = l2.data.colorLightSwitchOidObject) == null ? void 0 : _a.type) === `boolean`, _e2 = (e3, t2) => {
    Gt(e3, k2, g2, l2.data, t2);
  }, ve2 = h(() => (e3, t2) => (t2 == null ? void 0 : t2.maxValue) === 254 ? Math.round(e3 / 100 * 254) : Math.round(e3), []), ye2 = h(() => ({ cct: [{ colorProp: `kelvin`, oidField: `colorLightTemperatureOid`, setter: ue2, cctComponent: 1 }, { colorProp: `value`, oidField: `colorLightBrightnessOid`, setter: M2, normalize: true, cctComponent: 2 }], rgb: [{ colorProp: `hexString`, oidField: `colorLightRgbHexOid`, setter: P2 }], rgbcct: [{ colorProp: `hexString`, oidField: `colorLightRgbHexOid`, setter: P2 }], "r/g/b": [{ colorProp: `red`, oidField: `colorLightRedOid`, setter: fe2 }, { colorProp: `green`, oidField: `colorLightGreenOid`, setter: pe2 }, { colorProp: `blue`, oidField: `colorLightBlueOid`, setter: L2 }], "r/g/b/cct": [{ colorProp: `red`, oidField: `colorLightRedOid`, setter: fe2 }, { colorProp: `green`, oidField: `colorLightGreenOid`, setter: pe2 }, { colorProp: `blue`, oidField: `colorLightBlueOid`, setter: L2 }], "h/s/v": [{ colorProp: `hue`, oidField: `colorLightHueOid`, setter: me2, changeKey: `h` }, { colorProp: `saturation`, oidField: `colorLightSaturationOid`, setter: B2, normalize: true, changeKey: `s` }, { colorProp: `value`, oidField: `colorLightBrightnessOid`, setter: M2, normalize: true, changeKey: `v` }], "h/s/v/cct": [{ colorProp: `hue`, oidField: `colorLightHueOid`, setter: me2, changeKey: `h` }, { colorProp: `saturation`, oidField: `colorLightSaturationOid`, setter: B2, normalize: true, changeKey: `s` }, { colorProp: `value`, oidField: `colorLightBrightnessOid`, setter: M2, normalize: true, changeKey: `v` }] }), [ue2, M2, P2, fe2, pe2, L2, me2, B2]), be2 = h(() => (e3, t2, n2) => {
    if (!(!k2 || se2.current || D2.current)) {
      se2.current = true;
      try {
        let r2 = ye2[k2];
        if (!r2) return;
        r2.forEach((r3) => {
          let { colorProp: i2, oidField: a3, setter: o2, normalize: s2, cctComponent: c3, changeKey: u3 } = r3;
          if (c3 !== void 0 && t2 !== c3 || !Kt(u3, n2)) return;
          let d3 = `${a3}Object`, f2 = l2.data[d3];
          if (!f2) return;
          let p2 = e3[i2];
          s2 && typeof p2 == `number` ? p2 = ve2(p2, f2) : typeof p2 == `number` && (p2 = Math.round(p2)), p2 ??= qt(i2), o2(p2);
        }), t2 === 1 && oe2((e4) => !e4);
      } finally {
        Promise.resolve().then(() => {
          se2.current = false;
        });
      }
    }
  }, [k2, ye2, l2, ve2, se2]), xe2 = h(() => Mt(b2, u2.colorLightUIComponent, u2.colorLightSliderWidth, k2), [b2, u2.colorLightUIComponent, u2.colorLightSliderWidth, k2]), Se2 = h(() => ({ dimensions: b2, colorLightGamut: u2.colorLightGamut, colorWheelLightness: u2.colorWheelLightness, colorLightUIComponent: u2.colorLightUIComponent, colorLightSliderWidth: u2.colorLightSliderWidth, colorLightBorderWidth: u2.colorLightBorderWidth, colorLightBorderColor: u2.colorLightBorderColor, colorLightType: k2, colorLightCtMin: u2.colorLightCtMin, colorLightCtMax: u2.colorLightCtMax }), [b2, u2.colorLightGamut, u2.colorWheelLightness, u2.colorLightUIComponent, u2.colorLightSliderWidth, u2.colorLightBorderWidth, u2.colorLightBorderColor, u2.colorLightCtMin, u2.colorLightCtMax, k2]);
  return s(() => {
    if (k2 !== `cct` || !x2.current || !S2.current) return;
    let e3 = x2.current.color, t2 = S2.current.color;
    if (re2) {
      D2.current = true;
      try {
        Jt(e3, t2);
      } finally {
        D2.current = false;
      }
    }
  }, [k2, re2]), s(() => {
    if (k2 !== `cct` || !x2.current || !S2.current || !j2) return;
    let e3 = x2.current.color, t2 = S2.current.color;
    if (A2 != null) {
      D2.current = true;
      try {
        e3.kelvin = Number(A2), Jt(e3, t2);
      } finally {
        D2.current = false;
      }
    }
  }, [k2, j2, A2]), s(() => {
    if (a2 && k2 === `cct` && N2 && S2.current) {
      D2.current = true;
      try {
        Wt(S2.current.color, w2.current, T2.current);
      } finally {
        D2.current = false;
      }
    }
  }, [a2, k2, N2]), s(() => {
    if (!a2 && [`rgb`, `rgbcct`].includes(k2 || ``) && de2 && x2.current) {
      D2.current = true;
      try {
        Gt(x2.current.color, k2, g2, l2.data);
      } finally {
        D2.current = false;
      }
    }
  }, [a2, k2, de2, g2, l2.data]), s(() => {
    if (!a2 && [`r/g/b`, `r/g/b/cct`].includes(k2 || ``) && (F2 || I2 || R2) && x2.current) {
      D2.current = true;
      try {
        Gt(x2.current.color, k2, g2, l2.data);
      } finally {
        D2.current = false;
      }
    }
  }, [a2, k2, F2, I2, R2, g2, l2.data]), s(() => {
    if (!a2 && [`h/s/v`, `h/s/v/cct`].includes(k2 || ``) && (z2 || he2 || N2) && x2.current) {
      D2.current = true;
      try {
        Gt(x2.current.color, k2, g2, l2.data);
      } finally {
        D2.current = false;
      }
    }
  }, [a2, k2, z2, he2, N2, g2, l2.data]), s(() => {
    if (!a2 || !O2 || !x2.current || !S2.current) return;
    let e3 = x2.current.color, t2 = S2.current.color;
    D2.current = true;
    try {
      Ut(e3, w2.current, T2.current), C2.current === false && Number(A2) !== Number(e3.kelvin) && ue2(Number(e3.kelvin)), Jt(e3, t2);
    } finally {
      D2.current = false;
    }
  }, [a2, O2]), s(() => {
    C2.current && !a2 && O2 && x2.current && Wt(x2.current.color, w2.current, T2.current);
  }, [a2, O2]), s(() => {
    if (C2.current === true && !a2 && O2 && x2.current) {
      D2.current = true;
      try {
        Gt(x2.current.color, k2, T2.current, w2.current);
      } finally {
        D2.current = false;
      }
    }
  }, [a2, O2, k2]), s(() => {
    C2.current = a2;
  }, [a2]), p(ne, { isValidType: ge2, data: _2, children: [f(te, { data: _2, widget: l2 }), u2.colorLightType === `none` ? null : p(n, { sx: { minWidth: 0, height: `100%`, display: `flex`, flexShrink: 0, flexDirection: `column`, justifyContent: `flex-start`, alignItems: `center` }, children: [f(i, { onClick: () => {
    le2(!ce2);
  }, children: f(ae, { sx: { color: ce2 ? `red` : `green`, width: `26px`, height: `26px` } }) }), O2 && p(n, { sx: { display: `inline-block` }, children: [f(r, { orientation: `horizontal`, flexItem: true, variant: `fullWidth` }), f(i, { onClick: () => c2(false), children: f(Yt, { sx: { width: `24px`, height: `24px` } }) })] }), O2 && f(n, { sx: { display: `block` }, children: f(i, { onClick: () => c2(true), children: f(Xt, { sx: { width: `24px`, height: `24px` } }) }) })] }), f(r, { orientation: `vertical`, flexItem: true, variant: `middle` }), f(n, { ref: v2, sx: { minWidth: 0, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, p: Number(u2.colorLightPadding) || 0 }, children: Object.keys(d2).length !== 0 && b2.width !== void 0 && u2.colorLightType !== `none` && p(o, { children: [f(Rt, { cctComponentNumber: 1, ref: x2, onColorInit: _e2, onInputChange: (e3, t2) => be2(e3, 1, t2), ...Se2 }), k2 === `cct` && f(n, { sx: { ml: `${xe2}px` }, children: f(Rt, { cctComponentNumber: 2, onColorInit: _e2, onInputChange: (e3, t2) => be2(e3, 2, t2), ref: S2, ...Se2 }) })] }) })] });
}
var Qt = le(Zt), $t = class e2 extends _ {
  static getWidgetInfo() {
    return { id: `tplLight2CollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `Light2CollectionWidget`, visWidgetLabel: `light2_collection_widget`, visOrder: 11, visAttrs: [{ name: `common`, fields: [...S({ groupName: ``, allFields: true })] }, { name: `light`, label: `group_light`, fields: [...re(), ...O()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...S({ groupName: ``, allFields: false })], hidden: (e3) => !e3.colorLightButton }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-light.png` };
  }
  getWidgetInfo() {
    return e2.getWidgetInfo();
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
    let t2 = !(e3.widget.data.noCard || e3.widget.usedInWidget);
    this.wrappedCollectionContent = t2;
    let n2 = { id: e3.id, refService: e3.refService, style: e3.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: t2 };
    return T(this.wrapContent(f(Qt, {})), n2);
  }
};
export {
  $t as default
};
