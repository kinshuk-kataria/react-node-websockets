import React from 'react';
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://localhost:8000';

export default function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('websocket connection established');
    }
  });

  return <div>Hello web sockets</div>;
}
