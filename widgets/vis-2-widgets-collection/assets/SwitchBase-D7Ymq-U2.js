import { v as $, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as A, f as G, D as K, X as Q, n as C, s as b, j as F, J as V, i as Y, c as Z, aH as ee, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
let re;
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
  function oe(t) {
    return A("PrivateSwitchBase", t);
  }
  G("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd"
  ]);
  let te, se, ae;
  te = (t) => {
    const { classes: s, checked: l, disabled: d, edge: n } = t, c = {
      root: [
        "root",
        l && "checked",
        d && "disabled",
        n && `edge${V(n)}`
      ],
      input: [
        "input"
      ]
    };
    return Y(c, oe, s);
  };
  se = b(Z, {
    name: "MuiSwitchBase"
  })({
    padding: 9,
    borderRadius: "50%",
    variants: [
      {
        props: {
          edge: "start",
          size: "small"
        },
        style: {
          marginLeft: -3
        }
      },
      {
        props: ({ edge: t, ownerState: s }) => t === "start" && s.size !== "small",
        style: {
          marginLeft: -12
        }
      },
      {
        props: {
          edge: "end",
          size: "small"
        },
        style: {
          marginRight: -3
        }
      },
      {
        props: ({ edge: t, ownerState: s }) => t === "end" && s.size !== "small",
        style: {
          marginRight: -12
        }
      }
    ]
  });
  ae = b("input", {
    name: "MuiSwitchBase",
    shouldForwardProp: ee
  })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  });
  re = $.forwardRef(function(s, l) {
    const { autoFocus: d, checked: n, checkedIcon: c, defaultChecked: u, disabled: k, disableFocusRipple: h = false, edge: y = false, icon: x, id: R, inputProps: _, inputRef: I, name: z, onBlur: f, onChange: g, onFocus: m, readOnly: v, required: j = false, tabIndex: U, type: r, value: S, slots: E = {}, slotProps: L = {}, ...M } = s, [w, N] = K({
      controlled: n,
      default: !!u,
      name: "SwitchBase",
      state: "checked"
    }), a = Q(), T = (e) => {
      m && m(e), a && a.onFocus && a.onFocus(e);
    }, q = (e) => {
      f && f(e), a && a.onBlur && a.onBlur(e);
    }, D = (e) => {
      if (e.nativeEvent.defaultPrevented) return;
      const o = e.target.checked;
      N(o), g && g(e, o);
    };
    let i = k;
    a && typeof i > "u" && (i = a.disabled);
    const H = r === "checkbox" || r === "radio", p = {
      ...s,
      checked: w,
      disabled: i,
      disableFocusRipple: h,
      edge: y
    }, B = te(p), P = {
      slots: E,
      slotProps: {
        input: _,
        ...L
      }
    }, [J, O] = C("root", {
      ref: l,
      elementType: se,
      className: B.root,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...P,
        component: "span",
        ...M
      },
      getSlotProps: (e) => ({
        ...e,
        onFocus: (o) => {
          var _a;
          (_a = e.onFocus) == null ? void 0 : _a.call(e, o), T(o);
        },
        onBlur: (o) => {
          var _a;
          (_a = e.onBlur) == null ? void 0 : _a.call(e, o), q(o);
        }
      }),
      ownerState: p,
      additionalProps: {
        centerRipple: true,
        focusRipple: !h,
        disabled: i,
        role: void 0,
        tabIndex: null
      }
    }), [W, X] = C("input", {
      ref: I,
      elementType: ae,
      className: B.input,
      externalForwardedProps: P,
      getSlotProps: (e) => ({
        onChange: (o) => {
          var _a;
          (_a = e.onChange) == null ? void 0 : _a.call(e, o), D(o);
        }
      }),
      ownerState: p,
      additionalProps: {
        autoFocus: d,
        checked: n,
        defaultChecked: u,
        disabled: i,
        id: H ? R : void 0,
        name: z,
        readOnly: v,
        required: j,
        tabIndex: U,
        type: r,
        ...r === "checkbox" && S === void 0 ? {} : {
          value: S
        }
      }
    });
    return F.jsxs(J, {
      ...O,
      children: [
        F.jsx(W, {
          ...X
        }),
        w ? c : x
      ]
    });
  });
});
export {
  re as S,
  __tla
};
