import { HeaderContainer, NavBar, WrapperLogo } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <WrapperLogo>
        <code>&lsaquo;CF/&rsaquo;</code>
        <span>Code Fixer</span>
      </WrapperLogo>
      <NavBar>
        <NavLink to="/">FIXER</NavLink>
        <NavLink to="/generatecode">GENERATE CODE</NavLink>
      </NavBar>
    </HeaderContainer>
  );
}
