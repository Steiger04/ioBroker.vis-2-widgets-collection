import { v as g, a as Rn, R as ot, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as wi } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as $s } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let fd, tt, dp, wr, Ko, bt, Vd, Ho, ud, lp, ne, pt, hf, Ld, Bt, Ye, bu, Vt, Hu, Ts, up, ze, xt, dc, zt, yn, Yd, xs, or, bo, Wn, $d, Ge, mf, cs, vo, fp, ys, Oe, ja, Ic, vt, mp, ao, bn, ic, et, Lt, Jn, ar, Ht, Ns, Co, uf, cp, Wo, dr, ou, Xl, rs, at, ed, po, gd, pp, Qc, vf, Xi, st, ip, oo, op, so, cr, nn, dt, qo, Nc, os, Pr, co, tc, as, Dn, bs, $n, Dl, Wl, Vr, sp, ap, hp, Ou, nu, _n, ge, ve, J, Se, O, fc, uo, fo, Be, xo, ke, cf, go, G, Pf, Re, Ss, mo, Ir, lu, vs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Ri = {
    exports: {}
  }, $r = {};
  var Is = g, Ms = /* @__PURE__ */ Symbol.for("react.element"), Os = /* @__PURE__ */ Symbol.for("react.fragment"), _s = Object.prototype.hasOwnProperty, Fs = Is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bs = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function ki(e, t, r) {
    var n, o = {}, i = null, s = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (n in t) _s.call(t, n) && !Bs.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps) for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
    return {
      $$typeof: Ms,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: Fs.current
    };
  }
  $r.Fragment = Os;
  $r.jsx = ki;
  $r.jsxs = ki;
  Ri.exports = $r;
  O = Ri.exports;
  let er, Et, Pt, Tt, At, $t;
  er = {
    black: "#000",
    white: "#fff"
  };
  Et = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  };
  Pt = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  };
  Tt = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  };
  At = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  };
  $t = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  };
  Ht = {
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  };
  Ns = {
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
  function it(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  }
  Ir = "$$material";
  wr = function() {
    return wr = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, wr.apply(null, arguments);
  };
  function Ls(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function zs(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  var Ds = (function() {
    function e(r) {
      var n = this;
      this._insertTag = function(o) {
        var i;
        n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
      }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function(n) {
      n.forEach(this._insertTag);
    }, t.insert = function(n) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zs(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var i = Ls(o);
        try {
          i.insertRule(n, i.cssRules.length);
        } catch {
        }
      } else o.appendChild(document.createTextNode(n));
      this.ctr++;
    }, t.flush = function() {
      this.tags.forEach(function(n) {
        var o;
        return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
      }), this.tags = [], this.ctr = 0;
    }, e;
  })(), Fe = "-ms-", Rr = "-moz-", ie = "-webkit-", Ei = "comm", Hn = "rule", Un = "decl", js = "@import", Pi = "@keyframes", Ws = "@layer", Hs = Math.abs, Mr = String.fromCharCode, Us = Object.assign;
  function Vs(e, t) {
    return Me(e, 0) ^ 45 ? (((t << 2 ^ Me(e, 0)) << 2 ^ Me(e, 1)) << 2 ^ Me(e, 2)) << 2 ^ Me(e, 3) : 0;
  }
  function Ti(e) {
    return e.trim();
  }
  function Ks(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function se(e, t, r) {
    return e.replace(t, r);
  }
  function kn(e, t) {
    return e.indexOf(t);
  }
  function Me(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function tr(e, t, r) {
    return e.slice(t, r);
  }
  function Xe(e) {
    return e.length;
  }
  function Vn(e) {
    return e.length;
  }
  function fr(e, t) {
    return t.push(e), e;
  }
  function Gs(e, t) {
    return e.map(t).join("");
  }
  var Or = 1, Ft = 1, Ai = 0, Le = 0, Ae = 0, Nt = "";
  function _r(e, t, r, n, o, i, s) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: o,
      children: i,
      line: Or,
      column: Ft,
      length: s,
      return: ""
    };
  }
  function Ut(e, t) {
    return Us(_r("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function qs() {
    return Ae;
  }
  function Ys() {
    return Ae = Le > 0 ? Me(Nt, --Le) : 0, Ft--, Ae === 10 && (Ft = 1, Or--), Ae;
  }
  function je() {
    return Ae = Le < Ai ? Me(Nt, Le++) : 0, Ft++, Ae === 10 && (Ft = 1, Or++), Ae;
  }
  function Je() {
    return Me(Nt, Le);
  }
  function vr() {
    return Le;
  }
  function ir(e, t) {
    return tr(Nt, e, t);
  }
  function rr(e) {
    switch (e) {
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
  function $i(e) {
    return Or = Ft = 1, Ai = Xe(Nt = e), Le = 0, [];
  }
  function Ii(e) {
    return Nt = "", e;
  }
  function xr(e) {
    return Ti(ir(Le - 1, En(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Xs(e) {
    for (; (Ae = Je()) && Ae < 33; ) je();
    return rr(e) > 2 || rr(Ae) > 3 ? "" : " ";
  }
  function Qs(e, t) {
    for (; --t && je() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); ) ;
    return ir(e, vr() + (t < 6 && Je() == 32 && je() == 32));
  }
  function En(e) {
    for (; je(); ) switch (Ae) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && En(Ae);
        break;
      case 40:
        e === 41 && En(e);
        break;
      case 92:
        je();
        break;
    }
    return Le;
  }
  function Zs(e, t) {
    for (; je() && e + Ae !== 57; ) if (e + Ae === 84 && Je() === 47) break;
    return "/*" + ir(t, Le - 1) + "*" + Mr(e === 47 ? e : je());
  }
  function Js(e) {
    for (; !rr(Je()); ) je();
    return ir(e, Le);
  }
  function ea(e) {
    return Ii(Sr("", null, null, null, [
      ""
    ], e = $i(e), 0, [
      0
    ], e));
  }
  function Sr(e, t, r, n, o, i, s, a, u) {
    for (var l = 0, h = 0, m = s, y = 0, S = 0, b = 0, C = 1, w = 1, R = 1, E = 0, v = "", x = o, T = i, P = n, A = v; w; ) switch (b = E, E = je()) {
      case 40:
        if (b != 108 && Me(A, m - 1) == 58) {
          kn(A += se(xr(E), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += xr(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Xs(b);
        break;
      case 92:
        A += Qs(vr() - 1, 7);
        continue;
      case 47:
        switch (Je()) {
          case 42:
          case 47:
            fr(ta(Zs(je(), vr()), t, r), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * C:
        a[l++] = Xe(A) * R;
      case 125 * C:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            w = 0;
          case 59 + h:
            R == -1 && (A = se(A, /\f/g, "")), S > 0 && Xe(A) - m && fr(S > 32 ? To(A + ";", n, r, m - 1) : To(se(A, " ", "") + ";", n, r, m - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (fr(P = Po(A, t, r, l, h, o, a, v, x = [], T = [], m), i), E === 123) if (h === 0) Sr(A, t, P, P, x, i, m, a, T);
            else switch (y === 99 && Me(A, 3) === 110 ? 100 : y) {
              case 100:
              case 108:
              case 109:
              case 115:
                Sr(e, P, P, n && fr(Po(e, P, P, 0, 0, o, a, v, o, x = [], m), T), o, T, m, a, n ? x : T);
                break;
              default:
                Sr(A, P, P, P, [
                  ""
                ], T, 0, a, T);
            }
        }
        l = h = S = 0, C = R = 1, v = A = "", m = s;
        break;
      case 58:
        m = 1 + Xe(A), S = b;
      default:
        if (C < 1) {
          if (E == 123) --C;
          else if (E == 125 && C++ == 0 && Ys() == 125) continue;
        }
        switch (A += Mr(E), E * C) {
          case 38:
            R = h > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            a[l++] = (Xe(A) - 1) * R, R = 1;
            break;
          case 64:
            Je() === 45 && (A += xr(je())), y = Je(), h = m = Xe(v = A += Js(vr())), E++;
            break;
          case 45:
            b === 45 && Xe(A) == 2 && (C = 0);
        }
    }
    return i;
  }
  function Po(e, t, r, n, o, i, s, a, u, l, h) {
    for (var m = o - 1, y = o === 0 ? i : [
      ""
    ], S = Vn(y), b = 0, C = 0, w = 0; b < n; ++b) for (var R = 0, E = tr(e, m + 1, m = Hs(C = s[b])), v = e; R < S; ++R) (v = Ti(C > 0 ? y[R] + " " + E : se(E, /&\f/g, y[R]))) && (u[w++] = v);
    return _r(e, t, r, o === 0 ? Hn : a, u, l, h);
  }
  function ta(e, t, r) {
    return _r(e, t, r, Ei, Mr(qs()), tr(e, 2, -2), 0);
  }
  function To(e, t, r, n) {
    return _r(e, t, r, Un, tr(e, 0, n), tr(e, n + 1, -1), n);
  }
  function Ot(e, t) {
    for (var r = "", n = Vn(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
    return r;
  }
  function ra(e, t, r, n) {
    switch (e.type) {
      case Ws:
        if (e.children.length) break;
      case js:
      case Un:
        return e.return = e.return || e.value;
      case Ei:
        return "";
      case Pi:
        return e.return = e.value + "{" + Ot(e.children, n) + "}";
      case Hn:
        e.value = e.props.join(",");
    }
    return Xe(r = Ot(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function na(e) {
    var t = Vn(e);
    return function(r, n, o, i) {
      for (var s = "", a = 0; a < t; a++) s += e[a](r, n, o, i) || "";
      return s;
    };
  }
  function oa(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  function Mi(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var ia = function(t, r, n) {
    for (var o = 0, i = 0; o = i, i = Je(), o === 38 && i === 12 && (r[n] = 1), !rr(i); ) je();
    return ir(t, Le);
  }, sa = function(t, r) {
    var n = -1, o = 44;
    do
      switch (rr(o)) {
        case 0:
          o === 38 && Je() === 12 && (r[n] = 1), t[n] += ia(Le - 1, r, n);
          break;
        case 2:
          t[n] += xr(o);
          break;
        case 4:
          if (o === 44) {
            t[++n] = Je() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += Mr(o);
      }
    while (o = je());
    return t;
  }, aa = function(t, r) {
    return Ii(sa($i(t), r));
  }, Ao = /* @__PURE__ */ new WeakMap(), la = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ao.get(n)) && !o) {
        Ao.set(t, true);
        for (var i = [], s = aa(r, i), a = n.props, u = 0, l = 0; u < s.length; u++) for (var h = 0; h < a.length; h++, l++) t.props[l] = i[u] ? s[u].replace(/&\f/g, a[h]) : a[h] + " " + s[u];
      }
    }
  }, ca = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function Oi(e, t) {
    switch (Vs(e, t)) {
      case 5103:
        return ie + "print-" + e + e;
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
        return ie + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return ie + e + Rr + e + Fe + e + e;
      case 6828:
      case 4268:
        return ie + e + Fe + e + e;
      case 6165:
        return ie + e + Fe + "flex-" + e + e;
      case 5187:
        return ie + e + se(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + Fe + "flex-$1$2") + e;
      case 5443:
        return ie + e + Fe + "flex-item-" + se(e, /flex-|-self/, "") + e;
      case 4675:
        return ie + e + Fe + "flex-line-pack" + se(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return ie + e + Fe + se(e, "shrink", "negative") + e;
      case 5292:
        return ie + e + Fe + se(e, "basis", "preferred-size") + e;
      case 6060:
        return ie + "box-" + se(e, "-grow", "") + ie + e + Fe + se(e, "grow", "positive") + e;
      case 4554:
        return ie + se(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
      case 6187:
        return se(se(se(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return se(e, /(image-set\([^]*)/, ie + "$1$`$1");
      case 4968:
        return se(se(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + Fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return se(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
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
        if (Xe(e) - 1 - t > 6) switch (Me(e, t + 1)) {
          case 109:
            if (Me(e, t + 4) !== 45) break;
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + Rr + (Me(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~kn(e, "stretch") ? Oi(se(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (Me(e, t + 1) !== 115) break;
      case 6444:
        switch (Me(e, Xe(e) - 3 - (~kn(e, "!important") && 10))) {
          case 107:
            return se(e, ":", ":" + ie) + e;
          case 101:
            return se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ie + (Me(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + Fe + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (Me(e, t + 11)) {
          case 114:
            return ie + e + Fe + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return ie + e + Fe + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return ie + e + Fe + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return ie + e + Fe + e + e;
    }
    return e;
  }
  var ua = function(t, r, n, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case Un:
        t.return = Oi(t.value, t.length);
        break;
      case Pi:
        return Ot([
          Ut(t, {
            value: se(t.value, "@", "@" + ie)
          })
        ], o);
      case Hn:
        if (t.length) return Gs(t.props, function(i) {
          switch (Ks(i, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return Ot([
                Ut(t, {
                  props: [
                    se(i, /:(read-\w+)/, ":" + Rr + "$1")
                  ]
                })
              ], o);
            case "::placeholder":
              return Ot([
                Ut(t, {
                  props: [
                    se(i, /:(plac\w+)/, ":" + ie + "input-$1")
                  ]
                }),
                Ut(t, {
                  props: [
                    se(i, /:(plac\w+)/, ":" + Rr + "$1")
                  ]
                }),
                Ut(t, {
                  props: [
                    se(i, /:(plac\w+)/, Fe + "input-$1")
                  ]
                })
              ], o);
          }
          return "";
        });
    }
  }, da = [
    ua
  ], fa = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(C) {
        var w = C.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 && (document.head.appendChild(C), C.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || da, i = {}, s, a = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(C) {
      for (var w = C.getAttribute("data-emotion").split(" "), R = 1; R < w.length; R++) i[w[R]] = true;
      a.push(C);
    });
    var u, l = [
      la,
      ca
    ];
    {
      var h, m = [
        ra,
        oa(function(C) {
          h.insert(C);
        })
      ], y = na(l.concat(o, m)), S = function(w) {
        return Ot(ea(w), y);
      };
      u = function(w, R, E, v) {
        h = E, S(w ? w + "{" + R.styles + "}" : R.styles), v && (b.inserted[R.name] = true);
      };
    }
    var b = {
      key: r,
      sheet: new Ds({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: u
    };
    return b.sheet.hydrate(a), b;
  }, _i = {
    exports: {}
  }, ue = {};
  var $e = typeof Symbol == "function" && Symbol.for, Kn = $e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Gn = $e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Fr = $e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Br = $e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Nr = $e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Lr = $e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, zr = $e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, qn = $e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Dr = $e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, jr = $e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Wr = $e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, pa = $e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Hr = $e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Ur = $e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, ha = $e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, ma = $e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ga = $e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, ya = $e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function We(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Kn:
          switch (e = e.type, e) {
            case qn:
            case Dr:
            case Fr:
            case Nr:
            case Br:
            case Wr:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case zr:
                case jr:
                case Ur:
                case Hr:
                case Lr:
                  return e;
                default:
                  return t;
              }
          }
        case Gn:
          return t;
      }
    }
  }
  function Fi(e) {
    return We(e) === Dr;
  }
  ue.AsyncMode = qn;
  ue.ConcurrentMode = Dr;
  ue.ContextConsumer = zr;
  ue.ContextProvider = Lr;
  ue.Element = Kn;
  ue.ForwardRef = jr;
  ue.Fragment = Fr;
  ue.Lazy = Ur;
  ue.Memo = Hr;
  ue.Portal = Gn;
  ue.Profiler = Nr;
  ue.StrictMode = Br;
  ue.Suspense = Wr;
  ue.isAsyncMode = function(e) {
    return Fi(e) || We(e) === qn;
  };
  ue.isConcurrentMode = Fi;
  ue.isContextConsumer = function(e) {
    return We(e) === zr;
  };
  ue.isContextProvider = function(e) {
    return We(e) === Lr;
  };
  ue.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kn;
  };
  ue.isForwardRef = function(e) {
    return We(e) === jr;
  };
  ue.isFragment = function(e) {
    return We(e) === Fr;
  };
  ue.isLazy = function(e) {
    return We(e) === Ur;
  };
  ue.isMemo = function(e) {
    return We(e) === Hr;
  };
  ue.isPortal = function(e) {
    return We(e) === Gn;
  };
  ue.isProfiler = function(e) {
    return We(e) === Nr;
  };
  ue.isStrictMode = function(e) {
    return We(e) === Br;
  };
  ue.isSuspense = function(e) {
    return We(e) === Wr;
  };
  ue.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Fr || e === Dr || e === Nr || e === Br || e === Wr || e === pa || typeof e == "object" && e !== null && (e.$$typeof === Ur || e.$$typeof === Hr || e.$$typeof === Lr || e.$$typeof === zr || e.$$typeof === jr || e.$$typeof === ma || e.$$typeof === ga || e.$$typeof === ya || e.$$typeof === ha);
  };
  ue.typeOf = We;
  _i.exports = ue;
  var ba = _i.exports, Bi = ba, va = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, xa = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, Ni = {};
  Ni[Bi.ForwardRef] = va;
  Ni[Bi.Memo] = xa;
  var Sa = true;
  function Li(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
    }), n;
  }
  var Yn = function(t, r, n) {
    var o = t.key + "-" + r.name;
    (n === false || Sa === false) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
  }, Xn = function(t, r, n) {
    Yn(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do
        t.insert(r === i ? "." + o : "", i, t.sheet, true), i = i.next;
      while (i !== void 0);
    }
  };
  function Ca(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4) r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }
  var wa = {
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
  }, Ra = /[A-Z]|^ms/g, ka = /_EMO_([^_]+?)_([^]*?)_EMO_/g, zi = function(t) {
    return t.charCodeAt(1) === 45;
  }, $o = function(t) {
    return t != null && typeof t != "boolean";
  }, mn = Mi(function(e) {
    return zi(e) ? e : e.replace(Ra, "-$&").toLowerCase();
  }), Io = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(ka, function(n, o, i) {
          return Qe = {
            name: o,
            styles: i,
            next: Qe
          }, o;
        });
    }
    return wa[t] !== 1 && !zi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
  function nr(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var o = r;
        if (o.anim === 1) return Qe = {
          name: o.name,
          styles: o.styles,
          next: Qe
        }, o.name;
        var i = r;
        if (i.styles !== void 0) {
          var s = i.next;
          if (s !== void 0) for (; s !== void 0; ) Qe = {
            name: s.name,
            styles: s.styles,
            next: Qe
          }, s = s.next;
          var a = i.styles + ";";
          return a;
        }
        return Ea(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var u = Qe, l = r(e);
          return Qe = u, nr(e, t, l);
        }
        break;
      }
    }
    var h = r;
    if (t == null) return h;
    var m = t[h];
    return m !== void 0 ? m : h;
  }
  function Ea(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += nr(e, t, r[o]) + ";";
    else for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : $o(a) && (n += mn(i) + ":" + Io(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var u = 0; u < s.length; u++) $o(s[u]) && (n += mn(i) + ":" + Io(i, s[u]) + ";");
      else {
        var l = nr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += mn(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
    return n;
  }
  var Mo = /label:\s*([^\s;{]+)\s*(;|$)/g, Qe;
  function sr(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, o = "";
    Qe = void 0;
    var i = e[0];
    if (i == null || i.raw === void 0) n = false, o += nr(r, t, i);
    else {
      var s = i;
      o += s[0];
    }
    for (var a = 1; a < e.length; a++) if (o += nr(r, t, e[a]), n) {
      var u = i;
      o += u[a];
    }
    Mo.lastIndex = 0;
    for (var l = "", h; (h = Mo.exec(o)) !== null; ) l += "-" + h[1];
    var m = Ca(o) + l;
    return {
      name: m,
      styles: o,
      next: Qe
    };
  }
  var Pa = function(t) {
    return t();
  }, Di = Rn.useInsertionEffect ? Rn.useInsertionEffect : false, ji = Di || Pa, Oo = Di || g.useLayoutEffect, Wi = g.createContext(typeof HTMLElement < "u" ? fa({
    key: "css"
  }) : null);
  Wi.Provider;
  let Qn, Zn, Pn, Ta, Aa, $a, Ia, _o;
  Qn = function(t) {
    return g.forwardRef(function(r, n) {
      var o = g.useContext(Wi);
      return t(r, o, n);
    });
  };
  Vr = g.createContext({});
  Zn = {}.hasOwnProperty;
  Pn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  Ta = function(t, r) {
    var n = {};
    for (var o in r) Zn.call(r, o) && (n[o] = r[o]);
    return n[Pn] = t, n;
  };
  Aa = function(t) {
    var r = t.cache, n = t.serialized, o = t.isStringTag;
    return Yn(r, n, o), ji(function() {
      return Xn(r, n, o);
    }), null;
  };
  $a = Qn(function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[Pn], i = [
      n
    ], s = "";
    typeof e.className == "string" ? s = Li(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
    var a = sr(i, void 0, g.useContext(Vr));
    s += t.key + "-" + a.name;
    var u = {};
    for (var l in e) Zn.call(e, l) && l !== "css" && l !== Pn && (u[l] = e[l]);
    return u.className = s, r && (u.ref = r), g.createElement(g.Fragment, null, g.createElement(Aa, {
      cache: t,
      serialized: a,
      isStringTag: typeof o == "string"
    }), g.createElement(o, u));
  });
  Ia = $a;
  _o = function(t, r) {
    var n = arguments;
    if (r == null || !Zn.call(r, "css")) return g.createElement.apply(void 0, n);
    var o = n.length, i = new Array(o);
    i[0] = Ia, i[1] = Ta(t, r);
    for (var s = 2; s < o; s++) i[s] = n[s];
    return g.createElement.apply(null, i);
  };
  (function(e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}));
  })(_o || (_o = {}));
  var Ma = Qn(function(e, t) {
    var r = e.styles, n = sr([
      r
    ], void 0, g.useContext(Vr)), o = g.useRef();
    return Oo(function() {
      var i = t.key + "-global", s = new t.sheet.constructor({
        key: i,
        nonce: t.sheet.nonce,
        container: t.sheet.container,
        speedy: t.sheet.isSpeedy
      }), a = false, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
      return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (a = true, u.setAttribute("data-emotion", i), s.hydrate([
        u
      ])), o.current = [
        s,
        a
      ], function() {
        s.flush();
      };
    }, [
      t
    ]), Oo(function() {
      var i = o.current, s = i[0], a = i[1];
      if (a) {
        i[1] = false;
        return;
      }
      if (n.next !== void 0 && Xn(t, n.next, true), s.tags.length) {
        var u = s.tags[s.tags.length - 1].nextElementSibling;
        s.before = u, s.flush();
      }
      t.insert("", n, s, false);
    }, [
      t,
      n.name
    ]), null;
  });
  Jn = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return sr(t);
  };
  ar = function() {
    var e = Jn.apply(void 0, arguments), t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var Oa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _a = Mi(function(e) {
    return Oa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }), Fa = _a, Ba = function(t) {
    return t !== "theme";
  }, Fo = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Fa : Ba;
  }, Bo = function(t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o = t.__emotion_forwardProp && i ? function(s) {
        return t.__emotion_forwardProp(s) && i(s);
      } : i;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  }, Na = function(t) {
    var r = t.cache, n = t.serialized, o = t.isStringTag;
    return Yn(r, n, o), ji(function() {
      return Xn(r, n, o);
    }), null;
  }, La = function e(t, r) {
    var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
    r !== void 0 && (i = r.label, s = r.target);
    var a = Bo(t, r, n), u = a || Fo(o), l = !u("as");
    return function() {
      var h = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (i !== void 0 && m.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0) m.push.apply(m, h);
      else {
        var y = h[0];
        m.push(y[0]);
        for (var S = h.length, b = 1; b < S; b++) m.push(h[b], y[b]);
      }
      var C = Qn(function(w, R, E) {
        var v = l && w.as || o, x = "", T = [], P = w;
        if (w.theme == null) {
          P = {};
          for (var A in w) P[A] = w[A];
          P.theme = g.useContext(Vr);
        }
        typeof w.className == "string" ? x = Li(R.registered, T, w.className) : w.className != null && (x = w.className + " ");
        var _ = sr(m.concat(T), R.registered, P);
        x += R.key + "-" + _.name, s !== void 0 && (x += " " + s);
        var D = l && a === void 0 ? Fo(v) : u, c = {};
        for (var I in w) l && I === "as" || D(I) && (c[I] = w[I]);
        return c.className = x, E && (c.ref = E), g.createElement(g.Fragment, null, g.createElement(Na, {
          cache: R,
          serialized: _,
          isStringTag: typeof v == "string"
        }), g.createElement(v, c));
      });
      return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = t.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = m, C.__emotion_forwardProp = a, Object.defineProperty(C, "toString", {
        value: function() {
          return "." + s;
        }
      }), C.withComponent = function(w, R) {
        var E = e(w, wr({}, r, R, {
          shouldForwardProp: Bo(C, R, true)
        }));
        return E.apply(void 0, m);
      }, C;
    };
  }, za = [
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
  ], Tn = La.bind(null);
  za.forEach(function(e) {
    Tn[e] = Tn(e);
  });
  function Da(e) {
    return e == null || Object.keys(e).length === 0;
  }
  ja = function(e) {
    const { styles: t, defaultTheme: r = {} } = e, n = typeof t == "function" ? (o) => t(Da(o) ? r : o) : t;
    return O.jsx(Ma, {
      styles: n
    });
  };
  function Hi(e, t) {
    return Tn(e, t);
  }
  function Wa(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  }
  const No = [];
  function ct(e) {
    return No[0] = e, sr(No);
  }
  var Ui = {
    exports: {}
  }, he = {};
  var eo = /* @__PURE__ */ Symbol.for("react.transitional.element"), to = /* @__PURE__ */ Symbol.for("react.portal"), Kr = /* @__PURE__ */ Symbol.for("react.fragment"), Gr = /* @__PURE__ */ Symbol.for("react.strict_mode"), qr = /* @__PURE__ */ Symbol.for("react.profiler"), Yr = /* @__PURE__ */ Symbol.for("react.consumer"), Xr = /* @__PURE__ */ Symbol.for("react.context"), Qr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Zr = /* @__PURE__ */ Symbol.for("react.suspense"), Jr = /* @__PURE__ */ Symbol.for("react.suspense_list"), en = /* @__PURE__ */ Symbol.for("react.memo"), tn = /* @__PURE__ */ Symbol.for("react.lazy"), Ha = /* @__PURE__ */ Symbol.for("react.view_transition"), Ua = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ve(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case eo:
          switch (e = e.type, e) {
            case Kr:
            case qr:
            case Gr:
            case Zr:
            case Jr:
            case Ha:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Xr:
                case Qr:
                case tn:
                case en:
                  return e;
                case Yr:
                  return e;
                default:
                  return t;
              }
          }
        case to:
          return t;
      }
    }
  }
  he.ContextConsumer = Yr;
  he.ContextProvider = Xr;
  he.Element = eo;
  he.ForwardRef = Qr;
  he.Fragment = Kr;
  he.Lazy = tn;
  he.Memo = en;
  he.Portal = to;
  he.Profiler = qr;
  he.StrictMode = Gr;
  he.Suspense = Zr;
  he.SuspenseList = Jr;
  he.isContextConsumer = function(e) {
    return Ve(e) === Yr;
  };
  he.isContextProvider = function(e) {
    return Ve(e) === Xr;
  };
  he.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === eo;
  };
  he.isForwardRef = function(e) {
    return Ve(e) === Qr;
  };
  he.isFragment = function(e) {
    return Ve(e) === Kr;
  };
  he.isLazy = function(e) {
    return Ve(e) === tn;
  };
  he.isMemo = function(e) {
    return Ve(e) === en;
  };
  he.isPortal = function(e) {
    return Ve(e) === to;
  };
  he.isProfiler = function(e) {
    return Ve(e) === qr;
  };
  he.isStrictMode = function(e) {
    return Ve(e) === Gr;
  };
  he.isSuspense = function(e) {
    return Ve(e) === Zr;
  };
  he.isSuspenseList = function(e) {
    return Ve(e) === Jr;
  };
  he.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Kr || e === qr || e === Gr || e === Zr || e === Jr || typeof e == "object" && e !== null && (e.$$typeof === tn || e.$$typeof === en || e.$$typeof === Xr || e.$$typeof === Yr || e.$$typeof === Qr || e.$$typeof === Ua || e.getModuleId !== void 0);
  };
  he.typeOf = Ve;
  Ui.exports = he;
  var Vi = Ui.exports;
  function Ze(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function Ki(e) {
    if (g.isValidElement(e) || Vi.isValidElementType(e) || !Ze(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = Ki(e[r]);
    }), t;
  }
  Oe = function(e, t, r = {
    clone: true
  }) {
    const n = r.clone ? {
      ...e
    } : e;
    return Ze(e) && Ze(t) && Object.keys(t).forEach((o) => {
      g.isValidElement(t[o]) || Vi.isValidElementType(t[o]) ? n[o] = t[o] : Ze(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Ze(e[o]) ? n[o] = Oe(e[o], t[o], r) : r.clone ? n[o] = Ze(t[o]) ? Ki(t[o]) : t[o] : n[o] = t[o];
    }), n;
  };
  const Va = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
      ...r,
      [n.key]: n.val
    }), {});
  };
  function Ka(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: n = 5, ...o } = e, i = Va(t), s = Object.keys(i);
    function a(y) {
      return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
    }
    function u(y) {
      return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
    }
    function l(y, S) {
      const b = s.indexOf(S);
      return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : S) - n / 100}${r})`;
    }
    function h(y) {
      return s.indexOf(y) + 1 < s.length ? l(y, s[s.indexOf(y) + 1]) : a(y);
    }
    function m(y) {
      const S = s.indexOf(y);
      return S === 0 ? a(s[1]) : S === s.length - 1 ? u(s[S]) : l(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: s,
      values: i,
      up: a,
      down: u,
      between: l,
      only: h,
      not: m,
      unit: r,
      ...o
    };
  }
  function Lo(e, t) {
    if (!e.containerQueries) return t;
    const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
      var _a2, _b;
      const i = /min-width:\s*([0-9.]+)/;
      return +(((_a2 = n.match(i)) == null ? void 0 : _a2[1]) || 0) - +(((_b = o.match(i)) == null ? void 0 : _b[1]) || 0);
    });
    return r.length ? r.reduce((n, o) => {
      const i = t[o];
      return delete n[o], n[o] = i, n;
    }, {
      ...t
    }) : t;
  }
  function Ga(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function qa(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
    return e.containerQueries(o).up(i);
  }
  function Ya(e) {
    const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
    function r(i, s) {
      i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
        const u = t(e.breakpoints.not(...a), s);
        return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
      };
    }
    const n = {}, o = (i) => (r(n, i), n);
    return r(o), {
      ...e,
      containerQueries: o
    };
  }
  const Xa = {
    borderRadius: 4
  };
  function Qt(e, t) {
    return t ? Oe(e, t, {
      clone: false
    }) : e;
  }
  const rn = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, zo = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (e) => `@media (min-width:${rn[e]}px)`
  }, Qa = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : rn[t] || t;
        return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
      }
    })
  };
  st = function(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const i = n.breakpoints || zo;
      return t.reduce((s, a, u) => (s[i.up(i.keys[u])] = r(t[u]), s), {});
    }
    if (typeof t == "object") {
      const i = n.breakpoints || zo;
      return Object.keys(t).reduce((s, a) => {
        if (Ga(i.keys, a)) {
          const u = qa(n.containerQueries ? n : Qa, a);
          u && (s[u] = r(t[a], a));
        } else if (Object.keys(i.values || rn).includes(a)) {
          const u = i.up(a);
          s[u] = r(t[a], a);
        } else {
          const u = a;
          s[u] = t[u];
        }
        return s;
      }, {});
    }
    return r(t);
  };
  function Gi(e = {}) {
    var _a2;
    return ((_a2 = e.keys) == null ? void 0 : _a2.reduce((r, n) => {
      const o = e.up(n);
      return r[o] = {}, r;
    }, {})) || {};
  }
  function An(e, t) {
    return e.reduce((r, n) => {
      const o = r[n];
      return (!o || Object.keys(o).length === 0) && delete r[n], r;
    }, t);
  }
  op = function(e, ...t) {
    const r = Gi(e), n = [
      r,
      ...t
    ].reduce((o, i) => Oe(o, i), {});
    return An(Object.keys(r), n);
  };
  function Za(e, t) {
    if (typeof e != "object") return {};
    const r = {}, n = Object.keys(t);
    return Array.isArray(e) ? n.forEach((o, i) => {
      i < e.length && (r[o] = true);
    }) : n.forEach((o) => {
      e[o] != null && (r[o] = true);
    }), r;
  }
  ip = function({ values: e, breakpoints: t, base: r }) {
    const n = r || Za(e, t), o = Object.keys(n);
    if (o.length === 0) return e;
    let i;
    return o.reduce((s, a, u) => (Array.isArray(e) ? (s[a] = e[u] != null ? e[u] : e[i], i = u) : typeof e == "object" ? (s[a] = e[a] != null ? e[a] : e[i], i = a) : s[a] = e, s), {});
  };
  ne = function(e) {
    if (typeof e != "string") throw new Error(it(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  nn = function(e, t, r = true) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
      if (n != null) return n;
    }
    return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
  };
  function kr(e, t, r, n = r) {
    let o;
    return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = nn(e, r) || n, t && (o = t(o, n, e)), o;
  }
  function Ee(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e, i = (s) => {
      if (s[t] == null) return null;
      const a = s[t], u = s.theme, l = nn(u, n) || {};
      return st(s, a, (m) => {
        let y = kr(l, o, m);
        return m === y && typeof m == "string" && (y = kr(l, o, `${t}${m === "default" ? "" : ne(m)}`, m)), r === false ? y : {
          [r]: y
        };
      });
    };
    return i.propTypes = {}, i.filterProps = [
      t
    ], i;
  }
  function Ja(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  const el = {
    m: "margin",
    p: "padding"
  }, tl = {
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
  }, Do = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, rl = Ja((e) => {
    if (e.length > 2) if (Do[e]) e = Do[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), n = el[t], o = tl[r] || "";
    return Array.isArray(o) ? o.map((i) => n + i) : [
      n + o
    ];
  }), ro = [
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
  ], no = [
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
    ...ro,
    ...no
  ];
  function lr(e, t, r, n) {
    const o = nn(e, t, true) ?? r;
    return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
      if (typeof i == "string") return i;
      const s = Math.abs(i), a = o[s];
      return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof o == "function" ? o : () => {
    };
  }
  oo = function(e) {
    return lr(e, "spacing", 8);
  };
  cr = function(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  };
  function nl(e, t) {
    return (r) => e.reduce((n, o) => (n[o] = cr(t, r), n), {});
  }
  function ol(e, t, r, n) {
    if (!t.includes(r)) return null;
    const o = rl(r), i = nl(o, n), s = e[r];
    return st(e, s, i);
  }
  function qi(e, t) {
    const r = oo(e.theme);
    return Object.keys(e).map((n) => ol(e, t, n, r)).reduce(Qt, {});
  }
  function Ce(e) {
    return qi(e, ro);
  }
  Ce.propTypes = {};
  Ce.filterProps = ro;
  function we(e) {
    return qi(e, no);
  }
  we.propTypes = {};
  we.filterProps = no;
  function Yi(e = 8, t = oo({
    spacing: e
  })) {
    if (e.mui) return e;
    const r = (...n) => (n.length === 0 ? [
      1
    ] : n).map((i) => {
      const s = t(i);
      return typeof s == "number" ? `${s}px` : s;
    }).join(" ");
    return r.mui = true, r;
  }
  function on(...e) {
    const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
      n[i] = o;
    }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Qt(o, t[i](n)) : o, {});
    return r.propTypes = {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
  }
  function Ue(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  function Ke(e, t) {
    return Ee({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  const il = Ke("border", Ue), sl = Ke("borderTop", Ue), al = Ke("borderRight", Ue), ll = Ke("borderBottom", Ue), cl = Ke("borderLeft", Ue), ul = Ke("borderColor"), dl = Ke("borderTopColor"), fl = Ke("borderRightColor"), pl = Ke("borderBottomColor"), hl = Ke("borderLeftColor"), ml = Ke("outline", Ue), gl = Ke("outlineColor"), sn = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = lr(e.theme, "shape.borderRadius", 4), r = (n) => ({
        borderRadius: cr(t, n)
      });
      return st(e, e.borderRadius, r);
    }
    return null;
  };
  sn.propTypes = {};
  sn.filterProps = [
    "borderRadius"
  ];
  on(il, sl, al, ll, cl, ul, dl, fl, pl, hl, sn, ml, gl);
  const an = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = lr(e.theme, "spacing", 8), r = (n) => ({
        gap: cr(t, n)
      });
      return st(e, e.gap, r);
    }
    return null;
  };
  an.propTypes = {};
  an.filterProps = [
    "gap"
  ];
  const ln = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = lr(e.theme, "spacing", 8), r = (n) => ({
        columnGap: cr(t, n)
      });
      return st(e, e.columnGap, r);
    }
    return null;
  };
  ln.propTypes = {};
  ln.filterProps = [
    "columnGap"
  ];
  const cn = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = lr(e.theme, "spacing", 8), r = (n) => ({
        rowGap: cr(t, n)
      });
      return st(e, e.rowGap, r);
    }
    return null;
  };
  cn.propTypes = {};
  cn.filterProps = [
    "rowGap"
  ];
  const yl = Ee({
    prop: "gridColumn"
  }), bl = Ee({
    prop: "gridRow"
  }), vl = Ee({
    prop: "gridAutoFlow"
  }), xl = Ee({
    prop: "gridAutoColumns"
  }), Sl = Ee({
    prop: "gridAutoRows"
  }), Cl = Ee({
    prop: "gridTemplateColumns"
  }), wl = Ee({
    prop: "gridTemplateRows"
  }), Rl = Ee({
    prop: "gridTemplateAreas"
  }), kl = Ee({
    prop: "gridArea"
  });
  on(an, ln, cn, yl, bl, vl, xl, Sl, Cl, wl, Rl, kl);
  function _t(e, t) {
    return t === "grey" ? t : e;
  }
  const El = Ee({
    prop: "color",
    themeKey: "palette",
    transform: _t
  }), Pl = Ee({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: _t
  }), Tl = Ee({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: _t
  });
  on(El, Pl, Tl);
  function De(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const Al = Ee({
    prop: "width",
    transform: De
  }), io = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var _a2, _b, _c2, _d2, _e;
        const n = ((_c2 = (_b = (_a2 = e.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c2[r]) || rn[r];
        return n ? ((_e = (_d2 = e.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e.unit) !== "px" ? {
          maxWidth: `${n}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: n
        } : {
          maxWidth: De(r)
        };
      };
      return st(e, e.maxWidth, t);
    }
    return null;
  };
  io.filterProps = [
    "maxWidth"
  ];
  const $l = Ee({
    prop: "minWidth",
    transform: De
  }), Il = Ee({
    prop: "height",
    transform: De
  }), Ml = Ee({
    prop: "maxHeight",
    transform: De
  }), Ol = Ee({
    prop: "minHeight",
    transform: De
  });
  Ee({
    prop: "size",
    cssProperty: "width",
    transform: De
  });
  Ee({
    prop: "size",
    cssProperty: "height",
    transform: De
  });
  const _l = Ee({
    prop: "boxSizing"
  });
  on(Al, io, $l, Il, Ml, Ol, _l);
  const ur = {
    border: {
      themeKey: "borders",
      transform: Ue
    },
    borderTop: {
      themeKey: "borders",
      transform: Ue
    },
    borderRight: {
      themeKey: "borders",
      transform: Ue
    },
    borderBottom: {
      themeKey: "borders",
      transform: Ue
    },
    borderLeft: {
      themeKey: "borders",
      transform: Ue
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
      transform: Ue
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: sn
    },
    color: {
      themeKey: "palette",
      transform: _t
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: _t
    },
    backgroundColor: {
      themeKey: "palette",
      transform: _t
    },
    p: {
      style: we
    },
    pt: {
      style: we
    },
    pr: {
      style: we
    },
    pb: {
      style: we
    },
    pl: {
      style: we
    },
    px: {
      style: we
    },
    py: {
      style: we
    },
    padding: {
      style: we
    },
    paddingTop: {
      style: we
    },
    paddingRight: {
      style: we
    },
    paddingBottom: {
      style: we
    },
    paddingLeft: {
      style: we
    },
    paddingX: {
      style: we
    },
    paddingY: {
      style: we
    },
    paddingInline: {
      style: we
    },
    paddingInlineStart: {
      style: we
    },
    paddingInlineEnd: {
      style: we
    },
    paddingBlock: {
      style: we
    },
    paddingBlockStart: {
      style: we
    },
    paddingBlockEnd: {
      style: we
    },
    m: {
      style: Ce
    },
    mt: {
      style: Ce
    },
    mr: {
      style: Ce
    },
    mb: {
      style: Ce
    },
    ml: {
      style: Ce
    },
    mx: {
      style: Ce
    },
    my: {
      style: Ce
    },
    margin: {
      style: Ce
    },
    marginTop: {
      style: Ce
    },
    marginRight: {
      style: Ce
    },
    marginBottom: {
      style: Ce
    },
    marginLeft: {
      style: Ce
    },
    marginX: {
      style: Ce
    },
    marginY: {
      style: Ce
    },
    marginInline: {
      style: Ce
    },
    marginInlineStart: {
      style: Ce
    },
    marginInlineEnd: {
      style: Ce
    },
    marginBlock: {
      style: Ce
    },
    marginBlockStart: {
      style: Ce
    },
    marginBlockEnd: {
      style: Ce
    },
    displayPrint: {
      cssProperty: false,
      transform: (e) => ({
        "@media print": {
          display: e
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
      style: an
    },
    rowGap: {
      style: cn
    },
    columnGap: {
      style: ln
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
      transform: De
    },
    maxWidth: {
      style: io
    },
    minWidth: {
      transform: De
    },
    height: {
      transform: De
    },
    maxHeight: {
      transform: De
    },
    minHeight: {
      transform: De
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
  function Fl(...e) {
    const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
    return e.every((n) => r.size === Object.keys(n).length);
  }
  function Bl(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Nl() {
    function e(r, n, o, i) {
      const s = {
        [r]: n,
        theme: o
      }, a = i[r];
      if (!a) return {
        [r]: n
      };
      const { cssProperty: u = r, themeKey: l, transform: h, style: m } = a;
      if (n == null) return null;
      if (l === "typography" && n === "inherit") return {
        [r]: n
      };
      const y = nn(o, l) || {};
      return m ? m(s) : st(s, n, (b) => {
        let C = kr(y, h, b);
        return b === C && typeof b == "string" && (C = kr(y, h, `${r}${b === "default" ? "" : ne(b)}`, b)), u === false ? C : {
          [u]: C
        };
      });
    }
    function t(r) {
      const { sx: n, theme: o = {}, nested: i } = r || {};
      if (!n) return null;
      const s = o.unstable_sxConfig ?? ur;
      function a(u) {
        let l = u;
        if (typeof u == "function") l = u(o);
        else if (typeof u != "object") return u;
        if (!l) return null;
        const h = Gi(o.breakpoints), m = Object.keys(h);
        let y = h;
        return Object.keys(l).forEach((S) => {
          const b = Bl(l[S], o);
          if (b != null) if (typeof b == "object") if (s[S]) y = Qt(y, e(S, b, o, s));
          else {
            const C = st({
              theme: o
            }, b, (w) => ({
              [S]: w
            }));
            Fl(C, b) ? y[S] = t({
              sx: b,
              theme: o,
              nested: true
            }) : y = Qt(y, C);
          }
          else y = Qt(y, e(S, b, o, s));
        }), !i && o.modularCssLayers ? {
          "@layer sx": Lo(o, An(m, y))
        } : Lo(o, An(m, y));
      }
      return Array.isArray(n) ? n.map(a) : a(n);
    }
    return t;
  }
  vt = Nl();
  vt.filterProps = [
    "sx"
  ];
  function Ll(e, t) {
    var _a2;
    const r = this;
    if (r.vars) {
      if (!((_a2 = r.colorSchemes) == null ? void 0 : _a2[e]) || typeof r.getColorSchemeSelector != "function") return {};
      let n = r.getColorSchemeSelector(e);
      return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
        [n]: t
      });
    }
    return r.palette.mode === e ? t : {};
  }
  so = function(e = {}, ...t) {
    const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {}, ...s } = e, a = Ka(r), u = Yi(o);
    let l = Oe({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...n
      },
      spacing: u,
      shape: {
        ...Xa,
        ...i
      }
    }, s);
    return l = Ya(l), l.applyStyles = Ll, l = t.reduce((h, m) => Oe(h, m), l), l.unstable_sxConfig = {
      ...ur,
      ...s == null ? void 0 : s.unstable_sxConfig
    }, l.unstable_sx = function(m) {
      return vt({
        sx: m,
        theme: this
      });
    }, l;
  };
  function zl(e) {
    return Object.keys(e).length === 0;
  }
  Dl = function(e = null) {
    const t = g.useContext(Vr);
    return !t || zl(t) ? e : t;
  };
  const jl = so();
  ao = function(e = jl) {
    return Dl(e);
  };
  function gn(e) {
    const t = ct(e);
    return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
  }
  Wl = function({ styles: e, themeId: t, defaultTheme: r = {} }) {
    const n = ao(r), o = t && n[t] || n;
    let i = typeof e == "function" ? e(o) : e;
    return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => gn(typeof s == "function" ? s(o) : s)) : i = gn(i)), O.jsx(ja, {
      styles: i
    });
  };
  const Hl = (e) => {
    var _a2;
    const t = {
      systemProps: {},
      otherProps: {}
    }, r = ((_a2 = e == null ? void 0 : e.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? ur;
    return Object.keys(e).forEach((n) => {
      r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
    }), t;
  };
  Xi = function(e) {
    const { sx: t, ...r } = e, { systemProps: n, otherProps: o } = Hl(r);
    let i;
    return Array.isArray(t) ? i = [
      n,
      ...t
    ] : typeof t == "function" ? i = (...s) => {
      const a = t(...s);
      return Ze(a) ? {
        ...n,
        ...a
      } : n;
    } : i = {
      ...n,
      ...t
    }, {
      ...o,
      sx: i
    };
  };
  const jo = (e) => e, Ul = () => {
    let e = jo;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = jo;
      }
    };
  }, Qi = Ul();
  function Zi(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (r = Zi(e[t])) && (n && (n += " "), n += r);
    } else for (r in e) e[r] && (n && (n += " "), n += r);
    return n;
  }
  J = function() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Zi(e)) && (n && (n += " "), n += t);
    return n;
  };
  function Vl(e = {}) {
    const { themeId: t, defaultTheme: r, defaultClassName: n = "MuiBox-root", generateClassName: o } = e, i = Hi("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(vt);
    return g.forwardRef(function(u, l) {
      const h = ao(r), { className: m, component: y = "div", ...S } = Xi(u);
      return O.jsx(i, {
        as: y,
        ref: l,
        className: J(m, o ? o(n) : n),
        theme: t && h[t] || h,
        ...S
      });
    });
  }
  const Kl = {
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
  ve = function(e, t, r = "Mui") {
    const n = Kl[t];
    return n ? `${r}-${n}` : `${Qi.generate(e)}-${t}`;
  };
  ge = function(e, t, r = "Mui") {
    const n = {};
    return t.forEach((o) => {
      n[o] = ve(e, o, r);
    }), n;
  };
  function Ji(e) {
    const { variants: t, ...r } = e, n = {
      variants: t,
      style: ct(r),
      isProcessed: true
    };
    return n.style === r || t && t.forEach((o) => {
      typeof o.style != "function" && (o.style = ct(o.style));
    }), n;
  }
  const Gl = so();
  yn = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  function gt(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
  }
  function ql(e) {
    return e ? (t, r) => r[e] : null;
  }
  function Yl(e, t, r) {
    e.theme = Zl(e.theme) ? r : e.theme[t] || e.theme;
  }
  function Cr(e, t, r) {
    const n = typeof t == "function" ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((o) => Cr(e, o, r));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
      let o;
      if (n.isProcessed) o = r ? gt(n.style, r) : n.style;
      else {
        const { variants: i, ...s } = n;
        o = r ? gt(ct(s), r) : s;
      }
      return es(e, n.variants, [
        o
      ], r);
    }
    return (n == null ? void 0 : n.isProcessed) ? r ? gt(ct(n.style), r) : n.style : r ? gt(ct(n), r) : n;
  }
  function es(e, t, r = [], n = void 0) {
    var _a2;
    let o;
    e: for (let i = 0; i < t.length; i += 1) {
      const s = t[i];
      if (typeof s.props == "function") {
        if (o ??= {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }, !s.props(o)) continue;
      } else for (const a in s.props) if (e[a] !== s.props[a] && ((_a2 = e.ownerState) == null ? void 0 : _a2[a]) !== s.props[a]) continue e;
      typeof s.style == "function" ? (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, r.push(n ? gt(ct(s.style(o)), n) : s.style(o))) : r.push(n ? gt(ct(s.style), n) : s.style);
    }
    return r;
  }
  Xl = function(e = {}) {
    const { themeId: t, defaultTheme: r = Gl, rootShouldForwardProp: n = yn, slotShouldForwardProp: o = yn } = e;
    function i(a) {
      Yl(a, t, r);
    }
    return (a, u = {}) => {
      Wa(a, (P) => P.filter((A) => A !== vt));
      const { name: l, slot: h, skipVariantsResolver: m, skipSx: y, overridesResolver: S = ql(ec(h)), ...b } = u, C = l && l.startsWith("Mui") || h ? "components" : "custom", w = m !== void 0 ? m : h && h !== "Root" && h !== "root" || false, R = y || false;
      let E = yn;
      h === "Root" || h === "root" ? E = n : h ? E = o : Jl(a) && (E = void 0);
      const v = Hi(a, {
        shouldForwardProp: E,
        label: Ql(),
        ...b
      }), x = (P) => {
        if (P.__emotion_real === P) return P;
        if (typeof P == "function") return function(_) {
          return Cr(_, P, _.theme.modularCssLayers ? C : void 0);
        };
        if (Ze(P)) {
          const A = Ji(P);
          return function(D) {
            return A.variants ? Cr(D, A, D.theme.modularCssLayers ? C : void 0) : D.theme.modularCssLayers ? gt(A.style, C) : A.style;
          };
        }
        return P;
      }, T = (...P) => {
        const A = [], _ = P.map(x), D = [];
        if (A.push(i), l && S && D.push(function(j) {
          var _a2, _b;
          const M = (_b = (_a2 = j.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b.styleOverrides;
          if (!M) return null;
          const B = {};
          for (const q in M) B[q] = Cr(j, M[q], j.theme.modularCssLayers ? "theme" : void 0);
          return S(j, B);
        }), l && !w && D.push(function(j) {
          var _a2, _b, _c2;
          const M = (_c2 = (_b = (_a2 = j.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[l]) == null ? void 0 : _c2.variants;
          return M ? es(j, M, [], j.theme.modularCssLayers ? "theme" : void 0) : null;
        }), R || D.push(vt), Array.isArray(_[0])) {
          const z = _.shift(), j = new Array(A.length).fill(""), H = new Array(D.length).fill("");
          let M;
          M = [
            ...j,
            ...z,
            ...H
          ], M.raw = [
            ...j,
            ...z.raw,
            ...H
          ], A.unshift(M);
        }
        const c = [
          ...A,
          ..._,
          ...D
        ], I = v(...c);
        return a.muiName && (I.muiName = a.muiName), I;
      };
      return v.withConfig && (T.withConfig = v.withConfig), T;
    };
  };
  function Ql(e, t) {
    return void 0;
  }
  function Zl(e) {
    for (const t in e) return false;
    return true;
  }
  function Jl(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function ec(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
  $n = function(e, t) {
    const r = {
      ...t
    };
    for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots") r[o] = {
        ...e[o],
        ...r[o]
      };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s) r[o] = i || {};
        else if (!i) r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const a in i) if (Object.prototype.hasOwnProperty.call(i, a)) {
            const u = a;
            r[o][u] = $n(i[u], s[u]);
          }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
    return r;
  };
  xt = typeof window < "u" ? g.useLayoutEffect : g.useEffect;
  tc = function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  };
  function lo(e, t = 0, r = 1) {
    return tc(e, t, r);
  }
  function rc(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function ut(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return ut(rc(e));
    const t = e.indexOf("("), r = e.substring(0, t);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(r)) throw new Error(it(9, e));
    let n = e.substring(t + 1, e.length - 1), o;
    if (r === "color") {
      if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(o)) throw new Error(it(10, o));
    } else n = n.split(",");
    return n = n.map((i) => parseFloat(i)), {
      type: r,
      values: n,
      colorSpace: o
    };
  }
  const nc = (e) => {
    const t = ut(e);
    return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
  }, qt = (e, t) => {
    try {
      return nc(e);
    } catch {
      return e;
    }
  };
  function un(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
  }
  function ts(e) {
    e = ut(e);
    const { values: t } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (l, h = (l + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
    let a = "rgb";
    const u = [
      Math.round(s(0) * 255),
      Math.round(s(8) * 255),
      Math.round(s(4) * 255)
    ];
    return e.type === "hsla" && (a += "a", u.push(t[3])), un({
      type: a,
      values: u
    });
  }
  function In(e) {
    e = ut(e);
    let t = e.type === "hsl" || e.type === "hsla" ? ut(ts(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  }
  function oc(e, t) {
    const r = In(e), n = In(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  }
  or = function(e, t) {
    return e = ut(e), t = lo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, un(e);
  };
  function pr(e, t, r) {
    try {
      return or(e, t);
    } catch {
      return e;
    }
  }
  co = function(e, t) {
    if (e = ut(e), t = lo(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return un(e);
  };
  function fe(e, t, r) {
    try {
      return co(e, t);
    } catch {
      return e;
    }
  }
  uo = function(e, t) {
    if (e = ut(e), t = lo(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return un(e);
  };
  function pe(e, t, r) {
    try {
      return uo(e, t);
    } catch {
      return e;
    }
  }
  ic = function(e, t = 0.15) {
    return In(e) > 0.5 ? co(e, t) : uo(e, t);
  };
  function hr(e, t, r) {
    try {
      return ic(e, t);
    } catch {
      return e;
    }
  }
  Wo = function(...e) {
    return e.reduce((t, r) => r == null ? t : function(...o) {
      t.apply(this, o), r.apply(this, o);
    }, () => {
    });
  };
  rs = function(e, t = 166) {
    let r;
    function n(...o) {
      const i = () => {
        e.apply(this, o);
      };
      clearTimeout(r), r = setTimeout(i, t);
    }
    return n.clear = () => {
      clearTimeout(r);
    }, n;
  };
  bn = function(e, t) {
    var _a2, _b, _c2;
    return g.isValidElement(e) && t.indexOf(e.type.muiName ?? ((_c2 = (_b = (_a2 = e.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Ge = function(e) {
    return e && e.ownerDocument || document;
  };
  at = function(e) {
    return Ge(e).defaultView || window;
  };
  Ho = function(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  };
  let Uo = 0;
  function sc(e) {
    const [t, r] = g.useState(e), n = e || t;
    return g.useEffect(() => {
      t == null && (Uo += 1, r(`mui-${Uo}`));
    }, [
      t
    ]), n;
  }
  const ac = {
    ...Rn
  }, Vo = ac.useId;
  fo = function(e) {
    if (Vo !== void 0) {
      const t = Vo();
      return e ?? t;
    }
    return sc(e);
  };
  Ko = function({ controlled: e, default: t, name: r, state: n = "value" }) {
    const { current: o } = g.useRef(e !== void 0), [i, s] = g.useState(t), a = o ? e : i, u = g.useCallback((l) => {
      o || s(l);
    }, []);
    return [
      a,
      u
    ];
  };
  bt = function(e) {
    const t = g.useRef(e);
    return xt(() => {
      t.current = e;
    }), g.useRef((...r) => (0, t.current)(...r)).current;
  };
  ze = function(...e) {
    const t = g.useRef(void 0), r = g.useCallback((n) => {
      const o = e.map((i) => {
        if (i == null) return null;
        if (typeof i == "function") {
          const s = i, a = s(n);
          return typeof a == "function" ? a : () => {
            s(null);
          };
        }
        return i.current = n, () => {
          i.current = null;
        };
      });
      return () => {
        o.forEach((i) => i == null ? void 0 : i());
      };
    }, e);
    return g.useMemo(() => e.every((n) => n == null) ? null : (n) => {
      t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
    }, e);
  };
  const Go = {};
  function ns(e, t) {
    const r = g.useRef(Go);
    return r.current === Go && (r.current = e(t)), r;
  }
  const lc = [];
  function cc(e) {
    g.useEffect(e, lc);
  }
  po = class {
    static create() {
      return new po();
    }
    currentId = null;
    start(t, r) {
      this.clear(), this.currentId = setTimeout(() => {
        this.currentId = null, r();
      }, t);
    }
    clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    };
    disposeEffect = () => this.clear;
  };
  os = function() {
    const e = ns(po.create).current;
    return cc(e.disposeEffect), e;
  };
  qo = function(e) {
    try {
      return e.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function is(e = window) {
    const t = e.document.documentElement.clientWidth;
    return e.innerWidth - t;
  }
  Se = function(e, t, r = void 0) {
    const n = {};
    for (const o in e) {
      const i = e[o];
      let s = "", a = true;
      for (let u = 0; u < i.length; u += 1) {
        const l = i[u];
        l && (s += (a === true ? "" : " ") + t(l), a = false, r && r[l] && (s += " " + r[l]));
      }
      n[o] = s;
    }
    return n;
  };
  function uc(e) {
    return typeof e == "string";
  }
  function ss(e, t, r) {
    return e === void 0 || uc(e) ? t : {
      ...t,
      ownerState: {
        ...t.ownerState,
        ...r
      }
    };
  }
  as = function(e, t = []) {
    if (e === void 0) return {};
    const r = {};
    return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
      r[n] = e[n];
    }), r;
  };
  function Yo(e) {
    if (e === void 0) return {};
    const t = {};
    return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
      t[r] = e[r];
    }), t;
  }
  function ls(e) {
    const { getSlotProps: t, additionalProps: r, externalSlotProps: n, externalForwardedProps: o, className: i } = e;
    if (!t) {
      const S = J(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), b = {
        ...r == null ? void 0 : r.style,
        ...o == null ? void 0 : o.style,
        ...n == null ? void 0 : n.style
      }, C = {
        ...r,
        ...o,
        ...n
      };
      return S.length > 0 && (C.className = S), Object.keys(b).length > 0 && (C.style = b), {
        props: C,
        internalRef: void 0
      };
    }
    const s = as({
      ...o,
      ...n
    }), a = Yo(n), u = Yo(o), l = t(s), h = J(l == null ? void 0 : l.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), m = {
      ...l == null ? void 0 : l.style,
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, y = {
      ...l,
      ...r,
      ...u,
      ...a
    };
    return h.length > 0 && (y.className = h), Object.keys(m).length > 0 && (y.style = m), {
      props: y,
      internalRef: l.ref
    };
  }
  cs = function(e, t, r) {
    return typeof e == "function" ? e(t, r) : e;
  };
  dc = function(e) {
    var _a2;
    const { elementType: t, externalSlotProps: r, ownerState: n, skipResolvingSlotProps: o = false, ...i } = e, s = o ? {} : cs(r, n), { props: a, internalRef: u } = ls({
      ...i,
      externalSlotProps: s
    }), l = ze(u, s == null ? void 0 : s.ref, (_a2 = e.additionalProps) == null ? void 0 : _a2.ref);
    return ss(t, {
      ...a,
      ref: l
    }, n);
  };
  dr = function(e) {
    var _a2;
    return parseInt(g.version, 10) >= 19 ? ((_a2 = e == null ? void 0 : e.props) == null ? void 0 : _a2.ref) || null : (e == null ? void 0 : e.ref) || null;
  };
  const us = g.createContext();
  sp = function({ value: e, ...t }) {
    return O.jsx(us.Provider, {
      value: e ?? true,
      ...t
    });
  };
  let ds;
  fc = () => g.useContext(us) ?? false;
  ds = g.createContext(void 0);
  ap = function({ value: e, children: t }) {
    return O.jsx(ds.Provider, {
      value: e,
      children: t
    });
  };
  function pc(e) {
    const { theme: t, name: r, props: n } = e;
    if (!t || !t.components || !t.components[r]) return n;
    const o = t.components[r];
    return o.defaultProps ? $n(o.defaultProps, n) : !o.styleOverrides && !o.variants ? $n(o, n) : n;
  }
  function hc({ props: e, name: t }) {
    const r = g.useContext(ds);
    return pc({
      props: e,
      name: t,
      theme: {
        components: r
      }
    });
  }
  const Xo = {
    theme: void 0
  };
  function mc(e) {
    let t, r;
    return function(o) {
      let i = t;
      return (i === void 0 || o.theme !== r) && (Xo.theme = o.theme, i = Ji(e(Xo)), t = i, r = o.theme), i;
    };
  }
  function gc(e = "") {
    function t(...n) {
      if (!n.length) return "";
      const o = n[0];
      return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
    }
    return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
  }
  const Qo = (e, t, r, n = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
    });
  }, yc = (e, t, r) => {
    function n(o, i = [], s = []) {
      Object.entries(o).forEach(([a, u]) => {
        (!r || r && !r([
          ...i,
          a
        ])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [
          ...i,
          a
        ], Array.isArray(u) ? [
          ...s,
          a
        ] : s) : t([
          ...i,
          a
        ], u, s));
      });
    }
    n(e);
  }, bc = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  function vn(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, o = {}, i = {}, s = {};
    return yc(e, (a, u, l) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(a, u))) {
        const h = `--${r ? `${r}-` : ""}${a.join("-")}`, m = bc(a, u);
        Object.assign(o, {
          [h]: m
        }), Qo(i, a, `var(${h})`, l), Qo(s, a, `var(${h}, ${m})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: o,
      vars: i,
      varsWithDefaults: s
    };
  }
  function vc(e, t = {}) {
    const { getSelector: r = w, disableCssColorScheme: n, colorSchemeSelector: o } = t, { colorSchemes: i = {}, components: s, defaultColorScheme: a = "light", ...u } = e, { vars: l, css: h, varsWithDefaults: m } = vn(u, t);
    let y = m;
    const S = {}, { [a]: b, ...C } = i;
    if (Object.entries(C || {}).forEach(([v, x]) => {
      const { vars: T, css: P, varsWithDefaults: A } = vn(x, t);
      y = Oe(y, A), S[v] = {
        css: P,
        vars: T
      };
    }), b) {
      const { css: v, vars: x, varsWithDefaults: T } = vn(b, t);
      y = Oe(y, T), S[a] = {
        css: v,
        vars: x
      };
    }
    function w(v, x) {
      var _a2, _b;
      let T = o;
      if (o === "class" && (T = ".%s"), o === "data" && (T = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (T = `[${o}="%s"]`), v) {
        if (T === "media") return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a2 = i[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || v})`]: {
            ":root": x
          }
        };
        if (T) return e.defaultColorScheme === v ? `:root, ${T.replace("%s", String(v))}` : T.replace("%s", String(v));
      }
      return ":root";
    }
    return {
      vars: y,
      generateThemeVars: () => {
        let v = {
          ...l
        };
        return Object.entries(S).forEach(([, { vars: x }]) => {
          v = Oe(v, x);
        }), v;
      },
      generateStyleSheets: () => {
        var _a2, _b;
        const v = [], x = e.defaultColorScheme || "light";
        function T(_, D) {
          Object.keys(D).length && v.push(typeof _ == "string" ? {
            [_]: {
              ...D
            }
          } : _);
        }
        T(r(void 0, {
          ...h
        }), h);
        const { [x]: P, ...A } = S;
        if (P) {
          const { css: _ } = P, D = (_b = (_a2 = i[x]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, c = !n && D ? {
            colorScheme: D,
            ..._
          } : {
            ..._
          };
          T(r(x, {
            ...c
          }), c);
        }
        return Object.entries(A).forEach(([_, { css: D }]) => {
          var _a3, _b2;
          const c = (_b2 = (_a3 = i[_]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, I = !n && c ? {
            colorScheme: c,
            ...D
          } : {
            ...D
          };
          T(r(_, {
            ...I
          }), I);
        }), v;
      }
    };
  }
  function xc(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  }
  function fs() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: er.white,
        default: er.white
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
  const Sc = fs();
  function ps() {
    return {
      text: {
        primary: er.white,
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
        active: er.white,
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
  const Zo = ps();
  function Jo(e, t, r, n) {
    const o = n.light || n, i = n.dark || n * 1.5;
    e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = uo(e.main, o) : t === "dark" && (e.dark = co(e.main, i)));
  }
  function Cc(e = "light") {
    return e === "dark" ? {
      main: Tt[200],
      light: Tt[50],
      dark: Tt[400]
    } : {
      main: Tt[700],
      light: Tt[400],
      dark: Tt[800]
    };
  }
  function wc(e = "light") {
    return e === "dark" ? {
      main: Pt[200],
      light: Pt[50],
      dark: Pt[400]
    } : {
      main: Pt[500],
      light: Pt[300],
      dark: Pt[700]
    };
  }
  function Rc(e = "light") {
    return e === "dark" ? {
      main: Et[500],
      light: Et[300],
      dark: Et[700]
    } : {
      main: Et[700],
      light: Et[400],
      dark: Et[800]
    };
  }
  function kc(e = "light") {
    return e === "dark" ? {
      main: At[400],
      light: At[300],
      dark: At[700]
    } : {
      main: At[700],
      light: At[500],
      dark: At[900]
    };
  }
  function Ec(e = "light") {
    return e === "dark" ? {
      main: $t[400],
      light: $t[300],
      dark: $t[700]
    } : {
      main: $t[800],
      light: $t[500],
      dark: $t[900]
    };
  }
  function Pc(e = "light") {
    return e === "dark" ? {
      main: Ht[400],
      light: Ht[300],
      dark: Ht[700]
    } : {
      main: "#ed6c02",
      light: Ht[500],
      dark: Ht[900]
    };
  }
  function ho(e) {
    const { mode: t = "light", contrastThreshold: r = 3, tonalOffset: n = 0.2, ...o } = e, i = e.primary || Cc(t), s = e.secondary || wc(t), a = e.error || Rc(t), u = e.info || kc(t), l = e.success || Ec(t), h = e.warning || Pc(t);
    function m(C) {
      return oc(C, Zo.text.primary) >= r ? Zo.text.primary : Sc.text.primary;
    }
    const y = ({ color: C, name: w, mainShade: R = 500, lightShade: E = 300, darkShade: v = 700 }) => {
      if (C = {
        ...C
      }, !C.main && C[R] && (C.main = C[R]), !C.hasOwnProperty("main")) throw new Error(it(11, w ? ` (${w})` : "", R));
      if (typeof C.main != "string") throw new Error(it(12, w ? ` (${w})` : "", JSON.stringify(C.main)));
      return Jo(C, "light", E, n), Jo(C, "dark", v, n), C.contrastText || (C.contrastText = m(C.main)), C;
    };
    let S;
    return t === "light" ? S = fs() : t === "dark" && (S = ps()), Oe({
      common: {
        ...er
      },
      mode: t,
      primary: y({
        color: i,
        name: "primary"
      }),
      secondary: y({
        color: s,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: y({
        color: a,
        name: "error"
      }),
      warning: y({
        color: h,
        name: "warning"
      }),
      info: y({
        color: u,
        name: "info"
      }),
      success: y({
        color: l,
        name: "success"
      }),
      grey: Ns,
      contrastThreshold: r,
      getContrastText: m,
      augmentColor: y,
      tonalOffset: n,
      ...S
    }, o);
  }
  function Tc(e) {
    const t = {};
    return Object.entries(e).forEach((n) => {
      const [o, i] = n;
      typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
    }), t;
  }
  function Ac(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [e.up("sm")]: {
          minHeight: 64
        }
      },
      ...t
    };
  }
  function $c(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const ei = {
    textTransform: "uppercase"
  }, ti = '"Roboto", "Helvetica", "Arial", sans-serif';
  Ic = function(e, t) {
    const { fontFamily: r = ti, fontSize: n = 14, fontWeightLight: o = 300, fontWeightRegular: i = 400, fontWeightMedium: s = 500, fontWeightBold: a = 700, htmlFontSize: u = 16, allVariants: l, pxToRem: h, ...m } = typeof t == "function" ? t(e) : t, y = n / 14, S = h || ((w) => `${w / u * y}rem`), b = (w, R, E, v, x) => ({
      fontFamily: r,
      fontWeight: w,
      fontSize: S(R),
      lineHeight: E,
      ...r === ti ? {
        letterSpacing: `${$c(v / R)}em`
      } : {},
      ...x,
      ...l
    }), C = {
      h1: b(o, 96, 1.167, -1.5),
      h2: b(o, 60, 1.2, -0.5),
      h3: b(i, 48, 1.167, 0),
      h4: b(i, 34, 1.235, 0.25),
      h5: b(i, 24, 1.334, 0),
      h6: b(s, 20, 1.6, 0.15),
      subtitle1: b(i, 16, 1.75, 0.15),
      subtitle2: b(s, 14, 1.57, 0.1),
      body1: b(i, 16, 1.5, 0.15),
      body2: b(i, 14, 1.43, 0.15),
      button: b(s, 14, 1.75, 0.4, ei),
      caption: b(i, 12, 1.66, 0.4),
      overline: b(i, 12, 2.66, 1, ei),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return Oe({
      htmlFontSize: u,
      pxToRem: S,
      fontFamily: r,
      fontSize: n,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...C
    }, m, {
      clone: false
    });
  };
  const Mc = 0.2, Oc = 0.14, _c = 0.12;
  function be(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mc})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Oc})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_c})`
    ].join(",");
  }
  let Fc, Bc;
  Fc = [
    "none",
    be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  Bc = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  Nc = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function ri(e) {
    return `${Math.round(e)}ms`;
  }
  function Lc(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
  }
  function zc(e) {
    const t = {
      ...Bc,
      ...e.easing
    }, r = {
      ...Nc,
      ...e.duration
    };
    return {
      getAutoHeightDuration: Lc,
      create: (o = [
        "all"
      ], i = {}) => {
        const { duration: s = r.standard, easing: a = t.easeInOut, delay: u = 0, ...l } = i;
        return (Array.isArray(o) ? o : [
          o
        ]).map((h) => `${h} ${typeof s == "string" ? s : ri(s)} ${a} ${typeof u == "string" ? u : ri(u)}`).join(",");
      },
      ...e,
      easing: t,
      duration: r
    };
  }
  const Dc = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function jc(e) {
    return Ze(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
  }
  function hs(e = {}) {
    const t = {
      ...e
    };
    function r(n) {
      const o = Object.entries(n);
      for (let i = 0; i < o.length; i++) {
        const [s, a] = o[i];
        !jc(a) || s.startsWith("unstable_") ? delete n[s] : Ze(a) && (n[s] = {
          ...a
        }, r(n[s]));
      }
    }
    return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function Mn(e = {}, ...t) {
    const { breakpoints: r, mixins: n = {}, spacing: o, palette: i = {}, transitions: s = {}, typography: a = {}, shape: u, ...l } = e;
    if (e.vars && e.generateThemeVars === void 0) throw new Error(it(20));
    const h = ho(i), m = so(e);
    let y = Oe(m, {
      mixins: Ac(m.breakpoints, n),
      palette: h,
      shadows: Fc.slice(),
      typography: Ic(h, a),
      transitions: zc(s),
      zIndex: {
        ...Dc
      }
    });
    return y = Oe(y, l), y = t.reduce((S, b) => Oe(S, b), y), y.unstable_sxConfig = {
      ...ur,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, y.unstable_sx = function(b) {
      return vt({
        sx: b,
        theme: this
      });
    }, y.toRuntimeSource = hs, y;
  }
  function On(e) {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
  }
  const Wc = [
    ...Array(25)
  ].map((e, t) => {
    if (t === 0) return "none";
    const r = On(t);
    return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
  });
  function ms(e) {
    return {
      inputPlaceholder: e === "dark" ? 0.5 : 0.42,
      inputUnderline: e === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
      switchTrack: e === "dark" ? 0.3 : 0.38
    };
  }
  function gs(e) {
    return e === "dark" ? Wc : [];
  }
  function Hc(e) {
    const { palette: t = {
      mode: "light"
    }, opacity: r, overlays: n, ...o } = e, i = ho(t);
    return {
      palette: i,
      opacity: {
        ...ms(i.mode),
        ...r
      },
      overlays: n || gs(i.mode),
      ...o
    };
  }
  function Uc(e) {
    var _a2;
    return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!((_a2 = e[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const Vc = (e) => [
    ...[
      ...Array(25)
    ].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`
  ], Kc = (e) => (t, r) => {
    const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
    let i = o;
    if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
      if (t === "dark") {
        const s = {};
        return Vc(e.cssVarPrefix).forEach((a) => {
          s[a] = r[a], delete r[a];
        }), i === "media" ? {
          [n]: r,
          "@media (prefers-color-scheme: dark)": {
            [n]: s
          }
        } : i ? {
          [i.replace("%s", t)]: s,
          [`${n}, ${i.replace("%s", t)}`]: r
        } : {
          [n]: {
            ...r,
            ...s
          }
        };
      }
      if (i && i !== "media") return `${n}, ${i.replace("%s", String(t))}`;
    } else if (t) {
      if (i === "media") return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
      if (i) return i.replace("%s", String(t));
    }
    return n;
  };
  function Gc(e, t) {
    t.forEach((r) => {
      e[r] || (e[r] = {});
    });
  }
  function k(e, t, r) {
    !e[t] && r && (e[t] = r);
  }
  function Yt(e) {
    return typeof e != "string" || !e.startsWith("hsl") ? e : ts(e);
  }
  function rt(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = qt(Yt(e[t])));
  }
  function qc(e) {
    return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
  }
  const qe = (e) => {
    try {
      return e();
    } catch {
    }
  }, Yc = (e = "mui") => gc(e);
  function xn(e, t, r, n) {
    if (!t) return;
    t = t === true ? {} : t;
    const o = n === "dark" ? "dark" : "light";
    if (!r) {
      e[n] = Hc({
        ...t,
        palette: {
          mode: o,
          ...t == null ? void 0 : t.palette
        }
      });
      return;
    }
    const { palette: i, ...s } = Mn({
      ...r,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return e[n] = {
      ...t,
      palette: i,
      opacity: {
        ...ms(o),
        ...t == null ? void 0 : t.opacity
      },
      overlays: (t == null ? void 0 : t.overlays) || gs(o)
    }, s;
  }
  function Xc(e = {}, ...t) {
    const { colorSchemes: r = {
      light: true
    }, defaultColorScheme: n, disableCssColorScheme: o = false, cssVarPrefix: i = "mui", shouldSkipGeneratingVar: s = Uc, colorSchemeSelector: a = r.light && r.dark ? "media" : void 0, rootSelector: u = ":root", ...l } = e, h = Object.keys(r)[0], m = n || (r.light && h !== "light" ? "light" : h), y = Yc(i), { [m]: S, light: b, dark: C, ...w } = r, R = {
      ...w
    };
    let E = S;
    if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (E = true), !E) throw new Error(it(21, m));
    const v = xn(R, E, l, m);
    b && !R.light && xn(R, b, void 0, "light"), C && !R.dark && xn(R, C, void 0, "dark");
    let x = {
      defaultColorScheme: m,
      ...v,
      cssVarPrefix: i,
      colorSchemeSelector: a,
      rootSelector: u,
      getCssVar: y,
      colorSchemes: R,
      font: {
        ...Tc(v.typography),
        ...v.font
      },
      spacing: qc(l.spacing)
    };
    Object.keys(x.colorSchemes).forEach((D) => {
      const c = x.colorSchemes[D].palette, I = (z) => {
        const j = z.split("-"), H = j[1], M = j[2];
        return y(z, c[H][M]);
      };
      if (c.mode === "light" && (k(c.common, "background", "#fff"), k(c.common, "onBackground", "#000")), c.mode === "dark" && (k(c.common, "background", "#000"), k(c.common, "onBackground", "#fff")), Gc(c, [
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
      ]), c.mode === "light") {
        k(c.Alert, "errorColor", fe(c.error.light, 0.6)), k(c.Alert, "infoColor", fe(c.info.light, 0.6)), k(c.Alert, "successColor", fe(c.success.light, 0.6)), k(c.Alert, "warningColor", fe(c.warning.light, 0.6)), k(c.Alert, "errorFilledBg", I("palette-error-main")), k(c.Alert, "infoFilledBg", I("palette-info-main")), k(c.Alert, "successFilledBg", I("palette-success-main")), k(c.Alert, "warningFilledBg", I("palette-warning-main")), k(c.Alert, "errorFilledColor", qe(() => c.getContrastText(c.error.main))), k(c.Alert, "infoFilledColor", qe(() => c.getContrastText(c.info.main))), k(c.Alert, "successFilledColor", qe(() => c.getContrastText(c.success.main))), k(c.Alert, "warningFilledColor", qe(() => c.getContrastText(c.warning.main))), k(c.Alert, "errorStandardBg", pe(c.error.light, 0.9)), k(c.Alert, "infoStandardBg", pe(c.info.light, 0.9)), k(c.Alert, "successStandardBg", pe(c.success.light, 0.9)), k(c.Alert, "warningStandardBg", pe(c.warning.light, 0.9)), k(c.Alert, "errorIconColor", I("palette-error-main")), k(c.Alert, "infoIconColor", I("palette-info-main")), k(c.Alert, "successIconColor", I("palette-success-main")), k(c.Alert, "warningIconColor", I("palette-warning-main")), k(c.AppBar, "defaultBg", I("palette-grey-100")), k(c.Avatar, "defaultBg", I("palette-grey-400")), k(c.Button, "inheritContainedBg", I("palette-grey-300")), k(c.Button, "inheritContainedHoverBg", I("palette-grey-A100")), k(c.Chip, "defaultBorder", I("palette-grey-400")), k(c.Chip, "defaultAvatarColor", I("palette-grey-700")), k(c.Chip, "defaultIconColor", I("palette-grey-700")), k(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(c.LinearProgress, "primaryBg", pe(c.primary.main, 0.62)), k(c.LinearProgress, "secondaryBg", pe(c.secondary.main, 0.62)), k(c.LinearProgress, "errorBg", pe(c.error.main, 0.62)), k(c.LinearProgress, "infoBg", pe(c.info.main, 0.62)), k(c.LinearProgress, "successBg", pe(c.success.main, 0.62)), k(c.LinearProgress, "warningBg", pe(c.warning.main, 0.62)), k(c.Skeleton, "bg", `rgba(${I("palette-text-primaryChannel")} / 0.11)`), k(c.Slider, "primaryTrack", pe(c.primary.main, 0.62)), k(c.Slider, "secondaryTrack", pe(c.secondary.main, 0.62)), k(c.Slider, "errorTrack", pe(c.error.main, 0.62)), k(c.Slider, "infoTrack", pe(c.info.main, 0.62)), k(c.Slider, "successTrack", pe(c.success.main, 0.62)), k(c.Slider, "warningTrack", pe(c.warning.main, 0.62));
        const z = hr(c.background.default, 0.8);
        k(c.SnackbarContent, "bg", z), k(c.SnackbarContent, "color", qe(() => c.getContrastText(z))), k(c.SpeedDialAction, "fabHoverBg", hr(c.background.paper, 0.15)), k(c.StepConnector, "border", I("palette-grey-400")), k(c.StepContent, "border", I("palette-grey-400")), k(c.Switch, "defaultColor", I("palette-common-white")), k(c.Switch, "defaultDisabledColor", I("palette-grey-100")), k(c.Switch, "primaryDisabledColor", pe(c.primary.main, 0.62)), k(c.Switch, "secondaryDisabledColor", pe(c.secondary.main, 0.62)), k(c.Switch, "errorDisabledColor", pe(c.error.main, 0.62)), k(c.Switch, "infoDisabledColor", pe(c.info.main, 0.62)), k(c.Switch, "successDisabledColor", pe(c.success.main, 0.62)), k(c.Switch, "warningDisabledColor", pe(c.warning.main, 0.62)), k(c.TableCell, "border", pe(pr(c.divider, 1), 0.88)), k(c.Tooltip, "bg", pr(c.grey[700], 0.92));
      }
      if (c.mode === "dark") {
        k(c.Alert, "errorColor", pe(c.error.light, 0.6)), k(c.Alert, "infoColor", pe(c.info.light, 0.6)), k(c.Alert, "successColor", pe(c.success.light, 0.6)), k(c.Alert, "warningColor", pe(c.warning.light, 0.6)), k(c.Alert, "errorFilledBg", I("palette-error-dark")), k(c.Alert, "infoFilledBg", I("palette-info-dark")), k(c.Alert, "successFilledBg", I("palette-success-dark")), k(c.Alert, "warningFilledBg", I("palette-warning-dark")), k(c.Alert, "errorFilledColor", qe(() => c.getContrastText(c.error.dark))), k(c.Alert, "infoFilledColor", qe(() => c.getContrastText(c.info.dark))), k(c.Alert, "successFilledColor", qe(() => c.getContrastText(c.success.dark))), k(c.Alert, "warningFilledColor", qe(() => c.getContrastText(c.warning.dark))), k(c.Alert, "errorStandardBg", fe(c.error.light, 0.9)), k(c.Alert, "infoStandardBg", fe(c.info.light, 0.9)), k(c.Alert, "successStandardBg", fe(c.success.light, 0.9)), k(c.Alert, "warningStandardBg", fe(c.warning.light, 0.9)), k(c.Alert, "errorIconColor", I("palette-error-main")), k(c.Alert, "infoIconColor", I("palette-info-main")), k(c.Alert, "successIconColor", I("palette-success-main")), k(c.Alert, "warningIconColor", I("palette-warning-main")), k(c.AppBar, "defaultBg", I("palette-grey-900")), k(c.AppBar, "darkBg", I("palette-background-paper")), k(c.AppBar, "darkColor", I("palette-text-primary")), k(c.Avatar, "defaultBg", I("palette-grey-600")), k(c.Button, "inheritContainedBg", I("palette-grey-800")), k(c.Button, "inheritContainedHoverBg", I("palette-grey-700")), k(c.Chip, "defaultBorder", I("palette-grey-700")), k(c.Chip, "defaultAvatarColor", I("palette-grey-300")), k(c.Chip, "defaultIconColor", I("palette-grey-300")), k(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(c.LinearProgress, "primaryBg", fe(c.primary.main, 0.5)), k(c.LinearProgress, "secondaryBg", fe(c.secondary.main, 0.5)), k(c.LinearProgress, "errorBg", fe(c.error.main, 0.5)), k(c.LinearProgress, "infoBg", fe(c.info.main, 0.5)), k(c.LinearProgress, "successBg", fe(c.success.main, 0.5)), k(c.LinearProgress, "warningBg", fe(c.warning.main, 0.5)), k(c.Skeleton, "bg", `rgba(${I("palette-text-primaryChannel")} / 0.13)`), k(c.Slider, "primaryTrack", fe(c.primary.main, 0.5)), k(c.Slider, "secondaryTrack", fe(c.secondary.main, 0.5)), k(c.Slider, "errorTrack", fe(c.error.main, 0.5)), k(c.Slider, "infoTrack", fe(c.info.main, 0.5)), k(c.Slider, "successTrack", fe(c.success.main, 0.5)), k(c.Slider, "warningTrack", fe(c.warning.main, 0.5));
        const z = hr(c.background.default, 0.98);
        k(c.SnackbarContent, "bg", z), k(c.SnackbarContent, "color", qe(() => c.getContrastText(z))), k(c.SpeedDialAction, "fabHoverBg", hr(c.background.paper, 0.15)), k(c.StepConnector, "border", I("palette-grey-600")), k(c.StepContent, "border", I("palette-grey-600")), k(c.Switch, "defaultColor", I("palette-grey-300")), k(c.Switch, "defaultDisabledColor", I("palette-grey-600")), k(c.Switch, "primaryDisabledColor", fe(c.primary.main, 0.55)), k(c.Switch, "secondaryDisabledColor", fe(c.secondary.main, 0.55)), k(c.Switch, "errorDisabledColor", fe(c.error.main, 0.55)), k(c.Switch, "infoDisabledColor", fe(c.info.main, 0.55)), k(c.Switch, "successDisabledColor", fe(c.success.main, 0.55)), k(c.Switch, "warningDisabledColor", fe(c.warning.main, 0.55)), k(c.TableCell, "border", fe(pr(c.divider, 1), 0.68)), k(c.Tooltip, "bg", pr(c.grey[700], 0.92));
      }
      rt(c.background, "default"), rt(c.background, "paper"), rt(c.common, "background"), rt(c.common, "onBackground"), rt(c, "divider"), Object.keys(c).forEach((z) => {
        const j = c[z];
        z !== "tonalOffset" && j && typeof j == "object" && (j.main && k(c[z], "mainChannel", qt(Yt(j.main))), j.light && k(c[z], "lightChannel", qt(Yt(j.light))), j.dark && k(c[z], "darkChannel", qt(Yt(j.dark))), j.contrastText && k(c[z], "contrastTextChannel", qt(Yt(j.contrastText))), z === "text" && (rt(c[z], "primary"), rt(c[z], "secondary")), z === "action" && (j.active && rt(c[z], "active"), j.selected && rt(c[z], "selected")));
      });
    }), x = t.reduce((D, c) => Oe(D, c), x);
    const T = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: s,
      getSelector: Kc(x)
    }, { vars: P, generateThemeVars: A, generateStyleSheets: _ } = vc(x, T);
    return x.vars = P, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([D, c]) => {
      x[D] = c;
    }), x.generateThemeVars = A, x.generateStyleSheets = _, x.generateSpacing = function() {
      return Yi(l.spacing, oo(this));
    }, x.getColorSchemeSelector = xc(a), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = s, x.unstable_sxConfig = {
      ...ur,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, x.unstable_sx = function(c) {
      return vt({
        sx: c,
        theme: this
      });
    }, x.toRuntimeSource = hs, x;
  }
  function ni(e, t, r) {
    e.colorSchemes && r && (e.colorSchemes[t] = {
      ...r !== true && r,
      palette: ho({
        ...r === true ? {} : r.palette,
        mode: t
      })
    });
  }
  ys = function(e = {}, ...t) {
    const { palette: r, cssVariables: n = false, colorSchemes: o = r ? void 0 : {
      light: true
    }, defaultColorScheme: i = r == null ? void 0 : r.mode, ...s } = e, a = i || "light", u = o == null ? void 0 : o[a], l = {
      ...o,
      ...r ? {
        [a]: {
          ...typeof u != "boolean" && u,
          palette: r
        }
      } : void 0
    };
    if (n === false) {
      if (!("colorSchemes" in e)) return Mn(e, ...t);
      let h = r;
      "palette" in e || l[a] && (l[a] !== true ? h = l[a].palette : a === "dark" && (h = {
        mode: "dark"
      }));
      const m = Mn({
        ...e,
        palette: h
      }, ...t);
      return m.defaultColorScheme = a, m.colorSchemes = l, m.palette.mode === "light" && (m.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: m.palette
      }, ni(m, "dark", l.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: m.palette
      }, ni(m, "light", l.light)), m;
    }
    return !r && !("light" in l) && a === "light" && (l.light = true), Xc({
      ...s,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof n != "boolean" && n
    }, ...t);
  };
  mo = ys();
  go = function() {
    const e = ao(mo);
    return e[Ir] || e;
  };
  bs = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  et = (e) => bs(e) && e !== "classes";
  G = Xl({
    themeId: Ir,
    defaultTheme: mo,
    rootShouldForwardProp: et
  });
  Qc = function(e) {
    return O.jsx(Wl, {
      ...e,
      defaultTheme: mo,
      themeId: Ir
    });
  };
  function Zc(e) {
    return function(r) {
      return O.jsx(Qc, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      });
    };
  }
  function Jc() {
    return Xi;
  }
  ke = mc;
  Re = function(e) {
    return hc(e);
  };
  function eu(e) {
    return ve("MuiSvgIcon", e);
  }
  ge("MuiSvgIcon", [
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
  let tu, ru;
  tu = (e) => {
    const { color: t, fontSize: r, classes: n } = e, o = {
      root: [
        "root",
        t !== "inherit" && `color${ne(t)}`,
        `fontSize${ne(r)}`
      ]
    };
    return Se(o, eu, n);
  };
  ru = G("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "inherit" && t[`color${ne(r.color)}`],
        t[`fontSize${ne(r.fontSize)}`]
      ];
    }
  })(ke(({ theme: e }) => {
    var _a2, _b, _c2, _d2, _e, _f2, _g, _h, _i2, _j, _k, _l2, _m, _n2;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (_d2 = (_a2 = e.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d2.call(_a2, "fill", {
        duration: (_c2 = (_b = (e.vars ?? e).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c2.shorter
      }),
      variants: [
        {
          props: (t) => !t.hasSvgAsChild,
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
            fontSize: ((_f2 = (_e = e.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem"
          }
        },
        {
          props: {
            fontSize: "medium"
          },
          style: {
            fontSize: ((_h = (_g = e.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
          }
        },
        {
          props: {
            fontSize: "large"
          },
          style: {
            fontSize: ((_j = (_i2 = e.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem"
          }
        },
        ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => {
          var _a3, _b2;
          return {
            props: {
              color: t
            },
            style: {
              color: (_b2 = (_a3 = (e.vars ?? e).palette) == null ? void 0 : _a3[t]) == null ? void 0 : _b2.main
            }
          };
        }),
        {
          props: {
            color: "action"
          },
          style: {
            color: (_l2 = (_k = (e.vars ?? e).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active
          }
        },
        {
          props: {
            color: "disabled"
          },
          style: {
            color: (_n2 = (_m = (e.vars ?? e).palette) == null ? void 0 : _m.action) == null ? void 0 : _n2.disabled
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
  _n = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiSvgIcon"
    }), { children: o, className: i, color: s = "inherit", component: a = "svg", fontSize: u = "medium", htmlColor: l, inheritViewBox: h = false, titleAccess: m, viewBox: y = "0 0 24 24", ...S } = n, b = g.isValidElement(o) && o.type === "svg", C = {
      ...n,
      color: s,
      component: a,
      fontSize: u,
      instanceFontSize: t.fontSize,
      inheritViewBox: h,
      viewBox: y,
      hasSvgAsChild: b
    }, w = {};
    h || (w.viewBox = y);
    const R = tu(C);
    return O.jsxs(ru, {
      as: a,
      className: J(R.root, i),
      focusable: "false",
      color: l,
      "aria-hidden": m ? void 0 : true,
      role: m ? "img" : void 0,
      ref: r,
      ...w,
      ...S,
      ...b && o.props,
      ownerState: C,
      children: [
        b ? o.props.children : o,
        m ? O.jsx("title", {
          children: m
        }) : null
      ]
    });
  });
  _n.muiName = "SvgIcon";
  nu = function(e, t) {
    function r(n, o) {
      return O.jsx(_n, {
        "data-testid": `${t}Icon`,
        ref: o,
        ...n,
        children: e
      });
    }
    return r.muiName = _n.muiName, g.memo(g.forwardRef(r));
  };
  ou = function(e, t) {
    if (!e) return t;
    if (typeof e == "function" || typeof t == "function") return (o) => {
      const i = typeof t == "function" ? t(o) : t, s = typeof e == "function" ? e({
        ...o,
        ...i
      }) : e, a = J(o == null ? void 0 : o.className, i == null ? void 0 : i.className, s == null ? void 0 : s.className);
      return {
        ...i,
        ...s,
        ...!!a && {
          className: a
        },
        ...(i == null ? void 0 : i.style) && (s == null ? void 0 : s.style) && {
          style: {
            ...i.style,
            ...s.style
          }
        },
        ...(i == null ? void 0 : i.sx) && (s == null ? void 0 : s.sx) && {
          sx: [
            ...Array.isArray(i.sx) ? i.sx : [
              i.sx
            ],
            ...Array.isArray(s.sx) ? s.sx : [
              s.sx
            ]
          ]
        }
      };
    };
    const r = t, n = J(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
    return {
      ...t,
      ...e,
      ...!!n && {
        className: n
      },
      ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
        style: {
          ...r.style,
          ...e.style
        }
      },
      ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
        sx: [
          ...Array.isArray(r.sx) ? r.sx : [
            r.sx
          ],
          ...Array.isArray(e.sx) ? e.sx : [
            e.sx
          ]
        ]
      }
    };
  };
  vs = function(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
    return r;
  };
  function Fn(e, t) {
    return Fn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
      return r.__proto__ = n, r;
    }, Fn(e, t);
  }
  xs = function(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Fn(e, t);
  };
  const { initPromise: iu } = $s, su = iu.then((e) => e.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), au = await su.then((e) => e());
  Ss = au;
  const mr = wi(Ss), oi = {
    disabled: false
  }, Er = ot.createContext(null);
  let Xt, ht, mt, Mt, Bn;
  lu = function(t) {
    return t.scrollTop;
  };
  Xt = "unmounted";
  ht = "exited";
  mt = "entering";
  Mt = "entered";
  Bn = "exiting";
  tt = (function(e) {
    xs(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = o, a = s && !s.isMounting ? n.enter : n.appear, u;
      return i.appearStatus = null, n.in ? a ? (u = ht, i.appearStatus = mt) : u = Mt : n.unmountOnExit || n.mountOnEnter ? u = Xt : u = ht, i.state = {
        status: u
      }, i.nextCallback = null, i;
    }
    t.getDerivedStateFromProps = function(o, i) {
      var s = o.in;
      return s && i.status === Xt ? {
        status: ht
      } : null;
    };
    var r = t.prototype;
    return r.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, r.componentDidUpdate = function(o) {
      var i = null;
      if (o !== this.props) {
        var s = this.state.status;
        this.props.in ? s !== mt && s !== Mt && (i = mt) : (s === mt || s === Mt) && (i = Bn);
      }
      this.updateStatus(false, i);
    }, r.componentWillUnmount = function() {
      this.cancelNextCallback();
    }, r.getTimeouts = function() {
      var o = this.props.timeout, i, s, a;
      return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
        exit: i,
        enter: s,
        appear: a
      };
    }, r.updateStatus = function(o, i) {
      if (o === void 0 && (o = false), i !== null) if (this.cancelNextCallback(), i === mt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : mr.findDOMNode(this);
          s && lu(s);
        }
        this.performEnter(o);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === ht && this.setState({
        status: Xt
      });
    }, r.performEnter = function(o) {
      var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, u = this.props.nodeRef ? [
        a
      ] : [
        mr.findDOMNode(this),
        a
      ], l = u[0], h = u[1], m = this.getTimeouts(), y = a ? m.appear : m.enter;
      if (!o && !s || oi.disabled) {
        this.safeSetState({
          status: Mt
        }, function() {
          i.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, h), this.safeSetState({
        status: mt
      }, function() {
        i.props.onEntering(l, h), i.onTransitionEnd(y, function() {
          i.safeSetState({
            status: Mt
          }, function() {
            i.props.onEntered(l, h);
          });
        });
      });
    }, r.performExit = function() {
      var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : mr.findDOMNode(this);
      if (!i || oi.disabled) {
        this.safeSetState({
          status: ht
        }, function() {
          o.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: Bn
      }, function() {
        o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
          o.safeSetState({
            status: ht
          }, function() {
            o.props.onExited(a);
          });
        });
      });
    }, r.cancelNextCallback = function() {
      this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
    }, r.safeSetState = function(o, i) {
      i = this.setNextCallback(i), this.setState(o, i);
    }, r.setNextCallback = function(o) {
      var i = this, s = true;
      return this.nextCallback = function(a) {
        s && (s = false, i.nextCallback = null, o(a));
      }, this.nextCallback.cancel = function() {
        s = false;
      }, this.nextCallback;
    }, r.onTransitionEnd = function(o, i) {
      this.setNextCallback(i);
      var s = this.props.nodeRef ? this.props.nodeRef.current : mr.findDOMNode(this), a = o == null && !this.props.addEndListener;
      if (!s || a) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var u = this.props.nodeRef ? [
          this.nextCallback
        ] : [
          s,
          this.nextCallback
        ], l = u[0], h = u[1];
        this.props.addEndListener(l, h);
      }
      o != null && setTimeout(this.nextCallback, o);
    }, r.render = function() {
      var o = this.state.status;
      if (o === Xt) return null;
      var i = this.props, s = i.children;
      i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
      var a = vs(i, [
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
      return ot.createElement(Er.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : ot.cloneElement(ot.Children.only(s), a));
    }, t;
  })(ot.Component);
  tt.contextType = Er;
  tt.propTypes = {};
  function It() {
  }
  tt.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: It,
    onEntering: It,
    onEntered: It,
    onExit: It,
    onExiting: It,
    onExited: It
  };
  tt.UNMOUNTED = Xt;
  tt.EXITED = ht;
  tt.ENTERING = mt;
  tt.ENTERED = Mt;
  tt.EXITING = Bn;
  function cu(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function yo(e, t) {
    var r = function(i) {
      return t && g.isValidElement(i) ? t(i) : i;
    }, n = /* @__PURE__ */ Object.create(null);
    return e && g.Children.map(e, function(o) {
      return o;
    }).forEach(function(o) {
      n[o.key] = r(o);
    }), n;
  }
  function uu(e, t) {
    e = e || {}, t = t || {};
    function r(h) {
      return h in t ? t[h] : e[h];
    }
    var n = /* @__PURE__ */ Object.create(null), o = [];
    for (var i in e) i in t ? o.length && (n[i] = o, o = []) : o.push(i);
    var s, a = {};
    for (var u in t) {
      if (n[u]) for (s = 0; s < n[u].length; s++) {
        var l = n[u][s];
        a[n[u][s]] = r(l);
      }
      a[u] = r(u);
    }
    for (s = 0; s < o.length; s++) a[o[s]] = r(o[s]);
    return a;
  }
  function yt(e, t, r) {
    return r[t] != null ? r[t] : e.props[t];
  }
  function du(e, t) {
    return yo(e.children, function(r) {
      return g.cloneElement(r, {
        onExited: t.bind(null, r),
        in: true,
        appear: yt(r, "appear", e),
        enter: yt(r, "enter", e),
        exit: yt(r, "exit", e)
      });
    });
  }
  function fu(e, t, r) {
    var n = yo(e.children), o = uu(t, n);
    return Object.keys(o).forEach(function(i) {
      var s = o[i];
      if (g.isValidElement(s)) {
        var a = i in t, u = i in n, l = t[i], h = g.isValidElement(l) && !l.props.in;
        u && (!a || h) ? o[i] = g.cloneElement(s, {
          onExited: r.bind(null, s),
          in: true,
          exit: yt(s, "exit", e),
          enter: yt(s, "enter", e)
        }) : !u && a && !h ? o[i] = g.cloneElement(s, {
          in: false
        }) : u && a && g.isValidElement(l) && (o[i] = g.cloneElement(s, {
          onExited: r.bind(null, s),
          in: l.props.in,
          exit: yt(s, "exit", e),
          enter: yt(s, "enter", e)
        }));
      }
    }), o;
  }
  let pu, hu;
  pu = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
      return e[t];
    });
  };
  hu = {
    component: "div",
    childFactory: function(t) {
      return t;
    }
  };
  bo = (function(e) {
    xs(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = i.handleExited.bind(cu(i));
      return i.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: s,
        firstRender: true
      }, i;
    }
    var r = t.prototype;
    return r.componentDidMount = function() {
      this.mounted = true, this.setState({
        contextValue: {
          isMounting: false
        }
      });
    }, r.componentWillUnmount = function() {
      this.mounted = false;
    }, t.getDerivedStateFromProps = function(o, i) {
      var s = i.children, a = i.handleExited, u = i.firstRender;
      return {
        children: u ? du(o, a) : fu(o, s, a),
        firstRender: false
      };
    }, r.handleExited = function(o, i) {
      var s = yo(this.props.children);
      o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
        var u = wr({}, a.children);
        return delete u[o.key], {
          children: u
        };
      }));
    }, r.render = function() {
      var o = this.props, i = o.component, s = o.childFactory, a = vs(o, [
        "component",
        "childFactory"
      ]), u = this.state.contextValue, l = pu(this.state.children).map(s);
      return delete a.appear, delete a.enter, delete a.exit, i === null ? ot.createElement(Er.Provider, {
        value: u
      }, l) : ot.createElement(Er.Provider, {
        value: u
      }, ot.createElement(i, a, l));
    }, t;
  })(ot.Component);
  bo.propTypes = {};
  bo.defaultProps = hu;
  const Cs = (e) => e.scrollTop;
  Pr = function(e, t) {
    const { timeout: r, easing: n, style: o = {} } = e;
    return {
      duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
      easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
      delay: o.transitionDelay
    };
  };
  function mu(e) {
    return ve("MuiPaper", e);
  }
  ge("MuiPaper", [
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
  let gu, yu;
  gu = (e) => {
    const { square: t, elevation: r, variant: n, classes: o } = e, i = {
      root: [
        "root",
        n,
        !t && "rounded",
        n === "elevation" && `elevation${r}`
      ]
    };
    return Se(i, mu, o);
  };
  yu = G("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        !r.square && t.rounded,
        r.variant === "elevation" && t[`elevation${r.elevation}`]
      ];
    }
  })(ke(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow"),
    variants: [
      {
        props: ({ ownerState: t }) => !t.square,
        style: {
          borderRadius: e.shape.borderRadius
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          border: `1px solid ${(e.vars || e).palette.divider}`
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
  bu = g.forwardRef(function(t, r) {
    var _a2;
    const n = Re({
      props: t,
      name: "MuiPaper"
    }), o = go(), { className: i, component: s = "div", elevation: a = 1, square: u = false, variant: l = "elevation", ...h } = n, m = {
      ...n,
      component: s,
      elevation: a,
      square: u,
      variant: l
    }, y = gu(m);
    return O.jsx(yu, {
      as: s,
      ownerState: m,
      className: J(y.root, i),
      ref: r,
      ...h,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (o.vars || o).shadows[a],
          ...o.vars && {
            "--Paper-overlay": (_a2 = o.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!o.vars && o.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${or("#fff", On(a))}, ${or("#fff", On(a))})`
          }
        },
        ...h.style
      }
    });
  });
  Be = function(e, t) {
    const { className: r, elementType: n, ownerState: o, externalForwardedProps: i, internalForwardedProps: s, shouldForwardComponentProp: a = false, ...u } = t, { component: l, slots: h = {
      [e]: void 0
    }, slotProps: m = {
      [e]: void 0
    }, ...y } = i, S = h[e] || n, b = cs(m[e], o), { props: { component: C, ...w }, internalRef: R } = ls({
      className: r,
      ...u,
      externalForwardedProps: e === "root" ? y : void 0,
      externalSlotProps: b
    }), E = ze(R, b == null ? void 0 : b.ref, t.ref), v = e === "root" ? C || l : C, x = ss(S, {
      ...e === "root" && !l && !h[e] && s,
      ...e !== "root" && !h[e] && s,
      ...w,
      ...v && !a && {
        as: v
      },
      ...v && a && {
        component: v
      },
      ref: E
    }, o);
    return [
      S,
      x
    ];
  };
  class Tr {
    static create() {
      return new Tr();
    }
    static use() {
      const t = ns(Tr.create).current, [r, n] = g.useState(false);
      return t.shouldMount = r, t.setShouldMount = n, g.useEffect(t.mountEffect, [
        r
      ]), t;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = xu(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
    }
    mountEffect = () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    };
    start(...t) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.start(...t);
      });
    }
    stop(...t) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.stop(...t);
      });
    }
    pulsate(...t) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.pulsate(...t);
      });
    }
  }
  function vu() {
    return Tr.use();
  }
  function xu() {
    let e, t;
    const r = new Promise((n, o) => {
      e = n, t = o;
    });
    return r.resolve = e, r.reject = t, r;
  }
  function Su(e) {
    const { className: t, classes: r, pulsate: n = false, rippleX: o, rippleY: i, rippleSize: s, in: a, onExited: u, timeout: l } = e, [h, m] = g.useState(false), y = J(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), S = {
      width: s,
      height: s,
      top: -(s / 2) + i,
      left: -(s / 2) + o
    }, b = J(r.child, h && r.childLeaving, n && r.childPulsate);
    return !a && !h && m(true), g.useEffect(() => {
      if (!a && u != null) {
        const C = setTimeout(u, l);
        return () => {
          clearTimeout(C);
        };
      }
    }, [
      u,
      a,
      l
    ]), O.jsx("span", {
      className: y,
      style: S,
      children: O.jsx("span", {
        className: b
      })
    });
  }
  const He = ge("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), Nn = 550, Cu = 80, wu = ar`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ru = ar`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ku = ar`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Eu = G("span", {
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
  }), Pu = G(Su, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${He.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${wu};
    animation-duration: ${Nn}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${He.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${He.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${He.childLeaving} {
    opacity: 0;
    animation-name: ${Ru};
    animation-duration: ${Nn}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${He.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ku};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Tu = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiTouchRipple"
    }), { center: o = false, classes: i = {}, className: s, ...a } = n, [u, l] = g.useState([]), h = g.useRef(0), m = g.useRef(null);
    g.useEffect(() => {
      m.current && (m.current(), m.current = null);
    }, [
      u
    ]);
    const y = g.useRef(false), S = os(), b = g.useRef(null), C = g.useRef(null), w = g.useCallback((x) => {
      const { pulsate: T, rippleX: P, rippleY: A, rippleSize: _, cb: D } = x;
      l((c) => [
        ...c,
        O.jsx(Pu, {
          classes: {
            ripple: J(i.ripple, He.ripple),
            rippleVisible: J(i.rippleVisible, He.rippleVisible),
            ripplePulsate: J(i.ripplePulsate, He.ripplePulsate),
            child: J(i.child, He.child),
            childLeaving: J(i.childLeaving, He.childLeaving),
            childPulsate: J(i.childPulsate, He.childPulsate)
          },
          timeout: Nn,
          pulsate: T,
          rippleX: P,
          rippleY: A,
          rippleSize: _
        }, h.current)
      ]), h.current += 1, m.current = D;
    }, [
      i
    ]), R = g.useCallback((x = {}, T = {}, P = () => {
    }) => {
      const { pulsate: A = false, center: _ = o || T.pulsate, fakeElement: D = false } = T;
      if ((x == null ? void 0 : x.type) === "mousedown" && y.current) {
        y.current = false;
        return;
      }
      (x == null ? void 0 : x.type) === "touchstart" && (y.current = true);
      const c = D ? null : C.current, I = c ? c.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let z, j, H;
      if (_ || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches) z = Math.round(I.width / 2), j = Math.round(I.height / 2);
      else {
        const { clientX: M, clientY: B } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
        z = Math.round(M - I.left), j = Math.round(B - I.top);
      }
      if (_) H = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), H % 2 === 0 && (H += 1);
      else {
        const M = Math.max(Math.abs((c ? c.clientWidth : 0) - z), z) * 2 + 2, B = Math.max(Math.abs((c ? c.clientHeight : 0) - j), j) * 2 + 2;
        H = Math.sqrt(M ** 2 + B ** 2);
      }
      (x == null ? void 0 : x.touches) ? b.current === null && (b.current = () => {
        w({
          pulsate: A,
          rippleX: z,
          rippleY: j,
          rippleSize: H,
          cb: P
        });
      }, S.start(Cu, () => {
        b.current && (b.current(), b.current = null);
      })) : w({
        pulsate: A,
        rippleX: z,
        rippleY: j,
        rippleSize: H,
        cb: P
      });
    }, [
      o,
      w,
      S
    ]), E = g.useCallback(() => {
      R({}, {
        pulsate: true
      });
    }, [
      R
    ]), v = g.useCallback((x, T) => {
      if (S.clear(), (x == null ? void 0 : x.type) === "touchend" && b.current) {
        b.current(), b.current = null, S.start(0, () => {
          v(x, T);
        });
        return;
      }
      b.current = null, l((P) => P.length > 0 ? P.slice(1) : P), m.current = T;
    }, [
      S
    ]);
    return g.useImperativeHandle(r, () => ({
      pulsate: E,
      start: R,
      stop: v
    }), [
      E,
      R,
      v
    ]), O.jsx(Eu, {
      className: J(He.root, i.root, s),
      ref: C,
      ...a,
      children: O.jsx(bo, {
        component: null,
        exit: true,
        children: u
      })
    });
  });
  function Au(e) {
    return ve("MuiButtonBase", e);
  }
  let $u, Iu, Mu;
  $u = ge("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Iu = (e) => {
    const { disabled: t, focusVisible: r, focusVisibleClassName: n, classes: o } = e, s = Se({
      root: [
        "root",
        t && "disabled",
        r && "focusVisible"
      ]
    }, Au, o);
    return r && n && (s.root += ` ${n}`), s;
  };
  Mu = G("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root
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
    [`&.${$u.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  Ou = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiButtonBase"
    }), { action: o, centerRipple: i = false, children: s, className: a, component: u = "button", disabled: l = false, disableRipple: h = false, disableTouchRipple: m = false, focusRipple: y = false, focusVisibleClassName: S, LinkComponent: b = "a", onBlur: C, onClick: w, onContextMenu: R, onDragLeave: E, onFocus: v, onFocusVisible: x, onKeyDown: T, onKeyUp: P, onMouseDown: A, onMouseLeave: _, onMouseUp: D, onTouchEnd: c, onTouchMove: I, onTouchStart: z, tabIndex: j = 0, TouchRippleProps: H, touchRippleRef: M, type: B, ...q } = n, oe = g.useRef(null), L = vu(), U = ze(L.ref, M), [le, ae] = g.useState(false);
    l && le && ae(false), g.useImperativeHandle(o, () => ({
      focusVisible: () => {
        ae(true), oe.current.focus();
      }
    }), []);
    const de = L.shouldMount && !h && !l;
    g.useEffect(() => {
      le && y && !h && L.pulsate();
    }, [
      h,
      y,
      le,
      L
    ]);
    const xe = nt(L, "start", A, m), Z = nt(L, "stop", R, m), Pe = nt(L, "stop", E, m), Te = nt(L, "stop", D, m), _e = nt(L, "stop", (W) => {
      le && W.preventDefault(), _ && _(W);
    }, m), ee = nt(L, "start", z, m), K = nt(L, "stop", c, m), te = nt(L, "stop", I, m), re = nt(L, "stop", (W) => {
      qo(W.target) || ae(false), C && C(W);
    }, false), d = bt((W) => {
      oe.current || (oe.current = W.currentTarget), qo(W.target) && (ae(true), x && x(W)), v && v(W);
    }), p = () => {
      const W = oe.current;
      return u && u !== "button" && !(W.tagName === "A" && W.href);
    }, f = bt((W) => {
      y && !W.repeat && le && W.key === " " && L.stop(W, () => {
        L.start(W);
      }), W.target === W.currentTarget && p() && W.key === " " && W.preventDefault(), T && T(W), W.target === W.currentTarget && p() && W.key === "Enter" && !l && (W.preventDefault(), w && w(W));
    }), $ = bt((W) => {
      y && W.key === " " && le && !W.defaultPrevented && L.stop(W, () => {
        L.pulsate(W);
      }), P && P(W), w && W.target === W.currentTarget && p() && W.key === " " && !W.defaultPrevented && w(W);
    });
    let N = u;
    N === "button" && (q.href || q.to) && (N = b);
    const F = {};
    N === "button" ? (F.type = B === void 0 ? "button" : B, F.disabled = l) : (!q.href && !q.to && (F.role = "button"), l && (F["aria-disabled"] = l));
    const Y = ze(r, oe), Q = {
      ...n,
      centerRipple: i,
      component: u,
      disabled: l,
      disableRipple: h,
      disableTouchRipple: m,
      focusRipple: y,
      tabIndex: j,
      focusVisible: le
    }, X = Iu(Q);
    return O.jsxs(Mu, {
      as: N,
      className: J(X.root, a),
      ownerState: Q,
      onBlur: re,
      onClick: w,
      onContextMenu: Z,
      onFocus: d,
      onKeyDown: f,
      onKeyUp: $,
      onMouseDown: xe,
      onMouseLeave: _e,
      onMouseUp: Te,
      onDragLeave: Pe,
      onTouchEnd: K,
      onTouchMove: te,
      onTouchStart: ee,
      ref: Y,
      tabIndex: l ? -1 : j,
      type: B,
      ...F,
      ...q,
      children: [
        s,
        de ? O.jsx(Tu, {
          ref: U,
          center: i,
          ...H
        }) : null
      ]
    });
  });
  function nt(e, t, r, n = false) {
    return bt((o) => (r && r(o), n || e[t](o), true));
  }
  function _u(e) {
    return typeof e.main == "string";
  }
  function Fu(e, t = []) {
    if (!_u(e)) return false;
    for (const r of t) if (!e.hasOwnProperty(r) || typeof e[r] != "string") return false;
    return true;
  }
  dt = function(e = []) {
    return ([, t]) => t && Fu(t, e);
  };
  function Bu(e) {
    return ve("MuiCircularProgress", e);
  }
  ge("MuiCircularProgress", [
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
  let lt, Ln, zn, Nu, Lu, zu, Du, ju, Wu;
  lt = 44;
  Ln = ar`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  zn = ar`
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
  Nu = typeof Ln != "string" ? Jn`
        animation: ${Ln} 1.4s linear infinite;
      ` : null;
  Lu = typeof zn != "string" ? Jn`
        animation: ${zn} 1.4s ease-in-out infinite;
      ` : null;
  zu = (e) => {
    const { classes: t, variant: r, color: n, disableShrink: o } = e, i = {
      root: [
        "root",
        r,
        `color${ne(n)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${ne(r)}`,
        o && "circleDisableShrink"
      ]
    };
    return Se(i, Bu, t);
  };
  Du = G("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`color${ne(r.color)}`]
      ];
    }
  })(ke(({ theme: e }) => ({
    display: "inline-block",
    variants: [
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: e.transitions.create("transform")
        }
      },
      {
        props: {
          variant: "indeterminate"
        },
        style: Nu || {
          animation: `${Ln} 1.4s linear infinite`
        }
      },
      ...Object.entries(e.palette).filter(dt()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          color: (e.vars || e).palette[t].main
        }
      }))
    ]
  })));
  ju = G("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg
  })({
    display: "block"
  });
  Wu = G("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.circle,
        t[`circle${ne(r.variant)}`],
        r.disableShrink && t.circleDisableShrink
      ];
    }
  })(ke(({ theme: e }) => ({
    stroke: "currentColor",
    variants: [
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: e.transitions.create("stroke-dashoffset")
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
        props: ({ ownerState: t }) => t.variant === "indeterminate" && !t.disableShrink,
        style: Lu || {
          animation: `${zn} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Hu = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiCircularProgress"
    }), { className: o, color: i = "primary", disableShrink: s = false, size: a = 40, style: u, thickness: l = 3.6, value: h = 0, variant: m = "indeterminate", ...y } = n, S = {
      ...n,
      color: i,
      disableShrink: s,
      size: a,
      thickness: l,
      value: h,
      variant: m
    }, b = zu(S), C = {}, w = {}, R = {};
    if (m === "determinate") {
      const E = 2 * Math.PI * ((lt - l) / 2);
      C.strokeDasharray = E.toFixed(3), R["aria-valuenow"] = Math.round(h), C.strokeDashoffset = `${((100 - h) / 100 * E).toFixed(3)}px`, w.transform = "rotate(-90deg)";
    }
    return O.jsx(Du, {
      className: J(b.root, o),
      style: {
        width: a,
        height: a,
        ...w,
        ...u
      },
      ownerState: S,
      ref: r,
      role: "progressbar",
      ...R,
      ...y,
      children: O.jsx(ju, {
        className: b.svg,
        ownerState: S,
        viewBox: `${lt / 2} ${lt / 2} ${lt} ${lt}`,
        children: O.jsx(Wu, {
          className: b.circle,
          style: C,
          ownerState: S,
          cx: lt,
          cy: lt,
          r: (lt - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function Uu(e) {
    return ve("MuiIconButton", e);
  }
  let ii, Vu, Ku, Gu;
  ii = ge("MuiIconButton", [
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
  Vu = (e) => {
    const { classes: t, disabled: r, color: n, edge: o, size: i, loading: s } = e, a = {
      root: [
        "root",
        s && "loading",
        r && "disabled",
        n !== "default" && `color${ne(n)}`,
        o && `edge${ne(o)}`,
        `size${ne(i)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return Se(a, Uu, t);
  };
  Ku = G(Ou, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.loading && t.loading,
        r.color !== "default" && t[`color${ne(r.color)}`],
        r.edge && t[`edge${ne(r.edge)}`],
        t[`size${ne(r.size)}`]
      ];
    }
  })(ke(({ theme: e }) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: e.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    color: (e.vars || e).palette.action.active,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shortest
    }),
    variants: [
      {
        props: (t) => !t.disableRipple,
        style: {
          "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : or(e.palette.action.active, e.palette.action.hoverOpacity),
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
  })), ke(({ theme: e }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(e.palette).filter(dt()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          color: (e.vars || e).palette[t].main
        }
      })),
      ...Object.entries(e.palette).filter(dt()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : or((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
        }
      })),
      {
        props: {
          size: "small"
        },
        style: {
          padding: 5,
          fontSize: e.typography.pxToRem(18)
        }
      },
      {
        props: {
          size: "large"
        },
        style: {
          padding: 12,
          fontSize: e.typography.pxToRem(28)
        }
      }
    ],
    [`&.${ii.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    },
    [`&.${ii.loading}`]: {
      color: "transparent"
    }
  })));
  Gu = G("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, t) => t.loadingIndicator
  })(({ theme: e }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (e.vars || e).palette.action.disabled,
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
  lp = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiIconButton"
    }), { edge: o = false, children: i, className: s, color: a = "default", disabled: u = false, disableFocusRipple: l = false, size: h = "medium", id: m, loading: y = null, loadingIndicator: S, ...b } = n, C = fo(m), w = S ?? O.jsx(Hu, {
      "aria-labelledby": C,
      color: "inherit",
      size: 16
    }), R = {
      ...n,
      edge: o,
      color: a,
      disabled: u,
      disableFocusRipple: l,
      loading: y,
      loadingIndicator: w,
      size: h
    }, E = Vu(R);
    return O.jsxs(Ku, {
      id: y ? C : m,
      className: J(E.root, s),
      centerRipple: true,
      focusRipple: !l,
      disabled: u || y,
      ref: r,
      ...b,
      ownerState: R,
      children: [
        typeof y == "boolean" && O.jsx("span", {
          className: E.loadingWrapper,
          style: {
            display: "contents"
          },
          children: O.jsx(Gu, {
            className: E.loadingIndicator,
            ownerState: R,
            children: y && w
          })
        }),
        i
      ]
    });
  });
  function qu(e) {
    return ve("MuiTypography", e);
  }
  let Yu, Xu, Qu, Zu, si;
  cp = ge("MuiTypography", [
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
  Yu = {
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
  Xu = Jc();
  Qu = (e) => {
    const { align: t, gutterBottom: r, noWrap: n, paragraph: o, variant: i, classes: s } = e, a = {
      root: [
        "root",
        i,
        e.align !== "inherit" && `align${ne(t)}`,
        r && "gutterBottom",
        n && "noWrap",
        o && "paragraph"
      ]
    };
    return Se(a, qu, s);
  };
  Zu = G("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.variant && t[r.variant],
        r.align !== "inherit" && t[`align${ne(r.align)}`],
        r.noWrap && t.noWrap,
        r.gutterBottom && t.gutterBottom,
        r.paragraph && t.paragraph
      ];
    }
  })(ke(({ theme: e }) => {
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
        ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({
          props: {
            variant: t
          },
          style: r
        })),
        ...Object.entries(e.palette).filter(dt()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            color: (e.vars || e).palette[t].main
          }
        })),
        ...Object.entries(((_a2 = e.palette) == null ? void 0 : _a2.text) || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
          props: {
            color: `text${ne(t)}`
          },
          style: {
            color: (e.vars || e).palette.text[t]
          }
        })),
        {
          props: ({ ownerState: t }) => t.align !== "inherit",
          style: {
            textAlign: "var(--Typography-textAlign)"
          }
        },
        {
          props: ({ ownerState: t }) => t.noWrap,
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },
        {
          props: ({ ownerState: t }) => t.gutterBottom,
          style: {
            marginBottom: "0.35em"
          }
        },
        {
          props: ({ ownerState: t }) => t.paragraph,
          style: {
            marginBottom: 16
          }
        }
      ]
    };
  }));
  si = {
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
  up = g.forwardRef(function(t, r) {
    const { color: n, ...o } = Re({
      props: t,
      name: "MuiTypography"
    }), i = !Yu[n], s = Xu({
      ...o,
      ...i && {
        color: n
      }
    }), { align: a = "inherit", className: u, component: l, gutterBottom: h = false, noWrap: m = false, paragraph: y = false, variant: S = "body1", variantMapping: b = si, ...C } = s, w = {
      ...s,
      align: a,
      color: n,
      className: u,
      component: l,
      gutterBottom: h,
      noWrap: m,
      paragraph: y,
      variant: S,
      variantMapping: b
    }, R = l || (y ? "p" : b[S] || si[S]) || "span", E = Qu(w);
    return O.jsx(Zu, {
      as: R,
      ref: r,
      className: J(E.root, u),
      ...C,
      ownerState: w,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...C.style
      }
    });
  });
  function Ju(e) {
    return typeof e == "function" ? e() : e;
  }
  ed = g.forwardRef(function(t, r) {
    const { children: n, container: o, disablePortal: i = false } = t, [s, a] = g.useState(null), u = ze(g.isValidElement(n) ? dr(n) : null, r);
    if (xt(() => {
      i || a(Ju(o) || document.body);
    }, [
      o,
      i
    ]), xt(() => {
      if (s && !i) return Ho(r, s), () => {
        Ho(r, null);
      };
    }, [
      r,
      s,
      i
    ]), i) {
      if (g.isValidElement(n)) {
        const l = {
          ref: u
        };
        return g.cloneElement(n, l);
      }
      return n;
    }
    return s && Ss.createPortal(n, s);
  });
  function gr(e) {
    return parseInt(e, 10) || 0;
  }
  const td = {
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
  function rd(e) {
    for (const t in e) return false;
    return true;
  }
  function ai(e) {
    return rd(e) || e.outerHeightStyle === 0 && !e.overflowing;
  }
  const nd = g.forwardRef(function(t, r) {
    const { onChange: n, maxRows: o, minRows: i = 1, style: s, value: a, ...u } = t, { current: l } = g.useRef(a != null), h = g.useRef(null), m = ze(r, h), y = g.useRef(null), S = g.useRef(null), b = g.useCallback(() => {
      const v = h.current, x = S.current;
      if (!v || !x) return;
      const P = at(v).getComputedStyle(v);
      if (P.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      x.style.width = P.width, x.value = v.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
      const A = P.boxSizing, _ = gr(P.paddingBottom) + gr(P.paddingTop), D = gr(P.borderBottomWidth) + gr(P.borderTopWidth), c = x.scrollHeight;
      x.value = "x";
      const I = x.scrollHeight;
      let z = c;
      i && (z = Math.max(Number(i) * I, z)), o && (z = Math.min(Number(o) * I, z)), z = Math.max(z, I);
      const j = z + (A === "border-box" ? _ + D : 0), H = Math.abs(z - c) <= 1;
      return {
        outerHeightStyle: j,
        overflowing: H
      };
    }, [
      o,
      i,
      t.placeholder
    ]), C = bt(() => {
      const v = h.current, x = b();
      if (!v || !x || ai(x)) return false;
      const T = x.outerHeightStyle;
      return y.current != null && y.current !== T;
    }), w = g.useCallback(() => {
      const v = h.current, x = b();
      if (!v || !x || ai(x)) return;
      const T = x.outerHeightStyle;
      y.current !== T && (y.current = T, v.style.height = `${T}px`), v.style.overflow = x.overflowing ? "hidden" : "";
    }, [
      b
    ]), R = g.useRef(-1);
    xt(() => {
      const v = rs(w), x = h == null ? void 0 : h.current;
      if (!x) return;
      const T = at(x);
      T.addEventListener("resize", v);
      let P;
      return typeof ResizeObserver < "u" && (P = new ResizeObserver(() => {
        C() && (P.unobserve(x), cancelAnimationFrame(R.current), w(), R.current = requestAnimationFrame(() => {
          P.observe(x);
        }));
      }), P.observe(x)), () => {
        v.clear(), cancelAnimationFrame(R.current), T.removeEventListener("resize", v), P && P.disconnect();
      };
    }, [
      b,
      w,
      C
    ]), xt(() => {
      w();
    });
    const E = (v) => {
      l || w(), n && n(v);
    };
    return O.jsxs(g.Fragment, {
      children: [
        O.jsx("textarea", {
          value: a,
          onChange: E,
          ref: m,
          rows: i,
          style: s,
          ...u
        }),
        O.jsx("textarea", {
          "aria-hidden": true,
          className: t.className,
          readOnly: true,
          ref: S,
          tabIndex: -1,
          style: {
            ...td.shadow,
            ...s,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  Dn = function(e) {
    return typeof e == "string";
  };
  Lt = function({ props: e, states: t, muiFormControl: r }) {
    return t.reduce((n, o) => (n[o] = e[o], r && typeof e[o] > "u" && (n[o] = r[o]), n), {});
  };
  vo = g.createContext(void 0);
  zt = function() {
    return g.useContext(vo);
  };
  function li(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function Ar(e, t = false) {
    return e && (li(e.value) && e.value !== "" || t && li(e.defaultValue) && e.defaultValue !== "");
  }
  function od(e) {
    return e.startAdornment;
  }
  function id(e) {
    return ve("MuiInputBase", e);
  }
  Bt = ge("MuiInputBase", [
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
  var ci;
  let dn, fn, sd, pn, hn, ui;
  dn = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.formControl && t.formControl,
      r.startAdornment && t.adornedStart,
      r.endAdornment && t.adornedEnd,
      r.error && t.error,
      r.size === "small" && t.sizeSmall,
      r.multiline && t.multiline,
      r.color && t[`color${ne(r.color)}`],
      r.fullWidth && t.fullWidth,
      r.hiddenLabel && t.hiddenLabel
    ];
  };
  fn = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.input,
      r.size === "small" && t.inputSizeSmall,
      r.multiline && t.inputMultiline,
      r.type === "search" && t.inputTypeSearch,
      r.startAdornment && t.inputAdornedStart,
      r.endAdornment && t.inputAdornedEnd,
      r.hiddenLabel && t.inputHiddenLabel
    ];
  };
  sd = (e) => {
    const { classes: t, color: r, disabled: n, error: o, endAdornment: i, focused: s, formControl: a, fullWidth: u, hiddenLabel: l, multiline: h, readOnly: m, size: y, startAdornment: S, type: b } = e, C = {
      root: [
        "root",
        `color${ne(r)}`,
        n && "disabled",
        o && "error",
        u && "fullWidth",
        s && "focused",
        a && "formControl",
        y && y !== "medium" && `size${ne(y)}`,
        h && "multiline",
        S && "adornedStart",
        i && "adornedEnd",
        l && "hiddenLabel",
        m && "readOnly"
      ],
      input: [
        "input",
        n && "disabled",
        b === "search" && "inputTypeSearch",
        h && "inputMultiline",
        y === "small" && "inputSizeSmall",
        l && "inputHiddenLabel",
        S && "inputAdornedStart",
        i && "inputAdornedEnd",
        m && "readOnly"
      ]
    };
    return Se(C, id, t);
  };
  pn = G("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: dn
  })(ke(({ theme: e }) => ({
    ...e.typography.body1,
    color: (e.vars || e).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${Bt.disabled}`]: {
      color: (e.vars || e).palette.text.disabled,
      cursor: "default"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.multiline,
        style: {
          padding: "4px 0 5px"
        }
      },
      {
        props: ({ ownerState: t, size: r }) => t.multiline && r === "small",
        style: {
          paddingTop: 1
        }
      },
      {
        props: ({ ownerState: t }) => t.fullWidth,
        style: {
          width: "100%"
        }
      }
    ]
  })));
  hn = G("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: fn
  })(ke(({ theme: e }) => {
    const t = e.palette.mode === "light", r = {
      color: "currentColor",
      ...e.vars ? {
        opacity: e.vars.opacity.inputPlaceholder
      } : {
        opacity: t ? 0.42 : 0.5
      },
      transition: e.transitions.create("opacity", {
        duration: e.transitions.duration.shorter
      })
    }, n = {
      opacity: "0 !important"
    }, o = e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
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
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      "&::-ms-input-placeholder": r,
      "&:focus": {
        outline: 0
      },
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        WebkitAppearance: "none"
      },
      [`label[data-shrink=false] + .${Bt.formControl} &`]: {
        "&::-webkit-input-placeholder": n,
        "&::-moz-placeholder": n,
        "&::-ms-input-placeholder": n,
        "&:focus::-webkit-input-placeholder": o,
        "&:focus::-moz-placeholder": o,
        "&:focus::-ms-input-placeholder": o
      },
      [`&.${Bt.disabled}`]: {
        opacity: 1,
        WebkitTextFillColor: (e.vars || e).palette.text.disabled
      },
      variants: [
        {
          props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
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
          props: ({ ownerState: i }) => i.multiline,
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
  }));
  ui = Zc({
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
  });
  xo = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiInputBase"
    }), { "aria-describedby": o, autoComplete: i, autoFocus: s, className: a, color: u, components: l = {}, componentsProps: h = {}, defaultValue: m, disabled: y, disableInjectingGlobalStyles: S, endAdornment: b, error: C, fullWidth: w = false, id: R, inputComponent: E = "input", inputProps: v = {}, inputRef: x, margin: T, maxRows: P, minRows: A, multiline: _ = false, name: D, onBlur: c, onChange: I, onClick: z, onFocus: j, onKeyDown: H, onKeyUp: M, placeholder: B, readOnly: q, renderSuffix: oe, rows: L, size: U, slotProps: le = {}, slots: ae = {}, startAdornment: de, type: xe = "text", value: Z, ...Pe } = n, Te = v.value != null ? v.value : Z, { current: _e } = g.useRef(Te != null), ee = g.useRef(), K = g.useCallback((ye) => {
    }, []), te = ze(ee, x, v.ref, K), [re, d] = g.useState(false), p = zt(), f = Lt({
      props: n,
      muiFormControl: p,
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
    f.focused = p ? p.focused : re, g.useEffect(() => {
      !p && y && re && (d(false), c && c());
    }, [
      p,
      y,
      re,
      c
    ]);
    const $ = p && p.onFilled, N = p && p.onEmpty, F = g.useCallback((ye) => {
      Ar(ye) ? $ && $() : N && N();
    }, [
      $,
      N
    ]);
    xt(() => {
      _e && F({
        value: Te
      });
    }, [
      Te,
      F,
      _e
    ]);
    const Y = (ye) => {
      j && j(ye), v.onFocus && v.onFocus(ye), p && p.onFocus ? p.onFocus(ye) : d(true);
    }, Q = (ye) => {
      c && c(ye), v.onBlur && v.onBlur(ye), p && p.onBlur ? p.onBlur(ye) : d(false);
    }, X = (ye, ...Rt) => {
      if (!_e) {
        const Wt = ye.target || ee.current;
        if (Wt == null) throw new Error(it(1));
        F({
          value: Wt.value
        });
      }
      v.onChange && v.onChange(ye, ...Rt), I && I(ye, ...Rt);
    };
    g.useEffect(() => {
      F(ee.current);
    }, []);
    const W = (ye) => {
      ee.current && ye.currentTarget === ye.target && ee.current.focus(), z && z(ye);
    };
    let Ne = E, ce = v;
    _ && Ne === "input" && (L ? ce = {
      type: void 0,
      minRows: L,
      maxRows: L,
      ...ce
    } : ce = {
      type: void 0,
      maxRows: P,
      minRows: A,
      ...ce
    }, Ne = nd);
    const St = (ye) => {
      F(ye.animationName === "mui-auto-fill-cancel" ? ee.current : {
        value: "x"
      });
    };
    g.useEffect(() => {
      p && p.setAdornedStart(!!de);
    }, [
      p,
      de
    ]);
    const Dt = {
      ...n,
      color: f.color || "primary",
      disabled: f.disabled,
      endAdornment: b,
      error: f.error,
      focused: f.focused,
      formControl: p,
      fullWidth: w,
      hiddenLabel: f.hiddenLabel,
      multiline: _,
      size: f.size,
      startAdornment: de,
      type: xe
    }, jt = sd(Dt), Ct = ae.root || l.Root || pn, wt = le.root || h.root || {}, ft = ae.input || l.Input || hn;
    return ce = {
      ...ce,
      ...le.input ?? h.input
    }, O.jsxs(g.Fragment, {
      children: [
        !S && typeof ui == "function" && (ci || (ci = O.jsx(ui, {}))),
        O.jsxs(Ct, {
          ...wt,
          ref: r,
          onClick: W,
          ...Pe,
          ...!Dn(Ct) && {
            ownerState: {
              ...Dt,
              ...wt.ownerState
            }
          },
          className: J(jt.root, wt.className, a, q && "MuiInputBase-readOnly"),
          children: [
            de,
            O.jsx(vo.Provider, {
              value: null,
              children: O.jsx(ft, {
                "aria-invalid": f.error,
                "aria-describedby": o,
                autoComplete: i,
                autoFocus: s,
                defaultValue: m,
                disabled: f.disabled,
                id: R,
                onAnimationStart: St,
                name: D,
                placeholder: B,
                readOnly: q,
                required: f.required,
                rows: L,
                value: Te,
                onKeyDown: H,
                onKeyUp: M,
                type: xe,
                ...ce,
                ...!Dn(ft) && {
                  as: Ne,
                  ownerState: {
                    ...Dt,
                    ...ce.ownerState
                  }
                },
                ref: te,
                className: J(jt.input, ce.className, q && "MuiInputBase-readOnly"),
                onBlur: Q,
                onChange: X,
                onFocus: Y
              })
            }),
            b,
            oe ? oe({
              ...f,
              startAdornment: de
            }) : null
          ]
        })
      ]
    });
  });
  function ad(e) {
    return ve("MuiInput", e);
  }
  Vt = {
    ...Bt,
    ...ge("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function ld(e) {
    return ve("MuiOutlinedInput", e);
  }
  Ye = {
    ...Bt,
    ...ge("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function cd(e) {
    return ve("MuiFilledInput", e);
  }
  let dd;
  pt = {
    ...Bt,
    ...ge("MuiFilledInput", [
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
  ud = nu(O.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  dd = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  fd = g.forwardRef(function(t, r) {
    const n = go(), o = {
      enter: n.transitions.duration.enteringScreen,
      exit: n.transitions.duration.leavingScreen
    }, { addEndListener: i, appear: s = true, children: a, easing: u, in: l, onEnter: h, onEntered: m, onEntering: y, onExit: S, onExited: b, onExiting: C, style: w, timeout: R = o, TransitionComponent: E = tt, ...v } = t, x = g.useRef(null), T = ze(x, dr(a), r), P = (H) => (M) => {
      if (H) {
        const B = x.current;
        M === void 0 ? H(B) : H(B, M);
      }
    }, A = P(y), _ = P((H, M) => {
      Cs(H);
      const B = Pr({
        style: w,
        timeout: R,
        easing: u
      }, {
        mode: "enter"
      });
      H.style.webkitTransition = n.transitions.create("opacity", B), H.style.transition = n.transitions.create("opacity", B), h && h(H, M);
    }), D = P(m), c = P(C), I = P((H) => {
      const M = Pr({
        style: w,
        timeout: R,
        easing: u
      }, {
        mode: "exit"
      });
      H.style.webkitTransition = n.transitions.create("opacity", M), H.style.transition = n.transitions.create("opacity", M), S && S(H);
    }), z = P(b), j = (H) => {
      i && i(x.current, H);
    };
    return O.jsx(E, {
      appear: s,
      in: l,
      nodeRef: x,
      onEnter: _,
      onEntered: D,
      onEntering: A,
      onExit: I,
      onExited: z,
      onExiting: c,
      addEndListener: j,
      timeout: R,
      ...v,
      children: (H, { ownerState: M, ...B }) => g.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: H === "exited" && !l ? "hidden" : void 0,
          ...dd[H],
          ...w,
          ...a.props.style
        },
        ref: T,
        ...B
      })
    });
  });
  function pd(e) {
    return ve("MuiBackdrop", e);
  }
  ge("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let hd, md, yd, bd;
  hd = (e) => {
    const { classes: t, invisible: r } = e;
    return Se({
      root: [
        "root",
        r && "invisible"
      ]
    }, pd, t);
  };
  md = G("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.invisible && t.invisible
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
  gd = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiBackdrop"
    }), { children: o, className: i, component: s = "div", invisible: a = false, open: u, components: l = {}, componentsProps: h = {}, slotProps: m = {}, slots: y = {}, TransitionComponent: S, transitionDuration: b, ...C } = n, w = {
      ...n,
      component: s,
      invisible: a
    }, R = hd(w), E = {
      transition: S,
      root: l.Root,
      ...y
    }, v = {
      ...h,
      ...m
    }, x = {
      slots: E,
      slotProps: v
    }, [T, P] = Be("root", {
      elementType: md,
      externalForwardedProps: x,
      className: J(R.root, i),
      ownerState: w
    }), [A, _] = Be("transition", {
      elementType: fd,
      externalForwardedProps: x,
      ownerState: w
    });
    return O.jsx(A, {
      in: u,
      timeout: b,
      ...C,
      ..._,
      children: O.jsx(T, {
        "aria-hidden": true,
        ...P,
        classes: R,
        ref: r,
        children: o
      })
    });
  });
  yd = ge("MuiBox", [
    "root"
  ]);
  bd = ys();
  dp = Vl({
    themeId: Ir,
    defaultTheme: bd,
    defaultClassName: yd.root,
    generateClassName: Qi.generate
  });
  function vd(e) {
    const t = Ge(e);
    return t.body === e ? at(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
  }
  function Zt(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
  }
  function di(e) {
    return parseInt(at(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function xd(e) {
    const r = [
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
    ].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return r || n;
  }
  function fi(e, t, r, n, o) {
    const i = [
      t,
      r,
      ...n
    ];
    [].forEach.call(e.children, (s) => {
      const a = !i.includes(s), u = !xd(s);
      a && u && Zt(s, o);
    });
  }
  function Sn(e, t) {
    let r = -1;
    return e.some((n, o) => t(n) ? (r = o, true) : false), r;
  }
  function Sd(e, t) {
    const r = [], n = e.container;
    if (!t.disableScrollLock) {
      if (vd(n)) {
        const s = is(at(n));
        r.push({
          value: n.style.paddingRight,
          property: "padding-right",
          el: n
        }), n.style.paddingRight = `${di(n) + s}px`;
        const a = Ge(n).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (u) => {
          r.push({
            value: u.style.paddingRight,
            property: "padding-right",
            el: u
          }), u.style.paddingRight = `${di(u) + s}px`;
        });
      }
      let i;
      if (n.parentNode instanceof DocumentFragment) i = Ge(n).body;
      else {
        const s = n.parentElement, a = at(n);
        i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : n;
      }
      r.push({
        value: i.style.overflow,
        property: "overflow",
        el: i
      }, {
        value: i.style.overflowX,
        property: "overflow-x",
        el: i
      }, {
        value: i.style.overflowY,
        property: "overflow-y",
        el: i
      }), i.style.overflow = "hidden";
    }
    return () => {
      r.forEach(({ value: i, el: s, property: a }) => {
        i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
      });
    };
  }
  function Cd(e) {
    const t = [];
    return [].forEach.call(e.children, (r) => {
      r.getAttribute("aria-hidden") === "true" && t.push(r);
    }), t;
  }
  class wd {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(t, r) {
      let n = this.modals.indexOf(t);
      if (n !== -1) return n;
      n = this.modals.length, this.modals.push(t), t.modalRef && Zt(t.modalRef, false);
      const o = Cd(r);
      fi(r, t.mount, t.modalRef, o, true);
      const i = Sn(this.containers, (s) => s.container === r);
      return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
        modals: [
          t
        ],
        container: r,
        restore: null,
        hiddenSiblings: o
      }), n);
    }
    mount(t, r) {
      const n = Sn(this.containers, (i) => i.modals.includes(t)), o = this.containers[n];
      o.restore || (o.restore = Sd(o, r));
    }
    remove(t, r = true) {
      const n = this.modals.indexOf(t);
      if (n === -1) return n;
      const o = Sn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
      if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && Zt(t.modalRef, r), fi(i.container, t.mount, t.modalRef, i.hiddenSiblings, false), this.containers.splice(o, 1);
      else {
        const s = i.modals[i.modals.length - 1];
        s.modalRef && Zt(s.modalRef, false);
      }
      return n;
    }
    isTopModal(t) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
    }
  }
  const Rd = [
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
  function kd(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
  }
  function Ed(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return false;
    const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
    let r = t(`[name="${e.name}"]:checked`);
    return r || (r = t(`[name="${e.name}"]`)), r !== e;
  }
  function Pd(e) {
    return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ed(e));
  }
  function Td(e) {
    const t = [], r = [];
    return Array.from(e.querySelectorAll(Rd)).forEach((n, o) => {
      const i = kd(n);
      i === -1 || !Pd(n) || (i === 0 ? t.push(n) : r.push({
        documentOrder: o,
        tabIndex: i,
        node: n
      }));
    }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
  }
  function Ad() {
    return true;
  }
  $d = function(e) {
    const { children: t, disableAutoFocus: r = false, disableEnforceFocus: n = false, disableRestoreFocus: o = false, getTabbable: i = Td, isEnabled: s = Ad, open: a } = e, u = g.useRef(false), l = g.useRef(null), h = g.useRef(null), m = g.useRef(null), y = g.useRef(null), S = g.useRef(false), b = g.useRef(null), C = ze(dr(t), b), w = g.useRef(null);
    g.useEffect(() => {
      !a || !b.current || (S.current = !r);
    }, [
      r,
      a
    ]), g.useEffect(() => {
      if (!a || !b.current) return;
      const v = Ge(b.current);
      return b.current.contains(v.activeElement) || (b.current.hasAttribute("tabIndex") || b.current.setAttribute("tabIndex", "-1"), S.current && b.current.focus()), () => {
        o || (m.current && m.current.focus && (u.current = true, m.current.focus()), m.current = null);
      };
    }, [
      a
    ]), g.useEffect(() => {
      if (!a || !b.current) return;
      const v = Ge(b.current), x = (A) => {
        w.current = A, !(n || !s() || A.key !== "Tab") && v.activeElement === b.current && A.shiftKey && (u.current = true, h.current && h.current.focus());
      }, T = () => {
        var _a2, _b;
        const A = b.current;
        if (A === null) return;
        if (!v.hasFocus() || !s() || u.current) {
          u.current = false;
          return;
        }
        if (A.contains(v.activeElement) || n && v.activeElement !== l.current && v.activeElement !== h.current) return;
        if (v.activeElement !== y.current) y.current = null;
        else if (y.current !== null) return;
        if (!S.current) return;
        let _ = [];
        if ((v.activeElement === l.current || v.activeElement === h.current) && (_ = i(b.current)), _.length > 0) {
          const D = !!(((_a2 = w.current) == null ? void 0 : _a2.shiftKey) && ((_b = w.current) == null ? void 0 : _b.key) === "Tab"), c = _[0], I = _[_.length - 1];
          typeof c != "string" && typeof I != "string" && (D ? I.focus() : c.focus());
        } else A.focus();
      };
      v.addEventListener("focusin", T), v.addEventListener("keydown", x, true);
      const P = setInterval(() => {
        v.activeElement && v.activeElement.tagName === "BODY" && T();
      }, 50);
      return () => {
        clearInterval(P), v.removeEventListener("focusin", T), v.removeEventListener("keydown", x, true);
      };
    }, [
      r,
      n,
      o,
      s,
      a,
      i
    ]);
    const R = (v) => {
      m.current === null && (m.current = v.relatedTarget), S.current = true, y.current = v.target;
      const x = t.props.onFocus;
      x && x(v);
    }, E = (v) => {
      m.current === null && (m.current = v.relatedTarget), S.current = true;
    };
    return O.jsxs(g.Fragment, {
      children: [
        O.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: E,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        g.cloneElement(t, {
          ref: C,
          onFocus: R
        }),
        O.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: E,
          ref: h,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  };
  function Id(e) {
    return typeof e == "function" ? e() : e;
  }
  function Md(e) {
    return e ? e.props.hasOwnProperty("in") : false;
  }
  const pi = () => {
  }, yr = new wd();
  function Od(e) {
    const { container: t, disableEscapeKeyDown: r = false, disableScrollLock: n = false, closeAfterTransition: o = false, onTransitionEnter: i, onTransitionExited: s, children: a, onClose: u, open: l, rootRef: h } = e, m = g.useRef({}), y = g.useRef(null), S = g.useRef(null), b = ze(S, h), [C, w] = g.useState(!l), R = Md(a);
    let E = true;
    (e["aria-hidden"] === "false" || e["aria-hidden"] === false) && (E = false);
    const v = () => Ge(y.current), x = () => (m.current.modalRef = S.current, m.current.mount = y.current, m.current), T = () => {
      yr.mount(x(), {
        disableScrollLock: n
      }), S.current && (S.current.scrollTop = 0);
    }, P = bt(() => {
      const M = Id(t) || v().body;
      yr.add(x(), M), S.current && T();
    }), A = () => yr.isTopModal(x()), _ = bt((M) => {
      y.current = M, M && (l && A() ? T() : S.current && Zt(S.current, E));
    }), D = g.useCallback(() => {
      yr.remove(x(), E);
    }, [
      E
    ]);
    g.useEffect(() => () => {
      D();
    }, [
      D
    ]), g.useEffect(() => {
      l ? P() : (!R || !o) && D();
    }, [
      l,
      D,
      R,
      o,
      P
    ]);
    const c = (M) => (B) => {
      var _a2;
      (_a2 = M.onKeyDown) == null ? void 0 : _a2.call(M, B), !(B.key !== "Escape" || B.which === 229 || !A()) && (r || (B.stopPropagation(), u && u(B, "escapeKeyDown")));
    }, I = (M) => (B) => {
      var _a2;
      (_a2 = M.onClick) == null ? void 0 : _a2.call(M, B), B.target === B.currentTarget && u && u(B, "backdropClick");
    };
    return {
      getRootProps: (M = {}) => {
        const B = as(e);
        delete B.onTransitionEnter, delete B.onTransitionExited;
        const q = {
          ...B,
          ...M
        };
        return {
          role: "presentation",
          ...q,
          onKeyDown: c(q),
          ref: b
        };
      },
      getBackdropProps: (M = {}) => {
        const B = M;
        return {
          "aria-hidden": true,
          ...B,
          onClick: I(B),
          open: l
        };
      },
      getTransitionProps: () => {
        const M = () => {
          w(false), i && i();
        }, B = () => {
          w(true), s && s(), o && D();
        };
        return {
          onEnter: Wo(M, (a == null ? void 0 : a.props.onEnter) ?? pi),
          onExited: Wo(B, (a == null ? void 0 : a.props.onExited) ?? pi)
        };
      },
      rootRef: b,
      portalRef: _,
      isTopModal: A,
      exited: C,
      hasTransition: R
    };
  }
  function _d(e) {
    return ve("MuiModal", e);
  }
  ge("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let Fd, Bd, Nd;
  Fd = (e) => {
    const { open: t, exited: r, classes: n } = e;
    return Se({
      root: [
        "root",
        !t && r && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, _d, n);
  };
  Bd = G("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.open && r.exited && t.hidden
      ];
    }
  })(ke(({ theme: e }) => ({
    position: "fixed",
    zIndex: (e.vars || e).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    variants: [
      {
        props: ({ ownerState: t }) => !t.open && t.exited,
        style: {
          visibility: "hidden"
        }
      }
    ]
  })));
  Nd = G(gd, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop
  })({
    zIndex: -1
  });
  Ld = g.forwardRef(function(t, r) {
    const n = Re({
      name: "MuiModal",
      props: t
    }), { BackdropComponent: o = Nd, BackdropProps: i, classes: s, className: a, closeAfterTransition: u = false, children: l, container: h, component: m, components: y = {}, componentsProps: S = {}, disableAutoFocus: b = false, disableEnforceFocus: C = false, disableEscapeKeyDown: w = false, disablePortal: R = false, disableRestoreFocus: E = false, disableScrollLock: v = false, hideBackdrop: x = false, keepMounted: T = false, onBackdropClick: P, onClose: A, onTransitionEnter: _, onTransitionExited: D, open: c, slotProps: I = {}, slots: z = {}, theme: j, ...H } = n, M = {
      ...n,
      closeAfterTransition: u,
      disableAutoFocus: b,
      disableEnforceFocus: C,
      disableEscapeKeyDown: w,
      disablePortal: R,
      disableRestoreFocus: E,
      disableScrollLock: v,
      hideBackdrop: x,
      keepMounted: T
    }, { getRootProps: B, getBackdropProps: q, getTransitionProps: oe, portalRef: L, isTopModal: U, exited: le, hasTransition: ae } = Od({
      ...M,
      rootRef: r
    }), de = {
      ...M,
      exited: le
    }, xe = Fd(de), Z = {};
    if (l.props.tabIndex === void 0 && (Z.tabIndex = "-1"), ae) {
      const { onEnter: te, onExited: re } = oe();
      Z.onEnter = te, Z.onExited = re;
    }
    const Pe = {
      slots: {
        root: y.Root,
        backdrop: y.Backdrop,
        ...z
      },
      slotProps: {
        ...S,
        ...I
      }
    }, [Te, _e] = Be("root", {
      ref: r,
      elementType: Bd,
      externalForwardedProps: {
        ...Pe,
        ...H,
        component: m
      },
      getSlotProps: B,
      ownerState: de,
      className: J(a, xe == null ? void 0 : xe.root, !de.open && de.exited && (xe == null ? void 0 : xe.hidden))
    }), [ee, K] = Be("backdrop", {
      ref: i == null ? void 0 : i.ref,
      elementType: o,
      externalForwardedProps: Pe,
      shouldForwardComponentProp: true,
      additionalProps: i,
      getSlotProps: (te) => q({
        ...te,
        onClick: (re) => {
          P && P(re), (te == null ? void 0 : te.onClick) && te.onClick(re);
        }
      }),
      className: J(i == null ? void 0 : i.className, xe == null ? void 0 : xe.backdrop),
      ownerState: de
    });
    return !T && !c && (!ae || le) ? null : O.jsx(ed, {
      ref: L,
      container: h,
      disablePortal: R,
      children: O.jsxs(Te, {
        ..._e,
        children: [
          !x && o ? O.jsx(ee, {
            ...K
          }) : null,
          O.jsx($d, {
            disableEnforceFocus: C,
            disableAutoFocus: b,
            disableRestoreFocus: E,
            isEnabled: U,
            open: c,
            children: g.cloneElement(l, Z)
          })
        ]
      })
    });
  });
  fp = function(e) {
    return ve("MuiDivider", e);
  };
  let zd, Dd, jd, So;
  pp = ge("MuiDivider", [
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
  zd = (e) => {
    const { classes: t, disableUnderline: r, startAdornment: n, endAdornment: o, size: i, hiddenLabel: s, multiline: a } = e, u = {
      root: [
        "root",
        !r && "underline",
        n && "adornedStart",
        o && "adornedEnd",
        i === "small" && `size${ne(i)}`,
        s && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, l = Se(u, cd, t);
    return {
      ...t,
      ...l
    };
  };
  Dd = G(pn, {
    shouldForwardProp: (e) => et(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        ...dn(e, t),
        !r.disableUnderline && t.underline
      ];
    }
  })(ke(({ theme: e }) => {
    const t = e.palette.mode === "light", r = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", n = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
      position: "relative",
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n,
      borderTopLeftRadius: (e.vars || e).shape.borderRadius,
      borderTopRightRadius: (e.vars || e).shape.borderRadius,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
        "@media (hover: none)": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
        }
      },
      [`&.${pt.focused}`]: {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
      },
      [`&.${pt.disabled}`]: {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
      },
      variants: [
        {
          props: ({ ownerState: s }) => !s.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${pt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${pt.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (e.vars || e).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : r}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${pt.disabled}, .${pt.error}):before`]: {
              borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
            },
            [`&.${pt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(e.palette).filter(dt()).map(([s]) => {
          var _a2;
          return {
            props: {
              disableUnderline: false,
              color: s
            },
            style: {
              "&::after": {
                borderBottom: `2px solid ${(_a2 = (e.vars || e).palette[s]) == null ? void 0 : _a2.main}`
              }
            }
          };
        }),
        {
          props: ({ ownerState: s }) => s.startAdornment,
          style: {
            paddingLeft: 12
          }
        },
        {
          props: ({ ownerState: s }) => s.endAdornment,
          style: {
            paddingRight: 12
          }
        },
        {
          props: ({ ownerState: s }) => s.multiline,
          style: {
            padding: "25px 12px 8px"
          }
        },
        {
          props: ({ ownerState: s, size: a }) => s.multiline && a === "small",
          style: {
            paddingTop: 21,
            paddingBottom: 4
          }
        },
        {
          props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
          style: {
            paddingTop: 16,
            paddingBottom: 17
          }
        },
        {
          props: ({ ownerState: s }) => s.multiline && s.hiddenLabel && s.size === "small",
          style: {
            paddingTop: 8,
            paddingBottom: 9
          }
        }
      ]
    };
  }));
  jd = G(hn, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: fn
  })(ke(({ theme: e }) => ({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    ...!e.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
        caretColor: e.palette.mode === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    ...e.vars && {
      "&:-webkit-autofill": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      },
      [e.getColorSchemeSelector("dark")]: {
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
        props: ({ ownerState: t }) => t.hiddenLabel,
        style: {
          paddingTop: 16,
          paddingBottom: 17
        }
      },
      {
        props: ({ ownerState: t }) => t.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.endAdornment,
        style: {
          paddingRight: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
        style: {
          paddingTop: 8,
          paddingBottom: 9
        }
      },
      {
        props: ({ ownerState: t }) => t.multiline,
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    ]
  })));
  So = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiFilledInput"
    }), { disableUnderline: o = false, components: i = {}, componentsProps: s, fullWidth: a = false, hiddenLabel: u, inputComponent: l = "input", multiline: h = false, slotProps: m, slots: y = {}, type: S = "text", ...b } = n, C = {
      ...n,
      disableUnderline: o,
      fullWidth: a,
      inputComponent: l,
      multiline: h,
      type: S
    }, w = zd(n), R = {
      root: {
        ownerState: C
      },
      input: {
        ownerState: C
      }
    }, E = m ?? s ? Oe(R, m ?? s) : R, v = y.root ?? i.Root ?? Dd, x = y.input ?? i.Input ?? jd;
    return O.jsx(xo, {
      slots: {
        root: v,
        input: x
      },
      slotProps: E,
      fullWidth: a,
      inputComponent: l,
      multiline: h,
      ref: r,
      type: S,
      ...b,
      classes: w
    });
  });
  So.muiName = "Input";
  function Wd(e) {
    return ve("MuiFormControl", e);
  }
  ge("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  let Hd, Ud;
  Hd = (e) => {
    const { classes: t, margin: r, fullWidth: n } = e, o = {
      root: [
        "root",
        r !== "none" && `margin${ne(r)}`,
        n && "fullWidth"
      ]
    };
    return Se(o, Wd, t);
  };
  Ud = G("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`margin${ne(r.margin)}`],
        r.fullWidth && t.fullWidth
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
  });
  Vd = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiFormControl"
    }), { children: o, className: i, color: s = "primary", component: a = "div", disabled: u = false, error: l = false, focused: h, fullWidth: m = false, hiddenLabel: y = false, margin: S = "none", required: b = false, size: C = "medium", variant: w = "outlined", ...R } = n, E = {
      ...n,
      color: s,
      component: a,
      disabled: u,
      error: l,
      fullWidth: m,
      hiddenLabel: y,
      margin: S,
      required: b,
      size: C,
      variant: w
    }, v = Hd(E), [x, T] = g.useState(() => {
      let M = false;
      return o && g.Children.forEach(o, (B) => {
        if (!bn(B, [
          "Input",
          "Select"
        ])) return;
        const q = bn(B, [
          "Select"
        ]) ? B.props.input : B;
        q && od(q.props) && (M = true);
      }), M;
    }), [P, A] = g.useState(() => {
      let M = false;
      return o && g.Children.forEach(o, (B) => {
        bn(B, [
          "Input",
          "Select"
        ]) && (Ar(B.props, true) || Ar(B.props.inputProps, true)) && (M = true);
      }), M;
    }), [_, D] = g.useState(false);
    u && _ && D(false);
    const c = h !== void 0 && !u ? h : _;
    let I;
    g.useRef(false);
    const z = g.useCallback(() => {
      A(true);
    }, []), j = g.useCallback(() => {
      A(false);
    }, []), H = g.useMemo(() => ({
      adornedStart: x,
      setAdornedStart: T,
      color: s,
      disabled: u,
      error: l,
      filled: P,
      focused: c,
      fullWidth: m,
      hiddenLabel: y,
      size: C,
      onBlur: () => {
        D(false);
      },
      onFocus: () => {
        D(true);
      },
      onEmpty: j,
      onFilled: z,
      registerEffect: I,
      required: b,
      variant: w
    }), [
      x,
      s,
      u,
      l,
      P,
      c,
      m,
      y,
      I,
      j,
      z,
      b,
      C,
      w
    ]);
    return O.jsx(vo.Provider, {
      value: H,
      children: O.jsx(Ud, {
        as: a,
        ownerState: E,
        className: J(v.root, i),
        ref: r,
        ...R,
        children: o
      })
    });
  });
  function Kd(e) {
    return ve("MuiFormHelperText", e);
  }
  const hi = ge("MuiFormHelperText", [
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
  var mi;
  let Gd, qd;
  Gd = (e) => {
    const { classes: t, contained: r, size: n, disabled: o, error: i, filled: s, focused: a, required: u } = e, l = {
      root: [
        "root",
        o && "disabled",
        i && "error",
        n && `size${ne(n)}`,
        r && "contained",
        a && "focused",
        s && "filled",
        u && "required"
      ]
    };
    return Se(l, Kd, t);
  };
  qd = G("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.size && t[`size${ne(r.size)}`],
        r.contained && t.contained,
        r.filled && t.filled
      ];
    }
  })(ke(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    ...e.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${hi.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    },
    [`&.${hi.error}`]: {
      color: (e.vars || e).palette.error.main
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
        props: ({ ownerState: t }) => t.contained,
        style: {
          marginLeft: 14,
          marginRight: 14
        }
      }
    ]
  })));
  Yd = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiFormHelperText"
    }), { children: o, className: i, component: s = "p", disabled: a, error: u, filled: l, focused: h, margin: m, required: y, variant: S, ...b } = n, C = zt(), w = Lt({
      props: n,
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
    }), R = {
      ...n,
      component: s,
      contained: w.variant === "filled" || w.variant === "outlined",
      variant: w.variant,
      size: w.size,
      disabled: w.disabled,
      error: w.error,
      filled: w.filled,
      focused: w.focused,
      required: w.required
    };
    delete R.ownerState;
    const E = Gd(R);
    return O.jsx(qd, {
      as: s,
      className: J(E.root, i),
      ref: r,
      ...b,
      ownerState: R,
      children: o === " " ? mi || (mi = O.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : o
    });
  });
  function Xd(e) {
    return ve("MuiFormLabel", e);
  }
  const Jt = ge("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), Qd = (e) => {
    const { classes: t, color: r, focused: n, disabled: o, error: i, filled: s, required: a } = e, u = {
      root: [
        "root",
        `color${ne(r)}`,
        o && "disabled",
        i && "error",
        s && "filled",
        n && "focused",
        a && "required"
      ],
      asterisk: [
        "asterisk",
        i && "error"
      ]
    };
    return Se(u, Xd, t);
  }, Zd = G("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color === "secondary" && t.colorSecondary,
        r.filled && t.filled
      ];
    }
  })(ke(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    ...e.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(e.palette).filter(dt()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          [`&.${Jt.focused}`]: {
            color: (e.vars || e).palette[t].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Jt.disabled}`]: {
            color: (e.vars || e).palette.text.disabled
          },
          [`&.${Jt.error}`]: {
            color: (e.vars || e).palette.error.main
          }
        }
      }
    ]
  }))), Jd = G("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk
  })(ke(({ theme: e }) => ({
    [`&.${Jt.error}`]: {
      color: (e.vars || e).palette.error.main
    }
  }))), ef = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiFormLabel"
    }), { children: o, className: i, color: s, component: a = "label", disabled: u, error: l, filled: h, focused: m, required: y, ...S } = n, b = zt(), C = Lt({
      props: n,
      muiFormControl: b,
      states: [
        "color",
        "required",
        "focused",
        "disabled",
        "error",
        "filled"
      ]
    }), w = {
      ...n,
      color: C.color || "primary",
      component: a,
      disabled: C.disabled,
      error: C.error,
      filled: C.filled,
      focused: C.focused,
      required: C.required
    }, R = Qd(w);
    return O.jsxs(Zd, {
      as: a,
      ownerState: w,
      className: J(R.root, i),
      ref: r,
      ...S,
      children: [
        o,
        C.required && O.jsxs(Jd, {
          ownerState: w,
          "aria-hidden": true,
          className: R.asterisk,
          children: [
            "\u2009",
            "*"
          ]
        })
      ]
    });
  });
  function jn(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  let tf, Cn;
  tf = {
    entering: {
      opacity: 1,
      transform: jn(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  };
  Cn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  Wn = g.forwardRef(function(t, r) {
    const { addEndListener: n, appear: o = true, children: i, easing: s, in: a, onEnter: u, onEntered: l, onEntering: h, onExit: m, onExited: y, onExiting: S, style: b, timeout: C = "auto", TransitionComponent: w = tt, ...R } = t, E = os(), v = g.useRef(), x = go(), T = g.useRef(null), P = ze(T, dr(i), r), A = (M) => (B) => {
      if (M) {
        const q = T.current;
        B === void 0 ? M(q) : M(q, B);
      }
    }, _ = A(h), D = A((M, B) => {
      Cs(M);
      const { duration: q, delay: oe, easing: L } = Pr({
        style: b,
        timeout: C,
        easing: s
      }, {
        mode: "enter"
      });
      let U;
      C === "auto" ? (U = x.transitions.getAutoHeightDuration(M.clientHeight), v.current = U) : U = q, M.style.transition = [
        x.transitions.create("opacity", {
          duration: U,
          delay: oe
        }),
        x.transitions.create("transform", {
          duration: Cn ? U : U * 0.666,
          delay: oe,
          easing: L
        })
      ].join(","), u && u(M, B);
    }), c = A(l), I = A(S), z = A((M) => {
      const { duration: B, delay: q, easing: oe } = Pr({
        style: b,
        timeout: C,
        easing: s
      }, {
        mode: "exit"
      });
      let L;
      C === "auto" ? (L = x.transitions.getAutoHeightDuration(M.clientHeight), v.current = L) : L = B, M.style.transition = [
        x.transitions.create("opacity", {
          duration: L,
          delay: q
        }),
        x.transitions.create("transform", {
          duration: Cn ? L : L * 0.666,
          delay: Cn ? q : q || L * 0.333,
          easing: oe
        })
      ].join(","), M.style.opacity = 0, M.style.transform = jn(0.75), m && m(M);
    }), j = A(y), H = (M) => {
      C === "auto" && E.start(v.current || 0, M), n && n(T.current, M);
    };
    return O.jsx(w, {
      appear: o,
      in: a,
      nodeRef: T,
      onEnter: D,
      onEntered: c,
      onEntering: _,
      onExit: z,
      onExited: j,
      onExiting: I,
      addEndListener: H,
      timeout: C === "auto" ? null : C,
      ...R,
      children: (M, { ownerState: B, ...q }) => g.cloneElement(i, {
        style: {
          opacity: 0,
          transform: jn(0.75),
          visibility: M === "exited" && !a ? "hidden" : void 0,
          ...tf[M],
          ...b,
          ...i.props.style
        },
        ref: P,
        ...q
      })
    });
  });
  Wn && (Wn.muiSupportAuto = true);
  let rf, nf, of;
  rf = (e) => {
    const { classes: t, disableUnderline: r } = e, o = Se({
      root: [
        "root",
        !r && "underline"
      ],
      input: [
        "input"
      ]
    }, ad, t);
    return {
      ...t,
      ...o
    };
  };
  nf = G(pn, {
    shouldForwardProp: (e) => et(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        ...dn(e, t),
        !r.disableUnderline && t.underline
      ];
    }
  })(ke(({ theme: e }) => {
    let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
      position: "relative",
      variants: [
        {
          props: ({ ownerState: n }) => n.formControl,
          style: {
            "label + &": {
              marginTop: 16
            }
          }
        },
        {
          props: ({ ownerState: n }) => !n.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${Vt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Vt.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (e.vars || e).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${r}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${Vt.disabled}, .${Vt.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${r}`
              }
            },
            [`&.${Vt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(e.palette).filter(dt()).map(([n]) => ({
          props: {
            color: n,
            disableUnderline: false
          },
          style: {
            "&::after": {
              borderBottom: `2px solid ${(e.vars || e).palette[n].main}`
            }
          }
        }))
      ]
    };
  }));
  of = G(hn, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: fn
  })({});
  Co = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiInput"
    }), { disableUnderline: o = false, components: i = {}, componentsProps: s, fullWidth: a = false, inputComponent: u = "input", multiline: l = false, slotProps: h, slots: m = {}, type: y = "text", ...S } = n, b = rf(n), w = {
      root: {
        ownerState: {
          disableUnderline: o
        }
      }
    }, R = h ?? s ? Oe(h ?? s, w) : w, E = m.root ?? i.Root ?? nf, v = m.input ?? i.Input ?? of;
    return O.jsx(xo, {
      slots: {
        root: E,
        input: v
      },
      slotProps: R,
      fullWidth: a,
      inputComponent: u,
      multiline: l,
      ref: r,
      type: y,
      ...S,
      classes: b
    });
  });
  Co.muiName = "Input";
  function sf(e) {
    return ve("MuiInputLabel", e);
  }
  ge("MuiInputLabel", [
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
  let af, lf;
  af = (e) => {
    const { classes: t, formControl: r, size: n, shrink: o, disableAnimation: i, variant: s, required: a } = e, u = {
      root: [
        "root",
        r && "formControl",
        !i && "animated",
        o && "shrink",
        n && n !== "normal" && `size${ne(n)}`,
        s
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, l = Se(u, sf, t);
    return {
      ...t,
      ...l
    };
  };
  lf = G(ef, {
    shouldForwardProp: (e) => et(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        {
          [`& .${Jt.asterisk}`]: t.asterisk
        },
        t.root,
        r.formControl && t.formControl,
        r.size === "small" && t.sizeSmall,
        r.shrink && t.shrink,
        !r.disableAnimation && t.animated,
        r.focused && t.focused,
        t[r.variant]
      ];
    }
  })(ke(({ theme: e }) => ({
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    variants: [
      {
        props: ({ ownerState: t }) => t.formControl,
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
        props: ({ ownerState: t }) => t.shrink,
        style: {
          transform: "translate(0, -1.5px) scale(0.75)",
          transformOrigin: "top left",
          maxWidth: "133%"
        }
      },
      {
        props: ({ ownerState: t }) => !t.disableAnimation,
        style: {
          transition: e.transitions.create([
            "color",
            "transform",
            "max-width"
          ], {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
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
        props: ({ variant: t, ownerState: r }) => t === "filled" && r.shrink,
        style: {
          userSelect: "none",
          pointerEvents: "auto",
          transform: "translate(12px, 7px) scale(0.75)",
          maxWidth: "calc(133% - 24px)"
        }
      },
      {
        props: ({ variant: t, ownerState: r, size: n }) => t === "filled" && r.shrink && n === "small",
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
        props: ({ variant: t, ownerState: r }) => t === "outlined" && r.shrink,
        style: {
          userSelect: "none",
          pointerEvents: "auto",
          maxWidth: "calc(133% - 32px)",
          transform: "translate(14px, -9px) scale(0.75)"
        }
      }
    ]
  })));
  cf = g.forwardRef(function(t, r) {
    const n = Re({
      name: "MuiInputLabel",
      props: t
    }), { disableAnimation: o = false, margin: i, shrink: s, variant: a, className: u, ...l } = n, h = zt();
    let m = s;
    typeof m > "u" && h && (m = h.filled || h.focused || h.adornedStart);
    const y = Lt({
      props: n,
      muiFormControl: h,
      states: [
        "size",
        "variant",
        "required",
        "focused"
      ]
    }), S = {
      ...n,
      disableAnimation: o,
      formControl: h,
      shrink: m,
      size: y.size,
      variant: y.variant,
      required: y.required,
      focused: y.focused
    }, b = af(S);
    return O.jsx(lf, {
      "data-shrink": m,
      ref: r,
      className: J(b.root, u),
      ...l,
      ownerState: S,
      classes: b
    });
  });
  uf = g.createContext({});
  function df(e) {
    return ve("MuiList", e);
  }
  ge("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let ff, pf;
  ff = (e) => {
    const { classes: t, disablePadding: r, dense: n, subheader: o } = e;
    return Se({
      root: [
        "root",
        !r && "padding",
        n && "dense",
        o && "subheader"
      ]
    }, df, t);
  };
  pf = G("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.disablePadding && t.padding,
        r.dense && t.dense,
        r.subheader && t.subheader
      ];
    }
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: e }) => e.subheader,
        style: {
          paddingTop: 0
        }
      }
    ]
  });
  hf = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiList"
    }), { children: o, className: i, component: s = "ul", dense: a = false, disablePadding: u = false, subheader: l, ...h } = n, m = g.useMemo(() => ({
      dense: a
    }), [
      a
    ]), y = {
      ...n,
      component: s,
      dense: a,
      disablePadding: u
    }, S = ff(y);
    return O.jsx(uf.Provider, {
      value: m,
      children: O.jsxs(pf, {
        as: s,
        className: J(S.root, i),
        ref: r,
        ownerState: y,
        ...h,
        children: [
          l,
          o
        ]
      })
    });
  });
  function wn(e, t, r) {
    return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
  }
  function gi(e, t, r) {
    return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
  }
  function ws(e, t) {
    if (t === void 0) return true;
    let r = e.innerText;
    return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? false : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
  }
  function Kt(e, t, r, n, o, i) {
    let s = false, a = o(e, t, t ? r : false);
    for (; a; ) {
      if (a === e.firstChild) {
        if (s) return false;
        s = true;
      }
      const u = n ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !ws(a, i) || u) a = o(e, a, r);
      else return a.focus(), true;
    }
    return false;
  }
  mf = g.forwardRef(function(t, r) {
    const { actions: n, autoFocus: o = false, autoFocusItem: i = false, children: s, className: a, disabledItemsFocusable: u = false, disableListWrap: l = false, onKeyDown: h, variant: m = "selectedMenu", ...y } = t, S = g.useRef(null), b = g.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    xt(() => {
      o && S.current.focus();
    }, [
      o
    ]), g.useImperativeHandle(n, () => ({
      adjustStyleForScrollbar: (v, { direction: x }) => {
        const T = !S.current.style.width;
        if (v.clientHeight < S.current.clientHeight && T) {
          const P = `${is(at(v))}px`;
          S.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = P, S.current.style.width = `calc(100% + ${P})`;
        }
        return S.current;
      }
    }), []);
    const C = (v) => {
      const x = S.current, T = v.key;
      if (v.ctrlKey || v.metaKey || v.altKey) {
        h && h(v);
        return;
      }
      const A = Ge(x).activeElement;
      if (T === "ArrowDown") v.preventDefault(), Kt(x, A, l, u, wn);
      else if (T === "ArrowUp") v.preventDefault(), Kt(x, A, l, u, gi);
      else if (T === "Home") v.preventDefault(), Kt(x, null, l, u, wn);
      else if (T === "End") v.preventDefault(), Kt(x, null, l, u, gi);
      else if (T.length === 1) {
        const _ = b.current, D = T.toLowerCase(), c = performance.now();
        _.keys.length > 0 && (c - _.lastTime > 500 ? (_.keys = [], _.repeating = true, _.previousKeyMatched = true) : _.repeating && D !== _.keys[0] && (_.repeating = false)), _.lastTime = c, _.keys.push(D);
        const I = A && !_.repeating && ws(A, _);
        _.previousKeyMatched && (I || Kt(x, A, false, u, wn, _)) ? v.preventDefault() : _.previousKeyMatched = false;
      }
      h && h(v);
    }, w = ze(S, r);
    let R = -1;
    g.Children.forEach(s, (v, x) => {
      if (!g.isValidElement(v)) {
        R === x && (R += 1, R >= s.length && (R = -1));
        return;
      }
      v.props.disabled || (m === "selectedMenu" && v.props.selected || R === -1) && (R = x), R === x && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (R += 1, R >= s.length && (R = -1));
    });
    const E = g.Children.map(s, (v, x) => {
      if (x === R) {
        const T = {};
        return i && (T.autoFocus = true), v.props.tabIndex === void 0 && m === "selectedMenu" && (T.tabIndex = 0), g.cloneElement(v, T);
      }
      return v;
    });
    return O.jsx(hf, {
      role: "menu",
      ref: w,
      className: a,
      onKeyDown: C,
      tabIndex: o ? 0 : -1,
      ...y,
      children: E
    });
  });
  function gf(e) {
    return ve("MuiPopover", e);
  }
  ge("MuiPopover", [
    "root",
    "paper"
  ]);
  function yi(e, t) {
    let r = 0;
    return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
  }
  function bi(e, t) {
    let r = 0;
    return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
  }
  function vi(e) {
    return [
      e.horizontal,
      e.vertical
    ].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
  }
  function br(e) {
    return typeof e == "function" ? e() : e;
  }
  let yf, bf, Rs;
  yf = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, gf, t);
  };
  bf = G(Ld, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({});
  Rs = G(bu, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
  });
  vf = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiPopover"
    }), { action: o, anchorEl: i, anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: u = "anchorEl", children: l, className: h, container: m, elevation: y = 8, marginThreshold: S = 16, open: b, PaperProps: C = {}, slots: w = {}, slotProps: R = {}, transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: v, transitionDuration: x = "auto", TransitionProps: T = {}, disableScrollLock: P = false, ...A } = n, _ = g.useRef(), D = {
      ...n,
      anchorOrigin: s,
      anchorReference: u,
      elevation: y,
      marginThreshold: S,
      transformOrigin: E,
      TransitionComponent: v,
      transitionDuration: x,
      TransitionProps: T
    }, c = yf(D), I = g.useCallback(() => {
      if (u === "anchorPosition") return a;
      const K = br(i), re = (K && K.nodeType === 1 ? K : Ge(_.current).body).getBoundingClientRect();
      return {
        top: re.top + yi(re, s.vertical),
        left: re.left + bi(re, s.horizontal)
      };
    }, [
      i,
      s.horizontal,
      s.vertical,
      a,
      u
    ]), z = g.useCallback((K) => ({
      vertical: yi(K, E.vertical),
      horizontal: bi(K, E.horizontal)
    }), [
      E.horizontal,
      E.vertical
    ]), j = g.useCallback((K) => {
      const te = {
        width: K.offsetWidth,
        height: K.offsetHeight
      }, re = z(te);
      if (u === "none") return {
        top: null,
        left: null,
        transformOrigin: vi(re)
      };
      const d = I();
      let p = d.top - re.vertical, f = d.left - re.horizontal;
      const $ = p + te.height, N = f + te.width, F = at(br(i)), Y = F.innerHeight - S, Q = F.innerWidth - S;
      if (S !== null && p < S) {
        const X = p - S;
        p -= X, re.vertical += X;
      } else if (S !== null && $ > Y) {
        const X = $ - Y;
        p -= X, re.vertical += X;
      }
      if (S !== null && f < S) {
        const X = f - S;
        f -= X, re.horizontal += X;
      } else if (N > Q) {
        const X = N - Q;
        f -= X, re.horizontal += X;
      }
      return {
        top: `${Math.round(p)}px`,
        left: `${Math.round(f)}px`,
        transformOrigin: vi(re)
      };
    }, [
      i,
      u,
      I,
      z,
      S
    ]), [H, M] = g.useState(b), B = g.useCallback(() => {
      const K = _.current;
      if (!K) return;
      const te = j(K);
      te.top !== null && K.style.setProperty("top", te.top), te.left !== null && (K.style.left = te.left), K.style.transformOrigin = te.transformOrigin, M(true);
    }, [
      j
    ]);
    g.useEffect(() => (P && window.addEventListener("scroll", B), () => window.removeEventListener("scroll", B)), [
      i,
      P,
      B
    ]);
    const q = () => {
      B();
    }, oe = () => {
      M(false);
    };
    g.useEffect(() => {
      b && B();
    }), g.useImperativeHandle(o, () => b ? {
      updatePosition: () => {
        B();
      }
    } : null, [
      b,
      B
    ]), g.useEffect(() => {
      if (!b) return;
      const K = rs(() => {
        B();
      }), te = at(br(i));
      return te.addEventListener("resize", K), () => {
        K.clear(), te.removeEventListener("resize", K);
      };
    }, [
      i,
      b,
      B
    ]);
    let L = x;
    const U = {
      slots: {
        transition: v,
        ...w
      },
      slotProps: {
        transition: T,
        paper: C,
        ...R
      }
    }, [le, ae] = Be("transition", {
      elementType: Wn,
      externalForwardedProps: U,
      ownerState: D,
      getSlotProps: (K) => ({
        ...K,
        onEntering: (te, re) => {
          var _a2;
          (_a2 = K.onEntering) == null ? void 0 : _a2.call(K, te, re), q();
        },
        onExited: (te) => {
          var _a2;
          (_a2 = K.onExited) == null ? void 0 : _a2.call(K, te), oe();
        }
      }),
      additionalProps: {
        appear: true,
        in: b
      }
    });
    x === "auto" && !le.muiSupportAuto && (L = void 0);
    const de = m || (i ? Ge(br(i)).body : void 0), [xe, { slots: Z, slotProps: Pe, ...Te }] = Be("root", {
      ref: r,
      elementType: bf,
      externalForwardedProps: {
        ...U,
        ...A
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: w.backdrop
        },
        slotProps: {
          backdrop: ou(typeof R.backdrop == "function" ? R.backdrop(D) : R.backdrop, {
            invisible: true
          })
        },
        container: de,
        open: b
      },
      ownerState: D,
      className: J(c.root, h)
    }), [_e, ee] = Be("paper", {
      ref: _,
      className: c.paper,
      elementType: Rs,
      externalForwardedProps: U,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: y,
        style: H ? void 0 : {
          opacity: 0
        }
      },
      ownerState: D
    });
    return O.jsx(xe, {
      ...Te,
      ...!Dn(xe) && {
        slots: Z,
        slotProps: Pe,
        disableScrollLock: P
      },
      children: O.jsx(le, {
        ...ae,
        timeout: L,
        children: O.jsx(_e, {
          ...ee,
          children: l
        })
      })
    });
  });
  function xf(e) {
    return ve("MuiMenu", e);
  }
  ge("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  let Sf, Cf, wf, Rf, kf, Ef;
  Sf = {
    vertical: "top",
    horizontal: "right"
  };
  Cf = {
    vertical: "top",
    horizontal: "left"
  };
  wf = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, xf, t);
  };
  Rf = G(vf, {
    shouldForwardProp: (e) => et(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({});
  kf = G(Rs, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  });
  Ef = G(mf, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list
  })({
    outline: 0
  });
  Pf = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiMenu"
    }), { autoFocus: o = true, children: i, className: s, disableAutoFocusItem: a = false, MenuListProps: u = {}, onClose: l, open: h, PaperProps: m = {}, PopoverClasses: y, transitionDuration: S = "auto", TransitionProps: { onEntering: b, ...C } = {}, variant: w = "selectedMenu", slots: R = {}, slotProps: E = {}, ...v } = n, x = fc(), T = {
      ...n,
      autoFocus: o,
      disableAutoFocusItem: a,
      MenuListProps: u,
      onEntering: b,
      PaperProps: m,
      transitionDuration: S,
      TransitionProps: C,
      variant: w
    }, P = wf(T), A = o && !a && h, _ = g.useRef(null), D = (L, U) => {
      _.current && _.current.adjustStyleForScrollbar(L, {
        direction: x ? "rtl" : "ltr"
      }), b && b(L, U);
    }, c = (L) => {
      L.key === "Tab" && (L.preventDefault(), l && l(L, "tabKeyDown"));
    };
    let I = -1;
    g.Children.map(i, (L, U) => {
      g.isValidElement(L) && (L.props.disabled || (w === "selectedMenu" && L.props.selected || I === -1) && (I = U));
    });
    const z = {
      slots: R,
      slotProps: {
        list: u,
        transition: C,
        paper: m,
        ...E
      }
    }, j = dc({
      elementType: R.root,
      externalSlotProps: E.root,
      ownerState: T,
      className: [
        P.root,
        s
      ]
    }), [H, M] = Be("paper", {
      className: P.paper,
      elementType: kf,
      externalForwardedProps: z,
      shouldForwardComponentProp: true,
      ownerState: T
    }), [B, q] = Be("list", {
      className: J(P.list, u.className),
      elementType: Ef,
      shouldForwardComponentProp: true,
      externalForwardedProps: z,
      getSlotProps: (L) => ({
        ...L,
        onKeyDown: (U) => {
          var _a2;
          c(U), (_a2 = L.onKeyDown) == null ? void 0 : _a2.call(L, U);
        }
      }),
      ownerState: T
    }), oe = typeof z.slotProps.transition == "function" ? z.slotProps.transition(T) : z.slotProps.transition;
    return O.jsx(Rf, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: x ? "right" : "left"
      },
      transformOrigin: x ? Sf : Cf,
      slots: {
        root: R.root,
        paper: H,
        backdrop: R.backdrop,
        ...R.transition && {
          transition: R.transition
        }
      },
      slotProps: {
        root: j,
        paper: M,
        backdrop: typeof E.backdrop == "function" ? E.backdrop(T) : E.backdrop,
        transition: {
          ...oe,
          onEntering: (...L) => {
            var _a2;
            D(...L), (_a2 = oe == null ? void 0 : oe.onEntering) == null ? void 0 : _a2.call(oe, ...L);
          }
        }
      },
      open: h,
      ref: r,
      transitionDuration: S,
      ownerState: T,
      ...v,
      classes: y,
      children: O.jsx(B, {
        actions: _,
        autoFocus: o && (I === -1 || a),
        autoFocusItem: A,
        variant: w,
        ...q,
        children: i
      })
    });
  });
  function Tf(e) {
    return ve("MuiNativeSelect", e);
  }
  const wo = ge("MuiNativeSelect", [
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
  ]), Af = (e) => {
    const { classes: t, variant: r, disabled: n, multiple: o, open: i, error: s } = e, a = {
      select: [
        "select",
        r,
        n && "disabled",
        o && "multiple",
        s && "error"
      ],
      icon: [
        "icon",
        `icon${ne(r)}`,
        i && "iconOpen",
        n && "disabled"
      ]
    };
    return Se(a, Tf, t);
  }, ks = G("select", {
    name: "MuiNativeSelect"
  })(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
      borderRadius: 0
    },
    [`&.${wo.disabled}`]: {
      cursor: "default"
    },
    "&[multiple]": {
      height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.variant !== "filled" && t.variant !== "outlined",
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
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": {
            borderRadius: (e.vars || e).shape.borderRadius
          },
          "&&&": {
            paddingRight: 32
          }
        }
      }
    ]
  })), $f = G(ks, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: et,
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.select,
        t[r.variant],
        r.error && t.error,
        {
          [`&.${wo.multiple}`]: t.multiple
        }
      ];
    }
  })({}), Es = G("svg", {
    name: "MuiNativeSelect"
  })(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${wo.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
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
  })), If = G(Es, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.icon,
        r.variant && t[`icon${ne(r.variant)}`],
        r.open && t.iconOpen
      ];
    }
  })({}), Mf = g.forwardRef(function(t, r) {
    const { className: n, disabled: o, error: i, IconComponent: s, inputRef: a, variant: u = "standard", ...l } = t, h = {
      ...t,
      disabled: o,
      variant: u,
      error: i
    }, m = Af(h);
    return O.jsxs(g.Fragment, {
      children: [
        O.jsx($f, {
          ownerState: h,
          className: J(m.select, n),
          disabled: o,
          ref: a || r,
          ...l
        }),
        t.multiple ? null : O.jsx(If, {
          as: s,
          ownerState: h,
          className: m.icon
        })
      ]
    });
  });
  var xi;
  const Of = G("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: et
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
  }), _f = G("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: et
  })(ke(({ theme: e }) => ({
    float: "unset",
    width: "auto",
    overflow: "hidden",
    variants: [
      {
        props: ({ ownerState: t }) => !t.withLabel,
        style: {
          padding: 0,
          lineHeight: "11px",
          transition: e.transitions.create("width", {
            duration: 150,
            easing: e.transitions.easing.easeOut
          })
        }
      },
      {
        props: ({ ownerState: t }) => t.withLabel,
        style: {
          display: "block",
          padding: 0,
          height: 11,
          fontSize: "0.75em",
          visibility: "hidden",
          maxWidth: 0.01,
          transition: e.transitions.create("max-width", {
            duration: 50,
            easing: e.transitions.easing.easeOut
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
        props: ({ ownerState: t }) => t.withLabel && t.notched,
        style: {
          maxWidth: "100%",
          transition: e.transitions.create("max-width", {
            duration: 100,
            easing: e.transitions.easing.easeOut,
            delay: 50
          })
        }
      }
    ]
  })));
  function Ff(e) {
    const { children: t, classes: r, className: n, label: o, notched: i, ...s } = e, a = o != null && o !== "", u = {
      ...e,
      notched: i,
      withLabel: a
    };
    return O.jsx(Of, {
      "aria-hidden": true,
      className: n,
      ownerState: u,
      ...s,
      children: O.jsx(_f, {
        ownerState: u,
        children: a ? O.jsx("span", {
          children: o
        }) : xi || (xi = O.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Bf = (e) => {
    const { classes: t } = e, n = Se({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, ld, t);
    return {
      ...t,
      ...n
    };
  }, Nf = G(pn, {
    shouldForwardProp: (e) => et(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: dn
  })(ke(({ theme: e }) => {
    const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (e.vars || e).shape.borderRadius,
      [`&:hover .${Ye.notchedOutline}`]: {
        borderColor: (e.vars || e).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${Ye.notchedOutline}`]: {
          borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
        }
      },
      [`&.${Ye.focused} .${Ye.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(e.palette).filter(dt()).map(([r]) => ({
          props: {
            color: r
          },
          style: {
            [`&.${Ye.focused} .${Ye.notchedOutline}`]: {
              borderColor: (e.vars || e).palette[r].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${Ye.error} .${Ye.notchedOutline}`]: {
              borderColor: (e.vars || e).palette.error.main
            },
            [`&.${Ye.disabled} .${Ye.notchedOutline}`]: {
              borderColor: (e.vars || e).palette.action.disabled
            }
          }
        },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: {
            paddingLeft: 14
          }
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: {
            paddingRight: 14
          }
        },
        {
          props: ({ ownerState: r }) => r.multiline,
          style: {
            padding: "16.5px 14px"
          }
        },
        {
          props: ({ ownerState: r, size: n }) => r.multiline && n === "small",
          style: {
            padding: "8.5px 14px"
          }
        }
      ]
    };
  })), Lf = G(Ff, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline
  })(ke(({ theme: e }) => {
    const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
    };
  })), zf = G(hn, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: fn
  })(ke(({ theme: e }) => ({
    padding: "16.5px 14px",
    ...!e.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
        caretColor: e.palette.mode === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    ...e.vars && {
      "&:-webkit-autofill": {
        borderRadius: "inherit"
      },
      [e.getColorSchemeSelector("dark")]: {
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
        props: ({ ownerState: t }) => t.multiline,
        style: {
          padding: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.endAdornment,
        style: {
          paddingRight: 0
        }
      }
    ]
  }))), Ro = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiOutlinedInput"
    }), { components: o = {}, fullWidth: i = false, inputComponent: s = "input", label: a, multiline: u = false, notched: l, slots: h = {}, slotProps: m = {}, type: y = "text", ...S } = n, b = Bf(n), C = zt(), w = Lt({
      props: n,
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
    }), R = {
      ...n,
      color: w.color || "primary",
      disabled: w.disabled,
      error: w.error,
      focused: w.focused,
      formControl: C,
      fullWidth: i,
      hiddenLabel: w.hiddenLabel,
      multiline: u,
      size: w.size,
      type: y
    }, E = h.root ?? o.Root ?? Nf, v = h.input ?? o.Input ?? zf, [x, T] = Be("notchedOutline", {
      elementType: Lf,
      className: b.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: R,
      externalForwardedProps: {
        slots: h,
        slotProps: m
      },
      additionalProps: {
        label: a != null && a !== "" && w.required ? O.jsxs(g.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return O.jsx(xo, {
      slots: {
        root: E,
        input: v
      },
      slotProps: m,
      renderSuffix: (P) => O.jsx(x, {
        ...T,
        notched: typeof l < "u" ? l : !!(P.startAdornment || P.filled || P.focused)
      }),
      fullWidth: i,
      inputComponent: s,
      multiline: u,
      ref: r,
      type: y,
      ...S,
      classes: {
        ...b,
        notchedOutline: null
      }
    });
  });
  Ro.muiName = "Input";
  function Ps(e) {
    return ve("MuiSelect", e);
  }
  const Gt = ge("MuiSelect", [
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
  var Si;
  const Df = G(ks, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        {
          [`&.${Gt.select}`]: t.select
        },
        {
          [`&.${Gt.select}`]: t[r.variant]
        },
        {
          [`&.${Gt.error}`]: t.error
        },
        {
          [`&.${Gt.multiple}`]: t.multiple
        }
      ];
    }
  })({
    [`&.${Gt.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), jf = G(Es, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.icon,
        r.variant && t[`icon${ne(r.variant)}`],
        r.open && t.iconOpen
      ];
    }
  })({}), Wf = G("input", {
    shouldForwardProp: (e) => bs(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
  });
  function Ci(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
  }
  function Hf(e) {
    return e == null || typeof e == "string" && !e.trim();
  }
  let Uf, Vf, Kf, ko, Gf, qf, Yf;
  Uf = (e) => {
    const { classes: t, variant: r, disabled: n, multiple: o, open: i, error: s } = e, a = {
      select: [
        "select",
        r,
        n && "disabled",
        o && "multiple",
        s && "error"
      ],
      icon: [
        "icon",
        `icon${ne(r)}`,
        i && "iconOpen",
        n && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return Se(a, Ps, t);
  };
  Vf = g.forwardRef(function(t, r) {
    var _a2;
    const { "aria-describedby": n, "aria-label": o, autoFocus: i, autoWidth: s, children: a, className: u, defaultOpen: l, defaultValue: h, disabled: m, displayEmpty: y, error: S = false, IconComponent: b, inputRef: C, labelId: w, MenuProps: R = {}, multiple: E, name: v, onBlur: x, onChange: T, onClose: P, onFocus: A, onOpen: _, open: D, readOnly: c, renderValue: I, required: z, SelectDisplayProps: j = {}, tabIndex: H, type: M, value: B, variant: q = "standard", ...oe } = t, [L, U] = Ko({
      controlled: B,
      default: h,
      name: "Select"
    }), [le, ae] = Ko({
      controlled: D,
      default: l,
      name: "Select"
    }), de = g.useRef(null), xe = g.useRef(null), [Z, Pe] = g.useState(null), { current: Te } = g.useRef(D != null), [_e, ee] = g.useState(), K = ze(r, C), te = g.useCallback((V) => {
      xe.current = V, V && Pe(V);
    }, []), re = Z == null ? void 0 : Z.parentNode;
    g.useImperativeHandle(K, () => ({
      focus: () => {
        xe.current.focus();
      },
      node: de.current,
      value: L
    }), [
      L
    ]), g.useEffect(() => {
      l && le && Z && !Te && (ee(s ? null : re.clientWidth), xe.current.focus());
    }, [
      Z,
      s
    ]), g.useEffect(() => {
      i && xe.current.focus();
    }, [
      i
    ]), g.useEffect(() => {
      if (!w) return;
      const V = Ge(xe.current).getElementById(w);
      if (V) {
        const me = () => {
          getSelection().isCollapsed && xe.current.focus();
        };
        return V.addEventListener("click", me), () => {
          V.removeEventListener("click", me);
        };
      }
    }, [
      w
    ]);
    const d = (V, me) => {
      V ? _ && _(me) : P && P(me), Te || (ee(s ? null : re.clientWidth), ae(V));
    }, p = (V) => {
      V.button === 0 && (V.preventDefault(), xe.current.focus(), d(true, V));
    }, f = (V) => {
      d(false, V);
    }, $ = g.Children.toArray(a), N = (V) => {
      const me = $.find((Ie) => Ie.props.value === V.target.value);
      me !== void 0 && (U(me.props.value), T && T(V, me));
    }, F = (V) => (me) => {
      let Ie;
      if (me.currentTarget.hasAttribute("tabindex")) {
        if (E) {
          Ie = Array.isArray(L) ? L.slice() : [];
          const kt = L.indexOf(V.props.value);
          kt === -1 ? Ie.push(V.props.value) : Ie.splice(kt, 1);
        } else Ie = V.props.value;
        if (V.props.onClick && V.props.onClick(me), L !== Ie && (U(Ie), T)) {
          const kt = me.nativeEvent || me, Eo = new kt.constructor(kt.type, kt);
          Object.defineProperty(Eo, "target", {
            writable: true,
            value: {
              value: Ie,
              name: v
            }
          }), T(Eo, V);
        }
        E || d(false, me);
      }
    }, Y = (V) => {
      c || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(V.key) && (V.preventDefault(), d(true, V));
    }, Q = Z !== null && le, X = (V) => {
      !Q && x && (Object.defineProperty(V, "target", {
        writable: true,
        value: {
          value: L,
          name: v
        }
      }), x(V));
    };
    delete oe["aria-invalid"];
    let W, Ne;
    const ce = [];
    let St = false;
    (Ar({
      value: L
    }) || y) && (I ? W = I(L) : St = true);
    const Dt = $.map((V) => {
      if (!g.isValidElement(V)) return null;
      let me;
      if (E) {
        if (!Array.isArray(L)) throw new Error(it(2));
        me = L.some((Ie) => Ci(Ie, V.props.value)), me && St && ce.push(V.props.children);
      } else me = Ci(L, V.props.value), me && St && (Ne = V.props.children);
      return g.cloneElement(V, {
        "aria-selected": me ? "true" : "false",
        onClick: F(V),
        onKeyUp: (Ie) => {
          Ie.key === " " && Ie.preventDefault(), V.props.onKeyUp && V.props.onKeyUp(Ie);
        },
        role: "option",
        selected: me,
        value: void 0,
        "data-value": V.props.value
      });
    });
    St && (E ? ce.length === 0 ? W = null : W = ce.reduce((V, me, Ie) => (V.push(me), Ie < ce.length - 1 && V.push(", "), V), []) : W = Ne);
    let jt = _e;
    !s && Te && Z && (jt = re.clientWidth);
    let Ct;
    typeof H < "u" ? Ct = H : Ct = m ? null : 0;
    const wt = j.id || (v ? `mui-component-select-${v}` : void 0), ft = {
      ...t,
      variant: q,
      value: L,
      open: Q,
      error: S
    }, ye = Uf(ft), Rt = {
      ...R.PaperProps,
      ...(_a2 = R.slotProps) == null ? void 0 : _a2.paper
    }, Wt = fo();
    return O.jsxs(g.Fragment, {
      children: [
        O.jsx(Df, {
          as: "div",
          ref: te,
          tabIndex: Ct,
          role: "combobox",
          "aria-controls": Q ? Wt : void 0,
          "aria-disabled": m ? "true" : void 0,
          "aria-expanded": Q ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": o,
          "aria-labelledby": [
            w,
            wt
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": n,
          "aria-required": z ? "true" : void 0,
          "aria-invalid": S ? "true" : void 0,
          onKeyDown: Y,
          onMouseDown: m || c ? null : p,
          onBlur: X,
          onFocus: A,
          ...j,
          ownerState: ft,
          className: J(j.className, ye.select, u),
          id: wt,
          children: Hf(W) ? Si || (Si = O.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : W
        }),
        O.jsx(Wf, {
          "aria-invalid": S,
          value: Array.isArray(L) ? L.join(",") : L,
          name: v,
          ref: de,
          "aria-hidden": true,
          onChange: N,
          tabIndex: -1,
          disabled: m,
          className: ye.nativeInput,
          autoFocus: i,
          required: z,
          ...oe,
          ownerState: ft
        }),
        O.jsx(jf, {
          as: b,
          className: ye.icon,
          ownerState: ft
        }),
        O.jsx(Pf, {
          id: `menu-${v || ""}`,
          anchorEl: re,
          open: Q,
          onClose: f,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...R,
          slotProps: {
            ...R.slotProps,
            list: {
              "aria-labelledby": w,
              role: "listbox",
              "aria-multiselectable": E ? "true" : void 0,
              disableListWrap: true,
              id: Wt,
              ...R.MenuListProps
            },
            paper: {
              ...Rt,
              style: {
                minWidth: jt,
                ...Rt != null ? Rt.style : null
              }
            }
          },
          children: Dt
        })
      ]
    });
  });
  Kf = (e) => {
    const { classes: t } = e, n = Se({
      root: [
        "root"
      ]
    }, Ps, t);
    return {
      ...t,
      ...n
    };
  };
  ko = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => et(e) && e !== "variant",
    slot: "Root"
  };
  Gf = G(Co, ko)("");
  qf = G(Ro, ko)("");
  Yf = G(So, ko)("");
  Ts = g.forwardRef(function(t, r) {
    const n = Re({
      name: "MuiSelect",
      props: t
    }), { autoWidth: o = false, children: i, classes: s = {}, className: a, defaultOpen: u = false, displayEmpty: l = false, IconComponent: h = ud, id: m, input: y, inputProps: S, label: b, labelId: C, MenuProps: w, multiple: R = false, native: E = false, onClose: v, onOpen: x, open: T, renderValue: P, SelectDisplayProps: A, variant: _ = "outlined", ...D } = n, c = E ? Mf : Vf, I = zt(), z = Lt({
      props: n,
      muiFormControl: I,
      states: [
        "variant",
        "error"
      ]
    }), j = z.variant || _, H = {
      ...n,
      variant: j,
      classes: s
    }, M = Kf(H), { root: B, ...q } = M, oe = y || {
      standard: O.jsx(Gf, {
        ownerState: H
      }),
      outlined: O.jsx(qf, {
        label: b,
        ownerState: H
      }),
      filled: O.jsx(Yf, {
        ownerState: H
      })
    }[j], L = ze(r, dr(oe));
    return O.jsx(g.Fragment, {
      children: g.cloneElement(oe, {
        inputComponent: c,
        inputProps: {
          children: i,
          error: z.error,
          IconComponent: h,
          variant: j,
          type: void 0,
          multiple: R,
          ...E ? {
            id: m
          } : {
            autoWidth: o,
            defaultOpen: u,
            displayEmpty: l,
            labelId: C,
            MenuProps: w,
            onClose: v,
            onOpen: x,
            open: T,
            renderValue: P,
            SelectDisplayProps: {
              id: m,
              ...A
            }
          },
          ...S,
          classes: S ? Oe(q, S.classes) : q,
          ...y ? y.props.inputProps : {}
        },
        ...(R && E || l) && j === "outlined" ? {
          notched: true
        } : {},
        ref: L,
        className: J(oe.props.className, a, M.root),
        ...!y && {
          variant: j
        },
        ...D
      })
    });
  });
  Ts.muiName = "Select";
  function Xf(e) {
    return ve("MuiTextField", e);
  }
  ge("MuiTextField", [
    "root"
  ]);
  let Qf, Zf, Jf;
  Qf = {
    standard: Co,
    filled: So,
    outlined: Ro
  };
  Zf = (e) => {
    const { classes: t } = e;
    return Se({
      root: [
        "root"
      ]
    }, Xf, t);
  };
  Jf = G(Vd, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({});
  hp = g.forwardRef(function(t, r) {
    const n = Re({
      props: t,
      name: "MuiTextField"
    }), { autoComplete: o, autoFocus: i = false, children: s, className: a, color: u = "primary", defaultValue: l, disabled: h = false, error: m = false, FormHelperTextProps: y, fullWidth: S = false, helperText: b, id: C, InputLabelProps: w, inputProps: R, InputProps: E, inputRef: v, label: x, maxRows: T, minRows: P, multiline: A = false, name: _, onBlur: D, onChange: c, onFocus: I, placeholder: z, required: j = false, rows: H, select: M = false, SelectProps: B, slots: q = {}, slotProps: oe = {}, type: L, value: U, variant: le = "outlined", ...ae } = n, de = {
      ...n,
      autoFocus: i,
      color: u,
      disabled: h,
      error: m,
      fullWidth: S,
      multiline: A,
      required: j,
      select: M,
      variant: le
    }, xe = Zf(de), Z = fo(C), Pe = b && Z ? `${Z}-helper-text` : void 0, Te = x && Z ? `${Z}-label` : void 0, _e = Qf[le], ee = {
      slots: q,
      slotProps: {
        input: E,
        inputLabel: w,
        htmlInput: R,
        formHelperText: y,
        select: B,
        ...oe
      }
    }, K = {}, te = ee.slotProps.inputLabel;
    le === "outlined" && (te && typeof te.shrink < "u" && (K.notched = te.shrink), K.label = x), M && ((!B || !B.native) && (K.id = void 0), K["aria-describedby"] = void 0);
    const [re, d] = Be("root", {
      elementType: Jf,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...ee,
        ...ae
      },
      ownerState: de,
      className: J(xe.root, a),
      ref: r,
      additionalProps: {
        disabled: h,
        error: m,
        fullWidth: S,
        required: j,
        color: u,
        variant: le
      }
    }), [p, f] = Be("input", {
      elementType: _e,
      externalForwardedProps: ee,
      additionalProps: K,
      ownerState: de
    }), [$, N] = Be("inputLabel", {
      elementType: cf,
      externalForwardedProps: ee,
      ownerState: de
    }), [F, Y] = Be("htmlInput", {
      elementType: "input",
      externalForwardedProps: ee,
      ownerState: de
    }), [Q, X] = Be("formHelperText", {
      elementType: Yd,
      externalForwardedProps: ee,
      ownerState: de
    }), [W, Ne] = Be("select", {
      elementType: Ts,
      externalForwardedProps: ee,
      ownerState: de
    }), ce = O.jsx(p, {
      "aria-describedby": Pe,
      autoComplete: o,
      autoFocus: i,
      defaultValue: l,
      fullWidth: S,
      multiline: A,
      name: _,
      rows: H,
      maxRows: T,
      minRows: P,
      type: L,
      value: U,
      id: Z,
      inputRef: v,
      onBlur: D,
      onChange: c,
      onFocus: I,
      placeholder: z,
      inputProps: Y,
      slots: {
        input: q.htmlInput ? F : void 0
      },
      ...f
    });
    return O.jsxs(re, {
      ...d,
      children: [
        x != null && x !== "" && O.jsx($, {
          htmlFor: Z,
          id: Te,
          ...N,
          children: x
        }),
        M ? O.jsx(W, {
          "aria-describedby": Pe,
          id: Z,
          labelId: Te,
          value: U,
          input: ce,
          ...Ne,
          children: s
        }) : ce,
        b && O.jsx(Q, {
          id: Pe,
          ...X,
          children: b
        })
      ]
    });
  });
  var As = {
    exports: {}
  };
  (function(e) {
    (function(t) {
      var r = /^\s+/, n = /\s+$/, o = 0, i = t.round, s = t.min, a = t.max, u = t.random;
      function l(d, p) {
        if (d = d || "", p = p || {}, d instanceof l) return d;
        if (!(this instanceof l)) return new l(d, p);
        var f = h(d);
        this._originalInput = d, this._r = f.r, this._g = f.g, this._b = f.b, this._a = f.a, this._roundA = i(100 * this._a) / 100, this._format = p.format || f.format, this._gradientType = p.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = f.ok, this._tc_id = o++;
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
          var d = this.toRgb();
          return (d.r * 299 + d.g * 587 + d.b * 114) / 1e3;
        },
        getLuminance: function() {
          var d = this.toRgb(), p, f, $, N, F, Y;
          return p = d.r / 255, f = d.g / 255, $ = d.b / 255, p <= 0.03928 ? N = p / 12.92 : N = t.pow((p + 0.055) / 1.055, 2.4), f <= 0.03928 ? F = f / 12.92 : F = t.pow((f + 0.055) / 1.055, 2.4), $ <= 0.03928 ? Y = $ / 12.92 : Y = t.pow(($ + 0.055) / 1.055, 2.4), 0.2126 * N + 0.7152 * F + 0.0722 * Y;
        },
        setAlpha: function(d) {
          return this._a = L(d), this._roundA = i(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var d = b(this._r, this._g, this._b);
          return {
            h: d.h * 360,
            s: d.s,
            v: d.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var d = b(this._r, this._g, this._b), p = i(d.h * 360), f = i(d.s * 100), $ = i(d.v * 100);
          return this._a == 1 ? "hsv(" + p + ", " + f + "%, " + $ + "%)" : "hsva(" + p + ", " + f + "%, " + $ + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var d = y(this._r, this._g, this._b);
          return {
            h: d.h * 360,
            s: d.s,
            l: d.l,
            a: this._a
          };
        },
        toHslString: function() {
          var d = y(this._r, this._g, this._b), p = i(d.h * 360), f = i(d.s * 100), $ = i(d.l * 100);
          return this._a == 1 ? "hsl(" + p + ", " + f + "%, " + $ + "%)" : "hsla(" + p + ", " + f + "%, " + $ + "%, " + this._roundA + ")";
        },
        toHex: function(d) {
          return w(this._r, this._g, this._b, d);
        },
        toHexString: function(d) {
          return "#" + this.toHex(d);
        },
        toHex8: function(d) {
          return R(this._r, this._g, this._b, this._a, d);
        },
        toHex8String: function(d) {
          return "#" + this.toHex8(d);
        },
        toRgb: function() {
          return {
            r: i(this._r),
            g: i(this._g),
            b: i(this._b),
            a: this._a
          };
        },
        toRgbString: function() {
          return this._a == 1 ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
          return {
            r: i(U(this._r, 255) * 100) + "%",
            g: i(U(this._g, 255) * 100) + "%",
            b: i(U(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + i(U(this._r, 255) * 100) + "%, " + i(U(this._g, 255) * 100) + "%, " + i(U(this._b, 255) * 100) + "%)" : "rgba(" + i(U(this._r, 255) * 100) + "%, " + i(U(this._g, 255) * 100) + "%, " + i(U(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : q[w(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(d) {
          var p = "#" + E(this._r, this._g, this._b, this._a), f = p, $ = this._gradientType ? "GradientType = 1, " : "";
          if (d) {
            var N = l(d);
            f = "#" + E(N._r, N._g, N._b, N._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + $ + "startColorstr=" + p + ",endColorstr=" + f + ")";
        },
        toString: function(d) {
          var p = !!d;
          d = d || this._format;
          var f = false, $ = this._a < 1 && this._a >= 0, N = !p && $ && (d === "hex" || d === "hex6" || d === "hex3" || d === "hex4" || d === "hex8" || d === "name");
          return N ? d === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (d === "rgb" && (f = this.toRgbString()), d === "prgb" && (f = this.toPercentageRgbString()), (d === "hex" || d === "hex6") && (f = this.toHexString()), d === "hex3" && (f = this.toHexString(true)), d === "hex4" && (f = this.toHex8String(true)), d === "hex8" && (f = this.toHex8String()), d === "name" && (f = this.toName()), d === "hsl" && (f = this.toHslString()), d === "hsv" && (f = this.toHsvString()), f || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(d, p) {
          var f = d.apply(null, [
            this
          ].concat([].slice.call(p)));
          return this._r = f._r, this._g = f._g, this._b = f._b, this.setAlpha(f._a), this;
        },
        lighten: function() {
          return this._applyModification(P, arguments);
        },
        brighten: function() {
          return this._applyModification(A, arguments);
        },
        darken: function() {
          return this._applyModification(_, arguments);
        },
        desaturate: function() {
          return this._applyModification(v, arguments);
        },
        saturate: function() {
          return this._applyModification(x, arguments);
        },
        greyscale: function() {
          return this._applyModification(T, arguments);
        },
        spin: function() {
          return this._applyModification(D, arguments);
        },
        _applyCombination: function(d, p) {
          return d.apply(null, [
            this
          ].concat([].slice.call(p)));
        },
        analogous: function() {
          return this._applyCombination(H, arguments);
        },
        complement: function() {
          return this._applyCombination(c, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(M, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(j, arguments);
        },
        triad: function() {
          return this._applyCombination(I, arguments);
        },
        tetrad: function() {
          return this._applyCombination(z, arguments);
        }
      }, l.fromRatio = function(d, p) {
        if (typeof d == "object") {
          var f = {};
          for (var $ in d) d.hasOwnProperty($) && ($ === "a" ? f[$] = d[$] : f[$] = Pe(d[$]));
          d = f;
        }
        return l(d, p);
      };
      function h(d) {
        var p = {
          r: 0,
          g: 0,
          b: 0
        }, f = 1, $ = null, N = null, F = null, Y = false, Q = false;
        return typeof d == "string" && (d = te(d)), typeof d == "object" && (K(d.r) && K(d.g) && K(d.b) ? (p = m(d.r, d.g, d.b), Y = true, Q = String(d.r).substr(-1) === "%" ? "prgb" : "rgb") : K(d.h) && K(d.s) && K(d.v) ? ($ = Pe(d.s), N = Pe(d.v), p = C(d.h, $, N), Y = true, Q = "hsv") : K(d.h) && K(d.s) && K(d.l) && ($ = Pe(d.s), F = Pe(d.l), p = S(d.h, $, F), Y = true, Q = "hsl"), d.hasOwnProperty("a") && (f = d.a)), f = L(f), {
          ok: Y,
          format: d.format || Q,
          r: s(255, a(p.r, 0)),
          g: s(255, a(p.g, 0)),
          b: s(255, a(p.b, 0)),
          a: f
        };
      }
      function m(d, p, f) {
        return {
          r: U(d, 255) * 255,
          g: U(p, 255) * 255,
          b: U(f, 255) * 255
        };
      }
      function y(d, p, f) {
        d = U(d, 255), p = U(p, 255), f = U(f, 255);
        var $ = a(d, p, f), N = s(d, p, f), F, Y, Q = ($ + N) / 2;
        if ($ == N) F = Y = 0;
        else {
          var X = $ - N;
          switch (Y = Q > 0.5 ? X / (2 - $ - N) : X / ($ + N), $) {
            case d:
              F = (p - f) / X + (p < f ? 6 : 0);
              break;
            case p:
              F = (f - d) / X + 2;
              break;
            case f:
              F = (d - p) / X + 4;
              break;
          }
          F /= 6;
        }
        return {
          h: F,
          s: Y,
          l: Q
        };
      }
      function S(d, p, f) {
        var $, N, F;
        d = U(d, 360), p = U(p, 100), f = U(f, 100);
        function Y(W, Ne, ce) {
          return ce < 0 && (ce += 1), ce > 1 && (ce -= 1), ce < 1 / 6 ? W + (Ne - W) * 6 * ce : ce < 1 / 2 ? Ne : ce < 2 / 3 ? W + (Ne - W) * (2 / 3 - ce) * 6 : W;
        }
        if (p === 0) $ = N = F = f;
        else {
          var Q = f < 0.5 ? f * (1 + p) : f + p - f * p, X = 2 * f - Q;
          $ = Y(X, Q, d + 1 / 3), N = Y(X, Q, d), F = Y(X, Q, d - 1 / 3);
        }
        return {
          r: $ * 255,
          g: N * 255,
          b: F * 255
        };
      }
      function b(d, p, f) {
        d = U(d, 255), p = U(p, 255), f = U(f, 255);
        var $ = a(d, p, f), N = s(d, p, f), F, Y, Q = $, X = $ - N;
        if (Y = $ === 0 ? 0 : X / $, $ == N) F = 0;
        else {
          switch ($) {
            case d:
              F = (p - f) / X + (p < f ? 6 : 0);
              break;
            case p:
              F = (f - d) / X + 2;
              break;
            case f:
              F = (d - p) / X + 4;
              break;
          }
          F /= 6;
        }
        return {
          h: F,
          s: Y,
          v: Q
        };
      }
      function C(d, p, f) {
        d = U(d, 360) * 6, p = U(p, 100), f = U(f, 100);
        var $ = t.floor(d), N = d - $, F = f * (1 - p), Y = f * (1 - N * p), Q = f * (1 - (1 - N) * p), X = $ % 6, W = [
          f,
          Y,
          F,
          F,
          Q,
          f
        ][X], Ne = [
          Q,
          f,
          f,
          Y,
          F,
          F
        ][X], ce = [
          F,
          F,
          Q,
          f,
          f,
          Y
        ][X];
        return {
          r: W * 255,
          g: Ne * 255,
          b: ce * 255
        };
      }
      function w(d, p, f, $) {
        var N = [
          Z(i(d).toString(16)),
          Z(i(p).toString(16)),
          Z(i(f).toString(16))
        ];
        return $ && N[0].charAt(0) == N[0].charAt(1) && N[1].charAt(0) == N[1].charAt(1) && N[2].charAt(0) == N[2].charAt(1) ? N[0].charAt(0) + N[1].charAt(0) + N[2].charAt(0) : N.join("");
      }
      function R(d, p, f, $, N) {
        var F = [
          Z(i(d).toString(16)),
          Z(i(p).toString(16)),
          Z(i(f).toString(16)),
          Z(Te($))
        ];
        return N && F[0].charAt(0) == F[0].charAt(1) && F[1].charAt(0) == F[1].charAt(1) && F[2].charAt(0) == F[2].charAt(1) && F[3].charAt(0) == F[3].charAt(1) ? F[0].charAt(0) + F[1].charAt(0) + F[2].charAt(0) + F[3].charAt(0) : F.join("");
      }
      function E(d, p, f, $) {
        var N = [
          Z(Te($)),
          Z(i(d).toString(16)),
          Z(i(p).toString(16)),
          Z(i(f).toString(16))
        ];
        return N.join("");
      }
      l.equals = function(d, p) {
        return !d || !p ? false : l(d).toRgbString() == l(p).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: u(),
          g: u(),
          b: u()
        });
      };
      function v(d, p) {
        p = p === 0 ? 0 : p || 10;
        var f = l(d).toHsl();
        return f.s -= p / 100, f.s = le(f.s), l(f);
      }
      function x(d, p) {
        p = p === 0 ? 0 : p || 10;
        var f = l(d).toHsl();
        return f.s += p / 100, f.s = le(f.s), l(f);
      }
      function T(d) {
        return l(d).desaturate(100);
      }
      function P(d, p) {
        p = p === 0 ? 0 : p || 10;
        var f = l(d).toHsl();
        return f.l += p / 100, f.l = le(f.l), l(f);
      }
      function A(d, p) {
        p = p === 0 ? 0 : p || 10;
        var f = l(d).toRgb();
        return f.r = a(0, s(255, f.r - i(255 * -(p / 100)))), f.g = a(0, s(255, f.g - i(255 * -(p / 100)))), f.b = a(0, s(255, f.b - i(255 * -(p / 100)))), l(f);
      }
      function _(d, p) {
        p = p === 0 ? 0 : p || 10;
        var f = l(d).toHsl();
        return f.l -= p / 100, f.l = le(f.l), l(f);
      }
      function D(d, p) {
        var f = l(d).toHsl(), $ = (f.h + p) % 360;
        return f.h = $ < 0 ? 360 + $ : $, l(f);
      }
      function c(d) {
        var p = l(d).toHsl();
        return p.h = (p.h + 180) % 360, l(p);
      }
      function I(d) {
        var p = l(d).toHsl(), f = p.h;
        return [
          l(d),
          l({
            h: (f + 120) % 360,
            s: p.s,
            l: p.l
          }),
          l({
            h: (f + 240) % 360,
            s: p.s,
            l: p.l
          })
        ];
      }
      function z(d) {
        var p = l(d).toHsl(), f = p.h;
        return [
          l(d),
          l({
            h: (f + 90) % 360,
            s: p.s,
            l: p.l
          }),
          l({
            h: (f + 180) % 360,
            s: p.s,
            l: p.l
          }),
          l({
            h: (f + 270) % 360,
            s: p.s,
            l: p.l
          })
        ];
      }
      function j(d) {
        var p = l(d).toHsl(), f = p.h;
        return [
          l(d),
          l({
            h: (f + 72) % 360,
            s: p.s,
            l: p.l
          }),
          l({
            h: (f + 216) % 360,
            s: p.s,
            l: p.l
          })
        ];
      }
      function H(d, p, f) {
        p = p || 6, f = f || 30;
        var $ = l(d).toHsl(), N = 360 / f, F = [
          l(d)
        ];
        for ($.h = ($.h - (N * p >> 1) + 720) % 360; --p; ) $.h = ($.h + N) % 360, F.push(l($));
        return F;
      }
      function M(d, p) {
        p = p || 6;
        for (var f = l(d).toHsv(), $ = f.h, N = f.s, F = f.v, Y = [], Q = 1 / p; p--; ) Y.push(l({
          h: $,
          s: N,
          v: F
        })), F = (F + Q) % 1;
        return Y;
      }
      l.mix = function(d, p, f) {
        f = f === 0 ? 0 : f || 50;
        var $ = l(d).toRgb(), N = l(p).toRgb(), F = f / 100, Y = {
          r: (N.r - $.r) * F + $.r,
          g: (N.g - $.g) * F + $.g,
          b: (N.b - $.b) * F + $.b,
          a: (N.a - $.a) * F + $.a
        };
        return l(Y);
      }, l.readability = function(d, p) {
        var f = l(d), $ = l(p);
        return (t.max(f.getLuminance(), $.getLuminance()) + 0.05) / (t.min(f.getLuminance(), $.getLuminance()) + 0.05);
      }, l.isReadable = function(d, p, f) {
        var $ = l.readability(d, p), N, F;
        switch (F = false, N = re(f), N.level + N.size) {
          case "AAsmall":
          case "AAAlarge":
            F = $ >= 4.5;
            break;
          case "AAlarge":
            F = $ >= 3;
            break;
          case "AAAsmall":
            F = $ >= 7;
            break;
        }
        return F;
      }, l.mostReadable = function(d, p, f) {
        var $ = null, N = 0, F, Y, Q, X;
        f = f || {}, Y = f.includeFallbackColors, Q = f.level, X = f.size;
        for (var W = 0; W < p.length; W++) F = l.readability(d, p[W]), F > N && (N = F, $ = l(p[W]));
        return l.isReadable(d, $, {
          level: Q,
          size: X
        }) || !Y ? $ : (f.includeFallbackColors = false, l.mostReadable(d, [
          "#fff",
          "#000"
        ], f));
      };
      var B = l.names = {
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
      }, q = l.hexNames = oe(B);
      function oe(d) {
        var p = {};
        for (var f in d) d.hasOwnProperty(f) && (p[d[f]] = f);
        return p;
      }
      function L(d) {
        return d = parseFloat(d), (isNaN(d) || d < 0 || d > 1) && (d = 1), d;
      }
      function U(d, p) {
        de(d) && (d = "100%");
        var f = xe(d);
        return d = s(p, a(0, parseFloat(d))), f && (d = parseInt(d * p, 10) / 100), t.abs(d - p) < 1e-6 ? 1 : d % p / parseFloat(p);
      }
      function le(d) {
        return s(1, a(0, d));
      }
      function ae(d) {
        return parseInt(d, 16);
      }
      function de(d) {
        return typeof d == "string" && d.indexOf(".") != -1 && parseFloat(d) === 1;
      }
      function xe(d) {
        return typeof d == "string" && d.indexOf("%") != -1;
      }
      function Z(d) {
        return d.length == 1 ? "0" + d : "" + d;
      }
      function Pe(d) {
        return d <= 1 && (d = d * 100 + "%"), d;
      }
      function Te(d) {
        return t.round(parseFloat(d) * 255).toString(16);
      }
      function _e(d) {
        return ae(d) / 255;
      }
      var ee = (function() {
        var d = "[-\\+]?\\d+%?", p = "[-\\+]?\\d*\\.\\d+%?", f = "(?:" + p + ")|(?:" + d + ")", $ = "[\\s|\\(]+(" + f + ")[,|\\s]+(" + f + ")[,|\\s]+(" + f + ")\\s*\\)?", N = "[\\s|\\(]+(" + f + ")[,|\\s]+(" + f + ")[,|\\s]+(" + f + ")[,|\\s]+(" + f + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(f),
          rgb: new RegExp("rgb" + $),
          rgba: new RegExp("rgba" + N),
          hsl: new RegExp("hsl" + $),
          hsla: new RegExp("hsla" + N),
          hsv: new RegExp("hsv" + $),
          hsva: new RegExp("hsva" + N),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function K(d) {
        return !!ee.CSS_UNIT.exec(d);
      }
      function te(d) {
        d = d.replace(r, "").replace(n, "").toLowerCase();
        var p = false;
        if (B[d]) d = B[d], p = true;
        else if (d == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var f;
        return (f = ee.rgb.exec(d)) ? {
          r: f[1],
          g: f[2],
          b: f[3]
        } : (f = ee.rgba.exec(d)) ? {
          r: f[1],
          g: f[2],
          b: f[3],
          a: f[4]
        } : (f = ee.hsl.exec(d)) ? {
          h: f[1],
          s: f[2],
          l: f[3]
        } : (f = ee.hsla.exec(d)) ? {
          h: f[1],
          s: f[2],
          l: f[3],
          a: f[4]
        } : (f = ee.hsv.exec(d)) ? {
          h: f[1],
          s: f[2],
          v: f[3]
        } : (f = ee.hsva.exec(d)) ? {
          h: f[1],
          s: f[2],
          v: f[3],
          a: f[4]
        } : (f = ee.hex8.exec(d)) ? {
          r: ae(f[1]),
          g: ae(f[2]),
          b: ae(f[3]),
          a: _e(f[4]),
          format: p ? "name" : "hex8"
        } : (f = ee.hex6.exec(d)) ? {
          r: ae(f[1]),
          g: ae(f[2]),
          b: ae(f[3]),
          format: p ? "name" : "hex"
        } : (f = ee.hex4.exec(d)) ? {
          r: ae(f[1] + "" + f[1]),
          g: ae(f[2] + "" + f[2]),
          b: ae(f[3] + "" + f[3]),
          a: _e(f[4] + "" + f[4]),
          format: p ? "name" : "hex8"
        } : (f = ee.hex3.exec(d)) ? {
          r: ae(f[1] + "" + f[1]),
          g: ae(f[2] + "" + f[2]),
          b: ae(f[3] + "" + f[3]),
          format: p ? "name" : "hex"
        } : false;
      }
      function re(d) {
        var p, f;
        return d = d || {
          level: "AA",
          size: "small"
        }, p = (d.level || "AA").toUpperCase(), f = (d.size || "small").toLowerCase(), p !== "AA" && p !== "AAA" && (p = "AA"), f !== "small" && f !== "large" && (f = "small"), {
          level: p,
          size: f
        };
      }
      e.exports ? e.exports = l : window.tinycolor = l;
    })(Math);
  })(As);
  var ep = As.exports;
  mp = wi(ep);
});
export {
  fd as $,
  tt as A,
  dp as B,
  wr as C,
  Ko as D,
  bt as E,
  Vd as F,
  Ho as G,
  ud as H,
  lp as I,
  ne as J,
  pt as K,
  hf as L,
  Ld as M,
  Bt as N,
  Ye as O,
  bu as P,
  Vt as Q,
  Hu as R,
  Ts as S,
  up as T,
  ze as U,
  xt as V,
  dc as W,
  zt as X,
  yn as Y,
  Yd as Z,
  xs as _,
  __tla,
  or as a,
  bo as a0,
  Wn as a1,
  $d as a2,
  Ge as a3,
  mf as a4,
  cs as a5,
  vo as a6,
  fp as a7,
  ys as a8,
  Oe as a9,
  ja as aA,
  Ic as aB,
  vt as aC,
  mp as aD,
  ao as aE,
  bn as aF,
  ic as aG,
  et as aH,
  Lt as aI,
  Jn as aJ,
  ar as aK,
  Ht as aL,
  Ns as aM,
  Co as aN,
  uf as aO,
  cp as aP,
  Wo as aQ,
  dr as aR,
  ou as aS,
  Xl as aT,
  rs as aU,
  at as aV,
  ed as aW,
  po as aX,
  gd as aY,
  pp as aZ,
  Qc as aa,
  vf as ab,
  Xi as ac,
  st as ad,
  ip as ae,
  oo as af,
  op as ag,
  so as ah,
  cr as ai,
  nn as aj,
  dt as ak,
  qo as al,
  Nc as am,
  os as an,
  Pr as ao,
  co as ap,
  tc as aq,
  as as ar,
  Dn as as,
  bs as at,
  $n as au,
  Dl as av,
  Wl as aw,
  Vr as ax,
  sp as ay,
  ap as az,
  hp as b,
  Ou as c,
  nu as d,
  _n as e,
  ge as f,
  ve as g,
  J as h,
  Se as i,
  O as j,
  fc as k,
  uo as l,
  fo as m,
  Be as n,
  xo as o,
  ke as p,
  cf as q,
  go as r,
  G as s,
  Pf as t,
  Re as u,
  Ss as v,
  mo as w,
  Ir as x,
  lu as y,
  vs as z
};
