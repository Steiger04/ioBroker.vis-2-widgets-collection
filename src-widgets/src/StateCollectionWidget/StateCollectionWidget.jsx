import React from "react";
// import { Paper } from "@mui/material";
import Generic from "../Generic";
import withCollectionProvider from "../components/withCollectionProvider";
import StateCollection from "./StateCollection";

class StateCollectionWidget extends Generic {
	/* constructor(props) {
		super(props);
		// console.log("StateCollectionWidget inside constructor -> props", props);
		// console.log("THIS", this);
	} */

	static getWidgetInfo() {
		const oidChangeHandlerAsync = async (field, data, changeData, socket) => {
			/* console.log(
				"inside oidChangeHandlerAsync -> field",
				field,
				"data",
				data,
				"changeData",
				changeData,
				"socket",
				socket,
			); */

			if (data.oid) {
				const object = await socket.getObject(data.oid);

				data.write = object?.common?.write;
				data.noButton = !object?.common?.write;
				data.unit = object?.common?.unit || "";

				if (object?.common?.states) {
					if (Array.isArray(object.common.states)) {
						// convert to {'state1': 'state1', 'state2': 'state2', ...}
						const states = {};
						object.common.states.forEach((state) => {
							states[state] = state;
						});
						object.common.states = states;
					}
					// console.log("object.common.states", object.common.states);
					data.values_count = Object.keys(object.common.states).length;
					data.withStates = true;
					data.withNumber = false;
					Object.keys(object.common.states).forEach((state, index) => {
						data[`value${index + 1}`] = object.common.states[state];
					});
					// data.type = object.common.type;
					// data.write = object.common.write;
					// data.noButton = !object.common.write;
					changeData(data);
				} else if (object?.common) {
					data.withNumber = object.common.type === "number";
					data.withStates = false;
					data.values_count = 0;
					// data.type = object.common.type;
					// data.write = object.common.write;
					// data.noButton = !object.common.write;
					changeData(data);
				}
			} else {
				data.write = false;
				data.noButton = true;
				changeData(data);
			}
		};

		return {
			id: "tplStateCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visSetColor: "#462E75", // Color of a widget set. it is enough to set color only in one widget of a set
			visName: "StateCollectionWidget", // Name of widget
			visWidgetLabel: "state_collection_widget", // Label for widget
			visAttrs: [
				{
					name: "common", // group name
					fields: [
						{
							name: "noButton",
							type: "checkbox",
							label: "no_button",
							disabled: "!data.write",
							default: "!data.write",
						},
						{
							name: "oid",
							type: "id",
							label: "oid",
							onChange: oidChangeHandlerAsync,
						},
						{
							name: "unit",
							label: "unit",
							type: "text",
							default: "",
						},
						{
							name: "values_count",
							type: "number",
							/* hidden:
								"!data.withStates || data.type !== 'number' && data.type !== 'string'", */
							default: 0,
							label: "values_count",
						},
						{
							name: "noCard",
							label: "without_card",
							type: "checkbox",
						},
						{
							name: "buttonElevation",
							label: "button_elevation",
							type: "slider",
							min: 0,
							max: 24,
							step: 1,
							default: 4,
						},
						{
							name: "outlined",
							label: "outlined",
							type: "checkbox",
						},
						{
							name: "squaredCorner",
							label: "squared_corner",
							type: "checkbox",
						},
						{
							name: "noIcon",
							type: "checkbox",
							label: "no_icon",
							hidden: "!!data.onlyIcon",
						},
						{
							name: "onlyIcon",
							type: "checkbox",
							label: "only_icon",
							hidden: "!!data.noIcon",
						},
						{
							name: "square",
							label: "square",
							type: "checkbox",
							hidden: "data.circle || data.ellipse",
						},
						{
							name: "ellipse",
							label: "ellipse",
							type: "checkbox",
							hidden: "data.circle || data.square",
						},
						{
							name: "circle",
							label: "circle",
							type: "checkbox",
							hidden: "data.ellipse || data.square",
						},
						{
							name: "buttonPadding",
							label: "button_padding",
							type: "slider",
							min: 0,
							max: 10,
							step: 0.1,
							default: 1,
						},
					],
				},
				{
					name: "on",
					label: "group_on",
					fields: [
						{
							name: "iconOn",
							label: "icon",
							// type: "icon64",
							type: "image",
							// hidden: '!!data.noIcon || !!data.iconSmall',
							hidden: "data.noIcon",
						},
						{
							name: "iconSizeOn",
							label: "icon_size",
							type: "slider",
							min: 1,
							max: 200,
							default: 100,
							step: 1,
							hidden: "!data.iconOn || data.noIcon",
						},
						{
							name: "iconColorOn",
							label: "icon_color",
							type: "color",
							hidden: "!data.iconOn || data.noIcon",
						},
						{
							name: "iconHoverOn",
							label: "icon_hover",
							type: "slider",
							min: 0,
							max: 300,
							default: 200,
							step: 1,
							hidden: "!data.iconOn || data.noIcon",
						},
						{
							name: "textColorOn",
							label: "text_color",
							type: "color",
						},
						{
							name: "headerOn",
							label: "header",
							type: "text",
							default: "",
						},
						{
							name: "headerSizeOn",
							label: "header_size",
							type: "slider",
							min: 0,
							max: 500,
							default: 100,
							step: 1,
						},
						{
							name: "valueOn",
							label: "value",
							type: "text",
							default: "",
						},
						{
							name: "valueSizeOn",
							label: "value_size",
							type: "slider",
							min: 0,
							max: 500,
							default: 100,
							step: 1,
						},
						{
							name: "backgroundColorOn",
							label: "background_color",
							type: "color",
						},
						{
							name: "backgroundOn",
							label: "background",
							type: "text",
							default: "",
						},
					],
				},
				{
					name: "off",
					label: "group_off",
					fields: [
						{
							name: "iconOff",
							label: "icon",
							// type: "icon64",
							type: "image",
							hidden: "data.noIcon",
							// hidden: '!!data.noIcon || !!data.iconSmall',
						},
						{
							name: "iconSizeOff",
							label: "icon_size",
							type: "slider",
							min: 1,
							max: 200,
							default: 100,
							step: 1,
							hidden: "!data.iconOff || data.noIcon",
						},
						{
							name: "iconColorOff",
							label: "icon_color",
							type: "color",
							hidden: "!data.iconOff || data.noIcon",
						},
						{
							name: "iconHoverOff",
							label: "icon_hover",
							type: "slider",
							min: 0,
							max: 300,
							default: 200,
							step: 1,
							hidden: "!data.iconOff || data.noIcon",
						},
						{
							name: "textColorOff",
							label: "text_color",
							type: "color",
						},
						{
							name: "headerOff",
							label: "header",
							type: "text",
							default: "",
						},
						{
							name: "headerSizeOff",
							label: "header_size",
							type: "slider",
							min: 0,
							max: 500,
							default: 100,
							step: 1,
						},
						{
							name: "valueOff",
							label: "value",
							type: "text",
							default: "",
						},
						{
							name: "valueSizeOff",
							label: "value_size",
							type: "slider",
							min: 0,
							max: 500,
							default: 100,
							step: 1,
						},
						{
							name: "backgroundColorOff",
							label: "background_color",
							type: "color",
						},
						{
							name: "backgroundOff",
							label: "background",
							type: "text",
							default: "",
						},
					],
				},
				{
					name: "values",
					label: "values",
					indexFrom: 1,
					indexTo: "values_count",
					fields: [
						{
							name: "icon",
							label: "icon",
							// type: "icon64",
							type: "image",
							// hidden: '!!data.noIcon || !!data.iconSmall',
							hidden: "data.noIcon",
						},
						{
							name: "iconSize",
							label: "icon_size",
							type: "slider",
							min: 1,
							max: 200,
							default: 100,
							step: 1,
							hidden: (data, i) => !data[`icon${i}`] || data.noIcon,
						},
						{
							name: "iconColor",
							label: "icon_color",
							type: "color",
							hidden: (data, i) => !data[`icon${i}`] || data.noIcon,
						},
						{
							name: "iconHover",
							label: "icon_hover",
							type: "slider",
							min: 0,
							max: 300,
							default: 200,
							step: 1,
							hidden: (data, i) => !data[`icon${i}`] || data.noIcon,
						},
						{
							name: "textColor",
							label: "text_color",
							type: "color",
						},
						{
							name: "header",
							label: "header",
							type: "text",
							default: "",
						},
						{
							name: "headerSize",
							label: "header_size",
							type: "slider",
							min: 0,
							max: 500,
							default: 100,
							step: 1,
						},
						{
							name: "value",
							label: "value",
							type: "text",
							default: "",
						},
						{
							name: "valueSize",
							label: "value_size",
							type: "slider",
							min: 0,
							max: 500,
							default: 100,
							step: 1,
						},
						{
							name: "backgroundColor",
							label: "background_color",
							type: "color",
						},
						{
							name: "background",
							label: "background",
							type: "text",
							default: "",
						},
					],
				},
				// check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
			],
			visDefaultStyle: {
				width: "100%",
				height: "100px",
				position: "relative",
			},
			visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png",
		};
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		// console.log("inside getWidgetInfo");

		return StateCollectionWidget.getWidgetInfo();
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
		// console.log("inside onRxDataChanged", payload);
		await this.propertiesUpdate();
	}

