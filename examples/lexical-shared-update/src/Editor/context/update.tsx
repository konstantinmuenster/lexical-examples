import { createContext, ReactNode, useContext, useMemo } from "react";

const defaultEmitUpdate = () => {
  console.log("Lexical Update");
};

type EditorAutoSaveContext = {
  emitUpdate: () => void;
};

const Context = createContext<EditorAutoSaveContext>({
  emitUpdate: defaultEmitUpdate,
});

export const EditorAutoSaveContext = ({
  handleUpdate,
  children,
}: {
  handleUpdate?: () => void;
  children: ReactNode;
}) => {
  const update = useMemo(
    () => ({ emitUpdate: handleUpdate ?? defaultEmitUpdate }),
    [handleUpdate]
  );
  return <Context.Provider value={update}>{children}</Context.Provider>;
};

export const useEditorAutoSave = (): EditorAutoSaveContext => {
  return useContext(Context);
};
