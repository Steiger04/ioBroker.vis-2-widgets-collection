import CustomTheme from "@iobroker/adapter-react-v5/Theme";
import { Box, CssBaseline, Typography } from "@mui/material";
import {
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from "@mui/material/styles";
import React from "react";

import { VisRxWidget } from "@iobroker/vis-2-widgets-react-dev";

const _theme = createTheme({});

class EmptyCollectionWidget extends (window.visRxWidget || VisRxWidget) {
	static getWidgetInfo() {
		return {
			id: "tplEmptyCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visSetColor: "#cf00ff", // Color of a widget set. it is enough to set color only in one widget of a set
			visName: "EmptyCollectionWidget", // Name of widget
			visWidgetLabel: "empty_collection_widget", // Label for widget
			visAttrs: [
				{
					name: "common", // group name
					fields: [
						{
							name: "noCard",
							label: "without_card",
							type: "checkbox",
						},
						{
							name: "oid",
							type: "id",
							label: "oid",
							onChange: async (field, data, changeData, socket) => {
								console.log("EmptyCollectionWidget changed field", field);
								console.log("EmptyCollectionWidget changed data", data);
								// console.log('EmptyCollectionWidget changed changeData', changeData);
								console.log("EmptyCollectionWidget changed socket", socket);

								if (data.oid) {
									const object = await socket.getObject(data.oid);
									console.log("EmptyCollectionWidget object", object);

									if (object?.common?.states) {
										if (Array.isArray(object.common.states)) {
											// convert to {'state1': 'state1', 'state2': 'state2', ...}
											const states = {};
											object.common.states.forEach((state) => {
												states[state] = state;
											});
											object.common.states = states;
										}
										data.values_count = Object.keys(
											object.common.states,
										).length;
										data.withStates = true;
										data.withNumber = false;
										Object.keys(object.common.states).forEach(
											(state, index) => {
												data[`value${index + 1}`] = object.common.states[state];
											},
										);
										changeData(data);
									} else if (object?.common) {
										data.withNumber = object.common.type === "number";
										data.withStates = false;
										data.values_count = 0;
										changeData(data);
									}
								}
							},
						},
					],
				},
				// check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
			],
			visDefaultStyle: {
				width: "100%",
				height: 100,
				position: "relative",
			},
			visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-demo.png",
		};
	}

	// eslint-disable-next-line class-methods-use-this
	propertiesUpdate() {
		// The widget has 3 important states
		// 1. this.state.values - contains all state values, that are used in widget (automatically collected from widget info).
		//                        So you can use `this.state.values[this.state.rxData.oid + '.val']` to get the value of state with id this.state.rxData.oid
		// 2. this.state.rxData - contains all widget data with replaced bindings. E.g. if this.state.data.type is `{system.adapter.admin.0.alive}`,
		//                        then this.state.rxData.type will have state value of `system.adapter.admin.0.alive`
		// 3. this.state.rxStyle - contains all widget styles with replaced bindings. E.g. if this.state.styles.width is `{javascript.0.width}px`,
		//                        then this.state.rxData.type will have state value of `javascript.0.width` + 'px

		console.log("propertiesUpdate this.state.values", this.state.values);
		console.log("propertiesUpdate this.state.rxData", this.state.rxData);
	}

	componentDidMount() {
		super.componentDidMount();

		// Update data
		this.propertiesUpdate();

		// console.log('EmptyCollectionWidget this', this);
	}

	// To not write before every label "vis_2_widgets_template_" we can use this method
	static getI18nPrefix() {
		return "vis_2_widgets_collection_";
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		return EmptyCollectionWidget.getWidgetInfo();
	}

	// This function is called every time when rxData is changed
	onRxDataChanged() {
		this.propertiesUpdate();
	}

	// This function is called every time when rxStyle is changed
	// eslint-disable-next-line class-methods-use-this
	onRxStyleChanged() {}

	// This function is called every time when some Object State updated, but all changes lands into this.state.values too
	// eslint-disable-next-line class-methods-use-this, no-unused-vars
	onStateUpdated(id, state) {}

	renderWidgetBody(props) {
		super.renderWidgetBody(props);

		// console.log('EmptyCollectionWidget props', props);

		const content = (
			<StyledEngineProvider injectFirst>
				<ThemeProvider
					theme={responsiveFontSizes(
						CustomTheme(this.props.context.themeType, {
							palette: {
								wbgc: _theme.palette.augmentColor({
									color: {
										main: props.widget.style["background-color"]
											? props.widget.style["background-color"]
											: _theme.palette.background.default,
									},
									name: "wbgc",
								}),
								text: {
									primary: props.widget.style.color,
								},
							},
							components: {
								MuiTypography: {
									textAlign: props.widget.style["text-align"],
									fontFamily: props.widget.style["font-family"],
									fontStyle: props.widget.style["font-style"],
									fontSize: props.widget.style["font-size"],
									lineHeight: props.widget.style["line-height"],
									fontWeight: props.widget.style["font-weight"],
									letterSpacing: props.widget.style["letter-spacing"],
								},
							},
						}),
					)}
				>
					<CssBaseline />
					<Box sx={{ bgcolor: "wbgc", width: "100%" }}>
						<Typography>
							{EmptyCollectionWidget.t("my empty widget")}
						</Typography>
					</Box>
				</ThemeProvider>
			</StyledEngineProvider>
		);

		if (this.state.rxData.noCard || props.widget.usedInWidget) {
			return content;
		}

		return this.wrapContent(content, null);
	}
}

export default EmptyCollectionWidget;
