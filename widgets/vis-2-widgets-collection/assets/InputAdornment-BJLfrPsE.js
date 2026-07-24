import { v as h, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as C, g as E, u as I, v as P, j as a, a0 as A, s as S, d as _, T as j, x as c, e as L, m as z, __tla as __tla_1 } from "./usePopoverPositioning-CABAc1cn.js";
let U;
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
  function R(t) {
    return E("MuiInputAdornment", t);
  }
  const f = C("MuiInputAdornment", [
    "root",
    "filled",
    "standard",
    "outlined",
    "positionStart",
    "positionEnd",
    "disablePointerEvents",
    "hiddenLabel",
    "sizeSmall"
  ]);
  var g;
  let w, T, $;
  w = (t, e) => {
    const { ownerState: n } = t;
    return [
      e.root,
      e[`position${c(n.position)}`],
      n.disablePointerEvents === true && e.disablePointerEvents,
      e[n.variant]
    ];
  };
  T = (t) => {
    const { classes: e, disablePointerEvents: n, hiddenLabel: i, position: s, size: r, variant: l } = t, d = {
      root: [
        "root",
        n && "disablePointerEvents",
        s && `position${c(s)}`,
        l,
        i && "hiddenLabel",
        r && `size${c(r)}`
      ]
    };
    return L(d, R, e);
  };
  $ = S("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: w
  })(z(({ theme: t }) => ({
    display: "flex",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: (t.vars || t).palette.action.active,
    variants: [
      {
        props: {
          variant: "filled"
        },
        style: {
          [`&.${f.positionStart}&:not(.${f.hiddenLabel})`]: {
            marginTop: 16
          }
        }
      },
      {
        props: {
          position: "start"
        },
        style: {
          marginRight: 8
        }
      },
      {
        props: {
          position: "end"
        },
        style: {
          marginLeft: 8
        }
      },
      {
        props: {
          disablePointerEvents: true
        },
        style: {
          pointerEvents: "none"
        }
      }
    ]
  })));
  U = h.forwardRef(function(e, n) {
    const i = I({
      props: e,
      name: "MuiInputAdornment"
    }), { children: s, className: r, component: l = "div", disablePointerEvents: d = false, disableTypography: b = false, position: m, variant: u, ...x } = i, o = P() || {};
    let p = u;
    u && o.variant, o && !p && (p = o.variant);
    const v = {
      ...i,
      hiddenLabel: o.hiddenLabel,
      size: o.size,
      disablePointerEvents: d,
      position: m,
      variant: p
    }, y = T(v);
    return a.jsx(A.Provider, {
      value: null,
      children: a.jsx($, {
        as: l,
        ownerState: v,
        className: _(y.root, r),
        ref: n,
        ...x,
        children: typeof s == "string" && !b ? a.jsx(j, {
          color: "textSecondary",
          children: s
        }) : a.jsxs(h.Fragment, {
          children: [
            m === "start" ? g || (g = a.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            s
          ]
        })
      })
    });
  });
});
export {
  U as I,
  __tla
};
