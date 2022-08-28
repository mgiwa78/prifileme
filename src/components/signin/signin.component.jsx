import React from "react";
import {
  SignInBtm,
  SignInContainer,
  SignInTop,
  AuthBtn,
  SignInTitle,
  FormInput,
  Label,
  SignInFormContainer,
  AuthNav,
  AuthSelect,
} from "./signin.style";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const Navigate = useNavigate();
  return (
    <SignInContainer fluid>
      <SignInFormContainer>
        <SignInTitle>Log In</SignInTitle>
        <SignInTop fluid>
          <AuthSelect className="push" xs={"auto"}>
            I'm an Employer
          </AuthSelect>

          <AuthSelect xs={"auto"}>I'm a Worker</AuthSelect>
        </SignInTop>
        <SignInBtm>
          <Label>Email:</Label>
          <FormInput className="push_dwn" />
          <Label>Password:</Label>

          <FormInput />
        </SignInBtm>
        <AuthBtn xs={12}> Sign In</AuthBtn>
      </SignInFormContainer>
      <AuthNav onClick={() => Navigate("signup")}>
        Don't have an account? Sign up
      </AuthNav>
    </SignInContainer>
  );
};

export default SignIn;
