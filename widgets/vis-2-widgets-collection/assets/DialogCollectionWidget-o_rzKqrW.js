import { j as e, C as c, M as w, w as p, A as k, T as B, D as v, o as A, I, q as W, x as D, y as V, s as H, z as O, n as R, G as z, H as P, L as $, __tla as __tla_0 } from "./commonFields-Dc3dYGx-.js";
import { v as d, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as F, __tla as __tla_2 } from "./useHtmlValue-Dcwl_hqT.js";
import { C as M, __tla as __tla_3 } from "./Close-APpa6HX8.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let S;
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
  const L = () => [
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
  function E({ open: x, handleClose: a, widget: t, data: l, getWidgetView: i, fontStyles: y, textStyles: u }) {
    var _a;
    const h = d.useRef(null), [r, o] = d.useState(null), s = (_a = h.current) == null ? void 0 : _a.header;
    d.useEffect(() => {
      t.data.dialogHeaderAsTitle && s && r && (t.data.dialogHeaderAsTitle && (s.style.width = "0px", s.style.height = "0px"), r.innerHTML = l.header, r.style.height = "auto", r.style.width = "auto");
    }, [
      s,
      r,
      l.header,
      t.data.dialogHeaderAsTitle
    ]);
    const f = e.jsx(I, {
      sx: {
        alignSelf: "flex-end",
        filter: "brightness(1.5)",
        color: (n) => t.data.dialogCloseButtonColor || l.frameBackgroundColor || n.palette.background.default
      },
      "aria-label": "delete",
      onClick: a,
      children: e.jsx(M, {})
    });
    return e.jsx(w, {
      onClose: a,
      open: x,
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: t.data.dialogBackgroundColor || "inherit"
      },
      children: e.jsx(p, {
        sx: {
          width: t.data.dialogInPixel ? `${t.data.dialogWidth}px` : `${t.data.dialogWidth}%`,
          height: t.data.dialogInPixel ? `${t.data.dialogHeight}px` : `${t.data.dialogHeight}%`
        },
        children: e.jsxs(k, {
          ref: h,
          data: l,
          sx: {
            flexDirection: "column",
            background: l.backgroundColor || l.background
          },
          children: [
            e.jsxs(p, {
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
                e.jsx(p, {
                  sx: {
                    position: "absolute",
                    left: 0,
                    width: "100%"
                  },
                  children: e.jsx(B, {
                    ref: o,
                    noWrap: true,
                    variant: "body2",
                    sx: {
                      ...y,
                      ...u,
                      fontSize: l.headerSize,
                      color: l.textColor,
                      px: t.data.dialogCloseButtonTop ? 4 : 0
                    }
                  })
                }),
                t.data.dialogCloseButtonTop && f
              ]
            }),
            e.jsx(e.Fragment, {
              children: t.data.dialogCloseButtonTop && e.jsx(v, {
                sx: {
                  width: "100%",
                  opacity: "0.5",
                  background: (n) => l.frameBackgroundColor || n.palette.background.default
                }
              })
            }),
            e.jsx(p, {
              sx: {
                "::-webkit-scrollbar-track": {
                  background: l.frameBackgroundColor && A(l.frameBackgroundColor, 0.5)
                },
                "::-webkit-scrollbar-thumb": {
                  opacity: "0.5",
                  background: l.frameBackgroundColor && A(l.frameBackgroundColor, 0.7)
                },
                position: "relative",
                overflow: "auto",
                width: "100%",
                height: "100%"
              },
              children: i(t.data.view || "", {
                style: {}
              })
            }),
            e.jsxs(e.Fragment, {
              children: [
                t.data.dialogCloseButtonBottom && e.jsx(v, {
                  sx: {
                    width: "100%",
                    opacity: "0.5",
                    background: (n) => l.frameBackgroundColor || n.palette.background.default
                  }
                }),
                t.data.dialogCloseButtonBottom && f
              ]
            })
          ]
        })
      })
    });
  }
  const U = H(R)({
    width: "100% !important",
    height: "100% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });
  function G() {
    const [x, a] = d.useState(false), t = d.useRef(null), l = d.useContext(W), { widget: i, getWidgetView: y, setValue: u } = l, { textStyles: h, fontStyles: r } = D(i.style), { data: o, oidValue: s } = V("oid"), f = i.data.oidObject, n = f == null ? void 0 : f._id, T = (f == null ? void 0 : f.type) === "boolean" || !i.data.oid || i.data.oid === "nothing_selected", b = d.useCallback(() => {
      if (t.current) return;
      const j = i.data.dialogAutoClose, m = String(j);
      if (!j || m === "" || m === "0") {
        a(true);
        return;
      }
      let g;
      m === "true" ? g = 1e4 : g = parseInt(m, 10), g < 60 && (g *= 1e3), g = g || 1e3, t.current = setTimeout(() => {
        t.current = null, n && u(n, false), a(false);
      }, g), a(true);
    }, [
      n,
      u,
      i.data.dialogAutoClose
    ]), C = d.useCallback(() => {
      t.current && (clearTimeout(t.current), t.current = null), n && u(n, false), a(false);
    }, [
      n,
      u
    ]), _ = F(s, i, o);
    return d.useEffect(() => {
      s != null && (s ? b() : C());
    }, [
      s,
      b,
      C
    ]), e.jsxs(e.Fragment, {
      children: [
        e.jsx(E, {
          open: x,
          handleClose: C,
          widget: i,
          data: o,
          getWidgetView: y,
          fontStyles: r,
          textStyles: h
        }),
        e.jsx(k, {
          isValidType: T,
          data: o,
          children: e.jsx(p, {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex"
            },
            children: e.jsxs(U, {
              onClick: () => {
                n && u(n, true), b();
              },
              sx: {
                "& .MuiTouchRipple-root span": {
                  color: o.iconColor
                }
              },
              children: [
                i.data.onlyIcon || !i.data.onlyText && !i.data.onlyIcon ? e.jsx(p, {
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
                      ...O(o.icon, o.iconColor)
                    }
                  })
                }) : null,
                i.data.onlyText || !i.data.onlyText && !i.data.onlyIcon ? e.jsx(B, {
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
                    ...r,
                    ...h,
                    fontSize: o.valueSize,
                    color: o.textColor,
                    textTransform: "none"
                  },
                  dangerouslySetInnerHTML: {
                    __html: _ !== void 0 ? String(_) : ""
                  }
                }) : null
              ]
            })
          })
        })
      ]
    });
  }
  S = class extends z {
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
              ...P({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "dialog",
            label: "group_dialog",
            fields: [
              ...L()
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
      return S.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(a, t) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const t = {
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
      return a.widget.data.noCard || a.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, $(this.wrapContent(e.jsx(G, {})), t);
    }
  };
});
export {
  __tla,
  S as default
};
