import CollectionDivider from "../components/CollectionDivider";

const selectFields = () => [
	{
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "cid",
		type: "id",
		label: "cid",
	},
];

export default selectFields;
