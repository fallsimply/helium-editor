/* I */


const onChange = (mutations: MutationRecord[], observer: MutationObserver) => {
	if (mutations.length <= 0) return

	let target = mutations[0].target as Element

	if (target.nodeName === "A") {

	}

	if (target.hasAttribute("editable")) {

	}
}



const detectChanges = () => {
	let obs = new MutationObserver(() => {})
}