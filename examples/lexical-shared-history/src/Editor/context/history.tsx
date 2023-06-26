import { createContext, ReactNode, useContext, useMemo } from "react";

import {
  createEmptyHistoryState,
  HistoryState,
} from "@lexical/react/LexicalHistoryPlugin";

type EditorHistoryStateContext = {
  historyState?: HistoryState;
};

const Context = createContext<EditorHistoryStateContext>({});

export const EditorHistoryStateContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const history = useMemo(
    () => ({ historyState: createEmptyHistoryState() }),
    []
  );
  return <Context.Provider value={history}>{children}</Context.Provider>;
};

export const useEditorHistoryState = (): EditorHistoryStateContext => {
  return useContext(Context);
};
