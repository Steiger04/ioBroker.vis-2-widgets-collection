import { i as g, m as O, h as Se, g as N, e as Be, f as Ie, j as W, k as vt, o as Xt, l as P, p as C } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { M as Kt, B as $, d as Yt, I as Ce, e as mt, G as Qt } from "./usePopoverPositioning-BUV6laon.js";
import { e as V, C as He, u as _t, a as pt, i as qt, D as nt, c as ot, w as Zt } from "./useData-Ogol4QJ_.js";
import { u as B, d as Jt } from "./useValueState-DypOMwYO.js";
import { o as er, C as bt, S as tr, g as rr } from "./CollectionBaseImage-B5OtYHDO.js";
import { B as ir } from "./Button-DuX2ENZG.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const lt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=", ct = { "switch.light": "colorLightSwitchOid", "level.color.rgb": "colorLightRgbHexOid", "level.color.red": "colorLightRedOid", "level.color.green": "colorLightGreenOid", "level.color.blue": "colorLightBlueOid", "level.color.hue": "colorLightHueOid", "level.color.saturation": "colorLightSaturationOid", "level.brightness": "colorLightBrightnessOid", "level.dimmer": "colorLightBrightnessOid", "level.color.temperature": "colorLightTemperatureOid", "level.color.luminance": "colorLightBrightnessOid", "level.color.white": "colorLightBrightnessOid" }, nr = async (e, r, i, t) => {
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
          if (h && ct[h] && (!r[h] || r[h] === "nothing_selected") && n !== h) {
            const a = ct[h];
            s[a] = u._id, await er(["boolean", "number", "string", "mixed"], a)(e, r, i, t), a === "colorLightTemperatureOid" && (!s.colorLightCtMin && u.common.min && (s.colorLightCtMin = u.common.min), !s.colorLightCtMax && u.common.max && (s.colorLightCtMax = u.common.max)), a === "colorLightSwitchOid" && (s.values_count = 2, s.value1 = true, s.alias1 = "TRUE", s.value2 = false, s.alias2 = "FALSE", s.iconSize = 0, s.iconSmall1 = lt, s.iconColor1 = "red", s.iconSize1 = 100, s.iconSmall2 = lt, s.iconColor2 = "green", s.iconSize2 = 100);
          }
        })), i(r);
      }
    }
  }
}, or = () => [{ type: "custom", component: () => g(V, {}) }, { name: "colorLightButton", label: "color_light_button", type: "checkbox", default: false }, { name: "colorLightDelayLongPress", label: "color_light_delay_long_press", type: "number", default: 500, min: 0, max: 1e4, step: 1, hidden: "!data.colorLightButton" }, { name: "colorLightModalWidth", label: "color_light_modal_width", type: "number", min: 0, max: 5e3, step: 1, hidden: "!data.colorLightButton", tooltip: "color_light_modal_width_tooltip" }, { name: "colorLightModalHeight", label: "color_light_modal_height", type: "number", default: 300, min: 0, max: 5e3, step: 1, hidden: "!data.colorLightButton" }, { type: "custom", component: () => g(V, {}) }, { name: "colorLightSliderWidth", label: "color_light_slider_width", type: "slider", min: 0, max: 10, default: 1, step: 0.1 }, { name: "colorLightBorderWidth", label: "color_light_border_width", type: "slider", min: 0, max: 100, default: 3, step: 1 }, { name: "colorLightBorderColor", label: "color_light_border_color", type: "color" }, { name: "colorLightPadding", type: "number", label: "color_light_padding", default: 1, step: 0.5, min: 0 }, { type: "custom", component: () => g(V, {}) }, { name: "colorLightSwitchOid", type: "id", label: "color_light_switch_oid", onChange: nr }, { type: "custom", component: () => g(V, {}) }, { name: "colorLightUIComponent", type: "select", label: "color_light_ui_component", options: [{ value: "wheel", label: "Wheel" }, { value: "box", label: "Box" }, { value: "slider", label: "Slider" }], default: "wheel", noTranslation: true, hidden: (e) => e.colorLightType === "cct" || e.colorLightType === "none" }, { name: "colorWheelLightness", label: "color_wheel_lightness", type: "checkbox", default: false, hidden: (e) => e.colorLightType === "none" || e.colorLightType === "cct" || e.colorLightUIComponent !== "wheel" }, { type: "custom", component: () => g(V, {}), hidden: (e) => e.colorLightType === "cct" || e.colorLightType === "none" }, { name: "colorLightType", type: "select", label: "color_light_type", options: [{ value: "none", label: "nothing_selected" }, { value: "cct", label: "cct" }, { value: "rgb", label: "rgb" }, { value: "rgbcct", label: "rgb & cct" }, { value: "r/g/b", label: "r/g/b" }, { value: "r/g/b/cct", label: "r/g/b & cct" }, { value: "h/s/v", label: "h/s/v" }, { value: "h/s/v/cct", label: "h/s/v & cct" }], default: "none", noTranslation: true }, { type: "custom", component: () => g(V, {}), hidden: (e) => e.colorLightType === "none" }, { name: "colorLightTemperatureOid", type: "id", label: "color_light_temperature_oid", hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") }, { name: "colorLightCtMin", type: "number", min: 500, max: 1e4, default: 2e3, label: "color_light_ct_min", hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") || !e.colorLightTemperatureOid }, { name: "colorLightCtMax", type: "number", min: 500, max: 1e4, default: 6500, label: "color_light_ct_max", hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") || !e.colorLightTemperatureOid }, { type: "custom", component: () => g(V, {}), hidden: (e) => !["cct", "rgbcct", "r/g/b/cct", "h/s/v/cct"].includes(e.colorLightType || "") || e.colorLightType === "none" }, { name: "colorLightRgbHexOid", type: "id", label: "color_light_rgb_hex_oid", hidden: (e) => !["rgb", "rgbcct"].includes(e.colorLightType || "") }, { name: "colorLightRedOid", type: "id", label: "color_light_red_oid", hidden: (e) => !["r/g/b", "r/g/b/cct"].includes(e.colorLightType || "") }, { name: "colorLightGreenOid", type: "id", label: "color_light_green_oid", hidden: (e) => !["r/g/b", "r/g/b/cct"].includes(e.colorLightType || "") }, { name: "colorLightBlueOid", type: "id", label: "color_light_blue_oid", hidden: (e) => !["r/g/b", "r/g/b/cct"].includes(e.colorLightType || "") }, { name: "colorLightHueOid", type: "id", label: "color_light_hue_oid", hidden: (e) => !["h/s/v", "h/s/v/cct"].includes(e.colorLightType || "") }, { name: "colorLightSaturationOid", type: "id", label: "color_light_saturation_oid", hidden: (e) => !["h/s/v", "h/s/v/cct"].includes(e.colorLightType || "") }, { name: "colorLightBrightnessOid", type: "id", label: "color_light_brightness_oid", hidden: (e) => !["cct", "h/s/v", "h/s/v/cct"].includes(e.colorLightType || "") }];
function lr({ onClick: e = () => {
}, onLongPress: r = () => {
}, ms: i = 300 } = {}) {
  const t = O(null), n = O(null), o = O(false), l = O(null), c = Se(() => {
    n.current && (o.current = true, r(n.current)), t.current = null, n.current = null;
  }, [r]), s = Se((h) => {
    l.current === null && (l.current = h.pointerId, n.current = h, o.current = false, t.current = setTimeout(c, i));
  }, [c, i]), u = Se((h) => {
    if (h.pointerId !== l.current) return;
    const a = n.current, d = o.current;
    t.current && (clearTimeout(t.current), t.current = null), !d && a && e(a), n.current = null, o.current = false, l.current = null;
  }, [e]);
  return N(() => ({ onPointerDown: s, onPointerUp: u, onPointerLeave: u, onPointerCancel: u, style: { touchAction: "manipulation" } }), [s, u]);
}
function cr(e) {
  return typeof e == "object" && e !== null && "colorLightButton" in e && "colorLightSwitchOid" in e;
}
function ar(e) {
  const r = (t) => {
    var _a;
    const n = Be(He);
    if (!n || !n.widget) throw new Error("withButtonModal must be used within a CollectionProvider");
    const { widget: o } = n, [l, c] = Ie(false), s = o.data, { value: u, updateValue: h } = B("colorLightSwitchOid"), { data: a } = _t("colorLightSwitchOid"), d = cr(s) && s.colorLightButton, _ = ((_a = d ? s.colorLightSwitchOidObject : void 0) == null ? void 0 : _a.type) === "boolean", y = lr({ onClick: () => h(!u), onLongPress: () => c(true), ms: d ? s.colorLightDelayLongPress ?? 500 : 500 }), v = d ? (s.colorLightSliderWidth || 1) * 28 : 28, L = d && typeof s.colorLightModalWidth == "number" && s.colorLightModalWidth > 0 ? s.colorLightModalWidth : (d && s.colorLightModalHeight || 300) + 40 + 12 + v;
    return d ? W(vt, { children: [W(pt, { isValidType: _, data: a, oidValue: u, children: [g(bt, { data: a, widget: o }), g(ir, { variant: "text", onPointerDown: y.onPointerDown, onPointerUp: y.onPointerUp, onPointerLeave: y.onPointerLeave, onPointerCancel: y.onPointerCancel, sx: { color: a.iconColorActive || "inherit", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", touchAction: "manipulation" }, children: g(tr, { alt: "", src: a.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", style: { width: typeof a.iconSizeOnly == "number" && `calc(100% * ${a.iconSizeOnly} / 100)` || "100%", height: typeof a.iconSizeOnly == "number" && `calc(100% * ${a.iconSizeOnly} / 100)` || "100%", objectFit: "contain", ...rr(a.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", a.iconColorActive || a.iconColor) } }) })] }), g(Kt, { open: l, onClose: () => c(false), children: g($, { sx: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: L, height: s.colorLightModalHeight || 300 }, children: g(e, { ...t }) }) })] }) : g(e, { ...t });
  }, i = e.displayName || e.name || "Component";
  return r.displayName = `withButtonModal(${i})`, r;
}
var w, ae, yt, Me, xt, j = {}, We = [], sr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function D(e, r) {
  for (var i in r) e[i] = r[i];
  return e;
}
function Lt(e) {
  var r = e.parentNode;
  r && r.removeChild(e);
}
function x(e, r, i) {
  var t, n, o, l, c = arguments;
  if (r = D({}, r), arguments.length > 3) for (i = [i], t = 3; t < arguments.length; t++) i.push(c[t]);
  if (i != null && (r.children = i), e != null && e.defaultProps != null) for (n in e.defaultProps) r[n] === void 0 && (r[n] = e.defaultProps[n]);
  return l = r.key, (o = r.ref) != null && delete r.ref, l != null && delete r.key, Ee(e, r, l, o);
}
function Ee(e, r, i, t) {
  var n = { type: e, props: r, key: i, ref: t, __k: null, __p: null, __b: 0, __e: null, l: null, __c: null, constructor: void 0 };
  return w.vnode && w.vnode(n), n;
}
function ue(e) {
  return e.children;
}
function hr(e) {
  if (e == null || typeof e == "boolean") return null;
  if (typeof e == "string" || typeof e == "number") return Ee(null, e, null, null);
  if (e.__e != null || e.__c != null) {
    var r = Ee(e.type, e.props, e.key, null);
    return r.__e = e.__e, r;
  }
  return e;
}
function ee(e, r) {
  this.props = e, this.context = r;
}
function se(e, r) {
  if (r == null) return e.__p ? se(e.__p, e.__p.__k.indexOf(e) + 1) : null;
  for (var i; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) return i.__e;
  return typeof e.type == "function" ? se(e) : null;
}
function wt(e) {
  var r, i;
  if ((e = e.__p) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, r = 0; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) {
      e.__e = e.__c.base = i.__e;
      break;
    }
    return wt(e);
  }
}
function ke(e) {
  (!e.__d && (e.__d = true) && ae.push(e) === 1 || Me !== w.debounceRendering) && (Me = w.debounceRendering, (w.debounceRendering || yt)(ur));
}
function ur() {
  var e, r, i, t, n, o, l, c;
  for (ae.sort(function(s, u) {
    return u.__v.__b - s.__v.__b;
  }); e = ae.pop(); ) e.__d && (i = void 0, t = void 0, o = (n = (r = e).__v).__e, l = r.__P, c = r.u, r.u = false, l && (i = [], t = Ne(l, n, D({}, n), r.__n, l.ownerSVGElement !== void 0, null, i, c, o ?? se(n)), Ct(i, n), t != o && wt(n)));
}
function St(e, r, i, t, n, o, l, c, s) {
  var u, h, a, d, f, b, _, y = i && i.__k || We, v = y.length;
  if (c == j && (c = o != null ? o[0] : v ? se(i, 0) : null), u = 0, r.__k = ze(r.__k, function(p) {
    if (p != null) {
      if (p.__p = r, p.__b = r.__b + 1, (a = y[u]) === null || a && p.key == a.key && p.type === a.type) y[u] = void 0;
      else for (h = 0; h < v; h++) {
        if ((a = y[h]) && p.key == a.key && p.type === a.type) {
          y[h] = void 0;
          break;
        }
        a = null;
      }
      if (d = Ne(e, p, a = a || j, t, n, o, l, null, c, s), (h = p.ref) && a.ref != h && (_ || (_ = [])).push(h, p.__c || d, p), d != null) {
        if (b == null && (b = d), p.l != null) d = p.l, p.l = null;
        else if (o == a || d != c || d.parentNode == null) {
          e: if (c == null || c.parentNode !== e) e.appendChild(d);
          else {
            for (f = c, h = 0; (f = f.nextSibling) && h < v; h += 2) if (f == d) break e;
            e.insertBefore(d, c);
          }
          r.type == "option" && (e.value = "");
        }
        c = d.nextSibling, typeof r.type == "function" && (r.l = d);
      }
    }
    return u++, p;
  }), r.__e = b, o != null && typeof r.type != "function") for (u = o.length; u--; ) o[u] != null && Lt(o[u]);
  for (u = v; u--; ) y[u] != null && Ot(y[u], y[u]);
  if (_) for (u = 0; u < _.length; u++) kt(_[u], _[++u], _[++u]);
}
function ze(e, r, i) {
  if (i == null && (i = []), e == null || typeof e == "boolean") r && i.push(r(null));
  else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) ze(e[t], r, i);
  else i.push(r ? r(hr(e)) : e);
  return i;
}
function dr(e, r, i, t, n) {
  var o;
  for (o in i) o in r || st(e, o, null, i[o], t);
  for (o in r) n && typeof r[o] != "function" || o === "value" || o === "checked" || i[o] === r[o] || st(e, o, r[o], i[o], t);
}
function at(e, r, i) {
  r[0] === "-" ? e.setProperty(r, i) : e[r] = typeof i == "number" && sr.test(r) === false ? i + "px" : i ?? "";
}
function st(e, r, i, t, n) {
  var o, l, c, s, u;
  if (!((r = n ? r === "className" ? "class" : r : r === "class" ? "className" : r) === "key" || r === "children")) if (r === "style") if (o = e.style, typeof i == "string") o.cssText = i;
  else {
    if (typeof t == "string" && (o.cssText = "", t = null), t) for (l in t) i && l in i || at(o, l, "");
    if (i) for (c in i) t && i[c] === t[c] || at(o, c, i[c]);
  }
  else r[0] === "o" && r[1] === "n" ? (s = r !== (r = r.replace(/Capture$/, "")), u = r.toLowerCase(), r = (u in e ? u : r).slice(2), i ? (t || e.addEventListener(r, ht, s), (e.t || (e.t = {}))[r] = i) : e.removeEventListener(r, ht, s)) : r !== "list" && r !== "tagName" && r !== "form" && !n && r in e ? e[r] = i ?? "" : typeof i != "function" && r !== "dangerouslySetInnerHTML" && (r !== (r = r.replace(/^xlink:?/, "")) ? i == null || i === false ? e.removeAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase(), i) : i == null || i === false ? e.removeAttribute(r) : e.setAttribute(r, i));
}
function ht(e) {
  return this.t[e.type](w.event ? w.event(e) : e);
}
function Ne(e, r, i, t, n, o, l, c, s, u) {
  var h, a, d, f, b, _, y, v, p, L, m = r.type;
  if (r.constructor !== void 0) return null;
  (h = w.__b) && h(r);
  try {
    e: if (typeof m == "function") {
      if (v = r.props, p = (h = m.contextType) && t[h.__c], L = h ? p ? p.props.value : h.__p : t, i.__c ? y = (a = r.__c = i.__c).__p = a.__E : ("prototype" in m && m.prototype.render ? r.__c = a = new m(v, L) : (r.__c = a = new ee(v, L), a.constructor = m, a.render = gr), p && p.sub(a), a.props = v, a.state || (a.state = {}), a.context = L, a.__n = t, d = a.__d = true, a.__h = []), a.__s == null && (a.__s = a.state), m.getDerivedStateFromProps != null && D(a.__s == a.state ? a.__s = D({}, a.__s) : a.__s, m.getDerivedStateFromProps(v, a.__s)), d) m.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), a.componentDidMount != null && l.push(a);
      else {
        if (m.getDerivedStateFromProps == null && c == null && a.componentWillReceiveProps != null && a.componentWillReceiveProps(v, L), !c && a.shouldComponentUpdate != null && a.shouldComponentUpdate(v, a.__s, L) === false) {
          for (a.props = v, a.state = a.__s, a.__d = false, a.__v = r, r.__e = s != null ? s !== i.__e ? s : i.__e : null, r.__k = i.__k, h = 0; h < r.__k.length; h++) r.__k[h] && (r.__k[h].__p = r);
          break e;
        }
        a.componentWillUpdate != null && a.componentWillUpdate(v, a.__s, L);
      }
      for (f = a.props, b = a.state, a.context = L, a.props = v, a.state = a.__s, (h = w.__r) && h(r), a.__d = false, a.__v = r, a.__P = e, h = a.render(a.props, a.state, a.context), r.__k = ze(h != null && h.type == ue && h.key == null ? h.props.children : h), a.getChildContext != null && (t = D(D({}, t), a.getChildContext())), d || a.getSnapshotBeforeUpdate == null || (_ = a.getSnapshotBeforeUpdate(f, b)), St(e, r, i, t, n, o, l, s, u), a.base = r.__e; h = a.__h.pop(); ) a.__s && (a.state = a.__s), h.call(a);
      d || f == null || a.componentDidUpdate == null || a.componentDidUpdate(f, b, _), y && (a.__E = a.__p = null);
    } else r.__e = fr(i.__e, r, i, t, n, o, l, u);
    (h = w.diffed) && h(r);
  } catch (F) {
    w.__e(F, r, i);
  }
  return r.__e;
}
function Ct(e, r) {
  for (var i; i = e.pop(); ) try {
    i.componentDidMount();
  } catch (t) {
    w.__e(t, i.__v);
  }
  w.__c && w.__c(r);
}
function fr(e, r, i, t, n, o, l, c) {
  var s, u, h, a, d = i.props, f = r.props;
  if (n = r.type === "svg" || n, e == null && o != null) {
    for (s = 0; s < o.length; s++) if ((u = o[s]) != null && (r.type === null ? u.nodeType === 3 : u.localName === r.type)) {
      e = u, o[s] = null;
      break;
    }
  }
  if (e == null) {
    if (r.type === null) return document.createTextNode(f);
    e = n ? document.createElementNS("http://www.w3.org/2000/svg", r.type) : document.createElement(r.type), o = null;
  }
  return r.type === null ? d !== f && (o != null && (o[o.indexOf(e)] = null), e.data = f) : r !== i && (o != null && (o = We.slice.call(e.childNodes)), h = (d = i.props || j).dangerouslySetInnerHTML, a = f.dangerouslySetInnerHTML, c || (a || h) && (a && h && a.__html == h.__html || (e.innerHTML = a && a.__html || "")), dr(e, f, d, n, c), r.__k = r.props.children, a || St(e, r, i, t, r.type !== "foreignObject" && n, o, l, j, c), c || ("value" in f && f.value !== void 0 && f.value !== e.value && (e.value = f.value == null ? "" : f.value), "checked" in f && f.checked !== void 0 && f.checked !== e.checked && (e.checked = f.checked))), e;
}
function kt(e, r, i) {
  try {
    typeof e == "function" ? e(r) : e.current = r;
  } catch (t) {
    w.__e(t, i);
  }
}
function Ot(e, r, i) {
  var t, n, o;
  if (w.unmount && w.unmount(e), (t = e.ref) && kt(t, null, r), i || typeof e.type == "function" || (i = (n = e.__e) != null), e.__e = e.l = null, (t = e.__c) != null) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      w.__e(l, r);
    }
    t.base = t.__P = null;
  }
  if (t = e.__k) for (o = 0; o < t.length; o++) t[o] && Ot(t[o], r, i);
  n != null && Lt(n);
}
function gr(e, r, i) {
  return this.constructor(e, i);
}
function vr(e, r, i) {
  var t, n, o;
  w.__p && w.__p(e, r), n = (t = i === xt) ? null : r.__k, e = x(ue, null, [e]), o = [], Ne(r, r.__k = e, n || j, j, r.ownerSVGElement !== void 0, n ? null : We.slice.call(r.childNodes), o, false, j, t), Ct(o, e);
}
w = {}, ee.prototype.setState = function(e, r) {
  var i = this.__s !== this.state && this.__s || (this.__s = D({}, this.state));
  (typeof e != "function" || (e = e(i, this.props))) && D(i, e), e != null && this.__v && (this.u = false, r && this.__h.push(r), ke(this));
}, ee.prototype.forceUpdate = function(e) {
  this.__v && (e && this.__h.push(e), this.u = true, ke(this));
}, ee.prototype.render = ue, ae = [], yt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Me = w.debounceRendering, w.__e = function(e, r, i) {
  for (var t; r = r.__p; ) if ((t = r.__c) && !t.__p) try {
    if (t.constructor && t.constructor.getDerivedStateFromError != null) t.setState(t.constructor.getDerivedStateFromError(e));
    else {
      if (t.componentDidCatch == null) continue;
      t.componentDidCatch(e);
    }
    return ke(t.__E = t);
  } catch (n) {
    e = n;
  }
  throw e;
}, xt = j;
function mr(e, r) {
  for (var i = 0; i < r.length; i++) {
    var t = r[i];
    t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(e, t.key, t);
  }
}
function _r(e, r, i) {
  return r && mr(e.prototype, r), e;
}
function E() {
  return E = Object.assign || function(e) {
    for (var r = arguments, i = 1; i < arguments.length; i++) {
      var t = r[i];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, E.apply(this, arguments);
}
var pr = "[-\\+]?\\d+%?", br = "[-\\+]?\\d*\\.\\d+%?", U = "(?:" + br + ")|(?:" + pr + ")", At = "[\\s|\\(]+(" + U + ")[,|\\s]+(" + U + ")[,|\\s]+(" + U + ")\\s*\\)?", It = "[\\s|\\(]+(" + U + ")[,|\\s]+(" + U + ")[,|\\s]+(" + U + ")[,|\\s]+(" + U + ")\\s*\\)?", yr = new RegExp("rgb" + At), xr = new RegExp("rgba" + It), Lr = new RegExp("hsl" + At), wr = new RegExp("hsla" + It), de = "^(?:#?|0x?)", X = "([0-9a-fA-F]{1})", K = "([0-9a-fA-F]{2})", Sr = new RegExp(de + X + X + X + "$"), Cr = new RegExp(de + X + X + X + X + "$"), kr = new RegExp(de + K + K + K + "$"), Or = new RegExp(de + K + K + K + K + "$"), Ar = 2e3, Ir = 4e4, le = Math.log, q = Math.round, te = Math.floor;
function T(e, r, i) {
  return Math.min(Math.max(e, r), i);
}
function I(e, r) {
  var i = e.indexOf("%") > -1, t = parseFloat(e);
  return i ? r / 100 * t : t;
}
function M(e) {
  return parseInt(e, 16);
}
function G(e) {
  return e.toString(16).padStart(2, "0");
}
var Z = (function() {
  function e(i, t) {
    this.$ = { h: 0, s: 0, v: 0, a: 1 }, i && this.set(i), this.onChange = t, this.initialValue = E({}, this.$);
  }
  var r = e.prototype;
  return r.set = function(t) {
    if (typeof t == "string") /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t);
    else if (typeof t == "object") t instanceof e ? this.hsva = t.hsva : "r" in t && "g" in t && "b" in t ? this.rgb = t : "h" in t && "s" in t && "v" in t ? this.hsv = t : "h" in t && "s" in t && "l" in t ? this.hsl = t : "kelvin" in t && (this.kelvin = t.kelvin);
    else throw new Error("Invalid color value");
  }, r.setChannel = function(t, n, o) {
    var l;
    this[t] = E({}, this[t], (l = {}, l[n] = o, l));
  }, r.reset = function() {
    this.hsva = this.initialValue;
  }, r.clone = function() {
    return new e(this);
  }, r.unbind = function() {
    this.onChange = void 0;
  }, e.hsvToRgb = function(t) {
    var n = t.h / 60, o = t.s / 100, l = t.v / 100, c = te(n), s = n - c, u = l * (1 - o), h = l * (1 - s * o), a = l * (1 - (1 - s) * o), d = c % 6, f = [l, h, u, u, a, l][d], b = [a, l, l, h, u, u][d], _ = [u, u, a, l, l, h][d];
    return { r: T(f * 255, 0, 255), g: T(b * 255, 0, 255), b: T(_ * 255, 0, 255) };
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
    return n < 66 ? (o = 255, l = -155.25485562709179 - 0.44596950469579133 * (l = n - 2) + 104.49216199393888 * le(l), c = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (c = n - 10) + 115.67994401066147 * le(c)) : (o = 351.97690566805693 + 0.114206453784165 * (o = n - 55) - 40.25366309332127 * le(o), l = 325.4494125711974 + 0.07943456536662342 * (l = n - 50) - 28.0852963507957 * le(l), c = 255), { r: T(te(o), 0, 255), g: T(te(l), 0, 255), b: T(te(c), 0, 255) };
  }, e.rgbToKelvin = function(t) {
    for (var n = t.r, o = t.b, l = 0.4, c = Ar, s = Ir, u; s - c > l; ) {
      u = (s + c) * 0.5;
      var h = e.kelvinToRgb(u);
      h.b / h.r >= o / n ? s = u : c = u;
    }
    return u;
  }, _r(e, [{ key: "hsv", get: function() {
    var t = this.$;
    return { h: t.h, s: t.s, v: t.v };
  }, set: function(t) {
    var n = this.$;
    if (t = E({}, n, t), this.onChange) {
      var o = { h: false, v: false, s: false, a: false };
      for (var l in n) o[l] = t[l] != n[l];
      this.$ = t, (o.h || o.s || o.v || o.a) && this.onChange(this, o);
    } else this.$ = t;
  } }, { key: "hsva", get: function() {
    return E({}, this.$);
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
    this.hsv = E({}, this.hsv, { a: t });
  } }, { key: "kelvin", get: function() {
    return e.rgbToKelvin(this.rgb);
  }, set: function(t) {
    this.rgb = e.kelvinToRgb(t);
  } }, { key: "red", get: function() {
    var t = this.rgb;
    return t.r;
  }, set: function(t) {
    this.rgb = E({}, this.rgb, { r: t });
  } }, { key: "green", get: function() {
    var t = this.rgb;
    return t.g;
  }, set: function(t) {
    this.rgb = E({}, this.rgb, { g: t });
  } }, { key: "blue", get: function() {
    var t = this.rgb;
    return t.b;
  }, set: function(t) {
    this.rgb = E({}, this.rgb, { b: t });
  } }, { key: "rgb", get: function() {
    var t = e.hsvToRgb(this.$), n = t.r, o = t.g, l = t.b;
    return { r: q(n), g: q(o), b: q(l) };
  }, set: function(t) {
    this.hsv = E({}, e.rgbToHsv(t), { a: t.a === void 0 ? 1 : t.a });
  } }, { key: "rgba", get: function() {
    return E({}, this.rgb, { a: this.alpha });
  }, set: function(t) {
    this.rgb = t;
  } }, { key: "hsl", get: function() {
    var t = e.hsvToHsl(this.$), n = t.h, o = t.s, l = t.l;
    return { h: q(n), s: q(o), l: q(l) };
  }, set: function(t) {
    this.hsv = E({}, e.hslToHsv(t), { a: t.a === void 0 ? 1 : t.a });
  } }, { key: "hsla", get: function() {
    return E({}, this.hsl, { a: this.alpha });
  }, set: function(t) {
    this.hsl = t;
  } }, { key: "rgbString", get: function() {
    var t = this.rgb;
    return "rgb(" + t.r + ", " + t.g + ", " + t.b + ")";
  }, set: function(t) {
    var n, o, l, c, s = 1;
    if ((n = yr.exec(t)) ? (o = I(n[1], 255), l = I(n[2], 255), c = I(n[3], 255)) : (n = xr.exec(t)) && (o = I(n[1], 255), l = I(n[2], 255), c = I(n[3], 255), s = I(n[4], 1)), n) this.rgb = { r: o, g: l, b: c, a: s };
    else throw new Error("Invalid rgb string");
  } }, { key: "rgbaString", get: function() {
    var t = this.rgba;
    return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
  }, set: function(t) {
    this.rgbString = t;
  } }, { key: "hexString", get: function() {
    var t = this.rgb;
    return "#" + G(t.r) + G(t.g) + G(t.b);
  }, set: function(t) {
    var n, o, l, c, s = 255;
    if ((n = Sr.exec(t)) ? (o = M(n[1]) * 17, l = M(n[2]) * 17, c = M(n[3]) * 17) : (n = Cr.exec(t)) ? (o = M(n[1]) * 17, l = M(n[2]) * 17, c = M(n[3]) * 17, s = M(n[4]) * 17) : (n = kr.exec(t)) ? (o = M(n[1]), l = M(n[2]), c = M(n[3])) : (n = Or.exec(t)) && (o = M(n[1]), l = M(n[2]), c = M(n[3]), s = M(n[4])), n) this.rgb = { r: o, g: l, b: c, a: s / 255 };
    else throw new Error("Invalid hex string");
  } }, { key: "hex8String", get: function() {
    var t = this.rgba;
    return "#" + G(t.r) + G(t.g) + G(t.b) + G(te(t.a * 255));
  }, set: function(t) {
    this.hexString = t;
  } }, { key: "hslString", get: function() {
    var t = this.hsl;
    return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
  }, set: function(t) {
    var n, o, l, c, s = 1;
    if ((n = Lr.exec(t)) ? (o = I(n[1], 360), l = I(n[2], 100), c = I(n[3], 100)) : (n = wr.exec(t)) && (o = I(n[1], 360), l = I(n[2], 100), c = I(n[3], 100), s = I(n[4], 1)), n) this.hsl = { h: o, s: l, l: c, a: s };
    else throw new Error("Invalid hsl string");
  } }, { key: "hslaString", get: function() {
    var t = this.hsla;
    return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
  }, set: function(t) {
    this.hslString = t;
  } }]), e;
})(), Mr = { sliderShape: "bar", sliderType: "value", minTemperature: 2200, maxTemperature: 11e3 };
function De(e) {
  var r, i = e.width, t = e.sliderSize, n = e.borderWidth, o = e.handleRadius, l = e.padding, c = e.sliderShape, s = e.layoutDirection === "horizontal";
  return t = (r = t) != null ? r : l * 2 + o * 2, c === "circle" ? { handleStart: e.padding + e.handleRadius, handleRange: i - l * 2 - o * 2, width: i, height: i, cx: i / 2, cy: i / 2, radius: i / 2 - n / 2 } : { handleStart: t / 2, handleRange: i - t, radius: t / 2, x: 0, y: 0, width: s ? t : i, height: s ? i : t };
}
function Er(e, r) {
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
function Pr(e, r, i) {
  var t = De(e), n = t.handleRange, o = t.handleStart, l;
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
function Tr(e, r) {
  var i = De(e), t = i.width, n = i.height, o = i.handleRange, l = i.handleStart, c = e.layoutDirection === "horizontal", s = Er(e, r), u = c ? t / 2 : n / 2, h = l + s / 100 * o;
  return c && (h = -1 * h + o + l * 2), { x: c ? u : h, y: c ? h : u };
}
function Rr(e, r) {
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
        var a = Z.kelvinToRgb(u), d = a.r, f = a.g, b = a.b;
        n.push([100 / c * h, "rgb(" + d + "," + f + "," + b + ")"]);
      }
      return n;
    case "hue":
      return [[0, "#f00"], [16.666, "#ff0"], [33.333, "#0f0"], [50, "#0ff"], [66.666, "#00f"], [83.333, "#f0f"], [100, "#f00"]];
    case "saturation":
      var _ = Z.hsvToHsl({ h: i.h, s: 0, v: i.v }), y = Z.hsvToHsl({ h: i.h, s: 100, v: i.v });
      return [[0, "hsl(" + _.h + "," + _.s + "%," + _.l + "%)"], [100, "hsl(" + y.h + "," + y.s + "%," + y.l + "%)"]];
    default:
      var v = Z.hsvToHsl({ h: i.h, s: i.s, v: 100 });
      return [[0, "#000"], [100, "hsl(" + v.h + "," + v.s + "%," + v.l + "%)"]];
  }
}
var Mt = Math.PI * 2, Br = function(r, i) {
  return (r % i + i) % i;
}, Et = function(r, i) {
  return Math.sqrt(r * r + i * i);
};
function Pt(e) {
  return e.width / 2 - e.padding - e.handleRadius - e.borderWidth;
}
function Hr(e, r, i) {
  var t = fe(e), n = t.cx, o = t.cy, l = e.width / 2;
  return Et(n - r, o - i) < l;
}
function fe(e) {
  var r = e.width / 2;
  return { width: e.width, radius: r - e.borderWidth, cx: r, cy: r };
}
function Tt(e, r, i) {
  var t = e.wheelAngle, n = e.wheelDirection;
  return i && n === "clockwise" ? r = t + r : n === "clockwise" ? r = 360 - t + r : i && n === "anticlockwise" ? r = t + 180 - r : n === "anticlockwise" && (r = t - r), Br(r, 360);
}
function Wr(e, r) {
  var i = r.hsv, t = fe(e), n = t.cx, o = t.cy, l = Pt(e), c = (180 + Tt(e, i.h, true)) * (Mt / 360), s = i.s / 100 * l, u = e.wheelDirection === "clockwise" ? -1 : 1;
  return { x: n + s * Math.cos(c) * u, y: o + s * Math.sin(c) * u };
}
function ut(e, r, i) {
  var t = fe(e), n = t.cx, o = t.cy, l = Pt(e);
  r = n - r, i = o - i;
  var c = Tt(e, Math.atan2(-i, -r) * (360 / Mt)), s = Math.min(Et(r, i), l);
  return { h: Math.round(c), s: Math.round(100 / l * s) };
}
function je(e) {
  var r = e.width, i = e.boxHeight, t = e.padding, n = e.handleRadius;
  return { width: r, height: i ?? r, radius: t + n };
}
function dt(e, r, i) {
  var t = je(e), n = t.width, o = t.height, l = t.radius, c = l, s = n - l * 2, u = o - l * 2, h = (r - c) / s * 100, a = (i - c) / u * 100;
  return { s: Math.max(0, Math.min(h, 100)), v: Math.max(0, Math.min(100 - a, 100)) };
}
function zr(e, r) {
  var i = je(e), t = i.width, n = i.height, o = i.radius, l = r.hsv, c = o, s = t - o * 2, u = n - o * 2;
  return { x: c + l.s / 100 * s, y: c + (u - l.v / 100 * u) };
}
function Nr(e, r) {
  var i = r.hue;
  return [[[0, "#fff"], [100, "hsl(" + i + ",100%,50%)"]], [[0, "rgba(0,0,0,0)"], [100, "#000"]]];
}
var Oe;
function Dr(e) {
  Oe || (Oe = document.getElementsByTagName("base"));
  var r = window.navigator.userAgent, i = /^((?!chrome|android).)*safari/i.test(r), t = /iPhone|iPod|iPad/i.test(r), n = window.location;
  return (i || t) && Oe.length > 0 ? n.protocol + "//" + n.host + n.pathname + n.search + e : e;
}
function Rt(e, r, i, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n].x - r, l = t[n].y - i, c = Math.sqrt(o * o + l * l);
    if (c < e.handleRadius) return n;
  }
  return null;
}
function Fe(e) {
  return { boxSizing: "border-box", border: e.borderWidth + "px solid " + e.borderColor };
}
function Pe(e, r, i) {
  return e + "-gradient(" + r + ", " + i.map(function(t) {
    var n = t[0], o = t[1];
    return o + " " + n + "%";
  }).join(",") + ")";
}
function A(e) {
  return typeof e == "string" ? e : e + "px";
}
var jr = { width: 300, height: 300, color: "#fff", colors: [], padding: 6, layoutDirection: "vertical", borderColor: "#fff", borderWidth: 0, handleRadius: 8, activeHandleRadius: null, handleSvg: null, handleProps: { x: 0, y: 0 }, wheelLightness: true, wheelAngle: 0, wheelDirection: "anticlockwise", sliderSize: null, sliderMargin: 12, boxHeight: null }, ft = ["mousemove", "touchmove", "mouseup", "touchend"], ge = (function(e) {
  function r(i) {
    e.call(this, i), this.uid = (Math.random() + 1).toString(36).substring(5);
  }
  return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.render = function(t) {
    var n = this.handleEvent.bind(this), o = { onMouseDown: n, ontouchstart: n }, l = t.layoutDirection === "horizontal", c = t.margin === null ? t.sliderMargin : t.margin, s = { overflow: "visible", display: l ? "inline-block" : "block" };
    return t.index > 0 && (s[l ? "marginLeft" : "marginTop"] = c), x(ue, null, t.children(this.uid, o, s));
  }, r.prototype.handleEvent = function(t) {
    var n = this, o = this.props.onInput, l = this.base.getBoundingClientRect();
    t.preventDefault();
    var c = t.touches ? t.changedTouches[0] : t, s = c.clientX - l.left, u = c.clientY - l.top;
    switch (t.type) {
      case "mousedown":
      case "touchstart":
        var h = o(s, u, 0);
        h !== false && ft.forEach(function(a) {
          document.addEventListener(a, n, { passive: false });
        });
        break;
      case "mousemove":
      case "touchmove":
        o(s, u, 1);
        break;
      case "mouseup":
      case "touchend":
        o(s, u, 2), ft.forEach(function(a) {
          document.removeEventListener(a, n, { passive: false });
        });
        break;
    }
  }, r;
})(ee);
function Y(e) {
  var r = e.r, i = e.url, t = r, n = r;
  return x("svg", { className: "IroHandle IroHandle--" + e.index + " " + (e.isActive ? "IroHandle--isActive" : ""), style: { "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0);", transform: "translate(" + A(e.x) + ", " + A(e.y) + ")", willChange: "transform", top: A(-r), left: A(-r), width: A(r * 2), height: A(r * 2), position: "absolute", overflow: "visible" } }, i && x("use", Object.assign({ xlinkHref: Dr(i) }, e.props)), !i && x("circle", { cx: t, cy: n, r, fill: "none", "stroke-width": 2, stroke: "#000" }), !i && x("circle", { cx: t, cy: n, r: r - 2, fill: e.fill, "stroke-width": 2, stroke: "#fff" }));
}
Y.defaultProps = { fill: "none", x: 0, y: 0, r: 8, url: null, props: { x: 0, y: 0 } };
function he(e) {
  var r = e.activeIndex, i = r !== void 0 && r < e.colors.length ? e.colors[r] : e.color, t = De(e), n = t.width, o = t.height, l = t.radius, c = Tr(e, i), s = Rr(e, i);
  function u(h, a, d) {
    var f = Pr(e, h, a);
    e.parent.inputActive = true, i[e.sliderType] = f, e.onInput(d, e.id);
  }
  return x(ge, Object.assign({}, e, { onInput: u }), function(h, a, d) {
    return x("div", Object.assign({}, a, { className: "IroSlider", style: Object.assign({}, { position: "relative", width: A(n), height: A(o), borderRadius: A(l), background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)", backgroundSize: "8px 8px" }, d) }), x("div", { className: "IroSliderGradient", style: Object.assign({}, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: A(l), background: Pe("linear", e.layoutDirection === "horizontal" ? "to top" : "to right", s) }, Fe(e)) }), x(Y, { isActive: true, index: i.index, r: e.handleRadius, url: e.handleSvg, props: e.handleProps, x: c.x, y: c.y }));
  });
}
he.defaultProps = Object.assign({}, Mr);
function Fr(e) {
  var r = je(e), i = r.width, t = r.height, n = r.radius, o = e.colors, l = e.parent, c = e.activeIndex, s = c !== void 0 && c < e.colors.length ? e.colors[c] : e.color, u = Nr(e, s), h = o.map(function(d) {
    return zr(e, d);
  });
  function a(d, f, b) {
    if (b === 0) {
      var _ = Rt(e, d, f, h);
      _ !== null ? l.setActiveColor(_) : (l.inputActive = true, s.hsv = dt(e, d, f), e.onInput(b, e.id));
    } else b === 1 && (l.inputActive = true, s.hsv = dt(e, d, f));
    e.onInput(b, e.id);
  }
  return x(ge, Object.assign({}, e, { onInput: a }), function(d, f, b) {
    return x("div", Object.assign({}, f, { className: "IroBox", style: Object.assign({}, { width: A(i), height: A(t), position: "relative" }, b) }), x("div", { className: "IroBox", style: Object.assign({}, { width: "100%", height: "100%", borderRadius: A(n) }, Fe(e), { background: Pe("linear", "to bottom", u[1]) + "," + Pe("linear", "to right", u[0]) }) }), o.filter(function(_) {
      return _ !== s;
    }).map(function(_) {
      return x(Y, { isActive: false, index: _.index, fill: _.hslString, r: e.handleRadius, url: e.handleSvg, props: e.handleProps, x: h[_.index].x, y: h[_.index].y });
    }), x(Y, { isActive: true, index: s.index, fill: s.hslString, r: e.activeHandleRadius || e.handleRadius, url: e.handleSvg, props: e.handleProps, x: h[s.index].x, y: h[s.index].y }));
  });
}
var Vr = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)", Gr = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
function Bt(e) {
  var r = fe(e), i = r.width, t = e.colors;
  e.borderWidth;
  var n = e.parent, o = e.color, l = o.hsv, c = t.map(function(h) {
    return Wr(e, h);
  }), s = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", boxSizing: "border-box" };
  function u(h, a, d) {
    if (d === 0) {
      if (!Hr(e, h, a)) return false;
      var f = Rt(e, h, a, c);
      f !== null ? n.setActiveColor(f) : (n.inputActive = true, o.hsv = ut(e, h, a), e.onInput(d, e.id));
    } else d === 1 && (n.inputActive = true, o.hsv = ut(e, h, a));
    e.onInput(d, e.id);
  }
  return x(ge, Object.assign({}, e, { onInput: u }), function(h, a, d) {
    return x("div", Object.assign({}, a, { className: "IroWheel", style: Object.assign({}, { width: A(i), height: A(i), position: "relative" }, d) }), x("div", { className: "IroWheelHue", style: Object.assign({}, s, { transform: "rotateZ(" + (e.wheelAngle + 90) + "deg)", background: e.wheelDirection === "clockwise" ? Vr : Gr }) }), x("div", { className: "IroWheelSaturation", style: Object.assign({}, s, { background: "radial-gradient(circle closest-side, #fff, transparent)" }) }), e.wheelLightness && x("div", { className: "IroWheelLightness", style: Object.assign({}, s, { background: "#000", opacity: 1 - l.v / 100 }) }), x("div", { className: "IroWheelBorder", style: Object.assign({}, s, Fe(e)) }), t.filter(function(f) {
      return f !== o;
    }).map(function(f) {
      return x(Y, { isActive: false, index: f.index, fill: f.hslString, r: e.handleRadius, url: e.handleSvg, props: e.handleProps, x: c[f.index].x, y: c[f.index].y });
    }), x(Y, { isActive: true, index: o.index, fill: o.hslString, r: e.activeHandleRadius || e.handleRadius, url: e.handleSvg, props: e.handleProps, x: c[o.index].x, y: c[o.index].y }));
  });
}
function $r(e) {
  var r = function(i, t) {
    var n, o = document.createElement("div");
    vr(x(e, Object.assign({}, { ref: function(c) {
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
var Ht = (function(e) {
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
    var o = new Z(t, this.onColorChange.bind(this));
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
    return Array.isArray(l) || (l = [{ component: Bt }, { component: he }], n.transparency && l.push({ component: he, options: { sliderType: "alpha" } })), x("div", { class: "IroColorPicker", id: n.id, style: { display: n.display } }, l.map(function(c, s) {
      var u = c.component, h = c.options;
      return x(u, Object.assign({}, n, h, { ref: void 0, onInput: o.emitInputEvent.bind(o), parent: o, index: s }));
    }));
  }, r;
})(ee);
Ht.defaultProps = Object.assign({}, jr, { colors: [], display: "block", id: null, layout: "default", margin: null });
var Ur = $r(Ht), Te;
(function(e) {
  e.version = "5.5.2", e.Color = Z, e.ColorPicker = Ur, (function(r) {
    r.h = x, r.ComponentBase = ge, r.Handle = Y, r.Slider = he, r.Wheel = Bt, r.Box = Fr;
  })(e.ui || (e.ui = {}));
})(Te || (Te = {}));
var H = Te;
function Xr(e, r, i, t, n) {
  if (i === "cct") return [[{ component: H.ui.Slider, options: { sliderType: "kelvin", sliderShape: "circle", minTemperature: t, maxTemperature: n } }, { component: H.ui.Slider, options: { sliderType: "value" } }][e - 1]];
  switch (r) {
    case "wheel":
      return [{ component: H.ui.Wheel, options: {} }, { component: H.ui.Slider, options: { sliderType: "value" } }];
    case "box":
      return [{ component: H.ui.Box, options: { boxLightness: false } }, { component: H.ui.Slider, options: { sliderType: "hue" } }];
    case "slider":
      return [{ component: H.ui.Slider, options: { sliderType: "red" } }, { component: H.ui.Slider, options: { sliderType: "green" } }, { component: H.ui.Slider, options: { sliderType: "blue" } }];
    default:
      return [];
  }
}
function Kr(e, r, i) {
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
function Wt(e, r, i, t) {
  if (!e.width || !e.height) return 12;
  if (r === "slider" && t !== "cct") return (e.width - 3 * (i || 1) * 28) / 2;
  const n = e.maxWidth, o = (i || 1) * 28, l = e.width - n - o;
  return Math.max(12, l);
}
function Yr(e, r, i, t, n, o) {
  e.current && (r.current = H.ColorPicker(e.current, i), r.current.on("color:init", (l) => {
    n && n(l, o);
  }), r.current.on("input:change", (l, c) => {
    t && t(l, c);
  }));
}
function Qr(e) {
  e.current = null;
}
function qr(e, r) {
  !e || !r || e.resize(r);
}
function Zr(e, r) {
  e && e.setOptions(r);
}
function Jr(e, r) {
  typeof e == "function" ? e(r) : e && "current" in e && (e.current = r);
}
const Re = Xt(({ dimensions: e, colorLightUIComponent: r, colorLightSliderWidth: i, colorLightBorderWidth: t, colorLightBorderColor: n, colorWheelLightness: o, colorLightType: l, colorLightCtMin: c, colorLightCtMax: s, colorLightGamut: u, cctComponentNumber: h, onInputChange: a, onColorInit: d }, f) => {
  const { theme: b } = Be(He), _ = O(null), y = O(null), v = O(d), p = O(a);
  v.current = d, p.current = a;
  const L = N(() => Xr(h, r, l, c, s), [h, r, l, c, s]), m = N(() => Kr(e, r, l), [e, r, l]), F = N(() => Wt(e, r, i, l), [e, r, i, l]);
  return P(() => (Yr(_, y, { color: "#ffffff", width: 0, margin: 12, sliderSize: 28, display: "flex", padding: 6, handleRadius: 8, layoutDirection: "horizontal" }, (Q, z) => {
    var _a;
    return (_a = p.current) == null ? void 0 : _a.call(p, Q, z);
  }, (Q, z) => {
    var _a;
    return (_a = v.current) == null ? void 0 : _a.call(v, Q, z);
  }, h), Jr(f, y.current), () => Qr(y)), [f, h]), P(() => {
    qr(y.current, m);
  }, [m]), P(() => {
    Zr(y.current, { layout: L, margin: F, wheelLightness: o, sliderSize: (i || 1) * 28, borderWidth: t || 0, borderColor: !n || typeof n == "string" && n.trim() === "" ? b.palette.primary.main : n });
  }, [b.palette.primary.main, L, F, i, t, n, o]), g($, { ref: _ });
});
Re.displayName = "Light2Picker";
const ei = Yt(g("path", { d: "M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83" }), "PowerSettingsNew"), ti = (e) => C("svg", { width: "800px", height: "800px", viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", className: "iconify iconify--noto", preserveAspectRatio: "xMidYMid meet", ...e }, C("path", { d: "M77.37 19.32C46.83 3.21 19.03 14.69 9.01 30.38c-3.28 5.13-5.6 14.46-5.51 21.86c.18 15.23 8.61 32.2 26.8 49.32c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.27-4.13 14.33-12.65c-.12-1.12-1.08-3.15-2.53-4.04c-4.65-2.82-14.36-4.29-18.93-11.08c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.29-4.33 16.52-14.84c1.1-9.51-12.78-39.9-46.14-57.5zM89.84 71c-2.34 3.56-8.12 2.34-11.91-1.02c-3.79-3.36-4.28-8.96-1.82-11.16c2.5-2.23 7.2-1.72 10.99 1.64c3.78 3.37 4.57 7.74 2.74 10.54z", fill: "#ac5810" }), C("path", { d: "M78.71 15.69C48.17-.42 20.3 12.04 10.28 27.73C.25 43.43 4.61 72.5 31.63 97.93c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.59-6.58 11.57-12.13c-2.77-3.83-12.7-6.72-18.69-15.64c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.65-5.39 15.37-15.13c-.29-9.57-11.63-39.6-44.99-57.21zm14.06 55.03c-2.85 3.08-8.92 2.24-13.56-1.86c-4.63-4.11-6.08-9.93-3.23-13c2.85-3.08 8.92-2.24 13.56 1.86c4.64 4.1 6.08 9.93 3.23 13z", fill: "#f2a259" }), C("path", { d: "M47.62 84.66c1.15-2.94 9.33-6.16 16.85-.81c2.11 1.5 4.75 5.32 4.48 10.12c-.88 15.68-26.61 4.22-21.33-9.31z", fill: "#eee" }), C("path", { d: "M23.73 58.07c2.63-4.2 9.02-4.68 14.61-1.05c4.98 3.23 9.14 11.18 3 16.38c-3.29 2.79-8.98 1.06-12.49-1.63c-4.26-3.25-7.95-9.18-5.12-13.7z", fill: "#2686c6" }), C("path", { d: "M57.67 21.42c.81-3.33 6.46-3.9 10.46-2.41c6.91 2.58 10.04 9.42 7.49 13.23c-3.73 5.57-11.86 3.66-14.94.47c-5.23-5.4-3.69-8.5-3.01-11.29z", fill: "#ffee58" }), C("path", { d: "M97.71 37.72c5.54 2.52 6.26 6.51 5.2 9.42c-.66 1.8-2.01 4.27-4.77 4.49c-4.67.38-5.32-3.48-8.65-4.54c-2.8-.89-3.94-4.72-2.84-7.29c1.02-2.37 4-5.3 11.06-2.08z", fill: "#7cb342" }), C("path", { d: "M66.97 96.96c-1.38 1.25-6.17 2.79-12.25-1.01c-2.06-1.29-4.03-3.16-5.14-5.96c-.87-2.2-.68-4.32-.29-5.26c1.12-2.71 2.83-3.21 2.83-3.21c-1.72-.12-4.97 2.16-5.51 5.15c-.17.94-1.38 6.82 6.41 12.15c6.71 4.6 16.63 4.17 15.98-5.09c-.3 1.14-1.15 2.44-2.03 3.23z", fill: "#b0b0b0" }), C("path", { d: "M44.26 65.72c-.19 3.57-4.37 5.45-6.7 5.46c-6.59.01-12.51-4.13-12.92-11.5c-.07-1.32.58-3.23.58-3.23c-.87.37-2.1 2.25-2.36 3.31c-1.54 6.36 4.87 13.77 11.62 15.27c3.42.76 7.73-.41 9.3-3.47c1.12-2.18.9-4.05.48-5.84z", fill: "#01579b" }), C("path", { d: "M67.32 32.72c-4.48-.51-6.96-3.44-7.61-4.11c-1.78-1.86-2.88-3.67-2.24-6.35c.2-.86.69-1.96 1.29-2.58c-.73.24-1.91 1.81-2.28 2.66c-.38.85-1.76 4.04 1.2 7.97c1.83 2.44 5.02 5.19 9.74 5.85c3.35.47 5.75-.73 7.75-2.68c1.36-1.33 1.96-4.33 1.15-5.88c.13 1.13-1.94 5.93-9 5.12z", fill: "#df7f14" }), C("path", { d: "M104.17 44.85c-.41-1.51-1.58-3.08-1.7-3.16c.51.98 1.52 3.92-.6 6.78c-1.07 1.44-4.29 3.21-8.09.13c-1.12-.91-2.02-1.81-4.04-2.55c-5.13-1.89-2.89-7.11-1.11-8.73c-1.4.73-2.67 2.04-3.2 4.04c-.74 2.79 1.09 5.71 3.87 7.11c3.16 1.59 4.18 4.66 8.51 4.66c.22 0 .45-.01.7-.03c2.92-.25 4.15-1.38 5.04-2.76c1.09-1.72 1.12-3.67.62-5.49z", fill: "#558b2f" }), C("path", { d: "M25.82 25.79c2.28-2.25 6.25-4.63 12.06-1.6c3.5 1.82 7.57 3.96 5.73 11.36c-1.14 4.59-7.82 7.02-13.4 1.91c-2.21-2.02-10.61-5.53-4.39-11.67z", fill: "#f44336" }), C("path", { d: "M44.94 34.56c.07-1.75-.83-3.88-1.14-4.6c.05 1.05.96 3.7-3.21 7.21c-1.45 1.22-4.08 2.15-6.95 1.02c-1.47-.58-3.58-3.01-5.09-3.62c-5.61-2.26-3.19-8.27-2.4-9.09c-1.27.89-2.35 2.31-2.75 4.38c-.52 2.71-.04 5.27 3.68 8.2c10.56 8.33 13.8 3.31 14.95 2.03c1.45-1.56 2.83-3.6 2.91-5.53z", fill: "#c62828" }), C("path", { d: "M65.74 19.36c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.51-1.1 4.28-2.44 2.22-3.41z", fill: "#ffffff" }), C("path", { d: "M34.76 24.46c-1.45-.96-6.08-.97-7.47 2.58c-.84 2.13.47 4.6 2.04 4.56c1.79-.04.93-2.15 2.42-3.49c1.88-1.69 5.04-2.31 3.01-3.65z", fill: "#ffffff" }), C("path", { d: "M34.07 56.5c-1.37-.87-5.43-1.21-7.11 1.97c-1.23 2.34.46 4.92 1.93 4.85c1.67-.08 1.11-2.74 2.18-3.34c1.63-.91 4.92-2.26 3-3.48z", fill: "#ffffff" }), C("path", { d: "M57.4 83.13c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.5-1.1 4.27-2.44 2.22-3.41z", fill: "#ffffff" }), C("path", { d: "M95.08 38.05c-1.32-.94-5.49-1.49-6.91 1.81c-.85 1.98.28 4.35 1.75 4.36c1.67.01 1.26-2.67 2.37-3.21c1.67-.81 4.64-1.64 2.79-2.96z", fill: "#ffffff" })), J = (e, r, i) => {
  const t = r[e];
  if (typeof t != "string" || !t.trim()) return;
  const n = i(e), o = Number(n);
  return Number.isFinite(o) ? o : void 0;
}, ri = (e, r) => {
  if (e !== void 0) return Math.round(typeof r == "number" && r === 254 ? e / 254 * 100 : e);
}, ce = (e, r, i, t) => {
  const n = J(e, r, i);
  return ri(n, t);
};
function zt(e, r, i) {
  const t = J("colorLightTemperatureOid", r, i) ?? 2e3;
  e.kelvin = t;
}
function gt(e, r, i) {
  var _a;
  const t = ce("colorLightBrightnessOid", r, i, (_a = r.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
  t !== void 0 && (e.value = t);
}
function re(e, r, i, t, n) {
  var _a, _b, _c;
  switch (r) {
    case "cct": {
      if (n === 1) zt(e, t, i);
      else if (n === 2) {
        const o = ce("colorLightBrightnessOid", t, i, (_a = t.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
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
        const o = J("colorLightRedOid", t, i), l = J("colorLightGreenOid", t, i), c = J("colorLightBlueOid", t, i);
        e.red = o ?? 0, e.green = l ?? 0, e.blue = c ?? 0;
      }
      break;
    }
    case "h/s/v":
    case "h/s/v/cct": {
      if (t.colorLightHueOid && t.colorLightSaturationOid && t.colorLightBrightnessOid) {
        const o = J("colorLightHueOid", t, i), l = ce("colorLightSaturationOid", t, i, (_b = t.colorLightSaturationOidObject) == null ? void 0 : _b.maxValue), c = ce("colorLightBrightnessOid", t, i, (_c = t.colorLightBrightnessOidObject) == null ? void 0 : _c.maxValue);
        o !== void 0 && (e.hue = o), l !== void 0 && (e.saturation = l), c !== void 0 && (e.value = c);
      }
      break;
    }
  }
}
const ii = (e, r) => !e || !r ? true : !!r[e], ni = (e) => e === "kelvin" ? 2e3 : e === "hexString" ? "#ffffff" : 0, Ae = (e, r) => {
  const i = r.value;
  r.hexString = e.hexString, r.value = i;
}, oi = (e) => g(mt, { component: ti, viewBox: "0 0 128 128", ...e }), li = (e) => W(mt, { viewBox: "0 0 512 512", ...e, children: [W("defs", { children: [W("linearGradient", { id: "cctGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [g("stop", { offset: "0%", stopColor: "#1E90FF" }), g("stop", { offset: "100%", stopColor: "#FF8C00" })] }), W("filter", { id: "insetShadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [g("feOffset", { dx: "0", dy: "2" }), g("feGaussianBlur", { stdDeviation: "4", result: "offset-blur" }), g("feComposite", { operator: "out", in: "SourceGraphic", in2: "offset-blur", result: "inverse" }), g("feFlood", { floodColor: "#FFF176", floodOpacity: "0.4" }), g("feComposite", { in2: "inverse", operator: "in", result: "shadow" }), g("feComposite", { in: "shadow", in2: "SourceGraphic", operator: "over" })] })] }), g("circle", { cx: "256", cy: "256", r: "252", fill: "#FFF176" }), g("circle", { cx: "256", cy: "256", r: "240", fill: "url(#cctGradient)", filter: "url(#insetShadow)" }), g("g", { transform: "translate(256 280) scale(1.2) translate(-256 -256)", children: g("path", { d: "M192 200c0-35 29-64 64-64s64 29 64 64c0 23.1-12.2 43.5-30.6 55.3V288c0 8.8-7.2 16-16 16h-35c-8.8 0-16-7.2-16-16v-32.7C204.2 243.5 192 223.1 192 200zm56 136h16c4.4 0 8 3.6 8 8v16h-32v-16c0-4.4 3.6-8 8-8z", fill: "#FFF176", stroke: "#000000", strokeWidth: "4" }) })] });
function ci() {
  var _a;
  const [e, r] = Ie(false), i = Be(He), { widget: t, widget: { data: n }, values: o, getPropertyValue: l } = i, { data: c } = _t(""), s = O(null), u = qt(s.current, (n.colorLightSliderWidth || 1) * 28), h = O(null), a = O(null), d = O(e), f = O(t.data);
  f.current = t.data;
  const b = O(l);
  b.current = l;
  const [_, y] = Ie(false), v = O(false), p = O(false), L = n.colorLightType === "rgbcct" || n.colorLightType === "r/g/b/cct" || n.colorLightType === "h/s/v/cct", m = e && L ? "cct" : n.colorLightType, { value: F, updateValue: Q } = B("colorLightSwitchOid"), { value: z, hasBackendChange: Ve, updateValue: ve } = B("colorLightTemperatureOid"), { updateValue: ie, hasBackendChange: ne } = B("colorLightBrightnessOid"), { updateValue: me, hasBackendChange: Ge } = B("colorLightRgbHexOid"), { updateValue: _e, hasBackendChange: $e } = B("colorLightRedOid"), { updateValue: pe, hasBackendChange: Ue } = B("colorLightGreenOid"), { updateValue: be, hasBackendChange: Xe } = B("colorLightBlueOid"), { updateValue: ye, hasBackendChange: Ke } = B("colorLightHueOid"), { updateValue: xe, hasBackendChange: Ye } = B("colorLightSaturationOid"), Dt = ((_a = t.data.colorLightSwitchOidObject) == null ? void 0 : _a.type) === "boolean", Qe = (S, k) => {
    re(S, m, l, t.data, k);
  }, qe = N(() => (S, k) => {
    const Le = (k == null ? void 0 : k.maxValue) === 254, oe = Math.round(S);
    return Le ? Math.round(S / 100 * 254) : oe;
  }, []), Ze = N(() => ({ cct: [{ colorProp: "kelvin", oidField: "colorLightTemperatureOid", setter: ve, cctComponent: 1 }, { colorProp: "value", oidField: "colorLightBrightnessOid", setter: ie, normalize: true, cctComponent: 2 }], rgb: [{ colorProp: "hexString", oidField: "colorLightRgbHexOid", setter: me }], rgbcct: [{ colorProp: "hexString", oidField: "colorLightRgbHexOid", setter: me }], "r/g/b": [{ colorProp: "red", oidField: "colorLightRedOid", setter: _e }, { colorProp: "green", oidField: "colorLightGreenOid", setter: pe }, { colorProp: "blue", oidField: "colorLightBlueOid", setter: be }], "r/g/b/cct": [{ colorProp: "red", oidField: "colorLightRedOid", setter: _e }, { colorProp: "green", oidField: "colorLightGreenOid", setter: pe }, { colorProp: "blue", oidField: "colorLightBlueOid", setter: be }], "h/s/v": [{ colorProp: "hue", oidField: "colorLightHueOid", setter: ye, changeKey: "h" }, { colorProp: "saturation", oidField: "colorLightSaturationOid", setter: xe, normalize: true, changeKey: "s" }, { colorProp: "value", oidField: "colorLightBrightnessOid", setter: ie, normalize: true, changeKey: "v" }], "h/s/v/cct": [{ colorProp: "hue", oidField: "colorLightHueOid", setter: ye, changeKey: "h" }, { colorProp: "saturation", oidField: "colorLightSaturationOid", setter: xe, normalize: true, changeKey: "s" }, { colorProp: "value", oidField: "colorLightBrightnessOid", setter: ie, normalize: true, changeKey: "v" }] }), [ve, ie, me, _e, pe, be, ye, xe]), Je = N(() => (S, k, Le) => {
    if (!(!m || p.current || v.current)) {
      p.current = true;
      try {
        const oe = Ze[m];
        if (!oe) return;
        oe.forEach((we) => {
          const { colorProp: tt, oidField: Ft, setter: Vt, normalize: Gt, cctComponent: rt, changeKey: $t } = we;
          if (rt !== void 0 && k !== rt || !ii($t, Le)) return;
          const Ut = `${Ft}Object`, it = t.data[Ut];
          if (!it) return;
          let R = S[tt];
          Gt && typeof R == "number" ? R = qe(R, it) : typeof R == "number" && (R = Math.round(R)), R == null && (R = ni(tt)), Vt(R);
        }), k === 1 && y((we) => !we);
      } finally {
        Promise.resolve().then(() => {
          p.current = false;
        });
      }
    }
  }, [m, Ze, t, qe, p]), jt = N(() => Wt(u, n.colorLightUIComponent, n.colorLightSliderWidth, m), [u, n.colorLightUIComponent, n.colorLightSliderWidth, m]), et = N(() => ({ dimensions: u, colorLightGamut: n.colorLightGamut, colorWheelLightness: n.colorWheelLightness, colorLightUIComponent: n.colorLightUIComponent, colorLightSliderWidth: n.colorLightSliderWidth, colorLightBorderWidth: n.colorLightBorderWidth, colorLightBorderColor: n.colorLightBorderColor, colorLightType: m, colorLightCtMin: n.colorLightCtMin, colorLightCtMax: n.colorLightCtMax }), [u, n.colorLightGamut, n.colorWheelLightness, n.colorLightUIComponent, n.colorLightSliderWidth, n.colorLightBorderWidth, n.colorLightBorderColor, n.colorLightCtMin, n.colorLightCtMax, m]);
  return P(() => {
    if (m !== "cct" || !h.current || !a.current) return;
    const S = h.current.color, k = a.current.color;
    if (_) {
      v.current = true;
      try {
        Ae(S, k);
      } finally {
        v.current = false;
      }
    }
  }, [m, _]), P(() => {
    if (m !== "cct" || !h.current || !a.current || !Ve) return;
    const S = h.current.color, k = a.current.color;
    if (z != null) {
      v.current = true;
      try {
        S.kelvin = Number(z), Ae(S, k);
      } finally {
        v.current = false;
      }
    }
  }, [m, Ve, z]), P(() => {
    if (!(!e || m !== "cct") && !(!ne || !a.current)) {
      v.current = true;
      try {
        gt(a.current.color, f.current, b.current);
      } finally {
        v.current = false;
      }
    }
  }, [e, m, ne]), P(() => {
    if (!(e || !["rgb", "rgbcct"].includes(m || "")) && !(!Ge || !h.current)) {
      v.current = true;
      try {
        re(h.current.color, m, l, t.data);
      } finally {
        v.current = false;
      }
    }
  }, [e, m, Ge, l, t.data]), P(() => {
    if (!(e || !["r/g/b", "r/g/b/cct"].includes(m || "")) && !(!$e && !Ue && !Xe || !h.current)) {
      v.current = true;
      try {
        re(h.current.color, m, l, t.data);
      } finally {
        v.current = false;
      }
    }
  }, [e, m, $e, Ue, Xe, l, t.data]), P(() => {
    if (!(e || !["h/s/v", "h/s/v/cct"].includes(m || "")) && !(!Ke && !Ye && !ne || !h.current)) {
      v.current = true;
      try {
        re(h.current.color, m, l, t.data);
      } finally {
        v.current = false;
      }
    }
  }, [e, m, Ke, Ye, ne, l, t.data]), P(() => {
    if (!e || !L || !h.current || !a.current) return;
    const S = h.current.color, k = a.current.color;
    v.current = true;
    try {
      zt(S, f.current, b.current), d.current === false && Number(z) !== Number(S.kelvin) && ve(Number(S.kelvin)), Ae(S, k);
    } finally {
      v.current = false;
    }
  }, [e, L]), P(() => {
    !d.current || e || !L || h.current && gt(h.current.color, f.current, b.current);
  }, [e, L]), P(() => {
    if (!(d.current !== true || e || !L || !h.current)) {
      v.current = true;
      try {
        re(h.current.color, m, b.current, f.current);
      } finally {
        v.current = false;
      }
    }
  }, [e, L, m]), P(() => {
    d.current = e;
  }, [e]), W(pt, { isValidType: Dt, data: c, children: [g(bt, { data: c, widget: t }), n.colorLightType !== "none" ? W($, { sx: { minWidth: 0, height: "100%", display: "flex", flexShrink: 0, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }, children: [g(Ce, { onClick: () => {
    Q(!F);
  }, children: g(ei, { sx: { color: F ? "red" : "green", width: "26px", height: "26px" } }) }), L && W($, { sx: { display: "inline-block" }, children: [g(nt, { orientation: "horizontal", flexItem: true, variant: "fullWidth" }), g(Ce, { onClick: () => r(false), children: g(oi, { sx: { width: "24px", height: "24px" } }) })] }), L && g($, { sx: { display: "block" }, children: g(Ce, { onClick: () => r(true), children: g(li, { sx: { width: "24px", height: "24px" } }) }) })] }) : null, g(nt, { orientation: "vertical", flexItem: true, variant: "middle" }), g($, { ref: s, sx: { minWidth: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", p: Number(n.colorLightPadding) || 0 }, children: Object.keys(o).length !== 0 && u.width !== void 0 && n.colorLightType !== "none" && W(vt, { children: [g(Re, { cctComponentNumber: 1, ref: h, onColorInit: Qe, onInputChange: (S, k) => Je(S, 1, k), ...et }), m === "cct" && g($, { sx: { ml: `${jt}px` }, children: g(Re, { cctComponentNumber: 2, onColorInit: Qe, onInputChange: (S, k) => Je(S, 2, k), ref: a, ...et }) })] }) })] });
}
const ai = ar(ci);
class Nt extends Qt {
  static getWidgetInfo() {
    return { id: "tplLight2CollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "Light2CollectionWidget", visWidgetLabel: "light2_collection_widget", visOrder: 11, visAttrs: [{ name: "common", fields: [...ot({ groupName: "", allFields: true })] }, { name: "light", label: "group_light", fields: [...Jt(), ...or()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...ot({ groupName: "", allFields: false })], hidden: (r) => !r.colorLightButton }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-light.png" };
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
    super.renderWidgetBody(r);
    const i = !(r.widget.data.noCard || r.widget.usedInWidget);
    this.wrappedCollectionContent = i;
    const t = { id: r.id, refService: r.refService, style: r.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: i };
    return Zt(this.wrapContent(g(ai, {})), t);
  }
}
export {
  Nt as default
};
