import { v as H, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as J, a as K, a2 as Q, $ as V, b as C, s as F, j as b, i as X, e as Y, n as Z, r as ee, __tla as __tla_1 } from "./commonFields-DH-obq-U.js";
let ie;
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
        n && `edge${X(n)}`
      ],
      input: [
        "input"
      ]
    };
    return Y(c, oe, s);
  };
  se = F(Z, {
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
  ie = H.forwardRef(function(s, l) {
    const { autoFocus: d, checked: n, checkedIcon: c, defaultChecked: u, disabled: k, disableFocusRipple: h = false, edge: y = false, icon: x, id: R, inputProps: _, inputRef: I, name: z, onBlur: g, onChange: f, onFocus: m, readOnly: v, required: j = false, tabIndex: U, type: i, value: S, slots: E = {}, slotProps: L = {}, ...M } = s, [w, N] = Q({
      controlled: n,
      default: !!u,
      name: "SwitchBase",
      state: "checked"
    }), a = V(), T = (e) => {
      m && m(e), a && a.onFocus && a.onFocus(e);
    }, $ = (e) => {
      g && g(e), a && a.onBlur && a.onBlur(e);
    }, q = (e) => {
      if (e.nativeEvent.defaultPrevented) return;
      const o = e.target.checked;
      N(o), f && f(e, o);
    };
    let r = k;
    a && typeof r > "u" && (r = a.disabled);
    const O = i === "checkbox" || i === "radio", p = {
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
    }, [W, A] = C("root", {
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
          (_a = e.onBlur) == null ? void 0 : _a.call(e, o), $(o);
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
          (_a = e.onChange) == null ? void 0 : _a.call(e, o), q(o);
        }
      }),
      ownerState: p,
      additionalProps: {
        autoFocus: d,
        checked: n,
        defaultChecked: u,
        disabled: r,
        id: O ? R : void 0,
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
    return b.jsxs(W, {
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
  ie as S,
  __tla
};
