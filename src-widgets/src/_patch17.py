import io

def patch(path, pairs):
    with io.open(path, encoding='utf-8') as f:
        text = f.read()
    for old, new in pairs:
        if old not in text:
            print(f"MISS in {path}: {old[:70]!r}")
        text = text.replace(old, new)
    with io.open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(text)
    print(f"patched {path}")

# ── eslint fixes ──
patch('EchartsCollectionWidget/editor/sections/LegendSection.tsx', [
    ("import { familyOf } from '../optionBuilder';\n", ""),
])
patch('EchartsCollectionWidget/optionBuilder.ts', [
    ("""import type {
    EchartsChartFamily,
    EchartsChartType,
    EchartsSeriesMeta,
    LegacyChartType,
} from '../types/field-definitions/echarts-fields';""",
     """import type {
    EchartsChartFamily,
    EchartsSeriesMeta,
    LegacyChartType,
} from '../types/field-definitions/echarts-fields';"""),
])
patch('EchartsCollectionWidget/useChartPipeline.ts', [
    ("    let g: EChartsOption;", "    const g: EChartsOption = (() => {"),
])
with io.open('EchartsCollectionWidget/useChartPipeline.ts', encoding='utf-8') as f:
    t = f.read()
# the IIFE approach is overkill — revert to plain const via block-expression instead:
t = t.replace("    const g: EChartsOption = (() => {", "    let g: EChartsOption;")
with io.open('EchartsCollectionWidget/useChartPipeline.ts', 'w', encoding='utf-8', newline='') as f:
    f.write(t)

# The naked-block unwrap made `g` single-assignment only because the block became plain code.
# The series assembly assigns g exactly once now → convert to const via direct assignment:
with io.open('EchartsCollectionWidget/useChartPipeline.ts', encoding='utf-8') as f:
    t = f.read()
old_block = """    let g: EChartsOption;
"""
if old_block in t:
    print("g declaration: leave as let if multi-assign — check eslint after")
# simplest compliant form: keep `let g` but ensure reassignment exists; if eslint still flags,
# the series path is the only assignment — restructure:
print("(defer to eslint result)")

# ── shared.tsx comment (correct ADR refs) ──
patch('EchartsCollectionWidget/editor/sections/series/shared.tsx', [
    (""" * Dashed empty state; the CTA is supplied as children (an OID-picker CTA for cartesian/pie, a plain
 * button for radar indicators — ADR-0010 onboarding, skeleton removed per ADR-0013).""",
     """ * Dashed empty state; the CTA is supplied as children (an OID-picker CTA — ADR-0010
 * onboarding, skeleton removed per ADR-0013)."""),
])

# ── editorState chartTypeRaw → LegacyChartType (prettier-wrapped form) ──
with io.open('EchartsCollectionWidget/editor/editorState.ts', encoding='utf-8') as f:
    t = f.read()
old = """    const chartTypeRaw =
        (data.chartType as EchartsChartType | 'cartesian' | 'area' | 'gauge' | 'radar' | undefined) ?? 'line';"""
new = """    const chartTypeRaw = (data.chartType as LegacyChartType) ?? 'line';"""
if old in t:
    t = t.replace(old, new)
    print("chartTypeRaw aliased")
else:
    print("MISS chartTypeRaw — inspect lines 339-342")
with io.open('EchartsCollectionWidget/editor/editorState.ts', 'w', encoding='utf-8', newline='') as f:
    f.write(t)

# ── seriesTemplates: dead gauge/radar categories out of union + order + i18n map ──
patch('EchartsCollectionWidget/editor/seriesTemplates.ts', [
    ("""    | 'backgroundStyle'
    // pie sub-components (pie slot only)
    | 'axisLine'
    | 'axisTick'
    | 'axisLabel'
    | 'splitLine'
    | 'progress'
    | 'pointer'
    | 'anchor'
    | 'title'
    | 'detail'
    // scalar behaviour levers (every slot)
    | 'behaviour';""",
     """    | 'backgroundStyle'
    | 'labelLine' // pie's label-line group (pie slot only)
    // scalar behaviour levers (every slot)
    | 'behaviour';"""),
    ("""    'backgroundStyle',
    'axisLine',
    'axisTick',
    'axisLabel',
    'splitLine',
    'progress',
    'pointer',
    'anchor',
    'title',
    'detail',
    'behaviour',
];""",
     """    'backgroundStyle',
    'behaviour',
];"""),
    ("""    backgroundStyle: 'echarts_stpl_cat_backgroundstyle',
    axisLine: 'echarts_stpl_cat_axisline',
    axisTick: 'echarts_stpl_cat_axistick',
    axisLabel: 'echarts_stpl_cat_axislabel',
    splitLine: 'echarts_stpl_cat_splitline',
    progress: 'echarts_stpl_cat_progress',
    pointer: 'echarts_stpl_cat_pointer',
    anchor: 'echarts_stpl_cat_anchor',
    title: 'echarts_stpl_cat_title',
    detail: 'echarts_stpl_cat_detail',
    behaviour: 'echarts_stpl_cat_behaviour',
};""",
     """    backgroundStyle: 'echarts_stpl_cat_backgroundstyle',
    behaviour: 'echarts_stpl_cat_behaviour',
};"""),
])
print("ROUND-17 PATCHED")
