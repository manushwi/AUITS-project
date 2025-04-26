import React from 'react'
import { Link } from 'react-router-dom';


const cards = [
    {
      id: 1,
      title: 'How to Avail Government Schemes',
      description: 'Join the solar revolution with PM Surya Ghar: Muft Bijli Yojana, a groundbreaking government...',
      bgColor: 'bg-white',
      link: '/GovernmentSubsidies',
    },
    {
      id: 2,
      title: 'What Does our Process Look Like?',
      description: 'At Akshat Udyam Innovative Techno Solutions Pvt Ltd (AUITS), our process is designed to provide comprehensive...',
      bgColor: 'bg-red-600 text-white',
      link: '/Process',
    },
    {
      id: 3,
      title: 'A comprehensive Deep Dive into our Services',
      description: 'Every customer is unique, and their needs are addressed...',
      bgColor: 'bg-white',
      link: '/WhatWeOffer',
    },
    {
      id: 4,
      title: 'Cost & Electricity Savings',
      description: 'Save on purchases and bills using our network...',
      bgColor: 'bg-white',
    },
    {
      id: 5,
      title: 'Hassle-Free Process',
      description: 'We manage research, negotiations, and paperwork...',
      bgColor: 'bg-white',
    },
  ];
const BlogGrid = () => {
    return (
        <div className="py-12 px-6 md:px-20 bg-gray-100">
          <h2 className="text-4xl font-bold mb-4">Recent Blog Posts</h2>
    
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <Link
                to={card.link}
                key={card.id}
                className={`rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl ${card.bgColor}`}
              >
                <span className="text-3xl font-bold mb-2 block">
                  {String(card.id).padStart(2, '0')}
                </span>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      );
}

export default BlogGrid