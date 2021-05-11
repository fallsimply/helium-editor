import { defineConfig } from "vite";
import path from "path"

const relative = (dir: TemplateStringsArray) => `${path.resolve(__dirname)}/${dir[0]}/`

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: "public",
	server: {
		// host: "simply.local"
	},
	resolve: {
		alias: {
			"~": relative`lib`,
			"@fallsimply/helium": relative`lib`
		}
	},
	build: {
		lib: {
			entry: relative`lib/index.ts`,
			name: "helium",
			formats: ["es"],
		},
		target: "es2020",
		minify: false,

	},
});
