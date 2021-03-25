import process from 'process';
import React, { useState } from 'react';

import { auth } from '../../core/firebase';
import * as Components from './components';

import './sign-in.scss';

const isProduction = process.env.NODE_ENV === 'production';

export const SignInFeature = () => {

  return (
    <div className="sign-in-feature">
      <h2>Sign in</h2>
      <Components.SignIn />
      {!isProduction && <Components.SignUp />}
    </div>
  );
};
