import { $, $$ } from "./selectors";

export { $, $$ }

export type KV<K extends string, V> = Partial<Record<K, V>>

export const HumanCase = (str: string) => str.length >= 1 
	? str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase()
	: str