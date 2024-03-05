import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './images/logo.png'; 
import Registration from './Registration';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Link to="/"><img src={LogoImage} alt="Logo" className=" h-24 mr-10" /> </Link>
      </div>
      <div className="hidden md:flex flex-grow justify-end items-center space-x-10">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/team" className="mr-4">Team</Link>
        <Link to="/event">Event</Link>
        <Link to="/registration" className='mr-4'>Register </Link>
      </div>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-black text-white py-4 px-2">
          <Link to="/" className="block mb-2">Home</Link>
          <Link to="/about" className="block mb-2">About</Link>
          <Link to="/team" className="block mb-2">Team</Link>
          <Link to="/event" className="block">Event</Link>
          <Link to="/registration" className='block mb-2'>Register </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
