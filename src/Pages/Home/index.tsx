import { MagicWand } from "phosphor-react";
import { useContext } from "react";
import { ActionButton } from "../../components/ActionButton";
import { CodeEditor } from "../../components/CodeEditor";
import { ResultEditor } from "../../components/ResultEditor";
import { ResponseGPTContext } from "../../contexts/ResponseGPTContext";
import { ContainerEditors, HomeContainer, WrapperButton } from "./styles";

export function Home() {
  const { isLoading, getResponseGPT, code } = useContext(ResponseGPTContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getResponseGPT();
  }
  return (
    <HomeContainer>
      <ContainerEditors>
        <CodeEditor />
        <ResultEditor />
      </ContainerEditors>
      <form onSubmit={handleSubmit}>
        <WrapperButton>
          <ActionButton
            code={code}
            page="home"
            isLoading={isLoading}
            messageLoading="Analyzing code"
            messageLoaded="To correct"
            icon={<MagicWand size={20} />}
          />
        </WrapperButton>
      </form>
    </HomeContainer>
  );
}
