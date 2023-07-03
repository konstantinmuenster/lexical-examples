import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/App.tsx",
  },
  treeshake: true,
  splitting: true,
  skipNodeModulesBundle: true,
  format: ["esm", "cjs"],
  externals: ["react", "react-dom"],
  dts: true,
  minify: true,
  outDir: "dist",
  clean: true,
  ...options,
}));
