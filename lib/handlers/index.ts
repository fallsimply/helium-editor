import Inline from "./inline"
import Block from "./block"

import { Actions, ElementMap } from "../editor/actions"
import { Handler } from "../editor/core"

const Handlers: {action: Actions, element: keyof ElementMap, handler: Handler}[] = [
	{
		action: "audio",
		element: "audio",
		handler: Block({
			Src: { type: "url" },
			Controls: { type: "checkbox"} ,
		
		})
	},
	{
		action: "video",
		element: "video",
		handler: Block({
			Src: { type: "url" },
			Controls: { type: "checkbox" },
		})
	},
	{
		action: "image",
		element: "img",
		handler: Block({
			Src: { type: "url" },
			Width: { type: "number" },
			Height: { type: "number" },
		}, "image")
	},
	{
		action: "link",
		element: "a",
		handler: Inline({}, "link")
	}
]

export default Handlers