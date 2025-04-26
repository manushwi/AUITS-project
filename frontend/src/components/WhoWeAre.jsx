import React from 'react';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import { useNavigate } from 'react-router-dom';

const WhoWeAre = () => {
    const navigate = useNavigate()

  return (
    <section className="bg-red-600 text-white py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-slideUp">Who We Are</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 md:mb-8 animate-slideUp">
            Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC, Maryland, and Virginia area.
            We understand that finding the right solar and cable solutions for your needs can be a daunting task, which is why we're here to make the process easier and more affordable for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={()=>{navigate('/Blog'); scrollTo(0,0)}} className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition w-full sm:w-auto text-center">
              Read More
            </button>
            <button onClick={()=>{navigate('/Login'); scrollTo(0,0)}} className="bg-black text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition w-full sm:w-auto text-center">
              Contact us today
            </button>
          </div>
        </div>

        {/* Image Stack */}
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative h-64 sm:h-80 md:h-96 w-full max-w-sm">
            {/* Back Image */}
            <img
              src={team2}
              alt="Team Group"
              className="absolute top-8 sm:top-10 left-4 sm:left-16 md:left-20 w-48 sm:w-56 md:w-64 h-56 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 animate-slideUp"
            />
            {/* Front Image */}
            <img
              src={team1}
              alt="Team Happy"
              className="absolute top-0 right-4 sm:right-16 md:right-20 w-48 sm:w-56 md:w-64 h-56 sm:h-64 md:h-80 object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-200 animate-slideUp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;