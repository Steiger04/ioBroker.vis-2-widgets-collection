import { g as m } from "./_commonjsHelpers-Cpj98o6Y.js";
import { r as u } from "./react.production-DZQv_Wpp.js";
function i(s, c) {
  for (var n = 0; n < c.length; n++) {
    const _ = c[n];
    if (typeof _ != "string" && !Array.isArray(_)) {
      for (const t in _) if (t !== "default" && !(t in s)) {
        const a = Object.getOwnPropertyDescriptor(_, t);
        a && Object.defineProperty(s, t, a.get ? a : { enumerable: true, get: () => _[t] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var r = { exports: {} };
r.exports = u;
var f = r.exports;
const l = m(f), o = i({ __proto__: null, default: l }, [f]), e = o, p = e.Activity, R = e.Children, S = e.Component, T = e.Fragment, C = e.Profiler, g = e.PureComponent, N = e.StrictMode, y = e.Suspense, O = e.ViewTransition, b = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = e.__COMPILER_RUNTIME, x = e.addTransitionType, A = e.cache, I = e.cacheSignal, P = e.cloneElement, h = e.createContext, D = e.createElement, M = e.createRef, L = e.forwardRef, U = e.isValidElement, V = e.lazy, w = e.memo, j = e.startTransition, H = e.unstable_useCacheRefresh, k = e.use, z = e.useActionState, F = e.useCallback, W = e.useContext, G = e.useDebugValue, Y = e.useDeferredValue, q = e.useEffect, B = e.useEffectEvent, J = e.useId, K = e.useImperativeHandle, Q = e.useInsertionEffect, X = e.useLayoutEffect, Z = e.useMemo, $ = e.useOptimistic, ee = e.useReducer, _e = e.useRef, te = e.useState, se = e.useSyncExternalStore, ne = e.useTransition, ae = e.version, oe = Reflect.get(o, "default") ?? o;
export {
  p as Activity,
  R as Children,
  S as Component,
  T as Fragment,
  C as Profiler,
  g as PureComponent,
  N as StrictMode,
  y as Suspense,
  O as ViewTransition,
  b as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  v as __COMPILER_RUNTIME,
  x as addTransitionType,
  A as cache,
  I as cacheSignal,
  P as cloneElement,
  h as createContext,
  D as createElement,
  M as createRef,
  oe as default,
  L as forwardRef,
  U as isValidElement,
  V as lazy,
  w as memo,
  j as startTransition,
  H as unstable_useCacheRefresh,
  k as use,
  z as useActionState,
  F as useCallback,
  W as useContext,
  G as useDebugValue,
  Y as useDeferredValue,
  q as useEffect,
  B as useEffectEvent,
  J as useId,
  K as useImperativeHandle,
  Q as useInsertionEffect,
  X as useLayoutEffect,
  Z as useMemo,
  $ as useOptimistic,
  ee as useReducer,
  _e as useRef,
  te as useState,
  se as useSyncExternalStore,
  ne as useTransition,
  ae as version
};
