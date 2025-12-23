import { g as s } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as c } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let p, g, i;
let __tla = (async () => {
  function _(e, n) {
    for (var o = 0; o < n.length; o++) {
      const t = n[o];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const { initPromise: f } = c, l = f.then((e) => e.loadShare("react", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), u = await l.then((e) => e());
  i = u;
  g = s(i);
  p = _({
    __proto__: null,
    default: g
  }, [
    i
  ]);
})();
export {
  p as R,
  __tla,
  g as a,
  i as v
};
