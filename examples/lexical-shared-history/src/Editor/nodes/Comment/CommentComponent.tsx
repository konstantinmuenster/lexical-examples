import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import { themeNestedEditor as theme } from "lexical-examples-utils";
import { Comment as StyledComment } from "lexical-examples-ui";

import { Comment as CommentType } from "./CommentNode";
import { useEditorHistoryState } from "../../context/history";

type CommentProps = {
  comment: CommentType;
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { historyState } = useEditorHistoryState();

  return (
    <StyledComment>
      <LexicalNestedComposer initialTheme={theme} initialEditor={comment}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          ErrorBoundary={LexicalErrorBoundary}
          placeholder={null}
        />
        <HistoryPlugin externalHistoryState={historyState} />
      </LexicalNestedComposer>
    </StyledComment>
  );
};
