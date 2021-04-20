
interface DOMSelection extends Selection {
	type: "None" | "Caret" | "Range",
	anchorNode: Element,
	focusNode: Element,
}

interface CaretSelection {
	type: "Caret",
	node: Element,
}

interface RangeSelection {
	type: "Range",
	node: Element,
	endNode: Element,
	begin: number,
	end: number,
}

type Selected = CaretSelection | RangeSelection

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
			let node    = l < r ? lNode : rNode
			let endNode = l < r ? rNode : lNode

			return { type, begin, end, node, endNode }
	}
}