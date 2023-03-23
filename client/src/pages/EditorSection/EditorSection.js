import React from 'react';
import Users from '../../components/Users';
import Document from '../../components/Document';
import History from '../../components/History';

export default function EditorSection({ WS_URL }) {
  return (
    <div>
      <Users WS_URL={WS_URL} />
      <Document WS_URL={WS_URL} />
      <History WS_URL={WS_URL} />
    </div>
  );
}
