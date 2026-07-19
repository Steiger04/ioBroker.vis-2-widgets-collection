import { v, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { p as P, j as u, g as I, a as j, u as D, k as _, s as m, d as F, e as M, m as N, __tla as __tla_1 } from "./usePopoverPositioning-CofXyWxH.js";
let G;
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
  const z = P(u.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function U(a) {
    return I("MuiAvatar", a);
  }
  j("MuiAvatar", [
    "root",
    "colorDefault",
    "circular",
    "rounded",
    "square",
    "img",
    "fallback"
  ]);
  const T = (a) => {
    const { classes: e, variant: o, colorDefault: t } = a;
    return M({
      root: [
        "root",
        o,
        t && "colorDefault"
      ],
      img: [
        "img"
      ],
      fallback: [
        "fallback"
      ]
    }, U, e);
  }, q = m("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (a, e) => {
      const { ownerState: o } = a;
      return [
        e.root,
        e[o.variant],
        o.colorDefault && e.colorDefault
      ];
    }
  })(N(({ theme: a }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: a.typography.fontFamily,
    fontSize: a.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    variants: [
      {
        props: {
          variant: "rounded"
        },
        style: {
          borderRadius: (a.vars || a).shape.borderRadius
        }
      },
      {
        props: {
          variant: "square"
        },
        style: {
          borderRadius: 0
        }
      },
      {
        props: {
          colorDefault: true
        },
        style: {
          color: (a.vars || a).palette.background.default,
          ...a.vars ? {
            backgroundColor: a.vars.palette.Avatar.defaultBg
          } : {
            backgroundColor: a.palette.grey[400],
            ...a.applyStyles("dark", {
              backgroundColor: a.palette.grey[600]
            })
          }
        }
      }
    ]
  }))), E = m("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (a, e) => e.img
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4
  }), L = m(z, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (a, e) => e.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function B({ crossOrigin: a, referrerPolicy: e, src: o, srcSet: t }) {
    const [n, s] = v.useState(false);
    return v.useEffect(() => {
      if (!o && !t) return;
      s(false);
      let i = true;
      const r = new Image();
      return r.onload = () => {
        i && s("loaded");
      }, r.onerror = () => {
        i && s("error");
      }, r.crossOrigin = a, r.referrerPolicy = e, r.src = o, t && (r.srcset = t), () => {
        i = false;
      };
    }, [
      a,
      e,
      o,
      t
    ]), n;
  }
  G = v.forwardRef(function(e, o) {
    const t = D({
      props: e,
      name: "MuiAvatar"
    }), { alt: n, children: s, className: i, component: r = "div", slots: A = {}, slotProps: d = {}, imgProps: y, sizes: k, src: p, srcSet: f, variant: x = "circular", ...R } = t;
    let c = null;
    const l = {
      ...t,
      component: r,
      variant: x
    }, S = B({
      ...y,
      ...typeof d.img == "function" ? d.img(l) : d.img,
      src: p,
      srcSet: f
    }), b = p || f, h = b && S !== "error";
    l.colorDefault = !h, delete l.ownerState;
    const g = T(l), [w, C] = _("img", {
      className: g.img,
      elementType: E,
      externalForwardedProps: {
        slots: A,
        slotProps: {
          img: {
            ...y,
            ...d.img
          }
        }
      },
      additionalProps: {
        alt: n,
        src: p,
        srcSet: f,
        sizes: k
      },
      ownerState: l
    });
    return h ? c = u.jsx(w, {
      ...C
    }) : s || s === 0 ? c = s : b && n ? c = n[0] : c = u.jsx(L, {
      ownerState: l,
      className: g.fallback
    }), u.jsx(q, {
      as: r,
      className: F(g.root, i),
      ref: o,
      ...R,
      ownerState: l,
      children: c
    });
  });
});
export {
  G as A,
  __tla
};
