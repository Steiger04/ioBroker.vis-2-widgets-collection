import React from "react";
import Generic from "../Generic";
import CollectionDivider from "../components/CollectionDivider";
import CollectionGroupAttributes from "../components/CollectionGroupAttributes";
import CollectionGroupCommonAttributes from "../components/CollectionGroupCommonAttributes";
import withCollectionProvider from "../components/withCollectionProvider";
import ListCollection from "./ListCollection";

class ListCollectionWidget extends Generic {
	static getWidgetInfo() {
		return {
			id: "tplListCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visName: "ListCollectionWidget", // Name of widget
			visWidgetLabel: "list_collection_widget", // Label for widget
			visAttrs: [
				CollectionGroupCommonAttributes(["string", "number", "boolean"]),
				{
					name: "button", // group name
					label: "group_button",
					fields: [
						{
							name: "noButton",
							type: "checkbox",
							label: "no_button",
							disabled: "!data.write",
							default: "!data.write",
							hidden: "!data.write",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
						},
						{
							name: "onlyStates",
							type: "checkbox",
							label: "only_states",
							default: false,
							hidden: "!data.values_count",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
						},
						{
							name: "noIcon",
							type: "checkbox",
							label: "no_icon",
						},
						{
							name: "noValue",
							type: "checkbox",
							label: "no_value",
						},
					],
				},
				// CollectionGroupAttributes("on"),
				// CollectionGroupAttributes("off"),
				CollectionGroupAttributes("values"),
				// check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
			],
			visDefaultStyle: {
				width: "100%",
				height: "100px",
				position: "relative",
			},
			visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-list.png",
		};
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		return ListCollectionWidget.getWidgetInfo();
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

		// console.log("inside propertiesUpdate", this.state.values);

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
			this.wrapContent(<ListCollection />),
			collectionContext,
		);
	}
}

export default ListCollectionWidget;
