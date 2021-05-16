import { defineConfig } from "vite";

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
	},
	
});
