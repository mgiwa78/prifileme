import React from "react";
import {
  SignInSignUpBtm,
  SignInSignUpContainer,
  SignInSignUpTop,
  AuthBtn,
  SignInSignUpTitle,
  FormInput,
  Label,
  SignInSignUpFormContainer,
} from "./signin-signup.style";
import Col from "react-bootstrap/Col";

const SignInSignUp = () => {
  return (
    <SignInSignUpContainer fluid>
      <SignInSignUpFormContainer>
        <SignInSignUpTitle>Log In</SignInSignUpTitle>
        <SignInSignUpTop fluid>
          <AuthBtn className="push" xs={"auto"}>
            I'm an Employer
          </AuthBtn>

          <AuthBtn xs={"auto"}>I'm a Worker</AuthBtn>
        </SignInSignUpTop>
        <SignInSignUpBtm>
          <Label>Email:</Label>
          <FormInput className="push_dwn" />
          <Label>Password:</Label>

          <FormInput />
        </SignInSignUpBtm>
      </SignInSignUpFormContainer>
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
