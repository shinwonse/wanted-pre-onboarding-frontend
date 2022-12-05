import React from 'react';

function SignUp() {
  return (
    <main className="SignupMain">
      <h1 className="Signup__Title">JOIN</h1>
      <form className="SignupForm">
        <div className="SignupInput">
          <label htmlFor="email">EMAIL</label>
          <input className="SignupInput__element" type="email" id="email" />
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
