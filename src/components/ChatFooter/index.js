import React, { useState, useCallback } from 'react';
import './styles.sass';

const ChatFooter = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const onChange = useCallback(e => {
    const { value } = e.target;
    setMessage(value);
  }, []);

  const formSubmit = useCallback(
    e => {
      e.preventDefault();
      message.trim() && onSubmit(message);
      setMessage('');
    },
    [message, onSubmit]
  );

  return (
    <footer className="chat-window-footer">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={message}
          onChange={onChange}
          placeholder="Enter your message and press enter..."
          autoFocus
        />
      </form>
    </footer>
  );
};

export default ChatFooter;
