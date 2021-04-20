import type { KV } from "../utils/type"//"../utils/type"

type ElementMap = HTMLElementTagNameMap & SVGElementTagNameMap

type List   = "ol" | "ul" | "li"
type Header = `h${ 1 | 2 | 3 | 4 | 5 | 6 }`
type Format = "bold" | "italic" | "strike" | "underline"

type Media  = "audio" | "video" | "image" | "iframe"

type Inline =  List | Format | "subscript" | "superscript" | "a"
type Blocks  = Header | "code" | "test" | "blockquote"

export type Actions = Inline | Blocks | Media

let arr: Array<Media> = ["audio", "video", "iframe", "image"]  

interface ActionMap extends KV<Actions, keyof ElementMap> {}

export let BaseActions: ActionMap = {
	/* Format */
	bold: "a",
	italic: "i",
	strike: "s",
	underline: "u",
	/* Headings */
	h1: "h1",
	h2: "h2",
	h3: "h3",
	/* Text Blocks */
	blockquote: "blockquote",
	code: "code",
}

export let DefaultAttributes: KV<Actions, KV<string, string | boolean>> = {
	audio: {
		showEditor: true,
		controls: ""
	},
	a: {
		showEditor: true,
		href: ""
	}
}