import React, { useMemo } from 'react';
import { formatRelative } from 'date-fns';
import './styles.sass';

const ChatBubbles = ({
  message = { nick: 'anonymous', text: '...', date: Date.now() }
}) => {
  const formattedDate = useMemo(
    () => formatRelative(message.date, Date.now()),
    [message]
  );
  return (
    <div className="chat-window-bubbles">
      <div className="chat-window-bubbles-body">
        <div className="chat-window-bubbles-nick">{message.nick}</div>
        <div className="chat-window-bubbles-date">{formattedDate}</div>
        <div className="chat-window-bubbles-message">{message.text}</div>
      </div>
    </div>
  );
};

export default ChatBubbles;
