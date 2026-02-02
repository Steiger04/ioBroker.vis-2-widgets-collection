import { j as s, __tla as __tla_0 } from "./useData-ySXy5KMl.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let o;
  o = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  c = ({ src: A, style: e = {}, alt: n = "" }) => {
    const t = A && A !== "undefined" && A !== null ? A : o;
    return s.jsx("img", {
      src: t,
      alt: n,
      style: e,
      onError: (a) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const r = a.currentTarget;
        r.onerror = null, r.src = o;
      }
    });
  };
});
export {
  c as S,
  __tla
};
