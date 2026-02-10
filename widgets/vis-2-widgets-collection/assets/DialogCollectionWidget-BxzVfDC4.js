import { j as t, a7 as H, C as u, O as A, A as C, o as S, M as V, w as m, E as v, T, D as B, I as z, v as E, y as R, z as P, G as $, s as F, S as L, n as U, H as N, J as G, N as X, __tla as __tla_0 } from "./useData-V3RviNbf.js";
import { R as b, v as n, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Y, __tla as __tla_2 } from "./Close-BdxMyRct.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let I;
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
  const J = () => [
    {
      name: "view",
      label: "view",
      type: "select-views",
      multiple: false
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "dialogAutoClose",
      label: "dialog_auto_close",
      type: "slider",
      min: 0,
      max: 3e4,
      step: 100
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "dialogId",
      type: "id",
      label: "oid",
      tooltip: "dialog_set_oid_tooltip",
      onChange: H([
        "boolean"
      ], "dialogId")
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "dialogHeaderAsTitle",
      label: "dialog_header_as_title",
      type: "checkbox",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "dialogWidth",
      label: "dialog_width",
      type: "slider",
      min: 1,
      max: 100,
      default: 100,
      step: 1
    },
    {
      name: "dialogHeight",
      label: "dialog_height",
      type: "slider",
      min: 1,
      max: 100,
      default: 100,
      step: 1
    },
    {
      name: "dialogInPixel",
      label: "dialog_in_pixel",
      type: "checkbox",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "dialogBackgroundColor",
      label: "background_color",
      default: "",
      type: "custom",
      fallbackFields: [
        ""
      ],
      noGradient: false,
      component: (s, a, e, l) => t.jsx(A, {
        field: s,
        data: a,
        onDataChange: e,
        props: l
      })
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {
        dividerText: "dialog_button"
      })
    },
    {
      name: "dialogText",
      label: "dialog_text",
      type: "html",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "dialogCloseButtonTop",
      label: "dialog_close_button_top",
      type: "checkbox",
      default: false
    },
    {
      name: "dialogCloseButtonBottom",
      label: "dialog_close_button_bottom",
      type: "checkbox",
      default: false
    },
    {
      name: "dialogCloseButtonColor",
      label: "dialog_close_button_color",
      type: "color"
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(u, {})
    },
    {
      name: "onlyIcon",
      label: "only_icon",
      type: "checkbox",
      default: false,
      hidden: "data.onlyText"
    },
    {
      name: "onlyText",
      label: "only_text",
      type: "checkbox",
      default: false,
      hidden: "data.onlyIcon"
    }
  ];
  function q({ color: s, frameBackgroundColor: a, onClick: e }) {
    return t.jsx(z, {
      sx: {
        alignSelf: "flex-end",
        filter: "brightness(1.5)",
        color: (l) => s || a || l.palette.background.default
      },
      "aria-label": "close",
      onClick: e,
      children: t.jsx(Y, {})
    });
  }
  const j = b.memo(q), K = (s) => ({
    width: "100%",
    opacity: "0.5",
    background: (a) => s || a.palette.background.default
  });
  function Q({ open: s, handleClose: a, widget: e, data: l, getWidgetView: i }) {
    const f = n.useRef(null), r = e.data.dialogHeaderAsTitle;
    n.useEffect(() => {
      var _a;
      const g = (_a = f.current) == null ? void 0 : _a.header;
      if (!(!r || !g)) return g.style.width = "0px", g.style.height = "0px", () => {
        g.style.width = "", g.style.height = "";
      };
    }, [
      r
    ]);
    const d = n.useMemo(() => r ? l.header ?? "" : "", [
      r,
      l.header
    ]), o = n.useMemo(() => ({
      fontSize: l.headerSize,
      px: e.data.dialogCloseButtonTop ? 4 : 0,
      height: r ? "auto" : 0,
      width: r ? "auto" : 0,
      background: C(l.textColor),
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: C(l.textColor) ? "transparent" : l.textColor
    }), [
      l.headerSize,
      e.data.dialogCloseButtonTop,
      r,
      l.textColor
    ]), h = n.useMemo(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: e.data.dialogBackgroundColor || "inherit"
    }), [
      e.data.dialogBackgroundColor
    ]), c = n.useMemo(() => ({
      width: e.data.dialogInPixel ? `${e.data.dialogWidth}px` : `${e.data.dialogWidth}%`,
      height: e.data.dialogInPixel ? `${e.data.dialogHeight}px` : `${e.data.dialogHeight}%`
    }), [
      e.data.dialogInPixel,
      e.data.dialogWidth,
      e.data.dialogHeight
    ]), k = n.useMemo(() => ({
      flexDirection: "column",
      background: l.backgroundColor || l.background
    }), [
      l.backgroundColor,
      l.background
    ]), y = n.useMemo(() => ({
      "::-webkit-scrollbar-track": {
        background: l.frameBackgroundColor && S(l.frameBackgroundColor, 0.5)
      },
      "::-webkit-scrollbar-thumb": {
        opacity: "0.5",
        background: l.frameBackgroundColor && S(l.frameBackgroundColor, 0.7)
      },
      position: "relative",
      overflow: "auto",
      width: "100%",
      height: "100%"
    }), [
      l.frameBackgroundColor
    ]), x = n.useMemo(() => ({
      position: "relative",
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      p: e.data.dialogCloseButtonTop || !r ? 0 : 2
    }), [
      e.data.dialogCloseButtonTop,
      r
    ]), p = n.useMemo(() => K(l.frameBackgroundColor), [
      l.frameBackgroundColor
    ]);
    return t.jsx(V, {
      onClose: a,
      open: s,
      sx: h,
      children: t.jsx(m, {
        sx: c,
        children: t.jsxs(v, {
          ref: f,
          data: l,
          sx: k,
          children: [
            t.jsxs(m, {
              sx: x,
              children: [
                t.jsx(m, {
                  sx: {
                    position: "absolute",
                    left: 0,
                    width: "100%"
                  },
                  children: t.jsx(T, {
                    noWrap: true,
                    variant: "body2",
                    sx: o,
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  })
                }),
                e.data.dialogCloseButtonTop && t.jsx(j, {
                  color: e.data.dialogCloseButtonColor,
                  frameBackgroundColor: l.frameBackgroundColor,
                  onClick: a
                })
              ]
            }),
            e.data.dialogCloseButtonTop ? t.jsx(B, {
              sx: p
            }) : null,
            t.jsx(m, {
              sx: y,
              children: i(e.data.view || "", {
                style: {}
              })
            }),
            e.data.dialogCloseButtonBottom ? t.jsx(B, {
              sx: p
            }) : null,
            e.data.dialogCloseButtonBottom ? t.jsx(j, {
              color: e.data.dialogCloseButtonColor,
              frameBackgroundColor: l.frameBackgroundColor,
              onClick: a
            }) : null
          ]
        })
      })
    });
  }
  const Z = b.memo(Q), ee = 1e4, te = 60, oe = 1e3, le = F(U)({
    width: "100% !important",
    height: "100% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }), ae = {
    overflow: "hidden",
    p: 0.5,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, ne = {
    width: "100%",
    height: "100%",
    display: "flex"
  };
  function ie(s) {
    const a = String(s);
    if (!s || a === "" || a === "0") return 0;
    if (a === "true") return ee;
    let e = parseInt(a, 10);
    return e < te && (e *= 1e3), e || oe;
  }
  function se() {
    var _a, _b;
    const [s, a] = n.useState(false), e = n.useRef(null), l = n.useContext(E), { widget: i, widget: { data: f }, getWidgetView: r, setValue: d } = l, { data: o, oidValue: h } = R("oid"), c = (_a = i.data.oidObject) == null ? void 0 : _a._id, y = ((_b = i.data.oidObject) == null ? void 0 : _b.type) === "boolean" || !i.data.oid || i.data.oid === "nothing_selected";
    n.useEffect(() => () => {
      e.current && clearTimeout(e.current);
    }, []);
    const x = n.useCallback(() => {
      if (e.current) return;
      const _ = ie(i.data.dialogAutoClose);
      if (_ === 0) {
        a(true);
        return;
      }
      e.current = setTimeout(() => {
        e.current = null, c && d(c, false), a(false);
      }, _), a(true);
    }, [
      c,
      d,
      i.data.dialogAutoClose
    ]), p = n.useCallback(() => {
      e.current && (clearTimeout(e.current), e.current = null), c && d(c, false), a(false);
    }, [
      c,
      d
    ]);
    n.useEffect(() => {
      h != null && (h ? x() : p());
    }, [
      h,
      x,
      p
    ]);
    const g = n.useCallback(() => {
      c && d(c, true), x();
    }, [
      c,
      d,
      x
    ]), M = n.useMemo(() => i.data.onlyIcon || !i.data.onlyText && !i.data.onlyIcon, [
      i.data.onlyIcon,
      i.data.onlyText
    ]), w = n.useMemo(() => i.data.onlyText || !i.data.onlyText && !i.data.onlyIcon, [
      i.data.onlyText,
      i.data.onlyIcon
    ]), D = n.useMemo(() => ({
      "& .MuiTouchRipple-root span": {
        color: o.iconColor
      }
    }), [
      o.iconColor
    ]), W = n.useMemo(() => ({
      position: "relative",
      objectFit: "contain",
      top: `calc(0px - ${o.iconYOffset})`,
      right: `calc(0px - ${o.iconXOffset})`,
      width: o.iconSizeOnly,
      height: o.iconSizeOnly,
      ...P(o.icon, o.iconColor, o.forceColorMask ?? false)
    }), [
      o.iconYOffset,
      o.iconXOffset,
      o.iconSizeOnly,
      o.icon,
      o.iconColor,
      o.forceColorMask
    ]), O = n.useMemo(() => ({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      p: 0.5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: o.valueSize,
      textTransform: "none",
      background: C(o.textColorActive || o.textColor),
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: C(o.textColor) ? "transparent" : o.textColor
    }), [
      o.valueSize,
      o.textColorActive,
      o.textColor
    ]);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(Z, {
          open: s,
          handleClose: p,
          widget: i,
          data: o,
          getWidgetView: r
        }),
        t.jsxs(v, {
          isValidType: y,
          data: o,
          children: [
            t.jsx($, {
              data: o,
              widget: i
            }),
            t.jsx(m, {
              sx: ne,
              children: t.jsxs(le, {
                onClick: g,
                sx: D,
                children: [
                  M ? t.jsx(m, {
                    sx: ae,
                    children: t.jsx(L, {
                      alt: "",
                      src: o.icon,
                      style: W
                    })
                  }) : null,
                  w ? t.jsx(T, {
                    variant: "body2",
                    sx: O,
                    dangerouslySetInnerHTML: {
                      __html: f.dialogText || ""
                    }
                  }) : null
                ]
              })
            })
          ]
        })
      ]
    });
  }
  const re = b.memo(se);
  I = class extends N {
    static getWidgetInfo() {
      return {
        id: "tplDialogCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "DialogCollectionWidget",
        visWidgetLabel: "dialog_collection_widget",
        visOrder: 8,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...G({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "dialog",
            label: "group_dialog",
            fields: [
              ...J()
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-dialog.png"
      };
    }
    getWidgetInfo() {
      return I.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(a, e) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const e = {
        id: a.id,
        refService: a.refService,
        style: a.style,
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
        getWidgetView: this.getWidgetView.bind(this),
        wrappedContent: this.wrappedCollectionContent
      };
      return a.widget.data.noCard || a.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, X(this.wrapContent(t.jsx(re, {})), e);
    }
  };
});
export {
  __tla,
  I as default
};
