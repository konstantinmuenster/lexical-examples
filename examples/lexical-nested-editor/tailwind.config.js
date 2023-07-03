import path from "path";

import LexicalExamplesPreset from "lexical-examples-ui/dist/tailwind";
import { theme } from "lexical-examples-utils";

const LIBRARY_PATH = path.dirname(require.resolve("lexical-examples-ui"));

export default {
  safelist: theme.root.split(" "),
  presets: [LexicalExamplesPreset],
  content: [
    ...LexicalExamplesPreset.content,
    path.join(LIBRARY_PATH, "**/*.{js,mjs,cjs}"),
  ],
};
