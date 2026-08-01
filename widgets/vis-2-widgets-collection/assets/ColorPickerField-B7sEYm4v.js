import { v as t, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { f as E, g as W, u as _, N as Y, n as A, h as B, s as w, j as r, i as V, P as J, p as P, c as K, d as Q, r as Z, B as M, T as oo, I as eo, E as ro, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
import { a as so, __tla as __tla_2 } from "./Chip-CM9Vhb7H.js";
import { C as to, __tla as __tla_3 } from "./Clear-_5wzb3ZB.js";
import { u as no, G as ao, C as io, __tla as __tla_4 } from "./usePopoverPositioning-CvdKfQR6.js";
let wo, Io, jo, ko, To;
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })()
]).then(async () => {
  const U = t.createContext({});
  function co(o) {
    return W("MuiAccordion", o);
  }
  let $, lo, po, uo;
  $ = E("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]);
  lo = (o) => {
    const { classes: e, square: s, expanded: n, disabled: a, disableGutters: d } = o;
    return V({
      root: [
        "root",
        !s && "rounded",
        n && "expanded",
        a && "disabled",
        !d && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, co, e);
  };
  po = w(J, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: s } = o;
      return [
        {
          [`& .${$.region}`]: e.region
        },
        e.root,
        !s.square && e.rounded,
        !s.disableGutters && e.gutters
      ];
    }
  })(P(({ theme: o }) => {
    const e = {
      duration: o.transitions.duration.shortest
    };
    return {
      position: "relative",
      transition: o.transitions.create([
        "margin"
      ], e),
      overflowAnchor: "none",
      "&::before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: (o.vars || o).palette.divider,
        transition: o.transitions.create([
          "opacity",
          "background-color"
        ], e)
      },
      "&:first-of-type": {
        "&::before": {
          display: "none"
        }
      },
      [`&.${$.expanded}`]: {
        "&::before": {
          opacity: 0
        },
        "&:first-of-type": {
          marginTop: 0
        },
        "&:last-of-type": {
          marginBottom: 0
        },
        "& + &": {
          "&::before": {
            display: "none"
          }
        }
      },
      [`&.${$.disabled}`]: {
        backgroundColor: (o.vars || o).palette.action.disabledBackground
      }
    };
  }), P(({ theme: o }) => ({
    variants: [
      {
        props: (e) => !e.square,
        style: {
          borderRadius: 0,
          "&:first-of-type": {
            borderTopLeftRadius: (o.vars || o).shape.borderRadius,
            borderTopRightRadius: (o.vars || o).shape.borderRadius
          },
          "&:last-of-type": {
            borderBottomLeftRadius: (o.vars || o).shape.borderRadius,
            borderBottomRightRadius: (o.vars || o).shape.borderRadius,
            "@supports (-ms-ime-align: auto)": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          }
        }
      },
      {
        props: (e) => !e.disableGutters,
        style: {
          [`&.${$.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  })));
  uo = w("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (o, e) => e.heading
  })({
    all: "unset"
  });
  wo = t.forwardRef(function(e, s) {
    const n = _({
      props: e,
      name: "MuiAccordion"
    }), { children: a, className: d, defaultExpanded: p = false, disabled: u = false, disableGutters: m = false, expanded: l, onChange: x, square: g = false, slots: b = {}, slotProps: T = {}, TransitionComponent: h, TransitionProps: y, ...k } = n, [i, c] = Y({
      controlled: l,
      default: p,
      name: "Accordion",
      state: "expanded"
    }), C = t.useCallback((X) => {
      c(!i), x && x(X, !i);
    }, [
      i,
      x,
      c
    ]), [j, ...D] = t.Children.toArray(a), G = t.useMemo(() => ({
      expanded: i,
      disabled: u,
      disableGutters: m,
      toggle: C
    }), [
      i,
      u,
      m,
      C
    ]), v = {
      ...n,
      square: g,
      disabled: u,
      disableGutters: m,
      expanded: i
    }, I = lo(v), N = {
      transition: h,
      ...b
    }, f = {
      transition: y,
      ...T
    }, R = {
      slots: N,
      slotProps: f
    }, [F, H] = A("root", {
      elementType: po,
      externalForwardedProps: {
        ...R,
        ...k
      },
      className: B(I.root, d),
      shouldForwardComponentProp: true,
      ownerState: v,
      ref: s,
      additionalProps: {
        square: g
      }
    }), [q, O] = A("heading", {
      elementType: uo,
      externalForwardedProps: R,
      className: I.heading,
      ownerState: v
    }), [z, L] = A("transition", {
      elementType: so,
      externalForwardedProps: R,
      ownerState: v
    });
    return r.jsxs(F, {
      ...H,
      children: [
        r.jsx(q, {
          ...O,
          children: r.jsx(U.Provider, {
            value: G,
            children: j
          })
        }),
        r.jsx(z, {
          in: i,
          timeout: "auto",
          ...L,
          children: r.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: I.region,
            children: D
          })
        })
      ]
    });
  });
  function mo(o) {
    return W("MuiAccordionDetails", o);
  }
  E("MuiAccordionDetails", [
    "root"
  ]);
  let xo, fo;
  xo = (o) => {
    const { classes: e } = o;
    return V({
      root: [
        "root"
      ]
    }, mo, e);
  };
  fo = w("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (o, e) => e.root
  })(P(({ theme: o }) => ({
    padding: o.spacing(1, 2, 2)
  })));
  To = t.forwardRef(function(e, s) {
    const n = _({
      props: e,
      name: "MuiAccordionDetails"
    }), { className: a, ...d } = n, p = n, u = xo(p);
    return r.jsx(fo, {
      className: B(u.root, a),
      ref: s,
      ownerState: p,
      ...d
    });
  });
  function go(o) {
    return W("MuiAccordionSummary", o);
  }
  let S, bo, ho, yo, Co;
  S = E("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]);
  bo = (o) => {
    const { classes: e, expanded: s, disabled: n, disableGutters: a } = o;
    return V({
      root: [
        "root",
        s && "expanded",
        n && "disabled",
        !a && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        s && "expanded",
        !a && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        s && "expanded"
      ]
    }, go, e);
  };
  ho = w(K, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (o, e) => e.root
  })(P(({ theme: o }) => {
    const e = {
      duration: o.transitions.duration.shortest
    };
    return {
      display: "flex",
      width: "100%",
      minHeight: 48,
      padding: o.spacing(0, 2),
      transition: o.transitions.create([
        "min-height",
        "background-color"
      ], e),
      [`&.${S.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette.action.focus
      },
      [`&.${S.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity
      },
      [`&:hover:not(.${S.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (s) => !s.disableGutters,
          style: {
            [`&.${S.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  }));
  yo = w("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (o, e) => e.content
  })(P(({ theme: o }) => ({
    display: "flex",
    textAlign: "start",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (e) => !e.disableGutters,
        style: {
          transition: o.transitions.create([
            "margin"
          ], {
            duration: o.transitions.duration.shortest
          }),
          [`&.${S.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  })));
  Co = w("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (o, e) => e.expandIconWrapper
  })(P(({ theme: o }) => ({
    display: "flex",
    color: (o.vars || o).palette.action.active,
    transform: "rotate(0deg)",
    transition: o.transitions.create("transform", {
      duration: o.transitions.duration.shortest
    }),
    [`&.${S.expanded}`]: {
      transform: "rotate(180deg)"
    }
  })));
  ko = t.forwardRef(function(e, s) {
    const n = _({
      props: e,
      name: "MuiAccordionSummary"
    }), { children: a, className: d, expandIcon: p, focusVisibleClassName: u, onClick: m, slots: l, slotProps: x, ...g } = n, { disabled: b = false, disableGutters: T, expanded: h, toggle: y } = t.useContext(U), k = (f) => {
      y && y(f), m && m(f);
    }, i = {
      ...n,
      expanded: h,
      disabled: b,
      disableGutters: T
    }, c = bo(i), C = {
      slots: l,
      slotProps: x
    }, [j, D] = A("root", {
      ref: s,
      shouldForwardComponentProp: true,
      className: B(c.root, d),
      elementType: ho,
      externalForwardedProps: {
        ...C,
        ...g
      },
      ownerState: i,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: b,
        "aria-expanded": h,
        focusVisibleClassName: B(c.focusVisible, u)
      },
      getSlotProps: (f) => ({
        ...f,
        onClick: (R) => {
          var _a;
          (_a = f.onClick) == null ? void 0 : _a.call(f, R), k(R);
        }
      })
    }), [G, v] = A("content", {
      className: c.content,
      elementType: yo,
      externalForwardedProps: C,
      ownerState: i
    }), [I, N] = A("expandIconWrapper", {
      className: c.expandIconWrapper,
      elementType: Co,
      externalForwardedProps: C,
      ownerState: i
    });
    return r.jsxs(j, {
      ...D,
      children: [
        r.jsx(G, {
          ...v,
          children: a
        }),
        p && r.jsx(I, {
          ...N,
          children: p
        })
      ]
    });
  });
  jo = Q(r.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator");
  Io = function({ value: o, onChange: e, label: s, overridden: n }) {
    const a = Z(), [d, p] = t.useState(null), [u, m] = t.useState(o), l = t.useRef(null), { anchorOrigin: x, transformOrigin: g, maxHeight: b, setContentRef: T, popoverActionRef: h } = no(d, !!d), y = !!d;
    t.useEffect(() => {
      m(o);
    }, [
      o
    ]), t.useEffect(() => () => {
      l.current !== null && clearTimeout(l.current);
    }, []);
    const k = t.useCallback((c) => {
      m(c), l.current !== null && clearTimeout(l.current), l.current = setTimeout(() => {
        l.current = null, e(c);
      }, 150);
    }, [
      e
    ]), i = t.useCallback((c) => {
      c.stopPropagation(), l.current !== null && (clearTimeout(l.current), l.current = null), e("");
    }, [
      e
    ]);
    return r.jsxs(M, {
      children: [
        r.jsxs(M, {
          sx: {
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: a.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (c) => p(c.currentTarget),
          children: [
            r.jsx(oo, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: s
            }),
            r.jsxs(M, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: [
                r.jsx(M, {
                  sx: {
                    width: 22,
                    height: 22,
                    borderRadius: "4px",
                    background: u || "transparent",
                    border: u ? `1px solid ${a.palette.divider}` : `1px dashed ${a.palette.text.disabled}`
                  }
                }),
                n ? r.jsx(eo, {
                  size: "small",
                  onClick: i,
                  title: ao.t("theme_studio_reset_color"),
                  sx: {
                    p: 0.25
                  },
                  children: r.jsx(to, {
                    fontSize: "inherit"
                  })
                }) : null
              ]
            })
          ]
        }),
        r.jsx(ro, {
          action: h,
          open: y,
          anchorEl: d,
          onClose: () => p(null),
          anchorOrigin: x,
          transformOrigin: g,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                boxSizing: "border-box",
                maxHeight: b,
                overflowX: "hidden",
                overflowY: "auto"
              }
            }
          },
          children: r.jsx(M, {
            ref: T,
            sx: {
              borderRadius: "6px"
            },
            children: r.jsx(io, {
              value: u || "#ffffff",
              onChange: k,
              hidePresets: true,
              hideInputs: true,
              hideEyeDrop: true,
              hideInputType: true
            })
          })
        })
      ]
    });
  };
});
export {
  wo as A,
  Io as C,
  jo as D,
  __tla,
  ko as a,
  To as b
};
