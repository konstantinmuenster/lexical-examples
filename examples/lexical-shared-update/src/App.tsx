import React from "react";
import ReactDOM from "react-dom/client";

import { EditorContainer } from "lexical-examples-ui";

import "./App.css";

import { Editor } from "./Editor";

const App = () => {
  return (
    <EditorContainer
      name="Shared update"
      instructions={{
        title: "What does it do?",
        content: (
          <>
            <p className="mb-4">
              Usually, content updates from a nested editor do not trigger an
              update in the parent editor. This example adds a shared update
              handler via the AutoSaveContext.
            </p>
            <p className="font-medium">
              Take a look at the logs when you edit content in both editors.
            </p>
          </>
        ),
      }}
    >
      <Editor />
    </EditorContainer>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
