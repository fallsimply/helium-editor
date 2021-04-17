type ElementMap = HTMLElementTagNameMap
type ElementKey = keyof ElementMap
type Elements<T extends ElementKey> = NodeListOf<ElementMap[T]>
type Selector<T extends string> = `${ string }${ T }${ string }`

export const $  = <T extends ElementKey>(sel: Selector<T>): ElementMap[T] | null => 
	document.querySelector(sel)
export const $$ = <T extends ElementKey>(sel: Selector<T>): Elements<T> | null =>
	document.querySelectorAll(sel)