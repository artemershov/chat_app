import React, {
  Fragment,
  useState,
  useEffect,
  useReducer,
  useCallback
} from 'react';
import {
  ChatBody,
  ChatHeader,
  ChatFooter,
  ChatWindow,
  ChatPromptNick
} from './components';
import { socketService } from './services';
import uuidv4 from 'uuid/v4';

function App() {
  const [id, setID] = useState(null);
  const [nick, setNick] = useState(null);

  const [messages, dispatchMessages] = useReducer((state, action) => {
    return action.type === 'message' ? [...state, action.message] : state;
  }, []);

  const addMessage = message => dispatchMessages({ type: 'message', message });

  const sendMessage = useCallback(
    text => {
      const message = { id, nick, text, date: Date.now() };
      addMessage(message);
      socketService.emit('message', message);
    },
    [id, nick]
  );

  useEffect(() => {
    if (!id) {
      setID(uuidv4());
    }
    if (nick) {
      const events = [
        {
          event: 'message',
          callback: message => message.id !== id && addMessage(message)
        }
      ];
      socketService.init(events);
      return () => socketService.disconnect();
    }
  }, [id, nick]);

  return (
    <ChatWindow>
      {nick ? (
        <Fragment>
          <ChatHeader nick={nick} />
          <ChatBody messages={messages} />
          <ChatFooter onSubmit={sendMessage} />
        </Fragment>
      ) : (
        <ChatPromptNick onSubmit={setNick} />
      )}
    </ChatWindow>
  );
}

export default App;
