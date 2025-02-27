const makeFederation = require("@iobroker/vis-2-widgets-react-dev/modulefederation.config");

module.exports = makeFederation(
	"vis2CollectionWidget", // internal name of package - must be unique and identical with io-package.json=>common.visWidgets.vis2demoWidget
	{
		"./StateCollectionWidget":
			"./src/StateCollectionWidget/StateCollectionWidget",
		"./SliderCollectionWidget":
			"./src/SliderCollectionWidget/SliderCollectionWidget",
		"./ButtonGroupCollectionWidget":
			"./src/ButtonGroupCollectionWidget/ButtonGroupCollectionWidget",
		"./translations": "./src/translations",
		"./SwitchCollectionWidget":
			"./src/SwitchCollectionWidget/SwitchCollectionWidget",
		"./CheckboxCollectionWidget":
			"./src/CheckboxCollectionWidget/CheckboxCollectionWidget",
		"./DialogCollectionWidget":
			"./src/DialogCollectionWidget/DialogCollectionWidget",
	},
);
