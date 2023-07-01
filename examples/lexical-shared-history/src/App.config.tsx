import { memo } from "react";

import * as pkg from "../package.json";

const Description = memo(() => (
  <ol className="prose text-sm">
    <li>Type something in the comment editor.</li>
    <li>Type something in the parent editor above.</li>
    <li>Hit ⌘Z to revert changes in parent and comment.</li>
  </ol>
));

export const AppConfig = {
  slug: pkg.name,
  name: "Shared history",
  Description: Description,
};
