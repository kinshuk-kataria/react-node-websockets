import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import Login from './pages/Login/Login';
import EditorSection from './pages/EditorSection/EditorSection';

export default function App() {
  const [username, setUsername] = useState('');

  const WS_URL = 'ws://localhost:8000';

  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('websocket connection established');
    }
  });

  return (
    <div>
      {username ? (
        <EditorSection />
      ) : (
        <Login WS_URL={WS_URL} onLogin={setUsername} />
      )}
    </div>
  );
}
