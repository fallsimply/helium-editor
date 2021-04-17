import { $$ } from "../script/utils"

export default function () {
	$$("details[dropdown]").forEach((elem: HTMLDetailsElement) => {
		console.log(elem)
		let toggle = () => elem.open = !elem.open
		let onBlur = () => !elem.matches(":focus-within") ? toggle() : null
		elem.querySelector("button").addEventListener("click", toggle)
		elem.addEventListener("blur", onBlur, true)
	})
}