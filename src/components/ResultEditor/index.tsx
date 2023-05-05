import { useContext } from "react";
import Editor from "@monaco-editor/react";
import { ResponseGPTContext } from "../../contexts/ResponseGPTContext";
import {
  ContainerResultEditor,
  ContentClipboard,
  WrapperClipboard,
  WrapperResultEditor,
} from "./styles";
import { CopyToClipboard } from "../CopyToClipboard";
import { ModalError } from "../ModalError";

export function ResultEditor() {
  const { language, result, fixError, copied, setCopied } =
    useContext(ResponseGPTContext);

  return (
    <ContainerResultEditor>
      {fixError && (
        <ModalError
          description="Não foi possível corrigir o código. Tente novamente mais tarde!"
          origin="ResultEditor"
        />
      )}
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
