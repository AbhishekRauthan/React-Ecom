import React, { Component } from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './SignUp.scss'
class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, confirmPassword, email, password } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    } catch (e) {
      console.log("Error Occured");
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" >SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;