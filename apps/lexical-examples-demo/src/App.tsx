import { lazy, useCallback, useMemo, useState } from "react";
import "./App.css";

import { ExampleList } from "./components/ExampleList";
import { Example } from "./components/Example";

const examples = [
  {
    id: "lexical-nested-editor",
    title: "Nested Editor",
    Component: lazy(() => import("./examples/LexicalNestedEditor")),
  },
  {
    id: "lexical-shared-history",
    title: "Shared History",
    Component: lazy(() => import("./examples/LexicalSharedHistory")),
  },
  {
    id: "lexical-shared-update",
    title: "Shared Update",
    Component: lazy(() => import("./examples/LexicalSharedUpdate")),
  },
];

export default () => {
  const [selectedExample, setSelectedExample] = useState<string>();

  const example = useMemo(() => {
    return examples.find(({ id }) => id === selectedExample);
  }, [selectedExample]);

  const unselectExample = useCallback(() => {
    return setSelectedExample(undefined);
  }, []);

  return example ? (
    <Example example={example} unselectExample={unselectExample} />
  ) : (
    <ExampleList examples={examples} selectExample={setSelectedExample} />
  );
};
