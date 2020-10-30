import React, { useState } from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';


const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' })

  const submitHandler = event => {
    event.preventDefault();

    setState({ email: '', password: '' })
  }

  const changeHandler = event => {
    const { name, value } = event.target;

    setState({ [name]: value })

    console.log(name);
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          value={state.email}
          required
          type="email"
          label="Email"
          handleChange={changeHandler}
        />
        <FormInput
          name="password"
          value={state.password}
          required
          type="password"
          label="Password"
          handleChange={changeHandler}
        />
        <CustomButton type="submit" > Sign In </CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
      </form>
    </div>
  )
}

export default SignIn
