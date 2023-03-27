import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  margin-bottom: 2rem;
  height: 7rem;
  background-color: ${(props) => props.theme["bg-secundary"]};
  color: ${(props) => props.theme.white};
  font-size: 2.4rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  code {
    color: ${(props) => props.theme["default-green"]};
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    font-size: 1.4rem;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["text-default"]};
    border: 1px solid ${(props) => props.theme["text-default"]};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background-color: ${(props) => props.theme["default-green"]};
      border-color: ${(props) => props.theme["default-green"]};
      box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    }
  }
  a.active {
    opacity: 0.5;
  }
`;
