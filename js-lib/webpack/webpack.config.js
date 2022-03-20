import { join } from "path";
import { cwd } from "process";

export default {
	entry: "./src/index.js",
	mode: "production",
	output: {
		filename: "index.bundle.js",
		path: join(cwd(), "dist")
	}
};