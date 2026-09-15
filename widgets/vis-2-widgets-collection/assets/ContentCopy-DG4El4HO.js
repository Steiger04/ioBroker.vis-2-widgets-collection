import { g as i } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as p, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { d as m, j as y, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
let O, C, E;
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
  var n = {
    exports: {}
  }, u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", h = u, f = h;
  function a() {
  }
  function s() {
  }
  s.resetWarningCache = a;
  var l = function() {
    function e(_, v, P, g, R, c) {
      if (c !== f) {
        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw o.name = "Invariant Violation", o;
      }
    }
    e.isRequired = e;
    function r() {
      return e;
    }
    var t = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: r,
      element: e,
      elementType: e,
      instanceOf: r,
      node: e,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: s,
      resetWarningCache: a
    };
    return t.PropTypes = t, t;
  };
  n.exports = l();
  var T = n.exports;
  C = i(T);
  E = (e) => {
    const r = p.useRef({});
    return p.useEffect(() => {
      r.current = e;
    }), r.current;
  };
  O = m(y.jsx("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
  }), "ContentCopy");
});
export {
  O as C,
  C as P,
  __tla,
  E as u
};
