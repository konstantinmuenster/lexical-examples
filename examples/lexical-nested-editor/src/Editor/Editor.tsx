import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import {
  $initEditorContent,
  $createDefaultParagraphNode,
  logError,
  theme,
} from "lexical-examples-utils";
import { $createCommentNode, CommentNode } from "./nodes/Comment";

const getInitialContent = () => [
  $createDefaultParagraphNode(),
  $createCommentNode("This is a comment node with a nested editor!"),
];

const config: InitialConfigType = {
  namespace: "lexical",
  nodes: [CommentNode], // 👈 CommentNode is a custom node type with a nested editor
  onError: logError,
  theme,
  editorState: () => $initEditorContent({ nodes: getInitialContent() }),
};

export const Editor = () => {
  return (
    <LexicalComposer initialConfig={config}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={null}
      />
    </LexicalComposer>
  );
};
