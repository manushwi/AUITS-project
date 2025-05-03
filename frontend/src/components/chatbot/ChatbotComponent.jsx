// src/components/Chatbot/ChatbotComponent.jsx
import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import { useChatbot } from '../../context/ChatbotContext';

function ChatbotComponent() {
  const { messages, isOpen, toggleChat, handleSendMessage } = useChatbot();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={toggleChat}
          className="bg-[#EE0000] text-white rounded-full p-4 shadow-lg hover:bg-primary transition-all"
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 h-96 md:h-[32rem] flex flex-col">
        <ChatHeader onClose={toggleChat} />
        
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatbotComponent;