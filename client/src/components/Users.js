import React from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { isUserEvent } from '../utils/utilities';
import { UncontrolledTooltip } from 'reactstrap';
import Avatar from 'react-avatar';

export default function Users({ WS_URL }) {
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isUserEvent
  });

  const users = Object.values(lastJsonMessage?.data.users || {});

  return (
    <div>
      {users.map(user => {
        <div key={user.username}>
          <span id={user.username} key={user.username}>
            <Avatar name={user.username} size={40} round="20px" />
          </span>
          <UncontrolledTooltip placement="top" target={user.username}>
            {user.username}
          </UncontrolledTooltip>
        </div>;
      })}
    </div>
  );
}
