import { lazy, useCallback, useMemo, useState } from "react";
import "./App.css";

import { ExampleList } from "./components/ExampleList";
import { Example } from "./components/Example";

const examples = [
  {
    id: "lexical-nested-editor",
    title: "Lexical Nested Editor",
    Component: lazy(() => import("./examples/LexicalNestedEditor")),
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
