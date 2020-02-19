import React, { useState, useCallback } from 'react';
import './styles.sass';

const ChatPromptNick = ({ onSubmit }) => {
  const [nick, setNick] = useState('');

  const onChange = useCallback(e => {
    const { value } = e.target;
    setNick(value);
  }, []);

  const formSubmit = useCallback(
    e => {
      e.preventDefault();
      nick.trim() && onSubmit(nick);
      setNick('');
    },
    [nick, onSubmit]
  );

  return (
    <section className="chat-window-prompt">
      <h3>Enter your nickname and press enter</h3>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={nick}
          onChange={onChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default ChatPromptNick;
