import { j as M, l as Qe, G as Ta, __tla as __tla_0 } from "./usePopoverPositioning-CofXyWxH.js";
import { C as A, g as wa, S as Sa, m as Ca, a as Ba, u as Na, l as Va, c as Wa, d as Ma, e as Je, f as Oa, w as ja, __tla as __tla_1 } from "./useData-BoTWPt4P.js";
import { v as D, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as Aa, __tla as __tla_3 } from "./useOidValue-DKn4TCiP.js";
import { c as Ne } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let aa;
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
  const Pa = () => [
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
      step: 1
    },
    {
      name: "gaugeMaxValue",
      type: "number",
      label: "gauge_max_value",
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
  ];
  var ea = {
    exports: {}
  };
  (function(g) {
    (function(k) {
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
      function z(a, e) {
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
      function F(a, e) {
        if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function Z(a, e) {
        if (e || (e = typeof window > "u" ? Ne : window), e[a] !== void 0) return e[a];
        for (var t = [
          "webkit",
          "moz",
          "ms",
          "o"
        ], r = 0, o = t.length, n = a.charAt(0).toUpperCase() + a.substr(1); r < o; r++) {
          var l = e[t[r] + n];
          if (l !== void 0) return l;
        }
        return null;
      }
      function ne(a, e, t, r, o, n, l) {
        if (typeof r != "function") throw new TypeError("Invalid animation rule:", r);
        var d = a - t, u = d / o, s = 0;
        u > 1 && (u = 1), u !== 1 && (s = r(u), isFinite(s) && !isNaN(s) && (u = s)), e && e(u), d < o ? l.frame = He(function(c) {
          return ne(c, e, t, r, o, n, l);
        }) : (n && n(), l.inProgress = false);
      }
      function i() {
        Array.prototype.constructor.apply(this, arguments);
      }
      function R(a) {
        if (!(a instanceof DOMException && a.result === 2152923147)) throw a;
      }
      function K(a, e) {
        return e.replace(_a, function(t, r) {
          var o = a[r];
          return o !== void 0 ? o : t;
        });
      }
      function te(a) {
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
      function ie(a, e) {
        var t = e.valueDec, r = e.valueInt, o = 0, n = void 0, l = void 0, d = void 0;
        if (a = parseFloat(a), d = a < 0, a = Math.abs(a), t > 0) {
          for (l = a.toFixed(t).toString().split("."), n = r - l[0].length; o < n; ++o) l[0] = "0" + l[0];
          l = (d ? "-" : "") + l[0] + "." + l[1];
        } else {
          for (l = Math.round(a).toString(), n = r - l.length; o < n; ++o) l = "0" + l;
          l = (d ? "-" : "") + l;
        }
        return l;
      }
      function re(a, e) {
        var t = void 0, r = false;
        return t = e.majorTicksDec === 0 ? Math.round(a).toString() : a.toFixed(e.majorTicksDec), e.majorTicksInt > 1 ? (r = ~t.indexOf("."), ~t.indexOf("-") ? "-" + [
          e.majorTicksInt + e.majorTicksDec + 2 + (r ? 1 : 0) - t.length
        ].join("0") + t.replace("-", "") : [
          e.majorTicksInt + e.majorTicksDec + 1 + (r ? 1 : 0) - t.length
        ].join("0") + t) : t;
      }
      function L(a) {
        return a * Math.PI / 180;
      }
      function ye(a, e) {
        return {
          x: -a * Math.sin(e),
          y: a * Math.cos(e)
        };
      }
      function le(a, e, t, r) {
        var o = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, l = a.createLinearGradient(o ? 0 : n, o ? n : 0, o ? 0 : r, o ? r : 0);
        return l.addColorStop(0, e), l.addColorStop(1, t), l;
      }
      function P(a, e) {
        if (arguments.length > 2 && arguments[2] !== void 0 && arguments[2]) return a.restore(), true;
        a.save();
        var t = e.borderShadowWidth;
        return t && (a.shadowBlur = t, a.shadowColor = e.colorBorderShadow), true;
      }
      function Q(a, e) {
        e.needleShadow && (a.shadowOffsetX = 2, a.shadowOffsetY = 2, a.shadowBlur = 10, a.shadowColor = e.colorNeedleShadowDown);
      }
      function $(a, e, t) {
        return a["font" + e + "Style"] + " " + a["font" + e + "Weight"] + " " + a["font" + e + "Size"] * t + "px " + a["font" + e];
      }
      function J(a) {
        a.shadowOffsetX = null, a.shadowOffsetY = null, a.shadowBlur = null, a.shadowColor = "", a.strokeStyle = null, a.lineWidth = 0, a.save();
      }
      function H(a, e, t, r) {
        e.valueTextShadow && (a.shadowOffsetX = t, a.shadowOffsetY = t, a.shadowBlur = r, a.shadowColor = e.colorValueTextShadow);
      }
      function ue(a, e, t, r, o, n) {
        if (e.valueBox) {
          J(a);
          var l = e.valueDec ? 1 + e.valueDec : 0, d = "9".repeat(Math.max.apply(null, [
            String(parseInt(t)).length + l
          ].concat(e.majorTicks.map(function(W) {
            return String(parseInt(W, 10)).length + l;
          })))), u = e.valueText || ie(t, e), s = n / 200, c = n / 100, h = 0.4 * c, p = 1.2 * c;
          a.font = $(e, "Value", s), H(a, e, h, p);
          var v = a.measureText(e.valueText ? u : "-" + ie(Number(d), e)).width;
          J(a);
          var y = parseFloat(e.fontValueSize) * s + h + p, V = c * parseFloat(e.valueBoxStroke), x = 2 * n - 2 * V, S = v + 10 * c, C = 1.1 * y + h + p, N = c * e.valueBoxBorderRadius, B = (parseFloat(e.valueBoxWidth) || 0) / 100 * x;
          B > S && (S = B), S > x && (S = x);
          var T = r - S / 2, b = o - C / 2, f = o - 5.75 * c;
          if (a.beginPath(), N ? ve(a, T, b, S, C, N) : a.rect(T, b, S, C), V) {
            var w = a.createRadialGradient(r, f, 10 * c, r, f, 20 * c);
            w.addColorStop(0, e.colorValueBoxRect), w.addColorStop(1, e.colorValueBoxRectEnd), a.strokeStyle = w, a.lineWidth = V, a.stroke();
          }
          e.colorValueBoxShadow && (a.shadowBlur = 1.2 * c, a.shadowColor = e.colorValueBoxShadow), e.colorValueBoxBackground && (a.fillStyle = e.colorValueBoxBackground, a.fill()), a.closePath(), a.restore(), H(a, e, h, p), a.fillStyle = e.colorValueText, a.textAlign = "center", a.textBaseline = "alphabetic", a.fillText(u, T + S / 2, o + C / 2 - y / 3), a.restore();
        }
      }
      function _e(a) {
        var e = a.value, t = a.minValue, r = a.maxValue, o = 0.01 * (r - t);
        return {
          normal: e < t ? t : e > r ? r : e,
          indented: e < t ? t - o : e > r ? r + o : e
        };
      }
      function ke(a, e, t, r, o) {
        t.beginPath(), t.arc(0, 0, G(a), 0, 2 * ge, true), t.lineWidth = e, t.strokeStyle = o ? m.linearGradient(t, r, o, a) : r, t.stroke(), t.closePath();
      }
      function he(a, e) {
        var t = U.pixelRatio;
        return a.maxRadius || (a.maxRadius = a.max - e.borderShadowWidth - e.borderOuterWidth * t - e.borderMiddleWidth * t - e.borderInnerWidth * t + (e.borderOuterWidth ? 0.5 : 0) + (e.borderMiddleWidth ? 0.5 : 0) + (e.borderInnerWidth ? 0.5 : 0)), a.maxRadius;
      }
      function Ve(a, e) {
        var t = U.pixelRatio, r = e.borderShadowWidth * t, o = a.max - r - e.borderOuterWidth * t / 2, n = o - e.borderOuterWidth * t / 2 - e.borderMiddleWidth * t / 2 + 0.5, l = n - e.borderMiddleWidth * t / 2 - e.borderInnerWidth * t / 2 + 0.5, d = he(a, e), u = void 0, s = false;
        a.save(), e.borderOuterWidth && (s = m.drawShadow(a, e, s), ke(o, e.borderOuterWidth * t, a, e.colorBorderOuter, e.colorBorderOuterEnd)), e.borderMiddleWidth && (s = m.drawShadow(a, e, s), ke(n, e.borderMiddleWidth * t, a, e.colorBorderMiddle, e.colorBorderMiddleEnd)), e.borderInnerWidth && (s = m.drawShadow(a, e, s), ke(l, e.borderInnerWidth * t, a, e.colorBorderInner, e.colorBorderInnerEnd)), m.drawShadow(a, e, s), a.beginPath(), a.arc(0, 0, G(d), 0, 2 * ge, true), e.colorPlateEnd ? (u = a.createRadialGradient(0, 0, d / 2, 0, 0, d), u.addColorStop(0, e.colorPlate), u.addColorStop(1, e.colorPlateEnd)) : u = e.colorPlate, a.fillStyle = u, a.fill(), a.closePath(), a.restore();
      }
      function We(a, e) {
        var t = a.max * (parseFloat(e.highlightsWidth) || 0) / 100;
        if (t) {
          var r = G(me(a, e) - t / 2), o = 0, n = e.highlights.length, l = (e.maxValue - e.minValue) / e.ticksAngle;
          for (a.save(); o < n; o++) {
            var d = e.highlights[o];
            a.beginPath(), a.rotate(pe), a.arc(0, 0, r, m.radians(e.startAngle + (d.from - e.minValue) / l), m.radians(e.startAngle + (d.to - e.minValue) / l), false), a.strokeStyle = d.color, a.lineWidth = t, a.lineCap = e.highlightsLineCap, a.stroke(), a.closePath(), a.restore(), a.save();
          }
        }
      }
      function Me(a, e) {
        var t = me(a, e), r = void 0, o = void 0, n = void 0, l = 0, d = 0, u = Math.abs(e.minorTicks) || 0, s = e.ticksAngle / (e.maxValue - e.minValue);
        for (a.lineWidth = U.pixelRatio, a.strokeStyle = e.colorMinorTicks || e.colorStrokeTicks, a.save(), e.exactTicks ? (o = e.maxValue - e.minValue, r = u ? o / u : 0, d = (X.mod(e.majorTicks[0], u) || 0) * s) : r = u * (e.majorTicks.length - 1); l < r; ++l) (n = e.startAngle + d + l * (e.ticksAngle / r)) <= e.ticksAngle + e.startAngle && (a.rotate(m.radians(n)), a.beginPath(), a.moveTo(0, t), a.lineTo(0, t - 0.075 * a.max), xe(a));
      }
      function me(a, e) {
        var t = a.max / 100;
        return he(a, e) - 5 * t - (e.barWidth ? 2 * (parseFloat(e.barStrokeWidth) || 0) + ((parseFloat(e.barWidth) || 0) + 5) * t : 0);
      }
      function Oe(a, e) {
        m.prepareTicks(e);
        var t = G(me(a, e)), r = void 0, o = void 0, n = e.majorTicks.length, l = U.pixelRatio;
        for (a.lineWidth = 2 * l, a.save(), o = e.colorMajorTicks instanceof Array ? e.colorMajorTicks : new Array(n).fill(e.colorStrokeTicks || e.colorMajorTicks), r = 0; r < n; ++r) a.strokeStyle = o[r], a.rotate(m.radians(je(e, e.exactTicks ? e.majorTicks[r] : r, n))), a.beginPath(), a.moveTo(0, t), a.lineTo(0, t - 0.15 * a.max), xe(a);
        e.strokeTicks && (a.strokeStyle = e.colorStrokeTicks || o[0], a.rotate(pe), a.beginPath(), a.arc(0, 0, t, m.radians(e.startAngle), m.radians(e.startAngle + e.ticksAngle), false), xe(a));
      }
      function je(a, e, t) {
        if (a.exactTicks) {
          var r = a.ticksAngle / (a.maxValue - a.minValue);
          return a.startAngle + r * (e - a.minValue);
        }
        return a.startAngle + e * (a.ticksAngle / (t - 1));
      }
      function xe(a) {
        a.stroke(), a.restore(), a.closePath(), a.save();
      }
      function Ae(a, e) {
        var t = me(a, e) - 0.15 * a.max, r = {}, o = 0, n = e.majorTicks.length, l = e.animationTarget !== "needle", d = e.colorNumbers instanceof Array ? e.colorNumbers : new Array(n).fill(e.colorNumbers), u = l ? -(e.value - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle : 0;
        for (l && (a.save(), a.rotate(-m.radians(u))), a.font = m.font(e, "Numbers", a.max / 200), a.lineWidth = 0, a.textAlign = "center", a.textBaseline = "middle"; o < n; ++o) {
          var s = u + je(e, e.exactTicks ? e.majorTicks[o] : o, n), c = a.measureText(e.majorTicks[o]).width, h = e.fontNumbersSize, p = Math.sqrt(c * c + h * h) / 2, v = m.radialPoint(t - p - e.numbersMargin / 100 * a.max, m.radians(s));
          s === 360 && (s = 0), r[s] || (r[s] = true, a.fillStyle = d[o], a.fillText(e.majorTicks[o], v.x, v.y));
        }
        l && a.restore();
      }
      function Pe(a, e) {
        e.title && (a.save(), a.font = m.font(e, "Title", a.max / 200), a.fillStyle = e.colorTitle, a.textAlign = "center", a.fillText(e.title, 0, -a.max / 4.25, 0.8 * a.max), a.restore());
      }
      function Ee(a, e) {
        e.units && (a.save(), a.font = m.font(e, "Units", a.max / 200), a.fillStyle = e.colorUnits, a.textAlign = "center", a.fillText(m.formatContext(e, e.units), 0, a.max / 3.25, 0.8 * a.max), a.restore());
      }
      function Ie(a, e) {
        if (e.needle) {
          var t = e.ticksAngle < 360 ? m.normalizedValue(e).indented : e.value, r = p ? e.startAngle : e.startAngle + (t - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle;
          e.barStartPosition === "right" && (r = e.startAngle + e.ticksAngle - (t - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle);
          var o = he(a, e), n = G(o / 100 * e.needleCircleSize), l = G(o / 100 * e.needleCircleSize * 0.75), d = G(o / 100 * e.needleEnd), u = G(e.needleStart ? o / 100 * e.needleStart : 0), s = o / 100 * e.needleWidth, c = o / 100 * e.needleWidth / 2, h = U.pixelRatio, p = e.animationTarget !== "needle";
          a.save(), m.drawNeedleShadow(a, e), a.rotate(m.radians(r)), a.fillStyle = m.linearGradient(a, e.colorNeedle, e.colorNeedleEnd, d - u), e.needleType === "arrow" ? (a.beginPath(), a.moveTo(-c, -u), a.lineTo(-s, 0), a.lineTo(-1 * h, d), a.lineTo(h, d), a.lineTo(s, 0), a.lineTo(c, -u), a.closePath(), a.fill(), a.beginPath(), a.lineTo(-0.5 * h, d), a.lineTo(-1 * h, d), a.lineTo(-s, 0), a.lineTo(-c, -u), a.lineTo(c / 2 * h - 2 * h, -u), a.closePath(), a.fillStyle = e.colorNeedleShadowUp, a.fill()) : (a.beginPath(), a.moveTo(-c, d), a.lineTo(-c, u), a.lineTo(c, u), a.lineTo(c, d), a.closePath(), a.fill()), e.needleCircleSize && (a.restore(), m.drawNeedleShadow(a, e), e.needleCircleOuter && (a.beginPath(), a.arc(0, 0, n, 0, 2 * ge, true), a.fillStyle = m.linearGradient(a, e.colorNeedleCircleOuter, e.colorNeedleCircleOuterEnd, n), a.fill(), a.closePath()), e.needleCircleInner && (a.beginPath(), a.arc(0, 0, l, 0, 2 * ge, true), a.fillStyle = m.linearGradient(a, e.colorNeedleCircleInner, e.colorNeedleCircleInnerEnd, l), a.fill(), a.closePath()), a.restore());
        }
      }
      function Re(a, e, t) {
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
      function De(a, e) {
        var t = a.max / 100, r = he(a, e) - 5 * t, o = parseFloat(e.barStrokeWidth + "") || 0, n = (parseFloat(e.barWidth + "") || 0) * t, l = r - 2 * o - n, d = (r - l) / 2, u = l + d, s = o / u, c = e.startAngle, h = e.startAngle + e.ticksAngle;
        if (a.save(), a.rotate(pe), o && (a.beginPath(), a.arc(0, 0, u, m.radians(c) - s, m.radians(h) + s, false), a.strokeStyle = e.colorBarStroke, a.lineWidth = 2 * d, a.stroke(), a.closePath()), n && (a.beginPath(), a.arc(0, 0, u, m.radians(c), m.radians(h), false), a.strokeStyle = e.colorBar, a.lineWidth = n, a.stroke(), a.closePath(), e.barShadow && (a.beginPath(), a.arc(0, 0, r, m.radians(c), m.radians(h), false), a.clip(), a.beginPath(), a.strokeStyle = e.colorBar, a.lineWidth = 1, a.shadowBlur = e.barShadow, a.shadowColor = e.colorBarShadow, a.shadowOffsetX = 0, a.shadowOffsetY = 0, a.arc(0, 0, r, m.radians(e.startAngle), m.radians(e.startAngle + e.ticksAngle), false), a.stroke(), a.closePath(), a.restore(), a.rotate(pe)), e.barProgress)) {
          var p = ta(e), v = p.startAngle, y = p.endAngle;
          a.beginPath(), a.arc(0, 0, u, m.radians(v), m.radians(y), false), a.strokeStyle = e.colorBarProgress, a.lineWidth = n, a.stroke(), a.closePath();
        }
        a.restore();
      }
      function Fe(a) {
        return a.options.animatedValue ? a.options.value : a.value;
      }
      function ra(a, e, t, r, o, n, l, d) {
        a.beginPath(), a.fillStyle = d ? m.linearGradient(a, l, d, o > n ? o : n, n > o, o > n ? t : r) : l, e > 0 ? m.roundRect(a, t, r, o, n, e) : a.rect(t, r, o, n), a.fill(), a.closePath();
      }
      function Te(a, e, t, r, o, n, l, d, u) {
        a.beginPath(), a.lineWidth = e, a.strokeStyle = u ? m.linearGradient(a, d, u, l, true, o) : d, t > 0 ? m.roundRect(a, r, o, n, l, t) : a.rect(r, o, n, l), a.stroke(), a.closePath();
      }
      function oa(a, e, t, r, o, n) {
        var l = U.pixelRatio;
        a.save();
        var d = e.borderRadius * l, u = o - e.borderShadowWidth - e.borderOuterWidth * l, s = u - e.borderOuterWidth * l - e.borderMiddleWidth * l, c = s - e.borderMiddleWidth * l - e.borderInnerWidth * l, h = c - e.borderInnerWidth * l, p = n - e.borderShadowWidth - e.borderOuterWidth * l, v = p - e.borderOuterWidth * l - e.borderMiddleWidth * l, y = v - e.borderMiddleWidth * l - e.borderInnerWidth * l, V = y - e.borderInnerWidth * l, x = t - (s - u) / 2, S = x - (c - s) / 2, C = S - (h - c) / 2, N = r - (v - p) / 2, B = N - (y - v) / 2, T = B - (V - y) / 2, b = 0, f = false;
        return e.borderOuterWidth && (f = m.drawShadow(a, e, f), Te(a, e.borderOuterWidth * l, d, t + e.borderOuterWidth * l / 2 - b, r + e.borderOuterWidth * l / 2 - b, u, p, e.colorBorderOuter, e.colorBorderOuterEnd), b += 0.5 * l), e.borderMiddleWidth && (f = m.drawShadow(a, e, f), Te(a, e.borderMiddleWidth * l, d -= 1 + 2 * b, x + e.borderMiddleWidth * l / 2 - b, N + e.borderMiddleWidth * l / 2 - b, s + 2 * b, v + 2 * b, e.colorBorderMiddle, e.colorBorderMiddleEnd), b += 0.5 * l), e.borderInnerWidth && (f = m.drawShadow(a, e, f), Te(a, e.borderInnerWidth * l, d -= 1 + 2 * b, S + e.borderInnerWidth * l / 2 - b, B + e.borderInnerWidth * l / 2 - b, c + 2 * b, y + 2 * b, e.colorBorderInner, e.colorBorderInnerEnd), b += 0.5 * l), m.drawShadow(a, e, f), ra(a, d, C, T, h + 2 * b, V + 2 * b, e.colorPlate, e.colorPlateEnd), a.restore(), [
          C,
          T,
          h,
          V
        ];
      }
      function na(a, e, t, r, o, n) {
        var l = U.pixelRatio, d = n >= o, u = d ? 0.85 * o : n, s = d ? n : o;
        t = d ? _(t + (o - u) / 2) : t;
        var c = !!e.title, h = !!e.units, p = !!e.valueBox, v = void 0, y = void 0, V = void 0;
        d ? (y = _(0.05 * s), v = _(0.075 * s), V = _(0.11 * s), c && (s -= v, r += v), h && (s -= y), p && (s -= V)) : (y = v = _(0.15 * u), c && (u -= v, r += v), h && (u -= y));
        var x = 2 * e.barStrokeWidth, S = e.barBeginCircle ? _(u * e.barBeginCircle / 200 - x / 2) : 0, C = _(u * e.barWidth / 100 - x), N = _(s * e.barLength / 100 - x), B = _((s - N) / 2), T = _(t + (d ? u / 2 : B + S)), b = _(r + (d ? s - B - S + x / 2 : u / 2)), f = !d || e.hasLeft && e.hasRight ? 0 : (e.hasRight ? -1 : 1) * e.ticksWidth / 100 * u, w = d || e.hasLeft && e.hasRight ? 0 : (e.hasRight ? -1 : 1) * e.ticksWidth / 100 * u;
        return a.barDimensions = {
          isVertical: d,
          width: u,
          length: s,
          barWidth: C,
          barLength: N,
          strokeWidth: x,
          barMargin: B,
          radius: S,
          pixelRatio: l,
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
      function ze(a, e, t, r, o, n, l) {
        var d = na(a, e, r, o, n, l), u = d.isVertical, s = d.width, c = d.barWidth, h = d.barLength, p = d.strokeWidth, v = d.barMargin, y = d.radius, V = d.x0, x = d.y0, S = d.X, C = d.Y, N = h;
        if (a.save(), a.beginPath(), e.barBeginCircle) {
          var B = m.radians(u ? 270 : 0), T = Math.asin(c / 2 / y), b = Math.cos(T), f = Math.sin(T), w = V + (u ? y * f : y * b - p / 2), W = u ? x - y * b : x + y * f, O = G(u ? W - x : w - V);
          a.barDimensions.barOffset = _(O + y);
          var j = u ? _(V - y * f) : w, q = u ? W : _(x - y * f);
          t === "progress" && (h = a.barDimensions.barOffset + (h - a.barDimensions.barOffset) * (m.normalizedValue(e).normal - e.minValue) / (e.maxValue - e.minValue));
          var Y = _(w + h - a.barDimensions.barOffset + p / 2), ce = _(W - h + a.barDimensions.barOffset - p / 2);
          a.arc(V, x, y, B + T, B - T), u ? (a.moveTo(w, q), a.lineTo(w, ce), a.lineTo(j, ce), a.lineTo(j, q)) : (a.moveTo(w, q), a.lineTo(Y, q), a.lineTo(Y, W), a.lineTo(w, W));
        } else {
          var ae = _(u ? S + (s - c) / 2 : S + v), $e = _(u ? C + h + v : C + (s - c) / 2);
          t === "progress" && (h *= (e.value - e.minValue) / (e.maxValue - e.minValue)), u ? a.rect(ae, $e, c, -h) : a.rect(ae, $e, h, c);
        }
        t !== "progress" && e.barStrokeWidth && (a.lineWidth = p, a.strokeStyle = e.colorBarStroke, a.stroke()), t !== "progress" && e.colorBar ? (a.fillStyle = e.colorBarEnd ? m.linearGradient(a, e.colorBar, e.colorBarEnd, h, u, u ? C : S) : e.colorBar, a.fill()) : t === "progress" && e.colorBarProgress && (a.fillStyle = e.colorBarProgressEnd ? m.linearGradient(a, e.colorBarProgress, e.colorBarProgressEnd, N, u, u ? C : S) : e.colorBarProgress, a.fill()), a.closePath(), e.barBeginCircle && (a.barDimensions.radius += p), a.barDimensions.barWidth += p, a.barDimensions.barLength += p;
      }
      function ia(a, e, t, r, o, n) {
        ze(a, e, "", t, r, o, n);
      }
      function Le(a, e) {
        return e.needleSide !== a || e.tickSide !== a || e.numberSide !== a;
      }
      function la(a, e, t, r, o, n) {
        e.barProgress && ze(a, e, "progress", t, r, o, n);
      }
      function ua(a, e) {
        var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, l = t.barWidth, d = t.barOffset, u = t.barMargin, s = t.X, c = t.Y, h = t.ticksLength, p = t.ticksPadding, v = o * (parseFloat(e.highlightsWidth) || 0) / 100;
        if (e.highlights && v) {
          var y = e.tickSide !== "right", V = e.tickSide !== "left", x = 0, S = e.highlights.length, C = (o - l) / 2, N = e.maxValue - e.minValue, B = _(r ? s + C : s + u + d), T = v, b = r ? c + n - u - d : c + C, f = _((e.ticksWidth / 100 + p) * o) + (v - e.ticksWidth / 100 * o), w = _(l + p * o);
          for (a.save(); x < S; x++) {
            var W = e.highlights[x], O = h * G(e.minValue - W.from) / N, j = h * G((W.to - W.from) / N);
            a.beginPath(), a.fillStyle = W.color, r ? (y && a.rect(B - f, b - O, T, -j), V && a.rect(B + w, b - O, T, -j)) : (y && a.rect(B + O, b - f, j, T), V && a.rect(B + O, b + w, j, T)), a.fill(), a.closePath();
          }
        }
      }
      function be(a, e, t, r, o) {
        a.beginPath(), a.moveTo(e, t), a.lineTo(r, o), a.stroke(), a.closePath(), a.save();
      }
      function Ue(a, e, t, r, o, n, l, d, u) {
        var s = a.barDimensions, c = s.isVertical, h = s.length, p = s.barWidth, v = s.barOffset, y = s.barMargin, V = s.pixelRatio, x = s.width, S = s.X, C = s.Y, N = s.ticksLength, B = s.ticksPadding, T = (x - p) / 2, b = void 0, f = void 0, w = 0, W = t.length, O = void 0, j = u * x, q = T - B * x, Y = T + p + j + B * x, ce = e instanceof Array ? e : new Array(t.length).fill(e);
        a.lineWidth = d * V, a.save();
        for (var ae = N / (o - r); w < W; w++) O = t[w], a.strokeStyle = ce[w], c ? (f = C + h - y - v + (r - O) * ae, n && (b = S + q, be(a, b, f, _(b - j), f)), l && (b = S + Y, be(a, b, f, _(b - j), f))) : (b = S + y + v - (r - O) * ae, n && (f = C + q, be(a, b, f, b, _(f - j))), l && (f = C + Y, be(a, b, _(f), b, f - j)));
      }
      function da(a, e) {
        var t = m.prepareTicks(e), r = qe(t, 2), o = r[0], n = r[1], l = 2, d = (e.maxValue - e.minValue) / (e.majorTicks.length - 1), u = e.colorMajorTicks instanceof Array ? e.colorMajorTicks : new Array(e.majorTicks.length).fill(e.colorStrokeTicks || e.colorMajorTicks);
        if (Ue(a, u, e.exactTicks ? e.majorTicks : e.majorTicks.map(function(j, q) {
          return e.minValue + d * q;
        }), e.minValue, e.maxValue, o, n, l, e.ticksWidth / 100), e.strokeTicks) {
          var s = a.barDimensions, c = s.isVertical, h = s.length, p = s.width, v = s.barWidth, y = s.barMargin, V = s.barOffset, x = s.X, S = s.Y, C = s.ticksLength, N = s.pixelRatio, B = s.ticksPadding, T = (p - v) / 2 + v + B * p, b = (p - v) / 2 - B * p, f = void 0, w = void 0, W = void 0, O = void 0;
          a.strokeStyle = e.colorStrokeTicks || u[0], l *= N, c ? (w = S + h - y - V + l / 2, O = w - C - l, o && (W = f = _(x + b), fe(a, f, w, W, O)), n && (W = f = _(x + T), fe(a, f, w, W, O))) : (f = x + y + V - l / 2, W = f + C + l, o && (O = w = _(S + b), fe(a, f, w, W, O)), n && (O = w = _(S + T), fe(a, f, w, W, O)));
        }
      }
      function fe(a, e, t, r, o) {
        a.beginPath(), a.moveTo(e, t), a.lineTo(r, o), a.stroke(), a.closePath();
      }
      function sa(a, e) {
        var t = m.prepareTicks(e), r = qe(t, 2), o = r[0], n = r[1], l = [], d = e.minValue, u = Math.abs(e.minorTicks) || 0, s = u ? (e.maxValue - e.minValue) / (u * (e.majorTicks.length - 1)) : 0;
        if (u) if (e.exactTicks) for (var c = X.mod(e.majorTicks[0], u) || 0; d < e.maxValue; d += u) c + d < e.maxValue && l.push(c + d);
        else for (; d < e.maxValue; d += s) l.push(d);
        Ue(a, e.colorMinorTicks || e.colorStrokeTicks, l, e.minValue, e.maxValue, o, n, 1, e.ticksWidthMinor / 100);
      }
      function ga(a, e) {
        var t = a.barDimensions, r = t.isVertical, o = t.length, n = t.width, l = t.barWidth, d = t.barMargin, u = t.barOffset, s = t.X, c = t.Y, h = t.ticksLength, p = t.ticksPadding, v = e.maxValue - e.minValue, y = v / (e.majorTicks.length - 1), V = e.exactTicks ? e.majorTicks : e.majorTicks.map(function(ce, ae) {
          return e.minValue + y * ae;
        }), x = V.length, S = e.numberSide !== "right", C = e.numberSide !== "left", N = e.fontNumbersSize * n / 200, B = 0, T = (e.ticksWidth / 100 + 2 * p) * n, b = (n - l) / 2 - T, f = (n - l) / 2 + l + T, w = void 0, W = void 0, O = void 0, j = void 0, q = e.colorNumbers instanceof Array ? e.colorNumbers : new Array(x).fill(e.colorNumbers), Y = e.numbersMargin / 100 * n;
        for (a.font = m.font(e, "Numbers", n / 200), a.lineWidth = 0, a.textAlign = "center"; B < x; B++) a.fillStyle = q[B], j = e.majorTicks[B], O = e.exactTicks ? h * ((V[B] - e.minValue) / v) : B * h / (x - 1), r ? (W = c + o - d - u - O + N / 3, S && (a.textAlign = "right", a.fillText(j, s + b - Y, W)), C && (a.textAlign = "left", a.fillText(j, s + f + Y, W))) : (a.measureText(j).width, w = s + d + u + O, S && a.fillText(j, w, c + b - Y), C && a.fillText(j, w, c + f + N + Y));
      }
      function ca(a, e) {
        if (e.title) {
          var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, l = t.baseX, d = t.baseY, u = t.titleMargin, s = e.fontTitleSize * o / 200, c = _(l + (r ? o : n) / 2), h = _(d + u / 2 - (r ? s : s / 2) - 0.025 * (r ? n : o));
          a.save(), a.textAlign = "center", a.fillStyle = e.colorTitle, a.font = m.font(e, "Title", o / 200), a.lineWidth = 0, a.fillText(e.title, c, h, r ? o : n);
        }
      }
      function ha(a, e) {
        if (e.units) {
          var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, l = t.baseX, d = t.baseY, u = t.unitsMargin, s = e.fontUnitsSize * o / 200, c = _(l + (r ? o : n) / 2), h = _(d + (r ? n : o) + u / 2 - s / 2);
          a.save(), a.textAlign = "center", a.fillStyle = e.colorUnits, a.font = m.font(e, "Units", o / 200), a.lineWidth = 0, a.fillText(m.formatContext(e, e.units), c, h, r ? o : n);
        }
      }
      function ma(a, e) {
        if (e.needle) {
          var t = a.barDimensions, r = t.isVertical, o = t.width, n = t.length, l = t.barWidth, d = t.barOffset, u = t.barMargin, s = t.ticksLength, c = t.X, h = t.Y, p = t.ticksPadding, v = e.needleSide !== "right", y = e.needleSide !== "left", V = s * (m.normalizedValue(e).indented - e.minValue) / (e.maxValue - e.minValue), x = (e.ticksWidth / 100 + p) * o, S = l / 2 + x, C = S * (e.needleEnd / 100), N = void 0, B = void 0, T = void 0, b = void 0, f = e.needleType.toLowerCase() === "arrow" ? fa : ba, w = (o - l) / 2, W = S * (e.needleStart / 100), O = w - x - W, j = w + l + x + W;
          a.save(), m.drawNeedleShadow(a, e), r ? (T = _(h + n - u - d - V), v && (N = _(c + O), B = N + C, f(a, e, N, T, B, T, C)), y && (N = _(c + j), B = N - C, f(a, e, N, T, B, T, C, true))) : (N = _(c + u + d + V), v && (T = _(h + O), b = T + C, f(a, e, N, T, N, b, C)), y && (T = _(h + j), b = T - C, f(a, e, N, T, N, b, C, true))), a.restore();
        }
      }
      function Ge(a, e, t, r) {
        return e.colorNeedleEnd ? m.linearGradient(a, r ? e.colorNeedleEnd : e.colorNeedle, r ? e.colorNeedle : e.colorNeedleEnd, t, !a.barDimensions.isVertical) : e.colorNeedle;
      }
      function ba(a, e, t, r, o, n, l, d) {
        a.lineWidth = e.needleWidth, a.strokeStyle = Ge(a, e, l, d), a.beginPath(), a.moveTo(t, r), a.lineTo(o, n), a.stroke(), a.closePath();
      }
      function fa(a, e, t, r, o, n, l, d) {
        var u = _(0.4 * l), s = l - u, c = t === o, h = e.needleWidth / 2;
        a.fillStyle = Ge(a, e, l, d), a.beginPath(), c ? (r > n && (s *= -1), a.moveTo(t - h, r), a.lineTo(t + h, r), a.lineTo(t + h, r + s), a.lineTo(t, n), a.lineTo(t - h, r + s), a.lineTo(t - h, r)) : (t > o && (s *= -1), a.moveTo(t, r - h), a.lineTo(t, r + h), a.lineTo(t + s, r + h), a.lineTo(o, r), a.lineTo(t + s, r - h), a.lineTo(t, r - h)), a.fill(), a.closePath();
      }
      function pa(a, e, t, r, o, n, l) {
        var d = (parseFloat(e.fontValueSize) || 0) * n / 200, u = (0.11 * l - d) / 2;
        a.barDimensions.isVertical && m.drawValueBox(a, e, t, r + n / 2, o + l - d - u, n);
      }
      var qe = /* @__PURE__ */ (function() {
        function a(e, t) {
          var r = [], o = true, n = false, l = void 0;
          try {
            for (var d, u = e[Symbol.iterator](); !(o = (d = u.next()).done) && (r.push(d.value), !t || r.length !== t); o = true) ;
          } catch (s) {
            n = true, l = s;
          } finally {
            try {
              !o && u.return && u.return();
            } finally {
              if (n) throw l;
            }
          }
          return r;
        }
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return a(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      })(), we = function a(e, t, r) {
        e === null && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (o === void 0) {
          var n = Object.getPrototypeOf(e);
          return n === null ? void 0 : a(n, t, r);
        }
        if ("value" in o) return o.value;
        var l = o.get;
        if (l !== void 0) return l.call(r);
      }, va = function a(e, t, r, o) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (n === void 0) {
          var l = Object.getPrototypeOf(e);
          l !== null && a(l, t, r, o);
        } else if ("value" in n && n.writable) n.value = r;
        else {
          var d = n.set;
          d !== void 0 && d.call(o, r);
        }
        return r;
      }, ee = /* @__PURE__ */ (function() {
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
            if (o != null) for (var n = Object.keys(Object(o)), l = 0, d = n.length; l < d; l++) {
              var u = n[l], s = Object.getOwnPropertyDescriptor(o, u);
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
          for (var e = Object(this), t = e.length >>> 0, r = arguments[1], o = r >> 0, n = o < 0 ? Math.max(t + o, 0) : Math.min(o, t), l = arguments[2], d = l === void 0 ? t : l >> 0, u = d < 0 ? Math.max(t + d, 0) : Math.min(d, t); n < u; ) e[n] = a, n++;
          return e;
        }
      }), typeof window > "u" && (window = typeof Ne > "u" ? {} : Ne);
      var ya = (function() {
        function a() {
          F(this, a), this._events = {}, this.addListener = this.on, this.removeListener = this.off;
        }
        return ee(a, [
          {
            key: "emit",
            value: function(e) {
              if (this._events[e]) {
                for (var t = 0, r = this._events[e].length, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) n[l - 1] = arguments[l];
                for (; t < r; t++) this._events[e][t] && this._events[e][t].apply(this, n);
              }
            }
          },
          {
            key: "once",
            value: function(e) {
              for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
              for (var n = 0, l = r.length, d = this; n < l; n++) (function() {
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
      })(), He = Z("requestAnimationFrame") || function(a) {
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
      }, Se = (function() {
        function a() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "linear", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
          }, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
          };
          if (F(this, a), this.duration = t, this.rule = e, this.draw = r, this.end = o, typeof this.draw != "function") throw new TypeError("Invalid animation draw callback:", r);
          if (typeof this.end != "function") throw new TypeError("Invalid animation end callback:", o);
        }
        return ee(a, [
          {
            key: "animate",
            value: function(e, t) {
              var r = this;
              this.frame && this.cancel();
              var o = window.performance && window.performance.now ? window.performance.now() : Z("animationStartTime") || Date.now();
              e = e || this.draw, t = t || this.end, this.draw = e, this.end = t, this.frame = He(function(n) {
                return ne(n, e, o, de[r.rule] || r.rule, r.duration, t, r);
              });
            }
          },
          {
            key: "cancel",
            value: function() {
              this.frame && ((Z("cancelAnimationFrame") || function(e) {
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
      Se.rules = de;
      var oe = (function() {
        function a(e, t, r) {
          F(this, a), this.options = e, this.element = t.toLowerCase(), this.type = a.toDashed(r), this.Type = k[r], this.mutationsObserved = false, this.isObservable = !!window.MutationObserver, window.GAUGES_NO_AUTO_INIT || a.domReady(this.traverse.bind(this));
        }
        return ee(a, [
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
                else if (o.addedNodes && o.addedNodes.length) for (var n = 0, l = o.addedNodes.length; n < l; n++) setTimeout(this.process.bind(this, o.addedNodes[n]));
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
                var l = a.toAttributeName(r), d = a.parse(e.getAttribute(l));
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
              for (var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r = e.split(/-/), o = 0, n = r.length, l = ""; o < n; o++) l += o || t ? r[o][0].toUpperCase() + r[o].substr(1).toLowerCase() : r[o].toLowerCase();
              return l;
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
          F(this, a), a.collection.push(this), this.width = t || 0, this.height = r || 0, this.element = e, this.init();
        }
        return ee(a, [
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
      var Ce = {
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
      i.prototype = Object.create(Array.prototype), i.prototype.constructor = i, i.prototype.get = function(a) {
        if (typeof a == "string") for (var e = 0, t = this.length; e < t; e++) {
          var r = this[e].options.renderTo.tagName ? this[e].options.renderTo : document.getElementById(this[e].options.renderTo || "");
          if (r.getAttribute("id") === a) return this[e];
        }
        else if (typeof a == "number") return this[a];
        return null;
      };
      var Be = "2.1.7", _ = Math.round, G = Math.abs, se = new i();
      se.version = Be;
      var X = (function(a) {
        function e(t) {
          F(this, e);
          var r = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)), o = r.constructor.name;
          if (o === "BaseGauge") throw new TypeError("Attempt to instantiate abstract class!");
          if (se.push(r), t.listeners && Object.keys(t.listeners).forEach(function(l) {
            (t.listeners[l] instanceof Array ? t.listeners[l] : [
              t.listeners[l]
            ]).forEach(function(d) {
              r.on(l, d);
            });
          }), r.version = Be, r.type = k[o] || e, r.initialized = false, t.minValue = parseFloat(t.minValue), t.maxValue = parseFloat(t.maxValue), t.value = parseFloat(t.value) || 0, t.borders || (t.borderInnerWidth = t.borderMiddleWidth = t.borderOuterWidth = 0), !t.renderTo) throw TypeError("Canvas element was not specified when creating the Gauge object!");
          var n = t.renderTo.tagName ? t.renderTo : document.getElementById(t.renderTo);
          if (!(n instanceof HTMLCanvasElement)) throw TypeError("Given gauge canvas element is invalid!");
          return t.width = parseFloat(t.width) || 0, t.height = parseFloat(t.height) || 0, t.width && t.height || (t.width || (t.width = n.parentNode ? n.parentNode.offsetWidth : n.offsetWidth), t.height || (t.height = n.parentNode ? n.parentNode.offsetHeight : n.offsetHeight)), r.options = t || {}, r.options.animateOnInit && (r._value = r.options.value, r.options.value = r.options.minValue), r.canvas = new U(n, t.width, t.height), r.canvas.onRedraw = r.draw.bind(r), r.animation = new Se(t.animationRule, t.animationDuration), r;
        }
        return z(e, a), ee(e, [
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
                  var l = o + (t - o) * n;
                  r.options.animatedValue && r.emit("value", l, r.value), r.options.value = l, r.draw(), r.emit("animate", n, r.options.value);
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
              var r = oe.toCamelCase(t.getAttribute("data-type")), o = t.attributes, n = 0, l = o.length, d = {};
              if (r) {
                for (/Gauge$/.test(r) || (r += "Gauge"); n < l; n++) d[oe.toCamelCase(o[n].name.replace(/^data-/, ""), false)] = oe.parse(o[n].value);
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
              return Be;
            }
          }
        ]), e;
      })(ya);
      k !== void 0 && (k.BaseGauge = X, k.gauges = (window.document || {}).gauges = se);
      var _a = /{([_a-zA-Z]+[_a-zA-Z0-9]*)}/g, m = {
        roundRect: ve,
        padValue: ie,
        formatMajorTickNumber: re,
        radians: L,
        radialPoint: ye,
        linearGradient: le,
        drawNeedleShadow: Q,
        drawValueBox: ue,
        verifyError: R,
        prepareTicks: te,
        drawShadow: P,
        font: $,
        normalizedValue: _e,
        formatContext: K
      }, ge = Math.PI, pe = ge / 2, Xe = Object.assign({}, Ce, {
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
      }), ka = (function(a) {
        function e(t) {
          return F(this, e), t = Object.assign({}, Xe, t || {}), I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.configure(t)));
        }
        return z(e, a), ee(e, [
          {
            key: "draw",
            value: function() {
              try {
                var t = this.canvas, r = [
                  -t.drawX,
                  -t.drawY,
                  t.drawWidth,
                  t.drawHeight
                ], o = r[0], n = r[1], l = r[2], d = r[3], u = this.options;
                if (u.animationTarget === "needle") {
                  if (!t.elementClone.initialized) {
                    var s = t.contextClone;
                    s.clearRect(o, n, l, d), s.save(), this.emit("beforePlate"), Ve(s, u), this.emit("beforeHighlights"), We(s, u), this.emit("beforeMinorTicks"), Me(s, u), this.emit("beforeMajorTicks"), Oe(s, u), this.emit("beforeNumbers"), Ae(s, u), this.emit("beforeTitle"), Pe(s, u), this.emit("beforeUnits"), Ee(s, u), t.elementClone.initialized = true;
                  }
                  this.canvas.commit(), t.context.clearRect(o, n, l, d), t.context.save(), t.context.drawImage(t.elementClone, o, n, l, d), t.context.save(), this.emit("beforeProgressBar"), De(t.context, u), this.emit("beforeValueBox"), Re(t.context, u, Fe(this)), this.emit("beforeNeedle"), Ie(t.context, u);
                } else {
                  var c = -m.radians((u.value - u.minValue) / (u.maxValue - u.minValue) * u.ticksAngle);
                  if (t.context.clearRect(o, n, l, d), t.context.save(), this.emit("beforePlate"), Ve(t.context, u), t.context.rotate(c), this.emit("beforeHighlights"), We(t.context, u), this.emit("beforeMinorTicks"), Me(t.context, u), this.emit("beforeMajorTicks"), Oe(t.context, u), this.emit("beforeNumbers"), Ae(t.context, u), this.emit("beforeProgressBar"), De(t.context, u), t.context.rotate(-c), t.context.save(), !t.elementClone.initialized) {
                    var h = t.contextClone;
                    h.clearRect(o, n, l, d), h.save(), this.emit("beforeTitle"), Pe(h, u), this.emit("beforeUnits"), Ee(h, u), this.emit("beforeNeedle"), Ie(h, u), t.elementClone.initialized = true;
                  }
                  t.context.drawImage(t.elementClone, o, n, l, d);
                }
                this.emit("beforeValueBox"), Re(t.context, u, Fe(this)), we(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
              } catch (p) {
                m.verifyError(p);
              }
              return this;
            }
          },
          {
            key: "value",
            set: function(t) {
              t = X.ensureValue(t, this.options.minValue), this.options.animation && this.options.ticksAngle === 360 && this.options.useMinPath && (this._value = t, t = this.options.value + ((t - this.options.value) % 360 + 540) % 360 - 180), va(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", t, this);
            },
            get: function() {
              return we(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this);
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
      })(X);
      k !== void 0 && (k.RadialGauge = ka), X.initialize("RadialGauge", Xe);
      var Ye = Object.assign({}, Ce, {
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
      }), xa = (function(a) {
        function e(t) {
          return F(this, e), t = Object.assign({}, Ye, t || {}), I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.configure(t)));
        }
        return z(e, a), ee(e, [
          {
            key: "draw",
            value: function() {
              try {
                var t = this.canvas, r = [
                  -t.drawX,
                  -t.drawY,
                  t.drawWidth,
                  t.drawHeight
                ], o = r[0], n = r[1], l = r[2], d = r[3], u = this.options;
                if (!t.elementClone.initialized) {
                  var s = t.contextClone;
                  s.clearRect(o, n, l, d), s.save(), this.emit("beforePlate"), this.drawBox = oa(s, u, o, n, l, d), this.emit("beforeBar"), ia.apply(void 0, [
                    s,
                    u
                  ].concat(E(this.drawBox))), t.context.barDimensions = s.barDimensions, this.emit("beforeHighlights"), ua(s, u), this.emit("beforeMinorTicks"), sa(s, u), this.emit("beforeMajorTicks"), da(s, u), this.emit("beforeNumbers"), ga(s, u), this.emit("beforeTitle"), ca(s, u), this.emit("beforeUnits"), ha(s, u), t.elementClone.initialized = true;
                }
                this.canvas.commit(), t.context.clearRect(o, n, l, d), t.context.save(), t.context.drawImage(t.elementClone, o, n, l, d), t.context.save(), this.emit("beforeProgressBar"), la.apply(void 0, [
                  t.context,
                  u
                ].concat(E(this.drawBox))), this.emit("beforeNeedle"), ma(t.context, u), this.emit("beforeValueBox"), pa.apply(void 0, [
                  t.context,
                  u,
                  u.animatedValue ? this.options.value : this.value
                ].concat(E(this.drawBox))), we(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
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
              return t.barStrokeWidth >= t.barWidth && (t.barStrokeWidth = _(t.barWidth / 2)), t.hasLeft = Le("right", t), t.hasRight = Le("left", t), t.value > t.maxValue && (t.value = t.maxValue), t.value < t.minValue && (t.value = t.minValue), X.configure(t);
            }
          }
        ]), e;
      })(X);
      k !== void 0 && (k.LinearGauge = xa), X.initialize("LinearGauge", Ye), Object.assign(k, {
        Collection: i,
        GenericOptions: Ce,
        Animation: Se,
        BaseGauge: X,
        drawings: m,
        SmartCanvas: U,
        DomObserver: oe,
        vendorize: Z
      });
    })(g.exports);
  })(ea);
  var Ze = ea.exports;
  const Ea = (g) => {
    const k = D.useRef(null), E = D.useRef(null);
    D.useEffect(() => {
      if (k.current === null || k.current.options.gaugeType !== g.gaugeType) {
        const F = Object.assign({}, g, {
          renderTo: E.current
        });
        switch (g.gaugeType) {
          case "radial":
            k.current !== null && k.current.destroy(), k.current = new Ze.RadialGauge(F).draw();
            break;
          case "linear":
            k.current !== null && k.current.destroy(), k.current = new Ze.LinearGauge(F).draw();
            break;
        }
      }
    }, [
      g
    ]), D.useEffect(() => {
      k.current !== null && g.width && g.height && g.width > 30 && g.height > 30 && (k.current.value = g.value ?? 0, k.current.update(g));
    }, [
      g
    ]);
    const I = g.gaugeSegment, z = wa(I == null ? void 0 : I.state.icon, I == null ? void 0 : I.state.iconColor, (I == null ? void 0 : I.state.forceColorMask) ?? false);
    return M.jsxs(Qe, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        M.jsx(Sa, {
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
            ...z
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
  }, Ia = (g, k, E) => g.find((z) => k >= z.from && (k < z.to || k === z.to && k === E)) || null, Ke = (g, k) => {
    if (g == null || g === "") return k;
    const E = Number(g);
    return Number.isFinite(E) ? E : k;
  };
  function Ra() {
    var _a, _b;
    const g = D.useRef(null), [k, E] = D.useState(null), { width: I, height: z } = Ca(k), F = D.useContext(Ba), { wrappedContent: Z, widget: { data: { oidObject: ne } }, widget: i } = F, { data: R, states: K } = Na("oid"), te = Aa("oid"), ie = (ne == null ? void 0 : ne.type) === "number", re = D.useMemo(() => Ke(i.data.gaugeMinValue, i.data.minValue ?? 0), [
      i.data.gaugeMinValue,
      i.data.minValue
    ]), L = D.useMemo(() => Ke(i.data.gaugeMaxValue, i.data.maxValue ?? 100), [
      i.data.gaugeMaxValue,
      i.data.maxValue
    ]), ye = D.useMemo(() => {
      const J = [];
      if (i.data.gaugeMajorTicks && +(i.data.gaugeMajorTicks > 0)) for (let H = 0; H <= Number(i.data.gaugeMajorTicks); H++) {
        const ue = re + ((L - re) / Number(i.data.gaugeMajorTicks) || 1) * H;
        J.push(Math.round(ue * 100) / 100);
      }
      return J;
    }, [
      re,
      L,
      i.data.gaugeMajorTicks
    ]), le = D.useMemo(() => {
      const J = K.map((H, ue) => {
        var _a2;
        const _e = ((_a2 = K[ue + 1]) == null ? void 0 : _a2.value) || L;
        return {
          from: Number(H.value),
          to: Number(_e),
          color: Va(H.textColor) || "transparent",
          state: {
            ...H
          }
        };
      });
      return K.length > 0 && Number(K[K.length - 1].value) < L && (J[J.length - 1].to = L), J;
    }, [
      K,
      L
    ]), P = D.useMemo(() => Ia(le, Number(te) || 0, L), [
      le,
      te,
      L
    ]), Q = (_a = g.current) == null ? void 0 : _a.paper0, $ = (_b = g.current) == null ? void 0 : _b.paper1;
    return D.useEffect(() => {
      Q && $ && (P ? (Q.style.borderColor = !Z && ((P == null ? void 0 : P.state.frameBackgroundColorActive) || (P == null ? void 0 : P.state.frameBackgroundColor) || null) || "", Q.style.background = (P == null ? void 0 : P.state.frameBackgroundColorActive) || (P == null ? void 0 : P.state.frameBackgroundColor) || (P == null ? void 0 : P.state.frameBackgroundActive) || (P == null ? void 0 : P.state.frameBackground) || null || "", $.style.borderColor = !Z && ((P == null ? void 0 : P.state.backgroundColorActive) || (P == null ? void 0 : P.state.backgroundColor) || null) || "", $.style.background = (P == null ? void 0 : P.state.backgroundColorActive) || (P == null ? void 0 : P.state.backgroundColor) || (P == null ? void 0 : P.state.backgroundActive) || (P == null ? void 0 : P.state.background) || null || "") : (Q.style.borderColor = "", Q.style.background = R.frameBackgroundColor || R.frameBackground || null || "", $.style.borderColor = "", $.style.background = R.backgroundColor || R.background || null || ""));
    }, [
      Q,
      $,
      Z,
      P,
      i.data,
      R.frameBackgroundColor,
      R.frameBackground,
      R.backgroundColor,
      R.background
    ]), M.jsxs(Wa, {
      ref: g,
      isValidType: ie,
      data: R,
      oidValue: te,
      children: [
        M.jsx(Ma, {
          data: {
            ...R,
            icon: P == null ? void 0 : P.state.icon,
            iconColor: P == null ? void 0 : P.state.iconColor,
            forceColorMask: P == null ? void 0 : P.state.forceColorMask
          },
          widget: i
        }),
        M.jsx(Qe, {
          ref: E,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: M.jsx(Ea, {
            gaugeWidgetData: i.data,
            gaugeSegment: P,
            gaugeType: i.data.gaugeType,
            width: (I || 0) - Number(i.data.gaugePadding || 0),
            height: (z || 0) - Number(i.data.gaugePadding || 0),
            minValue: re,
            maxValue: L,
            value: Number(te) || 0,
            units: ne == null ? void 0 : ne.unit,
            title: R.header,
            exactTicks: i.data.gaugeExactTicks,
            majorTicks: ye,
            minorTicks: typeof i.data.gaugeMinorTicks == "number" ? i.data.gaugeMinorTicks : Number(i.data.gaugeMinorTicks),
            strokeTicks: i.data.gaugeStrokeTicks,
            majorTicksInt: typeof i.data.gaugeMajorTicksInt == "number" ? i.data.gaugeMajorTicksInt : Number(i.data.gaugeMajorTicksInt),
            majorTicksDec: typeof i.data.gaugeMajorTicksDec == "number" ? i.data.gaugeMajorTicksDec : Number(i.data.gaugeMajorTicksDec),
            highlights: le,
            highlightsWidth: typeof i.data.gaugeHighlightsWidth == "number" ? i.data.gaugeHighlightsWidth : Number(i.data.gaugeHighlightsWidth),
            numbersMargin: typeof i.data.gaugeNumbersMargin == "number" ? i.data.gaugeNumbersMargin : Number(i.data.gaugeNumbersMargin),
            barWidth: typeof i.data.gaugeBarWidth == "number" && i.data.gaugeBarWidth <= 50 ? i.data.gaugeBarWidth : Number(i.data.gaugeBarWidth) <= 50 ? Number(i.data.gaugeBarWidth) : 50,
            barStrokeWidth: typeof i.data.gaugeBarStrokeWidth == "number" ? i.data.gaugeBarStrokeWidth : Number(i.data.gaugeBarStrokeWidth),
            barProgress: i.data.gaugeBarProgress,
            barShadow: typeof i.data.gaugeBarShadow == "number" ? i.data.gaugeBarShadow : Number(i.data.gaugeBarShadow),
            animation: i.data.gaugeAnimation,
            animationDuration: typeof i.data.gaugeAnimationDuration == "number" ? i.data.gaugeAnimationDuration : Number(i.data.gaugeAnimationDuration),
            animationRule: i.data.gaugeAnimationRule || "cycle",
            animatedValue: i.data.gaugeAnimatedValue,
            animateOnInit: i.data.gaugeAnimateOnInit,
            colorPlate: i.data.gaugeColorPlate || "rgba(0,0,0,0)",
            colorPlateEnd: i.data.gaugeColorPlateEnd || "rgba(0,0,0,0)",
            colorMajorTicks: i.data.gaugeColorMajorTicks || "#444",
            colorMinorTicks: i.data.gaugeColorMinorTicks || "#666",
            colorStrokeTicks: i.data.gaugeColorStrokeTicks || "#444",
            colorTitle: i.data.gaugeColorTitle || "#888",
            colorUnits: i.data.gaugeColorUnits || "#888",
            colorNumbers: i.data.gaugeColorNumbers || "#444",
            colorNeedle: i.data.gaugeColorNeedle || "rgba(240,128,128,1)",
            colorNeedleEnd: i.data.gaugeColorNeedleEnd || "rgba(255,160,122,.9)",
            colorValueText: i.data.gaugeColorValueText || "#444",
            colorValueTextShadow: i.data.gaugeColorValueTextShadow || "rgba(0,0,0,0.3)",
            colorBorderShadow: i.data.gaugeColorBorderShadow || "rgba(0,0,0,0.5)",
            colorBorderOuter: i.data.gaugeColorBorderOuter || "#ddd",
            colorBorderOuterEnd: i.data.gaugeColorBorderOuterEnd || "#aaa",
            colorBorderMiddle: i.data.gaugeColorBorderMiddle || "#eee",
            colorBorderMiddleEnd: i.data.gaugeColorBorderMiddleEnd || "#f0f0f0",
            colorBorderInner: i.data.gaugeColorBorderInner || "#fafafa",
            colorBorderInnerEnd: i.data.gaugeColorBorderInnerEnd || "#ccc",
            colorValueBoxRect: i.data.gaugeColorValueBoxRect || "#888",
            colorValueBoxRectEnd: i.data.gaugeColorValueBoxRectEnd || "#666",
            colorValueBoxBackground: i.data.gaugeColorValueBoxBackground || "#babab2",
            colorValueBoxShadow: i.data.gaugeColorValueBoxShadow || "rgba(0,0,0,1)",
            colorNeedleShadowUp: i.data.gaugeColorNeedleShadowUp || "rgba(2,255,255,0.2)",
            colorNeedleShadowDown: i.data.gaugeColorNeedleShadowDown || "rgba(188,143,143,0.45)",
            colorBarStroke: i.data.gaugeColorBarStroke || "#222",
            colorBar: i.data.gaugeColorBar || "#ccc",
            colorBarProgress: i.data.gaugeColorBarProgress || "#888",
            highlightsLineCap: i.data.gaugeHighlightsLineCap || "butt",
            needle: i.data.gaugeNeedle,
            needleShadow: i.data.gaugeNeedleShadow,
            needleType: i.data.gaugeNeedleType || "arrow",
            needleStart: typeof i.data.gaugeNeedleStart == "number" ? i.data.gaugeNeedleStart : Number(i.data.gaugeNeedleStart),
            needleEnd: typeof i.data.gaugeNeedleEnd == "number" ? i.data.gaugeNeedleEnd : Number(i.data.gaugeNeedleEnd),
            needleWidth: typeof i.data.gaugeNeedleWidth == "number" ? i.data.gaugeNeedleWidth : Number(i.data.gaugeNeedleWidth),
            borders: i.data.gaugeBorders,
            borderOuterWidth: typeof i.data.gaugeBorderOuterWidth == "number" ? i.data.gaugeBorderOuterWidth : Number(i.data.gaugeBorderOuterWidth),
            borderMiddleWidth: typeof i.data.gaugeBorderMiddleWidth == "number" ? i.data.gaugeBorderMiddleWidth : Number(i.data.gaugeBorderMiddleWidth),
            borderInnerWidth: typeof i.data.gaugeBorderInnerWidth == "number" ? i.data.gaugeBorderInnerWidth : Number(i.data.gaugeBorderInnerWidth),
            borderShadowWidth: typeof i.data.gaugeBorderShadowWidth == "number" ? i.data.gaugeBorderShadowWidth : Number(i.data.gaugeBorderShadowWidth),
            valueBox: i.data.gaugeValueBox,
            valueBoxStroke: typeof i.data.gaugeValueBoxStroke == "number" ? i.data.gaugeValueBoxStroke : Number(i.data.gaugeValueBoxStroke),
            valueBoxWidth: typeof i.data.gaugeValueBoxWidth == "number" ? i.data.gaugeValueBoxWidth : Number(i.data.gaugeValueBoxWidth),
            valueText: i.data.gaugeValueText || "",
            valueTextShadow: i.data.gaugeValueTextShadow,
            valueBoxBorderRadius: typeof i.data.gaugeValueBoxBorderRadius == "number" ? i.data.gaugeValueBoxBorderRadius : Number(i.data.gaugeValueBoxBorderRadius),
            valueInt: typeof i.data.gaugeValueInt == "number" ? i.data.gaugeValueInt : Number(i.data.gaugeValueInt),
            valueDec: typeof i.data.gaugeValueDec == "number" ? i.data.gaugeValueDec : Number(i.data.gaugeValueDec),
            fontNumbers: i.data.gaugeFontNumbers || "Arial, Helvetica, sans-serif",
            fontTitle: i.data.gaugeFontTitle || "Arial, Helvetica, sans-serif",
            fontUnits: i.data.gaugeFontUnits || "Arial, Helvetica, sans-serif",
            fontValue: i.data.gaugeFontValue || "Arial, Helvetica, sans-serif",
            fontNumbersSize: typeof i.data.gaugeFontNumbersSize == "number" ? i.data.gaugeFontNumbersSize : Number(i.data.gaugeFontNumbersSize),
            fontTitleSize: typeof i.data.gaugeFontTitleSize == "number" ? i.data.gaugeFontTitleSize : Number(i.data.gaugeFontTitleSize),
            fontUnitsSize: typeof i.data.gaugeFontUnitsSize == "number" ? i.data.gaugeFontUnitsSize : Number(i.data.gaugeFontUnitsSize),
            fontValueSize: typeof i.data.gaugeFontValueSize == "number" ? i.data.gaugeFontValueSize : Number(i.data.gaugeFontValueSize),
            fontNumbersStyle: i.data.gaugeFontNumbersStyle || "normal",
            fontTitleStyle: i.data.gaugeFontTitleStyle || "normal",
            fontUnitsStyle: i.data.gaugeFontUnitsStyle || "normal",
            fontValueStyle: i.data.gaugeFontValueStyle || "normal",
            fontNumbersWeight: i.data.gaugeFontNumbersWeight || "normal",
            fontTitleWeight: i.data.gaugeFontTitleWeight || "normal",
            fontUnitsWeight: i.data.gaugeFontUnitsWeight || "normal",
            fontValueWeight: i.data.gaugeFontValueWeight || "normal",
            borderRadius: typeof i.data.gaugeBorderRadius == "number" ? i.data.gaugeBorderRadius : Number(i.data.gaugeBorderRadius),
            barBeginCircle: typeof i.data.gaugeBarBeginCircle == "number" && i.data.gaugeBarBeginCircle < 12 ? 30 : Number(i.data.gaugeBarBeginCircle),
            barLength: typeof i.data.gaugeBarLength == "number" ? i.data.gaugeBarLength : Number(i.data.gaugeBarLength),
            colorBarEnd: i.data.gaugeColorBarEnd || "",
            colorBarProgressEnd: i.data.gaugeColorBarProgressEnd || "",
            tickSide: i.data.gaugeTickSide || "both",
            needleSide: i.data.gaugeNeedleSide || "both",
            numberSide: i.data.gaugeNumberSide || "both",
            ticksWidth: typeof i.data.gaugeTicksWidth == "number" ? i.data.gaugeTicksWidth : Number(i.data.gaugeTicksWidth),
            ticksWidthMinor: typeof i.data.gaugeTicksWidthMinor == "number" ? i.data.gaugeTicksWidthMinor : Number(i.data.gaugeTicksWidthMinor),
            ticksPadding: typeof i.data.gaugeTicksPadding == "number" ? i.data.gaugeTicksPadding : Number(i.data.gaugeTicksPadding),
            ticksAngle: typeof i.data.gaugeTicksAngle == "number" ? i.data.gaugeTicksAngle : Number(i.data.gaugeTicksAngle),
            startAngle: typeof i.data.gaugeStartAngle == "number" ? i.data.gaugeStartAngle : Number(i.data.gaugeStartAngle),
            colorNeedleCircleOuter: i.data.gaugeColorNeedleCircleOuter || "#f0f0f0",
            colorNeedleCircleOuterEnd: i.data.gaugeColorNeedleCircleOuterEnd || "#ccc",
            colorNeedleCircleInner: i.data.gaugeColorNeedleCircleInner || "#e8e8e8",
            colorNeedleCircleInnerEnd: i.data.gaugeColorNeedleCircleInnerEnd || "#f5f5f5",
            colorNeedleCircleShadowUp: i.data.gaugeColorNeedleCircleShadowUp || "rgba(2,255,255,0.2)",
            needleCircleSize: typeof i.data.gaugeNeedleCircleSize == "number" ? i.data.gaugeNeedleCircleSize : Number(i.data.gaugeNeedleCircleSize),
            needleCircleInner: i.data.gaugeNeedleCircleInner,
            needleCircleOuter: i.data.gaugeNeedleCircleOuter,
            animationTarget: i.data.gaugeAnimationTarget || "needle",
            useMinPath: i.data.gaugeUseMinPath
          })
        })
      ]
    });
  }
  aa = class extends Ta {
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
              ...Oa([
                "number"
              ]),
              ...Pa()
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
      return aa.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(k, E) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(k) {
      super.renderWidgetBody(k);
      const E = {
        id: k.id,
        refService: k.refService,
        style: k.style,
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
      return k.widget.data.noCard || k.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ja(this.wrapContent(M.jsx(Ra, {})), E);
    }
  };
});
export {
  __tla,
  aa as default
};
