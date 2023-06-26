import { $getRoot, LexicalNode } from "lexical";

type InitEditorContentProps = {
  nodes?: LexicalNode[];
};

export const $initEditorContent = ({ nodes }: InitEditorContentProps) => {
  const root = $getRoot();

  if (root.getFirstChild() !== null) return;

  if (nodes?.length) {
    root.append(...nodes);
  }
};
