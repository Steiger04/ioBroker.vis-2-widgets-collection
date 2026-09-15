import { v as i, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { f as ut, g as pt, u as bt, h as k, j as h, s as O, J as $t, i as ft, c as At, p as St, V as uo, aU as Ft, aV as Ot, k as Ht, W as et, r as po, E as ct, n as D, a3 as bo, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
import { a as fo, K as So, __tla as __tla_2 } from "./ExpandMore-CLaFQDhZ.js";
let Oo, Ho, dt;
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
  function ho(o) {
    return pt("MuiTab", o);
  }
  let y, vo, mo;
  y = ut("MuiTab", [
    "root",
    "labelIcon",
    "textColorInherit",
    "textColorPrimary",
    "textColorSecondary",
    "selected",
    "disabled",
    "fullWidth",
    "wrapped",
    "iconWrapper",
    "icon"
  ]);
  vo = (o) => {
    const { classes: t, textColor: r, fullWidth: c, wrapped: s, icon: d, label: b, selected: f, disabled: u } = o, v = {
      root: [
        "root",
        d && b && "labelIcon",
        `textColor${$t(r)}`,
        c && "fullWidth",
        s && "wrapped",
        f && "selected",
        u && "disabled"
      ],
      icon: [
        "iconWrapper",
        "icon"
      ]
    };
    return ft(v, ho, t);
  };
  mo = O(At, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: r } = o;
      return [
        t.root,
        r.label && r.icon && t.labelIcon,
        t[`textColor${$t(r.textColor)}`],
        r.fullWidth && t.fullWidth,
        r.wrapped && t.wrapped,
        {
          [`& .${y.iconWrapper}`]: t.iconWrapper
        },
        {
          [`& .${y.icon}`]: t.icon
        }
      ];
    }
  })(St(({ theme: o }) => ({
    ...o.typography.button,
    maxWidth: 360,
    minWidth: 90,
    position: "relative",
    minHeight: 48,
    flexShrink: 0,
    padding: "12px 16px",
    overflow: "hidden",
    whiteSpace: "normal",
    textAlign: "center",
    lineHeight: 1.25,
    variants: [
      {
        props: ({ ownerState: t }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
        style: {
          flexDirection: "column"
        }
      },
      {
        props: ({ ownerState: t }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
        style: {
          flexDirection: "row"
        }
      },
      {
        props: ({ ownerState: t }) => t.icon && t.label,
        style: {
          minHeight: 72,
          paddingTop: 9,
          paddingBottom: 9
        }
      },
      {
        props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "top",
        style: {
          [`& > .${y.icon}`]: {
            marginBottom: 6
          }
        }
      },
      {
        props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "bottom",
        style: {
          [`& > .${y.icon}`]: {
            marginTop: 6
          }
        }
      },
      {
        props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "start",
        style: {
          [`& > .${y.icon}`]: {
            marginRight: o.spacing(1)
          }
        }
      },
      {
        props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "end",
        style: {
          [`& > .${y.icon}`]: {
            marginLeft: o.spacing(1)
          }
        }
      },
      {
        props: {
          textColor: "inherit"
        },
        style: {
          color: "inherit",
          opacity: 0.6,
          [`&.${y.selected}`]: {
            opacity: 1
          },
          [`&.${y.disabled}`]: {
            opacity: (o.vars || o).palette.action.disabledOpacity
          }
        }
      },
      {
        props: {
          textColor: "primary"
        },
        style: {
          color: (o.vars || o).palette.text.secondary,
          [`&.${y.selected}`]: {
            color: (o.vars || o).palette.primary.main
          },
          [`&.${y.disabled}`]: {
            color: (o.vars || o).palette.text.disabled
          }
        }
      },
      {
        props: {
          textColor: "secondary"
        },
        style: {
          color: (o.vars || o).palette.text.secondary,
          [`&.${y.selected}`]: {
            color: (o.vars || o).palette.secondary.main
          },
          [`&.${y.disabled}`]: {
            color: (o.vars || o).palette.text.disabled
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.fullWidth,
        style: {
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0,
          maxWidth: "none"
        }
      },
      {
        props: ({ ownerState: t }) => t.wrapped,
        style: {
          fontSize: o.typography.pxToRem(12)
        }
      }
    ]
  })));
  Oo = i.forwardRef(function(t, r) {
    const c = bt({
      props: t,
      name: "MuiTab"
    }), { className: s, disabled: d = false, disableFocusRipple: b = false, fullWidth: f, icon: u, iconPosition: v = "top", indicator: B, label: m, onChange: S, onClick: w, onFocus: L, selected: C, selectionFollowsFocus: x, textColor: q = "inherit", value: E, wrapped: lt = false, ...R } = c, H = {
      ...c,
      disabled: d,
      disableFocusRipple: b,
      selected: C,
      icon: !!u,
      iconPosition: v,
      label: !!m,
      fullWidth: f,
      textColor: q,
      wrapped: lt
    }, X = vo(H), K = u && m && i.isValidElement(u) ? i.cloneElement(u, {
      className: k(X.icon, u.props.className)
    }) : u, G = (M) => {
      !C && S && S(M, E), w && w(M);
    }, N = (M) => {
      x && !C && S && S(M, E), L && L(M);
    };
    return h.jsxs(mo, {
      focusRipple: !b,
      className: k(X.root, s),
      ref: r,
      role: "tab",
      "aria-selected": C,
      disabled: d,
      onClick: G,
      onFocus: N,
      ownerState: H,
      tabIndex: C ? 0 : -1,
      ...R,
      children: [
        v === "top" || v === "start" ? h.jsxs(i.Fragment, {
          children: [
            K,
            m
          ]
        }) : h.jsxs(i.Fragment, {
          children: [
            m,
            K
          ]
        }),
        B
      ]
    });
  });
  function yo(o) {
    return (1 + Math.sin(Math.PI * o - Math.PI / 2)) / 2;
  }
  function xo(o, t, r, c = {}, s = () => {
  }) {
    const { ease: d = yo, duration: b = 300 } = c;
    let f = null;
    const u = t[o];
    let v = false;
    const B = () => {
      v = true;
    }, m = (S) => {
      if (v) {
        s(new Error("Animation cancelled"));
        return;
      }
      f === null && (f = S);
      const w = Math.min(1, (S - f) / b);
      if (t[o] = d(w) * (r - u) + u, w >= 1) {
        requestAnimationFrame(() => {
          s(null);
        });
        return;
      }
      requestAnimationFrame(m);
    };
    return u === r ? (s(new Error("Element already at target position")), B) : (requestAnimationFrame(m), B);
  }
  const go = {
    width: 99,
    height: 99,
    position: "absolute",
    top: -9999,
    overflow: "scroll"
  };
  function Bo(o) {
    const { onChange: t, ...r } = o, c = i.useRef(), s = i.useRef(null), d = () => {
      c.current = s.current.offsetHeight - s.current.clientHeight;
    };
    return uo(() => {
      const b = Ft(() => {
        const u = c.current;
        d(), u !== c.current && t(c.current);
      }), f = Ot(s.current);
      return f.addEventListener("resize", b), () => {
        b.clear(), f.removeEventListener("resize", b);
      };
    }, [
      t
    ]), i.useEffect(() => {
      d(), t(c.current);
    }, [
      t
    ]), h.jsx("div", {
      style: go,
      ...r,
      ref: s
    });
  }
  function wo(o) {
    return pt("MuiTabScrollButton", o);
  }
  const Co = ut("MuiTabScrollButton", [
    "root",
    "vertical",
    "horizontal",
    "disabled"
  ]), To = (o) => {
    const { classes: t, orientation: r, disabled: c } = o;
    return ft({
      root: [
        "root",
        r,
        c && "disabled"
      ]
    }, wo, t);
  }, Io = O(At, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: r } = o;
      return [
        t.root,
        r.orientation && t[r.orientation]
      ];
    }
  })({
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    [`&.${Co.disabled}`]: {
      opacity: 0
    },
    variants: [
      {
        props: {
          orientation: "vertical"
        },
        style: {
          width: "100%",
          height: 40,
          "& svg": {
            transform: "var(--TabScrollButton-svgRotate)"
          }
        }
      }
    ]
  }), Eo = i.forwardRef(function(t, r) {
    const c = bt({
      props: t,
      name: "MuiTabScrollButton"
    }), { className: s, slots: d = {}, slotProps: b = {}, direction: f, orientation: u, disabled: v, ...B } = c, m = Ht(), S = {
      isRtl: m,
      ...c
    }, w = To(S), L = d.StartScrollButtonIcon ?? fo, C = d.EndScrollButtonIcon ?? So, x = et({
      elementType: L,
      externalSlotProps: b.startScrollButtonIcon,
      additionalProps: {
        fontSize: "small"
      },
      ownerState: S
    }), q = et({
      elementType: C,
      externalSlotProps: b.endScrollButtonIcon,
      additionalProps: {
        fontSize: "small"
      },
      ownerState: S
    });
    return h.jsx(Io, {
      component: "div",
      className: k(w.root, s),
      ref: r,
      role: null,
      ownerState: S,
      tabIndex: null,
      ...B,
      style: {
        ...B.style,
        ...u === "vertical" && {
          "--TabScrollButton-svgRotate": `rotate(${m ? -90 : 90}deg)`
        }
      },
      children: f === "left" ? h.jsx(L, {
        ...x
      }) : h.jsx(C, {
        ...q
      })
    });
  });
  function Ro(o) {
    return pt("MuiTabs", o);
  }
  let Wt, kt, ot, Mo, Po, zo, Wo, ko, Lo, Lt;
  dt = ut("MuiTabs", [
    "root",
    "vertical",
    "list",
    "flexContainer",
    "flexContainerVertical",
    "centered",
    "scroller",
    "fixed",
    "scrollableX",
    "scrollableY",
    "hideScrollbar",
    "scrollButtons",
    "scrollButtonsHideMobile",
    "indicator"
  ]);
  Wt = (o, t) => o === t ? o.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o.firstChild;
  kt = (o, t) => o === t ? o.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o.lastChild;
  ot = (o, t, r) => {
    let c = false, s = r(o, t);
    for (; s; ) {
      if (s === o.firstChild) {
        if (c) return;
        c = true;
      }
      const d = s.disabled || s.getAttribute("aria-disabled") === "true";
      if (!s.hasAttribute("tabindex") || d) s = r(o, s);
      else {
        s.focus();
        return;
      }
    }
  };
  Mo = (o) => {
    const { vertical: t, fixed: r, hideScrollbar: c, scrollableX: s, scrollableY: d, centered: b, scrollButtonsHideMobile: f, classes: u } = o;
    return ft({
      root: [
        "root",
        t && "vertical"
      ],
      scroller: [
        "scroller",
        r && "fixed",
        c && "hideScrollbar",
        s && "scrollableX",
        d && "scrollableY"
      ],
      list: [
        "list",
        "flexContainer",
        t && "flexContainerVertical",
        t && "vertical",
        b && "centered"
      ],
      indicator: [
        "indicator"
      ],
      scrollButtons: [
        "scrollButtons",
        f && "scrollButtonsHideMobile"
      ],
      scrollableX: [
        s && "scrollableX"
      ],
      hideScrollbar: [
        c && "hideScrollbar"
      ]
    }, Ro, u);
  };
  Po = O("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: r } = o;
      return [
        {
          [`& .${dt.scrollButtons}`]: t.scrollButtons
        },
        {
          [`& .${dt.scrollButtons}`]: r.scrollButtonsHideMobile && t.scrollButtonsHideMobile
        },
        t.root,
        r.vertical && t.vertical
      ];
    }
  })(St(({ theme: o }) => ({
    overflow: "hidden",
    minHeight: 48,
    WebkitOverflowScrolling: "touch",
    display: "flex",
    variants: [
      {
        props: ({ ownerState: t }) => t.vertical,
        style: {
          flexDirection: "column"
        }
      },
      {
        props: ({ ownerState: t }) => t.scrollButtonsHideMobile,
        style: {
          [`& .${dt.scrollButtons}`]: {
            [o.breakpoints.down("sm")]: {
              display: "none"
            }
          }
        }
      }
    ]
  })));
  zo = O("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (o, t) => {
      const { ownerState: r } = o;
      return [
        t.scroller,
        r.fixed && t.fixed,
        r.hideScrollbar && t.hideScrollbar,
        r.scrollableX && t.scrollableX,
        r.scrollableY && t.scrollableY
      ];
    }
  })({
    position: "relative",
    display: "inline-block",
    flex: "1 1 auto",
    whiteSpace: "nowrap",
    variants: [
      {
        props: ({ ownerState: o }) => o.fixed,
        style: {
          overflowX: "hidden",
          width: "100%"
        }
      },
      {
        props: ({ ownerState: o }) => o.hideScrollbar,
        style: {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }
      },
      {
        props: ({ ownerState: o }) => o.scrollableX,
        style: {
          overflowX: "auto",
          overflowY: "hidden"
        }
      },
      {
        props: ({ ownerState: o }) => o.scrollableY,
        style: {
          overflowY: "auto",
          overflowX: "hidden"
        }
      }
    ]
  });
  Wo = O("div", {
    name: "MuiTabs",
    slot: "List",
    overridesResolver: (o, t) => {
      const { ownerState: r } = o;
      return [
        t.list,
        t.flexContainer,
        r.vertical && t.flexContainerVertical,
        r.centered && t.centered
      ];
    }
  })({
    display: "flex",
    variants: [
      {
        props: ({ ownerState: o }) => o.vertical,
        style: {
          flexDirection: "column"
        }
      },
      {
        props: ({ ownerState: o }) => o.centered,
        style: {
          justifyContent: "center"
        }
      }
    ]
  });
  ko = O("span", {
    name: "MuiTabs",
    slot: "Indicator",
    overridesResolver: (o, t) => t.indicator
  })(St(({ theme: o }) => ({
    position: "absolute",
    height: 2,
    bottom: 0,
    width: "100%",
    transition: o.transitions.create(),
    variants: [
      {
        props: {
          indicatorColor: "primary"
        },
        style: {
          backgroundColor: (o.vars || o).palette.primary.main
        }
      },
      {
        props: {
          indicatorColor: "secondary"
        },
        style: {
          backgroundColor: (o.vars || o).palette.secondary.main
        }
      },
      {
        props: ({ ownerState: t }) => t.vertical,
        style: {
          height: "100%",
          width: 2,
          right: 0
        }
      }
    ]
  })));
  Lo = O(Bo)({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  });
  Lt = {};
  Ho = i.forwardRef(function(t, r) {
    const c = bt({
      props: t,
      name: "MuiTabs"
    }), s = po(), d = Ht(), { "aria-label": b, "aria-labelledby": f, action: u, centered: v = false, children: B, className: m, component: S = "div", allowScrollButtonsMobile: w = false, indicatorColor: L = "primary", onChange: C, orientation: x = "horizontal", ScrollButtonComponent: q, scrollButtons: E = "auto", selectionFollowsFocus: lt, slots: R = {}, slotProps: H = {}, TabIndicatorProps: X = {}, TabScrollButtonProps: K = {}, textColor: G = "primary", value: N, variant: M = "standard", visibleScrollbar: rt = false, ...Nt } = c, T = M === "scrollable", g = x === "vertical", U = g ? "scrollTop" : "scrollLeft", J = g ? "top" : "left", Q = g ? "bottom" : "right", nt = g ? "clientHeight" : "clientWidth", V = g ? "height" : "width", P = {
      ...c,
      component: S,
      allowScrollButtonsMobile: w,
      indicatorColor: L,
      orientation: x,
      vertical: g,
      scrollButtons: E,
      textColor: G,
      variant: M,
      visibleScrollbar: rt,
      fixed: !T,
      hideScrollbar: T && !rt,
      scrollableX: T && !g,
      scrollableY: T && g,
      centered: v && !T,
      scrollButtonsHideMobile: !w
    }, W = Mo(P), jt = et({
      elementType: R.StartScrollButtonIcon,
      externalSlotProps: H.startScrollButtonIcon,
      ownerState: P
    }), Dt = et({
      elementType: R.EndScrollButtonIcon,
      externalSlotProps: H.endScrollButtonIcon,
      ownerState: P
    }), [ht, Xt] = i.useState(false), [$, vt] = i.useState(Lt), [mt, Kt] = i.useState(false), [yt, Ut] = i.useState(false), [xt, Vt] = i.useState(false), [gt, Yt] = i.useState({
      overflow: "hidden",
      scrollbarWidth: 0
    }), Bt = /* @__PURE__ */ new Map(), z = i.useRef(null), A = i.useRef(null), j = {
      slots: R,
      slotProps: {
        indicator: X,
        scrollButton: K,
        ...H
      }
    }, wt = () => {
      const e = z.current;
      let l;
      if (e) {
        const n = e.getBoundingClientRect();
        l = {
          clientWidth: e.clientWidth,
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop,
          scrollWidth: e.scrollWidth,
          top: n.top,
          bottom: n.bottom,
          left: n.left,
          right: n.right
        };
      }
      let a;
      if (e && N !== false) {
        const n = A.current.children;
        if (n.length > 0) {
          const p = n[Bt.get(N)];
          a = p ? p.getBoundingClientRect() : null;
        }
      }
      return {
        tabsMeta: l,
        tabMeta: a
      };
    }, Y = ct(() => {
      const { tabsMeta: e, tabMeta: l } = wt();
      let a = 0, n;
      g ? (n = "top", l && e && (a = l.top - e.top + e.scrollTop)) : (n = d ? "right" : "left", l && e && (a = (d ? -1 : 1) * (l[n] - e[n] + e.scrollLeft)));
      const p = {
        [n]: a,
        [V]: l ? l[V] : 0
      };
      if (typeof $[n] != "number" || typeof $[V] != "number") vt(p);
      else {
        const I = Math.abs($[n] - p[n]), F = Math.abs($[V] - p[V]);
        (I >= 1 || F >= 1) && vt(p);
      }
    }), st = (e, { animation: l = true } = {}) => {
      l ? xo(U, z.current, e, {
        duration: s.transitions.duration.standard
      }) : z.current[U] = e;
    }, Ct = (e) => {
      let l = z.current[U];
      g ? l += e : l += e * (d ? -1 : 1), st(l);
    }, Tt = () => {
      const e = z.current[nt];
      let l = 0;
      const a = Array.from(A.current.children);
      for (let n = 0; n < a.length; n += 1) {
        const p = a[n];
        if (l + p[nt] > e) {
          n === 0 && (l = e);
          break;
        }
        l += p[nt];
      }
      return l;
    }, _t = () => {
      Ct(-1 * Tt());
    }, qt = () => {
      Ct(Tt());
    }, [Gt, { onChange: It, ...Jt }] = D("scrollbar", {
      className: k(W.scrollableX, W.hideScrollbar),
      elementType: Lo,
      shouldForwardComponentProp: true,
      externalForwardedProps: j,
      ownerState: P
    }), Qt = i.useCallback((e) => {
      It == null ? void 0 : It(e), Yt({
        overflow: null,
        scrollbarWidth: e
      });
    }, [
      It
    ]), [Et, Rt] = D("scrollButtons", {
      className: k(W.scrollButtons, K.className),
      elementType: Eo,
      externalForwardedProps: j,
      ownerState: P,
      additionalProps: {
        orientation: x,
        slots: {
          StartScrollButtonIcon: R.startScrollButtonIcon || R.StartScrollButtonIcon,
          EndScrollButtonIcon: R.endScrollButtonIcon || R.EndScrollButtonIcon
        },
        slotProps: {
          startScrollButtonIcon: jt,
          endScrollButtonIcon: Dt
        }
      }
    }), Zt = () => {
      const e = {};
      e.scrollbarSizeListener = T ? h.jsx(Gt, {
        ...Jt,
        onChange: Qt
      }) : null;
      const a = T && (E === "auto" && (mt || yt) || E === true);
      return e.scrollButtonStart = a ? h.jsx(Et, {
        direction: d ? "right" : "left",
        onClick: _t,
        disabled: !mt,
        ...Rt
      }) : null, e.scrollButtonEnd = a ? h.jsx(Et, {
        direction: d ? "left" : "right",
        onClick: qt,
        disabled: !yt,
        ...Rt
      }) : null, e;
    }, Mt = ct((e) => {
      const { tabsMeta: l, tabMeta: a } = wt();
      if (!(!a || !l)) {
        if (a[J] < l[J]) {
          const n = l[U] + (a[J] - l[J]);
          st(n, {
            animation: e
          });
        } else if (a[Q] > l[Q]) {
          const n = l[U] + (a[Q] - l[Q]);
          st(n, {
            animation: e
          });
        }
      }
    }), Z = ct(() => {
      T && E !== false && Vt(!xt);
    });
    i.useEffect(() => {
      const e = Ft(() => {
        z.current && Y();
      });
      let l;
      const a = (I) => {
        I.forEach((F) => {
          F.removedNodes.forEach((_) => {
            l == null ? void 0 : l.unobserve(_);
          }), F.addedNodes.forEach((_) => {
            l == null ? void 0 : l.observe(_);
          });
        }), e(), Z();
      }, n = Ot(z.current);
      n.addEventListener("resize", e);
      let p;
      return typeof ResizeObserver < "u" && (l = new ResizeObserver(e), Array.from(A.current.children).forEach((I) => {
        l.observe(I);
      })), typeof MutationObserver < "u" && (p = new MutationObserver(a), p.observe(A.current, {
        childList: true
      })), () => {
        e.clear(), n.removeEventListener("resize", e), p == null ? void 0 : p.disconnect(), l == null ? void 0 : l.disconnect();
      };
    }, [
      Y,
      Z
    ]), i.useEffect(() => {
      const e = Array.from(A.current.children), l = e.length;
      if (typeof IntersectionObserver < "u" && l > 0 && T && E !== false) {
        const a = e[0], n = e[l - 1], p = {
          root: z.current,
          threshold: 0.99
        }, I = (it) => {
          Kt(!it[0].isIntersecting);
        }, F = new IntersectionObserver(I, p);
        F.observe(a);
        const _ = (it) => {
          Ut(!it[0].isIntersecting);
        }, zt = new IntersectionObserver(_, p);
        return zt.observe(n), () => {
          F.disconnect(), zt.disconnect();
        };
      }
    }, [
      T,
      E,
      xt,
      B == null ? void 0 : B.length
    ]), i.useEffect(() => {
      Xt(true);
    }, []), i.useEffect(() => {
      Y();
    }), i.useEffect(() => {
      Mt(Lt !== $);
    }, [
      Mt,
      $
    ]), i.useImperativeHandle(u, () => ({
      updateIndicator: Y,
      updateScrollButtons: Z
    }), [
      Y,
      Z
    ]);
    const [to, oo] = D("indicator", {
      className: k(W.indicator, X.className),
      elementType: ko,
      externalForwardedProps: j,
      ownerState: P,
      additionalProps: {
        style: $
      }
    }), Pt = h.jsx(to, {
      ...oo
    });
    let tt = 0;
    const eo = i.Children.map(B, (e) => {
      if (!i.isValidElement(e)) return null;
      const l = e.props.value === void 0 ? tt : e.props.value;
      Bt.set(l, tt);
      const a = l === N;
      return tt += 1, i.cloneElement(e, {
        fullWidth: M === "fullWidth",
        indicator: a && !ht && Pt,
        selected: a,
        selectionFollowsFocus: lt,
        onChange: C,
        textColor: G,
        value: l,
        ...tt === 1 && N === false && !e.props.tabIndex ? {
          tabIndex: 0
        } : {}
      });
    }), lo = (e) => {
      if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) return;
      const l = A.current, a = bo(l).activeElement;
      if (a.getAttribute("role") !== "tab") return;
      let p = x === "horizontal" ? "ArrowLeft" : "ArrowUp", I = x === "horizontal" ? "ArrowRight" : "ArrowDown";
      switch (x === "horizontal" && d && (p = "ArrowRight", I = "ArrowLeft"), e.key) {
        case p:
          e.preventDefault(), ot(l, a, kt);
          break;
        case I:
          e.preventDefault(), ot(l, a, Wt);
          break;
        case "Home":
          e.preventDefault(), ot(l, null, Wt);
          break;
        case "End":
          e.preventDefault(), ot(l, null, kt);
          break;
      }
    }, at = Zt(), [ro, no] = D("root", {
      ref: r,
      className: k(W.root, m),
      elementType: Po,
      externalForwardedProps: {
        ...j,
        ...Nt,
        component: S
      },
      ownerState: P
    }), [so, ao] = D("scroller", {
      ref: z,
      className: W.scroller,
      elementType: zo,
      externalForwardedProps: j,
      ownerState: P,
      additionalProps: {
        style: {
          overflow: gt.overflow,
          [g ? `margin${d ? "Left" : "Right"}` : "marginBottom"]: rt ? void 0 : -gt.scrollbarWidth
        }
      }
    }), [io, co] = D("list", {
      ref: A,
      className: k(W.list, W.flexContainer),
      elementType: Wo,
      externalForwardedProps: j,
      ownerState: P,
      getSlotProps: (e) => ({
        ...e,
        onKeyDown: (l) => {
          var _a;
          lo(l), (_a = e.onKeyDown) == null ? void 0 : _a.call(e, l);
        }
      })
    });
    return h.jsxs(ro, {
      ...no,
      children: [
        at.scrollButtonStart,
        at.scrollbarSizeListener,
        h.jsxs(so, {
          ...ao,
          children: [
            h.jsx(io, {
              "aria-label": b,
              "aria-labelledby": f,
              "aria-orientation": x === "vertical" ? "vertical" : null,
              role: "tablist",
              ...co,
              children: eo
            }),
            ht && Pt
          ]
        }),
        at.scrollButtonEnd
      ]
    });
  });
});
export {
  Oo as T,
  __tla,
  Ho as a,
  dt as t
};
