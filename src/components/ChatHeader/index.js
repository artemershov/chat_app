import React from 'react';
import './styles.sass';

const ChatWindow = ({ nick = 'anonymous' }) => {
  return <header className="chat-window-header">You nick: {nick}</header>;
};

export default ChatWindow;
