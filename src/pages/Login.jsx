import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

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
          <input className="Input__element" type="email" id="email" />
        </div>
        <div className="Input">
          <label htmlFor="password">PASSWORD</label>
          <input className="Input__element" type="password" id="password" />
        </div>
        <div className="Button__Wrapper">
          <button className="Button">LOGIN</button>
          <button className="Button" onClick={navigateToJoin}>
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
