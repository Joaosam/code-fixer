import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 83vh;
  width: 25vw;
  position: absolute;
  top: 9rem;
  left: 0;
  background-color: ${(props) => props.theme["bg-body"]};
  color: ${(props) => props.theme.white};
  padding: 0 1rem;

  h4 {
    border-bottom: 1px solid #fff;
    padding: 0 0 1rem 0;
    margin-right: 1rem;
    font-size: 2.4rem;
    width: 100%;

    :nth-child(2) {
      border: none;
      font-weight: 400;
      margin: 2rem 0 -2rem 0;
    }
  }

  @media (max-width: 768px) {
    width: 99%;
    height: 30vh;
  }

  @media (min-width: 1440px) {
    h4 {
      margin-top: 1rem;
      :nth-child(2) {
        border: none;
        font-weight: 400;
        margin-top: 4rem;
      }
    }
  }
`;
