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

# ── eslint: unused imports ──
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

# ── eslint: `g` single-assignment → const (declaration merged into the one call) ──
with io.open('EchartsCollectionWidget/useChartPipeline.ts', encoding='utf-8') as f:
    t = f.read()
if "    let g: EChartsOption;\n" in t:
    t = t.replace("    let g: EChartsOption;\n", "", 1)
    old_call = "    g = buildGeneratedOption({ family, series: bucketed, meta, p: presentationFinal });"
    new_call = "    const g = buildGeneratedOption({ family, series: bucketed, meta, p: presentationFinal });"
    if old_call in t:
        t = t.replace(old_call, new_call, 1)
        print("g → const")
    else:
        print("MISS: g assignment form")
else:
    print("MISS: let g declaration")
with io.open('EchartsCollectionWidget/useChartPipeline.ts', 'w', encoding='utf-8', newline='') as f:
    f.write(t)

# ── shared.tsx comment ──
patch('EchartsCollectionWidget/editor/sections/series/shared.tsx', [
    (""" * Dashed empty state; the CTA is supplied as children (an OID-picker CTA for cartesian/pie, a plain
 * button for radar indicators — ADR-0010 onboarding, skeleton removed per ADR-0013).""",
     """ * Dashed empty state; the CTA is supplied as children (an OID-picker CTA — ADR-0010
 * onboarding, skeleton removed per ADR-0013)."""),
])

# ── editorState chartTypeRaw → LegacyChartType ──
with io.open('EchartsCollectionWidget/editor/editorState.ts', encoding='utf-8') as f:
    t = f.read()
old = """    const chartTypeRaw =
        (data.chartType as EchartsChartType | 'cartesian' | 'area' | 'gauge' | 'radar' | undefined) ?? 'line';"""
new = "    const chartTypeRaw = (data.chartType as LegacyChartType) ?? 'line';"
if old in t:
    t = t.replace(old, new)
    print("chartTypeRaw aliased")
else:
    print("MISS chartTypeRaw")
with io.open('EchartsCollectionWidget/editor/editorState.ts', 'w', encoding='utf-8', newline='') as f:
    f.write(t)

# ── seriesTemplates: dead gauge/radar categories ──
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
print("ROUND-17B PATCHED")
