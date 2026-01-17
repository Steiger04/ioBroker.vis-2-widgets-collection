function $(t) {
  if (!t || typeof t != "string") return null;
  const i = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, o = t.match(i);
  if (!o) return null;
  let n = o[1];
  n.length === 3 && (n = n.split("").map((u) => u + u).join(""));
  const e = parseInt(n.substring(0, 2), 16), l = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  let s = 1;
  if (n.length === 8) {
    const u = parseInt(n.substring(6, 8), 16);
    s = Math.round(u / 255 * 1e3) / 1e3;
  }
  return { r: e, g: l, b: a, a: s };
}
function b(t) {
  if (!t || typeof t != "string") return null;
  const i = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i, o = t.match(i);
  if (!o) return null;
  const n = parseInt(o[1], 10), e = parseInt(o[2], 10), l = parseInt(o[3], 10), a = o[4] !== void 0 ? parseFloat(o[4]) : 1;
  return n < 0 || n > 255 || e < 0 || e > 255 || l < 0 || l > 255 || a < 0 || a > 1 ? null : { r: n, g: e, b: l, a: Math.round(a * 1e3) / 1e3 };
}
function g(t) {
  if (!t || typeof t != "string") return null;
  const i = t.trim();
  return i.startsWith("#") ? $(i) : i.toLowerCase().startsWith("rgb") ? b(i) : null;
}
function d(t) {
  if (!t || typeof t != "string") return null;
  const i = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, o = Array.from(t.matchAll(i));
  if (o.length < 2) return null;
  const n = o.map((e, l) => {
    const a = e[1];
    let s;
    return e[2] ? s = parseFloat(e[2]) : s = l / (o.length - 1) * 100, { color: a, position: s };
  });
  return n.sort((e, l) => e.position - l.position), n;
}
function h(t) {
  if (!t || t.length < 2) return null;
  const i = t.find((r) => r.position === 50);
  if (i) {
    const r = g(i.color);
    return r ? r.a === 1 ? `rgb(${r.r}, ${r.g}, ${r.b})` : `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})` : null;
  }
  let o = null, n = null;
  for (let r = 0; r < t.length; r++) if (t[r].position <= 50 && (o = t[r]), t[r].position > 50 && !n) {
    n = t[r];
    break;
  }
  if (!n && o) {
    const r = g(o.color);
    return r ? r.a === 1 ? `rgb(${r.r}, ${r.g}, ${r.b})` : `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})` : null;
  }
  if (!o && n) {
    const r = g(n.color);
    return r ? r.a === 1 ? `rgb(${r.r}, ${r.g}, ${r.b})` : `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})` : null;
  }
  if (!o || !n) return null;
  const e = g(o.color), l = g(n.color);
  if (!e || !l) return null;
  const a = n.position - o.position;
  if (a === 0) {
    const r = l;
    return r.a === 1 ? `rgb(${r.r}, ${r.g}, ${r.b})` : `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`;
  }
  const s = (50 - o.position) / a, u = Math.round(e.r + (l.r - e.r) * s), c = Math.round(e.g + (l.g - e.g) * s), f = Math.round(e.b + (l.b - e.b) * s), p = Math.round((e.a + (l.a - e.a) * s) * 1e3) / 1e3;
  return p === 1 ? `rgb(${u}, ${c}, ${f})` : `rgba(${u}, ${c}, ${f}, ${p})`;
}
function m(t) {
  if (t == null || typeof t != "string") return null;
  const i = t.trim();
  if (i === "") return null;
  if (!/^(linear-gradient|radial-gradient)\(/i.test(i)) return g(i) ? i : null;
  try {
    const e = d(i);
    return e ? h(e) : null;
  } catch {
    return null;
  }
}
export {
  m as e
};
