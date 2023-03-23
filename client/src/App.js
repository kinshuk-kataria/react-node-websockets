import React from 'react';
import useWebSocket from 'react-use-websocket';
import Login from './pages/Login/Login';

const WS_URL = 'ws://localhost:8000';

export default function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('websocket connection established');
    }
  });

  return (
    <div>
      <Login />
    </div>
  );
}
