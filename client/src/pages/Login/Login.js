import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__card">
          <h3>Hello, Enter your name to join</h3>
          <input type="text" />
          <button>JOIN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
