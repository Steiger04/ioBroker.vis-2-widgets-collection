import { v as C, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as te, f as ee, a3 as xe, j as B, aW as no, U as pe, V as Oe, W as ao, i as oe, k as Be, u as re, s as Tt, h as Zt, T as io, aH as so, r as po, an as qt, D as lo, m as co, E as Pe, aR as fo, n as Yt, a1 as uo, aX as vo, J as ke, p as ue, a as We, al as Re, d as de, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
let zr, Kr, Yr, Ye, Xr, qr, Vr;
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
  })()
]).then(async () => {
  var k = "top", U = "bottom", V = "right", W = "left", ve = "auto", Ft = [
    k,
    U,
    V,
    W
  ], xt = "start", Nt = "end", mo = "clippingParents", Ne = "viewport", Lt = "popper", ho = "reference", Te = Ft.reduce(function(e, t) {
    return e.concat([
      t + "-" + xt,
      t + "-" + Nt
    ]);
  }, []), Ie = [].concat(Ft, [
    ve
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + xt,
      t + "-" + Nt
    ]);
  }, []), go = "beforeRead", yo = "read", bo = "afterRead", wo = "beforeMain", xo = "main", Oo = "afterMain", Po = "beforeWrite", Ro = "write", To = "afterWrite", Eo = [
    go,
    yo,
    bo,
    wo,
    xo,
    Oo,
    Po,
    Ro,
    To
  ];
  function _(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function N(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function ut(e) {
    var t = N(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function H(e) {
    var t = N(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function me(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = N(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Ao(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(o) {
      var r = t.styles[o] || {}, n = t.attributes[o] || {}, i = t.elements[o];
      !H(i) || !_(i) || (Object.assign(i.style, r), Object.keys(n).forEach(function(l) {
        var a = n[l];
        a === false ? i.removeAttribute(l) : i.setAttribute(l, a === true ? "" : a);
      }));
    });
  }
  function Co(e) {
    var t = e.state, o = {
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
    return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
      Object.keys(t.elements).forEach(function(r) {
        var n = t.elements[r], i = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), a = l.reduce(function(s, c) {
          return s[c] = "", s;
        }, {});
        !H(n) || !_(n) || (Object.assign(n.style, a), Object.keys(i).forEach(function(s) {
          n.removeAttribute(s);
        }));
      });
    };
  }
  const So = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Ao,
    effect: Co,
    requires: [
      "computeStyles"
    ]
  };
  function Z(e) {
    return e.split("-")[0];
  }
  var ft = Math.max, _t = Math.min, Ot = Math.round;
  function le() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Fe() {
    return !/^((?!chrome|android).)*safari/i.test(le());
  }
  function Pt(e, t, o) {
    t === void 0 && (t = false), o === void 0 && (o = false);
    var r = e.getBoundingClientRect(), n = 1, i = 1;
    t && H(e) && (n = e.offsetWidth > 0 && Ot(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ot(r.height) / e.offsetHeight || 1);
    var l = ut(e) ? N(e) : window, a = l.visualViewport, s = !Fe() && o, c = (r.left + (s && a ? a.offsetLeft : 0)) / n, p = (r.top + (s && a ? a.offsetTop : 0)) / i, m = r.width / n, x = r.height / i;
    return {
      width: m,
      height: x,
      top: p,
      right: c + m,
      bottom: p + x,
      left: c,
      x: c,
      y: p
    };
  }
  function he(e) {
    var t = Pt(e), o = e.offsetWidth, r = e.offsetHeight;
    return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: o,
      height: r
    };
  }
  function He(e, t) {
    var o = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (o && me(o)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function ot(e) {
    return N(e).getComputedStyle(e);
  }
  function Mo(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(_(e)) >= 0;
  }
  function it(e) {
    return ((ut(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function ne(e) {
    return _(e) === "html" ? e : e.assignedSlot || e.parentNode || (me(e) ? e.host : null) || it(e);
  }
  function Ee(e) {
    return !H(e) || ot(e).position === "fixed" ? null : e.offsetParent;
  }
  function Do(e) {
    var t = /firefox/i.test(le()), o = /Trident/i.test(le());
    if (o && H(e)) {
      var r = ot(e);
      if (r.position === "fixed") return null;
    }
    var n = ne(e);
    for (me(n) && (n = n.host); H(n) && [
      "html",
      "body"
    ].indexOf(_(n)) < 0; ) {
      var i = ot(n);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return n;
      n = n.parentNode;
    }
    return null;
  }
  function Ht(e) {
    for (var t = N(e), o = Ee(e); o && Mo(o) && ot(o).position === "static"; ) o = Ee(o);
    return o && (_(o) === "html" || _(o) === "body" && ot(o).position === "static") ? t : o || Do(e) || t;
  }
  function ge(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function kt(e, t, o) {
    return ft(e, _t(t, o));
  }
  function $o(e, t, o) {
    var r = kt(e, t, o);
    return r > o ? o : r;
  }
  function Ue() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Ve(e) {
    return Object.assign({}, Ue(), e);
  }
  function ze(e, t) {
    return t.reduce(function(o, r) {
      return o[r] = e, o;
    }, {});
  }
  var jo = function(t, o) {
    return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
      placement: o.placement
    })) : t, Ve(typeof t != "number" ? t : ze(t, Ft));
  };
  function Lo(e) {
    var t, o = e.state, r = e.name, n = e.options, i = o.elements.arrow, l = o.modifiersData.popperOffsets, a = Z(o.placement), s = ge(a), c = [
      W,
      V
    ].indexOf(a) >= 0, p = c ? "height" : "width";
    if (!(!i || !l)) {
      var m = jo(n.padding, o), x = he(i), f = s === "y" ? k : W, O = s === "y" ? U : V, d = o.rects.reference[p] + o.rects.reference[s] - l[s] - o.rects.popper[p], v = l[s] - o.rects.reference[s], b = Ht(i), T = b ? s === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, w = d / 2 - v / 2, u = m[f], h = T - x[p] - m[O], g = T / 2 - x[p] / 2 + w, R = kt(u, g, h), M = s;
      o.modifiersData[r] = (t = {}, t[M] = R, t.centerOffset = R - g, t);
    }
  }
  function Bo(e) {
    var t = e.state, o = e.options, r = o.element, n = r === void 0 ? "[data-popper-arrow]" : r;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || He(t.elements.popper, n) && (t.elements.arrow = n));
  }
  const ko = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Lo,
    effect: Bo,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Rt(e) {
    return e.split("-")[1];
  }
  var Wo = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function No(e, t) {
    var o = e.x, r = e.y, n = t.devicePixelRatio || 1;
    return {
      x: Ot(o * n) / n || 0,
      y: Ot(r * n) / n || 0
    };
  }
  function Ae(e) {
    var t, o = e.popper, r = e.popperRect, n = e.placement, i = e.variation, l = e.offsets, a = e.position, s = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, m = e.isFixed, x = l.x, f = x === void 0 ? 0 : x, O = l.y, d = O === void 0 ? 0 : O, v = typeof p == "function" ? p({
      x: f,
      y: d
    }) : {
      x: f,
      y: d
    };
    f = v.x, d = v.y;
    var b = l.hasOwnProperty("x"), T = l.hasOwnProperty("y"), w = W, u = k, h = window;
    if (c) {
      var g = Ht(o), R = "clientHeight", M = "clientWidth";
      if (g === N(o) && (g = it(o), ot(g).position !== "static" && a === "absolute" && (R = "scrollHeight", M = "scrollWidth")), g = g, n === k || (n === W || n === V) && i === Nt) {
        u = U;
        var A = m && g === h && h.visualViewport ? h.visualViewport.height : g[R];
        d -= A - r.height, d *= s ? 1 : -1;
      }
      if (n === W || (n === k || n === U) && i === Nt) {
        w = V;
        var P = m && g === h && h.visualViewport ? h.visualViewport.width : g[M];
        f -= P - r.width, f *= s ? 1 : -1;
      }
    }
    var E = Object.assign({
      position: a
    }, c && Wo), L = p === true ? No({
      x: f,
      y: d
    }, N(o)) : {
      x: f,
      y: d
    };
    if (f = L.x, d = L.y, s) {
      var S;
      return Object.assign({}, E, (S = {}, S[u] = T ? "0" : "", S[w] = b ? "0" : "", S.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + d + "px)" : "translate3d(" + f + "px, " + d + "px, 0)", S));
    }
    return Object.assign({}, E, (t = {}, t[u] = T ? d + "px" : "", t[w] = b ? f + "px" : "", t.transform = "", t));
  }
  function Io(e) {
    var t = e.state, o = e.options, r = o.gpuAcceleration, n = r === void 0 ? true : r, i = o.adaptive, l = i === void 0 ? true : i, a = o.roundOffsets, s = a === void 0 ? true : a, c = {
      placement: Z(t.placement),
      variation: Rt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ae(Object.assign({}, c, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: l,
      roundOffsets: s
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ae(Object.assign({}, c, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: s
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Fo = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Io,
    data: {}
  };
  var Kt = {
    passive: true
  };
  function Ho(e) {
    var t = e.state, o = e.instance, r = e.options, n = r.scroll, i = n === void 0 ? true : n, l = r.resize, a = l === void 0 ? true : l, s = N(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && c.forEach(function(p) {
      p.addEventListener("scroll", o.update, Kt);
    }), a && s.addEventListener("resize", o.update, Kt), function() {
      i && c.forEach(function(p) {
        p.removeEventListener("scroll", o.update, Kt);
      }), a && s.removeEventListener("resize", o.update, Kt);
    };
  }
  const Uo = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Ho,
    data: {}
  };
  var Vo = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Qt(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Vo[t];
    });
  }
  var zo = {
    start: "end",
    end: "start"
  };
  function Ce(e) {
    return e.replace(/start|end/g, function(t) {
      return zo[t];
    });
  }
  function ye(e) {
    var t = N(e), o = t.pageXOffset, r = t.pageYOffset;
    return {
      scrollLeft: o,
      scrollTop: r
    };
  }
  function be(e) {
    return Pt(it(e)).left + ye(e).scrollLeft;
  }
  function Xo(e, t) {
    var o = N(e), r = it(e), n = o.visualViewport, i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
    if (n) {
      i = n.width, l = n.height;
      var c = Fe();
      (c || !c && t === "fixed") && (a = n.offsetLeft, s = n.offsetTop);
    }
    return {
      width: i,
      height: l,
      x: a + be(e),
      y: s
    };
  }
  function qo(e) {
    var t, o = it(e), r = ye(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, i = ft(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = ft(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -r.scrollLeft + be(e), s = -r.scrollTop;
    return ot(n || o).direction === "rtl" && (a += ft(o.clientWidth, n ? n.clientWidth : 0) - i), {
      width: i,
      height: l,
      x: a,
      y: s
    };
  }
  function we(e) {
    var t = ot(e), o = t.overflow, r = t.overflowX, n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(o + n + r);
  }
  function Xe(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(_(e)) >= 0 ? e.ownerDocument.body : H(e) && we(e) ? e : Xe(ne(e));
  }
  function Wt(e, t) {
    var o;
    t === void 0 && (t = []);
    var r = Xe(e), n = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = N(r), l = n ? [
      i
    ].concat(i.visualViewport || [], we(r) ? r : []) : r, a = t.concat(l);
    return n ? a : a.concat(Wt(ne(l)));
  }
  function ce(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Yo(e, t) {
    var o = Pt(e, false, t === "fixed");
    return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
  }
  function Se(e, t, o) {
    return t === Ne ? ce(Xo(e, o)) : ut(t) ? Yo(t, o) : ce(qo(it(e)));
  }
  function Ko(e) {
    var t = Wt(ne(e)), o = [
      "absolute",
      "fixed"
    ].indexOf(ot(e).position) >= 0, r = o && H(e) ? Ht(e) : e;
    return ut(r) ? t.filter(function(n) {
      return ut(n) && He(n, r) && _(n) !== "body";
    }) : [];
  }
  function Go(e, t, o, r) {
    var n = t === "clippingParents" ? Ko(e) : [].concat(t), i = [].concat(n, [
      o
    ]), l = i[0], a = i.reduce(function(s, c) {
      var p = Se(e, c, r);
      return s.top = ft(p.top, s.top), s.right = _t(p.right, s.right), s.bottom = _t(p.bottom, s.bottom), s.left = ft(p.left, s.left), s;
    }, Se(e, l, r));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function qe(e) {
    var t = e.reference, o = e.element, r = e.placement, n = r ? Z(r) : null, i = r ? Rt(r) : null, l = t.x + t.width / 2 - o.width / 2, a = t.y + t.height / 2 - o.height / 2, s;
    switch (n) {
      case k:
        s = {
          x: l,
          y: t.y - o.height
        };
        break;
      case U:
        s = {
          x: l,
          y: t.y + t.height
        };
        break;
      case V:
        s = {
          x: t.x + t.width,
          y: a
        };
        break;
      case W:
        s = {
          x: t.x - o.width,
          y: a
        };
        break;
      default:
        s = {
          x: t.x,
          y: t.y
        };
    }
    var c = n ? ge(n) : null;
    if (c != null) {
      var p = c === "y" ? "height" : "width";
      switch (i) {
        case xt:
          s[c] = s[c] - (t[p] / 2 - o[p] / 2);
          break;
        case Nt:
          s[c] = s[c] + (t[p] / 2 - o[p] / 2);
          break;
      }
    }
    return s;
  }
  function It(e, t) {
    t === void 0 && (t = {});
    var o = t, r = o.placement, n = r === void 0 ? e.placement : r, i = o.strategy, l = i === void 0 ? e.strategy : i, a = o.boundary, s = a === void 0 ? mo : a, c = o.rootBoundary, p = c === void 0 ? Ne : c, m = o.elementContext, x = m === void 0 ? Lt : m, f = o.altBoundary, O = f === void 0 ? false : f, d = o.padding, v = d === void 0 ? 0 : d, b = Ve(typeof v != "number" ? v : ze(v, Ft)), T = x === Lt ? ho : Lt, w = e.rects.popper, u = e.elements[O ? T : x], h = Go(ut(u) ? u : u.contextElement || it(e.elements.popper), s, p, l), g = Pt(e.elements.reference), R = qe({
      reference: g,
      element: w,
      placement: n
    }), M = ce(Object.assign({}, w, R)), A = x === Lt ? M : g, P = {
      top: h.top - A.top + b.top,
      bottom: A.bottom - h.bottom + b.bottom,
      left: h.left - A.left + b.left,
      right: A.right - h.right + b.right
    }, E = e.modifiersData.offset;
    if (x === Lt && E) {
      var L = E[n];
      Object.keys(P).forEach(function(S) {
        var z = [
          V,
          U
        ].indexOf(S) >= 0 ? 1 : -1, X = [
          k,
          U
        ].indexOf(S) >= 0 ? "y" : "x";
        P[S] += L[X] * z;
      });
    }
    return P;
  }
  function Jo(e, t) {
    t === void 0 && (t = {});
    var o = t, r = o.placement, n = o.boundary, i = o.rootBoundary, l = o.padding, a = o.flipVariations, s = o.allowedAutoPlacements, c = s === void 0 ? Ie : s, p = Rt(r), m = p ? a ? Te : Te.filter(function(O) {
      return Rt(O) === p;
    }) : Ft, x = m.filter(function(O) {
      return c.indexOf(O) >= 0;
    });
    x.length === 0 && (x = m);
    var f = x.reduce(function(O, d) {
      return O[d] = It(e, {
        placement: d,
        boundary: n,
        rootBoundary: i,
        padding: l
      })[Z(d)], O;
    }, {});
    return Object.keys(f).sort(function(O, d) {
      return f[O] - f[d];
    });
  }
  function Qo(e) {
    if (Z(e) === ve) return [];
    var t = Qt(e);
    return [
      Ce(e),
      t,
      Ce(t)
    ];
  }
  function Zo(e) {
    var t = e.state, o = e.options, r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (var n = o.mainAxis, i = n === void 0 ? true : n, l = o.altAxis, a = l === void 0 ? true : l, s = o.fallbackPlacements, c = o.padding, p = o.boundary, m = o.rootBoundary, x = o.altBoundary, f = o.flipVariations, O = f === void 0 ? true : f, d = o.allowedAutoPlacements, v = t.options.placement, b = Z(v), T = b === v, w = s || (T || !O ? [
        Qt(v)
      ] : Qo(v)), u = [
        v
      ].concat(w).reduce(function(Y, I) {
        return Y.concat(Z(I) === ve ? Jo(t, {
          placement: I,
          boundary: p,
          rootBoundary: m,
          padding: c,
          flipVariations: O,
          allowedAutoPlacements: d
        }) : I);
      }, []), h = t.rects.reference, g = t.rects.popper, R = /* @__PURE__ */ new Map(), M = true, A = u[0], P = 0; P < u.length; P++) {
        var E = u[P], L = Z(E), S = Rt(E) === xt, z = [
          k,
          U
        ].indexOf(L) >= 0, X = z ? "width" : "height", $ = It(t, {
          placement: E,
          boundary: p,
          rootBoundary: m,
          altBoundary: x,
          padding: c
        }), D = z ? S ? V : W : S ? U : k;
        h[X] > g[X] && (D = Qt(D));
        var q = Qt(D), tt = [];
        if (i && tt.push($[L] <= 0), a && tt.push($[D] <= 0, $[q] <= 0), tt.every(function(Y) {
          return Y;
        })) {
          A = E, M = false;
          break;
        }
        R.set(E, tt);
      }
      if (M) for (var J = O ? 3 : 1, dt = function(I) {
        var rt = u.find(function(nt) {
          var F = R.get(nt);
          if (F) return F.slice(0, I).every(function(mt) {
            return mt;
          });
        });
        if (rt) return A = rt, "break";
      }, et = J; et > 0; et--) {
        var vt = dt(et);
        if (vt === "break") break;
      }
      t.placement !== A && (t.modifiersData[r]._skip = true, t.placement = A, t.reset = true);
    }
  }
  const _o = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Zo,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Me(e, t, o) {
    return o === void 0 && (o = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - o.y,
      right: e.right - t.width + o.x,
      bottom: e.bottom - t.height + o.y,
      left: e.left - t.width - o.x
    };
  }
  function De(e) {
    return [
      k,
      V,
      U,
      W
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function tr(e) {
    var t = e.state, o = e.name, r = t.rects.reference, n = t.rects.popper, i = t.modifiersData.preventOverflow, l = It(t, {
      elementContext: "reference"
    }), a = It(t, {
      altBoundary: true
    }), s = Me(l, r), c = Me(a, n, i), p = De(s), m = De(c);
    t.modifiersData[o] = {
      referenceClippingOffsets: s,
      popperEscapeOffsets: c,
      isReferenceHidden: p,
      hasPopperEscaped: m
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": m
    });
  }
  const er = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: tr
  };
  function or(e, t, o) {
    var r = Z(e), n = [
      W,
      k
    ].indexOf(r) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, t, {
      placement: e
    })) : o, l = i[0], a = i[1];
    return l = l || 0, a = (a || 0) * n, [
      W,
      V
    ].indexOf(r) >= 0 ? {
      x: a,
      y: l
    } : {
      x: l,
      y: a
    };
  }
  function rr(e) {
    var t = e.state, o = e.options, r = e.name, n = o.offset, i = n === void 0 ? [
      0,
      0
    ] : n, l = Ie.reduce(function(p, m) {
      return p[m] = or(m, t.rects, i), p;
    }, {}), a = l[t.placement], s = a.x, c = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = l;
  }
  const nr = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: rr
  };
  function ar(e) {
    var t = e.state, o = e.name;
    t.modifiersData[o] = qe({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const ir = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: ar,
    data: {}
  };
  function sr(e) {
    return e === "x" ? "y" : "x";
  }
  function pr(e) {
    var t = e.state, o = e.options, r = e.name, n = o.mainAxis, i = n === void 0 ? true : n, l = o.altAxis, a = l === void 0 ? false : l, s = o.boundary, c = o.rootBoundary, p = o.altBoundary, m = o.padding, x = o.tether, f = x === void 0 ? true : x, O = o.tetherOffset, d = O === void 0 ? 0 : O, v = It(t, {
      boundary: s,
      rootBoundary: c,
      padding: m,
      altBoundary: p
    }), b = Z(t.placement), T = Rt(t.placement), w = !T, u = ge(b), h = sr(u), g = t.modifiersData.popperOffsets, R = t.rects.reference, M = t.rects.popper, A = typeof d == "function" ? d(Object.assign({}, t.rects, {
      placement: t.placement
    })) : d, P = typeof A == "number" ? {
      mainAxis: A,
      altAxis: A
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, A), E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
      x: 0,
      y: 0
    };
    if (g) {
      if (i) {
        var S, z = u === "y" ? k : W, X = u === "y" ? U : V, $ = u === "y" ? "height" : "width", D = g[u], q = D + v[z], tt = D - v[X], J = f ? -M[$] / 2 : 0, dt = T === xt ? R[$] : M[$], et = T === xt ? -M[$] : -R[$], vt = t.elements.arrow, Y = f && vt ? he(vt) : {
          width: 0,
          height: 0
        }, I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ue(), rt = I[z], nt = I[X], F = kt(0, R[$], Y[$]), mt = w ? R[$] / 2 - J - F - rt - P.mainAxis : dt - F - rt - P.mainAxis, ae = w ? -R[$] / 2 + J + F + nt + P.mainAxis : et + F + nt + P.mainAxis, ht = t.elements.arrow && Ht(t.elements.arrow), K = ht ? u === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0, gt = (S = E == null ? void 0 : E[u]) != null ? S : 0, st = D + mt - gt - K, yt = D + ae - gt, Et = kt(f ? _t(q, st) : q, D, f ? ft(tt, yt) : tt);
        g[u] = Et, L[u] = Et - D;
      }
      if (a) {
        var pt, bt = u === "x" ? k : W, At = u === "x" ? U : V, Q = g[h], lt = h === "y" ? "height" : "width", Ct = Q + v[bt], St = Q - v[At], Mt = [
          k,
          W
        ].indexOf(b) !== -1, Ut = (pt = E == null ? void 0 : E[h]) != null ? pt : 0, Vt = Mt ? Ct : Q - R[lt] - M[lt] - Ut + P.altAxis, wt = Mt ? Q + R[lt] + M[lt] - Ut - P.altAxis : St, zt = f && Mt ? $o(Vt, Q, wt) : kt(f ? Vt : Ct, Q, f ? wt : St);
        g[h] = zt, L[h] = zt - Q;
      }
      t.modifiersData[r] = L;
    }
  }
  const lr = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: pr,
    requiresIfExists: [
      "offset"
    ]
  };
  function cr(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function fr(e) {
    return e === N(e) || !H(e) ? ye(e) : cr(e);
  }
  function ur(e) {
    var t = e.getBoundingClientRect(), o = Ot(t.width) / e.offsetWidth || 1, r = Ot(t.height) / e.offsetHeight || 1;
    return o !== 1 || r !== 1;
  }
  function dr(e, t, o) {
    o === void 0 && (o = false);
    var r = H(t), n = H(t) && ur(t), i = it(t), l = Pt(e, n, o), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, s = {
      x: 0,
      y: 0
    };
    return (r || !r && !o) && ((_(t) !== "body" || we(i)) && (a = fr(t)), H(t) ? (s = Pt(t, true), s.x += t.clientLeft, s.y += t.clientTop) : i && (s.x = be(i))), {
      x: l.left + a.scrollLeft - s.x,
      y: l.top + a.scrollTop - s.y,
      width: l.width,
      height: l.height
    };
  }
  function vr(e) {
    var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
    e.forEach(function(i) {
      t.set(i.name, i);
    });
    function n(i) {
      o.add(i.name);
      var l = [].concat(i.requires || [], i.requiresIfExists || []);
      l.forEach(function(a) {
        if (!o.has(a)) {
          var s = t.get(a);
          s && n(s);
        }
      }), r.push(i);
    }
    return e.forEach(function(i) {
      o.has(i.name) || n(i);
    }), r;
  }
  function mr(e) {
    var t = vr(e);
    return Eo.reduce(function(o, r) {
      return o.concat(t.filter(function(n) {
        return n.phase === r;
      }));
    }, []);
  }
  function hr(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(o) {
        Promise.resolve().then(function() {
          t = void 0, o(e());
        });
      })), t;
    };
  }
  function gr(e) {
    var t = e.reduce(function(o, r) {
      var n = o[r.name];
      return o[r.name] = n ? Object.assign({}, n, r, {
        options: Object.assign({}, n.options, r.options),
        data: Object.assign({}, n.data, r.data)
      }) : r, o;
    }, {});
    return Object.keys(t).map(function(o) {
      return t[o];
    });
  }
  var $e = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function je() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return !t.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function yr(e) {
    e === void 0 && (e = {});
    var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, n = t.defaultOptions, i = n === void 0 ? $e : n;
    return function(a, s, c) {
      c === void 0 && (c = i);
      var p = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, $e, i),
        modifiersData: {},
        elements: {
          reference: a,
          popper: s
        },
        attributes: {},
        styles: {}
      }, m = [], x = false, f = {
        state: p,
        setOptions: function(b) {
          var T = typeof b == "function" ? b(p.options) : b;
          d(), p.options = Object.assign({}, i, p.options, T), p.scrollParents = {
            reference: ut(a) ? Wt(a) : a.contextElement ? Wt(a.contextElement) : [],
            popper: Wt(s)
          };
          var w = mr(gr([].concat(r, p.options.modifiers)));
          return p.orderedModifiers = w.filter(function(u) {
            return u.enabled;
          }), O(), f.update();
        },
        forceUpdate: function() {
          if (!x) {
            var b = p.elements, T = b.reference, w = b.popper;
            if (je(T, w)) {
              p.rects = {
                reference: dr(T, Ht(w), p.options.strategy === "fixed"),
                popper: he(w)
              }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(P) {
                return p.modifiersData[P.name] = Object.assign({}, P.data);
              });
              for (var u = 0; u < p.orderedModifiers.length; u++) {
                if (p.reset === true) {
                  p.reset = false, u = -1;
                  continue;
                }
                var h = p.orderedModifiers[u], g = h.fn, R = h.options, M = R === void 0 ? {} : R, A = h.name;
                typeof g == "function" && (p = g({
                  state: p,
                  options: M,
                  name: A,
                  instance: f
                }) || p);
              }
            }
          }
        },
        update: hr(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(p);
          });
        }),
        destroy: function() {
          d(), x = true;
        }
      };
      if (!je(a, s)) return f;
      f.setOptions(c).then(function(v) {
        !x && c.onFirstUpdate && c.onFirstUpdate(v);
      });
      function O() {
        p.orderedModifiers.forEach(function(v) {
          var b = v.name, T = v.options, w = T === void 0 ? {} : T, u = v.effect;
          if (typeof u == "function") {
            var h = u({
              state: p,
              name: b,
              instance: f,
              options: w
            }), g = function() {
            };
            m.push(h || g);
          }
        });
      }
      function d() {
        m.forEach(function(v) {
          return v();
        }), m = [];
      }
      return f;
    };
  }
  var br = [
    Uo,
    ir,
    Fo,
    So,
    nr,
    _o,
    lr,
    ko,
    er
  ], wr = yr({
    defaultModifiers: br
  });
  function xr(e) {
    return te("MuiPopper", e);
  }
  ee("MuiPopper", [
    "root"
  ]);
  function Or(e, t) {
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
  function fe(e) {
    return typeof e == "function" ? e() : e;
  }
  function Pr(e) {
    return e.nodeType !== void 0;
  }
  let Rr, Tr, Er, Ar, Cr;
  Rr = (e) => {
    const { classes: t } = e;
    return oe({
      root: [
        "root"
      ]
    }, xr, t);
  };
  Tr = {};
  Er = C.forwardRef(function(t, o) {
    const { anchorEl: r, children: n, direction: i, disablePortal: l, modifiers: a, open: s, placement: c, popperOptions: p, popperRef: m, slotProps: x = {}, slots: f = {}, TransitionProps: O, ownerState: d, ...v } = t, b = C.useRef(null), T = pe(b, o), w = C.useRef(null), u = pe(w, m), h = C.useRef(u);
    Oe(() => {
      h.current = u;
    }, [
      u
    ]), C.useImperativeHandle(m, () => w.current, []);
    const g = Or(c, i), [R, M] = C.useState(g), [A, P] = C.useState(fe(r));
    C.useEffect(() => {
      w.current && w.current.forceUpdate();
    }), C.useEffect(() => {
      r && P(fe(r));
    }, [
      r
    ]), Oe(() => {
      if (!A || !s) return;
      const X = (q) => {
        M(q.placement);
      };
      let $ = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: l
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: l
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: q }) => {
            X(q);
          }
        }
      ];
      a != null && ($ = $.concat(a)), p && p.modifiers != null && ($ = $.concat(p.modifiers));
      const D = wr(A, b.current, {
        placement: g,
        ...p,
        modifiers: $
      });
      return h.current(D), () => {
        D.destroy(), h.current(null);
      };
    }, [
      A,
      l,
      a,
      s,
      p,
      g
    ]);
    const E = {
      placement: R
    };
    O !== null && (E.TransitionProps = O);
    const L = Rr(t), S = f.root ?? "div", z = ao({
      elementType: S,
      externalSlotProps: x.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: T
      },
      ownerState: t,
      className: L.root
    });
    return B.jsx(S, {
      ...z,
      children: typeof n == "function" ? n(E) : n
    });
  });
  Ar = C.forwardRef(function(t, o) {
    const { anchorEl: r, children: n, container: i, direction: l = "ltr", disablePortal: a = false, keepMounted: s = false, modifiers: c, open: p, placement: m = "bottom", popperOptions: x = Tr, popperRef: f, style: O, transition: d = false, slotProps: v = {}, slots: b = {}, ...T } = t, [w, u] = C.useState(true), h = () => {
      u(false);
    }, g = () => {
      u(true);
    };
    if (!s && !p && (!d || w)) return null;
    let R;
    if (i) R = i;
    else if (r) {
      const P = fe(r);
      R = P && Pr(P) ? xe(P).body : xe(null).body;
    }
    const M = !p && s && (!d || w) ? "none" : void 0, A = d ? {
      in: p,
      onEnter: h,
      onExited: g
    } : void 0;
    return B.jsx(no, {
      disablePortal: a,
      container: R,
      children: B.jsx(Er, {
        anchorEl: r,
        direction: l,
        disablePortal: a,
        modifiers: c,
        ref: o,
        open: d ? !w : p,
        placement: m,
        popperOptions: x,
        popperRef: f,
        slotProps: v,
        slots: b,
        ...T,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: M,
          ...O
        },
        TransitionProps: A,
        children: n
      })
    });
  });
  Cr = Tt(Ar, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({});
  Ye = C.forwardRef(function(t, o) {
    const r = Be(), n = re({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: l, components: a, componentsProps: s, container: c, disablePortal: p, keepMounted: m, modifiers: x, open: f, placement: O, popperOptions: d, popperRef: v, transition: b, slots: T, slotProps: w, ...u } = n, h = (T == null ? void 0 : T.root) ?? (a == null ? void 0 : a.Root), g = {
      anchorEl: i,
      container: c,
      disablePortal: p,
      keepMounted: m,
      modifiers: x,
      open: f,
      placement: O,
      popperOptions: d,
      popperRef: v,
      transition: b,
      ...u
    };
    return B.jsx(Cr, {
      as: l,
      direction: r ? "rtl" : "ltr",
      slots: {
        root: h
      },
      slotProps: w ?? s,
      ...g,
      ref: o
    });
  });
  function Sr(e) {
    return te("MuiDialogActions", e);
  }
  ee("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  let Mr, Dr;
  Mr = (e) => {
    const { classes: t, disableSpacing: o } = e;
    return oe({
      root: [
        "root",
        !o && "spacing"
      ]
    }, Sr, t);
  };
  Dr = Tt("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        !o.disableSpacing && t.spacing
      ];
    }
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disableSpacing,
        style: {
          "& > :not(style) ~ :not(style)": {
            marginLeft: 8
          }
        }
      }
    ]
  });
  Vr = C.forwardRef(function(t, o) {
    const r = re({
      props: t,
      name: "MuiDialogActions"
    }), { className: n, disableSpacing: i = false, ...l } = r, a = {
      ...r,
      disableSpacing: i
    }, s = Mr(a);
    return B.jsx(Dr, {
      className: Zt(s.root, n),
      ownerState: a,
      ref: o,
      ...l
    });
  });
  function $r(e) {
    return te("MuiDialogContentText", e);
  }
  ee("MuiDialogContentText", [
    "root"
  ]);
  let jr, Lr;
  jr = (e) => {
    const { classes: t } = e, r = oe({
      root: [
        "root"
      ]
    }, $r, t);
    return {
      ...t,
      ...r
    };
  };
  Lr = Tt(io, {
    shouldForwardProp: (e) => so(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({});
  zr = C.forwardRef(function(t, o) {
    const r = re({
      props: t,
      name: "MuiDialogContentText"
    }), { children: n, className: i, ...l } = r, a = jr(l);
    return B.jsx(Lr, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: o,
      ownerState: l,
      className: Zt(a.root, i),
      ...r,
      classes: a
    });
  });
  function Br(e) {
    return te("MuiTooltip", e);
  }
  const j = ee("MuiTooltip", [
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
  function kr(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Wr = (e) => {
    const { classes: t, disableInteractive: o, arrow: r, touch: n, placement: i } = e, l = {
      popper: [
        "popper",
        !o && "popperInteractive",
        r && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        r && "tooltipArrow",
        n && "touch",
        `tooltipPlacement${ke(i.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return oe(l, Br, t);
  }, Nr = Tt(Ye, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.popper,
        !o.disableInteractive && t.popperInteractive,
        o.arrow && t.popperArrow,
        !o.open && t.popperClose
      ];
    }
  })(ue(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${j.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${j.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${j.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${j.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${j.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${j.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${j.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${j.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Ir = Tt("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.tooltip,
        o.touch && t.touch,
        o.arrow && t.tooltipArrow,
        t[`tooltipPlacement${ke(o.placement.split("-")[0])}`]
      ];
    }
  })(ue(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : We(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${j.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${j.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${j.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${j.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${kr(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Fr = Tt("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(ue(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : We(e.palette.grey[700], 0.9),
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
  let Gt = false;
  const Le = new vo();
  let Bt = {
    x: 0,
    y: 0
  };
  function Jt(e, t) {
    return (o, ...r) => {
      t && t(o, ...r), e(o, ...r);
    };
  }
  Xr = C.forwardRef(function(t, o) {
    const r = re({
      props: t,
      name: "MuiTooltip"
    }), { arrow: n = false, children: i, classes: l, components: a = {}, componentsProps: s = {}, describeChild: c = false, disableFocusListener: p = false, disableHoverListener: m = false, disableInteractive: x = false, disableTouchListener: f = false, enterDelay: O = 100, enterNextDelay: d = 0, enterTouchDelay: v = 700, followCursor: b = false, id: T, leaveDelay: w = 0, leaveTouchDelay: u = 1500, onClose: h, onOpen: g, open: R, placement: M = "bottom", PopperComponent: A, PopperProps: P = {}, slotProps: E = {}, slots: L = {}, title: S, TransitionComponent: z, TransitionProps: X, ...$ } = r, D = C.isValidElement(i) ? i : B.jsx("span", {
      children: i
    }), q = po(), tt = Be(), [J, dt] = C.useState(), [et, vt] = C.useState(null), Y = C.useRef(false), I = x || b, rt = qt(), nt = qt(), F = qt(), mt = qt(), [ae, ht] = lo({
      controlled: R,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let K = ae;
    const gt = co(T), st = C.useRef(), yt = Pe(() => {
      st.current !== void 0 && (document.body.style.WebkitUserSelect = st.current, st.current = void 0), mt.clear();
    });
    C.useEffect(() => yt, [
      yt
    ]);
    const Et = (y) => {
      Le.clear(), Gt = true, ht(true), g && !K && g(y);
    }, pt = Pe((y) => {
      Le.start(800 + w, () => {
        Gt = false;
      }), ht(false), h && K && h(y), rt.start(q.transitions.duration.shortest, () => {
        Y.current = false;
      });
    }), bt = (y) => {
      Y.current && y.type !== "touchstart" || (J && J.removeAttribute("title"), nt.clear(), F.clear(), O || Gt && d ? nt.start(Gt ? d : O, () => {
        Et(y);
      }) : Et(y));
    }, At = (y) => {
      nt.clear(), F.start(w, () => {
        pt(y);
      });
    }, [, Q] = C.useState(false), lt = (y) => {
      Re(y.target) || (Q(false), At(y));
    }, Ct = (y) => {
      J || dt(y.currentTarget), Re(y.target) && (Q(true), bt(y));
    }, St = (y) => {
      Y.current = true;
      const at = D.props;
      at.onTouchStart && at.onTouchStart(y);
    }, Mt = (y) => {
      St(y), F.clear(), rt.clear(), yt(), st.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", mt.start(v, () => {
        document.body.style.WebkitUserSelect = st.current, bt(y);
      });
    }, Ut = (y) => {
      D.props.onTouchEnd && D.props.onTouchEnd(y), yt(), F.start(u, () => {
        pt(y);
      });
    };
    C.useEffect(() => {
      if (!K) return;
      function y(at) {
        at.key === "Escape" && pt(at);
      }
      return document.addEventListener("keydown", y), () => {
        document.removeEventListener("keydown", y);
      };
    }, [
      pt,
      K
    ]);
    const Vt = pe(fo(D), dt, o);
    !S && S !== 0 && (K = false);
    const wt = C.useRef(), zt = (y) => {
      const at = D.props;
      at.onMouseMove && at.onMouseMove(y), Bt = {
        x: y.clientX,
        y: y.clientY
      }, wt.current && wt.current.update();
    }, Dt = {}, ie = typeof S == "string";
    c ? (Dt.title = !K && ie && !m ? S : null, Dt["aria-describedby"] = K ? gt : null) : (Dt["aria-label"] = ie ? S : null, Dt["aria-labelledby"] = K && !ie ? gt : null);
    const G = {
      ...Dt,
      ...$,
      ...D.props,
      className: Zt($.className, D.props.className),
      onTouchStart: St,
      ref: Vt,
      ...b ? {
        onMouseMove: zt
      } : {}
    }, $t = {};
    f || (G.onTouchStart = Mt, G.onTouchEnd = Ut), m || (G.onMouseOver = Jt(bt, G.onMouseOver), G.onMouseLeave = Jt(At, G.onMouseLeave), I || ($t.onMouseOver = bt, $t.onMouseLeave = At)), p || (G.onFocus = Jt(Ct, G.onFocus), G.onBlur = Jt(lt, G.onBlur), I || ($t.onFocus = Ct, $t.onBlur = lt));
    const ct = {
      ...r,
      isRtl: tt,
      arrow: n,
      disableInteractive: I,
      placement: M,
      PopperComponentProp: A,
      touch: Y.current
    }, jt = typeof E.popper == "function" ? E.popper(ct) : E.popper, Ke = C.useMemo(() => {
      var _a, _b;
      let y = [
        {
          name: "arrow",
          enabled: !!et,
          options: {
            element: et,
            padding: 4
          }
        }
      ];
      return ((_a = P.popperOptions) == null ? void 0 : _a.modifiers) && (y = y.concat(P.popperOptions.modifiers)), ((_b = jt == null ? void 0 : jt.popperOptions) == null ? void 0 : _b.modifiers) && (y = y.concat(jt.popperOptions.modifiers)), {
        ...P.popperOptions,
        ...jt == null ? void 0 : jt.popperOptions,
        modifiers: y
      };
    }, [
      et,
      P.popperOptions,
      jt == null ? void 0 : jt.popperOptions
    ]), se = Wr(ct), Ge = typeof E.transition == "function" ? E.transition(ct) : E.transition, Xt = {
      slots: {
        popper: a.Popper,
        transition: a.Transition ?? z,
        tooltip: a.Tooltip,
        arrow: a.Arrow,
        ...L
      },
      slotProps: {
        arrow: E.arrow ?? s.arrow,
        popper: {
          ...P,
          ...jt ?? s.popper
        },
        tooltip: E.tooltip ?? s.tooltip,
        transition: {
          ...X,
          ...Ge ?? s.transition
        }
      }
    }, [Je, Qe] = Yt("popper", {
      elementType: Nr,
      externalForwardedProps: Xt,
      ownerState: ct,
      className: Zt(se.popper, P == null ? void 0 : P.className)
    }), [Ze, _e] = Yt("transition", {
      elementType: uo,
      externalForwardedProps: Xt,
      ownerState: ct
    }), [to, eo] = Yt("tooltip", {
      elementType: Ir,
      className: se.tooltip,
      externalForwardedProps: Xt,
      ownerState: ct
    }), [oo, ro] = Yt("arrow", {
      elementType: Fr,
      className: se.arrow,
      externalForwardedProps: Xt,
      ownerState: ct,
      ref: vt
    });
    return B.jsxs(C.Fragment, {
      children: [
        C.cloneElement(D, G),
        B.jsx(Je, {
          as: A ?? Ye,
          placement: M,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: Bt.y,
              left: Bt.x,
              right: Bt.x,
              bottom: Bt.y,
              width: 0,
              height: 0
            })
          } : J,
          popperRef: wt,
          open: J ? K : false,
          id: gt,
          transition: true,
          ...$t,
          ...Qe,
          popperOptions: Ke,
          children: ({ TransitionProps: y }) => B.jsx(Ze, {
            timeout: q.transitions.duration.shorter,
            ...y,
            ..._e,
            children: B.jsxs(to, {
              ...eo,
              children: [
                S,
                n ? B.jsx(oo, {
                  ...ro
                }) : null
              ]
            })
          })
        })
      ]
    });
  });
  qr = de(B.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft");
  Yr = de(B.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight");
  Kr = de(B.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore");
});
export {
  zr as D,
  Kr as I,
  Yr as K,
  Ye as P,
  Xr as T,
  __tla,
  qr as a,
  Vr as b
};
