import { Fragment, useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import { ResponseGPTContext } from "../../contexts/ResponseGPTContext";
import {
  ContainerResultEditor,
  ContentClipboard,
  WrapperClipboard,
  WrapperResultEditor,
} from "./styles";
import { CopyToClipboard } from "../CopyToClipboard";

export function ResultEditor() {
  const { language, result, copied, setCopied } =
    useContext(ResponseGPTContext);

  console.log(result);
  return (
    <ContainerResultEditor>
      <WrapperClipboard>
        <div className="language">
          <span>{language}</span>
        </div>
        <ContentClipboard>
          <CopyToClipboard
            copied={copied}
            result={result}
            setCopied={setCopied}
          />
        </ContentClipboard>
      </WrapperClipboard>
      <WrapperResultEditor>
        <Editor
          value={result}
          defaultLanguage={language.toLowerCase()}
          defaultValue="// RESULT HERE"
          options={{ readOnly: true }}
          theme="vs-dark"
        />
      </WrapperResultEditor>
    </ContainerResultEditor>
  );
}
