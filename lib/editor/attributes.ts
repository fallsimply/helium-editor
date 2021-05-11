export const makeEditor = (type: string | TemplateStringsArray, args?: Record<string, string | boolean | number>): Element => {
	let editor = document.createElement("div");

	editor.toggleAttribute("attr");
	editor.setAttribute("contenteditable", "false");
	editor.setAttribute("tabindex", "0");

	for (const key in args) {
		editor.setAttribute(key, new String(args) as string);
	}

	if (typeof type === "string")
		editor.setAttribute("type", type.toLowerCase());
	if (Array.isArray(type) && type.length > 0)
		editor.setAttribute("type", type[0].toLowerCase());

	return editor;
};


type SelectType = {
	type: "select",
	items: Record<string, string | number | boolean>
}

type TextType = {
	type: "text" | "url" | "number" | "color"
}

type CheckType = {
	type: "checkbox"
}

export type InputTypes = SelectType | TextType | CheckType

/**
 * @param name - The Label for the Input (Lowercased for attribute)
 * */
export const makeInput = (node: Element, name: string, config: TextType | SelectType | CheckType): HTMLElement => {
	let item = document.createElement("div")
	let label = document.createElement("label")
	let elem: HTMLSelectElement | HTMLInputElement = document.createElement("input")

	let id = name.toLowerCase()

	label.append(`${name}: `)

	switch (config.type) {
		case "select":
			elem = document.createElement("select")
			for (const key in config.items) {
				let option = document.createElement("option")
				option.value = key
				option.text = config.items[key] as string
				elem.add(option)
			}
			break

		case "checkbox":
			elem.type = "checkbox"
			elem.addEventListener("change", () => node.toggleAttribute(id))
			elem.checked = node.hasAttribute(id)
			break;

		default:
			elem.type = config.type
			elem.addEventListener("change", () => node.setAttribute(id, elem.value))
			elem.value = node.getAttribute(id);
	}

	item.append(label, elem)

	return item
}