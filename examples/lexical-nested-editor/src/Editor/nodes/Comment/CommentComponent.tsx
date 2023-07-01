import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { themeNestedEditor as theme } from "lexical-examples-utils";
import { Comment as StyledComment } from "lexical-examples-ui";

import { Comment as CommentType } from "./CommentNode";

type CommentProps = {
  comment: CommentType;
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <StyledComment>
      <LexicalNestedComposer initialTheme={theme} initialEditor={comment}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          ErrorBoundary={LexicalErrorBoundary}
          placeholder={null}
        />
      </LexicalNestedComposer>
    </StyledComment>
  );
};
