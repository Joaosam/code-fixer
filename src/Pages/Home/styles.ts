import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.white};

  @media (max-width: 768px) {
    position: absolute;
    top: 55vh;
  }
`;

export const ContainerEditors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25vw;
`;

export const WrapperButton = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: -12vh;
  }
`;
