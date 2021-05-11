import Inline from "./inline"
import Block from "./block"

import { Handler } from "../editor/core"

const Handlers: Record<string, Handler> = {
	audio: Block({
		src: {
			type: "url"
		},
		controls: { type: "checkbox"} ,
	}),
	video: Block({
		src: {
			type: "url"
		},
		controls: { type: "checkbox" },
	}),
	image: Block({
		src: {
			type: "url"
		},
		width: {
			type: "number"
		},
		height: {
			type: "number"
		},
	}, "image"),
	a: Inline({

	})
}

export default Handlers