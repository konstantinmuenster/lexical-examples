import { AppContainer } from "lexical-examples-ui";

import "./App.css";

import { AppConfig } from "./App.config";
import { Editor } from "./Editor";

export default () => {
  return (
    <AppContainer {...AppConfig}>
      <Editor />
    </AppContainer>
  );
};
