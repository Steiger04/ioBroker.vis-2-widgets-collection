import { v as g, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as G, f as X, u as Y, a6 as $e, a7 as be, r as xe, a8 as Se, Q as de, j as i, s as E, h as N, i as ee, a9 as ae, p as te, d as Z, n as K, I as Ie, y as l, P as me, _ as re, l as ne, J as B, c as le, a as R, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
let Ze, Je, ie;
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
  function he(e) {
    return G("MuiCollapse", e);
  }
  X("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  let ke, we, ze, Re;
  ke = (e) => {
    const { orientation: t, classes: o } = e, a = {
      root: [
        "root",
        `${t}`
      ],
      entered: [
        "entered"
      ],
      hidden: [
        "hidden"
      ],
      wrapper: [
        "wrapper",
        `${t}`
      ],
      wrapperInner: [
        "wrapperInner",
        `${t}`
      ]
    };
    return ee(a, he, o);
  };
  we = E("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.orientation],
        o.state === "entered" && t.entered,
        o.state === "exited" && !o.in && o.collapsedSize === "0px" && t.hidden
      ];
    }
  })(te(({ theme: e }) => ({
    height: 0,
    overflow: "hidden",
    transition: e.transitions.create("height"),
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: "auto",
          width: 0,
          transition: e.transitions.create("width")
        }
      },
      {
        props: {
          state: "entered"
        },
        style: {
          height: "auto",
          overflow: "visible"
        }
      },
      {
        props: {
          state: "entered",
          orientation: "horizontal"
        },
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
        style: {
          visibility: "hidden"
        }
      }
    ]
  })));
  ze = E("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper
  })({
    display: "flex",
    width: "100%",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "auto",
          height: "100%"
        }
      }
    ]
  });
  Re = E("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner
  })({
    width: "100%",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "auto",
          height: "100%"
        }
      }
    ]
  });
  ie = g.forwardRef(function(t, o) {
    const a = Y({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: s, children: C, className: y, collapsedSize: c = "0px", component: u, easing: $, in: O, onEnter: b, onEntered: H, onEntering: j, onExit: v, onExited: M, onExiting: W, orientation: U = "vertical", style: V, timeout: S = $e.standard, TransitionComponent: I = be, ...T } = a, f = {
      ...a,
      orientation: U,
      collapsedSize: c
    }, A = ke(f), F = xe(), J = Se(), m = g.useRef(null), P = g.useRef(), z = typeof c == "number" ? `${c}px` : c, x = U === "horizontal", p = x ? "width" : "height", L = g.useRef(null), _ = de(o, L), h = (n) => (k) => {
      if (n) {
        const w = L.current;
        k === void 0 ? n(w) : n(w, k);
      }
    }, D = () => m.current ? m.current[x ? "clientWidth" : "clientHeight"] : 0, d = h((n, k) => {
      m.current && x && (m.current.style.position = "absolute"), n.style[p] = z, b && b(n, k);
    }), ue = h((n, k) => {
      const w = D();
      m.current && x && (m.current.style.position = "");
      const { duration: Q, easing: q } = ae({
        style: V,
        timeout: S,
        easing: $
      }, {
        mode: "enter"
      });
      if (S === "auto") {
        const oe = F.transitions.getAutoHeightDuration(w);
        n.style.transitionDuration = `${oe}ms`, P.current = oe;
      } else n.style.transitionDuration = typeof Q == "string" ? Q : `${Q}ms`;
      n.style[p] = `${w}px`, n.style.transitionTimingFunction = q, j && j(n, k);
    }), ge = h((n, k) => {
      n.style[p] = "auto", H && H(n, k);
    }), ve = h((n) => {
      n.style[p] = `${D()}px`, v && v(n);
    }), fe = h(M), Ce = h((n) => {
      const k = D(), { duration: w, easing: Q } = ae({
        style: V,
        timeout: S,
        easing: $
      }, {
        mode: "exit"
      });
      if (S === "auto") {
        const q = F.transitions.getAutoHeightDuration(k);
        n.style.transitionDuration = `${q}ms`, P.current = q;
      } else n.style.transitionDuration = typeof w == "string" ? w : `${w}ms`;
      n.style[p] = z, n.style.transitionTimingFunction = Q, W && W(n);
    }), ye = (n) => {
      S === "auto" && J.start(P.current || 0, n), s && s(L.current, n);
    };
    return i.jsx(I, {
      in: O,
      onEnter: d,
      onEntered: ge,
      onEntering: ue,
      onExit: ve,
      onExited: fe,
      onExiting: Ce,
      addEndListener: ye,
      nodeRef: L,
      timeout: S === "auto" ? null : S,
      ...T,
      children: (n, { ownerState: k, ...w }) => i.jsx(we, {
        as: u,
        className: N(A.root, y, {
          entered: A.entered,
          exited: !O && z === "0px" && A.hidden
        }[n]),
        style: {
          [x ? "minWidth" : "minHeight"]: z,
          ...V
        },
        ref: _,
        ownerState: {
          ...f,
          state: n
        },
        ...w,
        children: i.jsx(ze, {
          ownerState: {
            ...f,
            state: n
          },
          className: A.wrapper,
          ref: m,
          children: i.jsx(Re, {
            ownerState: {
              ...f,
              state: n
            },
            className: A.wrapperInner,
            children: C
          })
        })
      })
    });
  });
  ie && (ie.muiSupportAuto = true);
  function Me(e) {
    return G("MuiAlert", e);
  }
  let se, Ae, Pe, Ee, Oe, je, Te, Le, De, Ne, We, ce, Ve;
  se = X("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "colorSuccess",
    "colorInfo",
    "colorWarning",
    "colorError",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError"
  ]);
  Ae = Z(i.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined");
  Pe = Z(i.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined");
  Ee = Z(i.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline");
  Oe = Z(i.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined");
  je = Z(i.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  Te = (e) => {
    const { variant: t, color: o, severity: a, classes: s } = e, C = {
      root: [
        "root",
        `color${l(o || a)}`,
        `${t}${l(o || a)}`,
        `${t}`
      ],
      icon: [
        "icon"
      ],
      message: [
        "message"
      ],
      action: [
        "action"
      ]
    };
    return ee(C, Me, s);
  };
  Le = E(me, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.variant],
        t[`${o.variant}${l(o.color || o.severity)}`]
      ];
    }
  })(te(({ theme: e }) => {
    const t = e.palette.mode === "light" ? re : ne, o = e.palette.mode === "light" ? ne : re;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(B([
          "light"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${a}Color`] : t(e.palette[a].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${a}StandardBg`] : o(e.palette[a].light, 0.9),
            [`& .${se.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${a}IconColor`]
            } : {
              color: e.palette[a].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(B([
          "light"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${a}Color`] : t(e.palette[a].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[a].light}`,
            [`& .${se.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${a}IconColor`]
            } : {
              color: e.palette[a].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(B([
          "dark"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "filled"
          },
          style: {
            fontWeight: e.typography.fontWeightMedium,
            ...e.vars ? {
              color: e.vars.palette.Alert[`${a}FilledColor`],
              backgroundColor: e.vars.palette.Alert[`${a}FilledBg`]
            } : {
              backgroundColor: e.palette.mode === "dark" ? e.palette[a].dark : e.palette[a].main,
              color: e.palette.getContrastText(e.palette[a].main)
            }
          }
        }))
      ]
    };
  }));
  De = E("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  });
  Ne = E("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  });
  We = E("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  });
  ce = {
    success: i.jsx(Ae, {
      fontSize: "inherit"
    }),
    warning: i.jsx(Pe, {
      fontSize: "inherit"
    }),
    error: i.jsx(Ee, {
      fontSize: "inherit"
    }),
    info: i.jsx(Oe, {
      fontSize: "inherit"
    })
  };
  Ze = g.forwardRef(function(t, o) {
    const a = Y({
      props: t,
      name: "MuiAlert"
    }), { action: s, children: C, className: y, closeText: c = "Close", color: u, components: $ = {}, componentsProps: O = {}, icon: b, iconMapping: H = ce, onClose: j, role: v = "alert", severity: M = "success", slotProps: W = {}, slots: U = {}, variant: V = "standard", ...S } = a, I = {
      ...a,
      color: u,
      severity: M,
      variant: V,
      colorSeverity: u || M
    }, T = Te(I), f = {
      slots: {
        closeButton: $.CloseButton,
        closeIcon: $.CloseIcon,
        ...U
      },
      slotProps: {
        ...O,
        ...W
      }
    }, [A, F] = K("root", {
      ref: o,
      shouldForwardComponentProp: true,
      className: N(T.root, y),
      elementType: Le,
      externalForwardedProps: {
        ...f,
        ...S
      },
      ownerState: I,
      additionalProps: {
        role: v,
        elevation: 0
      }
    }), [J, m] = K("icon", {
      className: T.icon,
      elementType: De,
      externalForwardedProps: f,
      ownerState: I
    }), [P, z] = K("message", {
      className: T.message,
      elementType: Ne,
      externalForwardedProps: f,
      ownerState: I
    }), [x, p] = K("action", {
      className: T.action,
      elementType: We,
      externalForwardedProps: f,
      ownerState: I
    }), [L, _] = K("closeButton", {
      elementType: Ie,
      externalForwardedProps: f,
      ownerState: I
    }), [h, D] = K("closeIcon", {
      elementType: je,
      externalForwardedProps: f,
      ownerState: I
    });
    return i.jsxs(A, {
      ...F,
      children: [
        b !== false ? i.jsx(J, {
          ...m,
          children: b || H[M] || ce[M]
        }) : null,
        i.jsx(P, {
          ...z,
          children: C
        }),
        s != null ? i.jsx(x, {
          ...p,
          children: s
        }) : null,
        s == null && j ? i.jsx(x, {
          ...p,
          children: i.jsx(L, {
            size: "small",
            "aria-label": c,
            title: c,
            color: "inherit",
            onClick: j,
            ..._,
            children: i.jsx(h, {
              fontSize: "small",
              ...D
            })
          })
        }) : null
      ]
    });
  });
  Ve = Z(i.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Fe(e) {
    return G("MuiChip", e);
  }
  const r = X("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible"
  ]), Be = (e) => {
    const { classes: t, disabled: o, size: a, color: s, iconColor: C, onDelete: y, clickable: c, variant: u } = e, $ = {
      root: [
        "root",
        u,
        o && "disabled",
        `size${l(a)}`,
        `color${l(s)}`,
        c && "clickable",
        c && `clickableColor${l(s)}`,
        y && "deletable",
        y && `deletableColor${l(s)}`,
        `${u}${l(s)}`
      ],
      label: [
        "label",
        `label${l(a)}`
      ],
      avatar: [
        "avatar",
        `avatar${l(a)}`,
        `avatarColor${l(s)}`
      ],
      icon: [
        "icon",
        `icon${l(a)}`,
        `iconColor${l(C)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${l(a)}`,
        `deleteIconColor${l(s)}`,
        `deleteIcon${l(u)}Color${l(s)}`
      ]
    };
    return ee($, Fe, t);
  }, He = E("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e, { color: a, iconColor: s, clickable: C, onDelete: y, size: c, variant: u } = o;
      return [
        {
          [`& .${r.avatar}`]: t.avatar
        },
        {
          [`& .${r.avatar}`]: t[`avatar${l(c)}`]
        },
        {
          [`& .${r.avatar}`]: t[`avatarColor${l(a)}`]
        },
        {
          [`& .${r.icon}`]: t.icon
        },
        {
          [`& .${r.icon}`]: t[`icon${l(c)}`]
        },
        {
          [`& .${r.icon}`]: t[`iconColor${l(s)}`]
        },
        {
          [`& .${r.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${r.deleteIcon}`]: t[`deleteIcon${l(c)}`]
        },
        {
          [`& .${r.deleteIcon}`]: t[`deleteIconColor${l(a)}`]
        },
        {
          [`& .${r.deleteIcon}`]: t[`deleteIcon${l(u)}Color${l(a)}`]
        },
        t.root,
        t[`size${l(c)}`],
        t[`color${l(a)}`],
        C && t.clickable,
        C && a !== "default" && t[`clickableColor${l(a)})`],
        y && t.deletable,
        y && a !== "default" && t[`deletableColor${l(a)}`],
        t[u],
        t[`${u}${l(a)}`]
      ];
    }
  })(te(({ theme: e }) => {
    const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
    return {
      maxWidth: "100%",
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: (e.vars || e).palette.text.primary,
      backgroundColor: (e.vars || e).palette.action.selected,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: e.transitions.create([
        "background-color",
        "box-shadow"
      ]),
      cursor: "unset",
      outline: 0,
      textDecoration: "none",
      border: 0,
      padding: 0,
      verticalAlign: "middle",
      boxSizing: "border-box",
      [`&.${r.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${r.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${r.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${r.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${r.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${r.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${r.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : R(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : R(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${r.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${r.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(B([
          "contrastText"
        ])).map(([o]) => ({
          props: {
            color: o
          },
          style: {
            backgroundColor: (e.vars || e).palette[o].main,
            color: (e.vars || e).palette[o].contrastText,
            [`& .${r.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)` : R(e.palette[o].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[o].contrastText
              }
            }
          }
        })),
        {
          props: (o) => o.iconColor === o.color,
          style: {
            [`& .${r.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (o) => o.iconColor === o.color && o.color !== "default",
          style: {
            [`& .${r.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${r.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : R(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(B([
          "dark"
        ])).map(([o]) => ({
          props: {
            color: o,
            onDelete: true
          },
          style: {
            [`&.${r.focusVisible}`]: {
              background: (e.vars || e).palette[o].dark
            }
          }
        })),
        {
          props: {
            clickable: true
          },
          style: {
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : R(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${r.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : R(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(B([
          "dark"
        ])).map(([o]) => ({
          props: {
            color: o,
            clickable: true
          },
          style: {
            [`&:hover, &.${r.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[o].dark
            }
          }
        })),
        {
          props: {
            variant: "outlined"
          },
          style: {
            backgroundColor: "transparent",
            border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
            [`&.${r.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${r.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${r.avatar}`]: {
              marginLeft: 4
            },
            [`& .${r.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${r.icon}`]: {
              marginLeft: 4
            },
            [`& .${r.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${r.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${r.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(B()).map(([o]) => ({
          props: {
            variant: "outlined",
            color: o
          },
          style: {
            color: (e.vars || e).palette[o].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : R(e.palette[o].main, 0.7)}`,
            [`&.${r.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : R(e.palette[o].main, e.palette.action.hoverOpacity)
            },
            [`&.${r.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})` : R(e.palette[o].main, e.palette.action.focusOpacity)
            },
            [`& .${r.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : R(e.palette[o].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[o].main
              }
            }
          }
        }))
      ]
    };
  })), Ue = E("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e, { size: a } = o;
      return [
        t.label,
        t[`label${l(a)}`]
      ];
    }
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          variant: "outlined"
        },
        style: {
          paddingLeft: 11,
          paddingRight: 11
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          paddingLeft: 8,
          paddingRight: 8
        }
      },
      {
        props: {
          size: "small",
          variant: "outlined"
        },
        style: {
          paddingLeft: 7,
          paddingRight: 7
        }
      }
    ]
  });
  function pe(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  Je = g.forwardRef(function(t, o) {
    const a = Y({
      props: t,
      name: "MuiChip"
    }), { avatar: s, className: C, clickable: y, color: c = "default", component: u, deleteIcon: $, disabled: O = false, icon: b, label: H, onClick: j, onDelete: v, onKeyDown: M, onKeyUp: W, size: U = "medium", variant: V = "filled", tabIndex: S, skipFocusWhenDisabled: I = false, ...T } = a, f = g.useRef(null), A = de(f, o), F = (d) => {
      d.stopPropagation(), v && v(d);
    }, J = (d) => {
      d.currentTarget === d.target && pe(d) && d.preventDefault(), M && M(d);
    }, m = (d) => {
      d.currentTarget === d.target && v && pe(d) && v(d), W && W(d);
    }, P = y !== false && j ? true : y, z = P || v ? le : u || "div", x = {
      ...a,
      component: z,
      disabled: O,
      size: U,
      color: c,
      iconColor: g.isValidElement(b) && b.props.color || c,
      onDelete: !!v,
      clickable: P,
      variant: V
    }, p = Be(x), L = z === le ? {
      component: u || "div",
      focusVisibleClassName: p.focusVisible,
      ...v && {
        disableRipple: true
      }
    } : {};
    let _ = null;
    v && (_ = $ && g.isValidElement($) ? g.cloneElement($, {
      className: N($.props.className, p.deleteIcon),
      onClick: F
    }) : i.jsx(Ve, {
      className: N(p.deleteIcon),
      onClick: F
    }));
    let h = null;
    s && g.isValidElement(s) && (h = g.cloneElement(s, {
      className: N(p.avatar, s.props.className)
    }));
    let D = null;
    return b && g.isValidElement(b) && (D = g.cloneElement(b, {
      className: N(p.icon, b.props.className)
    })), i.jsxs(He, {
      as: z,
      className: N(p.root, C),
      disabled: P && O ? true : void 0,
      onClick: j,
      onKeyDown: J,
      onKeyUp: m,
      ref: A,
      tabIndex: I && O ? -1 : S,
      ownerState: x,
      ...L,
      ...T,
      children: [
        h || D,
        i.jsx(Ue, {
          className: N(p.label),
          ownerState: x,
          children: H
        }),
        _
      ]
    });
  });
});
export {
  Ze as A,
  Je as C,
  __tla,
  ie as a
};
