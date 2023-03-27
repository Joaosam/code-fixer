import styled from "styled-components";

export const GenerateCodeContainer = styled.div`
  padding: 1.4rem;
  height: 80vh;
  width: 50vw;
  position: absolute;
  left: 37.5vw;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3rem);
  border-radius: 10px;
  box-shadow: 3px 3px 7px ${(props) => props.theme["bg-body"]},
    -3px -3px 7px ${(props) => props.theme["bg-secundary"]};

  h1 {
    color: ${(props) => props.theme["text-default"]};
    font-size: 2rem;
  }

  .syntaxHighlighter {
    font-size: 1.4rem;
    height: 65%;
    border-radius: 10px;

    outline: none;

    @media (min-width: 1440px) {
      height: 80%;
    }
  }

  @media (max-width: 768px) {
    width: 94%;
    position: absolute;
    top: 45vh;
    left: 1rem;
  }
`;

export const CustomForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.2rem;
`;

export const CustomInput = styled.input`
  padding: 1.2rem;
  width: 60%;
  border-radius: 10px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme["text-default"]};

  &:focus {
    outline: 1px solid ${(props) => props.theme["default-green"]};
  }
`;

interface WrapperCopyProps {
  withoutResult: boolean;
}

export const WrapperCopy = styled.div<WrapperCopyProps>`
  padding: 1.2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["bg-body"]};
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme["text-default"]};
  font-size: 1.2rem;
  right: 1.2rem;
  position: absolute;
  margin-top: 1.2rem;
  transition: 0.3s;

  &:hover {
    cursor: ${(props) => (props.withoutResult ? "default" : "pointer")};
    filter: ${(props) => (props.withoutResult ? "none" : "brightness(1.3)")};
    box-shadow: ${(props) =>
      props.withoutResult ? "none" : "rgba(0, 0, 0, 0.5) 0px 5px 15px"};
  }
`;
