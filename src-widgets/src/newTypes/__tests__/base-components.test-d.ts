import { expectType, expectAssignable } from 'tsd';
import type { WidgetRegistry, CollectionContextProps } from '../index';
import Generic from '../../Generic';

// Test Generic with WidgetRegistry types
class TestWidget extends Generic<WidgetRegistry['tplStateCollectionWidget']> {
    testMethod() {
        // Should have type-safe access to widget data
        expectType<string | undefined>(this.state.rxData.alias1);
        expectType<string | undefined>(this.state.rxData.oid1);
        expectType<boolean | undefined>(this.state.rxData.onlyStates);
    }
}

// Test withCollectionProvider type compatibility
declare const stateContext: CollectionContextProps<WidgetRegistry['tplStateCollectionWidget']>;
expectAssignable<CollectionContextProps<object>>(stateContext);
