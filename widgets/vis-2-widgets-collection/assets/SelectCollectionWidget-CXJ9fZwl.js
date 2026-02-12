import { a as P, g as D, u as L, L as k, k as G, l as N, j as n, s as U, d as M, e as H, n as z, r as E, m as A, o as g, a8 as $, a7 as J, C as j, O as K, a9 as X, v as Y, y as q, E as Q, G as Z, w as O, aa as ee, U as R, S as te, z as oe, T as ae, A as w, H as se, J as V, K as ne, N as ie, __tla as __tla_0 } from "./useData-Ch9c1PRV.js";
import { u as _, d as re, __tla as __tla_1 } from "./useValueState-CLMabNs9.js";
import { v as d, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { l as B, __tla as __tla_3 } from "./listItemTextClasses-CiAn_OCt.js";
import { S as le, __tla as __tla_4 } from "./Stack-Dv6Zmy2V.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let W;
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
  const T = P("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function ce(e) {
    return D("MuiMenuItem", e);
  }
  const v = P("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), de = (e, t) => {
    const { ownerState: s } = e;
    return [
      t.root,
      s.dense && t.dense,
      s.divider && t.divider,
      !s.disableGutters && t.gutters
    ];
  }, pe = (e) => {
    const { disabled: t, dense: s, divider: a, disableGutters: p, selected: m, classes: i } = e, r = H({
      root: [
        "root",
        s && "dense",
        t && "disabled",
        !p && "gutters",
        a && "divider",
        m && "selected"
      ]
    }, ce, i);
    return {
      ...i,
      ...r
    };
  }, ue = U(z, {
    shouldForwardProp: (e) => E(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: de
  })(A(({ theme: e }) => ({
    ...e.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${v.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : g(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${v.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : g(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${v.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : g(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : g(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${v.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${v.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`& + .${$.root}`]: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    },
    [`& + .${$.inset}`]: {
      marginLeft: 52
    },
    [`& .${B.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${B.inset}`]: {
      paddingLeft: 36
    },
    [`& .${T.root}`]: {
      minWidth: 36
    },
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: t }) => !t.dense,
        style: {
          [e.breakpoints.up("sm")]: {
            minHeight: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.dense,
        style: {
          minHeight: 32,
          paddingTop: 4,
          paddingBottom: 4,
          ...e.typography.body2,
          [`& .${T.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  }))), ge = d.forwardRef(function(t, s) {
    const a = L({
      props: t,
      name: "MuiMenuItem"
    }), { autoFocus: p = false, component: m = "li", dense: i = false, divider: c = false, disableGutters: r = false, focusVisibleClassName: x, role: f = "menuitem", tabIndex: b, className: S, ...C } = a, y = d.useContext(k), o = d.useMemo(() => ({
      dense: i || y.dense || false,
      disableGutters: r
    }), [
      y.dense,
      i,
      r
    ]), l = d.useRef(null);
    G(() => {
      p && l.current && l.current.focus();
    }, [
      p
    ]);
    const h = {
      ...a,
      dense: o.dense,
      divider: c,
      disableGutters: r
    }, u = pe(a), F = N(l, s);
    let I;
    return a.disabled || (I = b !== void 0 ? b : -1), n.jsx(k.Provider, {
      value: o,
      children: n.jsx(ue, {
        ref: F,
        role: f,
        tabIndex: I,
        component: m,
        focusVisibleClassName: M(u.focusVisible, x),
        className: M(u.root, S),
        ...C,
        ownerState: h,
        classes: u
      })
    });
  }), me = () => [
    {
      type: "custom",
      component: () => n.jsx(j, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: J([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => n.jsx(j, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      default: "",
      type: "custom",
      fallbackFields: [
        ""
      ],
      noGradient: true,
      component: (e, t, s, a) => n.jsx(K, {
        field: e,
        data: t,
        onDataChange: s,
        props: a
      })
    }
  ];
  function ve(e) {
    const t = w(e), s = t ? R(e) : void 0, a = s ? g(s, 0.5) : e ? g(e, 0.5) : void 0;
    return {
      background: t,
      bgcolor: t ? "transparent" : e,
      "&.Mui-selected": {
        background: t,
        bgcolor: t ? void 0 : e
      },
      "&.Mui-selected:hover": {
        background: t ? a : void 0,
        bgcolor: t ? void 0 : a
      },
      "&:hover": {
        background: t ? a : void 0,
        bgcolor: t ? void 0 : a
      }
    };
  }
  function xe() {
    const e = d.useRef(null), { width: t = 300 } = X(e == null ? void 0 : e.current), s = d.useContext(Y), { widget: a } = s, p = a.data.cidObject, m = a.data.oidObject, { data: i, states: c } = q("oid"), { value: r, updateValue: x } = _("oid"), { updateValue: f } = _("cid"), b = m == null ? void 0 : m.type, S = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(b || ""), C = d.useMemo(() => {
      if (r == null) return -1;
      const o = String(r);
      return c.findIndex((l) => String(l.value) === o);
    }, [
      c,
      r
    ]), y = d.useCallback((o) => {
      const l = Number(o.target.value);
      if (l < 0 || l >= c.length) return;
      const h = c[l];
      if ((h == null ? void 0 : h.value) === void 0) return;
      const { value: u } = h;
      p && f(u), x(u);
    }, [
      c,
      p,
      f,
      x
    ]);
    return n.jsxs(Q, {
      isValidType: S,
      data: i,
      oidValue: r,
      children: [
        n.jsx(Z, {
          data: i,
          widget: a
        }),
        n.jsx(O, {
          ref: e,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: n.jsx(ee, {
            variant: "standard",
            disableUnderline: true,
            value: C !== -1 ? C : "",
            onChange: y,
            MenuProps: {
              slotProps: {
                backdrop: {
                  style: {
                    backgroundColor: "transparent !important"
                  }
                },
                root: {
                  sx: {
                    maxWidth: t,
                    mt: 0.3,
                    "& .MuiList-root": {
                      py: 0
                    }
                  }
                },
                paper: a.data.noCard ? {
                  sx: {
                    "--Paper-overlay": "none !important",
                    "--Paper-shadow": "none !important",
                    boxShadow: "none !important",
                    background: i.frameBackground || "transparent"
                  }
                } : {
                  sx: {
                    background: i.frameBackground || void 0
                  }
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${t}px - 10%)`,
              "& .MuiSelect-icon": {
                color: R(a.data.arrowColor || i.textColor || i.iconColor)
              }
            },
            children: c.map((o, l) => n.jsx(ge, {
              value: l,
              sx: ve(o.background),
              children: n.jsxs(le, {
                direction: "row",
                spacing: o.icon ? 1 : 0,
                sx: {
                  alignItems: "center"
                },
                children: [
                  n.jsx(te, {
                    alt: "",
                    src: o.icon,
                    style: {
                      position: "relative",
                      top: `calc(0px - ${o.iconYOffset})`,
                      right: `calc(0px - ${o.iconXOffset})`,
                      height: o.iconSize,
                      ...oe(o.icon, o.iconColor, o.forceColorMask)
                    }
                  }),
                  n.jsx(ae, {
                    component: O,
                    variant: "subtitle2",
                    sx: {
                      whiteSpace: "pre-wrap",
                      fontSize: o.valueSize,
                      textAlign: "left",
                      background: w(o.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: w(o.textColor) ? "transparent" : o.textColor,
                      textTransform: "none",
                      width: "100%",
                      height: "100%",
                      flexGrow: 1,
                      alignContent: "center"
                    },
                    contentEditable: "false",
                    dangerouslySetInnerHTML: {
                      __html: o.label ?? ""
                    }
                  })
                ]
              })
            }, String(o.value)))
          })
        })
      ]
    });
  }
  W = class extends se {
    static getWidgetInfo() {
      return {
        id: "tplSelectCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SelectCollectionWidget",
        visWidgetLabel: "select_collection_widget",
        visOrder: 7,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...V({
                groupName: ""
              })
            ]
          },
          {
            name: "select_collection",
            label: "group_select_collection",
            fields: [
              ...ne([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...re(),
              ...me()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...V({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-select.png"
      };
    }
    getWidgetInfo() {
      return W.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, s) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const s = {
        id: t.id,
        refService: t.refService,
        style: t.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle
        },
        setValue: this.setValue,
        setState: this.setState.bind(this),
        values: this.state.values,
        isSignalVisible: this.isSignalVisible.bind(this),
        getPropertyValue: this.getPropertyValue.bind(this),
        mode: this.props.context.themeType,
        socket: this.props.context.socket,
        theme: this.props.context.theme,
        wrappedContent: this.wrappedCollectionContent
      };
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ie(this.wrapContent(n.jsx(xe, {})), s);
    }
  };
});
export {
  __tla,
  W as default
};
