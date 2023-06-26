import React from "react";
import ReactDOM from "react-dom/client";

import { EditorContainer } from "lexical-examples-ui";

import "./App.css";

import { Editor } from "./Editor";

function App() {
  return (
    <EditorContainer name="Nested Editor">
      <Editor />
    </EditorContainer>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
