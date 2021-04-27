import { InlineActions, BlockActions, Block } from "./actions"

type EditorNode = Element | Text

type SelectedNode = {
	begin: number
	end:   number
	node:  Element
}

type iterState = {
	baseNode: EditorNode
}

type iterObj = {
	startNode: EditorNode
	endNode:   EditorNode
	endIdx:    number
	split():   EditorNode
}

const getSelect = (): SelectedNode => {
	const {
		anchorOffset: l,
		focusOffset:  r,
		anchorNode:   lNode,
		focusNode:    rNode,
	} = document.getSelection()
	console.log(document.getSelection())
	return l < r
		? { begin: l, end: r, node: lNode as Element }
		: { begin: r, end: l, node: rNode as Element }
}

export const makeIterObj = (startNode: EditorNode, endNode: EditorNode, endIdx: number): iterObj => ({
	startNode,
	endNode,
	endIdx,
	split(): EditorNode {
		let endNode = this.endNode
		let text: Text
		this.endNode.normalize()

		if (endNode.nodeType === document.TEXT_NODE) {
			if (endIdx == endNode.textContent.length)
				return endNode;
			else {
				text = endNode
				text.splitText(this.endIdx)
				return <Element>text.nextSibling
			}
		} else {
			text = this.endNode.childNodes[0]
			return this.endNode.childNodes[1]
		}
	},
})

export const nodeIter = (node: EditorNode, idx: number, state?: iterState): iterObj => {
	let baseNode = state?.baseNode ?? node
	let nodeLen  = node?.textContent?.length ?? 0

	console.log(baseNode, nodeLen)

	if (nodeLen >= idx || node.nodeType === document.TEXT_NODE) {
		console.log(baseNode)
		return makeIterObj(baseNode, node, idx)
	}
	else if (nodeLen < idx || idx === 0) 
		if (!!node.nextSibling) {
			console.log({ idx, len: nodeLen, nIdx: idx - nodeLen, baseNode })
			nodeIter(node.nextSibling as Element, idx - nodeLen, { baseNode })
		} else
			return;
}

export const replaceInline = (tag: InlineActions | BlockActions, attributes: object = {}) => {
	let select = getSelect()
	if (!select) return;

	let parent  = select.node.parentElement
	let closest = parent.closest(`[contenteditable] ${tag}`) ?? parent.querySelector(tag)

	let node: Partial<Text & Element> | null = nodeIter(select.node, select.begin)?.split()
	if (!node) return;

	if (select.end > node.length)
		nodeIter(<Element>node, select.end - select.begin)?.split()

	if (!closest && select.begin !== select.end) {
		let elem = document.createElement(tag)

		for (let key of Object.keys(attributes))  
			elem.setAttribute(key, attributes[key])

		console.log(node)

		if (node.nodeType === document.TEXT_NODE) 
			elem.append(node.cloneNode(true))
		else 
			elem.append(...Array.from(node.childNodes))

		node.replaceWith(elem)
	} else
		closest.replaceWith(...Array.from(closest.childNodes))
	
}

export const replaceBlock = (tag: BlockActions) => {
	let blocks = Object.values(Block)
	let select = getSelect()

	if (!select) return;

	let sel = blocks.map(i => `[contenteditable] ${i}`).join(", ");
	console.log(sel)
	let closest = select.node.closest(sel)
}