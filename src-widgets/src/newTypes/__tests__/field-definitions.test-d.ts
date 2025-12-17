/**
 * Type tests for field definitions.
 * These tests verify compile-time type correctness using tsd.
 *
 * Run with: npm run test:types
 */

import { expectType, expectAssignable } from 'tsd';
import type { CommonFieldsRxData } from '../field-definitions/common-fields';
import type { BaseFieldsRxData } from '../field-definitions/base-fields';
import type { CommonObjectFieldsRxData, AllowedType } from '../field-definitions/common-object-fields';
import type { FieldDefinitions } from '../field-definitions';

// ============================================================================
// BaseFieldsRxData Tests
// ============================================================================

describe('BaseFieldsRxData', () => {
    const data: BaseFieldsRxData = {};

    describe('Static base properties used in CollectionBase', () => {
        // Layout properties
        expectType<boolean | undefined>(data.noHeader);
        expectType<boolean | undefined>(data.noHeaderIcon);
        expectType<boolean | undefined>(data.noFooter);
        expectType<boolean | undefined>(data.noCard);
        expectType<boolean | undefined>(data.squaredCorner);
        expectType<boolean | undefined>(data.outlined);
        expectType<boolean | undefined>(data.outlinedFrame);

        // Geometry properties
        expectType<number | undefined>(data.basePadding);
        expectType<number | undefined>(data.baseElevation);
        expectType<boolean | undefined>(data.square);
        expectType<boolean | undefined>(data.ellipse);
        expectType<boolean | undefined>(data.circle);

        // Style properties
        expectType<string | undefined>(data.textColor);
        expectType<string | undefined>(data.textColorActive);
        expectType<string | undefined>(data.background);
        expectType<string | undefined>(data.backgroundColor);
        expectType<string | undefined>(data.backgroundActive);
        expectType<string | undefined>(data.backgroundColorActive);
        expectType<string | undefined>(data.frameBackground);
        expectType<string | undefined>(data.frameBackgroundColor);
        expectType<string | undefined>(data.frameBackgroundActive);
        expectType<string | undefined>(data.frameBackgroundColorActive);

        // Content properties
        expectType<string | number | undefined>(data.header);
        expectType<number | string | undefined>(data.headerSize);
        expectType<string | number | undefined>(data.footer);
        expectType<number | string | undefined>(data.footerSize);
        expectType<number | string | undefined>(data.valueSize);

        // Icon properties
        expectType<string | number | undefined>(data.icon);
        expectType<string | number | undefined>(data.iconSmall);
        expectType<number | undefined>(data.iconSize);
        expectType<string | undefined>(data.iconColor);
        expectType<number | undefined>(data.iconHover);
        expectType<string | undefined>(data.iconXOffset);
        expectType<string | undefined>(data.iconYOffset);
        expectType<boolean | undefined>(data.noIcon);

        // Behavior properties
        expectType<boolean | undefined>(data.noValue);
        expectType<boolean | undefined>(data.onlyDisplay);

        // Value properties
        expectType<string | undefined>(data.alias);
        expectType<string | number | undefined>(data.value);
    });
});

// ============================================================================
// CommonFieldsRxData Tests
// ============================================================================

