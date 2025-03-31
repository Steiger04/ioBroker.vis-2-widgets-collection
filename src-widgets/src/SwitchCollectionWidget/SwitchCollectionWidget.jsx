import React from "react";
import Generic from "../Generic";
import withCollectionProvider from "../components/withCollectionProvider";
import commonFields from "../lib/commonFields";
import commonObjectFields from "../lib/commonObjectFields";
import delayFields from "../lib/delayFields";
import switchFields from "../lib/switchFields";
import SwitchCollection from "./SwitchCollection";

class SwitchCollectionWidget extends Generic {
	static getWidgetInfo() {
		return {
			id: "tplSwitchCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visName: "SwitchCollectionWidget", // Name of widget
			visWidgetLabel: "switch_collection_widget", // Label for widget
			visOrder: 2,
			visAttrs: [
				// CollectionGroupCommonAttributes(["boolean"]),
				{
					name: "common", // group name
					fields: [...commonFields()],
				},
				{
					name: "switch",
					label: "group_switch",
					fields: [
						...commonObjectFields(["boolean"]),
						...delayFields(),
						...switchFields(),
					],
				},
				{
					name: "values",
					label: "values",
					indexFrom: 1,
					indexTo: "values_count",
					fields: [...commonFields({ groupName: "", allFields: false })],
				},

				// check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
			],
			visDefaultStyle: {
				width: "100%",
				height: "100px",
				position: "relative",
			},
			visPrev:
				"widgets/vis-2-widgets-collection/img/prev-collection-switch.png",
		};
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		return SwitchCollectionWidget.getWidgetInfo();
	}

	// eslint-disable-next-line class-methods-use-this
	async propertiesUpdate() {
		// The widget has 3 important states
		// 1. this.state.values - contains all state values, that are used in widget (automatically collected from widget info).
		//                        So you can use `this.state.values[this.state.rxData.oid + '.val']` to get the value of state with id this.state.rxData.oid
		// 2. this.state.rxData - contains all widget data with replaced bindings. E.g. if this.state.data.type is `{system.adapter.admin.0.alive}`,
		//                        then this.state.rxData.type will have state value of `system.adapter.admin.0.alive`
		// 3. this.state.rxStyle - contains all widget styles with replaced bindings. E.g. if this.state.styles.width is `{javascript.0.width}px`,
		//                        then this.state.rxData.type will have state value of `javascript.0.width` + 'px
		const actualRxData = JSON.stringify(this.state.rxData);
		if (this.lastRxData === actualRxData) {
			return;
		}
		this.lastRxData = actualRxData;

		await this.createStateObjectAsync("oid");
	}

	// This function is called every time when rxData is changed
	async onRxDataChanged(payload) {
		await this.propertiesUpdate();
	}

	// This function is called every time when rxStyle is changed
	// eslint-disable-next-line class-methods-use-this
	onRxStyleChanged() {}

	// This function is called every time when some Object State updated, but all changes lands into this.state.values too
	// eslint-disable-next-line class-methods-use-this, no-unused-vars
	onStateUpdated(id, state) {}

	async componentDidMount() {
		super.componentDidMount();
		// Update data
		await this.propertiesUpdate();
	}

	renderWidgetBody(props) {
		super.renderWidgetBody(props);

		const collectionContext = {
			id: props.id,
			refService: props.refService,
			style: props.style,
			widget: {
				...props.widget,
				data: this.state.rxData,
				style: this.state.rxStyle,
			},
			setValue: this.setValue,
			setState: this.setState.bind(this),
			oidObject: this.state.oidObject,
			values: this.state.values,
			isSignalVisible: this.isSignalVisible.bind(this),
			getPropertyValue: this.getPropertyValue.bind(this),
			mode: this.props.context.themeType,
			socket: this.props.context.socket,
			theme: this.props.context.theme,

			wrappedContent: this.wrappedContent,
		};

		if (props.widget.data.noCard || props.widget.usedInWidget) {
			this.wrappedContent = false;
		} else {
			this.wrappedContent = true;
		}

		return withCollectionProvider(
			this.wrapContent(<SwitchCollection />),
			collectionContext,
		);
	}
}

export default SwitchCollectionWidget;
