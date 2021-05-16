import { defineConfig } from "vite"

// DOCS: https://vitejs.dev/config/
export default defineConfig({
	publicDir: "public",
	build: {
		lib: {
			entry: "./index.ts",
			name: "helium",
			formats: ["es"],
		},
		target: "es2020",
	}
})
