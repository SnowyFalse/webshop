import React from "react";
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import './SignIn.styles.scss'

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state({email: '', password: ''})
    } catch (error) {
      console.warn(error);
    }
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className={'sign-in'}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name={'email'}
            type={"email"}
            value={this.state.email}
            required={true}
            handleChange={this.handleChange}
            label={'Email'}
          />
          <FormInput
            name={'password'}
            type={"password"}
            value={this.state.password}
            required={true}
            handleChange={this.handleChange}
            label={'password'}
          />
          <div className={'buttons'}>
            <CustomButton type={"submit"}>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}