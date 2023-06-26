import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { Comment as CommentType } from "./CommentNode";

type CommentProps = {
  comment: CommentType;
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="relative rounded-xl bg-yellow-200 px-1 py-4 after:absolute after:-right-8 after:-top-4 after:text-2xl after:font-bold after:uppercase after:content-['💬']">
      <LexicalNestedComposer initialEditor={comment}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          ErrorBoundary={LexicalErrorBoundary}
          placeholder={null}
        />
      </LexicalNestedComposer>
    </div>
  );
};
