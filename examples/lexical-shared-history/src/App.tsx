import React from "react";
import ReactDOM from "react-dom/client";

import { EditorContainer } from "lexical-examples-ui";

import "./App.css";

import { Editor } from "./Editor";

const App = () => {
  return (
    <EditorContainer
      name="Shared history"
      instructions={{
        title: "Instructions",
        content: (
          <ol>
            <li>Type something in the comment editor.</li>
            <li>Type something in the parent editor above.</li>
            <li>Hit ⌘Z to revert changes in parent and comment.</li>
          </ol>
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
