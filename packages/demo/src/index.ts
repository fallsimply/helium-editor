import registerDropdown from "./dropdown"
import Helium from "@fallsimply/helium"
import SampleHandlers from "@fallsimply/helium/handlers"
import SampleActions from "@fallsimply/helium/actions"

let editor = new Helium("[helium]")

document.querySelector("[helium] [contenteditable]").insertAdjacentHTML("afterbegin", `<p>hello world <b>hElLo WoRlD</b> HELLO WORLD hello word HELLO WORLD HeLlO wOrLd</p>
<p><a href="#">sample link</a></p>`)

let Handlers = []
for (const action in SampleHandlers)
	Handlers.push({
		action,
		element: SampleActions[action],
		handler: SampleHandlers[action],
	})

editor.registerActions(...Handlers)
editor.insert("image", { src: "https://i2.paste.pics/CG4I9.png", width: 200 })
editor.insert("audio", { controls: true })

registerDropdown()

declare global { var editor: any }
window.editor = editor