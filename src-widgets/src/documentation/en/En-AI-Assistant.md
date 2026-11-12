# AI Assistant with the Collection

## Description

Since the 2.20 series, vis-2 has an AI assistant in the editor: it creates views, places widgets and changes them through tool calls. External AI clients such as Claude Desktop can also reach ioBroker through an MCP endpoint of Admin. Both ways work with the widgets of this collection.

The collection brings **no AI of its own**: it calls no language model and stores no API keys. It only makes its widgets readable and robust for the host's AI:

- **Short description per widget:** every widget describes in a few sentences its purpose, its most important fields and the format of its configurator fields. The AI reads this text when it lists the set; the same text appears as the tooltip in the widget palette.
- **Shaped start values:** configurator fields that used to start empty carry an empty but correctly shaped skeleton as their default. From it the AI recognizes the expected structure. The widget behaves exactly as before.
- **Robust against AI data:** when the AI inserts a widget, the host sets no defaults and checks nothing; when it changes one, it replaces field values unchecked. An unusable value (wrong type, invalid JSON, wrong shape) therefore counts as unset in the widget: the widget renders as if the value were missing, without an error message. The stored value stays until you correct it in the configurator.

## Ways of Access

| Way                                      | What you need                                   | What the AI sees                                                      |
| ---------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| Assistant in the vis-2 editor            | an API key of a provider or a local model       | widget types with description and fields, views, objects and states   |
| External MCP client, e.g. Claude Desktop | an enabled MCP endpoint, no API key in ioBroker | objects and states; views only raw as a project file (read-only through Admin), no widget types |

### Assistant in the vis-2 Editor

- **Open:** in the vis-2 editor via the round **Assistant** button in the lower right. The assistant exists only in the editor, not in the runtime view.
- **Providers:** OpenAI, Anthropic, Google Gemini, DeepSeek, OpenRouter or any OpenAI-compatible endpoint ("Custom") with its own base URL, such as a local Ollama or LM Studio. For Custom the API key is optional.
- **Setup:** in the vis-2 instance settings with your own keys, or vis-2 takes over the system-wide AI setting from Admin (System settings → AI; from Admin 8.3.5 and vis-2 2.20.6). In vis-2, OpenRouter is available only through this system setting.
- **Model:** the assistant builds exclusively through tool calls. The model must therefore support tool calling (function calling).
- **Permissions:** the tools run with the connection of the logged-in user and may do only what that user may do. The assistant changes views and widgets; it does not write states.
- **Undo:** all changes of one answer are saved once and form one undo step in the editor.

### External MCP Client (e.g. Claude Desktop)

- **Enable the endpoint:** Admin's AI assistant is off by default. Only once it is enabled in the settings of the Admin instance does Admin start an MCP endpoint under `/mcp` on its web server. Alternatively, the `mcp` adapter provides an endpoint, as a web extension or standalone.
- **Find the address:** in the Admin assistant, the button **Use without an API key (external MCP client)** (cable icon in the header) opens a dialog. It lists the endpoints of your installation with a copy button and shows the system prompt of the built-in assistant to copy.
- **Connect the client:** register the endpoint URL (e.g. `http(s)://<host>:<port>/mcp`) as an MCP server in the client. The language model then runs in the client with its own account; no API key is needed in ioBroker.
- **Views only raw:** the MCP server has no tool for vis-2. The client knows neither the widget types nor their descriptions and sees a view only as a project file, such as `vis-2.0/main/vis-views.json`. Admin's embedded endpoint can only read that file: it has no option for object and file changes. Writing a view needs the `mcp` adapter with object and file changes allowed (off by default); the client then writes the project file as raw JSON, without the widget descriptions the vis-2 assistant gets.
- **Way of working:** a widget that already sits in the view shows the client the data format (see [A widget as a template](#a-widget-as-a-template)). Back up the project file before you let the client write: such changes bypass the vis-2 editor and its undo.

## Name the Set

The system prompt of the vis-2 assistant recommends the house sets `relative` and `absolute` to the AI. It therefore uses collection widgets only when you name the set explicitly. Its technical name is `vis-2-widgets-collection`; in the widget palette the group is called "Widget collection".

Name the set in every request, or state at the start of the conversation that all following widgets shall come from this set.

## Example Prompts

- "Which widgets does the set `vis-2-widgets-collection` offer? Briefly describe what each one is for."
- "Create a view 'Living room' and place a switch from the set `vis-2-widgets-collection` on it for the floor lamp's state."
- "Show the outdoor temperature `0_userdata.0.outdoortemperature` with a gauge from the set `vis-2-widgets-collection`, range −20 to 40 °C."
- "In the view 'Hallway', replace the switch with a switch from the set `vis-2-widgets-collection` using the same state."
- "Read the view 'Templates' and create a widget like the ECharts chart there in the view 'Energy', but for the heat pump's state."

You can name states by their object ID or by a description: the assistant can search objects and read states. Check every view it builds and refine it in the configurator.

## A Widget as a Template

When the assistant reads a view, the host returns the set data of every widget in full. A widget you have set up once in the configurator thus shows the AI the exact data format, including fields it does not see in the type description. The data series of the ECharts widget, for example, are not visible there. This way pays off especially for elaborate widgets such as ECharts, JSON Table or Gauge.

1. Set up a widget in the configurator, e.g. an ECharts chart in a view 'Templates'.
2. Ask the assistant to read this view and to use the widget as a pattern.
3. Say what should change: state, title, colors or target view.

## Limits

- **No AI of its own:** the collection calls no language model and manages no keys. Everything runs through the vis-2 assistant or an external MCP client; the costs and terms of the chosen provider apply.
- **No guarantee for every model answer:** how good the result is depends on the model. The collection makes sure a widget with unusable data does not crash, not that the AI configures it correctly.
- **What the AI sees of a widget type:** per field only name, type, label, the values of a selection and the default, no tooltips, groups or limits. Configurator fields appear only as type `custom`; the AI learns their format from the short description, the default or a template.
- **Absolute views:** on an absolute view, the host gives a newly inserted collection widget a width of 200 px unless the AI specifies a width of its own. Adjust the size afterwards.
- **Privacy:** what the assistant reads (views, objects, states) goes to the chosen provider. With a local model it stays in your network.
- **New feature in the host:** the AI features of vis-2 and Admin are new; their behavior may change with updates. This page describes vis-2 2.20.8 and Admin 8.3.11.

## Security of the MCP Endpoint

- Admin sets up the embedded endpoint without an MCP login of its own and hands it the default user of the Admin instance. Whether Admin's login protects the path `/mcp` has not been verified. Assume that anyone who reaches the Admin port can use the endpoint, as long as you have not found otherwise for your installation.
- Through the endpoint, a client can, depending on the settings, write states, i.e. switch devices, and with object and file changes allowed also change objects and files.
- Do not expose the Admin port to the internet; use the endpoint only in your own network or through a VPN.
- If you need a login, use the `mcp` adapter: standalone it optionally offers OAuth2, HTTP Basic or a bearer token; as a web extension the login of the `web` instance applies.
- If you do not need the endpoint, keep Admin's AI assistant switched off.
