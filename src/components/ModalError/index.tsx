import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Description, Overlay, Title } from "./styles";
import { WarningCircle, X } from "phosphor-react";
import { useContext } from "react";
import { ResponseGPTContext } from "../../contexts/ResponseGPTContext";
import { GenerateCodeContext } from "../../contexts/GenerateCodeContext";

interface ModalErrorProps {
  description: string;
  origin: string;
}
export function ModalError({ description, origin }: ModalErrorProps) {
  const { setFixError } = useContext(ResponseGPTContext);
  const { setGenerateError } = useContext(GenerateCodeContext);

  function handleCloseModal() {
    origin === "GenerateCode" ? setGenerateError(false) : setFixError(false);
  }
  return (
    <Dialog.Root defaultOpen onOpenChange={handleCloseModal}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>
            Error
            <WarningCircle size={24} />
          </Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <Description>{description}</Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
