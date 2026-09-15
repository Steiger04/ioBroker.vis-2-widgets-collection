import { d as g, j as x, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { v as T, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { p as $, __tla as __tla_2 } from "./useData-BTquM2A9.js";
let it, ct, at, et, ft, z, dt, ut, lt, B, G, w;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  let h, L, S, _;
  it = g(x.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward");
  at = g(x.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward");
  ct = g(x.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search");
  h = "b64:";
  w = (t) => {
    const n = new TextEncoder().encode(t);
    let r = "";
    for (let e = 0; e < n.length; e++) r += String.fromCharCode(n[e]);
    return btoa(r);
  };
  L = (t) => {
    const n = atob(t), r = new Uint8Array(n.length);
    for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
    return new TextDecoder().decode(r);
  };
  dt = (t) => t ? t.startsWith(h) ? L(t.slice(h.length)) : t : "";
  ut = (t) => `${h}${w(t)}`;
  S = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico|apng|tiff?)$/i;
  _ = "data:image/";
  function E(t) {
    if (t.length === 0 || t.length > 2) return false;
    for (let n = 0; n < t.length; n++) if (t.charCodeAt(n) > 127) return true;
    return false;
  }
  function b(t) {
    return typeof t != "string" ? null : t.trim() || null;
  }
  function P(t) {
    const n = b(t);
    return n ? n.startsWith(_) ? true : S.test(n) : false;
  }
  lt = function(t) {
    const n = b(t);
    return n ? n.startsWith(_) || $(n) ? true : E(n) : false;
  };
  const R = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, N = /^\d{4}-\d{2}-\d{2}$/, F = /^(\d{2})\.(\d{2})\.(\d{4})$/, j = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, v = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, H = /^(\d{2})\/(\d{2})\/(\d{4})$/, O = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, U = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function m(t, n) {
    return n >= 1 && n <= 12 && t >= 1 && t <= 31;
  }
  function M(t, n) {
    return t >= 1 && t <= 12 && n >= 1 && n <= 31;
  }
  function y(t, n, r) {
    return t >= 0 && t <= 23 && n >= 0 && n <= 59 && (r === void 0 || r >= 0 && r <= 59);
  }
  const V = [
    {
      regex: R,
      format: "ISO-8601"
    },
    {
      regex: N,
      format: "YYYY-MM-DD",
      validate: (t) => {
        const n = parseInt(t[0].slice(5, 7), 10), r = parseInt(t[0].slice(8, 10), 10);
        return m(r, n);
      }
    },
    {
      regex: v,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (t) => {
        const n = parseInt(t[1], 10), r = parseInt(t[2], 10), e = parseInt(t[4], 10), i = parseInt(t[5], 10), d = parseInt(t[6], 10);
        return m(n, r) && y(e, i, d);
      }
    },
    {
      regex: j,
      format: "dd.MM.yyyy HH:mm",
      validate: (t) => {
        const n = parseInt(t[1], 10), r = parseInt(t[2], 10), e = parseInt(t[4], 10), i = parseInt(t[5], 10);
        return m(n, r) && y(e, i);
      }
    },
    {
      regex: F,
      format: "dd.MM.yyyy",
      validate: (t) => {
        const n = parseInt(t[1], 10), r = parseInt(t[2], 10);
        return m(n, r);
      }
    },
    {
      regex: U,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (t) => {
        const n = parseInt(t[1], 10), r = parseInt(t[2], 10), e = parseInt(t[4], 10), i = parseInt(t[5], 10), d = parseInt(t[6], 10);
        return M(n, r) && y(e, i, d);
      }
    },
    {
      regex: O,
      format: "MM/dd/yyyy HH:mm",
      validate: (t) => {
        const n = parseInt(t[1], 10), r = parseInt(t[2], 10), e = parseInt(t[4], 10), i = parseInt(t[5], 10);
        return M(n, r) && y(e, i);
      }
    },
    {
      regex: H,
      format: "MM/dd/yyyy",
      validate: (t) => {
        const n = parseInt(t[1], 10), r = parseInt(t[2], 10);
        return M(n, r);
      }
    }
  ];
  B = function(t, n) {
    const r = t.trim();
    if (!r) return null;
    for (const e of V) {
      if (n && e.format !== n) continue;
      const i = r.match(e.regex);
      if (i) {
        if (e.validate && !e.validate(i)) continue;
        return {
          format: e.format,
          match: i
        };
      }
    }
    return null;
  };
  function W(t) {
    var _a;
    return ((_a = B(t)) == null ? void 0 : _a.format) ?? null;
  }
  function k(t) {
    return !Number.isFinite(t) || t < 0 ? null : t >= 1e11 ? "epoch-ms" : t >= 1e9 ? "epoch-s" : null;
  }
  z = function(t) {
    if (t == null) return {
      type: "null"
    };
    if (typeof t == "boolean") return {
      type: "boolean"
    };
    if (typeof t == "number") {
      const n = k(t);
      return n ? {
        type: "date",
        dateFormat: n
      } : {
        type: "number"
      };
    }
    if (typeof t == "string") {
      const n = W(t);
      return n ? {
        type: "date",
        dateFormat: n
      } : P(t) ? {
        type: "image"
      } : {
        type: "string"
      };
    }
    return Array.isArray(t) ? {
      type: "array"
    } : typeof t == "object" ? {
      type: "object"
    } : {
      type: "string"
    };
  };
  G = function(t) {
    const n = Object.keys(t).filter((r) => r !== "null");
    return n.length === 0 ? "null" : n.length === 1 ? n[0] : n.length === 2 && n.includes("date") && n.includes("string") ? "date" : n.length === 2 && n.includes("image") && n.includes("string") ? "image" : "mixed";
  };
  function J(t) {
    let n, r = 0;
    for (const [e, i] of Object.entries(t)) i > r && (n = e, r = i);
    return n;
  }
  const X = 3;
  function Z(t) {
    return {
      path: t,
      typeCounts: {},
      dateFormatCounts: {},
      nullCount: 0,
      distinctValues: /* @__PURE__ */ new Set(),
      numMin: void 0,
      numMax: void 0,
      strLenMin: void 0,
      strLenMax: void 0,
      dateMin: void 0,
      dateMax: void 0,
      nonNullCount: 0,
      samples: [],
      sampleSeen: /* @__PURE__ */ new Set()
    };
  }
  function C(t, n) {
    t[n] = (t[n] || 0) + 1;
  }
  function q(t, n) {
    if (t == null) return null;
    if (typeof t == "number") return n === "epoch-ms" ? new Date(t).toISOString() : n === "epoch-s" ? new Date(t * 1e3).toISOString() : null;
    if (typeof t != "string") return null;
    const r = t.trim();
    if (n === "ISO-8601" || n === "YYYY-MM-DD") return r;
    if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
      const e = r.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (e) {
        const i = e[1], d = e[2], c = e[3], s = e[4] || "00", o = e[5] || "00", a = e[6] || "00";
        return `${c}-${d}-${i}T${s}:${o}:${a}`;
      }
    }
    if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
      const e = r.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (e) {
        const i = e[1], d = e[2], c = e[3], s = e[4] || "00", o = e[5] || "00", a = e[6] || "00";
        return `${c}-${i}-${d}T${s}:${o}:${a}`;
      }
    }
    return null;
  }
  function K(t, n, r = 100, e = 0.8, i = 0.8) {
    const d = /* @__PURE__ */ new Map();
    for (const c of t) d.set(c, Z(c));
    for (const c of n) for (const s of t) {
      const o = d.get(s);
      if (!o) {
        console.warn(`[JsonTable] Missing accumulator for path: ${s}`);
        continue;
      }
      const a = c[s], u = z(a);
      if (C(o.typeCounts, u.type), u.type === "null") {
        o.nullCount++;
        continue;
      }
      if (o.nonNullCount++, o.samples.length < X && (typeof a == "string" || typeof a == "number" || typeof a == "boolean") && !o.sampleSeen.has(a) && (o.sampleSeen.add(a), o.samples.push(a)), u.dateFormat && C(o.dateFormatCounts, u.dateFormat), o.distinctValues.size < r && o.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((o.numMin === void 0 || a < o.numMin) && (o.numMin = a), (o.numMax === void 0 || a > o.numMax) && (o.numMax = a)), typeof a == "string") {
        const l = a.length;
        (o.strLenMin === void 0 || l < o.strLenMin) && (o.strLenMin = l), (o.strLenMax === void 0 || l > o.strLenMax) && (o.strLenMax = l);
      }
      if (u.dateFormat) {
        const l = q(a, u.dateFormat);
        l !== null && ((o.dateMin === void 0 || l < o.dateMin) && (o.dateMin = l), (o.dateMax === void 0 || l > o.dateMax) && (o.dateMax = l));
      }
    }
    return t.map((c) => {
      const s = d.get(c);
      let o = G(s.typeCounts);
      o === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < e && (o = "string"), o === "image" && s.nonNullCount > 0 && (s.typeCounts.image || 0) / s.nonNullCount < i && (o = "string");
      const a = o === "date" ? J(s.dateFormatCounts) : void 0, u = o === "date" ? s.typeCounts.date || 0 : s.typeCounts[o] || 0, l = s.nonNullCount > 0 ? Math.round(u / s.nonNullCount * 100) / 100 : 0, f = {
        path: c,
        type: o,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: l
      };
      return a && (f.dateFormat = a), o === "number" && (s.numMin !== void 0 && (f.min = s.numMin), s.numMax !== void 0 && (f.max = s.numMax)), o === "date" && (s.dateMin !== void 0 && (f.min = s.dateMin), s.dateMax !== void 0 && (f.max = s.dateMax)), (o === "string" || o === "mixed") && (s.strLenMin !== void 0 && (f.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (f.stringLengthMax = s.strLenMax)), s.samples.length > 0 && (f.samples = s.samples), f;
    });
  }
  function p(t, n, r, e, i, d, c, s) {
    if (d > s.maxDepth && (s.maxDepth = d), d > c) {
      r[n] = t, e.add(n);
      return;
    }
    if (t == null) {
      r[n] = null, e.add(n);
      return;
    }
    if (Array.isArray(t)) {
      if (t.length === 0) {
        r[n] = null, e.add(n);
        return;
      }
      for (let o = 0; o < t.length; o++) {
        o > s.maxArrayIndex && (s.maxArrayIndex = o);
        const a = `${n}[${o}]`;
        p(t[o], a, r, e, i, d + 1, c, s);
      }
      return;
    }
    if (t !== null && typeof t == "object") {
      if (i.has(t)) {
        r[n] = "[Circular]", e.add(n);
        return;
      }
      i.add(t);
      const o = Object.keys(t);
      if (o.length === 0) {
        r[n] = null, e.add(n);
        return;
      }
      for (const a of o) {
        const u = n ? `${n}.${a}` : a;
        p(t[a], u, r, e, i, d + 1, c, s);
      }
      return;
    }
    r[n] = t, e.add(n);
  }
  function Q(t, n = 10) {
    const r = /* @__PURE__ */ new Set(), e = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, i = [];
    for (const c of t) {
      const s = {}, o = /* @__PURE__ */ new WeakSet();
      if (c != null && typeof c == "object" && !Array.isArray(c)) for (const a of Object.keys(c)) p(c[a], a, s, r, o, 1, n, e);
      else p(c, "_value", s, r, o, 0, n, e);
      i.push(s);
    }
    const d = tt([
      ...r
    ]);
    for (const c of i) for (const s of d) s in c || (c[s] = null);
    return {
      paths: d,
      rows: i,
      maxDepth: e.maxDepth,
      maxArrayIndex: e.maxArrayIndex
    };
  }
  function tt(t) {
    return t.sort((n, r) => {
      const e = I(n), i = I(r), d = Math.min(e.length, i.length);
      for (let c = 0; c < d; c++) {
        const s = e[c], o = i[c], a = D(s), u = D(o);
        if (a !== null && u !== null) {
          if (a !== u) return a - u;
          continue;
        }
        if (s !== o) return s < o ? -1 : 1;
      }
      return e.length - i.length;
    });
  }
  function I(t) {
    return t.split(/\./).flatMap((n) => {
      const r = [], i = /^([^[]*)((?:\[\d+\])*)$/.exec(n);
      if (i) {
        i[1] && r.push(i[1]);
        const d = i[2].match(/\[\d+\]/g);
        d && r.push(...d);
      } else r.push(n);
      return r;
    });
  }
  function D(t) {
    const n = /^\[(\d+)\]$/.exec(t);
    return n ? parseInt(n[1], 10) : null;
  }
  const nt = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8,
    imageConfidenceThreshold: 0.8
  };
  et = function(t, n) {
    const r = performance.now(), e = {
      ...nt,
      ...n
    };
    if (!t || t.length === 0) return {
      columns: [],
      rows: [],
      meta: {
        rowCount: 0,
        columnCount: 0,
        maxDepth: 0,
        maxArrayIndex: 0,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: 0,
        nullPercentage: 0,
        analysisTimeMs: 0
      }
    };
    const i = Q(t, e.maxDepth), d = K(i.paths, i.rows, e.maxDistinct, e.dateConfidenceThreshold, e.imageConfidenceThreshold), c = i.paths.length * i.rows.length, s = d.reduce((u, l) => u + l.nullCount, 0), o = c > 0 ? Math.round(s / c * 1e3) / 10 : 0, a = Math.round((performance.now() - r) * 100) / 100;
    return {
      columns: d,
      rows: i.rows,
      meta: {
        rowCount: i.rows.length,
        columnCount: d.length,
        maxDepth: i.maxDepth,
        maxArrayIndex: i.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: s,
        nullPercentage: o,
        analysisTimeMs: a
      }
    };
  };
  ft = function(t, n) {
    return T.useMemo(() => et(t, n), [
      t,
      n == null ? void 0 : n.maxDepth,
      n == null ? void 0 : n.maxDistinct,
      n == null ? void 0 : n.dateConfidenceThreshold,
      n == null ? void 0 : n.imageConfidenceThreshold
    ]);
  };
});
export {
  it as D,
  ct as S,
  at as U,
  __tla,
  et as a,
  ft as b,
  z as c,
  dt as d,
  ut as e,
  lt as i,
  B as m,
  G as r,
  w as u
};
