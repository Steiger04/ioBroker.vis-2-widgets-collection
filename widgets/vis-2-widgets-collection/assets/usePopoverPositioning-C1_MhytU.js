import { R as ya, t as hu, p as CA, j as De, r as et, q as St, y as tt, m as oA, h as V, w as Ee, l as lA, e as BA, f as RA, g as ee, F as $f, i as oe, G as wu, n as E, H as kn, x as Ke, v as qt, A as vn, I as mu, J as Wf, k as Xf, __tla as __tla_0 } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { _ as JA } from "./vite-preload-helper-PPVm8Dsz.js";
import { g as Cu, c as On } from "./_commonjsHelpers-Cpj98o6Y.js";
let T0, Ls, Jl, BC, E1, Xu, fw, T1, Vi, m1, Hs, Ns, Ow, iw, qe, xh, Ph, Cd, nt, Sd, v1, Fo, F1, kt, Ul, Yt, Ql, vd, Bn, En, Rt, Ur, $e, Rr, fB, mB, rt, Tr, Hr, bs, y1, k1, Pw, L1, bi, jA, zt, x1, Vm, Ym, Ii, S1, I1, Pr, H1, sr, tC, Im, Pm, _m, xm, Gm, xd, gt, w1, Is, h1, Fn, pC, u0, ue, Ys, be, pt, Gi, hw, k0, $s, Pa, Z0, Ne, Kw, id, Hw, Da, C1, yl, Ts, In, ed, nd, Ws, Ih, b1, Bi, Sl, qu, Bt, oh, Io, y0, Rs, D0, lB, wd, Sa, Q1, nB, e0, uc, ym, Sh, Ta, U1, DA, LA, NA, Ks, wA, MA, WA, mA, Os, FB, fA, Qi, Gs, he, Xs, xw, yh, Jw;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const dn = {
    black: "#000",
    white: "#fff"
  }, tr = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, rr = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, nr = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, or = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, ir = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, Or = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Jf = {
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
  function ft(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  }
  qe = "$$material";
  Fo = function() {
    return Fo = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, Fo.apply(null, arguments);
  };
  function Yf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function zf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var jf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Yf(n);
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
  })(), ge = "-ms-", Uo = "-moz-", vA = "-webkit-", vu = "comm", gs = "rule", ps = "decl", Zf = "@import", yu = "@keyframes", qf = "@layer", Ag = Math.abs, Wo = String.fromCharCode, eg = Object.assign;
  function tg(A, e) {
    return ce(A, 0) ^ 45 ? (((e << 2 ^ ce(A, 0)) << 2 ^ ce(A, 1)) << 2 ^ ce(A, 2)) << 2 ^ ce(A, 3) : 0;
  }
  function Qu(A) {
    return A.trim();
  }
  function rg(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function yA(A, e, t) {
    return A.replace(e, t);
  }
  function Qa(A, e) {
    return A.indexOf(e);
  }
  function ce(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function fn(A, e, t) {
    return A.slice(e, t);
  }
  function Xe(A) {
    return A.length;
  }
  function Bs(A) {
    return A.length;
  }
  function Kn(A, e) {
    return e.push(A), A;
  }
  function ng(A, e) {
    return A.map(e).join("");
  }
  var Xo = 1, Fr = 1, bu = 0, Qe = 0, YA = 0, xr = "";
  function Jo(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Xo,
      column: Fr,
      length: i,
      return: ""
    };
  }
  function Kr(A, e) {
    return eg(Jo("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function og() {
    return YA;
  }
  function ig() {
    return YA = Qe > 0 ? ce(xr, --Qe) : 0, Fr--, YA === 10 && (Fr = 1, Xo--), YA;
  }
  function Se() {
    return YA = Qe < bu ? ce(xr, Qe++) : 0, Fr++, YA === 10 && (Fr = 1, Xo++), YA;
  }
  function At() {
    return ce(xr, Qe);
  }
  function Bo() {
    return Qe;
  }
  function yn(A, e) {
    return fn(xr, A, e);
  }
  function gn(A) {
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
  function Fu(A) {
    return Xo = Fr = 1, bu = Xe(xr = A), Qe = 0, [];
  }
  function Uu(A) {
    return xr = "", A;
  }
  function ho(A) {
    return Qu(yn(Qe - 1, ba(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function ag(A) {
    for (; (YA = At()) && YA < 33; ) Se();
    return gn(A) > 2 || gn(YA) > 3 ? "" : " ";
  }
  function sg(A, e) {
    for (; --e && Se() && !(YA < 48 || YA > 102 || YA > 57 && YA < 65 || YA > 70 && YA < 97); ) ;
    return yn(A, Bo() + (e < 6 && At() == 32 && Se() == 32));
  }
  function ba(A) {
    for (; Se(); ) switch (YA) {
      case A:
        return Qe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && ba(YA);
        break;
      case 40:
        A === 41 && ba(A);
        break;
      case 92:
        Se();
        break;
    }
    return Qe;
  }
  function lg(A, e) {
    for (; Se() && A + YA !== 57; ) if (A + YA === 84 && At() === 47) break;
    return "/*" + yn(e, Qe - 1) + "*" + Wo(A === 47 ? A : Se());
  }
  function cg(A) {
    for (; !gn(At()); ) Se();
    return yn(A, Qe);
  }
  function ug(A) {
    return Uu(wo("", null, null, null, [
      ""
    ], A = Fu(A), 0, [
      0
    ], A));
  }
  function wo(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, f = 0, p = 0, B = 1, y = 1, h = 1, b = 0, m = "", v = n, U = o, C = r, S = m; y; ) switch (p = b, b = Se()) {
      case 40:
        if (p != 108 && ce(S, u - 1) == 58) {
          Qa(S += yA(ho(b), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += ho(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += ag(p);
        break;
      case 92:
        S += sg(Bo() - 1, 7);
        continue;
      case 47:
        switch (At()) {
          case 42:
          case 47:
            Kn(dg(lg(Se(), Bo()), e, t), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * B:
        a[l++] = Xe(S) * h;
      case 125 * B:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            y = 0;
          case 59 + c:
            h == -1 && (S = yA(S, /\f/g, "")), f > 0 && Xe(S) - u && Kn(f > 32 ? sl(S + ";", r, t, u - 1) : sl(yA(S, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (Kn(C = al(S, e, t, l, c, n, a, m, v = [], U = [], u), o), b === 123) if (c === 0) wo(S, e, C, C, v, o, u, a, U);
            else switch (d === 99 && ce(S, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                wo(A, C, C, r && Kn(al(A, C, C, 0, 0, n, a, m, n, v = [], u), U), n, U, u, a, r ? v : U);
                break;
              default:
                wo(S, C, C, C, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, B = h = 1, m = S = "", u = i;
        break;
      case 58:
        u = 1 + Xe(S), f = p;
      default:
        if (B < 1) {
          if (b == 123) --B;
          else if (b == 125 && B++ == 0 && ig() == 125) continue;
        }
        switch (S += Wo(b), b * B) {
          case 38:
            h = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[l++] = (Xe(S) - 1) * h, h = 1;
            break;
          case 64:
            At() === 45 && (S += ho(Se())), d = At(), c = u = Xe(m = S += cg(Bo())), b++;
            break;
          case 45:
            p === 45 && Xe(S) == 2 && (B = 0);
        }
    }
    return o;
  }
  function al(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], f = Bs(d), p = 0, B = 0, y = 0; p < r; ++p) for (var h = 0, b = fn(A, u + 1, u = Ag(B = i[p])), m = A; h < f; ++h) (m = Qu(B > 0 ? d[h] + " " + b : yA(b, /&\f/g, d[h]))) && (s[y++] = m);
    return Jo(A, e, t, n === 0 ? gs : a, s, l, c);
  }
  function dg(A, e, t) {
    return Jo(A, e, t, vu, Wo(og()), fn(A, 2, -2), 0);
  }
  function sl(A, e, t, r) {
    return Jo(A, e, t, ps, fn(A, 0, r), fn(A, r + 1, -1), r);
  }
  function vr(A, e) {
    for (var t = "", r = Bs(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function fg(A, e, t, r) {
    switch (A.type) {
      case qf:
        if (A.children.length) break;
      case Zf:
      case ps:
        return A.return = A.return || A.value;
      case vu:
        return "";
      case yu:
        return A.return = A.value + "{" + vr(A.children, r) + "}";
      case gs:
        A.value = A.props.join(",");
    }
    return Xe(t = vr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function gg(A) {
    var e = Bs(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function pg(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function Eu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Bg = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = At(), n === 38 && o === 12 && (t[r] = 1), !gn(o); ) Se();
    return yn(e, Qe);
  }, hg = function(e, t) {
    var r = -1, n = 44;
    do
      switch (gn(n)) {
        case 0:
          n === 38 && At() === 12 && (t[r] = 1), e[r] += Bg(Qe - 1, t, r);
          break;
        case 2:
          e[r] += ho(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = At() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Wo(n);
      }
    while (n = Se());
    return e;
  }, wg = function(e, t) {
    return Uu(hg(Fu(e), t));
  }, ll = /* @__PURE__ */ new WeakMap(), mg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !ll.get(r)) && !n) {
        ll.set(e, true);
        for (var o = [], i = wg(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, Cg = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function Su(A, e) {
    switch (tg(A, e)) {
      case 5103:
        return vA + "print-" + A + A;
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
        return vA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return vA + A + Uo + A + ge + A + A;
      case 6828:
      case 4268:
        return vA + A + ge + A + A;
      case 6165:
        return vA + A + ge + "flex-" + A + A;
      case 5187:
        return vA + A + yA(A, /(\w+).+(:[^]+)/, vA + "box-$1$2" + ge + "flex-$1$2") + A;
      case 5443:
        return vA + A + ge + "flex-item-" + yA(A, /flex-|-self/, "") + A;
      case 4675:
        return vA + A + ge + "flex-line-pack" + yA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return vA + A + ge + yA(A, "shrink", "negative") + A;
      case 5292:
        return vA + A + ge + yA(A, "basis", "preferred-size") + A;
      case 6060:
        return vA + "box-" + yA(A, "-grow", "") + vA + A + ge + yA(A, "grow", "positive") + A;
      case 4554:
        return vA + yA(A, /([^-])(transform)/g, "$1" + vA + "$2") + A;
      case 6187:
        return yA(yA(yA(A, /(zoom-|grab)/, vA + "$1"), /(image-set)/, vA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return yA(A, /(image-set\([^]*)/, vA + "$1$`$1");
      case 4968:
        return yA(yA(A, /(.+:)(flex-)?(.*)/, vA + "box-pack:$3" + ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + vA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return yA(A, /(.+)-inline(.+)/, vA + "$1$2") + A;
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
        if (Xe(A) - 1 - e > 6) switch (ce(A, e + 1)) {
          case 109:
            if (ce(A, e + 4) !== 45) break;
          case 102:
            return yA(A, /(.+:)(.+)-([^]+)/, "$1" + vA + "$2-$3$1" + Uo + (ce(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~Qa(A, "stretch") ? Su(yA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (ce(A, e + 1) !== 115) break;
      case 6444:
        switch (ce(A, Xe(A) - 3 - (~Qa(A, "!important") && 10))) {
          case 107:
            return yA(A, ":", ":" + vA) + A;
          case 101:
            return yA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + vA + (ce(A, 14) === 45 ? "inline-" : "") + "box$3$1" + vA + "$2$3$1" + ge + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (ce(A, e + 11)) {
          case 114:
            return vA + A + ge + yA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return vA + A + ge + yA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return vA + A + ge + yA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return vA + A + ge + A + A;
    }
    return A;
  }
  var vg = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case ps:
        e.return = Su(e.value, e.length);
        break;
      case yu:
        return vr([
          Kr(e, {
            value: yA(e.value, "@", "@" + vA)
          })
        ], n);
      case gs:
        if (e.length) return ng(e.props, function(o) {
          switch (rg(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return vr([
                Kr(e, {
                  props: [
                    yA(o, /:(read-\w+)/, ":" + Uo + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return vr([
                Kr(e, {
                  props: [
                    yA(o, /:(plac\w+)/, ":" + vA + "input-$1")
                  ]
                }),
                Kr(e, {
                  props: [
                    yA(o, /:(plac\w+)/, ":" + Uo + "$1")
                  ]
                }),
                Kr(e, {
                  props: [
                    yA(o, /:(plac\w+)/, ge + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, yg = [
    vg
  ], Qg = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(B) {
        var y = B.getAttribute("data-emotion");
        y.indexOf(" ") !== -1 && (document.head.appendChild(B), B.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || yg, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(B) {
      for (var y = B.getAttribute("data-emotion").split(" "), h = 1; h < y.length; h++) o[y[h]] = true;
      a.push(B);
    });
    var s, l = [
      mg,
      Cg
    ];
    {
      var c, u = [
        fg,
        pg(function(B) {
          c.insert(B);
        })
      ], d = gg(l.concat(n, u)), f = function(y) {
        return vr(ug(y), d);
      };
      s = function(y, h, b, m) {
        c = b, f(y ? y + "{" + h.styles + "}" : h.styles), m && (p.inserted[h.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new jf({
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
  }, Iu = {
    exports: {}
  }, bA = {};
  var ie = typeof Symbol == "function" && Symbol.for, hs = ie ? /* @__PURE__ */ Symbol.for("react.element") : 60103, ws = ie ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Yo = ie ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, zo = ie ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, jo = ie ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Zo = ie ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, qo = ie ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ms = ie ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Ai = ie ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, ei = ie ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, ti = ie ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, bg = ie ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, ri = ie ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ni = ie ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Fg = ie ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Ug = ie ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Eg = ie ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Sg = ie ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function Ie(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case hs:
          switch (A = A.type, A) {
            case ms:
            case Ai:
            case Yo:
            case jo:
            case zo:
            case ti:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case qo:
                case ei:
                case ni:
                case ri:
                case Zo:
                  return A;
                default:
                  return e;
              }
          }
        case ws:
          return e;
      }
    }
  }
  function xu(A) {
    return Ie(A) === Ai;
  }
  bA.AsyncMode = ms;
  bA.ConcurrentMode = Ai;
  bA.ContextConsumer = qo;
  bA.ContextProvider = Zo;
  bA.Element = hs;
  bA.ForwardRef = ei;
  bA.Fragment = Yo;
  bA.Lazy = ni;
  bA.Memo = ri;
  bA.Portal = ws;
  bA.Profiler = jo;
  bA.StrictMode = zo;
  bA.Suspense = ti;
  bA.isAsyncMode = function(A) {
    return xu(A) || Ie(A) === ms;
  };
  bA.isConcurrentMode = xu;
  bA.isContextConsumer = function(A) {
    return Ie(A) === qo;
  };
  bA.isContextProvider = function(A) {
    return Ie(A) === Zo;
  };
  bA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === hs;
  };
  bA.isForwardRef = function(A) {
    return Ie(A) === ei;
  };
  bA.isFragment = function(A) {
    return Ie(A) === Yo;
  };
  bA.isLazy = function(A) {
    return Ie(A) === ni;
  };
  bA.isMemo = function(A) {
    return Ie(A) === ri;
  };
  bA.isPortal = function(A) {
    return Ie(A) === ws;
  };
  bA.isProfiler = function(A) {
    return Ie(A) === jo;
  };
  bA.isStrictMode = function(A) {
    return Ie(A) === zo;
  };
  bA.isSuspense = function(A) {
    return Ie(A) === ti;
  };
  bA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Yo || A === Ai || A === jo || A === zo || A === ti || A === bg || typeof A == "object" && A !== null && (A.$$typeof === ni || A.$$typeof === ri || A.$$typeof === Zo || A.$$typeof === qo || A.$$typeof === ei || A.$$typeof === Ug || A.$$typeof === Eg || A.$$typeof === Sg || A.$$typeof === Fg);
  };
  bA.typeOf = Ie;
  Iu.exports = bA;
  var Ig = Iu.exports, Hu = Ig, xg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, Hg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, Tu = {};
  Tu[Hu.ForwardRef] = xg;
  Tu[Hu.Memo] = Hg;
  var Tg = true;
  function Lu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var Cs = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || Tg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, vs = function(e, t, r) {
    Cs(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function Lg(A) {
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
  var kg = {
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
  }, Og = /[A-Z]|^ms/g, Kg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ku = function(e) {
    return e.charCodeAt(1) === 45;
  }, cl = function(e) {
    return e != null && typeof e != "boolean";
  }, _i = Eu(function(A) {
    return ku(A) ? A : A.replace(Og, "-$&").toLowerCase();
  }), ul = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(Kg, function(r, n, o) {
          return Je = {
            name: n,
            styles: o,
            next: Je
          }, n;
        });
    }
    return kg[e] !== 1 && !ku(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function pn(A, e, t) {
    if (t == null) return "";
    var r = t;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var n = t;
        if (n.anim === 1) return Je = {
          name: n.name,
          styles: n.styles,
          next: Je
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) Je = {
            name: i.name,
            styles: i.styles,
            next: Je
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return Rg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = Je, l = t(A);
          return Je = s, pn(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function Rg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += pn(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : cl(a) && (r += _i(o) + ":" + ul(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) cl(i[s]) && (r += _i(o) + ":" + ul(o, i[s]) + ";");
      else {
        var l = pn(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += _i(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var dl = /label:\s*([^\s;{]+)\s*(;|$)/g, Je;
  function Qn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    Je = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += pn(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += pn(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    dl.lastIndex = 0;
    for (var l = "", c; (c = dl.exec(n)) !== null; ) l += "-" + c[1];
    var u = Lg(n) + l;
    return {
      name: u,
      styles: n,
      next: Je
    };
  }
  var Dg = function(e) {
    return e();
  }, Ou = ya.useInsertionEffect ? ya.useInsertionEffect : false, Ku = Ou || Dg, fl = Ou || hu, Ru = et(typeof HTMLElement < "u" ? Qg({
    key: "css"
  }) : null);
  Ru.Provider;
  var ys = function(e) {
    return CA(function(t, r) {
      var n = De(Ru);
      return e(t, n, r);
    });
  }, bn = et({}), Qs = {}.hasOwnProperty, Fa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Mg = function(e, t) {
    var r = {};
    for (var n in t) Qs.call(t, n) && (r[n] = t[n]);
    return r[Fa] = e, r;
  }, Pg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return Cs(t, r, n), Ku(function() {
      return vs(t, r, n);
    }), null;
  }, _g = ys(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[Fa], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = Lu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = Qn(o, void 0, De(bn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) Qs.call(A, l) && l !== "css" && l !== Fa && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), St(tt, null, St(Pg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), St(n, s));
  }), Ng = _g, gl = function(e, t) {
    var r = arguments;
    if (t == null || !Qs.call(t, "css")) return St.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Ng, o[1] = Mg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return St.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(gl || (gl = {}));
  var Gg = ys(function(A, e) {
    var t = A.styles, r = Qn([
      t
    ], void 0, De(bn)), n = oA();
    return fl(function() {
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
    ]), fl(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && vs(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  bs = function() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return Qn(e);
  };
  Fn = function() {
    var A = bs.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var Vg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $g = Eu(function(A) {
    return Vg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Wg = $g, Xg = function(e) {
    return e !== "theme";
  }, pl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Wg : Xg;
  }, Bl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Jg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return Cs(t, r, n), Ku(function() {
      return vs(t, r, n);
    }), null;
  }, Yg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = Bl(e, t, r), s = a || pl(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var f = c.length, p = 1; p < f; p++) u.push(c[p], d[p]);
      }
      var B = ys(function(y, h, b) {
        var m = l && y.as || n, v = "", U = [], C = y;
        if (y.theme == null) {
          C = {};
          for (var S in y) C[S] = y[S];
          C.theme = De(bn);
        }
        typeof y.className == "string" ? v = Lu(h.registered, U, y.className) : y.className != null && (v = y.className + " ");
        var I = Qn(u.concat(U), h.registered, C);
        v += h.key + "-" + I.name, i !== void 0 && (v += " " + i);
        var x = l && a === void 0 ? pl(m) : s, g = {};
        for (var H in y) l && H === "as" || x(H) && (g[H] = y[H]);
        return g.className = v, b && (g.ref = b), St(tt, null, St(Jg, {
          cache: h,
          serialized: I,
          isStringTag: typeof m == "string"
        }), St(m, g));
      });
      return B.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", B.defaultProps = e.defaultProps, B.__emotion_real = B, B.__emotion_base = n, B.__emotion_styles = u, B.__emotion_forwardProp = a, Object.defineProperty(B, "toString", {
        value: function() {
          return "." + i;
        }
      }), B.withComponent = function(y, h) {
        var b = A(y, Fo({}, t, h, {
          shouldForwardProp: Bl(B, h, true)
        }));
        return b.apply(void 0, u);
      }, B;
    };
  }, zg = [
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
  ], Ua = Yg.bind(null);
  zg.forEach(function(A) {
    Ua[A] = Ua(A);
  });
  function jg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function Du(A) {
    const { styles: e, defaultTheme: t = {} } = A;
    return V(Gg, {
      styles: typeof e == "function" ? (n) => e(jg(n) ? t : n) : e
    });
  }
  function Mu(A, e) {
    return Ua(A, e);
  }
  function Zg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const hl = [];
  function It(A) {
    return hl[0] = A, Qn(hl);
  }
  var Pu = {
    exports: {}
  }, IA = {};
  var Fs = /* @__PURE__ */ Symbol.for("react.transitional.element"), Us = /* @__PURE__ */ Symbol.for("react.portal"), oi = /* @__PURE__ */ Symbol.for("react.fragment"), ii = /* @__PURE__ */ Symbol.for("react.strict_mode"), ai = /* @__PURE__ */ Symbol.for("react.profiler"), si = /* @__PURE__ */ Symbol.for("react.consumer"), li = /* @__PURE__ */ Symbol.for("react.context"), ci = /* @__PURE__ */ Symbol.for("react.forward_ref"), ui = /* @__PURE__ */ Symbol.for("react.suspense"), di = /* @__PURE__ */ Symbol.for("react.suspense_list"), fi = /* @__PURE__ */ Symbol.for("react.memo"), gi = /* @__PURE__ */ Symbol.for("react.lazy"), qg = /* @__PURE__ */ Symbol.for("react.view_transition"), Ap = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Me(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case Fs:
          switch (A = A.type, A) {
            case oi:
            case ai:
            case ii:
            case ui:
            case di:
            case qg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case li:
                case ci:
                case gi:
                case fi:
                  return A;
                case si:
                  return A;
                default:
                  return e;
              }
          }
        case Us:
          return e;
      }
    }
  }
  IA.ContextConsumer = si;
  IA.ContextProvider = li;
  IA.Element = Fs;
  IA.ForwardRef = ci;
  IA.Fragment = oi;
  IA.Lazy = gi;
  IA.Memo = fi;
  IA.Portal = Us;
  IA.Profiler = ai;
  IA.StrictMode = ii;
  IA.Suspense = ui;
  IA.SuspenseList = di;
  IA.isContextConsumer = function(A) {
    return Me(A) === si;
  };
  IA.isContextProvider = function(A) {
    return Me(A) === li;
  };
  IA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === Fs;
  };
  IA.isForwardRef = function(A) {
    return Me(A) === ci;
  };
  IA.isFragment = function(A) {
    return Me(A) === oi;
  };
  IA.isLazy = function(A) {
    return Me(A) === gi;
  };
  IA.isMemo = function(A) {
    return Me(A) === fi;
  };
  IA.isPortal = function(A) {
    return Me(A) === Us;
  };
  IA.isProfiler = function(A) {
    return Me(A) === ai;
  };
  IA.isStrictMode = function(A) {
    return Me(A) === ii;
  };
  IA.isSuspense = function(A) {
    return Me(A) === ui;
  };
  IA.isSuspenseList = function(A) {
    return Me(A) === di;
  };
  IA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === oi || A === ai || A === ii || A === ui || A === di || typeof A == "object" && A !== null && (A.$$typeof === gi || A.$$typeof === fi || A.$$typeof === li || A.$$typeof === si || A.$$typeof === ci || A.$$typeof === Ap || A.getModuleId !== void 0);
  };
  IA.typeOf = Me;
  Pu.exports = IA;
  var _u = Pu.exports;
  function je(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Nu(A) {
    if (Ee(A) || _u.isValidElementType(A) || !je(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Nu(A[t]);
    }), e;
  }
  jA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return je(A) && je(e) && Object.keys(e).forEach((n) => {
      Ee(e[n]) || _u.isValidElementType(e[n]) ? r[n] = e[n] : je(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && je(A[n]) ? r[n] = jA(A[n], e[n], t) : t.clone ? r[n] = je(e[n]) ? Nu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const ep = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function tp(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = ep(e), i = Object.keys(o);
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
  function wl(A, e) {
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
  function rp(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function np(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function op(A) {
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
  const ip = {
    borderRadius: 4
  };
  function tn(A, e) {
    return e ? jA(A, e, {
      clone: false
    }) : A;
  }
  const pi = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, ml = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${pi[A]}px)`
  }, ap = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : pi[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  gt = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || ml;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || ml;
      return Object.keys(e).reduce((i, a) => {
        if (rp(o.keys, a)) {
          const s = np(r.containerQueries ? r : ap, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || pi).includes(a)) {
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
  function Gu(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function Ea(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  h1 = function(A, ...e) {
    const t = Gu(A), r = [
      t,
      ...e
    ].reduce((n, o) => jA(n, o), {});
    return Ea(Object.keys(t), r);
  };
  function sp(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  w1 = function({ values: A, breakpoints: e, base: t }) {
    const r = t || sp(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  mA = function(A) {
    if (typeof A != "string") throw new Error(ft(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  Bi = function(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  };
  function Eo(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Bi(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function XA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Bi(s, r) || {};
      return gt(i, a, (u) => {
        let d = Eo(l, n, u);
        return u === d && typeof u == "string" && (d = Eo(l, n, `${e}${u === "default" ? "" : mA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function lp(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const cp = {
    m: "margin",
    p: "padding"
  }, up = {
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
  }, Cl = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, dp = lp((A) => {
    if (A.length > 2) if (Cl[A]) A = Cl[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = cp[e], n = up[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), Es = [
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
  ], Ss = [
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
    ...Es,
    ...Ss
  ];
  function Un(A, e, t, r) {
    const n = Bi(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  Is = function(A) {
    return Un(A, "spacing", 8);
  };
  En = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function fp(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = En(e, t), r), {});
  }
  function gp(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = dp(t), o = fp(n, r), i = A[t];
    return gt(A, i, o);
  }
  function Vu(A, e) {
    const t = Is(A.theme);
    return Object.keys(A).map((r) => gp(A, e, r, t)).reduce(tn, {});
  }
  function PA(A) {
    return Vu(A, Es);
  }
  PA.propTypes = {};
  PA.filterProps = Es;
  function _A(A) {
    return Vu(A, Ss);
  }
  _A.propTypes = {};
  _A.filterProps = Ss;
  function $u(A = 8, e = Is({
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
  function hi(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? tn(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function Te(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Pe(A, e) {
    return XA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const pp = Pe("border", Te), Bp = Pe("borderTop", Te), hp = Pe("borderRight", Te), wp = Pe("borderBottom", Te), mp = Pe("borderLeft", Te), Cp = Pe("borderColor"), vp = Pe("borderTopColor"), yp = Pe("borderRightColor"), Qp = Pe("borderBottomColor"), bp = Pe("borderLeftColor"), Fp = Pe("outline", Te), Up = Pe("outlineColor"), wi = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = Un(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: En(e, r)
      });
      return gt(A, A.borderRadius, t);
    }
    return null;
  };
  wi.propTypes = {};
  wi.filterProps = [
    "borderRadius"
  ];
  hi(pp, Bp, hp, wp, mp, Cp, vp, yp, Qp, bp, wi, Fp, Up);
  const mi = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = Un(A.theme, "spacing", 8), t = (r) => ({
        gap: En(e, r)
      });
      return gt(A, A.gap, t);
    }
    return null;
  };
  mi.propTypes = {};
  mi.filterProps = [
    "gap"
  ];
  const Ci = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = Un(A.theme, "spacing", 8), t = (r) => ({
        columnGap: En(e, r)
      });
      return gt(A, A.columnGap, t);
    }
    return null;
  };
  Ci.propTypes = {};
  Ci.filterProps = [
    "columnGap"
  ];
  const vi = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = Un(A.theme, "spacing", 8), t = (r) => ({
        rowGap: En(e, r)
      });
      return gt(A, A.rowGap, t);
    }
    return null;
  };
  vi.propTypes = {};
  vi.filterProps = [
    "rowGap"
  ];
  const Ep = XA({
    prop: "gridColumn"
  }), Sp = XA({
    prop: "gridRow"
  }), Ip = XA({
    prop: "gridAutoFlow"
  }), xp = XA({
    prop: "gridAutoColumns"
  }), Hp = XA({
    prop: "gridAutoRows"
  }), Tp = XA({
    prop: "gridTemplateColumns"
  }), Lp = XA({
    prop: "gridTemplateRows"
  }), kp = XA({
    prop: "gridTemplateAreas"
  }), Op = XA({
    prop: "gridArea"
  });
  hi(mi, Ci, vi, Ep, Sp, Ip, xp, Hp, Tp, Lp, kp, Op);
  function yr(A, e) {
    return e === "grey" ? e : A;
  }
  const Kp = XA({
    prop: "color",
    themeKey: "palette",
    transform: yr
  }), Rp = XA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: yr
  }), Dp = XA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: yr
  });
  hi(Kp, Rp, Dp);
  function Ue(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const Mp = XA({
    prop: "width",
    transform: Ue
  }), xs = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || pi[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: Ue(t)
        };
      };
      return gt(A, A.maxWidth, e);
    }
    return null;
  };
  xs.filterProps = [
    "maxWidth"
  ];
  const Pp = XA({
    prop: "minWidth",
    transform: Ue
  }), _p = XA({
    prop: "height",
    transform: Ue
  }), Np = XA({
    prop: "maxHeight",
    transform: Ue
  }), Gp = XA({
    prop: "minHeight",
    transform: Ue
  });
  XA({
    prop: "size",
    cssProperty: "width",
    transform: Ue
  });
  XA({
    prop: "size",
    cssProperty: "height",
    transform: Ue
  });
  const Vp = XA({
    prop: "boxSizing"
  });
  hi(Mp, xs, Pp, _p, Np, Gp, Vp);
  const Sn = {
    border: {
      themeKey: "borders",
      transform: Te
    },
    borderTop: {
      themeKey: "borders",
      transform: Te
    },
    borderRight: {
      themeKey: "borders",
      transform: Te
    },
    borderBottom: {
      themeKey: "borders",
      transform: Te
    },
    borderLeft: {
      themeKey: "borders",
      transform: Te
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
      transform: Te
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: wi
    },
    color: {
      themeKey: "palette",
      transform: yr
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: yr
    },
    backgroundColor: {
      themeKey: "palette",
      transform: yr
    },
    p: {
      style: _A
    },
    pt: {
      style: _A
    },
    pr: {
      style: _A
    },
    pb: {
      style: _A
    },
    pl: {
      style: _A
    },
    px: {
      style: _A
    },
    py: {
      style: _A
    },
    padding: {
      style: _A
    },
    paddingTop: {
      style: _A
    },
    paddingRight: {
      style: _A
    },
    paddingBottom: {
      style: _A
    },
    paddingLeft: {
      style: _A
    },
    paddingX: {
      style: _A
    },
    paddingY: {
      style: _A
    },
    paddingInline: {
      style: _A
    },
    paddingInlineStart: {
      style: _A
    },
    paddingInlineEnd: {
      style: _A
    },
    paddingBlock: {
      style: _A
    },
    paddingBlockStart: {
      style: _A
    },
    paddingBlockEnd: {
      style: _A
    },
    m: {
      style: PA
    },
    mt: {
      style: PA
    },
    mr: {
      style: PA
    },
    mb: {
      style: PA
    },
    ml: {
      style: PA
    },
    mx: {
      style: PA
    },
    my: {
      style: PA
    },
    margin: {
      style: PA
    },
    marginTop: {
      style: PA
    },
    marginRight: {
      style: PA
    },
    marginBottom: {
      style: PA
    },
    marginLeft: {
      style: PA
    },
    marginX: {
      style: PA
    },
    marginY: {
      style: PA
    },
    marginInline: {
      style: PA
    },
    marginInlineStart: {
      style: PA
    },
    marginInlineEnd: {
      style: PA
    },
    marginBlock: {
      style: PA
    },
    marginBlockStart: {
      style: PA
    },
    marginBlockEnd: {
      style: PA
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
      style: mi
    },
    rowGap: {
      style: vi
    },
    columnGap: {
      style: Ci
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
      transform: Ue
    },
    maxWidth: {
      style: xs
    },
    minWidth: {
      transform: Ue
    },
    height: {
      transform: Ue
    },
    maxHeight: {
      transform: Ue
    },
    minHeight: {
      transform: Ue
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
  function $p(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Wp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Xp() {
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
      const d = Bi(n, l) || {};
      return u ? u(i) : gt(i, r, (p) => {
        let B = Eo(d, c, p);
        return p === B && typeof p == "string" && (B = Eo(d, c, `${t}${p === "default" ? "" : mA(p)}`, p)), s === false ? B : {
          [s]: B
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? Sn;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = Gu(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((f) => {
          const p = Wp(l[f], n);
          if (p != null) if (typeof p == "object") if (i[f]) d = tn(d, A(f, p, n, i));
          else {
            const B = gt({
              theme: n
            }, p, (y) => ({
              [f]: y
            }));
            $p(B, p) ? d[f] = e({
              sx: p,
              theme: n,
              nested: true
            }) : d = tn(d, B);
          }
          else d = tn(d, A(f, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": wl(n, Ea(u, d))
        } : wl(n, Ea(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const Tt = Xp();
  Tt.filterProps = [
    "sx"
  ];
  function Jp(A, e) {
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
  Hs = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = tp(t), s = $u(n);
    let l = jA({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: s,
      shape: {
        ...ip,
        ...o
      }
    }, i);
    return l = op(l), l.applyStyles = Jp, l = e.reduce((c, u) => jA(c, u), l), l.unstable_sxConfig = {
      ...Sn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return Tt({
        sx: u,
        theme: this
      });
    }, l;
  };
  function Yp(A) {
    return Object.keys(A).length === 0;
  }
  Ts = function(A = null) {
    const e = De(bn);
    return !e || Yp(e) ? A : e;
  };
  const zp = Hs();
  Ls = function(A = zp) {
    return Ts(A);
  };
  function Ni(A) {
    const e = It(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Wu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = Ls(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Ni(typeof i == "function" ? i(n) : i)) : o = Ni(o)), V(Du, {
      styles: o
    });
  }
  const jp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Sn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Xu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = jp(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return je(a) ? {
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
  const vl = (A) => A, Zp = () => {
    let A = vl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = vl;
      }
    };
  }, Ju = Zp();
  function Yu(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = Yu(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  wA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = Yu(A)) && (r && (r += " "), r += e);
    return r;
  };
  function qp(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = Mu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Tt);
    return CA(function(s, l) {
      const c = Ls(t), { className: u, component: d = "div", ...f } = Xu(s);
      return V(o, {
        as: d,
        ref: l,
        className: wA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const AB = {
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
  DA = function(A, e, t = "Mui") {
    const r = AB[e];
    return r ? `${t}-${r}` : `${Ju.generate(A)}-${e}`;
  };
  LA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = DA(A, n, t);
    }), r;
  };
  function zu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: It(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = It(n.style));
    }), r;
  }
  const eB = Hs();
  Gi = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  function Wt(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function tB(A) {
    return A ? (e, t) => t[A] : null;
  }
  function rB(A, e, t) {
    A.theme = iB(A.theme) ? t : A.theme[e] || A.theme;
  }
  function mo(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => mo(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Wt(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Wt(It(i), t) : i;
      }
      return ju(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Wt(It(r.style), t) : r.style : t ? Wt(It(r), t) : r;
  }
  function ju(A, e, t = [], r = void 0) {
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
      }, t.push(r ? Wt(It(i.style(n)), r) : i.style(n))) : t.push(r ? Wt(It(i.style), r) : i.style);
    }
    return t;
  }
  nB = function(A = {}) {
    const { themeId: e, defaultTheme: t = eB, rootShouldForwardProp: r = Gi, slotShouldForwardProp: n = Gi } = A;
    function o(a) {
      rB(a, e, t);
    }
    return (a, s = {}) => {
      Zg(a, (C) => C.filter((S) => S !== Tt));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f = tB(sB(c)), ...p } = s, B = l && l.startsWith("Mui") || c ? "components" : "custom", y = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, h = d || false;
      let b = Gi;
      c === "Root" || c === "root" ? b = r : c ? b = n : aB(a) && (b = void 0);
      const m = Mu(a, {
        shouldForwardProp: b,
        label: oB(),
        ...p
      }), v = (C) => {
        if (C.__emotion_real === C) return C;
        if (typeof C == "function") return function(I) {
          return mo(I, C, I.theme.modularCssLayers ? B : void 0);
        };
        if (je(C)) {
          const S = zu(C);
          return function(x) {
            return S.variants ? mo(x, S, x.theme.modularCssLayers ? B : void 0) : x.theme.modularCssLayers ? Wt(S.style, B) : S.style;
          };
        }
        return C;
      }, U = (...C) => {
        const S = [], I = C.map(v), x = [];
        if (S.push(o), l && f && x.push(function(k) {
          var _a2, _b2;
          const O = (_b2 = (_a2 = k.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!O) return null;
          const R = {};
          for (const W in O) R[W] = mo(k, O[W], k.theme.modularCssLayers ? "theme" : void 0);
          return f(k, R);
        }), l && !y && x.push(function(k) {
          var _a2, _b2, _c2;
          const O = (_c2 = (_b2 = (_a2 = k.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return O ? ju(k, O, [], k.theme.modularCssLayers ? "theme" : void 0) : null;
        }), h || x.push(Tt), Array.isArray(I[0])) {
          const K = I.shift(), k = new Array(S.length).fill(""), N = new Array(x.length).fill("");
          let O;
          O = [
            ...k,
            ...K,
            ...N
          ], O.raw = [
            ...k,
            ...K.raw,
            ...N
          ], S.unshift(O);
        }
        const g = [
          ...S,
          ...I,
          ...x
        ], H = m(...g);
        return a.muiName && (H.muiName = a.muiName), H;
      };
      return m.withConfig && (U.withConfig = m.withConfig), U;
    };
  };
  function oB(A, e) {
    return void 0;
  }
  function iB(A) {
    for (const e in A) return false;
    return true;
  }
  function aB(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function sB(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  Sa = function(A, e) {
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
            t[n][s] = Sa(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  pt = typeof window < "u" ? hu : lA;
  lB = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function ks(A, e = 0, t = 1) {
    return lB(A, e, t);
  }
  function cB(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Lt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Lt(cB(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(ft(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(ft(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const uB = (A) => {
    const e = Lt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, $r = (A, e) => {
    try {
      return uB(A);
    } catch {
      return A;
    }
  };
  function yi(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Zu(A) {
    A = Lt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), yi({
      type: a,
      values: s
    });
  }
  function Ia(A) {
    A = Lt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Lt(Zu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function dB(A, e) {
    const t = Ia(A), r = Ia(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  Bn = function(A, e) {
    return A = Lt(A), e = ks(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, yi(A);
  };
  function Rn(A, e, t) {
    try {
      return Bn(A, e);
    } catch {
      return A;
    }
  }
  Os = function(A, e) {
    if (A = Lt(A), e = ks(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return yi(A);
  };
  function EA(A, e, t) {
    try {
      return Os(A, e);
    } catch {
      return A;
    }
  }
  Ks = function(A, e) {
    if (A = Lt(A), e = ks(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return yi(A);
  };
  function SA(A, e, t) {
    try {
      return Ks(A, e);
    } catch {
      return A;
    }
  }
  fB = function(A, e = 0.15) {
    return Ia(A) > 0.5 ? Os(A, e) : Ks(A, e);
  };
  function Dn(A, e, t) {
    try {
      return fB(A, e);
    } catch {
      return A;
    }
  }
  yl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  qu = function(A, e = 166) {
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
  };
  Vi = function(A, e) {
    var _a2, _b2, _c2;
    return Ee(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Ne = function(A) {
    return A && A.ownerDocument || document;
  };
  Bt = function(A) {
    return Ne(A).defaultView || window;
  };
  Ql = function(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  };
  let bl = 0;
  function gB(A) {
    const [e, t] = BA(A), r = A || e;
    return lA(() => {
      e == null && (bl += 1, t(`mui-${bl}`));
    }, [
      e
    ]), r;
  }
  const pB = {
    ...ya
  }, Fl = pB.useId;
  Qi = function(A) {
    if (Fl !== void 0) {
      const e = Fl();
      return A ?? e;
    }
    return gB(A);
  };
  Ul = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = oA(A !== void 0), [o, i] = BA(e), a = n ? A : o, s = RA((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  Yt = function(A) {
    const e = oA(A);
    return pt(() => {
      e.current = A;
    }), oA((...t) => (0, e.current)(...t)).current;
  };
  be = function(...A) {
    const e = oA(void 0), t = RA((r) => {
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
    return ee(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const El = {};
  function Ad(A, e) {
    const t = oA(El);
    return t.current === El && (t.current = A(e)), t;
  }
  const BB = [];
  function hB(A) {
    lA(A, BB);
  }
  Rs = class {
    static create() {
      return new Rs();
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
  };
  ed = function() {
    const A = Ad(Rs.create).current;
    return hB(A.disposeEffect), A;
  };
  Sl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function td(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  MA = function(A, e, t = void 0) {
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
  function wB(A) {
    return typeof A == "string";
  }
  function rd(A, e, t) {
    return A === void 0 || wB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  nd = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function Il(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function od(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = wA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
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
    const i = nd({
      ...n,
      ...r
    }), a = Il(r), s = Il(n), l = e(i), c = wA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
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
  id = function(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  };
  mB = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : id(t, r), { props: a, internalRef: s } = od({
      ...o,
      externalSlotProps: i
    }), l = be(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return rd(e, {
      ...a,
      ref: l
    }, r);
  };
  In = function(A) {
    var _a2;
    return parseInt($f, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  };
  const ad = et(null);
  function Ds() {
    return De(ad);
  }
  const CB = typeof Symbol == "function" && Symbol.for, vB = CB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function yB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function QB(A) {
    const { children: e, theme: t } = A, r = Ds(), n = ee(() => {
      const o = r === null ? {
        ...t
      } : yB(r, t);
      return o != null && (o[vB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return V(ad.Provider, {
      value: n,
      children: e
    });
  }
  const sd = et();
  function bB({ value: A, ...e }) {
    return V(sd.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let ld;
  FB = () => De(sd) ?? false;
  ld = et(void 0);
  function UB({ value: A, children: e }) {
    return V(ld.Provider, {
      value: A,
      children: e
    });
  }
  function EB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? Sa(n.defaultProps, r) : !n.styleOverrides && !n.variants ? Sa(n, r) : r;
  }
  function SB({ props: A, name: e }) {
    const t = De(ld);
    return EB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function IB(A) {
    const e = Ts(), t = Qi() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, pt(() => {
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
    ]), n ? V(Wu, {
      styles: n
    }) : null;
  }
  const xl = {};
  function Hl(A, e, t, r = false) {
    return ee(() => {
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
  function cd(A) {
    const { children: e, theme: t, themeId: r } = A, n = Ts(xl), o = Ds() || xl, i = Hl(r, n, t), a = Hl(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = IB(i);
    return V(QB, {
      theme: a,
      children: V(bn.Provider, {
        value: i,
        children: V(bB, {
          value: s,
          children: oe(UB, {
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
  const Tl = {
    theme: void 0
  };
  function xB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (Tl.theme = n.theme, o = zu(A(Tl)), e = o, t = n.theme), o;
    };
  }
  const Ms = "mode", Ps = "color-scheme", HB = "data-color-scheme";
  function TB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = Ms, colorSchemeStorageKey: o = Ps, attribute: i = HB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
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
    return V("script", {
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
  function LB() {
  }
  const kB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return LB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function $i() {
  }
  function Ll(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function ud(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function OB(A) {
    return ud(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function KB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = Ms, colorSchemeStorageKey: i = Ps, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = kB, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = ee(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), f = ee(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), p = ee(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [B, y] = BA(() => {
      const I = (d == null ? void 0 : d.get(e)) || e, x = (f == null ? void 0 : f.get(t)) || t, g = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: I,
        systemMode: Ll(I),
        lightColorScheme: x,
        darkColorScheme: g
      };
    }), [h, b] = BA(l || !u);
    lA(() => {
      b(true);
    }, []);
    const m = OB(B), v = RA((I) => {
      y((x) => {
        if (I === x.mode) return x;
        const g = I ?? e;
        return d == null ? void 0 : d.set(g), {
          ...x,
          mode: g,
          systemMode: Ll(g)
        };
      });
    }, [
      d,
      e
    ]), U = RA((I) => {
      I ? typeof I == "string" ? I && !c.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : y((x) => {
        const g = {
          ...x
        };
        return ud(x, (H) => {
          H === "light" && (f == null ? void 0 : f.set(I), g.lightColorScheme = I), H === "dark" && (p == null ? void 0 : p.set(I), g.darkColorScheme = I);
        }), g;
      }) : y((x) => {
        const g = {
          ...x
        }, H = I.light === null ? t : I.light, K = I.dark === null ? r : I.dark;
        return H && (c.includes(H) ? (g.lightColorScheme = H, f == null ? void 0 : f.set(H)) : console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`)), K && (c.includes(K) ? (g.darkColorScheme = K, p == null ? void 0 : p.set(K)) : console.error(`\`${K}\` does not exist in \`theme.colorSchemes\`.`)), g;
      }) : y((x) => (f == null ? void 0 : f.set(t), p == null ? void 0 : p.set(r), {
        ...x,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      p,
      t,
      r
    ]), C = RA((I) => {
      B.mode === "system" && y((x) => {
        const g = (I == null ? void 0 : I.matches) ? "dark" : "light";
        return x.systemMode === g ? x : {
          ...x,
          systemMode: g
        };
      });
    }, [
      B.mode
    ]), S = oA(C);
    return S.current = C, lA(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const I = (...g) => S.current(...g), x = window.matchMedia("(prefers-color-scheme: dark)");
      return x.addListener(I), I(x), () => {
        x.removeListener(I);
      };
    }, [
      u
    ]), lA(() => {
      if (u) {
        const I = (d == null ? void 0 : d.subscribe((H) => {
          (!H || [
            "light",
            "dark",
            "system"
          ].includes(H)) && v(H || e);
        })) || $i, x = (f == null ? void 0 : f.subscribe((H) => {
          (!H || c.match(H)) && U({
            light: H
          });
        })) || $i, g = (p == null ? void 0 : p.subscribe((H) => {
          (!H || c.match(H)) && U({
            dark: H
          });
        })) || $i;
        return () => {
          I(), x(), g();
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
      ...B,
      mode: h ? B.mode : void 0,
      systemMode: h ? B.systemMode : void 0,
      colorScheme: h ? m : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const RB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function DB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = Ms, colorSchemeStorageKey: n = Ps, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = et(void 0), c = () => De(l) || s, u = {}, d = {};
    function f(h) {
      var _a2, _b2, _c2, _d2;
      const { children: b, theme: m, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: C = o, storageManager: S, storageWindow: I = typeof window > "u" ? void 0 : window, documentNode: x = typeof document > "u" ? void 0 : document, colorSchemeNode: g = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: H = false, disableStyleSheetGeneration: K = false, defaultMode: k = "system", noSsr: N } = h, O = oA(false), R = Ds(), W = De(l), rA = !!W && !H, D = ee(() => m || (typeof t == "function" ? t() : t), [
        m
      ]), X = D[e], q = X || D, { colorSchemes: tA = u, components: T = d, cssVarPrefix: G } = q, _ = Object.keys(tA).filter((pA) => !!tA[pA]).join(","), Y = ee(() => _.split(","), [
        _
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, AA = tA[dA] && tA[iA] ? k : ((_b2 = (_a2 = tA[q.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = q.palette) == null ? void 0 : _c2.mode), { mode: J, setMode: nA, systemMode: aA, lightColorScheme: w, darkColorScheme: F, colorScheme: Q, setColorScheme: M } = KB({
        supportedColorSchemes: Y,
        defaultLightColorScheme: dA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: U,
        defaultMode: AA,
        storageManager: S,
        storageWindow: I,
        noSsr: N
      });
      let $ = J, P = Q;
      rA && ($ = W.mode, P = W.colorScheme);
      const sA = ee(() => {
        var _a3;
        const pA = P || q.defaultColorScheme, GA = ((_a3 = q.generateThemeVars) == null ? void 0 : _a3.call(q)) || q.vars, ZA = {
          ...q,
          components: T,
          colorSchemes: tA,
          cssVarPrefix: G,
          vars: GA
        };
        if (typeof ZA.generateSpacing == "function" && (ZA.spacing = ZA.generateSpacing()), pA) {
          const fe = tA[pA];
          fe && typeof fe == "object" && Object.keys(fe).forEach((te) => {
            fe[te] && typeof fe[te] == "object" ? ZA[te] = {
              ...ZA[te],
              ...fe[te]
            } : ZA[te] = fe[te];
          });
        }
        return a ? a(ZA) : ZA;
      }, [
        q,
        P,
        T,
        tA,
        G
      ]), cA = q.colorSchemeSelector;
      pt(() => {
        if (P && g && cA && cA !== "media") {
          const pA = cA;
          let GA = cA;
          if (pA === "class" && (GA = ".%s"), pA === "data" && (GA = "[data-%s]"), (pA == null ? void 0 : pA.startsWith("data-")) && !pA.includes("%s") && (GA = `[${pA}="%s"]`), GA.startsWith(".")) g.classList.remove(...Y.map((ZA) => GA.substring(1).replace("%s", ZA))), g.classList.add(GA.substring(1).replace("%s", P));
          else {
            const ZA = GA.replace("%s", P).match(/\[([^\]]+)\]/);
            if (ZA) {
              const [fe, te] = ZA[1].split("=");
              te || Y.forEach((mt) => {
                g.removeAttribute(fe.replace(P, mt));
              }), g.setAttribute(fe, te ? te.replace(/"|'/g, "") : "");
            } else g.setAttribute(GA, P);
          }
        }
      }, [
        P,
        cA,
        g,
        Y
      ]), lA(() => {
        let pA;
        if (C && O.current && x) {
          const GA = x.createElement("style");
          GA.appendChild(x.createTextNode(RB)), x.head.appendChild(GA), window.getComputedStyle(x.body), pA = setTimeout(() => {
            x.head.removeChild(GA);
          }, 1);
        }
        return () => {
          clearTimeout(pA);
        };
      }, [
        P,
        C,
        x
      ]), lA(() => (O.current = true, () => {
        O.current = false;
      }), []);
      const gA = ee(() => ({
        allColorSchemes: Y,
        colorScheme: P,
        darkColorScheme: F,
        lightColorScheme: w,
        mode: $,
        setColorScheme: M,
        setMode: nA,
        systemMode: aA
      }), [
        Y,
        P,
        F,
        w,
        $,
        M,
        nA,
        aA,
        sA.colorSchemeSelector
      ]);
      let Z = true;
      (K || q.cssVariables === false || rA && (R == null ? void 0 : R.cssVarPrefix) === G) && (Z = false);
      const ae = oe(tt, {
        children: [
          V(cd, {
            themeId: X ? e : void 0,
            theme: sA,
            children: b
          }),
          Z && V(Du, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return rA ? ae : V(l.Provider, {
        value: gA,
        children: ae
      });
    }
    const p = typeof i == "string" ? i : i.light, B = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (h) => TB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: B,
        modeStorageKey: r,
        ...h
      })
    };
  }
  function MB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const kl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, PB = (A, e, t) => {
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
  }, _B = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function Wi(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return PB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = _B(a, s);
        Object.assign(n, {
          [c]: u
        }), kl(o, a, `var(${c})`, l), kl(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function NB(A, e = {}) {
    const { getSelector: t = y, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = Wi(s, e);
    let d = u;
    const f = {}, { [a]: p, ...B } = o;
    if (Object.entries(B || {}).forEach(([m, v]) => {
      const { vars: U, css: C, varsWithDefaults: S } = Wi(v, e);
      d = jA(d, S), f[m] = {
        css: C,
        vars: U
      };
    }), p) {
      const { css: m, vars: v, varsWithDefaults: U } = Wi(p, e);
      d = jA(d, U), f[a] = {
        css: m,
        vars: v
      };
    }
    function y(m, v) {
      var _a2, _b2;
      let U = n;
      if (n === "class" && (U = ".%s"), n === "data" && (U = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (U = `[${n}="%s"]`), m) {
        if (U === "media") return A.defaultColorScheme === m ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[m]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || m})`]: {
            ":root": v
          }
        };
        if (U) return A.defaultColorScheme === m ? `:root, ${U.replace("%s", String(m))}` : U.replace("%s", String(m));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let m = {
          ...l
        };
        return Object.entries(f).forEach(([, { vars: v }]) => {
          m = jA(m, v);
        }), m;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const m = [], v = A.defaultColorScheme || "light";
        function U(I, x) {
          Object.keys(x).length && m.push(typeof I == "string" ? {
            [I]: {
              ...x
            }
          } : I);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: C, ...S } = f;
        if (C) {
          const { css: I } = C, x = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, g = !r && x ? {
            colorScheme: x,
            ...I
          } : {
            ...I
          };
          U(t(v, {
            ...g
          }), g);
        }
        return Object.entries(S).forEach(([I, { css: x }]) => {
          var _a3, _b3;
          const g = (_b3 = (_a3 = o[I]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, H = !r && g ? {
            colorScheme: g,
            ...x
          } : {
            ...x
          };
          U(t(I, {
            ...H
          }), H);
        }), m;
      }
    };
  }
  function GB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function dd() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: dn.white,
        default: dn.white
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
  const VB = dd();
  function fd() {
    return {
      text: {
        primary: dn.white,
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
        active: dn.white,
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
  const Ol = fd();
  function Kl(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = Ks(A.main, n) : e === "dark" && (A.dark = Os(A.main, o)));
  }
  function $B(A = "light") {
    return A === "dark" ? {
      main: nr[200],
      light: nr[50],
      dark: nr[400]
    } : {
      main: nr[700],
      light: nr[400],
      dark: nr[800]
    };
  }
  function WB(A = "light") {
    return A === "dark" ? {
      main: rr[200],
      light: rr[50],
      dark: rr[400]
    } : {
      main: rr[500],
      light: rr[300],
      dark: rr[700]
    };
  }
  function XB(A = "light") {
    return A === "dark" ? {
      main: tr[500],
      light: tr[300],
      dark: tr[700]
    } : {
      main: tr[700],
      light: tr[400],
      dark: tr[800]
    };
  }
  function JB(A = "light") {
    return A === "dark" ? {
      main: or[400],
      light: or[300],
      dark: or[700]
    } : {
      main: or[700],
      light: or[500],
      dark: or[900]
    };
  }
  function YB(A = "light") {
    return A === "dark" ? {
      main: ir[400],
      light: ir[300],
      dark: ir[700]
    } : {
      main: ir[800],
      light: ir[500],
      dark: ir[900]
    };
  }
  function zB(A = "light") {
    return A === "dark" ? {
      main: Or[400],
      light: Or[300],
      dark: Or[700]
    } : {
      main: "#ed6c02",
      light: Or[500],
      dark: Or[900]
    };
  }
  function _s(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || $B(e), i = A.secondary || WB(e), a = A.error || XB(e), s = A.info || JB(e), l = A.success || YB(e), c = A.warning || zB(e);
    function u(B) {
      return dB(B, Ol.text.primary) >= t ? Ol.text.primary : VB.text.primary;
    }
    const d = ({ color: B, name: y, mainShade: h = 500, lightShade: b = 300, darkShade: m = 700 }) => {
      if (B = {
        ...B
      }, !B.main && B[h] && (B.main = B[h]), !B.hasOwnProperty("main")) throw new Error(ft(11, y ? ` (${y})` : "", h));
      if (typeof B.main != "string") throw new Error(ft(12, y ? ` (${y})` : "", JSON.stringify(B.main)));
      return Kl(B, "light", b, r), Kl(B, "dark", m, r), B.contrastText || (B.contrastText = u(B.main)), B;
    };
    let f;
    return e === "light" ? f = dd() : e === "dark" && (f = fd()), jA({
      common: {
        ...dn
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
      grey: Jf,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...f
    }, n);
  }
  function jB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function ZB(A, e) {
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
  function qB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const Rl = {
    textTransform: "uppercase"
  }, Dl = '"Roboto", "Helvetica", "Arial", sans-serif';
  function gd(A, e) {
    const { fontFamily: t = Dl, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, f = c || ((y) => `${y / s * d}rem`), p = (y, h, b, m, v) => ({
      fontFamily: t,
      fontWeight: y,
      fontSize: f(h),
      lineHeight: b,
      ...t === Dl ? {
        letterSpacing: `${qB(m / h)}em`
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
      button: p(i, 14, 1.75, 0.4, Rl),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, Rl),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return jA({
      htmlFontSize: s,
      pxToRem: f,
      fontFamily: t,
      fontSize: r,
      fontWeightLight: n,
      fontWeightRegular: o,
      fontWeightMedium: i,
      fontWeightBold: a,
      ...B
    }, u, {
      clone: false
    });
  }
  const Ah = 0.2, eh = 0.14, th = 0.12;
  function OA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${Ah})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${eh})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${th})`
    ].join(",");
  }
  let rh, nh;
  rh = [
    "none",
    OA(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    OA(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    OA(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    OA(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    OA(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    OA(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    OA(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    OA(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    OA(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    OA(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    OA(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    OA(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    OA(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    OA(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    OA(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    OA(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    OA(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    OA(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    OA(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    OA(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    OA(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    OA(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    OA(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    OA(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  nh = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  oh = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Ml(A) {
    return `${Math.round(A)}ms`;
  }
  function ih(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function ah(A) {
    const e = {
      ...nh,
      ...A.easing
    }, t = {
      ...oh,
      ...A.duration
    };
    return {
      getAutoHeightDuration: ih,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : Ml(i)} ${a} ${typeof s == "string" ? s : Ml(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const sh = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function lh(A) {
    return je(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function pd(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !lh(a) || i.startsWith("unstable_") ? delete r[i] : je(a) && (r[i] = {
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
  function xa(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(ft(20));
    const c = _s(o), u = Hs(A);
    let d = jA(u, {
      mixins: ZB(u.breakpoints, r),
      palette: c,
      shadows: rh.slice(),
      typography: gd(c, a),
      transitions: ah(i),
      zIndex: {
        ...sh
      }
    });
    return d = jA(d, l), d = e.reduce((f, p) => jA(f, p), d), d.unstable_sxConfig = {
      ...Sn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(p) {
      return Tt({
        sx: p,
        theme: this
      });
    }, d.toRuntimeSource = pd, d;
  }
  function Ha(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const ch = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = Ha(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function Bd(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function hd(A) {
    return A === "dark" ? ch : [];
  }
  function uh(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = _s(e);
    return {
      palette: o,
      opacity: {
        ...Bd(o.mode),
        ...t
      },
      overlays: r || hd(o.mode),
      ...n
    };
  }
  function dh(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const fh = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], gh = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return fh(A.cssVarPrefix).forEach((a) => {
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
  function ph(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function L(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Wr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Zu(A);
  }
  function at(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = $r(Wr(A[e])));
  }
  function Bh(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Ve = (A) => {
    try {
      return A();
    } catch {
    }
  }, hh = (A = "mui") => MB(A);
  function Xi(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = uh({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = xa({
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
        ...Bd(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || hd(n)
    }, i;
  }
  function wh(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = dh, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = hh(o), { [u]: f, light: p, dark: B, ...y } = t, h = {
      ...y
    };
    let b = f;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (b = true), !b) throw new Error(ft(21, u));
    const m = Xi(h, b, l, u);
    p && !h.light && Xi(h, p, void 0, "light"), B && !h.dark && Xi(h, B, void 0, "dark");
    let v = {
      defaultColorScheme: u,
      ...m,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: h,
      font: {
        ...jB(m.typography),
        ...m.font
      },
      spacing: Bh(l.spacing)
    };
    Object.keys(v.colorSchemes).forEach((x) => {
      const g = v.colorSchemes[x].palette, H = (K) => {
        const k = K.split("-"), N = k[1], O = k[2];
        return d(K, g[N][O]);
      };
      if (g.mode === "light" && (L(g.common, "background", "#fff"), L(g.common, "onBackground", "#000")), g.mode === "dark" && (L(g.common, "background", "#000"), L(g.common, "onBackground", "#fff")), ph(g, [
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
        L(g.Alert, "errorColor", EA(g.error.light, 0.6)), L(g.Alert, "infoColor", EA(g.info.light, 0.6)), L(g.Alert, "successColor", EA(g.success.light, 0.6)), L(g.Alert, "warningColor", EA(g.warning.light, 0.6)), L(g.Alert, "errorFilledBg", H("palette-error-main")), L(g.Alert, "infoFilledBg", H("palette-info-main")), L(g.Alert, "successFilledBg", H("palette-success-main")), L(g.Alert, "warningFilledBg", H("palette-warning-main")), L(g.Alert, "errorFilledColor", Ve(() => g.getContrastText(g.error.main))), L(g.Alert, "infoFilledColor", Ve(() => g.getContrastText(g.info.main))), L(g.Alert, "successFilledColor", Ve(() => g.getContrastText(g.success.main))), L(g.Alert, "warningFilledColor", Ve(() => g.getContrastText(g.warning.main))), L(g.Alert, "errorStandardBg", SA(g.error.light, 0.9)), L(g.Alert, "infoStandardBg", SA(g.info.light, 0.9)), L(g.Alert, "successStandardBg", SA(g.success.light, 0.9)), L(g.Alert, "warningStandardBg", SA(g.warning.light, 0.9)), L(g.Alert, "errorIconColor", H("palette-error-main")), L(g.Alert, "infoIconColor", H("palette-info-main")), L(g.Alert, "successIconColor", H("palette-success-main")), L(g.Alert, "warningIconColor", H("palette-warning-main")), L(g.AppBar, "defaultBg", H("palette-grey-100")), L(g.Avatar, "defaultBg", H("palette-grey-400")), L(g.Button, "inheritContainedBg", H("palette-grey-300")), L(g.Button, "inheritContainedHoverBg", H("palette-grey-A100")), L(g.Chip, "defaultBorder", H("palette-grey-400")), L(g.Chip, "defaultAvatarColor", H("palette-grey-700")), L(g.Chip, "defaultIconColor", H("palette-grey-700")), L(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), L(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), L(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), L(g.LinearProgress, "primaryBg", SA(g.primary.main, 0.62)), L(g.LinearProgress, "secondaryBg", SA(g.secondary.main, 0.62)), L(g.LinearProgress, "errorBg", SA(g.error.main, 0.62)), L(g.LinearProgress, "infoBg", SA(g.info.main, 0.62)), L(g.LinearProgress, "successBg", SA(g.success.main, 0.62)), L(g.LinearProgress, "warningBg", SA(g.warning.main, 0.62)), L(g.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.11)`), L(g.Slider, "primaryTrack", SA(g.primary.main, 0.62)), L(g.Slider, "secondaryTrack", SA(g.secondary.main, 0.62)), L(g.Slider, "errorTrack", SA(g.error.main, 0.62)), L(g.Slider, "infoTrack", SA(g.info.main, 0.62)), L(g.Slider, "successTrack", SA(g.success.main, 0.62)), L(g.Slider, "warningTrack", SA(g.warning.main, 0.62));
        const K = Dn(g.background.default, 0.8);
        L(g.SnackbarContent, "bg", K), L(g.SnackbarContent, "color", Ve(() => g.getContrastText(K))), L(g.SpeedDialAction, "fabHoverBg", Dn(g.background.paper, 0.15)), L(g.StepConnector, "border", H("palette-grey-400")), L(g.StepContent, "border", H("palette-grey-400")), L(g.Switch, "defaultColor", H("palette-common-white")), L(g.Switch, "defaultDisabledColor", H("palette-grey-100")), L(g.Switch, "primaryDisabledColor", SA(g.primary.main, 0.62)), L(g.Switch, "secondaryDisabledColor", SA(g.secondary.main, 0.62)), L(g.Switch, "errorDisabledColor", SA(g.error.main, 0.62)), L(g.Switch, "infoDisabledColor", SA(g.info.main, 0.62)), L(g.Switch, "successDisabledColor", SA(g.success.main, 0.62)), L(g.Switch, "warningDisabledColor", SA(g.warning.main, 0.62)), L(g.TableCell, "border", SA(Rn(g.divider, 1), 0.88)), L(g.Tooltip, "bg", Rn(g.grey[700], 0.92));
      }
      if (g.mode === "dark") {
        L(g.Alert, "errorColor", SA(g.error.light, 0.6)), L(g.Alert, "infoColor", SA(g.info.light, 0.6)), L(g.Alert, "successColor", SA(g.success.light, 0.6)), L(g.Alert, "warningColor", SA(g.warning.light, 0.6)), L(g.Alert, "errorFilledBg", H("palette-error-dark")), L(g.Alert, "infoFilledBg", H("palette-info-dark")), L(g.Alert, "successFilledBg", H("palette-success-dark")), L(g.Alert, "warningFilledBg", H("palette-warning-dark")), L(g.Alert, "errorFilledColor", Ve(() => g.getContrastText(g.error.dark))), L(g.Alert, "infoFilledColor", Ve(() => g.getContrastText(g.info.dark))), L(g.Alert, "successFilledColor", Ve(() => g.getContrastText(g.success.dark))), L(g.Alert, "warningFilledColor", Ve(() => g.getContrastText(g.warning.dark))), L(g.Alert, "errorStandardBg", EA(g.error.light, 0.9)), L(g.Alert, "infoStandardBg", EA(g.info.light, 0.9)), L(g.Alert, "successStandardBg", EA(g.success.light, 0.9)), L(g.Alert, "warningStandardBg", EA(g.warning.light, 0.9)), L(g.Alert, "errorIconColor", H("palette-error-main")), L(g.Alert, "infoIconColor", H("palette-info-main")), L(g.Alert, "successIconColor", H("palette-success-main")), L(g.Alert, "warningIconColor", H("palette-warning-main")), L(g.AppBar, "defaultBg", H("palette-grey-900")), L(g.AppBar, "darkBg", H("palette-background-paper")), L(g.AppBar, "darkColor", H("palette-text-primary")), L(g.Avatar, "defaultBg", H("palette-grey-600")), L(g.Button, "inheritContainedBg", H("palette-grey-800")), L(g.Button, "inheritContainedHoverBg", H("palette-grey-700")), L(g.Chip, "defaultBorder", H("palette-grey-700")), L(g.Chip, "defaultAvatarColor", H("palette-grey-300")), L(g.Chip, "defaultIconColor", H("palette-grey-300")), L(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), L(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), L(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), L(g.LinearProgress, "primaryBg", EA(g.primary.main, 0.5)), L(g.LinearProgress, "secondaryBg", EA(g.secondary.main, 0.5)), L(g.LinearProgress, "errorBg", EA(g.error.main, 0.5)), L(g.LinearProgress, "infoBg", EA(g.info.main, 0.5)), L(g.LinearProgress, "successBg", EA(g.success.main, 0.5)), L(g.LinearProgress, "warningBg", EA(g.warning.main, 0.5)), L(g.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.13)`), L(g.Slider, "primaryTrack", EA(g.primary.main, 0.5)), L(g.Slider, "secondaryTrack", EA(g.secondary.main, 0.5)), L(g.Slider, "errorTrack", EA(g.error.main, 0.5)), L(g.Slider, "infoTrack", EA(g.info.main, 0.5)), L(g.Slider, "successTrack", EA(g.success.main, 0.5)), L(g.Slider, "warningTrack", EA(g.warning.main, 0.5));
        const K = Dn(g.background.default, 0.98);
        L(g.SnackbarContent, "bg", K), L(g.SnackbarContent, "color", Ve(() => g.getContrastText(K))), L(g.SpeedDialAction, "fabHoverBg", Dn(g.background.paper, 0.15)), L(g.StepConnector, "border", H("palette-grey-600")), L(g.StepContent, "border", H("palette-grey-600")), L(g.Switch, "defaultColor", H("palette-grey-300")), L(g.Switch, "defaultDisabledColor", H("palette-grey-600")), L(g.Switch, "primaryDisabledColor", EA(g.primary.main, 0.55)), L(g.Switch, "secondaryDisabledColor", EA(g.secondary.main, 0.55)), L(g.Switch, "errorDisabledColor", EA(g.error.main, 0.55)), L(g.Switch, "infoDisabledColor", EA(g.info.main, 0.55)), L(g.Switch, "successDisabledColor", EA(g.success.main, 0.55)), L(g.Switch, "warningDisabledColor", EA(g.warning.main, 0.55)), L(g.TableCell, "border", EA(Rn(g.divider, 1), 0.68)), L(g.Tooltip, "bg", Rn(g.grey[700], 0.92));
      }
      at(g.background, "default"), at(g.background, "paper"), at(g.common, "background"), at(g.common, "onBackground"), at(g, "divider"), Object.keys(g).forEach((K) => {
        const k = g[K];
        K !== "tonalOffset" && k && typeof k == "object" && (k.main && L(g[K], "mainChannel", $r(Wr(k.main))), k.light && L(g[K], "lightChannel", $r(Wr(k.light))), k.dark && L(g[K], "darkChannel", $r(Wr(k.dark))), k.contrastText && L(g[K], "contrastTextChannel", $r(Wr(k.contrastText))), K === "text" && (at(g[K], "primary"), at(g[K], "secondary")), K === "action" && (k.active && at(g[K], "active"), k.selected && at(g[K], "selected")));
      });
    }), v = e.reduce((x, g) => jA(x, g), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: gh(v)
    }, { vars: C, generateThemeVars: S, generateStyleSheets: I } = NB(v, U);
    return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([x, g]) => {
      v[x] = g;
    }), v.generateThemeVars = S, v.generateStyleSheets = I, v.generateSpacing = function() {
      return $u(l.spacing, Is(this));
    }, v.getColorSchemeSelector = GB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...Sn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, v.unstable_sx = function(g) {
      return Tt({
        sx: g,
        theme: this
      });
    }, v.toRuntimeSource = pd, v;
  }
  function Pl(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: _s({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  bi = function(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return xa(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = xa({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, Pl(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, Pl(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), wh({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  };
  Ns = bi();
  Gs = function() {
    const A = Ls(Ns);
    return A[qe] || A;
  };
  wd = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  rt = (A) => wd(A) && A !== "classes";
  fA = nB({
    themeId: qe,
    defaultTheme: Ns,
    rootShouldForwardProp: rt
  });
  function mh({ theme: A, ...e }) {
    const t = qe in A ? A[qe] : void 0;
    return V(cd, {
      ...e,
      themeId: t ? qe : void 0,
      theme: t || A
    });
  }
  const Mn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: Ch } = DB({
    themeId: qe,
    theme: () => bi({
      cssVariables: true
    }),
    colorSchemeStorageKey: Mn.colorSchemeStorageKey,
    modeStorageKey: Mn.modeStorageKey,
    defaultColorScheme: {
      light: Mn.defaultLightColorScheme,
      dark: Mn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: gd(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return Tt({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), vh = Ch;
  yh = function({ theme: A, ...e }) {
    const t = ee(() => {
      if (typeof A == "function") return A;
      const r = qe in A ? A[qe] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? V(mh, {
      theme: t,
      ...e
    }) : V(vh, {
      theme: A,
      ...e
    });
  };
  function md(A) {
    return V(Wu, {
      ...A,
      defaultTheme: Ns,
      themeId: qe
    });
  }
  function Qh(A) {
    return function(t) {
      return V(md, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function bh() {
    return Xu;
  }
  WA = xB;
  NA = function(A) {
    return SB(A);
  };
  function Fh(A) {
    return DA("MuiSvgIcon", A);
  }
  LA("MuiSvgIcon", [
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
  let Uh, Eh;
  Uh = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${mA(e)}`,
        `fontSize${mA(t)}`
      ]
    };
    return MA(n, Fh, r);
  };
  Eh = fA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${mA(t.color)}`],
        e[`fontSize${mA(t.fontSize)}`]
      ];
    }
  })(WA(({ theme: A }) => {
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
  Ta = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...f } = r, p = Ee(n) && n.type === "svg", B = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: p
    }, y = {};
    c || (y.viewBox = d);
    const h = Uh(B);
    return oe(Eh, {
      as: a,
      className: wA(h.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...y,
      ...f,
      ...p && n.props,
      ownerState: B,
      children: [
        p ? n.props.children : n,
        u ? V("title", {
          children: u
        }) : null
      ]
    });
  });
  Ta.muiName = "SvgIcon";
  Sh = function(A, e) {
    function t(r, n) {
      return V(Ta, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = Ta.muiName, wu(CA(t));
  };
  Ih = function(A, e) {
    if (!A) return e;
    if (typeof A == "function" || typeof e == "function") return (n) => {
      const o = typeof e == "function" ? e(n) : e, i = typeof A == "function" ? A({
        ...n,
        ...o
      }) : A, a = wA(n == null ? void 0 : n.className, o == null ? void 0 : o.className, i == null ? void 0 : i.className);
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
    const t = e, r = wA(t == null ? void 0 : t.className, A == null ? void 0 : A.className);
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
  Cd = function(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  };
  function La(A, e) {
    return La = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, La(A, e);
  }
  vd = function(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, La(A, e);
  };
  const _l = {
    disabled: false
  }, So = E.createContext(null);
  let Xr, Pt, _t, Br, ka;
  xh = function(e) {
    return e.scrollTop;
  };
  Xr = "unmounted";
  Pt = "exited";
  _t = "entering";
  Br = "entered";
  ka = "exiting";
  nt = (function(A) {
    vd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = Pt, o.appearStatus = _t) : s = Br : r.unmountOnExit || r.mountOnEnter ? s = Xr : s = Pt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Xr ? {
        status: Pt
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== _t && i !== Br && (o = _t) : (i === _t || i === Br) && (o = ka);
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
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === _t) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : kn.findDOMNode(this);
          i && xh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === Pt && this.setState({
        status: Xr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        kn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || _l.disabled) {
        this.safeSetState({
          status: Br
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: _t
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: Br
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : kn.findDOMNode(this);
      if (!o || _l.disabled) {
        this.safeSetState({
          status: Pt
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: ka
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: Pt
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : kn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Xr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = Cd(o, [
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
      return E.createElement(So.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : E.cloneElement(E.Children.only(i), a));
    }, e;
  })(E.Component);
  nt.contextType = So;
  nt.propTypes = {};
  function ar() {
  }
  nt.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: ar,
    onEntering: ar,
    onEntered: ar,
    onExit: ar,
    onExiting: ar,
    onExited: ar
  };
  nt.UNMOUNTED = Xr;
  nt.EXITED = Pt;
  nt.ENTERING = _t;
  nt.ENTERED = Br;
  nt.EXITING = ka;
  function Hh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Vs(A, e) {
    var t = function(o) {
      return e && Ee(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && qt.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function Th(A, e) {
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
  function Xt(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function Lh(A, e) {
    return Vs(A.children, function(t) {
      return Ke(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Xt(t, "appear", A),
        enter: Xt(t, "enter", A),
        exit: Xt(t, "exit", A)
      });
    });
  }
  function kh(A, e, t) {
    var r = Vs(A.children), n = Th(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (Ee(i)) {
        var a = o in e, s = o in r, l = e[o], c = Ee(l) && !l.props.in;
        s && (!a || c) ? n[o] = Ke(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Xt(i, "exit", A),
          enter: Xt(i, "enter", A)
        }) : !s && a && !c ? n[o] = Ke(i, {
          in: false
        }) : s && a && Ee(l) && (n[o] = Ke(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: Xt(i, "exit", A),
          enter: Xt(i, "enter", A)
        }));
      }
    }), n;
  }
  let Oh, Kh;
  Oh = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  };
  Kh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  };
  $s = (function(A) {
    vd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(Hh(o));
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
        children: s ? Lh(n, a) : kh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Vs(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = Fo({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = Cd(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = Oh(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? E.createElement(So.Provider, {
        value: s
      }, l) : E.createElement(So.Provider, {
        value: s
      }, E.createElement(o, a, l));
    }, e;
  })(E.Component);
  $s.propTypes = {};
  $s.defaultProps = Kh;
  const yd = (A) => A.scrollTop;
  Io = function(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  };
  function Rh(A) {
    return DA("MuiPaper", A);
  }
  LA("MuiPaper", [
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
  let Dh, Mh;
  Dh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return MA(o, Rh, n);
  };
  Mh = fA("div", {
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
  })(WA(({ theme: A }) => ({
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
  Ph = CA(function(e, t) {
    var _a2;
    const r = NA({
      props: e,
      name: "MuiPaper"
    }), n = Gs(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = Dh(u);
    return V(Mh, {
      as: i,
      ownerState: u,
      className: wA(d.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${Bn("#fff", Ha(a))}, ${Bn("#fff", Ha(a))})`
          }
        },
        ...c.style
      }
    });
  });
  he = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: u = {
      [A]: void 0
    }, ...d } = o, f = c[A] || r, p = id(u[A], n), { props: { component: B, ...y }, internalRef: h } = od({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: p
    }), b = be(h, p == null ? void 0 : p.ref, e.ref), m = A === "root" ? B || l : B, v = rd(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...y,
      ...m && !a && {
        as: m
      },
      ...m && a && {
        component: m
      },
      ref: b
    }, n);
    return [
      f,
      v
    ];
  };
  class xo {
    static create() {
      return new xo();
    }
    static use() {
      const e = Ad(xo.create).current, [t, r] = BA(false);
      return e.shouldMount = t, e.setShouldMount = r, lA(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = Nh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function _h() {
    return xo.use();
  }
  function Nh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function Gh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = BA(false), d = wA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = wA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), lA(() => {
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
    ]), V("span", {
      className: d,
      style: f,
      children: V("span", {
        className: p
      })
    });
  }
  const He = LA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), Oa = 550, Vh = 80, $h = Fn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Wh = Fn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Xh = Fn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Jh = fA("span", {
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
  }), Yh = fA(Gh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${He.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${$h};
    animation-duration: ${Oa}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${He.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
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
    animation-name: ${Wh};
    animation-duration: ${Oa}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${He.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, zh = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = BA([]), c = oA(0), u = oA(null);
    lA(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = oA(false), f = ed(), p = oA(null), B = oA(null), y = RA((v) => {
      const { pulsate: U, rippleX: C, rippleY: S, rippleSize: I, cb: x } = v;
      l((g) => [
        ...g,
        V(Yh, {
          classes: {
            ripple: wA(o.ripple, He.ripple),
            rippleVisible: wA(o.rippleVisible, He.rippleVisible),
            ripplePulsate: wA(o.ripplePulsate, He.ripplePulsate),
            child: wA(o.child, He.child),
            childLeaving: wA(o.childLeaving, He.childLeaving),
            childPulsate: wA(o.childPulsate, He.childPulsate)
          },
          timeout: Oa,
          pulsate: U,
          rippleX: C,
          rippleY: S,
          rippleSize: I
        }, c.current)
      ]), c.current += 1, u.current = x;
    }, [
      o
    ]), h = RA((v = {}, U = {}, C = () => {
    }) => {
      const { pulsate: S = false, center: I = n || U.pulsate, fakeElement: x = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (d.current = true);
      const g = x ? null : B.current, H = g ? g.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let K, k, N;
      if (I || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) K = Math.round(H.width / 2), k = Math.round(H.height / 2);
      else {
        const { clientX: O, clientY: R } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        K = Math.round(O - H.left), k = Math.round(R - H.top);
      }
      if (I) N = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3), N % 2 === 0 && (N += 1);
      else {
        const O = Math.max(Math.abs((g ? g.clientWidth : 0) - K), K) * 2 + 2, R = Math.max(Math.abs((g ? g.clientHeight : 0) - k), k) * 2 + 2;
        N = Math.sqrt(O ** 2 + R ** 2);
      }
      (v == null ? void 0 : v.touches) ? p.current === null && (p.current = () => {
        y({
          pulsate: S,
          rippleX: K,
          rippleY: k,
          rippleSize: N,
          cb: C
        });
      }, f.start(Vh, () => {
        p.current && (p.current(), p.current = null);
      })) : y({
        pulsate: S,
        rippleX: K,
        rippleY: k,
        rippleSize: N,
        cb: C
      });
    }, [
      n,
      y,
      f
    ]), b = RA(() => {
      h({}, {
        pulsate: true
      });
    }, [
      h
    ]), m = RA((v, U) => {
      if (f.clear(), (v == null ? void 0 : v.type) === "touchend" && p.current) {
        p.current(), p.current = null, f.start(0, () => {
          m(v, U);
        });
        return;
      }
      p.current = null, l((C) => C.length > 0 ? C.slice(1) : C), u.current = U;
    }, [
      f
    ]);
    return vn(t, () => ({
      pulsate: b,
      start: h,
      stop: m
    }), [
      b,
      h,
      m
    ]), V(Jh, {
      className: wA(He.root, o.root, i),
      ref: B,
      ...a,
      children: V($s, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function jh(A) {
    return DA("MuiButtonBase", A);
  }
  let Zh, qh, A0;
  Zh = LA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  qh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = MA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, jh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  A0 = fA("button", {
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
    [`&.${Zh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  e0 = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: f, LinkComponent: p = "a", onBlur: B, onClick: y, onContextMenu: h, onDragLeave: b, onFocus: m, onFocusVisible: v, onKeyDown: U, onKeyUp: C, onMouseDown: S, onMouseLeave: I, onMouseUp: x, onTouchEnd: g, onTouchMove: H, onTouchStart: K, tabIndex: k = 0, TouchRippleProps: N, touchRippleRef: O, type: R, ...W } = r, rA = oA(null), D = _h(), X = be(D.ref, O), [q, tA] = BA(false);
    l && q && tA(false), vn(n, () => ({
      focusVisible: () => {
        tA(true), rA.current.focus();
      }
    }), []);
    const T = D.shouldMount && !c && !l;
    lA(() => {
      q && d && !c && D.pulsate();
    }, [
      c,
      d,
      q,
      D
    ]);
    const G = st(D, "start", S, u), _ = st(D, "stop", h, u), Y = st(D, "stop", b, u), dA = st(D, "stop", x, u), iA = st(D, "stop", (Z) => {
      q && Z.preventDefault(), I && I(Z);
    }, u), AA = st(D, "start", K, u), J = st(D, "stop", g, u), nA = st(D, "stop", H, u), aA = st(D, "stop", (Z) => {
      Sl(Z.target) || tA(false), B && B(Z);
    }, false), w = Yt((Z) => {
      rA.current || (rA.current = Z.currentTarget), Sl(Z.target) && (tA(true), v && v(Z)), m && m(Z);
    }), F = () => {
      const Z = rA.current;
      return s && s !== "button" && !(Z.tagName === "A" && Z.href);
    }, Q = Yt((Z) => {
      d && !Z.repeat && q && Z.key === " " && D.stop(Z, () => {
        D.start(Z);
      }), Z.target === Z.currentTarget && F() && Z.key === " " && Z.preventDefault(), U && U(Z), Z.target === Z.currentTarget && F() && Z.key === "Enter" && !l && (Z.preventDefault(), y && y(Z));
    }), M = Yt((Z) => {
      d && Z.key === " " && q && !Z.defaultPrevented && D.stop(Z, () => {
        D.pulsate(Z);
      }), C && C(Z), y && Z.target === Z.currentTarget && F() && Z.key === " " && !Z.defaultPrevented && y(Z);
    });
    let $ = s;
    $ === "button" && (W.href || W.to) && ($ = p);
    const P = {};
    $ === "button" ? (P.type = R === void 0 ? "button" : R, P.disabled = l) : (!W.href && !W.to && (P.role = "button"), l && (P["aria-disabled"] = l));
    const sA = be(t, rA), cA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: k,
      focusVisible: q
    }, gA = qh(cA);
    return oe(A0, {
      as: $,
      className: wA(gA.root, a),
      ownerState: cA,
      onBlur: aA,
      onClick: y,
      onContextMenu: _,
      onFocus: w,
      onKeyDown: Q,
      onKeyUp: M,
      onMouseDown: G,
      onMouseLeave: iA,
      onMouseUp: dA,
      onDragLeave: Y,
      onTouchEnd: J,
      onTouchMove: nA,
      onTouchStart: AA,
      ref: sA,
      tabIndex: l ? -1 : k,
      type: R,
      ...P,
      ...W,
      children: [
        i,
        T ? V(zh, {
          ref: X,
          center: o,
          ...N
        }) : null
      ]
    });
  });
  function st(A, e, t, r = false) {
    return Yt((n) => (t && t(n), r || A[e](n), true));
  }
  function t0(A) {
    return typeof A.main == "string";
  }
  function r0(A, e = []) {
    if (!t0(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  kt = function(A = []) {
    return ([, e]) => e && r0(e, A);
  };
  function n0(A) {
    return DA("MuiCircularProgress", A);
  }
  LA("MuiCircularProgress", [
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
  let Ct, Ka, Ra, o0, i0, a0, s0, l0, c0;
  Ct = 44;
  Ka = Fn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  Ra = Fn`
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
  o0 = typeof Ka != "string" ? bs`
        animation: ${Ka} 1.4s linear infinite;
      ` : null;
  i0 = typeof Ra != "string" ? bs`
        animation: ${Ra} 1.4s ease-in-out infinite;
      ` : null;
  a0 = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${mA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${mA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return MA(o, n0, e);
  };
  s0 = fA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${mA(t.color)}`]
      ];
    }
  })(WA(({ theme: A }) => ({
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
        style: o0 || {
          animation: `${Ka} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  l0 = fA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  c0 = fA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${mA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(WA(({ theme: A }) => ({
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
        style: i0 || {
          animation: `${Ra} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  u0 = CA(function(e, t) {
    const r = NA({
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
    }, p = a0(f), B = {}, y = {}, h = {};
    if (u === "determinate") {
      const b = 2 * Math.PI * ((Ct - l) / 2);
      B.strokeDasharray = b.toFixed(3), h["aria-valuenow"] = Math.round(c), B.strokeDashoffset = `${((100 - c) / 100 * b).toFixed(3)}px`, y.transform = "rotate(-90deg)";
    }
    return V(s0, {
      className: wA(p.root, n),
      style: {
        width: a,
        height: a,
        ...y,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...h,
      ...d,
      children: V(l0, {
        className: p.svg,
        ownerState: f,
        viewBox: `${Ct / 2} ${Ct / 2} ${Ct} ${Ct}`,
        children: V(c0, {
          className: p.circle,
          style: B,
          ownerState: f,
          cx: Ct,
          cy: Ct,
          r: (Ct - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function d0(A) {
    return DA("MuiIconButton", A);
  }
  let Nl, f0, g0, p0;
  Nl = LA("MuiIconButton", [
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
  f0 = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${mA(r)}`,
        n && `edge${mA(n)}`,
        `size${mA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return MA(a, d0, e);
  };
  g0 = fA(e0, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${mA(t.color)}`],
        t.edge && e[`edge${mA(t.edge)}`],
        e[`size${mA(t.size)}`]
      ];
    }
  })(WA(({ theme: A }) => ({
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : Bn(A.palette.action.active, A.palette.action.hoverOpacity),
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
  })), WA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : Bn((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${Nl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${Nl.loading}`]: {
      color: "transparent"
    }
  })));
  p0 = fA("span", {
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
  m1 = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: f, ...p } = r, B = Qi(u), y = f ?? V(u0, {
      "aria-labelledby": B,
      color: "inherit",
      size: 16
    }), h = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: y,
      size: c
    }, b = f0(h);
    return oe(g0, {
      id: d ? B : u,
      className: wA(b.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...p,
      ownerState: h,
      children: [
        typeof d == "boolean" && V("span", {
          className: b.loadingWrapper,
          style: {
            display: "contents"
          },
          children: V(p0, {
            className: b.loadingIndicator,
            ownerState: h,
            children: d && y
          })
        }),
        o
      ]
    });
  });
  function B0(A) {
    return DA("MuiTypography", A);
  }
  let h0, w0, m0, C0, Gl;
  C1 = LA("MuiTypography", [
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
  h0 = {
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
  w0 = bh();
  m0 = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${mA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return MA(a, B0, i);
  };
  C0 = fA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${mA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(WA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${mA(e)}`
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
  Gl = {
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
  v1 = CA(function(e, t) {
    const { color: r, ...n } = NA({
      props: e,
      name: "MuiTypography"
    }), o = !h0[r], i = w0({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: f = "body1", variantMapping: p = Gl, ...B } = i, y = {
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
    }, h = l || (d ? "p" : p[f] || Gl[f]) || "span", b = m0(y);
    return V(C0, {
      as: h,
      ref: t,
      className: wA(b.root, s),
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
  function v0(A) {
    return typeof A == "function" ? A() : A;
  }
  y0 = CA(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = BA(null), s = be(Ee(r) ? In(r) : null, t);
    return pt(() => {
      o || a(v0(n) || document.body);
    }, [
      n,
      o
    ]), pt(() => {
      if (i && !o) return Ql(t, i), () => {
        Ql(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o ? Ee(r) ? Ke(r, {
      ref: s
    }) : r : i && mu(r, i);
  });
  function Pn(A) {
    return parseInt(A, 10) || 0;
  }
  const Q0 = {
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
  function b0(A) {
    for (const e in A) return false;
    return true;
  }
  function Vl(A) {
    return b0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const F0 = CA(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = oA(a != null), c = oA(null), u = be(t, c), d = oA(null), f = oA(null), p = RA(() => {
      const m = c.current, v = f.current;
      if (!m || !v) return;
      const C = Bt(m).getComputedStyle(m);
      if (C.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = C.width, v.value = m.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const S = C.boxSizing, I = Pn(C.paddingBottom) + Pn(C.paddingTop), x = Pn(C.borderBottomWidth) + Pn(C.borderTopWidth), g = v.scrollHeight;
      v.value = "x";
      const H = v.scrollHeight;
      let K = g;
      o && (K = Math.max(Number(o) * H, K)), n && (K = Math.min(Number(n) * H, K)), K = Math.max(K, H);
      const k = K + (S === "border-box" ? I + x : 0), N = Math.abs(K - g) <= 1;
      return {
        outerHeightStyle: k,
        overflowing: N
      };
    }, [
      n,
      o,
      e.placeholder
    ]), B = Yt(() => {
      const m = c.current, v = p();
      if (!m || !v || Vl(v)) return false;
      const U = v.outerHeightStyle;
      return d.current != null && d.current !== U;
    }), y = RA(() => {
      const m = c.current, v = p();
      if (!m || !v || Vl(v)) return;
      const U = v.outerHeightStyle;
      d.current !== U && (d.current = U, m.style.height = `${U}px`), m.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      p
    ]), h = oA(-1);
    return pt(() => {
      const m = qu(y), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = Bt(v);
      U.addEventListener("resize", m);
      let C;
      return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
        B() && (C.unobserve(v), cancelAnimationFrame(h.current), y(), h.current = requestAnimationFrame(() => {
          C.observe(v);
        }));
      }), C.observe(v)), () => {
        m.clear(), cancelAnimationFrame(h.current), U.removeEventListener("resize", m), C && C.disconnect();
      };
    }, [
      p,
      y,
      B
    ]), pt(() => {
      y();
    }), oe(tt, {
      children: [
        V("textarea", {
          value: a,
          onChange: (m) => {
            l || y(), r && r(m);
          },
          ref: u,
          rows: o,
          style: i,
          ...s
        }),
        V("textarea", {
          "aria-hidden": true,
          className: e.className,
          readOnly: true,
          ref: f,
          tabIndex: -1,
          style: {
            ...Q0.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  Da = function(A) {
    return typeof A == "string";
  };
  Hr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  Ws = et(void 0);
  Tr = function() {
    return De(Ws);
  };
  function $l(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function Ho(A, e = false) {
    return A && ($l(A.value) && A.value !== "" || e && $l(A.defaultValue) && A.defaultValue !== "");
  }
  function U0(A) {
    return A.startAdornment;
  }
  function E0(A) {
    return DA("MuiInputBase", A);
  }
  Ur = LA("MuiInputBase", [
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
  var Wl;
  let Fi, Ui, S0, Ei, Si, Xl;
  Fi = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.root,
      t.formControl && e.formControl,
      t.startAdornment && e.adornedStart,
      t.endAdornment && e.adornedEnd,
      t.error && e.error,
      t.size === "small" && e.sizeSmall,
      t.multiline && e.multiline,
      t.color && e[`color${mA(t.color)}`],
      t.fullWidth && e.fullWidth,
      t.hiddenLabel && e.hiddenLabel
    ];
  };
  Ui = (A, e) => {
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
  };
  S0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: f, type: p } = A, B = {
      root: [
        "root",
        `color${mA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        d && d !== "medium" && `size${mA(d)}`,
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
    return MA(B, E0, e);
  };
  Ei = fA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: Fi
  })(WA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${Ur.disabled}`]: {
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
  })));
  Si = fA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Ui
  })(WA(({ theme: A }) => {
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
      [`label[data-shrink=false] + .${Ur.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${Ur.disabled}`]: {
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
  }));
  Xl = Qh({
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
  Xs = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: f, endAdornment: p, error: B, fullWidth: y = false, id: h, inputComponent: b = "input", inputProps: m = {}, inputRef: v, margin: U, maxRows: C, minRows: S, multiline: I = false, name: x, onBlur: g, onChange: H, onClick: K, onFocus: k, onKeyDown: N, onKeyUp: O, placeholder: R, readOnly: W, renderSuffix: rA, rows: D, size: X, slotProps: q = {}, slots: tA = {}, startAdornment: T, type: G = "text", value: _, ...Y } = r, dA = m.value != null ? m.value : _, { current: iA } = oA(dA != null), AA = oA(), J = RA((kA) => {
    }, []), nA = be(AA, v, m.ref, J), [aA, w] = BA(false), F = Tr(), Q = Hr({
      props: r,
      muiFormControl: F,
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
    Q.focused = F ? F.focused : aA, lA(() => {
      !F && d && aA && (w(false), g && g());
    }, [
      F,
      d,
      aA,
      g
    ]);
    const M = F && F.onFilled, $ = F && F.onEmpty, P = RA((kA) => {
      Ho(kA) ? M && M() : $ && $();
    }, [
      M,
      $
    ]);
    pt(() => {
      iA && P({
        value: dA
      });
    }, [
      dA,
      P,
      iA
    ]);
    const sA = (kA) => {
      k && k(kA), m.onFocus && m.onFocus(kA), F && F.onFocus ? F.onFocus(kA) : w(true);
    }, cA = (kA) => {
      g && g(kA), m.onBlur && m.onBlur(kA), F && F.onBlur ? F.onBlur(kA) : w(false);
    }, gA = (kA, ...Ar) => {
      if (!iA) {
        const kr = kA.target || AA.current;
        if (kr == null) throw new Error(ft(1));
        P({
          value: kr.value
        });
      }
      m.onChange && m.onChange(kA, ...Ar), H && H(kA, ...Ar);
    };
    lA(() => {
      P(AA.current);
    }, []);
    const Z = (kA) => {
      AA.current && kA.currentTarget === kA.target && AA.current.focus(), K && K(kA);
    };
    let ae = b, pA = m;
    I && ae === "input" && (D ? pA = {
      type: void 0,
      minRows: D,
      maxRows: D,
      ...pA
    } : pA = {
      type: void 0,
      maxRows: C,
      minRows: S,
      ...pA
    }, ae = F0);
    const GA = (kA) => {
      P(kA.animationName === "mui-auto-fill-cancel" ? AA.current : {
        value: "x"
      });
    };
    lA(() => {
      F && F.setAdornedStart(!!T);
    }, [
      F,
      T
    ]);
    const ZA = {
      ...r,
      color: Q.color || "primary",
      disabled: Q.disabled,
      endAdornment: p,
      error: Q.error,
      focused: Q.focused,
      formControl: F,
      fullWidth: y,
      hiddenLabel: Q.hiddenLabel,
      multiline: I,
      size: Q.size,
      startAdornment: T,
      type: G
    }, fe = S0(ZA), te = tA.root || l.Root || Ei, mt = q.root || c.root || {}, Kt = tA.input || l.Input || Si;
    return pA = {
      ...pA,
      ...q.input ?? c.input
    }, oe(tt, {
      children: [
        !f && typeof Xl == "function" && (Wl || (Wl = V(Xl, {}))),
        oe(te, {
          ...mt,
          ref: t,
          onClick: Z,
          ...Y,
          ...!Da(te) && {
            ownerState: {
              ...ZA,
              ...mt.ownerState
            }
          },
          className: wA(fe.root, mt.className, a, W && "MuiInputBase-readOnly"),
          children: [
            T,
            V(Ws.Provider, {
              value: null,
              children: V(Kt, {
                "aria-invalid": Q.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                disabled: Q.disabled,
                id: h,
                onAnimationStart: GA,
                name: x,
                placeholder: R,
                readOnly: W,
                required: Q.required,
                rows: D,
                value: dA,
                onKeyDown: N,
                onKeyUp: O,
                type: G,
                ...pA,
                ...!Da(Kt) && {
                  as: ae,
                  ownerState: {
                    ...ZA,
                    ...pA.ownerState
                  }
                },
                ref: nA,
                className: wA(fe.input, pA.className, W && "MuiInputBase-readOnly"),
                onBlur: cA,
                onChange: gA,
                onFocus: sA
              })
            }),
            p,
            rA ? rA({
              ...Q,
              startAdornment: T
            }) : null
          ]
        })
      ]
    });
  });
  function I0(A) {
    return DA("MuiInput", A);
  }
  Rr = {
    ...Ur,
    ...LA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function x0(A) {
    return DA("MuiOutlinedInput", A);
  }
  $e = {
    ...Ur,
    ...LA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function H0(A) {
    return DA("MuiFilledInput", A);
  }
  let L0;
  Rt = {
    ...Ur,
    ...LA("MuiFilledInput", [
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
  T0 = Sh(V("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  L0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  k0 = CA(function(e, t) {
    const r = Gs(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: f, onExited: p, onExiting: B, style: y, timeout: h = n, TransitionComponent: b = nt, ...m } = e, v = oA(null), U = be(v, In(a), t), C = (N) => (O) => {
      if (N) {
        const R = v.current;
        O === void 0 ? N(R) : N(R, O);
      }
    }, S = C(d), I = C((N, O) => {
      yd(N);
      const R = Io({
        style: y,
        timeout: h,
        easing: s
      }, {
        mode: "enter"
      });
      N.style.webkitTransition = r.transitions.create("opacity", R), N.style.transition = r.transitions.create("opacity", R), c && c(N, O);
    }), x = C(u), g = C(B), H = C((N) => {
      const O = Io({
        style: y,
        timeout: h,
        easing: s
      }, {
        mode: "exit"
      });
      N.style.webkitTransition = r.transitions.create("opacity", O), N.style.transition = r.transitions.create("opacity", O), f && f(N);
    }), K = C(p);
    return V(b, {
      appear: i,
      in: l,
      nodeRef: v,
      onEnter: I,
      onEntered: x,
      onEntering: S,
      onExit: H,
      onExited: K,
      onExiting: g,
      addEndListener: (N) => {
        o && o(v.current, N);
      },
      timeout: h,
      ...m,
      children: (N, { ownerState: O, ...R }) => Ke(a, {
        style: {
          opacity: 0,
          visibility: N === "exited" && !l ? "hidden" : void 0,
          ...L0[N],
          ...y,
          ...a.props.style
        },
        ref: U,
        ...R
      })
    });
  });
  function O0(A) {
    return DA("MuiBackdrop", A);
  }
  LA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let K0, R0, M0, P0;
  K0 = (A) => {
    const { classes: e, invisible: t } = A;
    return MA({
      root: [
        "root",
        t && "invisible"
      ]
    }, O0, e);
  };
  R0 = fA("div", {
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
  D0 = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: f, transitionDuration: p, ...B } = r, y = {
      ...r,
      component: i,
      invisible: a
    }, h = K0(y), b = {
      transition: f,
      root: l.Root,
      ...d
    }, m = {
      ...c,
      ...u
    }, v = {
      slots: b,
      slotProps: m
    }, [U, C] = he("root", {
      elementType: R0,
      externalForwardedProps: v,
      className: wA(h.root, o),
      ownerState: y
    }), [S, I] = he("transition", {
      elementType: k0,
      externalForwardedProps: v,
      ownerState: y
    });
    return V(S, {
      in: s,
      timeout: p,
      ...B,
      ...I,
      children: V(U, {
        "aria-hidden": true,
        ...C,
        classes: h,
        ref: t,
        children: n
      })
    });
  });
  M0 = LA("MuiBox", [
    "root"
  ]);
  P0 = bi();
  Jl = qp({
    themeId: qe,
    defaultTheme: P0,
    defaultClassName: M0.root,
    generateClassName: Ju.generate
  });
  function _0(A) {
    const e = Ne(A);
    return e.body === A ? Bt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function rn(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Yl(A) {
    return parseInt(Bt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function N0(A) {
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
  function zl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !N0(i);
      a && s && rn(i, n);
    });
  }
  function Ji(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function G0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (_0(r)) {
        const i = td(Bt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Yl(r) + i}px`;
        const a = Ne(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Yl(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Ne(r).body;
      else {
        const i = r.parentElement, a = Bt(r);
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
  function V0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class $0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && rn(e.modalRef, false);
      const n = V0(t);
      zl(t, e.mount, e.modalRef, n, true);
      const o = Ji(this.containers, (i) => i.container === t);
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
      const r = Ji(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = G0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Ji(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && rn(e.modalRef, t), zl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && rn(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const W0 = [
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
  function X0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function J0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function Y0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || J0(A));
  }
  function z0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(W0)).forEach((r, n) => {
      const o = X0(r);
      o === -1 || !Y0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function j0() {
    return true;
  }
  Z0 = function(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = z0, isEnabled: i = j0, open: a } = A, s = oA(false), l = oA(null), c = oA(null), u = oA(null), d = oA(null), f = oA(false), p = oA(null), B = be(In(e), p), y = oA(null);
    lA(() => {
      !a || !p.current || (f.current = !t);
    }, [
      t,
      a
    ]), lA(() => {
      if (!a || !p.current) return;
      const m = Ne(p.current);
      return p.current.contains(m.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), f.current && p.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), lA(() => {
      if (!a || !p.current) return;
      const m = Ne(p.current), v = (S) => {
        y.current = S, !(r || !i() || S.key !== "Tab") && m.activeElement === p.current && S.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const S = p.current;
        if (S === null) return;
        if (!m.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (S.contains(m.activeElement) || r && m.activeElement !== l.current && m.activeElement !== c.current) return;
        if (m.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!f.current) return;
        let I = [];
        if ((m.activeElement === l.current || m.activeElement === c.current) && (I = o(p.current)), I.length > 0) {
          const x = !!(((_a2 = y.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = y.current) == null ? void 0 : _b2.key) === "Tab"), g = I[0], H = I[I.length - 1];
          typeof g != "string" && typeof H != "string" && (x ? H.focus() : g.focus());
        } else S.focus();
      };
      m.addEventListener("focusin", U), m.addEventListener("keydown", v, true);
      const C = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(C), m.removeEventListener("focusin", U), m.removeEventListener("keydown", v, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const h = (m) => {
      u.current === null && (u.current = m.relatedTarget), f.current = true, d.current = m.target;
      const v = e.props.onFocus;
      v && v(m);
    }, b = (m) => {
      u.current === null && (u.current = m.relatedTarget), f.current = true;
    };
    return oe(tt, {
      children: [
        V("div", {
          tabIndex: a ? 0 : -1,
          onFocus: b,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        Ke(e, {
          ref: B,
          onFocus: h
        }),
        V("div", {
          tabIndex: a ? 0 : -1,
          onFocus: b,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  };
  function q0(A) {
    return typeof A == "function" ? A() : A;
  }
  function Aw(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const jl = () => {
  }, _n = new $0();
  function ew(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = oA({}), d = oA(null), f = oA(null), p = be(f, c), [B, y] = BA(!l), h = Aw(a);
    let b = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (b = false);
    const m = () => Ne(d.current), v = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), U = () => {
      _n.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, C = Yt(() => {
      const O = q0(e) || m().body;
      _n.add(v(), O), f.current && U();
    }), S = () => _n.isTopModal(v()), I = Yt((O) => {
      d.current = O, O && (l && S() ? U() : f.current && rn(f.current, b));
    }), x = RA(() => {
      _n.remove(v(), b);
    }, [
      b
    ]);
    lA(() => () => {
      x();
    }, [
      x
    ]), lA(() => {
      l ? C() : (!h || !n) && x();
    }, [
      l,
      x,
      h,
      n,
      C
    ]);
    const g = (O) => (R) => {
      var _a2;
      (_a2 = O.onKeyDown) == null ? void 0 : _a2.call(O, R), !(R.key !== "Escape" || R.which === 229 || !S()) && (t || (R.stopPropagation(), s && s(R, "escapeKeyDown")));
    }, H = (O) => (R) => {
      var _a2;
      (_a2 = O.onClick) == null ? void 0 : _a2.call(O, R), R.target === R.currentTarget && s && s(R, "backdropClick");
    };
    return {
      getRootProps: (O = {}) => {
        const R = nd(A);
        delete R.onTransitionEnter, delete R.onTransitionExited;
        const W = {
          ...R,
          ...O
        };
        return {
          role: "presentation",
          ...W,
          onKeyDown: g(W),
          ref: p
        };
      },
      getBackdropProps: (O = {}) => {
        const R = O;
        return {
          "aria-hidden": true,
          ...R,
          onClick: H(R),
          open: l
        };
      },
      getTransitionProps: () => {
        const O = () => {
          y(false), o && o();
        }, R = () => {
          y(true), i && i(), n && x();
        };
        return {
          onEnter: yl(O, (a == null ? void 0 : a.props.onEnter) ?? jl),
          onExited: yl(R, (a == null ? void 0 : a.props.onExited) ?? jl)
        };
      },
      rootRef: p,
      portalRef: I,
      isTopModal: S,
      exited: B,
      hasTransition: h
    };
  }
  function tw(A) {
    return DA("MuiModal", A);
  }
  LA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let rw, nw, ow;
  rw = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return MA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, tw, r);
  };
  nw = fA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(WA(({ theme: A }) => ({
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
  ow = fA(D0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  iw = CA(function(e, t) {
    const r = NA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = ow, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: f = {}, disableAutoFocus: p = false, disableEnforceFocus: B = false, disableEscapeKeyDown: y = false, disablePortal: h = false, disableRestoreFocus: b = false, disableScrollLock: m = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: C, onClose: S, onTransitionEnter: I, onTransitionExited: x, open: g, slotProps: H = {}, slots: K = {}, theme: k, ...N } = r, O = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: B,
      disableEscapeKeyDown: y,
      disablePortal: h,
      disableRestoreFocus: b,
      disableScrollLock: m,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: R, getBackdropProps: W, getTransitionProps: rA, portalRef: D, isTopModal: X, exited: q, hasTransition: tA } = ew({
      ...O,
      rootRef: t
    }), T = {
      ...O,
      exited: q
    }, G = rw(T), _ = {};
    if (l.props.tabIndex === void 0 && (_.tabIndex = "-1"), tA) {
      const { onEnter: nA, onExited: aA } = rA();
      _.onEnter = nA, _.onExited = aA;
    }
    const Y = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...K
      },
      slotProps: {
        ...f,
        ...H
      }
    }, [dA, iA] = he("root", {
      ref: t,
      elementType: nw,
      externalForwardedProps: {
        ...Y,
        ...N,
        component: u
      },
      getSlotProps: R,
      ownerState: T,
      className: wA(a, G == null ? void 0 : G.root, !T.open && T.exited && (G == null ? void 0 : G.hidden))
    }), [AA, J] = he("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (nA) => W({
        ...nA,
        onClick: (aA) => {
          C && C(aA), (nA == null ? void 0 : nA.onClick) && nA.onClick(aA);
        }
      }),
      className: wA(o == null ? void 0 : o.className, G == null ? void 0 : G.backdrop),
      ownerState: T
    });
    return !U && !g && (!tA || q) ? null : V(y0, {
      ref: D,
      container: c,
      disablePortal: h,
      children: oe(dA, {
        ...iA,
        children: [
          !v && n ? V(AA, {
            ...J
          }) : null,
          V(Z0, {
            disableEnforceFocus: B,
            disableAutoFocus: p,
            disableRestoreFocus: b,
            isEnabled: X,
            open: g,
            children: Ke(l, _)
          })
        ]
      })
    });
  });
  y1 = function(A) {
    return DA("MuiDivider", A);
  };
  let aw, sw, lw, Js;
  Q1 = LA("MuiDivider", [
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
  aw = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, s = {
      root: [
        "root",
        !t && "underline",
        r && "adornedStart",
        n && "adornedEnd",
        o === "small" && `size${mA(o)}`,
        i && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, l = MA(s, H0, e);
    return {
      ...e,
      ...l
    };
  };
  sw = fA(Ei, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...Fi(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(WA(({ theme: A }) => {
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
      [`&.${Rt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${Rt.disabled}`]: {
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
            [`&.${Rt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Rt.error}`]: {
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
            [`&:hover:not(.${Rt.disabled}, .${Rt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${Rt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(kt()).map(([i]) => {
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
  }));
  lw = fA(Si, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Ui
  })(WA(({ theme: A }) => ({
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
  })));
  Js = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: f = "text", ...p } = r, B = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, y = aw(r), h = {
      root: {
        ownerState: B
      },
      input: {
        ownerState: B
      }
    }, b = u ?? i ? jA(h, u ?? i) : h, m = d.root ?? o.Root ?? sw, v = d.input ?? o.Input ?? lw;
    return V(Xs, {
      slots: {
        root: m,
        input: v
      },
      slotProps: b,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: f,
      ...p,
      classes: y
    });
  });
  Js.muiName = "Input";
  function cw(A) {
    return DA("MuiFormControl", A);
  }
  LA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  let uw, dw;
  uw = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${mA(t)}`,
        r && "fullWidth"
      ]
    };
    return MA(n, cw, e);
  };
  dw = fA("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`margin${mA(t.margin)}`],
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
  });
  fw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: f = "none", required: p = false, size: B = "medium", variant: y = "outlined", ...h } = r, b = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: u,
      hiddenLabel: d,
      margin: f,
      required: p,
      size: B,
      variant: y
    }, m = uw(b), [v, U] = BA(() => {
      let O = false;
      return n && qt.forEach(n, (R) => {
        if (!Vi(R, [
          "Input",
          "Select"
        ])) return;
        const W = Vi(R, [
          "Select"
        ]) ? R.props.input : R;
        W && U0(W.props) && (O = true);
      }), O;
    }), [C, S] = BA(() => {
      let O = false;
      return n && qt.forEach(n, (R) => {
        Vi(R, [
          "Input",
          "Select"
        ]) && (Ho(R.props, true) || Ho(R.props.inputProps, true)) && (O = true);
      }), O;
    }), [I, x] = BA(false);
    s && I && x(false);
    const g = c !== void 0 && !s ? c : I;
    let H;
    oA(false);
    const K = RA(() => {
      S(true);
    }, []), k = RA(() => {
      S(false);
    }, []), N = ee(() => ({
      adornedStart: v,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: C,
      focused: g,
      fullWidth: u,
      hiddenLabel: d,
      size: B,
      onBlur: () => {
        x(false);
      },
      onFocus: () => {
        x(true);
      },
      onEmpty: k,
      onFilled: K,
      registerEffect: H,
      required: p,
      variant: y
    }), [
      v,
      i,
      s,
      l,
      C,
      g,
      u,
      d,
      H,
      k,
      K,
      p,
      B,
      y
    ]);
    return V(Ws.Provider, {
      value: N,
      children: V(dw, {
        as: a,
        ownerState: b,
        className: wA(m.root, o),
        ref: t,
        ...h,
        children: n
      })
    });
  });
  function gw(A) {
    return DA("MuiFormHelperText", A);
  }
  const Zl = LA("MuiFormHelperText", [
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
  var ql;
  let pw, Bw;
  pw = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: s } = A, l = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${mA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        s && "required"
      ]
    };
    return MA(l, gw, e);
  };
  Bw = fA("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.size && e[`size${mA(t.size)}`],
        t.contained && e.contained,
        t.filled && e.filled
      ];
    }
  })(WA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Zl.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Zl.error}`]: {
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
  })));
  hw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: f, ...p } = r, B = Tr(), y = Hr({
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
    }), h = {
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
    delete h.ownerState;
    const b = pw(h);
    return V(Bw, {
      as: i,
      className: wA(b.root, o),
      ref: t,
      ...p,
      ownerState: h,
      children: n === " " ? ql || (ql = V("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function ww(A) {
    return DA("MuiFormLabel", A);
  }
  const nn = LA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), mw = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, s = {
      root: [
        "root",
        `color${mA(t)}`,
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
    return MA(s, ww, e);
  }, Cw = fA("label", {
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
  })(WA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${nn.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${nn.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${nn.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), vw = fA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(WA(({ theme: A }) => ({
    [`&.${nn.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), yw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...f } = r, p = Tr(), B = Hr({
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
    }, h = mw(y);
    return oe(Cw, {
      as: a,
      ownerState: y,
      className: wA(h.root, o),
      ref: t,
      ...f,
      children: [
        n,
        B.required && oe(vw, {
          ownerState: y,
          "aria-hidden": true,
          className: h.asterisk,
          children: [
            "\u2009",
            "*"
          ]
        })
      ]
    });
  });
  function Ma(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  let Qw, Yi;
  Qw = {
    entering: {
      opacity: 1,
      transform: Ma(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  };
  Yi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  Pa = CA(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: f, style: p, timeout: B = "auto", TransitionComponent: y = nt, ...h } = e, b = ed(), m = oA(), v = Gs(), U = oA(null), C = be(U, In(o), t), S = (O) => (R) => {
      if (O) {
        const W = U.current;
        R === void 0 ? O(W) : O(W, R);
      }
    }, I = S(c), x = S((O, R) => {
      yd(O);
      const { duration: W, delay: rA, easing: D } = Io({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "enter"
      });
      let X;
      B === "auto" ? (X = v.transitions.getAutoHeightDuration(O.clientHeight), m.current = X) : X = W, O.style.transition = [
        v.transitions.create("opacity", {
          duration: X,
          delay: rA
        }),
        v.transitions.create("transform", {
          duration: Yi ? X : X * 0.666,
          delay: rA,
          easing: D
        })
      ].join(","), s && s(O, R);
    }), g = S(l), H = S(f), K = S((O) => {
      const { duration: R, delay: W, easing: rA } = Io({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "exit"
      });
      let D;
      B === "auto" ? (D = v.transitions.getAutoHeightDuration(O.clientHeight), m.current = D) : D = R, O.style.transition = [
        v.transitions.create("opacity", {
          duration: D,
          delay: W
        }),
        v.transitions.create("transform", {
          duration: Yi ? D : D * 0.666,
          delay: Yi ? W : W || D * 0.333,
          easing: rA
        })
      ].join(","), O.style.opacity = 0, O.style.transform = Ma(0.75), u && u(O);
    }), k = S(d);
    return V(y, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: x,
      onEntered: g,
      onEntering: I,
      onExit: K,
      onExited: k,
      onExiting: H,
      addEndListener: (O) => {
        B === "auto" && b.start(m.current || 0, O), r && r(U.current, O);
      },
      timeout: B === "auto" ? null : B,
      ...h,
      children: (O, { ownerState: R, ...W }) => Ke(o, {
        style: {
          opacity: 0,
          transform: Ma(0.75),
          visibility: O === "exited" && !a ? "hidden" : void 0,
          ...Qw[O],
          ...p,
          ...o.props.style
        },
        ref: C,
        ...W
      })
    });
  });
  Pa && (Pa.muiSupportAuto = true);
  let bw, Fw, Uw;
  bw = (A) => {
    const { classes: e, disableUnderline: t } = A, n = MA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, I0, e);
    return {
      ...e,
      ...n
    };
  };
  Fw = fA(Ei, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...Fi(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(WA(({ theme: A }) => {
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
            [`&.${Rr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Rr.error}`]: {
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
            [`&:hover:not(.${Rr.disabled}, .${Rr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${Rr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(kt()).map(([r]) => ({
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
  }));
  Uw = fA(Si, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Ui
  })({});
  Ys = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...f } = r, p = bw(r), y = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, h = c ?? i ? jA(c ?? i, y) : y, b = u.root ?? o.Root ?? Fw, m = u.input ?? o.Input ?? Uw;
    return V(Xs, {
      slots: {
        root: b,
        input: m
      },
      slotProps: h,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...f,
      classes: p
    });
  });
  Ys.muiName = "Input";
  function Ew(A) {
    return DA("MuiInputLabel", A);
  }
  LA("MuiInputLabel", [
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
  let Sw, Iw;
  Sw = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, s = {
      root: [
        "root",
        t && "formControl",
        !o && "animated",
        n && "shrink",
        r && r !== "normal" && `size${mA(r)}`,
        i
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, l = MA(s, Ew, e);
    return {
      ...e,
      ...l
    };
  };
  Iw = fA(yw, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${nn.asterisk}`]: e.asterisk
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
  })(WA(({ theme: A }) => ({
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
  xw = CA(function(e, t) {
    const r = NA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = Tr();
    let u = i;
    typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
    const d = Hr({
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
    }, p = Sw(f);
    return V(Iw, {
      "data-shrink": u,
      ref: t,
      className: wA(p.root, s),
      ...l,
      ownerState: f,
      classes: p
    });
  });
  Hw = et({});
  function Tw(A) {
    return DA("MuiList", A);
  }
  LA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let Lw, kw;
  Lw = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return MA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Tw, e);
  };
  kw = fA("ul", {
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
  Ow = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, u = ee(() => ({
      dense: a
    }), [
      a
    ]), d = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, f = Lw(d);
    return V(Hw.Provider, {
      value: u,
      children: oe(kw, {
        as: i,
        className: wA(f.root, o),
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
  function zi(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Ac(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function Qd(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function Dr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !Qd(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  Kw = CA(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, f = oA(null), p = oA({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    pt(() => {
      n && f.current.focus();
    }, [
      n
    ]), vn(r, () => ({
      adjustStyleForScrollbar: (m, { direction: v }) => {
        const U = !f.current.style.width;
        if (m.clientHeight < f.current.clientHeight && U) {
          const C = `${td(Bt(m))}px`;
          f.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = C, f.current.style.width = `calc(100% + ${C})`;
        }
        return f.current;
      }
    }), []);
    const B = (m) => {
      const v = f.current, U = m.key;
      if (m.ctrlKey || m.metaKey || m.altKey) {
        c && c(m);
        return;
      }
      const S = Ne(v).activeElement;
      if (U === "ArrowDown") m.preventDefault(), Dr(v, S, l, s, zi);
      else if (U === "ArrowUp") m.preventDefault(), Dr(v, S, l, s, Ac);
      else if (U === "Home") m.preventDefault(), Dr(v, null, l, s, zi);
      else if (U === "End") m.preventDefault(), Dr(v, null, l, s, Ac);
      else if (U.length === 1) {
        const I = p.current, x = U.toLowerCase(), g = performance.now();
        I.keys.length > 0 && (g - I.lastTime > 500 ? (I.keys = [], I.repeating = true, I.previousKeyMatched = true) : I.repeating && x !== I.keys[0] && (I.repeating = false)), I.lastTime = g, I.keys.push(x);
        const H = S && !I.repeating && Qd(S, I);
        I.previousKeyMatched && (H || Dr(v, S, false, s, zi, I)) ? m.preventDefault() : I.previousKeyMatched = false;
      }
      c && c(m);
    }, y = be(f, t);
    let h = -1;
    qt.forEach(i, (m, v) => {
      if (!Ee(m)) {
        h === v && (h += 1, h >= i.length && (h = -1));
        return;
      }
      m.props.disabled || (u === "selectedMenu" && m.props.selected || h === -1) && (h = v), h === v && (m.props.disabled || m.props.muiSkipListHighlight || m.type.muiSkipListHighlight) && (h += 1, h >= i.length && (h = -1));
    });
    const b = qt.map(i, (m, v) => {
      if (v === h) {
        const U = {};
        return o && (U.autoFocus = true), m.props.tabIndex === void 0 && u === "selectedMenu" && (U.tabIndex = 0), Ke(m, U);
      }
      return m;
    });
    return V(Ow, {
      role: "menu",
      ref: y,
      className: a,
      onKeyDown: B,
      tabIndex: n ? 0 : -1,
      ...d,
      children: b
    });
  });
  function Rw(A) {
    return DA("MuiPopover", A);
  }
  LA("MuiPopover", [
    "root",
    "paper"
  ]);
  function ec(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function tc(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function rc(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function Nn(A) {
    return typeof A == "function" ? A() : A;
  }
  let Dw, Mw, bd;
  Dw = (A) => {
    const { classes: e } = A;
    return MA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, Rw, e);
  };
  Mw = fA(iw, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  bd = fA(Ph, {
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
  });
  Pw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: f = 16, open: p, PaperProps: B = {}, slots: y = {}, slotProps: h = {}, transformOrigin: b = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: m, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: C = false, ...S } = r, I = oA(), x = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: f,
      transformOrigin: b,
      TransitionComponent: m,
      transitionDuration: v,
      TransitionProps: U
    }, g = Dw(x), H = RA(() => {
      if (s === "anchorPosition") return a;
      const J = Nn(o), aA = (J && J.nodeType === 1 ? J : Ne(I.current).body).getBoundingClientRect();
      return {
        top: aA.top + ec(aA, i.vertical),
        left: aA.left + tc(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), K = RA((J) => ({
      vertical: ec(J, b.vertical),
      horizontal: tc(J, b.horizontal)
    }), [
      b.horizontal,
      b.vertical
    ]), k = RA((J) => {
      const nA = {
        width: J.offsetWidth,
        height: J.offsetHeight
      }, aA = K(nA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: rc(aA)
      };
      const w = H();
      let F = w.top - aA.vertical, Q = w.left - aA.horizontal;
      const M = F + nA.height, $ = Q + nA.width, P = Bt(Nn(o)), sA = P.innerHeight - f, cA = P.innerWidth - f;
      if (f !== null && F < f) {
        const gA = F - f;
        F -= gA, aA.vertical += gA;
      } else if (f !== null && M > sA) {
        const gA = M - sA;
        F -= gA, aA.vertical += gA;
      }
      if (f !== null && Q < f) {
        const gA = Q - f;
        Q -= gA, aA.horizontal += gA;
      } else if ($ > cA) {
        const gA = $ - cA;
        Q -= gA, aA.horizontal += gA;
      }
      return {
        top: `${Math.round(F)}px`,
        left: `${Math.round(Q)}px`,
        transformOrigin: rc(aA)
      };
    }, [
      o,
      s,
      H,
      K,
      f
    ]), [N, O] = BA(p), R = RA(() => {
      const J = I.current;
      if (!J) return;
      const nA = k(J);
      nA.top !== null && J.style.setProperty("top", nA.top), nA.left !== null && (J.style.left = nA.left), J.style.transformOrigin = nA.transformOrigin, O(true);
    }, [
      k
    ]);
    lA(() => (C && window.addEventListener("scroll", R), () => window.removeEventListener("scroll", R)), [
      o,
      C,
      R
    ]);
    const W = () => {
      R();
    }, rA = () => {
      O(false);
    };
    lA(() => {
      p && R();
    }), vn(n, () => p ? {
      updatePosition: () => {
        R();
      }
    } : null, [
      p,
      R
    ]), lA(() => {
      if (!p) return;
      const J = qu(() => {
        R();
      }), nA = Bt(Nn(o));
      return nA.addEventListener("resize", J), () => {
        J.clear(), nA.removeEventListener("resize", J);
      };
    }, [
      o,
      p,
      R
    ]);
    let D = v;
    const X = {
      slots: {
        transition: m,
        ...y
      },
      slotProps: {
        transition: U,
        paper: B,
        ...h
      }
    }, [q, tA] = he("transition", {
      elementType: Pa,
      externalForwardedProps: X,
      ownerState: x,
      getSlotProps: (J) => ({
        ...J,
        onEntering: (nA, aA) => {
          var _a2;
          (_a2 = J.onEntering) == null ? void 0 : _a2.call(J, nA, aA), W();
        },
        onExited: (nA) => {
          var _a2;
          (_a2 = J.onExited) == null ? void 0 : _a2.call(J, nA), rA();
        }
      }),
      additionalProps: {
        appear: true,
        in: p
      }
    });
    v === "auto" && !q.muiSupportAuto && (D = void 0);
    const T = u || (o ? Ne(Nn(o)).body : void 0), [G, { slots: _, slotProps: Y, ...dA }] = he("root", {
      ref: t,
      elementType: Mw,
      externalForwardedProps: {
        ...X,
        ...S
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: y.backdrop
        },
        slotProps: {
          backdrop: Ih(typeof h.backdrop == "function" ? h.backdrop(x) : h.backdrop, {
            invisible: true
          })
        },
        container: T,
        open: p
      },
      ownerState: x,
      className: wA(g.root, c)
    }), [iA, AA] = he("paper", {
      ref: I,
      className: g.paper,
      elementType: bd,
      externalForwardedProps: X,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: N ? void 0 : {
          opacity: 0
        }
      },
      ownerState: x
    });
    return V(G, {
      ...dA,
      ...!Da(G) && {
        slots: _,
        slotProps: Y,
        disableScrollLock: C
      },
      children: V(q, {
        ...tA,
        timeout: D,
        children: V(iA, {
          ...AA,
          children: l
        })
      })
    });
  });
  function _w(A) {
    return DA("MuiMenu", A);
  }
  LA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  let Nw, Gw, Vw, $w, Ww, Xw;
  Nw = {
    vertical: "top",
    horizontal: "right"
  };
  Gw = {
    vertical: "top",
    horizontal: "left"
  };
  Vw = (A) => {
    const { classes: e } = A;
    return MA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, _w, e);
  };
  $w = fA(Pw, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  Ww = fA(bd, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  });
  Xw = fA(Kw, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  });
  Jw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: f = "auto", TransitionProps: { onEntering: p, ...B } = {}, variant: y = "selectedMenu", slots: h = {}, slotProps: b = {}, ...m } = r, v = FB(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: u,
      transitionDuration: f,
      TransitionProps: B,
      variant: y
    }, C = Vw(U), S = n && !a && c, I = oA(null), x = (D, X) => {
      I.current && I.current.adjustStyleForScrollbar(D, {
        direction: v ? "rtl" : "ltr"
      }), p && p(D, X);
    }, g = (D) => {
      D.key === "Tab" && (D.preventDefault(), l && l(D, "tabKeyDown"));
    };
    let H = -1;
    qt.map(o, (D, X) => {
      Ee(D) && (D.props.disabled || (y === "selectedMenu" && D.props.selected || H === -1) && (H = X));
    });
    const K = {
      slots: h,
      slotProps: {
        list: s,
        transition: B,
        paper: u,
        ...b
      }
    }, k = mB({
      elementType: h.root,
      externalSlotProps: b.root,
      ownerState: U,
      className: [
        C.root,
        i
      ]
    }), [N, O] = he("paper", {
      className: C.paper,
      elementType: Ww,
      externalForwardedProps: K,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [R, W] = he("list", {
      className: wA(C.list, s.className),
      elementType: Xw,
      shouldForwardComponentProp: true,
      externalForwardedProps: K,
      getSlotProps: (D) => ({
        ...D,
        onKeyDown: (X) => {
          var _a2;
          g(X), (_a2 = D.onKeyDown) == null ? void 0 : _a2.call(D, X);
        }
      }),
      ownerState: U
    }), rA = typeof K.slotProps.transition == "function" ? K.slotProps.transition(U) : K.slotProps.transition;
    return V($w, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? Nw : Gw,
      slots: {
        root: h.root,
        paper: N,
        backdrop: h.backdrop,
        ...h.transition && {
          transition: h.transition
        }
      },
      slotProps: {
        root: k,
        paper: O,
        backdrop: typeof b.backdrop == "function" ? b.backdrop(U) : b.backdrop,
        transition: {
          ...rA,
          onEntering: (...D) => {
            var _a2;
            x(...D), (_a2 = rA == null ? void 0 : rA.onEntering) == null ? void 0 : _a2.call(rA, ...D);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...m,
      classes: d,
      children: V(R, {
        actions: I,
        autoFocus: n && (H === -1 || a),
        autoFocusItem: S,
        variant: y,
        ...W,
        children: o
      })
    });
  });
  function Yw(A) {
    return DA("MuiNativeSelect", A);
  }
  const zs = LA("MuiNativeSelect", [
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
  ]), zw = (A) => {
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
        `icon${mA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ]
    };
    return MA(a, Yw, e);
  }, Fd = fA("select", {
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
    [`&.${zs.disabled}`]: {
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
  })), jw = fA(Fd, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rt,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${zs.multiple}`]: e.multiple
        }
      ];
    }
  })({}), Ud = fA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${zs.disabled}`]: {
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
  })), Zw = fA(Ud, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${mA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), qw = CA(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = zw(c);
    return oe(tt, {
      children: [
        V(jw, {
          ownerState: c,
          className: wA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : V(Zw, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var nc;
  const Am = fA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: rt
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
  }), em = fA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: rt
  })(WA(({ theme: A }) => ({
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
  function tm(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return V(Am, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: V(em, {
        ownerState: s,
        children: a ? V("span", {
          children: n
        }) : nc || (nc = V("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const rm = (A) => {
    const { classes: e } = A, r = MA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, x0, e);
    return {
      ...e,
      ...r
    };
  }, nm = fA(Ei, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Fi
  })(WA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (A.vars || A).shape.borderRadius,
      [`&:hover .${$e.notchedOutline}`]: {
        borderColor: (A.vars || A).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${$e.notchedOutline}`]: {
          borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${$e.focused} .${$e.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(A.palette).filter(kt()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            [`&.${$e.focused} .${$e.notchedOutline}`]: {
              borderColor: (A.vars || A).palette[t].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${$e.error} .${$e.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.error.main
            },
            [`&.${$e.disabled} .${$e.notchedOutline}`]: {
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
  })), om = fA(tm, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(WA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), im = fA(Si, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Ui
  })(WA(({ theme: A }) => ({
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
  }))), js = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...f } = r, p = rm(r), B = Tr(), y = Hr({
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
    }), h = {
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
      type: d
    }, b = c.root ?? n.Root ?? nm, m = c.input ?? n.Input ?? im, [v, U] = he("notchedOutline", {
      elementType: om,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: h,
      externalForwardedProps: {
        slots: c,
        slotProps: u
      },
      additionalProps: {
        label: a != null && a !== "" && y.required ? oe(tt, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return V(Xs, {
      slots: {
        root: b,
        input: m
      },
      slotProps: u,
      renderSuffix: (C) => V(v, {
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
        ...p,
        notchedOutline: null
      }
    });
  });
  js.muiName = "Input";
  function Ed(A) {
    return DA("MuiSelect", A);
  }
  const Mr = LA("MuiSelect", [
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
  var oc;
  const am = fA(Fd, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Mr.select}`]: e.select
        },
        {
          [`&.${Mr.select}`]: e[t.variant]
        },
        {
          [`&.${Mr.error}`]: e.error
        },
        {
          [`&.${Mr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Mr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), sm = fA(Ud, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${mA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), lm = fA("input", {
    shouldForwardProp: (A) => wd(A) && A !== "classes",
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
  function ic(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function cm(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let um, dm, fm, Zs, gm, pm, Bm;
  um = (A) => {
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
        `icon${mA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return MA(a, Ed, e);
  };
  dm = CA(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: f = false, IconComponent: p, inputRef: B, labelId: y, MenuProps: h = {}, multiple: b, name: m, onBlur: v, onChange: U, onClose: C, onFocus: S, onOpen: I, open: x, readOnly: g, renderValue: H, required: K, SelectDisplayProps: k = {}, tabIndex: N, type: O, value: R, variant: W = "standard", ...rA } = e, [D, X] = Ul({
      controlled: R,
      default: c,
      name: "Select"
    }), [q, tA] = Ul({
      controlled: x,
      default: l,
      name: "Select"
    }), T = oA(null), G = oA(null), [_, Y] = BA(null), { current: dA } = oA(x != null), [iA, AA] = BA(), J = be(t, B), nA = RA((uA) => {
      G.current = uA, uA && Y(uA);
    }, []), aA = _ == null ? void 0 : _.parentNode;
    vn(J, () => ({
      focus: () => {
        G.current.focus();
      },
      node: T.current,
      value: D
    }), [
      D
    ]), lA(() => {
      l && q && _ && !dA && (AA(i ? null : aA.clientWidth), G.current.focus());
    }, [
      _,
      i
    ]), lA(() => {
      o && G.current.focus();
    }, [
      o
    ]), lA(() => {
      if (!y) return;
      const uA = Ne(G.current).getElementById(y);
      if (uA) {
        const HA = () => {
          getSelection().isCollapsed && G.current.focus();
        };
        return uA.addEventListener("click", HA), () => {
          uA.removeEventListener("click", HA);
        };
      }
    }, [
      y
    ]);
    const w = (uA, HA) => {
      uA ? I && I(HA) : C && C(HA), dA || (AA(i ? null : aA.clientWidth), tA(uA));
    }, F = (uA) => {
      uA.button === 0 && (uA.preventDefault(), G.current.focus(), w(true, uA));
    }, Q = (uA) => {
      w(false, uA);
    }, M = qt.toArray(a), $ = (uA) => {
      const HA = M.find((se) => se.props.value === uA.target.value);
      HA !== void 0 && (X(HA.props.value), U && U(uA, HA));
    }, P = (uA) => (HA) => {
      let se;
      if (HA.currentTarget.hasAttribute("tabindex")) {
        if (b) {
          se = Array.isArray(D) ? D.slice() : [];
          const er = D.indexOf(uA.props.value);
          er === -1 ? se.push(uA.props.value) : se.splice(er, 1);
        } else se = uA.props.value;
        if (uA.props.onClick && uA.props.onClick(HA), D !== se && (X(se), U)) {
          const er = HA.nativeEvent || HA, il = new er.constructor(er.type, er);
          Object.defineProperty(il, "target", {
            writable: true,
            value: {
              value: se,
              name: m
            }
          }), U(il, uA);
        }
        b || w(false, HA);
      }
    }, sA = (uA) => {
      g || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(uA.key) && (uA.preventDefault(), w(true, uA));
    }, cA = _ !== null && q, gA = (uA) => {
      !cA && v && (Object.defineProperty(uA, "target", {
        writable: true,
        value: {
          value: D,
          name: m
        }
      }), v(uA));
    };
    delete rA["aria-invalid"];
    let Z, ae;
    const pA = [];
    let GA = false;
    (Ho({
      value: D
    }) || d) && (H ? Z = H(D) : GA = true);
    const ZA = M.map((uA) => {
      if (!Ee(uA)) return null;
      let HA;
      if (b) {
        if (!Array.isArray(D)) throw new Error(ft(2));
        HA = D.some((se) => ic(se, uA.props.value)), HA && GA && pA.push(uA.props.children);
      } else HA = ic(D, uA.props.value), HA && GA && (ae = uA.props.children);
      return Ke(uA, {
        "aria-selected": HA ? "true" : "false",
        onClick: P(uA),
        onKeyUp: (se) => {
          se.key === " " && se.preventDefault(), uA.props.onKeyUp && uA.props.onKeyUp(se);
        },
        role: "option",
        selected: HA,
        value: void 0,
        "data-value": uA.props.value
      });
    });
    GA && (b ? pA.length === 0 ? Z = null : Z = pA.reduce((uA, HA, se) => (uA.push(HA), se < pA.length - 1 && uA.push(", "), uA), []) : Z = ae);
    let fe = iA;
    !i && dA && _ && (fe = aA.clientWidth);
    let te;
    typeof N < "u" ? te = N : te = u ? null : 0;
    const mt = k.id || (m ? `mui-component-select-${m}` : void 0), Kt = {
      ...e,
      variant: W,
      value: D,
      open: cA,
      error: f
    }, kA = um(Kt), Ar = {
      ...h.PaperProps,
      ...(_a2 = h.slotProps) == null ? void 0 : _a2.paper
    }, kr = Qi();
    return oe(tt, {
      children: [
        V(am, {
          as: "div",
          ref: nA,
          tabIndex: te,
          role: "combobox",
          "aria-controls": cA ? kr : void 0,
          "aria-disabled": u ? "true" : void 0,
          "aria-expanded": cA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            y,
            mt
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": K ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: u || g ? null : F,
          onBlur: gA,
          onFocus: S,
          ...k,
          ownerState: Kt,
          className: wA(k.className, kA.select, s),
          id: mt,
          children: cm(Z) ? oc || (oc = V("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : Z
        }),
        V(lm, {
          "aria-invalid": f,
          value: Array.isArray(D) ? D.join(",") : D,
          name: m,
          ref: T,
          "aria-hidden": true,
          onChange: $,
          tabIndex: -1,
          disabled: u,
          className: kA.nativeInput,
          autoFocus: o,
          required: K,
          ...rA,
          ownerState: Kt
        }),
        V(sm, {
          as: p,
          className: kA.icon,
          ownerState: Kt
        }),
        V(Jw, {
          id: `menu-${m || ""}`,
          anchorEl: aA,
          open: cA,
          onClose: Q,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...h,
          slotProps: {
            ...h.slotProps,
            list: {
              "aria-labelledby": y,
              role: "listbox",
              "aria-multiselectable": b ? "true" : void 0,
              disableListWrap: true,
              id: kr,
              ...h.MenuListProps
            },
            paper: {
              ...Ar,
              style: {
                minWidth: fe,
                ...Ar != null ? Ar.style : null
              }
            }
          },
          children: ZA
        })
      ]
    });
  });
  fm = (A) => {
    const { classes: e } = A, r = MA({
      root: [
        "root"
      ]
    }, Ed, e);
    return {
      ...e,
      ...r
    };
  };
  Zs = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => rt(A) && A !== "variant",
    slot: "Root"
  };
  gm = fA(Ys, Zs)("");
  pm = fA(js, Zs)("");
  Bm = fA(Js, Zs)("");
  Sd = CA(function(e, t) {
    const r = NA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = T0, id: u, input: d, inputProps: f, label: p, labelId: B, MenuProps: y, multiple: h = false, native: b = false, onClose: m, onOpen: v, open: U, renderValue: C, SelectDisplayProps: S, variant: I = "outlined", ...x } = r, g = b ? qw : dm, H = Tr(), K = Hr({
      props: r,
      muiFormControl: H,
      states: [
        "variant",
        "error"
      ]
    }), k = K.variant || I, N = {
      ...r,
      variant: k,
      classes: i
    }, O = fm(N), { root: R, ...W } = O, rA = d || {
      standard: V(gm, {
        ownerState: N
      }),
      outlined: V(pm, {
        label: p,
        ownerState: N
      }),
      filled: V(Bm, {
        ownerState: N
      })
    }[k], D = be(t, In(rA));
    return V(tt, {
      children: Ke(rA, {
        inputComponent: g,
        inputProps: {
          children: o,
          error: K.error,
          IconComponent: c,
          variant: k,
          type: void 0,
          multiple: h,
          ...b ? {
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: B,
            MenuProps: y,
            onClose: m,
            onOpen: v,
            open: U,
            renderValue: C,
            SelectDisplayProps: {
              id: u,
              ...S
            }
          },
          ...f,
          classes: f ? jA(W, f.classes) : W,
          ...d ? d.props.inputProps : {}
        },
        ...(h && b || l) && k === "outlined" ? {
          notched: true
        } : {},
        ref: D,
        className: wA(rA.props.className, a, O.root),
        ...!d && {
          variant: k
        },
        ...x
      })
    });
  });
  Sd.muiName = "Select";
  function hm(A) {
    return DA("MuiTextField", A);
  }
  LA("MuiTextField", [
    "root"
  ]);
  let wm, mm, Cm, vm, Qm, Dt, bm;
  wm = {
    standard: Ys,
    filled: Js,
    outlined: js
  };
  mm = (A) => {
    const { classes: e } = A;
    return MA({
      root: [
        "root"
      ]
    }, hm, e);
  };
  Cm = fA(fw, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  b1 = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: f = false, helperText: p, id: B, InputLabelProps: y, inputProps: h, InputProps: b, inputRef: m, label: v, maxRows: U, minRows: C, multiline: S = false, name: I, onBlur: x, onChange: g, onFocus: H, placeholder: K, required: k = false, rows: N, select: O = false, SelectProps: R, slots: W = {}, slotProps: rA = {}, type: D, value: X, variant: q = "outlined", ...tA } = r, T = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: f,
      multiline: S,
      required: k,
      select: O,
      variant: q
    }, G = mm(T), _ = Qi(B), Y = p && _ ? `${_}-helper-text` : void 0, dA = v && _ ? `${_}-label` : void 0, iA = wm[q], AA = {
      slots: W,
      slotProps: {
        input: b,
        inputLabel: y,
        htmlInput: h,
        formHelperText: d,
        select: R,
        ...rA
      }
    }, J = {}, nA = AA.slotProps.inputLabel;
    q === "outlined" && (nA && typeof nA.shrink < "u" && (J.notched = nA.shrink), J.label = v), O && ((!R || !R.native) && (J.id = void 0), J["aria-describedby"] = void 0);
    const [aA, w] = he("root", {
      elementType: Cm,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...AA,
        ...tA
      },
      ownerState: T,
      className: wA(G.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: u,
        fullWidth: f,
        required: k,
        color: s,
        variant: q
      }
    }), [F, Q] = he("input", {
      elementType: iA,
      externalForwardedProps: AA,
      additionalProps: J,
      ownerState: T
    }), [M, $] = he("inputLabel", {
      elementType: xw,
      externalForwardedProps: AA,
      ownerState: T
    }), [P, sA] = he("htmlInput", {
      elementType: "input",
      externalForwardedProps: AA,
      ownerState: T
    }), [cA, gA] = he("formHelperText", {
      elementType: hw,
      externalForwardedProps: AA,
      ownerState: T
    }), [Z, ae] = he("select", {
      elementType: Sd,
      externalForwardedProps: AA,
      ownerState: T
    }), pA = V(F, {
      "aria-describedby": Y,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: f,
      multiline: S,
      name: I,
      rows: N,
      maxRows: U,
      minRows: C,
      type: D,
      value: X,
      id: _,
      inputRef: m,
      onBlur: x,
      onChange: g,
      onFocus: H,
      placeholder: K,
      inputProps: sA,
      slots: {
        input: W.htmlInput ? P : void 0
      },
      ...Q
    });
    return oe(aA, {
      ...w,
      children: [
        v != null && v !== "" && V(M, {
          htmlFor: _,
          id: dA,
          ...$,
          children: v
        }),
        O ? V(Z, {
          "aria-describedby": Y,
          id: _,
          labelId: dA,
          value: X,
          input: pA,
          ...ae,
          children: i
        }) : pA,
        p && V(cA, {
          id: Y,
          ...gA,
          children: p
        })
      ]
    });
  });
  vm = [
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
  ym = (A) => ee(() => {
    if (!A) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, t = {}, r = {}, n = {}, o = {};
    return vm.forEach((i) => {
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
  F1 = 1111111111111;
  U1 = 300;
  E1 = 200;
  sr = "vis-2-widgets-collection.0.theme";
  Qm = 32;
  Dt = /* @__PURE__ */ new Map();
  bm = (A) => JSON.stringify(A, (e, t) => typeof t == "function" ? String(t) : t);
  function Fm(A) {
    const e = bm(A), t = Dt.get(e);
    if (t) return Dt.delete(e), Dt.set(e, t), t;
    const r = bi(A);
    if (Dt.set(e, r), Dt.size > Qm) {
      const n = Dt.keys().next().value;
      n !== void 0 && Dt.delete(n);
    }
    return r;
  }
  let _a = null, Jr = null, Id = null, Na = false;
  const Ga = /* @__PURE__ */ new Set();
  function ac() {
    if (Na = false, !Object.is(Jr, _a)) {
      Jr = _a, Id = Jr === null ? null : JSON.stringify(Jr);
      for (const A of Ga) A();
    }
  }
  function Um() {
    Na || (Na = true, typeof requestAnimationFrame == "function" ? requestAnimationFrame(ac) : ac());
  }
  function Em() {
    return Jr;
  }
  function Sm() {
    return Id;
  }
  Im = function(A) {
    _a = A, Um();
  };
  xm = function() {
    Im(null);
  };
  function Hm(A) {
    return Ga.add(A), () => {
      Ga.delete(A);
    };
  }
  function ht(A) {
    return typeof A == "object" && A !== null && !Array.isArray(A);
  }
  zt = function(A, e) {
    if (!ht(A) || !e) return;
    const t = e.split(".");
    let r = A;
    for (const n of t) {
      if (!ht(r) || !(n in r)) return;
      r = r[n];
    }
    return r;
  };
  Pr = 96;
  function Tm(A) {
    if (!A) return;
    const e = A.topLeft ?? 4, t = A.topRight ?? 4, r = A.bottomRight ?? 4, n = A.bottomLeft ?? 4;
    return `${e}px ${t}px ${r}px ${n}px`;
  }
  xd = function(A, e, t) {
    if (!e) return A;
    const r = ht(A) ? {
      ...A
    } : {};
    return t === void 0 ? Td(r, e.split(".")) : Hd(r, e.split("."), t), r;
  };
  function Hd(A, e, t) {
    const [r, ...n] = e;
    if (n.length === 0) {
      A[r] = t;
      return;
    }
    const o = A[r], i = ht(o) ? {
      ...o
    } : {};
    A[r] = i, Hd(i, n, t);
  }
  function Td(A, e) {
    const [t, ...r] = e;
    if (r.length === 0) {
      delete A[t];
      return;
    }
    const n = A[t];
    if (!ht(n)) return;
    const o = {
      ...n
    };
    Td(o, r), Object.keys(o).length === 0 ? delete A[t] : A[t] = o;
  }
  const Lm = 120, km = 40, Om = "#ba68c8";
  function Qr(A) {
    return Math.max(0, Math.min(255, Math.round(A)));
  }
  function Km(A) {
    if (typeof A != "string") return null;
    const e = A.trim();
    if (!e) return null;
    let t = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(e);
    if (t) {
      let r = t[1];
      return r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length === 8 && (r = r.slice(0, 6)), [
        parseInt(r.slice(0, 2), 16),
        parseInt(r.slice(2, 4), 16),
        parseInt(r.slice(4, 6), 16)
      ];
    }
    return t = /^rgba?\(\s*([\d.]+)\s*[,\s]\s*([\d.]+)\s*[,\s]\s*([\d.]+)/i.exec(e), t ? [
      Qr(+t[1]),
      Qr(+t[2]),
      Qr(+t[3])
    ] : (t = /^hsla?\(\s*([\d.]+)(?:deg)?\s*[,\s]\s*([\d.]+)%\s*[,\s]\s*([\d.]+)%/i.exec(e), t ? Ld(+t[1], +t[2], +t[3]) : null);
  }
  function Rm(A, e, t) {
    A /= 255, e /= 255, t /= 255;
    const r = Math.max(A, e, t), n = Math.min(A, e, t), o = (r + n) / 2;
    let i = 0, a = 0;
    if (r !== n) {
      const s = r - n;
      switch (a = o > 0.5 ? s / (2 - r - n) : s / (r + n), r) {
        case A:
          i = (e - t) / s + (e < t ? 6 : 0);
          break;
        case e:
          i = (t - A) / s + 2;
          break;
        default:
          i = (A - e) / s + 4;
      }
      i *= 60;
    }
    return [
      i,
      a * 100,
      o * 100
    ];
  }
  function Ld(A, e, t) {
    const r = (A % 360 + 360) % 360, n = Math.max(0, Math.min(100, e)) / 100, o = Math.max(0, Math.min(100, t)) / 100, i = (1 - Math.abs(2 * o - 1)) * n, a = i * (1 - Math.abs(r / 60 % 2 - 1)), s = o - i / 2;
    let l = 0, c = 0, u = 0;
    return r < 60 ? [l, c, u] = [
      i,
      a,
      0
    ] : r < 120 ? [l, c, u] = [
      a,
      i,
      0
    ] : r < 180 ? [l, c, u] = [
      0,
      i,
      a
    ] : r < 240 ? [l, c, u] = [
      0,
      a,
      i
    ] : r < 300 ? [l, c, u] = [
      a,
      0,
      i
    ] : [l, c, u] = [
      i,
      0,
      a
    ], [
      Qr((l + s) * 255),
      Qr((c + s) * 255),
      Qr((u + s) * 255)
    ];
  }
  function Dm(A, e, t) {
    const [r, n, o] = Ld(A, e, t), i = (a) => a.toString(16).padStart(2, "0");
    return `#${i(r)}${i(n)}${i(o)}`;
  }
  function Mm(A) {
    const e = Km(A);
    if (!e) return Om;
    const [t, r, n] = Rm(e[0], e[1], e[2]);
    return Dm(t + Lm, Math.max(r, km), n);
  }
  Pm = function(A) {
    const e = zt(A, "palette.primary.main"), t = zt(A, "palette.secondary.main");
    return !e || t ? A : xd(A, "palette.secondary.main", Mm(e));
  };
  _m = function(A, e) {
    if (zt(A, "palette.text.primary")) return A;
    const r = zt(A, "palette.primary.main") ?? e;
    return r ? xd(A, "palette.text.primary", r) : A;
  };
  const sc = [
    {
      family: "Roboto",
      weight: 400,
      load: () => JA(() => import("./roboto-latin-400-normal-a6QQlpX7.js"), [], import.meta.url)
    },
    {
      family: "Roboto",
      weight: 700,
      load: () => JA(() => import("./roboto-latin-700-normal-CagKtDsa.js"), [], import.meta.url)
    },
    {
      family: "Inter",
      weight: 400,
      load: () => JA(() => import("./inter-latin-400-normal-BP0WKwYq.js"), [], import.meta.url)
    },
    {
      family: "Inter",
      weight: 700,
      load: () => JA(() => import("./inter-latin-700-normal-B3I9hjST.js"), [], import.meta.url)
    },
    {
      family: "Open Sans",
      weight: 400,
      load: () => JA(() => import("./open-sans-latin-400-normal-Cb5GhqMr.js"), [], import.meta.url)
    },
    {
      family: "Open Sans",
      weight: 700,
      load: () => JA(() => import("./open-sans-latin-700-normal-XolaVIVA.js"), [], import.meta.url)
    },
    {
      family: "Montserrat",
      weight: 400,
      load: () => JA(() => import("./montserrat-latin-400-normal-DhxtaMDQ.js"), [], import.meta.url)
    },
    {
      family: "Montserrat",
      weight: 700,
      load: () => JA(() => import("./montserrat-latin-700-normal-DvK44yU9.js"), [], import.meta.url)
    },
    {
      family: "Roboto Slab",
      weight: 400,
      load: () => JA(() => import("./roboto-slab-latin-400-normal-DB3QTBjh.js"), [], import.meta.url)
    },
    {
      family: "Roboto Slab",
      weight: 700,
      load: () => JA(() => import("./roboto-slab-latin-700-normal-WurPvX7w.js"), [], import.meta.url)
    },
    {
      family: "Merriweather",
      weight: 400,
      load: () => JA(() => import("./merriweather-latin-400-normal-D7Wb1pT4.js"), [], import.meta.url)
    },
    {
      family: "Merriweather",
      weight: 700,
      load: () => JA(() => import("./merriweather-latin-700-normal-DlM4-wGW.js"), [], import.meta.url)
    },
    {
      family: "Playfair Display",
      weight: 400,
      load: () => JA(() => import("./playfair-display-latin-400-normal-CjetgZcY.js"), [], import.meta.url)
    },
    {
      family: "Playfair Display",
      weight: 700,
      load: () => JA(() => import("./playfair-display-latin-700-normal-DGi6mrkJ.js"), [], import.meta.url)
    },
    {
      family: "JetBrains Mono",
      weight: 400,
      load: () => JA(() => import("./jetbrains-mono-latin-400-normal-Ddoyv7f5.js"), [], import.meta.url)
    },
    {
      family: "JetBrains Mono",
      weight: 700,
      load: () => JA(() => import("./jetbrains-mono-latin-700-normal-vpWWyNDD.js"), [], import.meta.url)
    },
    {
      family: "Oswald",
      weight: 400,
      load: () => JA(() => import("./oswald-latin-400-normal-BHJOAwCY.js"), [], import.meta.url)
    },
    {
      family: "Oswald",
      weight: 700,
      load: () => JA(() => import("./oswald-latin-700-normal-qtyFhSVf.js"), [], import.meta.url)
    },
    {
      family: "Nunito",
      weight: 400,
      load: () => JA(() => import("./nunito-latin-400-normal-l1jb7Pyr.js"), [], import.meta.url)
    },
    {
      family: "Nunito",
      weight: 700,
      load: () => JA(() => import("./nunito-latin-700-normal-CW-HBzh6.js"), [], import.meta.url)
    }
  ], lc = /* @__PURE__ */ new Set(), ji = /* @__PURE__ */ new Map();
  function Nm(A) {
    const e = `${A.family}:${A.weight}`;
    if (lc.has(e) || typeof document > "u") return Promise.resolve();
    const t = ji.get(e);
    if (t) return t;
    const r = A.load().then((n) => {
      const o = document.createElement("style");
      o.setAttribute("data-collection-fonts", ""), o.textContent = `@font-face{font-family:'${A.family}';font-style:normal;font-display:swap;font-weight:${A.weight};src:url(${n.default}) format("woff2")}`, document.head.appendChild(o), lc.add(e);
    }).finally(() => ji.delete(e));
    return ji.set(e, r), r;
  }
  Gm = function(A) {
    if (typeof document > "u") return Promise.resolve();
    const e = A ? sc.filter((t) => A.includes(t.family)) : sc;
    return Promise.all(e.map(Nm)).then(() => {
    });
  };
  Ii = [
    {
      value: "'Inter', system-ui, sans-serif",
      label: "Inter",
      group: "bundled"
    },
    {
      value: "'Open Sans', system-ui, sans-serif",
      label: "Open Sans",
      group: "bundled"
    },
    {
      value: "'Montserrat', system-ui, sans-serif",
      label: "Montserrat",
      group: "bundled"
    },
    {
      value: "'Merriweather', Georgia, serif",
      label: "Merriweather",
      group: "bundled"
    },
    {
      value: "'Playfair Display', Georgia, serif",
      label: "Playfair Display",
      group: "bundled"
    },
    {
      value: "'Roboto Slab', Georgia, serif",
      label: "Roboto Slab",
      group: "bundled"
    },
    {
      value: "'JetBrains Mono', ui-monospace, monospace",
      label: "JetBrains Mono",
      group: "bundled"
    },
    {
      value: "'Oswald', system-ui, sans-serif",
      label: "Oswald",
      group: "bundled"
    },
    {
      value: "'Nunito', system-ui, sans-serif",
      label: "Nunito",
      group: "bundled"
    },
    {
      value: "'Roboto', system-ui, sans-serif",
      label: "Roboto",
      group: "bundled"
    },
    {
      value: "'Arial', sans-serif",
      label: "Arial",
      group: "system"
    },
    {
      value: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      label: "Helvetica",
      group: "system"
    },
    {
      value: "'Segoe UI', sans-serif",
      label: "Segoe UI",
      group: "system"
    },
    {
      value: "'Verdana', sans-serif",
      label: "Verdana",
      group: "system"
    },
    {
      value: "'Tahoma', sans-serif",
      label: "Tahoma",
      group: "system"
    },
    {
      value: "'Trebuchet MS', sans-serif",
      label: "Trebuchet MS",
      group: "system"
    },
    {
      value: "'Calibri', sans-serif",
      label: "Calibri",
      group: "system"
    },
    {
      value: "'Georgia', serif",
      label: "Georgia",
      group: "system"
    },
    {
      value: "'Times New Roman', Times, serif",
      label: "Times New Roman",
      group: "system"
    },
    {
      value: "'Palatino Linotype', Palatino, serif",
      label: "Palatino",
      group: "system"
    },
    {
      value: "'Garamond', serif",
      label: "Garamond",
      group: "system"
    },
    {
      value: "'Cambria', serif",
      label: "Cambria",
      group: "system"
    },
    {
      value: "'Courier New', monospace",
      label: "Courier New",
      group: "system"
    },
    {
      value: "'Consolas', monospace",
      label: "Consolas",
      group: "system"
    },
    {
      value: "'Lucida Console', monospace",
      label: "Lucida Console",
      group: "system"
    },
    {
      value: "system-ui, sans-serif",
      label: "System UI",
      group: "system"
    },
    {
      value: "sans-serif",
      label: "Sans-serif",
      group: "system"
    },
    {
      value: 'Georgia, "Times New Roman", serif',
      label: "Serif",
      group: "system"
    },
    {
      value: "ui-monospace, monospace",
      label: "Monospace",
      group: "system"
    }
  ];
  S1 = Ii.filter((A) => A.group === "bundled");
  I1 = Ii.filter((A) => A.group === "system");
  Vm = "__custom__";
  function $m(A) {
    if (!A) return [];
    const e = Ii.find((t) => t.value === A);
    return e && e.group === "bundled" ? [
      e.label
    ] : [];
  }
  x1 = function(A) {
    return A ? Ii.some((e) => e.value === A) ? A : Vm : "";
  };
  const cc = "data-collection-google-fonts", Wm = "https://fonts.googleapis.com/css2";
  H1 = async function(A) {
    const e = A.trim().replace(/\s+/g, "+");
    if (!e) throw new Error("Empty font name");
    const t = `${Wm}?family=${e}&display=swap`, r = await fetch(t);
    if (!r.ok) throw new Error(`Google Fonts CSS request failed (${r.status})`);
    const n = await r.text(), o = /@font-face\s*\{([^}]*)\}/g, i = [];
    let a;
    for (; (a = o.exec(n)) !== null; ) i.push(a[1]);
    const s = /\/\*\s*latin\s*\*\/\s*@font-face\s*\{([^}]*)\}/g, l = [];
    for (; (a = s.exec(n)) !== null; ) l.push(a[1]);
    l.length === 0 && l.push(...i.filter((u) => /unicode-range:[^;}]*0000-00FF/i.test(u))), l.length === 0 && l.push(...i);
    const c = [];
    for (const u of l) {
      const d = u.match(/font-weight:\s*(\d+)/), f = u.match(/src:\s*url\(([^)]+)\)/);
      if (!f) continue;
      const p = d ? Number(d[1]) : 400, B = await Xm(f[1]);
      c.push({
        weight: p,
        data: B
      });
    }
    if (c.length === 0) throw new Error(`No latin face found for "${A}"`);
    return c;
  };
  async function Xm(A) {
    const e = await fetch(A);
    if (!e.ok) throw new Error(`Font file request failed (${e.status})`);
    const t = await e.arrayBuffer();
    return `data:font/woff2;base64,${Jm(t)}`;
  }
  function Jm(A) {
    const e = new Uint8Array(A), t = 32768;
    let r = "";
    for (let n = 0; n < e.length; n += t) {
      const o = e.subarray(n, n + t);
      r += String.fromCharCode(...o);
    }
    return btoa(r);
  }
  Ym = function(A) {
    if (typeof document > "u") return;
    let e = document.querySelector(`style[${cc}]`);
    if (e || (e = document.createElement("style"), e.setAttribute(cc, ""), document.head.appendChild(e)), !A) {
      e.textContent = "";
      return;
    }
    const t = Object.entries(A);
    if (t.length === 0) {
      e.textContent = "";
      return;
    }
    const r = t.map(([n, o]) => o.map((i) => `@font-face{font-family:'${n}';font-style:normal;font-display:swap;font-weight:${i.weight};src:url(${i.data}) format("woff2")}`).join("")).join("");
    e.textContent = r;
  };
  const qA = {
    kind: "color",
    optional: true
  }, we = {
    kind: "cssObject",
    optional: true
  }, lr = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          light: qA,
          main: {
            kind: "color",
            required: true
          },
          dark: qA,
          contrastText: qA
        }
      },
      {
        kind: "record",
        optional: true,
        values: qA
      }
    ]
  }, zm = {
    kind: "object",
    optional: true,
    allowUnknown: "warn",
    properties: {
      mode: {
        kind: "literal",
        values: [
          "light",
          "dark"
        ],
        optional: true
      },
      primary: lr,
      secondary: lr,
      error: lr,
      warning: lr,
      info: lr,
      success: lr,
      text: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          primary: qA,
          secondary: qA,
          disabled: qA
        }
      },
      background: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          default: qA,
          paper: qA
        }
      },
      common: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          black: qA,
          white: qA
        }
      },
      grey: {
        kind: "record",
        optional: true,
        values: qA
      },
      divider: qA,
      contrastThreshold: {
        kind: "number",
        optional: true
      },
      tonalOffset: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "number"
          },
          {
            kind: "object",
            optional: true,
            allowUnknown: "warn",
            properties: {
              light: {
                kind: "number",
                optional: true
              },
              dark: {
                kind: "number",
                optional: true
              }
            }
          }
        ]
      },
      action: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          active: qA,
          hover: qA,
          hoverOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          selected: qA,
          selectedOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabled: qA,
          disabledOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabledBackground: qA,
          focus: qA,
          focusOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          activatedOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          }
        }
      }
    }
  }, jm = {
    kind: "object",
    optional: true,
    allowUnknown: "warn",
    properties: {
      fontFamily: {
        kind: "string",
        optional: true
      },
      fontSize: {
        kind: "number",
        optional: true,
        min: 1,
        max: 100
      },
      htmlFontSize: {
        kind: "number",
        optional: true,
        min: 1,
        max: 100
      },
      fontWeightLight: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      fontWeightRegular: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      fontWeightMedium: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      fontWeightBold: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      allVariants: we,
      h1: we,
      h2: we,
      h3: we,
      h4: we,
      h5: we,
      h6: we,
      subtitle1: we,
      subtitle2: we,
      body1: we,
      body2: we,
      caption: we,
      button: we,
      overline: we
    }
  }, Zm = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "boolean"
      },
      {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          cssVarPrefix: {
            kind: "string",
            optional: true
          },
          colorSchemeSelector: {
            kind: "string",
            optional: true
          },
          rootSelector: {
            kind: "string",
            optional: true
          },
          disableCssColorScheme: {
            kind: "boolean",
            optional: true
          },
          shouldSkipGeneratingVar: {
            kind: "record",
            optional: true,
            values: {
              kind: "string",
              optional: true
            }
          }
        }
      }
    ]
  }, qm = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "number"
      },
      {
        kind: "string"
      },
      {
        kind: "array",
        optional: true,
        items: {
          kind: "union",
          options: [
            {
              kind: "number"
            },
            {
              kind: "string"
            }
          ]
        }
      }
    ]
  }, AC = {
    kind: "record",
    optional: true,
    values: {
      kind: "object",
      optional: true,
      allowUnknown: "ignore",
      properties: {
        defaultProps: {
          kind: "object",
          optional: true,
          allowUnknown: "ignore",
          properties: {}
        },
        styleOverrides: we,
        variants: {
          kind: "array",
          optional: true,
          items: {
            kind: "object",
            optional: true,
            allowUnknown: "ignore",
            properties: {}
          }
        }
      }
    }
  }, Gn = {
    kind: "object",
    optional: true,
    allowUnknown: "ignore",
    properties: {}
  }, eC = {
    kind: "object",
    allowUnknown: "warn",
    properties: {
      palette: zm,
      typography: jm,
      shape: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          borderRadius: {
            kind: "number",
            optional: true,
            min: 0,
            max: Pr
          }
        }
      },
      direction: {
        kind: "literal",
        values: [
          "ltr",
          "rtl"
        ],
        optional: true
      },
      spacing: qm,
      cssVariables: Zm,
      zIndex: {
        kind: "record",
        optional: true,
        values: {
          kind: "number",
          optional: true
        }
      },
      shadows: {
        kind: "array",
        optional: true,
        items: {
          kind: "string"
        }
      },
      mixins: Gn,
      transitions: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          duration: Gn,
          easing: Gn
        }
      },
      breakpoints: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          values: Gn,
          unit: {
            kind: "string",
            optional: true
          },
          step: {
            kind: "number",
            optional: true
          }
        }
      },
      components: AC,
      googleFonts: {
        kind: "record",
        optional: true,
        values: {
          kind: "array",
          items: {
            kind: "object",
            allowUnknown: "ignore",
            properties: {
              weight: {
                kind: "number",
                optional: true
              },
              data: {
                kind: "string"
              }
            }
          }
        }
      },
      corners: {
        kind: "object",
        optional: true,
        allowUnknown: "ignore",
        properties: {
          topLeft: {
            kind: "number",
            optional: true,
            min: 0,
            max: Pr
          },
          topRight: {
            kind: "number",
            optional: true,
            min: 0,
            max: Pr
          },
          bottomRight: {
            kind: "number",
            optional: true,
            min: 0,
            max: Pr
          },
          bottomLeft: {
            kind: "number",
            optional: true,
            min: 0,
            max: Pr
          }
        }
      },
      unstable_strictMode: {
        kind: "boolean",
        optional: true
      },
      modularCssLayers: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "boolean"
          },
          {
            kind: "string"
          }
        ]
      }
    }
  };
  tC = function(A) {
    const e = [];
    if (A == null) return {
      isValid: true,
      theme: {},
      issues: e
    };
    if (!ht(A)) return e.push({
      path: "",
      severity: "error",
      code: "invalid-shape",
      message: "Theme must be a plain object."
    }), {
      isValid: false,
      issues: e
    };
    if (Object.keys(A).length === 0) return {
      isValid: true,
      theme: {},
      issues: e
    };
    xn(A, eC, "", e);
    const t = !e.some((r) => r.severity === "error");
    return {
      isValid: t,
      theme: t ? A : void 0,
      issues: e
    };
  };
  function xn(A, e, t, r) {
    if (typeof A == "function" || typeof A == "symbol") {
      r.push({
        path: t,
        severity: "error",
        message: `Value at "${t}" is a ${typeof A}, which is not serializable.`
      });
      return;
    }
    switch (e.kind) {
      case "object":
        rC(A, e, t, r);
        break;
      case "string":
        typeof A != "string" && ut(t, "string", A, r);
        break;
      case "number":
        nC(A, e, t, r);
        break;
      case "boolean":
        typeof A != "boolean" && ut(t, "boolean", A, r);
        break;
      case "color":
        lC(A) || ut(t, "color", A, r, "invalid-color");
        break;
      case "literal":
        e.values.includes(A) || r.push({
          path: t,
          severity: "error",
          message: `Value at "${t}" must be one of: ${e.values.join(", ")}.`
        });
        break;
      case "union":
        oC(A, e.options, t, r);
        break;
      case "array":
        iC(A, e.items, t, r);
        break;
      case "record":
        aC(A, e.values, t, r);
        break;
      case "cssObject":
        kd(A, t, r);
        break;
    }
  }
  function rC(A, e, t, r) {
    if (!ht(A)) {
      ut(t, "object", A, r);
      return;
    }
    const n = e.allowUnknown ?? "warn";
    for (const o of Object.keys(A)) {
      const i = t ? `${t}.${o}` : o, a = e.properties[o], s = A[o];
      a ? xn(s, a, i, r) : typeof s == "function" || typeof s == "symbol" ? r.push({
        path: i,
        severity: "error",
        message: `Value at "${i}" is a ${typeof s}, which is not serializable.`
      }) : n === "warn" ? r.push({
        path: i,
        severity: "warning",
        code: "unknown-key",
        message: `Unknown theme option "${i}" \u2014 it may be ignored by MUI.`
      }) : n === "error" && r.push({
        path: i,
        severity: "error",
        code: "unknown-key",
        message: `Unknown theme option "${i}".`
      });
    }
    for (const [o, i] of Object.entries(e.properties)) if (i.required && !(o in A)) {
      const a = t ? `${t}.${o}` : o;
      r.push({
        path: a,
        severity: "error",
        message: `Missing required option "${a}".`
      });
    }
  }
  function nC(A, e, t, r) {
    if (typeof A != "number" || Number.isNaN(A)) {
      ut(t, "number", A, r, "invalid-number");
      return;
    }
    e.min !== void 0 && A < e.min && r.push({
      path: t,
      severity: "error",
      code: "number-out-of-range",
      message: `Value at "${t}" must be >= ${e.min}.`
    }), e.max !== void 0 && A > e.max && r.push({
      path: t,
      severity: "error",
      code: "number-out-of-range",
      message: `Value at "${t}" must be <= ${e.max}.`
    });
  }
  function oC(A, e, t, r) {
    for (const n of e) {
      const o = [];
      if (xn(A, n, t, o), !o.some((i) => i.severity === "error")) {
        r.push(...o);
        return;
      }
    }
    ut(t, "one of the allowed types", A, r);
  }
  function iC(A, e, t, r) {
    if (!Array.isArray(A)) {
      ut(t, "array", A, r);
      return;
    }
    A.forEach((n, o) => {
      xn(n, e, `${t}[${o}]`, r);
    });
  }
  function aC(A, e, t, r) {
    if (!ht(A)) {
      ut(t, "object", A, r);
      return;
    }
    for (const n of Object.keys(A)) xn(A[n], e, t ? `${t}.${n}` : n, r);
  }
  function kd(A, e, t) {
    if (typeof A == "function" || typeof A == "symbol") {
      t.push({
        path: e,
        severity: "error",
        message: `Value at "${e}" is a ${typeof A}, which is not serializable.`
      });
      return;
    }
    if (!(typeof A == "string" || typeof A == "number")) {
      if (ht(A)) {
        for (const r of Object.keys(A)) kd(A[r], e ? `${e}.${r}` : r, t);
        return;
      }
      ut(e, "CSS value", A, t);
    }
  }
  function ut(A, e, t, r, n = "invalid-type") {
    const o = t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    r.push({
      path: A,
      severity: "error",
      code: n,
      message: `Value at "${A}" must be a ${e} (got ${o}).`
    });
  }
  const sC = /\b(?:linear|radial|conic)-gradient\b/i;
  function lC(A) {
    if (typeof A != "string") return false;
    const e = A.trim();
    return !e || sC.test(e) ? false : typeof CSS < "u" && typeof CSS.supports == "function" ? CSS.supports("color", e) : true;
  }
  function cC() {
    return Wf(Hm, Em);
  }
  const uC = [
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
    "button",
    "caption",
    "overline",
    "inherit"
  ], dC = [
    "breakpoints",
    "direction",
    "palette",
    "shape",
    "shadows",
    "transitions",
    "typography",
    "zIndex"
  ], fC = [
    "getContrastText",
    "augmentColor"
  ];
  function gC(A) {
    const e = {};
    for (const n of dC) {
      const o = A[n];
      o !== void 0 && (e[n] = o);
    }
    const { typography: t } = A;
    if (t) {
      const n = {
        ...t
      };
      for (const o of uC) delete n[o];
      delete n.pxToRem, e.typography = n;
    }
    const { palette: r } = A;
    if (r) {
      const n = {
        ...r
      };
      for (const o of fC) delete n[o];
      e.palette = n;
    }
    return e;
  }
  pC = function(A, e, t) {
    const [r, n] = BA("");
    lA(() => {
      let u = true;
      const d = (f, p) => {
        u && n(typeof (p == null ? void 0 : p.val) == "string" ? p.val : "");
      };
      return A.getState(sr).then((f) => {
        u && n(typeof (f == null ? void 0 : f.val) == "string" ? f.val : "");
      }).catch((f) => console.error(`Cannot read theme state ${sr}: ${f}`)), A.subscribeState(sr, d).catch((f) => console.error(`Cannot subscribe theme state ${sr}: ${f}`)), () => {
        u = false;
        try {
          A.unsubscribeState(sr, d);
        } catch (f) {
          console.error(`Cannot unsubscribe theme state ${sr}: ${f}`);
        }
      };
    }, [
      A
    ]);
    const o = ee(() => {
      if (!r) return {};
      try {
        const u = tC(JSON.parse(r));
        return u.isValid ? u.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      r
    ]), i = cC(), a = i ?? o;
    lA(() => {
      Ym(a.googleFonts);
    }, [
      a.googleFonts
    ]);
    const s = zt(a, "typography.fontFamily");
    lA(() => {
      Gm($m(s));
    }, [
      s
    ]);
    const l = ee(() => JSON.stringify(o), [
      o
    ]), c = oA(o);
    return lA(() => {
      const u = c.current !== o;
      c.current = o, i && u && Sm() === l && xm();
    }, [
      i,
      o,
      l
    ]), ee(() => {
      const u = gC(e), d = zt(u, "palette.primary.main"), f = _m(Pm(a), d), p = jA(jA(u, t ?? {}), f), B = zt(p, "corners"), y = Tm(B), h = y ? jA(p, {
        shape: {
          borderRadius: (B == null ? void 0 : B.topLeft) ?? 4
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: y
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: y
              }
            }
          }
        }
      }) : p;
      return Fm(h);
    }, [
      e,
      t,
      a
    ]);
  };
  let Co, Od;
  Co = (A) => A.startsWith("&") || A.includes(" ") || A.startsWith("@") ? A : A.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
  Od = (A) => {
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      if (Array.isArray(r)) {
        const n = r.filter((o) => o != null);
        return [
          Co(t),
          n.length > 0 ? n : void 0
        ];
      }
      return typeof r == "object" && r !== null ? [
        Co(t),
        Od(r)
      ] : [
        Co(t),
        r
      ];
    }).filter(([, t]) => t != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  uc = (A) => {
    if (!A) return {};
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      const n = Co(t);
      if (Array.isArray(r)) {
        const o = r.filter((i) => i != null);
        return [
          n,
          o.length > 0 ? o : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const o = Od(r);
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
  BC = et({});
  function hC({ children: A, context: e }) {
    const t = e.theme, r = e.widget, n = e.socket, { fontStyles: o, textStyles: i } = ym(r.style || {}), a = ee(() => ({
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...uc(o),
              ...uc(i)
            }
          }
        }
      }
    }), [
      o,
      i
    ]), s = pC(n, t, a);
    return oe(yh, {
      theme: s,
      children: [
        V(md, {
          styles: {
            html: {
              boxSizing: "border-box"
            },
            "*, *::before, *::after": {
              boxSizing: "inherit"
            }
          }
        }),
        V(BC.Provider, {
          value: {
            ...e,
            theme: s
          },
          children: A
        })
      ]
    });
  }
  function wC(A, e) {
    return V(hC, {
      context: e,
      children: A
    });
  }
  T1 = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    renderWithProvider(e, t, r) {
      t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true;
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
        wrappedContent: this.wrappedCollectionContent,
        ...r
      };
      return wC(this.wrapContent(e), n);
    }
    wrapContent(e) {
      return V(Xf, {
        children: V(Jl, {
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
          children: V(Jl, {
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
  var Kd = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(w, F) {
        if (w = w || "", F = F || {}, w instanceof l) return w;
        if (!(this instanceof l)) return new l(w, F);
        var Q = c(w);
        this._originalInput = w, this._r = Q.r, this._g = Q.g, this._b = Q.b, this._a = Q.a, this._roundA = o(100 * this._a) / 100, this._format = F.format || Q.format, this._gradientType = F.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = Q.ok, this._tc_id = n++;
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
          var w = this.toRgb();
          return (w.r * 299 + w.g * 587 + w.b * 114) / 1e3;
        },
        getLuminance: function() {
          var w = this.toRgb(), F, Q, M, $, P, sA;
          return F = w.r / 255, Q = w.g / 255, M = w.b / 255, F <= 0.03928 ? $ = F / 12.92 : $ = e.pow((F + 0.055) / 1.055, 2.4), Q <= 0.03928 ? P = Q / 12.92 : P = e.pow((Q + 0.055) / 1.055, 2.4), M <= 0.03928 ? sA = M / 12.92 : sA = e.pow((M + 0.055) / 1.055, 2.4), 0.2126 * $ + 0.7152 * P + 0.0722 * sA;
        },
        setAlpha: function(w) {
          return this._a = D(w), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var w = p(this._r, this._g, this._b);
          return {
            h: w.h * 360,
            s: w.s,
            v: w.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var w = p(this._r, this._g, this._b), F = o(w.h * 360), Q = o(w.s * 100), M = o(w.v * 100);
          return this._a == 1 ? "hsv(" + F + ", " + Q + "%, " + M + "%)" : "hsva(" + F + ", " + Q + "%, " + M + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var w = d(this._r, this._g, this._b);
          return {
            h: w.h * 360,
            s: w.s,
            l: w.l,
            a: this._a
          };
        },
        toHslString: function() {
          var w = d(this._r, this._g, this._b), F = o(w.h * 360), Q = o(w.s * 100), M = o(w.l * 100);
          return this._a == 1 ? "hsl(" + F + ", " + Q + "%, " + M + "%)" : "hsla(" + F + ", " + Q + "%, " + M + "%, " + this._roundA + ")";
        },
        toHex: function(w) {
          return y(this._r, this._g, this._b, w);
        },
        toHexString: function(w) {
          return "#" + this.toHex(w);
        },
        toHex8: function(w) {
          return h(this._r, this._g, this._b, this._a, w);
        },
        toHex8String: function(w) {
          return "#" + this.toHex8(w);
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
          return this._a === 0 ? "transparent" : this._a < 1 ? false : W[y(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(w) {
          var F = "#" + b(this._r, this._g, this._b, this._a), Q = F, M = this._gradientType ? "GradientType = 1, " : "";
          if (w) {
            var $ = l(w);
            Q = "#" + b($._r, $._g, $._b, $._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + M + "startColorstr=" + F + ",endColorstr=" + Q + ")";
        },
        toString: function(w) {
          var F = !!w;
          w = w || this._format;
          var Q = false, M = this._a < 1 && this._a >= 0, $ = !F && M && (w === "hex" || w === "hex6" || w === "hex3" || w === "hex4" || w === "hex8" || w === "name");
          return $ ? w === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (w === "rgb" && (Q = this.toRgbString()), w === "prgb" && (Q = this.toPercentageRgbString()), (w === "hex" || w === "hex6") && (Q = this.toHexString()), w === "hex3" && (Q = this.toHexString(true)), w === "hex4" && (Q = this.toHex8String(true)), w === "hex8" && (Q = this.toHex8String()), w === "name" && (Q = this.toName()), w === "hsl" && (Q = this.toHslString()), w === "hsv" && (Q = this.toHsvString()), Q || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(w, F) {
          var Q = w.apply(null, [
            this
          ].concat([].slice.call(F)));
          return this._r = Q._r, this._g = Q._g, this._b = Q._b, this.setAlpha(Q._a), this;
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
          return this._applyModification(m, arguments);
        },
        saturate: function() {
          return this._applyModification(v, arguments);
        },
        greyscale: function() {
          return this._applyModification(U, arguments);
        },
        spin: function() {
          return this._applyModification(x, arguments);
        },
        _applyCombination: function(w, F) {
          return w.apply(null, [
            this
          ].concat([].slice.call(F)));
        },
        analogous: function() {
          return this._applyCombination(N, arguments);
        },
        complement: function() {
          return this._applyCombination(g, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(O, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(k, arguments);
        },
        triad: function() {
          return this._applyCombination(H, arguments);
        },
        tetrad: function() {
          return this._applyCombination(K, arguments);
        }
      }, l.fromRatio = function(w, F) {
        if (typeof w == "object") {
          var Q = {};
          for (var M in w) w.hasOwnProperty(M) && (M === "a" ? Q[M] = w[M] : Q[M] = Y(w[M]));
          w = Q;
        }
        return l(w, F);
      };
      function c(w) {
        var F = {
          r: 0,
          g: 0,
          b: 0
        }, Q = 1, M = null, $ = null, P = null, sA = false, cA = false;
        return typeof w == "string" && (w = nA(w)), typeof w == "object" && (J(w.r) && J(w.g) && J(w.b) ? (F = u(w.r, w.g, w.b), sA = true, cA = String(w.r).substr(-1) === "%" ? "prgb" : "rgb") : J(w.h) && J(w.s) && J(w.v) ? (M = Y(w.s), $ = Y(w.v), F = B(w.h, M, $), sA = true, cA = "hsv") : J(w.h) && J(w.s) && J(w.l) && (M = Y(w.s), P = Y(w.l), F = f(w.h, M, P), sA = true, cA = "hsl"), w.hasOwnProperty("a") && (Q = w.a)), Q = D(Q), {
          ok: sA,
          format: w.format || cA,
          r: i(255, a(F.r, 0)),
          g: i(255, a(F.g, 0)),
          b: i(255, a(F.b, 0)),
          a: Q
        };
      }
      function u(w, F, Q) {
        return {
          r: X(w, 255) * 255,
          g: X(F, 255) * 255,
          b: X(Q, 255) * 255
        };
      }
      function d(w, F, Q) {
        w = X(w, 255), F = X(F, 255), Q = X(Q, 255);
        var M = a(w, F, Q), $ = i(w, F, Q), P, sA, cA = (M + $) / 2;
        if (M == $) P = sA = 0;
        else {
          var gA = M - $;
          switch (sA = cA > 0.5 ? gA / (2 - M - $) : gA / (M + $), M) {
            case w:
              P = (F - Q) / gA + (F < Q ? 6 : 0);
              break;
            case F:
              P = (Q - w) / gA + 2;
              break;
            case Q:
              P = (w - F) / gA + 4;
              break;
          }
          P /= 6;
        }
        return {
          h: P,
          s: sA,
          l: cA
        };
      }
      function f(w, F, Q) {
        var M, $, P;
        w = X(w, 360), F = X(F, 100), Q = X(Q, 100);
        function sA(Z, ae, pA) {
          return pA < 0 && (pA += 1), pA > 1 && (pA -= 1), pA < 1 / 6 ? Z + (ae - Z) * 6 * pA : pA < 1 / 2 ? ae : pA < 2 / 3 ? Z + (ae - Z) * (2 / 3 - pA) * 6 : Z;
        }
        if (F === 0) M = $ = P = Q;
        else {
          var cA = Q < 0.5 ? Q * (1 + F) : Q + F - Q * F, gA = 2 * Q - cA;
          M = sA(gA, cA, w + 1 / 3), $ = sA(gA, cA, w), P = sA(gA, cA, w - 1 / 3);
        }
        return {
          r: M * 255,
          g: $ * 255,
          b: P * 255
        };
      }
      function p(w, F, Q) {
        w = X(w, 255), F = X(F, 255), Q = X(Q, 255);
        var M = a(w, F, Q), $ = i(w, F, Q), P, sA, cA = M, gA = M - $;
        if (sA = M === 0 ? 0 : gA / M, M == $) P = 0;
        else {
          switch (M) {
            case w:
              P = (F - Q) / gA + (F < Q ? 6 : 0);
              break;
            case F:
              P = (Q - w) / gA + 2;
              break;
            case Q:
              P = (w - F) / gA + 4;
              break;
          }
          P /= 6;
        }
        return {
          h: P,
          s: sA,
          v: cA
        };
      }
      function B(w, F, Q) {
        w = X(w, 360) * 6, F = X(F, 100), Q = X(Q, 100);
        var M = e.floor(w), $ = w - M, P = Q * (1 - F), sA = Q * (1 - $ * F), cA = Q * (1 - (1 - $) * F), gA = M % 6, Z = [
          Q,
          sA,
          P,
          P,
          cA,
          Q
        ][gA], ae = [
          cA,
          Q,
          Q,
          sA,
          P,
          P
        ][gA], pA = [
          P,
          P,
          cA,
          Q,
          Q,
          sA
        ][gA];
        return {
          r: Z * 255,
          g: ae * 255,
          b: pA * 255
        };
      }
      function y(w, F, Q, M) {
        var $ = [
          _(o(w).toString(16)),
          _(o(F).toString(16)),
          _(o(Q).toString(16))
        ];
        return M && $[0].charAt(0) == $[0].charAt(1) && $[1].charAt(0) == $[1].charAt(1) && $[2].charAt(0) == $[2].charAt(1) ? $[0].charAt(0) + $[1].charAt(0) + $[2].charAt(0) : $.join("");
      }
      function h(w, F, Q, M, $) {
        var P = [
          _(o(w).toString(16)),
          _(o(F).toString(16)),
          _(o(Q).toString(16)),
          _(dA(M))
        ];
        return $ && P[0].charAt(0) == P[0].charAt(1) && P[1].charAt(0) == P[1].charAt(1) && P[2].charAt(0) == P[2].charAt(1) && P[3].charAt(0) == P[3].charAt(1) ? P[0].charAt(0) + P[1].charAt(0) + P[2].charAt(0) + P[3].charAt(0) : P.join("");
      }
      function b(w, F, Q, M) {
        var $ = [
          _(dA(M)),
          _(o(w).toString(16)),
          _(o(F).toString(16)),
          _(o(Q).toString(16))
        ];
        return $.join("");
      }
      l.equals = function(w, F) {
        return !w || !F ? false : l(w).toRgbString() == l(F).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function m(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.s -= F / 100, Q.s = q(Q.s), l(Q);
      }
      function v(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.s += F / 100, Q.s = q(Q.s), l(Q);
      }
      function U(w) {
        return l(w).desaturate(100);
      }
      function C(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.l += F / 100, Q.l = q(Q.l), l(Q);
      }
      function S(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toRgb();
        return Q.r = a(0, i(255, Q.r - o(255 * -(F / 100)))), Q.g = a(0, i(255, Q.g - o(255 * -(F / 100)))), Q.b = a(0, i(255, Q.b - o(255 * -(F / 100)))), l(Q);
      }
      function I(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.l -= F / 100, Q.l = q(Q.l), l(Q);
      }
      function x(w, F) {
        var Q = l(w).toHsl(), M = (Q.h + F) % 360;
        return Q.h = M < 0 ? 360 + M : M, l(Q);
      }
      function g(w) {
        var F = l(w).toHsl();
        return F.h = (F.h + 180) % 360, l(F);
      }
      function H(w) {
        var F = l(w).toHsl(), Q = F.h;
        return [
          l(w),
          l({
            h: (Q + 120) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 240) % 360,
            s: F.s,
            l: F.l
          })
        ];
      }
      function K(w) {
        var F = l(w).toHsl(), Q = F.h;
        return [
          l(w),
          l({
            h: (Q + 90) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 180) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 270) % 360,
            s: F.s,
            l: F.l
          })
        ];
      }
      function k(w) {
        var F = l(w).toHsl(), Q = F.h;
        return [
          l(w),
          l({
            h: (Q + 72) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 216) % 360,
            s: F.s,
            l: F.l
          })
        ];
      }
      function N(w, F, Q) {
        F = F || 6, Q = Q || 30;
        var M = l(w).toHsl(), $ = 360 / Q, P = [
          l(w)
        ];
        for (M.h = (M.h - ($ * F >> 1) + 720) % 360; --F; ) M.h = (M.h + $) % 360, P.push(l(M));
        return P;
      }
      function O(w, F) {
        F = F || 6;
        for (var Q = l(w).toHsv(), M = Q.h, $ = Q.s, P = Q.v, sA = [], cA = 1 / F; F--; ) sA.push(l({
          h: M,
          s: $,
          v: P
        })), P = (P + cA) % 1;
        return sA;
      }
      l.mix = function(w, F, Q) {
        Q = Q === 0 ? 0 : Q || 50;
        var M = l(w).toRgb(), $ = l(F).toRgb(), P = Q / 100, sA = {
          r: ($.r - M.r) * P + M.r,
          g: ($.g - M.g) * P + M.g,
          b: ($.b - M.b) * P + M.b,
          a: ($.a - M.a) * P + M.a
        };
        return l(sA);
      }, l.readability = function(w, F) {
        var Q = l(w), M = l(F);
        return (e.max(Q.getLuminance(), M.getLuminance()) + 0.05) / (e.min(Q.getLuminance(), M.getLuminance()) + 0.05);
      }, l.isReadable = function(w, F, Q) {
        var M = l.readability(w, F), $, P;
        switch (P = false, $ = aA(Q), $.level + $.size) {
          case "AAsmall":
          case "AAAlarge":
            P = M >= 4.5;
            break;
          case "AAlarge":
            P = M >= 3;
            break;
          case "AAAsmall":
            P = M >= 7;
            break;
        }
        return P;
      }, l.mostReadable = function(w, F, Q) {
        var M = null, $ = 0, P, sA, cA, gA;
        Q = Q || {}, sA = Q.includeFallbackColors, cA = Q.level, gA = Q.size;
        for (var Z = 0; Z < F.length; Z++) P = l.readability(w, F[Z]), P > $ && ($ = P, M = l(F[Z]));
        return l.isReadable(w, M, {
          level: cA,
          size: gA
        }) || !sA ? M : (Q.includeFallbackColors = false, l.mostReadable(w, [
          "#fff",
          "#000"
        ], Q));
      };
      var R = l.names = {
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
      }, W = l.hexNames = rA(R);
      function rA(w) {
        var F = {};
        for (var Q in w) w.hasOwnProperty(Q) && (F[w[Q]] = Q);
        return F;
      }
      function D(w) {
        return w = parseFloat(w), (isNaN(w) || w < 0 || w > 1) && (w = 1), w;
      }
      function X(w, F) {
        T(w) && (w = "100%");
        var Q = G(w);
        return w = i(F, a(0, parseFloat(w))), Q && (w = parseInt(w * F, 10) / 100), e.abs(w - F) < 1e-6 ? 1 : w % F / parseFloat(F);
      }
      function q(w) {
        return i(1, a(0, w));
      }
      function tA(w) {
        return parseInt(w, 16);
      }
      function T(w) {
        return typeof w == "string" && w.indexOf(".") != -1 && parseFloat(w) === 1;
      }
      function G(w) {
        return typeof w == "string" && w.indexOf("%") != -1;
      }
      function _(w) {
        return w.length == 1 ? "0" + w : "" + w;
      }
      function Y(w) {
        return w <= 1 && (w = w * 100 + "%"), w;
      }
      function dA(w) {
        return e.round(parseFloat(w) * 255).toString(16);
      }
      function iA(w) {
        return tA(w) / 255;
      }
      var AA = (function() {
        var w = "[-\\+]?\\d+%?", F = "[-\\+]?\\d*\\.\\d+%?", Q = "(?:" + F + ")|(?:" + w + ")", M = "[\\s|\\(]+(" + Q + ")[,|\\s]+(" + Q + ")[,|\\s]+(" + Q + ")\\s*\\)?", $ = "[\\s|\\(]+(" + Q + ")[,|\\s]+(" + Q + ")[,|\\s]+(" + Q + ")[,|\\s]+(" + Q + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(Q),
          rgb: new RegExp("rgb" + M),
          rgba: new RegExp("rgba" + $),
          hsl: new RegExp("hsl" + M),
          hsla: new RegExp("hsla" + $),
          hsv: new RegExp("hsv" + M),
          hsva: new RegExp("hsva" + $),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function J(w) {
        return !!AA.CSS_UNIT.exec(w);
      }
      function nA(w) {
        w = w.replace(t, "").replace(r, "").toLowerCase();
        var F = false;
        if (R[w]) w = R[w], F = true;
        else if (w == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var Q;
        return (Q = AA.rgb.exec(w)) ? {
          r: Q[1],
          g: Q[2],
          b: Q[3]
        } : (Q = AA.rgba.exec(w)) ? {
          r: Q[1],
          g: Q[2],
          b: Q[3],
          a: Q[4]
        } : (Q = AA.hsl.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          l: Q[3]
        } : (Q = AA.hsla.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          l: Q[3],
          a: Q[4]
        } : (Q = AA.hsv.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          v: Q[3]
        } : (Q = AA.hsva.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          v: Q[3],
          a: Q[4]
        } : (Q = AA.hex8.exec(w)) ? {
          r: tA(Q[1]),
          g: tA(Q[2]),
          b: tA(Q[3]),
          a: iA(Q[4]),
          format: F ? "name" : "hex8"
        } : (Q = AA.hex6.exec(w)) ? {
          r: tA(Q[1]),
          g: tA(Q[2]),
          b: tA(Q[3]),
          format: F ? "name" : "hex"
        } : (Q = AA.hex4.exec(w)) ? {
          r: tA(Q[1] + "" + Q[1]),
          g: tA(Q[2] + "" + Q[2]),
          b: tA(Q[3] + "" + Q[3]),
          a: iA(Q[4] + "" + Q[4]),
          format: F ? "name" : "hex8"
        } : (Q = AA.hex3.exec(w)) ? {
          r: tA(Q[1] + "" + Q[1]),
          g: tA(Q[2] + "" + Q[2]),
          b: tA(Q[3] + "" + Q[3]),
          format: F ? "name" : "hex"
        } : false;
      }
      function aA(w) {
        var F, Q;
        return w = w || {
          level: "AA",
          size: "small"
        }, F = (w.level || "AA").toUpperCase(), Q = (w.size || "small").toLowerCase(), F !== "AA" && F !== "AAA" && (F = "AA"), Q !== "small" && Q !== "large" && (Q = "small"), {
          level: F,
          size: Q
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(Kd);
  var mC = Kd.exports;
  ue = Cu(mC);
  var mr = function() {
    return mr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, mr.apply(this, arguments);
  }, CC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, vC = function(A) {
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
    function t(T) {
      var G = new Error(A + ": " + T);
      throw G;
    }
    function r(T) {
      A = A.substr(T);
    }
    function n(T) {
      var G = /^[\n\r\t\s]+/.exec(A);
      G && r(G[0].length);
      var _ = T.exec(A);
      return _ && r(_[0].length), _;
    }
    function o(T) {
      var G = T(), _ = [];
      if (G) for (_.push(G); n(e.comma); ) G = T(), G ? _.push(G) : t("One extra comma");
      return _;
    }
    function i(T, G, _) {
      var Y = n(G);
      if (Y) return {
        type: T,
        value: Y[_]
      };
    }
    function a() {
      var T = i("hex", e.hexColor, 1);
      if (T == null ? void 0 : T.value) {
        var G = ue(T == null ? void 0 : T.value).toRgb(), _ = G.r, Y = G.g, dA = G.b, iA = G.a;
        return {
          value: "rgba(".concat(_, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    var s = function(T) {
      var G = Nt(T == null ? void 0 : T[0]);
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(o(W), ")")
      };
    };
    function l(T, G) {
      var _ = n(T);
      if (_) {
        n(e.startCall) || t("Missing (");
        var Y = G(_);
        return n(e.endCall) || t("Missing )"), Y;
      }
    }
    function c() {
      return l(e.hslColor, rA);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, X);
    }
    function f() {
      var T = i("literal", e.literalColor, 0);
      if (T == null ? void 0 : T.value) {
        var G = ue(T == null ? void 0 : T.value).toRgb(), _ = G.r, Y = G.g, dA = G.b, iA = G.a;
        return {
          value: "rgba(".concat(_, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    function p() {
      return l(e.hsvColor, D);
    }
    function B() {
      return a() || c() || u() || d() || f() || p();
    }
    function y() {
      var T, G = B();
      return G || t("Expected color definition"), G.left = parseInt((T = q()) === null || T === void 0 ? void 0 : T.value), G;
    }
    function h(T, G, _) {
      return l(G, function() {
        var Y = _();
        return Y && (n(e.comma) || t("Missing comma before color stops")), {
          type: T,
          orientation: Y,
          colorStops: o(y)
        };
      });
    }
    function b() {
      return C() || S();
    }
    function m() {
      return h("linear-gradient", e.linearGradient, b) || h("repeating-linear-gradient", e.repeatingLinearGradient, b) || h("radial-gradient", e.radialGradient, I) || h("repeating-radial-gradient", e.repeatingRadialGradient, I);
    }
    function v() {
      return o(m);
    }
    function U() {
      var T, G = v();
      A.length > 0 && t("Invalid input not EOF");
      var _ = G[0], Y = (T = _ == null ? void 0 : _.colorStops) === null || T === void 0 ? void 0 : T.filter(function(iA) {
        return Nt(iA.value);
      }).length, dA = function() {
        if (Y > 0) return _;
        var iA = function(AA, J) {
          return J === 0 ? xi(AA) : Hn(AA);
        };
        return mr(mr({}, _), {
          colorStops: _.colorStops.map(function(AA, J) {
            return mr(mr({}, AA), {
              value: iA(AA, J)
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
      var T, G = x(), _;
      return G && (T = [], T.push(G), _ = A, n(e.comma) && (G = x(), G ? T.push(G) : A = _)), T;
    }
    function x() {
      var T = H() || K();
      if (T) T.at = N();
      else {
        var G = k();
        if (G) {
          T = G;
          var _ = N();
          _ && (T.at = _);
        } else {
          var Y = O();
          Y && (T = {
            type: "default-radial",
            at: Y
          });
        }
      }
      return T;
    }
    function g() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function H() {
      var T = i("shape", /^(circle)/i, 0);
      return T && (T.style = g() || k()), T;
    }
    function K() {
      var T = i("shape", /^(ellipse)/i, 0);
      return T && (T.style = q() || k()), T;
    }
    function k() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function N() {
      if (i("position", /^at/, 0)) {
        var T = O();
        return T || t("Missing positioning value"), T;
      }
    }
    function O() {
      var T = R();
      if (T.x || T.y) return {
        type: "position",
        value: T
      };
    }
    function R() {
      return {
        x: q(),
        y: q()
      };
    }
    function W() {
      return n(e.number)[1];
    }
    var rA = function(T) {
      var G = Nt(T == null ? void 0 : T[0]), _ = o(W), Y = ue({
        h: _[0],
        s: _[1],
        l: _[2],
        a: _[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, AA = Y.b, J = Y.a;
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(AA, ", ").concat(J, ")")
      };
    }, D = function(T) {
      var G = Nt(T == null ? void 0 : T[0]), _ = o(W), Y = ue({
        h: _[0],
        s: _[1],
        v: _[2],
        a: _[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, AA = Y.b, J = Y.a;
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(AA, ", ").concat(J, ")")
      };
    }, X = function(T) {
      var G = Nt(T == null ? void 0 : T[0]), _ = n(e.spacedRgbColor), Y = _ || CC([
        null
      ], o(W), true), dA = Y[1], iA = Y[2], AA = Y[3], J = Y[4], nA = J === void 0 ? 1 : J;
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(AA, ", ").concat(nA, ")")
      };
    };
    function q() {
      return i("%", e.percentageValue, 1) || tA() || g();
    }
    function tA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, Hn = function(A) {
    return A.value.toLowerCase();
  }, xi = function(A) {
    return A.value.toUpperCase();
  }, yC = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = vC(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, Er = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, Ze = function(A) {
    return Math.round(A);
  }, To = function() {
    return To = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, To.apply(this, arguments);
  }, Rd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function Sr(A, e) {
    var t = Rd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = Er(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function QC(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var bC = function(A) {
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
  function FC(A, e) {
    var t = Rd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = bC(A), s = a.clientX, l = a.clientY, c = function() {
      var d = s - r - e / 2;
      return Er(d, -9, o - 10);
    }, u = function() {
      var d = l - n - e / 2;
      return Er(d, -9, i - 10);
    };
    return [
      c(),
      u()
    ];
  }
  var Nt = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, Dd = function(A) {
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
  }, UC = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, f) {
        return (d == null ? void 0 : d.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = Dd((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, EC = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return To(To({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return Nt(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, SC = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return Dd(r);
  }, IC = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = SC(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, me = function() {
    return me = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, me.apply(this, arguments);
  }, xC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Md = et(null);
  function HC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, f = A.passedConfig, p = A.defaultStyles, B = A.pickerIdSuffix, y = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : Vn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : Vn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : Vn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : Vn.defaultGradient
    }, h = yC(o, y.defaultColor, y.defaultGradient), b = IC(o), m = b.degrees, v = b.degreeStr, U = b.isGradient, C = b.gradientType, S = EC(h, y.defaultGradient), I = S.currentColor, x = S.selectedColor, g = S.currentLeft, H = BA("rgb"), K = H[0], k = H[1], N = BA({}), O = N[0], R = N[1], W = ue(I), rA = W.toRgb(), D = W.toHsv(), X = BA(me(me({}, rA), D)), q = X[0], tA = X[1];
    lA(function() {
      (D == null ? void 0 : D.s) === 0 ? tA(me(me(me({}, rA), D), {
        h: q == null ? void 0 : q.h
      })) : tA(me(me({}, rA), D));
    }, [
      I
    ]);
    var T = function(iA) {
      var AA = iA.sort(function(aA, w) {
        return aA.left - w.left;
      }), J = AA == null ? void 0 : AA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), nA = "".concat(C, "(").concat(v, ", ").concat(J.join(", "), ")");
      R(me(me({}, O), {
        gradient: nA
      })), a(nA);
    }, G = function(iA, AA) {
      var J = h == null ? void 0 : h.filter(function(aA) {
        return !Nt(aA.value);
      }), nA = xC([
        {
          value: iA.toUpperCase(),
          left: AA ?? g
        }
      ], J, true);
      T(nA);
    }, _ = function(iA) {
      U ? G(iA) : (R(me(me({}, O), {
        color: iA
      })), a(iA));
    }, Y = function() {
      if ((h == null ? void 0 : h.length) > 2) {
        var iA = h == null ? void 0 : h.map(function(J, nA) {
          return me(me({}, J), {
            value: nA === x - 1 ? xi(J) : Hn(J)
          });
        }), AA = iA == null ? void 0 : iA.filter(function(J, nA) {
          return nA !== x;
        });
        T(AA);
      }
    }, dA = {
      hc: q,
      setHc: tA,
      value: o,
      colors: h,
      config: y,
      degrees: m,
      onChange: a,
      previous: O,
      inputType: K,
      tinyColor: W,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: g,
      deletePoint: Y,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: k,
      gradientType: C,
      handleChange: _,
      currentColor: I,
      selectedColor: x,
      defaultStyles: p,
      handleGradient: G,
      pickerIdSuffix: B,
      createGradientStr: T
    };
    return E.createElement(Md.Provider, {
      value: dA
    }, i);
  }
  function UA() {
    var A = De(Md);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var Vn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, TC = function(A, e) {
    lA(function() {
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
  }, LC = function(A, e, t, r) {
    lA(function() {
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
  }, kC = function(A, e, t, r) {
    lA(function() {
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
  }, OC = function(A, e, t, r) {
    lA(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = ue({
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
  }, Lo = function() {
    return Lo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Lo.apply(this, arguments);
  }, KC = function() {
    var A = oA(null), e = UA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = BA(false), l = s[0], c = s[1], u = t.barSize;
    TC(A, n);
    var d = function() {
      c(false);
    }, f = function() {
      c(true);
    }, p = function(h) {
      var b = Sr(h, u) * 3.6, m = ue({
        h: b,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = m.toRgb(), U = v.r, C = v.g, S = v.b;
      r("rgba(".concat(U, ", ").concat(C, ", ").concat(S, ", ").concat(o.a, ")")), i(Lo(Lo({}, o), {
        h: b
      }));
    }, B = function(h) {
      l && p(h);
    }, y = function(h) {
      l || p(h);
    };
    return lA(function() {
      var h = function() {
        d();
      };
      return window.addEventListener("mouseup", h), function() {
        window.removeEventListener("mouseup", h);
      };
    }, []), E.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(h) {
        return B(h);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, E.createElement("div", {
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
    }), E.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(h) {
        return y(h);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function RC(A, e, t) {
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
  var DC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, MC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Re = function() {
    return Re = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Re.apply(this, arguments);
  }, ye = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = BA(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    lA(function() {
      u(t);
    }, [
      t
    ]);
    var f = function(p) {
      var B = Er(parseFloat(p.target.value), 0, o);
      u(B), r(B);
    };
    return E.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, E.createElement("input", {
      value: c,
      onChange: function(p) {
        return f(p);
      },
      style: Re({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), E.createElement("div", {
      style: Re({}, a.rbgcpInputLabel)
    }, e));
  }, PC = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = BA(""), s = a[0], l = a[1], c = t.toHex(), u = BA(c), d = u[0], f = u[1];
    lA(function() {
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
      var U = ue(v.target.value);
      if (f(v.target.value), U.isValid()) {
        var C = U.toRgb(), S = C.r, I = C.g, x = C.b, g = "rgba(".concat(S, ", ").concat(I, ", ").concat(x, ", ").concat(e, ")");
        n(g);
      }
    }, h = r ? "".concat(d).concat(MC(e)) : d, b = r ? "HEXA" : "HEX", m = r ? 88 : 76;
    return E.createElement("div", {
      style: {
        width: m,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, E.createElement("input", {
      onBlur: B,
      onFocus: p,
      onChange: function(v) {
        return y(v);
      },
      value: h == null ? void 0 : h.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Re(Re({}, o.rbgcpInput), o.rbgcpHexInput)
    }), E.createElement("div", {
      style: Re({}, o.rbgcpInputLabel)
    }, b));
  }, _C = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(ye, {
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
    }), E.createElement(ye, {
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
    }), E.createElement(ye, {
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
  }, NC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(f, p, B) {
      var y = ue({
        h: f,
        s: p,
        l: B
      }).toRgb(), h = y.r, b = y.g, m = y.b;
      o("rgba(".concat(h, ", ").concat(b, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")")), t(Re(Re({}, e), {
        h: f
      }));
    }, d = function(f) {
      var p = ue(f).toRgb(), B = p.r, y = p.g, h = p.b;
      o("rgba(".concat(B, ", ").concat(y, ", ").concat(h, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(ye, {
      label: "H",
      max: 360,
      value: Ze(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u(f, l, c);
      }
    }), E.createElement(ye, {
      label: "S",
      value: Ze(l * 100),
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
    }), E.createElement(ye, {
      label: "L",
      value: Ze(c * 100),
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
  }, GC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = ue({
        h: l,
        s: c,
        v: u
      }).toRgb(), f = d.r, p = d.g, B = d.b;
      n("rgba(".concat(f, ", ").concat(p, ", ").concat(B, ", ").concat(e == null ? void 0 : e.a, ")")), t(Re(Re({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = ue(l).toRgb(), u = c.r, d = c.g, f = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(ye, {
      label: "H",
      max: 360,
      value: Ze(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), E.createElement(ye, {
      label: "S",
      hideOpacity: r,
      value: Ze((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), E.createElement(ye, {
      label: "V",
      hideOpacity: r,
      value: Ze((e == null ? void 0 : e.v) * 100),
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
  }, VC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = RC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var f = DC(d), p = f.r, B = f.g, y = f.b;
      r("rgba(".concat(p, ", ").concat(B, ", ").concat(y, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(ye, {
      label: "C",
      value: Ze(a * 100),
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
    }), E.createElement(ye, {
      label: "M",
      value: Ze(s * 100),
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
    }), E.createElement(ye, {
      label: "Y",
      value: Ze(l * 100),
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
    }), E.createElement(ye, {
      label: "K",
      value: Ze(c * 100),
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
  }, $C = function() {
    var A = UA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return E.createElement("div", {
      style: Re({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && E.createElement(PC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && E.createElement(NC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && E.createElement(_C, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && E.createElement(GC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && E.createElement(VC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && E.createElement(ye, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, WC = function(A, e, t, r) {
    lA(function() {
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
  }, Pd = "Expected a function", dc = NaN, XC = "[object Symbol]", JC = /^\s+|\s+$/g, YC = /^[-+]0x[0-9a-f]+$/i, zC = /^0b[01]+$/i, jC = /^0o[0-7]+$/i, ZC = parseInt, qC = typeof On == "object" && On && On.Object === Object && On, Av = typeof self == "object" && self && self.Object === Object && self, ev = qC || Av || Function("return this")(), tv = Object.prototype, rv = tv.toString, nv = Math.max, ov = Math.min, Zi = function() {
    return ev.Date.now();
  };
  function iv(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(Pd);
    e = fc(e) || 0, ko(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? nv(fc(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function f(C) {
      var S = r, I = n;
      return r = n = void 0, l = C, i = A.apply(I, S), i;
    }
    function p(C) {
      return l = C, a = setTimeout(h, e), c ? f(C) : i;
    }
    function B(C) {
      var S = C - s, I = C - l, x = e - S;
      return u ? ov(x, o - I) : x;
    }
    function y(C) {
      var S = C - s, I = C - l;
      return s === void 0 || S >= e || S < 0 || u && I >= o;
    }
    function h() {
      var C = Zi();
      if (y(C)) return b(C);
      a = setTimeout(h, B(C));
    }
    function b(C) {
      return a = void 0, d && r ? f(C) : (r = n = void 0, i);
    }
    function m() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : b(Zi());
    }
    function U() {
      var C = Zi(), S = y(C);
      if (r = arguments, n = this, s = C, S) {
        if (a === void 0) return p(s);
        if (u) return a = setTimeout(h, e), f(s);
      }
      return a === void 0 && (a = setTimeout(h, e)), i;
    }
    return U.cancel = m, U.flush = v, U;
  }
  function av(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(Pd);
    return ko(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), iv(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function ko(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function sv(A) {
    return !!A && typeof A == "object";
  }
  function lv(A) {
    return typeof A == "symbol" || sv(A) && rv.call(A) == XC;
  }
  function fc(A) {
    if (typeof A == "number") return A;
    if (lv(A)) return dc;
    if (ko(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = ko(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(JC, "");
    var t = zC.test(A);
    return t || jC.test(A) ? ZC(A.slice(2), t ? 2 : 8) : YC.test(A) ? dc : +A;
  }
  var cv = av;
  const uv = Cu(cv);
  var Gt = function() {
    return Gt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Gt.apply(this, arguments);
  }, dv = function() {
    var A, e, t = UA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = BA(false), d = u[0], f = u[1], p = oA(null), B = QC(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), y = B[0], h = B[1], b = BA({
      x: y,
      y: h
    }), m = b[0], v = b[1];
    WC(p, r == null ? void 0 : r.h, o, i), lA(function() {
      d || v({
        x: (r == null ? void 0 : r.v) === 0 ? m.x : y,
        y: h
      });
    }, [
      y,
      h
    ]);
    var U = function(H) {
      var K = uv(function() {
        var k = FC(H, c), N = k[0], O = k[1];
        if (N && O) {
          var R = Math.min(N + c / 2, o - 1), W = Math.min(O + c / 2, i - 1), rA = R / o * 100, D = 100 - W / i * 100;
          v({
            x: D === 0 ? m == null ? void 0 : m.x : N,
            y: O
          });
          var X = ue("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(rA, "%, ").concat(D, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(X.toRgbString());
        }
      }, 250);
      K();
    }, C = function() {
      f(false);
    }, S = function(H) {
      d && U(H);
    }, I = function(H) {
      d || U(H);
    }, x = function() {
      f(true);
    }, g = function(H) {
      f(true), U(H);
    };
    return lA(function() {
      var H = function() {
        C();
      };
      return window.addEventListener("mouseup", H), function() {
        window.removeEventListener("mouseup", H);
      };
    }, []), E.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, E.createElement("div", {
      onMouseUp: C,
      onTouchEnd: C,
      onMouseDown: g,
      onTouchStart: g,
      onMouseMove: function(H) {
        return S(H);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, E.createElement("div", {
      style: Gt(Gt(Gt({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = m == null ? void 0 : m.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = m == null ? void 0 : m.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: x,
      id: "rbgcp-square-handle".concat(l)
    }), E.createElement("div", {
      style: Gt(Gt({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(H) {
        return I(H);
      }
    }, E.createElement("canvas", {
      ref: p,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, Qt = function() {
    return Qt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Qt.apply(this, arguments);
  }, fv = function() {
    var A = UA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = BA(false), l = s[0], c = s[1], u = r.r, d = r.g, f = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(f, ",.5) 100%)"), B = e.barSize, y = function() {
      c(false);
    }, h = function() {
      c(true);
    }, b = function(C) {
      var S = Sr(C, B) / 100, I = "rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(S, ")");
      o(I);
    }, m = function(C) {
      l && b(C);
    }, v = function(C) {
      l || b(C);
    }, U = n - 18;
    return lA(function() {
      var C = function() {
        y();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), E.createElement("div", {
      onMouseDown: h,
      onMouseMove: function(C) {
        return m(C);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, E.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: Qt(Qt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), E.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: Qt(Qt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), E.createElement("div", {
      style: Qt(Qt({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(C) {
        return v(C);
      }
    }));
  }, gv = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, pv = [
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
  ], Bv = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = UA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : pv;
    }, u = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, d = function(f) {
      if (!f || i) return "";
      var p = f == null ? void 0 : f.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return E.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, E.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), E.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, p) {
      return E.createElement("div", {
        key: "".concat(f, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, E.createElement("div", {
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
  }, eA = function() {
    return eA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, eA.apply(this, arguments);
  }, hv = function() {
    var A = UA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, E.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, wv = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, E.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, mv = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, E.createElement("circle", {
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), E.createElement("circle", {
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, Cv = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, E.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), E.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), E.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), E.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), E.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), E.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, vv = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, yv = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), E.createElement("path", {
      style: eA(eA(eA(eA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, Qv = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, E.createElement("polyline", {
      strokeLinecap: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), E.createElement("polyline", {
      strokeLinecap: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, bv = function() {
    var A = UA().defaultStyles;
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, Fv = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = oA((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = BA(!n.current.parentElement)[0];
    return lA(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), mu(t, n.current);
  };
  const Uv = wu(Fv);
  var Va = function(A, e) {
    return Va = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Va(A, e);
  };
  function Ge(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Va(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var $a = function() {
    return $a = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, $a.apply(this, arguments);
  };
  function Ce(A, e, t, r) {
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
  function pe(A, e) {
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
  function $n(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var wt = (function() {
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
  })(), Hi = function(A, e) {
    return wt.fromClientRect(A, e.getBoundingClientRect());
  }, Ev = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new wt(0, 0, r, n);
  }, Ti = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, $A = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, gc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Sv = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Wn = 0; Wn < gc.length; Wn++) Sv[gc.charCodeAt(Wn)] = Wn;
  var pc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Yr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Xn = 0; Xn < pc.length; Xn++) Yr[pc.charCodeAt(Xn)] = Xn;
  var Iv = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Yr[A.charCodeAt(r)], i = Yr[A.charCodeAt(r + 1)], a = Yr[A.charCodeAt(r + 2)], s = Yr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, xv = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Hv = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, jt = 5, qs = 11, qi = 2, Tv = qs - jt, _d = 65536 >> jt, Lv = 1 << jt, Aa = Lv - 1, kv = 1024 >> jt, Ov = _d + kv, Kv = Ov, Rv = 32, Dv = Kv + Rv, Mv = 65536 >> qs, Pv = 1 << Tv, _v = Pv - 1, Bc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Nv = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Gv = function(A, e) {
    var t = Iv(A), r = Array.isArray(t) ? Hv(t) : new Uint32Array(t), n = Array.isArray(t) ? xv(t) : new Uint16Array(t), o = 24, i = Bc(n, o / 2, r[4] / 2), a = r[5] === 2 ? Bc(n, (o + r[4]) / 2) : Nv(r, Math.ceil((o + r[4]) / 4));
    return new Vv(r[0], r[1], r[2], r[3], i, a);
  }, Vv = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> jt], t = (t << qi) + (e & Aa), this.data[t];
        if (e <= 65535) return t = this.index[_d + (e - 55296 >> jt)], t = (t << qi) + (e & Aa), this.data[t];
        if (e < this.highStart) return t = Dv - Mv + (e >> qs), t = this.index[t], t += e >> jt & _v, t = this.index[t], t = (t << qi) + (e & Aa), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), hc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $v = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Jn = 0; Jn < hc.length; Jn++) $v[hc.charCodeAt(Jn)] = Jn;
  var Wv = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", wc = 50, Xv = 1, Nd = 2, Gd = 3, Jv = 4, Yv = 5, mc = 7, Vd = 8, Cc = 9, Ft = 10, Wa = 11, vc = 12, Xa = 13, zv = 14, zr = 15, Ja = 16, Yn = 17, _r = 18, jv = 19, yc = 20, Ya = 21, Nr = 22, ea = 23, cr = 24, Fe = 25, jr = 26, Zr = 27, ur = 28, Zv = 29, Vt = 30, qv = 31, zn = 32, jn = 33, za = 34, ja = 35, Za = 36, hn = 37, qa = 38, vo = 39, yo = 40, ta = 41, $d = 42, Ay = 43, ey = [
    9001,
    65288
  ], Wd = "!", hA = "\xD7", Zn = "\xF7", As = Gv(Wv), lt = [
    Vt,
    Za
  ], es = [
    Xv,
    Nd,
    Gd,
    Yv
  ], Xd = [
    Ft,
    Vd
  ], Qc = [
    Zr,
    jr
  ], ty = es.concat(Xd), bc = [
    qa,
    vo,
    yo,
    za,
    ja
  ], ry = [
    zr,
    Xa
  ], ny = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = As.get(o);
      if (a > wc ? (n.push(true), a -= wc) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ja);
      if (a === Jv || a === Wa) {
        if (i === 0) return r.push(i), t.push(Vt);
        var s = t[i - 1];
        return ty.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(Vt));
      }
      if (r.push(i), a === qv) return t.push(e === "strict" ? Ya : hn);
      if (a === $d || a === Zv) return t.push(Vt);
      if (a === Ay) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(hn) : t.push(Vt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, ra = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== Ft) break;
    }
    if (n === Ft) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var s = t; s <= r.length; ) {
        s++;
        var i = r[s];
        if (i === e) return true;
        if (i !== Ft) break;
      }
      if (a !== Ft) break;
    }
    return false;
  }, Fc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === Ft) t--;
      else return r;
    }
    return 0;
  }, oy = function(A, e, t, r, n) {
    if (t[r] === 0) return hA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return hA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === Nd && c === Gd) return hA;
    if (es.indexOf(s) !== -1) return Wd;
    if (es.indexOf(c) !== -1 || Xd.indexOf(c) !== -1) return hA;
    if (Fc(o, e) === Vd) return Zn;
    if (As.get(A[o]) === Wa || (s === zn || s === jn) && As.get(A[a]) === Wa || s === mc || c === mc || s === Cc || [
      Ft,
      Xa,
      zr
    ].indexOf(s) === -1 && c === Cc || [
      Yn,
      _r,
      jv,
      cr,
      ur
    ].indexOf(c) !== -1 || Fc(o, e) === Nr || ra(ea, Nr, o, e) || ra([
      Yn,
      _r
    ], Ya, o, e) || ra(vc, vc, o, e)) return hA;
    if (s === Ft) return Zn;
    if (s === ea || c === ea) return hA;
    if (c === Ja || s === Ja) return Zn;
    if ([
      Xa,
      zr,
      Ya
    ].indexOf(c) !== -1 || s === zv || l === Za && ry.indexOf(s) !== -1 || s === ur && c === Za || c === yc || lt.indexOf(c) !== -1 && s === Fe || lt.indexOf(s) !== -1 && c === Fe || s === Zr && [
      hn,
      zn,
      jn
    ].indexOf(c) !== -1 || [
      hn,
      zn,
      jn
    ].indexOf(s) !== -1 && c === jr || lt.indexOf(s) !== -1 && Qc.indexOf(c) !== -1 || Qc.indexOf(s) !== -1 && lt.indexOf(c) !== -1 || [
      Zr,
      jr
    ].indexOf(s) !== -1 && (c === Fe || [
      Nr,
      zr
    ].indexOf(c) !== -1 && e[a + 1] === Fe) || [
      Nr,
      zr
    ].indexOf(s) !== -1 && c === Fe || s === Fe && [
      Fe,
      ur,
      cr
    ].indexOf(c) !== -1) return hA;
    if ([
      Fe,
      ur,
      cr,
      Yn,
      _r
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === Fe) return hA;
      if ([
        ur,
        cr
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      Zr,
      jr
    ].indexOf(c) !== -1) for (var u = [
      Yn,
      _r
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === Fe) return hA;
      if ([
        ur,
        cr
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (qa === s && [
      qa,
      vo,
      za,
      ja
    ].indexOf(c) !== -1 || [
      vo,
      za
    ].indexOf(s) !== -1 && [
      vo,
      yo
    ].indexOf(c) !== -1 || [
      yo,
      ja
    ].indexOf(s) !== -1 && c === yo || bc.indexOf(s) !== -1 && [
      yc,
      jr
    ].indexOf(c) !== -1 || bc.indexOf(c) !== -1 && s === Zr || lt.indexOf(s) !== -1 && lt.indexOf(c) !== -1 || s === cr && lt.indexOf(c) !== -1 || lt.concat(Fe).indexOf(s) !== -1 && c === Nr && ey.indexOf(A[a]) === -1 || lt.concat(Fe).indexOf(c) !== -1 && s === _r) return hA;
    if (s === ta && c === ta) {
      for (var f = t[o], p = 1; f > 0 && (f--, e[f] === ta); ) p++;
      if (p % 2 !== 0) return hA;
    }
    return s === zn && c === jn ? hA : Zn;
  }, iy = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = ny(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Fe,
        Vt,
        $d
      ].indexOf(a) !== -1 ? hn : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, ay = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Wd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return $A.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), sy = function(A, e) {
    var t = Ti(A), r = iy(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = hA; l < a && (c = oy(t, o, n, ++l, i)) === hA; ) ;
        if (c !== hA || l === a) {
          var u = new ay(t, c, s, l);
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
  }, ly = 1, cy = 2, Tn = 4, Uc = 8, Oo = 10, Ec = 47, on = 92, uy = 9, dy = 32, qn = 34, Gr = 61, fy = 35, gy = 36, py = 37, Ao = 39, eo = 40, Vr = 41, By = 95, ve = 45, hy = 33, wy = 60, my = 62, Cy = 64, vy = 91, yy = 93, Qy = 61, by = 123, to = 63, Fy = 125, Sc = 124, Uy = 126, Ey = 128, Ic = 65533, na = 42, Jt = 43, Sy = 44, Iy = 58, xy = 59, wn = 46, Hy = 0, Ty = 8, Ly = 11, ky = 14, Oy = 31, Ky = 127, We = -1, Jd = 48, Yd = 97, zd = 101, Ry = 102, Dy = 117, My = 122, jd = 65, Zd = 69, qd = 70, Py = 85, _y = 90, Be = function(A) {
    return A >= Jd && A <= 57;
  }, Ny = function(A) {
    return A >= 55296 && A <= 57343;
  }, dr = function(A) {
    return Be(A) || A >= jd && A <= qd || A >= Yd && A <= Ry;
  }, Gy = function(A) {
    return A >= Yd && A <= My;
  }, Vy = function(A) {
    return A >= jd && A <= _y;
  }, $y = function(A) {
    return Gy(A) || Vy(A);
  }, Wy = function(A) {
    return A >= Ey;
  }, ro = function(A) {
    return A === Oo || A === uy || A === dy;
  }, Ko = function(A) {
    return $y(A) || Wy(A) || A === By;
  }, xc = function(A) {
    return Ko(A) || Be(A) || A === ve;
  }, Xy = function(A) {
    return A >= Hy && A <= Ty || A === Ly || A >= ky && A <= Oy || A === Ky;
  }, bt = function(A, e) {
    return A !== on ? false : e !== Oo;
  }, no = function(A, e, t) {
    return A === ve ? Ko(e) || bt(e, t) : Ko(A) ? true : !!(A === on && bt(A, e));
  }, oa = function(A, e, t) {
    return A === Jt || A === ve ? Be(e) ? true : e === wn && Be(t) : Be(A === wn ? e : A);
  }, Jy = function(A) {
    var e = 0, t = 1;
    (A[e] === Jt || A[e] === ve) && (A[e] === ve && (t = -1), e++);
    for (var r = []; Be(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt($A.apply(void 0, r), 10) : 0;
    A[e] === wn && e++;
    for (var o = []; Be(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt($A.apply(void 0, o), 10) : 0;
    (A[e] === Zd || A[e] === zd) && e++;
    var s = 1;
    (A[e] === Jt || A[e] === ve) && (A[e] === ve && (s = -1), e++);
    for (var l = []; Be(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt($A.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, Yy = {
    type: 2
  }, zy = {
    type: 3
  }, jy = {
    type: 4
  }, Zy = {
    type: 13
  }, qy = {
    type: 8
  }, AQ = {
    type: 21
  }, eQ = {
    type: 9
  }, tQ = {
    type: 10
  }, rQ = {
    type: 11
  }, nQ = {
    type: 12
  }, oQ = {
    type: 14
  }, oo = {
    type: 23
  }, iQ = {
    type: 1
  }, aQ = {
    type: 25
  }, sQ = {
    type: 24
  }, lQ = {
    type: 26
  }, cQ = {
    type: 27
  }, uQ = {
    type: 28
  }, dQ = {
    type: 29
  }, fQ = {
    type: 31
  }, ts = {
    type: 32
  }, Af = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Ti(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== ts; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case qn:
          return this.consumeStringToken(qn);
        case fy:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (xc(t) || bt(r, n)) {
            var o = no(t, r, n) ? cy : ly, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case gy:
          if (this.peekCodePoint(0) === Gr) return this.consumeCodePoint(), Zy;
          break;
        case Ao:
          return this.consumeStringToken(Ao);
        case eo:
          return Yy;
        case Vr:
          return zy;
        case na:
          if (this.peekCodePoint(0) === Gr) return this.consumeCodePoint(), oQ;
          break;
        case Jt:
          if (oa(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Sy:
          return jy;
        case ve:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (oa(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (no(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === ve && l === my) return this.consumeCodePoint(), this.consumeCodePoint(), sQ;
          break;
        case wn:
          if (oa(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Ec:
          if (this.peekCodePoint(0) === na) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === na && (c = this.consumeCodePoint(), c === Ec)) return this.consumeToken();
            if (c === We) return this.consumeToken();
          }
          break;
        case Iy:
          return lQ;
        case xy:
          return cQ;
        case wy:
          if (this.peekCodePoint(0) === hy && this.peekCodePoint(1) === ve && this.peekCodePoint(2) === ve) return this.consumeCodePoint(), this.consumeCodePoint(), aQ;
          break;
        case Cy:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (no(u, d, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case vy:
          return uQ;
        case on:
          if (bt(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case yy:
          return dQ;
        case Qy:
          if (this.peekCodePoint(0) === Gr) return this.consumeCodePoint(), qy;
          break;
        case by:
          return rQ;
        case Fy:
          return nQ;
        case Dy:
        case Py:
          var p = this.peekCodePoint(0), B = this.peekCodePoint(1);
          return p === Jt && (dr(B) || B === to) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Sc:
          if (this.peekCodePoint(0) === Gr) return this.consumeCodePoint(), eQ;
          if (this.peekCodePoint(0) === Sc) return this.consumeCodePoint(), AQ;
          break;
        case Uy:
          if (this.peekCodePoint(0) === Gr) return this.consumeCodePoint(), tQ;
          break;
        case We:
          return ts;
      }
      return ro(e) ? (this.consumeWhiteSpace(), fQ) : Be(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Ko(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: $A(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); dr(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === to && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt($A.apply(void 0, e.map(function(s) {
          return s === to ? Jd : s;
        })), 16), o = parseInt($A.apply(void 0, e.map(function(s) {
          return s === to ? qd : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt($A.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === ve && dr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; dr(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt($A.apply(void 0, a), 16);
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === eo ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === eo ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === We) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === Ao || t === qn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === Vr) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), oo);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === We || n === Vr) return {
          type: 22,
          value: $A.apply(void 0, e)
        };
        if (ro(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === Vr ? (this.consumeCodePoint(), {
          type: 22,
          value: $A.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), oo);
        if (n === qn || n === Ao || n === eo || Xy(n)) return this.consumeBadUrlRemnants(), oo;
        if (n === on) if (bt(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), oo;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; ro(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Vr || e === We) return;
        bt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += $A.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === We || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === Oo) return this._value.splice(0, r), iQ;
        if (n === on) {
          var o = this._value[r + 1];
          o !== We && o !== void 0 && (o === Oo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : bt(n, o) && (t += this.consumeStringSlice(r), t += $A(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = Tn, r = this.peekCodePoint(0);
      for ((r === Jt || r === ve) && e.push(this.consumeCodePoint()); Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === wn && Be(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Uc; Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Zd || r === zd) && ((n === Jt || n === ve) && Be(o) || Be(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Uc; Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        Jy(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (no(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === py ? (this.consumeCodePoint(), {
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
      if (dr(e)) {
        for (var t = $A(e); dr(this.peekCodePoint(0)) && t.length < 6; ) t += $A(this.consumeCodePoint());
        ro(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Ny(r) || r > 1114111 ? Ic : r;
      }
      return e === We ? Ic : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (xc(t)) e += $A(t);
        else if (bt(t, this.peekCodePoint(0))) e += $A(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), ef = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Af();
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
        if (r.type === 32 || pQ(r, e)) return t;
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
      return typeof e > "u" ? ts : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), Ln = function(A) {
    return A.type === 15;
  }, Lr = function(A) {
    return A.type === 17;
  }, FA = function(A) {
    return A.type === 20;
  }, gQ = function(A) {
    return A.type === 0;
  }, rs = function(A, e) {
    return FA(A) && A.value === e;
  }, tf = function(A) {
    return A.type !== 31;
  }, Ir = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, ot = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, pQ = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Ot = function(A) {
    return A.type === 17 || A.type === 15;
  }, zA = function(A) {
    return A.type === 16 || Ot(A);
  }, rf = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, de = {
    type: 17,
    number: 0,
    flags: Tn
  }, Al = {
    type: 16,
    number: 50,
    flags: Tn
  }, Ut = {
    type: 16,
    number: 100,
    flags: Tn
  }, qr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      xA(r, e),
      xA(typeof n < "u" ? n : r, t)
    ];
  }, xA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (Ln(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, nf = "deg", of = "grad", af = "rad", sf = "turn", Li = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case nf:
          return Math.PI * e.number / 180;
        case of:
          return Math.PI / 200 * e.number;
        case af:
          return e.number;
        case sf:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, lf = function(A) {
    return A.type === 15 && (A.unit === nf || A.unit === of || A.unit === af || A.unit === sf);
  }, cf = function(A) {
    var e = A.filter(FA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          de,
          de
        ];
      case "to top":
      case "bottom":
        return ke(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          de,
          Ut
        ];
      case "to right":
      case "left":
        return ke(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          Ut,
          Ut
        ];
      case "to bottom":
      case "top":
        return ke(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          Ut,
          de
        ];
      case "to left":
      case "right":
        return ke(270);
    }
    return 0;
  }, ke = function(A) {
    return Math.PI * A / 180;
  }, xt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = BQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return Et(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return Et(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return Et(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return Et(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = dt[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return dt.TRANSPARENT;
    }
  }, Ht = function(A) {
    return (255 & A) === 0;
  }, re = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, Et = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, Hc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, Tc = function(A, e) {
    var t = e.filter(Ir);
    if (t.length === 3) {
      var r = t.map(Hc), n = r[0], o = r[1], i = r[2];
      return Et(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(Hc), n = a[0], o = a[1], i = a[2], s = a[3];
      return Et(n, o, i, s);
    }
    return 0;
  };
  function ia(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var Lc = function(A, e) {
    var t = e.filter(Ir), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? ke(r.number) : Li.parse(A, r)) / (Math.PI * 2), s = zA(n) ? n.number / 100 : 0, l = zA(o) ? o.number / 100 : 0, c = typeof i < "u" && zA(i) ? xA(i, 1) : 1;
    if (s === 0) return Et(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, f = ia(d, u, a + 1 / 3), p = ia(d, u, a), B = ia(d, u, a - 1 / 3);
    return Et(f * 255, p * 255, B * 255, c);
  }, BQ = {
    hsl: Lc,
    hsla: Lc,
    rgb: Tc,
    rgba: Tc
  }, an = function(A, e) {
    return xt.parse(A, ef.create(e).parseComponentValue());
  }, dt = {
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
  }, hQ = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (FA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, wQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, ki = function(A, e) {
    var t = xt.parse(A, e[0]), r = e[1];
    return r && zA(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, kc = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = de), r.stop === null && (r.stop = Ut);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = xA(a, e);
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
    return A.map(function(B, y) {
      var h = B.color;
      return {
        color: h,
        stop: Math.max(Math.min(1, n[y] / e), 0)
      };
    });
  }, mQ = function(A, e, t) {
    var r = e / 2, n = t / 2, o = xA(A[0], e) - r, i = n - xA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, CQ = function(A, e, t) {
    var r = typeof A == "number" ? A : mQ(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, _e = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, Oc = function(A, e, t, r, n) {
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
      var s = a[0], l = a[1], c = _e(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, vQ = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(_e(e, t), _e(e, t - n), _e(e - r, t), _e(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = Oc(r, n, e, t, true), l = s[0], c = s[1];
          o = _e(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(_e(e, t), _e(e, t - n), _e(e - r, t), _e(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = Oc(r, n, e, t, false), l = u[0], c = u[1];
          o = _e(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = xA(A.size[0], r), i = A.size.length === 2 ? xA(A.size[1], n) : o), [
      o,
      i
    ];
  }, yQ = function(A, e) {
    var t = ke(180), r = [];
    return ot(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = cf(n);
          return;
        } else if (lf(i)) {
          t = Li.parse(A, i);
          return;
        }
      }
      var a = ki(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, io = function(A, e) {
    var t = ke(180), r = [];
    return ot(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = cf(n);
          return;
        } else if (lf(i)) {
          t = (Li.parse(A, i) + ke(270)) % ke(360);
          return;
        }
      }
      var a = ki(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, QQ = function(A, e) {
    var t = ke(180), r = [], n = 1, o = 0, i = 3, a = [];
    return ot(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (FA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (FA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var u = xt.parse(A, c.values[0]);
          r.push({
            stop: de,
            color: u
          });
        } else if (c.name === "to") {
          var u = xt.parse(A, c.values[0]);
          r.push({
            stop: Ut,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(Ir);
          if (d.length === 2) {
            var u = xt.parse(A, d[1]), f = d[0];
            Lr(f) && r.push({
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
      angle: (t + ke(180)) % ke(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, uf = "closest-side", df = "farthest-side", ff = "closest-corner", gf = "farthest-corner", pf = "circle", Bf = "ellipse", hf = "cover", wf = "contain", bQ = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return ot(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (FA(d)) switch (d.value) {
            case "center":
              return o.push(Al), u;
            case "top":
            case "left":
              return o.push(de), u;
            case "right":
            case "bottom":
              return o.push(Ut), u;
          }
          else (zA(d) || Ot(d)) && o.push(d);
          else if (FA(d)) switch (d.value) {
            case pf:
              return t = 0, false;
            case Bf:
              return t = 1, false;
            case "at":
              return l = true, false;
            case uf:
              return r = 0, false;
            case hf:
            case df:
              return r = 1, false;
            case wf:
            case ff:
              return r = 2, false;
            case gf:
              return r = 3, false;
          }
          else if (Ot(d) || zA(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = ki(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, ao = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return ot(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (FA(u)) switch (u.value) {
          case "center":
            return o.push(Al), false;
          case "top":
          case "left":
            return o.push(de), false;
          case "right":
          case "bottom":
            return o.push(Ut), false;
        }
        else if (zA(u) || Ot(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (FA(u)) switch (u.value) {
          case pf:
            return t = 0, false;
          case Bf:
            return t = 1, false;
          case wf:
          case uf:
            return r = 0, false;
          case df:
            return r = 1, false;
          case ff:
            return r = 2, false;
          case hf:
          case gf:
            return r = 3, false;
        }
        else if (Ot(u) || zA(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = ki(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, FQ = function(A) {
    return A.type === 1;
  }, UQ = function(A) {
    return A.type === 2;
  }, el = {
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
        var r = mf[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function EQ(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!mf[A.name]);
  }
  var mf = {
    "linear-gradient": yQ,
    "-moz-linear-gradient": io,
    "-ms-linear-gradient": io,
    "-o-linear-gradient": io,
    "-webkit-linear-gradient": io,
    "radial-gradient": bQ,
    "-moz-radial-gradient": ao,
    "-ms-radial-gradient": ao,
    "-o-radial-gradient": ao,
    "-webkit-radial-gradient": ao,
    "-webkit-gradient": QQ
  }, SQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return Ir(r) && EQ(r);
      }).map(function(r) {
        return el.parse(A, r);
      });
    }
  }, IQ = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (FA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, xQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return ot(e).map(function(t) {
        return t.filter(zA);
      }).map(rf);
    }
  }, HQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return ot(e).map(function(t) {
        return t.filter(FA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(TQ);
    }
  }, TQ = function(A) {
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
  }, br;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(br || (br = {}));
  var LQ = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return ot(e).map(function(t) {
        return t.filter(kQ);
      });
    }
  }, kQ = function(A) {
    return FA(A) || zA(A);
  }, Oi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, OQ = Oi("top"), KQ = Oi("right"), RQ = Oi("bottom"), DQ = Oi("left"), Ki = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return rf(t.filter(zA));
      }
    };
  }, MQ = Ki("top-left"), PQ = Ki("top-right"), _Q = Ki("bottom-right"), NQ = Ki("bottom-left"), Ri = function(A) {
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
  }, GQ = Ri("top"), VQ = Ri("right"), $Q = Ri("bottom"), WQ = Ri("left"), Di = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return Ln(t) ? t.number : 0;
      }
    };
  }, XQ = Di("top"), JQ = Di("right"), YQ = Di("bottom"), zQ = Di("left"), jQ = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, ZQ = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, qQ = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(FA).reduce(function(t, r) {
        return t | Ab(r.value);
      }, 0);
    }
  }, Ab = function(A) {
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
  }, eb = {
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
  }, tb = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, Ro;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(Ro || (Ro = {}));
  var rb = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? Ro.STRICT : Ro.NORMAL;
    }
  }, nb = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, Kc = function(A, e) {
    return FA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : zA(A) ? xA(A, e) : e;
  }, ob = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : el.parse(A, e);
    }
  }, ib = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, ns = {
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
  }, Mi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, ab = Mi("top"), sb = Mi("right"), lb = Mi("bottom"), cb = Mi("left"), ub = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(FA).map(function(t) {
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
  }, db = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, Pi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, fb = Pi("top"), gb = Pi("right"), pb = Pi("bottom"), Bb = Pi("left"), hb = {
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
  }, wb = {
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
  }, mb = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && rs(e[0], "none") ? [] : ot(e).map(function(t) {
        for (var r = {
          color: dt.TRANSPARENT,
          offsetX: de,
          offsetY: de,
          blur: de
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Ot(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = xt.parse(A, i);
        }
        return r;
      });
    }
  }, Cb = {
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
  }, vb = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = bb[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, yb = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, Qb = function(A) {
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
  }, bb = {
    matrix: yb,
    matrix3d: Qb
  }, Rc = {
    type: 16,
    number: 50,
    flags: Tn
  }, Fb = [
    Rc,
    Rc
  ], Ub = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(zA);
      return t.length !== 2 ? Fb : [
        t[0],
        t[1]
      ];
    }
  }, Eb = {
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
  }, sn;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(sn || (sn = {}));
  var Sb = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return sn.BREAK_ALL;
        case "keep-all":
          return sn.KEEP_ALL;
        default:
          return sn.NORMAL;
      }
    }
  }, Ib = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (Lr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, Cf = {
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
  }, xb = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Lr(e) ? e.number : 1;
    }
  }, Hb = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Tb = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(FA).map(function(t) {
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
  }, Lb = {
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
  }, kb = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, Ob = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Lr(e) ? e.number : FA(e) && e.value === "bold" ? 700 : 400;
    }
  }, Kb = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(FA).map(function(t) {
        return t.value;
      });
    }
  }, Rb = {
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
  }, Ae = function(A, e) {
    return (A & e) !== 0;
  }, Db = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, Mb = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(tf), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && Lr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, Pb = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(tf), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (FA(o) && o.value !== "none") {
          var a = i && Lr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, _b = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(Ln).map(function(t) {
        return Cf.parse(A, t);
      });
    }
  }, Nb = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(gQ);
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
  }, Dc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, Gb = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && rs(e[0], "none") ? [] : ot(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: de,
          offsetY: de,
          blur: de,
          spread: de,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          rs(i, "inset") ? r.inset = true : Ot(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = xt.parse(A, i);
        }
        return r;
      });
    }
  }, Vb = {
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
      return e.filter(FA).forEach(function(n) {
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
  }, $b = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, Wb = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Ln(e) ? e.number : 0;
    }
  }, Xb = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = j(e, _b, t.animationDuration), this.backgroundClip = j(e, hQ, t.backgroundClip), this.backgroundColor = j(e, wQ, t.backgroundColor), this.backgroundImage = j(e, SQ, t.backgroundImage), this.backgroundOrigin = j(e, IQ, t.backgroundOrigin), this.backgroundPosition = j(e, xQ, t.backgroundPosition), this.backgroundRepeat = j(e, HQ, t.backgroundRepeat), this.backgroundSize = j(e, LQ, t.backgroundSize), this.borderTopColor = j(e, OQ, t.borderTopColor), this.borderRightColor = j(e, KQ, t.borderRightColor), this.borderBottomColor = j(e, RQ, t.borderBottomColor), this.borderLeftColor = j(e, DQ, t.borderLeftColor), this.borderTopLeftRadius = j(e, MQ, t.borderTopLeftRadius), this.borderTopRightRadius = j(e, PQ, t.borderTopRightRadius), this.borderBottomRightRadius = j(e, _Q, t.borderBottomRightRadius), this.borderBottomLeftRadius = j(e, NQ, t.borderBottomLeftRadius), this.borderTopStyle = j(e, GQ, t.borderTopStyle), this.borderRightStyle = j(e, VQ, t.borderRightStyle), this.borderBottomStyle = j(e, $Q, t.borderBottomStyle), this.borderLeftStyle = j(e, WQ, t.borderLeftStyle), this.borderTopWidth = j(e, XQ, t.borderTopWidth), this.borderRightWidth = j(e, JQ, t.borderRightWidth), this.borderBottomWidth = j(e, YQ, t.borderBottomWidth), this.borderLeftWidth = j(e, zQ, t.borderLeftWidth), this.boxShadow = j(e, Gb, t.boxShadow), this.color = j(e, jQ, t.color), this.direction = j(e, ZQ, t.direction), this.display = j(e, qQ, t.display), this.float = j(e, eb, t.cssFloat), this.fontFamily = j(e, Lb, t.fontFamily), this.fontSize = j(e, kb, t.fontSize), this.fontStyle = j(e, Rb, t.fontStyle), this.fontVariant = j(e, Kb, t.fontVariant), this.fontWeight = j(e, Ob, t.fontWeight), this.letterSpacing = j(e, tb, t.letterSpacing), this.lineBreak = j(e, rb, t.lineBreak), this.lineHeight = j(e, nb, t.lineHeight), this.listStyleImage = j(e, ob, t.listStyleImage), this.listStylePosition = j(e, ib, t.listStylePosition), this.listStyleType = j(e, ns, t.listStyleType), this.marginTop = j(e, ab, t.marginTop), this.marginRight = j(e, sb, t.marginRight), this.marginBottom = j(e, lb, t.marginBottom), this.marginLeft = j(e, cb, t.marginLeft), this.opacity = j(e, xb, t.opacity);
      var o = j(e, ub, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = j(e, db, t.overflowWrap), this.paddingTop = j(e, fb, t.paddingTop), this.paddingRight = j(e, gb, t.paddingRight), this.paddingBottom = j(e, pb, t.paddingBottom), this.paddingLeft = j(e, Bb, t.paddingLeft), this.paintOrder = j(e, Vb, t.paintOrder), this.position = j(e, wb, t.position), this.textAlign = j(e, hb, t.textAlign), this.textDecorationColor = j(e, Hb, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = j(e, Tb, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = j(e, mb, t.textShadow), this.textTransform = j(e, Cb, t.textTransform), this.transform = j(e, vb, t.transform), this.transformOrigin = j(e, Ub, t.transformOrigin), this.visibility = j(e, Eb, t.visibility), this.webkitTextStrokeColor = j(e, $b, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = j(e, Wb, t.webkitTextStrokeWidth), this.wordBreak = j(e, Sb, t.wordBreak), this.zIndex = j(e, Ib, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Ht(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return Ae(this.display, 4) || Ae(this.display, 33554432) || Ae(this.display, 268435456) || Ae(this.display, 536870912) || Ae(this.display, 67108864) || Ae(this.display, 134217728);
    }, A;
  })(), Jb = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = j(e, Db, t.content), this.quotes = j(e, Nb, t.quotes);
    }
    return A;
  })(), Mc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = j(e, Mb, t.counterIncrement), this.counterReset = j(e, Pb, t.counterReset);
    }
    return A;
  })(), j = function(A, e, t) {
    var r = new Af(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new ef(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, FA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return Li.parse(A, o.parseComponentValue());
          case "color":
            return xt.parse(A, o.parseComponentValue());
          case "image":
            return el.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Ot(a) ? a : de;
          case "length-percentage":
            var s = o.parseComponentValue();
            return zA(s) ? s : de;
          case "time":
            return Cf.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, Yb = "data-html2canvas-debug", zb = function(A) {
    var e = A.getAttribute(Yb);
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
  }, os = function(A, e) {
    var t = zb(A);
    return t === 1 || e === t;
  }, it = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, os(t, 3)) debugger;
      this.styles = new Xb(e, window.getComputedStyle(t, null)), ss(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Hi(this.context, t), os(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), jb = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Pc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", An = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var so = 0; so < Pc.length; so++) An[Pc.charCodeAt(so)] = so;
  var Zb = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = An[A.charCodeAt(r)], i = An[A.charCodeAt(r + 1)], a = An[A.charCodeAt(r + 2)], s = An[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, qb = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, AF = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Zt = 5, tl = 11, aa = 2, eF = tl - Zt, vf = 65536 >> Zt, tF = 1 << Zt, sa = tF - 1, rF = 1024 >> Zt, nF = vf + rF, oF = nF, iF = 32, aF = oF + iF, sF = 65536 >> tl, lF = 1 << eF, cF = lF - 1, _c = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, uF = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, dF = function(A, e) {
    var t = Zb(A), r = Array.isArray(t) ? AF(t) : new Uint32Array(t), n = Array.isArray(t) ? qb(t) : new Uint16Array(t), o = 24, i = _c(n, o / 2, r[4] / 2), a = r[5] === 2 ? _c(n, (o + r[4]) / 2) : uF(r, Math.ceil((o + r[4]) / 4));
    return new fF(r[0], r[1], r[2], r[3], i, a);
  }, fF = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Zt], t = (t << aa) + (e & sa), this.data[t];
        if (e <= 65535) return t = this.index[vf + (e - 55296 >> Zt)], t = (t << aa) + (e & sa), this.data[t];
        if (e < this.highStart) return t = aF - sF + (e >> tl), t = this.index[t], t += e >> Zt & cF, t = this.index[t], t = (t << aa) + (e & sa), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Nc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var lo = 0; lo < Nc.length; lo++) gF[Nc.charCodeAt(lo)] = lo;
  var pF = 1, la = 2, ca = 3, Gc = 4, Vc = 5, BF = 7, $c = 8, ua = 9, da = 10, Wc = 11, Xc = 12, Jc = 13, Yc = 14, fa = 15, hF = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, wF = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, mF = dF(jb), xe = "\xD7", ga = "\xF7", CF = function(A) {
    return mF.get(A);
  }, vF = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === la && i === ca) return xe;
    if (o === la || o === ca || o === Gc || i === la || i === ca || i === Gc) return ga;
    if (o === $c && [
      $c,
      ua,
      Wc,
      Xc
    ].indexOf(i) !== -1 || (o === Wc || o === ua) && (i === ua || i === da) || (o === Xc || o === da) && i === da || i === Jc || i === Vc || i === BF || o === pF) return xe;
    if (o === Jc && i === Yc) {
      for (; n === Vc; ) n = e[--r];
      if (n === Yc) return xe;
    }
    if (o === fa && i === fa) {
      for (var a = 0; n === fa; ) a++, n = e[--r];
      if (a % 2 === 0) return xe;
    }
    return ga;
  }, yF = function(A) {
    var e = hF(A), t = e.length, r = 0, n = 0, o = e.map(CF);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = xe; r < t && (i = vF(e, o, ++r)) === xe; ) ;
        if (i !== xe || r === t) {
          var a = wF.apply(null, e.slice(n, r));
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
  }, QF = function(A) {
    for (var e = yF(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, bF = function(A) {
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
  }, FF = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = Ti(r.data).map(function(s) {
      return $A(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, UF = function() {
    return typeof new Image().crossOrigin < "u";
  }, EF = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, SF = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, zc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, IF = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = is(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), jc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", zc(s) ? jc(is(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), zc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, is = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, jc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, le = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = bF(document);
      return Object.defineProperty(le, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = le.SUPPORT_RANGE_BOUNDS && FF(document);
      return Object.defineProperty(le, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = SF(document);
      return Object.defineProperty(le, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? IF(document) : Promise.resolve(false);
      return Object.defineProperty(le, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = UF();
      return Object.defineProperty(le, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = EF();
      return Object.defineProperty(le, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(le, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(le, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, ln = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), xF = function(A, e, t, r) {
    var n = LF(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (le.SUPPORT_RANGE_BOUNDS) {
        var s = Zc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = rl(a), c = 0;
          l.forEach(function(d) {
            o.push(new ln(d, wt.fromDOMRectList(A, Zc(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new ln(a, wt.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new ln(a, HF(A, r))), r = u;
      }
      else le.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, HF = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = Hi(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return wt.EMPTY;
  }, Zc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, rl = function(A) {
    if (le.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return QF(A);
  }, TF = function(A, e) {
    if (le.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return OF(A, e);
  }, LF = function(A, e) {
    return e.letterSpacing !== 0 ? rl(A) : TF(A, e);
  }, kF = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], OF = function(A, e) {
    for (var t = sy(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = Ti(i), s = "";
        a.forEach(function(l) {
          kF.indexOf(l) === -1 ? s += $A(l) : (s.length && r.push(s), r.push($A(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, KF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = RF(t.data, r.textTransform), this.textBounds = xF(e, this.text, r, t);
    }
    return A;
  })(), RF = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(DF, MF);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, DF = /(^|\s|:|-|\(|\))([a-z])/g, MF = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, yf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(it), Qf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(it), bf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = Hi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(it), Ff = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(it), as = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(it), PF = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], _F = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], NF = function(A) {
    return A.width > A.height ? new wt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new wt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, GF = function(A) {
    var e = A.type === VF ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, Do = "checkbox", Mo = "radio", VF = "password", qc = 707406591, nl = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = GF(r), (n.type === Do || n.type === Mo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = NF(n.bounds)), n.type) {
        case Do:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = PF;
          break;
        case Mo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = _F;
          break;
      }
      return n;
    }
    return e;
  })(it), Uf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(it), Ef = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(it), Sf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = xf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? an(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : dt.TRANSPARENT, i = r.contentWindow.document.body ? an(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : dt.TRANSPARENT;
          n.backgroundColor = Ht(o) ? Ht(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(it), $F = [
    "OL",
    "UL",
    "MENU"
  ], Qo = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, Hf(n) && n.data.trim().length > 0) t.textNodes.push(new KF(A, n, t.styles));
    else if (Cr(n)) if (Of(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return Qo(A, a, t, r);
    });
    else {
      var i = If(A, n);
      i.styles.isVisible() && (WF(n, i, r) ? i.flags |= 4 : XF(i.styles) && (i.flags |= 2), $F.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Qo(A, n.shadowRoot, i, r) : !Po(n) && !Tf(n) && !_o(n) && Qo(A, n, i, r));
    }
  }, If = function(A, e) {
    return ls(e) ? new yf(A, e) : Lf(e) ? new Qf(A, e) : Tf(e) ? new bf(A, e) : JF(e) ? new Ff(A, e) : YF(e) ? new as(A, e) : zF(e) ? new nl(A, e) : _o(e) ? new Uf(A, e) : Po(e) ? new Ef(A, e) : kf(e) ? new Sf(A, e) : new it(A, e);
  }, xf = function(A, e) {
    var t = If(A, e);
    return t.flags |= 4, Qo(A, e, t, t), t;
  }, WF = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || ol(A) && t.styles.isTransparent();
  }, XF = function(A) {
    return A.isPositioned() || A.isFloating();
  }, Hf = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, Cr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, ss = function(A) {
    return Cr(A) && typeof A.style < "u" && !bo(A);
  }, bo = function(A) {
    return typeof A.className == "object";
  }, JF = function(A) {
    return A.tagName === "LI";
  }, YF = function(A) {
    return A.tagName === "OL";
  }, zF = function(A) {
    return A.tagName === "INPUT";
  }, jF = function(A) {
    return A.tagName === "HTML";
  }, Tf = function(A) {
    return A.tagName === "svg";
  }, ol = function(A) {
    return A.tagName === "BODY";
  }, Lf = function(A) {
    return A.tagName === "CANVAS";
  }, Au = function(A) {
    return A.tagName === "VIDEO";
  }, ls = function(A) {
    return A.tagName === "IMG";
  }, kf = function(A) {
    return A.tagName === "IFRAME";
  }, eu = function(A) {
    return A.tagName === "STYLE";
  }, ZF = function(A) {
    return A.tagName === "SCRIPT";
  }, Po = function(A) {
    return A.tagName === "TEXTAREA";
  }, _o = function(A) {
    return A.tagName === "SELECT";
  }, Of = function(A) {
    return A.tagName === "SLOT";
  }, tu = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, qF = (function() {
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
  })(), ru = {
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
  }, nu = {
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
  }, AU = {
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
  }, eU = {
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
  }, fr = function(A, e, t, r, n, o) {
    return A < e || A > t ? mn(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, Kf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, VA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (Kf(Math.abs(A), o, r, function(i) {
      return $A(Math.floor(i % o) + e);
    }) + n);
  }, Mt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return Kf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, hr = 1, vt = 2, yt = 4, en = 8, ct = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return mn(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && Ae(o, hr) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && Ae(o, vt) || l === 1 && s === 1 && Ae(o, yt) && A > 100 || l === 1 && s > 1 && Ae(o, en) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, ou = "\u5341\u767E\u5343\u842C", iu = "\u62FE\u4F70\u4EDF\u842C", au = "\u30DE\u30A4\u30CA\u30B9", pa = "\uB9C8\uC774\uB108\uC2A4", mn = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = VA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return Mt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return fr(A, 1, 3999, ru, 3, r).toLowerCase();
      case 7:
        return fr(A, 1, 3999, ru, 3, r);
      case 8:
        return VA(A, 945, 969, false, r);
      case 9:
        return VA(A, 97, 122, false, r);
      case 10:
        return VA(A, 65, 90, false, r);
      case 11:
        return VA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return fr(A, 1, 9999, nu, 3, r);
      case 35:
        return fr(A, 1, 9999, nu, 3, r).toLowerCase();
      case 13:
        return VA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return VA(A, 6112, 6121, true, r);
      case 15:
        return Mt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return Mt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return ct(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", ou, "\u8CA0", n, vt | yt | en);
      case 47:
        return ct(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", iu, "\u8CA0", n, hr | vt | yt | en);
      case 42:
        return ct(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", ou, "\u8D1F", n, vt | yt | en);
      case 41:
        return ct(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", iu, "\u8D1F", n, hr | vt | yt | en);
      case 26:
        return ct(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", au, n, 0);
      case 25:
        return ct(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", au, n, hr | vt | yt);
      case 31:
        return ct(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", pa, o, hr | vt | yt);
      case 33:
        return ct(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", pa, o, 0);
      case 32:
        return ct(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", pa, o, hr | vt | yt);
      case 18:
        return VA(A, 2406, 2415, true, r);
      case 20:
        return fr(A, 1, 19999, eU, 3, r);
      case 21:
        return VA(A, 2790, 2799, true, r);
      case 22:
        return VA(A, 2662, 2671, true, r);
      case 22:
        return fr(A, 1, 10999, AU, 3, r);
      case 23:
        return Mt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return Mt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return VA(A, 3302, 3311, true, r);
      case 28:
        return Mt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return Mt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return VA(A, 3792, 3801, true, r);
      case 37:
        return VA(A, 6160, 6169, true, r);
      case 38:
        return VA(A, 4160, 4169, true, r);
      case 39:
        return VA(A, 2918, 2927, true, r);
      case 40:
        return VA(A, 1776, 1785, true, r);
      case 43:
        return VA(A, 3046, 3055, true, r);
      case 44:
        return VA(A, 3174, 3183, true, r);
      case 45:
        return VA(A, 3664, 3673, true, r);
      case 46:
        return VA(A, 3872, 3881, true, r);
      default:
        return VA(A, 48, 57, true, r);
    }
  }, Rf = "data-html2canvas-ignore", su = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new qF(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = tU(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = oU(n).then(function() {
        return Ce(r, void 0, void 0, function() {
          var c, u;
          return pe(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(lU), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
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
                  nU(s)
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
      return s.open(), s.write(aU(document.doctype) + "<html></html>"), sU(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (os(e, 2)) debugger;
      if (Lf(e)) return this.createCanvasClone(e);
      if (Au(e)) return this.createVideoClone(e);
      if (eu(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return ls(t) && (ls(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), tu(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Ba(e.style, t), t;
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
      (!Cr(t) || !ZF(t) && !t.hasAttribute(Rf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Cr(t) || !eu(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (Cr(o) && Of(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (Hf(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && Cr(e) && (ss(e) || bo(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && ss(n) && (this.clonedReferenceElement = n), ol(n) && dU(n);
        var s = this.counters.parse(new Mc(this.context, o)), l = this.resolvePseudoContent(e, n, i, cn.BEFORE);
        tu(e) && (t = true), Au(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, cn.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || bo(e)) && !kf(e) || t) && Ba(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Po(e) || _o(e)) && (Po(n) || _o(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Mc(this.context, r));
          var s = new Jb(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Ba(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(FA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var p = u.values.filter(Ir), B = p[0], y = p[1];
                if (B && FA(B)) {
                  var h = o.counters.getCounterValue(B.value), b = y && FA(y) ? ns.parse(o.context, y.value) : 3;
                  l.appendChild(a.createTextNode(mn(h, b, false)));
                }
              } else if (u.name === "counters") {
                var m = u.values.filter(Ir), B = m[0], v = m[1], y = m[2];
                if (B && FA(B)) {
                  var U = o.counters.getCounterValues(B.value), C = y && FA(y) ? ns.parse(o.context, y.value) : 3, S = v && v.type === 0 ? v.value : "", I = U.map(function(H) {
                    return mn(H, C, false);
                  }).join(S);
                  l.appendChild(a.createTextNode(I));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(Dc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(Dc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = cs + " " + us;
          var c = n === cn.BEFORE ? " " + cs : " " + us;
          return bo(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), cn;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(cn || (cn = {}));
  var tU = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Rf, "true"), A.body.appendChild(t), t;
  }, rU = function(A) {
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
  }, nU = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(rU));
  }, oU = function(A) {
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
  }, iU = [
    "all",
    "d",
    "content"
  ], Ba = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      iU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, aU = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, sU = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, lU = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, cU = ":before", uU = ":after", cs = "___html2canvas___pseudoelement_before", us = "___html2canvas___pseudoelement_after", lu = `{
    content: "" !important;
    display: none !important;
}`, dU = function(A) {
    fU(A, "." + cs + cU + lu + `
         .` + us + uU + lu);
  }, fU = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, Df = (function() {
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
  })(), gU = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (wa(e) || wU(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return Ce(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return pe(this, function(a) {
          switch (a.label) {
            case 0:
              return t = Df.isSameOrigin(e), r = !ha(e) && this._options.useCORS === true && le.SUPPORT_CORS_IMAGES && !t, n = !ha(e) && !t && !wa(e) && typeof this._options.proxy == "string" && le.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !ha(e) && !wa(e) && !n && !r ? [
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
                  }, c.onerror = l, (mU(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
        var a = le.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
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
  })(), pU = /^data:image\/svg\+xml/i, BU = /^data:image\/.*;base64,/i, hU = /^data:image\/.*/i, wU = function(A) {
    return le.SUPPORT_SVG_DRAWING || !CU(A);
  }, ha = function(A) {
    return hU.test(A);
  }, mU = function(A) {
    return BU.test(A);
  }, wa = function(A) {
    return A.substr(0, 4) === "blob";
  }, CU = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || pU.test(A);
  }, z = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), gr = function(A, e, t) {
    return new z(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, co = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = gr(this.start, this.startControl, e), n = gr(this.startControl, this.endControl, e), o = gr(this.endControl, this.end, e), i = gr(r, n, e), a = gr(n, o, e), s = gr(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Le = function(A) {
    return A.type === 1;
  }, vU = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = qr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = qr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = qr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], f = qr(t.borderBottomLeftRadius, r.width, r.height), p = f[0], B = f[1], y = [];
      y.push((o + s) / r.width), y.push((p + u) / r.width), y.push((i + B) / r.height), y.push((l + d) / r.height);
      var h = Math.max.apply(Math, y);
      h > 1 && (o /= h, i /= h, s /= h, l /= h, u /= h, d /= h, p /= h, B /= h);
      var b = r.width - s, m = r.height - d, v = r.width - u, U = r.height - B, C = t.borderTopWidth, S = t.borderRightWidth, I = t.borderBottomWidth, x = t.borderLeftWidth, g = xA(t.paddingTop, e.bounds.width), H = xA(t.paddingRight, e.bounds.width), K = xA(t.paddingBottom, e.bounds.width), k = xA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? KA(r.left + x / 3, r.top + C / 3, o - x / 3, i - C / 3, QA.TOP_LEFT) : new z(r.left + x / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? KA(r.left + b, r.top + C / 3, s - S / 3, l - C / 3, QA.TOP_RIGHT) : new z(r.left + r.width - S / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u - S / 3, d - I / 3, QA.BOTTOM_RIGHT) : new z(r.left + r.width - S / 3, r.top + r.height - I / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || B > 0 ? KA(r.left + x / 3, r.top + U, p - x / 3, B - I / 3, QA.BOTTOM_LEFT) : new z(r.left + x / 3, r.top + r.height - I / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? KA(r.left + x * 2 / 3, r.top + C * 2 / 3, o - x * 2 / 3, i - C * 2 / 3, QA.TOP_LEFT) : new z(r.left + x * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? KA(r.left + b, r.top + C * 2 / 3, s - S * 2 / 3, l - C * 2 / 3, QA.TOP_RIGHT) : new z(r.left + r.width - S * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u - S * 2 / 3, d - I * 2 / 3, QA.BOTTOM_RIGHT) : new z(r.left + r.width - S * 2 / 3, r.top + r.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || B > 0 ? KA(r.left + x * 2 / 3, r.top + U, p - x * 2 / 3, B - I * 2 / 3, QA.BOTTOM_LEFT) : new z(r.left + x * 2 / 3, r.top + r.height - I * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? KA(r.left + x / 2, r.top + C / 2, o - x / 2, i - C / 2, QA.TOP_LEFT) : new z(r.left + x / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? KA(r.left + b, r.top + C / 2, s - S / 2, l - C / 2, QA.TOP_RIGHT) : new z(r.left + r.width - S / 2, r.top + C / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u - S / 2, d - I / 2, QA.BOTTOM_RIGHT) : new z(r.left + r.width - S / 2, r.top + r.height - I / 2), this.bottomLeftBorderStroke = p > 0 || B > 0 ? KA(r.left + x / 2, r.top + U, p - x / 2, B - I / 2, QA.BOTTOM_LEFT) : new z(r.left + x / 2, r.top + r.height - I / 2), this.topLeftBorderBox = o > 0 || i > 0 ? KA(r.left, r.top, o, i, QA.TOP_LEFT) : new z(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? KA(r.left + b, r.top, s, l, QA.TOP_RIGHT) : new z(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u, d, QA.BOTTOM_RIGHT) : new z(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || B > 0 ? KA(r.left, r.top + U, p, B, QA.BOTTOM_LEFT) : new z(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? KA(r.left + x, r.top + C, Math.max(0, o - x), Math.max(0, i - C), QA.TOP_LEFT) : new z(r.left + x, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? KA(r.left + Math.min(b, r.width - S), r.top + C, b > r.width + S ? 0 : Math.max(0, s - S), Math.max(0, l - C), QA.TOP_RIGHT) : new z(r.left + r.width - S, r.top + C), this.bottomRightPaddingBox = u > 0 || d > 0 ? KA(r.left + Math.min(v, r.width - x), r.top + Math.min(m, r.height - I), Math.max(0, u - S), Math.max(0, d - I), QA.BOTTOM_RIGHT) : new z(r.left + r.width - S, r.top + r.height - I), this.bottomLeftPaddingBox = p > 0 || B > 0 ? KA(r.left + x, r.top + Math.min(U, r.height - I), Math.max(0, p - x), Math.max(0, B - I), QA.BOTTOM_LEFT) : new z(r.left + x, r.top + r.height - I), this.topLeftContentBox = o > 0 || i > 0 ? KA(r.left + x + k, r.top + C + g, Math.max(0, o - (x + k)), Math.max(0, i - (C + g)), QA.TOP_LEFT) : new z(r.left + x + k, r.top + C + g), this.topRightContentBox = s > 0 || l > 0 ? KA(r.left + Math.min(b, r.width + x + k), r.top + C + g, b > r.width + x + k ? 0 : s - x + k, l - (C + g), QA.TOP_RIGHT) : new z(r.left + r.width - (S + H), r.top + C + g), this.bottomRightContentBox = u > 0 || d > 0 ? KA(r.left + Math.min(v, r.width - (x + k)), r.top + Math.min(m, r.height + C + g), Math.max(0, u - (S + H)), d - (I + K), QA.BOTTOM_RIGHT) : new z(r.left + r.width - (S + H), r.top + r.height - (I + K)), this.bottomLeftContentBox = p > 0 || B > 0 ? KA(r.left + x + k, r.top + U, Math.max(0, p - (x + k)), B - (I + K), QA.BOTTOM_LEFT) : new z(r.left + x + k, r.top + r.height - (I + K));
    }
    return A;
  })(), QA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(QA || (QA = {}));
  var KA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case QA.TOP_LEFT:
        return new co(new z(A, l), new z(A, l - a), new z(s - i, e), new z(s, e));
      case QA.TOP_RIGHT:
        return new co(new z(A, e), new z(A + i, e), new z(s, l - a), new z(s, l));
      case QA.BOTTOM_RIGHT:
        return new co(new z(s, e), new z(s, e + a), new z(A + i, l), new z(A, l));
      case QA.BOTTOM_LEFT:
      default:
        return new co(new z(s, l), new z(s - i, l), new z(A, e + a), new z(A, e));
    }
  }, No = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, yU = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Go = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, QU = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), uo = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), bU = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), FU = function(A) {
    return A.type === 0;
  }, Mf = function(A) {
    return A.type === 1;
  }, UU = function(A) {
    return A.type === 2;
  }, cu = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, EU = function(A, e, t, r, n) {
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
  }, Pf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), _f = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new vU(this.container), this.container.styles.opacity < 1 && this.effects.push(new bU(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new QU(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = No(this.curves), a = Go(this.curves);
        cu(i, a) ? this.effects.push(new uo(i, 6)) : (this.effects.push(new uo(i, 2)), this.effects.push(new uo(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !Mf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = No(r.curves), a = Go(r.curves);
            cu(i, a) || n.unshift(new uo(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return Ae(s.target, e);
      });
    }, A;
  })(), ds = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = Ae(n.flags, 4), i = Ae(n.flags, 2), a = new _f(n, A);
      Ae(n.styles.display, 2048) && r.push(a);
      var s = Ae(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new Pf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(p, B) {
              return u > p.element.container.styles.zIndex.order ? (d = B, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var f = 0;
            l.positiveZIndex.some(function(p, B) {
              return u >= p.element.container.styles.zIndex.order ? (f = B + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        ds(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), ds(a, e, t, s);
      Ae(n.flags, 8) && Nf(n, s);
    });
  }, Nf = function(A, e) {
    for (var t = A instanceof as ? A.start : 1, r = A instanceof as ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof Ff && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = mn(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, SU = function(A) {
    var e = new _f(A, null), t = new Pf(e), r = [];
    return ds(e, t, t, r), Nf(e.container, r), t;
  }, uu = function(A, e) {
    switch (e) {
      case 0:
        return Oe(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Oe(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Oe(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Oe(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, IU = function(A, e) {
    switch (e) {
      case 0:
        return Oe(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Oe(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Oe(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Oe(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, xU = function(A, e) {
    switch (e) {
      case 0:
        return Oe(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Oe(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Oe(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Oe(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, HU = function(A, e) {
    switch (e) {
      case 0:
        return fo(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return fo(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return fo(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return fo(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, fo = function(A, e) {
    var t = [];
    return Le(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Le(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Oe = function(A, e, t, r) {
    var n = [];
    return Le(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Le(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Le(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Le(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Gf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Vo = function(A) {
    var e = A.styles, t = A.bounds, r = xA(e.paddingLeft, t.width), n = xA(e.paddingRight, t.width), o = xA(e.paddingTop, t.width), i = xA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, TU = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Vo(e) : Gf(e);
  }, LU = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Vo(e) : Gf(e);
  }, ma = function(A, e, t) {
    var r = TU(wr(A.styles.backgroundOrigin, e), A), n = LU(wr(A.styles.backgroundClip, e), A), o = kU(wr(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = qr(wr(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = OU(wr(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, pr = function(A) {
    return FA(A) && A.value === br.AUTO;
  }, go = function(A) {
    return typeof A == "number";
  }, kU = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (zA(i) && a && zA(a)) return [
      xA(i, t.width),
      xA(a, t.height)
    ];
    var s = go(o);
    if (FA(i) && (i.value === br.CONTAIN || i.value === br.COVER)) {
      if (go(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === br.COVER) ? [
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
    var c = go(r), u = go(n), d = c || u;
    if (pr(i) && (!a || pr(a))) {
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
      var B = c ? r : t.width, y = u ? n : t.height;
      return [
        B,
        y
      ];
    }
    if (s) {
      var h = 0, b = 0;
      return zA(i) ? h = xA(i, t.width) : zA(a) && (b = xA(a, t.height)), pr(i) ? h = b * o : (!a || pr(a)) && (b = h / o), [
        h,
        b
      ];
    }
    var m = null, v = null;
    if (zA(i) ? m = xA(i, t.width) : a && zA(a) && (v = xA(a, t.height)), m !== null && (!a || pr(a)) && (v = c && u ? m / r * n : t.height), v !== null && pr(i) && (m = c && u ? v / n * r : t.width), m !== null && v !== null) return [
      m,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, wr = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, OU = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new z(Math.round(r.left), Math.round(r.top + i)),
          new z(Math.round(r.left + r.width), Math.round(r.top + i)),
          new z(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new z(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new z(Math.round(r.left + o), Math.round(r.top)),
          new z(Math.round(r.left + o + a), Math.round(r.top)),
          new z(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new z(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new z(Math.round(r.left + o), Math.round(r.top + i)),
          new z(Math.round(r.left + o + a), Math.round(r.top + i)),
          new z(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new z(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new z(Math.round(n.left), Math.round(n.top)),
          new z(Math.round(n.left + n.width), Math.round(n.top)),
          new z(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new z(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, KU = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", du = "Hidden Text", RU = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = KU, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(du)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(du)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), Vf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), DU = 1e4, MU = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new RU(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), UU(t) && (this.ctx.globalAlpha = t.opacity), FU(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Mf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return Ce(this, void 0, void 0, function() {
        var r;
        return pe(this, function(n) {
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
      return Ce(this, void 0, void 0, function() {
        return pe(this, function(r) {
          switch (r.label) {
            case 0:
              if (Ae(t.container.flags, 16)) debugger;
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
        var i = rl(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = VU(t.fontFamily).join(", "), o = Ln(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
      return Ce(this, void 0, void 0, function() {
        var n, o, i, a, s, l, c, u, d = this;
        return pe(this, function(f) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(p) {
            u.forEach(function(B) {
              switch (B) {
                case 0:
                  d.ctx.fillStyle = re(r.color), d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(h) {
                    d.ctx.shadowColor = re(h.color), d.ctx.shadowOffsetX = h.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = h.offsetY.number * d.options.scale, d.ctx.shadowBlur = h.blur.number, d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = re(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(h) {
                    switch (h) {
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
                  r.webkitTextStrokeWidth && p.text.trim().length && (d.ctx.strokeStyle = re(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = Vo(t), i = Go(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return Ce(this, void 0, void 0, function() {
        var r, n, o, i, a, s, b, b, l, c, u, d, v, f, p, U, B, y, h, b, m, v, U;
        return pe(this, function(C) {
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
              if (!(r instanceof yf)) return [
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
              if (r instanceof Qf && this.renderReplacedElement(r, n, r.canvas), !(r instanceof bf)) return [
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
              return r instanceof Sf && r.tree ? (l = new e(this.context, {
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
              if (r instanceof nl && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Do ? r.checked && (this.ctx.save(), this.path([
                new z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new z(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new z(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new z(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new z(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new z(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = re(qc), this.ctx.fill(), this.ctx.restore()) : r.type === Mo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = re(qc), this.ctx.fill(), this.ctx.restore())), PU(r) && r.value.length) {
                switch (d = this.createFontStyle(o), v = d[0], f = d[1], p = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = re(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = NU(r.styles.textAlign), U = Vo(r), B = 0, r.styles.textAlign) {
                  case 1:
                    B += U.width / 2;
                    break;
                  case 2:
                    B += U.width;
                    break;
                }
                y = U.add(B, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new z(U.left, U.top),
                  new z(U.left + U.width, U.top),
                  new z(U.left + U.width, U.top + U.height),
                  new z(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ln(r.value, y), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!Ae(r.styles.display, 2048)) return [
                3,
                20
              ];
              if (r.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (h = r.styles.listStyleImage, h.type !== 0) return [
                3,
                18
              ];
              b = void 0, m = h.url, C.label = 15;
            case 15:
              return C.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(m)
              ];
            case 16:
              return b = C.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + m), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = re(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new wt(r.bounds.left, r.bounds.top + xA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Kc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ln(t.listValue, U), o.letterSpacing, Kc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return Ce(this, void 0, void 0, function() {
        var r, n, h, o, i, h, a, s, h, l, c, h, u, d, h, f, p, h, B, y, h;
        return pe(this, function(b) {
          switch (b.label) {
            case 0:
              if (Ae(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              b.sent(), r = 0, n = t.negativeZIndex, b.label = 2;
            case 2:
              return r < n.length ? (h = n[r], [
                4,
                this.renderStack(h)
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
              return o < i.length ? (h = i[o], [
                4,
                this.renderNode(h)
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
              return a < s.length ? (h = s[a], [
                4,
                this.renderStack(h)
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
              return l < c.length ? (h = c[l], [
                4,
                this.renderStack(h)
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
              return u < d.length ? (h = d[u], [
                4,
                this.renderNode(h)
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
              return f < p.length ? (h = p[f], [
                4,
                this.renderStack(h)
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
              B = 0, y = t.positiveZIndex, b.label = 27;
            case 27:
              return B < y.length ? (h = y[B], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                30
              ];
            case 28:
              b.sent(), b.label = 29;
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
        var i = Le(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), Le(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return Ce(this, void 0, void 0, function() {
        var r, n, o, i, a, s;
        return pe(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, d, f, g, R, W, k, N, I, p, g, R, W, k, N, B, y, h, b, m, v, U, C, S, I, x, g, H, K, k, N, O, R, W, rA, D, X, q, tA, T, G, _;
                return pe(this, function(Y) {
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
                      return u && (f = ma(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), g = f[0], R = f[1], W = f[2], k = f[3], N = f[4], I = o.ctx.createPattern(o.resizeImage(u, k, N), "repeat"), o.renderRepeat(g, I, R, W)), [
                        3,
                        6
                      ];
                    case 5:
                      FQ(c) ? (p = ma(t, r, [
                        null,
                        null,
                        null
                      ]), g = p[0], R = p[1], W = p[2], k = p[3], N = p[4], B = CQ(c.angle, k, N), y = B[0], h = B[1], b = B[2], m = B[3], v = B[4], U = document.createElement("canvas"), U.width = k, U.height = N, C = U.getContext("2d"), S = C.createLinearGradient(h, m, b, v), kc(c.stops, y).forEach(function(dA) {
                        return S.addColorStop(dA.stop, re(dA.color));
                      }), C.fillStyle = S, C.fillRect(0, 0, k, N), k > 0 && N > 0 && (I = o.ctx.createPattern(U, "repeat"), o.renderRepeat(g, I, R, W))) : UQ(c) && (x = ma(t, r, [
                        null,
                        null,
                        null
                      ]), g = x[0], H = x[1], K = x[2], k = x[3], N = x[4], O = c.position.length === 0 ? [
                        Al
                      ] : c.position, R = xA(O[0], k), W = xA(O[O.length - 1], N), rA = vQ(c, R, W, k, N), D = rA[0], X = rA[1], D > 0 && X > 0 && (q = o.ctx.createRadialGradient(H + R, K + W, 0, H + R, K + W, D), kc(c.stops, D * 2).forEach(function(dA) {
                        return q.addColorStop(dA.stop, re(dA.color));
                      }), o.path(g), o.ctx.fillStyle = q, D !== X ? (tA = t.bounds.left + 0.5 * t.bounds.width, T = t.bounds.top + 0.5 * t.bounds.height, G = X / D, _ = 1 / G, o.ctx.save(), o.ctx.translate(tA, T), o.ctx.transform(1, 0, 0, G, 0, 0), o.ctx.translate(-tA, -T), o.ctx.fillRect(H, _ * (K - T) + T, k, N * _), o.ctx.restore()) : o.ctx.fill())), Y.label = 6;
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
      return Ce(this, void 0, void 0, function() {
        return pe(this, function(o) {
          return this.path(uu(n, r)), this.ctx.fillStyle = re(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return Ce(this, void 0, void 0, function() {
        var i, a;
        return pe(this, function(s) {
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
              return i = IU(o, n), this.path(i), this.ctx.fillStyle = re(t), this.ctx.fill(), a = xU(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Ce(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, u = this;
        return pe(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !Ht(r.backgroundColor) || r.backgroundImage.length, o = [
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
              ], i = _U(wr(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Ht(r.backgroundColor) || (this.ctx.fillStyle = re(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var p = No(t.curves), B = f.inset ? 0 : DU, y = EU(p, -B + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(p), u.ctx.clip(), u.mask(y)) : (u.mask(p), u.ctx.clip(), u.path(y)), u.ctx.shadowOffsetX = f.offsetX.number + B, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = re(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? re(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !Ht(c.color) && c.width > 0 ? c.style !== 2 ? [
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
      return Ce(this, void 0, void 0, function() {
        var a, s, l, c, u, d, f, p, B, y, h, b, m, v, U, C, U, C;
        return pe(this, function(S) {
          return this.ctx.save(), a = HU(o, n), s = uu(o, n), i === 2 && (this.path(s), this.ctx.clip()), Le(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Le(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - u) : f = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, B = r < 3 ? r * 2 : r, i === 3 && (p = r, B = r), y = true, f <= p * 2 ? y = false : f <= p * 2 + B ? (h = f / (2 * p + B), p *= h, B *= h) : (b = Math.floor((f + B) / (p + B)), m = (f - b * p) / (b - 1), v = (f - (b + 1) * p) / b, B = v <= 0 || Math.abs(B - m) < Math.abs(B - v) ? m : v), y && (i === 3 ? this.ctx.setLineDash([
            0,
            p + B
          ]) : this.ctx.setLineDash([
            p,
            B
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = re(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Le(s[0]) && (U = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([
            new z(U.end.x, U.end.y),
            new z(C.start.x, C.start.y)
          ]), this.ctx.stroke()), Le(s[1]) && (U = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([
            new z(U.end.x, U.end.y),
            new z(C.start.x, C.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return Ce(this, void 0, void 0, function() {
        var r;
        return pe(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = re(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = SU(t), [
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
  })(Vf), PU = function(A) {
    return A instanceof Ef || A instanceof Uf ? true : A instanceof nl && A.type !== Mo && A.type !== Do;
  }, _U = function(A, e) {
    switch (A) {
      case 0:
        return No(e);
      case 2:
        return yU(e);
      default:
        return Go(e);
    }
  }, NU = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, GU = [
    "-apple-system",
    "system-ui"
  ], VU = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return GU.indexOf(e) === -1;
    }) : A;
  }, $U = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return Ce(this, void 0, void 0, function() {
        var r, n;
        return pe(this, function(o) {
          switch (o.label) {
            case 0:
              return r = is(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                WU(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = re(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(Vf), WU = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, XU = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, $n([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, $n([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, $n([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, $n([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), JU = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new XU({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new gU(this, e);
    }
    return A.instanceCount = 1, A;
  })(), YU = function(A, e) {
    return e === void 0 && (e = {}), zU(A, e);
  };
  typeof window < "u" && Df.setContext(window);
  var zU = function(A, e) {
    return Ce(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, f, p, B, y, h, b, m, v, U, S, C, S, I, x, g, H, K, k, N, O, R, W, rA, D, X, q, tA, T, G;
      return pe(this, function(_) {
        switch (_.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (I = e.allowTaint) !== null && I !== void 0 ? I : false,
              imageTimeout: (x = e.imageTimeout) !== null && x !== void 0 ? x : 15e3,
              proxy: e.proxy,
              useCORS: (g = e.useCORS) !== null && g !== void 0 ? g : false
            }, o = $a({
              logging: (H = e.logging) !== null && H !== void 0 ? H : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (K = e.windowWidth) !== null && K !== void 0 ? K : r.innerWidth,
              windowHeight: (k = e.windowHeight) !== null && k !== void 0 ? k : r.innerHeight,
              scrollX: (N = e.scrollX) !== null && N !== void 0 ? N : r.pageXOffset,
              scrollY: (O = e.scrollY) !== null && O !== void 0 ? O : r.pageYOffset
            }, a = new wt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new JU(o, a), l = (R = e.foreignObjectRendering) !== null && R !== void 0 ? R : false, c = {
              allowTaint: (W = e.allowTaint) !== null && W !== void 0 ? W : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new su(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = _.sent(), p = ol(d) || jF(d) ? Ev(d.ownerDocument) : Hi(s, d), B = p.width, y = p.height, h = p.left, b = p.top, m = jU(s, d, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: m,
              scale: (D = (rA = e.scale) !== null && rA !== void 0 ? rA : r.devicePixelRatio) !== null && D !== void 0 ? D : 1,
              x: ((X = e.x) !== null && X !== void 0 ? X : 0) + h,
              y: ((q = e.y) !== null && q !== void 0 ? q : 0) + b,
              width: (tA = e.width) !== null && tA !== void 0 ? tA : Math.ceil(B),
              height: (T = e.height) !== null && T !== void 0 ? T : Math.ceil(y)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), S = new $U(s, v), [
              4,
              S.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = _.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + h + "," + b + " with size " + B + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = xf(s, d), m === C.styles.backgroundColor && (C.styles.backgroundColor = dt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), S = new MU(s, v), [
              4,
              S.render(C)
            ];
          case 4:
            U = _.sent(), _.label = 5;
          case 5:
            return (!((G = e.removeContainer) !== null && G !== void 0) || G) && (su.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, jU = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? an(A, getComputedStyle(r.documentElement).backgroundColor) : dt.TRANSPARENT, o = r.body ? an(A, getComputedStyle(r.body).backgroundColor) : dt.TRANSPARENT, i = typeof t == "string" ? an(A, t) : t === null ? dt.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Ht(n) ? Ht(o) ? i : o : n : i;
  }, Ca = {
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
  }, ne = function() {
    return ne = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ne.apply(this, arguments);
  }, ZU = {
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
  }, qU = function(A, e) {
    var t = ne({}, ZU);
    if (A) for (var r in Ca) Object.prototype.hasOwnProperty.call(Ca, r) && (t[r] = ne(ne({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Ca[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = ne(ne({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, fu = function(A, e) {
    return A ? ne(ne({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : ne({}, e.rbgcpControlBtn);
  }, un = function(A, e) {
    return A ? ne(ne({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : ne({}, e.rbgcpControlIconBtn);
  }, po = function(A, e) {
    return A ? ne(ne(ne({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : ne(ne({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Ye = function() {
    return Ye = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ye.apply(this, arguments);
  }, A1 = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "";
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ye(Ye({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), E.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ye(Ye({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ye(Ye({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, e1 = function(A) {
    var e = A.onSelect, t = UA().defaultStyles, r = BA(null), n = r[0], o = r[1], i = BA(false), a = i[0], s = i[1], l = BA(false), c = l[0], u = l[1], d = function() {
      var B = document.getElementById("root");
      s(true), YU(B).then(function(y) {
        var h = document.createElement("canvas"), b = h.getContext("2d", {
          willReadFrequently: true
        });
        B && b && (h.width = B.offsetWidth * 2, h.height = B.offsetHeight * 2, b.drawImage(y, 0, 0)), o(b);
      });
    }, f = function(B) {
      if (B.stopPropagation(), n) {
        var y = B.pageX, h = B.pageY, b = y * 2, m = h * 2, v = n.getImageData(b, m, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      u(false), s(false);
    }, p = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var B = new window.EyeDropper(), y = new window.AbortController();
        B.open({
          signal: y.signal
        }).then(function(h) {
          var b = ue(h.sRGBHex), m = b.toRgb(), v = m.r, U = m.g, C = m.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(C, ", 1)")), u(false);
        }).catch(function(h) {
          console.log(h), u(false);
        });
      }
    };
    return E.createElement("div", null, E.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Ye(Ye({}, t.rbgcpEyedropperBtn), un(a, t))
    }, E.createElement(A1, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && E.createElement(Uv, null, E.createElement("div", {
      onClick: function(B) {
        return f(B);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, fs = function() {
    return fs = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, fs.apply(this, arguments);
  }, va = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = BA(false), d = u[0], f = u[1], p = BA(2), B = p[0], y = p[1], h = e * (i - 18);
    lA(function() {
      var C;
      y(((C = t == null ? void 0 : t.current) === null || C === void 0 ? void 0 : C.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var b = function() {
      f(false);
    }, m = function(C) {
      d && o(Sr(C, c));
    }, v = function(C) {
      d || o(Sr(C, c));
    }, U = function() {
      f(true);
    };
    return lA(function() {
      var C = function() {
        b();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), E.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, E.createElement("div", {
      onMouseMove: function(C) {
        return m(C);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, E.createElement("div", {
      style: fs({
        left: h,
        top: B
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), E.createElement("div", {
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
      onMouseMove: function(C) {
        return m(C);
      },
      onClick: function(C) {
        return v(C);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), E.createElement("canvas", {
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
  }, t1 = function(A) {
    var e = A.openAdvanced, t = UA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, f = oA(null), p = oA(null), B = oA(null);
    LC(f, a == null ? void 0 : a.h, d * 100, i), kC(p, a == null ? void 0 : a.h, u * 100, i), OC(B, a == null ? void 0 : a.h, u * 100, i);
    var y = function(m) {
      var v = ue({
        h: a == null ? void 0 : a.h,
        s: m / 100,
        l: d
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, h = function(m) {
      var v = ue({
        h: a == null ? void 0 : a.h,
        s: u,
        l: m / 100
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, b = function(m) {
      var v = ue({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: m
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return E.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, E.createElement("div", {
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
    }, E.createElement(va, {
      value: u,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: y,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), E.createElement(va, {
      value: d,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: h,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), E.createElement(va, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: B,
      label: "Brightness",
      callback: b,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, $t = function() {
    return $t = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, $t.apply(this, arguments);
  }, r1 = function(A) {
    var e = A.openComparibles, t = UA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var f = d.toRgb(), p = f.r, B = f.g, y = f.b, h = f.a;
      n("rgba(".concat(p, ",").concat(B, ",").concat(y, ",").concat(h, ")"));
    };
    return E.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, E.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, E.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), E.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, f) {
      return E.createElement("div", {
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
    })), E.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, f) {
      return E.createElement("div", {
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
    })), E.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, f) {
      return E.createElement("div", {
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
    })), E.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, f) {
      return E.createElement("div", {
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
  }, TA = function() {
    return TA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, TA.apply(this, arguments);
  }, n1 = function() {
    var A = UA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return E.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, E.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: TA(TA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, E.createElement(wv, {
      color: i ? "#568CF5" : ""
    })), E.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: TA(TA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, E.createElement(mv, {
      color: a ? "#568CF5" : ""
    })));
  }, o1 = function() {
    var A = UA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, Er(parseInt(a), 0, 100));
    };
    return E.createElement("div", {
      style: TA(TA(TA(TA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, E.createElement(bv, null), E.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: TA(TA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, i1 = function() {
    var A = UA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = Er(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return E.createElement("div", {
      style: TA(TA(TA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, E.createElement(Qv, null), E.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: TA(TA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), E.createElement("div", {
      style: TA(TA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, a1 = function() {
    var A = UA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return TA(TA({}, l), {
            value: c === t - 1 ? xi(l) : Hn(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return E.createElement("div", {
      onClick: i,
      style: TA(TA({}, un(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, E.createElement(hv, null));
  }, gu = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = UA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return E.createElement("div", {
      style: TA(TA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && E.createElement(n1, null), E.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && E.createElement(i1, null)), !r && E.createElement(o1, null), E.createElement(a1, null));
  }, Cn = function() {
    return Cn = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Cn.apply(this, arguments);
  }, s1 = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = UA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? E.createElement("div", {
      style: {
        width: 1
      }
    }) : E.createElement("div", {
      style: Cn({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, E.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: fu(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), E.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: fu(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, l1 = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = UA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, f) {
      e && (d.stopPropagation(), o(f), t(false));
    };
    return E.createElement("div", {
      style: Cn({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, E.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: po(n === "rgb", i)
    }, "RGB"), E.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: po(n === "hsl", i)
    }, "HSL"), E.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: po(n === "hsv", i)
    }, "HSV"), E.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: po(n === "cmyk", i)
    }, "CMYK"));
  }, c1 = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, f = d === void 0 ? false : d, p = A.hideGradientControls, B = p === void 0 ? false : p, y = A.hideGradientType, h = y === void 0 ? false : y, b = A.hideGradientAngle, m = b === void 0 ? false : b, v = A.hideGradientStop, U = v === void 0 ? false : v, C = UA(), S = C.config, I = C.onChange, x = C.isGradient, g = C.handleChange, H = C.previous, K = C.defaultStyles, k = C.pickerIdSuffix, N = S.defaultColor, O = S.defaultGradient, R = BA(false), W = R[0], rA = R[1], D = BA(false), X = D[0], q = D[1], tA = BA(false), T = tA[0], G = tA[1], _ = o && a && l && u, Y = (e = H == null ? void 0 : H.color) !== null && e !== void 0 ? e : N, dA = (t = H == null ? void 0 : H.gradient) !== null && t !== void 0 ? t : O, iA = function() {
      I(Y);
    }, AA = function() {
      I(dA);
    }, J = o && a && l && u, nA = J && f;
    return nA ? x && !B ? E.createElement(gu, {
      hideGradientType: h,
      hideGradientAngle: m,
      hideGradientStop: U
    }) : null : E.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, E.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(k)
    }, E.createElement(s1, {
      hideColorTypeBtns: f,
      setGradient: AA,
      isGradient: x,
      setSolid: iA,
      locales: r
    }), !J && E.createElement("div", {
      style: Cn({
        display: _ ? "none" : ""
      }, K.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(k)
    }, !o && E.createElement(e1, {
      onSelect: g
    }), !a && E.createElement("div", {
      id: "rbgcp-advanced-btn".concat(k),
      onClick: function() {
        return G(!T);
      },
      style: un(T, K)
    }, E.createElement(Cv, {
      color: T ? "#568CF5" : ""
    })), !l && E.createElement("div", {
      style: un(W, K),
      onClick: function() {
        return rA(!W);
      },
      id: "rbgcp-comparibles-btn".concat(k)
    }, E.createElement(yv, {
      color: W ? "#568CF5" : ""
    })), !u && E.createElement("div", {
      id: "rbgcp-color-model-btn".concat(k),
      onClick: function() {
        return q(!X);
      },
      style: un(X, K)
    }, E.createElement(vv, {
      color: X ? "#568CF5" : ""
    }), E.createElement(l1, {
      openInputType: X,
      setOpenInputType: q
    })))), !a && E.createElement(t1, {
      openAdvanced: T
    }), !l && E.createElement(r1, {
      openComparibles: W
    }), x && !B && E.createElement(gu, {
      hideGradientType: h,
      hideGradientAngle: m,
      hideGradientStop: U
    }));
  }, ze = function() {
    return ze = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ze.apply(this, arguments);
  }, pu = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, u1 = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = UA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, f = function(B) {
      var y = o == null ? void 0 : o.map(function(h, b) {
        return ze(ze({}, h), {
          value: b === B ? xi(h) : Hn(h)
        });
      });
      c(y);
    }, p = function(B) {
      B.stopPropagation(), f(t), r(true);
    };
    return E.createElement("div", {
      onMouseDown: function(B) {
        return p(B);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: ze(ze({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, E.createElement("div", {
      style: ze(ze({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && E.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, d1 = function() {
    var A = UA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = BA(false), u = c[0], d = c[1];
    function f(m) {
      return m.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(m) {
      var v, U = Sr(m, l), C = (v = pu(pu([], t.map(function(S) {
        return ze(ze({}, S), {
          value: Hn(S)
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
    }, B = function() {
      d(false);
    }, y = function(m) {
      u || (p(m), d(true));
    }, h = function(m) {
      u && i(o, Sr(m, l));
    }, b = function() {
      B();
    };
    return lA(function() {
      return window.addEventListener("mouseup", b), function() {
        window.removeEventListener("mouseup", b);
      };
    }), E.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, E.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(m) {
        return y(m);
      },
      onMouseMove: function(m) {
        return h(m);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(m, v) {
      return E.createElement(u1, {
        i: v,
        left: m.left,
        key: "".concat(v, "-").concat(m),
        setDragging: d
      });
    }));
  }, f1 = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, f = A.hideGradientStop, p = A.hideGradientAngle, B = A.hideColorTypeBtns, y = A.hideAdvancedSliders, h = A.hideGradientControls, b = UA(), m = b.isGradient, v = b.pickerIdSuffix;
    return E.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !u && E.createElement(dv, null), !s && E.createElement(c1, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: f,
      hideColorTypeBtns: B,
      hideGradientAngle: p,
      hideAdvancedSliders: y,
      hideGradientControls: h
    }), m && E.createElement(d1, null), !r && E.createElement(KC, null), !i && E.createElement(fv, null), !n && E.createElement($C, null), !o && E.createElement(Bv, {
      presets: t
    }));
  }, $o = function() {
    return $o = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, $o.apply(this, arguments);
  };
  L1 = function(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, f = A.hideHue, p = f === void 0 ? false : f, B = A.presets, y = B === void 0 ? [] : B, h = A.hideEyeDrop, b = h === void 0 ? false : h, m = A.hideAdvancedSliders, v = m === void 0 ? false : m, U = A.hideColorGuide, C = U === void 0 ? false : U, S = A.hideInputType, I = S === void 0 ? false : S, x = A.hideColorTypeBtns, g = x === void 0 ? false : x, H = A.hideGradientType, K = H === void 0 ? false : H, k = A.hideGradientAngle, N = k === void 0 ? false : k, O = A.hideGradientStop, R = O === void 0 ? false : O, W = A.hideGradientControls, rA = W === void 0 ? false : W, D = A.locales, X = D === void 0 ? gv : D, q = A.width, tA = q === void 0 ? 294 : q, T = A.height, G = T === void 0 ? 294 : T, _ = A.style, Y = _ === void 0 ? {} : _, dA = A.className, iA = A.disableDarkMode, AA = iA === void 0 ? false : iA, J = A.disableLightMode, nA = J === void 0 ? false : J, aA = A.hidePickerSquare, w = aA === void 0 ? false : aA, F = A.showHexAlpha, Q = F === void 0 ? false : F, M = A.config, $ = M === void 0 ? {} : M, P = UC(r), sA = typeof window > "u" || AA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || nA), cA = qU(sA, Y), gA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return E.createElement("div", {
      className: dA,
      style: $o($o({}, cA.body), {
        width: tA
      })
    }, E.createElement(HC, {
      value: P,
      onChange: n,
      squareWidth: tA,
      passedConfig: $,
      squareHeight: G,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: Q,
      defaultStyles: cA,
      pickerIdSuffix: gA
    }, E.createElement(f1, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: p,
      presets: y,
      hideEyeDrop: b,
      hideAdvancedSliders: v,
      hideColorGuide: C,
      hideInputType: I,
      hideColorTypeBtns: g,
      hideGradientType: K,
      hideGradientAngle: N,
      hideGradientStop: R,
      hideGradientControls: rA,
      hidePickerSquare: w,
      locales: X
    })));
  };
  function Bu(A) {
    const e = A.getBoundingClientRect();
    return {
      above: e.top,
      below: window.innerHeight - e.bottom
    };
  }
  k1 = function(A, e, t = 16) {
    const [r, n] = BA("bottom"), o = ee(() => `calc(100vh - ${2 * t}px)`, [
      t
    ]), i = oA("bottom"), a = oA(null), s = oA(null), l = RA((B) => {
      i.current = B, n(B);
    }, []), c = RA((B) => {
      if (!A) return;
      const { above: y, below: h } = Bu(A), b = i.current;
      if (B !== void 0) {
        const m = b === "bottom" ? h : y, v = b === "bottom" ? y : h;
        if (B <= m - t) return;
        v > m && l(b === "bottom" ? "top" : "bottom");
      } else l(y > h ? "top" : "bottom");
    }, [
      A,
      t,
      l
    ]);
    lA(() => {
      if (!e || !A) return;
      const { above: B, below: y } = Bu(A);
      l(B > y ? "top" : "bottom");
    }, [
      e,
      A,
      l
    ]), lA(() => {
      if (!e || !A) return;
      const B = () => c();
      return window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
    }, [
      e,
      A,
      c
    ]);
    const [, u] = BA({}), d = RA((B) => {
      a.current = B, u({});
    }, []);
    return lA(() => {
      if (!e || !a.current) return;
      let B = null;
      const y = new ResizeObserver((h) => {
        B !== null && cancelAnimationFrame(B), B = requestAnimationFrame(() => {
          var _a2;
          B = null, (_a2 = s.current) == null ? void 0 : _a2.updatePosition(), h.length > 0 && c(h[0].contentRect.height);
        });
      });
      return y.observe(a.current), () => {
        B !== null && cancelAnimationFrame(B), y.disconnect();
      };
    }, [
      e,
      c
    ]), {
      anchorOrigin: r === "bottom" ? {
        vertical: "bottom",
        horizontal: "center"
      } : {
        vertical: "top",
        horizontal: "center"
      },
      transformOrigin: r === "bottom" ? {
        vertical: "top",
        horizontal: "center"
      } : {
        vertical: "bottom",
        horizontal: "center"
      },
      maxHeight: o,
      setContentRef: d,
      popoverActionRef: s
    };
  };
});
export {
  T0 as $,
  Ls as A,
  Jl as B,
  BC as C,
  E1 as D,
  Xu as E,
  fw as F,
  T1 as G,
  Vi as H,
  m1 as I,
  Hs as J,
  Ns as K,
  Ow as L,
  iw as M,
  qe as N,
  xh as O,
  Ph as P,
  Cd as Q,
  nt as R,
  Sd as S,
  v1 as T,
  Fo as U,
  F1 as V,
  kt as W,
  Ul as X,
  Yt as Y,
  Ql as Z,
  vd as _,
  __tla,
  Bn as a,
  En as a$,
  Rt as a0,
  Ur as a1,
  $e as a2,
  Rr as a3,
  fB as a4,
  mB as a5,
  rt as a6,
  Tr as a7,
  Hr as a8,
  bs as a9,
  y1 as aA,
  k1 as aB,
  Pw as aC,
  L1 as aD,
  bi as aE,
  jA as aF,
  zt as aG,
  x1 as aH,
  Vm as aI,
  Ym as aJ,
  Ii as aK,
  S1 as aL,
  I1 as aM,
  Pr as aN,
  H1 as aO,
  sr as aP,
  tC as aQ,
  Im as aR,
  Pm as aS,
  _m as aT,
  xm as aU,
  Gm as aV,
  xd as aW,
  gt as aX,
  w1 as aY,
  Is as aZ,
  h1 as a_,
  Fn as aa,
  pC as ab,
  u0 as ac,
  ue as ad,
  Ys as ae,
  be as af,
  pt as ag,
  Gi as ah,
  hw as ai,
  k0 as aj,
  $s as ak,
  Pa as al,
  Z0 as am,
  Ne as an,
  Kw as ao,
  id as ap,
  Hw as aq,
  Da as ar,
  C1 as as,
  yl as at,
  Ts as au,
  In as av,
  ed as aw,
  nd as ax,
  Ws as ay,
  Ih as az,
  b1 as b,
  Bi as b0,
  Sl as b1,
  qu as b2,
  Bt as b3,
  oh as b4,
  Io as b5,
  y0 as b6,
  Rs as b7,
  D0 as b8,
  lB as b9,
  wd as ba,
  Sa as bb,
  Q1 as bc,
  nB as bd,
  e0 as c,
  uc as d,
  ym as e,
  Sh as f,
  Ta as g,
  U1 as h,
  DA as i,
  LA as j,
  NA as k,
  Ks as l,
  wA as m,
  MA as n,
  WA as o,
  mA as p,
  Os as q,
  FB as r,
  fA as s,
  Qi as t,
  Gs as u,
  he as v,
  Xs as w,
  xw as x,
  yh as y,
  Jw as z
};
