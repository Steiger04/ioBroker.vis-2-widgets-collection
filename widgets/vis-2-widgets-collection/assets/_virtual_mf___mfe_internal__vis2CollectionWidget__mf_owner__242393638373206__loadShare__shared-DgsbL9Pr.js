const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_commonjsHelpers-Cpj98o6Y.js","./react.production-DZQv_Wpp.js","./index-C_nIi-qN.js"])))=>i.map(i=>d[i]);
import { _ as $ } from "./vite-preload-helper-PPVm8Dsz.js";
let te, m_, ne, ge, Ue, $e, We, Le, Ve, Ye, N_, L_, D_, k_, I_, w_, Pe, Ke, Ie, Oe, B, Z, q, xe, Ae, Q, pe, de, he, Me, ke, qe, ee, Se, me, _e, st, Ne;
let __tla = (async () => {
  function v(e, t) {
    for (var _ = 0; _ < t.length; _++) {
      const r = t[_];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const n in r) if (n !== "default" && !(n in e)) {
          const l = Object.getOwnPropertyDescriptor(r, n);
          l && Object.defineProperty(e, n, l.get ? l : {
            enumerable: true,
            get: () => r[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const s = (e, t) => {
    const _ = e[t.canonical];
    if (_ !== void 0) return _;
    const r = t.aliases || [];
    for (const n of r) {
      if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
      const l = e[n];
      if (l !== void 0) return e[t.canonical] = l, l;
    }
  }, L = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), r_ = (e) => {
    let t = e[L];
    return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, L, {
      value: t,
      enumerable: false,
      configurable: false,
      writable: false
    })), t;
  }, y = (e, t, _) => {
    const r = r_(e);
    (r[t.canonical] ||= /* @__PURE__ */ new Set()).add(_);
  }, N = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), n_ = (e) => {
    let t = e[N];
    return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, N, {
      value: t,
      enumerable: false,
      configurable: false,
      writable: false
    })), t;
  }, G = (e) => {
    const t = [
      e,
      e == null ? void 0 : e.default
    ];
    for (const _ of t) if (!(!_ || typeof _ != "object")) {
      for (const r of [
        "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
        "__TEST_INTERNALS",
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"
      ]) {
        const n = _[r];
        if (n && typeof n == "object") return {
          internals: n
        };
      }
      if (typeof _.useState == "function") return {
        hook: _.useState
      };
    }
  }, a_ = (e, t) => {
    if (e === t) return true;
    const _ = G(e), r = G(t);
    if (!_ || !r) return false;
    const n = _.internals, l = r.internals;
    return n !== void 0 || l !== void 0 ? n !== void 0 && n === l : typeof _.hook == "function" && _.hook === r.hook;
  }, T = (e, t, _, r) => {
    var _a;
    const n = s(e, t);
    if (n !== void 0 && a_(n, _)) return _;
    e[t.canonical] = _;
    const l = t.aliases || [];
    for (const C of l) Object.defineProperty(e, C, {
      value: _,
      enumerable: true,
      configurable: true,
      writable: true
    });
    e[N], n_(e)[t.canonical] = r;
    const a = (_a = e[L]) == null ? void 0 : _a[t.canonical];
    if (a) for (const C of a) C(_);
    return _;
  }, H = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let D = globalThis[H];
  if (!D) {
    let e, t;
    const _ = new Promise((r, n) => {
      e = r, t = n;
    });
    D = globalThis[H] = {
      initPromise: _,
      initResolve: e,
      initReject: t
    };
  }
  const l_ = D.initPromise, E = "__mf_module_cache__";
  globalThis[E] ||= {
    share: {},
    remote: {}
  };
  globalThis[E].share ||= {};
  globalThis[E].remote ||= {};
  const i = globalThis[E], s_ = (e) => {
    const t = i.pendingShareLoads ||= [];
    t.push(e);
    const _ = () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
    return e.then(_, _), e;
  };
  for (const e of Object.keys(i.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    i.share[t] === void 0 && (i.share[t] = i.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    i.share[t] === void 0 && (i.share[t] = i.share[e]);
  }
  const i_ = (e) => {
    const t = (() => {
      let _ = e;
      for (let r = 0; r < 5; r++) {
        const n = _ == null ? void 0 : _.default;
        if (!n || typeof n != "object") break;
        const l = Object.keys(_).filter((a) => a !== "default").map((a) => _[a]);
        if (l.length > 0 && l.some((a) => a !== void 0)) break;
        _ = n;
      }
      return _;
    })();
    return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
  };
  let Y;
  const k = (e) => {
    q = e.Fragment, B = e.jsx, Z = e.jsxs, Y = e.default ?? e;
  };
  y(i.share, {
    canonical: "default:react/jsx-runtime"
  }, k);
  let h = s(i.share, {
    canonical: "default:react/jsx-runtime",
    aliases: [
      "react/jsx-runtime"
    ]
  });
  h === void 0 ? s_(l_.then(() => {
    if (h = s(i.share, {
      canonical: "default:react/jsx-runtime",
      aliases: [
        "react/jsx-runtime"
      ]
    }), h !== void 0) {
      k(h);
      return;
    }
    return $(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-BNZ-MNJY.js"), __vite__mapDeps([0]), import.meta.url).then((e) => {
      h = i_(e), T(i.share, {
        canonical: "default:react/jsx-runtime",
        aliases: [
          "react/jsx-runtime"
        ]
      }, h, "vis2CollectionWidget");
    });
  })) : k(h);
  let o_, J;
  o_ = h;
  L_ = v({
    __proto__: null,
    get Fragment() {
      return q;
    },
    get default() {
      return Y;
    },
    get jsx() {
      return B;
    },
    get jsxs() {
      return Z;
    }
  }, [
    o_
  ]);
  J = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let I = globalThis[J];
  if (!I) {
    let e, t;
    const _ = new Promise((r, n) => {
      e = r, t = n;
    });
    I = globalThis[J] = {
      initPromise: _,
      initResolve: e,
      initReject: t
    };
  }
  const f_ = I.initPromise, O = "__mf_module_cache__";
  globalThis[O] ||= {
    share: {},
    remote: {}
  };
  globalThis[O].share ||= {};
  globalThis[O].remote ||= {};
  const o = globalThis[O], u_ = (e) => {
    const t = o.pendingShareLoads ||= [];
    t.push(e);
    const _ = () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
    return e.then(_, _), e;
  };
  for (const e of Object.keys(o.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    o.share[t] === void 0 && (o.share[t] = o.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    o.share[t] === void 0 && (o.share[t] = o.share[e]);
  }
  const c_ = (e) => {
    const t = (() => {
      let _ = e;
      for (let r = 0; r < 5; r++) {
        const n = _ == null ? void 0 : _.default;
        if (!n || typeof n != "object") break;
        const l = Object.keys(_).filter((a) => a !== "default").map((a) => _[a]);
        if (l.length > 0 && l.some((a) => a !== void 0)) break;
        _ = n;
      }
      return _;
    })();
    return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
  };
  let X, re, ae, le, se, ie, oe, fe, ue, ce, be, ve, ye, Te, Ee, je, Re, Ce, De, we, Fe;
  const w = (e) => {
    X = e.Activity, ee = e.Children, te = e.Component, _e = e.Fragment, re = e.Profiler, ne = e.PureComponent, ae = e.StrictMode, le = e.Suspense, se = e.ViewTransition, ie = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = e.__COMPILER_RUNTIME, fe = e.addTransitionType, ue = e.cache, ce = e.cacheSignal, me = e.cloneElement, he = e.createContext, de = e.createElement, ge = e.createRef, pe = e.forwardRef, Se = e.isValidElement, be = e.lazy, $e = e.memo, ve = e.startTransition, ye = e.unstable_useCacheRefresh, Te = e.use, Ee = e.useActionState, Oe = e.useCallback, Pe = e.useContext, je = e.useDebugValue, Re = e.useDeferredValue, xe = e.useEffect, Ce = e.useEffectEvent, Le = e.useId, Ne = e.useImperativeHandle, De = e.useInsertionEffect, ke = e.useLayoutEffect, Ie = e.useMemo, we = e.useOptimistic, Me = e.useReducer, Ae = e.useRef, Ke = e.useState, We = e.useSyncExternalStore, Fe = e.useTransition, Ue = e.version, Q = e.default ?? e;
  };
  y(o.share, {
    canonical: "default:react"
  }, w);
  let d = s(o.share, {
    canonical: "default:react",
    aliases: [
      "react"
    ]
  });
  d === void 0 ? u_(f_.then(() => {
    if (d = s(o.share, {
      canonical: "default:react",
      aliases: [
        "react"
      ]
    }), d !== void 0) {
      w(d);
      return;
    }
    return $(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react__prebuild__-BRnGQ4fa.js"), __vite__mapDeps([0,1]), import.meta.url).then((e) => {
      d = c_(e), T(o.share, {
        canonical: "default:react",
        aliases: [
          "react"
        ]
      }, d, "vis2CollectionWidget");
    });
  })) : w(d);
  let ze;
  m_ = d;
  N_ = v({
    __proto__: null,
    get Activity() {
      return X;
    },
    get Children() {
      return ee;
    },
    get Component() {
      return te;
    },
    get Fragment() {
      return _e;
    },
    get Profiler() {
      return re;
    },
    get PureComponent() {
      return ne;
    },
    get StrictMode() {
      return ae;
    },
    get Suspense() {
      return le;
    },
    get ViewTransition() {
      return se;
    },
    get __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE() {
      return ie;
    },
    get __COMPILER_RUNTIME() {
      return oe;
    },
    get addTransitionType() {
      return fe;
    },
    get cache() {
      return ue;
    },
    get cacheSignal() {
      return ce;
    },
    get cloneElement() {
      return me;
    },
    get createContext() {
      return he;
    },
    get createElement() {
      return de;
    },
    get createRef() {
      return ge;
    },
    get default() {
      return Q;
    },
    get forwardRef() {
      return pe;
    },
    get isValidElement() {
      return Se;
    },
    get lazy() {
      return be;
    },
    get memo() {
      return $e;
    },
    get startTransition() {
      return ve;
    },
    get unstable_useCacheRefresh() {
      return ye;
    },
    get use() {
      return Te;
    },
    get useActionState() {
      return Ee;
    },
    get useCallback() {
      return Oe;
    },
    get useContext() {
      return Pe;
    },
    get useDebugValue() {
      return je;
    },
    get useDeferredValue() {
      return Re;
    },
    get useEffect() {
      return xe;
    },
    get useEffectEvent() {
      return Ce;
    },
    get useId() {
      return Le;
    },
    get useImperativeHandle() {
      return Ne;
    },
    get useInsertionEffect() {
      return De;
    },
    get useLayoutEffect() {
      return ke;
    },
    get useMemo() {
      return Ie;
    },
    get useOptimistic() {
      return we;
    },
    get useReducer() {
      return Me;
    },
    get useRef() {
      return Ae;
    },
    get useState() {
      return Ke;
    },
    get useSyncExternalStore() {
      return We;
    },
    get useTransition() {
      return Fe;
    },
    get version() {
      return Ue;
    }
  }, [
    m_
  ]);
  ze = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let M = globalThis[ze];
  if (!M) {
    let e, t;
    const _ = new Promise((r, n) => {
      e = r, t = n;
    });
    M = globalThis[ze] = {
      initPromise: _,
      initResolve: e,
      initReject: t
    };
  }
  const h_ = M.initPromise, P = "__mf_module_cache__";
  globalThis[P] ||= {
    share: {},
    remote: {}
  };
  globalThis[P].share ||= {};
  globalThis[P].remote ||= {};
  const f = globalThis[P], d_ = (e) => {
    const t = f.pendingShareLoads ||= [];
    t.push(e);
    const _ = () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
    return e.then(_, _), e;
  };
  for (const e of Object.keys(f.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    f.share[t] === void 0 && (f.share[t] = f.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    f.share[t] === void 0 && (f.share[t] = f.share[e]);
  }
  const g_ = (e) => {
    const t = (() => {
      let _ = e;
      for (let r = 0; r < 5; r++) {
        const n = _ == null ? void 0 : _.default;
        if (!n || typeof n != "object") break;
        const l = Object.keys(_).filter((a) => a !== "default").map((a) => _[a]);
        if (l.length > 0 && l.some((a) => a !== void 0)) break;
        _ = n;
      }
      return _;
    })();
    return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
  };
  let Ge, He, Be, Ze, Je, Qe, Xe, et, tt, _t, rt, nt, at;
  const A = (e) => {
    Ge = e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, He = e.browser, Ye = e.createPortal, qe = e.flushSync, Be = e.preconnect, Ze = e.prefetchDNS, Je = e.preinit, Qe = e.preinitModule, Xe = e.preload, et = e.preloadModule, tt = e.requestFormReset, _t = e.unstable_batchedUpdates, rt = e.useFormState, nt = e.useFormStatus, at = e.version, Ve = e.default ?? e;
  };
  y(f.share, {
    canonical: "default:react-dom"
  }, A);
  let g = s(f.share, {
    canonical: "default:react-dom",
    aliases: [
      "react-dom"
    ]
  });
  g === void 0 ? d_(h_.then(() => {
    if (g = s(f.share, {
      canonical: "default:react-dom",
      aliases: [
        "react-dom"
      ]
    }), g !== void 0) {
      A(g);
      return;
    }
    return $(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_2_dom__prebuild__-BDHCETjX.js"), __vite__mapDeps([2,0,1]), import.meta.url).then((e) => {
      g = g_(e), T(f.share, {
        canonical: "default:react-dom",
        aliases: [
          "react-dom"
        ]
      }, g, "vis2CollectionWidget");
    });
  })) : A(g);
  let p_, lt;
  p_ = g;
  D_ = v({
    __proto__: null,
    get __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE() {
      return Ge;
    },
    get browser() {
      return He;
    },
    get createPortal() {
      return Ye;
    },
    get default() {
      return Ve;
    },
    get flushSync() {
      return qe;
    },
    get preconnect() {
      return Be;
    },
    get prefetchDNS() {
      return Ze;
    },
    get preinit() {
      return Je;
    },
    get preinitModule() {
      return Qe;
    },
    get preload() {
      return Xe;
    },
    get preloadModule() {
      return et;
    },
    get requestFormReset() {
      return tt;
    },
    get unstable_batchedUpdates() {
      return _t;
    },
    get useFormState() {
      return rt;
    },
    get useFormStatus() {
      return nt;
    },
    get version() {
      return at;
    }
  }, [
    p_
  ]);
  lt = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let K = globalThis[lt];
  if (!K) {
    let e, t;
    const _ = new Promise((r, n) => {
      e = r, t = n;
    });
    K = globalThis[lt] = {
      initPromise: _,
      initResolve: e,
      initReject: t
    };
  }
  const S_ = K.initPromise, j = "__mf_module_cache__";
  globalThis[j] ||= {
    share: {},
    remote: {}
  };
  globalThis[j].share ||= {};
  globalThis[j].remote ||= {};
  const u = globalThis[j], b_ = (e) => {
    const t = u.pendingShareLoads ||= [];
    t.push(e);
    const _ = () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
    return e.then(_, _), e;
  };
  for (const e of Object.keys(u.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    u.share[t] === void 0 && (u.share[t] = u.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    u.share[t] === void 0 && (u.share[t] = u.share[e]);
  }
  const $_ = (e) => {
    const t = (() => {
      let _ = e;
      for (let r = 0; r < 5; r++) {
        const n = _ == null ? void 0 : _.default;
        if (!n || typeof n != "object") break;
        const l = Object.keys(_).filter((a) => a !== "default").map((a) => _[a]);
        if (l.length > 0 && l.some((a) => a !== void 0)) break;
        _ = n;
      }
      return _;
    })();
    return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
  };
  let it, ot, ft, ut, ct, mt, ht, dt, gt, pt, St, bt, $t, vt, yt, Tt, Et, Ot, Pt, jt, Rt, xt, Ct, Lt, Nt, Dt, kt, It, wt, Mt, At, Kt, Wt, Ft, Ut, zt, Vt, Gt, Ht, Yt;
  const W = (e) => {
    it = e.momentProperties, ot = e.suppressDeprecationWarnings, ft = e.deprecationHandler, ut = e.parseTwoDigitYear, ct = e.createFromInputFallback, mt = e.ISO_8601, ht = e.RFC_2822, dt = e.updateOffset, gt = e.defaultFormat, pt = e.defaultFormatUtc, St = e.lang, bt = e.langData, $t = e.version, vt = e.fn, yt = e.min, Tt = e.max, Et = e.now, Ot = e.utc, Pt = e.unix, jt = e.months, Rt = e.isDate, xt = e.locale, Ct = e.invalid, Lt = e.duration, Nt = e.isMoment, Dt = e.weekdays, kt = e.parseZone, It = e.localeData, wt = e.isDuration, Mt = e.monthsShort, At = e.weekdaysMin, Kt = e.defineLocale, Wt = e.updateLocale, Ft = e.locales, Ut = e.weekdaysShort, zt = e.normalizeUnits, Vt = e.relativeTimeRounding, Gt = e.relativeTimeThreshold, Ht = e.calendarFormat, Yt = e.HTML5_FMT, st = e.default ?? e;
  };
  y(u.share, {
    canonical: "default:moment"
  }, W);
  let p = s(u.share, {
    canonical: "default:moment",
    aliases: [
      "moment"
    ]
  });
  p === void 0 ? b_(S_.then(() => {
    if (p = s(u.share, {
      canonical: "default:moment",
      aliases: [
        "moment"
      ]
    }), p !== void 0) {
      W(p);
      return;
    }
    return $(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__moment__prebuild__-DvojzKsw.js"), [], import.meta.url).then((e) => {
      p = $_(e), T(u.share, {
        canonical: "default:moment",
        aliases: [
          "moment"
        ]
      }, p, "vis2CollectionWidget");
    });
  })) : W(p);
  let v_, qt;
  v_ = p;
  k_ = v({
    __proto__: null,
    get HTML5_FMT() {
      return Yt;
    },
    get ISO_8601() {
      return mt;
    },
    get RFC_2822() {
      return ht;
    },
    get calendarFormat() {
      return Ht;
    },
    get createFromInputFallback() {
      return ct;
    },
    get default() {
      return st;
    },
    get defaultFormat() {
      return gt;
    },
    get defaultFormatUtc() {
      return pt;
    },
    get defineLocale() {
      return Kt;
    },
    get deprecationHandler() {
      return ft;
    },
    get duration() {
      return Lt;
    },
    get fn() {
      return vt;
    },
    get invalid() {
      return Ct;
    },
    get isDate() {
      return Rt;
    },
    get isDuration() {
      return wt;
    },
    get isMoment() {
      return Nt;
    },
    get lang() {
      return St;
    },
    get langData() {
      return bt;
    },
    get locale() {
      return xt;
    },
    get localeData() {
      return It;
    },
    get locales() {
      return Ft;
    },
    get max() {
      return Tt;
    },
    get min() {
      return yt;
    },
    get momentProperties() {
      return it;
    },
    get months() {
      return jt;
    },
    get monthsShort() {
      return Mt;
    },
    get normalizeUnits() {
      return zt;
    },
    get now() {
      return Et;
    },
    get parseTwoDigitYear() {
      return ut;
    },
    get parseZone() {
      return kt;
    },
    get relativeTimeRounding() {
      return Vt;
    },
    get relativeTimeThreshold() {
      return Gt;
    },
    get suppressDeprecationWarnings() {
      return ot;
    },
    get unix() {
      return Pt;
    },
    get updateLocale() {
      return Wt;
    },
    get updateOffset() {
      return dt;
    },
    get utc() {
      return Ot;
    },
    get version() {
      return $t;
    },
    get weekdays() {
      return Dt;
    },
    get weekdaysMin() {
      return At;
    },
    get weekdaysShort() {
      return Ut;
    }
  }, [
    v_
  ]);
  qt = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let F = globalThis[qt];
  if (!F) {
    let e, t;
    const _ = new Promise((r, n) => {
      e = r, t = n;
    });
    F = globalThis[qt] = {
      initPromise: _,
      initResolve: e,
      initReject: t
    };
  }
  const y_ = F.initPromise, R = "__mf_module_cache__";
  globalThis[R] ||= {
    share: {},
    remote: {}
  };
  globalThis[R].share ||= {};
  globalThis[R].remote ||= {};
  const c = globalThis[R], T_ = (e) => {
    const t = c.pendingShareLoads ||= [];
    t.push(e);
    const _ = () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
    return e.then(_, _), e;
  };
  for (const e of Object.keys(c.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    c.share[t] === void 0 && (c.share[t] = c.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    c.share[t] === void 0 && (c.share[t] = c.share[e]);
  }
  const E_ = (e) => {
    const t = (() => {
      let _ = e;
      for (let r = 0; r < 5; r++) {
        const n = _ == null ? void 0 : _.default;
        if (!n || typeof n != "object") break;
        const l = Object.keys(_).filter((a) => a !== "default").map((a) => _[a]);
        if (l.length > 0 && l.some((a) => a !== void 0)) break;
        _ = n;
      }
      return _;
    })();
    return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
  };
  let Bt, Zt, Jt;
  const U = (e) => {
    Zt = e.Fragment, Jt = e.jsxDEV, Bt = e.default ?? e;
  };
  y(c.share, {
    canonical: "default:react/jsx-dev-runtime"
  }, U);
  let S = s(c.share, {
    canonical: "default:react/jsx-dev-runtime",
    aliases: [
      "react/jsx-dev-runtime"
    ]
  });
  S === void 0 ? T_(y_.then(() => {
    if (S = s(c.share, {
      canonical: "default:react/jsx-dev-runtime",
      aliases: [
        "react/jsx-dev-runtime"
      ]
    }), S !== void 0) {
      U(S);
      return;
    }
    return $(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-DJ116YMb.js"), __vite__mapDeps([0]), import.meta.url).then((e) => {
      S = E_(e), T(c.share, {
        canonical: "default:react/jsx-dev-runtime",
        aliases: [
          "react/jsx-dev-runtime"
        ]
      }, S, "vis2CollectionWidget");
    });
  })) : U(S);
  let O_, Qt;
  O_ = S;
  I_ = v({
    __proto__: null,
    get Fragment() {
      return Zt;
    },
    get default() {
      return Bt;
    },
    get jsxDEV() {
      return Jt;
    }
  }, [
    O_
  ]);
  Qt = "__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__mf_v__runtimeInit__mf_v__.js__";
  let z = globalThis[Qt];
  if (!z) {
    let e, t;
    const _ = new Promise((r, n) => {
      e = r, t = n;
    });
    z = globalThis[Qt] = {
      initPromise: _,
      initResolve: e,
      initReject: t
    };
  }
  const P_ = z.initPromise, x = "__mf_module_cache__";
  globalThis[x] ||= {
    share: {},
    remote: {}
  };
  globalThis[x].share ||= {};
  globalThis[x].remote ||= {};
  const m = globalThis[x], j_ = (e) => {
    const t = m.pendingShareLoads ||= [];
    t.push(e);
    const _ = () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
    return e.then(_, _), e;
  };
  for (const e of Object.keys(m.share)) if (e.startsWith("default:")) {
    const t = e.slice(8);
    m.share[t] === void 0 && (m.share[t] = m.share[e]);
  } else if (!e.includes(":")) {
    const t = "default:" + e;
    m.share[t] === void 0 && (m.share[t] = m.share[e]);
  }
  const R_ = (e) => {
    const t = (() => {
      let _ = e;
      for (let r = 0; r < 5; r++) {
        const n = _ == null ? void 0 : _.default;
        if (!n || typeof n != "object") break;
        const l = Object.keys(_).filter((a) => a !== "default").map((a) => _[a]);
        if (l.length > 0 && l.some((a) => a !== void 0)) break;
        _ = n;
      }
      return _;
    })();
    return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
  };
  let Xt, e_, t_, __;
  const V = (e) => {
    e_ = e.createRoot, t_ = e.hydrateRoot, __ = e.version, Xt = e.default ?? e;
  };
  y(m.share, {
    canonical: "default:react-dom/client"
  }, V);
  let b = s(m.share, {
    canonical: "default:react-dom/client",
    aliases: [
      "react-dom/client"
    ]
  });
  b === void 0 ? j_(P_.then(() => {
    if (b = s(m.share, {
      canonical: "default:react-dom/client",
      aliases: [
        "react-dom/client"
      ]
    }), b !== void 0) {
      V(b);
      return;
    }
    return $(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__prebuild__react_mf_2_dom_mf_1_client__prebuild__-Bh0CWfgq.js"), __vite__mapDeps([0,2,1]), import.meta.url).then((e) => {
      b = R_(e), T(m.share, {
        canonical: "default:react-dom/client",
        aliases: [
          "react-dom/client"
        ]
      }, b, "vis2CollectionWidget");
    });
  })) : V(b);
  let x_;
  x_ = b;
  w_ = v({
    __proto__: null,
    get createRoot() {
      return e_;
    },
    get default() {
      return Xt;
    },
    get hydrateRoot() {
      return t_;
    },
    get version() {
      return __;
    }
  }, [
    x_
  ]);
})();
export {
  te as A,
  m_ as B,
  ne as C,
  ge as D,
  Ue as E,
  $e as F,
  We as G,
  Le as H,
  Ve as I,
  Ye as J,
  N_ as R,
  L_ as _,
  __tla,
  D_ as a,
  k_ as b,
  I_ as c,
  w_ as d,
  Pe as e,
  Ke as f,
  Ie as g,
  Oe as h,
  B as i,
  Z as j,
  q as k,
  xe as l,
  Ae as m,
  Q as n,
  pe as o,
  de as p,
  he as q,
  Me as r,
  ke as s,
  qe as t,
  ee as u,
  Se as v,
  me as w,
  _e as x,
  st as y,
  Ne as z
};
