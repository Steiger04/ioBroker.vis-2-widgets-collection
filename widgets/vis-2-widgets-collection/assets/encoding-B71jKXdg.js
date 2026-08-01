import { d as s, j as c, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
let h, i, b, a;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let r, d;
  h = s(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search");
  r = "b64:";
  a = (e) => {
    const o = new TextEncoder().encode(e);
    let n = "";
    for (let t = 0; t < o.length; t++) n += String.fromCharCode(o[t]);
    return btoa(n);
  };
  d = (e) => {
    const o = atob(e), n = new Uint8Array(o.length);
    for (let t = 0; t < o.length; t++) n[t] = o.charCodeAt(t);
    return new TextDecoder().decode(n);
  };
  i = (e) => e ? e.startsWith(r) ? d(e.slice(r.length)) : e : "";
  b = (e) => `${r}${a(e)}`;
});
export {
  h as S,
  __tla,
  i as d,
  b as e,
  a as u
};
