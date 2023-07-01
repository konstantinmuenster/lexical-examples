import { ComponentType } from "react";

import { ExternalLinks } from "./ExternalLinks";
import { Header } from "./Header";

type AppContainerProps = {
  name: string;
  slug: string;
  Description?: ComponentType;
  children: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <div className="mx-auto my-16 max-w-xl">
      <ExternalLinks slug={props.slug} />
      <main className="my-4">
        <Header name={props.name} Description={props.Description} />
        {props.children}
      </main>
    </div>
  );
};
