import { NodeType } from "~/utils/elem"

interface I_Element extends Element {
	nodeType: NodeType.ELEMENT_NODE
}
interface I_Text extends Text {
	nodeType: NodeType.TEXT_NODE
}

export type ElementOrText = I_Element | I_Text 

interface DOMSelection extends Selection {
	type: "None" | "Caret" | "Range",
	anchorNode: Element,
	focusNode: Element,
}

export interface CaretSelection {
	type: "Caret"
	node: Element,
}

export interface RangeSelection {
	type: "Range",
	node: ElementOrText,
	start: number,
	endNode: ElementOrText,
	end: number,
}

export type Selected = CaretSelection | RangeSelection

export const getSelect = (): Selected => {
	const {
		type,
		anchorOffset: l,
		focusOffset:  r,
		anchorNode:   lNode,
		focusNode:    rNode,
	} = document.getSelection() as DOMSelection
	
	console.log(document.getSelection())

	switch (type) {
		case "None":
			return;
		case "Caret":
			return {
				type, 
				node: lNode as Element
			};
		case "Range":
			let begin = l < r ? l : r
			let end   = l < r ? r : l
			let node    = (l < r ? lNode : rNode) as ElementOrText
			let endNode = (l < r ? rNode : lNode) as ElementOrText

			return { type, start: begin, end, node, endNode }
	}
}