describe('CommonFieldsRxData', () => {
    const data: CommonFieldsRxData = {};

    // ========================================
    // Icon Properties
    // ========================================

    describe('Icon properties with numeric indices', () => {
        // Should accept numbered properties
        expectType<string | undefined>(data.alias1);
        expectType<string | undefined>(data.alias2);
        expectType<string | undefined>(data.alias999);

        expectType<string | number | undefined>(data.iconSmall1);
        expectType<string | number | undefined>(data.icon1);
        expectType<string | number | undefined>(data.iconHover1);

        expectType<number | undefined>(data.iconSize1);
        expectType<number | undefined>(data.iconSize10);

        expectType<string | undefined>(data.iconColor1);
        expectType<string | undefined>(data.iconColor5);

        expectType<number | undefined>(data.iconXOffset1);
        expectType<number | undefined>(data.iconYOffset1);
    });

    // ========================================
    // Header Properties
    // ========================================

    describe('Header properties', () => {
        expectType<boolean | undefined>(data.noHeader1);
        expectType<boolean | undefined>(data.noHeaderIcon1);
        expectType<string | undefined>(data.header1);
        expectType<number | undefined>(data.headerSize1);
    });

    // ========================================
    // Value Properties
    // ========================================

    describe('Value properties', () => {
        expectType<number | undefined>(data.valueSize1);
        expectType<ioBroker.StateValue | undefined>(data.value1);
    });

    // ========================================
    // Footer Properties
    // ========================================

    describe('Footer properties', () => {
        expectType<boolean | undefined>(data.noFooter1);
        expectType<string | undefined>(data.footer1);
        expectType<number | undefined>(data.footerSize1);
    });

    // ========================================
    // Card Properties
    // ========================================

    describe('Card properties', () => {
        expectType<boolean | undefined>(data.noCard1);
        expectType<boolean | undefined>(data.squaredCorner1);
        expectType<string | undefined>(data.textColor1);
        expectType<boolean | undefined>(data.outlined1);
        expectType<boolean | undefined>(data.outlinedFrame1);
    });

    // ========================================
    // Base Properties
    // ========================================

    describe('Base properties', () => {
        expectType<number | undefined>(data.basePadding1);
        expectType<number | undefined>(data.baseElevation1);
    });

    // ========================================
    // Geometry Properties
    // ========================================

    describe('Geometry properties', () => {
        expectType<boolean | undefined>(data.square1);
        expectType<boolean | undefined>(data.ellipse1);
        expectType<boolean | undefined>(data.circle1);
    });

    // ========================================
    // Background Properties
    // ========================================

    describe('Background properties', () => {
        expectType<string | undefined>(data.background1);
        expectType<string | undefined>(data.backgroundColor1);
        expectType<string | undefined>(data.frameBackground1);
        expectType<string | undefined>(data.frameBackgroundColor1);
    });

    // ========================================
    // Label Properties
    // ========================================

    describe('Label properties', () => {
        expectType<string | undefined>(data.label1);
        expectType<number | undefined>(data.fontSize1);
    });

    // ========================================
    // Static Properties
    // ========================================

    describe('Static signal properties', () => {
        expectType<number | undefined>(data['signals-count']);
        expectType<string | undefined>(data['signals-color-1']);
        expectType<string | undefined>(data['signals-color-10']);
    });

    // ========================================
    // Type Assignment Tests
    // ========================================

    describe('Valid assignments', () => {
        const validData: CommonFieldsRxData = {
            alias1: 'Living Room',
            icon1: 'mdi-thermometer',
            iconSize1: 32,
            iconColor1: '#FF5722',
            header1: 'Temperature',
            headerSize1: 18,
            value1: '22.5°C',
            valueSize1: 24,
            footer1: 'Last updated: now',
            footerSize1: 12,
            backgroundColor1: '#2196F3',
            'signals-count': 3,
            'signals-color-1': '#4CAF50',
        };

        expectAssignable<CommonFieldsRxData>(validData);
    });
});

// ============================================================================
// CommonObjectFieldsRxData Tests
// ============================================================================

describe('CommonObjectFieldsRxData', () => {
    // ========================================
    // Static Properties
    // ========================================

    describe('Required static properties', () => {
        const minimalData: CommonObjectFieldsRxData = {
            oid: 'javascript.0.temperature',
            unit: '°C',
            values_count: 1,
        };

        expectType<string>(minimalData.oid);
        expectType<string>(minimalData.unit);
        expectType<number>(minimalData.values_count);

        expectAssignable<CommonObjectFieldsRxData>(minimalData);
    });

    describe('Optional static properties', () => {
        const fullData: CommonObjectFieldsRxData = {
            oid: 'javascript.0.temperature',
            unit: '°C',
            values_count: 2,
            icon: 'mdi-thermometer',
            write: false,
            onlyDisplay: true,
            minValue: 0,
            maxValue: 100,
            oidObject: {
                _id: 'javascript.0.temperature',
                name: 'Temperature Sensor',
                type: 'number',
                unit: '°C',
                write: false,
            },
        };

        expectType<string | null | undefined>(fullData.icon);
        expectType<boolean | undefined>(fullData.write);
        expectType<boolean | undefined>(fullData.onlyDisplay);
        expectType<number | undefined>(fullData.minValue);
        expectType<number | undefined>(fullData.maxValue);

        // Test static oidObject property
        expectType<
            | {
                  _id: string;
                  name: string;
                  type: AllowedType;
                  commonStates?: ioBroker.StateCommon['states'];
                  unit?: string;
                  icon?: string | null;
                  write?: boolean;
                  onlyDisplay?: boolean;
                  minValue?: number;
                  maxValue?: number;
              }
            | undefined
        >(fullData.oidObject);

        expectAssignable<CommonObjectFieldsRxData>(fullData);
    });

    // ========================================
    // Dynamic Properties
    // ========================================

    describe('Object metadata with flexible naming', () => {
        const data: CommonObjectFieldsRxData = {
            oid: 'test.0.state',
            unit: '',
            values_count: 1,

            // All these naming patterns should work
            oidObject: {
                _id: 'test.0.state',
                name: 'Test State',
                type: 'number',
                unit: '',
                write: true,
            },
            oid1Object: {
                _id: 'test.0.state1',
                name: 'State 1',
                type: 'boolean',
                unit: '',
            },
            temperatureObject: {
                _id: 'test.0.temp',
                name: 'Temperature',
                type: 'number',
                commonStates: undefined,
                unit: '°C',
                icon: 'mdi-thermometer',
                write: false,
                onlyDisplay: false,
                minValue: 0,
                maxValue: 50,
            },
        };

        expectType<
            | {
                  _id: string;
                  name: string;
                  type: AllowedType;
                  commonStates?: ioBroker.StateCommon['states'];
                  unit: string;
                  icon?: string | null;
                  write?: boolean;
                  onlyDisplay?: boolean;
                  minValue?: number;
                  maxValue?: number;
              }
            | undefined
        >(data.oidObject);

        expectType<
            | {
                  _id: string;
                  name: string;
                  type: AllowedType;
                  commonStates?: ioBroker.StateCommon['states'];
                  unit: string;
                  icon?: string | null;
                  write?: boolean;
                  onlyDisplay?: boolean;
                  minValue?: number;
                  maxValue?: number;
              }
            | undefined
        >(data.temperatureObject);
    });

    describe('Dynamic alias properties', () => {
        const data: CommonObjectFieldsRxData = {
            oid: 'test.0.state',
            unit: '',
            values_count: 3,
            alias1: 'Living Room',
            alias2: 'Bedroom',
            alias999: 'Storage',
        };

        expectType<string | undefined>(data.alias1);
        expectType<string | undefined>(data.alias2);
        expectType<string | undefined>(data.alias999);
    });

    describe('Dynamic value properties', () => {
        const data: CommonObjectFieldsRxData = {
            oid: 'test.0.state',
            unit: '',
            values_count: 3,
            value1: 22.5,
            value2: true,
            value3: 'Active',
        };

        expectType<string | number | boolean | undefined>(data.value1);
        expectType<string | number | boolean | undefined>(data.value2);
        expectType<string | number | boolean | undefined>(data.value3);
    });
});

