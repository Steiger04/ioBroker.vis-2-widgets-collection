const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-ClTfM_aW.js","./index-D2CMitn6.js"])))=>i.map(i=>d[i]);
import { _ as s } from "./vite-preload-helper-PPVm8Dsz.js";
let p;
let __tla = (async () => {
  const l = "__mf_module_cache__";
  globalThis[l] ||= {
    share: {},
    remote: {}
  };
  globalThis[l].share ||= {};
  globalThis[l].remote ||= {};
  const i = globalThis[l];
  for (const e of Object.keys(i.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    i.share[t] === void 0 && (i.share[t] = i.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    i.share[t] === void 0 && (i.share[t] = i.share[e]);
  }
  const f = (e, t, o, r) => {
    const a = (Array.isArray(r) ? r[0] : r) || "default", n = t || !o ? e : e + "@" + o, c = {
      canonical: a + ":" + n
    };
    return a === "default" && (c.aliases = [
      n
    ]), c;
  }, u = (e, t) => {
    const o = e[t.canonical];
    if (o !== void 0) return o;
    const r = t.aliases || [];
    for (const _ of r) {
      if (!Object.prototype.hasOwnProperty.call(e, _)) continue;
      const a = e[_];
      if (a !== void 0) return e[t.canonical] = a, a;
    }
  }, d = [
    [
      "react",
      () => s(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.R), [], import.meta.url)
    ],
    [
      "react/jsx-dev-runtime",
      () => s(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.c), [], import.meta.url)
    ],
    [
      "react/jsx-runtime",
      () => s(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e._), [], import.meta.url)
    ],
    [
      "react-dom",
      () => s(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.a), [], import.meta.url)
    ],
    [
      "react-dom/client",
      () => s(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.d), [], import.meta.url)
    ],
    [
      "moment",
      () => s(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.b), [], import.meta.url)
    ]
  ];
  p = async function() {
    if (d.length === 0) return;
    const e = "react-dom/client", t = "react-dom", { usedShared: o } = await s(async () => {
      const { usedShared: r } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__vis2CollectionWidget__mf_owner__1-D7JeFNgQ.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        usedShared: r
      };
    }, __vite__mapDeps([0,1]), import.meta.url);
    await Promise.all(d.map(async ([r, _]) => {
      var _a, _b;
      const a = o[r], n = a ?? (r === e ? o[t] : void 0);
      if (!n || n.treeShaking || ((_a = n.shareConfig) == null ? void 0 : _a.import) === false || a && a.materialize === false && r !== e) return;
      const c = f(r, (_b = n.shareConfig) == null ? void 0 : _b.singleton, n.version, n.scope);
      u(i.share, c) === void 0 && await _().catch((m) => console.warn("[module-federation] shared preload failed:", r, m));
    }));
  };
})();
export {
  __tla,
  p as preloadPendingShares
};
