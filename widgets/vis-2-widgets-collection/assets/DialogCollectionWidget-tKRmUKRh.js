import { j as e, C as c, M as T, w as g, A as j, T as A, z as f, D as _, o as v, I, v as w, a3 as W, E as D, s as V, y as H, n as O, G as R, H as z, J as M, __tla as __tla_0 } from "./useData-2dnP1q4b.js";
import { v as d, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as P, __tla as __tla_2 } from "./useHtmlValue-Dcwl_hqT.js";
import { C as $, __tla as __tla_3 } from "./Close-DEJXQk2V.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let B;
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
  })()
]).then(async () => {
  const F = () => [
    {
      name: "view",
      label: "view",
      type: "select-views",
      multiple: false
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
    },
    {
      name: "oid",
      type: "id",
      label: "oid",
      tooltip: "dialog_set_oid_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
    },
    {
      name: "dialogBackgroundColor",
      label: "background_color",
      type: "color"
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {
        dividerText: "dialog_button"
      })
    },
    {
      name: "value",
      label: "dialog_text",
      type: "html",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
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
  function E({ open: m, handleClose: i, widget: t, data: l, getWidgetView: a }) {
    var _a;
    const h = d.useRef(null), [s, o] = d.useState(null), r = (_a = h.current) == null ? void 0 : _a.header;
    d.useEffect(() => {
      t.data.dialogHeaderAsTitle && r && s && (t.data.dialogHeaderAsTitle && (r.style.width = "0px", r.style.height = "0px"), s.innerHTML = l.header, s.style.height = "auto", s.style.width = "auto");
    }, [
      r,
      s,
      l.header,
      t.data.dialogHeaderAsTitle
    ]);
    const p = e.jsx(I, {
      sx: {
        alignSelf: "flex-end",
        filter: "brightness(1.5)",
        color: (n) => t.data.dialogCloseButtonColor || l.frameBackgroundColor || n.palette.background.default
      },
      "aria-label": "delete",
      onClick: i,
      children: e.jsx($, {})
    });
    return e.jsx(T, {
      onClose: i,
      open: m,
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: t.data.dialogBackgroundColor || "inherit"
      },
      children: e.jsx(g, {
        sx: {
          width: t.data.dialogInPixel ? `${t.data.dialogWidth}px` : `${t.data.dialogWidth}%`,
          height: t.data.dialogInPixel ? `${t.data.dialogHeight}px` : `${t.data.dialogHeight}%`
        },
        children: e.jsxs(j, {
          ref: h,
          data: l,
          sx: {
            flexDirection: "column",
            background: l.backgroundColor || l.background
          },
          children: [
            e.jsxs(g, {
              sx: {
                position: "relative",
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: t.data.dialogCloseButtonTop || !t.data.dialogHeaderAsTitle ? 0 : 2
              },
              children: [
                e.jsx(g, {
                  sx: {
                    position: "absolute",
                    left: 0,
                    width: "100%"
                  },
                  children: e.jsx(A, {
                    ref: o,
                    noWrap: true,
                    variant: "body2",
                    sx: {
                      fontSize: l.headerSize,
                      px: t.data.dialogCloseButtonTop ? 4 : 0,
                      background: f(l.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: f(l.textColor) ? "transparent" : l.textColor
                    }
                  })
                }),
                t.data.dialogCloseButtonTop && p
              ]
            }),
            e.jsx(e.Fragment, {
              children: t.data.dialogCloseButtonTop && e.jsx(_, {
                sx: {
                  width: "100%",
                  opacity: "0.5",
                  background: (n) => l.frameBackgroundColor || n.palette.background.default
                }
              })
            }),
            e.jsx(g, {
              sx: {
                "::-webkit-scrollbar-track": {
                  background: l.frameBackgroundColor && v(l.frameBackgroundColor, 0.5)
                },
                "::-webkit-scrollbar-thumb": {
                  opacity: "0.5",
                  background: l.frameBackgroundColor && v(l.frameBackgroundColor, 0.7)
                },
                position: "relative",
                overflow: "auto",
                width: "100%",
                height: "100%"
              },
              children: a(t.data.view || "", {
                style: {}
              })
            }),
            e.jsxs(e.Fragment, {
              children: [
                t.data.dialogCloseButtonBottom && e.jsx(_, {
                  sx: {
                    width: "100%",
                    opacity: "0.5",
                    background: (n) => l.frameBackgroundColor || n.palette.background.default
                  }
                }),
                t.data.dialogCloseButtonBottom && p
              ]
            })
          ]
        })
      })
    });
  }
  const L = V(O)({
    width: "100% !important",
    height: "100% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });
  function U() {
    const [m, i] = d.useState(false), t = d.useRef(null), l = d.useContext(w), { widget: a, getWidgetView: h, setValue: s } = l, { data: o, oidValue: r } = W("oid"), p = a.data.oidObject, n = p == null ? void 0 : p._id, S = (p == null ? void 0 : p.type) === "boolean" || !a.data.oid || a.data.oid === "nothing_selected", y = d.useCallback(() => {
      if (t.current) return;
      const k = a.data.dialogAutoClose, x = String(k);
      if (!k || x === "" || x === "0") {
        i(true);
        return;
      }
      let u;
      x === "true" ? u = 1e4 : u = parseInt(x, 10), u < 60 && (u *= 1e3), u = u || 1e3, t.current = setTimeout(() => {
        t.current = null, n && s(n, false), i(false);
      }, u), i(true);
    }, [
      n,
      s,
      a.data.dialogAutoClose
    ]), b = d.useCallback(() => {
      t.current && (clearTimeout(t.current), t.current = null), n && s(n, false), i(false);
    }, [
      n,
      s
    ]), C = P(r, a, o);
    return d.useEffect(() => {
      r != null && (r ? y() : b());
    }, [
      r,
      y,
      b
    ]), e.jsxs(e.Fragment, {
      children: [
        e.jsx(E, {
          open: m,
          handleClose: b,
          widget: a,
          data: o,
          getWidgetView: h
        }),
        e.jsxs(j, {
          isValidType: S,
          data: o,
          children: [
            e.jsx(D, {
              data: o,
              widget: a
            }),
            e.jsx(g, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex"
              },
              children: e.jsxs(L, {
                onClick: () => {
                  n && s(n, true), y();
                },
                sx: {
                  "& .MuiTouchRipple-root span": {
                    color: o.iconColor
                  }
                },
                children: [
                  a.data.onlyIcon || !a.data.onlyText && !a.data.onlyIcon ? e.jsx(g, {
                    sx: {
                      overflow: "hidden",
                      p: 0.5,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    },
                    children: e.jsx("img", {
                      alt: "",
                      src: o.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                      style: {
                        position: "relative",
                        objectFit: "contain",
                        top: `calc(0px - ${o.iconYOffset})`,
                        right: `calc(0px - ${o.iconXOffset})`,
                        width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                        height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                        ...H(o.icon, o.iconColor, o.forceColorMaskActive ?? false)
                      }
                    })
                  }) : null,
                  a.data.onlyText || !a.data.onlyText && !a.data.onlyIcon ? e.jsx(A, {
                    variant: "body2",
                    sx: {
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
                      background: f(o.textColorActive || o.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: f(o.textColor) ? "transparent" : o.textColor
                    },
                    dangerouslySetInnerHTML: {
                      __html: C !== void 0 ? String(C) : ""
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
  B = class extends R {
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
              ...z({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "dialog",
            label: "group_dialog",
            fields: [
              ...F()
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
      return B.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(i, t) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const t = {
        id: i.id,
        refService: i.refService,
        style: i.style,
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
      return i.widget.data.noCard || i.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, M(this.wrapContent(e.jsx(U, {})), t);
    }
  };
});
export {
  __tla,
  B as default
};