	// This function is called every time when rxStyle is changed
	// eslint-disable-next-line class-methods-use-this
	onRxStyleChanged() {
		// console.log("inside onRxStyleChanged");
	}

	// This function is called every time when some Object State updated, but all changes lands into this.state.values too
	// eslint-disable-next-line class-methods-use-this, no-unused-vars
	onStateUpdated(id, state) {
		// console.log("inside onStateUpdated");
		// console.log("id", id);
		// console.log("this.state.oidObject", this.state.oidObject);
	}

	async componentDidMount() {
		// console.log("inside componentDidMount");
		super.componentDidMount();
		// Update data
		await this.propertiesUpdate();
	}

	renderWidgetBody(props) {
		// console.log("inside renderWidgetBody", props);
		super.renderWidgetBody(props);
		// console.log("props", props);

		/* const actualRxData = JSON.stringify(this.state.rxData);
		if (this.lastRxData !== actualRxData) {
			this.updateTimeout =
				this.updateTimeout ||
				setTimeout(async () => {
					this.updateTimeout = null;
					await this.propertiesUpdate();
				}, 50);
		} */

		// console.log("inside renderWidgetBody --> props", props);
		// console.log("inside renderWidgetBody --> this", this);
		// console.log("inside renderWidgetBody --> theme", this.props.context.theme);

		/* if (!props.style.height) {
			props.style.height = "auto";
		}

		if (!props.style.width) {
			props.style.width = "auto";
		} */

		const collectionContext = {
			...props,
			t: (text) => StateCollectionWidget.t(text),
			// state: this.state,
			// setState: this.setState.bind(this),
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
		};

		this.wrappedContent = true;

		if (props.widget.data.noCard || props.widget.usedInWidget) {
			return withCollectionProvider(<StateCollection />, collectionContext);
		}

		return withCollectionProvider(
			this.wrapContent(<StateCollection />),
			collectionContext,
		);
	}
}

export default StateCollectionWidget;
