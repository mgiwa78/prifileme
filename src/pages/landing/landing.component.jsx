import React from "react";
import Nav from "../../components/navigation/nav.compoents";
import SignInSignUp from "../signin-signup/signin-signup.component";
import { LandingContainer } from "./landing.styles";

const AppLanding = () => {
  return (
    <>
      <Nav />
      <LandingContainer>
        <SignInSignUp />
      </LandingContainer>
    </>
  );
};

export default AppLanding;
