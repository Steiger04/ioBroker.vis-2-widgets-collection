import { v as B, R as na, a as H, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as Ja, c as dn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as Cf } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let ms, Xn, B0, Re, uo, cU, d0, QU, Fa, Xh, yU, vU, CC, G0, ra, fU, ha, dl, Pp, Lt, Zn, He, Ru, gl, tB, Jp, zu, mt, IA, Cs, ca, nh, wU, sU, sd, fr, sl, dr, Rp, Bs, bu, et, CU, ds, YA, hU, gs, on, ga, Nh, le, Yu, pA, RA, Us, kA, oi, hA, L, tt, pe, OA, Th, ir, Fi, va, $e, lA, mU, KA, gr, Ie, yC, bU, dU;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Jc = {
    exports: {}
  }, Eo = {};
  var mf = B, wf = /* @__PURE__ */ Symbol.for("react.element"), vf = /* @__PURE__ */ Symbol.for("react.fragment"), yf = Object.prototype.hasOwnProperty, Qf = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Yc(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) yf.call(e, r) && !bf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: wf,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: Qf.current
    };
  }
  Eo.Fragment = vf;
  Eo.jsx = Yc;
  Eo.jsxs = Yc;
  Jc.exports = Eo;
  L = Jc.exports;
  const Wr = {
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
  }, hr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Ff = {
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
  function no() {
    return no = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, no.apply(null, arguments);
  }
  function Uf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Ef(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Sf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ef(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Uf(n);
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
  })(), ie = "-ms-", oo = "-moz-", CA = "-webkit-", Zc = "comm", Ya = "rule", Za = "decl", xf = "@import", qc = "@keyframes", If = "@layer", Hf = Math.abs, So = String.fromCharCode, Tf = Object.assign;
  function Lf(A, e) {
    return te(A, 0) ^ 45 ? (((e << 2 ^ te(A, 0)) << 2 ^ te(A, 1)) << 2 ^ te(A, 2)) << 2 ^ te(A, 3) : 0;
  }
  function Au(A) {
    return A.trim();
  }
  function kf(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function mA(A, e, t) {
    return A.replace(e, t);
  }
  function oa(A, e) {
    return A.indexOf(e);
  }
  function te(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function Xr(A, e, t) {
    return A.slice(e, t);
  }
  function Oe(A) {
    return A.length;
  }
  function qa(A) {
    return A.length;
  }
  function fn(A, e) {
    return e.push(A), A;
  }
  function Rf(A, e) {
    return A.map(e).join("");
  }
  var xo = 1, or = 1, eu = 0, ge = 0, VA = 0, ur = "";
  function Io(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: xo,
      column: or,
      length: i,
      return: ""
    };
  }
  function Cr(A, e) {
    return Tf(Io("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Kf() {
    return VA;
  }
  function Of() {
    return VA = ge > 0 ? te(ur, --ge) : 0, or--, VA === 10 && (or = 1, xo--), VA;
  }
  function Ce() {
    return VA = ge < eu ? te(ur, ge++) : 0, or++, VA === 10 && (or = 1, xo++), VA;
  }
  function Ve() {
    return te(ur, ge);
  }
  function jn() {
    return ge;
  }
  function An(A, e) {
    return Xr(ur, A, e);
  }
  function jr(A) {
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
  function tu(A) {
    return xo = or = 1, eu = Oe(ur = A), ge = 0, [];
  }
  function ru(A) {
    return ur = "", A;
  }
  function zn(A) {
    return Au(An(ge - 1, ia(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function Df(A) {
    for (; (VA = Ve()) && VA < 33; ) Ce();
    return jr(A) > 2 || jr(VA) > 3 ? "" : " ";
  }
  function Mf(A, e) {
    for (; --e && Ce() && !(VA < 48 || VA > 102 || VA > 57 && VA < 65 || VA > 70 && VA < 97); ) ;
    return An(A, jn() + (e < 6 && Ve() == 32 && Ce() == 32));
  }
  function ia(A) {
    for (; Ce(); ) switch (VA) {
      case A:
        return ge;
      case 34:
      case 39:
        A !== 34 && A !== 39 && ia(VA);
        break;
      case 40:
        A === 41 && ia(A);
        break;
      case 92:
        Ce();
        break;
    }
    return ge;
  }
  function Pf(A, e) {
    for (; Ce() && A + VA !== 57; ) if (A + VA === 84 && Ve() === 47) break;
    return "/*" + An(e, ge - 1) + "*" + So(A === 47 ? A : Ce());
  }
  function _f(A) {
    for (; !jr(Ve()); ) Ce();
    return An(A, ge);
  }
  function Nf(A) {
    return ru(Jn("", null, null, null, [
      ""
    ], A = tu(A), 0, [
      0
    ], A));
  }
  function Jn(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, f = 0, p = 0, C = 1, Q = 1, m = 1, b = 0, w = "", v = n, U = o, h = r, S = w; Q; ) switch (p = b, b = Ce()) {
      case 40:
        if (p != 108 && te(S, u - 1) == 58) {
          oa(S += mA(zn(b), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += zn(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Df(p);
        break;
      case 92:
        S += Mf(jn() - 1, 7);
        continue;
      case 47:
        switch (Ve()) {
          case 42:
          case 47:
            fn(Gf(Pf(Ce(), jn()), e, t), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * C:
        a[l++] = Oe(S) * m;
      case 125 * C:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            Q = 0;
          case 59 + c:
            m == -1 && (S = mA(S, /\f/g, "")), f > 0 && Oe(S) - u && fn(f > 32 ? js(S + ";", r, t, u - 1) : js(mA(S, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (fn(h = Xs(S, e, t, l, c, n, a, w, v = [], U = [], u), o), b === 123) if (c === 0) Jn(S, e, h, h, v, o, u, a, U);
            else switch (d === 99 && te(S, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                Jn(A, h, h, r && fn(Xs(A, h, h, 0, 0, n, a, w, n, v = [], u), U), n, U, u, a, r ? v : U);
                break;
              default:
                Jn(S, h, h, h, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, C = m = 1, w = S = "", u = i;
        break;
      case 58:
        u = 1 + Oe(S), f = p;
      default:
        if (C < 1) {
          if (b == 123) --C;
          else if (b == 125 && C++ == 0 && Of() == 125) continue;
        }
        switch (S += So(b), b * C) {
          case 38:
            m = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[l++] = (Oe(S) - 1) * m, m = 1;
            break;
          case 64:
            Ve() === 45 && (S += zn(Ce())), d = Ve(), c = u = Oe(w = S += _f(jn())), b++;
            break;
          case 45:
            p === 45 && Oe(S) == 2 && (C = 0);
        }
    }
    return o;
  }
  function Xs(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], f = qa(d), p = 0, C = 0, Q = 0; p < r; ++p) for (var m = 0, b = Xr(A, u + 1, u = Hf(C = i[p])), w = A; m < f; ++m) (w = Au(C > 0 ? d[m] + " " + b : mA(b, /&\f/g, d[m]))) && (s[Q++] = w);
    return Io(A, e, t, n === 0 ? Ya : a, s, l, c);
  }
  function Gf(A, e, t) {
    return Io(A, e, t, Zc, So(Kf()), Xr(A, 2, -2), 0);
  }
  function js(A, e, t, r) {
    return Io(A, e, t, Za, Xr(A, 0, r), Xr(A, r + 1, -1), r);
  }
  function tr(A, e) {
    for (var t = "", r = qa(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Vf(A, e, t, r) {
    switch (A.type) {
      case If:
        if (A.children.length) break;
      case xf:
      case Za:
        return A.return = A.return || A.value;
      case Zc:
        return "";
      case qc:
        return A.return = A.value + "{" + tr(A.children, r) + "}";
      case Ya:
        A.value = A.props.join(",");
    }
    return Oe(t = tr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function $f(A) {
    var e = qa(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function Wf(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function nu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Xf = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = Ve(), n === 38 && o === 12 && (t[r] = 1), !jr(o); ) Ce();
    return An(e, ge);
  }, jf = function(e, t) {
    var r = -1, n = 44;
    do
      switch (jr(n)) {
        case 0:
          n === 38 && Ve() === 12 && (t[r] = 1), e[r] += Xf(ge - 1, t, r);
          break;
        case 2:
          e[r] += zn(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = Ve() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += So(n);
      }
    while (n = Ce());
    return e;
  }, zf = function(e, t) {
    return ru(jf(tu(e), t));
  }, zs = /* @__PURE__ */ new WeakMap(), Jf = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !zs.get(r)) && !n) {
        zs.set(e, true);
        for (var o = [], i = zf(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, Yf = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function ou(A, e) {
    switch (Lf(A, e)) {
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
        return CA + A + oo + A + ie + A + A;
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
            return mA(A, /(.+:)(.+)-([^]+)/, "$1" + CA + "$2-$3$1" + oo + (te(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~oa(A, "stretch") ? ou(mA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (te(A, e + 1) !== 115) break;
      case 6444:
        switch (te(A, Oe(A) - 3 - (~oa(A, "!important") && 10))) {
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
  var Zf = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case Za:
        e.return = ou(e.value, e.length);
        break;
      case qc:
        return tr([
          Cr(e, {
            value: mA(e.value, "@", "@" + CA)
          })
        ], n);
      case Ya:
        if (e.length) return Rf(e.props, function(o) {
          switch (kf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return tr([
                Cr(e, {
                  props: [
                    mA(o, /:(read-\w+)/, ":" + oo + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return tr([
                Cr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ":" + CA + "input-$1")
                  ]
                }),
                Cr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ":" + oo + "$1")
                  ]
                }),
                Cr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ie + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, qf = [
    Zf
  ], Ag = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(C) {
        var Q = C.getAttribute("data-emotion");
        Q.indexOf(" ") !== -1 && (document.head.appendChild(C), C.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || qf, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(C) {
      for (var Q = C.getAttribute("data-emotion").split(" "), m = 1; m < Q.length; m++) o[Q[m]] = true;
      a.push(C);
    });
    var s, l = [
      Jf,
      Yf
    ];
    {
      var c, u = [
        Vf,
        Wf(function(C) {
          c.insert(C);
        })
      ], d = $f(l.concat(n, u)), f = function(Q) {
        return tr(Nf(Q), d);
      };
      s = function(Q, m, b, w) {
        c = b, f(Q ? Q + "{" + m.styles + "}" : m.styles), w && (p.inserted[m.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new Sf({
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
  }, iu = {
    exports: {}
  }, vA = {};
  var ZA = typeof Symbol == "function" && Symbol.for, As = ZA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, es = ZA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Ho = ZA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, To = ZA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Lo = ZA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ko = ZA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ro = ZA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ts = ZA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Ko = ZA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Oo = ZA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Do = ZA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, eg = ZA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Mo = ZA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Po = ZA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, tg = ZA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, rg = ZA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ng = ZA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, og = ZA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function me(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case As:
          switch (A = A.type, A) {
            case ts:
            case Ko:
            case Ho:
            case Lo:
            case To:
            case Do:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Ro:
                case Oo:
                case Po:
                case Mo:
                case ko:
                  return A;
                default:
                  return e;
              }
          }
        case es:
          return e;
      }
    }
  }
  function au(A) {
    return me(A) === Ko;
  }
  vA.AsyncMode = ts;
  vA.ConcurrentMode = Ko;
  vA.ContextConsumer = Ro;
  vA.ContextProvider = ko;
  vA.Element = As;
  vA.ForwardRef = Oo;
  vA.Fragment = Ho;
  vA.Lazy = Po;
  vA.Memo = Mo;
  vA.Portal = es;
  vA.Profiler = Lo;
  vA.StrictMode = To;
  vA.Suspense = Do;
  vA.isAsyncMode = function(A) {
    return au(A) || me(A) === ts;
  };
  vA.isConcurrentMode = au;
  vA.isContextConsumer = function(A) {
    return me(A) === Ro;
  };
  vA.isContextProvider = function(A) {
    return me(A) === ko;
  };
  vA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === As;
  };
  vA.isForwardRef = function(A) {
    return me(A) === Oo;
  };
  vA.isFragment = function(A) {
    return me(A) === Ho;
  };
  vA.isLazy = function(A) {
    return me(A) === Po;
  };
  vA.isMemo = function(A) {
    return me(A) === Mo;
  };
  vA.isPortal = function(A) {
    return me(A) === es;
  };
  vA.isProfiler = function(A) {
    return me(A) === Lo;
  };
  vA.isStrictMode = function(A) {
    return me(A) === To;
  };
  vA.isSuspense = function(A) {
    return me(A) === Do;
  };
  vA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Ho || A === Ko || A === Lo || A === To || A === Do || A === eg || typeof A == "object" && A !== null && (A.$$typeof === Po || A.$$typeof === Mo || A.$$typeof === ko || A.$$typeof === Ro || A.$$typeof === Oo || A.$$typeof === rg || A.$$typeof === ng || A.$$typeof === og || A.$$typeof === tg);
  };
  vA.typeOf = me;
  iu.exports = vA;
  var ig = iu.exports, su = ig, ag = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, sg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, lu = {};
  lu[su.ForwardRef] = ag;
  lu[su.Memo] = sg;
  var lg = true;
  function cu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var rs = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || lg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, ns = function(e, t, r) {
    rs(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function cg(A) {
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
  var ug = {
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
  }, dg = /[A-Z]|^ms/g, fg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, uu = function(e) {
    return e.charCodeAt(1) === 45;
  }, Js = function(e) {
    return e != null && typeof e != "boolean";
  }, yi = nu(function(A) {
    return uu(A) ? A : A.replace(dg, "-$&").toLowerCase();
  }), Ys = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(fg, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return ug[e] !== 1 && !uu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function zr(A, e, t) {
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
        return gg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = De, l = t(A);
          return De = s, zr(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function gg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += zr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Js(a) && (r += yi(o) + ":" + Ys(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) Js(i[s]) && (r += yi(o) + ":" + Ys(o, i[s]) + ";");
      else {
        var l = zr(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += yi(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var Zs = /label:\s*([^\s;{]+)\s*(;|$)/g, De;
  function en(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    De = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += zr(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += zr(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    Zs.lastIndex = 0;
    for (var l = "", c; (c = Zs.exec(n)) !== null; ) l += "-" + c[1];
    var u = cg(n) + l;
    return {
      name: u,
      styles: n,
      next: De
    };
  }
  var pg = function(e) {
    return e();
  }, du = na.useInsertionEffect ? na.useInsertionEffect : false, fu = du || pg, qs = du || B.useLayoutEffect, gu = B.createContext(typeof HTMLElement < "u" ? Ag({
    key: "css"
  }) : null);
  gu.Provider;
  var os = function(e) {
    return B.forwardRef(function(t, r) {
      var n = B.useContext(gu);
      return e(t, n, r);
    });
  }, tn = B.createContext({}), is = {}.hasOwnProperty, aa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Bg = function(e, t) {
    var r = {};
    for (var n in t) is.call(t, n) && (r[n] = t[n]);
    return r[aa] = e, r;
  }, hg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return rs(t, r, n), fu(function() {
      return ns(t, r, n);
    }), null;
  }, Cg = os(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[aa], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = cu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = en(o, void 0, B.useContext(tn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) is.call(A, l) && l !== "css" && l !== aa && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), B.createElement(B.Fragment, null, B.createElement(hg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), B.createElement(n, s));
  }), mg = Cg, Al = function(e, t) {
    var r = arguments;
    if (t == null || !is.call(t, "css")) return B.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = mg, o[1] = Bg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return B.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(Al || (Al = {}));
  var wg = os(function(A, e) {
    var t = A.styles, r = en([
      t
    ], void 0, B.useContext(tn)), n = B.useRef();
    return qs(function() {
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
    ]), qs(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && ns(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function as() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return en(e);
  }
  function rn() {
    var A = as.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var vg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yg = nu(function(A) {
    return vg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Qg = yg, bg = function(e) {
    return e !== "theme";
  }, el = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Qg : bg;
  }, tl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Fg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return rs(t, r, n), fu(function() {
      return ns(t, r, n);
    }), null;
  }, Ug = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = tl(e, t, r), s = a || el(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var f = c.length, p = 1; p < f; p++) u.push(c[p], d[p]);
      }
      var C = os(function(Q, m, b) {
        var w = l && Q.as || n, v = "", U = [], h = Q;
        if (Q.theme == null) {
          h = {};
          for (var S in Q) h[S] = Q[S];
          h.theme = B.useContext(tn);
        }
        typeof Q.className == "string" ? v = cu(m.registered, U, Q.className) : Q.className != null && (v = Q.className + " ");
        var I = en(u.concat(U), m.registered, h);
        v += m.key + "-" + I.name, i !== void 0 && (v += " " + i);
        var T = l && a === void 0 ? el(w) : s, g = {};
        for (var x in Q) l && x === "as" || T(x) && (g[x] = Q[x]);
        return g.className = v, b && (g.ref = b), B.createElement(B.Fragment, null, B.createElement(Fg, {
          cache: m,
          serialized: I,
          isStringTag: typeof w == "string"
        }), B.createElement(w, g));
      });
      return C.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", C.defaultProps = e.defaultProps, C.__emotion_real = C, C.__emotion_base = n, C.__emotion_styles = u, C.__emotion_forwardProp = a, Object.defineProperty(C, "toString", {
        value: function() {
          return "." + i;
        }
      }), C.withComponent = function(Q, m) {
        var b = A(Q, no({}, t, m, {
          shouldForwardProp: tl(C, m, true)
        }));
        return b.apply(void 0, u);
      }, C;
    };
  }, Eg = [
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
  ], sa = Ug.bind(null);
  Eg.forEach(function(A) {
    sa[A] = sa(A);
  });
  function Sg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function pu(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Sg(n) ? t : n) : e;
    return L.jsx(wg, {
      styles: r
    });
  }
  function Bu(A, e) {
    return sa(A, e);
  }
  function xg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const rl = [];
  function gt(A) {
    return rl[0] = A, en(rl);
  }
  var hu = {
    exports: {}
  }, UA = {};
  var ss = /* @__PURE__ */ Symbol.for("react.transitional.element"), ls = /* @__PURE__ */ Symbol.for("react.portal"), _o = /* @__PURE__ */ Symbol.for("react.fragment"), No = /* @__PURE__ */ Symbol.for("react.strict_mode"), Go = /* @__PURE__ */ Symbol.for("react.profiler"), Vo = /* @__PURE__ */ Symbol.for("react.consumer"), $o = /* @__PURE__ */ Symbol.for("react.context"), Wo = /* @__PURE__ */ Symbol.for("react.forward_ref"), Xo = /* @__PURE__ */ Symbol.for("react.suspense"), jo = /* @__PURE__ */ Symbol.for("react.suspense_list"), zo = /* @__PURE__ */ Symbol.for("react.memo"), Jo = /* @__PURE__ */ Symbol.for("react.lazy"), Ig = /* @__PURE__ */ Symbol.for("react.view_transition"), Hg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case ss:
          switch (A = A.type, A) {
            case _o:
            case Go:
            case No:
            case Xo:
            case jo:
            case Ig:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case $o:
                case Wo:
                case Jo:
                case zo:
                  return A;
                case Vo:
                  return A;
                default:
                  return e;
              }
          }
        case ls:
          return e;
      }
    }
  }
  UA.ContextConsumer = Vo;
  UA.ContextProvider = $o;
  UA.Element = ss;
  UA.ForwardRef = Wo;
  UA.Fragment = _o;
  UA.Lazy = Jo;
  UA.Memo = zo;
  UA.Portal = ls;
  UA.Profiler = Go;
  UA.StrictMode = No;
  UA.Suspense = Xo;
  UA.SuspenseList = jo;
  UA.isContextConsumer = function(A) {
    return Ee(A) === Vo;
  };
  UA.isContextProvider = function(A) {
    return Ee(A) === $o;
  };
  UA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === ss;
  };
  UA.isForwardRef = function(A) {
    return Ee(A) === Wo;
  };
  UA.isFragment = function(A) {
    return Ee(A) === _o;
  };
  UA.isLazy = function(A) {
    return Ee(A) === Jo;
  };
  UA.isMemo = function(A) {
    return Ee(A) === zo;
  };
  UA.isPortal = function(A) {
    return Ee(A) === ls;
  };
  UA.isProfiler = function(A) {
    return Ee(A) === Go;
  };
  UA.isStrictMode = function(A) {
    return Ee(A) === No;
  };
  UA.isSuspense = function(A) {
    return Ee(A) === Xo;
  };
  UA.isSuspenseList = function(A) {
    return Ee(A) === jo;
  };
  UA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === _o || A === Go || A === No || A === Xo || A === jo || typeof A == "object" && A !== null && (A.$$typeof === Jo || A.$$typeof === zo || A.$$typeof === $o || A.$$typeof === Vo || A.$$typeof === Wo || A.$$typeof === Hg || A.getModuleId !== void 0);
  };
  UA.typeOf = Ee;
  hu.exports = UA;
  var Cu = hu.exports;
  function _e(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function mu(A) {
    if (B.isValidElement(A) || Cu.isValidElementType(A) || !_e(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = mu(A[t]);
    }), e;
  }
  YA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return _e(A) && _e(e) && Object.keys(e).forEach((n) => {
      B.isValidElement(e[n]) || Cu.isValidElementType(e[n]) ? r[n] = e[n] : _e(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && _e(A[n]) ? r[n] = YA(A[n], e[n], t) : t.clone ? r[n] = _e(e[n]) ? mu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const Tg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Lg(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = Tg(e), i = Object.keys(o);
    function a(d) {
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t})`;
    }
    function s(d) {
      return `@media (max-width:${(typeof e[d] == "number" ? e[d] : d) - r / 100}${t})`;
    }
    function l(d, f) {
      const p = i.indexOf(f);
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t}) and (max-width:${(p !== -1 && typeof e[i[p]] == "number" ? e[i[p]] : f) - r / 100}${t})`;
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
  function nl(A, e) {
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
  function kg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Rg(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function Kg(A) {
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
  const Og = {
    borderRadius: 4
  };
  function Or(A, e) {
    return e ? YA(A, e, {
      clone: false
    }) : A;
  }
  const Yo = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, ol = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${Yo[A]}px)`
  }, Dg = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : Yo[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  et = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || ol;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || ol;
      return Object.keys(e).reduce((i, a) => {
        if (kg(o.keys, a)) {
          const s = Rg(r.containerQueries ? r : Dg, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || Yo).includes(a)) {
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
  function wu(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function la(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  hU = function(A, ...e) {
    const t = wu(A), r = [
      t,
      ...e
    ].reduce((n, o) => YA(n, o), {});
    return la(Object.keys(t), r);
  };
  function Mg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  CU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Mg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  hA = function(A) {
    if (typeof A != "string") throw new Error(At(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Zo(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function io(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Zo(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function GA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Zo(s, r) || {};
      return et(i, a, (u) => {
        let d = io(l, n, u);
        return u === d && typeof u == "string" && (d = io(l, n, `${e}${u === "default" ? "" : hA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function Pg(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const _g = {
    m: "margin",
    p: "padding"
  }, Ng = {
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
  }, il = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, Gg = Pg((A) => {
    if (A.length > 2) if (il[A]) A = il[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = _g[e], n = Ng[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), cs = [
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
  ], us = [
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
    ...cs,
    ...us
  ];
  function nn(A, e, t, r) {
    const n = Zo(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  ds = function(A) {
    return nn(A, "spacing", 8);
  };
  on = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Vg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = on(e, t), r), {});
  }
  function $g(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = Gg(t), o = Vg(n, r), i = A[t];
    return et(A, i, o);
  }
  function vu(A, e) {
    const t = ds(A.theme);
    return Object.keys(A).map((r) => $g(A, e, r, t)).reduce(Or, {});
  }
  function DA(A) {
    return vu(A, cs);
  }
  DA.propTypes = {};
  DA.filterProps = cs;
  function MA(A) {
    return vu(A, us);
  }
  MA.propTypes = {};
  MA.filterProps = us;
  function yu(A = 8, e = ds({
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
  function qo(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Or(n, e[o](r)) : n, {});
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
  const Wg = Se("border", ye), Xg = Se("borderTop", ye), jg = Se("borderRight", ye), zg = Se("borderBottom", ye), Jg = Se("borderLeft", ye), Yg = Se("borderColor"), Zg = Se("borderTopColor"), qg = Se("borderRightColor"), Ap = Se("borderBottomColor"), ep = Se("borderLeftColor"), tp = Se("outline", ye), rp = Se("outlineColor"), Ai = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = nn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: on(e, r)
      });
      return et(A, A.borderRadius, t);
    }
    return null;
  };
  Ai.propTypes = {};
  Ai.filterProps = [
    "borderRadius"
  ];
  qo(Wg, Xg, jg, zg, Jg, Yg, Zg, qg, Ap, ep, Ai, tp, rp);
  const ei = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = nn(A.theme, "spacing", 8), t = (r) => ({
        gap: on(e, r)
      });
      return et(A, A.gap, t);
    }
    return null;
  };
  ei.propTypes = {};
  ei.filterProps = [
    "gap"
  ];
  const ti = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = nn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: on(e, r)
      });
      return et(A, A.columnGap, t);
    }
    return null;
  };
  ti.propTypes = {};
  ti.filterProps = [
    "columnGap"
  ];
  const ri = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = nn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: on(e, r)
      });
      return et(A, A.rowGap, t);
    }
    return null;
  };
  ri.propTypes = {};
  ri.filterProps = [
    "rowGap"
  ];
  const np = GA({
    prop: "gridColumn"
  }), op = GA({
    prop: "gridRow"
  }), ip = GA({
    prop: "gridAutoFlow"
  }), ap = GA({
    prop: "gridAutoColumns"
  }), sp = GA({
    prop: "gridAutoRows"
  }), lp = GA({
    prop: "gridTemplateColumns"
  }), cp = GA({
    prop: "gridTemplateRows"
  }), up = GA({
    prop: "gridTemplateAreas"
  }), dp = GA({
    prop: "gridArea"
  });
  qo(ei, ti, ri, np, op, ip, ap, sp, lp, cp, up, dp);
  function rr(A, e) {
    return e === "grey" ? e : A;
  }
  const fp = GA({
    prop: "color",
    themeKey: "palette",
    transform: rr
  }), gp = GA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: rr
  }), pp = GA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: rr
  });
  qo(fp, gp, pp);
  function he(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const Bp = GA({
    prop: "width",
    transform: he
  }), fs = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || Yo[t];
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
  fs.filterProps = [
    "maxWidth"
  ];
  const hp = GA({
    prop: "minWidth",
    transform: he
  }), Cp = GA({
    prop: "height",
    transform: he
  }), mp = GA({
    prop: "maxHeight",
    transform: he
  }), wp = GA({
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
  const vp = GA({
    prop: "boxSizing"
  });
  qo(Bp, fs, hp, Cp, mp, wp, vp);
  const an = {
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
      style: Ai
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
      style: ei
    },
    rowGap: {
      style: ri
    },
    columnGap: {
      style: ti
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
      style: fs
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
  function yp(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Qp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function bp() {
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
      const d = Zo(n, l) || {};
      return u ? u(i) : et(i, r, (p) => {
        let C = io(d, c, p);
        return p === C && typeof p == "string" && (C = io(d, c, `${t}${p === "default" ? "" : hA(p)}`, p)), s === false ? C : {
          [s]: C
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? an;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = wu(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((f) => {
          const p = Qp(l[f], n);
          if (p != null) if (typeof p == "object") if (i[f]) d = Or(d, A(f, p, n, i));
          else {
            const C = et({
              theme: n
            }, p, (Q) => ({
              [f]: Q
            }));
            yp(C, p) ? d[f] = e({
              sx: p,
              theme: n,
              nested: true
            }) : d = Or(d, C);
          }
          else d = Or(d, A(f, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": nl(n, la(u, d))
        } : nl(n, la(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const ht = bp();
  ht.filterProps = [
    "sx"
  ];
  function Fp(A, e) {
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
  gs = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Lg(t), s = yu(n);
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
        ...Og,
        ...o
      }
    }, i);
    return l = Kg(l), l.applyStyles = Fp, l = e.reduce((c, u) => YA(c, u), l), l.unstable_sxConfig = {
      ...an,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return ht({
        sx: u,
        theme: this
      });
    }, l;
  };
  function Up(A) {
    return Object.keys(A).length === 0;
  }
  function ps(A = null) {
    const e = B.useContext(tn);
    return !e || Up(e) ? A : e;
  }
  const Ep = gs();
  Bs = function(A = Ep) {
    return ps(A);
  };
  function Qi(A) {
    const e = gt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Qu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = Bs(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Qi(typeof i == "function" ? i(n) : i)) : o = Qi(o)), L.jsx(pu, {
      styles: o
    });
  }
  const Sp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? an;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  bu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Sp(t);
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
  const al = (A) => A, xp = () => {
    let A = al;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = al;
      }
    };
  }, Fu = xp();
  function Uu(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = Uu(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  pA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = Uu(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Ip(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = Bu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(ht);
    return B.forwardRef(function(s, l) {
      const c = Bs(t), { className: u, component: d = "div", ...f } = bu(s);
      return L.jsx(o, {
        as: d,
        ref: l,
        className: pA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Hp = {
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
    const r = Hp[e];
    return r ? `${t}-${r}` : `${Fu.generate(A)}-${e}`;
  };
  IA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = kA(A, n, t);
    }), r;
  };
  function Eu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: gt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = gt(n.style));
    }), r;
  }
  const Tp = gs();
  function bi(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function It(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Lp(A) {
    return A ? (e, t) => t[A] : null;
  }
  function kp(A, e, t) {
    A.theme = Op(A.theme) ? t : A.theme[e] || A.theme;
  }
  function Yn(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => Yn(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? It(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? It(gt(i), t) : i;
      }
      return Su(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? It(gt(r.style), t) : r.style : t ? It(gt(r), t) : r;
  }
  function Su(A, e, t = [], r = void 0) {
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
  Rp = function(A = {}) {
    const { themeId: e, defaultTheme: t = Tp, rootShouldForwardProp: r = bi, slotShouldForwardProp: n = bi } = A;
    function o(a) {
      kp(a, e, t);
    }
    return (a, s = {}) => {
      xg(a, (h) => h.filter((S) => S !== ht));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f = Lp(Mp(c)), ...p } = s, C = l && l.startsWith("Mui") || c ? "components" : "custom", Q = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, m = d || false;
      let b = bi;
      c === "Root" || c === "root" ? b = r : c ? b = n : Dp(a) && (b = void 0);
      const w = Bu(a, {
        shouldForwardProp: b,
        label: Kp(),
        ...p
      }), v = (h) => {
        if (h.__emotion_real === h) return h;
        if (typeof h == "function") return function(I) {
          return Yn(I, h, I.theme.modularCssLayers ? C : void 0);
        };
        if (_e(h)) {
          const S = Eu(h);
          return function(T) {
            return S.variants ? Yn(T, S, T.theme.modularCssLayers ? C : void 0) : T.theme.modularCssLayers ? It(S.style, C) : S.style;
          };
        }
        return h;
      }, U = (...h) => {
        const S = [], I = h.map(v), T = [];
        if (S.push(o), l && f && T.push(function(K) {
          var _a2, _b2;
          const D = (_b2 = (_a2 = K.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!D) return null;
          const M = {};
          for (const N in D) M[N] = Yn(K, D[N], K.theme.modularCssLayers ? "theme" : void 0);
          return f(K, M);
        }), l && !Q && T.push(function(K) {
          var _a2, _b2, _c2;
          const D = (_c2 = (_b2 = (_a2 = K.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return D ? Su(K, D, [], K.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || T.push(ht), Array.isArray(I[0])) {
          const k = I.shift(), K = new Array(S.length).fill(""), $ = new Array(T.length).fill("");
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
          ...T
        ], x = w(...g);
        return a.muiName && (x.muiName = a.muiName), x;
      };
      return w.withConfig && (U.withConfig = w.withConfig), U;
    };
  };
  function Kp(A, e) {
    return void 0;
  }
  function Op(A) {
    for (const e in A) return false;
    return true;
  }
  function Dp(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Mp(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  ca = function(A, e) {
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
            t[n][s] = ca(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  tt = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
  Pp = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function hs(A, e = 0, t = 1) {
    return Pp(A, e, t);
  }
  function _p(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Ct(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Ct(_p(A));
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
  const Np = (A) => {
    const e = Ct(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Er = (A, e) => {
    try {
      return Np(A);
    } catch {
      return A;
    }
  };
  function ni(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function xu(A) {
    A = Ct(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), ni({
      type: a,
      values: s
    });
  }
  function ua(A) {
    A = Ct(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Ct(xu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function Gp(A, e) {
    const t = ua(A), r = ua(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  ir = function(A, e) {
    return A = Ct(A), e = hs(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, ni(A);
  };
  function gn(A, e, t) {
    try {
      return ir(A, e);
    } catch {
      return A;
    }
  }
  Cs = function(A, e) {
    if (A = Ct(A), e = hs(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return ni(A);
  };
  function bA(A, e, t) {
    try {
      return Cs(A, e);
    } catch {
      return A;
    }
  }
  ms = function(A, e) {
    if (A = Ct(A), e = hs(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return ni(A);
  };
  function FA(A, e, t) {
    try {
      return ms(A, e);
    } catch {
      return A;
    }
  }
  function Vp(A, e = 0.15) {
    return ua(A) > 0.5 ? Cs(A, e) : ms(A, e);
  }
  function pn(A, e, t) {
    try {
      return Vp(A, e);
    } catch {
      return A;
    }
  }
  sl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Iu(A, e = 166) {
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
  Fi = function(A, e) {
    var _a2, _b2, _c2;
    return B.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  He = function(A) {
    return A && A.ownerDocument || document;
  };
  function rt(A) {
    return He(A).defaultView || window;
  }
  function ll(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let cl = 0;
  function $p(A) {
    const [e, t] = B.useState(A), r = A || e;
    return B.useEffect(() => {
      e == null && (cl += 1, t(`mui-${cl}`));
    }, [
      e
    ]), r;
  }
  const Wp = {
    ...na
  }, ul = Wp.useId;
  oi = function(A) {
    if (ul !== void 0) {
      const e = ul();
      return A ?? e;
    }
    return $p(A);
  };
  dl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
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
  const fl = {};
  function Hu(A, e) {
    const t = B.useRef(fl);
    return t.current === fl && (t.current = A(e)), t;
  }
  const Xp = [];
  function jp(A) {
    B.useEffect(A, Xp);
  }
  class ws {
    static create() {
      return new ws();
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
  function Tu() {
    const A = Hu(ws.create).current;
    return jp(A.disposeEffect), A;
  }
  gl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Lu(A = window) {
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
  function zp(A) {
    return typeof A == "string";
  }
  function ku(A, e, t) {
    return A === void 0 || zp(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Ru = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function pl(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Ku(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, C = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (C.className = f), Object.keys(p).length > 0 && (C.style = p), {
        props: C,
        internalRef: void 0
      };
    }
    const i = Ru({
      ...n,
      ...r
    }), a = pl(r), s = pl(n), l = e(i), c = pA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
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
  function Ou(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  Jp = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Ou(t, r), { props: a, internalRef: s } = Ku({
      ...o,
      externalSlotProps: i
    }), l = pe(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return ku(e, {
      ...a,
      ref: l
    }, r);
  };
  function sn(A) {
    var _a2;
    return parseInt(B.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const Du = B.createContext(null);
  function vs() {
    return B.useContext(Du);
  }
  const Yp = typeof Symbol == "function" && Symbol.for, Zp = Yp ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function qp(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function AB(A) {
    const { children: e, theme: t } = A, r = vs(), n = B.useMemo(() => {
      const o = r === null ? {
        ...t
      } : qp(r, t);
      return o != null && (o[Zp] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(Du.Provider, {
      value: n,
      children: e
    });
  }
  const Mu = B.createContext();
  function eB({ value: A, ...e }) {
    return L.jsx(Mu.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Pu;
  tB = () => B.useContext(Mu) ?? false;
  Pu = B.createContext(void 0);
  function rB({ value: A, children: e }) {
    return L.jsx(Pu.Provider, {
      value: A,
      children: e
    });
  }
  function nB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? ca(n.defaultProps, r) : !n.styleOverrides && !n.variants ? ca(n, r) : r;
  }
  function oB({ props: A, name: e }) {
    const t = B.useContext(Pu);
    return nB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function iB(A) {
    const e = ps(), t = oi() || "", { modularCssLayers: r } = A;
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
    ]), n ? L.jsx(Qu, {
      styles: n
    }) : null;
  }
  const Bl = {};
  function hl(A, e, t, r = false) {
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
  function _u(A) {
    const { children: e, theme: t, themeId: r } = A, n = ps(Bl), o = vs() || Bl, i = hl(r, n, t), a = hl(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = iB(i);
    return L.jsx(AB, {
      theme: a,
      children: L.jsx(tn.Provider, {
        value: i,
        children: L.jsx(eB, {
          value: s,
          children: L.jsxs(rB, {
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
  const Cl = {
    theme: void 0
  };
  function aB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (Cl.theme = n.theme, o = Eu(A(Cl)), e = o, t = n.theme), o;
    };
  }
  const ys = "mode", Qs = "color-scheme", sB = "data-color-scheme";
  function lB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = ys, colorSchemeStorageKey: o = Qs, attribute: i = sB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
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
  function cB() {
  }
  const uB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return cB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function Ui() {
  }
  function ml(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Nu(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function dB(A) {
    return Nu(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function fB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = ys, colorSchemeStorageKey: i = Qs, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = uB, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = B.useMemo(() => s == null ? void 0 : s({
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
    ]), [C, Q] = B.useState(() => {
      const I = (d == null ? void 0 : d.get(e)) || e, T = (f == null ? void 0 : f.get(t)) || t, g = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: I,
        systemMode: ml(I),
        lightColorScheme: T,
        darkColorScheme: g
      };
    }), [m, b] = B.useState(l || !u);
    B.useEffect(() => {
      b(true);
    }, []);
    const w = dB(C), v = B.useCallback((I) => {
      Q((T) => {
        if (I === T.mode) return T;
        const g = I ?? e;
        return d == null ? void 0 : d.set(g), {
          ...T,
          mode: g,
          systemMode: ml(g)
        };
      });
    }, [
      d,
      e
    ]), U = B.useCallback((I) => {
      I ? typeof I == "string" ? I && !c.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : Q((T) => {
        const g = {
          ...T
        };
        return Nu(T, (x) => {
          x === "light" && (f == null ? void 0 : f.set(I), g.lightColorScheme = I), x === "dark" && (p == null ? void 0 : p.set(I), g.darkColorScheme = I);
        }), g;
      }) : Q((T) => {
        const g = {
          ...T
        }, x = I.light === null ? t : I.light, k = I.dark === null ? r : I.dark;
        return x && (c.includes(x) ? (g.lightColorScheme = x, f == null ? void 0 : f.set(x)) : console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`)), k && (c.includes(k) ? (g.darkColorScheme = k, p == null ? void 0 : p.set(k)) : console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`)), g;
      }) : Q((T) => (f == null ? void 0 : f.set(t), p == null ? void 0 : p.set(r), {
        ...T,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      p,
      t,
      r
    ]), h = B.useCallback((I) => {
      C.mode === "system" && Q((T) => {
        const g = (I == null ? void 0 : I.matches) ? "dark" : "light";
        return T.systemMode === g ? T : {
          ...T,
          systemMode: g
        };
      });
    }, [
      C.mode
    ]), S = B.useRef(h);
    return S.current = h, B.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const I = (...g) => S.current(...g), T = window.matchMedia("(prefers-color-scheme: dark)");
      return T.addListener(I), I(T), () => {
        T.removeListener(I);
      };
    }, [
      u
    ]), B.useEffect(() => {
      if (u) {
        const I = (d == null ? void 0 : d.subscribe((x) => {
          (!x || [
            "light",
            "dark",
            "system"
          ].includes(x)) && v(x || e);
        })) || Ui, T = (f == null ? void 0 : f.subscribe((x) => {
          (!x || c.match(x)) && U({
            light: x
          });
        })) || Ui, g = (p == null ? void 0 : p.subscribe((x) => {
          (!x || c.match(x)) && U({
            dark: x
          });
        })) || Ui;
        return () => {
          I(), T(), g();
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
      p
    ]), {
      ...C,
      mode: m ? C.mode : void 0,
      systemMode: m ? C.systemMode : void 0,
      colorScheme: m ? w : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const gB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function pB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = ys, colorSchemeStorageKey: n = Qs, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
      const { children: b, theme: w, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: h = o, storageManager: S, storageWindow: I = typeof window > "u" ? void 0 : window, documentNode: T = typeof document > "u" ? void 0 : document, colorSchemeNode: g = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: x = false, disableStyleSheetGeneration: k = false, defaultMode: K = "system", noSsr: $ } = m, D = B.useRef(false), M = vs(), N = B.useContext(l), q = !!N && !x, P = B.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), j = P[e], eA = j || P, { colorSchemes: nA = u, components: R = d, cssVarPrefix: W } = eA, V = Object.keys(nA).filter((gA) => !!nA[gA]).join(","), J = B.useMemo(() => V.split(","), [
        V
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, tA = nA[dA] && nA[iA] ? K : ((_b2 = (_a2 = nA[eA.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = eA.palette) == null ? void 0 : _c2.mode), { mode: z, setMode: oA, systemMode: aA, lightColorScheme: y, darkColorScheme: E, colorScheme: F, setColorScheme: _ } = fB({
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
        if (h && D.current && T) {
          const PA = T.createElement("style");
          PA.appendChild(T.createTextNode(gB)), T.head.appendChild(PA), window.getComputedStyle(T.body), gA = setTimeout(() => {
            T.head.removeChild(PA);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        G,
        h,
        T
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
          L.jsx(_u, {
            themeId: j ? e : void 0,
            theme: sA,
            children: b
          }),
          AA && L.jsx(pu, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return q ? qA : L.jsx(l.Provider, {
        value: fA,
        children: qA
      });
    }
    const p = typeof i == "string" ? i : i.light, C = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => lB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: C,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function BB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const wl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, hB = (A, e, t) => {
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
  }, CB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function Ei(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return hB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = CB(a, s);
        Object.assign(n, {
          [c]: u
        }), wl(o, a, `var(${c})`, l), wl(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function mB(A, e = {}) {
    const { getSelector: t = Q, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = Ei(s, e);
    let d = u;
    const f = {}, { [a]: p, ...C } = o;
    if (Object.entries(C || {}).forEach(([w, v]) => {
      const { vars: U, css: h, varsWithDefaults: S } = Ei(v, e);
      d = YA(d, S), f[w] = {
        css: h,
        vars: U
      };
    }), p) {
      const { css: w, vars: v, varsWithDefaults: U } = Ei(p, e);
      d = YA(d, U), f[a] = {
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
        function U(I, T) {
          Object.keys(T).length && w.push(typeof I == "string" ? {
            [I]: {
              ...T
            }
          } : I);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: h, ...S } = f;
        if (h) {
          const { css: I } = h, T = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, g = !r && T ? {
            colorScheme: T,
            ...I
          } : {
            ...I
          };
          U(t(v, {
            ...g
          }), g);
        }
        return Object.entries(S).forEach(([I, { css: T }]) => {
          var _a3, _b3;
          const g = (_b3 = (_a3 = o[I]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, x = !r && g ? {
            colorScheme: g,
            ...T
          } : {
            ...T
          };
          U(t(I, {
            ...x
          }), x);
        }), w;
      }
    };
  }
  function wB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Gu() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: Wr.white,
        default: Wr.white
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
  const vB = Gu();
  function Vu() {
    return {
      text: {
        primary: Wr.white,
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
        active: Wr.white,
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
  const vl = Vu();
  function yl(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = ms(A.main, n) : e === "dark" && (A.dark = Cs(A.main, o)));
  }
  function yB(A = "light") {
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
  function QB(A = "light") {
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
  function bB(A = "light") {
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
  function FB(A = "light") {
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
  function UB(A = "light") {
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
  function EB(A = "light") {
    return A === "dark" ? {
      main: hr[400],
      light: hr[300],
      dark: hr[700]
    } : {
      main: "#ed6c02",
      light: hr[500],
      dark: hr[900]
    };
  }
  function bs(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || yB(e), i = A.secondary || QB(e), a = A.error || bB(e), s = A.info || FB(e), l = A.success || UB(e), c = A.warning || EB(e);
    function u(C) {
      return Gp(C, vl.text.primary) >= t ? vl.text.primary : vB.text.primary;
    }
    const d = ({ color: C, name: Q, mainShade: m = 500, lightShade: b = 300, darkShade: w = 700 }) => {
      if (C = {
        ...C
      }, !C.main && C[m] && (C.main = C[m]), !C.hasOwnProperty("main")) throw new Error(At(11, Q ? ` (${Q})` : "", m));
      if (typeof C.main != "string") throw new Error(At(12, Q ? ` (${Q})` : "", JSON.stringify(C.main)));
      return yl(C, "light", b, r), yl(C, "dark", w, r), C.contrastText || (C.contrastText = u(C.main)), C;
    };
    let f;
    return e === "light" ? f = Gu() : e === "dark" && (f = Vu()), YA({
      common: {
        ...Wr
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
      grey: Ff,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...f
    }, n);
  }
  function SB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function xB(A, e) {
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
  function IB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const Ql = {
    textTransform: "uppercase"
  }, bl = '"Roboto", "Helvetica", "Arial", sans-serif';
  function $u(A, e) {
    const { fontFamily: t = bl, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, f = c || ((Q) => `${Q / s * d}rem`), p = (Q, m, b, w, v) => ({
      fontFamily: t,
      fontWeight: Q,
      fontSize: f(m),
      lineHeight: b,
      ...t === bl ? {
        letterSpacing: `${IB(w / m)}em`
      } : {},
      ...v,
      ...l
    }), C = {
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
      button: p(i, 14, 1.75, 0.4, Ql),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, Ql),
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
      ...C
    }, u, {
      clone: false
    });
  }
  const HB = 0.2, TB = 0.14, LB = 0.12;
  function TA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${HB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${TB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${LB})`
    ].join(",");
  }
  const kB = [
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
  ], RB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, KB = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Fl(A) {
    return `${Math.round(A)}ms`;
  }
  function OB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function DB(A) {
    const e = {
      ...RB,
      ...A.easing
    }, t = {
      ...KB,
      ...A.duration
    };
    return {
      getAutoHeightDuration: OB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : Fl(i)} ${a} ${typeof s == "string" ? s : Fl(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const MB = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function PB(A) {
    return _e(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Wu(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !PB(a) || i.startsWith("unstable_") ? delete r[i] : _e(a) && (r[i] = {
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
  function da(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(At(20));
    const c = bs(o), u = gs(A);
    let d = YA(u, {
      mixins: xB(u.breakpoints, r),
      palette: c,
      shadows: kB.slice(),
      typography: $u(c, a),
      transitions: DB(i),
      zIndex: {
        ...MB
      }
    });
    return d = YA(d, l), d = e.reduce((f, p) => YA(f, p), d), d.unstable_sxConfig = {
      ...an,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(p) {
      return ht({
        sx: p,
        theme: this
      });
    }, d.toRuntimeSource = Wu, d;
  }
  function fa(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const _B = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = fa(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function Xu(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function ju(A) {
    return A === "dark" ? _B : [];
  }
  function NB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = bs(e);
    return {
      palette: o,
      opacity: {
        ...Xu(o.mode),
        ...t
      },
      overlays: r || ju(o.mode),
      ...n
    };
  }
  function GB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const VB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], $B = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return VB(A.cssVarPrefix).forEach((a) => {
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
  function WB(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function O(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Sr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : xu(A);
  }
  function ze(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Er(Sr(A[e])));
  }
  function XB(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Le = (A) => {
    try {
      return A();
    } catch {
    }
  }, jB = (A = "mui") => BB(A);
  function Si(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = NB({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = da({
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
        ...Xu(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || ju(n)
    }, i;
  }
  function zB(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = GB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = jB(o), { [u]: f, light: p, dark: C, ...Q } = t, m = {
      ...Q
    };
    let b = f;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (b = true), !b) throw new Error(At(21, u));
    const w = Si(m, b, l, u);
    p && !m.light && Si(m, p, void 0, "light"), C && !m.dark && Si(m, C, void 0, "dark");
    let v = {
      defaultColorScheme: u,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: m,
      font: {
        ...SB(w.typography),
        ...w.font
      },
      spacing: XB(l.spacing)
    };
    Object.keys(v.colorSchemes).forEach((T) => {
      const g = v.colorSchemes[T].palette, x = (k) => {
        const K = k.split("-"), $ = K[1], D = K[2];
        return d(k, g[$][D]);
      };
      if (g.mode === "light" && (O(g.common, "background", "#fff"), O(g.common, "onBackground", "#000")), g.mode === "dark" && (O(g.common, "background", "#000"), O(g.common, "onBackground", "#fff")), WB(g, [
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
        const k = pn(g.background.default, 0.8);
        O(g.SnackbarContent, "bg", k), O(g.SnackbarContent, "color", Le(() => g.getContrastText(k))), O(g.SpeedDialAction, "fabHoverBg", pn(g.background.paper, 0.15)), O(g.StepConnector, "border", x("palette-grey-400")), O(g.StepContent, "border", x("palette-grey-400")), O(g.Switch, "defaultColor", x("palette-common-white")), O(g.Switch, "defaultDisabledColor", x("palette-grey-100")), O(g.Switch, "primaryDisabledColor", FA(g.primary.main, 0.62)), O(g.Switch, "secondaryDisabledColor", FA(g.secondary.main, 0.62)), O(g.Switch, "errorDisabledColor", FA(g.error.main, 0.62)), O(g.Switch, "infoDisabledColor", FA(g.info.main, 0.62)), O(g.Switch, "successDisabledColor", FA(g.success.main, 0.62)), O(g.Switch, "warningDisabledColor", FA(g.warning.main, 0.62)), O(g.TableCell, "border", FA(gn(g.divider, 1), 0.88)), O(g.Tooltip, "bg", gn(g.grey[700], 0.92));
      }
      if (g.mode === "dark") {
        O(g.Alert, "errorColor", FA(g.error.light, 0.6)), O(g.Alert, "infoColor", FA(g.info.light, 0.6)), O(g.Alert, "successColor", FA(g.success.light, 0.6)), O(g.Alert, "warningColor", FA(g.warning.light, 0.6)), O(g.Alert, "errorFilledBg", x("palette-error-dark")), O(g.Alert, "infoFilledBg", x("palette-info-dark")), O(g.Alert, "successFilledBg", x("palette-success-dark")), O(g.Alert, "warningFilledBg", x("palette-warning-dark")), O(g.Alert, "errorFilledColor", Le(() => g.getContrastText(g.error.dark))), O(g.Alert, "infoFilledColor", Le(() => g.getContrastText(g.info.dark))), O(g.Alert, "successFilledColor", Le(() => g.getContrastText(g.success.dark))), O(g.Alert, "warningFilledColor", Le(() => g.getContrastText(g.warning.dark))), O(g.Alert, "errorStandardBg", bA(g.error.light, 0.9)), O(g.Alert, "infoStandardBg", bA(g.info.light, 0.9)), O(g.Alert, "successStandardBg", bA(g.success.light, 0.9)), O(g.Alert, "warningStandardBg", bA(g.warning.light, 0.9)), O(g.Alert, "errorIconColor", x("palette-error-main")), O(g.Alert, "infoIconColor", x("palette-info-main")), O(g.Alert, "successIconColor", x("palette-success-main")), O(g.Alert, "warningIconColor", x("palette-warning-main")), O(g.AppBar, "defaultBg", x("palette-grey-900")), O(g.AppBar, "darkBg", x("palette-background-paper")), O(g.AppBar, "darkColor", x("palette-text-primary")), O(g.Avatar, "defaultBg", x("palette-grey-600")), O(g.Button, "inheritContainedBg", x("palette-grey-800")), O(g.Button, "inheritContainedHoverBg", x("palette-grey-700")), O(g.Chip, "defaultBorder", x("palette-grey-700")), O(g.Chip, "defaultAvatarColor", x("palette-grey-300")), O(g.Chip, "defaultIconColor", x("palette-grey-300")), O(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), O(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), O(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), O(g.LinearProgress, "primaryBg", bA(g.primary.main, 0.5)), O(g.LinearProgress, "secondaryBg", bA(g.secondary.main, 0.5)), O(g.LinearProgress, "errorBg", bA(g.error.main, 0.5)), O(g.LinearProgress, "infoBg", bA(g.info.main, 0.5)), O(g.LinearProgress, "successBg", bA(g.success.main, 0.5)), O(g.LinearProgress, "warningBg", bA(g.warning.main, 0.5)), O(g.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.13)`), O(g.Slider, "primaryTrack", bA(g.primary.main, 0.5)), O(g.Slider, "secondaryTrack", bA(g.secondary.main, 0.5)), O(g.Slider, "errorTrack", bA(g.error.main, 0.5)), O(g.Slider, "infoTrack", bA(g.info.main, 0.5)), O(g.Slider, "successTrack", bA(g.success.main, 0.5)), O(g.Slider, "warningTrack", bA(g.warning.main, 0.5));
        const k = pn(g.background.default, 0.98);
        O(g.SnackbarContent, "bg", k), O(g.SnackbarContent, "color", Le(() => g.getContrastText(k))), O(g.SpeedDialAction, "fabHoverBg", pn(g.background.paper, 0.15)), O(g.StepConnector, "border", x("palette-grey-600")), O(g.StepContent, "border", x("palette-grey-600")), O(g.Switch, "defaultColor", x("palette-grey-300")), O(g.Switch, "defaultDisabledColor", x("palette-grey-600")), O(g.Switch, "primaryDisabledColor", bA(g.primary.main, 0.55)), O(g.Switch, "secondaryDisabledColor", bA(g.secondary.main, 0.55)), O(g.Switch, "errorDisabledColor", bA(g.error.main, 0.55)), O(g.Switch, "infoDisabledColor", bA(g.info.main, 0.55)), O(g.Switch, "successDisabledColor", bA(g.success.main, 0.55)), O(g.Switch, "warningDisabledColor", bA(g.warning.main, 0.55)), O(g.TableCell, "border", bA(gn(g.divider, 1), 0.68)), O(g.Tooltip, "bg", gn(g.grey[700], 0.92));
      }
      ze(g.background, "default"), ze(g.background, "paper"), ze(g.common, "background"), ze(g.common, "onBackground"), ze(g, "divider"), Object.keys(g).forEach((k) => {
        const K = g[k];
        k !== "tonalOffset" && K && typeof K == "object" && (K.main && O(g[k], "mainChannel", Er(Sr(K.main))), K.light && O(g[k], "lightChannel", Er(Sr(K.light))), K.dark && O(g[k], "darkChannel", Er(Sr(K.dark))), K.contrastText && O(g[k], "contrastTextChannel", Er(Sr(K.contrastText))), k === "text" && (ze(g[k], "primary"), ze(g[k], "secondary")), k === "action" && (K.active && ze(g[k], "active"), K.selected && ze(g[k], "selected")));
      });
    }), v = e.reduce((T, g) => YA(T, g), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: $B(v)
    }, { vars: h, generateThemeVars: S, generateStyleSheets: I } = mB(v, U);
    return v.vars = h, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([T, g]) => {
      v[T] = g;
    }), v.generateThemeVars = S, v.generateStyleSheets = I, v.generateSpacing = function() {
      return yu(l.spacing, ds(this));
    }, v.getColorSchemeSelector = wB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...an,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, v.unstable_sx = function(g) {
      return ht({
        sx: g,
        theme: this
      });
    }, v.toRuntimeSource = Wu, v;
  }
  function Ul(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: bs({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function ii(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return da(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = da({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, Ul(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, Ul(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), zB({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const Fs = ii();
  Us = function() {
    const A = Bs(Fs);
    return A[Ge] || A;
  };
  zu = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  $e = (A) => zu(A) && A !== "classes";
  lA = Rp({
    themeId: Ge,
    defaultTheme: Fs,
    rootShouldForwardProp: $e
  });
  function JB({ theme: A, ...e }) {
    const t = Ge in A ? A[Ge] : void 0;
    return L.jsx(_u, {
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
  }, { CssVarsProvider: YB } = pB({
    themeId: Ge,
    theme: () => ii({
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
        typography: $u(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return ht({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), ZB = YB;
  function Ju({ theme: A, ...e }) {
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
    return t ? L.jsx(JB, {
      theme: t,
      ...e
    }) : L.jsx(ZB, {
      theme: A,
      ...e
    });
  }
  function qB(A) {
    return L.jsx(Qu, {
      ...A,
      defaultTheme: Fs,
      themeId: Ge
    });
  }
  function Es(A) {
    return function(t) {
      return L.jsx(qB, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function Ah() {
    return bu;
  }
  OA = aB;
  KA = function(A) {
    return oB(A);
  };
  function eh(A) {
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
  let th, rh;
  th = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${hA(e)}`,
        `fontSize${hA(t)}`
      ]
    };
    return RA(n, eh, r);
  };
  rh = lA("svg", {
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
  ga = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...f } = r, p = B.isValidElement(n) && n.type === "svg", C = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: p
    }, Q = {};
    c || (Q.viewBox = d);
    const m = th(C);
    return L.jsxs(rh, {
      as: a,
      className: pA(m.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...Q,
      ...f,
      ...p && n.props,
      ownerState: C,
      children: [
        p ? n.props.children : n,
        u ? L.jsx("title", {
          children: u
        }) : null
      ]
    });
  });
  ga.muiName = "SvgIcon";
  Yu = function(A, e) {
    function t(r, n) {
      return L.jsx(ga, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = ga.muiName, B.memo(B.forwardRef(t));
  };
  nh = function(A, e) {
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
  function Zu(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function pa(A, e) {
    return pa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, pa(A, e);
  }
  function qu(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, pa(A, e);
  }
  const { initPromise: oh } = Cf, ih = oh.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), ah = await ih.then((A) => A());
  var Ss = ah;
  const hn = Ja(Ss), El = {
    disabled: false
  }, ao = H.createContext(null);
  var sh = function(e) {
    return e.scrollTop;
  }, xr = "unmounted", bt = "exited", Ft = "entering", Yt = "entered", Ba = "exiting", We = (function(A) {
    qu(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = bt, o.appearStatus = Ft) : s = Yt : r.unmountOnExit || r.mountOnEnter ? s = xr : s = bt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === xr ? {
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
        this.props.in ? i !== Ft && i !== Yt && (o = Ft) : (i === Ft || i === Yt) && (o = Ba);
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
          i && sh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === bt && this.setState({
        status: xr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        hn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || El.disabled) {
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
      if (!o || El.disabled) {
        this.safeSetState({
          status: bt
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: Ba
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
      if (n === xr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = Zu(o, [
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
      return H.createElement(ao.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : H.cloneElement(H.Children.only(i), a));
    }, e;
  })(H.Component);
  We.contextType = ao;
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
  We.UNMOUNTED = xr;
  We.EXITED = bt;
  We.ENTERING = Ft;
  We.ENTERED = Yt;
  We.EXITING = Ba;
  function lh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function xs(A, e) {
    var t = function(o) {
      return e && B.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && B.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function ch(A, e) {
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
  function uh(A, e) {
    return xs(A.children, function(t) {
      return B.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Ht(t, "appear", A),
        enter: Ht(t, "enter", A),
        exit: Ht(t, "exit", A)
      });
    });
  }
  function dh(A, e, t) {
    var r = xs(A.children), n = ch(e, r);
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
  var fh = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, gh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, Is = (function(A) {
    qu(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(lh(o));
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
        children: s ? uh(n, a) : dh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = xs(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = no({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = Zu(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = fh(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? H.createElement(ao.Provider, {
        value: s
      }, l) : H.createElement(ao.Provider, {
        value: s
      }, H.createElement(o, a, l));
    }, e;
  })(H.Component);
  Is.propTypes = {};
  Is.defaultProps = gh;
  const Ad = (A) => A.scrollTop;
  function so(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function ph(A) {
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
  let Bh, hh;
  Bh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return RA(o, ph, n);
  };
  hh = lA("div", {
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
  ha = B.forwardRef(function(e, t) {
    var _a2;
    const r = KA({
      props: e,
      name: "MuiPaper"
    }), n = Us(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = Bh(u);
    return L.jsx(hh, {
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
            "--Paper-overlay": `linear-gradient(${ir("#fff", fa(a))}, ${ir("#fff", fa(a))})`
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
    }, ...d } = o, f = c[A] || r, p = Ou(u[A], n), { props: { component: C, ...Q }, internalRef: m } = Ku({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: p
    }), b = pe(m, p == null ? void 0 : p.ref, e.ref), w = A === "root" ? C || l : C, v = ku(f, {
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
  class lo {
    static create() {
      return new lo();
    }
    static use() {
      const e = Hu(lo.create).current, [t, r] = B.useState(false);
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
      return this.mounted || (this.mounted = mh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function Ch() {
    return lo.use();
  }
  function mh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function wh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = B.useState(false), d = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), B.useEffect(() => {
      if (!a && s != null) {
        const C = setTimeout(s, l);
        return () => {
          clearTimeout(C);
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
  ]), Ca = 550, vh = 80, yh = rn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Qh = rn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, bh = rn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Fh = lA("span", {
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
  }), Uh = lA(wh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${ve.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yh};
    animation-duration: ${Ca}ms;
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
    animation-name: ${Qh};
    animation-duration: ${Ca}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${ve.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${bh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Eh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = B.useState([]), c = B.useRef(0), u = B.useRef(null);
    B.useEffect(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = B.useRef(false), f = Tu(), p = B.useRef(null), C = B.useRef(null), Q = B.useCallback((v) => {
      const { pulsate: U, rippleX: h, rippleY: S, rippleSize: I, cb: T } = v;
      l((g) => [
        ...g,
        L.jsx(Uh, {
          classes: {
            ripple: pA(o.ripple, ve.ripple),
            rippleVisible: pA(o.rippleVisible, ve.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, ve.ripplePulsate),
            child: pA(o.child, ve.child),
            childLeaving: pA(o.childLeaving, ve.childLeaving),
            childPulsate: pA(o.childPulsate, ve.childPulsate)
          },
          timeout: Ca,
          pulsate: U,
          rippleX: h,
          rippleY: S,
          rippleSize: I
        }, c.current)
      ]), c.current += 1, u.current = T;
    }, [
      o
    ]), m = B.useCallback((v = {}, U = {}, h = () => {
    }) => {
      const { pulsate: S = false, center: I = n || U.pulsate, fakeElement: T = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (d.current = true);
      const g = T ? null : C.current, x = g ? g.getBoundingClientRect() : {
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
          cb: h
        });
      }, f.start(vh, () => {
        p.current && (p.current(), p.current = null);
      })) : Q({
        pulsate: S,
        rippleX: k,
        rippleY: K,
        rippleSize: $,
        cb: h
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
      p.current = null, l((h) => h.length > 0 ? h.slice(1) : h), u.current = U;
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
    ]), L.jsx(Fh, {
      className: pA(ve.root, o.root, i),
      ref: C,
      ...a,
      children: L.jsx(Is, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Sh(A) {
    return kA("MuiButtonBase", A);
  }
  let xh, Ih, Hh;
  xh = IA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Ih = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = RA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Sh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Hh = lA("button", {
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
    [`&.${xh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  Th = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: f, LinkComponent: p = "a", onBlur: C, onClick: Q, onContextMenu: m, onDragLeave: b, onFocus: w, onFocusVisible: v, onKeyDown: U, onKeyUp: h, onMouseDown: S, onMouseLeave: I, onMouseUp: T, onTouchEnd: g, onTouchMove: x, onTouchStart: k, tabIndex: K = 0, TouchRippleProps: $, touchRippleRef: D, type: M, ...N } = r, q = B.useRef(null), P = Ch(), j = pe(P.ref, D), [eA, nA] = B.useState(false);
    l && eA && nA(false), B.useImperativeHandle(n, () => ({
      focusVisible: () => {
        nA(true), q.current.focus();
      }
    }), []);
    const R = P.shouldMount && !c && !l;
    B.useEffect(() => {
      eA && d && !c && P.pulsate();
    }, [
      c,
      d,
      eA,
      P
    ]);
    const W = Je(P, "start", S, u), V = Je(P, "stop", m, u), J = Je(P, "stop", b, u), dA = Je(P, "stop", T, u), iA = Je(P, "stop", (AA) => {
      eA && AA.preventDefault(), I && I(AA);
    }, u), tA = Je(P, "start", k, u), z = Je(P, "stop", g, u), oA = Je(P, "stop", x, u), aA = Je(P, "stop", (AA) => {
      gl(AA.target) || nA(false), C && C(AA);
    }, false), y = Lt((AA) => {
      q.current || (q.current = AA.currentTarget), gl(AA.target) && (nA(true), v && v(AA)), w && w(AA);
    }), E = () => {
      const AA = q.current;
      return s && s !== "button" && !(AA.tagName === "A" && AA.href);
    }, F = Lt((AA) => {
      d && !AA.repeat && eA && AA.key === " " && P.stop(AA, () => {
        P.start(AA);
      }), AA.target === AA.currentTarget && E() && AA.key === " " && AA.preventDefault(), U && U(AA), AA.target === AA.currentTarget && E() && AA.key === "Enter" && !l && (AA.preventDefault(), Q && Q(AA));
    }), _ = Lt((AA) => {
      d && AA.key === " " && eA && !AA.defaultPrevented && P.stop(AA, () => {
        P.pulsate(AA);
      }), h && h(AA), Q && AA.target === AA.currentTarget && E() && AA.key === " " && !AA.defaultPrevented && Q(AA);
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
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: K,
      focusVisible: eA
    }, fA = Ih(cA);
    return L.jsxs(Hh, {
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
        R ? L.jsx(Eh, {
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
  function Lh(A) {
    return typeof A.main == "string";
  }
  function kh(A, e = []) {
    if (!Lh(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  mt = function(A = []) {
    return ([, e]) => e && kh(e, A);
  };
  function Rh(A) {
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
  let it, ma, wa, Kh, Oh, Dh, Mh, Ph, _h;
  it = 44;
  ma = rn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  wa = rn`
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
  Kh = typeof ma != "string" ? as`
        animation: ${ma} 1.4s linear infinite;
      ` : null;
  Oh = typeof wa != "string" ? as`
        animation: ${wa} 1.4s ease-in-out infinite;
      ` : null;
  Dh = (A) => {
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
    return RA(o, Rh, e);
  };
  Mh = lA("span", {
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
        style: Kh || {
          animation: `${ma} 1.4s linear infinite`
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
  Ph = lA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  _h = lA("circle", {
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
        style: Oh || {
          animation: `${wa} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Nh = B.forwardRef(function(e, t) {
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
    }, p = Dh(f), C = {}, Q = {}, m = {};
    if (u === "determinate") {
      const b = 2 * Math.PI * ((it - l) / 2);
      C.strokeDasharray = b.toFixed(3), m["aria-valuenow"] = Math.round(c), C.strokeDashoffset = `${((100 - c) / 100 * b).toFixed(3)}px`, Q.transform = "rotate(-90deg)";
    }
    return L.jsx(Mh, {
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
      ...d,
      children: L.jsx(Ph, {
        className: p.svg,
        ownerState: f,
        viewBox: `${it / 2} ${it / 2} ${it} ${it}`,
        children: L.jsx(_h, {
          className: p.circle,
          style: C,
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
  function Gh(A) {
    return kA("MuiIconButton", A);
  }
  let Sl, Vh, $h, Wh;
  Sl = IA("MuiIconButton", [
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
  Vh = (A) => {
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
    return RA(a, Gh, e);
  };
  $h = lA(Th, {
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
    [`&.${Sl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${Sl.loading}`]: {
      color: "transparent"
    }
  })));
  Wh = lA("span", {
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
  Xh = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: f, ...p } = r, C = oi(u), Q = f ?? L.jsx(Nh, {
      "aria-labelledby": C,
      color: "inherit",
      size: 16
    }), m = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: Q,
      size: c
    }, b = Vh(m);
    return L.jsxs($h, {
      id: d ? C : u,
      className: pA(b.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...p,
      ownerState: m,
      children: [
        typeof d == "boolean" && L.jsx("span", {
          className: b.loadingWrapper,
          style: {
            display: "contents"
          },
          children: L.jsx(Wh, {
            className: b.loadingIndicator,
            ownerState: m,
            children: d && Q
          })
        }),
        o
      ]
    });
  });
  function jh(A) {
    return kA("MuiTypography", A);
  }
  let zh, Jh, Yh, Zh, xl;
  mU = IA("MuiTypography", [
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
  zh = {
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
  Jh = Ah();
  Yh = (A) => {
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
    return RA(a, jh, i);
  };
  Zh = lA("span", {
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
  xl = {
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
  Zn = B.forwardRef(function(e, t) {
    const { color: r, ...n } = KA({
      props: e,
      name: "MuiTypography"
    }), o = !zh[r], i = Jh({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: f = "body1", variantMapping: p = xl, ...C } = i, Q = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: u,
      paragraph: d,
      variant: f,
      variantMapping: p
    }, m = l || (d ? "p" : p[f] || xl[f]) || "span", b = Yh(Q);
    return L.jsx(Zh, {
      as: m,
      ref: t,
      className: pA(b.root, s),
      ...C,
      ownerState: Q,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...C.style
      }
    });
  });
  function qh(A) {
    return typeof A == "function" ? A() : A;
  }
  const A0 = B.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = B.useState(null), s = pe(B.isValidElement(r) ? sn(r) : null, t);
    if (tt(() => {
      o || a(qh(n) || document.body);
    }, [
      n,
      o
    ]), tt(() => {
      if (i && !o) return ll(t, i), () => {
        ll(t, null);
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
    return i && Ss.createPortal(r, i);
  });
  function Cn(A) {
    return parseInt(A, 10) || 0;
  }
  const e0 = {
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
  function t0(A) {
    for (const e in A) return false;
    return true;
  }
  function Il(A) {
    return t0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const r0 = B.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = B.useRef(a != null), c = B.useRef(null), u = pe(t, c), d = B.useRef(null), f = B.useRef(null), p = B.useCallback(() => {
      const w = c.current, v = f.current;
      if (!w || !v) return;
      const h = rt(w).getComputedStyle(w);
      if (h.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = h.width, v.value = w.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const S = h.boxSizing, I = Cn(h.paddingBottom) + Cn(h.paddingTop), T = Cn(h.borderBottomWidth) + Cn(h.borderTopWidth), g = v.scrollHeight;
      v.value = "x";
      const x = v.scrollHeight;
      let k = g;
      o && (k = Math.max(Number(o) * x, k)), n && (k = Math.min(Number(n) * x, k)), k = Math.max(k, x);
      const K = k + (S === "border-box" ? I + T : 0), $ = Math.abs(k - g) <= 1;
      return {
        outerHeightStyle: K,
        overflowing: $
      };
    }, [
      n,
      o,
      e.placeholder
    ]), C = Lt(() => {
      const w = c.current, v = p();
      if (!w || !v || Il(v)) return false;
      const U = v.outerHeightStyle;
      return d.current != null && d.current !== U;
    }), Q = B.useCallback(() => {
      const w = c.current, v = p();
      if (!w || !v || Il(v)) return;
      const U = v.outerHeightStyle;
      d.current !== U && (d.current = U, w.style.height = `${U}px`), w.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      p
    ]), m = B.useRef(-1);
    tt(() => {
      const w = Iu(Q), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = rt(v);
      U.addEventListener("resize", w);
      let h;
      return typeof ResizeObserver < "u" && (h = new ResizeObserver(() => {
        C() && (h.unobserve(v), cancelAnimationFrame(m.current), Q(), m.current = requestAnimationFrame(() => {
          h.observe(v);
        }));
      }), h.observe(v)), () => {
        w.clear(), cancelAnimationFrame(m.current), U.removeEventListener("resize", w), h && h.disconnect();
      };
    }, [
      p,
      Q,
      C
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
            ...e0.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  va = function(A) {
    return typeof A == "string";
  };
  dr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const Hs = B.createContext(void 0);
  fr = function() {
    return B.useContext(Hs);
  };
  function Hl(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function co(A, e = false) {
    return A && (Hl(A.value) && A.value !== "" || e && Hl(A.defaultValue) && A.defaultValue !== "");
  }
  function n0(A) {
    return A.startAdornment;
  }
  function o0(A) {
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
  var Tl;
  const ai = (A, e) => {
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
  }, si = (A, e) => {
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
  }, i0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: f, type: p } = A, C = {
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
        p === "search" && "inputTypeSearch",
        c && "inputMultiline",
        d === "small" && "inputSizeSmall",
        l && "inputHiddenLabel",
        f && "inputAdornedStart",
        o && "inputAdornedEnd",
        u && "readOnly"
      ]
    };
    return RA(C, o0, e);
  }, li = lA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: ai
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
  }))), ci = lA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: si
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
  })), Ll = Es({
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
  }), Ts = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: f, endAdornment: p, error: C, fullWidth: Q = false, id: m, inputComponent: b = "input", inputProps: w = {}, inputRef: v, margin: U, maxRows: h, minRows: S, multiline: I = false, name: T, onBlur: g, onChange: x, onClick: k, onFocus: K, onKeyDown: $, onKeyUp: D, placeholder: M, readOnly: N, renderSuffix: q, rows: P, size: j, slotProps: eA = {}, slots: nA = {}, startAdornment: R, type: W = "text", value: V, ...J } = r, dA = w.value != null ? w.value : V, { current: iA } = B.useRef(dA != null), tA = B.useRef(), z = B.useCallback((HA) => {
    }, []), oA = pe(tA, v, w.ref, z), [aA, y] = B.useState(false), E = fr(), F = dr({
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
      !E && d && aA && (y(false), g && g());
    }, [
      E,
      d,
      aA,
      g
    ]);
    const _ = E && E.onFilled, X = E && E.onEmpty, G = B.useCallback((HA) => {
      co(HA) ? _ && _() : X && X();
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
        const Br = HA.target || tA.current;
        if (Br == null) throw new Error(At(1));
        G({
          value: Br.value
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
      maxRows: h,
      minRows: S,
      ...gA
    }, qA = r0);
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
    }, oe = i0(WA), jA = nA.root || l.Root || li, ot = eA.root || c.root || {}, vt = nA.input || l.Input || ci;
    return gA = {
      ...gA,
      ...eA.input ?? c.input
    }, L.jsxs(B.Fragment, {
      children: [
        !f && typeof Ll == "function" && (Tl || (Tl = L.jsx(Ll, {}))),
        L.jsxs(jA, {
          ...ot,
          ref: t,
          onClick: AA,
          ...J,
          ...!va(jA) && {
            ownerState: {
              ...WA,
              ...ot.ownerState
            }
          },
          className: pA(oe.root, ot.className, a, N && "MuiInputBase-readOnly"),
          children: [
            R,
            L.jsx(Hs.Provider, {
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
                name: T,
                placeholder: M,
                readOnly: N,
                required: F.required,
                rows: P,
                value: dA,
                onKeyDown: $,
                onKeyUp: D,
                type: W,
                ...gA,
                ...!va(vt) && {
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
  function a0(A) {
    return kA("MuiInput", A);
  }
  const mr = {
    ...ar,
    ...IA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function s0(A) {
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
  function l0(A) {
    return kA("MuiFilledInput", A);
  }
  let yt, c0, u0;
  yt = {
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
  c0 = Yu(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  u0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  d0 = B.forwardRef(function(e, t) {
    const r = Us(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: f, onExited: p, onExiting: C, style: Q, timeout: m = n, TransitionComponent: b = We, ...w } = e, v = B.useRef(null), U = pe(v, sn(a), t), h = ($) => (D) => {
      if ($) {
        const M = v.current;
        D === void 0 ? $(M) : $(M, D);
      }
    }, S = h(d), I = h(($, D) => {
      Ad($);
      const M = so({
        style: Q,
        timeout: m,
        easing: s
      }, {
        mode: "enter"
      });
      $.style.webkitTransition = r.transitions.create("opacity", M), $.style.transition = r.transitions.create("opacity", M), c && c($, D);
    }), T = h(u), g = h(C), x = h(($) => {
      const D = so({
        style: Q,
        timeout: m,
        easing: s
      }, {
        mode: "exit"
      });
      $.style.webkitTransition = r.transitions.create("opacity", D), $.style.transition = r.transitions.create("opacity", D), f && f($);
    }), k = h(p), K = ($) => {
      o && o(v.current, $);
    };
    return L.jsx(b, {
      appear: i,
      in: l,
      nodeRef: v,
      onEnter: I,
      onEntered: T,
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
          ...u0[$],
          ...Q,
          ...a.props.style
        },
        ref: U,
        ...M
      })
    });
  });
  function f0(A) {
    return kA("MuiBackdrop", A);
  }
  IA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let g0, p0, h0, C0, ya, m0, w0, ed, qn, v0, y0;
  g0 = (A) => {
    const { classes: e, invisible: t } = A;
    return RA({
      root: [
        "root",
        t && "invisible"
      ]
    }, f0, e);
  };
  p0 = lA("div", {
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
  B0 = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: f, transitionDuration: p, ...C } = r, Q = {
      ...r,
      component: i,
      invisible: a
    }, m = g0(Q), b = {
      transition: f,
      root: l.Root,
      ...d
    }, w = {
      ...c,
      ...u
    }, v = {
      slots: b,
      slotProps: w
    }, [U, h] = le("root", {
      elementType: p0,
      externalForwardedProps: v,
      className: pA(m.root, o),
      ownerState: Q
    }), [S, I] = le("transition", {
      elementType: d0,
      externalForwardedProps: v,
      ownerState: Q
    });
    return L.jsx(S, {
      in: s,
      timeout: p,
      ...C,
      ...I,
      children: L.jsx(U, {
        "aria-hidden": true,
        ...h,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  h0 = IA("MuiBox", [
    "root"
  ]);
  C0 = ii();
  Ie = Ip({
    themeId: Ge,
    defaultTheme: C0,
    defaultClassName: h0.root,
    generateClassName: Fu.generate
  });
  ya = typeof Es({}) == "function";
  m0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  w0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  ed = (A, e = false) => {
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
      html: m0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...w0(A),
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
  qn = "mui-ecs";
  v0 = (A) => {
    const e = ed(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${qn})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${qn}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${qn}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  y0 = Es(ya ? ({ theme: A, enableColorScheme: e }) => ed(A, e) : ({ theme: A }) => v0(A));
  function Q0(A) {
    const e = KA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(B.Fragment, {
      children: [
        ya && L.jsx(y0, {
          enableColorScheme: r
        }),
        !ya && !r && L.jsx("span", {
          className: qn,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function b0(A) {
    const e = He(A);
    return e.body === A ? rt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Dr(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function kl(A) {
    return parseInt(rt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function F0(A) {
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
  function Rl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !F0(i);
      a && s && Dr(i, n);
    });
  }
  function xi(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function U0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (b0(r)) {
        const i = Lu(rt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${kl(r) + i}px`;
        const a = He(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${kl(s) + i}px`;
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
  function E0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class S0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Dr(e.modalRef, false);
      const n = E0(t);
      Rl(t, e.mount, e.modalRef, n, true);
      const o = xi(this.containers, (i) => i.container === t);
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
      const r = xi(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = U0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = xi(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Dr(e.modalRef, t), Rl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Dr(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const x0 = [
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
  function I0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function H0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function T0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || H0(A));
  }
  function L0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(x0)).forEach((r, n) => {
      const o = I0(r);
      o === -1 || !T0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function k0() {
    return true;
  }
  function R0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = L0, isEnabled: i = k0, open: a } = A, s = B.useRef(false), l = B.useRef(null), c = B.useRef(null), u = B.useRef(null), d = B.useRef(null), f = B.useRef(false), p = B.useRef(null), C = pe(sn(e), p), Q = B.useRef(null);
    B.useEffect(() => {
      !a || !p.current || (f.current = !t);
    }, [
      t,
      a
    ]), B.useEffect(() => {
      if (!a || !p.current) return;
      const w = He(p.current);
      return p.current.contains(w.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), f.current && p.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
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
        if (w.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!f.current) return;
        let I = [];
        if ((w.activeElement === l.current || w.activeElement === c.current) && (I = o(p.current)), I.length > 0) {
          const T = !!(((_a2 = Q.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = Q.current) == null ? void 0 : _b2.key) === "Tab"), g = I[0], x = I[I.length - 1];
          typeof g != "string" && typeof x != "string" && (T ? x.focus() : g.focus());
        } else S.focus();
      };
      w.addEventListener("focusin", U), w.addEventListener("keydown", v, true);
      const h = setInterval(() => {
        w.activeElement && w.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(h), w.removeEventListener("focusin", U), w.removeEventListener("keydown", v, true);
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
    }, b = (w) => {
      u.current === null && (u.current = w.relatedTarget), f.current = true;
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
          ref: C,
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
  function K0(A) {
    return typeof A == "function" ? A() : A;
  }
  function O0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Kl = () => {
  }, mn = new S0();
  function D0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = B.useRef({}), d = B.useRef(null), f = B.useRef(null), p = pe(f, c), [C, Q] = B.useState(!l), m = O0(a);
    let b = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (b = false);
    const w = () => He(d.current), v = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), U = () => {
      mn.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, h = Lt(() => {
      const D = K0(e) || w().body;
      mn.add(v(), D), f.current && U();
    }), S = () => mn.isTopModal(v()), I = Lt((D) => {
      d.current = D, D && (l && S() ? U() : f.current && Dr(f.current, b));
    }), T = B.useCallback(() => {
      mn.remove(v(), b);
    }, [
      b
    ]);
    B.useEffect(() => () => {
      T();
    }, [
      T
    ]), B.useEffect(() => {
      l ? h() : (!m || !n) && T();
    }, [
      l,
      T,
      m,
      n,
      h
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
        const M = Ru(A);
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
          Q(true), i && i(), n && T();
        };
        return {
          onEnter: sl(D, (a == null ? void 0 : a.props.onEnter) ?? Kl),
          onExited: sl(M, (a == null ? void 0 : a.props.onExited) ?? Kl)
        };
      },
      rootRef: p,
      portalRef: I,
      isTopModal: S,
      exited: C,
      hasTransition: m
    };
  }
  function M0(A) {
    return kA("MuiModal", A);
  }
  IA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let P0, _0, N0;
  P0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return RA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, M0, r);
  };
  _0 = lA("div", {
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
  N0 = lA(B0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  G0 = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = N0, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: f = {}, disableAutoFocus: p = false, disableEnforceFocus: C = false, disableEscapeKeyDown: Q = false, disablePortal: m = false, disableRestoreFocus: b = false, disableScrollLock: w = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: h, onClose: S, onTransitionEnter: I, onTransitionExited: T, open: g, slotProps: x = {}, slots: k = {}, theme: K, ...$ } = r, D = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: C,
      disableEscapeKeyDown: Q,
      disablePortal: m,
      disableRestoreFocus: b,
      disableScrollLock: w,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: M, getBackdropProps: N, getTransitionProps: q, portalRef: P, isTopModal: j, exited: eA, hasTransition: nA } = D0({
      ...D,
      rootRef: t
    }), R = {
      ...D,
      exited: eA
    }, W = P0(R), V = {};
    if (l.props.tabIndex === void 0 && (V.tabIndex = "-1"), nA) {
      const { onEnter: oA, onExited: aA } = q();
      V.onEnter = oA, V.onExited = aA;
    }
    const J = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...k
      },
      slotProps: {
        ...f,
        ...x
      }
    }, [dA, iA] = le("root", {
      ref: t,
      elementType: _0,
      externalForwardedProps: {
        ...J,
        ...$,
        component: u
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
          h && h(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, W == null ? void 0 : W.backdrop),
      ownerState: R
    });
    return !U && !g && (!nA || eA) ? null : L.jsx(A0, {
      ref: P,
      container: c,
      disablePortal: m,
      children: L.jsxs(dA, {
        ...iA,
        children: [
          !v && n ? L.jsx(tA, {
            ...z
          }) : null,
          L.jsx(R0, {
            disableEnforceFocus: C,
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
  function V0(A) {
    return kA("MuiDivider", A);
  }
  let $0, W0, X0;
  wU = IA("MuiDivider", [
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
  $0 = (A) => {
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
    }, V0, r);
  };
  W0 = lA("div", {
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
  X0 = lA("span", {
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
  uo = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: s = o || a === "vertical" ? "div" : "hr", flexItem: l = false, light: c = false, role: u = s !== "hr" ? "separator" : void 0, textAlign: d = "center", variant: f = "fullWidth", ...p } = r, C = {
      ...r,
      absolute: n,
      component: s,
      flexItem: l,
      light: c,
      orientation: a,
      role: u,
      textAlign: d,
      variant: f
    }, Q = $0(C);
    return L.jsx(W0, {
      as: s,
      className: pA(Q.root, i),
      role: u,
      ref: t,
      ownerState: C,
      "aria-orientation": u === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...p,
      children: o ? L.jsx(X0, {
        className: Q.wrapper,
        ownerState: C,
        children: o
      }) : null
    });
  });
  uo && (uo.muiSkipListHighlight = true);
  const j0 = (A) => {
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
    }, l = RA(s, l0, e);
    return {
      ...e,
      ...l
    };
  }, z0 = lA(li, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...ai(A, e),
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
  })), J0 = lA(ci, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: si
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
  }))), Ls = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: f = "text", ...p } = r, C = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, Q = j0(r), m = {
      root: {
        ownerState: C
      },
      input: {
        ownerState: C
      }
    }, b = u ?? i ? YA(m, u ?? i) : m, w = d.root ?? o.Root ?? z0, v = d.input ?? o.Input ?? J0;
    return L.jsx(Ts, {
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
  Ls.muiName = "Input";
  function Y0(A) {
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
  const Z0 = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${hA(t)}`,
        r && "fullWidth"
      ]
    };
    return RA(n, Y0, e);
  }, q0 = lA("div", {
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
  }), AC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: f = "none", required: p = false, size: C = "medium", variant: Q = "outlined", ...m } = r, b = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: u,
      hiddenLabel: d,
      margin: f,
      required: p,
      size: C,
      variant: Q
    }, w = Z0(b), [v, U] = B.useState(() => {
      let D = false;
      return n && B.Children.forEach(n, (M) => {
        if (!Fi(M, [
          "Input",
          "Select"
        ])) return;
        const N = Fi(M, [
          "Select"
        ]) ? M.props.input : M;
        N && n0(N.props) && (D = true);
      }), D;
    }), [h, S] = B.useState(() => {
      let D = false;
      return n && B.Children.forEach(n, (M) => {
        Fi(M, [
          "Input",
          "Select"
        ]) && (co(M.props, true) || co(M.props.inputProps, true)) && (D = true);
      }), D;
    }), [I, T] = B.useState(false);
    s && I && T(false);
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
      filled: h,
      focused: g,
      fullWidth: u,
      hiddenLabel: d,
      size: C,
      onBlur: () => {
        T(false);
      },
      onFocus: () => {
        T(true);
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
      h,
      g,
      u,
      d,
      x,
      K,
      k,
      p,
      C,
      Q
    ]);
    return L.jsx(Hs.Provider, {
      value: $,
      children: L.jsx(q0, {
        as: a,
        ownerState: b,
        className: pA(w.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function eC(A) {
    return kA("MuiFormHelperText", A);
  }
  const Ol = IA("MuiFormHelperText", [
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
  var Dl;
  const tC = (A) => {
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
    return RA(l, eC, e);
  }, rC = lA("p", {
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
    [`&.${Ol.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Ol.error}`]: {
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
  }))), nC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: f, ...p } = r, C = fr(), Q = dr({
      props: r,
      muiFormControl: C,
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
    const b = tC(m);
    return L.jsx(rC, {
      as: i,
      className: pA(b.root, o),
      ref: t,
      ...p,
      ownerState: m,
      children: n === " " ? Dl || (Dl = L.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function oC(A) {
    return kA("MuiFormLabel", A);
  }
  const Mr = IA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), iC = (A) => {
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
    return RA(s, oC, e);
  }, aC = lA("label", {
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
          [`&.${Mr.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Mr.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${Mr.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), sC = lA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(OA(({ theme: A }) => ({
    [`&.${Mr.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), lC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...f } = r, p = fr(), C = dr({
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
      color: C.color || "primary",
      component: a,
      disabled: C.disabled,
      error: C.error,
      filled: C.filled,
      focused: C.focused,
      required: C.required
    }, m = iC(Q);
    return L.jsxs(aC, {
      as: a,
      ownerState: Q,
      className: pA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        C.required && L.jsxs(sC, {
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
  function Qa(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  const cC = {
    entering: {
      opacity: 1,
      transform: Qa(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, Ii = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ba = B.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: f, style: p, timeout: C = "auto", TransitionComponent: Q = We, ...m } = e, b = Tu(), w = B.useRef(), v = Us(), U = B.useRef(null), h = pe(U, sn(o), t), S = (D) => (M) => {
      if (D) {
        const N = U.current;
        M === void 0 ? D(N) : D(N, M);
      }
    }, I = S(c), T = S((D, M) => {
      Ad(D);
      const { duration: N, delay: q, easing: P } = so({
        style: p,
        timeout: C,
        easing: i
      }, {
        mode: "enter"
      });
      let j;
      C === "auto" ? (j = v.transitions.getAutoHeightDuration(D.clientHeight), w.current = j) : j = N, D.style.transition = [
        v.transitions.create("opacity", {
          duration: j,
          delay: q
        }),
        v.transitions.create("transform", {
          duration: Ii ? j : j * 0.666,
          delay: q,
          easing: P
        })
      ].join(","), s && s(D, M);
    }), g = S(l), x = S(f), k = S((D) => {
      const { duration: M, delay: N, easing: q } = so({
        style: p,
        timeout: C,
        easing: i
      }, {
        mode: "exit"
      });
      let P;
      C === "auto" ? (P = v.transitions.getAutoHeightDuration(D.clientHeight), w.current = P) : P = M, D.style.transition = [
        v.transitions.create("opacity", {
          duration: P,
          delay: N
        }),
        v.transitions.create("transform", {
          duration: Ii ? P : P * 0.666,
          delay: Ii ? N : N || P * 0.333,
          easing: q
        })
      ].join(","), D.style.opacity = 0, D.style.transform = Qa(0.75), u && u(D);
    }), K = S(d), $ = (D) => {
      C === "auto" && b.start(w.current || 0, D), r && r(U.current, D);
    };
    return L.jsx(Q, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: T,
      onEntered: g,
      onEntering: I,
      onExit: k,
      onExited: K,
      onExiting: x,
      addEndListener: $,
      timeout: C === "auto" ? null : C,
      ...m,
      children: (D, { ownerState: M, ...N }) => B.cloneElement(o, {
        style: {
          opacity: 0,
          transform: Qa(0.75),
          visibility: D === "exited" && !a ? "hidden" : void 0,
          ...cC[D],
          ...p,
          ...o.props.style
        },
        ref: h,
        ...N
      })
    });
  });
  ba && (ba.muiSupportAuto = true);
  const uC = (A) => {
    const { classes: e, disableUnderline: t } = A, n = RA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, a0, e);
    return {
      ...e,
      ...n
    };
  }, dC = lA(li, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...ai(A, e),
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
            [`&.${mr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${mr.error}`]: {
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
            [`&:hover:not(.${mr.disabled}, .${mr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${mr.disabled}:before`]: {
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
  })), fC = lA(ci, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: si
  })({}), ks = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...f } = r, p = uC(r), Q = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? YA(c ?? i, Q) : Q, b = u.root ?? o.Root ?? dC, w = u.input ?? o.Input ?? fC;
    return L.jsx(Ts, {
      slots: {
        root: b,
        input: w
      },
      slotProps: m,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...f,
      classes: p
    });
  });
  ks.muiName = "Input";
  function gC(A) {
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
  let pC, BC, hC;
  pC = (A) => {
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
    }, l = RA(s, gC, e);
    return {
      ...e,
      ...l
    };
  };
  BC = lA(lC, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${Mr.asterisk}`]: e.asterisk
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
  hC = B.forwardRef(function(e, t) {
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
    }, p = pC(f);
    return L.jsx(BC, {
      "data-shrink": u,
      ref: t,
      className: pA(p.root, s),
      ...l,
      ownerState: f,
      classes: p
    });
  });
  CC = B.createContext({});
  function mC(A) {
    return kA("MuiList", A);
  }
  IA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let wC, vC;
  wC = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return RA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, mC, e);
  };
  vC = lA("ul", {
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
  yC = B.forwardRef(function(e, t) {
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
    }, f = wC(d);
    return L.jsx(CC.Provider, {
      value: u,
      children: L.jsxs(vC, {
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
  function Hi(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Ml(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function td(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function wr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !td(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const QC = B.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, f = B.useRef(null), p = B.useRef({
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
          const h = `${Lu(rt(w))}px`;
          f.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = h, f.current.style.width = `calc(100% + ${h})`;
        }
        return f.current;
      }
    }), []);
    const C = (w) => {
      const v = f.current, U = w.key;
      if (w.ctrlKey || w.metaKey || w.altKey) {
        c && c(w);
        return;
      }
      const S = He(v).activeElement;
      if (U === "ArrowDown") w.preventDefault(), wr(v, S, l, s, Hi);
      else if (U === "ArrowUp") w.preventDefault(), wr(v, S, l, s, Ml);
      else if (U === "Home") w.preventDefault(), wr(v, null, l, s, Hi);
      else if (U === "End") w.preventDefault(), wr(v, null, l, s, Ml);
      else if (U.length === 1) {
        const I = p.current, T = U.toLowerCase(), g = performance.now();
        I.keys.length > 0 && (g - I.lastTime > 500 ? (I.keys = [], I.repeating = true, I.previousKeyMatched = true) : I.repeating && T !== I.keys[0] && (I.repeating = false)), I.lastTime = g, I.keys.push(T);
        const x = S && !I.repeating && td(S, I);
        I.previousKeyMatched && (x || wr(v, S, false, s, Hi, I)) ? w.preventDefault() : I.previousKeyMatched = false;
      }
      c && c(w);
    }, Q = pe(f, t);
    let m = -1;
    B.Children.forEach(i, (w, v) => {
      if (!B.isValidElement(w)) {
        m === v && (m += 1, m >= i.length && (m = -1));
        return;
      }
      w.props.disabled || (u === "selectedMenu" && w.props.selected || m === -1) && (m = v), m === v && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
    });
    const b = B.Children.map(i, (w, v) => {
      if (v === m) {
        const U = {};
        return o && (U.autoFocus = true), w.props.tabIndex === void 0 && u === "selectedMenu" && (U.tabIndex = 0), B.cloneElement(w, U);
      }
      return w;
    });
    return L.jsx(yC, {
      role: "menu",
      ref: Q,
      className: a,
      onKeyDown: C,
      tabIndex: n ? 0 : -1,
      ...d,
      children: b
    });
  });
  function bC(A) {
    return kA("MuiPopover", A);
  }
  IA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Pl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function _l(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Nl(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function wn(A) {
    return typeof A == "function" ? A() : A;
  }
  const FC = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, bC, e);
  }, UC = lA(G0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), rd = lA(ha, {
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
  }), nd = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: f = 16, open: p, PaperProps: C = {}, slots: Q = {}, slotProps: m = {}, transformOrigin: b = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: h = false, ...S } = r, I = B.useRef(), T = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: f,
      transformOrigin: b,
      TransitionComponent: w,
      transitionDuration: v,
      TransitionProps: U
    }, g = FC(T), x = B.useCallback(() => {
      if (s === "anchorPosition") return a;
      const z = wn(o), aA = (z && z.nodeType === 1 ? z : He(I.current).body).getBoundingClientRect();
      return {
        top: aA.top + Pl(aA, i.vertical),
        left: aA.left + _l(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), k = B.useCallback((z) => ({
      vertical: Pl(z, b.vertical),
      horizontal: _l(z, b.horizontal)
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
        transformOrigin: Nl(aA)
      };
      const y = x();
      let E = y.top - aA.vertical, F = y.left - aA.horizontal;
      const _ = E + oA.height, X = F + oA.width, G = rt(wn(o)), sA = G.innerHeight - f, cA = G.innerWidth - f;
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
        transformOrigin: Nl(aA)
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
    B.useEffect(() => (h && window.addEventListener("scroll", M), () => window.removeEventListener("scroll", M)), [
      o,
      h,
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
      const z = Iu(() => {
        M();
      }), oA = rt(wn(o));
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
        paper: C,
        ...m
      }
    }, [eA, nA] = le("transition", {
      elementType: ba,
      externalForwardedProps: j,
      ownerState: T,
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
    const R = u || (o ? He(wn(o)).body : void 0), [W, { slots: V, slotProps: J, ...dA }] = le("root", {
      ref: t,
      elementType: UC,
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
          backdrop: nh(typeof m.backdrop == "function" ? m.backdrop(T) : m.backdrop, {
            invisible: true
          })
        },
        container: R,
        open: p
      },
      ownerState: T,
      className: pA(g.root, c)
    }), [iA, tA] = le("paper", {
      ref: I,
      className: g.paper,
      elementType: rd,
      externalForwardedProps: j,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: $ ? void 0 : {
          opacity: 0
        }
      },
      ownerState: T
    });
    return L.jsx(W, {
      ...dA,
      ...!va(W) && {
        slots: V,
        slotProps: J,
        disableScrollLock: h
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
  function EC(A) {
    return kA("MuiMenu", A);
  }
  IA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const SC = {
    vertical: "top",
    horizontal: "right"
  }, xC = {
    vertical: "top",
    horizontal: "left"
  }, IC = (A) => {
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
    }, EC, e);
  }, HC = lA(nd, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), TC = lA(rd, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), LC = lA(QC, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), kC = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: f = "auto", TransitionProps: { onEntering: p, ...C } = {}, variant: Q = "selectedMenu", slots: m = {}, slotProps: b = {}, ...w } = r, v = tB(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: u,
      transitionDuration: f,
      TransitionProps: C,
      variant: Q
    }, h = IC(U), S = n && !a && c, I = B.useRef(null), T = (P, j) => {
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
        transition: C,
        paper: u,
        ...b
      }
    }, K = Jp({
      elementType: m.root,
      externalSlotProps: b.root,
      ownerState: U,
      className: [
        h.root,
        i
      ]
    }), [$, D] = le("paper", {
      className: h.paper,
      elementType: TC,
      externalForwardedProps: k,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [M, N] = le("list", {
      className: pA(h.list, s.className),
      elementType: LC,
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
    return L.jsx(HC, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? SC : xC,
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
            T(...P), (_a2 = q == null ? void 0 : q.onEntering) == null ? void 0 : _a2.call(q, ...P);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...w,
      classes: d,
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
  function RC(A) {
    return kA("MuiNativeSelect", A);
  }
  const Rs = IA("MuiNativeSelect", [
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
  ]), KC = (A) => {
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
    return RA(a, RC, e);
  }, od = lA("select", {
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
    [`&.${Rs.disabled}`]: {
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
  })), OC = lA(od, {
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
          [`&.${Rs.multiple}`]: e.multiple
        }
      ];
    }
  })({}), id = lA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Rs.disabled}`]: {
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
  })), DC = lA(id, {
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
  })({}), MC = B.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = KC(c);
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx(OC, {
          ownerState: c,
          className: pA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : L.jsx(DC, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var Gl;
  const PC = lA("fieldset", {
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
  }), _C = lA("legend", {
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
  function NC(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return L.jsx(PC, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: L.jsx(_C, {
        ownerState: s,
        children: a ? L.jsx("span", {
          children: n
        }) : Gl || (Gl = L.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const GC = (A) => {
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
    }, s0, e);
    return {
      ...e,
      ...r
    };
  }, VC = lA(li, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: ai
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
  })), $C = lA(NC, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), WC = lA(ci, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: si
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
  }))), Ks = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...f } = r, p = GC(r), C = fr(), Q = dr({
      props: r,
      muiFormControl: C,
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
      formControl: C,
      fullWidth: o,
      hiddenLabel: Q.hiddenLabel,
      multiline: s,
      size: Q.size,
      type: d
    }, b = c.root ?? n.Root ?? VC, w = c.input ?? n.Input ?? WC, [v, U] = le("notchedOutline", {
      elementType: $C,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: m,
      externalForwardedProps: {
        slots: c,
        slotProps: u
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
    return L.jsx(Ts, {
      slots: {
        root: b,
        input: w
      },
      slotProps: u,
      renderSuffix: (h) => L.jsx(v, {
        ...U,
        notched: typeof l < "u" ? l : !!(h.startAdornment || h.filled || h.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: s,
      ref: t,
      type: d,
      ...f,
      classes: {
        ...p,
        notchedOutline: null
      }
    });
  });
  Ks.muiName = "Input";
  function ad(A) {
    return kA("MuiSelect", A);
  }
  const vr = IA("MuiSelect", [
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
  var Vl;
  const XC = lA(od, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${vr.select}`]: e.select
        },
        {
          [`&.${vr.select}`]: e[t.variant]
        },
        {
          [`&.${vr.error}`]: e.error
        },
        {
          [`&.${vr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${vr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), jC = lA(id, {
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
  })({}), zC = lA("input", {
    shouldForwardProp: (A) => zu(A) && A !== "classes",
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
  function $l(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function JC(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let YC, ZC, qC, Os, Am, em, tm;
  YC = (A) => {
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
    return RA(a, ad, e);
  };
  ZC = B.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: f = false, IconComponent: p, inputRef: C, labelId: Q, MenuProps: m = {}, multiple: b, name: w, onBlur: v, onChange: U, onClose: h, onFocus: S, onOpen: I, open: T, readOnly: g, renderValue: x, required: k, SelectDisplayProps: K = {}, tabIndex: $, type: D, value: M, variant: N = "standard", ...q } = e, [P, j] = dl({
      controlled: M,
      default: c,
      name: "Select"
    }), [eA, nA] = dl({
      controlled: T,
      default: l,
      name: "Select"
    }), R = B.useRef(null), W = B.useRef(null), [V, J] = B.useState(null), { current: dA } = B.useRef(T != null), [iA, tA] = B.useState(), z = pe(t, C), oA = B.useCallback((uA) => {
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
      uA ? I && I(SA) : h && h(SA), dA || (tA(i ? null : aA.clientWidth), nA(uA));
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
          const Ot = SA.nativeEvent || SA, Ws = new Ot.constructor(Ot.type, Ot);
          Object.defineProperty(Ws, "target", {
            writable: true,
            value: {
              value: Ae,
              name: w
            }
          }), U(Ws, uA);
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
    (co({
      value: P
    }) || d) && (x ? AA = x(P) : PA = true);
    const WA = _.map((uA) => {
      if (!B.isValidElement(uA)) return null;
      let SA;
      if (b) {
        if (!Array.isArray(P)) throw new Error(At(2));
        SA = P.some((Ae) => $l(Ae, uA.props.value)), SA && PA && gA.push(uA.props.children);
      } else SA = $l(P, uA.props.value), SA && PA && (qA = uA.props.children);
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
    typeof $ < "u" ? jA = $ : jA = u ? null : 0;
    const ot = K.id || (w ? `mui-component-select-${w}` : void 0), vt = {
      ...e,
      variant: N,
      value: P,
      open: cA,
      error: f
    }, HA = YC(vt), Kt = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, Br = oi();
    return L.jsxs(B.Fragment, {
      children: [
        L.jsx(XC, {
          as: "div",
          ref: oA,
          tabIndex: jA,
          role: "combobox",
          "aria-controls": cA ? Br : void 0,
          "aria-disabled": u ? "true" : void 0,
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
          onMouseDown: u || g ? null : E,
          onBlur: fA,
          onFocus: S,
          ...K,
          ownerState: vt,
          className: pA(K.className, HA.select, s),
          id: ot,
          children: JC(AA) ? Vl || (Vl = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : AA
        }),
        L.jsx(zC, {
          "aria-invalid": f,
          value: Array.isArray(P) ? P.join(",") : P,
          name: w,
          ref: R,
          "aria-hidden": true,
          onChange: X,
          tabIndex: -1,
          disabled: u,
          className: HA.nativeInput,
          autoFocus: o,
          required: k,
          ...q,
          ownerState: vt
        }),
        L.jsx(jC, {
          as: p,
          className: HA.icon,
          ownerState: vt
        }),
        L.jsx(kC, {
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
              id: Br,
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
  qC = (A) => {
    const { classes: e } = A, r = RA({
      root: [
        "root"
      ]
    }, ad, e);
    return {
      ...e,
      ...r
    };
  };
  Os = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => $e(A) && A !== "variant",
    slot: "Root"
  };
  Am = lA(ks, Os)("");
  em = lA(Ks, Os)("");
  tm = lA(Ls, Os)("");
  sd = B.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = c0, id: u, input: d, inputProps: f, label: p, labelId: C, MenuProps: Q, multiple: m = false, native: b = false, onClose: w, onOpen: v, open: U, renderValue: h, SelectDisplayProps: S, variant: I = "outlined", ...T } = r, g = b ? MC : ZC, x = fr(), k = dr({
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
    }, D = qC($), { root: M, ...N } = D, q = d || {
      standard: L.jsx(Am, {
        ownerState: $
      }),
      outlined: L.jsx(em, {
        label: p,
        ownerState: $
      }),
      filled: L.jsx(tm, {
        ownerState: $
      })
    }[K], P = pe(t, sn(q));
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
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: C,
            MenuProps: Q,
            onClose: w,
            onOpen: v,
            open: U,
            renderValue: h,
            SelectDisplayProps: {
              id: u,
              ...S
            }
          },
          ...f,
          classes: f ? YA(N, f.classes) : N,
          ...d ? d.props.inputProps : {}
        },
        ...(m && b || l) && K === "outlined" ? {
          notched: true
        } : {},
        ref: P,
        className: pA(q.props.className, a, D.root),
        ...!d && {
          variant: K
        },
        ...T
      })
    });
  });
  sd.muiName = "Select";
  function rm(A) {
    return kA("MuiTextField", A);
  }
  IA("MuiTextField", [
    "root"
  ]);
  const nm = {
    standard: ks,
    filled: Ls,
    outlined: Ks
  }, om = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ]
    }, rm, e);
  }, im = lA(AC, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), am = B.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: f = false, helperText: p, id: C, InputLabelProps: Q, inputProps: m, InputProps: b, inputRef: w, label: v, maxRows: U, minRows: h, multiline: S = false, name: I, onBlur: T, onChange: g, onFocus: x, placeholder: k, required: K = false, rows: $, select: D = false, SelectProps: M, slots: N = {}, slotProps: q = {}, type: P, value: j, variant: eA = "outlined", ...nA } = r, R = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: f,
      multiline: S,
      required: K,
      select: D,
      variant: eA
    }, W = om(R), V = oi(C), J = p && V ? `${V}-helper-text` : void 0, dA = v && V ? `${V}-label` : void 0, iA = nm[eA], tA = {
      slots: N,
      slotProps: {
        input: b,
        inputLabel: Q,
        htmlInput: m,
        formHelperText: d,
        select: M,
        ...q
      }
    }, z = {}, oA = tA.slotProps.inputLabel;
    eA === "outlined" && (oA && typeof oA.shrink < "u" && (z.notched = oA.shrink), z.label = v), D && ((!M || !M.native) && (z.id = void 0), z["aria-describedby"] = void 0);
    const [aA, y] = le("root", {
      elementType: im,
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
        error: u,
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
      elementType: hC,
      externalForwardedProps: tA,
      ownerState: R
    }), [G, sA] = le("htmlInput", {
      elementType: "input",
      externalForwardedProps: tA,
      ownerState: R
    }), [cA, fA] = le("formHelperText", {
      elementType: nC,
      externalForwardedProps: tA,
      ownerState: R
    }), [AA, qA] = le("select", {
      elementType: sd,
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
      minRows: h,
      type: P,
      value: j,
      id: V,
      inputRef: w,
      onBlur: T,
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
  Fa = class extends window.visRxWidget {
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
  let sm, Ds;
  sm = [
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
  Ds = (A) => {
    const [e, t] = B.useState({}), [r, n] = B.useState({}), [o, i] = B.useState({}), [a, s] = B.useState({}), [l, c] = B.useState({}), u = JSON.stringify(A), d = B.useMemo(() => {
      const f = {}, p = {}, C = {}, Q = {}, m = {}, b = JSON.parse(u);
      return sm.forEach((w) => {
        if (b[w]) {
          const v = w.replace(/(-\w)/g, (U) => U[1].toUpperCase());
          w.includes("background") ? f[v] = b[w] : w.includes("border") ? p[v] = b[w] : w.includes("font") || w.includes("line-height") || w.includes("letter-spacing") || w.includes("word-spacing") ? Q[v] = b[w] : w.includes("text") || w.includes("color") ? C[v] = b[w] : m[v] = b[w];
        }
      }), {
        _backgroundStyles: f,
        _borderStyles: p,
        _textStyles: C,
        _fontStyles: Q,
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
  gr = B.createContext({});
  function lm({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = Ds(r.style || {}), i = B.useMemo(() => ii(YA(t, {
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
    return L.jsxs(Ju, {
      theme: i,
      children: [
        L.jsx(Q0, {}),
        L.jsx(gr.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  vU = function(A, e) {
    return L.jsx(lm, {
      context: e,
      children: A
    });
  };
  let cm;
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
      children: A ? L.jsx(uo, {
        sx: e,
        children: L.jsx(Zn, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Fa.t(A)
        })
      }) : L.jsx(uo, {
        sx: e
      })
    });
  };
  cm = Yu(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var ld = {
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
          var y = d(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            l: y.l,
            a: this._a
          };
        },
        toHslString: function() {
          var y = d(this._r, this._g, this._b), E = o(y.h * 360), F = o(y.s * 100), _ = o(y.l * 100);
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
          return this._applyModification(h, arguments);
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
          return this._applyModification(T, arguments);
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
        return typeof y == "string" && (y = oA(y)), typeof y == "object" && (z(y.r) && z(y.g) && z(y.b) ? (E = u(y.r, y.g, y.b), sA = true, cA = String(y.r).substr(-1) === "%" ? "prgb" : "rgb") : z(y.h) && z(y.s) && z(y.v) ? (_ = J(y.s), X = J(y.v), E = C(y.h, _, X), sA = true, cA = "hsv") : z(y.h) && z(y.s) && z(y.l) && (_ = J(y.s), G = J(y.l), E = f(y.h, _, G), sA = true, cA = "hsl"), y.hasOwnProperty("a") && (F = y.a)), F = P(F), {
          ok: sA,
          format: y.format || cA,
          r: i(255, a(E.r, 0)),
          g: i(255, a(E.g, 0)),
          b: i(255, a(E.b, 0)),
          a: F
        };
      }
      function u(y, E, F) {
        return {
          r: j(y, 255) * 255,
          g: j(E, 255) * 255,
          b: j(F, 255) * 255
        };
      }
      function d(y, E, F) {
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
      function C(y, E, F) {
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
      function h(y, E) {
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
      function T(y, E) {
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
  })(ld);
  var um = ld.exports;
  const re = Ja(um);
  var Ar = function() {
    return Ar = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ar.apply(this, arguments);
  }, dm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, fm = function(A) {
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
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
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
    function C() {
      return a() || c() || u() || d() || f() || p();
    }
    function Q() {
      var R, W = C();
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
      return h() || S();
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
          return z === 0 ? ui(tA) : ln(tA);
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
    function h() {
      return i("directional", e.sideOrCorner, 1);
    }
    function S() {
      return i("angular", e.angleValue, 1);
    }
    function I() {
      var R, W = T(), V;
      return W && (R = [], R.push(W), V = A, n(e.comma) && (W = T(), W ? R.push(W) : A = V)), R;
    }
    function T() {
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
      var W = Ut(R == null ? void 0 : R[0]), V = n(e.spacedRgbColor), J = V || dm([
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
  }, ln = function(A) {
    return A.value.toLowerCase();
  }, ui = function(A) {
    return A.value.toUpperCase();
  }, gm = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = fm(o);
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
  }, Ne = function(A) {
    return Math.round(A);
  }, fo = function() {
    return fo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, fo.apply(this, arguments);
  }, cd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function lr(A, e) {
    var t = cd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = sr(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function pm(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var Bm = function(A) {
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
  function hm(A, e) {
    var t = cd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = Bm(A), s = a.clientX, l = a.clientY, c = function() {
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
  }, ud = function(A) {
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
  }, Cm = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, f) {
        return (d == null ? void 0 : d.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = ud((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, mm = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return fo(fo({}, o), {
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
  }, wm = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return ud(r);
  }, vm = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = wm(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
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
  }, ym = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, dd = B.createContext(null);
  function Qm(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, f = A.passedConfig, p = A.defaultStyles, C = A.pickerIdSuffix, Q = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : vn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : vn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : vn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : vn.defaultGradient
    }, m = gm(o, Q.defaultColor, Q.defaultGradient), b = vm(o), w = b.degrees, v = b.degreeStr, U = b.isGradient, h = b.gradientType, S = mm(m, Q.defaultGradient), I = S.currentColor, T = S.selectedColor, g = S.currentLeft, x = B.useState("rgb"), k = x[0], K = x[1], $ = B.useState({}), D = $[0], M = $[1], N = re(I), q = N.toRgb(), P = N.toHsv(), j = B.useState(ce(ce({}, q), P)), eA = j[0], nA = j[1];
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
      }), oA = "".concat(h, "(").concat(v, ", ").concat(z.join(", "), ")");
      M(ce(ce({}, D), {
        gradient: oA
      })), a(oA);
    }, W = function(iA, tA) {
      var z = m == null ? void 0 : m.filter(function(aA) {
        return !Ut(aA.value);
      }), oA = ym([
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
            value: oA === T - 1 ? ui(z) : ln(z)
          });
        }), tA = iA == null ? void 0 : iA.filter(function(z, oA) {
          return oA !== T;
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
      showHexAlpha: u,
      squareHeight: d,
      setInputType: K,
      gradientType: h,
      handleChange: V,
      currentColor: I,
      selectedColor: T,
      defaultStyles: p,
      handleGradient: W,
      pickerIdSuffix: C,
      createGradientStr: R
    };
    return H.createElement(dd.Provider, {
      value: dA
    }, i);
  }
  function QA() {
    var A = B.useContext(dd);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var vn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, bm = function(A, e) {
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
  }, Fm = function(A, e, t, r) {
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
  }, Um = function(A, e, t, r) {
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
  }, Em = function(A, e, t, r) {
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
  }, go = function() {
    return go = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, go.apply(this, arguments);
  }, Sm = function() {
    var A = B.useRef(null), e = QA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = B.useState(false), l = s[0], c = s[1], u = t.barSize;
    bm(A, n);
    var d = function() {
      c(false);
    }, f = function() {
      c(true);
    }, p = function(m) {
      var b = lr(m, u) * 3.6, w = re({
        h: b,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = w.toRgb(), U = v.r, h = v.g, S = v.b;
      r("rgba(".concat(U, ", ").concat(h, ", ").concat(S, ", ").concat(o.a, ")")), i(go(go({}, o), {
        h: b
      }));
    }, C = function(m) {
      l && p(m);
    }, Q = function(m) {
      l || p(m);
    };
    return B.useEffect(function() {
      var m = function() {
        d();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), H.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(m) {
        return C(m);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, H.createElement("div", {
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
    }), H.createElement("canvas", {
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
  function xm(A, e, t) {
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
  var Im = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, Hm = function(A) {
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
    var f = function(p) {
      var C = sr(parseFloat(p.target.value), 0, o);
      u(C), r(C);
    };
    return H.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, H.createElement("input", {
      value: c,
      onChange: function(p) {
        return f(p);
      },
      style: Ue({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), H.createElement("div", {
      style: Ue({}, a.rbgcpInputLabel)
    }, e));
  }, Tm = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = B.useState(""), s = a[0], l = a[1], c = t.toHex(), u = B.useState(c), d = u[0], f = u[1];
    B.useEffect(function() {
      s !== "hex" && f(c);
    }, [
      t,
      s,
      c
    ]);
    var p = function() {
      l("hex");
    }, C = function() {
      l("");
    }, Q = function(v) {
      var U = re(v.target.value);
      if (f(v.target.value), U.isValid()) {
        var h = U.toRgb(), S = h.r, I = h.g, T = h.b, g = "rgba(".concat(S, ", ").concat(I, ", ").concat(T, ", ").concat(e, ")");
        n(g);
      }
    }, m = r ? "".concat(d).concat(Hm(e)) : d, b = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return H.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, H.createElement("input", {
      onBlur: C,
      onFocus: p,
      onChange: function(v) {
        return Q(v);
      },
      value: m == null ? void 0 : m.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Ue(Ue({}, o.rbgcpInput), o.rbgcpHexInput)
    }), H.createElement("div", {
      style: Ue({}, o.rbgcpInputLabel)
    }, b));
  }, Lm = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(fe, {
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
    }), H.createElement(fe, {
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
    }), H.createElement(fe, {
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
  }, km = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(f, p, C) {
      var Q = re({
        h: f,
        s: p,
        l: C
      }).toRgb(), m = Q.r, b = Q.g, w = Q.b;
      o("rgba(".concat(m, ", ").concat(b, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ue(Ue({}, e), {
        h: f
      }));
    }, d = function(f) {
      var p = re(f).toRgb(), C = p.r, Q = p.g, m = p.b;
      o("rgba(".concat(C, ", ").concat(Q, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(fe, {
      label: "H",
      max: 360,
      value: Ne(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u(f, l, c);
      }
    }), H.createElement(fe, {
      label: "S",
      value: Ne(l * 100),
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
    }), H.createElement(fe, {
      label: "L",
      value: Ne(c * 100),
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
  }, Rm = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = re({
        h: l,
        s: c,
        v: u
      }).toRgb(), f = d.r, p = d.g, C = d.b;
      n("rgba(".concat(f, ", ").concat(p, ", ").concat(C, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ue(Ue({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = re(l).toRgb(), u = c.r, d = c.g, f = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(fe, {
      label: "H",
      max: 360,
      value: Ne(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), H.createElement(fe, {
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
    }), H.createElement(fe, {
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
  }, Km = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = xm(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var f = Im(d), p = f.r, C = f.g, Q = f.b;
      r("rgba(".concat(p, ", ").concat(C, ", ").concat(Q, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(fe, {
      label: "C",
      value: Ne(a * 100),
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
    }), H.createElement(fe, {
      label: "M",
      value: Ne(s * 100),
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
    }), H.createElement(fe, {
      label: "Y",
      value: Ne(l * 100),
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
    }), H.createElement(fe, {
      label: "K",
      value: Ne(c * 100),
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
  }, Om = function() {
    var A = QA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return H.createElement("div", {
      style: Ue({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && H.createElement(Tm, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && H.createElement(km, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && H.createElement(Lm, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && H.createElement(Rm, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && H.createElement(Km, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && H.createElement(fe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, Dm = function(A, e, t, r) {
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
  }, fd = "Expected a function", Wl = NaN, Mm = "[object Symbol]", Pm = /^\s+|\s+$/g, _m = /^[-+]0x[0-9a-f]+$/i, Nm = /^0b[01]+$/i, Gm = /^0o[0-7]+$/i, Vm = parseInt, $m = typeof dn == "object" && dn && dn.Object === Object && dn, Wm = typeof self == "object" && self && self.Object === Object && self, Xm = $m || Wm || Function("return this")(), jm = Object.prototype, zm = jm.toString, Jm = Math.max, Ym = Math.min, Ti = function() {
    return Xm.Date.now();
  };
  function Zm(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(fd);
    e = Xl(e) || 0, po(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? Jm(Xl(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function f(h) {
      var S = r, I = n;
      return r = n = void 0, l = h, i = A.apply(I, S), i;
    }
    function p(h) {
      return l = h, a = setTimeout(m, e), c ? f(h) : i;
    }
    function C(h) {
      var S = h - s, I = h - l, T = e - S;
      return u ? Ym(T, o - I) : T;
    }
    function Q(h) {
      var S = h - s, I = h - l;
      return s === void 0 || S >= e || S < 0 || u && I >= o;
    }
    function m() {
      var h = Ti();
      if (Q(h)) return b(h);
      a = setTimeout(m, C(h));
    }
    function b(h) {
      return a = void 0, d && r ? f(h) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : b(Ti());
    }
    function U() {
      var h = Ti(), S = Q(h);
      if (r = arguments, n = this, s = h, S) {
        if (a === void 0) return p(s);
        if (u) return a = setTimeout(m, e), f(s);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return U.cancel = w, U.flush = v, U;
  }
  function qm(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(fd);
    return po(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), Zm(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function po(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function Aw(A) {
    return !!A && typeof A == "object";
  }
  function ew(A) {
    return typeof A == "symbol" || Aw(A) && zm.call(A) == Mm;
  }
  function Xl(A) {
    if (typeof A == "number") return A;
    if (ew(A)) return Wl;
    if (po(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = po(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(Pm, "");
    var t = Nm.test(A);
    return t || Gm.test(A) ? Vm(A.slice(2), t ? 2 : 8) : _m.test(A) ? Wl : +A;
  }
  var tw = qm;
  const rw = Ja(tw);
  var Et = function() {
    return Et = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Et.apply(this, arguments);
  }, nw = function() {
    var A, e, t = QA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = B.useState(false), d = u[0], f = u[1], p = B.useRef(null), C = pm(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), Q = C[0], m = C[1], b = B.useState({
      x: Q,
      y: m
    }), w = b[0], v = b[1];
    Dm(p, r == null ? void 0 : r.h, o, i), B.useEffect(function() {
      d || v({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : Q,
        y: m
      });
    }, [
      Q,
      m
    ]);
    var U = function(x) {
      var k = rw(function() {
        var K = hm(x, c), $ = K[0], D = K[1];
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
    }, h = function() {
      f(false);
    }, S = function(x) {
      d && U(x);
    }, I = function(x) {
      d || U(x);
    }, T = function() {
      f(true);
    }, g = function(x) {
      f(true), U(x);
    };
    return B.useEffect(function() {
      var x = function() {
        h();
      };
      return window.addEventListener("mouseup", x), function() {
        window.removeEventListener("mouseup", x);
      };
    }, []), H.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, H.createElement("div", {
      onMouseUp: h,
      onTouchEnd: h,
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
    }, H.createElement("div", {
      style: Et(Et(Et({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = w == null ? void 0 : w.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = w == null ? void 0 : w.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: T,
      id: "rbgcp-square-handle".concat(l)
    }), H.createElement("div", {
      style: Et(Et({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(x) {
        return I(x);
      }
    }, H.createElement("canvas", {
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
  }, ow = function() {
    var A = QA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = B.useState(false), l = s[0], c = s[1], u = r.r, d = r.g, f = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(f, ",.5) 100%)"), C = e.barSize, Q = function() {
      c(false);
    }, m = function() {
      c(true);
    }, b = function(h) {
      var S = lr(h, C) / 100, I = "rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(S, ")");
      o(I);
    }, w = function(h) {
      l && b(h);
    }, v = function(h) {
      l || b(h);
    }, U = n - 18;
    return B.useEffect(function() {
      var h = function() {
        Q();
      };
      return window.addEventListener("mouseup", h), function() {
        window.removeEventListener("mouseup", h);
      };
    }, []), H.createElement("div", {
      onMouseDown: m,
      onMouseMove: function(h) {
        return w(h);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, H.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: lt(lt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), H.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: lt(lt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), H.createElement("div", {
      style: lt(lt({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(h) {
        return v(h);
      }
    }));
  }, iw = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, aw = [
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
  ], sw = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = QA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : aw;
    }, u = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, d = function(f) {
      if (!f || i) return "";
      var p = f == null ? void 0 : f.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return H.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, H.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), H.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, p) {
      return H.createElement("div", {
        key: "".concat(f, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, H.createElement("div", {
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
  }, lw = function() {
    var A = QA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, H.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, cw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, H.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, uw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, H.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), H.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, dw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, H.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), H.createElement("line", {
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
    }), H.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), H.createElement("line", {
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
    }), H.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), H.createElement("line", {
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
  }, fw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, gw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), H.createElement("path", {
      style: rA(rA(rA(rA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, pw = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, H.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), H.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, Bw = function() {
    var A = QA().defaultStyles;
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, hw = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = B.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = B.useState(!n.current.parentElement)[0];
    return B.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), Ss.createPortal(t, n.current);
  };
  const Cw = B.memo(hw);
  var Ua = function(A, e) {
    return Ua = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Ua(A, e);
  };
  function Te(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Ua(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var Ea = function() {
    return Ea = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, Ea.apply(this, arguments);
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
  function yn(A, e, t) {
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
  })(), di = function(A, e) {
    return nt.fromClientRect(A, e.getBoundingClientRect());
  }, mw = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new nt(0, 0, r, n);
  }, fi = function(A) {
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
  }, jl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ww = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Qn = 0; Qn < jl.length; Qn++) ww[jl.charCodeAt(Qn)] = Qn;
  var zl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ir = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var bn = 0; bn < zl.length; bn++) Ir[zl.charCodeAt(bn)] = bn;
  var vw = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Ir[A.charCodeAt(r)], i = Ir[A.charCodeAt(r + 1)], a = Ir[A.charCodeAt(r + 2)], s = Ir[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, yw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Qw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, kt = 5, Ms = 11, Li = 2, bw = Ms - kt, gd = 65536 >> kt, Fw = 1 << kt, ki = Fw - 1, Uw = 1024 >> kt, Ew = gd + Uw, Sw = Ew, xw = 32, Iw = Sw + xw, Hw = 65536 >> Ms, Tw = 1 << bw, Lw = Tw - 1, Jl = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, kw = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Rw = function(A, e) {
    var t = vw(A), r = Array.isArray(t) ? Qw(t) : new Uint32Array(t), n = Array.isArray(t) ? yw(t) : new Uint16Array(t), o = 24, i = Jl(n, o / 2, r[4] / 2), a = r[5] === 2 ? Jl(n, (o + r[4]) / 2) : kw(r, Math.ceil((o + r[4]) / 4));
    return new Kw(r[0], r[1], r[2], r[3], i, a);
  }, Kw = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> kt], t = (t << Li) + (e & ki), this.data[t];
        if (e <= 65535) return t = this.index[gd + (e - 55296 >> kt)], t = (t << Li) + (e & ki), this.data[t];
        if (e < this.highStart) return t = Iw - Hw + (e >> Ms), t = this.index[t], t += e >> kt & Lw, t = this.index[t], t = (t << Li) + (e & ki), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Yl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ow = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Fn = 0; Fn < Yl.length; Fn++) Ow[Yl.charCodeAt(Fn)] = Fn;
  var Dw = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Zl = 50, Mw = 1, pd = 2, Bd = 3, Pw = 4, _w = 5, ql = 7, hd = 8, Ac = 9, ut = 10, Sa = 11, ec = 12, xa = 13, Nw = 14, Hr = 15, Ia = 16, Un = 17, yr = 18, Gw = 19, tc = 20, Ha = 21, Qr = 22, Ri = 23, Vt = 24, Be = 25, Tr = 26, Lr = 27, $t = 28, Vw = 29, St = 30, $w = 31, En = 32, Sn = 33, Ta = 34, La = 35, ka = 36, Jr = 37, Ra = 38, Ao = 39, eo = 40, Ki = 41, Cd = 42, Ww = 43, Xw = [
    9001,
    65288
  ], md = "!", BA = "\xD7", xn = "\xF7", Ka = Rw(Dw), Ye = [
    St,
    ka
  ], Oa = [
    Mw,
    pd,
    Bd,
    _w
  ], wd = [
    ut,
    hd
  ], rc = [
    Lr,
    Tr
  ], jw = Oa.concat(wd), nc = [
    Ra,
    Ao,
    eo,
    Ta,
    La
  ], zw = [
    Hr,
    xa
  ], Jw = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Ka.get(o);
      if (a > Zl ? (n.push(true), a -= Zl) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ia);
      if (a === Pw || a === Sa) {
        if (i === 0) return r.push(i), t.push(St);
        var s = t[i - 1];
        return jw.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(St));
      }
      if (r.push(i), a === $w) return t.push(e === "strict" ? Ha : Jr);
      if (a === Cd || a === Vw) return t.push(St);
      if (a === Ww) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(Jr) : t.push(St);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Oi = function(A, e, t, r) {
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
  }, oc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === ut) t--;
      else return r;
    }
    return 0;
  }, Yw = function(A, e, t, r, n) {
    if (t[r] === 0) return BA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return BA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === pd && c === Bd) return BA;
    if (Oa.indexOf(s) !== -1) return md;
    if (Oa.indexOf(c) !== -1 || wd.indexOf(c) !== -1) return BA;
    if (oc(o, e) === hd) return xn;
    if (Ka.get(A[o]) === Sa || (s === En || s === Sn) && Ka.get(A[a]) === Sa || s === ql || c === ql || s === Ac || [
      ut,
      xa,
      Hr
    ].indexOf(s) === -1 && c === Ac || [
      Un,
      yr,
      Gw,
      Vt,
      $t
    ].indexOf(c) !== -1 || oc(o, e) === Qr || Oi(Ri, Qr, o, e) || Oi([
      Un,
      yr
    ], Ha, o, e) || Oi(ec, ec, o, e)) return BA;
    if (s === ut) return xn;
    if (s === Ri || c === Ri) return BA;
    if (c === Ia || s === Ia) return xn;
    if ([
      xa,
      Hr,
      Ha
    ].indexOf(c) !== -1 || s === Nw || l === ka && zw.indexOf(s) !== -1 || s === $t && c === ka || c === tc || Ye.indexOf(c) !== -1 && s === Be || Ye.indexOf(s) !== -1 && c === Be || s === Lr && [
      Jr,
      En,
      Sn
    ].indexOf(c) !== -1 || [
      Jr,
      En,
      Sn
    ].indexOf(s) !== -1 && c === Tr || Ye.indexOf(s) !== -1 && rc.indexOf(c) !== -1 || rc.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || [
      Lr,
      Tr
    ].indexOf(s) !== -1 && (c === Be || [
      Qr,
      Hr
    ].indexOf(c) !== -1 && e[a + 1] === Be) || [
      Qr,
      Hr
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
      yr
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
      Lr,
      Tr
    ].indexOf(c) !== -1) for (var u = [
      Un,
      yr
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === Be) return BA;
      if ([
        $t,
        Vt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (Ra === s && [
      Ra,
      Ao,
      Ta,
      La
    ].indexOf(c) !== -1 || [
      Ao,
      Ta
    ].indexOf(s) !== -1 && [
      Ao,
      eo
    ].indexOf(c) !== -1 || [
      eo,
      La
    ].indexOf(s) !== -1 && c === eo || nc.indexOf(s) !== -1 && [
      tc,
      Tr
    ].indexOf(c) !== -1 || nc.indexOf(c) !== -1 && s === Lr || Ye.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || s === Vt && Ye.indexOf(c) !== -1 || Ye.concat(Be).indexOf(s) !== -1 && c === Qr && Xw.indexOf(A[a]) === -1 || Ye.concat(Be).indexOf(c) !== -1 && s === yr) return BA;
    if (s === Ki && c === Ki) {
      for (var f = t[o], p = 1; f > 0 && (f--, e[f] === Ki); ) p++;
      if (p % 2 !== 0) return BA;
    }
    return s === En && c === Sn ? BA : xn;
  }, Zw = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Jw(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Be,
        St,
        Cd
      ].indexOf(a) !== -1 ? Jr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, qw = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === md, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return NA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), Av = function(A, e) {
    var t = fi(A), r = Zw(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = BA; l < a && (c = Yw(t, o, n, ++l, i)) === BA; ) ;
        if (c !== BA || l === a) {
          var u = new qw(t, c, s, l);
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
  }, ev = 1, tv = 2, cn = 4, ic = 8, Bo = 10, ac = 47, Pr = 92, rv = 9, nv = 32, In = 34, br = 61, ov = 35, iv = 36, av = 37, Hn = 39, Tn = 40, Fr = 41, sv = 95, de = 45, lv = 33, cv = 60, uv = 62, dv = 64, fv = 91, gv = 93, pv = 61, Bv = 123, Ln = 63, hv = 125, sc = 124, Cv = 126, mv = 128, lc = 65533, Di = 42, Tt = 43, wv = 44, vv = 58, yv = 59, Yr = 46, Qv = 0, bv = 8, Fv = 11, Uv = 14, Ev = 31, Sv = 127, Ke = -1, vd = 48, yd = 97, Qd = 101, xv = 102, Iv = 117, Hv = 122, bd = 65, Fd = 69, Ud = 70, Tv = 85, Lv = 90, se = function(A) {
    return A >= vd && A <= 57;
  }, kv = function(A) {
    return A >= 55296 && A <= 57343;
  }, Wt = function(A) {
    return se(A) || A >= bd && A <= Ud || A >= yd && A <= xv;
  }, Rv = function(A) {
    return A >= yd && A <= Hv;
  }, Kv = function(A) {
    return A >= bd && A <= Lv;
  }, Ov = function(A) {
    return Rv(A) || Kv(A);
  }, Dv = function(A) {
    return A >= mv;
  }, kn = function(A) {
    return A === Bo || A === rv || A === nv;
  }, ho = function(A) {
    return Ov(A) || Dv(A) || A === sv;
  }, cc = function(A) {
    return ho(A) || se(A) || A === de;
  }, Mv = function(A) {
    return A >= Qv && A <= bv || A === Fv || A >= Uv && A <= Ev || A === Sv;
  }, ct = function(A, e) {
    return A !== Pr ? false : e !== Bo;
  }, Rn = function(A, e, t) {
    return A === de ? ho(e) || ct(e, t) : ho(A) ? true : !!(A === Pr && ct(A, e));
  }, Mi = function(A, e, t) {
    return A === Tt || A === de ? se(e) ? true : e === Yr && se(t) : se(A === Yr ? e : A);
  }, Pv = function(A) {
    var e = 0, t = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (t = -1), e++);
    for (var r = []; se(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(NA.apply(void 0, r), 10) : 0;
    A[e] === Yr && e++;
    for (var o = []; se(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(NA.apply(void 0, o), 10) : 0;
    (A[e] === Fd || A[e] === Qd) && e++;
    var s = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (s = -1), e++);
    for (var l = []; se(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(NA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, _v = {
    type: 2
  }, Nv = {
    type: 3
  }, Gv = {
    type: 4
  }, Vv = {
    type: 13
  }, $v = {
    type: 8
  }, Wv = {
    type: 21
  }, Xv = {
    type: 9
  }, jv = {
    type: 10
  }, zv = {
    type: 11
  }, Jv = {
    type: 12
  }, Yv = {
    type: 14
  }, Kn = {
    type: 23
  }, Zv = {
    type: 1
  }, qv = {
    type: 25
  }, Ay = {
    type: 24
  }, ey = {
    type: 26
  }, ty = {
    type: 27
  }, ry = {
    type: 28
  }, ny = {
    type: 29
  }, oy = {
    type: 31
  }, Da = {
    type: 32
  }, Ed = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(fi(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Da; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case In:
          return this.consumeStringToken(In);
        case ov:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (cc(t) || ct(r, n)) {
            var o = Rn(t, r, n) ? tv : ev, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case iv:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Vv;
          break;
        case Hn:
          return this.consumeStringToken(Hn);
        case Tn:
          return _v;
        case Fr:
          return Nv;
        case Di:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Yv;
          break;
        case Tt:
          if (Mi(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case wv:
          return Gv;
        case de:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Mi(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Rn(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === de && l === uv) return this.consumeCodePoint(), this.consumeCodePoint(), Ay;
          break;
        case Yr:
          if (Mi(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case ac:
          if (this.peekCodePoint(0) === Di) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Di && (c = this.consumeCodePoint(), c === ac)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case vv:
          return ey;
        case yv:
          return ty;
        case cv:
          if (this.peekCodePoint(0) === lv && this.peekCodePoint(1) === de && this.peekCodePoint(2) === de) return this.consumeCodePoint(), this.consumeCodePoint(), qv;
          break;
        case dv:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (Rn(u, d, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case fv:
          return ry;
        case Pr:
          if (ct(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case gv:
          return ny;
        case pv:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), $v;
          break;
        case Bv:
          return zv;
        case hv:
          return Jv;
        case Iv:
        case Tv:
          var p = this.peekCodePoint(0), C = this.peekCodePoint(1);
          return p === Tt && (Wt(C) || C === Ln) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case sc:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Xv;
          if (this.peekCodePoint(0) === sc) return this.consumeCodePoint(), Wv;
          break;
        case Cv:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), jv;
          break;
        case Ke:
          return Da;
      }
      return kn(e) ? (this.consumeWhiteSpace(), oy) : se(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : ho(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
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
      for (var r = false; t === Ln && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Ln ? vd : s;
        })), 16), o = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Ln ? Ud : s;
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
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Fr) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), Kn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === Fr) return {
          type: 22,
          value: NA.apply(void 0, e)
        };
        if (kn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Fr ? (this.consumeCodePoint(), {
          type: 22,
          value: NA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), Kn);
        if (n === In || n === Hn || n === Tn || Mv(n)) return this.consumeBadUrlRemnants(), Kn;
        if (n === Pr) if (ct(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), Kn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; kn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Fr || e === Ke) return;
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
        if (n === Bo) return this._value.splice(0, r), Zv;
        if (n === Pr) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === Bo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ct(n, o) && (t += this.consumeStringSlice(r), t += NA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = cn, r = this.peekCodePoint(0);
      for ((r === Tt || r === de) && e.push(this.consumeCodePoint()); se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Yr && se(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ic; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Fd || r === Qd) && ((n === Tt || n === de) && se(o) || se(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ic; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        Pv(e),
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
      return n === av ? (this.consumeCodePoint(), {
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
        kn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || kv(r) || r > 1114111 ? lc : r;
      }
      return e === Ke ? lc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (cc(t)) e += NA(t);
        else if (ct(t, this.peekCodePoint(0))) e += NA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Sd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Ed();
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
        if (r.type === 32 || ay(r, e)) return t;
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
      return typeof e > "u" ? Da : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), un = function(A) {
    return A.type === 15;
  }, pr = function(A) {
    return A.type === 17;
  }, yA = function(A) {
    return A.type === 20;
  }, iy = function(A) {
    return A.type === 0;
  }, Ma = function(A, e) {
    return yA(A) && A.value === e;
  }, xd = function(A) {
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
  }, ay = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, wt = function(A) {
    return A.type === 17 || A.type === 15;
  }, $A = function(A) {
    return A.type === 16 || wt(A);
  }, Id = function(A) {
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
  }, Ps = {
    type: 16,
    number: 50,
    flags: cn
  }, dt = {
    type: 16,
    number: 100,
    flags: cn
  }, kr = function(A, e, t) {
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
  }, Hd = "deg", Td = "grad", Ld = "rad", kd = "turn", gi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Hd:
          return Math.PI * e.number / 180;
        case Td:
          return Math.PI / 200 * e.number;
        case Ld:
          return e.number;
        case kd:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Rd = function(A) {
    return A.type === 15 && (A.unit === Hd || A.unit === Td || A.unit === Ld || A.unit === kd);
  }, Kd = function(A) {
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
        var t = sy[e.name];
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
  }, uc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, dc = function(A, e) {
    var t = e.filter(cr);
    if (t.length === 3) {
      var r = t.map(uc), n = r[0], o = r[1], i = r[2];
      return ft(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(uc), n = a[0], o = a[1], i = a[2], s = a[3];
      return ft(n, o, i, s);
    }
    return 0;
  };
  function Pi(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var fc = function(A, e) {
    var t = e.filter(cr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? be(r.number) : gi.parse(A, r)) / (Math.PI * 2), s = $A(n) ? n.number / 100 : 0, l = $A(o) ? o.number / 100 : 0, c = typeof i < "u" && $A(i) ? EA(i, 1) : 1;
    if (s === 0) return ft(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, f = Pi(d, u, a + 1 / 3), p = Pi(d, u, a), C = Pi(d, u, a - 1 / 3);
    return ft(f * 255, p * 255, C * 255, c);
  }, sy = {
    hsl: fc,
    hsla: fc,
    rgb: dc,
    rgba: dc
  }, _r = function(A, e) {
    return pt.parse(A, Sd.create(e).parseComponentValue());
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
  }, ly = {
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
  }, cy = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, pi = function(A, e) {
    var t = pt.parse(A, e[0]), r = e[1];
    return r && $A(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, gc = function(A, e) {
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
        for (var u = i - l, d = n[l - 1], f = (c - d) / (u + 1), p = 1; p <= u; p++) n[l + p - 1] = f * p;
        l = null;
      }
    }
    return A.map(function(C, Q) {
      var m = C.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[Q] / e), 0)
      };
    });
  }, uy = function(A, e, t) {
    var r = e / 2, n = t / 2, o = EA(A[0], e) - r, i = n - EA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, dy = function(A, e, t) {
    var r = typeof A == "number" ? A : uy(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, xe = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, pc = function(A, e, t, r, n) {
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
  }, fy = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(xe(e, t), xe(e, t - n), xe(e - r, t), xe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = pc(r, n, e, t, true), l = s[0], c = s[1];
          o = xe(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(xe(e, t), xe(e, t - n), xe(e - r, t), xe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = pc(r, n, e, t, false), l = u[0], c = u[1];
          o = xe(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = EA(A.size[0], r), i = A.size.length === 2 ? EA(A.size[1], n) : o), [
      o,
      i
    ];
  }, gy = function(A, e) {
    var t = be(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Kd(n);
          return;
        } else if (Rd(i)) {
          t = gi.parse(A, i);
          return;
        }
      }
      var a = pi(A, n);
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
          t = Kd(n);
          return;
        } else if (Rd(i)) {
          t = (gi.parse(A, i) + be(270)) % be(360);
          return;
        }
      }
      var a = pi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, py = function(A, e) {
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
            pr(f) && r.push({
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
  }, Od = "closest-side", Dd = "farthest-side", Md = "closest-corner", Pd = "farthest-corner", _d = "circle", Nd = "ellipse", Gd = "cover", Vd = "contain", By = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (yA(d)) switch (d.value) {
            case "center":
              return o.push(Ps), u;
            case "top":
            case "left":
              return o.push(ne), u;
            case "right":
            case "bottom":
              return o.push(dt), u;
          }
          else ($A(d) || wt(d)) && o.push(d);
          else if (yA(d)) switch (d.value) {
            case _d:
              return t = 0, false;
            case Nd:
              return t = 1, false;
            case "at":
              return l = true, false;
            case Od:
              return r = 0, false;
            case Gd:
            case Dd:
              return r = 1, false;
            case Vd:
            case Md:
              return r = 2, false;
            case Pd:
              return r = 3, false;
          }
          else if (wt(d) || $A(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = pi(A, i);
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
        if (yA(u)) switch (u.value) {
          case "center":
            return o.push(Ps), false;
          case "top":
          case "left":
            return o.push(ne), false;
          case "right":
          case "bottom":
            return o.push(dt), false;
        }
        else if ($A(u) || wt(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (yA(u)) switch (u.value) {
          case _d:
            return t = 0, false;
          case Nd:
            return t = 1, false;
          case Vd:
          case Od:
            return r = 0, false;
          case Dd:
            return r = 1, false;
          case Md:
            return r = 2, false;
          case Gd:
          case Pd:
            return r = 3, false;
        }
        else if (wt(u) || $A(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = pi(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, hy = function(A) {
    return A.type === 1;
  }, Cy = function(A) {
    return A.type === 2;
  }, _s = {
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
        var r = $d[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function my(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!$d[A.name]);
  }
  var $d = {
    "linear-gradient": gy,
    "-moz-linear-gradient": On,
    "-ms-linear-gradient": On,
    "-o-linear-gradient": On,
    "-webkit-linear-gradient": On,
    "radial-gradient": By,
    "-moz-radial-gradient": Dn,
    "-ms-radial-gradient": Dn,
    "-o-radial-gradient": Dn,
    "-webkit-radial-gradient": Dn,
    "-webkit-gradient": py
  }, wy = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return cr(r) && my(r);
      }).map(function(r) {
        return _s.parse(A, r);
      });
    }
  }, vy = {
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
  }, yy = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter($A);
      }).map(Id);
    }
  }, Qy = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(yA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(by);
    }
  }, by = function(A) {
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
  var Fy = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(Uy);
      });
    }
  }, Uy = function(A) {
    return yA(A) || $A(A);
  }, Bi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, Ey = Bi("top"), Sy = Bi("right"), xy = Bi("bottom"), Iy = Bi("left"), hi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return Id(t.filter($A));
      }
    };
  }, Hy = hi("top-left"), Ty = hi("top-right"), Ly = hi("bottom-right"), ky = hi("bottom-left"), Ci = function(A) {
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
  }, Ry = Ci("top"), Ky = Ci("right"), Oy = Ci("bottom"), Dy = Ci("left"), mi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return un(t) ? t.number : 0;
      }
    };
  }, My = mi("top"), Py = mi("right"), _y = mi("bottom"), Ny = mi("left"), Gy = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Vy = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, $y = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(yA).reduce(function(t, r) {
        return t | Wy(r.value);
      }, 0);
    }
  }, Wy = function(A) {
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
  }, Xy = {
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
  }, jy = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, Co;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(Co || (Co = {}));
  var zy = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? Co.STRICT : Co.NORMAL;
    }
  }, Jy = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, Bc = function(A, e) {
    return yA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : $A(A) ? EA(A, e) : e;
  }, Yy = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : _s.parse(A, e);
    }
  }, Zy = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, Pa = {
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
  }, qy = wi("top"), AQ = wi("right"), eQ = wi("bottom"), tQ = wi("left"), rQ = {
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
  }, nQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, vi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, oQ = vi("top"), iQ = vi("right"), aQ = vi("bottom"), sQ = vi("left"), lQ = {
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
  }, cQ = {
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
  }, uQ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Ma(e[0], "none") ? [] : Xe(e).map(function(t) {
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
  }, dQ = {
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
  }, fQ = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = BQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, gQ = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, pQ = function(A) {
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
  }, BQ = {
    matrix: gQ,
    matrix3d: pQ
  }, hc = {
    type: 16,
    number: 50,
    flags: cn
  }, hQ = [
    hc,
    hc
  ], CQ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter($A);
      return t.length !== 2 ? hQ : [
        t[0],
        t[1]
      ];
    }
  }, mQ = {
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
  var wQ = {
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
  }, vQ = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (pr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, Wd = {
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
  }, yQ = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return pr(e) ? e.number : 1;
    }
  }, QQ = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, bQ = {
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
  }, FQ = {
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
  }, UQ = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, EQ = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return pr(e) ? e.number : yA(e) && e.value === "bold" ? 700 : 400;
    }
  }, SQ = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(yA).map(function(t) {
        return t.value;
      });
    }
  }, xQ = {
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
  }, IQ = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, HQ = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(xd), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && pr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, TQ = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(xd), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (yA(o) && o.value !== "none") {
          var a = i && pr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, LQ = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(un).map(function(t) {
        return Wd.parse(A, t);
      });
    }
  }, kQ = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(iy);
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
  }, Cc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, RQ = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Ma(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: ne,
          offsetY: ne,
          blur: ne,
          spread: ne,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Ma(i, "inset") ? r.inset = true : wt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, KQ = {
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
  }, OQ = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, DQ = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return un(e) ? e.number : 0;
    }
  }, MQ = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = Z(e, LQ, t.animationDuration), this.backgroundClip = Z(e, ly, t.backgroundClip), this.backgroundColor = Z(e, cy, t.backgroundColor), this.backgroundImage = Z(e, wy, t.backgroundImage), this.backgroundOrigin = Z(e, vy, t.backgroundOrigin), this.backgroundPosition = Z(e, yy, t.backgroundPosition), this.backgroundRepeat = Z(e, Qy, t.backgroundRepeat), this.backgroundSize = Z(e, Fy, t.backgroundSize), this.borderTopColor = Z(e, Ey, t.borderTopColor), this.borderRightColor = Z(e, Sy, t.borderRightColor), this.borderBottomColor = Z(e, xy, t.borderBottomColor), this.borderLeftColor = Z(e, Iy, t.borderLeftColor), this.borderTopLeftRadius = Z(e, Hy, t.borderTopLeftRadius), this.borderTopRightRadius = Z(e, Ty, t.borderTopRightRadius), this.borderBottomRightRadius = Z(e, Ly, t.borderBottomRightRadius), this.borderBottomLeftRadius = Z(e, ky, t.borderBottomLeftRadius), this.borderTopStyle = Z(e, Ry, t.borderTopStyle), this.borderRightStyle = Z(e, Ky, t.borderRightStyle), this.borderBottomStyle = Z(e, Oy, t.borderBottomStyle), this.borderLeftStyle = Z(e, Dy, t.borderLeftStyle), this.borderTopWidth = Z(e, My, t.borderTopWidth), this.borderRightWidth = Z(e, Py, t.borderRightWidth), this.borderBottomWidth = Z(e, _y, t.borderBottomWidth), this.borderLeftWidth = Z(e, Ny, t.borderLeftWidth), this.boxShadow = Z(e, RQ, t.boxShadow), this.color = Z(e, Gy, t.color), this.direction = Z(e, Vy, t.direction), this.display = Z(e, $y, t.display), this.float = Z(e, Xy, t.cssFloat), this.fontFamily = Z(e, FQ, t.fontFamily), this.fontSize = Z(e, UQ, t.fontSize), this.fontStyle = Z(e, xQ, t.fontStyle), this.fontVariant = Z(e, SQ, t.fontVariant), this.fontWeight = Z(e, EQ, t.fontWeight), this.letterSpacing = Z(e, jy, t.letterSpacing), this.lineBreak = Z(e, zy, t.lineBreak), this.lineHeight = Z(e, Jy, t.lineHeight), this.listStyleImage = Z(e, Yy, t.listStyleImage), this.listStylePosition = Z(e, Zy, t.listStylePosition), this.listStyleType = Z(e, Pa, t.listStyleType), this.marginTop = Z(e, qy, t.marginTop), this.marginRight = Z(e, AQ, t.marginRight), this.marginBottom = Z(e, eQ, t.marginBottom), this.marginLeft = Z(e, tQ, t.marginLeft), this.opacity = Z(e, yQ, t.opacity);
      var o = Z(e, rQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = Z(e, nQ, t.overflowWrap), this.paddingTop = Z(e, oQ, t.paddingTop), this.paddingRight = Z(e, iQ, t.paddingRight), this.paddingBottom = Z(e, aQ, t.paddingBottom), this.paddingLeft = Z(e, sQ, t.paddingLeft), this.paintOrder = Z(e, KQ, t.paintOrder), this.position = Z(e, cQ, t.position), this.textAlign = Z(e, lQ, t.textAlign), this.textDecorationColor = Z(e, QQ, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = Z(e, bQ, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = Z(e, uQ, t.textShadow), this.textTransform = Z(e, dQ, t.textTransform), this.transform = Z(e, fQ, t.transform), this.transformOrigin = Z(e, CQ, t.transformOrigin), this.visibility = Z(e, mQ, t.visibility), this.webkitTextStrokeColor = Z(e, OQ, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Z(e, DQ, t.webkitTextStrokeWidth), this.wordBreak = Z(e, wQ, t.wordBreak), this.zIndex = Z(e, vQ, t.zIndex);
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
  })(), PQ = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = Z(e, IQ, t.content), this.quotes = Z(e, kQ, t.quotes);
    }
    return A;
  })(), mc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = Z(e, HQ, t.counterIncrement), this.counterReset = Z(e, TQ, t.counterReset);
    }
    return A;
  })(), Z = function(A, e, t) {
    var r = new Ed(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Sd(r.read());
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
            return gi.parse(A, o.parseComponentValue());
          case "color":
            return pt.parse(A, o.parseComponentValue());
          case "image":
            return _s.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return wt(a) ? a : ne;
          case "length-percentage":
            var s = o.parseComponentValue();
            return $A(s) ? s : ne;
          case "time":
            return Wd.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, _Q = "data-html2canvas-debug", NQ = function(A) {
    var e = A.getAttribute(_Q);
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
  }, _a = function(A, e) {
    var t = NQ(A);
    return t === 1 || e === t;
  }, je = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, _a(t, 3)) debugger;
      this.styles = new MQ(e, window.getComputedStyle(t, null)), Va(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = di(this.context, t), _a(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), GQ = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", wc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Mn = 0; Mn < wc.length; Mn++) Rr[wc.charCodeAt(Mn)] = Mn;
  var VQ = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Rr[A.charCodeAt(r)], i = Rr[A.charCodeAt(r + 1)], a = Rr[A.charCodeAt(r + 2)], s = Rr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, $Q = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, WQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Rt = 5, Ns = 11, _i = 2, XQ = Ns - Rt, Xd = 65536 >> Rt, jQ = 1 << Rt, Ni = jQ - 1, zQ = 1024 >> Rt, JQ = Xd + zQ, YQ = JQ, ZQ = 32, qQ = YQ + ZQ, Ab = 65536 >> Ns, eb = 1 << XQ, tb = eb - 1, vc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, rb = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, nb = function(A, e) {
    var t = VQ(A), r = Array.isArray(t) ? WQ(t) : new Uint32Array(t), n = Array.isArray(t) ? $Q(t) : new Uint16Array(t), o = 24, i = vc(n, o / 2, r[4] / 2), a = r[5] === 2 ? vc(n, (o + r[4]) / 2) : rb(r, Math.ceil((o + r[4]) / 4));
    return new ob(r[0], r[1], r[2], r[3], i, a);
  }, ob = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Rt], t = (t << _i) + (e & Ni), this.data[t];
        if (e <= 65535) return t = this.index[Xd + (e - 55296 >> Rt)], t = (t << _i) + (e & Ni), this.data[t];
        if (e < this.highStart) return t = qQ - Ab + (e >> Ns), t = this.index[t], t += e >> Rt & tb, t = this.index[t], t = (t << _i) + (e & Ni), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), yc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ib = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Pn = 0; Pn < yc.length; Pn++) ib[yc.charCodeAt(Pn)] = Pn;
  var ab = 1, Gi = 2, Vi = 3, Qc = 4, bc = 5, sb = 7, Fc = 8, $i = 9, Wi = 10, Uc = 11, Ec = 12, Sc = 13, xc = 14, Xi = 15, lb = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, cb = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, ub = nb(GQ), we = "\xD7", ji = "\xF7", db = function(A) {
    return ub.get(A);
  }, fb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === Gi && i === Vi) return we;
    if (o === Gi || o === Vi || o === Qc || i === Gi || i === Vi || i === Qc) return ji;
    if (o === Fc && [
      Fc,
      $i,
      Uc,
      Ec
    ].indexOf(i) !== -1 || (o === Uc || o === $i) && (i === $i || i === Wi) || (o === Ec || o === Wi) && i === Wi || i === Sc || i === bc || i === sb || o === ab) return we;
    if (o === Sc && i === xc) {
      for (; n === bc; ) n = e[--r];
      if (n === xc) return we;
    }
    if (o === Xi && i === Xi) {
      for (var a = 0; n === Xi; ) a++, n = e[--r];
      if (a % 2 === 0) return we;
    }
    return ji;
  }, gb = function(A) {
    var e = lb(A), t = e.length, r = 0, n = 0, o = e.map(db);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = we; r < t && (i = fb(e, o, ++r)) === we; ) ;
        if (i !== we || r === t) {
          var a = cb.apply(null, e.slice(n, r));
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
  }, pb = function(A) {
    for (var e = gb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, Bb = function(A) {
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
  }, hb = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = fi(r.data).map(function(s) {
      return NA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, Cb = function() {
    return typeof new Image().crossOrigin < "u";
  }, mb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, wb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Ic = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, vb = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Na(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Hc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", Ic(s) ? Hc(Na(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Ic(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Na = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Hc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, ee = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = Bb(document);
      return Object.defineProperty(ee, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ee.SUPPORT_RANGE_BOUNDS && hb(document);
      return Object.defineProperty(ee, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = wb(document);
      return Object.defineProperty(ee, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? vb(document) : Promise.resolve(false);
      return Object.defineProperty(ee, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = Cb();
      return Object.defineProperty(ee, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = mb();
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
  }, Gr = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), yb = function(A, e, t, r) {
    var n = Fb(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ee.SUPPORT_RANGE_BOUNDS) {
        var s = Tc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Gs(a), c = 0;
          l.forEach(function(d) {
            o.push(new Gr(d, nt.fromDOMRectList(A, Tc(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new Gr(a, nt.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new Gr(a, Qb(A, r))), r = u;
      }
      else ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, Qb = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = di(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return nt.EMPTY;
  }, Tc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Gs = function(A) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return pb(A);
  }, bb = function(A, e) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return Eb(A, e);
  }, Fb = function(A, e) {
    return e.letterSpacing !== 0 ? Gs(A) : bb(A, e);
  }, Ub = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], Eb = function(A, e) {
    for (var t = Av(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = fi(i), s = "";
        a.forEach(function(l) {
          Ub.indexOf(l) === -1 ? s += NA(l) : (s.length && r.push(s), r.push(NA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Sb = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = xb(t.data, r.textTransform), this.textBounds = yb(e, this.text, r, t);
    }
    return A;
  })(), xb = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(Ib, Hb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, Ib = /(^|\s|:|-|\(|\))([a-z])/g, Hb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, jd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(je), zd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(je), Jd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = di(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(je), Yd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), Ga = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(je), Tb = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Lb = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], kb = function(A) {
    return A.width > A.height ? new nt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new nt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Rb = function(A) {
    var e = A.type === Kb ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, mo = "checkbox", wo = "radio", Kb = "password", Lc = 707406591, Vs = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Rb(r), (n.type === mo || n.type === wo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = kb(n.bounds)), n.type) {
        case mo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Tb;
          break;
        case wo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Lb;
          break;
      }
      return n;
    }
    return e;
  })(je), Zd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(je), qd = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), Af = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = tf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? _r(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : qe.TRANSPARENT, i = r.contentWindow.document.body ? _r(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : qe.TRANSPARENT;
          n.backgroundColor = Bt(o) ? Bt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(je), Ob = [
    "OL",
    "UL",
    "MENU"
  ], to = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, rf(n) && n.data.trim().length > 0) t.textNodes.push(new Sb(A, n, t.styles));
    else if (er(n)) if (sf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return to(A, a, t, r);
    });
    else {
      var i = ef(A, n);
      i.styles.isVisible() && (Db(n, i, r) ? i.flags |= 4 : Mb(i.styles) && (i.flags |= 2), Ob.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? to(A, n.shadowRoot, i, r) : !vo(n) && !nf(n) && !yo(n) && to(A, n, i, r));
    }
  }, ef = function(A, e) {
    return $a(e) ? new jd(A, e) : of(e) ? new zd(A, e) : nf(e) ? new Jd(A, e) : Pb(e) ? new Yd(A, e) : _b(e) ? new Ga(A, e) : Nb(e) ? new Vs(A, e) : yo(e) ? new Zd(A, e) : vo(e) ? new qd(A, e) : af(e) ? new Af(A, e) : new je(A, e);
  }, tf = function(A, e) {
    var t = ef(A, e);
    return t.flags |= 4, to(A, e, t, t), t;
  }, Db = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || $s(A) && t.styles.isTransparent();
  }, Mb = function(A) {
    return A.isPositioned() || A.isFloating();
  }, rf = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, er = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Va = function(A) {
    return er(A) && typeof A.style < "u" && !ro(A);
  }, ro = function(A) {
    return typeof A.className == "object";
  }, Pb = function(A) {
    return A.tagName === "LI";
  }, _b = function(A) {
    return A.tagName === "OL";
  }, Nb = function(A) {
    return A.tagName === "INPUT";
  }, Gb = function(A) {
    return A.tagName === "HTML";
  }, nf = function(A) {
    return A.tagName === "svg";
  }, $s = function(A) {
    return A.tagName === "BODY";
  }, of = function(A) {
    return A.tagName === "CANVAS";
  }, kc = function(A) {
    return A.tagName === "VIDEO";
  }, $a = function(A) {
    return A.tagName === "IMG";
  }, af = function(A) {
    return A.tagName === "IFRAME";
  }, Rc = function(A) {
    return A.tagName === "STYLE";
  }, Vb = function(A) {
    return A.tagName === "SCRIPT";
  }, vo = function(A) {
    return A.tagName === "TEXTAREA";
  }, yo = function(A) {
    return A.tagName === "SELECT";
  }, sf = function(A) {
    return A.tagName === "SLOT";
  }, Kc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, $b = (function() {
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
  })(), Oc = {
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
  }, Dc = {
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
  }, Wb = {
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
  }, Xb = {
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
    return A < e || A > t ? Zr(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, lf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, _A = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (lf(Math.abs(A), o, r, function(i) {
      return NA(Math.floor(i % o) + e);
    }) + n);
  }, Qt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return lf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, Zt = 1, at = 2, st = 4, Kr = 8, Ze = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return Zr(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && XA(o, Zt) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && XA(o, at) || l === 1 && s === 1 && XA(o, st) && A > 100 || l === 1 && s > 1 && XA(o, Kr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Mc = "\u5341\u767E\u5343\u842C", Pc = "\u62FE\u4F70\u4EDF\u842C", _c = "\u30DE\u30A4\u30CA\u30B9", zi = "\uB9C8\uC774\uB108\uC2A4", Zr = function(A, e, t) {
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
        return Xt(A, 1, 3999, Oc, 3, r).toLowerCase();
      case 7:
        return Xt(A, 1, 3999, Oc, 3, r);
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
        return Xt(A, 1, 9999, Dc, 3, r);
      case 35:
        return Xt(A, 1, 9999, Dc, 3, r).toLowerCase();
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
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Mc, "\u8CA0", n, at | st | Kr);
      case 47:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Pc, "\u8CA0", n, Zt | at | st | Kr);
      case 42:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Mc, "\u8D1F", n, at | st | Kr);
      case 41:
        return Ze(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Pc, "\u8D1F", n, Zt | at | st | Kr);
      case 26:
        return Ze(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", _c, n, 0);
      case 25:
        return Ze(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", _c, n, Zt | at | st);
      case 31:
        return Ze(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", zi, o, Zt | at | st);
      case 33:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", zi, o, 0);
      case 32:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", zi, o, Zt | at | st);
      case 18:
        return _A(A, 2406, 2415, true, r);
      case 20:
        return Xt(A, 1, 19999, Xb, 3, r);
      case 21:
        return _A(A, 2790, 2799, true, r);
      case 22:
        return _A(A, 2662, 2671, true, r);
      case 22:
        return Xt(A, 1, 10999, Wb, 3, r);
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
  }, cf = "data-html2canvas-ignore", Nc = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new $b(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = jb(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = Yb(n).then(function() {
        return ue(r, void 0, void 0, function() {
          var c, u;
          return ae(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(eF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
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
                  Jb(s)
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
      return s.open(), s.write(qb(document.doctype) + "<html></html>"), AF(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (_a(e, 2)) debugger;
      if (of(e)) return this.createCanvasClone(e);
      if (kc(e)) return this.createVideoClone(e);
      if (Rc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return $a(t) && ($a(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Kc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Ji(e.style, t), t;
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
      (!er(t) || !Vb(t) && !t.hasAttribute(cf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !er(t) || !Rc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (er(o) && sf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (rf(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && er(e) && (Va(e) || ro(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Va(n) && (this.clonedReferenceElement = n), $s(n) && nF(n);
        var s = this.counters.parse(new mc(this.context, o)), l = this.resolvePseudoContent(e, n, i, Vr.BEFORE);
        Kc(e) && (t = true), kc(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, Vr.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || ro(e)) && !af(e) || t) && Ji(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (vo(e) || yo(e)) && (vo(n) || yo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new mc(this.context, r));
          var s = new PQ(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Ji(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(yA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var p = u.values.filter(cr), C = p[0], Q = p[1];
                if (C && yA(C)) {
                  var m = o.counters.getCounterValue(C.value), b = Q && yA(Q) ? Pa.parse(o.context, Q.value) : 3;
                  l.appendChild(a.createTextNode(Zr(m, b, false)));
                }
              } else if (u.name === "counters") {
                var w = u.values.filter(cr), C = w[0], v = w[1], Q = w[2];
                if (C && yA(C)) {
                  var U = o.counters.getCounterValues(C.value), h = Q && yA(Q) ? Pa.parse(o.context, Q.value) : 3, S = v && v.type === 0 ? v.value : "", I = U.map(function(x) {
                    return Zr(x, h, false);
                  }).join(S);
                  l.appendChild(a.createTextNode(I));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(Cc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(Cc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = Wa + " " + Xa;
          var c = n === Vr.BEFORE ? " " + Wa : " " + Xa;
          return ro(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), Vr;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(Vr || (Vr = {}));
  var jb = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(cf, "true"), A.body.appendChild(t), t;
  }, zb = function(A) {
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
  }, Jb = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(zb));
  }, Yb = function(A) {
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
  }, Zb = [
    "all",
    "d",
    "content"
  ], Ji = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      Zb.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, qb = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, AF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, eF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, tF = ":before", rF = ":after", Wa = "___html2canvas___pseudoelement_before", Xa = "___html2canvas___pseudoelement_after", Gc = `{
    content: "" !important;
    display: none !important;
}`, nF = function(A) {
    oF(A, "." + Wa + tF + Gc + `
         .` + Xa + rF + Gc);
  }, oF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, uf = (function() {
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
  })(), iF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Zi(e) || cF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return ue(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return ae(this, function(a) {
          switch (a.label) {
            case 0:
              return t = uf.isSameOrigin(e), r = !Yi(e) && this._options.useCORS === true && ee.SUPPORT_CORS_IMAGES && !t, n = !Yi(e) && !t && !Zi(e) && typeof this._options.proxy == "string" && ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !Yi(e) && !Zi(e) && !n && !r ? [
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
                  }, c.onerror = l, (uF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
  })(), aF = /^data:image\/svg\+xml/i, sF = /^data:image\/.*;base64,/i, lF = /^data:image\/.*/i, cF = function(A) {
    return ee.SUPPORT_SVG_DRAWING || !dF(A);
  }, Yi = function(A) {
    return lF.test(A);
  }, uF = function(A) {
    return sF.test(A);
  }, Zi = function(A) {
    return A.substr(0, 4) === "blob";
  }, dF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || aF.test(A);
  }, Y = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), jt = function(A, e, t) {
    return new Y(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, _n = (function() {
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
  }, fF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = kr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = kr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = kr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], f = kr(t.borderBottomLeftRadius, r.width, r.height), p = f[0], C = f[1], Q = [];
      Q.push((o + s) / r.width), Q.push((p + u) / r.width), Q.push((i + C) / r.height), Q.push((l + d) / r.height);
      var m = Math.max.apply(Math, Q);
      m > 1 && (o /= m, i /= m, s /= m, l /= m, u /= m, d /= m, p /= m, C /= m);
      var b = r.width - s, w = r.height - d, v = r.width - u, U = r.height - C, h = t.borderTopWidth, S = t.borderRightWidth, I = t.borderBottomWidth, T = t.borderLeftWidth, g = EA(t.paddingTop, e.bounds.width), x = EA(t.paddingRight, e.bounds.width), k = EA(t.paddingBottom, e.bounds.width), K = EA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + T / 3, r.top + h / 3, o - T / 3, i - h / 3, wA.TOP_LEFT) : new Y(r.left + T / 3, r.top + h / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + b, r.top + h / 3, s - S / 3, l - h / 3, wA.TOP_RIGHT) : new Y(r.left + r.width - S / 3, r.top + h / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u - S / 3, d - I / 3, wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S / 3, r.top + r.height - I / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || C > 0 ? LA(r.left + T / 3, r.top + U, p - T / 3, C - I / 3, wA.BOTTOM_LEFT) : new Y(r.left + T / 3, r.top + r.height - I / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + T * 2 / 3, r.top + h * 2 / 3, o - T * 2 / 3, i - h * 2 / 3, wA.TOP_LEFT) : new Y(r.left + T * 2 / 3, r.top + h * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + b, r.top + h * 2 / 3, s - S * 2 / 3, l - h * 2 / 3, wA.TOP_RIGHT) : new Y(r.left + r.width - S * 2 / 3, r.top + h * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u - S * 2 / 3, d - I * 2 / 3, wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S * 2 / 3, r.top + r.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || C > 0 ? LA(r.left + T * 2 / 3, r.top + U, p - T * 2 / 3, C - I * 2 / 3, wA.BOTTOM_LEFT) : new Y(r.left + T * 2 / 3, r.top + r.height - I * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? LA(r.left + T / 2, r.top + h / 2, o - T / 2, i - h / 2, wA.TOP_LEFT) : new Y(r.left + T / 2, r.top + h / 2), this.topRightBorderStroke = o > 0 || i > 0 ? LA(r.left + b, r.top + h / 2, s - S / 2, l - h / 2, wA.TOP_RIGHT) : new Y(r.left + r.width - S / 2, r.top + h / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u - S / 2, d - I / 2, wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S / 2, r.top + r.height - I / 2), this.bottomLeftBorderStroke = p > 0 || C > 0 ? LA(r.left + T / 2, r.top + U, p - T / 2, C - I / 2, wA.BOTTOM_LEFT) : new Y(r.left + T / 2, r.top + r.height - I / 2), this.topLeftBorderBox = o > 0 || i > 0 ? LA(r.left, r.top, o, i, wA.TOP_LEFT) : new Y(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? LA(r.left + b, r.top, s, l, wA.TOP_RIGHT) : new Y(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? LA(r.left + v, r.top + w, u, d, wA.BOTTOM_RIGHT) : new Y(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || C > 0 ? LA(r.left, r.top + U, p, C, wA.BOTTOM_LEFT) : new Y(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? LA(r.left + T, r.top + h, Math.max(0, o - T), Math.max(0, i - h), wA.TOP_LEFT) : new Y(r.left + T, r.top + h), this.topRightPaddingBox = s > 0 || l > 0 ? LA(r.left + Math.min(b, r.width - S), r.top + h, b > r.width + S ? 0 : Math.max(0, s - S), Math.max(0, l - h), wA.TOP_RIGHT) : new Y(r.left + r.width - S, r.top + h), this.bottomRightPaddingBox = u > 0 || d > 0 ? LA(r.left + Math.min(v, r.width - T), r.top + Math.min(w, r.height - I), Math.max(0, u - S), Math.max(0, d - I), wA.BOTTOM_RIGHT) : new Y(r.left + r.width - S, r.top + r.height - I), this.bottomLeftPaddingBox = p > 0 || C > 0 ? LA(r.left + T, r.top + Math.min(U, r.height - I), Math.max(0, p - T), Math.max(0, C - I), wA.BOTTOM_LEFT) : new Y(r.left + T, r.top + r.height - I), this.topLeftContentBox = o > 0 || i > 0 ? LA(r.left + T + K, r.top + h + g, Math.max(0, o - (T + K)), Math.max(0, i - (h + g)), wA.TOP_LEFT) : new Y(r.left + T + K, r.top + h + g), this.topRightContentBox = s > 0 || l > 0 ? LA(r.left + Math.min(b, r.width + T + K), r.top + h + g, b > r.width + T + K ? 0 : s - T + K, l - (h + g), wA.TOP_RIGHT) : new Y(r.left + r.width - (S + x), r.top + h + g), this.bottomRightContentBox = u > 0 || d > 0 ? LA(r.left + Math.min(v, r.width - (T + K)), r.top + Math.min(w, r.height + h + g), Math.max(0, u - (S + x)), d - (I + k), wA.BOTTOM_RIGHT) : new Y(r.left + r.width - (S + x), r.top + r.height - (I + k)), this.bottomLeftContentBox = p > 0 || C > 0 ? LA(r.left + T + K, r.top + U, Math.max(0, p - (T + K)), C - (I + k), wA.BOTTOM_LEFT) : new Y(r.left + T + K, r.top + r.height - (I + k));
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
        return new _n(new Y(A, l), new Y(A, l - a), new Y(s - i, e), new Y(s, e));
      case wA.TOP_RIGHT:
        return new _n(new Y(A, e), new Y(A + i, e), new Y(s, l - a), new Y(s, l));
      case wA.BOTTOM_RIGHT:
        return new _n(new Y(s, e), new Y(s, e + a), new Y(A + i, l), new Y(A, l));
      case wA.BOTTOM_LEFT:
      default:
        return new _n(new Y(s, l), new Y(s - i, l), new Y(A, e + a), new Y(A, e));
    }
  }, Qo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, gF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, bo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, pF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), Nn = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), BF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), hF = function(A) {
    return A.type === 0;
  }, df = function(A) {
    return A.type === 1;
  }, CF = function(A) {
    return A.type === 2;
  }, Vc = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, mF = function(A, e, t, r, n) {
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
  }, ff = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), gf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new fF(this.container), this.container.styles.opacity < 1 && this.effects.push(new BF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new pF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Qo(this.curves), a = bo(this.curves);
        Vc(i, a) ? this.effects.push(new Nn(i, 6)) : (this.effects.push(new Nn(i, 2)), this.effects.push(new Nn(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !df(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Qo(r.curves), a = bo(r.curves);
            Vc(i, a) || n.unshift(new Nn(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return XA(s.target, e);
      });
    }, A;
  })(), ja = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = XA(n.flags, 4), i = XA(n.flags, 2), a = new gf(n, A);
      XA(n.styles.display, 2048) && r.push(a);
      var s = XA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new ff(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(p, C) {
              return u > p.element.container.styles.zIndex.order ? (d = C, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var f = 0;
            l.positiveZIndex.some(function(p, C) {
              return u >= p.element.container.styles.zIndex.order ? (f = C + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        ja(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), ja(a, e, t, s);
      XA(n.flags, 8) && pf(n, s);
    });
  }, pf = function(A, e) {
    for (var t = A instanceof Ga ? A.start : 1, r = A instanceof Ga ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof Yd && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = Zr(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, wF = function(A) {
    var e = new gf(A, null), t = new ff(e), r = [];
    return ja(e, t, t, r), pf(e.container, r), t;
  }, $c = function(A, e) {
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
  }, vF = function(A, e) {
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
  }, yF = function(A, e) {
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
  }, QF = function(A, e) {
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
    return Qe(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Qe(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Fe = function(A, e, t, r) {
    var n = [];
    return Qe(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Qe(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Qe(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Qe(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Bf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Fo = function(A) {
    var e = A.styles, t = A.bounds, r = EA(e.paddingLeft, t.width), n = EA(e.paddingRight, t.width), o = EA(e.paddingTop, t.width), i = EA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, bF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Fo(e) : Bf(e);
  }, FF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Fo(e) : Bf(e);
  }, qi = function(A, e, t) {
    var r = bF(qt(A.styles.backgroundOrigin, e), A), n = FF(qt(A.styles.backgroundClip, e), A), o = UF(qt(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = kr(qt(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = EF(qt(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, zt = function(A) {
    return yA(A) && A.value === nr.AUTO;
  }, Vn = function(A) {
    return typeof A == "number";
  }, UF = function(A, e, t) {
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
    if (yA(i) && (i.value === nr.CONTAIN || i.value === nr.COVER)) {
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
        var f = c ? r : n * o, p = u ? n : r / o;
        return [
          f,
          p
        ];
      }
      var C = c ? r : t.width, Q = u ? n : t.height;
      return [
        C,
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
    if ($A(i) ? w = EA(i, t.width) : a && $A(a) && (v = EA(a, t.height)), w !== null && (!a || zt(a)) && (v = c && u ? w / r * n : t.height), v !== null && zt(i) && (w = c && u ? v / n * r : t.width), w !== null && v !== null) return [
      w,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, qt = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, EF = function(A, e, t, r, n) {
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
  }, SF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Wc = "Hidden Text", xF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = SF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(Wc)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(Wc)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), hf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), IF = 1e4, HF = (function(A) {
    Te(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new xF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), CF(t) && (this.ctx.globalAlpha = t.opacity), hF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), df(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
        var i = Gs(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = KF(t.fontFamily).join(", "), o = un(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(p) {
            u.forEach(function(C) {
              switch (C) {
                case 0:
                  d.ctx.fillStyle = zA(r.color), d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var Q = r.textShadow;
                  Q.length && p.text.trim().length && (Q.slice(0).reverse().forEach(function(m) {
                    d.ctx.shadowColor = zA(m.color), d.ctx.shadowOffsetX = m.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = m.offsetY.number * d.options.scale, d.ctx.shadowBlur = m.blur.number, d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = zA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(m) {
                    switch (m) {
                      case 1:
                        d.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top + l), p.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top), p.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(p.bounds.left, Math.ceil(p.bounds.top + c), p.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && p.text.trim().length && (d.ctx.strokeStyle = zA(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = Fo(t), i = bo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s, b, b, l, c, u, d, v, f, p, U, C, Q, m, b, w, v, U;
        return ae(this, function(h) {
          switch (h.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, h.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                4,
                this.renderTextNode(s, o)
              ]) : [
                3,
                4
              ];
            case 2:
              h.sent(), h.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              if (!(r instanceof jd)) return [
                3,
                8
              ];
              h.label = 5;
            case 5:
              return h.trys.push([
                5,
                7,
                ,
                8
              ]), [
                4,
                this.context.cache.match(r.src)
              ];
            case 6:
              return b = h.sent(), this.renderReplacedElement(r, n, b), [
                3,
                8
              ];
            case 7:
              return h.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof zd && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Jd)) return [
                3,
                12
              ];
              h.label = 9;
            case 9:
              return h.trys.push([
                9,
                11,
                ,
                12
              ]), [
                4,
                this.context.cache.match(r.svg)
              ];
            case 10:
              return b = h.sent(), this.renderReplacedElement(r, n, b), [
                3,
                12
              ];
            case 11:
              return h.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof Af && r.tree ? (l = new e(this.context, {
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
              c = h.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), h.label = 14;
            case 14:
              if (r instanceof Vs && (u = Math.min(r.bounds.width, r.bounds.height), r.type === mo ? r.checked && (this.ctx.save(), this.path([
                new Y(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new Y(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new Y(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new Y(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new Y(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new Y(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new Y(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = zA(Lc), this.ctx.fill(), this.ctx.restore()) : r.type === wo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = zA(Lc), this.ctx.fill(), this.ctx.restore())), TF(r) && r.value.length) {
                switch (d = this.createFontStyle(o), v = d[0], f = d[1], p = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = kF(r.styles.textAlign), U = Fo(r), C = 0, r.styles.textAlign) {
                  case 1:
                    C += U.width / 2;
                    break;
                  case 2:
                    C += U.width;
                    break;
                }
                Q = U.add(C, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new Y(U.left, U.top),
                  new Y(U.left + U.width, U.top),
                  new Y(U.left + U.width, U.top + U.height),
                  new Y(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Gr(r.value, Q), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
              b = void 0, w = m.url, h.label = 15;
            case 15:
              return h.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(w)
              ];
            case 16:
              return b = h.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return h.sent(), this.context.logger.error("Error loading list-style-image " + w), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new nt(r.bounds.left, r.bounds.top + EA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Bc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Gr(t.listValue, U), o.letterSpacing, Bc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), h.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, s, m, l, c, m, u, d, m, f, p, m, C, Q, m;
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
              u = 0, d = t.inlineLevel, b.label = 19;
            case 19:
              return u < d.length ? (m = d[u], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                22
              ];
            case 20:
              b.sent(), b.label = 21;
            case 21:
              return u++, [
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
              C = 0, Q = t.positiveZIndex, b.label = 27;
            case 27:
              return C < Q.length ? (m = Q[C], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              b.sent(), b.label = 29;
            case 29:
              return C++, [
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
                var u, d, f, g, M, N, K, $, I, p, g, M, N, K, $, C, Q, m, b, w, v, U, h, S, I, T, g, x, k, K, $, D, M, N, q, P, j, eA, nA, R, W, V;
                return ae(this, function(J) {
                  switch (J.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      u = void 0, d = c.url, J.label = 1;
                    case 1:
                      return J.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(d)
                      ];
                    case 2:
                      return u = J.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return J.sent(), o.context.logger.error("Error loading background-image " + d), [
                        3,
                        4
                      ];
                    case 4:
                      return u && (f = qi(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), g = f[0], M = f[1], N = f[2], K = f[3], $ = f[4], I = o.ctx.createPattern(o.resizeImage(u, K, $), "repeat"), o.renderRepeat(g, I, M, N)), [
                        3,
                        6
                      ];
                    case 5:
                      hy(c) ? (p = qi(t, r, [
                        null,
                        null,
                        null
                      ]), g = p[0], M = p[1], N = p[2], K = p[3], $ = p[4], C = dy(c.angle, K, $), Q = C[0], m = C[1], b = C[2], w = C[3], v = C[4], U = document.createElement("canvas"), U.width = K, U.height = $, h = U.getContext("2d"), S = h.createLinearGradient(m, w, b, v), gc(c.stops, Q).forEach(function(dA) {
                        return S.addColorStop(dA.stop, zA(dA.color));
                      }), h.fillStyle = S, h.fillRect(0, 0, K, $), K > 0 && $ > 0 && (I = o.ctx.createPattern(U, "repeat"), o.renderRepeat(g, I, M, N))) : Cy(c) && (T = qi(t, r, [
                        null,
                        null,
                        null
                      ]), g = T[0], x = T[1], k = T[2], K = T[3], $ = T[4], D = c.position.length === 0 ? [
                        Ps
                      ] : c.position, M = EA(D[0], K), N = EA(D[D.length - 1], $), q = fy(c, M, N, K, $), P = q[0], j = q[1], P > 0 && j > 0 && (eA = o.ctx.createRadialGradient(x + M, k + N, 0, x + M, k + N, P), gc(c.stops, P * 2).forEach(function(dA) {
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
          return this.path($c(n, r)), this.ctx.fillStyle = zA(t), this.ctx.fill(), [
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
              return i = vF(o, n), this.path(i), this.ctx.fillStyle = zA(t), this.ctx.fill(), a = yF(o, n), this.path(a), this.ctx.fill(), [
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
              ], i = LF(qt(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Bt(r.backgroundColor) || (this.ctx.fillStyle = zA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var p = Qo(t.curves), C = f.inset ? 0 : IF, Q = mF(p, -C + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(p), u.ctx.clip(), u.mask(Q)) : (u.mask(p), u.ctx.clip(), u.path(Q)), u.ctx.shadowOffsetX = f.offsetX.number + C, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = zA(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? zA(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
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
        var a, s, l, c, u, d, f, p, C, Q, m, b, w, v, U, h, U, h;
        return ae(this, function(S) {
          return this.ctx.save(), a = QF(o, n), s = $c(o, n), i === 2 && (this.path(s), this.ctx.clip()), Qe(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Qe(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - u) : f = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, C = r < 3 ? r * 2 : r, i === 3 && (p = r, C = r), Q = true, f <= p * 2 ? Q = false : f <= p * 2 + C ? (m = f / (2 * p + C), p *= m, C *= m) : (b = Math.floor((f + C) / (p + C)), w = (f - b * p) / (b - 1), v = (f - (b + 1) * p) / b, C = v <= 0 || Math.abs(C - w) < Math.abs(C - v) ? w : v), Q && (i === 3 ? this.ctx.setLineDash([
            0,
            p + C
          ]) : this.ctx.setLineDash([
            p,
            C
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = zA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Qe(s[0]) && (U = s[3], h = s[0], this.ctx.beginPath(), this.formatPath([
            new Y(U.end.x, U.end.y),
            new Y(h.start.x, h.start.y)
          ]), this.ctx.stroke()), Qe(s[1]) && (U = s[1], h = s[2], this.ctx.beginPath(), this.formatPath([
            new Y(U.end.x, U.end.y),
            new Y(h.start.x, h.start.y)
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
              return this.options.backgroundColor && (this.ctx.fillStyle = zA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = wF(t), [
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
  })(hf), TF = function(A) {
    return A instanceof qd || A instanceof Zd ? true : A instanceof Vs && A.type !== wo && A.type !== mo;
  }, LF = function(A, e) {
    switch (A) {
      case 0:
        return Qo(e);
      case 2:
        return gF(e);
      default:
        return bo(e);
    }
  }, kF = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, RF = [
    "-apple-system",
    "system-ui"
  ], KF = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return RF.indexOf(e) === -1;
    }) : A;
  }, OF = (function(A) {
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
              return r = Na(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                DF(r)
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
  })(hf), DF = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, MF = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, yn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, yn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, yn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, yn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), PF = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new MF({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new iF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), _F = function(A, e) {
    return e === void 0 && (e = {}), NF(A, e);
  };
  typeof window < "u" && uf.setContext(window);
  var NF = function(A, e) {
    return ue(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, f, p, C, Q, m, b, w, v, U, S, h, S, I, T, g, x, k, K, $, D, M, N, q, P, j, eA, nA, R, W;
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
              imageTimeout: (T = e.imageTimeout) !== null && T !== void 0 ? T : 15e3,
              proxy: e.proxy,
              useCORS: (g = e.useCORS) !== null && g !== void 0 ? g : false
            }, o = Ea({
              logging: (x = e.logging) !== null && x !== void 0 ? x : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (k = e.windowWidth) !== null && k !== void 0 ? k : r.innerWidth,
              windowHeight: (K = e.windowHeight) !== null && K !== void 0 ? K : r.innerHeight,
              scrollX: ($ = e.scrollX) !== null && $ !== void 0 ? $ : r.pageXOffset,
              scrollY: (D = e.scrollY) !== null && D !== void 0 ? D : r.pageYOffset
            }, a = new nt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new PF(o, a), l = (M = e.foreignObjectRendering) !== null && M !== void 0 ? M : false, c = {
              allowTaint: (N = e.allowTaint) !== null && N !== void 0 ? N : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Nc(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = V.sent(), p = $s(d) || Gb(d) ? mw(d.ownerDocument) : di(s, d), C = p.width, Q = p.height, m = p.left, b = p.top, w = GF(s, d, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (P = (q = e.scale) !== null && q !== void 0 ? q : r.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((j = e.x) !== null && j !== void 0 ? j : 0) + m,
              y: ((eA = e.y) !== null && eA !== void 0 ? eA : 0) + b,
              width: (nA = e.width) !== null && nA !== void 0 ? nA : Math.ceil(C),
              height: (R = e.height) !== null && R !== void 0 ? R : Math.ceil(Q)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), S = new OF(s, v), [
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
            return s.logger.debug("Document cloned, element located at " + m + "," + b + " with size " + C + "x" + Q + " using computed rendering"), s.logger.debug("Starting DOM parsing"), h = tf(s, d), w === h.styles.backgroundColor && (h.styles.backgroundColor = qe.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), S = new HF(s, v), [
              4,
              S.render(h)
            ];
          case 4:
            U = V.sent(), V.label = 5;
          case 5:
            return (!((W = e.removeContainer) !== null && W !== void 0) || W) && (Nc.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, GF = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? _r(A, getComputedStyle(r.documentElement).backgroundColor) : qe.TRANSPARENT, o = r.body ? _r(A, getComputedStyle(r.body).backgroundColor) : qe.TRANSPARENT, i = typeof t == "string" ? _r(A, t) : t === null ? qe.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Bt(n) ? Bt(o) ? i : o : n : i;
  }, Aa = {
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
  }, VF = {
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
  }, $F = function(A, e) {
    var t = JA({}, VF);
    if (A) for (var r in Aa) Object.prototype.hasOwnProperty.call(Aa, r) && (t[r] = JA(JA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Aa[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = JA(JA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Xc = function(A, e) {
    return A ? JA(JA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : JA({}, e.rbgcpControlBtn);
  }, $r = function(A, e) {
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
  }, WF = function(A) {
    var e = A.color, t = QA().defaultStyles, r = e ?? "";
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), H.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), H.createElement("path", {
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
  }, XF = function(A) {
    var e = A.onSelect, t = QA().defaultStyles, r = B.useState(null), n = r[0], o = r[1], i = B.useState(false), a = i[0], s = i[1], l = B.useState(false), c = l[0], u = l[1], d = function() {
      var C = document.getElementById("root");
      s(true), _F(C).then(function(Q) {
        var m = document.createElement("canvas"), b = m.getContext("2d", {
          willReadFrequently: true
        });
        C && b && (m.width = C.offsetWidth * 2, m.height = C.offsetHeight * 2, b.drawImage(Q, 0, 0)), o(b);
      });
    }, f = function(C) {
      if (C.stopPropagation(), n) {
        var Q = C.pageX, m = C.pageY, b = Q * 2, w = m * 2, v = n.getImageData(b, w, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      u(false), s(false);
    }, p = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var C = new window.EyeDropper(), Q = new window.AbortController();
        C.open({
          signal: Q.signal
        }).then(function(m) {
          var b = re(m.sRGBHex), w = b.toRgb(), v = w.r, U = w.g, h = w.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(h, ", 1)")), u(false);
        }).catch(function(m) {
          console.log(m), u(false);
        });
      }
    };
    return H.createElement("div", null, H.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Me(Me({}, t.rbgcpEyedropperBtn), $r(a, t))
    }, H.createElement(WF, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && H.createElement(Cw, null, H.createElement("div", {
      onClick: function(C) {
        return f(C);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, za = function() {
    return za = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, za.apply(this, arguments);
  }, ea = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = B.useState(false), d = u[0], f = u[1], p = B.useState(2), C = p[0], Q = p[1], m = e * (i - 18);
    B.useEffect(function() {
      var h;
      Q(((h = t == null ? void 0 : t.current) === null || h === void 0 ? void 0 : h.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var b = function() {
      f(false);
    }, w = function(h) {
      d && o(lr(h, c));
    }, v = function(h) {
      d || o(lr(h, c));
    }, U = function() {
      f(true);
    };
    return B.useEffect(function() {
      var h = function() {
        b();
      };
      return window.addEventListener("mouseup", h), function() {
        window.removeEventListener("mouseup", h);
      };
    }, []), H.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, H.createElement("div", {
      onMouseMove: function(h) {
        return w(h);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, H.createElement("div", {
      style: za({
        left: m,
        top: C
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), H.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: C + 2,
        zIndex: 10,
        textShadow: "1px 1px 1px rgba(0,0,0,.6)"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(l),
      onMouseMove: function(h) {
        return w(h);
      },
      onClick: function(h) {
        return v(h);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), H.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(h) {
        return v(h);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, jF = function(A) {
    var e = A.openAdvanced, t = QA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, f = B.useRef(null), p = B.useRef(null), C = B.useRef(null);
    Fm(f, a == null ? void 0 : a.h, d * 100, i), Um(p, a == null ? void 0 : a.h, u * 100, i), Em(C, a == null ? void 0 : a.h, u * 100, i);
    var Q = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: d
      }).toRgb(), U = v.r, h = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(h, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: u,
        l: w / 100
      }).toRgb(), U = v.r, h = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(h, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, b = function(w) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), U = v.r, h = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(h, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return H.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, H.createElement("div", {
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
    }, H.createElement(ea, {
      value: u,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: Q,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), H.createElement(ea, {
      value: d,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), H.createElement(ea, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: C,
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
  }, zF = function(A) {
    var e = A.openComparibles, t = QA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var f = d.toRgb(), p = f.r, C = f.g, Q = f.b, m = f.a;
      n("rgba(".concat(p, ",").concat(C, ",").concat(Q, ",").concat(m, ")"));
    };
    return H.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, H.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, H.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), H.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, f) {
      return H.createElement("div", {
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
    })), H.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, f) {
      return H.createElement("div", {
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
    })), H.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, f) {
      return H.createElement("div", {
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
    })), H.createElement("div", {
      style: xt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, f) {
      return H.createElement("div", {
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
  }, JF = function() {
    var A = QA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return H.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, H.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: xA(xA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(cw, {
      color: i ? "#568CF5" : ""
    })), H.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: xA(xA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(uw, {
      color: a ? "#568CF5" : ""
    })));
  }, YF = function() {
    var A = QA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, sr(parseInt(a), 0, 100));
    };
    return H.createElement("div", {
      style: xA(xA(xA(xA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, H.createElement(Bw, null), H.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: xA(xA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, ZF = function() {
    var A = QA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = sr(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return H.createElement("div", {
      style: xA(xA(xA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, H.createElement(pw, null), H.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: xA(xA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), H.createElement("div", {
      style: xA(xA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, qF = function() {
    var A = QA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return xA(xA({}, l), {
            value: c === t - 1 ? ui(l) : ln(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return H.createElement("div", {
      onClick: i,
      style: xA(xA({}, $r(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(lw, null));
  }, jc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = QA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return H.createElement("div", {
      style: xA(xA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && H.createElement(JF, null), H.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && H.createElement(ZF, null)), !r && H.createElement(YF, null), H.createElement(qF, null));
  }, qr = function() {
    return qr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, qr.apply(this, arguments);
  }, AU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = QA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? H.createElement("div", {
      style: {
        width: 1
      }
    }) : H.createElement("div", {
      style: qr({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, H.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Xc(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), H.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Xc(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, eU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = QA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, f) {
      e && (d.stopPropagation(), o(f), t(false));
    };
    return H.createElement("div", {
      style: qr({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, H.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: $n(n === "rgb", i)
    }, "RGB"), H.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: $n(n === "hsl", i)
    }, "HSL"), H.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: $n(n === "hsv", i)
    }, "HSV"), H.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: $n(n === "cmyk", i)
    }, "CMYK"));
  }, tU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, f = d === void 0 ? false : d, p = A.hideGradientControls, C = p === void 0 ? false : p, Q = A.hideGradientType, m = Q === void 0 ? false : Q, b = A.hideGradientAngle, w = b === void 0 ? false : b, v = A.hideGradientStop, U = v === void 0 ? false : v, h = QA(), S = h.config, I = h.onChange, T = h.isGradient, g = h.handleChange, x = h.previous, k = h.defaultStyles, K = h.pickerIdSuffix, $ = S.defaultColor, D = S.defaultGradient, M = B.useState(false), N = M[0], q = M[1], P = B.useState(false), j = P[0], eA = P[1], nA = B.useState(false), R = nA[0], W = nA[1], V = o && a && l && u, J = (e = x == null ? void 0 : x.color) !== null && e !== void 0 ? e : $, dA = (t = x == null ? void 0 : x.gradient) !== null && t !== void 0 ? t : D, iA = function() {
      I(J);
    }, tA = function() {
      I(dA);
    }, z = o && a && l && u, oA = z && f;
    return oA ? T && !C ? H.createElement(jc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }) : null : H.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, H.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(K)
    }, H.createElement(AU, {
      hideColorTypeBtns: f,
      setGradient: tA,
      isGradient: T,
      setSolid: iA,
      locales: r
    }), !z && H.createElement("div", {
      style: qr({
        display: V ? "none" : ""
      }, k.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(K)
    }, !o && H.createElement(XF, {
      onSelect: g
    }), !a && H.createElement("div", {
      id: "rbgcp-advanced-btn".concat(K),
      onClick: function() {
        return W(!R);
      },
      style: $r(R, k)
    }, H.createElement(dw, {
      color: R ? "#568CF5" : ""
    })), !l && H.createElement("div", {
      style: $r(N, k),
      onClick: function() {
        return q(!N);
      },
      id: "rbgcp-comparibles-btn".concat(K)
    }, H.createElement(gw, {
      color: N ? "#568CF5" : ""
    })), !u && H.createElement("div", {
      id: "rbgcp-color-model-btn".concat(K),
      onClick: function() {
        return eA(!j);
      },
      style: $r(j, k)
    }, H.createElement(fw, {
      color: j ? "#568CF5" : ""
    }), H.createElement(eU, {
      openInputType: j,
      setOpenInputType: eA
    })))), !a && H.createElement(jF, {
      openAdvanced: R
    }), !l && H.createElement(zF, {
      openComparibles: N
    }), T && !C && H.createElement(jc, {
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
  }, zc = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, rU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = QA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, f = function(C) {
      var Q = o == null ? void 0 : o.map(function(m, b) {
        return Pe(Pe({}, m), {
          value: b === C ? ui(m) : ln(m)
        });
      });
      c(Q);
    }, p = function(C) {
      C.stopPropagation(), f(t), r(true);
    };
    return H.createElement("div", {
      onMouseDown: function(C) {
        return p(C);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Pe(Pe({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, H.createElement("div", {
      style: Pe(Pe({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && H.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, nU = function() {
    var A = QA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = B.useState(false), u = c[0], d = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(w) {
      var v, U = lr(w, l), h = (v = zc(zc([], t.map(function(S) {
        return Pe(Pe({}, S), {
          value: ln(S)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(S, I) {
        return S.left - I.left;
      });
      s(h);
    }, C = function() {
      d(false);
    }, Q = function(w) {
      u || (p(w), d(true));
    }, m = function(w) {
      u && i(o, lr(w, l));
    }, b = function() {
      C();
    };
    return B.useEffect(function() {
      return window.addEventListener("mouseup", b), function() {
        window.removeEventListener("mouseup", b);
      };
    }), H.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, H.createElement("div", {
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
      return H.createElement(rU, {
        i: v,
        left: w.left,
        key: "".concat(v, "-").concat(w),
        setDragging: d
      });
    }));
  }, oU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, f = A.hideGradientStop, p = A.hideGradientAngle, C = A.hideColorTypeBtns, Q = A.hideAdvancedSliders, m = A.hideGradientControls, b = QA(), w = b.isGradient, v = b.pickerIdSuffix;
    return H.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !u && H.createElement(nw, null), !s && H.createElement(tU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: f,
      hideColorTypeBtns: C,
      hideGradientAngle: p,
      hideAdvancedSliders: Q,
      hideGradientControls: m
    }), w && H.createElement(nU, null), !r && H.createElement(Sm, null), !i && H.createElement(ow, null), !n && H.createElement(Om, null), !o && H.createElement(sw, {
      presets: t
    }));
  }, Uo = function() {
    return Uo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Uo.apply(this, arguments);
  };
  function iU(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, f = A.hideHue, p = f === void 0 ? false : f, C = A.presets, Q = C === void 0 ? [] : C, m = A.hideEyeDrop, b = m === void 0 ? false : m, w = A.hideAdvancedSliders, v = w === void 0 ? false : w, U = A.hideColorGuide, h = U === void 0 ? false : U, S = A.hideInputType, I = S === void 0 ? false : S, T = A.hideColorTypeBtns, g = T === void 0 ? false : T, x = A.hideGradientType, k = x === void 0 ? false : x, K = A.hideGradientAngle, $ = K === void 0 ? false : K, D = A.hideGradientStop, M = D === void 0 ? false : D, N = A.hideGradientControls, q = N === void 0 ? false : N, P = A.locales, j = P === void 0 ? iw : P, eA = A.width, nA = eA === void 0 ? 294 : eA, R = A.height, W = R === void 0 ? 294 : R, V = A.style, J = V === void 0 ? {} : V, dA = A.className, iA = A.disableDarkMode, tA = iA === void 0 ? false : iA, z = A.disableLightMode, oA = z === void 0 ? false : z, aA = A.hidePickerSquare, y = aA === void 0 ? false : aA, E = A.showHexAlpha, F = E === void 0 ? false : E, _ = A.config, X = _ === void 0 ? {} : _, G = Cm(r), sA = typeof window > "u" || tA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), cA = $F(sA, J), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return H.createElement("div", {
      className: dA,
      style: Uo(Uo({}, cA.body), {
        width: nA
      })
    }, H.createElement(Qm, {
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
    }, H.createElement(oU, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: p,
      presets: Q,
      hideEyeDrop: b,
      hideAdvancedSliders: v,
      hideColorGuide: h,
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
  function ta(A) {
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
  ra = function({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, [o, i] = B.useState(e[n] || ""), [a, s] = B.useState(false), [l, c] = B.useState(null), u = B.useRef(null), [d, f] = B.useState(null), p = B.useRef(false), C = B.useRef(e[n]), Q = r.context.theme, m = (h) => {
      if (h == null) {
        i(""), s(false), t({
          [n]: null
        }), p.current = false;
        return;
      }
      if (typeof h != "string") {
        s(true);
        return;
      }
      if (h.trim() === "") {
        i(""), s(false), t({
          [n]: null
        }), p.current = false;
        return;
      }
      const I = ta(h);
      i(h), I.isValid ? (s(false), t({
        [n]: I.normalizedValue || null
      })) : s(true);
    }, b = (h) => m(h), w = (h) => m(h.target.value), v = () => m(null), U = !!l;
    return B.useEffect(() => {
      const h = e[n];
      if (h !== C.current) {
        C.current = h;
        const S = h || "";
        i(S), s(false), (!S || S.trim() === "") && (p.current = false);
      }
    }, [
      e[n]
    ]), B.useEffect(() => {
      if (!U || !d) return;
      const h = new ResizeObserver(() => {
        var _a2;
        (_a2 = u.current) == null ? void 0 : _a2.updatePosition();
      });
      return h.observe(d), () => {
        h.disconnect();
      };
    }, [
      U,
      d
    ]), B.useEffect(() => {
      if (!U || p.current) return;
      const h = e[n];
      if (h && h.trim() !== "") {
        p.current = true;
        return;
      }
      let S = null;
      if (A.fallbackFields && Array.isArray(A.fallbackFields) && A.fallbackFields.length > 0) for (const I of A.fallbackFields) {
        const T = e[I];
        if (T && typeof T == "string") {
          const g = ta(T);
          if (g.isValid && g.normalizedValue.trim() !== "") {
            S = g.normalizedValue;
            break;
          }
        }
      }
      !S && (!A.fallbackFields || A.fallbackFields.length > 0) && (S = Q.palette.primary.main), S && ta(S).isValid && (i(S), s(false), t({
        [n]: S
      })), p.current = true;
    }, [
      U,
      e,
      n,
      A.fallbackFields,
      Q.palette.primary.main,
      t
    ]), L.jsx(L.Fragment, {
      children: L.jsxs(Ju, {
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
              L.jsx(am, {
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
              o && L.jsx(Xh, {
                onClick: v,
                title: Fa.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: L.jsx(cm, {})
              }),
              L.jsx(Ie, {
                onClick: (h) => {
                  c(h.currentTarget);
                },
                title: Fa.t("choose_color"),
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
          L.jsx(nd, {
            action: u,
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
              children: L.jsx(iU, {
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
  let Wn, aU, lU;
  Wn = (A) => {
    if (!A || typeof A != "string") return false;
    const e = A.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  yU = (A) => {
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
          return (s === "" || s === "Active") && (a = !o.iconColor && !Wn(l) && !Wn(c)), i !== void 0 && (a = !o.icon && !o.iconColor && !Wn(l) && !Wn(c)), a;
        }
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
        default: "",
        type: "custom",
        fallbackFields: [],
        component: (o, i, a, s) => L.jsx(ra, {
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
        component: (o, i, a, s) => L.jsx(ra, {
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
        fallbackFields: [],
        component: (o, i, a, s) => L.jsx(ra, {
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
  aU = () => {
    const { isSignalVisible: A, refService: e, widget: t } = B.useContext(gr), r = B.useMemo(() => {
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
  sU = (A, e = 28) => {
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
  lU = (A) => {
    const { widget: e } = B.useContext(gr), [t, r] = B.useState("100%"), [n, o] = B.useState("100%"), { width: i, height: a } = sU(A), s = B.useMemo(() => ({
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
  Xn = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    return e === "" ? null : /^(linear-gradient|radial-gradient)\(/i.test(e) ? A : null;
  };
  cU = B.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = B.useRef(null), s = B.useRef(null), [l, c] = B.useState(null), [u, d] = B.useState(null), f = B.useRef(null), [p, C] = B.useState(null), Q = B.useContext(gr);
    if (!Q) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: m, widget: b } = Q, w = b.data.oidObject, { backgroundStyles: v, borderStyles: U } = Ds(b.style), h = B.useRef(null), { width: S, height: I } = lU(l || h), T = (t || t === 0 || t === false) && `${t}${(w == null ? void 0 : w.unit) === void 0 ? "" : w == null ? void 0 : w.unit}`;
    aU();
    const g = w == null ? void 0 : w._id, x = e.footer || e.alias || e.value || T || "";
    return B.useEffect(() => {
      b.data.noFooter || p && (p.innerHTML = x);
    }, [
      x,
      b.data.noFooter,
      p
    ]), B.useEffect(() => {
      b.data.noHeader || u && (u.innerHTML = e.header);
    }, [
      e.header,
      b.data.noHeader,
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
    })), L.jsxs(ha, {
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
              children: L.jsx(Zn, {
                ref: (k) => {
                  d(k), f.current = k;
                },
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: Xn(e.textColorActive || e.textColor),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Xn(e.textColorActive || e.textColor) ? "transparent" : e.textColorActive || e.textColor
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
              children: L.jsx(ha, {
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
              children: L.jsx(Zn, {
                ref: C,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: Xn(e.textColorActive || e.textColor),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Xn(e.textColorActive || e.textColor) ? "transparent" : e.textColorActive || e.textColor
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
          children: L.jsx(Zn, {
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
  cU.displayName = "CollectionBase";
  let uU;
  uU = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  dU = (A, e, t) => !t && !uU(A) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  QU = ({ data: A, widget: e }) => {
    const r = B.useContext(gr).theme, n = (typeof A.icon == "string" ? A.icon : void 0) || (typeof A.iconActive == "string" ? A.iconActive : void 0), o = (typeof A.iconSize == "string" ? A.iconSize : void 0) || (typeof A.iconSizeActive == "string" ? A.iconSizeActive : void 0), i = A.iconColorActive || A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? L.jsx("img", {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${e.data.iconYOffset || 0})`,
        right: `calc(0px - ${e.data.iconXOffset || 0})`,
        height: o,
        ...dU(n, i, A.forceColorMaskActive)
      }
    }) : null;
  };
  function Jt(A, e) {
    return A[e];
  }
  function Ur(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  fU = (A) => typeof A == "number" ? `${A / 100}rem` : null;
  bU = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = B.useContext(gr), o = r[`${A}Object`], { fontStyles: i, backgroundStyles: a } = Ds(t.style), [s, l] = B.useState(), c = n(A), u = o == null ? void 0 : o.name, d = B.useCallback(fU, []), f = B.useCallback((w, v = "") => {
      const U = `${w}${v}`;
      return Jt(r, U);
    }, [
      r
    ]), { states: p, widgetStates: C, minValue: Q, maxValue: m } = B.useMemo(() => (() => {
      const v = [], U = {};
      let h = null, S = null;
      const I = o == null ? void 0 : o.type, T = (o == null ? void 0 : o.commonStates) || {}, g = Object.entries(T);
      if (I === "number" || I === "string" || I === "boolean" || I === "mixed") {
        for (let x = 1; x <= r.values_count; x++) {
          const k = r[`value${x}`], K = r[`alias${x}`], $ = o == null ? void 0 : o.unit;
          if (k != null && /\S/.test(String(k))) {
            const D = g.find(([N]) => N === String(k));
            v.push({
              value: D ? I === "number" ? Number(D[0]) : String(D[0]) : I === "number" ? Number(k) : k,
              valueSize: typeof f("valueSize", String(x)) == "number" ? d(f("valueSize", String(x))) : null,
              label: String(K && String(K).trim() !== "" ? K : `${k}${$}`).replace(/(\r\n|\n|\r)/gm, ""),
              alias: String(K && String(K).trim() !== "" ? K : `${k}${$}`).replace(/(\r\n|\n|\r)/gm, ""),
              fontSize: (() => {
                if (String(c) === String(k) && typeof r.valueSizeActive == "number") return d(r.valueSizeActive);
                const q = Jt(r, `valueSize${x}`);
                if (typeof q == "number") return d(q);
                if (Ur(r) && typeof r.markerTextSize == "number") return d(r.markerTextSize);
                if (typeof r.valueSize == "number") return d(r.valueSize);
              })(),
              textColor: (() => {
                if (String(c) === String(k) && r.textColorActive) return r.textColorActive;
                const q = Jt(r, `textColor${x}`);
                if (q) return q;
                if (Ur(r) && r.markerTextColor) return r.markerTextColor;
                if (r.textColor) return r.textColor;
              })(),
              icon: (() => {
                const N = r[`icon${x}`] || r[`iconSmall${x}`] || r.icon || r.iconSmall;
                return typeof N == "string" ? N : void 0;
              })(),
              iconSize: typeof r[`iconSize${x}`] == "number" ? r[`iconSize${x}`] : void 0,
              iconWidth: (() => {
                if (String(c) === String(k) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const q = Jt(r, `iconSize${x}`);
                return typeof q == "number" ? q : Ur(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconHeight: (() => {
                if (String(c) === String(k) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const q = Jt(r, `iconSize${x}`);
                return typeof q == "number" ? q : Ur(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconXOffset: (() => {
                const N = f("iconXOffset", String(x));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconYOffset: (() => {
                const N = f("iconYOffset", String(x));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconColor: Jt(r, `iconColor${x}`) || (Ur(r) ? r.markerIconColor : void 0) || r.iconColor || e.palette.primary.main,
              iconHover: (() => {
                const N = f("iconHover", String(x));
                return N ? `${N}%` : void 0;
              })(),
              forceColorMask: r[`enableIconColorMask${x}`] ?? (r.enableIconColorMaskActive || false),
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
          x.length > 0 && (h = Math.min(...x), S = Math.max(...x));
        }
      }
      return {
        states: v,
        widgetStates: U,
        minValue: h,
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
      d
    ]), b = B.useMemo(() => {
      const w = (U = "") => ({
        textColor: r.textColor,
        textColorActive: f("textColor", String(U)),
        header: String(r.headerActive || f("header", String(U)) || r.header || u || "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: d(r.headerSize) || d(r.headerSizeActive) || d(f("headerSize", String(U))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        footer: String(r.footerActive || f("footer", String(U)) || r.footer || "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: d(r.footerSize) || d(r.footerSizeActive) || d(f("footerSize", String(U))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        alias: String(f("alias", String(U)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const h = f("value", String(U));
          return h != null ? `${h}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
        })(),
        valueSize: d(r.valueSize) || (typeof i.fontSize == "string" ? i.fontSize : null),
        valueSizeActive: typeof f("valueSize", String(U)) == "number" ? d(f("valueSize", String(U))) : null,
        icon: (() => {
          if (r.noIcon) return null;
          const h = r.icon || r.iconSmall;
          return typeof h == "string" ? h : null;
        })(),
        iconActive: (() => {
          const h = !r.noIcon && (f("icon", String(U)) || f("iconSmall", String(U)));
          return typeof h == "string" ? h : null;
        })(),
        iconSize: typeof r.iconSize == "number" && `calc(24px * ${r.iconSize} / 100)` || "24px",
        iconSizeActive: (() => {
          const h = f("iconSize", String(U));
          return h ? `calc(24px * ${h} / 100)` : false;
        })(),
        forceColorMaskActive: f("enableIconColorMask", String(U)) || false,
        iconSizeActiveOnly: f("iconSize", String(U)),
        iconSizeOnly: f("iconSize", String(U)) || f("iconSize", String(U)) === 0 ? f("iconSize", String(U)) : r.iconSize,
        iconColor: r.iconColor,
        iconColorActive: f("iconColor", String(U)),
        iconHover: r.iconHover ? `${r.iconHover}%` : void 0,
        iconHoverActive: (() => {
          const h = f("iconHover", String(U));
          return h ? `${h}%` : void 0;
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
          const U = p.findIndex((h) => String(h.value) === String(c));
          return U !== -1 ? (l(U + 1), w(String(U + 1))) : (l(void 0), w(""));
        }
        default:
          return w("");
      }
    }, [
      o,
      c,
      u,
      r,
      p,
      i,
      a,
      d,
      f
    ]);
    return {
      states: p,
      widgetStates: C,
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
  ms as $,
  Xn as A,
  B0 as B,
  Re as C,
  uo as D,
  cU as E,
  d0 as F,
  QU as G,
  Fa as H,
  Xh as I,
  yU as J,
  vU as K,
  CC as L,
  G0 as M,
  ra as N,
  fU as O,
  ha as P,
  dl as Q,
  Pp as R,
  Lt as S,
  Zn as T,
  He as U,
  Ru as V,
  gl as W,
  tB as X,
  Jp as Y,
  zu as Z,
  mt as _,
  __tla,
  IA as a,
  Cs as a0,
  ca as a1,
  nh as a2,
  wU as a3,
  sU as a4,
  sd as a5,
  fr as a6,
  sl as a7,
  dr as a8,
  Rp as a9,
  Bs as aa,
  bu as ab,
  et as ac,
  CU as ad,
  ds as ae,
  YA as af,
  hU as ag,
  gs as ah,
  on as ai,
  ga as aj,
  Nh as ak,
  le as b,
  Yu as c,
  pA as d,
  RA as e,
  Us as f,
  kA as g,
  oi as h,
  hA as i,
  L as j,
  tt as k,
  pe as l,
  OA as m,
  Th as n,
  ir as o,
  Fi as p,
  va as q,
  $e as r,
  lA as s,
  mU as t,
  KA as u,
  gr as v,
  Ie as w,
  yC as x,
  bU as y,
  dU as z
};
