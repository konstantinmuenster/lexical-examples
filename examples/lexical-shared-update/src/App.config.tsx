import { memo } from "react";

import * as pkg from "../package.json";

const Description = memo(() => (
  <div>
    <p className="mb-4">
      Usually, content updates from a nested editor do not trigger an update in
      the parent editor. This example adds an AutoSaveContext that propagates
      updates to a shared update handler.
    </p>
    <p>Take a look at the logs when you edit content in both editors.</p>
  </div>
));

export const AppConfig = {
  slug: pkg.name,
  name: "Shared Update",
  description: Description,
};
