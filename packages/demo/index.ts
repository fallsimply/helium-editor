import registerDropdown from "./dropdown"
import Helium from "@fallsimply/helium"
import SampleHandlers from "@fallsimply/helium/handlers"
import SampleActions from "@fallsimply/helium/actions"

let editor = new Helium()

let Handlers = []

for (const action in SampleHandlers)
	Handlers.push({
		action,
		element: SampleActions[action],
		handler: SampleHandlers[action],
	})

editor.registerActions(...Handlers)

editor.insert("image", {
	src: "https://i2.paste.pics/CG4I9.png",
	// src: "https://picsum.photos/seed/helium-sample/400/400",
	width: 200,
})
editor.insert("audio", { controls: true })

registerDropdown()

// document.querySelectorAll("div[attr][inline]").forEach((elem: HTMLDivElement) => {
// 	elem.focus()
// 	let toggle = () => elem.toggleAttribute("hidden")
// 	/* Toggle if element or its children are not focused */
// 	let onBlur = e => {
// 		console.log(elem.matches(":focus-within"))
// 		elem.matches(":focus-within") || toggle()
// 	}
// 	/* Mount to DOM */
// 	elem.addEventListener("blur", onBlur, true)
// })

declare global {
	var editor: any
}
window.editor = editor