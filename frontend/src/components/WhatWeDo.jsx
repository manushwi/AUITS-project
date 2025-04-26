import React from 'react';
import { FaSolarPanel } from 'react-icons/fa';
import { FaPercent } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import battery from '../assets/battery.jpg';

const WhatWeDo = () => {
    
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-red-600 font-semibold mb-2">Our Services</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">What We Do</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left Boxes */}
          <div className="flex flex-col gap-8 hover:bg-red">
            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 ease-in-out ">
              <FaSolarPanel className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Solar Solutions</h3>
              <p className="text-gray-600">
                Harness the power of the sun and embrace clean, renewable energy with our solar solutions.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 ease-in-ou">
              <FaNetworkWired className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Cable Services</h3>
              <p className="text-gray-600">
                Stay connected with high-quality cable services that deliver reliable and fast internet, television.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center ">
            <img
              src={battery}
              alt="Solar Meeting"
              className="rounded-lg shadow-xl w-full max-w-sm object-cover "
            />
          </div>

          {/* Right Boxes */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 ease-in-ou">
              <FaPercent className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Deals and Promotions</h3>
              <p className="text-gray-600">
                We pride ourselves on securing great deals and promotions for our customers.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 ease-in-out">
              <FaHeadset className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Consultation and Support</h3>
              <p className="text-gray-600">
                We understand that navigating the solar and cable landscape can be overwhelming.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;