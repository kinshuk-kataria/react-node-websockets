import React, { useState } from 'react';
import './login.css';
import useWebSocket from 'react-use-websocket';

function Login({ WS_URL, onLogin }) {
  const [username, setUsername] = useState('');

  useWebSocket(WS_URL, {
    share: true,
    filter: () => false
  });

  const logInUser = () => {
    console.log('testing');
    if (!username.trim()) {
      return;
    }
    onLogin && onLogin(username);
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__card">
          <h3>Hello, Enter your name to join</h3>
          <input type="text" onChange={e => setUsername(e.target.value)} />
          <button onClick={logInUser}>JOIN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
