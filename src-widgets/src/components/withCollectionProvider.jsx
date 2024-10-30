import React from "react";
import CollectionProvider from "./CollectionProvider";

function withCollectionProvider(component, context) {
	return <CollectionProvider {...context}>{component}</CollectionProvider>;
}

export default withCollectionProvider;
