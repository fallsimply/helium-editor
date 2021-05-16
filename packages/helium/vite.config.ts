import { defineConfig } from "vite";

const relative = (dir: TemplateStringsArray) => `${__dirname}/${dir[0]}/`

// DOCS: https://vitejs.dev/config/
export default defineConfig({
	publicDir: "public",
	build: {
		lib: {
			entry: relative`index.ts`,
			name: "helium",
			formats: ["es"],
		},
		target: "es2020",
	}
});
