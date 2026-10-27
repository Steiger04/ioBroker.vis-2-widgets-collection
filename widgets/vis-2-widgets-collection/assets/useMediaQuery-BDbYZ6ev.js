import { D as e, _ as t, b as n, d as r, f as i, h as a, j as o, m as s, o as c, u as l, v as u, w as d, yn as f } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { a as p, dt as m, f as h, ft as ee, s as g, t as _ } from "./createStyled-C2Uprg2G.js";
import { t as v } from "./useEnhancedEffect-B263MN2W.js";
function y(e2) {
  return Object.keys(e2).length === 0;
}
function b(e2 = null) {
  let t2 = u(f);
  return !t2 || y(t2) ? e2 : t2;
}
var x = i(void 0);
function S({ value: e2, ...t2 }) {
  return c(x.Provider, { value: e2 ?? true, ...t2 });
}
var C = () => u(x) ?? false, w = 0;
function T(t2) {
  let [r2, i2] = e(t2), a2 = t2 || r2;
  return n(() => {
    r2 ?? (w += 1, i2(`mui-${w}`));
  }, [r2]), a2;
}
var E = { ...o }.useId;
function D(e2) {
  if (E !== void 0) {
    let t2 = E();
    return e2 ?? t2;
  }
  return T(e2);
}
var O = h();
function k(e2 = O) {
  return b(e2);
}
var A = `mode`, j = `color-scheme`, M = `data-color-scheme`, N = { ...o }.useSyncExternalStore, P = () => () => {
};
function F(e2) {
  return JSON.stringify(e2).replace(/</g, `\\u003c`).replace(/\u2028/g, `\\u2028`).replace(/\u2029/g, `\\u2029`);
}
function I(e2, t2) {
  let n2 = e2.split(`%s`), r2 = [];
  for (let e3 = 0; e3 < n2.length; e3 += 1) e3 > 0 && r2.push(t2), n2[e3] && r2.push(F(n2[e3]));
  return r2.join(` + `) || `""`;
}
function te() {
  return N === void 0 || N(P, () => false, () => true);
}
function L(e2) {
  let { defaultMode: t2 = `system`, defaultLightColorScheme: n2 = `light`, defaultDarkColorScheme: r2 = `dark`, modeStorageKey: i2 = A, colorSchemeStorageKey: a2 = j, attribute: o2 = M, colorSchemeNode: s2 = `document.documentElement`, nonce: l2 } = e2 || {}, u2 = ``, d2 = o2;
  if (o2 === `class` && (d2 = `.%s`), o2 === `data` && (d2 = `[data-%s]`), d2.startsWith(`.`)) {
    let e3 = d2.substring(1);
    u2 += `${s2}.classList.remove(${I(e3, `light`)}, ${I(e3, `dark`)});
      ${s2}.classList.add(${I(e3, `colorScheme`)});`;
  }
  let f2 = d2.match(/\[([^[\]]+)\]/);
  if (f2) {
    let e3 = f2[1].indexOf(`=`), t3 = e3 === -1 ? f2[1] : f2[1].slice(0, e3), n3 = e3 === -1 ? void 0 : f2[1].slice(e3 + 1);
    n3 || (u2 += `${s2}.removeAttribute(${I(t3, `light`)});
      ${s2}.removeAttribute(${I(t3, `dark`)});`);
    let r3 = n3 ? I(n3.replace(/^(['"])(.*)\1$/, `$2`), `colorScheme`) : `""`;
    u2 += `
      ${s2}.setAttribute(${I(t3, `colorScheme`)}, ${r3});`;
  } else d2.startsWith(`.`) || (u2 += `${s2}.setAttribute(${F(d2)}, colorScheme);`);
  return c(`script`, { suppressHydrationWarning: true, nonce: typeof window > `u` ? l2 : ``, dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem(${F(i2)}) || ${F(t2)};
  const dark = localStorage.getItem(${F(`${a2}-dark`)}) || ${F(r2)};
  const light = localStorage.getItem(${F(`${a2}-light`)}) || ${F(n2)};
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
    ${u2}
  }
} catch(e){}})();` } }, `mui-color-scheme-init`);
}
function ne(e2) {
  return te() ? L(e2) : null;
}
function R(e2) {
  let { theme: t2, name: n2, props: r2 } = e2;
  return !t2 || !t2.components || !t2.components[n2] || !t2.components[n2].defaultProps ? r2 : m(t2.components[n2].defaultProps, r2);
}
function z(e2) {
  let { props: t2, name: n2, defaultTheme: r2, themeId: i2 } = e2, a2 = k(r2);
  return i2 && (a2 = a2[i2] || a2), R({ theme: a2, name: n2, props: t2 });
}
function B(e2, t2) {
  var _a, _b, _c;
  return a(e2) && t2.indexOf(e2.type.muiName ?? ((_c = (_b = (_a = e2.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
}
var V = _(), re = (e2, t2) => e2.filter((e3) => t2.includes(e3)), H = (e2, t2, n2) => {
  let r2 = e2.keys[0];
  Array.isArray(t2) ? t2.forEach((t3, r3) => {
    n2((t4, n3) => {
      r3 <= e2.keys.length - 1 && (r3 === 0 ? Object.assign(t4, n3) : t4[e2.up(e2.keys[r3])] = n3);
    }, t3);
  }) : t2 && typeof t2 == `object` ? (Object.keys(t2).length > e2.keys.length ? e2.keys : re(e2.keys, Object.keys(t2))).forEach((i2) => {
    if (e2.keys.includes(i2)) {
      let a2 = t2[i2];
      a2 !== void 0 && n2((t3, n3) => {
        r2 === i2 ? Object.assign(t3, n3) : t3[e2.up(i2)] = n3;
      }, a2);
    }
  }) : (typeof t2 == `number` || typeof t2 == `string`) && n2((e3, t3) => {
    Object.assign(e3, t3);
  }, t2);
};
function U(e2) {
  return `--Grid-${e2}Spacing`;
}
function W(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
var G = `--Grid-columns`, K = `--Grid-parent-columns`, ie = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return H(e2.breakpoints, t2.size, (e3, t3) => {
    let r2 = {};
    t3 === `grow` && (r2 = { flexBasis: 0, flexGrow: 1, maxWidth: `100%` }), t3 === `auto` && (r2 = { flexBasis: `auto`, flexGrow: 0, flexShrink: 0, maxWidth: `none`, width: `auto` }), typeof t3 == `number` && (r2 = { flexGrow: 0, flexBasis: `auto`, width: `calc(100% * ${t3} / var(${K}) - (var(${K}) - ${t3}) * (var(${W(`column`)}) / var(${K})))` }), e3(n2, r2);
  }), n2;
}, ae = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return H(e2.breakpoints, t2.offset, (e3, t3) => {
    let r2 = {};
    t3 === `auto` && (r2 = { marginLeft: `auto` }), typeof t3 == `number` && (r2 = { marginLeft: t3 === 0 ? `0px` : `calc(100% * ${t3} / var(${K}) + var(${W(`column`)}) * ${t3} / var(${K}))` }), e3(n2, r2);
  }), n2;
}, q = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = { [G]: 12 };
  return H(e2.breakpoints, t2.columns, (e3, t3) => {
    let r2 = t3 ?? 12;
    e3(n2, { [G]: r2, "> *": { [K]: r2 } });
  }), n2;
}, oe = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return H(e2.breakpoints, t2.rowSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [U(`row`)]: i2, "> *": { [W(`row`)]: i2 } });
  }), n2;
}, se = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return H(e2.breakpoints, t2.columnSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [U(`column`)]: i2, "> *": { [W(`column`)]: i2 } });
  }), n2;
}, ce = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return H(e2.breakpoints, t2.direction, (e3, t3) => {
    e3(n2, { flexDirection: t3 });
  }), n2;
}, le = ({ ownerState: e2 }) => ({ minWidth: 0, boxSizing: `border-box`, ...e2.container && { display: `flex`, flexWrap: `wrap`, ...e2.wrap && e2.wrap !== `wrap` && { flexWrap: e2.wrap }, gap: `var(${U(`row`)}) var(${U(`column`)})` } }), J = (e2) => {
  let t2 = [];
  return Object.entries(e2).forEach(([e3, n2]) => {
    n2 !== false && n2 !== void 0 && t2.push(`grid-${e3}-${String(n2)}`);
  }), t2;
}, Y = (e2, t2 = `xs`) => {
  function n2(e3) {
    return e3 === void 0 ? false : typeof e3 == `string` && !Number.isNaN(Number(e3)) || typeof e3 == `number` && e3 > 0;
  }
  if (n2(e2)) return [`spacing-${t2}-${String(e2)}`];
  if (typeof e2 == `object` && !Array.isArray(e2)) {
    let t3 = [];
    return Object.entries(e2).forEach(([e3, r2]) => {
      n2(r2) && t3.push(`spacing-${e3}-${String(r2)}`);
    }), t3;
  }
  return [];
}, X = (e2) => e2 === void 0 ? [] : typeof e2 == `object` ? Object.entries(e2).map(([e3, t2]) => `direction-${e3}-${t2}`) : [`direction-xs-${String(e2)}`], Z = h(), ue = V(`div`, { name: `MuiGrid`, slot: `Root` });
function de(e2) {
  return z({ props: e2, name: `MuiGrid`, defaultTheme: Z });
}
function fe(e2 = {}) {
  let { createStyledComponent: t2 = ue, useThemeProps: n2 = de, useTheme: i2 = k, componentName: o2 = `MuiGrid` } = e2, u2 = (e3, t3) => {
    let { container: n3, direction: r2, spacing: i3, wrap: a2, size: s2 } = e3, c2 = { root: [`root`, n3 && `container`, a2 !== `wrap` && `wrap-xs-${String(a2)}`, ...X(r2), ...J(s2), ...n3 ? Y(i3, t3.breakpoints.keys[0]) : []] };
    return p(c2, (e4) => g(o2, e4), {});
  };
  function d2(e3, t3, n3 = () => true) {
    let r2 = {};
    return e3 === null || (Array.isArray(e3) ? e3.forEach((e4, i3) => {
      e4 !== null && n3(e4) && t3.keys[i3] && (r2[t3.keys[i3]] = e4);
    }) : typeof e3 == `object` ? Object.keys(e3).forEach((t4) => {
      let i3 = e3[t4];
      i3 != null && n3(i3) && (r2[t4] = i3);
    }) : r2[t3.keys[0]] = e3), r2;
  }
  let f2 = t2(q, se, oe, ie, ce, le, ae), m2 = s(function(e3, t3) {
    let o3 = i2(), s2 = n2(e3), { className: p2, children: m3, columns: h2 = 12, container: g2 = false, component: _2 = `div`, direction: v2 = `row`, wrap: y2 = `wrap`, size: b2 = {}, offset: x2 = {}, spacing: S2 = 0, rowSpacing: C2 = S2, columnSpacing: w2 = S2, unstable_level: T2 = 0, ...E2 } = s2, D2 = d2(b2, o3.breakpoints, (e4) => e4 !== false), O2 = d2(x2, o3.breakpoints), k2 = e3.columns ?? (T2 ? void 0 : h2), A2 = e3.spacing ?? (T2 ? void 0 : S2), j2 = e3.rowSpacing ?? e3.spacing ?? (T2 ? void 0 : C2), M2 = e3.columnSpacing ?? e3.spacing ?? (T2 ? void 0 : w2), N2 = { ...s2, level: T2, columns: k2, container: g2, direction: v2, wrap: y2, spacing: A2, rowSpacing: j2, columnSpacing: M2, size: D2, offset: O2 }, P2 = u2(N2, o3);
    return c(f2, { ref: t3, as: _2, ownerState: N2, className: ee(P2.root, p2), ...E2, children: l.map(m3, (e4) => {
      var _a;
      return a(e4) && B(e4, [`Grid`]) && g2 && e4.props.container ? r(e4, { unstable_level: ((_a = e4.props) == null ? void 0 : _a.unstable_level) ?? T2 + 1 }) : e4;
    }) });
  });
  return m2.muiName = `Grid`, m2;
}
function pe(t2, n2, r2, i2, a2) {
  let [o2, s2] = e(() => a2 && r2 ? r2(t2).matches : i2 ? i2(t2).matches : n2);
  return v(() => {
    if (!r2) return;
    let e2 = r2(t2), n3 = () => {
      s2(e2.matches);
    };
    return n3(), e2.addEventListener(`change`, n3), () => {
      e2.removeEventListener(`change`, n3);
    };
  }, [t2, r2]), o2;
}
var Q = { ...o }.useSyncExternalStore;
function me(e2, n2, r2, i2, a2) {
  let o2 = t(() => n2, [n2]), s2 = d(() => {
    if (a2 && r2) return () => r2(e2).matches;
    if (i2 !== null) {
      let { matches: t2 } = i2(e2);
      return () => t2;
    }
    return o2;
  }, [o2, e2, i2, a2, r2]), [c2, l2] = d(() => {
    if (r2 === null) return [o2, () => () => {
    }];
    let t2 = r2(e2);
    return [() => t2.matches, (e3) => (t2.addEventListener(`change`, e3), () => {
      t2.removeEventListener(`change`, e3);
    })];
  }, [o2, r2, e2]);
  return Q(l2, c2, s2);
}
function $(e2 = {}) {
  let { themeId: t2 } = e2;
  return function(e3, n2 = {}) {
    let r2 = b();
    r2 && t2 && (r2 = r2[t2] || r2);
    let i2 = typeof window < `u` && window.matchMedia !== void 0 ? window.matchMedia : null, { defaultMatches: a2 = false, matchMedia: o2, ssrMatchMedia: s2 = null, noSsr: c2 = false } = R({ name: `MuiUseMediaQuery`, props: n2, theme: r2 }), l2 = d(() => o2 === void 0 ? i2 === null ? null : i2.bind(window) : o2, [o2, i2]), u2 = typeof e3 == `function` ? e3(r2) : e3;
    return u2 = u2.replace(/^@media( ?)/m, ``), u2.includes(`print`) && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", `Using the print media query to modify print styles can lead to unexpected results.`, "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Q === void 0 ? pe : me)(u2, a2, l2, s2, c2);
  };
}
var he = $();
export {
  k as _,
  J as a,
  C as b,
  V as c,
  R as d,
  M as f,
  L as g,
  ne as h,
  X as i,
  B as l,
  A as m,
  he as n,
  Y as o,
  j as p,
  fe as r,
  H as s,
  $ as t,
  z as u,
  D as v,
  b as x,
  S as y
};
