import React, { useState } from 'react';
import { auth } from '../../../../core/firebase';

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleOnSubmit = async (event: any) => {
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
    <form onSubmit={handleOnSubmit}>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">
        Sign In
      </button>

    </form>
  );
};
