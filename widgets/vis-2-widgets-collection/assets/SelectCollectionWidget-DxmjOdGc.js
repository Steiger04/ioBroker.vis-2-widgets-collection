import { a as R, g as P, u as L, L as k, k as G, l as N, j as i, s as U, d as M, e as H, n as z, r as E, m as A, o as g, a6 as $, a5 as J, C as j, N as K, a7 as Q, v as X, A as Y, E as q, w as O, a8 as Z, Q as W, S as ee, y as te, T as oe, z as S, G as ae, H as V, J as se, K as ie, __tla as __tla_0 } from "./CollectionBaseImage-CMDyRI6z.js";
import { u as _, d as ne, __tla as __tla_1 } from "./useValueState-BHrGvNaa.js";
import { v as c, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as re, __tla as __tla_3 } from "./index-Bt53gQws.js";
import { l as T, __tla as __tla_4 } from "./listItemTextClasses-E0RgI0NY.js";
import { S as le, __tla as __tla_5 } from "./Stack-B_C-u5Tq.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_6 } from "./useData-EvQhohzn.js";
let F;
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  const B = R("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function ce(e) {
    return P("MuiMenuItem", e);
  }
  const v = R("MuiMenuItem", [
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
    const { disabled: t, dense: s, divider: a, disableGutters: d, selected: m, classes: n } = e, r = H({
      root: [
        "root",
        s && "dense",
        t && "disabled",
        !d && "gutters",
        a && "divider",
        m && "selected"
      ]
    }, ce, n);
    return {
      ...n,
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
    [`& .${T.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${T.inset}`]: {
      paddingLeft: 36
    },
    [`& .${B.root}`]: {
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
          [`& .${B.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  }))), ge = c.forwardRef(function(t, s) {
    const a = L({
      props: t,
      name: "MuiMenuItem"
    }), { autoFocus: d = false, component: m = "li", dense: n = false, divider: l = false, disableGutters: r = false, focusVisibleClassName: x, role: f = "menuitem", tabIndex: b, className: h, ...C } = a, y = c.useContext(k), o = c.useMemo(() => ({
      dense: n || y.dense || false,
      disableGutters: r
    }), [
      y.dense,
      n,
      r
    ]), p = c.useRef(null);
    G(() => {
      d && p.current && p.current.focus();
    }, [
      d
    ]);
    const w = {
      ...a,
      dense: o.dense,
      divider: l,
      disableGutters: r
    }, u = pe(a), D = N(p, s);
    let I;
    return a.disabled || (I = b !== void 0 ? b : -1), i.jsx(k.Provider, {
      value: o,
      children: i.jsx(ue, {
        ref: D,
        role: f,
        tabIndex: I,
        component: m,
        focusVisibleClassName: M(u.focusVisible, x),
        className: M(u.root, h),
        ...C,
        ownerState: w,
        classes: u
      })
    });
  }), me = () => [
    {
      type: "custom",
      component: () => i.jsx(j, {
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
      component: () => i.jsx(j, {
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
      component: (e, t, s, a) => i.jsx(K, {
        field: e,
        data: t,
        onDataChange: s,
        props: a
      })
    }
  ];
  function ve(e) {
    const t = S(e), s = t ? W(e) : void 0, a = t ? g(s, 0.5) : e ? g(e, 0.5) : void 0;
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
    const e = c.useRef(null), { width: t } = Q(e == null ? void 0 : e.current), s = c.useContext(X), { widget: a } = s, d = a.data.cidObject, m = a.data.oidObject, { data: n, statesNew: l } = re("oid"), { value: r, updateValue: x } = _("oid"), { updateValue: f } = _("cid"), b = m == null ? void 0 : m.type, h = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(b || ""), C = c.useMemo(() => l.findIndex((o) => String(o.value) === String(r)), [
      l,
      r
    ]), y = c.useCallback((o) => {
      const p = o.target.value, u = l[p].value;
      d && f(u), x(u);
    }, [
      l,
      d,
      f,
      x
    ]);
    return i.jsxs(Y, {
      isValidType: h,
      data: n,
      oidValue: r,
      children: [
        i.jsx(q, {
          data: n,
          widget: a
        }),
        i.jsx(O, {
          ref: e,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: i.jsx(Z, {
            variant: "standard",
            disableUnderline: true,
            value: C !== -1 ? C : "",
            onChange: y,
            MenuProps: {
              sx: {
                maxWidth: t,
                mt: 0.3,
                "& .MuiList-root": {
                  py: 0
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${t}px - 10%)`,
              "& .MuiSelect-icon": {
                color: W(a.data.arrowColor || n.textColor || n.iconColor)
              }
            },
            children: l.map((o, p) => i.jsx(ge, {
              value: p,
              sx: ve(o.background),
              children: i.jsxs(le, {
                direction: "row",
                spacing: o.icon ? 1 : 0,
                sx: {
                  alignItems: "center"
                },
                children: [
                  i.jsx(ee, {
                    alt: "",
                    src: o.icon,
                    style: {
                      position: "relative",
                      top: `calc(0px - ${o.iconYOffset})`,
                      right: `calc(0px - ${o.iconXOffset})`,
                      height: o.iconSize,
                      ...te(o.icon, o.iconColor, o.forceColorMask)
                    }
                  }),
                  i.jsx(oe, {
                    component: O,
                    variant: "subtitle2",
                    sx: {
                      whiteSpace: "pre-wrap",
                      fontSize: o.valueSize,
                      textAlign: "left",
                      background: S(o.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: S(o.textColor) ? "transparent" : o.textColor,
                      textTransform: "none",
                      width: "100%",
                      height: "100%",
                      flexGrow: 1,
                      alignContent: "center"
                    },
                    contentEditable: "false",
                    dangerouslySetInnerHTML: {
                      __html: o.label
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
  F = class extends ae {
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
              ...se([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...ne(),
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
      return F.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, s) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ie(this.wrapContent(i.jsx(xe, {})), s);
    }
  };
});
export {
  __tla,
  F as default
};
