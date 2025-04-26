import React, { useState } from 'react'
import logo from '../assets/logo.png';
import userpfp from '../assets/userpfp.png';
import dropdown from '../assets/dropdown.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-primary relative'>
            <img className='w-12 cursor-pointer px-1 ml-3' src={logo} alt="Logo" />
            
            {/* Mobile hamburger menu button */}
            <div className='md:hidden mr-4'>
                <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>
            
            {/* Desktop Menu */}
            <ul className='hidden md:flex items-start gap-5 font-medium text-white'>
                <NavLink to={'/'}>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-white' />
                </NavLink>
                <NavLink to={'/About'}>
                    <li className='py-1'>About Us</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-white' />
                </NavLink>
                <NavLink to={'/Blog'}>
                    <li className='py-1'>Blogs</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-white' />
                </NavLink>
                <NavLink to={'/Products'}>
                    <li className='py-1'>Products</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-white' />
                </NavLink>
            </ul>
            
            {/* Mobile Menu (Overlay) */}
            {showMenu && (
                <div className='absolute top-full left-0 right-0 bg-primary shadow-lg py-4 md:hidden z-30'>
                    <ul className='flex flex-col items-center gap-4 font-medium text-white'>
                        <NavLink to={'/'} onClick={() => setShowMenu(false)}>
                            <li className='py-2'>Home</li>
                        </NavLink>
                        <NavLink to={'/About'} onClick={() => setShowMenu(false)}>
                            <li className='py-2'>About Us</li>
                        </NavLink>
                        <NavLink to={'/Blog'} onClick={() => setShowMenu(false)}>
                            <li className='py-2'>Blogs</li>
                        </NavLink>
                        <NavLink to={'/Products'} onClick={() => setShowMenu(false)}>
                            <li className='py-2'>Products</li>
                        </NavLink>
                        {!token && (
                            <li>
                                <button onClick={() => {navigate('/Login'); setShowMenu(false);}} 
                                    className='bg-[#EE0000] px-5 py-1 rounded-full text-primary text-lg hover:bg-red-600 transition-all duration-300'>
                                    Login
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            )}
            
            {/* User profile or login button */}
            <div className='flex items-center gap-4 mr-4'>
                {token ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={userpfp} alt="pfp" />
                        <img className='w-3 mr-2 hidden md:block' src={dropdown} alt="dropdown" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('Profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('MyAppointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/Login')} className='hidden md:flex items-center bg-[#EE0000] px-5 py-1 rounded-full text-primary text-lg hover:bg-red-600 transition-all duration-300'>
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar