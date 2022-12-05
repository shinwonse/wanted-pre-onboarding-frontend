import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '../constants';
import { emailValidation } from '../validations/emailValidation';
import { passwordValidation } from '../validations/passwordValidation';

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);

  const handleEmailInput = ({ target }) => {
    if (emailValidation(target.value)) {
      setEmailError(false);
      setEmail(target.value);
      return;
    }
    setEmailError(true);
    setEmail(target.value);
  };

  const handlePasswordInput = ({ target }) => {
    if (passwordValidation(target.value)) {
      setPasswordError(false);
      setPassword(target.value);
      return;
    }
    setPasswordError(true);
    setPassword(target.value);
  };

  const signUp = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/auth/signup`, {
      email: email,
      password: password,
    });
    navigate('/');
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
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
        <div className="Signup__button__wrapper">
          <button
            className="Signup__button"
            disabled={emailError || passwordError}
            onClick={signUp}
          >
            JOIN
          </button>
        </div>
      </form>
    </main>
  );
}

export default SignUp;
