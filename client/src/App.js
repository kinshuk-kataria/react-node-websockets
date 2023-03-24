import React, { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import Login from './pages/Login/Login';
import EditorSection from './pages/EditorSection/EditorSection';
import Nav from './components/Nav';

export default function App() {
  const [username, setUsername] = useState('');

  const WS_URL = 'ws://localhost:8000';

  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('websocket connection established');
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
  });

  useEffect(() => {
    console.log(readyState);
    if (username && readyState === ReadyState.OPEN) {
      sendJsonMessage({
        username,
        type: 'userevent'
      });
    }
  }, [username, sendJsonMessage, readyState]);

  return (
    <div>
      <Nav />

      {username ? (
        <EditorSection WS_URL={WS_URL} />
      ) : (
        <Login WS_URL={WS_URL} onLogin={setUsername} />
      )}
    </div>
  );
}
