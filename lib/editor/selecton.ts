
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
	node: Element & Text,
	endNode: Element,
	begin: number,
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
			let node    = (l < r ? lNode : rNode) as Element & Text
			let endNode = (l < r ? rNode : lNode) as Element & Text

			return { type, begin, end, node, endNode }
	}
}