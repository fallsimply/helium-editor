import { ElementOrText, RangeSelection } from "./selecton";
import { NodeType } from "../utils/elem"

export type Handler = (node: Element) => void
export type ElementMap = HTMLElementTagNameMap & SVGElementTagNameMap

function splitText(selection: RangeSelection) {
	if (selection.node.nodeType !== document.TEXT_NODE)
		return

	let frag = new DocumentFragment()
	let prev: Text, mid: Text, next: Text
	let currentNode: ElementOrText = selection.node
	let parent: ParentNode = (<Element>selection.node).closest("p")

	currentNode = selection.start > 0
		? (<Text>selection.node).splitText(selection.start)
		: selection.node

	while (currentNode != selection.endNode) {
		let state : {node: Node, format: string[]} = {
			node: null,
			format: []
		}
		if (currentNode.nodeType == NodeType.TEXT_NODE) {
			state.node = currentNode
			while (currentNode.parentNode !== parent) {
				currentNode = currentNode.parentElement
				state.format.unshift(currentNode.nodeName)
			}
		}
	}

}

function inlineAction(action: keyof ElementMap, fragment: DocumentFragment, beforeNode: Element) {
	let elem = document.createElement(action)
	elem.append(fragment)

	beforeNode.after(elem)
}