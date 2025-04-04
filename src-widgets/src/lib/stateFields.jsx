import CollectionDivider from "../components/CollectionDivider";

const stateFields = () => [
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
		name: "statePushButton",
		type: "checkbox",
		label: "state_push_button",
		default: false,
		hidden: (data) => !data.onlyStates || Number(data.values_count) !== 2,
		tooltip: "state_push_button_tooltip",
	},
	{
		type: "custom",
		component: () => <CollectionDivider />,
		hidden: "!data.values_count",
	},
	{
		name: "onlyDisplay",
		type: "checkbox",
		label: "only_display",
		disabled: "!data.write",
		default: "!data.write",
		hidden: "!data.write",
	},
	{
		name: "noIcon",
		type: "checkbox",
		label: "no_icon",
	},
	{
		name: "noValue",
		type: "checkbox",
		label: "no_value",
	},
];

export default stateFields;
