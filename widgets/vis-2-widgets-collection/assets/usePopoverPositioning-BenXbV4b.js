import { v as H, R as f, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { j as gA, av as Pi, m as ca, V as Xi, aw as Ba, ax as ua, ay as ga, az as fa, aA as da, x as Se, a8 as wa, aB as Qa, aC as ha, B as xn, aD as wA, v as Ca, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
import { _ as aA } from "./preload-helper-PPVm8Dsz.js";
import { g as pa, c as ut } from "./_commonjsHelpers-Cpj98o6Y.js";
let Ud, bd, ir, cd, Fd, ld, Bd, ud, Pt, vd, fd, pd, dd, gd, hd, yd, Qd, Wa, Ed, ka, ji, md, wd, Id, Hd, Cd;
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
  const Ji = H.createContext(null);
  function Cn() {
    return H.useContext(Ji);
  }
  const Ua = typeof Symbol == "function" && Symbol.for, Fa = Ua ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function va(e, A) {
    return typeof A == "function" ? A(e) : {
      ...e,
      ...A
    };
  }
  function ma(e) {
    const { children: A, theme: r } = e, t = Cn(), n = H.useMemo(() => {
      const i = t === null ? {
        ...r
      } : va(t, r);
      return i != null && (i[Fa] = t !== null), i;
    }, [
      r,
      t
    ]);
    return gA.jsx(Ji.Provider, {
      value: n,
      children: A
    });
  }
  function Ea(e) {
    const A = Pi(), r = ca() || "", { modularCssLayers: t } = e;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !t || A !== null ? n = "" : typeof t == "string" ? n = t.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, Xi(() => {
      var _a2, _b;
      const i = document.querySelector("head");
      if (!i) return;
      const o = i.firstChild;
      if (n) {
        if (o && ((_a2 = o.hasAttribute) == null ? void 0 : _a2.call(o, "data-mui-layer-order")) && o.getAttribute("data-mui-layer-order") === r) return;
        const a = document.createElement("style");
        a.setAttribute("data-mui-layer-order", r), a.textContent = n, i.prepend(a);
      } else (_b = i.querySelector(`style[data-mui-layer-order="${r}"]`)) == null ? void 0 : _b.remove();
    }, [
      n,
      r
    ]), n ? gA.jsx(Ba, {
      styles: n
    }) : null;
  }
  const Ln = {};
  function Kn(e, A, r, t = false) {
    return H.useMemo(() => {
      const n = e && A[e] || A;
      if (typeof r == "function") {
        const i = r(n), o = e ? {
          ...A,
          [e]: i
        } : i;
        return t ? () => o : o;
      }
      return e ? {
        ...A,
        [e]: r
      } : {
        ...A,
        ...r
      };
    }, [
      e,
      A,
      r,
      t
    ]);
  }
  function Wi(e) {
    const { children: A, theme: r, themeId: t } = e, n = Pi(Ln), i = Cn() || Ln, o = Kn(t, n, r), a = Kn(t, i, r, true), s = (t ? o[t] : o).direction === "rtl", l = Ea(o);
    return gA.jsx(ma, {
      theme: a,
      children: gA.jsx(ua.Provider, {
        value: o,
        children: gA.jsx(ga, {
          value: s,
          children: gA.jsxs(fa, {
            value: t ? o[t].components : o.components,
            children: [
              l,
              A
            ]
          })
        })
      })
    });
  }
  const pn = "mode", Un = "color-scheme", ya = "data-color-scheme";
  function Ha(e) {
    const { defaultMode: A = "system", defaultLightColorScheme: r = "light", defaultDarkColorScheme: t = "dark", modeStorageKey: n = pn, colorSchemeStorageKey: i = Un, attribute: o = ya, colorSchemeNode: a = "document.documentElement", nonce: s } = e || {};
    let l = "", c = o;
    if (o === "class" && (c = ".%s"), o === "data" && (c = "[data-%s]"), c.startsWith(".")) {
      const u = c.substring(1);
      l += `${a}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${a}.classList.add('${u}'.replace('%s', colorScheme));`;
    }
    const B = c.match(/\[([^\]]+)\]/);
    if (B) {
      const [u, g] = B[1].split("=");
      g || (l += `${a}.removeAttribute('${u}'.replace('%s', light));
      ${a}.removeAttribute('${u}'.replace('%s', dark));`), l += `
      ${a}.setAttribute('${u}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`;
    } else l += `${a}.setAttribute('${c}', colorScheme);`;
    return gA.jsx("script", {
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? s : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${A}';
  const dark = localStorage.getItem('${i}-dark') || '${t}';
  const light = localStorage.getItem('${i}-light') || '${r}';
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
  function ba() {
  }
  const Ia = ({ key: e, storageWindow: A }) => (!A && typeof window < "u" && (A = window), {
    get(r) {
      if (typeof window > "u") return;
      if (!A) return r;
      let t;
      try {
        t = A.localStorage.getItem(e);
      } catch {
      }
      return t || r;
    },
    set: (r) => {
      if (A) try {
        A.localStorage.setItem(e, r);
      } catch {
      }
    },
    subscribe: (r) => {
      if (!A) return ba;
      const t = (n) => {
        const i = n.newValue;
        n.key === e && r(i);
      };
      return A.addEventListener("storage", t), () => {
        A.removeEventListener("storage", t);
      };
    }
  });
  function Cr() {
  }
  function Tn(e) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Yi(e, A) {
    if (e.mode === "light" || e.mode === "system" && e.systemMode === "light") return A("light");
    if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark") return A("dark");
  }
  function Sa(e) {
    return Yi(e, (A) => {
      if (A === "light") return e.lightColorScheme;
      if (A === "dark") return e.darkColorScheme;
    });
  }
  function xa(e) {
    const { defaultMode: A = "light", defaultLightColorScheme: r, defaultDarkColorScheme: t, supportedColorSchemes: n = [], modeStorageKey: i = pn, colorSchemeStorageKey: o = Un, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = Ia, noSsr: l = false } = e, c = n.join(","), B = n.length > 1, u = H.useMemo(() => s == null ? void 0 : s({
      key: i,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), g = H.useMemo(() => s == null ? void 0 : s({
      key: `${o}-light`,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), Q = H.useMemo(() => s == null ? void 0 : s({
      key: `${o}-dark`,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), [d, p] = H.useState(() => {
      const y = (u == null ? void 0 : u.get(A)) || A, m = (g == null ? void 0 : g.get(r)) || r, K = (Q == null ? void 0 : Q.get(t)) || t;
      return {
        mode: y,
        systemMode: Tn(y),
        lightColorScheme: m,
        darkColorScheme: K
      };
    }), [h, C] = H.useState(l || !B);
    H.useEffect(() => {
      C(true);
    }, []);
    const U = Sa(d), v = H.useCallback((y) => {
      p((m) => {
        if (y === m.mode) return m;
        const K = y ?? A;
        return u == null ? void 0 : u.set(K), {
          ...m,
          mode: K,
          systemMode: Tn(K)
        };
      });
    }, [
      u,
      A
    ]), E = H.useCallback((y) => {
      y ? typeof y == "string" ? y && !c.includes(y) ? console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`) : p((m) => {
        const K = {
          ...m
        };
        return Yi(m, (L) => {
          L === "light" && (g == null ? void 0 : g.set(y), K.lightColorScheme = y), L === "dark" && (Q == null ? void 0 : Q.set(y), K.darkColorScheme = y);
        }), K;
      }) : p((m) => {
        const K = {
          ...m
        }, L = y.light === null ? r : y.light, R = y.dark === null ? t : y.dark;
        return L && (c.includes(L) ? (K.lightColorScheme = L, g == null ? void 0 : g.set(L)) : console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`)), R && (c.includes(R) ? (K.darkColorScheme = R, Q == null ? void 0 : Q.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), K;
      }) : p((m) => (g == null ? void 0 : g.set(r), Q == null ? void 0 : Q.set(t), {
        ...m,
        lightColorScheme: r,
        darkColorScheme: t
      }));
    }, [
      c,
      g,
      Q,
      r,
      t
    ]), w = H.useCallback((y) => {
      d.mode === "system" && p((m) => {
        const K = (y == null ? void 0 : y.matches) ? "dark" : "light";
        return m.systemMode === K ? m : {
          ...m,
          systemMode: K
        };
      });
    }, [
      d.mode
    ]), b = H.useRef(w);
    return b.current = w, H.useEffect(() => {
      if (typeof window.matchMedia != "function" || !B) return;
      const y = (...K) => b.current(...K), m = window.matchMedia("(prefers-color-scheme: dark)");
      return m.addListener(y), y(m), () => {
        m.removeListener(y);
      };
    }, [
      B
    ]), H.useEffect(() => {
      if (B) {
        const y = (u == null ? void 0 : u.subscribe((L) => {
          (!L || [
            "light",
            "dark",
            "system"
          ].includes(L)) && v(L || A);
        })) || Cr, m = (g == null ? void 0 : g.subscribe((L) => {
          (!L || c.match(L)) && E({
            light: L
          });
        })) || Cr, K = (Q == null ? void 0 : Q.subscribe((L) => {
          (!L || c.match(L)) && E({
            dark: L
          });
        })) || Cr;
        return () => {
          y(), m(), K();
        };
      }
    }, [
      E,
      v,
      c,
      A,
      a,
      B,
      u,
      g,
      Q
    ]), {
      ...d,
      mode: h ? d.mode : void 0,
      systemMode: h ? d.systemMode : void 0,
      colorScheme: h ? U : void 0,
      setMode: v,
      setColorScheme: E
    };
  }
  const La = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function Ka(e) {
    const { themeId: A, theme: r = {}, modeStorageKey: t = pn, colorSchemeStorageKey: n = Un, disableTransitionOnChange: i = false, defaultColorScheme: o, resolveTheme: a } = e, s = {
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
    }, l = H.createContext(void 0), c = () => H.useContext(l) || s, B = {}, u = {};
    function g(h) {
      var _a2, _b, _c2, _d;
      const { children: C, theme: U, modeStorageKey: v = t, colorSchemeStorageKey: E = n, disableTransitionOnChange: w = i, storageManager: b, storageWindow: y = typeof window > "u" ? void 0 : window, documentNode: m = typeof document > "u" ? void 0 : document, colorSchemeNode: K = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: L = false, disableStyleSheetGeneration: R = false, defaultMode: M = "system", noSsr: _ } = h, J = H.useRef(false), W = Cn(), k = H.useContext(l), nA = !!k && !L, P = H.useMemo(() => U || (typeof r == "function" ? r() : r), [
        U
      ]), eA = P[A], V = eA || P, { colorSchemes: Y = B, components: F = u, cssVarPrefix: x } = V, T = Object.keys(Y).filter((bA) => !!Y[bA]).join(","), O = H.useMemo(() => T.split(","), [
        T
      ]), $ = typeof o == "string" ? o : o.light, N = typeof o == "string" ? o : o.dark, z = Y[$] && Y[N] ? M : ((_b = (_a2 = Y[V.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c2 = V.palette) == null ? void 0 : _c2.mode), { mode: q, setMode: fA, systemMode: vA, lightColorScheme: he, darkColorScheme: Me, colorScheme: Qr, setColorScheme: ke } = xa({
        supportedColorSchemes: O,
        defaultLightColorScheme: $,
        defaultDarkColorScheme: N,
        modeStorageKey: v,
        colorSchemeStorageKey: E,
        defaultMode: z,
        storageManager: b,
        storageWindow: y,
        noSsr: _
      });
      let Ge = q, mA = Qr;
      nA && (Ge = k.mode, mA = k.colorScheme);
      const le = H.useMemo(() => {
        var _a3;
        const bA = mA || V.defaultColorScheme, EA = ((_a3 = V.generateThemeVars) == null ? void 0 : _a3.call(V)) || V.vars, IA = {
          ...V,
          components: F,
          colorSchemes: Y,
          cssVarPrefix: x,
          vars: EA
        };
        if (typeof IA.generateSpacing == "function" && (IA.spacing = IA.generateSpacing()), bA) {
          const GA = Y[bA];
          GA && typeof GA == "object" && Object.keys(GA).forEach((OA) => {
            GA[OA] && typeof GA[OA] == "object" ? IA[OA] = {
              ...IA[OA],
              ...GA[OA]
            } : IA[OA] = GA[OA];
          });
        }
        return a ? a(IA) : IA;
      }, [
        V,
        mA,
        F,
        Y,
        x
      ]), qA = V.colorSchemeSelector;
      Xi(() => {
        if (mA && K && qA && qA !== "media") {
          const bA = qA;
          let EA = qA;
          if (bA === "class" && (EA = ".%s"), bA === "data" && (EA = "[data-%s]"), (bA == null ? void 0 : bA.startsWith("data-")) && !bA.includes("%s") && (EA = `[${bA}="%s"]`), EA.startsWith(".")) K.classList.remove(...O.map((IA) => EA.substring(1).replace("%s", IA))), K.classList.add(EA.substring(1).replace("%s", mA));
          else {
            const IA = EA.replace("%s", mA).match(/\[([^\]]+)\]/);
            if (IA) {
              const [GA, OA] = IA[1].split("=");
              OA || O.forEach((la) => {
                K.removeAttribute(GA.replace(mA, la));
              }), K.setAttribute(GA, OA ? OA.replace(/"|'/g, "") : "");
            } else K.setAttribute(EA, mA);
          }
        }
      }, [
        mA,
        qA,
        K,
        O
      ]), H.useEffect(() => {
        let bA;
        if (w && J.current && m) {
          const EA = m.createElement("style");
          EA.appendChild(m.createTextNode(La)), m.head.appendChild(EA), window.getComputedStyle(m.body), bA = setTimeout(() => {
            m.head.removeChild(EA);
          }, 1);
        }
        return () => {
          clearTimeout(bA);
        };
      }, [
        mA,
        w,
        m
      ]), H.useEffect(() => (J.current = true, () => {
        J.current = false;
      }), []);
      const hr = H.useMemo(() => ({
        allColorSchemes: O,
        colorScheme: mA,
        darkColorScheme: Me,
        lightColorScheme: he,
        mode: Ge,
        setColorScheme: ke,
        setMode: fA,
        systemMode: vA
      }), [
        O,
        mA,
        Me,
        he,
        Ge,
        ke,
        fA,
        vA,
        le.colorSchemeSelector
      ]);
      let In = true;
      (R || V.cssVariables === false || nA && (W == null ? void 0 : W.cssVarPrefix) === x) && (In = false);
      const Sn = gA.jsxs(H.Fragment, {
        children: [
          gA.jsx(Wi, {
            themeId: eA ? A : void 0,
            theme: le,
            children: C
          }),
          In && gA.jsx(da, {
            styles: ((_d = le.generateStyleSheets) == null ? void 0 : _d.call(le)) || []
          })
        ]
      });
      return nA ? Sn : gA.jsx(l.Provider, {
        value: hr,
        children: Sn
      });
    }
    const Q = typeof o == "string" ? o : o.light, d = typeof o == "string" ? o : o.dark;
    return {
      CssVarsProvider: g,
      useColorScheme: c,
      getInitColorSchemeScript: (h) => Ha({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: Q,
        defaultDarkColorScheme: d,
        modeStorageKey: t,
        ...h
      })
    };
  }
  function Ta({ theme: e, ...A }) {
    const r = Se in e ? e[Se] : void 0;
    return gA.jsx(Wi, {
      ...A,
      themeId: r ? Se : void 0,
      theme: r || e
    });
  }
  const gt = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: Da } = Ka({
    themeId: Se,
    theme: () => wa({
      cssVariables: true
    }),
    colorSchemeStorageKey: gt.colorSchemeStorageKey,
    modeStorageKey: gt.modeStorageKey,
    defaultColorScheme: {
      light: gt.defaultLightColorScheme,
      dark: gt.defaultDarkColorScheme
    },
    resolveTheme: (e) => {
      const A = {
        ...e,
        typography: Qa(e.palette, e.typography)
      };
      return A.unstable_sx = function(t) {
        return ha({
          sx: t,
          theme: this
        });
      }, A;
    }
  }), Oa = Da;
  ld = function({ theme: e, ...A }) {
    const r = H.useMemo(() => {
      if (typeof e == "function") return e;
      const t = Se in e ? e[Se] : e;
      return "colorSchemes" in t ? null : "vars" in t ? e : {
        ...e,
        vars: null
      };
    }, [
      e
    ]);
    return r ? gA.jsx(Ta, {
      theme: r,
      ...A
    }) : gA.jsx(Oa, {
      theme: e,
      ...A
    });
  };
  cd = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (A) => this.state.values[`${this.state.rxData[A]}.val`];
    setValue = (A, r, t = false) => {
      !A || A === "nothing_selected" || this.props.context.socket.setState(A, r, t).catch((n) => console.error(`Cannot set state ${A}: ${n}`));
    };
    wrapContent(A) {
      return gA.jsx(gA.Fragment, {
        children: gA.jsx(xn, {
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
          children: gA.jsx(xn, {
            className: "GENERIC-1",
            sx: {
              width: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%",
              height: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%"
            },
            children: A
          })
        })
      });
    }
  };
  Bd = 1111111111111;
  ud = "vis-2-widgets-collection.0.theme";
  let Xr = null, Pe = null, Zi = null, Jr = false;
  const Wr = /* @__PURE__ */ new Set();
  function Dn() {
    if (Jr = false, !Object.is(Pe, Xr)) {
      Pe = Xr, Zi = Pe === null ? null : JSON.stringify(Pe);
      for (const e of Wr) e();
    }
  }
  function Ma() {
    Jr || (Jr = true, typeof requestAnimationFrame == "function" ? requestAnimationFrame(Dn) : Dn());
  }
  gd = function() {
    return Pe;
  };
  fd = function() {
    return Zi;
  };
  ka = function(e) {
    Xr = e, Ma();
  };
  dd = function() {
    ka(null);
  };
  wd = function(e) {
    return Wr.add(e), () => {
      Wr.delete(e);
    };
  };
  function jA(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
  }
  Pt = function(e, A) {
    if (!jA(e) || !A) return;
    const r = A.split(".");
    let t = e;
    for (const n of r) {
      if (!jA(t) || !(n in t)) return;
      t = t[n];
    }
    return t;
  };
  Qd = function(e) {
    if (!e) return;
    const A = e.topLeft ?? 4, r = e.topRight ?? 4, t = e.bottomRight ?? 4, n = e.bottomLeft ?? 4;
    return `${A}px ${r}px ${t}px ${n}px`;
  };
  ji = function(e, A, r) {
    if (!A) return e;
    const t = jA(e) ? {
      ...e
    } : {};
    return r === void 0 ? qi(t, A.split(".")) : zi(t, A.split("."), r), t;
  };
  function zi(e, A, r) {
    const [t, ...n] = A;
    if (n.length === 0) {
      e[t] = r;
      return;
    }
    const i = e[t], o = jA(i) ? {
      ...i
    } : {};
    e[t] = o, zi(o, n, r);
  }
  function qi(e, A) {
    const [r, ...t] = A;
    if (t.length === 0) {
      delete e[r];
      return;
    }
    const n = e[r];
    if (!jA(n)) return;
    const i = {
      ...n
    };
    qi(i, t), Object.keys(i).length === 0 ? delete e[r] : e[r] = i;
  }
  const Ga = 120, Ra = 40, Va = "#ba68c8";
  function xe(e) {
    return Math.max(0, Math.min(255, Math.round(e)));
  }
  function _a(e) {
    if (typeof e != "string") return null;
    const A = e.trim();
    if (!A) return null;
    let r = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(A);
    if (r) {
      let t = r[1];
      return t.length === 3 && (t = t.split("").map((n) => n + n).join("")), t.length === 8 && (t = t.slice(0, 6)), [
        parseInt(t.slice(0, 2), 16),
        parseInt(t.slice(2, 4), 16),
        parseInt(t.slice(4, 6), 16)
      ];
    }
    return r = /^rgba?\(\s*([\d.]+)\s*[,\s]\s*([\d.]+)\s*[,\s]\s*([\d.]+)/i.exec(A), r ? [
      xe(+r[1]),
      xe(+r[2]),
      xe(+r[3])
    ] : (r = /^hsla?\(\s*([\d.]+)(?:deg)?\s*[,\s]\s*([\d.]+)%\s*[,\s]\s*([\d.]+)%/i.exec(A), r ? $i(+r[1], +r[2], +r[3]) : null);
  }
  function Na(e, A, r) {
    e /= 255, A /= 255, r /= 255;
    const t = Math.max(e, A, r), n = Math.min(e, A, r), i = (t + n) / 2;
    let o = 0, a = 0;
    if (t !== n) {
      const s = t - n;
      switch (a = i > 0.5 ? s / (2 - t - n) : s / (t + n), t) {
        case e:
          o = (A - r) / s + (A < r ? 6 : 0);
          break;
        case A:
          o = (r - e) / s + 2;
          break;
        default:
          o = (e - A) / s + 4;
      }
      o *= 60;
    }
    return [
      o,
      a * 100,
      i * 100
    ];
  }
  function $i(e, A, r) {
    const t = (e % 360 + 360) % 360, n = Math.max(0, Math.min(100, A)) / 100, i = Math.max(0, Math.min(100, r)) / 100, o = (1 - Math.abs(2 * i - 1)) * n, a = o * (1 - Math.abs(t / 60 % 2 - 1)), s = i - o / 2;
    let l = 0, c = 0, B = 0;
    return t < 60 ? [l, c, B] = [
      o,
      a,
      0
    ] : t < 120 ? [l, c, B] = [
      a,
      o,
      0
    ] : t < 180 ? [l, c, B] = [
      0,
      o,
      a
    ] : t < 240 ? [l, c, B] = [
      0,
      a,
      o
    ] : t < 300 ? [l, c, B] = [
      a,
      0,
      o
    ] : [l, c, B] = [
      o,
      0,
      a
    ], [
      xe((l + s) * 255),
      xe((c + s) * 255),
      xe((B + s) * 255)
    ];
  }
  function Pa(e, A, r) {
    const [t, n, i] = $i(e, A, r), o = (a) => a.toString(16).padStart(2, "0");
    return `#${o(t)}${o(n)}${o(i)}`;
  }
  function Xa(e) {
    const A = _a(e);
    if (!A) return Va;
    const [r, t, n] = Na(A[0], A[1], A[2]);
    return Pa(r + Ga, Math.max(t, Ra), n);
  }
  hd = function(e) {
    const A = Pt(e, "palette.primary.main"), r = Pt(e, "palette.secondary.main");
    return !A || r ? e : ji(e, "palette.secondary.main", Xa(A));
  };
  Cd = function(e, A) {
    if (Pt(e, "palette.text.primary")) return e;
    const t = Pt(e, "palette.primary.main") ?? A;
    return t ? ji(e, "palette.text.primary", t) : e;
  };
  const On = [
    {
      family: "Roboto",
      weight: 400,
      load: () => aA(() => import("./roboto-latin-400-normal-a6QQlpX7.js"), [], import.meta.url)
    },
    {
      family: "Roboto",
      weight: 700,
      load: () => aA(() => import("./roboto-latin-700-normal-CagKtDsa.js"), [], import.meta.url)
    },
    {
      family: "Inter",
      weight: 400,
      load: () => aA(() => import("./inter-latin-400-normal-BP0WKwYq.js"), [], import.meta.url)
    },
    {
      family: "Inter",
      weight: 700,
      load: () => aA(() => import("./inter-latin-700-normal-B3I9hjST.js"), [], import.meta.url)
    },
    {
      family: "Open Sans",
      weight: 400,
      load: () => aA(() => import("./open-sans-latin-400-normal-Cb5GhqMr.js"), [], import.meta.url)
    },
    {
      family: "Open Sans",
      weight: 700,
      load: () => aA(() => import("./open-sans-latin-700-normal-XolaVIVA.js"), [], import.meta.url)
    },
    {
      family: "Montserrat",
      weight: 400,
      load: () => aA(() => import("./montserrat-latin-400-normal-DhxtaMDQ.js"), [], import.meta.url)
    },
    {
      family: "Montserrat",
      weight: 700,
      load: () => aA(() => import("./montserrat-latin-700-normal-DvK44yU9.js"), [], import.meta.url)
    },
    {
      family: "Roboto Slab",
      weight: 400,
      load: () => aA(() => import("./roboto-slab-latin-400-normal-DB3QTBjh.js"), [], import.meta.url)
    },
    {
      family: "Roboto Slab",
      weight: 700,
      load: () => aA(() => import("./roboto-slab-latin-700-normal-WurPvX7w.js"), [], import.meta.url)
    },
    {
      family: "Merriweather",
      weight: 400,
      load: () => aA(() => import("./merriweather-latin-400-normal-D7Wb1pT4.js"), [], import.meta.url)
    },
    {
      family: "Merriweather",
      weight: 700,
      load: () => aA(() => import("./merriweather-latin-700-normal-DlM4-wGW.js"), [], import.meta.url)
    },
    {
      family: "Playfair Display",
      weight: 400,
      load: () => aA(() => import("./playfair-display-latin-400-normal-CjetgZcY.js"), [], import.meta.url)
    },
    {
      family: "Playfair Display",
      weight: 700,
      load: () => aA(() => import("./playfair-display-latin-700-normal-DGi6mrkJ.js"), [], import.meta.url)
    },
    {
      family: "JetBrains Mono",
      weight: 400,
      load: () => aA(() => import("./jetbrains-mono-latin-400-normal-Ddoyv7f5.js"), [], import.meta.url)
    },
    {
      family: "JetBrains Mono",
      weight: 700,
      load: () => aA(() => import("./jetbrains-mono-latin-700-normal-vpWWyNDD.js"), [], import.meta.url)
    },
    {
      family: "Oswald",
      weight: 400,
      load: () => aA(() => import("./oswald-latin-400-normal-BHJOAwCY.js"), [], import.meta.url)
    },
    {
      family: "Oswald",
      weight: 700,
      load: () => aA(() => import("./oswald-latin-700-normal-qtyFhSVf.js"), [], import.meta.url)
    },
    {
      family: "Nunito",
      weight: 400,
      load: () => aA(() => import("./nunito-latin-400-normal-l1jb7Pyr.js"), [], import.meta.url)
    },
    {
      family: "Nunito",
      weight: 700,
      load: () => aA(() => import("./nunito-latin-700-normal-CW-HBzh6.js"), [], import.meta.url)
    }
  ], Mn = /* @__PURE__ */ new Set(), pr = /* @__PURE__ */ new Map();
  function Ja(e) {
    const A = `${e.family}:${e.weight}`;
    if (Mn.has(A) || typeof document > "u") return Promise.resolve();
    const r = pr.get(A);
    if (r) return r;
    const t = e.load().then((n) => {
      const i = document.createElement("style");
      i.setAttribute("data-collection-fonts", ""), i.textContent = `@font-face{font-family:'${e.family}';font-style:normal;font-display:swap;font-weight:${e.weight};src:url(${n.default}) format("woff2")}`, document.head.appendChild(i), Mn.add(A);
    }).finally(() => pr.delete(A));
    return pr.set(A, t), t;
  }
  pd = function(e) {
    if (typeof document > "u") return Promise.resolve();
    const A = e ? On.filter((r) => e.includes(r.family)) : On;
    return Promise.all(A.map(Ja)).then(() => {
    });
  };
  ir = [
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
  Ud = ir.filter((e) => e.group === "bundled");
  Fd = ir.filter((e) => e.group === "system");
  Wa = "__custom__";
  vd = function(e) {
    if (!e) return [];
    const A = ir.find((r) => r.value === e);
    return A && A.group === "bundled" ? [
      A.label
    ] : [];
  };
  md = function(e) {
    return e ? ir.some((A) => A.value === e) ? e : Wa : "";
  };
  const kn = "data-collection-google-fonts", Ya = "https://fonts.googleapis.com/css2";
  Ed = async function(e) {
    const A = e.trim().replace(/\s+/g, "+");
    if (!A) throw new Error("Empty font name");
    const r = `${Ya}?family=${A}&display=swap`, t = await fetch(r);
    if (!t.ok) throw new Error(`Google Fonts CSS request failed (${t.status})`);
    const n = await t.text(), i = /@font-face\s*\{([^}]*)\}/g, o = [];
    let a;
    for (; (a = i.exec(n)) !== null; ) o.push(a[1]);
    const s = /\/\*\s*latin\s*\*\/\s*@font-face\s*\{([^}]*)\}/g, l = [];
    for (; (a = s.exec(n)) !== null; ) l.push(a[1]);
    l.length === 0 && l.push(...o.filter((B) => /unicode-range:[^;}]*0000-00FF/i.test(B))), l.length === 0 && l.push(...o);
    const c = [];
    for (const B of l) {
      const u = B.match(/font-weight:\s*(\d+)/), g = B.match(/src:\s*url\(([^)]+)\)/);
      if (!g) continue;
      const Q = u ? Number(u[1]) : 400, d = await Za(g[1]);
      c.push({
        weight: Q,
        data: d
      });
    }
    if (c.length === 0) throw new Error(`No latin face found for "${e}"`);
    return c;
  };
  async function Za(e) {
    const A = await fetch(e);
    if (!A.ok) throw new Error(`Font file request failed (${A.status})`);
    const r = await A.arrayBuffer();
    return `data:font/woff2;base64,${ja(r)}`;
  }
  function ja(e) {
    const A = new Uint8Array(e), r = 32768;
    let t = "";
    for (let n = 0; n < A.length; n += r) {
      const i = A.subarray(n, n + r);
      t += String.fromCharCode(...i);
    }
    return btoa(t);
  }
  yd = function(e) {
    if (typeof document > "u") return;
    let A = document.querySelector(`style[${kn}]`);
    if (A || (A = document.createElement("style"), A.setAttribute(kn, ""), document.head.appendChild(A)), !e) {
      A.textContent = "";
      return;
    }
    const r = Object.entries(e);
    if (r.length === 0) {
      A.textContent = "";
      return;
    }
    const t = r.map(([n, i]) => i.map((o) => `@font-face{font-family:'${n}';font-style:normal;font-display:swap;font-weight:${o.weight};src:url(${o.data}) format("woff2")}`).join("")).join("");
    A.textContent = t;
  };
  const lA = {
    kind: "color",
    optional: true
  }, pA = {
    kind: "cssObject",
    optional: true
  }, Ce = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          light: lA,
          main: {
            kind: "color",
            required: true
          },
          dark: lA,
          contrastText: lA
        }
      },
      {
        kind: "record",
        optional: true,
        values: lA
      }
    ]
  }, za = {
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
      primary: Ce,
      secondary: Ce,
      error: Ce,
      warning: Ce,
      info: Ce,
      success: Ce,
      text: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          primary: lA,
          secondary: lA,
          disabled: lA
        }
      },
      background: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          default: lA,
          paper: lA
        }
      },
      common: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          black: lA,
          white: lA
        }
      },
      grey: {
        kind: "record",
        optional: true,
        values: lA
      },
      divider: lA,
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
          active: lA,
          hover: lA,
          hoverOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          selected: lA,
          selectedOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabled: lA,
          disabledOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabledBackground: lA,
          focus: lA,
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
  }, qa = {
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
      allVariants: pA,
      h1: pA,
      h2: pA,
      h3: pA,
      h4: pA,
      h5: pA,
      h6: pA,
      subtitle1: pA,
      subtitle2: pA,
      body1: pA,
      body2: pA,
      caption: pA,
      button: pA,
      overline: pA
    }
  }, $a = {
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
  }, As = {
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
  }, es = {
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
        styleOverrides: pA,
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
  }, ft = {
    kind: "object",
    optional: true,
    allowUnknown: "ignore",
    properties: {}
  }, ts = {
    kind: "object",
    allowUnknown: "warn",
    properties: {
      palette: za,
      typography: qa,
      shape: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          borderRadius: {
            kind: "number",
            optional: true,
            min: 0,
            max: 64
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
      spacing: As,
      cssVariables: $a,
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
      mixins: ft,
      transitions: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          duration: ft,
          easing: ft
        }
      },
      breakpoints: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          values: ft,
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
      components: es,
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
            max: 64
          },
          topRight: {
            kind: "number",
            optional: true,
            min: 0,
            max: 64
          },
          bottomRight: {
            kind: "number",
            optional: true,
            min: 0,
            max: 64
          },
          bottomLeft: {
            kind: "number",
            optional: true,
            min: 0,
            max: 64
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
  Hd = function(e) {
    const A = [];
    if (e == null) return {
      isValid: true,
      theme: {},
      issues: A
    };
    if (!jA(e)) return A.push({
      path: "",
      severity: "error",
      code: "invalid-shape",
      message: "Theme must be a plain object."
    }), {
      isValid: false,
      issues: A
    };
    if (Object.keys(e).length === 0) return {
      isValid: true,
      theme: {},
      issues: A
    };
    st(e, ts, "", A);
    const r = !A.some((t) => t.severity === "error");
    return {
      isValid: r,
      theme: r ? e : void 0,
      issues: A
    };
  };
  function st(e, A, r, t) {
    if (typeof e == "function" || typeof e == "symbol") {
      t.push({
        path: r,
        severity: "error",
        message: `Value at "${r}" is a ${typeof e}, which is not serializable.`
      });
      return;
    }
    switch (A.kind) {
      case "object":
        rs(e, A, r, t);
        break;
      case "string":
        typeof e != "string" && YA(r, "string", e, t);
        break;
      case "number":
        ns(e, A, r, t);
        break;
      case "boolean":
        typeof e != "boolean" && YA(r, "boolean", e, t);
        break;
      case "color":
        ls(e) || YA(r, "color", e, t, "invalid-color");
        break;
      case "literal":
        A.values.includes(e) || t.push({
          path: r,
          severity: "error",
          message: `Value at "${r}" must be one of: ${A.values.join(", ")}.`
        });
        break;
      case "union":
        is(e, A.options, r, t);
        break;
      case "array":
        os(e, A.items, r, t);
        break;
      case "record":
        as(e, A.values, r, t);
        break;
      case "cssObject":
        Ao(e, r, t);
        break;
    }
  }
  function rs(e, A, r, t) {
    if (!jA(e)) {
      YA(r, "object", e, t);
      return;
    }
    const n = A.allowUnknown ?? "warn";
    for (const i of Object.keys(e)) {
      const o = r ? `${r}.${i}` : i, a = A.properties[i], s = e[i];
      a ? st(s, a, o, t) : typeof s == "function" || typeof s == "symbol" ? t.push({
        path: o,
        severity: "error",
        message: `Value at "${o}" is a ${typeof s}, which is not serializable.`
      }) : n === "warn" ? t.push({
        path: o,
        severity: "warning",
        code: "unknown-key",
        message: `Unknown theme option "${o}" \u2014 it may be ignored by MUI.`
      }) : n === "error" && t.push({
        path: o,
        severity: "error",
        code: "unknown-key",
        message: `Unknown theme option "${o}".`
      });
    }
    for (const [i, o] of Object.entries(A.properties)) if (o.required && !(i in e)) {
      const a = r ? `${r}.${i}` : i;
      t.push({
        path: a,
        severity: "error",
        message: `Missing required option "${a}".`
      });
    }
  }
  function ns(e, A, r, t) {
    if (typeof e != "number" || Number.isNaN(e)) {
      YA(r, "number", e, t, "invalid-number");
      return;
    }
    A.min !== void 0 && e < A.min && t.push({
      path: r,
      severity: "error",
      code: "number-out-of-range",
      message: `Value at "${r}" must be >= ${A.min}.`
    }), A.max !== void 0 && e > A.max && t.push({
      path: r,
      severity: "error",
      code: "number-out-of-range",
      message: `Value at "${r}" must be <= ${A.max}.`
    });
  }
  function is(e, A, r, t) {
    for (const n of A) {
      const i = [];
      if (st(e, n, r, i), !i.some((o) => o.severity === "error")) {
        t.push(...i);
        return;
      }
    }
    YA(r, "one of the allowed types", e, t);
  }
  function os(e, A, r, t) {
    if (!Array.isArray(e)) {
      YA(r, "array", e, t);
      return;
    }
    e.forEach((n, i) => {
      st(n, A, `${r}[${i}]`, t);
    });
  }
  function as(e, A, r, t) {
    if (!jA(e)) {
      YA(r, "object", e, t);
      return;
    }
    for (const n of Object.keys(e)) st(e[n], A, r ? `${r}.${n}` : n, t);
  }
  function Ao(e, A, r) {
    if (typeof e == "function" || typeof e == "symbol") {
      r.push({
        path: A,
        severity: "error",
        message: `Value at "${A}" is a ${typeof e}, which is not serializable.`
      });
      return;
    }
    if (!(typeof e == "string" || typeof e == "number")) {
      if (jA(e)) {
        for (const t of Object.keys(e)) Ao(e[t], A ? `${A}.${t}` : t, r);
        return;
      }
      YA(A, "CSS value", e, r);
    }
  }
  function YA(e, A, r, t, n = "invalid-type") {
    const i = r === null ? "null" : Array.isArray(r) ? "array" : typeof r;
    t.push({
      path: e,
      severity: "error",
      code: n,
      message: `Value at "${e}" must be a ${A} (got ${i}).`
    });
  }
  const ss = /\b(?:linear|radial|conic)-gradient\b/i;
  function ls(e) {
    if (typeof e != "string") return false;
    const A = e.trim();
    return !A || ss.test(A) ? false : typeof CSS < "u" && typeof CSS.supports == "function" ? CSS.supports("color", A) : true;
  }
  var be = function() {
    return be = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, be.apply(this, arguments);
  }, cs = function(e, A, r) {
    if (r || arguments.length === 2) for (var t = 0, n = A.length, i; t < n; t++) (i || !(t in A)) && (i || (i = Array.prototype.slice.call(A, 0, t)), i[t] = A[t]);
    return e.concat(i || Array.prototype.slice.call(A));
  }, Bs = function(e) {
    e === void 0 && (e = "");
    var A = {
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
    function r(F) {
      var x = new Error(e + ": " + F);
      throw x;
    }
    function t(F) {
      e = e.substr(F);
    }
    function n(F) {
      var x = /^[\n\r\t\s]+/.exec(e);
      x && t(x[0].length);
      var T = F.exec(e);
      return T && t(T[0].length), T;
    }
    function i(F) {
      var x = F(), T = [];
      if (x) for (T.push(x); n(A.comma); ) x = F(), x ? T.push(x) : r("One extra comma");
      return T;
    }
    function o(F, x, T) {
      var O = n(x);
      if (O) return {
        type: F,
        value: O[T]
      };
    }
    function a() {
      var F = o("hex", A.hexColor, 1);
      if (F == null ? void 0 : F.value) {
        var x = wA(F == null ? void 0 : F.value).toRgb(), T = x.r, O = x.g, $ = x.b, N = x.a;
        return {
          value: "rgba(".concat(T, ", ").concat(O, ", ").concat($, ", ").concat(N, ")")
        };
      }
    }
    var s = function(F) {
      var x = Be(F == null ? void 0 : F[0]);
      return {
        value: "".concat(x ? "RGBA" : "rgba", "(").concat(i(k), ")")
      };
    };
    function l(F, x) {
      var T = n(F);
      if (T) {
        n(A.startCall) || r("Missing (");
        var O = x(T);
        return n(A.endCall) || r("Missing )"), O;
      }
    }
    function c() {
      return l(A.hslColor, nA);
    }
    function B() {
      return l(A.rgbaColor, s);
    }
    function u() {
      return l(A.rgbColor, eA);
    }
    function g() {
      var F = o("literal", A.literalColor, 0);
      if (F == null ? void 0 : F.value) {
        var x = wA(F == null ? void 0 : F.value).toRgb(), T = x.r, O = x.g, $ = x.b, N = x.a;
        return {
          value: "rgba(".concat(T, ", ").concat(O, ", ").concat($, ", ").concat(N, ")")
        };
      }
    }
    function Q() {
      return l(A.hsvColor, P);
    }
    function d() {
      return a() || c() || B() || u() || g() || Q();
    }
    function p() {
      var F, x = d();
      return x || r("Expected color definition"), x.left = parseInt((F = V()) === null || F === void 0 ? void 0 : F.value), x;
    }
    function h(F, x, T) {
      return l(x, function() {
        var O = T();
        return O && (n(A.comma) || r("Missing comma before color stops")), {
          type: F,
          orientation: O,
          colorStops: i(p)
        };
      });
    }
    function C() {
      return w() || b();
    }
    function U() {
      return h("linear-gradient", A.linearGradient, C) || h("repeating-linear-gradient", A.repeatingLinearGradient, C) || h("radial-gradient", A.radialGradient, y) || h("repeating-radial-gradient", A.repeatingRadialGradient, y);
    }
    function v() {
      return i(U);
    }
    function E() {
      var F, x = v();
      e.length > 0 && r("Invalid input not EOF");
      var T = x[0], O = (F = T == null ? void 0 : T.colorStops) === null || F === void 0 ? void 0 : F.filter(function(N) {
        return Be(N.value);
      }).length, $ = function() {
        if (O > 0) return T;
        var N = function(z, q) {
          return q === 0 ? or(z) : lt(z);
        };
        return be(be({}, T), {
          colorStops: T.colorStops.map(function(z, q) {
            return be(be({}, z), {
              value: N(z, q)
            });
          })
        });
      };
      return $();
    }
    function w() {
      return o("directional", A.sideOrCorner, 1);
    }
    function b() {
      return o("angular", A.angleValue, 1);
    }
    function y() {
      var F, x = m(), T;
      return x && (F = [], F.push(x), T = e, n(A.comma) && (x = m(), x ? F.push(x) : e = T)), F;
    }
    function m() {
      var F = L() || R();
      if (F) F.at = _();
      else {
        var x = M();
        if (x) {
          F = x;
          var T = _();
          T && (F.at = T);
        } else {
          var O = J();
          O && (F = {
            type: "default-radial",
            at: O
          });
        }
      }
      return F;
    }
    function K() {
      return o("px", A.pixelValue, 1) || o("em", A.emValue, 1);
    }
    function L() {
      var F = o("shape", /^(circle)/i, 0);
      return F && (F.style = K() || M()), F;
    }
    function R() {
      var F = o("shape", /^(ellipse)/i, 0);
      return F && (F.style = V() || M()), F;
    }
    function M() {
      return o("extent-keyword", A.extentKeywords, 1);
    }
    function _() {
      if (o("position", /^at/, 0)) {
        var F = J();
        return F || r("Missing positioning value"), F;
      }
    }
    function J() {
      var F = W();
      if (F.x || F.y) return {
        type: "position",
        value: F
      };
    }
    function W() {
      return {
        x: V(),
        y: V()
      };
    }
    function k() {
      return n(A.number)[1];
    }
    var nA = function(F) {
      var x = Be(F == null ? void 0 : F[0]), T = i(k), O = wA({
        h: T[0],
        s: T[1],
        l: T[2],
        a: T[3] || 1
      }).toRgb(), $ = O.r, N = O.g, z = O.b, q = O.a;
      return {
        value: "".concat(x ? "RGBA" : "rgba", "(").concat($, ", ").concat(N, ", ").concat(z, ", ").concat(q, ")")
      };
    }, P = function(F) {
      var x = Be(F == null ? void 0 : F[0]), T = i(k), O = wA({
        h: T[0],
        s: T[1],
        v: T[2],
        a: T[3] || 1
      }).toRgb(), $ = O.r, N = O.g, z = O.b, q = O.a;
      return {
        value: "".concat(x ? "RGBA" : "rgba", "(").concat($, ", ").concat(N, ", ").concat(z, ", ").concat(q, ")")
      };
    }, eA = function(F) {
      var x = Be(F == null ? void 0 : F[0]), T = n(A.spacedRgbColor), O = T || cs([
        null
      ], i(k), true), $ = O[1], N = O[2], z = O[3], q = O[4], fA = q === void 0 ? 1 : q;
      return {
        value: "".concat(x ? "RGBA" : "rgba", "(").concat($, ", ").concat(N, ", ").concat(z, ", ").concat(fA, ")")
      };
    };
    function V() {
      return o("%", A.percentageValue, 1) || Y() || K();
    }
    function Y() {
      return o("position-keyword", A.positionKeywords, 1);
    }
    return E();
  }, lt = function(e) {
    return e.value.toLowerCase();
  }, or = function(e) {
    return e.value.toUpperCase();
  }, us = function(e, A, r) {
    var t = e == null ? void 0 : e.includes("gradient");
    if (t) {
      var n = e == null ? void 0 : e.includes("conic"), i = n ? r : e;
      n && console.log("Sorry we cant handle conic gradients yet");
      var o = Bs(i);
      return o == null ? void 0 : o.colorStops;
    } else {
      var i = e || A;
      return [
        {
          value: i
        }
      ];
    }
  }, Ke = function(e, A, r) {
    return isNaN(e) || e < A ? A : e > r ? r : e;
  }, NA = function(e) {
    return Math.round(e);
  }, Xt = function() {
    return Xt = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, Xt.apply(this, arguments);
  }, eo = function(e) {
    var A = e.target.parentNode.getBoundingClientRect(), r = e.target.className, t = r === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (A == null ? void 0 : A.x) + t,
      offsetTop: A == null ? void 0 : A.y,
      clientWidth: A == null ? void 0 : A.width,
      clientHeight: A == null ? void 0 : A.height
    };
  };
  function Te(e, A) {
    var r = eo(e), t = r.offsetLeft, n = r.clientWidth, i = e.clientX - t - A / 2, o = n - 18, a = Ke(i, 0, o);
    return Math.round(a / (o / 100));
  }
  function gs(e, A, r, t, n) {
    var i = e * r - n / 2, o = (100 - A) / 100 * t - n / 2;
    return [
      i,
      o
    ];
  }
  var fs = function(e) {
    if (e.clientX) return {
      clientX: e.clientX,
      clientY: e.clientY
    };
    var A = e.touches[0] || {};
    return {
      clientX: A.clientX,
      clientY: A.clientY
    };
  };
  function ds(e, A) {
    var r = eo(e), t = r.offsetLeft, n = r.offsetTop, i = r.clientWidth, o = r.clientHeight, a = fs(e), s = a.clientX, l = a.clientY, c = function() {
      var u = s - t - A / 2;
      return Ke(u, -9, i - 10);
    }, B = function() {
      var u = l - n - A / 2;
      return Ke(u, -9, o - 10);
    };
    return [
      c(),
      B()
    ];
  }
  var Be = function(e) {
    var A;
    return (e == null ? void 0 : e[0]) === ((A = e == null ? void 0 : e[0]) === null || A === void 0 ? void 0 : A.toUpperCase());
  }, to = function(e) {
    if (e === "to top") return 0;
    if (e === "to bottom") return 180;
    if (e === "to left") return 270;
    if (e === "to right") return 90;
    if (e === "to top right") return 45;
    if (e === "to bottom right") return 135;
    if (e === "to bottom left") return 225;
    if (e === "to top left") return 315;
    var A = e || 0;
    return parseInt(A);
  }, ws = function(e) {
    var A, r, t, n, i;
    if (typeof e == "string") return e;
    if (!((A = e == null ? void 0 : e.type) === null || A === void 0) && A.includes("gradient")) {
      var o = (r = e == null ? void 0 : e.colorStops) === null || r === void 0 ? void 0 : r.sort(function(u, g) {
        return (u == null ? void 0 : u.left) - (g == null ? void 0 : g.left);
      }), a = (t = o == null ? void 0 : o.map(function(u) {
        return "".concat(u == null ? void 0 : u.value, " ").concat(u == null ? void 0 : u.left, "%");
      })) === null || t === void 0 ? void 0 : t.join(", "), s = e == null ? void 0 : e.type, l = to((n = e == null ? void 0 : e.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var B = ((i = e == null ? void 0 : e.colorStops[0]) === null || i === void 0 ? void 0 : i.value) || "rgba(175, 51, 242, 1)";
      return B;
    }
  }, Qs = function(e, A) {
    var r = e == null ? void 0 : e.map(function(i, o) {
      return Xt(Xt({}, i), {
        index: o
      });
    }), t = r == null ? void 0 : r.find(function(i) {
      return Be(i.value);
    }), n = t || r[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || A,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, hs = function(e) {
    var A, r = e == null ? void 0 : e.split(",")[0], t = (A = r == null ? void 0 : r.split("(")[1]) === null || A === void 0 ? void 0 : A.replace("deg", "");
    return to(t);
  }, Cs = function(e) {
    var A = e == null ? void 0 : e.includes("gradient"), r = e == null ? void 0 : e.split("(")[0], t = hs(e), n = r === "linear-gradient" ? "".concat(t, "deg") : "circle";
    return {
      degrees: t,
      degreeStr: n,
      isGradient: A,
      gradientType: r
    };
  }, UA = function() {
    return UA = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, UA.apply(this, arguments);
  }, ps = function(e, A, r) {
    if (r || arguments.length === 2) for (var t = 0, n = A.length, i; t < n; t++) (i || !(t in A)) && (i || (i = Array.prototype.slice.call(A, 0, t)), i[t] = A[t]);
    return e.concat(i || Array.prototype.slice.call(A));
  }, ro = H.createContext(null);
  function Us(e) {
    var A, r, t, n, i = e.value, o = e.children, a = e.onChange, s = e.isDarkMode, l = e.squareWidth, c = e.hideOpacity, B = e.showHexAlpha, u = e.squareHeight, g = e.passedConfig, Q = e.defaultStyles, d = e.pickerIdSuffix, p = {
      barSize: (A = g.barSize) !== null && A !== void 0 ? A : dt.barSize,
      crossSize: (r = g.crossSize) !== null && r !== void 0 ? r : dt.crossSize,
      defaultColor: (t = g.defaultColor) !== null && t !== void 0 ? t : dt.defaultColor,
      defaultGradient: (n = g.defaultGradient) !== null && n !== void 0 ? n : dt.defaultGradient
    }, h = us(i, p.defaultColor, p.defaultGradient), C = Cs(i), U = C.degrees, v = C.degreeStr, E = C.isGradient, w = C.gradientType, b = Qs(h, p.defaultGradient), y = b.currentColor, m = b.selectedColor, K = b.currentLeft, L = H.useState("rgb"), R = L[0], M = L[1], _ = H.useState({}), J = _[0], W = _[1], k = wA(y), nA = k.toRgb(), P = k.toHsv(), eA = H.useState(UA(UA({}, nA), P)), V = eA[0], Y = eA[1];
    H.useEffect(function() {
      (P == null ? void 0 : P.s) === 0 ? Y(UA(UA(UA({}, nA), P), {
        h: V == null ? void 0 : V.h
      })) : Y(UA(UA({}, nA), P));
    }, [
      y
    ]);
    var F = function(N) {
      var z = N.sort(function(vA, he) {
        return vA.left - he.left;
      }), q = z == null ? void 0 : z.map(function(vA) {
        return "".concat(vA == null ? void 0 : vA.value, " ").concat(vA.left, "%");
      }), fA = "".concat(w, "(").concat(v, ", ").concat(q.join(", "), ")");
      W(UA(UA({}, J), {
        gradient: fA
      })), a(fA);
    }, x = function(N, z) {
      var q = h == null ? void 0 : h.filter(function(vA) {
        return !Be(vA.value);
      }), fA = ps([
        {
          value: N.toUpperCase(),
          left: z ?? K
        }
      ], q, true);
      F(fA);
    }, T = function(N) {
      E ? x(N) : (W(UA(UA({}, J), {
        color: N
      })), a(N));
    }, O = function() {
      if ((h == null ? void 0 : h.length) > 2) {
        var N = h == null ? void 0 : h.map(function(q, fA) {
          return UA(UA({}, q), {
            value: fA === m - 1 ? or(q) : lt(q)
          });
        }), z = N == null ? void 0 : N.filter(function(q, fA) {
          return fA !== m;
        });
        F(z);
      }
    }, $ = {
      hc: V,
      setHc: Y,
      value: i,
      colors: h,
      config: p,
      degrees: U,
      onChange: a,
      previous: J,
      inputType: R,
      tinyColor: k,
      isDarkMode: s,
      isGradient: E,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: K,
      deletePoint: O,
      showHexAlpha: B,
      squareHeight: u,
      setInputType: M,
      gradientType: w,
      handleChange: T,
      currentColor: y,
      selectedColor: m,
      defaultStyles: Q,
      handleGradient: x,
      pickerIdSuffix: d,
      createGradientStr: F
    };
    return f.createElement(ro.Provider, {
      value: $
    }, o);
  }
  function j() {
    var e = H.useContext(ro);
    if (!e) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return e;
  }
  var dt = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, Fs = function(e, A) {
    H.useEffect(function() {
      var r, t = (r = e == null ? void 0 : e.current) === null || r === void 0 ? void 0 : r.getContext("2d", {
        willReadFrequently: true
      });
      if (t) {
        t.rect(0, 0, A, 14);
        for (var n = t.createLinearGradient(0, 0, A, 0), i = 0; i <= 360; i += 30) n.addColorStop(i / 360, "hsl(".concat(i, ", 100%, 50%)"));
        t.fillStyle = n, t.fill();
      }
    }, [
      e,
      A
    ]);
  }, vs = function(e, A, r, t) {
    H.useEffect(function() {
      var n, i = (n = e == null ? void 0 : e.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (i) {
        i.rect(0, 0, t, 14);
        for (var o = i.createLinearGradient(0, 0, t, 0), a = 0; a <= 100; a += 10) o.addColorStop(a / 100, "hsl(".concat(A, ", ").concat(a, "%, ").concat(r, "%)"));
        i.fillStyle = o, i.fill();
      }
    }, [
      e,
      A,
      r,
      t
    ]);
  }, ms = function(e, A, r, t) {
    H.useEffect(function() {
      var n, i = (n = e == null ? void 0 : e.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (i) {
        i.rect(0, 0, t, 14);
        for (var o = i.createLinearGradient(0, 0, t, 0), a = 0; a <= 100; a += 10) o.addColorStop(a / 100, "hsl(".concat(A, ", ").concat(r, "%, ").concat(a, "%)"));
        i.fillStyle = o, i.fill();
      }
    }, [
      e,
      A,
      r,
      t
    ]);
  }, Es = function(e, A, r, t) {
    H.useEffect(function() {
      var n, i = (n = e == null ? void 0 : e.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (i) {
        i.rect(0, 0, t, 14);
        for (var o = i.createLinearGradient(0, 0, t, 0), a = 0; a <= 100; a += 10) {
          var s = wA({
            h: A,
            s: r,
            v: a
          });
          o.addColorStop(a / 100, s.toHslString());
        }
        i.fillStyle = o, i.fill();
      }
    }, [
      e,
      A,
      r,
      t
    ]);
  }, Jt = function() {
    return Jt = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, Jt.apply(this, arguments);
  }, ys = function() {
    var e = H.useRef(null), A = j(), r = A.config, t = A.handleChange, n = A.squareWidth, i = A.hc, o = A.setHc, a = A.pickerIdSuffix, s = H.useState(false), l = s[0], c = s[1], B = r.barSize;
    Fs(e, n);
    var u = function() {
      c(false);
    }, g = function() {
      c(true);
    }, Q = function(h) {
      var C = Te(h, B) * 3.6, U = wA({
        h: C,
        s: i == null ? void 0 : i.s,
        v: i == null ? void 0 : i.v
      }), v = U.toRgb(), E = v.r, w = v.g, b = v.b;
      t("rgba(".concat(E, ", ").concat(w, ", ").concat(b, ", ").concat(i.a, ")")), o(Jt(Jt({}, i), {
        h: C
      }));
    }, d = function(h) {
      l && Q(h);
    }, p = function(h) {
      l || Q(h);
    };
    return H.useEffect(function() {
      var h = function() {
        u();
      };
      return window.addEventListener("mouseup", h), function() {
        window.removeEventListener("mouseup", h);
      };
    }, []), f.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(h) {
        return d(h);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, f.createElement("div", {
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
        left: (i == null ? void 0 : i.h) * ((n - 18) / 360),
        top: -2,
        cursor: "ew-resize",
        boxSizing: "border-box"
      },
      onMouseDown: g,
      id: "rbgcp-hue-handle".concat(a)
    }), f.createElement("canvas", {
      ref: e,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(h) {
        return p(h);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function Hs(e, A, r) {
    var t = 0, n = 0, i = 0, o = 0;
    if (e === null || A === null || r === null || isNaN(e) || isNaN(A) || isNaN(r)) return console.log("Please enter numeric RGB values!"), {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    if (e < 0 || A < 0 || r < 0 || e > 255 || A > 255 || r > 255) return console.log("RGB values must be in the range 0 to 255."), {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    if (e === 0 && A === 0 && r === 0) return o = 1, {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    t = 1 - e / 255, n = 1 - A / 255, i = 1 - r / 255;
    var a = Math.min(t, Math.min(n, i));
    return t = (t - a) / (1 - a), n = (n - a) / (1 - a), i = (i - a) / (1 - a), o = a, {
      c: t,
      m: n,
      y: i,
      k: o
    };
  }
  var bs = function(e) {
    var A = e.c, r = e.m, t = e.y, n = e.k, i = 255 * (1 - A) * (1 - n), o = 255 * (1 - r) * (1 - n), a = 255 * (1 - t) * (1 - n);
    return {
      r: i,
      g: o,
      b: a
    };
  }, Is = function(e) {
    return typeof e != "number" ? "FF" : e < 0 ? "00" : e > 1 ? "FF" : Math.round(e * 255).toString(16).padStart(2, "0").toUpperCase();
  }, DA = function() {
    return DA = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, DA.apply(this, arguments);
  }, HA = function(e) {
    var A = e.label, r = e.value, t = e.callback, n = e.max, i = n === void 0 ? 100 : n, o = e.hideOpacity, a = e.defaultStyles, s = e.pickerIdSuffix, l = H.useState(r), c = l[0], B = l[1], u = o ? "25%" : "20%";
    H.useEffect(function() {
      B(r);
    }, [
      r
    ]);
    var g = function(Q) {
      var d = Ke(parseFloat(Q.target.value), 0, i);
      B(d), t(d);
    };
    return f.createElement("div", {
      style: {
        width: u,
        flexShrink: 1
      },
      id: "rbgcp-".concat(A, "-input-wrapper").concat(s)
    }, f.createElement("input", {
      value: c,
      onChange: function(Q) {
        return g(Q);
      },
      style: DA({}, a.rbgcpInput),
      id: "rbgcp-".concat(A, "-input").concat(s)
    }), f.createElement("div", {
      style: DA({}, a.rbgcpInputLabel)
    }, A));
  }, Ss = function(e) {
    var A = e.opacity, r = e.tinyColor, t = e.showHexAlpha, n = e.handleChange, i = e.defaultStyles, o = e.pickerIdSuffix, a = H.useState(""), s = a[0], l = a[1], c = r.toHex(), B = H.useState(c), u = B[0], g = B[1];
    H.useEffect(function() {
      s !== "hex" && g(c);
    }, [
      r,
      s,
      c
    ]);
    var Q = function() {
      l("hex");
    }, d = function() {
      l("");
    }, p = function(v) {
      var E = wA(v.target.value);
      if (g(v.target.value), E.isValid()) {
        var w = E.toRgb(), b = w.r, y = w.g, m = w.b, K = "rgba(".concat(b, ", ").concat(y, ", ").concat(m, ", ").concat(A, ")");
        n(K);
      }
    }, h = t ? "".concat(u).concat(Is(A)) : u, C = t ? "HEXA" : "HEX", U = t ? 88 : 76;
    return f.createElement("div", {
      style: {
        width: U,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(o)
    }, f.createElement("input", {
      onBlur: d,
      onFocus: Q,
      onChange: function(v) {
        return p(v);
      },
      value: h == null ? void 0 : h.toUpperCase(),
      id: "rbgcp-hex-input".concat(o),
      style: DA(DA({}, i.rbgcpInput), i.rbgcpHexInput)
    }), f.createElement("div", {
      style: DA({}, i.rbgcpInputLabel)
    }, C));
  }, xs = function(e) {
    var A = e.hc, r = e.hideOpacity, t = e.handleChange, n = e.defaultStyles, i = e.pickerIdSuffix, o = function(a) {
      var s = a.r, l = a.g, c = a.b;
      t("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(A == null ? void 0 : A.a, ")"));
    };
    return f.createElement(f.Fragment, null, f.createElement(HA, {
      label: "R",
      max: 255,
      value: A == null ? void 0 : A.r,
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(a) {
        return o({
          r: a,
          g: A == null ? void 0 : A.g,
          b: A == null ? void 0 : A.b
        });
      }
    }), f.createElement(HA, {
      label: "G",
      max: 255,
      value: A == null ? void 0 : A.g,
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(a) {
        return o({
          r: A == null ? void 0 : A.r,
          g: a,
          b: A == null ? void 0 : A.b
        });
      }
    }), f.createElement(HA, {
      label: "B",
      max: 255,
      value: A == null ? void 0 : A.b,
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(a) {
        return o({
          r: A == null ? void 0 : A.r,
          g: A == null ? void 0 : A.g,
          b: a
        });
      }
    }));
  }, Ls = function(e) {
    var A = e.hc, r = e.setHc, t = e.tinyColor, n = e.hideOpacity, i = e.handleChange, o = e.defaultStyles, a = e.pickerIdSuffix, s = t.toHsl(), l = s.s, c = s.l, B = function(g, Q, d) {
      var p = wA({
        h: g,
        s: Q,
        l: d
      }).toRgb(), h = p.r, C = p.g, U = p.b;
      i("rgba(".concat(h, ", ").concat(C, ", ").concat(U, ", ").concat(A == null ? void 0 : A.a, ")")), r(DA(DA({}, A), {
        h: g
      }));
    }, u = function(g) {
      var Q = wA(g).toRgb(), d = Q.r, p = Q.g, h = Q.b;
      i("rgba(".concat(d, ", ").concat(p, ", ").concat(h, ", ").concat(A == null ? void 0 : A.a, ")"));
    };
    return f.createElement(f.Fragment, null, f.createElement(HA, {
      label: "H",
      max: 360,
      value: NA(A == null ? void 0 : A.h),
      hideOpacity: n,
      defaultStyles: o,
      pickerIdSuffix: a,
      callback: function(g) {
        return B(g, l, c);
      }
    }), f.createElement(HA, {
      label: "S",
      value: NA(l * 100),
      hideOpacity: n,
      defaultStyles: o,
      pickerIdSuffix: a,
      callback: function(g) {
        return u({
          h: A == null ? void 0 : A.h,
          s: g,
          l: c
        });
      }
    }), f.createElement(HA, {
      label: "L",
      value: NA(c * 100),
      hideOpacity: n,
      defaultStyles: o,
      pickerIdSuffix: a,
      callback: function(g) {
        return u({
          h: A == null ? void 0 : A.h,
          s: l,
          l: g
        });
      }
    }));
  }, Ks = function(e) {
    var A = e.hc, r = e.setHc, t = e.hideOpacity, n = e.handleChange, i = e.defaultStyles, o = e.pickerIdSuffix, a = function(l, c, B) {
      var u = wA({
        h: l,
        s: c,
        v: B
      }).toRgb(), g = u.r, Q = u.g, d = u.b;
      n("rgba(".concat(g, ", ").concat(Q, ", ").concat(d, ", ").concat(A == null ? void 0 : A.a, ")")), r(DA(DA({}, A), {
        h: l
      }));
    }, s = function(l) {
      var c = wA(l).toRgb(), B = c.r, u = c.g, g = c.b;
      n("rgba(".concat(B, ", ").concat(u, ", ").concat(g, ", ").concat(A == null ? void 0 : A.a, ")"));
    };
    return f.createElement(f.Fragment, null, f.createElement(HA, {
      label: "H",
      max: 360,
      value: NA(A == null ? void 0 : A.h),
      hideOpacity: t,
      defaultStyles: i,
      pickerIdSuffix: o,
      callback: function(l) {
        return a(l, A == null ? void 0 : A.s, A == null ? void 0 : A.v);
      }
    }), f.createElement(HA, {
      label: "S",
      hideOpacity: t,
      value: NA((A == null ? void 0 : A.s) * 100),
      defaultStyles: i,
      pickerIdSuffix: o,
      callback: function(l) {
        return s({
          h: A == null ? void 0 : A.h,
          s: l,
          v: A == null ? void 0 : A.v
        });
      }
    }), f.createElement(HA, {
      label: "V",
      hideOpacity: t,
      value: NA((A == null ? void 0 : A.v) * 100),
      defaultStyles: i,
      pickerIdSuffix: o,
      callback: function(l) {
        return s({
          h: A == null ? void 0 : A.h,
          s: A == null ? void 0 : A.s,
          v: l
        });
      }
    }));
  }, Ts = function(e) {
    var A = e.hc, r = e.hideOpacity, t = e.handleChange, n = e.defaultStyles, i = e.pickerIdSuffix, o = Hs(A == null ? void 0 : A.r, A == null ? void 0 : A.g, A == null ? void 0 : A.b), a = o.c, s = o.m, l = o.y, c = o.k, B = function(u) {
      var g = bs(u), Q = g.r, d = g.g, p = g.b;
      t("rgba(".concat(Q, ", ").concat(d, ", ").concat(p, ", ").concat(A == null ? void 0 : A.a, ")"));
    };
    return f.createElement(f.Fragment, null, f.createElement(HA, {
      label: "C",
      value: NA(a * 100),
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(u) {
        return B({
          c: u / 100,
          m: s,
          y: l,
          k: c
        });
      }
    }), f.createElement(HA, {
      label: "M",
      value: NA(s * 100),
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(u) {
        return B({
          c: a,
          m: u / 100,
          y: l,
          k: c
        });
      }
    }), f.createElement(HA, {
      label: "Y",
      value: NA(l * 100),
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(u) {
        return B({
          c: a,
          m: s,
          y: u / 100,
          k: c
        });
      }
    }), f.createElement(HA, {
      label: "K",
      value: NA(c * 100),
      hideOpacity: r,
      defaultStyles: n,
      pickerIdSuffix: i,
      callback: function(u) {
        return B({
          c: a,
          m: s,
          y: l,
          k: u / 100
        });
      }
    }));
  }, Ds = function() {
    var e = j(), A = e.hc, r = e.setHc, t = e.inputType, n = e.tinyColor, i = e.hideOpacity, o = e.showHexAlpha, a = e.handleChange, s = e.defaultStyles, l = e.pickerIdSuffix;
    return f.createElement("div", {
      style: DA({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, t !== "cmyk" && f.createElement(Ss, {
      opacity: A == null ? void 0 : A.a,
      tinyColor: n,
      showHexAlpha: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), t === "hsl" && f.createElement(Ls, {
      hc: A,
      setHc: r,
      tinyColor: n,
      hideOpacity: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), t === "rgb" && f.createElement(xs, {
      hc: A,
      hideOpacity: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), t === "hsv" && f.createElement(Ks, {
      hc: A,
      setHc: r,
      hideOpacity: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), t === "cmyk" && f.createElement(Ts, {
      hc: A,
      hideOpacity: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !i && f.createElement(HA, {
      label: "A",
      hideOpacity: i,
      defaultStyles: s,
      value: Math.round((A == null ? void 0 : A.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(A == null ? void 0 : A.r, ", ").concat(A == null ? void 0 : A.g, ", ").concat(A == null ? void 0 : A.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, Os = function(e, A, r, t) {
    H.useEffect(function() {
      if (e.current) {
        var n = e.current.getContext("2d", {
          willReadFrequently: true
        });
        if (n) {
          n.fillStyle = "hsl(".concat(A, ", 100%, 50%)"), n.fillRect(0, 0, r, t);
          var i = n.createLinearGradient(0, 0, r, 0);
          i.addColorStop(0, "rgba(255, 255, 255, 1)"), i.addColorStop(1, "rgba(255, 255, 255, 0)"), n.fillStyle = i, n.fillRect(0, 0, r, t);
          var o = n.createLinearGradient(0, 0, 0, t);
          o.addColorStop(0, "rgba(0, 0, 0, 0)"), o.addColorStop(1, "rgba(0, 0, 0, 1)"), n.fillStyle = o, n.fillRect(0, 0, r, t);
        }
      }
    }, [
      e,
      A,
      r,
      t
    ]);
  }, no = "Expected a function", Gn = NaN, Ms = "[object Symbol]", ks = /^\s+|\s+$/g, Gs = /^[-+]0x[0-9a-f]+$/i, Rs = /^0b[01]+$/i, Vs = /^0o[0-7]+$/i, _s = parseInt, Ns = typeof ut == "object" && ut && ut.Object === Object && ut, Ps = typeof self == "object" && self && self.Object === Object && self, Xs = Ns || Ps || Function("return this")(), Js = Object.prototype, Ws = Js.toString, Ys = Math.max, Zs = Math.min, Ur = function() {
    return Xs.Date.now();
  };
  function js(e, A, r) {
    var t, n, i, o, a, s, l = 0, c = false, B = false, u = true;
    if (typeof e != "function") throw new TypeError(no);
    A = Rn(A) || 0, Wt(r) && (c = !!r.leading, B = "maxWait" in r, i = B ? Ys(Rn(r.maxWait) || 0, A) : i, u = "trailing" in r ? !!r.trailing : u);
    function g(w) {
      var b = t, y = n;
      return t = n = void 0, l = w, o = e.apply(y, b), o;
    }
    function Q(w) {
      return l = w, a = setTimeout(h, A), c ? g(w) : o;
    }
    function d(w) {
      var b = w - s, y = w - l, m = A - b;
      return B ? Zs(m, i - y) : m;
    }
    function p(w) {
      var b = w - s, y = w - l;
      return s === void 0 || b >= A || b < 0 || B && y >= i;
    }
    function h() {
      var w = Ur();
      if (p(w)) return C(w);
      a = setTimeout(h, d(w));
    }
    function C(w) {
      return a = void 0, u && t ? g(w) : (t = n = void 0, o);
    }
    function U() {
      a !== void 0 && clearTimeout(a), l = 0, t = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? o : C(Ur());
    }
    function E() {
      var w = Ur(), b = p(w);
      if (t = arguments, n = this, s = w, b) {
        if (a === void 0) return Q(s);
        if (B) return a = setTimeout(h, A), g(s);
      }
      return a === void 0 && (a = setTimeout(h, A)), o;
    }
    return E.cancel = U, E.flush = v, E;
  }
  function zs(e, A, r) {
    var t = true, n = true;
    if (typeof e != "function") throw new TypeError(no);
    return Wt(r) && (t = "leading" in r ? !!r.leading : t, n = "trailing" in r ? !!r.trailing : n), js(e, A, {
      leading: t,
      maxWait: A,
      trailing: n
    });
  }
  function Wt(e) {
    var A = typeof e;
    return !!e && (A == "object" || A == "function");
  }
  function qs(e) {
    return !!e && typeof e == "object";
  }
  function $s(e) {
    return typeof e == "symbol" || qs(e) && Ws.call(e) == Ms;
  }
  function Rn(e) {
    if (typeof e == "number") return e;
    if ($s(e)) return Gn;
    if (Wt(e)) {
      var A = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Wt(A) ? A + "" : A;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(ks, "");
    var r = Rs.test(e);
    return r || Vs.test(e) ? _s(e.slice(2), r ? 2 : 8) : Gs.test(e) ? Gn : +e;
  }
  var Al = zs;
  const el = pa(Al);
  var ue = function() {
    return ue = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, ue.apply(this, arguments);
  }, tl = function() {
    var e, A, r = j(), t = r.hc, n = r.config, i = r.squareWidth, o = r.squareHeight, a = r.handleChange, s = r.defaultStyles, l = r.pickerIdSuffix, c = n.crossSize, B = H.useState(false), u = B[0], g = B[1], Q = H.useRef(null), d = gs(t == null ? void 0 : t.s, (t == null ? void 0 : t.v) * 100, i, o, c), p = d[0], h = d[1], C = H.useState({
      x: p,
      y: h
    }), U = C[0], v = C[1];
    Os(Q, t == null ? void 0 : t.h, i, o), H.useEffect(function() {
      u || v({
        x: (t == null ? void 0 : t.v) === 0 ? U.x : p,
        y: h
      });
    }, [
      p,
      h
    ]);
    var E = function(L) {
      var R = el(function() {
        var M = ds(L, c), _ = M[0], J = M[1];
        if (_ && J) {
          var W = Math.min(_ + c / 2, i - 1), k = Math.min(J + c / 2, o - 1), nA = W / i * 100, P = 100 - k / o * 100;
          v({
            x: P === 0 ? U == null ? void 0 : U.x : _,
            y: J
          });
          var eA = wA("hsva(".concat(t == null ? void 0 : t.h, ", ").concat(nA, "%, ").concat(P, "%, ").concat(t == null ? void 0 : t.a, ")"));
          a(eA.toRgbString());
        }
      }, 250);
      R();
    }, w = function() {
      g(false);
    }, b = function(L) {
      u && E(L);
    }, y = function(L) {
      u || E(L);
    }, m = function() {
      g(true);
    }, K = function(L) {
      g(true), E(L);
    };
    return H.useEffect(function() {
      var L = function() {
        w();
      };
      return window.addEventListener("mouseup", L), function() {
        window.removeEventListener("mouseup", L);
      };
    }, []), f.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, f.createElement("div", {
      onMouseUp: w,
      onTouchEnd: w,
      onMouseDown: K,
      onTouchStart: K,
      onMouseMove: function(L) {
        return b(L);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, f.createElement("div", {
      style: ue(ue(ue({}, s.rbgcpHandle), {
        transform: "translate(".concat((e = U == null ? void 0 : U.x) !== null && e !== void 0 ? e : 0, "px, ").concat((A = U == null ? void 0 : U.y) !== null && A !== void 0 ? A : 0, "px)")
      }), u ? {
        transition: ""
      } : {}),
      onMouseDown: m,
      id: "rbgcp-square-handle".concat(l)
    }), f.createElement("div", {
      style: ue(ue({}, s.rbgcpCanvasWrapper), {
        height: o
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(L) {
        return y(L);
      }
    }, f.createElement("canvas", {
      ref: Q,
      width: "".concat(i, "px"),
      height: "".concat(o, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, ee = function() {
    return ee = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, ee.apply(this, arguments);
  }, rl = function() {
    var e = j(), A = e.config, r = e.hc, t = r === void 0 ? {} : r, n = e.squareWidth, i = e.handleChange, o = e.defaultStyles, a = e.pickerIdSuffix, s = H.useState(false), l = s[0], c = s[1], B = t.r, u = t.g, g = t.b, Q = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(B, ",").concat(u, ",").concat(g, ",.5) 100%)"), d = A.barSize, p = function() {
      c(false);
    }, h = function() {
      c(true);
    }, C = function(w) {
      var b = Te(w, d) / 100, y = "rgba(".concat(B, ", ").concat(u, ", ").concat(g, ", ").concat(b, ")");
      i(y);
    }, U = function(w) {
      l && C(w);
    }, v = function(w) {
      l || C(w);
    }, E = n - 18;
    return H.useEffect(function() {
      var w = function() {
        p();
      };
      return window.addEventListener("mouseup", w), function() {
        window.removeEventListener("mouseup", w);
      };
    }, []), f.createElement("div", {
      onMouseDown: h,
      onMouseMove: function(w) {
        return U(w);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, f.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: ee(ee({}, o.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), f.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: ee(ee({}, o.rbgcpHandle), {
        left: E * (t == null ? void 0 : t.a),
        top: -2
      })
    }), f.createElement("div", {
      style: ee(ee({}, o.rbgcpOpacityOverlay), {
        background: Q
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(w) {
        return v(w);
      }
    }));
  }, nl = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, il = [
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
  ], ol = function(e) {
    var A = e.presets, r = A === void 0 ? [] : A, t = j(), n = t.value, i = t.onChange, o = t.isDarkMode, a = t.squareWidth, s = t.handleChange, l = t.pickerIdSuffix, c = function() {
      return (r == null ? void 0 : r.length) > 0 ? r == null ? void 0 : r.slice(0, 18) : il;
    }, B = function(g) {
      (g == null ? void 0 : g.includes("gradient")) ? i(g) : s(g);
    }, u = function(g) {
      if (!g || o) return "";
      var Q = g == null ? void 0 : g.replace(" ", "");
      return Q === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return f.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, f.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: u(n)
      },
      id: "rbgcp-preview".concat(l)
    }), f.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(g, Q) {
      return f.createElement("div", {
        key: "".concat(g, "-").concat(Q),
        id: "rbgcp-preset-".concat(Q, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, f.createElement("div", {
        style: {
          height: 23.5,
          width: "100%",
          background: g,
          borderRadius: 4,
          border: u(g)
        },
        onClick: function() {
          return B(g);
        },
        id: "rbgcp-preset-".concat(Q).concat(l)
      }));
    })));
  }, D = function() {
    return D = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, D.apply(this, arguments);
  }, al = function() {
    var e = j().defaultStyles, A = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, f.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D({}, A), e.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, sl = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, f.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, ll = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, f.createElement("circle", {
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), f.createElement("circle", {
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, cl = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, i = {
      strokeWidth: "1.8px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, f.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), f.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, i), r.rbgcpControlIcon), t && {
        stroke: t,
        fill: t
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), f.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), f.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, i), r.rbgcpControlIcon), t && {
        stroke: t,
        fill: t
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), f.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), f.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, i), r.rbgcpControlIcon), t && {
        stroke: t,
        fill: t
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, Bl = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, ul = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, f.createElement("circle", {
      style: D(D({}, r.rbgcpControlIcon2), t && {
        fill: t
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), f.createElement("circle", {
      style: D(D({}, r.rbgcpControlIcon2), t && {
        fill: t
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), f.createElement("circle", {
      style: D(D({}, r.rbgcpControlIcon2), t && {
        fill: t
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), f.createElement("circle", {
      style: D(D({}, r.rbgcpControlIcon2), t && {
        fill: t
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), f.createElement("path", {
      style: D(D(D(D({}, n), r.rbgcpControlIcon), r.rbgcpControlIcon2), t && {
        fill: t,
        stroke: t
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, gl = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, f.createElement("polyline", {
      strokeLinecap: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), f.createElement("polyline", {
      strokeLinecap: "round",
      style: D(D(D({}, n), r.rbgcpControlIcon), t && {
        stroke: t
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, fl = function() {
    var e = j().defaultStyles;
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, f.createElement("path", {
      style: D({}, e.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), f.createElement("path", {
      style: D({}, e.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), f.createElement("path", {
      style: D({}, e.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), f.createElement("path", {
      style: D({}, e.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, dl = function(e) {
    var A, r = e.children, t = "id" + Math.random().toString(16).slice(2), n = H.useRef((A = document.getElementById(t)) !== null && A !== void 0 ? A : document.createElement("div")), i = H.useState(!n.current.parentElement)[0];
    return H.useEffect(function() {
      var o = n.current;
      return i && (n.current.id = t, document.body.appendChild(n.current)), function() {
        i && o.parentElement && o.parentElement.removeChild(o);
      };
    }, [
      t
    ]), Ca.createPortal(r, n.current);
  };
  const wl = H.memo(dl);
  var Yr = function(e, A) {
    return Yr = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(r, t) {
      r.__proto__ = t;
    } || function(r, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }, Yr(e, A);
  };
  function kA(e, A) {
    if (typeof A != "function" && A !== null) throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
    Yr(e, A);
    function r() {
      this.constructor = e;
    }
    e.prototype = A === null ? Object.create(A) : (r.prototype = A.prototype, new r());
  }
  var Zr = function() {
    return Zr = Object.assign || function(A) {
      for (var r, t = 1, n = arguments.length; t < n; t++) {
        r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (A[i] = r[i]);
      }
      return A;
    }, Zr.apply(this, arguments);
  };
  function FA(e, A, r, t) {
    function n(i) {
      return i instanceof r ? i : new r(function(o) {
        o(i);
      });
    }
    return new (r || (r = Promise))(function(i, o) {
      function a(c) {
        try {
          l(t.next(c));
        } catch (B) {
          o(B);
        }
      }
      function s(c) {
        try {
          l(t.throw(c));
        } catch (B) {
          o(B);
        }
      }
      function l(c) {
        c.done ? i(c.value) : n(c.value).then(a, s);
      }
      l((t = t.apply(e, [])).next());
    });
  }
  function hA(e, A) {
    var r = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, t, n, i, o;
    return o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function a(l) {
      return function(c) {
        return s([
          l,
          c
        ]);
      };
    }
    function s(l) {
      if (t) throw new TypeError("Generator is already executing.");
      for (; r; ) try {
        if (t = 1, n && (i = l[0] & 2 ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
        switch (n = 0, i && (l = [
          l[0] & 2,
          i.value
        ]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return r.label++, {
              value: l[1],
              done: false
            };
          case 5:
            r.label++, n = l[1], l = [
              0
            ];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = l;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = A.call(e, r);
      } catch (c) {
        l = [
          6,
          c
        ], n = 0;
      } finally {
        t = i = 0;
      }
      if (l[0] & 5) throw l[1];
      return {
        value: l[0] ? l[1] : void 0,
        done: true
      };
    }
  }
  function wt(e, A, r) {
    if (arguments.length === 2) for (var t = 0, n = A.length, i; t < n; t++) (i || !(t in A)) && (i || (i = Array.prototype.slice.call(A, 0, t)), i[t] = A[t]);
    return e.concat(i || A);
  }
  var zA = (function() {
    function e(A, r, t, n) {
      this.left = A, this.top = r, this.width = t, this.height = n;
    }
    return e.prototype.add = function(A, r, t, n) {
      return new e(this.left + A, this.top + r, this.width + t, this.height + n);
    }, e.fromClientRect = function(A, r) {
      return new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height);
    }, e.fromDOMRectList = function(A, r) {
      var t = Array.from(r).find(function(n) {
        return n.width !== 0;
      });
      return t ? new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  })(), ar = function(e, A) {
    return zA.fromClientRect(e, A.getBoundingClientRect());
  }, Ql = function(e) {
    var A = e.body, r = e.documentElement;
    if (!A || !r) throw new Error("Unable to get document size");
    var t = Math.max(Math.max(A.scrollWidth, r.scrollWidth), Math.max(A.offsetWidth, r.offsetWidth), Math.max(A.clientWidth, r.clientWidth)), n = Math.max(Math.max(A.scrollHeight, r.scrollHeight), Math.max(A.offsetHeight, r.offsetHeight), Math.max(A.clientHeight, r.clientHeight));
    return new zA(0, 0, t, n);
  }, sr = function(e) {
    for (var A = [], r = 0, t = e.length; r < t; ) {
      var n = e.charCodeAt(r++);
      if (n >= 55296 && n <= 56319 && r < t) {
        var i = e.charCodeAt(r++);
        (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n), r--);
      } else A.push(n);
    }
    return A;
  }, oA = function() {
    for (var e = [], A = 0; A < arguments.length; A++) e[A] = arguments[A];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
    var r = e.length;
    if (!r) return "";
    for (var t = [], n = -1, i = ""; ++n < r; ) {
      var o = e[n];
      o <= 65535 ? t.push(o) : (o -= 65536, t.push((o >> 10) + 55296, o % 1024 + 56320)), (n + 1 === r || t.length > 16384) && (i += String.fromCharCode.apply(String, t), t.length = 0);
    }
    return i;
  }, Vn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Qt = 0; Qt < Vn.length; Qt++) hl[Vn.charCodeAt(Qt)] = Qt;
  var _n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var ht = 0; ht < _n.length; ht++) Xe[_n.charCodeAt(ht)] = ht;
  var Cl = function(e) {
    var A = e.length * 0.75, r = e.length, t, n = 0, i, o, a, s;
    e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (t = 0; t < r; t += 4) i = Xe[e.charCodeAt(t)], o = Xe[e.charCodeAt(t + 1)], a = Xe[e.charCodeAt(t + 2)], s = Xe[e.charCodeAt(t + 3)], c[n++] = i << 2 | o >> 4, c[n++] = (o & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, pl = function(e) {
    for (var A = e.length, r = [], t = 0; t < A; t += 2) r.push(e[t + 1] << 8 | e[t]);
    return r;
  }, Ul = function(e) {
    for (var A = e.length, r = [], t = 0; t < A; t += 4) r.push(e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]);
    return r;
  }, we = 5, Fn = 11, Fr = 2, Fl = Fn - we, io = 65536 >> we, vl = 1 << we, vr = vl - 1, ml = 1024 >> we, El = io + ml, yl = El, Hl = 32, bl = yl + Hl, Il = 65536 >> Fn, Sl = 1 << Fl, xl = Sl - 1, Nn = function(e, A, r) {
    return e.slice ? e.slice(A, r) : new Uint16Array(Array.prototype.slice.call(e, A, r));
  }, Ll = function(e, A, r) {
    return e.slice ? e.slice(A, r) : new Uint32Array(Array.prototype.slice.call(e, A, r));
  }, Kl = function(e, A) {
    var r = Cl(e), t = Array.isArray(r) ? Ul(r) : new Uint32Array(r), n = Array.isArray(r) ? pl(r) : new Uint16Array(r), i = 24, o = Nn(n, i / 2, t[4] / 2), a = t[5] === 2 ? Nn(n, (i + t[4]) / 2) : Ll(t, Math.ceil((i + t[4]) / 4));
    return new Tl(t[0], t[1], t[2], t[3], o, a);
  }, Tl = (function() {
    function e(A, r, t, n, i, o) {
      this.initialValue = A, this.errorValue = r, this.highStart = t, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return e.prototype.get = function(A) {
      var r;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535) return r = this.index[A >> we], r = (r << Fr) + (A & vr), this.data[r];
        if (A <= 65535) return r = this.index[io + (A - 55296 >> we)], r = (r << Fr) + (A & vr), this.data[r];
        if (A < this.highStart) return r = bl - Il + (A >> Fn), r = this.index[r], r += A >> we & xl, r = this.index[r], r = (r << Fr) + (A & vr), this.data[r];
        if (A <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })(), Pn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Ct = 0; Ct < Pn.length; Ct++) Dl[Pn.charCodeAt(Ct)] = Ct;
  var Ol = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Xn = 50, Ml = 1, oo = 2, ao = 3, kl = 4, Gl = 5, Jn = 7, so = 8, Wn = 9, re = 10, jr = 11, Yn = 12, zr = 13, Rl = 14, Je = 15, qr = 16, pt = 17, Re = 18, Vl = 19, Zn = 20, $r = 21, Ve = 22, mr = 23, pe = 24, SA = 25, We = 26, Ye = 27, Ue = 28, _l = 29, ge = 30, Nl = 31, Ut = 32, Ft = 33, An = 34, en = 35, tn = 36, nt = 37, rn = 38, Rt = 39, Vt = 40, Er = 41, lo = 42, Pl = 43, Xl = [
    9001,
    65288
  ], co = "!", G = "\xD7", vt = "\xF7", nn = Kl(Ol), JA = [
    ge,
    tn
  ], on = [
    Ml,
    oo,
    ao,
    Gl
  ], Bo = [
    re,
    so
  ], jn = [
    Ye,
    We
  ], Jl = on.concat(Bo), zn = [
    rn,
    Rt,
    Vt,
    An,
    en
  ], Wl = [
    Je,
    zr
  ], Yl = function(e, A) {
    A === void 0 && (A = "strict");
    var r = [], t = [], n = [];
    return e.forEach(function(i, o) {
      var a = nn.get(i);
      if (a > Xn ? (n.push(true), a -= Xn) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(A) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(i) !== -1) return t.push(o), r.push(qr);
      if (a === kl || a === jr) {
        if (o === 0) return t.push(o), r.push(ge);
        var s = r[o - 1];
        return Jl.indexOf(s) === -1 ? (t.push(t[o - 1]), r.push(s)) : (t.push(o), r.push(ge));
      }
      if (t.push(o), a === Nl) return r.push(A === "strict" ? $r : nt);
      if (a === lo || a === _l) return r.push(ge);
      if (a === Pl) return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? r.push(nt) : r.push(ge);
      r.push(a);
    }), [
      t,
      r,
      n
    ];
  }, yr = function(e, A, r, t) {
    var n = t[r];
    if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n) for (var i = r; i <= t.length; ) {
      i++;
      var o = t[i];
      if (o === A) return true;
      if (o !== re) break;
    }
    if (n === re) for (var i = r; i > 0; ) {
      i--;
      var a = t[i];
      if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a) for (var s = r; s <= t.length; ) {
        s++;
        var o = t[s];
        if (o === A) return true;
        if (o !== re) break;
      }
      if (a !== re) break;
    }
    return false;
  }, qn = function(e, A) {
    for (var r = e; r >= 0; ) {
      var t = A[r];
      if (t === re) r--;
      else return t;
    }
    return 0;
  }, Zl = function(e, A, r, t, n) {
    if (r[t] === 0) return G;
    var i = t - 1;
    if (Array.isArray(n) && n[i] === true) return G;
    var o = i - 1, a = i + 1, s = A[i], l = o >= 0 ? A[o] : 0, c = A[a];
    if (s === oo && c === ao) return G;
    if (on.indexOf(s) !== -1) return co;
    if (on.indexOf(c) !== -1 || Bo.indexOf(c) !== -1) return G;
    if (qn(i, A) === so) return vt;
    if (nn.get(e[i]) === jr || (s === Ut || s === Ft) && nn.get(e[a]) === jr || s === Jn || c === Jn || s === Wn || [
      re,
      zr,
      Je
    ].indexOf(s) === -1 && c === Wn || [
      pt,
      Re,
      Vl,
      pe,
      Ue
    ].indexOf(c) !== -1 || qn(i, A) === Ve || yr(mr, Ve, i, A) || yr([
      pt,
      Re
    ], $r, i, A) || yr(Yn, Yn, i, A)) return G;
    if (s === re) return vt;
    if (s === mr || c === mr) return G;
    if (c === qr || s === qr) return vt;
    if ([
      zr,
      Je,
      $r
    ].indexOf(c) !== -1 || s === Rl || l === tn && Wl.indexOf(s) !== -1 || s === Ue && c === tn || c === Zn || JA.indexOf(c) !== -1 && s === SA || JA.indexOf(s) !== -1 && c === SA || s === Ye && [
      nt,
      Ut,
      Ft
    ].indexOf(c) !== -1 || [
      nt,
      Ut,
      Ft
    ].indexOf(s) !== -1 && c === We || JA.indexOf(s) !== -1 && jn.indexOf(c) !== -1 || jn.indexOf(s) !== -1 && JA.indexOf(c) !== -1 || [
      Ye,
      We
    ].indexOf(s) !== -1 && (c === SA || [
      Ve,
      Je
    ].indexOf(c) !== -1 && A[a + 1] === SA) || [
      Ve,
      Je
    ].indexOf(s) !== -1 && c === SA || s === SA && [
      SA,
      Ue,
      pe
    ].indexOf(c) !== -1) return G;
    if ([
      SA,
      Ue,
      pe,
      pt,
      Re
    ].indexOf(c) !== -1) for (var B = i; B >= 0; ) {
      var u = A[B];
      if (u === SA) return G;
      if ([
        Ue,
        pe
      ].indexOf(u) !== -1) B--;
      else break;
    }
    if ([
      Ye,
      We
    ].indexOf(c) !== -1) for (var B = [
      pt,
      Re
    ].indexOf(s) !== -1 ? o : i; B >= 0; ) {
      var u = A[B];
      if (u === SA) return G;
      if ([
        Ue,
        pe
      ].indexOf(u) !== -1) B--;
      else break;
    }
    if (rn === s && [
      rn,
      Rt,
      An,
      en
    ].indexOf(c) !== -1 || [
      Rt,
      An
    ].indexOf(s) !== -1 && [
      Rt,
      Vt
    ].indexOf(c) !== -1 || [
      Vt,
      en
    ].indexOf(s) !== -1 && c === Vt || zn.indexOf(s) !== -1 && [
      Zn,
      We
    ].indexOf(c) !== -1 || zn.indexOf(c) !== -1 && s === Ye || JA.indexOf(s) !== -1 && JA.indexOf(c) !== -1 || s === pe && JA.indexOf(c) !== -1 || JA.concat(SA).indexOf(s) !== -1 && c === Ve && Xl.indexOf(e[a]) === -1 || JA.concat(SA).indexOf(c) !== -1 && s === Re) return G;
    if (s === Er && c === Er) {
      for (var g = r[i], Q = 1; g > 0 && (g--, A[g] === Er); ) Q++;
      if (Q % 2 !== 0) return G;
    }
    return s === Ut && c === Ft ? G : vt;
  }, jl = function(e, A) {
    A || (A = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var r = Yl(e, A.lineBreak), t = r[0], n = r[1], i = r[2];
    (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        SA,
        ge,
        lo
      ].indexOf(a) !== -1 ? nt : a;
    }));
    var o = A.wordBreak === "keep-all" ? i.map(function(a, s) {
      return a && e[s] >= 19968 && e[s] <= 40959;
    }) : void 0;
    return [
      t,
      n,
      o
    ];
  }, zl = (function() {
    function e(A, r, t, n) {
      this.codePoints = A, this.required = r === co, this.start = t, this.end = n;
    }
    return e.prototype.slice = function() {
      return oA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  })(), ql = function(e, A) {
    var r = sr(e), t = jl(r, A), n = t[0], i = t[1], o = t[2], a = r.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = G; l < a && (c = Zl(r, i, n, ++l, o)) === G; ) ;
        if (c !== G || l === a) {
          var B = new zl(r, c, s, l);
          return s = l, {
            value: B,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, $l = 1, Ac = 2, ct = 4, $n = 8, Yt = 10, Ai = 47, qe = 92, ec = 9, tc = 32, mt = 34, _e = 61, rc = 35, nc = 36, ic = 37, Et = 39, yt = 40, Ne = 41, oc = 95, yA = 45, ac = 33, sc = 60, lc = 62, cc = 64, Bc = 91, uc = 93, gc = 61, fc = 123, Ht = 63, dc = 125, ei = 124, wc = 126, Qc = 128, ti = 65533, Hr = 42, de = 43, hc = 44, Cc = 58, pc = 59, it = 46, Uc = 0, Fc = 8, vc = 11, mc = 14, Ec = 31, yc = 127, RA = -1, uo = 48, go = 97, fo = 101, Hc = 102, bc = 117, Ic = 122, wo = 65, Qo = 69, ho = 70, Sc = 85, xc = 90, CA = function(e) {
    return e >= uo && e <= 57;
  }, Lc = function(e) {
    return e >= 55296 && e <= 57343;
  }, Fe = function(e) {
    return CA(e) || e >= wo && e <= ho || e >= go && e <= Hc;
  }, Kc = function(e) {
    return e >= go && e <= Ic;
  }, Tc = function(e) {
    return e >= wo && e <= xc;
  }, Dc = function(e) {
    return Kc(e) || Tc(e);
  }, Oc = function(e) {
    return e >= Qc;
  }, bt = function(e) {
    return e === Yt || e === ec || e === tc;
  }, Zt = function(e) {
    return Dc(e) || Oc(e) || e === oc;
  }, ri = function(e) {
    return Zt(e) || CA(e) || e === yA;
  }, Mc = function(e) {
    return e >= Uc && e <= Fc || e === vc || e >= mc && e <= Ec || e === yc;
  }, te = function(e, A) {
    return e !== qe ? false : A !== Yt;
  }, It = function(e, A, r) {
    return e === yA ? Zt(A) || te(A, r) : Zt(e) ? true : !!(e === qe && te(e, A));
  }, br = function(e, A, r) {
    return e === de || e === yA ? CA(A) ? true : A === it && CA(r) : CA(e === it ? A : e);
  }, kc = function(e) {
    var A = 0, r = 1;
    (e[A] === de || e[A] === yA) && (e[A] === yA && (r = -1), A++);
    for (var t = []; CA(e[A]); ) t.push(e[A++]);
    var n = t.length ? parseInt(oA.apply(void 0, t), 10) : 0;
    e[A] === it && A++;
    for (var i = []; CA(e[A]); ) i.push(e[A++]);
    var o = i.length, a = o ? parseInt(oA.apply(void 0, i), 10) : 0;
    (e[A] === Qo || e[A] === fo) && A++;
    var s = 1;
    (e[A] === de || e[A] === yA) && (e[A] === yA && (s = -1), A++);
    for (var l = []; CA(e[A]); ) l.push(e[A++]);
    var c = l.length ? parseInt(oA.apply(void 0, l), 10) : 0;
    return r * (n + a * Math.pow(10, -o)) * Math.pow(10, s * c);
  }, Gc = {
    type: 2
  }, Rc = {
    type: 3
  }, Vc = {
    type: 4
  }, _c = {
    type: 13
  }, Nc = {
    type: 8
  }, Pc = {
    type: 21
  }, Xc = {
    type: 9
  }, Jc = {
    type: 10
  }, Wc = {
    type: 11
  }, Yc = {
    type: 12
  }, Zc = {
    type: 14
  }, St = {
    type: 23
  }, jc = {
    type: 1
  }, zc = {
    type: 25
  }, qc = {
    type: 24
  }, $c = {
    type: 26
  }, AB = {
    type: 27
  }, eB = {
    type: 28
  }, tB = {
    type: 29
  }, rB = {
    type: 31
  }, an = {
    type: 32
  }, Co = (function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(sr(A));
    }, e.prototype.read = function() {
      for (var A = [], r = this.consumeToken(); r !== an; ) A.push(r), r = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case mt:
          return this.consumeStringToken(mt);
        case rc:
          var r = this.peekCodePoint(0), t = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (ri(r) || te(t, n)) {
            var i = It(r, t, n) ? Ac : $l, o = this.consumeName();
            return {
              type: 5,
              value: o,
              flags: i
            };
          }
          break;
        case nc:
          if (this.peekCodePoint(0) === _e) return this.consumeCodePoint(), _c;
          break;
        case Et:
          return this.consumeStringToken(Et);
        case yt:
          return Gc;
        case Ne:
          return Rc;
        case Hr:
          if (this.peekCodePoint(0) === _e) return this.consumeCodePoint(), Zc;
          break;
        case de:
          if (br(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case hc:
          return Vc;
        case yA:
          var a = A, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (br(a, s, l)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (It(a, s, l)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (s === yA && l === lc) return this.consumeCodePoint(), this.consumeCodePoint(), qc;
          break;
        case it:
          if (br(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Ai:
          if (this.peekCodePoint(0) === Hr) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Hr && (c = this.consumeCodePoint(), c === Ai)) return this.consumeToken();
            if (c === RA) return this.consumeToken();
          }
          break;
        case Cc:
          return $c;
        case pc:
          return AB;
        case sc:
          if (this.peekCodePoint(0) === ac && this.peekCodePoint(1) === yA && this.peekCodePoint(2) === yA) return this.consumeCodePoint(), this.consumeCodePoint(), zc;
          break;
        case cc:
          var B = this.peekCodePoint(0), u = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (It(B, u, g)) {
            var o = this.consumeName();
            return {
              type: 7,
              value: o
            };
          }
          break;
        case Bc:
          return eB;
        case qe:
          if (te(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case uc:
          return tB;
        case gc:
          if (this.peekCodePoint(0) === _e) return this.consumeCodePoint(), Nc;
          break;
        case fc:
          return Wc;
        case dc:
          return Yc;
        case bc:
        case Sc:
          var Q = this.peekCodePoint(0), d = this.peekCodePoint(1);
          return Q === de && (Fe(d) || d === Ht) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case ei:
          if (this.peekCodePoint(0) === _e) return this.consumeCodePoint(), Xc;
          if (this.peekCodePoint(0) === ei) return this.consumeCodePoint(), Pc;
          break;
        case wc:
          if (this.peekCodePoint(0) === _e) return this.consumeCodePoint(), Jc;
          break;
        case RA:
          return an;
      }
      return bt(A) ? (this.consumeWhiteSpace(), rB) : CA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Zt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
        type: 6,
        value: oA(A)
      };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], r = this.consumeCodePoint(); Fe(r) && A.length < 6; ) A.push(r), r = this.consumeCodePoint();
      for (var t = false; r === Ht && A.length < 6; ) A.push(r), r = this.consumeCodePoint(), t = true;
      if (t) {
        var n = parseInt(oA.apply(void 0, A.map(function(s) {
          return s === Ht ? uo : s;
        })), 16), i = parseInt(oA.apply(void 0, A.map(function(s) {
          return s === Ht ? ho : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: i
        };
      }
      var o = parseInt(oA.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === yA && Fe(this.peekCodePoint(1))) {
        this.consumeCodePoint(), r = this.consumeCodePoint();
        for (var a = []; Fe(r) && a.length < 6; ) a.push(r), r = this.consumeCodePoint();
        var i = parseInt(oA.apply(void 0, a), 16);
        return {
          type: 30,
          start: o,
          end: i
        };
      } else return {
        type: 30,
        start: o,
        end: o
      };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === yt ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === yt ? (this.consumeCodePoint(), {
        type: 19,
        value: A
      }) : {
        type: 20,
        value: A
      };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === RA) return {
        type: 22,
        value: ""
      };
      var r = this.peekCodePoint(0);
      if (r === Et || r === mt) {
        var t = this.consumeStringToken(this.consumeCodePoint());
        return t.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === RA || this.peekCodePoint(0) === Ne) ? (this.consumeCodePoint(), {
          type: 22,
          value: t.value
        }) : (this.consumeBadUrlRemnants(), St);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === RA || n === Ne) return {
          type: 22,
          value: oA.apply(void 0, A)
        };
        if (bt(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === RA || this.peekCodePoint(0) === Ne ? (this.consumeCodePoint(), {
          type: 22,
          value: oA.apply(void 0, A)
        }) : (this.consumeBadUrlRemnants(), St);
        if (n === mt || n === Et || n === yt || Mc(n)) return this.consumeBadUrlRemnants(), St;
        if (n === qe) if (te(n, this.peekCodePoint(0))) A.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), St;
        else A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; bt(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Ne || A === RA) return;
        te(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var r = 5e4, t = ""; A > 0; ) {
        var n = Math.min(r, A);
        t += oA.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), t;
    }, e.prototype.consumeStringToken = function(A) {
      var r = "", t = 0;
      do {
        var n = this._value[t];
        if (n === RA || n === void 0 || n === A) return r += this.consumeStringSlice(t), {
          type: 0,
          value: r
        };
        if (n === Yt) return this._value.splice(0, t), jc;
        if (n === qe) {
          var i = this._value[t + 1];
          i !== RA && i !== void 0 && (i === Yt ? (r += this.consumeStringSlice(t), t = -1, this._value.shift()) : te(n, i) && (r += this.consumeStringSlice(t), r += oA(this.consumeEscapedCodePoint()), t = -1));
        }
        t++;
      } while (true);
    }, e.prototype.consumeNumber = function() {
      var A = [], r = ct, t = this.peekCodePoint(0);
      for ((t === de || t === yA) && A.push(this.consumeCodePoint()); CA(this.peekCodePoint(0)); ) A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (t === it && CA(n)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), r = $n; CA(this.peekCodePoint(0)); ) A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((t === Qo || t === fo) && ((n === de || n === yA) && CA(i) || CA(n))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), r = $n; CA(this.peekCodePoint(0)); ) A.push(this.consumeCodePoint());
      return [
        kc(A),
        r
      ];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), r = A[0], t = A[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), o = this.peekCodePoint(2);
      if (It(n, i, o)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: r,
          flags: t,
          unit: a
        };
      }
      return n === ic ? (this.consumeCodePoint(), {
        type: 16,
        number: r,
        flags: t
      }) : {
        type: 17,
        number: r,
        flags: t
      };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (Fe(A)) {
        for (var r = oA(A); Fe(this.peekCodePoint(0)) && r.length < 6; ) r += oA(this.consumeCodePoint());
        bt(this.peekCodePoint(0)) && this.consumeCodePoint();
        var t = parseInt(r, 16);
        return t === 0 || Lc(t) || t > 1114111 ? ti : t;
      }
      return A === RA ? ti : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var r = this.consumeCodePoint();
        if (ri(r)) A += oA(r);
        else if (te(r, this.peekCodePoint(0))) A += oA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(r), A;
      }
    }, e;
  })(), po = (function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var r = new Co();
      return r.write(A), new e(r.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; ) A = this.consumeToken();
      if (A.type === 32) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var r = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32) return r;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var r = this.consumeComponentValue();
        if (r.type === 32) return A;
        A.push(r), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var r = {
        type: A,
        values: []
      }, t = this.consumeToken(); ; ) {
        if (t.type === 32 || iB(t, A)) return r;
        this.reconsumeToken(t), r.values.push(this.consumeComponentValue()), t = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var r = {
        name: A.value,
        values: [],
        type: 18
      }; ; ) {
        var t = this.consumeToken();
        if (t.type === 32 || t.type === 3) return r;
        this.reconsumeToken(t), r.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? an : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  })(), Bt = function(e) {
    return e.type === 15;
  }, Oe = function(e) {
    return e.type === 17;
  }, Z = function(e) {
    return e.type === 20;
  }, nB = function(e) {
    return e.type === 0;
  }, sn = function(e, A) {
    return Z(e) && e.value === A;
  }, Uo = function(e) {
    return e.type !== 31;
  }, De = function(e) {
    return e.type !== 31 && e.type !== 4;
  }, PA = function(e) {
    var A = [], r = [];
    return e.forEach(function(t) {
      if (t.type === 4) {
        if (r.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        A.push(r), r = [];
        return;
      }
      t.type !== 31 && r.push(t);
    }), r.length && A.push(r), A;
  }, iB = function(e, A) {
    return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? true : A === 2 && e.type === 3;
  }, se = function(e) {
    return e.type === 17 || e.type === 15;
  }, sA = function(e) {
    return e.type === 16 || se(e);
  }, Fo = function(e) {
    return e.length > 1 ? [
      e[0],
      e[1]
    ] : [
      e[0]
    ];
  }, QA = {
    type: 17,
    number: 0,
    flags: ct
  }, vn = {
    type: 16,
    number: 50,
    flags: ct
  }, ne = {
    type: 16,
    number: 100,
    flags: ct
  }, Ze = function(e, A, r) {
    var t = e[0], n = e[1];
    return [
      AA(t, A),
      AA(typeof n < "u" ? n : t, r)
    ];
  }, AA = function(e, A) {
    if (e.type === 16) return e.number / 100 * A;
    if (Bt(e)) switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
    return e.number;
  }, vo = "deg", mo = "grad", Eo = "rad", yo = "turn", lr = {
    name: "angle",
    parse: function(e, A) {
      if (A.type === 15) switch (A.unit) {
        case vo:
          return Math.PI * A.number / 180;
        case mo:
          return Math.PI / 200 * A.number;
        case Eo:
          return A.number;
        case yo:
          return Math.PI * 2 * A.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Ho = function(e) {
    return e.type === 15 && (e.unit === vo || e.unit === mo || e.unit === Eo || e.unit === yo);
  }, bo = function(e) {
    var A = e.filter(Z).map(function(r) {
      return r.value;
    }).join(" ");
    switch (A) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          QA,
          QA
        ];
      case "to top":
      case "bottom":
        return KA(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          QA,
          ne
        ];
      case "to right":
      case "left":
        return KA(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          ne,
          ne
        ];
      case "to bottom":
      case "top":
        return KA(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          ne,
          QA
        ];
      case "to left":
      case "right":
        return KA(270);
    }
    return 0;
  }, KA = function(e) {
    return Math.PI * e / 180;
  }, oe = {
    name: "color",
    parse: function(e, A) {
      if (A.type === 18) {
        var r = oB[A.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
        return r(e, A.values);
      }
      if (A.type === 5) {
        if (A.value.length === 3) {
          var t = A.value.substring(0, 1), n = A.value.substring(1, 2), i = A.value.substring(2, 3);
          return ie(parseInt(t + t, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1);
        }
        if (A.value.length === 4) {
          var t = A.value.substring(0, 1), n = A.value.substring(1, 2), i = A.value.substring(2, 3), o = A.value.substring(3, 4);
          return ie(parseInt(t + t, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(o + o, 16) / 255);
        }
        if (A.value.length === 6) {
          var t = A.value.substring(0, 2), n = A.value.substring(2, 4), i = A.value.substring(4, 6);
          return ie(parseInt(t, 16), parseInt(n, 16), parseInt(i, 16), 1);
        }
        if (A.value.length === 8) {
          var t = A.value.substring(0, 2), n = A.value.substring(2, 4), i = A.value.substring(4, 6), o = A.value.substring(6, 8);
          return ie(parseInt(t, 16), parseInt(n, 16), parseInt(i, 16), parseInt(o, 16) / 255);
        }
      }
      if (A.type === 20) {
        var a = ZA[A.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return ZA.TRANSPARENT;
    }
  }, ae = function(e) {
    return (255 & e) === 0;
  }, BA = function(e) {
    var A = 255 & e, r = 255 & e >> 8, t = 255 & e >> 16, n = 255 & e >> 24;
    return A < 255 ? "rgba(" + n + "," + t + "," + r + "," + A / 255 + ")" : "rgb(" + n + "," + t + "," + r + ")";
  }, ie = function(e, A, r, t) {
    return (e << 24 | A << 16 | r << 8 | Math.round(t * 255) << 0) >>> 0;
  }, ni = function(e, A) {
    if (e.type === 17) return e.number;
    if (e.type === 16) {
      var r = A === 3 ? 1 : 255;
      return A === 3 ? e.number / 100 * r : Math.round(e.number / 100 * r);
    }
    return 0;
  }, ii = function(e, A) {
    var r = A.filter(De);
    if (r.length === 3) {
      var t = r.map(ni), n = t[0], i = t[1], o = t[2];
      return ie(n, i, o, 1);
    }
    if (r.length === 4) {
      var a = r.map(ni), n = a[0], i = a[1], o = a[2], s = a[3];
      return ie(n, i, o, s);
    }
    return 0;
  };
  function Ir(e, A, r) {
    return r < 0 && (r += 1), r >= 1 && (r -= 1), r < 1 / 6 ? (A - e) * r * 6 + e : r < 1 / 2 ? A : r < 2 / 3 ? (A - e) * 6 * (2 / 3 - r) + e : e;
  }
  var oi = function(e, A) {
    var r = A.filter(De), t = r[0], n = r[1], i = r[2], o = r[3], a = (t.type === 17 ? KA(t.number) : lr.parse(e, t)) / (Math.PI * 2), s = sA(n) ? n.number / 100 : 0, l = sA(i) ? i.number / 100 : 0, c = typeof o < "u" && sA(o) ? AA(o, 1) : 1;
    if (s === 0) return ie(l * 255, l * 255, l * 255, 1);
    var B = l <= 0.5 ? l * (s + 1) : l + s - l * s, u = l * 2 - B, g = Ir(u, B, a + 1 / 3), Q = Ir(u, B, a), d = Ir(u, B, a - 1 / 3);
    return ie(g * 255, Q * 255, d * 255, c);
  }, oB = {
    hsl: oi,
    hsla: oi,
    rgb: ii,
    rgba: ii
  }, $e = function(e, A) {
    return oe.parse(e, po.create(A).parseComponentValue());
  }, ZA = {
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
  }, aB = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return A.map(function(r) {
        if (Z(r)) switch (r.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, sB = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, cr = function(e, A) {
    var r = oe.parse(e, A[0]), t = A[1];
    return t && sA(t) ? {
      color: r,
      stop: t
    } : {
      color: r,
      stop: null
    };
  }, ai = function(e, A) {
    var r = e[0], t = e[e.length - 1];
    r.stop === null && (r.stop = QA), t.stop === null && (t.stop = ne);
    for (var n = [], i = 0, o = 0; o < e.length; o++) {
      var a = e[o].stop;
      if (a !== null) {
        var s = AA(a, A);
        s > i ? n.push(s) : n.push(i), i = s;
      } else n.push(null);
    }
    for (var l = null, o = 0; o < n.length; o++) {
      var c = n[o];
      if (c === null) l === null && (l = o);
      else if (l !== null) {
        for (var B = o - l, u = n[l - 1], g = (c - u) / (B + 1), Q = 1; Q <= B; Q++) n[l + Q - 1] = g * Q;
        l = null;
      }
    }
    return e.map(function(d, p) {
      var h = d.color;
      return {
        color: h,
        stop: Math.max(Math.min(1, n[p] / A), 0)
      };
    });
  }, lB = function(e, A, r) {
    var t = A / 2, n = r / 2, i = AA(e[0], A) - t, o = n - AA(e[1], r);
    return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
  }, cB = function(e, A, r) {
    var t = typeof e == "number" ? e : lB(e, A, r), n = Math.abs(A * Math.sin(t)) + Math.abs(r * Math.cos(t)), i = A / 2, o = r / 2, a = n / 2, s = Math.sin(t - Math.PI / 2) * a, l = Math.cos(t - Math.PI / 2) * a;
    return [
      n,
      i - l,
      i + l,
      o - s,
      o + s
    ];
  }, MA = function(e, A) {
    return Math.sqrt(e * e + A * A);
  }, si = function(e, A, r, t, n) {
    var i = [
      [
        0,
        0
      ],
      [
        0,
        A
      ],
      [
        e,
        0
      ],
      [
        e,
        A
      ]
    ];
    return i.reduce(function(o, a) {
      var s = a[0], l = a[1], c = MA(r - s, t - l);
      return (n ? c < o.optimumDistance : c > o.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : o;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, BB = function(e, A, r, t, n) {
    var i = 0, o = 0;
    switch (e.size) {
      case 0:
        e.shape === 0 ? i = o = Math.min(Math.abs(A), Math.abs(A - t), Math.abs(r), Math.abs(r - n)) : e.shape === 1 && (i = Math.min(Math.abs(A), Math.abs(A - t)), o = Math.min(Math.abs(r), Math.abs(r - n)));
        break;
      case 2:
        if (e.shape === 0) i = o = Math.min(MA(A, r), MA(A, r - n), MA(A - t, r), MA(A - t, r - n));
        else if (e.shape === 1) {
          var a = Math.min(Math.abs(r), Math.abs(r - n)) / Math.min(Math.abs(A), Math.abs(A - t)), s = si(t, n, A, r, true), l = s[0], c = s[1];
          i = MA(l - A, (c - r) / a), o = a * i;
        }
        break;
      case 1:
        e.shape === 0 ? i = o = Math.max(Math.abs(A), Math.abs(A - t), Math.abs(r), Math.abs(r - n)) : e.shape === 1 && (i = Math.max(Math.abs(A), Math.abs(A - t)), o = Math.max(Math.abs(r), Math.abs(r - n)));
        break;
      case 3:
        if (e.shape === 0) i = o = Math.max(MA(A, r), MA(A, r - n), MA(A - t, r), MA(A - t, r - n));
        else if (e.shape === 1) {
          var a = Math.max(Math.abs(r), Math.abs(r - n)) / Math.max(Math.abs(A), Math.abs(A - t)), B = si(t, n, A, r, false), l = B[0], c = B[1];
          i = MA(l - A, (c - r) / a), o = a * i;
        }
        break;
    }
    return Array.isArray(e.size) && (i = AA(e.size[0], t), o = e.size.length === 2 ? AA(e.size[1], n) : i), [
      i,
      o
    ];
  }, uB = function(e, A) {
    var r = KA(180), t = [];
    return PA(A).forEach(function(n, i) {
      if (i === 0) {
        var o = n[0];
        if (o.type === 20 && o.value === "to") {
          r = bo(n);
          return;
        } else if (Ho(o)) {
          r = lr.parse(e, o);
          return;
        }
      }
      var a = cr(e, n);
      t.push(a);
    }), {
      angle: r,
      stops: t,
      type: 1
    };
  }, xt = function(e, A) {
    var r = KA(180), t = [];
    return PA(A).forEach(function(n, i) {
      if (i === 0) {
        var o = n[0];
        if (o.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(o.value) !== -1) {
          r = bo(n);
          return;
        } else if (Ho(o)) {
          r = (lr.parse(e, o) + KA(270)) % KA(360);
          return;
        }
      }
      var a = cr(e, n);
      t.push(a);
    }), {
      angle: r,
      stops: t,
      type: 1
    };
  }, gB = function(e, A) {
    var r = KA(180), t = [], n = 1, i = 0, o = 3, a = [];
    return PA(A).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (Z(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (Z(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var B = oe.parse(e, c.values[0]);
          t.push({
            stop: QA,
            color: B
          });
        } else if (c.name === "to") {
          var B = oe.parse(e, c.values[0]);
          t.push({
            stop: ne,
            color: B
          });
        } else if (c.name === "color-stop") {
          var u = c.values.filter(De);
          if (u.length === 2) {
            var B = oe.parse(e, u[1]), g = u[0];
            Oe(g) && t.push({
              stop: {
                type: 16,
                number: g.number * 100,
                flags: g.flags
              },
              color: B
            });
          }
        }
      }
    }), n === 1 ? {
      angle: (r + KA(180)) % KA(360),
      stops: t,
      type: n
    } : {
      size: o,
      shape: i,
      stops: t,
      position: a,
      type: n
    };
  }, Io = "closest-side", So = "farthest-side", xo = "closest-corner", Lo = "farthest-corner", Ko = "circle", To = "ellipse", Do = "cover", Oo = "contain", fB = function(e, A) {
    var r = 0, t = 3, n = [], i = [];
    return PA(A).forEach(function(o, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = o.reduce(function(B, u) {
          if (l) if (Z(u)) switch (u.value) {
            case "center":
              return i.push(vn), B;
            case "top":
            case "left":
              return i.push(QA), B;
            case "right":
            case "bottom":
              return i.push(ne), B;
          }
          else (sA(u) || se(u)) && i.push(u);
          else if (Z(u)) switch (u.value) {
            case Ko:
              return r = 0, false;
            case To:
              return r = 1, false;
            case "at":
              return l = true, false;
            case Io:
              return t = 0, false;
            case Do:
            case So:
              return t = 1, false;
            case Oo:
            case xo:
              return t = 2, false;
            case Lo:
              return t = 3, false;
          }
          else if (se(u) || sA(u)) return Array.isArray(t) || (t = []), t.push(u), false;
          return B;
        }, s);
      }
      if (s) {
        var c = cr(e, o);
        n.push(c);
      }
    }), {
      size: t,
      shape: r,
      stops: n,
      position: i,
      type: 2
    };
  }, Lt = function(e, A) {
    var r = 0, t = 3, n = [], i = [];
    return PA(A).forEach(function(o, a) {
      var s = true;
      if (a === 0 ? s = o.reduce(function(c, B) {
        if (Z(B)) switch (B.value) {
          case "center":
            return i.push(vn), false;
          case "top":
          case "left":
            return i.push(QA), false;
          case "right":
          case "bottom":
            return i.push(ne), false;
        }
        else if (sA(B) || se(B)) return i.push(B), false;
        return c;
      }, s) : a === 1 && (s = o.reduce(function(c, B) {
        if (Z(B)) switch (B.value) {
          case Ko:
            return r = 0, false;
          case To:
            return r = 1, false;
          case Oo:
          case Io:
            return t = 0, false;
          case So:
            return t = 1, false;
          case xo:
            return t = 2, false;
          case Do:
          case Lo:
            return t = 3, false;
        }
        else if (se(B) || sA(B)) return Array.isArray(t) || (t = []), t.push(B), false;
        return c;
      }, s)), s) {
        var l = cr(e, o);
        n.push(l);
      }
    }), {
      size: t,
      shape: r,
      stops: n,
      position: i,
      type: 2
    };
  }, dB = function(e) {
    return e.type === 1;
  }, wB = function(e) {
    return e.type === 2;
  }, mn = {
    name: "image",
    parse: function(e, A) {
      if (A.type === 22) {
        var r = {
          url: A.value,
          type: 0
        };
        return e.cache.addImage(A.value), r;
      }
      if (A.type === 18) {
        var t = Mo[A.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
        return t(e, A.values);
      }
      throw new Error("Unsupported image type " + A.type);
    }
  };
  function QB(e) {
    return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Mo[e.name]);
  }
  var Mo = {
    "linear-gradient": uB,
    "-moz-linear-gradient": xt,
    "-ms-linear-gradient": xt,
    "-o-linear-gradient": xt,
    "-webkit-linear-gradient": xt,
    "radial-gradient": fB,
    "-moz-radial-gradient": Lt,
    "-ms-radial-gradient": Lt,
    "-o-radial-gradient": Lt,
    "-webkit-radial-gradient": Lt,
    "-webkit-gradient": gB
  }, hB = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(e, A) {
      if (A.length === 0) return [];
      var r = A[0];
      return r.type === 20 && r.value === "none" ? [] : A.filter(function(t) {
        return De(t) && QB(t);
      }).map(function(t) {
        return mn.parse(e, t);
      });
    }
  }, CB = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return A.map(function(r) {
        if (Z(r)) switch (r.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, pB = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(e, A) {
      return PA(A).map(function(r) {
        return r.filter(sA);
      }).map(Fo);
    }
  }, UB = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return PA(A).map(function(r) {
        return r.filter(Z).map(function(t) {
          return t.value;
        }).join(" ");
      }).map(FB);
    }
  }, FB = function(e) {
    switch (e) {
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
  }, Le;
  (function(e) {
    e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
  })(Le || (Le = {}));
  var vB = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return PA(A).map(function(r) {
        return r.filter(mB);
      });
    }
  }, mB = function(e) {
    return Z(e) || sA(e);
  }, Br = function(e) {
    return {
      name: "border-" + e + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, EB = Br("top"), yB = Br("right"), HB = Br("bottom"), bB = Br("left"), ur = function(e) {
    return {
      name: "border-radius-" + e,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(A, r) {
        return Fo(r.filter(sA));
      }
    };
  }, IB = ur("top-left"), SB = ur("top-right"), xB = ur("bottom-right"), LB = ur("bottom-left"), gr = function(e) {
    return {
      name: "border-" + e + "-style",
      initialValue: "solid",
      prefix: false,
      type: 2,
      parse: function(A, r) {
        switch (r) {
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
  }, KB = gr("top"), TB = gr("right"), DB = gr("bottom"), OB = gr("left"), fr = function(e) {
    return {
      name: "border-" + e + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(A, r) {
        return Bt(r) ? r.number : 0;
      }
    };
  }, MB = fr("top"), kB = fr("right"), GB = fr("bottom"), RB = fr("left"), VB = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, _B = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      return A === "rtl" ? 1 : 0;
    }
  }, NB = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return A.filter(Z).reduce(function(r, t) {
        return r | PB(t.value);
      }, 0);
    }
  }, PB = function(e) {
    switch (e) {
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
  }, XB = {
    name: "float",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
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
  }, JB = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(e, A) {
      return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
    }
  }, jt;
  (function(e) {
    e.NORMAL = "normal", e.STRICT = "strict";
  })(jt || (jt = {}));
  var WB = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      return A === "strict" ? jt.STRICT : jt.NORMAL;
    }
  }, YB = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, li = function(e, A) {
    return Z(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : sA(e) ? AA(e, A) : A;
  }, ZB = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(e, A) {
      return A.type === 20 && A.value === "none" ? null : mn.parse(e, A);
    }
  }, jB = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      return A === "inside" ? 0 : 1;
    }
  }, ln = {
    name: "list-style-type",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
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
  }, dr = function(e) {
    return {
      name: "margin-" + e,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, zB = dr("top"), qB = dr("right"), $B = dr("bottom"), Au = dr("left"), eu = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return A.filter(Z).map(function(r) {
        switch (r.value) {
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
  }, tu = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      return A === "break-word" ? "break-word" : "normal";
    }
  }, wr = function(e) {
    return {
      name: "padding-" + e,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, ru = wr("top"), nu = wr("right"), iu = wr("bottom"), ou = wr("left"), au = {
    name: "text-align",
    initialValue: "left",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        default:
          return 0;
      }
    }
  }, su = {
    name: "position",
    initialValue: "static",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
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
  }, lu = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(e, A) {
      return A.length === 1 && sn(A[0], "none") ? [] : PA(A).map(function(r) {
        for (var t = {
          color: ZA.TRANSPARENT,
          offsetX: QA,
          offsetY: QA,
          blur: QA
        }, n = 0, i = 0; i < r.length; i++) {
          var o = r[i];
          se(o) ? (n === 0 ? t.offsetX = o : n === 1 ? t.offsetY = o : t.blur = o, n++) : t.color = oe.parse(e, o);
        }
        return t;
      });
    }
  }, cu = {
    name: "text-transform",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    }
  }, Bu = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(e, A) {
      if (A.type === 20 && A.value === "none") return null;
      if (A.type === 18) {
        var r = fu[A.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
        return r(A.values);
      }
      return null;
    }
  }, uu = function(e) {
    var A = e.filter(function(r) {
      return r.type === 17;
    }).map(function(r) {
      return r.number;
    });
    return A.length === 6 ? A : null;
  }, gu = function(e) {
    var A = e.filter(function(s) {
      return s.type === 17;
    }).map(function(s) {
      return s.number;
    }), r = A[0], t = A[1];
    A[2], A[3];
    var n = A[4], i = A[5];
    A[6], A[7], A[8], A[9], A[10], A[11];
    var o = A[12], a = A[13];
    return A[14], A[15], A.length === 16 ? [
      r,
      t,
      n,
      i,
      o,
      a
    ] : null;
  }, fu = {
    matrix: uu,
    matrix3d: gu
  }, ci = {
    type: 16,
    number: 50,
    flags: ct
  }, du = [
    ci,
    ci
  ], wu = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(e, A) {
      var r = A.filter(sA);
      return r.length !== 2 ? du : [
        r[0],
        r[1]
      ];
    }
  }, Qu = {
    name: "visible",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        default:
          return 0;
      }
    }
  }, At;
  (function(e) {
    e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
  })(At || (At = {}));
  var hu = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
        case "break-all":
          return At.BREAK_ALL;
        case "keep-all":
          return At.KEEP_ALL;
        default:
          return At.NORMAL;
      }
    }
  }, Cu = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(e, A) {
      if (A.type === 20) return {
        auto: true,
        order: 0
      };
      if (Oe(A)) return {
        auto: false,
        order: A.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, ko = {
    name: "time",
    parse: function(e, A) {
      if (A.type === 15) switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
      throw new Error("Unsupported time type");
    }
  }, pu = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(e, A) {
      return Oe(A) ? A.number : 1;
    }
  }, Uu = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Fu = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return A.filter(Z).map(function(r) {
        switch (r.value) {
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
      }).filter(function(r) {
        return r !== 0;
      });
    }
  }, vu = {
    name: "font-family",
    initialValue: "",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      var r = [], t = [];
      return A.forEach(function(n) {
        switch (n.type) {
          case 20:
          case 0:
            r.push(n.value);
            break;
          case 17:
            r.push(n.number.toString());
            break;
          case 4:
            t.push(r.join(" ")), r.length = 0;
            break;
        }
      }), r.length && t.push(r.join(" ")), t.map(function(n) {
        return n.indexOf(" ") === -1 ? n : "'" + n + "'";
      });
    }
  }, mu = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, Eu = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(e, A) {
      return Oe(A) ? A.number : Z(A) && A.value === "bold" ? 700 : 400;
    }
  }, yu = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(e, A) {
      return A.filter(Z).map(function(r) {
        return r.value;
      });
    }
  }, Hu = {
    name: "font-style",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(e, A) {
      switch (A) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        default:
          return "normal";
      }
    }
  }, cA = function(e, A) {
    return (e & A) !== 0;
  }, bu = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(e, A) {
      if (A.length === 0) return [];
      var r = A[0];
      return r.type === 20 && r.value === "none" ? [] : A;
    }
  }, Iu = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(e, A) {
      if (A.length === 0) return null;
      var r = A[0];
      if (r.type === 20 && r.value === "none") return null;
      for (var t = [], n = A.filter(Uo), i = 0; i < n.length; i++) {
        var o = n[i], a = n[i + 1];
        if (o.type === 20) {
          var s = a && Oe(a) ? a.number : 1;
          t.push({
            counter: o.value,
            increment: s
          });
        }
      }
      return t;
    }
  }, Su = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(e, A) {
      if (A.length === 0) return [];
      for (var r = [], t = A.filter(Uo), n = 0; n < t.length; n++) {
        var i = t[n], o = t[n + 1];
        if (Z(i) && i.value !== "none") {
          var a = o && Oe(o) ? o.number : 0;
          r.push({
            counter: i.value,
            reset: a
          });
        }
      }
      return r;
    }
  }, xu = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      return A.filter(Bt).map(function(r) {
        return ko.parse(e, r);
      });
    }
  }, Lu = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(e, A) {
      if (A.length === 0) return null;
      var r = A[0];
      if (r.type === 20 && r.value === "none") return null;
      var t = [], n = A.filter(nB);
      if (n.length % 2 !== 0) return null;
      for (var i = 0; i < n.length; i += 2) {
        var o = n[i].value, a = n[i + 1].value;
        t.push({
          open: o,
          close: a
        });
      }
      return t;
    }
  }, Bi = function(e, A, r) {
    if (!e) return "";
    var t = e[Math.min(A, e.length - 1)];
    return t ? r ? t.open : t.close : "";
  }, Ku = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(e, A) {
      return A.length === 1 && sn(A[0], "none") ? [] : PA(A).map(function(r) {
        for (var t = {
          color: 255,
          offsetX: QA,
          offsetY: QA,
          blur: QA,
          spread: QA,
          inset: false
        }, n = 0, i = 0; i < r.length; i++) {
          var o = r[i];
          sn(o, "inset") ? t.inset = true : se(o) ? (n === 0 ? t.offsetX = o : n === 1 ? t.offsetY = o : n === 2 ? t.blur = o : t.spread = o, n++) : t.color = oe.parse(e, o);
        }
        return t;
      });
    }
  }, Tu = {
    name: "paint-order",
    initialValue: "normal",
    prefix: false,
    type: 1,
    parse: function(e, A) {
      var r = [
        0,
        1,
        2
      ], t = [];
      return A.filter(Z).forEach(function(n) {
        switch (n.value) {
          case "stroke":
            t.push(1);
            break;
          case "fill":
            t.push(0);
            break;
          case "markers":
            t.push(2);
            break;
        }
      }), r.forEach(function(n) {
        t.indexOf(n) === -1 && t.push(n);
      }), t;
    }
  }, Du = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, Ou = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(e, A) {
      return Bt(A) ? A.number : 0;
    }
  }, Mu = (function() {
    function e(A, r) {
      var t, n;
      this.animationDuration = S(A, xu, r.animationDuration), this.backgroundClip = S(A, aB, r.backgroundClip), this.backgroundColor = S(A, sB, r.backgroundColor), this.backgroundImage = S(A, hB, r.backgroundImage), this.backgroundOrigin = S(A, CB, r.backgroundOrigin), this.backgroundPosition = S(A, pB, r.backgroundPosition), this.backgroundRepeat = S(A, UB, r.backgroundRepeat), this.backgroundSize = S(A, vB, r.backgroundSize), this.borderTopColor = S(A, EB, r.borderTopColor), this.borderRightColor = S(A, yB, r.borderRightColor), this.borderBottomColor = S(A, HB, r.borderBottomColor), this.borderLeftColor = S(A, bB, r.borderLeftColor), this.borderTopLeftRadius = S(A, IB, r.borderTopLeftRadius), this.borderTopRightRadius = S(A, SB, r.borderTopRightRadius), this.borderBottomRightRadius = S(A, xB, r.borderBottomRightRadius), this.borderBottomLeftRadius = S(A, LB, r.borderBottomLeftRadius), this.borderTopStyle = S(A, KB, r.borderTopStyle), this.borderRightStyle = S(A, TB, r.borderRightStyle), this.borderBottomStyle = S(A, DB, r.borderBottomStyle), this.borderLeftStyle = S(A, OB, r.borderLeftStyle), this.borderTopWidth = S(A, MB, r.borderTopWidth), this.borderRightWidth = S(A, kB, r.borderRightWidth), this.borderBottomWidth = S(A, GB, r.borderBottomWidth), this.borderLeftWidth = S(A, RB, r.borderLeftWidth), this.boxShadow = S(A, Ku, r.boxShadow), this.color = S(A, VB, r.color), this.direction = S(A, _B, r.direction), this.display = S(A, NB, r.display), this.float = S(A, XB, r.cssFloat), this.fontFamily = S(A, vu, r.fontFamily), this.fontSize = S(A, mu, r.fontSize), this.fontStyle = S(A, Hu, r.fontStyle), this.fontVariant = S(A, yu, r.fontVariant), this.fontWeight = S(A, Eu, r.fontWeight), this.letterSpacing = S(A, JB, r.letterSpacing), this.lineBreak = S(A, WB, r.lineBreak), this.lineHeight = S(A, YB, r.lineHeight), this.listStyleImage = S(A, ZB, r.listStyleImage), this.listStylePosition = S(A, jB, r.listStylePosition), this.listStyleType = S(A, ln, r.listStyleType), this.marginTop = S(A, zB, r.marginTop), this.marginRight = S(A, qB, r.marginRight), this.marginBottom = S(A, $B, r.marginBottom), this.marginLeft = S(A, Au, r.marginLeft), this.opacity = S(A, pu, r.opacity);
      var i = S(A, eu, r.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = S(A, tu, r.overflowWrap), this.paddingTop = S(A, ru, r.paddingTop), this.paddingRight = S(A, nu, r.paddingRight), this.paddingBottom = S(A, iu, r.paddingBottom), this.paddingLeft = S(A, ou, r.paddingLeft), this.paintOrder = S(A, Tu, r.paintOrder), this.position = S(A, su, r.position), this.textAlign = S(A, au, r.textAlign), this.textDecorationColor = S(A, Uu, (t = r.textDecorationColor) !== null && t !== void 0 ? t : r.color), this.textDecorationLine = S(A, Fu, (n = r.textDecorationLine) !== null && n !== void 0 ? n : r.textDecoration), this.textShadow = S(A, lu, r.textShadow), this.textTransform = S(A, cu, r.textTransform), this.transform = S(A, Bu, r.transform), this.transformOrigin = S(A, wu, r.transformOrigin), this.visibility = S(A, Qu, r.visibility), this.webkitTextStrokeColor = S(A, Du, r.webkitTextStrokeColor), this.webkitTextStrokeWidth = S(A, Ou, r.webkitTextStrokeWidth), this.wordBreak = S(A, hu, r.wordBreak), this.zIndex = S(A, Cu, r.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return ae(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return cA(this.display, 4) || cA(this.display, 33554432) || cA(this.display, 268435456) || cA(this.display, 536870912) || cA(this.display, 67108864) || cA(this.display, 134217728);
    }, e;
  })(), ku = /* @__PURE__ */ (function() {
    function e(A, r) {
      this.content = S(A, bu, r.content), this.quotes = S(A, Lu, r.quotes);
    }
    return e;
  })(), ui = /* @__PURE__ */ (function() {
    function e(A, r) {
      this.counterIncrement = S(A, Iu, r.counterIncrement), this.counterReset = S(A, Su, r.counterReset);
    }
    return e;
  })(), S = function(e, A, r) {
    var t = new Co(), n = r !== null && typeof r < "u" ? r.toString() : A.initialValue;
    t.write(n);
    var i = new po(t.read());
    switch (A.type) {
      case 2:
        var o = i.parseComponentValue();
        return A.parse(e, Z(o) ? o.value : A.initialValue);
      case 0:
        return A.parse(e, i.parseComponentValue());
      case 1:
        return A.parse(e, i.parseComponentValues());
      case 4:
        return i.parseComponentValue();
      case 3:
        switch (A.format) {
          case "angle":
            return lr.parse(e, i.parseComponentValue());
          case "color":
            return oe.parse(e, i.parseComponentValue());
          case "image":
            return mn.parse(e, i.parseComponentValue());
          case "length":
            var a = i.parseComponentValue();
            return se(a) ? a : QA;
          case "length-percentage":
            var s = i.parseComponentValue();
            return sA(s) ? s : QA;
          case "time":
            return ko.parse(e, i.parseComponentValue());
        }
        break;
    }
  }, Gu = "data-html2canvas-debug", Ru = function(e) {
    var A = e.getAttribute(Gu);
    switch (A) {
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
  }, cn = function(e, A) {
    var r = Ru(e);
    return r === 1 || A === r;
  }, XA = /* @__PURE__ */ (function() {
    function e(A, r) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, cn(r, 3)) debugger;
      this.styles = new Mu(A, window.getComputedStyle(r, null)), gn(r) && (this.styles.animationDuration.some(function(t) {
        return t > 0;
      }) && (r.style.animationDuration = "0s"), this.styles.transform !== null && (r.style.transform = "none")), this.bounds = ar(this.context, r), cn(r, 4) && (this.flags |= 16);
    }
    return e;
  })(), Vu = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", gi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", je = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Kt = 0; Kt < gi.length; Kt++) je[gi.charCodeAt(Kt)] = Kt;
  var _u = function(e) {
    var A = e.length * 0.75, r = e.length, t, n = 0, i, o, a, s;
    e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (t = 0; t < r; t += 4) i = je[e.charCodeAt(t)], o = je[e.charCodeAt(t + 1)], a = je[e.charCodeAt(t + 2)], s = je[e.charCodeAt(t + 3)], c[n++] = i << 2 | o >> 4, c[n++] = (o & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, Nu = function(e) {
    for (var A = e.length, r = [], t = 0; t < A; t += 2) r.push(e[t + 1] << 8 | e[t]);
    return r;
  }, Pu = function(e) {
    for (var A = e.length, r = [], t = 0; t < A; t += 4) r.push(e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]);
    return r;
  }, Qe = 5, En = 11, Sr = 2, Xu = En - Qe, Go = 65536 >> Qe, Ju = 1 << Qe, xr = Ju - 1, Wu = 1024 >> Qe, Yu = Go + Wu, Zu = Yu, ju = 32, zu = Zu + ju, qu = 65536 >> En, $u = 1 << Xu, Ag = $u - 1, fi = function(e, A, r) {
    return e.slice ? e.slice(A, r) : new Uint16Array(Array.prototype.slice.call(e, A, r));
  }, eg = function(e, A, r) {
    return e.slice ? e.slice(A, r) : new Uint32Array(Array.prototype.slice.call(e, A, r));
  }, tg = function(e, A) {
    var r = _u(e), t = Array.isArray(r) ? Pu(r) : new Uint32Array(r), n = Array.isArray(r) ? Nu(r) : new Uint16Array(r), i = 24, o = fi(n, i / 2, t[4] / 2), a = t[5] === 2 ? fi(n, (i + t[4]) / 2) : eg(t, Math.ceil((i + t[4]) / 4));
    return new rg(t[0], t[1], t[2], t[3], o, a);
  }, rg = (function() {
    function e(A, r, t, n, i, o) {
      this.initialValue = A, this.errorValue = r, this.highStart = t, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return e.prototype.get = function(A) {
      var r;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535) return r = this.index[A >> Qe], r = (r << Sr) + (A & xr), this.data[r];
        if (A <= 65535) return r = this.index[Go + (A - 55296 >> Qe)], r = (r << Sr) + (A & xr), this.data[r];
        if (A < this.highStart) return r = zu - qu + (A >> En), r = this.index[r], r += A >> Qe & Ag, r = this.index[r], r = (r << Sr) + (A & xr), this.data[r];
        if (A <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })(), di = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ng = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Tt = 0; Tt < di.length; Tt++) ng[di.charCodeAt(Tt)] = Tt;
  var ig = 1, Lr = 2, Kr = 3, wi = 4, Qi = 5, og = 7, hi = 8, Tr = 9, Dr = 10, Ci = 11, pi = 12, Ui = 13, Fi = 14, Or = 15, ag = function(e) {
    for (var A = [], r = 0, t = e.length; r < t; ) {
      var n = e.charCodeAt(r++);
      if (n >= 55296 && n <= 56319 && r < t) {
        var i = e.charCodeAt(r++);
        (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n), r--);
      } else A.push(n);
    }
    return A;
  }, sg = function() {
    for (var e = [], A = 0; A < arguments.length; A++) e[A] = arguments[A];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
    var r = e.length;
    if (!r) return "";
    for (var t = [], n = -1, i = ""; ++n < r; ) {
      var o = e[n];
      o <= 65535 ? t.push(o) : (o -= 65536, t.push((o >> 10) + 55296, o % 1024 + 56320)), (n + 1 === r || t.length > 16384) && (i += String.fromCharCode.apply(String, t), t.length = 0);
    }
    return i;
  }, lg = tg(Vu), xA = "\xD7", Mr = "\xF7", cg = function(e) {
    return lg.get(e);
  }, Bg = function(e, A, r) {
    var t = r - 2, n = A[t], i = A[r - 1], o = A[r];
    if (i === Lr && o === Kr) return xA;
    if (i === Lr || i === Kr || i === wi || o === Lr || o === Kr || o === wi) return Mr;
    if (i === hi && [
      hi,
      Tr,
      Ci,
      pi
    ].indexOf(o) !== -1 || (i === Ci || i === Tr) && (o === Tr || o === Dr) || (i === pi || i === Dr) && o === Dr || o === Ui || o === Qi || o === og || i === ig) return xA;
    if (i === Ui && o === Fi) {
      for (; n === Qi; ) n = A[--t];
      if (n === Fi) return xA;
    }
    if (i === Or && o === Or) {
      for (var a = 0; n === Or; ) a++, n = A[--t];
      if (a % 2 === 0) return xA;
    }
    return Mr;
  }, ug = function(e) {
    var A = ag(e), r = A.length, t = 0, n = 0, i = A.map(cg);
    return {
      next: function() {
        if (t >= r) return {
          done: true,
          value: null
        };
        for (var o = xA; t < r && (o = Bg(A, i, ++t)) === xA; ) ;
        if (o !== xA || t === r) {
          var a = sg.apply(null, A.slice(n, t));
          return n = t, {
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
  }, gg = function(e) {
    for (var A = ug(e), r = [], t; !(t = A.next()).done; ) t.value && r.push(t.value.slice());
    return r;
  }, fg = function(e) {
    var A = 123;
    if (e.createRange) {
      var r = e.createRange();
      if (r.getBoundingClientRect) {
        var t = e.createElement("boundtest");
        t.style.height = A + "px", t.style.display = "block", e.body.appendChild(t), r.selectNode(t);
        var n = r.getBoundingClientRect(), i = Math.round(n.height);
        if (e.body.removeChild(t), i === A) return true;
      }
    }
    return false;
  }, dg = function(e) {
    var A = e.createElement("boundtest");
    A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
    var r = e.createRange();
    A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var t = A.firstChild, n = sr(t.data).map(function(s) {
      return oA(s);
    }), i = 0, o = {}, a = n.every(function(s, l) {
      r.setStart(t, i), r.setEnd(t, i + s.length);
      var c = r.getBoundingClientRect();
      i += s.length;
      var B = c.x > o.x || c.y > o.y;
      return o = c, l === 0 ? true : B;
    });
    return e.body.removeChild(A), a;
  }, wg = function() {
    return typeof new Image().crossOrigin < "u";
  }, Qg = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, hg = function(e) {
    var A = new Image(), r = e.createElement("canvas"), t = r.getContext("2d");
    if (!t) return false;
    A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      t.drawImage(A, 0, 0), r.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, vi = function(e) {
    return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
  }, Cg = function(e) {
    var A = e.createElement("canvas"), r = 100;
    A.width = r, A.height = r;
    var t = A.getContext("2d");
    if (!t) return Promise.reject(false);
    t.fillStyle = "rgb(0, 255, 0)", t.fillRect(0, 0, r, r);
    var n = new Image(), i = A.toDataURL();
    n.src = i;
    var o = Bn(r, r, 0, 0, n);
    return t.fillStyle = "red", t.fillRect(0, 0, r, r), mi(o).then(function(a) {
      t.drawImage(a, 0, 0);
      var s = t.getImageData(0, 0, r, r).data;
      t.fillStyle = "red", t.fillRect(0, 0, r, r);
      var l = e.createElement("div");
      return l.style.backgroundImage = "url(" + i + ")", l.style.height = r + "px", vi(s) ? mi(Bn(r, r, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return t.drawImage(a, 0, 0), vi(t.getImageData(0, 0, r, r).data);
    }).catch(function() {
      return false;
    });
  }, Bn = function(e, A, r, t, n) {
    var i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
    return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", r.toString()), a.setAttributeNS(null, "y", t.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(n), o;
  }, mi = function(e) {
    return new Promise(function(A, r) {
      var t = new Image();
      t.onload = function() {
        return A(t);
      }, t.onerror = r, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
    });
  }, dA = {
    get SUPPORT_RANGE_BOUNDS() {
      var e = fg(document);
      return Object.defineProperty(dA, "SUPPORT_RANGE_BOUNDS", {
        value: e
      }), e;
    },
    get SUPPORT_WORD_BREAKING() {
      var e = dA.SUPPORT_RANGE_BOUNDS && dg(document);
      return Object.defineProperty(dA, "SUPPORT_WORD_BREAKING", {
        value: e
      }), e;
    },
    get SUPPORT_SVG_DRAWING() {
      var e = hg(document);
      return Object.defineProperty(dA, "SUPPORT_SVG_DRAWING", {
        value: e
      }), e;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Cg(document) : Promise.resolve(false);
      return Object.defineProperty(dA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: e
      }), e;
    },
    get SUPPORT_CORS_IMAGES() {
      var e = wg();
      return Object.defineProperty(dA, "SUPPORT_CORS_IMAGES", {
        value: e
      }), e;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var e = Qg();
      return Object.defineProperty(dA, "SUPPORT_RESPONSE_TYPE", {
        value: e
      }), e;
    },
    get SUPPORT_CORS_XHR() {
      var e = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(dA, "SUPPORT_CORS_XHR", {
        value: e
      }), e;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var e = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(dA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: e
      }), e;
    }
  }, et = /* @__PURE__ */ (function() {
    function e(A, r) {
      this.text = A, this.bounds = r;
    }
    return e;
  })(), pg = function(e, A, r, t) {
    var n = vg(A, r), i = [], o = 0;
    return n.forEach(function(a) {
      if (r.textDecorationLine.length || a.trim().length > 0) if (dA.SUPPORT_RANGE_BOUNDS) {
        var s = Ei(t, o, a.length).getClientRects();
        if (s.length > 1) {
          var l = yn(a), c = 0;
          l.forEach(function(u) {
            i.push(new et(u, zA.fromDOMRectList(e, Ei(t, c + o, u.length).getClientRects()))), c += u.length;
          });
        } else i.push(new et(a, zA.fromDOMRectList(e, s)));
      } else {
        var B = t.splitText(a.length);
        i.push(new et(a, Ug(e, t))), t = B;
      }
      else dA.SUPPORT_RANGE_BOUNDS || (t = t.splitText(a.length));
      o += a.length;
    }), i;
  }, Ug = function(e, A) {
    var r = A.ownerDocument;
    if (r) {
      var t = r.createElement("html2canvaswrapper");
      t.appendChild(A.cloneNode(true));
      var n = A.parentNode;
      if (n) {
        n.replaceChild(t, A);
        var i = ar(e, t);
        return t.firstChild && n.replaceChild(t.firstChild, t), i;
      }
    }
    return zA.EMPTY;
  }, Ei = function(e, A, r) {
    var t = e.ownerDocument;
    if (!t) throw new Error("Node has no owner document");
    var n = t.createRange();
    return n.setStart(e, A), n.setEnd(e, A + r), n;
  }, yn = function(e) {
    if (dA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var A = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(A.segment(e)).map(function(r) {
        return r.segment;
      });
    }
    return gg(e);
  }, Fg = function(e, A) {
    if (dA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var r = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(r.segment(e)).map(function(t) {
        return t.segment;
      });
    }
    return Eg(e, A);
  }, vg = function(e, A) {
    return A.letterSpacing !== 0 ? yn(e) : Fg(e, A);
  }, mg = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], Eg = function(e, A) {
    for (var r = ql(e, {
      lineBreak: A.lineBreak,
      wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
    }), t = [], n, i = function() {
      if (n.value) {
        var o = n.value.slice(), a = sr(o), s = "";
        a.forEach(function(l) {
          mg.indexOf(l) === -1 ? s += oA(l) : (s.length && t.push(s), t.push(oA(l)), s = "");
        }), s.length && t.push(s);
      }
    }; !(n = r.next()).done; ) i();
    return t;
  }, yg = /* @__PURE__ */ (function() {
    function e(A, r, t) {
      this.text = Hg(r.data, t.textTransform), this.textBounds = pg(A, this.text, t, r);
    }
    return e;
  })(), Hg = function(e, A) {
    switch (A) {
      case 1:
        return e.toLowerCase();
      case 3:
        return e.replace(bg, Ig);
      case 2:
        return e.toUpperCase();
      default:
        return e;
    }
  }, bg = /(^|\s|:|-|\(|\))([a-z])/g, Ig = function(e, A, r) {
    return e.length > 0 ? A + r.toUpperCase() : e;
  }, Ro = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n.src = t.currentSrc || t.src, n.intrinsicWidth = t.naturalWidth, n.intrinsicHeight = t.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  })(XA), Vo = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n.canvas = t, n.intrinsicWidth = t.width, n.intrinsicHeight = t.height, n;
    }
    return A;
  })(XA), _o = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this, i = new XMLSerializer(), o = ar(r, t);
      return t.setAttribute("width", o.width + "px"), t.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(t)), n.intrinsicWidth = t.width.baseVal.value, n.intrinsicHeight = t.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  })(XA), No = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n.value = t.value, n;
    }
    return A;
  })(XA), un = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n.start = t.start, n.reversed = typeof t.reversed == "boolean" && t.reversed === true, n;
    }
    return A;
  })(XA), Sg = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], xg = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], Lg = function(e) {
    return e.width > e.height ? new zA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new zA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
  }, Kg = function(e) {
    var A = e.type === Tg ? new Array(e.value.length + 1).join("\u2022") : e.value;
    return A.length === 0 ? e.placeholder || "" : A;
  }, zt = "checkbox", qt = "radio", Tg = "password", yi = 707406591, Hn = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      switch (n.type = t.type.toLowerCase(), n.checked = t.checked, n.value = Kg(t), (n.type === zt || n.type === qt) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = Lg(n.bounds)), n.type) {
        case zt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Sg;
          break;
        case qt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = xg;
          break;
      }
      return n;
    }
    return A;
  })(XA), Po = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this, i = t.options[t.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return A;
  })(XA), Xo = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n.value = t.value, n;
    }
    return A;
  })(XA), Jo = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      n.src = t.src, n.width = parseInt(t.width, 10) || 0, n.height = parseInt(t.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
          n.tree = Yo(r, t.contentWindow.document.documentElement);
          var i = t.contentWindow.document.documentElement ? $e(r, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : ZA.TRANSPARENT, o = t.contentWindow.document.body ? $e(r, getComputedStyle(t.contentWindow.document.body).backgroundColor) : ZA.TRANSPARENT;
          n.backgroundColor = ae(i) ? ae(o) ? n.styles.backgroundColor : o : i;
        }
      } catch {
      }
      return n;
    }
    return A;
  })(XA), Dg = [
    "OL",
    "UL",
    "MENU"
  ], _t = function(e, A, r, t) {
    for (var n = A.firstChild, i = void 0; n; n = i) if (i = n.nextSibling, Zo(n) && n.data.trim().length > 0) r.textNodes.push(new yg(e, n, r.styles));
    else if (Ie(n)) if ($o(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return _t(e, a, r, t);
    });
    else {
      var o = Wo(e, n);
      o.styles.isVisible() && (Og(n, o, t) ? o.flags |= 4 : Mg(o.styles) && (o.flags |= 2), Dg.indexOf(n.tagName) !== -1 && (o.flags |= 8), r.elements.push(o), n.slot, n.shadowRoot ? _t(e, n.shadowRoot, o, t) : !$t(n) && !jo(n) && !Ar(n) && _t(e, n, o, t));
    }
  }, Wo = function(e, A) {
    return fn(A) ? new Ro(e, A) : zo(A) ? new Vo(e, A) : jo(A) ? new _o(e, A) : kg(A) ? new No(e, A) : Gg(A) ? new un(e, A) : Rg(A) ? new Hn(e, A) : Ar(A) ? new Po(e, A) : $t(A) ? new Xo(e, A) : qo(A) ? new Jo(e, A) : new XA(e, A);
  }, Yo = function(e, A) {
    var r = Wo(e, A);
    return r.flags |= 4, _t(e, A, r, r), r;
  }, Og = function(e, A, r) {
    return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || bn(e) && r.styles.isTransparent();
  }, Mg = function(e) {
    return e.isPositioned() || e.isFloating();
  }, Zo = function(e) {
    return e.nodeType === Node.TEXT_NODE;
  }, Ie = function(e) {
    return e.nodeType === Node.ELEMENT_NODE;
  }, gn = function(e) {
    return Ie(e) && typeof e.style < "u" && !Nt(e);
  }, Nt = function(e) {
    return typeof e.className == "object";
  }, kg = function(e) {
    return e.tagName === "LI";
  }, Gg = function(e) {
    return e.tagName === "OL";
  }, Rg = function(e) {
    return e.tagName === "INPUT";
  }, Vg = function(e) {
    return e.tagName === "HTML";
  }, jo = function(e) {
    return e.tagName === "svg";
  }, bn = function(e) {
    return e.tagName === "BODY";
  }, zo = function(e) {
    return e.tagName === "CANVAS";
  }, Hi = function(e) {
    return e.tagName === "VIDEO";
  }, fn = function(e) {
    return e.tagName === "IMG";
  }, qo = function(e) {
    return e.tagName === "IFRAME";
  }, bi = function(e) {
    return e.tagName === "STYLE";
  }, _g = function(e) {
    return e.tagName === "SCRIPT";
  }, $t = function(e) {
    return e.tagName === "TEXTAREA";
  }, Ar = function(e) {
    return e.tagName === "SELECT";
  }, $o = function(e) {
    return e.tagName === "SLOT";
  }, Ii = function(e) {
    return e.tagName.indexOf("-") > 0;
  }, Ng = (function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var r = this.counters[A];
      return r && r.length ? r[r.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var r = this.counters[A];
      return r || [];
    }, e.prototype.pop = function(A) {
      var r = this;
      A.forEach(function(t) {
        return r.counters[t].pop();
      });
    }, e.prototype.parse = function(A) {
      var r = this, t = A.counterIncrement, n = A.counterReset, i = true;
      t !== null && t.forEach(function(a) {
        var s = r.counters[a.counter];
        s && a.increment !== 0 && (i = false, s.length || s.push(1), s[Math.max(0, s.length - 1)] += a.increment);
      });
      var o = [];
      return i && n.forEach(function(a) {
        var s = r.counters[a.counter];
        o.push(a.counter), s || (s = r.counters[a.counter] = []), s.push(a.reset);
      }), o;
    }, e;
  })(), Si = {
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
  }, xi = {
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
  }, Pg = {
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
  }, Xg = {
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
  }, ve = function(e, A, r, t, n, i) {
    return e < A || e > r ? ot(e, n, i.length > 0) : t.integers.reduce(function(o, a, s) {
      for (; e >= a; ) e -= a, o += t.values[s];
      return o;
    }, "") + i;
  }, Aa = function(e, A, r, t) {
    var n = "";
    do
      r || e--, n = t(e) + n, e /= A;
    while (e * A >= A);
    return n;
  }, iA = function(e, A, r, t, n) {
    var i = r - A + 1;
    return (e < 0 ? "-" : "") + (Aa(Math.abs(e), i, t, function(o) {
      return oA(Math.floor(o % i) + A);
    }) + n);
  }, ce = function(e, A, r) {
    r === void 0 && (r = ". ");
    var t = A.length;
    return Aa(Math.abs(e), t, false, function(n) {
      return A[Math.floor(n % t)];
    }) + r;
  }, ye = 1, $A = 2, Ae = 4, ze = 8, WA = function(e, A, r, t, n, i) {
    if (e < -9999 || e > 9999) return ot(e, 4, n.length > 0);
    var o = Math.abs(e), a = n;
    if (o === 0) return A[0] + a;
    for (var s = 0; o > 0 && s <= 4; s++) {
      var l = o % 10;
      l === 0 && cA(i, ye) && a !== "" ? a = A[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && cA(i, $A) || l === 1 && s === 1 && cA(i, Ae) && e > 100 || l === 1 && s > 1 && cA(i, ze) ? a = A[l] + (s > 0 ? r[s - 1] : "") + a : l === 1 && s > 0 && (a = r[s - 1] + a), o = Math.floor(o / 10);
    }
    return (e < 0 ? t : "") + a;
  }, Li = "\u5341\u767E\u5343\u842C", Ki = "\u62FE\u4F70\u4EDF\u842C", Ti = "\u30DE\u30A4\u30CA\u30B9", kr = "\uB9C8\uC774\uB108\uC2A4", ot = function(e, A, r) {
    var t = r ? ". " : "", n = r ? "\u3001" : "", i = r ? ", " : "", o = r ? " " : "";
    switch (A) {
      case 0:
        return "\u2022" + o;
      case 1:
        return "\u25E6" + o;
      case 2:
        return "\u25FE" + o;
      case 5:
        var a = iA(e, 48, 57, true, t);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return ce(e, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return ve(e, 1, 3999, Si, 3, t).toLowerCase();
      case 7:
        return ve(e, 1, 3999, Si, 3, t);
      case 8:
        return iA(e, 945, 969, false, t);
      case 9:
        return iA(e, 97, 122, false, t);
      case 10:
        return iA(e, 65, 90, false, t);
      case 11:
        return iA(e, 1632, 1641, true, t);
      case 12:
      case 49:
        return ve(e, 1, 9999, xi, 3, t);
      case 35:
        return ve(e, 1, 9999, xi, 3, t).toLowerCase();
      case 13:
        return iA(e, 2534, 2543, true, t);
      case 14:
      case 30:
        return iA(e, 6112, 6121, true, t);
      case 15:
        return ce(e, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return ce(e, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return WA(e, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Li, "\u8CA0", n, $A | Ae | ze);
      case 47:
        return WA(e, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Ki, "\u8CA0", n, ye | $A | Ae | ze);
      case 42:
        return WA(e, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Li, "\u8D1F", n, $A | Ae | ze);
      case 41:
        return WA(e, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Ki, "\u8D1F", n, ye | $A | Ae | ze);
      case 26:
        return WA(e, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Ti, n, 0);
      case 25:
        return WA(e, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Ti, n, ye | $A | Ae);
      case 31:
        return WA(e, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", kr, i, ye | $A | Ae);
      case 33:
        return WA(e, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", kr, i, 0);
      case 32:
        return WA(e, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", kr, i, ye | $A | Ae);
      case 18:
        return iA(e, 2406, 2415, true, t);
      case 20:
        return ve(e, 1, 19999, Xg, 3, t);
      case 21:
        return iA(e, 2790, 2799, true, t);
      case 22:
        return iA(e, 2662, 2671, true, t);
      case 22:
        return ve(e, 1, 10999, Pg, 3, t);
      case 23:
        return ce(e, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return ce(e, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return iA(e, 3302, 3311, true, t);
      case 28:
        return ce(e, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return ce(e, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return iA(e, 3792, 3801, true, t);
      case 37:
        return iA(e, 6160, 6169, true, t);
      case 38:
        return iA(e, 4160, 4169, true, t);
      case 39:
        return iA(e, 2918, 2927, true, t);
      case 40:
        return iA(e, 1776, 1785, true, t);
      case 43:
        return iA(e, 3046, 3055, true, t);
      case 44:
        return iA(e, 3174, 3183, true, t);
      case 45:
        return iA(e, 3664, 3673, true, t);
      case 46:
        return iA(e, 3872, 3881, true, t);
      default:
        return iA(e, 48, 57, true, t);
    }
  }, ea = "data-html2canvas-ignore", Di = (function() {
    function e(A, r, t) {
      if (this.context = A, this.options = t, this.scrolledElements = [], this.referenceElement = r, this.counters = new Ng(), this.quoteDepth = 0, !r.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(r.ownerDocument.documentElement, false);
    }
    return e.prototype.toIFrame = function(A, r) {
      var t = this, n = Jg(A, r);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var i = A.defaultView.pageXOffset, o = A.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = Zg(n).then(function() {
        return FA(t, void 0, void 0, function() {
          var c, B;
          return hA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach($g), a && (a.scrollTo(r.left, r.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== r.top || a.scrollX !== r.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - r.left, a.scrollY - r.top, 0, 0))), c = this.options.onclone, B = this.clonedReferenceElement, typeof B > "u" ? [
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
                  Yg(s)
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
                    return c(s, B);
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
      return s.open(), s.write(zg(document.doctype) + "<html></html>"), qg(this.referenceElement.ownerDocument, i, o), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, e.prototype.createElementClone = function(A) {
      if (cn(A, 2)) debugger;
      if (zo(A)) return this.createCanvasClone(A);
      if (Hi(A)) return this.createVideoClone(A);
      if (bi(A)) return this.createStyleClone(A);
      var r = A.cloneNode(false);
      return fn(r) && (fn(A) && A.currentSrc && A.currentSrc !== A.src && (r.src = A.currentSrc, r.srcset = ""), r.loading === "lazy" && (r.loading = "eager")), Ii(r) ? this.createCustomElementClone(r) : r;
    }, e.prototype.createCustomElementClone = function(A) {
      var r = document.createElement("html2canvascustomelement");
      return Gr(A.style, r), r;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var r = A.sheet;
        if (r && r.cssRules) {
          var t = [].slice.call(r.cssRules, 0).reduce(function(i, o) {
            return o && typeof o.cssText == "string" ? i + o.cssText : i;
          }, ""), n = A.cloneNode(false);
          return n.textContent = t, n;
        }
      } catch (i) {
        if (this.context.logger.error("Unable to access cssRules property", i), i.name !== "SecurityError") throw i;
      }
      return A.cloneNode(false);
    }, e.prototype.createCanvasClone = function(A) {
      var r;
      if (this.options.inlineImages && A.ownerDocument) {
        var t = A.ownerDocument.createElement("img");
        try {
          return t.src = A.toDataURL(), t;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var n = A.cloneNode(false);
      try {
        n.width = A.width, n.height = A.height;
        var i = A.getContext("2d"), o = n.getContext("2d");
        if (o) if (!this.options.allowTaint && i) o.putImageData(i.getImageData(0, 0, A.width, A.height), 0, 0);
        else {
          var a = (r = A.getContext("webgl2")) !== null && r !== void 0 ? r : A.getContext("webgl");
          if (a) {
            var s = a.getContextAttributes();
            (s == null ? void 0 : s.preserveDrawingBuffer) === false && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
          }
          o.drawImage(A, 0, 0);
        }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return n;
    }, e.prototype.createVideoClone = function(A) {
      var r = A.ownerDocument.createElement("canvas");
      r.width = A.offsetWidth, r.height = A.offsetHeight;
      var t = r.getContext("2d");
      try {
        return t && (t.drawImage(A, 0, 0, r.width, r.height), this.options.allowTaint || t.getImageData(0, 0, r.width, r.height)), r;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var n = A.ownerDocument.createElement("canvas");
      return n.width = A.offsetWidth, n.height = A.offsetHeight, n;
    }, e.prototype.appendChildNode = function(A, r, t) {
      (!Ie(r) || !_g(r) && !r.hasAttribute(ea) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(r))) && (!this.options.copyStyles || !Ie(r) || !bi(r)) && A.appendChild(this.cloneNode(r, t));
    }, e.prototype.cloneChildNodes = function(A, r, t) {
      for (var n = this, i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; i; i = i.nextSibling) if (Ie(i) && $o(i) && typeof i.assignedNodes == "function") {
        var o = i.assignedNodes();
        o.length && o.forEach(function(a) {
          return n.appendChildNode(r, a, t);
        });
      } else this.appendChildNode(r, i, t);
    }, e.prototype.cloneNode = function(A, r) {
      if (Zo(A)) return document.createTextNode(A.data);
      if (!A.ownerDocument) return A.cloneNode(false);
      var t = A.ownerDocument.defaultView;
      if (t && Ie(A) && (gn(A) || Nt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var i = t.getComputedStyle(A), o = t.getComputedStyle(A, ":before"), a = t.getComputedStyle(A, ":after");
        this.referenceElement === A && gn(n) && (this.clonedReferenceElement = n), bn(n) && tf(n);
        var s = this.counters.parse(new ui(this.context, i)), l = this.resolvePseudoContent(A, n, o, tt.BEFORE);
        Ii(A) && (r = true), Hi(A) || this.cloneChildNodes(A, n, r), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(A, n, a, tt.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (i && (this.options.copyStyles || Nt(A)) && !qo(A) || r) && Gr(i, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          A.scrollLeft,
          A.scrollTop
        ]), ($t(A) || Ar(A)) && ($t(n) || Ar(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(false);
    }, e.prototype.resolvePseudoContent = function(A, r, t, n) {
      var i = this;
      if (t) {
        var o = t.content, a = r.ownerDocument;
        if (!(!a || !o || o === "none" || o === "-moz-alt-content" || t.display === "none")) {
          this.counters.parse(new ui(this.context, t));
          var s = new ku(this.context, t), l = a.createElement("html2canvaspseudoelement");
          Gr(t, l), s.content.forEach(function(B) {
            if (B.type === 0) l.appendChild(a.createTextNode(B.value));
            else if (B.type === 22) {
              var u = a.createElement("img");
              u.src = B.value, u.style.opacity = "1", l.appendChild(u);
            } else if (B.type === 18) {
              if (B.name === "attr") {
                var g = B.values.filter(Z);
                g.length && l.appendChild(a.createTextNode(A.getAttribute(g[0].value) || ""));
              } else if (B.name === "counter") {
                var Q = B.values.filter(De), d = Q[0], p = Q[1];
                if (d && Z(d)) {
                  var h = i.counters.getCounterValue(d.value), C = p && Z(p) ? ln.parse(i.context, p.value) : 3;
                  l.appendChild(a.createTextNode(ot(h, C, false)));
                }
              } else if (B.name === "counters") {
                var U = B.values.filter(De), d = U[0], v = U[1], p = U[2];
                if (d && Z(d)) {
                  var E = i.counters.getCounterValues(d.value), w = p && Z(p) ? ln.parse(i.context, p.value) : 3, b = v && v.type === 0 ? v.value : "", y = E.map(function(L) {
                    return ot(L, w, false);
                  }).join(b);
                  l.appendChild(a.createTextNode(y));
                }
              }
            } else if (B.type === 20) switch (B.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(Bi(s.quotes, i.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(Bi(s.quotes, --i.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(B.value));
            }
          }), l.className = dn + " " + wn;
          var c = n === tt.BEFORE ? " " + dn : " " + wn;
          return Nt(r) ? r.className.baseValue += c : r.className += c, l;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), true) : false;
    }, e;
  })(), tt;
  (function(e) {
    e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
  })(tt || (tt = {}));
  var Jg = function(e, A) {
    var r = e.createElement("iframe");
    return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = A.width.toString(), r.height = A.height.toString(), r.scrolling = "no", r.setAttribute(ea, "true"), e.body.appendChild(r), r;
  }, Wg = function(e) {
    return new Promise(function(A) {
      if (e.complete) {
        A();
        return;
      }
      if (!e.src) {
        A();
        return;
      }
      e.onload = A, e.onerror = A;
    });
  }, Yg = function(e) {
    return Promise.all([].slice.call(e.images, 0).map(Wg));
  }, Zg = function(e) {
    return new Promise(function(A, r) {
      var t = e.contentWindow;
      if (!t) return r("No window assigned for iframe");
      var n = t.document;
      t.onload = e.onload = function() {
        t.onload = e.onload = null;
        var i = setInterval(function() {
          n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(i), A(e));
        }, 50);
      };
    });
  }, jg = [
    "all",
    "d",
    "content"
  ], Gr = function(e, A) {
    for (var r = e.length - 1; r >= 0; r--) {
      var t = e.item(r);
      jg.indexOf(t) === -1 && A.style.setProperty(t, e.getPropertyValue(t));
    }
    return A;
  }, zg = function(e) {
    var A = "";
    return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
  }, qg = function(e, A, r) {
    e && e.defaultView && (A !== e.defaultView.pageXOffset || r !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, r);
  }, $g = function(e) {
    var A = e[0], r = e[1], t = e[2];
    A.scrollLeft = r, A.scrollTop = t;
  }, Af = ":before", ef = ":after", dn = "___html2canvas___pseudoelement_before", wn = "___html2canvas___pseudoelement_after", Oi = `{
    content: "" !important;
    display: none !important;
}`, tf = function(e) {
    rf(e, "." + dn + Af + Oi + `
         .` + wn + ef + Oi);
  }, rf = function(e, A) {
    var r = e.ownerDocument;
    if (r) {
      var t = r.createElement("style");
      t.textContent = A, e.appendChild(t);
    }
  }, ta = (function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var r = e._link;
      return r ? (r.href = A, r.href = r.href, r.protocol + r.hostname + r.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  })(), nf = (function() {
    function e(A, r) {
      this.context = A, this._options = r, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var r = Promise.resolve();
      return this.has(A) || (Vr(A) || lf(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), r;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return FA(this, void 0, void 0, function() {
        var r, t, n, i, o = this;
        return hA(this, function(a) {
          switch (a.label) {
            case 0:
              return r = ta.isSameOrigin(A), t = !Rr(A) && this._options.useCORS === true && dA.SUPPORT_CORS_IMAGES && !r, n = !Rr(A) && !r && !Vr(A) && typeof this._options.proxy == "string" && dA.SUPPORT_CORS_XHR && !t, !r && this._options.allowTaint === false && !Rr(A) && !Vr(A) && !n && !t ? [
                2
              ] : (i = A, n ? [
                4,
                this.proxy(i)
              ] : [
                3,
                2
              ]);
            case 1:
              i = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [
                4,
                new Promise(function(s, l) {
                  var c = new Image();
                  c.onload = function() {
                    return s(c);
                  }, c.onerror = l, (cf(i) || t) && (c.crossOrigin = "anonymous"), c.src = i, c.complete === true && setTimeout(function() {
                    return s(c);
                  }, 500), o._options.imageTimeout > 0 && setTimeout(function() {
                    return l("Timed out (" + o._options.imageTimeout + "ms) loading image");
                  }, o._options.imageTimeout);
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
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var r = this, t = this._options.proxy;
      if (!t) throw new Error("No proxy defined");
      var n = A.substring(0, 256);
      return new Promise(function(i, o) {
        var a = dA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
        s.onload = function() {
          if (s.status === 200) if (a === "text") i(s.response);
          else {
            var B = new FileReader();
            B.addEventListener("load", function() {
              return i(B.result);
            }, false), B.addEventListener("error", function(u) {
              return o(u);
            }, false), B.readAsDataURL(s.response);
          }
          else o("Failed to proxy resource " + n + " with status code " + s.status);
        }, s.onerror = o;
        var l = t.indexOf("?") > -1 ? "&" : "?";
        if (s.open("GET", "" + t + l + "url=" + encodeURIComponent(A) + "&responseType=" + a), a !== "text" && s instanceof XMLHttpRequest && (s.responseType = a), r._options.imageTimeout) {
          var c = r._options.imageTimeout;
          s.timeout = c, s.ontimeout = function() {
            return o("Timed out (" + c + "ms) proxying " + n);
          };
        }
        s.send();
      });
    }, e;
  })(), of = /^data:image\/svg\+xml/i, af = /^data:image\/.*;base64,/i, sf = /^data:image\/.*/i, lf = function(e) {
    return dA.SUPPORT_SVG_DRAWING || !Bf(e);
  }, Rr = function(e) {
    return sf.test(e);
  }, cf = function(e) {
    return af.test(e);
  }, Vr = function(e) {
    return e.substr(0, 4) === "blob";
  }, Bf = function(e) {
    return e.substr(-3).toLowerCase() === "svg" || of.test(e);
  }, I = (function() {
    function e(A, r) {
      this.type = 0, this.x = A, this.y = r;
    }
    return e.prototype.add = function(A, r) {
      return new e(this.x + A, this.y + r);
    }, e;
  })(), me = function(e, A, r) {
    return new I(e.x + (A.x - e.x) * r, e.y + (A.y - e.y) * r);
  }, Dt = (function() {
    function e(A, r, t, n) {
      this.type = 1, this.start = A, this.startControl = r, this.endControl = t, this.end = n;
    }
    return e.prototype.subdivide = function(A, r) {
      var t = me(this.start, this.startControl, A), n = me(this.startControl, this.endControl, A), i = me(this.endControl, this.end, A), o = me(t, n, A), a = me(n, i, A), s = me(o, a, A);
      return r ? new e(this.start, t, o, s) : new e(s, a, i, this.end);
    }, e.prototype.add = function(A, r) {
      return new e(this.start.add(A, r), this.startControl.add(A, r), this.endControl.add(A, r), this.end.add(A, r));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  })(), LA = function(e) {
    return e.type === 1;
  }, uf = /* @__PURE__ */ (function() {
    function e(A) {
      var r = A.styles, t = A.bounds, n = Ze(r.borderTopLeftRadius, t.width, t.height), i = n[0], o = n[1], a = Ze(r.borderTopRightRadius, t.width, t.height), s = a[0], l = a[1], c = Ze(r.borderBottomRightRadius, t.width, t.height), B = c[0], u = c[1], g = Ze(r.borderBottomLeftRadius, t.width, t.height), Q = g[0], d = g[1], p = [];
      p.push((i + s) / t.width), p.push((Q + B) / t.width), p.push((o + d) / t.height), p.push((l + u) / t.height);
      var h = Math.max.apply(Math, p);
      h > 1 && (i /= h, o /= h, s /= h, l /= h, B /= h, u /= h, Q /= h, d /= h);
      var C = t.width - s, U = t.height - u, v = t.width - B, E = t.height - d, w = r.borderTopWidth, b = r.borderRightWidth, y = r.borderBottomWidth, m = r.borderLeftWidth, K = AA(r.paddingTop, A.bounds.width), L = AA(r.paddingRight, A.bounds.width), R = AA(r.paddingBottom, A.bounds.width), M = AA(r.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || o > 0 ? rA(t.left + m / 3, t.top + w / 3, i - m / 3, o - w / 3, X.TOP_LEFT) : new I(t.left + m / 3, t.top + w / 3), this.topRightBorderDoubleOuterBox = i > 0 || o > 0 ? rA(t.left + C, t.top + w / 3, s - b / 3, l - w / 3, X.TOP_RIGHT) : new I(t.left + t.width - b / 3, t.top + w / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || u > 0 ? rA(t.left + v, t.top + U, B - b / 3, u - y / 3, X.BOTTOM_RIGHT) : new I(t.left + t.width - b / 3, t.top + t.height - y / 3), this.bottomLeftBorderDoubleOuterBox = Q > 0 || d > 0 ? rA(t.left + m / 3, t.top + E, Q - m / 3, d - y / 3, X.BOTTOM_LEFT) : new I(t.left + m / 3, t.top + t.height - y / 3), this.topLeftBorderDoubleInnerBox = i > 0 || o > 0 ? rA(t.left + m * 2 / 3, t.top + w * 2 / 3, i - m * 2 / 3, o - w * 2 / 3, X.TOP_LEFT) : new I(t.left + m * 2 / 3, t.top + w * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || o > 0 ? rA(t.left + C, t.top + w * 2 / 3, s - b * 2 / 3, l - w * 2 / 3, X.TOP_RIGHT) : new I(t.left + t.width - b * 2 / 3, t.top + w * 2 / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || u > 0 ? rA(t.left + v, t.top + U, B - b * 2 / 3, u - y * 2 / 3, X.BOTTOM_RIGHT) : new I(t.left + t.width - b * 2 / 3, t.top + t.height - y * 2 / 3), this.bottomLeftBorderDoubleInnerBox = Q > 0 || d > 0 ? rA(t.left + m * 2 / 3, t.top + E, Q - m * 2 / 3, d - y * 2 / 3, X.BOTTOM_LEFT) : new I(t.left + m * 2 / 3, t.top + t.height - y * 2 / 3), this.topLeftBorderStroke = i > 0 || o > 0 ? rA(t.left + m / 2, t.top + w / 2, i - m / 2, o - w / 2, X.TOP_LEFT) : new I(t.left + m / 2, t.top + w / 2), this.topRightBorderStroke = i > 0 || o > 0 ? rA(t.left + C, t.top + w / 2, s - b / 2, l - w / 2, X.TOP_RIGHT) : new I(t.left + t.width - b / 2, t.top + w / 2), this.bottomRightBorderStroke = B > 0 || u > 0 ? rA(t.left + v, t.top + U, B - b / 2, u - y / 2, X.BOTTOM_RIGHT) : new I(t.left + t.width - b / 2, t.top + t.height - y / 2), this.bottomLeftBorderStroke = Q > 0 || d > 0 ? rA(t.left + m / 2, t.top + E, Q - m / 2, d - y / 2, X.BOTTOM_LEFT) : new I(t.left + m / 2, t.top + t.height - y / 2), this.topLeftBorderBox = i > 0 || o > 0 ? rA(t.left, t.top, i, o, X.TOP_LEFT) : new I(t.left, t.top), this.topRightBorderBox = s > 0 || l > 0 ? rA(t.left + C, t.top, s, l, X.TOP_RIGHT) : new I(t.left + t.width, t.top), this.bottomRightBorderBox = B > 0 || u > 0 ? rA(t.left + v, t.top + U, B, u, X.BOTTOM_RIGHT) : new I(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = Q > 0 || d > 0 ? rA(t.left, t.top + E, Q, d, X.BOTTOM_LEFT) : new I(t.left, t.top + t.height), this.topLeftPaddingBox = i > 0 || o > 0 ? rA(t.left + m, t.top + w, Math.max(0, i - m), Math.max(0, o - w), X.TOP_LEFT) : new I(t.left + m, t.top + w), this.topRightPaddingBox = s > 0 || l > 0 ? rA(t.left + Math.min(C, t.width - b), t.top + w, C > t.width + b ? 0 : Math.max(0, s - b), Math.max(0, l - w), X.TOP_RIGHT) : new I(t.left + t.width - b, t.top + w), this.bottomRightPaddingBox = B > 0 || u > 0 ? rA(t.left + Math.min(v, t.width - m), t.top + Math.min(U, t.height - y), Math.max(0, B - b), Math.max(0, u - y), X.BOTTOM_RIGHT) : new I(t.left + t.width - b, t.top + t.height - y), this.bottomLeftPaddingBox = Q > 0 || d > 0 ? rA(t.left + m, t.top + Math.min(E, t.height - y), Math.max(0, Q - m), Math.max(0, d - y), X.BOTTOM_LEFT) : new I(t.left + m, t.top + t.height - y), this.topLeftContentBox = i > 0 || o > 0 ? rA(t.left + m + M, t.top + w + K, Math.max(0, i - (m + M)), Math.max(0, o - (w + K)), X.TOP_LEFT) : new I(t.left + m + M, t.top + w + K), this.topRightContentBox = s > 0 || l > 0 ? rA(t.left + Math.min(C, t.width + m + M), t.top + w + K, C > t.width + m + M ? 0 : s - m + M, l - (w + K), X.TOP_RIGHT) : new I(t.left + t.width - (b + L), t.top + w + K), this.bottomRightContentBox = B > 0 || u > 0 ? rA(t.left + Math.min(v, t.width - (m + M)), t.top + Math.min(U, t.height + w + K), Math.max(0, B - (b + L)), u - (y + R), X.BOTTOM_RIGHT) : new I(t.left + t.width - (b + L), t.top + t.height - (y + R)), this.bottomLeftContentBox = Q > 0 || d > 0 ? rA(t.left + m + M, t.top + E, Math.max(0, Q - (m + M)), d - (y + R), X.BOTTOM_LEFT) : new I(t.left + m + M, t.top + t.height - (y + R));
    }
    return e;
  })(), X;
  (function(e) {
    e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(X || (X = {}));
  var rA = function(e, A, r, t, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3), o = r * i, a = t * i, s = e + r, l = A + t;
    switch (n) {
      case X.TOP_LEFT:
        return new Dt(new I(e, l), new I(e, l - a), new I(s - o, A), new I(s, A));
      case X.TOP_RIGHT:
        return new Dt(new I(e, A), new I(e + o, A), new I(s, l - a), new I(s, l));
      case X.BOTTOM_RIGHT:
        return new Dt(new I(s, A), new I(s, A + a), new I(e + o, l), new I(e, l));
      case X.BOTTOM_LEFT:
      default:
        return new Dt(new I(s, l), new I(s - o, l), new I(e, A + a), new I(e, A));
    }
  }, er = function(e) {
    return [
      e.topLeftBorderBox,
      e.topRightBorderBox,
      e.bottomRightBorderBox,
      e.bottomLeftBorderBox
    ];
  }, gf = function(e) {
    return [
      e.topLeftContentBox,
      e.topRightContentBox,
      e.bottomRightContentBox,
      e.bottomLeftContentBox
    ];
  }, tr = function(e) {
    return [
      e.topLeftPaddingBox,
      e.topRightPaddingBox,
      e.bottomRightPaddingBox,
      e.bottomLeftPaddingBox
    ];
  }, ff = /* @__PURE__ */ (function() {
    function e(A, r, t) {
      this.offsetX = A, this.offsetY = r, this.matrix = t, this.type = 0, this.target = 6;
    }
    return e;
  })(), Ot = /* @__PURE__ */ (function() {
    function e(A, r) {
      this.path = A, this.target = r, this.type = 1;
    }
    return e;
  })(), df = /* @__PURE__ */ (function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  })(), wf = function(e) {
    return e.type === 0;
  }, ra = function(e) {
    return e.type === 1;
  }, Qf = function(e) {
    return e.type === 2;
  }, Mi = function(e, A) {
    return e.length === A.length ? e.some(function(r, t) {
      return r === A[t];
    }) : false;
  }, hf = function(e, A, r, t, n) {
    return e.map(function(i, o) {
      switch (o) {
        case 0:
          return i.add(A, r);
        case 1:
          return i.add(A + t, r);
        case 2:
          return i.add(A + t, r + n);
        case 3:
          return i.add(A, r + n);
      }
      return i;
    });
  }, na = /* @__PURE__ */ (function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  })(), ia = (function() {
    function e(A, r) {
      if (this.container = A, this.parent = r, this.effects = [], this.curves = new uf(this.container), this.container.styles.opacity < 1 && this.effects.push(new df(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new ff(t, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = er(this.curves), a = tr(this.curves);
        Mi(o, a) ? this.effects.push(new Ot(o, 6)) : (this.effects.push(new Ot(o, 2)), this.effects.push(new Ot(a, 4)));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var r = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, t = this.parent, n = this.effects.slice(0); t; ) {
        var i = t.effects.filter(function(s) {
          return !ra(s);
        });
        if (r || t.container.styles.position !== 0 || !t.parent) {
          if (n.unshift.apply(n, i), r = [
            2,
            3
          ].indexOf(t.container.styles.position) === -1, t.container.styles.overflowX !== 0) {
            var o = er(t.curves), a = tr(t.curves);
            Mi(o, a) || n.unshift(new Ot(a, 6));
          }
        } else n.unshift.apply(n, i);
        t = t.parent;
      }
      return n.filter(function(s) {
        return cA(s.target, A);
      });
    }, e;
  })(), Qn = function(e, A, r, t) {
    e.container.elements.forEach(function(n) {
      var i = cA(n.flags, 4), o = cA(n.flags, 2), a = new ia(n, e);
      cA(n.styles.display, 2048) && t.push(a);
      var s = cA(n.flags, 8) ? [] : t;
      if (i || o) {
        var l = i || n.styles.isPositioned() ? r : A, c = new na(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var B = n.styles.zIndex.order;
          if (B < 0) {
            var u = 0;
            l.negativeZIndex.some(function(Q, d) {
              return B > Q.element.container.styles.zIndex.order ? (u = d, false) : u > 0;
            }), l.negativeZIndex.splice(u, 0, c);
          } else if (B > 0) {
            var g = 0;
            l.positiveZIndex.some(function(Q, d) {
              return B >= Q.element.container.styles.zIndex.order ? (g = d + 1, false) : g > 0;
            }), l.positiveZIndex.splice(g, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        Qn(a, c, i ? c : r, s);
      } else n.styles.isInlineLevel() ? A.inlineLevel.push(a) : A.nonInlineLevel.push(a), Qn(a, A, r, s);
      cA(n.flags, 8) && oa(n, s);
    });
  }, oa = function(e, A) {
    for (var r = e instanceof un ? e.start : 1, t = e instanceof un ? e.reversed : false, n = 0; n < A.length; n++) {
      var i = A[n];
      i.container instanceof No && typeof i.container.value == "number" && i.container.value !== 0 && (r = i.container.value), i.listValue = ot(r, i.container.styles.listStyleType, true), r += t ? -1 : 1;
    }
  }, Cf = function(e) {
    var A = new ia(e, null), r = new na(A), t = [];
    return Qn(A, r, r, t), oa(A.container, t), r;
  }, ki = function(e, A) {
    switch (A) {
      case 0:
        return TA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
      case 1:
        return TA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
      case 2:
        return TA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
      default:
        return TA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
    }
  }, pf = function(e, A) {
    switch (A) {
      case 0:
        return TA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
      case 1:
        return TA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
      case 2:
        return TA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
      default:
        return TA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
    }
  }, Uf = function(e, A) {
    switch (A) {
      case 0:
        return TA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
      case 1:
        return TA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
      case 2:
        return TA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
      default:
        return TA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
    }
  }, Ff = function(e, A) {
    switch (A) {
      case 0:
        return Mt(e.topLeftBorderStroke, e.topRightBorderStroke);
      case 1:
        return Mt(e.topRightBorderStroke, e.bottomRightBorderStroke);
      case 2:
        return Mt(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
      default:
        return Mt(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
    }
  }, Mt = function(e, A) {
    var r = [];
    return LA(e) ? r.push(e.subdivide(0.5, false)) : r.push(e), LA(A) ? r.push(A.subdivide(0.5, true)) : r.push(A), r;
  }, TA = function(e, A, r, t) {
    var n = [];
    return LA(e) ? n.push(e.subdivide(0.5, false)) : n.push(e), LA(r) ? n.push(r.subdivide(0.5, true)) : n.push(r), LA(t) ? n.push(t.subdivide(0.5, true).reverse()) : n.push(t), LA(A) ? n.push(A.subdivide(0.5, false).reverse()) : n.push(A), n;
  }, aa = function(e) {
    var A = e.bounds, r = e.styles;
    return A.add(r.borderLeftWidth, r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth), -(r.borderTopWidth + r.borderBottomWidth));
  }, rr = function(e) {
    var A = e.styles, r = e.bounds, t = AA(A.paddingLeft, r.width), n = AA(A.paddingRight, r.width), i = AA(A.paddingTop, r.width), o = AA(A.paddingBottom, r.width);
    return r.add(t + A.borderLeftWidth, i + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + t + n), -(A.borderTopWidth + A.borderBottomWidth + i + o));
  }, vf = function(e, A) {
    return e === 0 ? A.bounds : e === 2 ? rr(A) : aa(A);
  }, mf = function(e, A) {
    return e === 0 ? A.bounds : e === 2 ? rr(A) : aa(A);
  }, _r = function(e, A, r) {
    var t = vf(He(e.styles.backgroundOrigin, A), e), n = mf(He(e.styles.backgroundClip, A), e), i = Ef(He(e.styles.backgroundSize, A), r, t), o = i[0], a = i[1], s = Ze(He(e.styles.backgroundPosition, A), t.width - o, t.height - a), l = yf(He(e.styles.backgroundRepeat, A), s, i, t, n), c = Math.round(t.left + s[0]), B = Math.round(t.top + s[1]);
    return [
      l,
      c,
      B,
      o,
      a
    ];
  }, Ee = function(e) {
    return Z(e) && e.value === Le.AUTO;
  }, kt = function(e) {
    return typeof e == "number";
  }, Ef = function(e, A, r) {
    var t = A[0], n = A[1], i = A[2], o = e[0], a = e[1];
    if (!o) return [
      0,
      0
    ];
    if (sA(o) && a && sA(a)) return [
      AA(o, r.width),
      AA(a, r.height)
    ];
    var s = kt(i);
    if (Z(o) && (o.value === Le.CONTAIN || o.value === Le.COVER)) {
      if (kt(i)) {
        var l = r.width / r.height;
        return l < i != (o.value === Le.COVER) ? [
          r.width,
          r.width / i
        ] : [
          r.height * i,
          r.height
        ];
      }
      return [
        r.width,
        r.height
      ];
    }
    var c = kt(t), B = kt(n), u = c || B;
    if (Ee(o) && (!a || Ee(a))) {
      if (c && B) return [
        t,
        n
      ];
      if (!s && !u) return [
        r.width,
        r.height
      ];
      if (u && s) {
        var g = c ? t : n * i, Q = B ? n : t / i;
        return [
          g,
          Q
        ];
      }
      var d = c ? t : r.width, p = B ? n : r.height;
      return [
        d,
        p
      ];
    }
    if (s) {
      var h = 0, C = 0;
      return sA(o) ? h = AA(o, r.width) : sA(a) && (C = AA(a, r.height)), Ee(o) ? h = C * i : (!a || Ee(a)) && (C = h / i), [
        h,
        C
      ];
    }
    var U = null, v = null;
    if (sA(o) ? U = AA(o, r.width) : a && sA(a) && (v = AA(a, r.height)), U !== null && (!a || Ee(a)) && (v = c && B ? U / t * n : r.height), v !== null && Ee(o) && (U = c && B ? v / n * t : r.width), U !== null && v !== null) return [
      U,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, He = function(e, A) {
    var r = e[A];
    return typeof r > "u" ? e[0] : r;
  }, yf = function(e, A, r, t, n) {
    var i = A[0], o = A[1], a = r[0], s = r[1];
    switch (e) {
      case 2:
        return [
          new I(Math.round(t.left), Math.round(t.top + o)),
          new I(Math.round(t.left + t.width), Math.round(t.top + o)),
          new I(Math.round(t.left + t.width), Math.round(s + t.top + o)),
          new I(Math.round(t.left), Math.round(s + t.top + o))
        ];
      case 3:
        return [
          new I(Math.round(t.left + i), Math.round(t.top)),
          new I(Math.round(t.left + i + a), Math.round(t.top)),
          new I(Math.round(t.left + i + a), Math.round(t.height + t.top)),
          new I(Math.round(t.left + i), Math.round(t.height + t.top))
        ];
      case 1:
        return [
          new I(Math.round(t.left + i), Math.round(t.top + o)),
          new I(Math.round(t.left + i + a), Math.round(t.top + o)),
          new I(Math.round(t.left + i + a), Math.round(t.top + o + s)),
          new I(Math.round(t.left + i), Math.round(t.top + o + s))
        ];
      default:
        return [
          new I(Math.round(n.left), Math.round(n.top)),
          new I(Math.round(n.left + n.width), Math.round(n.top)),
          new I(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new I(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, Hf = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Gi = "Hidden Text", bf = (function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, r) {
      var t = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), o = this._document.body;
      t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = r, t.style.margin = "0", t.style.padding = "0", t.style.whiteSpace = "nowrap", o.appendChild(t), n.src = Hf, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = A, i.style.fontSize = r, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Gi)), t.appendChild(i), t.appendChild(n);
      var a = n.offsetTop - i.offsetTop + 2;
      t.removeChild(i), t.appendChild(this._document.createTextNode(Gi)), t.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - t.offsetTop + 2;
      return o.removeChild(t), {
        baseline: a,
        middle: s
      };
    }, e.prototype.getMetrics = function(A, r) {
      var t = A + " " + r;
      return typeof this._data[t] > "u" && (this._data[t] = this.parseMetrics(A, r)), this._data[t];
    }, e;
  })(), sa = /* @__PURE__ */ (function() {
    function e(A, r) {
      this.context = A, this.options = r;
    }
    return e;
  })(), If = 1e4, Sf = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n._activeEffects = [], n.canvas = t.canvas ? t.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), t.canvas || (n.canvas.width = Math.floor(t.width * t.scale), n.canvas.height = Math.floor(t.height * t.scale), n.canvas.style.width = t.width + "px", n.canvas.style.height = t.height + "px"), n.fontMetrics = new bf(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-t.x, -t.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale), n;
    }
    return A.prototype.applyEffects = function(r) {
      for (var t = this; this._activeEffects.length; ) this.popEffect();
      r.forEach(function(n) {
        return t.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(r) {
      this.ctx.save(), Qf(r) && (this.ctx.globalAlpha = r.opacity), wf(r) && (this.ctx.translate(r.offsetX, r.offsetY), this.ctx.transform(r.matrix[0], r.matrix[1], r.matrix[2], r.matrix[3], r.matrix[4], r.matrix[5]), this.ctx.translate(-r.offsetX, -r.offsetY)), ra(r) && (this.path(r.path), this.ctx.clip()), this._activeEffects.push(r);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(r) {
      return FA(this, void 0, void 0, function() {
        var t;
        return hA(this, function(n) {
          switch (n.label) {
            case 0:
              return t = r.element.container.styles, t.isVisible() ? [
                4,
                this.renderStackContent(r)
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
    }, A.prototype.renderNode = function(r) {
      return FA(this, void 0, void 0, function() {
        return hA(this, function(t) {
          switch (t.label) {
            case 0:
              if (cA(r.container.flags, 16)) debugger;
              return r.container.styles.isVisible() ? [
                4,
                this.renderNodeBackgroundAndBorders(r)
              ] : [
                3,
                3
              ];
            case 1:
              return t.sent(), [
                4,
                this.renderNodeContent(r)
              ];
            case 2:
              t.sent(), t.label = 3;
            case 3:
              return [
                2
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(r, t, n) {
      var i = this;
      if (t === 0) this.ctx.fillText(r.text, r.bounds.left, r.bounds.top + n);
      else {
        var o = yn(r.text);
        o.reduce(function(a, s) {
          return i.ctx.fillText(s, a, r.bounds.top + n), a + i.ctx.measureText(s).width;
        }, r.bounds.left);
      }
    }, A.prototype.createFontStyle = function(r) {
      var t = r.fontVariant.filter(function(o) {
        return o === "normal" || o === "small-caps";
      }).join(""), n = Df(r.fontFamily).join(", "), i = Bt(r.fontSize) ? "" + r.fontSize.number + r.fontSize.unit : r.fontSize.number + "px";
      return [
        [
          r.fontStyle,
          t,
          r.fontWeight,
          i,
          n
        ].join(" "),
        n,
        i
      ];
    }, A.prototype.renderTextNode = function(r, t) {
      return FA(this, void 0, void 0, function() {
        var n, i, o, a, s, l, c, B, u = this;
        return hA(this, function(g) {
          return n = this.createFontStyle(t), i = n[0], o = n[1], a = n[2], this.ctx.font = i, this.ctx.direction = t.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(o, a), l = s.baseline, c = s.middle, B = t.paintOrder, r.textBounds.forEach(function(Q) {
            B.forEach(function(d) {
              switch (d) {
                case 0:
                  u.ctx.fillStyle = BA(t.color), u.renderTextWithLetterSpacing(Q, t.letterSpacing, l);
                  var p = t.textShadow;
                  p.length && Q.text.trim().length && (p.slice(0).reverse().forEach(function(h) {
                    u.ctx.shadowColor = BA(h.color), u.ctx.shadowOffsetX = h.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = h.offsetY.number * u.options.scale, u.ctx.shadowBlur = h.blur.number, u.renderTextWithLetterSpacing(Q, t.letterSpacing, l);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), t.textDecorationLine.length && (u.ctx.fillStyle = BA(t.textDecorationColor || t.color), t.textDecorationLine.forEach(function(h) {
                    switch (h) {
                      case 1:
                        u.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top + l), Q.bounds.width, 1);
                        break;
                      case 2:
                        u.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top), Q.bounds.width, 1);
                        break;
                      case 3:
                        u.ctx.fillRect(Q.bounds.left, Math.ceil(Q.bounds.top + c), Q.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  t.webkitTextStrokeWidth && Q.text.trim().length && (u.ctx.strokeStyle = BA(t.webkitTextStrokeColor), u.ctx.lineWidth = t.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(Q.text, Q.bounds.left, Q.bounds.top + l)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(r, t, n) {
      if (n && r.intrinsicWidth > 0 && r.intrinsicHeight > 0) {
        var i = rr(r), o = tr(t);
        this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, r.intrinsicWidth, r.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(r) {
      return FA(this, void 0, void 0, function() {
        var t, n, i, o, a, s, C, C, l, c, B, u, v, g, Q, E, d, p, h, C, U, v, E;
        return hA(this, function(w) {
          switch (w.label) {
            case 0:
              this.applyEffects(r.getEffects(4)), t = r.container, n = r.curves, i = t.styles, o = 0, a = t.textNodes, w.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [
                4,
                this.renderTextNode(s, i)
              ]) : [
                3,
                4
              ];
            case 2:
              w.sent(), w.label = 3;
            case 3:
              return o++, [
                3,
                1
              ];
            case 4:
              if (!(t instanceof Ro)) return [
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
                this.context.cache.match(t.src)
              ];
            case 6:
              return C = w.sent(), this.renderReplacedElement(t, n, C), [
                3,
                8
              ];
            case 7:
              return w.sent(), this.context.logger.error("Error loading image " + t.src), [
                3,
                8
              ];
            case 8:
              if (t instanceof Vo && this.renderReplacedElement(t, n, t.canvas), !(t instanceof _o)) return [
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
                this.context.cache.match(t.svg)
              ];
            case 10:
              return C = w.sent(), this.renderReplacedElement(t, n, C), [
                3,
                12
              ];
            case 11:
              return w.sent(), this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return t instanceof Jo && t.tree ? (l = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: t.backgroundColor,
                x: 0,
                y: 0,
                width: t.width,
                height: t.height
              }), [
                4,
                l.render(t.tree)
              ]) : [
                3,
                14
              ];
            case 13:
              c = w.sent(), t.width && t.height && this.ctx.drawImage(c, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height), w.label = 14;
            case 14:
              if (t instanceof Hn && (B = Math.min(t.bounds.width, t.bounds.height), t.type === zt ? t.checked && (this.ctx.save(), this.path([
                new I(t.bounds.left + B * 0.39363, t.bounds.top + B * 0.79),
                new I(t.bounds.left + B * 0.16, t.bounds.top + B * 0.5549),
                new I(t.bounds.left + B * 0.27347, t.bounds.top + B * 0.44071),
                new I(t.bounds.left + B * 0.39694, t.bounds.top + B * 0.5649),
                new I(t.bounds.left + B * 0.72983, t.bounds.top + B * 0.23),
                new I(t.bounds.left + B * 0.84, t.bounds.top + B * 0.34085),
                new I(t.bounds.left + B * 0.39363, t.bounds.top + B * 0.79)
              ]), this.ctx.fillStyle = BA(yi), this.ctx.fill(), this.ctx.restore()) : t.type === qt && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + B / 2, t.bounds.top + B / 2, B / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = BA(yi), this.ctx.fill(), this.ctx.restore())), xf(t) && t.value.length) {
                switch (u = this.createFontStyle(i), v = u[0], g = u[1], Q = this.fontMetrics.getMetrics(v, g).baseline, this.ctx.font = v, this.ctx.fillStyle = BA(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Kf(t.styles.textAlign), E = rr(t), d = 0, t.styles.textAlign) {
                  case 1:
                    d += E.width / 2;
                    break;
                  case 2:
                    d += E.width;
                    break;
                }
                p = E.add(d, 0, 0, -E.height / 2 + 1), this.ctx.save(), this.path([
                  new I(E.left, E.top),
                  new I(E.left + E.width, E.top),
                  new I(E.left + E.width, E.top + E.height),
                  new I(E.left, E.top + E.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new et(t.value, p), i.letterSpacing, Q), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!cA(t.styles.display, 2048)) return [
                3,
                20
              ];
              if (t.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (h = t.styles.listStyleImage, h.type !== 0) return [
                3,
                18
              ];
              C = void 0, U = h.url, w.label = 15;
            case 15:
              return w.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(U)
              ];
            case 16:
              return C = w.sent(), this.ctx.drawImage(C, t.bounds.left - (C.width + 10), t.bounds.top), [
                3,
                18
              ];
            case 17:
              return w.sent(), this.context.logger.error("Error loading list-style-image " + U), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              r.listValue && t.styles.listStyleType !== -1 && (v = this.createFontStyle(i)[0], this.ctx.font = v, this.ctx.fillStyle = BA(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", E = new zA(t.bounds.left, t.bounds.top + AA(t.styles.paddingTop, t.bounds.width), t.bounds.width, li(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new et(r.listValue, E), i.letterSpacing, li(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), w.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(r) {
      return FA(this, void 0, void 0, function() {
        var t, n, h, i, o, h, a, s, h, l, c, h, B, u, h, g, Q, h, d, p, h;
        return hA(this, function(C) {
          switch (C.label) {
            case 0:
              if (cA(r.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(r.element)
              ];
            case 1:
              C.sent(), t = 0, n = r.negativeZIndex, C.label = 2;
            case 2:
              return t < n.length ? (h = n[t], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                5
              ];
            case 3:
              C.sent(), C.label = 4;
            case 4:
              return t++, [
                3,
                2
              ];
            case 5:
              return [
                4,
                this.renderNodeContent(r.element)
              ];
            case 6:
              C.sent(), i = 0, o = r.nonInlineLevel, C.label = 7;
            case 7:
              return i < o.length ? (h = o[i], [
                4,
                this.renderNode(h)
              ]) : [
                3,
                10
              ];
            case 8:
              C.sent(), C.label = 9;
            case 9:
              return i++, [
                3,
                7
              ];
            case 10:
              a = 0, s = r.nonPositionedFloats, C.label = 11;
            case 11:
              return a < s.length ? (h = s[a], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                14
              ];
            case 12:
              C.sent(), C.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = r.nonPositionedInlineLevel, C.label = 15;
            case 15:
              return l < c.length ? (h = c[l], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                18
              ];
            case 16:
              C.sent(), C.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              B = 0, u = r.inlineLevel, C.label = 19;
            case 19:
              return B < u.length ? (h = u[B], [
                4,
                this.renderNode(h)
              ]) : [
                3,
                22
              ];
            case 20:
              C.sent(), C.label = 21;
            case 21:
              return B++, [
                3,
                19
              ];
            case 22:
              g = 0, Q = r.zeroOrAutoZIndexOrTransformedOrOpacity, C.label = 23;
            case 23:
              return g < Q.length ? (h = Q[g], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                26
              ];
            case 24:
              C.sent(), C.label = 25;
            case 25:
              return g++, [
                3,
                23
              ];
            case 26:
              d = 0, p = r.positiveZIndex, C.label = 27;
            case 27:
              return d < p.length ? (h = p[d], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                30
              ];
            case 28:
              C.sent(), C.label = 29;
            case 29:
              return d++, [
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
    }, A.prototype.mask = function(r) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(r.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(r) {
      this.ctx.beginPath(), this.formatPath(r), this.ctx.closePath();
    }, A.prototype.formatPath = function(r) {
      var t = this;
      r.forEach(function(n, i) {
        var o = LA(n) ? n.start : n;
        i === 0 ? t.ctx.moveTo(o.x, o.y) : t.ctx.lineTo(o.x, o.y), LA(n) && t.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(r, t, n, i) {
      this.path(r), this.ctx.fillStyle = t, this.ctx.translate(n, i), this.ctx.fill(), this.ctx.translate(-n, -i);
    }, A.prototype.resizeImage = function(r, t, n) {
      var i;
      if (r.width === t && r.height === n) return r;
      var o = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document, a = o.createElement("canvas");
      a.width = Math.max(1, t), a.height = Math.max(1, n);
      var s = a.getContext("2d");
      return s.drawImage(r, 0, 0, r.width, r.height, 0, 0, t, n), a;
    }, A.prototype.renderBackgroundImage = function(r) {
      return FA(this, void 0, void 0, function() {
        var t, n, i, o, a, s;
        return hA(this, function(l) {
          switch (l.label) {
            case 0:
              t = r.styles.backgroundImage.length - 1, n = function(c) {
                var B, u, g, K, W, k, M, _, y, Q, K, W, k, M, _, d, p, h, C, U, v, E, w, b, y, m, K, L, R, M, _, J, W, k, nA, P, eA, V, Y, F, x, T;
                return hA(this, function(O) {
                  switch (O.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      B = void 0, u = c.url, O.label = 1;
                    case 1:
                      return O.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        i.context.cache.match(u)
                      ];
                    case 2:
                      return B = O.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return O.sent(), i.context.logger.error("Error loading background-image " + u), [
                        3,
                        4
                      ];
                    case 4:
                      return B && (g = _r(r, t, [
                        B.width,
                        B.height,
                        B.width / B.height
                      ]), K = g[0], W = g[1], k = g[2], M = g[3], _ = g[4], y = i.ctx.createPattern(i.resizeImage(B, M, _), "repeat"), i.renderRepeat(K, y, W, k)), [
                        3,
                        6
                      ];
                    case 5:
                      dB(c) ? (Q = _r(r, t, [
                        null,
                        null,
                        null
                      ]), K = Q[0], W = Q[1], k = Q[2], M = Q[3], _ = Q[4], d = cB(c.angle, M, _), p = d[0], h = d[1], C = d[2], U = d[3], v = d[4], E = document.createElement("canvas"), E.width = M, E.height = _, w = E.getContext("2d"), b = w.createLinearGradient(h, U, C, v), ai(c.stops, p).forEach(function($) {
                        return b.addColorStop($.stop, BA($.color));
                      }), w.fillStyle = b, w.fillRect(0, 0, M, _), M > 0 && _ > 0 && (y = i.ctx.createPattern(E, "repeat"), i.renderRepeat(K, y, W, k))) : wB(c) && (m = _r(r, t, [
                        null,
                        null,
                        null
                      ]), K = m[0], L = m[1], R = m[2], M = m[3], _ = m[4], J = c.position.length === 0 ? [
                        vn
                      ] : c.position, W = AA(J[0], M), k = AA(J[J.length - 1], _), nA = BB(c, W, k, M, _), P = nA[0], eA = nA[1], P > 0 && eA > 0 && (V = i.ctx.createRadialGradient(L + W, R + k, 0, L + W, R + k, P), ai(c.stops, P * 2).forEach(function($) {
                        return V.addColorStop($.stop, BA($.color));
                      }), i.path(K), i.ctx.fillStyle = V, P !== eA ? (Y = r.bounds.left + 0.5 * r.bounds.width, F = r.bounds.top + 0.5 * r.bounds.height, x = eA / P, T = 1 / x, i.ctx.save(), i.ctx.translate(Y, F), i.ctx.transform(1, 0, 0, x, 0, 0), i.ctx.translate(-Y, -F), i.ctx.fillRect(L, T * (R - F) + F, M, _ * T), i.ctx.restore()) : i.ctx.fill())), O.label = 6;
                    case 6:
                      return t--, [
                        2
                      ];
                  }
                });
              }, i = this, o = 0, a = r.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [
                5,
                n(s)
              ]) : [
                3,
                4
              ];
            case 2:
              l.sent(), l.label = 3;
            case 3:
              return o++, [
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
    }, A.prototype.renderSolidBorder = function(r, t, n) {
      return FA(this, void 0, void 0, function() {
        return hA(this, function(i) {
          return this.path(ki(n, t)), this.ctx.fillStyle = BA(r), this.ctx.fill(), [
            2
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(r, t, n, i) {
      return FA(this, void 0, void 0, function() {
        var o, a;
        return hA(this, function(s) {
          switch (s.label) {
            case 0:
              return t < 3 ? [
                4,
                this.renderSolidBorder(r, n, i)
              ] : [
                3,
                2
              ];
            case 1:
              return s.sent(), [
                2
              ];
            case 2:
              return o = pf(i, n), this.path(o), this.ctx.fillStyle = BA(r), this.ctx.fill(), a = Uf(i, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(r) {
      return FA(this, void 0, void 0, function() {
        var t, n, i, o, a, s, l, c, B = this;
        return hA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(r.getEffects(2)), t = r.container.styles, n = !ae(t.backgroundColor) || t.backgroundImage.length, i = [
                {
                  style: t.borderTopStyle,
                  color: t.borderTopColor,
                  width: t.borderTopWidth
                },
                {
                  style: t.borderRightStyle,
                  color: t.borderRightColor,
                  width: t.borderRightWidth
                },
                {
                  style: t.borderBottomStyle,
                  color: t.borderBottomColor,
                  width: t.borderBottomWidth
                },
                {
                  style: t.borderLeftStyle,
                  color: t.borderLeftColor,
                  width: t.borderLeftWidth
                }
              ], o = Lf(He(t.backgroundClip, 0), r.curves), n || t.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), ae(t.backgroundColor) || (this.ctx.fillStyle = BA(t.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(r.container)
              ]) : [
                3,
                2
              ];
            case 1:
              u.sent(), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach(function(g) {
                B.ctx.save();
                var Q = er(r.curves), d = g.inset ? 0 : If, p = hf(Q, -d + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (B.path(Q), B.ctx.clip(), B.mask(p)) : (B.mask(Q), B.ctx.clip(), B.path(p)), B.ctx.shadowOffsetX = g.offsetX.number + d, B.ctx.shadowOffsetY = g.offsetY.number, B.ctx.shadowColor = BA(g.color), B.ctx.shadowBlur = g.blur.number, B.ctx.fillStyle = g.inset ? BA(g.color) : "rgba(0,0,0,1)", B.ctx.fill(), B.ctx.restore();
              }), u.label = 2;
            case 2:
              a = 0, s = 0, l = i, u.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !ae(c.color) && c.width > 0 ? c.style !== 2 ? [
                3,
                5
              ] : [
                4,
                this.renderDashedDottedBorder(c.color, c.width, a, r.curves, 2)
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
                this.renderDashedDottedBorder(c.color, c.width, a, r.curves, 3)
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
                this.renderDoubleBorder(c.color, c.width, a, r.curves)
              ];
            case 8:
              return u.sent(), [
                3,
                11
              ];
            case 9:
              return [
                4,
                this.renderSolidBorder(c.color, a, r.curves)
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
    }, A.prototype.renderDashedDottedBorder = function(r, t, n, i, o) {
      return FA(this, void 0, void 0, function() {
        var a, s, l, c, B, u, g, Q, d, p, h, C, U, v, E, w, E, w;
        return hA(this, function(b) {
          return this.ctx.save(), a = Ff(i, n), s = ki(i, n), o === 2 && (this.path(s), this.ctx.clip()), LA(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), LA(s[1]) ? (B = s[1].end.x, u = s[1].end.y) : (B = s[1].x, u = s[1].y), n === 0 || n === 2 ? g = Math.abs(l - B) : g = Math.abs(c - u), this.ctx.beginPath(), o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), Q = t < 3 ? t * 3 : t * 2, d = t < 3 ? t * 2 : t, o === 3 && (Q = t, d = t), p = true, g <= Q * 2 ? p = false : g <= Q * 2 + d ? (h = g / (2 * Q + d), Q *= h, d *= h) : (C = Math.floor((g + d) / (Q + d)), U = (g - C * Q) / (C - 1), v = (g - (C + 1) * Q) / C, d = v <= 0 || Math.abs(d - U) < Math.abs(d - v) ? U : v), p && (o === 3 ? this.ctx.setLineDash([
            0,
            Q + d
          ]) : this.ctx.setLineDash([
            Q,
            d
          ])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = BA(r), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (LA(s[0]) && (E = s[3], w = s[0], this.ctx.beginPath(), this.formatPath([
            new I(E.end.x, E.end.y),
            new I(w.start.x, w.start.y)
          ]), this.ctx.stroke()), LA(s[1]) && (E = s[1], w = s[2], this.ctx.beginPath(), this.formatPath([
            new I(E.end.x, E.end.y),
            new I(w.start.x, w.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, A.prototype.render = function(r) {
      return FA(this, void 0, void 0, function() {
        var t;
        return hA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = Cf(r), [
                4,
                this.renderStack(t)
              ];
            case 1:
              return n.sent(), this.applyEffects([]), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, A;
  })(sa), xf = function(e) {
    return e instanceof Xo || e instanceof Po ? true : e instanceof Hn && e.type !== qt && e.type !== zt;
  }, Lf = function(e, A) {
    switch (e) {
      case 0:
        return er(A);
      case 2:
        return gf(A);
      default:
        return tr(A);
    }
  }, Kf = function(e) {
    switch (e) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, Tf = [
    "-apple-system",
    "system-ui"
  ], Df = function(e) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
      return Tf.indexOf(A) === -1;
    }) : e;
  }, Of = (function(e) {
    kA(A, e);
    function A(r, t) {
      var n = e.call(this, r, t) || this;
      return n.canvas = t.canvas ? t.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = t, n.canvas.width = Math.floor(t.width * t.scale), n.canvas.height = Math.floor(t.height * t.scale), n.canvas.style.width = t.width + "px", n.canvas.style.height = t.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-t.x, -t.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale), n;
    }
    return A.prototype.render = function(r) {
      return FA(this, void 0, void 0, function() {
        var t, n;
        return hA(this, function(i) {
          switch (i.label) {
            case 0:
              return t = Bn(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, r), [
                4,
                Mf(t)
              ];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, A;
  })(sa), Mf = function(e) {
    return new Promise(function(A, r) {
      var t = new Image();
      t.onload = function() {
        A(t);
      }, t.onerror = r, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
    });
  }, kf = (function() {
    function e(A) {
      var r = A.id, t = A.enabled;
      this.id = r, this.enabled = t, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], r = 0; r < arguments.length; r++) A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, wt([
        this.id,
        this.getTime() + "ms"
      ], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], r = 0; r < arguments.length; r++) A[r] = arguments[r];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, wt([
        this.id,
        this.getTime() + "ms"
      ], A));
    }, e.prototype.warn = function() {
      for (var A = [], r = 0; r < arguments.length; r++) A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, wt([
        this.id,
        this.getTime() + "ms"
      ], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], r = 0; r < arguments.length; r++) A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, wt([
        this.id,
        this.getTime() + "ms"
      ], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  })(), Gf = (function() {
    function e(A, r) {
      var t;
      this.windowBounds = r, this.instanceName = "#" + e.instanceCount++, this.logger = new kf({
        id: this.instanceName,
        enabled: A.logging
      }), this.cache = (t = A.cache) !== null && t !== void 0 ? t : new nf(this, A);
    }
    return e.instanceCount = 1, e;
  })(), Rf = function(e, A) {
    return A === void 0 && (A = {}), Vf(e, A);
  };
  typeof window < "u" && ta.setContext(window);
  var Vf = function(e, A) {
    return FA(void 0, void 0, void 0, function() {
      var r, t, n, i, o, a, s, l, c, B, u, g, Q, d, p, h, C, U, v, E, b, w, b, y, m, K, L, R, M, _, J, W, k, nA, P, eA, V, Y, F, x;
      return hA(this, function(T) {
        switch (T.label) {
          case 0:
            if (!e || typeof e != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (r = e.ownerDocument, !r) throw new Error("Element is not attached to a Document");
            if (t = r.defaultView, !t) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (y = A.allowTaint) !== null && y !== void 0 ? y : false,
              imageTimeout: (m = A.imageTimeout) !== null && m !== void 0 ? m : 15e3,
              proxy: A.proxy,
              useCORS: (K = A.useCORS) !== null && K !== void 0 ? K : false
            }, i = Zr({
              logging: (L = A.logging) !== null && L !== void 0 ? L : true,
              cache: A.cache
            }, n), o = {
              windowWidth: (R = A.windowWidth) !== null && R !== void 0 ? R : t.innerWidth,
              windowHeight: (M = A.windowHeight) !== null && M !== void 0 ? M : t.innerHeight,
              scrollX: (_ = A.scrollX) !== null && _ !== void 0 ? _ : t.pageXOffset,
              scrollY: (J = A.scrollY) !== null && J !== void 0 ? J : t.pageYOffset
            }, a = new zA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), s = new Gf(i, a), l = (W = A.foreignObjectRendering) !== null && W !== void 0 ? W : false, c = {
              allowTaint: (k = A.allowTaint) !== null && k !== void 0 ? k : false,
              onclone: A.onclone,
              ignoreElements: A.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), B = new Di(s, e, c), u = B.clonedReferenceElement, u ? [
              4,
              B.toIFrame(r, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return g = T.sent(), Q = bn(u) || Vg(u) ? Ql(u.ownerDocument) : ar(s, u), d = Q.width, p = Q.height, h = Q.left, C = Q.top, U = _f(s, u, A.backgroundColor), v = {
              canvas: A.canvas,
              backgroundColor: U,
              scale: (P = (nA = A.scale) !== null && nA !== void 0 ? nA : t.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((eA = A.x) !== null && eA !== void 0 ? eA : 0) + h,
              y: ((V = A.y) !== null && V !== void 0 ? V : 0) + C,
              width: (Y = A.width) !== null && Y !== void 0 ? Y : Math.ceil(d),
              height: (F = A.height) !== null && F !== void 0 ? F : Math.ceil(p)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), b = new Of(s, v), [
              4,
              b.render(u)
            ]) : [
              3,
              3
            ];
          case 2:
            return E = T.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + h + "," + C + " with size " + d + "x" + p + " using computed rendering"), s.logger.debug("Starting DOM parsing"), w = Yo(s, u), U === w.styles.backgroundColor && (w.styles.backgroundColor = ZA.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), b = new Sf(s, v), [
              4,
              b.render(w)
            ];
          case 4:
            E = T.sent(), T.label = 5;
          case 5:
            return (!((x = A.removeContainer) !== null && x !== void 0) || x) && (Di.destroy(g) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              E
            ];
        }
      });
    });
  }, _f = function(e, A, r) {
    var t = A.ownerDocument, n = t.documentElement ? $e(e, getComputedStyle(t.documentElement).backgroundColor) : ZA.TRANSPARENT, i = t.body ? $e(e, getComputedStyle(t.body).backgroundColor) : ZA.TRANSPARENT, o = typeof r == "string" ? $e(e, r) : r === null ? ZA.TRANSPARENT : 4294967295;
    return A === t.documentElement ? ae(n) ? ae(i) ? o : i : n : o;
  }, Nr = {
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
  }, uA = function() {
    return uA = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, uA.apply(this, arguments);
  }, Nf = {
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
  }, Pf = function(e, A) {
    var r = uA({}, Nf);
    if (e) for (var t in Nr) Object.prototype.hasOwnProperty.call(Nr, t) && (r[t] = uA(uA({}, Object.prototype.hasOwnProperty.call(r, t) ? r[t] : {}), Nr[t]));
    for (var t in A) Object.prototype.hasOwnProperty.call(A, t) && (r[t] = uA(uA({}, Object.prototype.hasOwnProperty.call(r, t) ? r[t] : {}), A[t]));
    return r;
  }, Ri = function(e, A) {
    return e ? uA(uA({}, A.rbgcpControlBtn), A.rbgcpControlBtnSelected) : uA({}, A.rbgcpControlBtn);
  }, rt = function(e, A) {
    return e ? uA(uA({}, A.rbgcpControlIconBtn), A.rbgcpControlBtnSelected) : uA({}, A.rbgcpControlIconBtn);
  }, Gt = function(e, A) {
    return e ? uA(uA(uA({}, A.rbgcpControlBtn), A.rbgcpColorModelDropdownBtn), A.rbgcpControlBtnSelected) : uA(uA({}, A.rbgcpControlBtn), A.rbgcpColorModelDropdownBtn);
  }, VA = function() {
    return VA = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, VA.apply(this, arguments);
  }, Xf = function(e) {
    var A = e.color, r = j().defaultStyles, t = A ?? "";
    return f.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: VA(VA({
        fill: "none",
        strokeWidth: "1.4px"
      }, r.rbgcpControlIcon), t && {
        stroke: t
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), f.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: VA(VA({
        strokeWidth: "1.4px"
      }, r.rbgcpControlIcon2), t && {
        stroke: t,
        fill: t
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: VA(VA({
        strokeWidth: "1.4px"
      }, r.rbgcpControlIcon2), t && {
        stroke: t,
        fill: t
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, Jf = function(e) {
    var A = e.onSelect, r = j().defaultStyles, t = H.useState(null), n = t[0], i = t[1], o = H.useState(false), a = o[0], s = o[1], l = H.useState(false), c = l[0], B = l[1], u = function() {
      var d = document.getElementById("root");
      s(true), Rf(d).then(function(p) {
        var h = document.createElement("canvas"), C = h.getContext("2d", {
          willReadFrequently: true
        });
        d && C && (h.width = d.offsetWidth * 2, h.height = d.offsetHeight * 2, C.drawImage(p, 0, 0)), i(C);
      });
    }, g = function(d) {
      if (d.stopPropagation(), n) {
        var p = d.pageX, h = d.pageY, C = p * 2, U = h * 2, v = n.getImageData(C, U, 1, 1).data;
        A("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      B(false), s(false);
    }, Q = function() {
      if (B(true), !window.EyeDropper) u();
      else {
        var d = new window.EyeDropper(), p = new window.AbortController();
        d.open({
          signal: p.signal
        }).then(function(h) {
          var C = wA(h.sRGBHex), U = C.toRgb(), v = U.r, E = U.g, w = U.b;
          A("rgba(".concat(v, ", ").concat(E, ", ").concat(w, ", 1)")), B(false);
        }).catch(function(h) {
          console.log(h), B(false);
        });
      }
    };
    return f.createElement("div", null, f.createElement("div", {
      onClick: Q,
      id: "rbgcp-eyedropper-btn",
      style: VA(VA({}, r.rbgcpEyedropperBtn), rt(a, r))
    }, f.createElement(Xf, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && f.createElement(wl, null, f.createElement("div", {
      onClick: function(d) {
        return g(d);
      },
      style: r.rbgcpEyedropperCover
    })));
  }, hn = function() {
    return hn = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, hn.apply(this, arguments);
  }, Pr = function(e) {
    var A = e.value, r = e.reffy, t = e.label, n = e.config, i = e.callback, o = e.squareWidth, a = e.openAdvanced, s = e.defaultStyles, l = e.pickerIdSuffix, c = n.barSize, B = H.useState(false), u = B[0], g = B[1], Q = H.useState(2), d = Q[0], p = Q[1], h = A * (o - 18);
    H.useEffect(function() {
      var w;
      p(((w = r == null ? void 0 : r.current) === null || w === void 0 ? void 0 : w.offsetTop) - 2);
    }, [
      a,
      r
    ]);
    var C = function() {
      g(false);
    }, U = function(w) {
      u && i(Te(w, c));
    }, v = function(w) {
      u || i(Te(w, c));
    }, E = function() {
      g(true);
    };
    return H.useEffect(function() {
      var w = function() {
        C();
      };
      return window.addEventListener("mouseup", w), function() {
        window.removeEventListener("mouseup", w);
      };
    }, []), f.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, f.createElement("div", {
      onMouseMove: function(w) {
        return U(w);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(t, "-wrapper").concat(l)
    }, f.createElement("div", {
      style: hn({
        left: h,
        top: d
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(t, "-handle").concat(l),
      onMouseDown: E,
      role: "button",
      tabIndex: 0
    }), f.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: d + 2,
        zIndex: 10,
        textShadow: "1px 1px 1px rgba(0,0,0,.6)"
      },
      id: "rbgcp-advanced-bar-".concat(t, "-label").concat(l),
      onMouseMove: function(w) {
        return U(w);
      },
      onClick: function(w) {
        return v(w);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, t), f.createElement("canvas", {
      ref: r,
      height: "14px",
      width: "".concat(o, "px"),
      onClick: function(w) {
        return v(w);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(t, "-canvas").concat(l)
    })));
  }, Wf = function(e) {
    var A = e.openAdvanced, r = j(), t = r.config, n = r.tinyColor, i = r.handleChange, o = r.squareWidth, a = r.hc, s = r.defaultStyles, l = r.pickerIdSuffix, c = n.toHsl(), B = c.s, u = c.l, g = H.useRef(null), Q = H.useRef(null), d = H.useRef(null);
    vs(g, a == null ? void 0 : a.h, u * 100, o), ms(Q, a == null ? void 0 : a.h, B * 100, o), Es(d, a == null ? void 0 : a.h, B * 100, o);
    var p = function(U) {
      var v = wA({
        h: a == null ? void 0 : a.h,
        s: U / 100,
        l: u
      }).toRgb(), E = v.r, w = v.g, b = v.b;
      i("rgba(".concat(E, ",").concat(w, ",").concat(b, ",").concat(a == null ? void 0 : a.a, ")"));
    }, h = function(U) {
      var v = wA({
        h: a == null ? void 0 : a.h,
        s: B,
        l: U / 100
      }).toRgb(), E = v.r, w = v.g, b = v.b;
      i("rgba(".concat(E, ",").concat(w, ",").concat(b, ",").concat(a == null ? void 0 : a.a, ")"));
    }, C = function(U) {
      var v = wA({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: U
      }).toRgb(), E = v.r, w = v.g, b = v.b;
      i("rgba(".concat(E, ",").concat(w, ",").concat(b, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return f.createElement("div", {
      style: {
        width: "100%",
        height: A ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, f.createElement("div", {
      style: {
        paddingTop: 11,
        display: A ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-between",
        height: A ? 98 : 0,
        overflow: "hidden",
        transition: "height 100ms linear"
      },
      id: "rbgcp-advanced-controls-inner".concat(l)
    }, f.createElement(Pr, {
      value: B,
      reffy: g,
      config: t,
      label: "Saturation",
      callback: p,
      squareWidth: o,
      openAdvanced: A,
      defaultStyles: s,
      pickerIdSuffix: l
    }), f.createElement(Pr, {
      value: u,
      config: t,
      reffy: Q,
      label: "Lightness",
      callback: h,
      squareWidth: o,
      openAdvanced: A,
      defaultStyles: s,
      pickerIdSuffix: l
    }), f.createElement(Pr, {
      value: a == null ? void 0 : a.v,
      config: t,
      reffy: d,
      label: "Brightness",
      callback: C,
      squareWidth: o,
      openAdvanced: A,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, fe = function() {
    return fe = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, fe.apply(this, arguments);
  }, Yf = function(e) {
    var A = e.openComparibles, r = j(), t = r.tinyColor, n = r.handleChange, i = r.defaultStyles, o = r.pickerIdSuffix, a = t.analogous(), s = t.monochromatic(), l = t.triad(), c = t.tetrad(), B = function(u) {
      var g = u.toRgb(), Q = g.r, d = g.g, p = g.b, h = g.a;
      n("rgba(".concat(Q, ",").concat(d, ",").concat(p, ",").concat(h, ")"));
    };
    return f.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: A ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(o)
    }, f.createElement("div", {
      style: {
        paddingTop: 11,
        display: A ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(o)
    }, f.createElement("div", {
      style: fe({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, i.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(o)
    }, "Color Guide"), f.createElement("div", {
      style: fe({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, i.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(o)
    }, "Analogous"), f.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(o)
    }, a == null ? void 0 : a.map(function(u, g) {
      return f.createElement("div", {
        key: g,
        id: "rbgcp-comparible-analogous-color-".concat(g).concat(o),
        style: {
          width: "20%",
          height: 30,
          background: u.toHexString()
        },
        onClick: function() {
          return B(u);
        }
      });
    })), f.createElement("div", {
      style: fe({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, i.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(o)
    }, "Monochromatic"), f.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(o)
    }, s == null ? void 0 : s.map(function(u, g) {
      return f.createElement("div", {
        key: g,
        id: "rbgcp-comparible-monochromatic-color-".concat(g).concat(o),
        style: {
          width: "20%",
          height: 30,
          background: u.toHexString()
        },
        onClick: function() {
          return B(u);
        }
      });
    })), f.createElement("div", {
      style: fe({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, i.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(o)
    }, "Triad"), f.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(o)
    }, l == null ? void 0 : l.map(function(u, g) {
      return f.createElement("div", {
        key: g,
        id: "rbgcp-comparible-triad-color-".concat(g).concat(o),
        style: {
          width: "calc(100% / 3)",
          height: 28,
          background: u.toHexString()
        },
        onClick: function() {
          return B(u);
        }
      });
    })), f.createElement("div", {
      style: fe({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, i.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(o)
    }, "Tetrad"), f.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(o)
    }, c == null ? void 0 : c.map(function(u, g) {
      return f.createElement("div", {
        key: g,
        id: "rbgcp-comparible-tetrad-color-".concat(g).concat(o),
        style: {
          width: "25%",
          height: 28,
          background: u.toHexString()
        },
        onClick: function() {
          return B(u);
        }
      });
    }))));
  }, tA = function() {
    return tA = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, tA.apply(this, arguments);
  }, Zf = function() {
    var e = j(), A = e.gradientType, r = e.onChange, t = e.value, n = e.defaultStyles, i = e.pickerIdSuffix, o = A === "linear-gradient", a = A === "radial-gradient", s = function() {
      var c = t.split(/,(.+)/)[1];
      r("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = t.split(/,(.+)/)[1];
      r("radial-gradient(circle, ".concat(c));
    };
    return f.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, f.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(i),
      style: tA(tA({}, n.rbgcpControlBtn), o && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, f.createElement(sl, {
      color: o ? "#568CF5" : ""
    })), f.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(i),
      style: tA(tA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, f.createElement(ll, {
      color: a ? "#568CF5" : ""
    })));
  }, jf = function() {
    var e = j(), A = e.currentLeft, r = e.currentColor, t = e.defaultStyles, n = e.handleGradient, i = e.pickerIdSuffix, o = function(a) {
      n(r, Ke(parseInt(a), 0, 100));
    };
    return f.createElement("div", {
      style: tA(tA(tA(tA({}, t.rbgcpControlBtnWrapper), t.rbgcpControlInputWrap), t.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(i)
    }, f.createElement(fl, null), f.createElement("input", {
      value: A,
      id: "rbgcp-stop-input".concat(i),
      onChange: function(a) {
        return o(a.target.value);
      },
      style: tA(tA({}, t.rbgcpControlInput), t.rbgcpStopInput)
    }));
  }, zf = function() {
    var e = j(), A = e.degrees, r = e.onChange, t = e.value, n = e.defaultStyles, i = e.pickerIdSuffix, o = function(a) {
      var s = Ke(a.target.value, 0, 360), l = t.split(/,(.+)/)[1];
      r("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return f.createElement("div", {
      style: tA(tA(tA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(i)
    }, f.createElement(gl, null), f.createElement("input", {
      value: A,
      onChange: function(a) {
        return o(a);
      },
      id: "rbgcp-degree-input".concat(i),
      style: tA(tA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), f.createElement("div", {
      style: tA(tA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: A > 99 ? 0 : A < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, qf = function() {
    var e = j(), A = e.colors, r = e.selectedColor, t = e.createGradientStr, n = e.defaultStyles, i = e.pickerIdSuffix, o = function() {
      if ((A == null ? void 0 : A.length) > 2) {
        var a = A == null ? void 0 : A.map(function(l, c) {
          return tA(tA({}, l), {
            value: c === r - 1 ? or(l) : lt(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== r;
        });
        t(s);
      }
    };
    return f.createElement("div", {
      onClick: o,
      style: tA(tA({}, rt(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(i),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, f.createElement(al, null));
  }, Vi = function(e) {
    var A = e.hideGradientType, r = e.hideGradientAngle, t = e.hideGradientStop, n = j(), i = n.gradientType, o = n.defaultStyles, a = n.pickerIdSuffix;
    return f.createElement("div", {
      style: tA(tA({}, o.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: A ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !A && f.createElement(Zf, null), f.createElement("div", {
      style: {
        width: 53
      }
    }, !r && i === "linear-gradient" && f.createElement(zf, null)), !t && f.createElement(jf, null), f.createElement(qf, null));
  }, at = function() {
    return at = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, at.apply(this, arguments);
  }, $f = function(e) {
    var A, r, t = e.hideColorTypeBtns, n = e.setGradient, i = e.isGradient, o = e.setSolid, a = e.locales, s = j(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return t ? f.createElement("div", {
      style: {
        width: 1
      }
    }) : f.createElement("div", {
      style: at({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, f.createElement("div", {
      onClick: o,
      id: "rbgcp-solid-btn".concat(c),
      style: Ri(!i, l)
    }, (A = a == null ? void 0 : a.CONTROLS) === null || A === void 0 ? void 0 : A.SOLID), f.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Ri(i ?? false, l)
    }, (r = a == null ? void 0 : a.CONTROLS) === null || r === void 0 ? void 0 : r.GRADIENT));
  }, Ad = function(e) {
    var A = e.openInputType, r = e.setOpenInputType, t = j(), n = t.inputType, i = t.setInputType, o = t.defaultStyles, a = t.pickerIdSuffix, s = A ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = A ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = A ? "opacity 120ms linear" : "opacity 150ms linear 50ms", B = function(u, g) {
      A && (u.stopPropagation(), i(g), r(false));
    };
    return f.createElement("div", {
      style: at({
        visibility: A ? "visible" : "hidden",
        zIndex: A ? "" : -100,
        opacity: A ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, o.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, f.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(u) {
        return B(u, "rgb");
      },
      style: Gt(n === "rgb", o)
    }, "RGB"), f.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(u) {
        return B(u, "hsl");
      },
      style: Gt(n === "hsl", o)
    }, "HSL"), f.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(u) {
        return B(u, "hsv");
      },
      style: Gt(n === "hsv", o)
    }, "HSV"), f.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(u) {
        return B(u, "cmyk");
      },
      style: Gt(n === "cmyk", o)
    }, "CMYK"));
  }, ed = function(e) {
    var A, r, t = e.locales, n = e.hideEyeDrop, i = n === void 0 ? false : n, o = e.hideAdvancedSliders, a = o === void 0 ? false : o, s = e.hideColorGuide, l = s === void 0 ? false : s, c = e.hideInputType, B = c === void 0 ? false : c, u = e.hideColorTypeBtns, g = u === void 0 ? false : u, Q = e.hideGradientControls, d = Q === void 0 ? false : Q, p = e.hideGradientType, h = p === void 0 ? false : p, C = e.hideGradientAngle, U = C === void 0 ? false : C, v = e.hideGradientStop, E = v === void 0 ? false : v, w = j(), b = w.config, y = w.onChange, m = w.isGradient, K = w.handleChange, L = w.previous, R = w.defaultStyles, M = w.pickerIdSuffix, _ = b.defaultColor, J = b.defaultGradient, W = H.useState(false), k = W[0], nA = W[1], P = H.useState(false), eA = P[0], V = P[1], Y = H.useState(false), F = Y[0], x = Y[1], T = i && a && l && B, O = (A = L == null ? void 0 : L.color) !== null && A !== void 0 ? A : _, $ = (r = L == null ? void 0 : L.gradient) !== null && r !== void 0 ? r : J, N = function() {
      y(O);
    }, z = function() {
      y($);
    }, q = i && a && l && B, fA = q && g;
    return fA ? m && !d ? f.createElement(Vi, {
      hideGradientType: h,
      hideGradientAngle: U,
      hideGradientStop: E
    }) : null : f.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, f.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(M)
    }, f.createElement($f, {
      hideColorTypeBtns: g,
      setGradient: z,
      isGradient: m,
      setSolid: N,
      locales: t
    }), !q && f.createElement("div", {
      style: at({
        display: T ? "none" : ""
      }, R.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(M)
    }, !i && f.createElement(Jf, {
      onSelect: K
    }), !a && f.createElement("div", {
      id: "rbgcp-advanced-btn".concat(M),
      onClick: function() {
        return x(!F);
      },
      style: rt(F, R)
    }, f.createElement(cl, {
      color: F ? "#568CF5" : ""
    })), !l && f.createElement("div", {
      style: rt(k, R),
      onClick: function() {
        return nA(!k);
      },
      id: "rbgcp-comparibles-btn".concat(M)
    }, f.createElement(ul, {
      color: k ? "#568CF5" : ""
    })), !B && f.createElement("div", {
      id: "rbgcp-color-model-btn".concat(M),
      onClick: function() {
        return V(!eA);
      },
      style: rt(eA, R)
    }, f.createElement(Bl, {
      color: eA ? "#568CF5" : ""
    }), f.createElement(Ad, {
      openInputType: eA,
      setOpenInputType: V
    })))), !a && f.createElement(Wf, {
      openAdvanced: F
    }), !l && f.createElement(Yf, {
      openComparibles: k
    }), m && !d && f.createElement(Vi, {
      hideGradientType: h,
      hideGradientAngle: U,
      hideGradientStop: E
    }));
  }, _A = function() {
    return _A = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, _A.apply(this, arguments);
  }, _i = function(e, A, r) {
    if (r || arguments.length === 2) for (var t = 0, n = A.length, i; t < n; t++) (i || !(t in A)) && (i || (i = Array.prototype.slice.call(A, 0, t)), i[t] = A[t]);
    return e.concat(i || Array.prototype.slice.call(A));
  }, td = function(e) {
    var A = e.left, r = e.i, t = e.setDragging, n = j(), i = n.colors, o = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, B = a === r, u = (o - 18) / 100, g = function(d) {
      var p = i == null ? void 0 : i.map(function(h, C) {
        return _A(_A({}, h), {
          value: C === d ? or(h) : lt(h)
        });
      });
      c(p);
    }, Q = function(d) {
      d.stopPropagation(), g(r), t(true);
    };
    return f.createElement("div", {
      onMouseDown: function(d) {
        return Q(d);
      },
      id: "rbgcp-gradient-handle-".concat(r).concat(l),
      style: _A(_A({}, s.rbgcpGradientHandleWrap), {
        left: (A ?? 0) * u
      })
    }, f.createElement("div", {
      style: _A(_A({}, s.rbgcpGradientHandle), B ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(r, "-dot").concat(l)
    }, B && f.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(r, "-selected-dot").concat(l)
    })));
  }, rd = function() {
    var e = j(), A = e.value, r = e.colors, t = e.config, n = e.squareWidth, i = e.currentColor, o = e.handleGradient, a = e.pickerIdSuffix, s = e.createGradientStr, l = t.barSize, c = H.useState(false), B = c[0], u = c[1];
    function g(U) {
      return U.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var Q = function(U) {
      var v, E = Te(U, l), w = (v = _i(_i([], r.map(function(b) {
        return _A(_A({}, b), {
          value: lt(b)
        });
      }), true), [
        {
          value: i,
          left: E
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(b, y) {
        return b.left - y.left;
      });
      s(w);
    }, d = function() {
      u(false);
    }, p = function(U) {
      B || (Q(U), u(true));
    }, h = function(U) {
      B && o(i, Te(U, l));
    }, C = function() {
      d();
    };
    return H.useEffect(function() {
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }), f.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, f.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: g(A)
      },
      onMouseDown: function(U) {
        return p(U);
      },
      onMouseMove: function(U) {
        return h(U);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), r == null ? void 0 : r.map(function(U, v) {
      return f.createElement(td, {
        i: v,
        left: U.left,
        key: "".concat(v, "-").concat(U),
        setDragging: u
      });
    }));
  }, nd = function(e) {
    var A = e.locales, r = e.presets, t = e.hideHue, n = e.hideInputs, i = e.hidePresets, o = e.hideOpacity, a = e.hideEyeDrop, s = e.hideControls, l = e.hideInputType, c = e.hideColorGuide, B = e.hidePickerSquare, u = e.hideGradientType, g = e.hideGradientStop, Q = e.hideGradientAngle, d = e.hideColorTypeBtns, p = e.hideAdvancedSliders, h = e.hideGradientControls, C = j(), U = C.isGradient, v = C.pickerIdSuffix;
    return f.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !B && f.createElement(tl, null), !s && f.createElement(ed, {
      locales: A,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: u,
      hideGradientStop: g,
      hideColorTypeBtns: d,
      hideGradientAngle: Q,
      hideAdvancedSliders: p,
      hideGradientControls: h
    }), U && f.createElement(rd, null), !t && f.createElement(ys, null), !o && f.createElement(rl, null), !n && f.createElement(Ds, null), !i && f.createElement(ol, {
      presets: r
    }));
  }, nr = function() {
    return nr = Object.assign || function(e) {
      for (var A, r = 1, t = arguments.length; r < t; r++) {
        A = arguments[r];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
      }
      return e;
    }, nr.apply(this, arguments);
  };
  bd = function(e) {
    var A = e.idSuffix, r = e.value, t = r === void 0 ? "rgba(175, 51, 242, 1)" : r, n = e.onChange, i = e.hideControls, o = i === void 0 ? false : i, a = e.hideInputs, s = a === void 0 ? false : a, l = e.hideOpacity, c = l === void 0 ? false : l, B = e.hidePresets, u = B === void 0 ? false : B, g = e.hideHue, Q = g === void 0 ? false : g, d = e.presets, p = d === void 0 ? [] : d, h = e.hideEyeDrop, C = h === void 0 ? false : h, U = e.hideAdvancedSliders, v = U === void 0 ? false : U, E = e.hideColorGuide, w = E === void 0 ? false : E, b = e.hideInputType, y = b === void 0 ? false : b, m = e.hideColorTypeBtns, K = m === void 0 ? false : m, L = e.hideGradientType, R = L === void 0 ? false : L, M = e.hideGradientAngle, _ = M === void 0 ? false : M, J = e.hideGradientStop, W = J === void 0 ? false : J, k = e.hideGradientControls, nA = k === void 0 ? false : k, P = e.locales, eA = P === void 0 ? nl : P, V = e.width, Y = V === void 0 ? 294 : V, F = e.height, x = F === void 0 ? 294 : F, T = e.style, O = T === void 0 ? {} : T, $ = e.className, N = e.disableDarkMode, z = N === void 0 ? false : N, q = e.disableLightMode, fA = q === void 0 ? false : q, vA = e.hidePickerSquare, he = vA === void 0 ? false : vA, Me = e.showHexAlpha, Qr = Me === void 0 ? false : Me, ke = e.config, Ge = ke === void 0 ? {} : ke, mA = ws(t), le = typeof window > "u" || z ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || fA), qA = Pf(le, O), hr = le ? "-dark".concat(A ? "-".concat(A) : "") : A ? "-".concat(A) : "";
    return f.createElement("div", {
      className: $,
      style: nr(nr({}, qA.body), {
        width: Y
      })
    }, f.createElement(Us, {
      value: mA,
      onChange: n,
      squareWidth: Y,
      passedConfig: Ge,
      squareHeight: x,
      isDarkMode: le,
      hideOpacity: c,
      showHexAlpha: Qr,
      defaultStyles: qA,
      pickerIdSuffix: hr
    }, f.createElement(nd, {
      hideControls: o,
      hideInputs: s,
      hidePresets: u,
      hideOpacity: c,
      hideHue: Q,
      presets: p,
      hideEyeDrop: C,
      hideAdvancedSliders: v,
      hideColorGuide: w,
      hideInputType: y,
      hideColorTypeBtns: K,
      hideGradientType: R,
      hideGradientAngle: _,
      hideGradientStop: W,
      hideGradientControls: nA,
      hidePickerSquare: he,
      locales: eA
    })));
  };
  function Ni(e) {
    const A = e.getBoundingClientRect();
    return {
      above: A.top,
      below: window.innerHeight - A.bottom
    };
  }
  Id = function(e, A, r = 16) {
    const [t, n] = H.useState("bottom"), i = H.useMemo(() => `calc(100vh - ${2 * r}px)`, [
      r
    ]), o = H.useRef("bottom"), a = H.useRef(null), s = H.useRef(null), l = H.useCallback((d) => {
      o.current = d, n(d);
    }, []), c = H.useCallback((d) => {
      if (!e) return;
      const { above: p, below: h } = Ni(e), C = o.current;
      if (d !== void 0) {
        const U = C === "bottom" ? h : p, v = C === "bottom" ? p : h;
        if (d <= U - r) return;
        v > U && l(C === "bottom" ? "top" : "bottom");
      } else l(p > h ? "top" : "bottom");
    }, [
      e,
      r,
      l
    ]);
    H.useEffect(() => {
      if (!A || !e) return;
      const { above: d, below: p } = Ni(e);
      l(d > p ? "top" : "bottom");
    }, [
      A,
      e,
      l
    ]), H.useEffect(() => {
      if (!A || !e) return;
      const d = () => c();
      return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
    }, [
      A,
      e,
      c
    ]);
    const [, B] = H.useState({}), u = H.useCallback((d) => {
      a.current = d, B({});
    }, []);
    return H.useEffect(() => {
      if (!A || !a.current) return;
      let d = null;
      const p = new ResizeObserver((h) => {
        d !== null && cancelAnimationFrame(d), d = requestAnimationFrame(() => {
          var _a2;
          d = null, (_a2 = s.current) == null ? void 0 : _a2.updatePosition(), h.length > 0 && c(h[0].contentRect.height);
        });
      });
      return p.observe(a.current), () => {
        d !== null && cancelAnimationFrame(d), p.disconnect();
      };
    }, [
      A,
      c
    ]), {
      anchorOrigin: t === "bottom" ? {
        vertical: "bottom",
        horizontal: "center"
      } : {
        vertical: "top",
        horizontal: "center"
      },
      transformOrigin: t === "bottom" ? {
        vertical: "top",
        horizontal: "center"
      } : {
        vertical: "bottom",
        horizontal: "center"
      },
      maxHeight: i,
      setContentRef: u,
      popoverActionRef: s
    };
  };
});
export {
  Ud as B,
  bd as C,
  ir as F,
  cd as G,
  Fd as S,
  ld as T,
  Bd as V,
  __tla,
  ud as a,
  Pt as b,
  vd as c,
  fd as d,
  pd as e,
  dd as f,
  gd as g,
  hd as h,
  yd as i,
  Qd as j,
  Wa as k,
  Ed as l,
  ka as m,
  ji as n,
  md as r,
  wd as s,
  Id as u,
  Hd as v,
  Cd as w
};
