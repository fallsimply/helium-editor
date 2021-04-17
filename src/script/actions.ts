import { replaceBlock, replaceInline } from "./nodeUtils"
import { $$ } from "./utils"

type PartialRecord<K extends string, V> = Partial<Record<K, V>> 

type InlineActions = "bold" | "italic" | "strike" | "underline"
type HeaderActions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type BlockActions  = HeaderActions | "code" | "test"
type Actions = InlineActions | BlockActions

type InlineType = Object & PartialRecord<InlineActions, string>
type BlockType  = Object & PartialRecord<BlockActions, string>

const Inline: InlineType = {
	bold:      "b",
	italic:    "i",
	strike:    "s",
	underline: "u",
}

const Block: BlockType = {
	h1:   "h1",
	h2:   "h2",
	h3:   "h3",
	code: "code",
}

const registerInline = (actions: InlineType) => {
	let inline = Object.keys(Inline)
	Array.from($$<"button">(`div[toolbar] button[x-action]`))
		.filter(e => inline.includes(e.getAttribute("x-action")))
		.forEach(e => e.addEventListener("click", () =>
			replaceInline(actions[e.getAttribute("x-action")])
		))
}

const registerBlock = (actions: BlockType) => {
	$$<"button">(`div[toolbar] button[x-action]`)
		.forEach(e => e.addEventListener("click", () =>
			replaceInline(actions[e.getAttribute("x-action")]),
		))
}

export {
	// Register Actions
	registerInline,
	registerBlock,

	// Actions
	InlineActions,
	HeaderActions,
	BlockActions,
	Actions,

	// Action => Element Types
	InlineType,
	BlockType,
	
	// Action => Element Pairs
	Inline,
	Block,
}
