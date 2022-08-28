import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavBox,
  NavBtn,
  NavContainer,
  NavItem,
  NavList,
  NavLogo,
  NavMenu,
} from "./nav.styles";
import Mlogo from "../../assets/menu.svg";
const Nav = () => {
  const Navigate = useNavigate();
  return (
    <NavContainer>
      <NavBox>
        <NavMenu src={Mlogo}></NavMenu>
        <NavLogo onClick={() => Navigate("/")}>Profileme</NavLogo>
      </NavBox>
      <NavBox>
        <NavBtn onClick={() => Navigate("/signIn")}>Login</NavBtn>
      </NavBox>
    </NavContainer>
  );
};

export default Nav;
