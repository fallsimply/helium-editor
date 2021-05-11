import registerDropdown from "./dropdown"
import Helium from "@fallsimply/helium"

declare global {
	var editor: any
}

window.editor = new Helium()

registerDropdown()