// import ChannelDetector from "@iobroker/type-detector";
import React from "react";
import Generic from "../Generic";
// import CollectionDivider from "../components/CollectionDivider";
import CollectionGroupAttributes from "../components/CollectionGroupAttributes";
import CollectionGroupCommonAttributes from "../components/CollectionGroupCommonAttributes";
import withCollectionProvider from "../components/withCollectionProvider";
import ButtonGroupCollection from "./ButtonGroupCollection";

class ButtonGroupCollectionWidget extends Generic {
	static getWidgetInfo() {
		return {
			id: "tplButtonGroupCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visName: "ButtonGroupCollectionWidget", // Name of widget
			visWidgetLabel: "button_group_collection_widget", // Label for widget
			visAttrs: [
				CollectionGroupCommonAttributes(),
				{
					name: "buttonGroup",
					label: "button_group",
					fields: [
						{
							name: "onlyIcon",
							type: "checkbox",
							label: "only_icon",
							// hidden: "!!data.onlyTransparent",
						},
						{
							name: "buttonGroupVariant",
							label: "button_group_variant",
							type: "select",
							options: [
								{ value: "text", label: "button_group_text" },
								{ value: "outlined", label: "button_group_outlined" },
							],
							default: "text",
						},
						{
							name: "buttonGroupOrientation",
							label: "button_group_orientation",
							type: "select",
							options: [
								{ value: "horizontal", label: "horizontal" },
								{ value: "vertical", label: "vertical" },
							],
							default: "horizontal",
						},
						{
							name: "buttonGroupColor",
							label: "button_group_color",
							type: "color",
						},
					],
				},
				CollectionGroupAttributes("active"),
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
			visPrev:
				"widgets/vis-2-widgets-collection/img/prev-collection-button-group.png",
		};
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		// console.log("inside getWidgetInfo");

		return ButtonGroupCollectionWidget.getWidgetInfo();
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
			...props,
			// state: this.state,
			setState: this.setState.bind(this),
			isSignalVisible: this.isSignalVisible.bind(this),
			getPropertyValue: this.getPropertyValue.bind(this),
			setValue: this.setValue,
			mode: this.props.context.themeType,
			rxData: this.state.rxData,
			rxStyle: this.state.rxStyle,
			values: this.state.values,
			socket: this.props.context.socket,
			oidObject: this.state.oidObject,
			theme: this.props.context.theme,
			refService: this.refService,
		};

		this.wrappedContent = true;

		if (props.widget.data.noCard || props.widget.usedInWidget) {
			return withCollectionProvider(
				<ButtonGroupCollection />,
				collectionContext,
			);
		}

		return withCollectionProvider(
			this.wrapContent(<ButtonGroupCollection />),
			collectionContext,
		);
	}
}

export default ButtonGroupCollectionWidget;