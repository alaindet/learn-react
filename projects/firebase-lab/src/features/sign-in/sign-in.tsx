import React from 'react';

import './sign-in.scss';
import * as Components from './components';

const isProduction = process.env.NODE_ENV === 'production';

export const SignInFeature = () => {
  return (
    <div className="sign-in-feature">
      <div>
        <h2>Sign in</h2>
        <Components.SignIn />
      </div>
      {!isProduction && (
        <div>
          <h2>Sign Up</h2>
          <Components.SignUp />
        </div>
      )}
    </div>
  );
};
