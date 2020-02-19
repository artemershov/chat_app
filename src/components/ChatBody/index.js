import React, { useEffect, useRef } from 'react';
import { ChatBubbles } from '../';
import './styles.sass';

const ChatBody = ({ messages }) => {
  const container = useRef(null);

  useEffect(() => {
    const element = container.current;
    element && (element.scrollTop = element.scrollHeight);
  }, [messages]);

  return (
    <section className="chat-window-body">
      {messages.length ? (
        <div className="chat-window-body-container" ref={container}>
          {messages.map((item, index) => (
            <ChatBubbles key={index} message={item}></ChatBubbles>
          ))}
        </div>
      ) : (
        <div className="chat-window-body-placeholder">No messages yet</div>
      )}
    </section>
  );
};

export default ChatBody;
