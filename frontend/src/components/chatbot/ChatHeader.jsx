// src/components/Chatbot/ChatHeader.jsx
import React from 'react';

function ChatHeader({ onClose }) {
  return (
    <div className="bg-[#EE0000] text-white p-4 rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold">AUITS Assistant</h3>
          <p className="text-xs opacity-80">Online</p>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="text-white hover:bg-primary rounded-full p-1"
        aria-label="Close chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default ChatHeader;