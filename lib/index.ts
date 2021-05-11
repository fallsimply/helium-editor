import { $ } from "./utils"
import type { Selector } from "./utils/selectors"
/* Editor */
import { Actions, BaseActions, ActionMap, ElementMap } from "./editor/actions"
import { Handler } from "./editor/core"

class Helium {
	editor: HTMLElement
	content: HTMLElement
	actions: ActionMap
	/* INTERNAL */
	private elems: HTMLElement[] = []
	private handlers: Record<string, Handler>

	constructor(selector: Selector<any> = "[helium][editor]") {
		this.editor  = $(selector)
		this.content = $("[contenteditable]", this.editor)
		this.actions = {
			...BaseActions
		}
		this.handlers = {}

		this.init()
	}

	init() {
		this.insert("image", {
			src: "https://picsum.photos/seed/helium-sample/400/400",
			width: 200,
		})
		this.insert("audio", { controls: true })
	}

	insert(action: Actions, attrs: Record<string, string | number | boolean> = {}) {
		let elem = document.createElement(this.actions[action])

		for (const key in attrs) {
			switch (typeof attrs[key]) {
				case "boolean":
					elem.toggleAttribute(key)
					break;
				default:
					elem.setAttribute(key, attrs[key] as string)
			}
		}

		this.content.append(elem)

		this.elems.push(elem)

		this.handlers[action]?.(elem)
	}

	registerAction(action: Actions, element: keyof ElementMap, handler: Handler) {
		this.actions[action] = element
		if (!!handler) {
			this.handlers[action] = handler
		}
	}

	registerActions(...actions: {action: Actions, element: keyof ElementMap, handler: Handler}[]) {
		actions.forEach(act => this.registerAction(act.action, act.element, act.handler));
	}
}

export default Helium