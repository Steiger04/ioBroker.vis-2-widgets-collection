import { v as e, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as u, __tla as __tla_1 } from "./useData-DFGCESxg.js";
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
  c = (o) => {
    const { getPropertyValue: a } = e.useContext(u), t = e.useMemo(() => a(o), [
      o,
      a
    ]), [s, r] = e.useState(t);
    return e.useEffect(() => {
      r(t);
    }, [
      t
    ]), e.useMemo(() => s, [
      s
    ]);
  };
});
export {
  __tla,
  c as u
};
