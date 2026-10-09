import { _ as v } from "./vite-preload-helper-PPVm8Dsz.js";
import { s as M } from "./helpers-B83jYK9m.js";
import { __tla as __tla_0 } from "./index-D2CMitn6.js";
let S, H;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const p = "__mf_module_cache__";
  globalThis[p] ||= {
    share: {},
    remote: {}
  };
  globalThis[p].share ||= {};
  globalThis[p].remote ||= {};
  const f = globalThis[p];
  for (const _ of Object.keys(f.share)) if (_.startsWith("default:")) {
    const u = _.slice(8);
    f.share[u] === void 0 && (f.share[u] = f.share[_]);
  } else if (!_.includes(":")) {
    const u = "default:" + _;
    f.share[u] === void 0 && (f.share[u] = f.share[_]);
  }
  H = async function() {
    return S || (S = (async () => {
      const _ = (n, t, e, r) => {
        const s = (Array.isArray(r) ? r[0] : r) || "default", i = t || !e ? n : n + "@" + e, a = {
          canonical: s + ":" + i
        };
        return s === "default" && (a.aliases = [
          i
        ]), a;
      }, u = (n, t) => {
        const e = n[t.canonical];
        if (e !== void 0) return e;
        const r = t.aliases || [];
        for (const o of r) {
          if (!Object.prototype.hasOwnProperty.call(n, o)) continue;
          const s = n[o];
          if (s !== void 0) return n[t.canonical] = s, s;
        }
      }, E = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), h = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), N = (n) => {
        let t = n[h];
        return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(n, h, {
          value: t,
          enumerable: false,
          configurable: false,
          writable: false
        })), t;
      }, j = (n, t) => {
        var _a;
        return (_a = n[h]) == null ? void 0 : _a[t.canonical];
      }, b = (n) => {
        const t = [
          n,
          n == null ? void 0 : n.default
        ];
        for (const e of t) if (!(!e || typeof e != "object")) {
          for (const r of [
            "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
            "__TEST_INTERNALS",
            "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"
          ]) {
            const o = e[r];
            if (o && typeof o == "object") return {
              internals: o
            };
          }
          if (typeof e.useState == "function") return {
            hook: e.useState
          };
        }
      }, I = (n, t) => {
        if (n === t) return true;
        const e = b(n), r = b(t);
        if (!e || !r) return false;
        const o = e.internals, s = r.internals;
        return o !== void 0 || s !== void 0 ? o !== void 0 && o === s : typeof e.hook == "function" && e.hook === r.hook;
      }, T = (n, t, e, r) => {
        var _a;
        const o = u(n, t);
        if (o !== void 0 && I(o, e)) return e;
        n[t.canonical] = e;
        const s = t.aliases || [];
        for (const a of s) Object.defineProperty(n, a, {
          value: e,
          enumerable: true,
          configurable: true,
          writable: true
        });
        n[h], N(n)[t.canonical] = r;
        const i = (_a = n[E]) == null ? void 0 : _a[t.canonical];
        if (i) for (const a of i) a(e);
        return e;
      }, c = await (await v(() => import("../customWidgets.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url)).init(), { usedShared: R } = await v(async () => {
        const { usedShared: n } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__vis2CollectionWidget__mf_owner__1-D7JeFNgQ.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          usedShared: n
        };
      }, [], import.meta.url), P = (n) => {
        let t = n;
        for (let e = 0; e < 5; e++) {
          const r = t == null ? void 0 : t.default;
          if (!r || typeof r != "object" || Object.keys(r).length === 0) break;
          const o = Object.keys(t).filter((s) => s !== "default").map((s) => t[s]);
          if (o.length > 0 && o.some((s) => s !== void 0)) break;
          t = r;
        }
        return t;
      }, A = (n, t) => y(t).some((e) => {
        var _a, _b;
        return Object.keys(((_b = (_a = c.shareScopeMap) == null ? void 0 : _a[e]) == null ? void 0 : _b[n]) || {}).some((r) => r !== t.version);
      }), w = [
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
      ], g = /* @__PURE__ */ Symbol("mf.originalSharedProvider"), D = {
        emit: (n) => n
      }, y = (n) => Array.isArray(n.scope) ? n.scope : [
        n.scope || "default"
      ], L = (n, t) => {
        const e = {};
        for (const [r, o] of Object.entries(n)) e[r] = Object.assign({}, o, {
          [g]: o
        });
        return e;
      }, K = (n, t, e, r) => {
        var _a;
        if (!n || !e) return;
        const o = Object.fromEntries(Object.entries(n).filter(([, d]) => {
          var _a2;
          return ((_a2 = d == null ? void 0 : d.shareConfig) == null ? void 0 : _a2.import) !== false;
        }));
        if (Object.keys(o).length === 0) return;
        const s = y(e), i = L(o), a = {};
        for (const d of s) a[d || "default"] = {
          [t]: i
        };
        const l = (_a = M.getRegisteredShare(a, t, {
          ...e,
          scope: s,
          strategy: r
        }, D)) == null ? void 0 : _a.shared;
        return (l == null ? void 0 : l[g]) || l;
      }, O = (n, t, e, r) => {
        var _a;
        return ((_a = e.shareConfig) == null ? void 0 : _a.singleton) ? Object.values(n || {}).some((o) => {
          var _a2;
          return ((_a2 = o == null ? void 0 : o.shareConfig) == null ? void 0 : _a2.import) !== false;
        }) : !!K(n, t, {
          ...e,
          scope: [
            r
          ]
        }, "version-first");
      };
      for (const n of w) await Promise.all(n.map(async (t) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        const e = R[t];
        if (!e || e.materialize === false && !e.lazy || e.treeShaking) return;
        const r = _(t, (_a = e.shareConfig) == null ? void 0 : _a.singleton, e.version, e.scope);
        if (!(u(f.share, r) !== void 0 && (!((_b = e.shareConfig) == null ? void 0 : _b.singleton) && j(f.share, r) === "vis2CollectionWidget" || ((_c = e.shareConfig) == null ? void 0 : _c.singleton) && !A(t, e)))) {
          if (((_d = e.shareConfig) == null ? void 0 : _d.import) === false) {
            const o = y(e), s = (i) => {
              var _a2, _b2;
              return !O((_b2 = (_a2 = c.shareScopeMap) == null ? void 0 : _a2[i]) == null ? void 0 : _b2[t], t, e, i);
            };
            if (o.some(s)) {
              c.__mfKeepAdoptedProviders || (c.__mfKeepAdoptedProviders = true, (_i = (_h = (_g = (_f = (_e = c.sharedHandler) == null ? void 0 : _e.hooks) == null ? void 0 : _f.lifecycle) == null ? void 0 : _g.afterRegisterShare) == null ? void 0 : _h.on) == null ? void 0 : _i.call(_h, (i) => {
                var _a2, _b2, _c2, _d2;
                const { shared: a, previousShared: l, registeredShared: d } = i || {};
                if (((_a2 = a == null ? void 0 : a.shareConfig) == null ? void 0 : _a2.import) !== false || d !== a || !l || ((_b2 = l.shareConfig) == null ? void 0 : _b2.import) === false) return;
                const m = (_d2 = (_c2 = c.shareScopeMap) == null ? void 0 : _c2[i.scope]) == null ? void 0 : _d2[i.pkgName];
                m && m[a.version] === a && (m[a.version] = l);
              }));
              for (const i of ((_j = globalThis.__FEDERATION__) == null ? void 0 : _j.__INSTANCES__) || []) for (const a of o) {
                const l = (_l = (_k = i == null ? void 0 : i.shareScopeMap) == null ? void 0 : _k[a]) == null ? void 0 : _l[t];
                if (!O(l, t, e, a) || !s(a)) continue;
                const d = (c.shareScopeMap[a] ||= {})[t] ||= {};
                for (const [m, C] of Object.entries(l)) ((_m = C == null ? void 0 : C.shareConfig) == null ? void 0 : _m.import) !== false && (d[m] && ((_n = d[m].shareConfig) == null ? void 0 : _n.import) !== false || (d[m] = C));
              }
            }
            if (o.every(s)) return;
          }
          await c.loadShare(t, {
            customShareInfo: {
              shareConfig: e.shareConfig
            }
          }).then(async (o) => {
            if (o === false) return;
            const s = typeof o == "function" ? o() : o;
            let i = P(await Promise.resolve(s));
            T(f.share, r, i, "vis2CollectionWidget");
          });
        }
      }));
      return c;
    })()), S;
  };
  S = H();
});
export {
  __tla,
  S as hostInitPromise,
  H as initHost
};
