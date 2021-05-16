export default () => document.querySelectorAll("details[dropdown]").forEach((elem: HTMLDetailsElement) => {
	let toggle = () => elem.open = !elem.open

	/* Toggle if element or its children are not focused */
	let onBlur = () => elem.matches(":focus-within") || toggle()

	/* Summary Contents should not be tabable */
	let summary = elem.querySelector("summary")
	summary.querySelectorAll("*").forEach((elem: HTMLElement) => elem.tabIndex = -1)
	
	/* Mount to DOM */
	elem.querySelector("button").addEventListener("click", toggle)
	elem.addEventListener("blur", onBlur, true)
})