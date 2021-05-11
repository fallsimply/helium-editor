import { HumanCase } from "~/utils";
import { Handler } from "../editor/core";
import { InputTypes, makeEditor, makeInput } from "../editor/attributes";


export default (attrs: Record<string, InputTypes>, name?: string): Handler => (node: Element) => {
	let editor = makeEditor(node.tagName);

	node.setAttribute("contenteditable", "false");
	node.addEventListener("DOMNodeRemoved", editor.remove);

	for (const name in attrs) {
		console.log(name, attrs)
		editor.append(makeInput(node, name, attrs[name]))
	}

	let remove = document.createElement("button");
	remove.innerText = `× Remove ${HumanCase(name ?? node.tagName)}`;
	remove.addEventListener("click", () => {
		editor.remove();
		node.remove();
	});

	editor.append(remove);

	node.parentElement.append(editor);
	editor.after(document.createElement("p"));
};
