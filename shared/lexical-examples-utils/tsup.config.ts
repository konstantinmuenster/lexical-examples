import { defineConfig, Options } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/index.ts",
  },
  treeshake: true,
  splitting: true,
  format: ["esm", "cjs"],
  skipNodeModulesBundle: true,
  dts: true,
  clean: true,
  minify: true,
  target: "es2020",
  outDir: "dist",
  ...options,
}));
