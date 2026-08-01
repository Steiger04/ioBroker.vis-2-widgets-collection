import { v as g, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as p, f as d, u, j as i, s as f, h as m, i as x, d as D, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
let v, M;
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
  function y(s) {
    return p("MuiDialogActions", s);
  }
  d("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  let S, A;
  S = (s) => {
    const { classes: o, disableSpacing: t } = s;
    return x({
      root: [
        "root",
        !t && "spacing"
      ]
    }, y, o);
  };
  A = f("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (s, o) => {
      const { ownerState: t } = s;
      return [
        o.root,
        !t.disableSpacing && o.spacing
      ];
    }
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: s }) => !s.disableSpacing,
        style: {
          "& > :not(style) ~ :not(style)": {
            marginLeft: 8
          }
        }
      }
    ]
  });
  v = g.forwardRef(function(o, t) {
    const a = u({
      props: o,
      name: "MuiDialogActions"
    }), { className: n, disableSpacing: l = false, ...r } = a, e = {
      ...a,
      disableSpacing: l
    }, c = S(e);
    return i.jsx(A, {
      className: m(c.root, n),
      ownerState: e,
      ref: t,
      ...r
    });
  });
  M = D(i.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore");
});
export {
  v as D,
  M as I,
  __tla
};
