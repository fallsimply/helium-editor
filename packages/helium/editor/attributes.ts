export const makeEditor = (type: string, args?: Record<string, string | boolean | number>): Element => {
	let editor = document.createElement("div");

	editor.toggleAttribute("attr");
	editor.setAttribute("contenteditable", "false");
	editor.setAttribute("tabindex", "0");

	for (const key in args) {
		editor.setAttribute(key, new String(args) as string);
	}

	editor.setAttribute("type", type.toLowerCase());;

	return editor;
};

interface baseType {
	type: string;
	label?: string;
}

interface SelectType extends baseType {
	type: "select",
	items: Record<string, string | number | boolean>
}

interface TextType extends baseType {
	type: "text" | "url" | "number" | "color"
}

interface CheckType extends baseType {
	type: "checkbox"
}

export type InputTypes = SelectType | TextType | CheckType

export const makeInput = (node: Element, name: string, config: TextType | SelectType | CheckType): HTMLElement => {
	let item = document.createElement("div")
	let label = document.createElement("label")
	let elem: HTMLSelectElement | HTMLInputElement

	let id = name.toLowerCase()

	label.append(config.label ?? name)

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
			elem = document.createElement("input")
			elem.type = "checkbox"
			elem.addEventListener("change", () => node.toggleAttribute(id))
			elem.checked = node.hasAttribute(id)
			break;

		default:
			elem = document.createElement("input")
			elem.type = config.type
			elem.addEventListener("change", () => node.setAttribute(id, elem.value))
			elem.value = node.getAttribute(id);
	}

	item.append(label, elem)

	return item
}