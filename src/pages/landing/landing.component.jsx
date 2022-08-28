import React from "react";
import Nav from "../../components/navigation/nav.compoents";
import SignInSignUp from "../signin-signup/signin-signup.component";
import {
  LandingBody,
  LandingContainer,
  LandingImg,
  LandingText,
} from "./landing.styles";

import Mlogo from "../../assets/menu.svg";
import LSvg from "../../assets/landing.png";

const AppLanding = () => {
  return (
    <>
      <LandingContainer>
        <LandingBody>
          <LandingText>
            Find a skilled <br />
            <span className="landing_highlight">employee </span>
            anywhere everywhere
          </LandingText>
          <LandingImg src={LSvg}></LandingImg>
        </LandingBody>

        {/* <SignInSignUp /> */}
      </LandingContainer>
    </>
  );
};

export default AppLanding;
