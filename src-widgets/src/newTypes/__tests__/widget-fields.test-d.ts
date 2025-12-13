/**
 * Type tests for widget-specific field definitions (Phase 3).
 * Validates type definitions at compile time.
 */

import type {
    StateFieldsRxData,
    DelayFieldsRxData,
    GaugeFieldsRxData,
    SliderFieldsRxData,
    SwitchFieldsRxData,
    CheckboxFieldsRxData,
    DialogFieldsRxData,
    SelectFieldsRxData,
    RadioGroupFieldsRxData,
    ButtonGroupFieldsRxData,
    Light2FieldsRxData,
    FieldDefinitions,
} from '../field-definitions';

// ============================================================================
// State Fields Tests
// ============================================================================

export const stateData: StateFieldsRxData = {
    onlyStates: true,
    statePushButton: false,
    onlyDisplay: true,
    noIcon: false,
    noValue: true,
};

// ============================================================================
// Delay Fields Tests
// ============================================================================

export const delayData: DelayFieldsRxData = {
    sampleInterval: true,
    sampleIntervalValue: 200,
    delay: 300,
};

// ============================================================================
// Gauge Fields Tests
// ============================================================================

export const gaugeData: GaugeFieldsRxData = {
    gaugeType: 'radial',
    gaugeMinValue: 0,
    gaugeMaxValue: 100,
    gaugePadding: 10,
    gaugeIconFit: 'contain',
    gaugeAnimation: true,
    gaugeAnimationDuration: 1000,
};

// ============================================================================
// Slider Fields Tests
// ============================================================================

export const sliderData: SliderFieldsRxData = {
    sliderSize: 'medium',
    sliderOrientation: 'horizontal',
    valueLabelDisplay: 'auto',
    minValue: 0,
    maxValue: 100,
    step: 10,
    marks: true,
};

// ============================================================================
// Switch Fields Tests
// ============================================================================

export const switchData: SwitchFieldsRxData = {
    thumbSize: 62,
    thumbColorTrue: '#4CAF50',
    thumbColorFalse: '#9E9E9E',
    trackSize: 10,
    trackColor: '#E0E0E0',
};

// ============================================================================
// Checkbox Fields Tests
// ============================================================================

export const checkboxData: CheckboxFieldsRxData = {
    withoutLabel: false,
    checkboxLabelPlacement: 'end',
    onlyDisplay: false,
};

// ============================================================================
// Dialog Fields Tests
// ============================================================================

export const dialogData: DialogFieldsRxData = {
    view: 'myView',
    dialogAutoClose: 5000,
    oid: 'device.state',
    dialogHeaderAsTitle: true,
    dialogWidth: 80,
    dialogHeight: 60,
    dialogInPixel: false,
};

// ============================================================================
// Select Fields Tests
// ============================================================================

export const selectData: SelectFieldsRxData = {
    arrowColor: '#2196F3',
    cid: 'control.id',
};

// ============================================================================
// Radio Group Fields Tests
// ============================================================================

export const radioGroupData: RadioGroupFieldsRxData = {
    radioOrientation: 'vertical',
    radioGroupUncheckedIconColor: '#757575',
    onlyDisplay: false,
};

// ============================================================================
// Button Group Fields Tests
// ============================================================================

export const buttonGroupData: ButtonGroupFieldsRxData = {
    onlyIcon: false,
    onlyText: false,
    buttonGroupVariant: 'outlined',
    buttonGroupOrientation: 'horizontal',
    buttonGroupColor: '#1976D2',
};

// ============================================================================
// Light2 Fields Tests
// ============================================================================

export const light2Data: Light2FieldsRxData = {
    colorLightButton: true,
    colorLightDelayLongPress: 500,
    colorLightModalWidth: 400,
    colorLightModalHeight: 300,
    colorLightUIComponent: 'wheel',
    colorWheelLightness: true,
    colorLightType: 'rgb',
    colorLightRgbHexOid: 'hue.0.lights.1.rgb',
    colorLightGamut: 'C',
};

// ============================================================================
// FieldDefinitions Registry Tests
// ============================================================================

// Validate registry types exist
export type ValidateStateFields = FieldDefinitions['state'];
export type ValidateDelayFields = FieldDefinitions['delay'];
export type ValidateGaugeFields = FieldDefinitions['gauge'];
export type ValidateSliderFields = FieldDefinitions['slider'];
export type ValidateSwitchFields = FieldDefinitions['switch'];
export type ValidateCheckboxFields = FieldDefinitions['checkbox'];
export type ValidateDialogFields = FieldDefinitions['dialog'];
export type ValidateSelectFields = FieldDefinitions['select'];
export type ValidateRadioGroupFields = FieldDefinitions['radioGroup'];
export type ValidateButtonGroupFields = FieldDefinitions['buttonGroup'];
export type ValidateLight2Fields = FieldDefinitions['light2'];

