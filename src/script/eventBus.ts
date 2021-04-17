import { $ } from "./utils"
class FloatEventBus {
	core: Comment
	listeners: Record<string, (e: Event) => void>

	constructor() {
		let node = document.createComment("float event bus - add an event listener")
		$("div[editor]").appendChild(node)
		this.core = node;
	}

	addListener(type: string, func: (e: Event) => void) {
		this.core.addEventListener(type, func)
	}

	removeListener(type: string, func: (e: Event) => void) {
		this.core.removeEventListener(type, func)
	}

	emit(type: string, message: string) {
		this.core.dispatchEvent(new CustomEvent(type, {detail: message}))
	}
}