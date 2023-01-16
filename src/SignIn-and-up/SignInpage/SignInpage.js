import React, { useState } from 'react';

import "./SignInpage.css";

function SignInpage() {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-part">
        <div className="login-topic">
          <h3>LOGIN</h3>
        </div>

        <div className="login-form">
          <form className="login">

            <div className="login-field">
              <input type="text" className="login-input" placeholder="Email or username" required />
            </div>

            <div className="login-field second-part">
              <input className="login-input-first" placeholder="Password" type={!isVisible ? "password" : "text"} required />
              <span className="login-input-icon" onClick={toggle}>
                {isVisible ? <span><i class="fa-solid fa-eye"></i></span> : <span><i class="fa-solid fa-eye-slash"></i></span>}
              </span>
            </div>

            <div className="chekbox-password">
              <div className="checkbox-part"><input type="checkbox" value="lsRememberMe" id="rememberMe" /><label for="rememberMe"><p>Remember me</p></label></div>
              <div className="forgot-password"><p>Forgot password?</p></div>
            </div>

            <button className="button login-submit">
              <p className="button-text">SIGN IN</p>
            </button>

            <div className="account-havent">
              <p>Dont't have an account?</p>
              <p className="account-register">Register</p>
            </div>

          </form>
        </div>

        <div className="hr-part"><hr /><span>OR</span><hr /></div>

        <div className="sign-in-with">
          <p>Sign in with: </p>

          <div className="sign-social-links">
            <span><i class="fa-brands fa-google"></i></span>
            <span><i class="fa-brands fa-facebook-f"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-linkedin-in"></i></span>
            <span><i class="fa-brands fa-github"></i></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignInpage;