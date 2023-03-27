import { useContext } from "react";
import Editor from "@monaco-editor/react";
import { CodeEditorContainer } from "./styles";
import { ResponseGPTContext } from "../../contexts/ResponseGPTContext";

export function CodeEditor() {
  const { getCurrentCode, language } = useContext(ResponseGPTContext);

  return (
    <CodeEditorContainer>
      <Editor
        theme="vs-dark"
        className="editor"
        language={language.toLowerCase()}
        defaultValue="// function helloWorld() 
//   console.log('Hello World!');
// }"
        onChange={(value) => value !== undefined && getCurrentCode(value)}
      />
    </CodeEditorContainer>
  );
}
