import React from 'react';
import battery from '../assets/battery.jpg';
import inverter from '../assets/inverter.jpg';
import renewable from '../assets/renewable.jpg';
import batteryIcon from '../assets/battery.svg';
import inverterIcon from '../assets/inverter.svg';
import leafIcon from '../assets/leaf.svg';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    title: 'Battery Storage',
    image: battery,
    icon: batteryIcon,
  },
  {
    title: 'Inverter',
    image: inverter,
    icon: inverterIcon,
  },
];


const EnergySection = () => {
    const navigate = useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        <div>
          <p className="uppercase text-sm text-blue-900 font-semibold tracking-wide">Welcome to Solar Power Save Energy</p>
          <h2 className="text-4xl font-bold mt-2 mb-4 leading-snug">Taking The Effort Out Of Business Energy</h2>
        </div>
        <div>
          <p className="text-gray-600 text-lg">
            leading renewable energy solutions provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe Africa and the Americas, Vetzaz is powering.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 ">
        {/* Left side small cards */}
        <div className="flex flex-col gap-6 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group shadow-md hover:scale-105 transition-transform duration-200"
            >
              <img src={card.image} alt={card.title} className="w-full h-48 md:h-60 object-cover" />
              <div className="absolute top-4 left-4 bg-red-600 p-3 rounded-full">
                <img src={card.icon} alt="icon" className="w-6 h-6" />
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right side big card */}
        <div className="relative w-full h-400 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200">
            <img src={renewable} alt="Battery Storage" className="absolute inset-0 w-full h-full object-cover z-0 max-h-[800px]" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Battery Storage</h3>
                <button onClick={()=>{navigate('/Login'); scrollTo(0,0)}} className='mt-2 px-4 w-[150px] py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300'>Discover More
                </button>
            </div>
            <div className="absolute top-4 left-4 bg-red-600 rounded-full p-3 z-10">
                <img src={leafIcon} alt="Battery Icon" className="w-6 h-6" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default EnergySection;