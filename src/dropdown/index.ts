import { $$ } from "@fallsimply/helium/utils"

export default () => $$("details[dropdown]").forEach((elem: HTMLDetailsElement) => {
	let toggle = () => elem.open = !elem.open
	let onBlur = () => !elem.matches(":focus-within")
		? toggle() : null
	elem.querySelector("button").addEventListener("click", toggle)
	elem.addEventListener("blur", onBlur, true)
})