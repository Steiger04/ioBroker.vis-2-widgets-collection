import { v as y, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as D, g as U, u as A, W as E, aQ as W, b as z, T as P, j as c, d as v, s as x, M as F, e as B, m as L, __tla as __tla_1 } from "./useData-CHGwo_iw.js";
let Z;
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
  function H(e) {
    return U("MuiFormControlLabel", e);
  }
  let t, I, Q, G;
  t = D("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk"
  ]);
  I = (e) => {
    const { classes: o, disabled: s, labelPlacement: r, error: p, required: d } = e, m = {
      root: [
        "root",
        s && "disabled",
        `labelPlacement${F(r)}`,
        p && "error",
        d && "required"
      ],
      label: [
        "label",
        s && "disabled"
      ],
      asterisk: [
        "asterisk",
        p && "error"
      ]
    };
    return B(m, H, o);
  };
  Q = x("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: s } = e;
      return [
        {
          [`& .${t.label}`]: o.label
        },
        o.root,
        o[`labelPlacement${F(s.labelPlacement)}`]
      ];
    }
  })(L(({ theme: e }) => ({
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    verticalAlign: "middle",
    WebkitTapHighlightColor: "transparent",
    marginLeft: -11,
    marginRight: 16,
    [`&.${t.disabled}`]: {
      cursor: "default"
    },
    [`& .${t.label}`]: {
      [`&.${t.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    },
    variants: [
      {
        props: {
          labelPlacement: "start"
        },
        style: {
          flexDirection: "row-reverse",
          marginRight: -11
        }
      },
      {
        props: {
          labelPlacement: "top"
        },
        style: {
          flexDirection: "column-reverse"
        }
      },
      {
        props: {
          labelPlacement: "bottom"
        },
        style: {
          flexDirection: "column"
        }
      },
      {
        props: ({ labelPlacement: o }) => o === "start" || o === "top" || o === "bottom",
        style: {
          marginLeft: 16
        }
      }
    ]
  })));
  G = x("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, o) => o.asterisk
  })(L(({ theme: e }) => ({
    [`&.${t.error}`]: {
      color: (e.vars || e).palette.error.main
    }
  })));
  Z = y.forwardRef(function(o, s) {
    const r = A({
      props: o,
      name: "MuiFormControlLabel"
    }), { checked: p, className: d, componentsProps: m = {}, control: a, disabled: R, disableTypography: S, inputRef: J, label: T, labelPlacement: _ = "end", name: K, onChange: O, required: k, slots: q = {}, slotProps: $ = {}, value: V, ...j } = r, f = E(), C = R ?? a.props.disabled ?? (f == null ? void 0 : f.disabled), b = k ?? a.props.required, g = {
      disabled: C,
      required: b
    };
    [
      "checked",
      "name",
      "onChange",
      "value",
      "inputRef"
    ].forEach((i) => {
      typeof a.props[i] > "u" && typeof r[i] < "u" && (g[i] = r[i]);
    });
    const M = W({
      props: r,
      muiFormControl: f,
      states: [
        "error"
      ]
    }), n = {
      ...r,
      disabled: C,
      labelPlacement: _,
      required: b,
      error: M.error
    }, u = I(n), w = {
      slots: q,
      slotProps: {
        ...m,
        ...$
      }
    }, [N, h] = z("typography", {
      elementType: P,
      externalForwardedProps: w,
      ownerState: n
    });
    let l = T;
    return l != null && l.type !== P && !S && (l = c.jsx(N, {
      component: "span",
      ...h,
      className: v(u.label, h == null ? void 0 : h.className),
      children: l
    })), c.jsxs(Q, {
      className: v(u.root, d),
      ownerState: n,
      ref: s,
      ...j,
      children: [
        y.cloneElement(a, g),
        b ? c.jsxs("div", {
          children: [
            l,
            c.jsxs(G, {
              ownerState: n,
              "aria-hidden": true,
              className: u.asterisk,
              children: [
                "\u2009",
                "*"
              ]
            })
          ]
        }) : l
      ]
    });
  });
});
export {
  Z as F,
  __tla
};
