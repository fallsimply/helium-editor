import { HumanCase } from "../utils"
import { Handler } from "../editor/core"
import { InputTypes, makeEditor, makeInput } from "../editor/attributes"

const sampleAttrs = {
	"target": {
		label: "Open In",
		type: "select",
		items: {
			_blank: "New Tab",
			_top: "Current Tab",
			_self: "Current Tab/Embed",
		}
	},
	"rel": {
		label: "Trust Level",
		type: "select",
		items: {
			"noopener noreferrer nofollow external": "Untrusted",
			"noopener nofollow": "Untrusted Referral",
			opener: "Trusted"
		}
	},
}

export default (attrs: Record<string, InputTypes>, name?: string): Handler => (node: Element) => {
	let editor = makeEditor(node.tagName)

	node.setAttribute("contenteditable", "false")
	node.setAttribute("tabindex", "0")
	node.addEventListener("DOMNodeRemoved", editor.remove)

	for (const name in attrs)
		makeInput(node, name, attrs[name])

	let remove = document.createElement("button")
	remove.innerText = `× Remove ${name ?? node.tagName}`
	remove.addEventListener("click", () => {
		editor.remove()
		node.remove()
	})

	editor.append(remove)

	node.parentElement.append("beforeend", editor)
	editor.after(document.createElement("p"))
}

// document.querySelectorAll("div[attr][inline]").forEach((elem: HTMLDivElement) => {
// 	elem.focus()
// 	let toggle = () => elem.toggleAttribute("hidden")
// 	/* Toggle if element or its children are not focused */
// 	let onBlur = e => {
// 		console.log(elem.matches(":focus-within"))
// 		elem.matches(":focus-within") || toggle()
// 	}
// 	/* Mount to DOM */
// 	elem.addEventListener("blur", onBlur, true)
// })