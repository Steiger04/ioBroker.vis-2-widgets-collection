import Generic from "../Generic";
import withCollectionProvider from "../components/withCollectionProvider";
import StateCollection from "./StateCollection";

class StateCollectionWidget extends Generic {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	constructor(props) {
		super(props);

		// console.log("inside constructor", props);
	}

	static getWidgetInfo() {
		const oidChangeHandlerAsync = async (field, data, changeData, socket) => {
			if (data.oid) {
				const object = await socket.getObject(data.oid);

				if (object?.common?.states) {
					if (Array.isArray(object.common.states)) {
						// convert to {'state1': 'state1', 'state2': 'state2', ...}
						const states = {};
						object.common.states.forEach((state) => {
							states[state] = state;
						});
						object.common.states = states;
					}
					data.values_count = Object.keys(object.common.states).length;
					data.withStates = true;
					data.withNumber = false;
					Object.keys(object.common.states).forEach((state, index) => {
						data[`value${index + 1}`] = object.common.states[state];
					});
					changeData(data);
				} else if (object?.common) {
					data.withNumber = object.common.type === "number";
					data.withStates = false;
					data.values_count = 0;
					changeData(data);
				}
			}
		};

		return {
			id: "tplStateCollectionWidget",
			visSet: "vis-2-widgets-collection", // Widget set name in which this widget is located
			visSetLabel: "widgets_collection", // Widget set translated label (should be defined only in one widget of a set)
			visSetColor: "#cf00ff", // Color of a widget set. it is enough to set color only in one widget of a set
			visName: "StateCollectionWidget", // Name of widget
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
							name: "circle",
							label: "circle",
							type: "checkbox",
						},
						{
							name: "oid",
							type: "id",
							label: "oid",
							onChange: oidChangeHandlerAsync,
						},
					],
				},
				// check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
			],
			visDefaultStyle: {
				width: "100%",
				position: "relative",
			},
			visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-demo.png",
		};
	}

	// Do not delete this method. It is used by vis to read the widget configuration.
	// eslint-disable-next-line class-methods-use-this
	getWidgetInfo() {
		console.log("inside getWidgetInfo");

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

		console.log("inside propertiesUpdate");

		const actualRxData = JSON.stringify(this.state.rxData);
		if (this.lastRxData === actualRxData) {
			return;
		}
		this.lastRxData = actualRxData;

		await this.createStateObjectAsync("oid");
	}

	// This function is called every time when rxData is changed
	async onRxDataChanged(payload) {
		console.log("inside onRxDataChanged", payload);
		await this.propertiesUpdate();
	}

	// This function is called every time when rxStyle is changed
	// eslint-disable-next-line class-methods-use-this
	onRxStyleChanged() {
		console.log("inside onRxStyleChanged");
	}

	// This function is called every time when some Object State updated, but all changes lands into this.state.values too
	// eslint-disable-next-line class-methods-use-this, no-unused-vars
	onStateUpdated(id, state) {
		console.log("inside onStateUpdated");
	}

	async componentDidMount() {
		super.componentDidMount();

		console.log("inside componentDidMount");

		// Update data
		await this.propertiesUpdate();
	}

	renderWidgetBody(props) {
		super.renderWidgetBody(props);

		// console.log("inside renderWidgetBody --> props", props);
		// console.log("inside renderWidgetBody --> this", this);
		// console.log("inside renderWidgetBody --> theme", this.props.context.theme);

		if (!props.style.height) {
			props.style.height = "auto";
		}

		if (!props.style.width) {
			props.style.width = "auto";
		}

		const collectionContext = {
			...props,
			t: (text) => StateCollectionWidget.t(text),
			mode: this.props.context.themeType,
			rxData: this.state.rxData,
			rxStyle: this.state.rxStyle,
			values: this.state.values,
			socket: this.props.context.socket,
			oidObject: this.state.oidObject,
			theme: this.props.context.theme,
		};

		if (props.widget.data.noCard || props.widget.usedInWidget) {
			return withCollectionProvider(<StateCollection />, collectionContext);
		}

		return withCollectionProvider(
			this.wrapContent(<StateCollection />, null, {
				justifyContent: "center",
				alignItems: "center",
			}),
			collectionContext,
		);
	}
}

export default StateCollectionWidget;
