import { DefaultEditor } from 'react-simple-wysiwyg';
import { isDocumentEvent } from '../utils/utilities';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';

function Document({ WS_URL }) {
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isDocumentEvent
  });

  let html = lastJsonMessage?.data.editorContent || '';

  function handleHtmlChange(e) {
    sendJsonMessage({
      type: 'contentchange',
      content: e.target.value
    });
  }

  return <DefaultEditor value={html} onChange={handleHtmlChange} />;
}
export default Document;
