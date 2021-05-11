import registerDropdown from "./dropdown"
import Helium from "@fallsimply/helium"
import SampleHandlers from "~/handlers"

declare global {
	var editor: any
}

let editor = new Helium()

editor.registerActions(...SampleHandlers)

editor.insert("image", {
	src: "https://picsum.photos/seed/helium-sample/400/400",
	width: 200,
})
editor.insert("audio", { controls: true })

registerDropdown()

window.editor = editor