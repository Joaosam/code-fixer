import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  CustomForm,
  CustomInput,
  GenerateCodeContainer,
  WrapperCopy,
} from "./styles";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useContext } from "react";
import { ActionButton } from "../../components/ActionButton";
import { CopyToClipboard } from "../../components/CopyToClipboard";
import { GenerateCodeContext } from "../../contexts/GenerateCodeContext";
import { ModalError } from "../../components/ModalError";

const generateCodeschema = yup.object().shape({
  code: yup.string().required("Code is required"),
});

type GenerateCodeFormData = yup.InferType<typeof generateCodeschema>;

export function GenerateCode() {
  const { result, copied, generateError, setCopied, generateCode, isLoading } =
    useContext(GenerateCodeContext);
  const { handleSubmit, register, reset } = useForm<GenerateCodeFormData>({
    resolver: yupResolver(generateCodeschema),
  });

  function handleGenerateCode(data: GenerateCodeFormData) {
    generateCode(data.code);
    reset();
  }

  return (
    <GenerateCodeContainer>
      {generateError && (
        <ModalError
          description="Não foi possivel gerar o código. Tente novamente mais tarde!"
          origin="GenerateCode"
        />
      )}
      <h1>Generate Code</h1>
      <CustomForm onSubmit={handleSubmit(handleGenerateCode)}>
        <CustomInput
          autoComplete="off"
          type="text"
          placeholder="
What's your doubt?"
          {...register("code")}
        />
        <ActionButton
          isLoading={isLoading}
          messageLoading="Generating"
          messageLoaded="Generate"
          icon={"</> "}
        />
      </CustomForm>
      <SyntaxHighlighter
        className="syntaxHighlighter"
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={dracula}
        options={{
          lineNumbers: true,
        }}
      >
        {result}
      </SyntaxHighlighter>
      <WrapperCopy withoutResult={!result}>
        <CopyToClipboard
          copied={copied}
          result={result}
          setCopied={setCopied}
        />
      </WrapperCopy>
    </GenerateCodeContainer>
  );
}
