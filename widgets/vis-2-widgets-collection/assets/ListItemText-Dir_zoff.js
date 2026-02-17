import { v as g, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as k, L as B, b as x, s as F, d as M, T as p, j as u, e as U, aO as P, __tla as __tla_1 } from "./useData-BxQArd1-.js";
import { g as W, l, __tla as __tla_2 } from "./listItemTextClasses-COBicmTJ.js";
let A;
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
  let D, E;
  D = (s) => {
    const { classes: o, inset: r, primary: a, secondary: y, dense: c } = s;
    return U({
      root: [
        "root",
        r && "inset",
        c && "dense",
        a && y && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, W, o);
  };
  E = F("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (s, o) => {
      const { ownerState: r } = s;
      return [
        {
          [`& .${l.primary}`]: o.primary
        },
        {
          [`& .${l.secondary}`]: o.secondary
        },
        o.root,
        r.inset && o.inset,
        r.primary && r.secondary && o.multiline,
        r.dense && o.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${P.root}:where(& .${l.primary})`]: {
      display: "block"
    },
    [`.${P.root}:where(& .${l.secondary})`]: {
      display: "block"
    },
    variants: [
      {
        props: ({ ownerState: s }) => s.primary && s.secondary,
        style: {
          marginTop: 6,
          marginBottom: 6
        }
      },
      {
        props: ({ ownerState: s }) => s.inset,
        style: {
          paddingLeft: 56
        }
      }
    ]
  });
  A = g.forwardRef(function(o, r) {
    const a = k({
      props: o,
      name: "MuiListItemText"
    }), { children: y, className: c, disableTypography: n = false, inset: S = false, primary: T, primaryTypographyProps: v, secondary: L, secondaryTypographyProps: C, slots: _ = {}, slotProps: b = {}, ...I } = a, { dense: h } = g.useContext(B);
    let e = T ?? y, t = L;
    const i = {
      ...a,
      disableTypography: n,
      inset: S,
      primary: !!e,
      secondary: !!t,
      dense: h
    }, m = D(i), d = {
      slots: _,
      slotProps: {
        primary: v,
        secondary: C,
        ...b
      }
    }, [w, R] = x("root", {
      className: M(m.root, c),
      elementType: E,
      externalForwardedProps: {
        ...d,
        ...I
      },
      ownerState: i,
      ref: r
    }), [$, f] = x("primary", {
      className: m.primary,
      elementType: p,
      externalForwardedProps: d,
      ownerState: i
    }), [j, N] = x("secondary", {
      className: m.secondary,
      elementType: p,
      externalForwardedProps: d,
      ownerState: i
    });
    return e != null && e.type !== p && !n && (e = u.jsx($, {
      variant: h ? "body2" : "body1",
      component: (f == null ? void 0 : f.variant) ? void 0 : "span",
      ...f,
      children: e
    })), t != null && t.type !== p && !n && (t = u.jsx(j, {
      variant: "body2",
      color: "textSecondary",
      ...N,
      children: t
    })), u.jsxs(w, {
      ...R,
      children: [
        e,
        t
      ]
    });
  });
});
export {
  A as L,
  __tla
};
