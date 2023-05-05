import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["bg-components-2"]};
  color: ${(props) => props.theme["text-default"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  font-size: 24px;
  gap: 12px;
  margin-bottom: 16px;

  svg {
    color: ${(props) => props.theme.danger};
  }
`;

export const Description = styled(Dialog.Description)`
  font-size: 16px;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.white};
`;
