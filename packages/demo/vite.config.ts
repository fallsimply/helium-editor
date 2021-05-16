import { defineConfig } from "vite"
import path from "node:path"

// DOCS: https://vitejs.dev/config/
export default defineConfig({
	publicDir: "public",
	build: {
		target: "es2020",
		minify: false,
	},
})
