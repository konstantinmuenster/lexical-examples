import path from "path";

import LexicalExamplesPreset from "lexical-examples-ui/dist/tailwind";

const LIBRARY_PATH = path.dirname(require.resolve("lexical-examples-ui"));

export default {
  content: [
    ...LexicalExamplesPreset.content,
    path.join(LIBRARY_PATH, "**/*.{js,mjs,cjs}"),
  ],
  presets: [LexicalExamplesPreset],
};
