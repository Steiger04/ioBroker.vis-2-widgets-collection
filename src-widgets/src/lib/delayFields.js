import CollectionDivider from "../components/CollectionDivider";

const delayFields = () => [
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider dividerText="write_value" />,
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
		name: "delay",
		type: "number",
		label: "delay",
		default: 300,
		min: 0,
		max: 1000,
		step: 1,
		hidden: "data.sampleInterval",
	},
];

export default delayFields;
