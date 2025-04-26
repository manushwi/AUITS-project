import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import solar from '../assets/solar.jpg';
import cable from '../assets/cable.jpg';
import internet from '../assets/internet.jpg';
import phone from '../assets/phone.jpg';

const services = [
  {
    title: 'Solar Solutions',
    desc: 'Harness the power of the sun and embrace clean, renewable energy with our solar solutions.',
    img: solar,
  },
  {
    title: 'DTR and Meter Installation',
    desc: 'Comprehensive services, ensuring efficient power distribution through expert DTR installations as well Meter Installation.',
    img: cable,
  },
  {
    title: 'Internet Solutions',
    desc: 'From fast broadband to fiber-optic connections, we\'ll help you find the internet service provider.',
    img: internet,
  },
  {
    title: 'Phone Services',
    desc: 'Discover cost-effective and feature-rich phone services that keep you connected to your loved ones.',
    img: phone,
  },
];

const Ourservices = () => {
  const [isVisible, setIsVisible] = useState(Array(services.length).fill(false));
  const navigate = useNavigate();

  // Detect when the elements enter the viewport
  const handleScroll = () => {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run it on initial load in case some items are already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Our Expertise and Experience</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className={`service-card relative rounded-xl overflow-hidden shadow-lg group hover:scale-105 
              transform transition duration-1000 ease-in-out 
              ${isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
              `}
          >
            <img src={item.img} alt={item.title} className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white text-sm mb-4">{item.desc}</p>
              <button
                onClick={() => {
                  navigate('/Blog');
                  scrollTo(0, 0);
                }}
                className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full w-fit"
              >
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;