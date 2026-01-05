import { v as H, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as J, a as K, a6 as Q, b as C, s as F, j as b, i as V, e as X, n as Y, r as Z, __tla as __tla_1 } from "./commonFields-B5KdVoLe.js";
import { u as ee, __tla as __tla_2 } from "./useFormControl--TM4wVzV.js";
let le;
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
  function oe(t) {
    return J("PrivateSwitchBase", t);
  }
  K("PrivateSwitchBase", [
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
    return X(c, oe, s);
  };
  se = F(Y, {
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
  ae = F("input", {
    name: "MuiSwitchBase",
    shouldForwardProp: Z
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
  le = H.forwardRef(function(s, l) {
    const { autoFocus: d, checked: n, checkedIcon: c, defaultChecked: u, disabled: k, disableFocusRipple: h = false, edge: y = false, icon: x, id: R, inputProps: _, inputRef: I, name: z, onBlur: m, onChange: f, onFocus: g, readOnly: v, required: j = false, tabIndex: U, type: i, value: S, slots: E = {}, slotProps: L = {}, ...M } = s, [w, N] = Q({
      controlled: n,
      default: !!u,
      name: "SwitchBase",
      state: "checked"
    }), a = ee(), T = (e) => {
      g && g(e), a && a.onFocus && a.onFocus(e);
    }, q = (e) => {
      m && m(e), a && a.onBlur && a.onBlur(e);
    }, O = (e) => {
      if (e.nativeEvent.defaultPrevented) return;
      const o = e.target.checked;
      N(o), f && f(e, o);
    };
    let r = k;
    a && typeof r > "u" && (r = a.disabled);
    const W = i === "checkbox" || i === "radio", p = {
      ...s,
      checked: w,
      disabled: r,
      disableFocusRipple: h,
      edge: y
    }, B = te(p), P = {
      slots: E,
      slotProps: {
        input: _,
        ...L
      }
    }, [$, A] = C("root", {
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
        disabled: r,
        role: void 0,
        tabIndex: null
      }
    }), [D, G] = C("input", {
      ref: I,
      elementType: ae,
      className: B.input,
      externalForwardedProps: P,
      getSlotProps: (e) => ({
        onChange: (o) => {
          var _a;
          (_a = e.onChange) == null ? void 0 : _a.call(e, o), O(o);
        }
      }),
      ownerState: p,
      additionalProps: {
        autoFocus: d,
        checked: n,
        defaultChecked: u,
        disabled: r,
        id: W ? R : void 0,
        name: z,
        readOnly: v,
        required: j,
        tabIndex: U,
        type: i,
        ...i === "checkbox" && S === void 0 ? {} : {
          value: S
        }
      }
    });
    return b.jsxs($, {
      ...A,
      children: [
        b.jsx(D, {
          ...G
        }),
        w ? c : x
      ]
    });
  });
});
export {
  le as S,
  __tla
};
