import { Actions } from "./actions";
import { RangeSelection } from "./selecton";

function splitText(selection: RangeSelection) {
	
	if (selection.node.nodeType == document.TEXT_NODE) {
		let { node, begin, end } = selection
		let prev = node
		let mid = prev.splitText(begin)
		let next = mid.splitText(end)
		return {
			node: mid,
			prev,
			next,
		}
	}
}

function inlineAction(action: Actions) {

}

