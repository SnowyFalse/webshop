import React from "react";
import {SignIn} from "../../components/sign-in/SignIn";
import {SignUp} from "../../components/sign-up/SignUp";
import './SignInUp.styles.scss';

export function SignInUp() {
  return (
    <div className={'sign-in-and-sign-up'}>
      <SignIn/>
      <SignUp/>
    </div>
  )
}