import type { InitialConfigType } from "@lexical/react/LexicalComposer";

export const theme: InitialConfigType["theme"] = {
  root: "outline-none w-full focus-visible:outline-none prose p-4 border-2 border-gray-500/25 rounded-xl",
};

export const themeNestedEditor: InitialConfigType["theme"] = {
  root: "outline-none w-full focus-visible:outline-none prose px-2",
};
