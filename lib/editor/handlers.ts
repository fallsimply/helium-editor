import { HumanCase } from "~/utils"

type InputTypes = "text" | "number" | "checkbox" | "url" | "color"

export interface Handler {
	(node: Element): void
};

const genEditor = (type: string | TemplateStringsArray, ...args: string[]): Element => {
	let editor = document.createElement("div")
	
	editor.setAttribute("attr", "")
	editor.setAttribute("contenteditable", "false")

	if (typeof type === "string")
		editor.setAttribute("type", type.toLowerCase())
	if (args.length > 0)
		editor.setAttribute("type", args[0].toLowerCase())

	return editor
}

const baseHandler = (attrs: Record<string, InputTypes>, name?: string):Handler => (node: Element) => {
	let editor = genEditor(node.tagName)

	node.setAttribute("contenteditable", "false")
	node.addEventListener("DOMNodeRemoved", () => editor.remove())

	for (const name in attrs) {
		let item = document.createElement("div"),
			elem = document.createElement("input")
		elem.type = attrs[name]

		item.insertAdjacentHTML("beforeend", `<label>${name}: </label>`)

		switch (elem.type) {
			case "checkbox":
				elem.addEventListener("change", () =>
					node.toggleAttribute(name)
				)
				elem.checked = node.hasAttribute(name)
				break;
	
			default:
				elem.addEventListener("change", () =>
					node.setAttribute(name, elem.value)
				)
				elem.value = node.getAttribute(name)
				break;
		}

		item.insertAdjacentElement("beforeend", elem)
		editor.insertAdjacentElement("beforeend", item)
	}

	let remove = document.createElement("button")
	remove.innerText = `× Remove ${HumanCase(name ?? node.tagName)}`
	remove.addEventListener("click", () => {
		editor.remove()
		node.remove()
	})

	editor.insertAdjacentElement("beforeend", remove)

	node.parentElement.insertAdjacentElement("beforeend", editor)
	editor.insertAdjacentElement("afterend", document.createElement("p"))
}

const Handlers: Record<string, Handler> = {
	audio: baseHandler({
		src: "url",
		controls: "checkbox",
	}),
	video: baseHandler({
		src: "url",
		controls: "checkbox",
	}, "video"),
	image: baseHandler({
		src: "text",
		width: "number",
		height: "number",
	}, "Image")
}

export default Handlers