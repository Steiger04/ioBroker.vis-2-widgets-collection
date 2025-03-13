import { Box, CssBaseline } from "@mui/material";
import React from "react";

class Generic extends window.visRxWidget {
	static getI18nPrefix() {
		return "vis_2_widgets_collection_";
	}

	getPropertyValue = (stateName) => {
		return this.state.values[`${this.state.rxData[stateName]}.val`];
	};

	setValue = (id, value, ack = false) => {
		if (!id || id === "nothing_selected") return;

		this.props.context.socket
			.setState(id, value, ack)
			.catch((e) => console.error(`Cannot set state ${id}: ${e}`));
	};

	async getParentObject(id) {
		const parts = id.split(".");
		parts.pop();
		const parentOID = parts.join(".");
		return this.props.context.socket.getObject(parentOID);
	}

	static getObjectIcon(obj, id, imagePrefix) {
		imagePrefix = imagePrefix || "../.."; // http://localhost:8081';
		let src = "";
		const common = obj && obj.common;

		if (common) {
			const cIcon = common.icon;
			if (cIcon) {
				if (!cIcon.startsWith("data:image/")) {
					if (cIcon.includes(".")) {
						let instance;
						if (obj.type === "instance" || obj.type === "adapter") {
							src = `${imagePrefix}/adapter/${common.name}/${cIcon}`;
						} else if (id && id.startsWith("system.adapter.")) {
							instance = id.split(".", 3);
							if (cIcon[0] === "/") {
								instance[2] += cIcon;
							} else {
								instance[2] += `/${cIcon}`;
							}
							src = `${imagePrefix}/adapter/${instance[2]}`;
						} else {
							instance = id.split(".", 2);
							if (cIcon[0] === "/") {
								instance[0] += cIcon;
							} else {
								instance[0] += `/${cIcon}`;
							}
							src = `${imagePrefix}/adapter/${instance[0]}`;
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

	wrapContent(content) {
		return (
			<>
				<CssBaseline />
				<Box
					className="GENERIC-0"
					sx={{
						position: "relative",
						overflow: "hidden",

						width: "100%",
						height: "100%",

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						className="GENERIC-1"
						sx={{
							width: this.wrappedContent ? "calc(100% - 8px)" : "100%",
							height: this.wrappedContent ? "calc(100% - 8px)" : "100%",
						}}
					>
						{content}
					</Box>
				</Box>
			</>
		);
	}
}

export default Generic;
