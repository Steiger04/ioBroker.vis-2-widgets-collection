import { z as Bs, f as Cr, g as Ae, a as Ie, A as pn, j as u, C as Vs, h as Kn, D as Ws, e as Se, E as Hr, u as je, s as ne, d as xe, P as gt, F as os, H as xn, T as I, r as Gs, J as Us, q as qs, K as Ys, w as _e, m as Re, L as Js, c as pe, N as dn, O as io, Q as Xs, R as sr, b as Ce, U as ss, W as Ks, X as Sr, Y as Qs, i as Yt, Z as lo, p as Zs, _ as ei, I as ve, $ as ti, S as nt, B as ni, n as L, a0 as me, G as b, a1 as ct, a2 as dt, a3 as ri, a4 as oi, a5 as si, __tla as __tla_0 } from "./usePopoverPositioning-C05Nu8XW.js";
import { D as jr, b as Et, q as ii, h as bt, C as qe, a as li, u as ai, l as Dn, c as ui, d as ci, f as di, e as ao, w as fi, __tla as __tla_1 } from "./useData-DFGCESxg.js";
import { v as y, a as pi, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as _n, __tla as __tla_3 } from "./Checkbox-CH6DP_-T.js";
import { C as pt, D as Br, a as Rr, A as zn, b as En, E as On, c as kn, d as qn, e as gi, __tla as __tla_4 } from "./ColorPickerField-N9d0Qmn-.js";
import { D as Vr, a as Wr, b as Gr, __tla as __tla_5 } from "./DialogTitle-D5KKnSme.js";
import { B as rt, __tla as __tla_6 } from "./Button-B6fhc4ye.js";
import { S as hi, __tla as __tla_7 } from "./Slider-mVupvoPJ.js";
import { F as Ot, __tla as __tla_8 } from "./FormControlLabel-DKFOMWlA.js";
import { S as gn, __tla as __tla_9 } from "./Switch-C9bANsqc.js";
import { g as mi, M as Z, __tla as __tla_10 } from "./MenuItem-HzYKHM0Q.js";
import { g as yi, S as Pe, __tla as __tla_11 } from "./Stack-CFGCK_Os.js";
import { T as is, a as Qn, __tla as __tla_12 } from "./ToggleButtonGroup-CqD6epk4.js";
import { C as Zn, __tla as __tla_13 } from "./Close-B4cPbZlV.js";
import { u as bi, __tla as __tla_14 } from "./useOidValue-3uKLz_2l.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_15 } from "./SwitchBase-XpmSqOOG.js";
import { __tla as __tla_16 } from "./listItemTextClasses-DV-semt9.js";
let Lr;
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_15;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_16;
    } catch {
    }
  })()
]).then(async () => {
  function vi(e, t, n, r, o) {
    const [s, i] = y.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
    return Cr(() => {
      if (!n) return;
      const l = n(e), a = () => {
        i(l.matches);
      };
      return a(), l.addEventListener("change", a), () => {
        l.removeEventListener("change", a);
      };
    }, [
      e,
      n
    ]), s;
  }
  const xi = {
    ...pi
  }, ls = xi.useSyncExternalStore;
  function _i(e, t, n, r, o) {
    const s = y.useCallback(() => t, [
      t
    ]), i = y.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: c } = r(e);
        return () => c;
      }
      return s;
    }, [
      s,
      e,
      r,
      o,
      n
    ]), [l, a] = y.useMemo(() => {
      if (n === null) return [
        s,
        () => () => {
        }
      ];
      const c = n(e);
      return [
        () => c.matches,
        (p) => (c.addEventListener("change", p), () => {
          c.removeEventListener("change", p);
        })
      ];
    }, [
      s,
      n,
      e
    ]);
    return ls(a, l, i);
  }
  function as(e = {}) {
    const { themeId: t } = e;
    return function(r, o = {}) {
      let s = Bs();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: l = false, matchMedia: a = i ? window.matchMedia : null, ssrMatchMedia: d = null, noSsr: c = false } = yi({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let p = typeof r == "function" ? r(s) : r;
      return p = p.replace(/^@media( ?)/m, ""), p.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (ls !== void 0 ? _i : vi)(p, l, a, d, c);
    };
  }
  as();
  var Ee = "top", Xe = "bottom", Ke = "right", Oe = "left", Ur = "auto", jn = [
    Ee,
    Xe,
    Ke,
    Oe
  ], Jt = "start", wn = "end", wi = "clippingParents", us = "viewport", en = "popper", Ci = "reference", uo = jn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Jt,
      t + "-" + wn
    ]);
  }, []), cs = [].concat(jn, [
    Ur
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Jt,
      t + "-" + wn
    ]);
  }, []), Si = "beforeRead", ji = "read", Ri = "afterRead", Mi = "beforeMain", $i = "main", Ai = "afterMain", Ii = "beforeWrite", Fi = "write", Pi = "afterWrite", Ti = [
    Si,
    ji,
    Ri,
    Mi,
    $i,
    Ai,
    Ii,
    Fi,
    Pi
  ];
  function st(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Be(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Nt(e) {
    var t = Be(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Je(e) {
    var t = Be(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function qr(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Be(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Di(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
      !Je(s) || !st(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(i) {
        var l = o[i];
        l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? "" : l);
      }));
    });
  }
  function zi(e) {
    var t = e.state, n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
      Object.keys(t.elements).forEach(function(r) {
        var o = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(a, d) {
          return a[d] = "", a;
        }, {});
        !Je(o) || !st(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(a) {
          o.removeAttribute(a);
        }));
      });
    };
  }
  const Ei = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Di,
    effect: zi,
    requires: [
      "computeStyles"
    ]
  };
  function ot(e) {
    return e.split("-")[0];
  }
  var kt = Math.max, er = Math.min, Xt = Math.round;
  function Mr() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function ds() {
    return !/^((?!chrome|android).)*safari/i.test(Mr());
  }
  function Kt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var r = e.getBoundingClientRect(), o = 1, s = 1;
    t && Je(e) && (o = e.offsetWidth > 0 && Xt(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Xt(r.height) / e.offsetHeight || 1);
    var i = Nt(e) ? Be(e) : window, l = i.visualViewport, a = !ds() && n, d = (r.left + (a && l ? l.offsetLeft : 0)) / o, c = (r.top + (a && l ? l.offsetTop : 0)) / s, p = r.width / o, g = r.height / s;
    return {
      width: p,
      height: g,
      top: c,
      right: d + p,
      bottom: c + g,
      left: d,
      x: d,
      y: c
    };
  }
  function Yr(e) {
    var t = Kt(e), n = e.offsetWidth, r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: r
    };
  }
  function fs(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && qr(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function ht(e) {
    return Be(e).getComputedStyle(e);
  }
  function Oi(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(st(e)) >= 0;
  }
  function Ct(e) {
    return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function ir(e) {
    return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (qr(e) ? e.host : null) || Ct(e);
  }
  function co(e) {
    return !Je(e) || ht(e).position === "fixed" ? null : e.offsetParent;
  }
  function ki(e) {
    var t = /firefox/i.test(Mr()), n = /Trident/i.test(Mr());
    if (n && Je(e)) {
      var r = ht(e);
      if (r.position === "fixed") return null;
    }
    var o = ir(e);
    for (qr(o) && (o = o.host); Je(o) && [
      "html",
      "body"
    ].indexOf(st(o)) < 0; ) {
      var s = ht(o);
      if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return o;
      o = o.parentNode;
    }
    return null;
  }
  function Rn(e) {
    for (var t = Be(e), n = co(e); n && Oi(n) && ht(n).position === "static"; ) n = co(n);
    return n && (st(n) === "html" || st(n) === "body" && ht(n).position === "static") ? t : n || ki(e) || t;
  }
  function Jr(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function hn(e, t, n) {
    return kt(e, er(t, n));
  }
  function Ni(e, t, n) {
    var r = hn(e, t, n);
    return r > n ? n : r;
  }
  function ps() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function gs(e) {
    return Object.assign({}, ps(), e);
  }
  function hs(e, t) {
    return t.reduce(function(n, r) {
      return n[r] = e, n;
    }, {});
  }
  var Li = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, gs(typeof t != "number" ? t : hs(t, jn));
  };
  function Hi(e) {
    var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = ot(n.placement), a = Jr(l), d = [
      Oe,
      Ke
    ].indexOf(l) >= 0, c = d ? "height" : "width";
    if (!(!s || !i)) {
      var p = Li(o.padding, n), g = Yr(s), f = a === "y" ? Ee : Oe, h = a === "y" ? Xe : Ke, m = n.rects.reference[c] + n.rects.reference[a] - i[a] - n.rects.popper[c], v = i[a] - n.rects.reference[a], x = Rn(s), _ = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, S = m / 2 - v / 2, j = p[f], M = _ - g[c] - p[h], w = _ / 2 - g[c] / 2 + S, $ = hn(j, w, M), R = a;
      n.modifiersData[r] = (t = {}, t[R] = $, t.centerOffset = $ - w, t);
    }
  }
  function Bi(e) {
    var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || fs(t.elements.popper, o) && (t.elements.arrow = o));
  }
  const Vi = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Hi,
    effect: Bi,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Qt(e) {
    return e.split("-")[1];
  }
  var Wi = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Gi(e, t) {
    var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
    return {
      x: Xt(n * o) / o || 0,
      y: Xt(r * o) / o || 0
    };
  }
  function fo(e) {
    var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, i = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, p = e.isFixed, g = i.x, f = g === void 0 ? 0 : g, h = i.y, m = h === void 0 ? 0 : h, v = typeof c == "function" ? c({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = v.x, m = v.y;
    var x = i.hasOwnProperty("x"), _ = i.hasOwnProperty("y"), S = Oe, j = Ee, M = window;
    if (d) {
      var w = Rn(n), $ = "clientHeight", R = "clientWidth";
      if (w === Be(n) && (w = Ct(n), ht(w).position !== "static" && l === "absolute" && ($ = "scrollHeight", R = "scrollWidth")), w = w, o === Ee || (o === Oe || o === Ke) && s === wn) {
        j = Xe;
        var P = p && w === M && M.visualViewport ? M.visualViewport.height : w[$];
        m -= P - r.height, m *= a ? 1 : -1;
      }
      if (o === Oe || (o === Ee || o === Xe) && s === wn) {
        S = Ke;
        var F = p && w === M && M.visualViewport ? M.visualViewport.width : w[R];
        f -= F - r.width, f *= a ? 1 : -1;
      }
    }
    var D = Object.assign({
      position: l
    }, d && Wi), J = c === true ? Gi({
      x: f,
      y: m
    }, Be(n)) : {
      x: f,
      y: m
    };
    if (f = J.x, m = J.y, a) {
      var B;
      return Object.assign({}, D, (B = {}, B[j] = _ ? "0" : "", B[S] = x ? "0" : "", B.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", B));
    }
    return Object.assign({}, D, (t = {}, t[j] = _ ? m + "px" : "", t[S] = x ? f + "px" : "", t.transform = "", t));
  }
  function Ui(e) {
    var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, s = n.adaptive, i = s === void 0 ? true : s, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: ot(t.placement),
      variation: Qt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fo(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: i,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fo(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const qi = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Ui,
    data: {}
  };
  var Nn = {
    passive: true
  };
  function Yi(e) {
    var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? true : o, i = r.resize, l = i === void 0 ? true : i, a = Be(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(c) {
      c.addEventListener("scroll", n.update, Nn);
    }), l && a.addEventListener("resize", n.update, Nn), function() {
      s && d.forEach(function(c) {
        c.removeEventListener("scroll", n.update, Nn);
      }), l && a.removeEventListener("resize", n.update, Nn);
    };
  }
  const Ji = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Yi,
    data: {}
  };
  var Xi = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Yn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Xi[t];
    });
  }
  var Ki = {
    start: "end",
    end: "start"
  };
  function po(e) {
    return e.replace(/start|end/g, function(t) {
      return Ki[t];
    });
  }
  function Xr(e) {
    var t = Be(e), n = t.pageXOffset, r = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: r
    };
  }
  function Kr(e) {
    return Kt(Ct(e)).left + Xr(e).scrollLeft;
  }
  function Qi(e, t) {
    var n = Be(e), r = Ct(e), o = n.visualViewport, s = r.clientWidth, i = r.clientHeight, l = 0, a = 0;
    if (o) {
      s = o.width, i = o.height;
      var d = ds();
      (d || !d && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
    }
    return {
      width: s,
      height: i,
      x: l + Kr(e),
      y: a
    };
  }
  function Zi(e) {
    var t, n = Ct(e), r = Xr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = kt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = kt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Kr(e), a = -r.scrollTop;
    return ht(o || n).direction === "rtl" && (l += kt(n.clientWidth, o ? o.clientWidth : 0) - s), {
      width: s,
      height: i,
      x: l,
      y: a
    };
  }
  function Qr(e) {
    var t = ht(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function ms(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Je(e) && Qr(e) ? e : ms(ir(e));
  }
  function mn(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = ms(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Be(r), i = o ? [
      s
    ].concat(s.visualViewport || [], Qr(r) ? r : []) : r, l = t.concat(i);
    return o ? l : l.concat(mn(ir(i)));
  }
  function $r(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function el(e, t) {
    var n = Kt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function go(e, t, n) {
    return t === us ? $r(Qi(e, n)) : Nt(t) ? el(t, n) : $r(Zi(Ct(e)));
  }
  function tl(e) {
    var t = mn(ir(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(ht(e).position) >= 0, r = n && Je(e) ? Rn(e) : e;
    return Nt(r) ? t.filter(function(o) {
      return Nt(o) && fs(o, r) && st(o) !== "body";
    }) : [];
  }
  function nl(e, t, n, r) {
    var o = t === "clippingParents" ? tl(e) : [].concat(t), s = [].concat(o, [
      n
    ]), i = s[0], l = s.reduce(function(a, d) {
      var c = go(e, d, r);
      return a.top = kt(c.top, a.top), a.right = er(c.right, a.right), a.bottom = er(c.bottom, a.bottom), a.left = kt(c.left, a.left), a;
    }, go(e, i, r));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function ys(e) {
    var t = e.reference, n = e.element, r = e.placement, o = r ? ot(r) : null, s = r ? Qt(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (o) {
      case Ee:
        a = {
          x: i,
          y: t.y - n.height
        };
        break;
      case Xe:
        a = {
          x: i,
          y: t.y + t.height
        };
        break;
      case Ke:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case Oe:
        a = {
          x: t.x - n.width,
          y: l
        };
        break;
      default:
        a = {
          x: t.x,
          y: t.y
        };
    }
    var d = o ? Jr(o) : null;
    if (d != null) {
      var c = d === "y" ? "height" : "width";
      switch (s) {
        case Jt:
          a[d] = a[d] - (t[c] / 2 - n[c] / 2);
          break;
        case wn:
          a[d] = a[d] + (t[c] / 2 - n[c] / 2);
          break;
      }
    }
    return a;
  }
  function Cn(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, a = l === void 0 ? wi : l, d = n.rootBoundary, c = d === void 0 ? us : d, p = n.elementContext, g = p === void 0 ? en : p, f = n.altBoundary, h = f === void 0 ? false : f, m = n.padding, v = m === void 0 ? 0 : m, x = gs(typeof v != "number" ? v : hs(v, jn)), _ = g === en ? Ci : en, S = e.rects.popper, j = e.elements[h ? _ : g], M = nl(Nt(j) ? j : j.contextElement || Ct(e.elements.popper), a, c, i), w = Kt(e.elements.reference), $ = ys({
      reference: w,
      element: S,
      placement: o
    }), R = $r(Object.assign({}, S, $)), P = g === en ? R : w, F = {
      top: M.top - P.top + x.top,
      bottom: P.bottom - M.bottom + x.bottom,
      left: M.left - P.left + x.left,
      right: P.right - M.right + x.right
    }, D = e.modifiersData.offset;
    if (g === en && D) {
      var J = D[o];
      Object.keys(F).forEach(function(B) {
        var ee = [
          Ke,
          Xe
        ].indexOf(B) >= 0 ? 1 : -1, Q = [
          Ee,
          Xe
        ].indexOf(B) >= 0 ? "y" : "x";
        F[B] += J[Q] * ee;
      });
    }
    return F;
  }
  function rl(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? cs : a, c = Qt(r), p = c ? l ? uo : uo.filter(function(h) {
      return Qt(h) === c;
    }) : jn, g = p.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = p);
    var f = g.reduce(function(h, m) {
      return h[m] = Cn(e, {
        placement: m,
        boundary: o,
        rootBoundary: s,
        padding: i
      })[ot(m)], h;
    }, {});
    return Object.keys(f).sort(function(h, m) {
      return f[h] - f[m];
    });
  }
  function ol(e) {
    if (ot(e) === Ur) return [];
    var t = Yn(e);
    return [
      po(e),
      t,
      po(t)
    ];
  }
  function sl(e) {
    var t = e.state, n = e.options, r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (var o = n.mainAxis, s = o === void 0 ? true : o, i = n.altAxis, l = i === void 0 ? true : i, a = n.fallbackPlacements, d = n.padding, c = n.boundary, p = n.rootBoundary, g = n.altBoundary, f = n.flipVariations, h = f === void 0 ? true : f, m = n.allowedAutoPlacements, v = t.options.placement, x = ot(v), _ = x === v, S = a || (_ || !h ? [
        Yn(v)
      ] : ol(v)), j = [
        v
      ].concat(S).reduce(function(ge, de) {
        return ge.concat(ot(de) === Ur ? rl(t, {
          placement: de,
          boundary: c,
          rootBoundary: p,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : de);
      }, []), M = t.rects.reference, w = t.rects.popper, $ = /* @__PURE__ */ new Map(), R = true, P = j[0], F = 0; F < j.length; F++) {
        var D = j[F], J = ot(D), B = Qt(D) === Jt, ee = [
          Ee,
          Xe
        ].indexOf(J) >= 0, Q = ee ? "width" : "height", G = Cn(t, {
          placement: D,
          boundary: c,
          rootBoundary: p,
          altBoundary: g,
          padding: d
        }), H = ee ? B ? Ke : Oe : B ? Xe : Ee;
        M[Q] > w[Q] && (H = Yn(H));
        var C = Yn(H), z = [];
        if (s && z.push(G[J] <= 0), l && z.push(G[H] <= 0, G[C] <= 0), z.every(function(ge) {
          return ge;
        })) {
          P = D, R = false;
          break;
        }
        $.set(D, z);
      }
      if (R) for (var E = h ? 3 : 1, N = function(de) {
        var se = j.find(function(we) {
          var ie = $.get(we);
          if (ie) return ie.slice(0, de).every(function(q) {
            return q;
          });
        });
        if (se) return P = se, "break";
      }, te = E; te > 0; te--) {
        var U = N(te);
        if (U === "break") break;
      }
      t.placement !== P && (t.modifiersData[r]._skip = true, t.placement = P, t.reset = true);
    }
  }
  const il = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: sl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function ho(e, t, n) {
    return n === void 0 && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function mo(e) {
    return [
      Ee,
      Ke,
      Xe,
      Oe
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function ll(e) {
    var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, i = Cn(t, {
      elementContext: "reference"
    }), l = Cn(t, {
      altBoundary: true
    }), a = ho(i, r), d = ho(l, o, s), c = mo(a), p = mo(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: d,
      isReferenceHidden: c,
      hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": p
    });
  }
  const al = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: ll
  };
  function ul(e, t, n) {
    var r = ot(e), o = [
      Oe,
      Ee
    ].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, i = s[0], l = s[1];
    return i = i || 0, l = (l || 0) * o, [
      Oe,
      Ke
    ].indexOf(r) >= 0 ? {
      x: l,
      y: i
    } : {
      x: i,
      y: l
    };
  }
  function cl(e) {
    var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [
      0,
      0
    ] : o, i = cs.reduce(function(c, p) {
      return c[p] = ul(p, t.rects, s), c;
    }, {}), l = i[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i;
  }
  const dl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: cl
  };
  function fl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = ys({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const pl = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: fl,
    data: {}
  };
  function gl(e) {
    return e === "x" ? "y" : "x";
  }
  function hl(e) {
    var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? true : o, i = n.altAxis, l = i === void 0 ? false : i, a = n.boundary, d = n.rootBoundary, c = n.altBoundary, p = n.padding, g = n.tether, f = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = Cn(t, {
      boundary: a,
      rootBoundary: d,
      padding: p,
      altBoundary: c
    }), x = ot(t.placement), _ = Qt(t.placement), S = !_, j = Jr(x), M = gl(j), w = t.modifiersData.popperOffsets, $ = t.rects.reference, R = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, F = typeof P == "number" ? {
      mainAxis: P,
      altAxis: P
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, P), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
      x: 0,
      y: 0
    };
    if (w) {
      if (s) {
        var B, ee = j === "y" ? Ee : Oe, Q = j === "y" ? Xe : Ke, G = j === "y" ? "height" : "width", H = w[j], C = H + v[ee], z = H - v[Q], E = f ? -R[G] / 2 : 0, N = _ === Jt ? $[G] : R[G], te = _ === Jt ? -R[G] : -$[G], U = t.elements.arrow, ge = f && U ? Yr(U) : {
          width: 0,
          height: 0
        }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ps(), se = de[ee], we = de[Q], ie = hn(0, $[G], ge[G]), q = S ? $[G] / 2 - E - ie - se - F.mainAxis : N - ie - se - F.mainAxis, it = S ? -$[G] / 2 + E + ie + we + F.mainAxis : te + ie + we + F.mainAxis, ke = t.elements.arrow && Rn(t.elements.arrow), oe = ke ? j === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, be = (B = D == null ? void 0 : D[j]) != null ? B : 0, he = H + q - be - oe, mt = H + it - be, St = hn(f ? er(C, he) : C, H, f ? kt(z, mt) : z);
        w[j] = St, J[j] = St - H;
      }
      if (l) {
        var lt, yt = j === "x" ? Ee : Oe, jt = j === "x" ? Xe : Ke, We = w[M], Ne = M === "y" ? "height" : "width", Ge = We + v[yt], Ue = We - v[jt], Rt = [
          Ee,
          Oe
        ].indexOf(x) !== -1, Mt = (lt = D == null ? void 0 : D[M]) != null ? lt : 0, $t = Rt ? Ge : We - $[Ne] - R[Ne] - Mt + F.altAxis, Ze = Rt ? We + $[Ne] + R[Ne] - Mt - F.altAxis : Ue, At = f && Rt ? Ni($t, We, Ze) : hn(f ? $t : Ge, We, f ? Ze : Ue);
        w[M] = At, J[M] = At - We;
      }
      t.modifiersData[r] = J;
    }
  }
  const ml = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: hl,
    requiresIfExists: [
      "offset"
    ]
  };
  function yl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function bl(e) {
    return e === Be(e) || !Je(e) ? Xr(e) : yl(e);
  }
  function vl(e) {
    var t = e.getBoundingClientRect(), n = Xt(t.width) / e.offsetWidth || 1, r = Xt(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function xl(e, t, n) {
    n === void 0 && (n = false);
    var r = Je(t), o = Je(t) && vl(t), s = Ct(t), i = Kt(e, o, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (r || !r && !n) && ((st(t) !== "body" || Qr(s)) && (l = bl(t)), Je(t) ? (a = Kt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : s && (a.x = Kr(s))), {
      x: i.left + l.scrollLeft - a.x,
      y: i.top + l.scrollTop - a.y,
      width: i.width,
      height: i.height
    };
  }
  function _l(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
    e.forEach(function(s) {
      t.set(s.name, s);
    });
    function o(s) {
      n.add(s.name);
      var i = [].concat(s.requires || [], s.requiresIfExists || []);
      i.forEach(function(l) {
        if (!n.has(l)) {
          var a = t.get(l);
          a && o(a);
        }
      }), r.push(s);
    }
    return e.forEach(function(s) {
      n.has(s.name) || o(s);
    }), r;
  }
  function wl(e) {
    var t = _l(e);
    return Ti.reduce(function(n, r) {
      return n.concat(t.filter(function(o) {
        return o.phase === r;
      }));
    }, []);
  }
  function Cl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Sl(e) {
    var t = e.reduce(function(n, r) {
      var o = n[r.name];
      return n[r.name] = o ? Object.assign({}, o, r, {
        options: Object.assign({}, o.options, r.options),
        data: Object.assign({}, o.data, r.data)
      }) : r, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var yo = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function bo() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function jl(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? yo : o;
    return function(l, a, d) {
      d === void 0 && (d = s);
      var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, yo, s),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, p = [], g = false, f = {
        state: c,
        setOptions: function(x) {
          var _ = typeof x == "function" ? x(c.options) : x;
          m(), c.options = Object.assign({}, s, c.options, _), c.scrollParents = {
            reference: Nt(l) ? mn(l) : l.contextElement ? mn(l.contextElement) : [],
            popper: mn(a)
          };
          var S = wl(Sl([].concat(r, c.options.modifiers)));
          return c.orderedModifiers = S.filter(function(j) {
            return j.enabled;
          }), h(), f.update();
        },
        forceUpdate: function() {
          if (!g) {
            var x = c.elements, _ = x.reference, S = x.popper;
            if (bo(_, S)) {
              c.rects = {
                reference: xl(_, Rn(S), c.options.strategy === "fixed"),
                popper: Yr(S)
              }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(F) {
                return c.modifiersData[F.name] = Object.assign({}, F.data);
              });
              for (var j = 0; j < c.orderedModifiers.length; j++) {
                if (c.reset === true) {
                  c.reset = false, j = -1;
                  continue;
                }
                var M = c.orderedModifiers[j], w = M.fn, $ = M.options, R = $ === void 0 ? {} : $, P = M.name;
                typeof w == "function" && (c = w({
                  state: c,
                  options: R,
                  name: P,
                  instance: f
                }) || c);
              }
            }
          }
        },
        update: Cl(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(c);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!bo(l, a)) return f;
      f.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        c.orderedModifiers.forEach(function(v) {
          var x = v.name, _ = v.options, S = _ === void 0 ? {} : _, j = v.effect;
          if (typeof j == "function") {
            var M = j({
              state: c,
              name: x,
              instance: f,
              options: S
            }), w = function() {
            };
            p.push(M || w);
          }
        });
      }
      function m() {
        p.forEach(function(v) {
          return v();
        }), p = [];
      }
      return f;
    };
  }
  var Rl = [
    Ji,
    pl,
    qi,
    Ei,
    dl,
    il,
    ml,
    Vi,
    al
  ], Ml = jl({
    defaultModifiers: Rl
  });
  function $l(e) {
    return Ae("MuiPopper", e);
  }
  Ie("MuiPopper", [
    "root"
  ]);
  function Al(e, t) {
    if (t === "ltr") return e;
    switch (e) {
      case "bottom-end":
        return "bottom-start";
      case "bottom-start":
        return "bottom-end";
      case "top-end":
        return "top-start";
      case "top-start":
        return "top-end";
      default:
        return e;
    }
  }
  function Ar(e) {
    return typeof e == "function" ? e() : e;
  }
  function Il(e) {
    return e.nodeType !== void 0;
  }
  const Fl = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, $l, t);
  }, Pl = {}, Tl = y.forwardRef(function(t, n) {
    const { anchorEl: r, children: o, direction: s, disablePortal: i, modifiers: l, open: a, placement: d, popperOptions: c, popperRef: p, slotProps: g = {}, slots: f = {}, TransitionProps: h, ownerState: m, ...v } = t, x = y.useRef(null), _ = Kn(x, n), S = y.useRef(null), j = Kn(S, p), M = y.useRef(j);
    Cr(() => {
      M.current = j;
    }, [
      j
    ]), y.useImperativeHandle(p, () => S.current, []);
    const w = Al(d, s), [$, R] = y.useState(w), [P, F] = y.useState(Ar(r));
    y.useEffect(() => {
      S.current && S.current.forceUpdate();
    }), y.useEffect(() => {
      r && F(Ar(r));
    }, [
      r
    ]), Cr(() => {
      if (!P || !a) return;
      const Q = (C) => {
        R(C.placement);
      };
      let G = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: i
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: i
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: C }) => {
            Q(C);
          }
        }
      ];
      l != null && (G = G.concat(l)), c && c.modifiers != null && (G = G.concat(c.modifiers));
      const H = Ml(P, x.current, {
        placement: w,
        ...c,
        modifiers: G
      });
      return M.current(H), () => {
        H.destroy(), M.current(null);
      };
    }, [
      P,
      i,
      l,
      a,
      c,
      w
    ]);
    const D = {
      placement: $
    };
    h !== null && (D.TransitionProps = h);
    const J = Fl(t), B = f.root ?? "div", ee = Ws({
      elementType: B,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: _
      },
      ownerState: t,
      className: J.root
    });
    return u.jsx(B, {
      ...ee,
      children: typeof o == "function" ? o(D) : o
    });
  }), Dl = y.forwardRef(function(t, n) {
    const { anchorEl: r, children: o, container: s, direction: i = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: c, placement: p = "bottom", popperOptions: g = Pl, popperRef: f, style: h, transition: m = false, slotProps: v = {}, slots: x = {}, ..._ } = t, [S, j] = y.useState(true), M = () => {
      j(false);
    }, w = () => {
      j(true);
    };
    if (!a && !c && (!m || S)) return null;
    let $;
    if (s) $ = s;
    else if (r) {
      const F = Ar(r);
      $ = F && Il(F) ? pn(F).body : pn(null).body;
    }
    const R = !c && a && (!m || S) ? "none" : void 0, P = m ? {
      in: c,
      onEnter: M,
      onExited: w
    } : void 0;
    return u.jsx(Vs, {
      disablePortal: l,
      container: $,
      children: u.jsx(Tl, {
        anchorEl: r,
        direction: i,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !S : c,
        placement: p,
        popperOptions: g,
        popperRef: f,
        slotProps: v,
        slots: x,
        ..._,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: R,
          ...h
        },
        TransitionProps: P,
        children: o
      })
    });
  }), zl = ne(Dl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), bs = y.forwardRef(function(t, n) {
    const r = Hr(), o = je({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: s, component: i, components: l, componentsProps: a, container: d, disablePortal: c, keepMounted: p, modifiers: g, open: f, placement: h, popperOptions: m, popperRef: v, transition: x, slots: _, slotProps: S, ...j } = o, M = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root), w = {
      anchorEl: s,
      container: d,
      disablePortal: c,
      keepMounted: p,
      modifiers: g,
      open: f,
      placement: h,
      popperOptions: m,
      popperRef: v,
      transition: x,
      ...j
    };
    return u.jsx(zl, {
      as: i,
      direction: r ? "rtl" : "ltr",
      slots: {
        root: M
      },
      slotProps: S ?? a,
      ...w,
      ref: n
    });
  });
  function El(e) {
    return Ae("MuiCard", e);
  }
  Ie("MuiCard", [
    "root"
  ]);
  const Ol = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, El, t);
  }, kl = ne(gt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Nl = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiCard"
    }), { className: o, raised: s = false, ...i } = r, l = {
      ...r,
      raised: s
    }, a = Ol(l);
    return u.jsx(kl, {
      className: xe(a.root, o),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function vo(e) {
    return e.substring(2).toLowerCase();
  }
  function Ll(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Hl(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: r = "onClick", onClickAway: o, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const c = Kn(os(t), l), p = xn((h) => {
      const m = d.current;
      d.current = false;
      const v = pn(l.current);
      if (!a.current || !l.current || "clientX" in h && Ll(h, v)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !v.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !m) && o(h);
    }), g = (h) => (m) => {
      d.current = true;
      const v = t.props[h];
      v && v(m);
    }, f = {
      ref: c
    };
    return s !== false && (f[s] = g(s)), y.useEffect(() => {
      if (s !== false) {
        const h = vo(s), m = pn(l.current), v = () => {
          i.current = true;
        };
        return m.addEventListener(h, p), m.addEventListener("touchmove", v), () => {
          m.removeEventListener(h, p), m.removeEventListener("touchmove", v);
        };
      }
    }, [
      p,
      s
    ]), r !== false && (f[r] = g(r)), y.useEffect(() => {
      if (r !== false) {
        const h = vo(r), m = pn(l.current);
        return m.addEventListener(h, p), () => {
          m.removeEventListener(h, p);
        };
      }
    }, [
      p,
      r
    ]), y.cloneElement(t, f);
  }
  function Bl(e) {
    return Ae("MuiDialogContentText", e);
  }
  Ie("MuiDialogContentText", [
    "root"
  ]);
  const Vl = (e) => {
    const { classes: t } = e, r = Se({
      root: [
        "root"
      ]
    }, Bl, t);
    return {
      ...t,
      ...r
    };
  }, Wl = ne(I, {
    shouldForwardProp: (e) => Gs(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Gl = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiDialogContentText"
    }), { children: o, className: s, ...i } = r, l = Vl(i);
    return u.jsx(Wl, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: i,
      className: xe(l.root, s),
      ...r,
      classes: l
    });
  }), Ul = as({
    themeId: Us
  });
  function ql(e) {
    return Ae("MuiInputAdornment", e);
  }
  const xo = Ie("MuiInputAdornment", [
    "root",
    "filled",
    "standard",
    "outlined",
    "positionStart",
    "positionEnd",
    "disablePointerEvents",
    "hiddenLabel",
    "sizeSmall"
  ]);
  var _o;
  const Yl = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${_e(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, Jl = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: r, position: o, size: s, variant: i } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        o && `position${_e(o)}`,
        i,
        r && "hiddenLabel",
        s && `size${_e(s)}`
      ]
    };
    return Se(l, ql, t);
  }, Xl = ne("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Yl
  })(Re(({ theme: e }) => ({
    display: "flex",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: (e.vars || e).palette.action.active,
    variants: [
      {
        props: {
          variant: "filled"
        },
        style: {
          [`&.${xo.positionStart}&:not(.${xo.hiddenLabel})`]: {
            marginTop: 16
          }
        }
      },
      {
        props: {
          position: "start"
        },
        style: {
          marginRight: 8
        }
      },
      {
        props: {
          position: "end"
        },
        style: {
          marginLeft: 8
        }
      },
      {
        props: {
          disablePointerEvents: true
        },
        style: {
          pointerEvents: "none"
        }
      }
    ]
  }))), vs = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiInputAdornment"
    }), { children: o, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: c, ...p } = r, g = qs() || {};
    let f = c;
    c && g.variant, g && !f && (f = g.variant);
    const h = {
      ...r,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: f
    }, m = Jl(h);
    return u.jsx(Ys.Provider, {
      value: null,
      children: u.jsx(Xl, {
        as: i,
        ownerState: h,
        className: xe(m.root, s),
        ref: n,
        ...p,
        children: typeof o == "string" && !a ? u.jsx(I, {
          color: "textSecondary",
          children: o
        }) : u.jsxs(y.Fragment, {
          children: [
            d === "start" ? _o || (_o = u.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            o
          ]
        })
      })
    });
  }), Kl = (e) => {
    const { alignItems: t, classes: n } = e;
    return Se({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, mi, n);
  }, Ql = ne("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(Re(({ theme: e }) => ({
    minWidth: 56,
    color: (e.vars || e).palette.action.active,
    flexShrink: 0,
    display: "inline-flex",
    variants: [
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          marginTop: 8
        }
      }
    ]
  }))), tn = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiListItemIcon"
    }), { className: o, ...s } = r, i = y.useContext(Js), l = {
      ...r,
      alignItems: i.alignItems
    }, a = Kl(l);
    return u.jsx(Ql, {
      className: xe(a.root, o),
      ownerState: l,
      ref: n,
      ...s
    });
  }), Zl = pe(u.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), ea = pe(u.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function ta(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: r, open: o, resumeHideDuration: s } = e, i = dn();
    y.useEffect(() => {
      if (!o) return;
      function x(_) {
        _.defaultPrevented || _.key === "Escape" && (r == null ? void 0 : r(_, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      o,
      r
    ]);
    const l = xn((x, _) => {
      r == null ? void 0 : r(x, _);
    }), a = xn((x) => {
      !r || x == null || i.start(x, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (o && a(t), i.clear), [
      o,
      t,
      a,
      i
    ]);
    const d = (x) => {
      r == null ? void 0 : r(x, "clickaway");
    }, c = i.clear, p = y.useCallback(() => {
      t != null && a(s ?? t * 0.5);
    }, [
      t,
      s,
      a
    ]), g = (x) => (_) => {
      const S = x.onBlur;
      S == null ? void 0 : S(_), p();
    }, f = (x) => (_) => {
      const S = x.onFocus;
      S == null ? void 0 : S(_), c();
    }, h = (x) => (_) => {
      const S = x.onMouseEnter;
      S == null ? void 0 : S(_), c();
    }, m = (x) => (_) => {
      const S = x.onMouseLeave;
      S == null ? void 0 : S(_), p();
    };
    return y.useEffect(() => {
      if (!n && o) return window.addEventListener("focus", p), window.addEventListener("blur", c), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", c);
      };
    }, [
      n,
      o,
      p,
      c
    ]), {
      getRootProps: (x = {}) => {
        const _ = {
          ...io(e),
          ...io(x)
        };
        return {
          role: "presentation",
          ...x,
          ..._,
          onBlur: g(_),
          onFocus: f(_),
          onMouseEnter: h(_),
          onMouseLeave: m(_)
        };
      },
      onClickAway: d
    };
  }
  function na(e) {
    return Ae("MuiSnackbarContent", e);
  }
  Ie("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const ra = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, na, t);
  }, oa = ne(gt, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Re(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Xs(e.palette.background.default, t);
    return {
      ...e.typography.body2,
      color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
      backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: (e.vars || e).shape.borderRadius,
      flexGrow: 1,
      [e.breakpoints.up("sm")]: {
        flexGrow: "initial",
        minWidth: 288
      }
    };
  })), sa = ne("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), ia = ne("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), la = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: o, className: s, message: i, role: l = "alert", ...a } = r, d = r, c = ra(d);
    return u.jsxs(oa, {
      role: l,
      square: true,
      elevation: 6,
      className: xe(c.root, s),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        u.jsx(sa, {
          className: c.message,
          ownerState: d,
          children: i
        }),
        o ? u.jsx(ia, {
          className: c.action,
          ownerState: d,
          children: o
        }) : null
      ]
    });
  });
  function aa(e) {
    return Ae("MuiSnackbar", e);
  }
  Ie("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const ua = (e) => {
    const { classes: t, anchorOrigin: n } = e, r = {
      root: [
        "root",
        `anchorOrigin${_e(n.vertical)}${_e(n.horizontal)}`
      ]
    };
    return Se(r, aa, t);
  }, ca = ne("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${_e(n.anchorOrigin.vertical)}${_e(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(Re(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top",
        style: {
          top: 8,
          [e.breakpoints.up("sm")]: {
            top: 24
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical !== "top",
        style: {
          bottom: 8,
          [e.breakpoints.up("sm")]: {
            bottom: 24
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "left",
        style: {
          justifyContent: "flex-start",
          [e.breakpoints.up("sm")]: {
            left: 24,
            right: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "right",
        style: {
          justifyContent: "flex-end",
          [e.breakpoints.up("sm")]: {
            right: 24,
            left: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "center",
        style: {
          [e.breakpoints.up("sm")]: {
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)"
          }
        }
      }
    ]
  }))), da = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiSnackbar"
    }), o = sr(), s = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: c, className: p, ClickAwayListenerProps: g, ContentProps: f, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: x, onFocus: _, onMouseEnter: S, onMouseLeave: j, open: M, resumeHideDuration: w, slots: $ = {}, slotProps: R = {}, TransitionComponent: P, transitionDuration: F = s, TransitionProps: { onEnter: D, onExited: J, ...B } = {}, ...ee } = r, Q = {
      ...r,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: P,
      transitionDuration: F
    }, G = ua(Q), { getRootProps: H, onClickAway: C } = ta({
      ...Q
    }), [z, E] = y.useState(true), N = (be) => {
      E(true), J && J(be);
    }, te = (be, he) => {
      E(false), D && D(be, he);
    }, U = {
      slots: {
        transition: P,
        ...$
      },
      slotProps: {
        content: f,
        clickAwayListener: g,
        transition: B,
        ...R
      }
    }, [ge, de] = Ce("root", {
      ref: n,
      className: [
        G.root,
        p
      ],
      elementType: ca,
      getSlotProps: H,
      externalForwardedProps: {
        ...U,
        ...ee
      },
      ownerState: Q
    }), [se, { ownerState: we, ...ie }] = Ce("clickAwayListener", {
      elementType: Hl,
      externalForwardedProps: U,
      getSlotProps: (be) => ({
        onClickAway: (...he) => {
          var _a2;
          (_a2 = be.onClickAway) == null ? void 0 : _a2.call(be, ...he), C(...he);
        }
      }),
      ownerState: Q
    }), [q, it] = Ce("content", {
      elementType: la,
      shouldForwardComponentProp: true,
      externalForwardedProps: U,
      additionalProps: {
        message: m,
        action: i
      },
      ownerState: Q
    }), [ke, oe] = Ce("transition", {
      elementType: ss,
      externalForwardedProps: U,
      getSlotProps: (be) => ({
        onEnter: (...he) => {
          var _a2;
          (_a2 = be.onEnter) == null ? void 0 : _a2.call(be, ...he), te(...he);
        },
        onExited: (...he) => {
          var _a2;
          (_a2 = be.onExited) == null ? void 0 : _a2.call(be, ...he), N(...he);
        }
      }),
      additionalProps: {
        appear: true,
        in: M,
        timeout: F,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: Q
    });
    return !M && z ? null : u.jsx(se, {
      ...ie,
      ...$.clickAwayListener && {
        ownerState: we
      },
      children: u.jsx(ge, {
        ...de,
        children: u.jsx(ke, {
          ...oe,
          children: c || u.jsx(q, {
            ...it
          })
        })
      })
    });
  });
  function fa(e) {
    return Ae("MuiTooltip", e);
  }
  const fe = Ie("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow"
  ]);
  function pa(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const ga = (e) => {
    const { classes: t, disableInteractive: n, arrow: r, touch: o, placement: s } = e, i = {
      popper: [
        "popper",
        !n && "popperInteractive",
        r && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        r && "tooltipArrow",
        o && "touch",
        `tooltipPlacement${_e(s.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return Se(i, fa, t);
  }, ha = ne(bs, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose
      ];
    }
  })(Re(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.tooltip,
    pointerEvents: "none",
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableInteractive,
        style: {
          pointerEvents: "auto"
        }
      },
      {
        props: ({ open: t }) => !t,
        style: {
          pointerEvents: "none"
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow,
        style: {
          [`&[data-popper-placement*="bottom"] .${fe.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${fe.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${fe.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${fe.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "0 0"
            }
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${fe.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${fe.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${fe.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${fe.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), ma = ne("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${_e(n.placement.split("-")[0])}`]
      ];
    }
  })(Re(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Yt(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${fe.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${fe.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${fe.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${fe.popper}[data-popper-placement*="bottom"] &`]: {
      transformOrigin: "center top",
      marginTop: "14px"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.arrow,
        style: {
          position: "relative",
          margin: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          padding: "8px 16px",
          fontSize: e.typography.pxToRem(14),
          lineHeight: `${pa(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${fe.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${fe.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${fe.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${fe.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${fe.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${fe.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${fe.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${fe.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${fe.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${fe.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), ya = ne("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(Re(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Yt(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)"
    }
  })));
  let Ln = false;
  const wo = new Qs();
  let nn = {
    x: 0,
    y: 0
  };
  function Hn(e, t) {
    return (n, ...r) => {
      t && t(n, ...r), e(n, ...r);
    };
  }
  const ze = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTooltip"
    }), { arrow: o = false, children: s, classes: i, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: c = false, disableHoverListener: p = false, disableInteractive: g = false, disableTouchListener: f = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: x = false, id: _, leaveDelay: S = 0, leaveTouchDelay: j = 1500, onClose: M, onOpen: w, open: $, placement: R = "bottom", PopperComponent: P, PopperProps: F = {}, slotProps: D = {}, slots: J = {}, title: B, TransitionComponent: ee, TransitionProps: Q, ...G } = r, H = y.isValidElement(s) ? s : u.jsx("span", {
      children: s
    }), C = sr(), z = Hr(), [E, N] = y.useState(), [te, U] = y.useState(null), ge = y.useRef(false), de = g || x, se = dn(), we = dn(), ie = dn(), q = dn(), [it, ke] = Ks({
      controlled: $,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let oe = it;
    const be = Sr(_), he = y.useRef(), mt = xn(() => {
      he.current !== void 0 && (document.body.style.WebkitUserSelect = he.current, he.current = void 0), q.clear();
    });
    y.useEffect(() => mt, [
      mt
    ]);
    const St = (V) => {
      wo.clear(), Ln = true, ke(true), w && !oe && w(V);
    }, lt = xn((V) => {
      wo.start(800 + S, () => {
        Ln = false;
      }), ke(false), M && oe && M(V), se.start(C.transitions.duration.shortest, () => {
        ge.current = false;
      });
    }), yt = (V) => {
      ge.current && V.type !== "touchstart" || (E && E.removeAttribute("title"), we.clear(), ie.clear(), h || Ln && m ? we.start(Ln ? m : h, () => {
        St(V);
      }) : St(V));
    }, jt = (V) => {
      we.clear(), ie.start(S, () => {
        lt(V);
      });
    }, [, We] = y.useState(false), Ne = (V) => {
      lo(V.target) || (We(false), jt(V));
    }, Ge = (V) => {
      E || N(V.currentTarget), lo(V.target) && (We(true), yt(V));
    }, Ue = (V) => {
      ge.current = true;
      const A = H.props;
      A.onTouchStart && A.onTouchStart(V);
    }, Rt = (V) => {
      Ue(V), ie.clear(), se.clear(), mt(), he.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", q.start(v, () => {
        document.body.style.WebkitUserSelect = he.current, yt(V);
      });
    }, Mt = (V) => {
      H.props.onTouchEnd && H.props.onTouchEnd(V), mt(), ie.start(j, () => {
        lt(V);
      });
    };
    y.useEffect(() => {
      if (!oe) return;
      function V(A) {
        A.key === "Escape" && lt(A);
      }
      return document.addEventListener("keydown", V), () => {
        document.removeEventListener("keydown", V);
      };
    }, [
      lt,
      oe
    ]);
    const $t = Kn(os(H), N, n);
    !B && B !== 0 && (oe = false);
    const Ze = y.useRef(), At = (V) => {
      const A = H.props;
      A.onMouseMove && A.onMouseMove(V), nn = {
        x: V.clientX,
        y: V.clientY
      }, Ze.current && Ze.current.update();
    }, It = {}, Zt = typeof B == "string";
    d ? (It.title = !oe && Zt && !p ? B : null, It["aria-describedby"] = oe ? be : null) : (It["aria-label"] = Zt ? B : null, It["aria-labelledby"] = oe && !Zt ? be : null);
    const Le = {
      ...It,
      ...G,
      ...H.props,
      className: xe(G.className, H.props.className),
      onTouchStart: Ue,
      ref: $t,
      ...x ? {
        onMouseMove: At
      } : {}
    }, Ft = {};
    f || (Le.onTouchStart = Rt, Le.onTouchEnd = Mt), p || (Le.onMouseOver = Hn(yt, Le.onMouseOver), Le.onMouseLeave = Hn(jt, Le.onMouseLeave), de || (Ft.onMouseOver = yt, Ft.onMouseLeave = jt)), c || (Le.onFocus = Hn(Ge, Le.onFocus), Le.onBlur = Hn(Ne, Le.onBlur), de || (Ft.onFocus = Ge, Ft.onBlur = Ne));
    const et = {
      ...r,
      isRtl: z,
      arrow: o,
      disableInteractive: de,
      placement: R,
      PopperComponentProp: P,
      touch: ge.current
    }, tt = typeof D.popper == "function" ? D.popper(et) : D.popper, Ht = y.useMemo(() => {
      var _a2, _b;
      let V = [
        {
          name: "arrow",
          enabled: !!te,
          options: {
            element: te,
            padding: 4
          }
        }
      ];
      return ((_a2 = F.popperOptions) == null ? void 0 : _a2.modifiers) && (V = V.concat(F.popperOptions.modifiers)), ((_b = tt == null ? void 0 : tt.popperOptions) == null ? void 0 : _b.modifiers) && (V = V.concat(tt.popperOptions.modifiers)), {
        ...F.popperOptions,
        ...tt == null ? void 0 : tt.popperOptions,
        modifiers: V
      };
    }, [
      te,
      F.popperOptions,
      tt == null ? void 0 : tt.popperOptions
    ]), Bt = ga(et), An = typeof D.transition == "function" ? D.transition(et) : D.transition, Pt = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? ee,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...J
      },
      slotProps: {
        arrow: D.arrow ?? a.arrow,
        popper: {
          ...F,
          ...tt ?? a.popper
        },
        tooltip: D.tooltip ?? a.tooltip,
        transition: {
          ...Q,
          ...An ?? a.transition
        }
      }
    }, [Vt, In] = Ce("popper", {
      elementType: ha,
      externalForwardedProps: Pt,
      ownerState: et,
      className: xe(Bt.popper, F == null ? void 0 : F.className)
    }), [cr, oo] = Ce("transition", {
      elementType: ss,
      externalForwardedProps: Pt,
      ownerState: et
    }), [Tt, dr] = Ce("tooltip", {
      elementType: ma,
      className: Bt.tooltip,
      externalForwardedProps: Pt,
      ownerState: et
    }), [Fn, Pn] = Ce("arrow", {
      elementType: ya,
      className: Bt.arrow,
      externalForwardedProps: Pt,
      ownerState: et,
      ref: U
    });
    return u.jsxs(y.Fragment, {
      children: [
        y.cloneElement(H, Le),
        u.jsx(Vt, {
          as: P ?? bs,
          placement: R,
          anchorEl: x ? {
            getBoundingClientRect: () => ({
              top: nn.y,
              left: nn.x,
              right: nn.x,
              bottom: nn.y,
              width: 0,
              height: 0
            })
          } : E,
          popperRef: Ze,
          open: E ? oe : false,
          id: be,
          transition: true,
          ...Ft,
          ...In,
          popperOptions: Ht,
          children: ({ TransitionProps: V }) => u.jsx(cr, {
            timeout: C.transitions.duration.shorter,
            ...V,
            ...oo,
            children: u.jsxs(Tt, {
              ...dr,
              children: [
                B,
                o ? u.jsx(Fn, {
                  ...Pn
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), xs = y.createContext();
  function ba(e) {
    return Ae("MuiTable", e);
  }
  Ie("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const va = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return Se({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, ba, t);
  }, xa = ne("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(Re(({ theme: e }) => ({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": {
      ...e.typography.body2,
      padding: e.spacing(2),
      color: (e.vars || e).palette.text.secondary,
      textAlign: "left",
      captionSide: "bottom"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          borderCollapse: "separate"
        }
      }
    ]
  }))), Co = "table", _a = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTable"
    }), { className: o, component: s = Co, padding: i = "normal", size: l = "medium", stickyHeader: a = false, ...d } = r, c = {
      ...r,
      component: s,
      padding: i,
      size: l,
      stickyHeader: a
    }, p = va(c), g = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: a
    }), [
      i,
      l,
      a
    ]);
    return u.jsx(xs.Provider, {
      value: g,
      children: u.jsx(xa, {
        as: s,
        role: s === Co ? null : "table",
        ref: n,
        className: xe(p.root, o),
        ownerState: c,
        ...d
      })
    });
  }), lr = y.createContext();
  function wa(e) {
    return Ae("MuiTableBody", e);
  }
  Ie("MuiTableBody", [
    "root"
  ]);
  const Ca = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, wa, t);
  }, Sa = ne("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), ja = {
    variant: "body"
  }, So = "tbody", Ra = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTableBody"
    }), { className: o, component: s = So, ...i } = r, l = {
      ...r,
      component: s
    }, a = Ca(l);
    return u.jsx(lr.Provider, {
      value: ja,
      children: u.jsx(Sa, {
        className: xe(a.root, o),
        as: s,
        ref: n,
        role: s === So ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Ma(e) {
    return Ae("MuiTableCell", e);
  }
  const $a = Ie("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader"
  ]), Aa = (e) => {
    const { classes: t, variant: n, align: r, padding: o, size: s, stickyHeader: i } = e, l = {
      root: [
        "root",
        n,
        i && "stickyHeader",
        r !== "inherit" && `align${_e(r)}`,
        o !== "normal" && `padding${_e(o)}`,
        `size${_e(s)}`
      ]
    };
    return Se(l, Ma, t);
  }, Ia = ne("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${_e(n.size)}`],
        n.padding !== "normal" && t[`padding${_e(n.padding)}`],
        n.align !== "inherit" && t[`align${_e(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(Re(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Zs(Yt(e.palette.divider, 1), 0.88) : ei(Yt(e.palette.divider, 1), 0.68)}`,
    textAlign: "left",
    padding: 16,
    variants: [
      {
        props: {
          variant: "head"
        },
        style: {
          color: (e.vars || e).palette.text.primary,
          lineHeight: e.typography.pxToRem(24),
          fontWeight: e.typography.fontWeightMedium
        }
      },
      {
        props: {
          variant: "body"
        },
        style: {
          color: (e.vars || e).palette.text.primary
        }
      },
      {
        props: {
          variant: "footer"
        },
        style: {
          color: (e.vars || e).palette.text.secondary,
          lineHeight: e.typography.pxToRem(21),
          fontSize: e.typography.pxToRem(12)
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          padding: "6px 16px",
          [`&.${$a.paddingCheckbox}`]: {
            width: 24,
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0
            }
          }
        }
      },
      {
        props: {
          padding: "checkbox"
        },
        style: {
          width: 48,
          padding: "0 0 0 4px"
        }
      },
      {
        props: {
          padding: "none"
        },
        style: {
          padding: 0
        }
      },
      {
        props: {
          align: "left"
        },
        style: {
          textAlign: "left"
        }
      },
      {
        props: {
          align: "center"
        },
        style: {
          textAlign: "center"
        }
      },
      {
        props: {
          align: "right"
        },
        style: {
          textAlign: "right",
          flexDirection: "row-reverse"
        }
      },
      {
        props: {
          align: "justify"
        },
        style: {
          textAlign: "justify"
        }
      },
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (e.vars || e).palette.background.default
        }
      }
    ]
  }))), xt = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTableCell"
    }), { align: o = "inherit", className: s, component: i, padding: l, scope: a, size: d, sortDirection: c, variant: p, ...g } = r, f = y.useContext(xs), h = y.useContext(lr), m = h && h.variant === "head";
    let v;
    i ? v = i : v = m ? "th" : "td";
    let x = a;
    v === "td" ? x = void 0 : !x && m && (x = "col");
    const _ = p || h && h.variant, S = {
      ...r,
      align: o,
      component: v,
      padding: l || (f && f.padding ? f.padding : "normal"),
      size: d || (f && f.size ? f.size : "medium"),
      sortDirection: c,
      stickyHeader: _ === "head" && f && f.stickyHeader,
      variant: _
    }, j = Aa(S);
    let M = null;
    return c && (M = c === "asc" ? "ascending" : "descending"), u.jsx(Ia, {
      as: v,
      ref: n,
      className: xe(j.root, s),
      "aria-sort": M,
      scope: x,
      ownerState: S,
      ...g
    });
  });
  function Fa(e) {
    return Ae("MuiTableContainer", e);
  }
  Ie("MuiTableContainer", [
    "root"
  ]);
  const Pa = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Fa, t);
  }, Ta = ne("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Da = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTableContainer"
    }), { className: o, component: s = "div", ...i } = r, l = {
      ...r,
      component: s
    }, a = Pa(l);
    return u.jsx(Ta, {
      ref: n,
      as: s,
      className: xe(a.root, o),
      ownerState: l,
      ...i
    });
  });
  function za(e) {
    return Ae("MuiTableHead", e);
  }
  Ie("MuiTableHead", [
    "root"
  ]);
  const Ea = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, za, t);
  }, Oa = ne("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), ka = {
    variant: "head"
  }, jo = "thead", Na = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTableHead"
    }), { className: o, component: s = jo, ...i } = r, l = {
      ...r,
      component: s
    }, a = Ea(l);
    return u.jsx(lr.Provider, {
      value: ka,
      children: u.jsx(Oa, {
        as: s,
        className: xe(a.root, o),
        ref: n,
        role: s === jo ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function La(e) {
    return Ae("MuiToolbar", e);
  }
  Ie("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Ha = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return Se({
      root: [
        "root",
        !n && "gutters",
        r
      ]
    }, La, t);
  }, Ba = ne("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disableGutters && t.gutters,
        t[n.variant]
      ];
    }
  })(Re(({ theme: e }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3)
          }
        }
      },
      {
        props: {
          variant: "dense"
        },
        style: {
          minHeight: 48
        }
      },
      {
        props: {
          variant: "regular"
        },
        style: e.mixins.toolbar
      }
    ]
  }))), _s = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiToolbar"
    }), { className: o, component: s = "div", disableGutters: i = false, variant: l = "regular", ...a } = r, d = {
      ...r,
      component: s,
      disableGutters: i,
      variant: l
    }, c = Ha(d);
    return u.jsx(Ba, {
      as: s,
      className: xe(c.root, o),
      ref: n,
      ownerState: d,
      ...a
    });
  }), Va = pe(u.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Wa = pe(u.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Ga = y.forwardRef(function(t, n) {
    const { backIconButtonProps: r, count: o, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: c, showFirstButton: p, showLastButton: g, slots: f = {}, slotProps: h = {}, ...m } = t, v = Hr(), x = (N) => {
      a(N, 0);
    }, _ = (N) => {
      a(N, d - 1);
    }, S = (N) => {
      a(N, d + 1);
    }, j = (N) => {
      a(N, Math.max(0, Math.ceil(o / c) - 1));
    }, M = f.firstButton ?? ve, w = f.lastButton ?? ve, $ = f.nextButton ?? ve, R = f.previousButton ?? ve, P = f.firstButtonIcon ?? Zl, F = f.lastButtonIcon ?? ea, D = f.nextButtonIcon ?? Wa, J = f.previousButtonIcon ?? Va, B = v ? w : M, ee = v ? $ : R, Q = v ? R : $, G = v ? M : w, H = v ? h.lastButton : h.firstButton, C = v ? h.nextButton : h.previousButton, z = v ? h.previousButton : h.nextButton, E = v ? h.firstButton : h.lastButton;
    return u.jsxs("div", {
      ref: n,
      ...m,
      children: [
        p && u.jsx(B, {
          onClick: x,
          disabled: s || d === 0,
          "aria-label": i("first", d),
          title: i("first", d),
          ...H,
          children: v ? u.jsx(F, {
            ...h.lastButtonIcon
          }) : u.jsx(P, {
            ...h.firstButtonIcon
          })
        }),
        u.jsx(ee, {
          onClick: _,
          disabled: s || d === 0,
          color: "inherit",
          "aria-label": i("previous", d),
          title: i("previous", d),
          ...C ?? r,
          children: v ? u.jsx(D, {
            ...h.nextButtonIcon
          }) : u.jsx(J, {
            ...h.previousButtonIcon
          })
        }),
        u.jsx(Q, {
          onClick: S,
          disabled: s || (o !== -1 ? d >= Math.ceil(o / c) - 1 : false),
          color: "inherit",
          "aria-label": i("next", d),
          title: i("next", d),
          ...z ?? l,
          children: v ? u.jsx(J, {
            ...h.previousButtonIcon
          }) : u.jsx(D, {
            ...h.nextButtonIcon
          })
        }),
        g && u.jsx(G, {
          onClick: j,
          disabled: s || d >= Math.ceil(o / c) - 1,
          "aria-label": i("last", d),
          title: i("last", d),
          ...E,
          children: v ? u.jsx(P, {
            ...h.firstButtonIcon
          }) : u.jsx(F, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Ua(e) {
    return Ae("MuiTablePagination", e);
  }
  const yn = Ie("MuiTablePagination", [
    "root",
    "toolbar",
    "spacer",
    "selectLabel",
    "selectRoot",
    "select",
    "selectIcon",
    "input",
    "menuItem",
    "displayedRows",
    "actions"
  ]);
  var Ro;
  const qa = ne(xt, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Re(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), Ya = ne(_s, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${yn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(Re(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${yn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), Ja = ne("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), Xa = ne("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(Re(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), Ka = ne(nt, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${yn.selectIcon}`]: t.selectIcon,
      [`& .${yn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${yn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), Qa = ne(Z, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), Za = ne("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(Re(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function eu({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function tu(e) {
    return `Go to ${e} page`;
  }
  const nu = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ],
      toolbar: [
        "toolbar"
      ],
      spacer: [
        "spacer"
      ],
      selectLabel: [
        "selectLabel"
      ],
      select: [
        "select"
      ],
      input: [
        "input"
      ],
      selectIcon: [
        "selectIcon"
      ],
      menuItem: [
        "menuItem"
      ],
      displayedRows: [
        "displayedRows"
      ],
      actions: [
        "actions"
      ]
    }, Ua, t);
  }, ru = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: o = Ga, backIconButtonProps: s, colSpan: i, component: l = xt, count: a, disabled: d = false, getItemAriaLabel: c = tu, labelDisplayedRows: p = eu, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: f, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: x, rowsPerPageOptions: _ = [
      10,
      25,
      50,
      100
    ], SelectProps: S = {}, showFirstButton: j = false, showLastButton: M = false, slotProps: w = {}, slots: $ = {}, ...R } = r, P = r, F = nu(P), D = (w == null ? void 0 : w.select) ?? S, J = D.native ? "option" : Qa;
    let B;
    (l === xt || l === "td") && (B = i || 1e3);
    const ee = Sr(D.id), Q = Sr(D.labelId), G = () => a === -1 ? (v + 1) * x : x === -1 ? a : Math.min(a, (v + 1) * x), H = {
      slots: $,
      slotProps: w
    }, [C, z] = Ce("root", {
      ref: n,
      className: F.root,
      elementType: qa,
      externalForwardedProps: {
        ...H,
        component: l,
        ...R
      },
      ownerState: P,
      additionalProps: {
        colSpan: B
      }
    }), [E, N] = Ce("toolbar", {
      className: F.toolbar,
      elementType: Ya,
      externalForwardedProps: H,
      ownerState: P
    }), [te, U] = Ce("spacer", {
      className: F.spacer,
      elementType: Ja,
      externalForwardedProps: H,
      ownerState: P
    }), [ge, de] = Ce("selectLabel", {
      className: F.selectLabel,
      elementType: Xa,
      externalForwardedProps: H,
      ownerState: P,
      additionalProps: {
        id: Q
      }
    }), [se, we] = Ce("select", {
      className: F.select,
      elementType: Ka,
      externalForwardedProps: H,
      ownerState: P
    }), [ie, q] = Ce("menuItem", {
      className: F.menuItem,
      elementType: J,
      externalForwardedProps: H,
      ownerState: P
    }), [it, ke] = Ce("displayedRows", {
      className: F.displayedRows,
      elementType: Za,
      externalForwardedProps: H,
      ownerState: P
    });
    return u.jsx(C, {
      ...z,
      children: u.jsxs(E, {
        ...N,
        children: [
          u.jsx(te, {
            ...U
          }),
          _.length > 1 && u.jsx(ge, {
            ...de,
            children: g
          }),
          _.length > 1 && u.jsx(se, {
            variant: "standard",
            ...!D.variant && {
              input: Ro || (Ro = u.jsx(ti, {}))
            },
            value: x,
            onChange: m,
            id: ee,
            labelId: Q,
            ...D,
            classes: {
              ...D.classes,
              root: xe(F.input, F.selectRoot, (D.classes || {}).root),
              select: xe(F.select, (D.classes || {}).select),
              icon: xe(F.selectIcon, (D.classes || {}).icon)
            },
            disabled: d,
            ...we,
            children: _.map((oe) => y.createElement(ie, {
              ...q,
              key: oe.label ? oe.label : oe,
              value: oe.value ? oe.value : oe
            }, oe.label ? oe.label : oe))
          }),
          u.jsx(it, {
            ...ke,
            children: p({
              from: a === 0 ? 0 : v * x + 1,
              to: G(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          u.jsx(o, {
            className: F.actions,
            backIconButtonProps: s,
            count: a,
            nextIconButtonProps: f,
            onPageChange: h,
            page: v,
            rowsPerPage: x,
            showFirstButton: j,
            showLastButton: M,
            slotProps: w.actions,
            slots: $.actions,
            getItemAriaLabel: c,
            disabled: d
          })
        ]
      })
    });
  });
  function ou(e) {
    return Ae("MuiTableRow", e);
  }
  const Mo = Ie("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), su = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: s } = e;
    return Se({
      root: [
        "root",
        n && "selected",
        r && "hover",
        o && "head",
        s && "footer"
      ]
    }, ou, t);
  }, iu = ne("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.head && t.head,
        n.footer && t.footer
      ];
    }
  })(Re(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${Mo.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${Mo.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Yt(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Yt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), $o = "tr", rn = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTableRow"
    }), { className: o, component: s = $o, hover: i = false, selected: l = false, ...a } = r, d = y.useContext(lr), c = {
      ...r,
      component: s,
      hover: i,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, p = su(c);
    return u.jsx(iu, {
      as: s,
      ref: n,
      className: xe(p.root, o),
      role: s === $o ? null : "row",
      ownerState: c,
      ...a
    });
  }), lu = pe(u.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function au(e) {
    return Ae("MuiTableSortLabel", e);
  }
  const fr = Ie("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), uu = (e) => {
    const { classes: t, direction: n, active: r } = e, o = {
      root: [
        "root",
        r && "active",
        `direction${_e(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${_e(n)}`
      ]
    };
    return Se(o, au, t);
  }, cu = ne(ni, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(Re(({ theme: e }) => ({
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "flex-start",
    flexDirection: "inherit",
    alignItems: "center",
    "&:focus": {
      color: (e.vars || e).palette.text.secondary
    },
    "&:hover": {
      color: (e.vars || e).palette.text.secondary,
      [`& .${fr.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${fr.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${fr.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), du = ne("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${_e(n.direction)}`]
      ];
    }
  })(Re(({ theme: e }) => ({
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: e.transitions.create([
      "opacity",
      "transform"
    ], {
      duration: e.transitions.duration.shorter
    }),
    userSelect: "none",
    variants: [
      {
        props: {
          direction: "desc"
        },
        style: {
          transform: "rotate(0deg)"
        }
      },
      {
        props: {
          direction: "asc"
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }))), fu = y.forwardRef(function(t, n) {
    const r = je({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: o = false, children: s, className: i, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = lu, slots: c = {}, slotProps: p = {}, ...g } = r, f = {
      ...r,
      active: o,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = uu(f), m = {
      slots: c,
      slotProps: p
    }, [v, x] = Ce("root", {
      elementType: cu,
      externalForwardedProps: m,
      ownerState: f,
      className: xe(h.root, i),
      ref: n
    }), [_, S] = Ce("icon", {
      elementType: du,
      externalForwardedProps: m,
      ownerState: f,
      className: h.icon
    });
    return u.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...x,
      ...g,
      children: [
        s,
        a && !o ? null : u.jsx(_, {
          as: d,
          ...S
        })
      ]
    });
  }), ws = pe(u.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Cs = pe(u.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Ss = pe(u.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), pu = pe(u.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), Ao = pe(u.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), gu = pe(u.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), hu = pe(u.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), mu = pe(u.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), Io = pe(u.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Fo = pe(u.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), yu = pe(u.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), bu = pe(u.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), fn = pe(u.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), js = pe(u.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), vu = pe(u.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), xu = pe(u.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Rs = pe(u.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), bn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, Po = "b64:";
  function _u(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
    return btoa(n);
  }
  function wu(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return new TextDecoder().decode(n);
  }
  function Ms(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(Po) ? wu(e.slice(Po.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Cu({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: s, loading: i }) {
    const [l, a] = y.useState(""), [d, c] = y.useState(null), [p, g] = y.useState(null), [f, h] = y.useState(false), m = y.useRef(0), v = y.useRef(/* @__PURE__ */ new Map()), x = !l, _ = y.useMemo(() => {
      if (!l) return e;
      const C = l.toLowerCase();
      return e.filter((z) => z.path.toLowerCase().includes(C) || z.headerName.toLowerCase().includes(C));
    }, [
      e,
      l
    ]), S = y.useMemo(() => e.filter((C) => C.visible).length, [
      e
    ]), j = y.useCallback((C) => {
      o(e.map((z) => z.path === C ? {
        ...z,
        visible: !z.visible
      } : z));
    }, [
      e,
      o
    ]), M = y.useCallback((C, z) => {
      C.stopPropagation(), j(z);
    }, [
      j
    ]), w = y.useCallback((C) => (z) => {
      z ? v.current.set(C, z) : v.current.delete(C);
    }, []), $ = y.useCallback((C) => {
      o(e.map((z) => ({
        ...z,
        visible: C
      })));
    }, [
      e,
      o
    ]), R = y.useCallback((C, z) => {
      C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", z), c(z);
    }, []), P = y.useCallback((C, z) => {
      C.preventDefault(), m.current += 1, z !== d && g(z);
    }, [
      d
    ]), F = y.useCallback((C) => {
      C.preventDefault(), m.current -= 1, m.current <= 0 && (m.current = 0, g(null));
    }, []), D = y.useCallback((C) => {
      C.preventDefault(), C.dataTransfer.dropEffect = "move";
    }, []), J = y.useCallback((C, z) => {
      C.preventDefault(), m.current = 0, g(null), c(null);
      const E = C.dataTransfer.getData("text/plain");
      if (!E || E === z) return;
      const N = [
        ...e
      ], te = N.findIndex((se) => se.path === E), U = N.findIndex((se) => se.path === z);
      if (te === -1 || U === -1) return;
      const [ge] = N.splice(te, 1), de = te < U ? U - 1 : U;
      N.splice(de, 0, ge), o(N);
    }, [
      e,
      o
    ]), B = y.useCallback(() => {
      m.current = 0, c(null), g(null);
    }, []), ee = y.useCallback(() => {
      o(e.map((C) => ({
        path: C.path,
        visible: true,
        headerName: C.path.split(".").pop() || C.path
      }))), h(false);
    }, [
      e,
      o
    ]), Q = y.useCallback(() => {
      h(true);
    }, []), G = y.useCallback(() => {
      h(false);
    }, []), H = y.useCallback((C, z, E) => {
      var _a2, _b;
      switch (C.key) {
        case "Enter":
        case " ":
          C.preventDefault(), r(z.path);
          break;
        case "ArrowDown":
          if (C.preventDefault(), E < _.length - 1) {
            const N = _[E + 1].path;
            r(N), (_a2 = v.current.get(N)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (C.preventDefault(), E > 0) {
            const N = _[E - 1].path;
            r(N), (_b = v.current.get(N)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          C.preventDefault(), j(z.path);
          break;
      }
    }, [
      _,
      r,
      j
    ]);
    return u.jsxs(L, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        u.jsxs(_s, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            u.jsx(me, {
              size: "small",
              placeholder: b.t("json_table_search_columns"),
              value: l,
              onChange: (C) => a(C.target.value),
              slotProps: {
                input: {
                  startAdornment: u.jsx(vs, {
                    position: "start",
                    children: u.jsx(js, {
                      fontSize: "small"
                    })
                  }),
                  "aria-label": b.t("json_table_search_columns")
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            u.jsx(ze, {
              title: b.t("json_table_refresh_columns"),
              children: u.jsx("span", {
                children: u.jsx(ve, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": b.t("json_table_refresh_columns"),
                  children: u.jsx(bu, {
                    fontSize: "small"
                  })
                })
              })
            }),
            u.jsx(ze, {
              title: b.t("json_table_show_all"),
              children: u.jsx(ve, {
                size: "small",
                onClick: () => $(true),
                "aria-label": b.t("json_table_show_all"),
                children: u.jsx(xu, {
                  fontSize: "small"
                })
              })
            }),
            u.jsx(ze, {
              title: b.t("json_table_hide_all"),
              children: u.jsx(ve, {
                size: "small",
                onClick: () => $(false),
                "aria-label": b.t("json_table_hide_all"),
                children: u.jsx(Rs, {
                  fontSize: "small"
                })
              })
            }),
            u.jsx(ze, {
              title: b.t("json_table_reset_all"),
              children: u.jsx(ve, {
                size: "small",
                onClick: Q,
                "aria-label": b.t("json_table_reset_all"),
                children: u.jsx(fn, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        u.jsx(L, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: _.length === 0 ? u.jsx(L, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: u.jsx(I, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? b.t("json_table_no_columns") : b.t("json_table_no_search_results")
            })
          }) : _.map((C, z) => {
            const E = t.find((U) => U.path === C.path), N = n === C.path, te = (E == null ? void 0 : E.type) || "string";
            return u.jsx(Nl, {
              ref: w(C.path),
              "data-column-path": C.path,
              onClick: () => r(C.path),
              onKeyDown: (U) => H(U, C, z),
              draggable: x,
              onDragStart: x ? (U) => R(U, C.path) : void 0,
              onDragEnter: x ? (U) => P(U, C.path) : void 0,
              onDragLeave: x ? F : void 0,
              onDragOver: x ? D : void 0,
              onDrop: x ? (U) => J(U, C.path) : void 0,
              onDragEnd: x ? B : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": N,
              "aria-label": `${C.headerName || C.path}, ${te}, ${C.visible ? b.t("json_table_visible") : b.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: x ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: N ? "primary.main" : "divider",
                backgroundColor: N ? "action.selected" : "background.paper",
                opacity: d === C.path ? 0.4 : C.visible ? 1 : 0.55,
                borderTop: p === C.path ? "3px solid" : void 0,
                borderTopColor: p === C.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: N ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: u.jsxs(L, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  x && u.jsx(gu, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  u.jsx(_n, {
                    checked: C.visible,
                    onClick: (U) => M(U, C.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${b.t("json_table_visible")}: ${C.headerName || C.path}`
                    }
                  }),
                  u.jsxs(L, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      u.jsx(I, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: C.path,
                        children: C.headerName || C.path
                      }),
                      C.headerName && C.headerName !== C.path && u.jsx(I, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          fontFamily: "monospace",
                          fontSize: "0.65rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block"
                        },
                        title: C.path,
                        children: C.path
                      })
                    ]
                  }),
                  u.jsx(pt, {
                    label: te,
                    size: "small",
                    sx: {
                      backgroundColor: bn[te] || bn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${b.t("json_table_type")}: ${te}`
                  })
                ]
              })
            }, C.path);
          })
        }),
        e.length > 0 && u.jsx(L, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: u.jsxs(I, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              S,
              " / ",
              e.length,
              " ",
              b.t("json_table_columns_visible")
            ]
          })
        }),
        u.jsxs(Vr, {
          open: f,
          onClose: G,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            u.jsx(Wr, {
              id: "reset-dialog-title",
              children: b.t("json_table_reset_all")
            }),
            u.jsx(Gr, {
              children: u.jsx(Gl, {
                id: "reset-dialog-description",
                children: b.t("json_table_reset_confirm_message")
              })
            }),
            u.jsxs(Br, {
              children: [
                u.jsx(rt, {
                  onClick: G,
                  color: "primary",
                  children: b.t("cancel")
                }),
                u.jsx(rt, {
                  onClick: ee,
                  color: "error",
                  variant: "contained",
                  autoFocus: true,
                  children: b.t("json_table_reset_all")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Jn(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const Su = 0, ju = 20, To = 2;
  function Ru(e) {
    if (e == null) return To;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(Su, Math.min(ju, Math.floor(t))) : To;
  }
  function $s(e, t = {}) {
    const { prefix: n = "", suffix: r = "", thousands: o = false } = t, s = Ru(t.decimals);
    let i = e.toFixed(s);
    if (o) {
      const [l, a] = i.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${n}${i}${r}`;
  }
  const Mu = [
    {
      label: "YYYY-MM-DD",
      value: "yyyy-MM-dd"
    },
    {
      label: "DD.MM.YYYY",
      value: "dd.MM.yyyy"
    },
    {
      label: "DD.MM.YYYY HH:mm",
      value: "dd.MM.yyyy HH:mm"
    },
    {
      label: "DD.MM.YYYY HH:mm:ss",
      value: "dd.MM.yyyy HH:mm:ss"
    },
    {
      label: "MM/DD/YYYY",
      value: "MM/dd/yyyy"
    },
    {
      label: "MM/DD/YYYY HH:mm",
      value: "MM/dd/yyyy HH:mm"
    },
    {
      label: "HH:mm:ss",
      value: "HH:mm:ss"
    },
    {
      label: "HH:mm",
      value: "HH:mm"
    },
    {
      label: "ISO-8601 (UTC)",
      value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    }
  ];
  function $u(e, t) {
    if (e == null) return "";
    if (typeof e == "number") {
      const o = new Date(e >= 1e11 ? e : e * 1e3);
      return isNaN(o.getTime()) ? "" : o.toISOString().slice(0, 10);
    }
    if (e instanceof Date) return isNaN(e.getTime()) ? "" : e.toISOString().slice(0, 10);
    if (typeof e != "string") return "";
    const n = e.trim();
    if (!n) return "";
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
      return o ? `${o[3]}-${o[2]}-${o[1]}` : "";
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
      return o ? `${o[3]}-${o[1]}-${o[2]}` : "";
    }
    const r = new Date(n);
    return isNaN(r.getTime()) ? "" : r.toISOString().slice(0, 10);
  }
  function Ir(e, t) {
    if (e == null || e === "") return null;
    if (e instanceof Date) {
      const r = e.getTime();
      return isNaN(r) ? null : r;
    }
    if (typeof e == "number") {
      if (!Number.isFinite(e)) return null;
      const r = e >= 1e11 ? e : e * 1e3;
      return isNaN(new Date(r).getTime()) ? null : r;
    }
    if (typeof e != "string") return null;
    const n = e.trim();
    if (!n) return null;
    try {
      if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
        const s = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (s) {
          const i = new Date(parseInt(s[3], 10), parseInt(s[2], 10) - 1, parseInt(s[1], 10), parseInt(s[4] ?? "0", 10), parseInt(s[5] ?? "0", 10), parseInt(s[6] ?? "0", 10));
          return isNaN(i.getTime()) ? null : i.getTime();
        }
      }
      if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
        const s = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (s) {
          const i = new Date(parseInt(s[3], 10), parseInt(s[1], 10) - 1, parseInt(s[2], 10), parseInt(s[4] ?? "0", 10), parseInt(s[5] ?? "0", 10), parseInt(s[6] ?? "0", 10));
          return isNaN(i.getTime()) ? null : i.getTime();
        }
      }
      const r = n.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (r) {
        const s = new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10));
        return isNaN(s.getTime()) ? null : s.getTime();
      }
      if (/^-?\d+$/.test(n)) {
        const s = parseInt(n, 10), i = s >= 1e11 ? s : s * 1e3;
        return isNaN(new Date(i).getTime()) ? null : i;
      }
      const o = new Date(n);
      return isNaN(o.getTime()) ? null : o.getTime();
    } catch {
      return null;
    }
  }
  function Zr(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let r;
      if (typeof e == "string") {
        const a = e.trim();
        if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
          const d = a.match(/^(\d{2})\.(\d{2})\.(\d{4})(.*)$/);
          r = d ? /* @__PURE__ */ new Date(`${d[3]}-${d[2]}-${d[1]}${d[4] ?? ""}`) : new Date(a);
        } else if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
          const d = a.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
          r = d ? /* @__PURE__ */ new Date(`${d[3]}-${d[1]}-${d[2]}${d[4] ?? ""}`) : new Date(a);
        } else if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
          const [d, c, p] = a.split("-").map(Number);
          r = new Date(d, c - 1, p);
        } else r = new Date(a);
      } else if (typeof e == "number") r = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) r = e;
      else return Jn(e);
      if (isNaN(r.getTime())) return Jn(e);
      const o = t || "yyyy-MM-dd", s = (a, d = 2) => String(a).padStart(d, "0"), i = {
        yyyy: String(r.getFullYear()),
        MM: s(r.getMonth() + 1),
        dd: s(r.getDate()),
        HH: s(r.getHours()),
        mm: s(r.getMinutes()),
        ss: s(r.getSeconds()),
        SSS: s(r.getMilliseconds(), 3)
      };
      if (o === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(o)) return r.toISOString();
      let l = o;
      for (const [a, d] of Object.entries(i).sort((c, p) => p[0].length - c[0].length)) l = l.replaceAll(a, d);
      return l;
    } catch {
      return Jn(e);
    }
  }
  function Fr(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Jn(e);
  }
  function As(e, t) {
    let n = t.stringTrim ? e.trim() : e;
    if (t.stringRegex && t.stringRegex.length <= 200) try {
      const i = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), l = n.match(i);
      l && (n = l[t.stringRegexGroup ?? 0] ?? n);
    } catch {
    }
    t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (s) => s.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
    const r = t.stringPrefix ?? "", o = t.stringSuffix ?? "";
    return r || o ? `${r}${n}${o}` : n;
  }
  function Au({ format: e, onChange: t, discoveredColumn: n }) {
    const r = y.useMemo(() => {
      if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
        const o = typeof n.max == "number" ? n.max : 0;
        return n.min + (o - n.min) * 0.75;
      }
      return 1234.567;
    }, [
      n
    ]);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_number_format")
        }),
        u.jsxs(L, {
          children: [
            u.jsxs(I, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                b.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            u.jsx(hi, {
              value: e.numberDecimals ?? 2,
              onChange: (o, s) => t({
                type: "number",
                numberDecimals: s
              }),
              min: 0,
              max: 10,
              marks: true,
              step: 1,
              valueLabelDisplay: "auto",
              size: "small"
            })
          ]
        }),
        u.jsx(me, {
          label: b.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (o) => t({
            type: "number",
            numberPrefix: o.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        u.jsx(me, {
          label: b.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (o) => t({
            type: "number",
            numberSuffix: o.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        u.jsx(Ot, {
          control: u.jsx(gn, {
            checked: e.numberThousandsSeparator || false,
            onChange: (o) => t({
              type: "number",
              numberThousandsSeparator: o.target.checked
            }),
            size: "small"
          }),
          label: u.jsx(I, {
            variant: "body2",
            children: b.t("json_table_number_thousands")
          })
        }),
        u.jsxs(gt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            u.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            u.jsxs(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                r,
                " \u2192",
                " ",
                $s(r, {
                  decimals: e.numberDecimals,
                  prefix: e.numberPrefix,
                  suffix: e.numberSuffix,
                  thousands: e.numberThousandsSeparator
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Iu({ format: e, detectedFormat: t, onChange: n }) {
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_date_format")
        }),
        t && u.jsx(me, {
          label: b.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: b.t("json_table_date_detected_hint")
        }),
        u.jsxs(ct, {
          fullWidth: true,
          size: "small",
          children: [
            u.jsx(dt, {
              children: b.t("json_table_date_output_format")
            }),
            u.jsx(nt, {
              label: b.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (r) => n({
                type: "date",
                dateFormat: r.target.value,
                dateInputFormat: t
              }),
              children: Mu.map((r) => u.jsx(Z, {
                value: r.value,
                children: r.label
              }, r.value))
            })
          ]
        }),
        u.jsxs(gt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            u.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            u.jsx(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: Zr(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function Fu({ format: e, onChange: t }) {
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_boolean_format")
        }),
        u.jsx(me, {
          label: b.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        u.jsx(me, {
          label: b.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        u.jsxs(gt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            u.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            u.jsxs(Pe, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                u.jsxs(I, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Fr(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                u.jsxs(I, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Fr(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Pu({ format: e, onChange: t }) {
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_string_format")
        }),
        u.jsxs(ct, {
          size: "small",
          fullWidth: true,
          children: [
            u.jsx(dt, {
              children: b.t("json_table_string_case")
            }),
            u.jsxs(nt, {
              label: b.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                u.jsx(Z, {
                  value: "none",
                  children: b.t("json_table_string_case_none")
                }),
                u.jsx(Z, {
                  value: "upper",
                  children: b.t("json_table_string_case_upper")
                }),
                u.jsx(Z, {
                  value: "lower",
                  children: b.t("json_table_string_case_lower")
                }),
                u.jsx(Z, {
                  value: "title",
                  children: b.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        u.jsxs(Pe, {
          direction: "row",
          spacing: 1,
          children: [
            u.jsx(me, {
              label: b.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            u.jsx(me, {
              label: b.t("json_table_string_suffix"),
              value: e.stringSuffix ?? "",
              onChange: (n) => t({
                type: "string",
                stringSuffix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            })
          ]
        }),
        u.jsx(Ot, {
          control: u.jsx(gn, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: b.t("json_table_string_trim")
        }),
        u.jsx(me, {
          label: b.t("json_table_string_max_length"),
          type: "number",
          value: e.stringMaxLength ?? "",
          onChange: (n) => t({
            type: "string",
            stringMaxLength: n.target.value ? parseInt(n.target.value, 10) : void 0
          }),
          size: "small",
          fullWidth: true,
          slotProps: {
            htmlInput: {
              min: 1
            }
          }
        }),
        u.jsx(me, {
          label: b.t("json_table_string_regex"),
          value: e.stringRegex ?? "",
          onChange: (n) => t({
            type: "string",
            stringRegex: n.target.value || void 0
          }),
          size: "small",
          fullWidth: true,
          placeholder: "e.g. (\\d+)"
        }),
        e.stringRegex && u.jsxs(Pe, {
          direction: "row",
          spacing: 1,
          children: [
            u.jsx(me, {
              label: b.t("json_table_string_regex_group"),
              type: "number",
              value: e.stringRegexGroup ?? 0,
              onChange: (n) => t({
                type: "string",
                stringRegexGroup: parseInt(n.target.value, 10) || 0
              }),
              size: "small",
              fullWidth: true,
              slotProps: {
                htmlInput: {
                  min: 0
                }
              }
            }),
            u.jsx(me, {
              label: b.t("json_table_string_regex_flags"),
              value: e.stringRegexFlags ?? "",
              onChange: (n) => t({
                type: "string",
                stringRegexFlags: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true,
              placeholder: "i, g, m \u2026"
            })
          ]
        }),
        u.jsx(jr, {}),
        u.jsxs(Pe, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            u.jsx(Ot, {
              control: u.jsx(gn, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: u.jsx(I, {
                variant: "body2",
                fontWeight: "bold",
                children: b.t("json_table_string_font_weight")
              })
            }),
            u.jsx(Ot, {
              control: u.jsx(gn, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: u.jsx(I, {
                variant: "body2",
                fontStyle: "italic",
                children: b.t("json_table_string_font_style")
              })
            })
          ]
        }),
        u.jsxs(Pe, {
          direction: "row",
          spacing: 1,
          children: [
            u.jsx(me, {
              label: b.t("json_table_string_font_size"),
              type: "number",
              value: e.stringFontSize ?? "",
              onChange: (n) => t({
                type: "string",
                stringFontSize: n.target.value ? parseInt(n.target.value, 10) : void 0
              }),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 8,
                  max: 72
                }
              },
              placeholder: "px"
            }),
            u.jsx(Rr, {
              label: b.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        u.jsxs(gt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            u.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            u.jsx(I, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace",
                fontWeight: e.stringFontWeight,
                fontStyle: e.stringFontStyle,
                ...e.stringFontSize && {
                  fontSize: `${e.stringFontSize}px`
                },
                ...e.stringTextColor && {
                  color: e.stringTextColor
                }
              },
              children: As("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function ae(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Tu(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function ft(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        ft(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        const o = e[n[r]];
        if (typeof o == "object" && o) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          ft(o, t - 1);
        }
      }
    }
    return e;
  }
  function Du(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+ae(e)) && t !== null) throw NaN;
    if (Number.isNaN(+ae(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function zu(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) await t(o, r++, e) && n.push(o);
    return n;
  }
  async function Eu(e, t) {
    let n = 0;
    for (const r of e) if (await t(r, n++, e)) return true;
    return false;
  }
  async function Ou(e, t) {
    let n = 0;
    for (const r of e) if (!await t(r, n++, e)) return false;
    return true;
  }
  async function ku(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) n.push(await t(o, r++, e));
    return n;
  }
  async function Nu(e, t, n, r = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const o = typeof n > "u" ? 1 : 0;
    let s = ft(o ? e[0] : n, r);
    for (let i = o; i < e.length; i++) s = ft(await t(s, e[i]), r);
    return s;
  }
  const tr = {
    filter: zu,
    some: Eu,
    every: Ou,
    map: ku,
    reduce: Nu
  }, K = /* @__PURE__ */ Symbol.for("json_logic_sync"), Fe = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Ye = /* @__PURE__ */ Symbol.for("json_logic_original"), Do = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Lt(e) {
    return typeof e == "function" ? e[K] === true : Array.isArray(e) ? e.every(Lt) : !(e && e.asyncMethod && !e.method);
  }
  function Is(e, t = true) {
    return e[K] = t, e;
  }
  function Sn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const pr = /* @__PURE__ */ new WeakMap();
  function zo(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (pr.has(e) || pr.set(e, Lu(e)), pr.get(e));
  }
  function Lu(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Hu(e, ...t) {
    let n = "";
    const r = this;
    for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), Lt(t[o]) || (r.asyncDetected = true), n += (Lt(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][Fe] < "u" ? n += t[o][Fe] : n += ue(t[o], r));
    return {
      [Fe]: n
    };
  }
  function Bu(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function nr(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => nr(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && nr(o, t, n);
    }
    return true;
  }
  function Pr(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => Pr(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const r = n[0], o = e[r];
      return Lt(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][K] == "function" && t.methods[r][K](e, {
        engine: t
      })) : Pr(o, t) : false;
    }
    return true;
  }
  function ue(e, t = {}) {
    const { notTraversed: n = [], async: r, processing: o = [], values: s = [], engine: i } = t;
    function l(c, p = false) {
      return Bu(c, p) ? JSON.stringify(c) : (s.push(c), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let c = "";
      for (let p = 0; p < e.length; p++) p > 0 && (c += ","), c += ue(e[p], t);
      return "[" + c + "]";
    }
    let a = false;
    function d(c) {
      return t.asyncDetected = t.asyncDetected || a, r && a ? `await ${c}` : c;
    }
    if (e && typeof e == "object") {
      const c = Object.keys(e), p = c[0];
      if (!p) return l(e);
      if (!i.methods[p] || c.length > 1) {
        if (i.isData(e, p)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: p
        };
      }
      if (!t.engine.disableInline && i.methods[p] && nr(e, i, t)) return Pr(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (o.push(i.run(e).then((m) => l(m))), `__%%%${o.length - 1}%%%__`);
      let g = e[p];
      if ((!g || typeof g != "object") && !i.methods[p].lazy && (g = [
        g
      ]), i.methods[p] && i.methods[p].compile) {
        let m = i.methods[p].compile(g, t);
        if (m[Fe] && (m = m[Fe]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let f = i.methods[p].optimizeUnary ? "" : "coerceArray";
      !f && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : f && Array.isArray(g) && (f = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[p] == "function") {
        a = !Lt(i.methods[p]);
        const m = h[zo(i.methods[p]) - 1] || h[2];
        return d(`engine.methods["${p}"](${f}(` + ue(g, t) + ")" + m + ")");
      } else {
        a = !!(r && i.methods[p] && i.methods[p].asyncMethod);
        const m = zo(a ? i.methods[p].asyncMethod : i.methods[p].method);
        let v = h[m - 1] || h[2];
        return a && typeof i.methods[p][K] == "function" && i.methods[p][K](g, {
          engine: i
        }) && (a = false, v = v.replace("engine", "engine.fallback")), i.methods[p] && !i.methods[p].lazy ? d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${f}(` + ue(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function rr(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Hu
    }, t));
    const n = ue(e, t);
    return Vu(e, n, t);
  }
  function Vu(e, t, n) {
    const { engine: r, methods: o, notTraversed: s, processing: i = [], values: l } = n, a = [];
    i.forEach((c, p) => {
      t = t.replace(`__%%%${p}%%%__`, c);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, o, s, tr, r, a, Sn, ae, Tu, Du, ft), {
      [K]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Wu = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, qt = Wu(), on = /* @__PURE__ */ new Map();
  function Ut(e) {
    if (on.has(e)) return on.get(e);
    on.size > 2048 && on.clear();
    const t = Gu(e);
    return on.set(e, t), t;
  }
  function Gu(e, t = ".", n = "\\", r = "/") {
    const o = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === r ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (o.push(s), s = "") : s += l;
    }
    return o.length !== e.length && o.push(s), o;
  }
  const Tr = {
    get: {
      [K]: true,
      method: ([e, t, n], r, o, s) => {
        const i = n === void 0 ? null : n, l = Ut(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, r = e, o = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
          r = r.toString();
          const s = Ut(r);
          return qt ? `((${ue(o, t)})${s.map((i) => `?.[${ue(i, t)}]`).join("")} ?? ${ue(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${ue(o, t)}||0)`)}, ${ue(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Ye]: true,
      [K]: true,
      method: (e, t, n, r) => {
        let o;
        Array.isArray(e) && (o = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = o === void 0 ? null : o;
        if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
        const l = Ut(String(e));
        for (let a = 0; a < l.length; a++) if (t == null || (t = t[l[a]], t === void 0)) return i;
        return r.allowFunctions || typeof t != "function" ? t : null;
      },
      deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"),
      optimizeUnary: true,
      compile: (e, t) => {
        let n = e, r = null;
        if (!n || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
          if (Array.isArray(e) && (n = e[0], r = typeof e[1] > "u" ? null : e[1]), n === "../index" && t.iteratorCompile) return "index";
          if (typeof n > "u" || n === null || n === "") return "context";
          if (typeof n != "string" && typeof n != "number" || (n = n.toString(), n.includes("../"))) return false;
          const o = Ut(n);
          if (!qt) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${ue(r, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${o.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${ue(r, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [K]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let r = 0; r < e.length; r++) {
          const o = Ut(String(e[r]));
          let s = t, i = true;
          for (let l = 0; l < o.length; l++) {
            if (!s) {
              i = false;
              break;
            }
            if (s = s[o[l]], s === void 0) {
              i = false;
              break;
            }
          }
          i || n.push(e[r]);
        }
        return n;
      },
      compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false,
      deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0)
    },
    missing_some: {
      [K]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const r = Tr.missing.method(t, n);
        return t.length - r.length >= e ? [] : r;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let r = Tr.missing.compile(t, n);
        return r || (r = n.compile`engine.methods.missing.method(${{
          [Fe]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Uu = {
    ...Tr
  }, X = {
    type: "Invalid Arguments"
  };
  function ye(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => ye(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && ye(o, t, n);
    }
    return true;
  }
  function De(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => De(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r][K] == "function" ? t.methods[r][K](o, n) : t.methods[r][K] : typeof t.methods[r][K] == "function" ? t.methods[r][K](o, n) : t.methods[r][K] && De(o, t, n);
    }
    return true;
  }
  function re(e, t, n, r) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const o = t.optimizedMap.get(e);
      return typeof o == "function" ? o(n, r) : o;
    }
    return t.run(e, n, {
      above: r
    });
  }
  const sn = Xn("every", true), Y = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ae(+e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t += +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "*": (e) => {
      if (e.length === 0) return 1;
      let t = 1;
      for (let n = 0; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t *= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "/": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw X;
      if (e.length === 1) {
        if (!+e[0] || e[0] && typeof e[0] == "object") throw NaN;
        return 1 / +e[0];
      }
      let t = +e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object" || !e[n]) throw NaN;
        t /= +e[n];
      }
      if (Number.isNaN(t) || t === 1 / 0) throw NaN;
      return t;
    },
    "-": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ae(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw X;
      if (e.length === 1) return -e[0];
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t -= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "%": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length < 2) throw X;
      let t = +e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t %= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    throw: (e) => {
      throw Array.isArray(e) && (e = e[0]), typeof e == "object" ? e : {
        type: e
      };
    },
    max: (e) => {
      if (!e.length || typeof e[0] != "number") throw X;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw X;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw X;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw X;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: Is((e) => e, true),
      [K]: () => true
    },
    if: {
      [Ye]: true,
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        if (e.length === 1) return re(e[0], r, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = re(s, r, t, n);
          if (r.truthy(l)) return re(i, r, t, n);
        }
        return re(o, r, t, n);
      },
      [K]: (e, t) => De(e, t.engine, t),
      deterministic: (e, t) => ye(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        if (e.length === 1) return r.run(e[0], t, {
          above: n
        });
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = await r.run(s, t, {
            above: n
          });
          if (r.truthy(l)) return r.run(i, t, {
            above: n
          });
        }
        return r.run(o, t, {
          above: n
        });
      },
      lazy: true
    },
    "<": vt("<", (e, t) => e < t),
    "<=": vt("<=", (e, t) => e <= t),
    ">": vt(">", (e, t) => e > t),
    ">=": vt(">=", (e, t) => e >= t),
    "==": vt("==", (e, t) => e == t),
    "===": vt("===", (e, t) => e === t),
    "!=": vt("!=", (e, t) => e != t),
    "!==": vt("!==", (e, t) => e !== t),
    or: {
      [K]: (e, t) => De(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = re(e[s], r, t, n), r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), r.truthy(o)) return o;
        return o;
      },
      deterministic: (e, t) => ye(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let r = 0; r < e.length; r++) n = t.compile`${n} engine.truthy(prev = ${e[r]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      },
      lazy: true
    },
    "??": {
      [K]: (e, t) => De(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        let o;
        for (let s = 0; s < e.length; s++) if (o = re(e[s], r, t, n), o != null) return o;
        return o === void 0 ? null : o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), o != null) return o;
        return o === void 0 ? null : o;
      },
      deterministic: (e, t) => ye(e, t.engine, t),
      compile: (e, t) => qt ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
        const o = ue(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
      }).join(" ?? ")})` : `(${ue(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [K]: (e, t) => De(e, t.engine, t),
      method: (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = re(e[i], r, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : o = re(e[i], r, t, n), o;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      asyncMethod: async (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = await r.run(e[i], {
            type: s.type || s.error || s.message || s.constructor.name
          }, {
            above: [
              null,
              t,
              n
            ]
          }) : o = await r.run(e[i], t, {
            above: n
          }), o;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      deterministic: (e, t) => ye(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && ye(e, t.engine, {
        ...t,
        insideIterator: true,
        insideTry: true
      }),
      lazy: true,
      compile: (e, t) => {
        if (!Array.isArray(e) || !e.length) return false;
        let n;
        try {
          "+" in e[0] && e.length > 1 ? n = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; ` : n = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), n = {
            [Fe]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; `
          };
        }
        if (e.length > 1) for (let r = 1; r < e.length; r++) try {
          r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), r === e.length - 1 ? n = t.compile`${n} throw ${{
            [Fe]: JSON.stringify(o)
          }} ` : n = t.compile`${n} ${{
            [Fe]: `context = ${JSON.stringify(o)};`
          }}`;
        }
        else n[Fe].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[Fe].includes("await") && (n[Fe] = n[Fe].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [K]: (e, t) => De(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = re(e[s], r, t, n), !r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), !r.truthy(o)) return o;
        return o;
      },
      lazy: true,
      deterministic: (e, t) => ye(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let r = 0; r < e.length; r++) n = t.compile`${n} !engine.truthy(prev = ${e[r]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      }
    },
    substr: ([e, t, n]) => {
      if (n < 0) {
        const r = e.substr(t);
        return r.substr(0, r.length + n);
      }
      return e.substr(t, n);
    },
    length: {
      method: (e, t, n, r) => {
        if (!e) throw X;
        const o = re(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw X;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!e) throw X;
        const o = await re(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw X;
      },
      deterministic: (e, t) => ye(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, r) => Y.val.method(e, t, n, r, Do) !== Do,
      deterministic: false
    },
    val: {
      [Ye]: true,
      [K]: true,
      method: (e, t, n, r, o = null) => {
        if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
          if (o && !(t && e in t)) return o;
          if (t == null) return null;
          const l = t[e];
          return typeof l > "u" ? null : l;
        }
        let s = t, i = 0;
        if (Array.isArray(e[0]) && e[0].length === 1) {
          i++;
          const l = +Math.abs(e[0][0]);
          let a = 0;
          for (let d = 0; d < l; d++) s = n[a++], d === n.length - 1 && Array.isArray(s) && (n = s, s = s[0], a = 1);
        }
        for (let l = i; l < e.length; l++) {
          if (o && !(s && e[l] in s)) return o;
          if (s == null) return null;
          s = s[e[l]];
        }
        return typeof s > "u" || typeof s == "function" && !r.allowFunctions ? o : s;
      },
      optimizeUnary: true,
      deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
      compile: (e, t) => {
        function n(r) {
          let o;
          return qt ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (De(e, t.engine, t) && ye(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(qt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let r = t.compile`context`;
          for (let o = 0; o < e.length; o++) e[o] !== null && (qt ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
          return n(t.compile`(${r})`);
        }
        return false;
      }
    },
    map: Xn("map"),
    some: {
      ...Xn("some", true),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        let [o, s] = e;
        o = re(o, r, t, n) || [];
        for (let i = 0; i < o.length; i++) if (r.truthy(re(s, r, o[i], [
          o,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [K]: sn[K],
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        const o = re(e[0], r, t, n) || [];
        if (Array.isArray(o) && o.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < o.length; i++) if (!r.truthy(re(s, r, o[i], [
          o,
          t,
          n
        ]))) return false;
        return true;
      },
      asyncMethod: async (e, t, n, r) => {
        if (Array.isArray(e)) {
          const o = await r.run(e[0], t, n);
          if (Array.isArray(o) && o.length === 0) return false;
        }
        return sn.asyncMethod(e, t, n, r);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${sn.compile([
        {
          [Fe]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: sn.deterministic,
      lazy: sn.lazy
    },
    none: {
      [K]: (e, t) => De(e, t.engine, t),
      lazy: true,
      method: (e, t, n, r) => !Y.some.method(e, t, n, r),
      asyncMethod: async (e, t, n, r) => !await Y.some.asyncMethod(e, t, n, r),
      compile: (e, t) => {
        const n = Y.some.compile(e, t);
        return n ? t.compile`!(${n})` : false;
      }
    },
    merge: (e) => {
      if (!Array.isArray(e)) return [
        e
      ];
      const t = [];
      for (let n = 0; n < e.length; n++) if (Array.isArray(e[n])) for (let r = 0; r < e[n].length; r++) t.push(e[n][r]);
      else t.push(e[n]);
      return t;
    },
    filter: Xn("filter", true),
    reduce: {
      deterministic: (e, t) => ye(e[0], t.engine, t) && ye(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw X;
        const { async: n } = t;
        let [r, o, s] = e;
        r = ue(r, t), typeof s < "u" && (s = ue(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        o = rr(o, i);
        const l = o.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(o), n && (!Lt(o) || r.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${s}))` : `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        let [o, s, i] = e;
        i = ft(re(i, r, t, n), r.options.maxDepth), o = re(o, r, t, n) || [];
        let l = (a, d) => ft(r.run(s, {
          accumulator: a,
          current: d
        }, {
          above: [
            o,
            t,
            n
          ]
        }), r.options.maxDepth);
        if (r.optimizedMap.has(s) && typeof r.optimizedMap.get(s) == "function") {
          const a = r.optimizedMap.get(s);
          l = (d, c) => ft(a({
            accumulator: d,
            current: c
          }, [
            o,
            t,
            n
          ]), r.options.maxDepth);
        }
        return typeof i > "u" ? o.reduce(l) : o.reduce(l, i);
      },
      [K]: (e, t) => De(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw X;
        let [o, s, i] = e;
        return i = ft(await r.run(i, t, {
          above: n
        }), r.options.maxDepth), o = await r.run(o, t, {
          above: n
        }) || [], tr.reduce(o, (l, a) => r.run(s, {
          accumulator: l,
          current: a
        }, {
          above: [
            o,
            t,
            n
          ]
        }), i, r.options.maxDepth);
      },
      lazy: true
    },
    "!": (e, t, n, r) => Array.isArray(e) ? !r.truthy(e[0]) : !r.truthy(e),
    "!!": (e, t, n, r) => !!(Array.isArray(e) ? r.truthy(e[0]) : r.truthy(e)),
    cat: {
      [Ye]: true,
      [K]: true,
      method: (e) => {
        if (typeof e == "string") return e;
        if (!Array.isArray(e)) return e.toString();
        let t = "";
        for (let n = 0; n < e.length; n++) e[n] === null || e[n] === void 0 || (t += e[n]);
        return t;
      },
      deterministic: true,
      optimizeUnary: true,
      compile: (e, t) => {
        if (typeof e == "string") return JSON.stringify(e);
        if (typeof e == "number") return '"' + JSON.stringify(e) + '"';
        if (!Array.isArray(e)) return false;
        let n = t.compile`''`;
        for (let r = 0; r < e.length; r++) n = t.compile`${n} + ${e[r]}`;
        return t.compile`(${n})`;
      }
    },
    keys: ([e]) => typeof e == "object" ? Object.keys(e) : [],
    pipe: {
      lazy: true,
      [K]: (e, t) => De(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let o = r.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) o = r.run(e[s], o, {
          above: [
            e,
            t,
            n
          ]
        });
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let o = await r.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) o = await r.run(e[s], o, {
          above: [
            e,
            t,
            n
          ]
        });
        return o;
      },
      compile: (e, t) => {
        let n = t.compile`${e[0]}`;
        for (let r = 1; r < e.length; r++) n = t.compile`${rr(e[r], {
          ...t,
          extraArguments: "above"
        })}(${n}, [null, context, above])`;
        return n;
      },
      deterministic: (e, t) => {
        if (!Array.isArray(e)) return false;
        e = [
          ...e
        ];
        const n = e.shift();
        return ye(n, t.engine, t) && ye(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [K]: (e, t) => De(Object.values(e[Object.keys(e)[0]]), t.engine, t),
      method: (e, t, n, r) => Object.keys(e).reduce((s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: r.run(l, t, {
            above: n
          })
        }), s;
      }, {}),
      deterministic: (e, t) => {
        if (e && typeof e == "object") return Object.values(e).every((n) => ye(n, t.engine, t));
        throw X;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${ue(e[o], t)}`), r), []).join(",")} })`;
        throw X;
      },
      asyncMethod: async (e, t, n, r) => await tr.reduce(Object.keys(e), async (s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: await r.run(l, t, {
            above: n
          })
        }), s;
      }, {}, 1 / 0)
    }
  };
  function vt(e, t) {
    const n = {
      [Fe]: e
    }, r = e.length === 3;
    return {
      method: (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw X;
        if (o.length === 2) {
          const d = re(o[0], l, s, i), c = re(o[1], l, s, i);
          if (r || (typeof d == "string" || d === null) && (typeof c == "string" || c === null)) return t(d, c);
          if (Number.isNaN(+ae(d))) throw NaN;
          if (Number.isNaN(+ae(c)) && d !== null) throw NaN;
          return t(+d, +c);
        }
        let a = re(o[0], l, s, i);
        for (let d = 1; d < o.length; d++) {
          const c = re(o[d], l, s, i);
          if ((r || (typeof c == "string" || c === null) && (typeof a == "string" || a === null)) && !t(a, c)) return false;
          if (Number.isNaN(+ae(c)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ae(a))) throw NaN;
          if (!t(+a, +c)) return false;
          a = c;
        }
        return true;
      },
      asyncMethod: async (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw X;
        if (o.length === 2) {
          const d = await re(o[0], l, s, i), c = await re(o[1], l, s, i);
          if (r || (typeof d == "string" || d === null) && (typeof c == "string" || c === null)) return t(d, c);
          if (Number.isNaN(+ae(d))) throw NaN;
          if (Number.isNaN(+ae(c)) && d !== null) throw NaN;
          return t(+d, +c);
        }
        let a = await re(o[0], l, s, i);
        for (let d = 1; d < o.length; d++) {
          const c = await re(o[d], l, s, i);
          if ((r || (typeof c == "string" || c === null) && (typeof a == "string" || a === null)) && !t(a, c)) return false;
          if (Number.isNaN(+ae(c)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ae(a))) throw NaN;
          if (!t(+a, +c)) return false;
          a = c;
        }
        return true;
      },
      compile: (o, s) => {
        if (!Array.isArray(o) || o.length < 2) return false;
        if (o.length === 2) return s.compile`((prev = ${o[0]}) ${n} compareCheck(${o[1]}, prev, ${r}))`;
        let i = s.compile`((prev = ${o[0]}) ${n} (prev = compareCheck(${o[1]}, prev, ${r})))`;
        for (let l = 2; l < o.length; l++) i = s.compile`(${i} && prev ${n} (prev = compareCheck(${o[l]}, prev, ${r})))`;
        return i;
      },
      [Ye]: true,
      [K]: (o, s) => De(o, s.engine, s),
      deterministic: (o, s) => ye(o, s.engine, s),
      lazy: true
    };
  }
  function Xn(e, t = false) {
    return {
      deterministic: (n, r) => ye(n[0], r.engine, r) && ye(n[1], r.engine, {
        ...r,
        insideIterator: true
      }),
      [Ye]: true,
      [K]: (n, r) => De(n, r.engine, r),
      method: (n, r, o, s) => {
        if (!Array.isArray(n)) throw X;
        let [i, l] = n;
        return i = re(i, s, r, o) || [], i[e]((a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const c = re(l, s, a, [
            {
              iterator: i,
              index: d
            },
            r,
            o
          ]);
          return t ? s.truthy(c) : c;
        });
      },
      asyncMethod: async (n, r, o, s) => {
        if (!Array.isArray(n)) throw X;
        let [i, l] = n;
        return i = await s.run(i, r, {
          above: o
        }) || [], tr[e](i, async (a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const c = await s.run(l, a, {
            above: [
              {
                iterator: i,
                index: d
              },
              r,
              o
            ]
          });
          return t ? s.truthy(c) : c;
        });
      },
      compile: (n, r) => {
        if (!Array.isArray(n)) throw X;
        const { async: o } = r, [s, i] = n, l = {
          ...r,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = rr(i, l), d = a.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, c = t ? r.compile`engine.truthy` : r.compile``;
        return o && !Lt(a) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${c}(${a}(i, x, ${d})))`) : r.compile`(${s} || [])[${e}]((i, x, z) => ${c}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  Y.every = Y.all;
  Y["?:"] = Y.if;
  Object.keys(Y).forEach((e) => {
    typeof Y[e] == "function" && (Y[e][K] = true), Y[e].deterministic = typeof Y[e].deterministic > "u" ? true : Y[e].deterministic;
  });
  Y.if.compile = function(e, t) {
    if (!Array.isArray(e) || e.length < 3) return false;
    e = [
      ...e
    ], e.length % 2 !== 1 && e.push(null);
    const n = e.pop();
    let r = t.compile``;
    for (; e.length; ) {
      const o = e.shift(), s = e.shift();
      r = t.compile`${r} engine.truthy(${o}) ? ${s} : `;
    }
    return t.compile`(${r} ${n})`;
  };
  function Mn(e, t) {
    if (Array.isArray(e)) return ae(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + ue(e, t);
    if (typeof e == "string") return "+" + ae(+e);
    const n = ue(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + ae(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? ae(NaN) : `(+precoerceNumber(${n}))`;
  }
  Y["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => Mn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${ue(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  Y["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw X;
      return `precoerceNumber(${e.map((n) => Mn(n, t)).join(" % ")})`;
    }
    return `assertSize(${ue(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  Y.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  Y["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw X;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => Mn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${ue(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  Y["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw X;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, r) => {
        let o = Mn(n, t);
        return r && o === "+0" && ae(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${ue(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  Y["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => Mn(n, t)).join(" * ")})` : `(${ue(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  Y["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  Y.not = Y["!"];
  Y["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  Y.none.deterministic = Y.some.deterministic;
  Y.throw.deterministic = (e, t) => t.insideTry && ye(e, t.engine, t);
  Y["+"].optimizeUnary = Y["-"].optimizeUnary = Y["!"].optimizeUnary = Y["!!"].optimizeUnary = Y.cat.optimizeUnary = Y.throw.optimizeUnary = true;
  const qu = {
    ...Y,
    ...Uu
  }, Yu = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Ju(e, t, n, r) {
    const o = t.methods[n], s = o.method ? o.method : o;
    if (o.lazy) {
      const l = e[n];
      return (a, d) => s(l, a, d || r, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !o.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && o.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((a) => $e(a, t, r));
      if (l.every((a) => typeof a != "function")) return (a, d) => s(l, a, d || r, t);
      if (l.length === 1) {
        const a = l[0];
        return (d, c) => s([
          a(d, c)
        ], d, c || r, t);
      }
      if (l.length === 2) {
        const [a, d] = l;
        return typeof a == "function" && typeof d == "function" ? (c, p) => s([
          a(c, p),
          d(c, p)
        ], c, p || r, t) : typeof a == "function" ? (c, p) => s([
          a(c, p),
          d
        ], c, p || r, t) : (c, p) => s([
          a,
          d(c, p)
        ], c, p || r, t);
      }
      return (a, d) => {
        const c = l.map((p) => typeof p == "function" ? p(a, d) : p);
        return s(c, a, d || r, t);
      };
    } else {
      const l = $e(i, t, r);
      if (o.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, c) => s(l(d, c), d, c || r, t);
        if ((n === "var" || n === "val") && t.methods[n][Ye]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Ut(String(l));
            let c;
            if (d.length === 2) {
              const [p, g] = d;
              return (f) => (typeof (c = f && f[p] && f[p][g]) != "function" || t.allowFunctions) && typeof c < "u" ? c : null;
            }
            if (d.length === 3) {
              const [p, g, f] = d;
              return (h) => (typeof (c = h && h[p] && h[p][g] && h[p][g][f]) != "function" || t.allowFunctions) && typeof c < "u" ? c : null;
            }
          }
        }
        return (d, c) => s(l, d, c || r, t);
      }
      return typeof l == "function" ? (a, d) => s(Sn(l(a, d)), a, d || r, t) : (a, d) => s(Sn(l), a, d || r, t);
    }
  }
  const Eo = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function Xu(e, t, n) {
    if (e.val && t.methods.val[Ye] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
      let r;
      if (e.val.length === 1) {
        const o = e.val[0];
        return (s) => (typeof (r = s && s[o]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
      if (e.val.length === 2) {
        const [o, s] = e.val;
        return (i) => (typeof (r = i && i[o] && i[o][s]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
      if (e.val.length === 3) {
        const [o, s, i] = e.val;
        return (l) => (typeof (r = l && l[o] && l[o][s] && l[o][s][i]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
    }
    if ((e.if || e["?:"]) && t.methods.if[Ye] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [r, o, s] = e.if || e["?:"], i = $e(r, t, n), l = $e(o, t, n), a = $e(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof a == "function" ? (d, c) => t.truthy(i(d, c)) ? l(d, c) : a(d, c) : typeof i == "function" && typeof l == "function" ? (d, c) => t.truthy(i(d, c)) ? l(d, c) : a : typeof i == "function" && typeof a == "function" ? (d, c) => t.truthy(i(d, c)) ? l : a(d, c) : typeof i == "function" ? (d, c) => t.truthy(i(d, c)) ? l : a : t.truthy(i) ? l : a;
    }
    if (e.filter && t.methods.filter[Ye] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [r, o] = e.filter, s = $e(o, t, n);
      if (typeof s != "function") return t.truthy(s) ? $e(r, t, n) : [];
    }
    for (const r in Eo) if (e[r] && Array.isArray(e[r]) && t.methods[r][Ye]) {
      const o = Eo[r], s = r.length === 3 ? o : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return o(l, a);
        if (Number.isNaN(+ae(l))) throw NaN;
        if (Number.isNaN(+ae(a)) && l !== null) throw NaN;
        return o(+l, +a);
      };
      if (e[r].length === 2) {
        const [i, l] = e[r], a = $e(i, t, n), d = $e(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (c, p) => s(a(c, p), d(c, p)) : typeof a == "function" ? (c, p) => s(a(c, p), d) : typeof d == "function" ? (c, p) => s(a, d(c, p)) : s(a, d);
      }
      if (e[r].length === 3) {
        const [i, l, a] = e[r], d = $e(i, t, n), c = $e(l, t, n), p = $e(a, t, n);
        let g;
        return typeof d == "function" && typeof c == "function" && typeof p == "function" ? (f, h) => s(d(f, h), g = c(f, h)) && s(g, p(f, h)) : typeof d == "function" && typeof c == "function" ? (f, h) => s(d(f, h), g = c(f, h)) && s(g, p) : typeof d == "function" && typeof p == "function" ? (f, h) => s(d(f, h), c) && s(c, p(f, h)) : typeof c == "function" && typeof p == "function" ? (f, h) => s(d, g = c(f, h)) && s(g, p(f, h)) : typeof d == "function" ? (f, h) => s(d(f, h), c) && s(c, p) : typeof c == "function" ? (f, h) => s(d, g = c(f, h)) && s(g, p) : typeof p == "function" ? (f, h) => s(d, c) && s(c, p(f, h)) : s(d, c) && s(c, p);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [r, o, s] = e.reduce;
      if (o["+"] && o["+"].length === 2 && (o["+"][0] || 0).var && (o["+"][1] || 0).var) {
        const i = o["+"][0].var === "accumulator" || o["+"][1].var === "accumulator", l = o["+"][0].var === "current" || o["+"][1].var === "current";
        if (s = s || 0, i && l) return $e({
          "+": [
            {
              "+": r
            },
            s
          ]
        }, t, n);
      }
      if (o["*"] && o["*"].length === 2 && (o["*"][0] || 0).var && (o["*"][1] || 0).var) {
        const i = o["*"][0].var === "accumulator" || o["*"][1].var === "accumulator", l = o["*"][0].var === "current" || o["*"][1].var === "current";
        if (s = typeof s > "u" ? 1 : s, i && l) return $e({
          "*": [
            {
              "*": r
            },
            s
          ]
        }, t, n);
      }
    }
  }
  function $e(e, t, n = []) {
    if (Array.isArray(e)) {
      const r = e.map((o) => $e(o, t, n));
      return r.every((o) => typeof o != "function") ? r : (o, s) => r.map((i) => typeof i == "function" ? i(o, s) : i);
    }
    if (e && typeof e == "object") {
      const r = Xu(e, t, n);
      if (typeof r < "u") return r;
      const o = Object.keys(e), s = o[0];
      if (o.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (o.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && nr(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const a = Ju(e, t, s, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class Ku {
    constructor(t = qu, n = {
      disableInline: false,
      disableInterpretedOptimization: false,
      permissive: false,
      maxDepth: 0,
      maxArrayLength: 32768,
      maxStringLength: 65536
    }) {
      this.disableInline = n.disableInline, this.disableInterpretedOptimization = n.disableInterpretedOptimization, this.methods = {
        ...t
      }, this.optimizedMap = /* @__PURE__ */ new WeakMap(), this.missesSinceSeen = 0, this.options = {
        disableInline: n.disableInline,
        disableInterpretedOptimization: n.disableInterpretedOptimization,
        maxDepth: n.maxDepth || 0,
        maxArrayLength: n.maxArrayLength || 32768,
        maxStringLength: n.maxStringLength || 65536
      }, this.isData || (n.permissive ? this.isData = (r, o) => !(o in this.methods) : this.isData = () => false);
    }
    truthy(t) {
      if (!t) return t;
      if (Array.isArray(t)) return t.length > 0;
      if (typeof t == "object") {
        if (t[Symbol.iterator] && ("length" in t && t.length === 0 || "size" in t && t.size === 0)) return false;
        if (t.constructor.name === "Object") return Object.keys(t).length > 0;
      }
      return t;
    }
    _parse(t, n, r, o, s) {
      const i = t[o];
      if (this.isData(t, o)) return t;
      if (!this.methods[o] || s > 1) throw {
        type: "Unknown Operator",
        key: o
      };
      if ((o === "var" || o === "val") && this.methods[o][Ye]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: r
        });
        return this.methods[o].method(l, n, r, this, null);
      }
      if (typeof this.methods[o] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : Sn(this.run(i, n, {
          above: r
        }));
        return this.methods[o](l, n, r, this);
      }
      if (typeof this.methods[o] == "object") {
        const { method: l, lazy: a } = this.methods[o], d = a ? i : !i || typeof i != "object" ? [
          i
        ] : Sn(this.run(i, n, {
          above: r
        }));
        return l(d, n, r, this);
      }
      throw new Error(`Method '${o}' is not set up properly.`);
    }
    addMethod(t, n, { deterministic: r, optimizeUnary: o } = {}) {
      typeof n == "function" ? n = {
        method: n,
        lazy: false
      } : n = {
        ...n,
        lazy: typeof n.traverse < "u" ? !n.traverse : n.lazy
      }, Object.assign(n, Yu({
        deterministic: r,
        optimizeUnary: o
      })), this.methods[t] = Is(n);
    }
    addModule(t, n, r) {
      Object.getOwnPropertyNames(n).forEach((o) => {
        (typeof n[o] == "function" || typeof n[o] == "object") && this.addMethod(`${t}${t ? "." : ""}${o}`, n[o], r);
      });
    }
    run(t, n = {}, r = {}) {
      const { above: o = [] } = r;
      if (!this.disableInterpretedOptimization && typeof t == "object" && t) if (this.missesSinceSeen > 500 && (this.disableInterpretedOptimization = true, this.missesSinceSeen = 0), this.optimizedMap.has(t)) {
        this.missesSinceSeen = 0;
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, o) : s;
      } else {
        this.optimizedMap.set(t, $e(t, this, o)), this.missesSinceSeen++;
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, o) : s;
      }
      if (Array.isArray(t)) {
        const s = new Array(t.length);
        for (let i = 0; i < t.length; i++) s[i] = this.run(t[i], n, {
          above: o
        });
        return s;
      }
      if (t && typeof t == "object") {
        const s = Object.keys(t);
        if (s.length > 0) {
          const i = s[0];
          return this._parse(t, n, o, i, s.length);
        }
      }
      return t;
    }
    build(t, n = {}) {
      const { above: r = [], top: o = true } = n, s = rr(t, {
        engine: this,
        above: r
      });
      return o === false && s.deterministic ? s() : s;
    }
  }
  function He(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const ar = new Ku();
  ar.addMethod("contains", ([e, t]) => He(e).includes(He(t)), {
    deterministic: true
  });
  ar.addMethod("startsWith", ([e, t]) => He(e).startsWith(He(t)), {
    deterministic: true
  });
  ar.addMethod("endsWith", ([e, t]) => He(e).endsWith(He(t)), {
    deterministic: true
  });
  function ln() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Dr = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Qu = {
    number: [
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "empty",
      "not_empty"
    ],
    string: [
      "eq",
      "neq",
      "contains",
      "not_contains",
      "starts_with",
      "ends_with",
      "empty",
      "not_empty"
    ],
    boolean: [
      "is_true",
      "is_false",
      "empty",
      "not_empty"
    ],
    date: [
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "empty",
      "not_empty"
    ],
    mixed: [
      "eq",
      "neq",
      "contains",
      "empty",
      "not_empty"
    ]
  }, Zu = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], ec = {
    var: "value"
  };
  function tc(e, t, n = "string") {
    const r = Number(t), o = n === "number", s = n === "date", i = ec;
    switch (e) {
      case "eq":
        return {
          "==": [
            i,
            o ? r : t
          ]
        };
      case "neq":
        return {
          "!=": [
            i,
            o ? r : t
          ]
        };
      case "gt":
        return {
          ">": [
            i,
            s ? t : r
          ]
        };
      case "gte":
        return {
          ">=": [
            i,
            s ? t : r
          ]
        };
      case "lt":
        return {
          "<": [
            i,
            s ? t : r
          ]
        };
      case "lte":
        return {
          "<=": [
            i,
            s ? t : r
          ]
        };
      case "contains":
        return {
          contains: [
            i,
            t
          ]
        };
      case "not_contains":
        return {
          "!": [
            {
              contains: [
                i,
                t
              ]
            }
          ]
        };
      case "starts_with":
        return {
          startsWith: [
            i,
            t
          ]
        };
      case "ends_with":
        return {
          endsWith: [
            i,
            t
          ]
        };
      case "empty":
        return {
          "!": [
            {
              "!!": [
                i
              ]
            }
          ]
        };
      case "not_empty":
        return {
          "!!": [
            i
          ]
        };
      case "is_true":
        return {
          "==": [
            i,
            true
          ]
        };
      case "is_false":
        return {
          "==": [
            i,
            false
          ]
        };
    }
  }
  const nc = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function rc(e, t = "string") {
    const n = e.conditions.filter((o) => Dr.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && nc.has(o.operator) && isNaN(Number(o.operand))));
    if (n.length === 0) return;
    const r = n.map((o) => tc(o.operator, o.operand, t));
    return r.length === 1 ? r[0] : {
      [e.mode]: r
    };
  }
  function at(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function gr(e) {
    for (const [t, n] of [
      [
        ">",
        "gt"
      ],
      [
        ">=",
        "gte"
      ],
      [
        "<",
        "lt"
      ],
      [
        "<=",
        "lte"
      ]
    ]) if (t in e) {
      const r = e[t];
      if (Array.isArray(r) && r.length === 2 && at(r[0])) return {
        operator: n,
        operand: He(r[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: He(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "neq",
        operand: He(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "contains",
        operand: He(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "starts_with",
        operand: He(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && at(t[0])) return {
        operator: "ends_with",
        operand: He(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const r = n["!!"];
          if (Array.isArray(r) && at(r[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const r = n.contains;
          if (Array.isArray(r) && r.length === 2 && at(r[0])) return {
            operator: "not_contains",
            operand: He(r[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && at(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Oo(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: ln(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const r = n.map((o) => gr(o)).filter((o) => o !== null).map((o) => ({
          id: ln(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "and",
          conditions: r
        };
      }
    }
    if ("or" in e) {
      const n = e.or;
      if (Array.isArray(n)) {
        const r = n.map((o) => gr(o)).filter((o) => o !== null).map((o) => ({
          id: ln(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "or",
          conditions: r
        };
      }
    }
    const t = gr(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: ln(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: ln(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const oc = 200, an = /* @__PURE__ */ new Map();
  function sc(e, t) {
    try {
      const n = JSON.stringify(e);
      let r = an.get(n);
      if (!r) {
        if (r = ar.build(e), an.size >= oc) {
          const o = an.keys().next().value;
          o && an.delete(o);
        }
        an.set(n, r);
      }
      return !!r({
        value: t
      });
    } catch {
      return false;
    }
  }
  const ic = {
    eq: "json_table_op_eq",
    neq: "json_table_op_neq",
    gt: "json_table_op_gt",
    gte: "json_table_op_gte",
    lt: "json_table_op_lt",
    lte: "json_table_op_lte",
    contains: "json_table_op_contains",
    not_contains: "json_table_op_not_contains",
    starts_with: "json_table_op_starts_with",
    ends_with: "json_table_op_ends_with",
    empty: "json_table_op_empty",
    not_empty: "json_table_op_not_empty",
    is_true: "json_table_op_is_true",
    is_false: "json_table_op_is_false"
  };
  function lc({ label: e, value: t, onChange: n, inputType: r }) {
    const [o, s] = y.useState(t);
    y.useEffect(() => {
      s(t);
    }, [
      t
    ]);
    const i = y.useCallback(() => {
      o !== t && n(o);
    }, [
      o,
      t,
      n
    ]);
    return u.jsx(me, {
      label: e,
      value: o,
      onChange: (l) => s(l.target.value),
      onBlur: i,
      size: "small",
      type: r,
      sx: {
        flex: 1,
        ...r === "date" && {
          '& input[type="date"]::-webkit-calendar-picker-indicator': {
            filter: "invert(0.5)",
            cursor: "pointer",
            opacity: 0.7,
            "&:hover": {
              opacity: 1
            }
          }
        }
      },
      InputLabelProps: r === "date" || r === "number" ? {
        shrink: true
      } : void 0,
      slotProps: r === "number" ? {
        htmlInput: {
          step: "any"
        }
      } : r === "date" ? {
        htmlInput: {
          placeholder: "YYYY-MM-DD"
        }
      } : void 0
    });
  }
  function ac({ logic: e, columnType: t, onChange: n }) {
    const [r, o] = y.useState(() => Oo(e));
    y.useEffect(() => {
      o(Oo(e));
    }, [
      e
    ]);
    const s = Qu[t] ?? Zu, i = y.useCallback((g) => {
      o(g), n(rc(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, f) => {
      const h = r.conditions.map((m, v) => v === g ? {
        ...m,
        ...f
      } : m);
      i({
        ...r,
        conditions: h
      });
    }, [
      r,
      i
    ]), a = y.useCallback((g) => {
      const f = r.conditions.filter((h, m) => m !== g);
      i({
        ...r,
        conditions: f
      });
    }, [
      r,
      i
    ]), d = y.useCallback(() => {
      const g = s[0] ?? "eq";
      i({
        ...r,
        conditions: [
          ...r.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: g,
            operand: ""
          }
        ]
      });
    }, [
      r,
      i,
      s
    ]), c = y.useCallback((g, f) => {
      f !== null && i({
        ...r,
        mode: f
      });
    }, [
      r,
      i
    ]), p = r.conditions.length > 1;
    return u.jsxs(Pe, {
      spacing: 1,
      children: [
        p && u.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            u.jsxs(is, {
              value: r.mode,
              exclusive: true,
              onChange: c,
              size: "small",
              "aria-label": b.t("json_table_condition_mode_label"),
              children: [
                u.jsx(Qn, {
                  value: "and",
                  "aria-label": b.t("json_table_condition_mode_all"),
                  children: b.t("json_table_condition_mode_all")
                }),
                u.jsx(Qn, {
                  value: "or",
                  "aria-label": b.t("json_table_condition_mode_any"),
                  children: b.t("json_table_condition_mode_any")
                })
              ]
            }),
            u.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: r.mode === "and" ? b.t("json_table_condition_mode_hint_and") : b.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        r.conditions.map((g, f) => {
          const h = !Dr.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return u.jsxs(L, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              u.jsxs(ct, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  u.jsx(dt, {
                    children: b.t("json_table_condition_operator")
                  }),
                  u.jsx(nt, {
                    label: b.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const x = v.target.value, _ = Dr.has(x) ? "" : g.operand;
                      l(f, {
                        operator: x,
                        operand: _
                      });
                    },
                    children: s.map((v) => u.jsx(Z, {
                      value: v,
                      children: b.t(ic[v])
                    }, v))
                  })
                ]
              }),
              h && u.jsx(lc, {
                label: b.t("json_table_condition_value"),
                value: g.operand ?? "",
                onChange: (v) => l(f, {
                  operand: v
                }),
                inputType: m
              }),
              p && u.jsx(ze, {
                title: b.t("json_table_condition_remove"),
                children: u.jsx(ve, {
                  size: "small",
                  onClick: () => a(f),
                  "aria-label": b.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: u.jsx(Zn, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? f);
        }),
        u.jsx(rt, {
          startIcon: u.jsx(ws, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": b.t("json_table_condition_add"),
          children: p ? b.t("json_table_condition_add") : b.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function uc({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
    const s = y.useCallback((c, p) => {
      const g = [
        ...e || []
      ];
      g[c] = {
        ...g[c],
        ...p
      }, r(g);
    }, [
      e,
      r
    ]), i = y.useCallback((c) => {
      const p = [
        ...e || []
      ];
      p.splice(c, 1), r(p);
    }, [
      e,
      r
    ]), l = y.useCallback(() => {
      const c = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      r([
        ...e || [],
        c
      ]);
    }, [
      e,
      r
    ]), a = y.useCallback((c) => {
      if (c === 0) return;
      const p = [
        ...e || []
      ];
      [p[c - 1], p[c]] = [
        p[c],
        p[c - 1]
      ], r(p);
    }, [
      e,
      r
    ]), d = y.useCallback((c) => {
      const p = e || [];
      if (c >= p.length - 1) return;
      const g = [
        ...p
      ];
      [g[c], g[c + 1]] = [
        g[c + 1],
        g[c]
      ], r(g);
    }, [
      e,
      r
    ]);
    return u.jsxs(Pe, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && u.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            u.jsxs(is, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (c, p) => {
                p && o(p);
              },
              "aria-label": b.t("json_table_cell_style_mode_label"),
              children: [
                u.jsx(Qn, {
                  value: "first-match",
                  "aria-label": b.t("json_table_cell_style_mode_first"),
                  children: b.t("json_table_cell_style_mode_first")
                }),
                u.jsx(Qn, {
                  value: "all-match",
                  "aria-label": b.t("json_table_cell_style_mode_all"),
                  children: b.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            u.jsx(I, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? b.t("json_table_cell_style_mode_hint_first") : b.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && u.jsxs(L, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            u.jsx(I, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: b.t("json_table_no_style_rules")
            }),
            u.jsx(I, {
              variant: "caption",
              children: b.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((c, p) => {
          const g = (e || []).length, f = c.backgroundColor ? Et(c.backgroundColor) : void 0, h = c.textColor ? Et(c.textColor) : void 0;
          return u.jsx(gt, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: u.jsxs(Pe, {
              spacing: 1.5,
              children: [
                u.jsxs(L, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    u.jsx(L, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: u.jsxs(I, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          b.t("json_table_rule"),
                          " ",
                          p + 1
                        ]
                      })
                    }),
                    u.jsxs(L, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        u.jsx(ze, {
                          title: b.t("json_table_rule_move_up"),
                          children: u.jsx("span", {
                            children: u.jsx(ve, {
                              size: "small",
                              onClick: () => a(p),
                              disabled: p === 0,
                              "aria-label": b.t("json_table_rule_move_up"),
                              children: u.jsx(Ss, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        u.jsx(ze, {
                          title: b.t("json_table_rule_move_down"),
                          children: u.jsx("span", {
                            children: u.jsx(ve, {
                              size: "small",
                              onClick: () => d(p),
                              disabled: p >= g - 1,
                              "aria-label": b.t("json_table_rule_move_down"),
                              children: u.jsx(Cs, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        u.jsx(ze, {
                          title: b.t("json_table_delete_rule"),
                          children: u.jsx(ve, {
                            size: "small",
                            onClick: () => i(p),
                            color: "error",
                            "aria-label": b.t("json_table_delete_rule"),
                            children: u.jsx(ii, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                u.jsx(ac, {
                  logic: c.logic,
                  columnType: n,
                  onChange: (m) => s(p, {
                    logic: m
                  })
                }, c.id ?? p),
                u.jsxs(Pe, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    u.jsx(Rr, {
                      label: b.t("json_table_bg_color"),
                      value: c.backgroundColor || "",
                      onChange: (m) => s(p, {
                        backgroundColor: m
                      })
                    }),
                    u.jsx(Rr, {
                      label: b.t("json_table_text_color"),
                      value: c.textColor || "",
                      onChange: (m) => s(p, {
                        textColor: m
                      })
                    })
                  ]
                }),
                u.jsxs(Pe, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    u.jsx(Ot, {
                      control: u.jsx(_n, {
                        checked: c.fontWeight === "bold",
                        onChange: (m) => s(p, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: u.jsx(Io, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: u.jsx(Io, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: u.jsx(I, {
                        variant: "caption",
                        children: b.t("json_table_bold")
                      })
                    }),
                    u.jsx(Ot, {
                      control: u.jsx(_n, {
                        checked: c.fontStyle === "italic",
                        onChange: (m) => s(p, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: u.jsx(Fo, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: u.jsx(Fo, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: u.jsx(I, {
                        variant: "caption",
                        children: b.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (c.backgroundColor || c.textColor || c.fontWeight === "bold" || c.fontStyle === "italic") && u.jsx(gt, {
                  variant: "outlined",
                  sx: {
                    p: 1,
                    ...c.backgroundColor ? f ? {
                      background: f
                    } : {
                      backgroundColor: c.backgroundColor
                    } : {},
                    fontWeight: c.fontWeight || "normal",
                    fontStyle: c.fontStyle || "normal"
                  },
                  children: u.jsx(I, {
                    variant: "body2",
                    sx: {
                      ...c.textColor ? h ? {
                        background: h,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                      } : {
                        color: c.textColor
                      } : {
                        color: "inherit"
                      }
                    },
                    children: b.t("json_table_sample_value")
                  })
                })
              ]
            })
          }, c.id ?? p);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && u.jsx(I, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? b.t("json_table_rules_priority_hint") : b.t("json_table_rules_all_match_hint")
        }),
        u.jsx(rt, {
          startIcon: u.jsx(ws, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: b.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function cc({ globalSorting: e, globalFiltering: t }) {
    return u.jsxs(L, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        u.jsx(I, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: b.t("json_table_global_status")
        }),
        u.jsxs(L, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            u.jsx(pt, {
              size: "small",
              icon: e ? u.jsx(Ao, {}) : u.jsx(Zn, {}),
              label: `${b.t("json_table_sorting")}: ${e ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            u.jsx(pt, {
              size: "small",
              icon: t ? u.jsx(Ao, {}) : u.jsx(Zn, {}),
              label: `${b.t("json_table_filtering")}: ${t ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: t ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            })
          ]
        })
      ]
    });
  }
  function zt(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function ko(e) {
    if (e == null) return null;
    if (e instanceof Date) {
      const t = e.getTime();
      return isNaN(t) ? null : t;
    }
    if (typeof e == "number") {
      const t = e >= 1e11 ? e : e * 1e3, n = new Date(t);
      return isNaN(n.getTime()) ? null : t;
    }
    if (typeof e == "string") {
      const t = e.trim();
      if (!t) return null;
      const n = t.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (n) {
        const [, s, i, l, a = "0", d = "0", c = "0"] = n, p = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(a, 10), parseInt(d, 10), parseInt(c, 10));
        return isNaN(p.getTime()) ? null : p.getTime();
      }
      const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (r) {
        const [, s, i, l, a = "0", d = "0", c = "0"] = r, p = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(a, 10), parseInt(d, 10), parseInt(c, 10));
        return isNaN(p.getTime()) ? null : p.getTime();
      }
      if (/^-?\d+$/.test(t)) {
        const s = parseInt(t, 10), i = s >= 1e11 ? s : s * 1e3, l = new Date(i);
        return isNaN(l.getTime()) ? null : i;
      }
      const o = new Date(t);
      return isNaN(o.getTime()) ? null : o.getTime();
    }
    return null;
  }
  function No(e) {
    const t = new Date(e);
    return t.setHours(0, 0, 0, 0), t.getTime();
  }
  function dc(e, t, n) {
    if (e == null) return t === "isEmpty";
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    if (typeof n == "boolean") {
      const d = typeof e == "boolean" ? e : e === "true" || e === 1 ? true : e === "false" || e === 0 ? false : null;
      if (d !== null) switch (t) {
        case "equals":
          return d === n;
        case "notEquals":
          return d !== n;
        default:
          return true;
      }
      return false;
    }
    const r = zt(e), o = zt(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const d = ko(e), c = ko(n);
      if (d !== null && c !== null) switch (t) {
        case "equals":
          return d === c;
        case "notEquals":
          return d !== c;
        case "greaterThan":
          return d > c;
        case "greaterThanOrEqual":
          return d >= c;
        case "lessThan":
          return d < c;
        case "lessThanOrEqual":
          return d <= c;
      }
    }
    switch (t) {
      case "contains":
        return r.includes(o);
      case "startsWith":
        return r.startsWith(o);
      case "endsWith":
        return r.endsWith(o);
      case "equals":
        return l ? s === i : r === o;
      case "notEquals":
        return l ? s !== i : r !== o;
      case "greaterThan":
        return l ? s > i : r > o;
      case "greaterThanOrEqual":
        return l ? s >= i : r >= o;
      case "lessThan":
        return l ? s < i : r < o;
      case "lessThanOrEqual":
        return l ? s <= i : r <= o;
      default:
        return true;
    }
  }
  function Lo(e, t, n, r) {
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    const o = Ir(e, r), s = Ir(n, r);
    if (o === null || s === null) return false;
    const i = No(o), l = No(s);
    switch (t) {
      case "equals":
        return i === l;
      case "notEquals":
        return i !== l;
      case "greaterThan":
        return i > l;
      case "greaterThanOrEqual":
        return i >= l;
      case "lessThan":
        return i < l;
      case "lessThanOrEqual":
        return i <= l;
      default:
        return true;
    }
  }
  function Ho(e) {
    return (t, n, r) => {
      if (r == null) return true;
      if (typeof r == "object" && r !== null && "operator" in r) {
        const o = r;
        return Lo(t.getValue(n), o.operator, o.value, e);
      }
      return typeof r == "string" || typeof r == "number" ? Lo(t.getValue(n), "equals", r, e) : true;
    };
  }
  const fc = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const o = e.getValue(t);
      return o == null ? false : zt(o).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const o = e.getValue(t);
      if (o == null) return false;
      const s = Number(o);
      return isNaN(s) ? zt(o).includes(zt(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const o = n, s = e.getValue(t);
      return dc(s, o.operator, o.value);
    }
    const r = e.getValue(t);
    return r == null ? false : zt(r).includes(zt(n));
  }, pc = {
    advanced: fc
  };
  function $n(e) {
    switch (e) {
      case "number":
      case "date":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "string":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "boolean":
        return {
          sortable: false,
          filterable: true,
          hiding: true
        };
      case "array":
      case "object":
        return {
          sortable: false,
          filterable: false,
          hiding: true
        };
      default:
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
    }
  }
  function gc(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : $n(t).sortable && n !== false;
  }
  function hc(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : $n(t).filterable && n === true;
  }
  function mc(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : $n(t).hiding && n !== false;
  }
  function Bo(e, t) {
    return Ir(e, t) ?? 0;
  }
  function Vo(e) {
    return (t, n, r) => Bo(t.getValue(r), e) - Bo(n.getValue(r), e);
  }
  function yc(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: r, renderConfiguredCell: o, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, a = new Map(n.map((g) => [
      g.path,
      g.dateFormat
    ])), d = new Map(n.map((g) => [
      g.path,
      g.type
    ])), c = r.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      header: ({ table: g }) => i(g),
      cell: ({ row: g }) => l(g),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let p;
    return t.length > 0 ? p = t.filter((g) => g.visible).map((g) => {
      var _a2, _b;
      const f = ((_a2 = g.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(g.path), h = d.get(g.path) || "string", m = ((_b = g.format) == null ? void 0 : _b.type) === "date" || h === "date";
      return {
        id: g.path,
        size: g.width ?? 150,
        accessorFn: (x) => (x == null ? void 0 : x[g.path]) ?? null,
        header: g.headerName || g.path,
        enableSorting: gc(g, h, r.tableSorting),
        enableColumnFilter: hc(g, h, r.tableFiltering),
        enableHiding: mc(g, h, r.tableHiding),
        ...m && {
          sortingFn: Vo(f),
          filterFn: Ho(f)
        },
        cell: ({ getValue: x }) => o(x(), g),
        meta: {
          align: g.align || "left",
          width: g.width,
          columnType: m ? "date" : h
        }
      };
    }) : p = n.map((g) => {
      const f = g.type === "date" && g.dateFormat, h = g.dateFormat, m = $n(g.type);
      return {
        id: g.path,
        size: 150,
        accessorFn: (x) => x[g.path],
        header: g.path.split(".").pop() || g.path,
        enableSorting: m.sortable && r.tableSorting,
        enableColumnFilter: m.filterable && r.tableFiltering,
        enableHiding: m.hiding && r.tableHiding,
        ...f && {
          sortingFn: Vo(h),
          filterFn: Ho(h)
        },
        cell: ({ getValue: x }) => s(x()),
        meta: {
          align: "left",
          columnType: g.type
        }
      };
    }), c ? [
      c,
      ...p
    ] : p;
  }
  function Wo({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: r = "string", featureType: o = "sortable" }) {
    const s = t === "auto" || t === void 0, i = $n(r), l = o === "sortable" ? i.sortable : i.filterable;
    let a, d;
    t === "auto" || t === void 0 ? (a = l && e, d = "json_table_source_auto") : (a = t, d = "json_table_source_override");
    const c = t !== void 0 && t !== "auto", p = (f, h) => f.replace(/\{(\w+)\}/g, (m, v) => v in h ? h[v] : m);
    let g;
    return t === "auto" || t === void 0 ? g = p(b.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? b.t("json_table_status_on") : b.t("json_table_status_off"),
      type: r
    }) : g = p(b.t("json_table_override_tooltip"), {
      feature: n
    }), u.jsx(ze, {
      title: g,
      arrow: true,
      children: u.jsxs(L, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          u.jsx(pt, {
            size: "small",
            label: u.jsx(L, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: a ? b.t("json_table_status_on") : b.t("json_table_status_off")
            }),
            color: a ? "success" : "default",
            variant: c ? "filled" : "outlined",
            sx: {
              height: 20,
              fontSize: "0.65rem",
              "& .MuiChip-label": {
                px: 0.75
              }
            }
          }),
          u.jsxs(I, {
            variant: "caption",
            color: c ? "warning.main" : "text.secondary",
            sx: {
              fontSize: "0.65rem",
              display: "flex",
              alignItems: "center",
              gap: 0.25
            },
            children: [
              b.t(d),
              s && u.jsx(pu, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              c && u.jsx(hu, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              })
            ]
          })
        ]
      })
    });
  }
  function bc({ column: e, discoveredColumn: t, onChange: n, globalSorting: r = true, globalFiltering: o = false }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((w) => {
      i(($) => ({
        ...$,
        [w]: !$[w]
      }));
    }, []), a = (t == null ? void 0 : t.type) || "string", d = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, $) => w + $, 0) : 0, [
      t
    ]), c = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), p = y.useMemo(() => e.headerName !== c || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      c
    ]), g = y.useCallback(() => {
      n({
        ...e,
        headerName: c,
        width: void 0,
        align: void 0,
        visible: true
      });
    }, [
      e,
      n,
      c
    ]), f = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = y.useCallback(() => {
      const { format: w, ...$ } = e;
      n($);
    }, [
      e,
      n
    ]), m = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), v = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: $, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), x = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), _ = y.useCallback(() => {
      const { sortable: w, filterable: $, ...R } = e;
      n({
        ...R,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), S = y.useCallback((w) => {
      var _a3, _b2;
      const $ = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const R = (_b2 = e.format) == null ? void 0 : _b2.type;
        R === "number" ? (delete $.numberDecimals, delete $.numberPrefix, delete $.numberSuffix, delete $.numberThousandsSeparator) : R === "date" ? (delete $.dateFormat, delete $.dateInputFormat) : R === "boolean" ? (delete $.booleanTrue, delete $.booleanFalse) : R === "string" && [
          "stringCase",
          "stringPrefix",
          "stringSuffix",
          "stringTrim",
          "stringMaxLength",
          "stringRegex",
          "stringRegexGroup",
          "stringRegexFlags",
          "stringFontWeight",
          "stringFontStyle",
          "stringFontSize",
          "stringTextColor"
        ].forEach((F) => {
          delete $[F];
        });
      }
      n({
        ...e,
        format: {
          ...$,
          ...w
        }
      });
    }, [
      e,
      n
    ]), j = y.useCallback((w) => {
      n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), M = y.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return u.jsxs(L, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        u.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            u.jsx(pt, {
              label: a,
              size: "small",
              sx: {
                backgroundColor: bn[a] || bn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            u.jsx(I, {
              variant: "subtitle2",
              sx: {
                fontFamily: "monospace",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              title: e.path,
              children: e.path
            })
          ]
        }),
        u.jsxs(Pe, {
          spacing: 1,
          children: [
            u.jsxs(zn, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                u.jsx(En, {
                  expandIcon: u.jsx(On, {}),
                  children: u.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_basic")
                      }),
                      u.jsx(ze, {
                        title: b.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(ve, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: u.jsx(fn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(kn, {
                  children: u.jsxs(Pe, {
                    spacing: 2,
                    children: [
                      u.jsx(me, {
                        label: b.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      u.jsx(me, {
                        label: b.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (w) => n({
                          ...e,
                          width: w.target.value ? parseInt(w.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: b.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      u.jsxs(ct, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          u.jsx(dt, {
                            children: b.t("json_table_align")
                          }),
                          u.jsxs(nt, {
                            label: b.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              u.jsx(Z, {
                                value: "left",
                                children: b.t("json_table_align_left")
                              }),
                              u.jsx(Z, {
                                value: "center",
                                children: b.t("json_table_align_center")
                              }),
                              u.jsx(Z, {
                                value: "right",
                                children: b.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      u.jsx(Ot, {
                        control: u.jsx(gn, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: u.jsx(I, {
                          variant: "body2",
                          children: b.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            u.jsxs(zn, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                u.jsx(En, {
                  expandIcon: u.jsx(On, {}),
                  children: u.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_formatting")
                      }),
                      u.jsx(ze, {
                        title: b.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(ve, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: u.jsx(fn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(kn, {
                  children: u.jsxs(Pe, {
                    spacing: 2,
                    children: [
                      u.jsxs(ct, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          u.jsx(dt, {
                            children: b.t("json_table_format_type")
                          }),
                          u.jsxs(nt, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: b.t("json_table_format_type"),
                            onChange: (w) => {
                              const $ = w.target.value;
                              $ === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : S({
                                type: $
                              });
                            },
                            children: [
                              u.jsxs(Z, {
                                value: "auto",
                                children: [
                                  b.t("json_table_format_type_auto"),
                                  ` (${a})`
                                ]
                              }),
                              u.jsx(Z, {
                                value: "string",
                                children: b.t("json_table_format_type_string")
                              }),
                              u.jsx(Z, {
                                value: "number",
                                children: b.t("json_table_format_type_number")
                              }),
                              u.jsx(Z, {
                                value: "date",
                                children: b.t("json_table_format_type_date")
                              }),
                              u.jsx(Z, {
                                value: "boolean",
                                children: b.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (a === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && u.jsx(Au, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: S,
                        discoveredColumn: t
                      }),
                      (a === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && u.jsx(Iu, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: S
                      }),
                      (a === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && u.jsx(Fu, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: S
                      }),
                      (a === "string" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "string") && u.jsx(Pu, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: S
                      }),
                      a !== "number" && a !== "date" && a !== "boolean" && a !== "string" && !e.format && u.jsx(I, {
                        variant: "body2",
                        color: "text.secondary",
                        children: b.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            u.jsxs(zn, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                u.jsx(En, {
                  expandIcon: u.jsx(On, {}),
                  children: u.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          u.jsx(I, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: b.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && u.jsx(pt, {
                            label: e.cellStyle.length,
                            size: "small",
                            color: "primary",
                            sx: {
                              height: 20,
                              fontSize: "0.7rem"
                            }
                          })
                        ]
                      }),
                      u.jsx(ze, {
                        title: b.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(ve, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: u.jsx(fn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(kn, {
                  children: u.jsx(uc, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: a,
                    onStyleChange: j,
                    onModeChange: M
                  })
                })
              ]
            }),
            u.jsxs(zn, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                u.jsx(En, {
                  expandIcon: u.jsx(On, {}),
                  children: u.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      u.jsx(I, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_advanced")
                      }),
                      u.jsx(ze, {
                        title: b.t("json_table_section_reset"),
                        children: u.jsx("span", {
                          children: u.jsx(ve, {
                            size: "small",
                            disabled: !x,
                            onClick: (w) => {
                              w.stopPropagation(), _();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: u.jsx(fn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                u.jsx(kn, {
                  children: u.jsxs(Pe, {
                    spacing: 2,
                    children: [
                      u.jsx(cc, {
                        globalSorting: r,
                        globalFiltering: o
                      }),
                      u.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          u.jsxs(ct, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              u.jsx(dt, {
                                children: b.t("json_table_sortable")
                              }),
                              u.jsxs(nt, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: b.t("json_table_sortable"),
                                onChange: (w) => n({
                                  ...e,
                                  sortable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  u.jsx(Z, {
                                    value: "auto",
                                    children: u.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  u.jsx(Z, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  u.jsx(Z, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          u.jsx(Wo, {
                            globalEnabled: r,
                            columnOverride: e.sortable,
                            featureLabel: b.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      u.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          u.jsxs(ct, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              u.jsx(dt, {
                                children: b.t("json_table_filterable")
                              }),
                              u.jsxs(nt, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: b.t("json_table_filterable"),
                                onChange: (w) => n({
                                  ...e,
                                  filterable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  u.jsx(Z, {
                                    value: "auto",
                                    children: u.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  u.jsx(Z, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  u.jsx(Z, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          u.jsx(Wo, {
                            globalEnabled: o,
                            columnOverride: e.filterable,
                            featureLabel: b.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && u.jsxs(gt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          u.jsx(I, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: b.t("json_table_analysis_info")
                          }),
                          u.jsxs(Pe, {
                            spacing: 0.5,
                            children: [
                              u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_type_label")
                                  }),
                                  u.jsx(pt, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: bn[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_confidence")
                                  }),
                                  u.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_nulls")
                                  }),
                                  u.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      d > 0 && ` (${Math.round(t.nullCount / d * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_distinct")
                                  }),
                                  u.jsx(I, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_range")
                                  }),
                                  u.jsxs(I, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  u.jsx(I, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_date_input_format")
                                  }),
                                  u.jsx(I, {
                                    variant: "caption",
                                    children: t.dateFormat
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  const vc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, xc = /^\d{4}-\d{2}-\d{2}$/, _c = /^(\d{2})\.(\d{2})\.(\d{4})$/, wc = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Cc = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Sc = /^(\d{2})\/(\d{2})\/(\d{4})$/, jc = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Rc = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Bn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function hr(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Vn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Mc = [
    {
      regex: vc,
      format: "ISO-8601"
    },
    {
      regex: xc,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Bn(n, t);
      }
    },
    {
      regex: Cc,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Bn(t, n) && Vn(r, o, s);
      }
    },
    {
      regex: wc,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return Bn(t, n) && Vn(r, o);
      }
    },
    {
      regex: _c,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Bn(t, n);
      }
    },
    {
      regex: Rc,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return hr(t, n) && Vn(r, o, s);
      }
    },
    {
      regex: jc,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return hr(t, n) && Vn(r, o);
      }
    },
    {
      regex: Sc,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return hr(t, n);
      }
    }
  ];
  function $c(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Mc) {
      const r = t.match(n.regex);
      if (r) {
        if (n.validate && !n.validate(r)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Ac(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Ic(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Ac(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = $c(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "string"
      };
    }
    return Array.isArray(e) ? {
      type: "array"
    } : typeof e == "object" ? {
      type: "object"
    } : {
      type: "string"
    };
  }
  function Fc(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Pc(e) {
    let t, n = 0;
    for (const [r, o] of Object.entries(e)) o > n && (t = r, n = o);
    return t;
  }
  function Tc(e) {
    return {
      path: e,
      typeCounts: {},
      dateFormatCounts: {},
      nullCount: 0,
      distinctValues: /* @__PURE__ */ new Set(),
      numMin: void 0,
      numMax: void 0,
      strLenMin: void 0,
      strLenMax: void 0,
      dateMin: void 0,
      dateMax: void 0,
      nonNullCount: 0
    };
  }
  function Go(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Dc(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const r = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", a = r[5] || "00", d = r[6] || "00";
        return `${i}-${s}-${o}T${l}:${a}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", a = r[5] || "00", d = r[6] || "00";
        return `${i}-${o}-${s}T${l}:${a}:${d}`;
      }
    }
    return null;
  }
  function zc(e, t, n = 100, r = 0.8) {
    const o = /* @__PURE__ */ new Map();
    for (const s of e) o.set(s, Tc(s));
    for (const s of t) for (const i of e) {
      const l = o.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const a = s[i], d = Ic(a);
      if (Go(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && Go(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const c = a.length;
        (l.strLenMin === void 0 || c < l.strLenMin) && (l.strLenMin = c), (l.strLenMax === void 0 || c > l.strLenMax) && (l.strLenMax = c);
      }
      if (d.dateFormat) {
        const c = Dc(a, d.dateFormat);
        c !== null && ((l.dateMin === void 0 || c < l.dateMin) && (l.dateMin = c), (l.dateMax === void 0 || c > l.dateMax) && (l.dateMax = c));
      }
    }
    return e.map((s) => {
      const i = o.get(s);
      let l = Fc(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < r && (l = "string");
      const a = l === "date" ? Pc(i.dateFormatCounts) : void 0, d = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, c = i.nonNullCount > 0 ? Math.round(d / i.nonNullCount * 100) / 100 : 0, p = {
        path: s,
        type: l,
        nullable: i.nullCount > 0,
        typeCounts: {
          ...i.typeCounts
        },
        nullCount: i.nullCount,
        distinctCount: i.distinctValues.size,
        confidence: c
      };
      return a && (p.dateFormat = a), l === "number" && (i.numMin !== void 0 && (p.min = i.numMin), i.numMax !== void 0 && (p.max = i.numMax)), l === "date" && (i.dateMin !== void 0 && (p.min = i.dateMin), i.dateMax !== void 0 && (p.max = i.dateMax)), (l === "string" || l === "mixed") && (i.strLenMin !== void 0 && (p.stringLengthMin = i.strLenMin), i.strLenMax !== void 0 && (p.stringLengthMax = i.strLenMax)), p;
    });
  }
  function or(e, t, n, r, o, s, i, l) {
    if (s > l.maxDepth && (l.maxDepth = s), s > i) {
      n[t] = e, r.add(t);
      return;
    }
    if (e == null) {
      n[t] = null, r.add(t);
      return;
    }
    if (Array.isArray(e)) {
      if (e.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (let a = 0; a < e.length; a++) {
        a > l.maxArrayIndex && (l.maxArrayIndex = a);
        const d = `${t}[${a}]`;
        or(e[a], d, n, r, o, s + 1, i, l);
      }
      return;
    }
    if (e !== null && typeof e == "object") {
      if (o.has(e)) {
        n[t] = "[Circular]", r.add(t);
        return;
      }
      o.add(e);
      const a = Object.keys(e);
      if (a.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (const d of a) {
        const c = t ? `${t}.${d}` : d;
        or(e[d], c, n, r, o, s + 1, i, l);
      }
      return;
    }
    n[t] = e, r.add(t);
  }
  function Ec(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), r = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, o = [];
    for (const i of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const d of Object.keys(i)) or(i[d], d, l, n, a, 1, t, r);
      else or(i, "_value", l, n, a, 0, t, r);
      o.push(l);
    }
    const s = Oc([
      ...n
    ]);
    for (const i of o) for (const l of s) l in i || (i[l] = null);
    return {
      paths: s,
      rows: o,
      maxDepth: r.maxDepth,
      maxArrayIndex: r.maxArrayIndex
    };
  }
  function Oc(e) {
    return e.sort((t, n) => {
      const r = Uo(t), o = Uo(n), s = Math.min(r.length, o.length);
      for (let i = 0; i < s; i++) {
        const l = r[i], a = o[i], d = qo(l), c = qo(a);
        if (d !== null && c !== null) {
          if (d !== c) return d - c;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return r.length - o.length;
    });
  }
  function Uo(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], o = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (o) {
        o[1] && n.push(o[1]);
        const s = o[2].match(/\[\d+\]/g);
        s && n.push(...s);
      } else n.push(t);
      return n;
    });
  }
  function qo(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const kc = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Fs(e, t) {
    const n = performance.now(), r = {
      ...kc,
      ...t
    };
    if (!e || e.length === 0) return {
      columns: [],
      rows: [],
      meta: {
        rowCount: 0,
        columnCount: 0,
        maxDepth: 0,
        maxArrayIndex: 0,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: 0,
        nullPercentage: 0,
        analysisTimeMs: 0
      }
    };
    const o = Ec(e, r.maxDepth), s = zc(o.paths, o.rows, r.maxDistinct, r.dateConfidenceThreshold), i = o.paths.length * o.rows.length, l = s.reduce((c, p) => c + p.nullCount, 0), a = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: s,
      rows: o.rows,
      meta: {
        rowCount: o.rows.length,
        columnCount: s.length,
        maxDepth: o.maxDepth,
        maxArrayIndex: o.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: l,
        nullPercentage: a,
        analysisTimeMs: d
      }
    };
  }
  function Nc(e, t) {
    return y.useMemo(() => Fs(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Lc({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: s, socket: i }) {
    const [l, a] = y.useState(n), [d, c] = y.useState(null), [p, g] = y.useState([]), [f, h] = y.useState(false), [m, v] = y.useState(false), [x, _] = y.useState(null), [S, j] = y.useState(null), M = y.useRef(false), w = y.useRef(() => Promise.resolve()), $ = y.useRef(n), R = y.useMemo(() => JSON.stringify(n), [
      n
    ]), P = y.useMemo(() => JSON.stringify(l) !== R, [
      l,
      R
    ]);
    y.useEffect(() => {
      e && (a(n), $.current = n, c(n.length > 0 ? n[0].path : null), M.current = false, j(null), _(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !M.current && (M.current = true, w.current());
    }, [
      e
    ]);
    const F = y.useCallback(async () => {
      h(true), j(null), _(null);
      try {
        const C = s.oid;
        if (!C) return;
        const z = await i.getState(C);
        if ((z == null ? void 0 : z.val) === null || (z == null ? void 0 : z.val) === void 0) return;
        let E;
        const N = z.val;
        if (typeof N == "string") try {
          const q = JSON.parse(N);
          E = Array.isArray(q) ? q : [
            q
          ];
        } catch {
          return;
        }
        else if (Array.isArray(N)) E = N;
        else if (typeof N == "object" && N !== null) E = [
          N
        ];
        else return;
        const te = s.tableMaxDepth || 10, U = Fs(E, {
          maxDepth: te
        });
        if (U.meta.maxDepth > te) {
          const q = b.t("json_table_depth_warning").replace("{{actual}}", String(U.meta.maxDepth)).replace("{{configured}}", String(te));
          _(q);
        }
        g(U.columns);
        const ge = new Map($.current.map((q) => [
          q.path,
          q
        ])), de = new Set(U.columns.map((q) => q.path)), se = $.current.filter((q) => de.has(q.path)), we = U.columns.filter((q) => !ge.has(q.path)).map((q) => ({
          path: q.path,
          visible: true,
          headerName: q.path.split(".").pop() || q.path,
          sortable: "auto",
          filterable: "auto"
        })), ie = [
          ...se,
          ...we
        ];
        a(ie), $.current = ie, c((q) => q === null && ie.length > 0 ? ie[0].path : q);
      } catch (C) {
        const z = C instanceof Error ? C.message : "Failed to discover columns";
        j(z);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    y.useEffect(() => {
      w.current = F;
    }, [
      F
    ]), y.useEffect(() => {
      $.current = l;
    }, [
      l
    ]);
    const D = y.useCallback((C) => {
      a((z) => z.map((E) => E.path === C.path ? C : E));
    }, []), J = y.useCallback((C) => {
      a(C);
    }, []), B = y.useCallback(() => {
      r(l), t();
    }, [
      l,
      r,
      t
    ]), ee = y.useCallback((C, z) => {
      if (z === "backdropClick" && P) {
        v(true);
        return;
      }
      t();
    }, [
      P,
      t
    ]), Q = y.useMemo(() => d ? l.find((C) => C.path === d) : null, [
      d,
      l
    ]), G = y.useMemo(() => d ? p.find((C) => C.path === d) : void 0, [
      d,
      p
    ]), H = y.useMemo(() => "json-table-column-editor-title", []);
    return u.jsxs(ri, {
      theme: o,
      children: [
        u.jsxs(Vr, {
          open: e,
          onClose: ee,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": H,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            u.jsx(Wr, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: H,
              children: u.jsxs(L, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  u.jsx(I, {
                    variant: "h6",
                    children: b.t("json_table_column_editor_title")
                  }),
                  u.jsx(ve, {
                    onClick: () => ee(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": b.t("close"),
                    children: u.jsx(Zn, {})
                  })
                ]
              })
            }),
            u.jsxs(Gr, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && u.jsx(qn, {
                  severity: "warning",
                  onClose: () => _(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                S && u.jsx(qn, {
                  severity: "error",
                  onClose: () => j(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: S
                }),
                u.jsxs(L, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    u.jsx(L, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: u.jsx(Cu, {
                        columns: l,
                        discoveredColumns: p,
                        selectedPath: d,
                        onSelect: c,
                        onChange: J,
                        onRefresh: F,
                        loading: f
                      })
                    }),
                    u.jsx(L, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: Q ? u.jsx(bc, {
                        column: Q,
                        discoveredColumn: G,
                        onChange: D,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : u.jsx(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: u.jsx(I, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? b.t("json_table_select_column") : b.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            u.jsxs(Br, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                u.jsx(rt, {
                  onClick: () => ee(),
                  children: b.t("cancel")
                }),
                u.jsx(rt, {
                  variant: "contained",
                  onClick: B,
                  disabled: !P,
                  children: b.t("save")
                })
              ]
            })
          ]
        }),
        u.jsx(da, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: u.jsx(qn, {
            severity: "warning",
            onClose: () => v(false),
            children: b.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Hc(e, t, n, r) {
    const o = e.name || "columnConfig", s = r.context.theme, [i, l] = y.useState(false), a = y.useMemo(() => Ms(t[o]), [
      t,
      o
    ]), d = a.filter((v) => v.visible).length, c = a.length, p = a.some((v) => v.format), g = a.some((v) => v.cellStyle && v.cellStyle.length > 0), f = y.useCallback((v) => {
      const x = JSON.stringify(v), _ = `b64:${_u(x)}`;
      n({
        [o]: _
      });
    }, [
      o,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), m = y.useCallback(() => {
      l(false);
    }, []);
    return u.jsxs(L, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        u.jsx(rt, {
          variant: "outlined",
          startIcon: u.jsx(vu, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": b.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: b.t("json_table_configure_columns")
        }),
        c > 0 && u.jsxs(I, {
          variant: "caption",
          color: "primary.main",
          sx: {
            mt: 0.5,
            display: "block"
          },
          "aria-live": "polite",
          children: [
            d,
            " / ",
            c,
            " ",
            b.t("json_table_columns_visible"),
            p && ` \xB7 ${b.t("json_table_has_formatting")}`,
            g && ` \xB7 ${b.t("json_table_has_styling")}`
          ]
        }),
        u.jsx(Lc, {
          open: i,
          onClose: m,
          columns: a,
          onSave: f,
          theme: s,
          data: t,
          socket: r.context.socket
        })
      ]
    });
  }
  const Bc = () => [
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Hc
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_features"
      })
    },
    {
      name: "tableSorting",
      type: "checkbox",
      label: "json_table_sorting",
      default: true
    },
    {
      name: "tableSortingMulti",
      type: "checkbox",
      label: "json_table_sorting_multi",
      default: false,
      tooltip: "json_table_sorting_multi_tooltip"
    },
    {
      name: "tableFiltering",
      type: "checkbox",
      label: "json_table_filtering",
      default: true,
      tooltip: "json_table_filtering_tooltip"
    },
    {
      name: "tableQuickFilter",
      type: "checkbox",
      label: "json_table_quick_filter",
      default: false
    },
    {
      name: "tableColumnMenu",
      type: "checkbox",
      label: "json_table_column_menu",
      default: true
    },
    {
      name: "tableHiding",
      type: "checkbox",
      label: "json_table_hiding",
      default: true,
      tooltip: "json_table_hiding_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_pagination"
      })
    },
    {
      name: "tablePagination",
      type: "checkbox",
      label: "json_table_pagination_enabled",
      default: true
    },
    {
      name: "tablePageSize",
      type: "number",
      label: "json_table_page_size",
      default: 25,
      min: 1
    },
    {
      name: "tablePageSizeOptions",
      type: "text",
      label: "json_table_page_size_options",
      default: "10,25,50,100",
      tooltip: "json_table_page_size_options_tooltip"
    },
    {
      name: "tableVirtualizeThreshold",
      type: "number",
      label: "json_table_virtualize_threshold",
      default: 50,
      min: 0,
      tooltip: "json_table_virtualize_threshold_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_selection"
      })
    },
    {
      name: "tableRowSelection",
      type: "checkbox",
      label: "json_table_row_selection",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_analysis"
      })
    },
    {
      name: "tableMaxDepth",
      type: "number",
      label: "json_table_max_depth",
      default: 10,
      min: 1,
      max: 50,
      tooltip: "json_table_max_depth_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_layout"
      })
    },
    {
      name: "tableDensity",
      label: "json_table_density",
      type: "select",
      options: [
        {
          value: "compact",
          label: "compact"
        },
        {
          value: "standard",
          label: "standard"
        },
        {
          value: "comfortable",
          label: "comfortable"
        }
      ],
      default: "standard",
      noTranslation: true
    },
    {
      name: "tableRowHeight",
      type: "number",
      label: "json_table_row_height",
      min: 20,
      tooltip: "json_table_row_height_tooltip"
    },
    {
      name: "tableHeaderHeight",
      type: "number",
      label: "json_table_header_height",
      min: 20
    },
    {
      name: "tableAutoSize",
      type: "checkbox",
      label: "json_table_auto_size",
      default: false
    },
    {
      name: "tableHeaderElevation",
      label: "json_table_header_elevation",
      type: "slider",
      min: 0,
      max: 24,
      step: 1,
      default: 6,
      tooltip: "json_table_header_elevation_tooltip"
    },
    {
      name: "jsonTablePadding",
      type: "number",
      label: "json_table_padding",
      default: 1,
      step: 0.5,
      min: 0
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "group_table_border"
      })
    },
    {
      name: "borderWidth",
      label: "table_border_width",
      type: "slider",
      min: 0,
      max: 20,
      step: 1,
      default: 0
    },
    {
      name: "borderStyle",
      label: "table_border_style",
      type: "select",
      options: [
        {
          value: "none",
          label: "none"
        },
        {
          value: "dotted",
          label: "dotted"
        },
        {
          value: "dashed",
          label: "dashed"
        },
        {
          value: "solid",
          label: "solid"
        },
        {
          value: "double",
          label: "double"
        },
        {
          value: "groove",
          label: "groove"
        },
        {
          value: "ridge",
          label: "ridge"
        },
        {
          value: "inset",
          label: "inset"
        },
        {
          value: "outset",
          label: "outset"
        },
        {
          value: "hidden",
          label: "hidden"
        }
      ],
      default: "solid",
      noTranslation: true
    },
    bt({
      name: "borderColor",
      label: "table_border_color",
      noGradient: true
    }),
    {
      name: "borderRadius",
      label: "table_border_radius",
      type: "text",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_header_style"
      })
    },
    bt({
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color"
    }),
    bt({
      name: "tableHeaderTextColor",
      label: "json_table_header_text_color",
      noGradient: true
    }),
    {
      name: "tableHeaderFontSize",
      type: "number",
      label: "json_table_header_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {})
    },
    {
      name: "headerBorderWidth",
      label: "json_table_header_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 0
    },
    bt({
      name: "headerBorderColor",
      label: "json_table_header_border_color",
      noGradient: true
    }),
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_borders"
      })
    },
    {
      name: "tableShowCellBorders",
      type: "checkbox",
      label: "json_table_show_cell_borders",
      default: false
    },
    {
      name: "verticalCellBorderWidth",
      label: "vertical_cell_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 1,
      hidden: "!data.tableShowCellBorders"
    },
    bt({
      name: "verticalCellBorderColor",
      label: "vertical_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowCellBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {})
    },
    {
      name: "tableShowRowBorders",
      type: "checkbox",
      label: "json_table_show_row_borders",
      default: true
    },
    {
      name: "horizontalCellBorderWidth",
      label: "horizontal_cell_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 1,
      hidden: "!data.tableShowRowBorders"
    },
    bt({
      name: "horizontalCellBorderColor",
      label: "horizontal_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowRowBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => u.jsx(qe, {
        dividerText: "json_table_cell_style"
      })
    },
    bt({
      name: "evenRowColor",
      label: "json_table_even_row_color"
    }),
    bt({
      name: "oddRowColor",
      label: "json_table_odd_row_color"
    })
  ];
  function _t(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ve(e, t) {
    return (n) => {
      t.setState((r) => ({
        ...r,
        [e]: _t(n, r[e])
      }));
    };
  }
  function ur(e) {
    return e instanceof Function;
  }
  function Vc(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Wc(e, t) {
    const n = [], r = (o) => {
      o.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && r(i);
      });
    };
    return r(e), n;
  }
  function O(e, t, n) {
    let r = [], o;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== r.length || l.some((c, p) => r[p] !== c))) return o;
      r = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
        const c = Math.round((Date.now() - i) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, g = p / 16, f = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${f(p, 5)} /${f(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return o;
    };
  }
  function k(e, t, n, r) {
    return {
      debug: () => {
        var o;
        return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
      },
      key: false,
      onChange: r
    };
  }
  function Gc(e, t, n, r) {
    const o = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: O(() => [
        e,
        n,
        t,
        s
      ], (i, l, a, d) => ({
        table: i,
        column: l,
        row: a,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), k(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function Uc(e, t, n, r) {
    var o, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let d = (o = (s = l.id) != null ? s : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, c;
    if (l.accessorFn ? c = l.accessorFn : a && (a.includes(".") ? c = (g) => {
      let f = g;
      for (const m of a.split(".")) {
        var h;
        f = (h = f) == null ? void 0 : h[m];
      }
      return f;
    } : c = (g) => g[l.accessorKey]), !d) throw new Error();
    let p = {
      id: `${String(d)}`,
      accessorFn: c,
      parent: r,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: O(() => [
        true
      ], () => {
        var g;
        return [
          p,
          ...(g = p.columns) == null ? void 0 : g.flatMap((f) => f.getFlatColumns())
        ];
      }, k(e.options, "debugColumns")),
      getLeafColumns: O(() => [
        e._getOrderColumnsFn()
      ], (g) => {
        var f;
        if ((f = p.columns) != null && f.length) {
          let h = p.columns.flatMap((m) => m.getLeafColumns());
          return g(h);
        }
        return [
          p
        ];
      }, k(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(p, e);
    return p;
  }
  const Me = "debugHeaders";
  function Yo(e, t, n) {
    var r;
    let s = {
      id: (r = n.id) != null ? r : t.id,
      column: t,
      index: n.index,
      isPlaceholder: !!n.isPlaceholder,
      placeholderId: n.placeholderId,
      depth: n.depth,
      subHeaders: [],
      colSpan: 0,
      rowSpan: 0,
      headerGroup: null,
      getLeafHeaders: () => {
        const i = [], l = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), i.push(a);
        };
        return l(s), i;
      },
      getContext: () => ({
        table: e,
        header: s,
        column: t
      })
    };
    return e._features.forEach((i) => {
      i.createHeader == null || i.createHeader(s, e);
    }), s;
  }
  const qc = {
    createTable: (e) => {
      e.getHeaderGroups = O(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => {
        var s, i;
        const l = (s = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], a = (i = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], d = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
        return Wn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, k(e.options, Me)), e.getCenterHeaderGroups = O(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), Wn(t, n, e, "center")), k(e.options, Me)), e.getLeftHeaderGroups = O(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Wn(t, s, e, "left");
      }, k(e.options, Me)), e.getRightHeaderGroups = O(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Wn(t, s, e, "right");
      }, k(e.options, Me)), e.getFooterGroups = O(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), k(e.options, Me)), e.getLeftFooterGroups = O(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), k(e.options, Me)), e.getCenterFooterGroups = O(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), k(e.options, Me)), e.getRightFooterGroups = O(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), k(e.options, Me)), e.getFlatHeaders = O(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), k(e.options, Me)), e.getLeftFlatHeaders = O(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), k(e.options, Me)), e.getCenterFlatHeaders = O(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), k(e.options, Me)), e.getRightFlatHeaders = O(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), k(e.options, Me)), e.getCenterLeafHeaders = O(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), k(e.options, Me)), e.getLeftLeafHeaders = O(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), k(e.options, Me)), e.getRightLeafHeaders = O(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), k(e.options, Me)), e.getLeafHeaders = O(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, r) => {
        var o, s, i, l, a, d;
        return [
          ...(o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : [],
          ...(i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : [],
          ...(a = (d = r[0]) == null ? void 0 : d.headers) != null ? a : []
        ].map((c) => c.getLeafHeaders()).flat();
      }, k(e.options, Me));
    }
  };
  function Wn(e, t, n, r) {
    var o, s;
    let i = 0;
    const l = function(g, f) {
      f === void 0 && (f = 1), i = Math.max(i, f), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, f + 1);
      }, 0);
    };
    l(e);
    let a = [];
    const d = (g, f) => {
      const h = {
        depth: f,
        id: [
          r,
          `${f}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      g.forEach((v) => {
        const x = [
          ...m
        ].reverse()[0], _ = v.column.depth === h.depth;
        let S, j = false;
        if (_ && v.column.parent ? S = v.column.parent : (S = v.column, j = true), x && (x == null ? void 0 : x.column) === S) x.subHeaders.push(v);
        else {
          const M = Yo(n, S, {
            id: [
              r,
              f,
              S.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((w) => w.column === S).length}` : void 0,
            depth: f,
            index: m.length
          });
          M.subHeaders.push(v), m.push(M);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), f > 0 && d(m, f - 1);
    }, c = t.map((g, f) => Yo(n, g, {
      depth: i,
      index: f
    }));
    d(c, i - 1), a.reverse();
    const p = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], p(h.subHeaders).forEach((S) => {
        let { colSpan: j, rowSpan: M } = S;
        m += j, x.push(M);
      })) : m = 1;
      const _ = Math.min(...x);
      return v = v + _, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return p((o = (s = a[0]) == null ? void 0 : s.headers) != null ? o : []), a;
  }
  const eo = (e, t, n, r, o, s, i) => {
    let l = {
      id: t,
      index: r,
      original: n,
      depth: o,
      parentId: i,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (a) => {
        if (l._valuesCache.hasOwnProperty(a)) return l._valuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return l._valuesCache[a] = d.accessorFn(l.original, r), l._valuesCache[a];
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a)) return l._uniqueValuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return d.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = d.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [
          l.getValue(a)
        ], l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var d;
        return (d = l.getValue(a)) != null ? d : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Wc(l.subRows, (a) => a.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let a = [], d = l;
        for (; ; ) {
          const c = d.getParentRow();
          if (!c) break;
          a.push(c), d = c;
        }
        return a.reverse();
      },
      getAllCells: O(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => Gc(e, l, d, d.id)), k(e.options, "debugRows")),
      _getAllCellsByColumnId: O(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, c) => (d[c.column.id] = c, d), {}), k(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, Yc = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, Ps = (e, t, n) => {
    var r, o;
    const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
  };
  Ps.autoRemove = (e) => Qe(e);
  const Ts = (e, t, n) => {
    var r;
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
  };
  Ts.autoRemove = (e) => Qe(e);
  const Ds = (e, t, n) => {
    var r;
    return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  Ds.autoRemove = (e) => Qe(e);
  const zs = (e, t, n) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
  };
  zs.autoRemove = (e) => Qe(e);
  const Es = (e, t, n) => !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
  Es.autoRemove = (e) => Qe(e) || !(e != null && e.length);
  const Os = (e, t, n) => n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
  Os.autoRemove = (e) => Qe(e) || !(e != null && e.length);
  const ks = (e, t, n) => e.getValue(t) === n;
  ks.autoRemove = (e) => Qe(e);
  const Ns = (e, t, n) => e.getValue(t) == n;
  Ns.autoRemove = (e) => Qe(e);
  const to = (e, t, n) => {
    let [r, o] = n;
    const s = e.getValue(t);
    return s >= r && s <= o;
  };
  to.resolveFilterValue = (e) => {
    let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(r) ? -1 / 0 : r, i = n === null || Number.isNaN(o) ? 1 / 0 : o;
    if (s > i) {
      const l = s;
      s = i, i = l;
    }
    return [
      s,
      i
    ];
  };
  to.autoRemove = (e) => Qe(e) || Qe(e[0]) && Qe(e[1]);
  const ut = {
    includesString: Ps,
    includesStringSensitive: Ts,
    equalsString: Ds,
    arrIncludes: zs,
    arrIncludesAll: Es,
    arrIncludesSome: Os,
    equals: ks,
    weakEquals: Ns,
    inNumberRange: to
  };
  function Qe(e) {
    return e == null || e === "";
  }
  const Jc = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Ve("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
        return typeof r == "string" ? ut.includesString : typeof r == "number" ? ut.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? ut.equals : Array.isArray(r) ? ut.arrIncludes : ut.weakEquals;
      }, e.getFilterFn = () => {
        var n, r;
        return ur(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : ut[e.columnDef.filterFn];
      }, e.getCanFilter = () => {
        var n, r, o;
        return ((n = e.columnDef.enableColumnFilter) != null ? n : true) && ((r = t.options.enableColumnFilters) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && !!e.accessorFn;
      }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
      }, e.getFilterIndex = () => {
        var n, r;
        return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
      }, e.setFilterValue = (n) => {
        t.setColumnFilters((r) => {
          const o = e.getFilterFn(), s = r == null ? void 0 : r.find((c) => c.id === e.id), i = _t(n, s ? s.value : void 0);
          if (Jo(o, i, e)) {
            var l;
            return (l = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: i
          };
          if (s) {
            var d;
            return (d = r == null ? void 0 : r.map((c) => c.id === e.id ? a : c)) != null ? d : [];
          }
          return r != null && r.length ? [
            ...r,
            a
          ] : [
            a
          ];
        });
      };
    },
    createRow: (e, t) => {
      e.columnFilters = {}, e.columnFiltersMeta = {};
    },
    createTable: (e) => {
      e.setColumnFilters = (t) => {
        const n = e.getAllLeafColumns(), r = (o) => {
          var s;
          return (s = _t(t, o)) == null ? void 0 : s.filter((i) => {
            const l = n.find((a) => a.id === i.id);
            if (l) {
              const a = l.getFilterFn();
              if (Jo(a, i.value, l)) return false;
            }
            return true;
          });
        };
        e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
      }, e.resetColumnFilters = (t) => {
        var n, r;
        e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
      }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
    }
  };
  function Jo(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Xc = (e, t, n) => n.reduce((r, o) => {
    const s = o.getValue(e);
    return r + (typeof s == "number" ? s : 0);
  }, 0), Kc = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r > s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, Qc = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r < s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, Zc = (e, t, n) => {
    let r, o;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
    }), [
      r,
      o
    ];
  }, ed = (e, t) => {
    let n = 0, r = 0;
    if (t.forEach((o) => {
      let s = o.getValue(e);
      s != null && (s = +s) >= s && (++n, r += s);
    }), n) return r / n;
  }, td = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!Vc(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2), o = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  }, nd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), rd = (e, t) => new Set(t.map((n) => n.getValue(e))).size, od = (e, t) => t.length, mr = {
    sum: Xc,
    min: Kc,
    max: Qc,
    extent: Zc,
    mean: ed,
    median: td,
    unique: nd,
    uniqueCount: rd,
    count: od
  }, sd = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
      },
      aggregationFn: "auto"
    }),
    getInitialState: (e) => ({
      grouping: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGroupingChange: Ve("grouping", e),
      groupedColumnMode: "reorder"
    }),
    createColumn: (e, t) => {
      e.toggleGrouping = () => {
        t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [
          ...n ?? [],
          e.id
        ]);
      }, e.getCanGroup = () => {
        var n, r;
        return ((n = e.columnDef.enableGrouping) != null ? n : true) && ((r = t.options.enableGrouping) != null ? r : true) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
      }, e.getIsGrouped = () => {
        var n;
        return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
      }, e.getGroupedIndex = () => {
        var n;
        return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
      }, e.getToggleGroupingHandler = () => {
        const n = e.getCanGroup();
        return () => {
          n && e.toggleGrouping();
        };
      }, e.getAutoAggregationFn = () => {
        const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
        if (typeof r == "number") return mr.sum;
        if (Object.prototype.toString.call(r) === "[object Date]") return mr.extent;
      }, e.getAggregationFn = () => {
        var n, r;
        if (!e) throw new Error();
        return ur(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : mr[e.columnDef.aggregationFn];
      };
    },
    createTable: (e) => {
      e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
        var n, r;
        e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
      }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
    },
    createRow: (e, t) => {
      e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
        if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
        const r = t.getColumn(n);
        return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
      }, e._groupingValuesCache = {};
    },
    createCell: (e, t, n, r) => {
      e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
        var o;
        return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
      };
    }
  };
  function id(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const r = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? r : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...r
    ];
  }
  const ld = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ve("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = O((n) => [
        vn(t, n)
      ], (n) => n.findIndex((r) => r.id === e.id), k(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var r;
        return ((r = vn(t, n)[0]) == null ? void 0 : r.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var r;
        const o = vn(t, n);
        return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = O(() => [
        e.getState().columnOrder,
        e.getState().grouping,
        e.options.groupedColumnMode
      ], (t, n, r) => (o) => {
        let s = [];
        if (!(t != null && t.length)) s = o;
        else {
          const i = [
            ...t
          ], l = [
            ...o
          ];
          for (; l.length && i.length; ) {
            const a = i.shift(), d = l.findIndex((c) => c.id === a);
            d > -1 && s.push(l.splice(d, 1)[0]);
          }
          s = [
            ...s,
            ...l
          ];
        }
        return id(s, n, r);
      }, k(e.options, "debugTable"));
    }
  }, yr = () => ({
    left: [],
    right: []
  }), ad = {
    getInitialState: (e) => ({
      columnPinning: yr(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ve("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
        t.setColumnPinning((o) => {
          var s, i;
          if (n === "right") {
            var l, a;
            return {
              left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((p) => !(r != null && r.includes(p))),
              right: [
                ...((a = o == null ? void 0 : o.right) != null ? a : []).filter((p) => !(r != null && r.includes(p))),
                ...r
              ]
            };
          }
          if (n === "left") {
            var d, c;
            return {
              left: [
                ...((d = o == null ? void 0 : o.left) != null ? d : []).filter((p) => !(r != null && r.includes(p))),
                ...r
              ],
              right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((p) => !(r != null && r.includes(p)))
            };
          }
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
            right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((p) => !(r != null && r.includes(p)))
          };
        });
      }, e.getCanPin = () => e.getLeafColumns().some((r) => {
        var o, s, i;
        return ((o = r.columnDef.enablePinning) != null ? o : true) && ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? s : true);
      }), e.getIsPinned = () => {
        const n = e.getLeafColumns().map((l) => l.id), { left: r, right: o } = t.getState().columnPinning, s = n.some((l) => r == null ? void 0 : r.includes(l)), i = n.some((l) => o == null ? void 0 : o.includes(l));
        return s ? "left" : i ? "right" : false;
      }, e.getPinnedIndex = () => {
        var n, r;
        const o = e.getIsPinned();
        return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
      };
    },
    createRow: (e, t) => {
      e.getCenterVisibleCells = O(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, r, o) => {
        const s = [
          ...r ?? [],
          ...o ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, k(t.options, "debugRows")), e.getLeftVisibleCells = O(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), k(t.options, "debugRows")), e.getRightVisibleCells = O(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), k(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, r;
        return e.setColumnPinning(t ? yr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : yr());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const r = e.getState().columnPinning;
        if (!t) {
          var o, s;
          return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e.getLeftLeafColumns = O(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), k(e.options, "debugColumns")), e.getRightLeafColumns = O(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), k(e.options, "debugColumns")), e.getCenterLeafColumns = O(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r) => {
        const o = [
          ...n ?? [],
          ...r ?? []
        ];
        return t.filter((s) => !o.includes(s.id));
      }, k(e.options, "debugColumns"));
    }
  };
  function ud(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Gn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, br = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), cd = {
    getDefaultColumnDef: () => Gn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: br(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Ve("columnSizing", e),
      onColumnSizingInfoChange: Ve("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, r, o;
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Gn.minSize, (r = s ?? e.columnDef.size) != null ? r : Gn.size), (o = e.columnDef.maxSize) != null ? o : Gn.maxSize);
      }, e.getStart = O((n) => [
        n,
        vn(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), k(t.options, "debugColumns")), e.getAfter = O((n) => [
        n,
        vn(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), k(t.options, "debugColumns")), e.resetSize = () => {
        t.setColumnSizing((n) => {
          let { [e.id]: r, ...o } = n;
          return o;
        });
      }, e.getCanResize = () => {
        var n, r;
        return ((n = e.columnDef.enableResizing) != null ? n : true) && ((r = t.options.enableColumnResizing) != null ? r : true);
      }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
    },
    createHeader: (e, t) => {
      e.getSize = () => {
        let n = 0;
        const r = (o) => {
          if (o.subHeaders.length) o.subHeaders.forEach(r);
          else {
            var s;
            n += (s = o.column.getSize()) != null ? s : 0;
          }
        };
        return r(e), n;
      }, e.getStart = () => {
        if (e.index > 0) {
          const n = e.headerGroup.headers[e.index - 1];
          return n.getStart() + n.getSize();
        }
        return 0;
      }, e.getResizeHandler = (n) => {
        const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
        return (s) => {
          if (!r || !o || (s.persist == null || s.persist(), vr(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              r.id,
              r.getSize()
            ]
          ], a = vr(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, c = (x, _) => {
            typeof _ == "number" && (t.setColumnSizingInfo((S) => {
              var j, M;
              const w = t.options.columnResizeDirection === "rtl" ? -1 : 1, $ = (_ - ((j = S == null ? void 0 : S.startOffset) != null ? j : 0)) * w, R = Math.max($ / ((M = S == null ? void 0 : S.startSize) != null ? M : 0), -0.999999);
              return S.columnSizingStart.forEach((P) => {
                let [F, D] = P;
                d[F] = Math.round(Math.max(D + D * R, 0) * 100) / 100;
              }), {
                ...S,
                deltaOffset: $,
                deltaPercentage: R
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((S) => ({
              ...S,
              ...d
            })));
          }, p = (x) => c("move", x), g = (x) => {
            c("end", x), t.setColumnSizingInfo((_) => ({
              ..._,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, f = ud(n), h = {
            moveHandler: (x) => p(x.clientX),
            upHandler: (x) => {
              f == null ? void 0 : f.removeEventListener("mousemove", h.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", h.upHandler), g(x.clientX);
            }
          }, m = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), p(x.touches[0].clientX), false),
            upHandler: (x) => {
              var _;
              f == null ? void 0 : f.removeEventListener("touchmove", m.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", m.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((_ = x.touches[0]) == null ? void 0 : _.clientX);
            }
          }, v = dd() ? {
            passive: false
          } : false;
          vr(s) ? (f == null ? void 0 : f.addEventListener("touchmove", m.moveHandler, v), f == null ? void 0 : f.addEventListener("touchend", m.upHandler, v)) : (f == null ? void 0 : f.addEventListener("mousemove", h.moveHandler, v), f == null ? void 0 : f.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((x) => ({
            ...x,
            startOffset: a,
            startSize: i,
            deltaOffset: 0,
            deltaPercentage: 0,
            columnSizingStart: l,
            isResizingColumn: r.id
          }));
        };
      };
    },
    createTable: (e) => {
      e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
        var n;
        e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
      }, e.resetHeaderSizeInfo = (t) => {
        var n;
        e.setColumnSizingInfo(t ? br() : (n = e.initialState.columnSizingInfo) != null ? n : br());
      }, e.getTotalSize = () => {
        var t, n;
        return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      }, e.getLeftTotalSize = () => {
        var t, n;
        return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      }, e.getCenterTotalSize = () => {
        var t, n;
        return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      }, e.getRightTotalSize = () => {
        var t, n;
        return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      };
    }
  };
  let Un = null;
  function dd() {
    if (typeof Un == "boolean") return Un;
    let e = false;
    try {
      const t = {
        get passive() {
          return e = true, false;
        }
      }, n = () => {
      };
      window.addEventListener("test", n, t), window.removeEventListener("test", n);
    } catch {
      e = false;
    }
    return Un = e, Un;
  }
  function vr(e) {
    return e.type === "touchstart";
  }
  const fd = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Ve("columnVisibility", e)
    }),
    createColumn: (e, t) => {
      e.toggleVisibility = (n) => {
        e.getCanHide() && t.setColumnVisibility((r) => ({
          ...r,
          [e.id]: n ?? !e.getIsVisible()
        }));
      }, e.getIsVisible = () => {
        var n, r;
        const o = e.columns;
        return (n = o.length ? o.some((s) => s.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : true;
      }, e.getCanHide = () => {
        var n, r;
        return ((n = e.columnDef.enableHiding) != null ? n : true) && ((r = t.options.enableHiding) != null ? r : true);
      }, e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      };
    },
    createRow: (e, t) => {
      e._getAllVisibleCells = O(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((r) => r.column.getIsVisible()), k(t.options, "debugRows")), e.getVisibleCells = O(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, r, o) => [
        ...n,
        ...r,
        ...o
      ], k(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, r) => O(() => [
        r(),
        r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")
      ], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), k(e.options, "debugColumns"));
      e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
        var r;
        e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
      }, e.toggleAllColumnsVisible = (n) => {
        var r;
        n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, s) => ({
          ...o,
          [s.id]: n || !(s.getCanHide != null && s.getCanHide())
        }), {}));
      }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var r;
        e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
      };
    }
  };
  function vn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const pd = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, gd = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ve("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
        return typeof r == "string" || typeof r == "number";
      }
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, r, o, s;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((r = t.options.enableGlobalFilter) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => ut.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: r } = e.options;
        return ur(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : ut[r];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, hd = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Ve("expanded", e),
      paginateExpandedRows: true
    }),
    createTable: (e) => {
      let t = false, n = false;
      e._autoResetExpanded = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = true;
          });
          return;
        }
        if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
          if (n) return;
          n = true, e._queue(() => {
            e.resetExpanded(), n = false;
          });
        }
      }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
        r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(true) : e.setExpanded({});
      }, e.resetExpanded = (r) => {
        var o, s;
        e.setExpanded(r ? {} : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null ? o : {});
      }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
        r.persist == null || r.persist(), e.toggleAllRowsExpanded();
      }, e.getIsSomeRowsExpanded = () => {
        const r = e.getState().expanded;
        return r === true || Object.values(r).some(Boolean);
      }, e.getIsAllRowsExpanded = () => {
        const r = e.getState().expanded;
        return typeof r == "boolean" ? r === true : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
      }, e.getExpandedDepth = () => {
        let r = 0;
        return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
          const i = s.split(".");
          r = Math.max(r, i.length);
        }), r;
      }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
    },
    createRow: (e, t) => {
      e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          var o;
          const s = r === true ? true : !!(r != null && r[e.id]);
          let i = {};
          if (r === true ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
            i[l] = true;
          }) : i = r, n = (o = n) != null ? o : !s, !s && n) return {
            ...i,
            [e.id]: true
          };
          if (s && !n) {
            const { [e.id]: l, ...a } = i;
            return a;
          }
          return r;
        });
      }, e.getIsExpanded = () => {
        var n;
        const r = t.getState().expanded;
        return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === true || (r == null ? void 0 : r[e.id]));
      }, e.getCanExpand = () => {
        var n, r, o;
        return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : true) && !!((o = e.subRows) != null && o.length);
      }, e.getIsAllParentsExpanded = () => {
        let n = true, r = e;
        for (; n && r.parentId; ) r = t.getRow(r.parentId, true), n = r.getIsExpanded();
        return n;
      }, e.getToggleExpandedHandler = () => {
        const n = e.getCanExpand();
        return () => {
          n && e.toggleExpanded();
        };
      };
    }
  }, zr = 0, Er = 10, xr = () => ({
    pageIndex: zr,
    pageSize: Er
  }), md = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...xr(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Ve("pagination", e)
    }),
    createTable: (e) => {
      let t = false, n = false;
      e._autoResetPageIndex = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = true;
          });
          return;
        }
        if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
          if (n) return;
          n = true, e._queue(() => {
            e.resetPageIndex(), n = false;
          });
        }
      }, e.setPagination = (r) => {
        const o = (s) => _t(r, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
      }, e.resetPagination = (r) => {
        var o;
        e.setPagination(r ? xr() : (o = e.initialState.pagination) != null ? o : xr());
      }, e.setPageIndex = (r) => {
        e.setPagination((o) => {
          let s = _t(r, o.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...o,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (r) => {
        var o, s;
        e.setPageIndex(r ? zr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : zr);
      }, e.resetPageSize = (r) => {
        var o, s;
        e.setPageSize(r ? Er : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Er);
      }, e.setPageSize = (r) => {
        e.setPagination((o) => {
          const s = Math.max(1, _t(r, o.pageSize)), i = o.pageSize * o.pageIndex, l = Math.floor(i / s);
          return {
            ...o,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (r) => e.setPagination((o) => {
        var s;
        let i = _t(r, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...o,
          pageCount: i
        };
      }), e.getPageOptions = O(() => [
        e.getPageCount()
      ], (r) => {
        let o = [];
        return r && r > 0 && (o = [
          ...new Array(r)
        ].fill(null).map((s, i) => i)), o;
      }, k(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
        const { pageIndex: r } = e.getState().pagination, o = e.getPageCount();
        return o === -1 ? true : o === 0 ? false : r < o - 1;
      }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
        var r;
        return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
      }, e.getRowCount = () => {
        var r;
        return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
      };
    }
  }, _r = () => ({
    top: [],
    bottom: []
  }), yd = {
    getInitialState: (e) => ({
      rowPinning: _r(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ve("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, r, o) => {
        const s = r ? e.getLeafRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], i = o ? e.getParentRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], l = /* @__PURE__ */ new Set([
          ...i,
          e.id,
          ...s
        ]);
        t.setRowPinning((a) => {
          var d, c;
          if (n === "bottom") {
            var p, g;
            return {
              top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((m) => !(l != null && l.has(m))),
              bottom: [
                ...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var f, h;
            return {
              top: [
                ...((f = a == null ? void 0 : a.top) != null ? f : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ],
              bottom: ((h = a == null ? void 0 : a.bottom) != null ? h : []).filter((m) => !(l != null && l.has(m)))
            };
          }
          return {
            top: ((d = a == null ? void 0 : a.top) != null ? d : []).filter((m) => !(l != null && l.has(m))),
            bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((m) => !(l != null && l.has(m)))
          };
        });
      }, e.getCanPin = () => {
        var n;
        const { enableRowPinning: r, enablePinning: o } = t.options;
        return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : true;
      }, e.getIsPinned = () => {
        const n = [
          e.id
        ], { top: r, bottom: o } = t.getState().rowPinning, s = n.some((l) => r == null ? void 0 : r.includes(l)), i = n.some((l) => o == null ? void 0 : o.includes(l));
        return s ? "top" : i ? "bottom" : false;
      }, e.getPinnedIndex = () => {
        var n, r;
        const o = e.getIsPinned();
        if (!o) return -1;
        const s = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((i) => {
          let { id: l } = i;
          return l;
        });
        return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
      };
    },
    createTable: (e) => {
      e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
        var n, r;
        return e.setRowPinning(t ? _r() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : _r());
      }, e.getIsSomeRowsPinned = (t) => {
        var n;
        const r = e.getState().rowPinning;
        if (!t) {
          var o, s;
          return !!((o = r.top) != null && o.length || (s = r.bottom) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e._getPinnedRows = (t, n, r) => {
        var o;
        return ((o = e.options.keepPinnedRows) == null || o ? (n ?? []).map((i) => {
          const l = e.getRow(i, true);
          return l.getIsAllParentsExpanded() ? l : null;
        }) : (n ?? []).map((i) => t.find((l) => l.id === i))).filter(Boolean).map((i) => ({
          ...i,
          position: r
        }));
      }, e.getTopRows = O(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), k(e.options, "debugRows")), e.getBottomRows = O(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), k(e.options, "debugRows")), e.getCenterRows = O(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, r) => {
        const o = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...r ?? []
        ]);
        return t.filter((s) => !o.has(s.id));
      }, k(e.options, "debugRows"));
    }
  }, bd = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Ve("rowSelection", e),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
    }),
    createTable: (e) => {
      e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
        var n;
        return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
      }, e.toggleAllRowsSelected = (t) => {
        e.setRowSelection((n) => {
          t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
          const r = {
            ...n
          }, o = e.getPreGroupedRowModel().flatRows;
          return t ? o.forEach((s) => {
            s.getCanSelect() && (r[s.id] = true);
          }) : o.forEach((s) => {
            delete r[s.id];
          }), r;
        });
      }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
        const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
          ...n
        };
        return e.getRowModel().rows.forEach((s) => {
          Or(o, s.id, r, true, e);
        }), o;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = O(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? wr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, k(e.options, "debugTable")), e.getFilteredSelectedRowModel = O(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? wr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, k(e.options, "debugTable")), e.getGroupedSelectedRowModel = O(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? wr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, k(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
        const t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState();
        let r = !!(t.length && Object.keys(n).length);
        return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = false), r;
      }, e.getIsAllPageRowsSelected = () => {
        const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), { rowSelection: n } = e.getState();
        let r = !!t.length;
        return r && t.some((o) => !n[o.id]) && (r = false), r;
      }, e.getIsSomeRowsSelected = () => {
        var t;
        const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
        return n > 0 && n < e.getFilteredRowModel().flatRows.length;
      }, e.getIsSomePageRowsSelected = () => {
        const t = e.getPaginationRowModel().flatRows;
        return e.getIsAllPageRowsSelected() ? false : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
      }, e.getToggleAllRowsSelectedHandler = () => (t) => {
        e.toggleAllRowsSelected(t.target.checked);
      }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
        e.toggleAllPageRowsSelected(t.target.checked);
      };
    },
    createRow: (e, t) => {
      e.toggleSelected = (n, r) => {
        const o = e.getIsSelected();
        t.setRowSelection((s) => {
          var i;
          if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n) return s;
          const l = {
            ...s
          };
          return Or(l, e.id, n, (i = r == null ? void 0 : r.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return no(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return kr(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return kr(e, n) === "all";
      }, e.getCanSelect = () => {
        var n;
        return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : true;
      }, e.getCanSelectSubRows = () => {
        var n;
        return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : true;
      }, e.getCanMultiSelect = () => {
        var n;
        return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : true;
      }, e.getToggleSelectedHandler = () => {
        const n = e.getCanSelect();
        return (r) => {
          var o;
          n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
        };
      };
    }
  }, Or = (e, t, n, r, o) => {
    var s;
    const i = o.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => Or(e, l.id, n, r, o));
  };
  function wr(e, t) {
    const n = e.getState().rowSelection, r = [], o = {}, s = function(i, l) {
      return i.map((a) => {
        var d;
        const c = no(a, n);
        if (c && (r.push(a), o[a.id] = a), (d = a.subRows) != null && d.length && (a = {
          ...a,
          subRows: s(a.subRows)
        }), c) return a;
      }).filter(Boolean);
    };
    return {
      rows: s(t.rows),
      flatRows: r,
      rowsById: o
    };
  }
  function no(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function kr(e, t, n) {
    var r;
    if (!((r = e.subRows) != null && r.length)) return false;
    let o = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !o) && (i.getCanSelect() && (no(i, t) ? s = true : o = false), i.subRows && i.subRows.length)) {
        const l = kr(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), o = false);
      }
    }), o ? "all" : s ? "some" : false;
  }
  const Nr = /([0-9]+)/gm, vd = (e, t, n) => Ls(wt(e.getValue(n)).toLowerCase(), wt(t.getValue(n)).toLowerCase()), xd = (e, t, n) => Ls(wt(e.getValue(n)), wt(t.getValue(n))), _d = (e, t, n) => ro(wt(e.getValue(n)).toLowerCase(), wt(t.getValue(n)).toLowerCase()), wd = (e, t, n) => ro(wt(e.getValue(n)), wt(t.getValue(n))), Cd = (e, t, n) => {
    const r = e.getValue(n), o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  }, Sd = (e, t, n) => ro(e.getValue(n), t.getValue(n));
  function ro(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function wt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Ls(e, t) {
    const n = e.split(Nr).filter(Boolean), r = t.split(Nr).filter(Boolean);
    for (; n.length && r.length; ) {
      const o = n.shift(), s = r.shift(), i = parseInt(o, 10), l = parseInt(s, 10), a = [
        i,
        l
      ].sort();
      if (isNaN(a[0])) {
        if (o > s) return 1;
        if (s > o) return -1;
        continue;
      }
      if (isNaN(a[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
    return n.length - r.length;
  }
  const un = {
    alphanumeric: vd,
    alphanumericCaseSensitive: xd,
    text: _d,
    textCaseSensitive: wd,
    datetime: Cd,
    basic: Sd
  }, jd = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Ve("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let r = false;
        for (const o of n) {
          const s = o == null ? void 0 : o.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return un.datetime;
          if (typeof s == "string" && (r = true, s.split(Nr).length > 1)) return un.alphanumeric;
        }
        return r ? un.text : un.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, r;
        if (!e) throw new Error();
        return ur(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : un[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, r) => {
        const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((f) => f.id === e.id), a = i == null ? void 0 : i.findIndex((f) => f.id === e.id);
          let d = [], c, p = s ? n : o === "desc";
          if (i != null && i.length && e.getCanMultiSort() && r ? l ? c = "toggle" : c = "add" : i != null && i.length && a !== i.length - 1 ? c = "replace" : l ? c = "toggle" : c = "replace", c === "toggle" && (s || o || (c = "remove")), c === "add") {
            var g;
            d = [
              ...i,
              {
                id: e.id,
                desc: p
              }
            ], d.splice(0, d.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else c === "toggle" ? d = i.map((f) => f.id === e.id ? {
            ...f,
            desc: p
          } : f) : c === "remove" ? d = i.filter((f) => f.id !== e.id) : d = [
            {
              id: e.id,
              desc: p
            }
          ];
          return d;
        });
      }, e.getFirstSortDir = () => {
        var n, r;
        return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
      }, e.getNextSortingOrder = (n) => {
        var r, o;
        const s = e.getFirstSortDir(), i = e.getIsSorted();
        return i ? i !== s && ((r = t.options.enableSortingRemoval) == null || r) && (!(n && (o = t.options.enableMultiRemove) != null) || o) ? false : i === "desc" ? "asc" : "desc" : s;
      }, e.getCanSort = () => {
        var n, r;
        return ((n = e.columnDef.enableSorting) != null ? n : true) && ((r = t.options.enableSorting) != null ? r : true) && !!e.accessorFn;
      }, e.getCanMultiSort = () => {
        var n, r;
        return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
      }, e.getIsSorted = () => {
        var n;
        const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
        return r ? r.desc ? "desc" : "asc" : false;
      }, e.getSortIndex = () => {
        var n, r;
        return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
      }, e.clearSorting = () => {
        t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
      }, e.getToggleSortingHandler = () => {
        const n = e.getCanSort();
        return (r) => {
          n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : false));
        };
      };
    },
    createTable: (e) => {
      e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
        var n, r;
        e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
      }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
    }
  }, Rd = [
    qc,
    fd,
    ld,
    ad,
    Yc,
    Jc,
    pd,
    gd,
    jd,
    sd,
    hd,
    md,
    yd,
    bd,
    cd
  ];
  function Md(e) {
    var t, n;
    const r = [
      ...Rd,
      ...(t = e._features) != null ? t : []
    ];
    let o = {
      _features: r
    };
    const s = o._features.reduce((g, f) => Object.assign(g, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), i = (g) => o.options.mergeOptions ? o.options.mergeOptions(s, g) : {
      ...s,
      ...g
    };
    let a = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    o._features.forEach((g) => {
      var f;
      a = (f = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? f : a;
    });
    const d = [];
    let c = false;
    const p = {
      _features: r,
      options: {
        ...s,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        d.push(g), c || (c = true, Promise.resolve().then(() => {
          for (; d.length; ) d.shift()();
          c = false;
        }).catch((f) => setTimeout(() => {
          throw f;
        })));
      },
      reset: () => {
        o.setState(o.initialState);
      },
      setOptions: (g) => {
        const f = _t(g, o.options);
        o.options = i(f);
      },
      getState: () => o.options.state,
      setState: (g) => {
        o.options.onStateChange == null || o.options.onStateChange(g);
      },
      _getRowId: (g, f, h) => {
        var m;
        return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(g, f, h)) != null ? m : `${h ? [
          h.id,
          f
        ].join(".") : f}`;
      },
      getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
      getRowModel: () => o.getPaginationRowModel(),
      getRow: (g, f) => {
        let h = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
        if (!h && (h = o.getCoreRowModel().rowsById[g], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: O(() => [
        o.options.defaultColumn
      ], (g) => {
        var f;
        return g = (f = g) != null ? f : {}, {
          header: (h) => {
            const m = h.header.column.columnDef;
            return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
          },
          cell: (h) => {
            var m, v;
            return (m = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? m : null;
          },
          ...o._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, k(e, "debugColumns")),
      _getColumnDefs: () => o.options.columns,
      getAllColumns: O(() => [
        o._getColumnDefs()
      ], (g) => {
        const f = function(h, m, v) {
          return v === void 0 && (v = 0), h.map((x) => {
            const _ = Uc(o, x, v, m), S = x;
            return _.columns = S.columns ? f(S.columns, _, v + 1) : [], _;
          });
        };
        return f(g);
      }, k(e, "debugColumns")),
      getAllFlatColumns: O(() => [
        o.getAllColumns()
      ], (g) => g.flatMap((f) => f.getFlatColumns()), k(e, "debugColumns")),
      _getAllFlatColumnsById: O(() => [
        o.getAllFlatColumns()
      ], (g) => g.reduce((f, h) => (f[h.id] = h, f), {}), k(e, "debugColumns")),
      getAllLeafColumns: O(() => [
        o.getAllColumns(),
        o._getOrderColumnsFn()
      ], (g, f) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return f(h);
      }, k(e, "debugColumns")),
      getColumn: (g) => o._getAllFlatColumnsById()[g]
    };
    Object.assign(o, p);
    for (let g = 0; g < o._features.length; g++) {
      const f = o._features[g];
      f == null || f.createTable == null || f.createTable(o);
    }
    return o;
  }
  function $d() {
    return (e) => O(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, r = function(o, s, i) {
        s === void 0 && (s = 0);
        const l = [];
        for (let d = 0; d < o.length; d++) {
          const c = eo(e, e._getRowId(o[d], d, i), o[d], d, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(c), n.rowsById[c.id] = c, l.push(c), e.options.getSubRows) {
            var a;
            c.originalSubRows = e.options.getSubRows(o[d], d), (a = c.originalSubRows) != null && a.length && (c.subRows = r(c.originalSubRows, s + 1, c));
          }
        }
        return l;
      };
      return n.rows = r(t), n;
    }, k(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function Ad(e) {
    const t = [], n = (r) => {
      var o;
      t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
    };
    return e.rows.forEach(n), {
      rows: t,
      flatRows: e.flatRows,
      rowsById: e.rowsById
    };
  }
  function Id(e, t, n) {
    return n.options.filterFromLeafRows ? Fd(e, t, n) : Pd(e, t, n);
  }
  function Fd(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const c = [];
      for (let g = 0; g < a.length; g++) {
        var p;
        let f = a[g];
        const h = eo(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
        if (h.columnFilters = f.columnFilters, (p = f.subRows) != null && p.length && d < i) {
          if (h.subRows = l(f.subRows, d + 1), f = h, t(f) && !h.subRows.length) {
            c.push(f), s[f.id] = f, o.push(f);
            continue;
          }
          if (t(f) || h.subRows.length) {
            c.push(f), s[f.id] = f, o.push(f);
            continue;
          }
        } else f = h, t(f) && (c.push(f), s[f.id] = f, o.push(f));
      }
      return c;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Pd(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const c = [];
      for (let g = 0; g < a.length; g++) {
        let f = a[g];
        if (t(f)) {
          var p;
          if ((p = f.subRows) != null && p.length && d < i) {
            const m = eo(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
            m.subRows = l(f.subRows, d + 1), f = m;
          }
          c.push(f), o.push(f), s[f.id] = f;
        }
      }
      return c;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Td() {
    return (e) => O(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, r) => {
      if (!t.rows.length || !(n != null && n.length) && !r) {
        for (let g = 0; g < t.flatRows.length; g++) t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
        return t;
      }
      const o = [], s = [];
      (n ?? []).forEach((g) => {
        var f;
        const h = e.getColumn(g.id);
        if (!h) return;
        const m = h.getFilterFn();
        m && o.push({
          id: g.id,
          filterFn: m,
          resolvedValue: (f = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(g.value)) != null ? f : g.value
        });
      });
      const i = (n ?? []).map((g) => g.id), l = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
      r && l && a.length && (i.push("__global__"), a.forEach((g) => {
        var f;
        s.push({
          id: g.id,
          filterFn: l,
          resolvedValue: (f = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(r)) != null ? f : r
        });
      }));
      let d, c;
      for (let g = 0; g < t.flatRows.length; g++) {
        const f = t.flatRows[g];
        if (f.columnFilters = {}, o.length) for (let h = 0; h < o.length; h++) {
          d = o[h];
          const m = d.id;
          f.columnFilters[m] = d.filterFn(f, m, d.resolvedValue, (v) => {
            f.columnFiltersMeta[m] = v;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            c = s[h];
            const m = c.id;
            if (c.filterFn(f, m, c.resolvedValue, (v) => {
              f.columnFiltersMeta[m] = v;
            })) {
              f.columnFilters.__global__ = true;
              break;
            }
          }
          f.columnFilters.__global__ !== true && (f.columnFilters.__global__ = false);
        }
      }
      const p = (g) => {
        for (let f = 0; f < i.length; f++) if (g.columnFilters[i[f]] === false) return false;
        return true;
      };
      return Id(t.rows, p, e);
    }, k(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function Dd(e) {
    return (t) => O(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, r) => {
      if (!r.rows.length) return r;
      const { pageSize: o, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: a } = r;
      const d = o * s, c = d + o;
      i = i.slice(d, c);
      let p;
      t.options.paginateExpandedRows ? p = {
        rows: i,
        flatRows: l,
        rowsById: a
      } : p = Ad({
        rows: i,
        flatRows: l,
        rowsById: a
      }), p.flatRows = [];
      const g = (f) => {
        p.flatRows.push(f), f.subRows.length && f.subRows.forEach(g);
      };
      return p.rows.forEach(g), p;
    }, k(t.options, "debugTable"));
  }
  function zd() {
    return (e) => O(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const r = e.getState().sorting, o = [], s = r.filter((a) => {
        var d;
        return (d = e.getColumn(a.id)) == null ? void 0 : d.getCanSort();
      }), i = {};
      s.forEach((a) => {
        const d = e.getColumn(a.id);
        d && (i[a.id] = {
          sortUndefined: d.columnDef.sortUndefined,
          invertSorting: d.columnDef.invertSorting,
          sortingFn: d.getSortingFn()
        });
      });
      const l = (a) => {
        const d = a.map((c) => ({
          ...c
        }));
        return d.sort((c, p) => {
          for (let f = 0; f < s.length; f += 1) {
            var g;
            const h = s[f], m = i[h.id], v = m.sortUndefined, x = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let _ = 0;
            if (v) {
              const S = c.getValue(h.id), j = p.getValue(h.id), M = S === void 0, w = j === void 0;
              if (M || w) {
                if (v === "first") return M ? -1 : 1;
                if (v === "last") return M ? 1 : -1;
                _ = M && w ? 0 : M ? v : -v;
              }
            }
            if (_ === 0 && (_ = m.sortingFn(c, p, h.id)), _ !== 0) return x && (_ *= -1), m.invertSorting && (_ *= -1), _;
          }
          return c.index - p.index;
        }), d.forEach((c) => {
          var p;
          o.push(c), (p = c.subRows) != null && p.length && (c.subRows = l(c.subRows));
        }), d;
      };
      return {
        rows: l(n.rows),
        flatRows: o,
        rowsById: n.rowsById
      };
    }, k(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function cn(e, t) {
    return e ? Ed(e) ? y.createElement(e, t) : e : null;
  }
  function Ed(e) {
    return Od(e) || typeof e == "function" || kd(e);
  }
  function Od(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function kd(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Nd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: Md(t)
    })), [r, o] = y.useState(() => n.current.initialState);
    return n.current.setOptions((s) => ({
      ...s,
      ...e,
      state: {
        ...r,
        ...e.state
      },
      onStateChange: (i) => {
        o(i), e.onStateChange == null || e.onStateChange(i);
      }
    })), n.current;
  }
  function Wt(e, t, n) {
    let r = n.initialDeps ?? [], o, s = true;
    function i() {
      var l, a, d;
      let c;
      n.key && ((l = n.debug) != null && l.call(n)) && (c = Date.now());
      const p = e();
      if (!(p.length !== r.length || p.some((h, m) => r[m] !== h))) return o;
      r = p;
      let f;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (f = Date.now()), o = t(...p), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - c) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, v = m / 16, x = (_, S) => {
          for (_ = String(_); _.length < S; ) _ = " " + _;
          return _;
        };
        console.info(`%c\u23F1 ${x(m, 5)} /${x(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * v, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(o), s = false, o;
    }
    return i.updateDeps = (l) => {
      r = l;
    }, i;
  }
  function Xo(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const Ld = (e, t) => Math.abs(e - t) < 1.01, Hd = (e, t, n) => {
    let r;
    return function(...o) {
      e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
    };
  }, Ko = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Bd = (e) => e, Vd = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
    for (let o = t; o <= n; o++) r.push(o);
    return r;
  }, Wd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    const o = (i) => {
      const { width: l, height: a } = i;
      t({
        width: Math.round(l),
        height: Math.round(a)
      });
    };
    if (o(Ko(n)), !r.ResizeObserver) return () => {
    };
    const s = new r.ResizeObserver((i) => {
      const l = () => {
        const a = i[0];
        if (a == null ? void 0 : a.borderBoxSize) {
          const d = a.borderBoxSize[0];
          if (d) {
            o({
              width: d.inlineSize,
              height: d.blockSize
            });
            return;
          }
        }
        o(Ko(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, Qo = {
    passive: true
  }, Zo = typeof window > "u" ? true : "onscrollend" in window, Gd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    let o = 0;
    const s = e.options.useScrollendEvent && Zo ? () => {
    } : Hd(r, () => {
      t(o, false);
    }, e.options.isScrollingResetDelay), i = (c) => () => {
      const { horizontal: p, isRtl: g } = e.options;
      o = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, s(), t(o, c);
    }, l = i(true), a = i(false);
    n.addEventListener("scroll", l, Qo);
    const d = e.options.useScrollendEvent && Zo;
    return d && n.addEventListener("scrollend", a, Qo), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, Ud = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const r = t.borderBoxSize[0];
      if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, qd = (e, { adjustments: t = 0, behavior: n }, r) => {
    var o, s;
    const i = e + t;
    (s = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || s.call(o, {
      [r.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class Yd {
    constructor(t) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
        let n = null;
        const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
          o.forEach((s) => {
            const i = () => {
              this._measureElement(s.target, s);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
          });
        }));
        return {
          disconnect: () => {
            var o;
            (o = r()) == null || o.disconnect(), n = null;
          },
          observe: (o) => {
            var s;
            return (s = r()) == null ? void 0 : s.observe(o, {
              box: "border-box"
            });
          },
          unobserve: (o) => {
            var s;
            return (s = r()) == null ? void 0 : s.unobserve(o);
          }
        };
      })(), this.range = null, this.setOptions = (n) => {
        Object.entries(n).forEach(([r, o]) => {
          typeof o > "u" && delete n[r];
        }), this.options = {
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: Bd,
          rangeExtractor: Vd,
          onChange: () => {
          },
          measureElement: Ud,
          initialRect: {
            width: 0,
            height: 0
          },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: true,
          isRtl: false,
          useScrollendEvent: false,
          useAnimationFrameWithResizeObserver: false,
          ...n
        };
      }, this.notify = (n) => {
        var r, o;
        (o = (r = this.options).onChange) == null || o.call(r, this, n);
      }, this.maybeNotify = Wt(() => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]), (n) => {
        this.notify(n);
      }, {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }), this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
      }, this._didMount = () => () => {
        this.cleanup();
      }, this._willUpdate = () => {
        var n;
        const r = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== r) {
          if (this.cleanup(), !r) {
            this.maybeNotify();
            return;
          }
          this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
            this.observer.observe(o);
          }), this.unsubs.push(this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })), this.unsubs.push(this.options.observeElementOffset(this, (o, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = s, this.maybeNotify();
          })), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
        const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        for (let i = r - 1; i >= 0; i--) {
          const l = n[i];
          if (o.has(l.lane)) continue;
          const a = s.get(l.lane);
          if (a == null || l.end > a.end ? s.set(l.lane, l) : l.end < a.end && o.set(l.lane, true), o.size === this.options.lanes) break;
        }
        return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = Wt(() => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ], (n, r, o, s, i, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: s,
        enabled: i,
        lanes: l
      }), {
        key: false
      }), this.getMeasurements = Wt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: s, enabled: i, lanes: l }, a) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const c = this.measurementsCache.slice(0, d), p = new Array(l).fill(void 0);
        for (let g = 0; g < d; g++) {
          const f = c[g];
          f && (p[f.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const f = s(g), h = this.laneAssignments.get(g);
          let m, v;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const j = p[m], M = j !== void 0 ? c[j] : void 0;
            v = M ? M.end + this.options.gap : r + o;
          } else {
            const j = this.options.lanes === 1 ? c[g - 1] : this.getFurthestMeasurement(c, g);
            v = j ? j.end + this.options.gap : r + o, m = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const x = a.get(f), _ = typeof x == "number" ? x : this.options.estimateSize(g), S = v + _;
          c[g] = {
            index: g,
            start: v,
            size: _,
            end: S,
            key: f,
            lane: m
          }, p[m] = g;
        }
        return this.measurementsCache = c, c;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Wt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, r, o, s) => this.range = n.length > 0 && r > 0 ? Jd({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Wt(() => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([
          this.isScrolling,
          n,
          r
        ]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      }, (n, r, o, s, i) => s === null || i === null ? [] : n({
        startIndex: s,
        endIndex: i,
        overscan: r,
        count: o
      }), {
        key: false,
        debug: () => this.options.debug
      }), this.indexFromElement = (n) => {
        const r = this.options.indexAttribute, o = n.getAttribute(r);
        return o ? parseInt(o, 10) : (console.warn(`Missing attribute name '${r}={index}' on measured element.`), -1);
      }, this._measureElement = (n, r) => {
        const o = this.indexFromElement(n), s = this.measurementsCache[o];
        if (!s) return;
        const i = s.key, l = this.elementsCache.get(i);
        l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(i, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
      }, this.resizeItem = (n, r) => {
        const o = this.measurementsCache[n];
        if (!o) return;
        const s = this.itemSizeCache.get(o.key) ?? o.size, i = r - s;
        i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, i, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += i,
          behavior: void 0
        }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(false));
      }, this.measureElement = (n) => {
        if (!n) {
          this.elementsCache.forEach((r, o) => {
            r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
          });
          return;
        }
        this._measureElement(n, void 0);
      }, this.getVirtualItems = Wt(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, r) => {
        const o = [];
        for (let s = 0, i = n.length; s < i; s++) {
          const l = n[s], a = r[l];
          o.push(a);
        }
        return o;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const r = this.getMeasurements();
        if (r.length !== 0) return Xo(r[Hs(0, r.length - 1, (o) => Xo(r[o]).start, n)]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          const n = this.scrollElement.document.documentElement;
          return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getOffsetForAlignment = (n, r, o = 0) => {
        if (!this.scrollElement) return 0;
        const s = this.getSize(), i = this.getScrollOffset();
        r === "auto" && (r = n >= i + s ? "end" : "start"), r === "center" ? n += (o - s) / 2 : r === "end" && (n -= s);
        const l = this.getMaxScrollOffset();
        return Math.max(Math.min(l, n), 0);
      }, this.getOffsetForIndex = (n, r = "auto") => {
        n = Math.max(0, Math.min(n, this.options.count - 1));
        const o = this.measurementsCache[n];
        if (!o) return;
        const s = this.getSize(), i = this.getScrollOffset();
        if (r === "auto") if (o.end >= i + s - this.options.scrollPaddingEnd) r = "end";
        else if (o.start <= i + this.options.scrollPaddingStart) r = "start";
        else return [
          i,
          r
        ];
        if (r === "end" && n === this.options.count - 1) return [
          this.getMaxScrollOffset(),
          r
        ];
        const l = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(l, r, o.size),
          r
        ];
      }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
          adjustments: void 0,
          behavior: o
        });
      }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
        let s = 0;
        const i = 10, l = (d) => {
          if (!this.targetWindow) return;
          const c = this.getOffsetForIndex(n, d);
          if (!c) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [p, g] = c;
          this._scrollToOffset(p, {
            adjustments: void 0,
            behavior: o
          }), this.targetWindow.requestAnimationFrame(() => {
            const f = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, g);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              Ld(m[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(f) : f();
          });
        }, a = (d) => {
          this.targetWindow && this.currentScrollToIndex === n && (s++, s < i ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(`Failed to scroll to index ${n} after ${i} attempts.`));
        };
        l(r);
      }, this.scrollBy = (n, { behavior: r } = {}) => {
        r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + n, {
          adjustments: void 0,
          behavior: r
        });
      }, this.getTotalSize = () => {
        var n;
        const r = this.getMeasurements();
        let o;
        if (r.length === 0) o = this.options.paddingStart;
        else if (this.options.lanes === 1) o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
        else {
          const s = Array(this.options.lanes).fill(null);
          let i = r.length - 1;
          for (; i >= 0 && s.some((l) => l === null); ) {
            const l = r[i];
            s[l.lane] === null && (s[l.lane] = l.end), i--;
          }
          o = Math.max(...s.filter((l) => l !== null));
        }
        return Math.max(o - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this._scrollToOffset = (n, { adjustments: r, behavior: o }) => {
        this.options.scrollToFn(n, {
          behavior: o,
          adjustments: r
        }, this);
      }, this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
      }, this.setOptions(t);
    }
  }
  const Hs = (e, t, n, r) => {
    for (; e <= t; ) {
      const o = (e + t) / 2 | 0, s = n(o);
      if (s < r) e = o + 1;
      else if (s > r) t = o - 1;
      else return o;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Jd({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
    const o = e.length - 1, s = (a) => e[a].start;
    if (e.length <= r) return {
      startIndex: 0,
      endIndex: o
    };
    let i = Hs(0, o, s, n), l = i;
    if (r === 1) for (; l < o && e[l].end < n + t; ) l++;
    else if (r > 1) {
      const a = Array(r).fill(0);
      for (; l < o && a.some((c) => c < n + t); ) {
        const c = e[l];
        a[c.lane] = c.end, l++;
      }
      const d = Array(r).fill(n + t);
      for (; i >= 0 && d.some((c) => c >= n); ) {
        const c = e[i];
        d[c.lane] = c.start, i--;
      }
      i = Math.max(0, i - i % r), l = Math.min(o, l + (r - 1 - l % r));
    }
    return {
      startIndex: i,
      endIndex: l
    };
  }
  const es = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Xd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], r = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? oi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [o] = y.useState(() => new Yd(r));
    return o.setOptions(r), es(() => o._didMount(), []), es(() => o._willUpdate()), o;
  }
  function Kd(e) {
    return Xd({
      observeElementRect: Wd,
      observeElementOffset: Gd,
      scrollToFn: qd,
      ...e
    });
  }
  function Qd(e, t) {
    var _a2, _b;
    let n = false, r = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (r = $s(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          r = Zr(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          r = Fr(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          r = As(String(r), t.format);
          break;
      }
    } catch {
    }
    if (!t) return {
      displayValue: r,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? $u(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const a of t.cellStyle) if (a.logic && sc(a.logic, s)) {
        if (a.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const d = Et(a.backgroundColor);
          d ? i.background = d : i.backgroundColor = a.backgroundColor;
        }
        if (a.textColor && !("color" in l) && !("background" in l)) {
          const d = Et(a.textColor);
          d ? (l.background = d, l.backgroundClip = "text", l.WebkitBackgroundClip = "text", l.color = "transparent") : l.color = a.textColor;
        }
        if (a.fontWeight && !l.fontWeight && (l.fontWeight = a.fontWeight), a.fontStyle && !l.fontStyle && (l.fontStyle = a.fontStyle), o) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !l.fontWeight && (l.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !l.fontStyle && (l.fontStyle = "italic"), t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in l) && !("background" in l) && (l.color = t.format.stringTextColor)), {
      displayValue: r,
      textSx: l,
      bgSx: i,
      isTruncated: n
    };
  }
  function ts({ value: e, config: t, valueSize: n }) {
    const { displayValue: r, textSx: o, bgSx: s, isTruncated: i } = y.useMemo(() => Qd(e, t), [
      e,
      t
    ]);
    return u.jsxs(L, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        padding: "0 8px",
        ...s
      },
      children: [
        u.jsx(I, {
          variant: "body2",
          component: L,
          title: r,
          sx: {
            flex: 1,
            minWidth: 0,
            lineHeight: "inherit",
            ...n && {
              fontSize: n
            },
            ...o
          },
          dangerouslySetInnerHTML: {
            __html: r ?? ""
          }
        }),
        i && u.jsx(pt, {
          label: "JSON",
          size: "small",
          sx: {
            height: 18,
            fontSize: "0.65rem",
            flexShrink: 0,
            opacity: 0.7
          }
        })
      ]
    });
  }
  function ns(e) {
    return typeof e == "function" ? e() : e;
  }
  function Gt(e, t, n = true) {
    const [r, o] = y.useState(() => {
      if (!n) return ns(t);
      try {
        const i = localStorage.getItem(e);
        if (i !== null) return JSON.parse(i);
      } catch {
      }
      return ns(t);
    }), s = y.useRef(n);
    return y.useEffect(() => {
      const i = s.current;
      if (s.current = n, !!n) {
        if (!i) {
          try {
            const l = localStorage.getItem(e);
            l !== null && o(JSON.parse(l));
          } catch {
          }
          return;
        }
        try {
          localStorage.setItem(e, JSON.stringify(r));
        } catch {
        }
      }
    }, [
      e,
      r,
      n
    ]), [
      r,
      o
    ];
  }
  function rs(e) {
    const t = [
      10,
      25,
      50,
      100
    ];
    if (!e) return t;
    const n = e.split(",").map((r) => parseInt(r.trim(), 10)).filter((r) => !isNaN(r) && r > 0);
    return n.length > 0 ? [
      ...new Set(n)
    ].sort((r, o) => r - o) : t;
  }
  function Zd(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: r, tableRowSelection: o, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: a, tableSorting: d, tableQuickFilter: c, gridRowsLength: p } = e, g = y.useRef([]), f = y.useRef([]), h = y.useRef(""), m = y.useRef(d), v = y.useRef(a), x = y.useRef(c), [_, S] = Gt(`jtc_sorting_${t}`, [], d);
    y.useEffect(() => {
      d ? !m.current && g.current.length > 0 && S(g.current) : S((E) => (E.length > 0 && (g.current = E), [])), m.current = d;
    }, [
      d,
      S
    ]);
    const [j, M] = Gt(`jtc_filters_${t}`, [], a);
    y.useEffect(() => {
      a ? !v.current && f.current.length > 0 && M(f.current) : M((E) => (E.length > 0 && (f.current = E), [])), v.current = a;
    }, [
      a,
      M
    ]);
    const [w, $] = Gt(`jtc_global_filter_${t}`, "", c);
    y.useEffect(() => {
      c ? !x.current && h.current && $(h.current) : $((E) => (E && (h.current = E), "")), x.current = c;
    }, [
      c,
      $
    ]);
    const [R, P] = y.useState({}), [F, D] = Gt(`jtc_col_sizes_${t}`, () => {
      const E = {};
      return n.forEach((N) => {
        N.width && (E[N.path] = N.width);
      }), o === true && (E.__select__ = 48), E;
    }, !r), J = y.useMemo(() => Number(s) || 25, [
      s
    ]), [B, ee] = Gt(`jtc_pagination_${t}`, {
      pageIndex: 0,
      pageSize: J
    });
    y.useEffect(() => {
      ee((E) => E.pageSize === J ? E : {
        pageIndex: 0,
        pageSize: J
      });
    }, [
      J,
      ee
    ]);
    const Q = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(p, 1)
    } : B, [
      l,
      p,
      B
    ]), G = y.useMemo(() => rs(i), [
      i
    ]), [H, C] = Gt(`jtc_visibility_${t}`, {}), z = y.useCallback(() => {
      C({});
    }, [
      C
    ]);
    return {
      sorting: _,
      columnFilters: j,
      globalFilter: w,
      rowSelection: R,
      columnSizing: F,
      pagination: B,
      effectivePagination: Q,
      columnVisibility: H,
      setSorting: S,
      setColumnFilters: M,
      setGlobalFilter: $,
      setRowSelection: P,
      setColumnSizing: D,
      setPagination: ee,
      setColumnVisibility: C,
      pageSizeOptions: G,
      parsePageSizeOptions: rs,
      showAllColumns: z
    };
  }
  const ef = [
    {
      value: "contains",
      label: "json_table_filter_contains"
    },
    {
      value: "startsWith",
      label: "json_table_filter_starts_with"
    },
    {
      value: "endsWith",
      label: "json_table_filter_ends_with"
    },
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], tf = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "greaterThan",
      label: "json_table_filter_greater_than"
    },
    {
      value: "greaterThanOrEqual",
      label: "json_table_filter_greater_than_or_equal"
    },
    {
      value: "lessThan",
      label: "json_table_filter_less_than"
    },
    {
      value: "lessThanOrEqual",
      label: "json_table_filter_less_than_or_equal"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], nf = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "greaterThan",
      label: "json_table_filter_after"
    },
    {
      value: "greaterThanOrEqual",
      label: "json_table_filter_on_or_after"
    },
    {
      value: "lessThan",
      label: "json_table_filter_before"
    },
    {
      value: "lessThanOrEqual",
      label: "json_table_filter_on_or_before"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], rf = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], of = [
    {
      value: "true",
      label: "json_table_filter_boolean_true"
    },
    {
      value: "false",
      label: "json_table_filter_boolean_false"
    }
  ];
  function sf(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function lf(e) {
    if (e == null || e === "") return "";
    if (typeof e == "string" && /^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
    try {
      const t = new Date(e);
      if (!isNaN(t.getTime())) {
        const n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), o = String(t.getDate()).padStart(2, "0");
        return `${n}-${r}-${o}`;
      }
    } catch {
    }
    return typeof e == "string" ? e : typeof e == "number" ? String(e) : "";
  }
  function af({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: s }) {
    const i = sr(), l = Ul(i.breakpoints.down("sm")), a = y.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), d = y.useMemo(() => {
      switch (a) {
        case "number":
          return tf;
        case "date":
          return nf;
        case "boolean":
          return rf;
        default:
          return ef;
      }
    }, [
      a
    ]), c = y.useMemo(() => {
      const R = sf(a);
      if (r == null) return {
        operator: R,
        value: ""
      };
      if (typeof r == "object" && r !== null && "operator" in r) {
        const P = r;
        return d.some((D) => D.value === P.operator) ? P : {
          operator: R,
          value: P.value
        };
      }
      return typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? {
        operator: R,
        value: r
      } : {
        operator: R,
        value: JSON.stringify(r)
      };
    }, [
      r,
      a,
      d
    ]), [p, g] = y.useState(c.operator), [f, h] = y.useState(typeof c.value == "boolean" ? String(c.value) : c.value), m = y.useMemo(() => r != null, [
      r
    ]);
    y.useEffect(() => {
      e && (g(c.operator), h(typeof c.value == "boolean" ? String(c.value) : c.value));
    }, [
      c,
      e
    ]);
    const v = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(p), x = y.useCallback(() => {
      if (!v) {
        n({
          operator: p,
          value: ""
        });
        return;
      }
      if (a === "boolean") {
        n({
          operator: p,
          value: f === "true"
        });
        return;
      }
      const R = typeof f == "string" ? f.trim() : String(f).trim();
      if (R === "") n(void 0);
      else {
        const P = a === "number" ? Number(R) : R;
        n({
          operator: p,
          value: P
        });
      }
    }, [
      v,
      a,
      p,
      f,
      n
    ]), _ = y.useCallback(() => {
      n(void 0);
    }, [
      n
    ]), S = y.useCallback((R) => {
      R.key === "Enter" && !R.shiftKey && (R.preventDefault(), x());
    }, [
      x
    ]), j = y.useCallback((R) => {
      g(R), ([
        "isEmpty",
        "isNotEmpty"
      ].includes(R) || a !== "boolean" && (f === "true" || f === "false")) && h("");
    }, [
      f,
      a
    ]), M = o.split(".").pop() || o, w = `filter-dialog-title-${o}`, $ = `filter-dialog-description-${o}`;
    return u.jsxs(Vr, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      fullScreen: l,
      "aria-labelledby": w,
      "aria-describedby": $,
      children: [
        u.jsx(Wr, {
          id: w,
          children: u.jsxs(L, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              b.t("json_table_filter_for_column").replace("{column}", M),
              m && u.jsx(pt, {
                label: b.t("json_table_filter_active"),
                size: "small",
                color: "primary",
                variant: "outlined"
              })
            ]
          })
        }),
        u.jsxs(Gr, {
          children: [
            u.jsx(I, {
              id: $,
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2,
                mt: 1
              },
              children: b.t("json_table_filter_dialog_description")
            }),
            u.jsxs(L, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              onKeyDown: S,
              children: [
                u.jsxs(ct, {
                  fullWidth: true,
                  children: [
                    u.jsx(dt, {
                      id: `filter-operator-label-${o}`,
                      children: b.t("json_table_filter_operator")
                    }),
                    u.jsx(nt, {
                      value: p,
                      label: b.t("json_table_filter_operator"),
                      labelId: `filter-operator-label-${o}`,
                      onChange: (R) => j(R.target.value),
                      children: d.map((R) => u.jsx(Z, {
                        value: R.value,
                        children: b.t(R.label)
                      }, R.value))
                    })
                  ]
                }),
                v && a === "boolean" && u.jsxs(ct, {
                  fullWidth: true,
                  children: [
                    u.jsx(dt, {
                      id: `filter-value-label-${o}`,
                      children: b.t("json_table_filter_value")
                    }),
                    u.jsx(nt, {
                      value: f === "true" || f === "false" ? f : "",
                      label: b.t("json_table_filter_value"),
                      labelId: `filter-value-label-${o}`,
                      onChange: (R) => h(R.target.value),
                      children: of.map((R) => u.jsx(Z, {
                        value: R.value,
                        children: b.t(R.label)
                      }, R.value))
                    })
                  ]
                }),
                v && a === "date" && u.jsx(me, {
                  label: b.t("json_table_filter_value"),
                  value: lf(f),
                  onChange: (R) => h(R.target.value),
                  type: "date",
                  fullWidth: true,
                  autoFocus: true,
                  InputLabelProps: {
                    shrink: true
                  }
                }),
                v && a === "number" && u.jsx(me, {
                  label: b.t("json_table_filter_value"),
                  value: f,
                  onChange: (R) => h(R.target.value),
                  type: "number",
                  fullWidth: true,
                  autoFocus: true
                }),
                v && a === "string" && u.jsx(me, {
                  label: b.t("json_table_filter_value"),
                  value: f,
                  onChange: (R) => h(R.target.value),
                  type: "text",
                  fullWidth: true,
                  autoFocus: true
                }),
                !v && u.jsx(I, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: {
                    fontStyle: "italic"
                  },
                  children: b.t("json_table_filter_no_value_needed")
                })
              ]
            })
          ]
        }),
        u.jsxs(Br, {
          sx: {
            px: 3,
            pb: 2
          },
          children: [
            m && u.jsx(rt, {
              onClick: _,
              color: "error",
              sx: {
                mr: "auto"
              },
              children: b.t("json_table_filter_clear")
            }),
            u.jsx(rt, {
              onClick: t,
              children: b.t("cancel")
            }),
            u.jsx(rt, {
              variant: "contained",
              onClick: x,
              disabled: v && a === "boolean" && f !== "true" && f !== "false",
              children: b.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function uf({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: a, onShowAllColumns: d, hasHiddenColumns: c }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [p, g] = y.useState(false), f = ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, h = s && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, m = ((_c2 = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c2.call(r)) === true, v = i != null;
    if (!(f || h || m)) return null;
    const _ = () => {
      r && l([
        {
          id: r.id,
          desc: false
        }
      ]), n();
    }, S = () => {
      r && l([
        {
          id: r.id,
          desc: true
        }
      ]), n();
    }, j = () => {
      r && a(r.id), n();
    }, M = () => {
      g(true);
    }, w = () => {
      g(false);
    }, $ = (D) => {
      r == null ? void 0 : r.setFilterValue(D), g(false), n();
    }, R = () => {
      r == null ? void 0 : r.setFilterValue(void 0), n();
    }, P = () => {
      var _a3;
      (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
    }, F = () => {
      d == null ? void 0 : d(), n();
    };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs(si, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            f && u.jsxs(u.Fragment, {
              children: [
                u.jsxs(Z, {
                  onClick: _,
                  children: [
                    u.jsx(tn, {
                      children: u.jsx(Ss, {
                        fontSize: "small"
                      })
                    }),
                    u.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_sort_asc")
                    })
                  ]
                }),
                u.jsxs(Z, {
                  onClick: S,
                  children: [
                    u.jsx(tn, {
                      children: u.jsx(Cs, {
                        fontSize: "small"
                      })
                    }),
                    u.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_sort_desc")
                    })
                  ]
                }),
                o && u.jsx(Z, {
                  onClick: j,
                  children: u.jsx(I, {
                    variant: "body2",
                    children: b.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            f && h && u.jsx(jr, {}),
            h && u.jsxs(u.Fragment, {
              children: [
                u.jsxs(Z, {
                  onClick: M,
                  children: [
                    u.jsx(tn, {
                      children: u.jsx(mu, {
                        fontSize: "small"
                      })
                    }),
                    u.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_set_filter")
                    })
                  ]
                }),
                v && u.jsxs(Z, {
                  onClick: R,
                  children: [
                    u.jsx(tn, {
                      children: u.jsx(gi, {
                        fontSize: "small"
                      })
                    }),
                    u.jsx(I, {
                      variant: "body2",
                      children: b.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (f || h) && m && u.jsx(jr, {}),
            m && u.jsxs(Z, {
              onClick: P,
              children: [
                u.jsx(tn, {
                  children: u.jsx(Rs, {
                    fontSize: "small"
                  })
                }),
                u.jsx(I, {
                  variant: "body2",
                  children: b.t("json_table_hide_column")
                })
              ]
            }),
            c && d && u.jsx(Z, {
              onClick: F,
              children: u.jsx(I, {
                variant: "body2",
                children: b.t("json_table_show_all_columns")
              })
            })
          ]
        }),
        h && r && p && u.jsx(af, {
          open: p,
          onClose: w,
          onApply: $,
          currentValue: (_d2 = r.getFilterValue) == null ? void 0 : _d2.call(r),
          columnId: r.id,
          columnType: (_f = (_e2 = r.columnDef) == null ? void 0 : _e2.meta) == null ? void 0 : _f.columnType
        })
      ]
    });
  }
  const cf = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, df = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, ff = (e) => {
    const { children: t, value: n, ...r } = e;
    return u.jsx(Z, {
      ...r,
      value: n,
      children: u.jsx(I, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, pf = () => {
    const e = y.useContext(li), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = ai("oid"), s = bi("oid"), i = sr(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (s == null) return [];
      let A;
      if (typeof s == "string") try {
        A = JSON.parse(s);
      } catch {
        return [];
      }
      else A = s;
      return Array.isArray(A) ? A : typeof A == "object" && A !== null ? [
        A
      ] : [];
    }, [
      s
    ]), c = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: p, rows: g, meta: f } = Nc(d, c), h = y.useMemo(() => {
      const A = n.data.tableMaxDepth || 10;
      return f.maxDepth > A ? {
        actual: f.maxDepth,
        configured: A
      } : null;
    }, [
      f.maxDepth,
      n.data.tableMaxDepth
    ]), m = y.useMemo(() => Ms(n.data.columnConfig), [
      n.data.columnConfig
    ]), v = n.data.tableDensity || "standard", x = Number(n.data.tableRowHeight) || cf[v] || 52, _ = Number(n.data.tableHeaderHeight) || df[v] || 56, S = g, j = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, M = y.useMemo(() => yc({
      columnConfig: m,
      analysisColumns: p,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: j,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false
      },
      renderConfiguredCell: (A, T) => u.jsx(ts, {
        value: A,
        config: T,
        valueSize: o.valueSize
      }),
      renderAutoDetectedCell: (A) => u.jsx(ts, {
        value: A,
        valueSize: o.valueSize
      }),
      renderSelectionHeader: (A) => u.jsx(_n, {
        size: "small",
        indeterminate: A.getIsSomePageRowsSelected(),
        checked: A.getIsAllPageRowsSelected(),
        onChange: A.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (A) => u.jsx(_n, {
        size: "small",
        checked: A.getIsSelected(),
        onChange: A.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      m,
      p,
      n.data.tableSorting,
      j,
      n.data.tableRowSelection,
      n.data.tableHiding,
      o.valueSize
    ]), w = y.useMemo(() => {
      var _a2;
      const A = /* @__PURE__ */ new Map();
      for (const T of m) ((_a2 = T.format) == null ? void 0 : _a2.type) === "date" && A.set(T.path, {
        dateFormat: T.format.dateFormat,
        dateInputFormat: T.format.dateInputFormat
      });
      return A;
    }, [
      m
    ]), $ = y.useCallback((A, T, W) => {
      const le = typeof W == "string" ? W.toLowerCase() : typeof W == "number" || typeof W == "boolean" ? String(W).toLowerCase() : "";
      if (!le) return true;
      const ce = A.getValue(T);
      if (ce == null) return false;
      const Te = w.get(T);
      return Te && Zr(ce, Te.dateFormat, Te.dateInputFormat).toLowerCase().includes(le) ? true : (typeof ce == "string" ? ce : typeof ce == "number" || typeof ce == "boolean" ? String(ce) : "").toLowerCase().includes(le);
    }, [
      w
    ]), R = n.data.tableAutoSize === true, { sorting: P, columnFilters: F, globalFilter: D, rowSelection: J, columnSizing: B, pagination: ee, effectivePagination: Q, columnVisibility: G, setSorting: H, setColumnFilters: C, setGlobalFilter: z, setRowSelection: E, setColumnSizing: N, setPagination: te, setColumnVisibility: U, pageSizeOptions: ge, showAllColumns: de } = Zd({
      widgetId: r,
      columnConfig: m,
      tableAutoSize: R,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: j,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: S.length
    }), se = Nd({
      data: S,
      columns: M,
      getCoreRowModel: $d(),
      getSortedRowModel: zd(),
      getFilteredRowModel: Td(),
      getPaginationRowModel: Dd(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: $,
      filterFns: pc,
      columnResizeMode: "onChange",
      enableColumnResizing: !R,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: P,
        columnFilters: F,
        globalFilter: D,
        pagination: Q,
        rowSelection: J,
        columnSizing: B,
        columnVisibility: G
      },
      onSortingChange: H,
      onColumnFiltersChange: C,
      onGlobalFilterChange: z,
      onPaginationChange: n.data.tablePagination !== false ? te : void 0,
      onRowSelectionChange: E,
      onColumnSizingChange: N,
      onColumnVisibilityChange: U,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: j,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), we = y.useRef(null), ie = y.useRef(null), [q, it] = y.useState({}), [ke, oe] = y.useState(null), be = y.useRef(null), [he, mt] = y.useState(void 0), [St, lt] = y.useState(void 0), yt = y.useCallback((A, T) => {
      var _a2;
      be.current = A;
      const W = A.id, le = P.find((Te) => Te.id === W), ce = (_a2 = F.find((Te) => Te.id === W)) == null ? void 0 : _a2.value;
      mt(le), lt(ce), oe(T);
    }, [
      P,
      F
    ]), jt = y.useCallback(() => {
      oe(null);
    }, []);
    y.useEffect(() => {
      if (!R) return;
      const A = ie.current;
      if (!A) return;
      const T = new ResizeObserver(() => {
        const W = A.querySelector("tr[data-row-index]");
        if (!W) return;
        const le = W.querySelectorAll("td"), ce = se.getHeaderGroups()[0];
        if (!ce || le.length !== ce.headers.length) return;
        const Te = {};
        ce.headers.forEach((Tn, Dt) => {
          const so = le[Dt];
          so && (Te[Tn.id] = so.getBoundingClientRect().width);
        }), it(Te);
      });
      return T.observe(A), () => T.disconnect();
    }, [
      R,
      se
    ]);
    const We = y.useMemo(() => {
      const A = {
        tableLayout: R ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) A["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const T = n.data.horizontalCellBorderWidth ?? 1, W = Dn(n.data.horizontalCellBorderColor);
        A["& .MuiTableCell-root"] = {
          ...A["& .MuiTableCell-root"],
          borderBottom: `${T}px solid`,
          borderBottomColor: W || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const T = n.data.verticalCellBorderWidth ?? 1, W = Dn(n.data.verticalCellBorderColor);
        A["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${T}px solid`,
          borderRightColor: W || "divider"
        };
      }
      return A;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      R
    ]), Ne = n.data.tableHeaderBgColor, Ge = n.data.tableHeaderTextColor, Ue = n.data.tableHeaderFontSize, Rt = y.useMemo(() => ({
      height: _,
      padding: 0,
      whiteSpace: "nowrap",
      ...Ge && {
        color: Ge
      },
      ...Ue && {
        fontSize: `${Ue}px`
      }
    }), [
      _,
      Ge,
      Ue
    ]), Mt = y.useMemo(() => ({
      ...Ge && {
        color: Ge
      },
      ...Ue && {
        fontSize: `${Ue}px`
      }
    }), [
      Ge,
      Ue
    ]), $t = n.data.noCard === true, Ze = n.data.headerBorderWidth ?? 0, At = Dn(n.data.headerBorderColor), It = y.useMemo(() => {
      const A = n.data.tableHeaderElevation ?? 6, T = $t ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: A > 0 ? i.shadows[A] : "none"
      };
      Ze > 0 && (T["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${Ze}px`,
        backgroundColor: At || i.palette.divider,
        pointerEvents: "none"
      });
      const W = Ne ? Et(Ne) : null;
      return W ? {
        ...T,
        background: W
      } : Ne ? {
        ...T,
        backgroundColor: Ne
      } : T;
    }, [
      $t,
      Ne,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      Ze,
      At
    ]), Zt = y.useMemo(() => {
      const A = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, T = n.data.borderWidth, W = n.data.borderStyle || "solid", le = Dn(n.data.borderColor), ce = n.data.borderRadius;
      return T && T > 0 && (A.border = `${T}px ${W}`, A.borderColor = le || "divider"), ce && (A.borderRadius = ce), A;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Le = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), Ft = y.useCallback((A) => R ? q[A.id] ?? "auto" : A.getSize(), [
      R,
      q
    ]), et = y.useMemo(() => ({
      overflow: "hidden",
      height: x,
      maxHeight: x,
      padding: 0,
      verticalAlign: "middle"
    }), [
      x
    ]), tt = n.data.evenRowColor || null, Ht = n.data.oddRowColor || null, Bt = tt ? Et(tt) : null, An = Ht ? Et(Ht) : null, Pt = y.useCallback((A) => {
      const T = A % 2 === 0, W = T ? tt : Ht, le = T ? Bt : An;
      if (W) return le ? {
        background: le
      } : {
        backgroundColor: W
      };
    }, [
      tt,
      Ht,
      Bt,
      An
    ]), Vt = se.getRowModel().rows, In = Kd({
      count: Vt.length,
      getScrollElement: () => we.current,
      estimateSize: () => x,
      overscan: 25,
      scrollPaddingStart: x
    }), cr = n.data.tableVirtualizeThreshold ?? 50, Tt = n.data.tablePagination === false && Vt.length > cr ? In.getVirtualItems() : null, dr = Tt == null ? void 0 : Tt[0], Fn = Tt == null ? void 0 : Tt[Tt.length - 1], Pn = (dr == null ? void 0 : dr.start) ?? 0, V = Fn ? In.getTotalSize() - (Fn.end ?? 0) : 0;
    return u.jsxs(ui, {
      isValidType: a,
      data: o,
      children: [
        u.jsx(ci, {
          data: o,
          widget: n
        }),
        a && M.length > 0 ? u.jsxs(L, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && u.jsx(L, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: u.jsx(me, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: D,
                onChange: (A) => z(A.target.value),
                placeholder: b.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: u.jsx(vs, {
                      position: "start",
                      children: u.jsx(js, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && u.jsx(qn, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: u.jsx(I, {
                variant: "body2",
                children: b.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            u.jsx(L, {
              sx: Zt,
              children: u.jsx(Da, {
                ref: we,
                sx: Le,
                children: u.jsxs(_a, {
                  size: v === "compact" ? "small" : "medium",
                  sx: We,
                  children: [
                    u.jsx(Na, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...It,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: se.getHeaderGroups().map((A) => u.jsx(rn, {
                        children: A.headers.map((T) => {
                          const W = T.column.getCanSort(), le = T.column.getIsSorted(), ce = T.column.columnDef.meta, Te = T.column.id === "__select__", Tn = !R;
                          return u.jsxs(xt, {
                            component: "th",
                            colSpan: T.colSpan,
                            align: (ce == null ? void 0 : ce.align) || "left",
                            padding: Te ? "checkbox" : "normal",
                            sx: {
                              width: Ft(T),
                              minWidth: Te ? 48 : 40,
                              position: "relative",
                              ...Rt
                            },
                            children: [
                              Te ? cn(T.column.columnDef.header, T.getContext()) : u.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (ce == null ? void 0 : ce.align) === "right" ? "flex-end" : (ce == null ? void 0 : ce.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  W ? u.jsx(fu, {
                                    active: le !== false,
                                    direction: le === "desc" ? "desc" : "asc",
                                    onClick: T.column.getToggleSortingHandler(),
                                    children: u.jsx(I, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: Mt,
                                      children: cn(T.column.columnDef.header, T.getContext())
                                    })
                                  }) : u.jsx(I, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: Mt,
                                    children: cn(T.column.columnDef.header, T.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && (T.column.getCanSort() || j && T.column.getCanFilter() || T.column.getCanHide()) && u.jsx(ze, {
                                    title: b.t("json_table_column_menu"),
                                    children: u.jsx(ve, {
                                      size: "small",
                                      "aria-label": b.t("json_table_column_menu"),
                                      onClick: (Dt) => {
                                        Dt.stopPropagation(), yt(T.column, Dt.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: u.jsx(yu, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              Tn && T.column.getCanResize() && u.jsx(L, {
                                className: "resize-handle",
                                onMouseDown: T.getResizeHandler(),
                                onTouchStart: T.getResizeHandler(),
                                onClick: (Dt) => Dt.stopPropagation(),
                                sx: {
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                  height: "100%",
                                  width: "4px",
                                  cursor: "col-resize",
                                  userSelect: "none",
                                  touchAction: "none",
                                  zIndex: 1,
                                  opacity: T.column.getIsResizing() ? 1 : 0,
                                  bgcolor: T.column.getIsResizing() ? "primary.main" : "divider",
                                  transition: "opacity 0.15s",
                                  "&:hover": {
                                    opacity: 1,
                                    bgcolor: "primary.light"
                                  }
                                }
                              })
                            ]
                          }, T.id);
                        })
                      }, A.id))
                    }),
                    u.jsx(Ra, {
                      ref: ie,
                      children: Tt ? u.jsxs(u.Fragment, {
                        children: [
                          Pn > 0 && u.jsx(rn, {
                            children: u.jsx(xt, {
                              colSpan: M.length,
                              sx: {
                                height: Pn,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          Tt.map((A) => {
                            const T = Vt[A.index], W = A.index;
                            return u.jsx(rn, {
                              "data-row-index": W,
                              sx: {
                                height: x,
                                ...Pt(W)
                              },
                              children: T.getVisibleCells().map((le) => {
                                var _a2;
                                const ce = le.column.id === "__select__";
                                return u.jsx(xt, {
                                  align: ((_a2 = le.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                                  padding: ce ? "checkbox" : "normal",
                                  sx: {
                                    ...et
                                  },
                                  children: cn(le.column.columnDef.cell, le.getContext())
                                }, le.id);
                              })
                            }, T.id);
                          }),
                          V > 0 && u.jsx(rn, {
                            children: u.jsx(xt, {
                              colSpan: M.length,
                              sx: {
                                height: V,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Vt.map((A, T) => u.jsx(rn, {
                        "data-row-index": T,
                        sx: {
                          height: x,
                          ...Pt(T)
                        },
                        children: A.getVisibleCells().map((W) => {
                          var _a2;
                          const le = W.column.id === "__select__";
                          return u.jsx(xt, {
                            align: ((_a2 = W.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                            padding: le ? "checkbox" : "normal",
                            sx: {
                              ...et
                            },
                            children: cn(W.column.columnDef.cell, W.getContext())
                          }, W.id);
                        })
                      }, A.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && u.jsx(ru, {
              component: "div",
              count: se.getFilteredRowModel().rows.length,
              page: ee.pageIndex,
              rowsPerPage: ee.pageSize,
              rowsPerPageOptions: ge,
              onPageChange: (A, T) => te((W) => ({
                ...W,
                pageIndex: T
              })),
              onRowsPerPageChange: (A) => te({
                pageIndex: 0,
                pageSize: parseInt(A.target.value, 10)
              }),
              labelRowsPerPage: u.jsx(I, {
                variant: "body2",
                component: "span",
                children: b.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: A, to: T, count: W }) => u.jsx(I, {
                variant: "body2",
                component: "span",
                children: `${A}\u2013${T} / ${W}`
              }),
              slots: {
                menuItem: ff
              },
              slotProps: {
                select: {
                  renderValue: (A) => u.jsx(I, {
                    variant: "body2",
                    component: "span",
                    children: String(A)
                  })
                }
              }
            }),
            u.jsx(uf, {
              anchorEl: ke,
              open: !!ke,
              onClose: jt,
              activeColumn: be.current,
              isSorted: he !== void 0,
              tableFiltering: j,
              activeColumnFilter: St,
              onSetSorting: H,
              onClearSorting: (A) => H((T) => T.filter((W) => W.id !== A)),
              onShowAllColumns: de,
              hasHiddenColumns: Object.keys(G).some((A) => G[A] === false)
            })
          ]
        }) : u.jsx(L, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: u.jsx(I, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? b.t("json_table_no_oid") : a ? m.length > 0 && M.length === 0 ? b.t("json_table_all_columns_hidden") : b.t("json_table_no_data") : b.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, gf = [
    "columnConfig",
    "tableSorting",
    "tableSortingMulti",
    "tableFiltering",
    "tableQuickFilter",
    "tableColumnMenu",
    "tableHiding",
    "tablePagination",
    "tablePageSize",
    "tablePageSizeOptions",
    "tableVirtualizeThreshold",
    "tableRowSelection",
    "tableMaxDepth",
    "tableDensity",
    "tableRowHeight",
    "tableHeaderHeight",
    "tableAutoSize",
    "tableHeaderElevation",
    "jsonTablePadding",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderRadius",
    "tableHeaderBgColor",
    "tableHeaderTextColor",
    "tableHeaderFontSize",
    "headerBorderWidth",
    "headerBorderColor",
    "tableShowCellBorders",
    "verticalCellBorderWidth",
    "verticalCellBorderColor",
    "tableShowRowBorders",
    "horizontalCellBorderWidth",
    "horizontalCellBorderColor",
    "evenRowColor",
    "oddRowColor"
  ];
  Lr = class extends b {
    static createObjectFields() {
      const t = di([
        "string",
        "mixed",
        "json"
      ]), n = t.find((r) => r.name === "oid");
      if (n) {
        const r = n, o = r.onChange;
        r.onChange = async (s, i, l, a) => {
          if (!i.oid) {
            for (const d of gf) delete i[d];
            o || l(i);
          }
          o && await o(s, i, l, a);
        };
      }
      return t;
    }
    static getWidgetInfo() {
      return {
        id: "tplJsonTableCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "JsonTableCollectionWidget",
        visWidgetLabel: "json_table_collection_widget",
        visOrder: 11,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...ao()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Lr.createObjectFields(),
              ...Bc()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...ao({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "400px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-json-table.png"
      };
    }
    getWidgetInfo() {
      return Lr.getWidgetInfo();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t), t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true;
      const n = {
        id: t.id,
        refService: t.refService,
        style: t.style,
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
        wrappedContent: this.wrappedCollectionContent
      };
      return fi(this.wrapContent(u.jsx(pf, {})), n);
    }
  };
});
export {
  __tla,
  Lr as default
};