// ============================================================================
// Widget Data Composition Tests
// ============================================================================

interface TestGaugeWidget extends GaugeFieldsRxData {
    customProp: string;
}

const testGauge: TestGaugeWidget = {
    gaugeType: 'radial',
    gaugeMinValue: 0,
    gaugeMaxValue: 100,
    gaugeAnimation: true,
    customProp: 'test',
};

interface TestSliderWidget extends SliderFieldsRxData, DelayFieldsRxData {
    customProp: string;
}

const testSlider: TestSliderWidget = {
    sliderOrientation: 'horizontal',
    minValue: 0,
    maxValue: 100,
    step: 10,
    delay: 300,
    sampleInterval: false,
    customProp: 'test',
};

interface TestLight2Widget extends Light2FieldsRxData {
    customProp: string;
}

const testLight2: TestLight2Widget = {
    colorLightButton: true,
    colorLightUIComponent: 'wheel',
    colorLightType: 'rgb',
    colorLightRgbHexOid: 'hue.0.lights.1.rgb',
    customProp: 'test',
};

// Type assertions to ensure interfaces are correctly composed
const _testGaugeValidation: TestGaugeWidget = testGauge;
const _testSliderValidation: TestSliderWidget = testSlider;
const _testLight2Validation: TestLight2Widget = testLight2;

// Export to ensure validation variables are used
export { _testGaugeValidation, _testSliderValidation, _testLight2Validation };

// ============================================================================
// Negative Test Cases (Should Fail Type Checking)
// ============================================================================

// Test: Invalid enum value for gaugeType
// @ts-expect-error - 'circular' is not a valid gaugeType (only 'linear' | 'radial')
const _invalidGaugeType: GaugeFieldsRxData = {
    gaugeType: 'circular',
};

// Test: Invalid enum value for sliderOrientation
// @ts-expect-error - 'diagonal' is not a valid sliderOrientation (only 'horizontal' | 'vertical')
const _invalidSliderOrientation: SliderFieldsRxData = {
    sliderOrientation: 'diagonal',
};

// Test: Wrong type for colorLightRgbHexOid (should be string, not number)
// @ts-expect-error - colorLightRgbHexOid must be a string (OID reference)
const _invalidLight2OidType: Light2FieldsRxData = {
    colorLightRgbHexOid: 12345,
};

// Test: Invalid enum value for buttonGroupOrientation
// @ts-expect-error - 'diagonal' is not a valid buttonGroupOrientation (only 'horizontal' | 'vertical')
const _invalidButtonGroupOrientation: ButtonGroupFieldsRxData = {
    buttonGroupOrientation: 'diagonal',
};

// Test: Invalid enum value for radioOrientation
// @ts-expect-error - 'grid' is not a valid radioOrientation (only 'horizontal' | 'vertical' | 'row')
const _invalidRadioOrientation: RadioGroupFieldsRxData = {
    radioOrientation: 'grid',
};

// Test: Invalid enum value for checkboxLabelPlacement
// @ts-expect-error - 'above' is not a valid checkboxLabelPlacement (only 'bottom' | 'end' | 'start' | 'top')
const _invalidCheckboxPlacement: CheckboxFieldsRxData = {
    checkboxLabelPlacement: 'above',
};

// Test: Wrong type for dialogAutoClose (should be number, not string)
// @ts-expect-error - dialogAutoClose must be a number (milliseconds)
const _invalidDialogAutoClose: DialogFieldsRxData = {
    dialogAutoClose: '5000',
};

// Test: Invalid enum value for colorLightType
// @ts-expect-error - 'cmyk' is not a valid colorLightType (only 'rgb' | 'hsv' | 'cct')
const _invalidColorLightType: Light2FieldsRxData = {
    colorLightType: 'cmyk',
};

// Export negative test cases to avoid unused variable warnings
export {
    _invalidGaugeType,
    _invalidSliderOrientation,
    _invalidLight2OidType,
    _invalidButtonGroupOrientation,
    _invalidRadioOrientation,
    _invalidCheckboxPlacement,
    _invalidDialogAutoClose,
    _invalidColorLightType,
};
