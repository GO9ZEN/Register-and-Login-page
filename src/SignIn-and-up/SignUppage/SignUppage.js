import React, { useState } from 'react';

import "./SignUppage.css";

function SignUppage() {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const [isVisibleTwo, setVisibleTwo] = useState(false);

  const toggleTwo = () => {
    setVisibleTwo(!isVisibleTwo);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-part">
        <div className="login-topic">
          <h3>REGISTER</h3>
        </div>

        <div className="login-form">
          <form className="login">

            <div className="login-field">
              <input type="text" className="login-input" placeholder="Username" required />
            </div>

            <div className="login-field">
              <input type="email" className="login-input" placeholder="Email" required />
            </div>

            <div className="login-field second-part">
              <input className="login-input-first" placeholder="Password" type={!isVisible ? "password" : "text"} required />
              <span className="login-input-icon" onClick={toggle}>
                {isVisible ? <span><i class="fa-solid fa-eye"></i></span> : <span><i class="fa-solid fa-eye-slash"></i></span>}
              </span>
            </div>

            <div className="login-field second-part">
              <input className="login-input-first" placeholder="Repeat password" type={!isVisibleTwo ? "password" : "text"} required />
              <span className="login-input-icon" onClick={toggleTwo}>
                {isVisibleTwo ? <span><i class="fa-solid fa-eye"></i></span> : <span><i class="fa-solid fa-eye-slash"></i></span>}
              </span>
            </div>

            <div className="checkbox-part"><input type="checkbox" value="lsAgreed" id="agreed" /><label for="agreed"><p>I have read and agree to the terms</p></label></div>

            <button className="button login-submit">
              <p className="button-text">SIGN UP</p>
            </button>

            <div className="account-havent">
              <p>Have an account?</p>
              <p className="account-register">Login</p>
            </div>

          </form>
        </div>

        <div className="hr-part"><hr /><span>OR</span><hr /></div>

        <div className="sign-in-with">
          <p>Sign up with: </p>

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

export default SignUppage;