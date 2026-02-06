import { a as B, g as L, u as P, L as k, k as D, l as G, j as s, s as N, d as M, e as U, n as H, r as z, m as E, o as r, a5 as $, C as j, K as A, a6 as J, v as K, A as X, E as Y, w as O, a7 as q, y as Q, T as Z, z as V, G as ee, H as _, J as te, __tla as __tla_0 } from "./useData-D3gzqQso.js";
import { o as oe, c as ae, __tla as __tla_1 } from "./commonObjectFields-CmaiWPdW.js";
import { u as T, d as ie, __tla as __tla_2 } from "./useValueState-De-9f-OL.js";
import { v as u, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as se, __tla as __tla_4 } from "./useDataNew-DZkX_2-0.js";
import { S as ne, __tla as __tla_5 } from "./SafeImg-GNbliXEz.js";
import { l as R, __tla as __tla_6 } from "./listItemTextClasses-NnaSpnu_.js";
import { S as re, __tla as __tla_7 } from "./Stack-CHflb-4V.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
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
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  const W = B("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function le(e) {
    return L("MuiMenuItem", e);
  }
  const C = B("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), ce = (e, t) => {
    const { ownerState: a } = e;
    return [
      t.root,
      a.dense && t.dense,
      a.divider && t.divider,
      !a.disableGutters && t.gutters
    ];
  }, de = (e) => {
    const { disabled: t, dense: a, divider: n, disableGutters: p, selected: g, classes: d } = e, l = U({
      root: [
        "root",
        a && "dense",
        t && "disabled",
        !p && "gutters",
        n && "divider",
        g && "selected"
      ]
    }, le, d);
    return {
      ...d,
      ...l
    };
  }, pe = N(H, {
    shouldForwardProp: (e) => z(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: ce
  })(E(({ theme: e }) => ({
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
    [`&.${C.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : r(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${C.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : r(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${C.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : r(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : r(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${C.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${C.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`& + .${$.root}`]: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    },
    [`& + .${$.inset}`]: {
      marginLeft: 52
    },
    [`& .${R.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${R.inset}`]: {
      paddingLeft: 36
    },
    [`& .${W.root}`]: {
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
          [`& .${W.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  }))), ue = u.forwardRef(function(t, a) {
    const n = P({
      props: t,
      name: "MuiMenuItem"
    }), { autoFocus: p = false, component: g = "li", dense: d = false, divider: i = false, disableGutters: l = false, focusVisibleClassName: x, role: h = "menuitem", tabIndex: f, className: S, ...w } = n, m = u.useContext(k), b = u.useMemo(() => ({
      dense: d || m.dense || false,
      disableGutters: l
    }), [
      m.dense,
      d,
      l
    ]), o = u.useRef(null);
    D(() => {
      p && o.current && o.current.focus();
    }, [
      p
    ]);
    const v = {
      ...n,
      dense: b.dense,
      divider: i,
      disableGutters: l
    }, c = de(n), y = G(o, a);
    let I;
    return n.disabled || (I = f !== void 0 ? f : -1), s.jsx(k.Provider, {
      value: b,
      children: s.jsx(pe, {
        ref: y,
        role: h,
        tabIndex: I,
        component: g,
        focusVisibleClassName: M(c.focusVisible, x),
        className: M(c.root, S),
        ...w,
        ownerState: v,
        classes: c
      })
    });
  }), ge = () => [
    {
      type: "custom",
      component: () => s.jsx(j, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: oe([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => s.jsx(j, {
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
      component: (e, t, a, n) => s.jsx(A, {
        field: e,
        data: t,
        onDataChange: a,
        props: n
      })
    }
  ];
  function me() {
    const e = u.useRef(null), { width: t } = J(e == null ? void 0 : e.current), a = u.useContext(K), { widget: n, theme: p } = a, g = n.data.cidObject, d = n.data.oidObject, { data: i, statesNew: l } = se("oid"), { value: x, updateValue: h } = T("oid"), { updateValue: f } = T("cid"), S = d == null ? void 0 : d.type, w = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(S || ""), m = l.findIndex((o) => String(o.value) === String(x)), b = (o) => {
      const v = o.target.value, y = l[v].value;
      g && f(y), h(y);
    };
    return s.jsxs(X, {
      isValidType: w,
      data: i,
      oidValue: x,
      children: [
        s.jsx(Y, {
          data: i,
          widget: n
        }),
        s.jsx(O, {
          ref: e,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: s.jsx(q, {
            variant: "standard",
            disableUnderline: true,
            value: m !== -1 ? m : "",
            onChange: b,
            MenuProps: {
              sx: {
                maxWidth: t
              },
              MenuListProps: {
                sx: {
                  background: i.background ? r(i.background, 0.7) : i.background
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${t}px - 10%)`,
              "& .MuiSelect-select": {
                backgroundColor: r(i.textColor || i.iconColor, 0.15),
                paddingLeft: 1
              },
              "& .MuiSelect-icon": {
                color: n.data.arrowColor || i.textColor || i.iconColor
              },
              "&.Mui-focused": {
                ariaHidden: "true",
                "& .MuiSelect-select": {
                  backgroundColor: r(i.textColor || i.iconColor, 0.2),
                  paddingLeft: 1
                }
              }
            },
            children: l.map((o, v) => {
              const c = o.icon ? o.textColor || p.palette.primary.main : o.iconColor;
              return s.jsx(ue, {
                value: v,
                sx: {
                  "& .MuiTouchRipple-root": {
                    color: c
                  },
                  "&.Mui-selected": {
                    backgroundColor: r(c, 0.16)
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: r(c, 0.24)
                  },
                  "&:hover": {
                    backgroundColor: r(c, 0.08)
                  },
                  background: o.background
                },
                children: s.jsxs(re, {
                  direction: "row",
                  spacing: o.icon ? 1 : 0,
                  sx: {
                    alignItems: "center"
                  },
                  children: [
                    s.jsx(ne, {
                      alt: "",
                      src: o.icon,
                      style: {
                        position: "relative",
                        top: `calc(0px - ${o.iconYOffset})`,
                        right: `calc(0px - ${o.iconXOffset})`,
                        height: o.iconSize,
                        ...Q(o.icon, o.iconColor, o.forceColorMask)
                      }
                    }),
                    s.jsx(Z, {
                      component: O,
                      variant: "subtitle2",
                      sx: {
                        whiteSpace: "pre-wrap",
                        fontSize: o.valueSize,
                        textAlign: "left",
                        background: V(o.textColor),
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: V(o.textColor) ? "transparent" : o.textColor,
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
              }, String(o.value));
            })
          })
        })
      ]
    });
  }
  F = class extends ee {
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
              ..._({
                groupName: ""
              })
            ]
          },
          {
            name: "select_collection",
            label: "group_select_collection",
            fields: [
              ...ae([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...ie(),
              ...ge()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ..._({
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
    onStateUpdated(t, a) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const a = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, te(this.wrapContent(s.jsx(me, {})), a);
    }
  };
});
export {
  __tla,
  F as default
};
