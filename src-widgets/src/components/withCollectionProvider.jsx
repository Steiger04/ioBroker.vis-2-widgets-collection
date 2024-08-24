import React from "react";
import CollectionProvider from "./CollectionProvider";

function withCollectionProvider(component, options) {
	return <CollectionProvider {...options}>{component}</CollectionProvider>;
}

export default withCollectionProvider;
