import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  LexicalNode,
} from "lexical";

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

export const $createDefaultParagraphNode = () => {
  return $createParagraphNode().append(
    $createTextNode(
      "Mollit sit quis aliquip tempor ex anim exercitation duis aute tempor enim commodo minim aliqua mollit. Cillum non deserunt sit adipisicing id ad et nisi sint est ut voluptate magna. Eu nostrud sunt laboris sint veniam. In magna proident id proident."
    )
  );
};
