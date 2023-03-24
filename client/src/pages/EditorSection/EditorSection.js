import React from 'react';
import Users from '../../components/Users';
import Document from '../../components/Document';
import History from '../../components/History';
import './editorSection.css';

export default function EditorSection({ WS_URL }) {
  return (
    <div className="editor">
      <div className="editor__wrapper">
        <div className="editor__document">
          <Users WS_URL={WS_URL} />
          <Document WS_URL={WS_URL} />
        </div>
        <History WS_URL={WS_URL} />
      </div>
    </div>
  );
}
