import React from "react";
import Generic from "../Generic";
import CollectionCommonAttributes from "../components/CollectionCommonAttributes";
import CollectionDivider from "../components/CollectionDivider";
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
				CollectionCommonAttributes(),
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
							default: "small",
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
						},
						{
							name: "onlyStates",
							type: "checkbox",
							label: "only_states",
							default: false,
							hidden: "!data.values_count",
						},
						{
							name: "marks",
							type: "checkbox",
							label: "marks",
							default: false,
							hidden: "data.onlyStates",
						},
						{
							name: "markStep",
							type: "number",
							label: "mark_step",
							default: 10,
							hidden: "data.onlyStates || !data.marks",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
						},
						{
							name: "delay",
							type: "number",
							label: "delay",
							default: 300,
							min: 0,
							max: 1000,
							step: 1,
							hidden: "data.sampleInterval",
						},
						{
							name: "sampleInterval",
							type: "checkbox",
							label: "sample_interval",
							default: false,
						},
						{
							name: "sampleIntervalValue",
							type: "number",
							label: "sample_interval_value",
							default: 50,
							min: 0,
							max: 1000,
							step: 1,
							hidden: "!data.sampleInterval",
						},
						{
							type: "custom",
							component: () => <CollectionDivider dividerText="marks" />,
						},
						{
							name: "markerTextColor",
							label: "text_color",
							type: "color",
						},
						{
							name: "markerTextSize",
							label: "marker_text_size",
							type: "slider",
							min: 0,
							max: 100,
							default: 80,
							step: 1,
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
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
							name: "iconXOffsetOn",
							label: "icon_x_offset",
							type: "text",
							default: "0px",
							hidden: "!data.iconOn || data.noIcon",
						},
						{
							name: "iconYOffsetOn",
							label: "icon_y_offset",
							type: "text",
							default: "0px",
							hidden: "!data.iconOn || data.noIcon",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
						},
						{
							name: "textColorOn",
							label: "text_color",
							type: "color",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
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
							type: "custom",
							component: () => <CollectionDivider />,
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
							type: "custom",
							component: () => <CollectionDivider />,
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
							name: "iconXOffsetOff",
							label: "icon_x_offset",
							type: "text",
							default: "0px",
							hidden: "!data.iconOff || data.noIcon",
						},
						{
							name: "iconYOffsetOff",
							label: "icon_y_offset",
							type: "text",
							default: "0px",
							hidden: "!data.iconOff || data.noIcon",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
						},
						{
							name: "textColorOff",
							label: "text_color",
							type: "color",
						},
						{
							type: "custom",
							component: () => <CollectionDivider />,
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
							type: "custom",
							component: () => <CollectionDivider />,
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
							type: "custom",
							component: () => <CollectionDivider />,
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
							name: "iconXOffset",
							label: "icon_x_offset",
							type: "text",
							default: "0px",
							hidden: (data, i) => !data[`icon${i}`] || data.noIcon,
						},
						{
							name: "iconYOffset",
							label: "icon_y_offset",
							type: "text",
							default: "0px",
							hidden: (data, i) => !data[`icon${i}`] || data.noIcon,
						},
						{
							type: "custom",
							label: "",
							component: () => <CollectionDivider />,
						},
						{
							name: "textColor",
							label: "text_color",
							type: "color",
						},
						{
							type: "custom",
							label: "",
							component: () => <CollectionDivider />,
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
							type: "custom",
							label: "",
							component: () => <CollectionDivider />,
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
							type: "custom",
							label: "",
							component: () => <CollectionDivider />,
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
