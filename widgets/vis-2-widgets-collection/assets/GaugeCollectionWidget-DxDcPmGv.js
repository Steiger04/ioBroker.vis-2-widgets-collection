import { j as M, C as A, v as Ze, z as Ta, w as Ke, S as wa, a9 as Sa, y as Ca, U as Ba, E as Na, G as Va, H as Wa, J as Je, K as Ma, N as Oa, __tla as __tla_0 } from "./useData-V3RviNbf.js";
import { v as R, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { c as Be } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let ea;
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
  const ja = () => [
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_basic_options"
      })
    },
    {
      name: "gaugeType",
      label: "gauge_type",
      type: "select",
      options: [
        {
          value: "linear",
          label: "linear"
        },
        {
          value: "radial",
          label: "radial"
        }
      ],
      default: "linear",
      noTranslation: true
    },
    {
      name: "gaugeMinValue",
      type: "number",
      label: "gauge_min_value",
      default: 0,
      step: 1
    },
    {
      name: "gaugeMaxValue",
      type: "number",
      label: "gauge_max_value",
      default: 100,
      step: 1
    },
    {
      name: "gaugePadding",
      type: "number",
      label: "gauge_padding",
      default: 8,
      step: 1,
      min: 0
    },
    {
      name: "gaugeIconFit",
      type: "select",
      label: "gauge_icon_fit",
      options: [
        {
          value: "contain",
          label: "contain"
        },
        {
          value: "cover",
          label: "cover"
        },
        {
          value: "fill",
          label: "fill"
        }
      ],
      default: "contain",
      noTranslation: true
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_linear_borders_options"
      }),
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeBorderRadius",
      type: "number",
      label: "gauge_border_radius",
      default: 0,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_linear_progress_bar_options"
      }),
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeBarBeginCircle",
      type: "number",
      label: "gauge_bar_begin_circle",
      default: 30,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeBarLength",
      type: "number",
      label: "gauge_bar_length",
      default: 85,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_linear_coloring_options"
      }),
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeColorBarEnd",
      type: "color",
      label: "gauge_color_bar_end",
      default: "",
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeColorBarProgressEnd",
      type: "color",
      label: "gauge_color_bar_progress_end",
      default: "",
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_linear_element_positioning_options"
      }),
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeTickSide",
      type: "select",
      label: "gauge_tick_side",
      options: [
        {
          value: "both",
          label: "both"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "right",
          label: "right"
        }
      ],
      default: "both",
      noTranslation: true,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeNeedleSide",
      type: "select",
      label: "gauge_needle_side",
      options: [
        {
          value: "both",
          label: "both"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "right",
          label: "right"
        }
      ],
      default: "both",
      noTranslation: true,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeNumberSide",
      type: "select",
      label: "gauge_number_side",
      options: [
        {
          value: "both",
          label: "both"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "right",
          label: "right"
        }
      ],
      default: "both",
      noTranslation: true,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_linear_ticks_bar_options"
      }),
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeTicksWidth",
      type: "number",
      label: "gauge_ticks_width",
      default: 10,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeTicksWidthMinor",
      type: "number",
      label: "gauge_ticks_width_minor",
      default: 5,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      name: "gaugeTicksPadding",
      type: "number",
      label: "gauge_ticks_padding",
      default: 5,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "linear"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_radial_ticks_bar_options"
      }),
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeTicksAngle",
      type: "number",
      label: "gauge_ticks_angle",
      default: 270,
      step: 1,
      min: 0,
      max: 360,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeStartAngle",
      type: "number",
      label: "gauge_start_angle",
      default: 45,
      step: 1,
      min: 0,
      max: 360,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_radial_coloring_options"
      }),
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeColorNeedleCircleOuter",
      type: "color",
      label: "gauge_color_needle_circle_outer",
      default: "#f0f0f0",
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeColorNeedleCircleOuterEnd",
      type: "color",
      label: "gauge_color_needle_circle_outer_end",
      default: "#ccc",
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeColorNeedleCircleInner",
      type: "color",
      label: "gauge_color_needle_circle_inner",
      default: "#e8e8e8",
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeColorNeedleCircleInnerEnd",
      type: "color",
      label: "gauge_color_needle_circle_inner_end",
      default: "#f5f5f5",
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_radial_needle_options"
      }),
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeNeedleCircleSize",
      type: "number",
      label: "gauge_needle_circle_size",
      default: 10,
      step: 1,
      min: 0,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeNeedleCircleInner",
      type: "checkbox",
      label: "gauge_needle_circle_inner",
      default: true,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeNeedleCircleOuter",
      type: "checkbox",
      label: "gauge_needle_circle_outer",
      default: true,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_radial_animation_options"
      }),
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeAnimationTarget",
      type: "select",
      label: "gauge_animation_target",
      options: [
        {
          value: "needle",
          label: "needle"
        },
        {
          value: "plate",
          label: "plate"
        }
      ],
      default: "needle",
      noTranslation: true,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      name: "gaugeUseMinPath",
      type: "checkbox",
      label: "gauge_use_min_path",
      default: false,
      hidden: (g) => g.gaugeType !== "radial"
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_ticks_bar_options"
      })
    },
    {
      name: "gaugeExactTicks",
      type: "checkbox",
      label: "gauge_exact_ticks",
      default: false
    },
    {
      name: "gaugeMajorTicks",
      type: "number",
      label: "gauge_major_ticks",
      default: 10,
      step: 1
    },
    {
      name: "gaugeMinorTicks",
      type: "number",
      label: "gauge_minor_ticks",
      default: 0,
      step: 1
    },
    {
      name: "gaugeStrokeTicks",
      type: "checkbox",
      label: "gauge_stroke_ticks",
      default: true
    },
    {
      name: "gaugeMajorTicksInt",
      type: "number",
      label: "gauge_major_ticks_int",
      default: 1,
      step: 1
    },
    {
      name: "gaugeMajorTicksDec",
      type: "number",
      label: "gauge_major_ticks_dec",
      default: 0,
      step: 1
    },
    {
      name: "gaugeHighlightsWidth",
      type: "number",
      label: "gauge_highlights_width",
      default: 15,
      step: 1
    },
    {
      name: "gaugeNumbersMargin",
      type: "number",
      label: "gauge_numbers_margin",
      default: 1,
      step: 1
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_progress_bar_options"
      })
    },
    {
      name: "gaugeBarWidth",
      type: "number",
      label: "gauge_bar_width",
      default: 20,
      step: 1,
      min: 0,
      max: 50
    },
    {
      name: "gaugeBarStrokeWidth",
      type: "number",
      label: "gauge_bar_stroke_width",
      default: 0,
      step: 1,
      min: 0
    },
    {
      name: "gaugeBarProgress",
      type: "checkbox",
      label: "gauge_bar_progress",
      default: true
    },
    {
      name: "gaugeBarShadow",
      type: "number",
      label: "gauge_bar_shadow",
      default: 0,
      step: 1,
      min: 0
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_animation_options"
      })
    },
    {
      name: "gaugeAnimation",
      type: "checkbox",
      label: "gauge_animation",
      default: true
    },
    {
      name: "gaugeAnimationDuration",
      type: "number",
      label: "gauge_animation_duration",
      default: 500,
      step: 1,
      min: 0
    },
    {
      name: "gaugeAnimationRule",
      type: "select",
      label: "gauge_animation_rule",
      options: [
        {
          value: "linear",
          label: "linear"
        },
        {
          value: "quad",
          label: "quad"
        },
        {
          value: "quint",
          label: "quint"
        },
        {
          value: "cycle",
          label: "cycle"
        },
        {
          value: "bounce",
          label: "bounce"
        },
        {
          value: "elastic",
          label: "elastic"
        },
        {
          value: "dequad",
          label: "dequad"
        },
        {
          value: "dequint",
          label: "dequint"
        },
        {
          value: "decycle",
          label: "decycle"
        },
        {
          value: "debounce",
          label: "debounce"
        },
        {
          value: "delastic",
          label: "delastic"
        }
      ],
      default: "cycle",
      noTranslation: true
    },
    {
      name: "gaugeAnimatedValue",
      type: "checkbox",
      label: "gauge_animated_value",
      default: false
    },
    {
      name: "gaugeAnimateOnInit",
      type: "checkbox",
      label: "gauge_animate_on_init",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_coloring_options"
      })
    },
    {
      name: "gaugeColorPlate",
      type: "color",
      label: "gauge_color_plate",
      default: "rgba(0,0,0,0)"
    },
    {
      name: "gaugeColorPlateEnd",
      type: "color",
      label: "gauge_color_plate_end",
      default: "rgba(0,0,0,0)"
    },
    {
      name: "gaugeColorMajorTicks",
      type: "color",
      label: "gauge_color_major_ticks",
      default: "#444"
    },
    {
      name: "gaugeColorMinorTicks",
      type: "color",
      label: "gauge_color_minor_ticks",
      default: "#666"
    },
    {
      name: "gaugeColorStrokeTicks",
      type: "color",
      label: "gauge_color_stroke_ticks",
      default: "#444"
    },
    {
      name: "gaugeColorTitle",
      type: "color",
      label: "gauge_color_title",
      default: "#888"
    },
    {
      name: "gaugeColorUnits",
      type: "color",
      label: "gauge_color_units",
      default: "#888"
    },
    {
      name: "gaugeColorNumbers",
      type: "color",
      label: "gauge_color_numbers",
      default: "#444"
    },
    {
      name: "gaugeColorNeedle",
      type: "color",
      label: "gauge_color_needle",
      default: "rgba(240,128,128,1)"
    },
    {
      name: "gaugeColorNeedleEnd",
      type: "color",
      label: "gauge_color_needle_end",
      default: "rgba(255,160,122,.9)"
    },
    {
      name: "gaugeColorValueText",
      type: "color",
      label: "gauge_color_value_text",
      default: "#444"
    },
    {
      name: "gaugeColorValueTextShadow",
      type: "color",
      label: "gauge_color_value_text_shadow",
      default: "rgba(0,0,0,0.3)"
    },
    {
      name: "gaugeColorBorderShadow",
      type: "color",
      label: "gauge_color_border_shadow",
      default: "rgba(0,0,0,0.5)"
    },
    {
      name: "gaugeColorBorderOuter",
      type: "color",
      label: "gauge_color_border_outer",
      default: "#ddd"
    },
    {
      name: "gaugeColorBorderOuterEnd",
      type: "color",
      label: "gauge_color_border_outer_end",
      default: "#aaa"
    },
    {
      name: "gaugeColorBorderMiddle",
      type: "color",
      label: "gauge_color_border_middle",
      default: "#eee"
    },
    {
      name: "gaugeColorBorderMiddleEnd",
      type: "color",
      label: "gauge_color_border_middle_end",
      default: "#f0f0f0"
    },
    {
      name: "gaugeColorBorderInner",
      type: "color",
      label: "gauge_color_border_inner",
      default: "#fafafa"
    },
    {
      name: "gaugeColorBorderInnerEnd",
      type: "color",
      label: "gauge_color_border_inner_end",
      default: "#ccc"
    },
    {
      name: "gaugeColorValueBoxRect",
      type: "color",
      label: "gauge_color_value_box_rect",
      default: "#888"
    },
    {
      name: "gaugeColorValueBoxRectEnd",
      type: "color",
      label: "gauge_color_value_box_rect_end",
      default: "#666"
    },
    {
      name: "gaugeColorValueBoxBackground",
      type: "color",
      label: "gauge_color_value_box_background",
      default: "#babab2"
    },
    {
      name: "gaugeColorValueBoxShadow",
      type: "color",
      label: "gauge_color_value_box_shadow",
      default: "rgba(0,0,0,1)"
    },
    {
      name: "gaugeColorNeedleShadowUp",
      type: "color",
      label: "gauge_color_needle_shadow_up",
      default: "rgba(2,255,255,0.2)"
    },
    {
      name: "gaugeColorNeedleShadowDown",
      type: "color",
      label: "gauge_color_needle_shadow_down",
      default: "rgba(188,143,143,0.45)"
    },
    {
      name: "gaugeColorBarStroke",
      type: "color",
      label: "gauge_color_bar_stroke",
      default: "#222"
    },
    {
      name: "gaugeColorBar",
      type: "color",
      label: "gauge_color_bar",
      default: "#ccc"
    },
    {
      name: "gaugeColorBarProgress",
      type: "color",
      label: "gauge_color_bar_progress",
      default: "#888"
    },
    {
      name: "gaugeHighlightsLineCap",
      type: "select",
      label: "gauge_highlights_line_cap",
      options: [
        {
          value: "butt",
          label: "butt"
        },
        {
          value: "round",
          label: "round"
        },
        {
          value: "square",
          label: "square"
        }
      ],
      default: "butt",
      noTranslation: true
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_needle_configuration_options"
      })
    },
    {
      name: "gaugeNeedle",
      type: "checkbox",
      label: "gauge_needle",
      default: true
    },
    {
      name: "gaugeNeedleShadow",
      type: "checkbox",
      label: "gauge_needle_shadow",
      default: true
    },
    {
      name: "gaugeNeedleType",
      type: "select",
      label: "gauge_needle_type",
      options: [
        {
          value: "arrow",
          label: "arrow"
        },
        {
          value: "line",
          label: "line"
        }
      ],
      default: "arrow",
      noTranslation: true
    },
    {
      name: "gaugeNeedleStart",
      type: "number",
      label: "gauge_needle_start",
      default: 5,
      step: 1,
      min: 0,
      max: 100
    },
    {
      name: "gaugeNeedleEnd",
      type: "number",
      label: "gauge_needle_end",
      default: 85,
      step: 1,
      min: 0,
      max: 100
    },
    {
      name: "gaugeNeedleWidth",
      type: "number",
      label: "gauge_needle_width",
      default: 4
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_borders_options"
      })
    },
    {
      name: "gaugeBorders",
      type: "checkbox",
      label: "gauge_borders",
      default: true
    },
    {
      name: "gaugeBorderOuterWidth",
      type: "number",
      label: "gauge_border_outer_width",
      default: 3,
      min: 0
    },
    {
      name: "gaugeBorderMiddleWidth",
      type: "number",
      label: "gauge_border_middle_width",
      default: 3,
      min: 0
    },
    {
      name: "gaugeBorderInnerWidth",
      type: "number",
      label: "gauge_border_inner_width",
      default: 3,
      min: 0
    },
    {
      name: "gaugeBorderShadowWidth",
      type: "number",
      label: "gauge_border_shadow_width",
      default: 3,
      min: 0
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_value_box_options"
      })
    },
    {
      name: "gaugeValueBox",
      type: "checkbox",
      label: "gauge_value_box",
      default: true
    },
    {
      name: "gaugeValueBoxStroke",
      type: "number",
      label: "gauge_value_box_stroke",
      default: 5,
      step: 1,
      min: 0
    },
    {
      name: "gaugeValueBoxWidth",
      type: "number",
      label: "gauge_value_box_width",
      default: 0,
      step: 1,
      min: 0
    },
    {
      name: "gaugeValueText",
      type: "text",
      label: "gauge_value_text",
      default: ""
    },
    {
      name: "gaugeValueTextShadow",
      type: "checkbox",
      label: "gauge_value_text_shadow",
      default: true
    },
    {
      name: "gaugeValueBoxBorderRadius",
      type: "number",
      label: "gauge_value_box_border_radius",
      default: 2.5,
      step: 0.1,
      min: 0
    },
    {
      name: "gaugeValueInt",
      type: "number",
      label: "gauge_value_int",
      default: 3,
      step: 1,
      min: 0
    },
    {
      name: "gaugeValueDec",
      type: "number",
      label: "gauge_value_dec",
      default: 2,
      step: 1,
      min: 0
    },
    {
      label: "",
      type: "custom",
      component: () => M.jsx(A, {
        dividerText: "gauge_fonts_customization_options"
      })
    },
    {
      name: "gaugeFontNumbers",
      type: "fontname",
      label: "gauge_font_numbers",
      default: "Arial, Helvetica, sans-serif"
    },
    {
      name: "gaugeFontTitle",
      type: "fontname",
      label: "gauge_font_title",
      default: "Arial, Helvetica, sans-serif"
    },
    {
      name: "gaugeFontUnits",
      type: "fontname",
      label: "gauge_font_units",
      default: "Arial, Helvetica, sans-serif"
    },
    {
      name: "gaugeFontValue",
      type: "fontname",
      label: "gauge_font_value",
      default: "Arial, Helvetica, sans-serif"
    },
    {
      label: "",
      name: "allFieldsDivider",
      type: "custom",
      component: () => M.jsx(A, {})
    },
    {
      name: "gaugeFontNumbersSize",
      type: "number",
      label: "gauge_font_numbers_size",
      default: 20,
      step: 1,
      min: 0
    },
    {
      name: "gaugeFontTitleSize",
      type: "number",
      label: "gauge_font_title_size",
      default: 24,
      step: 1,
      min: 0
    },
    {
      name: "gaugeFontUnitsSize",
      type: "number",
      label: "gauge_font_units_size",
      default: 22,
      step: 1,
      min: 0
    },
    {
      name: "gaugeFontValueSize",
      type: "number",
      label: "gauge_font_value_size",
      default: 26,
      step: 1,
      min: 0
    },
    {
      label: "",
      name: "allFieldsDivider",
      type: "custom",
      component: () => M.jsx(A, {})
    },
    {
      name: "gaugeFontNumbersStyle",
      type: "select",
      label: "gauge_font_numbers_style",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "italic",
          label: "italic"
        },
        {
          value: "oblique",
          label: "oblique"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      name: "gaugeFontTitleStyle",
      type: "select",
      label: "gauge_font_title_style",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "italic",
          label: "italic"
        },
        {
          value: "oblique",
          label: "oblique"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      name: "gaugeFontUnitsStyle",
      type: "select",
      label: "gauge_font_units_style",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "italic",
          label: "italic"
        },
        {
          value: "oblique",
          label: "oblique"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      name: "gaugeFontValueStyle",
      type: "select",
      label: "gauge_font_value_style",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "italic",
          label: "italic"
        },
        {
          value: "oblique",
          label: "oblique"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      label: "",
      name: "allFieldsDivider",
      type: "custom",
      component: () => M.jsx(A, {})
    },
    {
      name: "gaugeFontNumbersWeight",
      type: "select",
      label: "gauge_font_numbers_weight",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "bold",
          label: "bold"
        },
        {
          value: "bolder",
          label: "bolder"
        },
        {
          value: "lighter",
          label: "lighter"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "200",
          label: "200"
        },
        {
          value: "300",
          label: "300"
        },
        {
          value: "400",
          label: "400"
        },
        {
          value: "500",
          label: "500"
        },
        {
          value: "600",
          label: "600"
        },
        {
          value: "700",
          label: "700"
        },
        {
          value: "800",
          label: "800"
        },
        {
          value: "900",
          label: "900"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      name: "gaugeFontTitleWeight",
      type: "select",
      label: "gauge_font_title_weight",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "bold",
          label: "bold"
        },
        {
          value: "bolder",
          label: "bolder"
        },
        {
          value: "lighter",
          label: "lighter"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "200",
          label: "200"
        },
        {
          value: "300",
          label: "300"
        },
        {
          value: "400",
          label: "400"
        },
        {
          value: "500",
          label: "500"
        },
        {
          value: "600",
          label: "600"
        },
        {
          value: "700",
          label: "700"
        },
        {
          value: "800",
          label: "800"
        },
        {
          value: "900",
          label: "900"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      name: "gaugeFontUnitsWeight",
      type: "select",
      label: "gauge_font_units_weight",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "bold",
          label: "bold"
        },
        {
          value: "bolder",
          label: "bolder"
        },
        {
          value: "lighter",
          label: "lighter"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "200",
          label: "200"
        },
        {
          value: "300",
          label: "300"
        },
        {
          value: "400",
          label: "400"
        },
        {
          value: "500",
          label: "500"
        },
        {
          value: "600",
          label: "600"
        },
        {
          value: "700",
          label: "700"
        },
        {
          value: "800",
          label: "800"
        },
        {
          value: "900",
          label: "900"
        }
      ],
      default: "normal",
      noTranslation: true
    },
    {
      name: "gaugeFontValueWeight",
      type: "select",
      label: "gauge_font_value_weight",
      options: [
        {
          value: "normal",
          label: "normal"
        },
        {
          value: "bold",
          label: "bold"
        },
        {
          value: "bolder",
          label: "bolder"
        },
        {
          value: "lighter",
          label: "lighter"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "200",
          label: "200"
        },
        {
          value: "300",
          label: "300"
        },
        {
          value: "400",
          label: "400"
        },
        {
          value: "500",
          label: "500"
        },
        {
          value: "600",
          label: "600"
        },
        {
          value: "700",
          label: "700"
        },
        {
          value: "800",
          label: "800"
        },
        {
          value: "900",
          label: "900"
        }
      ],
      default: "normal",
      noTranslation: true
    }
  ], Aa = (g) => {
    const { getPropertyValue: x } = R.useContext(Ze), E = R.useMemo(() => x(g), [
      g,
      x
    ]), [I, D] = R.useState(E);
    return R.useEffect(() => {
      E !== void 0 && D(E);
    }, [
      E
    ]), R.useMemo(() => I, [
      I
    ]);
  };
  var Qe = {
    exports: {}
  };
  (function(g) {
    (function(x) {
      function E(a) {
        if (Array.isArray(a)) {
          for (var e = 0, t = Array(a.length); e < a.length; e++) t[e] = a[e];
          return t;
        }
        return Array.from(a);
      }
      function I(a, e) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || typeof e != "object" && typeof e != "function" ? a : e;
      }
      function D(a, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        a.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: a,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
      }
      function z(a, e) {
        if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function L(a, e) {
        if (e || (e = typeof window > "u" ? Be : window), e[a] !== void 0) return e[a];
        for (var t = [
          "webkit",
          "moz",
          "ms",
          "o"
        ], r = 0, o = t.length, n = a.charAt(0).toUpperCase() + a.substr(1); r < o; r++) {
          var i = e[t[r] + n];
          if (i !== void 0) return i;
        }
        return null;
      }
      function ne(a, e, t, r, o, n, i) {
        if (typeof r != "function") throw new TypeError("Invalid animation rule:", r);
        var d = a - t, u = d / o, s = 0;
        u > 1 && (u = 1), u !== 1 && (s = r(u), isFinite(s) && !isNaN(s) && (u = s)), e && e(u), d < o ? i.frame = qe(function(c) {
          return ne(c, e, t, r, o, n, i);
        }) : (n && n(), i.inProgress = false);
      }
      function l() {
        Array.prototype.constructor.apply(this, arguments);
      }
      function F(a) {
        if (!(a instanceof DOMException && a.result === 2152923147)) throw a;
      }
      function J(a, e) {
        return e.replace(_a, function(t, r) {
          var o = a[r];
          return o !== void 0 ? o : t;
        });
      }
      function re(a) {
        return a.majorTicks instanceof Array || (a.majorTicks = a.majorTicks ? [
          a.majorTicks
        ] : []), a.majorTicks.length || (a.majorTicks.push(m.formatMajorTickNumber(a.minValue, a)), a.majorTicks.push(m.formatMajorTickNumber(a.maxValue, a))), [
          a.tickSide !== "right",
          a.tickSide !== "left"
        ];
      }
      function ve(a, e, t, r, o, n) {
        a.beginPath(), a.moveTo(e + n, t), a.lineTo(e + r - n, t), a.quadraticCurveTo(e + r, t, e + r, t + n), a.lineTo(e + r, t + o - n), a.quadraticCurveTo(e + r, t + o, e + r - n, t + o), a.lineTo(e + n, t + o), a.quadraticCurveTo(e, t + o, e, t + o - n), a.lineTo(e, t + n), a.quadraticCurveTo(e, t, e + n, t), a.closePath();
      }
      function le(a, e) {
        var t = e.valueDec, r = e.valueInt, o = 0, n = void 0, i = void 0, d = void 0;
        if (a = parseFloat(a), d = a < 0, a = Math.abs(a), t > 0) {
          for (i = a.toFixed(t).toString().split("."), n = r - i[0].length; o < n; ++o) i[0] = "0" + i[0];
          i = (d ? "-" : "") + i[0] + "." + i[1];
        } else {
          for (i = Math.round(a).toString(), n = r - i.length; o < n; ++o) i = "0" + i;
          i = (d ? "-" : "") + i;
        }
        return i;
      }
      function ye(a, e) {
        var t = void 0, r = false;
        return t = e.majorTicksDec === 0 ? Math.round(a).toString() : a.toFixed(e.majorTicksDec), e.majorTicksInt > 1 ? (r = ~t.indexOf("."), ~t.indexOf("-") ? "-" + [
          e.majorTicksInt + e.majorTicksDec + 2 + (r ? 1 : 0) - t.length
        ].join("0") + t.replace("-", "") : [
          e.majorTicksInt + e.majorTicksDec + 1 + (r ? 1 : 0) - t.length
        ].join("0") + t) : t;
      }
      function ie(a) {
        return a * Math.PI / 180;
      }
      function P(a, e) {
        return {
          x: -a * Math.sin(e),
          y: a * Math.cos(e)
        };
      }
      function $(a, e, t, r) {
        var o = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, i = a.createLinearGradient(o ? 0 : n, o ? n : 0, o ? 0 : r, o ? r : 0);
        return i.addColorStop(0, e), i.addColorStop(1, t), i;
      }
      function Z(a, e) {
        if (arguments.length > 2 && arguments[2] !== void 0 && arguments[2]) return a.restore(), true;
        a.save();
        var t = e.borderShadowWidth;
        return t && (a.shadowBlur = t, a.shadowColor = e.colorBorderShadow), true;
      }
      function K(a, e) {
        e.needleShadow && (a.shadowOffsetX = 2, a.shadowOffsetY = 2, a.shadowBlur = 10, a.shadowColor = e.colorNeedleShadowDown);
      }
      function Q(a, e, t) {
        return a["font" + e + "Style"] + " " + a["font" + e + "Weight"] + " " + a["font" + e + "Size"] * t + "px " + a["font" + e];
      }
      function Y(a) {
        a.shadowOffsetX = null, a.shadowOffsetY = null, a.shadowBlur = null, a.shadowColor = "", a.strokeStyle = null, a.lineWidth = 0, a.save();
      }
      function ee(a, e, t, r) {
        e.valueTextShadow && (a.shadowOffsetX = t, a.shadowOffsetY = t, a.shadowBlur = r, a.shadowColor = e.colorValueTextShadow);
      }
      function ue(a, e, t, r, o, n) {
        if (e.valueBox) {
          Y(a);
          var i = e.valueDec ? 1 + e.valueDec : 0, d = "9".repeat(Math.max.apply(null, [
            String(parseInt(t)).length + i
          ].concat(e.majorTicks.map(function(W) {
            return String(parseInt(W, 10)).length + i;
          })))), u = e.valueText || le(t, e), s = n / 200, c = n / 100, h = 0.4 * c, p = 1.2 * c;
          a.font = Q(e, "Value", s), ee(a, e, h, p);
          var v = a.measureText(e.valueText ? u : "-" + le(Number(d), e)).width;
          Y(a);
          var y = parseFloat(e.fontValueSize) * s + h + p, V = c * parseFloat(e.valueBoxStroke), k = 2 * n - 2 * V, S = v + 10 * c, C = 1.1 * y + h + p, N = c * e.valueBoxBorderRadius, B = (parseFloat(e.valueBoxWidth) || 0) / 100 * k;
          B > S && (S = B), S > k && (S = k);
          var T = r - S / 2, b = o - C / 2, f = o - 5.75 * c;
          if (a.beginPath(), N ? ve(a, T, b, S, C, N) : a.rect(T, b, S, C), V) {
            var w = a.createRadialGradient(r, f, 10 * c, r, f, 20 * c);
            w.addColorStop(0, e.colorValueBoxRect), w.addColorStop(1, e.colorValueBoxRectEnd), a.strokeStyle = w, a.lineWidth = V, a.stroke();
          }
          e.colorValueBoxShadow && (a.shadowBlur = 1.2 * c, a.shadowColor = e.colorValueBoxShadow), e.colorValueBoxBackground && (a.fillStyle = e.colorValueBoxBackground, a.fill()), a.closePath(), a.restore(), ee(a, e, h, p), a.fillStyle = e.colorValueText, a.textAlign = "center", a.textBaseline = "alphabetic", a.fillText(u, T + S / 2, o + C / 2 - y / 3), a.restore();
        }
      }
      function aa(a) {
        var e = a.value, t = a.minValue, r = a.maxValue, o = 0.01 * (r - t);
        return {
          normal: e < t ? t : e > r ? r : e,
          indented: e < t ? t - o : e > r ? r + o : e
        };
      }
      function _e(a, e, t, r, o) {
        t.beginPath(), t.arc(0, 0, G(a), 0, 2 * ge, true), t.lineWidth = e, t.strokeStyle = o ? m.linearGradient(t, r, o, a) : r, t.stroke(), t.closePath();
      }
      function he(a, e) {
        var t = U.pixelRatio;
        return a.maxRadius || (a.maxRadius = a.max - e.borderShadowWidth - e.borderOuterWidth * t - e.borderMiddleWidth * t - e.borderInnerWidth * t + (e.borderOuterWidth ? 0.5 : 0) + (e.borderMiddleWidth ? 0.5 : 0) + (e.borderInnerWidth ? 0.5 : 0)), a.maxRadius;
      }
      function Ne(a, e) {
        var t = U.pixelRatio, r = e.borderShadowWidth * t, o = a.max - r - e.borderOuterWidth * t / 2, n = o - e.borderOuterWidth * t / 2 - e.borderMiddleWidth * t / 2 + 0.5, i = n - e.borderMiddleWidth * t / 2 - e.borderInnerWidth * t / 2 + 0.5, d = he(a, e), u = void 0, s = false;
        a.save(), e.borderOuterWidth && (s = m.drawShadow(a, e, s), _e(o, e.borderOuterWidth * t, a, e.colorBorderOuter, e.colorBorderOuterEnd)), e.borderMiddleWidth && (s = m.drawShadow(a, e, s), _e(n, e.borderMiddleWidth * t, a, e.colorBorderMiddle, e.colorBorderMiddleEnd)), e.borderInnerWidth && (s = m.drawShadow(a, e, s), _e(i, e.borderInnerWidth * t, a, e.colorBorderInner, e.colorBorderInnerEnd)), m.drawShadow(a, e, s), a.beginPath(), a.arc(0, 0, G(d), 0, 2 * ge, true), e.colorPlateEnd ? (u = a.createRadialGradient(0, 0, d / 2, 0, 0, d), u.addColorStop(0, e.colorPlate), u.addColorStop(1, e.colorPlateEnd)) : u = e.colorPlate, a.fillStyle = u, a.fill(), a.closePath(), a.restore();
      }
      function Ve(a, e) {
        var t = a.max * (parseFloat(e.highlightsWidth) || 0) / 100;
        if (t) {
          var r = G(me(a, e) - t / 2), o = 0, n = e.highlights.length, i = (e.maxValue - e.minValue) / e.ticksAngle;
          for (a.save(); o < n; o++) {
            var d = e.highlights[o];
            a.beginPath(), a.rotate(pe), a.arc(0, 0, r, m.radians(e.startAngle + (d.from - e.minValue) / i), m.radians(e.startAngle + (d.to - e.minValue) / i), false), a.strokeStyle = d.color, a.lineWidth = t, a.lineCap = e.highlightsLineCap, a.stroke(), a.closePath(), a.restore(), a.save();
          }
        }
      }
      function We(a, e) {
        var t = me(a, e), r = void 0, o = void 0, n = void 0, i = 0, d = 0, u = Math.abs(e.minorTicks) || 0, s = e.ticksAngle / (e.maxValue - e.minValue);
        for (a.lineWidth = U.pixelRatio, a.strokeStyle = e.colorMinorTicks || e.colorStrokeTicks, a.save(), e.exactTicks ? (o = e.maxValue - e.minValue, r = u ? o / u : 0, d = (H.mod(e.majorTicks[0], u) || 0) * s) : r = u * (e.majorTicks.length - 1); i < r; ++i) (n = e.startAngle + d + i * (e.ticksAngle / r)) <= e.ticksAngle + e.startAngle && (a.rotate(m.radians(n)), a.beginPath(), a.moveTo(0, t), a.lineTo(0, t - 0.075 * a.max), xe(a));
      }
      function me(a, e) {
        var t = a.max / 100;
        return he(a, e) - 5 * t - (e.barWidth ? 2 * (parseFloat(e.barStrokeWidth) || 0) + ((parseFloat(e.barWidth) || 0) + 5) * t : 0);
      }
      function Me(a, e) {
        m.prepareTicks(e);
        var t = G(me(a, e)), r = void 0, o = void 0, n = e.majorTicks.length, i = U.pixelRatio;
        for (a.lineWidth = 2 * i, a.save(), o = e.colorMajorTicks instanceof Array ? e.colorMajorTicks : new Array(n).fill(e.colorStrokeTicks || e.colorMajorTicks), r = 0; r < n; ++r) a.strokeStyle = o[r], a.rotate(m.radians(Oe(e, e.exactTicks ? e.majorTicks[r] : r, n))), a.beginPath(), a.moveTo(0, t), a.lineTo(0, t - 0.15 * a.max), xe(a);
        e.strokeTicks && (a.strokeStyle = e.colorStrokeTicks || o[0], a.rotate(pe), a.beginPath(), a.arc(0, 0, t, m.radians(e.startAngle), m.radians(e.startAngle + e.ticksAngle), false), xe(a));
      }
      function Oe(a, e, t) {
        if (a.exactTicks) {
          var r = a.ticksAngle / (a.maxValue - a.minValue);
          return a.startAngle + r * (e - a.minValue);
        }
        return a.startAngle + e * (a.ticksAngle / (t - 1));
      }
      function xe(a) {
        a.stroke(), a.restore(), a.closePath(), a.save();
      }
      function je(a, e) {
        var t = me(a, e) - 0.15 * a.max, r = {}, o = 0, n = e.majorTicks.length, i = e.animationTarget !== "needle", d = e.colorNumbers instanceof Array ? e.colorNumbers : new Array(n).fill(e.colorNumbers), u = i ? -(e.value - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle : 0;
        for (i && (a.save(), a.rotate(-m.radians(u))), a.font = m.font(e, "Numbers", a.max / 200), a.lineWidth = 0, a.textAlign = "center", a.textBaseline = "middle"; o < n; ++o) {
          var s = u + Oe(e, e.exactTicks ? e.majorTicks[o] : o, n), c = a.measureText(e.majorTicks[o]).width, h = e.fontNumbersSize, p = Math.sqrt(c * c + h * h) / 2, v = m.radialPoint(t - p - e.numbersMargin / 100 * a.max, m.radians(s));
          s === 360 && (s = 0), r[s] || (r[s] = true, a.fillStyle = d[o], a.fillText(e.majorTicks[o], v.x, v.y));
        }
        i && a.restore();
      }
      function Ae(a, e) {
        e.title && (a.save(), a.font = m.font(e, "Title", a.max / 200), a.fillStyle = e.colorTitle, a.textAlign = "center", a.fillText(e.title, 0, -a.max / 4.25, 0.8 * a.max), a.restore());
      }
      function Pe(a, e) {
        e.units && (a.save(), a.font = m.font(e, "Units", a.max / 200), a.fillStyle = e.colorUnits, a.textAlign = "center", a.fillText(m.formatContext(e, e.units), 0, a.max / 3.25, 0.8 * a.max), a.restore());
      }
      function Ee(a, e) {
        if (e.needle) {
          var t = e.ticksAngle < 360 ? m.normalizedValue(e).indented : e.value, r = p ? e.startAngle : e.startAngle + (t - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle;
          e.barStartPosition === "right" && (r = e.startAngle + e.ticksAngle - (t - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle);
          var o = he(a, e), n = G(o / 100 * e.needleCircleSize), i = G(o / 100 * e.needleCircleSize * 0.75), d = G(o / 100 * e.needleEnd), u = G(e.needleStart ? o / 100 * e.needleStart : 0), s = o / 100 * e.needleWidth, c = o / 100 * e.needleWidth / 2, h = U.pixelRatio, p = e.animationTarget !== "needle";
          a.save(), m.drawNeedleShadow(a, e), a.rotate(m.radians(r)), a.fillStyle = m.linearGradient(a, e.colorNeedle, e.colorNeedleEnd, d - u), e.needleType === "arrow" ? (a.beginPath(), a.moveTo(-c, -u), a.lineTo(-s, 0), a.lineTo(-1 * h, d), a.lineTo(h, d), a.lineTo(s, 0), a.lineTo(c, -u), a.closePath(), a.fill(), a.beginPath(), a.lineTo(-0.5 * h, d), a.lineTo(-1 * h, d), a.lineTo(-s, 0), a.lineTo(-c, -u), a.lineTo(c / 2 * h - 2 * h, -u), a.closePath(), a.fillStyle = e.colorNeedleShadowUp, a.fill()) : (a.beginPath(), a.moveTo(-c, d), a.lineTo(-c, u), a.lineTo(c, u), a.lineTo(c, d), a.closePath(), a.fill()), e.needleCircleSize && (a.restore(), m.drawNeedleShadow(a, e), e.needleCircleOuter && (a.beginPath(), a.arc(0, 0, n, 0, 2 * ge, true), a.fillStyle = m.linearGradient(a, e.colorNeedleCircleOuter, e.colorNeedleCircleOuterEnd, n), a.fill(), a.closePath()), e.needleCircleInner && (a.beginPath(), a.arc(0, 0, i, 0, 2 * ge, true), a.fillStyle = m.linearGradient(a, e.colorNeedleCircleInner, e.colorNeedleCircleInnerEnd, i), a.fill(), a.closePath()), a.restore());
        }
      }
      function Ie(a, e, t) {
        m.drawValueBox(a, e, t, 0, a.max - 0.33 * a.max, a.max);
      }
      function ta(a) {
        var e = a.startAngle, t = a.startAngle + a.ticksAngle, r = e, o = e + (m.normalizedValue(a).normal - a.minValue) / (a.maxValue - a.minValue) * a.ticksAngle;
        if (a.barStartPosition === "middle") {
          var n = 0.5 * (a.minValue + a.maxValue);
          a.value < n ? (r = 180 - (n - m.normalizedValue(a).normal) / (a.maxValue - a.minValue) * a.ticksAngle, o = 180) : (r = 180, o = 180 + (m.normalizedValue(a).normal - n) / (a.maxValue - a.minValue) * a.ticksAngle);
        } else a.barStartPosition === "right" && (r = t - o + e, o = t);
        return {
          startAngle: r,
          endAngle: o
        };
      }
      function Re(a, e) {
        var t = a.max / 100, r = he(a, e) - 5 * t, o = parseFloat(e.barStrokeWidth + "") || 0, n = (parseFloat(e.barWidth + "") || 0) * t, i = r - 2 * o - n, d = (r - i) / 2, u = i + d, s = o / u, c = e.startAngle, h = e.startAngle + e.ticksAngle;
        if (a.save(), a.rotate(pe), o && (a.beginPath(), a.arc(0, 0, u, m.radians(c) - s, m.radians(h) + s, false), a.strokeStyle = e.colorBarStroke, a.lineWidth = 2 * d, a.stroke(), a.closePath()), n && (a.beginPath(), a.arc(0, 0, u, m.radians(c), m.radians(h), false), a.strokeStyle = e.colorBar, a.lineWidth = n, a.stroke(), a.closePath(), e.barShadow && (a.beginPath(), a.arc(0, 0, r, m.radians(c), m.radians(h), false), a.clip(), a.beginPath(), a.strokeStyle = e.colorBar, a.lineWidth = 1, a.shadowBlur = e.barShadow, a.shadowColor = e.colorBarShadow, a.shadowOffsetX = 0, a.shadowOffsetY = 0, a.arc(0, 0, r, m.radians(e.startAngle), m.radians(e.startAngle + e.ticksAngle), false), a.stroke(), a.closePath(), a.restore(), a.rotate(pe)), e.barProgress)) {
          var p = ta(e), v = p.startAngle, y = p.endAngle;
          a.beginPath(), a.arc(0, 0, u, m.radians(v), m.radians(y), false), a.strokeStyle = e.colorBarProgress, a.lineWidth = n, a.stroke(), a.closePath();
        }
        a.restore();
      }
      function De(a) {
        return a.options.animatedValue ? a.options.value : a.value;
      }
      function ra(a, e, t, r, o, n, i, d) {
        a.beginPath(), a.fillStyle = d ? m.linearGradient(a, i, d, o > n ? o : n, n > o, o > n ? t : r) : i, e > 0 ? m.roundRect(a, t, r, o, n, e) : a.rect(t, r, o, n), a.fill(), a.closePath();
      }
      function ke(a, e, t, r, o, n, i, d, u) {
        a.beginPath(), a.lineWidth = e, a.strokeStyle = u ? m.linearGradient(a, d, u, i, true, o) : d, t > 0 ? m.roundRect(a, r, o, n, i, t) : a.rect(r, o, n, i), a.stroke(), a.closePath();
      }
      function oa(a, e, t, r, o, n) {
        var i = U.pixelRatio;
        a.save();
        var d = e.borderRadius * i, u = o - e.borderShadowWidth - e.borderOuterWidth * i, s = u - e.borderOuterWidth * i - e.borderMiddleWidth * i, c = s - e.borderMiddleWidth * i - e.borderInnerWidth * i, h = c - e.borderInnerWidth * i, p = n - e.borderShadowWidth - e.borderOuterWidth * i, v = p - e.borderOuterWidth * i - e.borderMiddleWidth * i, y = v - e.borderMiddleWidth * i - e.borderInnerWidth * i, V = y - e.borderInnerWidth * i, k = t - (s - u) / 2, S = k - (c - s) / 2, C = S - (h - c) / 2, N = r - (v - p) / 2, B = N - (y - v) / 2, T = B - (V - y) / 2, b = 0, f = false;
        return e.borderOuterWidth && (f = m.drawShadow(a, e, f), ke(a, e.borderOuterWidth * i, d, t + e.borderOuterWidth * i / 2 - b, r + e.borderOuterWidth * i / 2 - b, u, p, e.colorBorderOuter, e.colorBorderOuterEnd), b += 0.5 * i), e.borderMiddleWidth && (f = m.drawShadow(a, e, f), ke(a, e.borderMiddleWidth * i, d -= 1 + 2 * b, k + e.borderMiddleWidth * i / 2 - b, N + e.borderMiddleWidth * i / 2 - b, s + 2 * b, v + 2 * b, e.colorBorderMiddle, e.colorBorderMiddleEnd), b += 0.5 * i), e.borderInnerWidth && (f = m.drawShadow(a, e, f), ke(a, e.borderInnerWidth * i, d -= 1 + 2 * b, S + e.borderInnerWidth * i / 2 - b, B + e.borderInnerWidth * i / 2 - b, c + 2 * b, y + 2 * b, e.colorBorderInner, e.colorBorderInnerEnd), b += 0.5 * i), m.drawShadow(a, e, f), ra(a, d, C, T, h + 2 * b, V + 2 * b, e.colorPlate, e.colorPlateEnd), a.restore(), [
          C,
          T,
          h,
          V
        ];
      }
      function na(a, e, t, r, o, n) {
        var i = U.pixelRatio, d = n >= o, u = d ? 0.85 * o : n, s = d ? n : o;
        t = d ? _(t + (o - u) / 2) : t;
        var c = !!e.title, h = !!e.units, p = !!e.valueBox, v = void 0, y = void 0, V = void 0;
        d ? (y = _(0.05 * s), v = _(0.075 * s), V = _(0.11 * s), c && (s -= v, r += v), h && (s -= y), p && (s -= V)) : (y = v = _(0.15 * u), c && (u -= v, r += v), h && (u -= y));
        var k = 2 * e.barStrokeWidth, S = e.barBeginCircle ? _(u * e.barBeginCircle / 200 - k / 2) : 0, C = _(u * e.barWidth / 100 - k), N = _(s * e.barLength / 100 - k), B = _((s - N) / 2), T = _(t + (d ? u / 2 : B + S)), b = _(r + (d ? s - B - S + k / 2 : u / 2)), f = !d || e.hasLeft && e.hasRight ? 0 : (e.hasRight ? -1 : 1) * e.ticksWidth / 100 * u, w = d || e.hasLeft && e.hasRight ? 0 : (e.hasRight ? -1 : 1) * e.ticksWidth / 100 * u;
        return a.barDimensions = {
          isVertical: d,
          width: u,
          length: s,
          barWidth: C,
          barLength: N,
          strokeWidth: k,
          barMargin: B,
          radius: S,
          pixelRatio: i,
          barOffset: null,
          titleMargin: c ? v : 0,
          unitsMargin: h ? y : 0,
          get ticksLength() {
            return this.barLength - this.barOffset - this.strokeWidth;
          },
          X: t + f,
          Y: r + w,
          x0: T + f,
          y0: b + w,
          baseX: t,
          baseY: r,
          ticksPadding: e.ticksPadding / 100
        }, a.barDimensions;
      }
      function Fe(a, e, t, r, o, n, i) {
        var d = na(a, e, r, o, n, i), u = d.isVertical, s = d.width, c = d.barWidth, h = d.barLength, p = d.strokeWidth, v = d.barMargin, y = d.radius, V = d.x0, k = d.y0, S = d.X, C = d.Y, N = h;
        if (a.save(), a.beginPath(), e.barBeginCircle) {
          var B = m.radians(u ? 270 : 0), T = Math.asin(c / 2 / y), b = Math.cos(T), f = Math.sin(T), w = V + (u ? y * f : y * b - p / 2), W = u ? k - y * b : k + y * f, O = G(u ? W - k : w - V);
          a.barDimensions.barOffset = _(O + y);
          var j = u ? _(V - y * f) : w, q = u ? W : _(k - y * f);
          t === "progress" && (h = a.barDimensions.barOffset + (h - a.barDimensions.barOffset) * (m.normalizedValue(e).normal - e.minValue) / (e.maxValue - e.minValue));
          var X = _(w + h - a.barDimensions.barOffset + p / 2), ce = _(W - h + a.barDimensions.barOffset - p / 2);
          a.arc(V, k, y, B + T, B - T), u ? (a.moveTo(w, q), a.lineTo(w, ce), a.lineTo(j, ce), a.lineTo(j, q)) : (a.moveTo(w, q), a.lineTo(X, q), a.lineTo(X, W), a.lineTo(w, W));
        } else {
          var te = _(u ? S + (s - c) / 2 : S + v), Ye = _(u ? C + h + v : C + (s - c) / 2);
          t === "progress" && (h *= (e.value - e.minValue) / (e.maxValue - e.minValue)), u ? a.rect(te, Ye, c, -h) : a.rect(te, Ye, h, c);
        }
        t !== "progress" && e.barStrokeWidth && (a.lineWidth = p, a.strokeStyle = e.colorBarStroke, a.stroke()), t !== "progress" && e.colorBar ? (a.fillStyle = e.colorBarEnd ? m.linearGradient(a, e.colorBar, e.colorBarEnd, h, u, u ? C : S) : e.colorBar, a.fill()) : t === "progress" && e.colorBarProgress && (a.fillStyle = e.colorBarProgressEnd ? m.linearGradient(a, e.colorBarProgress, e.colorBarProgressEnd, N, u, u ? C : S) : e.colorBarProgress, a.fill()), a.closePath(), e.barBeginCircle && (a.barDimensions.radius += p), a.barDimensions.barWidth += p, a.barDimensions.barLength += p;
      }
      function la(a, e, t, r, o, n) {
        Fe(a, e, "", t, r, o, n);
      }
      function ze(a, e) {
        return e.needleSide !== a || e.tickSide !== a || e.numberSide !== a;
      }
      function ia(a, e, t, r, o, n) {
        e.barProgress && Fe(a, e, "progress", t, r, o, n);
      }
      function ua(a, e) {
        var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, i = t.barWidth, d = t.barOffset, u = t.barMargin, s = t.X, c = t.Y, h = t.ticksLength, p = t.ticksPadding, v = o * (parseFloat(e.highlightsWidth) || 0) / 100;
        if (e.highlights && v) {
          var y = e.tickSide !== "right", V = e.tickSide !== "left", k = 0, S = e.highlights.length, C = (o - i) / 2, N = e.maxValue - e.minValue, B = _(r ? s + C : s + u + d), T = v, b = r ? c + n - u - d : c + C, f = _((e.ticksWidth / 100 + p) * o) + (v - e.ticksWidth / 100 * o), w = _(i + p * o);
          for (a.save(); k < S; k++) {
            var W = e.highlights[k], O = h * G(e.minValue - W.from) / N, j = h * G((W.to - W.from) / N);
            a.beginPath(), a.fillStyle = W.color, r ? (y && a.rect(B - f, b - O, T, -j), V && a.rect(B + w, b - O, T, -j)) : (y && a.rect(B + O, b - f, j, T), V && a.rect(B + O, b + w, j, T)), a.fill(), a.closePath();
          }
        }
      }
      function be(a, e, t, r, o) {
        a.beginPath(), a.moveTo(e, t), a.lineTo(r, o), a.stroke(), a.closePath(), a.save();
      }
      function Le(a, e, t, r, o, n, i, d, u) {
        var s = a.barDimensions, c = s.isVertical, h = s.length, p = s.barWidth, v = s.barOffset, y = s.barMargin, V = s.pixelRatio, k = s.width, S = s.X, C = s.Y, N = s.ticksLength, B = s.ticksPadding, T = (k - p) / 2, b = void 0, f = void 0, w = 0, W = t.length, O = void 0, j = u * k, q = T - B * k, X = T + p + j + B * k, ce = e instanceof Array ? e : new Array(t.length).fill(e);
        a.lineWidth = d * V, a.save();
        for (var te = N / (o - r); w < W; w++) O = t[w], a.strokeStyle = ce[w], c ? (f = C + h - y - v + (r - O) * te, n && (b = S + q, be(a, b, f, _(b - j), f)), i && (b = S + X, be(a, b, f, _(b - j), f))) : (b = S + y + v - (r - O) * te, n && (f = C + q, be(a, b, f, b, _(f - j))), i && (f = C + X, be(a, b, _(f), b, f - j)));
      }
      function da(a, e) {
        var t = m.prepareTicks(e), r = Ge(t, 2), o = r[0], n = r[1], i = 2, d = (e.maxValue - e.minValue) / (e.majorTicks.length - 1), u = e.colorMajorTicks instanceof Array ? e.colorMajorTicks : new Array(e.majorTicks.length).fill(e.colorStrokeTicks || e.colorMajorTicks);
        if (Le(a, u, e.exactTicks ? e.majorTicks : e.majorTicks.map(function(j, q) {
          return e.minValue + d * q;
        }), e.minValue, e.maxValue, o, n, i, e.ticksWidth / 100), e.strokeTicks) {
          var s = a.barDimensions, c = s.isVertical, h = s.length, p = s.width, v = s.barWidth, y = s.barMargin, V = s.barOffset, k = s.X, S = s.Y, C = s.ticksLength, N = s.pixelRatio, B = s.ticksPadding, T = (p - v) / 2 + v + B * p, b = (p - v) / 2 - B * p, f = void 0, w = void 0, W = void 0, O = void 0;
          a.strokeStyle = e.colorStrokeTicks || u[0], i *= N, c ? (w = S + h - y - V + i / 2, O = w - C - i, o && (W = f = _(k + b), fe(a, f, w, W, O)), n && (W = f = _(k + T), fe(a, f, w, W, O))) : (f = k + y + V - i / 2, W = f + C + i, o && (O = w = _(S + b), fe(a, f, w, W, O)), n && (O = w = _(S + T), fe(a, f, w, W, O)));
        }
      }
      function fe(a, e, t, r, o) {
        a.beginPath(), a.moveTo(e, t), a.lineTo(r, o), a.stroke(), a.closePath();
      }
      function sa(a, e) {
        var t = m.prepareTicks(e), r = Ge(t, 2), o = r[0], n = r[1], i = [], d = e.minValue, u = Math.abs(e.minorTicks) || 0, s = u ? (e.maxValue - e.minValue) / (u * (e.majorTicks.length - 1)) : 0;
        if (u) if (e.exactTicks) for (var c = H.mod(e.majorTicks[0], u) || 0; d < e.maxValue; d += u) c + d < e.maxValue && i.push(c + d);
        else for (; d < e.maxValue; d += s) i.push(d);
        Le(a, e.colorMinorTicks || e.colorStrokeTicks, i, e.minValue, e.maxValue, o, n, 1, e.ticksWidthMinor / 100);
      }
      function ga(a, e) {
        var t = a.barDimensions, r = t.isVertical, o = t.length, n = t.width, i = t.barWidth, d = t.barMargin, u = t.barOffset, s = t.X, c = t.Y, h = t.ticksLength, p = t.ticksPadding, v = e.maxValue - e.minValue, y = v / (e.majorTicks.length - 1), V = e.exactTicks ? e.majorTicks : e.majorTicks.map(function(ce, te) {
          return e.minValue + y * te;
        }), k = V.length, S = e.numberSide !== "right", C = e.numberSide !== "left", N = e.fontNumbersSize * n / 200, B = 0, T = (e.ticksWidth / 100 + 2 * p) * n, b = (n - i) / 2 - T, f = (n - i) / 2 + i + T, w = void 0, W = void 0, O = void 0, j = void 0, q = e.colorNumbers instanceof Array ? e.colorNumbers : new Array(k).fill(e.colorNumbers), X = e.numbersMargin / 100 * n;
        for (a.font = m.font(e, "Numbers", n / 200), a.lineWidth = 0, a.textAlign = "center"; B < k; B++) a.fillStyle = q[B], j = e.majorTicks[B], O = e.exactTicks ? h * ((V[B] - e.minValue) / v) : B * h / (k - 1), r ? (W = c + o - d - u - O + N / 3, S && (a.textAlign = "right", a.fillText(j, s + b - X, W)), C && (a.textAlign = "left", a.fillText(j, s + f + X, W))) : (a.measureText(j).width, w = s + d + u + O, S && a.fillText(j, w, c + b - X), C && a.fillText(j, w, c + f + N + X));
      }
      function ca(a, e) {
        if (e.title) {
          var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, i = t.baseX, d = t.baseY, u = t.titleMargin, s = e.fontTitleSize * o / 200, c = _(i + (r ? o : n) / 2), h = _(d + u / 2 - (r ? s : s / 2) - 0.025 * (r ? n : o));
          a.save(), a.textAlign = "center", a.fillStyle = e.colorTitle, a.font = m.font(e, "Title", o / 200), a.lineWidth = 0, a.fillText(e.title, c, h, r ? o : n);
        }
      }
      function ha(a, e) {
        if (e.units) {
          var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, i = t.baseX, d = t.baseY, u = t.unitsMargin, s = e.fontUnitsSize * o / 200, c = _(i + (r ? o : n) / 2), h = _(d + (r ? n : o) + u / 2 - s / 2);
          a.save(), a.textAlign = "center", a.fillStyle = e.colorUnits, a.font = m.font(e, "Units", o / 200), a.lineWidth = 0, a.fillText(m.formatContext(e, e.units), c, h, r ? o : n);
        }
      }
      function ma(a, e) {
        if (e.needle) {
          var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, i = t.barWidth, d = t.barOffset, u = t.barMargin, s = t.ticksLength, c = t.X, h = t.Y, p = t.ticksPadding, v = e.needleSide !== "right", y = e.needleSide !== "left", V = s * (m.normalizedValue(e).indented - e.minValue) / (e.maxValue - e.minValue), k = (e.ticksWidth / 100 + p) * o, S = i / 2 + k, C = S * (e.needleEnd / 100), N = void 0, B = void 0, T = void 0, b = void 0, f = e.needleType.toLowerCase() === "arrow" ? fa : ba, w = (o - i) / 2, W = S * (e.needleStart / 100), O = w - k - W, j = w + i + k + W;
          a.save(), m.drawNeedleShadow(a, e), r ? (T = _(h + n - u - d - V), v && (N = _(c + O), B = N + C, f(a, e, N, T, B, T, C)), y && (N = _(c + j), B = N - C, f(a, e, N, T, B, T, C, true))) : (N = _(c + u + d + V), v && (T = _(h + O), b = T + C, f(a, e, N, T, N, b, C)), y && (T = _(h + j), b = T - C, f(a, e, N, T, N, b, C, true))), a.restore();
        }
      }
      function Ue(a, e, t, r) {
        return e.colorNeedleEnd ? m.linearGradient(a, r ? e.colorNeedleEnd : e.colorNeedle, r ? e.colorNeedle : e.colorNeedleEnd, t, !a.barDimensions.isVertical) : e.colorNeedle;
      }
      function ba(a, e, t, r, o, n, i, d) {
        a.lineWidth = e.needleWidth, a.strokeStyle = Ue(a, e, i, d), a.beginPath(), a.moveTo(t, r), a.lineTo(o, n), a.stroke(), a.closePath();
      }
      function fa(a, e, t, r, o, n, i, d) {
        var u = _(0.4 * i), s = i - u, c = t === o, h = e.needleWidth / 2;
        a.fillStyle = Ue(a, e, i, d), a.beginPath(), c ? (r > n && (s *= -1), a.moveTo(t - h, r), a.lineTo(t + h, r), a.lineTo(t + h, r + s), a.lineTo(t, n), a.lineTo(t - h, r + s), a.lineTo(t - h, r)) : (t > o && (s *= -1), a.moveTo(t, r - h), a.lineTo(t, r + h), a.lineTo(t + s, r + h), a.lineTo(o, r), a.lineTo(t + s, r - h), a.lineTo(t, r - h)), a.fill(), a.closePath();
      }
      function pa(a, e, t, r, o, n, i) {
        var d = (parseFloat(e.fontValueSize) || 0) * n / 200, u = (0.11 * i - d) / 2;
        a.barDimensions.isVertical && m.drawValueBox(a, e, t, r + n / 2, o + i - d - u, n);
      }
      var Ge = /* @__PURE__ */ (function() {
        function a(e, t) {
          var r = [], o = true, n = false, i = void 0;
          try {
            for (var d, u = e[Symbol.iterator](); !(o = (d = u.next()).done) && (r.push(d.value), !t || r.length !== t); o = true) ;
          } catch (s) {
            n = true, i = s;
          } finally {
            try {
              !o && u.return && u.return();
            } finally {
              if (n) throw i;
            }
          }
          return r;
        }
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return a(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      })(), Te = function a(e, t, r) {
        e === null && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (o === void 0) {
          var n = Object.getPrototypeOf(e);
          return n === null ? void 0 : a(n, t, r);
        }
        if ("value" in o) return o.value;
        var i = o.get;
        if (i !== void 0) return i.call(r);
      }, va = function a(e, t, r, o) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (n === void 0) {
          var i = Object.getPrototypeOf(e);
          i !== null && a(i, t, r, o);
        } else if ("value" in n && n.writable) n.value = r;
        else {
          var d = n.set;
          d !== void 0 && d.call(o, r);
        }
        return r;
      }, ae = /* @__PURE__ */ (function() {
        function a(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, o.key, o);
          }
        }
        return function(e, t, r) {
          return t && a(e.prototype, t), r && a(e, r), e;
        };
      })();
      Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(a, e) {
          if (a == null) throw new TypeError("Cannot convert first argument to object");
          for (var t = Object(a), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (o != null) for (var n = Object.keys(Object(o)), i = 0, d = n.length; i < d; i++) {
              var u = n[i], s = Object.getOwnPropertyDescriptor(o, u);
              s !== void 0 && s.enumerable && (t[u] = o[u]);
            }
          }
          return t;
        }
      }), Array.prototype.indexOf || Object.defineProperty(Array.prototype, "indexOf", {
        value: function(a, e) {
          var t;
          if (this === null) throw new TypeError('"this" is null or not defined');
          var r = Object(this), o = r.length >>> 0;
          if (o === 0) return -1;
          var n = +e || 0;
          if (Math.abs(n) === 1 / 0 && (n = 0), n >= o) return -1;
          for (t = Math.max(n >= 0 ? n : o - Math.abs(n), 0); t < o; ) {
            if (t in r && r[t] === a) return t;
            t++;
          }
          return -1;
        }
      }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function(a) {
          if (this === null) throw new TypeError("this is null or not defined");
          for (var e = Object(this), t = e.length >>> 0, r = arguments[1], o = r >> 0, n = o < 0 ? Math.max(t + o, 0) : Math.min(o, t), i = arguments[2], d = i === void 0 ? t : i >> 0, u = d < 0 ? Math.max(t + d, 0) : Math.min(d, t); n < u; ) e[n] = a, n++;
          return e;
        }
      }), typeof window > "u" && (window = typeof Be > "u" ? {} : Be);
      var ya = (function() {
        function a() {
          z(this, a), this._events = {}, this.addListener = this.on, this.removeListener = this.off;
        }
        return ae(a, [
          {
            key: "emit",
            value: function(e) {
              if (this._events[e]) {
                for (var t = 0, r = this._events[e].length, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) n[i - 1] = arguments[i];
                for (; t < r; t++) this._events[e][t] && this._events[e][t].apply(this, n);
              }
            }
          },
          {
            key: "once",
            value: function(e) {
              for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
              for (var n = 0, i = r.length, d = this; n < i; n++) (function() {
                var u = r[n], s = function c() {
                  d.off(e, c), u.apply(d, arguments);
                };
                r[n] = s;
              })();
              this.on.apply(this, [
                e
              ].concat(r));
            }
          },
          {
            key: "on",
            value: function(e) {
              this._events[e] || (this._events[e] = []);
              for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; t++) this._events[e].push(arguments.length <= t + 1 ? void 0 : arguments[t + 1]);
            }
          },
          {
            key: "off",
            value: function(e) {
              if (this._events[e]) for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; t++) for (var o = arguments.length <= t + 1 ? void 0 : arguments[t + 1], n = void 0; ~(n = this._events[e].indexOf(o)); ) this._events[e].splice(n, 1);
            }
          },
          {
            key: "removeAllListeners",
            value: function(e) {
              delete this._events[e];
            }
          },
          {
            key: "listeners",
            get: function() {
              return this._events;
            }
          }
        ]), a;
      })(), qe = L("requestAnimationFrame") || function(a) {
        return setTimeout(function() {
          return a((/* @__PURE__ */ new Date()).getTime());
        }, 1e3 / 60);
      }, de = {
        linear: function(a) {
          return a;
        },
        quad: function(a) {
          return Math.pow(a, 2);
        },
        dequad: function(a) {
          return 1 - de.quad(1 - a);
        },
        quint: function(a) {
          return Math.pow(a, 5);
        },
        dequint: function(a) {
          return 1 - Math.pow(1 - a, 5);
        },
        cycle: function(a) {
          return 1 - Math.sin(Math.acos(a));
        },
        decycle: function(a) {
          return Math.sin(Math.acos(1 - a));
        },
        bounce: function(a) {
          return 1 - de.debounce(1 - a);
        },
        debounce: function(a) {
          for (var e = 0, t = 1; ; e += t, t /= 2) if (a >= (7 - 4 * e) / 11) return -Math.pow((11 - 6 * e - 11 * a) / 4, 2) + Math.pow(t, 2);
        },
        elastic: function(a) {
          return 1 - de.delastic(1 - a);
        },
        delastic: function(a) {
          return Math.pow(2, 10 * (a - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * a);
        }
      }, we = (function() {
        function a() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "linear", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
          }, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
          };
          if (z(this, a), this.duration = t, this.rule = e, this.draw = r, this.end = o, typeof this.draw != "function") throw new TypeError("Invalid animation draw callback:", r);
          if (typeof this.end != "function") throw new TypeError("Invalid animation end callback:", o);
        }
        return ae(a, [
          {
            key: "animate",
            value: function(e, t) {
              var r = this;
              this.frame && this.cancel();
              var o = window.performance && window.performance.now ? window.performance.now() : L("animationStartTime") || Date.now();
              e = e || this.draw, t = t || this.end, this.draw = e, this.end = t, this.frame = qe(function(n) {
                return ne(n, e, o, de[r.rule] || r.rule, r.duration, t, r);
              });
            }
          },
          {
            key: "cancel",
            value: function() {
              this.frame && ((L("cancelAnimationFrame") || function(e) {
              })(this.frame), this.frame = null);
            }
          },
          {
            key: "destroy",
            value: function() {
              this.cancel(), this.draw = null, this.end = null;
            }
          }
        ]), a;
      })();
      we.rules = de;
      var oe = (function() {
        function a(e, t, r) {
          z(this, a), this.options = e, this.element = t.toLowerCase(), this.type = a.toDashed(r), this.Type = x[r], this.mutationsObserved = false, this.isObservable = !!window.MutationObserver, window.GAUGES_NO_AUTO_INIT || a.domReady(this.traverse.bind(this));
        }
        return ae(a, [
          {
            key: "isValidNode",
            value: function(e) {
              return !(!e.tagName || e.tagName.toLowerCase() !== this.element || e.getAttribute("data-type") !== this.type);
            }
          },
          {
            key: "traverse",
            value: function() {
              for (var e = document.getElementsByTagName(this.element), t = 0, r = e.length; t < r; t++) this.process(e[t]);
              this.isObservable && !this.mutationsObserved && (new MutationObserver(this.observe.bind(this)).observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                attributeOldValue: true,
                characterDataOldValue: true
              }), this.mutationsObserved = true);
            }
          },
          {
            key: "observe",
            value: function(e) {
              for (var t = 0, r = e.length; t < r; t++) {
                var o = e[t];
                if (o.type === "attributes" && o.attributeName === "data-type" && this.isValidNode(o.target) && o.oldValue !== this.type) setTimeout(this.process.bind(this, o.target));
                else if (o.addedNodes && o.addedNodes.length) for (var n = 0, i = o.addedNodes.length; n < i; n++) setTimeout(this.process.bind(this, o.addedNodes[n]));
              }
            }
          },
          {
            key: "process",
            value: function(e) {
              var t = this;
              if (!this.isValidNode(e)) return null;
              var r = void 0, o = JSON.parse(JSON.stringify(this.options)), n = null;
              for (r in o) if (o.hasOwnProperty(r)) {
                var i = a.toAttributeName(r), d = a.parse(e.getAttribute(i));
                d != null && (o[r] = d);
              }
              return o.renderTo = e, n = new this.Type(o), n.draw && n.draw(), this.isObservable && (n.observer = new MutationObserver(function(u) {
                u.forEach(function(s) {
                  if (s.type === "attributes") {
                    var c = s.attributeName.toLowerCase(), h = e.getAttribute(c).toLowerCase();
                    if (c === "data-type" && h && h !== t.type) n.observer.disconnect(), delete n.observer, n.destroy && n.destroy();
                    else if (c.substr(0, 5) === "data-") {
                      var p = c.substr(5).split("-").map(function(y, V) {
                        return V ? y.charAt(0).toUpperCase() + y.substr(1) : y;
                      }).join(""), v = {};
                      v[p] = a.parse(e.getAttribute(s.attributeName)), p === "value" ? n && (n.value = v[p]) : n.update && n.update(v);
                    }
                  }
                });
              }), n.observer.observe(e, {
                attributes: true
              })), n;
            }
          }
        ], [
          {
            key: "parse",
            value: function(e) {
              if (e === "true") return true;
              if (e === "false") return false;
              if (e !== "undefined") {
                if (e === "null") return null;
                if (/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e)) return e.split(",");
                try {
                  return JSON.parse(e);
                } catch {
                }
                return e;
              }
            }
          },
          {
            key: "toDashed",
            value: function(e) {
              for (var t = e.split(/(?=[A-Z])/), r = 1, o = t.length, n = t[0].toLowerCase(); r < o; r++) n += "-" + t[r].toLowerCase();
              return n;
            }
          },
          {
            key: "toCamelCase",
            value: function(e) {
              for (var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r = e.split(/-/), o = 0, n = r.length, i = ""; o < n; o++) i += o || t ? r[o][0].toUpperCase() + r[o].substr(1).toLowerCase() : r[o].toLowerCase();
              return i;
            }
          },
          {
            key: "toAttributeName",
            value: function(e) {
              return "data-" + a.toDashed(e);
            }
          },
          {
            key: "domReady",
            value: function(e) {
              if (/comp|inter|loaded/.test((window.document || {}).readyState + "")) return e();
              window.addEventListener ? window.addEventListener("DOMContentLoaded", e, false) : window.attachEvent && window.attachEvent("onload", e);
            }
          }
        ]), a;
      })(), U = (function() {
        function a(e, t, r) {
          z(this, a), a.collection.push(this), this.width = t || 0, this.height = r || 0, this.element = e, this.init();
        }
        return ae(a, [
          {
            key: "init",
            value: function() {
              var e = a.pixelRatio;
              this.element.width = this.width * e, this.element.height = this.height * e, this.element.style.width = this.width + "px", this.element.style.height = this.height + "px", this.elementClone = this.element.cloneNode(true), this.context = this.element.getContext("2d"), this.contextClone = this.elementClone.getContext("2d"), this.drawWidth = this.element.width, this.drawHeight = this.element.height, this.drawX = this.drawWidth / 2, this.drawY = this.drawHeight / 2, this.minSide = this.drawX < this.drawY ? this.drawX : this.drawY, this.elementClone.initialized = false, this.contextClone.translate(this.drawX, this.drawY), this.contextClone.save(), this.context.translate(this.drawX, this.drawY), this.context.save(), this.context.max = this.contextClone.max = this.minSide, this.context.maxRadius = this.contextClone.maxRadius = null;
            }
          },
          {
            key: "destroy",
            value: function() {
              var e = a.collection.indexOf(this);
              ~e && a.collection.splice(e, 1), this.context.clearRect(-this.drawX, -this.drawY, this.drawWidth, this.drawHeight), this.context.max = null, delete this.context.max, this.context.maxRadius = null, delete this.context.maxRadius, this.context = null, this.contextClone = null, this.elementClone = null, this.element = null, this.onRedraw = null;
            }
          },
          {
            key: "commit",
            value: function() {
              var e = a.pixelRatio;
              return e !== 1 && (this.contextClone.scale(e, e), this.contextClone.save()), this;
            }
          },
          {
            key: "redraw",
            value: function() {
              return this.init(), this.onRedraw && this.onRedraw(), this;
            }
          }
        ], [
          {
            key: "redraw",
            value: function() {
              for (var e = 0, t = a.collection.length; e < t; e++) a.collection[e].redraw();
            }
          },
          {
            key: "pixelRatio",
            get: function() {
              return window.devicePixelRatio || 1;
            }
          }
        ]), a;
      })();
      U.collection = [], window.matchMedia && window.matchMedia("screen and (min-resolution: 2dppx)").addListener(U.redraw);
      var Se = {
        renderTo: null,
        width: 0,
        height: 0,
        minValue: 0,
        maxValue: 100,
        value: 0,
        units: false,
        exactTicks: false,
        majorTicks: [
          0,
          20,
          40,
          60,
          80,
          100
        ],
        minorTicks: 10,
        strokeTicks: true,
        animatedValue: false,
        animateOnInit: false,
        title: false,
        borders: true,
        numbersMargin: 1,
        listeners: null,
        valueInt: 3,
        valueDec: 2,
        majorTicksInt: 1,
        majorTicksDec: 0,
        animation: true,
        animationDuration: 500,
        animationRule: "cycle",
        colorPlate: "#fff",
        colorPlateEnd: "",
        colorMajorTicks: "#444",
        colorMinorTicks: "#666",
        colorStrokeTicks: "",
        colorTitle: "#888",
        colorUnits: "#888",
        colorNumbers: "#444",
        colorNeedle: "rgba(240,128,128,1)",
        colorNeedleEnd: "rgba(255,160,122,.9)",
        colorValueText: "#444",
        colorValueTextShadow: "rgba(0,0,0,0.3)",
        colorBorderShadow: "rgba(0,0,0,0.5)",
        colorBorderOuter: "#ddd",
        colorBorderOuterEnd: "#aaa",
        colorBorderMiddle: "#eee",
        colorBorderMiddleEnd: "#f0f0f0",
        colorBorderInner: "#fafafa",
        colorBorderInnerEnd: "#ccc",
        colorValueBoxRect: "#888",
        colorValueBoxRectEnd: "#666",
        colorValueBoxBackground: "#babab2",
        colorValueBoxShadow: "rgba(0,0,0,1)",
        colorNeedleShadowUp: "rgba(2,255,255,0.2)",
        colorNeedleShadowDown: "rgba(188,143,143,0.45)",
        colorBarStroke: "#222",
        colorBar: "#ccc",
        colorBarProgress: "#888",
        colorBarShadow: "#000",
        fontNumbers: "Arial",
        fontTitle: "Arial",
        fontUnits: "Arial",
        fontValue: "Arial",
        fontNumbersSize: 20,
        fontTitleSize: 24,
        fontUnitsSize: 22,
        fontValueSize: 26,
        fontNumbersStyle: "normal",
        fontTitleStyle: "normal",
        fontUnitsStyle: "normal",
        fontValueStyle: "normal",
        fontNumbersWeight: "normal",
        fontTitleWeight: "normal",
        fontUnitsWeight: "normal",
        fontValueWeight: "normal",
        needle: true,
        needleShadow: true,
        needleType: "arrow",
        needleStart: 5,
        needleEnd: 85,
        needleWidth: 4,
        borderOuterWidth: 3,
        borderMiddleWidth: 3,
        borderInnerWidth: 3,
        borderShadowWidth: 3,
        valueBox: true,
        valueBoxStroke: 5,
        valueBoxWidth: 0,
        valueText: "",
        valueTextShadow: true,
        valueBoxBorderRadius: 2.5,
        highlights: [
          {
            from: 20,
            to: 60,
            color: "#eee"
          },
          {
            from: 60,
            to: 80,
            color: "#ccc"
          },
          {
            from: 80,
            to: 100,
            color: "#999"
          }
        ],
        highlightsWidth: 15,
        highlightsLineCap: "butt",
        barWidth: 20,
        barStrokeWidth: 0,
        barProgress: true,
        barShadow: 0
      };
      l.prototype = Object.create(Array.prototype), l.prototype.constructor = l, l.prototype.get = function(a) {
        if (typeof a == "string") for (var e = 0, t = this.length; e < t; e++) {
          var r = this[e].options.renderTo.tagName ? this[e].options.renderTo : document.getElementById(this[e].options.renderTo || "");
          if (r.getAttribute("id") === a) return this[e];
        }
        else if (typeof a == "number") return this[a];
        return null;
      };
      var Ce = "2.1.7", _ = Math.round, G = Math.abs, se = new l();
      se.version = Ce;
      var H = (function(a) {
        function e(t) {
          z(this, e);
          var r = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)), o = r.constructor.name;
          if (o === "BaseGauge") throw new TypeError("Attempt to instantiate abstract class!");
          if (se.push(r), t.listeners && Object.keys(t.listeners).forEach(function(i) {
            (t.listeners[i] instanceof Array ? t.listeners[i] : [
              t.listeners[i]
            ]).forEach(function(d) {
              r.on(i, d);
            });
          }), r.version = Ce, r.type = x[o] || e, r.initialized = false, t.minValue = parseFloat(t.minValue), t.maxValue = parseFloat(t.maxValue), t.value = parseFloat(t.value) || 0, t.borders || (t.borderInnerWidth = t.borderMiddleWidth = t.borderOuterWidth = 0), !t.renderTo) throw TypeError("Canvas element was not specified when creating the Gauge object!");
          var n = t.renderTo.tagName ? t.renderTo : document.getElementById(t.renderTo);
          if (!(n instanceof HTMLCanvasElement)) throw TypeError("Given gauge canvas element is invalid!");
          return t.width = parseFloat(t.width) || 0, t.height = parseFloat(t.height) || 0, t.width && t.height || (t.width || (t.width = n.parentNode ? n.parentNode.offsetWidth : n.offsetWidth), t.height || (t.height = n.parentNode ? n.parentNode.offsetHeight : n.offsetHeight)), r.options = t || {}, r.options.animateOnInit && (r._value = r.options.value, r.options.value = r.options.minValue), r.canvas = new U(n, t.width, t.height), r.canvas.onRedraw = r.draw.bind(r), r.animation = new we(t.animationRule, t.animationDuration), r;
        }
        return D(e, a), ae(e, [
          {
            key: "update",
            value: function(t) {
              return Object.assign(this.options, this.type.configure(t || {})), this.canvas.width = this.options.width, this.canvas.height = this.options.height, this.animation.rule = this.options.animationRule, this.animation.duration = this.options.animationDuration, this.canvas.redraw(), this;
            }
          },
          {
            key: "destroy",
            value: function() {
              var t = se.indexOf(this);
              ~t && se.splice(t, 1), this.canvas.destroy(), this.canvas = null, this.animation.destroy(), this.animation = null, this.emit("destroy");
            }
          },
          {
            key: "draw",
            value: function() {
              return this.options.animateOnInit && !this.initialized && (this.value = this._value, this.initialized = true, this.emit("init")), this.emit("render"), this;
            }
          },
          {
            key: "value",
            set: function(t) {
              var r = this;
              t = e.ensureValue(t, this.options.minValue);
              var o = this.options.value;
              if (t !== o) if (this.options.animation) {
                if (this.animation.frame && (this.options.value = this._value, this._value === t)) return this.animation.cancel(), void delete this._value;
                this._value === void 0 && (this._value = t), this.emit("animationStart"), this.animation.animate(function(n) {
                  var i = o + (t - o) * n;
                  r.options.animatedValue && r.emit("value", i, r.value), r.options.value = i, r.draw(), r.emit("animate", n, r.options.value);
                }, function() {
                  r._value !== void 0 && (r.emit("value", r._value, r.value), r.options.value = r._value, delete r._value), r.draw(), r.emit("animationEnd");
                });
              } else this.emit("value", t, this.value), this.options.value = t, this.draw();
            },
            get: function() {
              return this._value === void 0 ? this.options.value : this._value;
            }
          }
        ], [
          {
            key: "configure",
            value: function(t) {
              return t;
            }
          },
          {
            key: "initialize",
            value: function(t, r) {
              return new oe(r, "canvas", t);
            }
          },
          {
            key: "fromElement",
            value: function(t) {
              var r = oe.toCamelCase(t.getAttribute("data-type")), o = t.attributes, n = 0, i = o.length, d = {};
              if (r) {
                for (/Gauge$/.test(r) || (r += "Gauge"); n < i; n++) d[oe.toCamelCase(o[n].name.replace(/^data-/, ""), false)] = oe.parse(o[n].value);
                new oe(d, t.tagName, r).process(t);
              }
            }
          },
          {
            key: "ensureValue",
            value: function(t) {
              var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              return t = parseFloat(t), !isNaN(t) && isFinite(t) || (t = parseFloat(r) || 0), t;
            }
          },
          {
            key: "mod",
            value: function(t, r) {
              return (t % r + r) % r;
            }
          },
          {
            key: "version",
            get: function() {
              return Ce;
            }
          }
        ]), e;
      })(ya);
      x !== void 0 && (x.BaseGauge = H, x.gauges = (window.document || {}).gauges = se);
      var _a = /{([_a-zA-Z]+[_a-zA-Z0-9]*)}/g, m = {
        roundRect: ve,
        padValue: le,
        formatMajorTickNumber: ye,
        radians: ie,
        radialPoint: P,
        linearGradient: $,
        drawNeedleShadow: K,
        drawValueBox: ue,
        verifyError: F,
        prepareTicks: re,
        drawShadow: Z,
        font: Q,
        normalizedValue: aa,
        formatContext: J
      }, ge = Math.PI, pe = ge / 2, He = Object.assign({}, Se, {
        ticksAngle: 270,
        startAngle: 45,
        colorNeedleCircleOuter: "#f0f0f0",
        colorNeedleCircleOuterEnd: "#ccc",
        colorNeedleCircleInner: "#e8e8e8",
        colorNeedleCircleInnerEnd: "#f5f5f5",
        needleCircleSize: 10,
        needleCircleInner: true,
        needleCircleOuter: true,
        needleStart: 20,
        animationTarget: "needle",
        useMinPath: false,
        barWidth: 0,
        barStartPosition: "left"
      }), xa = (function(a) {
        function e(t) {
          return z(this, e), t = Object.assign({}, He, t || {}), I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.configure(t)));
        }
        return D(e, a), ae(e, [
          {
            key: "draw",
            value: function() {
              try {
                var t = this.canvas, r = [
                  -t.drawX,
                  -t.drawY,
                  t.drawWidth,
                  t.drawHeight
                ], o = r[0], n = r[1], i = r[2], d = r[3], u = this.options;
                if (u.animationTarget === "needle") {
                  if (!t.elementClone.initialized) {
                    var s = t.contextClone;
                    s.clearRect(o, n, i, d), s.save(), this.emit("beforePlate"), Ne(s, u), this.emit("beforeHighlights"), Ve(s, u), this.emit("beforeMinorTicks"), We(s, u), this.emit("beforeMajorTicks"), Me(s, u), this.emit("beforeNumbers"), je(s, u), this.emit("beforeTitle"), Ae(s, u), this.emit("beforeUnits"), Pe(s, u), t.elementClone.initialized = true;
                  }
                  this.canvas.commit(), t.context.clearRect(o, n, i, d), t.context.save(), t.context.drawImage(t.elementClone, o, n, i, d), t.context.save(), this.emit("beforeProgressBar"), Re(t.context, u), this.emit("beforeValueBox"), Ie(t.context, u, De(this)), this.emit("beforeNeedle"), Ee(t.context, u);
                } else {
                  var c = -m.radians((u.value - u.minValue) / (u.maxValue - u.minValue) * u.ticksAngle);
                  if (t.context.clearRect(o, n, i, d), t.context.save(), this.emit("beforePlate"), Ne(t.context, u), t.context.rotate(c), this.emit("beforeHighlights"), Ve(t.context, u), this.emit("beforeMinorTicks"), We(t.context, u), this.emit("beforeMajorTicks"), Me(t.context, u), this.emit("beforeNumbers"), je(t.context, u), this.emit("beforeProgressBar"), Re(t.context, u), t.context.rotate(-c), t.context.save(), !t.elementClone.initialized) {
                    var h = t.contextClone;
                    h.clearRect(o, n, i, d), h.save(), this.emit("beforeTitle"), Ae(h, u), this.emit("beforeUnits"), Pe(h, u), this.emit("beforeNeedle"), Ee(h, u), t.elementClone.initialized = true;
                  }
                  t.context.drawImage(t.elementClone, o, n, i, d);
                }
                this.emit("beforeValueBox"), Ie(t.context, u, De(this)), Te(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
              } catch (p) {
                m.verifyError(p);
              }
              return this;
            }
          },
          {
            key: "value",
            set: function(t) {
              t = H.ensureValue(t, this.options.minValue), this.options.animation && this.options.ticksAngle === 360 && this.options.useMinPath && (this._value = t, t = this.options.value + ((t - this.options.value) % 360 + 540) % 360 - 180), va(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", t, this);
            },
            get: function() {
              return Te(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this);
            }
          }
        ], [
          {
            key: "configure",
            value: function(t) {
              return t.barWidth > 50 && (t.barWidth = 50), isNaN(t.startAngle) && (t.startAngle = 45), isNaN(t.ticksAngle) && (t.ticksAngle = 270), t.ticksAngle > 360 && (t.ticksAngle = 360), t.ticksAngle < 0 && (t.ticksAngle = 0), t.startAngle < 0 && (t.startAngle = 0), t.startAngle > 360 && (t.startAngle = 360), t;
            }
          }
        ]), e;
      })(H);
      x !== void 0 && (x.RadialGauge = xa), H.initialize("RadialGauge", He);
      var Xe = Object.assign({}, Se, {
        borderRadius: 0,
        barBeginCircle: 30,
        colorBarEnd: "",
        colorBarProgressEnd: "",
        needleWidth: 6,
        tickSide: "both",
        needleSide: "both",
        numberSide: "both",
        ticksWidth: 10,
        ticksWidthMinor: 5,
        ticksPadding: 5,
        barLength: 85,
        fontTitleSize: 26,
        highlightsWidth: 10
      }), ka = (function(a) {
        function e(t) {
          return z(this, e), t = Object.assign({}, Xe, t || {}), I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.configure(t)));
        }
        return D(e, a), ae(e, [
          {
            key: "draw",
            value: function() {
              try {
                var t = this.canvas, r = [
                  -t.drawX,
                  -t.drawY,
                  t.drawWidth,
                  t.drawHeight
                ], o = r[0], n = r[1], i = r[2], d = r[3], u = this.options;
                if (!t.elementClone.initialized) {
                  var s = t.contextClone;
                  s.clearRect(o, n, i, d), s.save(), this.emit("beforePlate"), this.drawBox = oa(s, u, o, n, i, d), this.emit("beforeBar"), la.apply(void 0, [
                    s,
                    u
                  ].concat(E(this.drawBox))), t.context.barDimensions = s.barDimensions, this.emit("beforeHighlights"), ua(s, u), this.emit("beforeMinorTicks"), sa(s, u), this.emit("beforeMajorTicks"), da(s, u), this.emit("beforeNumbers"), ga(s, u), this.emit("beforeTitle"), ca(s, u), this.emit("beforeUnits"), ha(s, u), t.elementClone.initialized = true;
                }
                this.canvas.commit(), t.context.clearRect(o, n, i, d), t.context.save(), t.context.drawImage(t.elementClone, o, n, i, d), t.context.save(), this.emit("beforeProgressBar"), ia.apply(void 0, [
                  t.context,
                  u
                ].concat(E(this.drawBox))), this.emit("beforeNeedle"), ma(t.context, u), this.emit("beforeValueBox"), pa.apply(void 0, [
                  t.context,
                  u,
                  u.animatedValue ? this.options.value : this.value
                ].concat(E(this.drawBox))), Te(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
              } catch (c) {
                m.verifyError(c);
              }
              return this;
            }
          }
        ], [
          {
            key: "configure",
            value: function(t) {
              return t.barStrokeWidth >= t.barWidth && (t.barStrokeWidth = _(t.barWidth / 2)), t.hasLeft = ze("right", t), t.hasRight = ze("left", t), t.value > t.maxValue && (t.value = t.maxValue), t.value < t.minValue && (t.value = t.minValue), H.configure(t);
            }
          }
        ]), e;
      })(H);
      x !== void 0 && (x.LinearGauge = ka), H.initialize("LinearGauge", Xe), Object.assign(x, {
        Collection: l,
        GenericOptions: Se,
        Animation: we,
        BaseGauge: H,
        drawings: m,
        SmartCanvas: U,
        DomObserver: oe,
        vendorize: L
      });
    })(g.exports);
  })(Qe);
  var $e = Qe.exports;
  const Pa = (g) => {
    const x = R.useRef(null), E = R.useRef(null);
    R.useEffect(() => {
      if (x.current === null || x.current.options.gaugeType !== g.gaugeType) {
        const z = Object.assign({}, g, {
          renderTo: E.current
        });
        switch (g.gaugeType) {
          case "radial":
            x.current !== null && x.current.destroy(), x.current = new $e.RadialGauge(z).draw();
            break;
          case "linear":
            x.current !== null && x.current.destroy(), x.current = new $e.LinearGauge(z).draw();
            break;
        }
      }
    }, [
      g
    ]), R.useEffect(() => {
      x.current !== null && g.width && g.height && g.width > 30 && g.height > 30 && (x.current.value = g.value ?? 0, x.current.update(g));
    }, [
      g
    ]);
    const I = g.gaugeSegment, D = Ta(I == null ? void 0 : I.state.icon, I == null ? void 0 : I.state.iconColor, (I == null ? void 0 : I.state.forceColorMask) ?? false);
    return M.jsxs(Ke, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        M.jsx(wa, {
          alt: "",
          src: I == null ? void 0 : I.state.icon,
          style: {
            position: "relative",
            width: I == null ? void 0 : I.state.iconSizeOnly,
            height: I == null ? void 0 : I.state.iconSizeOnly,
            boxSizing: "border-box",
            objectFit: g.gaugeWidgetData.gaugeIconFit,
            top: `calc(0px - ${I == null ? void 0 : I.state.iconYOffset})`,
            left: `calc(0px + ${I == null ? void 0 : I.state.iconXOffset})`,
            ...D
          }
        }),
        M.jsx("canvas", {
          id: "my-canvas",
          ref: E,
          style: {
            position: "absolute"
          }
        })
      ]
    });
  }, Ea = (g, x, E) => g.find((D) => x >= D.from && (x < D.to || x === D.to && x === E)) || null;
  function Ia() {
    var _a, _b;
    const g = R.useRef(null), [x, E] = R.useState(null), { width: I, height: D } = Sa(x), z = R.useContext(Ze), { wrappedContent: L, widget: { data: { oidObject: ne } }, widget: l } = z, { data: F, statesNew: J } = Ca("oid"), re = Aa("oid"), le = (ne == null ? void 0 : ne.type) === "number", ye = R.useMemo(() => {
      const K = Number(l.data.gaugeMinValue) || 0, Q = Number(l.data.gaugeMaxValue) || 100, Y = [];
      if (l.data.gaugeMajorTicks && +(l.data.gaugeMajorTicks > 0)) for (let ee = 0; ee <= Number(l.data.gaugeMajorTicks); ee++) {
        const ue = K + ((Q - K) / Number(l.data.gaugeMajorTicks) || 1) * ee;
        Y.push(Math.round(ue * 100) / 100);
      }
      return Y;
    }, [
      l.data.gaugeMinValue,
      l.data.gaugeMaxValue,
      l.data.gaugeMajorTicks
    ]), ie = R.useMemo(() => {
      const K = Number(l.data.gaugeMaxValue) || 100, Q = J.map((Y, ee) => {
        var _a2;
        const ue = ((_a2 = J[ee + 1]) == null ? void 0 : _a2.value) || K;
        return {
          from: Number(Y.value),
          to: Number(ue),
          color: Ba(Y.textColor) || "transparent",
          state: {
            ...Y
          }
        };
      });
      return J.length > 0 && Number(J[J.length - 1].value) < K && (Q[Q.length - 1].to = K), Q;
    }, [
      J,
      l.data.gaugeMaxValue
    ]), P = R.useMemo(() => Ea(ie, Number(re) || 0, Number(l.data.gaugeMaxValue) ? Number(l.data.gaugeMaxValue) : 100), [
      ie,
      re,
      l.data.gaugeMaxValue
    ]), $ = (_a = g.current) == null ? void 0 : _a.paper0, Z = (_b = g.current) == null ? void 0 : _b.paper1;
    return R.useEffect(() => {
      $ && Z && (P ? ($.style.borderColor = !L && ((P == null ? void 0 : P.state.frameBackgroundColorActive) || (P == null ? void 0 : P.state.frameBackgroundColor) || null) || "", $.style.background = (L ? (P == null ? void 0 : P.state.frameBackgroundColorActive) || (P == null ? void 0 : P.state.frameBackgroundColor) || (P == null ? void 0 : P.state.frameBackgroundActive) || (P == null ? void 0 : P.state.frameBackground) || null : "transparent") || "", Z.style.borderColor = !L && ((P == null ? void 0 : P.state.backgroundColorActive) || (P == null ? void 0 : P.state.backgroundColor) || null) || "", Z.style.background = (L ? (P == null ? void 0 : P.state.backgroundColorActive) || (P == null ? void 0 : P.state.backgroundColor) || (P == null ? void 0 : P.state.backgroundActive) || (P == null ? void 0 : P.state.background) || null : "transparent") || "") : ($.style.borderColor = "", $.style.background = L && (F.frameBackgroundColor || F.frameBackground || null) || "", Z.style.borderColor = "", Z.style.background = L && (F.backgroundColor || F.background || null) || ""));
    }, [
      $,
      Z,
      L,
      P,
      l.data,
      F.frameBackgroundColor,
      F.frameBackground,
      F.backgroundColor,
      F.background
    ]), M.jsxs(Na, {
      ref: g,
      isValidType: le,
      data: F,
      oidValue: re,
      children: [
        M.jsx(Va, {
          data: {
            ...F,
            icon: P == null ? void 0 : P.state.icon,
            iconColor: P == null ? void 0 : P.state.iconColor,
            forceColorMask: P == null ? void 0 : P.state.forceColorMask
          },
          widget: l
        }),
        M.jsx(Ke, {
          ref: E,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: M.jsx(Pa, {
            gaugeWidgetData: l.data,
            gaugeSegment: P,
            gaugeType: l.data.gaugeType,
            width: (I || 0) - Number(l.data.gaugePadding || 0),
            height: (D || 0) - Number(l.data.gaugePadding || 0),
            minValue: Number(l.data.gaugeMinValue) ? Number(l.data.gaugeMinValue) : 0,
            maxValue: Number(l.data.gaugeMaxValue) ? Number(l.data.gaugeMaxValue) : 100,
            value: Number(re) || 0,
            units: ne == null ? void 0 : ne.unit,
            title: F.header,
            exactTicks: l.data.gaugeExactTicks,
            majorTicks: ye,
            minorTicks: typeof l.data.gaugeMinorTicks == "number" ? l.data.gaugeMinorTicks : Number(l.data.gaugeMinorTicks),
            strokeTicks: l.data.gaugeStrokeTicks,
            majorTicksInt: typeof l.data.gaugeMajorTicksInt == "number" ? l.data.gaugeMajorTicksInt : Number(l.data.gaugeMajorTicksInt),
            majorTicksDec: typeof l.data.gaugeMajorTicksDec == "number" ? l.data.gaugeMajorTicksDec : Number(l.data.gaugeMajorTicksDec),
            highlights: ie,
            highlightsWidth: typeof l.data.gaugeHighlightsWidth == "number" ? l.data.gaugeHighlightsWidth : Number(l.data.gaugeHighlightsWidth),
            numbersMargin: typeof l.data.gaugeNumbersMargin == "number" ? l.data.gaugeNumbersMargin : Number(l.data.gaugeNumbersMargin),
            barWidth: typeof l.data.gaugeBarWidth == "number" && l.data.gaugeBarWidth <= 50 ? l.data.gaugeBarWidth : Number(l.data.gaugeBarWidth) <= 50 ? Number(l.data.gaugeBarWidth) : 50,
            barStrokeWidth: typeof l.data.gaugeBarStrokeWidth == "number" ? l.data.gaugeBarStrokeWidth : Number(l.data.gaugeBarStrokeWidth),
            barProgress: l.data.gaugeBarProgress,
            barShadow: typeof l.data.gaugeBarShadow == "number" ? l.data.gaugeBarShadow : Number(l.data.gaugeBarShadow),
            animation: l.data.gaugeAnimation,
            animationDuration: typeof l.data.gaugeAnimationDuration == "number" ? l.data.gaugeAnimationDuration : Number(l.data.gaugeAnimationDuration),
            animationRule: l.data.gaugeAnimationRule || "cycle",
            animatedValue: l.data.gaugeAnimatedValue,
            animateOnInit: l.data.gaugeAnimateOnInit,
            colorPlate: l.data.gaugeColorPlate || "rgba(0,0,0,0)",
            colorPlateEnd: l.data.gaugeColorPlateEnd || "rgba(0,0,0,0)",
            colorMajorTicks: l.data.gaugeColorMajorTicks || "#444",
            colorMinorTicks: l.data.gaugeColorMinorTicks || "#666",
            colorStrokeTicks: l.data.gaugeColorStrokeTicks || "#444",
            colorTitle: l.data.gaugeColorTitle || "#888",
            colorUnits: l.data.gaugeColorUnits || "#888",
            colorNumbers: l.data.gaugeColorNumbers || "#444",
            colorNeedle: l.data.gaugeColorNeedle || "rgba(240,128,128,1)",
            colorNeedleEnd: l.data.gaugeColorNeedleEnd || "rgba(255,160,122,.9)",
            colorValueText: l.data.gaugeColorValueText || "#444",
            colorValueTextShadow: l.data.gaugeColorValueTextShadow || "rgba(0,0,0,0.3)",
            colorBorderShadow: l.data.gaugeColorBorderShadow || "rgba(0,0,0,0.5)",
            colorBorderOuter: l.data.gaugeColorBorderOuter || "#ddd",
            colorBorderOuterEnd: l.data.gaugeColorBorderOuterEnd || "#aaa",
            colorBorderMiddle: l.data.gaugeColorBorderMiddle || "#eee",
            colorBorderMiddleEnd: l.data.gaugeColorBorderMiddleEnd || "#f0f0f0",
            colorBorderInner: l.data.gaugeColorBorderInner || "#fafafa",
            colorBorderInnerEnd: l.data.gaugeColorBorderInnerEnd || "#ccc",
            colorValueBoxRect: l.data.gaugeColorValueBoxRect || "#888",
            colorValueBoxRectEnd: l.data.gaugeColorValueBoxRectEnd || "#666",
            colorValueBoxBackground: l.data.gaugeColorValueBoxBackground || "#babab2",
            colorValueBoxShadow: l.data.gaugeColorValueBoxShadow || "rgba(0,0,0,1)",
            colorNeedleShadowUp: l.data.gaugeColorNeedleShadowUp || "rgba(2,255,255,0.2)",
            colorNeedleShadowDown: l.data.gaugeColorNeedleShadowDown || "rgba(188,143,143,0.45)",
            colorBarStroke: l.data.gaugeColorBarStroke || "#222",
            colorBar: l.data.gaugeColorBar || "#ccc",
            colorBarProgress: l.data.gaugeColorBarProgress || "#888",
            highlightsLineCap: l.data.gaugeHighlightsLineCap || "butt",
            needle: l.data.gaugeNeedle,
            needleShadow: l.data.gaugeNeedleShadow,
            needleType: l.data.gaugeNeedleType || "arrow",
            needleStart: typeof l.data.gaugeNeedleStart == "number" ? l.data.gaugeNeedleStart : Number(l.data.gaugeNeedleStart),
            needleEnd: typeof l.data.gaugeNeedleEnd == "number" ? l.data.gaugeNeedleEnd : Number(l.data.gaugeNeedleEnd),
            needleWidth: typeof l.data.gaugeNeedleWidth == "number" ? l.data.gaugeNeedleWidth : Number(l.data.gaugeNeedleWidth),
            borders: l.data.gaugeBorders,
            borderOuterWidth: typeof l.data.gaugeBorderOuterWidth == "number" ? l.data.gaugeBorderOuterWidth : Number(l.data.gaugeBorderOuterWidth),
            borderMiddleWidth: typeof l.data.gaugeBorderMiddleWidth == "number" ? l.data.gaugeBorderMiddleWidth : Number(l.data.gaugeBorderMiddleWidth),
            borderInnerWidth: typeof l.data.gaugeBorderInnerWidth == "number" ? l.data.gaugeBorderInnerWidth : Number(l.data.gaugeBorderInnerWidth),
            borderShadowWidth: typeof l.data.gaugeBorderShadowWidth == "number" ? l.data.gaugeBorderShadowWidth : Number(l.data.gaugeBorderShadowWidth),
            valueBox: l.data.gaugeValueBox,
            valueBoxStroke: typeof l.data.gaugeValueBoxStroke == "number" ? l.data.gaugeValueBoxStroke : Number(l.data.gaugeValueBoxStroke),
            valueBoxWidth: typeof l.data.gaugeValueBoxWidth == "number" ? l.data.gaugeValueBoxWidth : Number(l.data.gaugeValueBoxWidth),
            valueText: l.data.gaugeValueText || "",
            valueTextShadow: l.data.gaugeValueTextShadow,
            valueBoxBorderRadius: typeof l.data.gaugeValueBoxBorderRadius == "number" ? l.data.gaugeValueBoxBorderRadius : Number(l.data.gaugeValueBoxBorderRadius),
            valueInt: typeof l.data.gaugeValueInt == "number" ? l.data.gaugeValueInt : Number(l.data.gaugeValueInt),
            valueDec: typeof l.data.gaugeValueDec == "number" ? l.data.gaugeValueDec : Number(l.data.gaugeValueDec),
            fontNumbers: l.data.gaugeFontNumbers || "Arial, Helvetica, sans-serif",
            fontTitle: l.data.gaugeFontTitle || "Arial, Helvetica, sans-serif",
            fontUnits: l.data.gaugeFontUnits || "Arial, Helvetica, sans-serif",
            fontValue: l.data.gaugeFontValue || "Arial, Helvetica, sans-serif",
            fontNumbersSize: typeof l.data.gaugeFontNumbersSize == "number" ? l.data.gaugeFontNumbersSize : Number(l.data.gaugeFontNumbersSize),
            fontTitleSize: typeof l.data.gaugeFontTitleSize == "number" ? l.data.gaugeFontTitleSize : Number(l.data.gaugeFontTitleSize),
            fontUnitsSize: typeof l.data.gaugeFontUnitsSize == "number" ? l.data.gaugeFontUnitsSize : Number(l.data.gaugeFontUnitsSize),
            fontValueSize: typeof l.data.gaugeFontValueSize == "number" ? l.data.gaugeFontValueSize : Number(l.data.gaugeFontValueSize),
            fontNumbersStyle: l.data.gaugeFontNumbersStyle || "normal",
            fontTitleStyle: l.data.gaugeFontTitleStyle || "normal",
            fontUnitsStyle: l.data.gaugeFontUnitsStyle || "normal",
            fontValueStyle: l.data.gaugeFontValueStyle || "normal",
            fontNumbersWeight: l.data.gaugeFontNumbersWeight || "normal",
            fontTitleWeight: l.data.gaugeFontTitleWeight || "normal",
            fontUnitsWeight: l.data.gaugeFontUnitsWeight || "normal",
            fontValueWeight: l.data.gaugeFontValueWeight || "normal",
            borderRadius: typeof l.data.gaugeBorderRadius == "number" ? l.data.gaugeBorderRadius : Number(l.data.gaugeBorderRadius),
            barBeginCircle: typeof l.data.gaugeBarBeginCircle == "number" && l.data.gaugeBarBeginCircle < 12 ? 30 : Number(l.data.gaugeBarBeginCircle),
            barLength: typeof l.data.gaugeBarLength == "number" ? l.data.gaugeBarLength : Number(l.data.gaugeBarLength),
            colorBarEnd: l.data.gaugeColorBarEnd || "",
            colorBarProgressEnd: l.data.gaugeColorBarProgressEnd || "",
            tickSide: l.data.gaugeTickSide || "both",
            needleSide: l.data.gaugeNeedleSide || "both",
            numberSide: l.data.gaugeNumberSide || "both",
            ticksWidth: typeof l.data.gaugeTicksWidth == "number" ? l.data.gaugeTicksWidth : Number(l.data.gaugeTicksWidth),
            ticksWidthMinor: typeof l.data.gaugeTicksWidthMinor == "number" ? l.data.gaugeTicksWidthMinor : Number(l.data.gaugeTicksWidthMinor),
            ticksPadding: typeof l.data.gaugeTicksPadding == "number" ? l.data.gaugeTicksPadding : Number(l.data.gaugeTicksPadding),
            ticksAngle: typeof l.data.gaugeTicksAngle == "number" ? l.data.gaugeTicksAngle : Number(l.data.gaugeTicksAngle),
            startAngle: typeof l.data.gaugeStartAngle == "number" ? l.data.gaugeStartAngle : Number(l.data.gaugeStartAngle),
            colorNeedleCircleOuter: l.data.gaugeColorNeedleCircleOuter || "#f0f0f0",
            colorNeedleCircleOuterEnd: l.data.gaugeColorNeedleCircleOuterEnd || "#ccc",
            colorNeedleCircleInner: l.data.gaugeColorNeedleCircleInner || "#e8e8e8",
            colorNeedleCircleInnerEnd: l.data.gaugeColorNeedleCircleInnerEnd || "#f5f5f5",
            colorNeedleCircleShadowUp: l.data.gaugeColorNeedleCircleShadowUp || "rgba(2,255,255,0.2)",
            needleCircleSize: typeof l.data.gaugeNeedleCircleSize == "number" ? l.data.gaugeNeedleCircleSize : Number(l.data.gaugeNeedleCircleSize),
            needleCircleInner: l.data.gaugeNeedleCircleInner,
            needleCircleOuter: l.data.gaugeNeedleCircleOuter,
            animationTarget: l.data.gaugeAnimationTarget || "needle",
            useMinPath: l.data.gaugeUseMinPath
          })
        })
      ]
    });
  }
  ea = class extends Wa {
    static getWidgetInfo() {
      return {
        id: "tplGaugeCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "GaugeCollectionWidget",
        visWidgetLabel: "gauge_collection_widget",
        visOrder: 9,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...Je({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "gauge",
            label: "group_gauge",
            fields: [
              ...Ma([
                "number"
              ]),
              ...ja()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Je({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-gauge.png"
      };
    }
    getWidgetInfo() {
      return ea.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(x, E) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(x) {
      super.renderWidgetBody(x);
      const E = {
        id: x.id,
        refService: x.refService,
        style: x.style,
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
      return x.widget.data.noCard || x.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Oa(this.wrapContent(M.jsx(Ia, {})), E);
    }
  };
});
export {
  __tla,
  ea as default
};
