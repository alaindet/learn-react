import React, { useState } from 'react';

import './sign-in.style.scss';
import { auth, signInWithGoogle } from '../../core/firebase/utils';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
    }

    catch (error) {
      console.error('ERROR', error);
    }
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

        <Button type="submit">
          Sign In
        </Button>

        <Button
          type="button"
          onClick={signInWithGoogle}
          color="google"
          style={{ marginLeft: '1rem' }}
        >
          Sign In with Google
        </Button>

      </form>
    </div>
  );
};
