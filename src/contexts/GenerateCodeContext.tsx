import { createContext, ReactNode, useState } from "react";
import { apiChatGPT, chatData } from "../lib/axios";

interface GenerateCodeContextData {
  isLoading: boolean;
  result: string;
  copied: boolean;
  setLanguageGenerateCode: (language: string) => void;
  setCopied: (copied: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  generateCode: (code: string) => void;
}

export const GenerateCodeContext = createContext({} as GenerateCodeContextData);

export function GenerateCodeProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [languageGenerateCode, setLanguageGenerateCode] =
    useState("JAVASCRIPT");

  function generateCode(code: string) {
    const prompt = `Create a code ${languageGenerateCode} without comments for the following instruction: \n\n${code}`;

    setIsLoading(true);
    apiChatGPT
      .post("/completions", {
        ...chatData,
        prompt,
      })
      .then((response) => {
        setResult(response.data?.choices[0].text);
      })
      .catch((error) => {
        setResult(error);
      })
      .finally(() => {
        setIsLoading(false);
        setCopied(false);
      });
  }
  return (
    <GenerateCodeContext.Provider
      value={{
        isLoading,
        copied,
        result,
        setIsLoading,
        generateCode,
        setCopied,
        setLanguageGenerateCode,
      }}
    >
      {children}
    </GenerateCodeContext.Provider>
  );
}
