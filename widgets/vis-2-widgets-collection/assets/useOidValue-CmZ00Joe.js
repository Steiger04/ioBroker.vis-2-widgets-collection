import { v as e, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as a, __tla as __tla_1 } from "./useData-90UeUAIS.js";
let c;
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
  c = (t) => {
    const { getPropertyValue: r } = e.useContext(a), o = e.useMemo(() => {
      if (!(!t || t === "nothing_selected")) return r(t);
    }, [
      t,
      r
    ]), [s, u] = e.useState(o);
    return e.useEffect(() => {
      u(o);
    }, [
      o
    ]), e.useMemo(() => s, [
      s
    ]);
  };
});
export {
  __tla,
  c as u
};
