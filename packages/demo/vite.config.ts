import { defineConfig } from "vite";
import path from "path"

const relative = (dir: TemplateStringsArray) => `${path.resolve(__dirname)}/${dir[0]}/`

const production = (config: object, mode: string) => mode !== "development" ? config : {}

// DOCS: https://vitejs.dev/config/
export default defineConfig({
	publicDir: "public",
	build: {
		target: "es2020",
		minify: false,
	},
	resolve: {
		alias: {
			'@fallsimply/helium': '../helium/',
		}
	}
	
});
