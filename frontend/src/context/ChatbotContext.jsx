// src/context/ChatbotContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ChatbotContext = createContext();

export const useChatbot = () => useContext(ChatbotContext);

export const ChatbotProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to AUITS. I can help you with our services, products, and scheduling appointments. How can I assist you today?",
      isUser: false,
      timestamp: new Date().toISOString(),
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const addMessage = (message) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      ...message,
      timestamp: new Date().toISOString(),
    }]);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    addMessage({
      text,
      isUser: true,
    });

    // Simulate typing delay
    setTimeout(() => {
      // Process the message and get a response
      const botResponse = generateResponse(text);
      
      addMessage({
        text: botResponse,
        isUser: false,
      });
    }, 1000);
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Check for product inquiries
    if (lowerInput.includes('product') || lowerInput.includes('device') || lowerInput.includes('computer') || lowerInput.includes('laptop')) {
      return "We offer a variety of tech products including computers, laptops, accessories, and more. You can check them out on our Products page or ask me for specific details.";
    }
    
    // Check for service inquiries
    if (lowerInput.includes('service') || lowerInput.includes('repair') || lowerInput.includes('fix') || lowerInput.includes('support')) {
      return "AUITS provides various IT services including repairs, support, and consultation. Our team specializes in troubleshooting, hardware repairs, software installations, and network configurations. Would you like to schedule an appointment for a service?";
    }
    
    // Check for appointment booking
    if (lowerInput.includes('appointment') || lowerInput.includes('book') || lowerInput.includes('schedule') || lowerInput.includes('meet')) {
      return "I'd be happy to help you schedule an appointment. You can navigate to our MyAppointements page or provide your preferred date, time, and the service you're interested in here, and I'll help you schedule it.";
    }

    // Check for process queries
    if (lowerInput.includes('process') || lowerInput.includes('how it works') || lowerInput.includes('steps')) {
      return "Our service process is straightforward. You can check our Process page for detailed steps, but generally it involves: 1) Initial consultation, 2) Diagnosis of your tech issue, 3) Service execution, and 4) Final testing and delivery.";
    }
    
    // Check for government subsidies
    if (lowerInput.includes('subsidy') || lowerInput.includes('subsidies') || lowerInput.includes('government') || lowerInput.includes('financial help')) {
      return "AUITS works with various government subsidy programs that can help reduce costs for certain services. Visit our GovernmentSubsidies page for detailed information on eligibility and how to apply.";
    }
    
    // Check for what we offer
    if (lowerInput.includes('offer') || lowerInput.includes('provide') || lowerInput.includes('services')) {
      return "We offer a wide range of solar services including repairs, system setups, installations, and technology consultations. Check our WhatWeOffer page for a comprehensive list of our services.";
    }

    // Check for login/account
    if (lowerInput.includes('login') || lowerInput.includes('account') || lowerInput.includes('sign in') || lowerInput.includes('register')) {
      return "You can access your account by clicking on the Login button in our navigation bar. If you don't have an account yet, you can register there as well.";
    }

    // Check for dashboard
    if (lowerInput.includes('dashboard') || lowerInput.includes('my account') || lowerInput.includes('profile')) {
      return "Once logged in, you can access your personal dashboard to view your appointments, purchase history, and manage your account details.";
    }
    
    // Check for blog
    if (lowerInput.includes('blog') || lowerInput.includes('blogs') || lowerInput.includes('article') || lowerInput.includes('news')) {
      return "We regularly update our Blog with the latest tech news, tips, and advice. Feel free to check it out for helpful information on maintaining your devices and staying up-to-date with technology trends.";
    }
    
    // Check for about
    if (lowerInput.includes('about') || lowerInput.includes('company') || lowerInput.includes('history')) {
      return "AUITS is a complete solar solutions provider focused on delivering high-quality solar services and products. You can learn more about our mission, team, and history on our About page.";
    }
    
    // Check for cart/payment
    if (lowerInput.includes('cart') || lowerInput.includes('payment') || lowerInput.includes('checkout') || lowerInput.includes('buy')) {
      return "You can add products to your cart while browsing our Products page. When you're ready to complete your purchase, proceed to the Cart page for checkout and payment options.";
    }
    
    // Check for hours/location
    if (lowerInput.includes('hour') || lowerInput.includes('open') || lowerInput.includes('close') || lowerInput.includes('location') || lowerInput.includes('address')) {
      return "We're open Monday through Friday from 9 AM to 6 PM, and Saturdays from 10 AM to 4 PM. Our shop location and contact details can be found at the bottom of our website.";
    }
    
    // Check for greetings
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey') || lowerInput.includes('greetings')) {
      return "Hello there! How can I assist you with AUITS services or products today?";
    }
    
    // Check for thanks
    if (lowerInput.includes('thank') || lowerInput.includes('thanks') || lowerInput.includes('appreciate')) {
      return "You're welcome! Is there anything else I can help you with today?";
    }
    
    // Default response
    return "I'm here to help with AUITS services, products, and appointments. Could you please provide more details about what you're looking for so I can assist you better?";
  };

  return (
    <ChatbotContext.Provider value={{
      messages,
      isOpen,
      toggleChat,
      handleSendMessage,
    }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotContext;