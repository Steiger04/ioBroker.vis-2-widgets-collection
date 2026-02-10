import { j as v, C as z, a7 as zt, v as Ae, y as at, E as st, G as ht, S as Nt, z as Dt, M as Ft, w as D, c as Vt, a9 as Gt, I as ye, D as qe, ao as ut, H as $t, J as Je, N as Ut, __tla as __tla_0 } from "./useData-V3RviNbf.js";
import { u as j, d as Xt, __tla as __tla_1 } from "./useValueState-CYv7cSN1.js";
import { v as d, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { B as Kt, __tla as __tla_3 } from "./Button-CdDTnNmO.js";
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
  })()
]).then(async () => {
  const Ze = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=", et = {
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
  }, Yt = async (e, r, i, t) => {
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
            if (h && et[h] && (!r[h] || r[h] === "nothing_selected") && n !== h) {
              const a = et[h];
              s[a] = u._id, await zt([
                "boolean",
                "number",
                "string",
                "mixed"
              ], a)(e, r, i, t), a === "colorLightTemperatureOid" && (!s.colorLightCtMin && u.common.min && (s.colorLightCtMin = u.common.min), !s.colorLightCtMax && u.common.max && (s.colorLightCtMax = u.common.max)), a === "colorLightSwitchOid" && (s.values_count = 2, s.value1 = true, s.alias1 = "TRUE", s.value2 = false, s.alias2 = "FALSE", s.iconSize = 0, s.iconSmall1 = Ze, s.iconColor1 = "red", s.iconSize1 = 100, s.iconSmall2 = Ze, s.iconColor2 = "green", s.iconSize2 = 100);
            }
          })), i(r);
        }
      }
    }
  }, Qt = () => [
    {
      type: "custom",
      component: () => v.jsx(z, {})
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
      component: () => v.jsx(z, {})
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
      component: () => v.jsx(z, {})
    },
    {
      name: "colorLightSwitchOid",
      type: "id",
      label: "color_light_switch_oid",
      onChange: Yt
    },
    {
      type: "custom",
      component: () => v.jsx(z, {})
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
      component: () => v.jsx(z, {}),
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
      component: () => v.jsx(z, {}),
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
      component: () => v.jsx(z, {}),
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
  function qt({ onClick: e = () => {
  }, onLongPress: r = () => {
  }, ms: i = 300 } = {}) {
    const t = d.useRef(null), n = d.useRef(null), o = d.useRef(false), l = d.useCallback(() => {
      n.current && (o.current = true, r(n.current)), t.current = null, n.current = null;
    }, [
      r
    ]), c = d.useCallback((u) => {
      "touches" in u && u.preventDefault(), n.current = u, o.current = false, t.current = setTimeout(l, i);
    }, [
      l,
      i
    ]), s = d.useCallback((u) => {
      const h = n.current, a = o.current;
      t.current && (clearTimeout(t.current), t.current = null), !a && h && e(h), n.current = null, o.current = false;
    }, [
      e
    ]);
    return d.useMemo(() => ({
      onMouseDown: c,
      onMouseUp: s,
      onMouseLeave: s,
      onTouchStart: c,
      onTouchEnd: s
    }), [
      c,
      s
    ]);
  }
  function Jt(e) {
    return typeof e == "object" && e !== null && "colorLightButton" in e && "colorLightSwitchOid" in e;
  }
  function Zt(e) {
    const r = (t) => {
      var _a;
      const n = d.useContext(Ae);
      if (!n || !n.widget) throw new Error("withButtonModal must be used within a CollectionProvider");
      const { widget: o } = n, [l, c] = d.useState(false), s = o.data, { value: u, updateValue: h } = j("colorLightSwitchOid"), { data: a } = at("colorLightSwitchOid"), f = Jt(s) && s.colorLightButton, p = ((_a = f ? s.colorLightSwitchOidObject : void 0) == null ? void 0 : _a.type) === "boolean", L = qt({
        onClick: () => h(!u),
        onLongPress: () => c(true),
        ms: f ? s.colorLightDelayLongPress ?? 500 : 500
      }), m = f ? (s.colorLightSliderWidth || 1) * 28 : 28, w = f && typeof s.colorLightModalWidth == "number" && s.colorLightModalWidth > 0 ? s.colorLightModalWidth : (f && s.colorLightModalHeight || 300) + 40 + 12 + m;
      return f ? v.jsxs(v.Fragment, {
        children: [
          v.jsxs(st, {
            isValidType: p,
            data: a,
            oidValue: u,
            children: [
              v.jsx(ht, {
                data: a,
                widget: o
              }),
              v.jsx(Kt, {
                variant: "text",
                ...L,
                sx: {
                  color: a.iconColorActive || "inherit",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: v.jsx(Nt, {
                  alt: "",
                  src: a.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                  style: {
                    width: typeof a.iconSizeOnly == "number" && `calc(100% * ${a.iconSizeOnly} / 100)` || "100%",
                    height: typeof a.iconSizeOnly == "number" && `calc(100% * ${a.iconSizeOnly} / 100)` || "100%",
                    objectFit: "contain",
                    ...Dt(a.iconActive || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", a.iconColorActive || a.iconColor)
                  }
                })
              })
            ]
          }),
          v.jsx(Ft, {
            open: l,
            onClose: () => c(false),
            children: v.jsx(D, {
              sx: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: w,
                height: s.colorLightModalHeight || 300
              },
              children: v.jsx(e, {
                ...t
              })
            })
          })
        ]
      }) : v.jsx(e, {
        ...t
      });
    }, i = e.displayName || e.name || "Component";
    return r.displayName = `withButtonModal(${i})`, r;
  }
  var S, ne, dt, Se, ft, H = {}, Me = [], er = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
  function B(e, r) {
    for (var i in r) e[i] = r[i];
    return e;
  }
  function gt(e) {
    var r = e.parentNode;
    r && r.removeChild(e);
  }
  function x(e, r, i) {
    var t, n, o, l, c = arguments;
    if (r = B({}, r), arguments.length > 3) for (i = [
      i
    ], t = 3; t < arguments.length; t++) i.push(c[t]);
    if (i != null && (r.children = i), e != null && e.defaultProps != null) for (n in e.defaultProps) r[n] === void 0 && (r[n] = e.defaultProps[n]);
    return l = r.key, (o = r.ref) != null && delete r.ref, l != null && delete r.key, Ce(e, r, l, o);
  }
  function Ce(e, r, i, t) {
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
  function ce(e) {
    return e.children;
  }
  function tr(e) {
    if (e == null || typeof e == "boolean") return null;
    if (typeof e == "string" || typeof e == "number") return Ce(null, e, null, null);
    if (e.__e != null || e.__c != null) {
      var r = Ce(e.type, e.props, e.key, null);
      return r.__e = e.__e, r;
    }
    return e;
  }
  function Q(e, r) {
    this.props = e, this.context = r;
  }
  function oe(e, r) {
    if (r == null) return e.__p ? oe(e.__p, e.__p.__k.indexOf(e) + 1) : null;
    for (var i; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) return i.__e;
    return typeof e.type == "function" ? oe(e) : null;
  }
  function vt(e) {
    var r, i;
    if ((e = e.__p) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, r = 0; r < e.__k.length; r++) if ((i = e.__k[r]) != null && i.__e != null) {
        e.__e = e.__c.base = i.__e;
        break;
      }
      return vt(e);
    }
  }
  function xe(e) {
    (!e.__d && (e.__d = true) && ne.push(e) === 1 || Se !== S.debounceRendering) && (Se = S.debounceRendering, (S.debounceRendering || dt)(rr));
  }
  function rr() {
    var e, r, i, t, n, o, l, c;
    for (ne.sort(function(s, u) {
      return u.__v.__b - s.__v.__b;
    }); e = ne.pop(); ) e.__d && (i = void 0, t = void 0, o = (n = (r = e).__v).__e, l = r.__P, c = r.u, r.u = false, l && (i = [], t = Re(l, n, B({}, n), r.__n, l.ownerSVGElement !== void 0, null, i, c, o ?? oe(n)), bt(i, n), t != o && vt(n)));
  }
  function mt(e, r, i, t, n, o, l, c, s) {
    var u, h, a, f, g, y, p, L = i && i.__k || Me, m = L.length;
    if (c == H && (c = o != null ? o[0] : m ? oe(i, 0) : null), u = 0, r.__k = Ie(r.__k, function(_) {
      if (_ != null) {
        if (_.__p = r, _.__b = r.__b + 1, (a = L[u]) === null || a && _.key == a.key && _.type === a.type) L[u] = void 0;
        else for (h = 0; h < m; h++) {
          if ((a = L[h]) && _.key == a.key && _.type === a.type) {
            L[h] = void 0;
            break;
          }
          a = null;
        }
        if (f = Re(e, _, a = a || H, t, n, o, l, null, c, s), (h = _.ref) && a.ref != h && (p || (p = [])).push(h, _.__c || f, _), f != null) {
          if (y == null && (y = f), _.l != null) f = _.l, _.l = null;
          else if (o == a || f != c || f.parentNode == null) {
            e: if (c == null || c.parentNode !== e) e.appendChild(f);
            else {
              for (g = c, h = 0; (g = g.nextSibling) && h < m; h += 2) if (g == f) break e;
              e.insertBefore(f, c);
            }
            r.type == "option" && (e.value = "");
          }
          c = f.nextSibling, typeof r.type == "function" && (r.l = f);
        }
      }
      return u++, _;
    }), r.__e = y, o != null && typeof r.type != "function") for (u = o.length; u--; ) o[u] != null && gt(o[u]);
    for (u = m; u--; ) L[u] != null && _t(L[u], L[u]);
    if (p) for (u = 0; u < p.length; u++) pt(p[u], p[++u], p[++u]);
  }
  function Ie(e, r, i) {
    if (i == null && (i = []), e == null || typeof e == "boolean") r && i.push(r(null));
    else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Ie(e[t], r, i);
    else i.push(r ? r(tr(e)) : e);
    return i;
  }
  function ir(e, r, i, t, n) {
    var o;
    for (o in i) o in r || rt(e, o, null, i[o], t);
    for (o in r) n && typeof r[o] != "function" || o === "value" || o === "checked" || i[o] === r[o] || rt(e, o, r[o], i[o], t);
  }
  function tt(e, r, i) {
    r[0] === "-" ? e.setProperty(r, i) : e[r] = typeof i == "number" && er.test(r) === false ? i + "px" : i ?? "";
  }
  function rt(e, r, i, t, n) {
    var o, l, c, s, u;
    if (!((r = n ? r === "className" ? "class" : r : r === "class" ? "className" : r) === "key" || r === "children")) if (r === "style") if (o = e.style, typeof i == "string") o.cssText = i;
    else {
      if (typeof t == "string" && (o.cssText = "", t = null), t) for (l in t) i && l in i || tt(o, l, "");
      if (i) for (c in i) t && i[c] === t[c] || tt(o, c, i[c]);
    }
    else r[0] === "o" && r[1] === "n" ? (s = r !== (r = r.replace(/Capture$/, "")), u = r.toLowerCase(), r = (u in e ? u : r).slice(2), i ? (t || e.addEventListener(r, it, s), (e.t || (e.t = {}))[r] = i) : e.removeEventListener(r, it, s)) : r !== "list" && r !== "tagName" && r !== "form" && !n && r in e ? e[r] = i ?? "" : typeof i != "function" && r !== "dangerouslySetInnerHTML" && (r !== (r = r.replace(/^xlink:?/, "")) ? i == null || i === false ? e.removeAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", r.toLowerCase(), i) : i == null || i === false ? e.removeAttribute(r) : e.setAttribute(r, i));
  }
  function it(e) {
    return this.t[e.type](S.event ? S.event(e) : e);
  }
  function Re(e, r, i, t, n, o, l, c, s, u) {
    var h, a, f, g, y, p, L, m, _, w, b = r.type;
    if (r.constructor !== void 0) return null;
    (h = S.__b) && h(r);
    try {
      e: if (typeof b == "function") {
        if (m = r.props, _ = (h = b.contextType) && t[h.__c], w = h ? _ ? _.props.value : h.__p : t, i.__c ? L = (a = r.__c = i.__c).__p = a.__E : ("prototype" in b && b.prototype.render ? r.__c = a = new b(m, w) : (r.__c = a = new Q(m, w), a.constructor = b, a.render = or), _ && _.sub(a), a.props = m, a.state || (a.state = {}), a.context = w, a.__n = t, f = a.__d = true, a.__h = []), a.__s == null && (a.__s = a.state), b.getDerivedStateFromProps != null && B(a.__s == a.state ? a.__s = B({}, a.__s) : a.__s, b.getDerivedStateFromProps(m, a.__s)), f) b.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), a.componentDidMount != null && l.push(a);
        else {
          if (b.getDerivedStateFromProps == null && c == null && a.componentWillReceiveProps != null && a.componentWillReceiveProps(m, w), !c && a.shouldComponentUpdate != null && a.shouldComponentUpdate(m, a.__s, w) === false) {
            for (a.props = m, a.state = a.__s, a.__d = false, a.__v = r, r.__e = s != null ? s !== i.__e ? s : i.__e : null, r.__k = i.__k, h = 0; h < r.__k.length; h++) r.__k[h] && (r.__k[h].__p = r);
            break e;
          }
          a.componentWillUpdate != null && a.componentWillUpdate(m, a.__s, w);
        }
        for (g = a.props, y = a.state, a.context = w, a.props = m, a.state = a.__s, (h = S.__r) && h(r), a.__d = false, a.__v = r, a.__P = e, h = a.render(a.props, a.state, a.context), r.__k = Ie(h != null && h.type == ce && h.key == null ? h.props.children : h), a.getChildContext != null && (t = B(B({}, t), a.getChildContext())), f || a.getSnapshotBeforeUpdate == null || (p = a.getSnapshotBeforeUpdate(g, y)), mt(e, r, i, t, n, o, l, s, u), a.base = r.__e; h = a.__h.pop(); ) a.__s && (a.state = a.__s), h.call(a);
        f || g == null || a.componentDidUpdate == null || a.componentDidUpdate(g, y, p), L && (a.__E = a.__p = null);
      } else r.__e = nr(i.__e, r, i, t, n, o, l, u);
      (h = S.diffed) && h(r);
    } catch (W) {
      S.__e(W, r, i);
    }
    return r.__e;
  }
  function bt(e, r) {
    for (var i; i = e.pop(); ) try {
      i.componentDidMount();
    } catch (t) {
      S.__e(t, i.__v);
    }
    S.__c && S.__c(r);
  }
  function nr(e, r, i, t, n, o, l, c) {
    var s, u, h, a, f = i.props, g = r.props;
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
    return r.type === null ? f !== g && (o != null && (o[o.indexOf(e)] = null), e.data = g) : r !== i && (o != null && (o = Me.slice.call(e.childNodes)), h = (f = i.props || H).dangerouslySetInnerHTML, a = g.dangerouslySetInnerHTML, c || (a || h) && (a && h && a.__html == h.__html || (e.innerHTML = a && a.__html || "")), ir(e, g, f, n, c), r.__k = r.props.children, a || mt(e, r, i, t, r.type !== "foreignObject" && n, o, l, H, c), c || ("value" in g && g.value !== void 0 && g.value !== e.value && (e.value = g.value == null ? "" : g.value), "checked" in g && g.checked !== void 0 && g.checked !== e.checked && (e.checked = g.checked))), e;
  }
  function pt(e, r, i) {
    try {
      typeof e == "function" ? e(r) : e.current = r;
    } catch (t) {
      S.__e(t, i);
    }
  }
  function _t(e, r, i) {
    var t, n, o;
    if (S.unmount && S.unmount(e), (t = e.ref) && pt(t, null, r), i || typeof e.type == "function" || (i = (n = e.__e) != null), e.__e = e.l = null, (t = e.__c) != null) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (l) {
        S.__e(l, r);
      }
      t.base = t.__P = null;
    }
    if (t = e.__k) for (o = 0; o < t.length; o++) t[o] && _t(t[o], r, i);
    n != null && gt(n);
  }
  function or(e, r, i) {
    return this.constructor(e, i);
  }
  function lr(e, r, i) {
    var t, n, o;
    S.__p && S.__p(e, r), n = (t = i === ft) ? null : r.__k, e = x(ce, null, [
      e
    ]), o = [], Re(r, r.__k = e, n || H, H, r.ownerSVGElement !== void 0, n ? null : Me.slice.call(r.childNodes), o, false, H, t), bt(o, e);
  }
  S = {}, Q.prototype.setState = function(e, r) {
    var i = this.__s !== this.state && this.__s || (this.__s = B({}, this.state));
    (typeof e != "function" || (e = e(i, this.props))) && B(i, e), e != null && this.__v && (this.u = false, r && this.__h.push(r), xe(this));
  }, Q.prototype.forceUpdate = function(e) {
    this.__v && (e && this.__h.push(e), this.u = true, xe(this));
  }, Q.prototype.render = ce, ne = [], dt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Se = S.debounceRendering, S.__e = function(e, r, i) {
    for (var t; r = r.__p; ) if ((t = r.__c) && !t.__p) try {
      if (t.constructor && t.constructor.getDerivedStateFromError != null) t.setState(t.constructor.getDerivedStateFromError(e));
      else {
        if (t.componentDidCatch == null) continue;
        t.componentDidCatch(e);
      }
      return xe(t.__E = t);
    } catch (n) {
      e = n;
    }
    throw e;
  }, ft = H;
  function cr(e, r) {
    for (var i = 0; i < r.length; i++) {
      var t = r[i];
      t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(e, t.key, t);
    }
  }
  function ar(e, r, i) {
    return r && cr(e.prototype, r), e;
  }
  function M() {
    return M = Object.assign || function(e) {
      for (var r = arguments, i = 1; i < arguments.length; i++) {
        var t = r[i];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }, M.apply(this, arguments);
  }
  var sr = "[-\\+]?\\d+%?", hr = "[-\\+]?\\d*\\.\\d+%?", F = "(?:" + hr + ")|(?:" + sr + ")", yt = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", xt = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", ur = new RegExp("rgb" + yt), dr = new RegExp("rgba" + xt), fr = new RegExp("hsl" + yt), gr = new RegExp("hsla" + xt), ae = "^(?:#?|0x?)", V = "([0-9a-fA-F]{1})", G = "([0-9a-fA-F]{2})", vr = new RegExp(ae + V + V + V + "$"), mr = new RegExp(ae + V + V + V + V + "$"), br = new RegExp(ae + G + G + G + "$"), pr = new RegExp(ae + G + G + G + G + "$"), _r = 2e3, yr = 4e4, re = Math.log, X = Math.round, q = Math.floor;
  function I(e, r, i) {
    return Math.min(Math.max(e, r), i);
  }
  function E(e, r) {
    var i = e.indexOf("%") > -1, t = parseFloat(e);
    return i ? r / 100 * t : t;
  }
  function A(e) {
    return parseInt(e, 16);
  }
  function N(e) {
    return e.toString(16).padStart(2, "0");
  }
  var K = (function() {
    function e(i, t) {
      this.$ = {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      }, i && this.set(i), this.onChange = t, this.initialValue = M({}, this.$);
    }
    var r = e.prototype;
    return r.set = function(t) {
      if (typeof t == "string") /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t);
      else if (typeof t == "object") t instanceof e ? this.hsva = t.hsva : "r" in t && "g" in t && "b" in t ? this.rgb = t : "h" in t && "s" in t && "v" in t ? this.hsv = t : "h" in t && "s" in t && "l" in t ? this.hsl = t : "kelvin" in t && (this.kelvin = t.kelvin);
      else throw new Error("Invalid color value");
    }, r.setChannel = function(t, n, o) {
      var l;
      this[t] = M({}, this[t], (l = {}, l[n] = o, l));
    }, r.reset = function() {
      this.hsva = this.initialValue;
    }, r.clone = function() {
      return new e(this);
    }, r.unbind = function() {
      this.onChange = void 0;
    }, e.hsvToRgb = function(t) {
      var n = t.h / 60, o = t.s / 100, l = t.v / 100, c = q(n), s = n - c, u = l * (1 - o), h = l * (1 - s * o), a = l * (1 - (1 - s) * o), f = c % 6, g = [
        l,
        h,
        u,
        u,
        a,
        l
      ][f], y = [
        a,
        l,
        l,
        h,
        u,
        u
      ][f], p = [
        u,
        u,
        a,
        l,
        l,
        h
      ][f];
      return {
        r: I(g * 255, 0, 255),
        g: I(y * 255, 0, 255),
        b: I(p * 255, 0, 255)
      };
    }, e.rgbToHsv = function(t) {
      var n = t.r / 255, o = t.g / 255, l = t.b / 255, c = Math.max(n, o, l), s = Math.min(n, o, l), u = c - s, h = 0, a = c, f = c === 0 ? 0 : u / c;
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
      return {
        h: h * 60 % 360,
        s: I(f * 100, 0, 100),
        v: I(a * 100, 0, 100)
      };
    }, e.hsvToHsl = function(t) {
      var n = t.s / 100, o = t.v / 100, l = (2 - n) * o, c = l <= 1 ? l : 2 - l, s = c < 1e-9 ? 0 : n * o / c;
      return {
        h: t.h,
        s: I(s * 100, 0, 100),
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
      return n < 66 ? (o = 255, l = -155.25485562709179 - 0.44596950469579133 * (l = n - 2) + 104.49216199393888 * re(l), c = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (c = n - 10) + 115.67994401066147 * re(c)) : (o = 351.97690566805693 + 0.114206453784165 * (o = n - 55) - 40.25366309332127 * re(o), l = 325.4494125711974 + 0.07943456536662342 * (l = n - 50) - 28.0852963507957 * re(l), c = 255), {
        r: I(q(o), 0, 255),
        g: I(q(l), 0, 255),
        b: I(q(c), 0, 255)
      };
    }, e.rgbToKelvin = function(t) {
      for (var n = t.r, o = t.b, l = 0.4, c = _r, s = yr, u; s - c > l; ) {
        u = (s + c) * 0.5;
        var h = e.kelvinToRgb(u);
        h.b / h.r >= o / n ? s = u : c = u;
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
          if (t = M({}, n, t), this.onChange) {
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
          return M({}, this.$);
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
          this.hsv = M({}, this.hsv, {
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
          this.rgb = M({}, this.rgb, {
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
          this.rgb = M({}, this.rgb, {
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
          this.rgb = M({}, this.rgb, {
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
          this.hsv = M({}, e.rgbToHsv(t), {
            a: t.a === void 0 ? 1 : t.a
          });
        }
      },
      {
        key: "rgba",
        get: function() {
          return M({}, this.rgb, {
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
          this.hsv = M({}, e.hslToHsv(t), {
            a: t.a === void 0 ? 1 : t.a
          });
        }
      },
      {
        key: "hsla",
        get: function() {
          return M({}, this.hsl, {
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
          var n, o, l, c, s = 1;
          if ((n = ur.exec(t)) ? (o = E(n[1], 255), l = E(n[2], 255), c = E(n[3], 255)) : (n = dr.exec(t)) && (o = E(n[1], 255), l = E(n[2], 255), c = E(n[3], 255), s = E(n[4], 1)), n) this.rgb = {
            r: o,
            g: l,
            b: c,
            a: s
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
          return "#" + N(t.r) + N(t.g) + N(t.b);
        },
        set: function(t) {
          var n, o, l, c, s = 255;
          if ((n = vr.exec(t)) ? (o = A(n[1]) * 17, l = A(n[2]) * 17, c = A(n[3]) * 17) : (n = mr.exec(t)) ? (o = A(n[1]) * 17, l = A(n[2]) * 17, c = A(n[3]) * 17, s = A(n[4]) * 17) : (n = br.exec(t)) ? (o = A(n[1]), l = A(n[2]), c = A(n[3])) : (n = pr.exec(t)) && (o = A(n[1]), l = A(n[2]), c = A(n[3]), s = A(n[4])), n) this.rgb = {
            r: o,
            g: l,
            b: c,
            a: s / 255
          };
          else throw new Error("Invalid hex string");
        }
      },
      {
        key: "hex8String",
        get: function() {
          var t = this.rgba;
          return "#" + N(t.r) + N(t.g) + N(t.b) + N(q(t.a * 255));
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
          var n, o, l, c, s = 1;
          if ((n = fr.exec(t)) ? (o = E(n[1], 360), l = E(n[2], 100), c = E(n[3], 100)) : (n = gr.exec(t)) && (o = E(n[1], 360), l = E(n[2], 100), c = E(n[3], 100), s = E(n[4], 1)), n) this.hsl = {
            h: o,
            s: l,
            l: c,
            a: s
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
  })(), xr = {
    sliderShape: "bar",
    sliderType: "value",
    minTemperature: 2200,
    maxTemperature: 11e3
  };
  function je(e) {
    var r, i = e.width, t = e.sliderSize, n = e.borderWidth, o = e.handleRadius, l = e.padding, c = e.sliderShape, s = e.layoutDirection === "horizontal";
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
      width: s ? t : i,
      height: s ? i : t
    };
  }
  function Lr(e, r) {
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
  function wr(e, r, i) {
    var t = je(e), n = t.handleRange, o = t.handleStart, l;
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
  function Sr(e, r) {
    var i = je(e), t = i.width, n = i.height, o = i.handleRange, l = i.handleStart, c = e.layoutDirection === "horizontal", s = Lr(e, r), u = c ? t / 2 : n / 2, h = l + s / 100 * o;
    return c && (h = -1 * h + o + l * 2), {
      x: c ? u : h,
      y: c ? h : u
    };
  }
  function Cr(e, r) {
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
        for (var n = [], o = e.minTemperature, l = e.maxTemperature, c = 8, s = l - o, u = o, h = 0; u < l; u += s / c, h += 1) {
          var a = K.kelvinToRgb(u), f = a.r, g = a.g, y = a.b;
          n.push([
            100 / c * h,
            "rgb(" + f + "," + g + "," + y + ")"
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
        var p = K.hsvToHsl({
          h: i.h,
          s: 0,
          v: i.v
        }), L = K.hsvToHsl({
          h: i.h,
          s: 100,
          v: i.v
        });
        return [
          [
            0,
            "hsl(" + p.h + "," + p.s + "%," + p.l + "%)"
          ],
          [
            100,
            "hsl(" + L.h + "," + L.s + "%," + L.l + "%)"
          ]
        ];
      default:
        var m = K.hsvToHsl({
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
            "hsl(" + m.h + "," + m.s + "%," + m.l + "%)"
          ]
        ];
    }
  }
  var Lt = Math.PI * 2, kr = function(r, i) {
    return (r % i + i) % i;
  }, wt = function(r, i) {
    return Math.sqrt(r * r + i * i);
  };
  function St(e) {
    return e.width / 2 - e.padding - e.handleRadius - e.borderWidth;
  }
  function Or(e, r, i) {
    var t = se(e), n = t.cx, o = t.cy, l = e.width / 2;
    return wt(n - r, o - i) < l;
  }
  function se(e) {
    var r = e.width / 2;
    return {
      width: e.width,
      radius: r - e.borderWidth,
      cx: r,
      cy: r
    };
  }
  function Ct(e, r, i) {
    var t = e.wheelAngle, n = e.wheelDirection;
    return i && n === "clockwise" ? r = t + r : n === "clockwise" ? r = 360 - t + r : i && n === "anticlockwise" ? r = t + 180 - r : n === "anticlockwise" && (r = t - r), kr(r, 360);
  }
  function Er(e, r) {
    var i = r.hsv, t = se(e), n = t.cx, o = t.cy, l = St(e), c = (180 + Ct(e, i.h, true)) * (Lt / 360), s = i.s / 100 * l, u = e.wheelDirection === "clockwise" ? -1 : 1;
    return {
      x: n + s * Math.cos(c) * u,
      y: o + s * Math.sin(c) * u
    };
  }
  function nt(e, r, i) {
    var t = se(e), n = t.cx, o = t.cy, l = St(e);
    r = n - r, i = o - i;
    var c = Ct(e, Math.atan2(-i, -r) * (360 / Lt)), s = Math.min(wt(r, i), l);
    return {
      h: Math.round(c),
      s: Math.round(100 / l * s)
    };
  }
  function Te(e) {
    var r = e.width, i = e.boxHeight, t = e.padding, n = e.handleRadius;
    return {
      width: r,
      height: i ?? r,
      radius: t + n
    };
  }
  function ot(e, r, i) {
    var t = Te(e), n = t.width, o = t.height, l = t.radius, c = l, s = n - l * 2, u = o - l * 2, h = (r - c) / s * 100, a = (i - c) / u * 100;
    return {
      s: Math.max(0, Math.min(h, 100)),
      v: Math.max(0, Math.min(100 - a, 100))
    };
  }
  function Ar(e, r) {
    var i = Te(e), t = i.width, n = i.height, o = i.radius, l = r.hsv, c = o, s = t - o * 2, u = n - o * 2;
    return {
      x: c + l.s / 100 * s,
      y: c + (u - l.v / 100 * u)
    };
  }
  function Mr(e, r) {
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
  var Le;
  function Ir(e) {
    Le || (Le = document.getElementsByTagName("base"));
    var r = window.navigator.userAgent, i = /^((?!chrome|android).)*safari/i.test(r), t = /iPhone|iPod|iPad/i.test(r), n = window.location;
    return (i || t) && Le.length > 0 ? n.protocol + "//" + n.host + n.pathname + n.search + e : e;
  }
  function kt(e, r, i, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n].x - r, l = t[n].y - i, c = Math.sqrt(o * o + l * l);
      if (c < e.handleRadius) return n;
    }
    return null;
  }
  function Pe(e) {
    return {
      boxSizing: "border-box",
      border: e.borderWidth + "px solid " + e.borderColor
    };
  }
  function ke(e, r, i) {
    return e + "-gradient(" + r + ", " + i.map(function(t) {
      var n = t[0], o = t[1];
      return o + " " + n + "%";
    }).join(",") + ")";
  }
  function O(e) {
    return typeof e == "string" ? e : e + "px";
  }
  var Rr = {
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
  }, lt = [
    "mousemove",
    "touchmove",
    "mouseup",
    "touchend"
  ], he = (function(e) {
    function r(i) {
      e.call(this, i), this.uid = (Math.random() + 1).toString(36).substring(5);
    }
    return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.render = function(t) {
      var n = this.handleEvent.bind(this), o = {
        onMouseDown: n,
        ontouchstart: n
      }, l = t.layoutDirection === "horizontal", c = t.margin === null ? t.sliderMargin : t.margin, s = {
        overflow: "visible",
        display: l ? "inline-block" : "block"
      };
      return t.index > 0 && (s[l ? "marginLeft" : "marginTop"] = c), x(ce, null, t.children(this.uid, o, s));
    }, r.prototype.handleEvent = function(t) {
      var n = this, o = this.props.onInput, l = this.base.getBoundingClientRect();
      t.preventDefault();
      var c = t.touches ? t.changedTouches[0] : t, s = c.clientX - l.left, u = c.clientY - l.top;
      switch (t.type) {
        case "mousedown":
        case "touchstart":
          var h = o(s, u, 0);
          h !== false && lt.forEach(function(a) {
            document.addEventListener(a, n, {
              passive: false
            });
          });
          break;
        case "mousemove":
        case "touchmove":
          o(s, u, 1);
          break;
        case "mouseup":
        case "touchend":
          o(s, u, 2), lt.forEach(function(a) {
            document.removeEventListener(a, n, {
              passive: false
            });
          });
          break;
      }
    }, r;
  })(Q);
  function $(e) {
    var r = e.r, i = e.url, t = r, n = r;
    return x("svg", {
      className: "IroHandle IroHandle--" + e.index + " " + (e.isActive ? "IroHandle--isActive" : ""),
      style: {
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0);",
        transform: "translate(" + O(e.x) + ", " + O(e.y) + ")",
        willChange: "transform",
        top: O(-r),
        left: O(-r),
        width: O(r * 2),
        height: O(r * 2),
        position: "absolute",
        overflow: "visible"
      }
    }, i && x("use", Object.assign({
      xlinkHref: Ir(i)
    }, e.props)), !i && x("circle", {
      cx: t,
      cy: n,
      r,
      fill: "none",
      "stroke-width": 2,
      stroke: "#000"
    }), !i && x("circle", {
      cx: t,
      cy: n,
      r: r - 2,
      fill: e.fill,
      "stroke-width": 2,
      stroke: "#fff"
    }));
  }
  $.defaultProps = {
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
  function le(e) {
    var r = e.activeIndex, i = r !== void 0 && r < e.colors.length ? e.colors[r] : e.color, t = je(e), n = t.width, o = t.height, l = t.radius, c = Sr(e, i), s = Cr(e, i);
    function u(h, a, f) {
      var g = wr(e, h, a);
      e.parent.inputActive = true, i[e.sliderType] = g, e.onInput(f, e.id);
    }
    return x(he, Object.assign({}, e, {
      onInput: u
    }), function(h, a, f) {
      return x("div", Object.assign({}, a, {
        className: "IroSlider",
        style: Object.assign({}, {
          position: "relative",
          width: O(n),
          height: O(o),
          borderRadius: O(l),
          background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
          backgroundSize: "8px 8px"
        }, f)
      }), x("div", {
        className: "IroSliderGradient",
        style: Object.assign({}, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: O(l),
          background: ke("linear", e.layoutDirection === "horizontal" ? "to top" : "to right", s)
        }, Pe(e))
      }), x($, {
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
  le.defaultProps = Object.assign({}, xr);
  function jr(e) {
    var r = Te(e), i = r.width, t = r.height, n = r.radius, o = e.colors, l = e.parent, c = e.activeIndex, s = c !== void 0 && c < e.colors.length ? e.colors[c] : e.color, u = Mr(e, s), h = o.map(function(f) {
      return Ar(e, f);
    });
    function a(f, g, y) {
      if (y === 0) {
        var p = kt(e, f, g, h);
        p !== null ? l.setActiveColor(p) : (l.inputActive = true, s.hsv = ot(e, f, g), e.onInput(y, e.id));
      } else y === 1 && (l.inputActive = true, s.hsv = ot(e, f, g));
      e.onInput(y, e.id);
    }
    return x(he, Object.assign({}, e, {
      onInput: a
    }), function(f, g, y) {
      return x("div", Object.assign({}, g, {
        className: "IroBox",
        style: Object.assign({}, {
          width: O(i),
          height: O(t),
          position: "relative"
        }, y)
      }), x("div", {
        className: "IroBox",
        style: Object.assign({}, {
          width: "100%",
          height: "100%",
          borderRadius: O(n)
        }, Pe(e), {
          background: ke("linear", "to bottom", u[1]) + "," + ke("linear", "to right", u[0])
        })
      }), o.filter(function(p) {
        return p !== s;
      }).map(function(p) {
        return x($, {
          isActive: false,
          index: p.index,
          fill: p.hslString,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: h[p.index].x,
          y: h[p.index].y
        });
      }), x($, {
        isActive: true,
        index: s.index,
        fill: s.hslString,
        r: e.activeHandleRadius || e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: h[s.index].x,
        y: h[s.index].y
      }));
    });
  }
  var Tr = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)", Pr = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
  function Ot(e) {
    var r = se(e), i = r.width, t = e.colors;
    e.borderWidth;
    var n = e.parent, o = e.color, l = o.hsv, c = t.map(function(h) {
      return Er(e, h);
    }), s = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      boxSizing: "border-box"
    };
    function u(h, a, f) {
      if (f === 0) {
        if (!Or(e, h, a)) return false;
        var g = kt(e, h, a, c);
        g !== null ? n.setActiveColor(g) : (n.inputActive = true, o.hsv = nt(e, h, a), e.onInput(f, e.id));
      } else f === 1 && (n.inputActive = true, o.hsv = nt(e, h, a));
      e.onInput(f, e.id);
    }
    return x(he, Object.assign({}, e, {
      onInput: u
    }), function(h, a, f) {
      return x("div", Object.assign({}, a, {
        className: "IroWheel",
        style: Object.assign({}, {
          width: O(i),
          height: O(i),
          position: "relative"
        }, f)
      }), x("div", {
        className: "IroWheelHue",
        style: Object.assign({}, s, {
          transform: "rotateZ(" + (e.wheelAngle + 90) + "deg)",
          background: e.wheelDirection === "clockwise" ? Tr : Pr
        })
      }), x("div", {
        className: "IroWheelSaturation",
        style: Object.assign({}, s, {
          background: "radial-gradient(circle closest-side, #fff, transparent)"
        })
      }), e.wheelLightness && x("div", {
        className: "IroWheelLightness",
        style: Object.assign({}, s, {
          background: "#000",
          opacity: 1 - l.v / 100
        })
      }), x("div", {
        className: "IroWheelBorder",
        style: Object.assign({}, s, Pe(e))
      }), t.filter(function(g) {
        return g !== o;
      }).map(function(g) {
        return x($, {
          isActive: false,
          index: g.index,
          fill: g.hslString,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: c[g.index].x,
          y: c[g.index].y
        });
      }), x($, {
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
  function Br(e) {
    var r = function(i, t) {
      var n, o = document.createElement("div");
      lr(x(e, Object.assign({}, {
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
  var Et = (function(e) {
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
        (l[c] || (l[c] = [])).push(n), o.deferredEvents[c] && (o.deferredEvents[c].forEach(function(s) {
          n.apply(null, s);
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
          component: Ot
        },
        {
          component: le
        }
      ], n.transparency && l.push({
        component: le,
        options: {
          sliderType: "alpha"
        }
      })), x("div", {
        class: "IroColorPicker",
        id: n.id,
        style: {
          display: n.display
        }
      }, l.map(function(c, s) {
        var u = c.component, h = c.options;
        return x(u, Object.assign({}, n, h, {
          ref: void 0,
          onInput: o.emitInputEvent.bind(o),
          parent: o,
          index: s
        }));
      }));
    }, r;
  })(Q);
  Et.defaultProps = Object.assign({}, Rr, {
    colors: [],
    display: "block",
    id: null,
    layout: "default",
    margin: null
  });
  var Hr = Br(Et), Oe;
  (function(e) {
    e.version = "5.5.2", e.Color = K, e.ColorPicker = Hr, (function(r) {
      r.h = x, r.ComponentBase = he, r.Handle = $, r.Slider = le, r.Wheel = Ot, r.Box = jr;
    })(e.ui || (e.ui = {}));
  })(Oe || (Oe = {}));
  var T = Oe;
  function Wr(e, r, i, t, n) {
    if (i === "cct") return [
      [
        {
          component: T.ui.Slider,
          options: {
            sliderType: "kelvin",
            sliderShape: "circle",
            minTemperature: t,
            maxTemperature: n
          }
        },
        {
          component: T.ui.Slider,
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
            component: T.ui.Wheel,
            options: {}
          },
          {
            component: T.ui.Slider,
            options: {
              sliderType: "value"
            }
          }
        ];
      case "box":
        return [
          {
            component: T.ui.Box,
            options: {
              boxLightness: false
            }
          },
          {
            component: T.ui.Slider,
            options: {
              sliderType: "hue"
            }
          }
        ];
      case "slider":
        return [
          {
            component: T.ui.Slider,
            options: {
              sliderType: "red"
            }
          },
          {
            component: T.ui.Slider,
            options: {
              sliderType: "green"
            }
          },
          {
            component: T.ui.Slider,
            options: {
              sliderType: "blue"
            }
          }
        ];
      default:
        return [];
    }
  }
  function zr(e, r, i) {
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
  function At(e, r, i, t) {
    if (!e.width || !e.height) return 12;
    if (r === "slider" && t !== "cct") return (e.width - 3 * (i || 1) * 28) / 2;
    const n = e.maxWidth, o = (i || 1) * 28, l = e.width - n - o;
    return Math.max(12, l);
  }
  function Nr(e, r, i, t, n, o) {
    e.current && (r.current = T.ColorPicker(e.current, i), r.current.on("color:init", (l) => {
      n && n(l, o);
    }), r.current.on("input:change", (l, c) => {
      t && t(l, c);
    }));
  }
  function Dr(e) {
    e.current = null;
  }
  function Fr(e, r) {
    !e || !r || e.resize(r);
  }
  function Vr(e, r) {
    e && e.setOptions(r);
  }
  function Gr(e, r) {
    typeof e == "function" ? e(r) : e && "current" in e && (e.current = r);
  }
  const Ee = d.forwardRef(({ dimensions: e, colorLightUIComponent: r, colorLightSliderWidth: i, colorLightBorderWidth: t, colorLightBorderColor: n, colorWheelLightness: o, colorLightType: l, colorLightCtMin: c, colorLightCtMax: s, colorLightGamut: u, cctComponentNumber: h, onInputChange: a, onColorInit: f }, g) => {
    const { theme: y } = d.useContext(Ae), p = d.useRef(null), L = d.useRef(null), m = d.useRef(f), _ = d.useRef(a);
    m.current = f, _.current = a;
    const w = d.useMemo(() => Wr(h, r, l, c, s), [
      h,
      r,
      l,
      c,
      s
    ]), b = d.useMemo(() => zr(e, r, l), [
      e,
      r,
      l
    ]), W = d.useMemo(() => At(e, r, i, l), [
      e,
      r,
      i,
      l
    ]);
    return d.useEffect(() => (Nr(p, L, {
      color: "#ffffff",
      width: 0,
      margin: 12,
      sliderSize: 28,
      display: "flex",
      padding: 6,
      handleRadius: 8,
      layoutDirection: "horizontal"
    }, (U, P) => {
      var _a;
      return (_a = _.current) == null ? void 0 : _a.call(_, U, P);
    }, (U, P) => {
      var _a;
      return (_a = m.current) == null ? void 0 : _a.call(m, U, P);
    }, h), Gr(g, L.current), () => Dr(L)), [
      g,
      h
    ]), d.useEffect(() => {
      Fr(L.current, b);
    }, [
      b
    ]), d.useEffect(() => {
      Vr(L.current, {
        layout: w,
        margin: W,
        wheelLightness: o,
        sliderSize: (i || 1) * 28,
        borderWidth: t || 0,
        borderColor: !n || typeof n == "string" && n.trim() === "" ? y.palette.primary.main : n
      });
    }, [
      y.palette.primary.main,
      w,
      W,
      i,
      t,
      n,
      o
    ]), v.jsx(D, {
      ref: p
    });
  });
  Ee.displayName = "Light2Picker";
  const $r = Vt(v.jsx("path", {
    d: "M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83"
  }), "PowerSettingsNew"), Ur = (e) => d.createElement("svg", {
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
  }, d.createElement("path", {
    d: "M77.37 19.32C46.83 3.21 19.03 14.69 9.01 30.38c-3.28 5.13-5.6 14.46-5.51 21.86c.18 15.23 8.61 32.2 26.8 49.32c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.27-4.13 14.33-12.65c-.12-1.12-1.08-3.15-2.53-4.04c-4.65-2.82-14.36-4.29-18.93-11.08c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.29-4.33 16.52-14.84c1.1-9.51-12.78-39.9-46.14-57.5zM89.84 71c-2.34 3.56-8.12 2.34-11.91-1.02c-3.79-3.36-4.28-8.96-1.82-11.16c2.5-2.23 7.2-1.72 10.99 1.64c3.78 3.37 4.57 7.74 2.74 10.54z",
    fill: "#ac5810"
  }), d.createElement("path", {
    d: "M78.71 15.69C48.17-.42 20.3 12.04 10.28 27.73C.25 43.43 4.61 72.5 31.63 97.93c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.59-6.58 11.57-12.13c-2.77-3.83-12.7-6.72-18.69-15.64c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.65-5.39 15.37-15.13c-.29-9.57-11.63-39.6-44.99-57.21zm14.06 55.03c-2.85 3.08-8.92 2.24-13.56-1.86c-4.63-4.11-6.08-9.93-3.23-13c2.85-3.08 8.92-2.24 13.56 1.86c4.64 4.1 6.08 9.93 3.23 13z",
    fill: "#f2a259"
  }), d.createElement("path", {
    d: "M47.62 84.66c1.15-2.94 9.33-6.16 16.85-.81c2.11 1.5 4.75 5.32 4.48 10.12c-.88 15.68-26.61 4.22-21.33-9.31z",
    fill: "#eee"
  }), d.createElement("path", {
    d: "M23.73 58.07c2.63-4.2 9.02-4.68 14.61-1.05c4.98 3.23 9.14 11.18 3 16.38c-3.29 2.79-8.98 1.06-12.49-1.63c-4.26-3.25-7.95-9.18-5.12-13.7z",
    fill: "#2686c6"
  }), d.createElement("path", {
    d: "M57.67 21.42c.81-3.33 6.46-3.9 10.46-2.41c6.91 2.58 10.04 9.42 7.49 13.23c-3.73 5.57-11.86 3.66-14.94.47c-5.23-5.4-3.69-8.5-3.01-11.29z",
    fill: "#ffee58"
  }), d.createElement("path", {
    d: "M97.71 37.72c5.54 2.52 6.26 6.51 5.2 9.42c-.66 1.8-2.01 4.27-4.77 4.49c-4.67.38-5.32-3.48-8.65-4.54c-2.8-.89-3.94-4.72-2.84-7.29c1.02-2.37 4-5.3 11.06-2.08z",
    fill: "#7cb342"
  }), d.createElement("path", {
    d: "M66.97 96.96c-1.38 1.25-6.17 2.79-12.25-1.01c-2.06-1.29-4.03-3.16-5.14-5.96c-.87-2.2-.68-4.32-.29-5.26c1.12-2.71 2.83-3.21 2.83-3.21c-1.72-.12-4.97 2.16-5.51 5.15c-.17.94-1.38 6.82 6.41 12.15c6.71 4.6 16.63 4.17 15.98-5.09c-.3 1.14-1.15 2.44-2.03 3.23z",
    fill: "#b0b0b0"
  }), d.createElement("path", {
    d: "M44.26 65.72c-.19 3.57-4.37 5.45-6.7 5.46c-6.59.01-12.51-4.13-12.92-11.5c-.07-1.32.58-3.23.58-3.23c-.87.37-2.1 2.25-2.36 3.31c-1.54 6.36 4.87 13.77 11.62 15.27c3.42.76 7.73-.41 9.3-3.47c1.12-2.18.9-4.05.48-5.84z",
    fill: "#01579b"
  }), d.createElement("path", {
    d: "M67.32 32.72c-4.48-.51-6.96-3.44-7.61-4.11c-1.78-1.86-2.88-3.67-2.24-6.35c.2-.86.69-1.96 1.29-2.58c-.73.24-1.91 1.81-2.28 2.66c-.38.85-1.76 4.04 1.2 7.97c1.83 2.44 5.02 5.19 9.74 5.85c3.35.47 5.75-.73 7.75-2.68c1.36-1.33 1.96-4.33 1.15-5.88c.13 1.13-1.94 5.93-9 5.12z",
    fill: "#df7f14"
  }), d.createElement("path", {
    d: "M104.17 44.85c-.41-1.51-1.58-3.08-1.7-3.16c.51.98 1.52 3.92-.6 6.78c-1.07 1.44-4.29 3.21-8.09.13c-1.12-.91-2.02-1.81-4.04-2.55c-5.13-1.89-2.89-7.11-1.11-8.73c-1.4.73-2.67 2.04-3.2 4.04c-.74 2.79 1.09 5.71 3.87 7.11c3.16 1.59 4.18 4.66 8.51 4.66c.22 0 .45-.01.7-.03c2.92-.25 4.15-1.38 5.04-2.76c1.09-1.72 1.12-3.67.62-5.49z",
    fill: "#558b2f"
  }), d.createElement("path", {
    d: "M25.82 25.79c2.28-2.25 6.25-4.63 12.06-1.6c3.5 1.82 7.57 3.96 5.73 11.36c-1.14 4.59-7.82 7.02-13.4 1.91c-2.21-2.02-10.61-5.53-4.39-11.67z",
    fill: "#f44336"
  }), d.createElement("path", {
    d: "M44.94 34.56c.07-1.75-.83-3.88-1.14-4.6c.05 1.05.96 3.7-3.21 7.21c-1.45 1.22-4.08 2.15-6.95 1.02c-1.47-.58-3.58-3.01-5.09-3.62c-5.61-2.26-3.19-8.27-2.4-9.09c-1.27.89-2.35 2.31-2.75 4.38c-.52 2.71-.04 5.27 3.68 8.2c10.56 8.33 13.8 3.31 14.95 2.03c1.45-1.56 2.83-3.6 2.91-5.53z",
    fill: "#c62828"
  }), d.createElement("path", {
    d: "M65.74 19.36c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.51-1.1 4.28-2.44 2.22-3.41z",
    fill: "#ffffff"
  }), d.createElement("path", {
    d: "M34.76 24.46c-1.45-.96-6.08-.97-7.47 2.58c-.84 2.13.47 4.6 2.04 4.56c1.79-.04.93-2.15 2.42-3.49c1.88-1.69 5.04-2.31 3.01-3.65z",
    fill: "#ffffff"
  }), d.createElement("path", {
    d: "M34.07 56.5c-1.37-.87-5.43-1.21-7.11 1.97c-1.23 2.34.46 4.92 1.93 4.85c1.67-.08 1.11-2.74 2.18-3.34c1.63-.91 4.92-2.26 3-3.48z",
    fill: "#ffffff"
  }), d.createElement("path", {
    d: "M57.4 83.13c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.5-1.1 4.27-2.44 2.22-3.41z",
    fill: "#ffffff"
  }), d.createElement("path", {
    d: "M95.08 38.05c-1.32-.94-5.49-1.49-6.91 1.81c-.85 1.98.28 4.35 1.75 4.36c1.67.01 1.26-2.67 2.37-3.21c1.67-.81 4.64-1.64 2.79-2.96z",
    fill: "#ffffff"
  })), Y = (e, r, i) => {
    const t = r[e];
    if (typeof t != "string" || !t.trim()) return;
    const n = i(e), o = Number(n);
    return Number.isFinite(o) ? o : void 0;
  }, Xr = (e, r) => {
    if (e !== void 0) return Math.round(typeof r == "number" && r === 254 ? e / 254 * 100 : e);
  }, ie = (e, r, i, t) => {
    const n = Y(e, r, i);
    return Xr(n, t);
  };
  function Mt(e, r, i) {
    const t = Y("colorLightTemperatureOid", r, i) ?? 2e3;
    e.kelvin = t;
  }
  function ct(e, r, i) {
    var _a;
    const t = ie("colorLightBrightnessOid", r, i, (_a = r.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
    t !== void 0 && (e.value = t);
  }
  function J(e, r, i, t, n) {
    var _a, _b, _c;
    switch (r) {
      case "cct": {
        if (n === 1) Mt(e, t, i);
        else if (n === 2) {
          const o = ie("colorLightBrightnessOid", t, i, (_a = t.colorLightBrightnessOidObject) == null ? void 0 : _a.maxValue);
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
          const o = Y("colorLightHueOid", t, i), l = ie("colorLightSaturationOid", t, i, (_b = t.colorLightSaturationOidObject) == null ? void 0 : _b.maxValue), c = ie("colorLightBrightnessOid", t, i, (_c = t.colorLightBrightnessOidObject) == null ? void 0 : _c.maxValue);
          o !== void 0 && (e.hue = o), l !== void 0 && (e.saturation = l), c !== void 0 && (e.value = c);
        }
        break;
      }
    }
  }
  const Kr = (e, r) => !e || !r ? true : !!r[e], Yr = (e) => e === "kelvin" ? 2e3 : e === "hexString" ? "#ffffff" : 0, we = (e, r) => {
    const i = r.value;
    r.hexString = e.hexString, r.value = i;
  }, Qr = (e) => v.jsx(ut, {
    component: Ur,
    viewBox: "0 0 128 128",
    ...e
  }), qr = (e) => v.jsxs(ut, {
    viewBox: "0 0 512 512",
    ...e,
    children: [
      v.jsxs("defs", {
        children: [
          v.jsxs("linearGradient", {
            id: "cctGradient",
            x1: "0",
            y1: "0",
            x2: "0",
            y2: "1",
            children: [
              v.jsx("stop", {
                offset: "0%",
                stopColor: "#1E90FF"
              }),
              v.jsx("stop", {
                offset: "100%",
                stopColor: "#FF8C00"
              })
            ]
          }),
          v.jsxs("filter", {
            id: "insetShadow",
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%",
            children: [
              v.jsx("feOffset", {
                dx: "0",
                dy: "2"
              }),
              v.jsx("feGaussianBlur", {
                stdDeviation: "4",
                result: "offset-blur"
              }),
              v.jsx("feComposite", {
                operator: "out",
                in: "SourceGraphic",
                in2: "offset-blur",
                result: "inverse"
              }),
              v.jsx("feFlood", {
                floodColor: "#FFF176",
                floodOpacity: "0.4"
              }),
              v.jsx("feComposite", {
                in2: "inverse",
                operator: "in",
                result: "shadow"
              }),
              v.jsx("feComposite", {
                in: "shadow",
                in2: "SourceGraphic",
                operator: "over"
              })
            ]
          })
        ]
      }),
      v.jsx("circle", {
        cx: "256",
        cy: "256",
        r: "252",
        fill: "#FFF176"
      }),
      v.jsx("circle", {
        cx: "256",
        cy: "256",
        r: "240",
        fill: "url(#cctGradient)",
        filter: "url(#insetShadow)"
      }),
      v.jsx("g", {
        transform: "translate(256 280) scale(1.2) translate(-256 -256)",
        children: v.jsx("path", {
          d: "M192 200c0-35 29-64 64-64s64 29 64 64c0 23.1-12.2 43.5-30.6 55.3V288c0 8.8-7.2 16-16 16h-35c-8.8 0-16-7.2-16-16v-32.7C204.2 243.5 192 223.1 192 200zm56 136h16c4.4 0 8 3.6 8 8v16h-32v-16c0-4.4 3.6-8 8-8z",
          fill: "#FFF176",
          stroke: "#000000",
          strokeWidth: "4"
        })
      })
    ]
  });
  function Jr() {
    var _a;
    const [e, r] = d.useState(false), i = d.useContext(Ae), { widget: t, widget: { data: n }, values: o, getPropertyValue: l } = i, { data: c } = at(""), s = d.useRef(null), u = Gt(s.current, (n.colorLightSliderWidth || 1) * 28), h = d.useRef(null), a = d.useRef(null), f = d.useRef(e), g = d.useRef(t.data);
    g.current = t.data;
    const y = d.useRef(l);
    y.current = l;
    const [p, L] = d.useState(false), m = d.useRef(false), _ = d.useRef(false), w = n.colorLightType === "rgbcct" || n.colorLightType === "r/g/b/cct" || n.colorLightType === "h/s/v/cct", b = e && w ? "cct" : n.colorLightType, { value: W, updateValue: U } = j("colorLightSwitchOid"), { value: P, hasBackendChange: Be, updateValue: ue } = j("colorLightTemperatureOid"), { updateValue: Z, hasBackendChange: ee } = j("colorLightBrightnessOid"), { updateValue: de, hasBackendChange: He } = j("colorLightRgbHexOid"), { updateValue: fe, hasBackendChange: We } = j("colorLightRedOid"), { updateValue: ge, hasBackendChange: ze } = j("colorLightGreenOid"), { updateValue: ve, hasBackendChange: Ne } = j("colorLightBlueOid"), { updateValue: me, hasBackendChange: De } = j("colorLightHueOid"), { updateValue: be, hasBackendChange: Fe } = j("colorLightSaturationOid"), Rt = ((_a = t.data.colorLightSwitchOidObject) == null ? void 0 : _a.type) === "boolean", Ve = (C, k) => {
      J(C, b, l, t.data, k);
    }, Ge = d.useMemo(() => (C, k) => {
      const pe = (k == null ? void 0 : k.maxValue) === 254, te = Math.round(C);
      return pe ? Math.round(C / 100 * 254) : te;
    }, []), $e = d.useMemo(() => ({
      cct: [
        {
          colorProp: "kelvin",
          oidField: "colorLightTemperatureOid",
          setter: ue,
          cctComponent: 1
        },
        {
          colorProp: "value",
          oidField: "colorLightBrightnessOid",
          setter: Z,
          normalize: true,
          cctComponent: 2
        }
      ],
      rgb: [
        {
          colorProp: "hexString",
          oidField: "colorLightRgbHexOid",
          setter: de
        }
      ],
      rgbcct: [
        {
          colorProp: "hexString",
          oidField: "colorLightRgbHexOid",
          setter: de
        }
      ],
      "r/g/b": [
        {
          colorProp: "red",
          oidField: "colorLightRedOid",
          setter: fe
        },
        {
          colorProp: "green",
          oidField: "colorLightGreenOid",
          setter: ge
        },
        {
          colorProp: "blue",
          oidField: "colorLightBlueOid",
          setter: ve
        }
      ],
      "r/g/b/cct": [
        {
          colorProp: "red",
          oidField: "colorLightRedOid",
          setter: fe
        },
        {
          colorProp: "green",
          oidField: "colorLightGreenOid",
          setter: ge
        },
        {
          colorProp: "blue",
          oidField: "colorLightBlueOid",
          setter: ve
        }
      ],
      "h/s/v": [
        {
          colorProp: "hue",
          oidField: "colorLightHueOid",
          setter: me,
          changeKey: "h"
        },
        {
          colorProp: "saturation",
          oidField: "colorLightSaturationOid",
          setter: be,
          normalize: true,
          changeKey: "s"
        },
        {
          colorProp: "value",
          oidField: "colorLightBrightnessOid",
          setter: Z,
          normalize: true,
          changeKey: "v"
        }
      ],
      "h/s/v/cct": [
        {
          colorProp: "hue",
          oidField: "colorLightHueOid",
          setter: me,
          changeKey: "h"
        },
        {
          colorProp: "saturation",
          oidField: "colorLightSaturationOid",
          setter: be,
          normalize: true,
          changeKey: "s"
        },
        {
          colorProp: "value",
          oidField: "colorLightBrightnessOid",
          setter: Z,
          normalize: true,
          changeKey: "v"
        }
      ]
    }), [
      ue,
      Z,
      de,
      fe,
      ge,
      ve,
      me,
      be
    ]), Ue = d.useMemo(() => (C, k, pe) => {
      if (!(!b || _.current || m.current)) {
        _.current = true;
        try {
          const te = $e[b];
          if (!te) return;
          te.forEach((_e) => {
            const { colorProp: Ke, oidField: Tt, setter: Pt, normalize: Bt, cctComponent: Ye, changeKey: Ht } = _e;
            if (Ye !== void 0 && k !== Ye || !Kr(Ht, pe)) return;
            const Wt = `${Tt}Object`, Qe = t.data[Wt];
            if (!Qe) return;
            let R = C[Ke];
            Bt && typeof R == "number" ? R = Ge(R, Qe) : typeof R == "number" && (R = Math.round(R)), R == null && (R = Yr(Ke)), Pt(R);
          }), k === 1 && L((_e) => !_e);
        } finally {
          Promise.resolve().then(() => {
            _.current = false;
          });
        }
      }
    }, [
      b,
      $e,
      t,
      Ge,
      _
    ]), jt = d.useMemo(() => At(u, n.colorLightUIComponent, n.colorLightSliderWidth, b), [
      u,
      n.colorLightUIComponent,
      n.colorLightSliderWidth,
      b
    ]), Xe = d.useMemo(() => ({
      dimensions: u,
      colorLightGamut: n.colorLightGamut,
      colorWheelLightness: n.colorWheelLightness,
      colorLightUIComponent: n.colorLightUIComponent,
      colorLightSliderWidth: n.colorLightSliderWidth,
      colorLightBorderWidth: n.colorLightBorderWidth,
      colorLightBorderColor: n.colorLightBorderColor,
      colorLightType: b,
      colorLightCtMin: n.colorLightCtMin,
      colorLightCtMax: n.colorLightCtMax
    }), [
      u,
      n.colorLightGamut,
      n.colorWheelLightness,
      n.colorLightUIComponent,
      n.colorLightSliderWidth,
      n.colorLightBorderWidth,
      n.colorLightBorderColor,
      n.colorLightCtMin,
      n.colorLightCtMax,
      b
    ]);
    return d.useEffect(() => {
      if (b !== "cct" || !h.current || !a.current) return;
      const C = h.current.color, k = a.current.color;
      if (p) {
        m.current = true;
        try {
          we(C, k);
        } finally {
          m.current = false;
        }
      }
    }, [
      b,
      p
    ]), d.useEffect(() => {
      if (b !== "cct" || !h.current || !a.current || !Be) return;
      const C = h.current.color, k = a.current.color;
      if (P != null) {
        m.current = true;
        try {
          C.kelvin = Number(P), we(C, k);
        } finally {
          m.current = false;
        }
      }
    }, [
      b,
      Be,
      P
    ]), d.useEffect(() => {
      if (!(!e || b !== "cct") && !(!ee || !a.current)) {
        m.current = true;
        try {
          ct(a.current.color, g.current, y.current);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      b,
      ee
    ]), d.useEffect(() => {
      if (!(e || ![
        "rgb",
        "rgbcct"
      ].includes(b || "")) && !(!He || !h.current)) {
        m.current = true;
        try {
          J(h.current.color, b, l, t.data);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      b,
      He,
      l,
      t.data
    ]), d.useEffect(() => {
      if (!(e || ![
        "r/g/b",
        "r/g/b/cct"
      ].includes(b || "")) && !(!We && !ze && !Ne || !h.current)) {
        m.current = true;
        try {
          J(h.current.color, b, l, t.data);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      b,
      We,
      ze,
      Ne,
      l,
      t.data
    ]), d.useEffect(() => {
      if (!(e || ![
        "h/s/v",
        "h/s/v/cct"
      ].includes(b || "")) && !(!De && !Fe && !ee || !h.current)) {
        m.current = true;
        try {
          J(h.current.color, b, l, t.data);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      b,
      De,
      Fe,
      ee,
      l,
      t.data
    ]), d.useEffect(() => {
      if (!e || !w || !h.current || !a.current) return;
      const C = h.current.color, k = a.current.color;
      m.current = true;
      try {
        Mt(C, g.current, y.current), f.current === false && Number(P) !== Number(C.kelvin) && ue(Number(C.kelvin)), we(C, k);
      } finally {
        m.current = false;
      }
    }, [
      e,
      w
    ]), d.useEffect(() => {
      !f.current || e || !w || h.current && ct(h.current.color, g.current, y.current);
    }, [
      e,
      w
    ]), d.useEffect(() => {
      if (!(f.current !== true || e || !w || !h.current)) {
        m.current = true;
        try {
          J(h.current.color, b, y.current, g.current);
        } finally {
          m.current = false;
        }
      }
    }, [
      e,
      w,
      b
    ]), d.useEffect(() => {
      f.current = e;
    }, [
      e
    ]), v.jsxs(st, {
      isValidType: Rt,
      data: c,
      children: [
        v.jsx(ht, {
          data: c,
          widget: t
        }),
        n.colorLightType !== "none" ? v.jsxs(D, {
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
            v.jsx(ye, {
              onClick: () => {
                U(!W);
              },
              children: v.jsx($r, {
                sx: {
                  color: W ? "red" : "green",
                  width: "26px",
                  height: "26px"
                }
              })
            }),
            w && v.jsxs(D, {
              sx: {
                display: "inline-block"
              },
              children: [
                v.jsx(qe, {
                  orientation: "horizontal",
                  flexItem: true,
                  variant: "fullWidth"
                }),
                v.jsx(ye, {
                  onClick: () => r(false),
                  children: v.jsx(Qr, {
                    sx: {
                      width: "24px",
                      height: "24px"
                    }
                  })
                })
              ]
            }),
            w && v.jsx(D, {
              sx: {
                display: "block"
              },
              children: v.jsx(ye, {
                onClick: () => r(true),
                children: v.jsx(qr, {
                  sx: {
                    width: "24px",
                    height: "24px"
                  }
                })
              })
            })
          ]
        }) : null,
        v.jsx(qe, {
          orientation: "vertical",
          flexItem: true,
          variant: "middle"
        }),
        v.jsx(D, {
          ref: s,
          sx: {
            minWidth: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: Number(n.colorLightPadding) || 0
          },
          children: Object.keys(o).length !== 0 && u.width !== void 0 && n.colorLightType !== "none" && v.jsxs(v.Fragment, {
            children: [
              v.jsx(Ee, {
                cctComponentNumber: 1,
                ref: h,
                onColorInit: Ve,
                onInputChange: (C, k) => Ue(C, 1, k),
                ...Xe
              }),
              b === "cct" && v.jsx(D, {
                sx: {
                  ml: `${jt}px`
                },
                children: v.jsx(Ee, {
                  cctComponentNumber: 2,
                  onColorInit: Ve,
                  onInputChange: (C, k) => Ue(C, 2, k),
                  ref: a,
                  ...Xe
                })
              })
            ]
          })
        })
      ]
    });
  }
  const Zr = Zt(Jr);
  It = class extends $t {
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
              ...Je({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "light",
            label: "group_light",
            fields: [
              ...Xt(),
              ...Qt()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Je({
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
      return Ut(this.wrapContent(v.jsx(Zr, {})), t);
    }
  };
});
export {
  __tla,
  It as default
};
