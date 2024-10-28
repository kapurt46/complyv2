import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const { text, sender } = message;
  const messageClass = sender === 'bot' ? 'bot-message' : 'user-message';

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
