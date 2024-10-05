import { VisRxWidget } from "@iobroker/vis-2-widgets-react-dev";
import { Box, Paper } from "@mui/material";

class Generic extends (window.visRxWidget || VisRxWidget) {
	constructor(props) {
		super({
			...props,
			customSettings: {
				viewStyle: {
					visCard: {
						margin: 8,
					},
				},
			},
		});

		console.log("Generic inside constructor -> props", props);
	}
	static getI18nPrefix() {
		return "vis_2_widgets_collection_";
	}

	getPropertyValue = (stateName) => {
		// console.log("GET PROPERTY VALUE", stateName);
		// console.log("this", this);
		return this.state.values[`${this.state.rxData[stateName]}.val`];
	};

	async getParentObject(id) {
		const parts = id.split(".");
		parts.pop();
		const parentOID = parts.join(".");
		return this.props.context.socket.getObject(parentOID);
	}

	static getObjectIcon(obj, id, imagePrefix) {
		const prefix = imagePrefix || "../.."; // http://localhost:8081';
		let src = "";
		const common = obj?.common;

		if (common) {
			const cIcon = common.icon;
			if (cIcon) {
				if (!cIcon.startsWith("data:image/")) {
					if (cIcon.includes(".")) {
						let instance;
						if (obj.type === "instance" || obj.type === "adapter") {
							src = `${prefix}/adapter/${common.name}/${cIcon}`;
						} else if (id?.startsWith("system.adapter.")) {
							instance = id.split(".", 3);
							if (cIcon[0] === "/") {
								instance[2] += cIcon;
							} else {
								instance[2] += `/${cIcon}`;
							}
							src = `${prefix}/adapter/${instance[2]}`;
						} else {
							instance = id.split(".", 2);
							if (cIcon[0] === "/") {
								instance[0] += cIcon;
							} else {
								instance[0] += `/${cIcon}`;
							}
							src = `${prefix}/adapter/${instance[0]}`;
						}
					} else {
						return null;
					}
				} else {
					src = cIcon;
				}
			}
		}

		return src || null;
	}

	async createStateObjectAsync(stateName) {
		if (
			!this.state.rxData[stateName] ||
			this.state.rxData[stateName] === "nothing_selected"
		) {
			this.setState({ [`${stateName}Object`]: { common: {} } });

			if (this.state.rxData.icon) {
				this.setState({
					[`${stateName}Object`]: {
						common: {
							icon: this.state.rxData.icon,
						},
					},
				});
			}

			return;
		}
		// read object itself
		let object = await this.props.context.socket.getObject(
			this.state.rxData.oid,
		);

		if (!object) {
			object = { common: {} };
		} else {
			object = { common: object.common, _id: object._id, type: object.type };
		}
		object.common = object.common || {};
		if (object.common.type === "number") {
			if (object.common.max === undefined) {
				object.common.max = 100;
			}
			if (object.common.min === undefined) {
				object.common.min = 0;
			}
		}
		if (object.common.states && Array.isArray(object.common.states)) {
			// convert to {'state1': 'state1', 'state2': 'state2', ...}
			const states = {};
			object.common.states.forEach((state) => {
				states[state] = state;
			});
			object.common.states = states;
		}

		console.log("ICON", this.state.rxData.icon);
		if (this.state.rxData.icon) {
			object.common.icon = this.state.rxData.icon;
		} else if (
			!object.common.icon &&
			(object.type === "state" || object.type === "channel")
		) {
			const idArray = this.state.rxData.oid.split(".");

			// read channel
			const parentObject = await this.props.context.socket.getObject(
				idArray.slice(0, -1).join("."),
			);

			if (
				!parentObject?.common?.icon &&
				(object.type === "state" || object.type === "channel")
			) {
				const grandParentObject = await this.props.context.socket.getObject(
					idArray.slice(0, -2).join("."),
				);

				if (grandParentObject?.common?.icon) {
					object.common.icon = grandParentObject.common.icon;
					if (
						grandParentObject.type === "instance" ||
						grandParentObject.type === "adapter"
					) {
						object.common.icon = `../${grandParentObject.common.name}.admin/${object.common.icon}`;
					}
				}
			} else {
				object.common.icon = parentObject.common.icon;
				if (
					parentObject.type === "instance" ||
					parentObject.type === "adapter"
				) {
					object.common.icon = `../${parentObject.common.name}.admin/${object.common.icon}`;
				}
			}
		}

		if (object.common.name && typeof object.common.name === "object") {
			object.common.name =
				object.common.name[Generic.getLanguage()] || object.common.name.en;
		}

		if (
			JSON.stringify(this.state[`${stateName}Object`]) !==
			JSON.stringify(object)
		) {
			this.setState({ [`${stateName}Object`]: object });
		}
	}

	wrapContent2(content) {
		return (
			<Box
				sx={{
					height: "calc(100% - 8px)",
					width: "calc(100% - 8px)",
					m: "4px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					boxSizing: "border-box",
				}}
			>
				{content}
			</Box>
		);
	}
}

export default Generic;
