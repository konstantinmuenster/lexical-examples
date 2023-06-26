type EditorContainerProps = {
  name: string;
  children: React.ReactNode;
};

export const EditorContainer: React.FC<EditorContainerProps> = (props) => {
  return (
    <div
      className="mx-auto my-16 max-w-xl rounded-xl p-4"
      data-lexical-examples-editor-container
    >
      <h1 className="mb-8 rounded-lg bg-purple-100 px-3 py-2 text-2xl font-bold tracking-wide text-blue-950">
        {props.name}
      </h1>
      {props.children}
    </div>
  );
};
