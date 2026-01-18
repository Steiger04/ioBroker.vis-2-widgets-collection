import { j as g, C as W, v as Me, y as at, E as ht, G as ut, z as Nt, M as Dt, w as N, c as Ft, a4 as Vt, I as xe, D as Je, aj as dt, H as Gt, J as Ze, K as $t, __tla as __tla_0 } from "./useData-CgqtnjcW.js";
import { u as T, d as Ut, __tla as __tla_1 } from "./useValueState-BUSze0XD.js";
import { o as Xt, __tla as __tla_2 } from "./commonObjectFields-BjSiO2Us.js";
import { v as f, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { B as Kt, __tla as __tla_4 } from "./Button-DBFmN6pF.js";
import { u as Yt, __tla as __tla_5 } from "./useOidValue-BAW-6i0B.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let It;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  const et = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=", tt = {
    "switch.light": "colorLightSwitchOid",
    "level.color.rgb": "colorLightRgbHexOid",
    "level.color.red": "colorLightRedOid",
    "level.color.green": "colorLightGreenOid",
    "level.color.blue": "colorLightBlueOid",
    "level.color.hue": "colorLightHueOid",
    "level.color.saturation": "colorLightSaturationOid",
    "level.brightness": "colorLightBrightnessOid",
    "level.dimmer": "colorLightBrightnessOid",
    "level.color.temperature": "colorLightTemperatureOid",
    "level.color.luminance": "colorLightBrightnessOid",
    "level.color.white": "colorLightBrightnessOid"
  }, Qt = async (e, r, i, t) => {
    const n = e.name;
    if (n && r[n]) {
      const o = await t.getObject(r[n]);
      if (o && o.common) {
        const l = r[n].split(".");
        l.pop();
        const c = await t.getObjectView(`${l.join(".")}.`, `${l.join(".")}.\u9999`, "state");
        if (c) {
          const a = r;
          await Promise.all(Object.values(c).map(async (u) => {
            const h = u.common.role;
            if (h && tt[h] && (!r[h] || r[h] === "nothing_selected") && n !== h) {
              const s = tt[h];
              a[s] = u._id, await Xt([
                "boolean",
                "number",
                "string",
                "mixed"
              ], s)(e, r, i, t), s === "colorLightTemperatureOid" && (!a.colorLightCtMin && u.common.min && (a.colorLightCtMin = u.common.min), !a.colorLightCtMax && u.common.max && (a.colorLightCtMax = u.common.max)), s === "colorLightSwitchOid" && (a.values_count = 2, a.value1 = true, a.alias1 = "TRUE", a.value2 = false, a.alias2 = "FALSE", a.iconSize = 0, a.iconSmall1 = et, a.iconColor1 = "red", a.iconSize1 = 100, a.iconSmall2 = et, a.iconColor2 = "green", a.iconSize2 = 100);
            }
          })), i(r);
        }
      }
    }
  }, qt = () => [
    {
      type: "custom",
      component: () => g.jsx(W, {})
    },
    {
      name: "colorLightButton",
      label: "color_light_button",
      type: "checkbox",
      default: false
    },
    {
      name: "colorLightDelayLongPress",
      label: "color_light_delay_long_press",
      type: "number",
      default: 500,
      min: 0,
      max: 1e4,
      step: 1,
      hidden: "!data.colorLightButton"
    },
    {
      name: "colorLightModalWidth",
      label: "color_light_modal_width",
      type: "number",
      min: 0,
      max: 5e3,
      step: 1,
      hidden: "!data.colorLightButton",
      tooltip: "color_light_modal_width_tooltip"
    },
    {
      name: "colorLightModalHeight",
      label: "color_light_modal_height",
      type: "number",
      default: 300,
      min: 0,
      max: 5e3,
      step: 1,
      hidden: "!data.colorLightButton"
    },
    {
      type: "custom",
      component: () => g.jsx(W, {})
    },
    {
      name: "colorLightSliderWidth",
      label: "color_light_slider_width",
      type: "slider",
      min: 0,
      max: 10,
      default: 1,
      step: 0.1
    },
    {
      name: "colorLightBorderWidth",
      label: "color_light_border_width",
      type: "slider",
      min: 0,
      max: 100,
      default: 3,
      step: 1
    },
    {
      name: "colorLightBorderColor",
      label: "color_light_border_color",
      type: "color"
    },
    {
      name: "colorLightPadding",
      type: "number",
      label: "color_light_padding",
      default: 1,
      step: 0.5,
      min: 0
    },
    {
      type: "custom",
      component: () => g.jsx(W, {})
    },
    {
      name: "colorLightSwitchOid",
      type: "id",
      label: "color_light_switch_oid",
      onChange: Qt
    },
    {
      type: "custom",
      component: () => g.jsx(W, {})
    },
    {
      name: "colorLightUIComponent",
      type: "select",
      label: "color_light_ui_component",
      options: [
        {
          value: "wheel",
          label: "Wheel"
        },
        {
          value: "box",
          label: "Box"
        },
        {
          value: "slider",
          label: "Slider"
        }
      ],
      default: "wheel",
      noTranslation: true,
      hidden: (e) => e.colorLightType === "cct" || e.colorLightType === "none"
    },
    {
      name: "colorWheelLightness",
      label: "color_wheel_lightness",
      type: "checkbox",
      default: false,
      hidden: (e) => e.colorLightType === "none" || e.colorLightType === "cct" || e.colorLightUIComponent !== "wheel"
    },
    {
      type: "custom",
      component: () => g.jsx(W, {}),
      hidden: (e) => e.colorLightType === "cct" || e.colorLightType === "none"
    },
    {
      name: "colorLightType",
      type: "select",
      label: "color_light_type",
      options: [
        {
          value: "none",
          label: "nothing_selected"
        },
        {
          value: "cct",
          label: "cct"
        },
        {
          value: "rgb",
          label: "rgb"
        },
        {
          value: "rgbcct",
          label: "rgb & cct"
        },
        {
          value: "r/g/b",
          label: "r/g/b"
        },
        {
          value: "r/g/b/cct",
          label: "r/g/b & cct"
        },
        {
          value: "h/s/v",
          label: "h/s/v"
        },
        {
          value: "h/s/v/cct",
          label: "h/s/v & cct"
        }
      ],
      default: "none",
      noTranslation: true
    },
    {
      type: "custom",
      component: () => g.jsx(W, {}),
      hidden: (e) => e.colorLightType === "none"
    },
    {
      name: "colorLightTemperatureOid",
      type: "id",
      label: "color_light_temperature_oid",
      hidden: (e) => ![
        "cct",
        "rgbcct",
        "r/g/b/cct",
        "h/s/v/cct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightCtMin",
      type: "number",
      min: 500,
      max: 1e4,
      default: 2e3,
      label: "color_light_ct_min",
      hidden: (e) => ![
        "cct",
        "rgbcct",
        "r/g/b/cct",
        "h/s/v/cct"
      ].includes(e.colorLightType || "") || !e.colorLightTemperatureOid
    },
    {
      name: "colorLightCtMax",
      type: "number",
      min: 500,
      max: 1e4,
      default: 6500,
      label: "color_light_ct_max",
      hidden: (e) => ![
        "cct",
        "rgbcct",
        "r/g/b/cct",
        "h/s/v/cct"
      ].includes(e.colorLightType || "") || !e.colorLightTemperatureOid
    },
    {
      type: "custom",
      component: () => g.jsx(W, {}),
      hidden: (e) => ![
        "cct",
        "rgbcct",
        "r/g/b/cct",
        "h/s/v/cct"
      ].includes(e.colorLightType || "") || e.colorLightType === "none"
    },
    {
      name: "colorLightRgbHexOid",
      type: "id",
      label: "color_light_rgb_hex_oid",
      hidden: (e) => ![
        "rgb",
        "rgbcct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightRedOid",
      type: "id",
      label: "color_light_red_oid",
      hidden: (e) => ![
        "r/g/b",
        "r/g/b/cct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightGreenOid",
      type: "id",
      label: "color_light_green_oid",
      hidden: (e) => ![
        "r/g/b",
        "r/g/b/cct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightBlueOid",
      type: "id",
      label: "color_light_blue_oid",
      hidden: (e) => ![
        "r/g/b",
        "r/g/b/cct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightHueOid",
      type: "id",
      label: "color_light_hue_oid",
      hidden: (e) => ![
        "h/s/v",
        "h/s/v/cct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightSaturationOid",
      type: "id",
      label: "color_light_saturation_oid",
      hidden: (e) => ![
        "h/s/v",
        "h/s/v/cct"
      ].includes(e.colorLightType || "")
    },
    {
      name: "colorLightBrightnessOid",
      type: "id",
      label: "color_light_brightness_oid",
      hidden: (e) => ![
        "cct",
        "h/s/v",
        "h/s/v/cct"
      ].includes(e.colorLightType || "")
    }
  ];
  function Jt({ onClick: e = () => {
  }, onLongPress: r = () => {
  }, ms: i = 300 } = {}) {
    const t = f.useRef(null), n = f.useRef(null), o = f.useRef(false), l = f.useCallback(() => {
      n.current && (o.current = true, r(n.current)), t.current = null, n.current = null;
    }, [
      r
    ]), c = f.useCallback((u) => {
      "touches" in u && u.preventDefault(), n.current = u, o.current = false, t.current = setTimeout(l, i);
    }, [
      l,
      i
    ]), a = f.useCallback((u) => {
      const h = n.current, s = o.current;
      t.current && (clearTimeout(t.current), t.current = null), !s && h && e(h), n.current = null, o.current = false;
    }, [
      e
    ]);
    return f.useMemo(() => ({
      onMouseDown: c,
      onMouseUp: a,
      onMouseLeave: a,
      onTouchStart: c,
      onTouchEnd: a
    }), [
      c,
      a
    ]);
  }
  function Zt(e) {
    return typeof e == "object" && e !== null && "colorLightButton" in e && "colorLightSwitchOid" in e;
  }
  function er(e) {
    const r = (t) => {
      var _a;
      const n = f.useContext(Me);
      if (!n || !n.widget) throw new Error("withButtonModal must be used within a CollectionProvider");
      const { widget: o } = n, [l, c] = f.useState(false), a = o.data, { value: u, updateValue: h } = T("colorLightSwitchOid"), { data: s } = at("colorLightSwitchOid"), d = Zt(a) && a.colorLightButton, b = ((_a = d ? a.colorLightSwitchOidObject : void 0) == null ? void 0 : _a.type) === "boolean", x = Jt({
        onClick: () => h(!u),
        onLongPress: () => c(true),
        ms: d ? a.colorLightDelayLongPress ?? 500 : 500
      }), L = d ? (a.colorLightSliderWidth || 1) * 28 : 28, k = d && typeof a.colorLightModalWidth == "number" && a.colorLightModalWidth > 0 ? a.colorLightModalWidth : (d && a.colorLightModalHeight || 300) + 40 + 12 + L;
      return d ? g.jsxs(g.Fragment, {
        children: [
          g.jsxs(ht, {
            isValidType: b,
            data: s,
            oidValue: u,
            children: [
              g.jsx(ut, {
                data: s,
                widget: o
              }),
              g.jsx(Kt, {
                variant: "text",
                ...x,
                sx: {
                  color: s.iconColorActive || "inherit",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: g.jsx("img", {
                  alt: "",
                  src: s.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                  style: {
                    width: typeof s.iconSizeOnly == "number" && `calc(100% * ${s.iconSizeOnly} / 100)` || "100%",
                    height: typeof s.iconSizeOnly == "number" && `calc(100% * ${s.iconSizeOnly} / 100)` || "100%",
                    objectFit: "contain",
                    ...Nt(s.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", s.iconColorActive || s.iconColor)
                  }
                })
              })
            ]
          }),
          g.jsx(Dt, {
            open: l,
            onClose: () => c(false),
            children: g.jsx(N, {
              sx: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: k,
                height: a.colorLightModalHeight || 300
              },
              children: g.jsx(e, {
                ...t
              })
            })
          })
        ]
      }) : g.jsx(e, {
        ...t
      });
    }, i = e.displayName || e.name || "Component";
    return r.displayName = `withButtonModal(${i})`, r;
  }
  var S, oe, ft, Ce, gt, H = {}, Re = [], tr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
  function B(e, r) {
    for (var i in r) e[i] = r[i];
    return e;
  }
  function vt(e) {
    var r = e.parentNode;
    r && r.removeChild(e);
  }
  function y(e, r, i) {
    var t, n, o, l, c = arguments;
    if (r = B({}, r), arguments.length > 3) for (i = [
      i
    ], t = 3; t < arguments.length; t++) i.push(c[t]);
    if (i != null && (r.children = i), e != null && e.defaultProps != null) for (n in e.defaultProps) r[n] === void 0 && (r[n] = e.defaultProps[n]);
    return l = r.key, (o = r.ref) != null && delete r.ref, l != null && delete r.key, ke(e, r, l, o);
  }
  function ke(e, r, i, t) {
    var n = {
      type: e,
      props: r,
      key: i,
      ref: t,
      __k: null,
      __p: null,
      __b: 0,
      __e: null,
      l: null,
      __c: null,
      constructor: void 0
    };
    return S.vnode && S.vnode(n), n;
  }
  function se(e) {
    return e.children;
  }
  function rr(e) {
    if (e == null || typeof e == "boolean") return null;
    if (typeof e == "string" || typeof e == "number") return ke(null, e, null, null);
    if (e.__e != null || e.__c != null) {
      var r = ke(e.type, e.props, e.key, null);
      return r.__e = e.__e, r;
    }
    return e;
  }
  function Q(e, r) {
    this.props = e, this.context = r;
  }
  function le(e, r) {
    if (r == null) return e.__p ? le(e.__p, e.__p.__k.indexOf(e) + 1) : null;
    for (var i; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) return i.__e;
    return typeof e.type == "function" ? le(e) : null;
  }
  function mt(e) {
    var r, i;
    if ((e = e.__p) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, r = 0; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) {
        e.__e = e.__c.base = i.__e;
        break;
      }
      return mt(e);
    }
  }
  function Le(e) {
    (!e.__d && (e.__d = true) && oe.push(e) === 1 || Ce !== S.debounceRendering) && (Ce = S.debounceRendering, (S.debounceRendering || ft)(ir));
  }
  function ir() {
    var e, r, i, t, n, o, l, c;
    for (oe.sort(function(a, u) {
      return u.__v.__b - a.__v.__b;
    }); e = oe.pop(); ) e.__d && (i = void 0, t = void 0, o = (n = (r = e).__v).__e, l = r.__P, c = r.u, r.u = false, l && (i = [], t = je(l, n, B({}, n), r.__n, l.ownerSVGElement !== void 0, null, i, c, o ?? le(n)), pt(i, n), t != o && mt(n)));
  }
  function bt(e, r, i, t, n, o, l, c, a) {
    var u, h, s, d, v, _, b, x = i && i.__k || Re, L = x.length;
    if (c == H && (c = o != null ? o[0] : L ? le(i, 0) : null), u = 0, r.__k = Ie(r.__k, function(m) {
      if (m != null) {
        if (m.__p = r, m.__b = r.__b + 1, (s = x[u]) === null || s && m.key == s.key && m.type === s.type) x[u] = void 0;
        else for (h = 0; h < L; h++) {
          if ((s = x[h]) && m.key == s.key && m.type === s.type) {
            x[h] = void 0;
            break;
          }
          s = null;
        }
        if (d = je(e, m, s = s || H, t, n, o, l, null, c, a), (h = m.ref) && s.ref != h && (b || (b = [])).push(h, m.__c || d, m), d != null) {
          if (_ == null && (_ = d), m.l != null) d = m.l, m.l = null;
          else if (o == s || d != c || d.parentNode == null) {
            e: if (c == null || c.parentNode !== e) e.appendChild(d);
            else {
              for (v = c, h = 0; (v = v.nextSibling) && h < L; h += 2) if (v == d) break e;
              e.insertBefore(d, c);
            }
            r.type == "option" && (e.value = "");
          }
          c = d.nextSibling, typeof r.type == "function" && (r.l = d);
        }
      }
      return u++, m;
    }), r.__e = _, o != null && typeof r.type != "function") for (u = o.length; u--; ) o[u] != null && vt(o[u]);
    for (u = L; u--; ) x[u] != null && yt(x[u], x[u]);
    if (b) for (u = 0; u < b.length; u++) _t(b[u], b[++u], b[++u]);
  }
  function Ie(e, r, i) {
    if (i == null && (i = []), e == null || typeof e == "boolean") r && i.push(r(null));
    else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Ie(e[t], r, i);
    else i.push(r ? r(rr(e)) : e);
    return i;
  }
  function nr(e, r, i, t, n) {
    var o;
    for (o in i) o in r || it(e, o, null, i[o], t);
    for (o in r) n && typeof r[o] != "function" || o === "value" || o === "checked" || i[o] === r[o] || it(e, o, r[o], i[o], t);
  }
  function rt(e, r, i) {
    r[0] === "-" ? e.setProperty(r, i) : e[r] = typeof i == "number" && tr.test(r) === false ? i + "px" : i ?? "";
  }
  function it(e, r, i, t, n) {
    var o, l, c, a, u;
    if (!((r = n ? r === "className" ? "class" : r : r === "class" ? "className" : r) === "key" || r === "children")) if (r === "style") if (o = e.style, typeof i == "string") o.cssText = i;
    else {
      if (typeof t == "string" && (o.cssText = "", t = null), t) for (l in t) i && l in i || rt(o, l, "");
      if (i) for (c in i) t && i[c] === t[c] || rt(o, c, i[c]);
    }
    else r[0] === "o" && r[1] === "n" ? (a = r !== (r = r.replace(/Capture$/, "")), u = r.toLowerCase(), r = (u in e ? u : r).slice(2), i ? (t || e.addEventListener(r, nt, a), (e.t || (e.t = {}))[r] = i) : e.removeEventListener(r, nt, a)) : r !== "list" && r !== "tagName" && r !== "form" && !n && r in e ? e[r] = i ?? "" : typeof i != "function" && r !== "dangerouslySetInnerHTML" && (r !== (r = r.replace(/^xlink:?/, "")) ? i == null || i === false ? e.removeAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase(), i) : i == null || i === false ? e.removeAttribute(r) : e.setAttribute(r, i));
  }
  function nt(e) {
    return this.t[e.type](S.event ? S.event(e) : e);
  }
  function je(e, r, i, t, n, o, l, c, a, u) {
    var h, s, d, v, _, b, x, L, m, k, w = r.type;
    if (r.constructor !== void 0) return null;
    (h = S.__b) && h(r);
    try {
      e: if (typeof w == "function") {
        if (L = r.props, m = (h = w.contextType) && t[h.__c], k = h ? m ? m.props.value : h.__p : t, i.__c ? x = (s = r.__c = i.__c).__p = s.__E : ("prototype" in w && w.prototype.render ? r.__c = s = new w(L, k) : (r.__c = s = new Q(L, k), s.constructor = w, s.render = lr), m && m.sub(s), s.props = L, s.state || (s.state = {}), s.context = k, s.__n = t, d = s.__d = true, s.__h = []), s.__s == null && (s.__s = s.state), w.getDerivedStateFromProps != null && B(s.__s == s.state ? s.__s = B({}, s.__s) : s.__s, w.getDerivedStateFromProps(L, s.__s)), d) w.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && l.push(s);
        else {
          if (w.getDerivedStateFromProps == null && c == null && s.componentWillReceiveProps != null && s.componentWillReceiveProps(L, k), !c && s.shouldComponentUpdate != null && s.shouldComponentUpdate(L, s.__s, k) === false) {
            for (s.props = L, s.state = s.__s, s.__d = false, s.__v = r, r.__e = a != null ? a !== i.__e ? a : i.__e : null, r.__k = i.__k, h = 0; h < r.__k.length; h++) r.__k[h] && (r.__k[h].__p = r);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(L, s.__s, k);
        }
        for (v = s.props, _ = s.state, s.context = k, s.props = L, s.state = s.__s, (h = S.__r) && h(r), s.__d = false, s.__v = r, s.__P = e, h = s.render(s.props, s.state, s.context), r.__k = Ie(h != null && h.type == se && h.key == null ? h.props.children : h), s.getChildContext != null && (t = B(B({}, t), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (b = s.getSnapshotBeforeUpdate(v, _)), bt(e, r, i, t, n, o, l, a, u), s.base = r.__e; h = s.__h.pop(); ) s.__s && (s.state = s.__s), h.call(s);
        d || v == null || s.componentDidUpdate == null || s.componentDidUpdate(v, _, b), x && (s.__E = s.__p = null);
      } else r.__e = or(i.__e, r, i, t, n, o, l, u);
      (h = S.diffed) && h(r);
    } catch (p) {
      S.__e(p, r, i);
    }
    return r.__e;
  }
  function pt(e, r) {
    for (var i; i = e.pop(); ) try {
      i.componentDidMount();
    } catch (t) {
      S.__e(t, i.__v);
    }
    S.__c && S.__c(r);
  }
  function or(e, r, i, t, n, o, l, c) {
    var a, u, h, s, d = i.props, v = r.props;
    if (n = r.type === "svg" || n, e == null && o != null) {
      for (a = 0; a < o.length; a++) if ((u = o[a]) != null && (r.type === null ? u.nodeType === 3 : u.localName === r.type)) {
        e = u, o[a] = null;
        break;
      }
    }
    if (e == null) {
      if (r.type === null) return document.createTextNode(v);
      e = n ? document.createElementNS("http://www.w3.org/2000/svg", r.type) : document.createElement(r.type), o = null;
    }
    return r.type === null ? d !== v && (o != null && (o[o.indexOf(e)] = null), e.data = v) : r !== i && (o != null && (o = Re.slice.call(e.childNodes)), h = (d = i.props || H).dangerouslySetInnerHTML, s = v.dangerouslySetInnerHTML, c || (s || h) && (s && h && s.__html == h.__html || (e.innerHTML = s && s.__html || "")), nr(e, v, d, n, c), r.__k = r.props.children, s || bt(e, r, i, t, r.type !== "foreignObject" && n, o, l, H, c), c || ("value" in v && v.value !== void 0 && v.value !== e.value && (e.value = v.value == null ? "" : v.value), "checked" in v && v.checked !== void 0 && v.checked !== e.checked && (e.checked = v.checked))), e;
  }
  function _t(e, r, i) {
    try {
      typeof e == "function" ? e(r) : e.current = r;
    } catch (t) {
      S.__e(t, i);
    }
  }
  function yt(e, r, i) {
    var t, n, o;
    if (S.unmount && S.unmount(e), (t = e.ref) && _t(t, null, r), i || typeof e.type == "function" || (i = (n = e.__e) != null), e.__e = e.l = null, (t = e.__c) != null) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (l) {
        S.__e(l, r);
      }
      t.base = t.__P = null;
    }
    if (t = e.__k) for (o = 0; o < t.length; o++) t[o] && yt(t[o], r, i);
    n != null && vt(n);
  }
  function lr(e, r, i) {
    return this.constructor(e, i);
  }
  function cr(e, r, i) {
    var t, n, o;
    S.__p && S.__p(e, r), n = (t = i === gt) ? null : r.__k, e = y(se, null, [
      e
    ]), o = [], je(r, r.__k = e, n || H, H, r.ownerSVGElement !== void 0, n ? null : Re.slice.call(r.childNodes), o, false, H, t), pt(o, e);
  }
  S = {}, Q.prototype.setState = function(e, r) {
    var i = this.__s !== this.state && this.__s || (this.__s = B({}, this.state));
    (typeof e != "function" || (e = e(i, this.props))) && B(i, e), e != null && this.__v && (this.u = false, r && this.__h.push(r), Le(this));
  }, Q.prototype.forceUpdate = function(e) {
    this.__v && (e && this.__h.push(e), this.u = true, Le(this));
  }, Q.prototype.render = se, oe = [], ft = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ce = S.debounceRendering, S.__e = function(e, r, i) {
    for (var t; r = r.__p; ) if ((t = r.__c) && !t.__p) try {
      if (t.constructor && t.constructor.getDerivedStateFromError != null) t.setState(t.constructor.getDerivedStateFromError(e));
      else {
        if (t.componentDidCatch == null) continue;
        t.componentDidCatch(e);
      }
      return Le(t.__E = t);
    } catch (n) {
      e = n;
    }
    throw e;
  }, gt = H;
  function sr(e, r) {
    for (var i = 0; i < r.length; i++) {
      var t = r[i];
      t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(e, t.key, t);
    }
  }
  function ar(e, r, i) {
    return r && sr(e.prototype, r), e;
  }
  function R() {
    return R = Object.assign || function(e) {
      for (var r = arguments, i = 1; i < arguments.length; i++) {
        var t = r[i];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }, R.apply(this, arguments);
  }
  var hr = "[-\\+]?\\d+%?", ur = "[-\\+]?\\d*\\.\\d+%?", D = "(?:" + ur + ")|(?:" + hr + ")", xt = "[\\s|\\(]+(" + D + ")[,|\\s]+(" + D + ")[,|\\s]+(" + D + ")\\s*\\)?", Lt = "[\\s|\\(]+(" + D + ")[,|\\s]+(" + D + ")[,|\\s]+(" + D + ")[,|\\s]+(" + D + ")\\s*\\)?", dr = new RegExp("rgb" + xt), fr = new RegExp("rgba" + Lt), gr = new RegExp("hsl" + xt), vr = new RegExp("hsla" + Lt), ae = "^(?:#?|0x?)", F = "([0-9a-fA-F]{1})", V = "([0-9a-fA-F]{2})", mr = new RegExp(ae + F + F + F + "$"), br = new RegExp(ae + F + F + F + F + "$"), pr = new RegExp(ae + V + V + V + "$"), _r = new RegExp(ae + V + V + V + V + "$"), yr = 2e3, xr = 4e4, ie = Math.log, X = Math.round, J = Math.floor;
  function I(e, r, i) {
    return Math.min(Math.max(e, r), i);
  }
  function A(e, r) {
    var i = e.indexOf("%") > -1, t = parseFloat(e);
    return i ? r / 100 * t : t;
  }
  function M(e) {
    return parseInt(e, 16);
  }
  function z(e) {
    return e.toString(16).padStart(2, "0");
  }
  var K = (function() {
    function e(i, t) {
      this.$ = {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      }, i && this.set(i), this.onChange = t, this.initialValue = R({}, this.$);
    }
    var r = e.prototype;
    return r.set = function(t) {
      if (typeof t == "string") /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t);
      else if (typeof t == "object") t instanceof e ? this.hsva = t.hsva : "r" in t && "g" in t && "b" in t ? this.rgb = t : "h" in t && "s" in t && "v" in t ? this.hsv = t : "h" in t && "s" in t && "l" in t ? this.hsl = t : "kelvin" in t && (this.kelvin = t.kelvin);
      else throw new Error("Invalid color value");
    }, r.setChannel = function(t, n, o) {
      var l;
      this[t] = R({}, this[t], (l = {}, l[n] = o, l));
    }, r.reset = function() {
      this.hsva = this.initialValue;
    }, r.clone = function() {
      return new e(this);
    }, r.unbind = function() {
      this.onChange = void 0;
    }, e.hsvToRgb = function(t) {
      var n = t.h / 60, o = t.s / 100, l = t.v / 100, c = J(n), a = n - c, u = l * (1 - o), h = l * (1 - a * o), s = l * (1 - (1 - a) * o), d = c % 6, v = [
        l,
        h,
        u,
        u,
        s,
        l
      ][d], _ = [
        s,
        l,
        l,
        h,
        u,
        u
      ][d], b = [
        u,
        u,
        s,
        l,
        l,
        h
      ][d];
      return {
        r: I(v * 255, 0, 255),
        g: I(_ * 255, 0, 255),
        b: I(b * 255, 0, 255)
      };
    }, e.rgbToHsv = function(t) {
      var n = t.r / 255, o = t.g / 255, l = t.b / 255, c = Math.max(n, o, l), a = Math.min(n, o, l), u = c - a, h = 0, s = c, d = c === 0 ? 0 : u / c;
      switch (c) {
        case a:
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
      return {
        h: h * 60 % 360,
        s: I(d * 100, 0, 100),
        v: I(s * 100, 0, 100)
      };
    }, e.hsvToHsl = function(t) {
      var n = t.s / 100, o = t.v / 100, l = (2 - n) * o, c = l <= 1 ? l : 2 - l, a = c < 1e-9 ? 0 : n * o / c;
      return {
        h: t.h,
        s: I(a * 100, 0, 100),
        l: I(l * 50, 0, 100)
      };
    }, e.hslToHsv = function(t) {
      var n = t.l * 2, o = t.s * (n <= 100 ? n : 200 - n) / 100, l = n + o < 1e-9 ? 0 : 2 * o / (n + o);
      return {
        h: t.h,
        s: I(l * 100, 0, 100),
        v: I((n + o) / 2, 0, 100)
      };
    }, e.kelvinToRgb = function(t) {
      var n = t / 100, o, l, c;
      return n < 66 ? (o = 255, l = -155.25485562709179 - 0.44596950469579133 * (l = n - 2) + 104.49216199393888 * ie(l), c = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (c = n - 10) + 115.67994401066147 * ie(c)) : (o = 351.97690566805693 + 0.114206453784165 * (o = n - 55) - 40.25366309332127 * ie(o), l = 325.4494125711974 + 0.07943456536662342 * (l = n - 50) - 28.0852963507957 * ie(l), c = 255), {
        r: I(J(o), 0, 255),
        g: I(J(l), 0, 255),
        b: I(J(c), 0, 255)
      };
    }, e.rgbToKelvin = function(t) {
      for (var n = t.r, o = t.b, l = 0.4, c = yr, a = xr, u; a - c > l; ) {
        u = (a + c) * 0.5;
        var h = e.kelvinToRgb(u);
        h.b / h.r >= o / n ? a = u : c = u;
      }
      return u;
    }, ar(e, [
      {
        key: "hsv",
        get: function() {
          var t = this.$;
          return {
            h: t.h,
            s: t.s,
            v: t.v
          };
        },
        set: function(t) {
          var n = this.$;
          if (t = R({}, n, t), this.onChange) {
            var o = {
              h: false,
              v: false,
              s: false,
              a: false
            };
            for (var l in n) o[l] = t[l] != n[l];
            this.$ = t, (o.h || o.s || o.v || o.a) && this.onChange(this, o);
          } else this.$ = t;
        }
      },
      {
        key: "hsva",
        get: function() {
          return R({}, this.$);
        },
        set: function(t) {
          this.hsv = t;
        }
      },
      {
        key: "hue",
        get: function() {
          return this.$.h;
        },
        set: function(t) {
          this.hsv = {
            h: t
          };
        }
      },
      {
        key: "saturation",
        get: function() {
          return this.$.s;
        },
        set: function(t) {
          this.hsv = {
            s: t
          };
        }
      },
      {
        key: "value",
        get: function() {
          return this.$.v;
        },
        set: function(t) {
          this.hsv = {
            v: t
          };
        }
      },
      {
        key: "alpha",
        get: function() {
          return this.$.a;
        },
        set: function(t) {
          this.hsv = R({}, this.hsv, {
            a: t
          });
        }
      },
      {
        key: "kelvin",
        get: function() {
          return e.rgbToKelvin(this.rgb);
        },
        set: function(t) {
          this.rgb = e.kelvinToRgb(t);
        }
      },
      {
        key: "red",
        get: function() {
          var t = this.rgb;
          return t.r;
        },
        set: function(t) {
          this.rgb = R({}, this.rgb, {
            r: t
          });
        }
      },
      {
        key: "green",
        get: function() {
          var t = this.rgb;
          return t.g;
        },
        set: function(t) {
          this.rgb = R({}, this.rgb, {
            g: t
          });
        }
      },
      {
        key: "blue",
        get: function() {
          var t = this.rgb;
          return t.b;
        },
        set: function(t) {
          this.rgb = R({}, this.rgb, {
            b: t
          });
        }
      },
      {
        key: "rgb",
        get: function() {
          var t = e.hsvToRgb(this.$), n = t.r, o = t.g, l = t.b;
          return {
            r: X(n),
            g: X(o),
            b: X(l)
          };
        },
        set: function(t) {
          this.hsv = R({}, e.rgbToHsv(t), {
            a: t.a === void 0 ? 1 : t.a
          });
        }
      },
      {
        key: "rgba",
        get: function() {
          return R({}, this.rgb, {
            a: this.alpha
          });
        },
        set: function(t) {
          this.rgb = t;
        }
      },
      {
        key: "hsl",
        get: function() {
          var t = e.hsvToHsl(this.$), n = t.h, o = t.s, l = t.l;
          return {
            h: X(n),
            s: X(o),
            l: X(l)
          };
        },
        set: function(t) {
          this.hsv = R({}, e.hslToHsv(t), {
            a: t.a === void 0 ? 1 : t.a
          });
        }
      },
      {
        key: "hsla",
        get: function() {
          return R({}, this.hsl, {
            a: this.alpha
          });
        },
        set: function(t) {
          this.hsl = t;
        }
      },
      {
        key: "rgbString",
        get: function() {
          var t = this.rgb;
          return "rgb(" + t.r + ", " + t.g + ", " + t.b + ")";
        },
        set: function(t) {
          var n, o, l, c, a = 1;
          if ((n = dr.exec(t)) ? (o = A(n[1], 255), l = A(n[2], 255), c = A(n[3], 255)) : (n = fr.exec(t)) && (o = A(n[1], 255), l = A(n[2], 255), c = A(n[3], 255), a = A(n[4], 1)), n) this.rgb = {
            r: o,
            g: l,
            b: c,
            a
          };
          else throw new Error("Invalid rgb string");
        }
      },
      {
        key: "rgbaString",
        get: function() {
          var t = this.rgba;
          return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
        },
        set: function(t) {
          this.rgbString = t;
        }
      },
      {
        key: "hexString",
        get: function() {
          var t = this.rgb;
          return "#" + z(t.r) + z(t.g) + z(t.b);
        },
        set: function(t) {
          var n, o, l, c, a = 255;
          if ((n = mr.exec(t)) ? (o = M(n[1]) * 17, l = M(n[2]) * 17, c = M(n[3]) * 17) : (n = br.exec(t)) ? (o = M(n[1]) * 17, l = M(n[2]) * 17, c = M(n[3]) * 17, a = M(n[4]) * 17) : (n = pr.exec(t)) ? (o = M(n[1]), l = M(n[2]), c = M(n[3])) : (n = _r.exec(t)) && (o = M(n[1]), l = M(n[2]), c = M(n[3]), a = M(n[4])), n) this.rgb = {
            r: o,
            g: l,
            b: c,
            a: a / 255
          };
          else throw new Error("Invalid hex string");
        }
      },
      {
        key: "hex8String",
        get: function() {
          var t = this.rgba;
          return "#" + z(t.r) + z(t.g) + z(t.b) + z(J(t.a * 255));
        },
        set: function(t) {
          this.hexString = t;
        }
      },
      {
        key: "hslString",
        get: function() {
          var t = this.hsl;
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
        },
        set: function(t) {
          var n, o, l, c, a = 1;
          if ((n = gr.exec(t)) ? (o = A(n[1], 360), l = A(n[2], 100), c = A(n[3], 100)) : (n = vr.exec(t)) && (o = A(n[1], 360), l = A(n[2], 100), c = A(n[3], 100), a = A(n[4], 1)), n) this.hsl = {
            h: o,
            s: l,
            l: c,
            a
          };
          else throw new Error("Invalid hsl string");
        }
      },
      {
        key: "hslaString",
        get: function() {
          var t = this.hsla;
          return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
        },
        set: function(t) {
          this.hslString = t;
        }
      }
    ]), e;
  })(), Lr = {
    sliderShape: "bar",
    sliderType: "value",
    minTemperature: 2200,
    maxTemperature: 11e3
  };
  function Te(e) {
    var r, i = e.width, t = e.sliderSize, n = e.borderWidth, o = e.handleRadius, l = e.padding, c = e.sliderShape, a = e.layoutDirection === "horizontal";
    return t = (r = t) != null ? r : l * 2 + o * 2, c === "circle" ? {
      handleStart: e.padding + e.handleRadius,
      handleRange: i - l * 2 - o * 2,
      width: i,
      height: i,
      cx: i / 2,
      cy: i / 2,
      radius: i / 2 - n / 2
    } : {
      handleStart: t / 2,
      handleRange: i - t,
      radius: t / 2,
      x: 0,
      y: 0,
      width: a ? t : i,
      height: a ? i : t
    };
  }
  function wr(e, r) {
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
  function Sr(e, r, i) {
    var t = Te(e), n = t.handleRange, o = t.handleStart, l;
    e.layoutDirection === "horizontal" ? l = -1 * i + n + o : l = r - o, l = Math.max(Math.min(l, n), 0);
    var c = Math.round(100 / n * l);
    switch (e.sliderType) {
      case "kelvin":
        var a = e.minTemperature, u = e.maxTemperature, h = u - a;
        return a + h * (c / 100);
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
  function Cr(e, r) {
    var i = Te(e), t = i.width, n = i.height, o = i.handleRange, l = i.handleStart, c = e.layoutDirection === "horizontal", a = wr(e, r), u = c ? t / 2 : n / 2, h = l + a / 100 * o;
    return c && (h = -1 * h + o + l * 2), {
      x: c ? u : h,
      y: c ? h : u
    };
  }
  function kr(e, r) {
    var i = r.hsv, t = r.rgb;
    switch (e.sliderType) {
      case "red":
        return [
          [
            0,
            "rgb(0," + t.g + "," + t.b + ")"
          ],
          [
            100,
            "rgb(255," + t.g + "," + t.b + ")"
          ]
        ];
      case "green":
        return [
          [
            0,
            "rgb(" + t.r + ",0," + t.b + ")"
          ],
          [
            100,
            "rgb(" + t.r + ",255," + t.b + ")"
          ]
        ];
      case "blue":
        return [
          [
            0,
            "rgb(" + t.r + "," + t.g + ",0)"
          ],
          [
            100,
            "rgb(" + t.r + "," + t.g + ",255)"
          ]
        ];
      case "alpha":
        return [
          [
            0,
            "rgba(" + t.r + "," + t.g + "," + t.b + ",0)"
          ],
          [
            100,
            "rgb(" + t.r + "," + t.g + "," + t.b + ")"
          ]
        ];
      case "kelvin":
        for (var n = [], o = e.minTemperature, l = e.maxTemperature, c = 8, a = l - o, u = o, h = 0; u < l; u += a / c, h += 1) {
          var s = K.kelvinToRgb(u), d = s.r, v = s.g, _ = s.b;
          n.push([
            100 / c * h,
            "rgb(" + d + "," + v + "," + _ + ")"
          ]);
        }
        return n;
      case "hue":
        return [
          [
            0,
            "#f00"
          ],
          [
            16.666,
            "#ff0"
          ],
          [
            33.333,
            "#0f0"
          ],
          [
            50,
            "#0ff"
          ],
          [
            66.666,
            "#00f"
          ],
          [
            83.333,
            "#f0f"
          ],
          [
            100,
            "#f00"
          ]
        ];
      case "saturation":
        var b = K.hsvToHsl({
          h: i.h,
          s: 0,
          v: i.v
        }), x = K.hsvToHsl({
          h: i.h,
          s: 100,
          v: i.v
        });
        return [
          [
            0,
            "hsl(" + b.h + "," + b.s + "%," + b.l + "%)"
          ],
          [
            100,
            "hsl(" + x.h + "," + x.s + "%," + x.l + "%)"
          ]
        ];
      default:
        var L = K.hsvToHsl({
          h: i.h,
          s: i.s,
          v: 100
        });
        return [
          [
            0,
            "#000"
          ],
          [
            100,
            "hsl(" + L.h + "," + L.s + "%," + L.l + "%)"
          ]
        ];
    }
  }
  var wt = Math.PI * 2, Or = function(r, i) {
    return (r % i + i) % i;
  }, St = function(r, i) {
    return Math.sqrt(r * r + i * i);
  };
  function Ct(e) {
    return e.width / 2 - e.padding - e.handleRadius - e.borderWidth;
  }
  function Er(e, r, i) {
    var t = he(e), n = t.cx, o = t.cy, l = e.width / 2;
    return St(n - r, o - i) < l;
  }
  function he(e) {
    var r = e.width / 2;
    return {
      width: e.width,
      radius: r - e.borderWidth,
      cx: r,
      cy: r
    };
  }
  function kt(e, r, i) {
    var t = e.wheelAngle, n = e.wheelDirection;
    return i && n === "clockwise" ? r = t + r : n === "clockwise" ? r = 360 - t + r : i && n === "anticlockwise" ? r = t + 180 - r : n === "anticlockwise" && (r = t - r), Or(r, 360);
  }
  function Ar(e, r) {
    var i = r.hsv, t = he(e), n = t.cx, o = t.cy, l = Ct(e), c = (180 + kt(e, i.h, true)) * (wt / 360), a = i.s / 100 * l, u = e.wheelDirection === "clockwise" ? -1 : 1;
    return {
      x: n + a * Math.cos(c) * u,
      y: o + a * Math.sin(c) * u
    };
  }
  function ot(e, r, i) {
    var t = he(e), n = t.cx, o = t.cy, l = Ct(e);
    r = n - r, i = o - i;
    var c = kt(e, Math.atan2(-i, -r) * (360 / wt)), a = Math.min(St(r, i), l);
    return {
      h: Math.round(c),
      s: Math.round(100 / l * a)
    };
  }
  function Pe(e) {
    var r = e.width, i = e.boxHeight, t = e.padding, n = e.handleRadius;
    return {
      width: r,
      height: i ?? r,
      radius: t + n
    };
  }
  function lt(e, r, i) {
    var t = Pe(e), n = t.width, o = t.height, l = t.radius, c = l, a = n - l * 2, u = o - l * 2, h = (r - c) / a * 100, s = (i - c) / u * 100;
    return {
      s: Math.max(0, Math.min(h, 100)),
      v: Math.max(0, Math.min(100 - s, 100))
    };
  }
  function Mr(e, r) {
    var i = Pe(e), t = i.width, n = i.height, o = i.radius, l = r.hsv, c = o, a = t - o * 2, u = n - o * 2;
    return {
      x: c + l.s / 100 * a,
      y: c + (u - l.v / 100 * u)
    };
  }
  function Rr(e, r) {
    var i = r.hue;
    return [
      [
        [
          0,
          "#fff"
        ],
        [
          100,
          "hsl(" + i + ",100%,50%)"
        ]
      ],
      [
        [
          0,
          "rgba(0,0,0,0)"
        ],
        [
          100,
          "#000"
        ]
      ]
    ];
  }
  var we;
  function Ir(e) {
    we || (we = document.getElementsByTagName("base"));
    var r = window.navigator.userAgent, i = /^((?!chrome|android).)*safari/i.test(r), t = /iPhone|iPod|iPad/i.test(r), n = window.location;
    return (i || t) && we.length > 0 ? n.protocol + "//" + n.host + n.pathname + n.search + e : e;
  }
  function Ot(e, r, i, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n].x - r, l = t[n].y - i, c = Math.sqrt(o * o + l * l);
      if (c < e.handleRadius) return n;
    }
    return null;
  }
  function Be(e) {
    return {
      boxSizing: "border-box",
      border: e.borderWidth + "px solid " + e.borderColor
    };
  }
  function Oe(e, r, i) {
    return e + "-gradient(" + r + ", " + i.map(function(t) {
      var n = t[0], o = t[1];
      return o + " " + n + "%";
    }).join(",") + ")";
  }
  function E(e) {
    return typeof e == "string" ? e : e + "px";
  }
  var jr = {
    width: 300,
    height: 300,
    color: "#fff",
    colors: [],
    padding: 6,
    layoutDirection: "vertical",
    borderColor: "#fff",
    borderWidth: 0,
    handleRadius: 8,
    activeHandleRadius: null,
    handleSvg: null,
    handleProps: {
      x: 0,
      y: 0
    },
    wheelLightness: true,
    wheelAngle: 0,
    wheelDirection: "anticlockwise",
    sliderSize: null,
    sliderMargin: 12,
    boxHeight: null
  }, ct = [
    "mousemove",
    "touchmove",
    "mouseup",
    "touchend"
  ], ue = (function(e) {
    function r(i) {
      e.call(this, i), this.uid = (Math.random() + 1).toString(36).substring(5);
    }
    return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.render = function(t) {
      var n = this.handleEvent.bind(this), o = {
        onMouseDown: n,
        ontouchstart: n
      }, l = t.layoutDirection === "horizontal", c = t.margin === null ? t.sliderMargin : t.margin, a = {
        overflow: "visible",
        display: l ? "inline-block" : "block"
      };
      return t.index > 0 && (a[l ? "marginLeft" : "marginTop"] = c), y(se, null, t.children(this.uid, o, a));
    }, r.prototype.handleEvent = function(t) {
      var n = this, o = this.props.onInput, l = this.base.getBoundingClientRect();
      t.preventDefault();
      var c = t.touches ? t.changedTouches[0] : t, a = c.clientX - l.left, u = c.clientY - l.top;
      switch (t.type) {
        case "mousedown":
        case "touchstart":
          var h = o(a, u, 0);
          h !== false && ct.forEach(function(s) {
            document.addEventListener(s, n, {
              passive: false
            });
          });
          break;
        case "mousemove":
        case "touchmove":
          o(a, u, 1);
          break;
        case "mouseup":
        case "touchend":
          o(a, u, 2), ct.forEach(function(s) {
            document.removeEventListener(s, n, {
              passive: false
            });
          });
          break;
      }
    }, r;
  })(Q);
  function G(e) {
    var r = e.r, i = e.url, t = r, n = r;
    return y("svg", {
      className: "IroHandle IroHandle--" + e.index + " " + (e.isActive ? "IroHandle--isActive" : ""),
      style: {
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0);",
        transform: "translate(" + E(e.x) + ", " + E(e.y) + ")",
        willChange: "transform",
        top: E(-r),
        left: E(-r),
        width: E(r * 2),
        height: E(r * 2),
        position: "absolute",
        overflow: "visible"
      }
    }, i && y("use", Object.assign({
      xlinkHref: Ir(i)
    }, e.props)), !i && y("circle", {
      cx: t,
      cy: n,
      r,
      fill: "none",
      "stroke-width": 2,
      stroke: "#000"
    }), !i && y("circle", {
      cx: t,
      cy: n,
      r: r - 2,
      fill: e.fill,
      "stroke-width": 2,
      stroke: "#fff"
    }));
  }
  G.defaultProps = {
    fill: "none",
    x: 0,
    y: 0,
    r: 8,
    url: null,
    props: {
      x: 0,
      y: 0
    }
  };
  function ce(e) {
    var r = e.activeIndex, i = r !== void 0 && r < e.colors.length ? e.colors[r] : e.color, t = Te(e), n = t.width, o = t.height, l = t.radius, c = Cr(e, i), a = kr(e, i);
    function u(h, s, d) {
      var v = Sr(e, h, s);
      e.parent.inputActive = true, i[e.sliderType] = v, e.onInput(d, e.id);
    }
    return y(ue, Object.assign({}, e, {
      onInput: u
    }), function(h, s, d) {
      return y("div", Object.assign({}, s, {
        className: "IroSlider",
        style: Object.assign({}, {
          position: "relative",
          width: E(n),
          height: E(o),
          borderRadius: E(l),
          background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
          backgroundSize: "8px 8px"
        }, d)
      }), y("div", {
        className: "IroSliderGradient",
        style: Object.assign({}, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: E(l),
          background: Oe("linear", e.layoutDirection === "horizontal" ? "to top" : "to right", a)
        }, Be(e))
      }), y(G, {
        isActive: true,
        index: i.index,
        r: e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: c.x,
        y: c.y
      }));
    });
  }
  ce.defaultProps = Object.assign({}, Lr);
  function Tr(e) {
    var r = Pe(e), i = r.width, t = r.height, n = r.radius, o = e.colors, l = e.parent, c = e.activeIndex, a = c !== void 0 && c < e.colors.length ? e.colors[c] : e.color, u = Rr(e, a), h = o.map(function(d) {
      return Mr(e, d);
    });
    function s(d, v, _) {
      if (_ === 0) {
        var b = Ot(e, d, v, h);
        b !== null ? l.setActiveColor(b) : (l.inputActive = true, a.hsv = lt(e, d, v), e.onInput(_, e.id));
      } else _ === 1 && (l.inputActive = true, a.hsv = lt(e, d, v));
      e.onInput(_, e.id);
    }
    return y(ue, Object.assign({}, e, {
      onInput: s
    }), function(d, v, _) {
      return y("div", Object.assign({}, v, {
        className: "IroBox",
        style: Object.assign({}, {
          width: E(i),
          height: E(t),
          position: "relative"
        }, _)
      }), y("div", {
        className: "IroBox",
        style: Object.assign({}, {
          width: "100%",
          height: "100%",
          borderRadius: E(n)
        }, Be(e), {
          background: Oe("linear", "to bottom", u[1]) + "," + Oe("linear", "to right", u[0])
        })
      }), o.filter(function(b) {
        return b !== a;
      }).map(function(b) {
        return y(G, {
          isActive: false,
          index: b.index,
          fill: b.hslString,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: h[b.index].x,
          y: h[b.index].y
        });
      }), y(G, {
        isActive: true,
        index: a.index,
        fill: a.hslString,
        r: e.activeHandleRadius || e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: h[a.index].x,
        y: h[a.index].y
      }));
    });
  }
  var Pr = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)", Br = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
  function Et(e) {
    var r = he(e), i = r.width, t = e.colors;
    e.borderWidth;
    var n = e.parent, o = e.color, l = o.hsv, c = t.map(function(h) {
      return Ar(e, h);
    }), a = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      boxSizing: "border-box"
    };
    function u(h, s, d) {
      if (d === 0) {
        if (!Er(e, h, s)) return false;
        var v = Ot(e, h, s, c);
        v !== null ? n.setActiveColor(v) : (n.inputActive = true, o.hsv = ot(e, h, s), e.onInput(d, e.id));
      } else d === 1 && (n.inputActive = true, o.hsv = ot(e, h, s));
      e.onInput(d, e.id);
    }
    return y(ue, Object.assign({}, e, {
      onInput: u
    }), function(h, s, d) {
      return y("div", Object.assign({}, s, {
        className: "IroWheel",
        style: Object.assign({}, {
          width: E(i),
          height: E(i),
          position: "relative"
        }, d)
      }), y("div", {
        className: "IroWheelHue",
        style: Object.assign({}, a, {
          transform: "rotateZ(" + (e.wheelAngle + 90) + "deg)",
          background: e.wheelDirection === "clockwise" ? Pr : Br
        })
      }), y("div", {
        className: "IroWheelSaturation",
        style: Object.assign({}, a, {
          background: "radial-gradient(circle closest-side, #fff, transparent)"
        })
      }), e.wheelLightness && y("div", {
        className: "IroWheelLightness",
        style: Object.assign({}, a, {
          background: "#000",
          opacity: 1 - l.v / 100
        })
      }), y("div", {
        className: "IroWheelBorder",
        style: Object.assign({}, a, Be(e))
      }), t.filter(function(v) {
        return v !== o;
      }).map(function(v) {
        return y(G, {
          isActive: false,
          index: v.index,
          fill: v.hslString,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: c[v.index].x,
          y: c[v.index].y
        });
      }), y(G, {
        isActive: true,
        index: o.index,
        fill: o.hslString,
        r: e.activeHandleRadius || e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: c[o.index].x,
        y: c[o.index].y
      }));
    });
  }
  function Hr(e) {
    var r = function(i, t) {
      var n, o = document.createElement("div");
      cr(y(e, Object.assign({}, {
        ref: function(c) {
          return n = c;
        }
      }, t)), o);
      function l() {
        var c = i instanceof Element ? i : document.querySelector(i);
        c.appendChild(n.base), n.onMount(c);
      }
      return document.readyState !== "loading" ? l() : document.addEventListener("DOMContentLoaded", l), n;
    };
    return r.prototype = e.prototype, Object.assign(r, e), r.__component = e, r;
  }
  var At = (function(e) {
    function r(i) {
      var t = this;
      e.call(this, i), this.colors = [], this.inputActive = false, this.events = {}, this.activeEvents = {}, this.deferredEvents = {}, this.id = i.id;
      var n = i.colors.length > 0 ? i.colors : [
        i.color
      ];
      n.forEach(function(o) {
        return t.addColor(o);
      }), this.setActiveColor(0), this.state = Object.assign({}, i, {
        color: this.color,
        colors: this.colors,
        layout: i.layout
      });
    }
    return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.addColor = function(t, n) {
      n === void 0 && (n = this.colors.length);
      var o = new K(t, this.onColorChange.bind(this));
      this.colors.splice(n, 0, o), this.colors.forEach(function(l, c) {
        return l.index = c;
      }), this.state && this.setState({
        colors: this.colors
      }), this.deferredEmit("color:init", o);
    }, r.prototype.removeColor = function(t) {
      var n = this.colors.splice(t, 1)[0];
      n.unbind(), this.colors.forEach(function(o, l) {
        return o.index = l;
      }), this.state && this.setState({
        colors: this.colors
      }), n.index === this.color.index && this.setActiveColor(0), this.emit("color:remove", n);
    }, r.prototype.setActiveColor = function(t) {
      this.color = this.colors[t], this.state && this.setState({
        color: this.color
      }), this.emit("color:setActive", this.color);
    }, r.prototype.setColors = function(t, n) {
      var o = this;
      n === void 0 && (n = 0), this.colors.forEach(function(l) {
        return l.unbind();
      }), this.colors = [], t.forEach(function(l) {
        return o.addColor(l);
      }), this.setActiveColor(n), this.emit("color:setAll", this.colors);
    }, r.prototype.on = function(t, n) {
      var o = this, l = this.events;
      (Array.isArray(t) ? t : [
        t
      ]).forEach(function(c) {
        (l[c] || (l[c] = [])).push(n), o.deferredEvents[c] && (o.deferredEvents[c].forEach(function(a) {
          n.apply(null, a);
        }), o.deferredEvents[c] = []);
      });
    }, r.prototype.off = function(t, n) {
      var o = this;
      (Array.isArray(t) ? t : [
        t
      ]).forEach(function(l) {
        var c = o.events[l];
        c && c.splice(c.indexOf(n), 1);
      });
    }, r.prototype.emit = function(t) {
      for (var n = this, o = [], l = arguments.length - 1; l-- > 0; ) o[l] = arguments[l + 1];
      var c = this.activeEvents, a = c.hasOwnProperty(t) ? c[t] : false;
      if (!a) {
        c[t] = true;
        var u = this.events[t] || [];
        u.forEach(function(h) {
          return h.apply(n, o);
        }), c[t] = false;
      }
    }, r.prototype.deferredEmit = function(t) {
      for (var n, o = [], l = arguments.length - 1; l-- > 0; ) o[l] = arguments[l + 1];
      var c = this.deferredEvents;
      (n = this).emit.apply(n, [
        t
      ].concat(o)), (c[t] || (c[t] = [])).push(o);
    }, r.prototype.setOptions = function(t) {
      this.setState(t);
    }, r.prototype.resize = function(t) {
      this.setOptions({
        width: t
      });
    }, r.prototype.reset = function() {
      this.colors.forEach(function(t) {
        return t.reset();
      }), this.setState({
        colors: this.colors
      });
    }, r.prototype.onMount = function(t) {
      this.el = t, this.deferredEmit("mount", this);
    }, r.prototype.onColorChange = function(t, n) {
      this.setState({
        color: this.color
      }), this.inputActive && (this.inputActive = false, this.emit("input:change", t, n)), this.emit("color:change", t, n);
    }, r.prototype.emitInputEvent = function(t, n) {
      t === 0 ? this.emit("input:start", this.color, n) : t === 1 ? this.emit("input:move", this.color, n) : t === 2 && this.emit("input:end", this.color, n);
    }, r.prototype.render = function(t, n) {
      var o = this, l = n.layout;
      return Array.isArray(l) || (l = [
        {
          component: Et
        },
        {
          component: ce
        }
      ], n.transparency && l.push({
        component: ce,
        options: {
          sliderType: "alpha"
        }
      })), y("div", {
        class: "IroColorPicker",
        id: n.id,
        style: {
          display: n.display
        }
      }, l.map(function(c, a) {
        var u = c.component, h = c.options;
        return y(u, Object.assign({}, n, h, {
          ref: void 0,
          onInput: o.emitInputEvent.bind(o),
          parent: o,
          index: a
        }));
      }));
    }, r;
  })(Q);
  At.defaultProps = Object.assign({}, jr, {
    colors: [],
    display: "block",
    id: null,
    layout: "default",
    margin: null
  });
  var Wr = Hr(At), Ee;
  (function(e) {
    e.version = "5.5.2", e.Color = K, e.ColorPicker = Wr, (function(r) {
      r.h = y, r.ComponentBase = ue, r.Handle = G, r.Slider = ce, r.Wheel = Et, r.Box = Tr;
    })(e.ui || (e.ui = {}));
  })(Ee || (Ee = {}));
  var P = Ee;
  function zr(e, r, i, t, n) {
    if (i === "cct") return [
      [
        {
          component: P.ui.Slider,
          options: {
            sliderType: "kelvin",
            sliderShape: "circle",
            minTemperature: t,
            maxTemperature: n
          }
        },
        {
          component: P.ui.Slider,
          options: {
            sliderType: "value"
          }
        }
      ][e - 1]
    ];
    switch (r) {
      case "wheel":
        return [
          {
            component: P.ui.Wheel,
            options: {}
          },
          {
            component: P.ui.Slider,
            options: {
              sliderType: "value"
            }
          }
        ];
      case "box":
        return [
          {
            component: P.ui.Box,
            options: {
              boxLightness: false
            }
          },
          {
            component: P.ui.Slider,
            options: {
              sliderType: "hue"
            }
          }
        ];
      case "slider":
        return [
          {
            component: P.ui.Slider,
            options: {
              sliderType: "red"
            }
          },
          {
            component: P.ui.Slider,
            options: {
              sliderType: "green"
            }
          },
          {
            component: P.ui.Slider,
            options: {
              sliderType: "blue"
            }
          }
        ];
      default:
        return [];
    }
  }
  function Nr(e, r, i) {
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
  function Mt(e, r, i, t) {
    if (!e.width || !e.height) return 12;
    if (r === "slider" && t !== "cct") return (e.width - 3 * (i || 1) * 28) / 2;
    const n = e.maxWidth, o = (i || 1) * 28, l = e.width - n - o;
    return Math.max(12, l);
  }
  function Dr(e, r, i, t, n, o) {
    e.current && (r.current = P.ColorPicker(e.current, i), r.current.on("color:init", (l) => {
      n && n(l, o);
    }), r.current.on("input:change", (l, c) => {
      t && t(l, c);
    }));
  }
  function Fr(e) {
    e.current = null;
  }
  function Vr(e, r) {
    !e || !r || e.resize(r);
  }
  function Gr(e, r) {
    e && e.setOptions(r);
  }
  function $r(e, r) {
    typeof e == "function" ? e(r) : e && "current" in e && (e.current = r);
  }
  const Ae = f.forwardRef(({ dimensions: e, colorLightUIComponent: r, colorLightSliderWidth: i, colorLightBorderWidth: t, colorLightBorderColor: n, colorWheelLightness: o, colorLightType: l, colorLightCtMin: c, colorLightCtMax: a, colorLightGamut: u, cctComponentNumber: h, onInputChange: s, onColorInit: d }, v) => {
    const { theme: _ } = f.useContext(Me), b = f.useRef(null), x = f.useRef(null), L = f.useRef(d), m = f.useRef(s);
    L.current = d, m.current = s;
    const k = f.useMemo(() => zr(h, r, l, c, a), [
      h,
      r,
      l,
      c,
      a
    ]), w = f.useMemo(() => Nr(e, r, l), [
      e,
      r,
      l
    ]), p = f.useMemo(() => Mt(e, r, i, l), [
      e,
      r,
      i,
      l
    ]);
    return f.useEffect(() => (Dr(b, x, {
      color: "#ffffff",
      width: 0,
      margin: 12,
      sliderSize: 28,
      display: "flex",
      padding: 6,
      handleRadius: 8,
      layoutDirection: "horizontal"
    }, ($, U) => {
      var _a;
      return (_a = m.current) == null ? void 0 : _a.call(m, $, U);
    }, ($, U) => {
      var _a;
      return (_a = L.current) == null ? void 0 : _a.call(L, $, U);
    }, h), $r(v, x.current), () => Fr(x)), [
      v,
      h
    ]), f.useEffect(() => {
      Vr(x.current, w);
    }, [
      w
    ]), f.useEffect(() => {
      Gr(x.current, {
        layout: k,
        margin: p,
        wheelLightness: o,
        sliderSize: (i || 1) * 28,
        borderWidth: t || 0,
        borderColor: !n || typeof n == "string" && n.trim() === "" ? _.palette.primary.main : n
      });
    }, [
      _.palette.primary.main,
      k,
      p,
      i,
      t,
      n,
      o
    ]), g.jsx(N, {
      ref: b
    });
  });
  Ae.displayName = "Light2Picker";
  const Ur = Ft(g.jsx("path", {
    d: "M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83"
  }), "PowerSettingsNew"), Xr = (e) => f.createElement("svg", {
    width: "800px",
    height: "800px",
    viewBox: "0 0 128 128",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    className: "iconify iconify--noto",
    preserveAspectRatio: "xMidYMid meet",
    ...e
  }, f.createElement("path", {
    d: "M77.37 19.32C46.83 3.21 19.03 14.69 9.01 30.38c-3.28 5.13-5.6 14.46-5.51 21.86c.18 15.23 8.61 32.2 26.8 49.32c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.27-4.13 14.33-12.65c-.12-1.12-1.08-3.15-2.53-4.04c-4.65-2.82-14.36-4.29-18.93-11.08c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.29-4.33 16.52-14.84c1.1-9.51-12.78-39.9-46.14-57.5zM89.84 71c-2.34 3.56-8.12 2.34-11.91-1.02c-3.79-3.36-4.28-8.96-1.82-11.16c2.5-2.23 7.2-1.72 10.99 1.64c3.78 3.37 4.57 7.74 2.74 10.54z",
    fill: "#ac5810"
  }), f.createElement("path", {
    d: "M78.71 15.69C48.17-.42 20.3 12.04 10.28 27.73C.25 43.43 4.61 72.5 31.63 97.93c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.59-6.58 11.57-12.13c-2.77-3.83-12.7-6.72-18.69-15.64c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.65-5.39 15.37-15.13c-.29-9.57-11.63-39.6-44.99-57.21zm14.06 55.03c-2.85 3.08-8.92 2.24-13.56-1.86c-4.63-4.11-6.08-9.93-3.23-13c2.85-3.08 8.92-2.24 13.56 1.86c4.64 4.1 6.08 9.93 3.23 13z",
    fill: "#f2a259"
  }), f.createElement("path", {
    d: "M47.62 84.66c1.15-2.94 9.33-6.16 16.85-.81c2.11 1.5 4.75 5.32 4.48 10.12c-.88 15.68-26.61 4.22-21.33-9.31z",
    fill: "#eee"
  }), f.createElement("path", {
    d: "M23.73 58.07c2.63-4.2 9.02-4.68 14.61-1.05c4.98 3.23 9.14 11.18 3 16.38c-3.29 2.79-8.98 1.06-12.49-1.63c-4.26-3.25-7.95-9.18-5.12-13.7z",
    fill: "#2686c6"
  }), f.createElement("path", {
    d: "M57.67 21.42c.81-3.33 6.46-3.9 10.46-2.41c6.91 2.58 10.04 9.42 7.49 13.23c-3.73 5.57-11.86 3.66-14.94.47c-5.23-5.4-3.69-8.5-3.01-11.29z",
    fill: "#ffee58"
  }), f.createElement("path", {
    d: "M97.71 37.72c5.54 2.52 6.26 6.51 5.2 9.42c-.66 1.8-2.01 4.27-4.77 4.49c-4.67.38-5.32-3.48-8.65-4.54c-2.8-.89-3.94-4.72-2.84-7.29c1.02-2.37 4-5.3 11.06-2.08z",
    fill: "#7cb342"
  }), f.createElement("path", {
    d: "M66.97 96.96c-1.38 1.25-6.17 2.79-12.25-1.01c-2.06-1.29-4.03-3.16-5.14-5.96c-.87-2.2-.68-4.32-.29-5.26c1.12-2.71 2.83-3.21 2.83-3.21c-1.72-.12-4.97 2.16-5.51 5.15c-.17.94-1.38 6.82 6.41 12.15c6.71 4.6 16.63 4.17 15.98-5.09c-.3 1.14-1.15 2.44-2.03 3.23z",
    fill: "#b0b0b0"
  }), f.createElement("path", {
    d: "M44.26 65.72c-.19 3.57-4.37 5.45-6.7 5.46c-6.59.01-12.51-4.13-12.92-11.5c-.07-1.32.58-3.23.58-3.23c-.87.37-2.1 2.25-2.36 3.31c-1.54 6.36 4.87 13.77 11.62 15.27c3.42.76 7.73-.41 9.3-3.47c1.12-2.18.9-4.05.48-5.84z",
    fill: "#01579b"
  }), f.createElement("path", {
    d: "M67.32 32.72c-4.48-.51-6.96-3.44-7.61-4.11c-1.78-1.86-2.88-3.67-2.24-6.35c.2-.86.69-1.96 1.29-2.58c-.73.24-1.91 1.81-2.28 2.66c-.38.85-1.76 4.04 1.2 7.97c1.83 2.44 5.02 5.19 9.74 5.85c3.35.47 5.75-.73 7.75-2.68c1.36-1.33 1.96-4.33 1.15-5.88c.13 1.13-1.94 5.93-9 5.12z",
    fill: "#df7f14"
  }), f.createElement("path", {
    d: "M104.17 44.85c-.41-1.51-1.58-3.08-1.7-3.16c.51.98 1.52 3.92-.6 6.78c-1.07 1.44-4.29 3.21-8.09.13c-1.12-.91-2.02-1.81-4.04-2.55c-5.13-1.89-2.89-7.11-1.11-8.73c-1.4.73-2.67 2.04-3.2 4.04c-.74 2.79 1.09 5.71 3.87 7.11c3.16 1.59 4.18 4.66 8.51 4.66c.22 0 .45-.01.7-.03c2.92-.25 4.15-1.38 5.04-2.76c1.09-1.72 1.12-3.67.62-5.49z",
    fill: "#558b2f"
  }), f.createElement("path", {
    d: "M25.82 25.79c2.28-2.25 6.25-4.63 12.06-1.6c3.5 1.82 7.57 3.96 5.73 11.36c-1.14 4.59-7.82 7.02-13.4 1.91c-2.21-2.02-10.61-5.53-4.39-11.67z",
    fill: "#f44336"
  }), f.createElement("path", {
    d: "M44.94 34.56c.07-1.75-.83-3.88-1.14-4.6c.05 1.05.96 3.7-3.21 7.21c-1.45 1.22-4.08 2.15-6.95 1.02c-1.47-.58-3.58-3.01-5.09-3.62c-5.61-2.26-3.19-8.27-2.4-9.09c-1.27.89-2.35 2.31-2.75 4.38c-.52 2.71-.04 5.27 3.68 8.2c10.56 8.33 13.8 3.31 14.95 2.03c1.45-1.56 2.83-3.6 2.91-5.53z",
    fill: "#c62828"
  }), f.createElement("path", {
    d: "M65.74 19.36c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.51-1.1 4.28-2.44 2.22-3.41z",
    fill: "#ffffff"
  }), f.createElement("path", {
    d: "M34.76 24.46c-1.45-.96-6.08-.97-7.47 2.58c-.84 2.13.47 4.6 2.04 4.56c1.79-.04.93-2.15 2.42-3.49c1.88-1.69 5.04-2.31 3.01-3.65z",
    fill: "#ffffff"
  }), f.createElement("path", {
    d: "M34.07 56.5c-1.37-.87-5.43-1.21-7.11 1.97c-1.23 2.34.46 4.92 1.93 4.85c1.67-.08 1.11-2.74 2.18-3.34c1.63-.91 4.92-2.26 3-3.48z",
    fill: "#ffffff"
  }), f.createElement("path", {
    d: "M57.4 83.13c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.5-1.1 4.27-2.44 2.22-3.41z",
    fill: "#ffffff"
  }), f.createElement("path", {
    d: "M95.08 38.05c-1.32-.94-5.49-1.49-6.91 1.81c-.85 1.98.28 4.35 1.75 4.36c1.67.01 1.26-2.67 2.37-3.21c1.67-.81 4.64-1.64 2.79-2.96z",
    fill: "#ffffff"
  })), Y = (e, r, i) => {
    const t = r[e];
    if (typeof t != "string" || !t.trim()) return;
    const n = i(e), o = Number(n);
    return Number.isFinite(o) ? o : void 0;
  }, Kr = (e, r) => {
    if (e !== void 0) return Math.round(typeof r == "number" && r === 254 ? e / 254 * 100 : e);
  }, ne = (e, r, i, t) => {
    const n = Y(e, r, i);
    return Kr(n, t);
  };
  function Rt(e, r, i) {
    const t = Y("colorLightTemperatureOid", r, i) ?? 2e3;
    e.kelvin = t;
  }
  function st(e, r, i) {
    var _a;
    const t = ne("colorLightBrightnessOid", r, i, (_a = r.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
    t !== void 0 && (e.value = t);
  }
  function Z(e, r, i, t, n) {
    var _a, _b, _c;
    switch (r) {
      case "cct": {
        if (n === 1) Rt(e, t, i);
        else if (n === 2) {
          const o = ne("colorLightBrightnessOid", t, i, (_a = t.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
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
          const o = Y("colorLightRedOid", t, i), l = Y("colorLightGreenOid", t, i), c = Y("colorLightBlueOid", t, i);
          e.red = o ?? 0, e.green = l ?? 0, e.blue = c ?? 0;
        }
        break;
      }
      case "h/s/v":
      case "h/s/v/cct": {
        if (t.colorLightHueOid && t.colorLightSaturationOid && t.colorLightBrightnessOid) {
          const o = Y("colorLightHueOid", t, i), l = ne("colorLightSaturationOid", t, i, (_b = t.colorLightSaturationOidObject) == null ? void 0 : _b.maxValue), c = ne("colorLightBrightnessOid", t, i, (_c = t.colorLightBrightnessOidObject) == null ? void 0 : _c.maxValue);
          o !== void 0 && (e.hue = o), l !== void 0 && (e.saturation = l), c !== void 0 && (e.value = c);
        }
        break;
      }
    }
  }
  const Yr = (e, r) => !e || !r ? true : !!r[e], Qr = (e) => e === "kelvin" ? 2e3 : e === "hexString" ? "#ffffff" : 0, Se = (e, r) => {
    const i = r.value;
    r.hexString = e.hexString, r.value = i;
  }, qr = (e) => g.jsx(dt, {
    component: Xr,
    viewBox: "0 0 128 128",
    ...e
  }), Jr = (e) => g.jsxs(dt, {
    viewBox: "0 0 512 512",
    ...e,
    children: [
      g.jsxs("defs", {
        children: [
          g.jsxs("linearGradient", {
            id: "cctGradient",
            x1: "0",
            y1: "0",
            x2: "0",
            y2: "1",
            children: [
              g.jsx("stop", {
                offset: "0%",
                stopColor: "#1E90FF"
              }),
              g.jsx("stop", {
                offset: "100%",
                stopColor: "#FF8C00"
              })
            ]
          }),
          g.jsxs("filter", {
            id: "insetShadow",
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%",
            children: [
              g.jsx("feOffset", {
                dx: "0",
                dy: "2"
              }),
              g.jsx("feGaussianBlur", {
                stdDeviation: "4",
                result: "offset-blur"
              }),
              g.jsx("feComposite", {
                operator: "out",
                in: "SourceGraphic",
                in2: "offset-blur",
                result: "inverse"
              }),
              g.jsx("feFlood", {
                floodColor: "#FFF176",
                floodOpacity: "0.4"
              }),
              g.jsx("feComposite", {
                in2: "inverse",
                operator: "in",
                result: "shadow"
              }),
              g.jsx("feComposite", {
                in: "shadow",
                in2: "SourceGraphic",
                operator: "over"
              })
            ]
          })
        ]
      }),
      g.jsx("circle", {
        cx: "256",
        cy: "256",
        r: "252",
        fill: "#FFF176"
      }),
      g.jsx("circle", {
        cx: "256",
        cy: "256",
        r: "240",
        fill: "url(#cctGradient)",
        filter: "url(#insetShadow)"
      }),
      g.jsx("g", {
        transform: "translate(256 280) scale(1.2) translate(-256 -256)",
        children: g.jsx("path", {
          d: "M192 200c0-35 29-64 64-64s64 29 64 64c0 23.1-12.2 43.5-30.6 55.3V288c0 8.8-7.2 16-16 16h-35c-8.8 0-16-7.2-16-16v-32.7C204.2 243.5 192 223.1 192 200zm56 136h16c4.4 0 8 3.6 8 8v16h-32v-16c0-4.4 3.6-8 8-8z",
          fill: "#FFF176",
          stroke: "#000000",
          strokeWidth: "4"
        })
      })
    ]
  });
  function Zr() {
    var _a;
    const [e, r] = f.useState(false), i = f.useContext(Me), { widget: t, widget: { data: n }, values: o, getPropertyValue: l } = i, { data: c } = at("oid"), a = Yt("oid"), u = f.useRef(null), h = Vt(u.current, (n.colorLightSliderWidth || 1) * 28), s = f.useRef(null), d = f.useRef(null), v = f.useRef(e), _ = f.useRef(t.data);
    _.current = t.data;
    const b = f.useRef(l);
    b.current = l;
    const [x, L] = f.useState(false), m = f.useRef(false), k = f.useRef(false), w = n.colorLightType === "rgbcct" || n.colorLightType === "r/g/b/cct" || n.colorLightType === "h/s/v/cct", p = e && w ? "cct" : n.colorLightType, { value: $, updateValue: U } = T("colorLightSwitchOid"), { value: q, hasBackendChange: He, updateValue: de } = T("colorLightTemperatureOid"), { updateValue: ee, hasBackendChange: te } = T("colorLightBrightnessOid"), { updateValue: fe, hasBackendChange: We } = T("colorLightRgbHexOid"), { updateValue: ge, hasBackendChange: ze } = T("colorLightRedOid"), { updateValue: ve, hasBackendChange: Ne } = T("colorLightGreenOid"), { updateValue: me, hasBackendChange: De } = T("colorLightBlueOid"), { updateValue: be, hasBackendChange: Fe } = T("colorLightHueOid"), { updateValue: pe, hasBackendChange: Ve } = T("colorLightSaturationOid"), jt = ((_a = t.data.colorLightSwitchOidObject) == null ? void 0 : _a.type) === "boolean", Ge = (C, O) => {
      Z(C, p, l, t.data, O);
    }, $e = f.useMemo(() => (C, O) => {
      const _e = (O == null ? void 0 : O.maxValue) === 254, re = Math.round(C);
      return _e ? Math.round(C / 100 * 254) : re;
    }, []), Ue = f.useMemo(() => ({
      cct: [
        {
          colorProp: "kelvin",
          oidField: "colorLightTemperatureOid",
          setter: de,
          cctComponent: 1
        },
        {
          colorProp: "value",
          oidField: "colorLightBrightnessOid",
          setter: ee,
          normalize: true,
          cctComponent: 2
        }
      ],
      rgb: [
        {
          colorProp: "hexString",
          oidField: "colorLightRgbHexOid",
          setter: fe
        }
      ],
      rgbcct: [
        {
          colorProp: "hexString",
          oidField: "colorLightRgbHexOid",
          setter: fe
        }
      ],
      "r/g/b": [
        {
          colorProp: "red",
          oidField: "colorLightRedOid",
          setter: ge
        },
        {
          colorProp: "green",
          oidField: "colorLightGreenOid",
          setter: ve
        },
        {
          colorProp: "blue",
          oidField: "colorLightBlueOid",
          setter: me
        }
      ],
      "r/g/b/cct": [
        {
          colorProp: "red",
          oidField: "colorLightRedOid",
          setter: ge
        },
        {
          colorProp: "green",
          oidField: "colorLightGreenOid",
          setter: ve
        },
        {
          colorProp: "blue",
          oidField: "colorLightBlueOid",
          setter: me
        }
      ],
      "h/s/v": [
        {
          colorProp: "hue",
          oidField: "colorLightHueOid",
          setter: be,
          changeKey: "h"
        },
        {
          colorProp: "saturation",
          oidField: "colorLightSaturationOid",
          setter: pe,
          normalize: true,
          changeKey: "s"
        },
        {
          colorProp: "value",
          oidField: "colorLightBrightnessOid",
          setter: ee,
          normalize: true,
          changeKey: "v"
        }
      ],
      "h/s/v/cct": [
        {
          colorProp: "hue",
          oidField: "colorLightHueOid",
          setter: be,
          changeKey: "h"
        },
        {
          colorProp: "saturation",
          oidField: "colorLightSaturationOid",
          setter: pe,
          normalize: true,
          changeKey: "s"
        },
        {
          colorProp: "value",
          oidField: "colorLightBrightnessOid",
          setter: ee,
          normalize: true,
          changeKey: "v"
        }
      ]
    }), [
      de,
      ee,
      fe,
      ge,
      ve,
      me,
      be,
      pe
    ]), Xe = f.useMemo(() => (C, O, _e) => {
      if (!(!p || k.current || m.current)) {
        k.current = true;
        try {
          const re = Ue[p];
          if (!re) return;
          re.forEach((ye) => {
            const { colorProp: Ye, oidField: Pt, setter: Bt, normalize: Ht, cctComponent: Qe, changeKey: Wt } = ye;
            if (Qe !== void 0 && O !== Qe || !Yr(Wt, _e)) return;
            const zt = `${Pt}Object`, qe = t.data[zt];
            if (!qe) return;
            let j = C[Ye];
            Ht && typeof j == "number" ? j = $e(j, qe) : typeof j == "number" && (j = Math.round(j)), j == null && (j = Qr(Ye)), Bt(j);
          }), O === 1 && L((ye) => !ye);
        } finally {
          Promise.resolve().then(() => {
            k.current = false;
          });
        }
      }
    }, [
      p,
      Ue,
      t,
      $e,
      k
    ]), Tt = f.useMemo(() => Mt(h, n.colorLightUIComponent, n.colorLightSliderWidth, p), [
      h,
      n.colorLightUIComponent,
      n.colorLightSliderWidth,
      p
    ]), Ke = f.useMemo(() => ({
      dimensions: h,
      colorLightGamut: n.colorLightGamut,
      colorWheelLightness: n.colorWheelLightness,
      colorLightUIComponent: n.colorLightUIComponent,
      colorLightSliderWidth: n.colorLightSliderWidth,
      colorLightBorderWidth: n.colorLightBorderWidth,
      colorLightBorderColor: n.colorLightBorderColor,
      colorLightType: p,
      colorLightCtMin: n.colorLightCtMin,
      colorLightCtMax: n.colorLightCtMax
    }), [
      h,
      n.colorLightGamut,
      n.colorWheelLightness,
      n.colorLightUIComponent,
      n.colorLightSliderWidth,
      n.colorLightBorderWidth,
      n.colorLightBorderColor,
      n.colorLightCtMin,
      n.colorLightCtMax,
      p
    ]);
    return f.useEffect(() => {
      if (p !== "cct" || !s.current || !d.current) return;
      const C = s.current.color, O = d.current.color;
      if (x) {
        m.current = true;
        try {
          Se(C, O);
        } finally {
          m.current = false;
        }
      }
    }, [
      p,
      x
    ]), f.useEffect(() => {
      if (p !== "cct" || !s.current || !d.current || !He) return;
      const C = s.current.color, O = d.current.color;
      if (q != null) {
        m.current = true;
        try {
          C.kelvin = Number(q), Se(C, O);
        } finally {
          m.current = false;
        }
      }
    }, [
      p,
      He,
      q
    ]), f.useEffect(() => {
      if (!(!e || p !== "cct") && !(!te || !d.current)) {
        m.current = true;
        try {
          st(d.current.color, _.current, b.current);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      p,
      te
    ]), f.useEffect(() => {
      if (!(e || ![
        "rgb",
        "rgbcct"
      ].includes(p || "")) && !(!We || !s.current)) {
        m.current = true;
        try {
          Z(s.current.color, p, l, t.data);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      p,
      We,
      l,
      t.data
    ]), f.useEffect(() => {
      if (!(e || ![
        "r/g/b",
        "r/g/b/cct"
      ].includes(p || "")) && !(!ze && !Ne && !De || !s.current)) {
        m.current = true;
        try {
          Z(s.current.color, p, l, t.data);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      p,
      ze,
      Ne,
      De,
      l,
      t.data
    ]), f.useEffect(() => {
      if (!(e || ![
        "h/s/v",
        "h/s/v/cct"
      ].includes(p || "")) && !(!Fe && !Ve && !te || !s.current)) {
        m.current = true;
        try {
          Z(s.current.color, p, l, t.data);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      p,
      Fe,
      Ve,
      te,
      l,
      t.data
    ]), f.useEffect(() => {
      if (!e || !w || !s.current || !d.current) return;
      const C = s.current.color, O = d.current.color;
      m.current = true;
      try {
        Rt(C, _.current, b.current), v.current === false && Number(q) !== Number(C.kelvin) && de(Number(C.kelvin)), Se(C, O);
      } finally {
        m.current = false;
      }
    }, [
      e,
      w
    ]), f.useEffect(() => {
      !v.current || e || !w || s.current && st(s.current.color, _.current, b.current);
    }, [
      e,
      w
    ]), f.useEffect(() => {
      if (!(v.current !== true || e || !w || !s.current)) {
        m.current = true;
        try {
          Z(s.current.color, p, b.current, _.current);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      w,
      p
    ]), f.useEffect(() => {
      v.current = e;
    }, [
      e
    ]), g.jsxs(ht, {
      isValidType: jt,
      data: c,
      oidValue: a,
      children: [
        g.jsx(ut, {
          data: c,
          widget: t
        }),
        n.colorLightType !== "none" ? g.jsxs(N, {
          sx: {
            minWidth: 0,
            height: "100%",
            display: "flex",
            flexShrink: 0,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
          },
          children: [
            g.jsx(xe, {
              onClick: () => {
                U(!$);
              },
              children: g.jsx(Ur, {
                sx: {
                  color: $ ? "red" : "green",
                  width: "26px",
                  height: "26px"
                }
              })
            }),
            w && g.jsxs(N, {
              sx: {
                display: "inline-block"
              },
              children: [
                g.jsx(Je, {
                  orientation: "horizontal",
                  flexItem: true,
                  variant: "fullWidth"
                }),
                g.jsx(xe, {
                  onClick: () => r(false),
                  children: g.jsx(qr, {
                    sx: {
                      width: "24px",
                      height: "24px"
                    }
                  })
                })
              ]
            }),
            w && g.jsx(N, {
              sx: {
                display: "block"
              },
              children: g.jsx(xe, {
                onClick: () => r(true),
                children: g.jsx(Jr, {
                  sx: {
                    width: "24px",
                    height: "24px"
                  }
                })
              })
            })
          ]
        }) : null,
        g.jsx(Je, {
          orientation: "vertical",
          flexItem: true,
          variant: "middle"
        }),
        g.jsx(N, {
          ref: u,
          sx: {
            minWidth: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: Number(n.colorLightPadding) || 0
          },
          children: Object.keys(o).length !== 0 && h.width !== void 0 && n.colorLightType !== "none" && g.jsxs(g.Fragment, {
            children: [
              g.jsx(Ae, {
                cctComponentNumber: 1,
                ref: s,
                onColorInit: Ge,
                onInputChange: (C, O) => Xe(C, 1, O),
                ...Ke
              }),
              p === "cct" && g.jsx(N, {
                sx: {
                  ml: `${Tt}px`
                },
                children: g.jsx(Ae, {
                  cctComponentNumber: 2,
                  onColorInit: Ge,
                  onInputChange: (C, O) => Xe(C, 2, O),
                  ref: d,
                  ...Ke
                })
              })
            ]
          })
        })
      ]
    });
  }
  const ei = er(Zr);
  It = class extends Gt {
    static getWidgetInfo() {
      return {
        id: "tplLight2CollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "Light2CollectionWidget",
        visWidgetLabel: "light2_collection_widget",
        visOrder: 11,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...Ze({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "light",
            label: "group_light",
            fields: [
              ...Ut(),
              ...qt()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Ze({
                groupName: "",
                allFields: false
              })
            ],
            hidden: (r) => !r.colorLightButton
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-light.png"
      };
    }
    getWidgetInfo() {
      return It.getWidgetInfo();
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
      const t = {
        id: r.id,
        refService: r.refService,
        style: r.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle
        },
        setValue: this.setValue,
        setState: this.setState.bind(this),
        values: this.state.values,
        isSignalVisible: this.isSignalVisible.bind(this),
        getPropertyValue: this.getPropertyValue.bind(this),
        mode: this.props.context.themeType,
        socket: this.props.context.socket,
        theme: this.props.context.theme,
        wrappedContent: i
      };
      return $t(this.wrapContent(g.jsx(ei, {})), t);
    }
  };
});
export {
  __tla,
  It as default
};
