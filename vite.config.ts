import { defineConfig } from "vite";
import path from "path"

const relative = (dir: TemplateStringsArray) => `${path.resolve(__dirname)}/${dir[0]}/`

const production = (config: object, mode: string) => mode !== "development" ? config : {}

// DOCS: https://vitejs.dev/config/
export default defineConfig(env => ({
	publicDir: "public",
	resolve: {
		alias: {
			"~": relative`lib`,
			"@fallsimply/helium": relative`lib`
		}
	},
	...production({ 
		build: {
			lib: {
				entry: relative`lib/index.ts`,
				name: "helium",
				formats: ["es"],
			},
			target: "es2020",
			minify: false,
		}
	}, env.mode)
}));
