import { ChevronLeft } from "lucide-react";

type ExampleProps = {
  unselectExample: () => void;
  example: {
    id: string;
    title: string;
    Component: React.LazyExoticComponent<React.ComponentType>;
  };
};

export const Example: React.FC<ExampleProps> = ({
  example,
  unselectExample,
}) => {
  return (
    <div className="mx-auto my-12 max-w-xl">
      <button
        className="-mb-10 flex items-center rounded-lg border-2 border-gray-100 bg-gray-100 px-2 py-2 text-sm font-medium transition-all hover:border-gray-200"
        onClick={() => unselectExample()}
      >
        <ChevronLeft size={24} />
      </button>
      <example.Component />
    </div>
  );
};
