import { v as h, R as oa, a as S, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as Ya, c as un } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as yf } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Zu, QU, v0, Ce, uo, KU, h0, Ua, RU, Zh, kU, LU, yw, X0, $n, yU, wa, zc, dl, FU, Yn, $p, Lt, Te, Du, gl, aB, eB, IA, mt, Cs, ms, ua, lh, wU, TU, CU, ud, fr, sl, dr, Pp, hs, Eu, et, IU, fs, YA, SU, ps, rn, pa, jh, dd, le, Ad, pA, kA, Es, RA, ii, hA, L, tt, pe, OA, Oh, ir, Ui, Qa, $e, lA, HU, KA, an, He, Ew, bU, Wn;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var qc = {
    exports: {}
  }, xo = {};
  var bf = h, Ff = /* @__PURE__ */ Symbol.for("react.element"), Uf = /* @__PURE__ */ Symbol.for("react.fragment"), Ef = Object.prototype.hasOwnProperty, xf = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Au(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) Ef.call(e, r) && !Sf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: Ff,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: xf.current
    };
  }
  xo.Fragment = Uf;
  xo.jsx = Au;
  xo.jsxs = Au;
  qc.exports = xo;
  L = qc.exports;
  const Vr = {
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
  }, Br = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, If = {
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
  function Hf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Tf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Lf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Hf(n);
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
  })(), ie = "-ms-", oo = "-moz-", wA = "-webkit-", eu = "comm", Za = "rule", qa = "decl", Rf = "@import", tu = "@keyframes", kf = "@layer", Kf = Math.abs, So = String.fromCharCode, Of = Object.assign;
  function Df(A, e) {
    return te(A, 0) ^ 45 ? (((e << 2 ^ te(A, 0)) << 2 ^ te(A, 1)) << 2 ^ te(A, 2)) << 2 ^ te(A, 3) : 0;
  }
  function ru(A) {
    return A.trim();
  }
  function Mf(A, e) {
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
  function $r(A, e, t) {
    return A.slice(e, t);
  }
  function Oe(A) {
    return A.length;
  }
  function As(A) {
    return A.length;
  }
  function dn(A, e) {
    return e.push(A), A;
  }
  function Pf(A, e) {
    return A.map(e).join("");
  }
  var Io = 1, or = 1, nu = 0, ge = 0, VA = 0, ur = "";
  function Ho(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Io,
      column: or,
      length: i,
      return: ""
    };
  }
  function hr(A, e) {
    return Of(Ho("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function _f() {
    return VA;
  }
  function Nf() {
    return VA = ge > 0 ? te(ur, --ge) : 0, or--, VA === 10 && (or = 1, Io--), VA;
  }
  function we() {
    return VA = ge < nu ? te(ur, ge++) : 0, or++, VA === 10 && (or = 1, Io++), VA;
  }
  function Ve() {
    return te(ur, ge);
  }
  function jn() {
    return ge;
  }
  function Zr(A, e) {
    return $r(ur, A, e);
  }
  function Wr(A) {
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
  function ou(A) {
    return Io = or = 1, nu = Oe(ur = A), ge = 0, [];
  }
  function iu(A) {
    return ur = "", A;
  }
  function Xn(A) {
    return ru(Zr(ge - 1, aa(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function Gf(A) {
    for (; (VA = Ve()) && VA < 33; ) we();
    return Wr(A) > 2 || Wr(VA) > 3 ? "" : " ";
  }
  function Vf(A, e) {
    for (; --e && we() && !(VA < 48 || VA > 102 || VA > 57 && VA < 65 || VA > 70 && VA < 97); ) ;
    return Zr(A, jn() + (e < 6 && Ve() == 32 && we() == 32));
  }
  function aa(A) {
    for (; we(); ) switch (VA) {
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
        we();
        break;
    }
    return ge;
  }
  function $f(A, e) {
    for (; we() && A + VA !== 57; ) if (A + VA === 84 && Ve() === 47) break;
    return "/*" + Zr(e, ge - 1) + "*" + So(A === 47 ? A : we());
  }
  function Wf(A) {
    for (; !Wr(Ve()); ) we();
    return Zr(A, ge);
  }
  function jf(A) {
    return iu(Jn("", null, null, null, [
      ""
    ], A = ou(A), 0, [
      0
    ], A));
  }
  function Jn(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, d = i, u = 0, f = 0, p = 0, B = 1, y = 1, m = 1, F = 0, C = "", v = n, U = o, w = r, x = C; y; ) switch (p = F, F = we()) {
      case 40:
        if (p != 108 && te(x, d - 1) == 58) {
          ia(x += mA(Xn(F), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Xn(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Gf(p);
        break;
      case 92:
        x += Vf(jn() - 1, 7);
        continue;
      case 47:
        switch (Ve()) {
          case 42:
          case 47:
            dn(Xf($f(we(), jn()), e, t), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * B:
        a[l++] = Oe(x) * m;
      case 125 * B:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            y = 0;
          case 59 + c:
            m == -1 && (x = mA(x, /\f/g, "")), f > 0 && Oe(x) - d && dn(f > 32 ? Xs(x + ";", r, t, d - 1) : Xs(mA(x, " ", "") + ";", r, t, d - 2), s);
            break;
          case 59:
            x += ";";
          default:
            if (dn(w = js(x, e, t, l, c, n, a, C, v = [], U = [], d), o), F === 123) if (c === 0) Jn(x, e, w, w, v, o, d, a, U);
            else switch (u === 99 && te(x, 3) === 110 ? 100 : u) {
              case 100:
              case 108:
              case 109:
              case 115:
                Jn(A, w, w, r && dn(js(A, w, w, 0, 0, n, a, C, n, v = [], d), U), n, U, d, a, r ? v : U);
                break;
              default:
                Jn(x, w, w, w, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, B = m = 1, C = x = "", d = i;
        break;
      case 58:
        d = 1 + Oe(x), f = p;
      default:
        if (B < 1) {
          if (F == 123) --B;
          else if (F == 125 && B++ == 0 && Nf() == 125) continue;
        }
        switch (x += So(F), F * B) {
          case 38:
            m = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[l++] = (Oe(x) - 1) * m, m = 1;
            break;
          case 64:
            Ve() === 45 && (x += Xn(we())), u = Ve(), c = d = Oe(C = x += Wf(jn())), F++;
            break;
          case 45:
            p === 45 && Oe(x) == 2 && (B = 0);
        }
    }
    return o;
  }
  function js(A, e, t, r, n, o, i, a, s, l, c) {
    for (var d = n - 1, u = n === 0 ? o : [
      ""
    ], f = As(u), p = 0, B = 0, y = 0; p < r; ++p) for (var m = 0, F = $r(A, d + 1, d = Kf(B = i[p])), C = A; m < f; ++m) (C = ru(B > 0 ? u[m] + " " + F : mA(F, /&\f/g, u[m]))) && (s[y++] = C);
    return Ho(A, e, t, n === 0 ? Za : a, s, l, c);
  }
  function Xf(A, e, t) {
    return Ho(A, e, t, eu, So(_f()), $r(A, 2, -2), 0);
  }
  function Xs(A, e, t, r) {
    return Ho(A, e, t, qa, $r(A, 0, r), $r(A, r + 1, -1), r);
  }
  function tr(A, e) {
    for (var t = "", r = As(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Jf(A, e, t, r) {
    switch (A.type) {
      case kf:
        if (A.children.length) break;
      case Rf:
      case qa:
        return A.return = A.return || A.value;
      case eu:
        return "";
      case tu:
        return A.return = A.value + "{" + tr(A.children, r) + "}";
      case Za:
        A.value = A.props.join(",");
    }
    return Oe(t = tr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function zf(A) {
    var e = As(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function Yf(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function au(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Zf = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = Ve(), n === 38 && o === 12 && (t[r] = 1), !Wr(o); ) we();
    return Zr(e, ge);
  }, qf = function(e, t) {
    var r = -1, n = 44;
    do
      switch (Wr(n)) {
        case 0:
          n === 38 && Ve() === 12 && (t[r] = 1), e[r] += Zf(ge - 1, t, r);
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
          e[r] += So(n);
      }
    while (n = we());
    return e;
  }, Ag = function(e, t) {
    return iu(qf(ou(e), t));
  }, Js = /* @__PURE__ */ new WeakMap(), eg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Js.get(r)) && !n) {
        Js.set(e, true);
        for (var o = [], i = Ag(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, tg = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function su(A, e) {
    switch (Df(A, e)) {
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
        return wA + A + oo + A + ie + A + A;
      case 6828:
      case 4268:
        return wA + A + ie + A + A;
      case 6165:
        return wA + A + ie + "flex-" + A + A;
      case 5187:
        return wA + A + mA(A, /(\w+).+(:[^]+)/, wA + "box-$1$2" + ie + "flex-$1$2") + A;
      case 5443:
        return wA + A + ie + "flex-item-" + mA(A, /flex-|-self/, "") + A;
      case 4675:
        return wA + A + ie + "flex-line-pack" + mA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return wA + A + ie + mA(A, "shrink", "negative") + A;
      case 5292:
        return wA + A + ie + mA(A, "basis", "preferred-size") + A;
      case 6060:
        return wA + "box-" + mA(A, "-grow", "") + wA + A + ie + mA(A, "grow", "positive") + A;
      case 4554:
        return wA + mA(A, /([^-])(transform)/g, "$1" + wA + "$2") + A;
      case 6187:
        return mA(mA(mA(A, /(zoom-|grab)/, wA + "$1"), /(image-set)/, wA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return mA(A, /(image-set\([^]*)/, wA + "$1$`$1");
      case 4968:
        return mA(mA(A, /(.+:)(flex-)?(.*)/, wA + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + wA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return mA(A, /(.+)-inline(.+)/, wA + "$1$2") + A;
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
            return mA(A, /(.+:)(.+)-([^]+)/, "$1" + wA + "$2-$3$1" + oo + (te(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ia(A, "stretch") ? su(mA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (te(A, e + 1) !== 115) break;
      case 6444:
        switch (te(A, Oe(A) - 3 - (~ia(A, "!important") && 10))) {
          case 107:
            return mA(A, ":", ":" + wA) + A;
          case 101:
            return mA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + wA + (te(A, 14) === 45 ? "inline-" : "") + "box$3$1" + wA + "$2$3$1" + ie + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (te(A, e + 11)) {
          case 114:
            return wA + A + ie + mA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return wA + A + ie + mA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return wA + A + ie + mA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return wA + A + ie + A + A;
    }
    return A;
  }
  var rg = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case qa:
        e.return = su(e.value, e.length);
        break;
      case tu:
        return tr([
          hr(e, {
            value: mA(e.value, "@", "@" + wA)
          })
        ], n);
      case Za:
        if (e.length) return Pf(e.props, function(o) {
          switch (Mf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return tr([
                hr(e, {
                  props: [
                    mA(o, /:(read-\w+)/, ":" + oo + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return tr([
                hr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ":" + wA + "input-$1")
                  ]
                }),
                hr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ":" + oo + "$1")
                  ]
                }),
                hr(e, {
                  props: [
                    mA(o, /:(plac\w+)/, ie + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, ng = [
    rg
  ], og = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(B) {
        var y = B.getAttribute("data-emotion");
        y.indexOf(" ") !== -1 && (document.head.appendChild(B), B.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || ng, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(B) {
      for (var y = B.getAttribute("data-emotion").split(" "), m = 1; m < y.length; m++) o[y[m]] = true;
      a.push(B);
    });
    var s, l = [
      eg,
      tg
    ];
    {
      var c, d = [
        Jf,
        Yf(function(B) {
          c.insert(B);
        })
      ], u = zf(l.concat(n, d)), f = function(y) {
        return tr(jf(y), u);
      };
      s = function(y, m, F, C) {
        c = F, f(y ? y + "{" + m.styles + "}" : m.styles), C && (p.inserted[m.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new Lf({
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
  }, lu = {
    exports: {}
  }, vA = {};
  var ZA = typeof Symbol == "function" && Symbol.for, es = ZA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, ts = ZA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, To = ZA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Lo = ZA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Ro = ZA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ko = ZA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ko = ZA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, rs = ZA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Oo = ZA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Do = ZA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Mo = ZA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, ig = ZA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Po = ZA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, _o = ZA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, ag = ZA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, sg = ZA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, lg = ZA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, cg = ZA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function me(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case es:
          switch (A = A.type, A) {
            case rs:
            case Oo:
            case To:
            case Ro:
            case Lo:
            case Mo:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Ko:
                case Do:
                case _o:
                case Po:
                case ko:
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
  function cu(A) {
    return me(A) === Oo;
  }
  vA.AsyncMode = rs;
  vA.ConcurrentMode = Oo;
  vA.ContextConsumer = Ko;
  vA.ContextProvider = ko;
  vA.Element = es;
  vA.ForwardRef = Do;
  vA.Fragment = To;
  vA.Lazy = _o;
  vA.Memo = Po;
  vA.Portal = ts;
  vA.Profiler = Ro;
  vA.StrictMode = Lo;
  vA.Suspense = Mo;
  vA.isAsyncMode = function(A) {
    return cu(A) || me(A) === rs;
  };
  vA.isConcurrentMode = cu;
  vA.isContextConsumer = function(A) {
    return me(A) === Ko;
  };
  vA.isContextProvider = function(A) {
    return me(A) === ko;
  };
  vA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === es;
  };
  vA.isForwardRef = function(A) {
    return me(A) === Do;
  };
  vA.isFragment = function(A) {
    return me(A) === To;
  };
  vA.isLazy = function(A) {
    return me(A) === _o;
  };
  vA.isMemo = function(A) {
    return me(A) === Po;
  };
  vA.isPortal = function(A) {
    return me(A) === ts;
  };
  vA.isProfiler = function(A) {
    return me(A) === Ro;
  };
  vA.isStrictMode = function(A) {
    return me(A) === Lo;
  };
  vA.isSuspense = function(A) {
    return me(A) === Mo;
  };
  vA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === To || A === Oo || A === Ro || A === Lo || A === Mo || A === ig || typeof A == "object" && A !== null && (A.$$typeof === _o || A.$$typeof === Po || A.$$typeof === ko || A.$$typeof === Ko || A.$$typeof === Do || A.$$typeof === sg || A.$$typeof === lg || A.$$typeof === cg || A.$$typeof === ag);
  };
  vA.typeOf = me;
  lu.exports = vA;
  var ug = lu.exports, uu = ug, dg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, fg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, du = {};
  du[uu.ForwardRef] = dg;
  du[uu.Memo] = fg;
  var gg = true;
  function fu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var ns = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || gg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
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
  function pg(A) {
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
  var Bg = {
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
  }, hg = /[A-Z]|^ms/g, wg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gu = function(e) {
    return e.charCodeAt(1) === 45;
  }, zs = function(e) {
    return e != null && typeof e != "boolean";
  }, yi = au(function(A) {
    return gu(A) ? A : A.replace(hg, "-$&").toLowerCase();
  }), Ys = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(wg, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return Bg[e] !== 1 && !gu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
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
        return mg(A, e, t);
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
    var d = e[c];
    return d !== void 0 ? d : c;
  }
  function mg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += jr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : zs(a) && (r += yi(o) + ":" + Ys(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) zs(i[s]) && (r += yi(o) + ":" + Ys(o, i[s]) + ";");
      else {
        var l = jr(A, e, i);
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
  function qr(A, e, t) {
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
    Zs.lastIndex = 0;
    for (var l = "", c; (c = Zs.exec(n)) !== null; ) l += "-" + c[1];
    var d = pg(n) + l;
    return {
      name: d,
      styles: n,
      next: De
    };
  }
  var Cg = function(e) {
    return e();
  }, pu = oa.useInsertionEffect ? oa.useInsertionEffect : false, Bu = pu || Cg, qs = pu || h.useLayoutEffect, hu = h.createContext(typeof HTMLElement < "u" ? og({
    key: "css"
  }) : null);
  hu.Provider;
  var is = function(e) {
    return h.forwardRef(function(t, r) {
      var n = h.useContext(hu);
      return e(t, n, r);
    });
  }, An = h.createContext({}), as = {}.hasOwnProperty, sa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", vg = function(e, t) {
    var r = {};
    for (var n in t) as.call(t, n) && (r[n] = t[n]);
    return r[sa] = e, r;
  }, Qg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return ns(t, r, n), Bu(function() {
      return os(t, r, n);
    }), null;
  }, yg = is(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[sa], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = fu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = qr(o, void 0, h.useContext(An));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) as.call(A, l) && l !== "css" && l !== sa && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), h.createElement(h.Fragment, null, h.createElement(Qg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), h.createElement(n, s));
  }), bg = yg, Al = function(e, t) {
    var r = arguments;
    if (t == null || !as.call(t, "css")) return h.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = bg, o[1] = vg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return h.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(Al || (Al = {}));
  var Fg = is(function(A, e) {
    var t = A.styles, r = qr([
      t
    ], void 0, h.useContext(An)), n = h.useRef();
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
    return qr(e);
  }
  function en() {
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
  var Ug = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Eg = au(function(A) {
    return Ug.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), xg = Eg, Sg = function(e) {
    return e !== "theme";
  }, el = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? xg : Sg;
  }, tl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Ig = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return ns(t, r, n), Bu(function() {
      return os(t, r, n);
    }), null;
  }, Hg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = tl(e, t, r), s = a || el(n), l = !s("as");
    return function() {
      var c = arguments, d = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && d.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
      else {
        var u = c[0];
        d.push(u[0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], u[p]);
      }
      var B = is(function(y, m, F) {
        var C = l && y.as || n, v = "", U = [], w = y;
        if (y.theme == null) {
          w = {};
          for (var x in y) w[x] = y[x];
          w.theme = h.useContext(An);
        }
        typeof y.className == "string" ? v = fu(m.registered, U, y.className) : y.className != null && (v = y.className + " ");
        var I = qr(d.concat(U), m.registered, w);
        v += m.key + "-" + I.name, i !== void 0 && (v += " " + i);
        var H = l && a === void 0 ? el(C) : s, g = {};
        for (var T in y) l && T === "as" || H(T) && (g[T] = y[T]);
        return g.className = v, F && (g.ref = F), h.createElement(h.Fragment, null, h.createElement(Ig, {
          cache: m,
          serialized: I,
          isStringTag: typeof C == "string"
        }), h.createElement(C, g));
      });
      return B.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", B.defaultProps = e.defaultProps, B.__emotion_real = B, B.__emotion_base = n, B.__emotion_styles = d, B.__emotion_forwardProp = a, Object.defineProperty(B, "toString", {
        value: function() {
          return "." + i;
        }
      }), B.withComponent = function(y, m) {
        var F = A(y, no({}, t, m, {
          shouldForwardProp: tl(B, m, true)
        }));
        return F.apply(void 0, d);
      }, B;
    };
  }, Tg = [
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
  ], la = Hg.bind(null);
  Tg.forEach(function(A) {
    la[A] = la(A);
  });
  function Lg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function wu(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Lg(n) ? t : n) : e;
    return L.jsx(Fg, {
      styles: r
    });
  }
  function mu(A, e) {
    return la(A, e);
  }
  function Rg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const rl = [];
  function gt(A) {
    return rl[0] = A, qr(rl);
  }
  var Cu = {
    exports: {}
  }, UA = {};
  var ls = /* @__PURE__ */ Symbol.for("react.transitional.element"), cs = /* @__PURE__ */ Symbol.for("react.portal"), No = /* @__PURE__ */ Symbol.for("react.fragment"), Go = /* @__PURE__ */ Symbol.for("react.strict_mode"), Vo = /* @__PURE__ */ Symbol.for("react.profiler"), $o = /* @__PURE__ */ Symbol.for("react.consumer"), Wo = /* @__PURE__ */ Symbol.for("react.context"), jo = /* @__PURE__ */ Symbol.for("react.forward_ref"), Xo = /* @__PURE__ */ Symbol.for("react.suspense"), Jo = /* @__PURE__ */ Symbol.for("react.suspense_list"), zo = /* @__PURE__ */ Symbol.for("react.memo"), Yo = /* @__PURE__ */ Symbol.for("react.lazy"), kg = /* @__PURE__ */ Symbol.for("react.view_transition"), Kg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case ls:
          switch (A = A.type, A) {
            case No:
            case Vo:
            case Go:
            case Xo:
            case Jo:
            case kg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Wo:
                case jo:
                case Yo:
                case zo:
                  return A;
                case $o:
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
  UA.ContextConsumer = $o;
  UA.ContextProvider = Wo;
  UA.Element = ls;
  UA.ForwardRef = jo;
  UA.Fragment = No;
  UA.Lazy = Yo;
  UA.Memo = zo;
  UA.Portal = cs;
  UA.Profiler = Vo;
  UA.StrictMode = Go;
  UA.Suspense = Xo;
  UA.SuspenseList = Jo;
  UA.isContextConsumer = function(A) {
    return xe(A) === $o;
  };
  UA.isContextProvider = function(A) {
    return xe(A) === Wo;
  };
  UA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === ls;
  };
  UA.isForwardRef = function(A) {
    return xe(A) === jo;
  };
  UA.isFragment = function(A) {
    return xe(A) === No;
  };
  UA.isLazy = function(A) {
    return xe(A) === Yo;
  };
  UA.isMemo = function(A) {
    return xe(A) === zo;
  };
  UA.isPortal = function(A) {
    return xe(A) === cs;
  };
  UA.isProfiler = function(A) {
    return xe(A) === Vo;
  };
  UA.isStrictMode = function(A) {
    return xe(A) === Go;
  };
  UA.isSuspense = function(A) {
    return xe(A) === Xo;
  };
  UA.isSuspenseList = function(A) {
    return xe(A) === Jo;
  };
  UA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === No || A === Vo || A === Go || A === Xo || A === Jo || typeof A == "object" && A !== null && (A.$$typeof === Yo || A.$$typeof === zo || A.$$typeof === Wo || A.$$typeof === $o || A.$$typeof === jo || A.$$typeof === Kg || A.getModuleId !== void 0);
  };
  UA.typeOf = xe;
  Cu.exports = UA;
  var vu = Cu.exports;
  function _e(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Qu(A) {
    if (h.isValidElement(A) || vu.isValidElementType(A) || !_e(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Qu(A[t]);
    }), e;
  }
  YA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return _e(A) && _e(e) && Object.keys(e).forEach((n) => {
      h.isValidElement(e[n]) || vu.isValidElementType(e[n]) ? r[n] = e[n] : _e(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && _e(A[n]) ? r[n] = YA(A[n], e[n], t) : t.clone ? r[n] = _e(e[n]) ? Qu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const Og = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Dg(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = Og(e), i = Object.keys(o);
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
  function Mg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Pg(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function _g(A) {
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
  const Ng = {
    borderRadius: 4
  };
  function kr(A, e) {
    return e ? YA(A, e, {
      clone: false
    }) : A;
  }
  const Zo = {
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
    up: (A) => `@media (min-width:${Zo[A]}px)`
  }, Gg = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : Zo[e] || e;
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
        if (Mg(o.keys, a)) {
          const s = Pg(r.containerQueries ? r : Gg, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || Zo).includes(a)) {
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
  SU = function(A, ...e) {
    const t = yu(A), r = [
      t,
      ...e
    ].reduce((n, o) => YA(n, o), {});
    return ca(Object.keys(t), r);
  };
  function Vg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  IU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Vg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  hA = function(A) {
    if (typeof A != "string") throw new Error(At(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function qo(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function io(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = qo(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function GA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = qo(s, r) || {};
      return et(i, a, (d) => {
        let u = io(l, n, d);
        return d === u && typeof d == "string" && (u = io(l, n, `${e}${d === "default" ? "" : hA(d)}`, d)), t === false ? u : {
          [t]: u
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function $g(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const Wg = {
    m: "margin",
    p: "padding"
  }, jg = {
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
  }, Xg = $g((A) => {
    if (A.length > 2) if (il[A]) A = il[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = Wg[e], n = jg[t] || "";
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
  function tn(A, e, t, r) {
    const n = qo(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  fs = function(A) {
    return tn(A, "spacing", 8);
  };
  rn = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Jg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = rn(e, t), r), {});
  }
  function zg(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = Xg(t), o = Jg(n, r), i = A[t];
    return et(A, i, o);
  }
  function bu(A, e) {
    const t = fs(A.theme);
    return Object.keys(A).map((r) => zg(A, e, r, t)).reduce(kr, {});
  }
  function DA(A) {
    return bu(A, us);
  }
  DA.propTypes = {};
  DA.filterProps = us;
  function MA(A) {
    return bu(A, ds);
  }
  MA.propTypes = {};
  MA.filterProps = ds;
  function Fu(A = 8, e = fs({
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
  function Ai(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? kr(n, e[o](r)) : n, {});
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
  const Yg = Se("border", ye), Zg = Se("borderTop", ye), qg = Se("borderRight", ye), Ap = Se("borderBottom", ye), ep = Se("borderLeft", ye), tp = Se("borderColor"), rp = Se("borderTopColor"), np = Se("borderRightColor"), op = Se("borderBottomColor"), ip = Se("borderLeftColor"), ap = Se("outline", ye), sp = Se("outlineColor"), ei = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = tn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: rn(e, r)
      });
      return et(A, A.borderRadius, t);
    }
    return null;
  };
  ei.propTypes = {};
  ei.filterProps = [
    "borderRadius"
  ];
  Ai(Yg, Zg, qg, Ap, ep, tp, rp, np, op, ip, ei, ap, sp);
  const ti = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = tn(A.theme, "spacing", 8), t = (r) => ({
        gap: rn(e, r)
      });
      return et(A, A.gap, t);
    }
    return null;
  };
  ti.propTypes = {};
  ti.filterProps = [
    "gap"
  ];
  const ri = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = tn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: rn(e, r)
      });
      return et(A, A.columnGap, t);
    }
    return null;
  };
  ri.propTypes = {};
  ri.filterProps = [
    "columnGap"
  ];
  const ni = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = tn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: rn(e, r)
      });
      return et(A, A.rowGap, t);
    }
    return null;
  };
  ni.propTypes = {};
  ni.filterProps = [
    "rowGap"
  ];
  const lp = GA({
    prop: "gridColumn"
  }), cp = GA({
    prop: "gridRow"
  }), up = GA({
    prop: "gridAutoFlow"
  }), dp = GA({
    prop: "gridAutoColumns"
  }), fp = GA({
    prop: "gridAutoRows"
  }), gp = GA({
    prop: "gridTemplateColumns"
  }), pp = GA({
    prop: "gridTemplateRows"
  }), Bp = GA({
    prop: "gridTemplateAreas"
  }), hp = GA({
    prop: "gridArea"
  });
  Ai(ti, ri, ni, lp, cp, up, dp, fp, gp, pp, Bp, hp);
  function rr(A, e) {
    return e === "grey" ? e : A;
  }
  const wp = GA({
    prop: "color",
    themeKey: "palette",
    transform: rr
  }), mp = GA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: rr
  }), Cp = GA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: rr
  });
  Ai(wp, mp, Cp);
  function he(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const vp = GA({
    prop: "width",
    transform: he
  }), gs = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || Zo[t];
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
  const Qp = GA({
    prop: "minWidth",
    transform: he
  }), yp = GA({
    prop: "height",
    transform: he
  }), bp = GA({
    prop: "maxHeight",
    transform: he
  }), Fp = GA({
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
  const Up = GA({
    prop: "boxSizing"
  });
  Ai(vp, gs, Qp, yp, bp, Fp, Up);
  const nn = {
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
      style: ei
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
      style: ti
    },
    rowGap: {
      style: ni
    },
    columnGap: {
      style: ri
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
  function Ep(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function xp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Sp() {
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
      const u = qo(n, l) || {};
      return d ? d(i) : et(i, r, (p) => {
        let B = io(u, c, p);
        return p === B && typeof p == "string" && (B = io(u, c, `${t}${p === "default" ? "" : hA(p)}`, p)), s === false ? B : {
          [s]: B
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? nn;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = yu(n.breakpoints), d = Object.keys(c);
        let u = c;
        return Object.keys(l).forEach((f) => {
          const p = xp(l[f], n);
          if (p != null) if (typeof p == "object") if (i[f]) u = kr(u, A(f, p, n, i));
          else {
            const B = et({
              theme: n
            }, p, (y) => ({
              [f]: y
            }));
            Ep(B, p) ? u[f] = e({
              sx: p,
              theme: n,
              nested: true
            }) : u = kr(u, B);
          }
          else u = kr(u, A(f, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": nl(n, ca(d, u))
        } : nl(n, ca(d, u));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const ht = Sp();
  ht.filterProps = [
    "sx"
  ];
  function Ip(A, e) {
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
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Dg(t), s = Fu(n);
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
        ...Ng,
        ...o
      }
    }, i);
    return l = _g(l), l.applyStyles = Ip, l = e.reduce((c, d) => YA(c, d), l), l.unstable_sxConfig = {
      ...nn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(d) {
      return ht({
        sx: d,
        theme: this
      });
    }, l;
  };
  function Hp(A) {
    return Object.keys(A).length === 0;
  }
  function Bs(A = null) {
    const e = h.useContext(An);
    return !e || Hp(e) ? A : e;
  }
  const Tp = ps();
  hs = function(A = Tp) {
    return Bs(A);
  };
  function bi(A) {
    const e = gt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Uu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = hs(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => bi(typeof i == "function" ? i(n) : i)) : o = bi(o)), L.jsx(wu, {
      styles: o
    });
  }
  const Lp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? nn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Eu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Lp(t);
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
  const al = (A) => A, Rp = () => {
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
  }, xu = Rp();
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
  function kp(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = mu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(ht);
    return h.forwardRef(function(s, l) {
      const c = hs(t), { className: d, component: u = "div", ...f } = Eu(s);
      return L.jsx(o, {
        as: u,
        ref: l,
        className: pA(d, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Kp = {
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
  RA = function(A, e, t = "Mui") {
    const r = Kp[e];
    return r ? `${t}-${r}` : `${xu.generate(A)}-${e}`;
  };
  IA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = RA(A, n, t);
    }), r;
  };
  function Iu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: gt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = gt(n.style));
    }), r;
  }
  const Op = ps();
  function Fi(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function It(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Dp(A) {
    return A ? (e, t) => t[A] : null;
  }
  function Mp(A, e, t) {
    A.theme = Np(A.theme) ? t : A.theme[e] || A.theme;
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
      return Hu(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? It(gt(r.style), t) : r.style : t ? It(gt(r), t) : r;
  }
  function Hu(A, e, t = [], r = void 0) {
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
  Pp = function(A = {}) {
    const { themeId: e, defaultTheme: t = Op, rootShouldForwardProp: r = Fi, slotShouldForwardProp: n = Fi } = A;
    function o(a) {
      Mp(a, e, t);
    }
    return (a, s = {}) => {
      Rg(a, (w) => w.filter((x) => x !== ht));
      const { name: l, slot: c, skipVariantsResolver: d, skipSx: u, overridesResolver: f = Dp(Vp(c)), ...p } = s, B = l && l.startsWith("Mui") || c ? "components" : "custom", y = d !== void 0 ? d : c && c !== "Root" && c !== "root" || false, m = u || false;
      let F = Fi;
      c === "Root" || c === "root" ? F = r : c ? F = n : Gp(a) && (F = void 0);
      const C = mu(a, {
        shouldForwardProp: F,
        label: _p(),
        ...p
      }), v = (w) => {
        if (w.__emotion_real === w) return w;
        if (typeof w == "function") return function(I) {
          return zn(I, w, I.theme.modularCssLayers ? B : void 0);
        };
        if (_e(w)) {
          const x = Iu(w);
          return function(H) {
            return x.variants ? zn(H, x, H.theme.modularCssLayers ? B : void 0) : H.theme.modularCssLayers ? It(x.style, B) : x.style;
          };
        }
        return w;
      }, U = (...w) => {
        const x = [], I = w.map(v), H = [];
        if (x.push(o), l && f && H.push(function(K) {
          var _a2, _b2;
          const O = (_b2 = (_a2 = K.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!O) return null;
          const M = {};
          for (const j in O) M[j] = zn(K, O[j], K.theme.modularCssLayers ? "theme" : void 0);
          return f(K, M);
        }), l && !y && H.push(function(K) {
          var _a2, _b2, _c2;
          const O = (_c2 = (_b2 = (_a2 = K.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return O ? Hu(K, O, [], K.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || H.push(ht), Array.isArray(I[0])) {
          const D = I.shift(), K = new Array(x.length).fill(""), V = new Array(H.length).fill("");
          let O;
          O = [
            ...K,
            ...D,
            ...V
          ], O.raw = [
            ...K,
            ...D.raw,
            ...V
          ], x.unshift(O);
        }
        const g = [
          ...x,
          ...I,
          ...H
        ], T = C(...g);
        return a.muiName && (T.muiName = a.muiName), T;
      };
      return C.withConfig && (U.withConfig = C.withConfig), U;
    };
  };
  function _p(A, e) {
    return void 0;
  }
  function Np(A) {
    for (const e in A) return false;
    return true;
  }
  function Gp(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Vp(A) {
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
  tt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
  $p = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function ws(A, e = 0, t = 1) {
    return $p(A, e, t);
  }
  function Wp(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function wt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return wt(Wp(A));
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
  const jp = (A) => {
    const e = wt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Fr = (A, e) => {
    try {
      return jp(A);
    } catch {
      return A;
    }
  };
  function oi(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Tu(A) {
    A = wt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), oi({
      type: a,
      values: s
    });
  }
  function da(A) {
    A = wt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? wt(Tu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function Xp(A, e) {
    const t = da(A), r = da(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  ir = function(A, e) {
    return A = wt(A), e = ws(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, oi(A);
  };
  function fn(A, e, t) {
    try {
      return ir(A, e);
    } catch {
      return A;
    }
  }
  ms = function(A, e) {
    if (A = wt(A), e = ws(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return oi(A);
  };
  function bA(A, e, t) {
    try {
      return ms(A, e);
    } catch {
      return A;
    }
  }
  Cs = function(A, e) {
    if (A = wt(A), e = ws(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return oi(A);
  };
  function FA(A, e, t) {
    try {
      return Cs(A, e);
    } catch {
      return A;
    }
  }
  function Jp(A, e = 0.15) {
    return da(A) > 0.5 ? ms(A, e) : Cs(A, e);
  }
  function gn(A, e, t) {
    try {
      return Jp(A, e);
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
  function Lu(A, e = 166) {
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
  Ui = function(A, e) {
    var _a2, _b2, _c2;
    return h.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Te = function(A) {
    return A && A.ownerDocument || document;
  };
  function rt(A) {
    return Te(A).defaultView || window;
  }
  function ll(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let cl = 0;
  function zp(A) {
    const [e, t] = h.useState(A), r = A || e;
    return h.useEffect(() => {
      e == null && (cl += 1, t(`mui-${cl}`));
    }, [
      e
    ]), r;
  }
  const Yp = {
    ...oa
  }, ul = Yp.useId;
  ii = function(A) {
    if (ul !== void 0) {
      const e = ul();
      return A ?? e;
    }
    return zp(A);
  };
  dl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = h.useRef(A !== void 0), [o, i] = h.useState(e), a = n ? A : o, s = h.useCallback((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  Lt = function(A) {
    const e = h.useRef(A);
    return tt(() => {
      e.current = A;
    }), h.useRef((...t) => (0, e.current)(...t)).current;
  };
  pe = function(...A) {
    const e = h.useRef(void 0), t = h.useCallback((r) => {
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
    return h.useMemo(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const fl = {};
  function Ru(A, e) {
    const t = h.useRef(fl);
    return t.current === fl && (t.current = A(e)), t;
  }
  const Zp = [];
  function qp(A) {
    h.useEffect(A, Zp);
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
    const A = Ru(vs.create).current;
    return qp(A.disposeEffect), A;
  }
  gl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Ku(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  kA = function(A, e, t = void 0) {
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
  function AB(A) {
    return typeof A == "string";
  }
  function Ou(A, e, t) {
    return A === void 0 || AB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Du = function(A, e = []) {
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
  function Mu(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, B = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (B.className = f), Object.keys(p).length > 0 && (B.style = p), {
        props: B,
        internalRef: void 0
      };
    }
    const i = Du({
      ...n,
      ...r
    }), a = pl(r), s = pl(n), l = e(i), c = pA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), d = {
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
  function Pu(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  eB = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Pu(t, r), { props: a, internalRef: s } = Mu({
      ...o,
      externalSlotProps: i
    }), l = pe(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Ou(e, {
      ...a,
      ref: l
    }, r);
  };
  function on(A) {
    var _a2;
    return parseInt(h.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const _u = h.createContext(null);
  function Qs() {
    return h.useContext(_u);
  }
  const tB = typeof Symbol == "function" && Symbol.for, rB = tB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function nB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function oB(A) {
    const { children: e, theme: t } = A, r = Qs(), n = h.useMemo(() => {
      const o = r === null ? {
        ...t
      } : nB(r, t);
      return o != null && (o[rB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(_u.Provider, {
      value: n,
      children: e
    });
  }
  const Nu = h.createContext();
  function iB({ value: A, ...e }) {
    return L.jsx(Nu.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Gu;
  aB = () => h.useContext(Nu) ?? false;
  Gu = h.createContext(void 0);
  function sB({ value: A, children: e }) {
    return L.jsx(Gu.Provider, {
      value: A,
      children: e
    });
  }
  function lB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? ua(n.defaultProps, r) : !n.styleOverrides && !n.variants ? ua(n, r) : r;
  }
  function cB({ props: A, name: e }) {
    const t = h.useContext(Gu);
    return lB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function uB(A) {
    const e = Bs(), t = ii() || "", { modularCssLayers: r } = A;
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
    ]), n ? L.jsx(Uu, {
      styles: n
    }) : null;
  }
  const Bl = {};
  function hl(A, e, t, r = false) {
    return h.useMemo(() => {
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
  function Vu(A) {
    const { children: e, theme: t, themeId: r } = A, n = Bs(Bl), o = Qs() || Bl, i = hl(r, n, t), a = hl(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = uB(i);
    return L.jsx(oB, {
      theme: a,
      children: L.jsx(An.Provider, {
        value: i,
        children: L.jsx(iB, {
          value: s,
          children: L.jsxs(sB, {
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
  const wl = {
    theme: void 0
  };
  function dB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (wl.theme = n.theme, o = Iu(A(wl)), e = o, t = n.theme), o;
    };
  }
  const ys = "mode", bs = "color-scheme", fB = "data-color-scheme";
  function gB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = ys, colorSchemeStorageKey: o = bs, attribute: i = fB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
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
  function pB() {
  }
  const BB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return pB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function Ei() {
  }
  function ml(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function $u(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function hB(A) {
    return $u(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function wB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = ys, colorSchemeStorageKey: i = bs, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = BB, noSsr: l = false } = A, c = n.join(","), d = n.length > 1, u = h.useMemo(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), f = h.useMemo(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), p = h.useMemo(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [B, y] = h.useState(() => {
      const I = (u == null ? void 0 : u.get(e)) || e, H = (f == null ? void 0 : f.get(t)) || t, g = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: I,
        systemMode: ml(I),
        lightColorScheme: H,
        darkColorScheme: g
      };
    }), [m, F] = h.useState(l || !d);
    h.useEffect(() => {
      F(true);
    }, []);
    const C = hB(B), v = h.useCallback((I) => {
      y((H) => {
        if (I === H.mode) return H;
        const g = I ?? e;
        return u == null ? void 0 : u.set(g), {
          ...H,
          mode: g,
          systemMode: ml(g)
        };
      });
    }, [
      u,
      e
    ]), U = h.useCallback((I) => {
      I ? typeof I == "string" ? I && !c.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : y((H) => {
        const g = {
          ...H
        };
        return $u(H, (T) => {
          T === "light" && (f == null ? void 0 : f.set(I), g.lightColorScheme = I), T === "dark" && (p == null ? void 0 : p.set(I), g.darkColorScheme = I);
        }), g;
      }) : y((H) => {
        const g = {
          ...H
        }, T = I.light === null ? t : I.light, D = I.dark === null ? r : I.dark;
        return T && (c.includes(T) ? (g.lightColorScheme = T, f == null ? void 0 : f.set(T)) : console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`)), D && (c.includes(D) ? (g.darkColorScheme = D, p == null ? void 0 : p.set(D)) : console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`)), g;
      }) : y((H) => (f == null ? void 0 : f.set(t), p == null ? void 0 : p.set(r), {
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
    ]), w = h.useCallback((I) => {
      B.mode === "system" && y((H) => {
        const g = (I == null ? void 0 : I.matches) ? "dark" : "light";
        return H.systemMode === g ? H : {
          ...H,
          systemMode: g
        };
      });
    }, [
      B.mode
    ]), x = h.useRef(w);
    return x.current = w, h.useEffect(() => {
      if (typeof window.matchMedia != "function" || !d) return;
      const I = (...g) => x.current(...g), H = window.matchMedia("(prefers-color-scheme: dark)");
      return H.addListener(I), I(H), () => {
        H.removeListener(I);
      };
    }, [
      d
    ]), h.useEffect(() => {
      if (d) {
        const I = (u == null ? void 0 : u.subscribe((T) => {
          (!T || [
            "light",
            "dark",
            "system"
          ].includes(T)) && v(T || e);
        })) || Ei, H = (f == null ? void 0 : f.subscribe((T) => {
          (!T || c.match(T)) && U({
            light: T
          });
        })) || Ei, g = (p == null ? void 0 : p.subscribe((T) => {
          (!T || c.match(T)) && U({
            dark: T
          });
        })) || Ei;
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
      ...B,
      mode: m ? B.mode : void 0,
      systemMode: m ? B.systemMode : void 0,
      colorScheme: m ? C : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const mB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function CB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = ys, colorSchemeStorageKey: n = bs, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = h.createContext(void 0), c = () => h.useContext(l) || s, d = {}, u = {};
    function f(m) {
      var _a2, _b2, _c2, _d2;
      const { children: F, theme: C, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: w = o, storageManager: x, storageWindow: I = typeof window > "u" ? void 0 : window, documentNode: H = typeof document > "u" ? void 0 : document, colorSchemeNode: g = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: T = false, disableStyleSheetGeneration: D = false, defaultMode: K = "system", noSsr: V } = m, O = h.useRef(false), M = Qs(), j = h.useContext(l), nA = !!j && !T, P = h.useMemo(() => C || (typeof t == "function" ? t() : t), [
        C
      ]), X = P[e], AA = X || P, { colorSchemes: rA = d, components: R = u, cssVarPrefix: $ } = AA, G = Object.keys(rA).filter((gA) => !!rA[gA]).join(","), z = h.useMemo(() => G.split(","), [
        G
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, eA = rA[dA] && rA[iA] ? K : ((_b2 = (_a2 = rA[AA.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = AA.palette) == null ? void 0 : _c2.mode), { mode: J, setMode: oA, systemMode: aA, lightColorScheme: Q, darkColorScheme: E, colorScheme: b, setColorScheme: _ } = wB({
        supportedColorSchemes: z,
        defaultLightColorScheme: dA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: U,
        defaultMode: eA,
        storageManager: x,
        storageWindow: I,
        noSsr: V
      });
      let W = J, N = b;
      nA && (W = j.mode, N = j.colorScheme);
      const sA = h.useMemo(() => {
        var _a3;
        const gA = N || AA.defaultColorScheme, PA = ((_a3 = AA.generateThemeVars) == null ? void 0 : _a3.call(AA)) || AA.vars, WA = {
          ...AA,
          components: R,
          colorSchemes: rA,
          cssVarPrefix: $,
          vars: PA
        };
        if (typeof WA.generateSpacing == "function" && (WA.spacing = WA.generateSpacing()), gA) {
          const oe = rA[gA];
          oe && typeof oe == "object" && Object.keys(oe).forEach((XA) => {
            oe[XA] && typeof oe[XA] == "object" ? WA[XA] = {
              ...WA[XA],
              ...oe[XA]
            } : WA[XA] = oe[XA];
          });
        }
        return a ? a(WA) : WA;
      }, [
        AA,
        N,
        R,
        rA,
        $
      ]), cA = AA.colorSchemeSelector;
      tt(() => {
        if (N && g && cA && cA !== "media") {
          const gA = cA;
          let PA = cA;
          if (gA === "class" && (PA = ".%s"), gA === "data" && (PA = "[data-%s]"), (gA == null ? void 0 : gA.startsWith("data-")) && !gA.includes("%s") && (PA = `[${gA}="%s"]`), PA.startsWith(".")) g.classList.remove(...z.map((WA) => PA.substring(1).replace("%s", WA))), g.classList.add(PA.substring(1).replace("%s", N));
          else {
            const WA = PA.replace("%s", N).match(/\[([^\]]+)\]/);
            if (WA) {
              const [oe, XA] = WA[1].split("=");
              XA || z.forEach((ot) => {
                g.removeAttribute(oe.replace(N, ot));
              }), g.setAttribute(oe, XA ? XA.replace(/"|'/g, "") : "");
            } else g.setAttribute(PA, N);
          }
        }
      }, [
        N,
        cA,
        g,
        z
      ]), h.useEffect(() => {
        let gA;
        if (w && O.current && H) {
          const PA = H.createElement("style");
          PA.appendChild(H.createTextNode(mB)), H.head.appendChild(PA), window.getComputedStyle(H.body), gA = setTimeout(() => {
            H.head.removeChild(PA);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        N,
        w,
        H
      ]), h.useEffect(() => (O.current = true, () => {
        O.current = false;
      }), []);
      const fA = h.useMemo(() => ({
        allColorSchemes: z,
        colorScheme: N,
        darkColorScheme: E,
        lightColorScheme: Q,
        mode: W,
        setColorScheme: _,
        setMode: oA,
        systemMode: aA
      }), [
        z,
        N,
        E,
        Q,
        W,
        _,
        oA,
        aA,
        sA.colorSchemeSelector
      ]);
      let q = true;
      (D || AA.cssVariables === false || nA && (M == null ? void 0 : M.cssVarPrefix) === $) && (q = false);
      const qA = L.jsxs(h.Fragment, {
        children: [
          L.jsx(Vu, {
            themeId: X ? e : void 0,
            theme: sA,
            children: F
          }),
          q && L.jsx(wu, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return nA ? qA : L.jsx(l.Provider, {
        value: fA,
        children: qA
      });
    }
    const p = typeof i == "string" ? i : i.light, B = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => gB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: B,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function vB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const Cl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, QB = (A, e, t) => {
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
  }, yB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function xi(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return QB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, d = yB(a, s);
        Object.assign(n, {
          [c]: d
        }), Cl(o, a, `var(${c})`, l), Cl(i, a, `var(${c}, ${d})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function bB(A, e = {}) {
    const { getSelector: t = y, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: d } = xi(s, e);
    let u = d;
    const f = {}, { [a]: p, ...B } = o;
    if (Object.entries(B || {}).forEach(([C, v]) => {
      const { vars: U, css: w, varsWithDefaults: x } = xi(v, e);
      u = YA(u, x), f[C] = {
        css: w,
        vars: U
      };
    }), p) {
      const { css: C, vars: v, varsWithDefaults: U } = xi(p, e);
      u = YA(u, U), f[a] = {
        css: C,
        vars: v
      };
    }
    function y(C, v) {
      var _a2, _b2;
      let U = n;
      if (n === "class" && (U = ".%s"), n === "data" && (U = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (U = `[${n}="%s"]`), C) {
        if (U === "media") return A.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[C]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || C})`]: {
            ":root": v
          }
        };
        if (U) return A.defaultColorScheme === C ? `:root, ${U.replace("%s", String(C))}` : U.replace("%s", String(C));
      }
      return ":root";
    }
    return {
      vars: u,
      generateThemeVars: () => {
        let C = {
          ...l
        };
        return Object.entries(f).forEach(([, { vars: v }]) => {
          C = YA(C, v);
        }), C;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const C = [], v = A.defaultColorScheme || "light";
        function U(I, H) {
          Object.keys(H).length && C.push(typeof I == "string" ? {
            [I]: {
              ...H
            }
          } : I);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: w, ...x } = f;
        if (w) {
          const { css: I } = w, H = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, g = !r && H ? {
            colorScheme: H,
            ...I
          } : {
            ...I
          };
          U(t(v, {
            ...g
          }), g);
        }
        return Object.entries(x).forEach(([I, { css: H }]) => {
          var _a3, _b3;
          const g = (_b3 = (_a3 = o[I]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, T = !r && g ? {
            colorScheme: g,
            ...H
          } : {
            ...H
          };
          U(t(I, {
            ...T
          }), T);
        }), C;
      }
    };
  }
  function FB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Wu() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: Vr.white,
        default: Vr.white
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
  const UB = Wu();
  function ju() {
    return {
      text: {
        primary: Vr.white,
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
        active: Vr.white,
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
  const vl = ju();
  function Ql(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = Cs(A.main, n) : e === "dark" && (A.dark = ms(A.main, o)));
  }
  function EB(A = "light") {
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
  function xB(A = "light") {
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
  function SB(A = "light") {
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
  function IB(A = "light") {
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
  function HB(A = "light") {
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
  function TB(A = "light") {
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
  function Fs(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || EB(e), i = A.secondary || xB(e), a = A.error || SB(e), s = A.info || IB(e), l = A.success || HB(e), c = A.warning || TB(e);
    function d(B) {
      return Xp(B, vl.text.primary) >= t ? vl.text.primary : UB.text.primary;
    }
    const u = ({ color: B, name: y, mainShade: m = 500, lightShade: F = 300, darkShade: C = 700 }) => {
      if (B = {
        ...B
      }, !B.main && B[m] && (B.main = B[m]), !B.hasOwnProperty("main")) throw new Error(At(11, y ? ` (${y})` : "", m));
      if (typeof B.main != "string") throw new Error(At(12, y ? ` (${y})` : "", JSON.stringify(B.main)));
      return Ql(B, "light", F, r), Ql(B, "dark", C, r), B.contrastText || (B.contrastText = d(B.main)), B;
    };
    let f;
    return e === "light" ? f = Wu() : e === "dark" && (f = ju()), YA({
      common: {
        ...Vr
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
      grey: If,
      contrastThreshold: t,
      getContrastText: d,
      augmentColor: u,
      tonalOffset: r,
      ...f
    }, n);
  }
  function LB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function RB(A, e) {
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
  function kB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const yl = {
    textTransform: "uppercase"
  }, bl = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Xu(A, e) {
    const { fontFamily: t = bl, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...d } = typeof e == "function" ? e(A) : e, u = r / 14, f = c || ((y) => `${y / s * u}rem`), p = (y, m, F, C, v) => ({
      fontFamily: t,
      fontWeight: y,
      fontSize: f(m),
      lineHeight: F,
      ...t === bl ? {
        letterSpacing: `${kB(C / m)}em`
      } : {},
      ...v,
      ...l
    }), B = {
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
      button: p(i, 14, 1.75, 0.4, yl),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, yl),
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
      ...B
    }, d, {
      clone: false
    });
  }
  const KB = 0.2, OB = 0.14, DB = 0.12;
  function TA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${KB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${OB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${DB})`
    ].join(",");
  }
  const MB = [
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
  ], PB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, _B = {
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
  function NB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function GB(A) {
    const e = {
      ...PB,
      ...A.easing
    }, t = {
      ..._B,
      ...A.duration
    };
    return {
      getAutoHeightDuration: NB,
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
  const VB = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function $B(A) {
    return _e(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Ju(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !$B(a) || i.startsWith("unstable_") ? delete r[i] : _e(a) && (r[i] = {
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
      mixins: RB(d.breakpoints, r),
      palette: c,
      shadows: MB.slice(),
      typography: Xu(c, a),
      transitions: GB(i),
      zIndex: {
        ...VB
      }
    });
    return u = YA(u, l), u = e.reduce((f, p) => YA(f, p), u), u.unstable_sxConfig = {
      ...nn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, u.unstable_sx = function(p) {
      return ht({
        sx: p,
        theme: this
      });
    }, u.toRuntimeSource = Ju, u;
  }
  function ga(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const WB = [
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
  function Yu(A) {
    return A === "dark" ? WB : [];
  }
  function jB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Fs(e);
    return {
      palette: o,
      opacity: {
        ...zu(o.mode),
        ...t
      },
      overlays: r || Yu(o.mode),
      ...n
    };
  }
  function XB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const JB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], zB = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return JB(A.cssVarPrefix).forEach((a) => {
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
  function YB(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function k(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Ur(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Tu(A);
  }
  function Je(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Fr(Ur(A[e])));
  }
  function ZB(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Re = (A) => {
    try {
      return A();
    } catch {
    }
  }, qB = (A = "mui") => vB(A);
  function Si(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = jB({
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
      overlays: (e == null ? void 0 : e.overlays) || Yu(n)
    }, i;
  }
  function Ah(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = XB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], d = r || (t.light && c !== "light" ? "light" : c), u = qB(o), { [d]: f, light: p, dark: B, ...y } = t, m = {
      ...y
    };
    let F = f;
    if ((d === "dark" && !("dark" in t) || d === "light" && !("light" in t)) && (F = true), !F) throw new Error(At(21, d));
    const C = Si(m, F, l, d);
    p && !m.light && Si(m, p, void 0, "light"), B && !m.dark && Si(m, B, void 0, "dark");
    let v = {
      defaultColorScheme: d,
      ...C,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: u,
      colorSchemes: m,
      font: {
        ...LB(C.typography),
        ...C.font
      },
      spacing: ZB(l.spacing)
    };
    Object.keys(v.colorSchemes).forEach((H) => {
      const g = v.colorSchemes[H].palette, T = (D) => {
        const K = D.split("-"), V = K[1], O = K[2];
        return u(D, g[V][O]);
      };
      if (g.mode === "light" && (k(g.common, "background", "#fff"), k(g.common, "onBackground", "#000")), g.mode === "dark" && (k(g.common, "background", "#000"), k(g.common, "onBackground", "#fff")), YB(g, [
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
        k(g.Alert, "errorColor", bA(g.error.light, 0.6)), k(g.Alert, "infoColor", bA(g.info.light, 0.6)), k(g.Alert, "successColor", bA(g.success.light, 0.6)), k(g.Alert, "warningColor", bA(g.warning.light, 0.6)), k(g.Alert, "errorFilledBg", T("palette-error-main")), k(g.Alert, "infoFilledBg", T("palette-info-main")), k(g.Alert, "successFilledBg", T("palette-success-main")), k(g.Alert, "warningFilledBg", T("palette-warning-main")), k(g.Alert, "errorFilledColor", Re(() => g.getContrastText(g.error.main))), k(g.Alert, "infoFilledColor", Re(() => g.getContrastText(g.info.main))), k(g.Alert, "successFilledColor", Re(() => g.getContrastText(g.success.main))), k(g.Alert, "warningFilledColor", Re(() => g.getContrastText(g.warning.main))), k(g.Alert, "errorStandardBg", FA(g.error.light, 0.9)), k(g.Alert, "infoStandardBg", FA(g.info.light, 0.9)), k(g.Alert, "successStandardBg", FA(g.success.light, 0.9)), k(g.Alert, "warningStandardBg", FA(g.warning.light, 0.9)), k(g.Alert, "errorIconColor", T("palette-error-main")), k(g.Alert, "infoIconColor", T("palette-info-main")), k(g.Alert, "successIconColor", T("palette-success-main")), k(g.Alert, "warningIconColor", T("palette-warning-main")), k(g.AppBar, "defaultBg", T("palette-grey-100")), k(g.Avatar, "defaultBg", T("palette-grey-400")), k(g.Button, "inheritContainedBg", T("palette-grey-300")), k(g.Button, "inheritContainedHoverBg", T("palette-grey-A100")), k(g.Chip, "defaultBorder", T("palette-grey-400")), k(g.Chip, "defaultAvatarColor", T("palette-grey-700")), k(g.Chip, "defaultIconColor", T("palette-grey-700")), k(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(g.LinearProgress, "primaryBg", FA(g.primary.main, 0.62)), k(g.LinearProgress, "secondaryBg", FA(g.secondary.main, 0.62)), k(g.LinearProgress, "errorBg", FA(g.error.main, 0.62)), k(g.LinearProgress, "infoBg", FA(g.info.main, 0.62)), k(g.LinearProgress, "successBg", FA(g.success.main, 0.62)), k(g.LinearProgress, "warningBg", FA(g.warning.main, 0.62)), k(g.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), k(g.Slider, "primaryTrack", FA(g.primary.main, 0.62)), k(g.Slider, "secondaryTrack", FA(g.secondary.main, 0.62)), k(g.Slider, "errorTrack", FA(g.error.main, 0.62)), k(g.Slider, "infoTrack", FA(g.info.main, 0.62)), k(g.Slider, "successTrack", FA(g.success.main, 0.62)), k(g.Slider, "warningTrack", FA(g.warning.main, 0.62));
        const D = gn(g.background.default, 0.8);
        k(g.SnackbarContent, "bg", D), k(g.SnackbarContent, "color", Re(() => g.getContrastText(D))), k(g.SpeedDialAction, "fabHoverBg", gn(g.background.paper, 0.15)), k(g.StepConnector, "border", T("palette-grey-400")), k(g.StepContent, "border", T("palette-grey-400")), k(g.Switch, "defaultColor", T("palette-common-white")), k(g.Switch, "defaultDisabledColor", T("palette-grey-100")), k(g.Switch, "primaryDisabledColor", FA(g.primary.main, 0.62)), k(g.Switch, "secondaryDisabledColor", FA(g.secondary.main, 0.62)), k(g.Switch, "errorDisabledColor", FA(g.error.main, 0.62)), k(g.Switch, "infoDisabledColor", FA(g.info.main, 0.62)), k(g.Switch, "successDisabledColor", FA(g.success.main, 0.62)), k(g.Switch, "warningDisabledColor", FA(g.warning.main, 0.62)), k(g.TableCell, "border", FA(fn(g.divider, 1), 0.88)), k(g.Tooltip, "bg", fn(g.grey[700], 0.92));
      }
      if (g.mode === "dark") {
        k(g.Alert, "errorColor", FA(g.error.light, 0.6)), k(g.Alert, "infoColor", FA(g.info.light, 0.6)), k(g.Alert, "successColor", FA(g.success.light, 0.6)), k(g.Alert, "warningColor", FA(g.warning.light, 0.6)), k(g.Alert, "errorFilledBg", T("palette-error-dark")), k(g.Alert, "infoFilledBg", T("palette-info-dark")), k(g.Alert, "successFilledBg", T("palette-success-dark")), k(g.Alert, "warningFilledBg", T("palette-warning-dark")), k(g.Alert, "errorFilledColor", Re(() => g.getContrastText(g.error.dark))), k(g.Alert, "infoFilledColor", Re(() => g.getContrastText(g.info.dark))), k(g.Alert, "successFilledColor", Re(() => g.getContrastText(g.success.dark))), k(g.Alert, "warningFilledColor", Re(() => g.getContrastText(g.warning.dark))), k(g.Alert, "errorStandardBg", bA(g.error.light, 0.9)), k(g.Alert, "infoStandardBg", bA(g.info.light, 0.9)), k(g.Alert, "successStandardBg", bA(g.success.light, 0.9)), k(g.Alert, "warningStandardBg", bA(g.warning.light, 0.9)), k(g.Alert, "errorIconColor", T("palette-error-main")), k(g.Alert, "infoIconColor", T("palette-info-main")), k(g.Alert, "successIconColor", T("palette-success-main")), k(g.Alert, "warningIconColor", T("palette-warning-main")), k(g.AppBar, "defaultBg", T("palette-grey-900")), k(g.AppBar, "darkBg", T("palette-background-paper")), k(g.AppBar, "darkColor", T("palette-text-primary")), k(g.Avatar, "defaultBg", T("palette-grey-600")), k(g.Button, "inheritContainedBg", T("palette-grey-800")), k(g.Button, "inheritContainedHoverBg", T("palette-grey-700")), k(g.Chip, "defaultBorder", T("palette-grey-700")), k(g.Chip, "defaultAvatarColor", T("palette-grey-300")), k(g.Chip, "defaultIconColor", T("palette-grey-300")), k(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(g.LinearProgress, "primaryBg", bA(g.primary.main, 0.5)), k(g.LinearProgress, "secondaryBg", bA(g.secondary.main, 0.5)), k(g.LinearProgress, "errorBg", bA(g.error.main, 0.5)), k(g.LinearProgress, "infoBg", bA(g.info.main, 0.5)), k(g.LinearProgress, "successBg", bA(g.success.main, 0.5)), k(g.LinearProgress, "warningBg", bA(g.warning.main, 0.5)), k(g.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), k(g.Slider, "primaryTrack", bA(g.primary.main, 0.5)), k(g.Slider, "secondaryTrack", bA(g.secondary.main, 0.5)), k(g.Slider, "errorTrack", bA(g.error.main, 0.5)), k(g.Slider, "infoTrack", bA(g.info.main, 0.5)), k(g.Slider, "successTrack", bA(g.success.main, 0.5)), k(g.Slider, "warningTrack", bA(g.warning.main, 0.5));
        const D = gn(g.background.default, 0.98);
        k(g.SnackbarContent, "bg", D), k(g.SnackbarContent, "color", Re(() => g.getContrastText(D))), k(g.SpeedDialAction, "fabHoverBg", gn(g.background.paper, 0.15)), k(g.StepConnector, "border", T("palette-grey-600")), k(g.StepContent, "border", T("palette-grey-600")), k(g.Switch, "defaultColor", T("palette-grey-300")), k(g.Switch, "defaultDisabledColor", T("palette-grey-600")), k(g.Switch, "primaryDisabledColor", bA(g.primary.main, 0.55)), k(g.Switch, "secondaryDisabledColor", bA(g.secondary.main, 0.55)), k(g.Switch, "errorDisabledColor", bA(g.error.main, 0.55)), k(g.Switch, "infoDisabledColor", bA(g.info.main, 0.55)), k(g.Switch, "successDisabledColor", bA(g.success.main, 0.55)), k(g.Switch, "warningDisabledColor", bA(g.warning.main, 0.55)), k(g.TableCell, "border", bA(fn(g.divider, 1), 0.68)), k(g.Tooltip, "bg", fn(g.grey[700], 0.92));
      }
      Je(g.background, "default"), Je(g.background, "paper"), Je(g.common, "background"), Je(g.common, "onBackground"), Je(g, "divider"), Object.keys(g).forEach((D) => {
        const K = g[D];
        D !== "tonalOffset" && K && typeof K == "object" && (K.main && k(g[D], "mainChannel", Fr(Ur(K.main))), K.light && k(g[D], "lightChannel", Fr(Ur(K.light))), K.dark && k(g[D], "darkChannel", Fr(Ur(K.dark))), K.contrastText && k(g[D], "contrastTextChannel", Fr(Ur(K.contrastText))), D === "text" && (Je(g[D], "primary"), Je(g[D], "secondary")), D === "action" && (K.active && Je(g[D], "active"), K.selected && Je(g[D], "selected")));
      });
    }), v = e.reduce((H, g) => YA(H, g), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: zB(v)
    }, { vars: w, generateThemeVars: x, generateStyleSheets: I } = bB(v, U);
    return v.vars = w, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([H, g]) => {
      v[H] = g;
    }), v.generateThemeVars = x, v.generateStyleSheets = I, v.generateSpacing = function() {
      return Fu(l.spacing, fs(this));
    }, v.getColorSchemeSelector = FB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...nn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, v.unstable_sx = function(g) {
      return ht({
        sx: g,
        theme: this
      });
    }, v.toRuntimeSource = Ju, v;
  }
  function Ul(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Fs({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function ai(A = {}, ...e) {
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
      }, Ul(d, "dark", l.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: d.palette
      }, Ul(d, "light", l.light)), d;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), Ah({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const Us = ai();
  Es = function() {
    const A = hs(Us);
    return A[Ge] || A;
  };
  Zu = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  $e = (A) => Zu(A) && A !== "classes";
  lA = Pp({
    themeId: Ge,
    defaultTheme: Us,
    rootShouldForwardProp: $e
  });
  function eh({ theme: A, ...e }) {
    const t = Ge in A ? A[Ge] : void 0;
    return L.jsx(Vu, {
      ...e,
      themeId: t ? Ge : void 0,
      theme: t || A
    });
  }
  const pn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: th } = CB({
    themeId: Ge,
    theme: () => ai({
      cssVariables: true
    }),
    colorSchemeStorageKey: pn.colorSchemeStorageKey,
    modeStorageKey: pn.modeStorageKey,
    defaultColorScheme: {
      light: pn.defaultLightColorScheme,
      dark: pn.defaultDarkColorScheme
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
  }), rh = th;
  function qu({ theme: A, ...e }) {
    const t = h.useMemo(() => {
      if (typeof A == "function") return A;
      const r = Ge in A ? A[Ge] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? L.jsx(eh, {
      theme: t,
      ...e
    }) : L.jsx(rh, {
      theme: A,
      ...e
    });
  }
  function nh(A) {
    return L.jsx(Uu, {
      ...A,
      defaultTheme: Us,
      themeId: Ge
    });
  }
  function xs(A) {
    return function(t) {
      return L.jsx(nh, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function oh() {
    return Eu;
  }
  OA = dB;
  KA = function(A) {
    return cB(A);
  };
  function ih(A) {
    return RA("MuiSvgIcon", A);
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
  let ah, sh;
  ah = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${hA(e)}`,
        `fontSize${hA(t)}`
      ]
    };
    return kA(n, ih, r);
  };
  sh = lA("svg", {
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
  pa = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: d, viewBox: u = "0 0 24 24", ...f } = r, p = h.isValidElement(n) && n.type === "svg", B = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: u,
      hasSvgAsChild: p
    }, y = {};
    c || (y.viewBox = u);
    const m = ah(B);
    return L.jsxs(sh, {
      as: a,
      className: pA(m.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": d ? void 0 : true,
      role: d ? "img" : void 0,
      ref: t,
      ...y,
      ...f,
      ...p && n.props,
      ownerState: B,
      children: [
        p ? n.props.children : n,
        d ? L.jsx("title", {
          children: d
        }) : null
      ]
    });
  });
  pa.muiName = "SvgIcon";
  Ad = function(A, e) {
    function t(r, n) {
      return L.jsx(pa, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = pa.muiName, h.memo(h.forwardRef(t));
  };
  lh = function(A, e) {
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
  function ed(A, e) {
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
  function td(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, Ba(A, e);
  }
  const { initPromise: ch } = yf, uh = ch.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), dh = await uh.then((A) => A());
  var Ss = dh;
  const Bn = Ya(Ss), El = {
    disabled: false
  }, ao = S.createContext(null);
  var fh = function(e) {
    return e.scrollTop;
  }, Er = "unmounted", bt = "exited", Ft = "entering", zt = "entered", ha = "exiting", We = (function(A) {
    td(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = bt, o.appearStatus = Ft) : s = zt : r.unmountOnExit || r.mountOnEnter ? s = Er : s = bt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Er ? {
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
        this.props.in ? i !== Ft && i !== zt && (o = Ft) : (i === Ft || i === zt) && (o = ha);
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
          var i = this.props.nodeRef ? this.props.nodeRef.current : Bn.findDOMNode(this);
          i && fh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === bt && this.setState({
        status: Er
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        Bn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], d = this.getTimeouts(), u = a ? d.appear : d.enter;
      if (!n && !i || El.disabled) {
        this.safeSetState({
          status: zt
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
            status: zt
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Bn.findDOMNode(this);
      if (!o || El.disabled) {
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : Bn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Er) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = ed(o, [
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
      return S.createElement(ao.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : S.cloneElement(S.Children.only(i), a));
    }, e;
  })(S.Component);
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
  We.UNMOUNTED = Er;
  We.EXITED = bt;
  We.ENTERING = Ft;
  We.ENTERED = zt;
  We.EXITING = ha;
  function gh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Is(A, e) {
    var t = function(o) {
      return e && h.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && h.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function ph(A, e) {
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
  function Bh(A, e) {
    return Is(A.children, function(t) {
      return h.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Ht(t, "appear", A),
        enter: Ht(t, "enter", A),
        exit: Ht(t, "exit", A)
      });
    });
  }
  function hh(A, e, t) {
    var r = Is(A.children), n = ph(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (h.isValidElement(i)) {
        var a = o in e, s = o in r, l = e[o], c = h.isValidElement(l) && !l.props.in;
        s && (!a || c) ? n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Ht(i, "exit", A),
          enter: Ht(i, "enter", A)
        }) : !s && a && !c ? n[o] = h.cloneElement(i, {
          in: false
        }) : s && a && h.isValidElement(l) && (n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: Ht(i, "exit", A),
          enter: Ht(i, "enter", A)
        }));
      }
    }), n;
  }
  var wh = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, mh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, Hs = (function(A) {
    td(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(gh(o));
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
        children: s ? Bh(n, a) : hh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Is(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = no({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = ed(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = wh(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? S.createElement(ao.Provider, {
        value: s
      }, l) : S.createElement(ao.Provider, {
        value: s
      }, S.createElement(o, a, l));
    }, e;
  })(S.Component);
  Hs.propTypes = {};
  Hs.defaultProps = mh;
  const rd = (A) => A.scrollTop;
  function so(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function Ch(A) {
    return RA("MuiPaper", A);
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
  let vh, Qh;
  vh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return kA(o, Ch, n);
  };
  Qh = lA("div", {
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
  wa = h.forwardRef(function(e, t) {
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
    }, u = vh(d);
    return L.jsx(Qh, {
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
            "--Paper-overlay": `linear-gradient(${ir("#fff", ga(a))}, ${ir("#fff", ga(a))})`
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
    }, ...u } = o, f = c[A] || r, p = Pu(d[A], n), { props: { component: B, ...y }, internalRef: m } = Mu({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? u : void 0,
      externalSlotProps: p
    }), F = pe(m, p == null ? void 0 : p.ref, e.ref), C = A === "root" ? B || l : B, v = Ou(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...y,
      ...C && !a && {
        as: C
      },
      ...C && a && {
        component: C
      },
      ref: F
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
      const e = Ru(lo.create).current, [t, r] = h.useState(false);
      return e.shouldMount = t, e.setShouldMount = r, h.useEffect(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = bh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function yh() {
    return lo.use();
  }
  function bh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function Fh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, d] = h.useState(false), u = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && d(true), h.useEffect(() => {
      if (!a && s != null) {
        const B = setTimeout(s, l);
        return () => {
          clearTimeout(B);
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
  const Qe = IA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), ma = 550, Uh = 80, Eh = en`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, xh = en`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Sh = en`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ih = lA("span", {
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
  }), Hh = lA(Fh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${Qe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Eh};
    animation-duration: ${ma}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${Qe.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${Qe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Qe.childLeaving} {
    opacity: 0;
    animation-name: ${xh};
    animation-duration: ${ma}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${Qe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Sh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Th = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = h.useState([]), c = h.useRef(0), d = h.useRef(null);
    h.useEffect(() => {
      d.current && (d.current(), d.current = null);
    }, [
      s
    ]);
    const u = h.useRef(false), f = ku(), p = h.useRef(null), B = h.useRef(null), y = h.useCallback((v) => {
      const { pulsate: U, rippleX: w, rippleY: x, rippleSize: I, cb: H } = v;
      l((g) => [
        ...g,
        L.jsx(Hh, {
          classes: {
            ripple: pA(o.ripple, Qe.ripple),
            rippleVisible: pA(o.rippleVisible, Qe.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, Qe.ripplePulsate),
            child: pA(o.child, Qe.child),
            childLeaving: pA(o.childLeaving, Qe.childLeaving),
            childPulsate: pA(o.childPulsate, Qe.childPulsate)
          },
          timeout: ma,
          pulsate: U,
          rippleX: w,
          rippleY: x,
          rippleSize: I
        }, c.current)
      ]), c.current += 1, d.current = H;
    }, [
      o
    ]), m = h.useCallback((v = {}, U = {}, w = () => {
    }) => {
      const { pulsate: x = false, center: I = n || U.pulsate, fakeElement: H = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && u.current) {
        u.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (u.current = true);
      const g = H ? null : B.current, T = g ? g.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let D, K, V;
      if (I || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) D = Math.round(T.width / 2), K = Math.round(T.height / 2);
      else {
        const { clientX: O, clientY: M } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        D = Math.round(O - T.left), K = Math.round(M - T.top);
      }
      if (I) V = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3), V % 2 === 0 && (V += 1);
      else {
        const O = Math.max(Math.abs((g ? g.clientWidth : 0) - D), D) * 2 + 2, M = Math.max(Math.abs((g ? g.clientHeight : 0) - K), K) * 2 + 2;
        V = Math.sqrt(O ** 2 + M ** 2);
      }
      (v == null ? void 0 : v.touches) ? p.current === null && (p.current = () => {
        y({
          pulsate: x,
          rippleX: D,
          rippleY: K,
          rippleSize: V,
          cb: w
        });
      }, f.start(Uh, () => {
        p.current && (p.current(), p.current = null);
      })) : y({
        pulsate: x,
        rippleX: D,
        rippleY: K,
        rippleSize: V,
        cb: w
      });
    }, [
      n,
      y,
      f
    ]), F = h.useCallback(() => {
      m({}, {
        pulsate: true
      });
    }, [
      m
    ]), C = h.useCallback((v, U) => {
      if (f.clear(), (v == null ? void 0 : v.type) === "touchend" && p.current) {
        p.current(), p.current = null, f.start(0, () => {
          C(v, U);
        });
        return;
      }
      p.current = null, l((w) => w.length > 0 ? w.slice(1) : w), d.current = U;
    }, [
      f
    ]);
    return h.useImperativeHandle(t, () => ({
      pulsate: F,
      start: m,
      stop: C
    }), [
      F,
      m,
      C
    ]), L.jsx(Ih, {
      className: pA(Qe.root, o.root, i),
      ref: B,
      ...a,
      children: L.jsx(Hs, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Lh(A) {
    return RA("MuiButtonBase", A);
  }
  let Rh, kh, Kh;
  Rh = IA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  kh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = kA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Lh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Kh = lA("button", {
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
    [`&.${Rh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  Oh = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: d = false, focusRipple: u = false, focusVisibleClassName: f, LinkComponent: p = "a", onBlur: B, onClick: y, onContextMenu: m, onDragLeave: F, onFocus: C, onFocusVisible: v, onKeyDown: U, onKeyUp: w, onMouseDown: x, onMouseLeave: I, onMouseUp: H, onTouchEnd: g, onTouchMove: T, onTouchStart: D, tabIndex: K = 0, TouchRippleProps: V, touchRippleRef: O, type: M, ...j } = r, nA = h.useRef(null), P = yh(), X = pe(P.ref, O), [AA, rA] = h.useState(false);
    l && AA && rA(false), h.useImperativeHandle(n, () => ({
      focusVisible: () => {
        rA(true), nA.current.focus();
      }
    }), []);
    const R = P.shouldMount && !c && !l;
    h.useEffect(() => {
      AA && u && !c && P.pulsate();
    }, [
      c,
      u,
      AA,
      P
    ]);
    const $ = ze(P, "start", x, d), G = ze(P, "stop", m, d), z = ze(P, "stop", F, d), dA = ze(P, "stop", H, d), iA = ze(P, "stop", (q) => {
      AA && q.preventDefault(), I && I(q);
    }, d), eA = ze(P, "start", D, d), J = ze(P, "stop", g, d), oA = ze(P, "stop", T, d), aA = ze(P, "stop", (q) => {
      gl(q.target) || rA(false), B && B(q);
    }, false), Q = Lt((q) => {
      nA.current || (nA.current = q.currentTarget), gl(q.target) && (rA(true), v && v(q)), C && C(q);
    }), E = () => {
      const q = nA.current;
      return s && s !== "button" && !(q.tagName === "A" && q.href);
    }, b = Lt((q) => {
      u && !q.repeat && AA && q.key === " " && P.stop(q, () => {
        P.start(q);
      }), q.target === q.currentTarget && E() && q.key === " " && q.preventDefault(), U && U(q), q.target === q.currentTarget && E() && q.key === "Enter" && !l && (q.preventDefault(), y && y(q));
    }), _ = Lt((q) => {
      u && q.key === " " && AA && !q.defaultPrevented && P.stop(q, () => {
        P.pulsate(q);
      }), w && w(q), y && q.target === q.currentTarget && E() && q.key === " " && !q.defaultPrevented && y(q);
    });
    let W = s;
    W === "button" && (j.href || j.to) && (W = p);
    const N = {};
    W === "button" ? (N.type = M === void 0 ? "button" : M, N.disabled = l) : (!j.href && !j.to && (N.role = "button"), l && (N["aria-disabled"] = l));
    const sA = pe(t, nA), cA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: d,
      focusRipple: u,
      tabIndex: K,
      focusVisible: AA
    }, fA = kh(cA);
    return L.jsxs(Kh, {
      as: W,
      className: pA(fA.root, a),
      ownerState: cA,
      onBlur: aA,
      onClick: y,
      onContextMenu: G,
      onFocus: Q,
      onKeyDown: b,
      onKeyUp: _,
      onMouseDown: $,
      onMouseLeave: iA,
      onMouseUp: dA,
      onDragLeave: z,
      onTouchEnd: J,
      onTouchMove: oA,
      onTouchStart: eA,
      ref: sA,
      tabIndex: l ? -1 : K,
      type: M,
      ...N,
      ...j,
      children: [
        i,
        R ? L.jsx(Th, {
          ref: X,
          center: o,
          ...V
        }) : null
      ]
    });
  });
  function ze(A, e, t, r = false) {
    return Lt((n) => (t && t(n), r || A[e](n), true));
  }
  function Dh(A) {
    return typeof A.main == "string";
  }
  function Mh(A, e = []) {
    if (!Dh(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  mt = function(A = []) {
    return ([, e]) => e && Mh(e, A);
  };
  function Ph(A) {
    return RA("MuiCircularProgress", A);
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
  let it, Ca, va, _h, Nh, Gh, Vh, $h, Wh;
  it = 44;
  Ca = en`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  va = en`
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
  _h = typeof Ca != "string" ? ss`
        animation: ${Ca} 1.4s linear infinite;
      ` : null;
  Nh = typeof va != "string" ? ss`
        animation: ${va} 1.4s ease-in-out infinite;
      ` : null;
  Gh = (A) => {
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
    return kA(o, Ph, e);
  };
  Vh = lA("span", {
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
        style: _h || {
          animation: `${Ca} 1.4s linear infinite`
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
  $h = lA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  Wh = lA("circle", {
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
        style: Nh || {
          animation: `${va} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  jh = h.forwardRef(function(e, t) {
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
    }, p = Gh(f), B = {}, y = {}, m = {};
    if (d === "determinate") {
      const F = 2 * Math.PI * ((it - l) / 2);
      B.strokeDasharray = F.toFixed(3), m["aria-valuenow"] = Math.round(c), B.strokeDashoffset = `${((100 - c) / 100 * F).toFixed(3)}px`, y.transform = "rotate(-90deg)";
    }
    return L.jsx(Vh, {
      className: pA(p.root, n),
      style: {
        width: a,
        height: a,
        ...y,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...m,
      ...u,
      children: L.jsx($h, {
        className: p.svg,
        ownerState: f,
        viewBox: `${it / 2} ${it / 2} ${it} ${it}`,
        children: L.jsx(Wh, {
          className: p.circle,
          style: B,
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
  function Xh(A) {
    return RA("MuiIconButton", A);
  }
  let xl, Jh, zh, Yh;
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
  Jh = (A) => {
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
    return kA(a, Xh, e);
  };
  zh = lA(Oh, {
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
    [`&.${xl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${xl.loading}`]: {
      color: "transparent"
    }
  })));
  Yh = lA("span", {
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
  Zh = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: d, loading: u = null, loadingIndicator: f, ...p } = r, B = ii(d), y = f ?? L.jsx(jh, {
      "aria-labelledby": B,
      color: "inherit",
      size: 16
    }), m = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: u,
      loadingIndicator: y,
      size: c
    }, F = Jh(m);
    return L.jsxs(zh, {
      id: u ? B : d,
      className: pA(F.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || u,
      ref: t,
      ...p,
      ownerState: m,
      children: [
        typeof u == "boolean" && L.jsx("span", {
          className: F.loadingWrapper,
          style: {
            display: "contents"
          },
          children: L.jsx(Yh, {
            className: F.loadingIndicator,
            ownerState: m,
            children: u && y
          })
        }),
        o
      ]
    });
  });
  function qh(A) {
    return RA("MuiTypography", A);
  }
  let A0, e0, t0, r0, Sl;
  HU = IA("MuiTypography", [
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
  A0 = {
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
  e0 = oh();
  t0 = (A) => {
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
    return kA(a, qh, i);
  };
  r0 = lA("span", {
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
  Sl = {
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
  Yn = h.forwardRef(function(e, t) {
    const { color: r, ...n } = KA({
      props: e,
      name: "MuiTypography"
    }), o = !A0[r], i = e0({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: d = false, paragraph: u = false, variant: f = "body1", variantMapping: p = Sl, ...B } = i, y = {
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
    }, m = l || (u ? "p" : p[f] || Sl[f]) || "span", F = t0(y);
    return L.jsx(r0, {
      as: m,
      ref: t,
      className: pA(F.root, s),
      ...B,
      ownerState: y,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...B.style
      }
    });
  });
  function n0(A) {
    return typeof A == "function" ? A() : A;
  }
  const o0 = h.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = h.useState(null), s = pe(h.isValidElement(r) ? on(r) : null, t);
    if (tt(() => {
      o || a(n0(n) || document.body);
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
      if (h.isValidElement(r)) {
        const l = {
          ref: s
        };
        return h.cloneElement(r, l);
      }
      return r;
    }
    return i && Ss.createPortal(r, i);
  });
  function hn(A) {
    return parseInt(A, 10) || 0;
  }
  const i0 = {
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
  function a0(A) {
    for (const e in A) return false;
    return true;
  }
  function Il(A) {
    return a0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const s0 = h.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = h.useRef(a != null), c = h.useRef(null), d = pe(t, c), u = h.useRef(null), f = h.useRef(null), p = h.useCallback(() => {
      const C = c.current, v = f.current;
      if (!C || !v) return;
      const w = rt(C).getComputedStyle(C);
      if (w.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = w.width, v.value = C.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const x = w.boxSizing, I = hn(w.paddingBottom) + hn(w.paddingTop), H = hn(w.borderBottomWidth) + hn(w.borderTopWidth), g = v.scrollHeight;
      v.value = "x";
      const T = v.scrollHeight;
      let D = g;
      o && (D = Math.max(Number(o) * T, D)), n && (D = Math.min(Number(n) * T, D)), D = Math.max(D, T);
      const K = D + (x === "border-box" ? I + H : 0), V = Math.abs(D - g) <= 1;
      return {
        outerHeightStyle: K,
        overflowing: V
      };
    }, [
      n,
      o,
      e.placeholder
    ]), B = Lt(() => {
      const C = c.current, v = p();
      if (!C || !v || Il(v)) return false;
      const U = v.outerHeightStyle;
      return u.current != null && u.current !== U;
    }), y = h.useCallback(() => {
      const C = c.current, v = p();
      if (!C || !v || Il(v)) return;
      const U = v.outerHeightStyle;
      u.current !== U && (u.current = U, C.style.height = `${U}px`), C.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      p
    ]), m = h.useRef(-1);
    tt(() => {
      const C = Lu(y), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = rt(v);
      U.addEventListener("resize", C);
      let w;
      return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
        B() && (w.unobserve(v), cancelAnimationFrame(m.current), y(), m.current = requestAnimationFrame(() => {
          w.observe(v);
        }));
      }), w.observe(v)), () => {
        C.clear(), cancelAnimationFrame(m.current), U.removeEventListener("resize", C), w && w.disconnect();
      };
    }, [
      p,
      y,
      B
    ]), tt(() => {
      y();
    });
    const F = (C) => {
      l || y(), r && r(C);
    };
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx("textarea", {
          value: a,
          onChange: F,
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
            ...i0.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  Qa = function(A) {
    return typeof A == "string";
  };
  dr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const Ts = h.createContext(void 0);
  fr = function() {
    return h.useContext(Ts);
  };
  function Hl(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function co(A, e = false) {
    return A && (Hl(A.value) && A.value !== "" || e && Hl(A.defaultValue) && A.defaultValue !== "");
  }
  function l0(A) {
    return A.startAdornment;
  }
  function c0(A) {
    return RA("MuiInputBase", A);
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
  const si = (A, e) => {
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
  }, li = (A, e) => {
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
  }, u0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: d, size: u, startAdornment: f, type: p } = A, B = {
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
    return kA(B, c0, e);
  }, ci = lA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: si
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
  }))), ui = lA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: li
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
  })), Ll = xs({
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
  }), Ls = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: d, disabled: u, disableInjectingGlobalStyles: f, endAdornment: p, error: B, fullWidth: y = false, id: m, inputComponent: F = "input", inputProps: C = {}, inputRef: v, margin: U, maxRows: w, minRows: x, multiline: I = false, name: H, onBlur: g, onChange: T, onClick: D, onFocus: K, onKeyDown: V, onKeyUp: O, placeholder: M, readOnly: j, renderSuffix: nA, rows: P, size: X, slotProps: AA = {}, slots: rA = {}, startAdornment: R, type: $ = "text", value: G, ...z } = r, dA = C.value != null ? C.value : G, { current: iA } = h.useRef(dA != null), eA = h.useRef(), J = h.useCallback((HA) => {
    }, []), oA = pe(eA, v, C.ref, J), [aA, Q] = h.useState(false), E = fr(), b = dr({
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
    b.focused = E ? E.focused : aA, h.useEffect(() => {
      !E && u && aA && (Q(false), g && g());
    }, [
      E,
      u,
      aA,
      g
    ]);
    const _ = E && E.onFilled, W = E && E.onEmpty, N = h.useCallback((HA) => {
      co(HA) ? _ && _() : W && W();
    }, [
      _,
      W
    ]);
    tt(() => {
      iA && N({
        value: dA
      });
    }, [
      dA,
      N,
      iA
    ]);
    const sA = (HA) => {
      K && K(HA), C.onFocus && C.onFocus(HA), E && E.onFocus ? E.onFocus(HA) : Q(true);
    }, cA = (HA) => {
      g && g(HA), C.onBlur && C.onBlur(HA), E && E.onBlur ? E.onBlur(HA) : Q(false);
    }, fA = (HA, ...Kt) => {
      if (!iA) {
        const pr = HA.target || eA.current;
        if (pr == null) throw new Error(At(1));
        N({
          value: pr.value
        });
      }
      C.onChange && C.onChange(HA, ...Kt), T && T(HA, ...Kt);
    };
    h.useEffect(() => {
      N(eA.current);
    }, []);
    const q = (HA) => {
      eA.current && HA.currentTarget === HA.target && eA.current.focus(), D && D(HA);
    };
    let qA = F, gA = C;
    I && qA === "input" && (P ? gA = {
      type: void 0,
      minRows: P,
      maxRows: P,
      ...gA
    } : gA = {
      type: void 0,
      maxRows: w,
      minRows: x,
      ...gA
    }, qA = s0);
    const PA = (HA) => {
      N(HA.animationName === "mui-auto-fill-cancel" ? eA.current : {
        value: "x"
      });
    };
    h.useEffect(() => {
      E && E.setAdornedStart(!!R);
    }, [
      E,
      R
    ]);
    const WA = {
      ...r,
      color: b.color || "primary",
      disabled: b.disabled,
      endAdornment: p,
      error: b.error,
      focused: b.focused,
      formControl: E,
      fullWidth: y,
      hiddenLabel: b.hiddenLabel,
      multiline: I,
      size: b.size,
      startAdornment: R,
      type: $
    }, oe = u0(WA), XA = rA.root || l.Root || ci, ot = AA.root || c.root || {}, vt = rA.input || l.Input || ui;
    return gA = {
      ...gA,
      ...AA.input ?? c.input
    }, L.jsxs(h.Fragment, {
      children: [
        !f && typeof Ll == "function" && (Tl || (Tl = L.jsx(Ll, {}))),
        L.jsxs(XA, {
          ...ot,
          ref: t,
          onClick: q,
          ...z,
          ...!Qa(XA) && {
            ownerState: {
              ...WA,
              ...ot.ownerState
            }
          },
          className: pA(oe.root, ot.className, a, j && "MuiInputBase-readOnly"),
          children: [
            R,
            L.jsx(Ts.Provider, {
              value: null,
              children: L.jsx(vt, {
                "aria-invalid": b.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: d,
                disabled: b.disabled,
                id: m,
                onAnimationStart: PA,
                name: H,
                placeholder: M,
                readOnly: j,
                required: b.required,
                rows: P,
                value: dA,
                onKeyDown: V,
                onKeyUp: O,
                type: $,
                ...gA,
                ...!Qa(vt) && {
                  as: qA,
                  ownerState: {
                    ...WA,
                    ...gA.ownerState
                  }
                },
                ref: oA,
                className: pA(oe.input, gA.className, j && "MuiInputBase-readOnly"),
                onBlur: cA,
                onChange: fA,
                onFocus: sA
              })
            }),
            p,
            nA ? nA({
              ...b,
              startAdornment: R
            }) : null
          ]
        })
      ]
    });
  });
  function d0(A) {
    return RA("MuiInput", A);
  }
  const wr = {
    ...ar,
    ...IA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function f0(A) {
    return RA("MuiOutlinedInput", A);
  }
  const ke = {
    ...ar,
    ...IA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function g0(A) {
    return RA("MuiFilledInput", A);
  }
  let Qt, p0, B0;
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
  p0 = Ad(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  B0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  h0 = h.forwardRef(function(e, t) {
    const r = Es(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: d, onEntering: u, onExit: f, onExited: p, onExiting: B, style: y, timeout: m = n, TransitionComponent: F = We, ...C } = e, v = h.useRef(null), U = pe(v, on(a), t), w = (V) => (O) => {
      if (V) {
        const M = v.current;
        O === void 0 ? V(M) : V(M, O);
      }
    }, x = w(u), I = w((V, O) => {
      rd(V);
      const M = so({
        style: y,
        timeout: m,
        easing: s
      }, {
        mode: "enter"
      });
      V.style.webkitTransition = r.transitions.create("opacity", M), V.style.transition = r.transitions.create("opacity", M), c && c(V, O);
    }), H = w(d), g = w(B), T = w((V) => {
      const O = so({
        style: y,
        timeout: m,
        easing: s
      }, {
        mode: "exit"
      });
      V.style.webkitTransition = r.transitions.create("opacity", O), V.style.transition = r.transitions.create("opacity", O), f && f(V);
    }), D = w(p), K = (V) => {
      o && o(v.current, V);
    };
    return L.jsx(F, {
      appear: i,
      in: l,
      nodeRef: v,
      onEnter: I,
      onEntered: H,
      onEntering: x,
      onExit: T,
      onExited: D,
      onExiting: g,
      addEndListener: K,
      timeout: m,
      ...C,
      children: (V, { ownerState: O, ...M }) => h.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: V === "exited" && !l ? "hidden" : void 0,
          ...B0[V],
          ...y,
          ...a.props.style
        },
        ref: U,
        ...M
      })
    });
  });
  function w0(A) {
    return RA("MuiBackdrop", A);
  }
  IA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let m0, C0, Q0, y0, ya, b0, F0, nd, Zn, U0, E0;
  m0 = (A) => {
    const { classes: e, invisible: t } = A;
    return kA({
      root: [
        "root",
        t && "invisible"
      ]
    }, w0, e);
  };
  C0 = lA("div", {
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
  v0 = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: d = {}, slots: u = {}, TransitionComponent: f, transitionDuration: p, ...B } = r, y = {
      ...r,
      component: i,
      invisible: a
    }, m = m0(y), F = {
      transition: f,
      root: l.Root,
      ...u
    }, C = {
      ...c,
      ...d
    }, v = {
      slots: F,
      slotProps: C
    }, [U, w] = le("root", {
      elementType: C0,
      externalForwardedProps: v,
      className: pA(m.root, o),
      ownerState: y
    }), [x, I] = le("transition", {
      elementType: h0,
      externalForwardedProps: v,
      ownerState: y
    });
    return L.jsx(x, {
      in: s,
      timeout: p,
      ...B,
      ...I,
      children: L.jsx(U, {
        "aria-hidden": true,
        ...w,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  Q0 = IA("MuiBox", [
    "root"
  ]);
  y0 = ai();
  He = kp({
    themeId: Ge,
    defaultTheme: y0,
    defaultClassName: Q0.root,
    generateClassName: xu.generate
  });
  ya = typeof xs({}) == "function";
  b0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  F0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  nd = (A, e = false) => {
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
      html: b0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...F0(A),
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
  Zn = "mui-ecs";
  U0 = (A) => {
    const e = nd(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${Zn})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${Zn}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${Zn}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  E0 = xs(ya ? ({ theme: A, enableColorScheme: e }) => nd(A, e) : ({ theme: A }) => U0(A));
  function x0(A) {
    const e = KA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(h.Fragment, {
      children: [
        ya && L.jsx(E0, {
          enableColorScheme: r
        }),
        !ya && !r && L.jsx("span", {
          className: Zn,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function S0(A) {
    const e = Te(A);
    return e.body === A ? rt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Kr(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Rl(A) {
    return parseInt(rt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function I0(A) {
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
  function kl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !I0(i);
      a && s && Kr(i, n);
    });
  }
  function Ii(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function H0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (S0(r)) {
        const i = Ku(rt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Rl(r) + i}px`;
        const a = Te(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Rl(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Te(r).body;
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
  function T0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class L0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Kr(e.modalRef, false);
      const n = T0(t);
      kl(t, e.mount, e.modalRef, n, true);
      const o = Ii(this.containers, (i) => i.container === t);
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
      const r = Ii(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = H0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Ii(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Kr(e.modalRef, t), kl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Kr(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const R0 = [
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
  function k0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function K0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function O0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || K0(A));
  }
  function D0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(R0)).forEach((r, n) => {
      const o = k0(r);
      o === -1 || !O0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function M0() {
    return true;
  }
  function P0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = D0, isEnabled: i = M0, open: a } = A, s = h.useRef(false), l = h.useRef(null), c = h.useRef(null), d = h.useRef(null), u = h.useRef(null), f = h.useRef(false), p = h.useRef(null), B = pe(on(e), p), y = h.useRef(null);
    h.useEffect(() => {
      !a || !p.current || (f.current = !t);
    }, [
      t,
      a
    ]), h.useEffect(() => {
      if (!a || !p.current) return;
      const C = Te(p.current);
      return p.current.contains(C.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), f.current && p.current.focus()), () => {
        n || (d.current && d.current.focus && (s.current = true, d.current.focus()), d.current = null);
      };
    }, [
      a
    ]), h.useEffect(() => {
      if (!a || !p.current) return;
      const C = Te(p.current), v = (x) => {
        y.current = x, !(r || !i() || x.key !== "Tab") && C.activeElement === p.current && x.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const x = p.current;
        if (x === null) return;
        if (!C.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (x.contains(C.activeElement) || r && C.activeElement !== l.current && C.activeElement !== c.current) return;
        if (C.activeElement !== u.current) u.current = null;
        else if (u.current !== null) return;
        if (!f.current) return;
        let I = [];
        if ((C.activeElement === l.current || C.activeElement === c.current) && (I = o(p.current)), I.length > 0) {
          const H = !!(((_a2 = y.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = y.current) == null ? void 0 : _b2.key) === "Tab"), g = I[0], T = I[I.length - 1];
          typeof g != "string" && typeof T != "string" && (H ? T.focus() : g.focus());
        } else x.focus();
      };
      C.addEventListener("focusin", U), C.addEventListener("keydown", v, true);
      const w = setInterval(() => {
        C.activeElement && C.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(w), C.removeEventListener("focusin", U), C.removeEventListener("keydown", v, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const m = (C) => {
      d.current === null && (d.current = C.relatedTarget), f.current = true, u.current = C.target;
      const v = e.props.onFocus;
      v && v(C);
    }, F = (C) => {
      d.current === null && (d.current = C.relatedTarget), f.current = true;
    };
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: F,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        h.cloneElement(e, {
          ref: B,
          onFocus: m
        }),
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: F,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function _0(A) {
    return typeof A == "function" ? A() : A;
  }
  function N0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Kl = () => {
  }, wn = new L0();
  function G0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, d = h.useRef({}), u = h.useRef(null), f = h.useRef(null), p = pe(f, c), [B, y] = h.useState(!l), m = N0(a);
    let F = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (F = false);
    const C = () => Te(u.current), v = () => (d.current.modalRef = f.current, d.current.mount = u.current, d.current), U = () => {
      wn.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, w = Lt(() => {
      const O = _0(e) || C().body;
      wn.add(v(), O), f.current && U();
    }), x = () => wn.isTopModal(v()), I = Lt((O) => {
      u.current = O, O && (l && x() ? U() : f.current && Kr(f.current, F));
    }), H = h.useCallback(() => {
      wn.remove(v(), F);
    }, [
      F
    ]);
    h.useEffect(() => () => {
      H();
    }, [
      H
    ]), h.useEffect(() => {
      l ? w() : (!m || !n) && H();
    }, [
      l,
      H,
      m,
      n,
      w
    ]);
    const g = (O) => (M) => {
      var _a2;
      (_a2 = O.onKeyDown) == null ? void 0 : _a2.call(O, M), !(M.key !== "Escape" || M.which === 229 || !x()) && (t || (M.stopPropagation(), s && s(M, "escapeKeyDown")));
    }, T = (O) => (M) => {
      var _a2;
      (_a2 = O.onClick) == null ? void 0 : _a2.call(O, M), M.target === M.currentTarget && s && s(M, "backdropClick");
    };
    return {
      getRootProps: (O = {}) => {
        const M = Du(A);
        delete M.onTransitionEnter, delete M.onTransitionExited;
        const j = {
          ...M,
          ...O
        };
        return {
          role: "presentation",
          ...j,
          onKeyDown: g(j),
          ref: p
        };
      },
      getBackdropProps: (O = {}) => {
        const M = O;
        return {
          "aria-hidden": true,
          ...M,
          onClick: T(M),
          open: l
        };
      },
      getTransitionProps: () => {
        const O = () => {
          y(false), o && o();
        }, M = () => {
          y(true), i && i(), n && H();
        };
        return {
          onEnter: sl(O, (a == null ? void 0 : a.props.onEnter) ?? Kl),
          onExited: sl(M, (a == null ? void 0 : a.props.onExited) ?? Kl)
        };
      },
      rootRef: p,
      portalRef: I,
      isTopModal: x,
      exited: B,
      hasTransition: m
    };
  }
  function V0(A) {
    return RA("MuiModal", A);
  }
  IA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let $0, W0, j0;
  $0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return kA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, V0, r);
  };
  W0 = lA("div", {
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
  j0 = lA(v0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  X0 = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = j0, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: d, components: u = {}, componentsProps: f = {}, disableAutoFocus: p = false, disableEnforceFocus: B = false, disableEscapeKeyDown: y = false, disablePortal: m = false, disableRestoreFocus: F = false, disableScrollLock: C = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: w, onClose: x, onTransitionEnter: I, onTransitionExited: H, open: g, slotProps: T = {}, slots: D = {}, theme: K, ...V } = r, O = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: B,
      disableEscapeKeyDown: y,
      disablePortal: m,
      disableRestoreFocus: F,
      disableScrollLock: C,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: M, getBackdropProps: j, getTransitionProps: nA, portalRef: P, isTopModal: X, exited: AA, hasTransition: rA } = G0({
      ...O,
      rootRef: t
    }), R = {
      ...O,
      exited: AA
    }, $ = $0(R), G = {};
    if (l.props.tabIndex === void 0 && (G.tabIndex = "-1"), rA) {
      const { onEnter: oA, onExited: aA } = nA();
      G.onEnter = oA, G.onExited = aA;
    }
    const z = {
      slots: {
        root: u.Root,
        backdrop: u.Backdrop,
        ...D
      },
      slotProps: {
        ...f,
        ...T
      }
    }, [dA, iA] = le("root", {
      ref: t,
      elementType: W0,
      externalForwardedProps: {
        ...z,
        ...V,
        component: d
      },
      getSlotProps: M,
      ownerState: R,
      className: pA(a, $ == null ? void 0 : $.root, !R.open && R.exited && ($ == null ? void 0 : $.hidden))
    }), [eA, J] = le("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: z,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (oA) => j({
        ...oA,
        onClick: (aA) => {
          w && w(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, $ == null ? void 0 : $.backdrop),
      ownerState: R
    });
    return !U && !g && (!rA || AA) ? null : L.jsx(o0, {
      ref: P,
      container: c,
      disablePortal: m,
      children: L.jsxs(dA, {
        ...iA,
        children: [
          !v && n ? L.jsx(eA, {
            ...J
          }) : null,
          L.jsx(P0, {
            disableEnforceFocus: B,
            disableAutoFocus: p,
            disableRestoreFocus: F,
            isEnabled: X,
            open: g,
            children: h.cloneElement(l, G)
          })
        ]
      })
    });
  });
  function J0(A) {
    return RA("MuiDivider", A);
  }
  let z0, Y0, Z0;
  TU = IA("MuiDivider", [
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
  z0 = (A) => {
    const { absolute: e, children: t, classes: r, flexItem: n, light: o, orientation: i, textAlign: a, variant: s } = A;
    return kA({
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
    }, J0, r);
  };
  Y0 = lA("div", {
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
  Z0 = lA("span", {
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
  uo = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: s = o || a === "vertical" ? "div" : "hr", flexItem: l = false, light: c = false, role: d = s !== "hr" ? "separator" : void 0, textAlign: u = "center", variant: f = "fullWidth", ...p } = r, B = {
      ...r,
      absolute: n,
      component: s,
      flexItem: l,
      light: c,
      orientation: a,
      role: d,
      textAlign: u,
      variant: f
    }, y = z0(B);
    return L.jsx(Y0, {
      as: s,
      className: pA(y.root, i),
      role: d,
      ref: t,
      ownerState: B,
      "aria-orientation": d === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...p,
      children: o ? L.jsx(Z0, {
        className: y.wrapper,
        ownerState: B,
        children: o
      }) : null
    });
  });
  uo && (uo.muiSkipListHighlight = true);
  const q0 = (A) => {
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
    }, l = kA(s, g0, e);
    return {
      ...e,
      ...l
    };
  }, Aw = lA(ci, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...si(A, e),
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
  })), ew = lA(ui, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: li
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
  }))), Rs = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: d, slots: u = {}, type: f = "text", ...p } = r, B = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, y = q0(r), m = {
      root: {
        ownerState: B
      },
      input: {
        ownerState: B
      }
    }, F = d ?? i ? YA(m, d ?? i) : m, C = u.root ?? o.Root ?? Aw, v = u.input ?? o.Input ?? ew;
    return L.jsx(Ls, {
      slots: {
        root: C,
        input: v
      },
      slotProps: F,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: f,
      ...p,
      classes: y
    });
  });
  Rs.muiName = "Input";
  function tw(A) {
    return RA("MuiFormControl", A);
  }
  IA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  const rw = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${hA(t)}`,
        r && "fullWidth"
      ]
    };
    return kA(n, tw, e);
  }, nw = lA("div", {
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
  }), ow = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: d = false, hiddenLabel: u = false, margin: f = "none", required: p = false, size: B = "medium", variant: y = "outlined", ...m } = r, F = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: d,
      hiddenLabel: u,
      margin: f,
      required: p,
      size: B,
      variant: y
    }, C = rw(F), [v, U] = h.useState(() => {
      let O = false;
      return n && h.Children.forEach(n, (M) => {
        if (!Ui(M, [
          "Input",
          "Select"
        ])) return;
        const j = Ui(M, [
          "Select"
        ]) ? M.props.input : M;
        j && l0(j.props) && (O = true);
      }), O;
    }), [w, x] = h.useState(() => {
      let O = false;
      return n && h.Children.forEach(n, (M) => {
        Ui(M, [
          "Input",
          "Select"
        ]) && (co(M.props, true) || co(M.props.inputProps, true)) && (O = true);
      }), O;
    }), [I, H] = h.useState(false);
    s && I && H(false);
    const g = c !== void 0 && !s ? c : I;
    let T;
    h.useRef(false);
    const D = h.useCallback(() => {
      x(true);
    }, []), K = h.useCallback(() => {
      x(false);
    }, []), V = h.useMemo(() => ({
      adornedStart: v,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: w,
      focused: g,
      fullWidth: d,
      hiddenLabel: u,
      size: B,
      onBlur: () => {
        H(false);
      },
      onFocus: () => {
        H(true);
      },
      onEmpty: K,
      onFilled: D,
      registerEffect: T,
      required: p,
      variant: y
    }), [
      v,
      i,
      s,
      l,
      w,
      g,
      d,
      u,
      T,
      K,
      D,
      p,
      B,
      y
    ]);
    return L.jsx(Ts.Provider, {
      value: V,
      children: L.jsx(nw, {
        as: a,
        ownerState: F,
        className: pA(C.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function iw(A) {
    return RA("MuiFormHelperText", A);
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
  const aw = (A) => {
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
    return kA(l, iw, e);
  }, sw = lA("p", {
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
  }))), lw = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: d, required: u, variant: f, ...p } = r, B = fr(), y = dr({
      props: r,
      muiFormControl: B,
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
      contained: y.variant === "filled" || y.variant === "outlined",
      variant: y.variant,
      size: y.size,
      disabled: y.disabled,
      error: y.error,
      filled: y.filled,
      focused: y.focused,
      required: y.required
    };
    delete m.ownerState;
    const F = aw(m);
    return L.jsx(sw, {
      as: i,
      className: pA(F.root, o),
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
  function cw(A) {
    return RA("MuiFormLabel", A);
  }
  const Or = IA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), uw = (A) => {
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
    return kA(s, cw, e);
  }, dw = lA("label", {
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
          [`&.${Or.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Or.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${Or.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), fw = lA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(OA(({ theme: A }) => ({
    [`&.${Or.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), gw = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: d, required: u, ...f } = r, p = fr(), B = dr({
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
    }), y = {
      ...r,
      color: B.color || "primary",
      component: a,
      disabled: B.disabled,
      error: B.error,
      filled: B.filled,
      focused: B.focused,
      required: B.required
    }, m = uw(y);
    return L.jsxs(dw, {
      as: a,
      ownerState: y,
      className: pA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        B.required && L.jsxs(fw, {
          ownerState: y,
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
  const pw = {
    entering: {
      opacity: 1,
      transform: ba(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, Hi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Fa = h.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: d, onExited: u, onExiting: f, style: p, timeout: B = "auto", TransitionComponent: y = We, ...m } = e, F = ku(), C = h.useRef(), v = Es(), U = h.useRef(null), w = pe(U, on(o), t), x = (O) => (M) => {
      if (O) {
        const j = U.current;
        M === void 0 ? O(j) : O(j, M);
      }
    }, I = x(c), H = x((O, M) => {
      rd(O);
      const { duration: j, delay: nA, easing: P } = so({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "enter"
      });
      let X;
      B === "auto" ? (X = v.transitions.getAutoHeightDuration(O.clientHeight), C.current = X) : X = j, O.style.transition = [
        v.transitions.create("opacity", {
          duration: X,
          delay: nA
        }),
        v.transitions.create("transform", {
          duration: Hi ? X : X * 0.666,
          delay: nA,
          easing: P
        })
      ].join(","), s && s(O, M);
    }), g = x(l), T = x(f), D = x((O) => {
      const { duration: M, delay: j, easing: nA } = so({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "exit"
      });
      let P;
      B === "auto" ? (P = v.transitions.getAutoHeightDuration(O.clientHeight), C.current = P) : P = M, O.style.transition = [
        v.transitions.create("opacity", {
          duration: P,
          delay: j
        }),
        v.transitions.create("transform", {
          duration: Hi ? P : P * 0.666,
          delay: Hi ? j : j || P * 0.333,
          easing: nA
        })
      ].join(","), O.style.opacity = 0, O.style.transform = ba(0.75), d && d(O);
    }), K = x(u), V = (O) => {
      B === "auto" && F.start(C.current || 0, O), r && r(U.current, O);
    };
    return L.jsx(y, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: H,
      onEntered: g,
      onEntering: I,
      onExit: D,
      onExited: K,
      onExiting: T,
      addEndListener: V,
      timeout: B === "auto" ? null : B,
      ...m,
      children: (O, { ownerState: M, ...j }) => h.cloneElement(o, {
        style: {
          opacity: 0,
          transform: ba(0.75),
          visibility: O === "exited" && !a ? "hidden" : void 0,
          ...pw[O],
          ...p,
          ...o.props.style
        },
        ref: w,
        ...j
      })
    });
  });
  Fa && (Fa.muiSupportAuto = true);
  const Bw = (A) => {
    const { classes: e, disableUnderline: t } = A, n = kA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, d0, e);
    return {
      ...e,
      ...n
    };
  }, hw = lA(ci, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...si(A, e),
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
  })), ww = lA(ui, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: li
  })({}), ks = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: d = {}, type: u = "text", ...f } = r, p = Bw(r), y = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? YA(c ?? i, y) : y, F = d.root ?? o.Root ?? hw, C = d.input ?? o.Input ?? ww;
    return L.jsx(Ls, {
      slots: {
        root: F,
        input: C
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
  ks.muiName = "Input";
  function mw(A) {
    return RA("MuiInputLabel", A);
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
  let Cw, vw, Qw;
  Cw = (A) => {
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
    }, l = kA(s, mw, e);
    return {
      ...e,
      ...l
    };
  };
  vw = lA(gw, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${Or.asterisk}`]: e.asterisk
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
  Qw = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = fr();
    let d = i;
    typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
    const u = dr({
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
    }, p = Cw(f);
    return L.jsx(vw, {
      "data-shrink": d,
      ref: t,
      className: pA(p.root, s),
      ...l,
      ownerState: f,
      classes: p
    });
  });
  yw = h.createContext({});
  function bw(A) {
    return RA("MuiList", A);
  }
  IA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let Fw, Uw;
  Fw = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return kA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, bw, e);
  };
  Uw = lA("ul", {
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
  Ew = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, d = h.useMemo(() => ({
      dense: a
    }), [
      a
    ]), u = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, f = Fw(u);
    return L.jsx(yw.Provider, {
      value: d,
      children: L.jsxs(Uw, {
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
  function Ti(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Ml(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function od(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function mr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !od(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const xw = h.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: d = "selectedMenu", ...u } = e, f = h.useRef(null), p = h.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    tt(() => {
      n && f.current.focus();
    }, [
      n
    ]), h.useImperativeHandle(r, () => ({
      adjustStyleForScrollbar: (C, { direction: v }) => {
        const U = !f.current.style.width;
        if (C.clientHeight < f.current.clientHeight && U) {
          const w = `${Ku(rt(C))}px`;
          f.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = w, f.current.style.width = `calc(100% + ${w})`;
        }
        return f.current;
      }
    }), []);
    const B = (C) => {
      const v = f.current, U = C.key;
      if (C.ctrlKey || C.metaKey || C.altKey) {
        c && c(C);
        return;
      }
      const x = Te(v).activeElement;
      if (U === "ArrowDown") C.preventDefault(), mr(v, x, l, s, Ti);
      else if (U === "ArrowUp") C.preventDefault(), mr(v, x, l, s, Ml);
      else if (U === "Home") C.preventDefault(), mr(v, null, l, s, Ti);
      else if (U === "End") C.preventDefault(), mr(v, null, l, s, Ml);
      else if (U.length === 1) {
        const I = p.current, H = U.toLowerCase(), g = performance.now();
        I.keys.length > 0 && (g - I.lastTime > 500 ? (I.keys = [], I.repeating = true, I.previousKeyMatched = true) : I.repeating && H !== I.keys[0] && (I.repeating = false)), I.lastTime = g, I.keys.push(H);
        const T = x && !I.repeating && od(x, I);
        I.previousKeyMatched && (T || mr(v, x, false, s, Ti, I)) ? C.preventDefault() : I.previousKeyMatched = false;
      }
      c && c(C);
    }, y = pe(f, t);
    let m = -1;
    h.Children.forEach(i, (C, v) => {
      if (!h.isValidElement(C)) {
        m === v && (m += 1, m >= i.length && (m = -1));
        return;
      }
      C.props.disabled || (d === "selectedMenu" && C.props.selected || m === -1) && (m = v), m === v && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
    });
    const F = h.Children.map(i, (C, v) => {
      if (v === m) {
        const U = {};
        return o && (U.autoFocus = true), C.props.tabIndex === void 0 && d === "selectedMenu" && (U.tabIndex = 0), h.cloneElement(C, U);
      }
      return C;
    });
    return L.jsx(Ew, {
      role: "menu",
      ref: y,
      className: a,
      onKeyDown: B,
      tabIndex: n ? 0 : -1,
      ...u,
      children: F
    });
  });
  function Sw(A) {
    return RA("MuiPopover", A);
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
  function mn(A) {
    return typeof A == "function" ? A() : A;
  }
  const Iw = (A) => {
    const { classes: e } = A;
    return kA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, Sw, e);
  }, Hw = lA(X0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), id = lA(wa, {
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
  }), ad = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: d, elevation: u = 8, marginThreshold: f = 16, open: p, PaperProps: B = {}, slots: y = {}, slotProps: m = {}, transformOrigin: F = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: C, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: w = false, ...x } = r, I = h.useRef(), H = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: u,
      marginThreshold: f,
      transformOrigin: F,
      TransitionComponent: C,
      transitionDuration: v,
      TransitionProps: U
    }, g = Iw(H), T = h.useCallback(() => {
      if (s === "anchorPosition") return a;
      const J = mn(o), aA = (J && J.nodeType === 1 ? J : Te(I.current).body).getBoundingClientRect();
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
    ]), D = h.useCallback((J) => ({
      vertical: Pl(J, F.vertical),
      horizontal: _l(J, F.horizontal)
    }), [
      F.horizontal,
      F.vertical
    ]), K = h.useCallback((J) => {
      const oA = {
        width: J.offsetWidth,
        height: J.offsetHeight
      }, aA = D(oA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Nl(aA)
      };
      const Q = T();
      let E = Q.top - aA.vertical, b = Q.left - aA.horizontal;
      const _ = E + oA.height, W = b + oA.width, N = rt(mn(o)), sA = N.innerHeight - f, cA = N.innerWidth - f;
      if (f !== null && E < f) {
        const fA = E - f;
        E -= fA, aA.vertical += fA;
      } else if (f !== null && _ > sA) {
        const fA = _ - sA;
        E -= fA, aA.vertical += fA;
      }
      if (f !== null && b < f) {
        const fA = b - f;
        b -= fA, aA.horizontal += fA;
      } else if (W > cA) {
        const fA = W - cA;
        b -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(E)}px`,
        left: `${Math.round(b)}px`,
        transformOrigin: Nl(aA)
      };
    }, [
      o,
      s,
      T,
      D,
      f
    ]), [V, O] = h.useState(p), M = h.useCallback(() => {
      const J = I.current;
      if (!J) return;
      const oA = K(J);
      oA.top !== null && J.style.setProperty("top", oA.top), oA.left !== null && (J.style.left = oA.left), J.style.transformOrigin = oA.transformOrigin, O(true);
    }, [
      K
    ]);
    h.useEffect(() => (w && window.addEventListener("scroll", M), () => window.removeEventListener("scroll", M)), [
      o,
      w,
      M
    ]);
    const j = () => {
      M();
    }, nA = () => {
      O(false);
    };
    h.useEffect(() => {
      p && M();
    }), h.useImperativeHandle(n, () => p ? {
      updatePosition: () => {
        M();
      }
    } : null, [
      p,
      M
    ]), h.useEffect(() => {
      if (!p) return;
      const J = Lu(() => {
        M();
      }), oA = rt(mn(o));
      return oA.addEventListener("resize", J), () => {
        J.clear(), oA.removeEventListener("resize", J);
      };
    }, [
      o,
      p,
      M
    ]);
    let P = v;
    const X = {
      slots: {
        transition: C,
        ...y
      },
      slotProps: {
        transition: U,
        paper: B,
        ...m
      }
    }, [AA, rA] = le("transition", {
      elementType: Fa,
      externalForwardedProps: X,
      ownerState: H,
      getSlotProps: (J) => ({
        ...J,
        onEntering: (oA, aA) => {
          var _a2;
          (_a2 = J.onEntering) == null ? void 0 : _a2.call(J, oA, aA), j();
        },
        onExited: (oA) => {
          var _a2;
          (_a2 = J.onExited) == null ? void 0 : _a2.call(J, oA), nA();
        }
      }),
      additionalProps: {
        appear: true,
        in: p
      }
    });
    v === "auto" && !AA.muiSupportAuto && (P = void 0);
    const R = d || (o ? Te(mn(o)).body : void 0), [$, { slots: G, slotProps: z, ...dA }] = le("root", {
      ref: t,
      elementType: Hw,
      externalForwardedProps: {
        ...X,
        ...x
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: y.backdrop
        },
        slotProps: {
          backdrop: lh(typeof m.backdrop == "function" ? m.backdrop(H) : m.backdrop, {
            invisible: true
          })
        },
        container: R,
        open: p
      },
      ownerState: H,
      className: pA(g.root, c)
    }), [iA, eA] = le("paper", {
      ref: I,
      className: g.paper,
      elementType: id,
      externalForwardedProps: X,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: u,
        style: V ? void 0 : {
          opacity: 0
        }
      },
      ownerState: H
    });
    return L.jsx($, {
      ...dA,
      ...!Qa($) && {
        slots: G,
        slotProps: z,
        disableScrollLock: w
      },
      children: L.jsx(AA, {
        ...rA,
        timeout: P,
        children: L.jsx(iA, {
          ...eA,
          children: l
        })
      })
    });
  });
  function Tw(A) {
    return RA("MuiMenu", A);
  }
  IA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const Lw = {
    vertical: "top",
    horizontal: "right"
  }, Rw = {
    vertical: "top",
    horizontal: "left"
  }, kw = (A) => {
    const { classes: e } = A;
    return kA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, Tw, e);
  }, Kw = lA(ad, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Ow = lA(id, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Dw = lA(xw, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), Mw = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: d = {}, PopoverClasses: u, transitionDuration: f = "auto", TransitionProps: { onEntering: p, ...B } = {}, variant: y = "selectedMenu", slots: m = {}, slotProps: F = {}, ...C } = r, v = aB(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: d,
      transitionDuration: f,
      TransitionProps: B,
      variant: y
    }, w = kw(U), x = n && !a && c, I = h.useRef(null), H = (P, X) => {
      I.current && I.current.adjustStyleForScrollbar(P, {
        direction: v ? "rtl" : "ltr"
      }), p && p(P, X);
    }, g = (P) => {
      P.key === "Tab" && (P.preventDefault(), l && l(P, "tabKeyDown"));
    };
    let T = -1;
    h.Children.map(o, (P, X) => {
      h.isValidElement(P) && (P.props.disabled || (y === "selectedMenu" && P.props.selected || T === -1) && (T = X));
    });
    const D = {
      slots: m,
      slotProps: {
        list: s,
        transition: B,
        paper: d,
        ...F
      }
    }, K = eB({
      elementType: m.root,
      externalSlotProps: F.root,
      ownerState: U,
      className: [
        w.root,
        i
      ]
    }), [V, O] = le("paper", {
      className: w.paper,
      elementType: Ow,
      externalForwardedProps: D,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [M, j] = le("list", {
      className: pA(w.list, s.className),
      elementType: Dw,
      shouldForwardComponentProp: true,
      externalForwardedProps: D,
      getSlotProps: (P) => ({
        ...P,
        onKeyDown: (X) => {
          var _a2;
          g(X), (_a2 = P.onKeyDown) == null ? void 0 : _a2.call(P, X);
        }
      }),
      ownerState: U
    }), nA = typeof D.slotProps.transition == "function" ? D.slotProps.transition(U) : D.slotProps.transition;
    return L.jsx(Kw, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? Lw : Rw,
      slots: {
        root: m.root,
        paper: V,
        backdrop: m.backdrop,
        ...m.transition && {
          transition: m.transition
        }
      },
      slotProps: {
        root: K,
        paper: O,
        backdrop: typeof F.backdrop == "function" ? F.backdrop(U) : F.backdrop,
        transition: {
          ...nA,
          onEntering: (...P) => {
            var _a2;
            H(...P), (_a2 = nA == null ? void 0 : nA.onEntering) == null ? void 0 : _a2.call(nA, ...P);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...C,
      classes: u,
      children: L.jsx(M, {
        actions: I,
        autoFocus: n && (T === -1 || a),
        autoFocusItem: x,
        variant: y,
        ...j,
        children: o
      })
    });
  });
  function Pw(A) {
    return RA("MuiNativeSelect", A);
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
  ]), _w = (A) => {
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
    return kA(a, Pw, e);
  }, sd = lA("select", {
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
  })), Nw = lA(sd, {
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
  })({}), ld = lA("svg", {
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
  })), Gw = lA(ld, {
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
  })({}), Vw = h.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, d = _w(c);
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx(Nw, {
          ownerState: c,
          className: pA(d.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : L.jsx(Gw, {
          as: i,
          ownerState: c,
          className: d.icon
        })
      ]
    });
  });
  var Gl;
  const $w = lA("fieldset", {
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
  }), Ww = lA("legend", {
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
  function jw(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return L.jsx($w, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: L.jsx(Ww, {
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
  const Xw = (A) => {
    const { classes: e } = A, r = kA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, f0, e);
    return {
      ...e,
      ...r
    };
  }, Jw = lA(ci, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: si
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
  })), zw = lA(jw, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(OA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), Yw = lA(ui, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: li
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
  }))), Os = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: d = {}, type: u = "text", ...f } = r, p = Xw(r), B = fr(), y = dr({
      props: r,
      muiFormControl: B,
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
      color: y.color || "primary",
      disabled: y.disabled,
      error: y.error,
      focused: y.focused,
      formControl: B,
      fullWidth: o,
      hiddenLabel: y.hiddenLabel,
      multiline: s,
      size: y.size,
      type: u
    }, F = c.root ?? n.Root ?? Jw, C = c.input ?? n.Input ?? Yw, [v, U] = le("notchedOutline", {
      elementType: zw,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: m,
      externalForwardedProps: {
        slots: c,
        slotProps: d
      },
      additionalProps: {
        label: a != null && a !== "" && y.required ? L.jsxs(h.Fragment, {
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
        root: F,
        input: C
      },
      slotProps: d,
      renderSuffix: (w) => L.jsx(v, {
        ...U,
        notched: typeof l < "u" ? l : !!(w.startAdornment || w.filled || w.focused)
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
  function cd(A) {
    return RA("MuiSelect", A);
  }
  const Cr = IA("MuiSelect", [
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
  const Zw = lA(sd, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Cr.select}`]: e.select
        },
        {
          [`&.${Cr.select}`]: e[t.variant]
        },
        {
          [`&.${Cr.error}`]: e.error
        },
        {
          [`&.${Cr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Cr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), qw = lA(ld, {
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
  })({}), Am = lA("input", {
    shouldForwardProp: (A) => Zu(A) && A !== "classes",
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
  function em(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let tm, rm, nm, Ds, om, im, am;
  tm = (A) => {
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
    return kA(a, cd, e);
  };
  rm = h.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: d, displayEmpty: u, error: f = false, IconComponent: p, inputRef: B, labelId: y, MenuProps: m = {}, multiple: F, name: C, onBlur: v, onChange: U, onClose: w, onFocus: x, onOpen: I, open: H, readOnly: g, renderValue: T, required: D, SelectDisplayProps: K = {}, tabIndex: V, type: O, value: M, variant: j = "standard", ...nA } = e, [P, X] = dl({
      controlled: M,
      default: c,
      name: "Select"
    }), [AA, rA] = dl({
      controlled: H,
      default: l,
      name: "Select"
    }), R = h.useRef(null), $ = h.useRef(null), [G, z] = h.useState(null), { current: dA } = h.useRef(H != null), [iA, eA] = h.useState(), J = pe(t, B), oA = h.useCallback((uA) => {
      $.current = uA, uA && z(uA);
    }, []), aA = G == null ? void 0 : G.parentNode;
    h.useImperativeHandle(J, () => ({
      focus: () => {
        $.current.focus();
      },
      node: R.current,
      value: P
    }), [
      P
    ]), h.useEffect(() => {
      l && AA && G && !dA && (eA(i ? null : aA.clientWidth), $.current.focus());
    }, [
      G,
      i
    ]), h.useEffect(() => {
      o && $.current.focus();
    }, [
      o
    ]), h.useEffect(() => {
      if (!y) return;
      const uA = Te($.current).getElementById(y);
      if (uA) {
        const xA = () => {
          getSelection().isCollapsed && $.current.focus();
        };
        return uA.addEventListener("click", xA), () => {
          uA.removeEventListener("click", xA);
        };
      }
    }, [
      y
    ]);
    const Q = (uA, xA) => {
      uA ? I && I(xA) : w && w(xA), dA || (eA(i ? null : aA.clientWidth), rA(uA));
    }, E = (uA) => {
      uA.button === 0 && (uA.preventDefault(), $.current.focus(), Q(true, uA));
    }, b = (uA) => {
      Q(false, uA);
    }, _ = h.Children.toArray(a), W = (uA) => {
      const xA = _.find((Ae) => Ae.props.value === uA.target.value);
      xA !== void 0 && (X(xA.props.value), U && U(uA, xA));
    }, N = (uA) => (xA) => {
      let Ae;
      if (xA.currentTarget.hasAttribute("tabindex")) {
        if (F) {
          Ae = Array.isArray(P) ? P.slice() : [];
          const Ot = P.indexOf(uA.props.value);
          Ot === -1 ? Ae.push(uA.props.value) : Ae.splice(Ot, 1);
        } else Ae = uA.props.value;
        if (uA.props.onClick && uA.props.onClick(xA), P !== Ae && (X(Ae), U)) {
          const Ot = xA.nativeEvent || xA, Ws = new Ot.constructor(Ot.type, Ot);
          Object.defineProperty(Ws, "target", {
            writable: true,
            value: {
              value: Ae,
              name: C
            }
          }), U(Ws, uA);
        }
        F || Q(false, xA);
      }
    }, sA = (uA) => {
      g || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(uA.key) && (uA.preventDefault(), Q(true, uA));
    }, cA = G !== null && AA, fA = (uA) => {
      !cA && v && (Object.defineProperty(uA, "target", {
        writable: true,
        value: {
          value: P,
          name: C
        }
      }), v(uA));
    };
    delete nA["aria-invalid"];
    let q, qA;
    const gA = [];
    let PA = false;
    (co({
      value: P
    }) || u) && (T ? q = T(P) : PA = true);
    const WA = _.map((uA) => {
      if (!h.isValidElement(uA)) return null;
      let xA;
      if (F) {
        if (!Array.isArray(P)) throw new Error(At(2));
        xA = P.some((Ae) => $l(Ae, uA.props.value)), xA && PA && gA.push(uA.props.children);
      } else xA = $l(P, uA.props.value), xA && PA && (qA = uA.props.children);
      return h.cloneElement(uA, {
        "aria-selected": xA ? "true" : "false",
        onClick: N(uA),
        onKeyUp: (Ae) => {
          Ae.key === " " && Ae.preventDefault(), uA.props.onKeyUp && uA.props.onKeyUp(Ae);
        },
        role: "option",
        selected: xA,
        value: void 0,
        "data-value": uA.props.value
      });
    });
    PA && (F ? gA.length === 0 ? q = null : q = gA.reduce((uA, xA, Ae) => (uA.push(xA), Ae < gA.length - 1 && uA.push(", "), uA), []) : q = qA);
    let oe = iA;
    !i && dA && G && (oe = aA.clientWidth);
    let XA;
    typeof V < "u" ? XA = V : XA = d ? null : 0;
    const ot = K.id || (C ? `mui-component-select-${C}` : void 0), vt = {
      ...e,
      variant: j,
      value: P,
      open: cA,
      error: f
    }, HA = tm(vt), Kt = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, pr = ii();
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx(Zw, {
          as: "div",
          ref: oA,
          tabIndex: XA,
          role: "combobox",
          "aria-controls": cA ? pr : void 0,
          "aria-disabled": d ? "true" : void 0,
          "aria-expanded": cA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            y,
            ot
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": D ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: d || g ? null : E,
          onBlur: fA,
          onFocus: x,
          ...K,
          ownerState: vt,
          className: pA(K.className, HA.select, s),
          id: ot,
          children: em(q) ? Vl || (Vl = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : q
        }),
        L.jsx(Am, {
          "aria-invalid": f,
          value: Array.isArray(P) ? P.join(",") : P,
          name: C,
          ref: R,
          "aria-hidden": true,
          onChange: W,
          tabIndex: -1,
          disabled: d,
          className: HA.nativeInput,
          autoFocus: o,
          required: D,
          ...nA,
          ownerState: vt
        }),
        L.jsx(qw, {
          as: p,
          className: HA.icon,
          ownerState: vt
        }),
        L.jsx(Mw, {
          id: `menu-${C || ""}`,
          anchorEl: aA,
          open: cA,
          onClose: b,
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
              "aria-labelledby": y,
              role: "listbox",
              "aria-multiselectable": F ? "true" : void 0,
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
  nm = (A) => {
    const { classes: e } = A, r = kA({
      root: [
        "root"
      ]
    }, cd, e);
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
  om = lA(ks, Ds)("");
  im = lA(Os, Ds)("");
  am = lA(Rs, Ds)("");
  ud = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = p0, id: d, input: u, inputProps: f, label: p, labelId: B, MenuProps: y, multiple: m = false, native: F = false, onClose: C, onOpen: v, open: U, renderValue: w, SelectDisplayProps: x, variant: I = "outlined", ...H } = r, g = F ? Vw : rm, T = fr(), D = dr({
      props: r,
      muiFormControl: T,
      states: [
        "variant",
        "error"
      ]
    }), K = D.variant || I, V = {
      ...r,
      variant: K,
      classes: i
    }, O = nm(V), { root: M, ...j } = O, nA = u || {
      standard: L.jsx(om, {
        ownerState: V
      }),
      outlined: L.jsx(im, {
        label: p,
        ownerState: V
      }),
      filled: L.jsx(am, {
        ownerState: V
      })
    }[K], P = pe(t, on(nA));
    return L.jsx(h.Fragment, {
      children: h.cloneElement(nA, {
        inputComponent: g,
        inputProps: {
          children: o,
          error: D.error,
          IconComponent: c,
          variant: K,
          type: void 0,
          multiple: m,
          ...F ? {
            id: d
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: B,
            MenuProps: y,
            onClose: C,
            onOpen: v,
            open: U,
            renderValue: w,
            SelectDisplayProps: {
              id: d,
              ...x
            }
          },
          ...f,
          classes: f ? YA(j, f.classes) : j,
          ...u ? u.props.inputProps : {}
        },
        ...(m && F || l) && K === "outlined" ? {
          notched: true
        } : {},
        ref: P,
        className: pA(nA.props.className, a, O.root),
        ...!u && {
          variant: K
        },
        ...H
      })
    });
  });
  ud.muiName = "Select";
  function sm(A) {
    return RA("MuiTextField", A);
  }
  IA("MuiTextField", [
    "root"
  ]);
  const lm = {
    standard: ks,
    filled: Rs,
    outlined: Os
  }, cm = (A) => {
    const { classes: e } = A;
    return kA({
      root: [
        "root"
      ]
    }, sm, e);
  }, um = lA(ow, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), dm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: d = false, FormHelperTextProps: u, fullWidth: f = false, helperText: p, id: B, InputLabelProps: y, inputProps: m, InputProps: F, inputRef: C, label: v, maxRows: U, minRows: w, multiline: x = false, name: I, onBlur: H, onChange: g, onFocus: T, placeholder: D, required: K = false, rows: V, select: O = false, SelectProps: M, slots: j = {}, slotProps: nA = {}, type: P, value: X, variant: AA = "outlined", ...rA } = r, R = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: d,
      fullWidth: f,
      multiline: x,
      required: K,
      select: O,
      variant: AA
    }, $ = cm(R), G = ii(B), z = p && G ? `${G}-helper-text` : void 0, dA = v && G ? `${G}-label` : void 0, iA = lm[AA], eA = {
      slots: j,
      slotProps: {
        input: F,
        inputLabel: y,
        htmlInput: m,
        formHelperText: u,
        select: M,
        ...nA
      }
    }, J = {}, oA = eA.slotProps.inputLabel;
    AA === "outlined" && (oA && typeof oA.shrink < "u" && (J.notched = oA.shrink), J.label = v), O && ((!M || !M.native) && (J.id = void 0), J["aria-describedby"] = void 0);
    const [aA, Q] = le("root", {
      elementType: um,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...eA,
        ...rA
      },
      ownerState: R,
      className: pA($.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: d,
        fullWidth: f,
        required: K,
        color: s,
        variant: AA
      }
    }), [E, b] = le("input", {
      elementType: iA,
      externalForwardedProps: eA,
      additionalProps: J,
      ownerState: R
    }), [_, W] = le("inputLabel", {
      elementType: Qw,
      externalForwardedProps: eA,
      ownerState: R
    }), [N, sA] = le("htmlInput", {
      elementType: "input",
      externalForwardedProps: eA,
      ownerState: R
    }), [cA, fA] = le("formHelperText", {
      elementType: lw,
      externalForwardedProps: eA,
      ownerState: R
    }), [q, qA] = le("select", {
      elementType: ud,
      externalForwardedProps: eA,
      ownerState: R
    }), gA = L.jsx(E, {
      "aria-describedby": z,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: f,
      multiline: x,
      name: I,
      rows: V,
      maxRows: U,
      minRows: w,
      type: P,
      value: X,
      id: G,
      inputRef: C,
      onBlur: H,
      onChange: g,
      onFocus: T,
      placeholder: D,
      inputProps: sA,
      slots: {
        input: j.htmlInput ? N : void 0
      },
      ...b
    });
    return L.jsxs(aA, {
      ...Q,
      children: [
        v != null && v !== "" && L.jsx(_, {
          htmlFor: G,
          id: dA,
          ...W,
          children: v
        }),
        O ? L.jsx(q, {
          "aria-describedby": z,
          id: G,
          labelId: dA,
          value: X,
          input: gA,
          ...qA,
          children: i
        }) : gA,
        p && L.jsx(cA, {
          id: z,
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
        children: L.jsx(He, {
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
          children: L.jsx(He, {
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
  let fm, qn, fd, fo;
  fm = [
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
  dd = (A) => h.useMemo(() => {
    if (!A) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, t = {}, r = {}, n = {}, o = {};
    return fm.forEach((i) => {
      const a = A[i];
      a !== void 0 && (i.includes("background") ? e[i] = a : i.includes("border") ? t[i] = a : i.includes("font") || i.includes("line-height") || i.includes("letter-spacing") || i.includes("word-spacing") ? n[i] = a : i.includes("text") || i.includes("color") ? r[i] = a : o[i] = a);
    }), {
      backgroundStyles: e,
      borderStyles: t,
      textStyles: r,
      fontStyles: n,
      boxStyles: o
    };
  }, [
    A
  ]);
  qn = (A) => A.startsWith("&") || A.includes(" ") || A.startsWith("@") ? A : A.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
  fd = (A) => {
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      if (Array.isArray(r)) {
        const n = r.filter((o) => o != null);
        return [
          qn(t),
          n.length > 0 ? n : void 0
        ];
      }
      return typeof r == "object" && r !== null ? [
        qn(t),
        fd(r)
      ] : [
        qn(t),
        r
      ];
    }).filter(([, t]) => t != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  fo = (A) => {
    if (!A) return {};
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      const n = qn(t);
      if (Array.isArray(r)) {
        const o = r.filter((i) => i != null);
        return [
          n,
          o.length > 0 ? o : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const o = fd(r);
        return [
          n,
          o
        ];
      }
      return [
        n,
        r
      ];
    }).filter(([, t]) => t != null));
    return Object.keys(e).length > 0 ? e : {};
  };
  an = h.createContext({});
  function gm({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = dd(r.style || {}), i = h.useMemo(() => ai(YA(t, {
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              fontSize: "0.875rem",
              ...fo(n),
              ...fo(o),
              color: (o == null ? void 0 : o.color) || t.palette.primary.main
            }
          }
        }
      }
    })), [
      t,
      n,
      o
    ]);
    return L.jsxs(qu, {
      theme: i,
      children: [
        L.jsx(x0, {}),
        L.jsx(an.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  LU = function(A, e) {
    return L.jsx(gm, {
      context: e,
      children: A
    });
  };
  let pm;
  Ce = ({ dividerText: A = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return L.jsx(He, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: A ? 2 : 1.5
      },
      children: A ? L.jsx(uo, {
        sx: e,
        children: L.jsx(Yn, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Ua.t(A)
        })
      }) : L.jsx(uo, {
        sx: e
      })
    });
  };
  pm = Ad(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var gd = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(Q, E) {
        if (Q = Q || "", E = E || {}, Q instanceof l) return Q;
        if (!(this instanceof l)) return new l(Q, E);
        var b = c(Q);
        this._originalInput = Q, this._r = b.r, this._g = b.g, this._b = b.b, this._a = b.a, this._roundA = o(100 * this._a) / 100, this._format = E.format || b.format, this._gradientType = E.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = b.ok, this._tc_id = n++;
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
          var Q = this.toRgb(), E, b, _, W, N, sA;
          return E = Q.r / 255, b = Q.g / 255, _ = Q.b / 255, E <= 0.03928 ? W = E / 12.92 : W = e.pow((E + 0.055) / 1.055, 2.4), b <= 0.03928 ? N = b / 12.92 : N = e.pow((b + 0.055) / 1.055, 2.4), _ <= 0.03928 ? sA = _ / 12.92 : sA = e.pow((_ + 0.055) / 1.055, 2.4), 0.2126 * W + 0.7152 * N + 0.0722 * sA;
        },
        setAlpha: function(Q) {
          return this._a = P(Q), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var Q = p(this._r, this._g, this._b);
          return {
            h: Q.h * 360,
            s: Q.s,
            v: Q.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var Q = p(this._r, this._g, this._b), E = o(Q.h * 360), b = o(Q.s * 100), _ = o(Q.v * 100);
          return this._a == 1 ? "hsv(" + E + ", " + b + "%, " + _ + "%)" : "hsva(" + E + ", " + b + "%, " + _ + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var Q = u(this._r, this._g, this._b);
          return {
            h: Q.h * 360,
            s: Q.s,
            l: Q.l,
            a: this._a
          };
        },
        toHslString: function() {
          var Q = u(this._r, this._g, this._b), E = o(Q.h * 360), b = o(Q.s * 100), _ = o(Q.l * 100);
          return this._a == 1 ? "hsl(" + E + ", " + b + "%, " + _ + "%)" : "hsla(" + E + ", " + b + "%, " + _ + "%, " + this._roundA + ")";
        },
        toHex: function(Q) {
          return y(this._r, this._g, this._b, Q);
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
            r: o(X(this._r, 255) * 100) + "%",
            g: o(X(this._g, 255) * 100) + "%",
            b: o(X(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(X(this._r, 255) * 100) + "%, " + o(X(this._g, 255) * 100) + "%, " + o(X(this._b, 255) * 100) + "%)" : "rgba(" + o(X(this._r, 255) * 100) + "%, " + o(X(this._g, 255) * 100) + "%, " + o(X(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : j[y(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(Q) {
          var E = "#" + F(this._r, this._g, this._b, this._a), b = E, _ = this._gradientType ? "GradientType = 1, " : "";
          if (Q) {
            var W = l(Q);
            b = "#" + F(W._r, W._g, W._b, W._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + _ + "startColorstr=" + E + ",endColorstr=" + b + ")";
        },
        toString: function(Q) {
          var E = !!Q;
          Q = Q || this._format;
          var b = false, _ = this._a < 1 && this._a >= 0, W = !E && _ && (Q === "hex" || Q === "hex6" || Q === "hex3" || Q === "hex4" || Q === "hex8" || Q === "name");
          return W ? Q === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (Q === "rgb" && (b = this.toRgbString()), Q === "prgb" && (b = this.toPercentageRgbString()), (Q === "hex" || Q === "hex6") && (b = this.toHexString()), Q === "hex3" && (b = this.toHexString(true)), Q === "hex4" && (b = this.toHex8String(true)), Q === "hex8" && (b = this.toHex8String()), Q === "name" && (b = this.toName()), Q === "hsl" && (b = this.toHslString()), Q === "hsv" && (b = this.toHsvString()), b || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(Q, E) {
          var b = Q.apply(null, [
            this
          ].concat([].slice.call(E)));
          return this._r = b._r, this._g = b._g, this._b = b._b, this.setAlpha(b._a), this;
        },
        lighten: function() {
          return this._applyModification(w, arguments);
        },
        brighten: function() {
          return this._applyModification(x, arguments);
        },
        darken: function() {
          return this._applyModification(I, arguments);
        },
        desaturate: function() {
          return this._applyModification(C, arguments);
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
        _applyCombination: function(Q, E) {
          return Q.apply(null, [
            this
          ].concat([].slice.call(E)));
        },
        analogous: function() {
          return this._applyCombination(V, arguments);
        },
        complement: function() {
          return this._applyCombination(g, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(O, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(K, arguments);
        },
        triad: function() {
          return this._applyCombination(T, arguments);
        },
        tetrad: function() {
          return this._applyCombination(D, arguments);
        }
      }, l.fromRatio = function(Q, E) {
        if (typeof Q == "object") {
          var b = {};
          for (var _ in Q) Q.hasOwnProperty(_) && (_ === "a" ? b[_] = Q[_] : b[_] = z(Q[_]));
          Q = b;
        }
        return l(Q, E);
      };
      function c(Q) {
        var E = {
          r: 0,
          g: 0,
          b: 0
        }, b = 1, _ = null, W = null, N = null, sA = false, cA = false;
        return typeof Q == "string" && (Q = oA(Q)), typeof Q == "object" && (J(Q.r) && J(Q.g) && J(Q.b) ? (E = d(Q.r, Q.g, Q.b), sA = true, cA = String(Q.r).substr(-1) === "%" ? "prgb" : "rgb") : J(Q.h) && J(Q.s) && J(Q.v) ? (_ = z(Q.s), W = z(Q.v), E = B(Q.h, _, W), sA = true, cA = "hsv") : J(Q.h) && J(Q.s) && J(Q.l) && (_ = z(Q.s), N = z(Q.l), E = f(Q.h, _, N), sA = true, cA = "hsl"), Q.hasOwnProperty("a") && (b = Q.a)), b = P(b), {
          ok: sA,
          format: Q.format || cA,
          r: i(255, a(E.r, 0)),
          g: i(255, a(E.g, 0)),
          b: i(255, a(E.b, 0)),
          a: b
        };
      }
      function d(Q, E, b) {
        return {
          r: X(Q, 255) * 255,
          g: X(E, 255) * 255,
          b: X(b, 255) * 255
        };
      }
      function u(Q, E, b) {
        Q = X(Q, 255), E = X(E, 255), b = X(b, 255);
        var _ = a(Q, E, b), W = i(Q, E, b), N, sA, cA = (_ + W) / 2;
        if (_ == W) N = sA = 0;
        else {
          var fA = _ - W;
          switch (sA = cA > 0.5 ? fA / (2 - _ - W) : fA / (_ + W), _) {
            case Q:
              N = (E - b) / fA + (E < b ? 6 : 0);
              break;
            case E:
              N = (b - Q) / fA + 2;
              break;
            case b:
              N = (Q - E) / fA + 4;
              break;
          }
          N /= 6;
        }
        return {
          h: N,
          s: sA,
          l: cA
        };
      }
      function f(Q, E, b) {
        var _, W, N;
        Q = X(Q, 360), E = X(E, 100), b = X(b, 100);
        function sA(q, qA, gA) {
          return gA < 0 && (gA += 1), gA > 1 && (gA -= 1), gA < 1 / 6 ? q + (qA - q) * 6 * gA : gA < 1 / 2 ? qA : gA < 2 / 3 ? q + (qA - q) * (2 / 3 - gA) * 6 : q;
        }
        if (E === 0) _ = W = N = b;
        else {
          var cA = b < 0.5 ? b * (1 + E) : b + E - b * E, fA = 2 * b - cA;
          _ = sA(fA, cA, Q + 1 / 3), W = sA(fA, cA, Q), N = sA(fA, cA, Q - 1 / 3);
        }
        return {
          r: _ * 255,
          g: W * 255,
          b: N * 255
        };
      }
      function p(Q, E, b) {
        Q = X(Q, 255), E = X(E, 255), b = X(b, 255);
        var _ = a(Q, E, b), W = i(Q, E, b), N, sA, cA = _, fA = _ - W;
        if (sA = _ === 0 ? 0 : fA / _, _ == W) N = 0;
        else {
          switch (_) {
            case Q:
              N = (E - b) / fA + (E < b ? 6 : 0);
              break;
            case E:
              N = (b - Q) / fA + 2;
              break;
            case b:
              N = (Q - E) / fA + 4;
              break;
          }
          N /= 6;
        }
        return {
          h: N,
          s: sA,
          v: cA
        };
      }
      function B(Q, E, b) {
        Q = X(Q, 360) * 6, E = X(E, 100), b = X(b, 100);
        var _ = e.floor(Q), W = Q - _, N = b * (1 - E), sA = b * (1 - W * E), cA = b * (1 - (1 - W) * E), fA = _ % 6, q = [
          b,
          sA,
          N,
          N,
          cA,
          b
        ][fA], qA = [
          cA,
          b,
          b,
          sA,
          N,
          N
        ][fA], gA = [
          N,
          N,
          cA,
          b,
          b,
          sA
        ][fA];
        return {
          r: q * 255,
          g: qA * 255,
          b: gA * 255
        };
      }
      function y(Q, E, b, _) {
        var W = [
          G(o(Q).toString(16)),
          G(o(E).toString(16)),
          G(o(b).toString(16))
        ];
        return _ && W[0].charAt(0) == W[0].charAt(1) && W[1].charAt(0) == W[1].charAt(1) && W[2].charAt(0) == W[2].charAt(1) ? W[0].charAt(0) + W[1].charAt(0) + W[2].charAt(0) : W.join("");
      }
      function m(Q, E, b, _, W) {
        var N = [
          G(o(Q).toString(16)),
          G(o(E).toString(16)),
          G(o(b).toString(16)),
          G(dA(_))
        ];
        return W && N[0].charAt(0) == N[0].charAt(1) && N[1].charAt(0) == N[1].charAt(1) && N[2].charAt(0) == N[2].charAt(1) && N[3].charAt(0) == N[3].charAt(1) ? N[0].charAt(0) + N[1].charAt(0) + N[2].charAt(0) + N[3].charAt(0) : N.join("");
      }
      function F(Q, E, b, _) {
        var W = [
          G(dA(_)),
          G(o(Q).toString(16)),
          G(o(E).toString(16)),
          G(o(b).toString(16))
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
      function C(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var b = l(Q).toHsl();
        return b.s -= E / 100, b.s = AA(b.s), l(b);
      }
      function v(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var b = l(Q).toHsl();
        return b.s += E / 100, b.s = AA(b.s), l(b);
      }
      function U(Q) {
        return l(Q).desaturate(100);
      }
      function w(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var b = l(Q).toHsl();
        return b.l += E / 100, b.l = AA(b.l), l(b);
      }
      function x(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var b = l(Q).toRgb();
        return b.r = a(0, i(255, b.r - o(255 * -(E / 100)))), b.g = a(0, i(255, b.g - o(255 * -(E / 100)))), b.b = a(0, i(255, b.b - o(255 * -(E / 100)))), l(b);
      }
      function I(Q, E) {
        E = E === 0 ? 0 : E || 10;
        var b = l(Q).toHsl();
        return b.l -= E / 100, b.l = AA(b.l), l(b);
      }
      function H(Q, E) {
        var b = l(Q).toHsl(), _ = (b.h + E) % 360;
        return b.h = _ < 0 ? 360 + _ : _, l(b);
      }
      function g(Q) {
        var E = l(Q).toHsl();
        return E.h = (E.h + 180) % 360, l(E);
      }
      function T(Q) {
        var E = l(Q).toHsl(), b = E.h;
        return [
          l(Q),
          l({
            h: (b + 120) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (b + 240) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function D(Q) {
        var E = l(Q).toHsl(), b = E.h;
        return [
          l(Q),
          l({
            h: (b + 90) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (b + 180) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (b + 270) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function K(Q) {
        var E = l(Q).toHsl(), b = E.h;
        return [
          l(Q),
          l({
            h: (b + 72) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (b + 216) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function V(Q, E, b) {
        E = E || 6, b = b || 30;
        var _ = l(Q).toHsl(), W = 360 / b, N = [
          l(Q)
        ];
        for (_.h = (_.h - (W * E >> 1) + 720) % 360; --E; ) _.h = (_.h + W) % 360, N.push(l(_));
        return N;
      }
      function O(Q, E) {
        E = E || 6;
        for (var b = l(Q).toHsv(), _ = b.h, W = b.s, N = b.v, sA = [], cA = 1 / E; E--; ) sA.push(l({
          h: _,
          s: W,
          v: N
        })), N = (N + cA) % 1;
        return sA;
      }
      l.mix = function(Q, E, b) {
        b = b === 0 ? 0 : b || 50;
        var _ = l(Q).toRgb(), W = l(E).toRgb(), N = b / 100, sA = {
          r: (W.r - _.r) * N + _.r,
          g: (W.g - _.g) * N + _.g,
          b: (W.b - _.b) * N + _.b,
          a: (W.a - _.a) * N + _.a
        };
        return l(sA);
      }, l.readability = function(Q, E) {
        var b = l(Q), _ = l(E);
        return (e.max(b.getLuminance(), _.getLuminance()) + 0.05) / (e.min(b.getLuminance(), _.getLuminance()) + 0.05);
      }, l.isReadable = function(Q, E, b) {
        var _ = l.readability(Q, E), W, N;
        switch (N = false, W = aA(b), W.level + W.size) {
          case "AAsmall":
          case "AAAlarge":
            N = _ >= 4.5;
            break;
          case "AAlarge":
            N = _ >= 3;
            break;
          case "AAAsmall":
            N = _ >= 7;
            break;
        }
        return N;
      }, l.mostReadable = function(Q, E, b) {
        var _ = null, W = 0, N, sA, cA, fA;
        b = b || {}, sA = b.includeFallbackColors, cA = b.level, fA = b.size;
        for (var q = 0; q < E.length; q++) N = l.readability(Q, E[q]), N > W && (W = N, _ = l(E[q]));
        return l.isReadable(Q, _, {
          level: cA,
          size: fA
        }) || !sA ? _ : (b.includeFallbackColors = false, l.mostReadable(Q, [
          "#fff",
          "#000"
        ], b));
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
      }, j = l.hexNames = nA(M);
      function nA(Q) {
        var E = {};
        for (var b in Q) Q.hasOwnProperty(b) && (E[Q[b]] = b);
        return E;
      }
      function P(Q) {
        return Q = parseFloat(Q), (isNaN(Q) || Q < 0 || Q > 1) && (Q = 1), Q;
      }
      function X(Q, E) {
        R(Q) && (Q = "100%");
        var b = $(Q);
        return Q = i(E, a(0, parseFloat(Q))), b && (Q = parseInt(Q * E, 10) / 100), e.abs(Q - E) < 1e-6 ? 1 : Q % E / parseFloat(E);
      }
      function AA(Q) {
        return i(1, a(0, Q));
      }
      function rA(Q) {
        return parseInt(Q, 16);
      }
      function R(Q) {
        return typeof Q == "string" && Q.indexOf(".") != -1 && parseFloat(Q) === 1;
      }
      function $(Q) {
        return typeof Q == "string" && Q.indexOf("%") != -1;
      }
      function G(Q) {
        return Q.length == 1 ? "0" + Q : "" + Q;
      }
      function z(Q) {
        return Q <= 1 && (Q = Q * 100 + "%"), Q;
      }
      function dA(Q) {
        return e.round(parseFloat(Q) * 255).toString(16);
      }
      function iA(Q) {
        return rA(Q) / 255;
      }
      var eA = (function() {
        var Q = "[-\\+]?\\d+%?", E = "[-\\+]?\\d*\\.\\d+%?", b = "(?:" + E + ")|(?:" + Q + ")", _ = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?", W = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(b),
          rgb: new RegExp("rgb" + _),
          rgba: new RegExp("rgba" + W),
          hsl: new RegExp("hsl" + _),
          hsla: new RegExp("hsla" + W),
          hsv: new RegExp("hsv" + _),
          hsva: new RegExp("hsva" + W),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function J(Q) {
        return !!eA.CSS_UNIT.exec(Q);
      }
      function oA(Q) {
        Q = Q.replace(t, "").replace(r, "").toLowerCase();
        var E = false;
        if (M[Q]) Q = M[Q], E = true;
        else if (Q == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var b;
        return (b = eA.rgb.exec(Q)) ? {
          r: b[1],
          g: b[2],
          b: b[3]
        } : (b = eA.rgba.exec(Q)) ? {
          r: b[1],
          g: b[2],
          b: b[3],
          a: b[4]
        } : (b = eA.hsl.exec(Q)) ? {
          h: b[1],
          s: b[2],
          l: b[3]
        } : (b = eA.hsla.exec(Q)) ? {
          h: b[1],
          s: b[2],
          l: b[3],
          a: b[4]
        } : (b = eA.hsv.exec(Q)) ? {
          h: b[1],
          s: b[2],
          v: b[3]
        } : (b = eA.hsva.exec(Q)) ? {
          h: b[1],
          s: b[2],
          v: b[3],
          a: b[4]
        } : (b = eA.hex8.exec(Q)) ? {
          r: rA(b[1]),
          g: rA(b[2]),
          b: rA(b[3]),
          a: iA(b[4]),
          format: E ? "name" : "hex8"
        } : (b = eA.hex6.exec(Q)) ? {
          r: rA(b[1]),
          g: rA(b[2]),
          b: rA(b[3]),
          format: E ? "name" : "hex"
        } : (b = eA.hex4.exec(Q)) ? {
          r: rA(b[1] + "" + b[1]),
          g: rA(b[2] + "" + b[2]),
          b: rA(b[3] + "" + b[3]),
          a: iA(b[4] + "" + b[4]),
          format: E ? "name" : "hex8"
        } : (b = eA.hex3.exec(Q)) ? {
          r: rA(b[1] + "" + b[1]),
          g: rA(b[2] + "" + b[2]),
          b: rA(b[3] + "" + b[3]),
          format: E ? "name" : "hex"
        } : false;
      }
      function aA(Q) {
        var E, b;
        return Q = Q || {
          level: "AA",
          size: "small"
        }, E = (Q.level || "AA").toUpperCase(), b = (Q.size || "small").toLowerCase(), E !== "AA" && E !== "AAA" && (E = "AA"), b !== "small" && b !== "large" && (b = "small"), {
          level: E,
          size: b
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(gd);
  var Bm = gd.exports;
  const re = Ya(Bm);
  var Ar = function() {
    return Ar = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ar.apply(this, arguments);
  }, hm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, wm = function(A) {
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
      var $ = new Error(A + ": " + R);
      throw $;
    }
    function r(R) {
      A = A.substr(R);
    }
    function n(R) {
      var $ = /^[\n\r\t\s]+/.exec(A);
      $ && r($[0].length);
      var G = R.exec(A);
      return G && r(G[0].length), G;
    }
    function o(R) {
      var $ = R(), G = [];
      if ($) for (G.push($); n(e.comma); ) $ = R(), $ ? G.push($) : t("One extra comma");
      return G;
    }
    function i(R, $, G) {
      var z = n($);
      if (z) return {
        type: R,
        value: z[G]
      };
    }
    function a() {
      var R = i("hex", e.hexColor, 1);
      if (R == null ? void 0 : R.value) {
        var $ = re(R == null ? void 0 : R.value).toRgb(), G = $.r, z = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(G, ", ").concat(z, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    var s = function(R) {
      var $ = Ut(R == null ? void 0 : R[0]);
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(o(j), ")")
      };
    };
    function l(R, $) {
      var G = n(R);
      if (G) {
        n(e.startCall) || t("Missing (");
        var z = $(G);
        return n(e.endCall) || t("Missing )"), z;
      }
    }
    function c() {
      return l(e.hslColor, nA);
    }
    function d() {
      return l(e.rgbaColor, s);
    }
    function u() {
      return l(e.rgbColor, X);
    }
    function f() {
      var R = i("literal", e.literalColor, 0);
      if (R == null ? void 0 : R.value) {
        var $ = re(R == null ? void 0 : R.value).toRgb(), G = $.r, z = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(G, ", ").concat(z, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    function p() {
      return l(e.hsvColor, P);
    }
    function B() {
      return a() || c() || d() || u() || f() || p();
    }
    function y() {
      var R, $ = B();
      return $ || t("Expected color definition"), $.left = parseInt((R = AA()) === null || R === void 0 ? void 0 : R.value), $;
    }
    function m(R, $, G) {
      return l($, function() {
        var z = G();
        return z && (n(e.comma) || t("Missing comma before color stops")), {
          type: R,
          orientation: z,
          colorStops: o(y)
        };
      });
    }
    function F() {
      return w() || x();
    }
    function C() {
      return m("linear-gradient", e.linearGradient, F) || m("repeating-linear-gradient", e.repeatingLinearGradient, F) || m("radial-gradient", e.radialGradient, I) || m("repeating-radial-gradient", e.repeatingRadialGradient, I);
    }
    function v() {
      return o(C);
    }
    function U() {
      var R, $ = v();
      A.length > 0 && t("Invalid input not EOF");
      var G = $[0], z = (R = G == null ? void 0 : G.colorStops) === null || R === void 0 ? void 0 : R.filter(function(iA) {
        return Ut(iA.value);
      }).length, dA = function() {
        if (z > 0) return G;
        var iA = function(eA, J) {
          return J === 0 ? di(eA) : sn(eA);
        };
        return Ar(Ar({}, G), {
          colorStops: G.colorStops.map(function(eA, J) {
            return Ar(Ar({}, eA), {
              value: iA(eA, J)
            });
          })
        });
      };
      return dA();
    }
    function w() {
      return i("directional", e.sideOrCorner, 1);
    }
    function x() {
      return i("angular", e.angleValue, 1);
    }
    function I() {
      var R, $ = H(), G;
      return $ && (R = [], R.push($), G = A, n(e.comma) && ($ = H(), $ ? R.push($) : A = G)), R;
    }
    function H() {
      var R = T() || D();
      if (R) R.at = V();
      else {
        var $ = K();
        if ($) {
          R = $;
          var G = V();
          G && (R.at = G);
        } else {
          var z = O();
          z && (R = {
            type: "default-radial",
            at: z
          });
        }
      }
      return R;
    }
    function g() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function T() {
      var R = i("shape", /^(circle)/i, 0);
      return R && (R.style = g() || K()), R;
    }
    function D() {
      var R = i("shape", /^(ellipse)/i, 0);
      return R && (R.style = AA() || K()), R;
    }
    function K() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function V() {
      if (i("position", /^at/, 0)) {
        var R = O();
        return R || t("Missing positioning value"), R;
      }
    }
    function O() {
      var R = M();
      if (R.x || R.y) return {
        type: "position",
        value: R
      };
    }
    function M() {
      return {
        x: AA(),
        y: AA()
      };
    }
    function j() {
      return n(e.number)[1];
    }
    var nA = function(R) {
      var $ = Ut(R == null ? void 0 : R[0]), G = o(j), z = re({
        h: G[0],
        s: G[1],
        l: G[2],
        a: G[3] || 1
      }).toRgb(), dA = z.r, iA = z.g, eA = z.b, J = z.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(eA, ", ").concat(J, ")")
      };
    }, P = function(R) {
      var $ = Ut(R == null ? void 0 : R[0]), G = o(j), z = re({
        h: G[0],
        s: G[1],
        v: G[2],
        a: G[3] || 1
      }).toRgb(), dA = z.r, iA = z.g, eA = z.b, J = z.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(eA, ", ").concat(J, ")")
      };
    }, X = function(R) {
      var $ = Ut(R == null ? void 0 : R[0]), G = n(e.spacedRgbColor), z = G || hm([
        null
      ], o(j), true), dA = z[1], iA = z[2], eA = z[3], J = z[4], oA = J === void 0 ? 1 : J;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(eA, ", ").concat(oA, ")")
      };
    };
    function AA() {
      return i("%", e.percentageValue, 1) || rA() || g();
    }
    function rA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, sn = function(A) {
    return A.value.toLowerCase();
  }, di = function(A) {
    return A.value.toUpperCase();
  }, mm = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = wm(o);
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
  }, go = function() {
    return go = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, go.apply(this, arguments);
  }, pd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function lr(A, e) {
    var t = pd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = sr(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function Cm(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var vm = function(A) {
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
  function Qm(A, e) {
    var t = pd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = vm(A), s = a.clientX, l = a.clientY, c = function() {
      var u = s - r - e / 2;
      return sr(u, -9, o - 10);
    }, d = function() {
      var u = l - n - e / 2;
      return sr(u, -9, i - 10);
    };
    return [
      c(),
      d()
    ];
  }
  var Ut = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, Bd = function(A) {
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
  }, ym = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(u, f) {
        return (u == null ? void 0 : u.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(u) {
        return "".concat(u == null ? void 0 : u.value, " ").concat(u == null ? void 0 : u.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = Bd((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var d = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return d;
    }
  }, bm = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return go(go({}, o), {
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
  }, Fm = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return Bd(r);
  }, Um = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = Fm(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
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
  }, Em = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, hd = h.createContext(null);
  function xm(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, d = A.showHexAlpha, u = A.squareHeight, f = A.passedConfig, p = A.defaultStyles, B = A.pickerIdSuffix, y = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : Cn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : Cn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : Cn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : Cn.defaultGradient
    }, m = mm(o, y.defaultColor, y.defaultGradient), F = Um(o), C = F.degrees, v = F.degreeStr, U = F.isGradient, w = F.gradientType, x = bm(m, y.defaultGradient), I = x.currentColor, H = x.selectedColor, g = x.currentLeft, T = h.useState("rgb"), D = T[0], K = T[1], V = h.useState({}), O = V[0], M = V[1], j = re(I), nA = j.toRgb(), P = j.toHsv(), X = h.useState(ce(ce({}, nA), P)), AA = X[0], rA = X[1];
    h.useEffect(function() {
      (P == null ? void 0 : P.s) === 0 ? rA(ce(ce(ce({}, nA), P), {
        h: AA == null ? void 0 : AA.h
      })) : rA(ce(ce({}, nA), P));
    }, [
      I
    ]);
    var R = function(iA) {
      var eA = iA.sort(function(aA, Q) {
        return aA.left - Q.left;
      }), J = eA == null ? void 0 : eA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), oA = "".concat(w, "(").concat(v, ", ").concat(J.join(", "), ")");
      M(ce(ce({}, O), {
        gradient: oA
      })), a(oA);
    }, $ = function(iA, eA) {
      var J = m == null ? void 0 : m.filter(function(aA) {
        return !Ut(aA.value);
      }), oA = Em([
        {
          value: iA.toUpperCase(),
          left: eA ?? g
        }
      ], J, true);
      R(oA);
    }, G = function(iA) {
      U ? $(iA) : (M(ce(ce({}, O), {
        color: iA
      })), a(iA));
    }, z = function() {
      if ((m == null ? void 0 : m.length) > 2) {
        var iA = m == null ? void 0 : m.map(function(J, oA) {
          return ce(ce({}, J), {
            value: oA === H - 1 ? di(J) : sn(J)
          });
        }), eA = iA == null ? void 0 : iA.filter(function(J, oA) {
          return oA !== H;
        });
        R(eA);
      }
    }, dA = {
      hc: AA,
      setHc: rA,
      value: o,
      colors: m,
      config: y,
      degrees: C,
      onChange: a,
      previous: O,
      inputType: D,
      tinyColor: j,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: g,
      deletePoint: z,
      showHexAlpha: d,
      squareHeight: u,
      setInputType: K,
      gradientType: w,
      handleChange: G,
      currentColor: I,
      selectedColor: H,
      defaultStyles: p,
      handleGradient: $,
      pickerIdSuffix: B,
      createGradientStr: R
    };
    return S.createElement(hd.Provider, {
      value: dA
    }, i);
  }
  function yA() {
    var A = h.useContext(hd);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var Cn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, Sm = function(A, e) {
    h.useEffect(function() {
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
  }, Im = function(A, e, t, r) {
    h.useEffect(function() {
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
  }, Hm = function(A, e, t, r) {
    h.useEffect(function() {
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
  }, Tm = function(A, e, t, r) {
    h.useEffect(function() {
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
  }, po = function() {
    return po = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, po.apply(this, arguments);
  }, Lm = function() {
    var A = h.useRef(null), e = yA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = h.useState(false), l = s[0], c = s[1], d = t.barSize;
    Sm(A, n);
    var u = function() {
      c(false);
    }, f = function() {
      c(true);
    }, p = function(m) {
      var F = lr(m, d) * 3.6, C = re({
        h: F,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = C.toRgb(), U = v.r, w = v.g, x = v.b;
      r("rgba(".concat(U, ", ").concat(w, ", ").concat(x, ", ").concat(o.a, ")")), i(po(po({}, o), {
        h: F
      }));
    }, B = function(m) {
      l && p(m);
    }, y = function(m) {
      l || p(m);
    };
    return h.useEffect(function() {
      var m = function() {
        u();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), S.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(m) {
        return B(m);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, S.createElement("div", {
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
    }), S.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(m) {
        return y(m);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function Rm(A, e, t) {
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
  var km = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, Km = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Ee = function() {
    return Ee = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ee.apply(this, arguments);
  }, fe = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = h.useState(t), c = l[0], d = l[1], u = i ? "25%" : "20%";
    h.useEffect(function() {
      d(t);
    }, [
      t
    ]);
    var f = function(p) {
      var B = sr(parseFloat(p.target.value), 0, o);
      d(B), r(B);
    };
    return S.createElement("div", {
      style: {
        width: u,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, S.createElement("input", {
      value: c,
      onChange: function(p) {
        return f(p);
      },
      style: Ee({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), S.createElement("div", {
      style: Ee({}, a.rbgcpInputLabel)
    }, e));
  }, Om = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = h.useState(""), s = a[0], l = a[1], c = t.toHex(), d = h.useState(c), u = d[0], f = d[1];
    h.useEffect(function() {
      s !== "hex" && f(c);
    }, [
      t,
      s,
      c
    ]);
    var p = function() {
      l("hex");
    }, B = function() {
      l("");
    }, y = function(v) {
      var U = re(v.target.value);
      if (f(v.target.value), U.isValid()) {
        var w = U.toRgb(), x = w.r, I = w.g, H = w.b, g = "rgba(".concat(x, ", ").concat(I, ", ").concat(H, ", ").concat(e, ")");
        n(g);
      }
    }, m = r ? "".concat(u).concat(Km(e)) : u, F = r ? "HEXA" : "HEX", C = r ? 88 : 76;
    return S.createElement("div", {
      style: {
        width: C,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, S.createElement("input", {
      onBlur: B,
      onFocus: p,
      onChange: function(v) {
        return y(v);
      },
      value: m == null ? void 0 : m.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Ee(Ee({}, o.rbgcpInput), o.rbgcpHexInput)
    }), S.createElement("div", {
      style: Ee({}, o.rbgcpInputLabel)
    }, F));
  }, Dm = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(fe, {
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
    }), S.createElement(fe, {
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
    }), S.createElement(fe, {
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
  }, Mm = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, d = function(f, p, B) {
      var y = re({
        h: f,
        s: p,
        l: B
      }).toRgb(), m = y.r, F = y.g, C = y.b;
      o("rgba(".concat(m, ", ").concat(F, ", ").concat(C, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ee(Ee({}, e), {
        h: f
      }));
    }, u = function(f) {
      var p = re(f).toRgb(), B = p.r, y = p.g, m = p.b;
      o("rgba(".concat(B, ", ").concat(y, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(fe, {
      label: "H",
      max: 360,
      value: Ne(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d(f, l, c);
      }
    }), S.createElement(fe, {
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
    }), S.createElement(fe, {
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
  }, Pm = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, d) {
      var u = re({
        h: l,
        s: c,
        v: d
      }).toRgb(), f = u.r, p = u.g, B = u.b;
      n("rgba(".concat(f, ", ").concat(p, ", ").concat(B, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ee(Ee({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = re(l).toRgb(), d = c.r, u = c.g, f = c.b;
      n("rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(fe, {
      label: "H",
      max: 360,
      value: Ne(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), S.createElement(fe, {
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
    }), S.createElement(fe, {
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
  }, _m = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = Rm(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, d = function(u) {
      var f = km(u), p = f.r, B = f.g, y = f.b;
      r("rgba(".concat(p, ", ").concat(B, ", ").concat(y, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(fe, {
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
    }), S.createElement(fe, {
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
    }), S.createElement(fe, {
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
    }), S.createElement(fe, {
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
  }, Nm = function() {
    var A = yA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return S.createElement("div", {
      style: Ee({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && S.createElement(Om, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && S.createElement(Mm, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && S.createElement(Dm, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && S.createElement(Pm, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && S.createElement(_m, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && S.createElement(fe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, Gm = function(A, e, t, r) {
    h.useEffect(function() {
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
  }, wd = "Expected a function", Wl = NaN, Vm = "[object Symbol]", $m = /^\s+|\s+$/g, Wm = /^[-+]0x[0-9a-f]+$/i, jm = /^0b[01]+$/i, Xm = /^0o[0-7]+$/i, Jm = parseInt, zm = typeof un == "object" && un && un.Object === Object && un, Ym = typeof self == "object" && self && self.Object === Object && self, Zm = zm || Ym || Function("return this")(), qm = Object.prototype, AC = qm.toString, eC = Math.max, tC = Math.min, Li = function() {
    return Zm.Date.now();
  };
  function rC(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, d = false, u = true;
    if (typeof A != "function") throw new TypeError(wd);
    e = jl(e) || 0, Bo(t) && (c = !!t.leading, d = "maxWait" in t, o = d ? eC(jl(t.maxWait) || 0, e) : o, u = "trailing" in t ? !!t.trailing : u);
    function f(w) {
      var x = r, I = n;
      return r = n = void 0, l = w, i = A.apply(I, x), i;
    }
    function p(w) {
      return l = w, a = setTimeout(m, e), c ? f(w) : i;
    }
    function B(w) {
      var x = w - s, I = w - l, H = e - x;
      return d ? tC(H, o - I) : H;
    }
    function y(w) {
      var x = w - s, I = w - l;
      return s === void 0 || x >= e || x < 0 || d && I >= o;
    }
    function m() {
      var w = Li();
      if (y(w)) return F(w);
      a = setTimeout(m, B(w));
    }
    function F(w) {
      return a = void 0, u && r ? f(w) : (r = n = void 0, i);
    }
    function C() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : F(Li());
    }
    function U() {
      var w = Li(), x = y(w);
      if (r = arguments, n = this, s = w, x) {
        if (a === void 0) return p(s);
        if (d) return a = setTimeout(m, e), f(s);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return U.cancel = C, U.flush = v, U;
  }
  function nC(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(wd);
    return Bo(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), rC(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function Bo(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function oC(A) {
    return !!A && typeof A == "object";
  }
  function iC(A) {
    return typeof A == "symbol" || oC(A) && AC.call(A) == Vm;
  }
  function jl(A) {
    if (typeof A == "number") return A;
    if (iC(A)) return Wl;
    if (Bo(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = Bo(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace($m, "");
    var t = jm.test(A);
    return t || Xm.test(A) ? Jm(A.slice(2), t ? 2 : 8) : Wm.test(A) ? Wl : +A;
  }
  var aC = nC;
  const sC = Ya(aC);
  var Et = function() {
    return Et = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Et.apply(this, arguments);
  }, lC = function() {
    var A, e, t = yA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, d = h.useState(false), u = d[0], f = d[1], p = h.useRef(null), B = Cm(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), y = B[0], m = B[1], F = h.useState({
      x: y,
      y: m
    }), C = F[0], v = F[1];
    Gm(p, r == null ? void 0 : r.h, o, i), h.useEffect(function() {
      u || v({
        x: (r == null ? void 0 : r.v) === 0 ? C.x : y,
        y: m
      });
    }, [
      y,
      m
    ]);
    var U = function(T) {
      var D = sC(function() {
        var K = Qm(T, c), V = K[0], O = K[1];
        if (V && O) {
          var M = Math.min(V + c / 2, o - 1), j = Math.min(O + c / 2, i - 1), nA = M / o * 100, P = 100 - j / i * 100;
          v({
            x: P === 0 ? C == null ? void 0 : C.x : V,
            y: O
          });
          var X = re("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(nA, "%, ").concat(P, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(X.toRgbString());
        }
      }, 250);
      D();
    }, w = function() {
      f(false);
    }, x = function(T) {
      u && U(T);
    }, I = function(T) {
      u || U(T);
    }, H = function() {
      f(true);
    }, g = function(T) {
      f(true), U(T);
    };
    return h.useEffect(function() {
      var T = function() {
        w();
      };
      return window.addEventListener("mouseup", T), function() {
        window.removeEventListener("mouseup", T);
      };
    }, []), S.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, S.createElement("div", {
      onMouseUp: w,
      onTouchEnd: w,
      onMouseDown: g,
      onTouchStart: g,
      onMouseMove: function(T) {
        return x(T);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, S.createElement("div", {
      style: Et(Et(Et({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = C == null ? void 0 : C.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = C == null ? void 0 : C.y) !== null && e !== void 0 ? e : 0, "px)")
      }), u ? {
        transition: ""
      } : {}),
      onMouseDown: H,
      id: "rbgcp-square-handle".concat(l)
    }), S.createElement("div", {
      style: Et(Et({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(T) {
        return I(T);
      }
    }, S.createElement("canvas", {
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
  }, cC = function() {
    var A = yA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = h.useState(false), l = s[0], c = s[1], d = r.r, u = r.g, f = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(d, ",").concat(u, ",").concat(f, ",.5) 100%)"), B = e.barSize, y = function() {
      c(false);
    }, m = function() {
      c(true);
    }, F = function(w) {
      var x = lr(w, B) / 100, I = "rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(x, ")");
      o(I);
    }, C = function(w) {
      l && F(w);
    }, v = function(w) {
      l || F(w);
    }, U = n - 18;
    return h.useEffect(function() {
      var w = function() {
        y();
      };
      return window.addEventListener("mouseup", w), function() {
        window.removeEventListener("mouseup", w);
      };
    }, []), S.createElement("div", {
      onMouseDown: m,
      onMouseMove: function(w) {
        return C(w);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, S.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: lt(lt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), S.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: lt(lt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), S.createElement("div", {
      style: lt(lt({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(w) {
        return v(w);
      }
    }));
  }, uC = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, dC = [
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
  ], fC = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = yA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : dC;
    }, d = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, u = function(f) {
      if (!f || i) return "";
      var p = f == null ? void 0 : f.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return S.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, S.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: u(n)
      },
      id: "rbgcp-preview".concat(l)
    }), S.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, p) {
      return S.createElement("div", {
        key: "".concat(f, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, S.createElement("div", {
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
  }, tA = function() {
    return tA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, tA.apply(this, arguments);
  }, gC = function() {
    var A = yA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, S.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, pC = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, S.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, BC = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, S.createElement("circle", {
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), S.createElement("circle", {
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, hC = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, S.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), S.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), S.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), S.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), S.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), S.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, wC = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, mC = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), S.createElement("path", {
      style: tA(tA(tA(tA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, CC = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, S.createElement("polyline", {
      strokeLinecap: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), S.createElement("polyline", {
      strokeLinecap: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, vC = function() {
    var A = yA().defaultStyles;
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, QC = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = h.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = h.useState(!n.current.parentElement)[0];
    return h.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), Ss.createPortal(t, n.current);
  };
  const yC = h.memo(QC);
  var Ea = function(A, e) {
    return Ea = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Ea(A, e);
  };
  function Le(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Ea(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var xa = function() {
    return xa = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, xa.apply(this, arguments);
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
  function vn(A, e, t) {
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
  })(), fi = function(A, e) {
    return nt.fromClientRect(A, e.getBoundingClientRect());
  }, bC = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new nt(0, 0, r, n);
  }, gi = function(A) {
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
  }, Xl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", FC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Qn = 0; Qn < Xl.length; Qn++) FC[Xl.charCodeAt(Qn)] = Qn;
  var Jl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var yn = 0; yn < Jl.length; yn++) xr[Jl.charCodeAt(yn)] = yn;
  var UC = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = xr[A.charCodeAt(r)], i = xr[A.charCodeAt(r + 1)], a = xr[A.charCodeAt(r + 2)], s = xr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, EC = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, xC = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Rt = 5, Ms = 11, Ri = 2, SC = Ms - Rt, md = 65536 >> Rt, IC = 1 << Rt, ki = IC - 1, HC = 1024 >> Rt, TC = md + HC, LC = TC, RC = 32, kC = LC + RC, KC = 65536 >> Ms, OC = 1 << SC, DC = OC - 1, zl = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, MC = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, PC = function(A, e) {
    var t = UC(A), r = Array.isArray(t) ? xC(t) : new Uint32Array(t), n = Array.isArray(t) ? EC(t) : new Uint16Array(t), o = 24, i = zl(n, o / 2, r[4] / 2), a = r[5] === 2 ? zl(n, (o + r[4]) / 2) : MC(r, Math.ceil((o + r[4]) / 4));
    return new _C(r[0], r[1], r[2], r[3], i, a);
  }, _C = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Rt], t = (t << Ri) + (e & ki), this.data[t];
        if (e <= 65535) return t = this.index[md + (e - 55296 >> Rt)], t = (t << Ri) + (e & ki), this.data[t];
        if (e < this.highStart) return t = kC - KC + (e >> Ms), t = this.index[t], t += e >> Rt & DC, t = this.index[t], t = (t << Ri) + (e & ki), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Yl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", NC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var bn = 0; bn < Yl.length; bn++) NC[Yl.charCodeAt(bn)] = bn;
  var GC = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Zl = 50, VC = 1, Cd = 2, vd = 3, $C = 4, WC = 5, ql = 7, Qd = 8, Ac = 9, ut = 10, Sa = 11, ec = 12, Ia = 13, jC = 14, Sr = 15, Ha = 16, Fn = 17, vr = 18, XC = 19, tc = 20, Ta = 21, Qr = 22, Ki = 23, Vt = 24, Be = 25, Ir = 26, Hr = 27, $t = 28, JC = 29, xt = 30, zC = 31, Un = 32, En = 33, La = 34, Ra = 35, ka = 36, Xr = 37, Ka = 38, Ao = 39, eo = 40, Oi = 41, yd = 42, YC = 43, ZC = [
    9001,
    65288
  ], bd = "!", BA = "\xD7", xn = "\xF7", Oa = PC(GC), Ye = [
    xt,
    ka
  ], Da = [
    VC,
    Cd,
    vd,
    WC
  ], Fd = [
    ut,
    Qd
  ], rc = [
    Hr,
    Ir
  ], qC = Da.concat(Fd), nc = [
    Ka,
    Ao,
    eo,
    La,
    Ra
  ], Av = [
    Sr,
    Ia
  ], ev = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Oa.get(o);
      if (a > Zl ? (n.push(true), a -= Zl) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ha);
      if (a === $C || a === Sa) {
        if (i === 0) return r.push(i), t.push(xt);
        var s = t[i - 1];
        return qC.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(xt));
      }
      if (r.push(i), a === zC) return t.push(e === "strict" ? Ta : Xr);
      if (a === yd || a === JC) return t.push(xt);
      if (a === YC) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(Xr) : t.push(xt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Di = function(A, e, t, r) {
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
  }, tv = function(A, e, t, r, n) {
    if (t[r] === 0) return BA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return BA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === Cd && c === vd) return BA;
    if (Da.indexOf(s) !== -1) return bd;
    if (Da.indexOf(c) !== -1 || Fd.indexOf(c) !== -1) return BA;
    if (oc(o, e) === Qd) return xn;
    if (Oa.get(A[o]) === Sa || (s === Un || s === En) && Oa.get(A[a]) === Sa || s === ql || c === ql || s === Ac || [
      ut,
      Ia,
      Sr
    ].indexOf(s) === -1 && c === Ac || [
      Fn,
      vr,
      XC,
      Vt,
      $t
    ].indexOf(c) !== -1 || oc(o, e) === Qr || Di(Ki, Qr, o, e) || Di([
      Fn,
      vr
    ], Ta, o, e) || Di(ec, ec, o, e)) return BA;
    if (s === ut) return xn;
    if (s === Ki || c === Ki) return BA;
    if (c === Ha || s === Ha) return xn;
    if ([
      Ia,
      Sr,
      Ta
    ].indexOf(c) !== -1 || s === jC || l === ka && Av.indexOf(s) !== -1 || s === $t && c === ka || c === tc || Ye.indexOf(c) !== -1 && s === Be || Ye.indexOf(s) !== -1 && c === Be || s === Hr && [
      Xr,
      Un,
      En
    ].indexOf(c) !== -1 || [
      Xr,
      Un,
      En
    ].indexOf(s) !== -1 && c === Ir || Ye.indexOf(s) !== -1 && rc.indexOf(c) !== -1 || rc.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || [
      Hr,
      Ir
    ].indexOf(s) !== -1 && (c === Be || [
      Qr,
      Sr
    ].indexOf(c) !== -1 && e[a + 1] === Be) || [
      Qr,
      Sr
    ].indexOf(s) !== -1 && c === Be || s === Be && [
      Be,
      $t,
      Vt
    ].indexOf(c) !== -1) return BA;
    if ([
      Be,
      $t,
      Vt,
      Fn,
      vr
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
      Hr,
      Ir
    ].indexOf(c) !== -1) for (var d = [
      Fn,
      vr
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
      Ao,
      La,
      Ra
    ].indexOf(c) !== -1 || [
      Ao,
      La
    ].indexOf(s) !== -1 && [
      Ao,
      eo
    ].indexOf(c) !== -1 || [
      eo,
      Ra
    ].indexOf(s) !== -1 && c === eo || nc.indexOf(s) !== -1 && [
      tc,
      Ir
    ].indexOf(c) !== -1 || nc.indexOf(c) !== -1 && s === Hr || Ye.indexOf(s) !== -1 && Ye.indexOf(c) !== -1 || s === Vt && Ye.indexOf(c) !== -1 || Ye.concat(Be).indexOf(s) !== -1 && c === Qr && ZC.indexOf(A[a]) === -1 || Ye.concat(Be).indexOf(c) !== -1 && s === vr) return BA;
    if (s === Oi && c === Oi) {
      for (var f = t[o], p = 1; f > 0 && (f--, e[f] === Oi); ) p++;
      if (p % 2 !== 0) return BA;
    }
    return s === Un && c === En ? BA : xn;
  }, rv = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = ev(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Be,
        xt,
        yd
      ].indexOf(a) !== -1 ? Xr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, nv = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === bd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return NA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), ov = function(A, e) {
    var t = gi(A), r = rv(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = BA; l < a && (c = tv(t, o, n, ++l, i)) === BA; ) ;
        if (c !== BA || l === a) {
          var d = new nv(t, c, s, l);
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
  }, iv = 1, av = 2, ln = 4, ic = 8, ho = 10, ac = 47, Dr = 92, sv = 9, lv = 32, Sn = 34, yr = 61, cv = 35, uv = 36, dv = 37, In = 39, Hn = 40, br = 41, fv = 95, de = 45, gv = 33, pv = 60, Bv = 62, hv = 64, wv = 91, mv = 93, Cv = 61, vv = 123, Tn = 63, Qv = 125, sc = 124, yv = 126, bv = 128, lc = 65533, Mi = 42, Tt = 43, Fv = 44, Uv = 58, Ev = 59, Jr = 46, xv = 0, Sv = 8, Iv = 11, Hv = 14, Tv = 31, Lv = 127, Ke = -1, Ud = 48, Ed = 97, xd = 101, Rv = 102, kv = 117, Kv = 122, Sd = 65, Id = 69, Hd = 70, Ov = 85, Dv = 90, se = function(A) {
    return A >= Ud && A <= 57;
  }, Mv = function(A) {
    return A >= 55296 && A <= 57343;
  }, Wt = function(A) {
    return se(A) || A >= Sd && A <= Hd || A >= Ed && A <= Rv;
  }, Pv = function(A) {
    return A >= Ed && A <= Kv;
  }, _v = function(A) {
    return A >= Sd && A <= Dv;
  }, Nv = function(A) {
    return Pv(A) || _v(A);
  }, Gv = function(A) {
    return A >= bv;
  }, Ln = function(A) {
    return A === ho || A === sv || A === lv;
  }, wo = function(A) {
    return Nv(A) || Gv(A) || A === fv;
  }, cc = function(A) {
    return wo(A) || se(A) || A === de;
  }, Vv = function(A) {
    return A >= xv && A <= Sv || A === Iv || A >= Hv && A <= Tv || A === Lv;
  }, ct = function(A, e) {
    return A !== Dr ? false : e !== ho;
  }, Rn = function(A, e, t) {
    return A === de ? wo(e) || ct(e, t) : wo(A) ? true : !!(A === Dr && ct(A, e));
  }, Pi = function(A, e, t) {
    return A === Tt || A === de ? se(e) ? true : e === Jr && se(t) : se(A === Jr ? e : A);
  }, $v = function(A) {
    var e = 0, t = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (t = -1), e++);
    for (var r = []; se(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(NA.apply(void 0, r), 10) : 0;
    A[e] === Jr && e++;
    for (var o = []; se(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(NA.apply(void 0, o), 10) : 0;
    (A[e] === Id || A[e] === xd) && e++;
    var s = 1;
    (A[e] === Tt || A[e] === de) && (A[e] === de && (s = -1), e++);
    for (var l = []; se(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(NA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, Wv = {
    type: 2
  }, jv = {
    type: 3
  }, Xv = {
    type: 4
  }, Jv = {
    type: 13
  }, zv = {
    type: 8
  }, Yv = {
    type: 21
  }, Zv = {
    type: 9
  }, qv = {
    type: 10
  }, AQ = {
    type: 11
  }, eQ = {
    type: 12
  }, tQ = {
    type: 14
  }, kn = {
    type: 23
  }, rQ = {
    type: 1
  }, nQ = {
    type: 25
  }, oQ = {
    type: 24
  }, iQ = {
    type: 26
  }, aQ = {
    type: 27
  }, sQ = {
    type: 28
  }, lQ = {
    type: 29
  }, cQ = {
    type: 31
  }, Ma = {
    type: 32
  }, Td = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(gi(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Ma; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Sn:
          return this.consumeStringToken(Sn);
        case cv:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (cc(t) || ct(r, n)) {
            var o = Rn(t, r, n) ? av : iv, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case uv:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), Jv;
          break;
        case In:
          return this.consumeStringToken(In);
        case Hn:
          return Wv;
        case br:
          return jv;
        case Mi:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), tQ;
          break;
        case Tt:
          if (Pi(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Fv:
          return Xv;
        case de:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Pi(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Rn(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === de && l === Bv) return this.consumeCodePoint(), this.consumeCodePoint(), oQ;
          break;
        case Jr:
          if (Pi(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case ac:
          if (this.peekCodePoint(0) === Mi) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Mi && (c = this.consumeCodePoint(), c === ac)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case Uv:
          return iQ;
        case Ev:
          return aQ;
        case pv:
          if (this.peekCodePoint(0) === gv && this.peekCodePoint(1) === de && this.peekCodePoint(2) === de) return this.consumeCodePoint(), this.consumeCodePoint(), nQ;
          break;
        case hv:
          var d = this.peekCodePoint(0), u = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (Rn(d, u, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case wv:
          return sQ;
        case Dr:
          if (ct(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case mv:
          return lQ;
        case Cv:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), zv;
          break;
        case vv:
          return AQ;
        case Qv:
          return eQ;
        case kv:
        case Ov:
          var p = this.peekCodePoint(0), B = this.peekCodePoint(1);
          return p === Tt && (Wt(B) || B === Tn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case sc:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), Zv;
          if (this.peekCodePoint(0) === sc) return this.consumeCodePoint(), Yv;
          break;
        case yv:
          if (this.peekCodePoint(0) === yr) return this.consumeCodePoint(), qv;
          break;
        case Ke:
          return Ma;
      }
      return Ln(e) ? (this.consumeWhiteSpace(), cQ) : se(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : wo(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
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
      for (var r = false; t === Tn && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Tn ? Ud : s;
        })), 16), o = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Tn ? Hd : s;
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Hn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Hn ? (this.consumeCodePoint(), {
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
      if (t === In || t === Sn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === br) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), kn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === br) return {
          type: 22,
          value: NA.apply(void 0, e)
        };
        if (Ln(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === br ? (this.consumeCodePoint(), {
          type: 22,
          value: NA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), kn);
        if (n === Sn || n === In || n === Hn || Vv(n)) return this.consumeBadUrlRemnants(), kn;
        if (n === Dr) if (ct(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), kn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Ln(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === br || e === Ke) return;
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
        if (n === ho) return this._value.splice(0, r), rQ;
        if (n === Dr) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === ho ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ct(n, o) && (t += this.consumeStringSlice(r), t += NA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = ln, r = this.peekCodePoint(0);
      for ((r === Tt || r === de) && e.push(this.consumeCodePoint()); se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Jr && se(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ic; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Id || r === xd) && ((n === Tt || n === de) && se(o) || se(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ic; se(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        $v(e),
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
      return n === dv ? (this.consumeCodePoint(), {
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
        Ln(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Mv(r) || r > 1114111 ? lc : r;
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
  })(), Ld = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Td();
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
        if (r.type === 32 || dQ(r, e)) return t;
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
  })(), cn = function(A) {
    return A.type === 15;
  }, gr = function(A) {
    return A.type === 17;
  }, QA = function(A) {
    return A.type === 20;
  }, uQ = function(A) {
    return A.type === 0;
  }, Pa = function(A, e) {
    return QA(A) && A.value === e;
  }, Rd = function(A) {
    return A.type !== 31;
  }, cr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, je = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, dQ = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Ct = function(A) {
    return A.type === 17 || A.type === 15;
  }, $A = function(A) {
    return A.type === 16 || Ct(A);
  }, kd = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, ne = {
    type: 17,
    number: 0,
    flags: ln
  }, Ps = {
    type: 16,
    number: 50,
    flags: ln
  }, dt = {
    type: 16,
    number: 100,
    flags: ln
  }, Tr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      EA(r, e),
      EA(typeof n < "u" ? n : r, t)
    ];
  }, EA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (cn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Kd = "deg", Od = "grad", Dd = "rad", Md = "turn", pi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Kd:
          return Math.PI * e.number / 180;
        case Od:
          return Math.PI / 200 * e.number;
        case Dd:
          return e.number;
        case Md:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Pd = function(A) {
    return A.type === 15 && (A.unit === Kd || A.unit === Od || A.unit === Dd || A.unit === Md);
  }, _d = function(A) {
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
        return Fe(0);
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
        return Fe(90);
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
        return Fe(180);
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
        return Fe(270);
    }
    return 0;
  }, Fe = function(A) {
    return Math.PI * A / 180;
  }, pt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = fQ[e.name];
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
  }, JA = function(A) {
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
  function _i(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var fc = function(A, e) {
    var t = e.filter(cr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? Fe(r.number) : pi.parse(A, r)) / (Math.PI * 2), s = $A(n) ? n.number / 100 : 0, l = $A(o) ? o.number / 100 : 0, c = typeof i < "u" && $A(i) ? EA(i, 1) : 1;
    if (s === 0) return ft(l * 255, l * 255, l * 255, 1);
    var d = l <= 0.5 ? l * (s + 1) : l + s - l * s, u = l * 2 - d, f = _i(u, d, a + 1 / 3), p = _i(u, d, a), B = _i(u, d, a - 1 / 3);
    return ft(f * 255, p * 255, B * 255, c);
  }, fQ = {
    hsl: fc,
    hsla: fc,
    rgb: dc,
    rgba: dc
  }, Mr = function(A, e) {
    return pt.parse(A, Ld.create(e).parseComponentValue());
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
  }, gQ = {
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
  }, pQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Bi = function(A, e) {
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
        for (var d = i - l, u = n[l - 1], f = (c - u) / (d + 1), p = 1; p <= d; p++) n[l + p - 1] = f * p;
        l = null;
      }
    }
    return A.map(function(B, y) {
      var m = B.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[y] / e), 0)
      };
    });
  }, BQ = function(A, e, t) {
    var r = e / 2, n = t / 2, o = EA(A[0], e) - r, i = n - EA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, hQ = function(A, e, t) {
    var r = typeof A == "number" ? A : BQ(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, Ie = function(A, e) {
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
      var s = a[0], l = a[1], c = Ie(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, wQ = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(Ie(e, t), Ie(e, t - n), Ie(e - r, t), Ie(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = pc(r, n, e, t, true), l = s[0], c = s[1];
          o = Ie(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(Ie(e, t), Ie(e, t - n), Ie(e - r, t), Ie(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), d = pc(r, n, e, t, false), l = d[0], c = d[1];
          o = Ie(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = EA(A.size[0], r), i = A.size.length === 2 ? EA(A.size[1], n) : o), [
      o,
      i
    ];
  }, mQ = function(A, e) {
    var t = Fe(180), r = [];
    return je(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = _d(n);
          return;
        } else if (Pd(i)) {
          t = pi.parse(A, i);
          return;
        }
      }
      var a = Bi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Kn = function(A, e) {
    var t = Fe(180), r = [];
    return je(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = _d(n);
          return;
        } else if (Pd(i)) {
          t = (pi.parse(A, i) + Fe(270)) % Fe(360);
          return;
        }
      }
      var a = Bi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, CQ = function(A, e) {
    var t = Fe(180), r = [], n = 1, o = 0, i = 3, a = [];
    return je(e).forEach(function(s, l) {
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
          var u = c.values.filter(cr);
          if (u.length === 2) {
            var d = pt.parse(A, u[1]), f = u[0];
            gr(f) && r.push({
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
      angle: (t + Fe(180)) % Fe(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, Nd = "closest-side", Gd = "farthest-side", Vd = "closest-corner", $d = "farthest-corner", Wd = "circle", jd = "ellipse", Xd = "cover", Jd = "contain", vQ = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return je(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(d, u) {
          if (l) if (QA(u)) switch (u.value) {
            case "center":
              return o.push(Ps), d;
            case "top":
            case "left":
              return o.push(ne), d;
            case "right":
            case "bottom":
              return o.push(dt), d;
          }
          else ($A(u) || Ct(u)) && o.push(u);
          else if (QA(u)) switch (u.value) {
            case Wd:
              return t = 0, false;
            case jd:
              return t = 1, false;
            case "at":
              return l = true, false;
            case Nd:
              return r = 0, false;
            case Xd:
            case Gd:
              return r = 1, false;
            case Jd:
            case Vd:
              return r = 2, false;
            case $d:
              return r = 3, false;
          }
          else if (Ct(u) || $A(u)) return Array.isArray(r) || (r = []), r.push(u), false;
          return d;
        }, s);
      }
      if (s) {
        var c = Bi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, On = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return je(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, d) {
        if (QA(d)) switch (d.value) {
          case "center":
            return o.push(Ps), false;
          case "top":
          case "left":
            return o.push(ne), false;
          case "right":
          case "bottom":
            return o.push(dt), false;
        }
        else if ($A(d) || Ct(d)) return o.push(d), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, d) {
        if (QA(d)) switch (d.value) {
          case Wd:
            return t = 0, false;
          case jd:
            return t = 1, false;
          case Jd:
          case Nd:
            return r = 0, false;
          case Gd:
            return r = 1, false;
          case Vd:
            return r = 2, false;
          case Xd:
          case $d:
            return r = 3, false;
        }
        else if (Ct(d) || $A(d)) return Array.isArray(r) || (r = []), r.push(d), false;
        return c;
      }, s)), s) {
        var l = Bi(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, QQ = function(A) {
    return A.type === 1;
  }, yQ = function(A) {
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
        var r = zd[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function bQ(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!zd[A.name]);
  }
  var zd = {
    "linear-gradient": mQ,
    "-moz-linear-gradient": Kn,
    "-ms-linear-gradient": Kn,
    "-o-linear-gradient": Kn,
    "-webkit-linear-gradient": Kn,
    "radial-gradient": vQ,
    "-moz-radial-gradient": On,
    "-ms-radial-gradient": On,
    "-o-radial-gradient": On,
    "-webkit-radial-gradient": On,
    "-webkit-gradient": CQ
  }, FQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return cr(r) && bQ(r);
      }).map(function(r) {
        return _s.parse(A, r);
      });
    }
  }, UQ = {
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
  }, EQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return je(e).map(function(t) {
        return t.filter($A);
      }).map(kd);
    }
  }, xQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return je(e).map(function(t) {
        return t.filter(QA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(SQ);
    }
  }, SQ = function(A) {
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
  var IQ = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return je(e).map(function(t) {
        return t.filter(HQ);
      });
    }
  }, HQ = function(A) {
    return QA(A) || $A(A);
  }, hi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, TQ = hi("top"), LQ = hi("right"), RQ = hi("bottom"), kQ = hi("left"), wi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return kd(t.filter($A));
      }
    };
  }, KQ = wi("top-left"), OQ = wi("top-right"), DQ = wi("bottom-right"), MQ = wi("bottom-left"), mi = function(A) {
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
  }, PQ = mi("top"), _Q = mi("right"), NQ = mi("bottom"), GQ = mi("left"), Ci = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return cn(t) ? t.number : 0;
      }
    };
  }, VQ = Ci("top"), $Q = Ci("right"), WQ = Ci("bottom"), jQ = Ci("left"), XQ = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, JQ = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, zQ = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).reduce(function(t, r) {
        return t | YQ(r.value);
      }, 0);
    }
  }, YQ = function(A) {
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
  }, ZQ = {
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
  }, qQ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, mo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(mo || (mo = {}));
  var Ay = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? mo.STRICT : mo.NORMAL;
    }
  }, ey = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, Bc = function(A, e) {
    return QA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : $A(A) ? EA(A, e) : e;
  }, ty = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : _s.parse(A, e);
    }
  }, ry = {
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
  }, vi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, ny = vi("top"), oy = vi("right"), iy = vi("bottom"), ay = vi("left"), sy = {
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
  }, ly = {
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
  }, cy = Qi("top"), uy = Qi("right"), dy = Qi("bottom"), fy = Qi("left"), gy = {
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
  }, py = {
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
  }, By = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Pa(e[0], "none") ? [] : je(e).map(function(t) {
        for (var r = {
          color: qe.TRANSPARENT,
          offsetX: ne,
          offsetY: ne,
          blur: ne
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Ct(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, hy = {
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
  }, wy = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = vy[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, my = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, Cy = function(A) {
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
  }, vy = {
    matrix: my,
    matrix3d: Cy
  }, hc = {
    type: 16,
    number: 50,
    flags: ln
  }, Qy = [
    hc,
    hc
  ], yy = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter($A);
      return t.length !== 2 ? Qy : [
        t[0],
        t[1]
      ];
    }
  }, by = {
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
  }, Pr;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(Pr || (Pr = {}));
  var Fy = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return Pr.BREAK_ALL;
        case "keep-all":
          return Pr.KEEP_ALL;
        default:
          return Pr.NORMAL;
      }
    }
  }, Uy = {
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
  }, Yd = {
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
  }, Ey = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return gr(e) ? e.number : 1;
    }
  }, xy = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Sy = {
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
  }, Iy = {
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
  }, Hy = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, Ty = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return gr(e) ? e.number : QA(e) && e.value === "bold" ? 700 : 400;
    }
  }, Ly = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        return t.value;
      });
    }
  }, Ry = {
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
  }, jA = function(A, e) {
    return (A & e) !== 0;
  }, ky = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, Ky = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Rd), o = 0; o < n.length; o++) {
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
  }, Oy = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Rd), n = 0; n < r.length; n++) {
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
  }, Dy = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(cn).map(function(t) {
        return Yd.parse(A, t);
      });
    }
  }, My = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(uQ);
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
  }, wc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, Py = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Pa(e[0], "none") ? [] : je(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: ne,
          offsetY: ne,
          blur: ne,
          spread: ne,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Pa(i, "inset") ? r.inset = true : Ct(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = pt.parse(A, i);
        }
        return r;
      });
    }
  }, _y = {
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
  }, Ny = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, Gy = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return cn(e) ? e.number : 0;
    }
  }, Vy = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = Z(e, Dy, t.animationDuration), this.backgroundClip = Z(e, gQ, t.backgroundClip), this.backgroundColor = Z(e, pQ, t.backgroundColor), this.backgroundImage = Z(e, FQ, t.backgroundImage), this.backgroundOrigin = Z(e, UQ, t.backgroundOrigin), this.backgroundPosition = Z(e, EQ, t.backgroundPosition), this.backgroundRepeat = Z(e, xQ, t.backgroundRepeat), this.backgroundSize = Z(e, IQ, t.backgroundSize), this.borderTopColor = Z(e, TQ, t.borderTopColor), this.borderRightColor = Z(e, LQ, t.borderRightColor), this.borderBottomColor = Z(e, RQ, t.borderBottomColor), this.borderLeftColor = Z(e, kQ, t.borderLeftColor), this.borderTopLeftRadius = Z(e, KQ, t.borderTopLeftRadius), this.borderTopRightRadius = Z(e, OQ, t.borderTopRightRadius), this.borderBottomRightRadius = Z(e, DQ, t.borderBottomRightRadius), this.borderBottomLeftRadius = Z(e, MQ, t.borderBottomLeftRadius), this.borderTopStyle = Z(e, PQ, t.borderTopStyle), this.borderRightStyle = Z(e, _Q, t.borderRightStyle), this.borderBottomStyle = Z(e, NQ, t.borderBottomStyle), this.borderLeftStyle = Z(e, GQ, t.borderLeftStyle), this.borderTopWidth = Z(e, VQ, t.borderTopWidth), this.borderRightWidth = Z(e, $Q, t.borderRightWidth), this.borderBottomWidth = Z(e, WQ, t.borderBottomWidth), this.borderLeftWidth = Z(e, jQ, t.borderLeftWidth), this.boxShadow = Z(e, Py, t.boxShadow), this.color = Z(e, XQ, t.color), this.direction = Z(e, JQ, t.direction), this.display = Z(e, zQ, t.display), this.float = Z(e, ZQ, t.cssFloat), this.fontFamily = Z(e, Iy, t.fontFamily), this.fontSize = Z(e, Hy, t.fontSize), this.fontStyle = Z(e, Ry, t.fontStyle), this.fontVariant = Z(e, Ly, t.fontVariant), this.fontWeight = Z(e, Ty, t.fontWeight), this.letterSpacing = Z(e, qQ, t.letterSpacing), this.lineBreak = Z(e, Ay, t.lineBreak), this.lineHeight = Z(e, ey, t.lineHeight), this.listStyleImage = Z(e, ty, t.listStyleImage), this.listStylePosition = Z(e, ry, t.listStylePosition), this.listStyleType = Z(e, _a, t.listStyleType), this.marginTop = Z(e, ny, t.marginTop), this.marginRight = Z(e, oy, t.marginRight), this.marginBottom = Z(e, iy, t.marginBottom), this.marginLeft = Z(e, ay, t.marginLeft), this.opacity = Z(e, Ey, t.opacity);
      var o = Z(e, sy, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = Z(e, ly, t.overflowWrap), this.paddingTop = Z(e, cy, t.paddingTop), this.paddingRight = Z(e, uy, t.paddingRight), this.paddingBottom = Z(e, dy, t.paddingBottom), this.paddingLeft = Z(e, fy, t.paddingLeft), this.paintOrder = Z(e, _y, t.paintOrder), this.position = Z(e, py, t.position), this.textAlign = Z(e, gy, t.textAlign), this.textDecorationColor = Z(e, xy, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = Z(e, Sy, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = Z(e, By, t.textShadow), this.textTransform = Z(e, hy, t.textTransform), this.transform = Z(e, wy, t.transform), this.transformOrigin = Z(e, yy, t.transformOrigin), this.visibility = Z(e, by, t.visibility), this.webkitTextStrokeColor = Z(e, Ny, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Z(e, Gy, t.webkitTextStrokeWidth), this.wordBreak = Z(e, Fy, t.wordBreak), this.zIndex = Z(e, Uy, t.zIndex);
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
      return jA(this.display, 4) || jA(this.display, 33554432) || jA(this.display, 268435456) || jA(this.display, 536870912) || jA(this.display, 67108864) || jA(this.display, 134217728);
    }, A;
  })(), $y = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = Z(e, ky, t.content), this.quotes = Z(e, My, t.quotes);
    }
    return A;
  })(), mc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = Z(e, Ky, t.counterIncrement), this.counterReset = Z(e, Oy, t.counterReset);
    }
    return A;
  })(), Z = function(A, e, t) {
    var r = new Td(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Ld(r.read());
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
            return pi.parse(A, o.parseComponentValue());
          case "color":
            return pt.parse(A, o.parseComponentValue());
          case "image":
            return _s.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Ct(a) ? a : ne;
          case "length-percentage":
            var s = o.parseComponentValue();
            return $A(s) ? s : ne;
          case "time":
            return Yd.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, Wy = "data-html2canvas-debug", jy = function(A) {
    var e = A.getAttribute(Wy);
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
    var t = jy(A);
    return t === 1 || e === t;
  }, Xe = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Na(t, 3)) debugger;
      this.styles = new Vy(e, window.getComputedStyle(t, null)), $a(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = fi(this.context, t), Na(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), Xy = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Cc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Dn = 0; Dn < Cc.length; Dn++) Lr[Cc.charCodeAt(Dn)] = Dn;
  var Jy = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Lr[A.charCodeAt(r)], i = Lr[A.charCodeAt(r + 1)], a = Lr[A.charCodeAt(r + 2)], s = Lr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, zy = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Yy = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, kt = 5, Ns = 11, Ni = 2, Zy = Ns - kt, Zd = 65536 >> kt, qy = 1 << kt, Gi = qy - 1, Ab = 1024 >> kt, eb = Zd + Ab, tb = eb, rb = 32, nb = tb + rb, ob = 65536 >> Ns, ib = 1 << Zy, ab = ib - 1, vc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, sb = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, lb = function(A, e) {
    var t = Jy(A), r = Array.isArray(t) ? Yy(t) : new Uint32Array(t), n = Array.isArray(t) ? zy(t) : new Uint16Array(t), o = 24, i = vc(n, o / 2, r[4] / 2), a = r[5] === 2 ? vc(n, (o + r[4]) / 2) : sb(r, Math.ceil((o + r[4]) / 4));
    return new cb(r[0], r[1], r[2], r[3], i, a);
  }, cb = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> kt], t = (t << Ni) + (e & Gi), this.data[t];
        if (e <= 65535) return t = this.index[Zd + (e - 55296 >> kt)], t = (t << Ni) + (e & Gi), this.data[t];
        if (e < this.highStart) return t = nb - ob + (e >> Ns), t = this.index[t], t += e >> kt & ab, t = this.index[t], t = (t << Ni) + (e & Gi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Qc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ub = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Mn = 0; Mn < Qc.length; Mn++) ub[Qc.charCodeAt(Mn)] = Mn;
  var db = 1, Vi = 2, $i = 3, yc = 4, bc = 5, fb = 7, Fc = 8, Wi = 9, ji = 10, Uc = 11, Ec = 12, xc = 13, Sc = 14, Xi = 15, gb = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, pb = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, Bb = lb(Xy), ve = "\xD7", Ji = "\xF7", hb = function(A) {
    return Bb.get(A);
  }, wb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === Vi && i === $i) return ve;
    if (o === Vi || o === $i || o === yc || i === Vi || i === $i || i === yc) return Ji;
    if (o === Fc && [
      Fc,
      Wi,
      Uc,
      Ec
    ].indexOf(i) !== -1 || (o === Uc || o === Wi) && (i === Wi || i === ji) || (o === Ec || o === ji) && i === ji || i === xc || i === bc || i === fb || o === db) return ve;
    if (o === xc && i === Sc) {
      for (; n === bc; ) n = e[--r];
      if (n === Sc) return ve;
    }
    if (o === Xi && i === Xi) {
      for (var a = 0; n === Xi; ) a++, n = e[--r];
      if (a % 2 === 0) return ve;
    }
    return Ji;
  }, mb = function(A) {
    var e = gb(A), t = e.length, r = 0, n = 0, o = e.map(hb);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = ve; r < t && (i = wb(e, o, ++r)) === ve; ) ;
        if (i !== ve || r === t) {
          var a = pb.apply(null, e.slice(n, r));
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
  }, Cb = function(A) {
    for (var e = mb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, vb = function(A) {
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
  }, Qb = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = gi(r.data).map(function(s) {
      return NA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var d = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : d;
    });
    return A.body.removeChild(e), a;
  }, yb = function() {
    return typeof new Image().crossOrigin < "u";
  }, bb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, Fb = function(A) {
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
  }, Ub = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Ga(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Hc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", Ic(s) ? Hc(Ga(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Ic(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Ga = function(A, e, t, r, n) {
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
      var A = vb(document);
      return Object.defineProperty(ee, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ee.SUPPORT_RANGE_BOUNDS && Qb(document);
      return Object.defineProperty(ee, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = Fb(document);
      return Object.defineProperty(ee, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Ub(document) : Promise.resolve(false);
      return Object.defineProperty(ee, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = yb();
      return Object.defineProperty(ee, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = bb();
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
  })(), Eb = function(A, e, t, r) {
    var n = Ib(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ee.SUPPORT_RANGE_BOUNDS) {
        var s = Tc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Gs(a), c = 0;
          l.forEach(function(u) {
            o.push(new _r(u, nt.fromDOMRectList(A, Tc(r, c + i, u.length).getClientRects()))), c += u.length;
          });
        } else o.push(new _r(a, nt.fromDOMRectList(A, s)));
      } else {
        var d = r.splitText(a.length);
        o.push(new _r(a, xb(A, r))), r = d;
      }
      else ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, xb = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = fi(A, r);
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
    return Cb(A);
  }, Sb = function(A, e) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return Tb(A, e);
  }, Ib = function(A, e) {
    return e.letterSpacing !== 0 ? Gs(A) : Sb(A, e);
  }, Hb = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], Tb = function(A, e) {
    for (var t = ov(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = gi(i), s = "";
        a.forEach(function(l) {
          Hb.indexOf(l) === -1 ? s += NA(l) : (s.length && r.push(s), r.push(NA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Lb = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = Rb(t.data, r.textTransform), this.textBounds = Eb(e, this.text, r, t);
    }
    return A;
  })(), Rb = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(kb, Kb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, kb = /(^|\s|:|-|\(|\))([a-z])/g, Kb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, qd = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(Xe), Af = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(Xe), ef = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = fi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(Xe), tf = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(Xe), Va = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(Xe), Ob = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Db = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], Mb = function(A) {
    return A.width > A.height ? new nt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new nt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Pb = function(A) {
    var e = A.type === _b ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, Co = "checkbox", vo = "radio", _b = "password", Lc = 707406591, Vs = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Pb(r), (n.type === Co || n.type === vo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = Mb(n.bounds)), n.type) {
        case Co:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Ob;
          break;
        case vo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Db;
          break;
      }
      return n;
    }
    return e;
  })(Xe), rf = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(Xe), nf = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(Xe), of = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = sf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Mr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : qe.TRANSPARENT, i = r.contentWindow.document.body ? Mr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : qe.TRANSPARENT;
          n.backgroundColor = Bt(o) ? Bt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(Xe), Nb = [
    "OL",
    "UL",
    "MENU"
  ], to = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, lf(n) && n.data.trim().length > 0) t.textNodes.push(new Lb(A, n, t.styles));
    else if (er(n)) if (ff(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return to(A, a, t, r);
    });
    else {
      var i = af(A, n);
      i.styles.isVisible() && (Gb(n, i, r) ? i.flags |= 4 : Vb(i.styles) && (i.flags |= 2), Nb.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? to(A, n.shadowRoot, i, r) : !Qo(n) && !cf(n) && !yo(n) && to(A, n, i, r));
    }
  }, af = function(A, e) {
    return Wa(e) ? new qd(A, e) : uf(e) ? new Af(A, e) : cf(e) ? new ef(A, e) : $b(e) ? new tf(A, e) : Wb(e) ? new Va(A, e) : jb(e) ? new Vs(A, e) : yo(e) ? new rf(A, e) : Qo(e) ? new nf(A, e) : df(e) ? new of(A, e) : new Xe(A, e);
  }, sf = function(A, e) {
    var t = af(A, e);
    return t.flags |= 4, to(A, e, t, t), t;
  }, Gb = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || $s(A) && t.styles.isTransparent();
  }, Vb = function(A) {
    return A.isPositioned() || A.isFloating();
  }, lf = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, er = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, $a = function(A) {
    return er(A) && typeof A.style < "u" && !ro(A);
  }, ro = function(A) {
    return typeof A.className == "object";
  }, $b = function(A) {
    return A.tagName === "LI";
  }, Wb = function(A) {
    return A.tagName === "OL";
  }, jb = function(A) {
    return A.tagName === "INPUT";
  }, Xb = function(A) {
    return A.tagName === "HTML";
  }, cf = function(A) {
    return A.tagName === "svg";
  }, $s = function(A) {
    return A.tagName === "BODY";
  }, uf = function(A) {
    return A.tagName === "CANVAS";
  }, Rc = function(A) {
    return A.tagName === "VIDEO";
  }, Wa = function(A) {
    return A.tagName === "IMG";
  }, df = function(A) {
    return A.tagName === "IFRAME";
  }, kc = function(A) {
    return A.tagName === "STYLE";
  }, Jb = function(A) {
    return A.tagName === "SCRIPT";
  }, Qo = function(A) {
    return A.tagName === "TEXTAREA";
  }, yo = function(A) {
    return A.tagName === "SELECT";
  }, ff = function(A) {
    return A.tagName === "SLOT";
  }, Kc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, zb = (function() {
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
  }, Yb = {
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
  }, Zb = {
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
  }, jt = function(A, e, t, r, n, o) {
    return A < e || A > t ? zr(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, gf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, _A = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (gf(Math.abs(A), o, r, function(i) {
      return NA(Math.floor(i % o) + e);
    }) + n);
  }, yt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return gf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, Yt = 1, at = 2, st = 4, Rr = 8, Ze = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return zr(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && jA(o, Yt) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && jA(o, at) || l === 1 && s === 1 && jA(o, st) && A > 100 || l === 1 && s > 1 && jA(o, Rr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Mc = "\u5341\u767E\u5343\u842C", Pc = "\u62FE\u4F70\u4EDF\u842C", _c = "\u30DE\u30A4\u30CA\u30B9", zi = "\uB9C8\uC774\uB108\uC2A4", zr = function(A, e, t) {
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
        return yt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return jt(A, 1, 3999, Oc, 3, r).toLowerCase();
      case 7:
        return jt(A, 1, 3999, Oc, 3, r);
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
        return jt(A, 1, 9999, Dc, 3, r);
      case 35:
        return jt(A, 1, 9999, Dc, 3, r).toLowerCase();
      case 13:
        return _A(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return _A(A, 6112, 6121, true, r);
      case 15:
        return yt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return yt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Mc, "\u8CA0", n, at | st | Rr);
      case 47:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Pc, "\u8CA0", n, Yt | at | st | Rr);
      case 42:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Mc, "\u8D1F", n, at | st | Rr);
      case 41:
        return Ze(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Pc, "\u8D1F", n, Yt | at | st | Rr);
      case 26:
        return Ze(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", _c, n, 0);
      case 25:
        return Ze(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", _c, n, Yt | at | st);
      case 31:
        return Ze(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", zi, o, Yt | at | st);
      case 33:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", zi, o, 0);
      case 32:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", zi, o, Yt | at | st);
      case 18:
        return _A(A, 2406, 2415, true, r);
      case 20:
        return jt(A, 1, 19999, Zb, 3, r);
      case 21:
        return _A(A, 2790, 2799, true, r);
      case 22:
        return _A(A, 2662, 2671, true, r);
      case 22:
        return jt(A, 1, 10999, Yb, 3, r);
      case 23:
        return yt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return yt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return _A(A, 3302, 3311, true, r);
      case 28:
        return yt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return yt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
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
  }, pf = "data-html2canvas-ignore", Nc = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new zb(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = qb(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = tF(n).then(function() {
        return ue(r, void 0, void 0, function() {
          var c, d;
          return ae(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(iF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, d = this.clonedReferenceElement, typeof d > "u" ? [
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
                  eF(s)
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
      return s.open(), s.write(nF(document.doctype) + "<html></html>"), oF(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Na(e, 2)) debugger;
      if (uf(e)) return this.createCanvasClone(e);
      if (Rc(e)) return this.createVideoClone(e);
      if (kc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return Wa(t) && (Wa(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Kc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Yi(e.style, t), t;
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
      (!er(t) || !Jb(t) && !t.hasAttribute(pf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !er(t) || !kc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (er(o) && ff(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (lf(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && er(e) && ($a(e) || ro(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && $a(n) && (this.clonedReferenceElement = n), $s(n) && lF(n);
        var s = this.counters.parse(new mc(this.context, o)), l = this.resolvePseudoContent(e, n, i, Nr.BEFORE);
        Kc(e) && (t = true), Rc(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, Nr.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || ro(e)) && !df(e) || t) && Yi(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Qo(e) || yo(e)) && (Qo(n) || yo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new mc(this.context, r));
          var s = new $y(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Yi(r, l), s.content.forEach(function(d) {
            if (d.type === 0) l.appendChild(a.createTextNode(d.value));
            else if (d.type === 22) {
              var u = a.createElement("img");
              u.src = d.value, u.style.opacity = "1", l.appendChild(u);
            } else if (d.type === 18) {
              if (d.name === "attr") {
                var f = d.values.filter(QA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (d.name === "counter") {
                var p = d.values.filter(cr), B = p[0], y = p[1];
                if (B && QA(B)) {
                  var m = o.counters.getCounterValue(B.value), F = y && QA(y) ? _a.parse(o.context, y.value) : 3;
                  l.appendChild(a.createTextNode(zr(m, F, false)));
                }
              } else if (d.name === "counters") {
                var C = d.values.filter(cr), B = C[0], v = C[1], y = C[2];
                if (B && QA(B)) {
                  var U = o.counters.getCounterValues(B.value), w = y && QA(y) ? _a.parse(o.context, y.value) : 3, x = v && v.type === 0 ? v.value : "", I = U.map(function(T) {
                    return zr(T, w, false);
                  }).join(x);
                  l.appendChild(a.createTextNode(I));
                }
              }
            } else if (d.type === 20) switch (d.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(wc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(wc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(d.value));
            }
          }), l.className = ja + " " + Xa;
          var c = n === Nr.BEFORE ? " " + ja : " " + Xa;
          return ro(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), Nr;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(Nr || (Nr = {}));
  var qb = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(pf, "true"), A.body.appendChild(t), t;
  }, AF = function(A) {
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
  }, eF = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(AF));
  }, tF = function(A) {
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
  }, rF = [
    "all",
    "d",
    "content"
  ], Yi = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      rF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, nF = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, oF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, iF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, aF = ":before", sF = ":after", ja = "___html2canvas___pseudoelement_before", Xa = "___html2canvas___pseudoelement_after", Gc = `{
    content: "" !important;
    display: none !important;
}`, lF = function(A) {
    cF(A, "." + ja + aF + Gc + `
         .` + Xa + sF + Gc);
  }, cF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, Bf = (function() {
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
  })(), uF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (qi(e) || pF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return ue(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return ae(this, function(a) {
          switch (a.label) {
            case 0:
              return t = Bf.isSameOrigin(e), r = !Zi(e) && this._options.useCORS === true && ee.SUPPORT_CORS_IMAGES && !t, n = !Zi(e) && !t && !qi(e) && typeof this._options.proxy == "string" && ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !Zi(e) && !qi(e) && !n && !r ? [
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
                  }, c.onerror = l, (BF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
  })(), dF = /^data:image\/svg\+xml/i, fF = /^data:image\/.*;base64,/i, gF = /^data:image\/.*/i, pF = function(A) {
    return ee.SUPPORT_SVG_DRAWING || !hF(A);
  }, Zi = function(A) {
    return gF.test(A);
  }, BF = function(A) {
    return fF.test(A);
  }, qi = function(A) {
    return A.substr(0, 4) === "blob";
  }, hF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || dF.test(A);
  }, Y = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), Xt = function(A, e, t) {
    return new Y(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, Pn = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Xt(this.start, this.startControl, e), n = Xt(this.startControl, this.endControl, e), o = Xt(this.endControl, this.end, e), i = Xt(r, n, e), a = Xt(n, o, e), s = Xt(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), be = function(A) {
    return A.type === 1;
  }, wF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Tr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Tr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = Tr(t.borderBottomRightRadius, r.width, r.height), d = c[0], u = c[1], f = Tr(t.borderBottomLeftRadius, r.width, r.height), p = f[0], B = f[1], y = [];
      y.push((o + s) / r.width), y.push((p + d) / r.width), y.push((i + B) / r.height), y.push((l + u) / r.height);
      var m = Math.max.apply(Math, y);
      m > 1 && (o /= m, i /= m, s /= m, l /= m, d /= m, u /= m, p /= m, B /= m);
      var F = r.width - s, C = r.height - u, v = r.width - d, U = r.height - B, w = t.borderTopWidth, x = t.borderRightWidth, I = t.borderBottomWidth, H = t.borderLeftWidth, g = EA(t.paddingTop, e.bounds.width), T = EA(t.paddingRight, e.bounds.width), D = EA(t.paddingBottom, e.bounds.width), K = EA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + H / 3, r.top + w / 3, o - H / 3, i - w / 3, CA.TOP_LEFT) : new Y(r.left + H / 3, r.top + w / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + F, r.top + w / 3, s - x / 3, l - w / 3, CA.TOP_RIGHT) : new Y(r.left + r.width - x / 3, r.top + w / 3), this.bottomRightBorderDoubleOuterBox = d > 0 || u > 0 ? LA(r.left + v, r.top + C, d - x / 3, u - I / 3, CA.BOTTOM_RIGHT) : new Y(r.left + r.width - x / 3, r.top + r.height - I / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || B > 0 ? LA(r.left + H / 3, r.top + U, p - H / 3, B - I / 3, CA.BOTTOM_LEFT) : new Y(r.left + H / 3, r.top + r.height - I / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + H * 2 / 3, r.top + w * 2 / 3, o - H * 2 / 3, i - w * 2 / 3, CA.TOP_LEFT) : new Y(r.left + H * 2 / 3, r.top + w * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + F, r.top + w * 2 / 3, s - x * 2 / 3, l - w * 2 / 3, CA.TOP_RIGHT) : new Y(r.left + r.width - x * 2 / 3, r.top + w * 2 / 3), this.bottomRightBorderDoubleInnerBox = d > 0 || u > 0 ? LA(r.left + v, r.top + C, d - x * 2 / 3, u - I * 2 / 3, CA.BOTTOM_RIGHT) : new Y(r.left + r.width - x * 2 / 3, r.top + r.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || B > 0 ? LA(r.left + H * 2 / 3, r.top + U, p - H * 2 / 3, B - I * 2 / 3, CA.BOTTOM_LEFT) : new Y(r.left + H * 2 / 3, r.top + r.height - I * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? LA(r.left + H / 2, r.top + w / 2, o - H / 2, i - w / 2, CA.TOP_LEFT) : new Y(r.left + H / 2, r.top + w / 2), this.topRightBorderStroke = o > 0 || i > 0 ? LA(r.left + F, r.top + w / 2, s - x / 2, l - w / 2, CA.TOP_RIGHT) : new Y(r.left + r.width - x / 2, r.top + w / 2), this.bottomRightBorderStroke = d > 0 || u > 0 ? LA(r.left + v, r.top + C, d - x / 2, u - I / 2, CA.BOTTOM_RIGHT) : new Y(r.left + r.width - x / 2, r.top + r.height - I / 2), this.bottomLeftBorderStroke = p > 0 || B > 0 ? LA(r.left + H / 2, r.top + U, p - H / 2, B - I / 2, CA.BOTTOM_LEFT) : new Y(r.left + H / 2, r.top + r.height - I / 2), this.topLeftBorderBox = o > 0 || i > 0 ? LA(r.left, r.top, o, i, CA.TOP_LEFT) : new Y(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? LA(r.left + F, r.top, s, l, CA.TOP_RIGHT) : new Y(r.left + r.width, r.top), this.bottomRightBorderBox = d > 0 || u > 0 ? LA(r.left + v, r.top + C, d, u, CA.BOTTOM_RIGHT) : new Y(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || B > 0 ? LA(r.left, r.top + U, p, B, CA.BOTTOM_LEFT) : new Y(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? LA(r.left + H, r.top + w, Math.max(0, o - H), Math.max(0, i - w), CA.TOP_LEFT) : new Y(r.left + H, r.top + w), this.topRightPaddingBox = s > 0 || l > 0 ? LA(r.left + Math.min(F, r.width - x), r.top + w, F > r.width + x ? 0 : Math.max(0, s - x), Math.max(0, l - w), CA.TOP_RIGHT) : new Y(r.left + r.width - x, r.top + w), this.bottomRightPaddingBox = d > 0 || u > 0 ? LA(r.left + Math.min(v, r.width - H), r.top + Math.min(C, r.height - I), Math.max(0, d - x), Math.max(0, u - I), CA.BOTTOM_RIGHT) : new Y(r.left + r.width - x, r.top + r.height - I), this.bottomLeftPaddingBox = p > 0 || B > 0 ? LA(r.left + H, r.top + Math.min(U, r.height - I), Math.max(0, p - H), Math.max(0, B - I), CA.BOTTOM_LEFT) : new Y(r.left + H, r.top + r.height - I), this.topLeftContentBox = o > 0 || i > 0 ? LA(r.left + H + K, r.top + w + g, Math.max(0, o - (H + K)), Math.max(0, i - (w + g)), CA.TOP_LEFT) : new Y(r.left + H + K, r.top + w + g), this.topRightContentBox = s > 0 || l > 0 ? LA(r.left + Math.min(F, r.width + H + K), r.top + w + g, F > r.width + H + K ? 0 : s - H + K, l - (w + g), CA.TOP_RIGHT) : new Y(r.left + r.width - (x + T), r.top + w + g), this.bottomRightContentBox = d > 0 || u > 0 ? LA(r.left + Math.min(v, r.width - (H + K)), r.top + Math.min(C, r.height + w + g), Math.max(0, d - (x + T)), u - (I + D), CA.BOTTOM_RIGHT) : new Y(r.left + r.width - (x + T), r.top + r.height - (I + D)), this.bottomLeftContentBox = p > 0 || B > 0 ? LA(r.left + H + K, r.top + U, Math.max(0, p - (H + K)), B - (I + D), CA.BOTTOM_LEFT) : new Y(r.left + H + K, r.top + r.height - (I + D));
    }
    return A;
  })(), CA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(CA || (CA = {}));
  var LA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case CA.TOP_LEFT:
        return new Pn(new Y(A, l), new Y(A, l - a), new Y(s - i, e), new Y(s, e));
      case CA.TOP_RIGHT:
        return new Pn(new Y(A, e), new Y(A + i, e), new Y(s, l - a), new Y(s, l));
      case CA.BOTTOM_RIGHT:
        return new Pn(new Y(s, e), new Y(s, e + a), new Y(A + i, l), new Y(A, l));
      case CA.BOTTOM_LEFT:
      default:
        return new Pn(new Y(s, l), new Y(s - i, l), new Y(A, e + a), new Y(A, e));
    }
  }, bo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, mF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Fo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, CF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), _n = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), vF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), QF = function(A) {
    return A.type === 0;
  }, hf = function(A) {
    return A.type === 1;
  }, yF = function(A) {
    return A.type === 2;
  }, Vc = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, bF = function(A, e, t, r, n) {
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
  }, wf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), mf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new wF(this.container), this.container.styles.opacity < 1 && this.effects.push(new vF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new CF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = bo(this.curves), a = Fo(this.curves);
        Vc(i, a) ? this.effects.push(new _n(i, 6)) : (this.effects.push(new _n(i, 2)), this.effects.push(new _n(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !hf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = bo(r.curves), a = Fo(r.curves);
            Vc(i, a) || n.unshift(new _n(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return jA(s.target, e);
      });
    }, A;
  })(), Ja = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = jA(n.flags, 4), i = jA(n.flags, 2), a = new mf(n, A);
      jA(n.styles.display, 2048) && r.push(a);
      var s = jA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new wf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var d = n.styles.zIndex.order;
          if (d < 0) {
            var u = 0;
            l.negativeZIndex.some(function(p, B) {
              return d > p.element.container.styles.zIndex.order ? (u = B, false) : u > 0;
            }), l.negativeZIndex.splice(u, 0, c);
          } else if (d > 0) {
            var f = 0;
            l.positiveZIndex.some(function(p, B) {
              return d >= p.element.container.styles.zIndex.order ? (f = B + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        Ja(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Ja(a, e, t, s);
      jA(n.flags, 8) && Cf(n, s);
    });
  }, Cf = function(A, e) {
    for (var t = A instanceof Va ? A.start : 1, r = A instanceof Va ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof tf && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = zr(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, FF = function(A) {
    var e = new mf(A, null), t = new wf(e), r = [];
    return Ja(e, t, t, r), Cf(e.container, r), t;
  }, $c = function(A, e) {
    switch (e) {
      case 0:
        return Ue(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Ue(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Ue(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Ue(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, UF = function(A, e) {
    switch (e) {
      case 0:
        return Ue(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Ue(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Ue(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Ue(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, EF = function(A, e) {
    switch (e) {
      case 0:
        return Ue(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Ue(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Ue(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Ue(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, xF = function(A, e) {
    switch (e) {
      case 0:
        return Nn(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return Nn(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return Nn(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return Nn(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, Nn = function(A, e) {
    var t = [];
    return be(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), be(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Ue = function(A, e, t, r) {
    var n = [];
    return be(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), be(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), be(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), be(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, vf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Uo = function(A) {
    var e = A.styles, t = A.bounds, r = EA(e.paddingLeft, t.width), n = EA(e.paddingRight, t.width), o = EA(e.paddingTop, t.width), i = EA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, SF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Uo(e) : vf(e);
  }, IF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Uo(e) : vf(e);
  }, Aa = function(A, e, t) {
    var r = SF(Zt(A.styles.backgroundOrigin, e), A), n = IF(Zt(A.styles.backgroundClip, e), A), o = HF(Zt(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = Tr(Zt(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = TF(Zt(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), d = Math.round(r.top + s[1]);
    return [
      l,
      c,
      d,
      i,
      a
    ];
  }, Jt = function(A) {
    return QA(A) && A.value === nr.AUTO;
  }, Gn = function(A) {
    return typeof A == "number";
  }, HF = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if ($A(i) && a && $A(a)) return [
      EA(i, t.width),
      EA(a, t.height)
    ];
    var s = Gn(o);
    if (QA(i) && (i.value === nr.CONTAIN || i.value === nr.COVER)) {
      if (Gn(o)) {
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
    var c = Gn(r), d = Gn(n), u = c || d;
    if (Jt(i) && (!a || Jt(a))) {
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
      var B = c ? r : t.width, y = d ? n : t.height;
      return [
        B,
        y
      ];
    }
    if (s) {
      var m = 0, F = 0;
      return $A(i) ? m = EA(i, t.width) : $A(a) && (F = EA(a, t.height)), Jt(i) ? m = F * o : (!a || Jt(a)) && (F = m / o), [
        m,
        F
      ];
    }
    var C = null, v = null;
    if ($A(i) ? C = EA(i, t.width) : a && $A(a) && (v = EA(a, t.height)), C !== null && (!a || Jt(a)) && (v = c && d ? C / r * n : t.height), v !== null && Jt(i) && (C = c && d ? v / n * r : t.width), C !== null && v !== null) return [
      C,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, Zt = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, TF = function(A, e, t, r, n) {
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
  }, LF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Wc = "Hidden Text", RF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = LF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(Wc)), r.appendChild(o), r.appendChild(n);
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
  })(), Qf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), kF = 1e4, KF = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new RF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), yF(t) && (this.ctx.globalAlpha = t.opacity), QF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), hf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
              if (jA(t.container.flags, 16)) debugger;
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
      }).join(""), n = _F(t.fontFamily).join(", "), o = cn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
            d.forEach(function(B) {
              switch (B) {
                case 0:
                  u.ctx.fillStyle = JA(r.color), u.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(m) {
                    u.ctx.shadowColor = JA(m.color), u.ctx.shadowOffsetX = m.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = m.offsetY.number * u.options.scale, u.ctx.shadowBlur = m.blur.number, u.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = JA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(m) {
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
                  r.webkitTextStrokeWidth && p.text.trim().length && (u.ctx.strokeStyle = JA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
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
        var o = Uo(t), i = Fo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, o, i, a, s, F, F, l, c, d, u, v, f, p, U, B, y, m, F, C, v, U;
        return ae(this, function(w) {
          switch (w.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, w.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                4,
                this.renderTextNode(s, o)
              ]) : [
                3,
                4
              ];
            case 2:
              w.sent(), w.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              if (!(r instanceof qd)) return [
                3,
                8
              ];
              w.label = 5;
            case 5:
              return w.trys.push([
                5,
                7,
                ,
                8
              ]), [
                4,
                this.context.cache.match(r.src)
              ];
            case 6:
              return F = w.sent(), this.renderReplacedElement(r, n, F), [
                3,
                8
              ];
            case 7:
              return w.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof Af && this.renderReplacedElement(r, n, r.canvas), !(r instanceof ef)) return [
                3,
                12
              ];
              w.label = 9;
            case 9:
              return w.trys.push([
                9,
                11,
                ,
                12
              ]), [
                4,
                this.context.cache.match(r.svg)
              ];
            case 10:
              return F = w.sent(), this.renderReplacedElement(r, n, F), [
                3,
                12
              ];
            case 11:
              return w.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof of && r.tree ? (l = new e(this.context, {
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
              c = w.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), w.label = 14;
            case 14:
              if (r instanceof Vs && (d = Math.min(r.bounds.width, r.bounds.height), r.type === Co ? r.checked && (this.ctx.save(), this.path([
                new Y(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79),
                new Y(r.bounds.left + d * 0.16, r.bounds.top + d * 0.5549),
                new Y(r.bounds.left + d * 0.27347, r.bounds.top + d * 0.44071),
                new Y(r.bounds.left + d * 0.39694, r.bounds.top + d * 0.5649),
                new Y(r.bounds.left + d * 0.72983, r.bounds.top + d * 0.23),
                new Y(r.bounds.left + d * 0.84, r.bounds.top + d * 0.34085),
                new Y(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79)
              ]), this.ctx.fillStyle = JA(Lc), this.ctx.fill(), this.ctx.restore()) : r.type === vo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + d / 2, r.bounds.top + d / 2, d / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = JA(Lc), this.ctx.fill(), this.ctx.restore())), OF(r) && r.value.length) {
                switch (u = this.createFontStyle(o), v = u[0], f = u[1], p = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = JA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = MF(r.styles.textAlign), U = Uo(r), B = 0, r.styles.textAlign) {
                  case 1:
                    B += U.width / 2;
                    break;
                  case 2:
                    B += U.width;
                    break;
                }
                y = U.add(B, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new Y(U.left, U.top),
                  new Y(U.left + U.width, U.top),
                  new Y(U.left + U.width, U.top + U.height),
                  new Y(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new _r(r.value, y), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!jA(r.styles.display, 2048)) return [
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
              F = void 0, C = m.url, w.label = 15;
            case 15:
              return w.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(C)
              ];
            case 16:
              return F = w.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return w.sent(), this.context.logger.error("Error loading list-style-image " + C), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = JA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new nt(r.bounds.left, r.bounds.top + EA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Bc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new _r(t.listValue, U), o.letterSpacing, Bc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), w.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return ue(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, s, m, l, c, m, d, u, m, f, p, m, B, y, m;
        return ae(this, function(F) {
          switch (F.label) {
            case 0:
              if (jA(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              F.sent(), r = 0, n = t.negativeZIndex, F.label = 2;
            case 2:
              return r < n.length ? (m = n[r], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                5
              ];
            case 3:
              F.sent(), F.label = 4;
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
              F.sent(), o = 0, i = t.nonInlineLevel, F.label = 7;
            case 7:
              return o < i.length ? (m = i[o], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                10
              ];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, F.label = 11;
            case 11:
              return a < s.length ? (m = s[a], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                14
              ];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return l < c.length ? (m = c[l], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                18
              ];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              d = 0, u = t.inlineLevel, F.label = 19;
            case 19:
              return d < u.length ? (m = u[d], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                22
              ];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return d++, [
                3,
                19
              ];
            case 22:
              f = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return f < p.length ? (m = p[f], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                26
              ];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              B = 0, y = t.positiveZIndex, F.label = 27;
            case 27:
              return B < y.length ? (m = y[B], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return B++, [
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
        var i = be(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), be(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
                var d, u, f, g, M, j, K, V, I, p, g, M, j, K, V, B, y, m, F, C, v, U, w, x, I, H, g, T, D, K, V, O, M, j, nA, P, X, AA, rA, R, $, G;
                return ae(this, function(z) {
                  switch (z.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      d = void 0, u = c.url, z.label = 1;
                    case 1:
                      return z.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(u)
                      ];
                    case 2:
                      return d = z.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return z.sent(), o.context.logger.error("Error loading background-image " + u), [
                        3,
                        4
                      ];
                    case 4:
                      return d && (f = Aa(t, r, [
                        d.width,
                        d.height,
                        d.width / d.height
                      ]), g = f[0], M = f[1], j = f[2], K = f[3], V = f[4], I = o.ctx.createPattern(o.resizeImage(d, K, V), "repeat"), o.renderRepeat(g, I, M, j)), [
                        3,
                        6
                      ];
                    case 5:
                      QQ(c) ? (p = Aa(t, r, [
                        null,
                        null,
                        null
                      ]), g = p[0], M = p[1], j = p[2], K = p[3], V = p[4], B = hQ(c.angle, K, V), y = B[0], m = B[1], F = B[2], C = B[3], v = B[4], U = document.createElement("canvas"), U.width = K, U.height = V, w = U.getContext("2d"), x = w.createLinearGradient(m, C, F, v), gc(c.stops, y).forEach(function(dA) {
                        return x.addColorStop(dA.stop, JA(dA.color));
                      }), w.fillStyle = x, w.fillRect(0, 0, K, V), K > 0 && V > 0 && (I = o.ctx.createPattern(U, "repeat"), o.renderRepeat(g, I, M, j))) : yQ(c) && (H = Aa(t, r, [
                        null,
                        null,
                        null
                      ]), g = H[0], T = H[1], D = H[2], K = H[3], V = H[4], O = c.position.length === 0 ? [
                        Ps
                      ] : c.position, M = EA(O[0], K), j = EA(O[O.length - 1], V), nA = wQ(c, M, j, K, V), P = nA[0], X = nA[1], P > 0 && X > 0 && (AA = o.ctx.createRadialGradient(T + M, D + j, 0, T + M, D + j, P), gc(c.stops, P * 2).forEach(function(dA) {
                        return AA.addColorStop(dA.stop, JA(dA.color));
                      }), o.path(g), o.ctx.fillStyle = AA, P !== X ? (rA = t.bounds.left + 0.5 * t.bounds.width, R = t.bounds.top + 0.5 * t.bounds.height, $ = X / P, G = 1 / $, o.ctx.save(), o.ctx.translate(rA, R), o.ctx.transform(1, 0, 0, $, 0, 0), o.ctx.translate(-rA, -R), o.ctx.fillRect(T, G * (D - R) + R, K, V * G), o.ctx.restore()) : o.ctx.fill())), z.label = 6;
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
          return this.path($c(n, r)), this.ctx.fillStyle = JA(t), this.ctx.fill(), [
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
              return i = UF(o, n), this.path(i), this.ctx.fillStyle = JA(t), this.ctx.fill(), a = EF(o, n), this.path(a), this.ctx.fill(), [
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
              ], i = DF(Zt(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Bt(r.backgroundColor) || (this.ctx.fillStyle = JA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                d.ctx.save();
                var p = bo(t.curves), B = f.inset ? 0 : kF, y = bF(p, -B + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (d.path(p), d.ctx.clip(), d.mask(y)) : (d.mask(p), d.ctx.clip(), d.path(y)), d.ctx.shadowOffsetX = f.offsetX.number + B, d.ctx.shadowOffsetY = f.offsetY.number, d.ctx.shadowColor = JA(f.color), d.ctx.shadowBlur = f.blur.number, d.ctx.fillStyle = f.inset ? JA(f.color) : "rgba(0,0,0,1)", d.ctx.fill(), d.ctx.restore();
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
        var a, s, l, c, d, u, f, p, B, y, m, F, C, v, U, w, U, w;
        return ae(this, function(x) {
          return this.ctx.save(), a = xF(o, n), s = $c(o, n), i === 2 && (this.path(s), this.ctx.clip()), be(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), be(s[1]) ? (d = s[1].end.x, u = s[1].end.y) : (d = s[1].x, u = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - d) : f = Math.abs(c - u), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, B = r < 3 ? r * 2 : r, i === 3 && (p = r, B = r), y = true, f <= p * 2 ? y = false : f <= p * 2 + B ? (m = f / (2 * p + B), p *= m, B *= m) : (F = Math.floor((f + B) / (p + B)), C = (f - F * p) / (F - 1), v = (f - (F + 1) * p) / F, B = v <= 0 || Math.abs(B - C) < Math.abs(B - v) ? C : v), y && (i === 3 ? this.ctx.setLineDash([
            0,
            p + B
          ]) : this.ctx.setLineDash([
            p,
            B
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = JA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (be(s[0]) && (U = s[3], w = s[0], this.ctx.beginPath(), this.formatPath([
            new Y(U.end.x, U.end.y),
            new Y(w.start.x, w.start.y)
          ]), this.ctx.stroke()), be(s[1]) && (U = s[1], w = s[2], this.ctx.beginPath(), this.formatPath([
            new Y(U.end.x, U.end.y),
            new Y(w.start.x, w.start.y)
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
              return this.options.backgroundColor && (this.ctx.fillStyle = JA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = FF(t), [
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
  })(Qf), OF = function(A) {
    return A instanceof nf || A instanceof rf ? true : A instanceof Vs && A.type !== vo && A.type !== Co;
  }, DF = function(A, e) {
    switch (A) {
      case 0:
        return bo(e);
      case 2:
        return mF(e);
      default:
        return Fo(e);
    }
  }, MF = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, PF = [
    "-apple-system",
    "system-ui"
  ], _F = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return PF.indexOf(e) === -1;
    }) : A;
  }, NF = (function(A) {
    Le(e, A);
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
                GF(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = JA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(Qf), GF = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, VF = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, vn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, vn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, vn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, vn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), $F = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new VF({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new uF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), WF = function(A, e) {
    return e === void 0 && (e = {}), jF(A, e);
  };
  typeof window < "u" && Bf.setContext(window);
  var jF = function(A, e) {
    return ue(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, d, u, f, p, B, y, m, F, C, v, U, x, w, x, I, H, g, T, D, K, V, O, M, j, nA, P, X, AA, rA, R, $;
      return ae(this, function(G) {
        switch (G.label) {
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
            }, o = xa({
              logging: (T = e.logging) !== null && T !== void 0 ? T : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (D = e.windowWidth) !== null && D !== void 0 ? D : r.innerWidth,
              windowHeight: (K = e.windowHeight) !== null && K !== void 0 ? K : r.innerHeight,
              scrollX: (V = e.scrollX) !== null && V !== void 0 ? V : r.pageXOffset,
              scrollY: (O = e.scrollY) !== null && O !== void 0 ? O : r.pageYOffset
            }, a = new nt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new $F(o, a), l = (M = e.foreignObjectRendering) !== null && M !== void 0 ? M : false, c = {
              allowTaint: (j = e.allowTaint) !== null && j !== void 0 ? j : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), d = new Nc(s, A, c), u = d.clonedReferenceElement, u ? [
              4,
              d.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = G.sent(), p = $s(u) || Xb(u) ? bC(u.ownerDocument) : fi(s, u), B = p.width, y = p.height, m = p.left, F = p.top, C = XF(s, u, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: C,
              scale: (P = (nA = e.scale) !== null && nA !== void 0 ? nA : r.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((X = e.x) !== null && X !== void 0 ? X : 0) + m,
              y: ((AA = e.y) !== null && AA !== void 0 ? AA : 0) + F,
              width: (rA = e.width) !== null && rA !== void 0 ? rA : Math.ceil(B),
              height: (R = e.height) !== null && R !== void 0 ? R : Math.ceil(y)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), x = new NF(s, v), [
              4,
              x.render(u)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = G.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + m + "," + F + " with size " + B + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), w = sf(s, u), C === w.styles.backgroundColor && (w.styles.backgroundColor = qe.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), x = new KF(s, v), [
              4,
              x.render(w)
            ];
          case 4:
            U = G.sent(), G.label = 5;
          case 5:
            return (!(($ = e.removeContainer) !== null && $ !== void 0) || $) && (Nc.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, XF = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Mr(A, getComputedStyle(r.documentElement).backgroundColor) : qe.TRANSPARENT, o = r.body ? Mr(A, getComputedStyle(r.body).backgroundColor) : qe.TRANSPARENT, i = typeof t == "string" ? Mr(A, t) : t === null ? qe.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Bt(n) ? Bt(o) ? i : o : n : i;
  }, ea = {
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
  }, zA = function() {
    return zA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, zA.apply(this, arguments);
  }, JF = {
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
  }, zF = function(A, e) {
    var t = zA({}, JF);
    if (A) for (var r in ea) Object.prototype.hasOwnProperty.call(ea, r) && (t[r] = zA(zA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), ea[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = zA(zA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, jc = function(A, e) {
    return A ? zA(zA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : zA({}, e.rbgcpControlBtn);
  }, Gr = function(A, e) {
    return A ? zA(zA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : zA({}, e.rbgcpControlIconBtn);
  }, Vn = function(A, e) {
    return A ? zA(zA(zA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : zA(zA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Me = function() {
    return Me = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Me.apply(this, arguments);
  }, YF = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "";
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), S.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), S.createElement("path", {
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
  }, ZF = function(A) {
    var e = A.onSelect, t = yA().defaultStyles, r = h.useState(null), n = r[0], o = r[1], i = h.useState(false), a = i[0], s = i[1], l = h.useState(false), c = l[0], d = l[1], u = function() {
      var B = document.getElementById("root");
      s(true), WF(B).then(function(y) {
        var m = document.createElement("canvas"), F = m.getContext("2d", {
          willReadFrequently: true
        });
        B && F && (m.width = B.offsetWidth * 2, m.height = B.offsetHeight * 2, F.drawImage(y, 0, 0)), o(F);
      });
    }, f = function(B) {
      if (B.stopPropagation(), n) {
        var y = B.pageX, m = B.pageY, F = y * 2, C = m * 2, v = n.getImageData(F, C, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      d(false), s(false);
    }, p = function() {
      if (d(true), !window.EyeDropper) u();
      else {
        var B = new window.EyeDropper(), y = new window.AbortController();
        B.open({
          signal: y.signal
        }).then(function(m) {
          var F = re(m.sRGBHex), C = F.toRgb(), v = C.r, U = C.g, w = C.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(w, ", 1)")), d(false);
        }).catch(function(m) {
          console.log(m), d(false);
        });
      }
    };
    return S.createElement("div", null, S.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Me(Me({}, t.rbgcpEyedropperBtn), Gr(a, t))
    }, S.createElement(YF, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && S.createElement(yC, null, S.createElement("div", {
      onClick: function(B) {
        return f(B);
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
  }, ta = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, d = h.useState(false), u = d[0], f = d[1], p = h.useState(2), B = p[0], y = p[1], m = e * (i - 18);
    h.useEffect(function() {
      var w;
      y(((w = t == null ? void 0 : t.current) === null || w === void 0 ? void 0 : w.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var F = function() {
      f(false);
    }, C = function(w) {
      u && o(lr(w, c));
    }, v = function(w) {
      u || o(lr(w, c));
    }, U = function() {
      f(true);
    };
    return h.useEffect(function() {
      var w = function() {
        F();
      };
      return window.addEventListener("mouseup", w), function() {
        window.removeEventListener("mouseup", w);
      };
    }, []), S.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, S.createElement("div", {
      onMouseMove: function(w) {
        return C(w);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, S.createElement("div", {
      style: za({
        left: m,
        top: B
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), S.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: B + 2,
        zIndex: 10,
        textShadow: "1px 1px 1px rgba(0,0,0,.6)"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(l),
      onMouseMove: function(w) {
        return C(w);
      },
      onClick: function(w) {
        return v(w);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), S.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(w) {
        return v(w);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, qF = function(A) {
    var e = A.openAdvanced, t = yA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), d = c.s, u = c.l, f = h.useRef(null), p = h.useRef(null), B = h.useRef(null);
    Im(f, a == null ? void 0 : a.h, u * 100, i), Hm(p, a == null ? void 0 : a.h, d * 100, i), Tm(B, a == null ? void 0 : a.h, d * 100, i);
    var y = function(C) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: C / 100,
        l: u
      }).toRgb(), U = v.r, w = v.g, x = v.b;
      o("rgba(".concat(U, ",").concat(w, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(C) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: d,
        l: C / 100
      }).toRgb(), U = v.r, w = v.g, x = v.b;
      o("rgba(".concat(U, ",").concat(w, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    }, F = function(C) {
      var v = re({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: C
      }).toRgb(), U = v.r, w = v.g, x = v.b;
      o("rgba(".concat(U, ",").concat(w, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return S.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, S.createElement("div", {
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
    }, S.createElement(ta, {
      value: d,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: y,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), S.createElement(ta, {
      value: u,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), S.createElement(ta, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: B,
      label: "Brightness",
      callback: F,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, St = function() {
    return St = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, St.apply(this, arguments);
  }, AU = function(A) {
    var e = A.openComparibles, t = yA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), d = function(u) {
      var f = u.toRgb(), p = f.r, B = f.g, y = f.b, m = f.a;
      n("rgba(".concat(p, ",").concat(B, ",").concat(y, ",").concat(m, ")"));
    };
    return S.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, S.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, S.createElement("div", {
      style: St({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), S.createElement("div", {
      style: St({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(u, f) {
      return S.createElement("div", {
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
    })), S.createElement("div", {
      style: St({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(u, f) {
      return S.createElement("div", {
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
    })), S.createElement("div", {
      style: St({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(u, f) {
      return S.createElement("div", {
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
    })), S.createElement("div", {
      style: St({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(u, f) {
      return S.createElement("div", {
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
  }, SA = function() {
    return SA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, SA.apply(this, arguments);
  }, eU = function() {
    var A = yA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return S.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, S.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: SA(SA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, S.createElement(pC, {
      color: i ? "#568CF5" : ""
    })), S.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: SA(SA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, S.createElement(BC, {
      color: a ? "#568CF5" : ""
    })));
  }, tU = function() {
    var A = yA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, sr(parseInt(a), 0, 100));
    };
    return S.createElement("div", {
      style: SA(SA(SA(SA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, S.createElement(vC, null), S.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: SA(SA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, rU = function() {
    var A = yA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = sr(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return S.createElement("div", {
      style: SA(SA(SA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, S.createElement(CC, null), S.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: SA(SA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), S.createElement("div", {
      style: SA(SA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, nU = function() {
    var A = yA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return SA(SA({}, l), {
            value: c === t - 1 ? di(l) : sn(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return S.createElement("div", {
      onClick: i,
      style: SA(SA({}, Gr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, S.createElement(gC, null));
  }, Xc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = yA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return S.createElement("div", {
      style: SA(SA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && S.createElement(eU, null), S.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && S.createElement(rU, null)), !r && S.createElement(tU, null), S.createElement(nU, null));
  }, Yr = function() {
    return Yr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Yr.apply(this, arguments);
  }, oU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = yA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? S.createElement("div", {
      style: {
        width: 1
      }
    }) : S.createElement("div", {
      style: Yr({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, S.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: jc(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), S.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: jc(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, iU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = yA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", d = function(u, f) {
      e && (u.stopPropagation(), o(f), t(false));
    };
    return S.createElement("div", {
      style: Yr({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, S.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(u) {
        return d(u, "rgb");
      },
      style: Vn(n === "rgb", i)
    }, "RGB"), S.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsl");
      },
      style: Vn(n === "hsl", i)
    }, "HSL"), S.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsv");
      },
      style: Vn(n === "hsv", i)
    }, "HSV"), S.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(u) {
        return d(u, "cmyk");
      },
      style: Vn(n === "cmyk", i)
    }, "CMYK"));
  }, aU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, d = c === void 0 ? false : c, u = A.hideColorTypeBtns, f = u === void 0 ? false : u, p = A.hideGradientControls, B = p === void 0 ? false : p, y = A.hideGradientType, m = y === void 0 ? false : y, F = A.hideGradientAngle, C = F === void 0 ? false : F, v = A.hideGradientStop, U = v === void 0 ? false : v, w = yA(), x = w.config, I = w.onChange, H = w.isGradient, g = w.handleChange, T = w.previous, D = w.defaultStyles, K = w.pickerIdSuffix, V = x.defaultColor, O = x.defaultGradient, M = h.useState(false), j = M[0], nA = M[1], P = h.useState(false), X = P[0], AA = P[1], rA = h.useState(false), R = rA[0], $ = rA[1], G = o && a && l && d, z = (e = T == null ? void 0 : T.color) !== null && e !== void 0 ? e : V, dA = (t = T == null ? void 0 : T.gradient) !== null && t !== void 0 ? t : O, iA = function() {
      I(z);
    }, eA = function() {
      I(dA);
    }, J = o && a && l && d, oA = J && f;
    return oA ? H && !B ? S.createElement(Xc, {
      hideGradientType: m,
      hideGradientAngle: C,
      hideGradientStop: U
    }) : null : S.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, S.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(K)
    }, S.createElement(oU, {
      hideColorTypeBtns: f,
      setGradient: eA,
      isGradient: H,
      setSolid: iA,
      locales: r
    }), !J && S.createElement("div", {
      style: Yr({
        display: G ? "none" : ""
      }, D.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(K)
    }, !o && S.createElement(ZF, {
      onSelect: g
    }), !a && S.createElement("div", {
      id: "rbgcp-advanced-btn".concat(K),
      onClick: function() {
        return $(!R);
      },
      style: Gr(R, D)
    }, S.createElement(hC, {
      color: R ? "#568CF5" : ""
    })), !l && S.createElement("div", {
      style: Gr(j, D),
      onClick: function() {
        return nA(!j);
      },
      id: "rbgcp-comparibles-btn".concat(K)
    }, S.createElement(mC, {
      color: j ? "#568CF5" : ""
    })), !d && S.createElement("div", {
      id: "rbgcp-color-model-btn".concat(K),
      onClick: function() {
        return AA(!X);
      },
      style: Gr(X, D)
    }, S.createElement(wC, {
      color: X ? "#568CF5" : ""
    }), S.createElement(iU, {
      openInputType: X,
      setOpenInputType: AA
    })))), !a && S.createElement(qF, {
      openAdvanced: R
    }), !l && S.createElement(AU, {
      openComparibles: j
    }), H && !B && S.createElement(Xc, {
      hideGradientType: m,
      hideGradientAngle: C,
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
  }, sU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = yA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, d = a === t, u = (i - 18) / 100, f = function(B) {
      var y = o == null ? void 0 : o.map(function(m, F) {
        return Pe(Pe({}, m), {
          value: F === B ? di(m) : sn(m)
        });
      });
      c(y);
    }, p = function(B) {
      B.stopPropagation(), f(t), r(true);
    };
    return S.createElement("div", {
      onMouseDown: function(B) {
        return p(B);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Pe(Pe({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * u
      })
    }, S.createElement("div", {
      style: Pe(Pe({}, s.rbgcpGradientHandle), d ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, d && S.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, lU = function() {
    var A = yA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = h.useState(false), d = c[0], u = c[1];
    function f(C) {
      return C.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(C) {
      var v, U = lr(C, l), w = (v = Jc(Jc([], t.map(function(x) {
        return Pe(Pe({}, x), {
          value: sn(x)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(x, I) {
        return x.left - I.left;
      });
      s(w);
    }, B = function() {
      u(false);
    }, y = function(C) {
      d || (p(C), u(true));
    }, m = function(C) {
      d && i(o, lr(C, l));
    }, F = function() {
      B();
    };
    return h.useEffect(function() {
      return window.addEventListener("mouseup", F), function() {
        window.removeEventListener("mouseup", F);
      };
    }), S.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, S.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(C) {
        return y(C);
      },
      onMouseMove: function(C) {
        return m(C);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(C, v) {
      return S.createElement(sU, {
        i: v,
        left: C.left,
        key: "".concat(v, "-").concat(C),
        setDragging: u
      });
    }));
  }, cU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, d = A.hidePickerSquare, u = A.hideGradientType, f = A.hideGradientStop, p = A.hideGradientAngle, B = A.hideColorTypeBtns, y = A.hideAdvancedSliders, m = A.hideGradientControls, F = yA(), C = F.isGradient, v = F.pickerIdSuffix;
    return S.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !d && S.createElement(lC, null), !s && S.createElement(aU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: u,
      hideGradientStop: f,
      hideColorTypeBtns: B,
      hideGradientAngle: p,
      hideAdvancedSliders: y,
      hideGradientControls: m
    }), C && S.createElement(lU, null), !r && S.createElement(Lm, null), !i && S.createElement(cC, null), !n && S.createElement(Nm, null), !o && S.createElement(fC, {
      presets: t
    }));
  }, Eo = function() {
    return Eo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Eo.apply(this, arguments);
  };
  function uU(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, d = A.hidePresets, u = d === void 0 ? false : d, f = A.hideHue, p = f === void 0 ? false : f, B = A.presets, y = B === void 0 ? [] : B, m = A.hideEyeDrop, F = m === void 0 ? false : m, C = A.hideAdvancedSliders, v = C === void 0 ? false : C, U = A.hideColorGuide, w = U === void 0 ? false : U, x = A.hideInputType, I = x === void 0 ? false : x, H = A.hideColorTypeBtns, g = H === void 0 ? false : H, T = A.hideGradientType, D = T === void 0 ? false : T, K = A.hideGradientAngle, V = K === void 0 ? false : K, O = A.hideGradientStop, M = O === void 0 ? false : O, j = A.hideGradientControls, nA = j === void 0 ? false : j, P = A.locales, X = P === void 0 ? uC : P, AA = A.width, rA = AA === void 0 ? 294 : AA, R = A.height, $ = R === void 0 ? 294 : R, G = A.style, z = G === void 0 ? {} : G, dA = A.className, iA = A.disableDarkMode, eA = iA === void 0 ? false : iA, J = A.disableLightMode, oA = J === void 0 ? false : J, aA = A.hidePickerSquare, Q = aA === void 0 ? false : aA, E = A.showHexAlpha, b = E === void 0 ? false : E, _ = A.config, W = _ === void 0 ? {} : _, N = ym(r), sA = typeof window > "u" || eA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), cA = zF(sA, z), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return S.createElement("div", {
      className: dA,
      style: Eo(Eo({}, cA.body), {
        width: rA
      })
    }, S.createElement(xm, {
      value: N,
      onChange: n,
      squareWidth: rA,
      passedConfig: W,
      squareHeight: $,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: b,
      defaultStyles: cA,
      pickerIdSuffix: fA
    }, S.createElement(cU, {
      hideControls: i,
      hideInputs: s,
      hidePresets: u,
      hideOpacity: c,
      hideHue: p,
      presets: y,
      hideEyeDrop: F,
      hideAdvancedSliders: v,
      hideColorGuide: w,
      hideInputType: I,
      hideColorTypeBtns: g,
      hideGradientType: D,
      hideGradientAngle: V,
      hideGradientStop: M,
      hideGradientControls: nA,
      hidePickerSquare: Q,
      locales: X
    })));
  }
  function dU(A) {
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
  function fU(A) {
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
  function qt(A) {
    if (!A || typeof A != "string") return null;
    const e = A.trim();
    return e.startsWith("#") ? dU(e) : e.toLowerCase().startsWith("rgb") ? fU(e) : null;
  }
  function gU(A) {
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
  function pU(A) {
    if (!A || A.length < 2) return null;
    const e = A.find((u) => u.position === 50);
    if (e) {
      const u = qt(e.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    let t = null, r = null;
    for (let u = 0; u < A.length; u++) if (A[u].position <= 50 && (t = A[u]), A[u].position > 50 && !r) {
      r = A[u];
      break;
    }
    if (!r && t) {
      const u = qt(t.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t && r) {
      const u = qt(r.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t || !r) return null;
    const n = qt(t.color), o = qt(r.color);
    if (!n || !o) return null;
    const i = r.position - t.position;
    if (i === 0) {
      const u = o;
      return u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})`;
    }
    const a = (50 - t.position) / i, s = Math.round(n.r + (o.r - n.r) * a), l = Math.round(n.g + (o.g - n.g) * a), c = Math.round(n.b + (o.b - n.b) * a), d = Math.round((n.a + (o.a - n.a) * a) * 1e3) / 1e3;
    return d === 1 ? `rgb(${s}, ${l}, ${c})` : `rgba(${s}, ${l}, ${c}, ${d})`;
  }
  zc = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    if (e === "") return null;
    if (!/^(linear-gradient|radial-gradient)\(/i.test(e)) return qt(e) ? e : null;
    try {
      const n = gU(e);
      return n ? pU(n) : null;
    } catch {
      return null;
    }
  };
  function ra(A) {
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
  $n = function({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, [o, i] = h.useState(e[n] || ""), [a, s] = h.useState(false), [l, c] = h.useState(null), d = h.useRef(null), [u, f] = h.useState(null), p = h.useRef(false), B = h.useRef(e[n]), y = r.context.theme, m = (w) => {
      if (w == null) {
        i(""), s(false), t({
          [n]: null
        }), p.current = false;
        return;
      }
      if (typeof w != "string") {
        s(true);
        return;
      }
      if (w.trim() === "") {
        i(""), s(false), t({
          [n]: null
        }), p.current = false;
        return;
      }
      const I = ra(w);
      if (i(w), I.isValid) if (A.noGradient === true) {
        const H = zc(I.normalizedValue);
        if (H === null) {
          s(true);
          return;
        }
        s(false), B.current = H, t({
          [n]: H
        });
      } else s(false), t({
        [n]: I.normalizedValue || null
      });
      else s(true);
    }, F = (w) => m(w), C = (w) => m(w.target.value), v = () => m(null), U = !!l;
    return h.useEffect(() => {
      const w = e[n];
      if (w !== B.current) {
        B.current = w;
        const x = w || "";
        i(x), s(false), (!x || x.trim() === "") && (p.current = false);
      }
    }, [
      e[n]
    ]), h.useEffect(() => {
      if (!U || !u) return;
      const w = new ResizeObserver(() => {
        var _a2;
        (_a2 = d.current) == null ? void 0 : _a2.updatePosition();
      });
      return w.observe(u), () => {
        w.disconnect();
      };
    }, [
      U,
      u
    ]), h.useEffect(() => {
      if (!U || p.current) return;
      const w = e[n];
      if (w && w.trim() !== "") {
        p.current = true;
        return;
      }
      let x = null;
      if (A.fallbackFields && Array.isArray(A.fallbackFields) && A.fallbackFields.length > 0) for (const I of A.fallbackFields) {
        const H = e[I];
        if (H && typeof H == "string") {
          const g = ra(H);
          if (g.isValid && g.normalizedValue.trim() !== "") {
            x = g.normalizedValue;
            break;
          }
        }
      }
      if (!x && (!A.fallbackFields || A.fallbackFields.length > 0) && (x = y.palette.primary.main), x) {
        const I = ra(x);
        if (I.isValid) if (A.noGradient === true) {
          const H = zc(I.normalizedValue);
          H !== null && (i(x), s(false), B.current = H, t({
            [n]: H
          }));
        } else i(x), s(false), t({
          [n]: x
        });
      }
      p.current = true;
    }, [
      U,
      e,
      n,
      A.fallbackFields,
      A.noGradient,
      y.palette.primary.main,
      t
    ]), L.jsx(L.Fragment, {
      children: L.jsxs(qu, {
        theme: y,
        children: [
          L.jsxs(He, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              L.jsx(dm, {
                variant: "standard",
                fullWidth: true,
                value: o,
                error: a,
                helperText: a ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: C,
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
              o && L.jsx(Zh, {
                onClick: v,
                title: Ua.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: L.jsx(pm, {})
              }),
              L.jsx(He, {
                onClick: (w) => {
                  c(w.currentTarget);
                },
                title: Ua.t("choose_color"),
                sx: {
                  mt: o ? "4px" : "-2px",
                  px: "4px",
                  py: o ? "4px" : "3px",
                  backgroundColor: o ? y.name === "light" ? y.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: a ? `1px solid ${y.palette.error.main}` : o ? `1px solid ${y.name === "light" ? y.palette.grey[400] : y.palette.common.black}` : `1px dashed ${y.name === "light" ? y.palette.grey[400] : y.palette.text.secondary}`,
                  opacity: a ? 0.6 : 1
                },
                children: L.jsx(He, {
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
          L.jsx(ad, {
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
            children: L.jsx(He, {
              ref: f,
              sx: {
                borderRadius: "6px"
              },
              children: L.jsx(uU, {
                value: o || y.palette.primary.main,
                onChange: F,
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
  let Yc, BU, na, hU, mU, vU;
  Yc = (A) => {
    if (!A || typeof A != "string") return false;
    const e = A.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  RU = (A) => {
    const { groupName: e = "", allFields: t = true } = A || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Ce, {
          dividerText: "icon"
        }),
        hidden: "data.noIcon"
      },
      {
        name: `icon${e}`,
        label: "icon",
        type: "image",
        default: ""
      },
      {
        name: `iconSmall${e}`,
        label: "small_icon",
        type: "icon64",
        default: ""
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
          return (s === "" || s === "Active") && (a = false), i !== void 0 && (a = !o.iconColor && !o.enableIconColorMask && !o[`iconColor${i}`] && !Yc(l) && !Yc(c)), a;
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
        component: (o, i, a, s) => L.jsx($n, {
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
        hidden: "data.noIcon"
      },
      {
        name: `iconYOffset${e}`,
        label: "icon_y_offset",
        type: "text",
        hidden: "data.noIcon"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Ce, {
          dividerText: "header"
        }),
        hidden: (o, i) => o.noHeader && !t
      },
      {
        name: `noHeader${e}`,
        type: "checkbox",
        label: "no_header",
        default: false
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
        component: () => L.jsx(Ce, {
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
        component: () => L.jsx(Ce, {
          dividerText: "footer"
        }),
        hidden: (o, i) => o.noFooter && !t
      },
      {
        name: `noFooter${e}`,
        label: "no_footer",
        type: "checkbox",
        default: false
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
        component: () => L.jsx(Ce, {
          dividerText: "characteristics"
        })
      },
      {
        name: `noCard${e}`,
        label: "without_card",
        type: "checkbox",
        default: false
      },
      {
        name: `squaredCorner${e}`,
        label: "squared_corner",
        type: "checkbox",
        default: false
      },
      {
        name: `textColor${e}`,
        label: "text_color",
        default: "",
        type: "custom",
        fallbackFields: [
          ""
        ],
        component: (o, i, a, s) => L.jsx($n, {
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
        component: () => L.jsx(Ce, {})
      },
      {
        name: `outlined${e}`,
        label: "outlined",
        type: "checkbox",
        default: false
      },
      {
        name: `outlinedFrame${e}`,
        label: "outlined_frame",
        type: "checkbox",
        default: false
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(Ce, {})
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
        component: () => L.jsx(Ce, {
          dividerText: "geometry"
        })
      },
      {
        name: `square${e}`,
        label: "square",
        type: "checkbox",
        hidden: "data.circle || data.ellipse",
        default: false
      },
      {
        name: `ellipse${e}`,
        label: "ellipse",
        type: "checkbox",
        hidden: "data.circle || data.square",
        default: false
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
        component: () => L.jsx(Ce, {
          dividerText: "background"
        })
      },
      {
        name: `background${e}`,
        label: "background",
        default: "",
        type: "custom",
        fallbackFields: [],
        component: (o, i, a, s) => L.jsx($n, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(Ce, {
          dividerText: "frame_background"
        })
      },
      {
        name: `frameBackground${e}`,
        label: "frame_background",
        default: "",
        type: "custom",
        fallbackFields: [],
        component: (o, i, a, s) => L.jsx($n, {
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
  BU = async (A, e) => {
    var _a2;
    const t = e._id.split(".");
    for (let r = t.length; r > 0; r--) try {
      const n = await A.getObject(t.slice(0, r).join("."));
      if ((_a2 = n == null ? void 0 : n.common) == null ? void 0 : _a2.icon) return n.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  na = (A, e = "oid") => {
    Object.keys(A).forEach((r) => {
      r.startsWith(e) && r.endsWith("Object") && delete A[r];
    });
    const t = [
      "iconSmall",
      "icon",
      "iconSize",
      "iconColor",
      "iconHover",
      "iconXOffset",
      "iconYOffset",
      "noHeader",
      "header",
      "headerSize",
      "alias",
      "value",
      "valueSize",
      "noFooter",
      "footer",
      "footerSize",
      "noCard",
      "squaredCorner",
      "textColor",
      "outlined",
      "outlinedFrame",
      "basePadding",
      "baseElevation",
      "square",
      "ellipse",
      "circle",
      "background",
      "backgroundColor",
      "frameBackground",
      "frameBackgroundColor"
    ];
    if (e === "oid") {
      delete A.icon, delete A.write;
      const r = typeof A.values_count == "number" ? A.values_count : 0;
      for (let n = 1; n <= r; n++) t.forEach((o) => {
        delete A[`${o}${n}`];
      });
      A.values_count = 0;
    }
  };
  hU = (A, e) => {
    switch (e) {
      case "boolean":
        return A === "true";
      case "number":
        return Number(A);
      case "string":
        return String(A);
      case "mixed":
        return A === "true" ? true : A === "false" ? false : !isNaN(Number(A)) && A !== "" ? Number(A) : String(A);
      default:
        return String(A);
    }
  };
  wU = (A, e = "oid") => async (t, r, n, o) => {
    if (!r[e]) {
      na(r, e), setTimeout(() => n(r), 100);
      return;
    }
    try {
      const i = await o.getObject(r[e]);
      if (!i) {
        na(r, e), setTimeout(() => n(r), 100);
        return;
      }
      const a = i.common.type;
      if (!A.includes(a)) return;
      const s = {
        _id: i._id,
        name: i.common.name || "",
        type: a,
        icon: await BU(o, i),
        write: i.common.write,
        onlyDisplay: !i.common.write,
        unit: i.common.unit || "",
        minValue: i.common.min || 0,
        maxValue: i.common.max || 100
      };
      if (r[`${e}Object`] = s, r.icon = s.icon, r.write = s.write, r.onlyDisplay = s.onlyDisplay, r.minValue = s.minValue, r.maxValue = s.maxValue, i.common.states) {
        let l = i.common.states;
        if (Array.isArray(l)) {
          const c = {};
          l.forEach((d) => {
            c[d] = d;
          }), l = c;
        }
        r[`${e}Object`].commonStates = l, e === "oid" && (r.values_count = Object.keys(l).length, Object.entries(l).forEach(([c, d], u) => {
          const f = u + 1;
          r[`value${f}`] = hU(c, a), r[`alias${f}`] = String(d);
        }));
      } else a === "boolean" && e === "oid" ? (r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      setTimeout(() => n(r), 100);
    } catch (i) {
      console.error(`Error handling OID change for ${r[e]}:`, i), na(r, e), setTimeout(() => n(r), 100);
    }
  };
  kU = (A) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: wU(A)
    },
    {
      label: "",
      type: "custom",
      component: () => L.jsx(Ce, {}),
      hidden: (e, t) => e.oidObject === void 0
    },
    {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (e, t) => e.oidObject === void 0,
      onChange: async (e, t, r, n) => {
        t.oidObject && (t.oidObject.unit = t.unit || "", setTimeout(() => r(t), 100));
      }
    },
    {
      label: "",
      type: "custom",
      component: () => L.jsx(Ce, {}),
      hidden: (e, t) => {
        var _a2;
        return ((_a2 = e.oidObject) == null ? void 0 : _a2.type) === "boolean" || e.oidObject === void 0;
      }
    },
    {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (e, t) => {
        var _a2;
        return ((_a2 = e.oidObject) == null ? void 0 : _a2.type) === "boolean" || e.oidObject === void 0;
      }
    }
  ];
  mU = () => {
    const { isSignalVisible: A, refService: e, widget: t } = h.useContext(an), r = h.useMemo(() => {
      const o = [], i = Number(t.data["signals-count"]) || 0;
      for (let a = 0; a < i; a++) A(a) && o.push(a);
      return o;
    }, [
      t.data,
      A
    ]), n = h.useMemo(() => {
      const o = {};
      return r.forEach((i) => {
        o[i] = t.data[`signals-color-${i}`];
      }), o;
    }, [
      t.data,
      r
    ]);
    h.useEffect(() => {
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
  CU = (A, e = 28) => {
    const [t, r] = h.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), n = h.useCallback((i) => {
      if (i.length === 0) return;
      const a = i[0], { width: s, height: l } = a.contentRect, c = Math.round(s), d = Math.round(l), u = c <= d + e + 12 ? c - e - 12 : d;
      r({
        width: c,
        height: d,
        maxWidth: u
      });
    }, [
      e
    ]), o = h.useMemo(() => A ? typeof A == "object" && "current" in A ? A.current : A : null, [
      A
    ]);
    return h.useEffect(() => {
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
  vU = (A) => {
    const { widget: e } = h.useContext(an), [t, r] = h.useState("100%"), [n, o] = h.useState("100%"), { width: i, height: a } = CU(A), s = h.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), l = h.useMemo(() => s.basePadding * 16, [
      s.basePadding
    ]);
    return h.useEffect(() => {
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
  Wn = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    return e === "" ? null : /^(linear-gradient|radial-gradient)\(/i.test(e) ? A : null;
  };
  QU = h.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = h.useRef(null), s = h.useRef(null), [l, c] = h.useState(null), d = h.useRef(null), u = h.useRef(null), f = h.useContext(an);
    if (!f) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: p, widget: B } = f, { backgroundStyles: y, borderStyles: m } = dd(B.style), { width: F, height: C } = vU(l);
    mU();
    const v = B.data.oidObject, U = v == null ? void 0 : v._id, w = h.useMemo(() => {
      if (B.data.noFooter) return "";
      const H = t || t === 0 || String(t) === "false" ? `${t}${(v == null ? void 0 : v.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || H || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      t,
      v == null ? void 0 : v.unit,
      B.data.noFooter
    ]), x = h.useMemo(() => fo({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...y,
      background: p ? e.frameBackground : "transparent",
      borderColor: p ? "" : e.frameBackground || (m == null ? void 0 : m["border-color"])
    }), [
      y,
      m,
      e.frameBackground,
      p
    ]), I = h.useMemo(() => fo({
      overflow: "hidden",
      width: F,
      height: C,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: p ? n && e.background : "transparent",
      borderColor: p ? "" : e.background || (m == null ? void 0 : m["border-color"]),
      borderRadius: B.data.circle || B.data.ellipse ? "50%" : void 0,
      ...o
    }), [
      F,
      C,
      p,
      e.background,
      m,
      n,
      B.data.circle,
      B.data.ellipse,
      o
    ]);
    return h.useEffect(() => {
      B.data.noHeader || !d.current || (d.current.innerHTML = e.header);
    }, [
      e.header,
      B.data.noHeader
    ]), h.useEffect(() => {
      B.data.noFooter || !u.current || (u.current.innerHTML = String(w));
    }, [
      w,
      B.data.noFooter
    ]), h.useImperativeHandle(i, () => ({
      get paper0() {
        return (a == null ? void 0 : a.current) ?? null;
      },
      get paper1() {
        return (s == null ? void 0 : s.current) ?? null;
      },
      get header() {
        return (d == null ? void 0 : d.current) ?? null;
      }
    })), L.jsxs(wa, {
      ref: a,
      className: "BASE-PAPER-0",
      square: B.data.squaredCorner,
      variant: B.data.outlinedFrame ? "outlined" : "elevation",
      sx: x,
      children: [
        !!r && L.jsxs(L.Fragment, {
          children: [
            L.jsx(He, {
              sx: {
                width: B.data.noHeader ? "0%" : "100%",
                height: B.data.noHeader ? "0%" : "auto",
                mt: (B.data.basePadding ?? 8) / 2,
                mb: -(B.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Yn, {
                ref: d,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: Wn(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Wn(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            }),
            L.jsx(He, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: B.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: L.jsx(wa, {
                ref: s,
                className: "BASE-PAPER-1",
                elevation: B.data.outlined ? 0 : Number(B.data.baseElevation) || 0,
                square: !B.data.basePadding || B.data.squaredCorner,
                variant: B.data.outlined ? "outlined" : "elevation",
                sx: I,
                children: A
              })
            }),
            L.jsx(He, {
              sx: {
                width: B.data.noFooter ? "0%" : "100%",
                height: B.data.noFooter ? "0%" : "auto",
                mt: -(B.data.basePadding ?? 8) / 2,
                mb: (B.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Yn, {
                ref: u,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: Wn(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Wn(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            })
          ]
        }),
        !r && L.jsx(He, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: L.jsx(Yn, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: U ? `${U} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  QU.displayName = "CollectionBase";
  let Zc;
  yU = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  bU = (A, e, t) => !t && !yU(A) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  Zc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  FU = ({ src: A, style: e = {}, alt: t = "" }) => {
    const r = A && A !== "undefined" && A !== null ? A : Zc;
    return L.jsx("img", {
      src: r,
      alt: t,
      style: e,
      onError: (n) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const o = n.currentTarget;
        o.onerror = null, o.src = Zc;
      }
    });
  };
  KU = ({ data: A, widget: e }) => {
    const r = h.useContext(an).theme, n = A.icon, o = A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? L.jsx(FU, {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${A.iconYOffsetCm})`,
        right: `calc(0px - ${A.iconXOffsetCm})`,
        height: A.iconSizeCm,
        ...bU(n, o, !!A.forceColorMaskCm)
      }
    }) : null;
  };
});
export {
  Zu as $,
  QU as A,
  v0 as B,
  Ce as C,
  uo as D,
  KU as E,
  h0 as F,
  Ua as G,
  RU as H,
  Zh as I,
  kU as J,
  LU as K,
  yw as L,
  X0 as M,
  $n as N,
  yU as O,
  wa as P,
  zc as Q,
  dl as R,
  FU as S,
  Yn as T,
  $p as U,
  Lt as V,
  Te as W,
  Du as X,
  gl as Y,
  aB as Z,
  eB as _,
  __tla,
  IA as a,
  mt as a0,
  Cs as a1,
  ms as a2,
  ua as a3,
  lh as a4,
  wU as a5,
  TU as a6,
  CU as a7,
  ud as a8,
  fr as a9,
  sl as aa,
  dr as ab,
  Pp as ac,
  hs as ad,
  Eu as ae,
  et as af,
  IU as ag,
  fs as ah,
  YA as ai,
  SU as aj,
  ps as ak,
  rn as al,
  pa as am,
  jh as an,
  dd as ao,
  le as b,
  Ad as c,
  pA as d,
  kA as e,
  Es as f,
  RA as g,
  ii as h,
  hA as i,
  L as j,
  tt as k,
  pe as l,
  OA as m,
  Oh as n,
  ir as o,
  Ui as p,
  Qa as q,
  $e as r,
  lA as s,
  HU as t,
  KA as u,
  an as v,
  He as w,
  Ew as x,
  bU as y,
  Wn as z
};
