export const genElem = (type: string | TemplateStringsArray, ...args: string[]): Element => {
	let tag

	if (typeof type === "string")
		tag = type
	else if (Array.isArray(type))
		tag = type[0]

	return document.createElement(tag)
}