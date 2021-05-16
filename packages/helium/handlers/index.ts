import Inline from "./inline"
import Block from "./block"

import { Actions } from "../actions"
import { Handler } from "../editor/core"

type HandlerMap = {
	[Action in Actions]?: Handler
}

const Handlers: HandlerMap = {
	audio: Block({
		src: { type: "url", label: "Source" },
		controls: { type: "checkbox" },
	}, "Audio"),
	video: Block({
		src: { type: "url", label: "Source" },
		controls: { type: "checkbox" },
	}, "Video"),
	image: Block({
		src: { type: "url", label: "Source" },
		width: { type: "number" },
		height: { type: "number" },
	}, "Image"),
	link: Inline({})
}

export default Handlers