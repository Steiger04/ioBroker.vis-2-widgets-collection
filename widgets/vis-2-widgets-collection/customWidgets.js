const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/EchartsCollectionWidget-CwVPC11B.css"])))=>i.map(i=>d[i]);
import { _ as I } from "./assets/vite-preload-helper-PPVm8Dsz.js";
import { i as pt } from "./assets/index-ClTfM_aW.js";
import { s as ht } from "./assets/helpers-B83jYK9m.js";
import { __tla as __tla_0 } from "./assets/index-D2CMitn6.js";
let Wt, xt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const gt = {}, We = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Map();
  function W(i, s) {
    let a = ge.get(i);
    return a || (a = Promise.resolve().then(s).catch((p) => {
      throw ge.delete(i), p;
    }), ge.set(i, a)), a;
  }
  async function L(i) {
    if (typeof document > "u") return;
    const s = gt[i] || [];
    await Promise.all(s.map((a) => {
      const p = new URL(a, import.meta.url).href;
      return We.has(p) || (We.add(p), document.querySelector(`link[rel="stylesheet"][href="${p}"]`)) ? Promise.resolve() : new Promise((O, T) => {
        const S = document.createElement("link");
        S.rel = "stylesheet", S.href = p, S.onload = () => O(), S.onerror = () => T(new Error(`[Module Federation] Failed to load CSS asset: ${p}`)), document.head.appendChild(S);
      });
    }));
  }
  const yt = {
    "./StateCollectionWidget": async () => {
      await L("./StateCollectionWidget"), await Promise.all([]);
      const i = await W("./StateCollectionWidget", () => I(() => import("./assets/StateCollectionWidget-DYfMV3wB.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./SliderCollectionWidget": async () => {
      await L("./SliderCollectionWidget"), await Promise.all([]);
      const i = await W("./SliderCollectionWidget", () => I(() => import("./assets/SliderCollectionWidget-C3SKGU4n.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./InputCollectionWidget": async () => {
      await L("./InputCollectionWidget"), await Promise.all([]);
      const i = await W("./InputCollectionWidget", () => I(() => import("./assets/InputCollectionWidget-CXq7XTD5.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./ButtonGroupCollectionWidget": async () => {
      await L("./ButtonGroupCollectionWidget"), await Promise.all([]);
      const i = await W("./ButtonGroupCollectionWidget", () => I(() => import("./assets/ButtonGroupCollectionWidget-DoT6f1PA.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./SwitchCollectionWidget": async () => {
      await L("./SwitchCollectionWidget"), await Promise.all([]);
      const i = await W("./SwitchCollectionWidget", () => I(() => import("./assets/SwitchCollectionWidget-dFZSIIRl.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./CheckboxCollectionWidget": async () => {
      await L("./CheckboxCollectionWidget"), await Promise.all([]);
      const i = await W("./CheckboxCollectionWidget", () => I(() => import("./assets/CheckboxCollectionWidget-BaB6uvpm.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./DialogCollectionWidget": async () => {
      await L("./DialogCollectionWidget"), await Promise.all([]);
      const i = await W("./DialogCollectionWidget", () => I(() => import("./assets/DialogCollectionWidget-DfWreeRT.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./SelectCollectionWidget": async () => {
      await L("./SelectCollectionWidget"), await Promise.all([]);
      const i = await W("./SelectCollectionWidget", () => I(() => import("./assets/SelectCollectionWidget-Cn9Dr_K8.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./RadioGroupCollectionWidget": async () => {
      await L("./RadioGroupCollectionWidget"), await Promise.all([]);
      const i = await W("./RadioGroupCollectionWidget", () => I(() => import("./assets/RadioGroupCollectionWidget-BEGg2OsO.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./GaugeCollectionWidget": async () => {
      await L("./GaugeCollectionWidget"), await Promise.all([]);
      const i = await W("./GaugeCollectionWidget", () => I(() => import("./assets/GaugeCollectionWidget-1iidMxPj.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./Light2CollectionWidget": async () => {
      await L("./Light2CollectionWidget"), await Promise.all([]);
      const i = await W("./Light2CollectionWidget", () => I(() => import("./assets/Light2CollectionWidget-xsNDpEnM.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./JsonTableCollectionWidget": async () => {
      await L("./JsonTableCollectionWidget"), await Promise.all([]);
      const i = await W("./JsonTableCollectionWidget", () => I(() => import("./assets/JsonTableCollectionWidget-E-Yd5ool.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./EchartsCollectionWidget": async () => {
      await L("./EchartsCollectionWidget"), await Promise.all([]);
      const i = await W("./EchartsCollectionWidget", () => I(() => import("./assets/EchartsCollectionWidget-BBVispXO.js"), __vite__mapDeps([0]), import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./ThemeConfigWizard": async () => {
      await L("./ThemeConfigWizard"), await Promise.all([]);
      const i = await W("./ThemeConfigWizard", () => I(() => import("./assets/ThemeConfigWizard-ur2-3GyH.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    },
    "./translations": async () => {
      await L("./translations"), await Promise.all([]);
      const i = await W("./translations", () => I(() => import("./assets/translations-BAsTmCOq.js"), [], import.meta.url)), s = i && i.__mf_remote_dependency_pending;
      s && typeof s.then == "function" && await s;
      const a = {};
      return Object.assign(a, i), Object.defineProperty(a, "__esModule", {
        value: true,
        enumerable: false
      }), a;
    }
  };
  typeof __VUE_HMR_RUNTIME__ > "u" && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  const Ne = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let oe = globalThis[Ne];
  if (!oe) {
    let i, s;
    const a = new Promise((p, _) => {
      i = p, s = _;
    });
    oe = globalThis[Ne] = {
      initPromise: a,
      initResolve: i,
      initReject: s
    };
  }
  const vt = oe.initResolve, ie = "__mf_module_cache__";
  globalThis[ie] ||= {
    share: {},
    remote: {}
  };
  globalThis[ie].share ||= {};
  globalThis[ie].remote ||= {};
  const l = globalThis[ie];
  for (const i of Object.keys(l.share)) if (i.startsWith("default:")) {
    const s = i.slice(8);
    l.share[s] === void 0 && (l.share[s] = l.share[i]);
  } else if (!i.includes(":")) {
    const s = "default:" + i;
    l.share[s] === void 0 && (l.share[s] = l.share[i]);
  }
  const Le = {}, St = Array.isArray("default") ? "default" : [
    "default"
  ], Ae = "default", k = "vis2CollectionWidget", ne = [
    [
      "react",
      "moment"
    ],
    [
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "react-dom"
    ],
    [
      "react-dom/client"
    ]
  ];
  let re, ve;
  async function De(i) {
    for (let s = 0; ; s++) try {
      return await i();
    } catch (a) {
      throw a;
    }
  }
  const Ve = /* @__PURE__ */ Symbol("mf.originalSharedProvider"), bt = {
    emit: (i) => i
  }, Pt = (i) => Array.isArray(i.scope) ? i.scope : [
    i.scope || "default"
  ], wt = (i, s) => {
    if (s !== "version-first") return i;
    const a = {};
    for (const [p, _] of Object.entries(i)) a[p] = Object.assign({}, _, {
      [Ve]: _
    });
    return a;
  }, ye = (i, s) => {
    if (!s) return;
    const a = Object.entries(i || {}), p = a.find(([, O]) => O === s);
    if (p) return {
      version: p[0],
      provider: s,
      registered: true
    };
    if (typeof s.version == "string" && s.version) return {
      version: s.version,
      provider: s,
      registered: false
    };
    const _ = a.filter(([, O]) => O === s || !!(s.from && (O == null ? void 0 : O.from) === s.from));
    if (_.length === 1) return {
      version: _[0][0],
      provider: s,
      registered: false
    };
  }, $ = (i, s, a, p) => {
    var _a;
    if (!i || !a) return;
    const _ = Object.fromEntries(Object.entries(i).filter(([, A]) => {
      var _a2;
      return ((_a2 = A == null ? void 0 : A.shareConfig) == null ? void 0 : _a2.import) !== false;
    }));
    if (Object.keys(_).length === 0) return;
    const O = Pt(a), T = wt(_, p), S = {};
    for (const A of O) S[A || "default"] = {
      [s]: T
    };
    const z = (_a = ht.getRegisteredShare(S, s, {
      ...a,
      scope: O,
      strategy: p
    }, bt)) == null ? void 0 : _a.shared;
    return (z == null ? void 0 : z[Ve]) || z;
  }, q = (i, s, a, p) => {
    var _a;
    const _ = (S) => F(S, a), O = Object.fromEntries(Object.entries(i || {}).filter(([, S]) => {
      var _a2;
      return !_(S) && ((_a2 = S == null ? void 0 : S.shareConfig) == null ? void 0 : _a2.import) !== false;
    }));
    (a == null ? void 0 : a.version) && ((_a = a.shareConfig) == null ? void 0 : _a.import) !== false && (O[a.version] || (O[a.version] = a));
    const T = $(O, s, a, p);
    return _(T) ? void 0 : T;
  }, F = (i, s) => i === s || !!((s == null ? void 0 : s.from) && (i == null ? void 0 : i.from) === s.from), Ot = (i, s, a, p, _, O, T, S, z) => {
    var _a, _b, _c;
    if (!S) return;
    const A = (_b = (_a = s == null ? void 0 : s.options) == null ? void 0 : _a.shared) == null ? void 0 : _b[_], G = Array.isArray(A) ? A.find((B) => (B == null ? void 0 : B.version) === O) : void 0, J = ((S == null ? void 0 : S.from) === ((_c = s == null ? void 0 : s.options) == null ? void 0 : _c.name) ? S : void 0) || (F(G, S) ? G : s ? void 0 : S);
    return J && i.some((B) => {
      var _a2, _b2;
      return B !== s && ((_a2 = B == null ? void 0 : B.options) == null ? void 0 : _a2.name) === (T == null ? void 0 : T.from) && ((_b2 = B == null ? void 0 : B.shareScopeMap) == null ? void 0 : _b2[p]) === a;
    }) ? J : void 0;
  }, Ct = (i, s, a, p, _, O, T, S, z) => {
    const A = O.registered ? Ot(i, s, a, p, _, O.version, O.provider, S) : void 0, G = A || T;
    if (G && !(O.registered && !F(G, S))) return {
      provider: G,
      scopeRootProvider: A
    };
  };
  async function jt() {
    return re || (re = De(() => I(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__vis2CollectionWidget__mf_owner__1-D7JeFNgQ.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)).catch((i) => {
      throw re = void 0, i;
    })), re;
  }
  async function Et() {
    return yt;
  }
  xt = async function(i = {}, s = [], a = {}) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
    const p = (t, e, n, r) => {
      const c = (Array.isArray(r) ? r[0] : r) || "default", d = e || !n ? t : t + "@" + n, u = {
        canonical: c + ":" + d
      };
      return c === "default" && (u.aliases = [
        d
      ]), u;
    }, _ = (t, e) => {
      const n = t[e.canonical];
      if (n !== void 0) return n;
      const r = e.aliases || [];
      for (const o of r) {
        if (!Object.prototype.hasOwnProperty.call(t, o)) continue;
        const c = t[o];
        if (c !== void 0) return t[e.canonical] = c, c;
      }
    }, O = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), T = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), S = (t) => {
      let e = t[T];
      return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(t, T, {
        value: e,
        enumerable: false,
        configurable: false,
        writable: false
      })), e;
    }, z = (t, e) => {
      var _a2;
      return (_a2 = t[T]) == null ? void 0 : _a2[e.canonical];
    }, A = (t) => {
      const e = [
        t,
        t == null ? void 0 : t.default
      ];
      for (const n of e) if (!(!n || typeof n != "object")) {
        for (const r of [
          "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
          "__TEST_INTERNALS",
          "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"
        ]) {
          const o = n[r];
          if (o && typeof o == "object") return {
            internals: o
          };
        }
        if (typeof n.useState == "function") return {
          hook: n.useState
        };
      }
    }, G = (t, e) => {
      if (t === e) return true;
      const n = A(t), r = A(e);
      if (!n || !r) return false;
      const o = n.internals, c = r.internals;
      return o !== void 0 || c !== void 0 ? o !== void 0 && o === c : typeof n.hook == "function" && n.hook === r.hook;
    }, K = (t, e, n, r) => {
      var _a2;
      const o = _(t, e);
      if (o !== void 0 && G(o, n)) return n;
      t[e.canonical] = n;
      const c = e.aliases || [];
      for (const f of c) Object.defineProperty(t, f, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
      const d = t[T];
      r === void 0 ? d && delete d[e.canonical] : S(t)[e.canonical] = r;
      const u = (_a2 = t[O]) == null ? void 0 : _a2[e.canonical];
      if (u) for (const f of u) f(n);
      return n;
    }, J = /* @__PURE__ */ Symbol.for("module-federation.tree-shaking-shared-cache"), Se = (t) => {
      let e = t[J];
      return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(t, J, {
        value: e,
        enumerable: false,
        configurable: false,
        writable: false
      })), e;
    }, B = (t, e, n, r) => {
      if (!Array.isArray(n)) return r;
      const o = [
        ...new Set(n)
      ].sort(), c = Se(t), d = c[e.canonical] ||= [], u = d.find((f) => f.providedExports.length === o.length && f.providedExports.every((b, h) => b === o[h]));
      return u ? u.value = r : d.push({
        providedExports: o,
        value: r
      }), r;
    }, se = /* @__PURE__ */ Symbol.for("module-federation.tree-shaking-shared-selection-cache"), ke = (t) => {
      let e = t[se];
      return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(t, se, {
        value: e,
        enumerable: false,
        configurable: false,
        writable: false
      })), e;
    }, Y = (t, e, n) => {
      var _a2, _b2;
      const r = _(t, e);
      return r !== void 0 ? r : (_b2 = (_a2 = t[se]) == null ? void 0 : _a2[e.canonical]) == null ? void 0 : _b2[n];
    }, Fe = (t, e, n, r) => {
      const o = ke(t), c = o[e.canonical] ||= /* @__PURE__ */ Object.create(null);
      return c[n] = r, r;
    }, ae = ((_a = globalThis.__FEDERATION__) == null ? void 0 : _a.__INSTANCES__) || [], ze = (_b = s.find((t) => t == null ? void 0 : t.from)) == null ? void 0 : _b.from, be = ae.find((t) => {
      var _a2, _b2;
      return ((_a2 = t == null ? void 0 : t.options) == null ? void 0 : _a2.name) === ze && ((_b2 = t == null ? void 0 : t.shareScopeMap) == null ? void 0 : _b2.default) === i;
    }) || ae.find((t) => {
      var _a2, _b2;
      return ((_a2 = t == null ? void 0 : t.options) == null ? void 0 : _a2.name) !== k && ((_b2 = t == null ? void 0 : t.shareScopeMap) == null ? void 0 : _b2.default) === i;
    }), Pe = /* @__PURE__ */ Object.create(null), Ge = (t) => {
      const e = /* @__PURE__ */ Object.create(null);
      for (const [n, r] of Object.entries(t || {})) e[n] = Object.assign(/* @__PURE__ */ Object.create(null), r);
      return e;
    }, Ke = (t, e) => {
      var _a2, _b2;
      for (const [n, r] of Object.entries(((_a2 = N.shareScopeMap) == null ? void 0 : _a2[t]) || {})) for (const [o, c] of Object.entries(r || {})) {
        if (!c || c.get === ((_b2 = E[n]) == null ? void 0 : _b2.get)) continue;
        const d = e[n] ||= {};
        d[o] === void 0 && (d[o] = c);
      }
    }, Be = (t, e) => {
      Ke(t, e);
      const n = !be && Object.values(e || {}).some((o) => Object.values(o || {}).some(Q)), r = n ? Ge(e) : e;
      return Pe[t] = {
        host: e,
        runtime: r,
        isWebpackScope: n
      }, r;
    }, Ue = () => {
      const t = Object.values(Pe).filter(({ isWebpackScope: e }) => e);
      if (t.length !== 0) for (const { host: e, runtime: n } of t) for (const [r, o] of Object.entries(e || {})) {
        const c = n[r] ||= /* @__PURE__ */ Object.create(null);
        for (const [d, u] of Object.entries(o || {})) c[d] = u;
      }
    }, D = /* @__PURE__ */ Object.create(null);
    for (const [t, e] of Object.entries(i)) {
      const n = D[t] = /* @__PURE__ */ Object.create(null);
      for (const [r, o] of Object.entries(e)) n[r] = Object.assign({}, o);
    }
    const { usedShared: E, usedRemotes: He } = await jt();
    function Q(t) {
      if (typeof (t == null ? void 0 : t.get) != "function") return false;
      const e = Function.prototype.toString.call(t.get);
      return e.includes("__webpack_require__") || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(e);
    }
    const qe = Object.values(D).some((t) => Object.values(t || {}).some(Q)), Je = (t) => {
      const e = t.split("/");
      return t.startsWith("@") ? e.slice(0, 2).join("/") : e[0];
    }, ce = (t, e, n, r) => {
      if (typeof q != "function") return;
      const o = Je(t), c = !r || o === t ? [
        [
          t,
          e
        ]
      ] : [
        [
          t,
          e
        ],
        [
          o,
          E[o]
        ]
      ];
      for (const [d, u] of c) {
        if (!u) continue;
        const f = n ? d === t ? n : D[d] : D[d] ?? i[d], b = q(f, d, u, "version-first");
        if (b) return b;
      }
    }, $e = (t, e, n) => {
      const r = ce(t, e, n, true);
      return r && Q(r) && !r.lib && !r.loaded ? r : void 0;
    };
    var X = Le[Ae];
    if (X || (X = Le[Ae] = {
      from: k
    }), s.indexOf(X) >= 0) return;
    s.push(X);
    const we = (t) => {
      let e = t;
      for (let n = 0; n < 5; n++) {
        const r = e == null ? void 0 : e.default;
        if (!r || typeof r != "object" || Object.keys(r).length === 0) break;
        const o = Object.keys(e).filter((c) => c !== "default").map((c) => e[c]);
        if (o.length > 0 && o.some((c) => c !== void 0)) break;
        e = r;
      }
      return e;
    }, Ye = [], Qe = typeof globalThis.window > "u" ? await Promise.all([]) : [], de = "__mf_vite_runtime_share_load_id__";
    let Xe = 0;
    const fe = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), N = pt({
      name: k,
      remotes: He,
      shared: E,
      plugins: [
        Ze(),
        et(),
        ...Ye,
        ...Qe
      ],
      shareStrategy: "version-first"
    });
    N.initShareScopeMap("default", Be("default", i));
    function Ze() {
      return {
        name: "vite-share-pin-lifecycle-plugin",
        resolveShare(t) {
          var _a2;
          const e = (_a2 = t.shareInfo) == null ? void 0 : _a2[de], n = e === void 0 ? void 0 : le.get(e);
          if (!n) return t;
          const r = t.resolver;
          return t.resolver = (...o) => (n.pinned.reapply(), r(...o)), n.pinned.reveal(), t;
        }
      };
    }
    function et() {
      return {
        name: "vite-real-name-snapshot-plugin",
        afterLoadSnapshot(t) {
          const e = t && t.remoteSnapshot, n = e && e.globalName, r = e && e.version;
          if (!n || !r || !e.remoteEntry) return t;
          const o = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo, c = n + ":" + r;
          return o && !o[c] && (o[c] = e), t;
        }
      };
    }
    const tt = N.sharedHandler.hooks.lifecycle.resolveShare;
    N.__mfKeepAdoptedProviders || (N.__mfKeepAdoptedProviders = true, (_g = (_f = (_e2 = (_d = (_c = N.sharedHandler) == null ? void 0 : _c.hooks) == null ? void 0 : _d.lifecycle) == null ? void 0 : _e2.afterRegisterShare) == null ? void 0 : _f.on) == null ? void 0 : _g.call(_f, (t) => {
      var _a2, _b2, _c2, _d2;
      const { shared: e, previousShared: n, registeredShared: r } = t || {};
      if (((_a2 = e == null ? void 0 : e.shareConfig) == null ? void 0 : _a2.import) !== false || r !== e || !n || ((_b2 = n.shareConfig) == null ? void 0 : _b2.import) === false) return;
      const o = (_d2 = (_c2 = N.shareScopeMap) == null ? void 0 : _c2[t.scope]) == null ? void 0 : _d2[t.pkgName];
      o && o[e.version] === e && (o[e.version] = n);
    }));
    const Z = /* @__PURE__ */ new WeakMap();
    tt.on((t) => {
      var _a2;
      const e = (_a2 = t.shareInfo) == null ? void 0 : _a2[de], n = t.resolver;
      if (typeof n != "function") return t;
      const r = (...o) => {
        var _a3, _b2, _c2, _d2, _e3;
        let c = n(...o);
        if (((_b2 = (_a3 = c == null ? void 0 : c.shared) == null ? void 0 : _a3.shareConfig) == null ? void 0 : _b2.import) === false && typeof $ == "function" && E[t.pkgName]) {
          const u = $((_d2 = (_c2 = t.shareScopeMap) == null ? void 0 : _c2[t.scope]) == null ? void 0 : _d2[t.pkgName], t.pkgName, E[t.pkgName], "version-first");
          u && ((_e3 = u.shareConfig) == null ? void 0 : _e3.import) !== false && (c = {
            shared: u,
            useTreesShaking: c.useTreesShaking
          });
        }
        const d = c == null ? void 0 : c.shared;
        return d && (typeof d == "object" || typeof d == "function") && !Z.has(d) && Z.set(d, {
          from: d.from
        }), e !== void 0 && d && fe.set(e, d), c;
      };
      return t.resolver = r, t;
    });
    const nt = (t, e, n, r) => {
      if (!t || t[e] !== n) return;
      const o = Object.assign({}, r, {
        version: r.version ?? e,
        scope: r.scope ?? (n == null ? void 0 : n.scope) ?? [
          "default"
        ],
        strategy: "loaded-first"
      }), c = r.from;
      t[e] = o;
      const d = () => n === void 0 ? t[e] === void 0 : t[e] === n;
      return {
        provider: o,
        reveal() {
          return t[e] !== o ? false : (n === void 0 ? delete t[e] : t[e] = n, true);
        },
        reapply() {
          return d() ? (t[e] = o, true) : false;
        },
        release(u, f = true) {
          return r.from = c, t[e] !== o ? !f && d() : f ? u ? (o.from = c, u && o.lib && (o.loaded = true), r.strategy === void 0 ? delete o.strategy : o.strategy = r.strategy, true) : (n === void 0 ? delete t[e] : t[e] = n, false) : (n === void 0 ? delete t[e] : t[e] = n, true);
        }
      };
    }, rt = (t) => Object.entries(t || {}).map(([e, n]) => ({
      provider: n,
      version: e,
      from: n.from,
      registered: true
    })), ot = (t, e) => {
      if (e === void 0) return;
      let n;
      for (const r of t) {
        const o = r.provider, c = o.treeShaking || o;
        if (!(r.loadedFactory !== e && o.lib !== e && c.lib !== e)) {
          if (n) return;
          n = r;
        }
      }
      return n;
    }, it = async (t, e, n) => {
      const r = ++Xe;
      le.set(r, {
        pinned: n
      });
      try {
        const o = await N.loadShare(t, {
          customShareInfo: {
            shareConfig: e,
            [de]: r
          }
        });
        return {
          factory: o === false ? void 0 : o,
          selectedProvider: fe.get(r)
        };
      } finally {
        fe.delete(r), le.delete(r);
      }
    }, Oe = async (t, e, n, r, o, c, d = true) => {
      const u = c.from, f = nt(n, r, o, c);
      if (!f) return;
      let b;
      try {
        b = await it(t, e, f);
      } catch (v) {
        throw f.release(false), v;
      }
      const h = b == null ? void 0 : b.factory;
      if (h === void 0) {
        f.release(false);
        return;
      }
      const g = rt(n), w = f.provider.treeShaking || f.provider, R = f.provider.lib === h || w.lib === h;
      if (!d && R) {
        const v = g.findIndex((C) => C.provider === f.provider);
        v !== -1 && g.splice(v, 1);
      }
      !d && !g.some((v) => v.provider === c) && g.push({
        provider: c,
        version: r,
        from: u,
        registered: false,
        loadedFactory: R ? h : void 0
      });
      const m = !d && b.selectedProvider === f.provider && R ? c : b.selectedProvider;
      if (m && !g.some((v) => v.provider === m)) {
        const v = Z.get(m), C = typeof m.version == "string" && m.version ? m.version : r;
        g.push({
          provider: m,
          version: C,
          from: v ? v.from : m.from,
          registered: (n == null ? void 0 : n[C]) === m,
          loadedFactory: h
        });
      }
      const y = g.find((v) => v.provider === m) ?? ot(g, h);
      if (!f.release(true, (y == null ? void 0 : y.provider) === f.provider) || !y) return;
      const P = Z.get(y.provider);
      y.from = y.provider === c ? u : P ? P.from : y.provider.from, P && (y.provider.from = P.from);
      const x = typeof h == "function" ? h() : h, j = await Promise.resolve(x);
      if (!(y.registered && (n == null ? void 0 : n[y.version]) !== y.provider)) return {
        provider: y.provider,
        selection: y,
        resolved: j
      };
    }, ue = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Map(), st = async (t, e, n) => {
      var _a2, _b2, _c2;
      const r = !!((_a2 = e.shareConfig) == null ? void 0 : _a2.singleton);
      if (!r && e.canLiveRebind !== false) try {
        const o = q(n, t, e, "version-first"), c = ye(n, o);
        if (!c || ((_b2 = e.shareConfig) == null ? void 0 : _b2.import) === false && F(o, e) || ((_c2 = o == null ? void 0 : o.shareConfig) == null ? void 0 : _c2.import) === false) return;
        const { version: d } = c;
        if (!r && d !== e.version || !o.lib && !o.loading && !(o.loaded && typeof o.get == "function")) return;
        const u = p(t, r, e.version, e.scope);
        if (_(l.share, u) !== void 0) return;
        const f = i[t], b = f == null ? void 0 : f[d];
        if (c.registered && !F(b, o)) return;
        let h, g = o.lib;
        if (!g && Q(o) || (!g && o.loading && (g = await o.loading), !g && o.loaded && typeof o.get == "function" && (g = await o.get()), !g)) return;
        const w = typeof g == "function" ? g() : g, R = await Promise.resolve(w), m = c.registered ? b : o;
        h = {
          provider: m,
          selection: {
            provider: m,
            version: d,
            from: o.from,
            registered: c.registered
          },
          resolved: R
        };
        const y = h == null ? void 0 : h.provider, M = h == null ? void 0 : h.selection;
        if (!M) return;
        const P = h == null ? void 0 : h.resolved;
        if (P === void 0 || _(l.share, u) !== void 0 || M.registered && (f == null ? void 0 : f[M.version]) !== y) return;
        K(l.share, u, we(P), M.from), ue.add(y);
      } catch (o) {
        console.error('[Module Federation] Failed to bridge materialized shared module "' + t + '"', o);
      }
    }, _e = async (t, e, n, r, o) => {
      var _a2, _b2, _c2, _d2;
      try {
        const c = p(t, (_a2 = e.shareConfig) == null ? void 0 : _a2.singleton, e.version, e.scope), d = _(l.share, c), u = z(l.share, c), f = q(n, t, e, "version-first"), b = f || $(n, t, e, "version-first") || e, h = ye(n, b);
        if (!h) return;
        const g = F(b, e), { version: w } = h;
        if (!((_b2 = e.shareConfig) == null ? void 0 : _b2.singleton) && w !== e.version) return;
        const R = r == null ? void 0 : r[w], m = Ct(ae, be, i, "default", t, h, f, R, "version-first");
        if (!m && !g) return;
        const { provider: y, scopeRootProvider: M } = m || {
          provider: b,
          scopeRootProvider: void 0
        };
        if (e.canLiveRebind === false || ((_c2 = e.shareConfig) == null ? void 0 : _c2.import) === false && F(y, e) || ((_d2 = y == null ? void 0 : y.shareConfig) == null ? void 0 : _d2.import) === false || d !== void 0 && u !== k) return;
        const P = i[t], x = P == null ? void 0 : P[w];
        if (h.registered && !M && !F(x, y)) return;
        const j = await Oe(t, e.shareConfig, P, w, x, y, h.registered && !g), v = j == null ? void 0 : j.provider, C = j == null ? void 0 : j.selection;
        if (!C || F(v, e) || o && (o.version !== C.version || !F({
          from: C.from
        }, o.provider)) || ue.has(v)) return;
        const V = j == null ? void 0 : j.resolved;
        if (V === void 0) return;
        const U = _(l.share, c), mt = z(l.share, c);
        if (U !== void 0 && mt !== k || C.registered && (P == null ? void 0 : P[C.version]) !== v) return;
        o || me.set(t, {
          version: C.version,
          provider: {
            from: C.from
          }
        }), ue.add(v);
        const _t = we(V);
        K(l.share, c, _t, C.from);
      } catch (c) {
        console.error('[Module Federation] Failed to bridge external shared module "' + t + '"', c);
      }
    };
    for (const t of ne) await Promise.all(t.map(async (e) => {
      const n = E[e];
      !n || n.materialize === false || n.treeShaking || await st(e, n, D[e]);
    }));
    for (const [t, e] of Object.entries(E)) {
      if (e.treeShaking) continue;
      const n = p(t, (_h = e.shareConfig) == null ? void 0 : _h.singleton, e.version, e.scope);
      if (_(l.share, n) !== void 0) continue;
      const r = p(t, true, e.version, e.scope), o = _(l.share, r);
      o !== void 0 && K(l.share, n, o, z(l.share, r));
    }
    const Ce = [
      "react",
      "moment",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "react-dom",
      "react-dom/client"
    ], at = [
      [
        "react",
        "moment"
      ],
      [
        "react/jsx-dev-runtime",
        "react/jsx-runtime",
        "react-dom"
      ],
      [
        "react-dom/client"
      ]
    ], H = new Map(Ce.map((t, e) => [
      t,
      e
    ])), ct = {
      2: [
        0
      ],
      3: [
        0
      ],
      4: [
        0
      ],
      5: [
        0,
        4
      ]
    }, ee = Ce.filter((t) => {
      var _a2;
      return E[t] && (E[t].materialize !== false || ((_a2 = E[t].shareConfig) == null ? void 0 : _a2.import) === false && !E[t].lazy);
    });
    l.providerInit ||= /* @__PURE__ */ new Map();
    const dt = (t, e) => {
      const n = l.providerInit.get(t);
      if (n) return n;
      const r = Promise.resolve().then(e);
      return l.providerInit.set(t, r), r.catch(() => l.providerInit.delete(t)), r;
    };
    var je = async (t) => {
      const e = new Set(t);
      for (const n of at) await Promise.all(n.filter((r) => e.has(r)).map(async (r) => {
        var _a2, _b2, _c2;
        const o = E[r], c = p(r, (_a2 = o.shareConfig) == null ? void 0 : _a2.singleton, o.version, o.scope);
        if (((_b2 = o.shareConfig) == null ? void 0 : _b2.import) === false || o.treeShaking || _(l.share, c) !== void 0) return;
        const d = p(r, true, o.version, o.scope), u = _(l.share, d);
        if (u !== void 0) {
          K(l.share, c, u, z(l.share, d));
          return;
        }
        const f = typeof ce == "function" ? ce(r, o) : void 0;
        if (f) {
          let m = f.lib;
          if (!m && f.loading && (m = await f.loading), !m && f.loaded && typeof f.get == "function" && (m = await f.get()), m) {
            const y = typeof m == "function" ? m() : m, M = await Promise.resolve(y), P = (x) => {
              let j = x;
              for (let v = 0; v < 5; v++) {
                const C = j == null ? void 0 : j.default;
                if (!C || typeof C != "object" || Object.keys(C).length === 0) break;
                const V = Object.keys(j).filter((U) => U !== "default").map((U) => j[U]);
                if (V.length > 0 && V.some((U) => U !== void 0)) break;
                j = C;
              }
              return j;
            };
            K(l.share, c, P(M), f.from);
          }
          return;
        }
        const b = c.canonical, h = await dt(b, async () => {
          const m = await o.get(), y = typeof m == "function" ? m() : m;
          return Promise.resolve(y);
        });
        for (const m of ((_c2 = N.options.shared) == null ? void 0 : _c2[r]) || []) m.get === o.get && (m.eager = true);
        const w = ((m) => {
          let y = m;
          for (let M = 0; M < 5; M++) {
            const P = y == null ? void 0 : y.default;
            if (!P || typeof P != "object" || Object.keys(P).length === 0) break;
            const x = Object.keys(y).filter((j) => j !== "default").map((j) => y[j]);
            if (x.length > 0 && x.some((j) => j !== void 0)) break;
            y = P;
          }
          return y;
        })(h), R = w === h ? {
          ...h
        } : w;
        R.__esModule !== true && Object.defineProperty(R, "__esModule", {
          value: true,
          enumerable: false
        }), K(l.share, c, R, k);
      }));
    };
    const te = (t) => {
      var _a2, _b2;
      const e = E[t];
      if (!e.treeShaking && ((_a2 = e.shareConfig) == null ? void 0 : _a2.import) !== false) return false;
      const n = p(t, (_b2 = e.shareConfig) == null ? void 0 : _b2.singleton, e.version, e.scope);
      return e.treeShaking ? Y(l.share, n, k) === void 0 && _(l.share, n) === void 0 : _(l.share, n) === void 0;
    }, ft = (t) => {
      var _a2, _b2;
      const e = E[t], n = p(t, (_a2 = e.shareConfig) == null ? void 0 : _a2.singleton, e.version, e.scope);
      return (e.treeShaking ? Y(l.share, n, k) ?? _(l.share, n) : _(l.share, n)) !== void 0 ? false : e.treeShaking || ((_b2 = e.shareConfig) == null ? void 0 : _b2.import) === false ? true : typeof q != "function" ? false : !!q(D[t], t, e, "version-first");
    }, Ee = (t) => {
      let e = true;
      for (; e; ) {
        e = false;
        for (const n of ee) {
          const r = H.get(n);
          t.has(r) || (ct[r] || []).some((o) => t.has(o)) && (t.add(r), e = true);
        }
      }
      return t;
    }, Re = Ee(new Set(ee.filter(ft).map((t) => H.get(t)))), lt = ee.filter((t) => !Re.has(H.get(t)));
    var Me = ee.filter((t) => Re.has(H.get(t)));
    await je(lt);
    try {
      await De(async () => {
        await Promise.all(await N.initializeSharing("default", {
          strategy: "version-first",
          from: "build",
          initScope: s
        }));
      });
    } catch (t) {
      console.error("[Module Federation]", t);
    }
    Ue();
    const Ie = async () => {
      for (const t of ne) await Promise.all(t.map(async (e) => {
        const n = E[e];
        !n || n.materialize === false || n.treeShaking || await _e(e, n, i[e], D[e], void 0);
      }));
    };
    qe ? ve = Ie : await Ie();
    try {
      const t = (_i = globalThis.__FEDERATION__) == null ? void 0 : _i.__SHARE__, e = /* @__PURE__ */ Object.create(null);
      if (t) for (const [, n] of Object.entries(t)) for (const r of St) {
        const o = n == null ? void 0 : n[r];
        if (o) for (const [c, d] of Object.entries(o)) {
          const u = E == null ? void 0 : E[c], f = D[c], b = me.get(c);
          if (!u || !f || !b || u.treeShaking) continue;
          const h = e[c] || (e[c] = /* @__PURE__ */ Object.create(null));
          for (const [g, w] of Object.entries(d)) {
            if (!w.lib || b.version !== g || !F(w, b.provider)) continue;
            const R = f[g];
            (w === R || (R == null ? void 0 : R.from) && w.from === R.from) && (w === u || u.from && w.from === u.from || h[g] === void 0 && (h[g] = w));
          }
        }
      }
      for (const n of ne) await Promise.all(n.map(async (r) => {
        const o = e[r];
        o && await _e(r, E[r], o, D[r], me.get(r));
      }));
    } catch (t) {
      console.error("[Module Federation] Failed to bridge external shared modules", t);
    }
    const ut = async () => {
    }, Te = async (t, e) => {
      var _a2, _b2;
      const n = p(t, (_a2 = e.shareConfig) == null ? void 0 : _a2.singleton, e.version, e.scope), r = e.treeShaking ? Y(l.share, n, k) : _(l.share, n);
      if (((_b2 = e.shareConfig) == null ? void 0 : _b2.import) !== false || r !== void 0 || $e(t, e, D[t])) return;
      const o = (P) => {
        let x = P;
        for (let j = 0; j < 5; j++) {
          const v = x == null ? void 0 : x.default;
          if (!v || typeof v != "object" || Object.keys(v).length === 0) break;
          const C = Object.keys(x).filter((V) => V !== "default").map((V) => x[V]);
          if (C.length > 0 && C.some((V) => V !== void 0)) break;
          x = v;
        }
        return x;
      }, c = i == null ? void 0 : i[t], d = $(c, t, e, "version-first") || e, u = ye(c, d);
      if (!u) return;
      const f = (P) => {
        var _a3;
        return P === e || ((_a3 = P == null ? void 0 : P.shareConfig) == null ? void 0 : _a3.import) === false;
      };
      if (f(d)) return;
      const { version: b } = u, h = c == null ? void 0 : c[b], g = await Oe(t, e.shareConfig, c, b, h, d, u.registered), w = g == null ? void 0 : g.selection, R = g == null ? void 0 : g.provider, m = g == null ? void 0 : g.resolved;
      if (!w || f(R) || m === void 0 || (e.treeShaking ? Y(l.share, n, k) : _(l.share, n)) !== void 0 || w.registered && (c == null ? void 0 : c[w.version]) !== R) return;
      const M = o(m);
      if (e.treeShaking) {
        const P = e.treeShaking.providedExports ?? e.treeShaking.usedExports ?? [];
        B(l.share, n, P, M), Fe(l.share, n, k, M);
      } else K(l.share, n, M, w.from);
    }, xe = [], pe = /* @__PURE__ */ new Set();
    for (const t of Me) {
      const e = E[t], n = H.get(t);
      if (te(t)) try {
        e.treeShaking ? await ut(t, e) : ((_j = e.shareConfig) == null ? void 0 : _j.import) === false && await Te(t, e);
      } catch (r) {
        console.error(`[Module Federation] Failed to resolve runtime-only shared module "${t}"`, r);
      }
      te(t) && pe.add(n);
    }
    Ee(pe), xe.push(...Me.filter((t) => !pe.has(H.get(t)))), await je(xe);
    const he = /* @__PURE__ */ new Map();
    return oe.loadLazyShares = async (t) => {
      const e = new Set(t);
      for (const n of ne) await Promise.all(n.filter((r) => e.has(r)).map((r) => {
        const o = E[r];
        if (!o || !o.lazy || !te(r)) return;
        let c = he.get(r);
        return c || (c = _e(r, o, i[r], D[r], void 0).then(() => te(r) ? Te(r, o) : void 0), c.catch(() => he.delete(r)), he.set(r, c)), c;
      }));
    }, vt(N), N;
  };
  Wt = async function(i) {
    const s = await Et();
    if (!(i in s)) throw new Error(`[Module Federation] Module ${i} does not exist in container.`);
    return ve && await ve(), l.pendingShareLoads && await Promise.all(l.pendingShareLoads), s[i]().then((a) => () => a);
  };
  if (typeof document !== "undefined" && document.head) {
    try {
      for (const __mfWarmupPath of [
        "assets/_virtual_mf-localSharedImportMap___mfe_internal__vis2CollectionWidget__mf_owner__1-D7JeFNgQ.js",
        "assets/vite-preload-helper-PPVm8Dsz.js",
        "assets/index-ClTfM_aW.js",
        "assets/index-D2CMitn6.js"
      ]) {
        const __mfWarmupLink = document.createElement("link");
        __mfWarmupLink.rel = "modulepreload";
        __mfWarmupLink.crossOrigin = "";
        __mfWarmupLink.href = new URL(__mfWarmupPath, import.meta.url).href;
        document.head.appendChild(__mfWarmupLink);
      }
    } catch (__mfWarmupError) {
    }
  }
});
export {
  __tla,
  Wt as get,
  xt as init
};
