import type { ReactNode } from "react";
import {
  $createParagraphNode,
  $createTextNode,
  DecoratorNode,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedEditor,
  SerializedLexicalNode,
  Spread,
  createEditor,
} from "lexical";
import { $initEditorContent } from "lexical-examples-utils";

import { Comment as CommentComponent } from "./CommentComponent";

/**
 * Types
 */

export type Comment = LexicalEditor;
export type SerializedComment = SerializedEditor;

export type SerializedCommentNode = Spread<
  { comment: SerializedComment },
  SerializedLexicalNode
>;

export const CommentNodeType = "comment";

/**
 * Decorator Node
 */

export class CommentNode extends DecoratorNode<ReactNode> {
  __comment: LexicalEditor;

  constructor(comment?: Comment, key?: NodeKey) {
    super(key);
    this.__comment = comment ?? createEditor();
  }

  static getType(): string {
    return CommentNodeType;
  }

  getComment(): Comment {
    const self = this.getLatest();
    return self.__comment;
  }

  setComment(comment: Comment) {
    const self = this.getWritable();
    self.__comment = comment;
  }

  static clone(node: CommentNode): CommentNode {
    return new CommentNode(node.__comment, node.__key);
  }

  createDOM(): HTMLElement {
    return document.createElement("div");
  }

  updateDOM(): false {
    return false;
  }

  static importJSON(serializedNode: SerializedCommentNode): CommentNode {
    const { comment: serializedComment } = serializedNode;

    const nestedCommentEditor = createEditor();
    const editorState = nestedCommentEditor.parseEditorState(
      serializedComment.editorState
    );

    if (!editorState.isEmpty()) {
      nestedCommentEditor.setEditorState(editorState);
    }

    return new CommentNode(nestedCommentEditor);
  }

  exportJSON(): SerializedCommentNode {
    return {
      comment: this.__comment.toJSON(),
      type: CommentNodeType,
      version: 1,
    };
  }

  decorate(): ReactNode {
    return <CommentComponent comment={this.__comment} />;
  }
}

export function $createCommentNode(comment?: string): CommentNode {
  const editor = createEditor();

  if (comment) {
    editor.update(
      () => {
        $initEditorContent({
          nodes: [$createParagraphNode().append($createTextNode(comment))],
        });
      },
      { discrete: true }
    );
  }

  return new CommentNode(editor);
}

export function $isCommentNode(node: LexicalNode): node is CommentNode {
  return node.__type === CommentNode.getType();
}
