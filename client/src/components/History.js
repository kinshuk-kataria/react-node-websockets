import React from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { isUserEvent } from '../utils/utilities';
import '../styles/history.css';

function History({ WS_URL }) {
  //listening messages from server

  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isUserEvent
  });
  const activities = lastJsonMessage?.data.userActivity || [];
  return (
    <div className="history">
      <ul>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}
export default History;
