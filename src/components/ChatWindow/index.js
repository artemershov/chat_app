import React from 'react';
import './styles.sass';

const ChatWindow = ({ children }) => {
  return <main className="chat-window">{children}</main>;
};

export default ChatWindow;
