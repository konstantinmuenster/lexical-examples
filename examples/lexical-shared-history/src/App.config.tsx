import { memo } from "react";

import * as pkg from "../package.json";

const Description = memo(() => (
  <div>
    <ol>
      <li>Type something in the comment editor.</li>
      <li>Type something in the parent editor above.</li>
      <li>Hit ⌘Z to revert changes in parent and comment.</li>
    </ol>
  </div>
));

export const AppConfig = {
  slug: pkg.name,
  name: "Shared history",
  description: Description,
};
