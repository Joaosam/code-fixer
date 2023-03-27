import { createContext, ReactNode, useState } from "react";
import { apiChatGPT, chatData } from "../lib/axios";

interface ResponseGPTContextData {
  isLoading: boolean;
  language: string;
  result: string;
  code: string;
  copied: boolean;
  setCopied: (copied: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setLanguage: (language: any) => void;
  getCurrentCode: (code: string) => void;
  getResponseGPT: () => void;
  handleCopy: () => void;
}

export const ResponseGPTContext = createContext({} as ResponseGPTContextData);

export function ResponseGPTProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState("JAVASCRIPT");
  const apiKey = process.env.GPT_KEY;

  function getCurrentCode(code: string) {
    setCode(code);
  }

  function handleCopy() {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
    }
  }

  function getResponseGPT() {
    const prompt = `Response in portuguese. First point me up to 3 improvements in the following code, and at the end display the refactored code. Remember that whatever is a comment starts with the language comment characters ${language}\n\n${code}`;

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
      });
  }

  return (
    <ResponseGPTContext.Provider
      value={{
        isLoading,
        language,
        result,
        code,
        copied,
        setCopied,
        setIsLoading,
        setLanguage,
        getCurrentCode,
        getResponseGPT,
        handleCopy,
      }}
    >
      {children}
    </ResponseGPTContext.Provider>
  );
}
