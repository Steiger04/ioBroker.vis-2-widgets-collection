import React from "react";
// import { Paper } from "@mui/material";
import Generic from "../Generic";
import CollectionCommonAttributes from "../components/CollectionCommonAttributes";
import withCollectionProvider from "../components/withCollectionProvider";
import StateCollection from "./StateCollection";

class StateCollectionWidget extends Generic {
	/* constructor(props) {
		super(props);
		// console.log("StateCollectionWidget inside constructor -> props", props);
		// console.log("THIS", this);
	} */

	static getWidgetInfo() {
		return {
			id: "tplStateCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visSetColor: "#462E75", // Color of a widget set. it is enough to set color only in one widget of a set
			visName: "StateCollectionWidget", // Name of widget
			visWidgetLabel: "state_collection_widget", // Label for widget
			visAttrs: [
				CollectionCommonAttributes(),
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
							name: "noIcon",
							type: "checkbox",
							label: "no_icon",
							// hidden: "!!data.onlyTransparent",
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
