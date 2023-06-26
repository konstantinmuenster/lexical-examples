import { Box } from "lucide-react";

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
      <a
        href="https://github.com/konstantinmuenster/lexical-examples"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-right text-xs font-medium text-gray-500 hover:text-gray-800"
      >
        @konstantinmuenster/lexical-examples
      </a>
      <h1 className="mb-8 mt-1 flex items-center gap-x-2 rounded-lg bg-purple-100 px-3 py-2 text-xl font-medium">
        <Box size={24} /> {props.name}
      </h1>
      {props.children}
    </div>
  );
};
