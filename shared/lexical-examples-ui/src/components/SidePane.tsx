import { Wand } from "lucide-react";
import React from "react";

export type SidePaneProps = {
  title?: string;
  content?: React.ReactNode;
};

export const SidePane: React.FC<SidePaneProps> = (props) => {
  return (
    <aside className="absolute -left-[320px] top-0 hidden max-w-[300px] p-4 xl:block">
      <Wand size={20} className="absolute right-8 top-8 stroke-gray-500" />
      <div className="rounded-xl bg-gray-100 p-6 pb-10">
        {props.title && (
          <h3 className="mb-4 flex items-center gap-2  text-lg font-medium">
            {props.title}
          </h3>
        )}
        <div className="prose text-sm leading-relaxed text-gray-700">
          {props.content}
        </div>
      </div>
    </aside>
  );
};
