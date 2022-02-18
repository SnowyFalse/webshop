import React from "react";
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.state({email: '', password: ''})
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
          <CustomButton type={"submit"}>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}