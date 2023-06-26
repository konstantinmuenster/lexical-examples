import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { $createParagraphNode, $createTextNode } from "lexical";
import { $initEditorContent, logError, theme } from "lexical-examples-utils";

const getInitialNodes = () => [
  $createParagraphNode().append(
    $createTextNode(
      "Mollit sit quis aliquip tempor ex anim exercitation duis aute tempor enim commodo minim aliqua mollit. Cillum non deserunt sit adipisicing id ad et nisi sint est ut voluptate magna. Eu nostrud sunt laboris sint veniam. In magna proident id proident."
    )
  ),
];

const config: InitialConfigType = {
  namespace: "lexical",
  onError: logError,
  theme,
  editorState: () => $initEditorContent({ nodes: getInitialNodes() }),
};

export function Editor() {
  return (
    <LexicalComposer initialConfig={config}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={null}
      />
    </LexicalComposer>
  );
}
