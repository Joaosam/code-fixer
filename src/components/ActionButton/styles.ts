import styled from "styled-components";

interface ToCorrectProps {
  page?: string;
}

export const ToCorrect = styled.button<ToCorrectProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.4rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme["default-green"]};
  border-radius: 0.8rem;
  color: ${(props) => props.theme["text-default"]};
  transition: 0.3s;

  span {
    border-color: ${(props) => props.theme["default-green"]}
      ${(props) => props.theme["default-green"]} transparent !important;
  }

  &:not(:disabled):hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    cursor: pointer;
    background-color: ${(props) => props.theme["default-green"]};

    span {
      border-color: ${(props) => props.theme["text-default"]}
        ${(props) => props.theme["text-default"]} transparent !important;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (min-width: 1440px) {
    padding: ${(props) => props.page === "home" && "1.8rem 3.6rem"};
    font-size: ${(props) => props.page === "home" && "1.6rem"};
  }
`;
