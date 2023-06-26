import { Box } from "lucide-react";

import { ExternalLinks } from "./ExternalLinks";
import { SidePane, SidePaneProps } from "./SidePane";

type EditorContainerProps = {
  name: string;
  children: React.ReactNode;
  instructions?: SidePaneProps;
};

export const EditorContainer: React.FC<EditorContainerProps> = (props) => {
  return (
    <div className="mx-auto my-16 max-w-xl">
      <ExternalLinks />
      <div className="relative flex justify-center">
        {props.instructions && <SidePane {...props.instructions} />}
        <main>
          <div className="rounded-xl p-4">
            <h1 className="mb-8 mt-1 flex items-center gap-x-2 rounded-lg bg-purple-100 px-3 py-2 text-xl font-medium">
              <Box size={24} /> {props.name}
            </h1>
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};
