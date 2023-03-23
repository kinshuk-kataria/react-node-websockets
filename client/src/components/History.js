import React from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { isUserEvent } from '../utils/utilities';

function History({ WS_URL }) {
  //listening messages from server

  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isUserEvent
  });
  const activities = lastJsonMessage?.data.userActivity || [];
  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={`activity-${index}`}>{activity}</li>
      ))}
    </ul>
  );
}
export default History;
