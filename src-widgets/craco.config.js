const craco = require("@iobroker/vis-2-widgets-react-dev/craco.config.js");

module.exports = {
	...craco,
	webpack: {
		mode: "extends",
		configure: (webpackConfig) => {
			webpackConfig.ignoreWarnings = [/Failed to parse source map/];
			return webpackConfig;
		},
	},
};
