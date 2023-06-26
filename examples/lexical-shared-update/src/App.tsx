import React from "react";
import ReactDOM from "react-dom/client";

import { EditorContainer } from "lexical-examples-ui";

import "./App.css";

import { Editor } from "./Editor";

const App = () => {
  return (
    <EditorContainer name="Shared update">
      <Editor />
    </EditorContainer>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
