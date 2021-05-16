export { $, $$ } from "./selectors"

export const HumanCase = (str: string) => str.length >= 1
	? str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase()
	: str