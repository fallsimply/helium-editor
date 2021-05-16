export const genElem = (type: string | TemplateStringsArray, ...args: string[]): Element => {
	let tag: string

	if (typeof type === "string")
		tag = type
	else if (Array.isArray(type))
		tag = type[0]

	return document.createElement(tag)
}


/* Normalize Nodes within a **Document Fragment** */
// export const normalizeFmt = (elem: HTMLElement) => {
// 	if (elem.nodeType == NodeType.TEXT_NODE)
// 		return

// 	let next = elem.nextElementSibling;
// 	while (next !== null) {
// 		if (elem.tagName === next.tagName) {
// 			elem.append(...Array.from(next.childNodes))
// 			let temp = next
// 			next = next.nextElementSibling
// 			temp.remove()
// 		} else
// 			return;
// 	}
// }

export enum NodeType {
	ELEMENT_NODE = 1,
	ATTRIBUTE_NODE,
	TEXT_NODE,
	CDATA_SECTION_NODE,
	PROCESSING_INSTRUCTION_NODE = 7,
	COMMENT_NODE,
	DOCUMENT_NODE,
	DOCUMENT_TYPE_NODE,
	DOCUMENT_FRAGMENT_NODE
}
