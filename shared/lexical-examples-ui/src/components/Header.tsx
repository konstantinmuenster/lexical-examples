import { ComponentType } from "react";
import { Box } from "lucide-react";

type HeaderProps = {
  name: string;
  Description?: ComponentType;
};

export const Header: React.FC<HeaderProps> = ({ name, Description }) => {
  return (
    <div className="mb-6 mt-1 rounded-lg bg-purple-100 px-3 py-4">
      <h1 className="flex items-center gap-x-2 text-xl font-medium">
        <Box size={24} /> {name}
      </h1>
      {Description && (
        <div className="mt-4 px-1 text-sm text-gray-700">
          <Description />
        </div>
      )}
    </div>
  );
};
