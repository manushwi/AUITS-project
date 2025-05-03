// src/components/Chatbot/ChatInput.jsx
import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 py-2 px-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE0000] focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-[#EE0000] text-white px-4 rounded-r-lg hover:bg-red-700 transition-colors"
        disabled={!message.trim()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </form>
  );
}

export default ChatInput;