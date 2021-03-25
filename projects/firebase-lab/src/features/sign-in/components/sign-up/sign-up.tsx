import React, { useState } from 'react';

import { auth, createUserProfileDocument } from '../../../../core/firebase';

export const SignUp = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  const isFormValid = () => password === passwordConfirm;

  const storeNewUser = async () => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
  };

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      await storeNewUser();
      console.log('User created on Firebase');
      resetForm();
    }

    catch (error) {
      console.error('ERROR', error);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>

      <div className="form-group">
        <label htmlFor="email">Display Name</label>
        <input
          id="display-name"
          name="display-name"
          type="text"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="signup-password-confirm">Confirm password</label>
        <input
          id="signup-password-confirm"
          name="password-confirm"
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
      </div>

      <button type="submit">
        Sign Up
      </button>

    </form>
  );
};
