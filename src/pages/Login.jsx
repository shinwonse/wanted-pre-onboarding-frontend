import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '../constants';
import { emailValidation } from '../validations/emailValidation';
import { passwordValidation } from '../validations/passwordValidation';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);

  const handleEmailInput = ({ target }) => {
    if (emailValidation(target.value)) {
      setEmail(target.value);
      setEmailError(false);
      return;
    }
    setEmail(target.value);
    setEmailError(true);
  };

  const handlePasswordInput = ({ target }) => {
    if (passwordValidation(target.value)) {
      setPassword(target.value);
      setPasswordError(false);
      return;
    }
    setPassword(target.value);
    setPasswordError(true);
  };

  const login = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${BASE_URL}/auth/signin`, {
      email,
      password,
    });
    localStorage.setItem('token', data.access_token);
    navigate('/todo');
  };

  const navigateToJoin = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <main className="LoginMain">
      <div className="Title">
        <h1>WANTED TODO LIST</h1>
      </div>
      <form className="LoginForm">
        <div className="Input">
          <label htmlFor="email">EMAIL</label>
          <input
            className="Input__element"
            type="email"
            id="email"
            placeholder="example@ex.com"
            value={email}
            onChange={handleEmailInput}
          />
        </div>
        <div className="Input">
          <label htmlFor="password">PASSWORD</label>
          <input
            className="Input__element"
            type="password"
            id="password"
            placeholder="password must be 8 characters or more"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
        <div className="Button__Wrapper">
          <button className="Button" onClick={login}>
            LOGIN
          </button>
          <button className="Button" onClick={navigateToJoin}>
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
