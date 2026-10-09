import { _ as l } from "./vite-preload-helper-PPVm8Dsz.js";
import "./index-ClTfM_aW.js";
import { __tla as __tla_0 } from "./index-D2CMitn6.js";
let v, d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let u, g, s;
  u = (e) => {
    let r = e;
    for (let a = 0; a < 5; a++) {
      const t = r == null ? void 0 : r.default;
      if (!t || typeof t != "object" || Object.keys(t).length === 0) break;
      const n = Object.keys(r).filter((o) => o !== "default").map((o) => r[o]);
      if (n.length > 0 && n.some((o) => o !== void 0)) break;
      r = t;
    }
    return r;
  };
  g = (e, r, a, t) => {
    var _a, _b, _c;
    const n = (_a = globalThis.__mf_module_cache__) == null ? void 0 : _a.share, o = r.map((i) => n == null ? void 0 : n[i]).find((i) => i !== void 0), p = (o == null ? void 0 : o.version) ?? ((_b = o == null ? void 0 : o.default) == null ? void 0 : _b.version), f = String(p || "").split(/[^0-9]+/).map(Number), m = String(a).split(/[^0-9]+/).map(Number);
    for (let i = 0; i < Math.max(f.length, m.length); i++) {
      if ((f[i] || 0) < (m[i] || 0)) return;
      if ((f[i] || 0) > (m[i] || 0)) break;
    }
    for (const i of e) {
      const c = n == null ? void 0 : n[i];
      if (c !== void 0 && (!t || typeof (c == null ? void 0 : c[t]) == "function" || typeof ((_c = c == null ? void 0 : c.default) == null ? void 0 : _c[t]) == "function")) return c;
    }
  };
  s = {
    react: async () => await l(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react__prebuild__-BRnGQ4fa.js"), [], import.meta.url),
    "react/jsx-dev-runtime": async () => await l(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-DJ116YMb.js"), [], import.meta.url),
    "react/jsx-runtime": async () => await l(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-BNZ-MNJY.js"), [], import.meta.url),
    "react-dom": async () => await l(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_2_dom__prebuild__-BDHCETjX.js"), [], import.meta.url),
    "react-dom/client": async () => await l(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_2_dom_mf_1_client__prebuild__-Bh0CWfgq.js"), [], import.meta.url),
    moment: async () => await l(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__moment__prebuild__-DvojzKsw.js"), [], import.meta.url)
  };
  d = {
    react: {
      name: "react",
      version: "19.3.0",
      scope: [
        "default"
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: "vis2CollectionWidget",
      canLiveRebind: true,
      get() {
        const e = d.react;
        return e.lib ? e.lib : (e.loading || (e.loading = (async () => {
          try {
            const { react: r } = s, a = await r(), t = u({
              ...a
            });
            return t.__esModule !== true && Object.defineProperty(t, "__esModule", {
              value: true,
              enumerable: false
            }), e.lib = function() {
              return t;
            }, e.loaded = true, e.lib;
          } finally {
            e.loading = void 0;
          }
        })()), e.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*",
        strictVersion: false,
        eager: false
      }
    },
    "react/jsx-dev-runtime": {
      name: "react/jsx-dev-runtime",
      version: "19.3.0",
      scope: [
        "default"
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: "vis2CollectionWidget",
      canLiveRebind: true,
      get() {
        const e = d["react/jsx-dev-runtime"];
        if (e.lib) return e.lib;
        if (e.loading) return e.loading;
        const r = g([
          "default:react/jsx-dev-runtime",
          "react/jsx-dev-runtime"
        ], [
          "default:react",
          "react"
        ], "19.3.0", void 0);
        return r !== void 0 ? (e.lib = function() {
          return r;
        }, e.loaded = true, e.lib) : (e.loading = (async () => {
          try {
            const { "react/jsx-dev-runtime": a } = s, t = await a(), n = u({
              ...t
            });
            return n.__esModule !== true && Object.defineProperty(n, "__esModule", {
              value: true,
              enumerable: false
            }), e.lib = function() {
              return n;
            }, e.loaded = true, e.lib;
          } finally {
            e.loading = void 0;
          }
        })(), e.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*",
        strictVersion: false,
        eager: false
      }
    },
    "react/jsx-runtime": {
      name: "react/jsx-runtime",
      version: "19.3.0",
      scope: [
        "default"
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: "vis2CollectionWidget",
      canLiveRebind: true,
      get() {
        const e = d["react/jsx-runtime"];
        if (e.lib) return e.lib;
        if (e.loading) return e.loading;
        const r = g([
          "default:react/jsx-runtime",
          "react/jsx-runtime"
        ], [
          "default:react",
          "react"
        ], "19.3.0", void 0);
        return r !== void 0 ? (e.lib = function() {
          return r;
        }, e.loaded = true, e.lib) : (e.loading = (async () => {
          try {
            const { "react/jsx-runtime": a } = s, t = await a(), n = u({
              ...t
            });
            return n.__esModule !== true && Object.defineProperty(n, "__esModule", {
              value: true,
              enumerable: false
            }), e.lib = function() {
              return n;
            }, e.loaded = true, e.lib;
          } finally {
            e.loading = void 0;
          }
        })(), e.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*",
        strictVersion: false,
        eager: false
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "19.3.0",
      scope: [
        "default"
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: "vis2CollectionWidget",
      canLiveRebind: true,
      get() {
        const e = d["react-dom"];
        return e.lib ? e.lib : (e.loading || (e.loading = (async () => {
          try {
            const { "react-dom": r } = s, a = await r(), t = u({
              ...a
            });
            return t.__esModule !== true && Object.defineProperty(t, "__esModule", {
              value: true,
              enumerable: false
            }), e.lib = function() {
              return t;
            }, e.loaded = true, e.lib;
          } finally {
            e.loading = void 0;
          }
        })()), e.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*",
        strictVersion: false,
        eager: false
      }
    },
    "react-dom/client": {
      name: "react-dom/client",
      version: "19.3.0",
      scope: [
        "default"
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: "vis2CollectionWidget",
      canLiveRebind: true,
      get() {
        const e = d["react-dom/client"];
        if (e.lib) return e.lib;
        if (e.loading) return e.loading;
        const r = g([
          "default:react-dom/client",
          "react-dom/client",
          "default:react-dom",
          "react-dom"
        ], [
          "default:react",
          "react"
        ], "19.3.0", "createRoot");
        return r !== void 0 ? (e.lib = function() {
          return r;
        }, e.loaded = true, e.lib) : (e.loading = (async () => {
          try {
            const { "react-dom/client": a } = s, t = await a(), n = u({
              ...t
            });
            return n.__esModule !== true && Object.defineProperty(n, "__esModule", {
              value: true,
              enumerable: false
            }), e.lib = function() {
              return n;
            }, e.loaded = true, e.lib;
          } finally {
            e.loading = void 0;
          }
        })(), e.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*",
        strictVersion: false,
        eager: false
      }
    },
    moment: {
      name: "moment",
      version: "2.30.1",
      scope: [
        "default"
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: "vis2CollectionWidget",
      canLiveRebind: true,
      get() {
        const e = d.moment;
        return e.lib ? e.lib : (e.loading || (e.loading = (async () => {
          try {
            const { moment: r } = s, a = await r(), t = u({
              ...a
            });
            return t.__esModule !== true && Object.defineProperty(t, "__esModule", {
              value: true,
              enumerable: false
            }), e.lib = function() {
              return t;
            }, e.loaded = true, e.lib;
          } finally {
            e.loading = void 0;
          }
        })()), e.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*",
        strictVersion: false,
        eager: false
      }
    }
  };
  v = [];
});
export {
  __tla,
  v as usedRemotes,
  d as usedShared
};
