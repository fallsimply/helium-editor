type ElementMap = HTMLElementTagNameMap 
type ElementKey = keyof ElementMap
type Elements<T extends ElementKey> = NodeListOf<ElementMap[T]>
export type Selector<T extends string> = `${ string }${ T }${ string }`

function $<T extends ElementKey>(sel: Selector<T>, target: Document | Element = document): ElementMap[T] | HTMLElement | null { 
	return target.querySelector(sel)
}

function $$ <T extends ElementKey>(sel: Selector<T>, target: Document | Element = document): Elements<T> | null {
	return target.querySelectorAll(sel)
}
export {$, $$}