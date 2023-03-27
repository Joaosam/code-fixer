import styled from "styled-components";

export const CodeEditorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 73.5vw;
  height: 49vh;

  @media (max-width: 768px) {
    width: 98%;
    left: 1rem;
    position: absolute;
  }
`;
