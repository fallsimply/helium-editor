import { $, $$ } from "./utils"
import type { Selector } from "./utils/selectors"
import BaseHandlers, { Handler } from "./editor/handlers"
import { Actions, BaseActions, ActionMap, ElementMap } from "./editor/actions"

class Helium {
	editor: HTMLElement
	content: HTMLElement
	actions: ActionMap
	/* INTERNAL */
	private elems: HTMLElement[] = []
	private handlers: typeof BaseHandlers

	constructor(selector: Selector<any> = "[helium][editor]") {
		this.editor  = $(selector)
		this.content = $("[contenteditable]", this.editor)
		this.actions = {
			...BaseActions
		}
		this.handlers = {
			...BaseHandlers
		}

		this.init()
	}

	init() {
		this.insert("image", {
			src: "https://via.placeholder.com/400x400",
			width: 200,
		})
		// this.insert("audio")
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

		this.content.insertAdjacentElement("beforeend", elem)

		this.elems.push(elem)

		this.handlers[action]?.(elem)
	}

	registerAction(action: Actions, element: keyof ElementMap, handler: Handler) {
		this.actions[action] = element
		if (!!handler) {
			this.handlers[action] = handler
		}
	}
}

export default Helium