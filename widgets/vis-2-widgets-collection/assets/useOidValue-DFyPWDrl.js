import { v as e, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { n as u, __tla as __tla_1 } from "./useData-CoMv8b7s.js";
let i;
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
  i = (o) => {
    const { getPropertyValue: s } = e.useContext(u), t = e.useMemo(() => s(o), [
      o,
      s
    ]), [a, r] = e.useState(t);
    return e.useEffect(() => {
      t !== void 0 && r(t);
    }, [
      t
    ]), e.useMemo(() => a, [
      a
    ]);
  };
});
export {
  __tla,
  i as u
};
