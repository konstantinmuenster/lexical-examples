import React from "react";
import ReactDOM from "react-dom/client";

import { AppContainer } from "lexical-examples-ui";

import "./App.css";

import { AppConfig } from "./App.config";
import { Editor } from "./Editor";

const App = () => {
  return (
    <AppContainer {...AppConfig}>
      <Editor />
    </AppContainer>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
