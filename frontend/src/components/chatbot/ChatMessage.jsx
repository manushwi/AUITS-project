// src/components/Chatbot/ChatMessage.jsx
import React from 'react';

function ChatMessage({ message }) {
  const { text, isUser, timestamp } = message;
  const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-lg p-3 ${
          isUser 
            ? 'bg-[#EE0000] text-white rounded-br-none' 
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{text}</p>
        <p className={`text-xs mt-1 ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>{time}</p>
      </div>
    </div>
  );
}

export default ChatMessage;