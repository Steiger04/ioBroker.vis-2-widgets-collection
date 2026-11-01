import { h as _, m as A, f as xe, g as z, j as Te, e as ne, i as Q, k as ft, p as cr, l as R, q as m } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { C as Re, M as ar, B as V, f as sr, I as Le, g as vt, G as hr } from "./usePopoverPositioning-C1_MhytU.js";
import { e as j, u as mt, C as _t, k as ur, D as it, c as nt } from "./useData-jkOw5Oj_.js";
import { u as H, d as dr } from "./useValueState-BB0agxu5.js";
import { o as gr, C as pt, S as fr, g as vr } from "./CollectionBaseImage-Cm6oCVNa.js";
import { B as mr } from "./Button-CoSvBFy1.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const ot = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=", lt = { "switch.light": "colorLightSwitchOid", "level.color.rgb": "colorLightRgbHexOid", "level.color.red": "colorLightRedOid", "level.color.green": "colorLightGreenOid", "level.color.blue": "colorLightBlueOid", "level.color.hue": "colorLightHueOid", "level.color.saturation": "colorLightSaturationOid", "level.brightness": "colorLightBrightnessOid", "level.dimmer": "colorLightBrightnessOid", "level.color.temperature": "colorLightTemperatureOid", "level.color.luminance": "colorLightBrightnessOid", "level.color.white": "colorLightBrightnessOid" }, _r = async (e, r, i, t) => {
  const n = e.name;
  if (n && r[n]) {
    const o = await t.getObject(r[n]);
    if (o && o.common) {
      const l = r[n].split(".");
      l.pop();
      const c = await t.getObjectView(`${l.join(".")}.`, `${l.join(".")}.\u9999`, "state");
      if (c) {
        const s = r;
        await Promise.all(Object.values(c).map(async (u) => {
          const h = u.common.role;
          if (h && lt[h] && (!r[h] || r[h] === "nothing_selected") && n !== h) {
            const a = lt[h];
            s[a] = u._id, await gr(["boolean", "number", "string", "mixed"], a)(e, r, i, t), a === "colorLightTemperatureOid" && (!s.colorLightCtMin && u.common.min && (s.colorLightCtMin = u.common.min), !s.colorLightCtMax && u.common.max && (s.colorLightCtMax = u.common.max)), a === "colorLightSwitchOid" && (s.values_count = 2, s.value1 = true, s.alias1 = "TRUE", s.value2 = false, s.alias2 = "FALSE", s.iconSize = 0, s.iconSmall1 = ot, s.iconColor1 = "red", s.iconSize1 = 100, s.iconSmall2 = ot, s.iconColor2 = "green", s.iconSize2 = 100);
          }
        })), i(r);
      }
    }
  }
}, pr = () => [{ type: "custom", component: () => _(j, {}) }, { name: "colorLightButton", label: "color_light_button", type: "checkbox", default: false }, { name: "colorLightDelayLongPress", label: "color_light_delay_long_press", type: "number", default: 500, min: 0, max: 1e4, step: 1, hidden: "!data.colorLightButton" }, { name: "colorLightModalWidth", label: "color_light_modal_width", type: "number", min: 0, max: 5e3, step: 1, hidden: "!data.colorLightButton", tooltip: "color_light_modal_width_tooltip" }, { name: "colorLightModalHeight", label: "color_light_modal_height", type: "number", default: 300, min: 0, max: 5e3, step: 1, hidden: "!data.colorLightButton" }, { type: "custom", component: () => _(j, {}) }, { name: "colorLightSliderWidth", label: "color_light_slider_width", type: "slider", min: 0, max: 10, default: 1, step: 0.1 }, { name: "colorLightBorderWidth", label: "color_light_border_width", type: "slider", min: 0, max: 100, default: 3, step: 1 }, { name: "colorLightBorderColor", label: "color_light_border_color", type: "color" }, { name: "colorLightPadding", type: "number", label: "color_light_padding", default: 1, step: 0.5, min: 0 }, { type: "custom", component: () => _(j, {}) }, { name: "colorLightSwitchOid", type: "id", label: "color_light_switch_oid", onChange: _r }, { type: "custom", component: () => _(j, {}) }, { name: "colorLightUIComponent", type: "select", label: "color_light_ui_component", options: [{ value: "wheel", label: "Wheel" }, { value: "box", label: "Box" }, { value: "slider", label: "Slider" }], default: "wheel", noTranslation: true, hidden: (e) => e.colorLightType === "cct" || e.colorLightType === "none" }, { name: "colorWheelLightness", label: "color_wheel_lightness", type: "checkbox", default: false, hidden: (e) => e.colorLightType === "none" || e.colorLightType === "cct" || e.colorLightUIComponent !== "wheel" }, { type: "custom", component: () => _(j, {}), hidden: (e) => e.colorLightType === "cct" || e.colorLightType === "none" }, { name: "colorLightType", type: "select", label: "color_light_type", options: [{ value: "none", label: "none" }, { value: "cct", label: "cct" }, { value: "rgb", label: "rgb" }, { value: "rgbcct", label: "rgb & cct" }, { value: "r/g/b", label: "r/g/b" }, { value: "r/g/b/cct", label: "r/g/b & cct" }, { value: "h/s/v", label: "h/s/v" }, { value: "h/s/v/cct", label: "h/s/v & cct" }], default: "none", noTranslation: true }, { type: "custom", component: () => _(j, {}), hidden: (e) => e.colorLightType === "none" }, { name: "colorLightTemperatureOid", type: "id", label: "color_light_temperature_oid", hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") }, { name: "colorLightCtMin", type: "number", min: 500, max: 1e4, default: 2e3, label: "color_light_ct_min", hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") || !e.colorLightTemperatureOid }, { name: "colorLightCtMax", type: "number", min: 500, max: 1e4, default: 6500, label: "color_light_ct_max", hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") || !e.colorLightTemperatureOid }, { type: "custom", component: () => _(j, {}), hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") || e.colorLightType === "none" }, { name: "colorLightRgbHexOid", type: "id", label: "color_light_rgb_hex_oid", hidden: (e) => !["rgb", "rgbcct"].includes(e.colorLightType || "") }, { name: "colorLightRedOid", type: "id", label: "color_light_red_oid", hidden: (e) => !["r/g/b", "r/g/b/cct"].includes(e.colorLightType || "") }, { name: "colorLightGreenOid", type: "id", label: "color_light_green_oid", hidden: (e) => !["r/g/b", "r/g/b/cct"].includes(e.colorLightType || "") }, { name: "colorLightBlueOid", type: "id", label: "color_light_blue_oid", hidden: (e) => !["r/g/b", "r/g/b/cct"].includes(e.colorLightType || "") }, { name: "colorLightHueOid", type: "id", label: "color_light_hue_oid", hidden: (e) => !["h/s/v", "h/s/v/cct"].includes(e.colorLightType || "") }, { name: "colorLightSaturationOid", type: "id", label: "color_light_saturation_oid", hidden: (e) => !["h/s/v", "h/s/v/cct"].includes(e.colorLightType || "") }, { name: "colorLightBrightnessOid", type: "id", label: "color_light_brightness_oid", hidden: (e) => !["cct", "h/s/v", "h/s/v/cct"].includes(e.colorLightType || "") }];
function br({ onClick: e = () => {
}, onLongPress: r = () => {
}, ms: i = 300 } = {}) {
  const t = A(null), n = A(null), o = A(false), l = A(null), c = xe(() => {
    n.current && (o.current = true, r(n.current)), t.current = null, n.current = null;
  }, [r]), s = xe((h) => {
    l.current === null && (l.current = h.pointerId, n.current = h, o.current = false, t.current = setTimeout(c, i));
  }, [c, i]), u = xe((h) => {
    if (h.pointerId !== l.current) return;
    const a = n.current, d = o.current;
    t.current && (clearTimeout(t.current), t.current = null), !d && a && e(a), n.current = null, o.current = false, l.current = null;
  }, [e]);
  return z(() => ({ onPointerDown: s, onPointerUp: u, onPointerLeave: u, onPointerCancel: u, style: { touchAction: "manipulation" } }), [s, u]);
}
function yr(e) {
  return typeof e == "object" && e !== null && "colorLightButton" in e && "colorLightSwitchOid" in e;
}
function xr(e) {
  const r = (t) => {
    var _a;
    const n = Te(Re);
    if (!n || !n.widget) throw new Error("withButtonModal must be used within a CollectionProvider");
    const { widget: o } = n, [l, c] = ne(false), s = o.data, { value: u, updateValue: h } = H("colorLightSwitchOid"), { data: a } = mt("colorLightSwitchOid"), d = yr(s) && s.colorLightButton, f = ((_a = d ? s.colorLightSwitchOidObject : void 0) == null ? void 0 : _a.type) === "boolean", x = br({ onClick: () => h(!u), onLongPress: () => c(true), ms: d ? s.colorLightDelayLongPress ?? 500 : 500 }), L = d ? (s.colorLightSliderWidth || 1) * 28 : 28, O = d && typeof s.colorLightModalWidth == "number" && s.colorLightModalWidth > 0 ? s.colorLightModalWidth : (d && s.colorLightModalHeight || 300) + 40 + 12 + L;
    return d ? Q(ft, { children: [Q(_t, { isValidType: f, data: a, oidValue: u, children: [_(pt, { data: a, widget: o }), _(mr, { variant: "text", onPointerDown: x.onPointerDown, onPointerUp: x.onPointerUp, onPointerLeave: x.onPointerLeave, onPointerCancel: x.onPointerCancel, sx: { color: a.iconColorActive || "inherit", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", touchAction: "manipulation" }, children: _(fr, { alt: "", src: a.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", style: { width: typeof a.iconSizeOnly == "number" && `calc(100% * ${a.iconSizeOnly} / 100)` || "100%", height: typeof a.iconSizeOnly == "number" && `calc(100% * ${a.iconSizeOnly} / 100)` || "100%", objectFit: "contain", ...vr(a.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", a.iconColorActive || a.iconColor) } }) })] }), _(ar, { open: l, onClose: () => c(false), children: _(V, { sx: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: O, height: s.colorLightModalHeight || 300 }, children: _(e, { ...t }) }) })] }) : _(e, { ...t });
  }, i = e.displayName || e.name || "Component";
  return r.displayName = `withButtonModal(${i})`, r;
}
var S, le, bt, Ae, yt, D = {}, Be = [], Lr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function N(e, r) {
  for (var i in r) e[i] = r[i];
  return e;
}
function xt(e) {
  var r = e.parentNode;
  r && r.removeChild(e);
}
function y(e, r, i) {
  var t, n, o, l, c = arguments;
  if (r = N({}, r), arguments.length > 3) for (i = [i], t = 3; t < arguments.length; t++) i.push(c[t]);
  if (i != null && (r.children = i), e != null && e.defaultProps != null) for (n in e.defaultProps) r[n] === void 0 && (r[n] = e.defaultProps[n]);
  return l = r.key, (o = r.ref) != null && delete r.ref, l != null && delete r.key, Ie(e, r, l, o);
}
function Ie(e, r, i, t) {
  var n = { type: e, props: r, key: i, ref: t, __k: null, __p: null, __b: 0, __e: null, l: null, __c: null, constructor: void 0 };
  return S.vnode && S.vnode(n), n;
}
function se(e) {
  return e.children;
}
function wr(e) {
  if (e == null || typeof e == "boolean") return null;
  if (typeof e == "string" || typeof e == "number") return Ie(null, e, null, null);
  if (e.__e != null || e.__c != null) {
    var r = Ie(e.type, e.props, e.key, null);
    return r.__e = e.__e, r;
  }
  return e;
}
function ee(e, r) {
  this.props = e, this.context = r;
}
function ce(e, r) {
  if (r == null) return e.__p ? ce(e.__p, e.__p.__k.indexOf(e) + 1) : null;
  for (var i; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) return i.__e;
  return typeof e.type == "function" ? ce(e) : null;
}
function Lt(e) {
  var r, i;
  if ((e = e.__p) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, r = 0; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) {
      e.__e = e.__c.base = i.__e;
      break;
    }
    return Lt(e);
  }
}
function we(e) {
  (!e.__d && (e.__d = true) && le.push(e) === 1 || Ae !== S.debounceRendering) && (Ae = S.debounceRendering, (S.debounceRendering || bt)(Sr));
}
function Sr() {
  var e, r, i, t, n, o, l, c;
  for (le.sort(function(s, u) {
    return u.__v.__b - s.__v.__b;
  }); e = le.pop(); ) e.__d && (i = void 0, t = void 0, o = (n = (r = e).__v).__e, l = r.__P, c = r.u, r.u = false, l && (i = [], t = We(l, n, N({}, n), r.__n, l.ownerSVGElement !== void 0, null, i, c, o ?? ce(n)), St(i, n), t != o && Lt(n)));
}
function wt(e, r, i, t, n, o, l, c, s) {
  var u, h, a, d, g, p, f, x = i && i.__k || Be, L = x.length;
  if (c == D && (c = o != null ? o[0] : L ? ce(i, 0) : null), u = 0, r.__k = He(r.__k, function(v) {
    if (v != null) {
      if (v.__p = r, v.__b = r.__b + 1, (a = x[u]) === null || a && v.key == a.key && v.type === a.type) x[u] = void 0;
      else for (h = 0; h < L; h++) {
        if ((a = x[h]) && v.key == a.key && v.type === a.type) {
          x[h] = void 0;
          break;
        }
        a = null;
      }
      if (d = We(e, v, a = a || D, t, n, o, l, null, c, s), (h = v.ref) && a.ref != h && (f || (f = [])).push(h, v.__c || d, v), d != null) {
        if (p == null && (p = d), v.l != null) d = v.l, v.l = null;
        else if (o == a || d != c || d.parentNode == null) {
          e: if (c == null || c.parentNode !== e) e.appendChild(d);
          else {
            for (g = c, h = 0; (g = g.nextSibling) && h < L; h += 2) if (g == d) break e;
            e.insertBefore(d, c);
          }
          r.type == "option" && (e.value = "");
        }
        c = d.nextSibling, typeof r.type == "function" && (r.l = d);
      }
    }
    return u++, v;
  }), r.__e = p, o != null && typeof r.type != "function") for (u = o.length; u--; ) o[u] != null && xt(o[u]);
  for (u = L; u--; ) x[u] != null && Ot(x[u], x[u]);
  if (f) for (u = 0; u < f.length; u++) Ct(f[u], f[++u], f[++u]);
}
function He(e, r, i) {
  if (i == null && (i = []), e == null || typeof e == "boolean") r && i.push(r(null));
  else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) He(e[t], r, i);
  else i.push(r ? r(wr(e)) : e);
  return i;
}
function Cr(e, r, i, t, n) {
  var o;
  for (o in i) o in r || at(e, o, null, i[o], t);
  for (o in r) n && typeof r[o] != "function" || o === "value" || o === "checked" || i[o] === r[o] || at(e, o, r[o], i[o], t);
}
function ct(e, r, i) {
  r[0] === "-" ? e.setProperty(r, i) : e[r] = typeof i == "number" && Lr.test(r) === false ? i + "px" : i ?? "";
}
function at(e, r, i, t, n) {
  var o, l, c, s, u;
  if (!((r = n ? r === "className" ? "class" : r : r === "class" ? "className" : r) === "key" || r === "children")) if (r === "style") if (o = e.style, typeof i == "string") o.cssText = i;
  else {
    if (typeof t == "string" && (o.cssText = "", t = null), t) for (l in t) i && l in i || ct(o, l, "");
    if (i) for (c in i) t && i[c] === t[c] || ct(o, c, i[c]);
  }
  else r[0] === "o" && r[1] === "n" ? (s = r !== (r = r.replace(/Capture$/, "")), u = r.toLowerCase(), r = (u in e ? u : r).slice(2), i ? (t || e.addEventListener(r, st, s), (e.t || (e.t = {}))[r] = i) : e.removeEventListener(r, st, s)) : r !== "list" && r !== "tagName" && r !== "form" && !n && r in e ? e[r] = i ?? "" : typeof i != "function" && r !== "dangerouslySetInnerHTML" && (r !== (r = r.replace(/^xlink:?/, "")) ? i == null || i === false ? e.removeAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase(), i) : i == null || i === false ? e.removeAttribute(r) : e.setAttribute(r, i));
}
function st(e) {
  return this.t[e.type](S.event ? S.event(e) : e);
}
function We(e, r, i, t, n, o, l, c, s, u) {
  var h, a, d, g, p, f, x, L, v, O, w = r.type;
  if (r.constructor !== void 0) return null;
  (h = S.__b) && h(r);
  try {
    e: if (typeof w == "function") {
      if (L = r.props, v = (h = w.contextType) && t[h.__c], O = h ? v ? v.props.value : h.__p : t, i.__c ? x = (a = r.__c = i.__c).__p = a.__E : ("prototype" in w && w.prototype.render ? r.__c = a = new w(L, O) : (r.__c = a = new ee(L, O), a.constructor = w, a.render = kr), v && v.sub(a), a.props = L, a.state || (a.state = {}), a.context = O, a.__n = t, d = a.__d = true, a.__h = []), a.__s == null && (a.__s = a.state), w.getDerivedStateFromProps != null && N(a.__s == a.state ? a.__s = N({}, a.__s) : a.__s, w.getDerivedStateFromProps(L, a.__s)), d) w.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), a.componentDidMount != null && l.push(a);
      else {
        if (w.getDerivedStateFromProps == null && c == null && a.componentWillReceiveProps != null && a.componentWillReceiveProps(L, O), !c && a.shouldComponentUpdate != null && a.shouldComponentUpdate(L, a.__s, O) === false) {
          for (a.props = L, a.state = a.__s, a.__d = false, a.__v = r, r.__e = s != null ? s !== i.__e ? s : i.__e : null, r.__k = i.__k, h = 0; h < r.__k.length; h++) r.__k[h] && (r.__k[h].__p = r);
          break e;
        }
        a.componentWillUpdate != null && a.componentWillUpdate(L, a.__s, O);
      }
      for (g = a.props, p = a.state, a.context = O, a.props = L, a.state = a.__s, (h = S.__r) && h(r), a.__d = false, a.__v = r, a.__P = e, h = a.render(a.props, a.state, a.context), r.__k = He(h != null && h.type == se && h.key == null ? h.props.children : h), a.getChildContext != null && (t = N(N({}, t), a.getChildContext())), d || a.getSnapshotBeforeUpdate == null || (f = a.getSnapshotBeforeUpdate(g, p)), wt(e, r, i, t, n, o, l, s, u), a.base = r.__e; h = a.__h.pop(); ) a.__s && (a.state = a.__s), h.call(a);
      d || g == null || a.componentDidUpdate == null || a.componentDidUpdate(g, p, f), x && (a.__E = a.__p = null);
    } else r.__e = Or(i.__e, r, i, t, n, o, l, u);
    (h = S.diffed) && h(r);
  } catch (b) {
    S.__e(b, r, i);
  }
  return r.__e;
}
function St(e, r) {
  for (var i; i = e.pop(); ) try {
    i.componentDidMount();
  } catch (t) {
    S.__e(t, i.__v);
  }
  S.__c && S.__c(r);
}
function Or(e, r, i, t, n, o, l, c) {
  var s, u, h, a, d = i.props, g = r.props;
  if (n = r.type === "svg" || n, e == null && o != null) {
    for (s = 0; s < o.length; s++) if ((u = o[s]) != null && (r.type === null ? u.nodeType === 3 : u.localName === r.type)) {
      e = u, o[s] = null;
      break;
    }
  }
  if (e == null) {
    if (r.type === null) return document.createTextNode(g);
    e = n ? document.createElementNS("http://www.w3.org/2000/svg", r.type) : document.createElement(r.type), o = null;
  }
  return r.type === null ? d !== g && (o != null && (o[o.indexOf(e)] = null), e.data = g) : r !== i && (o != null && (o = Be.slice.call(e.childNodes)), h = (d = i.props || D).dangerouslySetInnerHTML, a = g.dangerouslySetInnerHTML, c || (a || h) && (a && h && a.__html == h.__html || (e.innerHTML = a && a.__html || "")), Cr(e, g, d, n, c), r.__k = r.props.children, a || wt(e, r, i, t, r.type !== "foreignObject" && n, o, l, D, c), c || ("value" in g && g.value !== void 0 && g.value !== e.value && (e.value = g.value == null ? "" : g.value), "checked" in g && g.checked !== void 0 && g.checked !== e.checked && (e.checked = g.checked))), e;
}
function Ct(e, r, i) {
  try {
    typeof e == "function" ? e(r) : e.current = r;
  } catch (t) {
    S.__e(t, i);
  }
}
function Ot(e, r, i) {
  var t, n, o;
  if (S.unmount && S.unmount(e), (t = e.ref) && Ct(t, null, r), i || typeof e.type == "function" || (i = (n = e.__e) != null), e.__e = e.l = null, (t = e.__c) != null) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      S.__e(l, r);
    }
    t.base = t.__P = null;
  }
  if (t = e.__k) for (o = 0; o < t.length; o++) t[o] && Ot(t[o], r, i);
  n != null && xt(n);
}
function kr(e, r, i) {
  return this.constructor(e, i);
}
function Ar(e, r, i) {
  var t, n, o;
  S.__p && S.__p(e, r), n = (t = i === yt) ? null : r.__k, e = y(se, null, [e]), o = [], We(r, r.__k = e, n || D, D, r.ownerSVGElement !== void 0, n ? null : Be.slice.call(r.childNodes), o, false, D, t), St(o, e);
}
S = {}, ee.prototype.setState = function(e, r) {
  var i = this.__s !== this.state && this.__s || (this.__s = N({}, this.state));
  (typeof e != "function" || (e = e(i, this.props))) && N(i, e), e != null && this.__v && (this.u = false, r && this.__h.push(r), we(this));
}, ee.prototype.forceUpdate = function(e) {
  this.__v && (e && this.__h.push(e), this.u = true, we(this));
}, ee.prototype.render = se, le = [], bt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ae = S.debounceRendering, S.__e = function(e, r, i) {
  for (var t; r = r.__p; ) if ((t = r.__c) && !t.__p) try {
    if (t.constructor && t.constructor.getDerivedStateFromError != null) t.setState(t.constructor.getDerivedStateFromError(e));
    else {
      if (t.componentDidCatch == null) continue;
      t.componentDidCatch(e);
    }
    return we(t.__E = t);
  } catch (n) {
    e = n;
  }
  throw e;
}, yt = D;
function Ir(e, r) {
  for (var i = 0; i < r.length; i++) {
    var t = r[i];
    t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(e, t.key, t);
  }
}
function Mr(e, r, i) {
  return r && Ir(e.prototype, r), e;
}
function P() {
  return P = Object.assign || function(e) {
    for (var r = arguments, i = 1; i < arguments.length; i++) {
      var t = r[i];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, P.apply(this, arguments);
}
var Er = "[-\\+]?\\d+%?", Pr = "[-\\+]?\\d*\\.\\d+%?", $ = "(?:" + Pr + ")|(?:" + Er + ")", kt = "[\\s|\\(]+(" + $ + ")[,|\\s]+(" + $ + ")[,|\\s]+(" + $ + ")\\s*\\)?", At = "[\\s|\\(]+(" + $ + ")[,|\\s]+(" + $ + ")[,|\\s]+(" + $ + ")[,|\\s]+(" + $ + ")\\s*\\)?", Tr = new RegExp("rgb" + kt), Rr = new RegExp("rgba" + At), Br = new RegExp("hsl" + kt), Hr = new RegExp("hsla" + At), he = "^(?:#?|0x?)", G = "([0-9a-fA-F]{1})", U = "([0-9a-fA-F]{2})", Wr = new RegExp(he + G + G + G + "$"), zr = new RegExp(he + G + G + G + G + "$"), Nr = new RegExp(he + U + U + U + "$"), Dr = new RegExp(he + U + U + U + U + "$"), jr = 2e3, Fr = 4e4, ie = Math.log, q = Math.round, te = Math.floor;
function T(e, r, i) {
  return Math.min(Math.max(e, r), i);
}
function M(e, r) {
  var i = e.indexOf("%") > -1, t = parseFloat(e);
  return i ? r / 100 * t : t;
}
function E(e) {
  return parseInt(e, 16);
}
function F(e) {
  return e.toString(16).padStart(2, "0");
}
var J = (function() {
  function e(i, t) {
    this.$ = { h: 0, s: 0, v: 0, a: 1 }, i && this.set(i), this.onChange = t, this.initialValue = P({}, this.$);
  }
  var r = e.prototype;
  return r.set = function(t) {
    if (typeof t == "string") /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t);
    else if (typeof t == "object") t instanceof e ? this.hsva = t.hsva : "r" in t && "g" in t && "b" in t ? this.rgb = t : "h" in t && "s" in t && "v" in t ? this.hsv = t : "h" in t && "s" in t && "l" in t ? this.hsl = t : "kelvin" in t && (this.kelvin = t.kelvin);
    else throw new Error("Invalid color value");
  }, r.setChannel = function(t, n, o) {
    var l;
    this[t] = P({}, this[t], (l = {}, l[n] = o, l));
  }, r.reset = function() {
    this.hsva = this.initialValue;
  }, r.clone = function() {
    return new e(this);
  }, r.unbind = function() {
    this.onChange = void 0;
  }, e.hsvToRgb = function(t) {
    var n = t.h / 60, o = t.s / 100, l = t.v / 100, c = te(n), s = n - c, u = l * (1 - o), h = l * (1 - s * o), a = l * (1 - (1 - s) * o), d = c % 6, g = [l, h, u, u, a, l][d], p = [a, l, l, h, u, u][d], f = [u, u, a, l, l, h][d];
    return { r: T(g * 255, 0, 255), g: T(p * 255, 0, 255), b: T(f * 255, 0, 255) };
  }, e.rgbToHsv = function(t) {
    var n = t.r / 255, o = t.g / 255, l = t.b / 255, c = Math.max(n, o, l), s = Math.min(n, o, l), u = c - s, h = 0, a = c, d = c === 0 ? 0 : u / c;
    switch (c) {
      case s:
        h = 0;
        break;
      case n:
        h = (o - l) / u + (o < l ? 6 : 0);
        break;
      case o:
        h = (l - n) / u + 2;
        break;
      case l:
        h = (n - o) / u + 4;
        break;
    }
    return { h: h * 60 % 360, s: T(d * 100, 0, 100), v: T(a * 100, 0, 100) };
  }, e.hsvToHsl = function(t) {
    var n = t.s / 100, o = t.v / 100, l = (2 - n) * o, c = l <= 1 ? l : 2 - l, s = c < 1e-9 ? 0 : n * o / c;
    return { h: t.h, s: T(s * 100, 0, 100), l: T(l * 50, 0, 100) };
  }, e.hslToHsv = function(t) {
    var n = t.l * 2, o = t.s * (n <= 100 ? n : 200 - n) / 100, l = n + o < 1e-9 ? 0 : 2 * o / (n + o);
    return { h: t.h, s: T(l * 100, 0, 100), v: T((n + o) / 2, 0, 100) };
  }, e.kelvinToRgb = function(t) {
    var n = t / 100, o, l, c;
    return n < 66 ? (o = 255, l = -155.25485562709179 - 0.44596950469579133 * (l = n - 2) + 104.49216199393888 * ie(l), c = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (c = n - 10) + 115.67994401066147 * ie(c)) : (o = 351.97690566805693 + 0.114206453784165 * (o = n - 55) - 40.25366309332127 * ie(o), l = 325.4494125711974 + 0.07943456536662342 * (l = n - 50) - 28.0852963507957 * ie(l), c = 255), { r: T(te(o), 0, 255), g: T(te(l), 0, 255), b: T(te(c), 0, 255) };
  }, e.rgbToKelvin = function(t) {
    for (var n = t.r, o = t.b, l = 0.4, c = jr, s = Fr, u; s - c > l; ) {
      u = (s + c) * 0.5;
      var h = e.kelvinToRgb(u);
      h.b / h.r >= o / n ? s = u : c = u;
    }
    return u;
  }, Mr(e, [{ key: "hsv", get: function() {
    var t = this.$;
    return { h: t.h, s: t.s, v: t.v };
  }, set: function(t) {
    var n = this.$;
    if (t = P({}, n, t), this.onChange) {
      var o = { h: false, v: false, s: false, a: false };
      for (var l in n) o[l] = t[l] != n[l];
      this.$ = t, (o.h || o.s || o.v || o.a) && this.onChange(this, o);
    } else this.$ = t;
  } }, { key: "hsva", get: function() {
    return P({}, this.$);
  }, set: function(t) {
    this.hsv = t;
  } }, { key: "hue", get: function() {
    return this.$.h;
  }, set: function(t) {
    this.hsv = { h: t };
  } }, { key: "saturation", get: function() {
    return this.$.s;
  }, set: function(t) {
    this.hsv = { s: t };
  } }, { key: "value", get: function() {
    return this.$.v;
  }, set: function(t) {
    this.hsv = { v: t };
  } }, { key: "alpha", get: function() {
    return this.$.a;
  }, set: function(t) {
    this.hsv = P({}, this.hsv, { a: t });
  } }, { key: "kelvin", get: function() {
    return e.rgbToKelvin(this.rgb);
  }, set: function(t) {
    this.rgb = e.kelvinToRgb(t);
  } }, { key: "red", get: function() {
    var t = this.rgb;
    return t.r;
  }, set: function(t) {
    this.rgb = P({}, this.rgb, { r: t });
  } }, { key: "green", get: function() {
    var t = this.rgb;
    return t.g;
  }, set: function(t) {
    this.rgb = P({}, this.rgb, { g: t });
  } }, { key: "blue", get: function() {
    var t = this.rgb;
    return t.b;
  }, set: function(t) {
    this.rgb = P({}, this.rgb, { b: t });
  } }, { key: "rgb", get: function() {
    var t = e.hsvToRgb(this.$), n = t.r, o = t.g, l = t.b;
    return { r: q(n), g: q(o), b: q(l) };
  }, set: function(t) {
    this.hsv = P({}, e.rgbToHsv(t), { a: t.a === void 0 ? 1 : t.a });
  } }, { key: "rgba", get: function() {
    return P({}, this.rgb, { a: this.alpha });
  }, set: function(t) {
    this.rgb = t;
  } }, { key: "hsl", get: function() {
    var t = e.hsvToHsl(this.$), n = t.h, o = t.s, l = t.l;
    return { h: q(n), s: q(o), l: q(l) };
  }, set: function(t) {
    this.hsv = P({}, e.hslToHsv(t), { a: t.a === void 0 ? 1 : t.a });
  } }, { key: "hsla", get: function() {
    return P({}, this.hsl, { a: this.alpha });
  }, set: function(t) {
    this.hsl = t;
  } }, { key: "rgbString", get: function() {
    var t = this.rgb;
    return "rgb(" + t.r + ", " + t.g + ", " + t.b + ")";
  }, set: function(t) {
    var n, o, l, c, s = 1;
    if ((n = Tr.exec(t)) ? (o = M(n[1], 255), l = M(n[2], 255), c = M(n[3], 255)) : (n = Rr.exec(t)) && (o = M(n[1], 255), l = M(n[2], 255), c = M(n[3], 255), s = M(n[4], 1)), n) this.rgb = { r: o, g: l, b: c, a: s };
    else throw new Error("Invalid rgb string");
  } }, { key: "rgbaString", get: function() {
    var t = this.rgba;
    return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
  }, set: function(t) {
    this.rgbString = t;
  } }, { key: "hexString", get: function() {
    var t = this.rgb;
    return "#" + F(t.r) + F(t.g) + F(t.b);
  }, set: function(t) {
    var n, o, l, c, s = 255;
    if ((n = Wr.exec(t)) ? (o = E(n[1]) * 17, l = E(n[2]) * 17, c = E(n[3]) * 17) : (n = zr.exec(t)) ? (o = E(n[1]) * 17, l = E(n[2]) * 17, c = E(n[3]) * 17, s = E(n[4]) * 17) : (n = Nr.exec(t)) ? (o = E(n[1]), l = E(n[2]), c = E(n[3])) : (n = Dr.exec(t)) && (o = E(n[1]), l = E(n[2]), c = E(n[3]), s = E(n[4])), n) this.rgb = { r: o, g: l, b: c, a: s / 255 };
    else throw new Error("Invalid hex string");
  } }, { key: "hex8String", get: function() {
    var t = this.rgba;
    return "#" + F(t.r) + F(t.g) + F(t.b) + F(te(t.a * 255));
  }, set: function(t) {
    this.hexString = t;
  } }, { key: "hslString", get: function() {
    var t = this.hsl;
    return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
  }, set: function(t) {
    var n, o, l, c, s = 1;
    if ((n = Br.exec(t)) ? (o = M(n[1], 360), l = M(n[2], 100), c = M(n[3], 100)) : (n = Hr.exec(t)) && (o = M(n[1], 360), l = M(n[2], 100), c = M(n[3], 100), s = M(n[4], 1)), n) this.hsl = { h: o, s: l, l: c, a: s };
    else throw new Error("Invalid hsl string");
  } }, { key: "hslaString", get: function() {
    var t = this.hsla;
    return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
  }, set: function(t) {
    this.hslString = t;
  } }]), e;
})(), Vr = { sliderShape: "bar", sliderType: "value", minTemperature: 2200, maxTemperature: 11e3 };
function ze(e) {
  var r, i = e.width, t = e.sliderSize, n = e.borderWidth, o = e.handleRadius, l = e.padding, c = e.sliderShape, s = e.layoutDirection === "horizontal";
  return t = (r = t) != null ? r : l * 2 + o * 2, c === "circle" ? { handleStart: e.padding + e.handleRadius, handleRange: i - l * 2 - o * 2, width: i, height: i, cx: i / 2, cy: i / 2, radius: i / 2 - n / 2 } : { handleStart: t / 2, handleRange: i - t, radius: t / 2, x: 0, y: 0, width: s ? t : i, height: s ? i : t };
}
function $r(e, r) {
  var i = r.hsva, t = r.rgb;
  switch (e.sliderType) {
    case "red":
      return t.r / 2.55;
    case "green":
      return t.g / 2.55;
    case "blue":
      return t.b / 2.55;
    case "alpha":
      return i.a * 100;
    case "kelvin":
      var n = e.minTemperature, o = e.maxTemperature, l = o - n, c = (r.kelvin - n) / l * 100;
      return Math.max(0, Math.min(c, 100));
    case "hue":
      return i.h /= 3.6;
    case "saturation":
      return i.s;
    default:
      return i.v;
  }
}
function Gr(e, r, i) {
  var t = ze(e), n = t.handleRange, o = t.handleStart, l;
  e.layoutDirection === "horizontal" ? l = -1 * i + n + o : l = r - o, l = Math.max(Math.min(l, n), 0);
  var c = Math.round(100 / n * l);
  switch (e.sliderType) {
    case "kelvin":
      var s = e.minTemperature, u = e.maxTemperature, h = u - s;
      return s + h * (c / 100);
    case "alpha":
      return c / 100;
    case "hue":
      return c * 3.6;
    case "red":
    case "blue":
    case "green":
      return c * 2.55;
    default:
      return c;
  }
}
function Ur(e, r) {
  var i = ze(e), t = i.width, n = i.height, o = i.handleRange, l = i.handleStart, c = e.layoutDirection === "horizontal", s = $r(e, r), u = c ? t / 2 : n / 2, h = l + s / 100 * o;
  return c && (h = -1 * h + o + l * 2), { x: c ? u : h, y: c ? h : u };
}
function Xr(e, r) {
  var i = r.hsv, t = r.rgb;
  switch (e.sliderType) {
    case "red":
      return [[0, "rgb(0," + t.g + "," + t.b + ")"], [100, "rgb(255," + t.g + "," + t.b + ")"]];
    case "green":
      return [[0, "rgb(" + t.r + ",0," + t.b + ")"], [100, "rgb(" + t.r + ",255," + t.b + ")"]];
    case "blue":
      return [[0, "rgb(" + t.r + "," + t.g + ",0)"], [100, "rgb(" + t.r + "," + t.g + ",255)"]];
    case "alpha":
      return [[0, "rgba(" + t.r + "," + t.g + "," + t.b + ",0)"], [100, "rgb(" + t.r + "," + t.g + "," + t.b + ")"]];
    case "kelvin":
      for (var n = [], o = e.minTemperature, l = e.maxTemperature, c = 8, s = l - o, u = o, h = 0; u < l; u += s / c, h += 1) {
        var a = J.kelvinToRgb(u), d = a.r, g = a.g, p = a.b;
        n.push([100 / c * h, "rgb(" + d + "," + g + "," + p + ")"]);
      }
      return n;
    case "hue":
      return [[0, "#f00"], [16.666, "#ff0"], [33.333, "#0f0"], [50, "#0ff"], [66.666, "#00f"], [83.333, "#f0f"], [100, "#f00"]];
    case "saturation":
      var f = J.hsvToHsl({ h: i.h, s: 0, v: i.v }), x = J.hsvToHsl({ h: i.h, s: 100, v: i.v });
      return [[0, "hsl(" + f.h + "," + f.s + "%," + f.l + "%)"], [100, "hsl(" + x.h + "," + x.s + "%," + x.l + "%)"]];
    default:
      var L = J.hsvToHsl({ h: i.h, s: i.s, v: 100 });
      return [[0, "#000"], [100, "hsl(" + L.h + "," + L.s + "%," + L.l + "%)"]];
  }
}
var It = Math.PI * 2, Kr = function(r, i) {
  return (r % i + i) % i;
}, Mt = function(r, i) {
  return Math.sqrt(r * r + i * i);
};
function Et(e) {
  return e.width / 2 - e.padding - e.handleRadius - e.borderWidth;
}
function Yr(e, r, i) {
  var t = ue(e), n = t.cx, o = t.cy, l = e.width / 2;
  return Mt(n - r, o - i) < l;
}
function ue(e) {
  var r = e.width / 2;
  return { width: e.width, radius: r - e.borderWidth, cx: r, cy: r };
}
function Pt(e, r, i) {
  var t = e.wheelAngle, n = e.wheelDirection;
  return i && n === "clockwise" ? r = t + r : n === "clockwise" ? r = 360 - t + r : i && n === "anticlockwise" ? r = t + 180 - r : n === "anticlockwise" && (r = t - r), Kr(r, 360);
}
function qr(e, r) {
  var i = r.hsv, t = ue(e), n = t.cx, o = t.cy, l = Et(e), c = (180 + Pt(e, i.h, true)) * (It / 360), s = i.s / 100 * l, u = e.wheelDirection === "clockwise" ? -1 : 1;
  return { x: n + s * Math.cos(c) * u, y: o + s * Math.sin(c) * u };
}
function ht(e, r, i) {
  var t = ue(e), n = t.cx, o = t.cy, l = Et(e);
  r = n - r, i = o - i;
  var c = Pt(e, Math.atan2(-i, -r) * (360 / It)), s = Math.min(Mt(r, i), l);
  return { h: Math.round(c), s: Math.round(100 / l * s) };
}
function Ne(e) {
  var r = e.width, i = e.boxHeight, t = e.padding, n = e.handleRadius;
  return { width: r, height: i ?? r, radius: t + n };
}
function ut(e, r, i) {
  var t = Ne(e), n = t.width, o = t.height, l = t.radius, c = l, s = n - l * 2, u = o - l * 2, h = (r - c) / s * 100, a = (i - c) / u * 100;
  return { s: Math.max(0, Math.min(h, 100)), v: Math.max(0, Math.min(100 - a, 100)) };
}
function Qr(e, r) {
  var i = Ne(e), t = i.width, n = i.height, o = i.radius, l = r.hsv, c = o, s = t - o * 2, u = n - o * 2;
  return { x: c + l.s / 100 * s, y: c + (u - l.v / 100 * u) };
}
function Jr(e, r) {
  var i = r.hue;
  return [[[0, "#fff"], [100, "hsl(" + i + ",100%,50%)"]], [[0, "rgba(0,0,0,0)"], [100, "#000"]]];
}
var Se;
function Zr(e) {
  Se || (Se = document.getElementsByTagName("base"));
  var r = window.navigator.userAgent, i = /^((?!chrome|android).)*safari/i.test(r), t = /iPhone|iPod|iPad/i.test(r), n = window.location;
  return (i || t) && Se.length > 0 ? n.protocol + "//" + n.host + n.pathname + n.search + e : e;
}
function Tt(e, r, i, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n].x - r, l = t[n].y - i, c = Math.sqrt(o * o + l * l);
    if (c < e.handleRadius) return n;
  }
  return null;
}
function De(e) {
  return { boxSizing: "border-box", border: e.borderWidth + "px solid " + e.borderColor };
}
function Me(e, r, i) {
  return e + "-gradient(" + r + ", " + i.map(function(t) {
    var n = t[0], o = t[1];
    return o + " " + n + "%";
  }).join(",") + ")";
}
function I(e) {
  return typeof e == "string" ? e : e + "px";
}
var ei = { width: 300, height: 300, color: "#fff", colors: [], padding: 6, layoutDirection: "vertical", borderColor: "#fff", borderWidth: 0, handleRadius: 8, activeHandleRadius: null, handleSvg: null, handleProps: { x: 0, y: 0 }, wheelLightness: true, wheelAngle: 0, wheelDirection: "anticlockwise", sliderSize: null, sliderMargin: 12, boxHeight: null }, dt = ["mousemove", "touchmove", "mouseup", "touchend"], de = (function(e) {
  function r(i) {
    e.call(this, i), this.uid = (Math.random() + 1).toString(36).substring(5);
  }
  return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.render = function(t) {
    var n = this.handleEvent.bind(this), o = { onMouseDown: n, ontouchstart: n }, l = t.layoutDirection === "horizontal", c = t.margin === null ? t.sliderMargin : t.margin, s = { overflow: "visible", display: l ? "inline-block" : "block" };
    return t.index > 0 && (s[l ? "marginLeft" : "marginTop"] = c), y(se, null, t.children(this.uid, o, s));
  }, r.prototype.handleEvent = function(t) {
    var n = this, o = this.props.onInput, l = this.base.getBoundingClientRect();
    t.preventDefault();
    var c = t.touches ? t.changedTouches[0] : t, s = c.clientX - l.left, u = c.clientY - l.top;
    switch (t.type) {
      case "mousedown":
      case "touchstart":
        var h = o(s, u, 0);
        h !== false && dt.forEach(function(a) {
          document.addEventListener(a, n, { passive: false });
        });
        break;
      case "mousemove":
      case "touchmove":
        o(s, u, 1);
        break;
      case "mouseup":
      case "touchend":
        o(s, u, 2), dt.forEach(function(a) {
          document.removeEventListener(a, n, { passive: false });
        });
        break;
    }
  }, r;
})(ee);
function X(e) {
  var r = e.r, i = e.url, t = r, n = r;
  return y("svg", { className: "IroHandle IroHandle--" + e.index + " " + (e.isActive ? "IroHandle--isActive" : ""), style: { "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0);", transform: "translate(" + I(e.x) + ", " + I(e.y) + ")", willChange: "transform", top: I(-r), left: I(-r), width: I(r * 2), height: I(r * 2), position: "absolute", overflow: "visible" } }, i && y("use", Object.assign({ xlinkHref: Zr(i) }, e.props)), !i && y("circle", { cx: t, cy: n, r, fill: "none", "stroke-width": 2, stroke: "#000" }), !i && y("circle", { cx: t, cy: n, r: r - 2, fill: e.fill, "stroke-width": 2, stroke: "#fff" }));
}
X.defaultProps = { fill: "none", x: 0, y: 0, r: 8, url: null, props: { x: 0, y: 0 } };
function ae(e) {
  var r = e.activeIndex, i = r !== void 0 && r < e.colors.length ? e.colors[r] : e.color, t = ze(e), n = t.width, o = t.height, l = t.radius, c = Ur(e, i), s = Xr(e, i);
  function u(h, a, d) {
    var g = Gr(e, h, a);
    e.parent.inputActive = true, i[e.sliderType] = g, e.onInput(d, e.id);
  }
  return y(de, Object.assign({}, e, { onInput: u }), function(h, a, d) {
    return y("div", Object.assign({}, a, { className: "IroSlider", style: Object.assign({}, { position: "relative", width: I(n), height: I(o), borderRadius: I(l), background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)", backgroundSize: "8px 8px" }, d) }), y("div", { className: "IroSliderGradient", style: Object.assign({}, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: I(l), background: Me("linear", e.layoutDirection === "horizontal" ? "to top" : "to right", s) }, De(e)) }), y(X, { isActive: true, index: i.index, r: e.handleRadius, url: e.handleSvg, props: e.handleProps, x: c.x, y: c.y }));
  });
}
ae.defaultProps = Object.assign({}, Vr);
function ti(e) {
  var r = Ne(e), i = r.width, t = r.height, n = r.radius, o = e.colors, l = e.parent, c = e.activeIndex, s = c !== void 0 && c < e.colors.length ? e.colors[c] : e.color, u = Jr(e, s), h = o.map(function(d) {
    return Qr(e, d);
  });
  function a(d, g, p) {
    if (p === 0) {
      var f = Tt(e, d, g, h);
      f !== null ? l.setActiveColor(f) : (l.inputActive = true, s.hsv = ut(e, d, g), e.onInput(p, e.id));
    } else p === 1 && (l.inputActive = true, s.hsv = ut(e, d, g));
    e.onInput(p, e.id);
  }
  return y(de, Object.assign({}, e, { onInput: a }), function(d, g, p) {
    return y("div", Object.assign({}, g, { className: "IroBox", style: Object.assign({}, { width: I(i), height: I(t), position: "relative" }, p) }), y("div", { className: "IroBox", style: Object.assign({}, { width: "100%", height: "100%", borderRadius: I(n) }, De(e), { background: Me("linear", "to bottom", u[1]) + "," + Me("linear", "to right", u[0]) }) }), o.filter(function(f) {
      return f !== s;
    }).map(function(f) {
      return y(X, { isActive: false, index: f.index, fill: f.hslString, r: e.handleRadius, url: e.handleSvg, props: e.handleProps, x: h[f.index].x, y: h[f.index].y });
    }), y(X, { isActive: true, index: s.index, fill: s.hslString, r: e.activeHandleRadius || e.handleRadius, url: e.handleSvg, props: e.handleProps, x: h[s.index].x, y: h[s.index].y }));
  });
}
var ri = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)", ii = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
function Rt(e) {
  var r = ue(e), i = r.width, t = e.colors;
  e.borderWidth;
  var n = e.parent, o = e.color, l = o.hsv, c = t.map(function(h) {
    return qr(e, h);
  }), s = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", boxSizing: "border-box" };
  function u(h, a, d) {
    if (d === 0) {
      if (!Yr(e, h, a)) return false;
      var g = Tt(e, h, a, c);
      g !== null ? n.setActiveColor(g) : (n.inputActive = true, o.hsv = ht(e, h, a), e.onInput(d, e.id));
    } else d === 1 && (n.inputActive = true, o.hsv = ht(e, h, a));
    e.onInput(d, e.id);
  }
  return y(de, Object.assign({}, e, { onInput: u }), function(h, a, d) {
    return y("div", Object.assign({}, a, { className: "IroWheel", style: Object.assign({}, { width: I(i), height: I(i), position: "relative" }, d) }), y("div", { className: "IroWheelHue", style: Object.assign({}, s, { transform: "rotateZ(" + (e.wheelAngle + 90) + "deg)", background: e.wheelDirection === "clockwise" ? ri : ii }) }), y("div", { className: "IroWheelSaturation", style: Object.assign({}, s, { background: "radial-gradient(circle closest-side, #fff, transparent)" }) }), e.wheelLightness && y("div", { className: "IroWheelLightness", style: Object.assign({}, s, { background: "#000", opacity: 1 - l.v / 100 }) }), y("div", { className: "IroWheelBorder", style: Object.assign({}, s, De(e)) }), t.filter(function(g) {
      return g !== o;
    }).map(function(g) {
      return y(X, { isActive: false, index: g.index, fill: g.hslString, r: e.handleRadius, url: e.handleSvg, props: e.handleProps, x: c[g.index].x, y: c[g.index].y });
    }), y(X, { isActive: true, index: o.index, fill: o.hslString, r: e.activeHandleRadius || e.handleRadius, url: e.handleSvg, props: e.handleProps, x: c[o.index].x, y: c[o.index].y }));
  });
}
function ni(e) {
  var r = function(i, t) {
    var n, o = document.createElement("div");
    Ar(y(e, Object.assign({}, { ref: function(c) {
      return n = c;
    } }, t)), o);
    function l() {
      var c = i instanceof Element ? i : document.querySelector(i);
      c.appendChild(n.base), n.onMount(c);
    }
    return document.readyState !== "loading" ? l() : document.addEventListener("DOMContentLoaded", l), n;
  };
  return r.prototype = e.prototype, Object.assign(r, e), r.__component = e, r;
}
var Bt = (function(e) {
  function r(i) {
    var t = this;
    e.call(this, i), this.colors = [], this.inputActive = false, this.events = {}, this.activeEvents = {}, this.deferredEvents = {}, this.id = i.id;
    var n = i.colors.length > 0 ? i.colors : [i.color];
    n.forEach(function(o) {
      return t.addColor(o);
    }), this.setActiveColor(0), this.state = Object.assign({}, i, { color: this.color, colors: this.colors, layout: i.layout });
  }
  return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.addColor = function(t, n) {
    n === void 0 && (n = this.colors.length);
    var o = new J(t, this.onColorChange.bind(this));
    this.colors.splice(n, 0, o), this.colors.forEach(function(l, c) {
      return l.index = c;
    }), this.state && this.setState({ colors: this.colors }), this.deferredEmit("color:init", o);
  }, r.prototype.removeColor = function(t) {
    var n = this.colors.splice(t, 1)[0];
    n.unbind(), this.colors.forEach(function(o, l) {
      return o.index = l;
    }), this.state && this.setState({ colors: this.colors }), n.index === this.color.index && this.setActiveColor(0), this.emit("color:remove", n);
  }, r.prototype.setActiveColor = function(t) {
    this.color = this.colors[t], this.state && this.setState({ color: this.color }), this.emit("color:setActive", this.color);
  }, r.prototype.setColors = function(t, n) {
    var o = this;
    n === void 0 && (n = 0), this.colors.forEach(function(l) {
      return l.unbind();
    }), this.colors = [], t.forEach(function(l) {
      return o.addColor(l);
    }), this.setActiveColor(n), this.emit("color:setAll", this.colors);
  }, r.prototype.on = function(t, n) {
    var o = this, l = this.events;
    (Array.isArray(t) ? t : [t]).forEach(function(c) {
      (l[c] || (l[c] = [])).push(n), o.deferredEvents[c] && (o.deferredEvents[c].forEach(function(s) {
        n.apply(null, s);
      }), o.deferredEvents[c] = []);
    });
  }, r.prototype.off = function(t, n) {
    var o = this;
    (Array.isArray(t) ? t : [t]).forEach(function(l) {
      var c = o.events[l];
      c && c.splice(c.indexOf(n), 1);
    });
  }, r.prototype.emit = function(t) {
    for (var n = this, o = [], l = arguments.length - 1; l-- > 0; ) o[l] = arguments[l + 1];
    var c = this.activeEvents, s = c.hasOwnProperty(t) ? c[t] : false;
    if (!s) {
      c[t] = true;
      var u = this.events[t] || [];
      u.forEach(function(h) {
        return h.apply(n, o);
      }), c[t] = false;
    }
  }, r.prototype.deferredEmit = function(t) {
    for (var n, o = [], l = arguments.length - 1; l-- > 0; ) o[l] = arguments[l + 1];
    var c = this.deferredEvents;
    (n = this).emit.apply(n, [t].concat(o)), (c[t] || (c[t] = [])).push(o);
  }, r.prototype.setOptions = function(t) {
    this.setState(t);
  }, r.prototype.resize = function(t) {
    this.setOptions({ width: t });
  }, r.prototype.reset = function() {
    this.colors.forEach(function(t) {
      return t.reset();
    }), this.setState({ colors: this.colors });
  }, r.prototype.onMount = function(t) {
    this.el = t, this.deferredEmit("mount", this);
  }, r.prototype.onColorChange = function(t, n) {
    this.setState({ color: this.color }), this.inputActive && (this.inputActive = false, this.emit("input:change", t, n)), this.emit("color:change", t, n);
  }, r.prototype.emitInputEvent = function(t, n) {
    t === 0 ? this.emit("input:start", this.color, n) : t === 1 ? this.emit("input:move", this.color, n) : t === 2 && this.emit("input:end", this.color, n);
  }, r.prototype.render = function(t, n) {
    var o = this, l = n.layout;
    return Array.isArray(l) || (l = [{ component: Rt }, { component: ae }], n.transparency && l.push({ component: ae, options: { sliderType: "alpha" } })), y("div", { class: "IroColorPicker", id: n.id, style: { display: n.display } }, l.map(function(c, s) {
      var u = c.component, h = c.options;
      return y(u, Object.assign({}, n, h, { ref: void 0, onInput: o.emitInputEvent.bind(o), parent: o, index: s }));
    }));
  }, r;
})(ee);
Bt.defaultProps = Object.assign({}, ei, { colors: [], display: "block", id: null, layout: "default", margin: null });
var oi = ni(Bt), Ee;
(function(e) {
  e.version = "5.5.2", e.Color = J, e.ColorPicker = oi, (function(r) {
    r.h = y, r.ComponentBase = de, r.Handle = X, r.Slider = ae, r.Wheel = Rt, r.Box = ti;
  })(e.ui || (e.ui = {}));
})(Ee || (Ee = {}));
var W = Ee;
function li(e, r, i, t, n) {
  if (i === "cct") return [[{ component: W.ui.Slider, options: { sliderType: "kelvin", sliderShape: "circle", minTemperature: t, maxTemperature: n } }, { component: W.ui.Slider, options: { sliderType: "value" } }][e - 1]];
  switch (r) {
    case "wheel":
      return [{ component: W.ui.Wheel, options: {} }, { component: W.ui.Slider, options: { sliderType: "value" } }];
    case "box":
      return [{ component: W.ui.Box, options: { boxLightness: false } }, { component: W.ui.Slider, options: { sliderType: "hue" } }];
    case "slider":
      return [{ component: W.ui.Slider, options: { sliderType: "red" } }, { component: W.ui.Slider, options: { sliderType: "green" } }, { component: W.ui.Slider, options: { sliderType: "blue" } }];
    default:
      return [];
  }
}
function ci(e, r, i) {
  if (i === "cct") return e.maxWidth;
  switch (r) {
    case "wheel":
    case "box":
      return e.maxWidth;
    case "slider":
      return e.height;
    default:
      return 0;
  }
}
function Ht(e, r, i, t) {
  if (!e.width || !e.height) return 12;
  if (r === "slider" && t !== "cct") return (e.width - 3 * (i || 1) * 28) / 2;
  const n = e.maxWidth, o = (i || 1) * 28, l = e.width - n - o;
  return Math.max(12, l);
}
function ai(e, r, i, t, n, o) {
  e.current && (r.current = W.ColorPicker(e.current, i), r.current.on("color:init", (l) => {
    n && n(l, o);
  }), r.current.on("input:change", (l, c) => {
    t && t(l, c);
  }));
}
function si(e) {
  e.current = null;
}
function hi(e, r) {
  !e || !r || e.resize(r);
}
function ui(e, r) {
  e && e.setOptions(r);
}
function di(e, r) {
  typeof e == "function" ? e(r) : e && "current" in e && (e.current = r);
}
const Pe = cr(({ dimensions: e, colorLightUIComponent: r, colorLightSliderWidth: i, colorLightBorderWidth: t, colorLightBorderColor: n, colorWheelLightness: o, colorLightType: l, colorLightCtMin: c, colorLightCtMax: s, cctComponentNumber: u, onInputChange: h, onColorInit: a }, d) => {
  const { theme: g } = Te(Re), p = A(null), f = A(null), x = A(a), L = A(h);
  x.current = a, L.current = h;
  const v = z(() => li(u, r, l, c, s), [u, r, l, c, s]), O = z(() => ci(e, r, l), [e, r, l]), w = z(() => Ht(e, r, i, l), [e, r, i, l]);
  return R(() => (ai(p, f, { color: "#ffffff", width: 0, margin: 12, sliderSize: 28, display: "flex", padding: 6, handleRadius: 8, layoutDirection: "horizontal" }, (b, K) => {
    var _a;
    return (_a = L.current) == null ? void 0 : _a.call(L, b, K);
  }, (b, K) => {
    var _a;
    return (_a = x.current) == null ? void 0 : _a.call(x, b, K);
  }, u), di(d, f.current), () => si(f)), [d, u]), R(() => {
    hi(f.current, O);
  }, [O]), R(() => {
    ui(f.current, { layout: v, margin: w, wheelLightness: o, sliderSize: (i || 1) * 28, borderWidth: t || 0, borderColor: !n || typeof n == "string" && n.trim() === "" ? g.palette.primary.main : n });
  }, [g.palette.primary.main, v, w, i, t, n, o]), _(V, { ref: p });
});
Pe.displayName = "Light2Picker";
const gi = sr(_("path", { d: "M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83" }), "PowerSettingsNew"), fi = (e) => m("svg", { width: "800px", height: "800px", viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", className: "iconify iconify--noto", preserveAspectRatio: "xMidYMid meet", ...e }, m("path", { d: "M77.37 19.32C46.83 3.21 19.03 14.69 9.01 30.38c-3.28 5.13-5.6 14.46-5.51 21.86c.18 15.23 8.61 32.2 26.8 49.32c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.27-4.13 14.33-12.65c-.12-1.12-1.08-3.15-2.53-4.04c-4.65-2.82-14.36-4.29-18.93-11.08c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.29-4.33 16.52-14.84c1.1-9.51-12.78-39.9-46.14-57.5zM89.84 71c-2.34 3.56-8.12 2.34-11.91-1.02c-3.79-3.36-4.28-8.96-1.82-11.16c2.5-2.23 7.2-1.72 10.99 1.64c3.78 3.37 4.57 7.74 2.74 10.54z", fill: "#ac5810" }), m("path", { d: "M78.71 15.69C48.17-.42 20.3 12.04 10.28 27.73C.25 43.43 4.61 72.5 31.63 97.93c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.59-6.58 11.57-12.13c-2.77-3.83-12.7-6.72-18.69-15.64c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.65-5.39 15.37-15.13c-.29-9.57-11.63-39.6-44.99-57.21zm14.06 55.03c-2.85 3.08-8.92 2.24-13.56-1.86c-4.63-4.11-6.08-9.93-3.23-13c2.85-3.08 8.92-2.24 13.56 1.86c4.64 4.1 6.08 9.93 3.23 13z", fill: "#f2a259" }), m("path", { d: "M47.62 84.66c1.15-2.94 9.33-6.16 16.85-.81c2.11 1.5 4.75 5.32 4.48 10.12c-.88 15.68-26.61 4.22-21.33-9.31z", fill: "#eee" }), m("path", { d: "M23.73 58.07c2.63-4.2 9.02-4.68 14.61-1.05c4.98 3.23 9.14 11.18 3 16.38c-3.29 2.79-8.98 1.06-12.49-1.63c-4.26-3.25-7.95-9.18-5.12-13.7z", fill: "#2686c6" }), m("path", { d: "M57.67 21.42c.81-3.33 6.46-3.9 10.46-2.41c6.91 2.58 10.04 9.42 7.49 13.23c-3.73 5.57-11.86 3.66-14.94.47c-5.23-5.4-3.69-8.5-3.01-11.29z", fill: "#ffee58" }), m("path", { d: "M97.71 37.72c5.54 2.52 6.26 6.51 5.2 9.42c-.66 1.8-2.01 4.27-4.77 4.49c-4.67.38-5.32-3.48-8.65-4.54c-2.8-.89-3.94-4.72-2.84-7.29c1.02-2.37 4-5.3 11.06-2.08z", fill: "#7cb342" }), m("path", { d: "M66.97 96.96c-1.38 1.25-6.17 2.79-12.25-1.01c-2.06-1.29-4.03-3.16-5.14-5.96c-.87-2.2-.68-4.32-.29-5.26c1.12-2.71 2.83-3.21 2.83-3.21c-1.72-.12-4.97 2.16-5.51 5.15c-.17.94-1.38 6.82 6.41 12.15c6.71 4.6 16.63 4.17 15.98-5.09c-.3 1.14-1.15 2.44-2.03 3.23z", fill: "#b0b0b0" }), m("path", { d: "M44.26 65.72c-.19 3.57-4.37 5.45-6.7 5.46c-6.59.01-12.51-4.13-12.92-11.5c-.07-1.32.58-3.23.58-3.23c-.87.37-2.1 2.25-2.36 3.31c-1.54 6.36 4.87 13.77 11.62 15.27c3.42.76 7.73-.41 9.3-3.47c1.12-2.18.9-4.05.48-5.84z", fill: "#01579b" }), m("path", { d: "M67.32 32.72c-4.48-.51-6.96-3.44-7.61-4.11c-1.78-1.86-2.88-3.67-2.24-6.35c.2-.86.69-1.96 1.29-2.58c-.73.24-1.91 1.81-2.28 2.66c-.38.85-1.76 4.04 1.2 7.97c1.83 2.44 5.02 5.19 9.74 5.85c3.35.47 5.75-.73 7.75-2.68c1.36-1.33 1.96-4.33 1.15-5.88c.13 1.13-1.94 5.93-9 5.12z", fill: "#df7f14" }), m("path", { d: "M104.17 44.85c-.41-1.51-1.58-3.08-1.7-3.16c.51.98 1.52 3.92-.6 6.78c-1.07 1.44-4.29 3.21-8.09.13c-1.12-.91-2.02-1.81-4.04-2.55c-5.13-1.89-2.89-7.11-1.11-8.73c-1.4.73-2.67 2.04-3.2 4.04c-.74 2.79 1.09 5.71 3.87 7.11c3.16 1.59 4.18 4.66 8.51 4.66c.22 0 .45-.01.7-.03c2.92-.25 4.15-1.38 5.04-2.76c1.09-1.72 1.12-3.67.62-5.49z", fill: "#558b2f" }), m("path", { d: "M25.82 25.79c2.28-2.25 6.25-4.63 12.06-1.6c3.5 1.82 7.57 3.96 5.73 11.36c-1.14 4.59-7.82 7.02-13.4 1.91c-2.21-2.02-10.61-5.53-4.39-11.67z", fill: "#f44336" }), m("path", { d: "M44.94 34.56c.07-1.75-.83-3.88-1.14-4.6c.05 1.05.96 3.7-3.21 7.21c-1.45 1.22-4.08 2.15-6.95 1.02c-1.47-.58-3.58-3.01-5.09-3.62c-5.61-2.26-3.19-8.27-2.4-9.09c-1.27.89-2.35 2.31-2.75 4.38c-.52 2.71-.04 5.27 3.68 8.2c10.56 8.33 13.8 3.31 14.95 2.03c1.45-1.56 2.83-3.6 2.91-5.53z", fill: "#c62828" }), m("path", { d: "M65.74 19.36c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.51-1.1 4.28-2.44 2.22-3.41z", fill: "#ffffff" }), m("path", { d: "M34.76 24.46c-1.45-.96-6.08-.97-7.47 2.58c-.84 2.13.47 4.6 2.04 4.56c1.79-.04.93-2.15 2.42-3.49c1.88-1.69 5.04-2.31 3.01-3.65z", fill: "#ffffff" }), m("path", { d: "M34.07 56.5c-1.37-.87-5.43-1.21-7.11 1.97c-1.23 2.34.46 4.92 1.93 4.85c1.67-.08 1.11-2.74 2.18-3.34c1.63-.91 4.92-2.26 3-3.48z", fill: "#ffffff" }), m("path", { d: "M57.4 83.13c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.5-1.1 4.27-2.44 2.22-3.41z", fill: "#ffffff" }), m("path", { d: "M95.08 38.05c-1.32-.94-5.49-1.49-6.91 1.81c-.85 1.98.28 4.35 1.75 4.36c1.67.01 1.26-2.67 2.37-3.21c1.67-.81 4.64-1.64 2.79-2.96z", fill: "#ffffff" })), vi = (e) => m("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, m("defs", null, m("linearGradient", { id: "cctGradient", x1: 0, y1: 0, x2: 0, y2: 1 }, m("stop", { offset: "0%", stopColor: "#1E90FF" }), m("stop", { offset: "100%", stopColor: "#FF8C00" })), m("filter", { id: "insetShadow", x: "-50%", y: "-50%", width: "200%", height: "200%" }, m("feOffset", { dx: 0, dy: 2 }), m("feGaussianBlur", { stdDeviation: 4, result: "offset-blur" }), m("feComposite", { operator: "out", in: "SourceGraphic", in2: "offset-blur", result: "inverse" }), m("feFlood", { floodColor: "#FFF176", floodOpacity: 0.4 }), m("feComposite", { in2: "inverse", operator: "in", result: "shadow" }), m("feComposite", { in: "shadow", in2: "SourceGraphic", operator: "over" }))), m("circle", { cx: 256, cy: 256, r: 252, fill: "#FFF176" }), m("circle", { cx: 256, cy: 256, r: 240, fill: "url(#cctGradient)", filter: "url(#insetShadow)" }), m("g", { transform: "translate(256 280) scale(1.2) translate(-256 -256)" }, m("path", { d: "M192 200c0-35 29-64 64-64s64 29 64 64c0 23.1-12.2 43.5-30.6 55.3V288c0 8.8-7.2 16-16 16h-35c-8.8 0-16-7.2-16-16v-32.7C204.2 243.5 192 223.1 192 200zm56 136h16c4.4 0 8 3.6 8 8v16h-32v-16c0-4.4 3.6-8 8-8z", fill: "#FFF176", stroke: "#000000", strokeWidth: 4 }))), je = 254, Wt = (e) => e === je, mi = (e) => Math.round(e / 100 * je), _i = (e) => Math.round(e / je * 100), Z = (e, r, i) => {
  const t = r[e];
  if (typeof t != "string" || !t.trim()) return;
  const n = i(e), o = Number(n);
  return Number.isFinite(o) ? o : void 0;
}, pi = (e, r) => {
  if (e !== void 0) return Wt(r) ? _i(e) : Math.round(e);
}, oe = (e, r, i, t) => {
  const n = Z(e, r, i);
  return pi(n, t);
};
function zt(e, r, i) {
  const t = Z("colorLightTemperatureOid", r, i) ?? 2e3;
  e.kelvin = t;
}
function gt(e, r, i) {
  var _a;
  const t = oe("colorLightBrightnessOid", r, i, (_a = r.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
  t !== void 0 && (e.value = t);
}
function Ce(e, r, i, t, n) {
  var _a, _b, _c;
  switch (r) {
    case "cct": {
      if (n === 1) zt(e, t, i);
      else if (n === 2) {
        const o = oe("colorLightBrightnessOid", t, i, (_a = t.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
        o !== void 0 && (e.value = o);
      }
      break;
    }
    case "rgb":
    case "rgbcct": {
      if (!t.colorLightRgbHexOid) break;
      const o = i("colorLightRgbHexOid"), l = typeof o == "string" && o.trim().length > 0 ? o : "#ffffff";
      e.hexString = l;
      break;
    }
    case "r/g/b":
    case "r/g/b/cct": {
      if (t.colorLightRedOid && t.colorLightGreenOid && t.colorLightBlueOid) {
        const o = Z("colorLightRedOid", t, i), l = Z("colorLightGreenOid", t, i), c = Z("colorLightBlueOid", t, i);
        e.red = o ?? 0, e.green = l ?? 0, e.blue = c ?? 0;
      }
      break;
    }
    case "h/s/v":
    case "h/s/v/cct": {
      if (t.colorLightHueOid && t.colorLightSaturationOid && t.colorLightBrightnessOid) {
        const o = Z("colorLightHueOid", t, i), l = oe("colorLightSaturationOid", t, i, (_b = t.colorLightSaturationOidObject) == null ? void 0 : _b.maxValue), c = oe("colorLightBrightnessOid", t, i, (_c = t.colorLightBrightnessOidObject) == null ? void 0 : _c.maxValue);
        o !== void 0 && (e.hue = o), l !== void 0 && (e.saturation = l), c !== void 0 && (e.value = c);
      }
      break;
    }
  }
}
function Oe(e) {
  const r = e.flatMap((i, t) => i.changed ? [[t, i.value ?? null]] : []);
  return r.length ? JSON.stringify(r) : null;
}
const bi = (e, r) => !e || !r ? true : !!r[e], yi = (e) => e === "kelvin" ? 2e3 : e === "hexString" ? "#ffffff" : 0, ke = (e, r) => {
  const i = r.value;
  r.hexString = e.hexString, r.value = i;
}, xi = (e) => _(vt, { component: fi, viewBox: "0 0 128 128", ...e }), Li = (e) => _(vt, { component: vi, viewBox: "0 0 512 512", ...e });
function wi() {
  var _a;
  const [e, r] = ne(false), i = Te(Re), { widget: t, widget: { data: n }, values: o, getPropertyValue: l } = i, { data: c } = mt(""), [s, u] = ne(null), h = ur(s, (n.colorLightSliderWidth || 1) * 28), a = A(null), d = A(null), g = A(e), p = A(t.data);
  p.current = t.data;
  const f = A(l);
  f.current = l;
  const [x, L] = ne(false), v = A(false), O = A(false), w = n.colorLightType === "rgbcct" || n.colorLightType === "r/g/b/cct" || n.colorLightType === "h/s/v/cct", b = e && w ? "cct" : n.colorLightType, { value: K, updateValue: Fe } = H("colorLightSwitchOid"), { value: Y, hasBackendChange: Dt, updateValue: ge } = H("colorLightTemperatureOid"), { value: Ve, updateValue: re, hasBackendChange: $e } = H("colorLightBrightnessOid"), { value: jt, updateValue: fe, hasBackendChange: Ft } = H("colorLightRgbHexOid"), { value: Vt, updateValue: ve, hasBackendChange: $t } = H("colorLightRedOid"), { value: Gt, updateValue: me, hasBackendChange: Ut } = H("colorLightGreenOid"), { value: Xt, updateValue: _e, hasBackendChange: Kt } = H("colorLightBlueOid"), { value: Yt, updateValue: pe, hasBackendChange: qt } = H("colorLightHueOid"), { value: Qt, updateValue: be, hasBackendChange: Jt } = H("colorLightSaturationOid"), Zt = ((_a = t.data.colorLightSwitchOidObject) == null ? void 0 : _a.type) === "boolean", Ge = (C, k) => {
    Ce(C, b, l, t.data, k);
  }, Ue = z(() => (C, k) => Wt(k == null ? void 0 : k.maxValue) ? mi(C) : Math.round(C), []), Xe = z(() => ({ cct: [{ colorProp: "kelvin", oidField: "colorLightTemperatureOid", setter: ge, cctComponent: 1 }, { colorProp: "value", oidField: "colorLightBrightnessOid", setter: re, normalize: true, cctComponent: 2 }], rgb: [{ colorProp: "hexString", oidField: "colorLightRgbHexOid", setter: fe }], rgbcct: [{ colorProp: "hexString", oidField: "colorLightRgbHexOid", setter: fe }], "r/g/b": [{ colorProp: "red", oidField: "colorLightRedOid", setter: ve }, { colorProp: "green", oidField: "colorLightGreenOid", setter: me }, { colorProp: "blue", oidField: "colorLightBlueOid", setter: _e }], "r/g/b/cct": [{ colorProp: "red", oidField: "colorLightRedOid", setter: ve }, { colorProp: "green", oidField: "colorLightGreenOid", setter: me }, { colorProp: "blue", oidField: "colorLightBlueOid", setter: _e }], "h/s/v": [{ colorProp: "hue", oidField: "colorLightHueOid", setter: pe, changeKey: "h" }, { colorProp: "saturation", oidField: "colorLightSaturationOid", setter: be, normalize: true, changeKey: "s" }, { colorProp: "value", oidField: "colorLightBrightnessOid", setter: re, normalize: true, changeKey: "v" }], "h/s/v/cct": [{ colorProp: "hue", oidField: "colorLightHueOid", setter: pe, changeKey: "h" }, { colorProp: "saturation", oidField: "colorLightSaturationOid", setter: be, normalize: true, changeKey: "s" }, { colorProp: "value", oidField: "colorLightBrightnessOid", setter: re, normalize: true, changeKey: "v" }] }), [ge, re, fe, ve, me, _e, pe, be]), Ke = z(() => (C, k, tr) => {
    if (!(!b || O.current || v.current)) {
      O.current = true;
      try {
        const Ze = Xe[b];
        if (!Ze) return;
        Ze.forEach((ye) => {
          const { colorProp: et, oidField: rr, setter: ir, normalize: nr, cctComponent: tt, changeKey: or } = ye;
          if (tt !== void 0 && k !== tt || !bi(or, tr)) return;
          const lr = `${rr}Object`, rt = t.data[lr];
          if (!rt) return;
          let B = C[et];
          nr && typeof B == "number" ? B = Ue(B, rt) : typeof B == "number" && (B = Math.round(B)), B == null && (B = yi(et)), ir(B);
        }), k === 1 && L((ye) => !ye);
      } finally {
        Promise.resolve().then(() => {
          O.current = false;
        });
      }
    }
  }, [b, Xe, t, Ue, O]), er = z(() => Ht(h, n.colorLightUIComponent, n.colorLightSliderWidth, b), [h, n.colorLightUIComponent, n.colorLightSliderWidth, b]), Ye = z(() => ({ dimensions: h, colorWheelLightness: n.colorWheelLightness, colorLightUIComponent: n.colorLightUIComponent, colorLightSliderWidth: n.colorLightSliderWidth, colorLightBorderWidth: n.colorLightBorderWidth, colorLightBorderColor: n.colorLightBorderColor, colorLightType: b, colorLightCtMin: n.colorLightCtMin, colorLightCtMax: n.colorLightCtMax }), [h, n.colorWheelLightness, n.colorLightUIComponent, n.colorLightSliderWidth, n.colorLightBorderWidth, n.colorLightBorderColor, n.colorLightCtMin, n.colorLightCtMax, b]);
  R(() => {
    if (b !== "cct" || !a.current || !d.current) return;
    const C = a.current.color, k = d.current.color;
    if (x) {
      v.current = true;
      try {
        ke(C, k);
      } finally {
        v.current = false;
      }
    }
  }, [b, x]);
  const qe = Oe([{ changed: Dt, value: Y }]), Qe = Oe([{ changed: $e, value: Ve }]), Je = Oe(["rgb", "rgbcct"].includes(b || "") ? [{ changed: Ft, value: jt }] : ["r/g/b", "r/g/b/cct"].includes(b || "") ? [{ changed: $t, value: Vt }, { changed: Ut, value: Gt }, { changed: Kt, value: Xt }] : ["h/s/v", "h/s/v/cct"].includes(b || "") ? [{ changed: qt, value: Yt }, { changed: Jt, value: Qt }, { changed: $e, value: Ve }] : []);
  return R(() => {
    if (b !== "cct" || qe === null || !a.current || !d.current || Y == null) return;
    const C = a.current.color, k = d.current.color;
    v.current = true;
    try {
      C.kelvin = Number(Y), ke(C, k);
    } finally {
      v.current = false;
    }
  }, [b, qe, Y]), R(() => {
    if (!(!e || b !== "cct" || Qe === null) && d.current) {
      v.current = true;
      try {
        gt(d.current.color, p.current, f.current);
      } finally {
        v.current = false;
      }
    }
  }, [e, b, Qe]), R(() => {
    if (!(e || Je === null || !a.current)) {
      v.current = true;
      try {
        Ce(a.current.color, b, f.current, p.current);
      } finally {
        v.current = false;
      }
    }
  }, [e, b, Je]), R(() => {
    if (!e || !w || !a.current || !d.current) return;
    const C = a.current.color, k = d.current.color;
    v.current = true;
    try {
      zt(C, p.current, f.current), g.current === false && Number(Y) !== Number(C.kelvin) && ge(Number(C.kelvin)), ke(C, k);
    } finally {
      v.current = false;
    }
  }, [e, w]), R(() => {
    !g.current || e || !w || a.current && gt(a.current.color, p.current, f.current);
  }, [e, w]), R(() => {
    if (!(g.current !== true || e || !w || !a.current)) {
      v.current = true;
      try {
        Ce(a.current.color, b, f.current, p.current);
      } finally {
        v.current = false;
      }
    }
  }, [e, w, b]), R(() => {
    g.current = e;
  }, [e]), Q(_t, { isValidType: Zt, data: c, children: [_(pt, { data: c, widget: t }), n.colorLightType !== "none" ? Q(V, { sx: { minWidth: 0, height: "100%", display: "flex", flexShrink: 0, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }, children: [_(Le, { onClick: () => {
    Fe(!K);
  }, children: _(gi, { sx: { color: K ? "red" : "green", width: "26px", height: "26px" } }) }), w && Q(V, { sx: { display: "inline-block" }, children: [_(it, { orientation: "horizontal", flexItem: true, variant: "fullWidth" }), _(Le, { onClick: () => r(false), children: _(xi, { sx: { width: "24px", height: "24px" } }) })] }), w && _(V, { sx: { display: "block" }, children: _(Le, { onClick: () => r(true), children: _(Li, { sx: { width: "24px", height: "24px" } }) }) })] }) : null, _(it, { orientation: "vertical", flexItem: true, variant: "middle" }), _(V, { ref: u, sx: { minWidth: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", p: Number(n.colorLightPadding) || 0 }, children: Object.keys(o).length !== 0 && h.width !== void 0 && n.colorLightType !== "none" && Q(ft, { children: [_(Pe, { cctComponentNumber: 1, ref: a, onColorInit: Ge, onInputChange: (C, k) => Ke(C, 1, k), ...Ye }), b === "cct" && _(V, { sx: { ml: `${er}px` }, children: _(Pe, { cctComponentNumber: 2, onColorInit: Ge, onInputChange: (C, k) => Ke(C, 2, k), ref: d, ...Ye }) })] }) })] });
}
const Si = xr(wi);
class Nt extends hr {
  static getWidgetInfo() {
    return { id: "tplLight2CollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "Light2CollectionWidget", visWidgetLabel: "light2_collection_widget", visOrder: 11, visAttrs: [{ name: "common", fields: [...nt({ groupName: "", allFields: true })] }, { name: "light", label: "group_light", fields: [...dr(), ...pr()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...nt({ groupName: "", allFields: false })], hidden: (r) => !r.colorLightButton }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-light.png" };
  }
  getWidgetInfo() {
    return Nt.getWidgetInfo();
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(r, i) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(r) {
    return super.renderWidgetBody(r), this.renderWithProvider(_(Si, {}), r);
  }
}
export {
  Nt as default
};
