import { ReactNode, useCallback, useMemo } from "react";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import {
  $initEditorContent,
  $createDefaultParagraphNode,
  logError,
  theme,
  debounce,
} from "lexical-examples-utils";

import { $createCommentNode, CommentNode } from "./nodes/Comment";
import { EditorAutoSaveContext, useEditorAutoSave } from "./context/update";

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
      <EditorContext>
        <EditorPlugins />
      </EditorContext>
    </LexicalComposer>
  );
};

const EditorContext: React.FC<{ children?: ReactNode }> = (props) => {
  const [editor] = useLexicalComposerContext();

  const handleUpdate = useCallback(() => {
    console.log(editor.getEditorState().toJSON());
  }, [editor, props]);

  const debouncedUpdate = useMemo(() => {
    return debounce(handleUpdate, 2000);
  }, [handleUpdate]);

  return (
    <EditorAutoSaveContext handleUpdate={debouncedUpdate}>
      {props.children}
    </EditorAutoSaveContext>
  );
};

const EditorPlugins = () => {
  const { emitUpdate } = useEditorAutoSave();

  return (
    <>
      <RichTextPlugin
        placeholder={null}
        contentEditable={<ContentEditable />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <OnChangePlugin onChange={emitUpdate} ignoreSelectionChange />
    </>
  );
};
