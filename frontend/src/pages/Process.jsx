import React from 'react'
import battery from '../assets/battery.jpg';

const steps = [
  {
    title: 'What does our process look like ?',
    content: 'At Akshat Udyam Innovative Techno Solutions Pvt Ltd (AUITS), our process is designed to provide comprehensive, tailored, and efficient solar energy solutions. Here is a detailed look at how we bring your solar projects to life from start to finish:'
  },
  {
    title: 'Initial Consultation and Assessment',
    content: 'Understanding Your Needs: We begin with a thorough consultation to understand your specific energy requirements, budget, and project goals. Site Evaluation: Our team conducts a detailed site survey to assess the feasibility of solar installation, including evaluating roof conditions, shading, and energy consumption patterns.'
  },
  {
    title: 'Customized Design and Engineering',
    content: 'Tailored Solutions: Based on the site evaluation and your requirements, we design a customized solar system. This includes selecting the appropriate type of solar panels (poly, mono, mono half cut, bifacial), inverters, batteries, and other essential components. Technical Planning: Our engineers create detailed plans and technical drawings to ensure optimal system performance and integration with existing infrastructure.'
  },
  {
    title: 'Procurement of Materials',
    content: 'Quality Assurance: We source high-quality materials from our trusted partners, including renowned manufacturers like WAREE, VIKRAM SOLAR, ADANI GREENS, and TATA POWER, among others. Logistics Coordination: Our procurement team ensures timely delivery of all materials to the project site, adhering to project timelines and specifications.'
  },
  {
    title: 'Installation and Integration',
    content: 'Expert Installation: Our skilled technicians handle the entire installation process, including the placement and alignment of solar panels, wiring, and connection to inverters and batteries. Safety and Compliance: We adhere to all safety standards and regulatory requirements, ensuring a secure and compliant installation process.'
  },
  {
    title: 'Commissioning and Testing',
    content: 'System Activation: Once installed, we conduct rigorous testing and commissioning to verify the system`s functionality and performance. Performance Verification: We ensure that all components work seamlessly together and that the system meets the expected energy output and efficiency standards.'
  },
  {
    title: 'Project Management and Support',
    content: 'Ongoing Communication: Throughout the project, we maintain clear and consistent communication, providing updates and addressing any concerns. Technical Support: Post-installation, we offer comprehensive technical support and maintenance services to ensure long-term system reliability and efficiency.'
  },
];

const Process = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <img
        src={battery}
        alt="Solar Panels"
        className="w-full h-64 object-cover rounded-lg shadow mb-8"
      />
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What does our process look like?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Akshat Udyam Innovative Techno Solutions Pvt Ltd (AUITS), our process is designed to provide comprehensive and efficient solar solutions tailored to your needs.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6  border-l-4"
            onClick={() => window.location.href = `/solar-process/step-${index + 1}`} // example redirection
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process