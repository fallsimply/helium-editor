import { ElementMap } from "../editor/core";

type List   = "numbered" | "bullet" | "li"
type Header = `h${ 1 | 2 | 3 | 4 | 5 | 6 }`
type Format = "bold" | "italic" | "strike" | "underline"
type Inline =  List | Format | "subscript" | "superscript" | "link"
type Media  = "audio" | "video" | "image" | "iframe"
type Blocks  = Header | "code" | "test" | "blockquote"

export type Actions = Inline | Blocks | Media

export interface ActionMap extends Partial<Record<Actions, keyof ElementMap>> {}

export default {
	/* Inline Formatting */
	bold: "b",
	italic: "i",
	strike: "s",
	underline: "u",
	link: "a",
	/* Headings */
	h1: "h1",
	h2: "h2",
	h3: "h3",
	/* Formatted Blocks */
	blockquote: "blockquote",
	code: "code",
	/* Media */
	image: "img",
	audio: "audio",
	video: "video",
	/* Lists */
	numbered: "ol",
	bullet: "ul",
	li: "li",
} as ActionMap