// ============================================================================
// AllowedType Tests
// ============================================================================

describe('AllowedType', () => {
    const boolType: AllowedType = 'boolean';
    const numType: AllowedType = 'number';
    const strType: AllowedType = 'string';
    const mixedType: AllowedType = 'mixed';

    expectType<AllowedType>(boolType);
    expectType<AllowedType>(numType);
    expectType<AllowedType>(strType);
    expectType<AllowedType>(mixedType);

    // Should not accept invalid types
    // expectError<AllowedType>('invalid');  // Uncomment when tsd supports this
});

// ============================================================================
// FieldDefinitions Registry Tests
// ============================================================================

describe('FieldDefinitions', () => {
    type CommonFields = FieldDefinitions['common'];
    type ObjectFields = FieldDefinitions['commonObject'];

    // Verify registry structure
    expectType<typeof import('../field-definitions/common-fields')>({} as any as CommonFields);
    expectType<typeof import('../field-definitions/common-object-fields')>({} as any as ObjectFields);
});

// ============================================================================
// Integration Tests
// ============================================================================

describe('Widget data composition', () => {
    interface MyWidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData {
        customProp: string;
        enableFeature: boolean;
    }

    const widgetData: MyWidgetData = {
        // Common fields
        alias1: 'Temperature',
        icon1: 'mdi-thermometer',
        iconSize1: 32,
        header1: 'Living Room',
        value1: '22.5°C',
        backgroundColor1: '#2196F3',

        // Common object fields
        oid: 'javascript.0.temperature',
        unit: '°C',
        values_count: 1,
        write: false,

        // Custom properties
        customProp: 'some-value',
        enableFeature: true,
    };

    expectAssignable<MyWidgetData>(widgetData);
    expectType<string>(widgetData.customProp);
    expectType<boolean>(widgetData.enableFeature);
});

// ============================================================================
// Edge Cases
// ============================================================================

describe('Edge cases', () => {
    describe('Empty data objects', () => {
        const emptyCommon: CommonFieldsRxData = {};
        expectAssignable<CommonFieldsRxData>(emptyCommon);

        const emptyObject: CommonObjectFieldsRxData = {
            oid: '',
            unit: '',
            values_count: 0,
        };
        expectAssignable<CommonObjectFieldsRxData>(emptyObject);
    });

    describe('Large indices', () => {
        const data: CommonFieldsRxData = {
            alias9999: 'Large index',
            icon12345: 'mdi-icon',
            value99999: 'Very large index',
        };

        expectType<string | undefined>(data.alias9999);
        expectType<string | number | undefined>(data.icon12345);
        expectType<ioBroker.StateValue | undefined>(data.value99999);
    });

    describe('Null vs undefined', () => {
        const data: CommonObjectFieldsRxData = {
            oid: 'test.0.state',
            unit: '',
            values_count: 1,
            icon: null, // Explicitly null
        };

        expectType<string | null | undefined>(data.icon);
    });
});
