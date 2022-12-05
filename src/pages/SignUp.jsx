import React, { useState } from 'react';

import { emailValidation } from '../validations/emailValidation';

function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);

  const handleEmailInput = ({ target }) => {
    if (emailValidation(target.value)) {
      setEmailError(false);
      setEmail(target.value);
      return;
    }
    setEmailError(true);
    setEmail(target.value);
  };

  return (
    <main className="SignupMain">
      <h1 className="Signup__Title">JOIN</h1>
      <form className="SignupForm">
        <div className="SignupInput">
          <label htmlFor="email">EMAIL</label>
          <input
            className="SignupInput__element"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailInput}
          />
        </div>
        <div className="SignupInput">
          <label htmlFor="password">PASSWORD</label>
          <input
            className="SignupInput__element"
            type="password"
            id="password"
          />
        </div>
        <div className="Signup__button__wrapper">
          <button className="Signup__button">JOIN</button>
        </div>
      </form>
    </main>
  );
}

export default SignUp;
