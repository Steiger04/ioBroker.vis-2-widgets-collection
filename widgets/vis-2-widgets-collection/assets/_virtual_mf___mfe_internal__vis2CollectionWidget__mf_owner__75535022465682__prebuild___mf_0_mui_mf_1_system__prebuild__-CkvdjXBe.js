import { n as e } from "./rolldown-runtime-XKyaHtl9.js";
import { Cn as t, D as n, E as r, _ as i, at as a, b as o, bn as s, d as c, f as l, it as u, m as d, o as f, s as p, u as m, v as h, vn as g, w as _, xn as v, y, yn as b } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { n as x, t as S } from "./emotion-cache.browser.esm--RCZvsJA.js";
import { $ as C, $t as w, A as T, At as E, B as D, Bt as O, C as ee, Ct as te, D as ne, Dt as k, E as A, Et as re, F as j, Ft as M, G as ie, Gt as ae, H as N, Ht as P, I as oe, It as F, J as se, Jt as I, K as ce, Kt as L, L as le, Lt as ue, M as de, Mt as R, N as fe, Nt as pe, O as me, Ot as z, P as B, Pt as V, Q as H, Qt as U, R as he, Rt as W, S as ge, St as _e, T as ve, Tt as G, U as ye, Ut as be, V as xe, Vt as Se, W as Ce, Wt as we, X as Te, Y as Ee, Yt as De, Z as Oe, Zt as ke, _ as Ae, _t as je, a as Me, at as Ne, b as Pe, bt as Fe, c as Ie, ct as Le, d as Re, en as ze, et as Be, f as K, ft as Ve, g as He, gt as Ue, h as We, ht as Ge, i as Ke, it as qe, j as Je, jt as Ye, k as Xe, kt as q, l as Ze, lt as Qe, m as $e, mt as et, n as tt, nt, o as J, ot as Y, p as rt, pt as it, q as at, qt as ot, r as st, rt as ct, s as X, st as lt, t as ut, tt as dt, u as ft, v as pt, vt as mt, w as ht, wt as gt, x as _t, xt as vt, y as yt, yt as bt, z as xt, zt as St } from "./createStyled-C2Uprg2G.js";
import { t as Ct } from "./useEnhancedEffect-B263MN2W.js";
import { _ as wt, a as Tt, b as Et, c as Dt, d as Ot, f as kt, g as At, i as jt, m as Mt, n as Nt, o as Pt, p as Ft, r as It, s as Lt, u as Rt, v as zt, x as Bt, y as Vt } from "./useMediaQuery-BDbYZ6ev.js";
var Ht = {}, Ut = /* @__PURE__ */ new Map(), Wt = { insert: void 0 }, Gt = (e2, t2) => {
  let n2 = S(e2);
  return n2.sheet = new t2({ key: n2.key, nonce: n2.sheet.nonce, container: n2.sheet.container, speedy: n2.sheet.isSpeedy, prepend: n2.sheet.prepend, insertionPoint: n2.sheet.insertionPoint }), n2;
}, Z;
if (typeof document == `object` && (Z = document.querySelector(`[name="emotion-insertion-point"]`), !Z)) {
  Z = document.createElement(`meta`), Z.setAttribute(`name`, `emotion-insertion-point`), Z.setAttribute(`content`, ``);
  let e2 = document.querySelector(`head`);
  e2 && e2.prepend(Z);
}
function Kt(e2, t2) {
  if (e2 || t2) {
    class n2 extends x {
      insert(e3, t3) {
        return Wt.insert ? Wt.insert(e3, t3) : (this.key && this.key.endsWith(`global`) && (this.before = Z), super.insert(e3, t3));
      }
    }
    let r2 = Gt({ key: t2 ? `mui` : `css`, insertionPoint: e2 ? Z : void 0 }, n2);
    if (t2) {
      let e3 = r2.insert;
      r2.insert = (...t3) => (t3[1].styles.match(/^@layer\s+[^{]*$/) || (t3[1].styles = `@layer mui {${t3[1].styles}}`), e3(...t3));
    }
    return r2;
  }
}
function qt(e2) {
  let { injectFirst: t2, enableCssLayer: n2, children: r2 } = e2, i2 = _(() => {
    let e3 = `${t2}-${n2}`;
    if (typeof document == `object` && Ut.has(e3)) return Ut.get(e3);
    let r3 = Kt(t2, n2);
    return Ut.set(e3, r3), r3;
  }, [t2, n2]);
  return i2 ? f(g, { value: i2, children: r2 }) : r2;
}
function Jt(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function Yt(e2) {
  let { styles: n2, defaultTheme: r2 = {} } = e2;
  return f(t, { styles: typeof n2 == `function` ? (e3) => n2(Jt(e3) ? r2 : e3) : n2 });
}
function Xt(e2) {
  let t2 = it(e2);
  return e2 !== t2 && t2.styles ? (t2.styles.match(/^@layer\s+[^{]*$/) || (t2.styles = `@layer global{${t2.styles}}`), t2) : e2;
}
function Zt({ styles: e2, themeId: t2, defaultTheme: n2 = {} }) {
  let r2 = wt(n2), i2 = t2 && r2[t2] || r2, a2 = typeof e2 == `function` ? e2(i2) : e2;
  return i2.modularCssLayers && (a2 = Array.isArray(a2) ? a2.map((e3) => Xt(typeof e3 == `function` ? e3(i2) : e3)) : Xt(a2)), f(Yt, { styles: a2 });
}
function Qt(e2) {
  let t2 = Bt(), n2 = zt() || ``, { modularCssLayers: r2 } = e2, i2 = `mui.global, mui.components, mui.theme, mui.custom, mui.sx`;
  return i2 = !r2 || t2 !== null ? `` : typeof r2 == `string` ? r2.replace(/mui(?!\.)/g, i2) : `@layer ${i2};`, Ct(() => {
    var _a2, _b;
    let e3 = document.querySelector(`head`);
    if (!e3) return;
    let t3 = e3.firstChild;
    if (i2) {
      if (t3 && ((_a2 = t3.hasAttribute) == null ? void 0 : _a2.call(t3, `data-mui-layer-order`)) && t3.getAttribute(`data-mui-layer-order`) === n2) return;
      let r3 = document.createElement(`style`);
      r3.setAttribute(`data-mui-layer-order`, n2), r3.textContent = i2, e3.prepend(r3);
    } else (_b = e3.querySelector(`style[data-mui-layer-order="${n2}"]`)) == null ? void 0 : _b.remove();
  }, [i2, n2]), i2 ? f(Zt, { styles: i2 }) : null;
}
var $t = {};
function en(e2, t2, n2, r2 = false) {
  return _(() => {
    let i2 = e2 && t2[e2] || t2;
    if (typeof n2 == `function`) {
      let a2 = n2(i2), o2 = e2 ? { ...t2, [e2]: a2 } : a2;
      return r2 ? () => o2 : o2;
    }
    return e2 ? { ...t2, [e2]: n2 } : { ...t2, ...n2 };
  }, [e2, t2, n2, r2]);
}
function tn(e2) {
  let { children: t2, theme: n2, themeId: r2 } = e2, i2 = Bt($t), o2 = a() || $t, s2 = en(r2, i2, n2), c2 = en(r2, o2, n2, true), l2 = (r2 ? s2[r2] : s2).direction === `rtl`, d2 = Qt(s2);
  return f(u, { theme: c2, children: f(b.Provider, { value: s2, children: f(Vt, { value: l2, children: p(Qe, { value: r2 ? s2[r2].components : s2.components, children: [d2, t2] }) }) }) });
}
function nn() {
}
var rn = ({ key: e2, storageWindow: t2 }) => (!t2 && typeof window < `u` && (t2 = window), { get(n2) {
  if (typeof window > `u`) return;
  if (!t2) return n2;
  let r2;
  try {
    r2 = t2.localStorage.getItem(e2);
  } catch {
  }
  return r2 || n2;
}, set: (n2) => {
  if (t2) try {
    t2.localStorage.setItem(e2, n2);
  } catch {
  }
}, subscribe: (n2) => {
  if (!t2) return nn;
  let r2 = (t3) => {
    let r3 = t3.newValue;
    t3.key === e2 && n2(r3);
  };
  return t2.addEventListener(`storage`, r2), () => {
    t2.removeEventListener(`storage`, r2);
  };
} });
function an() {
}
function on(e2) {
  if (typeof window < `u` && typeof window.matchMedia == `function` && e2 === `system`) return window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
}
function sn(e2, t2) {
  if (e2.mode === `light` || e2.mode === `system` && e2.systemMode === `light`) return t2(`light`);
  if (e2.mode === `dark` || e2.mode === `system` && e2.systemMode === `dark`) return t2(`dark`);
}
function cn(e2) {
  return sn(e2, (t2) => {
    if (t2 === `light`) return e2.lightColorScheme;
    if (t2 === `dark`) return e2.darkColorScheme;
  });
}
function ln(e2) {
  let { defaultMode: t2 = `light`, defaultLightColorScheme: a2, defaultDarkColorScheme: s2, supportedColorSchemes: c2 = [], modeStorageKey: l2 = Mt, colorSchemeStorageKey: u2 = Ft, storageWindow: d2 = typeof window > `u` ? void 0 : window, storageManager: f2 = rn, noSsr: p2 = false } = e2, m2 = c2.join(`,`), h2 = c2.length > 1, g2 = _(() => f2 == null ? void 0 : f2({ key: l2, storageWindow: d2 }), [f2, l2, d2]), v2 = _(() => f2 == null ? void 0 : f2({ key: `${u2}-light`, storageWindow: d2 }), [f2, u2, d2]), y2 = _(() => f2 == null ? void 0 : f2({ key: `${u2}-dark`, storageWindow: d2 }), [f2, u2, d2]), [b2, x2] = n(() => {
    let e3 = (g2 == null ? void 0 : g2.get(t2)) || t2, n2 = (v2 == null ? void 0 : v2.get(a2)) || a2, r2 = (y2 == null ? void 0 : y2.get(s2)) || s2;
    return { mode: e3, systemMode: on(e3), lightColorScheme: n2, darkColorScheme: r2 };
  }), [S2, C2] = n(p2 || !h2);
  o(() => {
    C2(true);
  }, []);
  let w2 = cn(b2), T2 = i((e3) => {
    x2((n2) => {
      if (e3 === n2.mode) return n2;
      let r2 = e3 ?? t2;
      return g2 == null ? void 0 : g2.set(r2), { ...n2, mode: r2, systemMode: on(r2) };
    });
  }, [g2, t2]), E2 = i((e3) => {
    e3 ? typeof e3 == `string` ? e3 && !m2.includes(e3) ? console.error(`\`${e3}\` does not exist in \`theme.colorSchemes\`.`) : x2((t3) => {
      let n2 = { ...t3 };
      return sn(t3, (t4) => {
        t4 === `light` && (v2 == null ? void 0 : v2.set(e3), n2.lightColorScheme = e3), t4 === `dark` && (y2 == null ? void 0 : y2.set(e3), n2.darkColorScheme = e3);
      }), n2;
    }) : x2((t3) => {
      let n2 = { ...t3 }, r2 = e3.light === null ? a2 : e3.light, i2 = e3.dark === null ? s2 : e3.dark;
      return r2 && (m2.includes(r2) ? (n2.lightColorScheme = r2, v2 == null ? void 0 : v2.set(r2)) : console.error(`\`${r2}\` does not exist in \`theme.colorSchemes\`.`)), i2 && (m2.includes(i2) ? (n2.darkColorScheme = i2, y2 == null ? void 0 : y2.set(i2)) : console.error(`\`${i2}\` does not exist in \`theme.colorSchemes\`.`)), n2;
    }) : x2((e4) => (v2 == null ? void 0 : v2.set(a2), y2 == null ? void 0 : y2.set(s2), { ...e4, lightColorScheme: a2, darkColorScheme: s2 }));
  }, [m2, v2, y2, a2, s2]), D2 = i((e3) => {
    b2.mode === `system` && x2((t3) => {
      let n2 = (e3 == null ? void 0 : e3.matches) ? `dark` : `light`;
      return t3.systemMode === n2 ? t3 : { ...t3, systemMode: n2 };
    });
  }, [b2.mode]), O2 = r(D2);
  return O2.current = D2, o(() => {
    if (typeof window.matchMedia != `function` || !h2) return;
    let e3 = (...e4) => O2.current(...e4), t3 = window.matchMedia(`(prefers-color-scheme: dark)`);
    return t3.addListener(e3), e3(t3), () => {
      t3.removeListener(e3);
    };
  }, [h2]), o(() => {
    if (h2) {
      let e3 = (g2 == null ? void 0 : g2.subscribe((e4) => {
        (!e4 || [`light`, `dark`, `system`].includes(e4)) && T2(e4 || t2);
      })) || an, n2 = (v2 == null ? void 0 : v2.subscribe((e4) => {
        (!e4 || m2.match(e4)) && E2({ light: e4 });
      })) || an, r2 = (y2 == null ? void 0 : y2.subscribe((e4) => {
        (!e4 || m2.match(e4)) && E2({ dark: e4 });
      })) || an;
      return () => {
        e3(), n2(), r2();
      };
    }
  }, [E2, T2, m2, t2, d2, h2, g2, v2, y2]), { ...b2, mode: S2 ? b2.mode : void 0, systemMode: S2 ? b2.systemMode : void 0, colorScheme: S2 ? w2 : void 0, setMode: T2, setColorScheme: E2 };
}
var un = `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function dn(e2) {
  let { themeId: t2, theme: n2 = {}, modeStorageKey: i2 = Mt, colorSchemeStorageKey: s2 = Ft, disableTransitionOnChange: c2 = false, defaultColorScheme: u2, resolveTheme: d2 } = e2, m2 = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, g2 = l(void 0), v2 = () => h(g2) || m2, b2 = {}, x2 = {};
  function S2(e3) {
    var _a2, _b, _c, _d;
    let { children: l2, theme: m3, modeStorageKey: v3 = i2, colorSchemeStorageKey: S3 = s2, disableTransitionOnChange: C3 = c2, storageManager: w3, storageWindow: T2 = typeof window > `u` ? void 0 : window, documentNode: E2 = typeof document > `u` ? void 0 : document, colorSchemeNode: D2 = typeof document > `u` ? void 0 : document.documentElement, disableNestedContext: O2 = false, disableStyleSheetGeneration: ee2 = false, defaultMode: te2 = `system`, forceThemeRerender: ne2 = false, noSsr: k2 } = e3, A2 = r(false), re2 = a(), j2 = h(g2), M2 = !!j2 && !O2, ie2 = _(() => m3 || (typeof n2 == `function` ? n2() : n2), [m3]), ae2 = ie2[t2], N2 = ae2 || ie2, { colorSchemes: P2 = b2, components: oe2 = x2, cssVarPrefix: F2 } = N2, se2 = Object.keys(P2).filter((e4) => !!P2[e4]).join(`,`), I2 = _(() => se2.split(`,`), [se2]), ce2 = typeof u2 == `string` ? u2 : u2.light, L2 = typeof u2 == `string` ? u2 : u2.dark, { mode: le2, setMode: ue2, systemMode: de2, lightColorScheme: R2, darkColorScheme: fe2, colorScheme: pe2, setColorScheme: me2 } = ln({ supportedColorSchemes: I2, defaultLightColorScheme: ce2, defaultDarkColorScheme: L2, modeStorageKey: v3, colorSchemeStorageKey: S3, defaultMode: P2[ce2] && P2[L2] ? te2 : ((_b = (_a2 = P2[N2.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c = N2.palette) == null ? void 0 : _c.mode), storageManager: w3, storageWindow: T2, noSsr: k2 }), z2 = le2, B2 = pe2;
    M2 && (z2 = j2.mode, B2 = j2.colorScheme);
    let V2 = B2 || N2.defaultColorScheme;
    N2.vars && !ne2 && (V2 = N2.defaultColorScheme);
    let H2 = _(() => {
      var _a3;
      let e4 = ((_a3 = N2.generateThemeVars) == null ? void 0 : _a3.call(N2)) || N2.vars, t3 = { ...N2, components: oe2, colorSchemes: P2, cssVarPrefix: F2, vars: e4 };
      if (typeof t3.generateSpacing == `function` && (t3.spacing = t3.generateSpacing()), V2) {
        let e5 = P2[V2];
        e5 && typeof e5 == `object` && Object.keys(e5).forEach((n3) => {
          e5[n3] && typeof e5[n3] == `object` ? t3[n3] = { ...t3[n3], ...e5[n3] } : t3[n3] = e5[n3];
        });
      }
      return d2 ? d2(t3) : t3;
    }, [N2, V2, oe2, P2, F2]), U2 = N2.colorSchemeSelector;
    Ct(() => {
      if (B2 && D2 && U2 && U2 !== `media`) {
        let e4 = U2, t3 = U2;
        if (e4 === `class` && (t3 = `.%s`), e4 === `data` && (t3 = `[data-%s]`), (e4 == null ? void 0 : e4.startsWith(`data-`)) && !e4.includes(`%s`) && (t3 = `[${e4}="%s"]`), t3.startsWith(`.`)) D2.classList.remove(...I2.map((e5) => t3.substring(1).replace(`%s`, e5))), D2.classList.add(t3.substring(1).replace(`%s`, B2));
        else {
          let e5 = t3.replace(`%s`, B2).match(/\[([^\]]+)\]/);
          if (e5) {
            let [t4, n3] = e5[1].split(`=`);
            n3 || I2.forEach((e6) => {
              D2.removeAttribute(t4.replace(B2, e6));
            }), D2.setAttribute(t4, n3 ? n3.replace(/"|'/g, ``) : ``);
          } else D2.setAttribute(t3, B2);
        }
      }
    }, [B2, U2, D2, I2]), o(() => {
      let e4;
      if (C3 && A2.current && E2) {
        let t3 = E2.createElement(`style`);
        t3.appendChild(E2.createTextNode(un)), E2.head.appendChild(t3), window.getComputedStyle(E2.body), e4 = setTimeout(() => {
          E2.head.removeChild(t3);
        }, 1);
      }
      return () => {
        clearTimeout(e4);
      };
    }, [B2, C3, E2]), o(() => (A2.current = true, () => {
      A2.current = false;
    }), []);
    let he2 = _(() => ({ allColorSchemes: I2, colorScheme: B2, darkColorScheme: fe2, lightColorScheme: R2, mode: z2, setColorScheme: me2, setMode: ue2, systemMode: de2 }), [I2, B2, fe2, R2, z2, me2, ue2, de2, H2.colorSchemeSelector]), W2 = true;
    (ee2 || N2.cssVariables === false || M2 && (re2 == null ? void 0 : re2.cssVarPrefix) === F2) && (W2 = false);
    let ge2 = p(y, { children: [f(tn, { themeId: ae2 ? t2 : void 0, theme: H2, children: l2 }), W2 && f(Yt, { styles: ((_d = H2.generateStyleSheets) == null ? void 0 : _d.call(H2)) || [] })] });
    return M2 ? ge2 : f(g2.Provider, { value: he2, children: ge2 });
  }
  let C2 = typeof u2 == `string` ? u2 : u2.light, w2 = typeof u2 == `string` ? u2 : u2.dark;
  return { CssVarsProvider: S2, useColorScheme: v2, getInitColorSchemeScript: (e3) => At({ colorSchemeStorageKey: s2, defaultLightColorScheme: C2, defaultDarkColorScheme: w2, modeStorageKey: i2, ...e3 }) };
}
function fn({ colorSchemeSelector: e2 = `[${kt}="%s"]`, ...t2 }) {
  let n2 = t2, r2 = ft(n2, { ...t2, prefix: t2.cssVarPrefix, colorSchemeSelector: e2 });
  return n2.vars = r2.vars, n2.generateThemeVars = r2.generateThemeVars, n2.generateStyleSheets = r2.generateStyleSheets, n2.colorSchemeSelector = e2, n2.getColorSchemeSelector = Ze(e2), n2.internal_cache = {}, n2;
}
var pn = (e2) => {
  var _a2;
  let t2 = { systemProps: {}, otherProps: {} }, n2 = ((_a2 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? We;
  return Object.keys(e2).forEach((r2) => {
    n2[r2] ? t2.systemProps[r2] = e2[r2] : t2.otherProps[r2] = e2[r2];
  }), t2;
};
function mn(e2) {
  let { sx: t2, ...n2 } = e2, { systemProps: r2, otherProps: i2 } = pn(n2), a2;
  return a2 = Array.isArray(t2) ? [r2, ...t2] : typeof t2 == `function` ? (...e3) => {
    let n3 = t2(...e3);
    return U(n3) ? { ...r2, ...n3 } : r2;
  } : { ...r2, ...t2 }, { ...i2, sx: a2 };
}
var hn = It();
function gn(e2) {
  return X(`MuiGrid`, e2);
}
var _n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vn = [`column-reverse`, `column`, `row-reverse`, `row`], yn = [`nowrap`, `wrap-reverse`, `wrap`], Q = [`auto`, `grow`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], bn = J(`MuiGrid`, [`root`, `container`, `item`, ..._n.map((e2) => `spacing-xs-${e2}`), ...vn.map((e2) => `direction-xs-${e2}`), ...yn.map((e2) => `wrap-xs-${e2}`), ...Q.map((e2) => `grid-xs-${e2}`), ...Q.map((e2) => `grid-sm-${e2}`), ...Q.map((e2) => `grid-md-${e2}`), ...Q.map((e2) => `grid-lg-${e2}`), ...Q.map((e2) => `grid-xl-${e2}`)]), xn = G({ prop: `displayPrint`, cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }), Sn = G({ prop: `display` }), Cn = G({ prop: `overflow` }), wn = G({ prop: `textOverflow` }), Tn = G({ prop: `visibility` }), En = G({ prop: `whiteSpace` }), Dn = Y(xn, Sn, Cn, wn, Tn, En), On = G({ prop: `flexBasis` }), kn = G({ prop: `flexDirection` }), An = G({ prop: `flexWrap` }), jn = G({ prop: `justifyContent` }), Mn = G({ prop: `alignItems` }), Nn = G({ prop: `alignContent` }), Pn = G({ prop: `order` }), Fn = G({ prop: `flex` }), In = G({ prop: `flexGrow` }), Ln = G({ prop: `flexShrink` }), Rn = G({ prop: `alignSelf` }), zn = G({ prop: `justifyItems` }), Bn = G({ prop: `justifySelf` }), Vn = Y(On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn), Hn = G({ prop: `position` }), Un = G({ prop: `zIndex`, themeKey: `zIndex` }), Wn = G({ prop: `top` }), Gn = G({ prop: `right` }), Kn = G({ prop: `bottom` }), qn = G({ prop: `left` }), Jn = Y(Hn, Un, Wn, Gn, Kn, qn), Yn = G({ prop: `boxShadow`, themeKey: `shadows` }), Xn = G({ prop: `fontFamily`, themeKey: `typography` }), Zn = G({ prop: `fontSize`, themeKey: `typography` }), Qn = G({ prop: `fontStyle`, themeKey: `typography` }), $n = G({ prop: `fontWeight`, themeKey: `typography` }), er = G({ prop: `letterSpacing` }), tr = G({ prop: `textTransform` }), nr = G({ prop: `lineHeight` }), rr = G({ prop: `textAlign` }), ir = G({ prop: `typography`, cssProperty: false, themeKey: `typography` }), ar = Y(ir, Xn, Zn, Qn, $n, er, nr, rr, tr), or = { borders: ct, display: Dn, flexbox: Vn, grid: B, positions: Jn, palette: T, shadows: Yn, sizing: ht, spacing: _e, typography: ar }, sr = Object.keys(or).reduce((e2, t2) => {
  let n2 = or[t2];
  for (let t3 of n2.filterProps) e2[t3] = n2;
  return e2;
}, {});
function cr(e2, t2, n2) {
  let r2 = { [e2]: t2, theme: n2 }, i2 = sr[e2];
  return i2 ? i2(r2) : { [e2]: t2 };
}
function lr(e2 = {}) {
  let { themeId: t2, defaultTheme: n2, defaultClassName: r2 = `MuiBox-root`, generateClassName: i2 } = e2, a2 = et(`div`, { shouldForwardProp: (e3) => e3 !== `theme` && e3 !== `sx` && e3 !== `as` })(rt);
  return d(function(e3, o2) {
    let s2 = wt(n2), { className: c2, component: l2 = `div`, ...u2 } = e3;
    return f(a2, { as: l2, ref: o2, className: Ve(c2, i2 ? i2(r2) : r2), theme: t2 && s2[t2] || s2, ...u2 });
  });
}
var ur = J(`MuiBox`, [`root`]), dr = lr({ defaultClassName: ur.root, generateClassName: Ie.generate }), fr = { theme: void 0 };
function pr(e2) {
  let t2, n2;
  return function(r2) {
    let i2 = t2;
    return (i2 === void 0 || r2.theme !== n2) && (fr.theme = r2.theme, i2 = Ke(e2(fr)), t2 = i2, n2 = r2.theme), i2;
  };
}
function mr(e2 = ``) {
  function t2(...n2) {
    if (!n2.length) return ``;
    let r2 = n2[0];
    return typeof r2 == `string` && !r2.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ``}${r2}${t2(...n2.slice(1))})` : `, ${r2}`;
  }
  return (n2, ...r2) => `var(--${e2 ? `${e2}-` : ``}${n2}${t2(...r2)})`;
}
var hr = `9.5.0`, gr = K(), _r = Dt(`div`, { name: `MuiContainer`, slot: `Root`, overridesResolver: (e2, t2) => {
  let { ownerState: n2 } = e2;
  return [t2.root, t2[`maxWidth${re(String(n2.maxWidth))}`], n2.fixed && t2.fixed, n2.disableGutters && t2.disableGutters];
} }), vr = (e2) => Rt({ props: e2, name: `MuiContainer`, defaultTheme: gr }), yr = (e2, t2) => {
  let n2 = (e3) => X(t2, e3), { classes: r2, fixed: i2, disableGutters: a2, maxWidth: o2 } = e2, s2 = { root: [`root`, o2 && `maxWidth${re(String(o2))}`, i2 && `fixed`, a2 && `disableGutters`] };
  return Me(s2, n2, r2);
};
function br(e2 = {}) {
  let { createStyledComponent: t2 = _r, useThemeProps: n2 = vr, componentName: r2 = `MuiContainer` } = e2, i2 = t2(({ theme: e3, ownerState: t3 }) => ({ width: `100%`, marginLeft: `auto`, boxSizing: `border-box`, marginRight: `auto`, ...!t3.disableGutters && { paddingLeft: e3.spacing(2), paddingRight: e3.spacing(2), [e3.breakpoints.up(`sm`)]: { paddingLeft: e3.spacing(3), paddingRight: e3.spacing(3) } } }), ({ theme: e3, ownerState: t3 }) => t3.fixed && Object.keys(e3.breakpoints.values).reduce((t4, n3) => {
    let r3 = n3, i3 = e3.breakpoints.values[r3];
    return i3 !== 0 && (t4[e3.breakpoints.up(r3)] = { maxWidth: `${i3}${e3.breakpoints.unit}` }), t4;
  }, {}), ({ theme: e3, ownerState: t3 }) => ({ ...t3.maxWidth === `xs` && { [e3.breakpoints.up(`xs`)]: { maxWidth: Math.max(e3.breakpoints.values.xs, 444) } }, ...t3.maxWidth && t3.maxWidth !== `xs` && { [e3.breakpoints.up(t3.maxWidth)]: { maxWidth: `${e3.breakpoints.values[t3.maxWidth]}${e3.breakpoints.unit}` } } }));
  return d(function(e3, t3) {
    let a2 = n2(e3), { className: o2, component: s2 = `div`, disableGutters: c2 = false, fixed: l2 = false, maxWidth: u2 = `lg`, classes: d2, ...p2 } = a2, m2 = { ...a2, component: s2, disableGutters: c2, fixed: l2, maxWidth: u2 }, h2 = yr(m2, r2);
    return f(i2, { as: s2, ownerState: m2, className: Ve(h2.root, o2), ref: t3, ...p2 });
  });
}
var xr = br();
function Sr(e2) {
  return X(`MuiContainer`, e2);
}
var Cr = J(`MuiContainer`, [`root`, `disableGutters`, `fixed`, `maxWidthXs`, `maxWidthSm`, `maxWidthMd`, `maxWidthLg`, `maxWidthXl`]), wr = K(), Tr = Dt(`div`, { name: `MuiStack`, slot: `Root` });
function Er(e2) {
  return Rt({ props: e2, name: `MuiStack`, defaultTheme: wr });
}
function Dr(e2, t2) {
  let n2 = m.toArray(e2).filter(Boolean);
  return n2.reduce((e3, r2, i2) => (e3.push(r2), i2 < n2.length - 1 && e3.push(c(t2, { key: `separator-${i2}` })), e3), []);
}
var Or = (e2) => ({ row: `Left`, "row-reverse": `Right`, column: `Top`, "column-reverse": `Bottom` })[e2], kr = ({ ownerState: e2, theme: t2 }) => {
  let n2 = { display: `flex`, flexDirection: `column`, ...k({ theme: t2 }, q({ values: e2.direction, breakpoints: t2.breakpoints.values }), (e3) => ({ flexDirection: e3 })) };
  if (e2.spacing) {
    let r2 = Ge(t2), i2 = Object.keys(t2.breakpoints.values).reduce((t3, n3) => ((typeof e2.spacing == `object` && e2.spacing[n3] != null || typeof e2.direction == `object` && e2.direction[n3] != null) && (t3[n3] = true), t3), {}), a2 = q({ values: e2.direction, base: i2 }), o2 = q({ values: e2.spacing, base: i2 });
    typeof a2 == `object` && Object.keys(a2).forEach((e3, t3, n3) => {
      if (!a2[e3]) {
        let r3 = t3 > 0 ? a2[n3[t3 - 1]] : `column`;
        a2[e3] = r3;
      }
    }), n2 = ke(n2, k({ theme: t2 }, o2, (t3, n3) => e2.useFlexGap ? { gap: je(r2, t3) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${Or(n3 ? a2[n3] : e2.direction)}`]: je(r2, t3) } }));
  }
  return n2 = z(t2.breakpoints, n2), n2;
};
function Ar(e2 = {}) {
  let { createStyledComponent: t2 = Tr, useThemeProps: n2 = Er, componentName: r2 = `MuiStack` } = e2, i2 = () => Me({ root: [`root`] }, (e3) => X(r2, e3), {}), a2 = t2(kr);
  return d(function(e3, t3) {
    let { component: r3 = `div`, direction: o2 = `column`, spacing: s2 = 0, divider: c2, children: l2, className: u2, useFlexGap: d2 = false, ...p2 } = n2(e3), m2 = { direction: o2, spacing: s2, useFlexGap: d2 }, h2 = i2();
    return f(a2, { as: r3, ownerState: m2, ref: t3, className: Ve(h2.root, u2), ...p2, children: c2 ? Dr(l2, c2) : l2 });
  });
}
var jr = Ar();
function Mr(e2) {
  return X(`MuiStack`, e2);
}
var Nr = J(`MuiStack`, [`root`]), Pr = e({ Box: () => dr, Container: () => xr, GlobalStyles: () => Zt, Grid: () => hn, RtlProvider: () => Vt, Stack: () => jr, StyledEngineProvider: () => qt, ThemeProvider: () => tn, alignContent: () => Nn, alignItems: () => Mn, alignSelf: () => Rn, alpha: () => R, backgroundColor: () => ne, bgcolor: () => me, blend: () => pe, border: () => ie, borderBottom: () => ce, borderBottomColor: () => at, borderColor: () => se, borderLeft: () => Ee, borderLeftColor: () => Te, borderRadius: () => Oe, borderRight: () => H, borderRightColor: () => C, borderTop: () => Be, borderTopColor: () => dt, borderTransform: () => nt, borders: () => ct, bottom: () => Kn, boxClasses: () => ur, boxSizing: () => He, breakpoints: () => E, color: () => Xe, colorChannel: () => V, columnGap: () => de, compose: () => Y, containerClasses: () => Cr, createBox: () => lr, createBreakpoints: () => w, createContainer: () => br, createGrid: () => It, createSpacing: () => lt, createStack: () => Ar, createStyled: () => ut, createTheme: () => K, createUnarySpacing: () => Ge, createUnaryUnit: () => Ue, css: () => s, cssContainerQueries: () => Ye, darken: () => M, decomposeColor: () => F, display: () => Dn, emphasize: () => ue, experimental_sx: () => Fr, flex: () => Fn, flexBasis: () => On, flexDirection: () => kn, flexGrow: () => In, flexShrink: () => Ln, flexWrap: () => An, flexbox: () => Vn, fontFamily: () => Xn, fontSize: () => Zn, fontStyle: () => Qn, fontWeight: () => $n, gap: () => fe, getContainerUtilityClass: () => Sr, getContrastRatio: () => W, getGridUtilityClass: () => gn, getLuminance: () => St, getPath: () => te, getStackUtilityClass: () => Mr, getStyleValue: () => gt, getThemeProps: () => Ot, getValue: () => je, grid: () => B, gridArea: () => j, gridAutoColumns: () => oe, gridAutoFlow: () => le, gridAutoRows: () => he, gridClasses: () => bn, gridColumn: () => xt, gridRow: () => D, gridTemplateAreas: () => xe, gridTemplateColumns: () => N, gridTemplateRows: () => ye, handleBreakpoints: () => k, height: () => Ae, hexToRgb: () => O, hslToRgb: () => Se, justifyContent: () => jn, justifyItems: () => zn, justifySelf: () => Bn, keyframes: () => v, left: () => qn, letterSpacing: () => er, lighten: () => P, lineHeight: () => nr, major: () => 9, margin: () => mt, marginKeys: () => bt, maxHeight: () => pt, maxWidth: () => yt, mergeBreakpointsInOrder: () => z, minHeight: () => Pe, minWidth: () => _t, minor: () => 5, order: () => Pn, outline: () => qe, outlineColor: () => Ne, padding: () => Fe, paddingKeys: () => vt, palette: () => T, paletteTransform: () => Je, patch: () => 0, position: () => Hn, positions: () => Jn, prerelease: () => void 0, private_safeAlpha: () => be, private_safeColorChannel: () => we, private_safeDarken: () => ae, private_safeEmphasize: () => L, private_safeLighten: () => ot, recomposeColor: () => I, responsivePropType: () => Ht, rgbToHex: () => De, right: () => Gn, rowGap: () => Ce, shadows: () => Yn, shape: () => Le, shouldForwardProp: () => tt, sizeHeight: () => ge, sizeWidth: () => ee, sizing: () => ht, sizingTransform: () => ve, spacing: () => _e, stackClasses: () => Nr, style: () => G, styled: () => Dt, systemDefaultTheme: () => st, textAlign: () => rr, textTransform: () => tr, top: () => Wn, typography: () => ar, typographyVariant: () => ir, unstable_createCssVarsProvider: () => dn, unstable_createCssVarsTheme: () => fn, unstable_createGetCssVar: () => mr, unstable_createStyleFunctionSx: () => $e, unstable_cssVarsParser: () => Re, unstable_defaultSxConfig: () => We, unstable_extendSxProp: () => mn, unstable_generateDirectionClasses: () => jt, unstable_generateSizeClassNames: () => Tt, unstable_generateSpacingClassNames: () => Pt, unstable_getThemeValue: () => cr, unstable_memoTheme: () => pr, unstable_prepareCssVars: () => ft, unstable_resolveBreakpointValues: () => q, unstable_styleFunctionSx: () => rt, unstable_traverseBreakpoints: () => Lt, useMediaQuery: () => Nt, useRtl: () => Et, useTheme: () => wt, useThemeProps: () => Rt, useThemeWithoutDefault: () => Bt, version: () => hr, width: () => A, zIndex: () => Un });
function Fr() {
  throw Error(ze(19));
}
var $ = Pr, Ir = $.experimental_sx, Lr = $.css, Rr = $.keyframes, zr = $.StyledEngineProvider, Br = $.GlobalStyles, Vr = $.borders, Hr = $.breakpoints, Ur = $.cssContainerQueries, Wr = $.handleBreakpoints, Gr = $.mergeBreakpointsInOrder, Kr = $.unstable_resolveBreakpointValues, qr = $.compose, Jr = $.display, Yr = $.flexbox, Xr = $.grid, Zr = $.palette, Qr = $.positions, $r = $.shadows, ei = $.sizing, ti = $.spacing, ni = $.style, ri = $.getPath, ii = $.getStyleValue, ai = $.typography, oi = $.unstable_styleFunctionSx, si = $.unstable_createStyleFunctionSx, ci = $.unstable_extendSxProp, li = $.unstable_defaultSxConfig, ui = $.unstable_getThemeValue, di = $.Box, fi = $.createBox, pi = $.createStyled, mi = $.styled, hi = $.createTheme, gi = $.createBreakpoints, _i = $.createSpacing, vi = $.shape, yi = $.useThemeProps, bi = $.getThemeProps, xi = $.useTheme, Si = $.useThemeWithoutDefault, Ci = $.useMediaQuery, wi = $.ThemeProvider, Ti = $.unstable_memoTheme, Ei = $.unstable_createCssVarsProvider, Di = $.unstable_createGetCssVar, Oi = $.unstable_cssVarsParser, ki = $.unstable_prepareCssVars, Ai = $.unstable_createCssVarsTheme, ji = $.responsivePropType, Mi = $.RtlProvider, Ni = $.createContainer, Pi = $.Container, Fi = $.Grid, Ii = $.Stack, Li = $.borderTransform, Ri = $.border, zi = $.borderTop, Bi = $.borderRight, Vi = $.borderBottom, Hi = $.borderLeft, Ui = $.borderColor, Wi = $.borderTopColor, Gi = $.borderRightColor, Ki = $.borderBottomColor, qi = $.borderLeftColor, Ji = $.outline, Yi = $.outlineColor, Xi = $.borderRadius, Zi = $.flexBasis, Qi = $.flexDirection, $i = $.flexWrap, ea = $.justifyContent, ta = $.alignItems, na = $.alignContent, ra = $.order, ia = $.flex, aa = $.flexGrow, oa = $.flexShrink, sa = $.alignSelf, ca = $.justifyItems, la = $.justifySelf, ua = $.gap, da = $.columnGap, fa = $.rowGap, pa = $.gridColumn, ma = $.gridRow, ha = $.gridAutoFlow, ga = $.gridAutoColumns, _a = $.gridAutoRows, va = $.gridTemplateColumns, ya = $.gridTemplateRows, ba = $.gridTemplateAreas, xa = $.gridArea, Sa = $.paletteTransform, Ca = $.color, wa = $.bgcolor, Ta = $.backgroundColor, Ea = $.position, Da = $.zIndex, Oa = $.top, ka = $.right, Aa = $.bottom, ja = $.left, Ma = $.sizingTransform, Na = $.width, Pa = $.maxWidth, Fa = $.minWidth, Ia = $.height, La = $.maxHeight, Ra = $.minHeight, za = $.sizeWidth, Ba = $.sizeHeight, Va = $.boxSizing, Ha = $.marginKeys, Ua = $.paddingKeys, Wa = $.createUnaryUnit, Ga = $.createUnarySpacing, Ka = $.getValue, qa = $.margin, Ja = $.padding, Ya = $.fontFamily, Xa = $.fontSize, Za = $.fontStyle, Qa = $.fontWeight, $a = $.letterSpacing, eo = $.textTransform, to = $.lineHeight, no = $.textAlign, ro = $.typographyVariant, io = $.boxClasses, ao = $.systemDefaultTheme, oo = $.shouldForwardProp, so = $.hexToRgb, co = $.decomposeColor, lo = $.colorChannel, uo = $.private_safeColorChannel, fo = $.recomposeColor, po = $.rgbToHex, mo = $.hslToRgb, ho = $.getLuminance, go = $.getContrastRatio, _o = $.alpha, vo = $.private_safeAlpha, yo = $.darken, bo = $.private_safeDarken, xo = $.lighten, So = $.private_safeLighten, Co = $.emphasize, wo = $.private_safeEmphasize, To = $.blend, Eo = $.useRtl, Do = $.version, Oo = $.major, ko = $.minor, Ao = $.patch, jo = $.prerelease, Mo = $.containerClasses, No = $.getContainerUtilityClass, Po = $.createGrid, Fo = $.gridClasses, Io = $.unstable_traverseBreakpoints, Lo = $.unstable_generateDirectionClasses, Ro = $.unstable_generateSizeClassNames, zo = $.unstable_generateSpacingClassNames, Bo = $.getGridUtilityClass, Vo = $.createStack, Ho = $.stackClasses, Uo = $.getStackUtilityClass, Wo = Reflect.get(Pr, `default`) ?? Pr;
export {
  di as Box,
  Pi as Container,
  Br as GlobalStyles,
  Fi as Grid,
  Mi as RtlProvider,
  Ii as Stack,
  zr as StyledEngineProvider,
  wi as ThemeProvider,
  na as alignContent,
  ta as alignItems,
  sa as alignSelf,
  _o as alpha,
  Ta as backgroundColor,
  wa as bgcolor,
  To as blend,
  Ri as border,
  Vi as borderBottom,
  Ki as borderBottomColor,
  Ui as borderColor,
  Hi as borderLeft,
  qi as borderLeftColor,
  Xi as borderRadius,
  Bi as borderRight,
  Gi as borderRightColor,
  zi as borderTop,
  Wi as borderTopColor,
  Li as borderTransform,
  Vr as borders,
  Aa as bottom,
  io as boxClasses,
  Va as boxSizing,
  Hr as breakpoints,
  Ca as color,
  lo as colorChannel,
  da as columnGap,
  qr as compose,
  Mo as containerClasses,
  fi as createBox,
  gi as createBreakpoints,
  Ni as createContainer,
  Po as createGrid,
  _i as createSpacing,
  Vo as createStack,
  pi as createStyled,
  hi as createTheme,
  Ga as createUnarySpacing,
  Wa as createUnaryUnit,
  Lr as css,
  Ur as cssContainerQueries,
  yo as darken,
  co as decomposeColor,
  Wo as default,
  Jr as display,
  Co as emphasize,
  Ir as experimental_sx,
  ia as flex,
  Zi as flexBasis,
  Qi as flexDirection,
  aa as flexGrow,
  oa as flexShrink,
  $i as flexWrap,
  Yr as flexbox,
  Ya as fontFamily,
  Xa as fontSize,
  Za as fontStyle,
  Qa as fontWeight,
  ua as gap,
  No as getContainerUtilityClass,
  go as getContrastRatio,
  Bo as getGridUtilityClass,
  ho as getLuminance,
  ri as getPath,
  Uo as getStackUtilityClass,
  ii as getStyleValue,
  bi as getThemeProps,
  Ka as getValue,
  Xr as grid,
  xa as gridArea,
  ga as gridAutoColumns,
  ha as gridAutoFlow,
  _a as gridAutoRows,
  Fo as gridClasses,
  pa as gridColumn,
  ma as gridRow,
  ba as gridTemplateAreas,
  va as gridTemplateColumns,
  ya as gridTemplateRows,
  Wr as handleBreakpoints,
  Ia as height,
  so as hexToRgb,
  mo as hslToRgb,
  ea as justifyContent,
  ca as justifyItems,
  la as justifySelf,
  Rr as keyframes,
  ja as left,
  $a as letterSpacing,
  xo as lighten,
  to as lineHeight,
  Oo as major,
  qa as margin,
  Ha as marginKeys,
  La as maxHeight,
  Pa as maxWidth,
  Gr as mergeBreakpointsInOrder,
  Ra as minHeight,
  Fa as minWidth,
  ko as minor,
  ra as order,
  Ji as outline,
  Yi as outlineColor,
  Ja as padding,
  Ua as paddingKeys,
  Zr as palette,
  Sa as paletteTransform,
  Ao as patch,
  Ea as position,
  Qr as positions,
  jo as prerelease,
  vo as private_safeAlpha,
  uo as private_safeColorChannel,
  bo as private_safeDarken,
  wo as private_safeEmphasize,
  So as private_safeLighten,
  fo as recomposeColor,
  ji as responsivePropType,
  po as rgbToHex,
  ka as right,
  fa as rowGap,
  $r as shadows,
  vi as shape,
  oo as shouldForwardProp,
  Ba as sizeHeight,
  za as sizeWidth,
  ei as sizing,
  Ma as sizingTransform,
  ti as spacing,
  Ho as stackClasses,
  ni as style,
  mi as styled,
  ao as systemDefaultTheme,
  no as textAlign,
  eo as textTransform,
  Oa as top,
  ai as typography,
  ro as typographyVariant,
  Ei as unstable_createCssVarsProvider,
  Ai as unstable_createCssVarsTheme,
  Di as unstable_createGetCssVar,
  si as unstable_createStyleFunctionSx,
  Oi as unstable_cssVarsParser,
  li as unstable_defaultSxConfig,
  ci as unstable_extendSxProp,
  Lo as unstable_generateDirectionClasses,
  Ro as unstable_generateSizeClassNames,
  zo as unstable_generateSpacingClassNames,
  ui as unstable_getThemeValue,
  Ti as unstable_memoTheme,
  ki as unstable_prepareCssVars,
  Kr as unstable_resolveBreakpointValues,
  oi as unstable_styleFunctionSx,
  Io as unstable_traverseBreakpoints,
  Ci as useMediaQuery,
  Eo as useRtl,
  xi as useTheme,
  yi as useThemeProps,
  Si as useThemeWithoutDefault,
  Do as version,
  Na as width,
  Da as zIndex
};
