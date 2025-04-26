import React from 'react'
import bgimg from '../assets/bgimg.png';
import arrow from '../assets/arrow.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* -------left side------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight animate-slideUp'>
            Solar <p className='inline text-[#EE0000]'>Solutions</p><br /> for a Sustainable Tomorrow.
            </p>
            <NavLink to={'/Login'}  onClick={()=>{navigate('/Login'); scrollTo(0,0)}} className='flex items-center gap-2 bg-[#EE0000] px-8 py-3 rounded-full text-primary text-lg m-auto md:m-0 hover:scale-110 transition-all duration-300 '>
            Book appointments <img className='w-5' src={arrow} alt="" />
            </ NavLink> 
        </div>

        {/* -------Right side------ */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={bgimg} alt="" />
        </div>
    </div>
  )
}

export default Header