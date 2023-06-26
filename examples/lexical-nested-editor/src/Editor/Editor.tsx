import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { $getRoot, $createParagraphNode, $createTextNode } from "lexical";

const config = {
  theme: {
    root: "editor",
  },
  namespace: "lexical",
  onError: (error: any) => {
    console.error(error);
  },
  editorState: () => {
    const root = $getRoot();
    if (root.getFirstChild() === null) {
      const paragraph = $createParagraphNode();
      paragraph.append($createTextNode("paragraph"));
      root.append(paragraph);
    }
  },
};

export const commonTextPluginProps = {
  contentEditable: <ContentEditable />,
  ErrorBoundary: LexicalErrorBoundary,
  placeholder: null,
};

export function Editor() {
  return (
    <LexicalComposer initialConfig={config}>
      <RichTextPlugin {...commonTextPluginProps} />
    </LexicalComposer>
  );
}
