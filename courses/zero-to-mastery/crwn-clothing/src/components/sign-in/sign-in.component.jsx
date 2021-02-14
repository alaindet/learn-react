import React, { useState } from 'react';

import './sign-in.style.scss';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('handleOnSubmit', email, password);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
        />

        <FormInput
          name="password"
          label="Password"
          type="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
        />

        <Button type="submit">Sign In</Button>

      </form>
    </div>
  );
};
