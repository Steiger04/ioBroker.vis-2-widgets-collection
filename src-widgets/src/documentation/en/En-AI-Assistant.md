# AI Assistant with the Collection

## Description

Since the 2.20 series, vis-2 has an AI assistant in the editor: it creates views, places widgets and changes them through tool calls. External AI clients such as Claude Desktop can also reach ioBroker through an MCP endpoint of Admin. Both ways work with the widgets of this collection.

The collection brings **no AI of its own**: it calls no language model and stores no API keys. It only makes its widgets readable and robust for the host's AI:

- **Short description per widget:** every widget states its purpose in one short sentence. The sentence appears as the tooltip in the widget palette; the AI reads it when it lists the set.
- **Guide for the AI:** every widget also brings a guide to its fields and to the format of its configurator fields. The AI reads it in the type description of the widget; for people it is not visible.
- **Shaped start values:** configurator fields that used to start empty carry an empty but correctly shaped skeleton as their default. From it the AI recognizes the expected structure. The widget behaves exactly as before.
- **Robust against AI data:** when the AI inserts a widget, the host sets no defaults and checks nothing; when it changes one, it replaces field values unchecked. An unusable value (wrong type, invalid JSON, wrong shape) therefore counts as unset in the widget: the widget renders as if the value were missing, without an error message. The stored value stays until you correct it in the configurator.
- **Theme by AI:** the assistant can also change the theme of the collection, i.e. colors, font and shape of all collection widgets (see [Theme by AI](#theme-by-ai)).

## Ways of Access

| Way                                      | What you need                                   | What the AI sees                                                                                |
| ---------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Assistant in the vis-2 editor            | an API key of a provider or a local model       | widget types with short description, guide and fields, views, objects and states                |
| External MCP client, e.g. Claude Desktop | an enabled MCP endpoint, no API key in ioBroker | objects and states; views only raw as a project file (read-only through Admin), no widget types |

### Assistant in the vis-2 Editor

- **Open:** in the vis-2 editor via the round **Assistant** button in the lower right. The assistant exists only in the editor, not in the runtime view.
- **Providers:** OpenAI, Anthropic, Google Gemini, DeepSeek, OpenRouter or any OpenAI-compatible endpoint ("Custom") with its own base URL, such as a local Ollama or LM Studio. For Custom the API key is optional.
- **Setup:** in the vis-2 instance settings with your own keys, or vis-2 takes over the system-wide AI setting from Admin (System settings → AI; from Admin 8.3.5 and vis-2 2.20.6). In vis-2, OpenRouter is available only through this system setting.
- **Model:** the assistant builds exclusively through tool calls. The model must therefore support tool calling (function calling).
- **Permissions:** the tools run with the connection of the logged-in user and may do only what that user may do. The assistant changes views and widgets; it does not write states. With [Theme by AI](#theme-by-ai), the collection writes the theme state once the assistant has placed the change on the view.
- **Undo:** all changes of one answer are saved once and form one undo step in the editor. It does not take a theme change back (see [Taking a theme change back](#taking-a-theme-change-back)).

### External MCP Client (e.g. Claude Desktop)

- **Enable the endpoint:** Admin's AI assistant is off by default. Only once it is enabled in the settings of the Admin instance does Admin start an MCP endpoint under `/mcp` on its web server. Alternatively, the `mcp` adapter provides an endpoint, as a web extension or standalone.
- **Find the address:** in the Admin assistant, the button **Use without an API key (external MCP client)** (cable icon in the header) opens a dialog. It lists the endpoints of your installation with a copy button and shows the system prompt of the built-in assistant to copy.
- **Connect the client:** register the endpoint URL (e.g. `http(s)://<host>:<port>/mcp`) as an MCP server in the client. The language model then runs in the client with its own account; no API key is needed in ioBroker.
- **Views only raw:** the MCP server has no tool for vis-2. The client knows neither the widget types nor their short descriptions and guides and sees a view only as a project file, such as `vis-2.0/main/vis-views.json`. Admin's embedded endpoint can only read that file: it has no option for object and file changes. Writing a view needs the `mcp` adapter with object and file changes allowed (off by default); the client then writes the project file as raw JSON, without the guides the vis-2 assistant gets.
- **Way of working:** a widget that already sits in the view shows the client the data format (see [A widget as a template](#a-widget-as-a-template)). Back up the project file before you let the client write: such changes bypass the vis-2 editor and its undo.
- **Theme:** the client changes the theme of the collection through its state (see [Theme through an external MCP client](#theme-through-an-external-mcp-client)).

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

## Theme by AI

The vis-2 assistant can change the theme of the collection: colors, font and shape of all collection widgets, without you opening the [Theme Studio](En-Theme-Studio.md). It edits the same theme as the studio. The theme applies **to the whole installation**, not per project or view: a change takes effect in every project.

### What You Can Have Changed

- **Preset:** one of the nine [presets](En-Theme-Studio.md#presets) of the Theme Studio, such as Graphite. As in the studio, it sets only color mode, primary color, secondary color, base surface and widget surface.
- **Color mode:** light or dark.
- **Single colors:** primary color, secondary color, error, warning, info and success color, text (primary), text (secondary), base surface, widget surface and divider. A named color lies on top of a preset from the same request.
- **Font:** a font family from the selection of the Theme Studio (included or system, see [Typography & shape section](En-Theme-Studio.md#typography--shape-section)) and the base font size (8–24 px).
- **Shape:** the border radius for all four corners (0–96 px) and the spacing unit (0–16 px).
- **Reset:** the whole theme to the default. This empties every value, including loaded Google fonts and CSS variables. Together with new values, the theme starts from the default and then gets these values.

Only what you name changes; everything else stays as it was. A value the theme does not accept is skipped, the rest applies. The assistant cannot set Google fonts, different radii per corner, font weights, line height or CSS variables. Without a reset these values are kept; a new border radius replaces all four corners. It cannot clear a single value either, such as putting the color mode back to "Auto"; that is done in the Theme Studio.

### Example Prompts for the Theme

- "Set the theme of the widget collection to the preset Graphite. You find the entry for it in the set `vis-2-widgets-collection`."
- "Make the primary color orange and the corners rounder, the rest stays. You find the entry for it in the set `vis-2-widgets-collection`."
- "Reset the theme to the default. You find the entry for it in the set `vis-2-widgets-collection`."
- "Restore the previous theme." (in the same conversation after a change; the assistant then already knows the entry)

Name the set in the request, as described under [Name the set](#name-the-set): the entry for the theme is in the set `vis-2-widgets-collection`, and the assistant mostly looks there only when you say so. Without the second sentence, the theme stayed unchanged in five of six requests in the check with Claude Haiku and Claude Sonnet; the assistant mostly answered that it had no tool for this. With the sentence it placed the order correctly in every session checked. The check ran with the German wording of these prompts; the English ones are translations. Name presets by their name from the Theme Studio (checked with Graphit and Rubin, the German names of Graphite and Ruby).

### What Happens

For this, the assistant places a **theme order** on the view: an entry of the type "Theme Studio" that changes the theme once and then removes itself. The chat adds a line for it that names "Theme Studio" and the view (seen with the German interface as „Theme-Studio auf ‚‹View›‘ gesetzt“); if it is missing, the assistant changed nothing.

- **After the answer:** the order takes effect as soon as the assistant's answer has ended. The theme then changes on all collection widgets, without a reload.
- **The assistant's report:** the assistant reports the change before it has taken effect. If it reads back within the same answer, it still sees the old value and may report a failure although the change arrives afterwards (observed once in the check). What the widgets show is what counts.
- **Nothing stays behind:** after the change there is no additional widget on the view.
- **Only in the editor, only on a view that is shown:** the order takes effect as soon as its view is shown in the editor. If the assistant placed it on another view, the theme changes only once you open that view in the editor. In the runtime view it does nothing and shows nothing.
- **Several orders:** orders from one answer take effect one after the other, each on the result of the one before.
- **Slow system:** if the server takes longer, the order stays on the view as an empty, transparent element for that time. Leave it there: it disappears as soon as the change is confirmed.
- **Open Theme Studio:** an open studio without unsaved changes shows the new state. One with unsaved changes keeps its draft, on the canvas too: **Save** overwrites the assistant's change, **Cancel** with Discard shows it.

### Taking a Theme Change Back

The editor's undo does not take a theme change back: it restores the view, the theme stays. This is how you get back:

- **Ask the assistant** to restore the previous theme, in the same conversation. In the check it read the theme before every change, as its guide demands; the old values were thus in the conversation, and it restored them. If it sets all values anew in doing so, a font family is afterwards in the notation of the studio's selection (`'Georgia', serif` instead of `Georgia, serif`). It can restore only what it can also set: after a reset it does not bring back loaded Google fonts and CSS variables. Restoring after a reset has not been checked.
- **Open the [Theme Studio](En-Theme-Studio.md)** and correct the values there.

If you want to be sure you can get back, copy the value of the state `vis-2-widgets-collection.0.theme` before the change (see [The theme in the datapoint](En-Theme-Studio.md#the-theme-in-the-datapoint)). Written back, it restores the theme completely.

If you had the theme changed several times, undo can trigger an earlier change again: it brings back the state of the earlier answer together with its theme order, and that order takes effect once more. Redo did not bring a theme order back in the check with vis-2 2.20.9: the step failed with an error of the editor and changed neither view nor theme. Check the theme when you use undo after a theme change.

### When the Change Is Not Confirmed

If the server does not answer for ten seconds, or reading or writing the theme fails, the order stays on the view and shows the hint "The theme change was not confirmed. Delete this widget and try again." in the editor.

- **Late answer:** if the answer comes after all, it counts: the change is completed, order and hint disappear.
- **Delete and repeat:** otherwise select the order, delete it and ask the assistant again. If the write was already on its way, the change can still arrive, and the new order waits for that answer first; check the theme.
- **Waiting orders:** further orders wait behind an order without an answer and then show the same hint. Once you delete it, they move up.

### Theme through an External MCP Client

An external MCP client has no tool for vis-2 and places no theme order. It changes the theme through the state `vis-2-widgets-collection.0.theme`: read, change, write back as JSON text. It can write states (`set_state`) at Admin's embedded endpoint by default. Example: "In the theme of the widget collection, change the primary color to orange."

- **Effect:** on all collection widgets and for the whole installation. An open Theme Studio behaves as under [What happens](#what-happens).
- **Write the whole theme:** unlike the assistant, the client replaces the whole value. Whatever it leaves out when writing is lost, loaded Google fonts included. So it reads the theme, changes only what is asked for and writes everything back.
- **Invalid values:** a single invalid value is dropped, the rest of the theme applies.
- **Way back:** have the client tell you the old value before it writes. Written back, it restores the theme completely; the editor's undo does not cover the theme.
- **Shape on the state:** on a newly created instance, the shape of the theme is on the state's object as an English description. The client reads it only when it fetches the object (`get_object` for `vis-2-widgets-collection.0.theme`); the object search (`search_objects`) finds the state but does not show the description. An instance that existed before this feature does not have the description: an adapter update does not change the existing object. In the check, the value it read was enough for the client with an existing theme; with an empty theme it fetched the object and used the description.

If the description is missing or the client does not fetch the object, name the state to it and hand it this text. It is in English and word for word the description on the state:

```text
Theme of the Collection widgets, one for the whole installation.
The value is JSON text: one object, a partial MUI theme.
Every key is optional; missing colors, font and radius follow the vis-2 theme.
To change the theme, read this state, change only what is asked for and write the whole theme back: whatever you leave out is lost, so keep every other key as it is (also googleFonts, components and cssVariables).
A single invalid value is ignored, the rest still applies.
An empty object {} restores the default look.
palette.mode: "light" or "dark"; leave it out to follow vis-2.
Colors: hex like #1976d2, rgb() or hsl(); no color names, no gradients.
If palette.primary.main is set and palette.secondary.main is not, the secondary color is derived from the primary.
Without palette.text.primary the text takes the primary color.
typography.fontFamily: a CSS font stack.
Bundled fonts work on every device, use the value exactly as written: "'Inter', system-ui, sans-serif", "'Open Sans', system-ui, sans-serif", "'Montserrat', system-ui, sans-serif", "'Merriweather', Georgia, serif", "'Playfair Display', Georgia, serif", "'Roboto Slab', Georgia, serif", "'JetBrains Mono', ui-monospace, monospace", "'Oswald', system-ui, sans-serif", "'Nunito', system-ui, sans-serif", "'Roboto', system-ui, sans-serif".
Any other stack needs the font on the device.
typography.fontSize: number from 8 to 24 (px).
corners.topLeft, corners.topRight, corners.bottomRight and corners.bottomLeft: each a number from 0 to 96 (px); set all four.
spacing: number from 0 to 16 (px).
Example: {"palette":{"mode":"dark","primary":{"main":"#38bdf8"},"secondary":{"main":"#818cf8"},"error":{"main":"#f44336"},"warning":{"main":"#ffa726"},"info":{"main":"#29b6f6"},"success":{"main":"#66bb6a"},"text":{"primary":"#e6edf3","secondary":"#9aa7b4"},"background":{"default":"#0f1216","paper":"#181c23"},"divider":"#2a313c"},"typography":{"fontFamily":"'Inter', system-ui, sans-serif","fontSize":14},"corners":{"topLeft":8,"topRight":8,"bottomRight":8,"bottomLeft":8},"spacing":8}
```

The ranges for font size, border radius and spacing are those of the sliders in the Theme Studio. [The theme in the datapoint](En-Theme-Studio.md#the-theme-in-the-datapoint) explains the structure of the theme.

## Limits

- **No AI of its own:** the collection calls no language model and manages no keys. Everything runs through the vis-2 assistant or an external MCP client; the costs and terms of the chosen provider apply.
- **No guarantee for every model answer:** how good the result is depends on the model. The collection makes sure a widget with unusable data does not crash, not that the AI configures it correctly.
- **What the AI sees of a widget type:** the widget's guide and per field only name, type, label, the values of a selection and the default, no tooltips, groups or limits. Configurator fields appear only as type `custom`; the AI learns their format from the guide, the default or a template.
- **Absolute views:** on an absolute view, the host gives a newly inserted collection widget a width of 200 px unless the AI specifies a width of its own. Adjust the size afterwards.
- **Privacy:** what the assistant reads (views, objects, states) goes to the chosen provider. With a local model it stays in your network.
- **New feature in the host:** the AI features of vis-2 and Admin are new; their behavior may change with updates. This page describes vis-2 2.20.8 and Admin 8.3.11; the section [Theme by AI](#theme-by-ai) was checked with vis-2 2.20.9, Admin 8.3.12 and js-controller 7.2.5.

## Security of the MCP Endpoint

- Admin sets up the embedded endpoint without an MCP login of its own and hands it the default user of the Admin instance. Whether Admin's login protects the path `/mcp` has not been verified. Assume that anyone who reaches the Admin port can use the endpoint, as long as you have not found otherwise for your installation.
- Through the endpoint, a client can, depending on the settings, write states, i.e. switch devices, and with object and file changes allowed also change objects and files.
- Do not expose the Admin port to the internet; use the endpoint only in your own network or through a VPN.
- If you need a login, use the `mcp` adapter: standalone it optionally offers OAuth2, HTTP Basic or a bearer token; as a web extension the login of the `web` instance applies.
- If you do not need the endpoint, keep Admin's AI assistant switched off.
