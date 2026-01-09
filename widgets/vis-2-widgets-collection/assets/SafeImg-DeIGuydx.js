import { j as s, __tla as __tla_0 } from "./useData-BBwgvCqY.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let t;
  t = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  f = ({ src: A, style: e = {}, alt: a = "" }) => {
    const n = A && A !== "undefined" ? A : t;
    return s.jsx("img", {
      src: n,
      alt: a,
      style: e,
      onError: (o) => {
        const r = o.currentTarget;
        r.onerror = null, r.src = t;
      }
    });
  };
});
export {
  f as S,
  __tla
};
