import { Box, ChevronRight } from "lucide-react";
import { startTransition } from "react";

type ExampleListProps = {
  selectExample: (id: string) => void;
  examples: {
    id: string;
    title: string;
    Component: React.LazyExoticComponent<React.ComponentType>;
  }[];
};

export const ExampleList: React.FC<ExampleListProps> = ({
  examples,
  selectExample,
}) => {
  return (
    <div className="mx-auto my-24 max-w-lg">
      <div className="mb-6 mt-1 rounded-lg bg-purple-100 px-6 py-4">
        <h1 className="flex items-center gap-x-2 text-xl font-medium">
          <Box size={24} /> lexical-examples
        </h1>
      </div>
      <div className="flex-col items-center justify-center gap-4">
        {examples.map(({ id, title }) => {
          return (
            <button
              key={id}
              className="group flex w-full items-center justify-between gap-2 rounded-lg border-2 border-gray-100 bg-gray-100 px-6 py-2 text-left font-medium transition-all hover:border-gray-200"
              onClick={() => startTransition(() => selectExample(id))}
            >
              {title}{" "}
              <ChevronRight
                size={18}
                className="transition-all group-hover:translate-x-2"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
