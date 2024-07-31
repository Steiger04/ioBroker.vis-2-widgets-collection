import React from "react";

import { i18n as I18n } from "@iobroker/adapter-react-v5";
import WidgetDemoApp from "@iobroker/vis-2-widgets-react-dev/widgetDemoApp";

import EmptyCollectionWidget from "./EmptyCollectionWidget";
import translations from "./translations";

import { getProps } from "@iobroker/vis-2-widgets-react-dev/visDevUtils";

class App extends WidgetDemoApp {
	constructor(props) {
		super(props);

		// init translations
		I18n.extendTranslations(translations);

		this.refParent = React.createRef();

		this.widgetProps = getProps(
			{
				socket: this.socket,
				theme: this.state.theme,
				refParent: this.refParent,
			},
			{
				type: "all",
			},
			{
				width: 600,
				height: 200,
			},
		);
	}

	renderWidget() {
		return (
			<div
				ref={this.refParent}
				style={{
					width: 600,
					height: 200,
				}}
			>
				<EmptyCollectionWidget {...this.widgetProps} />
			</div>
		);
	}
}

export default App;
