import { v as B, R as Aa, a as x, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as Wa, c as dn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as pf } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let ia, sU, f0, Re, lo, CU, l0, va, wU, Vh, Wc, cU, pw, P0, sl, Op, fa, Lt, He, Tu, Jn, cl, qp, Xp, Wu, Ct, ps, gs, IA, eh, hU, iU, od, fr, nl, dr, Tp, ds, vu, et, pU, ss, YA, gU, cs, nn, ca, Mh, le, ju, pA, RA, Qs, kA, ri, hA, L, tt, pe, OA, xh, ir, yi, ha, $e, lA, BU, KA, sn, Ie, Cw, vU, mU;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Xc = {
    exports: {}
  }, Fo = {};
  var Bf = B, hf = /* @__PURE__ */ Symbol.for("react.element"), wf = /* @__PURE__ */ Symbol.for("react.fragment"), Cf = Object.prototype.hasOwnProperty, mf = Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function jc(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) Cf.call(e, r) && !vf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: hf,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: mf.current
    };
  }
  Fo.Fragment = wf;
  Fo.jsx = jc;
  Fo.jsxs = jc;
  Xc.exports = Fo;
  L = Xc.exports;
  const $r = {
    black: "#000",
    white: "#fff"
  }, Dt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, Mt = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, Pt = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, Nt = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, _t = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, Br = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Qf = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  function At(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  }
  const Ge = "$$material";
  function to() {
    return to = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, to.apply(null, arguments);
  }
  function yf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function bf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Ff = (function() {
    function A(t) {
      var r = this;
      this._insertTag = function(n) {
        var o;
        r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(n, o), r.tags.push(n);
      }, this.isSpeedy = t.speedy === void 0 ? true : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
    }
    var e = A.prototype;
    return e.hydrate = function(r) {
      r.forEach(this._insertTag);
    }, e.insert = function(r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(bf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = yf(n);
        try {
          o.insertRule(r, o.cssRules.length);
        } catch {
        }
      } else n.appendChild(document.createTextNode(r));
      this.ctr++;
    }, e.flush = function() {
      this.tags.forEach(function(r) {
        var n;
        return (n = r.parentNode) == null ? void 0 : n.removeChild(r);
      }), this.tags = [], this.ctr = 0;
    }, A;
  })(), ie = "-ms-", ro = "-moz-", wA = "-webkit-", zc = "comm", Xa = "rule", ja = "decl", Uf = "@import", Jc = "@keyframes", Ef = "@layer", Sf = Math.abs, Uo = String.fromCharCode, xf = Object.assign;
  function If(A, e) {
    return te(A, 0) ^ 45 ? (((e << 2 ^ te(A, 0)) << 2 ^ te(A, 1)) << 2 ^ te(A, 2)) << 2 ^ te(A, 3) : 0;
  }
  function Yc(A) {
    return A.trim();
  }
  function Hf(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function CA(A, e, t) {
    return A.replace(e, t);
  }
  function ea(A, e) {
    return A.indexOf(e);
  }
  function te(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function Wr(A, e, t) {
    return A.slice(e, t);
  }
  function Oe(A) {
    return A.length;
  }
  function za(A) {
    return A.length;
  }
  function fn(A, e) {
    return e.push(A), A;
  }
  function Tf(A, e) {
    return A.map(e).join("");
  }
  var Eo = 1, or = 1, Zc = 0, ge = 0, VA = 0, ur = "";
  function So(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Eo,
      column: or,
      length: i,
      return: ""
    };
  }
  function hr(A, e) {
    return xf(So("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Lf() {
    return VA;
  }
  function kf() {
    return VA = ge > 0 ? te(ur, --ge) : 0, or--, VA === 10 && (or = 1, Eo--), VA;
  }
  function we() {
    return VA = ge < Zc ? te(ur, ge++) : 0, or++, VA === 10 && (or = 1, Eo++), VA;
  }
  function Ve() {
    return te(ur, ge);
  }
  function Wn() {
    return ge;
  }
  function qr(A, e) {
    return Wr(ur, A, e);
  }
  function Xr(A) {
    switch (A) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function qc(A) {
    return Eo = or = 1, Zc = Oe(ur = A), ge = 0, [];
  }
  function Au(A) {
    return ur = "", A;
  }
  function Xn(A) {
    return Yc(qr(ge - 1, ta(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function Rf(A) {
    for (; (VA = Ve()) && VA < 33; ) we();
    return Xr(A) > 2 || Xr(VA) > 3 ? "" : " ";
  }
  function Kf(A, e) {
    for (; --e && we() && !(VA < 48 || VA > 102 || VA > 57 && VA < 65 || VA > 70 && VA < 97); ) ;
    return qr(A, Wn() + (e < 6 && Ve() == 32 && we() == 32));
  }
  function ta(A) {
    for (; we(); ) switch (VA) {
      case A:
        return ge;
      case 34:
      case 39:
        A !== 34 && A !== 39 && ta(VA);
        break;
      case 40:
        A === 41 && ta(A);
        break;
      case 92:
        we();
        break;
    }
    return ge;
  }
  function Of(A, e) {
    for (; we() && A + VA !== 57; ) if (A + VA === 84 && Ve() === 47) break;
    return "/*" + qr(e, ge - 1) + "*" + Uo(A === 47 ? A : we());
  }
  function Df(A) {
    for (; !Xr(Ve()); ) we();
    return qr(A, ge);
  }
  function Mf(A) {
    return Au(jn("", null, null, null, [
      ""
    ], A = qc(A), 0, [
      0
    ], A));
  }
  function jn(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, f = 0, g = 0, h = 1, b = 1, m = 1, y = 0, w = "", v = n, U = o, C = r, S = w; b; ) switch (g = y, y = we()) {
      case 40:
        if (g != 108 && te(S, u - 1) == 58) {
          ea(S += CA(Xn(y), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Xn(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Rf(g);
        break;
      case 92:
        S += Kf(Wn() - 1, 7);
        continue;
      case 47:
        switch (Ve()) {
          case 42:
          case 47:
            fn(Pf(Of(we(), Wn()), e, t), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * h:
        a[l++] = Oe(S) * m;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            m == -1 && (S = CA(S, /\f/g, "")), f > 0 && Oe(S) - u && fn(f > 32 ? Vs(S + ";", r, t, u - 1) : Vs(CA(S, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (fn(C = Gs(S, e, t, l, c, n, a, w, v = [], U = [], u), o), y === 123) if (c === 0) jn(S, e, C, C, v, o, u, a, U);
            else switch (d === 99 && te(S, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                jn(A, C, C, r && fn(Gs(A, C, C, 0, 0, n, a, w, n, v = [], u), U), n, U, u, a, r ? v : U);
                break;
              default:
                jn(S, C, C, C, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, h = m = 1, w = S = "", u = i;
        break;
      case 58:
        u = 1 + Oe(S), f = g;
      default:
        if (h < 1) {
          if (y == 123) --h;
          else if (y == 125 && h++ == 0 && kf() == 125) continue;
        }
        switch (S += Uo(y), y * h) {
          case 38:
            m = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[l++] = (Oe(S) - 1) * m, m = 1;
            break;
          case 64:
            Ve() === 45 && (S += Xn(we())), d = Ve(), c = u = Oe(w = S += Df(Wn())), y++;
            break;
          case 45:
            g === 45 && Oe(S) == 2 && (h = 0);
        }
    }
    return o;
  }
  function Gs(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], f = za(d), g = 0, h = 0, b = 0; g < r; ++g) for (var m = 0, y = Wr(A, u + 1, u = Sf(h = i[g])), w = A; m < f; ++m) (w = Yc(h > 0 ? d[m] + " " + y : CA(y, /&\f/g, d[m]))) && (s[b++] = w);
    return So(A, e, t, n === 0 ? Xa : a, s, l, c);
  }
  function Pf(A, e, t) {
    return So(A, e, t, zc, Uo(Lf()), Wr(A, 2, -2), 0);
  }
  function Vs(A, e, t, r) {
    return So(A, e, t, ja, Wr(A, 0, r), Wr(A, r + 1, -1), r);
  }
  function tr(A, e) {
    for (var t = "", r = za(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Nf(A, e, t, r) {
    switch (A.type) {
      case Ef:
        if (A.children.length) break;
      case Uf:
      case ja:
        return A.return = A.return || A.value;
      case zc:
        return "";
      case Jc:
        return A.return = A.value + "{" + tr(A.children, r) + "}";
      case Xa:
        A.value = A.props.join(",");
    }
    return Oe(t = tr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function _f(A) {
    var e = za(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function Gf(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function eu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Vf = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = Ve(), n === 38 && o === 12 && (t[r] = 1), !Xr(o); ) we();
    return qr(e, ge);
  }, $f = function(e, t) {
    var r = -1, n = 44;
    do
      switch (Xr(n)) {
        case 0:
          n === 38 && Ve() === 12 && (t[r] = 1), e[r] += Vf(ge - 1, t, r);
          break;
        case 2:
          e[r] += Xn(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = Ve() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Uo(n);
      }
    while (n = we());
    return e;
  }, Wf = function(e, t) {
    return Au($f(qc(e), t));
  }, $s = /* @__PURE__ */ new WeakMap(), Xf = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !$s.get(r)) && !n) {
        $s.set(e, true);
        for (var o = [], i = Wf(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, jf = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function tu(A, e) {
    switch (If(A, e)) {
      case 5103:
        return wA + "print-" + A + A;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return wA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return wA + A + ro + A + ie + A + A;
      case 6828:
      case 4268:
        return wA + A + ie + A + A;
      case 6165:
        return wA + A + ie + "flex-" + A + A;
      case 5187:
        return wA + A + CA(A, /(\w+).+(:[^]+)/, wA + "box-$1$2" + ie + "flex-$1$2") + A;
      case 5443:
        return wA + A + ie + "flex-item-" + CA(A, /flex-|-self/, "") + A;
      case 4675:
        return wA + A + ie + "flex-line-pack" + CA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return wA + A + ie + CA(A, "shrink", "negative") + A;
      case 5292:
        return wA + A + ie + CA(A, "basis", "preferred-size") + A;
      case 6060:
        return wA + "box-" + CA(A, "-grow", "") + wA + A + ie + CA(A, "grow", "positive") + A;
      case 4554:
        return wA + CA(A, /([^-])(transform)/g, "$1" + wA + "$2") + A;
      case 6187:
        return CA(CA(CA(A, /(zoom-|grab)/, wA + "$1"), /(image-set)/, wA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return CA(A, /(image-set\([^]*)/, wA + "$1$`$1");
      case 4968:
        return CA(CA(A, /(.+:)(flex-)?(.*)/, wA + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + wA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return CA(A, /(.+)-inline(.+)/, wA + "$1$2") + A;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Oe(A) - 1 - e > 6) switch (te(A, e + 1)) {
          case 109:
            if (te(A, e + 4) !== 45) break;
          case 102:
            return CA(A, /(.+:)(.+)-([^]+)/, "$1" + wA + "$2-$3$1" + ro + (te(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ea(A, "stretch") ? tu(CA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (te(A, e + 1) !== 115) break;
      case 6444:
        switch (te(A, Oe(A) - 3 - (~ea(A, "!important") && 10))) {
          case 107:
            return CA(A, ":", ":" + wA) + A;
          case 101:
            return CA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + wA + (te(A, 14) === 45 ? "inline-" : "") + "box$3$1" + wA + "$2$3$1" + ie + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (te(A, e + 11)) {
          case 114:
            return wA + A + ie + CA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return wA + A + ie + CA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return wA + A + ie + CA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return wA + A + ie + A + A;
    }
    return A;
  }
  var zf = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case ja:
        e.return = tu(e.value, e.length);
        break;
      case Jc:
        return tr([
          hr(e, {
            value: CA(e.value, "@", "@" + wA)
          })
        ], n);
      case Xa:
        if (e.length) return Tf(e.props, function(o) {
          switch (Hf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return tr([
                hr(e, {
                  props: [
                    CA(o, /:(read-\w+)/, ":" + ro + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return tr([
                hr(e, {
                  props: [
                    CA(o, /:(plac\w+)/, ":" + wA + "input-$1")
                  ]
                }),
                hr(e, {
                  props: [
                    CA(o, /:(plac\w+)/, ":" + ro + "$1")
                  ]
                }),
                hr(e, {
                  props: [
                    CA(o, /:(plac\w+)/, ie + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, Jf = [
    zf
  ], Yf = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(h) {
        var b = h.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || Jf, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(h) {
      for (var b = h.getAttribute("data-emotion").split(" "), m = 1; m < b.length; m++) o[b[m]] = true;
      a.push(h);
    });
    var s, l = [
      Xf,
      jf
    ];
    {
      var c, u = [
        Nf,
        Gf(function(h) {
          c.insert(h);
        })
      ], d = _f(l.concat(n, u)), f = function(b) {
        return tr(Mf(b), d);
      };
      s = function(b, m, y, w) {
        c = y, f(b ? b + "{" + m.styles + "}" : m.styles), w && (g.inserted[m.name] = true);
      };
    }
    var g = {
      key: t,
      sheet: new Ff({
        key: t,
        container: i,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: s
    };
    return g.sheet.hydrate(a), g;
  }, ru = {
    exports: {}
  }, vA = {};
  var ZA = typeof Symbol == "function" && Symbol.for, Ja = ZA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ya = ZA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, xo = ZA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Io = ZA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Ho = ZA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, To = ZA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Lo = ZA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Za = ZA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, ko = ZA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ro = ZA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Ko = ZA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Zf = ZA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Oo = ZA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Do = ZA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, qf = ZA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Ag = ZA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, eg = ZA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, tg = ZA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function Ce(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case Ja:
          switch (A = A.type, A) {
            case Za:
            case ko:
            case xo:
            case Ho:
            case Io:
            case Ko:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Lo:
                case Ro:
                case Do:
                case Oo:
                case To:
                  return A;
                default:
                  return e;
              }
          }
        case Ya:
          return e;
      }
    }
  }
  function nu(A) {
    return Ce(A) === ko;
  }
  vA.AsyncMode = Za;
  vA.ConcurrentMode = ko;
  vA.ContextConsumer = Lo;
  vA.ContextProvider = To;
  vA.Element = Ja;
  vA.ForwardRef = Ro;
  vA.Fragment = xo;
  vA.Lazy = Do;
  vA.Memo = Oo;
  vA.Portal = Ya;
  vA.Profiler = Ho;
  vA.StrictMode = Io;
  vA.Suspense = Ko;
  vA.isAsyncMode = function(A) {
    return nu(A) || Ce(A) === Za;
  };
  vA.isConcurrentMode = nu;
  vA.isContextConsumer = function(A) {
    return Ce(A) === Lo;
  };
  vA.isContextProvider = function(A) {
    return Ce(A) === To;
  };
  vA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === Ja;
  };
  vA.isForwardRef = function(A) {
    return Ce(A) === Ro;
  };
  vA.isFragment = function(A) {
    return Ce(A) === xo;
  };
  vA.isLazy = function(A) {
    return Ce(A) === Do;
  };
  vA.isMemo = function(A) {
    return Ce(A) === Oo;
  };
  vA.isPortal = function(A) {
    return Ce(A) === Ya;
  };
  vA.isProfiler = function(A) {
    return Ce(A) === Ho;
  };
  vA.isStrictMode = function(A) {
    return Ce(A) === Io;
  };
  vA.isSuspense = function(A) {
    return Ce(A) === Ko;
  };
  vA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === xo || A === ko || A === Ho || A === Io || A === Ko || A === Zf || typeof A == "object" && A !== null && (A.$$typeof === Do || A.$$typeof === Oo || A.$$typeof === To || A.$$typeof === Lo || A.$$typeof === Ro || A.$$typeof === Ag || A.$$typeof === eg || A.$$typeof === tg || A.$$typeof === qf);
  };
  vA.typeOf = Ce;
  ru.exports = vA;
  var rg = ru.exports, ou = rg, ng = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, og = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, iu = {};
  iu[ou.ForwardRef] = ng;
  iu[ou.Memo] = og;
  var ig = true;
  function au(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var qa = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || ig === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, As = function(e, t, r) {
    qa(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function ag(A) {
    for (var e = 0, t, r = 0, n = A.length; n >= 4; ++r, n -= 4) t = A.charCodeAt(r) & 255 | (A.charCodeAt(++r) & 255) << 8 | (A.charCodeAt(++r) & 255) << 16 | (A.charCodeAt(++r) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, e = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
    switch (n) {
      case 3:
        e ^= (A.charCodeAt(r + 2) & 255) << 16;
      case 2:
        e ^= (A.charCodeAt(r + 1) & 255) << 8;
      case 1:
        e ^= A.charCodeAt(r) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
    }
    return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
  }
  var sg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, lg = /[A-Z]|^ms/g, cg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, su = function(e) {
    return e.charCodeAt(1) === 45;
  }, Ws = function(e) {
    return e != null && typeof e != "boolean";
  }, mi = eu(function(A) {
    return su(A) ? A : A.replace(lg, "-$&").toLowerCase();
  }), Xs = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(cg, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return sg[e] !== 1 && !su(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function jr(A, e, t) {
    if (t == null) return "";
    var r = t;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var n = t;
        if (n.anim === 1) return De = {
          name: n.name,
          styles: n.styles,
          next: De
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) De = {
            name: i.name,
            styles: i.styles,
            next: De
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return ug(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = De, l = t(A);
          return De = s, jr(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function ug(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += jr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Ws(a) && (r += mi(o) + ":" + Xs(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) Ws(i[s]) && (r += mi(o) + ":" + Xs(o, i[s]) + ";");
      else {
        var l = jr(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += mi(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var js = /label:\s*([^\s;{]+)\s*(;|$)/g, De;
  function An(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    De = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += jr(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += jr(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    js.lastIndex = 0;
    for (var l = "", c; (c = js.exec(n)) !== null; ) l += "-" + c[1];
    var u = ag(n) + l;
    return {
      name: u,
      styles: n,
      next: De
    };
  }
  var dg = function(e) {
    return e();
  }, lu = Aa.useInsertionEffect ? Aa.useInsertionEffect : false, cu = lu || dg, zs = lu || B.useLayoutEffect, uu = B.createContext(typeof HTMLElement < "u" ? Yf({
    key: "css"
  }) : null);
  uu.Provider;
  var es = function(e) {
    return B.forwardRef(function(t, r) {
      var n = B.useContext(uu);
      return e(t, n, r);
    });
  }, en = B.createContext({}), ts = {}.hasOwnProperty, ra = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", fg = function(e, t) {
    var r = {};
    for (var n in t) ts.call(t, n) && (r[n] = t[n]);
    return r[ra] = e, r;
  }, gg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return qa(t, r, n), cu(function() {
      return As(t, r, n);
    }), null;
  }, pg = es(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[ra], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = au(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = An(o, void 0, B.useContext(en));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) ts.call(A, l) && l !== "css" && l !== ra && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), B.createElement(B.Fragment, null, B.createElement(gg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), B.createElement(n, s));
  }), Bg = pg, Js = function(e, t) {
    var r = arguments;
    if (t == null || !ts.call(t, "css")) return B.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Bg, o[1] = fg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return B.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(Js || (Js = {}));
  var hg = es(function(A, e) {
    var t = A.styles, r = An([
      t
    ], void 0, B.useContext(en)), n = B.useRef();
    return zs(function() {
      var o = e.key + "-global", i = new e.sheet.constructor({
        key: o,
        nonce: e.sheet.nonce,
        container: e.sheet.container,
        speedy: e.sheet.isSpeedy
      }), a = false, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
      return e.sheet.tags.length && (i.before = e.sheet.tags[0]), s !== null && (a = true, s.setAttribute("data-emotion", o), i.hydrate([
        s
      ])), n.current = [
        i,
        a
      ], function() {
        i.flush();
      };
    }, [
      e
    ]), zs(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && As(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function rs() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return An(e);
  }
  function tn() {
    var A = rs.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var wg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cg = eu(function(A) {
    return wg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), mg = Cg, vg = function(e) {
    return e !== "theme";
  }, Ys = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? mg : vg;
  }, Zs = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Qg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return qa(t, r, n), cu(function() {
      return As(t, r, n);
    }), null;
  }, yg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = Zs(e, t, r), s = a || Ys(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var f = c.length, g = 1; g < f; g++) u.push(c[g], d[g]);
      }
      var h = es(function(b, m, y) {
        var w = l && b.as || n, v = "", U = [], C = b;
        if (b.theme == null) {
          C = {};
          for (var S in b) C[S] = b[S];
          C.theme = B.useContext(en);
        }
        typeof b.className == "string" ? v = au(m.registered, U, b.className) : b.className != null && (v = b.className + " ");
        var H = An(u.concat(U), m.registered, C);
        v += m.key + "-" + H.name, i !== void 0 && (v += " " + i);
        var I = l && a === void 0 ? Ys(w) : s, p = {};
        for (var T in b) l && T === "as" || I(T) && (p[T] = b[T]);
        return p.className = v, y && (p.ref = y), B.createElement(B.Fragment, null, B.createElement(Qg, {
          cache: m,
          serialized: H,
          isStringTag: typeof w == "string"
        }), B.createElement(w, p));
      });
      return h.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", h.defaultProps = e.defaultProps, h.__emotion_real = h, h.__emotion_base = n, h.__emotion_styles = u, h.__emotion_forwardProp = a, Object.defineProperty(h, "toString", {
        value: function() {
          return "." + i;
        }
      }), h.withComponent = function(b, m) {
        var y = A(b, to({}, t, m, {
          shouldForwardProp: Zs(h, m, true)
        }));
        return y.apply(void 0, u);
      }, h;
    };
  }, bg = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ], na = yg.bind(null);
  bg.forEach(function(A) {
    na[A] = na(A);
  });
  function Fg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function du(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Fg(n) ? t : n) : e;
    return L.jsx(hg, {
      styles: r
    });
  }
  function fu(A, e) {
    return na(A, e);
  }
  function Ug(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const qs = [];
  function gt(A) {
    return qs[0] = A, An(qs);
  }
  var gu = {
    exports: {}
  }, UA = {};
  var ns = /* @__PURE__ */ Symbol.for("react.transitional.element"), os = /* @__PURE__ */ Symbol.for("react.portal"), Mo = /* @__PURE__ */ Symbol.for("react.fragment"), Po = /* @__PURE__ */ Symbol.for("react.strict_mode"), No = /* @__PURE__ */ Symbol.for("react.profiler"), _o = /* @__PURE__ */ Symbol.for("react.consumer"), Go = /* @__PURE__ */ Symbol.for("react.context"), Vo = /* @__PURE__ */ Symbol.for("react.forward_ref"), $o = /* @__PURE__ */ Symbol.for("react.suspense"), Wo = /* @__PURE__ */ Symbol.for("react.suspense_list"), Xo = /* @__PURE__ */ Symbol.for("react.memo"), jo = /* @__PURE__ */ Symbol.for("react.lazy"), Eg = /* @__PURE__ */ Symbol.for("react.view_transition"), Sg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case ns:
          switch (A = A.type, A) {
            case Mo:
            case No:
            case Po:
            case $o:
            case Wo:
            case Eg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Go:
                case Vo:
                case jo:
                case Xo:
                  return A;
                case _o:
                  return A;
                default:
                  return e;
              }
          }
        case os:
          return e;
      }
    }
  }
  UA.ContextConsumer = _o;
  UA.ContextProvider = Go;
  UA.Element = ns;
  UA.ForwardRef = Vo;
  UA.Fragment = Mo;
  UA.Lazy = jo;
  UA.Memo = Xo;
  UA.Portal = os;
  UA.Profiler = No;
  UA.StrictMode = Po;
  UA.Suspense = $o;
  UA.SuspenseList = Wo;
  UA.isContextConsumer = function(A) {
    return Ee(A) === _o;
  };
  UA.isContextProvider = function(A) {
    return Ee(A) === Go;
  };
  UA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === ns;
  };
  UA.isForwardRef = function(A) {
    return Ee(A) === Vo;
  };
  UA.isFragment = function(A) {
    return Ee(A) === Mo;
  };
  UA.isLazy = function(A) {
    return Ee(A) === jo;
  };
  UA.isMemo = function(A) {
    return Ee(A) === Xo;
  };
  UA.isPortal = function(A) {
    return Ee(A) === os;
  };
  UA.isProfiler = function(A) {
    return Ee(A) === No;
  };
  UA.isStrictMode = function(A) {
    return Ee(A) === Po;
  };
  UA.isSuspense = function(A) {
    return Ee(A) === $o;
  };
  UA.isSuspenseList = function(A) {
    return Ee(A) === Wo;
  };
  UA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Mo || A === No || A === Po || A === $o || A === Wo || typeof A == "object" && A !== null && (A.$$typeof === jo || A.$$typeof === Xo || A.$$typeof === Go || A.$$typeof === _o || A.$$typeof === Vo || A.$$typeof === Sg || A.getModuleId !== void 0);
  };
  UA.typeOf = Ee;
  gu.exports = UA;
  var pu = gu.exports;
  function Ne(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Bu(A) {
    if (B.isValidElement(A) || pu.isValidElementType(A) || !Ne(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Bu(A[t]);
    }), e;
  }
  YA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return Ne(A) && Ne(e) && Object.keys(e).forEach((n) => {
      B.isValidElement(e[n]) || pu.isValidElementType(e[n]) ? r[n] = e[n] : Ne(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && Ne(A[n]) ? r[n] = YA(A[n], e[n], t) : t.clone ? r[n] = Ne(e[n]) ? Bu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const xg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Ig(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = xg(e), i = Object.keys(o);
    function a(d) {
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t})`;
    }
    function s(d) {
      return `@media (max-width:${(typeof e[d] == "number" ? e[d] : d) - r / 100}${t})`;
    }
    function l(d, f) {
      const g = i.indexOf(f);
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t}) and (max-width:${(g !== -1 && typeof e[i[g]] == "number" ? e[i[g]] : f) - r / 100}${t})`;
    }
    function c(d) {
      return i.indexOf(d) + 1 < i.length ? l(d, i[i.indexOf(d) + 1]) : a(d);
    }
    function u(d) {
      const f = i.indexOf(d);
      return f === 0 ? a(i[1]) : f === i.length - 1 ? s(i[f]) : l(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: o,
      up: a,
      down: s,
      between: l,
      only: c,
      not: u,
      unit: t,
      ...n
    };
  }
  function Al(A, e) {
    if (!A.containerQueries) return e;
    const t = Object.keys(e).filter((r) => r.startsWith("@container")).sort((r, n) => {
      var _a2, _b2;
      const o = /min-width:\s*([0-9.]+)/;
      return +(((_a2 = r.match(o)) == null ? void 0 : _a2[1]) || 0) - +(((_b2 = n.match(o)) == null ? void 0 : _b2[1]) || 0);
    });
    return t.length ? t.reduce((r, n) => {
      const o = e[n];
      return delete r[n], r[n] = o, r;
    }, {
      ...e
    }) : e;
  }
  function Hg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Tg(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function Lg(A) {
    const e = (o, i) => o.replace("@media", i ? `@container ${i}` : "@container");
    function t(o, i) {
      o.up = (...a) => e(A.breakpoints.up(...a), i), o.down = (...a) => e(A.breakpoints.down(...a), i), o.between = (...a) => e(A.breakpoints.between(...a), i), o.only = (...a) => e(A.breakpoints.only(...a), i), o.not = (...a) => {
        const s = e(A.breakpoints.not(...a), i);
        return s.includes("not all and") ? s.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : s;
      };
    }
    const r = {}, n = (o) => (t(r, o), r);
    return t(n), {
      ...A,
      containerQueries: n
    };
  }
  const kg = {
    borderRadius: 4
  };
  function Kr(A, e) {
    return e ? YA(A, e, {
      clone: false
    }) : A;
  }
  const zo = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, el = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${zo[A]}px)`
  }, Rg = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : zo[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  et = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || el;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || el;
      return Object.keys(e).reduce((i, a) => {
        if (Hg(o.keys, a)) {
          const s = Tg(r.containerQueries ? r : Rg, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || zo).includes(a)) {
          const s = o.up(a);
          i[s] = t(e[a], a);
        } else {
          const s = a;
          i[s] = e[s];
        }
        return i;
      }, {});
    }
    return t(e);
  };
  function hu(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function oa(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  gU = function(A, ...e) {
    const t = hu(A), r = [
      t,
      ...e
    ].reduce((n, o) => YA(n, o), {});
    return oa(Object.keys(t), r);
  };
  function Kg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  pU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Kg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  hA = function(A) {
    if (typeof A != "string") throw new Error(At(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Jo(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function no(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Jo(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function GA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Jo(s, r) || {};
      return et(i, a, (u) => {
        let d = no(l, n, u);
        return u === d && typeof u == "string" && (d = no(l, n, `${e}${u === "default" ? "" : hA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function Og(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const Dg = {
    m: "margin",
    p: "padding"
  }, Mg = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: [
      "Left",
      "Right"
    ],
    y: [
      "Top",
      "Bottom"
    ]
  }, tl = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, Pg = Og((A) => {
    if (A.length > 2) if (tl[A]) A = tl[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = Dg[e], n = Mg[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), is = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd"
  ], as = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd"
  ];
  [
    ...is,
    ...as
  ];
  function rn(A, e, t, r) {
    const n = Jo(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  ss = function(A) {
    return rn(A, "spacing", 8);
  };
  nn = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Ng(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = nn(e, t), r), {});
  }
  function _g(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = Pg(t), o = Ng(n, r), i = A[t];
    return et(A, i, o);
  }
  function wu(A, e) {
    const t = ss(A.theme);
    return Object.keys(A).map((r) => _g(A, e, r, t)).reduce(Kr, {});
  }
  function DA(A) {
    return wu(A, is);
  }
  DA.propTypes = {};
  DA.filterProps = is;
  function MA(A) {
    return wu(A, as);
  }
  MA.propTypes = {};
  MA.filterProps = as;
  function Cu(A = 8, e = ss({
    spacing: A
  })) {
    if (A.mui) return A;
    const t = (...r) => (r.length === 0 ? [
      1
    ] : r).map((o) => {
      const i = e(o);
      return typeof i == "number" ? `${i}px` : i;
    }).join(" ");
    return t.mui = true, t;
  }
  function Yo(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Kr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function Qe(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Se(A, e) {
    return GA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const Gg = Se("border", Qe), Vg = Se("borderTop", Qe), $g = Se("borderRight", Qe), Wg = Se("borderBottom", Qe), Xg = Se("borderLeft", Qe), jg = Se("borderColor"), zg = Se("borderTopColor"), Jg = Se("borderRightColor"), Yg = Se("borderBottomColor"), Zg = Se("borderLeftColor"), qg = Se("outline", Qe), Ap = Se("outlineColor"), Zo = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = rn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: nn(e, r)
      });
      return et(A, A.borderRadius, t);
    }
    return null;
  };
  Zo.propTypes = {};
  Zo.filterProps = [
    "borderRadius"
  ];
  Yo(Gg, Vg, $g, Wg, Xg, jg, zg, Jg, Yg, Zg, Zo, qg, Ap);
  const qo = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = rn(A.theme, "spacing", 8), t = (r) => ({
        gap: nn(e, r)
      });
      return et(A, A.gap, t);
    }
    return null;
  };
  qo.propTypes = {};
  qo.filterProps = [
    "gap"
  ];
  const Ai = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = rn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: nn(e, r)
      });
      return et(A, A.columnGap, t);
    }
    return null;
  };
  Ai.propTypes = {};
  Ai.filterProps = [
    "columnGap"
  ];
  const ei = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = rn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: nn(e, r)
      });
      return et(A, A.rowGap, t);
    }
    return null;
  };
  ei.propTypes = {};
  ei.filterProps = [
    "rowGap"
  ];
  const ep = GA({
    prop: "gridColumn"
  }), tp = GA({
    prop: "gridRow"
  }), rp = GA({
    prop: "gridAutoFlow"
  }), np = GA({
    prop: "gridAutoColumns"
  }), op = GA({
    prop: "gridAutoRows"
  }), ip = GA({
    prop: "gridTemplateColumns"
  }), ap = GA({
    prop: "gridTemplateRows"
  }), sp = GA({
    prop: "gridTemplateAreas"
  }), lp = GA({
    prop: "gridArea"
  });
  Yo(qo, Ai, ei, ep, tp, rp, np, op, ip, ap, sp, lp);
  function rr(A, e) {
    return e === "grey" ? e : A;
  }
  const cp = GA({
    prop: "color",
    themeKey: "palette",
    transform: rr
  }), up = GA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: rr
  }), dp = GA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: rr
  });
  Yo(cp, up, dp);
  function he(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const fp = GA({
    prop: "width",
    transform: he
  }), ls = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || zo[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: he(t)
        };
      };
      return et(A, A.maxWidth, e);
    }
    return null;
  };
  ls.filterProps = [
    "maxWidth"
  ];
  const gp = GA({
    prop: "minWidth",
    transform: he
  }), pp = GA({
    prop: "height",
    transform: he
  }), Bp = GA({
    prop: "maxHeight",
    transform: he
  }), hp = GA({
    prop: "minHeight",
    transform: he
  });
  GA({
    prop: "size",
    cssProperty: "width",
    transform: he
  });
  GA({
    prop: "size",
    cssProperty: "height",
    transform: he
  });
  const wp = GA({
    prop: "boxSizing"
  });
  Yo(fp, ls, gp, pp, Bp, hp, wp);
  const on = {
    border: {
      themeKey: "borders",
      transform: Qe
    },
    borderTop: {
      themeKey: "borders",
      transform: Qe
    },
    borderRight: {
      themeKey: "borders",
      transform: Qe
    },
    borderBottom: {
      themeKey: "borders",
      transform: Qe
    },
    borderLeft: {
      themeKey: "borders",
      transform: Qe
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: Qe
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: Zo
    },
    color: {
      themeKey: "palette",
      transform: rr
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: rr
    },
    backgroundColor: {
      themeKey: "palette",
      transform: rr
    },
    p: {
      style: MA
    },
    pt: {
      style: MA
    },
    pr: {
      style: MA
    },
    pb: {
      style: MA
    },
    pl: {
      style: MA
    },
    px: {
      style: MA
    },
    py: {
      style: MA
    },
    padding: {
      style: MA
    },
    paddingTop: {
      style: MA
    },
    paddingRight: {
      style: MA
    },
    paddingBottom: {
      style: MA
    },
    paddingLeft: {
      style: MA
    },
    paddingX: {
      style: MA
    },
    paddingY: {
      style: MA
    },
    paddingInline: {
      style: MA
    },
    paddingInlineStart: {
      style: MA
    },
    paddingInlineEnd: {
      style: MA
    },
    paddingBlock: {
      style: MA
    },
    paddingBlockStart: {
      style: MA
    },
    paddingBlockEnd: {
      style: MA
    },
    m: {
      style: DA
    },
    mt: {
      style: DA
    },
    mr: {
      style: DA
    },
    mb: {
      style: DA
    },
    ml: {
      style: DA
    },
    mx: {
      style: DA
    },
    my: {
      style: DA
    },
    margin: {
      style: DA
    },
    marginTop: {
      style: DA
    },
    marginRight: {
      style: DA
    },
    marginBottom: {
      style: DA
    },
    marginLeft: {
      style: DA
    },
    marginX: {
      style: DA
    },
    marginY: {
      style: DA
    },
    marginInline: {
      style: DA
    },
    marginInlineStart: {
      style: DA
    },
    marginInlineEnd: {
      style: DA
    },
    marginBlock: {
      style: DA
    },
    marginBlockStart: {
      style: DA
    },
    marginBlockEnd: {
      style: DA
    },
    displayPrint: {
      cssProperty: false,
      transform: (A) => ({
        "@media print": {
          display: A
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: qo
    },
    rowGap: {
      style: ei
    },
    columnGap: {
      style: Ai
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: he
    },
    maxWidth: {
      style: ls
    },
    minWidth: {
      transform: he
    },
    height: {
      transform: he
    },
    maxHeight: {
      transform: he
    },
    minHeight: {
      transform: he
    },
    boxSizing: {},
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function Cp(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function mp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function vp() {
    function A(t, r, n, o) {
      const i = {
        [t]: r,
        theme: n
      }, a = o[t];
      if (!a) return {
        [t]: r
      };
      const { cssProperty: s = t, themeKey: l, transform: c, style: u } = a;
      if (r == null) return null;
      if (l === "typography" && r === "inherit") return {
        [t]: r
      };
      const d = Jo(n, l) || {};
      return u ? u(i) : et(i, r, (g) => {
        let h = no(d, c, g);
        return g === h && typeof g == "string" && (h = no(d, c, `${t}${g === "default" ? "" : hA(g)}`, g)), s === false ? h : {
          [s]: h
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? on;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = hu(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((f) => {
          const g = mp(l[f], n);
          if (g != null) if (typeof g == "object") if (i[f]) d = Kr(d, A(f, g, n, i));
          else {
            const h = et({
              theme: n
            }, g, (b) => ({
              [f]: b
            }));
            Cp(h, g) ? d[f] = e({
              sx: g,
              theme: n,
              nested: true
            }) : d = Kr(d, h);
          }
          else d = Kr(d, A(f, g, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": Al(n, oa(u, d))
        } : Al(n, oa(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const ht = vp();
  ht.filterProps = [
    "sx"
  ];
  function Qp(A, e) {
    var _a2;
    const t = this;
    if (t.vars) {
      if (!((_a2 = t.colorSchemes) == null ? void 0 : _a2[A]) || typeof t.getColorSchemeSelector != "function") return {};
      let r = t.getColorSchemeSelector(A);
      return r === "&" ? e : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), {
        [r]: e
      });
    }
    return t.palette.mode === A ? e : {};
  }
  cs = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Ig(t), s = Cu(n);
    let l = YA({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: s,
      shape: {
        ...kg,
        ...o
      }
    }, i);
    return l = Lg(l), l.applyStyles = Qp, l = e.reduce((c, u) => YA(c, u), l), l.unstable_sxConfig = {
      ...on,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return ht({
        sx: u,
        theme: this
      });
    }, l;
  };
  function yp(A) {
    return Object.keys(A).length === 0;
  }
  function us(A = null) {
    const e = B.useContext(en);
    return !e || yp(e) ? A : e;
  }
  const bp = cs();
  ds = function(A = bp) {
    return us(A);
  };
  function vi(A) {
    const e = gt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function mu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = ds(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => vi(typeof i == "function" ? i(n) : i)) : o = vi(o)), L.jsx(du, {
      styles: o
    });
  }
  const Fp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? on;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  vu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Fp(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return Ne(a) ? {
        ...r,
        ...a
      } : r;
    } : o = {
      ...r,
      ...e
    }, {
      ...n,
      sx: o
    };
  };
  const rl = (A) => A, Up = () => {
    let A = rl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = rl;
      }
    };
  }, Qu = Up();
  function yu(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = yu(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  pA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = yu(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Ep(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = fu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(ht);
    return B.forwardRef(function(s, l) {
      const c = ds(t), { className: u, component: d = "div", ...f } = vu(s);
      return L.jsx(o, {
        as: d,
        ref: l,
        className: pA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Sp = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  kA = function(A, e, t = "Mui") {
    const r = Sp[e];
    return r ? `${t}-${r}` : `${Qu.generate(A)}-${e}`;
  };
  IA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = kA(A, n, t);
    }), r;
  };
  function bu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: gt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = gt(n.style));
    }), r;
  }
  const xp = cs();
  function Qi(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function It(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Ip(A) {
    return A ? (e, t) => t[A] : null;
  }
  function Hp(A, e, t) {
    A.theme = kp(A.theme) ? t : A.theme[e] || A.theme;
  }
  function zn(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => zn(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? It(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? It(gt(i), t) : i;
      }
      return Fu(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? It(gt(r.style), t) : r.style : t ? It(gt(r), t) : r;
  }
  function Fu(A, e, t = [], r = void 0) {
    var _a2;
    let n;
    A: for (let o = 0; o < e.length; o += 1) {
      const i = e[o];
      if (typeof i.props == "function") {
        if (n ??= {
          ...A,
          ...A.ownerState,
          ownerState: A.ownerState
        }, !i.props(n)) continue;
      } else for (const a in i.props) if (A[a] !== i.props[a] && ((_a2 = A.ownerState) == null ? void 0 : _a2[a]) !== i.props[a]) continue A;
      typeof i.style == "function" ? (n ??= {
        ...A,
        ...A.ownerState,
        ownerState: A.ownerState
      }, t.push(r ? It(gt(i.style(n)), r) : i.style(n))) : t.push(r ? It(gt(i.style), r) : i.style);
    }
    return t;
  }
  Tp = function(A = {}) {
    const { themeId: e, defaultTheme: t = xp, rootShouldForwardProp: r = Qi, slotShouldForwardProp: n = Qi } = A;
    function o(a) {
      Hp(a, e, t);
    }
    return (a, s = {}) => {
      Ug(a, (C) => C.filter((S) => S !== ht));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f = Ip(Kp(c)), ...g } = s, h = l && l.startsWith("Mui") || c ? "components" : "custom", b = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, m = d || false;
      let y = Qi;
      c === "Root" || c === "root" ? y = r : c ? y = n : Rp(a) && (y = void 0);
      const w = fu(a, {
        shouldForwardProp: y,
        label: Lp(),
        ...g
      }), v = (C) => {
        if (C.__emotion_real === C) return C;
        if (typeof C == "function") return function(H) {
          return zn(H, C, H.theme.modularCssLayers ? h : void 0);
        };
        if (Ne(C)) {
          const S = bu(C);
          return function(I) {
            return S.variants ? zn(I, S, I.theme.modularCssLayers ? h : void 0) : I.theme.modularCssLayers ? It(S.style, h) : S.style;
          };
        }
        return C;
      }, U = (...C) => {
        const S = [], H = C.map(v), I = [];
        if (S.push(o), l && f && I.push(function(k) {
          var _a2, _b2;
          const M = (_b2 = (_a2 = k.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!M) return null;
          const P = {};
          for (const X in M) P[X] = zn(k, M[X], k.theme.modularCssLayers ? "theme" : void 0);
          return f(k, P);
        }), l && !b && I.push(function(k) {
          var _a2, _b2, _c2;
          const M = (_c2 = (_b2 = (_a2 = k.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return M ? Fu(k, M, [], k.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || I.push(ht), Array.isArray(H[0])) {
          const R = H.shift(), k = new Array(S.length).fill(""), _ = new Array(I.length).fill("");
          let M;
          M = [
            ...k,
            ...R,
            ..._
          ], M.raw = [
            ...k,
            ...R.raw,
            ..._
          ], S.unshift(M);
        }
        const p = [
          ...S,
          ...H,
          ...I
        ], T = w(...p);
        return a.muiName && (T.muiName = a.muiName), T;
      };
      return w.withConfig && (U.withConfig = w.withConfig), U;
    };
  };
  function Lp(A, e) {
    return void 0;
  }
  function kp(A) {
    for (const e in A) return false;
    return true;
  }
  function Rp(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Kp(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  ia = function(A, e) {
    const t = {
      ...e
    };
    for (const r in A) if (Object.prototype.hasOwnProperty.call(A, r)) {
      const n = r;
      if (n === "components" || n === "slots") t[n] = {
        ...A[n],
        ...t[n]
      };
      else if (n === "componentsProps" || n === "slotProps") {
        const o = A[n], i = e[n];
        if (!i) t[n] = o || {};
        else if (!o) t[n] = i;
        else {
          t[n] = {
            ...i
          };
          for (const a in o) if (Object.prototype.hasOwnProperty.call(o, a)) {
            const s = a;
            t[n][s] = ia(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  tt = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
  Op = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function fs(A, e = 0, t = 1) {
    return Op(A, e, t);
  }
  function Dp(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function wt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return wt(Dp(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(At(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(At(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const Mp = (A) => {
    const e = wt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Ur = (A, e) => {
    try {
      return Mp(A);
    } catch {
      return A;
    }
  };
  function ti(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Uu(A) {
    A = wt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), ti({
      type: a,
      values: s
    });
  }
  function aa(A) {
    A = wt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? wt(Uu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function Pp(A, e) {
    const t = aa(A), r = aa(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  ir = function(A, e) {
    return A = wt(A), e = fs(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, ti(A);
  };
  function gn(A, e, t) {
    try {
      return ir(A, e);
    } catch {
      return A;
    }
  }
  gs = function(A, e) {
    if (A = wt(A), e = fs(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return ti(A);
  };
  function bA(A, e, t) {
    try {
      return gs(A, e);
    } catch {
      return A;
    }
  }
  ps = function(A, e) {
    if (A = wt(A), e = fs(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return ti(A);
  };
  function FA(A, e, t) {
    try {
      return ps(A, e);
    } catch {
      return A;
    }
  }
  function Np(A, e = 0.15) {
    return aa(A) > 0.5 ? gs(A, e) : ps(A, e);
  }
  function pn(A, e, t) {
    try {
      return Np(A, e);
    } catch {
      return A;
    }
  }
  nl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Eu(A, e = 166) {
    let t;
    function r(...n) {
      const o = () => {
        A.apply(this, n);
      };
      clearTimeout(t), t = setTimeout(o, e);
    }
    return r.clear = () => {
      clearTimeout(t);
    }, r;
  }
  yi = function(A, e) {
    var _a2, _b2, _c2;
    return B.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  He = function(A) {
    return A && A.ownerDocument || document;
  };
  function rt(A) {
    return He(A).defaultView || window;
  }
  function ol(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let il = 0;
  function _p(A) {
    const [e, t] = B.useState(A), r = A || e;
    return B.useEffect(() => {
      e == null && (il += 1, t(`mui-${il}`));
    }, [
      e
    ]), r;
  }
  const Gp = {
    ...Aa
  }, al = Gp.useId;
  ri = function(A) {
    if (al !== void 0) {
      const e = al();
      return A ?? e;
    }
    return _p(A);
  };
  sl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = B.useRef(A !== void 0), [o, i] = B.useState(e), a = n ? A : o, s = B.useCallback((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  Lt = function(A) {
    const e = B.useRef(A);
    return tt(() => {
      e.current = A;
    }), B.useRef((...t) => (0, e.current)(...t)).current;
  };
  pe = function(...A) {
    const e = B.useRef(void 0), t = B.useCallback((r) => {
      const n = A.map((o) => {
        if (o == null) return null;
        if (typeof o == "function") {
          const i = o, a = i(r);
          return typeof a == "function" ? a : () => {
            i(null);
          };
        }
        return o.current = r, () => {
          o.current = null;
        };
      });
      return () => {
        n.forEach((o) => o == null ? void 0 : o());
      };
    }, A);
    return B.useMemo(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const ll = {};
  function Su(A, e) {
    const t = B.useRef(ll);
    return t.current === ll && (t.current = A(e)), t;
  }
  const Vp = [];
  function $p(A) {
    B.useEffect(A, Vp);
  }
  class Bs {
    static create() {
      return new Bs();
    }
    currentId = null;
    start(e, t) {
      this.clear(), this.currentId = setTimeout(() => {
        this.currentId = null, t();
      }, e);
    }
    clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    };
    disposeEffect = () => this.clear;
  }
  function xu() {
    const A = Su(Bs.create).current;
    return $p(A.disposeEffect), A;
  }
  cl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Iu(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  RA = function(A, e, t = void 0) {
    const r = {};
    for (const n in A) {
      const o = A[n];
      let i = "", a = true;
      for (let s = 0; s < o.length; s += 1) {
        const l = o[s];
        l && (i += (a === true ? "" : " ") + e(l), a = false, t && t[l] && (i += " " + t[l]));
      }
      r[n] = i;
    }
    return r;
  };
  function Wp(A) {
    return typeof A == "string";
  }
  function Hu(A, e, t) {
    return A === void 0 || Wp(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Tu = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function ul(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Lu(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), g = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, h = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (h.className = f), Object.keys(g).length > 0 && (h.style = g), {
        props: h,
        internalRef: void 0
      };
    }
    const i = Tu({
      ...n,
      ...r
    }), a = ul(r), s = ul(n), l = e(i), c = pA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
      ...l == null ? void 0 : l.style,
      ...t == null ? void 0 : t.style,
      ...n == null ? void 0 : n.style,
      ...r == null ? void 0 : r.style
    }, d = {
      ...l,
      ...t,
      ...s,
      ...a
    };
    return c.length > 0 && (d.className = c), Object.keys(u).length > 0 && (d.style = u), {
      props: d,
      internalRef: l.ref
    };
  }
  function ku(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  Xp = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : ku(t, r), { props: a, internalRef: s } = Lu({
      ...o,
      externalSlotProps: i
    }), l = pe(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Hu(e, {
      ...a,
      ref: l
    }, r);
  };
  function an(A) {
    var _a2;
    return parseInt(B.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const Ru = B.createContext(null);
  function hs() {
    return B.useContext(Ru);
  }
  const jp = typeof Symbol == "function" && Symbol.for, zp = jp ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function Jp(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function Yp(A) {
    const { children: e, theme: t } = A, r = hs(), n = B.useMemo(() => {
      const o = r === null ? {
        ...t
      } : Jp(r, t);
      return o != null && (o[zp] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(Ru.Provider, {
      value: n,
      children: e
    });
  }
  const Ku = B.createContext();
  function Zp({ value: A, ...e }) {
    return L.jsx(Ku.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Ou;
  qp = () => B.useContext(Ku) ?? false;
  Ou = B.createContext(void 0);
  function AB({ value: A, children: e }) {
    return L.jsx(Ou.Provider, {
      value: A,
      children: e
    });
  }
  function eB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? ia(n.defaultProps, r) : !n.styleOverrides && !n.variants ? ia(n, r) : r;
  }
  function tB({ props: A, name: e }) {
    const t = B.useContext(Ou);
    return eB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function rB(A) {
    const e = us(), t = ri() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, tt(() => {
      var _a2, _b2;
      const o = document.querySelector("head");
      if (!o) return;
      const i = o.firstChild;
      if (n) {
        if (i && ((_a2 = i.hasAttribute) == null ? void 0 : _a2.call(i, "data-mui-layer-order")) && i.getAttribute("data-mui-layer-order") === t) return;
        const a = document.createElement("style");
        a.setAttribute("data-mui-layer-order", t), a.textContent = n, o.prepend(a);
      } else (_b2 = o.querySelector(`style[data-mui-layer-order="${t}"]`)) == null ? void 0 : _b2.remove();
    }, [
      n,
      t
    ]), n ? L.jsx(mu, {
      styles: n
    }) : null;
  }
  const dl = {};
  function fl(A, e, t, r = false) {
    return B.useMemo(() => {
      const n = A && e[A] || e;
      if (typeof t == "function") {
        const o = t(n), i = A ? {
          ...e,
          [A]: o
        } : o;
        return r ? () => i : i;
      }
      return A ? {
        ...e,
        [A]: t
      } : {
        ...e,
        ...t
      };
    }, [
      A,
      e,
      t,
      r
    ]);
  }
  function Du(A) {
    const { children: e, theme: t, themeId: r } = A, n = us(dl), o = hs() || dl, i = fl(r, n, t), a = fl(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = rB(i);
    return L.jsx(Yp, {
      theme: a,
      children: L.jsx(en.Provider, {
        value: i,
        children: L.jsx(Zp, {
          value: s,
          children: L.jsxs(AB, {
            value: r ? i[r].components : i.components,
            children: [
              l,
              e
            ]
          })
        })
      })
    });
  }
  const gl = {
    theme: void 0
  };
  function nB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (gl.theme = n.theme, o = bu(A(gl)), e = o, t = n.theme), o;
    };
  }
  const ws = "mode", Cs = "color-scheme", oB = "data-color-scheme";
  function iB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = ws, colorSchemeStorageKey: o = Cs, attribute: i = oB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
    let l = "", c = i;
    if (i === "class" && (c = ".%s"), i === "data" && (c = "[data-%s]"), c.startsWith(".")) {
      const d = c.substring(1);
      l += `${a}.classList.remove('${d}'.replace('%s', light), '${d}'.replace('%s', dark));
      ${a}.classList.add('${d}'.replace('%s', colorScheme));`;
    }
    const u = c.match(/\[([^\]]+)\]/);
    if (u) {
      const [d, f] = u[1].split("=");
      f || (l += `${a}.removeAttribute('${d}'.replace('%s', light));
      ${a}.removeAttribute('${d}'.replace('%s', dark));`), l += `
      ${a}.setAttribute('${d}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
    } else l += `${a}.setAttribute('${c}', colorScheme);`;
    return L.jsx("script", {
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? s : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${e}';
  const dark = localStorage.getItem('${o}-dark') || '${r}';
  const light = localStorage.getItem('${o}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`
      }
    }, "mui-color-scheme-init");
  }
  function aB() {
  }
  const sB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
    get(t) {
      if (typeof window > "u") return;
      if (!e) return t;
      let r;
      try {
        r = e.localStorage.getItem(A);
      } catch {
      }
      return r || t;
    },
    set: (t) => {
      if (e) try {
        e.localStorage.setItem(A, t);
      } catch {
      }
    },
    subscribe: (t) => {
      if (!e) return aB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function bi() {
  }
  function pl(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Mu(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function lB(A) {
    return Mu(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function cB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = ws, colorSchemeStorageKey: i = Cs, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = sB, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = B.useMemo(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), f = B.useMemo(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), g = B.useMemo(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [h, b] = B.useState(() => {
      const H = (d == null ? void 0 : d.get(e)) || e, I = (f == null ? void 0 : f.get(t)) || t, p = (g == null ? void 0 : g.get(r)) || r;
      return {
        mode: H,
        systemMode: pl(H),
        lightColorScheme: I,
        darkColorScheme: p
      };
    }), [m, y] = B.useState(l || !u);
    B.useEffect(() => {
      y(true);
    }, []);
    const w = lB(h), v = B.useCallback((H) => {
      b((I) => {
        if (H === I.mode) return I;
        const p = H ?? e;
        return d == null ? void 0 : d.set(p), {
          ...I,
          mode: p,
          systemMode: pl(p)
        };
      });
    }, [
      d,
      e
    ]), U = B.useCallback((H) => {
      H ? typeof H == "string" ? H && !c.includes(H) ? console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`) : b((I) => {
        const p = {
          ...I
        };
        return Mu(I, (T) => {
          T === "light" && (f == null ? void 0 : f.set(H), p.lightColorScheme = H), T === "dark" && (g == null ? void 0 : g.set(H), p.darkColorScheme = H);
        }), p;
      }) : b((I) => {
        const p = {
          ...I
        }, T = H.light === null ? t : H.light, R = H.dark === null ? r : H.dark;
        return T && (c.includes(T) ? (p.lightColorScheme = T, f == null ? void 0 : f.set(T)) : console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`)), R && (c.includes(R) ? (p.darkColorScheme = R, g == null ? void 0 : g.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), p;
      }) : b((I) => (f == null ? void 0 : f.set(t), g == null ? void 0 : g.set(r), {
        ...I,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      g,
      t,
      r
    ]), C = B.useCallback((H) => {
      h.mode === "system" && b((I) => {
        const p = (H == null ? void 0 : H.matches) ? "dark" : "light";
        return I.systemMode === p ? I : {
          ...I,
          systemMode: p
        };
      });
    }, [
      h.mode
    ]), S = B.useRef(C);
    return S.current = C, B.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const H = (...p) => S.current(...p), I = window.matchMedia("(prefers-color-scheme: dark)");
      return I.addListener(H), H(I), () => {
        I.removeListener(H);
      };
    }, [
      u
    ]), B.useEffect(() => {
      if (u) {
        const H = (d == null ? void 0 : d.subscribe((T) => {
          (!T || [
            "light",
            "dark",
            "system"
          ].includes(T)) && v(T || e);
        })) || bi, I = (f == null ? void 0 : f.subscribe((T) => {
          (!T || c.match(T)) && U({
            light: T
          });
        })) || bi, p = (g == null ? void 0 : g.subscribe((T) => {
          (!T || c.match(T)) && U({
            dark: T
          });
        })) || bi;
        return () => {
          H(), I(), p();
        };
      }
    }, [
      U,
      v,
      c,
      e,
      a,
      u,
      d,
      f,
      g
    ]), {
      ...h,
      mode: m ? h.mode : void 0,
      systemMode: m ? h.systemMode : void 0,
      colorScheme: m ? w : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const uB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function dB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = ws, colorSchemeStorageKey: n = Cs, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {
      },
      setMode: () => {
      },
      systemMode: void 0
    }, l = B.createContext(void 0), c = () => B.useContext(l) || s, u = {}, d = {};
    function f(m) {
      var _a2, _b2, _c2, _d2;
      const { children: y, theme: w, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: C = o, storageManager: S, storageWindow: H = typeof window > "u" ? void 0 : window, documentNode: I = typeof document > "u" ? void 0 : document, colorSchemeNode: p = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: T = false, disableStyleSheetGeneration: R = false, defaultMode: k = "system", noSsr: _ } = m, M = B.useRef(false), P = hs(), X = B.useContext(l), J = !!X && !T, D = B.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), j = D[e], eA = j || D, { colorSchemes: nA = u, components: K = d, cssVarPrefix: $ } = eA, V = Object.keys(nA).filter((gA) => !!nA[gA]).join(","), Y = B.useMemo(() => V.split(","), [
        V
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, tA = nA[dA] && nA[iA] ? k : ((_b2 = (_a2 = nA[eA.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = eA.palette) == null ? void 0 : _c2.mode), { mode: z, setMode: oA, systemMode: aA, lightColorScheme: Q, darkColorScheme: E, colorScheme: F, setColorScheme: N } = cB({
        supportedColorSchemes: Y,
        defaultLightColorScheme: dA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: U,
        defaultMode: tA,
        storageManager: S,
        storageWindow: H,
        noSsr: _
      });
      let W = z, G = F;
      J && (W = X.mode, G = X.colorScheme);
      const sA = B.useMemo(() => {
        var _a3;
        const gA = G || eA.defaultColorScheme, PA = ((_a3 = eA.generateThemeVars) == null ? void 0 : _a3.call(eA)) || eA.vars, WA = {
          ...eA,
          components: K,
          colorSchemes: nA,
          cssVarPrefix: $,
          vars: PA
        };
        if (typeof WA.generateSpacing == "function" && (WA.spacing = WA.generateSpacing()), gA) {
          const oe = nA[gA];
          oe && typeof oe == "object" && Object.keys(oe).forEach((jA) => {
            oe[jA] && typeof oe[jA] == "object" ? WA[jA] = {
              ...WA[jA],
              ...oe[jA]
            } : WA[jA] = oe[jA];
          });
        }
        return a ? a(WA) : WA;
      }, [
        eA,
        G,
        K,
        nA,
        $
      ]), cA = eA.colorSchemeSelector;
      tt(() => {
        if (G && p && cA && cA !== "media") {
          const gA = cA;
          let PA = cA;
          if (gA === "class" && (PA = ".%s"), gA === "data" && (PA = "[data-%s]"), (gA == null ? void 0 : gA.startsWith("data-")) && !gA.includes("%s") && (PA = `[${gA}="%s"]`), PA.startsWith(".")) p.classList.remove(...Y.map((WA) => PA.substring(1).replace("%s", WA))), p.classList.add(PA.substring(1).replace("%s", G));
          else {
            const WA = PA.replace("%s", G).match(/\[([^\]]+)\]/);
            if (WA) {
              const [oe, jA] = WA[1].split("=");
              jA || Y.forEach((ot) => {
                p.removeAttribute(oe.replace(G, ot));
              }), p.setAttribute(oe, jA ? jA.replace(/"|'/g, "") : "");
            } else p.setAttribute(PA, G);
          }
        }
      }, [
        G,
        cA,
        p,
        Y
      ]), B.useEffect(() => {
        let gA;
        if (C && M.current && I) {
          const PA = I.createElement("style");
          PA.appendChild(I.createTextNode(uB)), I.head.appendChild(PA), window.getComputedStyle(I.body), gA = setTimeout(() => {
            I.head.removeChild(PA);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        G,
        C,
        I
      ]), B.useEffect(() => (M.current = true, () => {
        M.current = false;
      }), []);
      const fA = B.useMemo(() => ({
        allColorSchemes: Y,
        colorScheme: G,
        darkColorScheme: E,
        lightColorScheme: Q,
        mode: W,
        setColorScheme: N,
        setMode: oA,
        systemMode: aA
      }), [
        Y,
        G,
        E,
        Q,
        W,
        N,
        oA,
        aA,
        sA.colorSchemeSelector
      ]);
      let AA = true;
      (R || eA.cssVariables === false || J && (P == null ? void 0 : P.cssVarPrefix) === $) && (AA = false);
      const qA = L.jsxs(B.Fragment, {
        children: [
          L.jsx(Du, {
            themeId: j ? e : void 0,
            theme: sA,
            children: y
          }),
          AA && L.jsx(du, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return J ? qA : L.jsx(l.Provider, {
        value: fA,
        children: qA
      });
    }
    const g = typeof i == "string" ? i : i.light, h = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => iB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: g,
        defaultDarkColorScheme: h,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function fB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const Bl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, gB = (A, e, t) => {
    function r(n, o = [], i = []) {
      Object.entries(n).forEach(([a, s]) => {
        (!t || t && !t([
          ...o,
          a
        ])) && s != null && (typeof s == "object" && Object.keys(s).length > 0 ? r(s, [
          ...o,
          a
        ], Array.isArray(s) ? [
          ...i,
          a
        ] : i) : e([
          ...o,
          a
        ], s, i));
      });
    }
    r(A);
  }, pB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function Fi(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return gB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = pB(a, s);
        Object.assign(n, {
          [c]: u
        }), Bl(o, a, `var(${c})`, l), Bl(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function BB(A, e = {}) {
    const { getSelector: t = b, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = Fi(s, e);
    let d = u;
    const f = {}, { [a]: g, ...h } = o;
    if (Object.entries(h || {}).forEach(([w, v]) => {
      const { vars: U, css: C, varsWithDefaults: S } = Fi(v, e);
      d = YA(d, S), f[w] = {
        css: C,
        vars: U
      };
    }), g) {
      const { css: w, vars: v, varsWithDefaults: U } = Fi(g, e);
      d = YA(d, U), f[a] = {
        css: w,
        vars: v
      };
    }
    function b(w, v) {
      var _a2, _b2;
      let U = n;
      if (n === "class" && (U = ".%s"), n === "data" && (U = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (U = `[${n}="%s"]`), w) {
        if (U === "media") return A.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[w]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || w})`]: {
            ":root": v
          }
        };
        if (U) return A.defaultColorScheme === w ? `:root, ${U.replace("%s", String(w))}` : U.replace("%s", String(w));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let w = {
          ...l
        };
        return Object.entries(f).forEach(([, { vars: v }]) => {
          w = YA(w, v);
        }), w;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const w = [], v = A.defaultColorScheme || "light";
        function U(H, I) {
          Object.keys(I).length && w.push(typeof H == "string" ? {
            [H]: {
              ...I
            }
          } : H);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: C, ...S } = f;
        if (C) {
          const { css: H } = C, I = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, p = !r && I ? {
            colorScheme: I,
            ...H
          } : {
            ...H
          };
          U(t(v, {
            ...p
          }), p);
        }
        return Object.entries(S).forEach(([H, { css: I }]) => {
          var _a3, _b3;
          const p = (_b3 = (_a3 = o[H]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, T = !r && p ? {
            colorScheme: p,
            ...I
          } : {
            ...I
          };
          U(t(H, {
            ...T
          }), T);
        }), w;
      }
    };
  }
  function hB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Pu() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: $r.white,
        default: $r.white
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const wB = Pu();
  function Nu() {
    return {
      text: {
        primary: $r.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: $r.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const hl = Nu();
  function wl(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = ps(A.main, n) : e === "dark" && (A.dark = gs(A.main, o)));
  }
  function CB(A = "light") {
    return A === "dark" ? {
      main: Pt[200],
      light: Pt[50],
      dark: Pt[400]
    } : {
      main: Pt[700],
      light: Pt[400],
      dark: Pt[800]
    };
  }
  function mB(A = "light") {
    return A === "dark" ? {
      main: Mt[200],
      light: Mt[50],
      dark: Mt[400]
    } : {
      main: Mt[500],
      light: Mt[300],
      dark: Mt[700]
    };
  }
  function vB(A = "light") {
    return A === "dark" ? {
      main: Dt[500],
      light: Dt[300],
      dark: Dt[700]
    } : {
      main: Dt[700],
      light: Dt[400],
      dark: Dt[800]
    };
  }
  function QB(A = "light") {
    return A === "dark" ? {
      main: Nt[400],
      light: Nt[300],
      dark: Nt[700]
    } : {
      main: Nt[700],
      light: Nt[500],
      dark: Nt[900]
    };
  }
  function yB(A = "light") {
    return A === "dark" ? {
      main: _t[400],
      light: _t[300],
      dark: _t[700]
    } : {
      main: _t[800],
      light: _t[500],
      dark: _t[900]
    };
  }
  function bB(A = "light") {
    return A === "dark" ? {
      main: Br[400],
      light: Br[300],
      dark: Br[700]
    } : {
      main: "#ed6c02",
      light: Br[500],
      dark: Br[900]
    };
  }
  function ms(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || CB(e), i = A.secondary || mB(e), a = A.error || vB(e), s = A.info || QB(e), l = A.success || yB(e), c = A.warning || bB(e);
    function u(h) {
      return Pp(h, hl.text.primary) >= t ? hl.text.primary : wB.text.primary;
    }
    const d = ({ color: h, name: b, mainShade: m = 500, lightShade: y = 300, darkShade: w = 700 }) => {
      if (h = {
        ...h
      }, !h.main && h[m] && (h.main = h[m]), !h.hasOwnProperty("main")) throw new Error(At(11, b ? ` (${b})` : "", m));
      if (typeof h.main != "string") throw new Error(At(12, b ? ` (${b})` : "", JSON.stringify(h.main)));
      return wl(h, "light", y, r), wl(h, "dark", w, r), h.contrastText || (h.contrastText = u(h.main)), h;
    };
    let f;
    return e === "light" ? f = Pu() : e === "dark" && (f = Nu()), YA({
      common: {
        ...$r
      },
      mode: e,
      primary: d({
        color: o,
        name: "primary"
      }),
      secondary: d({
        color: i,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: d({
        color: a,
        name: "error"
      }),
      warning: d({
        color: c,
        name: "warning"
      }),
      info: d({
        color: s,
        name: "info"
      }),
      success: d({
        color: l,
        name: "success"
      }),
      grey: Qf,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...f
    }, n);
  }
  function FB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function UB(A, e) {
    return {
      toolbar: {
        minHeight: 56,
        [A.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [A.up("sm")]: {
          minHeight: 64
        }
      },
      ...e
    };
  }
  function EB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const Cl = {
    textTransform: "uppercase"
  }, ml = '"Roboto", "Helvetica", "Arial", sans-serif';
  function _u(A, e) {
    const { fontFamily: t = ml, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, f = c || ((b) => `${b / s * d}rem`), g = (b, m, y, w, v) => ({
      fontFamily: t,
      fontWeight: b,
      fontSize: f(m),
      lineHeight: y,
      ...t === ml ? {
        letterSpacing: `${EB(w / m)}em`
      } : {},
      ...v,
      ...l
    }), h = {
      h1: g(n, 96, 1.167, -1.5),
      h2: g(n, 60, 1.2, -0.5),
      h3: g(o, 48, 1.167, 0),
      h4: g(o, 34, 1.235, 0.25),
      h5: g(o, 24, 1.334, 0),
      h6: g(i, 20, 1.6, 0.15),
      subtitle1: g(o, 16, 1.75, 0.15),
      subtitle2: g(i, 14, 1.57, 0.1),
      body1: g(o, 16, 1.5, 0.15),
      body2: g(o, 14, 1.43, 0.15),
      button: g(i, 14, 1.75, 0.4, Cl),
      caption: g(o, 12, 1.66, 0.4),
      overline: g(o, 12, 2.66, 1, Cl),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return YA({
      htmlFontSize: s,
      pxToRem: f,
      fontFamily: t,
      fontSize: r,
      fontWeightLight: n,
      fontWeightRegular: o,
      fontWeightMedium: i,
      fontWeightBold: a,
      ...h
    }, u, {
      clone: false
    });
  }
  const SB = 0.2, xB = 0.14, IB = 0.12;
  function TA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${SB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${xB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${IB})`
    ].join(",");
  }
  const HB = [
    "none",
    TA(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    TA(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    TA(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    TA(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    TA(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    TA(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    TA(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    TA(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    TA(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    TA(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    TA(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    TA(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    TA(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    TA(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    TA(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    TA(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    TA(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    TA(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    TA(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    TA(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    TA(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    TA(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    TA(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    TA(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ], TB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, LB = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function vl(A) {
    return `${Math.round(A)}ms`;
  }
  function kB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function RB(A) {
    const e = {
      ...TB,
      ...A.easing
    }, t = {
      ...LB,
      ...A.duration
    };
    return {
      getAutoHeightDuration: kB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : vl(i)} ${a} ${typeof s == "string" ? s : vl(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const KB = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function OB(A) {
    return Ne(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Gu(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !OB(a) || i.startsWith("unstable_") ? delete r[i] : Ne(a) && (r[i] = {
          ...a
        }, t(r[i]));
      }
    }
    return t(e), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function sa(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(At(20));
    const c = ms(o), u = cs(A);
    let d = YA(u, {
      mixins: UB(u.breakpoints, r),
      palette: c,
      shadows: HB.slice(),
      typography: _u(c, a),
      transitions: RB(i),
      zIndex: {
        ...KB
      }
    });
    return d = YA(d, l), d = e.reduce((f, g) => YA(f, g), d), d.unstable_sxConfig = {
      ...on,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(g) {
      return ht({
        sx: g,
        theme: this
      });
    }, d.toRuntimeSource = Gu, d;
  }
  function la(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const DB = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = la(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function Vu(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function $u(A) {
    return A === "dark" ? DB : [];
  }
  function MB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = ms(e);
    return {
      palette: o,
      opacity: {
        ...Vu(o.mode),
        ...t
      },
      overlays: r || $u(o.mode),
      ...n
    };
  }
  function PB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const NB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], _B = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return NB(A.cssVarPrefix).forEach((a) => {
          i[a] = t[a], delete t[a];
        }), o === "media" ? {
          [r]: t,
          "@media (prefers-color-scheme: dark)": {
            [r]: i
          }
        } : o ? {
          [o.replace("%s", e)]: i,
          [`${r}, ${o.replace("%s", e)}`]: t
        } : {
          [r]: {
            ...t,
            ...i
          }
        };
      }
      if (o && o !== "media") return `${r}, ${o.replace("%s", String(e))}`;
    } else if (e) {
      if (o === "media") return {
        [`@media (prefers-color-scheme: ${String(e)})`]: {
          [r]: t
        }
      };
      if (o) return o.replace("%s", String(e));
    }
    return r;
  };
  function GB(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function O(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Er(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Uu(A);
  }
  function ze(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Ur(Er(A[e])));
  }
  function VB(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Le = (A) => {
    try {
      return A();
    } catch {
    }
  }, $B = (A = "mui") => fB(A);
  function Ui(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = MB({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = sa({
      ...t,
      palette: {
        mode: n,
        ...e == null ? void 0 : e.palette
      }
    });
    return A[r] = {
      ...e,
      palette: o,
      opacity: {
        ...Vu(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || $u(n)
    }, i;
  }
  function WB(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = PB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = $B(o), { [u]: f, light: g, dark: h, ...b } = t, m = {
      ...b
    };
    let y = f;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (y = true), !y) throw new Error(At(21, u));
    const w = Ui(m, y, l, u);
    g && !m.light && Ui(m, g, void 0, "light"), h && !m.dark && Ui(m, h, void 0, "dark");
    let v = {
      defaultColorScheme: u,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: m,
      font: {
        ...FB(w.typography),
        ...w.font
      },
      spacing: VB(l.spacing)
    };
    Object.keys(v.colorSchemes).forEach((I) => {
      const p = v.colorSchemes[I].palette, T = (R) => {
        const k = R.split("-"), _ = k[1], M = k[2];
        return d(R, p[_][M]);
      };
      if (p.mode === "light" && (O(p.common, "background", "#fff"), O(p.common, "onBackground", "#000")), p.mode === "dark" && (O(p.common, "background", "#000"), O(p.common, "onBackground", "#fff")), GB(p, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip"
      ]), p.mode === "light") {
        O(p.Alert, "errorColor", bA(p.error.light, 0.6)), O(p.Alert, "infoColor", bA(p.info.light, 0.6)), O(p.Alert, "successColor", bA(p.success.light, 0.6)), O(p.Alert, "warningColor", bA(p.warning.light, 0.6)), O(p.Alert, "errorFilledBg", T("palette-error-main")), O(p.Alert, "infoFilledBg", T("palette-info-main")), O(p.Alert, "successFilledBg", T("palette-success-main")), O(p.Alert, "warningFilledBg", T("palette-warning-main")), O(p.Alert, "errorFilledColor", Le(() => p.getContrastText(p.error.main))), O(p.Alert, "infoFilledColor", Le(() => p.getContrastText(p.info.main))), O(p.Alert, "successFilledColor", Le(() => p.getContrastText(p.success.main))), O(p.Alert, "warningFilledColor", Le(() => p.getContrastText(p.warning.main))), O(p.Alert, "errorStandardBg", FA(p.error.light, 0.9)), O(p.Alert, "infoStandardBg", FA(p.info.light, 0.9)), O(p.Alert, "successStandardBg", FA(p.success.light, 0.9)), O(p.Alert, "warningStandardBg", FA(p.warning.light, 0.9)), O(p.Alert, "errorIconColor", T("palette-error-main")), O(p.Alert, "infoIconColor", T("palette-info-main")), O(p.Alert, "successIconColor", T("palette-success-main")), O(p.Alert, "warningIconColor", T("palette-warning-main")), O(p.AppBar, "defaultBg", T("palette-grey-100")), O(p.Avatar, "defaultBg", T("palette-grey-400")), O(p.Button, "inheritContainedBg", T("palette-grey-300")), O(p.Button, "inheritContainedHoverBg", T("palette-grey-A100")), O(p.Chip, "defaultBorder", T("palette-grey-400")), O(p.Chip, "defaultAvatarColor", T("palette-grey-700")), O(p.Chip, "defaultIconColor", T("palette-grey-700")), O(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), O(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), O(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), O(p.LinearProgress, "primaryBg", FA(p.primary.main, 0.62)), O(p.LinearProgress, "secondaryBg", FA(p.secondary.main, 0.62)), O(p.LinearProgress, "errorBg", FA(p.error.main, 0.62)), O(p.LinearProgress, "infoBg", FA(p.info.main, 0.62)), O(p.LinearProgress, "successBg", FA(p.success.main, 0.62)), O(p.LinearProgress, "warningBg", FA(p.warning.main, 0.62)), O(p.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), O(p.Slider, "primaryTrack", FA(p.primary.main, 0.62)), O(p.Slider, "secondaryTrack", FA(p.secondary.main, 0.62)), O(p.Slider, "errorTrack", FA(p.error.main, 0.62)), O(p.Slider, "infoTrack", FA(p.info.main, 0.62)), O(p.Slider, "successTrack", FA(p.success.main, 0.62)), O(p.Slider, "warningTrack", FA(p.warning.main, 0.62));
        const R = pn(p.background.default, 0.8);
        O(p.SnackbarContent, "bg", R), O(p.SnackbarContent, "color", Le(() => p.getContrastText(R))), O(p.SpeedDialAction, "fabHoverBg", pn(p.background.paper, 0.15)), O(p.StepConnector, "border", T("palette-grey-400")), O(p.StepContent, "border", T("palette-grey-400")), O(p.Switch, "defaultColor", T("palette-common-white")), O(p.Switch, "defaultDisabledColor", T("palette-grey-100")), O(p.Switch, "primaryDisabledColor", FA(p.primary.main, 0.62)), O(p.Switch, "secondaryDisabledColor", FA(p.secondary.main, 0.62)), O(p.Switch, "errorDisabledColor", FA(p.error.main, 0.62)), O(p.Switch, "infoDisabledColor", FA(p.info.main, 0.62)), O(p.Switch, "successDisabledColor", FA(p.success.main, 0.62)), O(p.Switch, "warningDisabledColor", FA(p.warning.main, 0.62)), O(p.TableCell, "border", FA(gn(p.divider, 1), 0.88)), O(p.Tooltip, "bg", gn(p.grey[700], 0.92));
      }
      if (p.mode === "dark") {
        O(p.Alert, "errorColor", FA(p.error.light, 0.6)), O(p.Alert, "infoColor", FA(p.info.light, 0.6)), O(p.Alert, "successColor", FA(p.success.light, 0.6)), O(p.Alert, "warningColor", FA(p.warning.light, 0.6)), O(p.Alert, "errorFilledBg", T("palette-error-dark")), O(p.Alert, "infoFilledBg", T("palette-info-dark")), O(p.Alert, "successFilledBg", T("palette-success-dark")), O(p.Alert, "warningFilledBg", T("palette-warning-dark")), O(p.Alert, "errorFilledColor", Le(() => p.getContrastText(p.error.dark))), O(p.Alert, "infoFilledColor", Le(() => p.getContrastText(p.info.dark))), O(p.Alert, "successFilledColor", Le(() => p.getContrastText(p.success.dark))), O(p.Alert, "warningFilledColor", Le(() => p.getContrastText(p.warning.dark))), O(p.Alert, "errorStandardBg", bA(p.error.light, 0.9)), O(p.Alert, "infoStandardBg", bA(p.info.light, 0.9)), O(p.Alert, "successStandardBg", bA(p.success.light, 0.9)), O(p.Alert, "warningStandardBg", bA(p.warning.light, 0.9)), O(p.Alert, "errorIconColor", T("palette-error-main")), O(p.Alert, "infoIconColor", T("palette-info-main")), O(p.Alert, "successIconColor", T("palette-success-main")), O(p.Alert, "warningIconColor", T("palette-warning-main")), O(p.AppBar, "defaultBg", T("palette-grey-900")), O(p.AppBar, "darkBg", T("palette-background-paper")), O(p.AppBar, "darkColor", T("palette-text-primary")), O(p.Avatar, "defaultBg", T("palette-grey-600")), O(p.Button, "inheritContainedBg", T("palette-grey-800")), O(p.Button, "inheritContainedHoverBg", T("palette-grey-700")), O(p.Chip, "defaultBorder", T("palette-grey-700")), O(p.Chip, "defaultAvatarColor", T("palette-grey-300")), O(p.Chip, "defaultIconColor", T("palette-grey-300")), O(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), O(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), O(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), O(p.LinearProgress, "primaryBg", bA(p.primary.main, 0.5)), O(p.LinearProgress, "secondaryBg", bA(p.secondary.main, 0.5)), O(p.LinearProgress, "errorBg", bA(p.error.main, 0.5)), O(p.LinearProgress, "infoBg", bA(p.info.main, 0.5)), O(p.LinearProgress, "successBg", bA(p.success.main, 0.5)), O(p.LinearProgress, "warningBg", bA(p.warning.main, 0.5)), O(p.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), O(p.Slider, "primaryTrack", bA(p.primary.main, 0.5)), O(p.Slider, "secondaryTrack", bA(p.secondary.main, 0.5)), O(p.Slider, "errorTrack", bA(p.error.main, 0.5)), O(p.Slider, "infoTrack", bA(p.info.main, 0.5)), O(p.Slider, "successTrack", bA(p.success.main, 0.5)), O(p.Slider, "warningTrack", bA(p.warning.main, 0.5));
        const R = pn(p.background.default, 0.98);
        O(p.SnackbarContent, "bg", R), O(p.SnackbarContent, "color", Le(() => p.getContrastText(R))), O(p.SpeedDialAction, "fabHoverBg", pn(p.background.paper, 0.15)), O(p.StepConnector, "border", T("palette-grey-600")), O(p.StepContent, "border", T("palette-grey-600")), O(p.Switch, "defaultColor", T("palette-grey-300")), O(p.Switch, "defaultDisabledColor", T("palette-grey-600")), O(p.Switch, "primaryDisabledColor", bA(p.primary.main, 0.55)), O(p.Switch, "secondaryDisabledColor", bA(p.secondary.main, 0.55)), O(p.Switch, "errorDisabledColor", bA(p.error.main, 0.55)), O(p.Switch, "infoDisabledColor", bA(p.info.main, 0.55)), O(p.Switch, "successDisabledColor", bA(p.success.main, 0.55)), O(p.Switch, "warningDisabledColor", bA(p.warning.main, 0.55)), O(p.TableCell, "border", bA(gn(p.divider, 1), 0.68)), O(p.Tooltip, "bg", gn(p.grey[700], 0.92));
      }
      ze(p.background, "default"), ze(p.background, "paper"), ze(p.common, "background"), ze(p.common, "onBackground"), ze(p, "divider"), Object.keys(p).forEach((R) => {
        const k = p[R];
        R !== "tonalOffset" && k && typeof k == "object" && (k.main && O(p[R], "mainChannel", Ur(Er(k.main))), k.light && O(p[R], "lightChannel", Ur(Er(k.light))), k.dark && O(p[R], "darkChannel", Ur(Er(k.dark))), k.contrastText && O(p[R], "contrastTextChannel", Ur(Er(k.contrastText))), R === "text" && (ze(p[R], "primary"), ze(p[R], "secondary")), R === "action" && (k.active && ze(p[R], "active"), k.selected && ze(p[R], "selected")));
      });
    }), v = e.reduce((I, p) => YA(I, p), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: _B(v)
    }, { vars: C, generateThemeVars: S, generateStyleSheets: H } = BB(v, U);
    return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([I, p]) => {
      v[I] = p;
    }), v.generateThemeVars = S, v.generateStyleSheets = H, v.generateSpacing = function() {
      return Cu(l.spacing, ss(this));
    }, v.getColorSchemeSelector = hB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...on,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, v.unstable_sx = function(p) {
      return ht({
        sx: p,
        theme: this
      });
    }, v.toRuntimeSource = Gu, v;
  }
  function Ql(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: ms({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function ni(A = {}, ...e) {
    const { palette: t, cssVariables: r = false, colorSchemes: n = t ? void 0 : {
      light: true
    }, defaultColorScheme: o = t == null ? void 0 : t.mode, ...i } = A, a = o || "light", s = n == null ? void 0 : n[a], l = {
      ...n,
      ...t ? {
        [a]: {
          ...typeof s != "boolean" && s,
          palette: t
        }
      } : void 0
    };
    if (r === false) {
      if (!("colorSchemes" in A)) return sa(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = sa({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, Ql(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, Ql(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), WB({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const vs = ni();
  Qs = function() {
    const A = ds(vs);
    return A[Ge] || A;
  };
  Wu = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  $e = (A) => Wu(A) && A !== "classes";
  lA = Tp({
    themeId: Ge,
    defaultTheme: vs,
    rootShouldForwardProp: $e
  });
  function XB({ theme: A, ...e }) {
    const t = Ge in A ? A[Ge] : void 0;
    return L.jsx(Du, {
      ...e,
      themeId: t ? Ge : void 0,
      theme: t || A
    });
  }
  const Bn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: jB } = dB({
    themeId: Ge,
    theme: () => ni({
      cssVariables: true
    }),
    colorSchemeStorageKey: Bn.colorSchemeStorageKey,
    modeStorageKey: Bn.modeStorageKey,
    defaultColorScheme: {
      light: Bn.defaultLightColorScheme,
      dark: Bn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: _u(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return ht({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), zB = jB;
  function Xu({ theme: A, ...e }) {
    const t = B.useMemo(() => {
      if (typeof A == "function") return A;
      const r = Ge in A ? A[Ge] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? L.jsx(XB, {
      theme: t,
      ...e
    }) : L.jsx(zB, {
      theme: A,
      ...e
    });
  }
  function JB(A) {
    return L.jsx(mu, {
      ...A,
      defaultTheme: vs,
      themeId: Ge
    });
  }
  function ys(A) {
    return function(t) {
      return L.jsx(JB, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function YB() {
    return vu;
  }
  OA = nB;
  KA = function(A) {
    return tB(A);
  };
  function ZB(A) {
    return kA("MuiSvgIcon", A);
  }
  IA("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge"
  ]);
  let qB, Ah;
  qB = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${hA(e)}`,
        `fontSize${hA(t)}`
      ]
    };
    return RA(n, ZB, r);
  };
  Ah = lA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${hA(t.color)}`],
        e[`fontSize${hA(t.fontSize)}`]
      ];
    }
  })(OA(({ theme: A }) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (_d2 = (_a2 = A.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d2.call(_a2, "fill", {
        duration: (_c2 = (_b2 = (A.vars ?? A).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c2.shorter
      }),
      variants: [
        {
          props: (e) => !e.hasSvgAsChild,
          style: {
            fill: "currentColor"
          }
        },
        {
          props: {
            fontSize: "inherit"
          },
          style: {
            fontSize: "inherit"
          }
        },
        {
          props: {
            fontSize: "small"
          },
          style: {
            fontSize: ((_f2 = (_e2 = A.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f2.call(_e2, 20)) || "1.25rem"
          }
        },
        {
          props: {
            fontSize: "medium"
          },
          style: {
            fontSize: ((_h2 = (_g2 = A.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h2.call(_g2, 24)) || "1.5rem"
          }
        },
        {
          props: {
            fontSize: "large"
          },
          style: {
            fontSize: ((_j = (_i2 = A.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem"
          }
        },
        ...Object.entries((A.vars ?? A).palette).filter(([, e]) => e && e.main).map(([e]) => {
          var _a3, _b3;
          return {
            props: {
              color: e
            },
            style: {
              color: (_b3 = (_a3 = (A.vars ?? A).palette) == null ? void 0 : _a3[e]) == null ? void 0 : _b3.main
            }
          };
        }),
        {
          props: {
            color: "action"
          },
          style: {
            color: (_l2 = (_k = (A.vars ?? A).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active
          }
        },
        {
          props: {
            color: "disabled"
          },
          style: {
            color: (_n2 = (_m2 = (A.vars ?? A).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n2.disabled
          }
        },
        {
          props: {
            color: "inherit"
          },
          style: {
            color: void 0
          }
        }
      ]
    };
  }));
  ca = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...f } = r, g = B.isValidElement(n) && n.type === "svg", h = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: g
    }, b = {};
    c || (b.viewBox = d);
    const m = qB(h);
    return L.jsxs(Ah, {
      as: a,
      className: pA(m.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...b,
      ...f,
      ...g && n.props,
      ownerState: h,
      children: [
        g ? n.props.children : n,
        u ? L.jsx("title", {
          children: u
        }) : null
      ]
    });
  });
  ca.muiName = "SvgIcon";
  ju = function(A, e) {
    function t(r, n) {
      return L.jsx(ca, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = ca.muiName, B.memo(B.forwardRef(t));
  };
  eh = function(A, e) {
    if (!A) return e;
    if (typeof A == "function" || typeof e == "function") return (n) => {
      const o = typeof e == "function" ? e(n) : e, i = typeof A == "function" ? A({
        ...n,
        ...o
      }) : A, a = pA(n == null ? void 0 : n.className, o == null ? void 0 : o.className, i == null ? void 0 : i.className);
      return {
        ...o,
        ...i,
        ...!!a && {
          className: a
        },
        ...(o == null ? void 0 : o.style) && (i == null ? void 0 : i.style) && {
          style: {
            ...o.style,
            ...i.style
          }
        },
        ...(o == null ? void 0 : o.sx) && (i == null ? void 0 : i.sx) && {
          sx: [
            ...Array.isArray(o.sx) ? o.sx : [
              o.sx
            ],
            ...Array.isArray(i.sx) ? i.sx : [
              i.sx
            ]
          ]
        }
      };
    };
    const t = e, r = pA(t == null ? void 0 : t.className, A == null ? void 0 : A.className);
    return {
      ...e,
      ...A,
      ...!!r && {
        className: r
      },
      ...(t == null ? void 0 : t.style) && (A == null ? void 0 : A.style) && {
        style: {
          ...t.style,
          ...A.style
        }
      },
      ...(t == null ? void 0 : t.sx) && (A == null ? void 0 : A.sx) && {
        sx: [
          ...Array.isArray(t.sx) ? t.sx : [
            t.sx
          ],
          ...Array.isArray(A.sx) ? A.sx : [
            A.sx
          ]
        ]
      }
    };
  };
  function zu(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function ua(A, e) {
    return ua = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, ua(A, e);
  }
  function Ju(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, ua(A, e);
  }
  const { initPromise: th } = pf, rh = th.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), nh = await rh.then((A) => A());
  var bs = nh;
  const hn = Wa(bs), yl = {
    disabled: false
  }, oo = x.createContext(null);
  var oh = function(e) {
    return e.scrollTop;
  }, Sr = "unmounted", bt = "exited", Ft = "entering", Yt = "entered", da = "exiting", We = (function(A) {
    Ju(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = bt, o.appearStatus = Ft) : s = Yt : r.unmountOnExit || r.mountOnEnter ? s = Sr : s = bt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Sr ? {
        status: bt
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Ft && i !== Yt && (o = Ft) : (i === Ft || i === Yt) && (o = da);
      }
      this.updateStatus(false, o);
    }, t.componentWillUnmount = function() {
      this.cancelNextCallback();
    }, t.getTimeouts = function() {
      var n = this.props.timeout, o, i, a;
      return o = i = a = n, n != null && typeof n != "number" && (o = n.exit, i = n.enter, a = n.appear !== void 0 ? n.appear : i), {
        exit: o,
        enter: i,
        appear: a
      };
    }, t.updateStatus = function(n, o) {
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Ft) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : hn.findDOMNode(this);
          i && oh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === bt && this.setState({
        status: Sr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        hn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || yl.disabled) {
        this.safeSetState({
          status: Yt
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Ft
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: Yt
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : hn.findDOMNode(this);
      if (!o || yl.disabled) {
        this.safeSetState({
          status: bt
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: da
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: bt
          }, function() {
            n.props.onExited(a);
          });
        });
      });
    }, t.cancelNextCallback = function() {
      this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
    }, t.safeSetState = function(n, o) {
      o = this.setNextCallback(o), this.setState(n, o);
    }, t.setNextCallback = function(n) {
      var o = this, i = true;
      return this.nextCallback = function(a) {
        i && (i = false, o.nextCallback = null, n(a));
      }, this.nextCallback.cancel = function() {
        i = false;
      }, this.nextCallback;
    }, t.onTransitionEnd = function(n, o) {
      this.setNextCallback(o);
      var i = this.props.nodeRef ? this.props.nodeRef.current : hn.findDOMNode(this), a = n == null && !this.props.addEndListener;
      if (!i || a) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var s = this.props.nodeRef ? [
          this.nextCallback
        ] : [
          i,
          this.nextCallback
        ], l = s[0], c = s[1];
        this.props.addEndListener(l, c);
      }
      n != null && setTimeout(this.nextCallback, n);
    }, t.render = function() {
      var n = this.state.status;
      if (n === Sr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = zu(o, [
        "children",
        "in",
        "mountOnEnter",
        "unmountOnExit",
        "appear",
        "enter",
        "exit",
        "timeout",
        "addEndListener",
        "onEnter",
        "onEntering",
        "onEntered",
        "onExit",
        "onExiting",
        "onExited",
        "nodeRef"
      ]);
      return x.createElement(oo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : x.cloneElement(x.Children.only(i), a));
    }, e;
  })(x.Component);
  We.contextType = oo;
  We.propTypes = {};
  function Gt() {
  }
  We.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: Gt,
    onEntering: Gt,
    onEntered: Gt,
    onExit: Gt,
    onExiting: Gt,
    onExited: Gt
  };
  We.UNMOUNTED = Sr;
  We.EXITED = bt;
  We.ENTERING = Ft;
  We.ENTERED = Yt;
  We.EXITING = da;
  function ih(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Fs(A, e) {
    var t = function(o) {
      return e && B.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && B.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function ah(A, e) {
    A = A || {}, e = e || {};
    function t(c) {
      return c in e ? e[c] : A[c];
    }
    var r = /* @__PURE__ */ Object.create(null), n = [];
    for (var o in A) o in e ? n.length && (r[o] = n, n = []) : n.push(o);
    var i, a = {};
    for (var s in e) {
      if (r[s]) for (i = 0; i < r[s].length; i++) {
        var l = r[s][i];
        a[r[s][i]] = t(l);
      }
      a[s] = t(s);
    }
    for (i = 0; i < n.length; i++) a[n[i]] = t(n[i]);
    return a;
  }
  function Ht(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function sh(A, e) {
    return Fs(A.children, function(t) {
      return B.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Ht(t, "appear", A),
        enter: Ht(t, "enter", A),
        exit: Ht(t, "exit", A)
      });
    });
  }
  function lh(A, e, t) {
    var r = Fs(A.children), n = ah(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (B.isValidElement(i)) {
        var a = o in e, s = o in r, l = e[o], c = B.isValidElement(l) && !l.props.in;
        s && (!a || c) ? n[o] = B.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Ht(i, "exit", A),
          enter: Ht(i, "enter", A)
        }) : !s && a && !c ? n[o] = B.cloneElement(i, {
          in: false
        }) : s && a && B.isValidElement(l) && (n[o] = B.cloneElement(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: Ht(i, "exit", A),
          enter: Ht(i, "enter", A)
        }));
      }
    }), n;
  }
  var ch = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, uh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, Us = (function(A) {
    Ju(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(ih(o));
      return o.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: i,
        firstRender: true
      }, o;
    }
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.mounted = true, this.setState({
        contextValue: {
          isMounting: false
        }
      });
    }, t.componentWillUnmount = function() {
      this.mounted = false;
    }, e.getDerivedStateFromProps = function(n, o) {
      var i = o.children, a = o.handleExited, s = o.firstRender;
      return {
        children: s ? sh(n, a) : lh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Fs(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = to({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = zu(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = ch(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? x.createElement(oo.Provider, {
        value: s
      }, l) : x.createElement(oo.Provider, {
        value: s
      }, x.createElement(o, a, l));
    }, e;
  })(x.Component);
  Us.propTypes = {};
  Us.defaultProps = uh;
  const Yu = (A) => A.scrollTop;
  function io(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function dh(A) {
    return kA("MuiPaper", A);
  }
  IA("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24"
  ]);
  let fh, gh;
  fh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return RA(o, dh, n);
  };
  gh = lA("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        !t.square && e.rounded,
        t.variant === "elevation" && e[`elevation${t.elevation}`]
      ];
    }
  })(OA(({ theme: A }) => ({
    backgroundColor: (A.vars || A).palette.background.paper,
    color: (A.vars || A).palette.text.primary,
    transition: A.transitions.create("box-shadow"),
    variants: [
      {
        props: ({ ownerState: e }) => !e.square,
        style: {
          borderRadius: A.shape.borderRadius
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          border: `1px solid ${(A.vars || A).palette.divider}`
        }
      },
      {
        props: {
          variant: "elevation"
        },
        style: {
          boxShadow: "var(--Paper-shadow)",
          backgroundImage: "var(--Paper-overlay)"
        }
      }
    ]
  })));
  fa = B.forwardRef(function(e, t) {
    var _a2;
    const r = KA({
      props: e,
      name: "MuiPaper"
    }), n = Qs(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = fh(u);
    return L.jsx(gh, {
      as: i,
      ownerState: u,
      className: pA(d.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${ir("#fff", la(a))}, ${ir("#fff", la(a))})`
          }
        },
        ...c.style
      }
    });
  });
  le = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: u = {
      [A]: void 0
    }, ...d } = o, f = c[A] || r, g = ku(u[A], n), { props: { component: h, ...b }, internalRef: m } = Lu({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: g
    }), y = pe(m, g == null ? void 0 : g.ref, e.ref), w = A === "root" ? h || l : h, v = Hu(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...b,
      ...w && !a && {
        as: w
      },
      ...w && a && {
        component: w
      },
      ref: y
    }, n);
    return [
      f,
      v
    ];
  };
  class ao {
    static create() {
      return new ao();
    }
    static use() {
      const e = Su(ao.create).current, [t, r] = B.useState(false);
      return e.shouldMount = t, e.setShouldMount = r, B.useEffect(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = Bh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
    }
    mountEffect = () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    };
    start(...e) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.start(...e);
      });
    }
    stop(...e) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.stop(...e);
      });
    }
    pulsate(...e) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.pulsate(...e);
      });
    }
  }
  function ph() {
    return ao.use();
  }
  function Bh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function hh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = B.useState(false), d = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, g = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), B.useEffect(() => {
      if (!a && s != null) {
        const h = setTimeout(s, l);
        return () => {
          clearTimeout(h);
        };
      }
    }, [
      s,
      a,
      l
    ]), L.jsx("span", {
      className: d,
      style: f,
      children: L.jsx("span", {
        className: g
      })
    });
  }
  const ve = IA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), ga = 550, wh = 80, Ch = tn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, mh = tn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, vh = tn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Qh = lA("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  }), yh = lA(hh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${ve.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ch};
    animation-duration: ${ga}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${ve.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${ve.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ve.childLeaving} {
    opacity: 0;
    animation-name: ${mh};
    animation-duration: ${ga}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${ve.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${vh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, bh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = B.useState([]), c = B.useRef(0), u = B.useRef(null);
    B.useEffect(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = B.useRef(false), f = xu(), g = B.useRef(null), h = B.useRef(null), b = B.useCallback((v) => {
      const { pulsate: U, rippleX: C, rippleY: S, rippleSize: H, cb: I } = v;
      l((p) => [
        ...p,
        L.jsx(yh, {
          classes: {
            ripple: pA(o.ripple, ve.ripple),
            rippleVisible: pA(o.rippleVisible, ve.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, ve.ripplePulsate),
            child: pA(o.child, ve.child),
            childLeaving: pA(o.childLeaving, ve.childLeaving),
            childPulsate: pA(o.childPulsate, ve.childPulsate)
          },
          timeout: ga,
          pulsate: U,
          rippleX: C,
          rippleY: S,
          rippleSize: H
        }, c.current)
      ]), c.current += 1, u.current = I;
    }, [
      o
    ]), m = B.useCallback((v = {}, U = {}, C = () => {
    }) => {
      const { pulsate: S = false, center: H = n || U.pulsate, fakeElement: I = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (d.current = true);
      const p = I ? null : h.current, T = p ? p.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let R, k, _;
      if (H || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) R = Math.round(T.width / 2), k = Math.round(T.height / 2);
      else {
        const { clientX: M, clientY: P } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        R = Math.round(M - T.left), k = Math.round(P - T.top);
      }
      if (H) _ = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3), _ % 2 === 0 && (_ += 1);
      else {
        const M = Math.max(Math.abs((p ? p.clientWidth : 0) - R), R) * 2 + 2, P = Math.max(Math.abs((p ? p.clientHeight : 0) - k), k) * 2 + 2;
        _ = Math.sqrt(M ** 2 + P ** 2);
      }
      (v == null ? void 0 : v.touches) ? g.current === null && (g.current = () => {
        b({
          pulsate: S,
          rippleX: R,
          rippleY: k,
          rippleSize: _,
          cb: C
        });
      }, f.start(wh, () => {
        g.current && (g.current(), g.current = null);
      })) : b({
        pulsate: S,
        rippleX: R,
        rippleY: k,
        rippleSize: _,
        cb: C
      });
    }, [
      n,
      b,
      f
    ]), y = B.useCallback(() => {
      m({}, {
        pulsate: true
      });
    }, [
      m
    ]), w = B.useCallback((v, U) => {
      if (f.clear(), (v == null ? void 0 : v.type) === "touchend" && g.current) {
        g.current(), g.current = null, f.start(0, () => {
          w(v, U);
        });
        return;
      }
      g.current = null, l((C) => C.length > 0 ? C.slice(1) : C), u.current = U;
    }, [
      f
    ]);
    return B.useImperativeHandle(t, () => ({
      pulsate: y,
      start: m,
      stop: w
    }), [
      y,
      m,
      w
    ]), L.jsx(Qh, {
      className: pA(ve.root, o.root, i),
      ref: h,
      ...a,
      children: L.jsx(Us, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Fh(A) {
    return kA("MuiButtonBase", A);
  }
  let Uh, Eh, Sh;
  Uh = IA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Eh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = RA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Fh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Sh = lA("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${Uh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  xh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: f, LinkComponent: g = "a", onBlur: h, onClick: b, onContextMenu: m, onDragLeave: y, onFocus: w, onFocusVisible: v, onKeyDown: U, onKeyUp: C, onMouseDown: S, onMouseLeave: H, onMouseUp: I, onTouchEnd: p, onTouchMove: T, onTouchStart: R, tabIndex: k = 0, TouchRippleProps: _, touchRippleRef: M, type: P, ...X } = r, J = B.useRef(null), D = ph(), j = pe(D.ref, M), [eA, nA] = B.useState(false);
    l && eA && nA(false), B.useImperativeHandle(n, () => ({
      focusVisible: () => {
        nA(true), J.current.focus();
      }
    }), []);
    const K = D.shouldMount && !c && !l;
    B.useEffect(() => {
      eA && d && !c && D.pulsate();
    }, [
      c,
      d,
      eA,
      D
    ]);
    const $ = Je(D, "start", S, u), V = Je(D, "stop", m, u), Y = Je(D, "stop", y, u), dA = Je(D, "stop", I, u), iA = Je(D, "stop", (AA) => {
      eA && AA.preventDefault(), H && H(AA);
    }, u), tA = Je(D, "start", R, u), z = Je(D, "stop", p, u), oA = Je(D, "stop", T, u), aA = Je(D, "stop", (AA) => {
      cl(AA.target) || nA(false), h && h(AA);
    }, false), Q = Lt((AA) => {
      J.current || (J.current = AA.currentTarget), cl(AA.target) && (nA(true), v && v(AA)), w && w(AA);
    }), E = () => {
      const AA = J.current;
      return s && s !== "button" && !(AA.tagName === "A" && AA.href);
    }, F = Lt((AA) => {
      d && !AA.repeat && eA && AA.key === " " && D.stop(AA, () => {
        D.start(AA);
      }), AA.target === AA.currentTarget && E() && AA.key === " " && AA.preventDefault(), U && U(AA), AA.target === AA.currentTarget && E() && AA.key === "Enter" && !l && (AA.preventDefault(), b && b(AA));
    }), N = Lt((AA) => {
      d && AA.key === " " && eA && !AA.defaultPrevented && D.stop(AA, () => {
        D.pulsate(AA);
      }), C && C(AA), b && AA.target === AA.currentTarget && E() && AA.key === " " && !AA.defaultPrevented && b(AA);
    });
    let W = s;
    W === "button" && (X.href || X.to) && (W = g);
    const G = {};
    W === "button" ? (G.type = P === void 0 ? "button" : P, G.disabled = l) : (!X.href && !X.to && (G.role = "button"), l && (G["aria-disabled"] = l));
    const sA = pe(t, J), cA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: k,
      focusVisible: eA
    }, fA = Eh(cA);
    return L.jsxs(Sh, {
      as: W,
      className: pA(fA.root, a),
      ownerState: cA,
      onBlur: aA,
      onClick: b,
      onContextMenu: V,
      onFocus: Q,
      onKeyDown: F,
      onKeyUp: N,
      onMouseDown: $,
      onMouseLeave: iA,
      onMouseUp: dA,
      onDragLeave: Y,
      onTouchEnd: z,
      onTouchMove: oA,
      onTouchStart: tA,
      ref: sA,
      tabIndex: l ? -1 : k,
      type: P,
      ...G,
      ...X,
      children: [
        i,
        K ? L.jsx(bh, {
          ref: j,
          center: o,
          ..._
        }) : null
      ]
    });
  });
  function Je(A, e, t, r = false) {
    return Lt((n) => (t && t(n), r || A[e](n), true));
  }
  function Ih(A) {
    return typeof A.main == "string";
  }
  function Hh(A, e = []) {
    if (!Ih(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  Ct = function(A = []) {
    return ([, e]) => e && Hh(e, A);
  };
  function Th(A) {
    return kA("MuiCircularProgress", A);
  }
  IA("MuiCircularProgress", [
    "root",
    "determinate",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "svg",
    "circle",
    "circleDeterminate",
    "circleIndeterminate",
    "circleDisableShrink"
  ]);
  let it, pa, Ba, Lh, kh, Rh, Kh, Oh, Dh;
  it = 44;
  pa = tn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  Ba = tn`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
  Lh = typeof pa != "string" ? rs`
        animation: ${pa} 1.4s linear infinite;
      ` : null;
  kh = typeof Ba != "string" ? rs`
        animation: ${Ba} 1.4s ease-in-out infinite;
      ` : null;
  Rh = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${hA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${hA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return RA(o, Th, e);
  };
  Kh = lA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${hA(t.color)}`]
      ];
    }
  })(OA(({ theme: A }) => ({
    display: "inline-block",
    variants: [
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: A.transitions.create("transform")
        }
      },
      {
        props: {
          variant: "indeterminate"
        },
        style: Lh || {
          animation: `${pa} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(Ct()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  Oh = lA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  Dh = lA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${hA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(OA(({ theme: A }) => ({
    stroke: "currentColor",
    variants: [
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: A.transitions.create("stroke-dashoffset")
        }
      },
      {
        props: {
          variant: "indeterminate"
        },
        style: {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
        style: kh || {
          animation: `${Ba} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Mh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiCircularProgress"
    }), { className: n, color: o = "primary", disableShrink: i = false, size: a = 40, style: s, thickness: l = 3.6, value: c = 0, variant: u = "indeterminate", ...d } = r, f = {
      ...r,
      color: o,
      disableShrink: i,
      size: a,
      thickness: l,
      value: c,
      variant: u
    }, g = Rh(f), h = {}, b = {}, m = {};
    if (u === "determinate") {
      const y = 2 * Math.PI * ((it - l) / 2);
      h.strokeDasharray = y.toFixed(3), m["aria-valuenow"] = Math.round(c), h.strokeDashoffset = `${((100 - c) / 100 * y).toFixed(3)}px`, b.transform = "rotate(-90deg)";
    }
    return L.jsx(Kh, {
      className: pA(g.root, n),
      style: {
        width: a,
        height: a,
        ...b,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...m,
      ...d,
      children: L.jsx(Oh, {
        className: g.svg,
        ownerState: f,
        viewBox: `${it / 2} ${it / 2} ${it} ${it}`,
        children: L.jsx(Dh, {
          className: g.circle,
          style: h,
          ownerState: f,
          cx: it,
          cy: it,
          r: (it - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function Ph(A) {
    return kA("MuiIconButton", A);
  }
  let bl, Nh, _h, Gh;
  bl = IA("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper"
  ]);
  Nh = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${hA(r)}`,
        n && `edge${hA(n)}`,
        `size${hA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return RA(a, Ph, e);
  };
  _h = lA(xh, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${hA(t.color)}`],
        t.edge && e[`edge${hA(t.edge)}`],
        e[`size${hA(t.size)}`]
      ];
    }
  })(OA(({ theme: A }) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: A.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    color: (A.vars || A).palette.action.active,
    transition: A.transitions.create("background-color", {
      duration: A.transitions.duration.shortest
    }),
    variants: [
      {
        props: (e) => !e.disableRipple,
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : ir(A.palette.action.active, A.palette.action.hoverOpacity),
          "&:hover": {
            backgroundColor: "var(--IconButton-hoverBg)",
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      {
        props: {
          edge: "start"
        },
        style: {
          marginLeft: -12
        }
      },
      {
        props: {
          edge: "start",
          size: "small"
        },
        style: {
          marginLeft: -3
        }
      },
      {
        props: {
          edge: "end"
        },
        style: {
          marginRight: -12
        }
      },
      {
        props: {
          edge: "end",
          size: "small"
        },
        style: {
          marginRight: -3
        }
      }
    ]
  })), OA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(Ct()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(Ct()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : ir((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
        }
      })),
      {
        props: {
          size: "small"
        },
        style: {
          padding: 5,
          fontSize: A.typography.pxToRem(18)
        }
      },
      {
        props: {
          size: "large"
        },
        style: {
          padding: 12,
          fontSize: A.typography.pxToRem(28)
        }
      }
    ],
    [`&.${bl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${bl.loading}`]: {
      color: "transparent"
    }
  })));
  Gh = lA("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (A, e) => e.loadingIndicator
  })(({ theme: A }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (A.vars || A).palette.action.disabled,
    variants: [
      {
        props: {
          loading: true
        },
        style: {
          display: "flex"
        }
      }
    ]
  }));
  Vh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: f, ...g } = r, h = ri(u), b = f ?? L.jsx(Mh, {
      "aria-labelledby": h,
      color: "inherit",
      size: 16
    }), m = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: b,
      size: c
    }, y = Nh(m);
    return L.jsxs(_h, {
      id: d ? h : u,
      className: pA(y.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...g,
      ownerState: m,
      children: [
        typeof d == "boolean" && L.jsx("span", {
          className: y.loadingWrapper,
          style: {
            display: "contents"
          },
          children: L.jsx(Gh, {
            className: y.loadingIndicator,
            ownerState: m,
            children: d && b
          })
        }),
        o
      ]
    });
  });
  function $h(A) {
    return kA("MuiTypography", A);
  }
  let Wh, Xh, jh, zh, Fl;
  BU = IA("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph"
  ]);
  Wh = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
  };
  Xh = YB();
  jh = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${hA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return RA(a, $h, i);
  };
  zh = lA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${hA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(OA(({ theme: A }) => {
    var _a2;
    return {
      margin: 0,
      variants: [
        {
          props: {
            variant: "inherit"
          },
          style: {
            font: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
          }
        },
        ...Object.entries(A.typography).filter(([e, t]) => e !== "inherit" && t && typeof t == "object").map(([e, t]) => ({
          props: {
            variant: e
          },
          style: t
        })),
        ...Object.entries(A.palette).filter(Ct()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${hA(e)}`
          },
          style: {
            color: (A.vars || A).palette.text[e]
          }
        })),
        {
          props: ({ ownerState: e }) => e.align !== "inherit",
          style: {
            textAlign: "var(--Typography-textAlign)"
          }
        },
        {
          props: ({ ownerState: e }) => e.noWrap,
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },
        {
          props: ({ ownerState: e }) => e.gutterBottom,
          style: {
            marginBottom: "0.35em"
          }
        },
        {
          props: ({ ownerState: e }) => e.paragraph,
          style: {
            marginBottom: 16
          }
        }
      ]
    };
  }));
  Fl = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
  };
  Jn = B.forwardRef(function(e, t) {
    const { color: r, ...n } = KA({
      props: e,
      name: "MuiTypography"
    }), o = !Wh[r], i = Xh({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: f = "body1", variantMapping: g = Fl, ...h } = i, b = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: u,
      paragraph: d,
      variant: f,
      variantMapping: g
    }, m = l || (d ? "p" : g[f] || Fl[f]) || "span", y = jh(b);
    return L.jsx(zh, {
      as: m,
      ref: t,
      className: pA(y.root, s),
      ...h,
      ownerState: b,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...h.style
      }
    });
  });
  function Jh(A) {
    return typeof A == "function" ? A() : A;
  }
  const Yh = B.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = B.useState(null), s = pe(B.isValidElement(r) ? an(r) : null, t);
    if (tt(() => {
      o || a(Jh(n) || document.body);
    }, [
      n,
      o
    ]), tt(() => {
      if (i && !o) return ol(t, i), () => {
        ol(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o) {
      if (B.isValidElement(r)) {
        const l = {
          ref: s
        };
        return B.cloneElement(r, l);
      }
      return r;
    }
    return i && bs.createPortal(r, i);
  });
  function wn(A) {
    return parseInt(A, 10) || 0;
  }
  const Zh = {
    shadow: {
      visibility: "hidden",
      position: "absolute",
      overflow: "hidden",
      height: 0,
      top: 0,
      left: 0,
      transform: "translateZ(0)"
    }
  };
  function qh(A) {
    for (const e in A) return false;
    return true;
  }
  function Ul(A) {
    return qh(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const A0 = B.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = B.useRef(a != null), c = B.useRef(null), u = pe(t, c), d = B.useRef(null), f = B.useRef(null), g = B.useCallback(() => {
      const w = c.current, v = f.current;
      if (!w || !v) return;
      const C = rt(w).getComputedStyle(w);
      if (C.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = C.width, v.value = w.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const S = C.boxSizing, H = wn(C.paddingBottom) + wn(C.paddingTop), I = wn(C.borderBottomWidth) + wn(C.borderTopWidth), p = v.scrollHeight;
      v.value = "x";
      const T = v.scrollHeight;
      let R = p;
      o && (R = Math.max(Number(o) * T, R)), n && (R = Math.min(Number(n) * T, R)), R = Math.max(R, T);
      const k = R + (S === "border-box" ? H + I : 0), _ = Math.abs(R - p) <= 1;
      return {
        outerHeightStyle: k,
        overflowing: _
      };
    }, [
      n,
      o,
      e.placeholder
    ]), h = Lt(() => {
      const w = c.current, v = g();
      if (!w || !v || Ul(v)) return false;
      const U = v.outerHeightStyle;
      return d.current != null && d.current !== U;
    }), b = B.useCallback(() => {
      const w = c.current, v = g();
      if (!w || !v || Ul(v)) return;
      const U = v.outerHeightStyle;
      d.current !== U && (d.current = U, w.style.height = `${U}px`), w.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      g
    ]), m = B.useRef(-1);
    tt(() => {
      const w = Eu(b), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = rt(v);
      U.addEventListener("resize", w);
      let C;
      return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
        h() && (C.unobserve(v), cancelAnimationFrame(m.current), b(), m.current = requestAnimationFrame(() => {
          C.observe(v);
        }));
      }), C.observe(v)), () => {
        w.clear(), cancelAnimationFrame(m.current), U.removeEventListener("resize", w), C && C.disconnect();
      };
    }, [
      g,
      b,
      h
    ]), tt(() => {
      b();
    });
    const y = (w) => {
      l || b(), r && r(w);
    };
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx("textarea", {
          value: a,
          onChange: y,
          ref: u,
          rows: o,
          style: i,
          ...s
        }),
        L.jsx("textarea", {
          "aria-hidden": true,
          className: e.className,
          readOnly: true,
          ref: f,
          tabIndex: -1,
          style: {
            ...Zh.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  ha = function(A) {
    return typeof A == "string";
  };
  dr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const Es = B.createContext(void 0);
  fr = function() {
    return B.useContext(Es);
  };
  function El(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function so(A, e = false) {
    return A && (El(A.value) && A.value !== "" || e && El(A.defaultValue) && A.defaultValue !== "");
  }
  function e0(A) {
    return A.startAdornment;
  }
  function t0(A) {
    return kA("MuiInputBase", A);
  }
  const ar = IA("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel"
  ]);
  var Sl;
  const oi = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.root,
      t.formControl && e.formControl,
      t.startAdornment && e.adornedStart,
      t.endAdornment && e.adornedEnd,
      t.error && e.error,
      t.size === "small" && e.sizeSmall,
      t.multiline && e.multiline,
      t.color && e[`color${hA(t.color)}`],
      t.fullWidth && e.fullWidth,
      t.hiddenLabel && e.hiddenLabel
    ];
  }, ii = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.input,
      t.size === "small" && e.inputSizeSmall,
      t.multiline && e.inputMultiline,
      t.type === "search" && e.inputTypeSearch,
      t.startAdornment && e.inputAdornedStart,
      t.endAdornment && e.inputAdornedEnd,
      t.hiddenLabel && e.inputHiddenLabel
    ];
  }, r0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: f, type: g } = A, h = {
      root: [
        "root",
        `color${hA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        d && d !== "medium" && `size${hA(d)}`,
        c && "multiline",
        f && "adornedStart",
        o && "adornedEnd",
        l && "hiddenLabel",
        u && "readOnly"
      ],
      input: [
        "input",
        r && "disabled",
        g === "search" && "inputTypeSearch",
        c && "inputMultiline",
        d === "small" && "inputSizeSmall",
        l && "inputHiddenLabel",
        f && "inputAdornedStart",
        o && "inputAdornedEnd",
        u && "readOnly"
      ]
    };
    return RA(h, t0, e);
  }, ai = lA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: oi
  })(OA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${ar.disabled}`]: {
      color: (A.vars || A).palette.text.disabled,
      cursor: "default"
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.multiline,
        style: {
          padding: "4px 0 5px"
        }
      },
      {
        props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
        style: {
          paddingTop: 1
        }
      },
      {
        props: ({ ownerState: e }) => e.fullWidth,
        style: {
          width: "100%"
        }
      }
    ]
  }))), si = lA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: ii
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light", t = {
      color: "currentColor",
      ...A.vars ? {
        opacity: A.vars.opacity.inputPlaceholder
      } : {
        opacity: e ? 0.42 : 0.5
      },
      transition: A.transitions.create("opacity", {
        duration: A.transitions.duration.shorter
      })
    }, r = {
      opacity: "0 !important"
    }, n = A.vars ? {
      opacity: A.vars.opacity.inputPlaceholder
    } : {
      opacity: e ? 0.42 : 0.5
    };
    return {
      font: "inherit",
      letterSpacing: "inherit",
      color: "currentColor",
      padding: "4px 0 5px",
      border: 0,
      boxSizing: "content-box",
      background: "none",
      height: "1.4375em",
      margin: 0,
      WebkitTapHighlightColor: "transparent",
      display: "block",
      minWidth: 0,
      width: "100%",
      "&::-webkit-input-placeholder": t,
      "&::-moz-placeholder": t,
      "&::-ms-input-placeholder": t,
      "&:focus": {
        outline: 0
      },
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        WebkitAppearance: "none"
      },
      [`label[data-shrink=false] + .${ar.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${ar.disabled}`]: {
        opacity: 1,
        WebkitTextFillColor: (A.vars || A).palette.text.disabled
      },
      variants: [
        {
          props: ({ ownerState: o }) => !o.disableInjectingGlobalStyles,
          style: {
            animationName: "mui-auto-fill-cancel",
            animationDuration: "10ms",
            "&:-webkit-autofill": {
              animationDuration: "5000s",
              animationName: "mui-auto-fill"
            }
          }
        },
        {
          props: {
            size: "small"
          },
          style: {
            paddingTop: 1
          }
        },
        {
          props: ({ ownerState: o }) => o.multiline,
          style: {
            height: "auto",
            resize: "none",
            padding: 0,
            paddingTop: 0
          }
        },
        {
          props: {
            type: "search"
          },
          style: {
            MozAppearance: "textfield"
          }
        }
      ]
    };
  })), xl = ys({
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }), Ss = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: f, endAdornment: g, error: h, fullWidth: b = false, id: m, inputComponent: y = "input", inputProps: w = {}, inputRef: v, margin: U, maxRows: C, minRows: S, multiline: H = false, name: I, onBlur: p, onChange: T, onClick: R, onFocus: k, onKeyDown: _, onKeyUp: M, placeholder: P, readOnly: X, renderSuffix: J, rows: D, size: j, slotProps: eA = {}, slots: nA = {}, startAdornment: K, type: $ = "text", value: V, ...Y } = r, dA = w.value != null ? w.value : V, { current: iA } = B.useRef(dA != null), tA = B.useRef(), z = B.useCallback((HA) => {
    }, []), oA = pe(tA, v, w.ref, z), [aA, Q] = B.useState(false), E = fr(), F = dr({
      props: r,
      muiFormControl: E,
      states: [
        "color",
        "disabled",
        "error",
        "hiddenLabel",
        "size",
        "required",
        "filled"
      ]
    });
    F.focused = E ? E.focused : aA, B.useEffect(() => {
      !E && d && aA && (Q(false), p && p());
    }, [
      E,
      d,
      aA,
      p
    ]);
    const N = E && E.onFilled, W = E && E.onEmpty, G = B.useCallback((HA) => {
      so(HA) ? N && N() : W && W();
    }, [
      N,
      W
    ]);
    tt(() => {
      iA && G({
        value: dA
      });
    }, [
      dA,
      G,
      iA
    ]);
    const sA = (HA) => {
      k && k(HA), w.onFocus && w.onFocus(HA), E && E.onFocus ? E.onFocus(HA) : Q(true);
    }, cA = (HA) => {
      p && p(HA), w.onBlur && w.onBlur(HA), E && E.onBlur ? E.onBlur(HA) : Q(false);
    }, fA = (HA, ...Kt) => {
      if (!iA) {
        const pr = HA.target || tA.current;
        if (pr == null) throw new Error(At(1));
        G({
          value: pr.value
        });
      }
      w.onChange && w.onChange(HA, ...Kt), T && T(HA, ...Kt);
    };
    B.useEffect(() => {
      G(tA.current);
    }, []);
    const AA = (HA) => {
      tA.current && HA.currentTarget === HA.target && tA.current.focus(), R && R(HA);
    };
    let qA = y, gA = w;
    H && qA === "input" && (D ? gA = {
      type: void 0,
      minRows: D,
      maxRows: D,
      ...gA
    } : gA = {
      type: void 0,
      maxRows: C,
      minRows: S,
      ...gA
    }, qA = A0);
    const PA = (HA) => {
      G(HA.animationName === "mui-auto-fill-cancel" ? tA.current : {
        value: "x"
      });
    };
    B.useEffect(() => {
      E && E.setAdornedStart(!!K);
    }, [
      E,
      K
    ]);
    const WA = {
      ...r,
      color: F.color || "primary",
      disabled: F.disabled,
      endAdornment: g,
      error: F.error,
      focused: F.focused,
      formControl: E,
      fullWidth: b,
      hiddenLabel: F.hiddenLabel,
      multiline: H,
      size: F.size,
      startAdornment: K,
      type: $
    }, oe = r0(WA), jA = nA.root || l.Root || ai, ot = eA.root || c.root || {}, vt = nA.input || l.Input || si;
    return gA = {
      ...gA,
      ...eA.input ?? c.input
    }, L.jsxs(B.Fragment, {
      children: [
        !f && typeof xl == "function" && (Sl || (Sl = L.jsx(xl, {}))),
        L.jsxs(jA, {
          ...ot,
          ref: t,
          onClick: AA,
          ...Y,
          ...!ha(jA) && {
            ownerState: {
              ...WA,
              ...ot.ownerState
            }
          },
          className: pA(oe.root, ot.className, a, X && "MuiInputBase-readOnly"),
          children: [
            K,
            L.jsx(Es.Provider, {
              value: null,
              children: L.jsx(vt, {
                "aria-invalid": F.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                disabled: F.disabled,
                id: m,
                onAnimationStart: PA,
                name: I,
                placeholder: P,
                readOnly: X,
                required: F.required,
                rows: D,
                value: dA,
                onKeyDown: _,
                onKeyUp: M,
                type: $,
                ...gA,
                ...!ha(vt) && {
                  as: qA,
                  ownerState: {
                    ...WA,
                    ...gA.ownerState
                  }
                },
                ref: oA,
                className: pA(oe.input, gA.className, X && "MuiInputBase-readOnly"),
                onBlur: cA,
                onChange: fA,
                onFocus: sA
              })
            }),
            g,
            J ? J({
              ...F,
              startAdornment: K
            }) : null
          ]
        })
      ]
    });
  });
  function n0(A) {
    return kA("MuiInput", A);
  }
  const wr = {
    ...ar,
    ...IA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function o0(A) {
    return kA("MuiOutlinedInput", A);
  }
  const ke = {
    ...ar,
    ...IA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function i0(A) {
    return kA("MuiFilledInput", A);
  }
  let Qt, a0, s0;
  Qt = {
    ...ar,
    ...IA("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel"
    ])
  };
  a0 = ju(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  s0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  l0 = B.forwardRef(function(e, t) {
    const r = Qs(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: f, onExited: g, onExiting: h, style: b, timeout: m = n, TransitionComponent: y = We, ...w } = e, v = B.useRef(null), U = pe(v, an(a), t), C = (_) => (M) => {
      if (_) {
        const P = v.current;
        M === void 0 ? _(P) : _(P, M);
      }
    }, S = C(d), H = C((_, M) => {
      Yu(_);
      const P = io({
        style: b,
        timeout: m,
        easing: s
      }, {
        mode: "enter"
      });
      _.style.webkitTransition = r.transitions.create("opacity", P), _.style.transition = r.transitions.create("opacity", P), c && c(_, M);
    }), I = C(u), p = C(h), T = C((_) => {
      const M = io({
        style: b,
        timeout: m,
        easing: s
      }, {
        mode: "exit"
      });
      _.style.webkitTransition = r.transitions.create("opacity", M), _.style.transition = r.transitions.create("opacity", M), f && f(_);
    }), R = C(g), k = (_) => {
      o && o(v.current, _);
    };
    return L.jsx(y, {
      appear: i,
      in: l,
      nodeRef: v,
      onEnter: H,
      onEntered: I,
      onEntering: S,
      onExit: T,
      onExited: R,
      onExiting: p,
      addEndListener: k,
      timeout: m,
      ...w,
      children: (_, { ownerState: M, ...P }) => B.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: _ === "exited" && !l ? "hidden" : void 0,
          ...s0[_],
          ...b,
          ...a.props.style
        },
        ref: U,
        ...P
      })
    });
  });
  function c0(A) {
    return kA("MuiBackdrop", A);
  }
  IA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let u0, d0, g0, p0, wa, B0, h0, Zu, Yn, w0, C0;
  u0 = (A) => {
    const { classes: e, invisible: t } = A;
    return RA({
      root: [
        "root",
        t && "invisible"
      ]
    }, c0, e);
  };
  d0 = lA("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.invisible && e.invisible
      ];
    }
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      {
        props: {
          invisible: true
        },
        style: {
          backgroundColor: "transparent"
        }
      }
    ]
  });
  f0 = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: f, transitionDuration: g, ...h } = r, b = {
      ...r,
      component: i,
      invisible: a
    }, m = u0(b), y = {
      transition: f,
      root: l.Root,
      ...d
    }, w = {
      ...c,
      ...u
    }, v = {
      slots: y,
      slotProps: w
    }, [U, C] = le("root", {
      elementType: d0,
      externalForwardedProps: v,
      className: pA(m.root, o),
      ownerState: b
    }), [S, H] = le("transition", {
      elementType: l0,
      externalForwardedProps: v,
      ownerState: b
    });
    return L.jsx(S, {
      in: s,
      timeout: g,
      ...h,
      ...H,
      children: L.jsx(U, {
        "aria-hidden": true,
        ...C,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  g0 = IA("MuiBox", [
    "root"
  ]);
  p0 = ni();
  Ie = Ep({
    themeId: Ge,
    defaultTheme: p0,
    defaultClassName: g0.root,
    generateClassName: Qu.generate
  });
  wa = typeof ys({}) == "function";
  B0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  h0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  Zu = (A, e = false) => {
    var _a2, _b2;
    const t = {};
    e && A.colorSchemes && typeof A.getColorSchemeSelector == "function" && Object.entries(A.colorSchemes).forEach(([o, i]) => {
      var _a3, _b3;
      const a = A.getColorSchemeSelector(o);
      a.startsWith("@") ? t[a] = {
        ":root": {
          colorScheme: (_a3 = i.palette) == null ? void 0 : _a3.mode
        }
      } : t[a.replace(/\s*&/, "")] = {
        colorScheme: (_b3 = i.palette) == null ? void 0 : _b3.mode
      };
    });
    let r = {
      html: B0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...h0(A),
        "&::backdrop": {
          backgroundColor: (A.vars || A).palette.background.default
        }
      },
      ...t
    };
    const n = (_b2 = (_a2 = A.components) == null ? void 0 : _a2.MuiCssBaseline) == null ? void 0 : _b2.styleOverrides;
    return n && (r = [
      r,
      n
    ]), r;
  };
  Yn = "mui-ecs";
  w0 = (A) => {
    const e = Zu(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${Yn})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${Yn}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${Yn}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  C0 = ys(wa ? ({ theme: A, enableColorScheme: e }) => Zu(A, e) : ({ theme: A }) => w0(A));
  function m0(A) {
    const e = KA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(B.Fragment, {
      children: [
        wa && L.jsx(C0, {
          enableColorScheme: r
        }),
        !wa && !r && L.jsx("span", {
          className: Yn,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function v0(A) {
    const e = He(A);
    return e.body === A ? rt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Or(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Il(A) {
    return parseInt(rt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function Q0(A) {
    const t = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK"
    ].includes(A.tagName), r = A.tagName === "INPUT" && A.getAttribute("type") === "hidden";
    return t || r;
  }
  function Hl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !Q0(i);
      a && s && Or(i, n);
    });
  }
  function Ei(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function y0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (v0(r)) {
        const i = Iu(rt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Il(r) + i}px`;
        const a = He(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Il(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = He(r).body;
      else {
        const i = r.parentElement, a = rt(r);
        o = (i == null ? void 0 : i.nodeName) === "HTML" && a.getComputedStyle(i).overflowY === "scroll" ? i : r;
      }
      t.push({
        value: o.style.overflow,
        property: "overflow",
        el: o
      }, {
        value: o.style.overflowX,
        property: "overflow-x",
        el: o
      }, {
        value: o.style.overflowY,
        property: "overflow-y",
        el: o
      }), o.style.overflow = "hidden";
    }
    return () => {
      t.forEach(({ value: o, el: i, property: a }) => {
        o ? i.style.setProperty(a, o) : i.style.removeProperty(a);
      });
    };
  }
  function b0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class F0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Or(e.modalRef, false);
      const n = b0(t);
      Hl(t, e.mount, e.modalRef, n, true);
      const o = Ei(this.containers, (i) => i.container === t);
      return o !== -1 ? (this.containers[o].modals.push(e), r) : (this.containers.push({
        modals: [
          e
        ],
        container: t,
        restore: null,
        hiddenSiblings: n
      }), r);
    }
    mount(e, t) {
      const r = Ei(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = y0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Ei(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Or(e.modalRef, t), Hl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Or(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const U0 = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])'
  ].join(",");
  function E0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function S0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function x0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || S0(A));
  }
  function I0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(U0)).forEach((r, n) => {
      const o = E0(r);
      o === -1 || !x0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function H0() {
    return true;
  }
  function T0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = I0, isEnabled: i = H0, open: a } = A, s = B.useRef(false), l = B.useRef(null), c = B.useRef(null), u = B.useRef(null), d = B.useRef(null), f = B.useRef(false), g = B.useRef(null), h = pe(an(e), g), b = B.useRef(null);
    B.useEffect(() => {
      !a || !g.current || (f.current = !t);
    }, [
      t,
      a
    ]), B.useEffect(() => {
      if (!a || !g.current) return;
      const w = He(g.current);
      return g.current.contains(w.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), f.current && g.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), B.useEffect(() => {
      if (!a || !g.current) return;
      const w = He(g.current), v = (S) => {
        b.current = S, !(r || !i() || S.key !== "Tab") && w.activeElement === g.current && S.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const S = g.current;
        if (S === null) return;
        if (!w.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (S.contains(w.activeElement) || r && w.activeElement !== l.current && w.activeElement !== c.current) return;
        if (w.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!f.current) return;
        let H = [];
        if ((w.activeElement === l.current || w.activeElement === c.current) && (H = o(g.current)), H.length > 0) {
          const I = !!(((_a2 = b.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = b.current) == null ? void 0 : _b2.key) === "Tab"), p = H[0], T = H[H.length - 1];
          typeof p != "string" && typeof T != "string" && (I ? T.focus() : p.focus());
        } else S.focus();
      };
      w.addEventListener("focusin", U), w.addEventListener("keydown", v, true);
      const C = setInterval(() => {
        w.activeElement && w.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(C), w.removeEventListener("focusin", U), w.removeEventListener("keydown", v, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const m = (w) => {
      u.current === null && (u.current = w.relatedTarget), f.current = true, d.current = w.target;
      const v = e.props.onFocus;
      v && v(w);
    }, y = (w) => {
      u.current === null && (u.current = w.relatedTarget), f.current = true;
    };
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: y,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        B.cloneElement(e, {
          ref: h,
          onFocus: m
        }),
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: y,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function L0(A) {
    return typeof A == "function" ? A() : A;
  }
  function k0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Tl = () => {
  }, Cn = new F0();
  function R0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = B.useRef({}), d = B.useRef(null), f = B.useRef(null), g = pe(f, c), [h, b] = B.useState(!l), m = k0(a);
    let y = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (y = false);
    const w = () => He(d.current), v = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), U = () => {
      Cn.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, C = Lt(() => {
      const M = L0(e) || w().body;
      Cn.add(v(), M), f.current && U();
    }), S = () => Cn.isTopModal(v()), H = Lt((M) => {
      d.current = M, M && (l && S() ? U() : f.current && Or(f.current, y));
    }), I = B.useCallback(() => {
      Cn.remove(v(), y);
    }, [
      y
    ]);
    B.useEffect(() => () => {
      I();
    }, [
      I
    ]), B.useEffect(() => {
      l ? C() : (!m || !n) && I();
    }, [
      l,
      I,
      m,
      n,
      C
    ]);
    const p = (M) => (P) => {
      var _a2;
      (_a2 = M.onKeyDown) == null ? void 0 : _a2.call(M, P), !(P.key !== "Escape" || P.which === 229 || !S()) && (t || (P.stopPropagation(), s && s(P, "escapeKeyDown")));
    }, T = (M) => (P) => {
      var _a2;
      (_a2 = M.onClick) == null ? void 0 : _a2.call(M, P), P.target === P.currentTarget && s && s(P, "backdropClick");
    };
    return {
      getRootProps: (M = {}) => {
        const P = Tu(A);
        delete P.onTransitionEnter, delete P.onTransitionExited;
        const X = {
          ...P,
          ...M
        };
        return {
          role: "presentation",
          ...X,
          onKeyDown: p(X),
          ref: g
        };
      },
      getBackdropProps: (M = {}) => {
        const P = M;
        return {
          "aria-hidden": true,
          ...P,
          onClick: T(P),
          open: l
        };
      },
      getTransitionProps: () => {
        const M = () => {
          b(false), o && o();
        }, P = () => {
          b(true), i && i(), n && I();
        };
        return {
          onEnter: nl(M, (a == null ? void 0 : a.props.onEnter) ?? Tl),
          onExited: nl(P, (a == null ? void 0 : a.props.onExited) ?? Tl)
        };
      },
      rootRef: g,
      portalRef: H,
      isTopModal: S,
      exited: h,
      hasTransition: m
    };
  }
  function K0(A) {
    return kA("MuiModal", A);
  }
  IA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let O0, D0, M0;
  O0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return RA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, K0, r);
  };
  D0 = lA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(OA(({ theme: A }) => ({
    position: "fixed",
    zIndex: (A.vars || A).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    variants: [
      {
        props: ({ ownerState: e }) => !e.open && e.exited,
        style: {
          visibility: "hidden"
        }
      }
    ]
  })));
  M0 = lA(f0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  P0 = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = M0, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: f = {}, disableAutoFocus: g = false, disableEnforceFocus: h = false, disableEscapeKeyDown: b = false, disablePortal: m = false, disableRestoreFocus: y = false, disableScrollLock: w = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: C, onClose: S, onTransitionEnter: H, onTransitionExited: I, open: p, slotProps: T = {}, slots: R = {}, theme: k, ..._ } = r, M = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: g,
      disableEnforceFocus: h,
      disableEscapeKeyDown: b,
      disablePortal: m,
      disableRestoreFocus: y,
      disableScrollLock: w,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: P, getBackdropProps: X, getTransitionProps: J, portalRef: D, isTopModal: j, exited: eA, hasTransition: nA } = R0({
      ...M,
      rootRef: t
    }), K = {
      ...M,
      exited: eA
    }, $ = O0(K), V = {};
    if (l.props.tabIndex === void 0 && (V.tabIndex = "-1"), nA) {
      const { onEnter: oA, onExited: aA } = J();
      V.onEnter = oA, V.onExited = aA;
    }
    const Y = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...R
      },
      slotProps: {
        ...f,
        ...T
      }
    }, [dA, iA] = le("root", {
      ref: t,
      elementType: D0,
      externalForwardedProps: {
        ...Y,
        ..._,
        component: u
      },
      getSlotProps: P,
      ownerState: K,
      className: pA(a, $ == null ? void 0 : $.root, !K.open && K.exited && ($ == null ? void 0 : $.hidden))
    }), [tA, z] = le("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (oA) => X({
        ...oA,
        onClick: (aA) => {
          C && C(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, $ == null ? void 0 : $.backdrop),
      ownerState: K
    });
    return !U && !p && (!nA || eA) ? null : L.jsx(Yh, {
      ref: D,
      container: c,
      disablePortal: m,
      children: L.jsxs(dA, {
        ...iA,
        children: [
          !v && n ? L.jsx(tA, {
            ...z
          }) : null,
          L.jsx(T0, {
            disableEnforceFocus: h,
            disableAutoFocus: g,
            disableRestoreFocus: y,
            isEnabled: j,
            open: p,
            children: B.cloneElement(l, V)
          })
        ]
      })
    });
  });
  function N0(A) {
    return kA("MuiDivider", A);
  }
  let _0, G0, V0;
  hU = IA("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical"
  ]);
  _0 = (A) => {
    const { absolute: e, children: t, classes: r, flexItem: n, light: o, orientation: i, textAlign: a, variant: s } = A;
    return RA({
      root: [
        "root",
        e && "absolute",
        s,
        o && "light",
        i === "vertical" && "vertical",
        n && "flexItem",
        t && "withChildren",
        t && i === "vertical" && "withChildrenVertical",
        a === "right" && i !== "vertical" && "textAlignRight",
        a === "left" && i !== "vertical" && "textAlignLeft"
      ],
      wrapper: [
        "wrapper",
        i === "vertical" && "wrapperVertical"
      ]
    }, N0, r);
  };
  G0 = lA("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.absolute && e.absolute,
        e[t.variant],
        t.light && e.light,
        t.orientation === "vertical" && e.vertical,
        t.flexItem && e.flexItem,
        t.children && e.withChildren,
        t.children && t.orientation === "vertical" && e.withChildrenVertical,
        t.textAlign === "right" && t.orientation !== "vertical" && e.textAlignRight,
        t.textAlign === "left" && t.orientation !== "vertical" && e.textAlignLeft
      ];
    }
  })(OA(({ theme: A }) => ({
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: (A.vars || A).palette.divider,
    borderBottomWidth: "thin",
    variants: [
      {
        props: {
          absolute: true
        },
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%"
        }
      },
      {
        props: {
          light: true
        },
        style: {
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : ir(A.palette.divider, 0.08)
        }
      },
      {
        props: {
          variant: "inset"
        },
        style: {
          marginLeft: 72
        }
      },
      {
        props: {
          variant: "middle",
          orientation: "horizontal"
        },
        style: {
          marginLeft: A.spacing(2),
          marginRight: A.spacing(2)
        }
      },
      {
        props: {
          variant: "middle",
          orientation: "vertical"
        },
        style: {
          marginTop: A.spacing(1),
          marginBottom: A.spacing(1)
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin"
        }
      },
      {
        props: {
          flexItem: true
        },
        style: {
          alignSelf: "stretch",
          height: "auto"
        }
      },
      {
        props: ({ ownerState: e }) => !!e.children,
        style: {
          display: "flex",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": {
            content: '""',
            alignSelf: "center"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.children && e.orientation !== "vertical",
        style: {
          "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(A.vars || A).palette.divider}`,
            borderTopStyle: "inherit"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.orientation === "vertical" && e.children,
        style: {
          flexDirection: "column",
          "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(A.vars || A).palette.divider}`,
            borderLeftStyle: "inherit"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical",
        style: {
          "&::before": {
            width: "90%"
          },
          "&::after": {
            width: "10%"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical",
        style: {
          "&::before": {
            width: "10%"
          },
          "&::after": {
            width: "90%"
          }
        }
      }
    ]
  })));
  V0 = lA("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.wrapper,
        t.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(OA(({ theme: A }) => ({
    display: "inline-block",
    paddingLeft: `calc(${A.spacing(1)} * 1.2)`,
    paddingRight: `calc(${A.spacing(1)} * 1.2)`,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "vertical"
        },
        style: {
          paddingTop: `calc(${A.spacing(1)} * 1.2)`,
          paddingBottom: `calc(${A.spacing(1)} * 1.2)`
        }
      }
    ]
  })));
  lo = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: s = o || a === "vertical" ? "div" : "hr", flexItem: l = false, light: c = false, role: u = s !== "hr" ? "separator" : void 0, textAlign: d = "center", variant: f = "fullWidth", ...g } = r, h = {
      ...r,
      absolute: n,
      component: s,
      flexItem: l,
      light: c,
      orientation: a,
      role: u,
      textAlign: d,
      variant: f
    }, b = _0(h);
    return L.jsx(G0, {
      as: s,
      className: pA(b.root, i),
      role: u,
      ref: t,
      ownerState: h,
      "aria-orientation": u === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...g,
      children: o ? L.jsx(V0, {
        className: b.wrapper,
        ownerState: h,
        children: o
      }) : null
    });
  });
  lo && (lo.muiSkipListHighlight = true);
  const $0 = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, s = {
      root: [
        "root",
        !t && "underline",
        r && "adornedStart",
        n && "adornedEnd",
        o === "small" && `size${hA(o)}`,
        i && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, l = RA(s, i0, e);
    return {
      ...e,
      ...l
    };
  }, W0 = lA(ai, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...oi(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light", t = e ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = e ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", n = e ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", o = e ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
      position: "relative",
      backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r,
      borderTopLeftRadius: (A.vars || A).shape.borderRadius,
      borderTopRightRadius: (A.vars || A).shape.borderRadius,
      transition: A.transitions.create("background-color", {
        duration: A.transitions.duration.shorter,
        easing: A.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.hoverBg : n,
        "@media (hover: none)": {
          backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
        }
      },
      [`&.${Qt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${Qt.disabled}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.disabledBg : o
      },
      variants: [
        {
          props: ({ ownerState: i }) => !i.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: A.transitions.create("transform", {
                duration: A.transitions.duration.shorter,
                easing: A.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${Qt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Qt.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (A.vars || A).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / ${A.vars.opacity.inputUnderline})` : t}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: A.transitions.create("border-bottom-color", {
                duration: A.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${Qt.disabled}, .${Qt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${Qt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(Ct()).map(([i]) => {
          var _a2;
          return {
            props: {
              disableUnderline: false,
              color: i
            },
            style: {
              "&::after": {
                borderBottom: `2px solid ${(_a2 = (A.vars || A).palette[i]) == null ? void 0 : _a2.main}`
              }
            }
          };
        }),
        {
          props: ({ ownerState: i }) => i.startAdornment,
          style: {
            paddingLeft: 12
          }
        },
        {
          props: ({ ownerState: i }) => i.endAdornment,
          style: {
            paddingRight: 12
          }
        },
        {
          props: ({ ownerState: i }) => i.multiline,
          style: {
            padding: "25px 12px 8px"
          }
        },
        {
          props: ({ ownerState: i, size: a }) => i.multiline && a === "small",
          style: {
            paddingTop: 21,
            paddingBottom: 4
          }
        },
        {
          props: ({ ownerState: i }) => i.multiline && i.hiddenLabel,
          style: {
            paddingTop: 16,
            paddingBottom: 17
          }
        },
        {
          props: ({ ownerState: i }) => i.multiline && i.hiddenLabel && i.size === "small",
          style: {
            paddingTop: 8,
            paddingBottom: 9
          }
        }
      ]
    };
  })), X0 = lA(si, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: ii
  })(OA(({ theme: A }) => ({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    ...!A.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: A.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: A.palette.mode === "light" ? null : "#fff",
        caretColor: A.palette.mode === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    ...A.vars && {
      "&:-webkit-autofill": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      },
      [A.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "#fff",
          caretColor: "#fff"
        }
      }
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          paddingTop: 21,
          paddingBottom: 4
        }
      },
      {
        props: ({ ownerState: e }) => e.hiddenLabel,
        style: {
          paddingTop: 16,
          paddingBottom: 17
        }
      },
      {
        props: ({ ownerState: e }) => e.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.endAdornment,
        style: {
          paddingRight: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.hiddenLabel && e.size === "small",
        style: {
          paddingTop: 8,
          paddingBottom: 9
        }
      },
      {
        props: ({ ownerState: e }) => e.multiline,
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    ]
  }))), xs = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: f = "text", ...g } = r, h = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, b = $0(r), m = {
      root: {
        ownerState: h
      },
      input: {
        ownerState: h
      }
    }, y = u ?? i ? YA(m, u ?? i) : m, w = d.root ?? o.Root ?? W0, v = d.input ?? o.Input ?? X0;
    return L.jsx(Ss, {
      slots: {
        root: w,
        input: v
      },
      slotProps: y,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: f,
      ...g,
      classes: b
    });
  });
  xs.muiName = "Input";
  function j0(A) {
    return kA("MuiFormControl", A);
  }
  IA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  const z0 = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${hA(t)}`,
        r && "fullWidth"
      ]
    };
    return RA(n, j0, e);
  }, J0 = lA("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`margin${hA(t.margin)}`],
        t.fullWidth && e.fullWidth
      ];
    }
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: {
          margin: "normal"
        },
        style: {
          marginTop: 16,
          marginBottom: 8
        }
      },
      {
        props: {
          margin: "dense"
        },
        style: {
          marginTop: 8,
          marginBottom: 4
        }
      },
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      }
    ]
  }), Y0 = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: f = "none", required: g = false, size: h = "medium", variant: b = "outlined", ...m } = r, y = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: u,
      hiddenLabel: d,
      margin: f,
      required: g,
      size: h,
      variant: b
    }, w = z0(y), [v, U] = B.useState(() => {
      let M = false;
      return n && B.Children.forEach(n, (P) => {
        if (!yi(P, [
          "Input",
          "Select"
        ])) return;
        const X = yi(P, [
          "Select"
        ]) ? P.props.input : P;
        X && e0(X.props) && (M = true);
      }), M;
    }), [C, S] = B.useState(() => {
      let M = false;
      return n && B.Children.forEach(n, (P) => {
        yi(P, [
          "Input",
          "Select"
        ]) && (so(P.props, true) || so(P.props.inputProps, true)) && (M = true);
      }), M;
    }), [H, I] = B.useState(false);
    s && H && I(false);
    const p = c !== void 0 && !s ? c : H;
    let T;
    B.useRef(false);
    const R = B.useCallback(() => {
      S(true);
    }, []), k = B.useCallback(() => {
      S(false);
    }, []), _ = B.useMemo(() => ({
      adornedStart: v,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: C,
      focused: p,
      fullWidth: u,
      hiddenLabel: d,
      size: h,
      onBlur: () => {
        I(false);
      },
      onFocus: () => {
        I(true);
      },
      onEmpty: k,
      onFilled: R,
      registerEffect: T,
      required: g,
      variant: b
    }), [
      v,
      i,
      s,
      l,
      C,
      p,
      u,
      d,
      T,
      k,
      R,
      g,
      h,
      b
    ]);
    return L.jsx(Es.Provider, {
      value: _,
      children: L.jsx(J0, {
        as: a,
        ownerState: y,
        className: pA(w.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function Z0(A) {
    return kA("MuiFormHelperText", A);
  }
  const Ll = IA("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required"
  ]);
  var kl;
  const q0 = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: s } = A, l = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${hA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        s && "required"
      ]
    };
    return RA(l, Z0, e);
  }, Aw = lA("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.size && e[`size${hA(t.size)}`],
        t.contained && e.contained,
        t.filled && e.filled
      ];
    }
  })(OA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Ll.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Ll.error}`]: {
      color: (A.vars || A).palette.error.main
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          marginTop: 4
        }
      },
      {
        props: ({ ownerState: e }) => e.contained,
        style: {
          marginLeft: 14,
          marginRight: 14
        }
      }
    ]
  }))), ew = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: f, ...g } = r, h = fr(), b = dr({
      props: r,
      muiFormControl: h,
      states: [
        "variant",
        "size",
        "disabled",
        "error",
        "filled",
        "focused",
        "required"
      ]
    }), m = {
      ...r,
      component: i,
      contained: b.variant === "filled" || b.variant === "outlined",
      variant: b.variant,
      size: b.size,
      disabled: b.disabled,
      error: b.error,
      filled: b.filled,
      focused: b.focused,
      required: b.required
    };
    delete m.ownerState;
    const y = q0(m);
    return L.jsx(Aw, {
      as: i,
      className: pA(y.root, o),
      ref: t,
      ...g,
      ownerState: m,
      children: n === " " ? kl || (kl = L.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function tw(A) {
    return kA("MuiFormLabel", A);
  }
  const Dr = IA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), rw = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, s = {
      root: [
        "root",
        `color${hA(t)}`,
        n && "disabled",
        o && "error",
        i && "filled",
        r && "focused",
        a && "required"
      ],
      asterisk: [
        "asterisk",
        o && "error"
      ]
    };
    return RA(s, tw, e);
  }, nw = lA("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color === "secondary" && e.colorSecondary,
        t.filled && e.filled
      ];
    }
  })(OA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(Ct()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${Dr.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Dr.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${Dr.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), ow = lA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(OA(({ theme: A }) => ({
    [`&.${Dr.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), iw = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...f } = r, g = fr(), h = dr({
      props: r,
      muiFormControl: g,
      states: [
        "color",
        "required",
        "focused",
        "disabled",
        "error",
        "filled"
      ]
    }), b = {
      ...r,
      color: h.color || "primary",
      component: a,
      disabled: h.disabled,
      error: h.error,
      filled: h.filled,
      focused: h.focused,
      required: h.required
    }, m = rw(b);
    return L.jsxs(nw, {
      as: a,
      ownerState: b,
      className: pA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        h.required && L.jsxs(ow, {
          ownerState: b,
          "aria-hidden": true,
          className: m.asterisk,
          children: [
            "\u2009",
            "*"
          ]
        })
      ]
    });
  });
  function Ca(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  const aw = {
    entering: {
      opacity: 1,
      transform: Ca(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, Si = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ma = B.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: f, style: g, timeout: h = "auto", TransitionComponent: b = We, ...m } = e, y = xu(), w = B.useRef(), v = Qs(), U = B.useRef(null), C = pe(U, an(o), t), S = (M) => (P) => {
      if (M) {
        const X = U.current;
        P === void 0 ? M(X) : M(X, P);
      }
    }, H = S(c), I = S((M, P) => {
      Yu(M);
      const { duration: X, delay: J, easing: D } = io({
        style: g,
        timeout: h,
        easing: i
      }, {
        mode: "enter"
      });
      let j;
      h === "auto" ? (j = v.transitions.getAutoHeightDuration(M.clientHeight), w.current = j) : j = X, M.style.transition = [
        v.transitions.create("opacity", {
          duration: j,
          delay: J
        }),
        v.transitions.create("transform", {
          duration: Si ? j : j * 0.666,
          delay: J,
          easing: D
        })
      ].join(","), s && s(M, P);
    }), p = S(l), T = S(f), R = S((M) => {
      const { duration: P, delay: X, easing: J } = io({
        style: g,
        timeout: h,
        easing: i
      }, {
        mode: "exit"
      });
      let D;
      h === "auto" ? (D = v.transitions.getAutoHeightDuration(M.clientHeight), w.current = D) : D = P, M.style.transition = [
        v.transitions.create("opacity", {
          duration: D,
          delay: X
        }),
        v.transitions.create("transform", {
          duration: Si ? D : D * 0.666,
          delay: Si ? X : X || D * 0.333,
          easing: J
        })
      ].join(","), M.style.opacity = 0, M.style.transform = Ca(0.75), u && u(M);
    }), k = S(d), _ = (M) => {
      h === "auto" && y.start(w.current || 0, M), r && r(U.current, M);
    };
    return L.jsx(b, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: I,
      onEntered: p,
      onEntering: H,
      onExit: R,
      onExited: k,
      onExiting: T,
      addEndListener: _,
      timeout: h === "auto" ? null : h,
      ...m,
      children: (M, { ownerState: P, ...X }) => B.cloneElement(o, {
        style: {
          opacity: 0,
          transform: Ca(0.75),
          visibility: M === "exited" && !a ? "hidden" : void 0,
          ...aw[M],
          ...g,
          ...o.props.style
        },
        ref: C,
        ...X
      })
    });
  });
  ma && (ma.muiSupportAuto = true);
  const sw = (A) => {
    const { classes: e, disableUnderline: t } = A, n = RA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, n0, e);
    return {
      ...e,
      ...n
    };
  }, lw = lA(ai, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...oi(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(OA(({ theme: A }) => {
    let t = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return A.vars && (t = `rgba(${A.vars.palette.common.onBackgroundChannel} / ${A.vars.opacity.inputUnderline})`), {
      position: "relative",
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            "label + &": {
              marginTop: 16
            }
          }
        },
        {
          props: ({ ownerState: r }) => !r.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: A.transitions.create("transform", {
                duration: A.transitions.duration.shorter,
                easing: A.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${wr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${wr.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (A.vars || A).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${t}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: A.transitions.create("border-bottom-color", {
                duration: A.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${wr.disabled}, .${wr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${wr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(Ct()).map(([r]) => ({
          props: {
            color: r,
            disableUnderline: false
          },
          style: {
            "&::after": {
              borderBottom: `2px solid ${(A.vars || A).palette[r].main}`
            }
          }
        }))
      ]
    };
  })), cw = lA(si, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: ii
  })({}), Is = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...f } = r, g = sw(r), b = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? YA(c ?? i, b) : b, y = u.root ?? o.Root ?? lw, w = u.input ?? o.Input ?? cw;
    return L.jsx(Ss, {
      slots: {
        root: y,
        input: w
      },
      slotProps: m,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...f,
      classes: g
    });
  });
  Is.muiName = "Input";
  function uw(A) {
    return kA("MuiInputLabel", A);
  }
  IA("MuiInputLabel", [
    "root",
    "focused",
    "disabled",
    "error",
    "required",
    "asterisk",
    "formControl",
    "sizeSmall",
    "shrink",
    "animated",
    "standard",
    "filled",
    "outlined"
  ]);
  let dw, fw, gw;
  dw = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, s = {
      root: [
        "root",
        t && "formControl",
        !o && "animated",
        n && "shrink",
        r && r !== "normal" && `size${hA(r)}`,
        i
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, l = RA(s, uw, e);
    return {
      ...e,
      ...l
    };
  };
  fw = lA(iw, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${Dr.asterisk}`]: e.asterisk
        },
        e.root,
        t.formControl && e.formControl,
        t.size === "small" && e.sizeSmall,
        t.shrink && e.shrink,
        !t.disableAnimation && e.animated,
        t.focused && e.focused,
        e[t.variant]
      ];
    }
  })(OA(({ theme: A }) => ({
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    variants: [
      {
        props: ({ ownerState: e }) => e.formControl,
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(0, 20px) scale(1)"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          transform: "translate(0, 17px) scale(1)"
        }
      },
      {
        props: ({ ownerState: e }) => e.shrink,
        style: {
          transform: "translate(0, -1.5px) scale(0.75)",
          transformOrigin: "top left",
          maxWidth: "133%"
        }
      },
      {
        props: ({ ownerState: e }) => !e.disableAnimation,
        style: {
          transition: A.transitions.create([
            "color",
            "transform",
            "max-width"
          ], {
            duration: A.transitions.duration.shorter,
            easing: A.transitions.easing.easeOut
          })
        }
      },
      {
        props: {
          variant: "filled"
        },
        style: {
          zIndex: 1,
          pointerEvents: "none",
          transform: "translate(12px, 16px) scale(1)",
          maxWidth: "calc(100% - 24px)"
        }
      },
      {
        props: {
          variant: "filled",
          size: "small"
        },
        style: {
          transform: "translate(12px, 13px) scale(1)"
        }
      },
      {
        props: ({ variant: e, ownerState: t }) => e === "filled" && t.shrink,
        style: {
          userSelect: "none",
          pointerEvents: "auto",
          transform: "translate(12px, 7px) scale(0.75)",
          maxWidth: "calc(133% - 24px)"
        }
      },
      {
        props: ({ variant: e, ownerState: t, size: r }) => e === "filled" && t.shrink && r === "small",
        style: {
          transform: "translate(12px, 4px) scale(0.75)"
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          zIndex: 1,
          pointerEvents: "none",
          transform: "translate(14px, 16px) scale(1)",
          maxWidth: "calc(100% - 24px)"
        }
      },
      {
        props: {
          variant: "outlined",
          size: "small"
        },
        style: {
          transform: "translate(14px, 9px) scale(1)"
        }
      },
      {
        props: ({ variant: e, ownerState: t }) => e === "outlined" && t.shrink,
        style: {
          userSelect: "none",
          pointerEvents: "auto",
          maxWidth: "calc(133% - 32px)",
          transform: "translate(14px, -9px) scale(0.75)"
        }
      }
    ]
  })));
  gw = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = fr();
    let u = i;
    typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
    const d = dr({
      props: r,
      muiFormControl: c,
      states: [
        "size",
        "variant",
        "required",
        "focused"
      ]
    }), f = {
      ...r,
      disableAnimation: n,
      formControl: c,
      shrink: u,
      size: d.size,
      variant: d.variant,
      required: d.required,
      focused: d.focused
    }, g = dw(f);
    return L.jsx(fw, {
      "data-shrink": u,
      ref: t,
      className: pA(g.root, s),
      ...l,
      ownerState: f,
      classes: g
    });
  });
  pw = B.createContext({});
  function Bw(A) {
    return kA("MuiList", A);
  }
  IA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let hw, ww;
  hw = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return RA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Bw, e);
  };
  ww = lA("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.disablePadding && e.padding,
        t.dense && e.dense,
        t.subheader && e.subheader
      ];
    }
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: A }) => !A.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: A }) => A.subheader,
        style: {
          paddingTop: 0
        }
      }
    ]
  });
  Cw = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, u = B.useMemo(() => ({
      dense: a
    }), [
      a
    ]), d = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, f = hw(d);
    return L.jsx(pw.Provider, {
      value: u,
      children: L.jsxs(ww, {
        as: i,
        className: pA(f.root, o),
        ref: t,
        ownerState: d,
        ...c,
        children: [
          l,
          n
        ]
      })
    });
  });
  function xi(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Rl(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function qu(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function Cr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !qu(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const mw = B.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, f = B.useRef(null), g = B.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    tt(() => {
      n && f.current.focus();
    }, [
      n
    ]), B.useImperativeHandle(r, () => ({
      adjustStyleForScrollbar: (w, { direction: v }) => {
        const U = !f.current.style.width;
        if (w.clientHeight < f.current.clientHeight && U) {
          const C = `${Iu(rt(w))}px`;
          f.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = C, f.current.style.width = `calc(100% + ${C})`;
        }
        return f.current;
      }
    }), []);
    const h = (w) => {
      const v = f.current, U = w.key;
      if (w.ctrlKey || w.metaKey || w.altKey) {
        c && c(w);
        return;
      }
      const S = He(v).activeElement;
      if (U === "ArrowDown") w.preventDefault(), Cr(v, S, l, s, xi);
      else if (U === "ArrowUp") w.preventDefault(), Cr(v, S, l, s, Rl);
      else if (U === "Home") w.preventDefault(), Cr(v, null, l, s, xi);
      else if (U === "End") w.preventDefault(), Cr(v, null, l, s, Rl);
      else if (U.length === 1) {
        const H = g.current, I = U.toLowerCase(), p = performance.now();
        H.keys.length > 0 && (p - H.lastTime > 500 ? (H.keys = [], H.repeating = true, H.previousKeyMatched = true) : H.repeating && I !== H.keys[0] && (H.repeating = false)), H.lastTime = p, H.keys.push(I);
        const T = S && !H.repeating && qu(S, H);
        H.previousKeyMatched && (T || Cr(v, S, false, s, xi, H)) ? w.preventDefault() : H.previousKeyMatched = false;
      }
      c && c(w);
    }, b = pe(f, t);
    let m = -1;
    B.Children.forEach(i, (w, v) => {
      if (!B.isValidElement(w)) {
        m === v && (m += 1, m >= i.length && (m = -1));
        return;
      }
      w.props.disabled || (u === "selectedMenu" && w.props.selected || m === -1) && (m = v), m === v && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
    });
    const y = B.Children.map(i, (w, v) => {
      if (v === m) {
        const U = {};
        return o && (U.autoFocus = true), w.props.tabIndex === void 0 && u === "selectedMenu" && (U.tabIndex = 0), B.cloneElement(w, U);
      }
      return w;
    });
    return L.jsx(Cw, {
      role: "menu",
      ref: b,
      className: a,
      onKeyDown: h,
      tabIndex: n ? 0 : -1,
      ...d,
      children: y
    });
  });
  function vw(A) {
    return kA("MuiPopover", A);
  }
  IA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Kl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Ol(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Dl(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function mn(A) {
    return typeof A == "function" ? A() : A;
  }
  const Qw = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, vw, e);
  }, yw = lA(P0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Ad = lA(fa, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
  }), ed = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: f = 16, open: g, PaperProps: h = {}, slots: b = {}, slotProps: m = {}, transformOrigin: y = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: C = false, ...S } = r, H = B.useRef(), I = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: f,
      transformOrigin: y,
      TransitionComponent: w,
      transitionDuration: v,
      TransitionProps: U
    }, p = Qw(I), T = B.useCallback(() => {
      if (s === "anchorPosition") return a;
      const z = mn(o), aA = (z && z.nodeType === 1 ? z : He(H.current).body).getBoundingClientRect();
      return {
        top: aA.top + Kl(aA, i.vertical),
        left: aA.left + Ol(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), R = B.useCallback((z) => ({
      vertical: Kl(z, y.vertical),
      horizontal: Ol(z, y.horizontal)
    }), [
      y.horizontal,
      y.vertical
    ]), k = B.useCallback((z) => {
      const oA = {
        width: z.offsetWidth,
        height: z.offsetHeight
      }, aA = R(oA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Dl(aA)
      };
      const Q = T();
      let E = Q.top - aA.vertical, F = Q.left - aA.horizontal;
      const N = E + oA.height, W = F + oA.width, G = rt(mn(o)), sA = G.innerHeight - f, cA = G.innerWidth - f;
      if (f !== null && E < f) {
        const fA = E - f;
        E -= fA, aA.vertical += fA;
      } else if (f !== null && N > sA) {
        const fA = N - sA;
        E -= fA, aA.vertical += fA;
      }
      if (f !== null && F < f) {
        const fA = F - f;
        F -= fA, aA.horizontal += fA;
      } else if (W > cA) {
        const fA = W - cA;
        F -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(E)}px`,
        left: `${Math.round(F)}px`,
        transformOrigin: Dl(aA)
      };
    }, [
      o,
      s,
      T,
      R,
      f
    ]), [_, M] = B.useState(g), P = B.useCallback(() => {
      const z = H.current;
      if (!z) return;
      const oA = k(z);
      oA.top !== null && z.style.setProperty("top", oA.top), oA.left !== null && (z.style.left = oA.left), z.style.transformOrigin = oA.transformOrigin, M(true);
    }, [
      k
    ]);
    B.useEffect(() => (C && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [
      o,
      C,
      P
    ]);
    const X = () => {
      P();
    }, J = () => {
      M(false);
    };
    B.useEffect(() => {
      g && P();
    }), B.useImperativeHandle(n, () => g ? {
      updatePosition: () => {
        P();
      }
    } : null, [
      g,
      P
    ]), B.useEffect(() => {
      if (!g) return;
      const z = Eu(() => {
        P();
      }), oA = rt(mn(o));
      return oA.addEventListener("resize", z), () => {
        z.clear(), oA.removeEventListener("resize", z);
      };
    }, [
      o,
      g,
      P
    ]);
    let D = v;
    const j = {
      slots: {
        transition: w,
        ...b
      },
      slotProps: {
        transition: U,
        paper: h,
        ...m
      }
    }, [eA, nA] = le("transition", {
      elementType: ma,
      externalForwardedProps: j,
      ownerState: I,
      getSlotProps: (z) => ({
        ...z,
        onEntering: (oA, aA) => {
          var _a2;
          (_a2 = z.onEntering) == null ? void 0 : _a2.call(z, oA, aA), X();
        },
        onExited: (oA) => {
          var _a2;
          (_a2 = z.onExited) == null ? void 0 : _a2.call(z, oA), J();
        }
      }),
      additionalProps: {
        appear: true,
        in: g
      }
    });
    v === "auto" && !eA.muiSupportAuto && (D = void 0);
    const K = u || (o ? He(mn(o)).body : void 0), [$, { slots: V, slotProps: Y, ...dA }] = le("root", {
      ref: t,
      elementType: yw,
      externalForwardedProps: {
        ...j,
        ...S
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: b.backdrop
        },
        slotProps: {
          backdrop: eh(typeof m.backdrop == "function" ? m.backdrop(I) : m.backdrop, {
            invisible: true
          })
        },
        container: K,
        open: g
      },
      ownerState: I,
      className: pA(p.root, c)
    }), [iA, tA] = le("paper", {
      ref: H,
      className: p.paper,
      elementType: Ad,
      externalForwardedProps: j,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: _ ? void 0 : {
          opacity: 0
        }
      },
      ownerState: I
    });
    return L.jsx($, {
      ...dA,
      ...!ha($) && {
        slots: V,
        slotProps: Y,
        disableScrollLock: C
      },
      children: L.jsx(eA, {
        ...nA,
        timeout: D,
        children: L.jsx(iA, {
          ...tA,
          children: l
        })
      })
    });
  });
  function bw(A) {
    return kA("MuiMenu", A);
  }
  IA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const Fw = {
    vertical: "top",
    horizontal: "right"
  }, Uw = {
    vertical: "top",
    horizontal: "left"
  }, Ew = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, bw, e);
  }, Sw = lA(ed, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), xw = lA(Ad, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Iw = lA(mw, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), Hw = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: f = "auto", TransitionProps: { onEntering: g, ...h } = {}, variant: b = "selectedMenu", slots: m = {}, slotProps: y = {}, ...w } = r, v = qp(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: g,
      PaperProps: u,
      transitionDuration: f,
      TransitionProps: h,
      variant: b
    }, C = Ew(U), S = n && !a && c, H = B.useRef(null), I = (D, j) => {
      H.current && H.current.adjustStyleForScrollbar(D, {
        direction: v ? "rtl" : "ltr"
      }), g && g(D, j);
    }, p = (D) => {
      D.key === "Tab" && (D.preventDefault(), l && l(D, "tabKeyDown"));
    };
    let T = -1;
    B.Children.map(o, (D, j) => {
      B.isValidElement(D) && (D.props.disabled || (b === "selectedMenu" && D.props.selected || T === -1) && (T = j));
    });
    const R = {
      slots: m,
      slotProps: {
        list: s,
        transition: h,
        paper: u,
        ...y
      }
    }, k = Xp({
      elementType: m.root,
      externalSlotProps: y.root,
      ownerState: U,
      className: [
        C.root,
        i
      ]
    }), [_, M] = le("paper", {
      className: C.paper,
      elementType: xw,
      externalForwardedProps: R,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [P, X] = le("list", {
      className: pA(C.list, s.className),
      elementType: Iw,
      shouldForwardComponentProp: true,
      externalForwardedProps: R,
      getSlotProps: (D) => ({
        ...D,
        onKeyDown: (j) => {
          var _a2;
          p(j), (_a2 = D.onKeyDown) == null ? void 0 : _a2.call(D, j);
        }
      }),
      ownerState: U
    }), J = typeof R.slotProps.transition == "function" ? R.slotProps.transition(U) : R.slotProps.transition;
    return L.jsx(Sw, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? Fw : Uw,
      slots: {
        root: m.root,
        paper: _,
        backdrop: m.backdrop,
        ...m.transition && {
          transition: m.transition
        }
      },
      slotProps: {
        root: k,
        paper: M,
        backdrop: typeof y.backdrop == "function" ? y.backdrop(U) : y.backdrop,
        transition: {
          ...J,
          onEntering: (...D) => {
            var _a2;
            I(...D), (_a2 = J == null ? void 0 : J.onEntering) == null ? void 0 : _a2.call(J, ...D);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...w,
      classes: d,
      children: L.jsx(P, {
        actions: H,
        autoFocus: n && (T === -1 || a),
        autoFocusItem: S,
        variant: b,
        ...X,
        children: o
      })
    });
  });
  function Tw(A) {
    return kA("MuiNativeSelect", A);
  }
  const Hs = IA("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error"
  ]), Lw = (A) => {
    const { classes: e, variant: t, disabled: r, multiple: n, open: o, error: i } = A, a = {
      select: [
        "select",
        t,
        r && "disabled",
        n && "multiple",
        i && "error"
      ],
      icon: [
        "icon",
        `icon${hA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ]
    };
    return RA(a, Tw, e);
  }, td = lA("select", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
      borderRadius: 0
    },
    [`&.${Hs.disabled}`]: {
      cursor: "default"
    },
    "&[multiple]": {
      height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (A.vars || A).palette.background.paper
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.variant !== "filled" && e.variant !== "outlined",
        style: {
          "&&&": {
            paddingRight: 24,
            minWidth: 16
          }
        }
      },
      {
        props: {
          variant: "filled"
        },
        style: {
          "&&&": {
            paddingRight: 32
          }
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          borderRadius: (A.vars || A).shape.borderRadius,
          "&:focus": {
            borderRadius: (A.vars || A).shape.borderRadius
          },
          "&&&": {
            paddingRight: 32
          }
        }
      }
    ]
  })), kw = lA(td, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: $e,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${Hs.multiple}`]: e.multiple
        }
      ];
    }
  })({}), rd = lA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Hs.disabled}`]: {
      color: (A.vars || A).palette.action.disabled
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.open,
        style: {
          transform: "rotate(180deg)"
        }
      },
      {
        props: {
          variant: "filled"
        },
        style: {
          right: 7
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          right: 7
        }
      }
    ]
  })), Rw = lA(rd, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${hA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), Kw = B.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = Lw(c);
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx(kw, {
          ownerState: c,
          className: pA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : L.jsx(Rw, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var Ml;
  const Ow = lA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: $e
  })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%"
  }), Dw = lA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: $e
  })(OA(({ theme: A }) => ({
    float: "unset",
    width: "auto",
    overflow: "hidden",
    variants: [
      {
        props: ({ ownerState: e }) => !e.withLabel,
        style: {
          padding: 0,
          lineHeight: "11px",
          transition: A.transitions.create("width", {
            duration: 150,
            easing: A.transitions.easing.easeOut
          })
        }
      },
      {
        props: ({ ownerState: e }) => e.withLabel,
        style: {
          display: "block",
          padding: 0,
          height: 11,
          fontSize: "0.75em",
          visibility: "hidden",
          maxWidth: 0.01,
          transition: A.transitions.create("max-width", {
            duration: 50,
            easing: A.transitions.easing.easeOut
          }),
          whiteSpace: "nowrap",
          "& > span": {
            paddingLeft: 5,
            paddingRight: 5,
            display: "inline-block",
            opacity: 0,
            visibility: "visible"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.withLabel && e.notched,
        style: {
          maxWidth: "100%",
          transition: A.transitions.create("max-width", {
            duration: 100,
            easing: A.transitions.easing.easeOut,
            delay: 50
          })
        }
      }
    ]
  })));
  function Mw(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return L.jsx(Ow, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: L.jsx(Dw, {
        ownerState: s,
        children: a ? L.jsx("span", {
          children: n
        }) : Ml || (Ml = L.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Pw = (A) => {
    const { classes: e } = A, r = RA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, o0, e);
    return {
      ...e,
      ...r
    };
  }, Nw = lA(ai, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: oi
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (A.vars || A).shape.borderRadius,
      [`&:hover .${ke.notchedOutline}`]: {
        borderColor: (A.vars || A).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${ke.notchedOutline}`]: {
          borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${ke.focused} .${ke.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(A.palette).filter(Ct()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            [`&.${ke.focused} .${ke.notchedOutline}`]: {
              borderColor: (A.vars || A).palette[t].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${ke.error} .${ke.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.error.main
            },
            [`&.${ke.disabled} .${ke.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.action.disabled
            }
          }
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: {
            paddingLeft: 14
          }
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: {
            paddingRight: 14
          }
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            padding: "16.5px 14px"
          }
        },
        {
          props: ({ ownerState: t, size: r }) => t.multiline && r === "small",
          style: {
            padding: "8.5px 14px"
          }
        }
      ]
    };
  })), _w = lA(Mw, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), Gw = lA(si, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: ii
  })(OA(({ theme: A }) => ({
    padding: "16.5px 14px",
    ...!A.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: A.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: A.palette.mode === "light" ? null : "#fff",
        caretColor: A.palette.mode === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    ...A.vars && {
      "&:-webkit-autofill": {
        borderRadius: "inherit"
      },
      [A.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "#fff",
          caretColor: "#fff"
        }
      }
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          padding: "8.5px 14px"
        }
      },
      {
        props: ({ ownerState: e }) => e.multiline,
        style: {
          padding: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.endAdornment,
        style: {
          paddingRight: 0
        }
      }
    ]
  }))), Ts = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...f } = r, g = Pw(r), h = fr(), b = dr({
      props: r,
      muiFormControl: h,
      states: [
        "color",
        "disabled",
        "error",
        "focused",
        "hiddenLabel",
        "size",
        "required"
      ]
    }), m = {
      ...r,
      color: b.color || "primary",
      disabled: b.disabled,
      error: b.error,
      focused: b.focused,
      formControl: h,
      fullWidth: o,
      hiddenLabel: b.hiddenLabel,
      multiline: s,
      size: b.size,
      type: d
    }, y = c.root ?? n.Root ?? Nw, w = c.input ?? n.Input ?? Gw, [v, U] = le("notchedOutline", {
      elementType: _w,
      className: g.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: m,
      externalForwardedProps: {
        slots: c,
        slotProps: u
      },
      additionalProps: {
        label: a != null && a !== "" && b.required ? L.jsxs(B.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return L.jsx(Ss, {
      slots: {
        root: y,
        input: w
      },
      slotProps: u,
      renderSuffix: (C) => L.jsx(v, {
        ...U,
        notched: typeof l < "u" ? l : !!(C.startAdornment || C.filled || C.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: s,
      ref: t,
      type: d,
      ...f,
      classes: {
        ...g,
        notchedOutline: null
      }
    });
  });
  Ts.muiName = "Input";
  function nd(A) {
    return kA("MuiSelect", A);
  }
  const mr = IA("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error"
  ]);
  var Pl;
  const Vw = lA(td, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${mr.select}`]: e.select
        },
        {
          [`&.${mr.select}`]: e[t.variant]
        },
        {
          [`&.${mr.error}`]: e.error
        },
        {
          [`&.${mr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${mr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), $w = lA(rd, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${hA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), Ww = lA("input", {
    shouldForwardProp: (A) => Wu(A) && A !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (A, e) => e.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
  });
  function Nl(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function Xw(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let jw, zw, Jw, Ls, Yw, Zw, qw;
  jw = (A) => {
    const { classes: e, variant: t, disabled: r, multiple: n, open: o, error: i } = A, a = {
      select: [
        "select",
        t,
        r && "disabled",
        n && "multiple",
        i && "error"
      ],
      icon: [
        "icon",
        `icon${hA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return RA(a, nd, e);
  };
  zw = B.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: f = false, IconComponent: g, inputRef: h, labelId: b, MenuProps: m = {}, multiple: y, name: w, onBlur: v, onChange: U, onClose: C, onFocus: S, onOpen: H, open: I, readOnly: p, renderValue: T, required: R, SelectDisplayProps: k = {}, tabIndex: _, type: M, value: P, variant: X = "standard", ...J } = e, [D, j] = sl({
      controlled: P,
      default: c,
      name: "Select"
    }), [eA, nA] = sl({
      controlled: I,
      default: l,
      name: "Select"
    }), K = B.useRef(null), $ = B.useRef(null), [V, Y] = B.useState(null), { current: dA } = B.useRef(I != null), [iA, tA] = B.useState(), z = pe(t, h), oA = B.useCallback((uA) => {
      $.current = uA, uA && Y(uA);
    }, []), aA = V == null ? void 0 : V.parentNode;
    B.useImperativeHandle(z, () => ({
      focus: () => {
        $.current.focus();
      },
      node: K.current,
      value: D
    }), [
      D
    ]), B.useEffect(() => {
      l && eA && V && !dA && (tA(i ? null : aA.clientWidth), $.current.focus());
    }, [
      V,
      i
    ]), B.useEffect(() => {
      o && $.current.focus();
    }, [
      o
    ]), B.useEffect(() => {
      if (!b) return;
      const uA = He($.current).getElementById(b);
      if (uA) {
        const SA = () => {
          getSelection().isCollapsed && $.current.focus();
        };
        return uA.addEventListener("click", SA), () => {
          uA.removeEventListener("click", SA);
        };
      }
    }, [
      b
    ]);
    const Q = (uA, SA) => {
      uA ? H && H(SA) : C && C(SA), dA || (tA(i ? null : aA.clientWidth), nA(uA));
    }, E = (uA) => {
      uA.button === 0 && (uA.preventDefault(), $.current.focus(), Q(true, uA));
    }, F = (uA) => {
      Q(false, uA);
    }, N = B.Children.toArray(a), W = (uA) => {
      const SA = N.find((Ae) => Ae.props.value === uA.target.value);
      SA !== void 0 && (j(SA.props.value), U && U(uA, SA));
    }, G = (uA) => (SA) => {
      let Ae;
      if (SA.currentTarget.hasAttribute("tabindex")) {
        if (y) {
          Ae = Array.isArray(D) ? D.slice() : [];
          const Ot = D.indexOf(uA.props.value);
          Ot === -1 ? Ae.push(uA.props.value) : Ae.splice(Ot, 1);
        } else Ae = uA.props.value;
        if (uA.props.onClick && uA.props.onClick(SA), D !== Ae && (j(Ae), U)) {
          const Ot = SA.nativeEvent || SA, _s = new Ot.constructor(Ot.type, Ot);
          Object.defineProperty(_s, "target", {
            writable: true,
            value: {
              value: Ae,
              name: w
            }
          }), U(_s, uA);
        }
        y || Q(false, SA);
      }
    }, sA = (uA) => {
      p || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(uA.key) && (uA.preventDefault(), Q(true, uA));
    }, cA = V !== null && eA, fA = (uA) => {
      !cA && v && (Object.defineProperty(uA, "target", {
        writable: true,
        value: {
          value: D,
          name: w
        }
      }), v(uA));
    };
    delete J["aria-invalid"];
    let AA, qA;
    const gA = [];
    let PA = false;
    (so({
      value: D
    }) || d) && (T ? AA = T(D) : PA = true);
    const WA = N.map((uA) => {
      if (!B.isValidElement(uA)) return null;
      let SA;
      if (y) {
        if (!Array.isArray(D)) throw new Error(At(2));
        SA = D.some((Ae) => Nl(Ae, uA.props.value)), SA && PA && gA.push(uA.props.children);
      } else SA = Nl(D, uA.props.value), SA && PA && (qA = uA.props.children);
      return B.cloneElement(uA, {
        "aria-selected": SA ? "true" : "false",
        onClick: G(uA),
        onKeyUp: (Ae) => {
          Ae.key === " " && Ae.preventDefault(), uA.props.onKeyUp && uA.props.onKeyUp(Ae);
        },
        role: "option",
        selected: SA,
        value: void 0,
        "data-value": uA.props.value
      });
    });
    PA && (y ? gA.length === 0 ? AA = null : AA = gA.reduce((uA, SA, Ae) => (uA.push(SA), Ae < gA.length - 1 && uA.push(", "), uA), []) : AA = qA);
    let oe = iA;
    !i && dA && V && (oe = aA.clientWidth);
    let jA;
    typeof _ < "u" ? jA = _ : jA = u ? null : 0;
    const ot = k.id || (w ? `mui-component-select-${w}` : void 0), vt = {
      ...e,
      variant: X,
      value: D,
      open: cA,
      error: f
    }, HA = jw(vt), Kt = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, pr = ri();
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx(Vw, {
          as: "div",
          ref: oA,
          tabIndex: jA,
          role: "combobox",
          "aria-controls": cA ? pr : void 0,
          "aria-disabled": u ? "true" : void 0,
          "aria-expanded": cA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            b,
            ot
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": R ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: u || p ? null : E,
          onBlur: fA,
          onFocus: S,
          ...k,
          ownerState: vt,
          className: pA(k.className, HA.select, s),
          id: ot,
          children: Xw(AA) ? Pl || (Pl = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : AA
        }),
        L.jsx(Ww, {
          "aria-invalid": f,
          value: Array.isArray(D) ? D.join(",") : D,
          name: w,
          ref: K,
          "aria-hidden": true,
          onChange: W,
          tabIndex: -1,
          disabled: u,
          className: HA.nativeInput,
          autoFocus: o,
          required: R,
          ...J,
          ownerState: vt
        }),
        L.jsx($w, {
          as: g,
          className: HA.icon,
          ownerState: vt
        }),
        L.jsx(Hw, {
          id: `menu-${w || ""}`,
          anchorEl: aA,
          open: cA,
          onClose: F,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...m,
          slotProps: {
            ...m.slotProps,
            list: {
              "aria-labelledby": b,
              role: "listbox",
              "aria-multiselectable": y ? "true" : void 0,
              disableListWrap: true,
              id: pr,
              ...m.MenuListProps
            },
            paper: {
              ...Kt,
              style: {
                minWidth: oe,
                ...Kt != null ? Kt.style : null
              }
            }
          },
          children: WA
        })
      ]
    });
  });
  Jw = (A) => {
    const { classes: e } = A, r = RA({
      root: [
        "root"
      ]
    }, nd, e);
    return {
      ...e,
      ...r
    };
  };
  Ls = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => $e(A) && A !== "variant",
    slot: "Root"
  };
  Yw = lA(Is, Ls)("");
  Zw = lA(Ts, Ls)("");
  qw = lA(xs, Ls)("");
  od = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = a0, id: u, input: d, inputProps: f, label: g, labelId: h, MenuProps: b, multiple: m = false, native: y = false, onClose: w, onOpen: v, open: U, renderValue: C, SelectDisplayProps: S, variant: H = "outlined", ...I } = r, p = y ? Kw : zw, T = fr(), R = dr({
      props: r,
      muiFormControl: T,
      states: [
        "variant",
        "error"
      ]
    }), k = R.variant || H, _ = {
      ...r,
      variant: k,
      classes: i
    }, M = Jw(_), { root: P, ...X } = M, J = d || {
      standard: L.jsx(Yw, {
        ownerState: _
      }),
      outlined: L.jsx(Zw, {
        label: g,
        ownerState: _
      }),
      filled: L.jsx(qw, {
        ownerState: _
      })
    }[k], D = pe(t, an(J));
    return L.jsx(B.Fragment, {
      children: B.cloneElement(J, {
        inputComponent: p,
        inputProps: {
          children: o,
          error: R.error,
          IconComponent: c,
          variant: k,
          type: void 0,
          multiple: m,
          ...y ? {
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: h,
            MenuProps: b,
            onClose: w,
            onOpen: v,
            open: U,
            renderValue: C,
            SelectDisplayProps: {
              id: u,
              ...S
            }
          },
          ...f,
          classes: f ? YA(X, f.classes) : X,
          ...d ? d.props.inputProps : {}
        },
        ...(m && y || l) && k === "outlined" ? {
          notched: true
        } : {},
        ref: D,
        className: pA(J.props.className, a, M.root),
        ...!d && {
          variant: k
        },
        ...I
      })
    });
  });
  od.muiName = "Select";
  function AC(A) {
    return kA("MuiTextField", A);
  }
  IA("MuiTextField", [
    "root"
  ]);
  const eC = {
    standard: Is,
    filled: xs,
    outlined: Ts
  }, tC = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ]
    }, AC, e);
  }, rC = lA(Y0, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), nC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: f = false, helperText: g, id: h, InputLabelProps: b, inputProps: m, InputProps: y, inputRef: w, label: v, maxRows: U, minRows: C, multiline: S = false, name: H, onBlur: I, onChange: p, onFocus: T, placeholder: R, required: k = false, rows: _, select: M = false, SelectProps: P, slots: X = {}, slotProps: J = {}, type: D, value: j, variant: eA = "outlined", ...nA } = r, K = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: f,
      multiline: S,
      required: k,
      select: M,
      variant: eA
    }, $ = tC(K), V = ri(h), Y = g && V ? `${V}-helper-text` : void 0, dA = v && V ? `${V}-label` : void 0, iA = eC[eA], tA = {
      slots: X,
      slotProps: {
        input: y,
        inputLabel: b,
        htmlInput: m,
        formHelperText: d,
        select: P,
        ...J
      }
    }, z = {}, oA = tA.slotProps.inputLabel;
    eA === "outlined" && (oA && typeof oA.shrink < "u" && (z.notched = oA.shrink), z.label = v), M && ((!P || !P.native) && (z.id = void 0), z["aria-describedby"] = void 0);
    const [aA, Q] = le("root", {
      elementType: rC,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...tA,
        ...nA
      },
      ownerState: K,
      className: pA($.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: u,
        fullWidth: f,
        required: k,
        color: s,
        variant: eA
      }
    }), [E, F] = le("input", {
      elementType: iA,
      externalForwardedProps: tA,
      additionalProps: z,
      ownerState: K
    }), [N, W] = le("inputLabel", {
      elementType: gw,
      externalForwardedProps: tA,
      ownerState: K
    }), [G, sA] = le("htmlInput", {
      elementType: "input",
      externalForwardedProps: tA,
      ownerState: K
    }), [cA, fA] = le("formHelperText", {
      elementType: ew,
      externalForwardedProps: tA,
      ownerState: K
    }), [AA, qA] = le("select", {
      elementType: od,
      externalForwardedProps: tA,
      ownerState: K
    }), gA = L.jsx(E, {
      "aria-describedby": Y,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: f,
      multiline: S,
      name: H,
      rows: _,
      maxRows: U,
      minRows: C,
      type: D,
      value: j,
      id: V,
      inputRef: w,
      onBlur: I,
      onChange: p,
      onFocus: T,
      placeholder: R,
      inputProps: sA,
      slots: {
        input: X.htmlInput ? G : void 0
      },
      ...F
    });
    return L.jsxs(aA, {
      ...Q,
      children: [
        v != null && v !== "" && L.jsx(N, {
          htmlFor: V,
          id: dA,
          ...W,
          children: v
        }),
        M ? L.jsx(AA, {
          "aria-describedby": Y,
          id: V,
          labelId: dA,
          value: j,
          input: gA,
          ...qA,
          children: i
        }) : gA,
        g && L.jsx(cA, {
          id: Y,
          ...fA,
          children: g
        })
      ]
    });
  });
  va = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    wrapContent(e) {
      return L.jsx(L.Fragment, {
        children: L.jsx(Ie, {
          className: "GENERIC-0",
          sx: {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: L.jsx(Ie, {
            className: "GENERIC-1",
            sx: {
              width: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%",
              height: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%"
            },
            children: e
          })
        })
      });
    }
  };
  let oC, ks;
  oC = [
    "background",
    "background-color",
    "background-image",
    "background-position",
    "background-repeat",
    "background-size",
    "background-clip",
    "background-origin",
    "border",
    "border-width",
    "border-style",
    "border-color",
    "border-radius",
    "color",
    "text-align",
    "text-shadow",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "font-variant",
    "line-height",
    "letter-spacing",
    "word-spacing",
    "box-sizing",
    "box-shadow"
  ];
  ks = (A) => {
    const [e, t] = B.useState({}), [r, n] = B.useState({}), [o, i] = B.useState({}), [a, s] = B.useState({}), [l, c] = B.useState({}), u = JSON.stringify(A), d = B.useMemo(() => {
      const f = {}, g = {}, h = {}, b = {}, m = {}, y = JSON.parse(u);
      return oC.forEach((w) => {
        if (y[w]) {
          const v = w.replace(/(-\w)/g, (U) => U[1].toUpperCase());
          w.includes("background") ? f[v] = y[w] : w.includes("border") ? g[v] = y[w] : w.includes("font") || w.includes("line-height") || w.includes("letter-spacing") || w.includes("word-spacing") ? b[v] = y[w] : w.includes("text") || w.includes("color") ? h[v] = y[w] : m[v] = y[w];
        }
      }), {
        _backgroundStyles: f,
        _borderStyles: g,
        _textStyles: h,
        _fontStyles: b,
        _boxStyles: m
      };
    }, [
      u
    ]);
    return B.useEffect(() => {
      t(d._backgroundStyles), n(d._borderStyles), i(d._textStyles), s(d._fontStyles), c(d._boxStyles);
    }, [
      d
    ]), {
      boxStyles: l,
      backgroundStyles: e,
      borderStyles: r,
      textStyles: o,
      fontStyles: a
    };
  };
  sn = B.createContext({});
  function iC({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = ks(r.style || {}), i = B.useMemo(() => ni(YA(t, {
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...n,
              ...o,
              color: o.color || t.palette.primary.main
            }
          }
        }
      }
    })), [
      t,
      n,
      o
    ]);
    return L.jsxs(Xu, {
      theme: i,
      children: [
        L.jsx(m0, {}),
        L.jsx(sn.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  wU = function(A, e) {
    return L.jsx(iC, {
      context: e,
      children: A
    });
  };
  let aC;
  Re = ({ dividerText: A = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return L.jsx(Ie, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: A ? 2 : 1.5
      },
      children: A ? L.jsx(lo, {
        sx: e,
        children: L.jsx(Jn, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: va.t(A)
        })
      }) : L.jsx(lo, {
        sx: e
      })
    });
  };
  aC = ju(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var id = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(Q, E) {
        if (Q = Q || "", E = E || {}, Q instanceof l) return Q;
        if (!(this instanceof l)) return new l(Q, E);
        var F = c(Q);
        this._originalInput = Q, this._r = F.r, this._g = F.g, this._b = F.b, this._a = F.a, this._roundA = o(100 * this._a) / 100, this._format = E.format || F.format, this._gradientType = E.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = F.ok, this._tc_id = n++;
      }
      l.prototype = {
        isDark: function() {
          return this.getBrightness() < 128;
        },
        isLight: function() {
          return !this.isDark();
        },
        isValid: function() {
          return this._ok;
        },
        getOriginalInput: function() {
          return this._originalInput;
        },
        getFormat: function() {
          return this._format;
        },
        getAlpha: function() {
          return this._a;
        },
        getBrightness: function() {
          var Q = this.toRgb();
          return (Q.r * 299 + Q.g * 587 + Q.b * 114) / 1e3;
        },
        getLuminance: function() {
          var Q = this.toRgb(), E, F, N, W, G, sA;
          return E = Q.r / 255, F = Q.g / 255, N = Q.b / 255, E <= 0.03928 ? W = E / 12.92 : W = e.pow((E + 0.055) / 1.055, 2.4), F <= 0.03928 ? G = F / 12.92 : G = e.pow((F + 0.055) / 1.055, 2.4), N <= 0.03928 ? sA = N / 12.92 : sA = e.pow((N + 0.055) / 1.055, 2.4), 0.2126 * W + 0.7152 * G + 0.0722 * sA;
        },
        setAlpha: function(Q) {
          return this._a = D(Q), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var Q = g(this._r, this._g, this._b);
          return {
            h: Q.h * 360,
            s: Q.s,
            v: Q.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var Q = g(this._r, this._g, this._b), E = o(Q.h * 360), F = o(Q.s * 100), N = o(Q.v * 100);
          return this._a == 1 ? "hsv(" + E + ", " + F + "%, " + N + "%)" : "hsva(" + E + ", " + F + "%, " + N + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var Q = d(this._r, this._g, this._b);
          return {
            h: Q.h * 360,
            s: Q.s,
            l: Q.l,
            a: this._a
          };
        },
        toHslString: function() {
          var Q = d(this._r, this._g, this._b), E = o(Q.h * 360), F = o(Q.s * 100), N = o(Q.l * 100);
          return this._a == 1 ? "hsl(" + E + ", " + F + "%, " + N + "%)" : "hsla(" + E + ", " + F + "%, " + N + "%, " + this._roundA + ")";
        },
        toHex: function(Q) {
          return b(this._r, this._g, this._b, Q);
        },
        toHexString: function(Q) {
          return "#" + this.toHex(Q);
        },
        toHex8: function(Q) {
          return m(this._r, this._g, this._b, this._a, Q);
        },
        toHex8String: function(Q) {
          return "#" + this.toHex8(Q);
        },
        toRgb: function() {
          return {
            r: o(this._r),
            g: o(this._g),
            b: o(this._b),
            a: this._a
          };
        },
        toRgbString: function() {
          return this._a == 1 ? "rgb(" + o(this._r) + ", " + o(this._g) + ", " + o(this._b) + ")" : "rgba(" + o(this._r) + ", " + o(this._g) + ", " + o(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
          return {
            r: o(j(this._r, 255) * 100) + "%",
            g: o(j(this._g, 255) * 100) + "%",
            b: o(j(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(j(this._r, 255) * 100) + "%, " + o(j(this._g, 255) * 100) + "%, " + o(j(this._b, 255) * 100) + "%)" : "rgba(" + o(j(this._r, 255) * 100) + "%, " + o(j(this._g, 255) * 100) + "%, " + o(j(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : X[b(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(Q) {
          var E = "#" + y(this._r, this._g, this._b, this._a), F = E, N = this._gradientType ? "GradientType = 1, " : "";
          if (Q) {
            var W = l(Q);
            F = "#" + y(W._r, W._g, W._b, W._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + N + "startColorstr=" + E + ",endColorstr=" + F + ")";
        },
        toString: function(Q) {
          var E = !!Q;
          Q = Q || this._format;
          var F = false, N = this._a < 1 && this._a >= 0, W = !E && N && (Q === "hex" || Q === "hex6" || Q === "hex3" || Q === "hex4" || Q === "hex8" || Q === "name");
          return W ? Q === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (Q === "rgb" && (F = this.toRgbString()), Q === "prgb" && (F = this.toPercentageRgbString()), (Q === "hex" || Q === "hex6") && (F = this.toHexString()), Q === "hex3" && (F = this.toHexString(true)), Q === "hex4" && (F = this.toHex8String(true)), Q === "hex8" && (F = this.toHex8String()), Q === "name" && (F = this.toName()), Q === "hsl" && (F = this.toHslString()), Q === "hsv" && (F = this.toHsvString()), F || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(Q, E) {
          var F = Q.apply(null, [
            this
          ].concat([].slice.call(E)));
          return this._r = F._r, this._g = F._g, this._b = F._b, this.setAlpha(F._a), this;
        },
        lighten: function() {
          return this._applyModification(C, arguments);
        },
        brighten: function() {
          return this._applyModification(S, arguments);
        },
        darken: function() {
          return this._applyModification(H, arguments);
        },
        desaturate: function() {
          return this._applyModification(w, arguments);
        },
        saturate: function() {
          return this._applyModification(v, arguments);
        },
        greyscale: function() {
          return this._applyModification(U, arguments);
        },
        spin: function() {
          return this._applyModification(I, arguments);
        },
        _applyCombination: function(Q, E) {
          return Q.apply(null, [
            this
          ].concat([].slice.call(E)));
        },
        analogous: function() {
          return this._applyCombination(_, arguments);
        },
        complement: function() {
          return this._applyCombination(p, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(M, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(k, arguments);
        },
        triad: function() {
          return this._applyCombination(T, arguments);
        },
        tetrad: function() {
          return this._applyCombination(R, arguments);
        }
      }, l.fromRatio = function(Q, E) {
        if (typeof Q == "object") {
          var F = {};
          for (var N in Q) Q.hasOwnProperty(N) && (N === "a" ? F[N] = Q[N] : F[N] = Y(Q[N]));
          Q = F;
        }
        return l(Q, E);
      };
      function c(Q) {
        var E = {
          r: 0,
          g: 0,
          b: 0
        }, F = 1, N = null, W = null, G = null, sA = false, cA = false;
        return typeof Q == "string" && (Q = oA(Q)), typeof Q == "object" && (z(Q.r) && z(Q.g) && z(Q.b) ? (E = u(Q.r, Q.g, Q.b), sA = true, cA = String(Q.r).substr(-1) === "%" ? "prgb" : "rgb") : z(Q.h) && z(Q.s) && z(Q.v) ? (N = Y(Q.s), W = Y(Q.v), E = h(Q.h, N, W), sA = true, cA = "hsv") : z(Q.h) && z(Q.s) && z(Q.l) && (N = Y(Q.s), G = Y(Q.l), E = f(Q.h, N, G), sA = true, cA = "hsl"), Q.hasOwnProperty("a") && (F = Q.a)), F = D(F), {
          ok: sA,
          format: Q.format || cA,
          r: i(255, a(E.r, 0)),
          g: i(255, a(E.g, 0)),
          b: i(255, a(E.b, 0)),
          a: F
        };
      }
      function u(Q, E, F) {
        return {
          r: j(Q, 255) * 255,
          g: j(E, 255) * 255,
          b: j(F, 255) * 255
        };
      }
      function d(Q, E, F) {
        Q = j(Q, 255), E = j(E, 255), F = j(F, 255);
        var N = a(Q, E, F), W = i(Q, E, F), G, sA, cA = (N + W) / 2;
        if (N == W) G = sA = 0;
        else {
          var fA = N - W;
          switch (sA = cA > 0.5 ? fA / (2 - N - W) : fA / (N + W), N) {
            case Q:
              G = (E - F) / fA + (E < F ? 6 : 0);
              break;
            case E:
              G = (F - Q) / fA + 2;
              break;
            case F:
              G = (Q - E) / fA + 4;
              break;
          }
          G /= 6;
        }
        return {
          h: G,
          s: sA,
          l: cA
        };
      }
      function f(Q, E, F) {
        var N, W, G;
        Q = j(Q, 360), E = j(E, 100), F = j(F, 100);
        function sA(AA, qA, gA) {
          return gA < 0 && (gA += 1), gA > 1 && (gA -= 1), gA < 1 / 6 ? AA + (qA - AA) * 6 * gA : gA < 1 / 2 ? qA : gA < 2 / 3 ? AA + (qA - AA) * (2 / 3 - gA) * 6 : AA;
        }
        if (E === 0) N = W = G = F;
        else {
          var cA = F < 0.5 ? F * (1 + E) : F + E - F * E, fA = 2 * F - cA;
          N = sA(fA, cA, Q + 1 / 3), W = sA(fA, cA, Q), G = sA(fA, cA, Q - 1 / 3);
        }
        return {
          r: N * 255,
          g: W * 255,
          b: G * 255
        };
      }
      function g(Q, E, F) {
        Q = j(Q, 255), E = j(E, 255), F = j(F, 255);
        var N = a(Q, E, F), W = i(Q, E, F), G, sA, cA = N, fA = N - W;
        if (sA = N === 0 ? 0 : fA / N, N == W) G = 0;
        else {
          switch (N) {
            case Q:
              G = (E - F) / fA + (E < F ? 6 : 0);
              break;
            case E:
              G = (F - Q) / fA + 2;
              break;
            case F:
              G = (Q - E) / fA + 4;
              break;
          }
          G /= 6;
        }
        return {
          h: G,
          s: sA,
          v: cA
        };
      }
      function h(Q, E, F) {
        Q = j(Q, 360) * 6, E = j(E, 100), F = j(F, 100);
        var N = e.floor(Q), W = Q - N, G = F * (1 - E), sA = F * (1 - W * E), cA = F * (1 - (1 - W) * E), fA = N % 6, AA = [
          F,
          sA,
          G,
          G,
          cA,
          F
        ][fA], qA = [
          cA,
          F,
          F,
          sA,
          G,
          G
        ][fA], gA = [
          G,
          G,
          cA,
          F,
          F,
          sA
        ][fA];
        return {
          r: AA * 255,
          g: qA * 255,
          b: gA * 255
        };
      }
      function b(Q, E, F, N) {
        var W = [
          V(o(Q).toString(16)),
          V(o(E).toString(16)),
          V(o(F).toString(16))
        ];
        return N && W[0].charAt(0) == W[0].charAt(1) && W[1].charAt(0) == W[1].charAt(1) && W[2].charAt(0) == W[2].charAt(1) ? W[0].charAt(0) + W[1].charAt(0) + W[2].charAt(0) : W.join("");
      }
      function m(Q, E, F, N, W) {
        var G = [
          V(o(Q).toString(16)),
          V(o(E).toString(16)),
          V(o(F).toString(16)),
          V(dA(N))
        ];
        return W && G[0].charAt(0) == G[0].charAt(1) && G[1].charAt(0) == G[1].charAt(1) && G[2].charAt(0) == G[2].charAt(1) && G[3].charAt(0) == G[3].charAt(1) ? G[0].charAt(0) + G[1].charAt(0) + G[2].charAt(0) + G[3].charAt(0) : G.join("");
      }
      function y(Q, E, F, N) {
        var W = [
          V(dA(N)),
          V(o(Q).toString(16)),
          V(o(E).toString(16)),
          V(o(F).toString(16))
        ];
        return W.join("");
      }
      l.equals = function(Q, E) {
        return !Q || !E ? false : l(Q).toRgbString() == l(E).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function w(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(Q).toHsl();
        return F.s -= E / 100, F.s = eA(F.s), l(F);
      }
      function v(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(Q).toHsl();
        return F.s += E / 100, F.s = eA(F.s), l(F);
      }
      function U(Q) {
        return l(Q).desaturate(100);
      }
      function C(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(Q).toHsl();
        return F.l += E / 100, F.l = eA(F.l), l(F);
      }
      function S(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(Q).toRgb();
        return F.r = a(0, i(255, F.r - o(255 * -(E / 100)))), F.g = a(0, i(255, F.g - o(255 * -(E / 100)))), F.b = a(0, i(255, F.b - o(255 * -(E / 100)))), l(F);
      }
      function H(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(Q).toHsl();
        return F.l -= E / 100, F.l = eA(F.l), l(F);
      }
      function I(Q, E) {
        var F = l(Q).toHsl(), N = (F.h + E) % 360;
        return F.h = N < 0 ? 360 + N : N, l(F);
      }
      function p(Q) {
        var E = l(Q).toHsl();
        return E.h = (E.h + 180) % 360, l(E);
      }
      function T(Q) {
        var E = l(Q).toHsl(), F = E.h;
        return [
          l(Q),
          l({
            h: (F + 120) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (F + 240) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function R(Q) {
        var E = l(Q).toHsl(), F = E.h;
        return [
          l(Q),
          l({
            h: (F + 90) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (F + 180) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (F + 270) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function k(Q) {
        var E = l(Q).toHsl(), F = E.h;
        return [
          l(Q),
          l({
            h: (F + 72) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (F + 216) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function _(Q, E, F) {
        E = E || 6, F = F || 30;
        var N = l(Q).toHsl(), W = 360 / F, G = [
          l(Q)
        ];
        for (N.h = (N.h - (W * E >> 1) + 720) % 360; --E; ) N.h = (N.h + W) % 360, G.push(l(N));
        return G;
      }
      function M(Q, E) {
        E = E || 6;
        for (var F = l(Q).toHsv(), N = F.h, W = F.s, G = F.v, sA = [], cA = 1 / E; E--; ) sA.push(l({
          h: N,
          s: W,
          v: G
        })), G = (G + cA) % 1;
        return sA;
      }
      l.mix = function(Q, E, F) {
        F = F === 0 ? 0 : F || 50;
        var N = l(Q).toRgb(), W = l(E).toRgb(), G = F / 100, sA = {
          r: (W.r - N.r) * G + N.r,
          g: (W.g - N.g) * G + N.g,
          b: (W.b - N.b) * G + N.b,
          a: (W.a - N.a) * G + N.a
        };
        return l(sA);
      }, l.readability = function(Q, E) {
        var F = l(Q), N = l(E);
        return (e.max(F.getLuminance(), N.getLuminance()) + 0.05) / (e.min(F.getLuminance(), N.getLuminance()) + 0.05);
      }, l.isReadable = function(Q, E, F) {
        var N = l.readability(Q, E), W, G;
        switch (G = false, W = aA(F), W.level + W.size) {
          case "AAsmall":
          case "AAAlarge":
            G = N >= 4.5;
            break;
          case "AAlarge":
            G = N >= 3;
            break;
          case "AAAsmall":
            G = N >= 7;
            break;
        }
        return G;
      }, l.mostReadable = function(Q, E, F) {
        var N = null, W = 0, G, sA, cA, fA;
        F = F || {}, sA = F.includeFallbackColors, cA = F.level, fA = F.size;
        for (var AA = 0; AA < E.length; AA++) G = l.readability(Q, E[AA]), G > W && (W = G, N = l(E[AA]));
        return l.isReadable(Q, N, {
          level: cA,
          size: fA
        }) || !sA ? N : (F.includeFallbackColors = false, l.mostReadable(Q, [
          "#fff",
          "#000"
        ], F));
      };
      var P = l.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      }, X = l.hexNames = J(P);
      function J(Q) {
        var E = {};
        for (var F in Q) Q.hasOwnProperty(F) && (E[Q[F]] = F);
        return E;
      }
      function D(Q) {
        return Q = parseFloat(Q), (isNaN(Q) || Q < 0 || Q > 1) && (Q = 1), Q;
      }
      function j(Q, E) {
        K(Q) && (Q = "100%");
        var F = $(Q);
        return Q = i(E, a(0, parseFloat(Q))), F && (Q = parseInt(Q * E, 10) / 100), e.abs(Q - E) < 1e-6 ? 1 : Q % E / parseFloat(E);
      }
      function eA(Q) {
        return i(1, a(0, Q));
      }
      function nA(Q) {
        return parseInt(Q, 16);
      }
      function K(Q) {
        return typeof Q == "string" && Q.indexOf(".") != -1 && parseFloat(Q) === 1;
      }
      function $(Q) {
        return typeof Q == "string" && Q.indexOf("%") != -1;
      }
      function V(Q) {
        return Q.length == 1 ? "0" + Q : "" + Q;
      }
      function Y(Q) {
        return Q <= 1 && (Q = Q * 100 + "%"), Q;
      }
      function dA(Q) {
        return e.round(parseFloat(Q) * 255).toString(16);
      }
      function iA(Q) {
        return nA(Q) / 255;
      }
      var tA = (function() {
        var Q = "[-\\+]?\\d+%?", E = "[-\\+]?\\d*\\.\\d+%?", F = "(?:" + E + ")|(?:" + Q + ")", N = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", W = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(F),
          rgb: new RegExp("rgb" + N),
          rgba: new RegExp("rgba" + W),
          hsl: new RegExp("hsl" + N),
          hsla: new RegExp("hsla" + W),
          hsv: new RegExp("hsv" + N),
          hsva: new RegExp("hsva" + W),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function z(Q) {
        return !!tA.CSS_UNIT.exec(Q);
      }
      function oA(Q) {
        Q = Q.replace(t, "").replace(r, "").toLowerCase();
        var E = false;
        if (P[Q]) Q = P[Q], E = true;
        else if (Q == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var F;
        return (F = tA.rgb.exec(Q)) ? {
          r: F[1],
          g: F[2],
          b: F[3]
        } : (F = tA.rgba.exec(Q)) ? {
          r: F[1],
          g: F[2],
          b: F[3],
          a: F[4]
        } : (F = tA.hsl.exec(Q)) ? {
          h: F[1],
          s: F[2],
          l: F[3]
        } : (F = tA.hsla.exec(Q)) ? {
          h: F[1],
          s: F[2],
          l: F[3],
          a: F[4]
        } : (F = tA.hsv.exec(Q)) ? {
          h: F[1],
          s: F[2],
          v: F[3]
        } : (F = tA.hsva.exec(Q)) ? {
          h: F[1],
          s: F[2],
          v: F[3],
          a: F[4]
        } : (F = tA.hex8.exec(Q)) ? {
          r: nA(F[1]),
          g: nA(F[2]),
          b: nA(F[3]),
          a: iA(F[4]),
          format: E ? "name" : "hex8"
        } : (F = tA.hex6.exec(Q)) ? {
          r: nA(F[1]),
          g: nA(F[2]),
          b: nA(F[3]),
          format: E ? "name" : "hex"
        } : (F = tA.hex4.exec(Q)) ? {
          r: nA(F[1] + "" + F[1]),
          g: nA(F[2] + "" + F[2]),
          b: nA(F[3] + "" + F[3]),
          a: iA(F[4] + "" + F[4]),
          format: E ? "name" : "hex8"
        } : (F = tA.hex3.exec(Q)) ? {
          r: nA(F[1] + "" + F[1]),
          g: nA(F[2] + "" + F[2]),
          b: nA(F[3] + "" + F[3]),
          format: E ? "name" : "hex"
        } : false;
      }
      function aA(Q) {
        var E, F;
        return Q = Q || {
          level: "AA",
          size: "small"
        }, E = (Q.level || "AA").toUpperCase(), F = (Q.size || "small").toLowerCase(), E !== "AA" && E !== "AAA" && (E = "AA"), F !== "small" && F !== "large" && (F = "small"), {
          level: E,
          size: F
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(id);
  var sC = id.exports;
  const re = Wa(sC);
  var Ar = function() {
    return Ar = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ar.apply(this, arguments);
  }, lC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, cC = function(A) {
    A === void 0 && (A = "");
    var e = {
      linearGradient: /^(-(webkit|o|ms|moz)-)?(linear-gradient)/i,
      repeatingLinearGradient: /^(-(webkit|o|ms|moz)-)?(repeating-linear-gradient)/i,
      radialGradient: /^(-(webkit|o|ms|moz)-)?(radial-gradient)/i,
      repeatingRadialGradient: /^(-(webkit|o|ms|moz)-)?(repeating-radial-gradient)/i,
      sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
      extentKeywords: /^(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)/,
      positionKeywords: /^(left|center|right|top|bottom)/i,
      pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
      percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))%/,
      emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
      angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
      startCall: /^\(/,
      endCall: /^\)/,
      comma: /^,/,
      hexColor: /^#([0-9a-fA-F]+)/,
      literalColor: /^([a-zA-Z]+)/,
      rgbColor: /^rgb/i,
      spacedRgbColor: /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+([0-1](\.\d+)?)/,
      rgbaColor: /^rgba/i,
      hslColor: /^hsl/i,
      hsvColor: /^hsv/i,
      number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
    };
    function t(K) {
      var $ = new Error(A + ": " + K);
      throw $;
    }
    function r(K) {
      A = A.substr(K);
    }
    function n(K) {
      var $ = /^[\n\r\t\s]+/.exec(A);
      $ && r($[0].length);
      var V = K.exec(A);
      return V && r(V[0].length), V;
    }
    function o(K) {
      var $ = K(), V = [];
      if ($) for (V.push($); n(e.comma); ) $ = K(), $ ? V.push($) : t("One extra comma");
      return V;
    }
    function i(K, $, V) {
      var Y = n($);
      if (Y) return {
        type: K,
        value: Y[V]
      };
    }
    function a() {
      var K = i("hex", e.hexColor, 1);
      if (K == null ? void 0 : K.value) {
        var $ = re(K == null ? void 0 : K.value).toRgb(), V = $.r, Y = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(V, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    var s = function(K) {
      var $ = Ut(K == null ? void 0 : K[0]);
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(o(X), ")")
      };
    };
    function l(K, $) {
      var V = n(K);
      if (V) {
        n(e.startCall) || t("Missing (");
        var Y = $(V);
        return n(e.endCall) || t("Missing )"), Y;
      }
    }
    function c() {
      return l(e.hslColor, J);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, j);
    }
    function f() {
      var K = i("literal", e.literalColor, 0);
      if (K == null ? void 0 : K.value) {
        var $ = re(K == null ? void 0 : K.value).toRgb(), V = $.r, Y = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(V, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    function g() {
      return l(e.hsvColor, D);
    }
    function h() {
      return a() || c() || u() || d() || f() || g();
    }
    function b() {
      var K, $ = h();
      return $ || t("Expected color definition"), $.left = parseInt((K = eA()) === null || K === void 0 ? void 0 : K.value), $;
    }
    function m(K, $, V) {
      return l($, function() {
        var Y = V();
        return Y && (n(e.comma) || t("Missing comma before color stops")), {
          type: K,
          orientation: Y,
          colorStops: o(b)
        };
      });
    }
    function y() {
      return C() || S();
    }
    function w() {
      return m("linear-gradient", e.linearGradient, y) || m("repeating-linear-gradient", e.repeatingLinearGradient, y) || m("radial-gradient", e.radialGradient, H) || m("repeating-radial-gradient", e.repeatingRadialGradient, H);
    }
    function v() {
      return o(w);
    }
    function U() {
      var K, $ = v();
      A.length > 0 && t("Invalid input not EOF");
      var V = $[0], Y = (K = V == null ? void 0 : V.colorStops) === null || K === void 0 ? void 0 : K.filter(function(iA) {
        return Ut(iA.value);
      }).length, dA = function() {
        if (Y > 0) return V;
        var iA = function(tA, z) {
          return z === 0 ? li(tA) : ln(tA);
        };
        return Ar(Ar({}, V), {
          colorStops: V.colorStops.map(function(tA, z) {
            return Ar(Ar({}, tA), {
              value: iA(tA, z)
            });
          })
        });
      };
      return dA();
    }
    function C() {
      return i("directional", e.sideOrCorner, 1);
    }
    function S() {
      return i("angular", e.angleValue, 1);
    }
    function H() {
      var K, $ = I(), V;
      return $ && (K = [], K.push($), V = A, n(e.comma) && ($ = I(), $ ? K.push($) : A = V)), K;
    }
    function I() {
      var K = T() || R();
      if (K) K.at = _();
      else {
        var $ = k();
        if ($) {
          K = $;
          var V = _();
          V && (K.at = V);
        } else {
          var Y = M();
          Y && (K = {
            type: "default-radial",
            at: Y
          });
        }
      }
      return K;
    }
    function p() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function T() {
      var K = i("shape", /^(circle)/i, 0);
      return K && (K.style = p() || k()), K;
    }
    function R() {
      var K = i("shape", /^(ellipse)/i, 0);
      return K && (K.style = eA() || k()), K;
    }
    function k() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function _() {
      if (i("position", /^at/, 0)) {
        var K = M();
        return K || t("Missing positioning value"), K;
      }
    }
    function M() {
      var K = P();
      if (K.x || K.y) return {
        type: "position",
        value: K
      };
    }
    function P() {
      return {
        x: eA(),
        y: eA()
      };
    }
    function X() {
      return n(e.number)[1];
    }
    var J = function(K) {
      var $ = Ut(K == null ? void 0 : K[0]), V = o(X), Y = re({
        h: V[0],
        s: V[1],
        l: V[2],
        a: V[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, tA = Y.b, z = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(z, ")")
      };
    }, D = function(K) {
      var $ = Ut(K == null ? void 0 : K[0]), V = o(X), Y = re({
        h: V[0],
        s: V[1],
        v: V[2],
        a: V[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, tA = Y.b, z = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(z, ")")
      };
    }, j = function(K) {
      var $ = Ut(K == null ? void 0 : K[0]), V = n(e.spacedRgbColor), Y = V || lC([
        null
      ], o(X), true), dA = Y[1], iA = Y[2], tA = Y[3], z = Y[4], oA = z === void 0 ? 1 : z;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(oA, ")")
      };
    };
    function eA() {
      return i("%", e.percentageValue, 1) || nA() || p();
    }
    function nA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, ln = function(A) {
    return A.value.toLowerCase();
  }, li = function(A) {
    return A.value.toUpperCase();
  }, uC = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = cC(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, sr = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, _e = function(A) {
    return Math.round(A);
  }, co = function() {
    return co = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, co.apply(this, arguments);
  }, ad = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function lr(A, e) {
    var t = ad(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = sr(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function dC(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var fC = function(A) {
    if (A.clientX) return {
      clientX: A.clientX,
      clientY: A.clientY
    };
    var e = A.touches[0] || {};
    return {
      clientX: e.clientX,
      clientY: e.clientY
    };
  };
  function gC(A, e) {
    var t = ad(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = fC(A), s = a.clientX, l = a.clientY, c = function() {
      var d = s - r - e / 2;
      return sr(d, -9, o - 10);
    }, u = function() {
      var d = l - n - e / 2;
      return sr(d, -9, i - 10);
    };
    return [
      c(),
      u()
    ];
  }
  var Ut = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, sd = function(A) {
    if (A === "to top") return 0;
    if (A === "to bottom") return 180;
    if (A === "to left") return 270;
    if (A === "to right") return 90;
    if (A === "to top right") return 45;
    if (A === "to bottom right") return 135;
    if (A === "to bottom left") return 225;
    if (A === "to top left") return 315;
    var e = A || 0;
    return parseInt(e);
  }, pC = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, f) {
        return (d == null ? void 0 : d.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = sd((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, BC = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return co(co({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return Ut(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, hC = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return sd(r);
  }, wC = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = hC(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, ce = function() {
    return ce = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ce.apply(this, arguments);
  }, CC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, ld = B.createContext(null);
  function mC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, f = A.passedConfig, g = A.defaultStyles, h = A.pickerIdSuffix, b = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : vn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : vn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : vn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : vn.defaultGradient
    }, m = uC(o, b.defaultColor, b.defaultGradient), y = wC(o), w = y.degrees, v = y.degreeStr, U = y.isGradient, C = y.gradientType, S = BC(m, b.defaultGradient), H = S.currentColor, I = S.selectedColor, p = S.currentLeft, T = B.useState("rgb"), R = T[0], k = T[1], _ = B.useState({}), M = _[0], P = _[1], X = re(H), J = X.toRgb(), D = X.toHsv(), j = B.useState(ce(ce({}, J), D)), eA = j[0], nA = j[1];
    B.useEffect(function() {
      (D == null ? void 0 : D.s) === 0 ? nA(ce(ce(ce({}, J), D), {
        h: eA == null ? void 0 : eA.h
      })) : nA(ce(ce({}, J), D));
    }, [
      H
    ]);
    var K = function(iA) {
      var tA = iA.sort(function(aA, Q) {
        return aA.left - Q.left;
      }), z = tA == null ? void 0 : tA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), oA = "".concat(C, "(").concat(v, ", ").concat(z.join(", "), ")");
      P(ce(ce({}, M), {
        gradient: oA
      })), a(oA);
    }, $ = function(iA, tA) {
      var z = m == null ? void 0 : m.filter(function(aA) {
        return !Ut(aA.value);
      }), oA = CC([
        {
          value: iA.toUpperCase(),
          left: tA ?? p
        }
      ], z, true);
      K(oA);
    }, V = function(iA) {
      U ? $(iA) : (P(ce(ce({}, M), {
        color: iA
      })), a(iA));
    }, Y = function() {
      if ((m == null ? void 0 : m.length) > 2) {
        var iA = m == null ? void 0 : m.map(function(z, oA) {
          return ce(ce({}, z), {
            value: oA === I - 1 ? li(z) : ln(z)
          });
        }), tA = iA == null ? void 0 : iA.filter(function(z, oA) {
          return oA !== I;
        });
        K(tA);
      }
    }, dA = {
      hc: eA,
      setHc: nA,
      value: o,
      colors: m,
      config: b,
      degrees: w,
      onChange: a,
      previous: M,
      inputType: R,
      tinyColor: X,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: p,
      deletePoint: Y,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: k,
      gradientType: C,
      handleChange: V,
      currentColor: H,
      selectedColor: I,
      defaultStyles: g,
      handleGradient: $,
      pickerIdSuffix: h,
      createGradientStr: K
    };
    return x.createElement(ld.Provider, {
      value: dA
    }, i);
  }
  function yA() {
    var A = B.useContext(ld);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var vn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, vC = function(A, e) {
    B.useEffect(function() {
      var t, r = (t = A == null ? void 0 : A.current) === null || t === void 0 ? void 0 : t.getContext("2d", {
        willReadFrequently: true
      });
      if (r) {
        r.rect(0, 0, e, 14);
        for (var n = r.createLinearGradient(0, 0, e, 0), o = 0; o <= 360; o += 30) n.addColorStop(o / 360, "hsl(".concat(o, ", 100%, 50%)"));
        r.fillStyle = n, r.fill();
      }
    }, [
      A,
      e
    ]);
  }, QC = function(A, e, t, r) {
    B.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) i.addColorStop(a / 100, "hsl(".concat(e, ", ").concat(a, "%, ").concat(t, "%)"));
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, yC = function(A, e, t, r) {
    B.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) i.addColorStop(a / 100, "hsl(".concat(e, ", ").concat(t, "%, ").concat(a, "%)"));
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, bC = function(A, e, t, r) {
    B.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = re({
            h: e,
            s: t,
            v: a
          });
          i.addColorStop(a / 100, s.toHslString());
        }
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, uo = function() {
    return uo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, uo.apply(this, arguments);
  }, FC = function() {
    var A = B.useRef(null), e = yA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = B.useState(false), l = s[0], c = s[1], u = t.barSize;
    vC(A, n);
    var d = function() {
      c(false);
    }, f = function() {
      c(true);
    }, g = function(m) {
      var y = lr(m, u) * 3.6, w = re({
        h: y,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = w.toRgb(), U = v.r, C = v.g, S = v.b;
      r("rgba(".concat(U, ", ").concat(C, ", ").concat(S, ", ").concat(o.a, ")")), i(uo(uo({}, o), {
        h: y
      }));
    }, h = function(m) {
      l && g(m);
    }, b = function(m) {
      l || g(m);
    };
    return B.useEffect(function() {
      var m = function() {
        d();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), x.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(m) {
        return h(m);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, x.createElement("div", {
      tabIndex: 0,
      role: "button",
      style: {
        border: "2px solid white",
        borderRadius: "50%",
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
        width: "18px",
        height: "18px",
        zIndex: 1e3,
        transition: "all 10ms linear",
        position: "absolute",
        left: (o == null ? void 0 : o.h) * ((n - 18) / 360),
        top: -2,
        cursor: "ew-resize",
        boxSizing: "border-box"
      },
      onMouseDown: f,
      id: "rbgcp-hue-handle".concat(a)
    }), x.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(m) {
        return b(m);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function UC(A, e, t) {
    var r = 0, n = 0, o = 0, i = 0;
    if (A === null || e === null || t === null || isNaN(A) || isNaN(e) || isNaN(t)) return console.log("Please enter numeric RGB values!"), {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    if (A < 0 || e < 0 || t < 0 || A > 255 || e > 255 || t > 255) return console.log("RGB values must be in the range 0 to 255."), {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    if (A === 0 && e === 0 && t === 0) return i = 1, {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    r = 1 - A / 255, n = 1 - e / 255, o = 1 - t / 255;
    var a = Math.min(r, Math.min(n, o));
    return r = (r - a) / (1 - a), n = (n - a) / (1 - a), o = (o - a) / (1 - a), i = a, {
      c: r,
      m: n,
      y: o,
      k: i
    };
  }
  var EC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, SC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Ue = function() {
    return Ue = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ue.apply(this, arguments);
  }, fe = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = B.useState(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    B.useEffect(function() {
      u(t);
    }, [
      t
    ]);
    var f = function(g) {
      var h = sr(parseFloat(g.target.value), 0, o);
      u(h), r(h);
    };
    return x.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, x.createElement("input", {
      value: c,
      onChange: function(g) {
        return f(g);
      },
      style: Ue({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), x.createElement("div", {
      style: Ue({}, a.rbgcpInputLabel)
    }, e));
  }, xC = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = B.useState(""), s = a[0], l = a[1], c = t.toHex(), u = B.useState(c), d = u[0], f = u[1];
    B.useEffect(function() {
      s !== "hex" && f(c);
    }, [
      t,
      s,
      c
    ]);
    var g = function() {
      l("hex");
    }, h = function() {
      l("");
    }, b = function(v) {
      var U = re(v.target.value);
      if (f(v.target.value), U.isValid()) {
        var C = U.toRgb(), S = C.r, H = C.g, I = C.b, p = "rgba(".concat(S, ", ").concat(H, ", ").concat(I, ", ").concat(e, ")");
        n(p);
      }
    }, m = r ? "".concat(d).concat(SC(e)) : d, y = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return x.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, x.createElement("input", {
      onBlur: h,
      onFocus: g,
      onChange: function(v) {
        return b(v);
      },
      value: m == null ? void 0 : m.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Ue(Ue({}, o.rbgcpInput), o.rbgcpHexInput)
    }), x.createElement("div", {
      style: Ue({}, o.rbgcpInputLabel)
    }, y));
  }, IC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "R",
      max: 255,
      value: e == null ? void 0 : e.r,
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(a) {
        return i({
          r: a,
          g: e == null ? void 0 : e.g,
          b: e == null ? void 0 : e.b
        });
      }
    }), x.createElement(fe, {
      label: "G",
      max: 255,
      value: e == null ? void 0 : e.g,
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(a) {
        return i({
          r: e == null ? void 0 : e.r,
          g: a,
          b: e == null ? void 0 : e.b
        });
      }
    }), x.createElement(fe, {
      label: "B",
      max: 255,
      value: e == null ? void 0 : e.b,
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(a) {
        return i({
          r: e == null ? void 0 : e.r,
          g: e == null ? void 0 : e.g,
          b: a
        });
      }
    }));
  }, HC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(f, g, h) {
      var b = re({
        h: f,
        s: g,
        l: h
      }).toRgb(), m = b.r, y = b.g, w = b.b;
      o("rgba(".concat(m, ", ").concat(y, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ue(Ue({}, e), {
        h: f
      }));
    }, d = function(f) {
      var g = re(f).toRgb(), h = g.r, b = g.g, m = g.b;
      o("rgba(".concat(h, ", ").concat(b, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "H",
      max: 360,
      value: _e(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u(f, l, c);
      }
    }), x.createElement(fe, {
      label: "S",
      value: _e(l * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d({
          h: e == null ? void 0 : e.h,
          s: f,
          l: c
        });
      }
    }), x.createElement(fe, {
      label: "L",
      value: _e(c * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d({
          h: e == null ? void 0 : e.h,
          s: l,
          l: f
        });
      }
    }));
  }, TC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = re({
        h: l,
        s: c,
        v: u
      }).toRgb(), f = d.r, g = d.g, h = d.b;
      n("rgba(".concat(f, ", ").concat(g, ", ").concat(h, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ue(Ue({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = re(l).toRgb(), u = c.r, d = c.g, f = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "H",
      max: 360,
      value: _e(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), x.createElement(fe, {
      label: "S",
      hideOpacity: r,
      value: _e((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), x.createElement(fe, {
      label: "V",
      hideOpacity: r,
      value: _e((e == null ? void 0 : e.v) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: e == null ? void 0 : e.s,
          v: l
        });
      }
    }));
  }, LC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = UC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var f = EC(d), g = f.r, h = f.g, b = f.b;
      r("rgba(".concat(g, ", ").concat(h, ", ").concat(b, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "C",
      value: _e(a * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: d / 100,
          m: s,
          y: l,
          k: c
        });
      }
    }), x.createElement(fe, {
      label: "M",
      value: _e(s * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: a,
          m: d / 100,
          y: l,
          k: c
        });
      }
    }), x.createElement(fe, {
      label: "Y",
      value: _e(l * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: a,
          m: s,
          y: d / 100,
          k: c
        });
      }
    }), x.createElement(fe, {
      label: "K",
      value: _e(c * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: a,
          m: s,
          y: l,
          k: d / 100
        });
      }
    }));
  }, kC = function() {
    var A = yA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return x.createElement("div", {
      style: Ue({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && x.createElement(xC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && x.createElement(HC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && x.createElement(IC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && x.createElement(TC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && x.createElement(LC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && x.createElement(fe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, RC = function(A, e, t, r) {
    B.useEffect(function() {
      if (A.current) {
        var n = A.current.getContext("2d", {
          willReadFrequently: true
        });
        if (n) {
          n.fillStyle = "hsl(".concat(e, ", 100%, 50%)"), n.fillRect(0, 0, t, r);
          var o = n.createLinearGradient(0, 0, t, 0);
          o.addColorStop(0, "rgba(255, 255, 255, 1)"), o.addColorStop(1, "rgba(255, 255, 255, 0)"), n.fillStyle = o, n.fillRect(0, 0, t, r);
          var i = n.createLinearGradient(0, 0, 0, r);
          i.addColorStop(0, "rgba(0, 0, 0, 0)"), i.addColorStop(1, "rgba(0, 0, 0, 1)"), n.fillStyle = i, n.fillRect(0, 0, t, r);
        }
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, cd = "Expected a function", _l = NaN, KC = "[object Symbol]", OC = /^\s+|\s+$/g, DC = /^[-+]0x[0-9a-f]+$/i, MC = /^0b[01]+$/i, PC = /^0o[0-7]+$/i, NC = parseInt, _C = typeof dn == "object" && dn && dn.Object === Object && dn, GC = typeof self == "object" && self && self.Object === Object && self, VC = _C || GC || Function("return this")(), $C = Object.prototype, WC = $C.toString, XC = Math.max, jC = Math.min, Ii = function() {
    return VC.Date.now();
  };
  function zC(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(cd);
    e = Gl(e) || 0, fo(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? XC(Gl(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function f(C) {
      var S = r, H = n;
      return r = n = void 0, l = C, i = A.apply(H, S), i;
    }
    function g(C) {
      return l = C, a = setTimeout(m, e), c ? f(C) : i;
    }
    function h(C) {
      var S = C - s, H = C - l, I = e - S;
      return u ? jC(I, o - H) : I;
    }
    function b(C) {
      var S = C - s, H = C - l;
      return s === void 0 || S >= e || S < 0 || u && H >= o;
    }
    function m() {
      var C = Ii();
      if (b(C)) return y(C);
      a = setTimeout(m, h(C));
    }
    function y(C) {
      return a = void 0, d && r ? f(C) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : y(Ii());
    }
    function U() {
      var C = Ii(), S = b(C);
      if (r = arguments, n = this, s = C, S) {
        if (a === void 0) return g(s);
        if (u) return a = setTimeout(m, e), f(s);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return U.cancel = w, U.flush = v, U;
  }
  function JC(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(cd);
    return fo(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), zC(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function fo(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function YC(A) {
    return !!A && typeof A == "object";
  }
  function ZC(A) {
    return typeof A == "symbol" || YC(A) && WC.call(A) == KC;
  }
  function Gl(A) {
    if (typeof A == "number") return A;
    if (ZC(A)) return _l;
    if (fo(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = fo(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(OC, "");
    var t = MC.test(A);
    return t || PC.test(A) ? NC(A.slice(2), t ? 2 : 8) : DC.test(A) ? _l : +A;
  }
  var qC = JC;
  const Am = Wa(qC);
  var Et = function() {
    return Et = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Et.apply(this, arguments);
  }, em = function() {
    var A, e, t = yA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = B.useState(false), d = u[0], f = u[1], g = B.useRef(null), h = dC(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), b = h[0], m = h[1], y = B.useState({
      x: b,
      y: m
    }), w = y[0], v = y[1];
    RC(g, r == null ? void 0 : r.h, o, i), B.useEffect(function() {
      d || v({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : b,
        y: m
      });
    }, [
      b,
      m
    ]);
    var U = function(T) {
      var R = Am(function() {
        var k = gC(T, c), _ = k[0], M = k[1];
        if (_ && M) {
          var P = Math.min(_ + c / 2, o - 1), X = Math.min(M + c / 2, i - 1), J = P / o * 100, D = 100 - X / i * 100;
          v({
            x: D === 0 ? w == null ? void 0 : w.x : _,
            y: M
          });
          var j = re("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(J, "%, ").concat(D, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(j.toRgbString());
        }
      }, 250);
      R();
    }, C = function() {
      f(false);
    }, S = function(T) {
      d && U(T);
    }, H = function(T) {
      d || U(T);
    }, I = function() {
      f(true);
    }, p = function(T) {
      f(true), U(T);
    };
    return B.useEffect(function() {
      var T = function() {
        C();
      };
      return window.addEventListener("mouseup", T), function() {
        window.removeEventListener("mouseup", T);
      };
    }, []), x.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, x.createElement("div", {
      onMouseUp: C,
      onTouchEnd: C,
      onMouseDown: p,
      onTouchStart: p,
      onMouseMove: function(T) {
        return S(T);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, x.createElement("div", {
      style: Et(Et(Et({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = w == null ? void 0 : w.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = w == null ? void 0 : w.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: I,
      id: "rbgcp-square-handle".concat(l)
    }), x.createElement("div", {
      style: Et(Et({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(T) {
        return H(T);
      }
    }, x.createElement("canvas", {
      ref: g,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, lt = function() {
    return lt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, lt.apply(this, arguments);
  }, tm = function() {
    var A = yA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = B.useState(false), l = s[0], c = s[1], u = r.r, d = r.g, f = r.b, g = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(f, ",.5) 100%)"), h = e.barSize, b = function() {
      c(false);
    }, m = function() {
      c(true);
    }, y = function(C) {
      var S = lr(C, h) / 100, H = "rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(S, ")");
      o(H);
    }, w = function(C) {
      l && y(C);
    }, v = function(C) {
      l || y(C);
    }, U = n - 18;
    return B.useEffect(function() {
      var C = function() {
        b();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), x.createElement("div", {
      onMouseDown: m,
      onMouseMove: function(C) {
        return w(C);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, x.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: lt(lt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), x.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: lt(lt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), x.createElement("div", {
      style: lt(lt({}, i.rbgcpOpacityOverlay), {
        background: g
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(C) {
        return v(C);
      }
    }));
  }, rm = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, nm = [
    "rgba(0,0,0,1)",
    "rgba(128,128,128, 1)",
    "rgba(192,192,192, 1)",
    "rgba(255,255,255, 1)",
    "rgba(0,0,128,1)",
    "rgba(0,0,255,1)",
    "rgba(0,255,255, 1)",
    "rgba(0,128,0,1)",
    "rgba(128,128,0, 1)",
    "rgba(0,128,128,1)",
    "rgba(0,255,0, 1)",
    "rgba(128,0,0, 1)",
    "rgba(128,0,128, 1)",
    "rgba(175, 51, 242, 1)",
    "rgba(255,0,255, 1)",
    "rgba(255,0,0, 1)",
    "rgba(240, 103, 46, 1)",
    "rgba(255,255,0, 1)"
  ], om = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = yA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : nm;
    }, u = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, d = function(f) {
      if (!f || i) return "";
      var g = f == null ? void 0 : f.replace(" ", "");
      return g === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return x.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, x.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), x.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, g) {
      return x.createElement("div", {
        key: "".concat(f, "-").concat(g),
        id: "rbgcp-preset-".concat(g, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, x.createElement("div", {
        style: {
          height: 23.5,
          width: "100%",
          background: f,
          borderRadius: 4,
          border: d(f)
        },
        onClick: function() {
          return u(f);
        },
        id: "rbgcp-preset-".concat(g).concat(l)
      }));
    })));
  }, rA = function() {
    return rA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, rA.apply(this, arguments);
  }, im = function() {
    var A = yA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, x.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, am = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, x.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, sm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, x.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), x.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, lm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, x.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), x.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), x.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), x.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), x.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), x.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, cm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, um = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, x.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), x.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), x.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), x.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), x.createElement("path", {
      style: rA(rA(rA(rA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, dm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, x.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), x.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, fm = function() {
    var A = yA().defaultStyles;
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, x.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), x.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), x.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), x.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, gm = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = B.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = B.useState(!n.current.parentElement)[0];
    return B.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), bs.createPortal(t, n.current);
  };
  const pm = B.memo(gm);
  var Qa = function(A, e) {
    return Qa = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Qa(A, e);
  };
  function Te(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Qa(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var ya = function() {
    return ya = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, ya.apply(this, arguments);
  };
  function ue(A, e, t, r) {
    function n(o) {
      return o instanceof t ? o : new t(function(i) {
        i(o);
      });
    }
    return new (t || (t = Promise))(function(o, i) {
      function a(c) {
        try {
          l(r.next(c));
        } catch (u) {
          i(u);
        }
      }
      function s(c) {
        try {
          l(r.throw(c));
        } catch (u) {
          i(u);
        }
      }
      function l(c) {
        c.done ? o(c.value) : n(c.value).then(a, s);
      }
      l((r = r.apply(A, [])).next());
    });
  }
  function ae(A, e) {
    var t = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, r, n, o, i;
    return i = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function a(l) {
      return function(c) {
        return s([
          l,
          c
        ]);
      };
    }
    function s(l) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; t; ) try {
        if (r = 1, n && (o = l[0] & 2 ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
        switch (n = 0, o && (l = [
          l[0] & 2,
          o.value
        ]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return t.label++, {
              value: l[1],
              done: false
            };
          case 5:
            t.label++, n = l[1], l = [
              0
            ];
            continue;
          case 7:
            l = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = l;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(l);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(A, t);
      } catch (c) {
        l = [
          6,
          c
        ], n = 0;
      } finally {
        r = o = 0;
      }
      if (l[0] & 5) throw l[1];
      return {
        value: l[0] ? l[1] : void 0,
        done: true
      };
    }
  }
  function Qn(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var nt = (function() {
    function A(e, t, r, n) {
      this.left = e, this.top = t, this.width = r, this.height = n;
    }
    return A.prototype.add = function(e, t, r, n) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + n);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  })(), ci = function(A, e) {
    return nt.fromClientRect(A, e.getBoundingClientRect());
  }, Bm = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new nt(0, 0, r, n);
  }, ui = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, _A = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, Vl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hm = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var yn = 0; yn < Vl.length; yn++) hm[Vl.charCodeAt(yn)] = yn;
  var $l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var bn = 0; bn < $l.length; bn++) xr[$l.charCodeAt(bn)] = bn;
  var wm = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = xr[A.charCodeAt(r)], i = xr[A.charCodeAt(r + 1)], a = xr[A.charCodeAt(r + 2)], s = xr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, Cm = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, mm = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, kt = 5, Rs = 11, Hi = 2, vm = Rs - kt, ud = 65536 >> kt, Qm = 1 << kt, Ti = Qm - 1, ym = 1024 >> kt, bm = ud + ym, Fm = bm, Um = 32, Em = Fm + Um, Sm = 65536 >> Rs, xm = 1 << vm, Im = xm - 1, Wl = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Hm = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Tm = function(A, e) {
    var t = wm(A), r = Array.isArray(t) ? mm(t) : new Uint32Array(t), n = Array.isArray(t) ? Cm(t) : new Uint16Array(t), o = 24, i = Wl(n, o / 2, r[4] / 2), a = r[5] === 2 ? Wl(n, (o + r[4]) / 2) : Hm(r, Math.ceil((o + r[4]) / 4));
    return new Lm(r[0], r[1], r[2], r[3], i, a);
  }, Lm = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> kt], t = (t << Hi) + (e & Ti), this.data[t];
        if (e <= 65535) return t = this.index[ud + (e - 55296 >> kt)], t = (t << Hi) + (e & Ti), this.data[t];
        if (e < this.highStart) return t = Em - Sm + (e >> Rs), t = this.index[t], t += e >> kt & Im, t = this.index[t], t = (t << Hi) + (e & Ti), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Xl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", km = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Fn = 0; Fn < Xl.length; Fn++) km[Xl.charCodeAt(Fn)] = Fn;
  var Rm = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", jl = 50, Km = 1, dd = 2, fd = 3, Om = 4, Dm = 5, zl = 7, gd = 8, Jl = 9, ut = 10, ba = 11, Yl = 12, Fa = 13, Mm = 14, Ir = 15, Ua = 16, Un = 17, vr = 18, Pm = 19, Zl = 20, Ea = 21, Qr = 22, Li = 23, Vt = 24, Be = 25, Hr = 26, Tr = 27, $t = 28, Nm = 29, St = 30, _m = 31, En = 32, Sn = 33, Sa = 34, xa = 35, Ia = 36, zr = 37, Ha = 38, Zn = 39, qn = 40, ki = 41, pd = 42, Gm = 43, Vm = [
    9001,
    65288
  ], Bd = "!", BA = "\xD7", xn = "\xF7", Ta = Tm(Rm), Ye = [
    St,
    Ia
  ], La = [
    Km,
    dd,
    fd,
    Dm
  ], hd = [
    ut,
    gd
  ], ql = [
    Tr,
    Hr
  ], $m = La.concat(hd), Ac = [
    Ha,
    Zn,
    qn,
    Sa,
    xa
  ], Wm = [
    Ir,
    Fa
  ], Xm = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Ta.get(o);
      if (a > jl ? (n.push(true), a -= jl) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ua);
      if (a === Om || a === ba) {
        if (i === 0) return r.push(i), t.push(St);
        var s = t[i - 1];
        return $m.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(St));
      }
      if (r.push(i), a === _m) return t.push(e === "strict" ? Ea : zr);
      if (a === pd || a === Nm) return t.push(St);
      if (a === Gm) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(zr) : t.push(St);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Ri = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== ut) break;
    }
    if (n === ut) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var s = t; s <= r.length; ) {
        s++;
        var i = r[s];
        if (i === e) return true;
        if (i !== ut) break;
      }
      if (a !== ut) break;
    }
    return false;
  }, ec = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === ut) t--;
      else return r;
    }
    return 0;
  }, jm = function(A, e, t, r, n) {
    if (t[r] === 0) return BA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return BA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === dd && c === fd) return BA;
    if (La.indexOf(s) !== -1) return Bd;
    if (La.indexOf(c) !== -1 || hd.indexOf(c) !== -1) return BA;
    if (ec(o, e) === gd) return xn;
    if (Ta.get(A[o]) === ba || (s === En || s === Sn) && Ta.get(A[a]) === ba || s === zl || c === zl || s === Jl || [
      ut,
      Fa,
      Ir
    ].indexOf(s) === -1 && c === Jl || [
      Un,
      vr,
      Pm,
      Vt,
      $t
    ].indexOf(c) !== -1 || ec(o, e) === Qr || Ri(Li, Qr, o, e) || Ri([
      Un,
      vr
    ], Ea, o, e) || Ri(Yl, Yl, o, e)) return BA;
    if (s === ut) return xn;
    if (s === Li || c === Li) return BA;
    if (c === Ua || s === Ua) return xn;
    if ([
      Fa,
      Ir,
      Ea
    ].indexOf(c) !== -1 || s === Mm || l === Ia && Wm.indexOf(s) !== -1 || s === $t && c === Ia || c === Zl || Ye.indexOf(c) !== -1 && s === Be || Ye.indexOf(s) !== -1 && c === Be || s === Tr && [
      zr,
      En,
      Sn
    ].indexOf(c) !== -1 || [
      zr,
      En,
      Sn
    ].indexOf(s) !== -1 && c === Hr || Ye.indexOf(s) !== -1 && ql.indexOf(c) !== -1 || ql.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || [
      Tr,
      Hr
    ].indexOf(s) !== -1 && (c === Be || [
      Qr,
      Ir
    ].indexOf(c) !== -1 && e[a + 1] === Be) || [
      Qr,
      Ir
    ].indexOf(s) !== -1 && c === Be || s === Be && [
      Be,
      $t,
      Vt
    ].indexOf(c) !== -1) return BA;
    if ([
      Be,
      $t,
      Vt,
      Un,
      vr
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === Be) return BA;
      if ([
        $t,
        Vt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      Tr,
      Hr
    ].indexOf(c) !== -1) for (var u = [
      Un,
      vr
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === Be) return BA;
      if ([
        $t,
        Vt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (Ha === s && [
      Ha,
      Zn,
      Sa,
      xa
    ].indexOf(c) !== -1 || [
      Zn,
      Sa
    ].indexOf(s) !== -1 && [
      Zn,
      qn
    ].indexOf(c) !== -1 || [
      qn,
      xa
    ].indexOf(s) !== -1 && c === qn || Ac.indexOf(s) !== -1 && [
      Zl,
      Hr
    ].indexOf(c) !== -1 || Ac.indexOf(c) !== -1 && s === Tr || Ye.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || s === Vt && Ye.indexOf(c) !== -1 || Ye.concat(Be).indexOf(s) !== -1 && c === Qr && Vm.indexOf(A[a]) === -1 || Ye.concat(Be).indexOf(c) !== -1 && s === vr) return BA;
    if (s === ki && c === ki) {
      for (var f = t[o], g = 1; f > 0 && (f--, e[f] === ki); ) g++;
      if (g % 2 !== 0) return BA;
    }
    return s === En && c === Sn ? BA : xn;
  }, zm = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Xm(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Be,
        St,
        pd
      ].indexOf(a) !== -1 ? zr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, Jm = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Bd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return _A.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), Ym = function(A, e) {
    var t = ui(A), r = zm(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = BA; l < a && (c = jm(t, o, n, ++l, i)) === BA; ) ;
        if (c !== BA || l === a) {
          var u = new Jm(t, c, s, l);
          return s = l, {
            value: u,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, Zm = 1, qm = 2, cn = 4, tc = 8, go = 10, rc = 47, Mr = 92, Av = 9, ev = 32, In = 34, yr = 61, tv = 35, rv = 36, nv = 37, Hn = 39, Tn = 40, br = 41, ov = 95, de = 45, iv = 33, av = 60, sv = 62, lv = 64, cv = 91, uv = 93, dv = 61, fv = 123, Ln = 63, gv = 125, nc = 124, pv = 126, Bv = 128, oc = 65533, Ki = 42, Tt = 43, hv = 44, wv = 58, Cv = 59, Jr = 46, mv = 0, vv = 8, Qv = 11, yv = 14, bv = 31, Fv = 127, Ke = -1, wd = 48, Cd = 97, md = 101, Uv = 102, Ev = 117, Sv = 122, vd = 65, Qd = 69, yd = 70, xv = 85, Iv = 90, se = function(A) {
    return A >= wd && A <= 57;
  }, Hv = function(A) {
    return A >= 55296 && A <= 57343;
  }, Wt = function(A) {
    return se(A) || A >= vd && A <= yd || A >= Cd && A <= Uv;
  }, Tv = function(A) {
    return A >= Cd && A <= Sv;
  }, Lv = function(A) {
    return A >= vd && A <= Iv;
  }, kv = function(A) {
    return Tv(A) || Lv(A);
  }, Rv = function(A) {
    return A >= Bv;
  }, kn = function(A) {
    return A === go || A === Av || A === ev;
  }, po = function(A) {
    return kv(A) || Rv(A) || A === ov;
  }, ic = function(A) {
    return po(A) || se(A) || A === de;
  }, Kv = function(A) {
    return A >= mv && A <= vv || A === Qv || A >= yv && A <= bv || A === Fv;
  }, ct = function(A, e) {
    return A !== Mr ? false : e !== go;
  }, Rn = function(A, e, t) {
    return A === de ? po(e) || ct(e, t) : po(A) ? true : !!(A === Mr && ct(A, e));
  }, Oi = function(A, e, t) {
    return A === Tt || A === de ? se(e) ? true : e === Jr && se(t) : se(A === Jr ? e : A);
  }, Ov = function(A) {
    var e = 0, t = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (t = -1), e++);
    for (var r = []; se(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(_A.apply(void 0, r), 10) : 0;
    A[e] === Jr && e++;
    for (var o = []; se(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(_A.apply(void 0, o), 10) : 0;
    (A[e] === Qd || A[e] === md) && e++;
    var s = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (s = -1), e++);
    for (var l = []; se(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(_A.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, Dv = {
    type: 2
  }, Mv = {
    type: 3
  }, Pv = {
    type: 4
  }, Nv = {
    type: 13
  }, _v = {
    type: 8
  }, Gv = {
    type: 21
  }, Vv = {
    type: 9
  }, $v = {
    type: 10
  }, Wv = {
    type: 11
  }, Xv = {
    type: 12
  }, jv = {
    type: 14
  }, Kn = {
    type: 23
  }, zv = {
    type: 1
  }, Jv = {
    type: 25
  }, Yv = {
    type: 24
  }, Zv = {
    type: 26
  }, qv = {
    type: 27
  }, AQ = {
    type: 28
  }, eQ = {
    type: 29
  }, tQ = {
    type: 31
  }, ka = {
    type: 32
  }, bd = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(ui(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== ka; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case In:
          return this.consumeStringToken(In);
        case tv:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (ic(t) || ct(r, n)) {
            var o = Rn(t, r, n) ? qm : Zm, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case rv:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), Nv;
          break;
        case Hn:
          return this.consumeStringToken(Hn);
        case Tn:
          return Dv;
        case br:
          return Mv;
        case Ki:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), jv;
          break;
        case Tt:
          if (Oi(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case hv:
          return Pv;
        case de:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Oi(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Rn(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === de && l === sv) return this.consumeCodePoint(), this.consumeCodePoint(), Yv;
          break;
        case Jr:
          if (Oi(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case rc:
          if (this.peekCodePoint(0) === Ki) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Ki && (c = this.consumeCodePoint(), c === rc)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case wv:
          return Zv;
        case Cv:
          return qv;
        case av:
          if (this.peekCodePoint(0) === iv && this.peekCodePoint(1) === de && this.peekCodePoint(2) === de) return this.consumeCodePoint(), this.consumeCodePoint(), Jv;
          break;
        case lv:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (Rn(u, d, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case cv:
          return AQ;
        case Mr:
          if (ct(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case uv:
          return eQ;
        case dv:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), _v;
          break;
        case fv:
          return Wv;
        case gv:
          return Xv;
        case Ev:
        case xv:
          var g = this.peekCodePoint(0), h = this.peekCodePoint(1);
          return g === Tt && (Wt(h) || h === Ln) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case nc:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), Vv;
          if (this.peekCodePoint(0) === nc) return this.consumeCodePoint(), Gv;
          break;
        case pv:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), $v;
          break;
        case Ke:
          return ka;
      }
      return kn(e) ? (this.consumeWhiteSpace(), tQ) : se(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : po(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: _A(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Wt(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === Ln && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(_A.apply(void 0, e.map(function(s) {
          return s === Ln ? wd : s;
        })), 16), o = parseInt(_A.apply(void 0, e.map(function(s) {
          return s === Ln ? yd : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(_A.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === de && Wt(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Wt(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt(_A.apply(void 0, a), 16);
        return {
          type: 30,
          start: i,
          end: o
        };
      } else return {
        type: 30,
        start: i,
        end: i
      };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Tn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Tn ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === Hn || t === In) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === br) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), Kn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === br) return {
          type: 22,
          value: _A.apply(void 0, e)
        };
        if (kn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === br ? (this.consumeCodePoint(), {
          type: 22,
          value: _A.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), Kn);
        if (n === In || n === Hn || n === Tn || Kv(n)) return this.consumeBadUrlRemnants(), Kn;
        if (n === Mr) if (ct(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), Kn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; kn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === br || e === Ke) return;
        ct(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += _A.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === Ke || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === go) return this._value.splice(0, r), zv;
        if (n === Mr) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === go ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ct(n, o) && (t += this.consumeStringSlice(r), t += _A(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = cn, r = this.peekCodePoint(0);
      for ((r === Tt || r === de) && e.push(this.consumeCodePoint()); se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Jr && se(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = tc; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Qd || r === md) && ((n === Tt || n === de) && se(o) || se(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = tc; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        Ov(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Rn(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === nv ? (this.consumeCodePoint(), {
        type: 16,
        number: t,
        flags: r
      }) : {
        type: 17,
        number: t,
        flags: r
      };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Wt(e)) {
        for (var t = _A(e); Wt(this.peekCodePoint(0)) && t.length < 6; ) t += _A(this.consumeCodePoint());
        kn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Hv(r) || r > 1114111 ? oc : r;
      }
      return e === Ke ? oc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (ic(t)) e += _A(t);
        else if (ct(t, this.peekCodePoint(0))) e += _A(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Fd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new bd();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; ) e = this.consumeToken();
      if (e.type === 32) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32) return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32) return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = {
        type: e,
        values: []
      }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || nQ(r, e)) return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3) return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? ka : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), un = function(A) {
    return A.type === 15;
  }, gr = function(A) {
    return A.type === 17;
  }, QA = function(A) {
    return A.type === 20;
  }, rQ = function(A) {
    return A.type === 0;
  }, Ra = function(A, e) {
    return QA(A) && A.value === e;
  }, Ud = function(A) {
    return A.type !== 31;
  }, cr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, Xe = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, nQ = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, mt = function(A) {
    return A.type === 17 || A.type === 15;
  }, $A = function(A) {
    return A.type === 16 || mt(A);
  }, Ed = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, ne = {
    type: 17,
    number: 0,
    flags: cn
  }, Ks = {
    type: 16,
    number: 50,
    flags: cn
  }, dt = {
    type: 16,
    number: 100,
    flags: cn
  }, Lr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      EA(r, e),
      EA(typeof n < "u" ? n : r, t)
    ];
  }, EA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (un(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Sd = "deg", xd = "grad", Id = "rad", Hd = "turn", di = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Sd:
          return Math.PI * e.number / 180;
        case xd:
          return Math.PI / 200 * e.number;
        case Id:
          return e.number;
        case Hd:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Td = function(A) {
    return A.type === 15 && (A.unit === Sd || A.unit === xd || A.unit === Id || A.unit === Hd);
  }, Ld = function(A) {
    var e = A.filter(QA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          ne,
          ne
        ];
      case "to top":
      case "bottom":
        return be(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          ne,
          dt
        ];
      case "to right":
      case "left":
        return be(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          dt,
          dt
        ];
      case "to bottom":
      case "top":
        return be(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          dt,
          ne
        ];
      case "to left":
      case "right":
        return be(270);
    }
    return 0;
  }, be = function(A) {
    return Math.PI * A / 180;
  }, pt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = oQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return ft(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return ft(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return ft(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return ft(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = qe[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return qe.TRANSPARENT;
    }
  }, Bt = function(A) {
    return (255 & A) === 0;
  }, zA = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, ft = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, ac = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, sc = function(A, e) {
    var t = e.filter(cr);
    if (t.length === 3) {
      var r = t.map(ac), n = r[0], o = r[1], i = r[2];
      return ft(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(ac), n = a[0], o = a[1], i = a[2], s = a[3];
      return ft(n, o, i, s);
    }
    return 0;
  };
  function Di(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var lc = function(A, e) {
    var t = e.filter(cr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? be(r.number) : di.parse(A, r)) / (Math.PI * 2), s = $A(n) ? n.number / 100 : 0, l = $A(o) ? o.number / 100 : 0, c = typeof i < "u" && $A(i) ? EA(i, 1) : 1;
    if (s === 0) return ft(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, f = Di(d, u, a + 1 / 3), g = Di(d, u, a), h = Di(d, u, a - 1 / 3);
    return ft(f * 255, g * 255, h * 255, c);
  }, oQ = {
    hsl: lc,
    hsla: lc,
    rgb: sc,
    rgba: sc
  }, Pr = function(A, e) {
    return pt.parse(A, Fd.create(e).parseComponentValue());
  }, qe = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
  }, iQ = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (QA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, aQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, fi = function(A, e) {
    var t = pt.parse(A, e[0]), r = e[1];
    return r && $A(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, cc = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = ne), r.stop === null && (r.stop = dt);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = EA(a, e);
        s > o ? n.push(s) : n.push(o), o = s;
      } else n.push(null);
    }
    for (var l = null, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c === null) l === null && (l = i);
      else if (l !== null) {
        for (var u = i - l, d = n[l - 1], f = (c - d) / (u + 1), g = 1; g <= u; g++) n[l + g - 1] = f * g;
        l = null;
      }
    }
    return A.map(function(h, b) {
      var m = h.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[b] / e), 0)
      };
    });
  }, sQ = function(A, e, t) {
    var r = e / 2, n = t / 2, o = EA(A[0], e) - r, i = n - EA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, lQ = function(A, e, t) {
    var r = typeof A == "number" ? A : sQ(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, xe = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, uc = function(A, e, t, r, n) {
    var o = [
      [
        0,
        0
      ],
      [
        0,
        e
      ],
      [
        A,
        0
      ],
      [
        A,
        e
      ]
    ];
    return o.reduce(function(i, a) {
      var s = a[0], l = a[1], c = xe(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, cQ = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(xe(e, t), xe(e, t - n), xe(e - r, t), xe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = uc(r, n, e, t, true), l = s[0], c = s[1];
          o = xe(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(xe(e, t), xe(e, t - n), xe(e - r, t), xe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = uc(r, n, e, t, false), l = u[0], c = u[1];
          o = xe(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = EA(A.size[0], r), i = A.size.length === 2 ? EA(A.size[1], n) : o), [
      o,
      i
    ];
  }, uQ = function(A, e) {
    var t = be(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Ld(n);
          return;
        } else if (Td(i)) {
          t = di.parse(A, i);
          return;
        }
      }
      var a = fi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, On = function(A, e) {
    var t = be(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = Ld(n);
          return;
        } else if (Td(i)) {
          t = (di.parse(A, i) + be(270)) % be(360);
          return;
        }
      }
      var a = fi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, dQ = function(A, e) {
    var t = be(180), r = [], n = 1, o = 0, i = 3, a = [];
    return Xe(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (QA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (QA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var u = pt.parse(A, c.values[0]);
          r.push({
            stop: ne,
            color: u
          });
        } else if (c.name === "to") {
          var u = pt.parse(A, c.values[0]);
          r.push({
            stop: dt,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(cr);
          if (d.length === 2) {
            var u = pt.parse(A, d[1]), f = d[0];
            gr(f) && r.push({
              stop: {
                type: 16,
                number: f.number * 100,
                flags: f.flags
              },
              color: u
            });
          }
        }
      }
    }), n === 1 ? {
      angle: (t + be(180)) % be(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, kd = "closest-side", Rd = "farthest-side", Kd = "closest-corner", Od = "farthest-corner", Dd = "circle", Md = "ellipse", Pd = "cover", Nd = "contain", fQ = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (QA(d)) switch (d.value) {
            case "center":
              return o.push(Ks), u;
            case "top":
            case "left":
              return o.push(ne), u;
            case "right":
            case "bottom":
              return o.push(dt), u;
          }
          else ($A(d) || mt(d)) && o.push(d);
          else if (QA(d)) switch (d.value) {
            case Dd:
              return t = 0, false;
            case Md:
              return t = 1, false;
            case "at":
              return l = true, false;
            case kd:
              return r = 0, false;
            case Pd:
            case Rd:
              return r = 1, false;
            case Nd:
            case Kd:
              return r = 2, false;
            case Od:
              return r = 3, false;
          }
          else if (mt(d) || $A(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = fi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Dn = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (QA(u)) switch (u.value) {
          case "center":
            return o.push(Ks), false;
          case "top":
          case "left":
            return o.push(ne), false;
          case "right":
          case "bottom":
            return o.push(dt), false;
        }
        else if ($A(u) || mt(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (QA(u)) switch (u.value) {
          case Dd:
            return t = 0, false;
          case Md:
            return t = 1, false;
          case Nd:
          case kd:
            return r = 0, false;
          case Rd:
            return r = 1, false;
          case Kd:
            return r = 2, false;
          case Pd:
          case Od:
            return r = 3, false;
        }
        else if (mt(u) || $A(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = fi(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, gQ = function(A) {
    return A.type === 1;
  }, pQ = function(A) {
    return A.type === 2;
  }, Os = {
    name: "image",
    parse: function(A, e) {
      if (e.type === 22) {
        var t = {
          url: e.value,
          type: 0
        };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = _d[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function BQ(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!_d[A.name]);
  }
  var _d = {
    "linear-gradient": uQ,
    "-moz-linear-gradient": On,
    "-ms-linear-gradient": On,
    "-o-linear-gradient": On,
    "-webkit-linear-gradient": On,
    "radial-gradient": fQ,
    "-moz-radial-gradient": Dn,
    "-ms-radial-gradient": Dn,
    "-o-radial-gradient": Dn,
    "-webkit-radial-gradient": Dn,
    "-webkit-gradient": dQ
  }, hQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return cr(r) && BQ(r);
      }).map(function(r) {
        return Os.parse(A, r);
      });
    }
  }, wQ = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (QA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, CQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter($A);
      }).map(Ed);
    }
  }, mQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(QA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(vQ);
    }
  }, vQ = function(A) {
    switch (A) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      default:
        return 0;
    }
  }, nr;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(nr || (nr = {}));
  var QQ = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(yQ);
      });
    }
  }, yQ = function(A) {
    return QA(A) || $A(A);
  }, gi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, bQ = gi("top"), FQ = gi("right"), UQ = gi("bottom"), EQ = gi("left"), pi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return Ed(t.filter($A));
      }
    };
  }, SQ = pi("top-left"), xQ = pi("top-right"), IQ = pi("bottom-right"), HQ = pi("bottom-left"), Bi = function(A) {
    return {
      name: "border-" + A + "-style",
      initialValue: "solid",
      prefix: false,
      type: 2,
      parse: function(e, t) {
        switch (t) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      }
    };
  }, TQ = Bi("top"), LQ = Bi("right"), kQ = Bi("bottom"), RQ = Bi("left"), hi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return un(t) ? t.number : 0;
      }
    };
  }, KQ = hi("top"), OQ = hi("right"), DQ = hi("bottom"), MQ = hi("left"), PQ = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, NQ = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, _Q = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).reduce(function(t, r) {
        return t | GQ(r.value);
      }, 0);
    }
  }, GQ = function(A) {
    switch (A) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  }, VQ = {
    name: "float",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    }
  }, $Q = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, Bo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(Bo || (Bo = {}));
  var WQ = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? Bo.STRICT : Bo.NORMAL;
    }
  }, XQ = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, dc = function(A, e) {
    return QA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : $A(A) ? EA(A, e) : e;
  }, jQ = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Os.parse(A, e);
    }
  }, zQ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, Ka = {
    name: "list-style-type",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        default:
          return -1;
      }
    }
  }, wi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, JQ = wi("top"), YQ = wi("right"), ZQ = wi("bottom"), qQ = wi("left"), Ay = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        switch (t.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          default:
            return 0;
        }
      });
    }
  }, ey = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, Ci = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, ty = Ci("top"), ry = Ci("right"), ny = Ci("bottom"), oy = Ci("left"), iy = {
    name: "text-align",
    initialValue: "left",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        default:
          return 0;
      }
    }
  }, ay = {
    name: "position",
    initialValue: "static",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    }
  }, sy = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Ra(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: qe.TRANSPARENT,
          offsetX: ne,
          offsetY: ne,
          blur: ne
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          mt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, ly = {
    name: "text-transform",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    }
  }, cy = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = fy[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, uy = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, dy = function(A) {
    var e = A.filter(function(s) {
      return s.type === 17;
    }).map(function(s) {
      return s.number;
    }), t = e[0], r = e[1];
    e[2], e[3];
    var n = e[4], o = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var i = e[12], a = e[13];
    return e[14], e[15], e.length === 16 ? [
      t,
      r,
      n,
      o,
      i,
      a
    ] : null;
  }, fy = {
    matrix: uy,
    matrix3d: dy
  }, fc = {
    type: 16,
    number: 50,
    flags: cn
  }, gy = [
    fc,
    fc
  ], py = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter($A);
      return t.length !== 2 ? gy : [
        t[0],
        t[1]
      ];
    }
  }, By = {
    name: "visible",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        default:
          return 0;
      }
    }
  }, Nr;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(Nr || (Nr = {}));
  var hy = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return Nr.BREAK_ALL;
        case "keep-all":
          return Nr.KEEP_ALL;
        default:
          return Nr.NORMAL;
      }
    }
  }, wy = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (gr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, Gd = {
    name: "time",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
      throw new Error("Unsupported time type");
    }
  }, Cy = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return gr(e) ? e.number : 1;
    }
  }, my = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, vy = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        switch (t.value) {
          case "underline":
            return 1;
          case "overline":
            return 2;
          case "line-through":
            return 3;
          case "none":
            return 4;
        }
        return 0;
      }).filter(function(t) {
        return t !== 0;
      });
    }
  }, Qy = {
    name: "font-family",
    initialValue: "",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      var t = [], r = [];
      return e.forEach(function(n) {
        switch (n.type) {
          case 20:
          case 0:
            t.push(n.value);
            break;
          case 17:
            t.push(n.number.toString());
            break;
          case 4:
            r.push(t.join(" ")), t.length = 0;
            break;
        }
      }), t.length && r.push(t.join(" ")), r.map(function(n) {
        return n.indexOf(" ") === -1 ? n : "'" + n + "'";
      });
    }
  }, yy = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, by = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return gr(e) ? e.number : QA(e) && e.value === "bold" ? 700 : 400;
    }
  }, Fy = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        return t.value;
      });
    }
  }, Uy = {
    name: "font-style",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        default:
          return "normal";
      }
    }
  }, XA = function(A, e) {
    return (A & e) !== 0;
  }, Ey = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, Sy = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Ud), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && gr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, xy = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Ud), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (QA(o) && o.value !== "none") {
          var a = i && gr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, Iy = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(un).map(function(t) {
        return Gd.parse(A, t);
      });
    }
  }, Hy = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(rQ);
      if (n.length % 2 !== 0) return null;
      for (var o = 0; o < n.length; o += 2) {
        var i = n[o].value, a = n[o + 1].value;
        r.push({
          open: i,
          close: a
        });
      }
      return r;
    }
  }, gc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, Ty = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Ra(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: ne,
          offsetY: ne,
          blur: ne,
          spread: ne,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Ra(i, "inset") ? r.inset = true : mt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, Ly = {
    name: "paint-order",
    initialValue: "normal",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      var t = [
        0,
        1,
        2
      ], r = [];
      return e.filter(QA).forEach(function(n) {
        switch (n.value) {
          case "stroke":
            r.push(1);
            break;
          case "fill":
            r.push(0);
            break;
          case "markers":
            r.push(2);
            break;
        }
      }), t.forEach(function(n) {
        r.indexOf(n) === -1 && r.push(n);
      }), r;
    }
  }, ky = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, Ry = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return un(e) ? e.number : 0;
    }
  }, Ky = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = q(e, Iy, t.animationDuration), this.backgroundClip = q(e, iQ, t.backgroundClip), this.backgroundColor = q(e, aQ, t.backgroundColor), this.backgroundImage = q(e, hQ, t.backgroundImage), this.backgroundOrigin = q(e, wQ, t.backgroundOrigin), this.backgroundPosition = q(e, CQ, t.backgroundPosition), this.backgroundRepeat = q(e, mQ, t.backgroundRepeat), this.backgroundSize = q(e, QQ, t.backgroundSize), this.borderTopColor = q(e, bQ, t.borderTopColor), this.borderRightColor = q(e, FQ, t.borderRightColor), this.borderBottomColor = q(e, UQ, t.borderBottomColor), this.borderLeftColor = q(e, EQ, t.borderLeftColor), this.borderTopLeftRadius = q(e, SQ, t.borderTopLeftRadius), this.borderTopRightRadius = q(e, xQ, t.borderTopRightRadius), this.borderBottomRightRadius = q(e, IQ, t.borderBottomRightRadius), this.borderBottomLeftRadius = q(e, HQ, t.borderBottomLeftRadius), this.borderTopStyle = q(e, TQ, t.borderTopStyle), this.borderRightStyle = q(e, LQ, t.borderRightStyle), this.borderBottomStyle = q(e, kQ, t.borderBottomStyle), this.borderLeftStyle = q(e, RQ, t.borderLeftStyle), this.borderTopWidth = q(e, KQ, t.borderTopWidth), this.borderRightWidth = q(e, OQ, t.borderRightWidth), this.borderBottomWidth = q(e, DQ, t.borderBottomWidth), this.borderLeftWidth = q(e, MQ, t.borderLeftWidth), this.boxShadow = q(e, Ty, t.boxShadow), this.color = q(e, PQ, t.color), this.direction = q(e, NQ, t.direction), this.display = q(e, _Q, t.display), this.float = q(e, VQ, t.cssFloat), this.fontFamily = q(e, Qy, t.fontFamily), this.fontSize = q(e, yy, t.fontSize), this.fontStyle = q(e, Uy, t.fontStyle), this.fontVariant = q(e, Fy, t.fontVariant), this.fontWeight = q(e, by, t.fontWeight), this.letterSpacing = q(e, $Q, t.letterSpacing), this.lineBreak = q(e, WQ, t.lineBreak), this.lineHeight = q(e, XQ, t.lineHeight), this.listStyleImage = q(e, jQ, t.listStyleImage), this.listStylePosition = q(e, zQ, t.listStylePosition), this.listStyleType = q(e, Ka, t.listStyleType), this.marginTop = q(e, JQ, t.marginTop), this.marginRight = q(e, YQ, t.marginRight), this.marginBottom = q(e, ZQ, t.marginBottom), this.marginLeft = q(e, qQ, t.marginLeft), this.opacity = q(e, Cy, t.opacity);
      var o = q(e, Ay, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = q(e, ey, t.overflowWrap), this.paddingTop = q(e, ty, t.paddingTop), this.paddingRight = q(e, ry, t.paddingRight), this.paddingBottom = q(e, ny, t.paddingBottom), this.paddingLeft = q(e, oy, t.paddingLeft), this.paintOrder = q(e, Ly, t.paintOrder), this.position = q(e, ay, t.position), this.textAlign = q(e, iy, t.textAlign), this.textDecorationColor = q(e, my, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = q(e, vy, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = q(e, sy, t.textShadow), this.textTransform = q(e, ly, t.textTransform), this.transform = q(e, cy, t.transform), this.transformOrigin = q(e, py, t.transformOrigin), this.visibility = q(e, By, t.visibility), this.webkitTextStrokeColor = q(e, ky, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = q(e, Ry, t.webkitTextStrokeWidth), this.wordBreak = q(e, hy, t.wordBreak), this.zIndex = q(e, wy, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Bt(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return XA(this.display, 4) || XA(this.display, 33554432) || XA(this.display, 268435456) || XA(this.display, 536870912) || XA(this.display, 67108864) || XA(this.display, 134217728);
    }, A;
  })(), Oy = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = q(e, Ey, t.content), this.quotes = q(e, Hy, t.quotes);
    }
    return A;
  })(), pc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = q(e, Sy, t.counterIncrement), this.counterReset = q(e, xy, t.counterReset);
    }
    return A;
  })(), q = function(A, e, t) {
    var r = new bd(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Fd(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, QA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return di.parse(A, o.parseComponentValue());
          case "color":
            return pt.parse(A, o.parseComponentValue());
          case "image":
            return Os.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return mt(a) ? a : ne;
          case "length-percentage":
            var s = o.parseComponentValue();
            return $A(s) ? s : ne;
          case "time":
            return Gd.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, Dy = "data-html2canvas-debug", My = function(A) {
    var e = A.getAttribute(Dy);
    switch (e) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  }, Oa = function(A, e) {
    var t = My(A);
    return t === 1 || e === t;
  }, je = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Oa(t, 3)) debugger;
      this.styles = new Ky(e, window.getComputedStyle(t, null)), Pa(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = ci(this.context, t), Oa(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), Py = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Bc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", kr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Mn = 0; Mn < Bc.length; Mn++) kr[Bc.charCodeAt(Mn)] = Mn;
  var Ny = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = kr[A.charCodeAt(r)], i = kr[A.charCodeAt(r + 1)], a = kr[A.charCodeAt(r + 2)], s = kr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, _y = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Gy = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Rt = 5, Ds = 11, Mi = 2, Vy = Ds - Rt, Vd = 65536 >> Rt, $y = 1 << Rt, Pi = $y - 1, Wy = 1024 >> Rt, Xy = Vd + Wy, jy = Xy, zy = 32, Jy = jy + zy, Yy = 65536 >> Ds, Zy = 1 << Vy, qy = Zy - 1, hc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Ab = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, eb = function(A, e) {
    var t = Ny(A), r = Array.isArray(t) ? Gy(t) : new Uint32Array(t), n = Array.isArray(t) ? _y(t) : new Uint16Array(t), o = 24, i = hc(n, o / 2, r[4] / 2), a = r[5] === 2 ? hc(n, (o + r[4]) / 2) : Ab(r, Math.ceil((o + r[4]) / 4));
    return new tb(r[0], r[1], r[2], r[3], i, a);
  }, tb = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Rt], t = (t << Mi) + (e & Pi), this.data[t];
        if (e <= 65535) return t = this.index[Vd + (e - 55296 >> Rt)], t = (t << Mi) + (e & Pi), this.data[t];
        if (e < this.highStart) return t = Jy - Yy + (e >> Ds), t = this.index[t], t += e >> Rt & qy, t = this.index[t], t = (t << Mi) + (e & Pi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), wc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Pn = 0; Pn < wc.length; Pn++) rb[wc.charCodeAt(Pn)] = Pn;
  var nb = 1, Ni = 2, _i = 3, Cc = 4, mc = 5, ob = 7, vc = 8, Gi = 9, Vi = 10, Qc = 11, yc = 12, bc = 13, Fc = 14, $i = 15, ib = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, ab = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, sb = eb(Py), me = "\xD7", Wi = "\xF7", lb = function(A) {
    return sb.get(A);
  }, cb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === Ni && i === _i) return me;
    if (o === Ni || o === _i || o === Cc || i === Ni || i === _i || i === Cc) return Wi;
    if (o === vc && [
      vc,
      Gi,
      Qc,
      yc
    ].indexOf(i) !== -1 || (o === Qc || o === Gi) && (i === Gi || i === Vi) || (o === yc || o === Vi) && i === Vi || i === bc || i === mc || i === ob || o === nb) return me;
    if (o === bc && i === Fc) {
      for (; n === mc; ) n = e[--r];
      if (n === Fc) return me;
    }
    if (o === $i && i === $i) {
      for (var a = 0; n === $i; ) a++, n = e[--r];
      if (a % 2 === 0) return me;
    }
    return Wi;
  }, ub = function(A) {
    var e = ib(A), t = e.length, r = 0, n = 0, o = e.map(lb);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = me; r < t && (i = cb(e, o, ++r)) === me; ) ;
        if (i !== me || r === t) {
          var a = ab.apply(null, e.slice(n, r));
          return n = r, {
            value: a,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, db = function(A) {
    for (var e = ub(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, fb = function(A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
        var n = t.getBoundingClientRect(), o = Math.round(n.height);
        if (A.body.removeChild(r), o === e) return true;
      }
    }
    return false;
  }, gb = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = ui(r.data).map(function(s) {
      return _A(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, pb = function() {
    return typeof new Image().crossOrigin < "u";
  }, Bb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, hb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Uc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, wb = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Da(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Ec(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", Uc(s) ? Ec(Da(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Uc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Da = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Ec = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, ee = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = fb(document);
      return Object.defineProperty(ee, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ee.SUPPORT_RANGE_BOUNDS && gb(document);
      return Object.defineProperty(ee, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = hb(document);
      return Object.defineProperty(ee, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? wb(document) : Promise.resolve(false);
      return Object.defineProperty(ee, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = pb();
      return Object.defineProperty(ee, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = Bb();
      return Object.defineProperty(ee, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(ee, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(ee, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, _r = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), Cb = function(A, e, t, r) {
    var n = Qb(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ee.SUPPORT_RANGE_BOUNDS) {
        var s = Sc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Ms(a), c = 0;
          l.forEach(function(d) {
            o.push(new _r(d, nt.fromDOMRectList(A, Sc(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new _r(a, nt.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new _r(a, mb(A, r))), r = u;
      }
      else ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, mb = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = ci(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return nt.EMPTY;
  }, Sc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Ms = function(A) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return db(A);
  }, vb = function(A, e) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return bb(A, e);
  }, Qb = function(A, e) {
    return e.letterSpacing !== 0 ? Ms(A) : vb(A, e);
  }, yb = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], bb = function(A, e) {
    for (var t = Ym(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = ui(i), s = "";
        a.forEach(function(l) {
          yb.indexOf(l) === -1 ? s += _A(l) : (s.length && r.push(s), r.push(_A(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Fb = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = Ub(t.data, r.textTransform), this.textBounds = Cb(e, this.text, r, t);
    }
    return A;
  })(), Ub = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(Eb, Sb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, Eb = /(^|\s|:|-|\(|\))([a-z])/g, Sb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, $d = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(je), Wd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(je), Xd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = ci(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(je), jd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), Ma = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(je), xb = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Ib = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], Hb = function(A) {
    return A.width > A.height ? new nt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new nt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Tb = function(A) {
    var e = A.type === Lb ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, ho = "checkbox", wo = "radio", Lb = "password", xc = 707406591, Ps = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Tb(r), (n.type === ho || n.type === wo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = Hb(n.bounds)), n.type) {
        case ho:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = xb;
          break;
        case wo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Ib;
          break;
      }
      return n;
    }
    return e;
  })(je), zd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(je), Jd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), Yd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = qd(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Pr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : qe.TRANSPARENT, i = r.contentWindow.document.body ? Pr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : qe.TRANSPARENT;
          n.backgroundColor = Bt(o) ? Bt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(je), kb = [
    "OL",
    "UL",
    "MENU"
  ], Ao = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, Af(n) && n.data.trim().length > 0) t.textNodes.push(new Fb(A, n, t.styles));
    else if (er(n)) if (nf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return Ao(A, a, t, r);
    });
    else {
      var i = Zd(A, n);
      i.styles.isVisible() && (Rb(n, i, r) ? i.flags |= 4 : Kb(i.styles) && (i.flags |= 2), kb.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Ao(A, n.shadowRoot, i, r) : !Co(n) && !ef(n) && !mo(n) && Ao(A, n, i, r));
    }
  }, Zd = function(A, e) {
    return Na(e) ? new $d(A, e) : tf(e) ? new Wd(A, e) : ef(e) ? new Xd(A, e) : Ob(e) ? new jd(A, e) : Db(e) ? new Ma(A, e) : Mb(e) ? new Ps(A, e) : mo(e) ? new zd(A, e) : Co(e) ? new Jd(A, e) : rf(e) ? new Yd(A, e) : new je(A, e);
  }, qd = function(A, e) {
    var t = Zd(A, e);
    return t.flags |= 4, Ao(A, e, t, t), t;
  }, Rb = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Ns(A) && t.styles.isTransparent();
  }, Kb = function(A) {
    return A.isPositioned() || A.isFloating();
  }, Af = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, er = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Pa = function(A) {
    return er(A) && typeof A.style < "u" && !eo(A);
  }, eo = function(A) {
    return typeof A.className == "object";
  }, Ob = function(A) {
    return A.tagName === "LI";
  }, Db = function(A) {
    return A.tagName === "OL";
  }, Mb = function(A) {
    return A.tagName === "INPUT";
  }, Pb = function(A) {
    return A.tagName === "HTML";
  }, ef = function(A) {
    return A.tagName === "svg";
  }, Ns = function(A) {
    return A.tagName === "BODY";
  }, tf = function(A) {
    return A.tagName === "CANVAS";
  }, Ic = function(A) {
    return A.tagName === "VIDEO";
  }, Na = function(A) {
    return A.tagName === "IMG";
  }, rf = function(A) {
    return A.tagName === "IFRAME";
  }, Hc = function(A) {
    return A.tagName === "STYLE";
  }, Nb = function(A) {
    return A.tagName === "SCRIPT";
  }, Co = function(A) {
    return A.tagName === "TEXTAREA";
  }, mo = function(A) {
    return A.tagName === "SELECT";
  }, nf = function(A) {
    return A.tagName === "SLOT";
  }, Tc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, _b = (function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, n = e.counterReset, o = true;
      r !== null && r.forEach(function(a) {
        var s = t.counters[a.counter];
        s && a.increment !== 0 && (o = false, s.length || s.push(1), s[Math.max(0, s.length - 1)] += a.increment);
      });
      var i = [];
      return o && n.forEach(function(a) {
        var s = t.counters[a.counter];
        i.push(a.counter), s || (s = t.counters[a.counter] = []), s.push(a.reset);
      }), i;
    }, A;
  })(), Lc = {
    integers: [
      1e3,
      900,
      500,
      400,
      100,
      90,
      50,
      40,
      10,
      9,
      5,
      4,
      1
    ],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ]
  }, kc = {
    integers: [
      9e3,
      8e3,
      7e3,
      6e3,
      5e3,
      4e3,
      3e3,
      2e3,
      1e3,
      900,
      800,
      700,
      600,
      500,
      400,
      300,
      200,
      100,
      90,
      80,
      70,
      60,
      50,
      40,
      30,
      20,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    values: [
      "\u0554",
      "\u0553",
      "\u0552",
      "\u0551",
      "\u0550",
      "\u054F",
      "\u054E",
      "\u054D",
      "\u054C",
      "\u054B",
      "\u054A",
      "\u0549",
      "\u0548",
      "\u0547",
      "\u0546",
      "\u0545",
      "\u0544",
      "\u0543",
      "\u0542",
      "\u0541",
      "\u0540",
      "\u053F",
      "\u053E",
      "\u053D",
      "\u053C",
      "\u053B",
      "\u053A",
      "\u0539",
      "\u0538",
      "\u0537",
      "\u0536",
      "\u0535",
      "\u0534",
      "\u0533",
      "\u0532",
      "\u0531"
    ]
  }, Gb = {
    integers: [
      1e4,
      9e3,
      8e3,
      7e3,
      6e3,
      5e3,
      4e3,
      3e3,
      2e3,
      1e3,
      400,
      300,
      200,
      100,
      90,
      80,
      70,
      60,
      50,
      40,
      30,
      20,
      19,
      18,
      17,
      16,
      15,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    values: [
      "\u05D9\u05F3",
      "\u05D8\u05F3",
      "\u05D7\u05F3",
      "\u05D6\u05F3",
      "\u05D5\u05F3",
      "\u05D4\u05F3",
      "\u05D3\u05F3",
      "\u05D2\u05F3",
      "\u05D1\u05F3",
      "\u05D0\u05F3",
      "\u05EA",
      "\u05E9",
      "\u05E8",
      "\u05E7",
      "\u05E6",
      "\u05E4",
      "\u05E2",
      "\u05E1",
      "\u05E0",
      "\u05DE",
      "\u05DC",
      "\u05DB",
      "\u05D9\u05D8",
      "\u05D9\u05D7",
      "\u05D9\u05D6",
      "\u05D8\u05D6",
      "\u05D8\u05D5",
      "\u05D9",
      "\u05D8",
      "\u05D7",
      "\u05D6",
      "\u05D5",
      "\u05D4",
      "\u05D3",
      "\u05D2",
      "\u05D1",
      "\u05D0"
    ]
  }, Vb = {
    integers: [
      1e4,
      9e3,
      8e3,
      7e3,
      6e3,
      5e3,
      4e3,
      3e3,
      2e3,
      1e3,
      900,
      800,
      700,
      600,
      500,
      400,
      300,
      200,
      100,
      90,
      80,
      70,
      60,
      50,
      40,
      30,
      20,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    values: [
      "\u10F5",
      "\u10F0",
      "\u10EF",
      "\u10F4",
      "\u10EE",
      "\u10ED",
      "\u10EC",
      "\u10EB",
      "\u10EA",
      "\u10E9",
      "\u10E8",
      "\u10E7",
      "\u10E6",
      "\u10E5",
      "\u10E4",
      "\u10F3",
      "\u10E2",
      "\u10E1",
      "\u10E0",
      "\u10DF",
      "\u10DE",
      "\u10DD",
      "\u10F2",
      "\u10DC",
      "\u10DB",
      "\u10DA",
      "\u10D9",
      "\u10D8",
      "\u10D7",
      "\u10F1",
      "\u10D6",
      "\u10D5",
      "\u10D4",
      "\u10D3",
      "\u10D2",
      "\u10D1",
      "\u10D0"
    ]
  }, Xt = function(A, e, t, r, n, o) {
    return A < e || A > t ? Yr(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, of = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, NA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (of(Math.abs(A), o, r, function(i) {
      return _A(Math.floor(i % o) + e);
    }) + n);
  }, yt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return of(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, Zt = 1, at = 2, st = 4, Rr = 8, Ze = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return Yr(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && XA(o, Zt) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && XA(o, at) || l === 1 && s === 1 && XA(o, st) && A > 100 || l === 1 && s > 1 && XA(o, Rr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Rc = "\u5341\u767E\u5343\u842C", Kc = "\u62FE\u4F70\u4EDF\u842C", Oc = "\u30DE\u30A4\u30CA\u30B9", Xi = "\uB9C8\uC774\uB108\uC2A4", Yr = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = NA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return yt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return Xt(A, 1, 3999, Lc, 3, r).toLowerCase();
      case 7:
        return Xt(A, 1, 3999, Lc, 3, r);
      case 8:
        return NA(A, 945, 969, false, r);
      case 9:
        return NA(A, 97, 122, false, r);
      case 10:
        return NA(A, 65, 90, false, r);
      case 11:
        return NA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return Xt(A, 1, 9999, kc, 3, r);
      case 35:
        return Xt(A, 1, 9999, kc, 3, r).toLowerCase();
      case 13:
        return NA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return NA(A, 6112, 6121, true, r);
      case 15:
        return yt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return yt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Rc, "\u8CA0", n, at | st | Rr);
      case 47:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Kc, "\u8CA0", n, Zt | at | st | Rr);
      case 42:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Rc, "\u8D1F", n, at | st | Rr);
      case 41:
        return Ze(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Kc, "\u8D1F", n, Zt | at | st | Rr);
      case 26:
        return Ze(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Oc, n, 0);
      case 25:
        return Ze(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Oc, n, Zt | at | st);
      case 31:
        return Ze(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", Xi, o, Zt | at | st);
      case 33:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", Xi, o, 0);
      case 32:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", Xi, o, Zt | at | st);
      case 18:
        return NA(A, 2406, 2415, true, r);
      case 20:
        return Xt(A, 1, 19999, Vb, 3, r);
      case 21:
        return NA(A, 2790, 2799, true, r);
      case 22:
        return NA(A, 2662, 2671, true, r);
      case 22:
        return Xt(A, 1, 10999, Gb, 3, r);
      case 23:
        return yt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return yt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return NA(A, 3302, 3311, true, r);
      case 28:
        return yt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return yt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return NA(A, 3792, 3801, true, r);
      case 37:
        return NA(A, 6160, 6169, true, r);
      case 38:
        return NA(A, 4160, 4169, true, r);
      case 39:
        return NA(A, 2918, 2927, true, r);
      case 40:
        return NA(A, 1776, 1785, true, r);
      case 43:
        return NA(A, 3046, 3055, true, r);
      case 44:
        return NA(A, 3174, 3183, true, r);
      case 45:
        return NA(A, 3664, 3673, true, r);
      case 46:
        return NA(A, 3872, 3881, true, r);
      default:
        return NA(A, 48, 57, true, r);
    }
  }, af = "data-html2canvas-ignore", Dc = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new _b(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = $b(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = jb(n).then(function() {
        return ue(r, void 0, void 0, function() {
          var c, u;
          return ae(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(Zb), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
                  2,
                  Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")
                ] : s.fonts && s.fonts.ready ? [
                  4,
                  s.fonts.ready
                ] : [
                  3,
                  2
                ];
              case 1:
                d.sent(), d.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [
                  4,
                  Xb(s)
                ] : [
                  3,
                  4
                ];
              case 3:
                d.sent(), d.label = 4;
              case 4:
                return typeof c == "function" ? [
                  2,
                  Promise.resolve().then(function() {
                    return c(s, u);
                  }).then(function() {
                    return n;
                  })
                ] : [
                  2,
                  n
                ];
            }
          });
        });
      });
      return s.open(), s.write(Jb(document.doctype) + "<html></html>"), Yb(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Oa(e, 2)) debugger;
      if (tf(e)) return this.createCanvasClone(e);
      if (Ic(e)) return this.createVideoClone(e);
      if (Hc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return Na(t) && (Na(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Tc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return ji(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(o, i) {
            return i && typeof i.cssText == "string" ? o + i.cssText : o;
          }, ""), n = e.cloneNode(false);
          return n.textContent = r, n;
        }
      } catch (o) {
        if (this.context.logger.error("Unable to access cssRules property", o), o.name !== "SecurityError") throw o;
      }
      return e.cloneNode(false);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(false);
      try {
        n.width = e.width, n.height = e.height;
        var o = e.getContext("2d"), i = n.getContext("2d");
        if (i) if (!this.options.allowTaint && o) i.putImageData(o.getImageData(0, 0, e.width, e.height), 0, 0);
        else {
          var a = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
          if (a) {
            var s = a.getContextAttributes();
            (s == null ? void 0 : s.preserveDrawingBuffer) === false && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
          }
          i.drawImage(e, 0, 0);
        }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!er(t) || !Nb(t) && !t.hasAttribute(af) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !er(t) || !Hc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (er(o) && nf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (Af(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && er(e) && (Pa(e) || eo(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Pa(n) && (this.clonedReferenceElement = n), Ns(n) && eF(n);
        var s = this.counters.parse(new pc(this.context, o)), l = this.resolvePseudoContent(e, n, i, Gr.BEFORE);
        Tc(e) && (t = true), Ic(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, Gr.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || eo(e)) && !rf(e) || t) && ji(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Co(e) || mo(e)) && (Co(n) || mo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new pc(this.context, r));
          var s = new Oy(this.context, r), l = a.createElement("html2canvaspseudoelement");
          ji(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(QA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var g = u.values.filter(cr), h = g[0], b = g[1];
                if (h && QA(h)) {
                  var m = o.counters.getCounterValue(h.value), y = b && QA(b) ? Ka.parse(o.context, b.value) : 3;
                  l.appendChild(a.createTextNode(Yr(m, y, false)));
                }
              } else if (u.name === "counters") {
                var w = u.values.filter(cr), h = w[0], v = w[1], b = w[2];
                if (h && QA(h)) {
                  var U = o.counters.getCounterValues(h.value), C = b && QA(b) ? Ka.parse(o.context, b.value) : 3, S = v && v.type === 0 ? v.value : "", H = U.map(function(T) {
                    return Yr(T, C, false);
                  }).join(S);
                  l.appendChild(a.createTextNode(H));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(gc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(gc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = _a + " " + Ga;
          var c = n === Gr.BEFORE ? " " + _a : " " + Ga;
          return eo(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), Gr;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(Gr || (Gr = {}));
  var $b = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(af, "true"), A.body.appendChild(t), t;
  }, Wb = function(A) {
    return new Promise(function(e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      A.onload = e, A.onerror = e;
    });
  }, Xb = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(Wb));
  }, jb = function(A) {
    return new Promise(function(e, t) {
      var r = A.contentWindow;
      if (!r) return t("No window assigned for iframe");
      var n = r.document;
      r.onload = A.onload = function() {
        r.onload = A.onload = null;
        var o = setInterval(function() {
          n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(o), e(A));
        }, 50);
      };
    });
  }, zb = [
    "all",
    "d",
    "content"
  ], ji = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      zb.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, Jb = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, Yb = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, Zb = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, qb = ":before", AF = ":after", _a = "___html2canvas___pseudoelement_before", Ga = "___html2canvas___pseudoelement_after", Mc = `{
    content: "" !important;
    display: none !important;
}`, eF = function(A) {
    tF(A, "." + _a + qb + Mc + `
         .` + Ga + AF + Mc);
  }, tF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, sf = (function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  })(), rF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ji(e) || aF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return ue(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return ae(this, function(a) {
          switch (a.label) {
            case 0:
              return t = sf.isSameOrigin(e), r = !zi(e) && this._options.useCORS === true && ee.SUPPORT_CORS_IMAGES && !t, n = !zi(e) && !t && !Ji(e) && typeof this._options.proxy == "string" && ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !zi(e) && !Ji(e) && !n && !r ? [
                2
              ] : (o = e, n ? [
                4,
                this.proxy(o)
              ] : [
                3,
                2
              ]);
            case 1:
              o = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [
                4,
                new Promise(function(s, l) {
                  var c = new Image();
                  c.onload = function() {
                    return s(c);
                  }, c.onerror = l, (sF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
                    return s(c);
                  }, 500), i._options.imageTimeout > 0 && setTimeout(function() {
                    return l("Timed out (" + i._options.imageTimeout + "ms) loading image");
                  }, i._options.imageTimeout);
                })
              ];
            case 3:
              return [
                2,
                a.sent()
              ];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r) throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function(o, i) {
        var a = ee.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
        s.onload = function() {
          if (s.status === 200) if (a === "text") o(s.response);
          else {
            var u = new FileReader();
            u.addEventListener("load", function() {
              return o(u.result);
            }, false), u.addEventListener("error", function(d) {
              return i(d);
            }, false), u.readAsDataURL(s.response);
          }
          else i("Failed to proxy resource " + n + " with status code " + s.status);
        }, s.onerror = i;
        var l = r.indexOf("?") > -1 ? "&" : "?";
        if (s.open("GET", "" + r + l + "url=" + encodeURIComponent(e) + "&responseType=" + a), a !== "text" && s instanceof XMLHttpRequest && (s.responseType = a), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          s.timeout = c, s.ontimeout = function() {
            return i("Timed out (" + c + "ms) proxying " + n);
          };
        }
        s.send();
      });
    }, A;
  })(), nF = /^data:image\/svg\+xml/i, oF = /^data:image\/.*;base64,/i, iF = /^data:image\/.*/i, aF = function(A) {
    return ee.SUPPORT_SVG_DRAWING || !lF(A);
  }, zi = function(A) {
    return iF.test(A);
  }, sF = function(A) {
    return oF.test(A);
  }, Ji = function(A) {
    return A.substr(0, 4) === "blob";
  }, lF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || nF.test(A);
  }, Z = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), jt = function(A, e, t) {
    return new Z(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, Nn = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = jt(this.start, this.startControl, e), n = jt(this.startControl, this.endControl, e), o = jt(this.endControl, this.end, e), i = jt(r, n, e), a = jt(n, o, e), s = jt(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), ye = function(A) {
    return A.type === 1;
  }, cF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Lr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Lr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = Lr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], f = Lr(t.borderBottomLeftRadius, r.width, r.height), g = f[0], h = f[1], b = [];
      b.push((o + s) / r.width), b.push((g + u) / r.width), b.push((i + h) / r.height), b.push((l + d) / r.height);
      var m = Math.max.apply(Math, b);
      m > 1 && (o /= m, i /= m, s /= m, l /= m, u /= m, d /= m, g /= m, h /= m);
      var y = r.width - s, w = r.height - d, v = r.width - u, U = r.height - h, C = t.borderTopWidth, S = t.borderRightWidth, H = t.borderBottomWidth, I = t.borderLeftWidth, p = EA(t.paddingTop, e.bounds.width), T = EA(t.paddingRight, e.bounds.width), R = EA(t.paddingBottom, e.bounds.width), k = EA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + I / 3, r.top + C / 3, o - I / 3, i - C / 3, mA.TOP_LEFT) : new Z(r.left + I / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + y, r.top + C / 3, s - S / 3, l - C / 3, mA.TOP_RIGHT) : new Z(r.left + r.width - S / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u - S / 3, d - H / 3, mA.BOTTOM_RIGHT) : new Z(r.left + r.width - S / 3, r.top + r.height - H / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || h > 0 ? LA(r.left + I / 3, r.top + U, g - I / 3, h - H / 3, mA.BOTTOM_LEFT) : new Z(r.left + I / 3, r.top + r.height - H / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + I * 2 / 3, r.top + C * 2 / 3, o - I * 2 / 3, i - C * 2 / 3, mA.TOP_LEFT) : new Z(r.left + I * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + y, r.top + C * 2 / 3, s - S * 2 / 3, l - C * 2 / 3, mA.TOP_RIGHT) : new Z(r.left + r.width - S * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u - S * 2 / 3, d - H * 2 / 3, mA.BOTTOM_RIGHT) : new Z(r.left + r.width - S * 2 / 3, r.top + r.height - H * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || h > 0 ? LA(r.left + I * 2 / 3, r.top + U, g - I * 2 / 3, h - H * 2 / 3, mA.BOTTOM_LEFT) : new Z(r.left + I * 2 / 3, r.top + r.height - H * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? LA(r.left + I / 2, r.top + C / 2, o - I / 2, i - C / 2, mA.TOP_LEFT) : new Z(r.left + I / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? LA(r.left + y, r.top + C / 2, s - S / 2, l - C / 2, mA.TOP_RIGHT) : new Z(r.left + r.width - S / 2, r.top + C / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u - S / 2, d - H / 2, mA.BOTTOM_RIGHT) : new Z(r.left + r.width - S / 2, r.top + r.height - H / 2), this.bottomLeftBorderStroke = g > 0 || h > 0 ? LA(r.left + I / 2, r.top + U, g - I / 2, h - H / 2, mA.BOTTOM_LEFT) : new Z(r.left + I / 2, r.top + r.height - H / 2), this.topLeftBorderBox = o > 0 || i > 0 ? LA(r.left, r.top, o, i, mA.TOP_LEFT) : new Z(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? LA(r.left + y, r.top, s, l, mA.TOP_RIGHT) : new Z(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u, d, mA.BOTTOM_RIGHT) : new Z(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || h > 0 ? LA(r.left, r.top + U, g, h, mA.BOTTOM_LEFT) : new Z(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? LA(r.left + I, r.top + C, Math.max(0, o - I), Math.max(0, i - C), mA.TOP_LEFT) : new Z(r.left + I, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? LA(r.left + Math.min(y, r.width - S), r.top + C, y > r.width + S ? 0 : Math.max(0, s - S), Math.max(0, l - C), mA.TOP_RIGHT) : new Z(r.left + r.width - S, r.top + C), this.bottomRightPaddingBox = u > 0 || d > 0 ? LA(r.left + Math.min(v, r.width - I), r.top + Math.min(w, r.height - H), Math.max(0, u - S), Math.max(0, d - H), mA.BOTTOM_RIGHT) : new Z(r.left + r.width - S, r.top + r.height - H), this.bottomLeftPaddingBox = g > 0 || h > 0 ? LA(r.left + I, r.top + Math.min(U, r.height - H), Math.max(0, g - I), Math.max(0, h - H), mA.BOTTOM_LEFT) : new Z(r.left + I, r.top + r.height - H), this.topLeftContentBox = o > 0 || i > 0 ? LA(r.left + I + k, r.top + C + p, Math.max(0, o - (I + k)), Math.max(0, i - (C + p)), mA.TOP_LEFT) : new Z(r.left + I + k, r.top + C + p), this.topRightContentBox = s > 0 || l > 0 ? LA(r.left + Math.min(y, r.width + I + k), r.top + C + p, y > r.width + I + k ? 0 : s - I + k, l - (C + p), mA.TOP_RIGHT) : new Z(r.left + r.width - (S + T), r.top + C + p), this.bottomRightContentBox = u > 0 || d > 0 ? LA(r.left + Math.min(v, r.width - (I + k)), r.top + Math.min(w, r.height + C + p), Math.max(0, u - (S + T)), d - (H + R), mA.BOTTOM_RIGHT) : new Z(r.left + r.width - (S + T), r.top + r.height - (H + R)), this.bottomLeftContentBox = g > 0 || h > 0 ? LA(r.left + I + k, r.top + U, Math.max(0, g - (I + k)), h - (H + R), mA.BOTTOM_LEFT) : new Z(r.left + I + k, r.top + r.height - (H + R));
    }
    return A;
  })(), mA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(mA || (mA = {}));
  var LA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case mA.TOP_LEFT:
        return new Nn(new Z(A, l), new Z(A, l - a), new Z(s - i, e), new Z(s, e));
      case mA.TOP_RIGHT:
        return new Nn(new Z(A, e), new Z(A + i, e), new Z(s, l - a), new Z(s, l));
      case mA.BOTTOM_RIGHT:
        return new Nn(new Z(s, e), new Z(s, e + a), new Z(A + i, l), new Z(A, l));
      case mA.BOTTOM_LEFT:
      default:
        return new Nn(new Z(s, l), new Z(s - i, l), new Z(A, e + a), new Z(A, e));
    }
  }, vo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, uF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Qo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, dF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), _n = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), fF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), gF = function(A) {
    return A.type === 0;
  }, lf = function(A) {
    return A.type === 1;
  }, pF = function(A) {
    return A.type === 2;
  }, Pc = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, BF = function(A, e, t, r, n) {
    return A.map(function(o, i) {
      switch (i) {
        case 0:
          return o.add(e, t);
        case 1:
          return o.add(e + r, t);
        case 2:
          return o.add(e + r, t + n);
        case 3:
          return o.add(e, t + n);
      }
      return o;
    });
  }, cf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), uf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new cF(this.container), this.container.styles.opacity < 1 && this.effects.push(new fF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new dF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = vo(this.curves), a = Qo(this.curves);
        Pc(i, a) ? this.effects.push(new _n(i, 6)) : (this.effects.push(new _n(i, 2)), this.effects.push(new _n(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !lf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = vo(r.curves), a = Qo(r.curves);
            Pc(i, a) || n.unshift(new _n(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return XA(s.target, e);
      });
    }, A;
  })(), Va = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = XA(n.flags, 4), i = XA(n.flags, 2), a = new uf(n, A);
      XA(n.styles.display, 2048) && r.push(a);
      var s = XA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new cf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(g, h) {
              return u > g.element.container.styles.zIndex.order ? (d = h, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var f = 0;
            l.positiveZIndex.some(function(g, h) {
              return u >= g.element.container.styles.zIndex.order ? (f = h + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        Va(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Va(a, e, t, s);
      XA(n.flags, 8) && df(n, s);
    });
  }, df = function(A, e) {
    for (var t = A instanceof Ma ? A.start : 1, r = A instanceof Ma ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof jd && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = Yr(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, hF = function(A) {
    var e = new uf(A, null), t = new cf(e), r = [];
    return Va(e, t, t, r), df(e.container, r), t;
  }, Nc = function(A, e) {
    switch (e) {
      case 0:
        return Fe(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Fe(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Fe(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Fe(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, wF = function(A, e) {
    switch (e) {
      case 0:
        return Fe(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Fe(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Fe(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Fe(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, CF = function(A, e) {
    switch (e) {
      case 0:
        return Fe(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Fe(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Fe(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Fe(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, mF = function(A, e) {
    switch (e) {
      case 0:
        return Gn(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return Gn(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return Gn(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return Gn(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, Gn = function(A, e) {
    var t = [];
    return ye(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), ye(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Fe = function(A, e, t, r) {
    var n = [];
    return ye(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), ye(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), ye(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), ye(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, ff = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, yo = function(A) {
    var e = A.styles, t = A.bounds, r = EA(e.paddingLeft, t.width), n = EA(e.paddingRight, t.width), o = EA(e.paddingTop, t.width), i = EA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, vF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? yo(e) : ff(e);
  }, QF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? yo(e) : ff(e);
  }, Yi = function(A, e, t) {
    var r = vF(qt(A.styles.backgroundOrigin, e), A), n = QF(qt(A.styles.backgroundClip, e), A), o = yF(qt(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = Lr(qt(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = bF(qt(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, zt = function(A) {
    return QA(A) && A.value === nr.AUTO;
  }, Vn = function(A) {
    return typeof A == "number";
  }, yF = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if ($A(i) && a && $A(a)) return [
      EA(i, t.width),
      EA(a, t.height)
    ];
    var s = Vn(o);
    if (QA(i) && (i.value === nr.CONTAIN || i.value === nr.COVER)) {
      if (Vn(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === nr.COVER) ? [
          t.width,
          t.width / o
        ] : [
          t.height * o,
          t.height
        ];
      }
      return [
        t.width,
        t.height
      ];
    }
    var c = Vn(r), u = Vn(n), d = c || u;
    if (zt(i) && (!a || zt(a))) {
      if (c && u) return [
        r,
        n
      ];
      if (!s && !d) return [
        t.width,
        t.height
      ];
      if (d && s) {
        var f = c ? r : n * o, g = u ? n : r / o;
        return [
          f,
          g
        ];
      }
      var h = c ? r : t.width, b = u ? n : t.height;
      return [
        h,
        b
      ];
    }
    if (s) {
      var m = 0, y = 0;
      return $A(i) ? m = EA(i, t.width) : $A(a) && (y = EA(a, t.height)), zt(i) ? m = y * o : (!a || zt(a)) && (y = m / o), [
        m,
        y
      ];
    }
    var w = null, v = null;
    if ($A(i) ? w = EA(i, t.width) : a && $A(a) && (v = EA(a, t.height)), w !== null && (!a || zt(a)) && (v = c && u ? w / r * n : t.height), v !== null && zt(i) && (w = c && u ? v / n * r : t.width), w !== null && v !== null) return [
      w,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, qt = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, bF = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new Z(Math.round(r.left), Math.round(r.top + i)),
          new Z(Math.round(r.left + r.width), Math.round(r.top + i)),
          new Z(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new Z(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new Z(Math.round(r.left + o), Math.round(r.top)),
          new Z(Math.round(r.left + o + a), Math.round(r.top)),
          new Z(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new Z(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new Z(Math.round(r.left + o), Math.round(r.top + i)),
          new Z(Math.round(r.left + o + a), Math.round(r.top + i)),
          new Z(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new Z(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new Z(Math.round(n.left), Math.round(n.top)),
          new Z(Math.round(n.left + n.width), Math.round(n.top)),
          new Z(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new Z(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, FF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", _c = "Hidden Text", UF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = FF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(_c)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(_c)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), gf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), EF = 1e4, SF = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new UF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), pF(t) && (this.ctx.globalAlpha = t.opacity), gF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), lf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return ue(this, void 0, void 0, function() {
        var r;
        return ae(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [
                4,
                this.renderStackContent(t)
              ] : [
                3,
                2
              ];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return ue(this, void 0, void 0, function() {
        return ae(this, function(r) {
          switch (r.label) {
            case 0:
              if (XA(t.container.flags, 16)) debugger;
              return t.container.styles.isVisible() ? [
                4,
                this.renderNodeBackgroundAndBorders(t)
              ] : [
                3,
                3
              ];
            case 1:
              return r.sent(), [
                4,
                this.renderNodeContent(t)
              ];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var o = this;
      if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var i = Ms(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = LF(t.fontFamily).join(", "), o = un(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [
          t.fontStyle,
          r,
          t.fontWeight,
          o,
          n
        ].join(" "),
        n,
        o
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return ue(this, void 0, void 0, function() {
        var n, o, i, a, s, l, c, u, d = this;
        return ae(this, function(f) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(g) {
            u.forEach(function(h) {
              switch (h) {
                case 0:
                  d.ctx.fillStyle = zA(r.color), d.renderTextWithLetterSpacing(g, r.letterSpacing, l);
                  var b = r.textShadow;
                  b.length && g.text.trim().length && (b.slice(0).reverse().forEach(function(m) {
                    d.ctx.shadowColor = zA(m.color), d.ctx.shadowOffsetX = m.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = m.offsetY.number * d.options.scale, d.ctx.shadowBlur = m.blur.number, d.renderTextWithLetterSpacing(g, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = zA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(m) {
                    switch (m) {
                      case 1:
                        d.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + l), g.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + c), g.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && g.text.trim().length && (d.ctx.strokeStyle = zA(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var o = yo(t), i = Qo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s, y, y, l, c, u, d, v, f, g, U, h, b, m, y, w, v, U;
        return ae(this, function(C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, C.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                4,
                this.renderTextNode(s, o)
              ]) : [
                3,
                4
              ];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              if (!(r instanceof $d)) return [
                3,
                8
              ];
              C.label = 5;
            case 5:
              return C.trys.push([
                5,
                7,
                ,
                8
              ]), [
                4,
                this.context.cache.match(r.src)
              ];
            case 6:
              return y = C.sent(), this.renderReplacedElement(r, n, y), [
                3,
                8
              ];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof Wd && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Xd)) return [
                3,
                12
              ];
              C.label = 9;
            case 9:
              return C.trys.push([
                9,
                11,
                ,
                12
              ]), [
                4,
                this.context.cache.match(r.svg)
              ];
            case 10:
              return y = C.sent(), this.renderReplacedElement(r, n, y), [
                3,
                12
              ];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof Yd && r.tree ? (l = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [
                4,
                l.render(r.tree)
              ]) : [
                3,
                14
              ];
            case 13:
              c = C.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
            case 14:
              if (r instanceof Ps && (u = Math.min(r.bounds.width, r.bounds.height), r.type === ho ? r.checked && (this.ctx.save(), this.path([
                new Z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new Z(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new Z(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new Z(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new Z(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new Z(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new Z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = zA(xc), this.ctx.fill(), this.ctx.restore()) : r.type === wo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = zA(xc), this.ctx.fill(), this.ctx.restore())), xF(r) && r.value.length) {
                switch (d = this.createFontStyle(o), v = d[0], f = d[1], g = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = HF(r.styles.textAlign), U = yo(r), h = 0, r.styles.textAlign) {
                  case 1:
                    h += U.width / 2;
                    break;
                  case 2:
                    h += U.width;
                    break;
                }
                b = U.add(h, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new Z(U.left, U.top),
                  new Z(U.left + U.width, U.top),
                  new Z(U.left + U.width, U.top + U.height),
                  new Z(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new _r(r.value, b), o.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!XA(r.styles.display, 2048)) return [
                3,
                20
              ];
              if (r.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (m = r.styles.listStyleImage, m.type !== 0) return [
                3,
                18
              ];
              y = void 0, w = m.url, C.label = 15;
            case 15:
              return C.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(w)
              ];
            case 16:
              return y = C.sent(), this.ctx.drawImage(y, r.bounds.left - (y.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + w), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new nt(r.bounds.left, r.bounds.top + EA(r.styles.paddingTop, r.bounds.width), r.bounds.width, dc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new _r(t.listValue, U), o.letterSpacing, dc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, s, m, l, c, m, u, d, m, f, g, m, h, b, m;
        return ae(this, function(y) {
          switch (y.label) {
            case 0:
              if (XA(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              y.sent(), r = 0, n = t.negativeZIndex, y.label = 2;
            case 2:
              return r < n.length ? (m = n[r], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                5
              ];
            case 3:
              y.sent(), y.label = 4;
            case 4:
              return r++, [
                3,
                2
              ];
            case 5:
              return [
                4,
                this.renderNodeContent(t.element)
              ];
            case 6:
              y.sent(), o = 0, i = t.nonInlineLevel, y.label = 7;
            case 7:
              return o < i.length ? (m = i[o], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                10
              ];
            case 8:
              y.sent(), y.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, y.label = 11;
            case 11:
              return a < s.length ? (m = s[a], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                14
              ];
            case 12:
              y.sent(), y.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, y.label = 15;
            case 15:
              return l < c.length ? (m = c[l], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                18
              ];
            case 16:
              y.sent(), y.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              u = 0, d = t.inlineLevel, y.label = 19;
            case 19:
              return u < d.length ? (m = d[u], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                22
              ];
            case 20:
              y.sent(), y.label = 21;
            case 21:
              return u++, [
                3,
                19
              ];
            case 22:
              f = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, y.label = 23;
            case 23:
              return f < g.length ? (m = g[f], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                26
              ];
            case 24:
              y.sent(), y.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              h = 0, b = t.positiveZIndex, y.label = 27;
            case 27:
              return h < b.length ? (m = b[h], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              y.sent(), y.label = 29;
            case 29:
              return h++, [
                3,
                27
              ];
            case 30:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, o) {
        var i = ye(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), ye(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, n, o) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, o), this.ctx.fill(), this.ctx.translate(-n, -o);
    }, e.prototype.resizeImage = function(t, r, n) {
      var o;
      if (t.width === r && t.height === n) return t;
      var i = (o = this.canvas.ownerDocument) !== null && o !== void 0 ? o : document, a = i.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, n);
      var s = a.getContext("2d");
      return s.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), a;
    }, e.prototype.renderBackgroundImage = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s;
        return ae(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, d, f, p, P, X, k, _, H, g, p, P, X, k, _, h, b, m, y, w, v, U, C, S, H, I, p, T, R, k, _, M, P, X, J, D, j, eA, nA, K, $, V;
                return ae(this, function(Y) {
                  switch (Y.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      u = void 0, d = c.url, Y.label = 1;
                    case 1:
                      return Y.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(d)
                      ];
                    case 2:
                      return u = Y.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return Y.sent(), o.context.logger.error("Error loading background-image " + d), [
                        3,
                        4
                      ];
                    case 4:
                      return u && (f = Yi(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), p = f[0], P = f[1], X = f[2], k = f[3], _ = f[4], H = o.ctx.createPattern(o.resizeImage(u, k, _), "repeat"), o.renderRepeat(p, H, P, X)), [
                        3,
                        6
                      ];
                    case 5:
                      gQ(c) ? (g = Yi(t, r, [
                        null,
                        null,
                        null
                      ]), p = g[0], P = g[1], X = g[2], k = g[3], _ = g[4], h = lQ(c.angle, k, _), b = h[0], m = h[1], y = h[2], w = h[3], v = h[4], U = document.createElement("canvas"), U.width = k, U.height = _, C = U.getContext("2d"), S = C.createLinearGradient(m, w, y, v), cc(c.stops, b).forEach(function(dA) {
                        return S.addColorStop(dA.stop, zA(dA.color));
                      }), C.fillStyle = S, C.fillRect(0, 0, k, _), k > 0 && _ > 0 && (H = o.ctx.createPattern(U, "repeat"), o.renderRepeat(p, H, P, X))) : pQ(c) && (I = Yi(t, r, [
                        null,
                        null,
                        null
                      ]), p = I[0], T = I[1], R = I[2], k = I[3], _ = I[4], M = c.position.length === 0 ? [
                        Ks
                      ] : c.position, P = EA(M[0], k), X = EA(M[M.length - 1], _), J = cQ(c, P, X, k, _), D = J[0], j = J[1], D > 0 && j > 0 && (eA = o.ctx.createRadialGradient(T + P, R + X, 0, T + P, R + X, D), cc(c.stops, D * 2).forEach(function(dA) {
                        return eA.addColorStop(dA.stop, zA(dA.color));
                      }), o.path(p), o.ctx.fillStyle = eA, D !== j ? (nA = t.bounds.left + 0.5 * t.bounds.width, K = t.bounds.top + 0.5 * t.bounds.height, $ = j / D, V = 1 / $, o.ctx.save(), o.ctx.translate(nA, K), o.ctx.transform(1, 0, 0, $, 0, 0), o.ctx.translate(-nA, -K), o.ctx.fillRect(T, V * (R - K) + K, k, _ * V), o.ctx.restore()) : o.ctx.fill())), Y.label = 6;
                    case 6:
                      return r--, [
                        2
                      ];
                  }
                });
              }, o = this, i = 0, a = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                5,
                n(s)
              ]) : [
                3,
                4
              ];
            case 2:
              l.sent(), l.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, n) {
      return ue(this, void 0, void 0, function() {
        return ae(this, function(o) {
          return this.path(Nc(n, r)), this.ctx.fillStyle = zA(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return ue(this, void 0, void 0, function() {
        var i, a;
        return ae(this, function(s) {
          switch (s.label) {
            case 0:
              return r < 3 ? [
                4,
                this.renderSolidBorder(t, n, o)
              ] : [
                3,
                2
              ];
            case 1:
              return s.sent(), [
                2
              ];
            case 2:
              return i = wF(o, n), this.path(i), this.ctx.fillStyle = zA(t), this.ctx.fill(), a = CF(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, u = this;
        return ae(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !Bt(r.backgroundColor) || r.backgroundImage.length, o = [
                {
                  style: r.borderTopStyle,
                  color: r.borderTopColor,
                  width: r.borderTopWidth
                },
                {
                  style: r.borderRightStyle,
                  color: r.borderRightColor,
                  width: r.borderRightWidth
                },
                {
                  style: r.borderBottomStyle,
                  color: r.borderBottomColor,
                  width: r.borderBottomWidth
                },
                {
                  style: r.borderLeftStyle,
                  color: r.borderLeftColor,
                  width: r.borderLeftWidth
                }
              ], i = IF(qt(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Bt(r.backgroundColor) || (this.ctx.fillStyle = zA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var g = vo(t.curves), h = f.inset ? 0 : EF, b = BF(g, -h + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(g), u.ctx.clip(), u.mask(b)) : (u.mask(g), u.ctx.clip(), u.path(b)), u.ctx.shadowOffsetX = f.offsetX.number + h, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = zA(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? zA(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !Bt(c.color) && c.width > 0 ? c.style !== 2 ? [
                3,
                5
              ] : [
                4,
                this.renderDashedDottedBorder(c.color, c.width, a, t.curves, 2)
              ] : [
                3,
                11
              ]) : [
                3,
                13
              ];
            case 4:
              return d.sent(), [
                3,
                11
              ];
            case 5:
              return c.style !== 3 ? [
                3,
                7
              ] : [
                4,
                this.renderDashedDottedBorder(c.color, c.width, a, t.curves, 3)
              ];
            case 6:
              return d.sent(), [
                3,
                11
              ];
            case 7:
              return c.style !== 4 ? [
                3,
                9
              ] : [
                4,
                this.renderDoubleBorder(c.color, c.width, a, t.curves)
              ];
            case 8:
              return d.sent(), [
                3,
                11
              ];
            case 9:
              return [
                4,
                this.renderSolidBorder(c.color, a, t.curves)
              ];
            case 10:
              d.sent(), d.label = 11;
            case 11:
              a++, d.label = 12;
            case 12:
              return s++, [
                3,
                3
              ];
            case 13:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, n, o, i) {
      return ue(this, void 0, void 0, function() {
        var a, s, l, c, u, d, f, g, h, b, m, y, w, v, U, C, U, C;
        return ae(this, function(S) {
          return this.ctx.save(), a = mF(o, n), s = Nc(o, n), i === 2 && (this.path(s), this.ctx.clip()), ye(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), ye(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - u) : f = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, h = r < 3 ? r * 2 : r, i === 3 && (g = r, h = r), b = true, f <= g * 2 ? b = false : f <= g * 2 + h ? (m = f / (2 * g + h), g *= m, h *= m) : (y = Math.floor((f + h) / (g + h)), w = (f - y * g) / (y - 1), v = (f - (y + 1) * g) / y, h = v <= 0 || Math.abs(h - w) < Math.abs(h - v) ? w : v), b && (i === 3 ? this.ctx.setLineDash([
            0,
            g + h
          ]) : this.ctx.setLineDash([
            g,
            h
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = zA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (ye(s[0]) && (U = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([
            new Z(U.end.x, U.end.y),
            new Z(C.start.x, C.start.y)
          ]), this.ctx.stroke()), ye(s[1]) && (U = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([
            new Z(U.end.x, U.end.y),
            new Z(C.start.x, C.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return ue(this, void 0, void 0, function() {
        var r;
        return ae(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = zA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = hF(t), [
                4,
                this.renderStack(r)
              ];
            case 1:
              return n.sent(), this.applyEffects([]), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(gf), xF = function(A) {
    return A instanceof Jd || A instanceof zd ? true : A instanceof Ps && A.type !== wo && A.type !== ho;
  }, IF = function(A, e) {
    switch (A) {
      case 0:
        return vo(e);
      case 2:
        return uF(e);
      default:
        return Qo(e);
    }
  }, HF = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, TF = [
    "-apple-system",
    "system-ui"
  ], LF = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return TF.indexOf(e) === -1;
    }) : A;
  }, kF = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n;
        return ae(this, function(o) {
          switch (o.label) {
            case 0:
              return r = Da(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                RF(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = zA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(gf), RF = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, KF = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), OF = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new KF({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new rF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), DF = function(A, e) {
    return e === void 0 && (e = {}), MF(A, e);
  };
  typeof window < "u" && sf.setContext(window);
  var MF = function(A, e) {
    return ue(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, f, g, h, b, m, y, w, v, U, S, C, S, H, I, p, T, R, k, _, M, P, X, J, D, j, eA, nA, K, $;
      return ae(this, function(V) {
        switch (V.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (H = e.allowTaint) !== null && H !== void 0 ? H : false,
              imageTimeout: (I = e.imageTimeout) !== null && I !== void 0 ? I : 15e3,
              proxy: e.proxy,
              useCORS: (p = e.useCORS) !== null && p !== void 0 ? p : false
            }, o = ya({
              logging: (T = e.logging) !== null && T !== void 0 ? T : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (R = e.windowWidth) !== null && R !== void 0 ? R : r.innerWidth,
              windowHeight: (k = e.windowHeight) !== null && k !== void 0 ? k : r.innerHeight,
              scrollX: (_ = e.scrollX) !== null && _ !== void 0 ? _ : r.pageXOffset,
              scrollY: (M = e.scrollY) !== null && M !== void 0 ? M : r.pageYOffset
            }, a = new nt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new OF(o, a), l = (P = e.foreignObjectRendering) !== null && P !== void 0 ? P : false, c = {
              allowTaint: (X = e.allowTaint) !== null && X !== void 0 ? X : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Dc(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = V.sent(), g = Ns(d) || Pb(d) ? Bm(d.ownerDocument) : ci(s, d), h = g.width, b = g.height, m = g.left, y = g.top, w = PF(s, d, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (D = (J = e.scale) !== null && J !== void 0 ? J : r.devicePixelRatio) !== null && D !== void 0 ? D : 1,
              x: ((j = e.x) !== null && j !== void 0 ? j : 0) + m,
              y: ((eA = e.y) !== null && eA !== void 0 ? eA : 0) + y,
              width: (nA = e.width) !== null && nA !== void 0 ? nA : Math.ceil(h),
              height: (K = e.height) !== null && K !== void 0 ? K : Math.ceil(b)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), S = new kF(s, v), [
              4,
              S.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = V.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + m + "," + y + " with size " + h + "x" + b + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = qd(s, d), w === C.styles.backgroundColor && (C.styles.backgroundColor = qe.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), S = new SF(s, v), [
              4,
              S.render(C)
            ];
          case 4:
            U = V.sent(), V.label = 5;
          case 5:
            return (!(($ = e.removeContainer) !== null && $ !== void 0) || $) && (Dc.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, PF = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Pr(A, getComputedStyle(r.documentElement).backgroundColor) : qe.TRANSPARENT, o = r.body ? Pr(A, getComputedStyle(r.body).backgroundColor) : qe.TRANSPARENT, i = typeof t == "string" ? Pr(A, t) : t === null ? qe.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Bt(n) ? Bt(o) ? i : o : n : i;
  }, Zi = {
    body: {
      background: "rgb(32, 32, 32)"
    },
    rbgcpInputLabel: {
      color: "rgb(212, 212, 212)"
    },
    rbgcpControlBtnWrapper: {
      background: "rgb(54, 54, 54)"
    },
    rbgcpInput: {
      border: "none",
      color: "white",
      background: "rgb(54, 54, 54)"
    },
    rbgcpControlBtn: {
      color: "rgb(212, 212, 212)"
    },
    rbgcpControlIcon: {
      stroke: "rgb(212, 212, 212)"
    },
    rbgcpControlIcon2: {
      fill: "rgb(212, 212, 212)"
    },
    rbgcpControlInput: {
      color: "white"
    },
    rbgcpControlBtnSelected: {
      background: "black",
      color: "#568cf5"
    },
    rbgcpDegreeIcon: {
      color: "rgb(212, 212, 212)"
    },
    rbgcpColorModelDropdown: {
      background: "rgb(32, 32, 32)"
    },
    rbgcpComparibleLabel: {
      color: "rgb(212, 212, 212)"
    }
  }, JA = function() {
    return JA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, JA.apply(this, arguments);
  }, NF = {
    body: {
      boxSizing: "border-box",
      background: "rgb(255, 255, 255)"
    },
    rbgcpControlBtn: {
      paddingLeft: "8px",
      paddingRight: "8px",
      lineHeight: "1",
      borderRadius: "4px",
      fontWeight: 700,
      fontSize: "12px",
      height: "24px",
      transition: "all 160ms ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255, 255, 255, 0)",
      boxShadow: "1px 1px 3px rgba(0, 0, 0, 0)",
      color: "rgb(86, 86, 86)"
    },
    rbgcpControlIcon: {
      stroke: "rgb(50, 49, 54)"
    },
    rbgcpControlIconBtn: {
      width: "30px",
      height: "24px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    rbgcpControlBtnWrapper: {
      height: "28px",
      background: "#e9e9f5",
      borderRadius: "6px",
      padding: "2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    rbgcpColorModelDropdown: {
      position: "absolute",
      right: "-2px",
      top: "34px",
      padding: "5px",
      background: "#e9e9f5",
      zIndex: 1e8,
      borderRadius: "6px",
      boxShadow: "1px 1px 14px 1px rgba(0, 0, 0, 0.25)"
    },
    rbgcpEyedropperCover: {
      position: "fixed",
      left: "0px",
      top: "0px",
      zIndex: 1e8,
      width: "100vw",
      height: "100vh",
      cursor: "copy"
    },
    rbgcpControlInput: {
      height: "24px",
      borderRadius: "4px",
      border: "none",
      outline: "none",
      textAlign: "center",
      width: "34px",
      fontWeight: 500,
      color: "rgb(50, 49, 54)",
      fontSize: "13px",
      background: "transparent"
    },
    rbgcpInputLabel: {
      textAlign: "center",
      lineHeight: "1.2",
      fontWeight: 700,
      color: "rgb(86, 86, 86)",
      fontSize: "11px"
    },
    rbgcpInput: {
      height: "32px",
      borderRadius: "6px",
      border: "1px solid #bebebe",
      width: "100%",
      padding: "2px",
      outline: "none",
      color: "black",
      fontWeight: 400,
      textAlign: "center",
      background: "transparent",
      fontSize: "15px"
    },
    rbgcpHandle: {
      position: "absolute",
      border: "2px solid white",
      borderRadius: "50%",
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
      width: "18px",
      height: "18px",
      zIndex: 1e3,
      transition: "all 30ms linear",
      boxSizing: "border-box",
      willChange: "transform",
      outline: "none"
    },
    rbgcpCanvasWrapper: {
      borderRadius: "6px",
      overflow: "hidden",
      height: "294px"
    },
    rbgcpCheckered: {
      background: `linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.18) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.18) 75%,
      rgba(0, 0, 0, 0.18) 0
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.18) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.18) 75%,
      rgba(0, 0, 0, 0.18) 0
    ),
    white`,
      backgroundRepeat: "repeat, repeat",
      backgroundPosition: "0px 0, 7px 7px",
      transformOrigin: "0 0 0",
      backgroundOrigin: "padding-box, padding-box",
      backgroundClip: "border-box, border-box",
      backgroundSize: "14px 14px, 14px 14px",
      boxShadow: "none",
      textShadow: "none",
      transition: "none",
      transform: "scaleX(1) scaleY(1) scaleZ(1)",
      borderRadius: "10px"
    },
    rbgcpOpacityOverlay: {
      position: "absolute",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      borderRadius: "10px"
    },
    rbgcpGradientHandleWrap: {
      position: "absolute",
      zIndex: 1e4,
      top: "-2px",
      outline: "none"
    },
    rbgcpGradientHandle: {
      border: "2px solid white",
      borderRadius: "50%",
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    rbgcpControlIcon2: {
      fill: "#323136"
    },
    rbgcpControlBtnSelected: {
      background: "white",
      color: "#568cf5",
      boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
    },
    rbgcpComparibleLabel: {
      color: "#323136"
    }
  }, _F = function(A, e) {
    var t = JA({}, NF);
    if (A) for (var r in Zi) Object.prototype.hasOwnProperty.call(Zi, r) && (t[r] = JA(JA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Zi[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = JA(JA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Gc = function(A, e) {
    return A ? JA(JA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : JA({}, e.rbgcpControlBtn);
  }, Vr = function(A, e) {
    return A ? JA(JA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : JA({}, e.rbgcpControlIconBtn);
  }, $n = function(A, e) {
    return A ? JA(JA(JA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : JA(JA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Me = function() {
    return Me = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Me.apply(this, arguments);
  }, GF = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "";
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), x.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, VF = function(A) {
    var e = A.onSelect, t = yA().defaultStyles, r = B.useState(null), n = r[0], o = r[1], i = B.useState(false), a = i[0], s = i[1], l = B.useState(false), c = l[0], u = l[1], d = function() {
      var h = document.getElementById("root");
      s(true), DF(h).then(function(b) {
        var m = document.createElement("canvas"), y = m.getContext("2d", {
          willReadFrequently: true
        });
        h && y && (m.width = h.offsetWidth * 2, m.height = h.offsetHeight * 2, y.drawImage(b, 0, 0)), o(y);
      });
    }, f = function(h) {
      if (h.stopPropagation(), n) {
        var b = h.pageX, m = h.pageY, y = b * 2, w = m * 2, v = n.getImageData(y, w, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      u(false), s(false);
    }, g = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var h = new window.EyeDropper(), b = new window.AbortController();
        h.open({
          signal: b.signal
        }).then(function(m) {
          var y = re(m.sRGBHex), w = y.toRgb(), v = w.r, U = w.g, C = w.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(C, ", 1)")), u(false);
        }).catch(function(m) {
          console.log(m), u(false);
        });
      }
    };
    return x.createElement("div", null, x.createElement("div", {
      onClick: g,
      id: "rbgcp-eyedropper-btn",
      style: Me(Me({}, t.rbgcpEyedropperBtn), Vr(a, t))
    }, x.createElement(GF, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && x.createElement(pm, null, x.createElement("div", {
      onClick: function(h) {
        return f(h);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, $a = function() {
    return $a = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, $a.apply(this, arguments);
  }, qi = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = B.useState(false), d = u[0], f = u[1], g = B.useState(2), h = g[0], b = g[1], m = e * (i - 18);
    B.useEffect(function() {
      var C;
      b(((C = t == null ? void 0 : t.current) === null || C === void 0 ? void 0 : C.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var y = function() {
      f(false);
    }, w = function(C) {
      d && o(lr(C, c));
    }, v = function(C) {
      d || o(lr(C, c));
    }, U = function() {
      f(true);
    };
    return B.useEffect(function() {
      var C = function() {
        y();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), x.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, x.createElement("div", {
      onMouseMove: function(C) {
        return w(C);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, x.createElement("div", {
      style: $a({
        left: m,
        top: h
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), x.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: h + 2,
        zIndex: 10,
        textShadow: "1px 1px 1px rgba(0,0,0,.6)"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(l),
      onMouseMove: function(C) {
        return w(C);
      },
      onClick: function(C) {
        return v(C);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), x.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(C) {
        return v(C);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, $F = function(A) {
    var e = A.openAdvanced, t = yA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, f = B.useRef(null), g = B.useRef(null), h = B.useRef(null);
    QC(f, a == null ? void 0 : a.h, d * 100, i), yC(g, a == null ? void 0 : a.h, u * 100, i), bC(h, a == null ? void 0 : a.h, u * 100, i);
    var b = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: d
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: u,
        l: w / 100
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, y = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return x.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, x.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-between",
        height: e ? 98 : 0,
        overflow: "hidden",
        transition: "height 100ms linear"
      },
      id: "rbgcp-advanced-controls-inner".concat(l)
    }, x.createElement(qi, {
      value: u,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: b,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), x.createElement(qi, {
      value: d,
      config: r,
      reffy: g,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), x.createElement(qi, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: h,
      label: "Brightness",
      callback: y,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, xt = function() {
    return xt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, xt.apply(this, arguments);
  }, WF = function(A) {
    var e = A.openComparibles, t = yA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var f = d.toRgb(), g = f.r, h = f.g, b = f.b, m = f.a;
      n("rgba(".concat(g, ",").concat(h, ",").concat(b, ",").concat(m, ")"));
    };
    return x.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, x.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, x.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), x.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, f) {
      return x.createElement("div", {
        key: f,
        id: "rbgcp-comparible-analogous-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), x.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, f) {
      return x.createElement("div", {
        key: f,
        id: "rbgcp-comparible-monochromatic-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), x.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, f) {
      return x.createElement("div", {
        key: f,
        id: "rbgcp-comparible-triad-color-".concat(f).concat(i),
        style: {
          width: "calc(100% / 3)",
          height: 28,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), x.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, f) {
      return x.createElement("div", {
        key: f,
        id: "rbgcp-comparible-tetrad-color-".concat(f).concat(i),
        style: {
          width: "25%",
          height: 28,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    }))));
  }, xA = function() {
    return xA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, xA.apply(this, arguments);
  }, XF = function() {
    var A = yA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return x.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, x.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: xA(xA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, x.createElement(am, {
      color: i ? "#568CF5" : ""
    })), x.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: xA(xA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, x.createElement(sm, {
      color: a ? "#568CF5" : ""
    })));
  }, jF = function() {
    var A = yA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, sr(parseInt(a), 0, 100));
    };
    return x.createElement("div", {
      style: xA(xA(xA(xA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, x.createElement(fm, null), x.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: xA(xA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, zF = function() {
    var A = yA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = sr(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return x.createElement("div", {
      style: xA(xA(xA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, x.createElement(dm, null), x.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: xA(xA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), x.createElement("div", {
      style: xA(xA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, JF = function() {
    var A = yA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return xA(xA({}, l), {
            value: c === t - 1 ? li(l) : ln(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return x.createElement("div", {
      onClick: i,
      style: xA(xA({}, Vr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, x.createElement(im, null));
  }, Vc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = yA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return x.createElement("div", {
      style: xA(xA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && x.createElement(XF, null), x.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && x.createElement(zF, null)), !r && x.createElement(jF, null), x.createElement(JF, null));
  }, Zr = function() {
    return Zr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Zr.apply(this, arguments);
  }, YF = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = yA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? x.createElement("div", {
      style: {
        width: 1
      }
    }) : x.createElement("div", {
      style: Zr({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, x.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Gc(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), x.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Gc(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, ZF = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = yA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, f) {
      e && (d.stopPropagation(), o(f), t(false));
    };
    return x.createElement("div", {
      style: Zr({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, x.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: $n(n === "rgb", i)
    }, "RGB"), x.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: $n(n === "hsl", i)
    }, "HSL"), x.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: $n(n === "hsv", i)
    }, "HSV"), x.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: $n(n === "cmyk", i)
    }, "CMYK"));
  }, qF = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, f = d === void 0 ? false : d, g = A.hideGradientControls, h = g === void 0 ? false : g, b = A.hideGradientType, m = b === void 0 ? false : b, y = A.hideGradientAngle, w = y === void 0 ? false : y, v = A.hideGradientStop, U = v === void 0 ? false : v, C = yA(), S = C.config, H = C.onChange, I = C.isGradient, p = C.handleChange, T = C.previous, R = C.defaultStyles, k = C.pickerIdSuffix, _ = S.defaultColor, M = S.defaultGradient, P = B.useState(false), X = P[0], J = P[1], D = B.useState(false), j = D[0], eA = D[1], nA = B.useState(false), K = nA[0], $ = nA[1], V = o && a && l && u, Y = (e = T == null ? void 0 : T.color) !== null && e !== void 0 ? e : _, dA = (t = T == null ? void 0 : T.gradient) !== null && t !== void 0 ? t : M, iA = function() {
      H(Y);
    }, tA = function() {
      H(dA);
    }, z = o && a && l && u, oA = z && f;
    return oA ? I && !h ? x.createElement(Vc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }) : null : x.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, x.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(k)
    }, x.createElement(YF, {
      hideColorTypeBtns: f,
      setGradient: tA,
      isGradient: I,
      setSolid: iA,
      locales: r
    }), !z && x.createElement("div", {
      style: Zr({
        display: V ? "none" : ""
      }, R.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(k)
    }, !o && x.createElement(VF, {
      onSelect: p
    }), !a && x.createElement("div", {
      id: "rbgcp-advanced-btn".concat(k),
      onClick: function() {
        return $(!K);
      },
      style: Vr(K, R)
    }, x.createElement(lm, {
      color: K ? "#568CF5" : ""
    })), !l && x.createElement("div", {
      style: Vr(X, R),
      onClick: function() {
        return J(!X);
      },
      id: "rbgcp-comparibles-btn".concat(k)
    }, x.createElement(um, {
      color: X ? "#568CF5" : ""
    })), !u && x.createElement("div", {
      id: "rbgcp-color-model-btn".concat(k),
      onClick: function() {
        return eA(!j);
      },
      style: Vr(j, R)
    }, x.createElement(cm, {
      color: j ? "#568CF5" : ""
    }), x.createElement(ZF, {
      openInputType: j,
      setOpenInputType: eA
    })))), !a && x.createElement($F, {
      openAdvanced: K
    }), !l && x.createElement(WF, {
      openComparibles: X
    }), I && !h && x.createElement(Vc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }));
  }, Pe = function() {
    return Pe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Pe.apply(this, arguments);
  }, $c = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, AU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = yA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, f = function(h) {
      var b = o == null ? void 0 : o.map(function(m, y) {
        return Pe(Pe({}, m), {
          value: y === h ? li(m) : ln(m)
        });
      });
      c(b);
    }, g = function(h) {
      h.stopPropagation(), f(t), r(true);
    };
    return x.createElement("div", {
      onMouseDown: function(h) {
        return g(h);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Pe(Pe({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, x.createElement("div", {
      style: Pe(Pe({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && x.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, eU = function() {
    var A = yA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = B.useState(false), u = c[0], d = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var g = function(w) {
      var v, U = lr(w, l), C = (v = $c($c([], t.map(function(S) {
        return Pe(Pe({}, S), {
          value: ln(S)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(S, H) {
        return S.left - H.left;
      });
      s(C);
    }, h = function() {
      d(false);
    }, b = function(w) {
      u || (g(w), d(true));
    }, m = function(w) {
      u && i(o, lr(w, l));
    }, y = function() {
      h();
    };
    return B.useEffect(function() {
      return window.addEventListener("mouseup", y), function() {
        window.removeEventListener("mouseup", y);
      };
    }), x.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, x.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(w) {
        return b(w);
      },
      onMouseMove: function(w) {
        return m(w);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(w, v) {
      return x.createElement(AU, {
        i: v,
        left: w.left,
        key: "".concat(v, "-").concat(w),
        setDragging: d
      });
    }));
  }, tU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, f = A.hideGradientStop, g = A.hideGradientAngle, h = A.hideColorTypeBtns, b = A.hideAdvancedSliders, m = A.hideGradientControls, y = yA(), w = y.isGradient, v = y.pickerIdSuffix;
    return x.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !u && x.createElement(em, null), !s && x.createElement(qF, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: f,
      hideColorTypeBtns: h,
      hideGradientAngle: g,
      hideAdvancedSliders: b,
      hideGradientControls: m
    }), w && x.createElement(eU, null), !r && x.createElement(FC, null), !i && x.createElement(tm, null), !n && x.createElement(kC, null), !o && x.createElement(om, {
      presets: t
    }));
  }, bo = function() {
    return bo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, bo.apply(this, arguments);
  };
  function rU(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, f = A.hideHue, g = f === void 0 ? false : f, h = A.presets, b = h === void 0 ? [] : h, m = A.hideEyeDrop, y = m === void 0 ? false : m, w = A.hideAdvancedSliders, v = w === void 0 ? false : w, U = A.hideColorGuide, C = U === void 0 ? false : U, S = A.hideInputType, H = S === void 0 ? false : S, I = A.hideColorTypeBtns, p = I === void 0 ? false : I, T = A.hideGradientType, R = T === void 0 ? false : T, k = A.hideGradientAngle, _ = k === void 0 ? false : k, M = A.hideGradientStop, P = M === void 0 ? false : M, X = A.hideGradientControls, J = X === void 0 ? false : X, D = A.locales, j = D === void 0 ? rm : D, eA = A.width, nA = eA === void 0 ? 294 : eA, K = A.height, $ = K === void 0 ? 294 : K, V = A.style, Y = V === void 0 ? {} : V, dA = A.className, iA = A.disableDarkMode, tA = iA === void 0 ? false : iA, z = A.disableLightMode, oA = z === void 0 ? false : z, aA = A.hidePickerSquare, Q = aA === void 0 ? false : aA, E = A.showHexAlpha, F = E === void 0 ? false : E, N = A.config, W = N === void 0 ? {} : N, G = pC(r), sA = typeof window > "u" || tA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), cA = _F(sA, Y), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return x.createElement("div", {
      className: dA,
      style: bo(bo({}, cA.body), {
        width: nA
      })
    }, x.createElement(mC, {
      value: G,
      onChange: n,
      squareWidth: nA,
      passedConfig: W,
      squareHeight: $,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: F,
      defaultStyles: cA,
      pickerIdSuffix: fA
    }, x.createElement(tU, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: g,
      presets: b,
      hideEyeDrop: y,
      hideAdvancedSliders: v,
      hideColorGuide: C,
      hideInputType: H,
      hideColorTypeBtns: p,
      hideGradientType: R,
      hideGradientAngle: _,
      hideGradientStop: P,
      hideGradientControls: J,
      hidePickerSquare: Q,
      locales: j
    })));
  }
  function nU(A) {
    if (!A || A.trim() === "") return {
      isValid: true,
      normalizedValue: ""
    };
    const e = A.trim();
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e) ? {
      isValid: true,
      normalizedValue: e
    } : /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i.test(e) ? {
      isValid: true,
      normalizedValue: e
    } : /^(linear-gradient|radial-gradient)\(.*\)$/i.test(e) ? {
      isValid: true,
      normalizedValue: e
    } : {
      isValid: false,
      normalizedValue: e
    };
  }
  Wc = function({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, [o, i] = B.useState(e[n] || ""), [a, s] = B.useState(false), [l, c] = B.useState(null), u = B.useRef(null), d = B.useRef(e[n]), f = r.context.theme, g = (w) => {
      if (w == null) {
        i(""), s(false), t({
          [n]: null
        });
        return;
      }
      if (typeof w != "string") {
        console.warn("CollectionGradientColorPicker: Non-string value received:", w), s(true);
        return;
      }
      if (w.trim() === "") {
        i(""), s(false), t({
          [n]: null
        });
        return;
      }
      const U = nU(w);
      i(w), U.isValid ? (s(false), t({
        [n]: U.normalizedValue || null
      })) : s(true);
    }, h = (w) => g(w), b = (w) => g(w.target.value), m = () => g(null), y = !!l;
    return B.useEffect(() => {
      const w = e[n];
      w !== d.current && (d.current = w, i(w || ""), s(false));
    }, [
      e[n]
    ]), B.useEffect(() => {
      if (!y) return;
      let w = null;
      const v = setTimeout(() => {
        const U = document.querySelector('[aria-hidden="false"][role="tooltip"]');
        U && (w = new ResizeObserver(() => {
          var _a2;
          (_a2 = u.current) == null ? void 0 : _a2.updatePosition();
        }), w.observe(U));
      }, 0);
      return () => {
        clearTimeout(v), w && w.disconnect();
      };
    }, [
      y
    ]), L.jsx(L.Fragment, {
      children: L.jsxs(Xu, {
        theme: f,
        children: [
          L.jsxs(Ie, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              L.jsx(nC, {
                variant: "standard",
                fullWidth: true,
                value: o,
                error: a,
                helperText: a ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: b,
                slotProps: {
                  htmlInput: {
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      paddingBottom: "2px",
                      fontSize: "80%"
                    }
                  }
                }
              }),
              o && L.jsx(Vh, {
                onClick: m,
                title: va.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: L.jsx(aC, {})
              }),
              L.jsx(Ie, {
                onClick: (w) => {
                  c(w.currentTarget);
                },
                title: va.t("choose_color"),
                sx: {
                  mt: o ? "4px" : "-2px",
                  px: "4px",
                  py: o ? "4px" : "3px",
                  backgroundColor: o ? f.name === "light" ? f.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: a ? `1px solid ${f.palette.error.main}` : o ? `1px solid ${f.name === "light" ? f.palette.grey[400] : f.palette.common.black}` : `1px dashed ${f.name === "light" ? f.palette.grey[400] : f.palette.text.secondary}`,
                  opacity: a ? 0.6 : 1
                },
                children: L.jsx(Ie, {
                  sx: {
                    width: o ? "36px" : "38px",
                    height: o ? "14px" : "18px",
                    borderRadius: "2px",
                    background: a ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : o || "transparent"
                  }
                })
              })
            ]
          }),
          L.jsx(ed, {
            action: u,
            "aria-hidden": !y,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)",
                  maxHeight: "calc(100vh - 100px)",
                  overflow: "auto"
                }
              }
            },
            open: y,
            anchorEl: l,
            onClose: () => c(null),
            transformOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            children: L.jsx(Ie, {
              sx: {
                borderRadius: "6px"
              },
              children: L.jsx(rU, {
                value: o || "",
                onChange: h,
                hidePresets: true,
                hideInputs: true,
                hideInputType: true
              })
            })
          })
        ]
      })
    });
  };
  let oU, aU;
  CU = (A) => {
    const { groupName: e = "", allFields: t = true } = A || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "icon"
        }),
        hidden: "data.noIcon"
      },
      {
        name: `icon${e}`,
        label: "icon",
        type: "image"
      },
      {
        name: `iconSmall${e}`,
        label: "small_icon",
        type: "icon64"
      },
      {
        name: `iconSize${e}`,
        label: "icon_size",
        type: "slider",
        min: 1,
        max: 500,
        step: 1,
        hidden: "data.noIcon"
      },
      {
        name: `iconColor${e}`,
        label: "icon_color",
        type: "color",
        hidden: "data.noIcon"
      },
      {
        name: `iconXOffset${e}`,
        label: "icon_x_offset",
        type: "text",
        default: "0px",
        hidden: "data.noIcon"
      },
      {
        name: `iconYOffset${e}`,
        label: "icon_y_offset",
        type: "text",
        default: "0px",
        hidden: "data.noIcon"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "header"
        }),
        hidden: (o, i) => o.noHeader && !t
      },
      {
        name: `noHeader${e}`,
        type: "checkbox",
        label: "no_header"
      },
      {
        name: `noHeaderIcon${e}`,
        type: "checkbox",
        label: "no_header_icon",
        default: false,
        hidden: "data.noHeader"
      },
      {
        name: `header${e}`,
        label: "header_text",
        type: "html",
        default: "",
        hidden: "data.noHeader"
      },
      {
        name: `headerSize${e}`,
        label: "header_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1,
        hidden: "data.noHeader"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "value"
        })
      },
      {
        name: `alias${e}`,
        label: "alias",
        type: "html",
        default: ""
      },
      {
        name: `value${e}`,
        label: "value",
        type: "text",
        default: "",
        hidden: (o, i) => {
          var _a2;
          return ((_a2 = o.oidObject) == null ? void 0 : _a2.type) === "boolean" || o.name === "valueActive";
        }
      },
      {
        name: `valueSize${e}`,
        label: "value_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "footer"
        }),
        hidden: (o, i) => o.noFooter && !t
      },
      {
        name: `noFooter${e}`,
        label: "no_footer",
        type: "checkbox"
      },
      {
        name: `footer${e}`,
        label: "footer_text",
        type: "html",
        default: "",
        hidden: "data.noFooter"
      },
      {
        name: `footerSize${e}`,
        label: "footer_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1,
        hidden: "data.noFooter"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "characteristics"
        })
      },
      {
        name: `noCard${e}`,
        label: "without_card",
        type: "checkbox"
      },
      {
        name: `squaredCorner${e}`,
        label: "squared_corner",
        type: "checkbox"
      },
      {
        name: `textColor${e}`,
        label: "text_color",
        type: "color"
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(Re, {})
      },
      {
        name: `outlined${e}`,
        label: "outlined",
        type: "checkbox"
      },
      {
        name: `outlinedFrame${e}`,
        label: "outlined_frame",
        type: "checkbox"
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(Re, {})
      },
      {
        name: `basePadding${e}`,
        label: "base_padding",
        type: "slider",
        min: 0,
        max: 10,
        step: 0.1,
        default: 1
      },
      {
        name: `baseElevation${e}`,
        label: "base_elevation",
        type: "slider",
        min: 0,
        max: 24,
        step: 1,
        default: 4
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "geometry"
        })
      },
      {
        name: `square${e}`,
        label: "square",
        type: "checkbox",
        hidden: "data.circle || data.ellipse"
      },
      {
        name: `ellipse${e}`,
        label: "ellipse",
        type: "checkbox",
        hidden: "data.circle || data.square"
      },
      {
        name: `circle${e}`,
        label: "circle",
        type: "checkbox",
        hidden: "data.ellipse || data.square"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "background"
        })
      },
      {
        name: `background${e}`,
        label: "background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => L.jsx(Wc, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
      },
      {
        name: `backgroundColor${e}`,
        label: "background_color",
        type: "color"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Re, {
          dividerText: "frame_background"
        })
      },
      {
        name: `frameBackground${e}`,
        label: "frame_background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => L.jsx(Wc, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
      },
      {
        name: `frameBackgroundColor${e}`,
        label: "frame_background_color",
        type: "color"
      }
    ];
    if (t) {
      const o = [
        `alias${e}`,
        `value${e}`
      ];
      return r.filter((i) => !o.includes(i.name));
    }
    const n = [
      "allFieldsDivider",
      `noHeader${e}`,
      `noHeaderIcon${e}`,
      e === "Active" ? `value${e}` : "",
      `noFooter${e}`,
      `noCard${e}`,
      `squaredCorner${e}`,
      `outlined${e}`,
      `outlinedFrame${e}`,
      `basePadding${e}`,
      `baseElevation${e}`,
      `square${e}`,
      `ellipse${e}`,
      `circle${e}`
    ];
    return r.filter((o) => !n.includes(o.name));
  };
  oU = () => {
    const { isSignalVisible: A, refService: e, widget: t } = B.useContext(sn), r = B.useMemo(() => {
      const o = [], i = Number(t.data["signals-count"]) || 0;
      for (let a = 0; a < i; a++) A(a) && o.push(a);
      return o;
    }, [
      t.data,
      A
    ]), n = B.useMemo(() => {
      const o = {};
      return r.forEach((i) => {
        o[i] = t.data[`signals-color-${i}`];
      }), o;
    }, [
      t.data,
      r
    ]);
    B.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const i = e.current.children, a = [];
      Array.from(i).forEach((s) => {
        const l = s.children[0];
        l && l instanceof HTMLElement && l.className === "vis-signal-icon iconOwn" && a.push(l);
      }), a.forEach((s, l) => {
        const c = r[l], u = c !== void 0 ? n[c] : void 0;
        u ? (s.style.color = u, s.style.filter = "drop-shadow(0px 10000px 0)", s.style.transform = "translateY(-10000px)") : (s.style.color = "", s.style.filter = "", s.style.transform = "");
      });
    }, [
      r,
      n,
      e
    ]);
  };
  iU = (A, e = 28) => {
    const [t, r] = B.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), n = B.useCallback((i) => {
      if (i.length === 0) return;
      const a = i[0], { width: s, height: l } = a.contentRect, c = Math.round(s), u = Math.round(l), d = c <= u + e + 12 ? c - e - 12 : u;
      r({
        width: c,
        height: u,
        maxWidth: d
      });
    }, [
      e
    ]), o = B.useMemo(() => A ? typeof A == "object" && "current" in A ? A.current : A : null, [
      A
    ]);
    return B.useEffect(() => {
      if (!o) {
        r({
          width: void 0,
          height: void 0,
          maxWidth: void 0
        });
        return;
      }
      const i = new ResizeObserver(n);
      try {
        i.observe(o);
      } catch (a) {
        console.warn("ResizeObserver failed to observe element:", a);
        return;
      }
      return () => {
        try {
          i.disconnect();
        } catch (a) {
          console.warn("ResizeObserver cleanup failed:", a);
        }
      };
    }, [
      o,
      n
    ]), t;
  };
  aU = (A) => {
    const { widget: e } = B.useContext(sn), [t, r] = B.useState("100%"), [n, o] = B.useState("100%"), { width: i, height: a } = iU(A), s = B.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), l = B.useMemo(() => s.basePadding * 16, [
      s.basePadding
    ]);
    return B.useEffect(() => {
      if (!i || !a || i < 0 || a < 0) return;
      if (!s.isSquare && !s.isCircle) {
        r("100%"), o("100%");
        return;
      }
      if (!(i >= l && a >= l)) {
        r("0px"), o("0px");
        return;
      }
      const u = i - l, d = a - l, f = Math.min(u, d);
      r(`${f}px`), o(`${f}px`);
    }, [
      i,
      a,
      l,
      s.isSquare,
      s.isCircle
    ]), {
      width: t,
      height: n
    };
  };
  sU = B.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = B.useRef(null), s = B.useRef(null), [l, c] = B.useState(null), [u, d] = B.useState(null), f = B.useRef(null), [g, h] = B.useState(null), b = B.useContext(sn);
    if (!b) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: m, widget: y } = b, w = y.data.oidObject, { backgroundStyles: v, borderStyles: U } = ks(y.style), C = B.useRef(null), { width: S, height: H } = aU(l || C), I = (t || t === 0 || t === false) && `${t}${(w == null ? void 0 : w.unit) === void 0 ? "" : w == null ? void 0 : w.unit}`;
    oU();
    const p = w == null ? void 0 : w._id, T = e.footer || e.alias || e.value || I || "";
    return B.useEffect(() => {
      y.data.noFooter || g && (g.innerHTML = T);
    }, [
      T,
      y.data.noFooter,
      g
    ]), B.useEffect(() => {
      y.data.noHeader || u && (u.innerHTML = e.header);
    }, [
      e.header,
      y.data.noHeader,
      u
    ]), B.useImperativeHandle(i, () => ({
      get paper0() {
        return a == null ? void 0 : a.current;
      },
      get paper1() {
        return s == null ? void 0 : s.current;
      },
      get header() {
        return f == null ? void 0 : f.current;
      }
    })), L.jsxs(fa, {
      ref: a,
      className: "BASE-PAPER-0",
      square: y.data.squaredCorner,
      variant: y.data.outlinedFrame ? "outlined" : "elevation",
      sx: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...v,
        border: m ? U.border : null,
        borderWidth: m ? U.borderWidth : null,
        borderStyle: m ? U.borderStyle : null,
        borderRadius: m ? U.borderRadius : null,
        borderColor: m ? U.borderColor : e.frameBackgroundColorActive || e.frameBackgroundColor || U.borderColor,
        background: m ? y.data.frameBackgroundColorActive || e.frameBackgroundColorActive || e.frameBackgroundColor || y.data.frameBackgroundActive || e.frameBackgroundActive || e.frameBackground : "transparent"
      },
      children: [
        !!r && L.jsxs(L.Fragment, {
          children: [
            L.jsx(Ie, {
              sx: {
                width: y.data.noHeader ? "0%" : "100%",
                height: y.data.noHeader ? "0%" : "auto",
                mt: (y.data.basePadding ?? 8) / 2,
                mb: -(y.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Jn, {
                ref: (R) => {
                  d(R), f.current = R;
                },
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  color: y.data.textColor || e.textColorActive || e.textColor
                }
              })
            }),
            L.jsx(Ie, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: y.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: L.jsx(fa, {
                ref: s,
                className: "BASE-PAPER-1",
                elevation: y.data.outlined ? 0 : Number(y.data.baseElevation) || 0,
                square: !y.data.basePadding || y.data.squaredCorner,
                variant: y.data.outlined ? "outlined" : "elevation",
                sx: {
                  overflow: "hidden",
                  width: S,
                  height: H,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: m ? U.borderColor : e.backgroundColorActive || e.backgroundColor || U.borderColor,
                  background: m ? y.data.backgroundColorActive || n && e.backgroundColorActive || e.backgroundColor || y.data.backgroundActive || n && e.backgroundActive || e.background : "transparent",
                  borderRadius: y.data.circle || y.data.ellipse ? "50%" : null,
                  ...o
                },
                children: A
              })
            }),
            L.jsx(Ie, {
              sx: {
                width: y.data.noFooter ? "0%" : "100%",
                height: y.data.noFooter ? "0%" : "auto",
                mt: -(y.data.basePadding ?? 8) / 2,
                mb: (y.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Jn, {
                ref: h,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  color: y.data.textColor || e.textColorActive || e.textColor
                }
              })
            })
          ]
        }),
        !r && L.jsx(Ie, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: L.jsx(Jn, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: p ? `${p} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  sU.displayName = "CollectionBase";
  let lU;
  lU = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  mU = (A, e) => lU(A) ? !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  } : {};
  function Jt(A, e) {
    return A[e];
  }
  function Fr(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  cU = (A) => typeof A == "number" ? `${A / 100}rem` : null;
  vU = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = B.useContext(sn), o = r[`${A}Object`], { fontStyles: i, textStyles: a, backgroundStyles: s } = ks(t.style), [l, c] = B.useState(), u = n(A), d = o == null ? void 0 : o.name, f = B.useCallback(cU, []), g = B.useCallback((v, U = "") => {
      const C = `${v}${U}`;
      return Jt(r, C);
    }, [
      r
    ]), { states: h, widgetStates: b, minValue: m, maxValue: y } = B.useMemo(() => (() => {
      const U = [], C = {};
      let S = null, H = null;
      const I = o == null ? void 0 : o.type, p = (o == null ? void 0 : o.commonStates) || {}, T = Object.entries(p);
      if (I === "number" || I === "string" || I === "boolean" || I === "mixed") {
        for (let R = 1; R <= r.values_count; R++) {
          const k = r[`value${R}`], _ = r[`alias${R}`], M = o == null ? void 0 : o.unit;
          if (k != null && /\S/.test(String(k))) {
            const P = T.find(([J]) => J === String(k));
            U.push({
              value: P ? I === "number" ? Number(P[0]) : String(P[0]) : I === "number" ? Number(k) : k,
              label: String(_ && String(_).trim() !== "" ? _ : `${k}${M}`).replace(/(\r\n|\n|\r)/gm, ""),
              fontSize: (() => {
                if (String(u) === String(k) && typeof r.valueSizeActive == "number") return f(r.valueSizeActive);
                const D = Jt(r, `valueSize${R}`);
                if (typeof D == "number") return f(D);
                if (Fr(r) && typeof r.markerTextSize == "number") return f(r.markerTextSize);
                if (typeof r.valueSize == "number") return f(r.valueSize);
              })(),
              textColor: (() => {
                if (String(u) === String(k) && r.textColorActive) return r.textColorActive;
                const D = Jt(r, `textColor${R}`);
                if (D) return D;
                if (Fr(r) && r.markerTextColor) return r.markerTextColor;
                if (r.textColor) return r.textColor;
              })(),
              icon: (() => {
                const J = r[`icon${R}`] || r[`iconSmall${R}`] || r.icon || r.iconSmall;
                return typeof J == "string" ? J : void 0;
              })(),
              iconSize: typeof r[`iconSize${R}`] == "number" ? r[`iconSize${R}`] : void 0,
              iconWidth: (() => {
                if (String(u) === String(k) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const D = Jt(r, `iconSize${R}`);
                return typeof D == "number" ? D : Fr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconHeight: (() => {
                if (String(u) === String(k) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const D = Jt(r, `iconSize${R}`);
                return typeof D == "number" ? D : Fr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconXOffset: (() => {
                const J = g("iconXOffset", String(R));
                return J && J !== "0px" ? J : "0px";
              })(),
              iconYOffset: (() => {
                const J = g("iconYOffset", String(R));
                return J && J !== "0px" ? J : "0px";
              })(),
              iconColor: Jt(r, `iconColor${R}`) || (Fr(r) ? r.markerIconColor : void 0) || r.iconColor || e.palette.primary.main,
              backgroundColor: r.backgroundColor || s.backgroundColor || "",
              backgroundColorActive: g("backgroundColor", String(R)),
              background: String(r.background || s.background || ""),
              backgroundActive: g("background", String(R)),
              frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
              frameBackgroundColorActive: g("frameBackgroundColor", String(R)),
              frameBackground: String(r.frameBackground || s.background || ""),
              frameBackgroundActive: g("frameBackground", String(R))
            });
            const X = String(P ? P[0] : k);
            C[X] = _ && String(_).trim() !== "" ? _ : `${k}${M}`;
          }
        }
        if (I === "number" && U.length) {
          const R = U.map((k) => typeof k.value == "number" ? k.value : NaN).filter((k) => !isNaN(k));
          R.length > 0 && (S = Math.min(...R), H = Math.max(...R));
        }
      }
      return {
        states: U,
        widgetStates: C,
        minValue: S,
        maxValue: H
      };
    })(), [
      o == null ? void 0 : o.type,
      o == null ? void 0 : o.commonStates,
      o == null ? void 0 : o.unit,
      r,
      e.palette.primary.main,
      s.backgroundColor,
      s.background,
      g,
      u,
      f
    ]), w = B.useMemo(() => {
      const v = (C = "") => ({
        textColor: r.textColor || a.color || e.palette.primary.main,
        textColorActive: g("textColor", String(C)),
        header: String(r.headerActive || g("header", String(C)) || r.header || d || "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: f(r.headerSize) || f(r.headerSizeActive) || f(g("headerSize", String(C))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        footer: String(r.footerActive || g("footer", String(C)) || r.footer || "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: f(r.footerSize) || f(r.footerSizeActive) || f(g("footerSize", String(C))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        alias: String(g("alias", String(C)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const S = g("value", String(C));
          return S != null ? `${S}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
        })(),
        valueSize: f(r.valueSize) || (typeof i.fontSize == "string" ? i.fontSize : null),
        valueSizeActive: typeof g("valueSize", String(C)) == "number" ? f(g("valueSize", String(C))) : null,
        icon: (() => {
          if (r.noIcon) return false;
          const S = r.icon || r.iconSmall;
          return typeof S == "string" ? S : false;
        })(),
        iconActive: (() => {
          const S = !r.noIcon && (g("icon", String(C)) || g("iconSmall", String(C)));
          return typeof S == "string" ? S : false;
        })(),
        iconSize: typeof r.iconSize == "number" && `calc(24px * ${r.iconSize} / 100)` || "24px",
        iconSizeActive: (() => {
          const S = g("iconSize", String(C));
          return S ? `calc(24px * ${S} / 100)` : false;
        })(),
        iconSizeActiveOnly: g("iconSize", String(C)),
        iconSizeOnly: g("iconSize", String(C)) || g("iconSize", String(C)) === 0 ? g("iconSize", String(C)) : r.iconSize,
        iconColor: r.iconColor,
        iconColorActive: g("iconColor", String(C)),
        iconHover: r.iconHover ? `${r.iconHover}%` : void 0,
        iconHoverActive: (() => {
          const S = g("iconHover", String(C));
          return S ? `${S}%` : void 0;
        })(),
        iconXOffset: !!g("iconXOffset", String(C)) && g("iconXOffset", String(C)) !== "0px" && g("iconXOffset", String(C)) || "0px",
        iconYOffset: !!g("iconYOffset", String(C)) && g("iconYOffset", String(C)) !== "0px" && g("iconYOffset", String(C)) || "0px",
        backgroundColor: r.backgroundColor || s.backgroundColor || "",
        backgroundColorActive: g("backgroundColor", String(C)),
        background: String(r.background || s.background || ""),
        backgroundActive: g("background", String(C)),
        frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
        frameBackgroundColorActive: g("frameBackgroundColor", String(C)),
        frameBackground: String(r.frameBackground || s.background || ""),
        frameBackgroundActive: g("frameBackground", String(C))
      });
      switch (o == null ? void 0 : o.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const C = h.findIndex((S) => String(S.value) === String(u));
          return C !== -1 ? (c(C + 1), v(String(C + 1))) : (c(void 0), v(""));
        }
        default:
          return v("");
      }
    }, [
      o,
      u,
      d,
      r,
      h,
      e,
      i,
      a,
      s,
      f,
      g
    ]);
    return {
      states: h,
      widgetStates: b,
      minValue: m,
      maxValue: y,
      data: w,
      activeIndex: l,
      setActiveIndex: c,
      oidValue: u
    };
  };
});
export {
  ia as $,
  sU as A,
  f0 as B,
  Re as C,
  lo as D,
  CU as E,
  l0 as F,
  va as G,
  wU as H,
  Vh as I,
  Wc as J,
  cU as K,
  pw as L,
  P0 as M,
  sl as N,
  Op as O,
  fa as P,
  Lt as Q,
  He as R,
  Tu as S,
  Jn as T,
  cl as U,
  qp as V,
  Xp as W,
  Wu as X,
  Ct as Y,
  ps as Z,
  gs as _,
  __tla,
  IA as a,
  eh as a0,
  hU as a1,
  iU as a2,
  od as a3,
  fr as a4,
  nl as a5,
  dr as a6,
  Tp as a7,
  ds as a8,
  vu as a9,
  et as aa,
  pU as ab,
  ss as ac,
  YA as ad,
  gU as ae,
  cs as af,
  nn as ag,
  ca as ah,
  Mh as ai,
  le as b,
  ju as c,
  pA as d,
  RA as e,
  Qs as f,
  kA as g,
  ri as h,
  hA as i,
  L as j,
  tt as k,
  pe as l,
  OA as m,
  xh as n,
  ir as o,
  yi as p,
  ha as q,
  $e as r,
  lA as s,
  BU as t,
  KA as u,
  sn as v,
  Ie as w,
  Cw as x,
  vU as y,
  mU as z
};
