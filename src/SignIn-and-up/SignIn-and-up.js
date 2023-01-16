import React from 'react';

import "./SignIn-and-up.css";
import SignInpage from './SignInpage/SignInpage';
import SignUppage from './SignUppage/SignUppage';

function SignInUp() {
  return (
    <div className="signIn-and-up">
        <SignInpage />
        <SignUppage />
    </div>
  )
}

export default SignInUp;