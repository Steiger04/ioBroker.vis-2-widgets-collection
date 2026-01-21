import { v as B, R as oa, a as T, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as Ya, c as gn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as wf } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Yu, zn, C0, Re, go, BU, g0, xU, Ua, zh, SU, EU, wC, $0, jn, mU, Ca, hU, Yc, fl, Ao, Np, Lt, He, Ou, pl, nB, Zp, IA, mt, ws, ms, ua, ih, UU, gU, cd, pr, ll, gr, Op, hs, Uu, et, bU, fs, YA, QU, ps, sn, pa, Vh, le, qu, pA, RA, Es, kA, ai, hA, L, tt, pe, OA, kh, sr, Ei, ya, $e, lA, FU, KA, Br, Ie, bC, IU, CU;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Zc = {
    exports: {}
  }, xo = {};
  var vf = B, yf = /* @__PURE__ */ Symbol.for("react.element"), Qf = /* @__PURE__ */ Symbol.for("react.fragment"), bf = Object.prototype.hasOwnProperty, Ff = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function qc(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) bf.call(e, r) && !Uf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: yf,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: Ff.current
    };
  }
  xo.Fragment = Qf;
  xo.jsx = qc;
  xo.jsxs = qc;
  Zc.exports = xo;
  L = Zc.exports;
  const jr = {
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
  }, _t = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, Nt = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, mr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Ef = {
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
  function io() {
    return io = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, io.apply(null, arguments);
  }
  function Sf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function xf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var If = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Sf(n);
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
  })(), ie = "-ms-", ao = "-moz-", CA = "-webkit-", Au = "comm", Za = "rule", qa = "decl", Hf = "@import", eu = "@keyframes", Tf = "@layer", Lf = Math.abs, Io = String.fromCharCode, kf = Object.assign;
  function Rf(A, e) {
    return te(A, 0) ^ 45 ? (((e << 2 ^ te(A, 0)) << 2 ^ te(A, 1)) << 2 ^ te(A, 2)) << 2 ^ te(A, 3) : 0;
  }
  function tu(A) {
    return A.trim();
  }
  function Kf(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function mA(A, e, t) {
    return A.replace(e, t);
  }
  function ia(A, e) {
    return A.indexOf(e);
  }
  function te(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function zr(A, e, t) {
    return A.slice(e, t);
  }
  function Oe(A) {
    return A.length;
  }
  function As(A) {
    return A.length;
  }
  function pn(A, e) {
    return e.push(A), A;
  }
  function Of(A, e) {
    return A.map(e).join("");
  }
  var Ho = 1, ar = 1, ru = 0, ge = 0, VA = 0, fr = "";
  function To(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Ho,
      column: ar,
      length: i,
      return: ""
    };
  }
  function wr(A, e) {
    return kf(To("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Df() {
    return VA;
  }
  function Mf() {
    return VA = ge > 0 ? te(fr, --ge) : 0, ar--, VA === 10 && (ar = 1, Ho--), VA;
  }
  function Ce() {
    return VA = ge < ru ? te(fr, ge++) : 0, ar++, VA === 10 && (ar = 1, Ho++), VA;
  }
  function Ve() {
    return te(fr, ge);
  }
  function Jn() {
    return ge;
  }
  function tn(A, e) {
    return zr(fr, A, e);
  }
  function Jr(A) {
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
  function nu(A) {
    return Ho = ar = 1, ru = Oe(fr = A), ge = 0, [];
  }
  function ou(A) {
    return fr = "", A;
  }
  function Yn(A) {
    return tu(tn(ge - 1, aa(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function Pf(A) {
    for (; (VA = Ve()) && VA < 33; ) Ce();
    return Jr(A) > 2 || Jr(VA) > 3 ? "" : " ";
  }
  function _f(A, e) {
    for (; --e && Ce() && !(VA < 48 || VA > 102 || VA > 57 && VA < 65 || VA > 70 && VA < 97); ) ;
    return tn(A, Jn() + (e < 6 && Ve() == 32 && Ce() == 32));
  }
  function aa(A) {
    for (; Ce(); ) switch (VA) {
      case A:
        return ge;
      case 34:
      case 39:
        A !== 34 && A !== 39 && aa(VA);
        break;
      case 40:
        A === 41 && aa(A);
        break;
      case 92:
        Ce();
        break;
    }
    return ge;
  }
  function Nf(A, e) {
    for (; Ce() && A + VA !== 57; ) if (A + VA === 84 && Ve() === 47) break;
    return "/*" + tn(e, ge - 1) + "*" + Io(A === 47 ? A : Ce());
  }
  function Gf(A) {
    for (; !Jr(Ve()); ) Ce();
    return tn(A, ge);
  }
  function Vf(A) {
    return ou(Zn("", null, null, null, [
      ""
    ], A = nu(A), 0, [
      0
    ], A));
  }
  function Zn(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, d = i, u = 0, f = 0, p = 0, h = 1, Q = 1, m = 1, b = 0, w = "", v = n, U = o, C = r, S = w; Q; ) switch (p = b, b = Ce()) {
      case 40:
        if (p != 108 && te(S, d - 1) == 58) {
          ia(S += mA(Yn(b), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Yn(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Pf(p);
        break;
      case 92:
        S += _f(Jn() - 1, 7);
        continue;
      case 47:
        switch (Ve()) {
          case 42:
          case 47:
            pn($f(Nf(Ce(), Jn()), e, t), s);
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
        switch (b) {
          case 0:
          case 125:
            Q = 0;
          case 59 + c:
            m == -1 && (S = mA(S, /\f/g, "")), f > 0 && Oe(S) - d && pn(f > 32 ? zs(S + ";", r, t, d - 1) : zs(mA(S, " ", "") + ";", r, t, d - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (pn(C = js(S, e, t, l, c, n, a, w, v = [], U = [], d), o), b === 123) if (c === 0) Zn(S, e, C, C, v, o, d, a, U);
            else switch (u === 99 && te(S, 3) === 110 ? 100 : u) {
              case 100:
              case 108:
              case 109:
              case 115:
                Zn(A, C, C, r && pn(js(A, C, C, 0, 0, n, a, w, n, v = [], d), U), n, U, d, a, r ? v : U);
                break;
              default:
                Zn(S, C, C, C, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, h = m = 1, w = S = "", d = i;
        break;
      case 58:
        d = 1 + Oe(S), f = p;
      default:
        if (h < 1) {
          if (b == 123) --h;
          else if (b == 125 && h++ == 0 && Mf() == 125) continue;
        }
        switch (S += Io(b), b * h) {
          case 38:
            m = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[l++] = (Oe(S) - 1) * m, m = 1;
            break;
          case 64:
            Ve() === 45 && (S += Yn(Ce())), u = Ve(), c = d = Oe(w = S += Gf(Jn())), b++;
            break;
          case 45:
            p === 45 && Oe(S) == 2 && (h = 0);
        }
    }
    return o;
  }
  function js(A, e, t, r, n, o, i, a, s, l, c) {
    for (var d = n - 1, u = n === 0 ? o : [
      ""
    ], f = As(u), p = 0, h = 0, Q = 0; p < r; ++p) for (var m = 0, b = zr(A, d + 1, d = Lf(h = i[p])), w = A; m < f; ++m) (w = tu(h > 0 ? u[m] + " " + b : mA(b, /&\f/g, u[m]))) && (s[Q++] = w);
    return To(A, e, t, n === 0 ? Za : a, s, l, c);
  }
  function $f(A, e, t) {
    return To(A, e, t, Au, Io(Df()), zr(A, 2, -2), 0);
  }
  function zs(A, e, t, r) {
    return To(A, e, t, qa, zr(A, 0, r), zr(A, r + 1, -1), r);
  }
  function nr(A, e) {
    for (var t = "", r = As(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Wf(A, e, t, r) {
    switch (A.type) {
      case Tf:
        if (A.children.length) break;
      case Hf:
      case qa:
        return A.return = A.return || A.value;
      case Au:
        return "";
      case eu:
        return A.return = A.value + "{" + nr(A.children, r) + "}";
      case Za:
        A.value = A.props.join(",");
    }
    return Oe(t = nr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function Xf(A) {
    var e = As(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function jf(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function iu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var zf = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = Ve(), n === 38 && o === 12 && (t[r] = 1), !Jr(o); ) Ce();
    return tn(e, ge);
  }, Jf = function(e, t) {
    var r = -1, n = 44;
    do
      switch (Jr(n)) {
        case 0:
          n === 38 && Ve() === 12 && (t[r] = 1), e[r] += zf(ge - 1, t, r);
          break;
        case 2:
          e[r] += Yn(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = Ve() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Io(n);
      }
    while (n = Ce());
    return e;
  }, Yf = function(e, t) {
    return ou(Jf(nu(e), t));
  }, Js = /* @__PURE__ */ new WeakMap(), Zf = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Js.get(r)) && !n) {
        Js.set(e, true);
        for (var o = [], i = Yf(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, qf = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function au(A, e) {
    switch (Rf(A, e)) {
      case 5103:
        return CA + "print-" + A + A;
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
        return CA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return CA + A + ao + A + ie + A + A;
      case 6828:
      case 4268:
        return CA + A + ie + A + A;
      case 6165:
        return CA + A + ie + "flex-" + A + A;
      case 5187:
        return CA + A + mA(A, /(\w+).+(:[^]+)/, CA + "box-$1$2" + ie + "flex-$1$2") + A;
      case 5443:
        return CA + A + ie + "flex-item-" + mA(A, /flex-|-self/, "") + A;
      case 4675:
        return CA + A + ie + "flex-line-pack" + mA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return CA + A + ie + mA(A, "shrink", "negative") + A;
      case 5292:
        return CA + A + ie + mA(A, "basis", "preferred-size") + A;
      case 6060:
        return CA + "box-" + mA(A, "-grow", "") + CA + A + ie + mA(A, "grow", "positive") + A;
      case 4554:
        return CA + mA(A, /([^-])(transform)/g, "$1" + CA + "$2") + A;
      case 6187:
        return mA(mA(mA(A, /(zoom-|grab)/, CA + "$1"), /(image-set)/, CA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return mA(A, /(image-set\([^]*)/, CA + "$1$`$1");
      case 4968:
        return mA(mA(A, /(.+:)(flex-)?(.*)/, CA + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + CA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return mA(A, /(.+)-inline(.+)/, CA + "$1$2") + A;
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
            return mA(A, /(.+:)(.+)-([^]+)/, "$1" + CA + "$2-$3$1" + ao + (te(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ia(A, "stretch") ? au(mA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (te(A, e + 1) !== 115) break;
      case 6444:
        switch (te(A, Oe(A) - 3 - (~ia(A, "!important") && 10))) {
          case 107:
            return mA(A, ":", ":" + CA) + A;
          case 101:
            return mA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + CA + (te(A, 14) === 45 ? "inline-" : "") + "box$3$1" + CA + "$2$3$1" + ie + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (te(A, e + 11)) {
          case 114:
            return CA + A + ie + mA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return CA + A + ie + mA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return CA + A + ie + mA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return CA + A + ie + A + A;
    }
    return A;
  }
  var Ag = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case qa:
        e.return = au(e.value, e.length);
        break;
      case eu:
        return nr([
          wr(e, {
            value: mA(e.value, "@", "@" + CA)
          })
        ], n);
      case Za:
        if (e.length) return Of(e.props, function(o) {
          switch (Kf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return nr([
                wr(e, {
                  props: [
                    mA(o, /:(read-\w+)/, ":" + ao + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return nr([
                wr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ":" + CA + "input-$1")
                  ]
                }),
                wr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ":" + ao + "$1")
                  ]
                }),
                wr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ie + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, eg = [
    Ag
  ], tg = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(h) {
        var Q = h.getAttribute("data-emotion");
        Q.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || eg, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(h) {
      for (var Q = h.getAttribute("data-emotion").split(" "), m = 1; m < Q.length; m++) o[Q[m]] = true;
      a.push(h);
    });
    var s, l = [
      Zf,
      qf
    ];
    {
      var c, d = [
        Wf,
        jf(function(h) {
          c.insert(h);
        })
      ], u = Xf(l.concat(n, d)), f = function(Q) {
        return nr(Vf(Q), u);
      };
      s = function(Q, m, b, w) {
        c = b, f(Q ? Q + "{" + m.styles + "}" : m.styles), w && (p.inserted[m.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new If({
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
    return p.sheet.hydrate(a), p;
  }, su = {
    exports: {}
  }, vA = {};
  var ZA = typeof Symbol == "function" && Symbol.for, es = ZA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, ts = ZA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Lo = ZA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, ko = ZA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Ro = ZA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Ko = ZA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Oo = ZA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, rs = ZA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Do = ZA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Mo = ZA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Po = ZA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, rg = ZA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _o = ZA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, No = ZA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, ng = ZA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, og = ZA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ig = ZA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, ag = ZA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function me(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case es:
          switch (A = A.type, A) {
            case rs:
            case Do:
            case Lo:
            case Ro:
            case ko:
            case Po:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Oo:
                case Mo:
                case No:
                case _o:
                case Ko:
                  return A;
                default:
                  return e;
              }
          }
        case ts:
          return e;
      }
    }
  }
  function lu(A) {
    return me(A) === Do;
  }
  vA.AsyncMode = rs;
  vA.ConcurrentMode = Do;
  vA.ContextConsumer = Oo;
  vA.ContextProvider = Ko;
  vA.Element = es;
  vA.ForwardRef = Mo;
  vA.Fragment = Lo;
  vA.Lazy = No;
  vA.Memo = _o;
  vA.Portal = ts;
  vA.Profiler = Ro;
  vA.StrictMode = ko;
  vA.Suspense = Po;
  vA.isAsyncMode = function(A) {
    return lu(A) || me(A) === rs;
  };
  vA.isConcurrentMode = lu;
  vA.isContextConsumer = function(A) {
    return me(A) === Oo;
  };
  vA.isContextProvider = function(A) {
    return me(A) === Ko;
  };
  vA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === es;
  };
  vA.isForwardRef = function(A) {
    return me(A) === Mo;
  };
  vA.isFragment = function(A) {
    return me(A) === Lo;
  };
  vA.isLazy = function(A) {
    return me(A) === No;
  };
  vA.isMemo = function(A) {
    return me(A) === _o;
  };
  vA.isPortal = function(A) {
    return me(A) === ts;
  };
  vA.isProfiler = function(A) {
    return me(A) === Ro;
  };
  vA.isStrictMode = function(A) {
    return me(A) === ko;
  };
  vA.isSuspense = function(A) {
    return me(A) === Po;
  };
  vA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Lo || A === Do || A === Ro || A === ko || A === Po || A === rg || typeof A == "object" && A !== null && (A.$$typeof === No || A.$$typeof === _o || A.$$typeof === Ko || A.$$typeof === Oo || A.$$typeof === Mo || A.$$typeof === og || A.$$typeof === ig || A.$$typeof === ag || A.$$typeof === ng);
  };
  vA.typeOf = me;
  su.exports = vA;
  var sg = su.exports, cu = sg, lg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, cg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, uu = {};
  uu[cu.ForwardRef] = lg;
  uu[cu.Memo] = cg;
  var ug = true;
  function du(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var ns = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || ug === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, os = function(e, t, r) {
    ns(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function dg(A) {
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
  var fg = {
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
  }, gg = /[A-Z]|^ms/g, pg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fu = function(e) {
    return e.charCodeAt(1) === 45;
  }, Ys = function(e) {
    return e != null && typeof e != "boolean";
  }, bi = iu(function(A) {
    return fu(A) ? A : A.replace(gg, "-$&").toLowerCase();
  }), Zs = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(pg, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return fg[e] !== 1 && !fu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function Yr(A, e, t) {
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
        return Bg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = De, l = t(A);
          return De = s, Yr(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var d = e[c];
    return d !== void 0 ? d : c;
  }
  function Bg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += Yr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Ys(a) && (r += bi(o) + ":" + Zs(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) Ys(i[s]) && (r += bi(o) + ":" + Zs(o, i[s]) + ";");
      else {
        var l = Yr(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += bi(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var qs = /label:\s*([^\s;{]+)\s*(;|$)/g, De;
  function rn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    De = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += Yr(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += Yr(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    qs.lastIndex = 0;
    for (var l = "", c; (c = qs.exec(n)) !== null; ) l += "-" + c[1];
    var d = dg(n) + l;
    return {
      name: d,
      styles: n,
      next: De
    };
  }
  var hg = function(e) {
    return e();
  }, gu = oa.useInsertionEffect ? oa.useInsertionEffect : false, pu = gu || hg, Al = gu || B.useLayoutEffect, Bu = B.createContext(typeof HTMLElement < "u" ? tg({
    key: "css"
  }) : null);
  Bu.Provider;
  var is = function(e) {
    return B.forwardRef(function(t, r) {
      var n = B.useContext(Bu);
      return e(t, n, r);
    });
  }, nn = B.createContext({}), as = {}.hasOwnProperty, sa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Cg = function(e, t) {
    var r = {};
    for (var n in t) as.call(t, n) && (r[n] = t[n]);
    return r[sa] = e, r;
  }, mg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return ns(t, r, n), pu(function() {
      return os(t, r, n);
    }), null;
  }, wg = is(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[sa], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = du(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = rn(o, void 0, B.useContext(nn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) as.call(A, l) && l !== "css" && l !== sa && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), B.createElement(B.Fragment, null, B.createElement(mg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), B.createElement(n, s));
  }), vg = wg, el = function(e, t) {
    var r = arguments;
    if (t == null || !as.call(t, "css")) return B.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = vg, o[1] = Cg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return B.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(el || (el = {}));
  var yg = is(function(A, e) {
    var t = A.styles, r = rn([
      t
    ], void 0, B.useContext(nn)), n = B.useRef();
    return Al(function() {
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
    ]), Al(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && os(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function ss() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return rn(e);
  }
  function on() {
    var A = ss.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var Qg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bg = iu(function(A) {
    return Qg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Fg = bg, Ug = function(e) {
    return e !== "theme";
  }, tl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Fg : Ug;
  }, rl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Eg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return ns(t, r, n), pu(function() {
      return os(t, r, n);
    }), null;
  }, Sg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = rl(e, t, r), s = a || tl(n), l = !s("as");
    return function() {
      var c = arguments, d = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && d.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
      else {
        var u = c[0];
        d.push(u[0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], u[p]);
      }
      var h = is(function(Q, m, b) {
        var w = l && Q.as || n, v = "", U = [], C = Q;
        if (Q.theme == null) {
          C = {};
          for (var S in Q) C[S] = Q[S];
          C.theme = B.useContext(nn);
        }
        typeof Q.className == "string" ? v = du(m.registered, U, Q.className) : Q.className != null && (v = Q.className + " ");
        var I = rn(d.concat(U), m.registered, C);
        v += m.key + "-" + I.name, i !== void 0 && (v += " " + i);
        var H = l && a === void 0 ? tl(w) : s, g = {};
        for (var x in Q) l && x === "as" || H(x) && (g[x] = Q[x]);
        return g.className = v, b && (g.ref = b), B.createElement(B.Fragment, null, B.createElement(Eg, {
          cache: m,
          serialized: I,
          isStringTag: typeof w == "string"
        }), B.createElement(w, g));
      });
      return h.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", h.defaultProps = e.defaultProps, h.__emotion_real = h, h.__emotion_base = n, h.__emotion_styles = d, h.__emotion_forwardProp = a, Object.defineProperty(h, "toString", {
        value: function() {
          return "." + i;
        }
      }), h.withComponent = function(Q, m) {
        var b = A(Q, io({}, t, m, {
          shouldForwardProp: rl(h, m, true)
        }));
        return b.apply(void 0, d);
      }, h;
    };
  }, xg = [
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
  ], la = Sg.bind(null);
  xg.forEach(function(A) {
    la[A] = la(A);
  });
  function Ig(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function hu(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Ig(n) ? t : n) : e;
    return L.jsx(yg, {
      styles: r
    });
  }
  function Cu(A, e) {
    return la(A, e);
  }
  function Hg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const nl = [];
  function gt(A) {
    return nl[0] = A, rn(nl);
  }
  var mu = {
    exports: {}
  }, UA = {};
  var ls = /* @__PURE__ */ Symbol.for("react.transitional.element"), cs = /* @__PURE__ */ Symbol.for("react.portal"), Go = /* @__PURE__ */ Symbol.for("react.fragment"), Vo = /* @__PURE__ */ Symbol.for("react.strict_mode"), $o = /* @__PURE__ */ Symbol.for("react.profiler"), Wo = /* @__PURE__ */ Symbol.for("react.consumer"), Xo = /* @__PURE__ */ Symbol.for("react.context"), jo = /* @__PURE__ */ Symbol.for("react.forward_ref"), zo = /* @__PURE__ */ Symbol.for("react.suspense"), Jo = /* @__PURE__ */ Symbol.for("react.suspense_list"), Yo = /* @__PURE__ */ Symbol.for("react.memo"), Zo = /* @__PURE__ */ Symbol.for("react.lazy"), Tg = /* @__PURE__ */ Symbol.for("react.view_transition"), Lg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case ls:
          switch (A = A.type, A) {
            case Go:
            case $o:
            case Vo:
            case zo:
            case Jo:
            case Tg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Xo:
                case jo:
                case Zo:
                case Yo:
                  return A;
                case Wo:
                  return A;
                default:
                  return e;
              }
          }
        case cs:
          return e;
      }
    }
  }
  UA.ContextConsumer = Wo;
  UA.ContextProvider = Xo;
  UA.Element = ls;
  UA.ForwardRef = jo;
  UA.Fragment = Go;
  UA.Lazy = Zo;
  UA.Memo = Yo;
  UA.Portal = cs;
  UA.Profiler = $o;
  UA.StrictMode = Vo;
  UA.Suspense = zo;
  UA.SuspenseList = Jo;
  UA.isContextConsumer = function(A) {
    return Ee(A) === Wo;
  };
  UA.isContextProvider = function(A) {
    return Ee(A) === Xo;
  };
  UA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === ls;
  };
  UA.isForwardRef = function(A) {
    return Ee(A) === jo;
  };
  UA.isFragment = function(A) {
    return Ee(A) === Go;
  };
  UA.isLazy = function(A) {
    return Ee(A) === Zo;
  };
  UA.isMemo = function(A) {
    return Ee(A) === Yo;
  };
  UA.isPortal = function(A) {
    return Ee(A) === cs;
  };
  UA.isProfiler = function(A) {
    return Ee(A) === $o;
  };
  UA.isStrictMode = function(A) {
    return Ee(A) === Vo;
  };
  UA.isSuspense = function(A) {
    return Ee(A) === zo;
  };
  UA.isSuspenseList = function(A) {
    return Ee(A) === Jo;
  };
  UA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Go || A === $o || A === Vo || A === zo || A === Jo || typeof A == "object" && A !== null && (A.$$typeof === Zo || A.$$typeof === Yo || A.$$typeof === Xo || A.$$typeof === Wo || A.$$typeof === jo || A.$$typeof === Lg || A.getModuleId !== void 0);
  };
  UA.typeOf = Ee;
  mu.exports = UA;
  var wu = mu.exports;
  function _e(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function vu(A) {
    if (B.isValidElement(A) || wu.isValidElementType(A) || !_e(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = vu(A[t]);
    }), e;
  }
  YA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return _e(A) && _e(e) && Object.keys(e).forEach((n) => {
      B.isValidElement(e[n]) || wu.isValidElementType(e[n]) ? r[n] = e[n] : _e(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && _e(A[n]) ? r[n] = YA(A[n], e[n], t) : t.clone ? r[n] = _e(e[n]) ? vu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const kg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Rg(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = kg(e), i = Object.keys(o);
    function a(u) {
      return `@media (min-width:${typeof e[u] == "number" ? e[u] : u}${t})`;
    }
    function s(u) {
      return `@media (max-width:${(typeof e[u] == "number" ? e[u] : u) - r / 100}${t})`;
    }
    function l(u, f) {
      const p = i.indexOf(f);
      return `@media (min-width:${typeof e[u] == "number" ? e[u] : u}${t}) and (max-width:${(p !== -1 && typeof e[i[p]] == "number" ? e[i[p]] : f) - r / 100}${t})`;
    }
    function c(u) {
      return i.indexOf(u) + 1 < i.length ? l(u, i[i.indexOf(u) + 1]) : a(u);
    }
    function d(u) {
      const f = i.indexOf(u);
      return f === 0 ? a(i[1]) : f === i.length - 1 ? s(i[f]) : l(u, i[i.indexOf(u) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: o,
      up: a,
      down: s,
      between: l,
      only: c,
      not: d,
      unit: t,
      ...n
    };
  }
  function ol(A, e) {
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
  function Kg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Og(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function Dg(A) {
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
  const Mg = {
    borderRadius: 4
  };
  function Mr(A, e) {
    return e ? YA(A, e, {
      clone: false
    }) : A;
  }
  const qo = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, il = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${qo[A]}px)`
  }, Pg = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : qo[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  et = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || il;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || il;
      return Object.keys(e).reduce((i, a) => {
        if (Kg(o.keys, a)) {
          const s = Og(r.containerQueries ? r : Pg, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || qo).includes(a)) {
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
  function yu(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function ca(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  QU = function(A, ...e) {
    const t = yu(A), r = [
      t,
      ...e
    ].reduce((n, o) => YA(n, o), {});
    return ca(Object.keys(t), r);
  };
  function _g(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  bU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || _g(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  hA = function(A) {
    if (typeof A != "string") throw new Error(At(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Ai(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function so(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Ai(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function GA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Ai(s, r) || {};
      return et(i, a, (d) => {
        let u = so(l, n, d);
        return d === u && typeof d == "string" && (u = so(l, n, `${e}${d === "default" ? "" : hA(d)}`, d)), t === false ? u : {
          [t]: u
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function Ng(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const Gg = {
    m: "margin",
    p: "padding"
  }, Vg = {
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
  }, al = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, $g = Ng((A) => {
    if (A.length > 2) if (al[A]) A = al[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = Gg[e], n = Vg[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), us = [
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
  ], ds = [
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
    ...us,
    ...ds
  ];
  function an(A, e, t, r) {
    const n = Ai(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  fs = function(A) {
    return an(A, "spacing", 8);
  };
  sn = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Wg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = sn(e, t), r), {});
  }
  function Xg(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = $g(t), o = Wg(n, r), i = A[t];
    return et(A, i, o);
  }
  function Qu(A, e) {
    const t = fs(A.theme);
    return Object.keys(A).map((r) => Xg(A, e, r, t)).reduce(Mr, {});
  }
  function DA(A) {
    return Qu(A, us);
  }
  DA.propTypes = {};
  DA.filterProps = us;
  function MA(A) {
    return Qu(A, ds);
  }
  MA.propTypes = {};
  MA.filterProps = ds;
  function bu(A = 8, e = fs({
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
  function ei(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Mr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function ye(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Se(A, e) {
    return GA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const jg = Se("border", ye), zg = Se("borderTop", ye), Jg = Se("borderRight", ye), Yg = Se("borderBottom", ye), Zg = Se("borderLeft", ye), qg = Se("borderColor"), Ap = Se("borderTopColor"), ep = Se("borderRightColor"), tp = Se("borderBottomColor"), rp = Se("borderLeftColor"), np = Se("outline", ye), op = Se("outlineColor"), ti = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = an(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: sn(e, r)
      });
      return et(A, A.borderRadius, t);
    }
    return null;
  };
  ti.propTypes = {};
  ti.filterProps = [
    "borderRadius"
  ];
  ei(jg, zg, Jg, Yg, Zg, qg, Ap, ep, tp, rp, ti, np, op);
  const ri = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = an(A.theme, "spacing", 8), t = (r) => ({
        gap: sn(e, r)
      });
      return et(A, A.gap, t);
    }
    return null;
  };
  ri.propTypes = {};
  ri.filterProps = [
    "gap"
  ];
  const ni = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = an(A.theme, "spacing", 8), t = (r) => ({
        columnGap: sn(e, r)
      });
      return et(A, A.columnGap, t);
    }
    return null;
  };
  ni.propTypes = {};
  ni.filterProps = [
    "columnGap"
  ];
  const oi = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = an(A.theme, "spacing", 8), t = (r) => ({
        rowGap: sn(e, r)
      });
      return et(A, A.rowGap, t);
    }
    return null;
  };
  oi.propTypes = {};
  oi.filterProps = [
    "rowGap"
  ];
  const ip = GA({
    prop: "gridColumn"
  }), ap = GA({
    prop: "gridRow"
  }), sp = GA({
    prop: "gridAutoFlow"
  }), lp = GA({
    prop: "gridAutoColumns"
  }), cp = GA({
    prop: "gridAutoRows"
  }), up = GA({
    prop: "gridTemplateColumns"
  }), dp = GA({
    prop: "gridTemplateRows"
  }), fp = GA({
    prop: "gridTemplateAreas"
  }), gp = GA({
    prop: "gridArea"
  });
  ei(ri, ni, oi, ip, ap, sp, lp, cp, up, dp, fp, gp);
  function or(A, e) {
    return e === "grey" ? e : A;
  }
  const pp = GA({
    prop: "color",
    themeKey: "palette",
    transform: or
  }), Bp = GA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: or
  }), hp = GA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: or
  });
  ei(pp, Bp, hp);
  function he(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const Cp = GA({
    prop: "width",
    transform: he
  }), gs = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || qo[t];
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
  gs.filterProps = [
    "maxWidth"
  ];
  const mp = GA({
    prop: "minWidth",
    transform: he
  }), wp = GA({
    prop: "height",
    transform: he
  }), vp = GA({
    prop: "maxHeight",
    transform: he
  }), yp = GA({
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
  const Qp = GA({
    prop: "boxSizing"
  });
  ei(Cp, gs, mp, wp, vp, yp, Qp);
  const ln = {
    border: {
      themeKey: "borders",
      transform: ye
    },
    borderTop: {
      themeKey: "borders",
      transform: ye
    },
    borderRight: {
      themeKey: "borders",
      transform: ye
    },
    borderBottom: {
      themeKey: "borders",
      transform: ye
    },
    borderLeft: {
      themeKey: "borders",
      transform: ye
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
      transform: ye
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: ti
    },
    color: {
      themeKey: "palette",
      transform: or
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: or
    },
    backgroundColor: {
      themeKey: "palette",
      transform: or
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
      style: ri
    },
    rowGap: {
      style: oi
    },
    columnGap: {
      style: ni
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
      style: gs
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
  function bp(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Fp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Up() {
    function A(t, r, n, o) {
      const i = {
        [t]: r,
        theme: n
      }, a = o[t];
      if (!a) return {
        [t]: r
      };
      const { cssProperty: s = t, themeKey: l, transform: c, style: d } = a;
      if (r == null) return null;
      if (l === "typography" && r === "inherit") return {
        [t]: r
      };
      const u = Ai(n, l) || {};
      return d ? d(i) : et(i, r, (p) => {
        let h = so(u, c, p);
        return p === h && typeof p == "string" && (h = so(u, c, `${t}${p === "default" ? "" : hA(p)}`, p)), s === false ? h : {
          [s]: h
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? ln;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = yu(n.breakpoints), d = Object.keys(c);
        let u = c;
        return Object.keys(l).forEach((f) => {
          const p = Fp(l[f], n);
          if (p != null) if (typeof p == "object") if (i[f]) u = Mr(u, A(f, p, n, i));
          else {
            const h = et({
              theme: n
            }, p, (Q) => ({
              [f]: Q
            }));
            bp(h, p) ? u[f] = e({
              sx: p,
              theme: n,
              nested: true
            }) : u = Mr(u, h);
          }
          else u = Mr(u, A(f, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": ol(n, ca(d, u))
        } : ol(n, ca(d, u));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const ht = Up();
  ht.filterProps = [
    "sx"
  ];
  function Ep(A, e) {
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
  ps = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Rg(t), s = bu(n);
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
        ...Mg,
        ...o
      }
    }, i);
    return l = Dg(l), l.applyStyles = Ep, l = e.reduce((c, d) => YA(c, d), l), l.unstable_sxConfig = {
      ...ln,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(d) {
      return ht({
        sx: d,
        theme: this
      });
    }, l;
  };
  function Sp(A) {
    return Object.keys(A).length === 0;
  }
  function Bs(A = null) {
    const e = B.useContext(nn);
    return !e || Sp(e) ? A : e;
  }
  const xp = ps();
  hs = function(A = xp) {
    return Bs(A);
  };
  function Fi(A) {
    const e = gt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Fu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = hs(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Fi(typeof i == "function" ? i(n) : i)) : o = Fi(o)), L.jsx(hu, {
      styles: o
    });
  }
  const Ip = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? ln;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Uu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Ip(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return _e(a) ? {
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
  const sl = (A) => A, Hp = () => {
    let A = sl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = sl;
      }
    };
  }, Eu = Hp();
  function Su(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = Su(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  pA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = Su(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Tp(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = Cu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(ht);
    return B.forwardRef(function(s, l) {
      const c = hs(t), { className: d, component: u = "div", ...f } = Uu(s);
      return L.jsx(o, {
        as: u,
        ref: l,
        className: pA(d, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Lp = {
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
    const r = Lp[e];
    return r ? `${t}-${r}` : `${Eu.generate(A)}-${e}`;
  };
  IA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = kA(A, n, t);
    }), r;
  };
  function xu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: gt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = gt(n.style));
    }), r;
  }
  const kp = ps();
  function Ui(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function It(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Rp(A) {
    return A ? (e, t) => t[A] : null;
  }
  function Kp(A, e, t) {
    A.theme = Mp(A.theme) ? t : A.theme[e] || A.theme;
  }
  function qn(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => qn(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? It(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? It(gt(i), t) : i;
      }
      return Iu(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? It(gt(r.style), t) : r.style : t ? It(gt(r), t) : r;
  }
  function Iu(A, e, t = [], r = void 0) {
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
  Op = function(A = {}) {
    const { themeId: e, defaultTheme: t = kp, rootShouldForwardProp: r = Ui, slotShouldForwardProp: n = Ui } = A;
    function o(a) {
      Kp(a, e, t);
    }
    return (a, s = {}) => {
      Hg(a, (C) => C.filter((S) => S !== ht));
      const { name: l, slot: c, skipVariantsResolver: d, skipSx: u, overridesResolver: f = Rp(_p(c)), ...p } = s, h = l && l.startsWith("Mui") || c ? "components" : "custom", Q = d !== void 0 ? d : c && c !== "Root" && c !== "root" || false, m = u || false;
      let b = Ui;
      c === "Root" || c === "root" ? b = r : c ? b = n : Pp(a) && (b = void 0);
      const w = Cu(a, {
        shouldForwardProp: b,
        label: Dp(),
        ...p
      }), v = (C) => {
        if (C.__emotion_real === C) return C;
        if (typeof C == "function") return function(I) {
          return qn(I, C, I.theme.modularCssLayers ? h : void 0);
        };
        if (_e(C)) {
          const S = xu(C);
          return function(H) {
            return S.variants ? qn(H, S, H.theme.modularCssLayers ? h : void 0) : H.theme.modularCssLayers ? It(S.style, h) : S.style;
          };
        }
        return C;
      }, U = (...C) => {
        const S = [], I = C.map(v), H = [];
        if (S.push(o), l && f && H.push(function(K) {
          var _a2, _b2;
          const D = (_b2 = (_a2 = K.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!D) return null;
          const M = {};
          for (const N in D) M[N] = qn(K, D[N], K.theme.modularCssLayers ? "theme" : void 0);
          return f(K, M);
        }), l && !Q && H.push(function(K) {
          var _a2, _b2, _c2;
          const D = (_c2 = (_b2 = (_a2 = K.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return D ? Iu(K, D, [], K.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || H.push(ht), Array.isArray(I[0])) {
          const k = I.shift(), K = new Array(S.length).fill(""), $ = new Array(H.length).fill("");
          let D;
          D = [
            ...K,
            ...k,
            ...$
          ], D.raw = [
            ...K,
            ...k.raw,
            ...$
          ], S.unshift(D);
        }
        const g = [
          ...S,
          ...I,
          ...H
        ], x = w(...g);
        return a.muiName && (x.muiName = a.muiName), x;
      };
      return w.withConfig && (U.withConfig = w.withConfig), U;
    };
  };
  function Dp(A, e) {
    return void 0;
  }
  function Mp(A) {
    for (const e in A) return false;
    return true;
  }
  function Pp(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function _p(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  ua = function(A, e) {
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
            t[n][s] = ua(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  tt = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
  Np = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function Cs(A, e = 0, t = 1) {
    return Np(A, e, t);
  }
  function Gp(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Ct(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Ct(Gp(A));
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
  const Vp = (A) => {
    const e = Ct(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, xr = (A, e) => {
    try {
      return Vp(A);
    } catch {
      return A;
    }
  };
  function ii(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Hu(A) {
    A = Ct(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), ii({
      type: a,
      values: s
    });
  }
  function da(A) {
    A = Ct(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Ct(Hu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function $p(A, e) {
    const t = da(A), r = da(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  sr = function(A, e) {
    return A = Ct(A), e = Cs(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, ii(A);
  };
  function Bn(A, e, t) {
    try {
      return sr(A, e);
    } catch {
      return A;
    }
  }
  ms = function(A, e) {
    if (A = Ct(A), e = Cs(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return ii(A);
  };
  function bA(A, e, t) {
    try {
      return ms(A, e);
    } catch {
      return A;
    }
  }
  ws = function(A, e) {
    if (A = Ct(A), e = Cs(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return ii(A);
  };
  function FA(A, e, t) {
    try {
      return ws(A, e);
    } catch {
      return A;
    }
  }
  function Wp(A, e = 0.15) {
    return da(A) > 0.5 ? ms(A, e) : ws(A, e);
  }
  function hn(A, e, t) {
    try {
      return Wp(A, e);
    } catch {
      return A;
    }
  }
  ll = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Tu(A, e = 166) {
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
  Ei = function(A, e) {
    var _a2, _b2, _c2;
    return B.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  He = function(A) {
    return A && A.ownerDocument || document;
  };
  function rt(A) {
    return He(A).defaultView || window;
  }
  function cl(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let ul = 0;
  function Xp(A) {
    const [e, t] = B.useState(A), r = A || e;
    return B.useEffect(() => {
      e == null && (ul += 1, t(`mui-${ul}`));
    }, [
      e
    ]), r;
  }
  const jp = {
    ...oa
  }, dl = jp.useId;
  ai = function(A) {
    if (dl !== void 0) {
      const e = dl();
      return A ?? e;
    }
    return Xp(A);
  };
  fl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
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
  const gl = {};
  function Lu(A, e) {
    const t = B.useRef(gl);
    return t.current === gl && (t.current = A(e)), t;
  }
  const zp = [];
  function Jp(A) {
    B.useEffect(A, zp);
  }
  class vs {
    static create() {
      return new vs();
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
  function ku() {
    const A = Lu(vs.create).current;
    return Jp(A.disposeEffect), A;
  }
  pl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Ru(A = window) {
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
  function Yp(A) {
    return typeof A == "string";
  }
  function Ku(A, e, t) {
    return A === void 0 || Yp(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Ou = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function Bl(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Du(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, h = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (h.className = f), Object.keys(p).length > 0 && (h.style = p), {
        props: h,
        internalRef: void 0
      };
    }
    const i = Ou({
      ...n,
      ...r
    }), a = Bl(r), s = Bl(n), l = e(i), c = pA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), d = {
      ...l == null ? void 0 : l.style,
      ...t == null ? void 0 : t.style,
      ...n == null ? void 0 : n.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...l,
      ...t,
      ...s,
      ...a
    };
    return c.length > 0 && (u.className = c), Object.keys(d).length > 0 && (u.style = d), {
      props: u,
      internalRef: l.ref
    };
  }
  function Mu(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  Zp = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Mu(t, r), { props: a, internalRef: s } = Du({
      ...o,
      externalSlotProps: i
    }), l = pe(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Ku(e, {
      ...a,
      ref: l
    }, r);
  };
  function cn(A) {
    var _a2;
    return parseInt(B.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const Pu = B.createContext(null);
  function ys() {
    return B.useContext(Pu);
  }
  const qp = typeof Symbol == "function" && Symbol.for, AB = qp ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function eB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function tB(A) {
    const { children: e, theme: t } = A, r = ys(), n = B.useMemo(() => {
      const o = r === null ? {
        ...t
      } : eB(r, t);
      return o != null && (o[AB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(Pu.Provider, {
      value: n,
      children: e
    });
  }
  const _u = B.createContext();
  function rB({ value: A, ...e }) {
    return L.jsx(_u.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Nu;
  nB = () => B.useContext(_u) ?? false;
  Nu = B.createContext(void 0);
  function oB({ value: A, children: e }) {
    return L.jsx(Nu.Provider, {
      value: A,
      children: e
    });
  }
  function iB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? ua(n.defaultProps, r) : !n.styleOverrides && !n.variants ? ua(n, r) : r;
  }
  function aB({ props: A, name: e }) {
    const t = B.useContext(Nu);
    return iB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function sB(A) {
    const e = Bs(), t = ai() || "", { modularCssLayers: r } = A;
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
    ]), n ? L.jsx(Fu, {
      styles: n
    }) : null;
  }
  const hl = {};
  function Cl(A, e, t, r = false) {
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
  function Gu(A) {
    const { children: e, theme: t, themeId: r } = A, n = Bs(hl), o = ys() || hl, i = Cl(r, n, t), a = Cl(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = sB(i);
    return L.jsx(tB, {
      theme: a,
      children: L.jsx(nn.Provider, {
        value: i,
        children: L.jsx(rB, {
          value: s,
          children: L.jsxs(oB, {
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
  const ml = {
    theme: void 0
  };
  function lB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (ml.theme = n.theme, o = xu(A(ml)), e = o, t = n.theme), o;
    };
  }
  const Qs = "mode", bs = "color-scheme", cB = "data-color-scheme";
  function uB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = Qs, colorSchemeStorageKey: o = bs, attribute: i = cB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
    let l = "", c = i;
    if (i === "class" && (c = ".%s"), i === "data" && (c = "[data-%s]"), c.startsWith(".")) {
      const u = c.substring(1);
      l += `${a}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${a}.classList.add('${u}'.replace('%s', colorScheme));`;
    }
    const d = c.match(/\[([^\]]+)\]/);
    if (d) {
      const [u, f] = d[1].split("=");
      f || (l += `${a}.removeAttribute('${u}'.replace('%s', light));
      ${a}.removeAttribute('${u}'.replace('%s', dark));`), l += `
      ${a}.setAttribute('${u}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
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
  function dB() {
  }
  const fB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return dB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function Si() {
  }
  function wl(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Vu(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function gB(A) {
    return Vu(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function pB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = Qs, colorSchemeStorageKey: i = bs, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = fB, noSsr: l = false } = A, c = n.join(","), d = n.length > 1, u = B.useMemo(() => s == null ? void 0 : s({
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
    ]), p = B.useMemo(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [h, Q] = B.useState(() => {
      const I = (u == null ? void 0 : u.get(e)) || e, H = (f == null ? void 0 : f.get(t)) || t, g = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: I,
        systemMode: wl(I),
        lightColorScheme: H,
        darkColorScheme: g
      };
    }), [m, b] = B.useState(l || !d);
    B.useEffect(() => {
      b(true);
    }, []);
    const w = gB(h), v = B.useCallback((I) => {
      Q((H) => {
        if (I === H.mode) return H;
        const g = I ?? e;
        return u == null ? void 0 : u.set(g), {
          ...H,
          mode: g,
          systemMode: wl(g)
        };
      });
    }, [
      u,
      e
    ]), U = B.useCallback((I) => {
      I ? typeof I == "string" ? I && !c.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : Q((H) => {
        const g = {
          ...H
        };
        return Vu(H, (x) => {
          x === "light" && (f == null ? void 0 : f.set(I), g.lightColorScheme = I), x === "dark" && (p == null ? void 0 : p.set(I), g.darkColorScheme = I);
        }), g;
      }) : Q((H) => {
        const g = {
          ...H
        }, x = I.light === null ? t : I.light, k = I.dark === null ? r : I.dark;
        return x && (c.includes(x) ? (g.lightColorScheme = x, f == null ? void 0 : f.set(x)) : console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`)), k && (c.includes(k) ? (g.darkColorScheme = k, p == null ? void 0 : p.set(k)) : console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`)), g;
      }) : Q((H) => (f == null ? void 0 : f.set(t), p == null ? void 0 : p.set(r), {
        ...H,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      p,
      t,
      r
    ]), C = B.useCallback((I) => {
      h.mode === "system" && Q((H) => {
        const g = (I == null ? void 0 : I.matches) ? "dark" : "light";
        return H.systemMode === g ? H : {
          ...H,
          systemMode: g
        };
      });
    }, [
      h.mode
    ]), S = B.useRef(C);
    return S.current = C, B.useEffect(() => {
      if (typeof window.matchMedia != "function" || !d) return;
      const I = (...g) => S.current(...g), H = window.matchMedia("(prefers-color-scheme: dark)");
      return H.addListener(I), I(H), () => {
        H.removeListener(I);
      };
    }, [
      d
    ]), B.useEffect(() => {
      if (d) {
        const I = (u == null ? void 0 : u.subscribe((x) => {
          (!x || [
            "light",
            "dark",
            "system"
          ].includes(x)) && v(x || e);
        })) || Si, H = (f == null ? void 0 : f.subscribe((x) => {
          (!x || c.match(x)) && U({
            light: x
          });
        })) || Si, g = (p == null ? void 0 : p.subscribe((x) => {
          (!x || c.match(x)) && U({
            dark: x
          });
        })) || Si;
        return () => {
          I(), H(), g();
        };
      }
    }, [
      U,
      v,
      c,
      e,
      a,
      d,
      u,
      f,
      p
    ]), {
      ...h,
      mode: m ? h.mode : void 0,
      systemMode: m ? h.systemMode : void 0,
      colorScheme: m ? w : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const BB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function hB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = Qs, colorSchemeStorageKey: n = bs, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = B.createContext(void 0), c = () => B.useContext(l) || s, d = {}, u = {};
    function f(m) {
      var _a2, _b2, _c2, _d2;
      const { children: b, theme: w, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: C = o, storageManager: S, storageWindow: I = typeof window > "u" ? void 0 : window, documentNode: H = typeof document > "u" ? void 0 : document, colorSchemeNode: g = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: x = false, disableStyleSheetGeneration: k = false, defaultMode: K = "system", noSsr: $ } = m, D = B.useRef(false), M = ys(), N = B.useContext(l), q = !!N && !x, P = B.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), j = P[e], eA = j || P, { colorSchemes: nA = d, components: R = u, cssVarPrefix: W } = eA, V = Object.keys(nA).filter((gA) => !!nA[gA]).join(","), J = B.useMemo(() => V.split(","), [
        V
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, tA = nA[dA] && nA[iA] ? K : ((_b2 = (_a2 = nA[eA.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = eA.palette) == null ? void 0 : _c2.mode), { mode: z, setMode: oA, systemMode: aA, lightColorScheme: y, darkColorScheme: E, colorScheme: F, setColorScheme: _ } = pB({
        supportedColorSchemes: J,
        defaultLightColorScheme: dA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: U,
        defaultMode: tA,
        storageManager: S,
        storageWindow: I,
        noSsr: $
      });
      let X = z, G = F;
      q && (X = N.mode, G = N.colorScheme);
      const sA = B.useMemo(() => {
        var _a3;
        const gA = G || eA.defaultColorScheme, PA = ((_a3 = eA.generateThemeVars) == null ? void 0 : _a3.call(eA)) || eA.vars, WA = {
          ...eA,
          components: R,
          colorSchemes: nA,
          cssVarPrefix: W,
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
        R,
        nA,
        W
      ]), cA = eA.colorSchemeSelector;
      tt(() => {
        if (G && g && cA && cA !== "media") {
          const gA = cA;
          let PA = cA;
          if (gA === "class" && (PA = ".%s"), gA === "data" && (PA = "[data-%s]"), (gA == null ? void 0 : gA.startsWith("data-")) && !gA.includes("%s") && (PA = `[${gA}="%s"]`), PA.startsWith(".")) g.classList.remove(...J.map((WA) => PA.substring(1).replace("%s", WA))), g.classList.add(PA.substring(1).replace("%s", G));
          else {
            const WA = PA.replace("%s", G).match(/\[([^\]]+)\]/);
            if (WA) {
              const [oe, jA] = WA[1].split("=");
              jA || J.forEach((ot) => {
                g.removeAttribute(oe.replace(G, ot));
              }), g.setAttribute(oe, jA ? jA.replace(/"|'/g, "") : "");
            } else g.setAttribute(PA, G);
          }
        }
      }, [
        G,
        cA,
        g,
        J
      ]), B.useEffect(() => {
        let gA;
        if (C && D.current && H) {
          const PA = H.createElement("style");
          PA.appendChild(H.createTextNode(BB)), H.head.appendChild(PA), window.getComputedStyle(H.body), gA = setTimeout(() => {
            H.head.removeChild(PA);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        G,
        C,
        H
      ]), B.useEffect(() => (D.current = true, () => {
        D.current = false;
      }), []);
      const fA = B.useMemo(() => ({
        allColorSchemes: J,
        colorScheme: G,
        darkColorScheme: E,
        lightColorScheme: y,
        mode: X,
        setColorScheme: _,
        setMode: oA,
        systemMode: aA
      }), [
        J,
        G,
        E,
        y,
        X,
        _,
        oA,
        aA,
        sA.colorSchemeSelector
      ]);
      let AA = true;
      (k || eA.cssVariables === false || q && (M == null ? void 0 : M.cssVarPrefix) === W) && (AA = false);
      const qA = L.jsxs(B.Fragment, {
        children: [
          L.jsx(Gu, {
            themeId: j ? e : void 0,
            theme: sA,
            children: b
          }),
          AA && L.jsx(hu, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return q ? qA : L.jsx(l.Provider, {
        value: fA,
        children: qA
      });
    }
    const p = typeof i == "string" ? i : i.light, h = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => uB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: h,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function CB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const vl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, mB = (A, e, t) => {
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
  }, wB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function xi(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return mB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, d = wB(a, s);
        Object.assign(n, {
          [c]: d
        }), vl(o, a, `var(${c})`, l), vl(i, a, `var(${c}, ${d})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function vB(A, e = {}) {
    const { getSelector: t = Q, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: d } = xi(s, e);
    let u = d;
    const f = {}, { [a]: p, ...h } = o;
    if (Object.entries(h || {}).forEach(([w, v]) => {
      const { vars: U, css: C, varsWithDefaults: S } = xi(v, e);
      u = YA(u, S), f[w] = {
        css: C,
        vars: U
      };
    }), p) {
      const { css: w, vars: v, varsWithDefaults: U } = xi(p, e);
      u = YA(u, U), f[a] = {
        css: w,
        vars: v
      };
    }
    function Q(w, v) {
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
      vars: u,
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
        function U(I, H) {
          Object.keys(H).length && w.push(typeof I == "string" ? {
            [I]: {
              ...H
            }
          } : I);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: C, ...S } = f;
        if (C) {
          const { css: I } = C, H = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, g = !r && H ? {
            colorScheme: H,
            ...I
          } : {
            ...I
          };
          U(t(v, {
            ...g
          }), g);
        }
        return Object.entries(S).forEach(([I, { css: H }]) => {
          var _a3, _b3;
          const g = (_b3 = (_a3 = o[I]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, x = !r && g ? {
            colorScheme: g,
            ...H
          } : {
            ...H
          };
          U(t(I, {
            ...x
          }), x);
        }), w;
      }
    };
  }
  function yB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function $u() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: jr.white,
        default: jr.white
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
  const QB = $u();
  function Wu() {
    return {
      text: {
        primary: jr.white,
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
        active: jr.white,
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
  const yl = Wu();
  function Ql(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = ws(A.main, n) : e === "dark" && (A.dark = ms(A.main, o)));
  }
  function bB(A = "light") {
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
  function FB(A = "light") {
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
  function UB(A = "light") {
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
  function EB(A = "light") {
    return A === "dark" ? {
      main: _t[400],
      light: _t[300],
      dark: _t[700]
    } : {
      main: _t[700],
      light: _t[500],
      dark: _t[900]
    };
  }
  function SB(A = "light") {
    return A === "dark" ? {
      main: Nt[400],
      light: Nt[300],
      dark: Nt[700]
    } : {
      main: Nt[800],
      light: Nt[500],
      dark: Nt[900]
    };
  }
  function xB(A = "light") {
    return A === "dark" ? {
      main: mr[400],
      light: mr[300],
      dark: mr[700]
    } : {
      main: "#ed6c02",
      light: mr[500],
      dark: mr[900]
    };
  }
  function Fs(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || bB(e), i = A.secondary || FB(e), a = A.error || UB(e), s = A.info || EB(e), l = A.success || SB(e), c = A.warning || xB(e);
    function d(h) {
      return $p(h, yl.text.primary) >= t ? yl.text.primary : QB.text.primary;
    }
    const u = ({ color: h, name: Q, mainShade: m = 500, lightShade: b = 300, darkShade: w = 700 }) => {
      if (h = {
        ...h
      }, !h.main && h[m] && (h.main = h[m]), !h.hasOwnProperty("main")) throw new Error(At(11, Q ? ` (${Q})` : "", m));
      if (typeof h.main != "string") throw new Error(At(12, Q ? ` (${Q})` : "", JSON.stringify(h.main)));
      return Ql(h, "light", b, r), Ql(h, "dark", w, r), h.contrastText || (h.contrastText = d(h.main)), h;
    };
    let f;
    return e === "light" ? f = $u() : e === "dark" && (f = Wu()), YA({
      common: {
        ...jr
      },
      mode: e,
      primary: u({
        color: o,
        name: "primary"
      }),
      secondary: u({
        color: i,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: u({
        color: a,
        name: "error"
      }),
      warning: u({
        color: c,
        name: "warning"
      }),
      info: u({
        color: s,
        name: "info"
      }),
      success: u({
        color: l,
        name: "success"
      }),
      grey: Ef,
      contrastThreshold: t,
      getContrastText: d,
      augmentColor: u,
      tonalOffset: r,
      ...f
    }, n);
  }
  function IB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function HB(A, e) {
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
  function TB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const bl = {
    textTransform: "uppercase"
  }, Fl = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Xu(A, e) {
    const { fontFamily: t = Fl, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...d } = typeof e == "function" ? e(A) : e, u = r / 14, f = c || ((Q) => `${Q / s * u}rem`), p = (Q, m, b, w, v) => ({
      fontFamily: t,
      fontWeight: Q,
      fontSize: f(m),
      lineHeight: b,
      ...t === Fl ? {
        letterSpacing: `${TB(w / m)}em`
      } : {},
      ...v,
      ...l
    }), h = {
      h1: p(n, 96, 1.167, -1.5),
      h2: p(n, 60, 1.2, -0.5),
      h3: p(o, 48, 1.167, 0),
      h4: p(o, 34, 1.235, 0.25),
      h5: p(o, 24, 1.334, 0),
      h6: p(i, 20, 1.6, 0.15),
      subtitle1: p(o, 16, 1.75, 0.15),
      subtitle2: p(i, 14, 1.57, 0.1),
      body1: p(o, 16, 1.5, 0.15),
      body2: p(o, 14, 1.43, 0.15),
      button: p(i, 14, 1.75, 0.4, bl),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, bl),
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
    }, d, {
      clone: false
    });
  }
  const LB = 0.2, kB = 0.14, RB = 0.12;
  function TA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${LB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${kB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${RB})`
    ].join(",");
  }
  const KB = [
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
  ], OB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, DB = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Ul(A) {
    return `${Math.round(A)}ms`;
  }
  function MB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function PB(A) {
    const e = {
      ...OB,
      ...A.easing
    }, t = {
      ...DB,
      ...A.duration
    };
    return {
      getAutoHeightDuration: MB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : Ul(i)} ${a} ${typeof s == "string" ? s : Ul(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const _B = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function NB(A) {
    return _e(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function ju(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !NB(a) || i.startsWith("unstable_") ? delete r[i] : _e(a) && (r[i] = {
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
  function fa(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(At(20));
    const c = Fs(o), d = ps(A);
    let u = YA(d, {
      mixins: HB(d.breakpoints, r),
      palette: c,
      shadows: KB.slice(),
      typography: Xu(c, a),
      transitions: PB(i),
      zIndex: {
        ..._B
      }
    });
    return u = YA(u, l), u = e.reduce((f, p) => YA(f, p), u), u.unstable_sxConfig = {
      ...ln,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, u.unstable_sx = function(p) {
      return ht({
        sx: p,
        theme: this
      });
    }, u.toRuntimeSource = ju, u;
  }
  function ga(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const GB = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = ga(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function zu(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function Ju(A) {
    return A === "dark" ? GB : [];
  }
  function VB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Fs(e);
    return {
      palette: o,
      opacity: {
        ...zu(o.mode),
        ...t
      },
      overlays: r || Ju(o.mode),
      ...n
    };
  }
  function $B(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const WB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], XB = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return WB(A.cssVarPrefix).forEach((a) => {
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
  function jB(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function O(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Ir(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Hu(A);
  }
  function ze(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = xr(Ir(A[e])));
  }
  function zB(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Le = (A) => {
    try {
      return A();
    } catch {
    }
  }, JB = (A = "mui") => CB(A);
  function Ii(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = VB({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = fa({
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
        ...zu(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || Ju(n)
    }, i;
  }
  function YB(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = $B, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], d = r || (t.light && c !== "light" ? "light" : c), u = JB(o), { [d]: f, light: p, dark: h, ...Q } = t, m = {
      ...Q
    };
    let b = f;
    if ((d === "dark" && !("dark" in t) || d === "light" && !("light" in t)) && (b = true), !b) throw new Error(At(21, d));
    const w = Ii(m, b, l, d);
    p && !m.light && Ii(m, p, void 0, "light"), h && !m.dark && Ii(m, h, void 0, "dark");
    let v = {
      defaultColorScheme: d,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: u,
      colorSchemes: m,
      font: {
        ...IB(w.typography),
        ...w.font
      },
      spacing: zB(l.spacing)
    };
    Object.keys(v.colorSchemes).forEach((H) => {
      const g = v.colorSchemes[H].palette, x = (k) => {
        const K = k.split("-"), $ = K[1], D = K[2];
        return u(k, g[$][D]);
      };
      if (g.mode === "light" && (O(g.common, "background", "#fff"), O(g.common, "onBackground", "#000")), g.mode === "dark" && (O(g.common, "background", "#000"), O(g.common, "onBackground", "#fff")), jB(g, [
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
      ]), g.mode === "light") {
        O(g.Alert, "errorColor", bA(g.error.light, 0.6)), O(g.Alert, "infoColor", bA(g.info.light, 0.6)), O(g.Alert, "successColor", bA(g.success.light, 0.6)), O(g.Alert, "warningColor", bA(g.warning.light, 0.6)), O(g.Alert, "errorFilledBg", x("palette-error-main")), O(g.Alert, "infoFilledBg", x("palette-info-main")), O(g.Alert, "successFilledBg", x("palette-success-main")), O(g.Alert, "warningFilledBg", x("palette-warning-main")), O(g.Alert, "errorFilledColor", Le(() => g.getContrastText(g.error.main))), O(g.Alert, "infoFilledColor", Le(() => g.getContrastText(g.info.main))), O(g.Alert, "successFilledColor", Le(() => g.getContrastText(g.success.main))), O(g.Alert, "warningFilledColor", Le(() => g.getContrastText(g.warning.main))), O(g.Alert, "errorStandardBg", FA(g.error.light, 0.9)), O(g.Alert, "infoStandardBg", FA(g.info.light, 0.9)), O(g.Alert, "successStandardBg", FA(g.success.light, 0.9)), O(g.Alert, "warningStandardBg", FA(g.warning.light, 0.9)), O(g.Alert, "errorIconColor", x("palette-error-main")), O(g.Alert, "infoIconColor", x("palette-info-main")), O(g.Alert, "successIconColor", x("palette-success-main")), O(g.Alert, "warningIconColor", x("palette-warning-main")), O(g.AppBar, "defaultBg", x("palette-grey-100")), O(g.Avatar, "defaultBg", x("palette-grey-400")), O(g.Button, "inheritContainedBg", x("palette-grey-300")), O(g.Button, "inheritContainedHoverBg", x("palette-grey-A100")), O(g.Chip, "defaultBorder", x("palette-grey-400")), O(g.Chip, "defaultAvatarColor", x("palette-grey-700")), O(g.Chip, "defaultIconColor", x("palette-grey-700")), O(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), O(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), O(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), O(g.LinearProgress, "primaryBg", FA(g.primary.main, 0.62)), O(g.LinearProgress, "secondaryBg", FA(g.secondary.main, 0.62)), O(g.LinearProgress, "errorBg", FA(g.error.main, 0.62)), O(g.LinearProgress, "infoBg", FA(g.info.main, 0.62)), O(g.LinearProgress, "successBg", FA(g.success.main, 0.62)), O(g.LinearProgress, "warningBg", FA(g.warning.main, 0.62)), O(g.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.11)`), O(g.Slider, "primaryTrack", FA(g.primary.main, 0.62)), O(g.Slider, "secondaryTrack", FA(g.secondary.main, 0.62)), O(g.Slider, "errorTrack", FA(g.error.main, 0.62)), O(g.Slider, "infoTrack", FA(g.info.main, 0.62)), O(g.Slider, "successTrack", FA(g.success.main, 0.62)), O(g.Slider, "warningTrack", FA(g.warning.main, 0.62));
        const k = hn(g.background.default, 0.8);
        O(g.SnackbarContent, "bg", k), O(g.SnackbarContent, "color", Le(() => g.getContrastText(k))), O(g.SpeedDialAction, "fabHoverBg", hn(g.background.paper, 0.15)), O(g.StepConnector, "border", x("palette-grey-400")), O(g.StepContent, "border", x("palette-grey-400")), O(g.Switch, "defaultColor", x("palette-common-white")), O(g.Switch, "defaultDisabledColor", x("palette-grey-100")), O(g.Switch, "primaryDisabledColor", FA(g.primary.main, 0.62)), O(g.Switch, "secondaryDisabledColor", FA(g.secondary.main, 0.62)), O(g.Switch, "errorDisabledColor", FA(g.error.main, 0.62)), O(g.Switch, "infoDisabledColor", FA(g.info.main, 0.62)), O(g.Switch, "successDisabledColor", FA(g.success.main, 0.62)), O(g.Switch, "warningDisabledColor", FA(g.warning.main, 0.62)), O(g.TableCell, "border", FA(Bn(g.divider, 1), 0.88)), O(g.Tooltip, "bg", Bn(g.grey[700], 0.92));
      }
      if (g.mode === "dark") {
        O(g.Alert, "errorColor", FA(g.error.light, 0.6)), O(g.Alert, "infoColor", FA(g.info.light, 0.6)), O(g.Alert, "successColor", FA(g.success.light, 0.6)), O(g.Alert, "warningColor", FA(g.warning.light, 0.6)), O(g.Alert, "errorFilledBg", x("palette-error-dark")), O(g.Alert, "infoFilledBg", x("palette-info-dark")), O(g.Alert, "successFilledBg", x("palette-success-dark")), O(g.Alert, "warningFilledBg", x("palette-warning-dark")), O(g.Alert, "errorFilledColor", Le(() => g.getContrastText(g.error.dark))), O(g.Alert, "infoFilledColor", Le(() => g.getContrastText(g.info.dark))), O(g.Alert, "successFilledColor", Le(() => g.getContrastText(g.success.dark))), O(g.Alert, "warningFilledColor", Le(() => g.getContrastText(g.warning.dark))), O(g.Alert, "errorStandardBg", bA(g.error.light, 0.9)), O(g.Alert, "infoStandardBg", bA(g.info.light, 0.9)), O(g.Alert, "successStandardBg", bA(g.success.light, 0.9)), O(g.Alert, "warningStandardBg", bA(g.warning.light, 0.9)), O(g.Alert, "errorIconColor", x("palette-error-main")), O(g.Alert, "infoIconColor", x("palette-info-main")), O(g.Alert, "successIconColor", x("palette-success-main")), O(g.Alert, "warningIconColor", x("palette-warning-main")), O(g.AppBar, "defaultBg", x("palette-grey-900")), O(g.AppBar, "darkBg", x("palette-background-paper")), O(g.AppBar, "darkColor", x("palette-text-primary")), O(g.Avatar, "defaultBg", x("palette-grey-600")), O(g.Button, "inheritContainedBg", x("palette-grey-800")), O(g.Button, "inheritContainedHoverBg", x("palette-grey-700")), O(g.Chip, "defaultBorder", x("palette-grey-700")), O(g.Chip, "defaultAvatarColor", x("palette-grey-300")), O(g.Chip, "defaultIconColor", x("palette-grey-300")), O(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), O(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), O(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), O(g.LinearProgress, "primaryBg", bA(g.primary.main, 0.5)), O(g.LinearProgress, "secondaryBg", bA(g.secondary.main, 0.5)), O(g.LinearProgress, "errorBg", bA(g.error.main, 0.5)), O(g.LinearProgress, "infoBg", bA(g.info.main, 0.5)), O(g.LinearProgress, "successBg", bA(g.success.main, 0.5)), O(g.LinearProgress, "warningBg", bA(g.warning.main, 0.5)), O(g.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.13)`), O(g.Slider, "primaryTrack", bA(g.primary.main, 0.5)), O(g.Slider, "secondaryTrack", bA(g.secondary.main, 0.5)), O(g.Slider, "errorTrack", bA(g.error.main, 0.5)), O(g.Slider, "infoTrack", bA(g.info.main, 0.5)), O(g.Slider, "successTrack", bA(g.success.main, 0.5)), O(g.Slider, "warningTrack", bA(g.warning.main, 0.5));
        const k = hn(g.background.default, 0.98);
        O(g.SnackbarContent, "bg", k), O(g.SnackbarContent, "color", Le(() => g.getContrastText(k))), O(g.SpeedDialAction, "fabHoverBg", hn(g.background.paper, 0.15)), O(g.StepConnector, "border", x("palette-grey-600")), O(g.StepContent, "border", x("palette-grey-600")), O(g.Switch, "defaultColor", x("palette-grey-300")), O(g.Switch, "defaultDisabledColor", x("palette-grey-600")), O(g.Switch, "primaryDisabledColor", bA(g.primary.main, 0.55)), O(g.Switch, "secondaryDisabledColor", bA(g.secondary.main, 0.55)), O(g.Switch, "errorDisabledColor", bA(g.error.main, 0.55)), O(g.Switch, "infoDisabledColor", bA(g.info.main, 0.55)), O(g.Switch, "successDisabledColor", bA(g.success.main, 0.55)), O(g.Switch, "warningDisabledColor", bA(g.warning.main, 0.55)), O(g.TableCell, "border", bA(Bn(g.divider, 1), 0.68)), O(g.Tooltip, "bg", Bn(g.grey[700], 0.92));
      }
      ze(g.background, "default"), ze(g.background, "paper"), ze(g.common, "background"), ze(g.common, "onBackground"), ze(g, "divider"), Object.keys(g).forEach((k) => {
        const K = g[k];
        k !== "tonalOffset" && K && typeof K == "object" && (K.main && O(g[k], "mainChannel", xr(Ir(K.main))), K.light && O(g[k], "lightChannel", xr(Ir(K.light))), K.dark && O(g[k], "darkChannel", xr(Ir(K.dark))), K.contrastText && O(g[k], "contrastTextChannel", xr(Ir(K.contrastText))), k === "text" && (ze(g[k], "primary"), ze(g[k], "secondary")), k === "action" && (K.active && ze(g[k], "active"), K.selected && ze(g[k], "selected")));
      });
    }), v = e.reduce((H, g) => YA(H, g), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: XB(v)
    }, { vars: C, generateThemeVars: S, generateStyleSheets: I } = vB(v, U);
    return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([H, g]) => {
      v[H] = g;
    }), v.generateThemeVars = S, v.generateStyleSheets = I, v.generateSpacing = function() {
      return bu(l.spacing, fs(this));
    }, v.getColorSchemeSelector = yB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...ln,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, v.unstable_sx = function(g) {
      return ht({
        sx: g,
        theme: this
      });
    }, v.toRuntimeSource = ju, v;
  }
  function El(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Fs({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function si(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return fa(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const d = fa({
        ...A,
        palette: c
      }, ...e);
      return d.defaultColorScheme = a, d.colorSchemes = l, d.palette.mode === "light" && (d.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: d.palette
      }, El(d, "dark", l.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: d.palette
      }, El(d, "light", l.light)), d;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), YB({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const Us = si();
  Es = function() {
    const A = hs(Us);
    return A[Ge] || A;
  };
  Yu = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  $e = (A) => Yu(A) && A !== "classes";
  lA = Op({
    themeId: Ge,
    defaultTheme: Us,
    rootShouldForwardProp: $e
  });
  function ZB({ theme: A, ...e }) {
    const t = Ge in A ? A[Ge] : void 0;
    return L.jsx(Gu, {
      ...e,
      themeId: t ? Ge : void 0,
      theme: t || A
    });
  }
  const Cn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: qB } = hB({
    themeId: Ge,
    theme: () => si({
      cssVariables: true
    }),
    colorSchemeStorageKey: Cn.colorSchemeStorageKey,
    modeStorageKey: Cn.modeStorageKey,
    defaultColorScheme: {
      light: Cn.defaultLightColorScheme,
      dark: Cn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: Xu(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return ht({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), Ah = qB;
  function Zu({ theme: A, ...e }) {
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
    return t ? L.jsx(ZB, {
      theme: t,
      ...e
    }) : L.jsx(Ah, {
      theme: A,
      ...e
    });
  }
  function eh(A) {
    return L.jsx(Fu, {
      ...A,
      defaultTheme: Us,
      themeId: Ge
    });
  }
  function Ss(A) {
    return function(t) {
      return L.jsx(eh, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function th() {
    return Uu;
  }
  OA = lB;
  KA = function(A) {
    return aB(A);
  };
  function rh(A) {
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
  let nh, oh;
  nh = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${hA(e)}`,
        `fontSize${hA(t)}`
      ]
    };
    return RA(n, rh, r);
  };
  oh = lA("svg", {
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
  pa = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: d, viewBox: u = "0 0 24 24", ...f } = r, p = B.isValidElement(n) && n.type === "svg", h = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: u,
      hasSvgAsChild: p
    }, Q = {};
    c || (Q.viewBox = u);
    const m = nh(h);
    return L.jsxs(oh, {
      as: a,
      className: pA(m.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": d ? void 0 : true,
      role: d ? "img" : void 0,
      ref: t,
      ...Q,
      ...f,
      ...p && n.props,
      ownerState: h,
      children: [
        p ? n.props.children : n,
        d ? L.jsx("title", {
          children: d
        }) : null
      ]
    });
  });
  pa.muiName = "SvgIcon";
  qu = function(A, e) {
    function t(r, n) {
      return L.jsx(pa, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = pa.muiName, B.memo(B.forwardRef(t));
  };
  ih = function(A, e) {
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
  function Ad(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function Ba(A, e) {
    return Ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, Ba(A, e);
  }
  function ed(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, Ba(A, e);
  }
  const { initPromise: ah } = wf, sh = ah.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), lh = await sh.then((A) => A());
  var xs = lh;
  const mn = Ya(xs), Sl = {
    disabled: false
  }, lo = T.createContext(null);
  var ch = function(e) {
    return e.scrollTop;
  }, Hr = "unmounted", bt = "exited", Ft = "entering", Zt = "entered", ha = "exiting", We = (function(A) {
    ed(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = bt, o.appearStatus = Ft) : s = Zt : r.unmountOnExit || r.mountOnEnter ? s = Hr : s = bt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Hr ? {
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
        this.props.in ? i !== Ft && i !== Zt && (o = Ft) : (i === Ft || i === Zt) && (o = ha);
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
          var i = this.props.nodeRef ? this.props.nodeRef.current : mn.findDOMNode(this);
          i && ch(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === bt && this.setState({
        status: Hr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        mn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], d = this.getTimeouts(), u = a ? d.appear : d.enter;
      if (!n && !i || Sl.disabled) {
        this.safeSetState({
          status: Zt
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Ft
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(u, function() {
          o.safeSetState({
            status: Zt
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : mn.findDOMNode(this);
      if (!o || Sl.disabled) {
        this.safeSetState({
          status: bt
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: ha
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : mn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Hr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = Ad(o, [
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
      return T.createElement(lo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : T.cloneElement(T.Children.only(i), a));
    }, e;
  })(T.Component);
  We.contextType = lo;
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
  We.UNMOUNTED = Hr;
  We.EXITED = bt;
  We.ENTERING = Ft;
  We.ENTERED = Zt;
  We.EXITING = ha;
  function uh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Is(A, e) {
    var t = function(o) {
      return e && B.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && B.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function dh(A, e) {
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
  function fh(A, e) {
    return Is(A.children, function(t) {
      return B.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Ht(t, "appear", A),
        enter: Ht(t, "enter", A),
        exit: Ht(t, "exit", A)
      });
    });
  }
  function gh(A, e, t) {
    var r = Is(A.children), n = dh(e, r);
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
  var ph = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, Bh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, Hs = (function(A) {
    ed(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(uh(o));
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
        children: s ? fh(n, a) : gh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Is(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = io({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = Ad(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = ph(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? T.createElement(lo.Provider, {
        value: s
      }, l) : T.createElement(lo.Provider, {
        value: s
      }, T.createElement(o, a, l));
    }, e;
  })(T.Component);
  Hs.propTypes = {};
  Hs.defaultProps = Bh;
  const td = (A) => A.scrollTop;
  function co(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function hh(A) {
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
  let Ch, mh;
  Ch = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return RA(o, hh, n);
  };
  mh = lA("div", {
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
  Ca = B.forwardRef(function(e, t) {
    var _a2;
    const r = KA({
      props: e,
      name: "MuiPaper"
    }), n = Es(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, d = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, u = Ch(d);
    return L.jsx(mh, {
      as: i,
      ownerState: d,
      className: pA(u.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${sr("#fff", ga(a))}, ${sr("#fff", ga(a))})`
          }
        },
        ...c.style
      }
    });
  });
  le = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: d = {
      [A]: void 0
    }, ...u } = o, f = c[A] || r, p = Mu(d[A], n), { props: { component: h, ...Q }, internalRef: m } = Du({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? u : void 0,
      externalSlotProps: p
    }), b = pe(m, p == null ? void 0 : p.ref, e.ref), w = A === "root" ? h || l : h, v = Ku(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...Q,
      ...w && !a && {
        as: w
      },
      ...w && a && {
        component: w
      },
      ref: b
    }, n);
    return [
      f,
      v
    ];
  };
  class uo {
    static create() {
      return new uo();
    }
    static use() {
      const e = Lu(uo.create).current, [t, r] = B.useState(false);
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
      return this.mounted || (this.mounted = vh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function wh() {
    return uo.use();
  }
  function vh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function yh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, d] = B.useState(false), u = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && d(true), B.useEffect(() => {
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
      className: u,
      style: f,
      children: L.jsx("span", {
        className: p
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
  ]), ma = 550, Qh = 80, bh = on`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Fh = on`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Uh = on`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Eh = lA("span", {
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
  }), Sh = lA(yh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${ve.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${bh};
    animation-duration: ${ma}ms;
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
    animation-name: ${Fh};
    animation-duration: ${ma}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${ve.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Uh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, xh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = B.useState([]), c = B.useRef(0), d = B.useRef(null);
    B.useEffect(() => {
      d.current && (d.current(), d.current = null);
    }, [
      s
    ]);
    const u = B.useRef(false), f = ku(), p = B.useRef(null), h = B.useRef(null), Q = B.useCallback((v) => {
      const { pulsate: U, rippleX: C, rippleY: S, rippleSize: I, cb: H } = v;
      l((g) => [
        ...g,
        L.jsx(Sh, {
          classes: {
            ripple: pA(o.ripple, ve.ripple),
            rippleVisible: pA(o.rippleVisible, ve.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, ve.ripplePulsate),
            child: pA(o.child, ve.child),
            childLeaving: pA(o.childLeaving, ve.childLeaving),
            childPulsate: pA(o.childPulsate, ve.childPulsate)
          },
          timeout: ma,
          pulsate: U,
          rippleX: C,
          rippleY: S,
          rippleSize: I
        }, c.current)
      ]), c.current += 1, d.current = H;
    }, [
      o
    ]), m = B.useCallback((v = {}, U = {}, C = () => {
    }) => {
      const { pulsate: S = false, center: I = n || U.pulsate, fakeElement: H = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && u.current) {
        u.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (u.current = true);
      const g = H ? null : h.current, x = g ? g.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let k, K, $;
      if (I || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) k = Math.round(x.width / 2), K = Math.round(x.height / 2);
      else {
        const { clientX: D, clientY: M } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        k = Math.round(D - x.left), K = Math.round(M - x.top);
      }
      if (I) $ = Math.sqrt((2 * x.width ** 2 + x.height ** 2) / 3), $ % 2 === 0 && ($ += 1);
      else {
        const D = Math.max(Math.abs((g ? g.clientWidth : 0) - k), k) * 2 + 2, M = Math.max(Math.abs((g ? g.clientHeight : 0) - K), K) * 2 + 2;
        $ = Math.sqrt(D ** 2 + M ** 2);
      }
      (v == null ? void 0 : v.touches) ? p.current === null && (p.current = () => {
        Q({
          pulsate: S,
          rippleX: k,
          rippleY: K,
          rippleSize: $,
          cb: C
        });
      }, f.start(Qh, () => {
        p.current && (p.current(), p.current = null);
      })) : Q({
        pulsate: S,
        rippleX: k,
        rippleY: K,
        rippleSize: $,
        cb: C
      });
    }, [
      n,
      Q,
      f
    ]), b = B.useCallback(() => {
      m({}, {
        pulsate: true
      });
    }, [
      m
    ]), w = B.useCallback((v, U) => {
      if (f.clear(), (v == null ? void 0 : v.type) === "touchend" && p.current) {
        p.current(), p.current = null, f.start(0, () => {
          w(v, U);
        });
        return;
      }
      p.current = null, l((C) => C.length > 0 ? C.slice(1) : C), d.current = U;
    }, [
      f
    ]);
    return B.useImperativeHandle(t, () => ({
      pulsate: b,
      start: m,
      stop: w
    }), [
      b,
      m,
      w
    ]), L.jsx(Eh, {
      className: pA(ve.root, o.root, i),
      ref: h,
      ...a,
      children: L.jsx(Hs, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Ih(A) {
    return kA("MuiButtonBase", A);
  }
  let Hh, Th, Lh;
  Hh = IA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Th = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = RA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Ih, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Lh = lA("button", {
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
    [`&.${Hh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  kh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: d = false, focusRipple: u = false, focusVisibleClassName: f, LinkComponent: p = "a", onBlur: h, onClick: Q, onContextMenu: m, onDragLeave: b, onFocus: w, onFocusVisible: v, onKeyDown: U, onKeyUp: C, onMouseDown: S, onMouseLeave: I, onMouseUp: H, onTouchEnd: g, onTouchMove: x, onTouchStart: k, tabIndex: K = 0, TouchRippleProps: $, touchRippleRef: D, type: M, ...N } = r, q = B.useRef(null), P = wh(), j = pe(P.ref, D), [eA, nA] = B.useState(false);
    l && eA && nA(false), B.useImperativeHandle(n, () => ({
      focusVisible: () => {
        nA(true), q.current.focus();
      }
    }), []);
    const R = P.shouldMount && !c && !l;
    B.useEffect(() => {
      eA && u && !c && P.pulsate();
    }, [
      c,
      u,
      eA,
      P
    ]);
    const W = Je(P, "start", S, d), V = Je(P, "stop", m, d), J = Je(P, "stop", b, d), dA = Je(P, "stop", H, d), iA = Je(P, "stop", (AA) => {
      eA && AA.preventDefault(), I && I(AA);
    }, d), tA = Je(P, "start", k, d), z = Je(P, "stop", g, d), oA = Je(P, "stop", x, d), aA = Je(P, "stop", (AA) => {
      pl(AA.target) || nA(false), h && h(AA);
    }, false), y = Lt((AA) => {
      q.current || (q.current = AA.currentTarget), pl(AA.target) && (nA(true), v && v(AA)), w && w(AA);
    }), E = () => {
      const AA = q.current;
      return s && s !== "button" && !(AA.tagName === "A" && AA.href);
    }, F = Lt((AA) => {
      u && !AA.repeat && eA && AA.key === " " && P.stop(AA, () => {
        P.start(AA);
      }), AA.target === AA.currentTarget && E() && AA.key === " " && AA.preventDefault(), U && U(AA), AA.target === AA.currentTarget && E() && AA.key === "Enter" && !l && (AA.preventDefault(), Q && Q(AA));
    }), _ = Lt((AA) => {
      u && AA.key === " " && eA && !AA.defaultPrevented && P.stop(AA, () => {
        P.pulsate(AA);
      }), C && C(AA), Q && AA.target === AA.currentTarget && E() && AA.key === " " && !AA.defaultPrevented && Q(AA);
    });
    let X = s;
    X === "button" && (N.href || N.to) && (X = p);
    const G = {};
    X === "button" ? (G.type = M === void 0 ? "button" : M, G.disabled = l) : (!N.href && !N.to && (G.role = "button"), l && (G["aria-disabled"] = l));
    const sA = pe(t, q), cA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: d,
      focusRipple: u,
      tabIndex: K,
      focusVisible: eA
    }, fA = Th(cA);
    return L.jsxs(Lh, {
      as: X,
      className: pA(fA.root, a),
      ownerState: cA,
      onBlur: aA,
      onClick: Q,
      onContextMenu: V,
      onFocus: y,
      onKeyDown: F,
      onKeyUp: _,
      onMouseDown: W,
      onMouseLeave: iA,
      onMouseUp: dA,
      onDragLeave: J,
      onTouchEnd: z,
      onTouchMove: oA,
      onTouchStart: tA,
      ref: sA,
      tabIndex: l ? -1 : K,
      type: M,
      ...G,
      ...N,
      children: [
        i,
        R ? L.jsx(xh, {
          ref: j,
          center: o,
          ...$
        }) : null
      ]
    });
  });
  function Je(A, e, t, r = false) {
    return Lt((n) => (t && t(n), r || A[e](n), true));
  }
  function Rh(A) {
    return typeof A.main == "string";
  }
  function Kh(A, e = []) {
    if (!Rh(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  mt = function(A = []) {
    return ([, e]) => e && Kh(e, A);
  };
  function Oh(A) {
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
  let it, wa, va, Dh, Mh, Ph, _h, Nh, Gh;
  it = 44;
  wa = on`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  va = on`
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
  Dh = typeof wa != "string" ? ss`
        animation: ${wa} 1.4s linear infinite;
      ` : null;
  Mh = typeof va != "string" ? ss`
        animation: ${va} 1.4s ease-in-out infinite;
      ` : null;
  Ph = (A) => {
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
    return RA(o, Oh, e);
  };
  _h = lA("span", {
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
        style: Dh || {
          animation: `${wa} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(mt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  Nh = lA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  Gh = lA("circle", {
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
        style: Mh || {
          animation: `${va} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Vh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiCircularProgress"
    }), { className: n, color: o = "primary", disableShrink: i = false, size: a = 40, style: s, thickness: l = 3.6, value: c = 0, variant: d = "indeterminate", ...u } = r, f = {
      ...r,
      color: o,
      disableShrink: i,
      size: a,
      thickness: l,
      value: c,
      variant: d
    }, p = Ph(f), h = {}, Q = {}, m = {};
    if (d === "determinate") {
      const b = 2 * Math.PI * ((it - l) / 2);
      h.strokeDasharray = b.toFixed(3), m["aria-valuenow"] = Math.round(c), h.strokeDashoffset = `${((100 - c) / 100 * b).toFixed(3)}px`, Q.transform = "rotate(-90deg)";
    }
    return L.jsx(_h, {
      className: pA(p.root, n),
      style: {
        width: a,
        height: a,
        ...Q,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...m,
      ...u,
      children: L.jsx(Nh, {
        className: p.svg,
        ownerState: f,
        viewBox: `${it / 2} ${it / 2} ${it} ${it}`,
        children: L.jsx(Gh, {
          className: p.circle,
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
  function $h(A) {
    return kA("MuiIconButton", A);
  }
  let xl, Wh, Xh, jh;
  xl = IA("MuiIconButton", [
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
  Wh = (A) => {
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
    return RA(a, $h, e);
  };
  Xh = lA(kh, {
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : sr(A.palette.action.active, A.palette.action.hoverOpacity),
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
      ...Object.entries(A.palette).filter(mt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(mt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : sr((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${xl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${xl.loading}`]: {
      color: "transparent"
    }
  })));
  jh = lA("span", {
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
  zh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: d, loading: u = null, loadingIndicator: f, ...p } = r, h = ai(d), Q = f ?? L.jsx(Vh, {
      "aria-labelledby": h,
      color: "inherit",
      size: 16
    }), m = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: u,
      loadingIndicator: Q,
      size: c
    }, b = Wh(m);
    return L.jsxs(Xh, {
      id: u ? h : d,
      className: pA(b.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || u,
      ref: t,
      ...p,
      ownerState: m,
      children: [
        typeof u == "boolean" && L.jsx("span", {
          className: b.loadingWrapper,
          style: {
            display: "contents"
          },
          children: L.jsx(jh, {
            className: b.loadingIndicator,
            ownerState: m,
            children: u && Q
          })
        }),
        o
      ]
    });
  });
  function Jh(A) {
    return kA("MuiTypography", A);
  }
  let Yh, Zh, qh, A0, Il;
  FU = IA("MuiTypography", [
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
  Yh = {
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
  Zh = th();
  qh = (A) => {
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
    return RA(a, Jh, i);
  };
  A0 = lA("span", {
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
        ...Object.entries(A.palette).filter(mt()).map(([e]) => ({
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
  Il = {
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
  Ao = B.forwardRef(function(e, t) {
    const { color: r, ...n } = KA({
      props: e,
      name: "MuiTypography"
    }), o = !Yh[r], i = Zh({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: d = false, paragraph: u = false, variant: f = "body1", variantMapping: p = Il, ...h } = i, Q = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: d,
      paragraph: u,
      variant: f,
      variantMapping: p
    }, m = l || (u ? "p" : p[f] || Il[f]) || "span", b = qh(Q);
    return L.jsx(A0, {
      as: m,
      ref: t,
      className: pA(b.root, s),
      ...h,
      ownerState: Q,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...h.style
      }
    });
  });
  function e0(A) {
    return typeof A == "function" ? A() : A;
  }
  const t0 = B.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = B.useState(null), s = pe(B.isValidElement(r) ? cn(r) : null, t);
    if (tt(() => {
      o || a(e0(n) || document.body);
    }, [
      n,
      o
    ]), tt(() => {
      if (i && !o) return cl(t, i), () => {
        cl(t, null);
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
    return i && xs.createPortal(r, i);
  });
  function wn(A) {
    return parseInt(A, 10) || 0;
  }
  const r0 = {
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
  function n0(A) {
    for (const e in A) return false;
    return true;
  }
  function Hl(A) {
    return n0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const o0 = B.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = B.useRef(a != null), c = B.useRef(null), d = pe(t, c), u = B.useRef(null), f = B.useRef(null), p = B.useCallback(() => {
      const w = c.current, v = f.current;
      if (!w || !v) return;
      const C = rt(w).getComputedStyle(w);
      if (C.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = C.width, v.value = w.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const S = C.boxSizing, I = wn(C.paddingBottom) + wn(C.paddingTop), H = wn(C.borderBottomWidth) + wn(C.borderTopWidth), g = v.scrollHeight;
      v.value = "x";
      const x = v.scrollHeight;
      let k = g;
      o && (k = Math.max(Number(o) * x, k)), n && (k = Math.min(Number(n) * x, k)), k = Math.max(k, x);
      const K = k + (S === "border-box" ? I + H : 0), $ = Math.abs(k - g) <= 1;
      return {
        outerHeightStyle: K,
        overflowing: $
      };
    }, [
      n,
      o,
      e.placeholder
    ]), h = Lt(() => {
      const w = c.current, v = p();
      if (!w || !v || Hl(v)) return false;
      const U = v.outerHeightStyle;
      return u.current != null && u.current !== U;
    }), Q = B.useCallback(() => {
      const w = c.current, v = p();
      if (!w || !v || Hl(v)) return;
      const U = v.outerHeightStyle;
      u.current !== U && (u.current = U, w.style.height = `${U}px`), w.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      p
    ]), m = B.useRef(-1);
    tt(() => {
      const w = Tu(Q), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = rt(v);
      U.addEventListener("resize", w);
      let C;
      return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
        h() && (C.unobserve(v), cancelAnimationFrame(m.current), Q(), m.current = requestAnimationFrame(() => {
          C.observe(v);
        }));
      }), C.observe(v)), () => {
        w.clear(), cancelAnimationFrame(m.current), U.removeEventListener("resize", w), C && C.disconnect();
      };
    }, [
      p,
      Q,
      h
    ]), tt(() => {
      Q();
    });
    const b = (w) => {
      l || Q(), r && r(w);
    };
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx("textarea", {
          value: a,
          onChange: b,
          ref: d,
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
            ...r0.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  ya = function(A) {
    return typeof A == "string";
  };
  gr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const Ts = B.createContext(void 0);
  pr = function() {
    return B.useContext(Ts);
  };
  function Tl(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function fo(A, e = false) {
    return A && (Tl(A.value) && A.value !== "" || e && Tl(A.defaultValue) && A.defaultValue !== "");
  }
  function i0(A) {
    return A.startAdornment;
  }
  function a0(A) {
    return kA("MuiInputBase", A);
  }
  const lr = IA("MuiInputBase", [
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
  var Ll;
  const li = (A, e) => {
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
  }, ci = (A, e) => {
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
  }, s0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: d, size: u, startAdornment: f, type: p } = A, h = {
      root: [
        "root",
        `color${hA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        u && u !== "medium" && `size${hA(u)}`,
        c && "multiline",
        f && "adornedStart",
        o && "adornedEnd",
        l && "hiddenLabel",
        d && "readOnly"
      ],
      input: [
        "input",
        r && "disabled",
        p === "search" && "inputTypeSearch",
        c && "inputMultiline",
        u === "small" && "inputSizeSmall",
        l && "inputHiddenLabel",
        f && "inputAdornedStart",
        o && "inputAdornedEnd",
        d && "readOnly"
      ]
    };
    return RA(h, a0, e);
  }, ui = lA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: li
  })(OA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${lr.disabled}`]: {
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
  }))), di = lA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: ci
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
      [`label[data-shrink=false] + .${lr.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${lr.disabled}`]: {
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
  })), kl = Ss({
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
  }), Ls = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: d, disabled: u, disableInjectingGlobalStyles: f, endAdornment: p, error: h, fullWidth: Q = false, id: m, inputComponent: b = "input", inputProps: w = {}, inputRef: v, margin: U, maxRows: C, minRows: S, multiline: I = false, name: H, onBlur: g, onChange: x, onClick: k, onFocus: K, onKeyDown: $, onKeyUp: D, placeholder: M, readOnly: N, renderSuffix: q, rows: P, size: j, slotProps: eA = {}, slots: nA = {}, startAdornment: R, type: W = "text", value: V, ...J } = r, dA = w.value != null ? w.value : V, { current: iA } = B.useRef(dA != null), tA = B.useRef(), z = B.useCallback((HA) => {
    }, []), oA = pe(tA, v, w.ref, z), [aA, y] = B.useState(false), E = pr(), F = gr({
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
      !E && u && aA && (y(false), g && g());
    }, [
      E,
      u,
      aA,
      g
    ]);
    const _ = E && E.onFilled, X = E && E.onEmpty, G = B.useCallback((HA) => {
      fo(HA) ? _ && _() : X && X();
    }, [
      _,
      X
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
      K && K(HA), w.onFocus && w.onFocus(HA), E && E.onFocus ? E.onFocus(HA) : y(true);
    }, cA = (HA) => {
      g && g(HA), w.onBlur && w.onBlur(HA), E && E.onBlur ? E.onBlur(HA) : y(false);
    }, fA = (HA, ...Kt) => {
      if (!iA) {
        const Cr = HA.target || tA.current;
        if (Cr == null) throw new Error(At(1));
        G({
          value: Cr.value
        });
      }
      w.onChange && w.onChange(HA, ...Kt), x && x(HA, ...Kt);
    };
    B.useEffect(() => {
      G(tA.current);
    }, []);
    const AA = (HA) => {
      tA.current && HA.currentTarget === HA.target && tA.current.focus(), k && k(HA);
    };
    let qA = b, gA = w;
    I && qA === "input" && (P ? gA = {
      type: void 0,
      minRows: P,
      maxRows: P,
      ...gA
    } : gA = {
      type: void 0,
      maxRows: C,
      minRows: S,
      ...gA
    }, qA = o0);
    const PA = (HA) => {
      G(HA.animationName === "mui-auto-fill-cancel" ? tA.current : {
        value: "x"
      });
    };
    B.useEffect(() => {
      E && E.setAdornedStart(!!R);
    }, [
      E,
      R
    ]);
    const WA = {
      ...r,
      color: F.color || "primary",
      disabled: F.disabled,
      endAdornment: p,
      error: F.error,
      focused: F.focused,
      formControl: E,
      fullWidth: Q,
      hiddenLabel: F.hiddenLabel,
      multiline: I,
      size: F.size,
      startAdornment: R,
      type: W
    }, oe = s0(WA), jA = nA.root || l.Root || ui, ot = eA.root || c.root || {}, vt = nA.input || l.Input || di;
    return gA = {
      ...gA,
      ...eA.input ?? c.input
    }, L.jsxs(B.Fragment, {
      children: [
        !f && typeof kl == "function" && (Ll || (Ll = L.jsx(kl, {}))),
        L.jsxs(jA, {
          ...ot,
          ref: t,
          onClick: AA,
          ...J,
          ...!ya(jA) && {
            ownerState: {
              ...WA,
              ...ot.ownerState
            }
          },
          className: pA(oe.root, ot.className, a, N && "MuiInputBase-readOnly"),
          children: [
            R,
            L.jsx(Ts.Provider, {
              value: null,
              children: L.jsx(vt, {
                "aria-invalid": F.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: d,
                disabled: F.disabled,
                id: m,
                onAnimationStart: PA,
                name: H,
                placeholder: M,
                readOnly: N,
                required: F.required,
                rows: P,
                value: dA,
                onKeyDown: $,
                onKeyUp: D,
                type: W,
                ...gA,
                ...!ya(vt) && {
                  as: qA,
                  ownerState: {
                    ...WA,
                    ...gA.ownerState
                  }
                },
                ref: oA,
                className: pA(oe.input, gA.className, N && "MuiInputBase-readOnly"),
                onBlur: cA,
                onChange: fA,
                onFocus: sA
              })
            }),
            p,
            q ? q({
              ...F,
              startAdornment: R
            }) : null
          ]
        })
      ]
    });
  });
  function l0(A) {
    return kA("MuiInput", A);
  }
  const vr = {
    ...lr,
    ...IA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function c0(A) {
    return kA("MuiOutlinedInput", A);
  }
  const ke = {
    ...lr,
    ...IA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function u0(A) {
    return kA("MuiFilledInput", A);
  }
  let yt, d0, f0;
  yt = {
    ...lr,
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
  d0 = qu(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  f0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  g0 = B.forwardRef(function(e, t) {
    const r = Es(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: d, onEntering: u, onExit: f, onExited: p, onExiting: h, style: Q, timeout: m = n, TransitionComponent: b = We, ...w } = e, v = B.useRef(null), U = pe(v, cn(a), t), C = ($) => (D) => {
      if ($) {
        const M = v.current;
        D === void 0 ? $(M) : $(M, D);
      }
    }, S = C(u), I = C(($, D) => {
      td($);
      const M = co({
        style: Q,
        timeout: m,
        easing: s
      }, {
        mode: "enter"
      });
      $.style.webkitTransition = r.transitions.create("opacity", M), $.style.transition = r.transitions.create("opacity", M), c && c($, D);
    }), H = C(d), g = C(h), x = C(($) => {
      const D = co({
        style: Q,
        timeout: m,
        easing: s
      }, {
        mode: "exit"
      });
      $.style.webkitTransition = r.transitions.create("opacity", D), $.style.transition = r.transitions.create("opacity", D), f && f($);
    }), k = C(p), K = ($) => {
      o && o(v.current, $);
    };
    return L.jsx(b, {
      appear: i,
      in: l,
      nodeRef: v,
      onEnter: I,
      onEntered: H,
      onEntering: S,
      onExit: x,
      onExited: k,
      onExiting: g,
      addEndListener: K,
      timeout: m,
      ...w,
      children: ($, { ownerState: D, ...M }) => B.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: $ === "exited" && !l ? "hidden" : void 0,
          ...f0[$],
          ...Q,
          ...a.props.style
        },
        ref: U,
        ...M
      })
    });
  });
  function p0(A) {
    return kA("MuiBackdrop", A);
  }
  IA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let B0, h0, m0, w0, Qa, v0, y0, rd, eo, Q0, b0;
  B0 = (A) => {
    const { classes: e, invisible: t } = A;
    return RA({
      root: [
        "root",
        t && "invisible"
      ]
    }, p0, e);
  };
  h0 = lA("div", {
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
  C0 = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: d = {}, slots: u = {}, TransitionComponent: f, transitionDuration: p, ...h } = r, Q = {
      ...r,
      component: i,
      invisible: a
    }, m = B0(Q), b = {
      transition: f,
      root: l.Root,
      ...u
    }, w = {
      ...c,
      ...d
    }, v = {
      slots: b,
      slotProps: w
    }, [U, C] = le("root", {
      elementType: h0,
      externalForwardedProps: v,
      className: pA(m.root, o),
      ownerState: Q
    }), [S, I] = le("transition", {
      elementType: g0,
      externalForwardedProps: v,
      ownerState: Q
    });
    return L.jsx(S, {
      in: s,
      timeout: p,
      ...h,
      ...I,
      children: L.jsx(U, {
        "aria-hidden": true,
        ...C,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  m0 = IA("MuiBox", [
    "root"
  ]);
  w0 = si();
  Ie = Tp({
    themeId: Ge,
    defaultTheme: w0,
    defaultClassName: m0.root,
    generateClassName: Eu.generate
  });
  Qa = typeof Ss({}) == "function";
  v0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  y0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  rd = (A, e = false) => {
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
      html: v0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...y0(A),
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
  eo = "mui-ecs";
  Q0 = (A) => {
    const e = rd(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${eo})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${eo}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${eo}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  b0 = Ss(Qa ? ({ theme: A, enableColorScheme: e }) => rd(A, e) : ({ theme: A }) => Q0(A));
  function F0(A) {
    const e = KA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(B.Fragment, {
      children: [
        Qa && L.jsx(b0, {
          enableColorScheme: r
        }),
        !Qa && !r && L.jsx("span", {
          className: eo,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function U0(A) {
    const e = He(A);
    return e.body === A ? rt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Pr(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Rl(A) {
    return parseInt(rt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function E0(A) {
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
  function Kl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !E0(i);
      a && s && Pr(i, n);
    });
  }
  function Hi(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function S0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (U0(r)) {
        const i = Ru(rt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Rl(r) + i}px`;
        const a = He(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Rl(s) + i}px`;
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
  function x0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class I0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Pr(e.modalRef, false);
      const n = x0(t);
      Kl(t, e.mount, e.modalRef, n, true);
      const o = Hi(this.containers, (i) => i.container === t);
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
      const r = Hi(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = S0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Hi(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Pr(e.modalRef, t), Kl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Pr(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const H0 = [
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
  function T0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function L0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function k0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || L0(A));
  }
  function R0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(H0)).forEach((r, n) => {
      const o = T0(r);
      o === -1 || !k0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function K0() {
    return true;
  }
  function O0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = R0, isEnabled: i = K0, open: a } = A, s = B.useRef(false), l = B.useRef(null), c = B.useRef(null), d = B.useRef(null), u = B.useRef(null), f = B.useRef(false), p = B.useRef(null), h = pe(cn(e), p), Q = B.useRef(null);
    B.useEffect(() => {
      !a || !p.current || (f.current = !t);
    }, [
      t,
      a
    ]), B.useEffect(() => {
      if (!a || !p.current) return;
      const w = He(p.current);
      return p.current.contains(w.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), f.current && p.current.focus()), () => {
        n || (d.current && d.current.focus && (s.current = true, d.current.focus()), d.current = null);
      };
    }, [
      a
    ]), B.useEffect(() => {
      if (!a || !p.current) return;
      const w = He(p.current), v = (S) => {
        Q.current = S, !(r || !i() || S.key !== "Tab") && w.activeElement === p.current && S.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const S = p.current;
        if (S === null) return;
        if (!w.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (S.contains(w.activeElement) || r && w.activeElement !== l.current && w.activeElement !== c.current) return;
        if (w.activeElement !== u.current) u.current = null;
        else if (u.current !== null) return;
        if (!f.current) return;
        let I = [];
        if ((w.activeElement === l.current || w.activeElement === c.current) && (I = o(p.current)), I.length > 0) {
          const H = !!(((_a2 = Q.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = Q.current) == null ? void 0 : _b2.key) === "Tab"), g = I[0], x = I[I.length - 1];
          typeof g != "string" && typeof x != "string" && (H ? x.focus() : g.focus());
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
      d.current === null && (d.current = w.relatedTarget), f.current = true, u.current = w.target;
      const v = e.props.onFocus;
      v && v(w);
    }, b = (w) => {
      d.current === null && (d.current = w.relatedTarget), f.current = true;
    };
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: b,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        B.cloneElement(e, {
          ref: h,
          onFocus: m
        }),
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: b,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function D0(A) {
    return typeof A == "function" ? A() : A;
  }
  function M0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Ol = () => {
  }, vn = new I0();
  function P0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, d = B.useRef({}), u = B.useRef(null), f = B.useRef(null), p = pe(f, c), [h, Q] = B.useState(!l), m = M0(a);
    let b = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (b = false);
    const w = () => He(u.current), v = () => (d.current.modalRef = f.current, d.current.mount = u.current, d.current), U = () => {
      vn.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, C = Lt(() => {
      const D = D0(e) || w().body;
      vn.add(v(), D), f.current && U();
    }), S = () => vn.isTopModal(v()), I = Lt((D) => {
      u.current = D, D && (l && S() ? U() : f.current && Pr(f.current, b));
    }), H = B.useCallback(() => {
      vn.remove(v(), b);
    }, [
      b
    ]);
    B.useEffect(() => () => {
      H();
    }, [
      H
    ]), B.useEffect(() => {
      l ? C() : (!m || !n) && H();
    }, [
      l,
      H,
      m,
      n,
      C
    ]);
    const g = (D) => (M) => {
      var _a2;
      (_a2 = D.onKeyDown) == null ? void 0 : _a2.call(D, M), !(M.key !== "Escape" || M.which === 229 || !S()) && (t || (M.stopPropagation(), s && s(M, "escapeKeyDown")));
    }, x = (D) => (M) => {
      var _a2;
      (_a2 = D.onClick) == null ? void 0 : _a2.call(D, M), M.target === M.currentTarget && s && s(M, "backdropClick");
    };
    return {
      getRootProps: (D = {}) => {
        const M = Ou(A);
        delete M.onTransitionEnter, delete M.onTransitionExited;
        const N = {
          ...M,
          ...D
        };
        return {
          role: "presentation",
          ...N,
          onKeyDown: g(N),
          ref: p
        };
      },
      getBackdropProps: (D = {}) => {
        const M = D;
        return {
          "aria-hidden": true,
          ...M,
          onClick: x(M),
          open: l
        };
      },
      getTransitionProps: () => {
        const D = () => {
          Q(false), o && o();
        }, M = () => {
          Q(true), i && i(), n && H();
        };
        return {
          onEnter: ll(D, (a == null ? void 0 : a.props.onEnter) ?? Ol),
          onExited: ll(M, (a == null ? void 0 : a.props.onExited) ?? Ol)
        };
      },
      rootRef: p,
      portalRef: I,
      isTopModal: S,
      exited: h,
      hasTransition: m
    };
  }
  function _0(A) {
    return kA("MuiModal", A);
  }
  IA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let N0, G0, V0;
  N0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return RA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, _0, r);
  };
  G0 = lA("div", {
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
  V0 = lA(C0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  $0 = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = V0, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: d, components: u = {}, componentsProps: f = {}, disableAutoFocus: p = false, disableEnforceFocus: h = false, disableEscapeKeyDown: Q = false, disablePortal: m = false, disableRestoreFocus: b = false, disableScrollLock: w = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: C, onClose: S, onTransitionEnter: I, onTransitionExited: H, open: g, slotProps: x = {}, slots: k = {}, theme: K, ...$ } = r, D = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: h,
      disableEscapeKeyDown: Q,
      disablePortal: m,
      disableRestoreFocus: b,
      disableScrollLock: w,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: M, getBackdropProps: N, getTransitionProps: q, portalRef: P, isTopModal: j, exited: eA, hasTransition: nA } = P0({
      ...D,
      rootRef: t
    }), R = {
      ...D,
      exited: eA
    }, W = N0(R), V = {};
    if (l.props.tabIndex === void 0 && (V.tabIndex = "-1"), nA) {
      const { onEnter: oA, onExited: aA } = q();
      V.onEnter = oA, V.onExited = aA;
    }
    const J = {
      slots: {
        root: u.Root,
        backdrop: u.Backdrop,
        ...k
      },
      slotProps: {
        ...f,
        ...x
      }
    }, [dA, iA] = le("root", {
      ref: t,
      elementType: G0,
      externalForwardedProps: {
        ...J,
        ...$,
        component: d
      },
      getSlotProps: M,
      ownerState: R,
      className: pA(a, W == null ? void 0 : W.root, !R.open && R.exited && (W == null ? void 0 : W.hidden))
    }), [tA, z] = le("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: J,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (oA) => N({
        ...oA,
        onClick: (aA) => {
          C && C(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, W == null ? void 0 : W.backdrop),
      ownerState: R
    });
    return !U && !g && (!nA || eA) ? null : L.jsx(t0, {
      ref: P,
      container: c,
      disablePortal: m,
      children: L.jsxs(dA, {
        ...iA,
        children: [
          !v && n ? L.jsx(tA, {
            ...z
          }) : null,
          L.jsx(O0, {
            disableEnforceFocus: h,
            disableAutoFocus: p,
            disableRestoreFocus: b,
            isEnabled: j,
            open: g,
            children: B.cloneElement(l, V)
          })
        ]
      })
    });
  });
  function W0(A) {
    return kA("MuiDivider", A);
  }
  let X0, j0, z0;
  UU = IA("MuiDivider", [
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
  X0 = (A) => {
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
    }, W0, r);
  };
  j0 = lA("div", {
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
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : sr(A.palette.divider, 0.08)
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
  z0 = lA("span", {
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
  go = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: s = o || a === "vertical" ? "div" : "hr", flexItem: l = false, light: c = false, role: d = s !== "hr" ? "separator" : void 0, textAlign: u = "center", variant: f = "fullWidth", ...p } = r, h = {
      ...r,
      absolute: n,
      component: s,
      flexItem: l,
      light: c,
      orientation: a,
      role: d,
      textAlign: u,
      variant: f
    }, Q = X0(h);
    return L.jsx(j0, {
      as: s,
      className: pA(Q.root, i),
      role: d,
      ref: t,
      ownerState: h,
      "aria-orientation": d === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...p,
      children: o ? L.jsx(z0, {
        className: Q.wrapper,
        ownerState: h,
        children: o
      }) : null
    });
  });
  go && (go.muiSkipListHighlight = true);
  const J0 = (A) => {
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
    }, l = RA(s, u0, e);
    return {
      ...e,
      ...l
    };
  }, Y0 = lA(ui, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...li(A, e),
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
      [`&.${yt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${yt.disabled}`]: {
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
            [`&.${yt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${yt.error}`]: {
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
            [`&:hover:not(.${yt.disabled}, .${yt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${yt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(mt()).map(([i]) => {
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
  })), Z0 = lA(di, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: ci
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
  }))), ks = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: d, slots: u = {}, type: f = "text", ...p } = r, h = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, Q = J0(r), m = {
      root: {
        ownerState: h
      },
      input: {
        ownerState: h
      }
    }, b = d ?? i ? YA(m, d ?? i) : m, w = u.root ?? o.Root ?? Y0, v = u.input ?? o.Input ?? Z0;
    return L.jsx(Ls, {
      slots: {
        root: w,
        input: v
      },
      slotProps: b,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: f,
      ...p,
      classes: Q
    });
  });
  ks.muiName = "Input";
  function q0(A) {
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
  const AC = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${hA(t)}`,
        r && "fullWidth"
      ]
    };
    return RA(n, q0, e);
  }, eC = lA("div", {
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
  }), tC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: d = false, hiddenLabel: u = false, margin: f = "none", required: p = false, size: h = "medium", variant: Q = "outlined", ...m } = r, b = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: d,
      hiddenLabel: u,
      margin: f,
      required: p,
      size: h,
      variant: Q
    }, w = AC(b), [v, U] = B.useState(() => {
      let D = false;
      return n && B.Children.forEach(n, (M) => {
        if (!Ei(M, [
          "Input",
          "Select"
        ])) return;
        const N = Ei(M, [
          "Select"
        ]) ? M.props.input : M;
        N && i0(N.props) && (D = true);
      }), D;
    }), [C, S] = B.useState(() => {
      let D = false;
      return n && B.Children.forEach(n, (M) => {
        Ei(M, [
          "Input",
          "Select"
        ]) && (fo(M.props, true) || fo(M.props.inputProps, true)) && (D = true);
      }), D;
    }), [I, H] = B.useState(false);
    s && I && H(false);
    const g = c !== void 0 && !s ? c : I;
    let x;
    B.useRef(false);
    const k = B.useCallback(() => {
      S(true);
    }, []), K = B.useCallback(() => {
      S(false);
    }, []), $ = B.useMemo(() => ({
      adornedStart: v,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: C,
      focused: g,
      fullWidth: d,
      hiddenLabel: u,
      size: h,
      onBlur: () => {
        H(false);
      },
      onFocus: () => {
        H(true);
      },
      onEmpty: K,
      onFilled: k,
      registerEffect: x,
      required: p,
      variant: Q
    }), [
      v,
      i,
      s,
      l,
      C,
      g,
      d,
      u,
      x,
      K,
      k,
      p,
      h,
      Q
    ]);
    return L.jsx(Ts.Provider, {
      value: $,
      children: L.jsx(eC, {
        as: a,
        ownerState: b,
        className: pA(w.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function rC(A) {
    return kA("MuiFormHelperText", A);
  }
  const Dl = IA("MuiFormHelperText", [
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
  var Ml;
  const nC = (A) => {
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
    return RA(l, rC, e);
  }, oC = lA("p", {
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
    [`&.${Dl.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Dl.error}`]: {
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
  }))), iC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: d, required: u, variant: f, ...p } = r, h = pr(), Q = gr({
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
      contained: Q.variant === "filled" || Q.variant === "outlined",
      variant: Q.variant,
      size: Q.size,
      disabled: Q.disabled,
      error: Q.error,
      filled: Q.filled,
      focused: Q.focused,
      required: Q.required
    };
    delete m.ownerState;
    const b = nC(m);
    return L.jsx(oC, {
      as: i,
      className: pA(b.root, o),
      ref: t,
      ...p,
      ownerState: m,
      children: n === " " ? Ml || (Ml = L.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function aC(A) {
    return kA("MuiFormLabel", A);
  }
  const _r = IA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), sC = (A) => {
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
    return RA(s, aC, e);
  }, lC = lA("label", {
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
      ...Object.entries(A.palette).filter(mt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${_r.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${_r.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${_r.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), cC = lA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(OA(({ theme: A }) => ({
    [`&.${_r.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), uC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: d, required: u, ...f } = r, p = pr(), h = gr({
      props: r,
      muiFormControl: p,
      states: [
        "color",
        "required",
        "focused",
        "disabled",
        "error",
        "filled"
      ]
    }), Q = {
      ...r,
      color: h.color || "primary",
      component: a,
      disabled: h.disabled,
      error: h.error,
      filled: h.filled,
      focused: h.focused,
      required: h.required
    }, m = sC(Q);
    return L.jsxs(lC, {
      as: a,
      ownerState: Q,
      className: pA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        h.required && L.jsxs(cC, {
          ownerState: Q,
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
  function ba(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  const dC = {
    entering: {
      opacity: 1,
      transform: ba(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, Ti = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Fa = B.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: d, onExited: u, onExiting: f, style: p, timeout: h = "auto", TransitionComponent: Q = We, ...m } = e, b = ku(), w = B.useRef(), v = Es(), U = B.useRef(null), C = pe(U, cn(o), t), S = (D) => (M) => {
      if (D) {
        const N = U.current;
        M === void 0 ? D(N) : D(N, M);
      }
    }, I = S(c), H = S((D, M) => {
      td(D);
      const { duration: N, delay: q, easing: P } = co({
        style: p,
        timeout: h,
        easing: i
      }, {
        mode: "enter"
      });
      let j;
      h === "auto" ? (j = v.transitions.getAutoHeightDuration(D.clientHeight), w.current = j) : j = N, D.style.transition = [
        v.transitions.create("opacity", {
          duration: j,
          delay: q
        }),
        v.transitions.create("transform", {
          duration: Ti ? j : j * 0.666,
          delay: q,
          easing: P
        })
      ].join(","), s && s(D, M);
    }), g = S(l), x = S(f), k = S((D) => {
      const { duration: M, delay: N, easing: q } = co({
        style: p,
        timeout: h,
        easing: i
      }, {
        mode: "exit"
      });
      let P;
      h === "auto" ? (P = v.transitions.getAutoHeightDuration(D.clientHeight), w.current = P) : P = M, D.style.transition = [
        v.transitions.create("opacity", {
          duration: P,
          delay: N
        }),
        v.transitions.create("transform", {
          duration: Ti ? P : P * 0.666,
          delay: Ti ? N : N || P * 0.333,
          easing: q
        })
      ].join(","), D.style.opacity = 0, D.style.transform = ba(0.75), d && d(D);
    }), K = S(u), $ = (D) => {
      h === "auto" && b.start(w.current || 0, D), r && r(U.current, D);
    };
    return L.jsx(Q, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: H,
      onEntered: g,
      onEntering: I,
      onExit: k,
      onExited: K,
      onExiting: x,
      addEndListener: $,
      timeout: h === "auto" ? null : h,
      ...m,
      children: (D, { ownerState: M, ...N }) => B.cloneElement(o, {
        style: {
          opacity: 0,
          transform: ba(0.75),
          visibility: D === "exited" && !a ? "hidden" : void 0,
          ...dC[D],
          ...p,
          ...o.props.style
        },
        ref: C,
        ...N
      })
    });
  });
  Fa && (Fa.muiSupportAuto = true);
  const fC = (A) => {
    const { classes: e, disableUnderline: t } = A, n = RA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, l0, e);
    return {
      ...e,
      ...n
    };
  }, gC = lA(ui, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...li(A, e),
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
            [`&.${vr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${vr.error}`]: {
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
            [`&:hover:not(.${vr.disabled}, .${vr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${vr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(mt()).map(([r]) => ({
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
  })), pC = lA(di, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: ci
  })({}), Rs = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: d = {}, type: u = "text", ...f } = r, p = fC(r), Q = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? YA(c ?? i, Q) : Q, b = d.root ?? o.Root ?? gC, w = d.input ?? o.Input ?? pC;
    return L.jsx(Ls, {
      slots: {
        root: b,
        input: w
      },
      slotProps: m,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: u,
      ...f,
      classes: p
    });
  });
  Rs.muiName = "Input";
  function BC(A) {
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
  let hC, CC, mC;
  hC = (A) => {
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
    }, l = RA(s, BC, e);
    return {
      ...e,
      ...l
    };
  };
  CC = lA(uC, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${_r.asterisk}`]: e.asterisk
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
  mC = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = pr();
    let d = i;
    typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
    const u = gr({
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
      shrink: d,
      size: u.size,
      variant: u.variant,
      required: u.required,
      focused: u.focused
    }, p = hC(f);
    return L.jsx(CC, {
      "data-shrink": d,
      ref: t,
      className: pA(p.root, s),
      ...l,
      ownerState: f,
      classes: p
    });
  });
  wC = B.createContext({});
  function vC(A) {
    return kA("MuiList", A);
  }
  IA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let yC, QC;
  yC = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return RA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, vC, e);
  };
  QC = lA("ul", {
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
  bC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, d = B.useMemo(() => ({
      dense: a
    }), [
      a
    ]), u = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, f = yC(u);
    return L.jsx(wC.Provider, {
      value: d,
      children: L.jsxs(QC, {
        as: i,
        className: pA(f.root, o),
        ref: t,
        ownerState: u,
        ...c,
        children: [
          l,
          n
        ]
      })
    });
  });
  function Li(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Pl(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function nd(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function yr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !nd(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const FC = B.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: d = "selectedMenu", ...u } = e, f = B.useRef(null), p = B.useRef({
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
          const C = `${Ru(rt(w))}px`;
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
      if (U === "ArrowDown") w.preventDefault(), yr(v, S, l, s, Li);
      else if (U === "ArrowUp") w.preventDefault(), yr(v, S, l, s, Pl);
      else if (U === "Home") w.preventDefault(), yr(v, null, l, s, Li);
      else if (U === "End") w.preventDefault(), yr(v, null, l, s, Pl);
      else if (U.length === 1) {
        const I = p.current, H = U.toLowerCase(), g = performance.now();
        I.keys.length > 0 && (g - I.lastTime > 500 ? (I.keys = [], I.repeating = true, I.previousKeyMatched = true) : I.repeating && H !== I.keys[0] && (I.repeating = false)), I.lastTime = g, I.keys.push(H);
        const x = S && !I.repeating && nd(S, I);
        I.previousKeyMatched && (x || yr(v, S, false, s, Li, I)) ? w.preventDefault() : I.previousKeyMatched = false;
      }
      c && c(w);
    }, Q = pe(f, t);
    let m = -1;
    B.Children.forEach(i, (w, v) => {
      if (!B.isValidElement(w)) {
        m === v && (m += 1, m >= i.length && (m = -1));
        return;
      }
      w.props.disabled || (d === "selectedMenu" && w.props.selected || m === -1) && (m = v), m === v && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
    });
    const b = B.Children.map(i, (w, v) => {
      if (v === m) {
        const U = {};
        return o && (U.autoFocus = true), w.props.tabIndex === void 0 && d === "selectedMenu" && (U.tabIndex = 0), B.cloneElement(w, U);
      }
      return w;
    });
    return L.jsx(bC, {
      role: "menu",
      ref: Q,
      className: a,
      onKeyDown: h,
      tabIndex: n ? 0 : -1,
      ...u,
      children: b
    });
  });
  function UC(A) {
    return kA("MuiPopover", A);
  }
  IA("MuiPopover", [
    "root",
    "paper"
  ]);
  function _l(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Nl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Gl(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function yn(A) {
    return typeof A == "function" ? A() : A;
  }
  const EC = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, UC, e);
  }, SC = lA($0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), od = lA(Ca, {
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
  }), id = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: d, elevation: u = 8, marginThreshold: f = 16, open: p, PaperProps: h = {}, slots: Q = {}, slotProps: m = {}, transformOrigin: b = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: C = false, ...S } = r, I = B.useRef(), H = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: u,
      marginThreshold: f,
      transformOrigin: b,
      TransitionComponent: w,
      transitionDuration: v,
      TransitionProps: U
    }, g = EC(H), x = B.useCallback(() => {
      if (s === "anchorPosition") return a;
      const z = yn(o), aA = (z && z.nodeType === 1 ? z : He(I.current).body).getBoundingClientRect();
      return {
        top: aA.top + _l(aA, i.vertical),
        left: aA.left + Nl(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), k = B.useCallback((z) => ({
      vertical: _l(z, b.vertical),
      horizontal: Nl(z, b.horizontal)
    }), [
      b.horizontal,
      b.vertical
    ]), K = B.useCallback((z) => {
      const oA = {
        width: z.offsetWidth,
        height: z.offsetHeight
      }, aA = k(oA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Gl(aA)
      };
      const y = x();
      let E = y.top - aA.vertical, F = y.left - aA.horizontal;
      const _ = E + oA.height, X = F + oA.width, G = rt(yn(o)), sA = G.innerHeight - f, cA = G.innerWidth - f;
      if (f !== null && E < f) {
        const fA = E - f;
        E -= fA, aA.vertical += fA;
      } else if (f !== null && _ > sA) {
        const fA = _ - sA;
        E -= fA, aA.vertical += fA;
      }
      if (f !== null && F < f) {
        const fA = F - f;
        F -= fA, aA.horizontal += fA;
      } else if (X > cA) {
        const fA = X - cA;
        F -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(E)}px`,
        left: `${Math.round(F)}px`,
        transformOrigin: Gl(aA)
      };
    }, [
      o,
      s,
      x,
      k,
      f
    ]), [$, D] = B.useState(p), M = B.useCallback(() => {
      const z = I.current;
      if (!z) return;
      const oA = K(z);
      oA.top !== null && z.style.setProperty("top", oA.top), oA.left !== null && (z.style.left = oA.left), z.style.transformOrigin = oA.transformOrigin, D(true);
    }, [
      K
    ]);
    B.useEffect(() => (C && window.addEventListener("scroll", M), () => window.removeEventListener("scroll", M)), [
      o,
      C,
      M
    ]);
    const N = () => {
      M();
    }, q = () => {
      D(false);
    };
    B.useEffect(() => {
      p && M();
    }), B.useImperativeHandle(n, () => p ? {
      updatePosition: () => {
        M();
      }
    } : null, [
      p,
      M
    ]), B.useEffect(() => {
      if (!p) return;
      const z = Tu(() => {
        M();
      }), oA = rt(yn(o));
      return oA.addEventListener("resize", z), () => {
        z.clear(), oA.removeEventListener("resize", z);
      };
    }, [
      o,
      p,
      M
    ]);
    let P = v;
    const j = {
      slots: {
        transition: w,
        ...Q
      },
      slotProps: {
        transition: U,
        paper: h,
        ...m
      }
    }, [eA, nA] = le("transition", {
      elementType: Fa,
      externalForwardedProps: j,
      ownerState: H,
      getSlotProps: (z) => ({
        ...z,
        onEntering: (oA, aA) => {
          var _a2;
          (_a2 = z.onEntering) == null ? void 0 : _a2.call(z, oA, aA), N();
        },
        onExited: (oA) => {
          var _a2;
          (_a2 = z.onExited) == null ? void 0 : _a2.call(z, oA), q();
        }
      }),
      additionalProps: {
        appear: true,
        in: p
      }
    });
    v === "auto" && !eA.muiSupportAuto && (P = void 0);
    const R = d || (o ? He(yn(o)).body : void 0), [W, { slots: V, slotProps: J, ...dA }] = le("root", {
      ref: t,
      elementType: SC,
      externalForwardedProps: {
        ...j,
        ...S
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: Q.backdrop
        },
        slotProps: {
          backdrop: ih(typeof m.backdrop == "function" ? m.backdrop(H) : m.backdrop, {
            invisible: true
          })
        },
        container: R,
        open: p
      },
      ownerState: H,
      className: pA(g.root, c)
    }), [iA, tA] = le("paper", {
      ref: I,
      className: g.paper,
      elementType: od,
      externalForwardedProps: j,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: u,
        style: $ ? void 0 : {
          opacity: 0
        }
      },
      ownerState: H
    });
    return L.jsx(W, {
      ...dA,
      ...!ya(W) && {
        slots: V,
        slotProps: J,
        disableScrollLock: C
      },
      children: L.jsx(eA, {
        ...nA,
        timeout: P,
        children: L.jsx(iA, {
          ...tA,
          children: l
        })
      })
    });
  });
  function xC(A) {
    return kA("MuiMenu", A);
  }
  IA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const IC = {
    vertical: "top",
    horizontal: "right"
  }, HC = {
    vertical: "top",
    horizontal: "left"
  }, TC = (A) => {
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
    }, xC, e);
  }, LC = lA(id, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), kC = lA(od, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), RC = lA(FC, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), KC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: d = {}, PopoverClasses: u, transitionDuration: f = "auto", TransitionProps: { onEntering: p, ...h } = {}, variant: Q = "selectedMenu", slots: m = {}, slotProps: b = {}, ...w } = r, v = nB(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: d,
      transitionDuration: f,
      TransitionProps: h,
      variant: Q
    }, C = TC(U), S = n && !a && c, I = B.useRef(null), H = (P, j) => {
      I.current && I.current.adjustStyleForScrollbar(P, {
        direction: v ? "rtl" : "ltr"
      }), p && p(P, j);
    }, g = (P) => {
      P.key === "Tab" && (P.preventDefault(), l && l(P, "tabKeyDown"));
    };
    let x = -1;
    B.Children.map(o, (P, j) => {
      B.isValidElement(P) && (P.props.disabled || (Q === "selectedMenu" && P.props.selected || x === -1) && (x = j));
    });
    const k = {
      slots: m,
      slotProps: {
        list: s,
        transition: h,
        paper: d,
        ...b
      }
    }, K = Zp({
      elementType: m.root,
      externalSlotProps: b.root,
      ownerState: U,
      className: [
        C.root,
        i
      ]
    }), [$, D] = le("paper", {
      className: C.paper,
      elementType: kC,
      externalForwardedProps: k,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [M, N] = le("list", {
      className: pA(C.list, s.className),
      elementType: RC,
      shouldForwardComponentProp: true,
      externalForwardedProps: k,
      getSlotProps: (P) => ({
        ...P,
        onKeyDown: (j) => {
          var _a2;
          g(j), (_a2 = P.onKeyDown) == null ? void 0 : _a2.call(P, j);
        }
      }),
      ownerState: U
    }), q = typeof k.slotProps.transition == "function" ? k.slotProps.transition(U) : k.slotProps.transition;
    return L.jsx(LC, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? IC : HC,
      slots: {
        root: m.root,
        paper: $,
        backdrop: m.backdrop,
        ...m.transition && {
          transition: m.transition
        }
      },
      slotProps: {
        root: K,
        paper: D,
        backdrop: typeof b.backdrop == "function" ? b.backdrop(U) : b.backdrop,
        transition: {
          ...q,
          onEntering: (...P) => {
            var _a2;
            H(...P), (_a2 = q == null ? void 0 : q.onEntering) == null ? void 0 : _a2.call(q, ...P);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...w,
      classes: u,
      children: L.jsx(M, {
        actions: I,
        autoFocus: n && (x === -1 || a),
        autoFocusItem: S,
        variant: Q,
        ...N,
        children: o
      })
    });
  });
  function OC(A) {
    return kA("MuiNativeSelect", A);
  }
  const Ks = IA("MuiNativeSelect", [
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
  ]), DC = (A) => {
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
    return RA(a, OC, e);
  }, ad = lA("select", {
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
    [`&.${Ks.disabled}`]: {
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
  })), MC = lA(ad, {
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
          [`&.${Ks.multiple}`]: e.multiple
        }
      ];
    }
  })({}), sd = lA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Ks.disabled}`]: {
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
  })), PC = lA(sd, {
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
  })({}), _C = B.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, d = DC(c);
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx(MC, {
          ownerState: c,
          className: pA(d.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : L.jsx(PC, {
          as: i,
          ownerState: c,
          className: d.icon
        })
      ]
    });
  });
  var Vl;
  const NC = lA("fieldset", {
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
  }), GC = lA("legend", {
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
  function VC(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return L.jsx(NC, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: L.jsx(GC, {
        ownerState: s,
        children: a ? L.jsx("span", {
          children: n
        }) : Vl || (Vl = L.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const $C = (A) => {
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
    }, c0, e);
    return {
      ...e,
      ...r
    };
  }, WC = lA(ui, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: li
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
        ...Object.entries(A.palette).filter(mt()).map(([t]) => ({
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
  })), XC = lA(VC, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), jC = lA(di, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: ci
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
  }))), Os = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: d = {}, type: u = "text", ...f } = r, p = $C(r), h = pr(), Q = gr({
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
      color: Q.color || "primary",
      disabled: Q.disabled,
      error: Q.error,
      focused: Q.focused,
      formControl: h,
      fullWidth: o,
      hiddenLabel: Q.hiddenLabel,
      multiline: s,
      size: Q.size,
      type: u
    }, b = c.root ?? n.Root ?? WC, w = c.input ?? n.Input ?? jC, [v, U] = le("notchedOutline", {
      elementType: XC,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: m,
      externalForwardedProps: {
        slots: c,
        slotProps: d
      },
      additionalProps: {
        label: a != null && a !== "" && Q.required ? L.jsxs(B.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return L.jsx(Ls, {
      slots: {
        root: b,
        input: w
      },
      slotProps: d,
      renderSuffix: (C) => L.jsx(v, {
        ...U,
        notched: typeof l < "u" ? l : !!(C.startAdornment || C.filled || C.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: s,
      ref: t,
      type: u,
      ...f,
      classes: {
        ...p,
        notchedOutline: null
      }
    });
  });
  Os.muiName = "Input";
  function ld(A) {
    return kA("MuiSelect", A);
  }
  const Qr = IA("MuiSelect", [
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
  var $l;
  const zC = lA(ad, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Qr.select}`]: e.select
        },
        {
          [`&.${Qr.select}`]: e[t.variant]
        },
        {
          [`&.${Qr.error}`]: e.error
        },
        {
          [`&.${Qr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Qr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), JC = lA(sd, {
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
  })({}), YC = lA("input", {
    shouldForwardProp: (A) => Yu(A) && A !== "classes",
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
  function Wl(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function ZC(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let qC, Am, em, Ds, tm, rm, nm;
  qC = (A) => {
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
    return RA(a, ld, e);
  };
  Am = B.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: d, displayEmpty: u, error: f = false, IconComponent: p, inputRef: h, labelId: Q, MenuProps: m = {}, multiple: b, name: w, onBlur: v, onChange: U, onClose: C, onFocus: S, onOpen: I, open: H, readOnly: g, renderValue: x, required: k, SelectDisplayProps: K = {}, tabIndex: $, type: D, value: M, variant: N = "standard", ...q } = e, [P, j] = fl({
      controlled: M,
      default: c,
      name: "Select"
    }), [eA, nA] = fl({
      controlled: H,
      default: l,
      name: "Select"
    }), R = B.useRef(null), W = B.useRef(null), [V, J] = B.useState(null), { current: dA } = B.useRef(H != null), [iA, tA] = B.useState(), z = pe(t, h), oA = B.useCallback((uA) => {
      W.current = uA, uA && J(uA);
    }, []), aA = V == null ? void 0 : V.parentNode;
    B.useImperativeHandle(z, () => ({
      focus: () => {
        W.current.focus();
      },
      node: R.current,
      value: P
    }), [
      P
    ]), B.useEffect(() => {
      l && eA && V && !dA && (tA(i ? null : aA.clientWidth), W.current.focus());
    }, [
      V,
      i
    ]), B.useEffect(() => {
      o && W.current.focus();
    }, [
      o
    ]), B.useEffect(() => {
      if (!Q) return;
      const uA = He(W.current).getElementById(Q);
      if (uA) {
        const SA = () => {
          getSelection().isCollapsed && W.current.focus();
        };
        return uA.addEventListener("click", SA), () => {
          uA.removeEventListener("click", SA);
        };
      }
    }, [
      Q
    ]);
    const y = (uA, SA) => {
      uA ? I && I(SA) : C && C(SA), dA || (tA(i ? null : aA.clientWidth), nA(uA));
    }, E = (uA) => {
      uA.button === 0 && (uA.preventDefault(), W.current.focus(), y(true, uA));
    }, F = (uA) => {
      y(false, uA);
    }, _ = B.Children.toArray(a), X = (uA) => {
      const SA = _.find((Ae) => Ae.props.value === uA.target.value);
      SA !== void 0 && (j(SA.props.value), U && U(uA, SA));
    }, G = (uA) => (SA) => {
      let Ae;
      if (SA.currentTarget.hasAttribute("tabindex")) {
        if (b) {
          Ae = Array.isArray(P) ? P.slice() : [];
          const Ot = P.indexOf(uA.props.value);
          Ot === -1 ? Ae.push(uA.props.value) : Ae.splice(Ot, 1);
        } else Ae = uA.props.value;
        if (uA.props.onClick && uA.props.onClick(SA), P !== Ae && (j(Ae), U)) {
          const Ot = SA.nativeEvent || SA, Xs = new Ot.constructor(Ot.type, Ot);
          Object.defineProperty(Xs, "target", {
            writable: true,
            value: {
              value: Ae,
              name: w
            }
          }), U(Xs, uA);
        }
        b || y(false, SA);
      }
    }, sA = (uA) => {
      g || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(uA.key) && (uA.preventDefault(), y(true, uA));
    }, cA = V !== null && eA, fA = (uA) => {
      !cA && v && (Object.defineProperty(uA, "target", {
        writable: true,
        value: {
          value: P,
          name: w
        }
      }), v(uA));
    };
    delete q["aria-invalid"];
    let AA, qA;
    const gA = [];
    let PA = false;
    (fo({
      value: P
    }) || u) && (x ? AA = x(P) : PA = true);
    const WA = _.map((uA) => {
      if (!B.isValidElement(uA)) return null;
      let SA;
      if (b) {
        if (!Array.isArray(P)) throw new Error(At(2));
        SA = P.some((Ae) => Wl(Ae, uA.props.value)), SA && PA && gA.push(uA.props.children);
      } else SA = Wl(P, uA.props.value), SA && PA && (qA = uA.props.children);
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
    PA && (b ? gA.length === 0 ? AA = null : AA = gA.reduce((uA, SA, Ae) => (uA.push(SA), Ae < gA.length - 1 && uA.push(", "), uA), []) : AA = qA);
    let oe = iA;
    !i && dA && V && (oe = aA.clientWidth);
    let jA;
    typeof $ < "u" ? jA = $ : jA = d ? null : 0;
    const ot = K.id || (w ? `mui-component-select-${w}` : void 0), vt = {
      ...e,
      variant: N,
      value: P,
      open: cA,
      error: f
    }, HA = qC(vt), Kt = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, Cr = ai();
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx(zC, {
          as: "div",
          ref: oA,
          tabIndex: jA,
          role: "combobox",
          "aria-controls": cA ? Cr : void 0,
          "aria-disabled": d ? "true" : void 0,
          "aria-expanded": cA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            Q,
            ot
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": k ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: d || g ? null : E,
          onBlur: fA,
          onFocus: S,
          ...K,
          ownerState: vt,
          className: pA(K.className, HA.select, s),
          id: ot,
          children: ZC(AA) ? $l || ($l = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : AA
        }),
        L.jsx(YC, {
          "aria-invalid": f,
          value: Array.isArray(P) ? P.join(",") : P,
          name: w,
          ref: R,
          "aria-hidden": true,
          onChange: X,
          tabIndex: -1,
          disabled: d,
          className: HA.nativeInput,
          autoFocus: o,
          required: k,
          ...q,
          ownerState: vt
        }),
        L.jsx(JC, {
          as: p,
          className: HA.icon,
          ownerState: vt
        }),
        L.jsx(KC, {
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
              "aria-labelledby": Q,
              role: "listbox",
              "aria-multiselectable": b ? "true" : void 0,
              disableListWrap: true,
              id: Cr,
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
  em = (A) => {
    const { classes: e } = A, r = RA({
      root: [
        "root"
      ]
    }, ld, e);
    return {
      ...e,
      ...r
    };
  };
  Ds = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => $e(A) && A !== "variant",
    slot: "Root"
  };
  tm = lA(Rs, Ds)("");
  rm = lA(Os, Ds)("");
  nm = lA(ks, Ds)("");
  cd = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = d0, id: d, input: u, inputProps: f, label: p, labelId: h, MenuProps: Q, multiple: m = false, native: b = false, onClose: w, onOpen: v, open: U, renderValue: C, SelectDisplayProps: S, variant: I = "outlined", ...H } = r, g = b ? _C : Am, x = pr(), k = gr({
      props: r,
      muiFormControl: x,
      states: [
        "variant",
        "error"
      ]
    }), K = k.variant || I, $ = {
      ...r,
      variant: K,
      classes: i
    }, D = em($), { root: M, ...N } = D, q = u || {
      standard: L.jsx(tm, {
        ownerState: $
      }),
      outlined: L.jsx(rm, {
        label: p,
        ownerState: $
      }),
      filled: L.jsx(nm, {
        ownerState: $
      })
    }[K], P = pe(t, cn(q));
    return L.jsx(B.Fragment, {
      children: B.cloneElement(q, {
        inputComponent: g,
        inputProps: {
          children: o,
          error: k.error,
          IconComponent: c,
          variant: K,
          type: void 0,
          multiple: m,
          ...b ? {
            id: d
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: h,
            MenuProps: Q,
            onClose: w,
            onOpen: v,
            open: U,
            renderValue: C,
            SelectDisplayProps: {
              id: d,
              ...S
            }
          },
          ...f,
          classes: f ? YA(N, f.classes) : N,
          ...u ? u.props.inputProps : {}
        },
        ...(m && b || l) && K === "outlined" ? {
          notched: true
        } : {},
        ref: P,
        className: pA(q.props.className, a, D.root),
        ...!u && {
          variant: K
        },
        ...H
      })
    });
  });
  cd.muiName = "Select";
  function om(A) {
    return kA("MuiTextField", A);
  }
  IA("MuiTextField", [
    "root"
  ]);
  const im = {
    standard: Rs,
    filled: ks,
    outlined: Os
  }, am = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ]
    }, om, e);
  }, sm = lA(tC, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), lm = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: d = false, FormHelperTextProps: u, fullWidth: f = false, helperText: p, id: h, InputLabelProps: Q, inputProps: m, InputProps: b, inputRef: w, label: v, maxRows: U, minRows: C, multiline: S = false, name: I, onBlur: H, onChange: g, onFocus: x, placeholder: k, required: K = false, rows: $, select: D = false, SelectProps: M, slots: N = {}, slotProps: q = {}, type: P, value: j, variant: eA = "outlined", ...nA } = r, R = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: d,
      fullWidth: f,
      multiline: S,
      required: K,
      select: D,
      variant: eA
    }, W = am(R), V = ai(h), J = p && V ? `${V}-helper-text` : void 0, dA = v && V ? `${V}-label` : void 0, iA = im[eA], tA = {
      slots: N,
      slotProps: {
        input: b,
        inputLabel: Q,
        htmlInput: m,
        formHelperText: u,
        select: M,
        ...q
      }
    }, z = {}, oA = tA.slotProps.inputLabel;
    eA === "outlined" && (oA && typeof oA.shrink < "u" && (z.notched = oA.shrink), z.label = v), D && ((!M || !M.native) && (z.id = void 0), z["aria-describedby"] = void 0);
    const [aA, y] = le("root", {
      elementType: sm,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...tA,
        ...nA
      },
      ownerState: R,
      className: pA(W.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: d,
        fullWidth: f,
        required: K,
        color: s,
        variant: eA
      }
    }), [E, F] = le("input", {
      elementType: iA,
      externalForwardedProps: tA,
      additionalProps: z,
      ownerState: R
    }), [_, X] = le("inputLabel", {
      elementType: mC,
      externalForwardedProps: tA,
      ownerState: R
    }), [G, sA] = le("htmlInput", {
      elementType: "input",
      externalForwardedProps: tA,
      ownerState: R
    }), [cA, fA] = le("formHelperText", {
      elementType: iC,
      externalForwardedProps: tA,
      ownerState: R
    }), [AA, qA] = le("select", {
      elementType: cd,
      externalForwardedProps: tA,
      ownerState: R
    }), gA = L.jsx(E, {
      "aria-describedby": J,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: f,
      multiline: S,
      name: I,
      rows: $,
      maxRows: U,
      minRows: C,
      type: P,
      value: j,
      id: V,
      inputRef: w,
      onBlur: H,
      onChange: g,
      onFocus: x,
      placeholder: k,
      inputProps: sA,
      slots: {
        input: N.htmlInput ? G : void 0
      },
      ...F
    });
    return L.jsxs(aA, {
      ...y,
      children: [
        v != null && v !== "" && L.jsx(_, {
          htmlFor: V,
          id: dA,
          ...X,
          children: v
        }),
        D ? L.jsx(AA, {
          "aria-describedby": J,
          id: V,
          labelId: dA,
          value: j,
          input: gA,
          ...qA,
          children: i
        }) : gA,
        p && L.jsx(cA, {
          id: J,
          ...fA,
          children: p
        })
      ]
    });
  });
  Ua = class extends window.visRxWidget {
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
  let cm, Ms;
  cm = [
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
  Ms = (A) => {
    const [e, t] = B.useState({}), [r, n] = B.useState({}), [o, i] = B.useState({}), [a, s] = B.useState({}), [l, c] = B.useState({}), d = JSON.stringify(A), u = B.useMemo(() => {
      const f = {}, p = {}, h = {}, Q = {}, m = {}, b = JSON.parse(d);
      return cm.forEach((w) => {
        if (b[w]) {
          const v = w.replace(/(-\w)/g, (U) => U[1].toUpperCase());
          w.includes("background") ? f[v] = b[w] : w.includes("border") ? p[v] = b[w] : w.includes("font") || w.includes("line-height") || w.includes("letter-spacing") || w.includes("word-spacing") ? Q[v] = b[w] : w.includes("text") || w.includes("color") ? h[v] = b[w] : m[v] = b[w];
        }
      }), {
        _backgroundStyles: f,
        _borderStyles: p,
        _textStyles: h,
        _fontStyles: Q,
        _boxStyles: m
      };
    }, [
      d
    ]);
    return B.useEffect(() => {
      t(u._backgroundStyles), n(u._borderStyles), i(u._textStyles), s(u._fontStyles), c(u._boxStyles);
    }, [
      u
    ]), {
      boxStyles: l,
      backgroundStyles: e,
      borderStyles: r,
      textStyles: o,
      fontStyles: a
    };
  };
  Br = B.createContext({});
  function um({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = Ms(r.style || {}), i = B.useMemo(() => si(YA(t, {
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
    return L.jsxs(Zu, {
      theme: i,
      children: [
        L.jsx(F0, {}),
        L.jsx(Br.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  EU = function(A, e) {
    return L.jsx(um, {
      context: e,
      children: A
    });
  };
  let dm;
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
      children: A ? L.jsx(go, {
        sx: e,
        children: L.jsx(Ao, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Ua.t(A)
        })
      }) : L.jsx(go, {
        sx: e
      })
    });
  };
  dm = qu(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var ud = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(y, E) {
        if (y = y || "", E = E || {}, y instanceof l) return y;
        if (!(this instanceof l)) return new l(y, E);
        var F = c(y);
        this._originalInput = y, this._r = F.r, this._g = F.g, this._b = F.b, this._a = F.a, this._roundA = o(100 * this._a) / 100, this._format = E.format || F.format, this._gradientType = E.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = F.ok, this._tc_id = n++;
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
          var y = this.toRgb();
          return (y.r * 299 + y.g * 587 + y.b * 114) / 1e3;
        },
        getLuminance: function() {
          var y = this.toRgb(), E, F, _, X, G, sA;
          return E = y.r / 255, F = y.g / 255, _ = y.b / 255, E <= 0.03928 ? X = E / 12.92 : X = e.pow((E + 0.055) / 1.055, 2.4), F <= 0.03928 ? G = F / 12.92 : G = e.pow((F + 0.055) / 1.055, 2.4), _ <= 0.03928 ? sA = _ / 12.92 : sA = e.pow((_ + 0.055) / 1.055, 2.4), 0.2126 * X + 0.7152 * G + 0.0722 * sA;
        },
        setAlpha: function(y) {
          return this._a = P(y), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var y = p(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            v: y.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var y = p(this._r, this._g, this._b), E = o(y.h * 360), F = o(y.s * 100), _ = o(y.v * 100);
          return this._a == 1 ? "hsv(" + E + ", " + F + "%, " + _ + "%)" : "hsva(" + E + ", " + F + "%, " + _ + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var y = u(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            l: y.l,
            a: this._a
          };
        },
        toHslString: function() {
          var y = u(this._r, this._g, this._b), E = o(y.h * 360), F = o(y.s * 100), _ = o(y.l * 100);
          return this._a == 1 ? "hsl(" + E + ", " + F + "%, " + _ + "%)" : "hsla(" + E + ", " + F + "%, " + _ + "%, " + this._roundA + ")";
        },
        toHex: function(y) {
          return Q(this._r, this._g, this._b, y);
        },
        toHexString: function(y) {
          return "#" + this.toHex(y);
        },
        toHex8: function(y) {
          return m(this._r, this._g, this._b, this._a, y);
        },
        toHex8String: function(y) {
          return "#" + this.toHex8(y);
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
          return this._a === 0 ? "transparent" : this._a < 1 ? false : N[Q(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(y) {
          var E = "#" + b(this._r, this._g, this._b, this._a), F = E, _ = this._gradientType ? "GradientType = 1, " : "";
          if (y) {
            var X = l(y);
            F = "#" + b(X._r, X._g, X._b, X._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + _ + "startColorstr=" + E + ",endColorstr=" + F + ")";
        },
        toString: function(y) {
          var E = !!y;
          y = y || this._format;
          var F = false, _ = this._a < 1 && this._a >= 0, X = !E && _ && (y === "hex" || y === "hex6" || y === "hex3" || y === "hex4" || y === "hex8" || y === "name");
          return X ? y === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (y === "rgb" && (F = this.toRgbString()), y === "prgb" && (F = this.toPercentageRgbString()), (y === "hex" || y === "hex6") && (F = this.toHexString()), y === "hex3" && (F = this.toHexString(true)), y === "hex4" && (F = this.toHex8String(true)), y === "hex8" && (F = this.toHex8String()), y === "name" && (F = this.toName()), y === "hsl" && (F = this.toHslString()), y === "hsv" && (F = this.toHsvString()), F || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(y, E) {
          var F = y.apply(null, [
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
          return this._applyModification(I, arguments);
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
          return this._applyModification(H, arguments);
        },
        _applyCombination: function(y, E) {
          return y.apply(null, [
            this
          ].concat([].slice.call(E)));
        },
        analogous: function() {
          return this._applyCombination($, arguments);
        },
        complement: function() {
          return this._applyCombination(g, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(D, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(K, arguments);
        },
        triad: function() {
          return this._applyCombination(x, arguments);
        },
        tetrad: function() {
          return this._applyCombination(k, arguments);
        }
      }, l.fromRatio = function(y, E) {
        if (typeof y == "object") {
          var F = {};
          for (var _ in y) y.hasOwnProperty(_) && (_ === "a" ? F[_] = y[_] : F[_] = J(y[_]));
          y = F;
        }
        return l(y, E);
      };
      function c(y) {
        var E = {
          r: 0,
          g: 0,
          b: 0
        }, F = 1, _ = null, X = null, G = null, sA = false, cA = false;
        return typeof y == "string" && (y = oA(y)), typeof y == "object" && (z(y.r) && z(y.g) && z(y.b) ? (E = d(y.r, y.g, y.b), sA = true, cA = String(y.r).substr(-1) === "%" ? "prgb" : "rgb") : z(y.h) && z(y.s) && z(y.v) ? (_ = J(y.s), X = J(y.v), E = h(y.h, _, X), sA = true, cA = "hsv") : z(y.h) && z(y.s) && z(y.l) && (_ = J(y.s), G = J(y.l), E = f(y.h, _, G), sA = true, cA = "hsl"), y.hasOwnProperty("a") && (F = y.a)), F = P(F), {
          ok: sA,
          format: y.format || cA,
          r: i(255, a(E.r, 0)),
          g: i(255, a(E.g, 0)),
          b: i(255, a(E.b, 0)),
          a: F
        };
      }
      function d(y, E, F) {
        return {
          r: j(y, 255) * 255,
          g: j(E, 255) * 255,
          b: j(F, 255) * 255
        };
      }
      function u(y, E, F) {
        y = j(y, 255), E = j(E, 255), F = j(F, 255);
        var _ = a(y, E, F), X = i(y, E, F), G, sA, cA = (_ + X) / 2;
        if (_ == X) G = sA = 0;
        else {
          var fA = _ - X;
          switch (sA = cA > 0.5 ? fA / (2 - _ - X) : fA / (_ + X), _) {
            case y:
              G = (E - F) / fA + (E < F ? 6 : 0);
              break;
            case E:
              G = (F - y) / fA + 2;
              break;
            case F:
              G = (y - E) / fA + 4;
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
      function f(y, E, F) {
        var _, X, G;
        y = j(y, 360), E = j(E, 100), F = j(F, 100);
        function sA(AA, qA, gA) {
          return gA < 0 && (gA += 1), gA > 1 && (gA -= 1), gA < 1 / 6 ? AA + (qA - AA) * 6 * gA : gA < 1 / 2 ? qA : gA < 2 / 3 ? AA + (qA - AA) * (2 / 3 - gA) * 6 : AA;
        }
        if (E === 0) _ = X = G = F;
        else {
          var cA = F < 0.5 ? F * (1 + E) : F + E - F * E, fA = 2 * F - cA;
          _ = sA(fA, cA, y + 1 / 3), X = sA(fA, cA, y), G = sA(fA, cA, y - 1 / 3);
        }
        return {
          r: _ * 255,
          g: X * 255,
          b: G * 255
        };
      }
      function p(y, E, F) {
        y = j(y, 255), E = j(E, 255), F = j(F, 255);
        var _ = a(y, E, F), X = i(y, E, F), G, sA, cA = _, fA = _ - X;
        if (sA = _ === 0 ? 0 : fA / _, _ == X) G = 0;
        else {
          switch (_) {
            case y:
              G = (E - F) / fA + (E < F ? 6 : 0);
              break;
            case E:
              G = (F - y) / fA + 2;
              break;
            case F:
              G = (y - E) / fA + 4;
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
      function h(y, E, F) {
        y = j(y, 360) * 6, E = j(E, 100), F = j(F, 100);
        var _ = e.floor(y), X = y - _, G = F * (1 - E), sA = F * (1 - X * E), cA = F * (1 - (1 - X) * E), fA = _ % 6, AA = [
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
      function Q(y, E, F, _) {
        var X = [
          V(o(y).toString(16)),
          V(o(E).toString(16)),
          V(o(F).toString(16))
        ];
        return _ && X[0].charAt(0) == X[0].charAt(1) && X[1].charAt(0) == X[1].charAt(1) && X[2].charAt(0) == X[2].charAt(1) ? X[0].charAt(0) + X[1].charAt(0) + X[2].charAt(0) : X.join("");
      }
      function m(y, E, F, _, X) {
        var G = [
          V(o(y).toString(16)),
          V(o(E).toString(16)),
          V(o(F).toString(16)),
          V(dA(_))
        ];
        return X && G[0].charAt(0) == G[0].charAt(1) && G[1].charAt(0) == G[1].charAt(1) && G[2].charAt(0) == G[2].charAt(1) && G[3].charAt(0) == G[3].charAt(1) ? G[0].charAt(0) + G[1].charAt(0) + G[2].charAt(0) + G[3].charAt(0) : G.join("");
      }
      function b(y, E, F, _) {
        var X = [
          V(dA(_)),
          V(o(y).toString(16)),
          V(o(E).toString(16)),
          V(o(F).toString(16))
        ];
        return X.join("");
      }
      l.equals = function(y, E) {
        return !y || !E ? false : l(y).toRgbString() == l(E).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function w(y, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(y).toHsl();
        return F.s -= E / 100, F.s = eA(F.s), l(F);
      }
      function v(y, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(y).toHsl();
        return F.s += E / 100, F.s = eA(F.s), l(F);
      }
      function U(y) {
        return l(y).desaturate(100);
      }
      function C(y, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(y).toHsl();
        return F.l += E / 100, F.l = eA(F.l), l(F);
      }
      function S(y, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(y).toRgb();
        return F.r = a(0, i(255, F.r - o(255 * -(E / 100)))), F.g = a(0, i(255, F.g - o(255 * -(E / 100)))), F.b = a(0, i(255, F.b - o(255 * -(E / 100)))), l(F);
      }
      function I(y, E) {
        E = E === 0 ? 0 : E || 10;
        var F = l(y).toHsl();
        return F.l -= E / 100, F.l = eA(F.l), l(F);
      }
      function H(y, E) {
        var F = l(y).toHsl(), _ = (F.h + E) % 360;
        return F.h = _ < 0 ? 360 + _ : _, l(F);
      }
      function g(y) {
        var E = l(y).toHsl();
        return E.h = (E.h + 180) % 360, l(E);
      }
      function x(y) {
        var E = l(y).toHsl(), F = E.h;
        return [
          l(y),
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
      function k(y) {
        var E = l(y).toHsl(), F = E.h;
        return [
          l(y),
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
      function K(y) {
        var E = l(y).toHsl(), F = E.h;
        return [
          l(y),
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
      function $(y, E, F) {
        E = E || 6, F = F || 30;
        var _ = l(y).toHsl(), X = 360 / F, G = [
          l(y)
        ];
        for (_.h = (_.h - (X * E >> 1) + 720) % 360; --E; ) _.h = (_.h + X) % 360, G.push(l(_));
        return G;
      }
      function D(y, E) {
        E = E || 6;
        for (var F = l(y).toHsv(), _ = F.h, X = F.s, G = F.v, sA = [], cA = 1 / E; E--; ) sA.push(l({
          h: _,
          s: X,
          v: G
        })), G = (G + cA) % 1;
        return sA;
      }
      l.mix = function(y, E, F) {
        F = F === 0 ? 0 : F || 50;
        var _ = l(y).toRgb(), X = l(E).toRgb(), G = F / 100, sA = {
          r: (X.r - _.r) * G + _.r,
          g: (X.g - _.g) * G + _.g,
          b: (X.b - _.b) * G + _.b,
          a: (X.a - _.a) * G + _.a
        };
        return l(sA);
      }, l.readability = function(y, E) {
        var F = l(y), _ = l(E);
        return (e.max(F.getLuminance(), _.getLuminance()) + 0.05) / (e.min(F.getLuminance(), _.getLuminance()) + 0.05);
      }, l.isReadable = function(y, E, F) {
        var _ = l.readability(y, E), X, G;
        switch (G = false, X = aA(F), X.level + X.size) {
          case "AAsmall":
          case "AAAlarge":
            G = _ >= 4.5;
            break;
          case "AAlarge":
            G = _ >= 3;
            break;
          case "AAAsmall":
            G = _ >= 7;
            break;
        }
        return G;
      }, l.mostReadable = function(y, E, F) {
        var _ = null, X = 0, G, sA, cA, fA;
        F = F || {}, sA = F.includeFallbackColors, cA = F.level, fA = F.size;
        for (var AA = 0; AA < E.length; AA++) G = l.readability(y, E[AA]), G > X && (X = G, _ = l(E[AA]));
        return l.isReadable(y, _, {
          level: cA,
          size: fA
        }) || !sA ? _ : (F.includeFallbackColors = false, l.mostReadable(y, [
          "#fff",
          "#000"
        ], F));
      };
      var M = l.names = {
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
      }, N = l.hexNames = q(M);
      function q(y) {
        var E = {};
        for (var F in y) y.hasOwnProperty(F) && (E[y[F]] = F);
        return E;
      }
      function P(y) {
        return y = parseFloat(y), (isNaN(y) || y < 0 || y > 1) && (y = 1), y;
      }
      function j(y, E) {
        R(y) && (y = "100%");
        var F = W(y);
        return y = i(E, a(0, parseFloat(y))), F && (y = parseInt(y * E, 10) / 100), e.abs(y - E) < 1e-6 ? 1 : y % E / parseFloat(E);
      }
      function eA(y) {
        return i(1, a(0, y));
      }
      function nA(y) {
        return parseInt(y, 16);
      }
      function R(y) {
        return typeof y == "string" && y.indexOf(".") != -1 && parseFloat(y) === 1;
      }
      function W(y) {
        return typeof y == "string" && y.indexOf("%") != -1;
      }
      function V(y) {
        return y.length == 1 ? "0" + y : "" + y;
      }
      function J(y) {
        return y <= 1 && (y = y * 100 + "%"), y;
      }
      function dA(y) {
        return e.round(parseFloat(y) * 255).toString(16);
      }
      function iA(y) {
        return nA(y) / 255;
      }
      var tA = (function() {
        var y = "[-\\+]?\\d+%?", E = "[-\\+]?\\d*\\.\\d+%?", F = "(?:" + E + ")|(?:" + y + ")", _ = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", X = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(F),
          rgb: new RegExp("rgb" + _),
          rgba: new RegExp("rgba" + X),
          hsl: new RegExp("hsl" + _),
          hsla: new RegExp("hsla" + X),
          hsv: new RegExp("hsv" + _),
          hsva: new RegExp("hsva" + X),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function z(y) {
        return !!tA.CSS_UNIT.exec(y);
      }
      function oA(y) {
        y = y.replace(t, "").replace(r, "").toLowerCase();
        var E = false;
        if (M[y]) y = M[y], E = true;
        else if (y == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var F;
        return (F = tA.rgb.exec(y)) ? {
          r: F[1],
          g: F[2],
          b: F[3]
        } : (F = tA.rgba.exec(y)) ? {
          r: F[1],
          g: F[2],
          b: F[3],
          a: F[4]
        } : (F = tA.hsl.exec(y)) ? {
          h: F[1],
          s: F[2],
          l: F[3]
        } : (F = tA.hsla.exec(y)) ? {
          h: F[1],
          s: F[2],
          l: F[3],
          a: F[4]
        } : (F = tA.hsv.exec(y)) ? {
          h: F[1],
          s: F[2],
          v: F[3]
        } : (F = tA.hsva.exec(y)) ? {
          h: F[1],
          s: F[2],
          v: F[3],
          a: F[4]
        } : (F = tA.hex8.exec(y)) ? {
          r: nA(F[1]),
          g: nA(F[2]),
          b: nA(F[3]),
          a: iA(F[4]),
          format: E ? "name" : "hex8"
        } : (F = tA.hex6.exec(y)) ? {
          r: nA(F[1]),
          g: nA(F[2]),
          b: nA(F[3]),
          format: E ? "name" : "hex"
        } : (F = tA.hex4.exec(y)) ? {
          r: nA(F[1] + "" + F[1]),
          g: nA(F[2] + "" + F[2]),
          b: nA(F[3] + "" + F[3]),
          a: iA(F[4] + "" + F[4]),
          format: E ? "name" : "hex8"
        } : (F = tA.hex3.exec(y)) ? {
          r: nA(F[1] + "" + F[1]),
          g: nA(F[2] + "" + F[2]),
          b: nA(F[3] + "" + F[3]),
          format: E ? "name" : "hex"
        } : false;
      }
      function aA(y) {
        var E, F;
        return y = y || {
          level: "AA",
          size: "small"
        }, E = (y.level || "AA").toUpperCase(), F = (y.size || "small").toLowerCase(), E !== "AA" && E !== "AAA" && (E = "AA"), F !== "small" && F !== "large" && (F = "small"), {
          level: E,
          size: F
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(ud);
  var fm = ud.exports;
  const re = Ya(fm);
  var tr = function() {
    return tr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, tr.apply(this, arguments);
  }, gm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, pm = function(A) {
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
    function t(R) {
      var W = new Error(A + ": " + R);
      throw W;
    }
    function r(R) {
      A = A.substr(R);
    }
    function n(R) {
      var W = /^[\n\r\t\s]+/.exec(A);
      W && r(W[0].length);
      var V = R.exec(A);
      return V && r(V[0].length), V;
    }
    function o(R) {
      var W = R(), V = [];
      if (W) for (V.push(W); n(e.comma); ) W = R(), W ? V.push(W) : t("One extra comma");
      return V;
    }
    function i(R, W, V) {
      var J = n(W);
      if (J) return {
        type: R,
        value: J[V]
      };
    }
    function a() {
      var R = i("hex", e.hexColor, 1);
      if (R == null ? void 0 : R.value) {
        var W = re(R == null ? void 0 : R.value).toRgb(), V = W.r, J = W.g, dA = W.b, iA = W.a;
        return {
          value: "rgba(".concat(V, ", ").concat(J, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    var s = function(R) {
      var W = Ut(R == null ? void 0 : R[0]);
      return {
        value: "".concat(W ? "RGBA" : "rgba", "(").concat(o(N), ")")
      };
    };
    function l(R, W) {
      var V = n(R);
      if (V) {
        n(e.startCall) || t("Missing (");
        var J = W(V);
        return n(e.endCall) || t("Missing )"), J;
      }
    }
    function c() {
      return l(e.hslColor, q);
    }
    function d() {
      return l(e.rgbaColor, s);
    }
    function u() {
      return l(e.rgbColor, j);
    }
    function f() {
      var R = i("literal", e.literalColor, 0);
      if (R == null ? void 0 : R.value) {
        var W = re(R == null ? void 0 : R.value).toRgb(), V = W.r, J = W.g, dA = W.b, iA = W.a;
        return {
          value: "rgba(".concat(V, ", ").concat(J, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    function p() {
      return l(e.hsvColor, P);
    }
    function h() {
      return a() || c() || d() || u() || f() || p();
    }
    function Q() {
      var R, W = h();
      return W || t("Expected color definition"), W.left = parseInt((R = eA()) === null || R === void 0 ? void 0 : R.value), W;
    }
    function m(R, W, V) {
      return l(W, function() {
        var J = V();
        return J && (n(e.comma) || t("Missing comma before color stops")), {
          type: R,
          orientation: J,
          colorStops: o(Q)
        };
      });
    }
    function b() {
      return C() || S();
    }
    function w() {
      return m("linear-gradient", e.linearGradient, b) || m("repeating-linear-gradient", e.repeatingLinearGradient, b) || m("radial-gradient", e.radialGradient, I) || m("repeating-radial-gradient", e.repeatingRadialGradient, I);
    }
    function v() {
      return o(w);
    }
    function U() {
      var R, W = v();
      A.length > 0 && t("Invalid input not EOF");
      var V = W[0], J = (R = V == null ? void 0 : V.colorStops) === null || R === void 0 ? void 0 : R.filter(function(iA) {
        return Ut(iA.value);
      }).length, dA = function() {
        if (J > 0) return V;
        var iA = function(tA, z) {
          return z === 0 ? fi(tA) : un(tA);
        };
        return tr(tr({}, V), {
          colorStops: V.colorStops.map(function(tA, z) {
            return tr(tr({}, tA), {
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
    function I() {
      var R, W = H(), V;
      return W && (R = [], R.push(W), V = A, n(e.comma) && (W = H(), W ? R.push(W) : A = V)), R;
    }
    function H() {
      var R = x() || k();
      if (R) R.at = $();
      else {
        var W = K();
        if (W) {
          R = W;
          var V = $();
          V && (R.at = V);
        } else {
          var J = D();
          J && (R = {
            type: "default-radial",
            at: J
          });
        }
      }
      return R;
    }
    function g() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function x() {
      var R = i("shape", /^(circle)/i, 0);
      return R && (R.style = g() || K()), R;
    }
    function k() {
      var R = i("shape", /^(ellipse)/i, 0);
      return R && (R.style = eA() || K()), R;
    }
    function K() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function $() {
      if (i("position", /^at/, 0)) {
        var R = D();
        return R || t("Missing positioning value"), R;
      }
    }
    function D() {
      var R = M();
      if (R.x || R.y) return {
        type: "position",
        value: R
      };
    }
    function M() {
      return {
        x: eA(),
        y: eA()
      };
    }
    function N() {
      return n(e.number)[1];
    }
    var q = function(R) {
      var W = Ut(R == null ? void 0 : R[0]), V = o(N), J = re({
        h: V[0],
        s: V[1],
        l: V[2],
        a: V[3] || 1
      }).toRgb(), dA = J.r, iA = J.g, tA = J.b, z = J.a;
      return {
        value: "".concat(W ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(z, ")")
      };
    }, P = function(R) {
      var W = Ut(R == null ? void 0 : R[0]), V = o(N), J = re({
        h: V[0],
        s: V[1],
        v: V[2],
        a: V[3] || 1
      }).toRgb(), dA = J.r, iA = J.g, tA = J.b, z = J.a;
      return {
        value: "".concat(W ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(z, ")")
      };
    }, j = function(R) {
      var W = Ut(R == null ? void 0 : R[0]), V = n(e.spacedRgbColor), J = V || gm([
        null
      ], o(N), true), dA = J[1], iA = J[2], tA = J[3], z = J[4], oA = z === void 0 ? 1 : z;
      return {
        value: "".concat(W ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(oA, ")")
      };
    };
    function eA() {
      return i("%", e.percentageValue, 1) || nA() || g();
    }
    function nA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, un = function(A) {
    return A.value.toLowerCase();
  }, fi = function(A) {
    return A.value.toUpperCase();
  }, Bm = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = pm(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, cr = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, Ne = function(A) {
    return Math.round(A);
  }, po = function() {
    return po = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, po.apply(this, arguments);
  }, dd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function ur(A, e) {
    var t = dd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = cr(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function hm(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var Cm = function(A) {
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
  function mm(A, e) {
    var t = dd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = Cm(A), s = a.clientX, l = a.clientY, c = function() {
      var u = s - r - e / 2;
      return cr(u, -9, o - 10);
    }, d = function() {
      var u = l - n - e / 2;
      return cr(u, -9, i - 10);
    };
    return [
      c(),
      d()
    ];
  }
  var Ut = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, fd = function(A) {
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
  }, wm = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(u, f) {
        return (u == null ? void 0 : u.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(u) {
        return "".concat(u == null ? void 0 : u.value, " ").concat(u == null ? void 0 : u.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = fd((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var d = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return d;
    }
  }, vm = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return po(po({}, o), {
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
  }, ym = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return fd(r);
  }, Qm = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = ym(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
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
  }, bm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, gd = B.createContext(null);
  function Fm(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, d = A.showHexAlpha, u = A.squareHeight, f = A.passedConfig, p = A.defaultStyles, h = A.pickerIdSuffix, Q = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : Qn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : Qn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : Qn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : Qn.defaultGradient
    }, m = Bm(o, Q.defaultColor, Q.defaultGradient), b = Qm(o), w = b.degrees, v = b.degreeStr, U = b.isGradient, C = b.gradientType, S = vm(m, Q.defaultGradient), I = S.currentColor, H = S.selectedColor, g = S.currentLeft, x = B.useState("rgb"), k = x[0], K = x[1], $ = B.useState({}), D = $[0], M = $[1], N = re(I), q = N.toRgb(), P = N.toHsv(), j = B.useState(ce(ce({}, q), P)), eA = j[0], nA = j[1];
    B.useEffect(function() {
      (P == null ? void 0 : P.s) === 0 ? nA(ce(ce(ce({}, q), P), {
        h: eA == null ? void 0 : eA.h
      })) : nA(ce(ce({}, q), P));
    }, [
      I
    ]);
    var R = function(iA) {
      var tA = iA.sort(function(aA, y) {
        return aA.left - y.left;
      }), z = tA == null ? void 0 : tA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), oA = "".concat(C, "(").concat(v, ", ").concat(z.join(", "), ")");
      M(ce(ce({}, D), {
        gradient: oA
      })), a(oA);
    }, W = function(iA, tA) {
      var z = m == null ? void 0 : m.filter(function(aA) {
        return !Ut(aA.value);
      }), oA = bm([
        {
          value: iA.toUpperCase(),
          left: tA ?? g
        }
      ], z, true);
      R(oA);
    }, V = function(iA) {
      U ? W(iA) : (M(ce(ce({}, D), {
        color: iA
      })), a(iA));
    }, J = function() {
      if ((m == null ? void 0 : m.length) > 2) {
        var iA = m == null ? void 0 : m.map(function(z, oA) {
          return ce(ce({}, z), {
            value: oA === H - 1 ? fi(z) : un(z)
          });
        }), tA = iA == null ? void 0 : iA.filter(function(z, oA) {
          return oA !== H;
        });
        R(tA);
      }
    }, dA = {
      hc: eA,
      setHc: nA,
      value: o,
      colors: m,
      config: Q,
      degrees: w,
      onChange: a,
      previous: D,
      inputType: k,
      tinyColor: N,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: g,
      deletePoint: J,
      showHexAlpha: d,
      squareHeight: u,
      setInputType: K,
      gradientType: C,
      handleChange: V,
      currentColor: I,
      selectedColor: H,
      defaultStyles: p,
      handleGradient: W,
      pickerIdSuffix: h,
      createGradientStr: R
    };
    return T.createElement(gd.Provider, {
      value: dA
    }, i);
  }
  function QA() {
    var A = B.useContext(gd);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var Qn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, Um = function(A, e) {
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
  }, Em = function(A, e, t, r) {
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
  }, Sm = function(A, e, t, r) {
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
  }, xm = function(A, e, t, r) {
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
  }, Bo = function() {
    return Bo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Bo.apply(this, arguments);
  }, Im = function() {
    var A = B.useRef(null), e = QA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = B.useState(false), l = s[0], c = s[1], d = t.barSize;
    Um(A, n);
    var u = function() {
      c(false);
    }, f = function() {
      c(true);
    }, p = function(m) {
      var b = ur(m, d) * 3.6, w = re({
        h: b,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = w.toRgb(), U = v.r, C = v.g, S = v.b;
      r("rgba(".concat(U, ", ").concat(C, ", ").concat(S, ", ").concat(o.a, ")")), i(Bo(Bo({}, o), {
        h: b
      }));
    }, h = function(m) {
      l && p(m);
    }, Q = function(m) {
      l || p(m);
    };
    return B.useEffect(function() {
      var m = function() {
        u();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), T.createElement("div", {
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
    }, T.createElement("div", {
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
    }), T.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(m) {
        return Q(m);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function Hm(A, e, t) {
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
  var Tm = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, Lm = function(A) {
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
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = B.useState(t), c = l[0], d = l[1], u = i ? "25%" : "20%";
    B.useEffect(function() {
      d(t);
    }, [
      t
    ]);
    var f = function(p) {
      var h = cr(parseFloat(p.target.value), 0, o);
      d(h), r(h);
    };
    return T.createElement("div", {
      style: {
        width: u,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, T.createElement("input", {
      value: c,
      onChange: function(p) {
        return f(p);
      },
      style: Ue({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), T.createElement("div", {
      style: Ue({}, a.rbgcpInputLabel)
    }, e));
  }, km = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = B.useState(""), s = a[0], l = a[1], c = t.toHex(), d = B.useState(c), u = d[0], f = d[1];
    B.useEffect(function() {
      s !== "hex" && f(c);
    }, [
      t,
      s,
      c
    ]);
    var p = function() {
      l("hex");
    }, h = function() {
      l("");
    }, Q = function(v) {
      var U = re(v.target.value);
      if (f(v.target.value), U.isValid()) {
        var C = U.toRgb(), S = C.r, I = C.g, H = C.b, g = "rgba(".concat(S, ", ").concat(I, ", ").concat(H, ", ").concat(e, ")");
        n(g);
      }
    }, m = r ? "".concat(u).concat(Lm(e)) : u, b = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return T.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, T.createElement("input", {
      onBlur: h,
      onFocus: p,
      onChange: function(v) {
        return Q(v);
      },
      value: m == null ? void 0 : m.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Ue(Ue({}, o.rbgcpInput), o.rbgcpHexInput)
    }), T.createElement("div", {
      style: Ue({}, o.rbgcpInputLabel)
    }, b));
  }, Rm = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(fe, {
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
    }), T.createElement(fe, {
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
    }), T.createElement(fe, {
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
  }, Km = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, d = function(f, p, h) {
      var Q = re({
        h: f,
        s: p,
        l: h
      }).toRgb(), m = Q.r, b = Q.g, w = Q.b;
      o("rgba(".concat(m, ", ").concat(b, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ue(Ue({}, e), {
        h: f
      }));
    }, u = function(f) {
      var p = re(f).toRgb(), h = p.r, Q = p.g, m = p.b;
      o("rgba(".concat(h, ", ").concat(Q, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(fe, {
      label: "H",
      max: 360,
      value: Ne(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d(f, l, c);
      }
    }), T.createElement(fe, {
      label: "S",
      value: Ne(l * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u({
          h: e == null ? void 0 : e.h,
          s: f,
          l: c
        });
      }
    }), T.createElement(fe, {
      label: "L",
      value: Ne(c * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u({
          h: e == null ? void 0 : e.h,
          s: l,
          l: f
        });
      }
    }));
  }, Om = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, d) {
      var u = re({
        h: l,
        s: c,
        v: d
      }).toRgb(), f = u.r, p = u.g, h = u.b;
      n("rgba(".concat(f, ", ").concat(p, ", ").concat(h, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ue(Ue({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = re(l).toRgb(), d = c.r, u = c.g, f = c.b;
      n("rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(fe, {
      label: "H",
      max: 360,
      value: Ne(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), T.createElement(fe, {
      label: "S",
      hideOpacity: r,
      value: Ne((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), T.createElement(fe, {
      label: "V",
      hideOpacity: r,
      value: Ne((e == null ? void 0 : e.v) * 100),
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
  }, Dm = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = Hm(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, d = function(u) {
      var f = Tm(u), p = f.r, h = f.g, Q = f.b;
      r("rgba(".concat(p, ", ").concat(h, ", ").concat(Q, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(fe, {
      label: "C",
      value: Ne(a * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: u / 100,
          m: s,
          y: l,
          k: c
        });
      }
    }), T.createElement(fe, {
      label: "M",
      value: Ne(s * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: a,
          m: u / 100,
          y: l,
          k: c
        });
      }
    }), T.createElement(fe, {
      label: "Y",
      value: Ne(l * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: a,
          m: s,
          y: u / 100,
          k: c
        });
      }
    }), T.createElement(fe, {
      label: "K",
      value: Ne(c * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: a,
          m: s,
          y: l,
          k: u / 100
        });
      }
    }));
  }, Mm = function() {
    var A = QA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return T.createElement("div", {
      style: Ue({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && T.createElement(km, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && T.createElement(Km, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && T.createElement(Rm, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && T.createElement(Om, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && T.createElement(Dm, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && T.createElement(fe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, Pm = function(A, e, t, r) {
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
  }, pd = "Expected a function", Xl = NaN, _m = "[object Symbol]", Nm = /^\s+|\s+$/g, Gm = /^[-+]0x[0-9a-f]+$/i, Vm = /^0b[01]+$/i, $m = /^0o[0-7]+$/i, Wm = parseInt, Xm = typeof gn == "object" && gn && gn.Object === Object && gn, jm = typeof self == "object" && self && self.Object === Object && self, zm = Xm || jm || Function("return this")(), Jm = Object.prototype, Ym = Jm.toString, Zm = Math.max, qm = Math.min, ki = function() {
    return zm.Date.now();
  };
  function Aw(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, d = false, u = true;
    if (typeof A != "function") throw new TypeError(pd);
    e = jl(e) || 0, ho(t) && (c = !!t.leading, d = "maxWait" in t, o = d ? Zm(jl(t.maxWait) || 0, e) : o, u = "trailing" in t ? !!t.trailing : u);
    function f(C) {
      var S = r, I = n;
      return r = n = void 0, l = C, i = A.apply(I, S), i;
    }
    function p(C) {
      return l = C, a = setTimeout(m, e), c ? f(C) : i;
    }
    function h(C) {
      var S = C - s, I = C - l, H = e - S;
      return d ? qm(H, o - I) : H;
    }
    function Q(C) {
      var S = C - s, I = C - l;
      return s === void 0 || S >= e || S < 0 || d && I >= o;
    }
    function m() {
      var C = ki();
      if (Q(C)) return b(C);
      a = setTimeout(m, h(C));
    }
    function b(C) {
      return a = void 0, u && r ? f(C) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : b(ki());
    }
    function U() {
      var C = ki(), S = Q(C);
      if (r = arguments, n = this, s = C, S) {
        if (a === void 0) return p(s);
        if (d) return a = setTimeout(m, e), f(s);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return U.cancel = w, U.flush = v, U;
  }
  function ew(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(pd);
    return ho(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), Aw(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function ho(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function tw(A) {
    return !!A && typeof A == "object";
  }
  function rw(A) {
    return typeof A == "symbol" || tw(A) && Ym.call(A) == _m;
  }
  function jl(A) {
    if (typeof A == "number") return A;
    if (rw(A)) return Xl;
    if (ho(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = ho(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(Nm, "");
    var t = Vm.test(A);
    return t || $m.test(A) ? Wm(A.slice(2), t ? 2 : 8) : Gm.test(A) ? Xl : +A;
  }
  var nw = ew;
  const ow = Ya(nw);
  var Et = function() {
    return Et = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Et.apply(this, arguments);
  }, iw = function() {
    var A, e, t = QA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, d = B.useState(false), u = d[0], f = d[1], p = B.useRef(null), h = hm(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), Q = h[0], m = h[1], b = B.useState({
      x: Q,
      y: m
    }), w = b[0], v = b[1];
    Pm(p, r == null ? void 0 : r.h, o, i), B.useEffect(function() {
      u || v({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : Q,
        y: m
      });
    }, [
      Q,
      m
    ]);
    var U = function(x) {
      var k = ow(function() {
        var K = mm(x, c), $ = K[0], D = K[1];
        if ($ && D) {
          var M = Math.min($ + c / 2, o - 1), N = Math.min(D + c / 2, i - 1), q = M / o * 100, P = 100 - N / i * 100;
          v({
            x: P === 0 ? w == null ? void 0 : w.x : $,
            y: D
          });
          var j = re("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(q, "%, ").concat(P, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(j.toRgbString());
        }
      }, 250);
      k();
    }, C = function() {
      f(false);
    }, S = function(x) {
      u && U(x);
    }, I = function(x) {
      u || U(x);
    }, H = function() {
      f(true);
    }, g = function(x) {
      f(true), U(x);
    };
    return B.useEffect(function() {
      var x = function() {
        C();
      };
      return window.addEventListener("mouseup", x), function() {
        window.removeEventListener("mouseup", x);
      };
    }, []), T.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, T.createElement("div", {
      onMouseUp: C,
      onTouchEnd: C,
      onMouseDown: g,
      onTouchStart: g,
      onMouseMove: function(x) {
        return S(x);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, T.createElement("div", {
      style: Et(Et(Et({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = w == null ? void 0 : w.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = w == null ? void 0 : w.y) !== null && e !== void 0 ? e : 0, "px)")
      }), u ? {
        transition: ""
      } : {}),
      onMouseDown: H,
      id: "rbgcp-square-handle".concat(l)
    }), T.createElement("div", {
      style: Et(Et({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(x) {
        return I(x);
      }
    }, T.createElement("canvas", {
      ref: p,
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
  }, aw = function() {
    var A = QA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = B.useState(false), l = s[0], c = s[1], d = r.r, u = r.g, f = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(d, ",").concat(u, ",").concat(f, ",.5) 100%)"), h = e.barSize, Q = function() {
      c(false);
    }, m = function() {
      c(true);
    }, b = function(C) {
      var S = ur(C, h) / 100, I = "rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(S, ")");
      o(I);
    }, w = function(C) {
      l && b(C);
    }, v = function(C) {
      l || b(C);
    }, U = n - 18;
    return B.useEffect(function() {
      var C = function() {
        Q();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), T.createElement("div", {
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
    }, T.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: lt(lt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), T.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: lt(lt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), T.createElement("div", {
      style: lt(lt({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(C) {
        return v(C);
      }
    }));
  }, sw = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, lw = [
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
  ], cw = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = QA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : lw;
    }, d = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, u = function(f) {
      if (!f || i) return "";
      var p = f == null ? void 0 : f.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return T.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, T.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: u(n)
      },
      id: "rbgcp-preview".concat(l)
    }), T.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, p) {
      return T.createElement("div", {
        key: "".concat(f, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, T.createElement("div", {
        style: {
          height: 23.5,
          width: "100%",
          background: f,
          borderRadius: 4,
          border: u(f)
        },
        onClick: function() {
          return d(f);
        },
        id: "rbgcp-preset-".concat(p).concat(l)
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
  }, uw = function() {
    var A = QA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, T.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, dw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, T.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, fw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, T.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), T.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, gw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, T.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), T.createElement("line", {
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
    }), T.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), T.createElement("line", {
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
    }), T.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), T.createElement("line", {
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
  }, pw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, Bw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, T.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), T.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), T.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), T.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), T.createElement("path", {
      style: rA(rA(rA(rA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, hw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, T.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), T.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, Cw = function() {
    var A = QA().defaultStyles;
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, T.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), T.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), T.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), T.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, mw = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = B.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = B.useState(!n.current.parentElement)[0];
    return B.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), xs.createPortal(t, n.current);
  };
  const ww = B.memo(mw);
  var Ea = function(A, e) {
    return Ea = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Ea(A, e);
  };
  function Te(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Ea(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var Sa = function() {
    return Sa = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, Sa.apply(this, arguments);
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
        } catch (d) {
          i(d);
        }
      }
      function s(c) {
        try {
          l(r.throw(c));
        } catch (d) {
          i(d);
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
  function bn(A, e, t) {
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
  })(), gi = function(A, e) {
    return nt.fromClientRect(A, e.getBoundingClientRect());
  }, vw = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new nt(0, 0, r, n);
  }, pi = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, NA = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, zl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Fn = 0; Fn < zl.length; Fn++) yw[zl.charCodeAt(Fn)] = Fn;
  var Jl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Un = 0; Un < Jl.length; Un++) Tr[Jl.charCodeAt(Un)] = Un;
  var Qw = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Tr[A.charCodeAt(r)], i = Tr[A.charCodeAt(r + 1)], a = Tr[A.charCodeAt(r + 2)], s = Tr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, bw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Fw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, kt = 5, Ps = 11, Ri = 2, Uw = Ps - kt, Bd = 65536 >> kt, Ew = 1 << kt, Ki = Ew - 1, Sw = 1024 >> kt, xw = Bd + Sw, Iw = xw, Hw = 32, Tw = Iw + Hw, Lw = 65536 >> Ps, kw = 1 << Uw, Rw = kw - 1, Yl = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Kw = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Ow = function(A, e) {
    var t = Qw(A), r = Array.isArray(t) ? Fw(t) : new Uint32Array(t), n = Array.isArray(t) ? bw(t) : new Uint16Array(t), o = 24, i = Yl(n, o / 2, r[4] / 2), a = r[5] === 2 ? Yl(n, (o + r[4]) / 2) : Kw(r, Math.ceil((o + r[4]) / 4));
    return new Dw(r[0], r[1], r[2], r[3], i, a);
  }, Dw = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> kt], t = (t << Ri) + (e & Ki), this.data[t];
        if (e <= 65535) return t = this.index[Bd + (e - 55296 >> kt)], t = (t << Ri) + (e & Ki), this.data[t];
        if (e < this.highStart) return t = Tw - Lw + (e >> Ps), t = this.index[t], t += e >> kt & Rw, t = this.index[t], t = (t << Ri) + (e & Ki), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Zl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var En = 0; En < Zl.length; En++) Mw[Zl.charCodeAt(En)] = En;
  var Pw = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ql = 50, _w = 1, hd = 2, Cd = 3, Nw = 4, Gw = 5, Ac = 7, md = 8, ec = 9, ut = 10, xa = 11, tc = 12, Ia = 13, Vw = 14, Lr = 15, Ha = 16, Sn = 17, br = 18, $w = 19, rc = 20, Ta = 21, Fr = 22, Oi = 23, Vt = 24, Be = 25, kr = 26, Rr = 27, $t = 28, Ww = 29, St = 30, Xw = 31, xn = 32, In = 33, La = 34, ka = 35, Ra = 36, Zr = 37, Ka = 38, to = 39, ro = 40, Di = 41, wd = 42, jw = 43, zw = [
    9001,
    65288
  ], vd = "!", BA = "\xD7", Hn = "\xF7", Oa = Ow(Pw), Ye = [
    St,
    Ra
  ], Da = [
    _w,
    hd,
    Cd,
    Gw
  ], yd = [
    ut,
    md
  ], nc = [
    Rr,
    kr
  ], Jw = Da.concat(yd), oc = [
    Ka,
    to,
    ro,
    La,
    ka
  ], Yw = [
    Lr,
    Ia
  ], Zw = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Oa.get(o);
      if (a > ql ? (n.push(true), a -= ql) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ha);
      if (a === Nw || a === xa) {
        if (i === 0) return r.push(i), t.push(St);
        var s = t[i - 1];
        return Jw.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(St));
      }
      if (r.push(i), a === Xw) return t.push(e === "strict" ? Ta : Zr);
      if (a === wd || a === Ww) return t.push(St);
      if (a === jw) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(Zr) : t.push(St);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Mi = function(A, e, t, r) {
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
  }, ic = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === ut) t--;
      else return r;
    }
    return 0;
  }, qw = function(A, e, t, r, n) {
    if (t[r] === 0) return BA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return BA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === hd && c === Cd) return BA;
    if (Da.indexOf(s) !== -1) return vd;
    if (Da.indexOf(c) !== -1 || yd.indexOf(c) !== -1) return BA;
    if (ic(o, e) === md) return Hn;
    if (Oa.get(A[o]) === xa || (s === xn || s === In) && Oa.get(A[a]) === xa || s === Ac || c === Ac || s === ec || [
      ut,
      Ia,
      Lr
    ].indexOf(s) === -1 && c === ec || [
      Sn,
      br,
      $w,
      Vt,
      $t
    ].indexOf(c) !== -1 || ic(o, e) === Fr || Mi(Oi, Fr, o, e) || Mi([
      Sn,
      br
    ], Ta, o, e) || Mi(tc, tc, o, e)) return BA;
    if (s === ut) return Hn;
    if (s === Oi || c === Oi) return BA;
    if (c === Ha || s === Ha) return Hn;
    if ([
      Ia,
      Lr,
      Ta
    ].indexOf(c) !== -1 || s === Vw || l === Ra && Yw.indexOf(s) !== -1 || s === $t && c === Ra || c === rc || Ye.indexOf(c) !== -1 && s === Be || Ye.indexOf(s) !== -1 && c === Be || s === Rr && [
      Zr,
      xn,
      In
    ].indexOf(c) !== -1 || [
      Zr,
      xn,
      In
    ].indexOf(s) !== -1 && c === kr || Ye.indexOf(s) !== -1 && nc.indexOf(c) !== -1 || nc.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || [
      Rr,
      kr
    ].indexOf(s) !== -1 && (c === Be || [
      Fr,
      Lr
    ].indexOf(c) !== -1 && e[a + 1] === Be) || [
      Fr,
      Lr
    ].indexOf(s) !== -1 && c === Be || s === Be && [
      Be,
      $t,
      Vt
    ].indexOf(c) !== -1) return BA;
    if ([
      Be,
      $t,
      Vt,
      Sn,
      br
    ].indexOf(c) !== -1) for (var d = o; d >= 0; ) {
      var u = e[d];
      if (u === Be) return BA;
      if ([
        $t,
        Vt
      ].indexOf(u) !== -1) d--;
      else break;
    }
    if ([
      Rr,
      kr
    ].indexOf(c) !== -1) for (var d = [
      Sn,
      br
    ].indexOf(s) !== -1 ? i : o; d >= 0; ) {
      var u = e[d];
      if (u === Be) return BA;
      if ([
        $t,
        Vt
      ].indexOf(u) !== -1) d--;
      else break;
    }
    if (Ka === s && [
      Ka,
      to,
      La,
      ka
    ].indexOf(c) !== -1 || [
      to,
      La
    ].indexOf(s) !== -1 && [
      to,
      ro
    ].indexOf(c) !== -1 || [
      ro,
      ka
    ].indexOf(s) !== -1 && c === ro || oc.indexOf(s) !== -1 && [
      rc,
      kr
    ].indexOf(c) !== -1 || oc.indexOf(c) !== -1 && s === Rr || Ye.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || s === Vt && Ye.indexOf(c) !== -1 || Ye.concat(Be).indexOf(s) !== -1 && c === Fr && zw.indexOf(A[a]) === -1 || Ye.concat(Be).indexOf(c) !== -1 && s === br) return BA;
    if (s === Di && c === Di) {
      for (var f = t[o], p = 1; f > 0 && (f--, e[f] === Di); ) p++;
      if (p % 2 !== 0) return BA;
    }
    return s === xn && c === In ? BA : Hn;
  }, Av = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Zw(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Be,
        St,
        wd
      ].indexOf(a) !== -1 ? Zr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, ev = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === vd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return NA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), tv = function(A, e) {
    var t = pi(A), r = Av(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = BA; l < a && (c = qw(t, o, n, ++l, i)) === BA; ) ;
        if (c !== BA || l === a) {
          var d = new ev(t, c, s, l);
          return s = l, {
            value: d,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, rv = 1, nv = 2, dn = 4, ac = 8, Co = 10, sc = 47, Nr = 92, ov = 9, iv = 32, Tn = 34, Ur = 61, av = 35, sv = 36, lv = 37, Ln = 39, kn = 40, Er = 41, cv = 95, de = 45, uv = 33, dv = 60, fv = 62, gv = 64, pv = 91, Bv = 93, hv = 61, Cv = 123, Rn = 63, mv = 125, lc = 124, wv = 126, vv = 128, cc = 65533, Pi = 42, Tt = 43, yv = 44, Qv = 58, bv = 59, qr = 46, Fv = 0, Uv = 8, Ev = 11, Sv = 14, xv = 31, Iv = 127, Ke = -1, Qd = 48, bd = 97, Fd = 101, Hv = 102, Tv = 117, Lv = 122, Ud = 65, Ed = 69, Sd = 70, kv = 85, Rv = 90, se = function(A) {
    return A >= Qd && A <= 57;
  }, Kv = function(A) {
    return A >= 55296 && A <= 57343;
  }, Wt = function(A) {
    return se(A) || A >= Ud && A <= Sd || A >= bd && A <= Hv;
  }, Ov = function(A) {
    return A >= bd && A <= Lv;
  }, Dv = function(A) {
    return A >= Ud && A <= Rv;
  }, Mv = function(A) {
    return Ov(A) || Dv(A);
  }, Pv = function(A) {
    return A >= vv;
  }, Kn = function(A) {
    return A === Co || A === ov || A === iv;
  }, mo = function(A) {
    return Mv(A) || Pv(A) || A === cv;
  }, uc = function(A) {
    return mo(A) || se(A) || A === de;
  }, _v = function(A) {
    return A >= Fv && A <= Uv || A === Ev || A >= Sv && A <= xv || A === Iv;
  }, ct = function(A, e) {
    return A !== Nr ? false : e !== Co;
  }, On = function(A, e, t) {
    return A === de ? mo(e) || ct(e, t) : mo(A) ? true : !!(A === Nr && ct(A, e));
  }, _i = function(A, e, t) {
    return A === Tt || A === de ? se(e) ? true : e === qr && se(t) : se(A === qr ? e : A);
  }, Nv = function(A) {
    var e = 0, t = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (t = -1), e++);
    for (var r = []; se(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(NA.apply(void 0, r), 10) : 0;
    A[e] === qr && e++;
    for (var o = []; se(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(NA.apply(void 0, o), 10) : 0;
    (A[e] === Ed || A[e] === Fd) && e++;
    var s = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (s = -1), e++);
    for (var l = []; se(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(NA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, Gv = {
    type: 2
  }, Vv = {
    type: 3
  }, $v = {
    type: 4
  }, Wv = {
    type: 13
  }, Xv = {
    type: 8
  }, jv = {
    type: 21
  }, zv = {
    type: 9
  }, Jv = {
    type: 10
  }, Yv = {
    type: 11
  }, Zv = {
    type: 12
  }, qv = {
    type: 14
  }, Dn = {
    type: 23
  }, Ay = {
    type: 1
  }, ey = {
    type: 25
  }, ty = {
    type: 24
  }, ry = {
    type: 26
  }, ny = {
    type: 27
  }, oy = {
    type: 28
  }, iy = {
    type: 29
  }, ay = {
    type: 31
  }, Ma = {
    type: 32
  }, xd = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(pi(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Ma; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Tn:
          return this.consumeStringToken(Tn);
        case av:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (uc(t) || ct(r, n)) {
            var o = On(t, r, n) ? nv : rv, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case sv:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), Wv;
          break;
        case Ln:
          return this.consumeStringToken(Ln);
        case kn:
          return Gv;
        case Er:
          return Vv;
        case Pi:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), qv;
          break;
        case Tt:
          if (_i(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case yv:
          return $v;
        case de:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (_i(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (On(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === de && l === fv) return this.consumeCodePoint(), this.consumeCodePoint(), ty;
          break;
        case qr:
          if (_i(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case sc:
          if (this.peekCodePoint(0) === Pi) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Pi && (c = this.consumeCodePoint(), c === sc)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case Qv:
          return ry;
        case bv:
          return ny;
        case dv:
          if (this.peekCodePoint(0) === uv && this.peekCodePoint(1) === de && this.peekCodePoint(2) === de) return this.consumeCodePoint(), this.consumeCodePoint(), ey;
          break;
        case gv:
          var d = this.peekCodePoint(0), u = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (On(d, u, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case pv:
          return oy;
        case Nr:
          if (ct(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Bv:
          return iy;
        case hv:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), Xv;
          break;
        case Cv:
          return Yv;
        case mv:
          return Zv;
        case Tv:
        case kv:
          var p = this.peekCodePoint(0), h = this.peekCodePoint(1);
          return p === Tt && (Wt(h) || h === Rn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case lc:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), zv;
          if (this.peekCodePoint(0) === lc) return this.consumeCodePoint(), jv;
          break;
        case wv:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), Jv;
          break;
        case Ke:
          return Ma;
      }
      return Kn(e) ? (this.consumeWhiteSpace(), ay) : se(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : mo(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: NA(e)
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
      for (var r = false; t === Rn && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Rn ? Qd : s;
        })), 16), o = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Rn ? Sd : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(NA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === de && Wt(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Wt(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt(NA.apply(void 0, a), 16);
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === kn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === kn ? (this.consumeCodePoint(), {
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
      if (t === Ln || t === Tn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Er) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), Dn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === Er) return {
          type: 22,
          value: NA.apply(void 0, e)
        };
        if (Kn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Er ? (this.consumeCodePoint(), {
          type: 22,
          value: NA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), Dn);
        if (n === Tn || n === Ln || n === kn || _v(n)) return this.consumeBadUrlRemnants(), Dn;
        if (n === Nr) if (ct(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), Dn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Kn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Er || e === Ke) return;
        ct(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += NA.apply(void 0, this._value.splice(0, n)), e -= n;
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
        if (n === Co) return this._value.splice(0, r), Ay;
        if (n === Nr) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === Co ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ct(n, o) && (t += this.consumeStringSlice(r), t += NA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = dn, r = this.peekCodePoint(0);
      for ((r === Tt || r === de) && e.push(this.consumeCodePoint()); se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === qr && se(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ac; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Ed || r === Fd) && ((n === Tt || n === de) && se(o) || se(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ac; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        Nv(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (On(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === lv ? (this.consumeCodePoint(), {
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
        for (var t = NA(e); Wt(this.peekCodePoint(0)) && t.length < 6; ) t += NA(this.consumeCodePoint());
        Kn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Kv(r) || r > 1114111 ? cc : r;
      }
      return e === Ke ? cc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (uc(t)) e += NA(t);
        else if (ct(t, this.peekCodePoint(0))) e += NA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Id = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new xd();
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
        if (r.type === 32 || ly(r, e)) return t;
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
      return typeof e > "u" ? Ma : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), fn = function(A) {
    return A.type === 15;
  }, hr = function(A) {
    return A.type === 17;
  }, yA = function(A) {
    return A.type === 20;
  }, sy = function(A) {
    return A.type === 0;
  }, Pa = function(A, e) {
    return yA(A) && A.value === e;
  }, Hd = function(A) {
    return A.type !== 31;
  }, dr = function(A) {
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
  }, ly = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, wt = function(A) {
    return A.type === 17 || A.type === 15;
  }, $A = function(A) {
    return A.type === 16 || wt(A);
  }, Td = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, ne = {
    type: 17,
    number: 0,
    flags: dn
  }, _s = {
    type: 16,
    number: 50,
    flags: dn
  }, dt = {
    type: 16,
    number: 100,
    flags: dn
  }, Kr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      EA(r, e),
      EA(typeof n < "u" ? n : r, t)
    ];
  }, EA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (fn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Ld = "deg", kd = "grad", Rd = "rad", Kd = "turn", Bi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Ld:
          return Math.PI * e.number / 180;
        case kd:
          return Math.PI / 200 * e.number;
        case Rd:
          return e.number;
        case Kd:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Od = function(A) {
    return A.type === 15 && (A.unit === Ld || A.unit === kd || A.unit === Rd || A.unit === Kd);
  }, Dd = function(A) {
    var e = A.filter(yA).map(function(t) {
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
        var t = cy[e.name];
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
  }, dc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, fc = function(A, e) {
    var t = e.filter(dr);
    if (t.length === 3) {
      var r = t.map(dc), n = r[0], o = r[1], i = r[2];
      return ft(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(dc), n = a[0], o = a[1], i = a[2], s = a[3];
      return ft(n, o, i, s);
    }
    return 0;
  };
  function Ni(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var gc = function(A, e) {
    var t = e.filter(dr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? be(r.number) : Bi.parse(A, r)) / (Math.PI * 2), s = $A(n) ? n.number / 100 : 0, l = $A(o) ? o.number / 100 : 0, c = typeof i < "u" && $A(i) ? EA(i, 1) : 1;
    if (s === 0) return ft(l * 255, l * 255, l * 255, 1);
    var d = l <= 0.5 ? l * (s + 1) : l + s - l * s, u = l * 2 - d, f = Ni(u, d, a + 1 / 3), p = Ni(u, d, a), h = Ni(u, d, a - 1 / 3);
    return ft(f * 255, p * 255, h * 255, c);
  }, cy = {
    hsl: gc,
    hsla: gc,
    rgb: fc,
    rgba: fc
  }, Gr = function(A, e) {
    return pt.parse(A, Id.create(e).parseComponentValue());
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
  }, uy = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (yA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, dy = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, hi = function(A, e) {
    var t = pt.parse(A, e[0]), r = e[1];
    return r && $A(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, pc = function(A, e) {
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
        for (var d = i - l, u = n[l - 1], f = (c - u) / (d + 1), p = 1; p <= d; p++) n[l + p - 1] = f * p;
        l = null;
      }
    }
    return A.map(function(h, Q) {
      var m = h.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[Q] / e), 0)
      };
    });
  }, fy = function(A, e, t) {
    var r = e / 2, n = t / 2, o = EA(A[0], e) - r, i = n - EA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, gy = function(A, e, t) {
    var r = typeof A == "number" ? A : fy(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, xe = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, Bc = function(A, e, t, r, n) {
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
  }, py = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(xe(e, t), xe(e, t - n), xe(e - r, t), xe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = Bc(r, n, e, t, true), l = s[0], c = s[1];
          o = xe(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(xe(e, t), xe(e, t - n), xe(e - r, t), xe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), d = Bc(r, n, e, t, false), l = d[0], c = d[1];
          o = xe(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = EA(A.size[0], r), i = A.size.length === 2 ? EA(A.size[1], n) : o), [
      o,
      i
    ];
  }, By = function(A, e) {
    var t = be(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Dd(n);
          return;
        } else if (Od(i)) {
          t = Bi.parse(A, i);
          return;
        }
      }
      var a = hi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Mn = function(A, e) {
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
          t = Dd(n);
          return;
        } else if (Od(i)) {
          t = (Bi.parse(A, i) + be(270)) % be(360);
          return;
        }
      }
      var a = hi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, hy = function(A, e) {
    var t = be(180), r = [], n = 1, o = 0, i = 3, a = [];
    return Xe(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (yA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (yA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var d = pt.parse(A, c.values[0]);
          r.push({
            stop: ne,
            color: d
          });
        } else if (c.name === "to") {
          var d = pt.parse(A, c.values[0]);
          r.push({
            stop: dt,
            color: d
          });
        } else if (c.name === "color-stop") {
          var u = c.values.filter(dr);
          if (u.length === 2) {
            var d = pt.parse(A, u[1]), f = u[0];
            hr(f) && r.push({
              stop: {
                type: 16,
                number: f.number * 100,
                flags: f.flags
              },
              color: d
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
  }, Md = "closest-side", Pd = "farthest-side", _d = "closest-corner", Nd = "farthest-corner", Gd = "circle", Vd = "ellipse", $d = "cover", Wd = "contain", Cy = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(d, u) {
          if (l) if (yA(u)) switch (u.value) {
            case "center":
              return o.push(_s), d;
            case "top":
            case "left":
              return o.push(ne), d;
            case "right":
            case "bottom":
              return o.push(dt), d;
          }
          else ($A(u) || wt(u)) && o.push(u);
          else if (yA(u)) switch (u.value) {
            case Gd:
              return t = 0, false;
            case Vd:
              return t = 1, false;
            case "at":
              return l = true, false;
            case Md:
              return r = 0, false;
            case $d:
            case Pd:
              return r = 1, false;
            case Wd:
            case _d:
              return r = 2, false;
            case Nd:
              return r = 3, false;
          }
          else if (wt(u) || $A(u)) return Array.isArray(r) || (r = []), r.push(u), false;
          return d;
        }, s);
      }
      if (s) {
        var c = hi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Pn = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, d) {
        if (yA(d)) switch (d.value) {
          case "center":
            return o.push(_s), false;
          case "top":
          case "left":
            return o.push(ne), false;
          case "right":
          case "bottom":
            return o.push(dt), false;
        }
        else if ($A(d) || wt(d)) return o.push(d), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, d) {
        if (yA(d)) switch (d.value) {
          case Gd:
            return t = 0, false;
          case Vd:
            return t = 1, false;
          case Wd:
          case Md:
            return r = 0, false;
          case Pd:
            return r = 1, false;
          case _d:
            return r = 2, false;
          case $d:
          case Nd:
            return r = 3, false;
        }
        else if (wt(d) || $A(d)) return Array.isArray(r) || (r = []), r.push(d), false;
        return c;
      }, s)), s) {
        var l = hi(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, my = function(A) {
    return A.type === 1;
  }, wy = function(A) {
    return A.type === 2;
  }, Ns = {
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
        var r = Xd[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function vy(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Xd[A.name]);
  }
  var Xd = {
    "linear-gradient": By,
    "-moz-linear-gradient": Mn,
    "-ms-linear-gradient": Mn,
    "-o-linear-gradient": Mn,
    "-webkit-linear-gradient": Mn,
    "radial-gradient": Cy,
    "-moz-radial-gradient": Pn,
    "-ms-radial-gradient": Pn,
    "-o-radial-gradient": Pn,
    "-webkit-radial-gradient": Pn,
    "-webkit-gradient": hy
  }, yy = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return dr(r) && vy(r);
      }).map(function(r) {
        return Ns.parse(A, r);
      });
    }
  }, Qy = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (yA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, by = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter($A);
      }).map(Td);
    }
  }, Fy = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(yA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(Uy);
    }
  }, Uy = function(A) {
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
  }, ir;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(ir || (ir = {}));
  var Ey = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(Sy);
      });
    }
  }, Sy = function(A) {
    return yA(A) || $A(A);
  }, Ci = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, xy = Ci("top"), Iy = Ci("right"), Hy = Ci("bottom"), Ty = Ci("left"), mi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return Td(t.filter($A));
      }
    };
  }, Ly = mi("top-left"), ky = mi("top-right"), Ry = mi("bottom-right"), Ky = mi("bottom-left"), wi = function(A) {
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
  }, Oy = wi("top"), Dy = wi("right"), My = wi("bottom"), Py = wi("left"), vi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return fn(t) ? t.number : 0;
      }
    };
  }, _y = vi("top"), Ny = vi("right"), Gy = vi("bottom"), Vy = vi("left"), $y = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Wy = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, Xy = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(yA).reduce(function(t, r) {
        return t | jy(r.value);
      }, 0);
    }
  }, jy = function(A) {
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
  }, zy = {
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
  }, Jy = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, wo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(wo || (wo = {}));
  var Yy = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? wo.STRICT : wo.NORMAL;
    }
  }, Zy = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, hc = function(A, e) {
    return yA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : $A(A) ? EA(A, e) : e;
  }, qy = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Ns.parse(A, e);
    }
  }, AQ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, _a = {
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
  }, yi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, eQ = yi("top"), tQ = yi("right"), rQ = yi("bottom"), nQ = yi("left"), oQ = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(yA).map(function(t) {
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
  }, iQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, Qi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, aQ = Qi("top"), sQ = Qi("right"), lQ = Qi("bottom"), cQ = Qi("left"), uQ = {
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
  }, dQ = {
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
  }, fQ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Pa(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: qe.TRANSPARENT,
          offsetX: ne,
          offsetY: ne,
          blur: ne
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          wt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, gQ = {
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
  }, pQ = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = CQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, BQ = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, hQ = function(A) {
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
  }, CQ = {
    matrix: BQ,
    matrix3d: hQ
  }, Cc = {
    type: 16,
    number: 50,
    flags: dn
  }, mQ = [
    Cc,
    Cc
  ], wQ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter($A);
      return t.length !== 2 ? mQ : [
        t[0],
        t[1]
      ];
    }
  }, vQ = {
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
  }, Vr;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(Vr || (Vr = {}));
  var yQ = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return Vr.BREAK_ALL;
        case "keep-all":
          return Vr.KEEP_ALL;
        default:
          return Vr.NORMAL;
      }
    }
  }, QQ = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (hr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, jd = {
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
  }, bQ = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return hr(e) ? e.number : 1;
    }
  }, FQ = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, UQ = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(yA).map(function(t) {
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
  }, EQ = {
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
  }, SQ = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, xQ = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return hr(e) ? e.number : yA(e) && e.value === "bold" ? 700 : 400;
    }
  }, IQ = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(yA).map(function(t) {
        return t.value;
      });
    }
  }, HQ = {
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
  }, TQ = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, LQ = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Hd), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && hr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, kQ = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Hd), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (yA(o) && o.value !== "none") {
          var a = i && hr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, RQ = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(fn).map(function(t) {
        return jd.parse(A, t);
      });
    }
  }, KQ = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(sy);
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
  }, mc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, OQ = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Pa(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: ne,
          offsetY: ne,
          blur: ne,
          spread: ne,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Pa(i, "inset") ? r.inset = true : wt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, DQ = {
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
      return e.filter(yA).forEach(function(n) {
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
  }, MQ = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, PQ = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return fn(e) ? e.number : 0;
    }
  }, _Q = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = Z(e, RQ, t.animationDuration), this.backgroundClip = Z(e, uy, t.backgroundClip), this.backgroundColor = Z(e, dy, t.backgroundColor), this.backgroundImage = Z(e, yy, t.backgroundImage), this.backgroundOrigin = Z(e, Qy, t.backgroundOrigin), this.backgroundPosition = Z(e, by, t.backgroundPosition), this.backgroundRepeat = Z(e, Fy, t.backgroundRepeat), this.backgroundSize = Z(e, Ey, t.backgroundSize), this.borderTopColor = Z(e, xy, t.borderTopColor), this.borderRightColor = Z(e, Iy, t.borderRightColor), this.borderBottomColor = Z(e, Hy, t.borderBottomColor), this.borderLeftColor = Z(e, Ty, t.borderLeftColor), this.borderTopLeftRadius = Z(e, Ly, t.borderTopLeftRadius), this.borderTopRightRadius = Z(e, ky, t.borderTopRightRadius), this.borderBottomRightRadius = Z(e, Ry, t.borderBottomRightRadius), this.borderBottomLeftRadius = Z(e, Ky, t.borderBottomLeftRadius), this.borderTopStyle = Z(e, Oy, t.borderTopStyle), this.borderRightStyle = Z(e, Dy, t.borderRightStyle), this.borderBottomStyle = Z(e, My, t.borderBottomStyle), this.borderLeftStyle = Z(e, Py, t.borderLeftStyle), this.borderTopWidth = Z(e, _y, t.borderTopWidth), this.borderRightWidth = Z(e, Ny, t.borderRightWidth), this.borderBottomWidth = Z(e, Gy, t.borderBottomWidth), this.borderLeftWidth = Z(e, Vy, t.borderLeftWidth), this.boxShadow = Z(e, OQ, t.boxShadow), this.color = Z(e, $y, t.color), this.direction = Z(e, Wy, t.direction), this.display = Z(e, Xy, t.display), this.float = Z(e, zy, t.cssFloat), this.fontFamily = Z(e, EQ, t.fontFamily), this.fontSize = Z(e, SQ, t.fontSize), this.fontStyle = Z(e, HQ, t.fontStyle), this.fontVariant = Z(e, IQ, t.fontVariant), this.fontWeight = Z(e, xQ, t.fontWeight), this.letterSpacing = Z(e, Jy, t.letterSpacing), this.lineBreak = Z(e, Yy, t.lineBreak), this.lineHeight = Z(e, Zy, t.lineHeight), this.listStyleImage = Z(e, qy, t.listStyleImage), this.listStylePosition = Z(e, AQ, t.listStylePosition), this.listStyleType = Z(e, _a, t.listStyleType), this.marginTop = Z(e, eQ, t.marginTop), this.marginRight = Z(e, tQ, t.marginRight), this.marginBottom = Z(e, rQ, t.marginBottom), this.marginLeft = Z(e, nQ, t.marginLeft), this.opacity = Z(e, bQ, t.opacity);
      var o = Z(e, oQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = Z(e, iQ, t.overflowWrap), this.paddingTop = Z(e, aQ, t.paddingTop), this.paddingRight = Z(e, sQ, t.paddingRight), this.paddingBottom = Z(e, lQ, t.paddingBottom), this.paddingLeft = Z(e, cQ, t.paddingLeft), this.paintOrder = Z(e, DQ, t.paintOrder), this.position = Z(e, dQ, t.position), this.textAlign = Z(e, uQ, t.textAlign), this.textDecorationColor = Z(e, FQ, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = Z(e, UQ, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = Z(e, fQ, t.textShadow), this.textTransform = Z(e, gQ, t.textTransform), this.transform = Z(e, pQ, t.transform), this.transformOrigin = Z(e, wQ, t.transformOrigin), this.visibility = Z(e, vQ, t.visibility), this.webkitTextStrokeColor = Z(e, MQ, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Z(e, PQ, t.webkitTextStrokeWidth), this.wordBreak = Z(e, yQ, t.wordBreak), this.zIndex = Z(e, QQ, t.zIndex);
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
  })(), NQ = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = Z(e, TQ, t.content), this.quotes = Z(e, KQ, t.quotes);
    }
    return A;
  })(), wc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = Z(e, LQ, t.counterIncrement), this.counterReset = Z(e, kQ, t.counterReset);
    }
    return A;
  })(), Z = function(A, e, t) {
    var r = new xd(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Id(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, yA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return Bi.parse(A, o.parseComponentValue());
          case "color":
            return pt.parse(A, o.parseComponentValue());
          case "image":
            return Ns.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return wt(a) ? a : ne;
          case "length-percentage":
            var s = o.parseComponentValue();
            return $A(s) ? s : ne;
          case "time":
            return jd.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, GQ = "data-html2canvas-debug", VQ = function(A) {
    var e = A.getAttribute(GQ);
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
  }, Na = function(A, e) {
    var t = VQ(A);
    return t === 1 || e === t;
  }, je = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Na(t, 3)) debugger;
      this.styles = new _Q(e, window.getComputedStyle(t, null)), $a(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = gi(this.context, t), Na(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), $Q = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", vc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var _n = 0; _n < vc.length; _n++) Or[vc.charCodeAt(_n)] = _n;
  var WQ = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Or[A.charCodeAt(r)], i = Or[A.charCodeAt(r + 1)], a = Or[A.charCodeAt(r + 2)], s = Or[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, XQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, jQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Rt = 5, Gs = 11, Gi = 2, zQ = Gs - Rt, zd = 65536 >> Rt, JQ = 1 << Rt, Vi = JQ - 1, YQ = 1024 >> Rt, ZQ = zd + YQ, qQ = ZQ, Ab = 32, eb = qQ + Ab, tb = 65536 >> Gs, rb = 1 << zQ, nb = rb - 1, yc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, ob = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, ib = function(A, e) {
    var t = WQ(A), r = Array.isArray(t) ? jQ(t) : new Uint32Array(t), n = Array.isArray(t) ? XQ(t) : new Uint16Array(t), o = 24, i = yc(n, o / 2, r[4] / 2), a = r[5] === 2 ? yc(n, (o + r[4]) / 2) : ob(r, Math.ceil((o + r[4]) / 4));
    return new ab(r[0], r[1], r[2], r[3], i, a);
  }, ab = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Rt], t = (t << Gi) + (e & Vi), this.data[t];
        if (e <= 65535) return t = this.index[zd + (e - 55296 >> Rt)], t = (t << Gi) + (e & Vi), this.data[t];
        if (e < this.highStart) return t = eb - tb + (e >> Gs), t = this.index[t], t += e >> Rt & nb, t = this.index[t], t = (t << Gi) + (e & Vi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Qc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Nn = 0; Nn < Qc.length; Nn++) sb[Qc.charCodeAt(Nn)] = Nn;
  var lb = 1, $i = 2, Wi = 3, bc = 4, Fc = 5, cb = 7, Uc = 8, Xi = 9, ji = 10, Ec = 11, Sc = 12, xc = 13, Ic = 14, zi = 15, ub = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, db = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, fb = ib($Q), we = "\xD7", Ji = "\xF7", gb = function(A) {
    return fb.get(A);
  }, pb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === $i && i === Wi) return we;
    if (o === $i || o === Wi || o === bc || i === $i || i === Wi || i === bc) return Ji;
    if (o === Uc && [
      Uc,
      Xi,
      Ec,
      Sc
    ].indexOf(i) !== -1 || (o === Ec || o === Xi) && (i === Xi || i === ji) || (o === Sc || o === ji) && i === ji || i === xc || i === Fc || i === cb || o === lb) return we;
    if (o === xc && i === Ic) {
      for (; n === Fc; ) n = e[--r];
      if (n === Ic) return we;
    }
    if (o === zi && i === zi) {
      for (var a = 0; n === zi; ) a++, n = e[--r];
      if (a % 2 === 0) return we;
    }
    return Ji;
  }, Bb = function(A) {
    var e = ub(A), t = e.length, r = 0, n = 0, o = e.map(gb);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = we; r < t && (i = pb(e, o, ++r)) === we; ) ;
        if (i !== we || r === t) {
          var a = db.apply(null, e.slice(n, r));
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
  }, hb = function(A) {
    for (var e = Bb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, Cb = function(A) {
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
  }, mb = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = pi(r.data).map(function(s) {
      return NA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var d = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : d;
    });
    return A.body.removeChild(e), a;
  }, wb = function() {
    return typeof new Image().crossOrigin < "u";
  }, vb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, yb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Hc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, Qb = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Ga(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Tc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", Hc(s) ? Tc(Ga(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Hc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Ga = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Tc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, ee = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = Cb(document);
      return Object.defineProperty(ee, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ee.SUPPORT_RANGE_BOUNDS && mb(document);
      return Object.defineProperty(ee, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = yb(document);
      return Object.defineProperty(ee, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Qb(document) : Promise.resolve(false);
      return Object.defineProperty(ee, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = wb();
      return Object.defineProperty(ee, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = vb();
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
  }, $r = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), bb = function(A, e, t, r) {
    var n = Eb(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ee.SUPPORT_RANGE_BOUNDS) {
        var s = Lc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Vs(a), c = 0;
          l.forEach(function(u) {
            o.push(new $r(u, nt.fromDOMRectList(A, Lc(r, c + i, u.length).getClientRects()))), c += u.length;
          });
        } else o.push(new $r(a, nt.fromDOMRectList(A, s)));
      } else {
        var d = r.splitText(a.length);
        o.push(new $r(a, Fb(A, r))), r = d;
      }
      else ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, Fb = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = gi(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return nt.EMPTY;
  }, Lc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Vs = function(A) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return hb(A);
  }, Ub = function(A, e) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return xb(A, e);
  }, Eb = function(A, e) {
    return e.letterSpacing !== 0 ? Vs(A) : Ub(A, e);
  }, Sb = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], xb = function(A, e) {
    for (var t = tv(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = pi(i), s = "";
        a.forEach(function(l) {
          Sb.indexOf(l) === -1 ? s += NA(l) : (s.length && r.push(s), r.push(NA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Ib = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = Hb(t.data, r.textTransform), this.textBounds = bb(e, this.text, r, t);
    }
    return A;
  })(), Hb = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(Tb, Lb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, Tb = /(^|\s|:|-|\(|\))([a-z])/g, Lb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, Jd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(je), Yd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(je), Zd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = gi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(je), qd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), Va = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(je), kb = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Rb = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], Kb = function(A) {
    return A.width > A.height ? new nt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new nt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Ob = function(A) {
    var e = A.type === Db ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, vo = "checkbox", yo = "radio", Db = "password", kc = 707406591, $s = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Ob(r), (n.type === vo || n.type === yo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = Kb(n.bounds)), n.type) {
        case vo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = kb;
          break;
        case yo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Rb;
          break;
      }
      return n;
    }
    return e;
  })(je), Af = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(je), ef = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), tf = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = nf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Gr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : qe.TRANSPARENT, i = r.contentWindow.document.body ? Gr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : qe.TRANSPARENT;
          n.backgroundColor = Bt(o) ? Bt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(je), Mb = [
    "OL",
    "UL",
    "MENU"
  ], no = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, of(n) && n.data.trim().length > 0) t.textNodes.push(new Ib(A, n, t.styles));
    else if (rr(n)) if (cf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return no(A, a, t, r);
    });
    else {
      var i = rf(A, n);
      i.styles.isVisible() && (Pb(n, i, r) ? i.flags |= 4 : _b(i.styles) && (i.flags |= 2), Mb.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? no(A, n.shadowRoot, i, r) : !Qo(n) && !af(n) && !bo(n) && no(A, n, i, r));
    }
  }, rf = function(A, e) {
    return Wa(e) ? new Jd(A, e) : sf(e) ? new Yd(A, e) : af(e) ? new Zd(A, e) : Nb(e) ? new qd(A, e) : Gb(e) ? new Va(A, e) : Vb(e) ? new $s(A, e) : bo(e) ? new Af(A, e) : Qo(e) ? new ef(A, e) : lf(e) ? new tf(A, e) : new je(A, e);
  }, nf = function(A, e) {
    var t = rf(A, e);
    return t.flags |= 4, no(A, e, t, t), t;
  }, Pb = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Ws(A) && t.styles.isTransparent();
  }, _b = function(A) {
    return A.isPositioned() || A.isFloating();
  }, of = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, rr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, $a = function(A) {
    return rr(A) && typeof A.style < "u" && !oo(A);
  }, oo = function(A) {
    return typeof A.className == "object";
  }, Nb = function(A) {
    return A.tagName === "LI";
  }, Gb = function(A) {
    return A.tagName === "OL";
  }, Vb = function(A) {
    return A.tagName === "INPUT";
  }, $b = function(A) {
    return A.tagName === "HTML";
  }, af = function(A) {
    return A.tagName === "svg";
  }, Ws = function(A) {
    return A.tagName === "BODY";
  }, sf = function(A) {
    return A.tagName === "CANVAS";
  }, Rc = function(A) {
    return A.tagName === "VIDEO";
  }, Wa = function(A) {
    return A.tagName === "IMG";
  }, lf = function(A) {
    return A.tagName === "IFRAME";
  }, Kc = function(A) {
    return A.tagName === "STYLE";
  }, Wb = function(A) {
    return A.tagName === "SCRIPT";
  }, Qo = function(A) {
    return A.tagName === "TEXTAREA";
  }, bo = function(A) {
    return A.tagName === "SELECT";
  }, cf = function(A) {
    return A.tagName === "SLOT";
  }, Oc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, Xb = (function() {
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
  })(), Dc = {
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
  }, Mc = {
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
  }, jb = {
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
  }, zb = {
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
    return A < e || A > t ? An(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, uf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, _A = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (uf(Math.abs(A), o, r, function(i) {
      return NA(Math.floor(i % o) + e);
    }) + n);
  }, Qt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return uf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, qt = 1, at = 2, st = 4, Dr = 8, Ze = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return An(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && XA(o, qt) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && XA(o, at) || l === 1 && s === 1 && XA(o, st) && A > 100 || l === 1 && s > 1 && XA(o, Dr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Pc = "\u5341\u767E\u5343\u842C", _c = "\u62FE\u4F70\u4EDF\u842C", Nc = "\u30DE\u30A4\u30CA\u30B9", Yi = "\uB9C8\uC774\uB108\uC2A4", An = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = _A(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return Qt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return Xt(A, 1, 3999, Dc, 3, r).toLowerCase();
      case 7:
        return Xt(A, 1, 3999, Dc, 3, r);
      case 8:
        return _A(A, 945, 969, false, r);
      case 9:
        return _A(A, 97, 122, false, r);
      case 10:
        return _A(A, 65, 90, false, r);
      case 11:
        return _A(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return Xt(A, 1, 9999, Mc, 3, r);
      case 35:
        return Xt(A, 1, 9999, Mc, 3, r).toLowerCase();
      case 13:
        return _A(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return _A(A, 6112, 6121, true, r);
      case 15:
        return Qt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return Qt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Pc, "\u8CA0", n, at | st | Dr);
      case 47:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", _c, "\u8CA0", n, qt | at | st | Dr);
      case 42:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Pc, "\u8D1F", n, at | st | Dr);
      case 41:
        return Ze(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", _c, "\u8D1F", n, qt | at | st | Dr);
      case 26:
        return Ze(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Nc, n, 0);
      case 25:
        return Ze(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Nc, n, qt | at | st);
      case 31:
        return Ze(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", Yi, o, qt | at | st);
      case 33:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", Yi, o, 0);
      case 32:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", Yi, o, qt | at | st);
      case 18:
        return _A(A, 2406, 2415, true, r);
      case 20:
        return Xt(A, 1, 19999, zb, 3, r);
      case 21:
        return _A(A, 2790, 2799, true, r);
      case 22:
        return _A(A, 2662, 2671, true, r);
      case 22:
        return Xt(A, 1, 10999, jb, 3, r);
      case 23:
        return Qt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return Qt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return _A(A, 3302, 3311, true, r);
      case 28:
        return Qt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return Qt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return _A(A, 3792, 3801, true, r);
      case 37:
        return _A(A, 6160, 6169, true, r);
      case 38:
        return _A(A, 4160, 4169, true, r);
      case 39:
        return _A(A, 2918, 2927, true, r);
      case 40:
        return _A(A, 1776, 1785, true, r);
      case 43:
        return _A(A, 3046, 3055, true, r);
      case 44:
        return _A(A, 3174, 3183, true, r);
      case 45:
        return _A(A, 3664, 3673, true, r);
      case 46:
        return _A(A, 3872, 3881, true, r);
      default:
        return _A(A, 48, 57, true, r);
    }
  }, df = "data-html2canvas-ignore", Gc = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Xb(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = Jb(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = qb(n).then(function() {
        return ue(r, void 0, void 0, function() {
          var c, d;
          return ae(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(rF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, d = this.clonedReferenceElement, typeof d > "u" ? [
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
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [
                  4,
                  Zb(s)
                ] : [
                  3,
                  4
                ];
              case 3:
                u.sent(), u.label = 4;
              case 4:
                return typeof c == "function" ? [
                  2,
                  Promise.resolve().then(function() {
                    return c(s, d);
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
      return s.open(), s.write(eF(document.doctype) + "<html></html>"), tF(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Na(e, 2)) debugger;
      if (sf(e)) return this.createCanvasClone(e);
      if (Rc(e)) return this.createVideoClone(e);
      if (Kc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return Wa(t) && (Wa(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Oc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Zi(e.style, t), t;
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
      (!rr(t) || !Wb(t) && !t.hasAttribute(df) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !rr(t) || !Kc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (rr(o) && cf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (of(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && rr(e) && ($a(e) || oo(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && $a(n) && (this.clonedReferenceElement = n), Ws(n) && iF(n);
        var s = this.counters.parse(new wc(this.context, o)), l = this.resolvePseudoContent(e, n, i, Wr.BEFORE);
        Oc(e) && (t = true), Rc(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, Wr.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || oo(e)) && !lf(e) || t) && Zi(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Qo(e) || bo(e)) && (Qo(n) || bo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new wc(this.context, r));
          var s = new NQ(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Zi(r, l), s.content.forEach(function(d) {
            if (d.type === 0) l.appendChild(a.createTextNode(d.value));
            else if (d.type === 22) {
              var u = a.createElement("img");
              u.src = d.value, u.style.opacity = "1", l.appendChild(u);
            } else if (d.type === 18) {
              if (d.name === "attr") {
                var f = d.values.filter(yA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (d.name === "counter") {
                var p = d.values.filter(dr), h = p[0], Q = p[1];
                if (h && yA(h)) {
                  var m = o.counters.getCounterValue(h.value), b = Q && yA(Q) ? _a.parse(o.context, Q.value) : 3;
                  l.appendChild(a.createTextNode(An(m, b, false)));
                }
              } else if (d.name === "counters") {
                var w = d.values.filter(dr), h = w[0], v = w[1], Q = w[2];
                if (h && yA(h)) {
                  var U = o.counters.getCounterValues(h.value), C = Q && yA(Q) ? _a.parse(o.context, Q.value) : 3, S = v && v.type === 0 ? v.value : "", I = U.map(function(x) {
                    return An(x, C, false);
                  }).join(S);
                  l.appendChild(a.createTextNode(I));
                }
              }
            } else if (d.type === 20) switch (d.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(mc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(mc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(d.value));
            }
          }), l.className = Xa + " " + ja;
          var c = n === Wr.BEFORE ? " " + Xa : " " + ja;
          return oo(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), Wr;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(Wr || (Wr = {}));
  var Jb = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(df, "true"), A.body.appendChild(t), t;
  }, Yb = function(A) {
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
  }, Zb = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(Yb));
  }, qb = function(A) {
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
  }, AF = [
    "all",
    "d",
    "content"
  ], Zi = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      AF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, eF = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, tF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, rF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, nF = ":before", oF = ":after", Xa = "___html2canvas___pseudoelement_before", ja = "___html2canvas___pseudoelement_after", Vc = `{
    content: "" !important;
    display: none !important;
}`, iF = function(A) {
    aF(A, "." + Xa + nF + Vc + `
         .` + ja + oF + Vc);
  }, aF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, ff = (function() {
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
  })(), sF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Aa(e) || dF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return ue(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return ae(this, function(a) {
          switch (a.label) {
            case 0:
              return t = ff.isSameOrigin(e), r = !qi(e) && this._options.useCORS === true && ee.SUPPORT_CORS_IMAGES && !t, n = !qi(e) && !t && !Aa(e) && typeof this._options.proxy == "string" && ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !qi(e) && !Aa(e) && !n && !r ? [
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
                  }, c.onerror = l, (fF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
            var d = new FileReader();
            d.addEventListener("load", function() {
              return o(d.result);
            }, false), d.addEventListener("error", function(u) {
              return i(u);
            }, false), d.readAsDataURL(s.response);
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
  })(), lF = /^data:image\/svg\+xml/i, cF = /^data:image\/.*;base64,/i, uF = /^data:image\/.*/i, dF = function(A) {
    return ee.SUPPORT_SVG_DRAWING || !gF(A);
  }, qi = function(A) {
    return uF.test(A);
  }, fF = function(A) {
    return cF.test(A);
  }, Aa = function(A) {
    return A.substr(0, 4) === "blob";
  }, gF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || lF.test(A);
  }, Y = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), jt = function(A, e, t) {
    return new Y(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, Gn = (function() {
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
  })(), Qe = function(A) {
    return A.type === 1;
  }, pF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Kr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Kr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = Kr(t.borderBottomRightRadius, r.width, r.height), d = c[0], u = c[1], f = Kr(t.borderBottomLeftRadius, r.width, r.height), p = f[0], h = f[1], Q = [];
      Q.push((o + s) / r.width), Q.push((p + d) / r.width), Q.push((i + h) / r.height), Q.push((l + u) / r.height);
      var m = Math.max.apply(Math, Q);
      m > 1 && (o /= m, i /= m, s /= m, l /= m, d /= m, u /= m, p /= m, h /= m);
      var b = r.width - s, w = r.height - u, v = r.width - d, U = r.height - h, C = t.borderTopWidth, S = t.borderRightWidth, I = t.borderBottomWidth, H = t.borderLeftWidth, g = EA(t.paddingTop, e.bounds.width), x = EA(t.paddingRight, e.bounds.width), k = EA(t.paddingBottom, e.bounds.width), K = EA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + H / 3, r.top + C / 3, o - H / 3, i - C / 3, wA.TOP_LEFT) : new Y(r.left + H / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + b, r.top + C / 3, s - S / 3, l - C / 3, wA.TOP_RIGHT) : new Y(r.left + r.width - S / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = d > 0 || u > 0 ? LA(r.left + v, r.top + w, d - S / 3, u - I / 3, wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S / 3, r.top + r.height - I / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || h > 0 ? LA(r.left + H / 3, r.top + U, p - H / 3, h - I / 3, wA.BOTTOM_LEFT) : new Y(r.left + H / 3, r.top + r.height - I / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + H * 2 / 3, r.top + C * 2 / 3, o - H * 2 / 3, i - C * 2 / 3, wA.TOP_LEFT) : new Y(r.left + H * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + b, r.top + C * 2 / 3, s - S * 2 / 3, l - C * 2 / 3, wA.TOP_RIGHT) : new Y(r.left + r.width - S * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = d > 0 || u > 0 ? LA(r.left + v, r.top + w, d - S * 2 / 3, u - I * 2 / 3, wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S * 2 / 3, r.top + r.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || h > 0 ? LA(r.left + H * 2 / 3, r.top + U, p - H * 2 / 3, h - I * 2 / 3, wA.BOTTOM_LEFT) : new Y(r.left + H * 2 / 3, r.top + r.height - I * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? LA(r.left + H / 2, r.top + C / 2, o - H / 2, i - C / 2, wA.TOP_LEFT) : new Y(r.left + H / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? LA(r.left + b, r.top + C / 2, s - S / 2, l - C / 2, wA.TOP_RIGHT) : new Y(r.left + r.width - S / 2, r.top + C / 2), this.bottomRightBorderStroke = d > 0 || u > 0 ? LA(r.left + v, r.top + w, d - S / 2, u - I / 2, wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S / 2, r.top + r.height - I / 2), this.bottomLeftBorderStroke = p > 0 || h > 0 ? LA(r.left + H / 2, r.top + U, p - H / 2, h - I / 2, wA.BOTTOM_LEFT) : new Y(r.left + H / 2, r.top + r.height - I / 2), this.topLeftBorderBox = o > 0 || i > 0 ? LA(r.left, r.top, o, i, wA.TOP_LEFT) : new Y(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? LA(r.left + b, r.top, s, l, wA.TOP_RIGHT) : new Y(r.left + r.width, r.top), this.bottomRightBorderBox = d > 0 || u > 0 ? LA(r.left + v, r.top + w, d, u, wA.BOTTOM_RIGHT) : new Y(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || h > 0 ? LA(r.left, r.top + U, p, h, wA.BOTTOM_LEFT) : new Y(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? LA(r.left + H, r.top + C, Math.max(0, o - H), Math.max(0, i - C), wA.TOP_LEFT) : new Y(r.left + H, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? LA(r.left + Math.min(b, r.width - S), r.top + C, b > r.width + S ? 0 : Math.max(0, s - S), Math.max(0, l - C), wA.TOP_RIGHT) : new Y(r.left + r.width - S, r.top + C), this.bottomRightPaddingBox = d > 0 || u > 0 ? LA(r.left + Math.min(v, r.width - H), r.top + Math.min(w, r.height - I), Math.max(0, d - S), Math.max(0, u - I), wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S, r.top + r.height - I), this.bottomLeftPaddingBox = p > 0 || h > 0 ? LA(r.left + H, r.top + Math.min(U, r.height - I), Math.max(0, p - H), Math.max(0, h - I), wA.BOTTOM_LEFT) : new Y(r.left + H, r.top + r.height - I), this.topLeftContentBox = o > 0 || i > 0 ? LA(r.left + H + K, r.top + C + g, Math.max(0, o - (H + K)), Math.max(0, i - (C + g)), wA.TOP_LEFT) : new Y(r.left + H + K, r.top + C + g), this.topRightContentBox = s > 0 || l > 0 ? LA(r.left + Math.min(b, r.width + H + K), r.top + C + g, b > r.width + H + K ? 0 : s - H + K, l - (C + g), wA.TOP_RIGHT) : new Y(r.left + r.width - (S + x), r.top + C + g), this.bottomRightContentBox = d > 0 || u > 0 ? LA(r.left + Math.min(v, r.width - (H + K)), r.top + Math.min(w, r.height + C + g), Math.max(0, d - (S + x)), u - (I + k), wA.BOTTOM_RIGHT) : new Y(r.left + r.width - (S + x), r.top + r.height - (I + k)), this.bottomLeftContentBox = p > 0 || h > 0 ? LA(r.left + H + K, r.top + U, Math.max(0, p - (H + K)), h - (I + k), wA.BOTTOM_LEFT) : new Y(r.left + H + K, r.top + r.height - (I + k));
    }
    return A;
  })(), wA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(wA || (wA = {}));
  var LA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case wA.TOP_LEFT:
        return new Gn(new Y(A, l), new Y(A, l - a), new Y(s - i, e), new Y(s, e));
      case wA.TOP_RIGHT:
        return new Gn(new Y(A, e), new Y(A + i, e), new Y(s, l - a), new Y(s, l));
      case wA.BOTTOM_RIGHT:
        return new Gn(new Y(s, e), new Y(s, e + a), new Y(A + i, l), new Y(A, l));
      case wA.BOTTOM_LEFT:
      default:
        return new Gn(new Y(s, l), new Y(s - i, l), new Y(A, e + a), new Y(A, e));
    }
  }, Fo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, BF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Uo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, hF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), Vn = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), CF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), mF = function(A) {
    return A.type === 0;
  }, gf = function(A) {
    return A.type === 1;
  }, wF = function(A) {
    return A.type === 2;
  }, $c = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, vF = function(A, e, t, r, n) {
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
  }, pf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), Bf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new pF(this.container), this.container.styles.opacity < 1 && this.effects.push(new CF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new hF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Fo(this.curves), a = Uo(this.curves);
        $c(i, a) ? this.effects.push(new Vn(i, 6)) : (this.effects.push(new Vn(i, 2)), this.effects.push(new Vn(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !gf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Fo(r.curves), a = Uo(r.curves);
            $c(i, a) || n.unshift(new Vn(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return XA(s.target, e);
      });
    }, A;
  })(), za = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = XA(n.flags, 4), i = XA(n.flags, 2), a = new Bf(n, A);
      XA(n.styles.display, 2048) && r.push(a);
      var s = XA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new pf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var d = n.styles.zIndex.order;
          if (d < 0) {
            var u = 0;
            l.negativeZIndex.some(function(p, h) {
              return d > p.element.container.styles.zIndex.order ? (u = h, false) : u > 0;
            }), l.negativeZIndex.splice(u, 0, c);
          } else if (d > 0) {
            var f = 0;
            l.positiveZIndex.some(function(p, h) {
              return d >= p.element.container.styles.zIndex.order ? (f = h + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        za(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), za(a, e, t, s);
      XA(n.flags, 8) && hf(n, s);
    });
  }, hf = function(A, e) {
    for (var t = A instanceof Va ? A.start : 1, r = A instanceof Va ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof qd && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = An(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, yF = function(A) {
    var e = new Bf(A, null), t = new pf(e), r = [];
    return za(e, t, t, r), hf(e.container, r), t;
  }, Wc = function(A, e) {
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
  }, QF = function(A, e) {
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
  }, bF = function(A, e) {
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
  }, FF = function(A, e) {
    switch (e) {
      case 0:
        return $n(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return $n(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return $n(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return $n(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, $n = function(A, e) {
    var t = [];
    return Qe(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Qe(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Fe = function(A, e, t, r) {
    var n = [];
    return Qe(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Qe(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Qe(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Qe(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Cf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Eo = function(A) {
    var e = A.styles, t = A.bounds, r = EA(e.paddingLeft, t.width), n = EA(e.paddingRight, t.width), o = EA(e.paddingTop, t.width), i = EA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, UF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Eo(e) : Cf(e);
  }, EF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Eo(e) : Cf(e);
  }, ea = function(A, e, t) {
    var r = UF(Ar(A.styles.backgroundOrigin, e), A), n = EF(Ar(A.styles.backgroundClip, e), A), o = SF(Ar(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = Kr(Ar(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = xF(Ar(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), d = Math.round(r.top + s[1]);
    return [
      l,
      c,
      d,
      i,
      a
    ];
  }, zt = function(A) {
    return yA(A) && A.value === ir.AUTO;
  }, Wn = function(A) {
    return typeof A == "number";
  }, SF = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if ($A(i) && a && $A(a)) return [
      EA(i, t.width),
      EA(a, t.height)
    ];
    var s = Wn(o);
    if (yA(i) && (i.value === ir.CONTAIN || i.value === ir.COVER)) {
      if (Wn(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === ir.COVER) ? [
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
    var c = Wn(r), d = Wn(n), u = c || d;
    if (zt(i) && (!a || zt(a))) {
      if (c && d) return [
        r,
        n
      ];
      if (!s && !u) return [
        t.width,
        t.height
      ];
      if (u && s) {
        var f = c ? r : n * o, p = d ? n : r / o;
        return [
          f,
          p
        ];
      }
      var h = c ? r : t.width, Q = d ? n : t.height;
      return [
        h,
        Q
      ];
    }
    if (s) {
      var m = 0, b = 0;
      return $A(i) ? m = EA(i, t.width) : $A(a) && (b = EA(a, t.height)), zt(i) ? m = b * o : (!a || zt(a)) && (b = m / o), [
        m,
        b
      ];
    }
    var w = null, v = null;
    if ($A(i) ? w = EA(i, t.width) : a && $A(a) && (v = EA(a, t.height)), w !== null && (!a || zt(a)) && (v = c && d ? w / r * n : t.height), v !== null && zt(i) && (w = c && d ? v / n * r : t.width), w !== null && v !== null) return [
      w,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, Ar = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, xF = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new Y(Math.round(r.left), Math.round(r.top + i)),
          new Y(Math.round(r.left + r.width), Math.round(r.top + i)),
          new Y(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new Y(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new Y(Math.round(r.left + o), Math.round(r.top)),
          new Y(Math.round(r.left + o + a), Math.round(r.top)),
          new Y(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new Y(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new Y(Math.round(r.left + o), Math.round(r.top + i)),
          new Y(Math.round(r.left + o + a), Math.round(r.top + i)),
          new Y(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new Y(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new Y(Math.round(n.left), Math.round(n.top)),
          new Y(Math.round(n.left + n.width), Math.round(n.top)),
          new Y(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new Y(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, IF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Xc = "Hidden Text", HF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = IF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(Xc)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(Xc)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), mf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), TF = 1e4, LF = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new HF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), wF(t) && (this.ctx.globalAlpha = t.opacity), mF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), gf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
        var i = Vs(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = DF(t.fontFamily).join(", "), o = fn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
        var n, o, i, a, s, l, c, d, u = this;
        return ae(this, function(f) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, d = r.paintOrder, t.textBounds.forEach(function(p) {
            d.forEach(function(h) {
              switch (h) {
                case 0:
                  u.ctx.fillStyle = zA(r.color), u.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var Q = r.textShadow;
                  Q.length && p.text.trim().length && (Q.slice(0).reverse().forEach(function(m) {
                    u.ctx.shadowColor = zA(m.color), u.ctx.shadowOffsetX = m.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = m.offsetY.number * u.options.scale, u.ctx.shadowBlur = m.blur.number, u.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = zA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(m) {
                    switch (m) {
                      case 1:
                        u.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top + l), p.bounds.width, 1);
                        break;
                      case 2:
                        u.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top), p.bounds.width, 1);
                        break;
                      case 3:
                        u.ctx.fillRect(p.bounds.left, Math.ceil(p.bounds.top + c), p.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && p.text.trim().length && (u.ctx.strokeStyle = zA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
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
        var o = Eo(t), i = Uo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s, b, b, l, c, d, u, v, f, p, U, h, Q, m, b, w, v, U;
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
              if (!(r instanceof Jd)) return [
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
              return b = C.sent(), this.renderReplacedElement(r, n, b), [
                3,
                8
              ];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof Yd && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Zd)) return [
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
              return b = C.sent(), this.renderReplacedElement(r, n, b), [
                3,
                12
              ];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof tf && r.tree ? (l = new e(this.context, {
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
              if (r instanceof $s && (d = Math.min(r.bounds.width, r.bounds.height), r.type === vo ? r.checked && (this.ctx.save(), this.path([
                new Y(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79),
                new Y(r.bounds.left + d * 0.16, r.bounds.top + d * 0.5549),
                new Y(r.bounds.left + d * 0.27347, r.bounds.top + d * 0.44071),
                new Y(r.bounds.left + d * 0.39694, r.bounds.top + d * 0.5649),
                new Y(r.bounds.left + d * 0.72983, r.bounds.top + d * 0.23),
                new Y(r.bounds.left + d * 0.84, r.bounds.top + d * 0.34085),
                new Y(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79)
              ]), this.ctx.fillStyle = zA(kc), this.ctx.fill(), this.ctx.restore()) : r.type === yo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + d / 2, r.bounds.top + d / 2, d / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = zA(kc), this.ctx.fill(), this.ctx.restore())), kF(r) && r.value.length) {
                switch (u = this.createFontStyle(o), v = u[0], f = u[1], p = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = KF(r.styles.textAlign), U = Eo(r), h = 0, r.styles.textAlign) {
                  case 1:
                    h += U.width / 2;
                    break;
                  case 2:
                    h += U.width;
                    break;
                }
                Q = U.add(h, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new Y(U.left, U.top),
                  new Y(U.left + U.width, U.top),
                  new Y(U.left + U.width, U.top + U.height),
                  new Y(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new $r(r.value, Q), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
              b = void 0, w = m.url, C.label = 15;
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
              return b = C.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [
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
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new nt(r.bounds.left, r.bounds.top + EA(r.styles.paddingTop, r.bounds.width), r.bounds.width, hc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new $r(t.listValue, U), o.letterSpacing, hc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, s, m, l, c, m, d, u, m, f, p, m, h, Q, m;
        return ae(this, function(b) {
          switch (b.label) {
            case 0:
              if (XA(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              b.sent(), r = 0, n = t.negativeZIndex, b.label = 2;
            case 2:
              return r < n.length ? (m = n[r], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                5
              ];
            case 3:
              b.sent(), b.label = 4;
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
              b.sent(), o = 0, i = t.nonInlineLevel, b.label = 7;
            case 7:
              return o < i.length ? (m = i[o], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                10
              ];
            case 8:
              b.sent(), b.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, b.label = 11;
            case 11:
              return a < s.length ? (m = s[a], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                14
              ];
            case 12:
              b.sent(), b.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, b.label = 15;
            case 15:
              return l < c.length ? (m = c[l], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                18
              ];
            case 16:
              b.sent(), b.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              d = 0, u = t.inlineLevel, b.label = 19;
            case 19:
              return d < u.length ? (m = u[d], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                22
              ];
            case 20:
              b.sent(), b.label = 21;
            case 21:
              return d++, [
                3,
                19
              ];
            case 22:
              f = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, b.label = 23;
            case 23:
              return f < p.length ? (m = p[f], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                26
              ];
            case 24:
              b.sent(), b.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              h = 0, Q = t.positiveZIndex, b.label = 27;
            case 27:
              return h < Q.length ? (m = Q[h], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              b.sent(), b.label = 29;
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
        var i = Qe(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), Qe(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
                var d, u, f, g, M, N, K, $, I, p, g, M, N, K, $, h, Q, m, b, w, v, U, C, S, I, H, g, x, k, K, $, D, M, N, q, P, j, eA, nA, R, W, V;
                return ae(this, function(J) {
                  switch (J.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      d = void 0, u = c.url, J.label = 1;
                    case 1:
                      return J.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(u)
                      ];
                    case 2:
                      return d = J.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return J.sent(), o.context.logger.error("Error loading background-image " + u), [
                        3,
                        4
                      ];
                    case 4:
                      return d && (f = ea(t, r, [
                        d.width,
                        d.height,
                        d.width / d.height
                      ]), g = f[0], M = f[1], N = f[2], K = f[3], $ = f[4], I = o.ctx.createPattern(o.resizeImage(d, K, $), "repeat"), o.renderRepeat(g, I, M, N)), [
                        3,
                        6
                      ];
                    case 5:
                      my(c) ? (p = ea(t, r, [
                        null,
                        null,
                        null
                      ]), g = p[0], M = p[1], N = p[2], K = p[3], $ = p[4], h = gy(c.angle, K, $), Q = h[0], m = h[1], b = h[2], w = h[3], v = h[4], U = document.createElement("canvas"), U.width = K, U.height = $, C = U.getContext("2d"), S = C.createLinearGradient(m, w, b, v), pc(c.stops, Q).forEach(function(dA) {
                        return S.addColorStop(dA.stop, zA(dA.color));
                      }), C.fillStyle = S, C.fillRect(0, 0, K, $), K > 0 && $ > 0 && (I = o.ctx.createPattern(U, "repeat"), o.renderRepeat(g, I, M, N))) : wy(c) && (H = ea(t, r, [
                        null,
                        null,
                        null
                      ]), g = H[0], x = H[1], k = H[2], K = H[3], $ = H[4], D = c.position.length === 0 ? [
                        _s
                      ] : c.position, M = EA(D[0], K), N = EA(D[D.length - 1], $), q = py(c, M, N, K, $), P = q[0], j = q[1], P > 0 && j > 0 && (eA = o.ctx.createRadialGradient(x + M, k + N, 0, x + M, k + N, P), pc(c.stops, P * 2).forEach(function(dA) {
                        return eA.addColorStop(dA.stop, zA(dA.color));
                      }), o.path(g), o.ctx.fillStyle = eA, P !== j ? (nA = t.bounds.left + 0.5 * t.bounds.width, R = t.bounds.top + 0.5 * t.bounds.height, W = j / P, V = 1 / W, o.ctx.save(), o.ctx.translate(nA, R), o.ctx.transform(1, 0, 0, W, 0, 0), o.ctx.translate(-nA, -R), o.ctx.fillRect(x, V * (k - R) + R, K, $ * V), o.ctx.restore()) : o.ctx.fill())), J.label = 6;
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
          return this.path(Wc(n, r)), this.ctx.fillStyle = zA(t), this.ctx.fill(), [
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
              return i = QF(o, n), this.path(i), this.ctx.fillStyle = zA(t), this.ctx.fill(), a = bF(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, d = this;
        return ae(this, function(u) {
          switch (u.label) {
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
              ], i = RF(Ar(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Bt(r.backgroundColor) || (this.ctx.fillStyle = zA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                d.ctx.save();
                var p = Fo(t.curves), h = f.inset ? 0 : TF, Q = vF(p, -h + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (d.path(p), d.ctx.clip(), d.mask(Q)) : (d.mask(p), d.ctx.clip(), d.path(Q)), d.ctx.shadowOffsetX = f.offsetX.number + h, d.ctx.shadowOffsetY = f.offsetY.number, d.ctx.shadowColor = zA(f.color), d.ctx.shadowBlur = f.blur.number, d.ctx.fillStyle = f.inset ? zA(f.color) : "rgba(0,0,0,1)", d.ctx.fill(), d.ctx.restore();
              }), u.label = 2;
            case 2:
              a = 0, s = 0, l = o, u.label = 3;
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
              return u.sent(), [
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
              return u.sent(), [
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
              return u.sent(), [
                3,
                11
              ];
            case 9:
              return [
                4,
                this.renderSolidBorder(c.color, a, t.curves)
              ];
            case 10:
              u.sent(), u.label = 11;
            case 11:
              a++, u.label = 12;
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
        var a, s, l, c, d, u, f, p, h, Q, m, b, w, v, U, C, U, C;
        return ae(this, function(S) {
          return this.ctx.save(), a = FF(o, n), s = Wc(o, n), i === 2 && (this.path(s), this.ctx.clip()), Qe(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Qe(s[1]) ? (d = s[1].end.x, u = s[1].end.y) : (d = s[1].x, u = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - d) : f = Math.abs(c - u), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, h = r < 3 ? r * 2 : r, i === 3 && (p = r, h = r), Q = true, f <= p * 2 ? Q = false : f <= p * 2 + h ? (m = f / (2 * p + h), p *= m, h *= m) : (b = Math.floor((f + h) / (p + h)), w = (f - b * p) / (b - 1), v = (f - (b + 1) * p) / b, h = v <= 0 || Math.abs(h - w) < Math.abs(h - v) ? w : v), Q && (i === 3 ? this.ctx.setLineDash([
            0,
            p + h
          ]) : this.ctx.setLineDash([
            p,
            h
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = zA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Qe(s[0]) && (U = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([
            new Y(U.end.x, U.end.y),
            new Y(C.start.x, C.start.y)
          ]), this.ctx.stroke()), Qe(s[1]) && (U = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([
            new Y(U.end.x, U.end.y),
            new Y(C.start.x, C.start.y)
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
              return this.options.backgroundColor && (this.ctx.fillStyle = zA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = yF(t), [
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
  })(mf), kF = function(A) {
    return A instanceof ef || A instanceof Af ? true : A instanceof $s && A.type !== yo && A.type !== vo;
  }, RF = function(A, e) {
    switch (A) {
      case 0:
        return Fo(e);
      case 2:
        return BF(e);
      default:
        return Uo(e);
    }
  }, KF = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, OF = [
    "-apple-system",
    "system-ui"
  ], DF = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return OF.indexOf(e) === -1;
    }) : A;
  }, MF = (function(A) {
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
              return r = Ga(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                PF(r)
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
  })(mf), PF = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, _F = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), NF = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new _F({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new sF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), GF = function(A, e) {
    return e === void 0 && (e = {}), VF(A, e);
  };
  typeof window < "u" && ff.setContext(window);
  var VF = function(A, e) {
    return ue(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, d, u, f, p, h, Q, m, b, w, v, U, S, C, S, I, H, g, x, k, K, $, D, M, N, q, P, j, eA, nA, R, W;
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
              allowTaint: (I = e.allowTaint) !== null && I !== void 0 ? I : false,
              imageTimeout: (H = e.imageTimeout) !== null && H !== void 0 ? H : 15e3,
              proxy: e.proxy,
              useCORS: (g = e.useCORS) !== null && g !== void 0 ? g : false
            }, o = Sa({
              logging: (x = e.logging) !== null && x !== void 0 ? x : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (k = e.windowWidth) !== null && k !== void 0 ? k : r.innerWidth,
              windowHeight: (K = e.windowHeight) !== null && K !== void 0 ? K : r.innerHeight,
              scrollX: ($ = e.scrollX) !== null && $ !== void 0 ? $ : r.pageXOffset,
              scrollY: (D = e.scrollY) !== null && D !== void 0 ? D : r.pageYOffset
            }, a = new nt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new NF(o, a), l = (M = e.foreignObjectRendering) !== null && M !== void 0 ? M : false, c = {
              allowTaint: (N = e.allowTaint) !== null && N !== void 0 ? N : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), d = new Gc(s, A, c), u = d.clonedReferenceElement, u ? [
              4,
              d.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = V.sent(), p = Ws(u) || $b(u) ? vw(u.ownerDocument) : gi(s, u), h = p.width, Q = p.height, m = p.left, b = p.top, w = $F(s, u, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (P = (q = e.scale) !== null && q !== void 0 ? q : r.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((j = e.x) !== null && j !== void 0 ? j : 0) + m,
              y: ((eA = e.y) !== null && eA !== void 0 ? eA : 0) + b,
              width: (nA = e.width) !== null && nA !== void 0 ? nA : Math.ceil(h),
              height: (R = e.height) !== null && R !== void 0 ? R : Math.ceil(Q)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), S = new MF(s, v), [
              4,
              S.render(u)
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
            return s.logger.debug("Document cloned, element located at " + m + "," + b + " with size " + h + "x" + Q + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = nf(s, u), w === C.styles.backgroundColor && (C.styles.backgroundColor = qe.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), S = new LF(s, v), [
              4,
              S.render(C)
            ];
          case 4:
            U = V.sent(), V.label = 5;
          case 5:
            return (!((W = e.removeContainer) !== null && W !== void 0) || W) && (Gc.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, $F = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Gr(A, getComputedStyle(r.documentElement).backgroundColor) : qe.TRANSPARENT, o = r.body ? Gr(A, getComputedStyle(r.body).backgroundColor) : qe.TRANSPARENT, i = typeof t == "string" ? Gr(A, t) : t === null ? qe.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Bt(n) ? Bt(o) ? i : o : n : i;
  }, ta = {
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
  }, WF = {
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
  }, XF = function(A, e) {
    var t = JA({}, WF);
    if (A) for (var r in ta) Object.prototype.hasOwnProperty.call(ta, r) && (t[r] = JA(JA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), ta[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = JA(JA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, jc = function(A, e) {
    return A ? JA(JA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : JA({}, e.rbgcpControlBtn);
  }, Xr = function(A, e) {
    return A ? JA(JA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : JA({}, e.rbgcpControlIconBtn);
  }, Xn = function(A, e) {
    return A ? JA(JA(JA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : JA(JA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Me = function() {
    return Me = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Me.apply(this, arguments);
  }, jF = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "";
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), T.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), T.createElement("path", {
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
  }, zF = function(A) {
    var e = A.onSelect, t = QA().defaultStyles, r = B.useState(null), n = r[0], o = r[1], i = B.useState(false), a = i[0], s = i[1], l = B.useState(false), c = l[0], d = l[1], u = function() {
      var h = document.getElementById("root");
      s(true), GF(h).then(function(Q) {
        var m = document.createElement("canvas"), b = m.getContext("2d", {
          willReadFrequently: true
        });
        h && b && (m.width = h.offsetWidth * 2, m.height = h.offsetHeight * 2, b.drawImage(Q, 0, 0)), o(b);
      });
    }, f = function(h) {
      if (h.stopPropagation(), n) {
        var Q = h.pageX, m = h.pageY, b = Q * 2, w = m * 2, v = n.getImageData(b, w, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      d(false), s(false);
    }, p = function() {
      if (d(true), !window.EyeDropper) u();
      else {
        var h = new window.EyeDropper(), Q = new window.AbortController();
        h.open({
          signal: Q.signal
        }).then(function(m) {
          var b = re(m.sRGBHex), w = b.toRgb(), v = w.r, U = w.g, C = w.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(C, ", 1)")), d(false);
        }).catch(function(m) {
          console.log(m), d(false);
        });
      }
    };
    return T.createElement("div", null, T.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Me(Me({}, t.rbgcpEyedropperBtn), Xr(a, t))
    }, T.createElement(jF, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && T.createElement(ww, null, T.createElement("div", {
      onClick: function(h) {
        return f(h);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, Ja = function() {
    return Ja = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ja.apply(this, arguments);
  }, ra = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, d = B.useState(false), u = d[0], f = d[1], p = B.useState(2), h = p[0], Q = p[1], m = e * (i - 18);
    B.useEffect(function() {
      var C;
      Q(((C = t == null ? void 0 : t.current) === null || C === void 0 ? void 0 : C.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var b = function() {
      f(false);
    }, w = function(C) {
      u && o(ur(C, c));
    }, v = function(C) {
      u || o(ur(C, c));
    }, U = function() {
      f(true);
    };
    return B.useEffect(function() {
      var C = function() {
        b();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), T.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, T.createElement("div", {
      onMouseMove: function(C) {
        return w(C);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, T.createElement("div", {
      style: Ja({
        left: m,
        top: h
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), T.createElement("div", {
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
    }, r), T.createElement("canvas", {
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
  }, JF = function(A) {
    var e = A.openAdvanced, t = QA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), d = c.s, u = c.l, f = B.useRef(null), p = B.useRef(null), h = B.useRef(null);
    Em(f, a == null ? void 0 : a.h, u * 100, i), Sm(p, a == null ? void 0 : a.h, d * 100, i), xm(h, a == null ? void 0 : a.h, d * 100, i);
    var Q = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: u
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: d,
        l: w / 100
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, b = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return T.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, T.createElement("div", {
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
    }, T.createElement(ra, {
      value: d,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: Q,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), T.createElement(ra, {
      value: u,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), T.createElement(ra, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: h,
      label: "Brightness",
      callback: b,
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
  }, YF = function(A) {
    var e = A.openComparibles, t = QA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), d = function(u) {
      var f = u.toRgb(), p = f.r, h = f.g, Q = f.b, m = f.a;
      n("rgba(".concat(p, ",").concat(h, ",").concat(Q, ",").concat(m, ")"));
    };
    return T.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, T.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, T.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), T.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(u, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-analogous-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    })), T.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(u, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-monochromatic-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    })), T.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(u, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-triad-color-".concat(f).concat(i),
        style: {
          width: "calc(100% / 3)",
          height: 28,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    })), T.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(u, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-tetrad-color-".concat(f).concat(i),
        style: {
          width: "25%",
          height: 28,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
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
  }, ZF = function() {
    var A = QA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return T.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, T.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: xA(xA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, T.createElement(dw, {
      color: i ? "#568CF5" : ""
    })), T.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: xA(xA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, T.createElement(fw, {
      color: a ? "#568CF5" : ""
    })));
  }, qF = function() {
    var A = QA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, cr(parseInt(a), 0, 100));
    };
    return T.createElement("div", {
      style: xA(xA(xA(xA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, T.createElement(Cw, null), T.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: xA(xA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, AU = function() {
    var A = QA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = cr(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return T.createElement("div", {
      style: xA(xA(xA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, T.createElement(hw, null), T.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: xA(xA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), T.createElement("div", {
      style: xA(xA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, eU = function() {
    var A = QA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return xA(xA({}, l), {
            value: c === t - 1 ? fi(l) : un(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return T.createElement("div", {
      onClick: i,
      style: xA(xA({}, Xr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, T.createElement(uw, null));
  }, zc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = QA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return T.createElement("div", {
      style: xA(xA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && T.createElement(ZF, null), T.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && T.createElement(AU, null)), !r && T.createElement(qF, null), T.createElement(eU, null));
  }, en = function() {
    return en = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, en.apply(this, arguments);
  }, tU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = QA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? T.createElement("div", {
      style: {
        width: 1
      }
    }) : T.createElement("div", {
      style: en({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, T.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: jc(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), T.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: jc(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, rU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = QA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", d = function(u, f) {
      e && (u.stopPropagation(), o(f), t(false));
    };
    return T.createElement("div", {
      style: en({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, T.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(u) {
        return d(u, "rgb");
      },
      style: Xn(n === "rgb", i)
    }, "RGB"), T.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsl");
      },
      style: Xn(n === "hsl", i)
    }, "HSL"), T.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsv");
      },
      style: Xn(n === "hsv", i)
    }, "HSV"), T.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(u) {
        return d(u, "cmyk");
      },
      style: Xn(n === "cmyk", i)
    }, "CMYK"));
  }, nU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, d = c === void 0 ? false : c, u = A.hideColorTypeBtns, f = u === void 0 ? false : u, p = A.hideGradientControls, h = p === void 0 ? false : p, Q = A.hideGradientType, m = Q === void 0 ? false : Q, b = A.hideGradientAngle, w = b === void 0 ? false : b, v = A.hideGradientStop, U = v === void 0 ? false : v, C = QA(), S = C.config, I = C.onChange, H = C.isGradient, g = C.handleChange, x = C.previous, k = C.defaultStyles, K = C.pickerIdSuffix, $ = S.defaultColor, D = S.defaultGradient, M = B.useState(false), N = M[0], q = M[1], P = B.useState(false), j = P[0], eA = P[1], nA = B.useState(false), R = nA[0], W = nA[1], V = o && a && l && d, J = (e = x == null ? void 0 : x.color) !== null && e !== void 0 ? e : $, dA = (t = x == null ? void 0 : x.gradient) !== null && t !== void 0 ? t : D, iA = function() {
      I(J);
    }, tA = function() {
      I(dA);
    }, z = o && a && l && d, oA = z && f;
    return oA ? H && !h ? T.createElement(zc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }) : null : T.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, T.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(K)
    }, T.createElement(tU, {
      hideColorTypeBtns: f,
      setGradient: tA,
      isGradient: H,
      setSolid: iA,
      locales: r
    }), !z && T.createElement("div", {
      style: en({
        display: V ? "none" : ""
      }, k.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(K)
    }, !o && T.createElement(zF, {
      onSelect: g
    }), !a && T.createElement("div", {
      id: "rbgcp-advanced-btn".concat(K),
      onClick: function() {
        return W(!R);
      },
      style: Xr(R, k)
    }, T.createElement(gw, {
      color: R ? "#568CF5" : ""
    })), !l && T.createElement("div", {
      style: Xr(N, k),
      onClick: function() {
        return q(!N);
      },
      id: "rbgcp-comparibles-btn".concat(K)
    }, T.createElement(Bw, {
      color: N ? "#568CF5" : ""
    })), !d && T.createElement("div", {
      id: "rbgcp-color-model-btn".concat(K),
      onClick: function() {
        return eA(!j);
      },
      style: Xr(j, k)
    }, T.createElement(pw, {
      color: j ? "#568CF5" : ""
    }), T.createElement(rU, {
      openInputType: j,
      setOpenInputType: eA
    })))), !a && T.createElement(JF, {
      openAdvanced: R
    }), !l && T.createElement(YF, {
      openComparibles: N
    }), H && !h && T.createElement(zc, {
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
  }, Jc = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, oU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = QA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, d = a === t, u = (i - 18) / 100, f = function(h) {
      var Q = o == null ? void 0 : o.map(function(m, b) {
        return Pe(Pe({}, m), {
          value: b === h ? fi(m) : un(m)
        });
      });
      c(Q);
    }, p = function(h) {
      h.stopPropagation(), f(t), r(true);
    };
    return T.createElement("div", {
      onMouseDown: function(h) {
        return p(h);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Pe(Pe({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * u
      })
    }, T.createElement("div", {
      style: Pe(Pe({}, s.rbgcpGradientHandle), d ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, d && T.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, iU = function() {
    var A = QA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = B.useState(false), d = c[0], u = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(w) {
      var v, U = ur(w, l), C = (v = Jc(Jc([], t.map(function(S) {
        return Pe(Pe({}, S), {
          value: un(S)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(S, I) {
        return S.left - I.left;
      });
      s(C);
    }, h = function() {
      u(false);
    }, Q = function(w) {
      d || (p(w), u(true));
    }, m = function(w) {
      d && i(o, ur(w, l));
    }, b = function() {
      h();
    };
    return B.useEffect(function() {
      return window.addEventListener("mouseup", b), function() {
        window.removeEventListener("mouseup", b);
      };
    }), T.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, T.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(w) {
        return Q(w);
      },
      onMouseMove: function(w) {
        return m(w);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(w, v) {
      return T.createElement(oU, {
        i: v,
        left: w.left,
        key: "".concat(v, "-").concat(w),
        setDragging: u
      });
    }));
  }, aU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, d = A.hidePickerSquare, u = A.hideGradientType, f = A.hideGradientStop, p = A.hideGradientAngle, h = A.hideColorTypeBtns, Q = A.hideAdvancedSliders, m = A.hideGradientControls, b = QA(), w = b.isGradient, v = b.pickerIdSuffix;
    return T.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !d && T.createElement(iw, null), !s && T.createElement(nU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: u,
      hideGradientStop: f,
      hideColorTypeBtns: h,
      hideGradientAngle: p,
      hideAdvancedSliders: Q,
      hideGradientControls: m
    }), w && T.createElement(iU, null), !r && T.createElement(Im, null), !i && T.createElement(aw, null), !n && T.createElement(Mm, null), !o && T.createElement(cw, {
      presets: t
    }));
  }, So = function() {
    return So = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, So.apply(this, arguments);
  };
  function sU(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, d = A.hidePresets, u = d === void 0 ? false : d, f = A.hideHue, p = f === void 0 ? false : f, h = A.presets, Q = h === void 0 ? [] : h, m = A.hideEyeDrop, b = m === void 0 ? false : m, w = A.hideAdvancedSliders, v = w === void 0 ? false : w, U = A.hideColorGuide, C = U === void 0 ? false : U, S = A.hideInputType, I = S === void 0 ? false : S, H = A.hideColorTypeBtns, g = H === void 0 ? false : H, x = A.hideGradientType, k = x === void 0 ? false : x, K = A.hideGradientAngle, $ = K === void 0 ? false : K, D = A.hideGradientStop, M = D === void 0 ? false : D, N = A.hideGradientControls, q = N === void 0 ? false : N, P = A.locales, j = P === void 0 ? sw : P, eA = A.width, nA = eA === void 0 ? 294 : eA, R = A.height, W = R === void 0 ? 294 : R, V = A.style, J = V === void 0 ? {} : V, dA = A.className, iA = A.disableDarkMode, tA = iA === void 0 ? false : iA, z = A.disableLightMode, oA = z === void 0 ? false : z, aA = A.hidePickerSquare, y = aA === void 0 ? false : aA, E = A.showHexAlpha, F = E === void 0 ? false : E, _ = A.config, X = _ === void 0 ? {} : _, G = wm(r), sA = typeof window > "u" || tA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), cA = XF(sA, J), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return T.createElement("div", {
      className: dA,
      style: So(So({}, cA.body), {
        width: nA
      })
    }, T.createElement(Fm, {
      value: G,
      onChange: n,
      squareWidth: nA,
      passedConfig: X,
      squareHeight: W,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: F,
      defaultStyles: cA,
      pickerIdSuffix: fA
    }, T.createElement(aU, {
      hideControls: i,
      hideInputs: s,
      hidePresets: u,
      hideOpacity: c,
      hideHue: p,
      presets: Q,
      hideEyeDrop: b,
      hideAdvancedSliders: v,
      hideColorGuide: C,
      hideInputType: I,
      hideColorTypeBtns: g,
      hideGradientType: k,
      hideGradientAngle: $,
      hideGradientStop: M,
      hideGradientControls: q,
      hidePickerSquare: y,
      locales: j
    })));
  }
  function lU(A) {
    if (!A || typeof A != "string") return null;
    const e = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, t = A.match(e);
    if (!t) return null;
    let r = t[1];
    r.length === 3 && (r = r.split("").map((s) => s + s).join(""));
    const n = parseInt(r.substring(0, 2), 16), o = parseInt(r.substring(2, 4), 16), i = parseInt(r.substring(4, 6), 16);
    let a = 1;
    if (r.length === 8) {
      const s = parseInt(r.substring(6, 8), 16);
      a = Math.round(s / 255 * 1e3) / 1e3;
    }
    return {
      r: n,
      g: o,
      b: i,
      a
    };
  }
  function cU(A) {
    if (!A || typeof A != "string") return null;
    const e = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i, t = A.match(e);
    if (!t) return null;
    const r = parseInt(t[1], 10), n = parseInt(t[2], 10), o = parseInt(t[3], 10), i = t[4] !== void 0 ? parseFloat(t[4]) : 1;
    return r < 0 || r > 255 || n < 0 || n > 255 || o < 0 || o > 255 || i < 0 || i > 1 ? null : {
      r,
      g: n,
      b: o,
      a: Math.round(i * 1e3) / 1e3
    };
  }
  function er(A) {
    if (!A || typeof A != "string") return null;
    const e = A.trim();
    return e.startsWith("#") ? lU(e) : e.toLowerCase().startsWith("rgb") ? cU(e) : null;
  }
  function uU(A) {
    if (!A || typeof A != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, t = Array.from(A.matchAll(e));
    if (t.length < 2) return null;
    const r = t.map((n, o) => {
      const i = n[1];
      let a;
      return n[2] ? a = parseFloat(n[2]) : a = o / (t.length - 1) * 100, {
        color: i,
        position: a
      };
    });
    return r.sort((n, o) => n.position - o.position), r;
  }
  function dU(A) {
    if (!A || A.length < 2) return null;
    const e = A.find((u) => u.position === 50);
    if (e) {
      const u = er(e.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    let t = null, r = null;
    for (let u = 0; u < A.length; u++) if (A[u].position <= 50 && (t = A[u]), A[u].position > 50 && !r) {
      r = A[u];
      break;
    }
    if (!r && t) {
      const u = er(t.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t && r) {
      const u = er(r.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t || !r) return null;
    const n = er(t.color), o = er(r.color);
    if (!n || !o) return null;
    const i = r.position - t.position;
    if (i === 0) {
      const u = o;
      return u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})`;
    }
    const a = (50 - t.position) / i, s = Math.round(n.r + (o.r - n.r) * a), l = Math.round(n.g + (o.g - n.g) * a), c = Math.round(n.b + (o.b - n.b) * a), d = Math.round((n.a + (o.a - n.a) * a) * 1e3) / 1e3;
    return d === 1 ? `rgb(${s}, ${l}, ${c})` : `rgba(${s}, ${l}, ${c}, ${d})`;
  }
  Yc = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    if (e === "") return null;
    if (!/^(linear-gradient|radial-gradient)\(/i.test(e)) return er(e) ? e : null;
    try {
      const n = uU(e);
      return n ? dU(n) : null;
    } catch {
      return null;
    }
  };
  function na(A) {
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
  jn = function({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, [o, i] = B.useState(e[n] || ""), [a, s] = B.useState(false), [l, c] = B.useState(null), d = B.useRef(null), [u, f] = B.useState(null), p = B.useRef(false), h = B.useRef(e[n]), Q = r.context.theme, m = (C) => {
      if (C == null) {
        i(""), s(false), t({
          [n]: null
        }), p.current = false;
        return;
      }
      if (typeof C != "string") {
        s(true);
        return;
      }
      if (C.trim() === "") {
        i(""), s(false), t({
          [n]: null
        }), p.current = false;
        return;
      }
      const I = na(C);
      if (i(C), I.isValid) if (A.noGradient === true) {
        const H = Yc(I.normalizedValue);
        if (H === null) {
          s(true);
          return;
        }
        s(false), h.current = H, t({
          [n]: H
        });
      } else s(false), t({
        [n]: I.normalizedValue || null
      });
      else s(true);
    }, b = (C) => m(C), w = (C) => m(C.target.value), v = () => m(null), U = !!l;
    return B.useEffect(() => {
      const C = e[n];
      if (C !== h.current) {
        h.current = C;
        const S = C || "";
        i(S), s(false), (!S || S.trim() === "") && (p.current = false);
      }
    }, [
      e[n]
    ]), B.useEffect(() => {
      if (!U || !u) return;
      const C = new ResizeObserver(() => {
        var _a2;
        (_a2 = d.current) == null ? void 0 : _a2.updatePosition();
      });
      return C.observe(u), () => {
        C.disconnect();
      };
    }, [
      U,
      u
    ]), B.useEffect(() => {
      if (!U || p.current) return;
      const C = e[n];
      if (C && C.trim() !== "") {
        p.current = true;
        return;
      }
      let S = null;
      if (A.fallbackFields && Array.isArray(A.fallbackFields) && A.fallbackFields.length > 0) for (const I of A.fallbackFields) {
        const H = e[I];
        if (H && typeof H == "string") {
          const g = na(H);
          if (g.isValid && g.normalizedValue.trim() !== "") {
            S = g.normalizedValue;
            break;
          }
        }
      }
      if (!S && (!A.fallbackFields || A.fallbackFields.length > 0) && (S = Q.palette.primary.main), S) {
        const I = na(S);
        if (I.isValid) if (A.noGradient === true) {
          const H = Yc(I.normalizedValue);
          H !== null && (i(S), s(false), h.current = H, t({
            [n]: H
          }));
        } else i(S), s(false), t({
          [n]: S
        });
      }
      p.current = true;
    }, [
      U,
      e,
      n,
      A.fallbackFields,
      A.noGradient,
      Q.palette.primary.main,
      t
    ]), L.jsx(L.Fragment, {
      children: L.jsxs(Zu, {
        theme: Q,
        children: [
          L.jsxs(Ie, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              L.jsx(lm, {
                variant: "standard",
                fullWidth: true,
                value: o,
                error: a,
                helperText: a ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: w,
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
              o && L.jsx(zh, {
                onClick: v,
                title: Ua.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: L.jsx(dm, {})
              }),
              L.jsx(Ie, {
                onClick: (C) => {
                  c(C.currentTarget);
                },
                title: Ua.t("choose_color"),
                sx: {
                  mt: o ? "4px" : "-2px",
                  px: "4px",
                  py: o ? "4px" : "3px",
                  backgroundColor: o ? Q.name === "light" ? Q.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: a ? `1px solid ${Q.palette.error.main}` : o ? `1px solid ${Q.name === "light" ? Q.palette.grey[400] : Q.palette.common.black}` : `1px dashed ${Q.name === "light" ? Q.palette.grey[400] : Q.palette.text.secondary}`,
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
          L.jsx(id, {
            action: d,
            "aria-hidden": !U,
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
            open: U,
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
              ref: f,
              sx: {
                borderRadius: "6px"
              },
              children: L.jsx(sU, {
                value: o || Q.palette.primary.main,
                onChange: b,
                hidePresets: true,
                hideInputs: true,
                hideEyeDrop: true,
                hideInputType: true
              })
            })
          })
        ]
      })
    });
  };
  let Jt, fU, pU;
  Jt = (A) => {
    if (!A || typeof A != "string") return false;
    const e = A.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  SU = (A) => {
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
        name: `enableIconColorMask${e}`,
        label: "enable_icon_color_mask",
        type: "checkbox",
        default: false,
        tooltip: "enable_icon_color_mask_tooltip",
        hidden: (o, i) => {
          let a = true;
          const s = i !== void 0 ? i : e, l = o[`icon${s}`], c = o[`iconSmall${s}`];
          return s === "" && (a = !o.iconColor && !Jt(l) && !Jt(c)), s === "Active" && (a = !o.iconColor && !o.iconColorActive && !Jt(l) && !Jt(c)), i !== void 0 && (a = !o.iconColor && !o[`iconColor${i}`] && !Jt(l) && !Jt(c)), a;
        }
      },
      {
        name: `iconColor${e}`,
        label: "icon_color",
        default: "",
        type: "custom",
        fallbackFields: [
          ""
        ],
        noGradient: true,
        component: (o, i, a, s) => L.jsx(jn, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
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
        default: "",
        type: "custom",
        fallbackFields: [
          ""
        ],
        component: (o, i, a, s) => L.jsx(jn, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
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
        fallbackFields: [],
        component: (o, i, a, s) => L.jsx(jn, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
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
        fallbackFields: [],
        component: (o, i, a, s) => L.jsx(jn, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
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
  fU = () => {
    const { isSignalVisible: A, refService: e, widget: t } = B.useContext(Br), r = B.useMemo(() => {
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
        const c = r[l], d = c !== void 0 ? n[c] : void 0;
        d ? (s.style.color = d, s.style.filter = "drop-shadow(0px 10000px 0)", s.style.transform = "translateY(-10000px)") : (s.style.color = "", s.style.filter = "", s.style.transform = "");
      });
    }, [
      r,
      n,
      e
    ]);
  };
  gU = (A, e = 28) => {
    const [t, r] = B.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), n = B.useCallback((i) => {
      if (i.length === 0) return;
      const a = i[0], { width: s, height: l } = a.contentRect, c = Math.round(s), d = Math.round(l), u = c <= d + e + 12 ? c - e - 12 : d;
      r({
        width: c,
        height: d,
        maxWidth: u
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
  pU = (A) => {
    const { widget: e } = B.useContext(Br), [t, r] = B.useState("100%"), [n, o] = B.useState("100%"), { width: i, height: a } = gU(A), s = B.useMemo(() => ({
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
      const d = i - l, u = a - l, f = Math.min(d, u);
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
  zn = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    return e === "" ? null : /^(linear-gradient|radial-gradient)\(/i.test(e) ? A : null;
  };
  BU = B.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = B.useRef(null), s = B.useRef(null), [l, c] = B.useState(null), [d, u] = B.useState(null), f = B.useRef(null), [p, h] = B.useState(null), Q = B.useContext(Br);
    if (!Q) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: m, widget: b } = Q, w = b.data.oidObject, { backgroundStyles: v, borderStyles: U } = Ms(b.style), C = B.useRef(null), { width: S, height: I } = pU(l || C), H = (t || t === 0 || t === false) && `${t}${(w == null ? void 0 : w.unit) === void 0 ? "" : w == null ? void 0 : w.unit}`;
    fU();
    const g = w == null ? void 0 : w._id, x = e.footer || e.alias || e.value || H || "";
    return B.useEffect(() => {
      b.data.noFooter || p && (p.innerHTML = x);
    }, [
      x,
      b.data.noFooter,
      p
    ]), B.useEffect(() => {
      b.data.noHeader || d && (d.innerHTML = e.header);
    }, [
      e.header,
      b.data.noHeader,
      d
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
    })), L.jsxs(Ca, {
      ref: a,
      className: "BASE-PAPER-0",
      square: b.data.squaredCorner,
      variant: b.data.outlinedFrame ? "outlined" : "elevation",
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
        background: m ? b.data.frameBackgroundColorActive || e.frameBackgroundColorActive || e.frameBackgroundColor || b.data.frameBackgroundActive || e.frameBackgroundActive || e.frameBackground : "transparent"
      },
      children: [
        !!r && L.jsxs(L.Fragment, {
          children: [
            L.jsx(Ie, {
              sx: {
                width: b.data.noHeader ? "0%" : "100%",
                height: b.data.noHeader ? "0%" : "auto",
                mt: (b.data.basePadding ?? 8) / 2,
                mb: -(b.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Ao, {
                ref: (k) => {
                  u(k), f.current = k;
                },
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: zn(e.textColorActive || e.textColor),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: zn(e.textColorActive || e.textColor) ? "transparent" : e.textColorActive || e.textColor
                }
              })
            }),
            L.jsx(Ie, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: b.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: L.jsx(Ca, {
                ref: s,
                className: "BASE-PAPER-1",
                elevation: b.data.outlined ? 0 : Number(b.data.baseElevation) || 0,
                square: !b.data.basePadding || b.data.squaredCorner,
                variant: b.data.outlined ? "outlined" : "elevation",
                sx: {
                  overflow: "hidden",
                  width: S,
                  height: I,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: m ? U.borderColor : e.backgroundColorActive || e.backgroundColor || U.borderColor,
                  background: m ? n && b.data.backgroundColorActive || n && e.backgroundColorActive || n && e.backgroundColor || n && b.data.backgroundActive || n && e.backgroundActive || e.background : "transparent",
                  borderRadius: b.data.circle || b.data.ellipse ? "50%" : null,
                  ...o
                },
                children: A
              })
            }),
            L.jsx(Ie, {
              sx: {
                width: b.data.noFooter ? "0%" : "100%",
                height: b.data.noFooter ? "0%" : "auto",
                mt: -(b.data.basePadding ?? 8) / 2,
                mb: (b.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Ao, {
                ref: h,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: zn(e.textColorActive || e.textColor),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: zn(e.textColorActive || e.textColor) ? "transparent" : e.textColorActive || e.textColor
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
          children: L.jsx(Ao, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: g ? `${g} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  BU.displayName = "CollectionBase";
  hU = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  CU = (A, e, t) => !t && !hU(A) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  xU = ({ data: A, widget: e }) => {
    const r = B.useContext(Br).theme, n = (typeof A.icon == "string" ? A.icon : void 0) || (typeof A.iconActive == "string" ? A.iconActive : void 0), o = (typeof A.iconSize == "string" ? A.iconSize : void 0) || (typeof A.iconSizeActive == "string" ? A.iconSizeActive : void 0), i = e.data.iconColorActive || A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? L.jsx("img", {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${e.data.iconYOffset || 0})`,
        right: `calc(0px - ${e.data.iconXOffset || 0})`,
        height: o,
        ...CU(n, i, !!(e.data.enableIconColorMaskActive || e.data.enableIconColorMask && e.data.iconColor))
      }
    }) : null;
  };
  function Yt(A, e) {
    return A[e];
  }
  function Sr(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  mU = (A) => typeof A == "number" ? `${A / 100}rem` : null;
  IU = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = B.useContext(Br), o = r[`${A}Object`], { fontStyles: i, backgroundStyles: a } = Ms(t.style), [s, l] = B.useState(), c = n(A), d = o == null ? void 0 : o.name, u = B.useCallback(mU, []), f = B.useCallback((w, v = "") => {
      const U = `${w}${v}`;
      return Yt(r, U);
    }, [
      r
    ]), { states: p, widgetStates: h, minValue: Q, maxValue: m } = B.useMemo(() => (() => {
      const v = [], U = {};
      let C = null, S = null;
      const I = o == null ? void 0 : o.type, H = (o == null ? void 0 : o.commonStates) || {}, g = Object.entries(H);
      if (I === "number" || I === "string" || I === "boolean" || I === "mixed") {
        for (let x = 1; x <= r.values_count; x++) {
          const k = r[`value${x}`], K = r[`alias${x}`], $ = o == null ? void 0 : o.unit;
          if (k != null && /\S/.test(String(k))) {
            const D = g.find(([N]) => N === String(k));
            v.push({
              value: D ? I === "number" ? Number(D[0]) : String(D[0]) : I === "number" ? Number(k) : k,
              valueSize: typeof f("valueSize", String(x)) == "number" ? u(f("valueSize", String(x))) : null,
              label: String(K && String(K).trim() !== "" ? K : `${k}${$}`).replace(/(\r\n|\n|\r)/gm, ""),
              alias: String(K && String(K).trim() !== "" ? K : `${k}${$}`).replace(/(\r\n|\n|\r)/gm, ""),
              fontSize: (() => {
                if (String(c) === String(k) && typeof r.valueSizeActive == "number") return u(r.valueSizeActive);
                const q = Yt(r, `valueSize${x}`);
                if (typeof q == "number") return u(q);
                if (Sr(r) && typeof r.markerTextSize == "number") return u(r.markerTextSize);
                if (typeof r.valueSize == "number") return u(r.valueSize);
              })(),
              textColor: (() => {
                if (String(c) === String(k) && r.textColorActive) return r.textColorActive;
                const q = Yt(r, `textColor${x}`);
                if (q) return q;
                if (Sr(r) && r.markerTextColor) return r.markerTextColor;
                if (r.textColor) return r.textColor;
              })(),
              icon: (() => {
                const N = r[`icon${x}`] || r[`iconSmall${x}`] || r.icon || r.iconSmall;
                return typeof N == "string" ? N : void 0;
              })(),
              iconSize: typeof r[`iconSize${x}`] == "number" ? r[`iconSize${x}`] : void 0,
              iconWidth: (() => {
                if (String(c) === String(k) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const q = Yt(r, `iconSize${x}`);
                return typeof q == "number" ? q : Sr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconHeight: (() => {
                if (String(c) === String(k) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const q = Yt(r, `iconSize${x}`);
                return typeof q == "number" ? q : Sr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconXOffset: (() => {
                const N = f("iconXOffset", String(x));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconYOffset: (() => {
                const N = f("iconYOffset", String(x));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconColor: Yt(r, `iconColor${x}`) || (Sr(r) ? r.markerIconColor : void 0) || r.iconColor || e.palette.primary.main,
              iconHover: (() => {
                const N = f("iconHover", String(x));
                return N ? `${N}%` : void 0;
              })(),
              forceColorMask: r[`enableIconColorMask${x}`],
              backgroundColor: r.backgroundColor || a.backgroundColor || "",
              backgroundColorActive: f("backgroundColor", String(x)),
              background: String(r.background || a.background || ""),
              backgroundActive: f("background", String(x)),
              frameBackgroundColor: r.frameBackgroundColor || a.backgroundColor || "",
              frameBackgroundColorActive: f("frameBackgroundColor", String(x)),
              frameBackground: String(r.frameBackground || a.background || ""),
              frameBackgroundActive: f("frameBackground", String(x))
            });
            const M = String(D ? D[0] : k);
            U[M] = K && String(K).trim() !== "" ? K : `${k}${$}`;
          }
        }
        if (I === "number" && v.length) {
          const x = v.map((k) => typeof k.value == "number" ? k.value : NaN).filter((k) => !isNaN(k));
          x.length > 0 && (C = Math.min(...x), S = Math.max(...x));
        }
      }
      return {
        states: v,
        widgetStates: U,
        minValue: C,
        maxValue: S
      };
    })(), [
      o == null ? void 0 : o.type,
      o == null ? void 0 : o.commonStates,
      o == null ? void 0 : o.unit,
      r,
      e.palette.primary.main,
      a.backgroundColor,
      a.background,
      f,
      c,
      u
    ]), b = B.useMemo(() => {
      const w = (U = "") => ({
        textColor: r.textColor,
        textColorActive: f("textColor", String(U)),
        header: String(r.headerActive || f("header", String(U)) || r.header || d || "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: u(r.headerSize) || u(r.headerSizeActive) || u(f("headerSize", String(U))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        footer: String(r.footerActive || f("footer", String(U)) || r.footer || "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: u(r.footerSize) || u(r.footerSizeActive) || u(f("footerSize", String(U))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        alias: String(f("alias", String(U)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const C = f("value", String(U));
          return C != null ? `${C}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
        })(),
        valueSize: u(r.valueSize) || (typeof i.fontSize == "string" ? i.fontSize : null),
        valueSizeActive: typeof f("valueSize", String(U)) == "number" ? u(f("valueSize", String(U))) : null,
        icon: (() => {
          if (r.noIcon) return null;
          const C = r.icon || r.iconSmall;
          return typeof C == "string" ? C : null;
        })(),
        iconActive: (() => {
          const C = !r.noIcon && (f("icon", String(U)) || f("iconSmall", String(U)));
          return typeof C == "string" ? C : null;
        })(),
        iconSize: typeof r.iconSize == "number" && `calc(24px * ${r.iconSize} / 100)` || "24px",
        iconSizeActive: (() => {
          const C = f("iconSize", String(U));
          return C ? `calc(24px * ${C} / 100)` : false;
        })(),
        forceColorMaskActive: f("enableIconColorMask", String(U)) || false,
        iconSizeActiveOnly: f("iconSize", String(U)),
        iconSizeOnly: f("iconSize", String(U)) || f("iconSize", String(U)) === 0 ? f("iconSize", String(U)) : r.iconSize,
        iconColor: r.iconColor,
        iconColorActive: f("iconColor", String(U)),
        iconHover: r.iconHover ? `${r.iconHover}%` : void 0,
        iconHoverActive: (() => {
          const C = f("iconHover", String(U));
          return C ? `${C}%` : void 0;
        })(),
        iconXOffset: !!f("iconXOffset", String(U)) && f("iconXOffset", String(U)) !== "0px" && f("iconXOffset", String(U)) || "0px",
        iconYOffset: !!f("iconYOffset", String(U)) && f("iconYOffset", String(U)) !== "0px" && f("iconYOffset", String(U)) || "0px",
        backgroundColor: r.backgroundColor || a.backgroundColor || "",
        backgroundColorActive: f("backgroundColor", String(U)),
        background: String(r.background || a.background || ""),
        backgroundActive: f("background", String(U)),
        frameBackgroundColor: r.frameBackgroundColor || a.backgroundColor || "",
        frameBackgroundColorActive: f("frameBackgroundColor", String(U)),
        frameBackground: String(r.frameBackground || a.background || ""),
        frameBackgroundActive: f("frameBackground", String(U))
      });
      switch (o == null ? void 0 : o.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const U = p.findIndex((C) => String(C.value) === String(c));
          return U !== -1 ? (l(U + 1), w(String(U + 1))) : (l(void 0), w(""));
        }
        default:
          return w("");
      }
    }, [
      o,
      c,
      d,
      r,
      p,
      i,
      a,
      u,
      f
    ]);
    return {
      states: p,
      widgetStates: h,
      minValue: Q,
      maxValue: m,
      data: b,
      activeIndex: s,
      setActiveIndex: l,
      oidValue: c
    };
  };
});
export {
  Yu as $,
  zn as A,
  C0 as B,
  Re as C,
  go as D,
  BU as E,
  g0 as F,
  xU as G,
  Ua as H,
  zh as I,
  SU as J,
  EU as K,
  wC as L,
  $0 as M,
  jn as N,
  mU as O,
  Ca as P,
  hU as Q,
  Yc as R,
  fl as S,
  Ao as T,
  Np as U,
  Lt as V,
  He as W,
  Ou as X,
  pl as Y,
  nB as Z,
  Zp as _,
  __tla,
  IA as a,
  mt as a0,
  ws as a1,
  ms as a2,
  ua as a3,
  ih as a4,
  UU as a5,
  gU as a6,
  cd as a7,
  pr as a8,
  ll as a9,
  gr as aa,
  Op as ab,
  hs as ac,
  Uu as ad,
  et as ae,
  bU as af,
  fs as ag,
  YA as ah,
  QU as ai,
  ps as aj,
  sn as ak,
  pa as al,
  Vh as am,
  le as b,
  qu as c,
  pA as d,
  RA as e,
  Es as f,
  kA as g,
  ai as h,
  hA as i,
  L as j,
  tt as k,
  pe as l,
  OA as m,
  kh as n,
  sr as o,
  Ei as p,
  ya as q,
  $e as r,
  lA as s,
  FU as t,
  KA as u,
  Br as v,
  Ie as w,
  bC as x,
  IU as y,
  CU as z
};
