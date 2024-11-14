const makeFederation = require("@iobroker/vis-2-widgets-react-dev/modulefederation.config");

module.exports = makeFederation(
	"vis2CollectionWidget", // internal name of package - must be unique and identical with io-package.json=>common.visWidgets.vis2demoWidget
	{
		"./StateCollectionWidget":
			"./src/StateCollectionWidget/StateCollectionWidget", // List of all widgets in this package
		"./SliderCollectionWidget":
			"./src/SliderCollectionWidget/SliderCollectionWidget", // List of all widgets in this package
		"./translations": "./src/translations",
	},
);
