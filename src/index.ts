import { replaceInline } from "./script/nodeUtils"
import { registerInline, registerBlock, Inline, Block } from "./script/actions"
import registerDropdown from "./dropdown"
import { $ } from "./script/utils"

$("[toolbar] button[admin]").addEventListener("click", () => {
	let elem = prompt("Element Name", "s")
	replaceInline(<any>elem)
})

registerInline(Inline)
registerBlock(Block)

registerDropdown()