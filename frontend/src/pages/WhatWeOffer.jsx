import React from 'react'
import solarPPanels from '../assets/solarPPanels.jpg';

const WhatWeOffer = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-10">
            <div className="mb-10">
              <img src={solarPPanels} alt="Solar Services" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-extrabold text-gray-600 mb-6 text-center">
                A Comprehensive Deep Dive into our Services
              </h1>
            </div>
    
            {/* 1. Solar Solutions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">1. Solar Solutions</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>
                  <span className="font-semibold">Premier Partnerships:</span> AUITS partners with leading solar panel manufacturers across India, such as WAREE, VIKRAM SOLAR, ADANI GREENS, and TATA POWER, to tailor solutions to your project needs and preferences.
                </li>
                <li>
                  <span className="font-semibold">Engineering, Procurement, and Construction (EPC):</span> We specialize in the full spectrum of EPC activities for on-grid Solar Photovoltaic Plants.
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>System Design & Engineering</li>
                    <li>Supply of Project-related Materials: Including PV modules, inverters, and more.</li>
                    <li>Civil Activities: Such as module foundation and cable trench construction.</li>
                    <li>Installation & Commissioning: Ensuring seamless integration of all electrical components.</li>
                    <li>Project Planning & Controlling: From inception to completion.</li>
                    <li>Area Preparation: Including module foundation construction, with updated data post-site survey.</li>
                    <li>Technical Support & Documentation</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Excluded Activities:</span>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Area Selection for Plant Setup</li>
                    <li>Statutory and Regulatory Approvals</li>
                    <li>Civil Work Beyond Specification</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Commitment to Quality:</span> We maintain the highest standards of quality and professionalism in delivering comprehensive solar solutions.
                </li>
              </ul>
            </section>
    
            {/* 2. Electrification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">2. Electrification</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>
                  <span className="font-semibold">Universal Electrification:</span> AUITS has electrified all villages in the Bhinga Block of Shrawasti District, Uttar Pradesh, contributing to the Saubhagya Yojana for universal household electrification.
                </li>
                <li>
                  <span className="font-semibold">Affordable Access:</span> Under Saubhagya, free electricity connections are provided to poor households identified through the SECC 2011 data, while other households receive connections at a nominal cost.
                </li>
                <li>
                  <span className="font-semibold">Bridging the Gap:</span> Our efforts ensure equitable access to electricity across India, significantly reducing the number of un-electrified households.
                </li>
              </ul>
            </section>
    
            {/* 3. DTR Installation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">3. DTR Installation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>
                  <span className="font-semibold">Comprehensive Services:</span> AUITS offers a full range of DTR (Distribution Transformer Rectifier) installation services, enhancing the efficiency and reliability of electrical systems.
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Site Assessment & Planning</li>
                    <li>Procurement & Logistics</li>
                    <li>Installation & Integration</li>
                    <li>Testing & Commissioning</li>
                    <li>Documentation & Reporting</li>
                  </ul>
                </li>
              </ul>
            </section>
    
            {/* 4. Meter Installation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">4. Meter Installation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>
                  <span className="font-semibold">Guidelines for Efficiency and Safety:</span> Adhering to proper guidelines ensures optimal functionality and safety for meter installations.
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Residential, Outdoor: 3-1/2 to 6 feet</li>
                    <li>Residential, Indoor: 5 to 6 feet (Special Permission Only)</li>
                    <li>Mobile Home Pedestal: 3-1/2 to 5 feet</li>
                    <li>Free Standing Meter Installations: 5 feet</li>
                    <li>Meter Enclosures with Doors Opening Up: 6 feet</li>
                    <li>Transockets: 5 to 6 feet</li>
                    <li>Non-Residential Installations: 5 to 6 feet</li>
                  </ul>
                </li>
              </ul>
            </section>
    
            {/* 5. Energy Auditing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">5. Energy Auditing</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>
                  <span className="font-semibold">Comprehensive Audits:</span> We conduct thorough inspections and analyses to optimize energy usage and reduce environmental impact.
                </li>
                <li>
                  <span className="font-semibold">Tailored Strategies:</span> We identify inefficiencies and develop customized strategies to minimize energy input without compromising output quality.
                </li>
                <li>
                  <span className="font-semibold">Sustainable Energy Management:</span> Our audits serve as the first step towards sustainable energy management in commercial and industrial real estate.
                </li>
                <li>
                  <span className="font-semibold">Long-term Benefits:</span> Our expertise ensures that each energy audit delivers tangible results, helping businesses achieve their energy conservation goals while contributing to a greener future.
                </li>
              </ul>
            </section>
          </div>
        </div>
      );
}

export default WhatWeOffer