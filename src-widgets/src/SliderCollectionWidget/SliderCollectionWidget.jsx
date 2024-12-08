// import ChannelDetector from "@iobroker/type-detector";
import React from "react";
import Generic from "../Generic";
import CollectionDivider from "../components/CollectionDivider";
import CollectionGroupAttributes from "../components/CollectionGroupAttributes";
import CollectionGroupCommonAttributes from "../components/CollectionGroupCommonAttributes";
import withCollectionProvider from "../components/withCollectionProvider";
import SliderCollection from "./SliderCollection";

class SliderCollectionWidget extends Generic {
	/* constructor(props) {
		super(props);
		// console.log("StateCollectionWidget inside constructor -> props", props);
		// console.log("THIS", this);
	} */

	static getWidgetInfo() {
		return {
			id: "tplSliderCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			// visSetColor: "#462E75", // Color of a widget set. it is enough to set color only in one widget of a set
			visName: "SliderCollectionWidget", // Name of widget
			visWidgetLabel: "slider_collection_widget", // Label for widget
			visAttrs: [
				CollectionGroupCommonAttributes(),
				{
					name: "slider",
					label: "group_slider",
					fields: [
						{
							name: "sliderSize",
							label: "slider_size",
							type: "select",
							options: [
								{ value: "small", label: "slider_small" },
								{ value: "medium", label: "slider_medium" },
							],
							default: "medium",
						},
						{
							name: "sliderOrientation",
							label: "slider_orientation",
							type: "select",
							options: [
								{ value: "horizontal", label: "horizontal" },
								{ value: "vertical", label: "vertical" },
							],
							default: "horizontal",
						},
						{
							name: "valueLabelDisplay",
							label: "value_label_display",
							type: "select",
							options: [
								{ value: "on", label: "label_on" },
								{ value: "off", label: "label_off" },
								{ value: "auto", label: "label_auto" },
							],
							default: "off",
						},
						{
							name: "labelPosition",
							label: "label_position",
							type: "text",
							default: "-5px",
							hidden: "data.valueLabelDisplay === 'off'",
						},
						{
							name: "sliderColor",
							label: "slider_color",
							type: "color",
						},
						{
							type: "custom",
							component: () => <CollectionDivider dividerText="values" />,
						},
						{
							name: "minValue",
							type: "number",
							label: "min_value",
							default: 0,
						},
						{
							name: "maxValue",
							type: "number",
							label: "max_value",
							default: 100,
						},
						{
							name: "step",
							type: "number",
							label: "step",
							default: 10,
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
							hidden: "!data.values_count",
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
							component: () => <CollectionDivider dividerText="marks" />,
						},
						{
							name: "marks",
							type: "checkbox",
							label: "marks",
							default: false,
							// hidden: "data.onlyStates",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
							hidden: "!data.marks",
						},
						{
							name: "markPosition",
							label: "mark_position",
							type: "text",
							default: "30px",
							hidden: "!data.marks",
						},
						{
							name: "markStep",
							type: "number",
							label: "mark_step",
							default: 10,
							hidden: "!data.marks",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
							hidden: "!data.marks",
						},
						{
							name: "markerTextColor",
							label: "text_color",
							type: "color",
							hidden: "!data.marks",
						},
						{
							name: "markerTextSize",
							label: "marker_text_size",
							type: "slider",
							min: 0,
							max: 100,
							default: 80,
							step: 1,
							hidden: "!data.marks",
						},
						{
							type: "custom",
							component: () => <CollectionDivider dividerText="icon" />,
						},
						{
							name: "iconMin",
							label: "icon_min",
							// type: "icon64",
							type: "image",
						},
						{
							name: "iconSizeStart",
							label: "icon_size",
							type: "text",
							default: "24px",
						},
						{
							name: "startIconColor",
							label: "icon_color",
							type: "color",
							hidden: "!data.iconMin",
						},
						{
							type: "custom",
							component: () => <CollectionDivider dividerText="icon" />,
						},
						{
							name: "iconMax",
							label: "icon_max",
							// type: "icon64",
							type: "image",
						},
						{
							name: "iconSizeEnd",
							label: "icon_size",
							type: "text",
							default: "24px",
						},
						{
							name: "endIconColor",
							label: "icon_color",
							type: "color",
							hidden: "!data.iconMax",
						},
					],
				},
				CollectionGroupAttributes("on"),
				CollectionGroupAttributes("off"),
				CollectionGroupAttributes("values"),

				// check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
			],
			visDefaultStyle: {
				width: "100%",
				height: "100px",
				position: "relative",
			},
			visPrev:
				"widgets/vis-2-widgets-collection/img/prev-collection-slider.png",
		};
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		// console.log("inside getWidgetInfo");

		return SliderCollectionWidget.getWidgetInfo();
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

		/* const detector = new ChannelDetector();

		const keys = Object.keys(window.vis.objects); // For optimization
		const usedIds = []; // To not allow using of same ID in more than one device
		const ignoreIndicators = ["UNREACH_STICKY"]; // Ignore indicators by name
		// const allowedTypes = ["rgb"]; // Supported types. Leave it null if you want to get ALL devices.

		const options = {
			objects: window.vis.objects, // All objects
			id: "milight-smart-light.0.Test_Lichter_Gr_2.fullColor-3", // Channel, device or state, that must be detected
			_keysOptional: keys,
			_usedIdsOptional: usedIds,
			ignoreIndicators,
			//    allowedTypes,
		};

		const controls = detector.detect(options);

		console.log("controls", controls); */
	}

	renderWidgetBody(props) {
		super.renderWidgetBody(props);
		// console.log("inside renderWidgetBody", props);

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
			return withCollectionProvider(<SliderCollection />, collectionContext);
		}

		return withCollectionProvider(
			this.wrapContent(<SliderCollection />),
			collectionContext,
		);
	}
}

export default SliderCollectionWidget;
