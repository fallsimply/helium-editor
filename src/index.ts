import registerDropdown from "./dropdown"
import { $ } from "@fallsimply/helium/utils"
import Helium from "@fallsimply/helium"

// $("[toolbar] button[admin]").addEventListener("click", () => {
// 	let elem = prompt("Element Name", "s")
// 	replaceInline(<any>elem)
// })

declare global {
	var editor: any
}

window.editor = new Helium()

registerDropdown()