import styled from "styled-components";

export const ContainerResultEditor = styled.div`
  margin-bottom: 2rem;
`;

export const WrapperClipboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.2rem;
  background-color: ${(props) => props.theme["bg-secundary-2"]};
  color: ${(props) => props.theme["text-default"]};
  font-size: 1.2rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 73.5vw;
  margin-top: 2rem;
  box-shadow: #000000 0 -6px 6px -6px inset;

  @media (max-width: 768px) {
    width: 95vw;
    margin: 55vh 0 0 -22.5vw;
  }
`;

export const ContentClipboard = styled.div`
  cursor: pointer;
`;

export const WrapperResultEditor = styled.div`
  width: 73.5vw;
  height: 49vh;
  @media (max-width: 768px) {
    width: 98%;
    left: 1rem;
    position: absolute;
  }
`;
