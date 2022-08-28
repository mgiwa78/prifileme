import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <NavContainer>
      <NavBox>
        <NavMenu src={Mlogo}></NavMenu>
        <NavLogo>ProfileMe</NavLogo>
      </NavBox>
      <NavBox>
        <NavBtn>Login</NavBtn>
      </NavBox>
    </NavContainer>
  );
};

export default Nav;
