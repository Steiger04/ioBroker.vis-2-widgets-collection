import { t as e } from "./rolldown-runtime-XKyaHtl9.js";
import { t } from "./react-DlmbjZJV.js";
var n = e(((e2) => {
  var n2 = t();
  function r2(e3) {
    var t2 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t2 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t2 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e3 + `; visit ` + t2 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function i() {
  }
  var a = { d: { f: i, r: function() {
    throw Error(r2(522));
  }, D: i, C: i, L: i, m: i, X: i, S: i, M: i }, p: 0, findDOMNode: null }, o = /* @__PURE__ */ Symbol.for(`react.portal`), s = /* @__PURE__ */ Symbol.for(`react.recoverable`), c = /* @__PURE__ */ Symbol.for(`react.optimistic_key`);
  function l(e3, t2, n3) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o, key: r3 == null ? null : r3 === c ? c : `` + r3, children: e3, containerInfo: t2, implementation: n3 };
  }
  var u = n2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e3, t2) {
    if (e3 === `font`) return ``;
    if (typeof t2 == `string`) return t2 === `use-credentials` ? t2 : ``;
  }
  e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e2.browser = function(e3) {
    return { $$typeof: s, _reason: e3 };
  }, e2.createPortal = function(e3, t2) {
    var n3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t2 || t2.nodeType !== 1 && t2.nodeType !== 9 && t2.nodeType !== 11) throw Error(r2(299));
    return l(e3, t2, null, n3);
  }, e2.flushSync = function(e3) {
    var t2 = u.T, n3 = a.p;
    try {
      if (u.T = null, a.p = 2, e3) return e3();
    } finally {
      u.T = t2, a.p = n3, a.d.f();
    }
  }, e2.preconnect = function(e3, t2) {
    typeof e3 == `string` && (t2 ? (t2 = t2.crossOrigin, t2 = typeof t2 == `string` ? t2 === `use-credentials` ? t2 : `` : void 0) : t2 = null, a.d.C(e3, t2));
  }, e2.prefetchDNS = function(e3) {
    typeof e3 == `string` && a.d.D(e3);
  }, e2.preinit = function(e3, t2) {
    if (typeof e3 == `string` && t2 && typeof t2.as == `string`) {
      var n3 = t2.as, r3 = d(n3, t2.crossOrigin), i2 = typeof t2.integrity == `string` ? t2.integrity : void 0, o2 = typeof t2.fetchPriority == `string` ? t2.fetchPriority : void 0;
      n3 === `style` ? a.d.S(e3, typeof t2.precedence == `string` ? t2.precedence : void 0, { crossOrigin: r3, integrity: i2, fetchPriority: o2 }) : n3 === `script` && a.d.X(e3, { crossOrigin: r3, integrity: i2, fetchPriority: o2, nonce: typeof t2.nonce == `string` ? t2.nonce : void 0 });
    }
  }, e2.preinitModule = function(e3, t2) {
    if (typeof e3 == `string`) {
      if (typeof t2 == `object` && t2) {
        if (t2.as == null || t2.as === `script`) {
          var n3 = d(t2.as, t2.crossOrigin);
          a.d.M(e3, { crossOrigin: n3, integrity: typeof t2.integrity == `string` ? t2.integrity : void 0, nonce: typeof t2.nonce == `string` ? t2.nonce : void 0, fetchPriority: typeof t2.fetchPriority == `string` ? t2.fetchPriority : void 0 });
        }
      } else t2 ?? a.d.M(e3);
    }
  }, e2.preload = function(e3, t2) {
    if (typeof e3 == `string` && typeof t2 == `object` && t2 && typeof t2.as == `string`) {
      var n3 = t2.as, r3 = d(n3, t2.crossOrigin);
      a.d.L(e3, n3, { crossOrigin: r3, integrity: typeof t2.integrity == `string` ? t2.integrity : void 0, nonce: typeof t2.nonce == `string` ? t2.nonce : void 0, type: typeof t2.type == `string` ? t2.type : void 0, fetchPriority: typeof t2.fetchPriority == `string` ? t2.fetchPriority : void 0, referrerPolicy: typeof t2.referrerPolicy == `string` ? t2.referrerPolicy : void 0, imageSrcSet: typeof t2.imageSrcSet == `string` ? t2.imageSrcSet : void 0, imageSizes: typeof t2.imageSizes == `string` ? t2.imageSizes : void 0, media: typeof t2.media == `string` ? t2.media : void 0 });
    }
  }, e2.preloadModule = function(e3, t2) {
    if (typeof e3 == `string`) {
      if (t2) {
        var n3 = d(t2.as, t2.crossOrigin);
        a.d.m(e3, { as: typeof t2.as == `string` && t2.as !== `script` ? t2.as : void 0, crossOrigin: n3, integrity: typeof t2.integrity == `string` ? t2.integrity : void 0, nonce: typeof t2.nonce == `string` ? t2.nonce : void 0, fetchPriority: typeof t2.fetchPriority == `string` ? t2.fetchPriority : void 0 });
      } else a.d.m(e3);
    }
  }, e2.requestFormReset = function(e3) {
    a.d.r(e3);
  }, e2.unstable_batchedUpdates = function(e3, t2) {
    return e3(t2);
  }, e2.useFormState = function(e3, t2, n3) {
    return u.H.useFormState(e3, t2, n3);
  }, e2.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, e2.version = `19.3.1`;
})), r = e(((e2, t2) => {
  function r2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r2);
    } catch (e3) {
      console.error(e3);
    }
  }
  r2(), t2.exports = n();
}));
export {
  r as t
};
